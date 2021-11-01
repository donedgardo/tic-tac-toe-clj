(ns tic-tac-toe-html.username-form
  (:require
    [tic-tac-toe-core.intl :refer [INTL]]))

(defn username-form
  ([]
   [:form  {:action "/login" :method "POST"}
    [:label {:for "username"} "Username"]
    [:input {:type "text" :name "username"}]
    [:button
     {:aria-label "login"}
     "Login"]]))
