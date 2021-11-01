(ns tic-tac-toe-server.server-spec
  (:require [speclj.core :refer :all]
            [clj-http.client :as http-client]
            [tic-tac-toe-server.core :refer [start stop]])
  (:import (java.util UUID)))

(def game-id (atom (. UUID randomUUID)))

(def username "test-username")

(def headers
  {"Cookie" (str "game-id=" @game-id ";" "user-id=" username)})

(defn login []
  (http-client/post "http://localhost:3000/login"
                    {:form-params {"username" username}
                     :headers     headers}))

(defn select-ai-mode []
  (http-client/post "http://localhost:3000/options"
                    {:form-params {"mode" "ai"}
                     :headers     headers}))
(defn request-new-game []
  (http-client/post "http://localhost:3000/new-game"
                    {:headers headers}))

(defn select-difficulty []
  (http-client/post "http://localhost:3000/options"
                    {:form-params {"difficulty" "hard"}
                     :headers     headers}))

(defn select-goes-first [goes-first]
  (http-client/post "http://localhost:3000/options"
                    {:form-params {"first-player" goes-first}
                     :headers     headers}))

(defn send-play-request []
  (http-client/post "http://localhost:3000/play"
                    {:form-params {"space" "[0 0]"}
                     :headers     headers}))

(defn reset-game []
  (do
    (http-client/post "http://localhost:3000/reset" {:headers headers})
    (reset! game-id (. UUID randomUUID))))

(defn select-ai-and-difficulty []
  (do
    (select-ai-mode)
    (select-difficulty)))

(defn select-ai-difficulty-goes-first [goes-first]
  (do
    (select-ai-mode)
    (select-difficulty)
    (select-goes-first goes-first)))

(describe
  "tic-tac-toe server application"
  (before-all (future (start)))
  (after (reset-game))
  (it "shows username form"
    (should=
      false
      (nil?
        (re-find
          #"Login"
          (:body (http-client/get "http://localhost:3000"))))))
  (it "shows ai option"
    (should=
      false
      (nil?
        (re-find
          #"ai-mode"
          (:body (login))))))
  (it "shows difficulty options after clicking ai-mode"
    (should= false
             (nil? (re-find
                     #"-ai-difficulty"
                     (:body (select-ai-mode))))))
  (it "shows difficulty options after clicking ai-mode"
    (should= false
             (nil? (re-find
                     #"-ai-difficulty"
                     (:body (select-ai-mode))))))
  (it "shows who goes first options after clicking difficulty"
    (should=
      false
      (nil? (re-find
              #"-goes-first"
              (:body (select-ai-and-difficulty))))))
  (it "shows an empty board after clicking difficulty and player goes first"
    (should=
      9
      (count
        (re-seq #"empty-board-space-*"
                (:body (select-ai-difficulty-goes-first "player"))))))
  (it "shows a board with ai play after clicking difficulty and ai goes first"
    (should=
      8
      (count
        (re-seq #"empty-board-space-*"
                (:body (select-ai-difficulty-goes-first "ai"))))))
  (it "shows a board with players and ai's play after playing on an empty board"
    (should=
      7
      (count
        (re-seq #"empty-board-space-*"
                (do
                  (select-ai-difficulty-goes-first "player")
                  (:body (send-play-request)))))))
  (it "shows an new game when requesting the ai new game"
    (should=
      8
      (count
        (re-seq #"empty-board-space-*"
                (do
                  (select-ai-difficulty-goes-first "ai")
                  (:body (request-new-game))))))))
