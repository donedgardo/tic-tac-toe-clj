(ns tic-tac-toe-server.routes
  (:require
    [tic-tac-toe-server.cookies-helper :refer [get-game-id set-cookies get-username]]
    [tic-tac-toe-server.file-persistence :refer [game-persistence]]
    ;[tic-tac-toe-server.datomic-persistence :refer [game-persistence]]
    [tic-tac-toe-core.constants :refer [default-game-options]]
    [tic-tac-toe-core.core :refer [create-game-factory]]
    [tic-tac-toe-core.rules :refer [play]]
    [tic-tac-toe-server.render :refer [set-html-game-body send-game-response render-leaderboard-page]])
  (:import (java.util HashMap UUID)))

(def files-route
  (clean.socket.FileRequestHandler.
    "/Users/ecarreras/tic-tac-toe-web/resources/public"))

(def app-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [game-id (get-game-id request)
            username (get-username request)
            options (.get-session-game-options game-persistence game-id)
            game (.get-session-game game-persistence game-id)
            game-session {:options options :game game}]
        (do
          (set-cookies this {:game-id game-id :username username})
          (send-game-response this out game-session))))))

(def play-options-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [game-id (get-game-id request)
            username (get-username request)
            game-options (.get-session-game-options game-persistence game-id)
            post-data (.getPostData request)
            play-mode (or (.get post-data "mode") (:play-mode game-options))
            difficulty (or (.get post-data "difficulty") (:ai-difficulty game-options))
            first-player (or (.get post-data "first-player") (:first-player game-options))
            options (assoc game-options
                      :play-mode play-mode
                      :ai-difficulty difficulty
                      :first-player first-player)
            game (create-game-factory
                   options
                   {:id game-id :persistence game-persistence :players [username]})
            game-session {:options options :game game}]
        (do
          (set-cookies this {:game-id game-id :username username})
          (send-game-response this out game-session))))))

(def play-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [game-id (get-game-id request)
            username (get-username request)
            options (.get-session-game-options game-persistence game-id)
            post-data (.getPostData request)
            space (clojure.edn/read-string (.get post-data "space"))
            game (.get-session-game game-persistence game-id)
            new-game
            (if (nil? game)
              nil
              (play game space {:persistence game-persistence :id game-id}))
            game-session {:options options :game new-game}]
        (do
          (set-cookies this {:game-id game-id :username username})
          (send-game-response this out game-session))))))

(def new-game-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [old-game-id (get-game-id request)
            username (get-username request)
            new-game-id (str (. UUID randomUUID))
            options (.get-session-game-options game-persistence old-game-id)
            game
            (create-game-factory options {:persistence game-persistence :id new-game-id :players [username]})
            game-session {:options options :game game}]
        (do
          (set-cookies this {:game-id new-game-id :username username})
          (send-game-response this out game-session))))))

(def reset-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [game-id (str (. UUID randomUUID))
            username (get-username request)
            game (create-game-factory default-game-options {:persistence game-persistence :id game-id :players [username]})
            game-session {:options default-game-options :game game}]
        (do
          (set-cookies this {:game-id game-id :username username})
          (send-game-response this out game-session))))))

(def login-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [game-id (str (. UUID randomUUID))
            post-data (.getPostData request)
            username (.get post-data "username")
            game (create-game-factory default-game-options
                                      {:persistence game-persistence
                                       :id          game-id :players [username]})
            game-session {:options default-game-options :game game}]
        (do
          (set-cookies this {:game-id game-id :username username})
          (send-game-response this out game-session))))))

(def leaderboard-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [_ out]
      (let [leaderboard (.top-players game-persistence 100)]
        (render-leaderboard-page this out leaderboard)))))

(def routes (HashMap. {"/"            app-handler
                       "/play"        play-handler
                       "/login"       login-handler
                       "/options"     play-options-handler
                       "/reset"       reset-handler
                       "/leaderboard" leaderboard-handler
                       "/new-game"    new-game-handler
                       "*"            files-route}))
