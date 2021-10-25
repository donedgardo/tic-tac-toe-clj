(ns tic-tac-toe-server.routes
  (:require
    [tic-tac-toe-server.sessions :refer [set-cookies get-session-game-options get-session-game]]
    [tic-tac-toe-core.constants :refer [default-game-options]]
    [tic-tac-toe-core.core :refer [create-game-factory]]
    [tic-tac-toe-core.rules :refer [play]]
    [tic-tac-toe-server.render :refer [set-html-game-body send-game-response]])
  (:import (java.util HashMap)))


(def files-route (clean.socket.FileRequestHandler. "/Users/ecarreras/tic-tac-toe-web/resources/public"))

(def app-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [options (get-session-game-options request)
            game (get-session-game request)]
        (send-game-response this request out {:options options :game game})))))

(def play-options-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [session-game-options (get-session-game-options request)
            post-data (.getPostData request)
            play-mode (or (.get post-data "mode") (:play-mode session-game-options))
            difficulty (or (.get post-data "difficulty") (:ai-difficulty session-game-options))
            first-player (or (.get post-data "first-player") (:first-player session-game-options))
            options (assoc session-game-options
                           :play-mode play-mode
                           :ai-difficulty difficulty
                           :first-player first-player)
            game (create-game-factory options)]
        (send-game-response this request out {:options options :game game })))))

(def reset-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (send-game-response this request out {:options default-game-options}))))

(def play-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [options (get-session-game-options request)
            post-data (.getPostData request)
            space (clojure.edn/read-string (.get post-data "space"))
            game (play (get-session-game request) space)]
        (send-game-response this request out {:options options :game game})))))

(def routes (HashMap. {"/"        app-handler
                       "/play"    play-handler
                       "/options" play-options-handler
                       "/reset"   reset-handler
                       "*"        files-route}))
