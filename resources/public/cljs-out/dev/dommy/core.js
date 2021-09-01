// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4126__auto__ = elem.textContent;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__9882 = arguments.length;
switch (G__9882) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5718__auto__ = elem.classList;
if(cljs.core.truth_(temp__5718__auto__)){
var class_list = temp__5718__auto__;
return class_list.contains(c__$1);
} else {
var temp__5720__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5720__auto__)){
var class_name = temp__5720__auto__;
var temp__5720__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5720__auto____$1)){
var i = temp__5720__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__9885 = arguments.length;
switch (G__9885) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__9889 = arguments.length;
switch (G__9889) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__9887_SHARP_){
return (!((p1__9887_SHARP_ === base)));
}),dommy.core.ancestors.call(null,elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9909 = arguments.length;
var i__4737__auto___9910 = (0);
while(true){
if((i__4737__auto___9910 < len__4736__auto___9909)){
args__4742__auto__.push((arguments[i__4737__auto___9910]));

var G__9911 = (i__4737__auto___9910 + (1));
i__4737__auto___9910 = G__9911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__9893_9912 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__9894_9913 = null;
var count__9895_9914 = (0);
var i__9896_9915 = (0);
while(true){
if((i__9896_9915 < count__9895_9914)){
var vec__9903_9916 = cljs.core._nth.call(null,chunk__9894_9913,i__9896_9915);
var k_9917 = cljs.core.nth.call(null,vec__9903_9916,(0),null);
var v_9918 = cljs.core.nth.call(null,vec__9903_9916,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_9917),v_9918);


var G__9919 = seq__9893_9912;
var G__9920 = chunk__9894_9913;
var G__9921 = count__9895_9914;
var G__9922 = (i__9896_9915 + (1));
seq__9893_9912 = G__9919;
chunk__9894_9913 = G__9920;
count__9895_9914 = G__9921;
i__9896_9915 = G__9922;
continue;
} else {
var temp__5720__auto___9923 = cljs.core.seq.call(null,seq__9893_9912);
if(temp__5720__auto___9923){
var seq__9893_9924__$1 = temp__5720__auto___9923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9893_9924__$1)){
var c__4556__auto___9925 = cljs.core.chunk_first.call(null,seq__9893_9924__$1);
var G__9926 = cljs.core.chunk_rest.call(null,seq__9893_9924__$1);
var G__9927 = c__4556__auto___9925;
var G__9928 = cljs.core.count.call(null,c__4556__auto___9925);
var G__9929 = (0);
seq__9893_9912 = G__9926;
chunk__9894_9913 = G__9927;
count__9895_9914 = G__9928;
i__9896_9915 = G__9929;
continue;
} else {
var vec__9906_9930 = cljs.core.first.call(null,seq__9893_9924__$1);
var k_9931 = cljs.core.nth.call(null,vec__9906_9930,(0),null);
var v_9932 = cljs.core.nth.call(null,vec__9906_9930,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_9931),v_9932);


var G__9933 = cljs.core.next.call(null,seq__9893_9924__$1);
var G__9934 = null;
var G__9935 = (0);
var G__9936 = (0);
seq__9893_9912 = G__9933;
chunk__9894_9913 = G__9934;
count__9895_9914 = G__9935;
i__9896_9915 = G__9936;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq9891){
var G__9892 = cljs.core.first.call(null,seq9891);
var seq9891__$1 = cljs.core.next.call(null,seq9891);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9892,seq9891__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9943 = arguments.length;
var i__4737__auto___9944 = (0);
while(true){
if((i__4737__auto___9944 < len__4736__auto___9943)){
args__4742__auto__.push((arguments[i__4737__auto___9944]));

var G__9945 = (i__4737__auto___9944 + (1));
i__4737__auto___9944 = G__9945;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__9939_9946 = cljs.core.seq.call(null,keywords);
var chunk__9940_9947 = null;
var count__9941_9948 = (0);
var i__9942_9949 = (0);
while(true){
if((i__9942_9949 < count__9941_9948)){
var kw_9950 = cljs.core._nth.call(null,chunk__9940_9947,i__9942_9949);
style.removeProperty(dommy.utils.as_str.call(null,kw_9950));


var G__9951 = seq__9939_9946;
var G__9952 = chunk__9940_9947;
var G__9953 = count__9941_9948;
var G__9954 = (i__9942_9949 + (1));
seq__9939_9946 = G__9951;
chunk__9940_9947 = G__9952;
count__9941_9948 = G__9953;
i__9942_9949 = G__9954;
continue;
} else {
var temp__5720__auto___9955 = cljs.core.seq.call(null,seq__9939_9946);
if(temp__5720__auto___9955){
var seq__9939_9956__$1 = temp__5720__auto___9955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9939_9956__$1)){
var c__4556__auto___9957 = cljs.core.chunk_first.call(null,seq__9939_9956__$1);
var G__9958 = cljs.core.chunk_rest.call(null,seq__9939_9956__$1);
var G__9959 = c__4556__auto___9957;
var G__9960 = cljs.core.count.call(null,c__4556__auto___9957);
var G__9961 = (0);
seq__9939_9946 = G__9958;
chunk__9940_9947 = G__9959;
count__9941_9948 = G__9960;
i__9942_9949 = G__9961;
continue;
} else {
var kw_9962 = cljs.core.first.call(null,seq__9939_9956__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_9962));


var G__9963 = cljs.core.next.call(null,seq__9939_9956__$1);
var G__9964 = null;
var G__9965 = (0);
var G__9966 = (0);
seq__9939_9946 = G__9963;
chunk__9940_9947 = G__9964;
count__9941_9948 = G__9965;
i__9942_9949 = G__9966;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq9937){
var G__9938 = cljs.core.first.call(null,seq9937);
var seq9937__$1 = cljs.core.next.call(null,seq9937);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9938,seq9937__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9985 = arguments.length;
var i__4737__auto___9986 = (0);
while(true){
if((i__4737__auto___9986 < len__4736__auto___9985)){
args__4742__auto__.push((arguments[i__4737__auto___9986]));

var G__9987 = (i__4737__auto___9986 + (1));
i__4737__auto___9986 = G__9987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__9969_9988 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__9970_9989 = null;
var count__9971_9990 = (0);
var i__9972_9991 = (0);
while(true){
if((i__9972_9991 < count__9971_9990)){
var vec__9979_9992 = cljs.core._nth.call(null,chunk__9970_9989,i__9972_9991);
var k_9993 = cljs.core.nth.call(null,vec__9979_9992,(0),null);
var v_9994 = cljs.core.nth.call(null,vec__9979_9992,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_9993,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_9994),"px"].join(''));


var G__9995 = seq__9969_9988;
var G__9996 = chunk__9970_9989;
var G__9997 = count__9971_9990;
var G__9998 = (i__9972_9991 + (1));
seq__9969_9988 = G__9995;
chunk__9970_9989 = G__9996;
count__9971_9990 = G__9997;
i__9972_9991 = G__9998;
continue;
} else {
var temp__5720__auto___9999 = cljs.core.seq.call(null,seq__9969_9988);
if(temp__5720__auto___9999){
var seq__9969_10000__$1 = temp__5720__auto___9999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9969_10000__$1)){
var c__4556__auto___10001 = cljs.core.chunk_first.call(null,seq__9969_10000__$1);
var G__10002 = cljs.core.chunk_rest.call(null,seq__9969_10000__$1);
var G__10003 = c__4556__auto___10001;
var G__10004 = cljs.core.count.call(null,c__4556__auto___10001);
var G__10005 = (0);
seq__9969_9988 = G__10002;
chunk__9970_9989 = G__10003;
count__9971_9990 = G__10004;
i__9972_9991 = G__10005;
continue;
} else {
var vec__9982_10006 = cljs.core.first.call(null,seq__9969_10000__$1);
var k_10007 = cljs.core.nth.call(null,vec__9982_10006,(0),null);
var v_10008 = cljs.core.nth.call(null,vec__9982_10006,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_10007,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10008),"px"].join(''));


var G__10009 = cljs.core.next.call(null,seq__9969_10000__$1);
var G__10010 = null;
var G__10011 = (0);
var G__10012 = (0);
seq__9969_9988 = G__10009;
chunk__9970_9989 = G__10010;
count__9971_9990 = G__10011;
i__9972_9991 = G__10012;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq9967){
var G__9968 = cljs.core.first.call(null,seq9967);
var seq9967__$1 = cljs.core.next.call(null,seq9967);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9968,seq9967__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__10018 = arguments.length;
switch (G__10018) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10038 = arguments.length;
var i__4737__auto___10039 = (0);
while(true){
if((i__4737__auto___10039 < len__4736__auto___10038)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10039]));

var G__10040 = (i__4737__auto___10039 + (1));
i__4737__auto___10039 = G__10040;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__10019 = elem;
(G__10019[k__$1] = v);

return G__10019;
} else {
var G__10020 = elem;
G__10020.setAttribute(k__$1,v);

return G__10020;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__10021_10041 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__10022_10042 = null;
var count__10023_10043 = (0);
var i__10024_10044 = (0);
while(true){
if((i__10024_10044 < count__10023_10043)){
var vec__10031_10045 = cljs.core._nth.call(null,chunk__10022_10042,i__10024_10044);
var k_10046__$1 = cljs.core.nth.call(null,vec__10031_10045,(0),null);
var v_10047__$1 = cljs.core.nth.call(null,vec__10031_10045,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_10046__$1,v_10047__$1);


var G__10048 = seq__10021_10041;
var G__10049 = chunk__10022_10042;
var G__10050 = count__10023_10043;
var G__10051 = (i__10024_10044 + (1));
seq__10021_10041 = G__10048;
chunk__10022_10042 = G__10049;
count__10023_10043 = G__10050;
i__10024_10044 = G__10051;
continue;
} else {
var temp__5720__auto___10052 = cljs.core.seq.call(null,seq__10021_10041);
if(temp__5720__auto___10052){
var seq__10021_10053__$1 = temp__5720__auto___10052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10021_10053__$1)){
var c__4556__auto___10054 = cljs.core.chunk_first.call(null,seq__10021_10053__$1);
var G__10055 = cljs.core.chunk_rest.call(null,seq__10021_10053__$1);
var G__10056 = c__4556__auto___10054;
var G__10057 = cljs.core.count.call(null,c__4556__auto___10054);
var G__10058 = (0);
seq__10021_10041 = G__10055;
chunk__10022_10042 = G__10056;
count__10023_10043 = G__10057;
i__10024_10044 = G__10058;
continue;
} else {
var vec__10034_10059 = cljs.core.first.call(null,seq__10021_10053__$1);
var k_10060__$1 = cljs.core.nth.call(null,vec__10034_10059,(0),null);
var v_10061__$1 = cljs.core.nth.call(null,vec__10034_10059,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_10060__$1,v_10061__$1);


var G__10062 = cljs.core.next.call(null,seq__10021_10053__$1);
var G__10063 = null;
var G__10064 = (0);
var G__10065 = (0);
seq__10021_10041 = G__10062;
chunk__10022_10042 = G__10063;
count__10023_10043 = G__10064;
i__10024_10044 = G__10065;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq10014){
var G__10015 = cljs.core.first.call(null,seq10014);
var seq10014__$1 = cljs.core.next.call(null,seq10014);
var G__10016 = cljs.core.first.call(null,seq10014__$1);
var seq10014__$2 = cljs.core.next.call(null,seq10014__$1);
var G__10017 = cljs.core.first.call(null,seq10014__$2);
var seq10014__$3 = cljs.core.next.call(null,seq10014__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10015,G__10016,G__10017,seq10014__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__10070 = arguments.length;
switch (G__10070) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10076 = arguments.length;
var i__4737__auto___10077 = (0);
while(true){
if((i__4737__auto___10077 < len__4736__auto___10076)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10077]));

var G__10078 = (i__4737__auto___10077 + (1));
i__4737__auto___10077 = G__10078;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_10079__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_10079__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_10079__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__10071_10080 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__10072_10081 = null;
var count__10073_10082 = (0);
var i__10074_10083 = (0);
while(true){
if((i__10074_10083 < count__10073_10082)){
var k_10084__$1 = cljs.core._nth.call(null,chunk__10072_10081,i__10074_10083);
dommy.core.remove_attr_BANG_.call(null,elem,k_10084__$1);


var G__10085 = seq__10071_10080;
var G__10086 = chunk__10072_10081;
var G__10087 = count__10073_10082;
var G__10088 = (i__10074_10083 + (1));
seq__10071_10080 = G__10085;
chunk__10072_10081 = G__10086;
count__10073_10082 = G__10087;
i__10074_10083 = G__10088;
continue;
} else {
var temp__5720__auto___10089 = cljs.core.seq.call(null,seq__10071_10080);
if(temp__5720__auto___10089){
var seq__10071_10090__$1 = temp__5720__auto___10089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10071_10090__$1)){
var c__4556__auto___10091 = cljs.core.chunk_first.call(null,seq__10071_10090__$1);
var G__10092 = cljs.core.chunk_rest.call(null,seq__10071_10090__$1);
var G__10093 = c__4556__auto___10091;
var G__10094 = cljs.core.count.call(null,c__4556__auto___10091);
var G__10095 = (0);
seq__10071_10080 = G__10092;
chunk__10072_10081 = G__10093;
count__10073_10082 = G__10094;
i__10074_10083 = G__10095;
continue;
} else {
var k_10096__$1 = cljs.core.first.call(null,seq__10071_10090__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_10096__$1);


var G__10097 = cljs.core.next.call(null,seq__10071_10090__$1);
var G__10098 = null;
var G__10099 = (0);
var G__10100 = (0);
seq__10071_10080 = G__10097;
chunk__10072_10081 = G__10098;
count__10073_10082 = G__10099;
i__10074_10083 = G__10100;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq10067){
var G__10068 = cljs.core.first.call(null,seq10067);
var seq10067__$1 = cljs.core.next.call(null,seq10067);
var G__10069 = cljs.core.first.call(null,seq10067__$1);
var seq10067__$2 = cljs.core.next.call(null,seq10067__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10068,G__10069,seq10067__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__10102 = arguments.length;
switch (G__10102) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__10108 = arguments.length;
switch (G__10108) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10122 = arguments.length;
var i__4737__auto___10123 = (0);
while(true){
if((i__4737__auto___10123 < len__4736__auto___10122)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10123]));

var G__10124 = (i__4737__auto___10123 + (1));
i__4737__auto___10123 = G__10124;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5718__auto___10125 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___10125)){
var class_list_10126 = temp__5718__auto___10125;
var seq__10109_10127 = cljs.core.seq.call(null,classes__$1);
var chunk__10110_10128 = null;
var count__10111_10129 = (0);
var i__10112_10130 = (0);
while(true){
if((i__10112_10130 < count__10111_10129)){
var c_10131 = cljs.core._nth.call(null,chunk__10110_10128,i__10112_10130);
class_list_10126.add(c_10131);


var G__10132 = seq__10109_10127;
var G__10133 = chunk__10110_10128;
var G__10134 = count__10111_10129;
var G__10135 = (i__10112_10130 + (1));
seq__10109_10127 = G__10132;
chunk__10110_10128 = G__10133;
count__10111_10129 = G__10134;
i__10112_10130 = G__10135;
continue;
} else {
var temp__5720__auto___10136 = cljs.core.seq.call(null,seq__10109_10127);
if(temp__5720__auto___10136){
var seq__10109_10137__$1 = temp__5720__auto___10136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10109_10137__$1)){
var c__4556__auto___10138 = cljs.core.chunk_first.call(null,seq__10109_10137__$1);
var G__10139 = cljs.core.chunk_rest.call(null,seq__10109_10137__$1);
var G__10140 = c__4556__auto___10138;
var G__10141 = cljs.core.count.call(null,c__4556__auto___10138);
var G__10142 = (0);
seq__10109_10127 = G__10139;
chunk__10110_10128 = G__10140;
count__10111_10129 = G__10141;
i__10112_10130 = G__10142;
continue;
} else {
var c_10143 = cljs.core.first.call(null,seq__10109_10137__$1);
class_list_10126.add(c_10143);


var G__10144 = cljs.core.next.call(null,seq__10109_10137__$1);
var G__10145 = null;
var G__10146 = (0);
var G__10147 = (0);
seq__10109_10127 = G__10144;
chunk__10110_10128 = G__10145;
count__10111_10129 = G__10146;
i__10112_10130 = G__10147;
continue;
}
} else {
}
}
break;
}
} else {
var seq__10113_10148 = cljs.core.seq.call(null,classes__$1);
var chunk__10114_10149 = null;
var count__10115_10150 = (0);
var i__10116_10151 = (0);
while(true){
if((i__10116_10151 < count__10115_10150)){
var c_10152 = cljs.core._nth.call(null,chunk__10114_10149,i__10116_10151);
var class_name_10153 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10153,c_10152))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10153 === ""))?c_10152:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_10153)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_10152)].join('')));
}


var G__10154 = seq__10113_10148;
var G__10155 = chunk__10114_10149;
var G__10156 = count__10115_10150;
var G__10157 = (i__10116_10151 + (1));
seq__10113_10148 = G__10154;
chunk__10114_10149 = G__10155;
count__10115_10150 = G__10156;
i__10116_10151 = G__10157;
continue;
} else {
var temp__5720__auto___10158 = cljs.core.seq.call(null,seq__10113_10148);
if(temp__5720__auto___10158){
var seq__10113_10159__$1 = temp__5720__auto___10158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10113_10159__$1)){
var c__4556__auto___10160 = cljs.core.chunk_first.call(null,seq__10113_10159__$1);
var G__10161 = cljs.core.chunk_rest.call(null,seq__10113_10159__$1);
var G__10162 = c__4556__auto___10160;
var G__10163 = cljs.core.count.call(null,c__4556__auto___10160);
var G__10164 = (0);
seq__10113_10148 = G__10161;
chunk__10114_10149 = G__10162;
count__10115_10150 = G__10163;
i__10116_10151 = G__10164;
continue;
} else {
var c_10165 = cljs.core.first.call(null,seq__10113_10159__$1);
var class_name_10166 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10166,c_10165))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10166 === ""))?c_10165:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_10166)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_10165)].join('')));
}


var G__10167 = cljs.core.next.call(null,seq__10113_10159__$1);
var G__10168 = null;
var G__10169 = (0);
var G__10170 = (0);
seq__10113_10148 = G__10167;
chunk__10114_10149 = G__10168;
count__10115_10150 = G__10169;
i__10116_10151 = G__10170;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__10117_10171 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__10118_10172 = null;
var count__10119_10173 = (0);
var i__10120_10174 = (0);
while(true){
if((i__10120_10174 < count__10119_10173)){
var c_10175 = cljs.core._nth.call(null,chunk__10118_10172,i__10120_10174);
dommy.core.add_class_BANG_.call(null,elem,c_10175);


var G__10176 = seq__10117_10171;
var G__10177 = chunk__10118_10172;
var G__10178 = count__10119_10173;
var G__10179 = (i__10120_10174 + (1));
seq__10117_10171 = G__10176;
chunk__10118_10172 = G__10177;
count__10119_10173 = G__10178;
i__10120_10174 = G__10179;
continue;
} else {
var temp__5720__auto___10180 = cljs.core.seq.call(null,seq__10117_10171);
if(temp__5720__auto___10180){
var seq__10117_10181__$1 = temp__5720__auto___10180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10117_10181__$1)){
var c__4556__auto___10182 = cljs.core.chunk_first.call(null,seq__10117_10181__$1);
var G__10183 = cljs.core.chunk_rest.call(null,seq__10117_10181__$1);
var G__10184 = c__4556__auto___10182;
var G__10185 = cljs.core.count.call(null,c__4556__auto___10182);
var G__10186 = (0);
seq__10117_10171 = G__10183;
chunk__10118_10172 = G__10184;
count__10119_10173 = G__10185;
i__10120_10174 = G__10186;
continue;
} else {
var c_10187 = cljs.core.first.call(null,seq__10117_10181__$1);
dommy.core.add_class_BANG_.call(null,elem,c_10187);


var G__10188 = cljs.core.next.call(null,seq__10117_10181__$1);
var G__10189 = null;
var G__10190 = (0);
var G__10191 = (0);
seq__10117_10171 = G__10188;
chunk__10118_10172 = G__10189;
count__10119_10173 = G__10190;
i__10120_10174 = G__10191;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq10105){
var G__10106 = cljs.core.first.call(null,seq10105);
var seq10105__$1 = cljs.core.next.call(null,seq10105);
var G__10107 = cljs.core.first.call(null,seq10105__$1);
var seq10105__$2 = cljs.core.next.call(null,seq10105__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10106,G__10107,seq10105__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__10196 = arguments.length;
switch (G__10196) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10202 = arguments.length;
var i__4737__auto___10203 = (0);
while(true){
if((i__4737__auto___10203 < len__4736__auto___10202)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10203]));

var G__10204 = (i__4737__auto___10203 + (1));
i__4737__auto___10203 = G__10204;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5718__auto___10205 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___10205)){
var class_list_10206 = temp__5718__auto___10205;
class_list_10206.remove(c__$1);
} else {
var class_name_10207 = dommy.core.class$.call(null,elem);
var new_class_name_10208 = dommy.utils.remove_class_str.call(null,class_name_10207,c__$1);
if((class_name_10207 === new_class_name_10208)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_10208);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__10197 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__10198 = null;
var count__10199 = (0);
var i__10200 = (0);
while(true){
if((i__10200 < count__10199)){
var c = cljs.core._nth.call(null,chunk__10198,i__10200);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__10209 = seq__10197;
var G__10210 = chunk__10198;
var G__10211 = count__10199;
var G__10212 = (i__10200 + (1));
seq__10197 = G__10209;
chunk__10198 = G__10210;
count__10199 = G__10211;
i__10200 = G__10212;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10197);
if(temp__5720__auto__){
var seq__10197__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10197__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10197__$1);
var G__10213 = cljs.core.chunk_rest.call(null,seq__10197__$1);
var G__10214 = c__4556__auto__;
var G__10215 = cljs.core.count.call(null,c__4556__auto__);
var G__10216 = (0);
seq__10197 = G__10213;
chunk__10198 = G__10214;
count__10199 = G__10215;
i__10200 = G__10216;
continue;
} else {
var c = cljs.core.first.call(null,seq__10197__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__10217 = cljs.core.next.call(null,seq__10197__$1);
var G__10218 = null;
var G__10219 = (0);
var G__10220 = (0);
seq__10197 = G__10217;
chunk__10198 = G__10218;
count__10199 = G__10219;
i__10200 = G__10220;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq10193){
var G__10194 = cljs.core.first.call(null,seq10193);
var seq10193__$1 = cljs.core.next.call(null,seq10193);
var G__10195 = cljs.core.first.call(null,seq10193__$1);
var seq10193__$2 = cljs.core.next.call(null,seq10193__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10194,G__10195,seq10193__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__10222 = arguments.length;
switch (G__10222) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5718__auto___10224 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___10224)){
var class_list_10225 = temp__5718__auto___10224;
class_list_10225.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,(!(dommy.core.has_class_QMARK_.call(null,elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__10227 = arguments.length;
switch (G__10227) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__10230 = arguments.length;
switch (G__10230) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__10236 = arguments.length;
switch (G__10236) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10243 = arguments.length;
var i__4737__auto___10244 = (0);
while(true){
if((i__4737__auto___10244 < len__4736__auto___10243)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10244]));

var G__10245 = (i__4737__auto___10244 + (1));
i__4737__auto___10244 = G__10245;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__10237 = parent;
G__10237.appendChild(child);

return G__10237;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__10238_10246 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10239_10247 = null;
var count__10240_10248 = (0);
var i__10241_10249 = (0);
while(true){
if((i__10241_10249 < count__10240_10248)){
var c_10250 = cljs.core._nth.call(null,chunk__10239_10247,i__10241_10249);
dommy.core.append_BANG_.call(null,parent,c_10250);


var G__10251 = seq__10238_10246;
var G__10252 = chunk__10239_10247;
var G__10253 = count__10240_10248;
var G__10254 = (i__10241_10249 + (1));
seq__10238_10246 = G__10251;
chunk__10239_10247 = G__10252;
count__10240_10248 = G__10253;
i__10241_10249 = G__10254;
continue;
} else {
var temp__5720__auto___10255 = cljs.core.seq.call(null,seq__10238_10246);
if(temp__5720__auto___10255){
var seq__10238_10256__$1 = temp__5720__auto___10255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10238_10256__$1)){
var c__4556__auto___10257 = cljs.core.chunk_first.call(null,seq__10238_10256__$1);
var G__10258 = cljs.core.chunk_rest.call(null,seq__10238_10256__$1);
var G__10259 = c__4556__auto___10257;
var G__10260 = cljs.core.count.call(null,c__4556__auto___10257);
var G__10261 = (0);
seq__10238_10246 = G__10258;
chunk__10239_10247 = G__10259;
count__10240_10248 = G__10260;
i__10241_10249 = G__10261;
continue;
} else {
var c_10262 = cljs.core.first.call(null,seq__10238_10256__$1);
dommy.core.append_BANG_.call(null,parent,c_10262);


var G__10263 = cljs.core.next.call(null,seq__10238_10256__$1);
var G__10264 = null;
var G__10265 = (0);
var G__10266 = (0);
seq__10238_10246 = G__10263;
chunk__10239_10247 = G__10264;
count__10240_10248 = G__10265;
i__10241_10249 = G__10266;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq10233){
var G__10234 = cljs.core.first.call(null,seq10233);
var seq10233__$1 = cljs.core.next.call(null,seq10233);
var G__10235 = cljs.core.first.call(null,seq10233__$1);
var seq10233__$2 = cljs.core.next.call(null,seq10233__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10234,G__10235,seq10233__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__10271 = arguments.length;
switch (G__10271) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10278 = arguments.length;
var i__4737__auto___10279 = (0);
while(true){
if((i__4737__auto___10279 < len__4736__auto___10278)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10279]));

var G__10280 = (i__4737__auto___10279 + (1));
i__4737__auto___10279 = G__10280;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__10272 = parent;
G__10272.insertBefore(child,parent.firstChild);

return G__10272;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__10273_10281 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10274_10282 = null;
var count__10275_10283 = (0);
var i__10276_10284 = (0);
while(true){
if((i__10276_10284 < count__10275_10283)){
var c_10285 = cljs.core._nth.call(null,chunk__10274_10282,i__10276_10284);
dommy.core.prepend_BANG_.call(null,parent,c_10285);


var G__10286 = seq__10273_10281;
var G__10287 = chunk__10274_10282;
var G__10288 = count__10275_10283;
var G__10289 = (i__10276_10284 + (1));
seq__10273_10281 = G__10286;
chunk__10274_10282 = G__10287;
count__10275_10283 = G__10288;
i__10276_10284 = G__10289;
continue;
} else {
var temp__5720__auto___10290 = cljs.core.seq.call(null,seq__10273_10281);
if(temp__5720__auto___10290){
var seq__10273_10291__$1 = temp__5720__auto___10290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10273_10291__$1)){
var c__4556__auto___10292 = cljs.core.chunk_first.call(null,seq__10273_10291__$1);
var G__10293 = cljs.core.chunk_rest.call(null,seq__10273_10291__$1);
var G__10294 = c__4556__auto___10292;
var G__10295 = cljs.core.count.call(null,c__4556__auto___10292);
var G__10296 = (0);
seq__10273_10281 = G__10293;
chunk__10274_10282 = G__10294;
count__10275_10283 = G__10295;
i__10276_10284 = G__10296;
continue;
} else {
var c_10297 = cljs.core.first.call(null,seq__10273_10291__$1);
dommy.core.prepend_BANG_.call(null,parent,c_10297);


var G__10298 = cljs.core.next.call(null,seq__10273_10291__$1);
var G__10299 = null;
var G__10300 = (0);
var G__10301 = (0);
seq__10273_10281 = G__10298;
chunk__10274_10282 = G__10299;
count__10275_10283 = G__10300;
i__10276_10284 = G__10301;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq10268){
var G__10269 = cljs.core.first.call(null,seq10268);
var seq10268__$1 = cljs.core.next.call(null,seq10268);
var G__10270 = cljs.core.first.call(null,seq10268__$1);
var seq10268__$2 = cljs.core.next.call(null,seq10268__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10269,G__10270,seq10268__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5718__auto___10302 = other.nextSibling;
if(cljs.core.truth_(temp__5718__auto___10302)){
var next_10303 = temp__5718__auto___10302;
dommy.core.insert_before_BANG_.call(null,elem,next_10303);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__10305 = arguments.length;
switch (G__10305) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__10306 = p;
G__10306.removeChild(elem);

return G__10306;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10308){
var vec__10309 = p__10308;
var special_mouse_event = cljs.core.nth.call(null,vec__10309,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__10309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4126__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = related_target;
if(cljs.core.truth_(and__4115__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4115__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4115__auto__ = selected_target;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4115__auto__;
}
})())){
(event.selectedTarget = selected_target);

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4126__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10315 = arguments.length;
var i__4737__auto___10316 = (0);
while(true){
if((i__4737__auto___10316 < len__4736__auto___10315)){
args__4742__auto__.push((arguments[i__4737__auto___10316]));

var G__10317 = (i__4737__auto___10316 + (1));
i__4737__auto___10316 = G__10317;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq10312){
var G__10313 = cljs.core.first.call(null,seq10312);
var seq10312__$1 = cljs.core.next.call(null,seq10312);
var G__10314 = cljs.core.first.call(null,seq10312__$1);
var seq10312__$2 = cljs.core.next.call(null,seq10312__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10313,G__10314,seq10312__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10399 = arguments.length;
var i__4737__auto___10400 = (0);
while(true){
if((i__4737__auto___10400 < len__4736__auto___10399)){
args__4742__auto__.push((arguments[i__4737__auto___10400]));

var G__10401 = (i__4737__auto___10400 + (1));
i__4737__auto___10400 = G__10401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__10320_10402 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10403 = cljs.core.nth.call(null,vec__10320_10402,(0),null);
var selector_10404 = cljs.core.nth.call(null,vec__10320_10402,(1),null);
var seq__10323_10405 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10330_10406 = null;
var count__10331_10407 = (0);
var i__10332_10408 = (0);
while(true){
if((i__10332_10408 < count__10331_10407)){
var vec__10369_10409 = cljs.core._nth.call(null,chunk__10330_10406,i__10332_10408);
var orig_type_10410 = cljs.core.nth.call(null,vec__10369_10409,(0),null);
var f_10411 = cljs.core.nth.call(null,vec__10369_10409,(1),null);
var seq__10333_10412 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10410,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_10410,cljs.core.identity])));
var chunk__10335_10413 = null;
var count__10336_10414 = (0);
var i__10337_10415 = (0);
while(true){
if((i__10337_10415 < count__10336_10414)){
var vec__10378_10416 = cljs.core._nth.call(null,chunk__10335_10413,i__10337_10415);
var actual_type_10417 = cljs.core.nth.call(null,vec__10378_10416,(0),null);
var factory_10418 = cljs.core.nth.call(null,vec__10378_10416,(1),null);
var canonical_f_10419 = (cljs.core.truth_(selector_10404)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10403,selector_10404):cljs.core.identity).call(null,factory_10418.call(null,f_10411));
dommy.core.update_event_listeners_BANG_.call(null,elem_10403,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10404,actual_type_10417,f_10411], null),canonical_f_10419);

if(cljs.core.truth_(elem_10403.addEventListener)){
elem_10403.addEventListener(cljs.core.name.call(null,actual_type_10417),canonical_f_10419);
} else {
elem_10403.attachEvent(cljs.core.name.call(null,actual_type_10417),canonical_f_10419);
}


var G__10420 = seq__10333_10412;
var G__10421 = chunk__10335_10413;
var G__10422 = count__10336_10414;
var G__10423 = (i__10337_10415 + (1));
seq__10333_10412 = G__10420;
chunk__10335_10413 = G__10421;
count__10336_10414 = G__10422;
i__10337_10415 = G__10423;
continue;
} else {
var temp__5720__auto___10424 = cljs.core.seq.call(null,seq__10333_10412);
if(temp__5720__auto___10424){
var seq__10333_10425__$1 = temp__5720__auto___10424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10333_10425__$1)){
var c__4556__auto___10426 = cljs.core.chunk_first.call(null,seq__10333_10425__$1);
var G__10427 = cljs.core.chunk_rest.call(null,seq__10333_10425__$1);
var G__10428 = c__4556__auto___10426;
var G__10429 = cljs.core.count.call(null,c__4556__auto___10426);
var G__10430 = (0);
seq__10333_10412 = G__10427;
chunk__10335_10413 = G__10428;
count__10336_10414 = G__10429;
i__10337_10415 = G__10430;
continue;
} else {
var vec__10381_10431 = cljs.core.first.call(null,seq__10333_10425__$1);
var actual_type_10432 = cljs.core.nth.call(null,vec__10381_10431,(0),null);
var factory_10433 = cljs.core.nth.call(null,vec__10381_10431,(1),null);
var canonical_f_10434 = (cljs.core.truth_(selector_10404)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10403,selector_10404):cljs.core.identity).call(null,factory_10433.call(null,f_10411));
dommy.core.update_event_listeners_BANG_.call(null,elem_10403,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10404,actual_type_10432,f_10411], null),canonical_f_10434);

if(cljs.core.truth_(elem_10403.addEventListener)){
elem_10403.addEventListener(cljs.core.name.call(null,actual_type_10432),canonical_f_10434);
} else {
elem_10403.attachEvent(cljs.core.name.call(null,actual_type_10432),canonical_f_10434);
}


var G__10435 = cljs.core.next.call(null,seq__10333_10425__$1);
var G__10436 = null;
var G__10437 = (0);
var G__10438 = (0);
seq__10333_10412 = G__10435;
chunk__10335_10413 = G__10436;
count__10336_10414 = G__10437;
i__10337_10415 = G__10438;
continue;
}
} else {
}
}
break;
}

var G__10439 = seq__10323_10405;
var G__10440 = chunk__10330_10406;
var G__10441 = count__10331_10407;
var G__10442 = (i__10332_10408 + (1));
seq__10323_10405 = G__10439;
chunk__10330_10406 = G__10440;
count__10331_10407 = G__10441;
i__10332_10408 = G__10442;
continue;
} else {
var temp__5720__auto___10443 = cljs.core.seq.call(null,seq__10323_10405);
if(temp__5720__auto___10443){
var seq__10323_10444__$1 = temp__5720__auto___10443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10323_10444__$1)){
var c__4556__auto___10445 = cljs.core.chunk_first.call(null,seq__10323_10444__$1);
var G__10446 = cljs.core.chunk_rest.call(null,seq__10323_10444__$1);
var G__10447 = c__4556__auto___10445;
var G__10448 = cljs.core.count.call(null,c__4556__auto___10445);
var G__10449 = (0);
seq__10323_10405 = G__10446;
chunk__10330_10406 = G__10447;
count__10331_10407 = G__10448;
i__10332_10408 = G__10449;
continue;
} else {
var vec__10384_10450 = cljs.core.first.call(null,seq__10323_10444__$1);
var orig_type_10451 = cljs.core.nth.call(null,vec__10384_10450,(0),null);
var f_10452 = cljs.core.nth.call(null,vec__10384_10450,(1),null);
var seq__10324_10453 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10451,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_10451,cljs.core.identity])));
var chunk__10326_10454 = null;
var count__10327_10455 = (0);
var i__10328_10456 = (0);
while(true){
if((i__10328_10456 < count__10327_10455)){
var vec__10393_10457 = cljs.core._nth.call(null,chunk__10326_10454,i__10328_10456);
var actual_type_10458 = cljs.core.nth.call(null,vec__10393_10457,(0),null);
var factory_10459 = cljs.core.nth.call(null,vec__10393_10457,(1),null);
var canonical_f_10460 = (cljs.core.truth_(selector_10404)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10403,selector_10404):cljs.core.identity).call(null,factory_10459.call(null,f_10452));
dommy.core.update_event_listeners_BANG_.call(null,elem_10403,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10404,actual_type_10458,f_10452], null),canonical_f_10460);

if(cljs.core.truth_(elem_10403.addEventListener)){
elem_10403.addEventListener(cljs.core.name.call(null,actual_type_10458),canonical_f_10460);
} else {
elem_10403.attachEvent(cljs.core.name.call(null,actual_type_10458),canonical_f_10460);
}


var G__10461 = seq__10324_10453;
var G__10462 = chunk__10326_10454;
var G__10463 = count__10327_10455;
var G__10464 = (i__10328_10456 + (1));
seq__10324_10453 = G__10461;
chunk__10326_10454 = G__10462;
count__10327_10455 = G__10463;
i__10328_10456 = G__10464;
continue;
} else {
var temp__5720__auto___10465__$1 = cljs.core.seq.call(null,seq__10324_10453);
if(temp__5720__auto___10465__$1){
var seq__10324_10466__$1 = temp__5720__auto___10465__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10324_10466__$1)){
var c__4556__auto___10467 = cljs.core.chunk_first.call(null,seq__10324_10466__$1);
var G__10468 = cljs.core.chunk_rest.call(null,seq__10324_10466__$1);
var G__10469 = c__4556__auto___10467;
var G__10470 = cljs.core.count.call(null,c__4556__auto___10467);
var G__10471 = (0);
seq__10324_10453 = G__10468;
chunk__10326_10454 = G__10469;
count__10327_10455 = G__10470;
i__10328_10456 = G__10471;
continue;
} else {
var vec__10396_10472 = cljs.core.first.call(null,seq__10324_10466__$1);
var actual_type_10473 = cljs.core.nth.call(null,vec__10396_10472,(0),null);
var factory_10474 = cljs.core.nth.call(null,vec__10396_10472,(1),null);
var canonical_f_10475 = (cljs.core.truth_(selector_10404)?cljs.core.partial.call(null,dommy.core.live_listener,elem_10403,selector_10404):cljs.core.identity).call(null,factory_10474.call(null,f_10452));
dommy.core.update_event_listeners_BANG_.call(null,elem_10403,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10404,actual_type_10473,f_10452], null),canonical_f_10475);

if(cljs.core.truth_(elem_10403.addEventListener)){
elem_10403.addEventListener(cljs.core.name.call(null,actual_type_10473),canonical_f_10475);
} else {
elem_10403.attachEvent(cljs.core.name.call(null,actual_type_10473),canonical_f_10475);
}


var G__10476 = cljs.core.next.call(null,seq__10324_10466__$1);
var G__10477 = null;
var G__10478 = (0);
var G__10479 = (0);
seq__10324_10453 = G__10476;
chunk__10326_10454 = G__10477;
count__10327_10455 = G__10478;
i__10328_10456 = G__10479;
continue;
}
} else {
}
}
break;
}

var G__10480 = cljs.core.next.call(null,seq__10323_10444__$1);
var G__10481 = null;
var G__10482 = (0);
var G__10483 = (0);
seq__10323_10405 = G__10480;
chunk__10330_10406 = G__10481;
count__10331_10407 = G__10482;
i__10332_10408 = G__10483;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq10318){
var G__10319 = cljs.core.first.call(null,seq10318);
var seq10318__$1 = cljs.core.next.call(null,seq10318);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10319,seq10318__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10565 = arguments.length;
var i__4737__auto___10566 = (0);
while(true){
if((i__4737__auto___10566 < len__4736__auto___10565)){
args__4742__auto__.push((arguments[i__4737__auto___10566]));

var G__10567 = (i__4737__auto___10566 + (1));
i__4737__auto___10566 = G__10567;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__10486_10568 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10569 = cljs.core.nth.call(null,vec__10486_10568,(0),null);
var selector_10570 = cljs.core.nth.call(null,vec__10486_10568,(1),null);
var seq__10489_10571 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10496_10572 = null;
var count__10497_10573 = (0);
var i__10498_10574 = (0);
while(true){
if((i__10498_10574 < count__10497_10573)){
var vec__10535_10575 = cljs.core._nth.call(null,chunk__10496_10572,i__10498_10574);
var orig_type_10576 = cljs.core.nth.call(null,vec__10535_10575,(0),null);
var f_10577 = cljs.core.nth.call(null,vec__10535_10575,(1),null);
var seq__10499_10578 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10576,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_10576,cljs.core.identity])));
var chunk__10501_10579 = null;
var count__10502_10580 = (0);
var i__10503_10581 = (0);
while(true){
if((i__10503_10581 < count__10502_10580)){
var vec__10544_10582 = cljs.core._nth.call(null,chunk__10501_10579,i__10503_10581);
var actual_type_10583 = cljs.core.nth.call(null,vec__10544_10582,(0),null);
var __10584 = cljs.core.nth.call(null,vec__10544_10582,(1),null);
var keys_10585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10570,actual_type_10583,f_10577], null);
var canonical_f_10586 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10569),keys_10585);
dommy.core.update_event_listeners_BANG_.call(null,elem_10569,dommy.utils.dissoc_in,keys_10585);

if(cljs.core.truth_(elem_10569.removeEventListener)){
elem_10569.removeEventListener(cljs.core.name.call(null,actual_type_10583),canonical_f_10586);
} else {
elem_10569.detachEvent(cljs.core.name.call(null,actual_type_10583),canonical_f_10586);
}


var G__10587 = seq__10499_10578;
var G__10588 = chunk__10501_10579;
var G__10589 = count__10502_10580;
var G__10590 = (i__10503_10581 + (1));
seq__10499_10578 = G__10587;
chunk__10501_10579 = G__10588;
count__10502_10580 = G__10589;
i__10503_10581 = G__10590;
continue;
} else {
var temp__5720__auto___10591 = cljs.core.seq.call(null,seq__10499_10578);
if(temp__5720__auto___10591){
var seq__10499_10592__$1 = temp__5720__auto___10591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10499_10592__$1)){
var c__4556__auto___10593 = cljs.core.chunk_first.call(null,seq__10499_10592__$1);
var G__10594 = cljs.core.chunk_rest.call(null,seq__10499_10592__$1);
var G__10595 = c__4556__auto___10593;
var G__10596 = cljs.core.count.call(null,c__4556__auto___10593);
var G__10597 = (0);
seq__10499_10578 = G__10594;
chunk__10501_10579 = G__10595;
count__10502_10580 = G__10596;
i__10503_10581 = G__10597;
continue;
} else {
var vec__10547_10598 = cljs.core.first.call(null,seq__10499_10592__$1);
var actual_type_10599 = cljs.core.nth.call(null,vec__10547_10598,(0),null);
var __10600 = cljs.core.nth.call(null,vec__10547_10598,(1),null);
var keys_10601 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10570,actual_type_10599,f_10577], null);
var canonical_f_10602 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10569),keys_10601);
dommy.core.update_event_listeners_BANG_.call(null,elem_10569,dommy.utils.dissoc_in,keys_10601);

if(cljs.core.truth_(elem_10569.removeEventListener)){
elem_10569.removeEventListener(cljs.core.name.call(null,actual_type_10599),canonical_f_10602);
} else {
elem_10569.detachEvent(cljs.core.name.call(null,actual_type_10599),canonical_f_10602);
}


var G__10603 = cljs.core.next.call(null,seq__10499_10592__$1);
var G__10604 = null;
var G__10605 = (0);
var G__10606 = (0);
seq__10499_10578 = G__10603;
chunk__10501_10579 = G__10604;
count__10502_10580 = G__10605;
i__10503_10581 = G__10606;
continue;
}
} else {
}
}
break;
}

var G__10607 = seq__10489_10571;
var G__10608 = chunk__10496_10572;
var G__10609 = count__10497_10573;
var G__10610 = (i__10498_10574 + (1));
seq__10489_10571 = G__10607;
chunk__10496_10572 = G__10608;
count__10497_10573 = G__10609;
i__10498_10574 = G__10610;
continue;
} else {
var temp__5720__auto___10611 = cljs.core.seq.call(null,seq__10489_10571);
if(temp__5720__auto___10611){
var seq__10489_10612__$1 = temp__5720__auto___10611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10489_10612__$1)){
var c__4556__auto___10613 = cljs.core.chunk_first.call(null,seq__10489_10612__$1);
var G__10614 = cljs.core.chunk_rest.call(null,seq__10489_10612__$1);
var G__10615 = c__4556__auto___10613;
var G__10616 = cljs.core.count.call(null,c__4556__auto___10613);
var G__10617 = (0);
seq__10489_10571 = G__10614;
chunk__10496_10572 = G__10615;
count__10497_10573 = G__10616;
i__10498_10574 = G__10617;
continue;
} else {
var vec__10550_10618 = cljs.core.first.call(null,seq__10489_10612__$1);
var orig_type_10619 = cljs.core.nth.call(null,vec__10550_10618,(0),null);
var f_10620 = cljs.core.nth.call(null,vec__10550_10618,(1),null);
var seq__10490_10621 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_10619,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_10619,cljs.core.identity])));
var chunk__10492_10622 = null;
var count__10493_10623 = (0);
var i__10494_10624 = (0);
while(true){
if((i__10494_10624 < count__10493_10623)){
var vec__10559_10625 = cljs.core._nth.call(null,chunk__10492_10622,i__10494_10624);
var actual_type_10626 = cljs.core.nth.call(null,vec__10559_10625,(0),null);
var __10627 = cljs.core.nth.call(null,vec__10559_10625,(1),null);
var keys_10628 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10570,actual_type_10626,f_10620], null);
var canonical_f_10629 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10569),keys_10628);
dommy.core.update_event_listeners_BANG_.call(null,elem_10569,dommy.utils.dissoc_in,keys_10628);

if(cljs.core.truth_(elem_10569.removeEventListener)){
elem_10569.removeEventListener(cljs.core.name.call(null,actual_type_10626),canonical_f_10629);
} else {
elem_10569.detachEvent(cljs.core.name.call(null,actual_type_10626),canonical_f_10629);
}


var G__10630 = seq__10490_10621;
var G__10631 = chunk__10492_10622;
var G__10632 = count__10493_10623;
var G__10633 = (i__10494_10624 + (1));
seq__10490_10621 = G__10630;
chunk__10492_10622 = G__10631;
count__10493_10623 = G__10632;
i__10494_10624 = G__10633;
continue;
} else {
var temp__5720__auto___10634__$1 = cljs.core.seq.call(null,seq__10490_10621);
if(temp__5720__auto___10634__$1){
var seq__10490_10635__$1 = temp__5720__auto___10634__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10490_10635__$1)){
var c__4556__auto___10636 = cljs.core.chunk_first.call(null,seq__10490_10635__$1);
var G__10637 = cljs.core.chunk_rest.call(null,seq__10490_10635__$1);
var G__10638 = c__4556__auto___10636;
var G__10639 = cljs.core.count.call(null,c__4556__auto___10636);
var G__10640 = (0);
seq__10490_10621 = G__10637;
chunk__10492_10622 = G__10638;
count__10493_10623 = G__10639;
i__10494_10624 = G__10640;
continue;
} else {
var vec__10562_10641 = cljs.core.first.call(null,seq__10490_10635__$1);
var actual_type_10642 = cljs.core.nth.call(null,vec__10562_10641,(0),null);
var __10643 = cljs.core.nth.call(null,vec__10562_10641,(1),null);
var keys_10644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_10570,actual_type_10642,f_10620], null);
var canonical_f_10645 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_10569),keys_10644);
dommy.core.update_event_listeners_BANG_.call(null,elem_10569,dommy.utils.dissoc_in,keys_10644);

if(cljs.core.truth_(elem_10569.removeEventListener)){
elem_10569.removeEventListener(cljs.core.name.call(null,actual_type_10642),canonical_f_10645);
} else {
elem_10569.detachEvent(cljs.core.name.call(null,actual_type_10642),canonical_f_10645);
}


var G__10646 = cljs.core.next.call(null,seq__10490_10635__$1);
var G__10647 = null;
var G__10648 = (0);
var G__10649 = (0);
seq__10490_10621 = G__10646;
chunk__10492_10622 = G__10647;
count__10493_10623 = G__10648;
i__10494_10624 = G__10649;
continue;
}
} else {
}
}
break;
}

var G__10650 = cljs.core.next.call(null,seq__10489_10612__$1);
var G__10651 = null;
var G__10652 = (0);
var G__10653 = (0);
seq__10489_10571 = G__10650;
chunk__10496_10572 = G__10651;
count__10497_10573 = G__10652;
i__10498_10574 = G__10653;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq10484){
var G__10485 = cljs.core.first.call(null,seq10484);
var seq10484__$1 = cljs.core.next.call(null,seq10484);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10485,seq10484__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10675 = arguments.length;
var i__4737__auto___10676 = (0);
while(true){
if((i__4737__auto___10676 < len__4736__auto___10675)){
args__4742__auto__.push((arguments[i__4737__auto___10676]));

var G__10677 = (i__4737__auto___10676 + (1));
i__4737__auto___10676 = G__10677;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__10656_10678 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_10679 = cljs.core.nth.call(null,vec__10656_10678,(0),null);
var selector_10680 = cljs.core.nth.call(null,vec__10656_10678,(1),null);
var seq__10659_10681 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10660_10682 = null;
var count__10661_10683 = (0);
var i__10662_10684 = (0);
while(true){
if((i__10662_10684 < count__10661_10683)){
var vec__10669_10685 = cljs.core._nth.call(null,chunk__10660_10682,i__10662_10684);
var type_10686 = cljs.core.nth.call(null,vec__10669_10685,(0),null);
var f_10687 = cljs.core.nth.call(null,vec__10669_10685,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_10686,((function (seq__10659_10681,chunk__10660_10682,count__10661_10683,i__10662_10684,vec__10669_10685,type_10686,f_10687,vec__10656_10678,elem_10679,selector_10680){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_10686,dommy$core$this_fn);

return f_10687.call(null,e);
});})(seq__10659_10681,chunk__10660_10682,count__10661_10683,i__10662_10684,vec__10669_10685,type_10686,f_10687,vec__10656_10678,elem_10679,selector_10680))
);


var G__10688 = seq__10659_10681;
var G__10689 = chunk__10660_10682;
var G__10690 = count__10661_10683;
var G__10691 = (i__10662_10684 + (1));
seq__10659_10681 = G__10688;
chunk__10660_10682 = G__10689;
count__10661_10683 = G__10690;
i__10662_10684 = G__10691;
continue;
} else {
var temp__5720__auto___10692 = cljs.core.seq.call(null,seq__10659_10681);
if(temp__5720__auto___10692){
var seq__10659_10693__$1 = temp__5720__auto___10692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10659_10693__$1)){
var c__4556__auto___10694 = cljs.core.chunk_first.call(null,seq__10659_10693__$1);
var G__10695 = cljs.core.chunk_rest.call(null,seq__10659_10693__$1);
var G__10696 = c__4556__auto___10694;
var G__10697 = cljs.core.count.call(null,c__4556__auto___10694);
var G__10698 = (0);
seq__10659_10681 = G__10695;
chunk__10660_10682 = G__10696;
count__10661_10683 = G__10697;
i__10662_10684 = G__10698;
continue;
} else {
var vec__10672_10699 = cljs.core.first.call(null,seq__10659_10693__$1);
var type_10700 = cljs.core.nth.call(null,vec__10672_10699,(0),null);
var f_10701 = cljs.core.nth.call(null,vec__10672_10699,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_10700,((function (seq__10659_10681,chunk__10660_10682,count__10661_10683,i__10662_10684,vec__10672_10699,type_10700,f_10701,seq__10659_10693__$1,temp__5720__auto___10692,vec__10656_10678,elem_10679,selector_10680){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_10700,dommy$core$this_fn);

return f_10701.call(null,e);
});})(seq__10659_10681,chunk__10660_10682,count__10661_10683,i__10662_10684,vec__10672_10699,type_10700,f_10701,seq__10659_10693__$1,temp__5720__auto___10692,vec__10656_10678,elem_10679,selector_10680))
);


var G__10702 = cljs.core.next.call(null,seq__10659_10693__$1);
var G__10703 = null;
var G__10704 = (0);
var G__10705 = (0);
seq__10659_10681 = G__10702;
chunk__10660_10682 = G__10703;
count__10661_10683 = G__10704;
i__10662_10684 = G__10705;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq10654){
var G__10655 = cljs.core.first.call(null,seq10654);
var seq10654__$1 = cljs.core.next.call(null,seq10654);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10655,seq10654__$1);
}));


//# sourceMappingURL=core.js.map
