(ns tic-tac-toe-core.persistable)


(defprotocol Persistable
  (get-session-game-options [this  game-id])
  (get-session-game [this game-id])
  (save-game [this game-id game])
  (save-game-options [this game-id options])
  (top-players [this limit])
  (record-win [this game])
  (record-tie [this game]))