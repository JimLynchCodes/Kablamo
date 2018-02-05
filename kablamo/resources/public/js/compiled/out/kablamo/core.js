// Compiled by ClojureScript 1.9.908 {}
goog.provide('kablamo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('kablamo.events');
goog.require('kablamo.views');
goog.require('kablamo.config');
kablamo.core.dev_setup = (function kablamo$core$dev_setup(){
if(kablamo.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
kablamo.core.mount_root = (function kablamo$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kablamo.views.main_panel], null),document.getElementById("app"));
});
kablamo.core.init = (function kablamo$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kablamo.events","initialize-db","kablamo.events/initialize-db",-2037468836)], null));

kablamo.core.dev_setup.call(null);

return kablamo.core.mount_root.call(null);
});
goog.exportSymbol('kablamo.core.init', kablamo.core.init);

//# sourceMappingURL=core.js.map?rel=1517847492925
