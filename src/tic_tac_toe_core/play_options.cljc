(ns tic-tac-toe-core.play_options
  (:require [tic-tac-toe-core.intl :refer [INTL]]
            [tic-tac-toe-core.ai :refer [get-best-move get-random-move]]))

(def difficulty-options
  [{:label (:easy-label INTL) :value "easy" :name "difficulty" }
   {:label (:hard-label INTL) :value "hard" :name "difficulty" }])

(def play-mode-options
  [{:label (:local-mode INTL) :value "local" :name "mode" }
   {:label (:ai-mode INTL) :value "ai" :name "mode"}
   {:label (:online-vs-mode INTL) :value :online-vs :name "mode" }])

(def goes-first-options
  [{:label (:player-first-label INTL) :value "player" :name "first-player" }
   {:label (:ai-first-label INTL) :value "ai" :name "first-player" }])

(def online-options
  [{:label (:host-game-option INTL)
    :value :host-game}])
;{:label (:join-game-option INTL)
; :value :join-game}])