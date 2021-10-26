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


(defn get-game-with-ai [options]
  (let [{:keys [ai-difficulty first-player]} options
        ai-play (get-ai-command ai-difficulty)
        game (if (or (not (= "ai" first-player)) (nil? ai-play))
               new-game
               (play new-game (ai-play new-game)))]
    (assoc game :ai-play ai-play)))

(defn create-game-factory
  ([] new-game)
  ([options] (get-game-with-ai options))
  ([options {:keys [persistence id]}]
   (let [game (assoc (get-game-with-ai options) :persistence persistence :id id)]
     (do
       (.save-game-options persistence id options)
       (.save-game persistence id game)
       game))))
