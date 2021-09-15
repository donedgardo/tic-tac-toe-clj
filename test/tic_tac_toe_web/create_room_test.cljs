(ns tic-tac-toe-web.create-room-test
  (:require
    [tic-tac-toe-web.create-room :refer [create-room]]
    [cljs.test :refer-macros [deftest is testing use-fixtures]]
    ["@testing-library/react" :as rtl]
    [reagent.core :as r :refer [atom]]
    [tic-tac-toe-web.core-test :refer [with-mounted-component
                                       click-element]]))

(use-fixtures :each
              {:after rtl/cleanup})

(deftest create-room-test
  (testing "It should create a room"
    (with-mounted-component
      [create-room]
      (fn [component]
        (is
          (= false
             (-> component
                 (.queryByLabelText (str "Hosting Game: X"))
                 nil?))
            )))))

