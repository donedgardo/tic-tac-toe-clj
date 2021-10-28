(ns tic-tac-toe-server.core
  (:require [hiccup.core :refer [html]]
            [tic-tac-toe-server.routes :refer [routes]]
            [tic-tac-toe-server.file_persistence :refer [load-sessions]]
            [tic-tac-toe-html.menu-options :refer [play-mode-menu difficulty-ai-menu goes-first-menu]]))


(def server (clean.socket.CleanServer.))

(defn start []
  (do
    (load-sessions)
    (.start server 3000 routes)))

(defn stop []
  (.stop server))
