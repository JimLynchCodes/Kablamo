// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.view.subs');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('day8.re_frame.trace.utils.re_com');
goog.require('day8.re_frame.trace.view.components');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
day8.re_frame.trace.view.subs.subs_panel = (function day8$re_frame$trace$view$subs$subs_panel(){
cljs.core.PersistentVector.EMPTY;

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 auto",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-content-scrollable","div.panel-content-scrollable",-1722397406),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtrees","div.subtrees",-1996798150),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 0"], null)], null),cljs.core.doall.call(null,cljs.core.map.call(null,(function (me){
var vec__42524 = cljs.core.key.call(null,me);
var query_v = cljs.core.nth.call(null,vec__42524,(0),null);
var dyn_v = cljs.core.nth.call(null,vec__42524,(1),null);
var inputs = vec__42524;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtree-wrapper","div.subtree-wrapper",-1759365103),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtree","div.subtree",2124828570),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.view.components.subscription_render,day8.re_frame.trace.utils.re_com.deref_or_value_peek.call(null,cljs.core.val.call(null,me)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.subtree-button","button.subtree-button",-215548438),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__42524,query_v,dyn_v,inputs){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","remove-path","app-db/remove-path",-1233894231),cljs.core.key.call(null,me)], null));
});})(vec__42524,query_v,dyn_v,inputs))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.subtree-button-string","span.subtree-button-string",873380387),cljs.core.prn_str.call(null,cljs.core.first.call(null,cljs.core.key.call(null,me)))], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991)], null),query_v)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),query_v], null));
}),cljs.core.sort_by.call(null,(function (me){
return cljs.core.ffirst.call(null,cljs.core.key.call(null,me));
}),cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))),(function (){
cljs.core.deref.call(null,re_frame.db.app_db);

return null;
})()
], null)], null)], null);
});

//# sourceMappingURL=subs.js.map?rel=1517200927496
