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
             handle-connection
             handle-reset
             log-messages
             get-peer-ids
             peers-list
             get-my-addresses
             join-room
             unsubscribe-game
             subscribe-to-topic
             publish-msg]]))

(defn join-game [peer-address room-id]
  (let [network-state (atom {:node nil :my-addresses [] :peer-ids [] :opponent nil})
        on-play #(handle-play (:node @network-state) room-id %)
        on-reset #(handle-reset (:node @network-state) room-id)
        on-join #(handle-connection network-state %1 %2 %3)]
    (reagent/create-class
      {:display-name
       "join-game"
       :component-did-mount
       (fn []
         (join-room peer-address room-id on-join))
       :component-will-unmount
       (fn []
         (unsubscribe-game (:node @network-state) room-id))
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
                :room-id  room-id}}]])])})))
