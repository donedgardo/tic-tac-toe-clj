(ns ^:figwheel-hooks tic-tac-toe-web.network-util
  (:require
    [cljs.core.async :refer [go]]
    [reagent.core :refer [atom]]
    [cljs.core.async.interop :refer-macros [<p!]]))

(def room-state (atom {:node nil :my-addresses [] :peer-ids [] :opponent-address nil :msg-input nil}))

(defn get-peer-ids [node topic]
  (. (. node -pubsub) (peers topic)))

(defn create-ipfs-node []
  (.create js/Ipfs
           (clj->js {:config
                     {:Addresses
                      {:Swarm
                       ["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star"
                        "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star"]}}
                     })))


(defn connect-to-peer [node multiaddr]
  (. (. node -swarm) (connect multiaddr)))

(defn subscribe-to-topic [node topic handle-message]
  (. (. node -pubsub) (subscribe topic handle-message)))

(defn publish-msg [node topic msg]
  (. (. node -pubsub) (publish topic msg)))

(defn create-join-link [address room-id]
  (str (.. js/window -location -href) "#join-game/" room-id "?address=" address))

(defn handle-play [node room-id space]
  (publish-msg node room-id (js/JSON.stringify (clj->js {:type "play" :board-space space }))))

(defn handle-reset [node room-id]
  (publish-msg node room-id (js/JSON.stringify (clj->js {:type "reset" }))))

(defn log-messages [msg]
  (js/console.log (. (. msg -data) (toString))))

(defn get-my-addresses [id]
  (map #(.toString %) (. id -addresses)))

(defn create-ipfs-util [topic handle-messages]
  (go
    (let [node (<p! (create-ipfs-node))
          my-addresses (get-my-addresses (<p! (.id node)))
          subscription (<p! (subscribe-to-topic node topic handle-messages))
          interval (js/setInterval #(do
                                      (go
                                        (let [peer-ids (<p! (get-peer-ids node topic))]
                                          (swap! room-state assoc :node node :my-addresses my-addresses :peer-ids peer-ids))))
                                   3000)]
      node)))

(defn connect-to-peer-form [node address]
  (fn []
    [:div
     [:label "Opponents Address"]
     [:input {:type        "text"
              :value       (:opponent-address @room-state)
              :on-change   #(swap! room-state assoc :opponent-address (-> % .-target .-value))
              :placeholder "Opponents Address"}]
     [:button {:on-click #(connect-to-peer node address)} "Connect to Opponent"]]))

(defn send-msg-form [topic]
  (fn []
    [:div
     [:label "Send Message"]
     [:input {:type        "text"
              :value       (:msg-input @room-state)
              :on-change   #(swap! room-state assoc :msg-input (-> % .-target .-value))
              :placeholder "Chat..."}]
     [:button {:on-click #(publish-msg (:node @room-state) topic (:msg-input @room-state))} "Send Message"]]))

(defn peers-list [peer-ids]
  [:ul
   (for [peer peer-ids]
     [:li {:key peer} peer])])

(defn network-utils []
  (let [topic "clean-tic-tac-toe"
        node (create-ipfs-util topic log-messages)]
    (fn []
      [:div
       [:div "My Address: "
        [:ul
         (for [address (:my-addresses @room-state)]
           [:li {:key address} address])]
        [:div "Connected Peers: "
         [peers-list (:peer-ids @room-state)]
         [:div [connect-to-peer-form node (:opponent-address @room-state)]]
         [:div [(send-msg-form topic)]]]]])))

