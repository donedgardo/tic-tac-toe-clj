(ns tic-tac-toe-web.board
  (:require
    [reagent.core :refer [atom]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [tic-tac-toe-core.core :refer [create-game-factory]]
    [tic-tac-toe-html.board :refer [board-space player-turn game-over reset-button play-options-menu]]
    [tic-tac-toe-web.network-util :refer [subscribe-to-topic]]
    [tic-tac-toe-core.rules :refer [play]]))

(defn on-play [online game space]
  (if (nil? online)
    (swap! game play space)
    (if (= (:active-player @game) (:player online))
      (do
        (swap! game play space)
        ((:play online) space)))))


(defn handle-reset [online reset-game]
  (do
    (if (not (nil? online))
      ((:reset online)))
    (reset-game)))


(defn reset-game [game new-game]
  (reset! game new-game))

(defn subscribe-to-game [online game new-game]
  (if (not (nil? online))
    (subscribe-to-topic
      (:node online)
      (:room-id online)
      (fn [msg]
        (let [payload (js->clj (.parse js/JSON (. (. msg -data) (toString)) :keywordize-keys true))]
          (js/console.log "payload" payload)
          (cond
            (= (payload "type") "reset")
            (reset-game game new-game)
            (= (payload "type") "play")
            (swap! game play (payload "board-space"))
            :else
            nil))))))

(defn tic-tac-toe-board [& [on-back options]]
  (let [new-game (create-game-factory options)
        online (:online options)
        game (atom new-game)
        handle-play #(on-play online game %)
        subscription (subscribe-to-game online game new-game)]
    (fn []
      [:div.game
       (let [board (:board @game)
             spaces (sort (keys board))]
         [:div.board
          (for [space spaces]
            (board-space board space #(handle-play space)))
          [:div
           [player-turn @game]
           [game-over @game]
           [reset-button #(handle-reset online (fn [] (reset-game game new-game)))]
           [play-options-menu on-back]]])])))