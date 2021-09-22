(ns tic-tac-toe-web.join-game-test
  (:require
    [tic-tac-toe-web.join-game :refer [join-game]]
    [cljs.test :refer-macros [deftest is testing use-fixtures ]]
    ["@testing-library/react" :as rtl]
    [tic-tac-toe-web.core-test :refer [with-mounted-component
                                       click-element
                                       label-component-in-dom?
                                       expect-empty-board]]))

(use-fixtures :each
              {:after rtl/cleanup})


(deftest join-game-test
  (testing "It should loading screen when joining game"
    (with-mounted-component
      [join-game 1 2]
      (fn [component]
        (is
          (label-component-in-dom? component "join-room-loading"))))))

