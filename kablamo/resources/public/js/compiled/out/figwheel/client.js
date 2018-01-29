// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37462){if((e37462 instanceof Error)){
var e = e37462;
return "Error: Unable to stringify";
} else {
throw e37462;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37465 = arguments.length;
switch (G__37465) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37463_SHARP_){
if(typeof p1__37463_SHARP_ === 'string'){
return p1__37463_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37463_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37468 = arguments.length;
var i__29456__auto___37469 = (0);
while(true){
if((i__29456__auto___37469 < len__29455__auto___37468)){
args__29462__auto__.push((arguments[i__29456__auto___37469]));

var G__37470 = (i__29456__auto___37469 + (1));
i__29456__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37467){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37467));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37472 = arguments.length;
var i__29456__auto___37473 = (0);
while(true){
if((i__29456__auto___37473 < len__29455__auto___37472)){
args__29462__auto__.push((arguments[i__29456__auto___37473]));

var G__37474 = (i__29456__auto___37473 + (1));
i__29456__auto___37473 = G__37474;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37471){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37471));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37475){
var map__37476 = p__37475;
var map__37476__$1 = ((((!((map__37476 == null)))?((((map__37476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37476):map__37476);
var message = cljs.core.get.call(null,map__37476__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37476__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28286__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28274__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28274__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28274__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32582__auto___37555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___37555,ch){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___37555,ch){
return (function (state_37527){
var state_val_37528 = (state_37527[(1)]);
if((state_val_37528 === (7))){
var inst_37523 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37529_37556 = state_37527__$1;
(statearr_37529_37556[(2)] = inst_37523);

(statearr_37529_37556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (1))){
var state_37527__$1 = state_37527;
var statearr_37530_37557 = state_37527__$1;
(statearr_37530_37557[(2)] = null);

(statearr_37530_37557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (4))){
var inst_37480 = (state_37527[(7)]);
var inst_37480__$1 = (state_37527[(2)]);
var state_37527__$1 = (function (){var statearr_37531 = state_37527;
(statearr_37531[(7)] = inst_37480__$1);

return statearr_37531;
})();
if(cljs.core.truth_(inst_37480__$1)){
var statearr_37532_37558 = state_37527__$1;
(statearr_37532_37558[(1)] = (5));

} else {
var statearr_37533_37559 = state_37527__$1;
(statearr_37533_37559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (15))){
var inst_37487 = (state_37527[(8)]);
var inst_37502 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37487);
var inst_37503 = cljs.core.first.call(null,inst_37502);
var inst_37504 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37503);
var inst_37505 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37504)].join('');
var inst_37506 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37505);
var state_37527__$1 = state_37527;
var statearr_37534_37560 = state_37527__$1;
(statearr_37534_37560[(2)] = inst_37506);

(statearr_37534_37560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (13))){
var inst_37511 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37535_37561 = state_37527__$1;
(statearr_37535_37561[(2)] = inst_37511);

(statearr_37535_37561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (6))){
var state_37527__$1 = state_37527;
var statearr_37536_37562 = state_37527__$1;
(statearr_37536_37562[(2)] = null);

(statearr_37536_37562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (17))){
var inst_37509 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37537_37563 = state_37527__$1;
(statearr_37537_37563[(2)] = inst_37509);

(statearr_37537_37563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (3))){
var inst_37525 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37527__$1,inst_37525);
} else {
if((state_val_37528 === (12))){
var inst_37486 = (state_37527[(9)]);
var inst_37500 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37486,opts);
var state_37527__$1 = state_37527;
if(cljs.core.truth_(inst_37500)){
var statearr_37538_37564 = state_37527__$1;
(statearr_37538_37564[(1)] = (15));

} else {
var statearr_37539_37565 = state_37527__$1;
(statearr_37539_37565[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (2))){
var state_37527__$1 = state_37527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37527__$1,(4),ch);
} else {
if((state_val_37528 === (11))){
var inst_37487 = (state_37527[(8)]);
var inst_37492 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37493 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37487);
var inst_37494 = cljs.core.async.timeout.call(null,(1000));
var inst_37495 = [inst_37493,inst_37494];
var inst_37496 = (new cljs.core.PersistentVector(null,2,(5),inst_37492,inst_37495,null));
var state_37527__$1 = state_37527;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37527__$1,(14),inst_37496);
} else {
if((state_val_37528 === (9))){
var inst_37487 = (state_37527[(8)]);
var inst_37513 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37514 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37487);
var inst_37515 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37514);
var inst_37516 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37515)].join('');
var inst_37517 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37516);
var state_37527__$1 = (function (){var statearr_37540 = state_37527;
(statearr_37540[(10)] = inst_37513);

return statearr_37540;
})();
var statearr_37541_37566 = state_37527__$1;
(statearr_37541_37566[(2)] = inst_37517);

(statearr_37541_37566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (5))){
var inst_37480 = (state_37527[(7)]);
var inst_37482 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37483 = (new cljs.core.PersistentArrayMap(null,2,inst_37482,null));
var inst_37484 = (new cljs.core.PersistentHashSet(null,inst_37483,null));
var inst_37485 = figwheel.client.focus_msgs.call(null,inst_37484,inst_37480);
var inst_37486 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37485);
var inst_37487 = cljs.core.first.call(null,inst_37485);
var inst_37488 = figwheel.client.autoload_QMARK_.call(null);
var state_37527__$1 = (function (){var statearr_37542 = state_37527;
(statearr_37542[(9)] = inst_37486);

(statearr_37542[(8)] = inst_37487);

return statearr_37542;
})();
if(cljs.core.truth_(inst_37488)){
var statearr_37543_37567 = state_37527__$1;
(statearr_37543_37567[(1)] = (8));

} else {
var statearr_37544_37568 = state_37527__$1;
(statearr_37544_37568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (14))){
var inst_37498 = (state_37527[(2)]);
var state_37527__$1 = state_37527;
var statearr_37545_37569 = state_37527__$1;
(statearr_37545_37569[(2)] = inst_37498);

(statearr_37545_37569[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (16))){
var state_37527__$1 = state_37527;
var statearr_37546_37570 = state_37527__$1;
(statearr_37546_37570[(2)] = null);

(statearr_37546_37570[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (10))){
var inst_37519 = (state_37527[(2)]);
var state_37527__$1 = (function (){var statearr_37547 = state_37527;
(statearr_37547[(11)] = inst_37519);

return statearr_37547;
})();
var statearr_37548_37571 = state_37527__$1;
(statearr_37548_37571[(2)] = null);

(statearr_37548_37571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37528 === (8))){
var inst_37486 = (state_37527[(9)]);
var inst_37490 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37486,opts);
var state_37527__$1 = state_37527;
if(cljs.core.truth_(inst_37490)){
var statearr_37549_37572 = state_37527__$1;
(statearr_37549_37572[(1)] = (11));

} else {
var statearr_37550_37573 = state_37527__$1;
(statearr_37550_37573[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32582__auto___37555,ch))
;
return ((function (switch__32494__auto__,c__32582__auto___37555,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32495__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32495__auto____0 = (function (){
var statearr_37551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37551[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32495__auto__);

(statearr_37551[(1)] = (1));

return statearr_37551;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32495__auto____1 = (function (state_37527){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_37527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e37552){if((e37552 instanceof Object)){
var ex__32498__auto__ = e37552;
var statearr_37553_37574 = state_37527;
(statearr_37553_37574[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37575 = state_37527;
state_37527 = G__37575;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32495__auto__ = function(state_37527){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32495__auto____1.call(this,state_37527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32495__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32495__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___37555,ch))
})();
var state__32584__auto__ = (function (){var statearr_37554 = f__32583__auto__.call(null);
(statearr_37554[(6)] = c__32582__auto___37555);

return statearr_37554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___37555,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37576_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37576_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37578 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37578){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37577){if((e37577 instanceof Error)){
var e = e37577;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37578], null));
} else {
var e = e37577;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37578))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37579){
var map__37580 = p__37579;
var map__37580__$1 = ((((!((map__37580 == null)))?((((map__37580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37580.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37580):map__37580);
var opts = map__37580__$1;
var build_id = cljs.core.get.call(null,map__37580__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37580,map__37580__$1,opts,build_id){
return (function (p__37582){
var vec__37583 = p__37582;
var seq__37584 = cljs.core.seq.call(null,vec__37583);
var first__37585 = cljs.core.first.call(null,seq__37584);
var seq__37584__$1 = cljs.core.next.call(null,seq__37584);
var map__37586 = first__37585;
var map__37586__$1 = ((((!((map__37586 == null)))?((((map__37586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37586):map__37586);
var msg = map__37586__$1;
var msg_name = cljs.core.get.call(null,map__37586__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37584__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37583,seq__37584,first__37585,seq__37584__$1,map__37586,map__37586__$1,msg,msg_name,_,map__37580,map__37580__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37583,seq__37584,first__37585,seq__37584__$1,map__37586,map__37586__$1,msg,msg_name,_,map__37580,map__37580__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37580,map__37580__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37588){
var vec__37589 = p__37588;
var seq__37590 = cljs.core.seq.call(null,vec__37589);
var first__37591 = cljs.core.first.call(null,seq__37590);
var seq__37590__$1 = cljs.core.next.call(null,seq__37590);
var map__37592 = first__37591;
var map__37592__$1 = ((((!((map__37592 == null)))?((((map__37592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37592.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37592):map__37592);
var msg = map__37592__$1;
var msg_name = cljs.core.get.call(null,map__37592__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37590__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37594){
var map__37595 = p__37594;
var map__37595__$1 = ((((!((map__37595 == null)))?((((map__37595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37595):map__37595);
var on_compile_warning = cljs.core.get.call(null,map__37595__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37595__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37595,map__37595__$1,on_compile_warning,on_compile_fail){
return (function (p__37597){
var vec__37598 = p__37597;
var seq__37599 = cljs.core.seq.call(null,vec__37598);
var first__37600 = cljs.core.first.call(null,seq__37599);
var seq__37599__$1 = cljs.core.next.call(null,seq__37599);
var map__37601 = first__37600;
var map__37601__$1 = ((((!((map__37601 == null)))?((((map__37601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37601):map__37601);
var msg = map__37601__$1;
var msg_name = cljs.core.get.call(null,map__37601__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37599__$1;
var pred__37603 = cljs.core._EQ_;
var expr__37604 = msg_name;
if(cljs.core.truth_(pred__37603.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37604))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37603.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37604))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37595,map__37595__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__,msg_hist,msg_names,msg){
return (function (state_37693){
var state_val_37694 = (state_37693[(1)]);
if((state_val_37694 === (7))){
var inst_37613 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37613)){
var statearr_37695_37742 = state_37693__$1;
(statearr_37695_37742[(1)] = (8));

} else {
var statearr_37696_37743 = state_37693__$1;
(statearr_37696_37743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (20))){
var inst_37687 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37697_37744 = state_37693__$1;
(statearr_37697_37744[(2)] = inst_37687);

(statearr_37697_37744[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (27))){
var inst_37683 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37698_37745 = state_37693__$1;
(statearr_37698_37745[(2)] = inst_37683);

(statearr_37698_37745[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (1))){
var inst_37606 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37606)){
var statearr_37699_37746 = state_37693__$1;
(statearr_37699_37746[(1)] = (2));

} else {
var statearr_37700_37747 = state_37693__$1;
(statearr_37700_37747[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (24))){
var inst_37685 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37701_37748 = state_37693__$1;
(statearr_37701_37748[(2)] = inst_37685);

(statearr_37701_37748[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (4))){
var inst_37691 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37693__$1,inst_37691);
} else {
if((state_val_37694 === (15))){
var inst_37689 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37702_37749 = state_37693__$1;
(statearr_37702_37749[(2)] = inst_37689);

(statearr_37702_37749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (21))){
var inst_37642 = (state_37693[(2)]);
var inst_37643 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37644 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37643);
var state_37693__$1 = (function (){var statearr_37703 = state_37693;
(statearr_37703[(7)] = inst_37642);

return statearr_37703;
})();
var statearr_37704_37750 = state_37693__$1;
(statearr_37704_37750[(2)] = inst_37644);

(statearr_37704_37750[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (31))){
var inst_37672 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37672)){
var statearr_37705_37751 = state_37693__$1;
(statearr_37705_37751[(1)] = (34));

} else {
var statearr_37706_37752 = state_37693__$1;
(statearr_37706_37752[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (32))){
var inst_37681 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37707_37753 = state_37693__$1;
(statearr_37707_37753[(2)] = inst_37681);

(statearr_37707_37753[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (33))){
var inst_37668 = (state_37693[(2)]);
var inst_37669 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37670 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37669);
var state_37693__$1 = (function (){var statearr_37708 = state_37693;
(statearr_37708[(8)] = inst_37668);

return statearr_37708;
})();
var statearr_37709_37754 = state_37693__$1;
(statearr_37709_37754[(2)] = inst_37670);

(statearr_37709_37754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (13))){
var inst_37627 = figwheel.client.heads_up.clear.call(null);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(16),inst_37627);
} else {
if((state_val_37694 === (22))){
var inst_37648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37649 = figwheel.client.heads_up.append_warning_message.call(null,inst_37648);
var state_37693__$1 = state_37693;
var statearr_37710_37755 = state_37693__$1;
(statearr_37710_37755[(2)] = inst_37649);

(statearr_37710_37755[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (36))){
var inst_37679 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37711_37756 = state_37693__$1;
(statearr_37711_37756[(2)] = inst_37679);

(statearr_37711_37756[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (29))){
var inst_37659 = (state_37693[(2)]);
var inst_37660 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37661 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37660);
var state_37693__$1 = (function (){var statearr_37712 = state_37693;
(statearr_37712[(9)] = inst_37659);

return statearr_37712;
})();
var statearr_37713_37757 = state_37693__$1;
(statearr_37713_37757[(2)] = inst_37661);

(statearr_37713_37757[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (6))){
var inst_37608 = (state_37693[(10)]);
var state_37693__$1 = state_37693;
var statearr_37714_37758 = state_37693__$1;
(statearr_37714_37758[(2)] = inst_37608);

(statearr_37714_37758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (28))){
var inst_37655 = (state_37693[(2)]);
var inst_37656 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37657 = figwheel.client.heads_up.display_warning.call(null,inst_37656);
var state_37693__$1 = (function (){var statearr_37715 = state_37693;
(statearr_37715[(11)] = inst_37655);

return statearr_37715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(29),inst_37657);
} else {
if((state_val_37694 === (25))){
var inst_37653 = figwheel.client.heads_up.clear.call(null);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(28),inst_37653);
} else {
if((state_val_37694 === (34))){
var inst_37674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(37),inst_37674);
} else {
if((state_val_37694 === (17))){
var inst_37633 = (state_37693[(2)]);
var inst_37634 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37635 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37634);
var state_37693__$1 = (function (){var statearr_37716 = state_37693;
(statearr_37716[(12)] = inst_37633);

return statearr_37716;
})();
var statearr_37717_37759 = state_37693__$1;
(statearr_37717_37759[(2)] = inst_37635);

(statearr_37717_37759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (3))){
var inst_37625 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37625)){
var statearr_37718_37760 = state_37693__$1;
(statearr_37718_37760[(1)] = (13));

} else {
var statearr_37719_37761 = state_37693__$1;
(statearr_37719_37761[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (12))){
var inst_37621 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37720_37762 = state_37693__$1;
(statearr_37720_37762[(2)] = inst_37621);

(statearr_37720_37762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (2))){
var inst_37608 = (state_37693[(10)]);
var inst_37608__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37693__$1 = (function (){var statearr_37721 = state_37693;
(statearr_37721[(10)] = inst_37608__$1);

return statearr_37721;
})();
if(cljs.core.truth_(inst_37608__$1)){
var statearr_37722_37763 = state_37693__$1;
(statearr_37722_37763[(1)] = (5));

} else {
var statearr_37723_37764 = state_37693__$1;
(statearr_37723_37764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (23))){
var inst_37651 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37651)){
var statearr_37724_37765 = state_37693__$1;
(statearr_37724_37765[(1)] = (25));

} else {
var statearr_37725_37766 = state_37693__$1;
(statearr_37725_37766[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (35))){
var state_37693__$1 = state_37693;
var statearr_37726_37767 = state_37693__$1;
(statearr_37726_37767[(2)] = null);

(statearr_37726_37767[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (19))){
var inst_37646 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37646)){
var statearr_37727_37768 = state_37693__$1;
(statearr_37727_37768[(1)] = (22));

} else {
var statearr_37728_37769 = state_37693__$1;
(statearr_37728_37769[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (11))){
var inst_37617 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37729_37770 = state_37693__$1;
(statearr_37729_37770[(2)] = inst_37617);

(statearr_37729_37770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (9))){
var inst_37619 = figwheel.client.heads_up.clear.call(null);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(12),inst_37619);
} else {
if((state_val_37694 === (5))){
var inst_37610 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37693__$1 = state_37693;
var statearr_37730_37771 = state_37693__$1;
(statearr_37730_37771[(2)] = inst_37610);

(statearr_37730_37771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (14))){
var inst_37637 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37637)){
var statearr_37731_37772 = state_37693__$1;
(statearr_37731_37772[(1)] = (18));

} else {
var statearr_37732_37773 = state_37693__$1;
(statearr_37732_37773[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (26))){
var inst_37663 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37693__$1 = state_37693;
if(cljs.core.truth_(inst_37663)){
var statearr_37733_37774 = state_37693__$1;
(statearr_37733_37774[(1)] = (30));

} else {
var statearr_37734_37775 = state_37693__$1;
(statearr_37734_37775[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (16))){
var inst_37629 = (state_37693[(2)]);
var inst_37630 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37631 = figwheel.client.heads_up.display_exception.call(null,inst_37630);
var state_37693__$1 = (function (){var statearr_37735 = state_37693;
(statearr_37735[(13)] = inst_37629);

return statearr_37735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(17),inst_37631);
} else {
if((state_val_37694 === (30))){
var inst_37665 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37666 = figwheel.client.heads_up.display_warning.call(null,inst_37665);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(33),inst_37666);
} else {
if((state_val_37694 === (10))){
var inst_37623 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37736_37776 = state_37693__$1;
(statearr_37736_37776[(2)] = inst_37623);

(statearr_37736_37776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (18))){
var inst_37639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37640 = figwheel.client.heads_up.display_exception.call(null,inst_37639);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(21),inst_37640);
} else {
if((state_val_37694 === (37))){
var inst_37676 = (state_37693[(2)]);
var state_37693__$1 = state_37693;
var statearr_37737_37777 = state_37693__$1;
(statearr_37737_37777[(2)] = inst_37676);

(statearr_37737_37777[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37694 === (8))){
var inst_37615 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37693__$1 = state_37693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37693__$1,(11),inst_37615);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32582__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32494__auto__,c__32582__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto____0 = (function (){
var statearr_37738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37738[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto__);

(statearr_37738[(1)] = (1));

return statearr_37738;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto____1 = (function (state_37693){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_37693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e37739){if((e37739 instanceof Object)){
var ex__32498__auto__ = e37739;
var statearr_37740_37778 = state_37693;
(statearr_37740_37778[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37779 = state_37693;
state_37693 = G__37779;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto__ = function(state_37693){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto____1.call(this,state_37693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__,msg_hist,msg_names,msg))
})();
var state__32584__auto__ = (function (){var statearr_37741 = f__32583__auto__.call(null);
(statearr_37741[(6)] = c__32582__auto__);

return statearr_37741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__,msg_hist,msg_names,msg))
);

return c__32582__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32582__auto___37808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___37808,ch){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___37808,ch){
return (function (state_37794){
var state_val_37795 = (state_37794[(1)]);
if((state_val_37795 === (1))){
var state_37794__$1 = state_37794;
var statearr_37796_37809 = state_37794__$1;
(statearr_37796_37809[(2)] = null);

(statearr_37796_37809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37795 === (2))){
var state_37794__$1 = state_37794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37794__$1,(4),ch);
} else {
if((state_val_37795 === (3))){
var inst_37792 = (state_37794[(2)]);
var state_37794__$1 = state_37794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37794__$1,inst_37792);
} else {
if((state_val_37795 === (4))){
var inst_37782 = (state_37794[(7)]);
var inst_37782__$1 = (state_37794[(2)]);
var state_37794__$1 = (function (){var statearr_37797 = state_37794;
(statearr_37797[(7)] = inst_37782__$1);

return statearr_37797;
})();
if(cljs.core.truth_(inst_37782__$1)){
var statearr_37798_37810 = state_37794__$1;
(statearr_37798_37810[(1)] = (5));

} else {
var statearr_37799_37811 = state_37794__$1;
(statearr_37799_37811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37795 === (5))){
var inst_37782 = (state_37794[(7)]);
var inst_37784 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37782);
var state_37794__$1 = state_37794;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37794__$1,(8),inst_37784);
} else {
if((state_val_37795 === (6))){
var state_37794__$1 = state_37794;
var statearr_37800_37812 = state_37794__$1;
(statearr_37800_37812[(2)] = null);

(statearr_37800_37812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37795 === (7))){
var inst_37790 = (state_37794[(2)]);
var state_37794__$1 = state_37794;
var statearr_37801_37813 = state_37794__$1;
(statearr_37801_37813[(2)] = inst_37790);

(statearr_37801_37813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37795 === (8))){
var inst_37786 = (state_37794[(2)]);
var state_37794__$1 = (function (){var statearr_37802 = state_37794;
(statearr_37802[(8)] = inst_37786);

return statearr_37802;
})();
var statearr_37803_37814 = state_37794__$1;
(statearr_37803_37814[(2)] = null);

(statearr_37803_37814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32582__auto___37808,ch))
;
return ((function (switch__32494__auto__,c__32582__auto___37808,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32495__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32495__auto____0 = (function (){
var statearr_37804 = [null,null,null,null,null,null,null,null,null];
(statearr_37804[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32495__auto__);

(statearr_37804[(1)] = (1));

return statearr_37804;
});
var figwheel$client$heads_up_plugin_$_state_machine__32495__auto____1 = (function (state_37794){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_37794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e37805){if((e37805 instanceof Object)){
var ex__32498__auto__ = e37805;
var statearr_37806_37815 = state_37794;
(statearr_37806_37815[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37816 = state_37794;
state_37794 = G__37816;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32495__auto__ = function(state_37794){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32495__auto____1.call(this,state_37794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32495__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32495__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___37808,ch))
})();
var state__32584__auto__ = (function (){var statearr_37807 = f__32583__auto__.call(null);
(statearr_37807[(6)] = c__32582__auto___37808);

return statearr_37807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___37808,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__){
return (function (state_37822){
var state_val_37823 = (state_37822[(1)]);
if((state_val_37823 === (1))){
var inst_37817 = cljs.core.async.timeout.call(null,(3000));
var state_37822__$1 = state_37822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37822__$1,(2),inst_37817);
} else {
if((state_val_37823 === (2))){
var inst_37819 = (state_37822[(2)]);
var inst_37820 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37822__$1 = (function (){var statearr_37824 = state_37822;
(statearr_37824[(7)] = inst_37819);

return statearr_37824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37822__$1,inst_37820);
} else {
return null;
}
}
});})(c__32582__auto__))
;
return ((function (switch__32494__auto__,c__32582__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32495__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32495__auto____0 = (function (){
var statearr_37825 = [null,null,null,null,null,null,null,null];
(statearr_37825[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32495__auto__);

(statearr_37825[(1)] = (1));

return statearr_37825;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32495__auto____1 = (function (state_37822){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_37822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e37826){if((e37826 instanceof Object)){
var ex__32498__auto__ = e37826;
var statearr_37827_37829 = state_37822;
(statearr_37827_37829[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37830 = state_37822;
state_37822 = G__37830;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32495__auto__ = function(state_37822){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32495__auto____1.call(this,state_37822);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32495__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32495__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__))
})();
var state__32584__auto__ = (function (){var statearr_37828 = f__32583__auto__.call(null);
(statearr_37828[(6)] = c__32582__auto__);

return statearr_37828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__))
);

return c__32582__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37837){
var state_val_37838 = (state_37837[(1)]);
if((state_val_37838 === (1))){
var inst_37831 = cljs.core.async.timeout.call(null,(2000));
var state_37837__$1 = state_37837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37837__$1,(2),inst_37831);
} else {
if((state_val_37838 === (2))){
var inst_37833 = (state_37837[(2)]);
var inst_37834 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37835 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37834);
var state_37837__$1 = (function (){var statearr_37839 = state_37837;
(statearr_37839[(7)] = inst_37833);

return statearr_37839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37837__$1,inst_37835);
} else {
return null;
}
}
});})(c__32582__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__32494__auto__,c__32582__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto____0 = (function (){
var statearr_37840 = [null,null,null,null,null,null,null,null];
(statearr_37840[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto__);

(statearr_37840[(1)] = (1));

return statearr_37840;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto____1 = (function (state_37837){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_37837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e37841){if((e37841 instanceof Object)){
var ex__32498__auto__ = e37841;
var statearr_37842_37844 = state_37837;
(statearr_37842_37844[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37845 = state_37837;
state_37837 = G__37845;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto__ = function(state_37837){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto____1.call(this,state_37837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__,figwheel_version,temp__4657__auto__))
})();
var state__32584__auto__ = (function (){var statearr_37843 = f__32583__auto__.call(null);
(statearr_37843[(6)] = c__32582__auto__);

return statearr_37843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__,figwheel_version,temp__4657__auto__))
);

return c__32582__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37846){
var map__37847 = p__37846;
var map__37847__$1 = ((((!((map__37847 == null)))?((((map__37847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37847):map__37847);
var file = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37847__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37849 = "";
var G__37849__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37849),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37849);
var G__37849__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37849__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37849__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = line;
if(cljs.core.truth_(and__28274__auto__)){
return column;
} else {
return and__28274__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37849__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37849__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37850){
var map__37851 = p__37850;
var map__37851__$1 = ((((!((map__37851 == null)))?((((map__37851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37851):map__37851);
var ed = map__37851__$1;
var formatted_exception = cljs.core.get.call(null,map__37851__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37851__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37851__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37853_37857 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37854_37858 = null;
var count__37855_37859 = (0);
var i__37856_37860 = (0);
while(true){
if((i__37856_37860 < count__37855_37859)){
var msg_37861 = cljs.core._nth.call(null,chunk__37854_37858,i__37856_37860);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37861);

var G__37862 = seq__37853_37857;
var G__37863 = chunk__37854_37858;
var G__37864 = count__37855_37859;
var G__37865 = (i__37856_37860 + (1));
seq__37853_37857 = G__37862;
chunk__37854_37858 = G__37863;
count__37855_37859 = G__37864;
i__37856_37860 = G__37865;
continue;
} else {
var temp__4657__auto___37866 = cljs.core.seq.call(null,seq__37853_37857);
if(temp__4657__auto___37866){
var seq__37853_37867__$1 = temp__4657__auto___37866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37853_37867__$1)){
var c__29125__auto___37868 = cljs.core.chunk_first.call(null,seq__37853_37867__$1);
var G__37869 = cljs.core.chunk_rest.call(null,seq__37853_37867__$1);
var G__37870 = c__29125__auto___37868;
var G__37871 = cljs.core.count.call(null,c__29125__auto___37868);
var G__37872 = (0);
seq__37853_37857 = G__37869;
chunk__37854_37858 = G__37870;
count__37855_37859 = G__37871;
i__37856_37860 = G__37872;
continue;
} else {
var msg_37873 = cljs.core.first.call(null,seq__37853_37867__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37873);

var G__37874 = cljs.core.next.call(null,seq__37853_37867__$1);
var G__37875 = null;
var G__37876 = (0);
var G__37877 = (0);
seq__37853_37857 = G__37874;
chunk__37854_37858 = G__37875;
count__37855_37859 = G__37876;
i__37856_37860 = G__37877;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37878){
var map__37879 = p__37878;
var map__37879__$1 = ((((!((map__37879 == null)))?((((map__37879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37879):map__37879);
var w = map__37879__$1;
var message = cljs.core.get.call(null,map__37879__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28274__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28274__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28274__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37881 = cljs.core.seq.call(null,plugins);
var chunk__37882 = null;
var count__37883 = (0);
var i__37884 = (0);
while(true){
if((i__37884 < count__37883)){
var vec__37885 = cljs.core._nth.call(null,chunk__37882,i__37884);
var k = cljs.core.nth.call(null,vec__37885,(0),null);
var plugin = cljs.core.nth.call(null,vec__37885,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37891 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37881,chunk__37882,count__37883,i__37884,pl_37891,vec__37885,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37891.call(null,msg_hist);
});})(seq__37881,chunk__37882,count__37883,i__37884,pl_37891,vec__37885,k,plugin))
);
} else {
}

var G__37892 = seq__37881;
var G__37893 = chunk__37882;
var G__37894 = count__37883;
var G__37895 = (i__37884 + (1));
seq__37881 = G__37892;
chunk__37882 = G__37893;
count__37883 = G__37894;
i__37884 = G__37895;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37881);
if(temp__4657__auto__){
var seq__37881__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37881__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37881__$1);
var G__37896 = cljs.core.chunk_rest.call(null,seq__37881__$1);
var G__37897 = c__29125__auto__;
var G__37898 = cljs.core.count.call(null,c__29125__auto__);
var G__37899 = (0);
seq__37881 = G__37896;
chunk__37882 = G__37897;
count__37883 = G__37898;
i__37884 = G__37899;
continue;
} else {
var vec__37888 = cljs.core.first.call(null,seq__37881__$1);
var k = cljs.core.nth.call(null,vec__37888,(0),null);
var plugin = cljs.core.nth.call(null,vec__37888,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37900 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37881,chunk__37882,count__37883,i__37884,pl_37900,vec__37888,k,plugin,seq__37881__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37900.call(null,msg_hist);
});})(seq__37881,chunk__37882,count__37883,i__37884,pl_37900,vec__37888,k,plugin,seq__37881__$1,temp__4657__auto__))
);
} else {
}

var G__37901 = cljs.core.next.call(null,seq__37881__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37881 = G__37901;
chunk__37882 = G__37902;
count__37883 = G__37903;
i__37884 = G__37904;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37906 = arguments.length;
switch (G__37906) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37907_37912 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37908_37913 = null;
var count__37909_37914 = (0);
var i__37910_37915 = (0);
while(true){
if((i__37910_37915 < count__37909_37914)){
var msg_37916 = cljs.core._nth.call(null,chunk__37908_37913,i__37910_37915);
figwheel.client.socket.handle_incoming_message.call(null,msg_37916);

var G__37917 = seq__37907_37912;
var G__37918 = chunk__37908_37913;
var G__37919 = count__37909_37914;
var G__37920 = (i__37910_37915 + (1));
seq__37907_37912 = G__37917;
chunk__37908_37913 = G__37918;
count__37909_37914 = G__37919;
i__37910_37915 = G__37920;
continue;
} else {
var temp__4657__auto___37921 = cljs.core.seq.call(null,seq__37907_37912);
if(temp__4657__auto___37921){
var seq__37907_37922__$1 = temp__4657__auto___37921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37907_37922__$1)){
var c__29125__auto___37923 = cljs.core.chunk_first.call(null,seq__37907_37922__$1);
var G__37924 = cljs.core.chunk_rest.call(null,seq__37907_37922__$1);
var G__37925 = c__29125__auto___37923;
var G__37926 = cljs.core.count.call(null,c__29125__auto___37923);
var G__37927 = (0);
seq__37907_37912 = G__37924;
chunk__37908_37913 = G__37925;
count__37909_37914 = G__37926;
i__37910_37915 = G__37927;
continue;
} else {
var msg_37928 = cljs.core.first.call(null,seq__37907_37922__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37928);

var G__37929 = cljs.core.next.call(null,seq__37907_37922__$1);
var G__37930 = null;
var G__37931 = (0);
var G__37932 = (0);
seq__37907_37912 = G__37929;
chunk__37908_37913 = G__37930;
count__37909_37914 = G__37931;
i__37910_37915 = G__37932;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29462__auto__ = [];
var len__29455__auto___37937 = arguments.length;
var i__29456__auto___37938 = (0);
while(true){
if((i__29456__auto___37938 < len__29455__auto___37937)){
args__29462__auto__.push((arguments[i__29456__auto___37938]));

var G__37939 = (i__29456__auto___37938 + (1));
i__29456__auto___37938 = G__37939;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37934){
var map__37935 = p__37934;
var map__37935__$1 = ((((!((map__37935 == null)))?((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var opts = map__37935__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37933){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37933));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37940){if((e37940 instanceof Error)){
var e = e37940;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37940;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37941){
var map__37942 = p__37941;
var map__37942__$1 = ((((!((map__37942 == null)))?((((map__37942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37942):map__37942);
var msg_name = cljs.core.get.call(null,map__37942__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1517200915568
