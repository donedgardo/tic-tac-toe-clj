(ns tic-tac-toe-server.datomic-persistence
  (:require [datomic.client.api :as d]
            [tic-tac-toe-core.core :refer [get-ai-command]]
            [tic-tac-toe-core.persistable :refer [Persistable]]))

(def client (d/client {:server-type :dev-local
                       :system      "tic-tac-toe"}))

(d/create-database client {:db-name "games"})

(def connection (d/connect client {:db-name "games"}))

(def game-options-schema
  [{:db/ident       :option/play-mode
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc         "Play mode for local, ai, or online mode"}
   {:db/ident       :option/online-mode
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc         "Host or joiner mode"}
   {:db/ident       :option/ai-difficulty
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc         "Difficulty of ai mode, easy or hard"}
   {:db/ident       :option/first-player
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc         "Who goes first player or ai"}])

(def game-schema
  [{:db/ident       :game/uuid
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/unique      :db.unique/identity
    :db/doc         "UUID of game"}
   {:db/ident       :game/winner-username
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc         "Winners' username"}
   {:db/ident       :game/options
    :db/valueType   :db.type/ref
    :db/cardinality :db.cardinality/one
    :db/doc         "Game options reference"}
   {:db/ident       :game/players
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/many
    :db/doc         "Player usernames"}
   {:db/ident       :game/board
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one}
   {:db/ident       :game/winner
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc         "The winner of the game"}
   {:db/ident       :game/over?
    :db/valueType   :db.type/boolean
    :db/cardinality :db.cardinality/one
    :db/doc         "Is the game over?"}
   {:db/ident       :game/active-player
    :db/valueType   :db.type/string
    :db/cardinality :db.cardinality/one
    :db/doc         "Player who's turn is active"}
   ])

(d/transact connection {:tx-data game-options-schema})
(d/transact connection {:tx-data game-schema})

(defn remove-nil [map]
  (into {} (remove (comp nil? second) map)))

(deftype DatomicPersistence []
  Persistable
  (get-session-game-options [_ game-id]
    (let [db (d/db connection)
          serialized-game (d/pull db
                                  [{:game/options
                                    [:option/play-mode
                                     :option/first-player
                                     :option/online-mode
                                     :option/ai-difficulty]}]
                                  [:game/uuid game-id])
          serialized-options (:game/options serialized-game)]
      {:play-mode     (:option/play-mode serialized-options)
       :first-player  (:option/first-player serialized-options)
       :online-mode   (:option/first-player serialized-options)
       :ai-difficulty (:option/ai-difficulty serialized-options)}))

  (get-session-game [_ game-id]
    (let [db (d/db connection)
          serialized-game (d/pull db
                                  [:game/board
                                   :game/winner
                                   :game/over?
                                   :game/winner-username
                                   :game/active-player
                                   :game/players
                                   {:game/options [:option/ai-difficulty]}]
                                  [:game/uuid game-id])
          option (:game/options serialized-game)]
      {:board           (clojure.edn/read-string (:game/board serialized-game))
       :winner          (:game/winner serialized-game)
       :winner-username (:game/winner-username serialized-game)
       :over?           (:game/over? serialized-game)
       :active-player   (:game/active-player serialized-game)
       :players         (:game/players serialized-game)
       :ai-play         (get-ai-command (:option/ai-difficulty option))}))

  (save-game [_ game-id game]
    (d/transact
      connection
      {:tx-data
       [(remove-nil {:db/id                 game-id
                     :game/uuid             game-id
                     :game/board            (str (:board game))
                     :game/winner           (:winner game)
                     :game/:winner-username (:winner-username game)
                     :game/over?            (:over? game)
                     :game/players          (filter identity (:players game))
                     :game/active-player    (:active-player game)})]}))

  (save-game-options [_ game-id options]
    (d/transact
      connection
      {:tx-data [{:db/id        game-id
                  :game/uuid    game-id
                  :game/options (remove-nil
                                  {:db/id                game-id
                                   :option/play-mode     (:play-mode options)
                                   :option/first-player  (:first-player options)
                                   :option/online-mode   (:online-mode options)
                                   :option/ai-difficulty (:ai-difficulty options)})}]})))

(def game-persistence (DatomicPersistence.))