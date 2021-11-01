(ns tic-tac-toe-server.cookies-helper
  (:import (java.util UUID)))

(def session-key "user-id")
(def game-key "game-id")

(defn get-game-id [request]
  (let [cookies (.getCookies request)]
    (if (or
          (nil? cookies)
          (not (.containsKey cookies game-key)))
      (str (. UUID randomUUID))
      (.get cookies game-key))))

(defn get-username [request]
  (let [cookies (.getCookies request)]
    (if (or
          (nil? cookies)
          (not (.containsKey cookies session-key)))
      nil
      (.get cookies session-key))))

(defn set-cookies [handler {:keys [game-id username]}]
  (let [game-cookie (str game-key "=" game-id)
        username-cookie (str session-key "=" username)]
    (do
      (.addCookie handler username-cookie)
      (.addCookie handler game-cookie))))
