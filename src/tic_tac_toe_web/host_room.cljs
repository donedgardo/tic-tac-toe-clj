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
             handle-connection
             log-messages
             get-my-addresses
             subscribe-to-topic
             unsubscribe-game
             host-room
             get-peer-ids
             peers-list]]))

(defn host-game [room-id go-back]
  (let [network-state (atom {:node nil :my-addresses [] :peer-ids [] :opponent nil})
        on-play #(handle-play (:node @network-state) room-id %)
        on-reset #(handle-reset (:node @network-state) room-id)
        on-host #(handle-connection network-state %1 %2 %3)]
    (reagent/create-class
      {:display-name
       "host-game"
       :component-did-mount
       (fn []
         (host-room room-id on-host))
       :component-will-unmount
       (fn []
         (unsubscribe-game (:node @network-state) room-id))
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
               {:play    on-play
                :reset   on-reset
                :player  X
                :node    (:node @network-state)
                :room-id room-id}}]])])})))

