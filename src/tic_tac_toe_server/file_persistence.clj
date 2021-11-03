(ns tic-tac-toe-server.file-persistence
  (:require [tic-tac-toe-core.constants :refer [default-game-options]]
            [tic-tac-toe-core.persistable :refer [Persistable] :as p]
            [tic-tac-toe-core.leaderboard :refer [add-winning-points add-loosing-points add-tie-points]]
            [tic-tac-toe-core.core :refer [get-ai-command]]))

(def dev-suffix "dev")

(defn get-sessions-file-path [suffix]
  (str "./file-db/sessions-" suffix ".txt"))

(defn get-leaderboard-file-path [suffix]
  (str "./file-db/leaderboard-" suffix ".txt"))

(def sessions (atom {}))
(def leaderboard (atom {}))

(defn reset-db []
  (do
    (reset! sessions {})
    (reset! leaderboard {})))

(defn save-leaderboard-file [leaderboard file-suffix]
  (spit
    (get-leaderboard-file-path file-suffix)
    (str leaderboard)))

(defn load-leaderboard-file [file-suffix]
  (let [leaderboards (clojure.edn/read-string (slurp (get-leaderboard-file-path file-suffix)))]
    (reset! leaderboard leaderboards)))

(defn save-sessions-file [game-sessions file-suffix]
  (spit
    (get-sessions-file-path file-suffix)
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

(defn load-sessions-file [file-suffix]
  (let [game-sessions (clojure.edn/read-string (slurp (get-sessions-file-path file-suffix)))]
    (reset!
      sessions
      (reduce-kv
        (fn [all-game-sessions game-id game-session]
          (let [game (:game game-session)
                options (:options game-session)
                ai-play (get-ai-command (:ai-difficulty options))
                deserialized-game
                (if (nil? game) nil (assoc game :ai-play ai-play))]
            (assoc all-game-sessions
              game-id
              (assoc game-session
                :game deserialized-game))))
        {}
        game-sessions))))

(defn load-db-file []
  (do
    (load-leaderboard-file dev-suffix)
    (load-sessions-file dev-suffix)))

(deftype FilePersistence [file-suffix]
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
        (save-sessions-file @sessions file-suffix))))
  (save-game [this game-id game]
    (let [options (p/get-session-game-options this game-id)
          new-game {:options options :game game}]
      (do
        (swap! sessions assoc game-id new-game)
        (save-sessions-file @sessions file-suffix))))
  (top-players [this limit]
    (->> (seq @leaderboard)
         (sort-by second)
         (reverse)
         (take limit)))
  (record-win [this game]
    (let [winner (:winner-username game)
          looser (first (filter #(not (= %1 winner)) (:players game)))
          winner-current-score (or (get @leaderboard winner) 0)
          looser-current-score (or (get @leaderboard looser) 0)]
      (do
        (swap! leaderboard assoc winner (add-winning-points winner-current-score))
        (swap! leaderboard assoc looser (add-loosing-points looser-current-score))
        (save-leaderboard-file @leaderboard file-suffix))))
  (record-tie [this game]
    (let [first-player (first (:players game))
          second-player (second (:players game))
          first-current-score (or (get @leaderboard first-player) 0)
          second-current-score (or (get @leaderboard second-player) 0)]
      (do
        (swap! leaderboard assoc first-player (add-tie-points first-current-score))
        (swap! leaderboard assoc second-player (add-tie-points second-current-score))
        (save-leaderboard-file @leaderboard file-suffix)))))

(def game-persistence (FilePersistence. dev-suffix))






