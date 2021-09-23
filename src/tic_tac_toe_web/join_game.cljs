(ns tic-tac-toe-web.join-game
  (:require
    [reagent.core :refer [atom]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [tic-tac-toe-core.constants :refer [O]]
    [tic-tac-toe-web.board :refer [tic-tac-toe-board]]
    [tic-tac-toe-web.network-util
     :refer [create-ipfs-node
             connect-to-peer
             log-messages
             get-peer-ids
             peers-list
             get-my-addresses
             subscribe-to-topic
             publish-msg]]))

(defn join-room [peer-address room-name on-join]
  (go
    (let [node (<p! (create-ipfs-node))
          my-addresses (get-my-addresses (<p! (.id node)))
          peer-connection (<p! (connect-to-peer node peer-address))
          subscription (<p! (subscribe-to-topic node room-name log-messages))]
      (js/setInterval #(do
                         (go
                           (let [peer-ids (<p! (get-peer-ids node room-name))]
                             (on-join node peer-ids))))
                      2000))))


(defn join-game [peer-address room-id]
  (let [network-state (atom {:node nil :peer-ids [] :opponent nil})
        on-join (fn [node peer-ids]
                  (cond
                    (= 0 (count peer-ids))
                    (swap! network-state assoc :node node :peer-ids [] :opponent nil)
                    (nil? (:opponent @network-state))
                    (swap! network-state assoc :node node :peer-ids peer-ids :opponent (first peer-ids))
                    :else
                    (swap! network-state assoc :node node :peer-ids peer-ids)))
        interval (join-room peer-address room-id on-join)
        on-play #(publish-msg (:node @network-state) room-id (js/JSON.stringify (clj->js {:type "play" :board-space % })))
        on-reset #(publish-msg (:node @network-state) room-id (js/JSON.stringify (clj->js {:type "reset" })))]
    (fn []
      [:div
       ;; joining room
       ;; game on
       (cond
         (nil? (:opponent @network-state))
         [:p {:aria-label "join-room-loading"} "Joining Room..."]
         :else
         [tic-tac-toe-board #(%) {:online {:play on-play :reset on-reset :player O :node (:node @network-state) :room-id room-id }}]
         )])))
