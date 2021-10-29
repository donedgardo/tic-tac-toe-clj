(ns tic-tac-toe-cli.cli
  (:require
    [clojure.string :refer [blank?]]
    [tic-tac-toe-core.ai :refer :all]
    [tic-tac-toe-core.intl :refer :all]
    [tic-tac-toe-core.core :refer :all]
    [tic-tac-toe-core.constants :refer :all]
    [tic-tac-toe-core.rules :refer :all]))

(defn input->index [input board]
  (let [board-indexes (sort (keys board))]
    (if (nil? input)
      nil
      (nth board-indexes (dec (Integer. input))))))

(defn index->input [index board]
  (let [board-indexes (sort (keys board))]
    (if (nil? index)
      nil
      (inc (.indexOf board-indexes index)))))

(defn get-empty-inputs [board]
  (->> (get-empty-indexes board)
       (map #(index->input % board))))

(defn print-value [value]
  (if (nil? value)
    " "
    value))

(defn is-new-row? [indexes board]
  (and (= 0 (mod (dec (count indexes)) 3))
       (not (= (count (keys board)) (count indexes)))))

(defn add-value-and-new-line [value board-print]
  (str board-print (print-value value) "\n"))

(defn add-value-and-divisor [value board-print]
  (str board-print (print-value value) "|"))

(defn get-display-value [board indexes]
  (or
    (board (first indexes))
    (- (inc (count board)) (count indexes))))

(defn print-board [board]
  (loop [indexes (sort (keys board))
         board-print "\n"]
    (cond
      (empty? indexes)
      board-print
      (is-new-row? indexes board)
      (recur
        (drop 1 indexes)
        (add-value-and-new-line
          (get-display-value board indexes)
          board-print))
      :else
      (recur
        (drop 1 indexes)
        (add-value-and-divisor
          (get-display-value board indexes)
          board-print)))))

(defn get-error-message [index board input]
  (cond
    (blank? input)
    (str "\nEmpty space is not valid input.")
    (not (re-matches #"^-?\d+" input))
    (str "\n" input " is not a valid input because the input is not a number.")
    (nil? index)
    (str "\n" input " is not valid input because its outside the 1 - 9 range.")
    (not (index-empty? index board))
    (str "\n"
         input
         " is not a valid input because the board space is not empty.")
    :else
    nil))

(defn get-player-input [msg board]
  (println msg)
  (let [input (read-line)
        valid-input (re-matches #"^[1-9]{1}$" input)
        index (input->index valid-input board)
        valid-input? (nil? index)
        space-not-empty? (not (index-empty? index board))
        input-error-msg (get-error-message index board input)]
    (if (or valid-input? space-not-empty?)
      (do
        (println (str (print-board board) input-error-msg))
        (recur msg board))
      index)))

(defn play-cli [& [options]]
  (loop [game (create-game-factory options)]
    (let [board (:board game)
          winner (:winner game)
          empty-inputs (get-empty-inputs board)
          player (:active-player game)]
      (println (print-board board))
      (cond
        (not (nil? winner))
        (do
          (println (get-winner-announcement winner))
          winner)
        (:over? game)
        (do
          (println (:cats-game-label INTL))
          nil)
        :else
        (recur
          (play
            game
            (get-player-input
              (str
                "\nAvailable Inputs: \n"
                (pr-str empty-inputs)
                "\n"
                (get-player-turn-label player)
                "\n"
                "Enter " player "s Input: ")
              board)))))))