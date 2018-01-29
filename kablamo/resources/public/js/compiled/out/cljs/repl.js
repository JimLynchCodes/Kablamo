// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37174){
var map__37175 = p__37174;
var map__37175__$1 = ((((!((map__37175 == null)))?((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37175):map__37175);
var m = map__37175__$1;
var n = cljs.core.get.call(null,map__37175__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37175__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37177_37199 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37178_37200 = null;
var count__37179_37201 = (0);
var i__37180_37202 = (0);
while(true){
if((i__37180_37202 < count__37179_37201)){
var f_37203 = cljs.core._nth.call(null,chunk__37178_37200,i__37180_37202);
cljs.core.println.call(null,"  ",f_37203);

var G__37204 = seq__37177_37199;
var G__37205 = chunk__37178_37200;
var G__37206 = count__37179_37201;
var G__37207 = (i__37180_37202 + (1));
seq__37177_37199 = G__37204;
chunk__37178_37200 = G__37205;
count__37179_37201 = G__37206;
i__37180_37202 = G__37207;
continue;
} else {
var temp__4657__auto___37208 = cljs.core.seq.call(null,seq__37177_37199);
if(temp__4657__auto___37208){
var seq__37177_37209__$1 = temp__4657__auto___37208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37177_37209__$1)){
var c__29125__auto___37210 = cljs.core.chunk_first.call(null,seq__37177_37209__$1);
var G__37211 = cljs.core.chunk_rest.call(null,seq__37177_37209__$1);
var G__37212 = c__29125__auto___37210;
var G__37213 = cljs.core.count.call(null,c__29125__auto___37210);
var G__37214 = (0);
seq__37177_37199 = G__37211;
chunk__37178_37200 = G__37212;
count__37179_37201 = G__37213;
i__37180_37202 = G__37214;
continue;
} else {
var f_37215 = cljs.core.first.call(null,seq__37177_37209__$1);
cljs.core.println.call(null,"  ",f_37215);

var G__37216 = cljs.core.next.call(null,seq__37177_37209__$1);
var G__37217 = null;
var G__37218 = (0);
var G__37219 = (0);
seq__37177_37199 = G__37216;
chunk__37178_37200 = G__37217;
count__37179_37201 = G__37218;
i__37180_37202 = G__37219;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37220 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28286__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37220);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37220)))?cljs.core.second.call(null,arglists_37220):arglists_37220));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37181_37221 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37182_37222 = null;
var count__37183_37223 = (0);
var i__37184_37224 = (0);
while(true){
if((i__37184_37224 < count__37183_37223)){
var vec__37185_37225 = cljs.core._nth.call(null,chunk__37182_37222,i__37184_37224);
var name_37226 = cljs.core.nth.call(null,vec__37185_37225,(0),null);
var map__37188_37227 = cljs.core.nth.call(null,vec__37185_37225,(1),null);
var map__37188_37228__$1 = ((((!((map__37188_37227 == null)))?((((map__37188_37227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37188_37227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37188_37227):map__37188_37227);
var doc_37229 = cljs.core.get.call(null,map__37188_37228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37230 = cljs.core.get.call(null,map__37188_37228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37226);

cljs.core.println.call(null," ",arglists_37230);

if(cljs.core.truth_(doc_37229)){
cljs.core.println.call(null," ",doc_37229);
} else {
}

var G__37231 = seq__37181_37221;
var G__37232 = chunk__37182_37222;
var G__37233 = count__37183_37223;
var G__37234 = (i__37184_37224 + (1));
seq__37181_37221 = G__37231;
chunk__37182_37222 = G__37232;
count__37183_37223 = G__37233;
i__37184_37224 = G__37234;
continue;
} else {
var temp__4657__auto___37235 = cljs.core.seq.call(null,seq__37181_37221);
if(temp__4657__auto___37235){
var seq__37181_37236__$1 = temp__4657__auto___37235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37181_37236__$1)){
var c__29125__auto___37237 = cljs.core.chunk_first.call(null,seq__37181_37236__$1);
var G__37238 = cljs.core.chunk_rest.call(null,seq__37181_37236__$1);
var G__37239 = c__29125__auto___37237;
var G__37240 = cljs.core.count.call(null,c__29125__auto___37237);
var G__37241 = (0);
seq__37181_37221 = G__37238;
chunk__37182_37222 = G__37239;
count__37183_37223 = G__37240;
i__37184_37224 = G__37241;
continue;
} else {
var vec__37190_37242 = cljs.core.first.call(null,seq__37181_37236__$1);
var name_37243 = cljs.core.nth.call(null,vec__37190_37242,(0),null);
var map__37193_37244 = cljs.core.nth.call(null,vec__37190_37242,(1),null);
var map__37193_37245__$1 = ((((!((map__37193_37244 == null)))?((((map__37193_37244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37193_37244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37193_37244):map__37193_37244);
var doc_37246 = cljs.core.get.call(null,map__37193_37245__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37247 = cljs.core.get.call(null,map__37193_37245__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37243);

cljs.core.println.call(null," ",arglists_37247);

if(cljs.core.truth_(doc_37246)){
cljs.core.println.call(null," ",doc_37246);
} else {
}

var G__37248 = cljs.core.next.call(null,seq__37181_37236__$1);
var G__37249 = null;
var G__37250 = (0);
var G__37251 = (0);
seq__37181_37221 = G__37248;
chunk__37182_37222 = G__37249;
count__37183_37223 = G__37250;
i__37184_37224 = G__37251;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37195 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37196 = null;
var count__37197 = (0);
var i__37198 = (0);
while(true){
if((i__37198 < count__37197)){
var role = cljs.core._nth.call(null,chunk__37196,i__37198);
var temp__4657__auto___37252__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37252__$1)){
var spec_37253 = temp__4657__auto___37252__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37253));
} else {
}

var G__37254 = seq__37195;
var G__37255 = chunk__37196;
var G__37256 = count__37197;
var G__37257 = (i__37198 + (1));
seq__37195 = G__37254;
chunk__37196 = G__37255;
count__37197 = G__37256;
i__37198 = G__37257;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37195);
if(temp__4657__auto____$1){
var seq__37195__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37195__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__37195__$1);
var G__37258 = cljs.core.chunk_rest.call(null,seq__37195__$1);
var G__37259 = c__29125__auto__;
var G__37260 = cljs.core.count.call(null,c__29125__auto__);
var G__37261 = (0);
seq__37195 = G__37258;
chunk__37196 = G__37259;
count__37197 = G__37260;
i__37198 = G__37261;
continue;
} else {
var role = cljs.core.first.call(null,seq__37195__$1);
var temp__4657__auto___37262__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37262__$2)){
var spec_37263 = temp__4657__auto___37262__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_37263));
} else {
}

var G__37264 = cljs.core.next.call(null,seq__37195__$1);
var G__37265 = null;
var G__37266 = (0);
var G__37267 = (0);
seq__37195 = G__37264;
chunk__37196 = G__37265;
count__37197 = G__37266;
i__37198 = G__37267;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1517200914619
