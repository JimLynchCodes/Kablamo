// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame.trace.utils.utils');
goog.require('day8.re_frame.trace.utils.localstorage');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('goog.object');
goog.require('re_frame.db');
goog.require('day8.re_frame.trace.view.container');
goog.require('day8.re_frame.trace.styles');
if(typeof day8.re_frame.trace.events.traces !== 'undefined'){
} else {
day8.re_frame.trace.events.traces = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof day8.re_frame.trace.events.total_traces !== 'undefined'){
} else {
day8.re_frame.trace.events.total_traces = reagent.core.atom.call(null,(0));
}
day8.re_frame.trace.events.log_trace_QMARK_ = (function day8$re_frame$trace$events$log_trace_QMARK_(trace){
var render_operation_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"render","render",-1408033454));
var component_path = cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"component-path","component-path",-1014945685)], null),"");
if(!(render_operation_QMARK_)){
return true;
} else {
return !(clojure.string.includes_QMARK_.call(null,component_path,"devtools outer"));
}
});
day8.re_frame.trace.events.disable_tracing_BANG_ = (function day8$re_frame$trace$events$disable_tracing_BANG_(){
return re_frame.trace.remove_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame.trace.events","cb","day8.re-frame.trace.events/cb",-1725974020));
});
day8.re_frame.trace.events.enable_tracing_BANG_ = (function day8$re_frame$trace$events$enable_tracing_BANG_(){
return re_frame.trace.register_trace_cb.call(null,new cljs.core.Keyword("day8.re-frame.trace.events","cb","day8.re-frame.trace.events/cb",-1725974020),(function (new_traces){
var temp__4657__auto__ = cljs.core.filter.call(null,day8.re_frame.trace.events.log_trace_QMARK_,new_traces);
if(cljs.core.truth_(temp__4657__auto__)){
var new_traces__$1 = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,day8.re_frame.trace.events.total_traces,cljs.core._PLUS_,cljs.core.count.call(null,new_traces__$1));

return cljs.core.swap_BANG_.call(null,day8.re_frame.trace.events.traces,((function (new_traces__$1,temp__4657__auto__){
return (function (existing){
var new$ = cljs.core.reduce.call(null,cljs.core.conj,existing,new_traces__$1);
var size = cljs.core.count.call(null,new$);
if(((4000) < size)){
var new2 = cljs.core.subvec.call(null,new$,(size - (2000)));
if((cljs.core.deref.call(null,day8.re_frame.trace.events.total_traces) < (20000))){
cljs.core.reset_BANG_.call(null,day8.re_frame.trace.events.total_traces,(0));

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,new2);
} else {
return null;
}
} else {
return new$;
}
});})(new_traces__$1,temp__4657__auto__))
);
} else {
return null;
}
}));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
day8.re_frame.trace.events.dissoc_in = (function day8$re_frame$trace$events$dissoc_in(m,p__43971){
var vec__43972 = p__43971;
var seq__43973 = cljs.core.seq.call(null,vec__43972);
var first__43974 = cljs.core.first.call(null,seq__43973);
var seq__43973__$1 = cljs.core.next.call(null,seq__43973);
var k = first__43974;
var ks = seq__43973__$1;
var keys = vec__43972;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = day8.re_frame.trace.events.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),(function (db,p__43975){
var vec__43976 = p__43975;
var _ = cljs.core.nth.call(null,vec__43976,(0),null);
var width_PERCENT_ = cljs.core.nth.call(null,vec__43976,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"panel-width-ratio",(function (){var x__28636__auto__ = width_PERCENT_;
var y__28637__auto__ = 0.05;
return ((x__28636__auto__ > y__28637__auto__) ? x__28636__auto__ : y__28637__auto__);
})());

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341)], null),(function (){var x__28636__auto__ = width_PERCENT_;
var y__28637__auto__ = 0.05;
return ((x__28636__auto__ > y__28637__auto__) ? x__28636__auto__ : y__28637__auto__);
})());
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),(function (db,p__43979){
var vec__43980 = p__43979;
var _ = cljs.core.nth.call(null,vec__43980,(0),null);
var selected_tab = cljs.core.nth.call(null,vec__43980,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"selected-tab",selected_tab);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156)], null),selected_tab);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),(function (db,p__43983){
var vec__43984 = p__43983;
var _ = cljs.core.nth.call(null,vec__43984,(0),null);
var show_panel_QMARK_ = cljs.core.nth.call(null,vec__43984,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"show-panel",show_panel_QMARK_);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),show_panel_QMARK_);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573),(function (db,_){
var now_showing_QMARK_ = cljs.core.not.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null)));
var external_panel_QMARK_ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null));
var using_trace_QMARK_ = (function (){var or__28286__auto__ = external_panel_QMARK_;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return now_showing_QMARK_;
}
})();
if(now_showing_QMARK_){
day8.re_frame.trace.events.enable_tracing_BANG_.call(null);
} else {
if(cljs.core.truth_(external_panel_QMARK_)){
} else {
day8.re_frame.trace.events.disable_tracing_BANG_.call(null);
}
}

day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"using-trace?",using_trace_QMARK_);

day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"show-panel",now_showing_QMARK_);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"using-trace?","using-trace?",2036904112)], null),using_trace_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892)], null),now_showing_QMARK_);
}));
day8.re_frame.trace.events.mount = (function day8$re_frame$trace$events$mount(popup_window,popup_document){
var app = popup_document.getElementById("--re-frame-trace--");
var doc = document;
day8.re_frame.trace.styles.inject_trace_styles.call(null,popup_document);

goog.object.set(popup_window,"onunload",((function (app,doc){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375)], null));
});})(app,doc))
);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer external",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (app,doc){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.container.devtools_inner,day8.re_frame.trace.events.traces,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"popup","popup",635890211)], null)], null);
});})(app,doc))
], null))], null),app);
});
/**
 * Copied from re-frisk.devtool/open-debugger-window
 */
day8.re_frame.trace.events.open_debugger_window = (function day8$re_frame$trace$events$open_debugger_window(){
var map__43987 = new cljs.core.Keyword(null,"prefs","prefs",-1818938470).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var map__43987__$1 = ((((!((map__43987 == null)))?((((map__43987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43987.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43987):map__43987);
var ext_height = cljs.core.get.call(null,map__43987__$1,new cljs.core.Keyword(null,"ext_height","ext_height",-46169089));
var ext_width = cljs.core.get.call(null,map__43987__$1,new cljs.core.Keyword(null,"ext_width","ext_width",925500566));
var w = window.open("","Debugger",["width=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__28286__auto__ = ext_width;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (800);
}
})()),",height=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__28286__auto__ = ext_height;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (800);
}
})()),",resizable=yes,scrollbars=yes,status=no,directories=no,toolbar=no,menubar=no"].join(''));
var d = w.document;
d.open();

d.write("<head></head><body style=\"margin: 0px;\"><div id=\"--re-frame-trace--\" class=\"external-window\"></div></body>");

goog.object.set(w,"onload",((function (map__43987,map__43987__$1,ext_height,ext_width,w,d){
return (function (){
return day8.re_frame.trace.events.mount.call(null,w,d);
});})(map__43987,map__43987__$1,ext_height,ext_width,w,d))
);

return d.close();
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","launch-external","global/launch-external",821773827),(function (ctx,_){
day8.re_frame.trace.events.open_debugger_window.call(null);

day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"external-window?",true);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),true),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(200),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),false], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","external-closed","global/external-closed",1633013375),(function (ctx,_){
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"external-window?",false);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in.call(null,new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(ctx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"external-window?","external-window?",-1259873803)], null),false),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(400),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),true], null)], null)], null)], null);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359),(function (ctx,_){
day8.re_frame.trace.events.enable_tracing_BANG_.call(null);

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","disable-tracing","global/disable-tracing",-1646696295),(function (ctx,_){
day8.re_frame.trace.events.disable_tracing_BANG_.call(null);

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430),(function (_,___$1){
window.addEventListener("beforeunload",(function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),true], null));
}));

return null;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,p__43989){
var vec__43990 = p__43989;
var _ = cljs.core.nth.call(null,vec__43990,(0),null);
var unloading_QMARK_ = cljs.core.nth.call(null,vec__43990,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null),unloading_QMARK_);
}));
day8.re_frame.trace.events.save_filter_items = (function day8$re_frame$trace$events$save_filter_items(filter_items){
return day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"filter-items",filter_items);
});
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,p__43993){
var vec__43994 = p__43993;
var _ = cljs.core.nth.call(null,vec__43994,(0),null);
var filter_items = cljs.core.nth.call(null,vec__43994,(1),null);
day8.re_frame.trace.events.save_filter_items.call(null,filter_items);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null),filter_items);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__44000){
var vec__44001 = p__44000;
var _ = cljs.core.nth.call(null,vec__44001,(0),null);
var filter_input = cljs.core.nth.call(null,vec__44001,(1),null);
var filter_type = cljs.core.nth.call(null,vec__44001,(2),null);
var new_db = (cljs.core.truth_(cljs.core.some.call(null,((function (vec__44001,_,filter_input,filter_type){
return (function (p1__43997_SHARP_){
return cljs.core._EQ_.call(null,filter_input,new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(p1__43997_SHARP_));
});})(vec__44001,_,filter_input,filter_type))
,filter_items))?null:(function (){
if(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),filter_type);
if(and__28274__auto__){
return cljs.core.some.call(null,((function (and__28274__auto__,vec__44001,_,filter_input,filter_type){
return (function (p1__43998_SHARP_){
return cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__43998_SHARP_));
});})(and__28274__auto__,vec__44001,_,filter_input,filter_type))
,filter_items);
} else {
return and__28274__auto__;
}
})())){
cljs.core.remove.call(null,((function (vec__44001,_,filter_input,filter_type){
return (function (p1__43999_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slower-than","slower-than",1137227767),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(p1__43999_SHARP_));
});})(vec__44001,_,filter_input,filter_type))
,filter_items);
} else {
}

return cljs.core.conj.call(null,filter_items,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null),new cljs.core.Keyword(null,"query","query",-1288509510),((cljs.core._EQ_.call(null,filter_type,new cljs.core.Keyword(null,"contains","contains",676899812)))?clojure.string.lower_case.call(null,filter_input):parseFloat(filter_input)),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735),filter_type], null));
})()
);
day8.re_frame.trace.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null))], null),(function (filter_items,p__44005){
var vec__44006 = p__44005;
var _ = cljs.core.nth.call(null,vec__44006,(0),null);
var filter_id = cljs.core.nth.call(null,vec__44006,(1),null);
var new_db = cljs.core.remove.call(null,((function (vec__44006,_,filter_id){
return (function (p1__44004_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__44004_SHARP_),filter_id);
});})(vec__44006,_,filter_id))
,filter_items);
day8.re_frame.trace.events.save_filter_items.call(null,new_db);

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273),(function (db,_){
var new_db = day8.re_frame.trace.events.dissoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
day8.re_frame.trace.events.save_filter_items.call(null,cljs.core.get_in.call(null,new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null)));

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),(function (db,p__44009){
var vec__44010 = p__44009;
var _ = cljs.core.nth.call(null,vec__44010,(0),null);
var paths = cljs.core.nth.call(null,vec__44010,(1),null);
var new_paths = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,paths);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-paths",paths);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),paths);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),(function (db,p__44014){
var vec__44015 = p__44014;
var _ = cljs.core.nth.call(null,vec__44015,(0),null);
var path = cljs.core.nth.call(null,vec__44015,(1),null);
var new_db = cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),((function (vec__44015,_,path){
return (function (p1__44013_SHARP_){
return cljs.core.remove.call(null,((function (vec__44015,_,path){
return (function (p){
return cljs.core._EQ_.call(null,p,path);
});})(vec__44015,_,path))
,p1__44013_SHARP_);
});})(vec__44015,_,path))
);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-paths",cljs.core.get_in.call(null,new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)));

return new_db;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","add-path","app-db/add-path",679847590),(function (db,_){
var search_string = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null));
var path = (function (){try{if(clojure.string.blank_QMARK_.call(null,search_string)){
return null;
} else {
return cljs.reader.read_string.call(null,["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(search_string),"]"].join(''));
}
}catch (e44019){var e = e44019;
return null;
}})();
if(!((path == null))){
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-paths",cljs.core.cons.call(null,path,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null))));

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null)], null));

return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),((function (search_string,path){
return (function (p1__44018_SHARP_){
return cljs.core.cons.call(null,path,p1__44018_SHARP_);
});})(search_string,path))
),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),"");
} else {
return db;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),(function (db,p__44020){
var vec__44021 = p__44020;
var _ = cljs.core.nth.call(null,vec__44021,(0),null);
var search_string = cljs.core.nth.call(null,vec__44021,(1),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null),search_string);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (db,p__44024){
var vec__44025 = p__44024;
var _ = cljs.core.nth.call(null,vec__44025,(0),null);
var paths = cljs.core.nth.call(null,vec__44025,(1),null);
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",paths);

return paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("app-db","toggle-expansion","app-db/toggle-expansion",-1617765538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null))], null),(function (paths,p__44028){
var vec__44029 = p__44028;
var _ = cljs.core.nth.call(null,vec__44029,(0),null);
var path = cljs.core.nth.call(null,vec__44029,(1),null);
var new_paths = ((cljs.core.contains_QMARK_.call(null,paths,path))?cljs.core.disj.call(null,paths,path):cljs.core.conj.call(null,paths,path));
day8.re_frame.trace.utils.localstorage.save_BANG_.call(null,"app-db-json-ml-expansions",new_paths);

return new_paths;
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("snapshot","save-snapshot","snapshot/save-snapshot",1900908499),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710)], null))], null),(function (snapshot,_){
return cljs.core.assoc.call(null,snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222),cljs.core.deref.call(null,re_frame.db.app_db));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("snapshot","load-snapshot","snapshot/load-snapshot",-1238032716),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.re_frame.v0v10v2.re_frame.core.path.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710)], null))], null),(function (snapshot,_){
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222).cljs$core$IFn$_invoke$arity$1(snapshot));

return snapshot;
}));

//# sourceMappingURL=events.js.map?rel=1517200930533
