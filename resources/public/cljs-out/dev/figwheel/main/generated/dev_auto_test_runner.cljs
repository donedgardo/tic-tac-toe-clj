(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [tic-tac-toe-web.game-over-test] [tic-tac-toe-web.board-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote tic-tac-toe-web.game-over-test) (quote tic-tac-toe-web.board-test))