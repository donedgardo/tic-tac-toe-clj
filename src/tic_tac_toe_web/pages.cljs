(ns ^:figwheel-hooks tic-tac-toe-web.pages
  (:require
    [tic-tac-toe-web.create-game :refer [create-game]]
    [tic-tac-toe-web.join-game :refer [join-game]]))

;; PAGES
(defn home-page [ratom]
  [create-game])

(defn join-game-page [address room-name]
  [join-game address room-name])