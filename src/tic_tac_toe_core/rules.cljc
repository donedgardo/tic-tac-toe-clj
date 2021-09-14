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

(defn invalid-move? [game index]
  (or (:over? game)
      (not (index-empty? index (:board game)))))

(defn play [game index]
  (let [{:keys [board active-player ai-play]} game
        new-board (assoc board index active-player)
        new-game (assoc game :board new-board)
        opponent (get-opponent active-player)]
    (cond
      (invalid-move? game index)
      game
      (game-has-wining-play? new-board active-player)
      (assoc new-game :winner active-player :over? true)
      (board-full? new-board)
      (assoc new-game :over? true)
      (nil? ai-play)
      (assoc new-game :active-player opponent)
      :else
      (let [ai-disabled-game (assoc new-game :ai-play nil :active-player opponent)
            ai-move (ai-play ai-disabled-game)
            game-after-ai (play ai-disabled-game ai-move)]
        (assoc game-after-ai :ai-play ai-play)))))