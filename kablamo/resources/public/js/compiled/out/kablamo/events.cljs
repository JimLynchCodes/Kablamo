(ns kablamo.events
  (:require [re-frame.core :as re-frame]
            [kablamo.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
  ::button-clicked
  (fn [ db event]
    (println "hey, the button was clicked! " db event)
               (assoc db :name (second event))))