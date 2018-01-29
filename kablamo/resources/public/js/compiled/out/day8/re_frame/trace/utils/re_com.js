// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.utils.re_com');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('clojure.string');
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
day8.re_frame.trace.utils.re_com.deref_or_value_peek = (function day8$re_frame$trace$utils$re_com$deref_or_value_peek(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref.call(null,val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it by derefing
 *   
 */
day8.re_frame.trace.utils.re_com.deref_or_value = (function day8$re_frame$trace$utils$re_com$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * A cross-browser helper function to output flex-flow with all it's potential browser prefixes
 */
day8.re_frame.trace.utils.re_com.flex_flow_style = (function day8$re_frame$trace$utils$re_com$flex_flow_style(flex_flow){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex-flow","-webkit-flex-flow",667076810),flex_flow,new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),flex_flow], null);
});
/**
 * Determines the value for the 'flex' attribute (which has grow, shrink and basis), based on the :size parameter.
 * IMPORTANT: The term 'size' means width of the item in the case of flex-direction 'row' OR height of the item in the case of flex-direction 'column'.
 * Flex property explanation:
 *  - grow    Integer ratio (used with other siblings) to determined how a flex item grows it's size if there is extra space to distribute. 0 for no growing.
 *  - shrink  Integer ratio (used with other siblings) to determined how a flex item shrinks it's size if space needs to be removed. 0 for no shrinking.
 *  - basis   Initial size (width, actually) of item before any growing or shrinking. Can be any size value, e.g. 60%, 100px, auto
 *            Note: auto will cause the initial size to be calculated to take up as much space as possible, in conjunction with it's siblings :flex settings.
 * Supported values:
 *  - initial            '0 1 auto'  - Use item's width/height for dimensions (or content dimensions if w/h not specifed). Never grow. Shrink (to min-size) if necessary.
 *                                     Good for creating boxes with fixed maximum size, but that can shrink to a fixed smaller size (min-width/height) if space becomes tight.
 *                                     NOTE: When using initial, you should also set a width/height value (depending on flex-direction) to specify it's default size
 *                                           and an optional min-width/height value to specify the size it can shrink to.
 *  - auto               '1 1 auto'  - Use item's width/height for dimensions. Grow if necessary. Shrink (to min-size) if necessary.
 *                                     Good for creating really flexible boxes that will gobble as much available space as they are allowed or shrink as much as they are forced to.
 *  - none               '0 0 auto'  - Use item's width/height for dimensions (or content dimensions if not specifed). Never grow. Never shrink.
 *                                     Good for creating rigid boxes that stick to their width/height if specified, otherwise their content size.
 *  - 100px              '0 0 100px' - Non flexible 100px size (in the flex direction) box.
 *                                     Good for fixed headers/footers and side bars of an exact size.
 *  - 60%                '60 1 0px'  - Set the item's size (it's width/height depending on flex-direction) to be 60% of the parent container's width/height.
 *                                     NOTE: If you use this, then all siblings with percentage values must add up to 100%.
 *  - 60                 '60 1 0px'  - Same as percentage above.
 *  - grow shrink basis  'grow shrink basis' - If none of the above common valaues above meet your needs, this gives you precise control.
 * If number of words is not 1 or 3, an exception is thrown.
 * Reference: http://www.w3.org/TR/css3-flexbox/#flexibility
 * Diagram:   http://www.w3.org/TR/css3-flexbox/#flex-container
 * Regex101 testing: ^(initial|auto|none)|(\d+)(px|%|em)|(\d+)\w(\d+)\w(.*) - remove double backslashes
 */
day8.re_frame.trace.utils.re_com.flex_child_style = (function day8$re_frame$trace$utils$re_com$flex_child_style(size){
var split_size = clojure.string.split.call(null,clojure.string.trim.call(null,size),/\s+/);
var split_count = cljs.core.count.call(null,split_size);
var _ = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(3),null], null), null),split_count))?null:(function(){throw (new Error(["Assert failed: ","Must pass either 1 or 3 words to flex-child-style","\n","(contains? #{1 3} split-count)"].join('')))})());
var size_only = ((cljs.core._EQ_.call(null,split_count,(1)))?cljs.core.first.call(null,split_size):null);
var split_size_only = (cljs.core.truth_(size_only)?clojure.string.split.call(null,size_only,/(\d+)(.*)/):null);
var vec__40920 = (cljs.core.truth_(size_only)?split_size_only:null);
var ___$1 = cljs.core.nth.call(null,vec__40920,(0),null);
var num = cljs.core.nth.call(null,vec__40920,(1),null);
var units = cljs.core.nth.call(null,vec__40920,(2),null);
var pass_through_QMARK_ = (num == null);
var grow_ratio_QMARK_ = (cljs.core._EQ_.call(null,units,"%")) || (cljs.core._EQ_.call(null,units,"")) || ((units == null));
var grow = ((grow_ratio_QMARK_)?num:"0");
var shrink = ((grow_ratio_QMARK_)?"1":"0");
var basis = ((grow_ratio_QMARK_)?"0px":size);
var flex = (cljs.core.truth_((function (){var and__28274__auto__ = size_only;
if(cljs.core.truth_(and__28274__auto__)){
return !(pass_through_QMARK_);
} else {
return and__28274__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(grow)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shrink)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(basis)].join(''):size);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-flex","-webkit-flex",-1736517621),flex,new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null);
});
/**
 * Determines the value for the flex 'justify-content' attribute.
 * This parameter determines how children are aligned along the main axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#justify-content-property
 */
day8.re_frame.trace.utils.re_com.justify_style = (function day8$re_frame$trace$utils$re_com$justify_style(justify){
var js = (function (){var G__40923 = justify;
var G__40923__$1 = (((G__40923 instanceof cljs.core.Keyword))?G__40923.fqn:null);
switch (G__40923__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "between":
return "space-between";

break;
case "around":
return "space-around";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40923__$1)].join('')));

}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-justify-content","-webkit-justify-content",205818059),js,new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),js], null);
});
/**
 * Determines the value for the flex align type attributes.
 * This parameter determines how children are aligned on the cross axis.
 * The justify parameter is a keyword.
 * Reference: http://www.w3.org/TR/css3-flexbox/#align-items-property
 */
day8.re_frame.trace.utils.re_com.align_style = (function day8$re_frame$trace$utils$re_com$align_style(attribute,align){
var attribute_wk = cljs.core.keyword.call(null,["-webkit-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attribute))].join(''));
var as = (function (){var G__40925 = align;
var G__40925__$1 = (((G__40925 instanceof cljs.core.Keyword))?G__40925.fqn:null);
switch (G__40925__$1) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "center":
return "center";

break;
case "baseline":
return "baseline";

break;
case "stretch":
return "stretch";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40925__$1)].join('')));

}
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([attribute_wk,as,attribute,as]);
});
/**
 * Returns a component which produces a gap between children in a v-box/h-box along the main axis
 */
day8.re_frame.trace.utils.re_com.gap_f = (function day8$re_frame$trace$utils$re_com$gap_f(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40931 = arguments.length;
var i__29456__auto___40932 = (0);
while(true){
if((i__29456__auto___40932 < len__29455__auto___40931)){
args__29462__auto__.push((arguments[i__29456__auto___40932]));

var G__40933 = (i__29456__auto___40932 + (1));
i__29456__auto___40932 = G__40933;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

day8.re_frame.trace.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic = (function (p__40928){
var map__40929 = p__40928;
var map__40929__$1 = ((((!((map__40929 == null)))?((((map__40929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40929):map__40929);
var args = map__40929__$1;
var size = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var width = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var class$ = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__40929__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.call(null,(cljs.core.truth_(size)?day8.re_frame.trace.utils.re_com.flex_child_style.call(null,size):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-gap ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null);
});

day8.re_frame.trace.utils.re_com.gap_f.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.utils.re_com.gap_f.cljs$lang$applyTo = (function (seq40927){
return day8.re_frame.trace.utils.re_com.gap_f.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40927));
});

/**
 * Returns hiccup which produces a horizontal box.
 * It's primary role is to act as a container for components and lays it's children from left to right.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame.trace.utils.re_com.h_box = (function day8$re_frame$trace$utils$re_com$h_box(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40938 = arguments.length;
var i__29456__auto___40939 = (0);
while(true){
if((i__29456__auto___40939 < len__29455__auto___40938)){
args__29462__auto__.push((arguments[i__29456__auto___40939]));

var G__40940 = (i__29456__auto___40939 + (1));
i__29456__auto___40939 = G__40940;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

day8.re_frame.trace.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__40935){
var map__40936 = p__40935;
var map__40936__$1 = ((((!((map__40936 == null)))?((((map__40936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40936):map__40936);
var args = map__40936__$1;
var align_self = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.call(null,map__40936__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.call(null,day8.re_frame.trace.utils.re_com.flex_flow_style.call(null,"row nowrap"),day8.re_frame.trace.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame.trace.utils.re_com.justify_style.call(null,justify),day8.re_frame.trace.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame.trace.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"width","width",-384071477),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,children)):children);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-h-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null),children__$1);
});

day8.re_frame.trace.utils.re_com.h_box.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.utils.re_com.h_box.cljs$lang$applyTo = (function (seq40934){
return day8.re_frame.trace.utils.re_com.h_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40934));
});

/**
 * Returns hiccup which produces a vertical box.
 * It's primary role is to act as a container for components and lays it's children from top to bottom.
 * By default, it also acts as a child under it's parent
 */
day8.re_frame.trace.utils.re_com.v_box = (function day8$re_frame$trace$utils$re_com$v_box(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40945 = arguments.length;
var i__29456__auto___40946 = (0);
while(true){
if((i__29456__auto___40946 < len__29455__auto___40945)){
args__29462__auto__.push((arguments[i__29456__auto___40946]));

var G__40947 = (i__29456__auto___40946 + (1));
i__29456__auto___40946 = G__40947;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

day8.re_frame.trace.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__40942){
var map__40943 = p__40942;
var map__40943__$1 = ((((!((map__40943 == null)))?((((map__40943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40943):map__40943);
var args = map__40943__$1;
var align_self = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var height = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var margin = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var attr = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var min_width = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"min-width","min-width",1926193728));
var children = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var align = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"stretch","stretch",-1888837380));
var max_height = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var min_height = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"min-height","min-height",398480837));
var justify = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"start","start",-355208981));
var width = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_width = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"max-width","max-width",-1939924051));
var size = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"size","size",1098693007),"none");
var style = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var padding = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var gap = cljs.core.get.call(null,map__40943__$1,new cljs.core.Keyword(null,"gap","gap",80255254));
var s = cljs.core.merge.call(null,day8.re_frame.trace.utils.re_com.flex_flow_style.call(null,"column nowrap"),day8.re_frame.trace.utils.re_com.flex_child_style.call(null,size),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),(cljs.core.truth_(height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null):null),(cljs.core.truth_(min_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),min_width], null):null),(cljs.core.truth_(min_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height], null):null),(cljs.core.truth_(max_width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),max_width], null):null),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),day8.re_frame.trace.utils.re_com.justify_style.call(null,justify),day8.re_frame.trace.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-items","align-items",-267946462),align),(cljs.core.truth_(align_self)?day8.re_frame.trace.utils.re_com.align_style.call(null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),align_self):null),(cljs.core.truth_(margin)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),margin], null):null),(cljs.core.truth_(padding)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null):null),style);
var gap_form = (cljs.core.truth_(gap)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),gap,new cljs.core.Keyword(null,"height","height",1025178622),gap], null):null);
var children__$1 = (cljs.core.truth_(gap)?cljs.core.interpose.call(null,gap_form,cljs.core.filter.call(null,cljs.core.identity,children)):children);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-v-box display-flex ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null),children__$1);
});

day8.re_frame.trace.utils.re_com.v_box.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.utils.re_com.v_box.cljs$lang$applyTo = (function (seq40941){
return day8.re_frame.trace.utils.re_com.v_box.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40941));
});

/**
 * Returns a component which produces a line between children in a v-box/h-box along the main axis.
 * Specify size in pixels and a stancard CSS color. Defaults to a 1px lightgray line
 */
day8.re_frame.trace.utils.re_com.line = (function day8$re_frame$trace$utils$re_com$line(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40952 = arguments.length;
var i__29456__auto___40953 = (0);
while(true){
if((i__29456__auto___40953 < len__29455__auto___40952)){
args__29462__auto__.push((arguments[i__29456__auto___40953]));

var G__40954 = (i__29456__auto___40953 + (1));
i__29456__auto___40953 = G__40954;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

day8.re_frame.trace.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__40949){
var map__40950 = p__40949;
var map__40950__$1 = ((((!((map__40950 == null)))?((((map__40950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40950):map__40950);
var args = map__40950__$1;
var size = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"size","size",1098693007),"1px");
var color = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"color","color",1011675173),"lightgray");
var class$ = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.call(null,map__40950__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var s = cljs.core.merge.call(null,day8.re_frame.trace.utils.re_com.flex_child_style.call(null,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null),style);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),s], null),attr)], null);
});

day8.re_frame.trace.utils.re_com.line.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.utils.re_com.line.cljs$lang$applyTo = (function (seq40948){
return day8.re_frame.trace.utils.re_com.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40948));
});

/**
 * Returns markup for a basic text input label
 */
day8.re_frame.trace.utils.re_com.input_text_base = (function day8$re_frame$trace$utils$re_com$input_text_base(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40966 = arguments.length;
var i__29456__auto___40967 = (0);
while(true){
if((i__29456__auto___40967 < len__29455__auto___40966)){
args__29462__auto__.push((arguments[i__29456__auto___40967]));

var G__40968 = (i__29456__auto___40967 + (1));
i__29456__auto___40967 = G__40968;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

day8.re_frame.trace.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic = (function (p__40956){
var map__40957 = p__40956;
var map__40957__$1 = ((((!((map__40957 == null)))?((((map__40957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40957):map__40957);
var args = map__40957__$1;
var model = cljs.core.get.call(null,map__40957__$1,new cljs.core.Keyword(null,"model","model",331153215));
var input_type = cljs.core.get.call(null,map__40957__$1,new cljs.core.Keyword(null,"input-type","input-type",856973840));
var external_model = reagent.ratom.atom.call(null,day8.re_frame.trace.utils.re_com.deref_or_value.call(null,model));
var internal_model = reagent.ratom.atom.call(null,(((cljs.core.deref.call(null,external_model) == null))?"":cljs.core.deref.call(null,external_model)));
return ((function (external_model,internal_model,map__40957,map__40957__$1,args,model,input_type){
return (function() { 
var G__40969__delegate = function (p__40959){
var map__40960 = p__40959;
var map__40960__$1 = ((((!((map__40960 == null)))?((((map__40960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40960):map__40960);
var args__$1 = map__40960__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var status_icon_QMARK_ = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model__$1 = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var placeholder = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var rows = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var style = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var status = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true);
var on_submit = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
var validation_regex = cljs.core.get.call(null,map__40960__$1,new cljs.core.Keyword(null,"validation-regex","validation-regex",-197064361));
var latest_ext_model = day8.re_frame.trace.utils.re_com.deref_or_value.call(null,model__$1);
var disabled_QMARK___$1 = day8.re_frame.trace.utils.re_com.deref_or_value.call(null,disabled_QMARK_);
var change_on_blur_QMARK___$1 = day8.re_frame.trace.utils.re_com.deref_or_value.call(null,change_on_blur_QMARK_);
var showing_QMARK_ = reagent.ratom.atom.call(null,false);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,external_model),latest_ext_model)){
cljs.core.reset_BANG_.call(null,external_model,latest_ext_model);

cljs.core.reset_BANG_.call(null,internal_model,latest_ext_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame.trace.utils.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-input-text ",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width)?width:"250px"),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["rc-input-text-inner ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__40962 = status;
var G__40962__$1 = (((G__40962 instanceof cljs.core.Keyword))?G__40962.fqn:null);
switch (G__40962__$1) {
case "success":
return "has-success ";

break;
case "warning":
return "has-warning ";

break;
case "error":
return "has-error ";

break;
default:
return "";

}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__28274__auto__ = status;
if(cljs.core.truth_(and__28274__auto__)){
return status_icon_QMARK_;
} else {
return and__28274__auto__;
}
})())?"has-feedback":null))].join(''),new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame.trace.utils.re_com.flex_child_style.call(null,"auto")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"password","password",417022471)))?new cljs.core.Keyword(null,"input","input",556931961):input_type),cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765)],[placeholder,disabled_QMARK___$1,cljs.core.deref.call(null,internal_model),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_((function (){var and__28274__auto__ = on_change;
if(cljs.core.truth_(and__28274__auto__)){
var and__28274__auto____$1 = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__28274__auto____$1)){
return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,internal_model),cljs.core.deref.call(null,external_model));
} else {
return and__28274__auto____$1;
}
} else {
return and__28274__auto__;
}
})())){
on_change.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type))
,(function (){var G__40963 = input_type;
var G__40963__$1 = (((G__40963 instanceof cljs.core.Keyword))?G__40963.fqn:null);
switch (G__40963__$1) {
case "input":
return "text";

break;
case "password":
return "password";

break;
default:
return null;

}
})(),cljs.core.merge.call(null,day8.re_frame.trace.utils.re_com.flex_child_style.call(null,"none"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"12px"], null),style),((cljs.core._EQ_.call(null,input_type,new cljs.core.Keyword(null,"textarea","textarea",-650375824)))?(function (){var or__28286__auto__ = rows;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return (3);
}
})():null),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type){
return (function (event){
if(cljs.core.truth_(disabled_QMARK___$1)){
event.preventDefault();
} else {
var G__40964_40972 = event.which;
switch (G__40964_40972) {
case (27):
cljs.core.reset_BANG_.call(null,internal_model,cljs.core.deref.call(null,external_model));

break;
default:

}
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type))
,["form-control ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type){
return (function (event){
var new_val_40974 = event.target.value;
if(cljs.core.truth_((function (){var and__28274__auto__ = on_change;
if(cljs.core.truth_(and__28274__auto__)){
var and__28274__auto____$1 = cljs.core.not.call(null,disabled_QMARK___$1);
if(and__28274__auto____$1){
if(cljs.core.truth_(validation_regex)){
return cljs.core.re_find.call(null,validation_regex,new_val_40974);
} else {
return true;
}
} else {
return and__28274__auto____$1;
}
} else {
return and__28274__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,internal_model,new_val_40974);

if(cljs.core.truth_(change_on_blur_QMARK___$1)){
} else {
on_change.call(null,cljs.core.deref.call(null,internal_model));
}
} else {
}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type))
,((function (latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type){
return (function (event){
var G__40965_40975 = event.which;
switch (G__40965_40975) {
case (13):
if(cljs.core.truth_(on_submit)){
on_submit.call(null,cljs.core.deref.call(null,internal_model));
} else {
}

break;
default:

}

return null;
});})(latest_ext_model,disabled_QMARK___$1,change_on_blur_QMARK___$1,showing_QMARK_,map__40960,map__40960__$1,args__$1,disabled_QMARK_,on_change,status_icon_QMARK_,height,status_tooltip,model__$1,attr,placeholder,width,rows,style,status,class$,change_on_blur_QMARK_,on_submit,validation_regex,external_model,internal_model,map__40957,map__40957__$1,args,model,input_type))
]),attr)], null)], null)], null)], null);
};
var G__40969 = function (var_args){
var p__40959 = null;
if (arguments.length > 0) {
var G__40977__i = 0, G__40977__a = new Array(arguments.length -  0);
while (G__40977__i < G__40977__a.length) {G__40977__a[G__40977__i] = arguments[G__40977__i + 0]; ++G__40977__i;}
  p__40959 = new cljs.core.IndexedSeq(G__40977__a,0,null);
} 
return G__40969__delegate.call(this,p__40959);};
G__40969.cljs$lang$maxFixedArity = 0;
G__40969.cljs$lang$applyTo = (function (arglist__40978){
var p__40959 = cljs.core.seq(arglist__40978);
return G__40969__delegate(p__40959);
});
G__40969.cljs$core$IFn$_invoke$arity$variadic = G__40969__delegate;
return G__40969;
})()
;
;})(external_model,internal_model,map__40957,map__40957__$1,args,model,input_type))
});

day8.re_frame.trace.utils.re_com.input_text_base.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.utils.re_com.input_text_base.cljs$lang$applyTo = (function (seq40955){
return day8.re_frame.trace.utils.re_com.input_text_base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40955));
});

day8.re_frame.trace.utils.re_com.input_text = (function day8$re_frame$trace$utils$re_com$input_text(var_args){
var args__29462__auto__ = [];
var len__29455__auto___40980 = arguments.length;
var i__29456__auto___40981 = (0);
while(true){
if((i__29456__auto___40981 < len__29455__auto___40980)){
args__29462__auto__.push((arguments[i__29456__auto___40981]));

var G__40982 = (i__29456__auto___40981 + (1));
i__29456__auto___40981 = G__40982;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((0) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((0)),(0),null)):null);
return day8.re_frame.trace.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic(argseq__29463__auto__);
});

day8.re_frame.trace.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,day8.re_frame.trace.utils.re_com.input_text_base,new cljs.core.Keyword(null,"input-type","input-type",856973840),new cljs.core.Keyword(null,"input","input",556931961),args);
});

day8.re_frame.trace.utils.re_com.input_text.cljs$lang$maxFixedArity = (0);

day8.re_frame.trace.utils.re_com.input_text.cljs$lang$applyTo = (function (seq40979){
return day8.re_frame.trace.utils.re_com.input_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40979));
});

day8.re_frame.trace.utils.re_com.re_com_css = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-flex",".display-flex",1723609359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".display-inline-flex",".display-inline-flex",485976066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null)], null);

//# sourceMappingURL=re_com.js.map?rel=1517200923612
