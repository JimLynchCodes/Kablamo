(ns kablamo.views
  (:require [re-frame.core :as re-frame]
            [kablamo.subs :as subs]
            ))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        kablamming (re-frame/subscribe [::subs/kablamming])

        ]
    [:svg {:viewBox "0 0 960 300"} "\t"
          [:symbol {:id "s-text"} "\t\t"
           [:text {:text-anchor "middle", :x "50%", :y "80%"} "Kablamo!"]"\t"]"\n\t"
          [:g {:class "g-ants"} "\t\t"
           [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
           [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
           [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
           [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t\t"
           [:use {:xlinkHref "#s-text", :class "text-copy"}]"\t"]]))






