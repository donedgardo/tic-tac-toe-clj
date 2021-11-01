(ns tic-tac-toe-core.rules
  (:require [tic-tac-toe-core.constants :refer [get-opponent play-modes]]))

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

(defn get-new-game-state
  ([{:keys [game index username]}]
   (let [{:keys [board active-player ai-play]} game
         new-board (assoc board index active-player)
         new-game (assoc game :board new-board)
         opponent (get-opponent active-player)]
     (cond
       (invalid-move? game index)
       game
       (game-has-wining-play? new-board active-player)
       (assoc new-game :winner active-player :over? true :winner-username username)
       (board-full? new-board)
       (assoc new-game :over? true)
       (nil? ai-play)
       (assoc new-game :active-player opponent)
       :else
       (let [ai-disabled-game (assoc new-game :ai-play nil :active-player opponent)
             ai-move (ai-play ai-disabled-game)
             game-after-ai (get-new-game-state
                             {:game ai-disabled-game
                              :index ai-move
                              :username (:ai play-modes)})]
         (assoc game-after-ai :ai-play ai-play))))))

(defn play
  ([game index]
   (get-new-game-state {:game game :index index}))
  ([game index {:keys [persistence id username]}]
   (let [game-state (get-new-game-state {:game game :index index :username username})]
     (do
       (.save-game persistence id game-state)
       game-state))))