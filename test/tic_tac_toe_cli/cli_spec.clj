(ns tic-tac-toe-cli.cli-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe-cli.cli :refer :all]
            [tic-tac-toe-core.rules :refer :all]
            [tic-tac-toe-core.constants :refer :all]))

(describe "get-player-input"
          (it "returns input"
            (should= [0 1]
                     (with-in-str
                       "2"
                       (get-player-input "Enter Position: " empty-board))))
          (it "validates input is valid"
            (should= [0 2]
                     (with-in-str
                       "hello\n3"
                       (get-player-input "Enter Position: " empty-board))))
          (it "validates input is empty"
            (should= [0 1]
                     (with-in-str
                       "1\n2"
                       (get-player-input
                         "Enter Position: "
                         (:board (play new-game [0 0])))))))

(describe "printing-boards"
          (it "prints the board"
            (should= "\n1|2|3\n4|5|6\n7|8|9\n"
                     (print-board empty-board)))
          (it "prints the board"
            (should= "\nX|2|3\n4|5|6\n7|8|9\n"
                     (print-board (:board (play new-game [0 0]))))))

(describe "empty indexes"
          (it "shows empty index for empty board"
            (should= (range 1 10) (sort
                                    (get-empty-inputs empty-board))))
          (it "shows empty index for played board"
            (should= (range 2 10) (sort
                                    (get-empty-inputs
                                      (:board (play new-game [0 0])))))))
(describe "invalid play message"
          (it "returns when the space is occupied"
            (should= "\n0 is not a valid input because the board space is not empty."
                     (get-error-message [0 0] (:board (play new-game [0 0])) "0")))
          (it "returns when the space is not a number."
            (should= "\nX is not a valid input because the input is not a number."
                     (get-error-message nil (:board new-game) "X")))
          (it "returns when the input is not between 0 and 9"
            (should= "\n-1 is not valid input because its outside the 1 - 9 range."
                     (get-error-message nil (:board new-game) "-1")))
          (it "returns when the input is empty"
            (should= "\nEmpty space is not valid input."
                     (get-error-message nil (:board new-game) "   "))))