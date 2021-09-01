(ns ^:figwheel-hooks tic-tac-toe-web.core
  (:require
   [tic-tac-toe-clj.constants :as tic-tac-toe]
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:game tic-tac-toe/new-game}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   [:h1 (str "Winner" (:winner (:game @app-state)))]
   [:h3 "Tic tac toe ish"]
   [:h3 (str "Game over" (:over? (:game @app-state)))]])

(defn mount [el]
  (rdom/render [hello-world] el))

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
