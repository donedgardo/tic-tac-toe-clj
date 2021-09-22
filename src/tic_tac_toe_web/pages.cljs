(ns ^:figwheel-hooks tic-tac-toe-web.pages
  (:require
    [tic-tac-toe-web.create-game :refer [create-game]]))

(defn join-game [address room-name]
  [:div
   [:div "Loading..."]
   [:div (str address room-name)]])

;; PAGES
(defn home-page [ratom]
  [create-game])

(defn join-game-page [address room-name]
  [join-game address room-name])