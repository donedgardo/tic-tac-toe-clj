(ns tic-tac-toe-core.rules
  (:require [tic-tac-toe-core.constants :refer [get-opponent]]))

(defn index-empty? [index board] (nil? (board index)))

(defn horizontal-win? [board index symbol]
  (let [[x y] index]
    (every?
      #(= symbol %)
      [(board [x y]) (board [x (inc y)]) (board [x (+ y 2)])])))

(defn vertical-win? [board index symbol]
  (let [[x y] index]
    (every?
      #(= symbol %)
      [(board [x y]) (board [(inc x) y]) (board [(+ x 2) y])])))

(defn diagonal-down-win? [board index symbol]
  (let [[x y] index]
    (every?
      #(= symbol %)
      [(board [x y]) (board [(inc x) (inc y)]) (board [(+ x 2) (+ y 2)])])))

(defn diagonal-up-win? [board index symbol]
  (let [[x y] index]
    (every?
      #(= symbol %)
      [(board [x y]) (board [(inc x) (dec y)]) (board [(+ x 2) (- y 2)])])))


(defn winning-play? [board index symbol]
  (some #(% board index symbol) [horizontal-win?
                                 vertical-win?
                                 diagonal-down-win?
                                 diagonal-up-win?]))

(defn board-full? [board]
  (every? identity (vals board)))

(defn get-player-plays [board player]
  (filter
    #(and
       (not (index-empty? % board))
       (= player (board %)))
    (keys board)))

(defn game-has-wining-play? [board player]
  (let [player-plays (get-player-plays board player)]
    (loop [board-indexes player-plays]
      (cond
        (empty? board-indexes)
        false
        (winning-play? board (first board-indexes) player)
        true
        :else (recur (drop 1 board-indexes))))))

(defn play [game index]
  (let [board (:board game)
        player (:active-player game)
        new-board (assoc board index player) ]
    (cond
      (or (:over? game)
          (not (index-empty? index board)))
      game
      (game-has-wining-play? new-board player)
      (assoc game :board new-board :winner player :over? true)
      (board-full? new-board)
      (assoc game :board new-board :over? true)
      :else
      (assoc game :board new-board :active-player (get-opponent player)))))