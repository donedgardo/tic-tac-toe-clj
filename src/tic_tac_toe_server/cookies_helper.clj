(ns tic-tac-toe-server.cookies-helper
  (:import (java.util UUID)))

(def session-key "session-id")
(def game-key "game-id")
(defn get-session-id [request]
  (let [cookies (.getCookies request)]
    (if (or
          (nil? cookies)
          (not (.containsKey cookies session-key)))
      (str (. UUID randomUUID))
      (.get cookies session-key))))

(defn get-game-id [request]
  (let [cookies (.getCookies request)]
    (if (or
          (nil? cookies)
          (not (.containsKey cookies game-key)))
      (str (. UUID randomUUID))
      (.get cookies game-key))))

(defn set-cookies [handler {:keys [game-id]}]
  (let [game-cookie (str game-key "=" game-id)]
    (.addCookie handler game-cookie)))
