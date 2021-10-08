(ns tic-tac-toe-server.core
  (:require [hiccup.core :refer [html]]
            [tic-tac-toe-html.menu-options :refer [play-mode-menu]])
  (:import (java.util HashMap)))

(def html-content
  (html (play-mode-menu #("thing"))))

(def home (clean.socket.HTMLRequestHandler. html-content))

(def files (clean.socket.FileRequestHandler. "/Users/ecarreras/tic-tac-toe-web/resources/public" ))

(def server (clean.socket.CleanServer.))

(def routes (HashMap. {"/" home
                       "*" files}))

(defn start []
  (.start server 3000 routes))
