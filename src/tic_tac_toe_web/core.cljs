(ns ^:figwheel-hooks tic-tac-toe-web.core
  (:require
    [tic-tac-toe-clj.constants :refer [new-game X]]
    [tic-tac-toe-clj.rules :refer [play]]
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom]))

(defn get-app-element []
  (gdom/getElement "app"))

(defn game-over [game]
  [:h2 (cond
         (not (nil? (:winner game)))
         (str (:winner game) " Wins!")
         (:over? game)
         (str "Game Over!")
         :else
         nil)])

(defn reset-button [on-reset]
  [:button {:aria-label "reset-game"
            :on-click   on-reset} "New Game"])

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

(defn player-turn [game]
  (if (:over? game)
    nil
    [:p (str "Player " (:active-player game) "'s Turn!")]))

(defn play-options-menu [on-back]
  [:button {:aria-label "play-options-menu"
            :on-click on-back} "Play Options"])

(defn tic-tac-toe-board [& [on-back]]
  (let [game (atom new-game)]
    (fn []
      [:div.game
       (let [board (:board @game)
             spaces (sort (keys board))]
         [:div.board
          (for [space spaces]
              (board-space board space #(swap! game play space)))
          [:div
           [player-turn @game]
           [game-over @game]
           [play-options-menu on-back]
           [reset-button #(reset! game new-game)]]])])))

(defn play-options []
  (let [options (atom {:play-mode nil})]
    (fn []
      (cond
        (nil? (:play-mode @options))
        [:div
         [:button {:aria-label "play-local-player"
                   :on-click   #(swap! options assoc :play-mode :local)}
          "Play Against Local Player"]
         [:button {:aria-label "play-ai-player"}
          "Play Against AI Player"]]
        :else
        [tic-tac-toe-board #(swap! options assoc :play-mode nil)]))))

(defn mount [el]
  (rdom/render
    [play-options]
    el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))


;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
