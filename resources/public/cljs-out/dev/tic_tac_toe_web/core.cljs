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

(defn tic-tac-toe-game []
  (let [game (atom new-game)]
    (fn []
      (let [board (:board @game)
            spaces (sort (keys board))]
        [:div
         (for [space spaces]
           (let [mark ((:board @game) space)]
             [:div.space
              {:key        space
               :id         space
               :on-click   #(swap! game play space X)
               :aria-label (if (nil? mark)
                             (str "empty-board-space-" space)
                             (str mark "-play-" space))}
              mark]))
         [game-over @game]]))))


(defn mount [el]
  (rdom/render
    [tic-tac-toe-game]
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
