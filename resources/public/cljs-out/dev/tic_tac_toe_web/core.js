// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('tic_tac_toe_web.core');
goog.require('cljs.core');
goog.require('tic_tac_toe_clj.constants');
goog.require('tic_tac_toe_clj.rules');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
tic_tac_toe_web.core.get_app_element = (function tic_tac_toe_web$core$get_app_element(){
return goog.dom.getElement("app");
});
tic_tac_toe_web.core.game_over = (function tic_tac_toe_web$core$game_over(game){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(((!((new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(game) == null))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(game))," Wins!"].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"over?","over?",993474009).cljs$core$IFn$_invoke$arity$1(game))?"Game Over!":null
))], null);
});
tic_tac_toe_web.core.tic_tac_toe_game = (function tic_tac_toe_web$core$tic_tac_toe_game(){
var game = reagent.core.atom.call(null,tic_tac_toe_clj.constants.new_game);
return (function (){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game));
var spaces = cljs.core.sort.call(null,cljs.core.keys.call(null,board));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function tic_tac_toe_web$core$tic_tac_toe_game_$_iter__16188(s__16189){
return (new cljs.core.LazySeq(null,(function (){
var s__16189__$1 = s__16189;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16189__$1);
if(temp__5720__auto__){
var s__16189__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16189__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__16189__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__16191 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__16190 = (0);
while(true){
if((i__16190 < size__4528__auto__)){
var space = cljs.core._nth.call(null,c__4527__auto__,i__16190);
cljs.core.chunk_append.call(null,b__16191,(function (){var mark = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)).call(null,space);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),space,new cljs.core.Keyword(null,"id","id",-1388402092),space,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16190,mark,space,c__4527__auto__,size__4528__auto__,b__16191,s__16189__$2,temp__5720__auto__,board,spaces,game){
return (function (){
return cljs.core.swap_BANG_.call(null,game,tic_tac_toe_clj.rules.play,space,tic_tac_toe_clj.constants.X);
});})(i__16190,mark,space,c__4527__auto__,size__4528__auto__,b__16191,s__16189__$2,temp__5720__auto__,board,spaces,game))
,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(((mark == null))?["empty-board-space-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(space)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mark),"-play-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(space)].join(''))], null),mark], null);
})());

var G__16192 = (i__16190 + (1));
i__16190 = G__16192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16191),tic_tac_toe_web$core$tic_tac_toe_game_$_iter__16188.call(null,cljs.core.chunk_rest.call(null,s__16189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16191),null);
}
} else {
var space = cljs.core.first.call(null,s__16189__$2);
return cljs.core.cons.call(null,(function (){var mark = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game)).call(null,space);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space","div.space",-1949188144),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),space,new cljs.core.Keyword(null,"id","id",-1388402092),space,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (mark,space,s__16189__$2,temp__5720__auto__,board,spaces,game){
return (function (){
return cljs.core.swap_BANG_.call(null,game,tic_tac_toe_clj.rules.play,space,tic_tac_toe_clj.constants.X);
});})(mark,space,s__16189__$2,temp__5720__auto__,board,spaces,game))
,new cljs.core.Keyword(null,"aria-label","aria-label",455891514),(((mark == null))?["empty-board-space-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(space)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mark),"-play-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(space)].join(''))], null),mark], null);
})(),tic_tac_toe_web$core$tic_tac_toe_game_$_iter__16188.call(null,cljs.core.rest.call(null,s__16189__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,spaces);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe_web.core.game_over,cljs.core.deref.call(null,game)], null)], null);
});
});
tic_tac_toe_web.core.mount = (function tic_tac_toe_web$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe_web.core.tic_tac_toe_game], null),el);
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
