(ns tic-tac-toe-clj.constants)

(def empty-board
  {[0 0] nil [0 1] nil [0 2] nil
   [1 0] nil [1 1] nil [1 2] nil
   [2 0] nil [2 1] nil [2 2] nil})

(def new-game
  {:board empty-board
   :winner nil
   :over? false})

(def X "X")
(def O "O")

(def player-symbols [X O])

(defn get-opponent [player]
  (->> player-symbols
       (filter #(not (= player %)))
       first))

(defn get-empty-indexes [board]
  (let [indexes (keys board)]
    (->> indexes
         (filter #(nil? (board %))))))

