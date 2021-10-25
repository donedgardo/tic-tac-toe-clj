(ns tic-tac-toe-server.session-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe-core.constants :refer [default-game-options]]
            [tic-tac-toe-core.core :refer [create-game-factory]]
            [tic-tac-toe-server.sessions :refer [load-sessions save-sessions]]))

(def test-sessions
  {"test"
   {:options
          {:play-mode     nil
           :ai-play       nil
           :first-player  nil
           :online-mode   nil
           :ai-difficulty nil
           }
    :game nil}})

(def test-sessions-2
  {"test2"
   {:options default-game-options
    :game    (create-game-factory default-game-options)}})

(def ai-game-options
  (assoc default-game-options :play-mode "ai" :ai-difficulty "easy" :first-player "ai"))

(def test-sessions-3
  {"test3"
   {:options ai-game-options
    :game    (create-game-factory ai-game-options)}})


(describe
  "sessions"
  (before (save-sessions test-sessions))
  (it "should load a new game session from file"
    (should= test-sessions (load-sessions)))
  (it "should save a default game session from file"
    (should=
      test-sessions-2
      (do
        (save-sessions test-sessions-2)
        (load-sessions))))
  (it "should save an ai game session from file"
    (should=
      test-sessions-3
      (do
        (save-sessions test-sessions-3)
        (load-sessions)))))
