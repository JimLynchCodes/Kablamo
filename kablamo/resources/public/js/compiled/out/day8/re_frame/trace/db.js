// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.db');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.localstorage');
day8.re_frame.trace.db.init_db = (function day8$re_frame$trace$db$init_db(){
var panel_width_PERCENT_ = day8.re_frame.trace.utils.localstorage.get.call(null,"panel-width-ratio",0.35);
var show_panel_QMARK_ = day8.re_frame.trace.utils.localstorage.get.call(null,"show-panel",false);
var selected_tab = day8.re_frame.trace.utils.localstorage.get.call(null,"selected-tab",new cljs.core.Keyword(null,"traces","traces",-1301138004));
var filter_items = day8.re_frame.trace.utils.localstorage.get.call(null,"filter-items",cljs.core.PersistentVector.EMPTY);
var app_db_paths = day8.re_frame.trace.utils.localstorage.get.call(null,"app-db-paths",cljs.core.List.EMPTY);
var json_ml_paths = day8.re_frame.trace.utils.localstorage.get.call(null,"app-db-json-ml-expansions",cljs.core.PersistentHashSet.EMPTY);
var external_window_QMARK_ = day8.re_frame.trace.utils.localstorage.get.call(null,"external-window?",false);
var using_trace_QMARK_ = day8.re_frame.trace.utils.localstorage.get.call(null,"using-trace?",true);
if(cljs.core.truth_(using_trace_QMARK_)){
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359)], null));
} else {
}

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),panel_width_PERCENT_], null));

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),show_panel_QMARK_], null));

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),selected_tab], null));

if(cljs.core.truth_(external_window_QMARK_)){
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null));
} else {
}

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),filter_items], null));

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),app_db_paths], null));

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),json_ml_paths], null));

return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430)], null));
});

//# sourceMappingURL=db.js.map?rel=1517200927567
