(ns tic-tac-toe-core.leaderboard)

(defn add-tie-points [current-score]
  (float (+ current-score 0.5)))

(defn add-winning-points [current-score]
  (float (inc current-score)))

(defn add-loosing-points [current-score]
  (float (dec current-score)))