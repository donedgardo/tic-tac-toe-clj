(ns ^:figwheel-hooks tic-tac-toe-web.core
  (:require
    [tic-tac-toe-clj.constants :refer [new-game X]]
    [tic-tac-toe-clj.ai :refer [get-best-move get-random-move]]
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
            :on-click   on-back} "Play Options"])

(defn handle-user-play [space on-play game game-options]
  (let [{:keys [play-mode ai-play]} game-options]
    (cond
      (= :ai play-mode)
      (do
        (on-play space)
        (on-play (ai-play (play game space))))
      :else
      (on-play space))))


(defn tic-tac-toe-board [& [on-back options]]
  (let [{:keys [first-player play-mode ai-play]} options
        game (if
               (and (= :ai play-mode)
                    (= :ai first-player))
               (atom (play new-game (ai-play new-game)))
               (atom new-game))
        on-play #(swap! game play %)]
    (fn []
      [:div.game
       (let [board (:board @game)
             spaces (sort (keys board))]
         [:div.board
          (for [space spaces]
            (board-space board space #(handle-user-play space on-play @game options)))
          [:div
           [player-turn @game]
           [game-over @game]
           [reset-button #(reset! game new-game)]
           [play-options-menu on-back]]])])))

(defn menu-option [title options on-select]
  [:div
   [:h2 title]
   (for [{:keys [label value aria-label]} options]
     [:button
      {:aria-label aria-label
       :on-click   #(on-select value)} label])])

(defn difficulty-ai-menu [on-select]
  [menu-option "Select AI difficulty"
   [{:label      "EASY"
     :value      get-random-move
     :aria-label "easy-ai-difficulty"}
    {:label      "HARD"
     :value      get-best-move
     :aria-label "hard-ai-difficulty"}]
   on-select])

(defn play-mode-menu [on-select]
  [menu-option "Select Play Mode!"
   [{:label      "Play Against Local Player"
     :aria-label "play-local-player"
     :value      :local}
    {:label      "Play Against AI Player"
     :aria-label "play-ai-player"
     :value      :ai}]
   on-select])

(defn goes-first-menu [on-select]
  [menu-option "Who Goes First?"
   [{:label      "I Go First!"
     :aria-label "player-goes-first"
     :value      :player}
    {:label      "AI Goes First!"
     :aria-label "ai-goes-first"
     :value      :ai}]
   on-select])

(defn play-menu []
  (let [options (atom {:play-mode nil :ai-play nil :first-player nil})
        go-back-to-menu #(swap! options assoc :play-mode nil :ai-play nil :first-player nil)]
    (fn []
      (cond
        (nil? (:play-mode @options))
        [play-mode-menu #(swap! options assoc :play-mode %)]
        (and (= :ai (:play-mode @options))
             (nil? (:ai-play @options)))
        [difficulty-ai-menu #(swap! options assoc :ai-play %)]
        (and (= :ai (:play-mode @options))
             (nil? (:first-player @options)))
        [goes-first-menu #(swap! options assoc :first-player %)]
        :else
        [tic-tac-toe-board go-back-to-menu @options]))))

(defn mount [el]
  (rdom/render
    [play-menu]
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
