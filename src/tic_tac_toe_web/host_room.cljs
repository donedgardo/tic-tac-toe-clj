(ns tic-tac-toe-web.host-room
  (:require
    [reagent.core :as reagent :refer [atom]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [tic-tac-toe-core.constants :refer [X]]
    [tic-tac-toe-web.board :refer [tic-tac-toe-board]]
    [tic-tac-toe-web.network-util
     :refer [create-ipfs-node
             connect-to-peer
             publish-msg
             handle-play
             create-join-link
             handle-reset
             log-messages
             get-my-addresses
             subscribe-to-topic
             get-peer-ids
             peers-list]]))

(defonce interval (atom 0))

(defn host-room [room-name on-host]
  (go
    (let [node (<p! (create-ipfs-node))]
      (reset!
        interval
        (js/setInterval
          #(do
             (go
               (let [peer-ids (<p! (get-peer-ids node room-name))
                     my-addresses (get-my-addresses (<p! (.id node)))]
                 (on-host node my-addresses peer-ids))))
          2000)))))


(defn host-game [room-id go-back]
  (let [network-state (atom {:node nil :my-addresses [] :peer-ids [] :opponent nil})
        on-play #(handle-play (:node @network-state) room-id %)
        on-reset #(handle-reset (:node @network-state) room-id)
        on-host (fn [node my-addresses peer-ids]
                  (cond
                    (empty? peer-ids)
                    (swap! network-state assoc :node node :my-addresses my-addresses :peer-ids [] :opponent nil)
                    (nil? (:opponent @network-state))
                    (swap! network-state assoc :node node :my-addresses my-addresses :peer-ids peer-ids :opponent (first peer-ids))
                    :else
                    (swap! network-state assoc :node node :my-addresses my-addresses :peer-ids peer-ids)))
        thing (host-room room-id on-host)]
    (reagent/create-class
      {:display-name
       "host-game"
       :component-will-unmount
       (fn [this]
         (go
           (try
             (js/clearInterval @interval)
             (<p! (.stop (:node @network-state)))
             (<p! (. (. (:node @network-state) -pubsub) (unsubscribe room-id))))))
       :reagent-render
       (fn []
         [:div {:aria-label "loading-room"}
          (cond
            (empty? (:my-addresses @network-state))
            [:p "Creating Room..."]
            (nil? (:opponent @network-state))
            [:div
             [:p "Waiting for opponent.."]
             [:p
              {:aria-label "room-id"}
              (str "Share this address with your opponent ")]
             [:span (create-join-link (first (:my-addresses @network-state)) room-id)]]
            :else
            [:div "Playing as X"
             [tic-tac-toe-board
              go-back
              {:online
               {:play     on-play
                :reset    on-reset
                :player   X
                :node     (:node @network-state)
                :room-id  room-id
                }}]])])})))

