// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11482__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11483__i = 0, G__11483__a = new Array(arguments.length -  0);
while (G__11483__i < G__11483__a.length) {G__11483__a[G__11483__i] = arguments[G__11483__i + 0]; ++G__11483__i;}
  args = new cljs.core.IndexedSeq(G__11483__a,0,null);
} 
return G__11482__delegate.call(this,args);};
G__11482.cljs$lang$maxFixedArity = 0;
G__11482.cljs$lang$applyTo = (function (arglist__11484){
var args = cljs.core.seq(arglist__11484);
return G__11482__delegate(args);
});
G__11482.cljs$core$IFn$_invoke$arity$variadic = G__11482__delegate;
return G__11482;
})()
);

(o.error = (function() { 
var G__11485__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11486__i = 0, G__11486__a = new Array(arguments.length -  0);
while (G__11486__i < G__11486__a.length) {G__11486__a[G__11486__i] = arguments[G__11486__i + 0]; ++G__11486__i;}
  args = new cljs.core.IndexedSeq(G__11486__a,0,null);
} 
return G__11485__delegate.call(this,args);};
G__11485.cljs$lang$maxFixedArity = 0;
G__11485.cljs$lang$applyTo = (function (arglist__11487){
var args = cljs.core.seq(arglist__11487);
return G__11485__delegate(args);
});
G__11485.cljs$core$IFn$_invoke$arity$variadic = G__11485__delegate;
return G__11485;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
