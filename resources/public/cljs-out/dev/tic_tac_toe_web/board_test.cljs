(ns tic-tac-toe-web.board-test
  (:require
    [tic-tac-toe-clj.constants :refer [new-game X]]
    [tic-tac-toe-clj.rules :refer [play]]
    [tic-tac-toe-web.core :refer [tic-tac-toe-game]]
    [tic-tac-toe-web.core-test :refer [with-mounted-component click-element]]
    ["@testing-library/react" :as rtl]
    [reagent.core :as r :refer [atom]]
    [cljs.test :refer-macros [deftest is testing use-fixtures]]))

(use-fixtures :each
              {:after rtl/cleanup})

(deftest board-component-test
  (testing "It should be empty if the board is empty"
    (with-mounted-component
      [tic-tac-toe-game]
      (fn [component]
        (is
          (= 9
             (-> component
                 (.queryAllByLabelText #"empty-board-space")
                 count))))))

  (testing "It should change board state when clicking on an empty index"
    (with-mounted-component
      [tic-tac-toe-game]
      (fn [component]
        (click-element (.getByLabelText component "empty-board-space-[0 0]"))
        (is
          (= X
             (-> component
                 (.queryByLabelText (str X "-play-" [0 0]))
                 (.-innerHTML))))))))