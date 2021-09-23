(ns tic-tac-toe-web.board
  (:require
    [reagent.core :as reagent :refer [atom]]
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]
    [tic-tac-toe-core.core :refer [create-game-factory]]
    [tic-tac-toe-web.network-util :refer [subscribe-to-topic]]
    [tic-tac-toe-core.intl :refer [INTL get-winner-announcement get-player-turn-label]]
    [tic-tac-toe-core.rules :refer [play]]
    ))

(defn board-space [board space on-space-click]
  (let [mark (board space)]
    [:div.space
     {:key        space
      :id         space
      :on-click   on-space-click
      :aria-label (if (nil? mark)
                    (str "empty-board-space-" space)
                    (str mark "-play-" space))}
     mark]))

(defn game-over [game]
  [:h2 (cond
         (not (nil? (:winner game)))
         (get-winner-announcement (:winner game))
         (:over? game)
         (:cats-game-label INTL)
         :else
         nil)])

(defn reset-button [on-reset]
  [:button {:aria-label "reset-game"
            :on-click   on-reset} "New Game"])

(defn player-turn [game]
  (if (:over? game)
    nil
    [:p (get-player-turn-label (:active-player game))]))

(defn play-options-menu [on-back]
  [:button {:aria-label "play-options-menu"
            :on-click   on-back} "Play Options"])

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

(defn tic-tac-toe-board [& [on-back options]]
  (let [{:keys [first-player ai-difficulty online]} options
        new-game (create-game-factory {:first-player  first-player
                                       :ai-difficulty ai-difficulty})
        game (atom new-game)
        handle-play #(on-play online game %)
        reset-game #(reset! game new-game)
        subscription (if (not (nil? online))
                       (subscribe-to-topic
                         (:node online)
                         (:room-id online)
                         (fn [msg]
                           (let [payload (js->clj (.parse js/JSON (. (. msg -data) (toString)) :keywordize-keys true))]
                             (js/console.log "payload" payload)
                             (cond
                               (= (payload "type") "reset")
                               (reset-game)
                               (= (payload "type") "play")
                               (swap! game play (payload "board-space"))
                               :else
                               nil))))
                       )]
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
           [reset-button #(handle-reset online reset-game)]
           [play-options-menu on-back]]])])))