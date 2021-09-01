// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('tic_tac_toe_clj.rules');
goog.require('cljs.core');
tic_tac_toe_clj.rules.index_empty_QMARK_ = (function tic_tac_toe_clj$rules$index_empty_QMARK_(index,board){
return (board.call(null,index) == null);
});
tic_tac_toe_clj.rules.horizontal_win_QMARK_ = (function tic_tac_toe_clj$rules$horizontal_win_QMARK_(board,index,symbol){
var vec__16129 = index;
var x = cljs.core.nth.call(null,vec__16129,(0),null);
var y = cljs.core.nth.call(null,vec__16129,(1),null);
return cljs.core.every_QMARK_.call(null,(function (p1__16128_SHARP_){
return cljs.core._EQ_.call(null,symbol,p1__16128_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (2))], null))], null));
});
tic_tac_toe_clj.rules.vertical_win_QMARK_ = (function tic_tac_toe_clj$rules$vertical_win_QMARK_(board,index,symbol){
var vec__16133 = index;
var x = cljs.core.nth.call(null,vec__16133,(0),null);
var y = cljs.core.nth.call(null,vec__16133,(1),null);
return cljs.core.every_QMARK_.call(null,(function (p1__16132_SHARP_){
return cljs.core._EQ_.call(null,symbol,p1__16132_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (2)),y], null))], null));
});
tic_tac_toe_clj.rules.diagonal_down_win_QMARK_ = (function tic_tac_toe_clj$rules$diagonal_down_win_QMARK_(board,index,symbol){
var vec__16137 = index;
var x = cljs.core.nth.call(null,vec__16137,(0),null);
var y = cljs.core.nth.call(null,vec__16137,(1),null);
return cljs.core.every_QMARK_.call(null,(function (p1__16136_SHARP_){
return cljs.core._EQ_.call(null,symbol,p1__16136_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (2)),(y + (2))], null))], null));
});
tic_tac_toe_clj.rules.diagonal_up_win_QMARK_ = (function tic_tac_toe_clj$rules$diagonal_up_win_QMARK_(board,index,symbol){
var vec__16141 = index;
var x = cljs.core.nth.call(null,vec__16141,(0),null);
var y = cljs.core.nth.call(null,vec__16141,(1),null);
return cljs.core.every_QMARK_.call(null,(function (p1__16140_SHARP_){
return cljs.core._EQ_.call(null,symbol,p1__16140_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null)),board.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (2)),(y - (2))], null))], null));
});
tic_tac_toe_clj.rules.winning_play_QMARK_ = (function tic_tac_toe_clj$rules$winning_play_QMARK_(board,index,symbol){
return cljs.core.some.call(null,(function (p1__16144_SHARP_){
return p1__16144_SHARP_.call(null,board,index,symbol);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe_clj.rules.horizontal_win_QMARK_,tic_tac_toe_clj.rules.vertical_win_QMARK_,tic_tac_toe_clj.rules.diagonal_down_win_QMARK_,tic_tac_toe_clj.rules.diagonal_up_win_QMARK_], null));
});
tic_tac_toe_clj.rules.board_full_QMARK_ = (function tic_tac_toe_clj$rules$board_full_QMARK_(board){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.vals.call(null,board));
});
tic_tac_toe_clj.rules.get_player_plays = (function tic_tac_toe_clj$rules$get_player_plays(board,player){
return cljs.core.filter.call(null,(function (p1__16145_SHARP_){
return (((!(tic_tac_toe_clj.rules.index_empty_QMARK_.call(null,p1__16145_SHARP_,board)))) && (cljs.core._EQ_.call(null,player,board.call(null,p1__16145_SHARP_))));
}),cljs.core.keys.call(null,board));
});
tic_tac_toe_clj.rules.game_has_wining_play_QMARK_ = (function tic_tac_toe_clj$rules$game_has_wining_play_QMARK_(board,player){
var player_plays = tic_tac_toe_clj.rules.get_player_plays.call(null,board,player);
var board_indexes = player_plays;
while(true){
if(cljs.core.empty_QMARK_.call(null,board_indexes)){
return false;
} else {
if(cljs.core.truth_(tic_tac_toe_clj.rules.winning_play_QMARK_.call(null,board,cljs.core.first.call(null,board_indexes),player))){
return true;
} else {
var G__16146 = cljs.core.drop.call(null,(1),board_indexes);
board_indexes = G__16146;
continue;

}
}
break;
}
});
tic_tac_toe_clj.rules.play = (function tic_tac_toe_clj$rules$play(game,index,player){
var board = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(game);
var new_board = cljs.core.assoc.call(null,board,index,player);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"over?","over?",993474009).cljs$core$IFn$_invoke$arity$1(game);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(tic_tac_toe_clj.rules.index_empty_QMARK_.call(null,index,board)));
}
})())){
return game;
} else {
if(tic_tac_toe_clj.rules.game_has_wining_play_QMARK_.call(null,new_board,player)){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"winner","winner",714604679),player,new cljs.core.Keyword(null,"over?","over?",993474009),true);
} else {
if(tic_tac_toe_clj.rules.board_full_QMARK_.call(null,new_board)){
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),new_board,new cljs.core.Keyword(null,"over?","over?",993474009),true);
} else {
return cljs.core.assoc.call(null,game,new cljs.core.Keyword(null,"board","board",-1907017633),new_board);

}
}
}
});

//# sourceMappingURL=rules.js.map
