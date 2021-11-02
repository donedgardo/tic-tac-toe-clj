(ns tic-tac-toe-leaderboard.core-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe-server.file_persistence :refer [reset-db]]
            [tic-tac-toe-core.constants :refer [play-modes ai-difficulties]]
            [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.core :refer [create-game-factory]])
  (:import (tic_tac_toe_server.file_persistence FilePersistence)))

(def game-persistence (FilePersistence. "test"))
(def persistence-options {:persistence game-persistence :id "test-id"})

(describe
  "Leaderboard"
  (describe
    "with File Persistence"
    (before (let []
              (do
                (reset-db)
                (-> (create-game-factory
                      {:play-mode (:local play-modes)}
                      (assoc persistence-options :players ["winner" "looser"]))
                    (play [0 0] persistence-options)
                    (play [1 1] persistence-options)
                    (play [1 0] persistence-options)
                    (play [2 2] persistence-options)
                    (play [2 0] persistence-options)))))
    (it "should return top players after winner wins"
      (should= [["winner" 1] ["looser" -1]]
               (.top-players game-persistence 10)))
    (it "should return top players after cats game"
      (should= [["winner" 1.5] ["looser" -0.5]]
               (do
                 (-> (create-game-factory
                       {:play-mode (:local play-modes)}
                       (assoc persistence-options :players ["winner" "looser"]))
                     (play [2 1] persistence-options)
                     (play [0 1] persistence-options)
                     (play [0 0] persistence-options)
                     (play [1 1] persistence-options)
                     (play [0 2] persistence-options)
                     (play [1 2] persistence-options)
                     (play [1 0] persistence-options)
                     (play [2 0] persistence-options)
                     (play [2 2] persistence-options))
                 (.top-players game-persistence 10))))
    ))