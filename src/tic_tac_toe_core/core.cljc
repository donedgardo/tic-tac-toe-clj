(ns tic-tac-toe-core.core
  (:require [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.ai :refer [get-random-move get-best-move]]
            [tic-tac-toe-core.constants :refer [new-game empty-board]]))


(defn get-ai-command [ai-difficulty]
  (cond
    (nil? ai-difficulty)
    nil
    (= ai-difficulty "easy")
    get-random-move
    :else
    get-best-move))


(defn create-game-factory
  ([] new-game)
  ([options]
  (let [{:keys [ai-difficulty first-player]} options
        ai-play (get-ai-command ai-difficulty)
        game (if (not (= "ai" first-player))
               new-game
               (play new-game (ai-play new-game)))]
    (assoc game :ai-play ai-play))))