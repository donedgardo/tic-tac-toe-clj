// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('tic_tac_toe_clj.ai');
goog.require('cljs.core');
goog.require('tic_tac_toe_clj.rules');
goog.require('tic_tac_toe_clj.constants');
tic_tac_toe_clj.ai.score_board = (function tic_tac_toe_clj$ai$score_board(game,player){
if(cljs.core._EQ_.call(null,player,new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(game))){
return (10);
} else {
if(cljs.core._EQ_.call(null,tic_tac_toe_clj.constants.get_opponent.call(null,player),new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(game))){
return (-10);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"over?","over?",993474009).cljs$core$IFn$_invoke$arity$1(game))){
return (0);
} else {
return null;

}
}
}
});
tic_tac_toe_clj.ai.minimax = (function tic_tac_toe_clj$ai$minimax(game,player,depth,maximizing_QMARK_){
var score = tic_tac_toe_clj.ai.score_board.call(null,game,player);
var moves = tic_tac_toe_clj.constants.get_empty_indexes.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game));
if((!((score == null)))){
return score;
} else {
if(maximizing_QMARK_ === true){
return (function (p1__16171_SHARP_){
return (p1__16171_SHARP_ - depth);
}).call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__16170_SHARP_){
return tic_tac_toe_clj.ai.minimax.call(null,p1__16170_SHARP_,player,(depth + (1)),false);
}),cljs.core.map.call(null,(function (p1__16169_SHARP_){
return tic_tac_toe_clj.rules.play.call(null,game,p1__16169_SHARP_,player);
}),moves))));
} else {
return (function (p1__16174_SHARP_){
return (p1__16174_SHARP_ + depth);
}).call(null,cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,(function (p1__16173_SHARP_){
return tic_tac_toe_clj.ai.minimax.call(null,p1__16173_SHARP_,player,(depth + (1)),true);
}),cljs.core.map.call(null,(function (p1__16172_SHARP_){
return tic_tac_toe_clj.rules.play.call(null,game,p1__16172_SHARP_,tic_tac_toe_clj.constants.get_opponent.call(null,player));
}),moves))));

}
}
});
tic_tac_toe_clj.ai.get_best_move = (function tic_tac_toe_clj$ai$get_best_move(game,player){
var moves = tic_tac_toe_clj.constants.get_empty_indexes.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game));
var scores = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,moves))){
return cljs.core.rand_nth.call(null,cljs.core.keys.call(null,tic_tac_toe_clj.constants.empty_board));
} else {
if(cljs.core.empty_QMARK_.call(null,moves)){
return cljs.core.key.call(null,cljs.core.apply.call(null,cljs.core.max_key,cljs.core.val,scores));
} else {
var G__16175 = cljs.core.drop.call(null,(1),moves);
var G__16176 = cljs.core.assoc.call(null,scores,cljs.core.first.call(null,moves),tic_tac_toe_clj.ai.minimax.call(null,tic_tac_toe_clj.rules.play.call(null,game,cljs.core.first.call(null,moves),player),player,(0),false));
moves = G__16175;
scores = G__16176;
continue;

}
}
break;
}
});

//# sourceMappingURL=ai.js.map
