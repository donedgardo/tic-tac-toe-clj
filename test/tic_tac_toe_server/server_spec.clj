(ns tic-tac-toe-server.server-spec
  (:require [speclj.core :refer :all]
            [clj-http.client :as http-client]
            [tic-tac-toe-server.core :refer [start stop]]))

(def session-id "test-id")

(defn select-ai-mode []
  (http-client/post "http://localhost:3000/options"
                    {:form-params {"mode" "ai"}
                     :headers     {"Cookie" (str "session-id=" session-id)}}))

(defn select-difficulty []
  (http-client/post "http://localhost:3000/options"
                    {:form-params {"difficulty" "hard"}
                     :headers     {"Cookie" (str "session-id=" session-id)}}))

(defn select-goes-first [goes-first]
  (http-client/post "http://localhost:3000/options"
                    {:form-params {"first-player" goes-first}
                     :headers     {"Cookie" (str "session-id=" session-id)}}))

(defn send-play-request []
  (http-client/post "http://localhost:3000/play"
                    {:form-params {"space" "[0 0]"}
                     :headers     {"Cookie" (str "session-id=" session-id)}}))


(defn select-ai-and-difficulty []
  (do
    (select-ai-mode)
    (select-difficulty)))

(defn select-ai-difficulty-goes-first [goes-first]
  (do
    (select-ai-mode)
    (select-difficulty)
    (select-goes-first goes-first)))

(defn reset-game []
  (http-client/post "http://localhost:3000/reset"
                    {:headers {"Cookie" (str "session-id=" session-id)}}))

(describe
  "tic-tac-toe server application"
  (before-all (future (start)))
  (after (reset-game))
  (it "shows ai option"
    (should=
      false
      (nil?
        (re-find
          #"ai-mode"
          (:body (http-client/get "http://localhost:3000"))))))
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
                  (:body (send-play-request))))))))
