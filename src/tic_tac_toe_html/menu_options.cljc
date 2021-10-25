(ns tic-tac-toe-html.menu-options
  (:require
    [tic-tac-toe-core.intl :refer [INTL]]
    [tic-tac-toe-core.play_options :refer
     [play-mode-options difficulty-options goes-first-options]]))

(defn menu-options
  ([title options]
   [:form {:action "/options" :method "POST"}
    [:h2 title]
    (for [{:keys [aria-label value label name]} options]
      [:button.button
       {:key        aria-label
        :name       name
        :value      value
        :aria-label aria-label} label])])
  ([title options on-select]
   [:div
    [:h2 title]
    (for [{:keys [label value aria-label]} options]
      [:button.button
       {:key        aria-label
        :aria-label aria-label
        :on-click   #(on-select value)} label])]))


(def play-options-with-aria-label
  (for [option play-mode-options]
    (merge option {:aria-label (str (:value option) "-mode")})))

(defn play-mode-menu
  ([]
   (menu-options
     (:play-mode-options-title INTL)
     play-options-with-aria-label))
  ([on-select]
   (menu-options
     (:play-mode-options-title INTL)
     play-options-with-aria-label
     on-select)))

(def difficulty-options-with-aria-label
  (for [option difficulty-options]
    (merge option {:aria-label (str (:label option) "-ai-difficulty")})))

(defn difficulty-ai-menu
  ([]
   (menu-options
     (:difficulty-option-title INTL)
     difficulty-options-with-aria-label))
  ([on-select]
   (menu-options
     (:difficulty-option-title INTL)
     difficulty-options-with-aria-label
     on-select)))

(def goes-first-options-with-aria-label
  (for [option goes-first-options]
    (merge option {:aria-label (str (:value option) "-goes-first")})))

(defn goes-first-menu
  ([]
   (menu-options
     (:goes-first-option-title INTL)
     goes-first-options-with-aria-label))
  ([on-select]
   (menu-options
     (:goes-first-option-title INTL)
     goes-first-options-with-aria-label
     on-select)))