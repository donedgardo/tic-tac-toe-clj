// Compiled by ClojureScript 1.10.773 {}
goog.provide('tic_tac_toe_clj.constants');
goog.require('cljs.core');
tic_tac_toe_clj.constants.empty_board = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)],[null,null,null,null,null,null,null,null,null]);
tic_tac_toe_clj.constants.new_game = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe_clj.constants.empty_board,new cljs.core.Keyword(null,"winner","winner",714604679),null,new cljs.core.Keyword(null,"over?","over?",993474009),false], null);
tic_tac_toe_clj.constants.X = "X";
tic_tac_toe_clj.constants.O = "O";
tic_tac_toe_clj.constants.player_symbols = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe_clj.constants.X,tic_tac_toe_clj.constants.O], null);
tic_tac_toe_clj.constants.get_opponent = (function tic_tac_toe_clj$constants$get_opponent(player){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__10243_SHARP_){
return (!(cljs.core._EQ_.call(null,player,p1__10243_SHARP_)));
}),tic_tac_toe_clj.constants.player_symbols));
});
tic_tac_toe_clj.constants.get_empty_indexes = (function tic_tac_toe_clj$constants$get_empty_indexes(board){
var indexes = cljs.core.keys.call(null,board);
return cljs.core.filter.call(null,(function (p1__10244_SHARP_){
return (board.call(null,p1__10244_SHARP_) == null);
}),indexes);
});

//# sourceMappingURL=constants.js.map
