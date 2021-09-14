(ns tic-tac-toe-core.intl)

(def INTL {:difficulty-option-title "Select AI difficulty"
           :easy-label "EASY"
           :hard-label "HARD"
           :play-mode-options-title "Select Play Mode!"
           :ai-mode "Play Against AI Player"
           :cats-game-label "Cats Game!"
           :wins-label "Wins!"
           :local-mode "Play Against Local Player"
           :goes-first-option-title "Who Goes First?"
           :player-first-label "I Go First!"
           :ai-first-label "AI Go First!"
           })

(defn get-winner-announcement [player]
  (str player " " (:wins-label INTL)))

(defn get-player-turn-label [player]
  (str "Player " player "'s Turn!"))