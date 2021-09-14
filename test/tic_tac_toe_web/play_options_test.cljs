(ns tic-tac-toe-web.play-options-test
  (:require
    [tic-tac-toe-web.core :refer [play-menu]]
    ["@testing-library/react" :as rtl]
    [cljs.test :refer-macros [deftest is testing use-fixtures]]
    [tic-tac-toe-web.core-test :refer [with-mounted-component
                                       click-element
                                       expect-empty-board
                                       label-component-in-dom?]]))

(use-fixtures :each
              {:after rtl/cleanup})

(deftest play-options-component-test
  (testing "It should show play local option"
    (with-mounted-component
      [play-menu]
      (fn [component]
        (is
          (label-component-in-dom? component ":local-mode")))))
  (testing "It should show play ai option"
    (with-mounted-component
      [play-menu]
      (fn [component]
        (is
          (label-component-in-dom? component ":ai-mode")))))
  (testing "It should empty board after clicking local player option"
    (with-mounted-component
      [play-menu]
      (fn [component]
        (click-element (.getByLabelText component ":local-mode"))
        (is
          (expect-empty-board component)))))
  (testing "It should go back to play options after clicking the play-option button"
    (with-mounted-component
      [play-menu]
      (fn [component]
        (click-element (.getByLabelText component ":local-mode"))
        (click-element (.getByLabelText component "play-options-menu"))
        (is
          (label-component-in-dom? component ":ai-mode")))))
  (testing "It show difficulty options after picking play against ai player player"
    (with-mounted-component
      [play-menu]
      (fn [component]
        (click-element (.getByLabelText component ":ai-mode"))
        (is
          (label-component-in-dom? component "EASY-ai-difficulty"))
        (is
          (label-component-in-dom? component "HARD-ai-difficulty")))))
  (testing "It show who goes first options after picking ai difficulty"
    (with-mounted-component
      [play-menu]
      (fn [component]
        (click-element (.getByLabelText component ":ai-mode"))
        (click-element (.getByLabelText component "EASY-ai-difficulty"))
        (is
          (label-component-in-dom? component ":player-goes-first"))
        (is
          (label-component-in-dom? component ":ai-goes-first")))))
  (testing "It show board with x played when player selects ai to go first"
    (with-mounted-component
      [play-menu]
      (fn [component]
        (click-element (.getByLabelText component ":ai-mode"))
        (click-element (.getByLabelText component "EASY-ai-difficulty"))
        (click-element (.getByLabelText component ":ai-goes-first"))
        (is
          (label-component-in-dom? component #"X-play-"))
        ))))

