(ns tic-tac-toe-html.menu-options
  (:require
    [tic-tac-toe-core.intl :refer [INTL]]
    [tic-tac-toe-core.play_options :refer
     [play-mode-options difficulty-options goes-first-options]]))

(defn menu-options-links [title options]
  [:div
   [:h2 title]
   (for [{:keys [href aria-label label]} options]
     [:a.button
      {:key        aria-label
       :aria-label aria-label
       :href       href} label])])

(defn menu-options-buttons [title options on-select]
  [:div
   [:h2 title]
   (for [{:keys [label value aria-label]} options]
     [:a.button
      {:key        aria-label
       :aria-label aria-label
       :on-click   #(on-select value)} label])])

(def play-options-with-aria-label
  (for [option play-mode-options]
    (merge option {:aria-label (str (:value option) "-mode")})))

(defn play-mode-menu
  ([]
   (menu-options-links
     (:play-mode-options-title INTL)
     play-options-with-aria-label))
  ([on-select]
   (menu-options-buttons
     (:play-mode-options-title INTL)
     play-options-with-aria-label
     on-select)))

(def difficulty-options-with-aria-label
  (for [option difficulty-options]
    (merge option {:aria-label (str (:label option) "-ai-difficulty")})))

(defn difficulty-ai-menu
  ([]
   (menu-options-links
     (:difficulty-option-title INTL)
     difficulty-options-with-aria-label))
  ([on-select]
   (menu-options-buttons
     (:difficulty-option-title INTL)
     difficulty-options-with-aria-label
     on-select)))

(def goes-first-options-with-aria-label
  (for [option goes-first-options]
    (merge option {:aria-label (str (:value option) "-goes-first")})))

(defn goes-first-menu
  ([]
   (menu-options-links
     (:goes-first-option-title INTL)
     goes-first-options-with-aria-label))
  ([on-select]
   (menu-options-buttons
     (:goes-first-option-title INTL)
     goes-first-options-with-aria-label
     on-select)))