// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs_react_test.utils');
goog.require('cljs.core');
goog.require('cljsjs.react');
cljs_react_test.utils.get_dom_tree = (function cljs_react_test$utils$get_dom_tree(e){
var children = e.children;
if((children.length === (0))){
return e;
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),(function (){var iter__4529__auto__ = (function cljs_react_test$utils$get_dom_tree_$_iter__10081(s__10082){
return (new cljs.core.LazySeq(null,(function (){
var s__10082__$1 = s__10082;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__10082__$1);
if(temp__5720__auto__){
var s__10082__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10082__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__10082__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__10084 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__10083 = (0);
while(true){
if((i__10083 < size__4528__auto__)){
var i = cljs.core._nth.call(null,c__4527__auto__,i__10083);
cljs.core.chunk_append.call(null,b__10084,cljs_react_test.utils.get_dom_tree.call(null,(children[i])));

var G__10085 = (i__10083 + (1));
i__10083 = G__10085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10084),cljs_react_test$utils$get_dom_tree_$_iter__10081.call(null,cljs.core.chunk_rest.call(null,s__10082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10084),null);
}
} else {
var i = cljs.core.first.call(null,s__10082__$2);
return cljs.core.cons.call(null,cljs_react_test.utils.get_dom_tree.call(null,(children[i])),cljs_react_test$utils$get_dom_tree_$_iter__10081.call(null,cljs.core.rest.call(null,s__10082__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,children.length));
})());
}
});
/**
 * Unmounts the React Component at a node
 */
cljs_react_test.utils.unmount_BANG_ = (function cljs_react_test$utils$unmount_BANG_(n){
return ReactDOM.unmountComponentAtNode(n);
});
cljs_react_test.utils.container_div = (function cljs_react_test$utils$container_div(){
var id = ["container-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null))].join('');
var node = document.createElement("div");
(node.id = id);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,id], null);
});
cljs_react_test.utils.insert_container_BANG_ = (function cljs_react_test$utils$insert_container_BANG_(container){
return document.body.appendChild(container);
});
cljs_react_test.utils.new_container_BANG_ = (function cljs_react_test$utils$new_container_BANG_(){
var vec__10086 = cljs_react_test.utils.container_div.call(null);
var n = cljs.core.nth.call(null,vec__10086,(0),null);
var s = cljs.core.nth.call(null,vec__10086,(1),null);
cljs_react_test.utils.insert_container_BANG_.call(null,n);

return document.getElementById(s);
});
cljs_react_test.utils.TestUtils = React.addons.TestUtils;
cljs_react_test.utils.render_in_dom = (function cljs_react_test$utils$render_in_dom(react_element){
return cljs_react_test.utils.TestUtils.renderIntoDocument(react_element);
});
cljs_react_test.utils.mock_component = (function cljs_react_test$utils$mock_component(component,mock_name){
return cljs_react_test.utils.TestUtils.mockComponent(component,mock_name);
});
cljs_react_test.utils.react_element_QMARK_ = (function cljs_react_test$utils$react_element_QMARK_(react_element){
return cljs_react_test.utils.TestUtils.isElement(react_element);
});
cljs_react_test.utils.react_isa_QMARK_ = (function cljs_react_test$utils$react_isa_QMARK_(react_element,react_class){
return cljs_react_test.utils.TestUtils.isElementOfType(react_element,react_class);
});
cljs_react_test.utils.dom_component_QMARK_ = (function cljs_react_test$utils$dom_component_QMARK_(react_component){
return cljs_react_test.utils.TestUtils.isDOMComponent(react_component);
});
cljs_react_test.utils.composite_QMARK_ = (function cljs_react_test$utils$composite_QMARK_(react_component){
return cljs_react_test.utils.TestUtils.isCompositeComponent(react_component);
});
cljs_react_test.utils.composite_with_type_QMARK_ = (function cljs_react_test$utils$composite_with_type_QMARK_(react_component,react_class){
return cljs_react_test.utils.TestUtils.isCompositeComponentWithType(react_component,react_class);
});
cljs_react_test.utils.find_component_by = (function cljs_react_test$utils$find_component_by(react_tree,pred){
return cljs_react_test.utils.TestUtils.findAllInRenderedTree(react_tree,pred);
});
cljs_react_test.utils.find_by_class = (function cljs_react_test$utils$find_by_class(react_tree,class_name){
return cljs_react_test.utils.TestUtils.scryRenderedDOMComponentsWithClass(react_tree,class_name);
});
cljs_react_test.utils.find_one_by_class = (function cljs_react_test$utils$find_one_by_class(react_tree,class_name){
return cljs_react_test.utils.TestUtils.findRenderedDOMComponentWithClass(react_tree,class_name);
});
cljs_react_test.utils.find_by_tag = (function cljs_react_test$utils$find_by_tag(react_tree,tag){
return cljs_react_test.utils.TestUtils.scryRenderedDOMComponentsWithTag(react_tree,tag);
});
cljs_react_test.utils.find_one_by_tag = (function cljs_react_test$utils$find_one_by_tag(react_tree,tag){
return cljs_react_test.utils.TestUtils.findRenderedDOMComponentWithTag(react_tree,tag);
});
cljs_react_test.utils.find_by_type = (function cljs_react_test$utils$find_by_type(react_tree,type){
return cljs_react_test.utils.TestUtils.scryRenderedComponentsWithType(react_tree,type);
});
cljs_react_test.utils.find_one_by_type = (function cljs_react_test$utils$find_one_by_type(react_tree,type){
return cljs_react_test.utils.TestUtils.findRenderedComponentWithType(react_tree,type);
});

//# sourceMappingURL=utils.js.map
