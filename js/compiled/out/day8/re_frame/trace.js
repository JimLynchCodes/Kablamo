// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame.trace.view.app_db');
goog.require('day8.re_frame.trace.styles');
goog.require('day8.re_frame.trace.view.components');
goog.require('day8.re_frame.trace.view.container');
goog.require('day8.re_frame.trace.utils.localstorage');
goog.require('day8.re_frame.trace.events');
goog.require('day8.re_frame.trace.subs');
goog.require('day8.re_frame.trace.db');
goog.require('re_frame.trace');
goog.require('re_frame.db');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('reagent.core');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('goog.object');
goog.require('re_frame.interop');
goog.require('devtools.formatters.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
day8.re_frame.trace.fiber_component_path = (function day8$re_frame$trace$fiber_component_path(fiber){
var name = (function (){var G__44040 = fiber;
var G__44040__$1 = (((G__44040 == null))?null:(G__44040["type"]));
if((G__44040__$1 == null)){
return null;
} else {
return (G__44040__$1["displayName"]);
}
})();
var parent = (function (){var G__44041 = fiber;
if((G__44041 == null)){
return null;
} else {
return (G__44041["return"]);
}
})();
var path = (function (){var G__44042 = parent;
var G__44042__$1 = (((G__44042 == null))?null:day8.re_frame.trace.fiber_component_path.call(null,G__44042));
if((G__44042__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44042__$1)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
day8.re_frame.trace.component_path = (function day8$re_frame$trace$component_path(c){
var temp__4655__auto__ = (function (){var G__44043 = c;
if((G__44043 == null)){
return null;
} else {
return (G__44043["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var fiber = temp__4655__auto__;
return day8.re_frame.trace.fiber_component_path.call(null,fiber);
} else {
return reagent.impl.component.component_path.call(null,c);
}
});
day8.re_frame.trace.comp_name = (function day8$re_frame$trace$comp_name(c){
var n = (function (){var or__28286__auto__ = day8.re_frame.trace.component_path.call(null,c);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var G__44044 = c;
var G__44044__$1 = (((G__44044 == null))?null:G__44044.constructor);
if((G__44044__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__44044__$1);
}
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return n;
} else {
return "";
}
});
day8.re_frame.trace.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame$trace$render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_44045 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame.trace.component_path.call(null,c)], null),new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame.trace.component_path.call(null,c),/ > /))], null));

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,_STAR_current_trace_STAR_44045,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,_STAR_current_trace_STAR_44045,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__30780__auto___44058 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__30780__auto___44058;

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30775__auto___44059 = re_frame.interop.now.call(null);
var duration__30776__auto___44060 = (end__30775__auto___44059 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__44046_44061 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__44047_44062 = null;
var count__44048_44063 = (0);
var i__44049_44064 = (0);
while(true){
if((i__44049_44064 < count__44048_44063)){
var vec__44050_44065 = cljs.core._nth.call(null,chunk__44047_44062,i__44049_44064);
var k__30777__auto___44066 = cljs.core.nth.call(null,vec__44050_44065,(0),null);
var cb__30778__auto___44067 = cljs.core.nth.call(null,vec__44050_44065,(1),null);
try{cb__30778__auto___44067.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44060,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44053){if((e44053 instanceof java.lang.Exception)){
var e__30779__auto___44068 = e44053;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44066,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44068);
} else {
throw e44053;

}
}
var G__44069 = seq__44046_44061;
var G__44070 = chunk__44047_44062;
var G__44071 = count__44048_44063;
var G__44072 = (i__44049_44064 + (1));
seq__44046_44061 = G__44069;
chunk__44047_44062 = G__44070;
count__44048_44063 = G__44071;
i__44049_44064 = G__44072;
continue;
} else {
var temp__4657__auto___44073 = cljs.core.seq.call(null,seq__44046_44061);
if(temp__4657__auto___44073){
var seq__44046_44074__$1 = temp__4657__auto___44073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44046_44074__$1)){
var c__29125__auto___44075 = cljs.core.chunk_first.call(null,seq__44046_44074__$1);
var G__44076 = cljs.core.chunk_rest.call(null,seq__44046_44074__$1);
var G__44077 = c__29125__auto___44075;
var G__44078 = cljs.core.count.call(null,c__29125__auto___44075);
var G__44079 = (0);
seq__44046_44061 = G__44076;
chunk__44047_44062 = G__44077;
count__44048_44063 = G__44078;
i__44049_44064 = G__44079;
continue;
} else {
var vec__44054_44080 = cljs.core.first.call(null,seq__44046_44074__$1);
var k__30777__auto___44081 = cljs.core.nth.call(null,vec__44054_44080,(0),null);
var cb__30778__auto___44082 = cljs.core.nth.call(null,vec__44054_44080,(1),null);
try{cb__30778__auto___44082.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44060,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44057){if((e44057 instanceof java.lang.Exception)){
var e__30779__auto___44083 = e44057;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44081,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44083);
} else {
throw e44057;

}
}
var G__44084 = cljs.core.next.call(null,seq__44046_44074__$1);
var G__44085 = null;
var G__44086 = (0);
var G__44087 = (0);
seq__44046_44061 = G__44084;
chunk__44047_44062 = G__44085;
count__44048_44063 = G__44086;
i__44049_44064 = G__44087;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_44045;
}} else {
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__30780__auto___44088 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__30780__auto___44088;

} else {
}

return res;
}
}
})], null);
day8.re_frame.trace.monkey_patch_reagent = (function day8$re_frame$trace$monkey_patch_reagent(){
var real_custom_wrapper = reagent.impl.component.custom_wrapper;
var real_next_tick = reagent.impl.batching.next_tick;
var real_schedule = reagent.impl.batching.schedule;
reagent.impl.component.static_fns = day8.re_frame.trace.static_fns;

return reagent.impl.component.custom_wrapper = ((function (real_custom_wrapper,real_next_tick,real_schedule){
return (function (key,f){
var G__44089 = key;
var G__44089__$1 = (((G__44089 instanceof cljs.core.Keyword))?G__44089.fqn:null);
switch (G__44089__$1) {
case "componentWillUnmount":
return ((function (G__44089,G__44089__$1,real_custom_wrapper,real_next_tick,real_schedule){
return (function (){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_44090_44104 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),key,new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame.trace.comp_name.call(null,c),/ > /)),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame.trace.component_path.call(null,c),new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,(c["cljsRatom"]))], null)], null));

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30775__auto___44105 = re_frame.interop.now.call(null);
var duration__30776__auto___44106 = (end__30775__auto___44105 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__44091_44107 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__44092_44108 = null;
var count__44093_44109 = (0);
var i__44094_44110 = (0);
while(true){
if((i__44094_44110 < count__44093_44109)){
var vec__44095_44111 = cljs.core._nth.call(null,chunk__44092_44108,i__44094_44110);
var k__30777__auto___44112 = cljs.core.nth.call(null,vec__44095_44111,(0),null);
var cb__30778__auto___44113 = cljs.core.nth.call(null,vec__44095_44111,(1),null);
try{cb__30778__auto___44113.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44106,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44098){if((e44098 instanceof java.lang.Exception)){
var e__30779__auto___44114 = e44098;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44112,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44114);
} else {
throw e44098;

}
}
var G__44115 = seq__44091_44107;
var G__44116 = chunk__44092_44108;
var G__44117 = count__44093_44109;
var G__44118 = (i__44094_44110 + (1));
seq__44091_44107 = G__44115;
chunk__44092_44108 = G__44116;
count__44093_44109 = G__44117;
i__44094_44110 = G__44118;
continue;
} else {
var temp__4657__auto___44119 = cljs.core.seq.call(null,seq__44091_44107);
if(temp__4657__auto___44119){
var seq__44091_44120__$1 = temp__4657__auto___44119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44091_44120__$1)){
var c__29125__auto___44121 = cljs.core.chunk_first.call(null,seq__44091_44120__$1);
var G__44122 = cljs.core.chunk_rest.call(null,seq__44091_44120__$1);
var G__44123 = c__29125__auto___44121;
var G__44124 = cljs.core.count.call(null,c__29125__auto___44121);
var G__44125 = (0);
seq__44091_44107 = G__44122;
chunk__44092_44108 = G__44123;
count__44093_44109 = G__44124;
i__44094_44110 = G__44125;
continue;
} else {
var vec__44099_44126 = cljs.core.first.call(null,seq__44091_44120__$1);
var k__30777__auto___44127 = cljs.core.nth.call(null,vec__44099_44126,(0),null);
var cb__30778__auto___44128 = cljs.core.nth.call(null,vec__44099_44126,(1),null);
try{cb__30778__auto___44128.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30776__auto___44106,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e44102){if((e44102 instanceof java.lang.Exception)){
var e__30779__auto___44129 = e44102;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__30777__auto___44127,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__30779__auto___44129);
} else {
throw e44102;

}
}
var G__44130 = cljs.core.next.call(null,seq__44091_44120__$1);
var G__44131 = null;
var G__44132 = (0);
var G__44133 = (0);
seq__44091_44107 = G__44130;
chunk__44092_44108 = G__44131;
count__44093_44109 = G__44132;
i__44094_44110 = G__44133;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_44090_44104;
}} else {
}

return real_custom_wrapper.call(null,key,f).call(c,c);
});
;})(G__44089,G__44089__$1,real_custom_wrapper,real_next_tick,real_schedule))

break;
default:
return real_custom_wrapper.call(null,key,f);

}
});})(real_custom_wrapper,real_next_tick,real_schedule))
;
});
/**
 * Sets up any initial state that needs to be there for tracing. Does not enable tracing.
 */
day8.re_frame.trace.init_tracing_BANG_ = (function day8$re_frame$trace$init_tracing_BANG_(){
return day8.re_frame.trace.monkey_patch_reagent.call(null);
});
day8.re_frame.trace.resizer_style = (function day8$re_frame$trace$resizer_style(draggable_area){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (draggable_area / (2)))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null);
});
day8.re_frame.trace.ease_transition = "left 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out";
day8.re_frame.trace.devtools_outer = (function day8$re_frame$trace$devtools_outer(traces,opts){
var position = reagent.core.atom.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var panel_width_PERCENT_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null));
var showing_QMARK_ = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945)], null));
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var pin_to_bottom_QMARK_ = reagent.core.atom.call(null,true);
var selected_tab = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null));
var window_width = reagent.core.atom.call(null,window.innerWidth);
var handle_window_resize = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width){
return (function (e){
return cljs.core.reset_BANG_.call(null,window_width,window.innerWidth);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width))
;
var handle_keys = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize){
return (function (e){
var combo_key_QMARK_ = (function (){var or__28286__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return e.altKey;
}
}
})();
var tag_name = e.target.tagName;
var key = e.key;
var entering_input_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(cljs.core.truth_((function (){var and__28274__auto__ = !(entering_input_QMARK_);
if(and__28274__auto__){
return combo_key_QMARK_;
} else {
return and__28274__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core._EQ_.call(null,key,"h");
if(and__28274__auto__){
return e.ctrlKey;
} else {
return and__28274__auto__;
}
})())){
mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573)], null));

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize))
;
var handle_mousemove = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))){
var x = e.clientX;
var y = e.clientY;
var new_window_width = window.innerWidth;
e.preventDefault();

mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),((new_window_width - x) / new_window_width)], null));

return cljs.core.reset_BANG_.call(null,window_width,new_window_width);
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys))
;
var handle_mouse_up = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove){
return (function (e){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.addEventListener("keydown",handle_keys);

window.addEventListener("mousemove",handle_mousemove);

window.addEventListener("mouseup",handle_mouse_up);

return window.addEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.removeEventListener("keydown",handle_keys);

window.removeEventListener("mousemove",handle_mousemove);

window.removeEventListener("mouseup",handle_mouse_up);

return window.removeEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
var draggable_area = (10);
var left = (cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((1) - cljs.core.deref.call(null,panel_width_PERCENT_)))),"%"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_width)),"px"].join(''));
var transition = (cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))?"":day8.re_frame.trace.ease_transition);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrapper","div.panel-wrapper",-807046921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99999999)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["rgba(0, 0, 0, 0.3) 0px 0px 4px",transition,"0px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * cljs.core.deref.call(null,panel_width_PERCENT_))),"%"].join(''),"white",(1),"flex","fixed","100%",left])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-resizer","div.panel-resizer",1762174164),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.resizer_style.call(null,draggable_area),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.container.devtools_inner,traces,opts], null)], null)], null);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null));
});
day8.re_frame.trace.panel_div = (function day8$re_frame$trace$panel_div(){
var id = "--re-frame-trace--";
var panel = document.getElementById(id);
if(cljs.core.truth_(panel)){
return panel;
} else {
var new_panel = document.createElement("div");
new_panel.setAttribute("id",id);

document.body.appendChild(new_panel);

window.focus(new_panel);

return new_panel;
}
});
day8.re_frame.trace.inject_devtools_BANG_ = (function day8$re_frame$trace$inject_devtools_BANG_(){
day8.re_frame.trace.styles.inject_trace_styles.call(null,document);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.devtools_outer,day8.re_frame.trace.events.traces,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"inline","inline",1399884222)], null)], null),day8.re_frame.trace.panel_div.call(null));
});
day8.re_frame.trace.init_db_BANG_ = (function day8$re_frame$trace$init_db_BANG_(){
return day8.re_frame.trace.db.init_db.call(null);
});

//# sourceMappingURL=trace.js.map?rel=1517200930741
