// Compiled by ClojureScript 1.9.908 {}
goog.provide('day8.re_frame.trace.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","root","settings/root",-1329120290),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"settings","settings",1556144875));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null),(function (settings,_){
return cljs.core.get.call(null,settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","root","app-db/root",-1721368731),(function (db,_){
return cljs.core.get.call(null,db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null),(function (app_db_settings,_){
return cljs.core.get.call(null,app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null),(function (expansions,p__44034){
var vec__44035 = p__44034;
var _ = cljs.core.nth.call(null,vec__44035,(0),null);
var path = cljs.core.nth.call(null,vec__44035,(1),null);
return cljs.core.contains_QMARK_.call(null,expansions,path);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001),(function (db,_){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517),(function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
}));
mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null),(function (snapshot,_){
return cljs.core.contains_QMARK_.call(null,snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
}));

//# sourceMappingURL=subs.js.map?rel=1517200930577
