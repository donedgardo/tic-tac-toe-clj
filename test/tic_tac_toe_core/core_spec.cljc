(ns tic-tac-toe-core.core-spec
  (:require [speclj.core :refer [describe it should=]]
            [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.constants :refer [new-game]]))

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
