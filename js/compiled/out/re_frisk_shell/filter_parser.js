// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frisk_shell.filter_parser');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
re_frisk_shell.filter_parser.read_all = (function re_frisk_shell$filter_parser$read_all(rdr){
var G__47616 = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core._EQ_.call(null,null,G__47616)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.tools.reader.reader_types.read_char.call(null,rdr),re_frisk_shell.filter_parser.read_all.call(null,rdr));

}
});
re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$read_string_SINGLEQUOTE_(s){
var sr = cljs.tools.reader.reader_types.string_push_back_reader.call(null,s);
var val = cljs.tools.reader.read.call(null,sr);
var rest = clojure.string.join.call(null,re_frisk_shell.filter_parser.read_all.call(null,sr));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
});
re_frisk_shell.filter_parser.parse_freeform = (function re_frisk_shell$filter_parser$parse_freeform(s){
var vec__47617 = clojure.string.split.call(null,s,/\s+/,(2));
var prefix = cljs.core.nth.call(null,vec__47617,(0),null);
var rest = cljs.core.nth.call(null,vec__47617,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"free","free",801364328),prefix], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__28286__auto__ = rest;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return "";
}
})()], null);
});
re_frisk_shell.filter_parser.parse_clojure_expr = (function re_frisk_shell$filter_parser$parse_clojure_expr(s){
try{var map__47621 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_.call(null,s);
var map__47621__$1 = ((((!((map__47621 == null)))?((((map__47621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47621):map__47621);
var foo = map__47621__$1;
var val = cljs.core.get.call(null,map__47621__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__47621__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e47620){var _ = e47620;
return re_frisk_shell.filter_parser.parse_freeform.call(null,s);
}});
re_frisk_shell.filter_parser.parse_clojure_string = (function re_frisk_shell$filter_parser$parse_clojure_string(s){
try{var map__47627 = re_frisk_shell.filter_parser.read_string_SINGLEQUOTE_.call(null,s);
var map__47627__$1 = ((((!((map__47627 == null)))?((((map__47627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47627):map__47627);
var val = cljs.core.get.call(null,map__47627__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__47627__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e47623){var _ = e47623;
var vec__47624 = clojure.string.split.call(null,s,/\s+/,(2));
var prefix = cljs.core.nth.call(null,vec__47624,(0),null);
var rest = cljs.core.nth.call(null,vec__47624,(1),null);
var prefix__$1 = clojure.string.replace.call(null,prefix,/^\"/,"");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string-prefix","string-prefix",2091851734),prefix__$1], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__28286__auto__ = rest;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return "";
}
})()], null);
}});
re_frisk_shell.filter_parser.parse_part = (function re_frisk_shell$filter_parser$parse_part(s){
var G__47629 = cljs.core.first.call(null,s);
switch (G__47629) {
case "[":
case "(":
case "{":
case "#":
case "\\":
case "'":
case ":":
return re_frisk_shell.filter_parser.parse_clojure_expr.call(null,s);

break;
case "\"":
return re_frisk_shell.filter_parser.parse_clojure_string.call(null,s);

break;
default:
return re_frisk_shell.filter_parser.parse_freeform.call(null,s);

}
});
re_frisk_shell.filter_parser.parse_SINGLEQUOTE_ = (function re_frisk_shell$filter_parser$parse_SINGLEQUOTE_(s){
var s__$1 = clojure.string.trim.call(null,s);
var s__$2 = clojure.string.replace.call(null,s__$1,/^\[(.*)\]$/,"$1");
if(cljs.core._EQ_.call(null,s__$2,"")){
return cljs.core.List.EMPTY;
} else {
var map__47631 = re_frisk_shell.filter_parser.parse_part.call(null,s__$2);
var map__47631__$1 = ((((!((map__47631 == null)))?((((map__47631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47631):map__47631);
var val = cljs.core.get.call(null,map__47631__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.call(null,map__47631__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return cljs.core.cons.call(null,val,re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.call(null,rest));
}
});
re_frisk_shell.filter_parser.parse = (function re_frisk_shell$filter_parser$parse(s){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,re_frisk_shell.filter_parser.parse_SINGLEQUOTE_.call(null,s));
});

//# sourceMappingURL=filter_parser.js.map?rel=1517200939771
