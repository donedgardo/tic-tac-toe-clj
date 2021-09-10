(ns tic-tac-toe-core.helpers-spec
  (:require
    [tic-tac-toe-core.rules :refer [play]]
    [tic-tac-toe-core.constants :refer [new-game]]))

(def tie-game
  (-> new-game
      (play [2 1])
      (play [0 1])
      (play [0 0])
      (play [1 1])
      (play [0 2])
      (play [1 2])
      (play [1 0])
      (play [2 0])
      (play [2 2])))

(defn play-many [game moves]
  (loop [game game
         moves moves]
    (cond
      (empty? moves)
      game
      :else
      (recur
        (play game (first moves))
        (drop 1 moves)))))