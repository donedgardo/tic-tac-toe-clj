// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('tic_tac_toe_web.test_runner');
goog.require('cljs.core');
goog.require('tic_tac_toe_web.core_test');
goog.require('tic_tac_toe_web.game_over_test');
goog.require('tic_tac_toe_web.board_test');
goog.require('figwheel.main.testing');
tic_tac_toe_web.test_runner._main = (function tic_tac_toe_web$test_runner$_main(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16211 = arguments.length;
var i__4737__auto___16212 = (0);
while(true){
if((i__4737__auto___16212 < len__4736__auto___16211)){
args__4742__auto__.push((arguments[i__4737__auto___16212]));

var G__16213 = (i__4737__auto___16212 + (1));
i__4737__auto___16212 = G__16213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return tic_tac_toe_web.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(tic_tac_toe_web.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__6125__auto___16214 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__6125__auto___16214))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__6125__auto___16214,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m__6126__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__6126__auto__);
}));
}

cljs.test.run_block.call(null,(function (){var env16209 = cljs.test.empty_env.call(null);
var summary16210 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env16209);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"tic-tac-toe-web.game-over-test","tic-tac-toe-web.game-over-test",-764015799,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10013__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"tic-tac-toe-web.game-over-test","tic-tac-toe-web.game-over-test",-764015799,null),tic_tac_toe_web.game_over_test.cljs_test_each_fixtures);
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return tic_tac_toe_web.game_over_test.game_over_component;},new cljs.core.Symbol("tic-tac-toe-web.game-over-test","game-over-component","tic-tac-toe-web.game-over-test/game-over-component",287082521,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tic-tac-toe-web.game-over-test","tic-tac-toe-web.game-over-test",-764015799,null),new cljs.core.Symbol(null,"game-over-component","game-over-component",-1511143974,null),"test/tic_tac_toe_web/game_over_test.cljs",29,1,13,13,cljs.core.List.EMPTY,null,(cljs.core.truth_(tic_tac_toe_web.game_over_test.game_over_component)?tic_tac_toe_web.game_over_test.game_over_component.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"tic-tac-toe-web.game-over-test","tic-tac-toe-web.game-over-test",-764015799,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary16210,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary16210),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env16209);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"tic-tac-toe-web.board-test","tic-tac-toe-web.board-test",-279997414,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10013__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,new cljs.core.Symbol(null,"tic-tac-toe-web.board-test","tic-tac-toe-web.board-test",-279997414,null),tic_tac_toe_web.board_test.cljs_test_each_fixtures);
})], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return tic_tac_toe_web.board_test.board_component_test;},new cljs.core.Symbol("tic-tac-toe-web.board-test","board-component-test","tic-tac-toe-web.board-test/board-component-test",-841852177,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"tic-tac-toe-web.board-test","tic-tac-toe-web.board-test",-279997414,null),new cljs.core.Symbol(null,"board-component-test","board-component-test",-700464541,null),"test/tic_tac_toe_web/board_test.cljs",30,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(tic_tac_toe_web.board_test.board_component_test)?tic_tac_toe_web.board_test.board_component_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
if((env__10013__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
})], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"tic-tac-toe-web.board-test","tic-tac-toe-web.board-test",-279997414,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core._vreset_BANG_.call(null,summary16210,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary16210),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,env16209);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary16210));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary16210),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
})], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
}));

(tic_tac_toe_web.test_runner._main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tic_tac_toe_web.test_runner._main.cljs$lang$applyTo = (function (seq16208){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16208));
}));


//# sourceMappingURL=test_runner.js.map
