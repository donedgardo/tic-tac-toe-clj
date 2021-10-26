(ns tic-tac-toe-server.routes
  (:require
    [tic-tac-toe-server.cookies-helper :refer [get-session-id get-game-id set-cookies]]
    [tic-tac-toe-server.sessions :refer [game-persistence]]
    [tic-tac-toe-core.constants :refer [default-game-options]]
    [tic-tac-toe-core.core :refer [create-game-factory]]
    [tic-tac-toe-core.rules :refer [play]]
    [tic-tac-toe-server.persistence :refer [persist-session]]
    [tic-tac-toe-server.render :refer [set-html-game-body send-game-response]])
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
            options (.get-session-game-options game-persistence game-id)
            game (.get-session-game game-persistence game-id)
            game-session {:options options :game game}]
        (do
          (set-cookies this {:game-id game-id})
          (send-game-response this out game-session))))))

(def play-options-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [game-id (get-game-id request)
            game-options (.get-session-game-options game-persistence game-id)
            post-data (.getPostData request)
            play-mode (or (.get post-data "mode") (:play-mode game-options))
            difficulty (or (.get post-data "difficulty") (:ai-difficulty game-options))
            first-player (or (.get post-data "first-player") (:first-player game-options))
            options (assoc game-options
                      :play-mode play-mode
                      :ai-difficulty difficulty
                      :first-player first-player)
            game (create-game-factory options {:id game-id :persistence game-persistence})
            game-session {:options options :game game}]
        (do
          (set-cookies this {:game-id game-id})
          (send-game-response this out game-session))))))

(def play-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [game-id (get-game-id request)
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
          (set-cookies this {:game-id game-id})
          (send-game-response this out game-session))))))

(def new-game-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [old-game-id (get-game-id request)
            new-game-id (str (. UUID randomUUID))
            options (.get-session-game-options game-persistence old-game-id)
            new-options (assoc options :id new-game-id)
            game
            (create-game-factory new-options {:persistence game-persistence :id new-game-id})
            game-session {:options new-options :game game}]
        (do
          (set-cookies this {:game-id new-game-id})
          (send-game-response this out game-session))))))

(def reset-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [_ out]
      (let [game-id (str (. UUID randomUUID))
            game-session {:options default-game-options :game nil}]
        (do
          (set-cookies this {:game-id game-id})
          (send-game-response this out game-session))))))

(def routes (HashMap. {"/"         app-handler
                       "/play"     play-handler
                       "/options"  play-options-handler
                       "/reset"    reset-handler
                       "/new-game" new-game-handler
                       "*"         files-route}))
