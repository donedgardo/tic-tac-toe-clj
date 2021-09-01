// Compiled by ClojureScript 1.10.773 {}
goog.provide('tic_tac_toe_web.core');
goog.require('cljs.core');
goog.require('tic_tac_toe_clj.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
if((typeof tic_tac_toe_web !== 'undefined') && (typeof tic_tac_toe_web.core !== 'undefined') && (typeof tic_tac_toe_web.core.app_state !== 'undefined')){
} else {
tic_tac_toe_web.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game","game",-441523833),tic_tac_toe_clj.constants.new_game], null));
}
tic_tac_toe_web.core.get_app_element = (function tic_tac_toe_web$core$get_app_element(){
return goog.dom.getElement("app");
});
tic_tac_toe_web.core.hello_world = (function tic_tac_toe_web$core$hello_world(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Winner",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe_web.core.app_state))))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Tic tac toe ish"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),["Game over",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"over?","over?",993474009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game","game",-441523833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe_web.core.app_state))))].join('')], null)], null);
});
tic_tac_toe_web.core.mount = (function tic_tac_toe_web$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe_web.core.hello_world], null),el);
});
tic_tac_toe_web.core.mount_app_element = (function tic_tac_toe_web$core$mount_app_element(){
var temp__5720__auto__ = tic_tac_toe_web.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return tic_tac_toe_web.core.mount.call(null,el);
} else {
return null;
}
});
tic_tac_toe_web.core.mount_app_element.call(null);
tic_tac_toe_web.core.on_reload = (function tic_tac_toe_web$core$on_reload(){
return tic_tac_toe_web.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
