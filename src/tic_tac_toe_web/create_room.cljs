(ns ^:figwheel-hooks tic-tac-toe-web.create-room
  (:require
    [cljs.core.async :refer [go]]
    [cljs.core.async.interop :refer-macros [<p!]]))


(defn create-ipfs-room []
  (go
    (let [node (<p!
                 (.create js/Ipfs
                          (clj->js {:config
                                     {:Addresses
                                      {:Swarm
                                       ["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star"
                                        "/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star"]}}
                                     })))]
      [:div "room"])))

(defn create-room []
  (let [x (create-ipfs-room)
        log (js/console.log x)]
    [:div "room"]))
