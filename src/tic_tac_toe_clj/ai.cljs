(ns tic-tac-toe-clj.ai
  (:require [tic-tac-toe-clj.rules :as rules]
            [tic-tac-toe-clj.constants :as constants]))

(defn score-board [game player]
  (cond
    (= player (:winner game))
    10
    (= (constants/get-opponent player) (:winner game))
    -10
    (:over? game)
    0
    :else
    nil))


(defn minimax [game player depth maximizing?]
  (let [score (score-board game player)
        moves (constants/get-empty-indexes (:board game))]
    (cond
      (not (nil? score))
      score
      (true? maximizing?)
      (->> moves
           (map #(rules/play game %))
           (map #(minimax % player (inc depth) false))
           (apply max)
           (#(- % depth)))
      :else
      (->> moves
           (map #(rules/play game %))
           (map #(minimax % player (inc depth) true))
           (apply min)
           (#(+ % depth))))))

(defn get-random-move [game]
  (rand-nth (constants/get-empty-indexes (:board game))))

(defn get-best-move [game]
  (let [player (:active-player game)]
    (loop [moves (constants/get-empty-indexes (:board game))
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
              (rules/play game (first moves))
              player
              0
              false)))))))
