(ns tic-tac-toe-web.host-room
  (:require
    [reagent.core :refer [atom]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [tic-tac-toe-core.constants :refer [X]]
    [tic-tac-toe-web.board :refer [tic-tac-toe-board]]
    [tic-tac-toe-web.network-util
     :refer [create-ipfs-node
             connect-to-peer
             publish-msg
             log-messages
             get-my-addresses
             subscribe-to-topic
             get-peer-ids
             peers-list]]))

(defn host-room [room-name on-host]
  (go
    (let [node (<p! (create-ipfs-node))
          my-addresses (get-my-addresses (<p! (.id node)))]
      (js/setInterval #(do
                         (go
                           (let [peer-ids (<p! (get-peer-ids node room-name))]
                             (on-host node my-addresses peer-ids))))
                      2000))))

(defn create-join-link [address room-id]
  (str (.. js/window -location -href) "#join-game/" room-id "?address=" address))

(defn handle-play [node room-id space]
  (publish-msg node room-id (js/JSON.stringify (clj->js {:type "play" :board-space space }))))

(defn handle-reset [node room-id]
  (publish-msg node room-id (js/JSON.stringify (clj->js {:type "reset" }))))

(defn host-game [room-id go-back]
  (let [network-state (atom {:node nil :my-addresses [] :peer-ids [] :opponent nil})
        on-host (fn [node my-addresses peer-ids]
                  (cond
                    (empty? peer-ids)
                    (swap! network-state assoc :node node :my-addresses my-addresses :peer-ids [] :opponent nil)
                    (nil? (:opponent @network-state))
                    (swap! network-state assoc :node node :my-addresses my-addresses :peer-ids peer-ids :opponent (first peer-ids))
                    :else
                    (swap! network-state assoc :node node :my-addresses my-addresses :peer-ids peer-ids)))
        internal (host-room room-id on-host)
        on-play #(handle-play (:node @network-state) room-id %)
        on-reset #(handle-reset (:node @network-state) room-id)]
(fn []
      [:div {:aria-label "loading-room"}
       ;; Wait to create room
       (cond
         (= 0 (count (:my-addresses @network-state)))
         [:p "Creating Room..."]
         (nil? (:opponent @network-state))
         [:div
          [:p "Waiting for opponent.."]
          [:p
           {:aria-label "room-id"}
           (str "Share this address with your opponent ")]
          [:span (create-join-link (first (:my-addresses @network-state)) room-id)]]
         :else
         [:div "Game on"
          [tic-tac-toe-board go-back {:online {:play on-play :reset on-reset :player X :node (:node @network-state) :room-id room-id}}]]
         )])))

