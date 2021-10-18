(ns tic-tac-toe-server.layout
  (:require [hiccup.core :refer [html]]))

(defn layout [children]
  (html
    [:html
     [:head
      [:meta {:charset "UTF-8"}]
      [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
      [:title "Tic-Tac-toe in Clojure"]
      [:link {:rel "preconnect" :href "https://fonts.googleapis.com"}]
      [:link {:rel "preconnect" :href "https://fonts.gstatic.com" :crossorigin true}]
      [:link {:rel "stylesheet" :href "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"}]
      [:link {:href "/css/style.css" :rel "stylesheet" :type "text/css"}]]
     [:body children]
     ]))
