// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('kablamo.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31770__delegate = function (x){
if(cljs.core.truth_(kablamo.core.mount_root)){
return cljs.core.apply.call(null,kablamo.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'kablamo.core/mount-root' is missing");
}
};
var G__31770 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__31771__i = 0, G__31771__a = new Array(arguments.length -  0);
while (G__31771__i < G__31771__a.length) {G__31771__a[G__31771__i] = arguments[G__31771__i + 0]; ++G__31771__i;}
  x = new cljs.core.IndexedSeq(G__31771__a,0,null);
} 
return G__31770__delegate.call(this,x);};
G__31770.cljs$lang$maxFixedArity = 0;
G__31770.cljs$lang$applyTo = (function (arglist__31772){
var x = cljs.core.seq(arglist__31772);
return G__31770__delegate(x);
});
G__31770.cljs$core$IFn$_invoke$arity$variadic = G__31770__delegate;
return G__31770;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1517847493013
