(ns tic-tac-toe-core.constants)

(def empty-board
  {[0 0] nil [0 1] nil [0 2] nil
   [1 0] nil [1 1] nil [1 2] nil
   [2 0] nil [2 1] nil [2 2] nil})

(def X "X")
(def O "O")

(def new-game
  {:board         empty-board
   :winner        nil
   :over?         false
   :active-player X
   :ai-play       nil})


(def player-symbols [X O])

(def play-modes
  {:ai "ai"
   :local "local"
   :online-vs :online-vs})

(def ai-difficulties
  {:easy "easy"
   :hard "hard"})

(def default-game-options
  {:play-mode     nil
   :first-player  nil
   :online-mode   nil
   :ai-difficulty nil})


(defn get-opponent [player]
  (->> player-symbols
       (filter #(not (= player %)))
       first))

(defn get-empty-indexes [board]
  (let [indexes (keys board)]
    (->> indexes
         (filter #(nil? (board %))))))

