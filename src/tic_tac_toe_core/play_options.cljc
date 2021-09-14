(ns tic-tac-toe-core.play_options
  (:require [tic-tac-toe-core.intl :refer [INTL]]
            [tic-tac-toe-core.ai :refer [get-best-move get-random-move]]))

(def difficulty-options [{:label (:easy-label INTL) :value :easy}
                         {:label (:hard-label INTL) :value :hard}])

(def play-mode-options
  [{:label (:local-mode INTL) :value :local}
   {:label (:ai-mode INTL) :value :ai}])

(def goes-first-options
  [{:label (:player-first-label INTL)
    :value :player}
   {:label (:ai-first-label INTL)
    :value :ai}])