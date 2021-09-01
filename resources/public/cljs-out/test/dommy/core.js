// Compiled by ClojureScript 1.10.773 {}
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
var G__10495 = arguments.length;
switch (G__10495) {
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
var G__10498 = arguments.length;
switch (G__10498) {
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
var G__10502 = arguments.length;
switch (G__10502) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__10500_SHARP_){
return (!((p1__10500_SHARP_ === base)));
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
var len__4736__auto___10522 = arguments.length;
var i__4737__auto___10523 = (0);
while(true){
if((i__4737__auto___10523 < len__4736__auto___10522)){
args__4742__auto__.push((arguments[i__4737__auto___10523]));

var G__10524 = (i__4737__auto___10523 + (1));
i__4737__auto___10523 = G__10524;
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
var seq__10506_10525 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__10507_10526 = null;
var count__10508_10527 = (0);
var i__10509_10528 = (0);
while(true){
if((i__10509_10528 < count__10508_10527)){
var vec__10516_10529 = cljs.core._nth.call(null,chunk__10507_10526,i__10509_10528);
var k_10530 = cljs.core.nth.call(null,vec__10516_10529,(0),null);
var v_10531 = cljs.core.nth.call(null,vec__10516_10529,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_10530),v_10531);


var G__10532 = seq__10506_10525;
var G__10533 = chunk__10507_10526;
var G__10534 = count__10508_10527;
var G__10535 = (i__10509_10528 + (1));
seq__10506_10525 = G__10532;
chunk__10507_10526 = G__10533;
count__10508_10527 = G__10534;
i__10509_10528 = G__10535;
continue;
} else {
var temp__5720__auto___10536 = cljs.core.seq.call(null,seq__10506_10525);
if(temp__5720__auto___10536){
var seq__10506_10537__$1 = temp__5720__auto___10536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10506_10537__$1)){
var c__4556__auto___10538 = cljs.core.chunk_first.call(null,seq__10506_10537__$1);
var G__10539 = cljs.core.chunk_rest.call(null,seq__10506_10537__$1);
var G__10540 = c__4556__auto___10538;
var G__10541 = cljs.core.count.call(null,c__4556__auto___10538);
var G__10542 = (0);
seq__10506_10525 = G__10539;
chunk__10507_10526 = G__10540;
count__10508_10527 = G__10541;
i__10509_10528 = G__10542;
continue;
} else {
var vec__10519_10543 = cljs.core.first.call(null,seq__10506_10537__$1);
var k_10544 = cljs.core.nth.call(null,vec__10519_10543,(0),null);
var v_10545 = cljs.core.nth.call(null,vec__10519_10543,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_10544),v_10545);


var G__10546 = cljs.core.next.call(null,seq__10506_10537__$1);
var G__10547 = null;
var G__10548 = (0);
var G__10549 = (0);
seq__10506_10525 = G__10546;
chunk__10507_10526 = G__10547;
count__10508_10527 = G__10548;
i__10509_10528 = G__10549;
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
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq10504){
var G__10505 = cljs.core.first.call(null,seq10504);
var seq10504__$1 = cljs.core.next.call(null,seq10504);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10505,seq10504__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10556 = arguments.length;
var i__4737__auto___10557 = (0);
while(true){
if((i__4737__auto___10557 < len__4736__auto___10556)){
args__4742__auto__.push((arguments[i__4737__auto___10557]));

var G__10558 = (i__4737__auto___10557 + (1));
i__4737__auto___10557 = G__10558;
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
var seq__10552_10559 = cljs.core.seq.call(null,keywords);
var chunk__10553_10560 = null;
var count__10554_10561 = (0);
var i__10555_10562 = (0);
while(true){
if((i__10555_10562 < count__10554_10561)){
var kw_10563 = cljs.core._nth.call(null,chunk__10553_10560,i__10555_10562);
style.removeProperty(dommy.utils.as_str.call(null,kw_10563));


var G__10564 = seq__10552_10559;
var G__10565 = chunk__10553_10560;
var G__10566 = count__10554_10561;
var G__10567 = (i__10555_10562 + (1));
seq__10552_10559 = G__10564;
chunk__10553_10560 = G__10565;
count__10554_10561 = G__10566;
i__10555_10562 = G__10567;
continue;
} else {
var temp__5720__auto___10568 = cljs.core.seq.call(null,seq__10552_10559);
if(temp__5720__auto___10568){
var seq__10552_10569__$1 = temp__5720__auto___10568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10552_10569__$1)){
var c__4556__auto___10570 = cljs.core.chunk_first.call(null,seq__10552_10569__$1);
var G__10571 = cljs.core.chunk_rest.call(null,seq__10552_10569__$1);
var G__10572 = c__4556__auto___10570;
var G__10573 = cljs.core.count.call(null,c__4556__auto___10570);
var G__10574 = (0);
seq__10552_10559 = G__10571;
chunk__10553_10560 = G__10572;
count__10554_10561 = G__10573;
i__10555_10562 = G__10574;
continue;
} else {
var kw_10575 = cljs.core.first.call(null,seq__10552_10569__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_10575));


var G__10576 = cljs.core.next.call(null,seq__10552_10569__$1);
var G__10577 = null;
var G__10578 = (0);
var G__10579 = (0);
seq__10552_10559 = G__10576;
chunk__10553_10560 = G__10577;
count__10554_10561 = G__10578;
i__10555_10562 = G__10579;
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
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq10550){
var G__10551 = cljs.core.first.call(null,seq10550);
var seq10550__$1 = cljs.core.next.call(null,seq10550);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10551,seq10550__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10598 = arguments.length;
var i__4737__auto___10599 = (0);
while(true){
if((i__4737__auto___10599 < len__4736__auto___10598)){
args__4742__auto__.push((arguments[i__4737__auto___10599]));

var G__10600 = (i__4737__auto___10599 + (1));
i__4737__auto___10599 = G__10600;
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

var seq__10582_10601 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__10583_10602 = null;
var count__10584_10603 = (0);
var i__10585_10604 = (0);
while(true){
if((i__10585_10604 < count__10584_10603)){
var vec__10592_10605 = cljs.core._nth.call(null,chunk__10583_10602,i__10585_10604);
var k_10606 = cljs.core.nth.call(null,vec__10592_10605,(0),null);
var v_10607 = cljs.core.nth.call(null,vec__10592_10605,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_10606,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10607),"px"].join(''));


var G__10608 = seq__10582_10601;
var G__10609 = chunk__10583_10602;
var G__10610 = count__10584_10603;
var G__10611 = (i__10585_10604 + (1));
seq__10582_10601 = G__10608;
chunk__10583_10602 = G__10609;
count__10584_10603 = G__10610;
i__10585_10604 = G__10611;
continue;
} else {
var temp__5720__auto___10612 = cljs.core.seq.call(null,seq__10582_10601);
if(temp__5720__auto___10612){
var seq__10582_10613__$1 = temp__5720__auto___10612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10582_10613__$1)){
var c__4556__auto___10614 = cljs.core.chunk_first.call(null,seq__10582_10613__$1);
var G__10615 = cljs.core.chunk_rest.call(null,seq__10582_10613__$1);
var G__10616 = c__4556__auto___10614;
var G__10617 = cljs.core.count.call(null,c__4556__auto___10614);
var G__10618 = (0);
seq__10582_10601 = G__10615;
chunk__10583_10602 = G__10616;
count__10584_10603 = G__10617;
i__10585_10604 = G__10618;
continue;
} else {
var vec__10595_10619 = cljs.core.first.call(null,seq__10582_10613__$1);
var k_10620 = cljs.core.nth.call(null,vec__10595_10619,(0),null);
var v_10621 = cljs.core.nth.call(null,vec__10595_10619,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_10620,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_10621),"px"].join(''));


var G__10622 = cljs.core.next.call(null,seq__10582_10613__$1);
var G__10623 = null;
var G__10624 = (0);
var G__10625 = (0);
seq__10582_10601 = G__10622;
chunk__10583_10602 = G__10623;
count__10584_10603 = G__10624;
i__10585_10604 = G__10625;
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
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq10580){
var G__10581 = cljs.core.first.call(null,seq10580);
var seq10580__$1 = cljs.core.next.call(null,seq10580);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10581,seq10580__$1);
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
var G__10631 = arguments.length;
switch (G__10631) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10651 = arguments.length;
var i__4737__auto___10652 = (0);
while(true){
if((i__4737__auto___10652 < len__4736__auto___10651)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10652]));

var G__10653 = (i__4737__auto___10652 + (1));
i__4737__auto___10652 = G__10653;
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
var G__10632 = elem;
(G__10632[k__$1] = v);

return G__10632;
} else {
var G__10633 = elem;
G__10633.setAttribute(k__$1,v);

return G__10633;
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

var seq__10634_10654 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__10635_10655 = null;
var count__10636_10656 = (0);
var i__10637_10657 = (0);
while(true){
if((i__10637_10657 < count__10636_10656)){
var vec__10644_10658 = cljs.core._nth.call(null,chunk__10635_10655,i__10637_10657);
var k_10659__$1 = cljs.core.nth.call(null,vec__10644_10658,(0),null);
var v_10660__$1 = cljs.core.nth.call(null,vec__10644_10658,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_10659__$1,v_10660__$1);


var G__10661 = seq__10634_10654;
var G__10662 = chunk__10635_10655;
var G__10663 = count__10636_10656;
var G__10664 = (i__10637_10657 + (1));
seq__10634_10654 = G__10661;
chunk__10635_10655 = G__10662;
count__10636_10656 = G__10663;
i__10637_10657 = G__10664;
continue;
} else {
var temp__5720__auto___10665 = cljs.core.seq.call(null,seq__10634_10654);
if(temp__5720__auto___10665){
var seq__10634_10666__$1 = temp__5720__auto___10665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10634_10666__$1)){
var c__4556__auto___10667 = cljs.core.chunk_first.call(null,seq__10634_10666__$1);
var G__10668 = cljs.core.chunk_rest.call(null,seq__10634_10666__$1);
var G__10669 = c__4556__auto___10667;
var G__10670 = cljs.core.count.call(null,c__4556__auto___10667);
var G__10671 = (0);
seq__10634_10654 = G__10668;
chunk__10635_10655 = G__10669;
count__10636_10656 = G__10670;
i__10637_10657 = G__10671;
continue;
} else {
var vec__10647_10672 = cljs.core.first.call(null,seq__10634_10666__$1);
var k_10673__$1 = cljs.core.nth.call(null,vec__10647_10672,(0),null);
var v_10674__$1 = cljs.core.nth.call(null,vec__10647_10672,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_10673__$1,v_10674__$1);


var G__10675 = cljs.core.next.call(null,seq__10634_10666__$1);
var G__10676 = null;
var G__10677 = (0);
var G__10678 = (0);
seq__10634_10654 = G__10675;
chunk__10635_10655 = G__10676;
count__10636_10656 = G__10677;
i__10637_10657 = G__10678;
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
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq10627){
var G__10628 = cljs.core.first.call(null,seq10627);
var seq10627__$1 = cljs.core.next.call(null,seq10627);
var G__10629 = cljs.core.first.call(null,seq10627__$1);
var seq10627__$2 = cljs.core.next.call(null,seq10627__$1);
var G__10630 = cljs.core.first.call(null,seq10627__$2);
var seq10627__$3 = cljs.core.next.call(null,seq10627__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10628,G__10629,G__10630,seq10627__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__10683 = arguments.length;
switch (G__10683) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10689 = arguments.length;
var i__4737__auto___10690 = (0);
while(true){
if((i__4737__auto___10690 < len__4736__auto___10689)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10690]));

var G__10691 = (i__4737__auto___10690 + (1));
i__4737__auto___10690 = G__10691;
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
var k_10692__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_10692__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_10692__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__10684_10693 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__10685_10694 = null;
var count__10686_10695 = (0);
var i__10687_10696 = (0);
while(true){
if((i__10687_10696 < count__10686_10695)){
var k_10697__$1 = cljs.core._nth.call(null,chunk__10685_10694,i__10687_10696);
dommy.core.remove_attr_BANG_.call(null,elem,k_10697__$1);


var G__10698 = seq__10684_10693;
var G__10699 = chunk__10685_10694;
var G__10700 = count__10686_10695;
var G__10701 = (i__10687_10696 + (1));
seq__10684_10693 = G__10698;
chunk__10685_10694 = G__10699;
count__10686_10695 = G__10700;
i__10687_10696 = G__10701;
continue;
} else {
var temp__5720__auto___10702 = cljs.core.seq.call(null,seq__10684_10693);
if(temp__5720__auto___10702){
var seq__10684_10703__$1 = temp__5720__auto___10702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10684_10703__$1)){
var c__4556__auto___10704 = cljs.core.chunk_first.call(null,seq__10684_10703__$1);
var G__10705 = cljs.core.chunk_rest.call(null,seq__10684_10703__$1);
var G__10706 = c__4556__auto___10704;
var G__10707 = cljs.core.count.call(null,c__4556__auto___10704);
var G__10708 = (0);
seq__10684_10693 = G__10705;
chunk__10685_10694 = G__10706;
count__10686_10695 = G__10707;
i__10687_10696 = G__10708;
continue;
} else {
var k_10709__$1 = cljs.core.first.call(null,seq__10684_10703__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_10709__$1);


var G__10710 = cljs.core.next.call(null,seq__10684_10703__$1);
var G__10711 = null;
var G__10712 = (0);
var G__10713 = (0);
seq__10684_10693 = G__10710;
chunk__10685_10694 = G__10711;
count__10686_10695 = G__10712;
i__10687_10696 = G__10713;
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
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq10680){
var G__10681 = cljs.core.first.call(null,seq10680);
var seq10680__$1 = cljs.core.next.call(null,seq10680);
var G__10682 = cljs.core.first.call(null,seq10680__$1);
var seq10680__$2 = cljs.core.next.call(null,seq10680__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10681,G__10682,seq10680__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__10715 = arguments.length;
switch (G__10715) {
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
var G__10721 = arguments.length;
switch (G__10721) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10735 = arguments.length;
var i__4737__auto___10736 = (0);
while(true){
if((i__4737__auto___10736 < len__4736__auto___10735)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10736]));

var G__10737 = (i__4737__auto___10736 + (1));
i__4737__auto___10736 = G__10737;
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
var temp__5718__auto___10738 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___10738)){
var class_list_10739 = temp__5718__auto___10738;
var seq__10722_10740 = cljs.core.seq.call(null,classes__$1);
var chunk__10723_10741 = null;
var count__10724_10742 = (0);
var i__10725_10743 = (0);
while(true){
if((i__10725_10743 < count__10724_10742)){
var c_10744 = cljs.core._nth.call(null,chunk__10723_10741,i__10725_10743);
class_list_10739.add(c_10744);


var G__10745 = seq__10722_10740;
var G__10746 = chunk__10723_10741;
var G__10747 = count__10724_10742;
var G__10748 = (i__10725_10743 + (1));
seq__10722_10740 = G__10745;
chunk__10723_10741 = G__10746;
count__10724_10742 = G__10747;
i__10725_10743 = G__10748;
continue;
} else {
var temp__5720__auto___10749 = cljs.core.seq.call(null,seq__10722_10740);
if(temp__5720__auto___10749){
var seq__10722_10750__$1 = temp__5720__auto___10749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10722_10750__$1)){
var c__4556__auto___10751 = cljs.core.chunk_first.call(null,seq__10722_10750__$1);
var G__10752 = cljs.core.chunk_rest.call(null,seq__10722_10750__$1);
var G__10753 = c__4556__auto___10751;
var G__10754 = cljs.core.count.call(null,c__4556__auto___10751);
var G__10755 = (0);
seq__10722_10740 = G__10752;
chunk__10723_10741 = G__10753;
count__10724_10742 = G__10754;
i__10725_10743 = G__10755;
continue;
} else {
var c_10756 = cljs.core.first.call(null,seq__10722_10750__$1);
class_list_10739.add(c_10756);


var G__10757 = cljs.core.next.call(null,seq__10722_10750__$1);
var G__10758 = null;
var G__10759 = (0);
var G__10760 = (0);
seq__10722_10740 = G__10757;
chunk__10723_10741 = G__10758;
count__10724_10742 = G__10759;
i__10725_10743 = G__10760;
continue;
}
} else {
}
}
break;
}
} else {
var seq__10726_10761 = cljs.core.seq.call(null,classes__$1);
var chunk__10727_10762 = null;
var count__10728_10763 = (0);
var i__10729_10764 = (0);
while(true){
if((i__10729_10764 < count__10728_10763)){
var c_10765 = cljs.core._nth.call(null,chunk__10727_10762,i__10729_10764);
var class_name_10766 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10766,c_10765))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10766 === ""))?c_10765:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_10766)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_10765)].join('')));
}


var G__10767 = seq__10726_10761;
var G__10768 = chunk__10727_10762;
var G__10769 = count__10728_10763;
var G__10770 = (i__10729_10764 + (1));
seq__10726_10761 = G__10767;
chunk__10727_10762 = G__10768;
count__10728_10763 = G__10769;
i__10729_10764 = G__10770;
continue;
} else {
var temp__5720__auto___10771 = cljs.core.seq.call(null,seq__10726_10761);
if(temp__5720__auto___10771){
var seq__10726_10772__$1 = temp__5720__auto___10771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10726_10772__$1)){
var c__4556__auto___10773 = cljs.core.chunk_first.call(null,seq__10726_10772__$1);
var G__10774 = cljs.core.chunk_rest.call(null,seq__10726_10772__$1);
var G__10775 = c__4556__auto___10773;
var G__10776 = cljs.core.count.call(null,c__4556__auto___10773);
var G__10777 = (0);
seq__10726_10761 = G__10774;
chunk__10727_10762 = G__10775;
count__10728_10763 = G__10776;
i__10729_10764 = G__10777;
continue;
} else {
var c_10778 = cljs.core.first.call(null,seq__10726_10772__$1);
var class_name_10779 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_10779,c_10778))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_10779 === ""))?c_10778:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_10779)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_10778)].join('')));
}


var G__10780 = cljs.core.next.call(null,seq__10726_10772__$1);
var G__10781 = null;
var G__10782 = (0);
var G__10783 = (0);
seq__10726_10761 = G__10780;
chunk__10727_10762 = G__10781;
count__10728_10763 = G__10782;
i__10729_10764 = G__10783;
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
var seq__10730_10784 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__10731_10785 = null;
var count__10732_10786 = (0);
var i__10733_10787 = (0);
while(true){
if((i__10733_10787 < count__10732_10786)){
var c_10788 = cljs.core._nth.call(null,chunk__10731_10785,i__10733_10787);
dommy.core.add_class_BANG_.call(null,elem,c_10788);


var G__10789 = seq__10730_10784;
var G__10790 = chunk__10731_10785;
var G__10791 = count__10732_10786;
var G__10792 = (i__10733_10787 + (1));
seq__10730_10784 = G__10789;
chunk__10731_10785 = G__10790;
count__10732_10786 = G__10791;
i__10733_10787 = G__10792;
continue;
} else {
var temp__5720__auto___10793 = cljs.core.seq.call(null,seq__10730_10784);
if(temp__5720__auto___10793){
var seq__10730_10794__$1 = temp__5720__auto___10793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10730_10794__$1)){
var c__4556__auto___10795 = cljs.core.chunk_first.call(null,seq__10730_10794__$1);
var G__10796 = cljs.core.chunk_rest.call(null,seq__10730_10794__$1);
var G__10797 = c__4556__auto___10795;
var G__10798 = cljs.core.count.call(null,c__4556__auto___10795);
var G__10799 = (0);
seq__10730_10784 = G__10796;
chunk__10731_10785 = G__10797;
count__10732_10786 = G__10798;
i__10733_10787 = G__10799;
continue;
} else {
var c_10800 = cljs.core.first.call(null,seq__10730_10794__$1);
dommy.core.add_class_BANG_.call(null,elem,c_10800);


var G__10801 = cljs.core.next.call(null,seq__10730_10794__$1);
var G__10802 = null;
var G__10803 = (0);
var G__10804 = (0);
seq__10730_10784 = G__10801;
chunk__10731_10785 = G__10802;
count__10732_10786 = G__10803;
i__10733_10787 = G__10804;
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
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq10718){
var G__10719 = cljs.core.first.call(null,seq10718);
var seq10718__$1 = cljs.core.next.call(null,seq10718);
var G__10720 = cljs.core.first.call(null,seq10718__$1);
var seq10718__$2 = cljs.core.next.call(null,seq10718__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10719,G__10720,seq10718__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__10809 = arguments.length;
switch (G__10809) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10815 = arguments.length;
var i__4737__auto___10816 = (0);
while(true){
if((i__4737__auto___10816 < len__4736__auto___10815)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10816]));

var G__10817 = (i__4737__auto___10816 + (1));
i__4737__auto___10816 = G__10817;
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
var temp__5718__auto___10818 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___10818)){
var class_list_10819 = temp__5718__auto___10818;
class_list_10819.remove(c__$1);
} else {
var class_name_10820 = dommy.core.class$.call(null,elem);
var new_class_name_10821 = dommy.utils.remove_class_str.call(null,class_name_10820,c__$1);
if((class_name_10820 === new_class_name_10821)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_10821);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__10810 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__10811 = null;
var count__10812 = (0);
var i__10813 = (0);
while(true){
if((i__10813 < count__10812)){
var c = cljs.core._nth.call(null,chunk__10811,i__10813);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__10822 = seq__10810;
var G__10823 = chunk__10811;
var G__10824 = count__10812;
var G__10825 = (i__10813 + (1));
seq__10810 = G__10822;
chunk__10811 = G__10823;
count__10812 = G__10824;
i__10813 = G__10825;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__10810);
if(temp__5720__auto__){
var seq__10810__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10810__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__10810__$1);
var G__10826 = cljs.core.chunk_rest.call(null,seq__10810__$1);
var G__10827 = c__4556__auto__;
var G__10828 = cljs.core.count.call(null,c__4556__auto__);
var G__10829 = (0);
seq__10810 = G__10826;
chunk__10811 = G__10827;
count__10812 = G__10828;
i__10813 = G__10829;
continue;
} else {
var c = cljs.core.first.call(null,seq__10810__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__10830 = cljs.core.next.call(null,seq__10810__$1);
var G__10831 = null;
var G__10832 = (0);
var G__10833 = (0);
seq__10810 = G__10830;
chunk__10811 = G__10831;
count__10812 = G__10832;
i__10813 = G__10833;
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
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq10806){
var G__10807 = cljs.core.first.call(null,seq10806);
var seq10806__$1 = cljs.core.next.call(null,seq10806);
var G__10808 = cljs.core.first.call(null,seq10806__$1);
var seq10806__$2 = cljs.core.next.call(null,seq10806__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10807,G__10808,seq10806__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__10835 = arguments.length;
switch (G__10835) {
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
var temp__5718__auto___10837 = elem.classList;
if(cljs.core.truth_(temp__5718__auto___10837)){
var class_list_10838 = temp__5718__auto___10837;
class_list_10838.toggle(c__$1);
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
var G__10840 = arguments.length;
switch (G__10840) {
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
var G__10843 = arguments.length;
switch (G__10843) {
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
var G__10849 = arguments.length;
switch (G__10849) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10856 = arguments.length;
var i__4737__auto___10857 = (0);
while(true){
if((i__4737__auto___10857 < len__4736__auto___10856)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10857]));

var G__10858 = (i__4737__auto___10857 + (1));
i__4737__auto___10857 = G__10858;
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
var G__10850 = parent;
G__10850.appendChild(child);

return G__10850;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__10851_10859 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10852_10860 = null;
var count__10853_10861 = (0);
var i__10854_10862 = (0);
while(true){
if((i__10854_10862 < count__10853_10861)){
var c_10863 = cljs.core._nth.call(null,chunk__10852_10860,i__10854_10862);
dommy.core.append_BANG_.call(null,parent,c_10863);


var G__10864 = seq__10851_10859;
var G__10865 = chunk__10852_10860;
var G__10866 = count__10853_10861;
var G__10867 = (i__10854_10862 + (1));
seq__10851_10859 = G__10864;
chunk__10852_10860 = G__10865;
count__10853_10861 = G__10866;
i__10854_10862 = G__10867;
continue;
} else {
var temp__5720__auto___10868 = cljs.core.seq.call(null,seq__10851_10859);
if(temp__5720__auto___10868){
var seq__10851_10869__$1 = temp__5720__auto___10868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10851_10869__$1)){
var c__4556__auto___10870 = cljs.core.chunk_first.call(null,seq__10851_10869__$1);
var G__10871 = cljs.core.chunk_rest.call(null,seq__10851_10869__$1);
var G__10872 = c__4556__auto___10870;
var G__10873 = cljs.core.count.call(null,c__4556__auto___10870);
var G__10874 = (0);
seq__10851_10859 = G__10871;
chunk__10852_10860 = G__10872;
count__10853_10861 = G__10873;
i__10854_10862 = G__10874;
continue;
} else {
var c_10875 = cljs.core.first.call(null,seq__10851_10869__$1);
dommy.core.append_BANG_.call(null,parent,c_10875);


var G__10876 = cljs.core.next.call(null,seq__10851_10869__$1);
var G__10877 = null;
var G__10878 = (0);
var G__10879 = (0);
seq__10851_10859 = G__10876;
chunk__10852_10860 = G__10877;
count__10853_10861 = G__10878;
i__10854_10862 = G__10879;
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
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq10846){
var G__10847 = cljs.core.first.call(null,seq10846);
var seq10846__$1 = cljs.core.next.call(null,seq10846);
var G__10848 = cljs.core.first.call(null,seq10846__$1);
var seq10846__$2 = cljs.core.next.call(null,seq10846__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10847,G__10848,seq10846__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__10884 = arguments.length;
switch (G__10884) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___10891 = arguments.length;
var i__4737__auto___10892 = (0);
while(true){
if((i__4737__auto___10892 < len__4736__auto___10891)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10892]));

var G__10893 = (i__4737__auto___10892 + (1));
i__4737__auto___10892 = G__10893;
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
var G__10885 = parent;
G__10885.insertBefore(child,parent.firstChild);

return G__10885;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__10886_10894 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__10887_10895 = null;
var count__10888_10896 = (0);
var i__10889_10897 = (0);
while(true){
if((i__10889_10897 < count__10888_10896)){
var c_10898 = cljs.core._nth.call(null,chunk__10887_10895,i__10889_10897);
dommy.core.prepend_BANG_.call(null,parent,c_10898);


var G__10899 = seq__10886_10894;
var G__10900 = chunk__10887_10895;
var G__10901 = count__10888_10896;
var G__10902 = (i__10889_10897 + (1));
seq__10886_10894 = G__10899;
chunk__10887_10895 = G__10900;
count__10888_10896 = G__10901;
i__10889_10897 = G__10902;
continue;
} else {
var temp__5720__auto___10903 = cljs.core.seq.call(null,seq__10886_10894);
if(temp__5720__auto___10903){
var seq__10886_10904__$1 = temp__5720__auto___10903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10886_10904__$1)){
var c__4556__auto___10905 = cljs.core.chunk_first.call(null,seq__10886_10904__$1);
var G__10906 = cljs.core.chunk_rest.call(null,seq__10886_10904__$1);
var G__10907 = c__4556__auto___10905;
var G__10908 = cljs.core.count.call(null,c__4556__auto___10905);
var G__10909 = (0);
seq__10886_10894 = G__10906;
chunk__10887_10895 = G__10907;
count__10888_10896 = G__10908;
i__10889_10897 = G__10909;
continue;
} else {
var c_10910 = cljs.core.first.call(null,seq__10886_10904__$1);
dommy.core.prepend_BANG_.call(null,parent,c_10910);


var G__10911 = cljs.core.next.call(null,seq__10886_10904__$1);
var G__10912 = null;
var G__10913 = (0);
var G__10914 = (0);
seq__10886_10894 = G__10911;
chunk__10887_10895 = G__10912;
count__10888_10896 = G__10913;
i__10889_10897 = G__10914;
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
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq10881){
var G__10882 = cljs.core.first.call(null,seq10881);
var seq10881__$1 = cljs.core.next.call(null,seq10881);
var G__10883 = cljs.core.first.call(null,seq10881__$1);
var seq10881__$2 = cljs.core.next.call(null,seq10881__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10882,G__10883,seq10881__$2);
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
var temp__5718__auto___10915 = other.nextSibling;
if(cljs.core.truth_(temp__5718__auto___10915)){
var next_10916 = temp__5718__auto___10915;
dommy.core.insert_before_BANG_.call(null,elem,next_10916);
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
var G__10918 = arguments.length;
switch (G__10918) {
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
var G__10919 = p;
G__10919.removeChild(elem);

return G__10919;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__10921){
var vec__10922 = p__10921;
var special_mouse_event = cljs.core.nth.call(null,vec__10922,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__10922,(1),null);
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
var len__4736__auto___10928 = arguments.length;
var i__4737__auto___10929 = (0);
while(true){
if((i__4737__auto___10929 < len__4736__auto___10928)){
args__4742__auto__.push((arguments[i__4737__auto___10929]));

var G__10930 = (i__4737__auto___10929 + (1));
i__4737__auto___10929 = G__10930;
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
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq10925){
var G__10926 = cljs.core.first.call(null,seq10925);
var seq10925__$1 = cljs.core.next.call(null,seq10925);
var G__10927 = cljs.core.first.call(null,seq10925__$1);
var seq10925__$2 = cljs.core.next.call(null,seq10925__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10926,G__10927,seq10925__$2);
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
var len__4736__auto___11012 = arguments.length;
var i__4737__auto___11013 = (0);
while(true){
if((i__4737__auto___11013 < len__4736__auto___11012)){
args__4742__auto__.push((arguments[i__4737__auto___11013]));

var G__11014 = (i__4737__auto___11013 + (1));
i__4737__auto___11013 = G__11014;
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

var vec__10933_11015 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11016 = cljs.core.nth.call(null,vec__10933_11015,(0),null);
var selector_11017 = cljs.core.nth.call(null,vec__10933_11015,(1),null);
var seq__10936_11018 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__10943_11019 = null;
var count__10944_11020 = (0);
var i__10945_11021 = (0);
while(true){
if((i__10945_11021 < count__10944_11020)){
var vec__10982_11022 = cljs.core._nth.call(null,chunk__10943_11019,i__10945_11021);
var orig_type_11023 = cljs.core.nth.call(null,vec__10982_11022,(0),null);
var f_11024 = cljs.core.nth.call(null,vec__10982_11022,(1),null);
var seq__10946_11025 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11023,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_11023,cljs.core.identity])));
var chunk__10948_11026 = null;
var count__10949_11027 = (0);
var i__10950_11028 = (0);
while(true){
if((i__10950_11028 < count__10949_11027)){
var vec__10991_11029 = cljs.core._nth.call(null,chunk__10948_11026,i__10950_11028);
var actual_type_11030 = cljs.core.nth.call(null,vec__10991_11029,(0),null);
var factory_11031 = cljs.core.nth.call(null,vec__10991_11029,(1),null);
var canonical_f_11032 = (cljs.core.truth_(selector_11017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11016,selector_11017):cljs.core.identity).call(null,factory_11031.call(null,f_11024));
dommy.core.update_event_listeners_BANG_.call(null,elem_11016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11017,actual_type_11030,f_11024], null),canonical_f_11032);

if(cljs.core.truth_(elem_11016.addEventListener)){
elem_11016.addEventListener(cljs.core.name.call(null,actual_type_11030),canonical_f_11032);
} else {
elem_11016.attachEvent(cljs.core.name.call(null,actual_type_11030),canonical_f_11032);
}


var G__11033 = seq__10946_11025;
var G__11034 = chunk__10948_11026;
var G__11035 = count__10949_11027;
var G__11036 = (i__10950_11028 + (1));
seq__10946_11025 = G__11033;
chunk__10948_11026 = G__11034;
count__10949_11027 = G__11035;
i__10950_11028 = G__11036;
continue;
} else {
var temp__5720__auto___11037 = cljs.core.seq.call(null,seq__10946_11025);
if(temp__5720__auto___11037){
var seq__10946_11038__$1 = temp__5720__auto___11037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10946_11038__$1)){
var c__4556__auto___11039 = cljs.core.chunk_first.call(null,seq__10946_11038__$1);
var G__11040 = cljs.core.chunk_rest.call(null,seq__10946_11038__$1);
var G__11041 = c__4556__auto___11039;
var G__11042 = cljs.core.count.call(null,c__4556__auto___11039);
var G__11043 = (0);
seq__10946_11025 = G__11040;
chunk__10948_11026 = G__11041;
count__10949_11027 = G__11042;
i__10950_11028 = G__11043;
continue;
} else {
var vec__10994_11044 = cljs.core.first.call(null,seq__10946_11038__$1);
var actual_type_11045 = cljs.core.nth.call(null,vec__10994_11044,(0),null);
var factory_11046 = cljs.core.nth.call(null,vec__10994_11044,(1),null);
var canonical_f_11047 = (cljs.core.truth_(selector_11017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11016,selector_11017):cljs.core.identity).call(null,factory_11046.call(null,f_11024));
dommy.core.update_event_listeners_BANG_.call(null,elem_11016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11017,actual_type_11045,f_11024], null),canonical_f_11047);

if(cljs.core.truth_(elem_11016.addEventListener)){
elem_11016.addEventListener(cljs.core.name.call(null,actual_type_11045),canonical_f_11047);
} else {
elem_11016.attachEvent(cljs.core.name.call(null,actual_type_11045),canonical_f_11047);
}


var G__11048 = cljs.core.next.call(null,seq__10946_11038__$1);
var G__11049 = null;
var G__11050 = (0);
var G__11051 = (0);
seq__10946_11025 = G__11048;
chunk__10948_11026 = G__11049;
count__10949_11027 = G__11050;
i__10950_11028 = G__11051;
continue;
}
} else {
}
}
break;
}

var G__11052 = seq__10936_11018;
var G__11053 = chunk__10943_11019;
var G__11054 = count__10944_11020;
var G__11055 = (i__10945_11021 + (1));
seq__10936_11018 = G__11052;
chunk__10943_11019 = G__11053;
count__10944_11020 = G__11054;
i__10945_11021 = G__11055;
continue;
} else {
var temp__5720__auto___11056 = cljs.core.seq.call(null,seq__10936_11018);
if(temp__5720__auto___11056){
var seq__10936_11057__$1 = temp__5720__auto___11056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10936_11057__$1)){
var c__4556__auto___11058 = cljs.core.chunk_first.call(null,seq__10936_11057__$1);
var G__11059 = cljs.core.chunk_rest.call(null,seq__10936_11057__$1);
var G__11060 = c__4556__auto___11058;
var G__11061 = cljs.core.count.call(null,c__4556__auto___11058);
var G__11062 = (0);
seq__10936_11018 = G__11059;
chunk__10943_11019 = G__11060;
count__10944_11020 = G__11061;
i__10945_11021 = G__11062;
continue;
} else {
var vec__10997_11063 = cljs.core.first.call(null,seq__10936_11057__$1);
var orig_type_11064 = cljs.core.nth.call(null,vec__10997_11063,(0),null);
var f_11065 = cljs.core.nth.call(null,vec__10997_11063,(1),null);
var seq__10937_11066 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11064,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_11064,cljs.core.identity])));
var chunk__10939_11067 = null;
var count__10940_11068 = (0);
var i__10941_11069 = (0);
while(true){
if((i__10941_11069 < count__10940_11068)){
var vec__11006_11070 = cljs.core._nth.call(null,chunk__10939_11067,i__10941_11069);
var actual_type_11071 = cljs.core.nth.call(null,vec__11006_11070,(0),null);
var factory_11072 = cljs.core.nth.call(null,vec__11006_11070,(1),null);
var canonical_f_11073 = (cljs.core.truth_(selector_11017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11016,selector_11017):cljs.core.identity).call(null,factory_11072.call(null,f_11065));
dommy.core.update_event_listeners_BANG_.call(null,elem_11016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11017,actual_type_11071,f_11065], null),canonical_f_11073);

if(cljs.core.truth_(elem_11016.addEventListener)){
elem_11016.addEventListener(cljs.core.name.call(null,actual_type_11071),canonical_f_11073);
} else {
elem_11016.attachEvent(cljs.core.name.call(null,actual_type_11071),canonical_f_11073);
}


var G__11074 = seq__10937_11066;
var G__11075 = chunk__10939_11067;
var G__11076 = count__10940_11068;
var G__11077 = (i__10941_11069 + (1));
seq__10937_11066 = G__11074;
chunk__10939_11067 = G__11075;
count__10940_11068 = G__11076;
i__10941_11069 = G__11077;
continue;
} else {
var temp__5720__auto___11078__$1 = cljs.core.seq.call(null,seq__10937_11066);
if(temp__5720__auto___11078__$1){
var seq__10937_11079__$1 = temp__5720__auto___11078__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10937_11079__$1)){
var c__4556__auto___11080 = cljs.core.chunk_first.call(null,seq__10937_11079__$1);
var G__11081 = cljs.core.chunk_rest.call(null,seq__10937_11079__$1);
var G__11082 = c__4556__auto___11080;
var G__11083 = cljs.core.count.call(null,c__4556__auto___11080);
var G__11084 = (0);
seq__10937_11066 = G__11081;
chunk__10939_11067 = G__11082;
count__10940_11068 = G__11083;
i__10941_11069 = G__11084;
continue;
} else {
var vec__11009_11085 = cljs.core.first.call(null,seq__10937_11079__$1);
var actual_type_11086 = cljs.core.nth.call(null,vec__11009_11085,(0),null);
var factory_11087 = cljs.core.nth.call(null,vec__11009_11085,(1),null);
var canonical_f_11088 = (cljs.core.truth_(selector_11017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_11016,selector_11017):cljs.core.identity).call(null,factory_11087.call(null,f_11065));
dommy.core.update_event_listeners_BANG_.call(null,elem_11016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11017,actual_type_11086,f_11065], null),canonical_f_11088);

if(cljs.core.truth_(elem_11016.addEventListener)){
elem_11016.addEventListener(cljs.core.name.call(null,actual_type_11086),canonical_f_11088);
} else {
elem_11016.attachEvent(cljs.core.name.call(null,actual_type_11086),canonical_f_11088);
}


var G__11089 = cljs.core.next.call(null,seq__10937_11079__$1);
var G__11090 = null;
var G__11091 = (0);
var G__11092 = (0);
seq__10937_11066 = G__11089;
chunk__10939_11067 = G__11090;
count__10940_11068 = G__11091;
i__10941_11069 = G__11092;
continue;
}
} else {
}
}
break;
}

var G__11093 = cljs.core.next.call(null,seq__10936_11057__$1);
var G__11094 = null;
var G__11095 = (0);
var G__11096 = (0);
seq__10936_11018 = G__11093;
chunk__10943_11019 = G__11094;
count__10944_11020 = G__11095;
i__10945_11021 = G__11096;
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
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq10931){
var G__10932 = cljs.core.first.call(null,seq10931);
var seq10931__$1 = cljs.core.next.call(null,seq10931);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10932,seq10931__$1);
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
var len__4736__auto___11178 = arguments.length;
var i__4737__auto___11179 = (0);
while(true){
if((i__4737__auto___11179 < len__4736__auto___11178)){
args__4742__auto__.push((arguments[i__4737__auto___11179]));

var G__11180 = (i__4737__auto___11179 + (1));
i__4737__auto___11179 = G__11180;
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

var vec__11099_11181 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11182 = cljs.core.nth.call(null,vec__11099_11181,(0),null);
var selector_11183 = cljs.core.nth.call(null,vec__11099_11181,(1),null);
var seq__11102_11184 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11109_11185 = null;
var count__11110_11186 = (0);
var i__11111_11187 = (0);
while(true){
if((i__11111_11187 < count__11110_11186)){
var vec__11148_11188 = cljs.core._nth.call(null,chunk__11109_11185,i__11111_11187);
var orig_type_11189 = cljs.core.nth.call(null,vec__11148_11188,(0),null);
var f_11190 = cljs.core.nth.call(null,vec__11148_11188,(1),null);
var seq__11112_11191 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11189,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_11189,cljs.core.identity])));
var chunk__11114_11192 = null;
var count__11115_11193 = (0);
var i__11116_11194 = (0);
while(true){
if((i__11116_11194 < count__11115_11193)){
var vec__11157_11195 = cljs.core._nth.call(null,chunk__11114_11192,i__11116_11194);
var actual_type_11196 = cljs.core.nth.call(null,vec__11157_11195,(0),null);
var __11197 = cljs.core.nth.call(null,vec__11157_11195,(1),null);
var keys_11198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11183,actual_type_11196,f_11190], null);
var canonical_f_11199 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11182),keys_11198);
dommy.core.update_event_listeners_BANG_.call(null,elem_11182,dommy.utils.dissoc_in,keys_11198);

if(cljs.core.truth_(elem_11182.removeEventListener)){
elem_11182.removeEventListener(cljs.core.name.call(null,actual_type_11196),canonical_f_11199);
} else {
elem_11182.detachEvent(cljs.core.name.call(null,actual_type_11196),canonical_f_11199);
}


var G__11200 = seq__11112_11191;
var G__11201 = chunk__11114_11192;
var G__11202 = count__11115_11193;
var G__11203 = (i__11116_11194 + (1));
seq__11112_11191 = G__11200;
chunk__11114_11192 = G__11201;
count__11115_11193 = G__11202;
i__11116_11194 = G__11203;
continue;
} else {
var temp__5720__auto___11204 = cljs.core.seq.call(null,seq__11112_11191);
if(temp__5720__auto___11204){
var seq__11112_11205__$1 = temp__5720__auto___11204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11112_11205__$1)){
var c__4556__auto___11206 = cljs.core.chunk_first.call(null,seq__11112_11205__$1);
var G__11207 = cljs.core.chunk_rest.call(null,seq__11112_11205__$1);
var G__11208 = c__4556__auto___11206;
var G__11209 = cljs.core.count.call(null,c__4556__auto___11206);
var G__11210 = (0);
seq__11112_11191 = G__11207;
chunk__11114_11192 = G__11208;
count__11115_11193 = G__11209;
i__11116_11194 = G__11210;
continue;
} else {
var vec__11160_11211 = cljs.core.first.call(null,seq__11112_11205__$1);
var actual_type_11212 = cljs.core.nth.call(null,vec__11160_11211,(0),null);
var __11213 = cljs.core.nth.call(null,vec__11160_11211,(1),null);
var keys_11214 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11183,actual_type_11212,f_11190], null);
var canonical_f_11215 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11182),keys_11214);
dommy.core.update_event_listeners_BANG_.call(null,elem_11182,dommy.utils.dissoc_in,keys_11214);

if(cljs.core.truth_(elem_11182.removeEventListener)){
elem_11182.removeEventListener(cljs.core.name.call(null,actual_type_11212),canonical_f_11215);
} else {
elem_11182.detachEvent(cljs.core.name.call(null,actual_type_11212),canonical_f_11215);
}


var G__11216 = cljs.core.next.call(null,seq__11112_11205__$1);
var G__11217 = null;
var G__11218 = (0);
var G__11219 = (0);
seq__11112_11191 = G__11216;
chunk__11114_11192 = G__11217;
count__11115_11193 = G__11218;
i__11116_11194 = G__11219;
continue;
}
} else {
}
}
break;
}

var G__11220 = seq__11102_11184;
var G__11221 = chunk__11109_11185;
var G__11222 = count__11110_11186;
var G__11223 = (i__11111_11187 + (1));
seq__11102_11184 = G__11220;
chunk__11109_11185 = G__11221;
count__11110_11186 = G__11222;
i__11111_11187 = G__11223;
continue;
} else {
var temp__5720__auto___11224 = cljs.core.seq.call(null,seq__11102_11184);
if(temp__5720__auto___11224){
var seq__11102_11225__$1 = temp__5720__auto___11224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11102_11225__$1)){
var c__4556__auto___11226 = cljs.core.chunk_first.call(null,seq__11102_11225__$1);
var G__11227 = cljs.core.chunk_rest.call(null,seq__11102_11225__$1);
var G__11228 = c__4556__auto___11226;
var G__11229 = cljs.core.count.call(null,c__4556__auto___11226);
var G__11230 = (0);
seq__11102_11184 = G__11227;
chunk__11109_11185 = G__11228;
count__11110_11186 = G__11229;
i__11111_11187 = G__11230;
continue;
} else {
var vec__11163_11231 = cljs.core.first.call(null,seq__11102_11225__$1);
var orig_type_11232 = cljs.core.nth.call(null,vec__11163_11231,(0),null);
var f_11233 = cljs.core.nth.call(null,vec__11163_11231,(1),null);
var seq__11103_11234 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_11232,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_11232,cljs.core.identity])));
var chunk__11105_11235 = null;
var count__11106_11236 = (0);
var i__11107_11237 = (0);
while(true){
if((i__11107_11237 < count__11106_11236)){
var vec__11172_11238 = cljs.core._nth.call(null,chunk__11105_11235,i__11107_11237);
var actual_type_11239 = cljs.core.nth.call(null,vec__11172_11238,(0),null);
var __11240 = cljs.core.nth.call(null,vec__11172_11238,(1),null);
var keys_11241 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11183,actual_type_11239,f_11233], null);
var canonical_f_11242 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11182),keys_11241);
dommy.core.update_event_listeners_BANG_.call(null,elem_11182,dommy.utils.dissoc_in,keys_11241);

if(cljs.core.truth_(elem_11182.removeEventListener)){
elem_11182.removeEventListener(cljs.core.name.call(null,actual_type_11239),canonical_f_11242);
} else {
elem_11182.detachEvent(cljs.core.name.call(null,actual_type_11239),canonical_f_11242);
}


var G__11243 = seq__11103_11234;
var G__11244 = chunk__11105_11235;
var G__11245 = count__11106_11236;
var G__11246 = (i__11107_11237 + (1));
seq__11103_11234 = G__11243;
chunk__11105_11235 = G__11244;
count__11106_11236 = G__11245;
i__11107_11237 = G__11246;
continue;
} else {
var temp__5720__auto___11247__$1 = cljs.core.seq.call(null,seq__11103_11234);
if(temp__5720__auto___11247__$1){
var seq__11103_11248__$1 = temp__5720__auto___11247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11103_11248__$1)){
var c__4556__auto___11249 = cljs.core.chunk_first.call(null,seq__11103_11248__$1);
var G__11250 = cljs.core.chunk_rest.call(null,seq__11103_11248__$1);
var G__11251 = c__4556__auto___11249;
var G__11252 = cljs.core.count.call(null,c__4556__auto___11249);
var G__11253 = (0);
seq__11103_11234 = G__11250;
chunk__11105_11235 = G__11251;
count__11106_11236 = G__11252;
i__11107_11237 = G__11253;
continue;
} else {
var vec__11175_11254 = cljs.core.first.call(null,seq__11103_11248__$1);
var actual_type_11255 = cljs.core.nth.call(null,vec__11175_11254,(0),null);
var __11256 = cljs.core.nth.call(null,vec__11175_11254,(1),null);
var keys_11257 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_11183,actual_type_11255,f_11233], null);
var canonical_f_11258 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_11182),keys_11257);
dommy.core.update_event_listeners_BANG_.call(null,elem_11182,dommy.utils.dissoc_in,keys_11257);

if(cljs.core.truth_(elem_11182.removeEventListener)){
elem_11182.removeEventListener(cljs.core.name.call(null,actual_type_11255),canonical_f_11258);
} else {
elem_11182.detachEvent(cljs.core.name.call(null,actual_type_11255),canonical_f_11258);
}


var G__11259 = cljs.core.next.call(null,seq__11103_11248__$1);
var G__11260 = null;
var G__11261 = (0);
var G__11262 = (0);
seq__11103_11234 = G__11259;
chunk__11105_11235 = G__11260;
count__11106_11236 = G__11261;
i__11107_11237 = G__11262;
continue;
}
} else {
}
}
break;
}

var G__11263 = cljs.core.next.call(null,seq__11102_11225__$1);
var G__11264 = null;
var G__11265 = (0);
var G__11266 = (0);
seq__11102_11184 = G__11263;
chunk__11109_11185 = G__11264;
count__11110_11186 = G__11265;
i__11111_11187 = G__11266;
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
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq11097){
var G__11098 = cljs.core.first.call(null,seq11097);
var seq11097__$1 = cljs.core.next.call(null,seq11097);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11098,seq11097__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11288 = arguments.length;
var i__4737__auto___11289 = (0);
while(true){
if((i__4737__auto___11289 < len__4736__auto___11288)){
args__4742__auto__.push((arguments[i__4737__auto___11289]));

var G__11290 = (i__4737__auto___11289 + (1));
i__4737__auto___11289 = G__11290;
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

var vec__11269_11291 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_11292 = cljs.core.nth.call(null,vec__11269_11291,(0),null);
var selector_11293 = cljs.core.nth.call(null,vec__11269_11291,(1),null);
var seq__11272_11294 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__11273_11295 = null;
var count__11274_11296 = (0);
var i__11275_11297 = (0);
while(true){
if((i__11275_11297 < count__11274_11296)){
var vec__11282_11298 = cljs.core._nth.call(null,chunk__11273_11295,i__11275_11297);
var type_11299 = cljs.core.nth.call(null,vec__11282_11298,(0),null);
var f_11300 = cljs.core.nth.call(null,vec__11282_11298,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11299,((function (seq__11272_11294,chunk__11273_11295,count__11274_11296,i__11275_11297,vec__11282_11298,type_11299,f_11300,vec__11269_11291,elem_11292,selector_11293){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11299,dommy$core$this_fn);

return f_11300.call(null,e);
});})(seq__11272_11294,chunk__11273_11295,count__11274_11296,i__11275_11297,vec__11282_11298,type_11299,f_11300,vec__11269_11291,elem_11292,selector_11293))
);


var G__11301 = seq__11272_11294;
var G__11302 = chunk__11273_11295;
var G__11303 = count__11274_11296;
var G__11304 = (i__11275_11297 + (1));
seq__11272_11294 = G__11301;
chunk__11273_11295 = G__11302;
count__11274_11296 = G__11303;
i__11275_11297 = G__11304;
continue;
} else {
var temp__5720__auto___11305 = cljs.core.seq.call(null,seq__11272_11294);
if(temp__5720__auto___11305){
var seq__11272_11306__$1 = temp__5720__auto___11305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11272_11306__$1)){
var c__4556__auto___11307 = cljs.core.chunk_first.call(null,seq__11272_11306__$1);
var G__11308 = cljs.core.chunk_rest.call(null,seq__11272_11306__$1);
var G__11309 = c__4556__auto___11307;
var G__11310 = cljs.core.count.call(null,c__4556__auto___11307);
var G__11311 = (0);
seq__11272_11294 = G__11308;
chunk__11273_11295 = G__11309;
count__11274_11296 = G__11310;
i__11275_11297 = G__11311;
continue;
} else {
var vec__11285_11312 = cljs.core.first.call(null,seq__11272_11306__$1);
var type_11313 = cljs.core.nth.call(null,vec__11285_11312,(0),null);
var f_11314 = cljs.core.nth.call(null,vec__11285_11312,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_11313,((function (seq__11272_11294,chunk__11273_11295,count__11274_11296,i__11275_11297,vec__11285_11312,type_11313,f_11314,seq__11272_11306__$1,temp__5720__auto___11305,vec__11269_11291,elem_11292,selector_11293){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_11313,dommy$core$this_fn);

return f_11314.call(null,e);
});})(seq__11272_11294,chunk__11273_11295,count__11274_11296,i__11275_11297,vec__11285_11312,type_11313,f_11314,seq__11272_11306__$1,temp__5720__auto___11305,vec__11269_11291,elem_11292,selector_11293))
);


var G__11315 = cljs.core.next.call(null,seq__11272_11306__$1);
var G__11316 = null;
var G__11317 = (0);
var G__11318 = (0);
seq__11272_11294 = G__11315;
chunk__11273_11295 = G__11316;
count__11274_11296 = G__11317;
i__11275_11297 = G__11318;
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
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq11267){
var G__11268 = cljs.core.first.call(null,seq11267);
var seq11267__$1 = cljs.core.next.call(null,seq11267);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11268,seq11267__$1);
}));


//# sourceMappingURL=core.js.map
