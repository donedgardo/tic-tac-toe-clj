(ns tic-tac-toe-web.board-test
  (:require
    [tic-tac-toe-core.constants :refer [new-game X]]
    [tic-tac-toe-core.rules :refer [play]]
    [tic-tac-toe-web.board :refer [tic-tac-toe-board]]
    [cljs.test :refer-macros [deftest is testing use-fixtures]]
    ["@testing-library/react" :as rtl]
    [reagent.core :as r :refer [atom]]
    [tic-tac-toe-web.core-test :refer [with-mounted-component
                                       click-element
                                       expect-empty-board]]))

(use-fixtures :each
              {:after rtl/cleanup})

(defn play-position [component position]
  (click-element (.getByLabelText component (str "empty-board-space-" position))))

(deftest board-component-test
  (testing "It should be empty if the board is empty"
    (with-mounted-component
      [tic-tac-toe-board]
      (fn [component]
        (is
          (expect-empty-board component)))))

  (testing "It should change board state when clicking on an empty index"
    (with-mounted-component
      [tic-tac-toe-board]
      (fn [component]
        (play-position component [0 0])
        (is
          (= X
             (-> component
                 (.queryByLabelText (str X "-play-" [0 0]))
                 (.-innerHTML)))))))

  (testing "It should reset the board after clicking the reset button."
    (with-mounted-component
      [tic-tac-toe-board]
      (fn [component]
        (click-element (.getByLabelText component "reset-game"))
        (is
          (expect-empty-board component)))))

  (testing "It should show X as active players turn."
    (with-mounted-component
      [tic-tac-toe-board]
      (fn [component]
        (is
          (not
            (nil?
              (-> component
                  (.queryByText "Player X's Turn!"))))))))

  (testing "It should show O as active players turn after first play."
    (with-mounted-component
      [tic-tac-toe-board]
      (fn [component]
        (play-position component [0 0])
        (is
          (not
            (nil?
              (-> component
                  (.queryByText "Player O's Turn!")))))))))

