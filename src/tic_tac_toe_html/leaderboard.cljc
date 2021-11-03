(ns tic-tac-toe-html.leaderboard)

(defn render-leaderboard-row [[username score]]
  [:tr
   [:td username]
   [:td score]])

(defn leaderboard-html
  ([leaderboard]
   [:h2 "Leaderboard"
    [:table
     [:tr
      [:th "Player"]
      [:th "Score"]]
     (map #(render-leaderboard-row %) leaderboard)]]))
