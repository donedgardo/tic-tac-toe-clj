(ns tic-tac-toe-core.leaderboard)

(defn add-tie-points [current-score]
  (+ current-score 0.5))

(defn add-winning-points [current-score]
  (inc current-score))

(defn add-loosing-points [current-score]
  (dec current-score))