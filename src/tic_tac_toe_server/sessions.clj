(ns tic-tac-toe-server.sessions
  (:require [tic-tac-toe-core.constants :refer [default-game-options]]
            [tic-tac-toe-core.core :refer [create-game-factory get-ai-command]])
  (:import (java.util UUID)))

(def sessions (atom {}))

(def session-key "session-id")

(def sessions-file-path "./sessions.txt")

(defn load-sessions []
  (let [sessions-without-ai-play (clojure.edn/read-string (slurp sessions-file-path))]
    (reset!
      sessions
      (reduce-kv
        (fn [m k v]
          (let [game (:game v)
                options (:options v)
                ai-play (get-ai-command (:ai-difficulty options))
                game-with-ai-play (if (nil? game) nil (assoc game :ai-play ai-play))]
            (assoc m k (assoc v :game game-with-ai-play))))
        {}
        sessions-without-ai-play))))

(defn save-sessions [sessions]
  (spit
    sessions-file-path
    (str
      (reduce-kv
        (fn [m k v]
          (let [game (:game v)
                game-without-ai-play (if (nil? game) nil (assoc game :ai-play nil))]
            (assoc m k (assoc v :game game-without-ai-play))))
        {}
        sessions))))

(defn get-session-id [request]
  (let [cookies (.getCookies request)]
    (if (or
          (nil? cookies)
          (not (.containsKey cookies session-key)))
      (str (. UUID randomUUID))
      (.get cookies session-key))))

(defn set-cookies [request handler]
  (let [session-id (get-session-id request)]
    (.setCookies handler (str session-key "=" session-id))))

(defn get-session-game-options [request]
  (let [session-id (get-session-id request)]
    (or (:options (@sessions session-id)) default-game-options)))

(defn get-session-game [request]
  (let [session-id (get-session-id request)
        options (get-session-game-options request)]
    (or
      (:game (@sessions session-id))
      (create-game-factory options))))

(defn set-game [request game]
  (let [session-id (get-session-id request)
        options (get-session-game-options request)]
    (do
      (swap! sessions assoc session-id {:options options :game game})
      (save-sessions @sessions))))

(defn set-game-options [request options]
  (let [session-id (get-session-id request)]
    (do
      (swap! sessions assoc session-id {:options options :game nil})
      (save-sessions @sessions))))



