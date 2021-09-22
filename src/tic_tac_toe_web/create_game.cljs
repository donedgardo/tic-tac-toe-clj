(ns tic-tac-toe-web.create-game
  (:require
    [reagent.core :as reagent :refer [atom]]
    [tic-tac-toe-core.constants :refer [default-game-options]]
    [tic-tac-toe-core.intl :refer [INTL get-winner-announcement get-player-turn-label]]
    [tic-tac-toe-core.play_options :refer [difficulty-options play-mode-options goes-first-options online-options]]
    [tic-tac-toe-web.host-room :refer [host-game]]
    [tic-tac-toe-web.board :refer [tic-tac-toe-board]]
    ))

(defn menu-option [title options on-select]
  [:div
   [:h2 title]
   (for [{:keys [label value aria-label]} options]
     [:button
      {:key        aria-label
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

(defn online-vs-menu [on-select]
  [menu-option (:online-options-title INTL)
   (for [option online-options]
     (merge option {:aria-label (:value option)}))
   on-select])

(defn create-room-form [on-create]
  (let [room-name (atom "")]
    (fn []
      [:div
       [:label (:create-room-name-label INTL)]
       [:input {:aria-label "new-room-input"
                :type       "text"
                :value      @room-name
                :on-change  #(reset! room-name (-> % .-target .-value))}]
       [:button {:aria-label "create-room-button"
                 :disabled   (= "" @room-name)
                 :on-click   #(on-create @room-name)}
        (:create-room-button INTL)]])))


(defn create-game []
  (let [options (atom default-game-options)
        go-back-to-menu #(reset! options default-game-options)]
    (fn []
      (let [{:keys [play-mode ai-difficulty first-player online-mode room-id]} @options
            ai-mode? (= :ai play-mode)
            online-mode? (= :online-vs play-mode)
            hosting-game? (= :host-game online-mode)]
        (cond
          (nil? (:play-mode @options))
          [play-mode-menu #(swap! options assoc :play-mode %)]
          (and ai-mode?
               (nil? ai-difficulty))
          [difficulty-ai-menu #(swap! options assoc :ai-difficulty %)]
          (and ai-mode?
               (nil? first-player))
          [goes-first-menu #(swap! options assoc :first-player %)]
          (and online-mode?
               (nil? online-mode))
          [online-vs-menu #(swap! options assoc :online-mode %)]
          (and online-mode?
               hosting-game?
               (nil? room-id))
          [create-room-form #(swap! options assoc :room-id %)]
          (and online-mode?
               hosting-game?
               (not (nil? room-id)))
          [host-game room-id go-back-to-menu]
          :else
          [tic-tac-toe-board go-back-to-menu @options])))))