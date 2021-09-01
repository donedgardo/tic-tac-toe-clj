// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11776){
var map__11777 = p__11776;
var map__11777__$1 = (((((!((map__11777 == null))))?(((((map__11777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11777):map__11777);
var m = map__11777__$1;
var n = cljs.core.get.call(null,map__11777__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11779_11811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11780_11812 = null;
var count__11781_11813 = (0);
var i__11782_11814 = (0);
while(true){
if((i__11782_11814 < count__11781_11813)){
var f_11815 = cljs.core._nth.call(null,chunk__11780_11812,i__11782_11814);
cljs.core.println.call(null,"  ",f_11815);


var G__11816 = seq__11779_11811;
var G__11817 = chunk__11780_11812;
var G__11818 = count__11781_11813;
var G__11819 = (i__11782_11814 + (1));
seq__11779_11811 = G__11816;
chunk__11780_11812 = G__11817;
count__11781_11813 = G__11818;
i__11782_11814 = G__11819;
continue;
} else {
var temp__5720__auto___11820 = cljs.core.seq.call(null,seq__11779_11811);
if(temp__5720__auto___11820){
var seq__11779_11821__$1 = temp__5720__auto___11820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11779_11821__$1)){
var c__4556__auto___11822 = cljs.core.chunk_first.call(null,seq__11779_11821__$1);
var G__11823 = cljs.core.chunk_rest.call(null,seq__11779_11821__$1);
var G__11824 = c__4556__auto___11822;
var G__11825 = cljs.core.count.call(null,c__4556__auto___11822);
var G__11826 = (0);
seq__11779_11811 = G__11823;
chunk__11780_11812 = G__11824;
count__11781_11813 = G__11825;
i__11782_11814 = G__11826;
continue;
} else {
var f_11827 = cljs.core.first.call(null,seq__11779_11821__$1);
cljs.core.println.call(null,"  ",f_11827);


var G__11828 = cljs.core.next.call(null,seq__11779_11821__$1);
var G__11829 = null;
var G__11830 = (0);
var G__11831 = (0);
seq__11779_11811 = G__11828;
chunk__11780_11812 = G__11829;
count__11781_11813 = G__11830;
i__11782_11814 = G__11831;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11832 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11832);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11832)))?cljs.core.second.call(null,arglists_11832):arglists_11832));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11783_11833 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11784_11834 = null;
var count__11785_11835 = (0);
var i__11786_11836 = (0);
while(true){
if((i__11786_11836 < count__11785_11835)){
var vec__11797_11837 = cljs.core._nth.call(null,chunk__11784_11834,i__11786_11836);
var name_11838 = cljs.core.nth.call(null,vec__11797_11837,(0),null);
var map__11800_11839 = cljs.core.nth.call(null,vec__11797_11837,(1),null);
var map__11800_11840__$1 = (((((!((map__11800_11839 == null))))?(((((map__11800_11839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11800_11839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11800_11839):map__11800_11839);
var doc_11841 = cljs.core.get.call(null,map__11800_11840__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11842 = cljs.core.get.call(null,map__11800_11840__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11838);

cljs.core.println.call(null," ",arglists_11842);

if(cljs.core.truth_(doc_11841)){
cljs.core.println.call(null," ",doc_11841);
} else {
}


var G__11843 = seq__11783_11833;
var G__11844 = chunk__11784_11834;
var G__11845 = count__11785_11835;
var G__11846 = (i__11786_11836 + (1));
seq__11783_11833 = G__11843;
chunk__11784_11834 = G__11844;
count__11785_11835 = G__11845;
i__11786_11836 = G__11846;
continue;
} else {
var temp__5720__auto___11847 = cljs.core.seq.call(null,seq__11783_11833);
if(temp__5720__auto___11847){
var seq__11783_11848__$1 = temp__5720__auto___11847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11783_11848__$1)){
var c__4556__auto___11849 = cljs.core.chunk_first.call(null,seq__11783_11848__$1);
var G__11850 = cljs.core.chunk_rest.call(null,seq__11783_11848__$1);
var G__11851 = c__4556__auto___11849;
var G__11852 = cljs.core.count.call(null,c__4556__auto___11849);
var G__11853 = (0);
seq__11783_11833 = G__11850;
chunk__11784_11834 = G__11851;
count__11785_11835 = G__11852;
i__11786_11836 = G__11853;
continue;
} else {
var vec__11802_11854 = cljs.core.first.call(null,seq__11783_11848__$1);
var name_11855 = cljs.core.nth.call(null,vec__11802_11854,(0),null);
var map__11805_11856 = cljs.core.nth.call(null,vec__11802_11854,(1),null);
var map__11805_11857__$1 = (((((!((map__11805_11856 == null))))?(((((map__11805_11856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11805_11856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11805_11856):map__11805_11856);
var doc_11858 = cljs.core.get.call(null,map__11805_11857__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11859 = cljs.core.get.call(null,map__11805_11857__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11855);

cljs.core.println.call(null," ",arglists_11859);

if(cljs.core.truth_(doc_11858)){
cljs.core.println.call(null," ",doc_11858);
} else {
}


var G__11860 = cljs.core.next.call(null,seq__11783_11848__$1);
var G__11861 = null;
var G__11862 = (0);
var G__11863 = (0);
seq__11783_11833 = G__11860;
chunk__11784_11834 = G__11861;
count__11785_11835 = G__11862;
i__11786_11836 = G__11863;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__11807 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11808 = null;
var count__11809 = (0);
var i__11810 = (0);
while(true){
if((i__11810 < count__11809)){
var role = cljs.core._nth.call(null,chunk__11808,i__11810);
var temp__5720__auto___11864__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___11864__$1)){
var spec_11865 = temp__5720__auto___11864__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11865));
} else {
}


var G__11866 = seq__11807;
var G__11867 = chunk__11808;
var G__11868 = count__11809;
var G__11869 = (i__11810 + (1));
seq__11807 = G__11866;
chunk__11808 = G__11867;
count__11809 = G__11868;
i__11810 = G__11869;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__11807);
if(temp__5720__auto____$1){
var seq__11807__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11807__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__11807__$1);
var G__11870 = cljs.core.chunk_rest.call(null,seq__11807__$1);
var G__11871 = c__4556__auto__;
var G__11872 = cljs.core.count.call(null,c__4556__auto__);
var G__11873 = (0);
seq__11807 = G__11870;
chunk__11808 = G__11871;
count__11809 = G__11872;
i__11810 = G__11873;
continue;
} else {
var role = cljs.core.first.call(null,seq__11807__$1);
var temp__5720__auto___11874__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___11874__$2)){
var spec_11875 = temp__5720__auto___11874__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_11875));
} else {
}


var G__11876 = cljs.core.next.call(null,seq__11807__$1);
var G__11877 = null;
var G__11878 = (0);
var G__11879 = (0);
seq__11807 = G__11876;
chunk__11808 = G__11877;
count__11809 = G__11878;
i__11810 = G__11879;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__11880 = cljs.core.conj.call(null,via,t);
var G__11881 = cljs.core.ex_cause.call(null,t);
via = G__11880;
t = G__11881;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__11884 = datafied_throwable;
var map__11884__$1 = (((((!((map__11884 == null))))?(((((map__11884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11884):map__11884);
var via = cljs.core.get.call(null,map__11884__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__11884__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__11884__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__11885 = cljs.core.last.call(null,via);
var map__11885__$1 = (((((!((map__11885 == null))))?(((((map__11885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11885):map__11885);
var type = cljs.core.get.call(null,map__11885__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__11885__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__11885__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__11886 = data;
var map__11886__$1 = (((((!((map__11886 == null))))?(((((map__11886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11886):map__11886);
var problems = cljs.core.get.call(null,map__11886__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__11886__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__11886__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__11887 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__11887__$1 = (((((!((map__11887 == null))))?(((((map__11887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11887):map__11887);
var top_data = map__11887__$1;
var source = cljs.core.get.call(null,map__11887__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__11892 = phase;
var G__11892__$1 = (((G__11892 instanceof cljs.core.Keyword))?G__11892.fqn:null);
switch (G__11892__$1) {
case "read-source":
var map__11893 = data;
var map__11893__$1 = (((((!((map__11893 == null))))?(((((map__11893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11893):map__11893);
var line = cljs.core.get.call(null,map__11893__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11893__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__11895 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__11895__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11895,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11895);
var G__11895__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11895__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11895__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11895__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11895__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__11896 = top_data;
var G__11896__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__11896,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__11896);
var G__11896__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__11896__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__11896__$1);
var G__11896__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11896__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11896__$2);
var G__11896__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11896__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11896__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11896__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11896__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__11897 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11897,(0),null);
var method = cljs.core.nth.call(null,vec__11897,(1),null);
var file = cljs.core.nth.call(null,vec__11897,(2),null);
var line = cljs.core.nth.call(null,vec__11897,(3),null);
var G__11900 = top_data;
var G__11900__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__11900,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__11900);
var G__11900__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__11900__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__11900__$1);
var G__11900__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__11900__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__11900__$2);
var G__11900__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__11900__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__11900__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__11900__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__11900__$4;
}

break;
case "execution":
var vec__11901 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__11901,(0),null);
var method = cljs.core.nth.call(null,vec__11901,(1),null);
var file = cljs.core.nth.call(null,vec__11901,(2),null);
var line = cljs.core.nth.call(null,vec__11901,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__11883_SHARP_){
var or__4126__auto__ = (p1__11883_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__11883_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__11904 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__11904__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__11904,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__11904);
var G__11904__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__11904__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__11904__$1);
var G__11904__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__11904__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__11904__$2);
var G__11904__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__11904__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__11904__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__11904__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__11904__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11892__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__11908){
var map__11909 = p__11908;
var map__11909__$1 = (((((!((map__11909 == null))))?(((((map__11909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11909):map__11909);
var triage_data = map__11909__$1;
var phase = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__11909__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__11911 = phase;
var G__11911__$1 = (((G__11911 instanceof cljs.core.Keyword))?G__11911.fqn:null);
switch (G__11911__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11912_11921 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11913_11922 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11914_11923 = true;
var _STAR_print_fn_STAR__temp_val__11915_11924 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11914_11923);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11915_11924);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__11906_SHARP_){
return cljs.core.dissoc.call(null,p1__11906_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11913_11922);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11912_11921);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__11916_11925 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__11917_11926 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__11918_11927 = true;
var _STAR_print_fn_STAR__temp_val__11919_11928 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__11918_11927);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__11919_11928);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__11907_SHARP_){
return cljs.core.dissoc.call(null,p1__11907_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__11917_11926);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__11916_11925);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11911__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
