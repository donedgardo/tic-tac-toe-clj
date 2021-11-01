(ns tic-tac-toe-core.core-spec
  (:require [speclj.core :refer [describe it should= should-not]]
            [tic-tac-toe-core.ai :refer [get-random-move]]
            [tic-tac-toe-core.core :refer [create-game-factory]]
            [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.constants :refer [new-game get-empty-indexes]]))

(def game
  (-> new-game
      (play [0 0])))

(describe "tic-tac-toe play"
          (it "should allow to play on an empty position"
            (should= (:board game)
                     (:board (play new-game [0 0]))))
          (it "should not allow to play on an occupied position"
            (should= (:board game)
                     (:board (play game [0 0])))))

(describe "create game"
          (it "should return a game"
            (should-not (nil? (create-game-factory nil))))
          (it "should of played game when ai goes first"
            (should= 8
                     (-> (create-game-factory
                           {:ai-difficulty "easy" :first-player "ai"})
                         :board
                         get-empty-indexes
                         count)))
          (it "should of not played game when player goes first"
            (should= 9
                     (-> (create-game-factory
                           {:ai-difficulty "easy" :first-player "player"})
                         :board
                         get-empty-indexes
                         count)))
          (it "ai should play right after player plays"
            (should= 7
                     (-> (create-game-factory
                           {:ai-difficulty "easy" :first-player "player"})
                         (play [0 0])
                         :board
                         get-empty-indexes
                         count))
            (should= 6
                     (-> (create-game-factory
                           {:ai-difficulty "easy" :first-player "ai"})
                         (play [0 1])
                         :board
                         get-empty-indexes
                         count))))
