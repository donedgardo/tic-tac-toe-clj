// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('tic_tac_toe_web.core_test');
goog.require('cljs.core');
goog.require('reagent.core');
tic_tac_toe_web.core_test.node$module$_CIRCA_testing_library$react = require('@testing-library/react');
tic_tac_toe_web.core_test.with_mounted_component = (function tic_tac_toe_web$core_test$with_mounted_component(comp,f){
var mounted_component = tic_tac_toe_web.core_test.node$module$_CIRCA_testing_library$react.render(reagent.core.as_element.call(null,comp));
try{return f.call(null,mounted_component);
}finally {mounted_component.unmount();

reagent.core.flush.call(null);
}});
tic_tac_toe_web.core_test.click_element = (function tic_tac_toe_web$core_test$click_element(el){
tic_tac_toe_web.core_test.node$module$_CIRCA_testing_library$react.fireEvent.click(el);

return reagent.core.flush.call(null);
});

//# sourceMappingURL=core_test.js.map
