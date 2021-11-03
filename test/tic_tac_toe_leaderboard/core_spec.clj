(ns tic-tac-toe-leaderboard.core-spec
  (:require [speclj.core :refer :all]
            [datomic.client.api :as d]
            [tic-tac-toe-server.file-persistence :refer [reset-db]]
            [tic-tac-toe-core.constants :refer [play-modes ai-difficulties]]
            [tic-tac-toe-server.datomic-persistence :refer [game-persistence set-user-score]]
            [tic-tac-toe-core.rules :refer [play]]
            [tic-tac-toe-core.core :refer [create-game-factory]])
  (:import (tic_tac_toe_server.file_persistence FilePersistence)))

(def winner-username "winner")
(def looser-username "looser")
(def players [winner-username looser-username])

(def file-game-persistence (FilePersistence. "test"))
(def file-persistence-options {:persistence file-game-persistence :id "test-id"})
(def datomic-persistence-options {:persistence game-persistence :id "test-id"})



(defn reset-datomic-test []
  (doall (map #(set-user-score % 0.0) players)))

(describe
  "Leaderboard"
  (describe
    "with File Persistence"
    (before
      (do
        (reset-db)
        (-> (create-game-factory
              {:play-mode (:local play-modes)}
              (assoc file-persistence-options :players players))
            (play [0 0] file-persistence-options)
            (play [1 1] file-persistence-options)
            (play [1 0] file-persistence-options)
            (play [2 2] file-persistence-options)
            (play [2 0] file-persistence-options))))
    (it "should return top players after winner wins"
      (should= [[winner-username 1.0] [looser-username -1.0]]
               (.top-players file-game-persistence 10)))
    (it "should return top players after cats game"
      (should= [[winner-username 1.5] [looser-username -0.5]]
               (do
                 (-> (create-game-factory
                       {:play-mode (:local play-modes)}
                       (assoc file-persistence-options :players players))
                     (play [2 1] file-persistence-options)
                     (play [0 1] file-persistence-options)
                     (play [0 0] file-persistence-options)
                     (play [1 1] file-persistence-options)
                     (play [0 2] file-persistence-options)
                     (play [1 2] file-persistence-options)
                     (play [1 0] file-persistence-options)
                     (play [2 0] file-persistence-options)
                     (play [2 2] file-persistence-options))
                 (.top-players file-game-persistence 10)))))
  (describe
    "with Datomic Persistence"
    (before
      (do
        (reset-datomic-test)
        (-> (create-game-factory
              {:play-mode (:local play-modes)}
              (assoc datomic-persistence-options :players players))
            (play [0 0] datomic-persistence-options)
            (play [1 1] datomic-persistence-options)
            (play [1 0] datomic-persistence-options)
            (play [2 2] datomic-persistence-options)
            (play [2 0] datomic-persistence-options))))
    (it "should return top players after winner wins"
      (should= [[winner-username 1.0] [looser-username -1.0]]
               (.top-players game-persistence 10)))
    (it "should return top players after cats game"
      (should= [[winner-username 1.5] [looser-username -0.5]]
               (do
                 (-> (create-game-factory
                       {:play-mode (:local play-modes)}
                       (assoc datomic-persistence-options :players players))
                     (play [2 1] datomic-persistence-options)
                     (play [0 1] datomic-persistence-options)
                     (play [0 0] datomic-persistence-options)
                     (play [1 1] datomic-persistence-options)
                     (play [0 2] datomic-persistence-options)
                     (play [1 2] datomic-persistence-options)
                     (play [1 0] datomic-persistence-options)
                     (play [2 0] datomic-persistence-options)
                     (play [2 2] datomic-persistence-options))
                 (.top-players game-persistence 10))))))