(ns tic-tac-toe-server.core
  (:require [hiccup.core :refer [html]]
            [tic-tac-toe-html.menu-options :refer [play-mode-menu difficulty-ai-menu goes-first-menu]])
  (:import (java.util HashMap)))

(defn layout [children]
  (html
    [:html
     [:head
      [:meta {:charset "UTF-8"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
      [:title "Tic-Tac-toe in Clojure"]
      [:link {:rel "preconnect" :href "https://fonts.googleapis.com" }]
      [:link {:rel "preconnect" :href "https://fonts.gstatic.com" :crossorigin true }]
      [:link {:rel "stylesheet" :href "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" }]
      [:link {:href "/css/style.css" :rel "stylesheet" :type "text/css"}]]
     [:body children]
     ]))


(def new-game
  (layout (play-mode-menu)))

(def ai-mode
  (layout (difficulty-ai-menu)))

(def select-first
  (layout (goes-first-menu)))

(def home-page (clean.socket.HTMLRequestHandler. new-game))

(def ai-page (clean.socket.HTMLRequestHandler. ai-mode))

(def goes-first-page (clean.socket.HTMLRequestHandler. select-first))

(def files (clean.socket.FileRequestHandler. "/Users/ecarreras/tic-tac-toe-web/resources/public"))

(def server (clean.socket.CleanServer.))

(def routes (HashMap. {"/" home-page
                       "/ai" ai-page
                       "/ai/goes-first" goes-first-page
                       "*" files}))

(defn start []
  (.start server 3000 routes))
