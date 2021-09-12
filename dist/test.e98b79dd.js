// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.head *{margin: 0;padding: 0;box-sizing: border-box;}\n.head *::before, .head *::after{box-sizing: border-box;}\n.head{\n    transform: scale(0.5);\n    background: #469ef8;\n    border: 8px solid black;\n    height: 700px;\n    width: 700px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    border-radius: 50%;\n    position: relative;\n}\n.head .face{\n    border: 5px solid black;\n    background: white;\n    height: 580px;\n    width: 580px;\n    border-radius: 50%;\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -290px;\n}\n.head .nose{\n    border: 3px solid black;\n    height: 100px;\n    width: 100px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    z-index: 1;\n    top: 140px;\n    border-radius: 50%;\n    background: #eb3223;\n}\n.head .nose::before{\n    content: '';\n    display: block;\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    border-radius: 50%;\n    background: white;\n}\n.head .eye{\n    border: 3px solid black;\n    position: absolute;\n    height: 140px;\n    width: 140px;\n    z-index: 1;\n    background: white;\n    left: 50%;\n    margin-left: -70px;\n    border-radius: 50%;\n    top: 22px;\n    overflow: hidden;\n}\n.head .eye.left{\n    transform: translateX(-70px);\n}\n.head .eye.right{\n    transform: translateX(70px);\n}\n.head .eye .eyeball{\n    position: absolute;\n    width: 60px;\n    height: 100px;\n    border: 10px solid black;\n    background: white;\n    border-radius: 50%;\n    bottom: -10px;\n}\n.head .eye .eyeball.left{\n    right: 20px;\n}\n.head .eye .eyeball.right{\n    left: 20px;\n}\n.head .eye .eyeball::before{\n    content: '';\n    display: block;\n    position: relative;\n    height: 50px;\n    width: 60px;\n    margin-left: -10px;\n    margin-top: 40px;\n    background: white;\n}\n.head .nose .philtrum{\n    position: absolute;\n    border: 3px solid black;\n    background: black;\n    width: 0;\n    height: 120px;\n    left: 50%;\n    margin-left: -3px;\n    top: 95px;\n}\n.head .nose .philtrum .beard1.left{\n    border: 2px solid black;\n    width: 180px;\n    position: absolute;\n    top: 0px;\n    transform: rotate(15deg);\n}\n.head .nose .philtrum .beard2.left{\n    border: 2px solid black;\n    width: 180px;\n    position: absolute;\n    top: 40px;\n}\n.head .nose .philtrum .beard3.left{\n    border: 2px solid black;\n    width: 180px;\n    position: absolute;\n    top: 80px;\n    transform: rotate(-15deg);\n}\n.head .nose .philtrum .left{\n    left: -220px;\n}\n.head .nose .philtrum .beard1.right{\n    border: 2px solid black;\n    width: 180px;\n    position: absolute;\n    top: 0px;\n    transform: rotate(-15deg);\n}\n.head .nose .philtrum .beard2.right{\n    border: 2px solid black;\n    width: 180px;\n    position: absolute;\n    top: 40px;\n}\n.head .nose .philtrum .beard3.right{\n    border: 2px solid black;\n    width: 180px;\n    position: absolute;\n    top: 80px;\n    transform: rotate(15deg);\n}\n.head .nose .philtrum .right{\n    right: -220px;\n}\n.head .mouth{\n    position: absolute;\n    left: 50%;\n    width: 540px;\n    height: 270px;\n    margin-left: -270px;\n    bottom: 59px;\n    overflow: hidden;\n}\n.head .mouth .up{\n    position: absolute;\n    border: 2px solid black;\n    height: 0;\n    width: 540px;\n    bottom: 266px;\n    z-index: 1;\n}\n.head .mouth .open{\n    border: 4px solid black;\n    position: absolute;\n    bottom: 0;\n    height: 540px;\n    width: 540px;\n    border-radius: 50%;\n    background: #eb3223;\n    overflow: hidden;\n}\n.head .mouth .tongue{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    left: 170px;\n    bottom: -60px;\n}\n.head .mouth .tongue .left{\n    width: 150px;\n    height: 150px;\n    background: #ee7747;\n    transform: rotate(45deg) translateX(72px);\n    position: absolute;\n    bottom: 100px;\n    left: -76px;\n    border-radius: 50%;\n}\n.head .mouth .tongue .right{\n    width: 150px;\n    height: 150px;\n    background: #ee7747;\n    transform: rotate(45deg) translateY(72px);\n    position: absolute;\n    bottom: 100px;\n    right: -76px;\n    border-radius: 50%;\n}\n.head .mouth .tongue .bottom{\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    width: 150px;\n    height: 150px;\n    background: #ee7747;\n    transform: rotate(45deg);\n}\n.head .necklace{\n    position: absolute;\n    border: 5px solid black;\n    height: 50px;\n    width: 480px;\n    bottom: 5px;\n    left: 50%;\n    margin-left: -240px;\n    background: #eb3323;\n    border-radius: 40px 40px 40px 40px;\n}\n.head .necklace .bell{\n    position: absolute;\n    border: 3px solid black;\n    background: #fffe54;\n    height: 70px;\n    width: 70px;\n    bottom: -40px;\n    left: 50%;\n    margin-left: -35px;\n    border-radius: 50%;\n}\n.head .necklace .bell .up{\n    height: 10px;\n    width: 70px;\n    position: absolute;\n    top: 12px;\n    border-radius: 10px;\n    left: 50%;\n    margin-left: -35px;\n    border: 3px solid black;\n    background: #fffe54;\n}\n.head .necklace .bell .up .mid{\n    position: absolute;\n    border: 3px solid black;\n    width: 20px;\n    height: 20px;\n    bottom: -23px;\n    left: 50%;\n    margin-left: -10px;\n    border-radius: 50%;\n    background: #808080;\n}\n.head .necklace .bell .up .mid .bottom{\n    position: absolute;\n    height: 23px;\n    width: 0;\n    left: 50%;\n    margin-left: -2px;\n    border: 2px solid black;\n    bottom: -26px;\n    background: black;\n}\n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id;
var player = {
  id: undefined,
  playSpeed: 10,
  n: 0,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    "#btnPause": 'pause',
    "#btnPlay": 'play',
    "#btnSlow": 'slow',
    "#btnNormal": 'normal',
    "#btnFast": 'fast'
  },
  init: function init() {
    player.ui.demo.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo2.innerText = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        document.querySelector(key).onclick = player[player.events[key]];
      }
    }
  },
  renderFn: function renderFn() {
    player.n += 1;

    if (player.n > _css.default.length) {
      clearInterval(player.id);
      return;
    }

    player.ui.demo.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo2.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.renderFn, player.playSpeed);
  },
  pause: function pause() {
    clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.playSpeed = 30;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.playSpeed = 10;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.playSpeed = 1;
    player.play();
  }
};
player.init();
},{"./css.js":"css.js"}],"D:/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "12127" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["D:/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map