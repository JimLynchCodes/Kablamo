// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40515_40516 = value;
x40515_40516.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40518_40519 = value;
x40518_40519.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40521_40522 = value;
x40521_40522.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__28274__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28274__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40529 = arguments.length;
var i__29456__auto___40530 = (0);
while(true){
if((i__29456__auto___40530 < len__29455__auto___40529)){
args__29462__auto__.push((arguments[i__29456__auto___40530]));

var G__40531 = (i__29456__auto___40530 + (1));
i__29456__auto___40530 = G__40531;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40525_40532 = cljs.core.seq.call(null,items);
var chunk__40526_40533 = null;
var count__40527_40534 = (0);
var i__40528_40535 = (0);
while(true){
if((i__40528_40535 < count__40527_40534)){
var item_40536 = cljs.core._nth.call(null,chunk__40526_40533,i__40528_40535);
if(!((item_40536 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40536)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40536)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40536));
}
} else {
}

var G__40537 = seq__40525_40532;
var G__40538 = chunk__40526_40533;
var G__40539 = count__40527_40534;
var G__40540 = (i__40528_40535 + (1));
seq__40525_40532 = G__40537;
chunk__40526_40533 = G__40538;
count__40527_40534 = G__40539;
i__40528_40535 = G__40540;
continue;
} else {
var temp__4657__auto___40541 = cljs.core.seq.call(null,seq__40525_40532);
if(temp__4657__auto___40541){
var seq__40525_40542__$1 = temp__4657__auto___40541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40525_40542__$1)){
var c__29125__auto___40543 = cljs.core.chunk_first.call(null,seq__40525_40542__$1);
var G__40544 = cljs.core.chunk_rest.call(null,seq__40525_40542__$1);
var G__40545 = c__29125__auto___40543;
var G__40546 = cljs.core.count.call(null,c__29125__auto___40543);
var G__40547 = (0);
seq__40525_40532 = G__40544;
chunk__40526_40533 = G__40545;
count__40527_40534 = G__40546;
i__40528_40535 = G__40547;
continue;
} else {
var item_40548 = cljs.core.first.call(null,seq__40525_40542__$1);
if(!((item_40548 == null))){
if(cljs.core.coll_QMARK_.call(null,item_40548)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40548)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40548));
}
} else {
}

var G__40549 = cljs.core.next.call(null,seq__40525_40542__$1);
var G__40550 = null;
var G__40551 = (0);
var G__40552 = (0);
seq__40525_40532 = G__40549;
chunk__40526_40533 = G__40550;
count__40527_40534 = G__40551;
i__40528_40535 = G__40552;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40524){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40524));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40560 = arguments.length;
var i__29456__auto___40561 = (0);
while(true){
if((i__29456__auto___40561 < len__29455__auto___40560)){
args__29462__auto__.push((arguments[i__29456__auto___40561]));

var G__40562 = (i__29456__auto___40561 + (1));
i__29456__auto___40561 = G__40562;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((2) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29463__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40556_40563 = cljs.core.seq.call(null,children);
var chunk__40557_40564 = null;
var count__40558_40565 = (0);
var i__40559_40566 = (0);
while(true){
if((i__40559_40566 < count__40558_40565)){
var child_40567 = cljs.core._nth.call(null,chunk__40557_40564,i__40559_40566);
if(!((child_40567 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40567)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40567))));
} else {
var temp__4655__auto___40568 = devtools.formatters.helpers.pref.call(null,child_40567);
if(cljs.core.truth_(temp__4655__auto___40568)){
var child_value_40569 = temp__4655__auto___40568;
template.push(child_value_40569);
} else {
}
}
} else {
}

var G__40570 = seq__40556_40563;
var G__40571 = chunk__40557_40564;
var G__40572 = count__40558_40565;
var G__40573 = (i__40559_40566 + (1));
seq__40556_40563 = G__40570;
chunk__40557_40564 = G__40571;
count__40558_40565 = G__40572;
i__40559_40566 = G__40573;
continue;
} else {
var temp__4657__auto___40574 = cljs.core.seq.call(null,seq__40556_40563);
if(temp__4657__auto___40574){
var seq__40556_40575__$1 = temp__4657__auto___40574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40556_40575__$1)){
var c__29125__auto___40576 = cljs.core.chunk_first.call(null,seq__40556_40575__$1);
var G__40577 = cljs.core.chunk_rest.call(null,seq__40556_40575__$1);
var G__40578 = c__29125__auto___40576;
var G__40579 = cljs.core.count.call(null,c__29125__auto___40576);
var G__40580 = (0);
seq__40556_40563 = G__40577;
chunk__40557_40564 = G__40578;
count__40558_40565 = G__40579;
i__40559_40566 = G__40580;
continue;
} else {
var child_40581 = cljs.core.first.call(null,seq__40556_40575__$1);
if(!((child_40581 == null))){
if(cljs.core.coll_QMARK_.call(null,child_40581)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40581))));
} else {
var temp__4655__auto___40582 = devtools.formatters.helpers.pref.call(null,child_40581);
if(cljs.core.truth_(temp__4655__auto___40582)){
var child_value_40583 = temp__4655__auto___40582;
template.push(child_value_40583);
} else {
}
}
} else {
}

var G__40584 = cljs.core.next.call(null,seq__40556_40575__$1);
var G__40585 = null;
var G__40586 = (0);
var G__40587 = (0);
seq__40556_40563 = G__40584;
chunk__40557_40564 = G__40585;
count__40558_40565 = G__40586;
i__40559_40566 = G__40587;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40553){
var G__40554 = cljs.core.first.call(null,seq40553);
var seq40553__$1 = cljs.core.next.call(null,seq40553);
var G__40555 = cljs.core.first.call(null,seq40553__$1);
var seq40553__$2 = cljs.core.next.call(null,seq40553__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40554,G__40555,seq40553__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40590 = arguments.length;
var i__29456__auto___40591 = (0);
while(true){
if((i__29456__auto___40591 < len__29455__auto___40590)){
args__29462__auto__.push((arguments[i__29456__auto___40591]));

var G__40592 = (i__29456__auto___40591 + (1));
i__29456__auto___40591 = G__40592;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40588){
var G__40589 = cljs.core.first.call(null,seq40588);
var seq40588__$1 = cljs.core.next.call(null,seq40588);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40589,seq40588__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40595 = arguments.length;
var i__29456__auto___40596 = (0);
while(true){
if((i__29456__auto___40596 < len__29455__auto___40595)){
args__29462__auto__.push((arguments[i__29456__auto___40596]));

var G__40597 = (i__29456__auto___40596 + (1));
i__29456__auto___40596 = G__40597;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40593){
var G__40594 = cljs.core.first.call(null,seq40593);
var seq40593__$1 = cljs.core.next.call(null,seq40593);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40594,seq40593__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__40599 = arguments.length;
switch (G__40599) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40601 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28286__auto__ = start_index;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (0);
}
})()};
return obj40601;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40609 = arguments.length;
var i__29456__auto___40610 = (0);
while(true){
if((i__29456__auto___40610 < len__29455__auto___40609)){
args__29462__auto__.push((arguments[i__29456__auto___40610]));

var G__40611 = (i__29456__auto___40610 + (1));
i__29456__auto___40610 = G__40611;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40605){
var vec__40606 = p__40605;
var state_override_fn = cljs.core.nth.call(null,vec__40606,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40603){
var G__40604 = cljs.core.first.call(null,seq40603);
var seq40603__$1 = cljs.core.next.call(null,seq40603);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40604,seq40603__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40612 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40612;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__40613 = name;
switch (G__40613) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__40615 = tag;
var html_tag = cljs.core.nth.call(null,vec__40615,(0),null);
var style = cljs.core.nth.call(null,vec__40615,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40618 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40618;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40619 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40620 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40620;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40619;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40621 = initial_value;
var G__40622 = value.call(null);
initial_value = G__40621;
value = G__40622;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40623 = initial_value;
var G__40624 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40623;
value = G__40624;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40625 = initial_value;
var G__40626 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40625;
value = G__40626;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1517200922717
