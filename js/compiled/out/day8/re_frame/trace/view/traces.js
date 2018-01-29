// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.view.traces');
goog.require('cljs.core');
goog.require('day8.re_frame.trace.view.components');
goog.require('day8.re_frame.trace.utils.pretty_print_condensed');
goog.require('re_frame.trace');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('day8.re_frame.trace.utils.localstorage');
goog.require('cljs.pprint');
goog.require('clojure.set');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
day8.re_frame.trace.view.traces.query__GT_fn = (function day8$re_frame$trace$view$traces$query__GT_fn(query){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(query))){
return (function (trace){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))].join('')),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query));
});
} else {
return (function (trace){
return (new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query) < new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(trace));
});
}
});
day8.re_frame.trace.view.traces.add_filter = (function day8$re_frame$trace$view$traces$add_filter(filter_items,filter_input,filter_type){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","add-filter","traces/add-filter",1646631802),filter_input,filter_type], null));
});
day8.re_frame.trace.view.traces.render_traces = (function day8$re_frame$trace$view$traces$render_traces(visible_traces,filter_items,filter_input,trace_detail_expansions){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,p__42192){
var map__42193 = p__42192;
var map__42193__$1 = ((((!((map__42193 == null)))?((((map__42193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42193):map__42193);
var trace = map__42193__$1;
var op_type = cljs.core.get.call(null,map__42193__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var id = cljs.core.get.call(null,map__42193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var operation = cljs.core.get.call(null,map__42193__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var tags = cljs.core.get.call(null,map__42193__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var duration = cljs.core.get.call(null,map__42193__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var show_row_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,trace_detail_expansions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trace_detail_expansions)));
var op_name = ((cljs.core.vector_QMARK_.call(null,operation))?cljs.core.second.call(null,operation):operation);
var x__29148__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
return cljs.core.swap_BANG_.call(null,trace_detail_expansions,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overrides","overrides",1738628867),id], null),((function (show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration){
return (function (p1__42191_SHARP_){
if(cljs.core.truth_(show_row_QMARK_)){
return false;
} else {
return cljs.core.not.call(null,p1__42191_SHARP_);
}
});})(show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration))
);
});})(show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration))
,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["trace--trace",(function (){var G__42199 = op_type;
var G__42199__$1 = (((G__42199 instanceof cljs.core.Keyword))?G__42199.fqn:null);
switch (G__42199__$1) {
case "sub/create":
return "trace--sub-create";

break;
case "sub/run":
return "trace--sub-run";

break;
case "sub/dispose":
return "trace--sub-run";

break;
case "event":
return "trace--event";

break;
case "render":
return "trace--render";

break;
case "re-frame.router/fsm-trigger":
return "trace--fsm-trigger";

break;
default:
return null;

}
})()], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--toggle","td.trace--toggle",1439700573),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.expansion-button","button.expansion-button",-676095342),(cljs.core.truth_(show_row_QMARK_)?"\u25BC":"\u25B6")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op","td.trace--op",12927021),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
day8.re_frame.trace.view.traces.add_filter.call(null,filter_items,cljs.core.name.call(null,op_type),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration))
], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op_type)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--op-string","td.trace--op-string",806514025),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.op-string","span.op-string",1365795266),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration){
return (function (ev){
day8.re_frame.trace.view.traces.add_filter.call(null,filter_items,cljs.core.name.call(null,op_name),new cljs.core.Keyword(null,"contains","contains",676899812));

return ev.stopPropagation();
});})(show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration))
], null),day8.re_frame.trace.utils.pretty_print_condensed.truncate.call(null,(20),new cljs.core.Keyword(null,"middle","middle",-701029031),day8.re_frame.trace.utils.pretty_print_condensed.str__GT_namespaced_sym.call(null,op_name))," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.5,new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),(function (){var temp__4657__auto__ = (function (){var or__28286__auto__ = cljs.core.get.call(null,tags,new cljs.core.Keyword(null,"query-v","query-v",-1514170131));
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.get.call(null,tags,new cljs.core.Keyword(null,"event","event",301435442));
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var vec__42200 = temp__4657__auto__;
var seq__42201 = cljs.core.seq.call(null,vec__42200);
var first__42202 = cljs.core.first.call(null,seq__42201);
var seq__42201__$1 = cljs.core.next.call(null,seq__42201);
var _ = first__42202;
var params = seq__42201__$1;
return day8.re_frame.trace.utils.pretty_print_condensed.truncate_string.call(null,new cljs.core.Keyword(null,"middle","middle",-701029031),(40),clojure.string.join.call(null,", ",cljs.core.map.call(null,day8.re_frame.trace.utils.pretty_print_condensed.pretty_condensed,params)));
} else {
return null;
}
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta","td.trace--meta",-1502909226),duration.toFixed((1))," ms"], null)], null);
return cljs.core._conj.call(null,(function (){var x__29148__auto____$1 = (cljs.core.truth_(show_row_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.trace--details","tr.trace--details",998262242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-details"].join(''),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--details-tags","td.trace--details-tags",1722973599),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__29148__auto__,show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration){
return (function (){
return console.log(tags);
});})(x__29148__auto__,show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.trace--details-tags-text","div.trace--details-tags-text",210345595),(function (){var tag_str = (function (){var sb__29313__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_42205_42208 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_42206_42209 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_42205_42208,_STAR_print_fn_STAR_42206_42209,sb__29313__auto__,x__29148__auto__,show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration){
return (function (x__29314__auto__){
return sb__29313__auto__.append(x__29314__auto__);
});})(_STAR_print_newline_STAR_42205_42208,_STAR_print_fn_STAR_42206_42209,sb__29313__auto__,x__29148__auto__,show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration))
;

try{cljs.pprint.pprint.call(null,tags);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42206_42209;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42205_42208;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29313__auto__)].join('');
})();
var string_size_limit = (400);
if((string_size_limit < cljs.core.count.call(null,tag_str))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,tag_str,(0),string_size_limit))," ..."].join('');
} else {
return tag_str;
}
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.trace--meta.trace--details-icon","td.trace--meta.trace--details-icon",1686328364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (x__29148__auto__,show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration){
return (function (){
return console.log(tags);
});})(x__29148__auto__,show_row_QMARK_,op_name,map__42193,map__42193__$1,trace,op_type,id,operation,tags,duration))
], null)], null)], null):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29148__auto____$1);
})(),x__29148__auto__);
}),visible_traces));
});
day8.re_frame.trace.view.traces.render_trace_panel = (function day8$re_frame$trace$view$traces$render_trace_panel(traces){
var filter_input = reagent.core.atom.call(null,"");
var filter_items = mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347)], null));
var filter_type = reagent.core.atom.call(null,new cljs.core.Keyword(null,"contains","contains",676899812));
var input_error = reagent.core.atom.call(null,false);
var categories = reagent.core.atom.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
var trace_detail_expansions = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-all?","show-all?",503618702),false,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY], null));
return ((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
var toggle_category_fn = ((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (category_keys){
return cljs.core.swap_BANG_.call(null,categories,((function (filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__42210_SHARP_){
if(cljs.core.truth_(clojure.set.superset_QMARK_.call(null,p1__42210_SHARP_,category_keys))){
return clojure.set.difference.call(null,p1__42210_SHARP_,category_keys);
} else {
return clojure.set.union.call(null,p1__42210_SHARP_,category_keys);
}
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
);
});})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
;
var visible_traces = (function (){var G__42213 = cljs.core.deref.call(null,traces);
var G__42213__$1 = ((cljs.core.seq.call(null,cljs.core.deref.call(null,categories)))?cljs.core.filter.call(null,((function (G__42213,toggle_category_fn,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (trace){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace))){
return trace;
} else {
return null;
}
});})(G__42213,toggle_category_fn,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
,G__42213):G__42213);
if(cljs.core.seq.call(null,cljs.core.deref.call(null,filter_items))){
return cljs.core.filter.call(null,cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,day8.re_frame.trace.view.traces.query__GT_fn,cljs.core.deref.call(null,filter_items))),G__42213__$1);
} else {
return G__42213__$1;
}
})();
var save_query = ((function (toggle_category_fn,visible_traces,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (_){
if(cljs.core.truth_((function (){var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.deref.call(null,filter_type),new cljs.core.Keyword(null,"slower-than","slower-than",1137227767));
if(and__28274__auto__){
return isNaN(parseFloat(cljs.core.deref.call(null,filter_input)));
} else {
return and__28274__auto__;
}
})())){
return cljs.core.reset_BANG_.call(null,input_error,true);
} else {
cljs.core.reset_BANG_.call(null,input_error,false);

return day8.re_frame.trace.view.traces.add_filter.call(null,filter_items,cljs.core.deref.call(null,filter_input),cljs.core.deref.call(null,filter_type));
}
});})(toggle_category_fn,visible_traces,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-contents","div.tab-contents",-893703725),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter","div.filter",145823472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control","div.filter-control",1456858546),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-categories","ul.filter-categories",561361953),"show: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword(null,"event","event",301435442)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"events"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword("sub","run","sub/run",-1821315581)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword(null,"render","render",-1408033454)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"reagent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-category","li.filter-category",310802497),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,categories),new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274)))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return toggle_category_fn.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("re-frame.router","fsm-trigger","re-frame.router/fsm-trigger",1379787274),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null), null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"internals"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-fields","div.filter-fields",322405243),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,filter_type),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__42211_SHARP_){
return cljs.core.reset_BANG_.call(null,filter_type,cljs.core.keyword.call(null,p1__42211_SHARP_.target.value));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"contains"], null),"contains"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"slower-than"], null),"slower than"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-control-input","div.filter-control-input",1831328221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.search_input,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-save","on-save",1618176266),save_query,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (p1__42212_SHARP_){
return cljs.core.reset_BANG_.call(null,filter_input,p1__42212_SHARP_.target.value);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,input_error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-error","div.input-error",968893592),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5)], null)], null),"Please enter a valid number."], null):null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.filter-items","ul.filter-items",817035023),cljs.core.map.call(null,((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (item){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.filter-item","li.filter-item",955031911),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","remove-filter","traces/remove-filter",-1645830686),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),new cljs.core.Keyword(null,"filter-type","filter-type",1785113735).cljs$core$IFn$_invoke$arity$1(item),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.filter-item-string","span.filter-item-string",-274349574),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
,cljs.core.deref.call(null,filter_items))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.autoscroll_list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-content-scrollable",new cljs.core.Keyword(null,"scroll?","scroll?",-1393045951),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-button","button.text-button",1574964044),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (ev){
cljs.core.swap_BANG_.call(null,trace_detail_expansions,cljs.core.assoc,new cljs.core.Keyword(null,"overrides","overrides",1738628867),cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.swap_BANG_.call(null,trace_detail_expansions,cljs.core.update,new cljs.core.Keyword(null,"show-all?","show-all?",503618702),cljs.core.not);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),(cljs.core.truth_(new cljs.core.Keyword(null,"show-all?","show-all?",503618702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,trace_detail_expansions)))?"-":"+")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"operations"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["filter-items-count",(((cljs.core.count.call(null,cljs.core.deref.call(null,filter_items)) > (0)))?"active":null)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","reset-filter-items","traces/reset-filter-items",983693273)], null));
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),(((cljs.core.count.call(null,cljs.core.deref.call(null,filter_items)) > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,visible_traces))," of "].join(''):null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,traces)))].join('')], null)," traces ",(((cljs.core.count.call(null,cljs.core.deref.call(null,traces)) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.text-button","button.text-button",1574964044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions){
return (function (){
re_frame.trace.reset_tracing_BANG_.call(null);

return cljs.core.reset_BANG_.call(null,traces,cljs.core.PersistentVector.EMPTY);
});})(toggle_category_fn,visible_traces,save_query,filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
], null),"clear"], null),")"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right"], null)], null),"meta"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),day8.re_frame.trace.view.traces.render_traces.call(null,visible_traces,filter_items,filter_input,trace_detail_expansions)], null)], null)], null)], null);
});
;})(filter_input,filter_items,filter_type,input_error,categories,trace_detail_expansions))
});

//# sourceMappingURL=traces.js.map?rel=1517200927025
