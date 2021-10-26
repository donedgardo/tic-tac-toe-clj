(ns tic-tac-toe-html.board
  (:require
    [tic-tac-toe-core.intl :refer [INTL get-player-turn-label get-winner-announcement]]))

(defn board-space
  ([board space]
   (let [mark (board space)]
     [:button.space
      {:key        space
       :id         space
       :name       "space"
       :value      space
       :aria-label (if (nil? mark)
                     (str "empty-board-space-" space)
                     (str mark "-play-" space))}
      mark]))
  ([board space on-space-click]
   (let [mark (board space)]
     [:div.space
      {:key        space
       :id         space
       :on-click   on-space-click
       :aria-label (if (nil? mark)
                     (str "empty-board-space-" space)
                     (str mark "-play-" space))}
      mark])))

(defn player-turn [game]
  (if (:over? game)
    nil
    [:p (get-player-turn-label (:active-player game))]))

(defn game-over [game]
  [:h2 (cond
         (not (nil? (:winner game)))
         (get-winner-announcement (:winner game))
         (:over? game)
         (:cats-game-label INTL)
         :else
         nil)])

(defn reset-button
  ([]
   [:form  {:action "/new-game" :method "POST"}
    [:button
     {:aria-label "reset-game"}
     "New Game"]])
  ([on-reset]
   [:button
    {:aria-label "reset-game"
     :on-click   on-reset}
    "New Game"]))

(defn play-options-menu
  ([]
   [:form {:action "/reset" :method "POST"}
    [:button
     {:aria-label "play-options-menu"
      :name "reset" :value true} "Play Options"]])
  ([on-back]
   [:button
    {:aria-label "play-options-menu"
     :on-click   on-back} "Play Options"]))