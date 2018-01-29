// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28286__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28286__auto__){
return or__28286__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28286__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35752_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35752_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35753 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35754 = null;
var count__35755 = (0);
var i__35756 = (0);
while(true){
if((i__35756 < count__35755)){
var n = cljs.core._nth.call(null,chunk__35754,i__35756);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35757 = seq__35753;
var G__35758 = chunk__35754;
var G__35759 = count__35755;
var G__35760 = (i__35756 + (1));
seq__35753 = G__35757;
chunk__35754 = G__35758;
count__35755 = G__35759;
i__35756 = G__35760;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35753);
if(temp__4657__auto__){
var seq__35753__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35753__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35753__$1);
var G__35761 = cljs.core.chunk_rest.call(null,seq__35753__$1);
var G__35762 = c__29125__auto__;
var G__35763 = cljs.core.count.call(null,c__29125__auto__);
var G__35764 = (0);
seq__35753 = G__35761;
chunk__35754 = G__35762;
count__35755 = G__35763;
i__35756 = G__35764;
continue;
} else {
var n = cljs.core.first.call(null,seq__35753__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35765 = cljs.core.next.call(null,seq__35753__$1);
var G__35766 = null;
var G__35767 = (0);
var G__35768 = (0);
seq__35753 = G__35765;
chunk__35754 = G__35766;
count__35755 = G__35767;
i__35756 = G__35768;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35778_35786 = cljs.core.seq.call(null,deps);
var chunk__35779_35787 = null;
var count__35780_35788 = (0);
var i__35781_35789 = (0);
while(true){
if((i__35781_35789 < count__35780_35788)){
var dep_35790 = cljs.core._nth.call(null,chunk__35779_35787,i__35781_35789);
topo_sort_helper_STAR_.call(null,dep_35790,(depth + (1)),state);

var G__35791 = seq__35778_35786;
var G__35792 = chunk__35779_35787;
var G__35793 = count__35780_35788;
var G__35794 = (i__35781_35789 + (1));
seq__35778_35786 = G__35791;
chunk__35779_35787 = G__35792;
count__35780_35788 = G__35793;
i__35781_35789 = G__35794;
continue;
} else {
var temp__4657__auto___35795 = cljs.core.seq.call(null,seq__35778_35786);
if(temp__4657__auto___35795){
var seq__35778_35796__$1 = temp__4657__auto___35795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35778_35796__$1)){
var c__29125__auto___35797 = cljs.core.chunk_first.call(null,seq__35778_35796__$1);
var G__35798 = cljs.core.chunk_rest.call(null,seq__35778_35796__$1);
var G__35799 = c__29125__auto___35797;
var G__35800 = cljs.core.count.call(null,c__29125__auto___35797);
var G__35801 = (0);
seq__35778_35786 = G__35798;
chunk__35779_35787 = G__35799;
count__35780_35788 = G__35800;
i__35781_35789 = G__35801;
continue;
} else {
var dep_35802 = cljs.core.first.call(null,seq__35778_35796__$1);
topo_sort_helper_STAR_.call(null,dep_35802,(depth + (1)),state);

var G__35803 = cljs.core.next.call(null,seq__35778_35796__$1);
var G__35804 = null;
var G__35805 = (0);
var G__35806 = (0);
seq__35778_35786 = G__35803;
chunk__35779_35787 = G__35804;
count__35780_35788 = G__35805;
i__35781_35789 = G__35806;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35782){
var vec__35783 = p__35782;
var seq__35784 = cljs.core.seq.call(null,vec__35783);
var first__35785 = cljs.core.first.call(null,seq__35784);
var seq__35784__$1 = cljs.core.next.call(null,seq__35784);
var x = first__35785;
var xs = seq__35784__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35783,seq__35784,first__35785,seq__35784__$1,x,xs,get_deps__$1){
return (function (p1__35769_SHARP_){
return clojure.set.difference.call(null,p1__35769_SHARP_,x);
});})(vec__35783,seq__35784,first__35785,seq__35784__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35807 = cljs.core.seq.call(null,provides);
var chunk__35808 = null;
var count__35809 = (0);
var i__35810 = (0);
while(true){
if((i__35810 < count__35809)){
var prov = cljs.core._nth.call(null,chunk__35808,i__35810);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35811_35819 = cljs.core.seq.call(null,requires);
var chunk__35812_35820 = null;
var count__35813_35821 = (0);
var i__35814_35822 = (0);
while(true){
if((i__35814_35822 < count__35813_35821)){
var req_35823 = cljs.core._nth.call(null,chunk__35812_35820,i__35814_35822);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35823,prov);

var G__35824 = seq__35811_35819;
var G__35825 = chunk__35812_35820;
var G__35826 = count__35813_35821;
var G__35827 = (i__35814_35822 + (1));
seq__35811_35819 = G__35824;
chunk__35812_35820 = G__35825;
count__35813_35821 = G__35826;
i__35814_35822 = G__35827;
continue;
} else {
var temp__4657__auto___35828 = cljs.core.seq.call(null,seq__35811_35819);
if(temp__4657__auto___35828){
var seq__35811_35829__$1 = temp__4657__auto___35828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35811_35829__$1)){
var c__29125__auto___35830 = cljs.core.chunk_first.call(null,seq__35811_35829__$1);
var G__35831 = cljs.core.chunk_rest.call(null,seq__35811_35829__$1);
var G__35832 = c__29125__auto___35830;
var G__35833 = cljs.core.count.call(null,c__29125__auto___35830);
var G__35834 = (0);
seq__35811_35819 = G__35831;
chunk__35812_35820 = G__35832;
count__35813_35821 = G__35833;
i__35814_35822 = G__35834;
continue;
} else {
var req_35835 = cljs.core.first.call(null,seq__35811_35829__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35835,prov);

var G__35836 = cljs.core.next.call(null,seq__35811_35829__$1);
var G__35837 = null;
var G__35838 = (0);
var G__35839 = (0);
seq__35811_35819 = G__35836;
chunk__35812_35820 = G__35837;
count__35813_35821 = G__35838;
i__35814_35822 = G__35839;
continue;
}
} else {
}
}
break;
}

var G__35840 = seq__35807;
var G__35841 = chunk__35808;
var G__35842 = count__35809;
var G__35843 = (i__35810 + (1));
seq__35807 = G__35840;
chunk__35808 = G__35841;
count__35809 = G__35842;
i__35810 = G__35843;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35807);
if(temp__4657__auto__){
var seq__35807__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35807__$1)){
var c__29125__auto__ = cljs.core.chunk_first.call(null,seq__35807__$1);
var G__35844 = cljs.core.chunk_rest.call(null,seq__35807__$1);
var G__35845 = c__29125__auto__;
var G__35846 = cljs.core.count.call(null,c__29125__auto__);
var G__35847 = (0);
seq__35807 = G__35844;
chunk__35808 = G__35845;
count__35809 = G__35846;
i__35810 = G__35847;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35807__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35815_35848 = cljs.core.seq.call(null,requires);
var chunk__35816_35849 = null;
var count__35817_35850 = (0);
var i__35818_35851 = (0);
while(true){
if((i__35818_35851 < count__35817_35850)){
var req_35852 = cljs.core._nth.call(null,chunk__35816_35849,i__35818_35851);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35852,prov);

var G__35853 = seq__35815_35848;
var G__35854 = chunk__35816_35849;
var G__35855 = count__35817_35850;
var G__35856 = (i__35818_35851 + (1));
seq__35815_35848 = G__35853;
chunk__35816_35849 = G__35854;
count__35817_35850 = G__35855;
i__35818_35851 = G__35856;
continue;
} else {
var temp__4657__auto___35857__$1 = cljs.core.seq.call(null,seq__35815_35848);
if(temp__4657__auto___35857__$1){
var seq__35815_35858__$1 = temp__4657__auto___35857__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35815_35858__$1)){
var c__29125__auto___35859 = cljs.core.chunk_first.call(null,seq__35815_35858__$1);
var G__35860 = cljs.core.chunk_rest.call(null,seq__35815_35858__$1);
var G__35861 = c__29125__auto___35859;
var G__35862 = cljs.core.count.call(null,c__29125__auto___35859);
var G__35863 = (0);
seq__35815_35848 = G__35860;
chunk__35816_35849 = G__35861;
count__35817_35850 = G__35862;
i__35818_35851 = G__35863;
continue;
} else {
var req_35864 = cljs.core.first.call(null,seq__35815_35858__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35864,prov);

var G__35865 = cljs.core.next.call(null,seq__35815_35858__$1);
var G__35866 = null;
var G__35867 = (0);
var G__35868 = (0);
seq__35815_35848 = G__35865;
chunk__35816_35849 = G__35866;
count__35817_35850 = G__35867;
i__35818_35851 = G__35868;
continue;
}
} else {
}
}
break;
}

var G__35869 = cljs.core.next.call(null,seq__35807__$1);
var G__35870 = null;
var G__35871 = (0);
var G__35872 = (0);
seq__35807 = G__35869;
chunk__35808 = G__35870;
count__35809 = G__35871;
i__35810 = G__35872;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35873_35877 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35874_35878 = null;
var count__35875_35879 = (0);
var i__35876_35880 = (0);
while(true){
if((i__35876_35880 < count__35875_35879)){
var ns_35881 = cljs.core._nth.call(null,chunk__35874_35878,i__35876_35880);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35881);

var G__35882 = seq__35873_35877;
var G__35883 = chunk__35874_35878;
var G__35884 = count__35875_35879;
var G__35885 = (i__35876_35880 + (1));
seq__35873_35877 = G__35882;
chunk__35874_35878 = G__35883;
count__35875_35879 = G__35884;
i__35876_35880 = G__35885;
continue;
} else {
var temp__4657__auto___35886 = cljs.core.seq.call(null,seq__35873_35877);
if(temp__4657__auto___35886){
var seq__35873_35887__$1 = temp__4657__auto___35886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35873_35887__$1)){
var c__29125__auto___35888 = cljs.core.chunk_first.call(null,seq__35873_35887__$1);
var G__35889 = cljs.core.chunk_rest.call(null,seq__35873_35887__$1);
var G__35890 = c__29125__auto___35888;
var G__35891 = cljs.core.count.call(null,c__29125__auto___35888);
var G__35892 = (0);
seq__35873_35877 = G__35889;
chunk__35874_35878 = G__35890;
count__35875_35879 = G__35891;
i__35876_35880 = G__35892;
continue;
} else {
var ns_35893 = cljs.core.first.call(null,seq__35873_35887__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35893);

var G__35894 = cljs.core.next.call(null,seq__35873_35887__$1);
var G__35895 = null;
var G__35896 = (0);
var G__35897 = (0);
seq__35873_35877 = G__35894;
chunk__35874_35878 = G__35895;
count__35875_35879 = G__35896;
i__35876_35880 = G__35897;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28286__auto__ = goog.require__;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35898__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35898 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35899__i = 0, G__35899__a = new Array(arguments.length -  0);
while (G__35899__i < G__35899__a.length) {G__35899__a[G__35899__i] = arguments[G__35899__i + 0]; ++G__35899__i;}
  args = new cljs.core.IndexedSeq(G__35899__a,0,null);
} 
return G__35898__delegate.call(this,args);};
G__35898.cljs$lang$maxFixedArity = 0;
G__35898.cljs$lang$applyTo = (function (arglist__35900){
var args = cljs.core.seq(arglist__35900);
return G__35898__delegate(args);
});
G__35898.cljs$core$IFn$_invoke$arity$variadic = G__35898__delegate;
return G__35898;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35901_SHARP_,p2__35902_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35901_SHARP_)].join('')),p2__35902_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35903_SHARP_,p2__35904_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35903_SHARP_)].join(''),p2__35904_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35905 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35905.addCallback(((function (G__35905){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35905))
);

G__35905.addErrback(((function (G__35905){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35905))
);

return G__35905;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35906 = cljs.core._EQ_;
var expr__35907 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35906.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35907))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35906,expr__35907){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35906,expr__35907))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35906,expr__35907){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35909){if((e35909 instanceof Error)){
var e = e35909;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35909;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35906,expr__35907))
} else {
if(cljs.core.truth_(pred__35906.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35907))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35906.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35907))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35906.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35907))){
return ((function (pred__35906,expr__35907){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35910){if((e35910 instanceof Error)){
var e = e35910;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35910;

}
}})());
});
;})(pred__35906,expr__35907))
} else {
return ((function (pred__35906,expr__35907){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35906,expr__35907))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35911,callback){
var map__35912 = p__35911;
var map__35912__$1 = ((((!((map__35912 == null)))?((((map__35912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35912):map__35912);
var file_msg = map__35912__$1;
var request_url = cljs.core.get.call(null,map__35912__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35912,map__35912__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35912,map__35912__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__){
return (function (state_35936){
var state_val_35937 = (state_35936[(1)]);
if((state_val_35937 === (7))){
var inst_35932 = (state_35936[(2)]);
var state_35936__$1 = state_35936;
var statearr_35938_35955 = state_35936__$1;
(statearr_35938_35955[(2)] = inst_35932);

(statearr_35938_35955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35937 === (1))){
var state_35936__$1 = state_35936;
var statearr_35939_35956 = state_35936__$1;
(statearr_35939_35956[(2)] = null);

(statearr_35939_35956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35937 === (4))){
var inst_35916 = (state_35936[(7)]);
var inst_35916__$1 = (state_35936[(2)]);
var state_35936__$1 = (function (){var statearr_35940 = state_35936;
(statearr_35940[(7)] = inst_35916__$1);

return statearr_35940;
})();
if(cljs.core.truth_(inst_35916__$1)){
var statearr_35941_35957 = state_35936__$1;
(statearr_35941_35957[(1)] = (5));

} else {
var statearr_35942_35958 = state_35936__$1;
(statearr_35942_35958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35937 === (6))){
var state_35936__$1 = state_35936;
var statearr_35943_35959 = state_35936__$1;
(statearr_35943_35959[(2)] = null);

(statearr_35943_35959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35937 === (3))){
var inst_35934 = (state_35936[(2)]);
var state_35936__$1 = state_35936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35936__$1,inst_35934);
} else {
if((state_val_35937 === (2))){
var state_35936__$1 = state_35936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35936__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35937 === (11))){
var inst_35928 = (state_35936[(2)]);
var state_35936__$1 = (function (){var statearr_35944 = state_35936;
(statearr_35944[(8)] = inst_35928);

return statearr_35944;
})();
var statearr_35945_35960 = state_35936__$1;
(statearr_35945_35960[(2)] = null);

(statearr_35945_35960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35937 === (9))){
var inst_35920 = (state_35936[(9)]);
var inst_35922 = (state_35936[(10)]);
var inst_35924 = inst_35922.call(null,inst_35920);
var state_35936__$1 = state_35936;
var statearr_35946_35961 = state_35936__$1;
(statearr_35946_35961[(2)] = inst_35924);

(statearr_35946_35961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35937 === (5))){
var inst_35916 = (state_35936[(7)]);
var inst_35918 = figwheel.client.file_reloading.blocking_load.call(null,inst_35916);
var state_35936__$1 = state_35936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35936__$1,(8),inst_35918);
} else {
if((state_val_35937 === (10))){
var inst_35920 = (state_35936[(9)]);
var inst_35926 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35920);
var state_35936__$1 = state_35936;
var statearr_35947_35962 = state_35936__$1;
(statearr_35947_35962[(2)] = inst_35926);

(statearr_35947_35962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35937 === (8))){
var inst_35916 = (state_35936[(7)]);
var inst_35922 = (state_35936[(10)]);
var inst_35920 = (state_35936[(2)]);
var inst_35921 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35922__$1 = cljs.core.get.call(null,inst_35921,inst_35916);
var state_35936__$1 = (function (){var statearr_35948 = state_35936;
(statearr_35948[(9)] = inst_35920);

(statearr_35948[(10)] = inst_35922__$1);

return statearr_35948;
})();
if(cljs.core.truth_(inst_35922__$1)){
var statearr_35949_35963 = state_35936__$1;
(statearr_35949_35963[(1)] = (9));

} else {
var statearr_35950_35964 = state_35936__$1;
(statearr_35950_35964[(1)] = (10));

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
});})(c__32582__auto__))
;
return ((function (switch__32494__auto__,c__32582__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32495__auto__ = null;
var figwheel$client$file_reloading$state_machine__32495__auto____0 = (function (){
var statearr_35951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35951[(0)] = figwheel$client$file_reloading$state_machine__32495__auto__);

(statearr_35951[(1)] = (1));

return statearr_35951;
});
var figwheel$client$file_reloading$state_machine__32495__auto____1 = (function (state_35936){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_35936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e35952){if((e35952 instanceof Object)){
var ex__32498__auto__ = e35952;
var statearr_35953_35965 = state_35936;
(statearr_35953_35965[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35966 = state_35936;
state_35936 = G__35966;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32495__auto__ = function(state_35936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32495__auto____1.call(this,state_35936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32495__auto____0;
figwheel$client$file_reloading$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32495__auto____1;
return figwheel$client$file_reloading$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__))
})();
var state__32584__auto__ = (function (){var statearr_35954 = f__32583__auto__.call(null);
(statearr_35954[(6)] = c__32582__auto__);

return statearr_35954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__))
);

return c__32582__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35967,callback){
var map__35968 = p__35967;
var map__35968__$1 = ((((!((map__35968 == null)))?((((map__35968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35968.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35968):map__35968);
var file_msg = map__35968__$1;
var namespace = cljs.core.get.call(null,map__35968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35968,map__35968__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35968,map__35968__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35970){
var map__35971 = p__35970;
var map__35971__$1 = ((((!((map__35971 == null)))?((((map__35971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35971):map__35971);
var file_msg = map__35971__$1;
var namespace = cljs.core.get.call(null,map__35971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35973){
var map__35974 = p__35973;
var map__35974__$1 = ((((!((map__35974 == null)))?((((map__35974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35974):map__35974);
var file_msg = map__35974__$1;
var namespace = cljs.core.get.call(null,map__35974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28274__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28274__auto__){
var or__28286__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
var or__28286__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28286__auto____$1)){
return or__28286__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28274__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35976,callback){
var map__35977 = p__35976;
var map__35977__$1 = ((((!((map__35977 == null)))?((((map__35977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35977):map__35977);
var file_msg = map__35977__$1;
var request_url = cljs.core.get.call(null,map__35977__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32582__auto___36027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___36027,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___36027,out){
return (function (state_36012){
var state_val_36013 = (state_36012[(1)]);
if((state_val_36013 === (1))){
var inst_35986 = cljs.core.seq.call(null,files);
var inst_35987 = cljs.core.first.call(null,inst_35986);
var inst_35988 = cljs.core.next.call(null,inst_35986);
var inst_35989 = files;
var state_36012__$1 = (function (){var statearr_36014 = state_36012;
(statearr_36014[(7)] = inst_35989);

(statearr_36014[(8)] = inst_35987);

(statearr_36014[(9)] = inst_35988);

return statearr_36014;
})();
var statearr_36015_36028 = state_36012__$1;
(statearr_36015_36028[(2)] = null);

(statearr_36015_36028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (2))){
var inst_35989 = (state_36012[(7)]);
var inst_35995 = (state_36012[(10)]);
var inst_35994 = cljs.core.seq.call(null,inst_35989);
var inst_35995__$1 = cljs.core.first.call(null,inst_35994);
var inst_35996 = cljs.core.next.call(null,inst_35994);
var inst_35997 = (inst_35995__$1 == null);
var inst_35998 = cljs.core.not.call(null,inst_35997);
var state_36012__$1 = (function (){var statearr_36016 = state_36012;
(statearr_36016[(11)] = inst_35996);

(statearr_36016[(10)] = inst_35995__$1);

return statearr_36016;
})();
if(inst_35998){
var statearr_36017_36029 = state_36012__$1;
(statearr_36017_36029[(1)] = (4));

} else {
var statearr_36018_36030 = state_36012__$1;
(statearr_36018_36030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (3))){
var inst_36010 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36012__$1,inst_36010);
} else {
if((state_val_36013 === (4))){
var inst_35995 = (state_36012[(10)]);
var inst_36000 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35995);
var state_36012__$1 = state_36012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36012__$1,(7),inst_36000);
} else {
if((state_val_36013 === (5))){
var inst_36006 = cljs.core.async.close_BANG_.call(null,out);
var state_36012__$1 = state_36012;
var statearr_36019_36031 = state_36012__$1;
(statearr_36019_36031[(2)] = inst_36006);

(statearr_36019_36031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (6))){
var inst_36008 = (state_36012[(2)]);
var state_36012__$1 = state_36012;
var statearr_36020_36032 = state_36012__$1;
(statearr_36020_36032[(2)] = inst_36008);

(statearr_36020_36032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36013 === (7))){
var inst_35996 = (state_36012[(11)]);
var inst_36002 = (state_36012[(2)]);
var inst_36003 = cljs.core.async.put_BANG_.call(null,out,inst_36002);
var inst_35989 = inst_35996;
var state_36012__$1 = (function (){var statearr_36021 = state_36012;
(statearr_36021[(7)] = inst_35989);

(statearr_36021[(12)] = inst_36003);

return statearr_36021;
})();
var statearr_36022_36033 = state_36012__$1;
(statearr_36022_36033[(2)] = null);

(statearr_36022_36033[(1)] = (2));


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
});})(c__32582__auto___36027,out))
;
return ((function (switch__32494__auto__,c__32582__auto___36027,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto____0 = (function (){
var statearr_36023 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36023[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto__);

(statearr_36023[(1)] = (1));

return statearr_36023;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto____1 = (function (state_36012){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_36012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e36024){if((e36024 instanceof Object)){
var ex__32498__auto__ = e36024;
var statearr_36025_36034 = state_36012;
(statearr_36025_36034[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36035 = state_36012;
state_36012 = G__36035;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto__ = function(state_36012){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto____1.call(this,state_36012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___36027,out))
})();
var state__32584__auto__ = (function (){var statearr_36026 = f__32583__auto__.call(null);
(statearr_36026[(6)] = c__32582__auto___36027);

return statearr_36026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___36027,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36036,opts){
var map__36037 = p__36036;
var map__36037__$1 = ((((!((map__36037 == null)))?((((map__36037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36037):map__36037);
var eval_body = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36037__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28274__auto__ = eval_body;
if(cljs.core.truth_(and__28274__auto__)){
return typeof eval_body === 'string';
} else {
return and__28274__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36039){var e = e36039;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36040_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36040_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36041){
var vec__36042 = p__36041;
var k = cljs.core.nth.call(null,vec__36042,(0),null);
var v = cljs.core.nth.call(null,vec__36042,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36045){
var vec__36046 = p__36045;
var k = cljs.core.nth.call(null,vec__36046,(0),null);
var v = cljs.core.nth.call(null,vec__36046,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36052,p__36053){
var map__36054 = p__36052;
var map__36054__$1 = ((((!((map__36054 == null)))?((((map__36054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36054):map__36054);
var opts = map__36054__$1;
var before_jsload = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36054__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36055 = p__36053;
var map__36055__$1 = ((((!((map__36055 == null)))?((((map__36055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36055):map__36055);
var msg = map__36055__$1;
var files = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36055__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36209){
var state_val_36210 = (state_36209[(1)]);
if((state_val_36210 === (7))){
var inst_36070 = (state_36209[(7)]);
var inst_36069 = (state_36209[(8)]);
var inst_36071 = (state_36209[(9)]);
var inst_36072 = (state_36209[(10)]);
var inst_36077 = cljs.core._nth.call(null,inst_36070,inst_36072);
var inst_36078 = figwheel.client.file_reloading.eval_body.call(null,inst_36077,opts);
var inst_36079 = (inst_36072 + (1));
var tmp36211 = inst_36070;
var tmp36212 = inst_36069;
var tmp36213 = inst_36071;
var inst_36069__$1 = tmp36212;
var inst_36070__$1 = tmp36211;
var inst_36071__$1 = tmp36213;
var inst_36072__$1 = inst_36079;
var state_36209__$1 = (function (){var statearr_36214 = state_36209;
(statearr_36214[(7)] = inst_36070__$1);

(statearr_36214[(8)] = inst_36069__$1);

(statearr_36214[(11)] = inst_36078);

(statearr_36214[(9)] = inst_36071__$1);

(statearr_36214[(10)] = inst_36072__$1);

return statearr_36214;
})();
var statearr_36215_36298 = state_36209__$1;
(statearr_36215_36298[(2)] = null);

(statearr_36215_36298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (20))){
var inst_36112 = (state_36209[(12)]);
var inst_36120 = figwheel.client.file_reloading.sort_files.call(null,inst_36112);
var state_36209__$1 = state_36209;
var statearr_36216_36299 = state_36209__$1;
(statearr_36216_36299[(2)] = inst_36120);

(statearr_36216_36299[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (27))){
var state_36209__$1 = state_36209;
var statearr_36217_36300 = state_36209__$1;
(statearr_36217_36300[(2)] = null);

(statearr_36217_36300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (1))){
var inst_36061 = (state_36209[(13)]);
var inst_36058 = before_jsload.call(null,files);
var inst_36059 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36060 = (function (){return ((function (inst_36061,inst_36058,inst_36059,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36049_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36049_SHARP_);
});
;})(inst_36061,inst_36058,inst_36059,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36061__$1 = cljs.core.filter.call(null,inst_36060,files);
var inst_36062 = cljs.core.not_empty.call(null,inst_36061__$1);
var state_36209__$1 = (function (){var statearr_36218 = state_36209;
(statearr_36218[(14)] = inst_36059);

(statearr_36218[(15)] = inst_36058);

(statearr_36218[(13)] = inst_36061__$1);

return statearr_36218;
})();
if(cljs.core.truth_(inst_36062)){
var statearr_36219_36301 = state_36209__$1;
(statearr_36219_36301[(1)] = (2));

} else {
var statearr_36220_36302 = state_36209__$1;
(statearr_36220_36302[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (24))){
var state_36209__$1 = state_36209;
var statearr_36221_36303 = state_36209__$1;
(statearr_36221_36303[(2)] = null);

(statearr_36221_36303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (39))){
var inst_36162 = (state_36209[(16)]);
var state_36209__$1 = state_36209;
var statearr_36222_36304 = state_36209__$1;
(statearr_36222_36304[(2)] = inst_36162);

(statearr_36222_36304[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (46))){
var inst_36204 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36223_36305 = state_36209__$1;
(statearr_36223_36305[(2)] = inst_36204);

(statearr_36223_36305[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (4))){
var inst_36106 = (state_36209[(2)]);
var inst_36107 = cljs.core.List.EMPTY;
var inst_36108 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36107);
var inst_36109 = (function (){return ((function (inst_36106,inst_36107,inst_36108,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36050_SHARP_){
var and__28274__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36050_SHARP_);
if(cljs.core.truth_(and__28274__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36050_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36050_SHARP_)));
} else {
return and__28274__auto__;
}
});
;})(inst_36106,inst_36107,inst_36108,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36110 = cljs.core.filter.call(null,inst_36109,files);
var inst_36111 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36112 = cljs.core.concat.call(null,inst_36110,inst_36111);
var state_36209__$1 = (function (){var statearr_36224 = state_36209;
(statearr_36224[(12)] = inst_36112);

(statearr_36224[(17)] = inst_36106);

(statearr_36224[(18)] = inst_36108);

return statearr_36224;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36225_36306 = state_36209__$1;
(statearr_36225_36306[(1)] = (16));

} else {
var statearr_36226_36307 = state_36209__$1;
(statearr_36226_36307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (15))){
var inst_36096 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36227_36308 = state_36209__$1;
(statearr_36227_36308[(2)] = inst_36096);

(statearr_36227_36308[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (21))){
var inst_36122 = (state_36209[(19)]);
var inst_36122__$1 = (state_36209[(2)]);
var inst_36123 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36122__$1);
var state_36209__$1 = (function (){var statearr_36228 = state_36209;
(statearr_36228[(19)] = inst_36122__$1);

return statearr_36228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36209__$1,(22),inst_36123);
} else {
if((state_val_36210 === (31))){
var inst_36207 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36209__$1,inst_36207);
} else {
if((state_val_36210 === (32))){
var inst_36162 = (state_36209[(16)]);
var inst_36167 = inst_36162.cljs$lang$protocol_mask$partition0$;
var inst_36168 = (inst_36167 & (64));
var inst_36169 = inst_36162.cljs$core$ISeq$;
var inst_36170 = (cljs.core.PROTOCOL_SENTINEL === inst_36169);
var inst_36171 = (inst_36168) || (inst_36170);
var state_36209__$1 = state_36209;
if(cljs.core.truth_(inst_36171)){
var statearr_36229_36309 = state_36209__$1;
(statearr_36229_36309[(1)] = (35));

} else {
var statearr_36230_36310 = state_36209__$1;
(statearr_36230_36310[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (40))){
var inst_36184 = (state_36209[(20)]);
var inst_36183 = (state_36209[(2)]);
var inst_36184__$1 = cljs.core.get.call(null,inst_36183,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36185 = cljs.core.get.call(null,inst_36183,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36186 = cljs.core.not_empty.call(null,inst_36184__$1);
var state_36209__$1 = (function (){var statearr_36231 = state_36209;
(statearr_36231[(21)] = inst_36185);

(statearr_36231[(20)] = inst_36184__$1);

return statearr_36231;
})();
if(cljs.core.truth_(inst_36186)){
var statearr_36232_36311 = state_36209__$1;
(statearr_36232_36311[(1)] = (41));

} else {
var statearr_36233_36312 = state_36209__$1;
(statearr_36233_36312[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (33))){
var state_36209__$1 = state_36209;
var statearr_36234_36313 = state_36209__$1;
(statearr_36234_36313[(2)] = false);

(statearr_36234_36313[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (13))){
var inst_36082 = (state_36209[(22)]);
var inst_36086 = cljs.core.chunk_first.call(null,inst_36082);
var inst_36087 = cljs.core.chunk_rest.call(null,inst_36082);
var inst_36088 = cljs.core.count.call(null,inst_36086);
var inst_36069 = inst_36087;
var inst_36070 = inst_36086;
var inst_36071 = inst_36088;
var inst_36072 = (0);
var state_36209__$1 = (function (){var statearr_36235 = state_36209;
(statearr_36235[(7)] = inst_36070);

(statearr_36235[(8)] = inst_36069);

(statearr_36235[(9)] = inst_36071);

(statearr_36235[(10)] = inst_36072);

return statearr_36235;
})();
var statearr_36236_36314 = state_36209__$1;
(statearr_36236_36314[(2)] = null);

(statearr_36236_36314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (22))){
var inst_36122 = (state_36209[(19)]);
var inst_36126 = (state_36209[(23)]);
var inst_36130 = (state_36209[(24)]);
var inst_36125 = (state_36209[(25)]);
var inst_36125__$1 = (state_36209[(2)]);
var inst_36126__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36125__$1);
var inst_36127 = (function (){var all_files = inst_36122;
var res_SINGLEQUOTE_ = inst_36125__$1;
var res = inst_36126__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36122,inst_36126,inst_36130,inst_36125,inst_36125__$1,inst_36126__$1,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36051_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36051_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36122,inst_36126,inst_36130,inst_36125,inst_36125__$1,inst_36126__$1,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36128 = cljs.core.filter.call(null,inst_36127,inst_36125__$1);
var inst_36129 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36130__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36129);
var inst_36131 = cljs.core.not_empty.call(null,inst_36130__$1);
var state_36209__$1 = (function (){var statearr_36237 = state_36209;
(statearr_36237[(23)] = inst_36126__$1);

(statearr_36237[(24)] = inst_36130__$1);

(statearr_36237[(25)] = inst_36125__$1);

(statearr_36237[(26)] = inst_36128);

return statearr_36237;
})();
if(cljs.core.truth_(inst_36131)){
var statearr_36238_36315 = state_36209__$1;
(statearr_36238_36315[(1)] = (23));

} else {
var statearr_36239_36316 = state_36209__$1;
(statearr_36239_36316[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (36))){
var state_36209__$1 = state_36209;
var statearr_36240_36317 = state_36209__$1;
(statearr_36240_36317[(2)] = false);

(statearr_36240_36317[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (41))){
var inst_36184 = (state_36209[(20)]);
var inst_36188 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36189 = cljs.core.map.call(null,inst_36188,inst_36184);
var inst_36190 = cljs.core.pr_str.call(null,inst_36189);
var inst_36191 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36190)].join('');
var inst_36192 = figwheel.client.utils.log.call(null,inst_36191);
var state_36209__$1 = state_36209;
var statearr_36241_36318 = state_36209__$1;
(statearr_36241_36318[(2)] = inst_36192);

(statearr_36241_36318[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (43))){
var inst_36185 = (state_36209[(21)]);
var inst_36195 = (state_36209[(2)]);
var inst_36196 = cljs.core.not_empty.call(null,inst_36185);
var state_36209__$1 = (function (){var statearr_36242 = state_36209;
(statearr_36242[(27)] = inst_36195);

return statearr_36242;
})();
if(cljs.core.truth_(inst_36196)){
var statearr_36243_36319 = state_36209__$1;
(statearr_36243_36319[(1)] = (44));

} else {
var statearr_36244_36320 = state_36209__$1;
(statearr_36244_36320[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (29))){
var inst_36122 = (state_36209[(19)]);
var inst_36162 = (state_36209[(16)]);
var inst_36126 = (state_36209[(23)]);
var inst_36130 = (state_36209[(24)]);
var inst_36125 = (state_36209[(25)]);
var inst_36128 = (state_36209[(26)]);
var inst_36158 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36161 = (function (){var all_files = inst_36122;
var res_SINGLEQUOTE_ = inst_36125;
var res = inst_36126;
var files_not_loaded = inst_36128;
var dependencies_that_loaded = inst_36130;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36162,inst_36126,inst_36130,inst_36125,inst_36128,inst_36158,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36160){
var map__36245 = p__36160;
var map__36245__$1 = ((((!((map__36245 == null)))?((((map__36245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36245.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36245):map__36245);
var namespace = cljs.core.get.call(null,map__36245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36162,inst_36126,inst_36130,inst_36125,inst_36128,inst_36158,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36162__$1 = cljs.core.group_by.call(null,inst_36161,inst_36128);
var inst_36164 = (inst_36162__$1 == null);
var inst_36165 = cljs.core.not.call(null,inst_36164);
var state_36209__$1 = (function (){var statearr_36247 = state_36209;
(statearr_36247[(28)] = inst_36158);

(statearr_36247[(16)] = inst_36162__$1);

return statearr_36247;
})();
if(inst_36165){
var statearr_36248_36321 = state_36209__$1;
(statearr_36248_36321[(1)] = (32));

} else {
var statearr_36249_36322 = state_36209__$1;
(statearr_36249_36322[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (44))){
var inst_36185 = (state_36209[(21)]);
var inst_36198 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36185);
var inst_36199 = cljs.core.pr_str.call(null,inst_36198);
var inst_36200 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36199)].join('');
var inst_36201 = figwheel.client.utils.log.call(null,inst_36200);
var state_36209__$1 = state_36209;
var statearr_36250_36323 = state_36209__$1;
(statearr_36250_36323[(2)] = inst_36201);

(statearr_36250_36323[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (6))){
var inst_36103 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36251_36324 = state_36209__$1;
(statearr_36251_36324[(2)] = inst_36103);

(statearr_36251_36324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (28))){
var inst_36128 = (state_36209[(26)]);
var inst_36155 = (state_36209[(2)]);
var inst_36156 = cljs.core.not_empty.call(null,inst_36128);
var state_36209__$1 = (function (){var statearr_36252 = state_36209;
(statearr_36252[(29)] = inst_36155);

return statearr_36252;
})();
if(cljs.core.truth_(inst_36156)){
var statearr_36253_36325 = state_36209__$1;
(statearr_36253_36325[(1)] = (29));

} else {
var statearr_36254_36326 = state_36209__$1;
(statearr_36254_36326[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (25))){
var inst_36126 = (state_36209[(23)]);
var inst_36142 = (state_36209[(2)]);
var inst_36143 = cljs.core.not_empty.call(null,inst_36126);
var state_36209__$1 = (function (){var statearr_36255 = state_36209;
(statearr_36255[(30)] = inst_36142);

return statearr_36255;
})();
if(cljs.core.truth_(inst_36143)){
var statearr_36256_36327 = state_36209__$1;
(statearr_36256_36327[(1)] = (26));

} else {
var statearr_36257_36328 = state_36209__$1;
(statearr_36257_36328[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (34))){
var inst_36178 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
if(cljs.core.truth_(inst_36178)){
var statearr_36258_36329 = state_36209__$1;
(statearr_36258_36329[(1)] = (38));

} else {
var statearr_36259_36330 = state_36209__$1;
(statearr_36259_36330[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (17))){
var state_36209__$1 = state_36209;
var statearr_36260_36331 = state_36209__$1;
(statearr_36260_36331[(2)] = recompile_dependents);

(statearr_36260_36331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (3))){
var state_36209__$1 = state_36209;
var statearr_36261_36332 = state_36209__$1;
(statearr_36261_36332[(2)] = null);

(statearr_36261_36332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (12))){
var inst_36099 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36262_36333 = state_36209__$1;
(statearr_36262_36333[(2)] = inst_36099);

(statearr_36262_36333[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (2))){
var inst_36061 = (state_36209[(13)]);
var inst_36068 = cljs.core.seq.call(null,inst_36061);
var inst_36069 = inst_36068;
var inst_36070 = null;
var inst_36071 = (0);
var inst_36072 = (0);
var state_36209__$1 = (function (){var statearr_36263 = state_36209;
(statearr_36263[(7)] = inst_36070);

(statearr_36263[(8)] = inst_36069);

(statearr_36263[(9)] = inst_36071);

(statearr_36263[(10)] = inst_36072);

return statearr_36263;
})();
var statearr_36264_36334 = state_36209__$1;
(statearr_36264_36334[(2)] = null);

(statearr_36264_36334[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (23))){
var inst_36122 = (state_36209[(19)]);
var inst_36126 = (state_36209[(23)]);
var inst_36130 = (state_36209[(24)]);
var inst_36125 = (state_36209[(25)]);
var inst_36128 = (state_36209[(26)]);
var inst_36133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36135 = (function (){var all_files = inst_36122;
var res_SINGLEQUOTE_ = inst_36125;
var res = inst_36126;
var files_not_loaded = inst_36128;
var dependencies_that_loaded = inst_36130;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36126,inst_36130,inst_36125,inst_36128,inst_36133,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36134){
var map__36265 = p__36134;
var map__36265__$1 = ((((!((map__36265 == null)))?((((map__36265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36265):map__36265);
var request_url = cljs.core.get.call(null,map__36265__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36126,inst_36130,inst_36125,inst_36128,inst_36133,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36136 = cljs.core.reverse.call(null,inst_36130);
var inst_36137 = cljs.core.map.call(null,inst_36135,inst_36136);
var inst_36138 = cljs.core.pr_str.call(null,inst_36137);
var inst_36139 = figwheel.client.utils.log.call(null,inst_36138);
var state_36209__$1 = (function (){var statearr_36267 = state_36209;
(statearr_36267[(31)] = inst_36133);

return statearr_36267;
})();
var statearr_36268_36335 = state_36209__$1;
(statearr_36268_36335[(2)] = inst_36139);

(statearr_36268_36335[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (35))){
var state_36209__$1 = state_36209;
var statearr_36269_36336 = state_36209__$1;
(statearr_36269_36336[(2)] = true);

(statearr_36269_36336[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (19))){
var inst_36112 = (state_36209[(12)]);
var inst_36118 = figwheel.client.file_reloading.expand_files.call(null,inst_36112);
var state_36209__$1 = state_36209;
var statearr_36270_36337 = state_36209__$1;
(statearr_36270_36337[(2)] = inst_36118);

(statearr_36270_36337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (11))){
var state_36209__$1 = state_36209;
var statearr_36271_36338 = state_36209__$1;
(statearr_36271_36338[(2)] = null);

(statearr_36271_36338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (9))){
var inst_36101 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36272_36339 = state_36209__$1;
(statearr_36272_36339[(2)] = inst_36101);

(statearr_36272_36339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (5))){
var inst_36071 = (state_36209[(9)]);
var inst_36072 = (state_36209[(10)]);
var inst_36074 = (inst_36072 < inst_36071);
var inst_36075 = inst_36074;
var state_36209__$1 = state_36209;
if(cljs.core.truth_(inst_36075)){
var statearr_36273_36340 = state_36209__$1;
(statearr_36273_36340[(1)] = (7));

} else {
var statearr_36274_36341 = state_36209__$1;
(statearr_36274_36341[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (14))){
var inst_36082 = (state_36209[(22)]);
var inst_36091 = cljs.core.first.call(null,inst_36082);
var inst_36092 = figwheel.client.file_reloading.eval_body.call(null,inst_36091,opts);
var inst_36093 = cljs.core.next.call(null,inst_36082);
var inst_36069 = inst_36093;
var inst_36070 = null;
var inst_36071 = (0);
var inst_36072 = (0);
var state_36209__$1 = (function (){var statearr_36275 = state_36209;
(statearr_36275[(32)] = inst_36092);

(statearr_36275[(7)] = inst_36070);

(statearr_36275[(8)] = inst_36069);

(statearr_36275[(9)] = inst_36071);

(statearr_36275[(10)] = inst_36072);

return statearr_36275;
})();
var statearr_36276_36342 = state_36209__$1;
(statearr_36276_36342[(2)] = null);

(statearr_36276_36342[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (45))){
var state_36209__$1 = state_36209;
var statearr_36277_36343 = state_36209__$1;
(statearr_36277_36343[(2)] = null);

(statearr_36277_36343[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (26))){
var inst_36122 = (state_36209[(19)]);
var inst_36126 = (state_36209[(23)]);
var inst_36130 = (state_36209[(24)]);
var inst_36125 = (state_36209[(25)]);
var inst_36128 = (state_36209[(26)]);
var inst_36145 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36147 = (function (){var all_files = inst_36122;
var res_SINGLEQUOTE_ = inst_36125;
var res = inst_36126;
var files_not_loaded = inst_36128;
var dependencies_that_loaded = inst_36130;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36126,inst_36130,inst_36125,inst_36128,inst_36145,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36146){
var map__36278 = p__36146;
var map__36278__$1 = ((((!((map__36278 == null)))?((((map__36278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36278.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36278):map__36278);
var namespace = cljs.core.get.call(null,map__36278__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36278__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36126,inst_36130,inst_36125,inst_36128,inst_36145,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36148 = cljs.core.map.call(null,inst_36147,inst_36126);
var inst_36149 = cljs.core.pr_str.call(null,inst_36148);
var inst_36150 = figwheel.client.utils.log.call(null,inst_36149);
var inst_36151 = (function (){var all_files = inst_36122;
var res_SINGLEQUOTE_ = inst_36125;
var res = inst_36126;
var files_not_loaded = inst_36128;
var dependencies_that_loaded = inst_36130;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36126,inst_36130,inst_36125,inst_36128,inst_36145,inst_36147,inst_36148,inst_36149,inst_36150,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36122,inst_36126,inst_36130,inst_36125,inst_36128,inst_36145,inst_36147,inst_36148,inst_36149,inst_36150,state_val_36210,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36152 = setTimeout(inst_36151,(10));
var state_36209__$1 = (function (){var statearr_36280 = state_36209;
(statearr_36280[(33)] = inst_36150);

(statearr_36280[(34)] = inst_36145);

return statearr_36280;
})();
var statearr_36281_36344 = state_36209__$1;
(statearr_36281_36344[(2)] = inst_36152);

(statearr_36281_36344[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (16))){
var state_36209__$1 = state_36209;
var statearr_36282_36345 = state_36209__$1;
(statearr_36282_36345[(2)] = reload_dependents);

(statearr_36282_36345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (38))){
var inst_36162 = (state_36209[(16)]);
var inst_36180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36162);
var state_36209__$1 = state_36209;
var statearr_36283_36346 = state_36209__$1;
(statearr_36283_36346[(2)] = inst_36180);

(statearr_36283_36346[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (30))){
var state_36209__$1 = state_36209;
var statearr_36284_36347 = state_36209__$1;
(statearr_36284_36347[(2)] = null);

(statearr_36284_36347[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (10))){
var inst_36082 = (state_36209[(22)]);
var inst_36084 = cljs.core.chunked_seq_QMARK_.call(null,inst_36082);
var state_36209__$1 = state_36209;
if(inst_36084){
var statearr_36285_36348 = state_36209__$1;
(statearr_36285_36348[(1)] = (13));

} else {
var statearr_36286_36349 = state_36209__$1;
(statearr_36286_36349[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (18))){
var inst_36116 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
if(cljs.core.truth_(inst_36116)){
var statearr_36287_36350 = state_36209__$1;
(statearr_36287_36350[(1)] = (19));

} else {
var statearr_36288_36351 = state_36209__$1;
(statearr_36288_36351[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (42))){
var state_36209__$1 = state_36209;
var statearr_36289_36352 = state_36209__$1;
(statearr_36289_36352[(2)] = null);

(statearr_36289_36352[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (37))){
var inst_36175 = (state_36209[(2)]);
var state_36209__$1 = state_36209;
var statearr_36290_36353 = state_36209__$1;
(statearr_36290_36353[(2)] = inst_36175);

(statearr_36290_36353[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36210 === (8))){
var inst_36069 = (state_36209[(8)]);
var inst_36082 = (state_36209[(22)]);
var inst_36082__$1 = cljs.core.seq.call(null,inst_36069);
var state_36209__$1 = (function (){var statearr_36291 = state_36209;
(statearr_36291[(22)] = inst_36082__$1);

return statearr_36291;
})();
if(inst_36082__$1){
var statearr_36292_36354 = state_36209__$1;
(statearr_36292_36354[(1)] = (10));

} else {
var statearr_36293_36355 = state_36209__$1;
(statearr_36293_36355[(1)] = (11));

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
});})(c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32494__auto__,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto____0 = (function (){
var statearr_36294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36294[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto__);

(statearr_36294[(1)] = (1));

return statearr_36294;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto____1 = (function (state_36209){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_36209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e36295){if((e36295 instanceof Object)){
var ex__32498__auto__ = e36295;
var statearr_36296_36356 = state_36209;
(statearr_36296_36356[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36357 = state_36209;
state_36209 = G__36357;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto__ = function(state_36209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto____1.call(this,state_36209);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32584__auto__ = (function (){var statearr_36297 = f__32583__auto__.call(null);
(statearr_36297[(6)] = c__32582__auto__);

return statearr_36297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__,map__36054,map__36054__$1,opts,before_jsload,on_jsload,reload_dependents,map__36055,map__36055__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32582__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36360,link){
var map__36361 = p__36360;
var map__36361__$1 = ((((!((map__36361 == null)))?((((map__36361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36361):map__36361);
var file = cljs.core.get.call(null,map__36361__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36361,map__36361__$1,file){
return (function (p1__36358_SHARP_,p2__36359_SHARP_){
if(cljs.core._EQ_.call(null,p1__36358_SHARP_,p2__36359_SHARP_)){
return p1__36358_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36361,map__36361__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36364){
var map__36365 = p__36364;
var map__36365__$1 = ((((!((map__36365 == null)))?((((map__36365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36365):map__36365);
var match_length = cljs.core.get.call(null,map__36365__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36365__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36363_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36363_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36367_SHARP_,p2__36368_SHARP_){
return cljs.core.assoc.call(null,p1__36367_SHARP_,cljs.core.get.call(null,p2__36368_SHARP_,key),p2__36368_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_36369 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36369);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36369);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36370,p__36371){
var map__36372 = p__36370;
var map__36372__$1 = ((((!((map__36372 == null)))?((((map__36372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36372):map__36372);
var on_cssload = cljs.core.get.call(null,map__36372__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36373 = p__36371;
var map__36373__$1 = ((((!((map__36373 == null)))?((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var files_msg = map__36373__$1;
var files = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1517200912175
