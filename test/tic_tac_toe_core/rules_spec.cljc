(ns tic-tac-toe-core.rules-spec
  (:require [speclj.core :refer [describe it should=]]
            [tic-tac-toe-core.helpers-spec :refer [tie-game]]
            [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.constants :refer [new-game X O]]))

(describe "tic-tac-toe game over"
          (it "should not be game over with no plays"
            (should= false (:over? new-game)))
          (it "should not be game over with no winning plays"
            (should= false (:over?
                             (play new-game [0 0]))))
          (it "should be game over with :x horizontal winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 0])
                                (play [1 1])
                                (play [0 1])
                                (play [2 1])
                                (play [0 2])))))
          (it "should be game over with :x vertical winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 0])
                                (play [1 1])
                                (play [1 0])
                                (play [2 1])
                                (play [2 0])))))
          (it "should be game over with :x vertical right winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 2])
                                (play [1 1])
                                (play [1 2])
                                (play [2 1])
                                (play [2 2])))))
          (it "should be game over with :x vertical middle winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 1])
                                (play [1 2])
                                (play [1 1])
                                (play [2 2])
                                (play [2 1])))))
          (it "should be game over with :x diagonal down winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 0])
                                (play [1 2])
                                (play [1 1])
                                (play [2 1])
                                (play [2 2])))))
          (it "should be game over with :x diagonal up winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 2])
                                (play [1 2])
                                (play [1 1])
                                (play [2 1])
                                (play [2 0])))))
          (it "should be game over with :o diagonal down winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 1])
                                (play [0 0])
                                (play [1 2])
                                (play [1 1])
                                (play [2 0])
                                (play [2 2])))))
          (it "should be game over with :o diagonal up winning plays"
            (should= true (:over?
                            (-> new-game
                                (play [0 1])
                                (play [0 2])
                                (play [1 2])
                                (play [1 1])
                                (play [2 2])
                                (play [2 0])))))
          (it "should be game over with a tie"
            (should= true (:over? tie-game))))

(describe "get-winning-player"
          (it "should return X"
            (should= X (-> new-game
                           (play [0 0])
                           (play [1 1])
                           (play [0 1])
                           (play [2 2])
                           (play [0 2])
                           :winner)))
          (it "should return O"
            (should= O (-> new-game
                           (play [1 1])
                           (play [0 0])
                           (play [2 1])
                           (play [0 1])
                           (play [2 2])
                           (play [0 2])
                           :winner)))
          (it "should return nil"
            (should= nil (:winner new-game))
            (should= nil (:winner tie-game))))

(describe "turns"
          (it "X should go first"
            (should= X (:active-player new-game)))
          (it "O should go second"
            (should= O (:active-player
                         (play new-game [0 0])))))
