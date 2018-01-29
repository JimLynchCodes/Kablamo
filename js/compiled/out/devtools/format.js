// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._header[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._header["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._has_body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28969__auto__ = (((value == null))?null:value);
var m__28970__auto__ = (devtools.format._body[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,value);
} else {
var m__28970__auto____$1 = (devtools.format._body["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39140 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39140["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39141 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39141["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39142 = temp__4655__auto____$2;
return (o39142["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39143 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39143["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39144 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39144["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39145 = temp__4655__auto____$2;
return (o39145["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39146 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39146["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39147 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39147["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39148 = temp__4655__auto____$2;
return (o39148["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39149 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39149["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39150 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39150["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39151 = temp__4655__auto____$2;
return (o39151["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39152 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39152["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39153 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39153["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39154 = temp__4655__auto____$2;
return (o39154["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39155 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39155["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39156 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39156["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39157 = temp__4655__auto____$2;
return (o39157["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o39158 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39158["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39159 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39159["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39160 = temp__4655__auto____$2;
return (o39160["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39162 = arguments.length;
var i__29456__auto___39163 = (0);
while(true){
if((i__29456__auto___39163 < len__29455__auto___39162)){
args__29462__auto__.push((arguments[i__29456__auto___39163]));

var G__39164 = (i__29456__auto___39163 + (1));
i__29456__auto___39163 = G__39164;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39161){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39161));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39166 = arguments.length;
var i__29456__auto___39167 = (0);
while(true){
if((i__29456__auto___39167 < len__29455__auto___39166)){
args__29462__auto__.push((arguments[i__29456__auto___39167]));

var G__39168 = (i__29456__auto___39167 + (1));
i__29456__auto___39167 = G__39168;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39165){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39165));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39170 = arguments.length;
var i__29456__auto___39171 = (0);
while(true){
if((i__29456__auto___39171 < len__29455__auto___39170)){
args__29462__auto__.push((arguments[i__29456__auto___39171]));

var G__39172 = (i__29456__auto___39171 + (1));
i__29456__auto___39171 = G__39172;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39169){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39169));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39174 = arguments.length;
var i__29456__auto___39175 = (0);
while(true){
if((i__29456__auto___39175 < len__29455__auto___39174)){
args__29462__auto__.push((arguments[i__29456__auto___39175]));

var G__39176 = (i__29456__auto___39175 + (1));
i__29456__auto___39175 = G__39176;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39173){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39173));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39178 = arguments.length;
var i__29456__auto___39179 = (0);
while(true){
if((i__29456__auto___39179 < len__29455__auto___39178)){
args__29462__auto__.push((arguments[i__29456__auto___39179]));

var G__39180 = (i__29456__auto___39179 + (1));
i__29456__auto___39179 = G__39180;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39177){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39177));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39182 = arguments.length;
var i__29456__auto___39183 = (0);
while(true){
if((i__29456__auto___39183 < len__29455__auto___39182)){
args__29462__auto__.push((arguments[i__29456__auto___39183]));

var G__39184 = (i__29456__auto___39183 + (1));
i__29456__auto___39183 = G__39184;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39181){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39181));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39186 = arguments.length;
var i__29456__auto___39187 = (0);
while(true){
if((i__29456__auto___39187 < len__29455__auto___39186)){
args__29462__auto__.push((arguments[i__29456__auto___39187]));

var G__39188 = (i__29456__auto___39187 + (1));
i__29456__auto___39187 = G__39188;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39185){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39185));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39196 = arguments.length;
var i__29456__auto___39197 = (0);
while(true){
if((i__29456__auto___39197 < len__29455__auto___39196)){
args__29462__auto__.push((arguments[i__29456__auto___39197]));

var G__39198 = (i__29456__auto___39197 + (1));
i__29456__auto___39197 = G__39198;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39192){
var vec__39193 = p__39192;
var state_override = cljs.core.nth.call(null,vec__39193,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39193,state_override){
return (function (p1__39189_SHARP_){
return cljs.core.merge.call(null,p1__39189_SHARP_,state_override);
});})(vec__39193,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39190){
var G__39191 = cljs.core.first.call(null,seq39190);
var seq39190__$1 = cljs.core.next.call(null,seq39190);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39191,seq39190__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39200 = arguments.length;
var i__29456__auto___39201 = (0);
while(true){
if((i__29456__auto___39201 < len__29455__auto___39200)){
args__29462__auto__.push((arguments[i__29456__auto___39201]));

var G__39202 = (i__29456__auto___39201 + (1));
i__29456__auto___39201 = G__39202;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39199){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39199));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29462__auto__ = [];
var len__29455__auto___39205 = arguments.length;
var i__29456__auto___39206 = (0);
while(true){
if((i__29456__auto___39206 < len__29455__auto___39205)){
args__29462__auto__.push((arguments[i__29456__auto___39206]));

var G__39207 = (i__29456__auto___39206 + (1));
i__29456__auto___39206 = G__39207;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39203){
var G__39204 = cljs.core.first.call(null,seq39203);
var seq39203__$1 = cljs.core.next.call(null,seq39203);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39204,seq39203__$1);
});


//# sourceMappingURL=format.js.map?rel=1517200918864
