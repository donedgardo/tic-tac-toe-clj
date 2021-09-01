import {npmDeps} from "./npm_deps.js";
window.CLOSURE_UNCOMPILED_DEFINES = {"figwheel.repl.connect_url":"ws:\/\/localhost:9500\/figwheel-connect?fwprocess=9688f3&fwbuild=test","cljs.core._STAR_target_STAR_":"bundle"};
window.CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="/cljs-out/test/goog/base.js"></script>');
document.write('<script src="/cljs-out/test/goog/deps.js"></script>');
document.write('<script src="/cljs-out/test/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("figwheel.core");</script>');
document.write('<script>goog.require("figwheel.main");</script>');
document.write('<script>goog.require("figwheel.repl.preload");</script>');
document.write('<script>goog.require("devtools.preload");</script>');
document.write('<script>goog.require("figwheel.main.system_exit");</script>');
document.write('<script>goog.require("process.env");</script>');
document.write('<script>goog.require("tic_tac_toe_web.test_runner");</script>');
window.require = function(lib) {
   return npmDeps[lib];
}
