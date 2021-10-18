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

(defn select-ai-and-difficulty []
  (do
    (select-ai-mode)
    (select-difficulty)))

(defn reset-game []
  (http-client/post "http://localhost:3000/reset"
                    {:headers {"Cookie" (str "session-id=" session-id)}}))


(describe "tic-tac-toe server application"
          (before-all (future (start)))
          (after (reset-game))
          (it "shows ai option"
            (should= false
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
            (should= false
                     (nil? (re-find
                             #"-goes-first"
                             (:body (select-ai-and-difficulty)))))))
