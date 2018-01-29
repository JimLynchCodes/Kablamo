(ns figwheel.connect.build-dev (:require [kablamo.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/kablamo.core.mount-root (apply js/kablamo.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'kablamo.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

