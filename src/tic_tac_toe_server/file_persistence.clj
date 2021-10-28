(ns tic-tac-toe-server.file_persistence
  (:require [tic-tac-toe-core.constants :refer [default-game-options]]
            [tic-tac-toe-core.persistable :refer [Persistable] :as p]
            [tic-tac-toe-core.core :refer [get-ai-command]]))

(def sessions (atom {}))
(def sessions-file-path "./sessions.txt")
(defn save-sessions [game-sessions]
  (spit
    sessions-file-path
    (str
      (reduce-kv
        (fn [all-game-sessions game-id game-session]
          (let [game (:game game-session)
                serialized-game
                (if (nil? game) nil (assoc game :ai-play nil))]
            (assoc
              all-game-sessions
              game-id
              (assoc game-session
                :game serialized-game))))
        {}
        game-sessions))))


(deftype FilePersistence []
  Persistable
  (get-session-game-options [_ game-id]
    (let [game (get @sessions game-id)]
      (:options game)))
  (get-session-game [_ game-id]
    (:game (get @sessions game-id)))
  (save-game-options [_ game-id options]
    (let [new-game {:options options :game nil}]
      (do
        (swap! sessions assoc game-id new-game)
        (save-sessions @sessions))))
  (save-game [this game-id game]
    (let [options (p/get-session-game-options this game-id)
          new-game {:options options :game game}]
      (do
        (swap! sessions assoc game-id new-game)
        (save-sessions @sessions)))))

(def game-persistence (FilePersistence.))

(defn load-sessions []
  (let [game-sessions (clojure.edn/read-string (slurp sessions-file-path))]
    (reset!
      sessions
      (reduce-kv
        (fn [all-game-sessions game-id game-session]
          (let [game (:game game-session)
                options (:options game-session)
                ai-play (get-ai-command (:ai-difficulty options))
                deserialized-game
                (if (nil? game) nil (assoc game :ai-play ai-play ))]
            (assoc all-game-sessions
              game-id
              (assoc game-session
                :game deserialized-game))))
        {}
        game-sessions))))




