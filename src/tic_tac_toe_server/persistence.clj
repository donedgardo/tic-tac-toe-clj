(ns tic-tac-toe-server.persistence
  (:require [tic-tac-toe-server.file_persistence :refer [game-persistence]]))

(defn persist-session [game-id game-session]
  (do
    (.save-game-options game-persistence game-id (:options game-session))))
