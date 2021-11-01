(ns tic-tac-toe-server.render
  (:require [hiccup.core :refer [html]]
            [tic-tac-toe-html.board :refer [board-space player-turn game-over reset-button play-options-menu]]
            [tic-tac-toe-html.menu-options :refer [play-mode-menu difficulty-ai-menu goes-first-menu]]
            [tic-tac-toe-html.username-form :refer [username-form]]))

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
     [:body children]]))

(defn tic-tac-toe-board [game]
  [:div.game
   (let [board (:board game)
         spaces (sort (keys board))]
     [:form.board {:action "/play" :method "POST"}
      (for [space spaces]
        (board-space board space))
      ])
   [:div
    (player-turn game)
    (game-over game)
    (reset-button)
    (play-options-menu)]])

(defn render-application [{:keys [options game]}]
  (let [{:keys [play-mode ai-difficulty first-player]} options
        ai-mode? (= "ai" play-mode)]
    (cond
      (empty? (:players game))
      (username-form)
      (nil? (:play-mode options))
      (play-mode-menu)
      (and ai-mode?
           (nil? ai-difficulty))
      (difficulty-ai-menu)
      (and ai-mode?
           (nil? first-player))
      (goes-first-menu)
      :else
      (tic-tac-toe-board game))))

(defn set-html-game-body [handler game-session]
  (.setBody handler
            (layout
              (render-application game-session))))

(defn send-game-response [handler out game-session]
  (do
    (set-html-game-body handler game-session)
    (.send handler out)))