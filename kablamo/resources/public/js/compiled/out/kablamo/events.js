// Compiled by ClojureScript 1.9.908 {}
goog.provide('kablamo.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('kablamo.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("kablamo.events","initialize-db","kablamo.events/initialize-db",-2037468836),(function (_,___$1){
return kablamo.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("kablamo.events","button-clicked","kablamo.events/button-clicked",1878589903),(function (db,event){
cljs.core.println.call(null,"hey, the button was clicked! ",db,event);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second.call(null,event));
}));

//# sourceMappingURL=events.js.map?rel=1517847443617
