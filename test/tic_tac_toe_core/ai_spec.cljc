(ns tic-tac-toe-core.ai-spec
  (:require [speclj.core :refer [describe it should=]]
            [tic-tac-toe-core.helpers-spec :refer [tie-game]]
            [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.ai :refer [minimax get-best-move score-board get-random-move]]
            [tic-tac-toe-core.constants :refer [get-opponent X O new-game empty-board]]))

(describe "score"
          (it "scores nil"
            (should= nil (score-board new-game O))
            (should= nil (score-board empty-board X)))
          (it "scores 0"
            (should= 0 (score-board tie-game O)))
          (it "scores 10"
            (should= 10 (score-board
                          (-> new-game
                              (play [1 0])
                              (play [0 2])
                              (play [2 1])
                              (play [1 1])
                              (play [2 2])
                              (play [2 0]))
                          O))
            (should= 10 (score-board
                          (-> new-game
                              (play [0 2])
                              (play [0 1])
                              (play [1 1])
                              (play [2 2])
                              (play [2 0]))
                          X)))
          (it "scores -10"
            (should= -10 (score-board
                           (-> new-game
                               (play [1 0])
                               (play [0 2])
                               (play [2 1])
                               (play [1 1])
                               (play [2 2])
                               (play [2 0]))
                           X))
            (should= -10 (score-board
                           (-> new-game
                               (play [0 2])
                               (play [0 1])
                               (play [1 1])
                               (play [2 2])
                               (play [2 0]))
                           O))))

(describe "get-opponent"
          (it "O"
            (should= O (get-opponent X)))
          (it "X"
            (should= X (get-opponent O))))

(describe "minmax"
          (it "returns 10"
            (should= 10 (minimax
                          (-> new-game
                              (play [0 1])
                              (play [2 2])
                              (play [0 2])
                              (play [2 0]))
                          X
                          0
                          true)))
          (it "returns -10"
            (should= -10 (minimax
                           (-> new-game
                               (play [0 1])
                               (play [1 0])
                               (play [0 2])
                               (play [1 1])
                               (play [1 2])
                               (play [2 1])
                               (play [2 0])
                               (play [2 2]))
                           O
                           0
                           false)))
          (it "returns -9"
            (should= -9 (minimax
                          (-> new-game
                              (play [0 0])
                              (play [1 1])
                              (play [2 2])
                              (play [0 2])
                              (play [2 0]))
                          O
                          0
                          true))))

(describe "get-best-move"
          (it "should return obvious best move"
            (should= [0 0] (get-best-move
                             (-> new-game
                                 (play [0 1])
                                 (play [1 1])
                                 (play [0 2])
                                 (play [1 0])))))
          (it "should return best move when opponent plays middle"
            (should= [0 1] (get-best-move
                             (-> new-game
                                 (play [0 0])
                                 (play [1 1])))))
          (it "should return best move when it goes second"
            (should= [1 1] (time (get-best-move
                                   (-> new-game
                                       (play [0 0])))))))

(describe "obvious move"
          (it "should be quick"
            (should= [2 0] (time
                             (get-best-move
                               (-> new-game
                                   (play [0 0])
                                   (play [0 1])))))))

(describe "random move"
          (it "should return a index"
            (should= false (nil? (get-random-move new-game)))))