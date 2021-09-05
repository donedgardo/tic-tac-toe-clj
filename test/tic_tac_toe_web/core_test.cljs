(ns tic-tac-toe-web.core-test
  (:require
    ["@testing-library/react" :as rtl]
    [reagent.core :as r]))

(defn with-mounted-component [comp f]
  (let [mounted-component (rtl/render (r/as-element comp))]
    (try
      (f mounted-component)
      (finally
        (.unmount mounted-component)
        (r/flush)))))

(defn click-element [el]
  (.click rtl/fireEvent el)
  (r/flush))


(defn label-component-in-dom? [component label]
  (= false
     (nil?
       (-> component
           (.queryByLabelText label)))))

(defn expect-empty-board [component]
  (= 9
     (-> component
         (.queryAllByLabelText #"empty-board-space")
         count)))