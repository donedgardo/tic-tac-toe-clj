(ns ^:figwheel-hooks tic-tac-toe-web.core
  (:require
    [tic-tac-toe-core.constants :refer [X default-game-options]]
    [tic-tac-toe-core.ai :refer [get-best-move get-random-move]]
    [tic-tac-toe-core.play_options :refer [difficulty-options play-mode-options goes-first-options]]
    [tic-tac-toe-core.intl :refer [INTL get-winner-announcement get-player-turn-label]]
    [tic-tac-toe-core.rules :refer [play]]
    [tic-tac-toe-web.create-room :refer [create-room]]
    [tic-tac-toe-core.core :refer [create-game-factory]]
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom]))

(defn get-app-element []
  (gdom/getElement "app"))

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
    [:p (get-player-turn-label (:active-player game))]))

(defn play-options-menu [on-back]
  [:button {:aria-label "play-options-menu"
            :on-click   on-back} "Play Options"])

(defn tic-tac-toe-board [& [on-back options]]
  (let [{:keys [first-player ai-difficulty]} options
        new-game (create-game-factory {:first-player first-player
                               :ai-difficulty        ai-difficulty})
        game (atom new-game)
        on-play #(swap! game play %)]
    (fn []
      [:div.game
       (let [board (:board @game)
             spaces (sort (keys board))]
         [:div.board
          (for [space spaces]
            (board-space board space #(on-play space)))
          [:div
           [player-turn @game]
           [game-over @game]
           [reset-button #(reset! game new-game)]
           [play-options-menu on-back]]])])))

(defn menu-option [title options on-select]
  [:div
   [create-room]
   [:h2 title]
   (for [{:keys [label value aria-label]} options]
     [:button
      {:key aria-label
       :aria-label aria-label
       :on-click   #(on-select value)} label])])

(defn difficulty-ai-menu [on-select]
  [menu-option (:difficulty-option-title INTL)
   (for [option difficulty-options]
     (merge option {:aria-label (str (:label option) "-ai-difficulty")}))
   on-select])

(defn play-mode-menu [on-select]
  [menu-option (:play-mode-options-title INTL)
   (for [option play-mode-options]
     (merge option {:aria-label (str (:value option) "-mode")}))
   on-select])

(defn goes-first-menu [on-select]
  [menu-option (:goes-first-option-title INTL)
   (for [option goes-first-options]
     (merge option {:aria-label (str (:value option) "-goes-first")}))
   on-select])

(defn play-menu []
  (let [options (atom default-game-options)
        go-back-to-menu #(reset! options default-game-options)]
    (fn []
      (cond
        (nil? (:play-mode @options))
        [play-mode-menu #(swap! options assoc :play-mode %)]
        (and (= :ai (:play-mode @options))
             (nil? (:ai-difficulty @options)))
        [difficulty-ai-menu #(swap! options assoc :ai-difficulty %)]
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
