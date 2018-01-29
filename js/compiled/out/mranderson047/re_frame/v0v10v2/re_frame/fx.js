// Compiled by ClojureScript 1.9.908 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__41302 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__41303 = null;
var count__41304 = (0);
var i__41305 = (0);
while(true){
if((i__41305 < count__41304)){
var vec__41306 = cljs.core._nth.call(null,chunk__41303,i__41305);
var effect_key = cljs.core.nth.call(null,vec__41306,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41306,(1),null);
var temp__4655__auto___41312 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41312)){
var effect_fn_41313 = temp__4655__auto___41312;
effect_fn_41313.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41314 = seq__41302;
var G__41315 = chunk__41303;
var G__41316 = count__41304;
var G__41317 = (i__41305 + (1));
seq__41302 = G__41314;
chunk__41303 = G__41315;
count__41304 = G__41316;
i__41305 = G__41317;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41302);
if(temp__4657__auto__){
var seq__41302__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41302__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__41302__$1);
var G__41318 = cljs.core.chunk_rest.call(null,seq__41302__$1);
var G__41319 = c__29125__auto__;
var G__41320 = cljs.core.count.call(null,c__29125__auto__);
var G__41321 = (0);
seq__41302 = G__41318;
chunk__41303 = G__41319;
count__41304 = G__41320;
i__41305 = G__41321;
continue;
} else {
var vec__41309 = cljs.core.first.call(null,seq__41302__$1);
var effect_key = cljs.core.nth.call(null,vec__41309,(0),null);
var effect_value = cljs.core.nth.call(null,vec__41309,(1),null);
var temp__4655__auto___41322 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___41322)){
var effect_fn_41323 = temp__4655__auto___41322;
effect_fn_41323.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}

var G__41324 = cljs.core.next.call(null,seq__41302__$1);
var G__41325 = null;
var G__41326 = (0);
var G__41327 = (0);
seq__41302 = G__41324;
chunk__41303 = G__41325;
count__41304 = G__41326;
i__41305 = G__41327;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__41328 = cljs.core.seq.call(null,value);
var chunk__41329 = null;
var count__41330 = (0);
var i__41331 = (0);
while(true){
if((i__41331 < count__41330)){
var map__41332 = cljs.core._nth.call(null,chunk__41329,i__41331);
var map__41332__$1 = ((((!((map__41332 == null)))?((((map__41332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41332.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41332):map__41332);
var effect = map__41332__$1;
var ms = cljs.core.get.call(null,map__41332__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41332__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41328,chunk__41329,count__41330,i__41331,map__41332,map__41332__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41328,chunk__41329,count__41330,i__41331,map__41332,map__41332__$1,effect,ms,dispatch))
,ms);
}

var G__41336 = seq__41328;
var G__41337 = chunk__41329;
var G__41338 = count__41330;
var G__41339 = (i__41331 + (1));
seq__41328 = G__41336;
chunk__41329 = G__41337;
count__41330 = G__41338;
i__41331 = G__41339;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41328);
if(temp__4657__auto__){
var seq__41328__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41328__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__41328__$1);
var G__41340 = cljs.core.chunk_rest.call(null,seq__41328__$1);
var G__41341 = c__29125__auto__;
var G__41342 = cljs.core.count.call(null,c__29125__auto__);
var G__41343 = (0);
seq__41328 = G__41340;
chunk__41329 = G__41341;
count__41330 = G__41342;
i__41331 = G__41343;
continue;
} else {
var map__41334 = cljs.core.first.call(null,seq__41328__$1);
var map__41334__$1 = ((((!((map__41334 == null)))?((((map__41334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41334):map__41334);
var effect = map__41334__$1;
var ms = cljs.core.get.call(null,map__41334__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__41334__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__41328,chunk__41329,count__41330,i__41331,map__41334,map__41334__$1,effect,ms,dispatch,seq__41328__$1,temp__4657__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__41328,chunk__41329,count__41330,i__41331,map__41334,map__41334__$1,effect,ms,dispatch,seq__41328__$1,temp__4657__auto__))
,ms);
}

var G__41344 = cljs.core.next.call(null,seq__41328__$1);
var G__41345 = null;
var G__41346 = (0);
var G__41347 = (0);
seq__41328 = G__41344;
chunk__41329 = G__41345;
count__41330 = G__41346;
i__41331 = G__41347;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__41348 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__41349 = null;
var count__41350 = (0);
var i__41351 = (0);
while(true){
if((i__41351 < count__41350)){
var event = cljs.core._nth.call(null,chunk__41349,i__41351);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41352 = seq__41348;
var G__41353 = chunk__41349;
var G__41354 = count__41350;
var G__41355 = (i__41351 + (1));
seq__41348 = G__41352;
chunk__41349 = G__41353;
count__41350 = G__41354;
i__41351 = G__41355;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41348);
if(temp__4657__auto__){
var seq__41348__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41348__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__41348__$1);
var G__41356 = cljs.core.chunk_rest.call(null,seq__41348__$1);
var G__41357 = c__29125__auto__;
var G__41358 = cljs.core.count.call(null,c__29125__auto__);
var G__41359 = (0);
seq__41348 = G__41356;
chunk__41349 = G__41357;
count__41350 = G__41358;
i__41351 = G__41359;
continue;
} else {
var event = cljs.core.first.call(null,seq__41348__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);

var G__41360 = cljs.core.next.call(null,seq__41348__$1);
var G__41361 = null;
var G__41362 = (0);
var G__41363 = (0);
seq__41348 = G__41360;
chunk__41349 = G__41361;
count__41350 = G__41362;
i__41351 = G__41363;
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__41364 = cljs.core.seq.call(null,value);
var chunk__41365 = null;
var count__41366 = (0);
var i__41367 = (0);
while(true){
if((i__41367 < count__41366)){
var event = cljs.core._nth.call(null,chunk__41365,i__41367);
clear_event.call(null,event);

var G__41368 = seq__41364;
var G__41369 = chunk__41365;
var G__41370 = count__41366;
var G__41371 = (i__41367 + (1));
seq__41364 = G__41368;
chunk__41365 = G__41369;
count__41366 = G__41370;
i__41367 = G__41371;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41364);
if(temp__4657__auto__){
var seq__41364__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41364__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__41364__$1);
var G__41372 = cljs.core.chunk_rest.call(null,seq__41364__$1);
var G__41373 = c__29125__auto__;
var G__41374 = cljs.core.count.call(null,c__29125__auto__);
var G__41375 = (0);
seq__41364 = G__41372;
chunk__41365 = G__41373;
count__41366 = G__41374;
i__41367 = G__41375;
continue;
} else {
var event = cljs.core.first.call(null,seq__41364__$1);
clear_event.call(null,event);

var G__41376 = cljs.core.next.call(null,seq__41364__$1);
var G__41377 = null;
var G__41378 = (0);
var G__41379 = (0);
seq__41364 = G__41376;
chunk__41365 = G__41377;
count__41366 = G__41378;
i__41367 = G__41379;
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
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1517200924429
