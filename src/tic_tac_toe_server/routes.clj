(ns tic-tac-toe-server.routes
  (:require [tic-tac-toe-html.menu-options :refer [play-mode-menu difficulty-ai-menu goes-first-menu]]
            [tic-tac-toe-core.constants :refer [default-game-options]]
            [tic-tac-toe-server.layout :refer [layout]])
  (:import (java.util HashMap UUID)))


(def files-route (clean.socket.FileRequestHandler. "/Users/ecarreras/tic-tac-toe-web/resources/public"))

(def sessions (atom {}))
(def session-key "session-id")

(defn get-session-id [cookies]
  (if (or
        (nil? cookies)
        (not (.containsKey cookies session-key)))
    (str (. UUID randomUUID))
    (.get cookies session-key)))


(defn render-game [options]
  (let [{:keys [play-mode ai-difficulty first-player]} options
         ai-mode? (= "ai" play-mode)]
    (cond
      (nil? (:play-mode options))
      (play-mode-menu)
      (and ai-mode?
           (nil? ai-difficulty))
      (difficulty-ai-menu)
      (and ai-mode?
           (nil? first-player))
      (goes-first-menu)
      :else
      nil)))

(def app-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [cookies (.getCookies request)
            sessionId (get-session-id cookies)
            play-options (@sessions sessionId)]
        (do
          (.setCookies this (str session-key "=" sessionId))
          (.setBody this (layout (render-game play-options)))
          (.send this out))))))

(def play-options-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [cookies (.getCookies request)
            session-id (get-session-id cookies)
            session-game-options (or (@sessions session-id) default-game-options)
            post-data (.getPostData request)
            play-mode (or (.get post-data "mode") (:play-mode session-game-options))
            difficulty (or (.get post-data "difficulty") (:ai-difficulty session-game-options))
            game-options (assoc session-game-options :play-mode play-mode :ai-difficulty difficulty)]
        (do
          (swap! sessions assoc session-id game-options)
          (.setCookies this (str session-key "=" session-id))
          (.setBody this (layout (render-game game-options)))
          (.send this out))))))

(def reset-handler
  (proxy
    [clean.socket.RequestHandler]
    []
    (handle [request out]
      (let [cookies (.getCookies request)
            session-id (get-session-id cookies)]
        (do
          (swap! sessions assoc session-id default-game-options)
          (.setCookies this (str session-key "=" session-id))
          (.setBody this (layout (render-game default-game-options)))
          (.send this out))))))

(def routes (HashMap. {"/"        app-handler
                       "/options" play-options-handler
                       "/reset"   reset-handler
                       "*"        files-route}))
