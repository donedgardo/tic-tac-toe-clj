(defproject tic-tac-toe-web "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}

  :resource-paths ["lib/app.jar"]
  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.773"]
                 [org.clojure/core.async "1.3.618"]
                 [clj-commons/secretary "1.2.5-SNAPSHOT"]
                 [venantius/accountant "0.2.4"]
                 [reagent "0.10.0" :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]]
                 [com.datomic/dev-local "1.0.238"]
                 [hiccup "1.0.5"]]

  :source-paths ["src"]

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["trampoline" "run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "tic-tac-toe-web.test-runner"]
            "server"    ["run" "-m" "tic-tac-toe-server.core/start"]}


  :profiles {:dev {:dependencies   [[com.bhauman/figwheel-main "0.2.12"]
                                    [clj-http "3.12.3"]
                                    [com.bhauman/rebel-readline-cljs "0.1.4"]
                                    [speclj "3.3.2"]]
                   :resource-paths ["target"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets  ^{:protect false} ["target"]}}
  :plugins [[speclj "3.3.2"]]
  :repositories [["cognitect-dev-tools"
                  {:url      "https://dev-tools.cognitect.com/maven/releases/"
                   :username :env
                   :password :env}]]
  :test-paths ["test"])


