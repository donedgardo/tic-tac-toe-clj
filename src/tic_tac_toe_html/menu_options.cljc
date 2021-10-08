(ns tic-tac-toe-html.menu-options
  (:require
    [tic-tac-toe-core.intl :refer [INTL]]
    [tic-tac-toe-core.play_options :refer [play-mode-options]]
    ))

(defn menu-options [title options on-select]
  [:div
   [:h2 title]
   (for [{:keys [label value aria-label]} options]
     [:button
      {:key        aria-label
       :aria-label aria-label
       :on-click   #(on-select value)} label])])

(defn play-mode-menu [on-select]
  (menu-options (:play-mode-options-title INTL)
   (for [option play-mode-options]
     (merge option {:aria-label (str (:value option) "-mode")}))
   on-select))