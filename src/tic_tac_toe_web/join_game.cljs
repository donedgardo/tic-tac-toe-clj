(ns tic-tac-toe-web.join-game
  (:require
    [reagent.core :as reagent :refer [atom]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [tic-tac-toe-core.constants :refer [O]]
    [tic-tac-toe-web.board :refer [tic-tac-toe-board]]
    [tic-tac-toe-web.network-util
     :refer [create-ipfs-node
             connect-to-peer
             handle-play
             handle-reset
             log-messages
             get-peer-ids
             peers-list
             get-my-addresses
             subscribe-to-topic
             publish-msg]]))

(defonce interval (atom 0))

(defn join-room [peer-address room-name on-join]
  (go
    (let [node (<p! (create-ipfs-node))
          peer-connection (<p! (connect-to-peer node peer-address))
          subscription (<p! (subscribe-to-topic node room-name log-messages))]
      (reset!
        interval
        (js/setInterval
          #(do
             (go
               (let [peer-ids (<p! (get-peer-ids node room-name))]
                 (on-join node peer-ids))))
          2000)))))

(defn handle-join [network-state node peer-ids]
  (cond
    (empty? peer-ids)
    (swap! network-state assoc :node node :peer-ids [] :opponent nil)
    (nil? (:opponent @network-state))
    (swap! network-state assoc :node node :peer-ids peer-ids :opponent (first peer-ids))
    :else
    (swap! network-state assoc :node node :peer-ids peer-ids)))

(defn join-game [peer-address room-id]
  (let [network-state (atom {:node nil :peer-ids [] :opponent nil})
        on-play #(handle-play (:node @network-state) room-id %)
        on-reset #(handle-reset (:node @network-state) room-id)
        on-join #(handle-join network-state %1 %2)
        thing (join-room peer-address room-id on-join)]
    (reagent/create-class
      {:display-name
       "join-game"
       :component-will-unmount
       (fn [this]
         (go
           (try
             (js/clearInterval @interval)
             (<p! (.stop (:node @network-state)))
             (<p! (. (. (:node @network-state) -pubsub) (unsubscribe room-id))))))
       :reagent-render
       (fn []
         [:div
          (cond
            (nil? (:opponent @network-state))
            [:p {:aria-label "join-room-loading"} "Joining Room..."]
            :else
            [:div "Playing as O"
             [tic-tac-toe-board
              #(%)
              {:online
               {:play     on-play
                :reset    on-reset
                :player   O
                :node     (:node @network-state)
                :room-id  room-id
                :interval interval}}]])])})))
