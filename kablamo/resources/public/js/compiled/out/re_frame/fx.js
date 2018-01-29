// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__47925 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47926 = null;
var count__47927 = (0);
var i__47928 = (0);
while(true){
if((i__47928 < count__47927)){
var vec__47929 = cljs.core._nth.call(null,chunk__47926,i__47928);
var effect_key = cljs.core.nth.call(null,vec__47929,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47929,(1),null);
var temp__4655__auto___47935 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47935)){
var effect_fn_47936 = temp__4655__auto___47935;
effect_fn_47936.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__47937 = seq__47925;
var G__47938 = chunk__47926;
var G__47939 = count__47927;
var G__47940 = (i__47928 + (1));
seq__47925 = G__47937;
chunk__47926 = G__47938;
count__47927 = G__47939;
i__47928 = G__47940;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47925);
if(temp__4657__auto__){
var seq__47925__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47925__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__47925__$1);
var G__47941 = cljs.core.chunk_rest.call(null,seq__47925__$1);
var G__47942 = c__29125__auto__;
var G__47943 = cljs.core.count.call(null,c__29125__auto__);
var G__47944 = (0);
seq__47925 = G__47941;
chunk__47926 = G__47942;
count__47927 = G__47943;
i__47928 = G__47944;
continue;
} else {
var vec__47932 = cljs.core.first.call(null,seq__47925__$1);
var effect_key = cljs.core.nth.call(null,vec__47932,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47932,(1),null);
var temp__4655__auto___47945 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47945)){
var effect_fn_47946 = temp__4655__auto___47945;
effect_fn_47946.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__47947 = cljs.core.next.call(null,seq__47925__$1);
var G__47948 = null;
var G__47949 = (0);
var G__47950 = (0);
seq__47925 = G__47947;
chunk__47926 = G__47948;
count__47927 = G__47949;
i__47928 = G__47950;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47951 = cljs.core.seq.call(null,value);
var chunk__47952 = null;
var count__47953 = (0);
var i__47954 = (0);
while(true){
if((i__47954 < count__47953)){
var map__47955 = cljs.core._nth.call(null,chunk__47952,i__47954);
var map__47955__$1 = ((((!((map__47955 == null)))?((((map__47955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47955):map__47955);
var effect = map__47955__$1;
var ms = cljs.core.get.call(null,map__47955__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47955__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47951,chunk__47952,count__47953,i__47954,map__47955,map__47955__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47951,chunk__47952,count__47953,i__47954,map__47955,map__47955__$1,effect,ms,dispatch))
,ms);
}

var G__47959 = seq__47951;
var G__47960 = chunk__47952;
var G__47961 = count__47953;
var G__47962 = (i__47954 + (1));
seq__47951 = G__47959;
chunk__47952 = G__47960;
count__47953 = G__47961;
i__47954 = G__47962;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47951);
if(temp__4657__auto__){
var seq__47951__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47951__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__47951__$1);
var G__47963 = cljs.core.chunk_rest.call(null,seq__47951__$1);
var G__47964 = c__29125__auto__;
var G__47965 = cljs.core.count.call(null,c__29125__auto__);
var G__47966 = (0);
seq__47951 = G__47963;
chunk__47952 = G__47964;
count__47953 = G__47965;
i__47954 = G__47966;
continue;
} else {
var map__47957 = cljs.core.first.call(null,seq__47951__$1);
var map__47957__$1 = ((((!((map__47957 == null)))?((((map__47957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47957):map__47957);
var effect = map__47957__$1;
var ms = cljs.core.get.call(null,map__47957__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47957__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47951,chunk__47952,count__47953,i__47954,map__47957,map__47957__$1,effect,ms,dispatch,seq__47951__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47951,chunk__47952,count__47953,i__47954,map__47957,map__47957__$1,effect,ms,dispatch,seq__47951__$1,temp__4657__auto__))
,ms);
}

var G__47967 = cljs.core.next.call(null,seq__47951__$1);
var G__47968 = null;
var G__47969 = (0);
var G__47970 = (0);
seq__47951 = G__47967;
chunk__47952 = G__47968;
count__47953 = G__47969;
i__47954 = G__47970;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__47971 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__47972 = null;
var count__47973 = (0);
var i__47974 = (0);
while(true){
if((i__47974 < count__47973)){
var event = cljs.core._nth.call(null,chunk__47972,i__47974);
re_frame.router.dispatch.call(null,event);

var G__47975 = seq__47971;
var G__47976 = chunk__47972;
var G__47977 = count__47973;
var G__47978 = (i__47974 + (1));
seq__47971 = G__47975;
chunk__47972 = G__47976;
count__47973 = G__47977;
i__47974 = G__47978;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47971);
if(temp__4657__auto__){
var seq__47971__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47971__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__47971__$1);
var G__47979 = cljs.core.chunk_rest.call(null,seq__47971__$1);
var G__47980 = c__29125__auto__;
var G__47981 = cljs.core.count.call(null,c__29125__auto__);
var G__47982 = (0);
seq__47971 = G__47979;
chunk__47972 = G__47980;
count__47973 = G__47981;
i__47974 = G__47982;
continue;
} else {
var event = cljs.core.first.call(null,seq__47971__$1);
re_frame.router.dispatch.call(null,event);

var G__47983 = cljs.core.next.call(null,seq__47971__$1);
var G__47984 = null;
var G__47985 = (0);
var G__47986 = (0);
seq__47971 = G__47983;
chunk__47972 = G__47984;
count__47973 = G__47985;
i__47974 = G__47986;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__47987 = cljs.core.seq.call(null,value);
var chunk__47988 = null;
var count__47989 = (0);
var i__47990 = (0);
while(true){
if((i__47990 < count__47989)){
var event = cljs.core._nth.call(null,chunk__47988,i__47990);
clear_event.call(null,event);

var G__47991 = seq__47987;
var G__47992 = chunk__47988;
var G__47993 = count__47989;
var G__47994 = (i__47990 + (1));
seq__47987 = G__47991;
chunk__47988 = G__47992;
count__47989 = G__47993;
i__47990 = G__47994;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47987);
if(temp__4657__auto__){
var seq__47987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47987__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__47987__$1);
var G__47995 = cljs.core.chunk_rest.call(null,seq__47987__$1);
var G__47996 = c__29125__auto__;
var G__47997 = cljs.core.count.call(null,c__29125__auto__);
var G__47998 = (0);
seq__47987 = G__47995;
chunk__47988 = G__47996;
count__47989 = G__47997;
i__47990 = G__47998;
continue;
} else {
var event = cljs.core.first.call(null,seq__47987__$1);
clear_event.call(null,event);

var G__47999 = cljs.core.next.call(null,seq__47987__$1);
var G__48000 = null;
var G__48001 = (0);
var G__48002 = (0);
seq__47987 = G__47999;
chunk__47988 = G__48000;
count__47989 = G__48001;
i__47990 = G__48002;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1517200941175
