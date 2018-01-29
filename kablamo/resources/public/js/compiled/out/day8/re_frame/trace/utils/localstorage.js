// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
day8.re_frame.trace.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame.trace.utils.localstorage.safe_key = (function day8$re_frame$trace$utils$localstorage$safe_key(key){

return ["day8.re-frame.trace.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-trace value from local storage.
 */
day8.re_frame.trace.utils.localstorage.get = (function day8$re_frame$trace$utils$localstorage$get(var_args){
var G__42094 = arguments.length;
switch (G__42094) {
case 1:
return day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame.trace.utils.localstorage.get.call(null,key,null);
});

day8.re_frame.trace.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame.trace.utils.localstorage.storage.get(day8.re_frame.trace.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame.trace.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-trace value to local storage.
 */
day8.re_frame.trace.utils.localstorage.save_BANG_ = (function day8$re_frame$trace$utils$localstorage$save_BANG_(key,value){
return day8.re_frame.trace.utils.localstorage.storage.set(day8.re_frame.trace.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});

//# sourceMappingURL=localstorage.js.map?rel=1517200926553
