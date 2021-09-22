(ns tic-tac-toe-web.game-over-test
  (:require
    [tic-tac-toe-core.constants :refer [new-game]]
    [tic-tac-toe-web.board :refer [game-over]]
    [tic-tac-toe-web.core-test :refer [with-mounted-component]]
    ["@testing-library/react" :as rtl]
    [reagent.core :as r]
    [cljs.test :refer-macros [deftest is testing use-fixtures]]))

(use-fixtures :each
              {:after rtl/cleanup})

(deftest game-over-component
  (testing "It should be empty if the game is not over"
    (with-mounted-component
      [game-over new-game]
      (fn [component]
        (is
          (nil?
             (-> component
                 (.queryByText "Cats Game!")))))))

  (testing "It should say Game over."
    (with-mounted-component
      [game-over (assoc new-game :over? true)]
      (fn [component]
        (is
          (not (nil? (-> component
                         (.queryByText "Cats Game!")
                         (.-innerHTML))))))))

  (testing "It should display the winner"
    (with-mounted-component
      [game-over (assoc new-game :over? true :winner "X")]
      (fn [component]
        (is
          (= false
             (nil? (-> component
                 (.queryByText "X Wins!")))))))))