(ns tic-tac-toe-core.ai
  (:require [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.constants :refer [get-opponent get-empty-indexes] ]))

(defn score-board [game player]
  (cond
    (= player (:winner game))
    10
    (= (get-opponent player) (:winner game))
    -10
    (:over? game)
    0
    :else
    nil))


(defn minimax [game player depth maximizing?]
  (let [score (score-board game player)
        moves (get-empty-indexes (:board game))]
    (cond
      (not (nil? score))
      score
      (true? maximizing?)
      (->> moves
           (map #(play game %))
           (map #(minimax % player (inc depth) false))
           (apply max)
           (#(- % depth)))
      :else
      (->> moves
           (map #(play game %))
           (map #(minimax % player (inc depth) true))
           (apply min)
           (#(+ % depth))))))

(defn get-random-move [game]
  (rand-nth (get-empty-indexes (:board game))))

(defn get-best-move [game]
  (let [player (:active-player game)]
    (loop [moves (get-empty-indexes (:board game))
           scores {}]
      (cond
        (= 9 (count moves))
        (get-random-move game)
        (empty? moves)
        (key (apply max-key val scores))
        :else
        (recur
          (drop 1 moves)
          (assoc scores
            (first moves)
            (minimax
              (play game (first moves))
              player
              0
              false)))))))
