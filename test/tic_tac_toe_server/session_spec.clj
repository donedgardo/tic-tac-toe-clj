(ns tic-tac-toe-server.session-spec
  (:require [speclj.core :refer :all]
            [tic-tac-toe-core.constants :refer [default-game-options]]
            [tic-tac-toe-core.core :refer [create-game-factory]]
            [tic-tac-toe-server.file_persistence :refer [load-sessions-file save-sessions-file]]))

(def test-sessions
  {"game-id"
   {:options
          {:play-mode     nil
           :ai-play       nil
           :first-player  nil
           :online-mode   nil
           :ai-difficulty nil}
    :game nil}})

(def test-sessions-2
  {"game-id"
   {:options default-game-options
    :game    (create-game-factory default-game-options)}})

(def ai-game-options
  (assoc default-game-options :play-mode "ai" :ai-difficulty "easy" :first-player "ai"))

(def test-sessions-3
  {"game-id"
   {:options ai-game-options
    :game    (create-game-factory ai-game-options)}})

(def suffix "test")

(describe
  "sessions"
  (before (save-sessions-file test-sessions suffix))
  (it "should load a new game session from file"
    (should= test-sessions (load-sessions-file suffix)))
  (it "should save a default game session from file"
    (should=
      test-sessions-2
      (do
        (save-sessions-file test-sessions-2 suffix)
        (load-sessions-file suffix))))
  (it "should save an ai game session from file"
    (should=
      test-sessions-3
      (do
        (save-sessions-file test-sessions-3 suffix)
        (load-sessions-file suffix)))))
