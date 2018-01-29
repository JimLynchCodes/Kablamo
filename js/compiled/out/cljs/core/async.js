// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44744 = arguments.length;
switch (G__44744) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44745 = (function (f,blockable,meta44746){
this.f = f;
this.blockable = blockable;
this.meta44746 = meta44746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44747,meta44746__$1){
var self__ = this;
var _44747__$1 = this;
return (new cljs.core.async.t_cljs$core$async44745(self__.f,self__.blockable,meta44746__$1));
});

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44747){
var self__ = this;
var _44747__$1 = this;
return self__.meta44746;
});

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44746","meta44746",-523276260,null)], null);
});

cljs.core.async.t_cljs$core$async44745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44745";

cljs.core.async.t_cljs$core$async44745.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async44745");
});

cljs.core.async.__GT_t_cljs$core$async44745 = (function cljs$core$async$__GT_t_cljs$core$async44745(f__$1,blockable__$1,meta44746){
return (new cljs.core.async.t_cljs$core$async44745(f__$1,blockable__$1,meta44746));
});

}

return (new cljs.core.async.t_cljs$core$async44745(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44751 = arguments.length;
switch (G__44751) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44754 = arguments.length;
switch (G__44754) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44757 = arguments.length;
switch (G__44757) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44759 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44759);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44759,ret){
return (function (){
return fn1.call(null,val_44759);
});})(val_44759,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44761 = arguments.length;
switch (G__44761) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29231__auto___44763 = n;
var x_44764 = (0);
while(true){
if((x_44764 < n__29231__auto___44763)){
(a[x_44764] = (0));

var G__44765 = (x_44764 + (1));
x_44764 = G__44765;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44766 = (i + (1));
i = G__44766;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44767 = (function (flag,meta44768){
this.flag = flag;
this.meta44768 = meta44768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44769,meta44768__$1){
var self__ = this;
var _44769__$1 = this;
return (new cljs.core.async.t_cljs$core$async44767(self__.flag,meta44768__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44769){
var self__ = this;
var _44769__$1 = this;
return self__.meta44768;
});})(flag))
;

cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44767.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44768","meta44768",1816347239,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44767";

cljs.core.async.t_cljs$core$async44767.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async44767");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44767 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44767(flag__$1,meta44768){
return (new cljs.core.async.t_cljs$core$async44767(flag__$1,meta44768));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44767(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44770 = (function (flag,cb,meta44771){
this.flag = flag;
this.cb = cb;
this.meta44771 = meta44771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44772,meta44771__$1){
var self__ = this;
var _44772__$1 = this;
return (new cljs.core.async.t_cljs$core$async44770(self__.flag,self__.cb,meta44771__$1));
});

cljs.core.async.t_cljs$core$async44770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44772){
var self__ = this;
var _44772__$1 = this;
return self__.meta44771;
});

cljs.core.async.t_cljs$core$async44770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44771","meta44771",-805686498,null)], null);
});

cljs.core.async.t_cljs$core$async44770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44770";

cljs.core.async.t_cljs$core$async44770.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async44770");
});

cljs.core.async.__GT_t_cljs$core$async44770 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44770(flag__$1,cb__$1,meta44771){
return (new cljs.core.async.t_cljs$core$async44770(flag__$1,cb__$1,meta44771));
});

}

return (new cljs.core.async.t_cljs$core$async44770(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44773_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44773_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44774_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44774_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28286__auto__ = wport;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44775 = (i + (1));
i = G__44775;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28286__auto__ = ret;
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28274__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28274__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28274__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___44781 = arguments.length;
var i__29456__auto___44782 = (0);
while(true){
if((i__29456__auto___44782 < len__29455__auto___44781)){
args__29462__auto__.push((arguments[i__29456__auto___44782]));

var G__44783 = (i__29456__auto___44782 + (1));
i__29456__auto___44782 = G__44783;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((1) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29463__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44778){
var map__44779 = p__44778;
var map__44779__$1 = ((((!((map__44779 == null)))?((((map__44779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44779):map__44779);
var opts = map__44779__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44776){
var G__44777 = cljs.core.first.call(null,seq44776);
var seq44776__$1 = cljs.core.next.call(null,seq44776);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44777,seq44776__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44785 = arguments.length;
switch (G__44785) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32582__auto___44831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___44831){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___44831){
return (function (state_44809){
var state_val_44810 = (state_44809[(1)]);
if((state_val_44810 === (7))){
var inst_44805 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
var statearr_44811_44832 = state_44809__$1;
(statearr_44811_44832[(2)] = inst_44805);

(statearr_44811_44832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (1))){
var state_44809__$1 = state_44809;
var statearr_44812_44833 = state_44809__$1;
(statearr_44812_44833[(2)] = null);

(statearr_44812_44833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (4))){
var inst_44788 = (state_44809[(7)]);
var inst_44788__$1 = (state_44809[(2)]);
var inst_44789 = (inst_44788__$1 == null);
var state_44809__$1 = (function (){var statearr_44813 = state_44809;
(statearr_44813[(7)] = inst_44788__$1);

return statearr_44813;
})();
if(cljs.core.truth_(inst_44789)){
var statearr_44814_44834 = state_44809__$1;
(statearr_44814_44834[(1)] = (5));

} else {
var statearr_44815_44835 = state_44809__$1;
(statearr_44815_44835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (13))){
var state_44809__$1 = state_44809;
var statearr_44816_44836 = state_44809__$1;
(statearr_44816_44836[(2)] = null);

(statearr_44816_44836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (6))){
var inst_44788 = (state_44809[(7)]);
var state_44809__$1 = state_44809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44809__$1,(11),to,inst_44788);
} else {
if((state_val_44810 === (3))){
var inst_44807 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44809__$1,inst_44807);
} else {
if((state_val_44810 === (12))){
var state_44809__$1 = state_44809;
var statearr_44817_44837 = state_44809__$1;
(statearr_44817_44837[(2)] = null);

(statearr_44817_44837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (2))){
var state_44809__$1 = state_44809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44809__$1,(4),from);
} else {
if((state_val_44810 === (11))){
var inst_44798 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
if(cljs.core.truth_(inst_44798)){
var statearr_44818_44838 = state_44809__$1;
(statearr_44818_44838[(1)] = (12));

} else {
var statearr_44819_44839 = state_44809__$1;
(statearr_44819_44839[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (9))){
var state_44809__$1 = state_44809;
var statearr_44820_44840 = state_44809__$1;
(statearr_44820_44840[(2)] = null);

(statearr_44820_44840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (5))){
var state_44809__$1 = state_44809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44821_44841 = state_44809__$1;
(statearr_44821_44841[(1)] = (8));

} else {
var statearr_44822_44842 = state_44809__$1;
(statearr_44822_44842[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (14))){
var inst_44803 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
var statearr_44823_44843 = state_44809__$1;
(statearr_44823_44843[(2)] = inst_44803);

(statearr_44823_44843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (10))){
var inst_44795 = (state_44809[(2)]);
var state_44809__$1 = state_44809;
var statearr_44824_44844 = state_44809__$1;
(statearr_44824_44844[(2)] = inst_44795);

(statearr_44824_44844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44810 === (8))){
var inst_44792 = cljs.core.async.close_BANG_.call(null,to);
var state_44809__$1 = state_44809;
var statearr_44825_44845 = state_44809__$1;
(statearr_44825_44845[(2)] = inst_44792);

(statearr_44825_44845[(1)] = (10));


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
});})(c__32582__auto___44831))
;
return ((function (switch__32494__auto__,c__32582__auto___44831){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_44826 = [null,null,null,null,null,null,null,null];
(statearr_44826[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_44826[(1)] = (1));

return statearr_44826;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_44809){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_44809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e44827){if((e44827 instanceof Object)){
var ex__32498__auto__ = e44827;
var statearr_44828_44846 = state_44809;
(statearr_44828_44846[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44847 = state_44809;
state_44809 = G__44847;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_44809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_44809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___44831))
})();
var state__32584__auto__ = (function (){var statearr_44829 = f__32583__auto__.call(null);
(statearr_44829[(6)] = c__32582__auto___44831);

return statearr_44829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___44831))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44848){
var vec__44849 = p__44848;
var v = cljs.core.nth.call(null,vec__44849,(0),null);
var p = cljs.core.nth.call(null,vec__44849,(1),null);
var job = vec__44849;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32582__auto___45020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___45020,res,vec__44849,v,p,job,jobs,results){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___45020,res,vec__44849,v,p,job,jobs,results){
return (function (state_44856){
var state_val_44857 = (state_44856[(1)]);
if((state_val_44857 === (1))){
var state_44856__$1 = state_44856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44856__$1,(2),res,v);
} else {
if((state_val_44857 === (2))){
var inst_44853 = (state_44856[(2)]);
var inst_44854 = cljs.core.async.close_BANG_.call(null,res);
var state_44856__$1 = (function (){var statearr_44858 = state_44856;
(statearr_44858[(7)] = inst_44853);

return statearr_44858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44856__$1,inst_44854);
} else {
return null;
}
}
});})(c__32582__auto___45020,res,vec__44849,v,p,job,jobs,results))
;
return ((function (switch__32494__auto__,c__32582__auto___45020,res,vec__44849,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0 = (function (){
var statearr_44859 = [null,null,null,null,null,null,null,null];
(statearr_44859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__);

(statearr_44859[(1)] = (1));

return statearr_44859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1 = (function (state_44856){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_44856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e44860){if((e44860 instanceof Object)){
var ex__32498__auto__ = e44860;
var statearr_44861_45021 = state_44856;
(statearr_44861_45021[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45022 = state_44856;
state_44856 = G__45022;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = function(state_44856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1.call(this,state_44856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___45020,res,vec__44849,v,p,job,jobs,results))
})();
var state__32584__auto__ = (function (){var statearr_44862 = f__32583__auto__.call(null);
(statearr_44862[(6)] = c__32582__auto___45020);

return statearr_44862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___45020,res,vec__44849,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44863){
var vec__44864 = p__44863;
var v = cljs.core.nth.call(null,vec__44864,(0),null);
var p = cljs.core.nth.call(null,vec__44864,(1),null);
var job = vec__44864;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29231__auto___45023 = n;
var __45024 = (0);
while(true){
if((__45024 < n__29231__auto___45023)){
var G__44867_45025 = type;
var G__44867_45026__$1 = (((G__44867_45025 instanceof cljs.core.Keyword))?G__44867_45025.fqn:null);
switch (G__44867_45026__$1) {
case "compute":
var c__32582__auto___45028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45024,c__32582__auto___45028,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (__45024,c__32582__auto___45028,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async){
return (function (state_44880){
var state_val_44881 = (state_44880[(1)]);
if((state_val_44881 === (1))){
var state_44880__$1 = state_44880;
var statearr_44882_45029 = state_44880__$1;
(statearr_44882_45029[(2)] = null);

(statearr_44882_45029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44881 === (2))){
var state_44880__$1 = state_44880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44880__$1,(4),jobs);
} else {
if((state_val_44881 === (3))){
var inst_44878 = (state_44880[(2)]);
var state_44880__$1 = state_44880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44880__$1,inst_44878);
} else {
if((state_val_44881 === (4))){
var inst_44870 = (state_44880[(2)]);
var inst_44871 = process.call(null,inst_44870);
var state_44880__$1 = state_44880;
if(cljs.core.truth_(inst_44871)){
var statearr_44883_45030 = state_44880__$1;
(statearr_44883_45030[(1)] = (5));

} else {
var statearr_44884_45031 = state_44880__$1;
(statearr_44884_45031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44881 === (5))){
var state_44880__$1 = state_44880;
var statearr_44885_45032 = state_44880__$1;
(statearr_44885_45032[(2)] = null);

(statearr_44885_45032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44881 === (6))){
var state_44880__$1 = state_44880;
var statearr_44886_45033 = state_44880__$1;
(statearr_44886_45033[(2)] = null);

(statearr_44886_45033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44881 === (7))){
var inst_44876 = (state_44880[(2)]);
var state_44880__$1 = state_44880;
var statearr_44887_45034 = state_44880__$1;
(statearr_44887_45034[(2)] = inst_44876);

(statearr_44887_45034[(1)] = (3));


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
});})(__45024,c__32582__auto___45028,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async))
;
return ((function (__45024,switch__32494__auto__,c__32582__auto___45028,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0 = (function (){
var statearr_44888 = [null,null,null,null,null,null,null];
(statearr_44888[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__);

(statearr_44888[(1)] = (1));

return statearr_44888;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1 = (function (state_44880){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_44880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e44889){if((e44889 instanceof Object)){
var ex__32498__auto__ = e44889;
var statearr_44890_45035 = state_44880;
(statearr_44890_45035[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45036 = state_44880;
state_44880 = G__45036;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = function(state_44880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1.call(this,state_44880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__;
})()
;})(__45024,switch__32494__auto__,c__32582__auto___45028,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async))
})();
var state__32584__auto__ = (function (){var statearr_44891 = f__32583__auto__.call(null);
(statearr_44891[(6)] = c__32582__auto___45028);

return statearr_44891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(__45024,c__32582__auto___45028,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async))
);


break;
case "async":
var c__32582__auto___45037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__45024,c__32582__auto___45037,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (__45024,c__32582__auto___45037,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async){
return (function (state_44904){
var state_val_44905 = (state_44904[(1)]);
if((state_val_44905 === (1))){
var state_44904__$1 = state_44904;
var statearr_44906_45038 = state_44904__$1;
(statearr_44906_45038[(2)] = null);

(statearr_44906_45038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44905 === (2))){
var state_44904__$1 = state_44904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44904__$1,(4),jobs);
} else {
if((state_val_44905 === (3))){
var inst_44902 = (state_44904[(2)]);
var state_44904__$1 = state_44904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44904__$1,inst_44902);
} else {
if((state_val_44905 === (4))){
var inst_44894 = (state_44904[(2)]);
var inst_44895 = async.call(null,inst_44894);
var state_44904__$1 = state_44904;
if(cljs.core.truth_(inst_44895)){
var statearr_44907_45039 = state_44904__$1;
(statearr_44907_45039[(1)] = (5));

} else {
var statearr_44908_45040 = state_44904__$1;
(statearr_44908_45040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44905 === (5))){
var state_44904__$1 = state_44904;
var statearr_44909_45041 = state_44904__$1;
(statearr_44909_45041[(2)] = null);

(statearr_44909_45041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44905 === (6))){
var state_44904__$1 = state_44904;
var statearr_44910_45042 = state_44904__$1;
(statearr_44910_45042[(2)] = null);

(statearr_44910_45042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44905 === (7))){
var inst_44900 = (state_44904[(2)]);
var state_44904__$1 = state_44904;
var statearr_44911_45043 = state_44904__$1;
(statearr_44911_45043[(2)] = inst_44900);

(statearr_44911_45043[(1)] = (3));


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
});})(__45024,c__32582__auto___45037,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async))
;
return ((function (__45024,switch__32494__auto__,c__32582__auto___45037,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0 = (function (){
var statearr_44912 = [null,null,null,null,null,null,null];
(statearr_44912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__);

(statearr_44912[(1)] = (1));

return statearr_44912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1 = (function (state_44904){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_44904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e44913){if((e44913 instanceof Object)){
var ex__32498__auto__ = e44913;
var statearr_44914_45044 = state_44904;
(statearr_44914_45044[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45045 = state_44904;
state_44904 = G__45045;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = function(state_44904){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1.call(this,state_44904);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__;
})()
;})(__45024,switch__32494__auto__,c__32582__auto___45037,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async))
})();
var state__32584__auto__ = (function (){var statearr_44915 = f__32583__auto__.call(null);
(statearr_44915[(6)] = c__32582__auto___45037);

return statearr_44915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(__45024,c__32582__auto___45037,G__44867_45025,G__44867_45026__$1,n__29231__auto___45023,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44867_45026__$1)].join('')));

}

var G__45046 = (__45024 + (1));
__45024 = G__45046;
continue;
} else {
}
break;
}

var c__32582__auto___45047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___45047,jobs,results,process,async){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___45047,jobs,results,process,async){
return (function (state_44937){
var state_val_44938 = (state_44937[(1)]);
if((state_val_44938 === (1))){
var state_44937__$1 = state_44937;
var statearr_44939_45048 = state_44937__$1;
(statearr_44939_45048[(2)] = null);

(statearr_44939_45048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (2))){
var state_44937__$1 = state_44937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44937__$1,(4),from);
} else {
if((state_val_44938 === (3))){
var inst_44935 = (state_44937[(2)]);
var state_44937__$1 = state_44937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44937__$1,inst_44935);
} else {
if((state_val_44938 === (4))){
var inst_44918 = (state_44937[(7)]);
var inst_44918__$1 = (state_44937[(2)]);
var inst_44919 = (inst_44918__$1 == null);
var state_44937__$1 = (function (){var statearr_44940 = state_44937;
(statearr_44940[(7)] = inst_44918__$1);

return statearr_44940;
})();
if(cljs.core.truth_(inst_44919)){
var statearr_44941_45049 = state_44937__$1;
(statearr_44941_45049[(1)] = (5));

} else {
var statearr_44942_45050 = state_44937__$1;
(statearr_44942_45050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (5))){
var inst_44921 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44937__$1 = state_44937;
var statearr_44943_45051 = state_44937__$1;
(statearr_44943_45051[(2)] = inst_44921);

(statearr_44943_45051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (6))){
var inst_44923 = (state_44937[(8)]);
var inst_44918 = (state_44937[(7)]);
var inst_44923__$1 = cljs.core.async.chan.call(null,(1));
var inst_44924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44925 = [inst_44918,inst_44923__$1];
var inst_44926 = (new cljs.core.PersistentVector(null,2,(5),inst_44924,inst_44925,null));
var state_44937__$1 = (function (){var statearr_44944 = state_44937;
(statearr_44944[(8)] = inst_44923__$1);

return statearr_44944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44937__$1,(8),jobs,inst_44926);
} else {
if((state_val_44938 === (7))){
var inst_44933 = (state_44937[(2)]);
var state_44937__$1 = state_44937;
var statearr_44945_45052 = state_44937__$1;
(statearr_44945_45052[(2)] = inst_44933);

(statearr_44945_45052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44938 === (8))){
var inst_44923 = (state_44937[(8)]);
var inst_44928 = (state_44937[(2)]);
var state_44937__$1 = (function (){var statearr_44946 = state_44937;
(statearr_44946[(9)] = inst_44928);

return statearr_44946;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44937__$1,(9),results,inst_44923);
} else {
if((state_val_44938 === (9))){
var inst_44930 = (state_44937[(2)]);
var state_44937__$1 = (function (){var statearr_44947 = state_44937;
(statearr_44947[(10)] = inst_44930);

return statearr_44947;
})();
var statearr_44948_45053 = state_44937__$1;
(statearr_44948_45053[(2)] = null);

(statearr_44948_45053[(1)] = (2));


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
});})(c__32582__auto___45047,jobs,results,process,async))
;
return ((function (switch__32494__auto__,c__32582__auto___45047,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0 = (function (){
var statearr_44949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__);

(statearr_44949[(1)] = (1));

return statearr_44949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1 = (function (state_44937){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_44937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e44950){if((e44950 instanceof Object)){
var ex__32498__auto__ = e44950;
var statearr_44951_45054 = state_44937;
(statearr_44951_45054[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45055 = state_44937;
state_44937 = G__45055;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = function(state_44937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1.call(this,state_44937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___45047,jobs,results,process,async))
})();
var state__32584__auto__ = (function (){var statearr_44952 = f__32583__auto__.call(null);
(statearr_44952[(6)] = c__32582__auto___45047);

return statearr_44952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___45047,jobs,results,process,async))
);


var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__,jobs,results,process,async){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__,jobs,results,process,async){
return (function (state_44990){
var state_val_44991 = (state_44990[(1)]);
if((state_val_44991 === (7))){
var inst_44986 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
var statearr_44992_45056 = state_44990__$1;
(statearr_44992_45056[(2)] = inst_44986);

(statearr_44992_45056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (20))){
var state_44990__$1 = state_44990;
var statearr_44993_45057 = state_44990__$1;
(statearr_44993_45057[(2)] = null);

(statearr_44993_45057[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (1))){
var state_44990__$1 = state_44990;
var statearr_44994_45058 = state_44990__$1;
(statearr_44994_45058[(2)] = null);

(statearr_44994_45058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (4))){
var inst_44955 = (state_44990[(7)]);
var inst_44955__$1 = (state_44990[(2)]);
var inst_44956 = (inst_44955__$1 == null);
var state_44990__$1 = (function (){var statearr_44995 = state_44990;
(statearr_44995[(7)] = inst_44955__$1);

return statearr_44995;
})();
if(cljs.core.truth_(inst_44956)){
var statearr_44996_45059 = state_44990__$1;
(statearr_44996_45059[(1)] = (5));

} else {
var statearr_44997_45060 = state_44990__$1;
(statearr_44997_45060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (15))){
var inst_44968 = (state_44990[(8)]);
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44990__$1,(18),to,inst_44968);
} else {
if((state_val_44991 === (21))){
var inst_44981 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
var statearr_44998_45061 = state_44990__$1;
(statearr_44998_45061[(2)] = inst_44981);

(statearr_44998_45061[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (13))){
var inst_44983 = (state_44990[(2)]);
var state_44990__$1 = (function (){var statearr_44999 = state_44990;
(statearr_44999[(9)] = inst_44983);

return statearr_44999;
})();
var statearr_45000_45062 = state_44990__$1;
(statearr_45000_45062[(2)] = null);

(statearr_45000_45062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (6))){
var inst_44955 = (state_44990[(7)]);
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44990__$1,(11),inst_44955);
} else {
if((state_val_44991 === (17))){
var inst_44976 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
if(cljs.core.truth_(inst_44976)){
var statearr_45001_45063 = state_44990__$1;
(statearr_45001_45063[(1)] = (19));

} else {
var statearr_45002_45064 = state_44990__$1;
(statearr_45002_45064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (3))){
var inst_44988 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44990__$1,inst_44988);
} else {
if((state_val_44991 === (12))){
var inst_44965 = (state_44990[(10)]);
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44990__$1,(14),inst_44965);
} else {
if((state_val_44991 === (2))){
var state_44990__$1 = state_44990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44990__$1,(4),results);
} else {
if((state_val_44991 === (19))){
var state_44990__$1 = state_44990;
var statearr_45003_45065 = state_44990__$1;
(statearr_45003_45065[(2)] = null);

(statearr_45003_45065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (11))){
var inst_44965 = (state_44990[(2)]);
var state_44990__$1 = (function (){var statearr_45004 = state_44990;
(statearr_45004[(10)] = inst_44965);

return statearr_45004;
})();
var statearr_45005_45066 = state_44990__$1;
(statearr_45005_45066[(2)] = null);

(statearr_45005_45066[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (9))){
var state_44990__$1 = state_44990;
var statearr_45006_45067 = state_44990__$1;
(statearr_45006_45067[(2)] = null);

(statearr_45006_45067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (5))){
var state_44990__$1 = state_44990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45007_45068 = state_44990__$1;
(statearr_45007_45068[(1)] = (8));

} else {
var statearr_45008_45069 = state_44990__$1;
(statearr_45008_45069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (14))){
var inst_44968 = (state_44990[(8)]);
var inst_44970 = (state_44990[(11)]);
var inst_44968__$1 = (state_44990[(2)]);
var inst_44969 = (inst_44968__$1 == null);
var inst_44970__$1 = cljs.core.not.call(null,inst_44969);
var state_44990__$1 = (function (){var statearr_45009 = state_44990;
(statearr_45009[(8)] = inst_44968__$1);

(statearr_45009[(11)] = inst_44970__$1);

return statearr_45009;
})();
if(inst_44970__$1){
var statearr_45010_45070 = state_44990__$1;
(statearr_45010_45070[(1)] = (15));

} else {
var statearr_45011_45071 = state_44990__$1;
(statearr_45011_45071[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (16))){
var inst_44970 = (state_44990[(11)]);
var state_44990__$1 = state_44990;
var statearr_45012_45072 = state_44990__$1;
(statearr_45012_45072[(2)] = inst_44970);

(statearr_45012_45072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (10))){
var inst_44962 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
var statearr_45013_45073 = state_44990__$1;
(statearr_45013_45073[(2)] = inst_44962);

(statearr_45013_45073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (18))){
var inst_44973 = (state_44990[(2)]);
var state_44990__$1 = state_44990;
var statearr_45014_45074 = state_44990__$1;
(statearr_45014_45074[(2)] = inst_44973);

(statearr_45014_45074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (8))){
var inst_44959 = cljs.core.async.close_BANG_.call(null,to);
var state_44990__$1 = state_44990;
var statearr_45015_45075 = state_44990__$1;
(statearr_45015_45075[(2)] = inst_44959);

(statearr_45015_45075[(1)] = (10));


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
});})(c__32582__auto__,jobs,results,process,async))
;
return ((function (switch__32494__auto__,c__32582__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0 = (function (){
var statearr_45016 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45016[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__);

(statearr_45016[(1)] = (1));

return statearr_45016;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1 = (function (state_44990){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_44990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45017){if((e45017 instanceof Object)){
var ex__32498__auto__ = e45017;
var statearr_45018_45076 = state_44990;
(statearr_45018_45076[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45077 = state_44990;
state_44990 = G__45077;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__ = function(state_44990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1.call(this,state_44990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32495__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__,jobs,results,process,async))
})();
var state__32584__auto__ = (function (){var statearr_45019 = f__32583__auto__.call(null);
(statearr_45019[(6)] = c__32582__auto__);

return statearr_45019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__,jobs,results,process,async))
);

return c__32582__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45079 = arguments.length;
switch (G__45079) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45082 = arguments.length;
switch (G__45082) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45085 = arguments.length;
switch (G__45085) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32582__auto___45134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___45134,tc,fc){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___45134,tc,fc){
return (function (state_45111){
var state_val_45112 = (state_45111[(1)]);
if((state_val_45112 === (7))){
var inst_45107 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
var statearr_45113_45135 = state_45111__$1;
(statearr_45113_45135[(2)] = inst_45107);

(statearr_45113_45135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (1))){
var state_45111__$1 = state_45111;
var statearr_45114_45136 = state_45111__$1;
(statearr_45114_45136[(2)] = null);

(statearr_45114_45136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (4))){
var inst_45088 = (state_45111[(7)]);
var inst_45088__$1 = (state_45111[(2)]);
var inst_45089 = (inst_45088__$1 == null);
var state_45111__$1 = (function (){var statearr_45115 = state_45111;
(statearr_45115[(7)] = inst_45088__$1);

return statearr_45115;
})();
if(cljs.core.truth_(inst_45089)){
var statearr_45116_45137 = state_45111__$1;
(statearr_45116_45137[(1)] = (5));

} else {
var statearr_45117_45138 = state_45111__$1;
(statearr_45117_45138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (13))){
var state_45111__$1 = state_45111;
var statearr_45118_45139 = state_45111__$1;
(statearr_45118_45139[(2)] = null);

(statearr_45118_45139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (6))){
var inst_45088 = (state_45111[(7)]);
var inst_45094 = p.call(null,inst_45088);
var state_45111__$1 = state_45111;
if(cljs.core.truth_(inst_45094)){
var statearr_45119_45140 = state_45111__$1;
(statearr_45119_45140[(1)] = (9));

} else {
var statearr_45120_45141 = state_45111__$1;
(statearr_45120_45141[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (3))){
var inst_45109 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45111__$1,inst_45109);
} else {
if((state_val_45112 === (12))){
var state_45111__$1 = state_45111;
var statearr_45121_45142 = state_45111__$1;
(statearr_45121_45142[(2)] = null);

(statearr_45121_45142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (2))){
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45111__$1,(4),ch);
} else {
if((state_val_45112 === (11))){
var inst_45088 = (state_45111[(7)]);
var inst_45098 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45111__$1,(8),inst_45098,inst_45088);
} else {
if((state_val_45112 === (9))){
var state_45111__$1 = state_45111;
var statearr_45122_45143 = state_45111__$1;
(statearr_45122_45143[(2)] = tc);

(statearr_45122_45143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (5))){
var inst_45091 = cljs.core.async.close_BANG_.call(null,tc);
var inst_45092 = cljs.core.async.close_BANG_.call(null,fc);
var state_45111__$1 = (function (){var statearr_45123 = state_45111;
(statearr_45123[(8)] = inst_45091);

return statearr_45123;
})();
var statearr_45124_45144 = state_45111__$1;
(statearr_45124_45144[(2)] = inst_45092);

(statearr_45124_45144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (14))){
var inst_45105 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
var statearr_45125_45145 = state_45111__$1;
(statearr_45125_45145[(2)] = inst_45105);

(statearr_45125_45145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (10))){
var state_45111__$1 = state_45111;
var statearr_45126_45146 = state_45111__$1;
(statearr_45126_45146[(2)] = fc);

(statearr_45126_45146[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (8))){
var inst_45100 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
if(cljs.core.truth_(inst_45100)){
var statearr_45127_45147 = state_45111__$1;
(statearr_45127_45147[(1)] = (12));

} else {
var statearr_45128_45148 = state_45111__$1;
(statearr_45128_45148[(1)] = (13));

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
});})(c__32582__auto___45134,tc,fc))
;
return ((function (switch__32494__auto__,c__32582__auto___45134,tc,fc){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_45129 = [null,null,null,null,null,null,null,null,null];
(statearr_45129[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_45129[(1)] = (1));

return statearr_45129;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_45111){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45130){if((e45130 instanceof Object)){
var ex__32498__auto__ = e45130;
var statearr_45131_45149 = state_45111;
(statearr_45131_45149[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45150 = state_45111;
state_45111 = G__45150;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_45111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_45111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___45134,tc,fc))
})();
var state__32584__auto__ = (function (){var statearr_45132 = f__32583__auto__.call(null);
(statearr_45132[(6)] = c__32582__auto___45134);

return statearr_45132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___45134,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__){
return (function (state_45171){
var state_val_45172 = (state_45171[(1)]);
if((state_val_45172 === (7))){
var inst_45167 = (state_45171[(2)]);
var state_45171__$1 = state_45171;
var statearr_45173_45191 = state_45171__$1;
(statearr_45173_45191[(2)] = inst_45167);

(statearr_45173_45191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45172 === (1))){
var inst_45151 = init;
var state_45171__$1 = (function (){var statearr_45174 = state_45171;
(statearr_45174[(7)] = inst_45151);

return statearr_45174;
})();
var statearr_45175_45192 = state_45171__$1;
(statearr_45175_45192[(2)] = null);

(statearr_45175_45192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45172 === (4))){
var inst_45154 = (state_45171[(8)]);
var inst_45154__$1 = (state_45171[(2)]);
var inst_45155 = (inst_45154__$1 == null);
var state_45171__$1 = (function (){var statearr_45176 = state_45171;
(statearr_45176[(8)] = inst_45154__$1);

return statearr_45176;
})();
if(cljs.core.truth_(inst_45155)){
var statearr_45177_45193 = state_45171__$1;
(statearr_45177_45193[(1)] = (5));

} else {
var statearr_45178_45194 = state_45171__$1;
(statearr_45178_45194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45172 === (6))){
var inst_45158 = (state_45171[(9)]);
var inst_45151 = (state_45171[(7)]);
var inst_45154 = (state_45171[(8)]);
var inst_45158__$1 = f.call(null,inst_45151,inst_45154);
var inst_45159 = cljs.core.reduced_QMARK_.call(null,inst_45158__$1);
var state_45171__$1 = (function (){var statearr_45179 = state_45171;
(statearr_45179[(9)] = inst_45158__$1);

return statearr_45179;
})();
if(inst_45159){
var statearr_45180_45195 = state_45171__$1;
(statearr_45180_45195[(1)] = (8));

} else {
var statearr_45181_45196 = state_45171__$1;
(statearr_45181_45196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45172 === (3))){
var inst_45169 = (state_45171[(2)]);
var state_45171__$1 = state_45171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45171__$1,inst_45169);
} else {
if((state_val_45172 === (2))){
var state_45171__$1 = state_45171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45171__$1,(4),ch);
} else {
if((state_val_45172 === (9))){
var inst_45158 = (state_45171[(9)]);
var inst_45151 = inst_45158;
var state_45171__$1 = (function (){var statearr_45182 = state_45171;
(statearr_45182[(7)] = inst_45151);

return statearr_45182;
})();
var statearr_45183_45197 = state_45171__$1;
(statearr_45183_45197[(2)] = null);

(statearr_45183_45197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45172 === (5))){
var inst_45151 = (state_45171[(7)]);
var state_45171__$1 = state_45171;
var statearr_45184_45198 = state_45171__$1;
(statearr_45184_45198[(2)] = inst_45151);

(statearr_45184_45198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45172 === (10))){
var inst_45165 = (state_45171[(2)]);
var state_45171__$1 = state_45171;
var statearr_45185_45199 = state_45171__$1;
(statearr_45185_45199[(2)] = inst_45165);

(statearr_45185_45199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45172 === (8))){
var inst_45158 = (state_45171[(9)]);
var inst_45161 = cljs.core.deref.call(null,inst_45158);
var state_45171__$1 = state_45171;
var statearr_45186_45200 = state_45171__$1;
(statearr_45186_45200[(2)] = inst_45161);

(statearr_45186_45200[(1)] = (10));


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
});})(c__32582__auto__))
;
return ((function (switch__32494__auto__,c__32582__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32495__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32495__auto____0 = (function (){
var statearr_45187 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45187[(0)] = cljs$core$async$reduce_$_state_machine__32495__auto__);

(statearr_45187[(1)] = (1));

return statearr_45187;
});
var cljs$core$async$reduce_$_state_machine__32495__auto____1 = (function (state_45171){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45188){if((e45188 instanceof Object)){
var ex__32498__auto__ = e45188;
var statearr_45189_45201 = state_45171;
(statearr_45189_45201[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45202 = state_45171;
state_45171 = G__45202;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32495__auto__ = function(state_45171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32495__auto____1.call(this,state_45171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32495__auto____0;
cljs$core$async$reduce_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32495__auto____1;
return cljs$core$async$reduce_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__))
})();
var state__32584__auto__ = (function (){var statearr_45190 = f__32583__auto__.call(null);
(statearr_45190[(6)] = c__32582__auto__);

return statearr_45190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__))
);

return c__32582__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__,f__$1){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__,f__$1){
return (function (state_45208){
var state_val_45209 = (state_45208[(1)]);
if((state_val_45209 === (1))){
var inst_45203 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45208__$1 = state_45208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45208__$1,(2),inst_45203);
} else {
if((state_val_45209 === (2))){
var inst_45205 = (state_45208[(2)]);
var inst_45206 = f__$1.call(null,inst_45205);
var state_45208__$1 = state_45208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45208__$1,inst_45206);
} else {
return null;
}
}
});})(c__32582__auto__,f__$1))
;
return ((function (switch__32494__auto__,c__32582__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32495__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32495__auto____0 = (function (){
var statearr_45210 = [null,null,null,null,null,null,null];
(statearr_45210[(0)] = cljs$core$async$transduce_$_state_machine__32495__auto__);

(statearr_45210[(1)] = (1));

return statearr_45210;
});
var cljs$core$async$transduce_$_state_machine__32495__auto____1 = (function (state_45208){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45211){if((e45211 instanceof Object)){
var ex__32498__auto__ = e45211;
var statearr_45212_45214 = state_45208;
(statearr_45212_45214[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45215 = state_45208;
state_45208 = G__45215;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32495__auto__ = function(state_45208){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32495__auto____1.call(this,state_45208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32495__auto____0;
cljs$core$async$transduce_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32495__auto____1;
return cljs$core$async$transduce_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__,f__$1))
})();
var state__32584__auto__ = (function (){var statearr_45213 = f__32583__auto__.call(null);
(statearr_45213[(6)] = c__32582__auto__);

return statearr_45213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__,f__$1))
);

return c__32582__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45217 = arguments.length;
switch (G__45217) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__){
return (function (state_45242){
var state_val_45243 = (state_45242[(1)]);
if((state_val_45243 === (7))){
var inst_45224 = (state_45242[(2)]);
var state_45242__$1 = state_45242;
var statearr_45244_45265 = state_45242__$1;
(statearr_45244_45265[(2)] = inst_45224);

(statearr_45244_45265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (1))){
var inst_45218 = cljs.core.seq.call(null,coll);
var inst_45219 = inst_45218;
var state_45242__$1 = (function (){var statearr_45245 = state_45242;
(statearr_45245[(7)] = inst_45219);

return statearr_45245;
})();
var statearr_45246_45266 = state_45242__$1;
(statearr_45246_45266[(2)] = null);

(statearr_45246_45266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (4))){
var inst_45219 = (state_45242[(7)]);
var inst_45222 = cljs.core.first.call(null,inst_45219);
var state_45242__$1 = state_45242;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45242__$1,(7),ch,inst_45222);
} else {
if((state_val_45243 === (13))){
var inst_45236 = (state_45242[(2)]);
var state_45242__$1 = state_45242;
var statearr_45247_45267 = state_45242__$1;
(statearr_45247_45267[(2)] = inst_45236);

(statearr_45247_45267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (6))){
var inst_45227 = (state_45242[(2)]);
var state_45242__$1 = state_45242;
if(cljs.core.truth_(inst_45227)){
var statearr_45248_45268 = state_45242__$1;
(statearr_45248_45268[(1)] = (8));

} else {
var statearr_45249_45269 = state_45242__$1;
(statearr_45249_45269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (3))){
var inst_45240 = (state_45242[(2)]);
var state_45242__$1 = state_45242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45242__$1,inst_45240);
} else {
if((state_val_45243 === (12))){
var state_45242__$1 = state_45242;
var statearr_45250_45270 = state_45242__$1;
(statearr_45250_45270[(2)] = null);

(statearr_45250_45270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (2))){
var inst_45219 = (state_45242[(7)]);
var state_45242__$1 = state_45242;
if(cljs.core.truth_(inst_45219)){
var statearr_45251_45271 = state_45242__$1;
(statearr_45251_45271[(1)] = (4));

} else {
var statearr_45252_45272 = state_45242__$1;
(statearr_45252_45272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (11))){
var inst_45233 = cljs.core.async.close_BANG_.call(null,ch);
var state_45242__$1 = state_45242;
var statearr_45253_45273 = state_45242__$1;
(statearr_45253_45273[(2)] = inst_45233);

(statearr_45253_45273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (9))){
var state_45242__$1 = state_45242;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45254_45274 = state_45242__$1;
(statearr_45254_45274[(1)] = (11));

} else {
var statearr_45255_45275 = state_45242__$1;
(statearr_45255_45275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (5))){
var inst_45219 = (state_45242[(7)]);
var state_45242__$1 = state_45242;
var statearr_45256_45276 = state_45242__$1;
(statearr_45256_45276[(2)] = inst_45219);

(statearr_45256_45276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (10))){
var inst_45238 = (state_45242[(2)]);
var state_45242__$1 = state_45242;
var statearr_45257_45277 = state_45242__$1;
(statearr_45257_45277[(2)] = inst_45238);

(statearr_45257_45277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45243 === (8))){
var inst_45219 = (state_45242[(7)]);
var inst_45229 = cljs.core.next.call(null,inst_45219);
var inst_45219__$1 = inst_45229;
var state_45242__$1 = (function (){var statearr_45258 = state_45242;
(statearr_45258[(7)] = inst_45219__$1);

return statearr_45258;
})();
var statearr_45259_45278 = state_45242__$1;
(statearr_45259_45278[(2)] = null);

(statearr_45259_45278[(1)] = (2));


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
});})(c__32582__auto__))
;
return ((function (switch__32494__auto__,c__32582__auto__){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_45260 = [null,null,null,null,null,null,null,null];
(statearr_45260[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_45260[(1)] = (1));

return statearr_45260;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_45242){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45261){if((e45261 instanceof Object)){
var ex__32498__auto__ = e45261;
var statearr_45262_45279 = state_45242;
(statearr_45262_45279[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45280 = state_45242;
state_45242 = G__45280;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_45242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_45242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__))
})();
var state__32584__auto__ = (function (){var statearr_45263 = f__32583__auto__.call(null);
(statearr_45263[(6)] = c__32582__auto__);

return statearr_45263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__))
);

return c__32582__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28969__auto__ = (((_ == null))?null:_);
var m__28970__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,_);
} else {
var m__28970__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45281 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45281 = (function (ch,cs,meta45282){
this.ch = ch;
this.cs = cs;
this.meta45282 = meta45282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45283,meta45282__$1){
var self__ = this;
var _45283__$1 = this;
return (new cljs.core.async.t_cljs$core$async45281(self__.ch,self__.cs,meta45282__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45283){
var self__ = this;
var _45283__$1 = this;
return self__.meta45282;
});})(cs))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45281.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45281.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45282","meta45282",-2142793399,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45281.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45281";

cljs.core.async.t_cljs$core$async45281.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async45281");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45281 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45281(ch__$1,cs__$1,meta45282){
return (new cljs.core.async.t_cljs$core$async45281(ch__$1,cs__$1,meta45282));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45281(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32582__auto___45503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___45503,cs,m,dchan,dctr,done){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___45503,cs,m,dchan,dctr,done){
return (function (state_45418){
var state_val_45419 = (state_45418[(1)]);
if((state_val_45419 === (7))){
var inst_45414 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45420_45504 = state_45418__$1;
(statearr_45420_45504[(2)] = inst_45414);

(statearr_45420_45504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (20))){
var inst_45317 = (state_45418[(7)]);
var inst_45329 = cljs.core.first.call(null,inst_45317);
var inst_45330 = cljs.core.nth.call(null,inst_45329,(0),null);
var inst_45331 = cljs.core.nth.call(null,inst_45329,(1),null);
var state_45418__$1 = (function (){var statearr_45421 = state_45418;
(statearr_45421[(8)] = inst_45330);

return statearr_45421;
})();
if(cljs.core.truth_(inst_45331)){
var statearr_45422_45505 = state_45418__$1;
(statearr_45422_45505[(1)] = (22));

} else {
var statearr_45423_45506 = state_45418__$1;
(statearr_45423_45506[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (27))){
var inst_45286 = (state_45418[(9)]);
var inst_45361 = (state_45418[(10)]);
var inst_45359 = (state_45418[(11)]);
var inst_45366 = (state_45418[(12)]);
var inst_45366__$1 = cljs.core._nth.call(null,inst_45359,inst_45361);
var inst_45367 = cljs.core.async.put_BANG_.call(null,inst_45366__$1,inst_45286,done);
var state_45418__$1 = (function (){var statearr_45424 = state_45418;
(statearr_45424[(12)] = inst_45366__$1);

return statearr_45424;
})();
if(cljs.core.truth_(inst_45367)){
var statearr_45425_45507 = state_45418__$1;
(statearr_45425_45507[(1)] = (30));

} else {
var statearr_45426_45508 = state_45418__$1;
(statearr_45426_45508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (1))){
var state_45418__$1 = state_45418;
var statearr_45427_45509 = state_45418__$1;
(statearr_45427_45509[(2)] = null);

(statearr_45427_45509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (24))){
var inst_45317 = (state_45418[(7)]);
var inst_45336 = (state_45418[(2)]);
var inst_45337 = cljs.core.next.call(null,inst_45317);
var inst_45295 = inst_45337;
var inst_45296 = null;
var inst_45297 = (0);
var inst_45298 = (0);
var state_45418__$1 = (function (){var statearr_45428 = state_45418;
(statearr_45428[(13)] = inst_45295);

(statearr_45428[(14)] = inst_45336);

(statearr_45428[(15)] = inst_45297);

(statearr_45428[(16)] = inst_45296);

(statearr_45428[(17)] = inst_45298);

return statearr_45428;
})();
var statearr_45429_45510 = state_45418__$1;
(statearr_45429_45510[(2)] = null);

(statearr_45429_45510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (39))){
var state_45418__$1 = state_45418;
var statearr_45433_45511 = state_45418__$1;
(statearr_45433_45511[(2)] = null);

(statearr_45433_45511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (4))){
var inst_45286 = (state_45418[(9)]);
var inst_45286__$1 = (state_45418[(2)]);
var inst_45287 = (inst_45286__$1 == null);
var state_45418__$1 = (function (){var statearr_45434 = state_45418;
(statearr_45434[(9)] = inst_45286__$1);

return statearr_45434;
})();
if(cljs.core.truth_(inst_45287)){
var statearr_45435_45512 = state_45418__$1;
(statearr_45435_45512[(1)] = (5));

} else {
var statearr_45436_45513 = state_45418__$1;
(statearr_45436_45513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (15))){
var inst_45295 = (state_45418[(13)]);
var inst_45297 = (state_45418[(15)]);
var inst_45296 = (state_45418[(16)]);
var inst_45298 = (state_45418[(17)]);
var inst_45313 = (state_45418[(2)]);
var inst_45314 = (inst_45298 + (1));
var tmp45430 = inst_45295;
var tmp45431 = inst_45297;
var tmp45432 = inst_45296;
var inst_45295__$1 = tmp45430;
var inst_45296__$1 = tmp45432;
var inst_45297__$1 = tmp45431;
var inst_45298__$1 = inst_45314;
var state_45418__$1 = (function (){var statearr_45437 = state_45418;
(statearr_45437[(13)] = inst_45295__$1);

(statearr_45437[(18)] = inst_45313);

(statearr_45437[(15)] = inst_45297__$1);

(statearr_45437[(16)] = inst_45296__$1);

(statearr_45437[(17)] = inst_45298__$1);

return statearr_45437;
})();
var statearr_45438_45514 = state_45418__$1;
(statearr_45438_45514[(2)] = null);

(statearr_45438_45514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (21))){
var inst_45340 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45442_45515 = state_45418__$1;
(statearr_45442_45515[(2)] = inst_45340);

(statearr_45442_45515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (31))){
var inst_45366 = (state_45418[(12)]);
var inst_45370 = done.call(null,null);
var inst_45371 = cljs.core.async.untap_STAR_.call(null,m,inst_45366);
var state_45418__$1 = (function (){var statearr_45443 = state_45418;
(statearr_45443[(19)] = inst_45370);

return statearr_45443;
})();
var statearr_45444_45516 = state_45418__$1;
(statearr_45444_45516[(2)] = inst_45371);

(statearr_45444_45516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (32))){
var inst_45361 = (state_45418[(10)]);
var inst_45359 = (state_45418[(11)]);
var inst_45360 = (state_45418[(20)]);
var inst_45358 = (state_45418[(21)]);
var inst_45373 = (state_45418[(2)]);
var inst_45374 = (inst_45361 + (1));
var tmp45439 = inst_45359;
var tmp45440 = inst_45360;
var tmp45441 = inst_45358;
var inst_45358__$1 = tmp45441;
var inst_45359__$1 = tmp45439;
var inst_45360__$1 = tmp45440;
var inst_45361__$1 = inst_45374;
var state_45418__$1 = (function (){var statearr_45445 = state_45418;
(statearr_45445[(22)] = inst_45373);

(statearr_45445[(10)] = inst_45361__$1);

(statearr_45445[(11)] = inst_45359__$1);

(statearr_45445[(20)] = inst_45360__$1);

(statearr_45445[(21)] = inst_45358__$1);

return statearr_45445;
})();
var statearr_45446_45517 = state_45418__$1;
(statearr_45446_45517[(2)] = null);

(statearr_45446_45517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (40))){
var inst_45386 = (state_45418[(23)]);
var inst_45390 = done.call(null,null);
var inst_45391 = cljs.core.async.untap_STAR_.call(null,m,inst_45386);
var state_45418__$1 = (function (){var statearr_45447 = state_45418;
(statearr_45447[(24)] = inst_45390);

return statearr_45447;
})();
var statearr_45448_45518 = state_45418__$1;
(statearr_45448_45518[(2)] = inst_45391);

(statearr_45448_45518[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (33))){
var inst_45377 = (state_45418[(25)]);
var inst_45379 = cljs.core.chunked_seq_QMARK_.call(null,inst_45377);
var state_45418__$1 = state_45418;
if(inst_45379){
var statearr_45449_45519 = state_45418__$1;
(statearr_45449_45519[(1)] = (36));

} else {
var statearr_45450_45520 = state_45418__$1;
(statearr_45450_45520[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (13))){
var inst_45307 = (state_45418[(26)]);
var inst_45310 = cljs.core.async.close_BANG_.call(null,inst_45307);
var state_45418__$1 = state_45418;
var statearr_45451_45521 = state_45418__$1;
(statearr_45451_45521[(2)] = inst_45310);

(statearr_45451_45521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (22))){
var inst_45330 = (state_45418[(8)]);
var inst_45333 = cljs.core.async.close_BANG_.call(null,inst_45330);
var state_45418__$1 = state_45418;
var statearr_45452_45522 = state_45418__$1;
(statearr_45452_45522[(2)] = inst_45333);

(statearr_45452_45522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (36))){
var inst_45377 = (state_45418[(25)]);
var inst_45381 = cljs.core.chunk_first.call(null,inst_45377);
var inst_45382 = cljs.core.chunk_rest.call(null,inst_45377);
var inst_45383 = cljs.core.count.call(null,inst_45381);
var inst_45358 = inst_45382;
var inst_45359 = inst_45381;
var inst_45360 = inst_45383;
var inst_45361 = (0);
var state_45418__$1 = (function (){var statearr_45453 = state_45418;
(statearr_45453[(10)] = inst_45361);

(statearr_45453[(11)] = inst_45359);

(statearr_45453[(20)] = inst_45360);

(statearr_45453[(21)] = inst_45358);

return statearr_45453;
})();
var statearr_45454_45523 = state_45418__$1;
(statearr_45454_45523[(2)] = null);

(statearr_45454_45523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (41))){
var inst_45377 = (state_45418[(25)]);
var inst_45393 = (state_45418[(2)]);
var inst_45394 = cljs.core.next.call(null,inst_45377);
var inst_45358 = inst_45394;
var inst_45359 = null;
var inst_45360 = (0);
var inst_45361 = (0);
var state_45418__$1 = (function (){var statearr_45455 = state_45418;
(statearr_45455[(27)] = inst_45393);

(statearr_45455[(10)] = inst_45361);

(statearr_45455[(11)] = inst_45359);

(statearr_45455[(20)] = inst_45360);

(statearr_45455[(21)] = inst_45358);

return statearr_45455;
})();
var statearr_45456_45524 = state_45418__$1;
(statearr_45456_45524[(2)] = null);

(statearr_45456_45524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (43))){
var state_45418__$1 = state_45418;
var statearr_45457_45525 = state_45418__$1;
(statearr_45457_45525[(2)] = null);

(statearr_45457_45525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (29))){
var inst_45402 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45458_45526 = state_45418__$1;
(statearr_45458_45526[(2)] = inst_45402);

(statearr_45458_45526[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (44))){
var inst_45411 = (state_45418[(2)]);
var state_45418__$1 = (function (){var statearr_45459 = state_45418;
(statearr_45459[(28)] = inst_45411);

return statearr_45459;
})();
var statearr_45460_45527 = state_45418__$1;
(statearr_45460_45527[(2)] = null);

(statearr_45460_45527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (6))){
var inst_45350 = (state_45418[(29)]);
var inst_45349 = cljs.core.deref.call(null,cs);
var inst_45350__$1 = cljs.core.keys.call(null,inst_45349);
var inst_45351 = cljs.core.count.call(null,inst_45350__$1);
var inst_45352 = cljs.core.reset_BANG_.call(null,dctr,inst_45351);
var inst_45357 = cljs.core.seq.call(null,inst_45350__$1);
var inst_45358 = inst_45357;
var inst_45359 = null;
var inst_45360 = (0);
var inst_45361 = (0);
var state_45418__$1 = (function (){var statearr_45461 = state_45418;
(statearr_45461[(10)] = inst_45361);

(statearr_45461[(30)] = inst_45352);

(statearr_45461[(11)] = inst_45359);

(statearr_45461[(20)] = inst_45360);

(statearr_45461[(29)] = inst_45350__$1);

(statearr_45461[(21)] = inst_45358);

return statearr_45461;
})();
var statearr_45462_45528 = state_45418__$1;
(statearr_45462_45528[(2)] = null);

(statearr_45462_45528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (28))){
var inst_45377 = (state_45418[(25)]);
var inst_45358 = (state_45418[(21)]);
var inst_45377__$1 = cljs.core.seq.call(null,inst_45358);
var state_45418__$1 = (function (){var statearr_45463 = state_45418;
(statearr_45463[(25)] = inst_45377__$1);

return statearr_45463;
})();
if(inst_45377__$1){
var statearr_45464_45529 = state_45418__$1;
(statearr_45464_45529[(1)] = (33));

} else {
var statearr_45465_45530 = state_45418__$1;
(statearr_45465_45530[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (25))){
var inst_45361 = (state_45418[(10)]);
var inst_45360 = (state_45418[(20)]);
var inst_45363 = (inst_45361 < inst_45360);
var inst_45364 = inst_45363;
var state_45418__$1 = state_45418;
if(cljs.core.truth_(inst_45364)){
var statearr_45466_45531 = state_45418__$1;
(statearr_45466_45531[(1)] = (27));

} else {
var statearr_45467_45532 = state_45418__$1;
(statearr_45467_45532[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (34))){
var state_45418__$1 = state_45418;
var statearr_45468_45533 = state_45418__$1;
(statearr_45468_45533[(2)] = null);

(statearr_45468_45533[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (17))){
var state_45418__$1 = state_45418;
var statearr_45469_45534 = state_45418__$1;
(statearr_45469_45534[(2)] = null);

(statearr_45469_45534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (3))){
var inst_45416 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45418__$1,inst_45416);
} else {
if((state_val_45419 === (12))){
var inst_45345 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45470_45535 = state_45418__$1;
(statearr_45470_45535[(2)] = inst_45345);

(statearr_45470_45535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (2))){
var state_45418__$1 = state_45418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45418__$1,(4),ch);
} else {
if((state_val_45419 === (23))){
var state_45418__$1 = state_45418;
var statearr_45471_45536 = state_45418__$1;
(statearr_45471_45536[(2)] = null);

(statearr_45471_45536[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (35))){
var inst_45400 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45472_45537 = state_45418__$1;
(statearr_45472_45537[(2)] = inst_45400);

(statearr_45472_45537[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (19))){
var inst_45317 = (state_45418[(7)]);
var inst_45321 = cljs.core.chunk_first.call(null,inst_45317);
var inst_45322 = cljs.core.chunk_rest.call(null,inst_45317);
var inst_45323 = cljs.core.count.call(null,inst_45321);
var inst_45295 = inst_45322;
var inst_45296 = inst_45321;
var inst_45297 = inst_45323;
var inst_45298 = (0);
var state_45418__$1 = (function (){var statearr_45473 = state_45418;
(statearr_45473[(13)] = inst_45295);

(statearr_45473[(15)] = inst_45297);

(statearr_45473[(16)] = inst_45296);

(statearr_45473[(17)] = inst_45298);

return statearr_45473;
})();
var statearr_45474_45538 = state_45418__$1;
(statearr_45474_45538[(2)] = null);

(statearr_45474_45538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (11))){
var inst_45317 = (state_45418[(7)]);
var inst_45295 = (state_45418[(13)]);
var inst_45317__$1 = cljs.core.seq.call(null,inst_45295);
var state_45418__$1 = (function (){var statearr_45475 = state_45418;
(statearr_45475[(7)] = inst_45317__$1);

return statearr_45475;
})();
if(inst_45317__$1){
var statearr_45476_45539 = state_45418__$1;
(statearr_45476_45539[(1)] = (16));

} else {
var statearr_45477_45540 = state_45418__$1;
(statearr_45477_45540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (9))){
var inst_45347 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45478_45541 = state_45418__$1;
(statearr_45478_45541[(2)] = inst_45347);

(statearr_45478_45541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (5))){
var inst_45293 = cljs.core.deref.call(null,cs);
var inst_45294 = cljs.core.seq.call(null,inst_45293);
var inst_45295 = inst_45294;
var inst_45296 = null;
var inst_45297 = (0);
var inst_45298 = (0);
var state_45418__$1 = (function (){var statearr_45479 = state_45418;
(statearr_45479[(13)] = inst_45295);

(statearr_45479[(15)] = inst_45297);

(statearr_45479[(16)] = inst_45296);

(statearr_45479[(17)] = inst_45298);

return statearr_45479;
})();
var statearr_45480_45542 = state_45418__$1;
(statearr_45480_45542[(2)] = null);

(statearr_45480_45542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (14))){
var state_45418__$1 = state_45418;
var statearr_45481_45543 = state_45418__$1;
(statearr_45481_45543[(2)] = null);

(statearr_45481_45543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (45))){
var inst_45408 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45482_45544 = state_45418__$1;
(statearr_45482_45544[(2)] = inst_45408);

(statearr_45482_45544[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (26))){
var inst_45350 = (state_45418[(29)]);
var inst_45404 = (state_45418[(2)]);
var inst_45405 = cljs.core.seq.call(null,inst_45350);
var state_45418__$1 = (function (){var statearr_45483 = state_45418;
(statearr_45483[(31)] = inst_45404);

return statearr_45483;
})();
if(inst_45405){
var statearr_45484_45545 = state_45418__$1;
(statearr_45484_45545[(1)] = (42));

} else {
var statearr_45485_45546 = state_45418__$1;
(statearr_45485_45546[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (16))){
var inst_45317 = (state_45418[(7)]);
var inst_45319 = cljs.core.chunked_seq_QMARK_.call(null,inst_45317);
var state_45418__$1 = state_45418;
if(inst_45319){
var statearr_45486_45547 = state_45418__$1;
(statearr_45486_45547[(1)] = (19));

} else {
var statearr_45487_45548 = state_45418__$1;
(statearr_45487_45548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (38))){
var inst_45397 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45488_45549 = state_45418__$1;
(statearr_45488_45549[(2)] = inst_45397);

(statearr_45488_45549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (30))){
var state_45418__$1 = state_45418;
var statearr_45489_45550 = state_45418__$1;
(statearr_45489_45550[(2)] = null);

(statearr_45489_45550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (10))){
var inst_45296 = (state_45418[(16)]);
var inst_45298 = (state_45418[(17)]);
var inst_45306 = cljs.core._nth.call(null,inst_45296,inst_45298);
var inst_45307 = cljs.core.nth.call(null,inst_45306,(0),null);
var inst_45308 = cljs.core.nth.call(null,inst_45306,(1),null);
var state_45418__$1 = (function (){var statearr_45490 = state_45418;
(statearr_45490[(26)] = inst_45307);

return statearr_45490;
})();
if(cljs.core.truth_(inst_45308)){
var statearr_45491_45551 = state_45418__$1;
(statearr_45491_45551[(1)] = (13));

} else {
var statearr_45492_45552 = state_45418__$1;
(statearr_45492_45552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (18))){
var inst_45343 = (state_45418[(2)]);
var state_45418__$1 = state_45418;
var statearr_45493_45553 = state_45418__$1;
(statearr_45493_45553[(2)] = inst_45343);

(statearr_45493_45553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (42))){
var state_45418__$1 = state_45418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45418__$1,(45),dchan);
} else {
if((state_val_45419 === (37))){
var inst_45286 = (state_45418[(9)]);
var inst_45377 = (state_45418[(25)]);
var inst_45386 = (state_45418[(23)]);
var inst_45386__$1 = cljs.core.first.call(null,inst_45377);
var inst_45387 = cljs.core.async.put_BANG_.call(null,inst_45386__$1,inst_45286,done);
var state_45418__$1 = (function (){var statearr_45494 = state_45418;
(statearr_45494[(23)] = inst_45386__$1);

return statearr_45494;
})();
if(cljs.core.truth_(inst_45387)){
var statearr_45495_45554 = state_45418__$1;
(statearr_45495_45554[(1)] = (39));

} else {
var statearr_45496_45555 = state_45418__$1;
(statearr_45496_45555[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45419 === (8))){
var inst_45297 = (state_45418[(15)]);
var inst_45298 = (state_45418[(17)]);
var inst_45300 = (inst_45298 < inst_45297);
var inst_45301 = inst_45300;
var state_45418__$1 = state_45418;
if(cljs.core.truth_(inst_45301)){
var statearr_45497_45556 = state_45418__$1;
(statearr_45497_45556[(1)] = (10));

} else {
var statearr_45498_45557 = state_45418__$1;
(statearr_45498_45557[(1)] = (11));

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
});})(c__32582__auto___45503,cs,m,dchan,dctr,done))
;
return ((function (switch__32494__auto__,c__32582__auto___45503,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32495__auto__ = null;
var cljs$core$async$mult_$_state_machine__32495__auto____0 = (function (){
var statearr_45499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45499[(0)] = cljs$core$async$mult_$_state_machine__32495__auto__);

(statearr_45499[(1)] = (1));

return statearr_45499;
});
var cljs$core$async$mult_$_state_machine__32495__auto____1 = (function (state_45418){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45500){if((e45500 instanceof Object)){
var ex__32498__auto__ = e45500;
var statearr_45501_45558 = state_45418;
(statearr_45501_45558[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45559 = state_45418;
state_45418 = G__45559;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32495__auto__ = function(state_45418){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32495__auto____1.call(this,state_45418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32495__auto____0;
cljs$core$async$mult_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32495__auto____1;
return cljs$core$async$mult_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___45503,cs,m,dchan,dctr,done))
})();
var state__32584__auto__ = (function (){var statearr_45502 = f__32583__auto__.call(null);
(statearr_45502[(6)] = c__32582__auto___45503);

return statearr_45502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___45503,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45561 = arguments.length;
switch (G__45561) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m);
} else {
var m__28970__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,state_map);
} else {
var m__28970__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28969__auto__ = (((m == null))?null:m);
var m__28970__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,m,mode);
} else {
var m__28970__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29462__auto__ = [];
var len__29455__auto___45573 = arguments.length;
var i__29456__auto___45574 = (0);
while(true){
if((i__29456__auto___45574 < len__29455__auto___45573)){
args__29462__auto__.push((arguments[i__29456__auto___45574]));

var G__45575 = (i__29456__auto___45574 + (1));
i__29456__auto___45574 = G__45575;
continue;
} else {
}
break;
}

var argseq__29463__auto__ = ((((3) < args__29462__auto__.length))?(new cljs.core.IndexedSeq(args__29462__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29463__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45567){
var map__45568 = p__45567;
var map__45568__$1 = ((((!((map__45568 == null)))?((((map__45568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45568):map__45568);
var opts = map__45568__$1;
var statearr_45570_45576 = state;
(statearr_45570_45576[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__45568,map__45568__$1,opts){
return (function (val){
var statearr_45571_45577 = state;
(statearr_45571_45577[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45568,map__45568__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_45572_45578 = state;
(statearr_45572_45578[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45563){
var G__45564 = cljs.core.first.call(null,seq45563);
var seq45563__$1 = cljs.core.next.call(null,seq45563);
var G__45565 = cljs.core.first.call(null,seq45563__$1);
var seq45563__$2 = cljs.core.next.call(null,seq45563__$1);
var G__45566 = cljs.core.first.call(null,seq45563__$2);
var seq45563__$3 = cljs.core.next.call(null,seq45563__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45564,G__45565,G__45566,seq45563__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45579 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45580){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45580 = meta45580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45581,meta45580__$1){
var self__ = this;
var _45581__$1 = this;
return (new cljs.core.async.t_cljs$core$async45579(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45580__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45581){
var self__ = this;
var _45581__$1 = this;
return self__.meta45580;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45580","meta45580",222741533,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45579";

cljs.core.async.t_cljs$core$async45579.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async45579");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45579 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45579(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45580){
return (new cljs.core.async.t_cljs$core$async45579(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45580));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45579(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32582__auto___45743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___45743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___45743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45683){
var state_val_45684 = (state_45683[(1)]);
if((state_val_45684 === (7))){
var inst_45598 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45685_45744 = state_45683__$1;
(statearr_45685_45744[(2)] = inst_45598);

(statearr_45685_45744[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (20))){
var inst_45610 = (state_45683[(7)]);
var state_45683__$1 = state_45683;
var statearr_45686_45745 = state_45683__$1;
(statearr_45686_45745[(2)] = inst_45610);

(statearr_45686_45745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (27))){
var state_45683__$1 = state_45683;
var statearr_45687_45746 = state_45683__$1;
(statearr_45687_45746[(2)] = null);

(statearr_45687_45746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (1))){
var inst_45585 = (state_45683[(8)]);
var inst_45585__$1 = calc_state.call(null);
var inst_45587 = (inst_45585__$1 == null);
var inst_45588 = cljs.core.not.call(null,inst_45587);
var state_45683__$1 = (function (){var statearr_45688 = state_45683;
(statearr_45688[(8)] = inst_45585__$1);

return statearr_45688;
})();
if(inst_45588){
var statearr_45689_45747 = state_45683__$1;
(statearr_45689_45747[(1)] = (2));

} else {
var statearr_45690_45748 = state_45683__$1;
(statearr_45690_45748[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (24))){
var inst_45643 = (state_45683[(9)]);
var inst_45657 = (state_45683[(10)]);
var inst_45634 = (state_45683[(11)]);
var inst_45657__$1 = inst_45634.call(null,inst_45643);
var state_45683__$1 = (function (){var statearr_45691 = state_45683;
(statearr_45691[(10)] = inst_45657__$1);

return statearr_45691;
})();
if(cljs.core.truth_(inst_45657__$1)){
var statearr_45692_45749 = state_45683__$1;
(statearr_45692_45749[(1)] = (29));

} else {
var statearr_45693_45750 = state_45683__$1;
(statearr_45693_45750[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (4))){
var inst_45601 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45601)){
var statearr_45694_45751 = state_45683__$1;
(statearr_45694_45751[(1)] = (8));

} else {
var statearr_45695_45752 = state_45683__$1;
(statearr_45695_45752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (15))){
var inst_45628 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45628)){
var statearr_45696_45753 = state_45683__$1;
(statearr_45696_45753[(1)] = (19));

} else {
var statearr_45697_45754 = state_45683__$1;
(statearr_45697_45754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (21))){
var inst_45633 = (state_45683[(12)]);
var inst_45633__$1 = (state_45683[(2)]);
var inst_45634 = cljs.core.get.call(null,inst_45633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45635 = cljs.core.get.call(null,inst_45633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45636 = cljs.core.get.call(null,inst_45633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45683__$1 = (function (){var statearr_45698 = state_45683;
(statearr_45698[(13)] = inst_45635);

(statearr_45698[(12)] = inst_45633__$1);

(statearr_45698[(11)] = inst_45634);

return statearr_45698;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45683__$1,(22),inst_45636);
} else {
if((state_val_45684 === (31))){
var inst_45665 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45665)){
var statearr_45699_45755 = state_45683__$1;
(statearr_45699_45755[(1)] = (32));

} else {
var statearr_45700_45756 = state_45683__$1;
(statearr_45700_45756[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (32))){
var inst_45642 = (state_45683[(14)]);
var state_45683__$1 = state_45683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45683__$1,(35),out,inst_45642);
} else {
if((state_val_45684 === (33))){
var inst_45633 = (state_45683[(12)]);
var inst_45610 = inst_45633;
var state_45683__$1 = (function (){var statearr_45701 = state_45683;
(statearr_45701[(7)] = inst_45610);

return statearr_45701;
})();
var statearr_45702_45757 = state_45683__$1;
(statearr_45702_45757[(2)] = null);

(statearr_45702_45757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (13))){
var inst_45610 = (state_45683[(7)]);
var inst_45617 = inst_45610.cljs$lang$protocol_mask$partition0$;
var inst_45618 = (inst_45617 & (64));
var inst_45619 = inst_45610.cljs$core$ISeq$;
var inst_45620 = (cljs.core.PROTOCOL_SENTINEL === inst_45619);
var inst_45621 = (inst_45618) || (inst_45620);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45621)){
var statearr_45703_45758 = state_45683__$1;
(statearr_45703_45758[(1)] = (16));

} else {
var statearr_45704_45759 = state_45683__$1;
(statearr_45704_45759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (22))){
var inst_45642 = (state_45683[(14)]);
var inst_45643 = (state_45683[(9)]);
var inst_45641 = (state_45683[(2)]);
var inst_45642__$1 = cljs.core.nth.call(null,inst_45641,(0),null);
var inst_45643__$1 = cljs.core.nth.call(null,inst_45641,(1),null);
var inst_45644 = (inst_45642__$1 == null);
var inst_45645 = cljs.core._EQ_.call(null,inst_45643__$1,change);
var inst_45646 = (inst_45644) || (inst_45645);
var state_45683__$1 = (function (){var statearr_45705 = state_45683;
(statearr_45705[(14)] = inst_45642__$1);

(statearr_45705[(9)] = inst_45643__$1);

return statearr_45705;
})();
if(cljs.core.truth_(inst_45646)){
var statearr_45706_45760 = state_45683__$1;
(statearr_45706_45760[(1)] = (23));

} else {
var statearr_45707_45761 = state_45683__$1;
(statearr_45707_45761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (36))){
var inst_45633 = (state_45683[(12)]);
var inst_45610 = inst_45633;
var state_45683__$1 = (function (){var statearr_45708 = state_45683;
(statearr_45708[(7)] = inst_45610);

return statearr_45708;
})();
var statearr_45709_45762 = state_45683__$1;
(statearr_45709_45762[(2)] = null);

(statearr_45709_45762[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (29))){
var inst_45657 = (state_45683[(10)]);
var state_45683__$1 = state_45683;
var statearr_45710_45763 = state_45683__$1;
(statearr_45710_45763[(2)] = inst_45657);

(statearr_45710_45763[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (6))){
var state_45683__$1 = state_45683;
var statearr_45711_45764 = state_45683__$1;
(statearr_45711_45764[(2)] = false);

(statearr_45711_45764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (28))){
var inst_45653 = (state_45683[(2)]);
var inst_45654 = calc_state.call(null);
var inst_45610 = inst_45654;
var state_45683__$1 = (function (){var statearr_45712 = state_45683;
(statearr_45712[(15)] = inst_45653);

(statearr_45712[(7)] = inst_45610);

return statearr_45712;
})();
var statearr_45713_45765 = state_45683__$1;
(statearr_45713_45765[(2)] = null);

(statearr_45713_45765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (25))){
var inst_45679 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45714_45766 = state_45683__$1;
(statearr_45714_45766[(2)] = inst_45679);

(statearr_45714_45766[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (34))){
var inst_45677 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45715_45767 = state_45683__$1;
(statearr_45715_45767[(2)] = inst_45677);

(statearr_45715_45767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (17))){
var state_45683__$1 = state_45683;
var statearr_45716_45768 = state_45683__$1;
(statearr_45716_45768[(2)] = false);

(statearr_45716_45768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (3))){
var state_45683__$1 = state_45683;
var statearr_45717_45769 = state_45683__$1;
(statearr_45717_45769[(2)] = false);

(statearr_45717_45769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (12))){
var inst_45681 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45683__$1,inst_45681);
} else {
if((state_val_45684 === (2))){
var inst_45585 = (state_45683[(8)]);
var inst_45590 = inst_45585.cljs$lang$protocol_mask$partition0$;
var inst_45591 = (inst_45590 & (64));
var inst_45592 = inst_45585.cljs$core$ISeq$;
var inst_45593 = (cljs.core.PROTOCOL_SENTINEL === inst_45592);
var inst_45594 = (inst_45591) || (inst_45593);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45594)){
var statearr_45718_45770 = state_45683__$1;
(statearr_45718_45770[(1)] = (5));

} else {
var statearr_45719_45771 = state_45683__$1;
(statearr_45719_45771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (23))){
var inst_45642 = (state_45683[(14)]);
var inst_45648 = (inst_45642 == null);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45648)){
var statearr_45720_45772 = state_45683__$1;
(statearr_45720_45772[(1)] = (26));

} else {
var statearr_45721_45773 = state_45683__$1;
(statearr_45721_45773[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (35))){
var inst_45668 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
if(cljs.core.truth_(inst_45668)){
var statearr_45722_45774 = state_45683__$1;
(statearr_45722_45774[(1)] = (36));

} else {
var statearr_45723_45775 = state_45683__$1;
(statearr_45723_45775[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (19))){
var inst_45610 = (state_45683[(7)]);
var inst_45630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45610);
var state_45683__$1 = state_45683;
var statearr_45724_45776 = state_45683__$1;
(statearr_45724_45776[(2)] = inst_45630);

(statearr_45724_45776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (11))){
var inst_45610 = (state_45683[(7)]);
var inst_45614 = (inst_45610 == null);
var inst_45615 = cljs.core.not.call(null,inst_45614);
var state_45683__$1 = state_45683;
if(inst_45615){
var statearr_45725_45777 = state_45683__$1;
(statearr_45725_45777[(1)] = (13));

} else {
var statearr_45726_45778 = state_45683__$1;
(statearr_45726_45778[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (9))){
var inst_45585 = (state_45683[(8)]);
var state_45683__$1 = state_45683;
var statearr_45727_45779 = state_45683__$1;
(statearr_45727_45779[(2)] = inst_45585);

(statearr_45727_45779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (5))){
var state_45683__$1 = state_45683;
var statearr_45728_45780 = state_45683__$1;
(statearr_45728_45780[(2)] = true);

(statearr_45728_45780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (14))){
var state_45683__$1 = state_45683;
var statearr_45729_45781 = state_45683__$1;
(statearr_45729_45781[(2)] = false);

(statearr_45729_45781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (26))){
var inst_45643 = (state_45683[(9)]);
var inst_45650 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45643);
var state_45683__$1 = state_45683;
var statearr_45730_45782 = state_45683__$1;
(statearr_45730_45782[(2)] = inst_45650);

(statearr_45730_45782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (16))){
var state_45683__$1 = state_45683;
var statearr_45731_45783 = state_45683__$1;
(statearr_45731_45783[(2)] = true);

(statearr_45731_45783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (38))){
var inst_45673 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45732_45784 = state_45683__$1;
(statearr_45732_45784[(2)] = inst_45673);

(statearr_45732_45784[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (30))){
var inst_45635 = (state_45683[(13)]);
var inst_45643 = (state_45683[(9)]);
var inst_45634 = (state_45683[(11)]);
var inst_45660 = cljs.core.empty_QMARK_.call(null,inst_45634);
var inst_45661 = inst_45635.call(null,inst_45643);
var inst_45662 = cljs.core.not.call(null,inst_45661);
var inst_45663 = (inst_45660) && (inst_45662);
var state_45683__$1 = state_45683;
var statearr_45733_45785 = state_45683__$1;
(statearr_45733_45785[(2)] = inst_45663);

(statearr_45733_45785[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (10))){
var inst_45585 = (state_45683[(8)]);
var inst_45606 = (state_45683[(2)]);
var inst_45607 = cljs.core.get.call(null,inst_45606,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45608 = cljs.core.get.call(null,inst_45606,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45609 = cljs.core.get.call(null,inst_45606,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45610 = inst_45585;
var state_45683__$1 = (function (){var statearr_45734 = state_45683;
(statearr_45734[(16)] = inst_45607);

(statearr_45734[(17)] = inst_45608);

(statearr_45734[(7)] = inst_45610);

(statearr_45734[(18)] = inst_45609);

return statearr_45734;
})();
var statearr_45735_45786 = state_45683__$1;
(statearr_45735_45786[(2)] = null);

(statearr_45735_45786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (18))){
var inst_45625 = (state_45683[(2)]);
var state_45683__$1 = state_45683;
var statearr_45736_45787 = state_45683__$1;
(statearr_45736_45787[(2)] = inst_45625);

(statearr_45736_45787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (37))){
var state_45683__$1 = state_45683;
var statearr_45737_45788 = state_45683__$1;
(statearr_45737_45788[(2)] = null);

(statearr_45737_45788[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45684 === (8))){
var inst_45585 = (state_45683[(8)]);
var inst_45603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45585);
var state_45683__$1 = state_45683;
var statearr_45738_45789 = state_45683__$1;
(statearr_45738_45789[(2)] = inst_45603);

(statearr_45738_45789[(1)] = (10));


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
});})(c__32582__auto___45743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32494__auto__,c__32582__auto___45743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32495__auto__ = null;
var cljs$core$async$mix_$_state_machine__32495__auto____0 = (function (){
var statearr_45739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45739[(0)] = cljs$core$async$mix_$_state_machine__32495__auto__);

(statearr_45739[(1)] = (1));

return statearr_45739;
});
var cljs$core$async$mix_$_state_machine__32495__auto____1 = (function (state_45683){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45740){if((e45740 instanceof Object)){
var ex__32498__auto__ = e45740;
var statearr_45741_45790 = state_45683;
(statearr_45741_45790[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45791 = state_45683;
state_45683 = G__45791;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32495__auto__ = function(state_45683){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32495__auto____1.call(this,state_45683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32495__auto____0;
cljs$core$async$mix_$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32495__auto____1;
return cljs$core$async$mix_$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___45743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32584__auto__ = (function (){var statearr_45742 = f__32583__auto__.call(null);
(statearr_45742[(6)] = c__32582__auto___45743);

return statearr_45742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___45743,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28970__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v,ch);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45793 = arguments.length;
switch (G__45793) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28969__auto__ = (((p == null))?null:p);
var m__28970__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28969__auto__)]);
if(!((m__28970__auto__ == null))){
return m__28970__auto__.call(null,p,v);
} else {
var m__28970__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28970__auto____$1 == null))){
return m__28970__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45797 = arguments.length;
switch (G__45797) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28286__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28286__auto__)){
return or__28286__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28286__auto__,mults){
return (function (p1__45795_SHARP_){
if(cljs.core.truth_(p1__45795_SHARP_.call(null,topic))){
return p1__45795_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45795_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28286__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async45798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45798 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45799){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45799 = meta45799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45800,meta45799__$1){
var self__ = this;
var _45800__$1 = this;
return (new cljs.core.async.t_cljs$core$async45798(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45799__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45800){
var self__ = this;
var _45800__$1 = this;
return self__.meta45799;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45799","meta45799",1302055707,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45798.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45798.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45798";

cljs.core.async.t_cljs$core$async45798.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async45798");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async45798 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45799){
return (new cljs.core.async.t_cljs$core$async45798(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45799));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45798(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32582__auto___45918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___45918,mults,ensure_mult,p){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___45918,mults,ensure_mult,p){
return (function (state_45872){
var state_val_45873 = (state_45872[(1)]);
if((state_val_45873 === (7))){
var inst_45868 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45874_45919 = state_45872__$1;
(statearr_45874_45919[(2)] = inst_45868);

(statearr_45874_45919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (20))){
var state_45872__$1 = state_45872;
var statearr_45875_45920 = state_45872__$1;
(statearr_45875_45920[(2)] = null);

(statearr_45875_45920[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (1))){
var state_45872__$1 = state_45872;
var statearr_45876_45921 = state_45872__$1;
(statearr_45876_45921[(2)] = null);

(statearr_45876_45921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (24))){
var inst_45851 = (state_45872[(7)]);
var inst_45860 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45851);
var state_45872__$1 = state_45872;
var statearr_45877_45922 = state_45872__$1;
(statearr_45877_45922[(2)] = inst_45860);

(statearr_45877_45922[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (4))){
var inst_45803 = (state_45872[(8)]);
var inst_45803__$1 = (state_45872[(2)]);
var inst_45804 = (inst_45803__$1 == null);
var state_45872__$1 = (function (){var statearr_45878 = state_45872;
(statearr_45878[(8)] = inst_45803__$1);

return statearr_45878;
})();
if(cljs.core.truth_(inst_45804)){
var statearr_45879_45923 = state_45872__$1;
(statearr_45879_45923[(1)] = (5));

} else {
var statearr_45880_45924 = state_45872__$1;
(statearr_45880_45924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (15))){
var inst_45845 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45881_45925 = state_45872__$1;
(statearr_45881_45925[(2)] = inst_45845);

(statearr_45881_45925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (21))){
var inst_45865 = (state_45872[(2)]);
var state_45872__$1 = (function (){var statearr_45882 = state_45872;
(statearr_45882[(9)] = inst_45865);

return statearr_45882;
})();
var statearr_45883_45926 = state_45872__$1;
(statearr_45883_45926[(2)] = null);

(statearr_45883_45926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (13))){
var inst_45827 = (state_45872[(10)]);
var inst_45829 = cljs.core.chunked_seq_QMARK_.call(null,inst_45827);
var state_45872__$1 = state_45872;
if(inst_45829){
var statearr_45884_45927 = state_45872__$1;
(statearr_45884_45927[(1)] = (16));

} else {
var statearr_45885_45928 = state_45872__$1;
(statearr_45885_45928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (22))){
var inst_45857 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
if(cljs.core.truth_(inst_45857)){
var statearr_45886_45929 = state_45872__$1;
(statearr_45886_45929[(1)] = (23));

} else {
var statearr_45887_45930 = state_45872__$1;
(statearr_45887_45930[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (6))){
var inst_45853 = (state_45872[(11)]);
var inst_45851 = (state_45872[(7)]);
var inst_45803 = (state_45872[(8)]);
var inst_45851__$1 = topic_fn.call(null,inst_45803);
var inst_45852 = cljs.core.deref.call(null,mults);
var inst_45853__$1 = cljs.core.get.call(null,inst_45852,inst_45851__$1);
var state_45872__$1 = (function (){var statearr_45888 = state_45872;
(statearr_45888[(11)] = inst_45853__$1);

(statearr_45888[(7)] = inst_45851__$1);

return statearr_45888;
})();
if(cljs.core.truth_(inst_45853__$1)){
var statearr_45889_45931 = state_45872__$1;
(statearr_45889_45931[(1)] = (19));

} else {
var statearr_45890_45932 = state_45872__$1;
(statearr_45890_45932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (25))){
var inst_45862 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45891_45933 = state_45872__$1;
(statearr_45891_45933[(2)] = inst_45862);

(statearr_45891_45933[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (17))){
var inst_45827 = (state_45872[(10)]);
var inst_45836 = cljs.core.first.call(null,inst_45827);
var inst_45837 = cljs.core.async.muxch_STAR_.call(null,inst_45836);
var inst_45838 = cljs.core.async.close_BANG_.call(null,inst_45837);
var inst_45839 = cljs.core.next.call(null,inst_45827);
var inst_45813 = inst_45839;
var inst_45814 = null;
var inst_45815 = (0);
var inst_45816 = (0);
var state_45872__$1 = (function (){var statearr_45892 = state_45872;
(statearr_45892[(12)] = inst_45838);

(statearr_45892[(13)] = inst_45815);

(statearr_45892[(14)] = inst_45816);

(statearr_45892[(15)] = inst_45813);

(statearr_45892[(16)] = inst_45814);

return statearr_45892;
})();
var statearr_45893_45934 = state_45872__$1;
(statearr_45893_45934[(2)] = null);

(statearr_45893_45934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (3))){
var inst_45870 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45872__$1,inst_45870);
} else {
if((state_val_45873 === (12))){
var inst_45847 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45894_45935 = state_45872__$1;
(statearr_45894_45935[(2)] = inst_45847);

(statearr_45894_45935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (2))){
var state_45872__$1 = state_45872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45872__$1,(4),ch);
} else {
if((state_val_45873 === (23))){
var state_45872__$1 = state_45872;
var statearr_45895_45936 = state_45872__$1;
(statearr_45895_45936[(2)] = null);

(statearr_45895_45936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (19))){
var inst_45853 = (state_45872[(11)]);
var inst_45803 = (state_45872[(8)]);
var inst_45855 = cljs.core.async.muxch_STAR_.call(null,inst_45853);
var state_45872__$1 = state_45872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45872__$1,(22),inst_45855,inst_45803);
} else {
if((state_val_45873 === (11))){
var inst_45827 = (state_45872[(10)]);
var inst_45813 = (state_45872[(15)]);
var inst_45827__$1 = cljs.core.seq.call(null,inst_45813);
var state_45872__$1 = (function (){var statearr_45896 = state_45872;
(statearr_45896[(10)] = inst_45827__$1);

return statearr_45896;
})();
if(inst_45827__$1){
var statearr_45897_45937 = state_45872__$1;
(statearr_45897_45937[(1)] = (13));

} else {
var statearr_45898_45938 = state_45872__$1;
(statearr_45898_45938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (9))){
var inst_45849 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45899_45939 = state_45872__$1;
(statearr_45899_45939[(2)] = inst_45849);

(statearr_45899_45939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (5))){
var inst_45810 = cljs.core.deref.call(null,mults);
var inst_45811 = cljs.core.vals.call(null,inst_45810);
var inst_45812 = cljs.core.seq.call(null,inst_45811);
var inst_45813 = inst_45812;
var inst_45814 = null;
var inst_45815 = (0);
var inst_45816 = (0);
var state_45872__$1 = (function (){var statearr_45900 = state_45872;
(statearr_45900[(13)] = inst_45815);

(statearr_45900[(14)] = inst_45816);

(statearr_45900[(15)] = inst_45813);

(statearr_45900[(16)] = inst_45814);

return statearr_45900;
})();
var statearr_45901_45940 = state_45872__$1;
(statearr_45901_45940[(2)] = null);

(statearr_45901_45940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (14))){
var state_45872__$1 = state_45872;
var statearr_45905_45941 = state_45872__$1;
(statearr_45905_45941[(2)] = null);

(statearr_45905_45941[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (16))){
var inst_45827 = (state_45872[(10)]);
var inst_45831 = cljs.core.chunk_first.call(null,inst_45827);
var inst_45832 = cljs.core.chunk_rest.call(null,inst_45827);
var inst_45833 = cljs.core.count.call(null,inst_45831);
var inst_45813 = inst_45832;
var inst_45814 = inst_45831;
var inst_45815 = inst_45833;
var inst_45816 = (0);
var state_45872__$1 = (function (){var statearr_45906 = state_45872;
(statearr_45906[(13)] = inst_45815);

(statearr_45906[(14)] = inst_45816);

(statearr_45906[(15)] = inst_45813);

(statearr_45906[(16)] = inst_45814);

return statearr_45906;
})();
var statearr_45907_45942 = state_45872__$1;
(statearr_45907_45942[(2)] = null);

(statearr_45907_45942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (10))){
var inst_45815 = (state_45872[(13)]);
var inst_45816 = (state_45872[(14)]);
var inst_45813 = (state_45872[(15)]);
var inst_45814 = (state_45872[(16)]);
var inst_45821 = cljs.core._nth.call(null,inst_45814,inst_45816);
var inst_45822 = cljs.core.async.muxch_STAR_.call(null,inst_45821);
var inst_45823 = cljs.core.async.close_BANG_.call(null,inst_45822);
var inst_45824 = (inst_45816 + (1));
var tmp45902 = inst_45815;
var tmp45903 = inst_45813;
var tmp45904 = inst_45814;
var inst_45813__$1 = tmp45903;
var inst_45814__$1 = tmp45904;
var inst_45815__$1 = tmp45902;
var inst_45816__$1 = inst_45824;
var state_45872__$1 = (function (){var statearr_45908 = state_45872;
(statearr_45908[(17)] = inst_45823);

(statearr_45908[(13)] = inst_45815__$1);

(statearr_45908[(14)] = inst_45816__$1);

(statearr_45908[(15)] = inst_45813__$1);

(statearr_45908[(16)] = inst_45814__$1);

return statearr_45908;
})();
var statearr_45909_45943 = state_45872__$1;
(statearr_45909_45943[(2)] = null);

(statearr_45909_45943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (18))){
var inst_45842 = (state_45872[(2)]);
var state_45872__$1 = state_45872;
var statearr_45910_45944 = state_45872__$1;
(statearr_45910_45944[(2)] = inst_45842);

(statearr_45910_45944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45873 === (8))){
var inst_45815 = (state_45872[(13)]);
var inst_45816 = (state_45872[(14)]);
var inst_45818 = (inst_45816 < inst_45815);
var inst_45819 = inst_45818;
var state_45872__$1 = state_45872;
if(cljs.core.truth_(inst_45819)){
var statearr_45911_45945 = state_45872__$1;
(statearr_45911_45945[(1)] = (10));

} else {
var statearr_45912_45946 = state_45872__$1;
(statearr_45912_45946[(1)] = (11));

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
});})(c__32582__auto___45918,mults,ensure_mult,p))
;
return ((function (switch__32494__auto__,c__32582__auto___45918,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_45913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45913[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_45913[(1)] = (1));

return statearr_45913;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_45872){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e45914){if((e45914 instanceof Object)){
var ex__32498__auto__ = e45914;
var statearr_45915_45947 = state_45872;
(statearr_45915_45947[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45948 = state_45872;
state_45872 = G__45948;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_45872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_45872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___45918,mults,ensure_mult,p))
})();
var state__32584__auto__ = (function (){var statearr_45916 = f__32583__auto__.call(null);
(statearr_45916[(6)] = c__32582__auto___45918);

return statearr_45916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___45918,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45950 = arguments.length;
switch (G__45950) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45953 = arguments.length;
switch (G__45953) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45956 = arguments.length;
switch (G__45956) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32582__auto___46023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45995){
var state_val_45996 = (state_45995[(1)]);
if((state_val_45996 === (7))){
var state_45995__$1 = state_45995;
var statearr_45997_46024 = state_45995__$1;
(statearr_45997_46024[(2)] = null);

(statearr_45997_46024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (1))){
var state_45995__$1 = state_45995;
var statearr_45998_46025 = state_45995__$1;
(statearr_45998_46025[(2)] = null);

(statearr_45998_46025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (4))){
var inst_45959 = (state_45995[(7)]);
var inst_45961 = (inst_45959 < cnt);
var state_45995__$1 = state_45995;
if(cljs.core.truth_(inst_45961)){
var statearr_45999_46026 = state_45995__$1;
(statearr_45999_46026[(1)] = (6));

} else {
var statearr_46000_46027 = state_45995__$1;
(statearr_46000_46027[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (15))){
var inst_45991 = (state_45995[(2)]);
var state_45995__$1 = state_45995;
var statearr_46001_46028 = state_45995__$1;
(statearr_46001_46028[(2)] = inst_45991);

(statearr_46001_46028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (13))){
var inst_45984 = cljs.core.async.close_BANG_.call(null,out);
var state_45995__$1 = state_45995;
var statearr_46002_46029 = state_45995__$1;
(statearr_46002_46029[(2)] = inst_45984);

(statearr_46002_46029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (6))){
var state_45995__$1 = state_45995;
var statearr_46003_46030 = state_45995__$1;
(statearr_46003_46030[(2)] = null);

(statearr_46003_46030[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (3))){
var inst_45993 = (state_45995[(2)]);
var state_45995__$1 = state_45995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45995__$1,inst_45993);
} else {
if((state_val_45996 === (12))){
var inst_45981 = (state_45995[(8)]);
var inst_45981__$1 = (state_45995[(2)]);
var inst_45982 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45981__$1);
var state_45995__$1 = (function (){var statearr_46004 = state_45995;
(statearr_46004[(8)] = inst_45981__$1);

return statearr_46004;
})();
if(cljs.core.truth_(inst_45982)){
var statearr_46005_46031 = state_45995__$1;
(statearr_46005_46031[(1)] = (13));

} else {
var statearr_46006_46032 = state_45995__$1;
(statearr_46006_46032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (2))){
var inst_45958 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45959 = (0);
var state_45995__$1 = (function (){var statearr_46007 = state_45995;
(statearr_46007[(9)] = inst_45958);

(statearr_46007[(7)] = inst_45959);

return statearr_46007;
})();
var statearr_46008_46033 = state_45995__$1;
(statearr_46008_46033[(2)] = null);

(statearr_46008_46033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (11))){
var inst_45959 = (state_45995[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45995,(10),Object,null,(9));
var inst_45968 = chs__$1.call(null,inst_45959);
var inst_45969 = done.call(null,inst_45959);
var inst_45970 = cljs.core.async.take_BANG_.call(null,inst_45968,inst_45969);
var state_45995__$1 = state_45995;
var statearr_46009_46034 = state_45995__$1;
(statearr_46009_46034[(2)] = inst_45970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (9))){
var inst_45959 = (state_45995[(7)]);
var inst_45972 = (state_45995[(2)]);
var inst_45973 = (inst_45959 + (1));
var inst_45959__$1 = inst_45973;
var state_45995__$1 = (function (){var statearr_46010 = state_45995;
(statearr_46010[(10)] = inst_45972);

(statearr_46010[(7)] = inst_45959__$1);

return statearr_46010;
})();
var statearr_46011_46035 = state_45995__$1;
(statearr_46011_46035[(2)] = null);

(statearr_46011_46035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (5))){
var inst_45979 = (state_45995[(2)]);
var state_45995__$1 = (function (){var statearr_46012 = state_45995;
(statearr_46012[(11)] = inst_45979);

return statearr_46012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45995__$1,(12),dchan);
} else {
if((state_val_45996 === (14))){
var inst_45981 = (state_45995[(8)]);
var inst_45986 = cljs.core.apply.call(null,f,inst_45981);
var state_45995__$1 = state_45995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45995__$1,(16),out,inst_45986);
} else {
if((state_val_45996 === (16))){
var inst_45988 = (state_45995[(2)]);
var state_45995__$1 = (function (){var statearr_46013 = state_45995;
(statearr_46013[(12)] = inst_45988);

return statearr_46013;
})();
var statearr_46014_46036 = state_45995__$1;
(statearr_46014_46036[(2)] = null);

(statearr_46014_46036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (10))){
var inst_45963 = (state_45995[(2)]);
var inst_45964 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45995__$1 = (function (){var statearr_46015 = state_45995;
(statearr_46015[(13)] = inst_45963);

return statearr_46015;
})();
var statearr_46016_46037 = state_45995__$1;
(statearr_46016_46037[(2)] = inst_45964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45996 === (8))){
var inst_45977 = (state_45995[(2)]);
var state_45995__$1 = state_45995;
var statearr_46017_46038 = state_45995__$1;
(statearr_46017_46038[(2)] = inst_45977);

(statearr_46017_46038[(1)] = (5));


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
});})(c__32582__auto___46023,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32494__auto__,c__32582__auto___46023,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_46018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46018[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_46018[(1)] = (1));

return statearr_46018;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_45995){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_45995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46019){if((e46019 instanceof Object)){
var ex__32498__auto__ = e46019;
var statearr_46020_46039 = state_45995;
(statearr_46020_46039[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46040 = state_45995;
state_45995 = G__46040;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_45995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_45995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46023,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32584__auto__ = (function (){var statearr_46021 = f__32583__auto__.call(null);
(statearr_46021[(6)] = c__32582__auto___46023);

return statearr_46021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46023,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46043 = arguments.length;
switch (G__46043) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32582__auto___46097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46097,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46097,out){
return (function (state_46075){
var state_val_46076 = (state_46075[(1)]);
if((state_val_46076 === (7))){
var inst_46054 = (state_46075[(7)]);
var inst_46055 = (state_46075[(8)]);
var inst_46054__$1 = (state_46075[(2)]);
var inst_46055__$1 = cljs.core.nth.call(null,inst_46054__$1,(0),null);
var inst_46056 = cljs.core.nth.call(null,inst_46054__$1,(1),null);
var inst_46057 = (inst_46055__$1 == null);
var state_46075__$1 = (function (){var statearr_46077 = state_46075;
(statearr_46077[(7)] = inst_46054__$1);

(statearr_46077[(8)] = inst_46055__$1);

(statearr_46077[(9)] = inst_46056);

return statearr_46077;
})();
if(cljs.core.truth_(inst_46057)){
var statearr_46078_46098 = state_46075__$1;
(statearr_46078_46098[(1)] = (8));

} else {
var statearr_46079_46099 = state_46075__$1;
(statearr_46079_46099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46076 === (1))){
var inst_46044 = cljs.core.vec.call(null,chs);
var inst_46045 = inst_46044;
var state_46075__$1 = (function (){var statearr_46080 = state_46075;
(statearr_46080[(10)] = inst_46045);

return statearr_46080;
})();
var statearr_46081_46100 = state_46075__$1;
(statearr_46081_46100[(2)] = null);

(statearr_46081_46100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46076 === (4))){
var inst_46045 = (state_46075[(10)]);
var state_46075__$1 = state_46075;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46075__$1,(7),inst_46045);
} else {
if((state_val_46076 === (6))){
var inst_46071 = (state_46075[(2)]);
var state_46075__$1 = state_46075;
var statearr_46082_46101 = state_46075__$1;
(statearr_46082_46101[(2)] = inst_46071);

(statearr_46082_46101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46076 === (3))){
var inst_46073 = (state_46075[(2)]);
var state_46075__$1 = state_46075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46075__$1,inst_46073);
} else {
if((state_val_46076 === (2))){
var inst_46045 = (state_46075[(10)]);
var inst_46047 = cljs.core.count.call(null,inst_46045);
var inst_46048 = (inst_46047 > (0));
var state_46075__$1 = state_46075;
if(cljs.core.truth_(inst_46048)){
var statearr_46084_46102 = state_46075__$1;
(statearr_46084_46102[(1)] = (4));

} else {
var statearr_46085_46103 = state_46075__$1;
(statearr_46085_46103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46076 === (11))){
var inst_46045 = (state_46075[(10)]);
var inst_46064 = (state_46075[(2)]);
var tmp46083 = inst_46045;
var inst_46045__$1 = tmp46083;
var state_46075__$1 = (function (){var statearr_46086 = state_46075;
(statearr_46086[(11)] = inst_46064);

(statearr_46086[(10)] = inst_46045__$1);

return statearr_46086;
})();
var statearr_46087_46104 = state_46075__$1;
(statearr_46087_46104[(2)] = null);

(statearr_46087_46104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46076 === (9))){
var inst_46055 = (state_46075[(8)]);
var state_46075__$1 = state_46075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46075__$1,(11),out,inst_46055);
} else {
if((state_val_46076 === (5))){
var inst_46069 = cljs.core.async.close_BANG_.call(null,out);
var state_46075__$1 = state_46075;
var statearr_46088_46105 = state_46075__$1;
(statearr_46088_46105[(2)] = inst_46069);

(statearr_46088_46105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46076 === (10))){
var inst_46067 = (state_46075[(2)]);
var state_46075__$1 = state_46075;
var statearr_46089_46106 = state_46075__$1;
(statearr_46089_46106[(2)] = inst_46067);

(statearr_46089_46106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46076 === (8))){
var inst_46054 = (state_46075[(7)]);
var inst_46055 = (state_46075[(8)]);
var inst_46056 = (state_46075[(9)]);
var inst_46045 = (state_46075[(10)]);
var inst_46059 = (function (){var cs = inst_46045;
var vec__46050 = inst_46054;
var v = inst_46055;
var c = inst_46056;
return ((function (cs,vec__46050,v,c,inst_46054,inst_46055,inst_46056,inst_46045,state_val_46076,c__32582__auto___46097,out){
return (function (p1__46041_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46041_SHARP_);
});
;})(cs,vec__46050,v,c,inst_46054,inst_46055,inst_46056,inst_46045,state_val_46076,c__32582__auto___46097,out))
})();
var inst_46060 = cljs.core.filterv.call(null,inst_46059,inst_46045);
var inst_46045__$1 = inst_46060;
var state_46075__$1 = (function (){var statearr_46090 = state_46075;
(statearr_46090[(10)] = inst_46045__$1);

return statearr_46090;
})();
var statearr_46091_46107 = state_46075__$1;
(statearr_46091_46107[(2)] = null);

(statearr_46091_46107[(1)] = (2));


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
});})(c__32582__auto___46097,out))
;
return ((function (switch__32494__auto__,c__32582__auto___46097,out){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_46092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46092[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_46092[(1)] = (1));

return statearr_46092;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_46075){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46093){if((e46093 instanceof Object)){
var ex__32498__auto__ = e46093;
var statearr_46094_46108 = state_46075;
(statearr_46094_46108[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46109 = state_46075;
state_46075 = G__46109;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_46075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_46075);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46097,out))
})();
var state__32584__auto__ = (function (){var statearr_46095 = f__32583__auto__.call(null);
(statearr_46095[(6)] = c__32582__auto___46097);

return statearr_46095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46097,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46111 = arguments.length;
switch (G__46111) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32582__auto___46156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46156,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46156,out){
return (function (state_46135){
var state_val_46136 = (state_46135[(1)]);
if((state_val_46136 === (7))){
var inst_46117 = (state_46135[(7)]);
var inst_46117__$1 = (state_46135[(2)]);
var inst_46118 = (inst_46117__$1 == null);
var inst_46119 = cljs.core.not.call(null,inst_46118);
var state_46135__$1 = (function (){var statearr_46137 = state_46135;
(statearr_46137[(7)] = inst_46117__$1);

return statearr_46137;
})();
if(inst_46119){
var statearr_46138_46157 = state_46135__$1;
(statearr_46138_46157[(1)] = (8));

} else {
var statearr_46139_46158 = state_46135__$1;
(statearr_46139_46158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (1))){
var inst_46112 = (0);
var state_46135__$1 = (function (){var statearr_46140 = state_46135;
(statearr_46140[(8)] = inst_46112);

return statearr_46140;
})();
var statearr_46141_46159 = state_46135__$1;
(statearr_46141_46159[(2)] = null);

(statearr_46141_46159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (4))){
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46135__$1,(7),ch);
} else {
if((state_val_46136 === (6))){
var inst_46130 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46142_46160 = state_46135__$1;
(statearr_46142_46160[(2)] = inst_46130);

(statearr_46142_46160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (3))){
var inst_46132 = (state_46135[(2)]);
var inst_46133 = cljs.core.async.close_BANG_.call(null,out);
var state_46135__$1 = (function (){var statearr_46143 = state_46135;
(statearr_46143[(9)] = inst_46132);

return statearr_46143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46135__$1,inst_46133);
} else {
if((state_val_46136 === (2))){
var inst_46112 = (state_46135[(8)]);
var inst_46114 = (inst_46112 < n);
var state_46135__$1 = state_46135;
if(cljs.core.truth_(inst_46114)){
var statearr_46144_46161 = state_46135__$1;
(statearr_46144_46161[(1)] = (4));

} else {
var statearr_46145_46162 = state_46135__$1;
(statearr_46145_46162[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (11))){
var inst_46112 = (state_46135[(8)]);
var inst_46122 = (state_46135[(2)]);
var inst_46123 = (inst_46112 + (1));
var inst_46112__$1 = inst_46123;
var state_46135__$1 = (function (){var statearr_46146 = state_46135;
(statearr_46146[(8)] = inst_46112__$1);

(statearr_46146[(10)] = inst_46122);

return statearr_46146;
})();
var statearr_46147_46163 = state_46135__$1;
(statearr_46147_46163[(2)] = null);

(statearr_46147_46163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (9))){
var state_46135__$1 = state_46135;
var statearr_46148_46164 = state_46135__$1;
(statearr_46148_46164[(2)] = null);

(statearr_46148_46164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (5))){
var state_46135__$1 = state_46135;
var statearr_46149_46165 = state_46135__$1;
(statearr_46149_46165[(2)] = null);

(statearr_46149_46165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (10))){
var inst_46127 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46150_46166 = state_46135__$1;
(statearr_46150_46166[(2)] = inst_46127);

(statearr_46150_46166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (8))){
var inst_46117 = (state_46135[(7)]);
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46135__$1,(11),out,inst_46117);
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
});})(c__32582__auto___46156,out))
;
return ((function (switch__32494__auto__,c__32582__auto___46156,out){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_46151 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46151[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_46151[(1)] = (1));

return statearr_46151;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_46135){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46152){if((e46152 instanceof Object)){
var ex__32498__auto__ = e46152;
var statearr_46153_46167 = state_46135;
(statearr_46153_46167[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46168 = state_46135;
state_46135 = G__46168;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_46135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_46135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46156,out))
})();
var state__32584__auto__ = (function (){var statearr_46154 = f__32583__auto__.call(null);
(statearr_46154[(6)] = c__32582__auto___46156);

return statearr_46154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46156,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46170 = (function (f,ch,meta46171){
this.f = f;
this.ch = ch;
this.meta46171 = meta46171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46172,meta46171__$1){
var self__ = this;
var _46172__$1 = this;
return (new cljs.core.async.t_cljs$core$async46170(self__.f,self__.ch,meta46171__$1));
});

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46172){
var self__ = this;
var _46172__$1 = this;
return self__.meta46171;
});

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46173 = (function (f,ch,meta46171,_,fn1,meta46174){
this.f = f;
this.ch = ch;
this.meta46171 = meta46171;
this._ = _;
this.fn1 = fn1;
this.meta46174 = meta46174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46175,meta46174__$1){
var self__ = this;
var _46175__$1 = this;
return (new cljs.core.async.t_cljs$core$async46173(self__.f,self__.ch,self__.meta46171,self__._,self__.fn1,meta46174__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46175){
var self__ = this;
var _46175__$1 = this;
return self__.meta46174;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46169_SHARP_){
return f1.call(null,(((p1__46169_SHARP_ == null))?null:self__.f.call(null,p1__46169_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46173.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46171","meta46171",-737645579,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46170","cljs.core.async/t_cljs$core$async46170",-528249842,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46174","meta46174",1286638090,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46173";

cljs.core.async.t_cljs$core$async46173.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async46173");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46173 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46173(f__$1,ch__$1,meta46171__$1,___$2,fn1__$1,meta46174){
return (new cljs.core.async.t_cljs$core$async46173(f__$1,ch__$1,meta46171__$1,___$2,fn1__$1,meta46174));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46173(self__.f,self__.ch,self__.meta46171,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28274__auto__ = ret;
if(cljs.core.truth_(and__28274__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28274__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46171","meta46171",-737645579,null)], null);
});

cljs.core.async.t_cljs$core$async46170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46170";

cljs.core.async.t_cljs$core$async46170.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async46170");
});

cljs.core.async.__GT_t_cljs$core$async46170 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46170(f__$1,ch__$1,meta46171){
return (new cljs.core.async.t_cljs$core$async46170(f__$1,ch__$1,meta46171));
});

}

return (new cljs.core.async.t_cljs$core$async46170(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46176 = (function (f,ch,meta46177){
this.f = f;
this.ch = ch;
this.meta46177 = meta46177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46178,meta46177__$1){
var self__ = this;
var _46178__$1 = this;
return (new cljs.core.async.t_cljs$core$async46176(self__.f,self__.ch,meta46177__$1));
});

cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46178){
var self__ = this;
var _46178__$1 = this;
return self__.meta46177;
});

cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46177","meta46177",-1481726999,null)], null);
});

cljs.core.async.t_cljs$core$async46176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46176";

cljs.core.async.t_cljs$core$async46176.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async46176");
});

cljs.core.async.__GT_t_cljs$core$async46176 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46176(f__$1,ch__$1,meta46177){
return (new cljs.core.async.t_cljs$core$async46176(f__$1,ch__$1,meta46177));
});

}

return (new cljs.core.async.t_cljs$core$async46176(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46179 = (function (p,ch,meta46180){
this.p = p;
this.ch = ch;
this.meta46180 = meta46180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46181,meta46180__$1){
var self__ = this;
var _46181__$1 = this;
return (new cljs.core.async.t_cljs$core$async46179(self__.p,self__.ch,meta46180__$1));
});

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46181){
var self__ = this;
var _46181__$1 = this;
return self__.meta46180;
});

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46179.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46180","meta46180",2004052615,null)], null);
});

cljs.core.async.t_cljs$core$async46179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46179";

cljs.core.async.t_cljs$core$async46179.cljs$lang$ctorPrWriter = (function (this__28911__auto__,writer__28912__auto__,opt__28913__auto__){
return cljs.core._write.call(null,writer__28912__auto__,"cljs.core.async/t_cljs$core$async46179");
});

cljs.core.async.__GT_t_cljs$core$async46179 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46179(p__$1,ch__$1,meta46180){
return (new cljs.core.async.t_cljs$core$async46179(p__$1,ch__$1,meta46180));
});

}

return (new cljs.core.async.t_cljs$core$async46179(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46183 = arguments.length;
switch (G__46183) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32582__auto___46223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46223,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46223,out){
return (function (state_46204){
var state_val_46205 = (state_46204[(1)]);
if((state_val_46205 === (7))){
var inst_46200 = (state_46204[(2)]);
var state_46204__$1 = state_46204;
var statearr_46206_46224 = state_46204__$1;
(statearr_46206_46224[(2)] = inst_46200);

(statearr_46206_46224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (1))){
var state_46204__$1 = state_46204;
var statearr_46207_46225 = state_46204__$1;
(statearr_46207_46225[(2)] = null);

(statearr_46207_46225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (4))){
var inst_46186 = (state_46204[(7)]);
var inst_46186__$1 = (state_46204[(2)]);
var inst_46187 = (inst_46186__$1 == null);
var state_46204__$1 = (function (){var statearr_46208 = state_46204;
(statearr_46208[(7)] = inst_46186__$1);

return statearr_46208;
})();
if(cljs.core.truth_(inst_46187)){
var statearr_46209_46226 = state_46204__$1;
(statearr_46209_46226[(1)] = (5));

} else {
var statearr_46210_46227 = state_46204__$1;
(statearr_46210_46227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (6))){
var inst_46186 = (state_46204[(7)]);
var inst_46191 = p.call(null,inst_46186);
var state_46204__$1 = state_46204;
if(cljs.core.truth_(inst_46191)){
var statearr_46211_46228 = state_46204__$1;
(statearr_46211_46228[(1)] = (8));

} else {
var statearr_46212_46229 = state_46204__$1;
(statearr_46212_46229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (3))){
var inst_46202 = (state_46204[(2)]);
var state_46204__$1 = state_46204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46204__$1,inst_46202);
} else {
if((state_val_46205 === (2))){
var state_46204__$1 = state_46204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46204__$1,(4),ch);
} else {
if((state_val_46205 === (11))){
var inst_46194 = (state_46204[(2)]);
var state_46204__$1 = state_46204;
var statearr_46213_46230 = state_46204__$1;
(statearr_46213_46230[(2)] = inst_46194);

(statearr_46213_46230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (9))){
var state_46204__$1 = state_46204;
var statearr_46214_46231 = state_46204__$1;
(statearr_46214_46231[(2)] = null);

(statearr_46214_46231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (5))){
var inst_46189 = cljs.core.async.close_BANG_.call(null,out);
var state_46204__$1 = state_46204;
var statearr_46215_46232 = state_46204__$1;
(statearr_46215_46232[(2)] = inst_46189);

(statearr_46215_46232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (10))){
var inst_46197 = (state_46204[(2)]);
var state_46204__$1 = (function (){var statearr_46216 = state_46204;
(statearr_46216[(8)] = inst_46197);

return statearr_46216;
})();
var statearr_46217_46233 = state_46204__$1;
(statearr_46217_46233[(2)] = null);

(statearr_46217_46233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46205 === (8))){
var inst_46186 = (state_46204[(7)]);
var state_46204__$1 = state_46204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46204__$1,(11),out,inst_46186);
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
});})(c__32582__auto___46223,out))
;
return ((function (switch__32494__auto__,c__32582__auto___46223,out){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_46218 = [null,null,null,null,null,null,null,null,null];
(statearr_46218[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_46218[(1)] = (1));

return statearr_46218;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_46204){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46219){if((e46219 instanceof Object)){
var ex__32498__auto__ = e46219;
var statearr_46220_46234 = state_46204;
(statearr_46220_46234[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46235 = state_46204;
state_46204 = G__46235;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_46204){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_46204);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46223,out))
})();
var state__32584__auto__ = (function (){var statearr_46221 = f__32583__auto__.call(null);
(statearr_46221[(6)] = c__32582__auto___46223);

return statearr_46221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46223,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46237 = arguments.length;
switch (G__46237) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32582__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto__){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto__){
return (function (state_46300){
var state_val_46301 = (state_46300[(1)]);
if((state_val_46301 === (7))){
var inst_46296 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
var statearr_46302_46340 = state_46300__$1;
(statearr_46302_46340[(2)] = inst_46296);

(statearr_46302_46340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (20))){
var inst_46266 = (state_46300[(7)]);
var inst_46277 = (state_46300[(2)]);
var inst_46278 = cljs.core.next.call(null,inst_46266);
var inst_46252 = inst_46278;
var inst_46253 = null;
var inst_46254 = (0);
var inst_46255 = (0);
var state_46300__$1 = (function (){var statearr_46303 = state_46300;
(statearr_46303[(8)] = inst_46253);

(statearr_46303[(9)] = inst_46252);

(statearr_46303[(10)] = inst_46254);

(statearr_46303[(11)] = inst_46255);

(statearr_46303[(12)] = inst_46277);

return statearr_46303;
})();
var statearr_46304_46341 = state_46300__$1;
(statearr_46304_46341[(2)] = null);

(statearr_46304_46341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (1))){
var state_46300__$1 = state_46300;
var statearr_46305_46342 = state_46300__$1;
(statearr_46305_46342[(2)] = null);

(statearr_46305_46342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (4))){
var inst_46241 = (state_46300[(13)]);
var inst_46241__$1 = (state_46300[(2)]);
var inst_46242 = (inst_46241__$1 == null);
var state_46300__$1 = (function (){var statearr_46306 = state_46300;
(statearr_46306[(13)] = inst_46241__$1);

return statearr_46306;
})();
if(cljs.core.truth_(inst_46242)){
var statearr_46307_46343 = state_46300__$1;
(statearr_46307_46343[(1)] = (5));

} else {
var statearr_46308_46344 = state_46300__$1;
(statearr_46308_46344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (15))){
var state_46300__$1 = state_46300;
var statearr_46312_46345 = state_46300__$1;
(statearr_46312_46345[(2)] = null);

(statearr_46312_46345[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (21))){
var state_46300__$1 = state_46300;
var statearr_46313_46346 = state_46300__$1;
(statearr_46313_46346[(2)] = null);

(statearr_46313_46346[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (13))){
var inst_46253 = (state_46300[(8)]);
var inst_46252 = (state_46300[(9)]);
var inst_46254 = (state_46300[(10)]);
var inst_46255 = (state_46300[(11)]);
var inst_46262 = (state_46300[(2)]);
var inst_46263 = (inst_46255 + (1));
var tmp46309 = inst_46253;
var tmp46310 = inst_46252;
var tmp46311 = inst_46254;
var inst_46252__$1 = tmp46310;
var inst_46253__$1 = tmp46309;
var inst_46254__$1 = tmp46311;
var inst_46255__$1 = inst_46263;
var state_46300__$1 = (function (){var statearr_46314 = state_46300;
(statearr_46314[(14)] = inst_46262);

(statearr_46314[(8)] = inst_46253__$1);

(statearr_46314[(9)] = inst_46252__$1);

(statearr_46314[(10)] = inst_46254__$1);

(statearr_46314[(11)] = inst_46255__$1);

return statearr_46314;
})();
var statearr_46315_46347 = state_46300__$1;
(statearr_46315_46347[(2)] = null);

(statearr_46315_46347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (22))){
var state_46300__$1 = state_46300;
var statearr_46316_46348 = state_46300__$1;
(statearr_46316_46348[(2)] = null);

(statearr_46316_46348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (6))){
var inst_46241 = (state_46300[(13)]);
var inst_46250 = f.call(null,inst_46241);
var inst_46251 = cljs.core.seq.call(null,inst_46250);
var inst_46252 = inst_46251;
var inst_46253 = null;
var inst_46254 = (0);
var inst_46255 = (0);
var state_46300__$1 = (function (){var statearr_46317 = state_46300;
(statearr_46317[(8)] = inst_46253);

(statearr_46317[(9)] = inst_46252);

(statearr_46317[(10)] = inst_46254);

(statearr_46317[(11)] = inst_46255);

return statearr_46317;
})();
var statearr_46318_46349 = state_46300__$1;
(statearr_46318_46349[(2)] = null);

(statearr_46318_46349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (17))){
var inst_46266 = (state_46300[(7)]);
var inst_46270 = cljs.core.chunk_first.call(null,inst_46266);
var inst_46271 = cljs.core.chunk_rest.call(null,inst_46266);
var inst_46272 = cljs.core.count.call(null,inst_46270);
var inst_46252 = inst_46271;
var inst_46253 = inst_46270;
var inst_46254 = inst_46272;
var inst_46255 = (0);
var state_46300__$1 = (function (){var statearr_46319 = state_46300;
(statearr_46319[(8)] = inst_46253);

(statearr_46319[(9)] = inst_46252);

(statearr_46319[(10)] = inst_46254);

(statearr_46319[(11)] = inst_46255);

return statearr_46319;
})();
var statearr_46320_46350 = state_46300__$1;
(statearr_46320_46350[(2)] = null);

(statearr_46320_46350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (3))){
var inst_46298 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46300__$1,inst_46298);
} else {
if((state_val_46301 === (12))){
var inst_46286 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
var statearr_46321_46351 = state_46300__$1;
(statearr_46321_46351[(2)] = inst_46286);

(statearr_46321_46351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (2))){
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46300__$1,(4),in$);
} else {
if((state_val_46301 === (23))){
var inst_46294 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
var statearr_46322_46352 = state_46300__$1;
(statearr_46322_46352[(2)] = inst_46294);

(statearr_46322_46352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (19))){
var inst_46281 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
var statearr_46323_46353 = state_46300__$1;
(statearr_46323_46353[(2)] = inst_46281);

(statearr_46323_46353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (11))){
var inst_46252 = (state_46300[(9)]);
var inst_46266 = (state_46300[(7)]);
var inst_46266__$1 = cljs.core.seq.call(null,inst_46252);
var state_46300__$1 = (function (){var statearr_46324 = state_46300;
(statearr_46324[(7)] = inst_46266__$1);

return statearr_46324;
})();
if(inst_46266__$1){
var statearr_46325_46354 = state_46300__$1;
(statearr_46325_46354[(1)] = (14));

} else {
var statearr_46326_46355 = state_46300__$1;
(statearr_46326_46355[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (9))){
var inst_46288 = (state_46300[(2)]);
var inst_46289 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46300__$1 = (function (){var statearr_46327 = state_46300;
(statearr_46327[(15)] = inst_46288);

return statearr_46327;
})();
if(cljs.core.truth_(inst_46289)){
var statearr_46328_46356 = state_46300__$1;
(statearr_46328_46356[(1)] = (21));

} else {
var statearr_46329_46357 = state_46300__$1;
(statearr_46329_46357[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (5))){
var inst_46244 = cljs.core.async.close_BANG_.call(null,out);
var state_46300__$1 = state_46300;
var statearr_46330_46358 = state_46300__$1;
(statearr_46330_46358[(2)] = inst_46244);

(statearr_46330_46358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (14))){
var inst_46266 = (state_46300[(7)]);
var inst_46268 = cljs.core.chunked_seq_QMARK_.call(null,inst_46266);
var state_46300__$1 = state_46300;
if(inst_46268){
var statearr_46331_46359 = state_46300__$1;
(statearr_46331_46359[(1)] = (17));

} else {
var statearr_46332_46360 = state_46300__$1;
(statearr_46332_46360[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (16))){
var inst_46284 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
var statearr_46333_46361 = state_46300__$1;
(statearr_46333_46361[(2)] = inst_46284);

(statearr_46333_46361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (10))){
var inst_46253 = (state_46300[(8)]);
var inst_46255 = (state_46300[(11)]);
var inst_46260 = cljs.core._nth.call(null,inst_46253,inst_46255);
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46300__$1,(13),out,inst_46260);
} else {
if((state_val_46301 === (18))){
var inst_46266 = (state_46300[(7)]);
var inst_46275 = cljs.core.first.call(null,inst_46266);
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46300__$1,(20),out,inst_46275);
} else {
if((state_val_46301 === (8))){
var inst_46254 = (state_46300[(10)]);
var inst_46255 = (state_46300[(11)]);
var inst_46257 = (inst_46255 < inst_46254);
var inst_46258 = inst_46257;
var state_46300__$1 = state_46300;
if(cljs.core.truth_(inst_46258)){
var statearr_46334_46362 = state_46300__$1;
(statearr_46334_46362[(1)] = (10));

} else {
var statearr_46335_46363 = state_46300__$1;
(statearr_46335_46363[(1)] = (11));

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
});})(c__32582__auto__))
;
return ((function (switch__32494__auto__,c__32582__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32495__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32495__auto____0 = (function (){
var statearr_46336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46336[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32495__auto__);

(statearr_46336[(1)] = (1));

return statearr_46336;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32495__auto____1 = (function (state_46300){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46337){if((e46337 instanceof Object)){
var ex__32498__auto__ = e46337;
var statearr_46338_46364 = state_46300;
(statearr_46338_46364[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46365 = state_46300;
state_46300 = G__46365;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32495__auto__ = function(state_46300){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32495__auto____1.call(this,state_46300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32495__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32495__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto__))
})();
var state__32584__auto__ = (function (){var statearr_46339 = f__32583__auto__.call(null);
(statearr_46339[(6)] = c__32582__auto__);

return statearr_46339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto__))
);

return c__32582__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46367 = arguments.length;
switch (G__46367) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46370 = arguments.length;
switch (G__46370) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46373 = arguments.length;
switch (G__46373) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32582__auto___46420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46420,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46420,out){
return (function (state_46397){
var state_val_46398 = (state_46397[(1)]);
if((state_val_46398 === (7))){
var inst_46392 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46399_46421 = state_46397__$1;
(statearr_46399_46421[(2)] = inst_46392);

(statearr_46399_46421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (1))){
var inst_46374 = null;
var state_46397__$1 = (function (){var statearr_46400 = state_46397;
(statearr_46400[(7)] = inst_46374);

return statearr_46400;
})();
var statearr_46401_46422 = state_46397__$1;
(statearr_46401_46422[(2)] = null);

(statearr_46401_46422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (4))){
var inst_46377 = (state_46397[(8)]);
var inst_46377__$1 = (state_46397[(2)]);
var inst_46378 = (inst_46377__$1 == null);
var inst_46379 = cljs.core.not.call(null,inst_46378);
var state_46397__$1 = (function (){var statearr_46402 = state_46397;
(statearr_46402[(8)] = inst_46377__$1);

return statearr_46402;
})();
if(inst_46379){
var statearr_46403_46423 = state_46397__$1;
(statearr_46403_46423[(1)] = (5));

} else {
var statearr_46404_46424 = state_46397__$1;
(statearr_46404_46424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (6))){
var state_46397__$1 = state_46397;
var statearr_46405_46425 = state_46397__$1;
(statearr_46405_46425[(2)] = null);

(statearr_46405_46425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (3))){
var inst_46394 = (state_46397[(2)]);
var inst_46395 = cljs.core.async.close_BANG_.call(null,out);
var state_46397__$1 = (function (){var statearr_46406 = state_46397;
(statearr_46406[(9)] = inst_46394);

return statearr_46406;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46397__$1,inst_46395);
} else {
if((state_val_46398 === (2))){
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46397__$1,(4),ch);
} else {
if((state_val_46398 === (11))){
var inst_46377 = (state_46397[(8)]);
var inst_46386 = (state_46397[(2)]);
var inst_46374 = inst_46377;
var state_46397__$1 = (function (){var statearr_46407 = state_46397;
(statearr_46407[(7)] = inst_46374);

(statearr_46407[(10)] = inst_46386);

return statearr_46407;
})();
var statearr_46408_46426 = state_46397__$1;
(statearr_46408_46426[(2)] = null);

(statearr_46408_46426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (9))){
var inst_46377 = (state_46397[(8)]);
var state_46397__$1 = state_46397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46397__$1,(11),out,inst_46377);
} else {
if((state_val_46398 === (5))){
var inst_46374 = (state_46397[(7)]);
var inst_46377 = (state_46397[(8)]);
var inst_46381 = cljs.core._EQ_.call(null,inst_46377,inst_46374);
var state_46397__$1 = state_46397;
if(inst_46381){
var statearr_46410_46427 = state_46397__$1;
(statearr_46410_46427[(1)] = (8));

} else {
var statearr_46411_46428 = state_46397__$1;
(statearr_46411_46428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (10))){
var inst_46389 = (state_46397[(2)]);
var state_46397__$1 = state_46397;
var statearr_46412_46429 = state_46397__$1;
(statearr_46412_46429[(2)] = inst_46389);

(statearr_46412_46429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46398 === (8))){
var inst_46374 = (state_46397[(7)]);
var tmp46409 = inst_46374;
var inst_46374__$1 = tmp46409;
var state_46397__$1 = (function (){var statearr_46413 = state_46397;
(statearr_46413[(7)] = inst_46374__$1);

return statearr_46413;
})();
var statearr_46414_46430 = state_46397__$1;
(statearr_46414_46430[(2)] = null);

(statearr_46414_46430[(1)] = (2));


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
});})(c__32582__auto___46420,out))
;
return ((function (switch__32494__auto__,c__32582__auto___46420,out){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_46415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46415[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_46415[(1)] = (1));

return statearr_46415;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_46397){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46416){if((e46416 instanceof Object)){
var ex__32498__auto__ = e46416;
var statearr_46417_46431 = state_46397;
(statearr_46417_46431[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46432 = state_46397;
state_46397 = G__46432;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_46397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_46397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46420,out))
})();
var state__32584__auto__ = (function (){var statearr_46418 = f__32583__auto__.call(null);
(statearr_46418[(6)] = c__32582__auto___46420);

return statearr_46418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46420,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46434 = arguments.length;
switch (G__46434) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32582__auto___46500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46500,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46500,out){
return (function (state_46472){
var state_val_46473 = (state_46472[(1)]);
if((state_val_46473 === (7))){
var inst_46468 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
var statearr_46474_46501 = state_46472__$1;
(statearr_46474_46501[(2)] = inst_46468);

(statearr_46474_46501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (1))){
var inst_46435 = (new Array(n));
var inst_46436 = inst_46435;
var inst_46437 = (0);
var state_46472__$1 = (function (){var statearr_46475 = state_46472;
(statearr_46475[(7)] = inst_46437);

(statearr_46475[(8)] = inst_46436);

return statearr_46475;
})();
var statearr_46476_46502 = state_46472__$1;
(statearr_46476_46502[(2)] = null);

(statearr_46476_46502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (4))){
var inst_46440 = (state_46472[(9)]);
var inst_46440__$1 = (state_46472[(2)]);
var inst_46441 = (inst_46440__$1 == null);
var inst_46442 = cljs.core.not.call(null,inst_46441);
var state_46472__$1 = (function (){var statearr_46477 = state_46472;
(statearr_46477[(9)] = inst_46440__$1);

return statearr_46477;
})();
if(inst_46442){
var statearr_46478_46503 = state_46472__$1;
(statearr_46478_46503[(1)] = (5));

} else {
var statearr_46479_46504 = state_46472__$1;
(statearr_46479_46504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (15))){
var inst_46462 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
var statearr_46480_46505 = state_46472__$1;
(statearr_46480_46505[(2)] = inst_46462);

(statearr_46480_46505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (13))){
var state_46472__$1 = state_46472;
var statearr_46481_46506 = state_46472__$1;
(statearr_46481_46506[(2)] = null);

(statearr_46481_46506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (6))){
var inst_46437 = (state_46472[(7)]);
var inst_46458 = (inst_46437 > (0));
var state_46472__$1 = state_46472;
if(cljs.core.truth_(inst_46458)){
var statearr_46482_46507 = state_46472__$1;
(statearr_46482_46507[(1)] = (12));

} else {
var statearr_46483_46508 = state_46472__$1;
(statearr_46483_46508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (3))){
var inst_46470 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46472__$1,inst_46470);
} else {
if((state_val_46473 === (12))){
var inst_46436 = (state_46472[(8)]);
var inst_46460 = cljs.core.vec.call(null,inst_46436);
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46472__$1,(15),out,inst_46460);
} else {
if((state_val_46473 === (2))){
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46472__$1,(4),ch);
} else {
if((state_val_46473 === (11))){
var inst_46452 = (state_46472[(2)]);
var inst_46453 = (new Array(n));
var inst_46436 = inst_46453;
var inst_46437 = (0);
var state_46472__$1 = (function (){var statearr_46484 = state_46472;
(statearr_46484[(7)] = inst_46437);

(statearr_46484[(8)] = inst_46436);

(statearr_46484[(10)] = inst_46452);

return statearr_46484;
})();
var statearr_46485_46509 = state_46472__$1;
(statearr_46485_46509[(2)] = null);

(statearr_46485_46509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (9))){
var inst_46436 = (state_46472[(8)]);
var inst_46450 = cljs.core.vec.call(null,inst_46436);
var state_46472__$1 = state_46472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46472__$1,(11),out,inst_46450);
} else {
if((state_val_46473 === (5))){
var inst_46445 = (state_46472[(11)]);
var inst_46440 = (state_46472[(9)]);
var inst_46437 = (state_46472[(7)]);
var inst_46436 = (state_46472[(8)]);
var inst_46444 = (inst_46436[inst_46437] = inst_46440);
var inst_46445__$1 = (inst_46437 + (1));
var inst_46446 = (inst_46445__$1 < n);
var state_46472__$1 = (function (){var statearr_46486 = state_46472;
(statearr_46486[(11)] = inst_46445__$1);

(statearr_46486[(12)] = inst_46444);

return statearr_46486;
})();
if(cljs.core.truth_(inst_46446)){
var statearr_46487_46510 = state_46472__$1;
(statearr_46487_46510[(1)] = (8));

} else {
var statearr_46488_46511 = state_46472__$1;
(statearr_46488_46511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (14))){
var inst_46465 = (state_46472[(2)]);
var inst_46466 = cljs.core.async.close_BANG_.call(null,out);
var state_46472__$1 = (function (){var statearr_46490 = state_46472;
(statearr_46490[(13)] = inst_46465);

return statearr_46490;
})();
var statearr_46491_46512 = state_46472__$1;
(statearr_46491_46512[(2)] = inst_46466);

(statearr_46491_46512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (10))){
var inst_46456 = (state_46472[(2)]);
var state_46472__$1 = state_46472;
var statearr_46492_46513 = state_46472__$1;
(statearr_46492_46513[(2)] = inst_46456);

(statearr_46492_46513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46473 === (8))){
var inst_46445 = (state_46472[(11)]);
var inst_46436 = (state_46472[(8)]);
var tmp46489 = inst_46436;
var inst_46436__$1 = tmp46489;
var inst_46437 = inst_46445;
var state_46472__$1 = (function (){var statearr_46493 = state_46472;
(statearr_46493[(7)] = inst_46437);

(statearr_46493[(8)] = inst_46436__$1);

return statearr_46493;
})();
var statearr_46494_46514 = state_46472__$1;
(statearr_46494_46514[(2)] = null);

(statearr_46494_46514[(1)] = (2));


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
});})(c__32582__auto___46500,out))
;
return ((function (switch__32494__auto__,c__32582__auto___46500,out){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_46495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46495[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_46495[(1)] = (1));

return statearr_46495;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_46472){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46496){if((e46496 instanceof Object)){
var ex__32498__auto__ = e46496;
var statearr_46497_46515 = state_46472;
(statearr_46497_46515[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46516 = state_46472;
state_46472 = G__46516;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_46472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_46472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46500,out))
})();
var state__32584__auto__ = (function (){var statearr_46498 = f__32583__auto__.call(null);
(statearr_46498[(6)] = c__32582__auto___46500);

return statearr_46498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46500,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46518 = arguments.length;
switch (G__46518) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32582__auto___46588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32582__auto___46588,out){
return (function (){
var f__32583__auto__ = (function (){var switch__32494__auto__ = ((function (c__32582__auto___46588,out){
return (function (state_46560){
var state_val_46561 = (state_46560[(1)]);
if((state_val_46561 === (7))){
var inst_46556 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46562_46589 = state_46560__$1;
(statearr_46562_46589[(2)] = inst_46556);

(statearr_46562_46589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (1))){
var inst_46519 = [];
var inst_46520 = inst_46519;
var inst_46521 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46560__$1 = (function (){var statearr_46563 = state_46560;
(statearr_46563[(7)] = inst_46521);

(statearr_46563[(8)] = inst_46520);

return statearr_46563;
})();
var statearr_46564_46590 = state_46560__$1;
(statearr_46564_46590[(2)] = null);

(statearr_46564_46590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (4))){
var inst_46524 = (state_46560[(9)]);
var inst_46524__$1 = (state_46560[(2)]);
var inst_46525 = (inst_46524__$1 == null);
var inst_46526 = cljs.core.not.call(null,inst_46525);
var state_46560__$1 = (function (){var statearr_46565 = state_46560;
(statearr_46565[(9)] = inst_46524__$1);

return statearr_46565;
})();
if(inst_46526){
var statearr_46566_46591 = state_46560__$1;
(statearr_46566_46591[(1)] = (5));

} else {
var statearr_46567_46592 = state_46560__$1;
(statearr_46567_46592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (15))){
var inst_46550 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46568_46593 = state_46560__$1;
(statearr_46568_46593[(2)] = inst_46550);

(statearr_46568_46593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (13))){
var state_46560__$1 = state_46560;
var statearr_46569_46594 = state_46560__$1;
(statearr_46569_46594[(2)] = null);

(statearr_46569_46594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (6))){
var inst_46520 = (state_46560[(8)]);
var inst_46545 = inst_46520.length;
var inst_46546 = (inst_46545 > (0));
var state_46560__$1 = state_46560;
if(cljs.core.truth_(inst_46546)){
var statearr_46570_46595 = state_46560__$1;
(statearr_46570_46595[(1)] = (12));

} else {
var statearr_46571_46596 = state_46560__$1;
(statearr_46571_46596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (3))){
var inst_46558 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46560__$1,inst_46558);
} else {
if((state_val_46561 === (12))){
var inst_46520 = (state_46560[(8)]);
var inst_46548 = cljs.core.vec.call(null,inst_46520);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46560__$1,(15),out,inst_46548);
} else {
if((state_val_46561 === (2))){
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46560__$1,(4),ch);
} else {
if((state_val_46561 === (11))){
var inst_46524 = (state_46560[(9)]);
var inst_46528 = (state_46560[(10)]);
var inst_46538 = (state_46560[(2)]);
var inst_46539 = [];
var inst_46540 = inst_46539.push(inst_46524);
var inst_46520 = inst_46539;
var inst_46521 = inst_46528;
var state_46560__$1 = (function (){var statearr_46572 = state_46560;
(statearr_46572[(11)] = inst_46540);

(statearr_46572[(7)] = inst_46521);

(statearr_46572[(12)] = inst_46538);

(statearr_46572[(8)] = inst_46520);

return statearr_46572;
})();
var statearr_46573_46597 = state_46560__$1;
(statearr_46573_46597[(2)] = null);

(statearr_46573_46597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (9))){
var inst_46520 = (state_46560[(8)]);
var inst_46536 = cljs.core.vec.call(null,inst_46520);
var state_46560__$1 = state_46560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46560__$1,(11),out,inst_46536);
} else {
if((state_val_46561 === (5))){
var inst_46524 = (state_46560[(9)]);
var inst_46521 = (state_46560[(7)]);
var inst_46528 = (state_46560[(10)]);
var inst_46528__$1 = f.call(null,inst_46524);
var inst_46529 = cljs.core._EQ_.call(null,inst_46528__$1,inst_46521);
var inst_46530 = cljs.core.keyword_identical_QMARK_.call(null,inst_46521,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46531 = (inst_46529) || (inst_46530);
var state_46560__$1 = (function (){var statearr_46574 = state_46560;
(statearr_46574[(10)] = inst_46528__$1);

return statearr_46574;
})();
if(cljs.core.truth_(inst_46531)){
var statearr_46575_46598 = state_46560__$1;
(statearr_46575_46598[(1)] = (8));

} else {
var statearr_46576_46599 = state_46560__$1;
(statearr_46576_46599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (14))){
var inst_46553 = (state_46560[(2)]);
var inst_46554 = cljs.core.async.close_BANG_.call(null,out);
var state_46560__$1 = (function (){var statearr_46578 = state_46560;
(statearr_46578[(13)] = inst_46553);

return statearr_46578;
})();
var statearr_46579_46600 = state_46560__$1;
(statearr_46579_46600[(2)] = inst_46554);

(statearr_46579_46600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (10))){
var inst_46543 = (state_46560[(2)]);
var state_46560__$1 = state_46560;
var statearr_46580_46601 = state_46560__$1;
(statearr_46580_46601[(2)] = inst_46543);

(statearr_46580_46601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46561 === (8))){
var inst_46524 = (state_46560[(9)]);
var inst_46528 = (state_46560[(10)]);
var inst_46520 = (state_46560[(8)]);
var inst_46533 = inst_46520.push(inst_46524);
var tmp46577 = inst_46520;
var inst_46520__$1 = tmp46577;
var inst_46521 = inst_46528;
var state_46560__$1 = (function (){var statearr_46581 = state_46560;
(statearr_46581[(7)] = inst_46521);

(statearr_46581[(8)] = inst_46520__$1);

(statearr_46581[(14)] = inst_46533);

return statearr_46581;
})();
var statearr_46582_46602 = state_46560__$1;
(statearr_46582_46602[(2)] = null);

(statearr_46582_46602[(1)] = (2));


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
});})(c__32582__auto___46588,out))
;
return ((function (switch__32494__auto__,c__32582__auto___46588,out){
return (function() {
var cljs$core$async$state_machine__32495__auto__ = null;
var cljs$core$async$state_machine__32495__auto____0 = (function (){
var statearr_46583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46583[(0)] = cljs$core$async$state_machine__32495__auto__);

(statearr_46583[(1)] = (1));

return statearr_46583;
});
var cljs$core$async$state_machine__32495__auto____1 = (function (state_46560){
while(true){
var ret_value__32496__auto__ = (function (){try{while(true){
var result__32497__auto__ = switch__32494__auto__.call(null,state_46560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32497__auto__;
}
break;
}
}catch (e46584){if((e46584 instanceof Object)){
var ex__32498__auto__ = e46584;
var statearr_46585_46603 = state_46560;
(statearr_46585_46603[(5)] = ex__32498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46604 = state_46560;
state_46560 = G__46604;
continue;
} else {
return ret_value__32496__auto__;
}
break;
}
});
cljs$core$async$state_machine__32495__auto__ = function(state_46560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32495__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32495__auto____1.call(this,state_46560);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32495__auto____0;
cljs$core$async$state_machine__32495__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32495__auto____1;
return cljs$core$async$state_machine__32495__auto__;
})()
;})(switch__32494__auto__,c__32582__auto___46588,out))
})();
var state__32584__auto__ = (function (){var statearr_46586 = f__32583__auto__.call(null);
(statearr_46586[(6)] = c__32582__auto___46588);

return statearr_46586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32584__auto__);
});})(c__32582__auto___46588,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1517200935311
