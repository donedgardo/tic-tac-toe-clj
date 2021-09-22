(ns ^:figwheel-hooks tic-tac-toe-web.core
  (:require
    [tic-tac-toe-web.pages :refer [home-page join-game-page]]
    [tic-tac-toe-web.create-game :refer [create-game]]
    [secretary.core :as secretary :include-macros true]
    [accountant.core :as accountant]
    [goog.dom :as gdom]
    [goog.events :as events]
    [reagent.core :as reagent :refer [atom]]
    [reagent.dom :as rdom])
  (:import [goog History]
           [goog.History EventType]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Initialize App
(def selected-page (atom home-page))

(defn page []
  [@selected-page])

;; -------------------------
;; History
;; must be called after routes have been defined

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen EventType.NAVIGATE #(secretary/dispatch! (.-token %)))
    (.setEnabled true)))


;; -------------------------
;; Routes

(defn app-routes []
  (hook-browser-navigation!)
  (secretary/set-config! :prefix "#")
  (secretary/defroute "/" []
                      (reset! selected-page home-page))
  (secretary/defroute "/#join-game/:room" [room query-params]
                      ;(js/console.log (pr-str query-params))))
                      (reset! selected-page
                              #(join-game-page
                                 (:address query-params)
                                 room))))


;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (js/console.log path)
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))

(defn ^:export main []
  (app-routes)
  (init!))

(main)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
