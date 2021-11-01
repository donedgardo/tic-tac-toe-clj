(ns tic-tac-toe-core.core
  (:require [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.ai :refer [get-random-move get-best-move]]
            [tic-tac-toe-core.constants :refer [new-game empty-board play-modes]]))


(defn get-ai-command [ai-difficulty]
  (cond
    (nil? ai-difficulty)
    nil
    (= ai-difficulty "easy")
    get-random-move
    :else
    get-best-move))


(defn get-ordered-players [players first-player]
  (let [ai (:ai play-modes)]
    (cond
      (= ai first-player)
      [ai (first players)]
      (= ai first-player)
      [(first-player) ai]
      :else
      players)))

(defn get-game-with-ai [ai-difficulty first-player]
  (let [ai (:ai play-modes)
        ai-play (get-ai-command ai-difficulty)]
    (if
      (and
        (= ai first-player)
        (not (nil? ai-play)))
      (assoc (play new-game (ai-play new-game)) :ai-play ai-play)
      (assoc new-game :ai-play ai-play))))

(defn create-game [options]
  (let [{:keys [ai-difficulty first-player players]} options
        game-with-ai (get-game-with-ai ai-difficulty first-player)
        players-ordered (get-ordered-players players first-player)]
    (assoc game-with-ai :players players-ordered)))

(defn create-game-factory
  ([] new-game)
  ([options] (create-game options))
  ([options {:keys [persistence id players]}]
   (let [options-with-players (assoc options :players players)
         game (create-game options-with-players)]
     (do
       (.save-game-options persistence id options)
       (.save-game persistence id game)
       game))))
