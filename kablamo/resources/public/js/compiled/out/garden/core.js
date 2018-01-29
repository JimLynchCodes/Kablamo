// Compiled by ClojureScript 1.9.908 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__29462__auto__ = [];
var len__29455__auto___43960 = arguments.length;
var i__29456__auto___43961 = (0);
while(true){
if((i__29456__auto___43961 < len__29455__auto___43960)){
args__29462__auto__.push((arguments[i__29456__auto___43961]));

var G__43962 = (i__29456__auto___43961 + (1));
i__29456__auto___43961 = G__43962;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq43959){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43959));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__29462__auto__ = [];
var len__29455__auto___43964 = arguments.length;
var i__29456__auto___43965 = (0);
while(true){
if((i__29456__auto___43965 < len__29455__auto___43964)){
args__29462__auto__.push((arguments[i__29456__auto___43965]));

var G__43966 = (i__29456__auto___43965 + (1));
i__29456__auto___43965 = G__43966;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq43963){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43963));
});


//# sourceMappingURL=core.js.map?rel=1517200930249
