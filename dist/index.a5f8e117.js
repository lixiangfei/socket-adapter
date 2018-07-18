/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _msgpack = __webpack_require__(6);

var _msgpack2 = _interopRequireDefault(_msgpack);

var _pako_inflate = __webpack_require__(10);

var _pako_inflate2 = _interopRequireDefault(_pako_inflate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var msgpack = (0, _msgpack2.default)();
/**消息处理 */

var Message = function () {
    function Message(msgObject) {
        _classCallCheck(this, Message);

        this.msgObject = msgObject;
    }

    /**
     * @method 格式化为json或string
     * @param {*} type 
     */


    _createClass(Message, [{
        key: 'format',
        value: function format(type) {
            if (type == 'json') {
                return Object.assign({}, this.msgObject);
            }

            if (type == 'string') {
                return JSON.stringify(this);
            }
            return this;
        }

        /**
         * @method 打包成buffer
         * @return Uint8Array
         */

    }, {
        key: 'dumps',
        value: function dumps() {}

        /**
         * @static 解包为JSON
         * @param {Uint8Array} uint8Array 服务器返回的ArrayBuffer转成的Uint8Array
         * @returns
         */

    }], [{
        key: 'unpack',
        value: function unpack(uint8Array) {}
    }]);

    return Message;
}();

exports.default = Message;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AbstractMessage = undefined;

var _socketlink = __webpack_require__(3);

var _socketlink2 = _interopRequireDefault(_socketlink);

var _AbstractMessage = __webpack_require__(1);

var _AbstractMessage2 = _interopRequireDefault(_AbstractMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.AbstractMessage = _AbstractMessage2.default;
exports.default = _socketlink2.default;

window.SockLink = _socketlink2.default;
window.AbstractMessage = _AbstractMessage2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(4);

var _AbstractMessage = __webpack_require__(1);

var _AbstractMessage2 = _interopRequireDefault(_AbstractMessage);

var _rc4Es = __webpack_require__(11);

var _rc4Es2 = _interopRequireDefault(_rc4Es);

var _SocketAdapter = __webpack_require__(12);

var _SocketAdapter2 = _interopRequireDefault(_SocketAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketLink = function () {
    function SocketLink(config) {
        _classCallCheck(this, SocketLink);

        this.eventEmitter = _events.eventEmitter;
        this.cfg = Object.assign({
            // 默认websocket url
            url: '',
            // 是否使用wss，默认false
            useWss: false,
            // 初始化完成后执行
            ready: function ready() {},
            messageKey: function messageKey(data) {
                return 'msg-' + data.sid + '=' + data.cid;
            },
            //sock连接之后调用
            open: function open() {}
        }, config);

        this.cfg.url = (this.cfg.useWss ? 'wss://' : 'ws://') + this.cfg.url;
        this._createSocketAdapter();
    }

    _createClass(SocketLink, [{
        key: '_createSocketAdapter',
        value: function _createSocketAdapter() {
            this.SOCK = new _SocketAdapter2.default({
                url: this.cfg.url,
                open: this._open.bind(this),
                message: this._message.bind(this),
                close: this._close.bind(this),
                ready: this._ready.bind(this),
                parseMsg4Client: this._parseMsg4Client.bind(this),
                parseMsg4Server: this._parseMsg4Server.bind(this)
            });
        }

        /**
         * sock连接成功，在sock中被调用
         */

    }, {
        key: '_open',
        value: function _open() {
            console.log('链接sock');
            this.cfg.open.bind(this)();
        }

        /** 
         * sock连接关闭
         */

    }, {
        key: '_close',
        value: function _close() {
            console.log('连接关闭');
        }

        /**
         * 
         * @param {*} msgObject 收到消息处理 
         */

    }, {
        key: '_message',
        value: function _message(msgObject) {
            //包解析处理
            //或者抛出数据
            var msgKey = this.cfg.messageKey(msgObject);
            this.eventEmitter.emit(msgKey, msgObject);
        }
    }, {
        key: 'send',
        value: function send(msgObject) {
            if (this.destroyed) {
                console.log("destroyed");
                return;
            }
            //发送消息
            console.log("sendMsg:" + msgObject);
            this.SOCK.send(msgObject);
        }

        /**
         * @method 提供给flash_socket调用，方法调用说明使用FLASH-SOCK
         * @param {String} command类型
         * @param {String} msg消息体
         */

    }, {
        key: 'command',
        value: function command(_command, msgString) {

            // 第一次decode
            var msgStringDecoded = decodeURIComponent(msgString);
            var flashSocketConnection = this.SOCK.socketConnection;

            if (_command == 'receive_data') {
                debug.ccLinkFlashMsg('receive_data', JSON.parse(msgStringDecoded));
                flashSocketConnection.onmessage(msgStringDecodedTwice);
            } else {
                if (_command == 'socket_flash_ready') {
                    flashSocketConnection.connectServer();
                } else if (_command == 'socket_connect_success') {
                    flashSocketConnection.onopen();
                } else if (_command == 'socket_connect_close') {
                    flashSocketConnection.onclose();
                }
            }
        }

        /**
         * @method 格式化收到的消息为JSON格式
         * @param {Object} rawMessage 收到的消息体
         * @returns {Object} 格式化后的消息体，json
         * @description websocket模式下收到的消息为ArrayBuffer
         * @description flash_socket模式下为JSON（stringified）
         */

    }, {
        key: '_parseMsg4Client',
        value: function _parseMsg4Client(rawMessage) {
            // 区分是原生socket还是flashsocket，原生socket需要转换
            if (this.SOCK.socketType == 'native_socket') {}
        }

        /**
         * 持续监听消息
         * @param {*} msgKeyData 用于事件拼接 
         * @param {*} msgHandler 
         */

    }, {
        key: 'onMessage',
        value: function onMessage(msgKeyData, msgHandler) {
            var msgKey = this.cfg.messageKey(msgKeyData);
            this.eventEmitter.on(msgKey, msgHandler);
        }

        /**
         * 监听消息一次
         * @param {*} msgKeyData 
         * @param {*} msgHandler 
         */

    }, {
        key: 'onMessageOnce',
        value: function onMessageOnce(msgKeyData, msgHandler) {
            var msgKey = this.cfg.messageKey(msgKeyData);
            this.eventEmitter.once(msgKey, msgHandler);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.SOCK.destroy();
        }
    }, {
        key: 'destroyed',
        get: function get() {
            return this.SOCK.destroyed;
        }
    }]);

    return SocketLink;
}();

exports.default = SocketLink;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.events = exports.eventEmitter = undefined;

var _events = __webpack_require__(5);

var eventEmitter = exports.eventEmitter = new _events.EventEmitter();

//定义全局事件常量
var events = exports.events = {};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }
        g.msgpack5 = f();
    }
})(function () {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return require(o, !0);
                    if (i) return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND", f;
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];
                    return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }
            return n[o].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({
        1: [function (require, module, exports) {
            "use strict";

            var Buffer = require("safe-buffer").Buffer;
            var assert = require("assert");
            var bl = require("bl");
            var streams = require("./lib/streams");
            var buildDecode = require("./lib/decoder");
            var buildEncode = require("./lib/encoder");

            function msgpack(options) {
                var encodingTypes = [];
                var decodingTypes = [];
                options = options || {
                    forceFloat64: false,
                    compatibilityMode: false,
                    disableTimestampEncoding: false
                };

                function registerEncoder(check, encode) {
                    assert(check, "must have an encode function");
                    assert(encode, "must have an encode function");
                    encodingTypes.push({
                        check: check,
                        encode: encode
                    });
                    return this;
                }

                function registerDecoder(type, decode) {
                    assert(type >= 0, "must have a non-negative type");
                    assert(decode, "must have a decode function");
                    decodingTypes.push({
                        type: type,
                        decode: decode
                    });
                    return this;
                }

                function register(type, constructor, encode, decode) {
                    assert(constructor, "must have a constructor");
                    assert(encode, "must have an encode function");
                    assert(type >= 0, "must have a non-negative type");
                    assert(decode, "must have a decode function");

                    function check(obj) {
                        return obj instanceof constructor;
                    }

                    function reEncode(obj) {
                        var buf = bl();
                        var header = Buffer.allocUnsafe(1);
                        header.writeInt8(type, 0);
                        buf.append(header);
                        buf.append(encode(obj));
                        return buf;
                    }
                    this.registerEncoder(check, reEncode);
                    this.registerDecoder(type, decode);
                    return this;
                }
                return {
                    encode: buildEncode(encodingTypes, options.forceFloat64, options.compatibilityMode, options.disableTimestampEncoding),
                    decode: buildDecode(decodingTypes),
                    register: register,
                    registerEncoder: registerEncoder,
                    registerDecoder: registerDecoder,
                    encoder: streams.encoder,
                    decoder: streams.decoder,
                    buffer: true,
                    type: "msgpack5",
                    IncompleteBufferError: buildDecode.IncompleteBufferError
                };
            }
            module.exports = msgpack;
        }, {
            "./lib/decoder": 2,
            "./lib/encoder": 3,
            "./lib/streams": 4,
            assert: 5,
            bl: 7,
            "safe-buffer": 28
        }],
        2: [function (require, module, exports) {
            var bl = require("bl");
            var util = require("util");

            function IncompleteBufferError(message) {
                Error.call(this);
                if (Error.captureStackTrace) {
                    Error.captureStackTrace(this, this.constructor);
                }
                this.name = this.constructor.name;
                this.message = message || "unable to decode";
            }
            util.inherits(IncompleteBufferError, Error);
            module.exports = function buildDecode(decodingTypes) {
                return decode;

                function getSize(first) {
                    switch (first) {
                        case 196:
                            return 2;
                        case 197:
                            return 3;
                        case 198:
                            return 5;
                        case 199:
                            return 3;
                        case 200:
                            return 4;
                        case 201:
                            return 6;
                        case 202:
                            return 5;
                        case 203:
                            return 9;
                        case 204:
                            return 2;
                        case 205:
                            return 3;
                        case 206:
                            return 5;
                        case 207:
                            return 9;
                        case 208:
                            return 2;
                        case 209:
                            return 3;
                        case 210:
                            return 5;
                        case 211:
                            return 9;
                        case 212:
                            return 3;
                        case 213:
                            return 4;
                        case 214:
                            return 6;
                        case 215:
                            return 10;
                        case 216:
                            return 18;
                        case 217:
                            return 2;
                        case 218:
                            return 3;
                        case 219:
                            return 5;
                        case 222:
                            return 3;
                        default:
                            return -1;
                    }
                }

                function hasMinBufferSize(first, length) {
                    var size = getSize(first);
                    if (size !== -1 && length < size) {
                        return false;
                    } else {
                        return true;
                    }
                }

                function isValidDataSize(dataLength, bufLength, headerLength) {
                    return bufLength >= headerLength + dataLength;
                }

                function buildDecodeResult(value, bytesConsumed) {
                    return {
                        value: value,
                        bytesConsumed: bytesConsumed
                    };
                }

                function decode(buf) {
                    if (!(buf instanceof bl)) {
                        buf = bl().append(buf);
                    }
                    var result = tryDecode(buf);
                    if (result) {
                        buf.consume(result.bytesConsumed);
                        return result.value;
                    } else {
                        throw new IncompleteBufferError();
                    }
                }

                function tryDecode(buf, offset) {
                    offset = offset === undefined ? 0 : offset;
                    var bufLength = buf.length - offset;
                    if (bufLength <= 0) {
                        return null;
                    }
                    var first = buf.readUInt8(offset);
                    var length;
                    var result = 0;
                    var type;
                    var bytePos;
                    if (!hasMinBufferSize(first, bufLength)) {
                        return null;
                    }
                    switch (first) {
                        case 192:
                            return buildDecodeResult(null, 1);
                        case 194:
                            return buildDecodeResult(false, 1);
                        case 195:
                            return buildDecodeResult(true, 1);
                        case 204:
                            result = buf.readUInt8(offset + 1);
                            return buildDecodeResult(result, 2);
                        case 205:
                            result = buf.readUInt16BE(offset + 1);
                            return buildDecodeResult(result, 3);
                        case 206:
                            result = buf.readUInt32BE(offset + 1);
                            return buildDecodeResult(result, 5);
                        case 207:
                            for (bytePos = 7; bytePos >= 0; bytePos--) {
                                result += buf.readUInt8(offset + bytePos + 1) * Math.pow(2, 8 * (7 - bytePos));
                            }
                            return buildDecodeResult(result, 9);
                        case 208:
                            result = buf.readInt8(offset + 1);
                            return buildDecodeResult(result, 2);
                        case 209:
                            result = buf.readInt16BE(offset + 1);
                            return buildDecodeResult(result, 3);
                        case 210:
                            result = buf.readInt32BE(offset + 1);
                            return buildDecodeResult(result, 5);
                        case 211:
                            result = readInt64BE(buf.slice(offset + 1, offset + 9), 0);
                            return buildDecodeResult(result, 9);
                        case 202:
                            result = buf.readFloatBE(offset + 1);
                            return buildDecodeResult(result, 5);
                        case 203:
                            result = buf.readDoubleBE(offset + 1);
                            return buildDecodeResult(result, 9);
                        case 217:
                            length = buf.readUInt8(offset + 1);
                            if (!isValidDataSize(length, bufLength, 2)) {
                                return null;
                            }
                            result = buf.toString("utf8", offset + 2, offset + 2 + length);
                            return buildDecodeResult(result, 2 + length);
                        case 218:
                            length = buf.readUInt16BE(offset + 1);
                            if (!isValidDataSize(length, bufLength, 3)) {
                                return null;
                            }
                            result = buf.toString("utf8", offset + 3, offset + 3 + length);
                            return buildDecodeResult(result, 3 + length);
                        case 219:
                            length = buf.readUInt32BE(offset + 1);
                            if (!isValidDataSize(length, bufLength, 5)) {
                                return null;
                            }
                            result = buf.toString("utf8", offset + 5, offset + 5 + length);
                            return buildDecodeResult(result, 5 + length);
                        case 196:
                            length = buf.readUInt8(offset + 1);
                            if (!isValidDataSize(length, bufLength, 2)) {
                                return null;
                            }
                            result = buf.slice(offset + 2, offset + 2 + length);
                            return buildDecodeResult(result, 2 + length);
                        case 197:
                            length = buf.readUInt16BE(offset + 1);
                            if (!isValidDataSize(length, bufLength, 3)) {
                                return null;
                            }
                            result = buf.slice(offset + 3, offset + 3 + length);
                            return buildDecodeResult(result, 3 + length);
                        case 198:
                            length = buf.readUInt32BE(offset + 1);
                            if (!isValidDataSize(length, bufLength, 5)) {
                                return null;
                            }
                            result = buf.slice(offset + 5, offset + 5 + length);
                            return buildDecodeResult(result, 5 + length);
                        case 220:
                            if (bufLength < 3) {
                                return null;
                            }
                            length = buf.readUInt16BE(offset + 1);
                            return decodeArray(buf, offset, length, 3);
                        case 221:
                            if (bufLength < 5) {
                                return null;
                            }
                            length = buf.readUInt32BE(offset + 1);
                            return decodeArray(buf, offset, length, 5);
                        case 222:
                            length = buf.readUInt16BE(offset + 1);
                            return decodeMap(buf, offset, length, 3);
                        case 223:
                            throw new Error("map too big to decode in JS");
                        case 212:
                            return decodeFixExt(buf, offset, 1);
                        case 213:
                            return decodeFixExt(buf, offset, 2);
                        case 214:
                            return decodeFixExt(buf, offset, 4);
                        case 215:
                            return decodeFixExt(buf, offset, 8);
                        case 216:
                            return decodeFixExt(buf, offset, 16);
                        case 199:
                            length = buf.readUInt8(offset + 1);
                            type = buf.readUInt8(offset + 2);
                            if (!isValidDataSize(length, bufLength, 3)) {
                                return null;
                            }
                            return decodeExt(buf, offset, type, length, 3);
                        case 200:
                            length = buf.readUInt16BE(offset + 1);
                            type = buf.readUInt8(offset + 3);
                            if (!isValidDataSize(length, bufLength, 4)) {
                                return null;
                            }
                            return decodeExt(buf, offset, type, length, 4);
                        case 201:
                            length = buf.readUInt32BE(offset + 1);
                            type = buf.readUInt8(offset + 5);
                            if (!isValidDataSize(length, bufLength, 6)) {
                                return null;
                            }
                            return decodeExt(buf, offset, type, length, 6);
                    }
                    if ((first & 240) === 144) {
                        length = first & 15;
                        return decodeArray(buf, offset, length, 1);
                    } else if ((first & 240) === 128) {
                        length = first & 15;
                        return decodeMap(buf, offset, length, 1);
                    } else if ((first & 224) === 160) {
                        length = first & 31;
                        if (isValidDataSize(length, bufLength, 1)) {
                            result = buf.toString("utf8", offset + 1, offset + length + 1);
                            return buildDecodeResult(result, length + 1);
                        } else {
                            return null;
                        }
                    } else if (first >= 224) {
                        result = first - 256;
                        return buildDecodeResult(result, 1);
                    } else if (first < 128) {
                        return buildDecodeResult(first, 1);
                    } else {
                        throw new Error("not implemented yet");
                    }
                }

                function readInt64BE(buf, offset) {
                    var negate = (buf[offset] & 128) == 128;
                    if (negate) {
                        var carry = 1;
                        for (var i = offset + 7; i >= offset; i--) {
                            var v = (buf[i] ^ 255) + carry;
                            buf[i] = v & 255;
                            carry = v >> 8;
                        }
                    }
                    var hi = buf.readUInt32BE(offset + 0);
                    var lo = buf.readUInt32BE(offset + 4);
                    return (hi * 4294967296 + lo) * (negate ? -1 : +1);
                }

                function decodeArray(buf, offset, length, headerLength) {
                    var result = [];
                    var i;
                    var totalBytesConsumed = 0;
                    offset += headerLength;
                    for (i = 0; i < length; i++) {
                        var decodeResult = tryDecode(buf, offset);
                        if (decodeResult) {
                            result.push(decodeResult.value);
                            offset += decodeResult.bytesConsumed;
                            totalBytesConsumed += decodeResult.bytesConsumed;
                        } else {
                            return null;
                        }
                    }
                    return buildDecodeResult(result, headerLength + totalBytesConsumed);
                }

                function decodeMap(buf, offset, length, headerLength) {
                    var result = {};
                    var key;
                    var i;
                    var totalBytesConsumed = 0;
                    offset += headerLength;
                    for (i = 0; i < length; i++) {
                        var keyResult = tryDecode(buf, offset);
                        if (keyResult) {
                            offset += keyResult.bytesConsumed;
                            var valueResult = tryDecode(buf, offset);
                            if (valueResult) {
                                key = keyResult.value;
                                result[key] = valueResult.value;
                                offset += valueResult.bytesConsumed;
                                totalBytesConsumed += keyResult.bytesConsumed + valueResult.bytesConsumed;
                            } else {
                                return null;
                            }
                        } else {
                            return null;
                        }
                    }
                    return buildDecodeResult(result, headerLength + totalBytesConsumed);
                }

                function decodeFixExt(buf, offset, size) {
                    var type = buf.readInt8(offset + 1);
                    return decodeExt(buf, offset, type, size, 2);
                }

                function decodeTimestamp(buf, size, headerSize) {
                    var seconds, nanoseconds;
                    nanoseconds = 0;
                    switch (size) {
                        case 4:
                            seconds = buf.readUInt32BE();
                            break;
                        case 8:
                            var upper = buf.readUInt32BE();
                            var lower = buf.readUInt32BE(4);
                            nanoseconds = upper / 4;
                            seconds = (upper & 3) * Math.pow(2, 32) + lower;
                            break;
                        case 12:
                            throw new Error("timestamp 96 is not yet implemented");
                    }
                    var millis = seconds * 1e3 + Math.round(nanoseconds / 1e6);
                    return buildDecodeResult(new Date(millis), size + headerSize);
                }

                function decodeExt(buf, offset, type, size, headerSize) {
                    var i, toDecode;
                    offset += headerSize;
                    if (type < 0) {
                        switch (type) {
                            case -1:
                                toDecode = buf.slice(offset, offset + size);
                                return decodeTimestamp(toDecode, size, headerSize);
                        }
                    }
                    for (i = 0; i < decodingTypes.length; i++) {
                        if (type === decodingTypes[i].type) {
                            toDecode = buf.slice(offset, offset + size);
                            var value = decodingTypes[i].decode(toDecode);
                            return buildDecodeResult(value, headerSize + size);
                        }
                    }
                    throw new Error("unable to find ext type " + type);
                }
            };
            module.exports.IncompleteBufferError = IncompleteBufferError;
        }, {
            bl: 7,
            util: 33
        }],
        3: [function (require, module, exports) {
            "use strict";

            var Buffer = require("safe-buffer").Buffer;
            var bl = require("bl");
            var TOLERANCE = .1;
            module.exports = function buildEncode(encodingTypes, forceFloat64, compatibilityMode, disableTimestampEncoding) {
                function encode(obj, avoidSlice) {
                    var buf, len;
                    if (obj === undefined) {
                        throw new Error("undefined is not encodable in msgpack!");
                    } else if (obj === null) {
                        buf = Buffer.allocUnsafe(1);
                        buf[0] = 192;
                    } else if (obj === true) {
                        buf = Buffer.allocUnsafe(1);
                        buf[0] = 195;
                    } else if (obj === false) {
                        buf = Buffer.allocUnsafe(1);
                        buf[0] = 194;
                    } else if (typeof obj === "string") {
                        len = Buffer.byteLength(obj);
                        if (len < 32) {
                            buf = Buffer.allocUnsafe(1 + len);
                            buf[0] = 160 | len;
                            if (len > 0) {
                                buf.write(obj, 1);
                            }
                        } else if (len <= 255 && !compatibilityMode) {
                            buf = Buffer.allocUnsafe(2 + len);
                            buf[0] = 217;
                            buf[1] = len;
                            buf.write(obj, 2);
                        } else if (len <= 65535) {
                            buf = Buffer.allocUnsafe(3 + len);
                            buf[0] = 218;
                            buf.writeUInt16BE(len, 1);
                            buf.write(obj, 3);
                        } else {
                            buf = Buffer.allocUnsafe(5 + len);
                            buf[0] = 219;
                            buf.writeUInt32BE(len, 1);
                            buf.write(obj, 5);
                        }
                    } else if (obj && (obj.readUInt32LE || obj instanceof Uint8Array)) {
                        if (obj instanceof Uint8Array) {
                            obj = Buffer.from(obj);
                        }
                        if (obj.length <= 255) {
                            buf = Buffer.allocUnsafe(2);
                            buf[0] = 196;
                            buf[1] = obj.length;
                        } else if (obj.length <= 65535) {
                            buf = Buffer.allocUnsafe(3);
                            buf[0] = 197;
                            buf.writeUInt16BE(obj.length, 1);
                        } else {
                            buf = Buffer.allocUnsafe(5);
                            buf[0] = 198;
                            buf.writeUInt32BE(obj.length, 1);
                        }
                        buf = bl([buf, obj]);
                    } else if (Array.isArray(obj)) {
                        if (obj.length < 16) {
                            buf = Buffer.allocUnsafe(1);
                            buf[0] = 144 | obj.length;
                        } else if (obj.length < 65536) {
                            buf = Buffer.allocUnsafe(3);
                            buf[0] = 220;
                            buf.writeUInt16BE(obj.length, 1);
                        } else {
                            buf = Buffer.allocUnsafe(5);
                            buf[0] = 221;
                            buf.writeUInt32BE(obj.length, 1);
                        }
                        buf = obj.reduce(function (acc, obj) {
                            acc.append(encode(obj, true));
                            return acc;
                        }, bl().append(buf));
                    } else if (!disableTimestampEncoding && typeof obj.getDate === "function") {
                        return encodeDate(obj);
                    } else if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
                        buf = encodeExt(obj) || encodeObject(obj);
                    } else if (typeof obj === "number") {
                        if (isFloat(obj)) {
                            return encodeFloat(obj, forceFloat64);
                        } else if (obj >= 0) {
                            if (obj < 128) {
                                buf = Buffer.allocUnsafe(1);
                                buf[0] = obj;
                            } else if (obj < 256) {
                                buf = Buffer.allocUnsafe(2);
                                buf[0] = 204;
                                buf[1] = obj;
                            } else if (obj < 65536) {
                                buf = Buffer.allocUnsafe(3);
                                buf[0] = 205;
                                buf.writeUInt16BE(obj, 1);
                            } else if (obj <= 4294967295) {
                                buf = Buffer.allocUnsafe(5);
                                buf[0] = 206;
                                buf.writeUInt32BE(obj, 1);
                            } else if (obj <= 9007199254740991) {
                                buf = Buffer.allocUnsafe(9);
                                buf[0] = 207;
                                write64BitUint(buf, obj);
                            } else {
                                return encodeFloat(obj, true);
                            }
                        } else {
                            if (obj >= -32) {
                                buf = Buffer.allocUnsafe(1);
                                buf[0] = 256 + obj;
                            } else if (obj >= -128) {
                                buf = Buffer.allocUnsafe(2);
                                buf[0] = 208;
                                buf.writeInt8(obj, 1);
                            } else if (obj >= -32768) {
                                buf = Buffer.allocUnsafe(3);
                                buf[0] = 209;
                                buf.writeInt16BE(obj, 1);
                            } else if (obj > -214748365) {
                                buf = Buffer.allocUnsafe(5);
                                buf[0] = 210;
                                buf.writeInt32BE(obj, 1);
                            } else if (obj >= -9007199254740991) {
                                buf = Buffer.allocUnsafe(9);
                                buf[0] = 211;
                                write64BitInt(buf, 1, obj);
                            } else {
                                return encodeFloat(obj, true);
                            }
                        }
                    }
                    if (!buf) {
                        throw new Error("not implemented yet");
                    }
                    if (avoidSlice) {
                        return buf;
                    } else {
                        return buf.slice();
                    }
                }

                function encodeDate(dt) {
                    var encoded;
                    var millis = dt * 1;
                    var seconds = Math.floor(millis / 1e3);
                    var nanos = (millis - seconds * 1e3) * 1e6;
                    if (nanos || seconds > 4294967295) {
                        encoded = new Buffer(10);
                        encoded[0] = 215;
                        encoded[1] = -1;
                        var upperNanos = nanos * 4;
                        var upperSeconds = seconds / Math.pow(2, 32);
                        var upper = upperNanos + upperSeconds & 4294967295;
                        var lower = seconds & 4294967295;
                        encoded.writeInt32BE(upper, 2);
                        encoded.writeInt32BE(lower, 6);
                    } else {
                        encoded = new Buffer(6);
                        encoded[0] = 214;
                        encoded[1] = -1;
                        encoded.writeUInt32BE(Math.floor(millis / 1e3), 2);
                    }
                    return bl().append(encoded);
                }

                function encodeExt(obj) {
                    var i;
                    var encoded;
                    var length = -1;
                    var headers = [];
                    for (i = 0; i < encodingTypes.length; i++) {
                        if (encodingTypes[i].check(obj)) {
                            encoded = encodingTypes[i].encode(obj);
                            break;
                        }
                    }
                    if (!encoded) {
                        return null;
                    }
                    length = encoded.length - 1;
                    if (length === 1) {
                        headers.push(212);
                    } else if (length === 2) {
                        headers.push(213);
                    } else if (length === 4) {
                        headers.push(214);
                    } else if (length === 8) {
                        headers.push(215);
                    } else if (length === 16) {
                        headers.push(216);
                    } else if (length < 256) {
                        headers.push(199);
                        headers.push(length);
                    } else if (length < 65536) {
                        headers.push(200);
                        headers.push(length >> 8);
                        headers.push(length & 255);
                    } else {
                        headers.push(201);
                        headers.push(length >> 24);
                        headers.push(length >> 16 & 255);
                        headers.push(length >> 8 & 255);
                        headers.push(length & 255);
                    }
                    return bl().append(Buffer.from(headers)).append(encoded);
                }

                function encodeObject(obj) {
                    var acc = [];
                    var length = 0;
                    var key;
                    var header;
                    for (key in obj) {
                        if (obj.hasOwnProperty(key) && obj[key] !== undefined && typeof obj[key] !== "function") {
                            ++length;
                            acc.push(encode(key, true));
                            acc.push(encode(obj[key], true));
                        }
                    }
                    if (length < 16) {
                        header = Buffer.allocUnsafe(1);
                        header[0] = 128 | length;
                    } else {
                        header = Buffer.allocUnsafe(3);
                        header[0] = 222;
                        header.writeUInt16BE(length, 1);
                    }
                    acc.unshift(header);
                    var result = acc.reduce(function (list, buf) {
                        return list.append(buf);
                    }, bl());
                    return result;
                }
                return encode;
            };

            function write64BitUint(buf, obj) {
                for (var currByte = 7; currByte >= 0; currByte--) {
                    buf[currByte + 1] = obj & 255;
                    obj = obj / 256;
                }
            }

            function write64BitInt(buf, offset, num) {
                var negate = num < 0;
                if (negate) {
                    num = Math.abs(num);
                }
                var lo = num % 4294967296;
                var hi = num / 4294967296;
                buf.writeUInt32BE(Math.floor(hi), offset + 0);
                buf.writeUInt32BE(lo, offset + 4);
                if (negate) {
                    var carry = 1;
                    for (var i = offset + 7; i >= offset; i--) {
                        var v = (buf[i] ^ 255) + carry;
                        buf[i] = v & 255;
                        carry = v >> 8;
                    }
                }
            }

            function isFloat(n) {
                return n !== Math.floor(n);
            }

            function encodeFloat(obj, forceFloat64) {
                var buf;
                buf = Buffer.allocUnsafe(5);
                buf[0] = 202;
                buf.writeFloatBE(obj, 1);
                if (forceFloat64 || Math.abs(obj - buf.readFloatBE(1)) > TOLERANCE) {
                    buf = Buffer.allocUnsafe(9);
                    buf[0] = 203;
                    buf.writeDoubleBE(obj, 1);
                }
                return buf;
            }
        }, {
            bl: 7,
            "safe-buffer": 28
        }],
        4: [function (require, module, exports) {
            "use strict";

            var Transform = require("readable-stream").Transform;
            var inherits = require("inherits");
            var bl = require("bl");

            function Base(opts) {
                opts = opts || {};
                opts.objectMode = true;
                opts.highWaterMark = 16;
                Transform.call(this, opts);
                this._msgpack = opts.msgpack;
            }
            inherits(Base, Transform);

            function Encoder(opts) {
                if (!(this instanceof Encoder)) {
                    opts = opts || {};
                    opts.msgpack = this;
                    return new Encoder(opts);
                }
                Base.call(this, opts);
            }
            inherits(Encoder, Base);
            Encoder.prototype._transform = function (obj, enc, done) {
                var buf = null;
                try {
                    buf = this._msgpack.encode(obj).slice(0);
                } catch (err) {
                    this.emit("error", err);
                    return done();
                }
                this.push(buf);
                done();
            };

            function Decoder(opts) {
                if (!(this instanceof Decoder)) {
                    opts = opts || {};
                    opts.msgpack = this;
                    return new Decoder(opts);
                }
                Base.call(this, opts);
                this._chunks = bl();
            }
            inherits(Decoder, Base);
            Decoder.prototype._transform = function (buf, enc, done) {
                if (buf) {
                    this._chunks.append(buf);
                }
                try {
                    var result = this._msgpack.decode(this._chunks);
                    this.push(result);
                } catch (err) {
                    if (err instanceof this._msgpack.IncompleteBufferError) {
                        done();
                    } else {
                        this.emit("error", err);
                    }
                    return;
                }
                if (this._chunks.length > 0) {
                    this._transform(null, enc, done);
                } else {
                    done();
                }
            };
            module.exports.decoder = Decoder;
            module.exports.encoder = Encoder;
        }, {
            bl: 7,
            inherits: 13,
            "readable-stream": 27
        }],
        5: [function (require, module, exports) {
            (function (global) {
                "use strict";

                function compare(a, b) {
                    if (a === b) {
                        return 0;
                    }
                    var x = a.length;
                    var y = b.length;
                    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                        if (a[i] !== b[i]) {
                            x = a[i];
                            y = b[i];
                            break;
                        }
                    }
                    if (x < y) {
                        return -1;
                    }
                    if (y < x) {
                        return 1;
                    }
                    return 0;
                }

                function isBuffer(b) {
                    if (global.Buffer && typeof global.Buffer.isBuffer === "function") {
                        return global.Buffer.isBuffer(b);
                    }
                    return !!(b != null && b._isBuffer);
                }
                var util = require("util/");
                var hasOwn = Object.prototype.hasOwnProperty;
                var pSlice = Array.prototype.slice;
                var functionsHaveNames = function () {
                    return function foo() {}.name === "foo";
                }();

                function pToString(obj) {
                    return Object.prototype.toString.call(obj);
                }

                function isView(arrbuf) {
                    if (isBuffer(arrbuf)) {
                        return false;
                    }
                    if (typeof global.ArrayBuffer !== "function") {
                        return false;
                    }
                    if (typeof ArrayBuffer.isView === "function") {
                        return ArrayBuffer.isView(arrbuf);
                    }
                    if (!arrbuf) {
                        return false;
                    }
                    if (arrbuf instanceof DataView) {
                        return true;
                    }
                    if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
                        return true;
                    }
                    return false;
                }
                var assert = module.exports = ok;
                var regex = /\s*function\s+([^\(\s]*)\s*/;

                function getName(func) {
                    if (!util.isFunction(func)) {
                        return;
                    }
                    if (functionsHaveNames) {
                        return func.name;
                    }
                    var str = func.toString();
                    var match = str.match(regex);
                    return match && match[1];
                }
                assert.AssertionError = function AssertionError(options) {
                    this.name = "AssertionError";
                    this.actual = options.actual;
                    this.expected = options.expected;
                    this.operator = options.operator;
                    if (options.message) {
                        this.message = options.message;
                        this.generatedMessage = false;
                    } else {
                        this.message = getMessage(this);
                        this.generatedMessage = true;
                    }
                    var stackStartFunction = options.stackStartFunction || fail;
                    if (Error.captureStackTrace) {
                        Error.captureStackTrace(this, stackStartFunction);
                    } else {
                        var err = new Error();
                        if (err.stack) {
                            var out = err.stack;
                            var fn_name = getName(stackStartFunction);
                            var idx = out.indexOf("\n" + fn_name);
                            if (idx >= 0) {
                                var next_line = out.indexOf("\n", idx + 1);
                                out = out.substring(next_line + 1);
                            }
                            this.stack = out;
                        }
                    }
                };
                util.inherits(assert.AssertionError, Error);

                function truncate(s, n) {
                    if (typeof s === "string") {
                        return s.length < n ? s : s.slice(0, n);
                    } else {
                        return s;
                    }
                }

                function inspect(something) {
                    if (functionsHaveNames || !util.isFunction(something)) {
                        return util.inspect(something);
                    }
                    var rawname = getName(something);
                    var name = rawname ? ": " + rawname : "";
                    return "[Function" + name + "]";
                }

                function getMessage(self) {
                    return truncate(inspect(self.actual), 128) + " " + self.operator + " " + truncate(inspect(self.expected), 128);
                }

                function fail(actual, expected, message, operator, stackStartFunction) {
                    throw new assert.AssertionError({
                        message: message,
                        actual: actual,
                        expected: expected,
                        operator: operator,
                        stackStartFunction: stackStartFunction
                    });
                }
                assert.fail = fail;

                function ok(value, message) {
                    if (!value) fail(value, true, message, "==", assert.ok);
                }
                assert.ok = ok;
                assert.equal = function equal(actual, expected, message) {
                    if (actual != expected) fail(actual, expected, message, "==", assert.equal);
                };
                assert.notEqual = function notEqual(actual, expected, message) {
                    if (actual == expected) {
                        fail(actual, expected, message, "!=", assert.notEqual);
                    }
                };
                assert.deepEqual = function deepEqual(actual, expected, message) {
                    if (!_deepEqual(actual, expected, false)) {
                        fail(actual, expected, message, "deepEqual", assert.deepEqual);
                    }
                };
                assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
                    if (!_deepEqual(actual, expected, true)) {
                        fail(actual, expected, message, "deepStrictEqual", assert.deepStrictEqual);
                    }
                };

                function _deepEqual(actual, expected, strict, memos) {
                    if (actual === expected) {
                        return true;
                    } else if (isBuffer(actual) && isBuffer(expected)) {
                        return compare(actual, expected) === 0;
                    } else if (util.isDate(actual) && util.isDate(expected)) {
                        return actual.getTime() === expected.getTime();
                    } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
                        return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
                    } else if ((actual === null || (typeof actual === "undefined" ? "undefined" : _typeof(actual)) !== "object") && (expected === null || (typeof expected === "undefined" ? "undefined" : _typeof(expected)) !== "object")) {
                        return strict ? actual === expected : actual == expected;
                    } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
                        return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;
                    } else if (isBuffer(actual) !== isBuffer(expected)) {
                        return false;
                    } else {
                        memos = memos || {
                            actual: [],
                            expected: []
                        };
                        var actualIndex = memos.actual.indexOf(actual);
                        if (actualIndex !== -1) {
                            if (actualIndex === memos.expected.indexOf(expected)) {
                                return true;
                            }
                        }
                        memos.actual.push(actual);
                        memos.expected.push(expected);
                        return objEquiv(actual, expected, strict, memos);
                    }
                }

                function isArguments(object) {
                    return Object.prototype.toString.call(object) == "[object Arguments]";
                }

                function objEquiv(a, b, strict, actualVisitedObjects) {
                    if (a === null || a === undefined || b === null || b === undefined) return false;
                    if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
                    if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
                    var aIsArgs = isArguments(a);
                    var bIsArgs = isArguments(b);
                    if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
                    if (aIsArgs) {
                        a = pSlice.call(a);
                        b = pSlice.call(b);
                        return _deepEqual(a, b, strict);
                    }
                    var ka = objectKeys(a);
                    var kb = objectKeys(b);
                    var key, i;
                    if (ka.length !== kb.length) return false;
                    ka.sort();
                    kb.sort();
                    for (i = ka.length - 1; i >= 0; i--) {
                        if (ka[i] !== kb[i]) return false;
                    }
                    for (i = ka.length - 1; i >= 0; i--) {
                        key = ka[i];
                        if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
                    }
                    return true;
                }
                assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
                    if (_deepEqual(actual, expected, false)) {
                        fail(actual, expected, message, "notDeepEqual", assert.notDeepEqual);
                    }
                };
                assert.notDeepStrictEqual = notDeepStrictEqual;

                function notDeepStrictEqual(actual, expected, message) {
                    if (_deepEqual(actual, expected, true)) {
                        fail(actual, expected, message, "notDeepStrictEqual", notDeepStrictEqual);
                    }
                }
                assert.strictEqual = function strictEqual(actual, expected, message) {
                    if (actual !== expected) {
                        fail(actual, expected, message, "===", assert.strictEqual);
                    }
                };
                assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
                    if (actual === expected) {
                        fail(actual, expected, message, "!==", assert.notStrictEqual);
                    }
                };

                function expectedException(actual, expected) {
                    if (!actual || !expected) {
                        return false;
                    }
                    if (Object.prototype.toString.call(expected) == "[object RegExp]") {
                        return expected.test(actual);
                    }
                    try {
                        if (actual instanceof expected) {
                            return true;
                        }
                    } catch (e) {}
                    if (Error.isPrototypeOf(expected)) {
                        return false;
                    }
                    return expected.call({}, actual) === true;
                }

                function _tryBlock(block) {
                    var error;
                    try {
                        block();
                    } catch (e) {
                        error = e;
                    }
                    return error;
                }

                function _throws(shouldThrow, block, expected, message) {
                    var actual;
                    if (typeof block !== "function") {
                        throw new TypeError('"block" argument must be a function');
                    }
                    if (typeof expected === "string") {
                        message = expected;
                        expected = null;
                    }
                    actual = _tryBlock(block);
                    message = (expected && expected.name ? " (" + expected.name + ")." : ".") + (message ? " " + message : ".");
                    if (shouldThrow && !actual) {
                        fail(actual, expected, "Missing expected exception" + message);
                    }
                    var userProvidedMessage = typeof message === "string";
                    var isUnwantedException = !shouldThrow && util.isError(actual);
                    var isUnexpectedException = !shouldThrow && actual && !expected;
                    if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
                        fail(actual, expected, "Got unwanted exception" + message);
                    }
                    if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
                        throw actual;
                    }
                }
                assert.throws = function (block, error, message) {
                    _throws(true, block, error, message);
                };
                assert.doesNotThrow = function (block, error, message) {
                    _throws(false, block, error, message);
                };
                assert.ifError = function (err) {
                    if (err) throw err;
                };
                var objectKeys = Object.keys || function (obj) {
                    var keys = [];
                    for (var key in obj) {
                        if (hasOwn.call(obj, key)) keys.push(key);
                    }
                    return keys;
                };
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {
            "util/": 33
        }],
        6: [function (require, module, exports) {
            "use strict";

            exports.byteLength = byteLength;
            exports.toByteArray = toByteArray;
            exports.fromByteArray = fromByteArray;
            var lookup = [];
            var revLookup = [];
            var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (var i = 0, len = code.length; i < len; ++i) {
                lookup[i] = code[i];
                revLookup[code.charCodeAt(i)] = i;
            }
            revLookup["-".charCodeAt(0)] = 62;
            revLookup["_".charCodeAt(0)] = 63;

            function placeHoldersCount(b64) {
                var len = b64.length;
                if (len % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                return b64[len - 2] === "=" ? 2 : b64[len - 1] === "=" ? 1 : 0;
            }

            function byteLength(b64) {
                return b64.length * 3 / 4 - placeHoldersCount(b64);
            }

            function toByteArray(b64) {
                var i, l, tmp, placeHolders, arr;
                var len = b64.length;
                placeHolders = placeHoldersCount(b64);
                arr = new Arr(len * 3 / 4 - placeHolders);
                l = placeHolders > 0 ? len - 4 : len;
                var L = 0;
                for (i = 0; i < l; i += 4) {
                    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
                    arr[L++] = tmp >> 16 & 255;
                    arr[L++] = tmp >> 8 & 255;
                    arr[L++] = tmp & 255;
                }
                if (placeHolders === 2) {
                    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
                    arr[L++] = tmp & 255;
                } else if (placeHolders === 1) {
                    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
                    arr[L++] = tmp >> 8 & 255;
                    arr[L++] = tmp & 255;
                }
                return arr;
            }

            function tripletToBase64(num) {
                return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
            }

            function encodeChunk(uint8, start, end) {
                var tmp;
                var output = [];
                for (var i = start; i < end; i += 3) {
                    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
                    output.push(tripletToBase64(tmp));
                }
                return output.join("");
            }

            function fromByteArray(uint8) {
                var tmp;
                var len = uint8.length;
                var extraBytes = len % 3;
                var output = "";
                var parts = [];
                var maxChunkLength = 16383;
                for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
                }
                if (extraBytes === 1) {
                    tmp = uint8[len - 1];
                    output += lookup[tmp >> 2];
                    output += lookup[tmp << 4 & 63];
                    output += "==";
                } else if (extraBytes === 2) {
                    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
                    output += lookup[tmp >> 10];
                    output += lookup[tmp >> 4 & 63];
                    output += lookup[tmp << 2 & 63];
                    output += "=";
                }
                parts.push(output);
                return parts.join("");
            }
        }, {}],
        7: [function (require, module, exports) {
            (function (Buffer) {
                var DuplexStream = require("readable-stream/duplex"),
                    util = require("util");

                function BufferList(callback) {
                    if (!(this instanceof BufferList)) return new BufferList(callback);
                    this._bufs = [];
                    this.length = 0;
                    if (typeof callback == "function") {
                        this._callback = callback;
                        var piper = function piper(err) {
                            if (this._callback) {
                                this._callback(err);
                                this._callback = null;
                            }
                        }.bind(this);
                        this.on("pipe", function onPipe(src) {
                            src.on("error", piper);
                        });
                        this.on("unpipe", function onUnpipe(src) {
                            src.removeListener("error", piper);
                        });
                    } else {
                        this.append(callback);
                    }
                    DuplexStream.call(this);
                }
                util.inherits(BufferList, DuplexStream);
                BufferList.prototype._offset = function _offset(offset) {
                    var tot = 0,
                        i = 0,
                        _t;
                    if (offset === 0) return [0, 0];
                    for (; i < this._bufs.length; i++) {
                        _t = tot + this._bufs[i].length;
                        if (offset < _t || i == this._bufs.length - 1) return [i, offset - tot];
                        tot = _t;
                    }
                };
                BufferList.prototype.append = function append(buf) {
                    var i = 0;
                    if (Buffer.isBuffer(buf)) {
                        this._appendBuffer(buf);
                    } else if (Array.isArray(buf)) {
                        for (; i < buf.length; i++) {
                            this.append(buf[i]);
                        }
                    } else if (buf instanceof BufferList) {
                        for (; i < buf._bufs.length; i++) {
                            this.append(buf._bufs[i]);
                        }
                    } else if (buf != null) {
                        if (typeof buf == "number") buf = buf.toString();
                        this._appendBuffer(new Buffer(buf));
                    }
                    return this;
                };
                BufferList.prototype._appendBuffer = function appendBuffer(buf) {
                    this._bufs.push(buf);
                    this.length += buf.length;
                };
                BufferList.prototype._write = function _write(buf, encoding, callback) {
                    this._appendBuffer(buf);
                    if (typeof callback == "function") callback();
                };
                BufferList.prototype._read = function _read(size) {
                    if (!this.length) return this.push(null);
                    size = Math.min(size, this.length);
                    this.push(this.slice(0, size));
                    this.consume(size);
                };
                BufferList.prototype.end = function end(chunk) {
                    DuplexStream.prototype.end.call(this, chunk);
                    if (this._callback) {
                        this._callback(null, this.slice());
                        this._callback = null;
                    }
                };
                BufferList.prototype.get = function get(index) {
                    return this.slice(index, index + 1)[0];
                };
                BufferList.prototype.slice = function slice(start, end) {
                    if (typeof start == "number" && start < 0) start += this.length;
                    if (typeof end == "number" && end < 0) end += this.length;
                    return this.copy(null, 0, start, end);
                };
                BufferList.prototype.copy = function copy(dst, dstStart, srcStart, srcEnd) {
                    if (typeof srcStart != "number" || srcStart < 0) srcStart = 0;
                    if (typeof srcEnd != "number" || srcEnd > this.length) srcEnd = this.length;
                    if (srcStart >= this.length) return dst || new Buffer(0);
                    if (srcEnd <= 0) return dst || new Buffer(0);
                    var copy = !!dst,
                        off = this._offset(srcStart),
                        len = srcEnd - srcStart,
                        bytes = len,
                        bufoff = copy && dstStart || 0,
                        start = off[1],
                        l,
                        i;
                    if (srcStart === 0 && srcEnd == this.length) {
                        if (!copy) {
                            return this._bufs.length === 1 ? this._bufs[0] : Buffer.concat(this._bufs, this.length);
                        }
                        for (i = 0; i < this._bufs.length; i++) {
                            this._bufs[i].copy(dst, bufoff);
                            bufoff += this._bufs[i].length;
                        }
                        return dst;
                    }
                    if (bytes <= this._bufs[off[0]].length - start) {
                        return copy ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes) : this._bufs[off[0]].slice(start, start + bytes);
                    }
                    if (!copy) dst = new Buffer(len);
                    for (i = off[0]; i < this._bufs.length; i++) {
                        l = this._bufs[i].length - start;
                        if (bytes > l) {
                            this._bufs[i].copy(dst, bufoff, start);
                        } else {
                            this._bufs[i].copy(dst, bufoff, start, start + bytes);
                            break;
                        }
                        bufoff += l;
                        bytes -= l;
                        if (start) start = 0;
                    }
                    return dst;
                };
                BufferList.prototype.shallowSlice = function shallowSlice(start, end) {
                    start = start || 0;
                    end = end || this.length;
                    if (start < 0) start += this.length;
                    if (end < 0) end += this.length;
                    var startOffset = this._offset(start),
                        endOffset = this._offset(end),
                        buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1);
                    if (endOffset[1] == 0) buffers.pop();else buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1]);
                    if (startOffset[1] != 0) buffers[0] = buffers[0].slice(startOffset[1]);
                    return new BufferList(buffers);
                };
                BufferList.prototype.toString = function toString(encoding, start, end) {
                    return this.slice(start, end).toString(encoding);
                };
                BufferList.prototype.consume = function consume(bytes) {
                    while (this._bufs.length) {
                        if (bytes >= this._bufs[0].length) {
                            bytes -= this._bufs[0].length;
                            this.length -= this._bufs[0].length;
                            this._bufs.shift();
                        } else {
                            this._bufs[0] = this._bufs[0].slice(bytes);
                            this.length -= bytes;
                            break;
                        }
                    }
                    return this;
                };
                BufferList.prototype.duplicate = function duplicate() {
                    var i = 0,
                        copy = new BufferList();
                    for (; i < this._bufs.length; i++) {
                        copy.append(this._bufs[i]);
                    }return copy;
                };
                BufferList.prototype.destroy = function destroy() {
                    this._bufs.length = 0;
                    this.length = 0;
                    this.push(null);
                };
                (function () {
                    var methods = {
                        readDoubleBE: 8,
                        readDoubleLE: 8,
                        readFloatBE: 4,
                        readFloatLE: 4,
                        readInt32BE: 4,
                        readInt32LE: 4,
                        readUInt32BE: 4,
                        readUInt32LE: 4,
                        readInt16BE: 2,
                        readInt16LE: 2,
                        readUInt16BE: 2,
                        readUInt16LE: 2,
                        readInt8: 1,
                        readUInt8: 1
                    };
                    for (var m in methods) {
                        (function (m) {
                            BufferList.prototype[m] = function (offset) {
                                return this.slice(offset, offset + methods[m])[m](0);
                            };
                        })(m);
                    }
                })();
                module.exports = BufferList;
            }).call(this, require("buffer").Buffer);
        }, {
            buffer: 9,
            "readable-stream/duplex": 18,
            util: 33
        }],
        8: [function (require, module, exports) {}, {}],
        9: [function (require, module, exports) {
            "use strict";

            var base64 = require("base64-js");
            var ieee754 = require("ieee754");
            exports.Buffer = Buffer;
            exports.SlowBuffer = SlowBuffer;
            exports.INSPECT_MAX_BYTES = 50;
            var K_MAX_LENGTH = 2147483647;
            exports.kMaxLength = K_MAX_LENGTH;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }

            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1);
                    arr.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function foo() {
                            return 42;
                        }
                    };
                    return arr.foo() === 42;
                } catch (e) {
                    return false;
                }
            }

            function createBuffer(length) {
                if (length > K_MAX_LENGTH) {
                    throw new RangeError("Invalid typed array length");
                }
                var buf = new Uint8Array(length);
                buf.__proto__ = Buffer.prototype;
                return buf;
            }

            function Buffer(arg, encodingOrOffset, length) {
                if (typeof arg === "number") {
                    if (typeof encodingOrOffset === "string") {
                        throw new Error("If encoding is specified then the first argument must be a string");
                    }
                    return allocUnsafe(arg);
                }
                return from(arg, encodingOrOffset, length);
            }
            if (typeof Symbol !== "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
                Object.defineProperty(Buffer, Symbol.species, {
                    value: null,
                    configurable: true,
                    enumerable: false,
                    writable: false
                });
            }
            Buffer.poolSize = 8192;

            function from(value, encodingOrOffset, length) {
                if (typeof value === "number") {
                    throw new TypeError('"value" argument must not be a number');
                }
                if (isArrayBuffer(value)) {
                    return fromArrayBuffer(value, encodingOrOffset, length);
                }
                if (typeof value === "string") {
                    return fromString(value, encodingOrOffset);
                }
                return fromObject(value);
            }
            Buffer.from = function (value, encodingOrOffset, length) {
                return from(value, encodingOrOffset, length);
            };
            Buffer.prototype.__proto__ = Uint8Array.prototype;
            Buffer.__proto__ = Uint8Array;

            function assertSize(size) {
                if (typeof size !== "number") {
                    throw new TypeError('"size" argument must be a number');
                } else if (size < 0) {
                    throw new RangeError('"size" argument must not be negative');
                }
            }

            function alloc(size, fill, encoding) {
                assertSize(size);
                if (size <= 0) {
                    return createBuffer(size);
                }
                if (fill !== undefined) {
                    return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
                }
                return createBuffer(size);
            }
            Buffer.alloc = function (size, fill, encoding) {
                return alloc(size, fill, encoding);
            };

            function allocUnsafe(size) {
                assertSize(size);
                return createBuffer(size < 0 ? 0 : checked(size) | 0);
            }
            Buffer.allocUnsafe = function (size) {
                return allocUnsafe(size);
            };
            Buffer.allocUnsafeSlow = function (size) {
                return allocUnsafe(size);
            };

            function fromString(string, encoding) {
                if (typeof encoding !== "string" || encoding === "") {
                    encoding = "utf8";
                }
                if (!Buffer.isEncoding(encoding)) {
                    throw new TypeError('"encoding" must be a valid string encoding');
                }
                var length = byteLength(string, encoding) | 0;
                var buf = createBuffer(length);
                var actual = buf.write(string, encoding);
                if (actual !== length) {
                    buf = buf.slice(0, actual);
                }
                return buf;
            }

            function fromArrayLike(array) {
                var length = array.length < 0 ? 0 : checked(array.length) | 0;
                var buf = createBuffer(length);
                for (var i = 0; i < length; i += 1) {
                    buf[i] = array[i] & 255;
                }
                return buf;
            }

            function fromArrayBuffer(array, byteOffset, length) {
                if (byteOffset < 0 || array.byteLength < byteOffset) {
                    throw new RangeError("'offset' is out of bounds");
                }
                if (array.byteLength < byteOffset + (length || 0)) {
                    throw new RangeError("'length' is out of bounds");
                }
                var buf;
                if (byteOffset === undefined && length === undefined) {
                    buf = new Uint8Array(array);
                } else if (length === undefined) {
                    buf = new Uint8Array(array, byteOffset);
                } else {
                    buf = new Uint8Array(array, byteOffset, length);
                }
                buf.__proto__ = Buffer.prototype;
                return buf;
            }

            function fromObject(obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0;
                    var buf = createBuffer(len);
                    if (buf.length === 0) {
                        return buf;
                    }
                    obj.copy(buf, 0, 0, len);
                    return buf;
                }
                if (obj) {
                    if (isArrayBufferView(obj) || "length" in obj) {
                        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
                            return createBuffer(0);
                        }
                        return fromArrayLike(obj);
                    }
                    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
                        return fromArrayLike(obj.data);
                    }
                }
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
            }

            function checked(length) {
                if (length >= K_MAX_LENGTH) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
                }
                return length | 0;
            }

            function SlowBuffer(length) {
                if (+length != length) {
                    length = 0;
                }
                return Buffer.alloc(+length);
            }
            Buffer.isBuffer = function isBuffer(b) {
                return b != null && b._isBuffer === true;
            };
            Buffer.compare = function compare(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError("Arguments must be Buffers");
                }
                if (a === b) return 0;
                var x = a.length;
                var y = b.length;
                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                        x = a[i];
                        y = b[i];
                        break;
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(list, length) {
                if (!Array.isArray(list)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (list.length === 0) {
                    return Buffer.alloc(0);
                }
                var i;
                if (length === undefined) {
                    length = 0;
                    for (i = 0; i < list.length; ++i) {
                        length += list[i].length;
                    }
                }
                var buffer = Buffer.allocUnsafe(length);
                var pos = 0;
                for (i = 0; i < list.length; ++i) {
                    var buf = list[i];
                    if (!Buffer.isBuffer(buf)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    buf.copy(buffer, pos);
                    pos += buf.length;
                }
                return buffer;
            };

            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) {
                    return string.length;
                }
                if (isArrayBufferView(string) || isArrayBuffer(string)) {
                    return string.byteLength;
                }
                if (typeof string !== "string") {
                    string = "" + string;
                }
                var len = string.length;
                if (len === 0) return 0;
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return len;
                        case "utf8":
                        case "utf-8":
                        case undefined:
                            return utf8ToBytes(string).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return len * 2;
                        case "hex":
                            return len >>> 1;
                        case "base64":
                            return base64ToBytes(string).length;
                        default:
                            if (loweredCase) return utf8ToBytes(string).length;
                            encoding = ("" + encoding).toLowerCase();
                            loweredCase = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;

            function slowToString(encoding, start, end) {
                var loweredCase = false;
                if (start === undefined || start < 0) {
                    start = 0;
                }
                if (start > this.length) {
                    return "";
                }
                if (end === undefined || end > this.length) {
                    end = this.length;
                }
                if (end <= 0) {
                    return "";
                }
                end >>>= 0;
                start >>>= 0;
                if (end <= start) {
                    return "";
                }
                if (!encoding) encoding = "utf8";
                while (true) {
                    switch (encoding) {
                        case "hex":
                            return hexSlice(this, start, end);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, start, end);
                        case "ascii":
                            return asciiSlice(this, start, end);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, start, end);
                        case "base64":
                            return base64Slice(this, start, end);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, start, end);
                        default:
                            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                            encoding = (encoding + "").toLowerCase();
                            loweredCase = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;

            function swap(b, n, m) {
                var i = b[n];
                b[n] = b[m];
                b[m] = i;
            }
            Buffer.prototype.swap16 = function swap16() {
                var len = this.length;
                if (len % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for (var i = 0; i < len; i += 2) {
                    swap(this, i, i + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var len = this.length;
                if (len % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3);
                    swap(this, i + 1, i + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var len = this.length;
                if (len % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7);
                    swap(this, i + 1, i + 6);
                    swap(this, i + 2, i + 5);
                    swap(this, i + 3, i + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var length = this.length;
                if (length === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, length);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
                if (this === b) return true;
                return Buffer.compare(this, b) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var str = "";
                var max = exports.INSPECT_MAX_BYTES;
                if (this.length > 0) {
                    str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
                    if (this.length > max) str += " ... ";
                }
                return "<Buffer " + str + ">";
            };
            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (!Buffer.isBuffer(target)) {
                    throw new TypeError("Argument must be a Buffer");
                }
                if (start === undefined) {
                    start = 0;
                }
                if (end === undefined) {
                    end = target ? target.length : 0;
                }
                if (thisStart === undefined) {
                    thisStart = 0;
                }
                if (thisEnd === undefined) {
                    thisEnd = this.length;
                }
                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    throw new RangeError("out of range index");
                }
                if (thisStart >= thisEnd && start >= end) {
                    return 0;
                }
                if (thisStart >= thisEnd) {
                    return -1;
                }
                if (start >= end) {
                    return 1;
                }
                start >>>= 0;
                end >>>= 0;
                thisStart >>>= 0;
                thisEnd >>>= 0;
                if (this === target) return 0;
                var x = thisEnd - thisStart;
                var y = end - start;
                var len = Math.min(x, y);
                var thisCopy = this.slice(thisStart, thisEnd);
                var targetCopy = target.slice(start, end);
                for (var i = 0; i < len; ++i) {
                    if (thisCopy[i] !== targetCopy[i]) {
                        x = thisCopy[i];
                        y = targetCopy[i];
                        break;
                    }
                }
                if (x < y) return -1;
                if (y < x) return 1;
                return 0;
            };

            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                if (buffer.length === 0) return -1;
                if (typeof byteOffset === "string") {
                    encoding = byteOffset;
                    byteOffset = 0;
                } else if (byteOffset > 2147483647) {
                    byteOffset = 2147483647;
                } else if (byteOffset < -2147483648) {
                    byteOffset = -2147483648;
                }
                byteOffset = +byteOffset;
                if (numberIsNaN(byteOffset)) {
                    byteOffset = dir ? 0 : buffer.length - 1;
                }
                if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
                if (byteOffset >= buffer.length) {
                    if (dir) return -1;else byteOffset = buffer.length - 1;
                } else if (byteOffset < 0) {
                    if (dir) byteOffset = 0;else return -1;
                }
                if (typeof val === "string") {
                    val = Buffer.from(val, encoding);
                }
                if (Buffer.isBuffer(val)) {
                    if (val.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
                } else if (typeof val === "number") {
                    val = val & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (dir) {
                            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
                        }
                    }
                    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
                }
                throw new TypeError("val must be string, number or Buffer");
            }

            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1;
                var arrLength = arr.length;
                var valLength = val.length;
                if (encoding !== undefined) {
                    encoding = String(encoding).toLowerCase();
                    if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
                        if (arr.length < 2 || val.length < 2) {
                            return -1;
                        }
                        indexSize = 2;
                        arrLength /= 2;
                        valLength /= 2;
                        byteOffset /= 2;
                    }
                }

                function read(buf, i) {
                    if (indexSize === 1) {
                        return buf[i];
                    } else {
                        return buf.readUInt16BE(i * indexSize);
                    }
                }
                var i;
                if (dir) {
                    var foundIndex = -1;
                    for (i = byteOffset; i < arrLength; i++) {
                        if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
                            if (foundIndex === -1) foundIndex = i;
                            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
                        } else {
                            if (foundIndex !== -1) i -= i - foundIndex;
                            foundIndex = -1;
                        }
                    }
                } else {
                    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
                    for (i = byteOffset; i >= 0; i--) {
                        var found = true;
                        for (var j = 0; j < valLength; j++) {
                            if (read(arr, i + j) !== read(val, j)) {
                                found = false;
                                break;
                            }
                        }
                        if (found) return i;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
            };

            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                    length = remaining;
                } else {
                    length = Number(length);
                    if (length > remaining) {
                        length = remaining;
                    }
                }
                var strLen = string.length;
                if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
                if (length > strLen / 2) {
                    length = strLen / 2;
                }
                for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16);
                    if (numberIsNaN(parsed)) return i;
                    buf[offset + i] = parsed;
                }
                return i;
            }

            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
            }

            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length);
            }

            function latin1Write(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length);
            }

            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length);
            }

            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
            }
            Buffer.prototype.write = function write(string, offset, length, encoding) {
                if (offset === undefined) {
                    encoding = "utf8";
                    length = this.length;
                    offset = 0;
                } else if (length === undefined && typeof offset === "string") {
                    encoding = offset;
                    length = this.length;
                    offset = 0;
                } else if (isFinite(offset)) {
                    offset = offset >>> 0;
                    if (isFinite(length)) {
                        length = length >>> 0;
                        if (encoding === undefined) encoding = "utf8";
                    } else {
                        encoding = length;
                        length = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var remaining = this.length - offset;
                if (length === undefined || length > remaining) length = remaining;
                if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!encoding) encoding = "utf8";
                var loweredCase = false;
                for (;;) {
                    switch (encoding) {
                        case "hex":
                            return hexWrite(this, string, offset, length);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, string, offset, length);
                        case "ascii":
                            return asciiWrite(this, string, offset, length);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, string, offset, length);
                        case "base64":
                            return base64Write(this, string, offset, length);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, string, offset, length);
                        default:
                            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
                            encoding = ("" + encoding).toLowerCase();
                            loweredCase = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };

            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                } else {
                    return base64.fromByteArray(buf.slice(start, end));
                }
            }

            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end);
                var res = [];
                var i = start;
                while (i < end) {
                    var firstByte = buf[i];
                    var codePoint = null;
                    var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
                    if (i + bytesPerSequence <= end) {
                        var secondByte, thirdByte, fourthByte, tempCodePoint;
                        switch (bytesPerSequence) {
                            case 1:
                                if (firstByte < 128) {
                                    codePoint = firstByte;
                                }
                                break;
                            case 2:
                                secondByte = buf[i + 1];
                                if ((secondByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                                    if (tempCodePoint > 127) {
                                        codePoint = tempCodePoint;
                                    }
                                }
                                break;
                            case 3:
                                secondByte = buf[i + 1];
                                thirdByte = buf[i + 2];
                                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                                    if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                                        codePoint = tempCodePoint;
                                    }
                                }
                                break;
                            case 4:
                                secondByte = buf[i + 1];
                                thirdByte = buf[i + 2];
                                fourthByte = buf[i + 3];
                                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                                    tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                                    if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                                        codePoint = tempCodePoint;
                                    }
                                }
                        }
                    }
                    if (codePoint === null) {
                        codePoint = 65533;
                        bytesPerSequence = 1;
                    } else if (codePoint > 65535) {
                        codePoint -= 65536;
                        res.push(codePoint >>> 10 & 1023 | 55296);
                        codePoint = 56320 | codePoint & 1023;
                    }
                    res.push(codePoint);
                    i += bytesPerSequence;
                }
                return decodeCodePointsArray(res);
            }
            var MAX_ARGUMENTS_LENGTH = 4096;

            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length;
                if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints);
                }
                var res = "";
                var i = 0;
                while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
                }
                return res;
            }

            function asciiSlice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i] & 127);
                }
                return ret;
            }

            function latin1Slice(buf, start, end) {
                var ret = "";
                end = Math.min(buf.length, end);
                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i]);
                }
                return ret;
            }

            function hexSlice(buf, start, end) {
                var len = buf.length;
                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;
                var out = "";
                for (var i = start; i < end; ++i) {
                    out += toHex(buf[i]);
                }
                return out;
            }

            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = "";
                for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
            }
            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length;
                start = ~~start;
                end = end === undefined ? len : ~~end;
                if (start < 0) {
                    start += len;
                    if (start < 0) start = 0;
                } else if (start > len) {
                    start = len;
                }
                if (end < 0) {
                    end += len;
                    if (end < 0) end = 0;
                } else if (end > len) {
                    end = len;
                }
                if (end < start) end = start;
                var newBuf = this.subarray(start, end);
                newBuf.__proto__ = Buffer.prototype;
                return newBuf;
            };

            function checkOffset(offset, ext, length) {
                if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
                if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                return val;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) {
                    checkOffset(offset, byteLength, this.length);
                }
                var val = this[offset + --byteLength];
                var mul = 1;
                while (byteLength > 0 && (mul *= 256)) {
                    val += this[offset + --byteLength] * mul;
                }
                return val;
            };
            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                return this[offset];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] | this[offset + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                return this[offset] << 8 | this[offset + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var val = this[offset];
                var mul = 1;
                var i = 0;
                while (++i < byteLength && (mul *= 256)) {
                    val += this[offset + i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) checkOffset(offset, byteLength, this.length);
                var i = byteLength;
                var mul = 1;
                var val = this[offset + --i];
                while (i > 0 && (mul *= 256)) {
                    val += this[offset + --i] * mul;
                }
                mul *= 128;
                if (val >= mul) val -= Math.pow(2, 8 * byteLength);
                return val;
            };
            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 1, this.length);
                if (!(this[offset] & 128)) return this[offset];
                return (255 - this[offset] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset] | this[offset + 1] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 2, this.length);
                var val = this[offset + 1] | this[offset] << 8;
                return val & 32768 ? val | 4294901760 : val;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 4, this.length);
                return ieee754.read(this, offset, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                offset = offset >>> 0;
                if (!noAssert) checkOffset(offset, 8, this.length);
                return ieee754.read(this, offset, false, 52, 8);
            };

            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var mul = 1;
                var i = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                byteLength = byteLength >>> 0;
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
                    checkInt(this, value, offset, byteLength, maxBytes, 0);
                }
                var i = byteLength - 1;
                var mul = 1;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    this[offset + i] = value / mul & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset + 3] = value >>> 24;
                this[offset + 2] = value >>> 16;
                this[offset + 1] = value >>> 8;
                this[offset] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = 0;
                var mul = 1;
                var sub = 0;
                this[offset] = value & 255;
                while (++i < byteLength && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                        sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1);
                    checkInt(this, value, offset, byteLength, limit - 1, -limit);
                }
                var i = byteLength - 1;
                var mul = 1;
                var sub = 0;
                this[offset + i] = value & 255;
                while (--i >= 0 && (mul *= 256)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                        sub = 1;
                    }
                    this[offset + i] = (value / mul >> 0) - sub & 255;
                }
                return offset + byteLength;
            };
            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
                if (value < 0) value = 255 + value + 1;
                this[offset] = value & 255;
                return offset + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                return offset + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
                this[offset] = value >>> 8;
                this[offset + 1] = value & 255;
                return offset + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                this[offset] = value & 255;
                this[offset + 1] = value >>> 8;
                this[offset + 2] = value >>> 16;
                this[offset + 3] = value >>> 24;
                return offset + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
                if (value < 0) value = 4294967295 + value + 1;
                this[offset] = value >>> 24;
                this[offset + 1] = value >>> 16;
                this[offset + 2] = value >>> 8;
                this[offset + 3] = value & 255;
                return offset + 4;
            };

            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length) throw new RangeError("Index out of range");
                if (offset < 0) throw new RangeError("Index out of range");
            }

            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e38, -3.4028234663852886e38);
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4);
                return offset + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert);
            };

            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                value = +value;
                offset = offset >>> 0;
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8, 1.7976931348623157e308, -1.7976931348623157e308);
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8);
                return offset + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert);
            };
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (targetStart >= target.length) targetStart = target.length;
                if (!targetStart) targetStart = 0;
                if (end > 0 && end < start) end = start;
                if (end === start) return 0;
                if (target.length === 0 || this.length === 0) return 0;
                if (targetStart < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
                if (end < 0) throw new RangeError("sourceEnd out of bounds");
                if (end > this.length) end = this.length;
                if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start;
                }
                var len = end - start;
                var i;
                if (this === target && start < targetStart && targetStart < end) {
                    for (i = len - 1; i >= 0; --i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else if (len < 1e3) {
                    for (i = 0; i < len; ++i) {
                        target[i + targetStart] = this[i + start];
                    }
                } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
                }
                return len;
            };
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                if (typeof val === "string") {
                    if (typeof start === "string") {
                        encoding = start;
                        start = 0;
                        end = this.length;
                    } else if (typeof end === "string") {
                        encoding = end;
                        end = this.length;
                    }
                    if (val.length === 1) {
                        var code = val.charCodeAt(0);
                        if (code < 256) {
                            val = code;
                        }
                    }
                    if (encoding !== undefined && typeof encoding !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
                        throw new TypeError("Unknown encoding: " + encoding);
                    }
                } else if (typeof val === "number") {
                    val = val & 255;
                }
                if (start < 0 || this.length < start || this.length < end) {
                    throw new RangeError("Out of range index");
                }
                if (end <= start) {
                    return this;
                }
                start = start >>> 0;
                end = end === undefined ? this.length : end >>> 0;
                if (!val) val = 0;
                var i;
                if (typeof val === "number") {
                    for (i = start; i < end; ++i) {
                        this[i] = val;
                    }
                } else {
                    var bytes = Buffer.isBuffer(val) ? val : new Buffer(val, encoding);
                    var len = bytes.length;
                    for (i = 0; i < end - start; ++i) {
                        this[i + start] = bytes[i % len];
                    }
                }
                return this;
            };
            var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

            function base64clean(str) {
                str = str.trim().replace(INVALID_BASE64_RE, "");
                if (str.length < 2) return "";
                while (str.length % 4 !== 0) {
                    str = str + "=";
                }
                return str;
            }

            function toHex(n) {
                if (n < 16) return "0" + n.toString(16);
                return n.toString(16);
            }

            function utf8ToBytes(string, units) {
                units = units || Infinity;
                var codePoint;
                var length = string.length;
                var leadSurrogate = null;
                var bytes = [];
                for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i);
                    if (codePoint > 55295 && codePoint < 57344) {
                        if (!leadSurrogate) {
                            if (codePoint > 56319) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            } else if (i + 1 === length) {
                                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                                continue;
                            }
                            leadSurrogate = codePoint;
                            continue;
                        }
                        if (codePoint < 56320) {
                            if ((units -= 3) > -1) bytes.push(239, 191, 189);
                            leadSurrogate = codePoint;
                            continue;
                        }
                        codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
                    } else if (leadSurrogate) {
                        if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    }
                    leadSurrogate = null;
                    if (codePoint < 128) {
                        if ((units -= 1) < 0) break;
                        bytes.push(codePoint);
                    } else if (codePoint < 2048) {
                        if ((units -= 2) < 0) break;
                        bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
                    } else if (codePoint < 65536) {
                        if ((units -= 3) < 0) break;
                        bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else if (codePoint < 1114112) {
                        if ((units -= 4) < 0) break;
                        bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return bytes;
            }

            function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    byteArray.push(str.charCodeAt(i) & 255);
                }
                return byteArray;
            }

            function utf16leToBytes(str, units) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0) break;
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }
                return byteArray;
            }

            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str));
            }

            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }

            function isArrayBuffer(obj) {
                return obj instanceof ArrayBuffer || obj != null && obj.constructor != null && obj.constructor.name === "ArrayBuffer" && typeof obj.byteLength === "number";
            }

            function isArrayBufferView(obj) {
                return typeof ArrayBuffer.isView === "function" && ArrayBuffer.isView(obj);
            }

            function numberIsNaN(obj) {
                return obj !== obj;
            }
        }, {
            "base64-js": 6,
            ieee754: 12
        }],
        10: [function (require, module, exports) {
            (function (Buffer) {
                function isArray(arg) {
                    if (Array.isArray) {
                        return Array.isArray(arg);
                    }
                    return objectToString(arg) === "[object Array]";
                }
                exports.isArray = isArray;

                function isBoolean(arg) {
                    return typeof arg === "boolean";
                }
                exports.isBoolean = isBoolean;

                function isNull(arg) {
                    return arg === null;
                }
                exports.isNull = isNull;

                function isNullOrUndefined(arg) {
                    return arg == null;
                }
                exports.isNullOrUndefined = isNullOrUndefined;

                function isNumber(arg) {
                    return typeof arg === "number";
                }
                exports.isNumber = isNumber;

                function isString(arg) {
                    return typeof arg === "string";
                }
                exports.isString = isString;

                function isSymbol(arg) {
                    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "symbol";
                }
                exports.isSymbol = isSymbol;

                function isUndefined(arg) {
                    return arg === void 0;
                }
                exports.isUndefined = isUndefined;

                function isRegExp(re) {
                    return objectToString(re) === "[object RegExp]";
                }
                exports.isRegExp = isRegExp;

                function isObject(arg) {
                    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && arg !== null;
                }
                exports.isObject = isObject;

                function isDate(d) {
                    return objectToString(d) === "[object Date]";
                }
                exports.isDate = isDate;

                function isError(e) {
                    return objectToString(e) === "[object Error]" || e instanceof Error;
                }
                exports.isError = isError;

                function isFunction(arg) {
                    return typeof arg === "function";
                }
                exports.isFunction = isFunction;

                function isPrimitive(arg) {
                    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "symbol" || typeof arg === "undefined";
                }
                exports.isPrimitive = isPrimitive;
                exports.isBuffer = Buffer.isBuffer;

                function objectToString(o) {
                    return Object.prototype.toString.call(o);
                }
            }).call(this, {
                isBuffer: require("../../is-buffer/index.js")
            });
        }, {
            "../../is-buffer/index.js": 14
        }],
        11: [function (require, module, exports) {
            function EventEmitter() {
                this._events = this._events || {};
                this._maxListeners = this._maxListeners || undefined;
            }
            module.exports = EventEmitter;
            EventEmitter.EventEmitter = EventEmitter;
            EventEmitter.prototype._events = undefined;
            EventEmitter.prototype._maxListeners = undefined;
            EventEmitter.defaultMaxListeners = 10;
            EventEmitter.prototype.setMaxListeners = function (n) {
                if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
                this._maxListeners = n;
                return this;
            };
            EventEmitter.prototype.emit = function (type) {
                var er, handler, len, args, i, listeners;
                if (!this._events) this._events = {};
                if (type === "error") {
                    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
                        er = arguments[1];
                        if (er instanceof Error) {
                            throw er;
                        } else {
                            var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
                            err.context = er;
                            throw err;
                        }
                    }
                }
                handler = this._events[type];
                if (isUndefined(handler)) return false;
                if (isFunction(handler)) {
                    switch (arguments.length) {
                        case 1:
                            handler.call(this);
                            break;
                        case 2:
                            handler.call(this, arguments[1]);
                            break;
                        case 3:
                            handler.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            args = Array.prototype.slice.call(arguments, 1);
                            handler.apply(this, args);
                    }
                } else if (isObject(handler)) {
                    args = Array.prototype.slice.call(arguments, 1);
                    listeners = handler.slice();
                    len = listeners.length;
                    for (i = 0; i < len; i++) {
                        listeners[i].apply(this, args);
                    }
                }
                return true;
            };
            EventEmitter.prototype.addListener = function (type, listener) {
                var m;
                if (!isFunction(listener)) throw TypeError("listener must be a function");
                if (!this._events) this._events = {};
                if (this._events.newListener) this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);
                if (!this._events[type]) this._events[type] = listener;else if (isObject(this._events[type])) this._events[type].push(listener);else this._events[type] = [this._events[type], listener];
                if (isObject(this._events[type]) && !this._events[type].warned) {
                    if (!isUndefined(this._maxListeners)) {
                        m = this._maxListeners;
                    } else {
                        m = EventEmitter.defaultMaxListeners;
                    }
                    if (m && m > 0 && this._events[type].length > m) {
                        this._events[type].warned = true;
                        console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
                        if (typeof console.trace === "function") {
                            console.trace();
                        }
                    }
                }
                return this;
            };
            EventEmitter.prototype.on = EventEmitter.prototype.addListener;
            EventEmitter.prototype.once = function (type, listener) {
                if (!isFunction(listener)) throw TypeError("listener must be a function");
                var fired = false;

                function g() {
                    this.removeListener(type, g);
                    if (!fired) {
                        fired = true;
                        listener.apply(this, arguments);
                    }
                }
                g.listener = listener;
                this.on(type, g);
                return this;
            };
            EventEmitter.prototype.removeListener = function (type, listener) {
                var list, position, length, i;
                if (!isFunction(listener)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[type]) return this;
                list = this._events[type];
                length = list.length;
                position = -1;
                if (list === listener || isFunction(list.listener) && list.listener === listener) {
                    delete this._events[type];
                    if (this._events.removeListener) this.emit("removeListener", type, listener);
                } else if (isObject(list)) {
                    for (i = length; i-- > 0;) {
                        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                            position = i;
                            break;
                        }
                    }
                    if (position < 0) return this;
                    if (list.length === 1) {
                        list.length = 0;
                        delete this._events[type];
                    } else {
                        list.splice(position, 1);
                    }
                    if (this._events.removeListener) this.emit("removeListener", type, listener);
                }
                return this;
            };
            EventEmitter.prototype.removeAllListeners = function (type) {
                var key, listeners;
                if (!this._events) return this;
                if (!this._events.removeListener) {
                    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
                    return this;
                }
                if (arguments.length === 0) {
                    for (key in this._events) {
                        if (key === "removeListener") continue;
                        this.removeAllListeners(key);
                    }
                    this.removeAllListeners("removeListener");
                    this._events = {};
                    return this;
                }
                listeners = this._events[type];
                if (isFunction(listeners)) {
                    this.removeListener(type, listeners);
                } else if (listeners) {
                    while (listeners.length) {
                        this.removeListener(type, listeners[listeners.length - 1]);
                    }
                }
                delete this._events[type];
                return this;
            };
            EventEmitter.prototype.listeners = function (type) {
                var ret;
                if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
                return ret;
            };
            EventEmitter.prototype.listenerCount = function (type) {
                if (this._events) {
                    var evlistener = this._events[type];
                    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
                }
                return 0;
            };
            EventEmitter.listenerCount = function (emitter, type) {
                return emitter.listenerCount(type);
            };

            function isFunction(arg) {
                return typeof arg === "function";
            }

            function isNumber(arg) {
                return typeof arg === "number";
            }

            function isObject(arg) {
                return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && arg !== null;
            }

            function isUndefined(arg) {
                return arg === void 0;
            }
        }, {}],
        12: [function (require, module, exports) {
            exports.read = function (buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & (1 << -nBits) - 1;
                s >>= -nBits;
                nBits += eLen;
                for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
                if (e === 0) {
                    e = 1 - eBias;
                } else if (e === eMax) {
                    return m ? NaN : (s ? -1 : 1) * Infinity;
                } else {
                    m = m + Math.pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };
            exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                } else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    } else {
                        value += rt * Math.pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * Math.pow(2, mLen);
                        e = e + eBias;
                    } else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }
                for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {}
                e = e << mLen | m;
                eLen += mLen;
                for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {}
                buffer[offset + i - d] |= s * 128;
            };
        }, {}],
        13: [function (require, module, exports) {
            if (typeof Object.create === "function") {
                module.exports = function inherits(ctor, superCtor) {
                    ctor.super_ = superCtor;
                    ctor.prototype = Object.create(superCtor.prototype, {
                        constructor: {
                            value: ctor,
                            enumerable: false,
                            writable: true,
                            configurable: true
                        }
                    });
                };
            } else {
                module.exports = function inherits(ctor, superCtor) {
                    ctor.super_ = superCtor;
                    var TempCtor = function TempCtor() {};
                    TempCtor.prototype = superCtor.prototype;
                    ctor.prototype = new TempCtor();
                    ctor.prototype.constructor = ctor;
                };
            }
        }, {}],
        14: [function (require, module, exports) {
            module.exports = function (obj) {
                return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
            };

            function isBuffer(obj) {
                return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
            }

            function isSlowBuffer(obj) {
                return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
            }
        }, {}],
        15: [function (require, module, exports) {
            var toString = {}.toString;
            module.exports = Array.isArray || function (arr) {
                return toString.call(arr) == "[object Array]";
            };
        }, {}],
        16: [function (require, module, exports) {
            (function (process) {
                "use strict";

                if (!process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
                    module.exports = nextTick;
                } else {
                    module.exports = process.nextTick;
                }

                function nextTick(fn, arg1, arg2, arg3) {
                    if (typeof fn !== "function") {
                        throw new TypeError('"callback" argument must be a function');
                    }
                    var len = arguments.length;
                    var args, i;
                    switch (len) {
                        case 0:
                        case 1:
                            return process.nextTick(fn);
                        case 2:
                            return process.nextTick(function afterTickOne() {
                                fn.call(null, arg1);
                            });
                        case 3:
                            return process.nextTick(function afterTickTwo() {
                                fn.call(null, arg1, arg2);
                            });
                        case 4:
                            return process.nextTick(function afterTickThree() {
                                fn.call(null, arg1, arg2, arg3);
                            });
                        default:
                            args = new Array(len - 1);
                            i = 0;
                            while (i < args.length) {
                                args[i++] = arguments[i];
                            }
                            return process.nextTick(function afterTick() {
                                fn.apply(null, args);
                            });
                    }
                }
            }).call(this, require("_process"));
        }, {
            _process: 17
        }],
        17: [function (require, module, exports) {
            var process = module.exports = {};
            var cachedSetTimeout;
            var cachedClearTimeout;

            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }

            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }(function () {
                try {
                    if (typeof setTimeout === "function") {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();

            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    return setTimeout(fun, 0);
                }
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }

            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    return clearTimeout(marker);
                }
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;

            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }

            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };

            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            process.title = "browser";
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = "";
            process.versions = {};

            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function (name) {
                return [];
            };
            process.binding = function (name) {
                throw new Error("process.binding is not supported");
            };
            process.cwd = function () {
                return "/";
            };
            process.chdir = function (dir) {
                throw new Error("process.chdir is not supported");
            };
            process.umask = function () {
                return 0;
            };
        }, {}],
        18: [function (require, module, exports) {
            module.exports = require("./lib/_stream_duplex.js");
        }, {
            "./lib/_stream_duplex.js": 19
        }],
        19: [function (require, module, exports) {
            "use strict";

            var processNextTick = require("process-nextick-args");
            var objectKeys = Object.keys || function (obj) {
                var keys = [];
                for (var key in obj) {
                    keys.push(key);
                }
                return keys;
            };
            module.exports = Duplex;
            var util = require("core-util-is");
            util.inherits = require("inherits");
            var Readable = require("./_stream_readable");
            var Writable = require("./_stream_writable");
            util.inherits(Duplex, Readable);
            var keys = objectKeys(Writable.prototype);
            for (var v = 0; v < keys.length; v++) {
                var method = keys[v];
                if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
            }

            function Duplex(options) {
                if (!(this instanceof Duplex)) return new Duplex(options);
                Readable.call(this, options);
                Writable.call(this, options);
                if (options && options.readable === false) this.readable = false;
                if (options && options.writable === false) this.writable = false;
                this.allowHalfOpen = true;
                if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
                this.once("end", onend);
            }

            function onend() {
                if (this.allowHalfOpen || this._writableState.ended) return;
                processNextTick(onEndNT, this);
            }

            function onEndNT(self) {
                self.end();
            }
            Object.defineProperty(Duplex.prototype, "destroyed", {
                get: function get() {
                    if (this._readableState === undefined || this._writableState === undefined) {
                        return false;
                    }
                    return this._readableState.destroyed && this._writableState.destroyed;
                },
                set: function set(value) {
                    if (this._readableState === undefined || this._writableState === undefined) {
                        return;
                    }
                    this._readableState.destroyed = value;
                    this._writableState.destroyed = value;
                }
            });
            Duplex.prototype._destroy = function (err, cb) {
                this.push(null);
                this.end();
                processNextTick(cb, err);
            };

            function forEach(xs, f) {
                for (var i = 0, l = xs.length; i < l; i++) {
                    f(xs[i], i);
                }
            }
        }, {
            "./_stream_readable": 21,
            "./_stream_writable": 23,
            "core-util-is": 10,
            inherits: 13,
            "process-nextick-args": 16
        }],
        20: [function (require, module, exports) {
            "use strict";

            module.exports = PassThrough;
            var Transform = require("./_stream_transform");
            var util = require("core-util-is");
            util.inherits = require("inherits");
            util.inherits(PassThrough, Transform);

            function PassThrough(options) {
                if (!(this instanceof PassThrough)) return new PassThrough(options);
                Transform.call(this, options);
            }
            PassThrough.prototype._transform = function (chunk, encoding, cb) {
                cb(null, chunk);
            };
        }, {
            "./_stream_transform": 22,
            "core-util-is": 10,
            inherits: 13
        }],
        21: [function (require, module, exports) {
            (function (process, global) {
                "use strict";

                var processNextTick = require("process-nextick-args");
                module.exports = Readable;
                var isArray = require("isarray");
                var Duplex;
                Readable.ReadableState = ReadableState;
                var EE = require("events").EventEmitter;
                var EElistenerCount = function EElistenerCount(emitter, type) {
                    return emitter.listeners(type).length;
                };
                var Stream = require("./internal/streams/stream");
                var Buffer = require("safe-buffer").Buffer;
                var OurUint8Array = global.Uint8Array || function () {};

                function _uint8ArrayToBuffer(chunk) {
                    return Buffer.from(chunk);
                }

                function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var util = require("core-util-is");
                util.inherits = require("inherits");
                var debugUtil = require("util");
                var debug = void 0;
                if (debugUtil && debugUtil.debuglog) {
                    debug = debugUtil.debuglog("stream");
                } else {
                    debug = function debug() {};
                }
                var BufferList = require("./internal/streams/BufferList");
                var destroyImpl = require("./internal/streams/destroy");
                var StringDecoder;
                util.inherits(Readable, Stream);
                var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];

                function prependListener(emitter, event, fn) {
                    if (typeof emitter.prependListener === "function") {
                        return emitter.prependListener(event, fn);
                    } else {
                        if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
                    }
                }

                function ReadableState(options, stream) {
                    Duplex = Duplex || require("./_stream_duplex");
                    options = options || {};
                    this.objectMode = !!options.objectMode;
                    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
                    var hwm = options.highWaterMark;
                    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
                    this.highWaterMark = Math.floor(this.highWaterMark);
                    this.buffer = new BufferList();
                    this.length = 0;
                    this.pipes = null;
                    this.pipesCount = 0;
                    this.flowing = null;
                    this.ended = false;
                    this.endEmitted = false;
                    this.reading = false;
                    this.sync = true;
                    this.needReadable = false;
                    this.emittedReadable = false;
                    this.readableListening = false;
                    this.resumeScheduled = false;
                    this.destroyed = false;
                    this.defaultEncoding = options.defaultEncoding || "utf8";
                    this.awaitDrain = 0;
                    this.readingMore = false;
                    this.decoder = null;
                    this.encoding = null;
                    if (options.encoding) {
                        if (!StringDecoder) StringDecoder = require("string_decoder/").StringDecoder;
                        this.decoder = new StringDecoder(options.encoding);
                        this.encoding = options.encoding;
                    }
                }

                function Readable(options) {
                    Duplex = Duplex || require("./_stream_duplex");
                    if (!(this instanceof Readable)) return new Readable(options);
                    this._readableState = new ReadableState(options, this);
                    this.readable = true;
                    if (options) {
                        if (typeof options.read === "function") this._read = options.read;
                        if (typeof options.destroy === "function") this._destroy = options.destroy;
                    }
                    Stream.call(this);
                }
                Object.defineProperty(Readable.prototype, "destroyed", {
                    get: function get() {
                        if (this._readableState === undefined) {
                            return false;
                        }
                        return this._readableState.destroyed;
                    },
                    set: function set(value) {
                        if (!this._readableState) {
                            return;
                        }
                        this._readableState.destroyed = value;
                    }
                });
                Readable.prototype.destroy = destroyImpl.destroy;
                Readable.prototype._undestroy = destroyImpl.undestroy;
                Readable.prototype._destroy = function (err, cb) {
                    this.push(null);
                    cb(err);
                };
                Readable.prototype.push = function (chunk, encoding) {
                    var state = this._readableState;
                    var skipChunkCheck;
                    if (!state.objectMode) {
                        if (typeof chunk === "string") {
                            encoding = encoding || state.defaultEncoding;
                            if (encoding !== state.encoding) {
                                chunk = Buffer.from(chunk, encoding);
                                encoding = "";
                            }
                            skipChunkCheck = true;
                        }
                    } else {
                        skipChunkCheck = true;
                    }
                    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
                };
                Readable.prototype.unshift = function (chunk) {
                    return readableAddChunk(this, chunk, null, true, false);
                };

                function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
                    var state = stream._readableState;
                    if (chunk === null) {
                        state.reading = false;
                        onEofChunk(stream, state);
                    } else {
                        var er;
                        if (!skipChunkCheck) er = chunkInvalid(state, chunk);
                        if (er) {
                            stream.emit("error", er);
                        } else if (state.objectMode || chunk && chunk.length > 0) {
                            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
                                chunk = _uint8ArrayToBuffer(chunk);
                            }
                            if (addToFront) {
                                if (state.endEmitted) stream.emit("error", new Error("stream.unshift() after end event"));else addChunk(stream, state, chunk, true);
                            } else if (state.ended) {
                                stream.emit("error", new Error("stream.push() after EOF"));
                            } else {
                                state.reading = false;
                                if (state.decoder && !encoding) {
                                    chunk = state.decoder.write(chunk);
                                    if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
                                } else {
                                    addChunk(stream, state, chunk, false);
                                }
                            }
                        } else if (!addToFront) {
                            state.reading = false;
                        }
                    }
                    return needMoreData(state);
                }

                function addChunk(stream, state, chunk, addToFront) {
                    if (state.flowing && state.length === 0 && !state.sync) {
                        stream.emit("data", chunk);
                        stream.read(0);
                    } else {
                        state.length += state.objectMode ? 1 : chunk.length;
                        if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
                        if (state.needReadable) emitReadable(stream);
                    }
                    maybeReadMore(stream, state);
                }

                function chunkInvalid(state, chunk) {
                    var er;
                    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
                        er = new TypeError("Invalid non-string/buffer chunk");
                    }
                    return er;
                }

                function needMoreData(state) {
                    return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
                }
                Readable.prototype.isPaused = function () {
                    return this._readableState.flowing === false;
                };
                Readable.prototype.setEncoding = function (enc) {
                    if (!StringDecoder) StringDecoder = require("string_decoder/").StringDecoder;
                    this._readableState.decoder = new StringDecoder(enc);
                    this._readableState.encoding = enc;
                    return this;
                };
                var MAX_HWM = 8388608;

                function computeNewHighWaterMark(n) {
                    if (n >= MAX_HWM) {
                        n = MAX_HWM;
                    } else {
                        n--;
                        n |= n >>> 1;
                        n |= n >>> 2;
                        n |= n >>> 4;
                        n |= n >>> 8;
                        n |= n >>> 16;
                        n++;
                    }
                    return n;
                }

                function howMuchToRead(n, state) {
                    if (n <= 0 || state.length === 0 && state.ended) return 0;
                    if (state.objectMode) return 1;
                    if (n !== n) {
                        if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
                    }
                    if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
                    if (n <= state.length) return n;
                    if (!state.ended) {
                        state.needReadable = true;
                        return 0;
                    }
                    return state.length;
                }
                Readable.prototype.read = function (n) {
                    debug("read", n);
                    n = parseInt(n, 10);
                    var state = this._readableState;
                    var nOrig = n;
                    if (n !== 0) state.emittedReadable = false;
                    if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
                        debug("read: emitReadable", state.length, state.ended);
                        if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
                        return null;
                    }
                    n = howMuchToRead(n, state);
                    if (n === 0 && state.ended) {
                        if (state.length === 0) endReadable(this);
                        return null;
                    }
                    var doRead = state.needReadable;
                    debug("need readable", doRead);
                    if (state.length === 0 || state.length - n < state.highWaterMark) {
                        doRead = true;
                        debug("length less than watermark", doRead);
                    }
                    if (state.ended || state.reading) {
                        doRead = false;
                        debug("reading or ended", doRead);
                    } else if (doRead) {
                        debug("do read");
                        state.reading = true;
                        state.sync = true;
                        if (state.length === 0) state.needReadable = true;
                        this._read(state.highWaterMark);
                        state.sync = false;
                        if (!state.reading) n = howMuchToRead(nOrig, state);
                    }
                    var ret;
                    if (n > 0) ret = fromList(n, state);else ret = null;
                    if (ret === null) {
                        state.needReadable = true;
                        n = 0;
                    } else {
                        state.length -= n;
                    }
                    if (state.length === 0) {
                        if (!state.ended) state.needReadable = true;
                        if (nOrig !== n && state.ended) endReadable(this);
                    }
                    if (ret !== null) this.emit("data", ret);
                    return ret;
                };

                function onEofChunk(stream, state) {
                    if (state.ended) return;
                    if (state.decoder) {
                        var chunk = state.decoder.end();
                        if (chunk && chunk.length) {
                            state.buffer.push(chunk);
                            state.length += state.objectMode ? 1 : chunk.length;
                        }
                    }
                    state.ended = true;
                    emitReadable(stream);
                }

                function emitReadable(stream) {
                    var state = stream._readableState;
                    state.needReadable = false;
                    if (!state.emittedReadable) {
                        debug("emitReadable", state.flowing);
                        state.emittedReadable = true;
                        if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
                    }
                }

                function emitReadable_(stream) {
                    debug("emit readable");
                    stream.emit("readable");
                    flow(stream);
                }

                function maybeReadMore(stream, state) {
                    if (!state.readingMore) {
                        state.readingMore = true;
                        processNextTick(maybeReadMore_, stream, state);
                    }
                }

                function maybeReadMore_(stream, state) {
                    var len = state.length;
                    while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
                        debug("maybeReadMore read 0");
                        stream.read(0);
                        if (len === state.length) break;else len = state.length;
                    }
                    state.readingMore = false;
                }
                Readable.prototype._read = function (n) {
                    this.emit("error", new Error("_read() is not implemented"));
                };
                Readable.prototype.pipe = function (dest, pipeOpts) {
                    var src = this;
                    var state = this._readableState;
                    switch (state.pipesCount) {
                        case 0:
                            state.pipes = dest;
                            break;
                        case 1:
                            state.pipes = [state.pipes, dest];
                            break;
                        default:
                            state.pipes.push(dest);
                            break;
                    }
                    state.pipesCount += 1;
                    debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
                    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
                    var endFn = doEnd ? onend : unpipe;
                    if (state.endEmitted) processNextTick(endFn);else src.once("end", endFn);
                    dest.on("unpipe", onunpipe);

                    function onunpipe(readable, unpipeInfo) {
                        debug("onunpipe");
                        if (readable === src) {
                            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
                                unpipeInfo.hasUnpiped = true;
                                cleanup();
                            }
                        }
                    }

                    function onend() {
                        debug("onend");
                        dest.end();
                    }
                    var ondrain = pipeOnDrain(src);
                    dest.on("drain", ondrain);
                    var cleanedUp = false;

                    function cleanup() {
                        debug("cleanup");
                        dest.removeListener("close", onclose);
                        dest.removeListener("finish", onfinish);
                        dest.removeListener("drain", ondrain);
                        dest.removeListener("error", onerror);
                        dest.removeListener("unpipe", onunpipe);
                        src.removeListener("end", onend);
                        src.removeListener("end", unpipe);
                        src.removeListener("data", ondata);
                        cleanedUp = true;
                        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
                    }
                    var increasedAwaitDrain = false;
                    src.on("data", ondata);

                    function ondata(chunk) {
                        debug("ondata");
                        increasedAwaitDrain = false;
                        var ret = dest.write(chunk);
                        if (false === ret && !increasedAwaitDrain) {
                            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
                                debug("false write response, pause", src._readableState.awaitDrain);
                                src._readableState.awaitDrain++;
                                increasedAwaitDrain = true;
                            }
                            src.pause();
                        }
                    }

                    function onerror(er) {
                        debug("onerror", er);
                        unpipe();
                        dest.removeListener("error", onerror);
                        if (EElistenerCount(dest, "error") === 0) dest.emit("error", er);
                    }
                    prependListener(dest, "error", onerror);

                    function onclose() {
                        dest.removeListener("finish", onfinish);
                        unpipe();
                    }
                    dest.once("close", onclose);

                    function onfinish() {
                        debug("onfinish");
                        dest.removeListener("close", onclose);
                        unpipe();
                    }
                    dest.once("finish", onfinish);

                    function unpipe() {
                        debug("unpipe");
                        src.unpipe(dest);
                    }
                    dest.emit("pipe", src);
                    if (!state.flowing) {
                        debug("pipe resume");
                        src.resume();
                    }
                    return dest;
                };

                function pipeOnDrain(src) {
                    return function () {
                        var state = src._readableState;
                        debug("pipeOnDrain", state.awaitDrain);
                        if (state.awaitDrain) state.awaitDrain--;
                        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
                            state.flowing = true;
                            flow(src);
                        }
                    };
                }
                Readable.prototype.unpipe = function (dest) {
                    var state = this._readableState;
                    var unpipeInfo = {
                        hasUnpiped: false
                    };
                    if (state.pipesCount === 0) return this;
                    if (state.pipesCount === 1) {
                        if (dest && dest !== state.pipes) return this;
                        if (!dest) dest = state.pipes;
                        state.pipes = null;
                        state.pipesCount = 0;
                        state.flowing = false;
                        if (dest) dest.emit("unpipe", this, unpipeInfo);
                        return this;
                    }
                    if (!dest) {
                        var dests = state.pipes;
                        var len = state.pipesCount;
                        state.pipes = null;
                        state.pipesCount = 0;
                        state.flowing = false;
                        for (var i = 0; i < len; i++) {
                            dests[i].emit("unpipe", this, unpipeInfo);
                        }
                        return this;
                    }
                    var index = indexOf(state.pipes, dest);
                    if (index === -1) return this;
                    state.pipes.splice(index, 1);
                    state.pipesCount -= 1;
                    if (state.pipesCount === 1) state.pipes = state.pipes[0];
                    dest.emit("unpipe", this, unpipeInfo);
                    return this;
                };
                Readable.prototype.on = function (ev, fn) {
                    var res = Stream.prototype.on.call(this, ev, fn);
                    if (ev === "data") {
                        if (this._readableState.flowing !== false) this.resume();
                    } else if (ev === "readable") {
                        var state = this._readableState;
                        if (!state.endEmitted && !state.readableListening) {
                            state.readableListening = state.needReadable = true;
                            state.emittedReadable = false;
                            if (!state.reading) {
                                processNextTick(nReadingNextTick, this);
                            } else if (state.length) {
                                emitReadable(this);
                            }
                        }
                    }
                    return res;
                };
                Readable.prototype.addListener = Readable.prototype.on;

                function nReadingNextTick(self) {
                    debug("readable nexttick read 0");
                    self.read(0);
                }
                Readable.prototype.resume = function () {
                    var state = this._readableState;
                    if (!state.flowing) {
                        debug("resume");
                        state.flowing = true;
                        resume(this, state);
                    }
                    return this;
                };

                function resume(stream, state) {
                    if (!state.resumeScheduled) {
                        state.resumeScheduled = true;
                        processNextTick(resume_, stream, state);
                    }
                }

                function resume_(stream, state) {
                    if (!state.reading) {
                        debug("resume read 0");
                        stream.read(0);
                    }
                    state.resumeScheduled = false;
                    state.awaitDrain = 0;
                    stream.emit("resume");
                    flow(stream);
                    if (state.flowing && !state.reading) stream.read(0);
                }
                Readable.prototype.pause = function () {
                    debug("call pause flowing=%j", this._readableState.flowing);
                    if (false !== this._readableState.flowing) {
                        debug("pause");
                        this._readableState.flowing = false;
                        this.emit("pause");
                    }
                    return this;
                };

                function flow(stream) {
                    var state = stream._readableState;
                    debug("flow", state.flowing);
                    while (state.flowing && stream.read() !== null) {}
                }
                Readable.prototype.wrap = function (stream) {
                    var state = this._readableState;
                    var paused = false;
                    var self = this;
                    stream.on("end", function () {
                        debug("wrapped end");
                        if (state.decoder && !state.ended) {
                            var chunk = state.decoder.end();
                            if (chunk && chunk.length) self.push(chunk);
                        }
                        self.push(null);
                    });
                    stream.on("data", function (chunk) {
                        debug("wrapped data");
                        if (state.decoder) chunk = state.decoder.write(chunk);
                        if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
                        var ret = self.push(chunk);
                        if (!ret) {
                            paused = true;
                            stream.pause();
                        }
                    });
                    for (var i in stream) {
                        if (this[i] === undefined && typeof stream[i] === "function") {
                            this[i] = function (method) {
                                return function () {
                                    return stream[method].apply(stream, arguments);
                                };
                            }(i);
                        }
                    }
                    for (var n = 0; n < kProxyEvents.length; n++) {
                        stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
                    }
                    self._read = function (n) {
                        debug("wrapped _read", n);
                        if (paused) {
                            paused = false;
                            stream.resume();
                        }
                    };
                    return self;
                };
                Readable._fromList = fromList;

                function fromList(n, state) {
                    if (state.length === 0) return null;
                    var ret;
                    if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
                        if (state.decoder) ret = state.buffer.join("");else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
                        state.buffer.clear();
                    } else {
                        ret = fromListPartial(n, state.buffer, state.decoder);
                    }
                    return ret;
                }

                function fromListPartial(n, list, hasStrings) {
                    var ret;
                    if (n < list.head.data.length) {
                        ret = list.head.data.slice(0, n);
                        list.head.data = list.head.data.slice(n);
                    } else if (n === list.head.data.length) {
                        ret = list.shift();
                    } else {
                        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
                    }
                    return ret;
                }

                function copyFromBufferString(n, list) {
                    var p = list.head;
                    var c = 1;
                    var ret = p.data;
                    n -= ret.length;
                    while (p = p.next) {
                        var str = p.data;
                        var nb = n > str.length ? str.length : n;
                        if (nb === str.length) ret += str;else ret += str.slice(0, n);
                        n -= nb;
                        if (n === 0) {
                            if (nb === str.length) {
                                ++c;
                                if (p.next) list.head = p.next;else list.head = list.tail = null;
                            } else {
                                list.head = p;
                                p.data = str.slice(nb);
                            }
                            break;
                        }++c;
                    }
                    list.length -= c;
                    return ret;
                }

                function copyFromBuffer(n, list) {
                    var ret = Buffer.allocUnsafe(n);
                    var p = list.head;
                    var c = 1;
                    p.data.copy(ret);
                    n -= p.data.length;
                    while (p = p.next) {
                        var buf = p.data;
                        var nb = n > buf.length ? buf.length : n;
                        buf.copy(ret, ret.length - n, 0, nb);
                        n -= nb;
                        if (n === 0) {
                            if (nb === buf.length) {
                                ++c;
                                if (p.next) list.head = p.next;else list.head = list.tail = null;
                            } else {
                                list.head = p;
                                p.data = buf.slice(nb);
                            }
                            break;
                        }++c;
                    }
                    list.length -= c;
                    return ret;
                }

                function endReadable(stream) {
                    var state = stream._readableState;
                    if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
                    if (!state.endEmitted) {
                        state.ended = true;
                        processNextTick(endReadableNT, state, stream);
                    }
                }

                function endReadableNT(state, stream) {
                    if (!state.endEmitted && state.length === 0) {
                        state.endEmitted = true;
                        stream.readable = false;
                        stream.emit("end");
                    }
                }

                function forEach(xs, f) {
                    for (var i = 0, l = xs.length; i < l; i++) {
                        f(xs[i], i);
                    }
                }

                function indexOf(xs, x) {
                    for (var i = 0, l = xs.length; i < l; i++) {
                        if (xs[i] === x) return i;
                    }
                    return -1;
                }
            }).call(this, require("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {
            "./_stream_duplex": 19,
            "./internal/streams/BufferList": 24,
            "./internal/streams/destroy": 25,
            "./internal/streams/stream": 26,
            _process: 17,
            "core-util-is": 10,
            events: 11,
            inherits: 13,
            isarray: 15,
            "process-nextick-args": 16,
            "safe-buffer": 28,
            "string_decoder/": 29,
            util: 8
        }],
        22: [function (require, module, exports) {
            "use strict";

            module.exports = Transform;
            var Duplex = require("./_stream_duplex");
            var util = require("core-util-is");
            util.inherits = require("inherits");
            util.inherits(Transform, Duplex);

            function TransformState(stream) {
                this.afterTransform = function (er, data) {
                    return afterTransform(stream, er, data);
                };
                this.needTransform = false;
                this.transforming = false;
                this.writecb = null;
                this.writechunk = null;
                this.writeencoding = null;
            }

            function afterTransform(stream, er, data) {
                var ts = stream._transformState;
                ts.transforming = false;
                var cb = ts.writecb;
                if (!cb) {
                    return stream.emit("error", new Error("write callback called multiple times"));
                }
                ts.writechunk = null;
                ts.writecb = null;
                if (data !== null && data !== undefined) stream.push(data);
                cb(er);
                var rs = stream._readableState;
                rs.reading = false;
                if (rs.needReadable || rs.length < rs.highWaterMark) {
                    stream._read(rs.highWaterMark);
                }
            }

            function Transform(options) {
                if (!(this instanceof Transform)) return new Transform(options);
                Duplex.call(this, options);
                this._transformState = new TransformState(this);
                var stream = this;
                this._readableState.needReadable = true;
                this._readableState.sync = false;
                if (options) {
                    if (typeof options.transform === "function") this._transform = options.transform;
                    if (typeof options.flush === "function") this._flush = options.flush;
                }
                this.once("prefinish", function () {
                    if (typeof this._flush === "function") this._flush(function (er, data) {
                        done(stream, er, data);
                    });else done(stream);
                });
            }
            Transform.prototype.push = function (chunk, encoding) {
                this._transformState.needTransform = false;
                return Duplex.prototype.push.call(this, chunk, encoding);
            };
            Transform.prototype._transform = function (chunk, encoding, cb) {
                throw new Error("_transform() is not implemented");
            };
            Transform.prototype._write = function (chunk, encoding, cb) {
                var ts = this._transformState;
                ts.writecb = cb;
                ts.writechunk = chunk;
                ts.writeencoding = encoding;
                if (!ts.transforming) {
                    var rs = this._readableState;
                    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
                }
            };
            Transform.prototype._read = function (n) {
                var ts = this._transformState;
                if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
                    ts.transforming = true;
                    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
                } else {
                    ts.needTransform = true;
                }
            };
            Transform.prototype._destroy = function (err, cb) {
                var _this = this;
                Duplex.prototype._destroy.call(this, err, function (err2) {
                    cb(err2);
                    _this.emit("close");
                });
            };

            function done(stream, er, data) {
                if (er) return stream.emit("error", er);
                if (data !== null && data !== undefined) stream.push(data);
                var ws = stream._writableState;
                var ts = stream._transformState;
                if (ws.length) throw new Error("Calling transform done when ws.length != 0");
                if (ts.transforming) throw new Error("Calling transform done when still transforming");
                return stream.push(null);
            }
        }, {
            "./_stream_duplex": 19,
            "core-util-is": 10,
            inherits: 13
        }],
        23: [function (require, module, exports) {
            (function (process, global) {
                "use strict";

                var processNextTick = require("process-nextick-args");
                module.exports = Writable;

                function WriteReq(chunk, encoding, cb) {
                    this.chunk = chunk;
                    this.encoding = encoding;
                    this.callback = cb;
                    this.next = null;
                }

                function CorkedRequest(state) {
                    var _this = this;
                    this.next = null;
                    this.entry = null;
                    this.finish = function () {
                        onCorkedFinish(_this, state);
                    };
                }
                var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
                var Duplex;
                Writable.WritableState = WritableState;
                var util = require("core-util-is");
                util.inherits = require("inherits");
                var internalUtil = {
                    deprecate: require("util-deprecate")
                };
                var Stream = require("./internal/streams/stream");
                var Buffer = require("safe-buffer").Buffer;
                var OurUint8Array = global.Uint8Array || function () {};

                function _uint8ArrayToBuffer(chunk) {
                    return Buffer.from(chunk);
                }

                function _isUint8Array(obj) {
                    return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
                }
                var destroyImpl = require("./internal/streams/destroy");
                util.inherits(Writable, Stream);

                function nop() {}

                function WritableState(options, stream) {
                    Duplex = Duplex || require("./_stream_duplex");
                    options = options || {};
                    this.objectMode = !!options.objectMode;
                    if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
                    var hwm = options.highWaterMark;
                    var defaultHwm = this.objectMode ? 16 : 16 * 1024;
                    this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
                    this.highWaterMark = Math.floor(this.highWaterMark);
                    this.finalCalled = false;
                    this.needDrain = false;
                    this.ending = false;
                    this.ended = false;
                    this.finished = false;
                    this.destroyed = false;
                    var noDecode = options.decodeStrings === false;
                    this.decodeStrings = !noDecode;
                    this.defaultEncoding = options.defaultEncoding || "utf8";
                    this.length = 0;
                    this.writing = false;
                    this.corked = 0;
                    this.sync = true;
                    this.bufferProcessing = false;
                    this.onwrite = function (er) {
                        onwrite(stream, er);
                    };
                    this.writecb = null;
                    this.writelen = 0;
                    this.bufferedRequest = null;
                    this.lastBufferedRequest = null;
                    this.pendingcb = 0;
                    this.prefinished = false;
                    this.errorEmitted = false;
                    this.bufferedRequestCount = 0;
                    this.corkedRequestsFree = new CorkedRequest(this);
                }
                WritableState.prototype.getBuffer = function getBuffer() {
                    var current = this.bufferedRequest;
                    var out = [];
                    while (current) {
                        out.push(current);
                        current = current.next;
                    }
                    return out;
                };
                (function () {
                    try {
                        Object.defineProperty(WritableState.prototype, "buffer", {
                            get: internalUtil.deprecate(function () {
                                return this.getBuffer();
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer " + "instead.", "DEP0003")
                        });
                    } catch (_) {}
                })();
                var realHasInstance;
                if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
                    realHasInstance = Function.prototype[Symbol.hasInstance];
                    Object.defineProperty(Writable, Symbol.hasInstance, {
                        value: function value(object) {
                            if (realHasInstance.call(this, object)) return true;
                            return object && object._writableState instanceof WritableState;
                        }
                    });
                } else {
                    realHasInstance = function realHasInstance(object) {
                        return object instanceof this;
                    };
                }

                function Writable(options) {
                    Duplex = Duplex || require("./_stream_duplex");
                    if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
                        return new Writable(options);
                    }
                    this._writableState = new WritableState(options, this);
                    this.writable = true;
                    if (options) {
                        if (typeof options.write === "function") this._write = options.write;
                        if (typeof options.writev === "function") this._writev = options.writev;
                        if (typeof options.destroy === "function") this._destroy = options.destroy;
                        if (typeof options.final === "function") this._final = options.final;
                    }
                    Stream.call(this);
                }
                Writable.prototype.pipe = function () {
                    this.emit("error", new Error("Cannot pipe, not readable"));
                };

                function writeAfterEnd(stream, cb) {
                    var er = new Error("write after end");
                    stream.emit("error", er);
                    processNextTick(cb, er);
                }

                function validChunk(stream, state, chunk, cb) {
                    var valid = true;
                    var er = false;
                    if (chunk === null) {
                        er = new TypeError("May not write null values to stream");
                    } else if (typeof chunk !== "string" && chunk !== undefined && !state.objectMode) {
                        er = new TypeError("Invalid non-string/buffer chunk");
                    }
                    if (er) {
                        stream.emit("error", er);
                        processNextTick(cb, er);
                        valid = false;
                    }
                    return valid;
                }
                Writable.prototype.write = function (chunk, encoding, cb) {
                    var state = this._writableState;
                    var ret = false;
                    var isBuf = _isUint8Array(chunk) && !state.objectMode;
                    if (isBuf && !Buffer.isBuffer(chunk)) {
                        chunk = _uint8ArrayToBuffer(chunk);
                    }
                    if (typeof encoding === "function") {
                        cb = encoding;
                        encoding = null;
                    }
                    if (isBuf) encoding = "buffer";else if (!encoding) encoding = state.defaultEncoding;
                    if (typeof cb !== "function") cb = nop;
                    if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
                        state.pendingcb++;
                        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
                    }
                    return ret;
                };
                Writable.prototype.cork = function () {
                    var state = this._writableState;
                    state.corked++;
                };
                Writable.prototype.uncork = function () {
                    var state = this._writableState;
                    if (state.corked) {
                        state.corked--;
                        if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
                    }
                };
                Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
                    if (typeof encoding === "string") encoding = encoding.toLowerCase();
                    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
                    this._writableState.defaultEncoding = encoding;
                    return this;
                };

                function decodeChunk(state, chunk, encoding) {
                    if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
                        chunk = Buffer.from(chunk, encoding);
                    }
                    return chunk;
                }

                function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
                    if (!isBuf) {
                        var newChunk = decodeChunk(state, chunk, encoding);
                        if (chunk !== newChunk) {
                            isBuf = true;
                            encoding = "buffer";
                            chunk = newChunk;
                        }
                    }
                    var len = state.objectMode ? 1 : chunk.length;
                    state.length += len;
                    var ret = state.length < state.highWaterMark;
                    if (!ret) state.needDrain = true;
                    if (state.writing || state.corked) {
                        var last = state.lastBufferedRequest;
                        state.lastBufferedRequest = {
                            chunk: chunk,
                            encoding: encoding,
                            isBuf: isBuf,
                            callback: cb,
                            next: null
                        };
                        if (last) {
                            last.next = state.lastBufferedRequest;
                        } else {
                            state.bufferedRequest = state.lastBufferedRequest;
                        }
                        state.bufferedRequestCount += 1;
                    } else {
                        doWrite(stream, state, false, len, chunk, encoding, cb);
                    }
                    return ret;
                }

                function doWrite(stream, state, writev, len, chunk, encoding, cb) {
                    state.writelen = len;
                    state.writecb = cb;
                    state.writing = true;
                    state.sync = true;
                    if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
                    state.sync = false;
                }

                function onwriteError(stream, state, sync, er, cb) {
                    --state.pendingcb;
                    if (sync) {
                        processNextTick(cb, er);
                        processNextTick(finishMaybe, stream, state);
                        stream._writableState.errorEmitted = true;
                        stream.emit("error", er);
                    } else {
                        cb(er);
                        stream._writableState.errorEmitted = true;
                        stream.emit("error", er);
                        finishMaybe(stream, state);
                    }
                }

                function onwriteStateUpdate(state) {
                    state.writing = false;
                    state.writecb = null;
                    state.length -= state.writelen;
                    state.writelen = 0;
                }

                function onwrite(stream, er) {
                    var state = stream._writableState;
                    var sync = state.sync;
                    var cb = state.writecb;
                    onwriteStateUpdate(state);
                    if (er) onwriteError(stream, state, sync, er, cb);else {
                        var finished = needFinish(state);
                        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
                            clearBuffer(stream, state);
                        }
                        if (sync) {
                            asyncWrite(afterWrite, stream, state, finished, cb);
                        } else {
                            afterWrite(stream, state, finished, cb);
                        }
                    }
                }

                function afterWrite(stream, state, finished, cb) {
                    if (!finished) onwriteDrain(stream, state);
                    state.pendingcb--;
                    cb();
                    finishMaybe(stream, state);
                }

                function onwriteDrain(stream, state) {
                    if (state.length === 0 && state.needDrain) {
                        state.needDrain = false;
                        stream.emit("drain");
                    }
                }

                function clearBuffer(stream, state) {
                    state.bufferProcessing = true;
                    var entry = state.bufferedRequest;
                    if (stream._writev && entry && entry.next) {
                        var l = state.bufferedRequestCount;
                        var buffer = new Array(l);
                        var holder = state.corkedRequestsFree;
                        holder.entry = entry;
                        var count = 0;
                        var allBuffers = true;
                        while (entry) {
                            buffer[count] = entry;
                            if (!entry.isBuf) allBuffers = false;
                            entry = entry.next;
                            count += 1;
                        }
                        buffer.allBuffers = allBuffers;
                        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
                        state.pendingcb++;
                        state.lastBufferedRequest = null;
                        if (holder.next) {
                            state.corkedRequestsFree = holder.next;
                            holder.next = null;
                        } else {
                            state.corkedRequestsFree = new CorkedRequest(state);
                        }
                    } else {
                        while (entry) {
                            var chunk = entry.chunk;
                            var encoding = entry.encoding;
                            var cb = entry.callback;
                            var len = state.objectMode ? 1 : chunk.length;
                            doWrite(stream, state, false, len, chunk, encoding, cb);
                            entry = entry.next;
                            if (state.writing) {
                                break;
                            }
                        }
                        if (entry === null) state.lastBufferedRequest = null;
                    }
                    state.bufferedRequestCount = 0;
                    state.bufferedRequest = entry;
                    state.bufferProcessing = false;
                }
                Writable.prototype._write = function (chunk, encoding, cb) {
                    cb(new Error("_write() is not implemented"));
                };
                Writable.prototype._writev = null;
                Writable.prototype.end = function (chunk, encoding, cb) {
                    var state = this._writableState;
                    if (typeof chunk === "function") {
                        cb = chunk;
                        chunk = null;
                        encoding = null;
                    } else if (typeof encoding === "function") {
                        cb = encoding;
                        encoding = null;
                    }
                    if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
                    if (state.corked) {
                        state.corked = 1;
                        this.uncork();
                    }
                    if (!state.ending && !state.finished) endWritable(this, state, cb);
                };

                function needFinish(state) {
                    return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
                }

                function callFinal(stream, state) {
                    stream._final(function (err) {
                        state.pendingcb--;
                        if (err) {
                            stream.emit("error", err);
                        }
                        state.prefinished = true;
                        stream.emit("prefinish");
                        finishMaybe(stream, state);
                    });
                }

                function prefinish(stream, state) {
                    if (!state.prefinished && !state.finalCalled) {
                        if (typeof stream._final === "function") {
                            state.pendingcb++;
                            state.finalCalled = true;
                            processNextTick(callFinal, stream, state);
                        } else {
                            state.prefinished = true;
                            stream.emit("prefinish");
                        }
                    }
                }

                function finishMaybe(stream, state) {
                    var need = needFinish(state);
                    if (need) {
                        prefinish(stream, state);
                        if (state.pendingcb === 0) {
                            state.finished = true;
                            stream.emit("finish");
                        }
                    }
                    return need;
                }

                function endWritable(stream, state, cb) {
                    state.ending = true;
                    finishMaybe(stream, state);
                    if (cb) {
                        if (state.finished) processNextTick(cb);else stream.once("finish", cb);
                    }
                    state.ended = true;
                    stream.writable = false;
                }

                function onCorkedFinish(corkReq, state, err) {
                    var entry = corkReq.entry;
                    corkReq.entry = null;
                    while (entry) {
                        var cb = entry.callback;
                        state.pendingcb--;
                        cb(err);
                        entry = entry.next;
                    }
                    if (state.corkedRequestsFree) {
                        state.corkedRequestsFree.next = corkReq;
                    } else {
                        state.corkedRequestsFree = corkReq;
                    }
                }
                Object.defineProperty(Writable.prototype, "destroyed", {
                    get: function get() {
                        if (this._writableState === undefined) {
                            return false;
                        }
                        return this._writableState.destroyed;
                    },
                    set: function set(value) {
                        if (!this._writableState) {
                            return;
                        }
                        this._writableState.destroyed = value;
                    }
                });
                Writable.prototype.destroy = destroyImpl.destroy;
                Writable.prototype._undestroy = destroyImpl.undestroy;
                Writable.prototype._destroy = function (err, cb) {
                    this.end();
                    cb(err);
                };
            }).call(this, require("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {
            "./_stream_duplex": 19,
            "./internal/streams/destroy": 25,
            "./internal/streams/stream": 26,
            _process: 17,
            "core-util-is": 10,
            inherits: 13,
            "process-nextick-args": 16,
            "safe-buffer": 28,
            "util-deprecate": 30
        }],
        24: [function (require, module, exports) {
            "use strict";

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }
            var Buffer = require("safe-buffer").Buffer;

            function copyBuffer(src, target, offset) {
                src.copy(target, offset);
            }
            module.exports = function () {
                function BufferList() {
                    _classCallCheck(this, BufferList);
                    this.head = null;
                    this.tail = null;
                    this.length = 0;
                }
                BufferList.prototype.push = function push(v) {
                    var entry = {
                        data: v,
                        next: null
                    };
                    if (this.length > 0) this.tail.next = entry;else this.head = entry;
                    this.tail = entry;
                    ++this.length;
                };
                BufferList.prototype.unshift = function unshift(v) {
                    var entry = {
                        data: v,
                        next: this.head
                    };
                    if (this.length === 0) this.tail = entry;
                    this.head = entry;
                    ++this.length;
                };
                BufferList.prototype.shift = function shift() {
                    if (this.length === 0) return;
                    var ret = this.head.data;
                    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
                    --this.length;
                    return ret;
                };
                BufferList.prototype.clear = function clear() {
                    this.head = this.tail = null;
                    this.length = 0;
                };
                BufferList.prototype.join = function join(s) {
                    if (this.length === 0) return "";
                    var p = this.head;
                    var ret = "" + p.data;
                    while (p = p.next) {
                        ret += s + p.data;
                    }
                    return ret;
                };
                BufferList.prototype.concat = function concat(n) {
                    if (this.length === 0) return Buffer.alloc(0);
                    if (this.length === 1) return this.head.data;
                    var ret = Buffer.allocUnsafe(n >>> 0);
                    var p = this.head;
                    var i = 0;
                    while (p) {
                        copyBuffer(p.data, ret, i);
                        i += p.data.length;
                        p = p.next;
                    }
                    return ret;
                };
                return BufferList;
            }();
        }, {
            "safe-buffer": 28
        }],
        25: [function (require, module, exports) {
            "use strict";

            var processNextTick = require("process-nextick-args");

            function destroy(err, cb) {
                var _this = this;
                var readableDestroyed = this._readableState && this._readableState.destroyed;
                var writableDestroyed = this._writableState && this._writableState.destroyed;
                if (readableDestroyed || writableDestroyed) {
                    if (cb) {
                        cb(err);
                    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
                        processNextTick(emitErrorNT, this, err);
                    }
                    return;
                }
                if (this._readableState) {
                    this._readableState.destroyed = true;
                }
                if (this._writableState) {
                    this._writableState.destroyed = true;
                }
                this._destroy(err || null, function (err) {
                    if (!cb && err) {
                        processNextTick(emitErrorNT, _this, err);
                        if (_this._writableState) {
                            _this._writableState.errorEmitted = true;
                        }
                    } else if (cb) {
                        cb(err);
                    }
                });
            }

            function undestroy() {
                if (this._readableState) {
                    this._readableState.destroyed = false;
                    this._readableState.reading = false;
                    this._readableState.ended = false;
                    this._readableState.endEmitted = false;
                }
                if (this._writableState) {
                    this._writableState.destroyed = false;
                    this._writableState.ended = false;
                    this._writableState.ending = false;
                    this._writableState.finished = false;
                    this._writableState.errorEmitted = false;
                }
            }

            function emitErrorNT(self, err) {
                self.emit("error", err);
            }
            module.exports = {
                destroy: destroy,
                undestroy: undestroy
            };
        }, {
            "process-nextick-args": 16
        }],
        26: [function (require, module, exports) {
            module.exports = require("events").EventEmitter;
        }, {
            events: 11
        }],
        27: [function (require, module, exports) {
            exports = module.exports = require("./lib/_stream_readable.js");
            exports.Stream = exports;
            exports.Readable = exports;
            exports.Writable = require("./lib/_stream_writable.js");
            exports.Duplex = require("./lib/_stream_duplex.js");
            exports.Transform = require("./lib/_stream_transform.js");
            exports.PassThrough = require("./lib/_stream_passthrough.js");
        }, {
            "./lib/_stream_duplex.js": 19,
            "./lib/_stream_passthrough.js": 20,
            "./lib/_stream_readable.js": 21,
            "./lib/_stream_transform.js": 22,
            "./lib/_stream_writable.js": 23
        }],
        28: [function (require, module, exports) {
            var buffer = require("buffer");
            var Buffer = buffer.Buffer;

            function copyProps(src, dst) {
                for (var key in src) {
                    dst[key] = src[key];
                }
            }
            if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
                module.exports = buffer;
            } else {
                copyProps(buffer, exports);
                exports.Buffer = SafeBuffer;
            }

            function SafeBuffer(arg, encodingOrOffset, length) {
                return Buffer(arg, encodingOrOffset, length);
            }
            copyProps(Buffer, SafeBuffer);
            SafeBuffer.from = function (arg, encodingOrOffset, length) {
                if (typeof arg === "number") {
                    throw new TypeError("Argument must not be a number");
                }
                return Buffer(arg, encodingOrOffset, length);
            };
            SafeBuffer.alloc = function (size, fill, encoding) {
                if (typeof size !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                var buf = Buffer(size);
                if (fill !== undefined) {
                    if (typeof encoding === "string") {
                        buf.fill(fill, encoding);
                    } else {
                        buf.fill(fill);
                    }
                } else {
                    buf.fill(0);
                }
                return buf;
            };
            SafeBuffer.allocUnsafe = function (size) {
                if (typeof size !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return Buffer(size);
            };
            SafeBuffer.allocUnsafeSlow = function (size) {
                if (typeof size !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return buffer.SlowBuffer(size);
            };
        }, {
            buffer: 9
        }],
        29: [function (require, module, exports) {
            "use strict";

            var Buffer = require("safe-buffer").Buffer;
            var isEncoding = Buffer.isEncoding || function (encoding) {
                encoding = "" + encoding;
                switch (encoding && encoding.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return true;
                    default:
                        return false;
                }
            };

            function _normalizeEncoding(enc) {
                if (!enc) return "utf8";
                var retried;
                while (true) {
                    switch (enc) {
                        case "utf8":
                        case "utf-8":
                            return "utf8";
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return "utf16le";
                        case "latin1":
                        case "binary":
                            return "latin1";
                        case "base64":
                        case "ascii":
                        case "hex":
                            return enc;
                        default:
                            if (retried) return;
                            enc = ("" + enc).toLowerCase();
                            retried = true;
                    }
                }
            }

            function normalizeEncoding(enc) {
                var nenc = _normalizeEncoding(enc);
                if (typeof nenc !== "string" && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
                return nenc || enc;
            }
            exports.StringDecoder = StringDecoder;

            function StringDecoder(encoding) {
                this.encoding = normalizeEncoding(encoding);
                var nb;
                switch (this.encoding) {
                    case "utf16le":
                        this.text = utf16Text;
                        this.end = utf16End;
                        nb = 4;
                        break;
                    case "utf8":
                        this.fillLast = utf8FillLast;
                        nb = 4;
                        break;
                    case "base64":
                        this.text = base64Text;
                        this.end = base64End;
                        nb = 3;
                        break;
                    default:
                        this.write = simpleWrite;
                        this.end = simpleEnd;
                        return;
                }
                this.lastNeed = 0;
                this.lastTotal = 0;
                this.lastChar = Buffer.allocUnsafe(nb);
            }
            StringDecoder.prototype.write = function (buf) {
                if (buf.length === 0) return "";
                var r;
                var i;
                if (this.lastNeed) {
                    r = this.fillLast(buf);
                    if (r === undefined) return "";
                    i = this.lastNeed;
                    this.lastNeed = 0;
                } else {
                    i = 0;
                }
                if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
                return r || "";
            };
            StringDecoder.prototype.end = utf8End;
            StringDecoder.prototype.text = utf8Text;
            StringDecoder.prototype.fillLast = function (buf) {
                if (this.lastNeed <= buf.length) {
                    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
                this.lastNeed -= buf.length;
            };

            function utf8CheckByte(byte) {
                if (byte <= 127) return 0;else if (byte >> 5 === 6) return 2;else if (byte >> 4 === 14) return 3;else if (byte >> 3 === 30) return 4;
                return -1;
            }

            function utf8CheckIncomplete(self, buf, i) {
                var j = buf.length - 1;
                if (j < i) return 0;
                var nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                    if (nb > 0) self.lastNeed = nb - 1;
                    return nb;
                }
                if (--j < i) return 0;
                nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                    if (nb > 0) self.lastNeed = nb - 2;
                    return nb;
                }
                if (--j < i) return 0;
                nb = utf8CheckByte(buf[j]);
                if (nb >= 0) {
                    if (nb > 0) {
                        if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
                    }
                    return nb;
                }
                return 0;
            }

            function utf8CheckExtraBytes(self, buf, p) {
                if ((buf[0] & 192) !== 128) {
                    self.lastNeed = 0;
                    return "�".repeat(p);
                }
                if (self.lastNeed > 1 && buf.length > 1) {
                    if ((buf[1] & 192) !== 128) {
                        self.lastNeed = 1;
                        return "�".repeat(p + 1);
                    }
                    if (self.lastNeed > 2 && buf.length > 2) {
                        if ((buf[2] & 192) !== 128) {
                            self.lastNeed = 2;
                            return "�".repeat(p + 2);
                        }
                    }
                }
            }

            function utf8FillLast(buf) {
                var p = this.lastTotal - this.lastNeed;
                var r = utf8CheckExtraBytes(this, buf, p);
                if (r !== undefined) return r;
                if (this.lastNeed <= buf.length) {
                    buf.copy(this.lastChar, p, 0, this.lastNeed);
                    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
                }
                buf.copy(this.lastChar, p, 0, buf.length);
                this.lastNeed -= buf.length;
            }

            function utf8Text(buf, i) {
                var total = utf8CheckIncomplete(this, buf, i);
                if (!this.lastNeed) return buf.toString("utf8", i);
                this.lastTotal = total;
                var end = buf.length - (total - this.lastNeed);
                buf.copy(this.lastChar, 0, end);
                return buf.toString("utf8", i, end);
            }

            function utf8End(buf) {
                var r = buf && buf.length ? this.write(buf) : "";
                if (this.lastNeed) return r + "�".repeat(this.lastTotal - this.lastNeed);
                return r;
            }

            function utf16Text(buf, i) {
                if ((buf.length - i) % 2 === 0) {
                    var r = buf.toString("utf16le", i);
                    if (r) {
                        var c = r.charCodeAt(r.length - 1);
                        if (c >= 55296 && c <= 56319) {
                            this.lastNeed = 2;
                            this.lastTotal = 4;
                            this.lastChar[0] = buf[buf.length - 2];
                            this.lastChar[1] = buf[buf.length - 1];
                            return r.slice(0, -1);
                        }
                    }
                    return r;
                }
                this.lastNeed = 1;
                this.lastTotal = 2;
                this.lastChar[0] = buf[buf.length - 1];
                return buf.toString("utf16le", i, buf.length - 1);
            }

            function utf16End(buf) {
                var r = buf && buf.length ? this.write(buf) : "";
                if (this.lastNeed) {
                    var end = this.lastTotal - this.lastNeed;
                    return r + this.lastChar.toString("utf16le", 0, end);
                }
                return r;
            }

            function base64Text(buf, i) {
                var n = (buf.length - i) % 3;
                if (n === 0) return buf.toString("base64", i);
                this.lastNeed = 3 - n;
                this.lastTotal = 3;
                if (n === 1) {
                    this.lastChar[0] = buf[buf.length - 1];
                } else {
                    this.lastChar[0] = buf[buf.length - 2];
                    this.lastChar[1] = buf[buf.length - 1];
                }
                return buf.toString("base64", i, buf.length - n);
            }

            function base64End(buf) {
                var r = buf && buf.length ? this.write(buf) : "";
                if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
                return r;
            }

            function simpleWrite(buf) {
                return buf.toString(this.encoding);
            }

            function simpleEnd(buf) {
                return buf && buf.length ? this.write(buf) : "";
            }
        }, {
            "safe-buffer": 28
        }],
        30: [function (require, module, exports) {
            (function (global) {
                module.exports = deprecate;

                function deprecate(fn, msg) {
                    if (config("noDeprecation")) {
                        return fn;
                    }
                    var warned = false;

                    function deprecated() {
                        if (!warned) {
                            if (config("throwDeprecation")) {
                                throw new Error(msg);
                            } else if (config("traceDeprecation")) {
                                console.trace(msg);
                            } else {
                                console.warn(msg);
                            }
                            warned = true;
                        }
                        return fn.apply(this, arguments);
                    }
                    return deprecated;
                }

                function config(name) {
                    try {
                        if (!global.localStorage) return false;
                    } catch (_) {
                        return false;
                    }
                    var val = global.localStorage[name];
                    if (null == val) return false;
                    return String(val).toLowerCase() === "true";
                }
            }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}],
        31: [function (require, module, exports) {
            arguments[4][13][0].apply(exports, arguments);
        }, {
            dup: 13
        }],
        32: [function (require, module, exports) {
            module.exports = function isBuffer(arg) {
                return arg && (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
            };
        }, {}],
        33: [function (require, module, exports) {
            (function (process, global) {
                var formatRegExp = /%[sdj%]/g;
                exports.format = function (f) {
                    if (!isString(f)) {
                        var objects = [];
                        for (var i = 0; i < arguments.length; i++) {
                            objects.push(inspect(arguments[i]));
                        }
                        return objects.join(" ");
                    }
                    var i = 1;
                    var args = arguments;
                    var len = args.length;
                    var str = String(f).replace(formatRegExp, function (x) {
                        if (x === "%%") return "%";
                        if (i >= len) return x;
                        switch (x) {
                            case "%s":
                                return String(args[i++]);
                            case "%d":
                                return Number(args[i++]);
                            case "%j":
                                try {
                                    return JSON.stringify(args[i++]);
                                } catch (_) {
                                    return "[Circular]";
                                }
                            default:
                                return x;
                        }
                    });
                    for (var x = args[i]; i < len; x = args[++i]) {
                        if (isNull(x) || !isObject(x)) {
                            str += " " + x;
                        } else {
                            str += " " + inspect(x);
                        }
                    }
                    return str;
                };
                exports.deprecate = function (fn, msg) {
                    if (isUndefined(global.process)) {
                        return function () {
                            return exports.deprecate(fn, msg).apply(this, arguments);
                        };
                    }
                    if (process.noDeprecation === true) {
                        return fn;
                    }
                    var warned = false;

                    function deprecated() {
                        if (!warned) {
                            if (process.throwDeprecation) {
                                throw new Error(msg);
                            } else if (process.traceDeprecation) {
                                console.trace(msg);
                            } else {
                                console.error(msg);
                            }
                            warned = true;
                        }
                        return fn.apply(this, arguments);
                    }
                    return deprecated;
                };
                var debugs = {};
                var debugEnviron;
                exports.debuglog = function (set) {
                    if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || "";
                    set = set.toUpperCase();
                    if (!debugs[set]) {
                        if (new RegExp("\\b" + set + "\\b", "i").test(debugEnviron)) {
                            var pid = process.pid;
                            debugs[set] = function () {
                                var msg = exports.format.apply(exports, arguments);
                                console.error("%s %d: %s", set, pid, msg);
                            };
                        } else {
                            debugs[set] = function () {};
                        }
                    }
                    return debugs[set];
                };

                function inspect(obj, opts) {
                    var ctx = {
                        seen: [],
                        stylize: stylizeNoColor
                    };
                    if (arguments.length >= 3) ctx.depth = arguments[2];
                    if (arguments.length >= 4) ctx.colors = arguments[3];
                    if (isBoolean(opts)) {
                        ctx.showHidden = opts;
                    } else if (opts) {
                        exports._extend(ctx, opts);
                    }
                    if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
                    if (isUndefined(ctx.depth)) ctx.depth = 2;
                    if (isUndefined(ctx.colors)) ctx.colors = false;
                    if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
                    if (ctx.colors) ctx.stylize = stylizeWithColor;
                    return formatValue(ctx, obj, ctx.depth);
                }
                exports.inspect = inspect;
                inspect.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                };
                inspect.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                };

                function stylizeWithColor(str, styleType) {
                    var style = inspect.styles[styleType];
                    if (style) {
                        return "[" + inspect.colors[style][0] + "m" + str + "[" + inspect.colors[style][1] + "m";
                    } else {
                        return str;
                    }
                }

                function stylizeNoColor(str, styleType) {
                    return str;
                }

                function arrayToHash(array) {
                    var hash = {};
                    array.forEach(function (val, idx) {
                        hash[val] = true;
                    });
                    return hash;
                }

                function formatValue(ctx, value, recurseTimes) {
                    if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
                        var ret = value.inspect(recurseTimes, ctx);
                        if (!isString(ret)) {
                            ret = formatValue(ctx, ret, recurseTimes);
                        }
                        return ret;
                    }
                    var primitive = formatPrimitive(ctx, value);
                    if (primitive) {
                        return primitive;
                    }
                    var keys = Object.keys(value);
                    var visibleKeys = arrayToHash(keys);
                    if (ctx.showHidden) {
                        keys = Object.getOwnPropertyNames(value);
                    }
                    if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
                        return formatError(value);
                    }
                    if (keys.length === 0) {
                        if (isFunction(value)) {
                            var name = value.name ? ": " + value.name : "";
                            return ctx.stylize("[Function" + name + "]", "special");
                        }
                        if (isRegExp(value)) {
                            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                        }
                        if (isDate(value)) {
                            return ctx.stylize(Date.prototype.toString.call(value), "date");
                        }
                        if (isError(value)) {
                            return formatError(value);
                        }
                    }
                    var base = "",
                        array = false,
                        braces = ["{", "}"];
                    if (isArray(value)) {
                        array = true;
                        braces = ["[", "]"];
                    }
                    if (isFunction(value)) {
                        var n = value.name ? ": " + value.name : "";
                        base = " [Function" + n + "]";
                    }
                    if (isRegExp(value)) {
                        base = " " + RegExp.prototype.toString.call(value);
                    }
                    if (isDate(value)) {
                        base = " " + Date.prototype.toUTCString.call(value);
                    }
                    if (isError(value)) {
                        base = " " + formatError(value);
                    }
                    if (keys.length === 0 && (!array || value.length == 0)) {
                        return braces[0] + base + braces[1];
                    }
                    if (recurseTimes < 0) {
                        if (isRegExp(value)) {
                            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
                        } else {
                            return ctx.stylize("[Object]", "special");
                        }
                    }
                    ctx.seen.push(value);
                    var output;
                    if (array) {
                        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
                    } else {
                        output = keys.map(function (key) {
                            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                        });
                    }
                    ctx.seen.pop();
                    return reduceToSingleString(output, base, braces);
                }

                function formatPrimitive(ctx, value) {
                    if (isUndefined(value)) return ctx.stylize("undefined", "undefined");
                    if (isString(value)) {
                        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return ctx.stylize(simple, "string");
                    }
                    if (isNumber(value)) return ctx.stylize("" + value, "number");
                    if (isBoolean(value)) return ctx.stylize("" + value, "boolean");
                    if (isNull(value)) return ctx.stylize("null", "null");
                }

                function formatError(value) {
                    return "[" + Error.prototype.toString.call(value) + "]";
                }

                function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
                    var output = [];
                    for (var i = 0, l = value.length; i < l; ++i) {
                        if (hasOwnProperty(value, String(i))) {
                            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
                        } else {
                            output.push("");
                        }
                    }
                    keys.forEach(function (key) {
                        if (!key.match(/^\d+$/)) {
                            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
                        }
                    });
                    return output;
                }

                function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
                    var name, str, desc;
                    desc = Object.getOwnPropertyDescriptor(value, key) || {
                        value: value[key]
                    };
                    if (desc.get) {
                        if (desc.set) {
                            str = ctx.stylize("[Getter/Setter]", "special");
                        } else {
                            str = ctx.stylize("[Getter]", "special");
                        }
                    } else {
                        if (desc.set) {
                            str = ctx.stylize("[Setter]", "special");
                        }
                    }
                    if (!hasOwnProperty(visibleKeys, key)) {
                        name = "[" + key + "]";
                    }
                    if (!str) {
                        if (ctx.seen.indexOf(desc.value) < 0) {
                            if (isNull(recurseTimes)) {
                                str = formatValue(ctx, desc.value, null);
                            } else {
                                str = formatValue(ctx, desc.value, recurseTimes - 1);
                            }
                            if (str.indexOf("\n") > -1) {
                                if (array) {
                                    str = str.split("\n").map(function (line) {
                                        return "  " + line;
                                    }).join("\n").substr(2);
                                } else {
                                    str = "\n" + str.split("\n").map(function (line) {
                                        return "   " + line;
                                    }).join("\n");
                                }
                            }
                        } else {
                            str = ctx.stylize("[Circular]", "special");
                        }
                    }
                    if (isUndefined(name)) {
                        if (array && key.match(/^\d+$/)) {
                            return str;
                        }
                        name = JSON.stringify("" + key);
                        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                            name = name.substr(1, name.length - 2);
                            name = ctx.stylize(name, "name");
                        } else {
                            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                            name = ctx.stylize(name, "string");
                        }
                    }
                    return name + ": " + str;
                }

                function reduceToSingleString(output, base, braces) {
                    var numLinesEst = 0;
                    var length = output.reduce(function (prev, cur) {
                        numLinesEst++;
                        if (cur.indexOf("\n") >= 0) numLinesEst++;
                        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
                    }, 0);
                    if (length > 60) {
                        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
                    }
                    return braces[0] + base + " " + output.join(", ") + " " + braces[1];
                }

                function isArray(ar) {
                    return Array.isArray(ar);
                }
                exports.isArray = isArray;

                function isBoolean(arg) {
                    return typeof arg === "boolean";
                }
                exports.isBoolean = isBoolean;

                function isNull(arg) {
                    return arg === null;
                }
                exports.isNull = isNull;

                function isNullOrUndefined(arg) {
                    return arg == null;
                }
                exports.isNullOrUndefined = isNullOrUndefined;

                function isNumber(arg) {
                    return typeof arg === "number";
                }
                exports.isNumber = isNumber;

                function isString(arg) {
                    return typeof arg === "string";
                }
                exports.isString = isString;

                function isSymbol(arg) {
                    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "symbol";
                }
                exports.isSymbol = isSymbol;

                function isUndefined(arg) {
                    return arg === void 0;
                }
                exports.isUndefined = isUndefined;

                function isRegExp(re) {
                    return isObject(re) && objectToString(re) === "[object RegExp]";
                }
                exports.isRegExp = isRegExp;

                function isObject(arg) {
                    return (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "object" && arg !== null;
                }
                exports.isObject = isObject;

                function isDate(d) {
                    return isObject(d) && objectToString(d) === "[object Date]";
                }
                exports.isDate = isDate;

                function isError(e) {
                    return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
                }
                exports.isError = isError;

                function isFunction(arg) {
                    return typeof arg === "function";
                }
                exports.isFunction = isFunction;

                function isPrimitive(arg) {
                    return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || (typeof arg === "undefined" ? "undefined" : _typeof(arg)) === "symbol" || typeof arg === "undefined";
                }
                exports.isPrimitive = isPrimitive;
                exports.isBuffer = require("./support/isBuffer");

                function objectToString(o) {
                    return Object.prototype.toString.call(o);
                }

                function pad(n) {
                    return n < 10 ? "0" + n.toString(10) : n.toString(10);
                }
                var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                function timestamp() {
                    var d = new Date();
                    var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(":");
                    return [d.getDate(), months[d.getMonth()], time].join(" ");
                }
                exports.log = function () {
                    console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
                };
                exports.inherits = require("inherits");
                exports._extend = function (origin, add) {
                    if (!add || !isObject(add)) return origin;
                    var keys = Object.keys(add);
                    var i = keys.length;
                    while (i--) {
                        origin[keys[i]] = add[keys[i]];
                    }
                    return origin;
                };

                function hasOwnProperty(obj, prop) {
                    return Object.prototype.hasOwnProperty.call(obj, prop);
                }
            }).call(this, require("_process"), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {
            "./support/isBuffer": 32,
            _process: 17,
            inherits: 31
        }]
    }, {}, [1])(1);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7).setImmediate))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(8);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* pako 1.0.3 nodeca/pako */(function (f) {
  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.pako = f();
  }
})(function () {
  var define, module, exports;return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }({ 1: [function (require, module, exports) {
      'use strict';

      var TYPED_OK = typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Int32Array !== 'undefined';

      exports.assign = function (obj /*from1, from2, from3, ...*/) {
        var sources = Array.prototype.slice.call(arguments, 1);
        while (sources.length) {
          var source = sources.shift();
          if (!source) {
            continue;
          }

          if ((typeof source === "undefined" ? "undefined" : _typeof(source)) !== 'object') {
            throw new TypeError(source + 'must be non-object');
          }

          for (var p in source) {
            if (source.hasOwnProperty(p)) {
              obj[p] = source[p];
            }
          }
        }

        return obj;
      };

      // reduce buffer size, avoiding mem copy
      exports.shrinkBuf = function (buf, size) {
        if (buf.length === size) {
          return buf;
        }
        if (buf.subarray) {
          return buf.subarray(0, size);
        }
        buf.length = size;
        return buf;
      };

      var fnTyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
          }
          // Fallback to ordinary array
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          var i, l, len, pos, chunk, result;

          // calculate data length
          len = 0;
          for (i = 0, l = chunks.length; i < l; i++) {
            len += chunks[i].length;
          }

          // join chunks
          result = new Uint8Array(len);
          pos = 0;
          for (i = 0, l = chunks.length; i < l; i++) {
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
          }

          return result;
        }
      };

      var fnUntyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          return [].concat.apply([], chunks);
        }
      };

      // Enable/Disable typed arrays use, for testing
      //
      exports.setTyped = function (on) {
        if (on) {
          exports.Buf8 = Uint8Array;
          exports.Buf16 = Uint16Array;
          exports.Buf32 = Int32Array;
          exports.assign(exports, fnTyped);
        } else {
          exports.Buf8 = Array;
          exports.Buf16 = Array;
          exports.Buf32 = Array;
          exports.assign(exports, fnUntyped);
        }
      };

      exports.setTyped(TYPED_OK);
    }, {}], 2: [function (require, module, exports) {
      // String encode/decode helpers
      'use strict';

      var utils = require('./common');

      // Quick check if we can use fast array to bin string conversion
      //
      // - apply(Array) can fail on Android 2.2
      // - apply(Uint8Array) can fail on iOS 5.1 Safary
      //
      var STR_APPLY_OK = true;
      var STR_APPLY_UIA_OK = true;

      try {
        String.fromCharCode.apply(null, [0]);
      } catch (__) {
        STR_APPLY_OK = false;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (__) {
        STR_APPLY_UIA_OK = false;
      }

      // Table with utf8 lengths (calculated by first byte of sequence)
      // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
      // because max possible codepoint is 0x10ffff
      var _utf8len = new utils.Buf8(256);
      for (var q = 0; q < 256; q++) {
        _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
      }
      _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


      // convert string to array (typed, when possible)
      exports.string2buf = function (str) {
        var buf,
            c,
            c2,
            m_pos,
            i,
            str_len = str.length,
            buf_len = 0;

        // count binary size
        for (m_pos = 0; m_pos < str_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }
          buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
        }

        // allocate buffer
        buf = new utils.Buf8(buf_len);

        // convert
        for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
          c = str.charCodeAt(m_pos);
          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }
          if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
          } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
          } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          } else {
            /* four bytes */
            buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          }
        }

        return buf;
      };

      // Helper (used in 2 places)
      function buf2binstring(buf, len) {
        // use fallback for big arrays to avoid stack overflow
        if (len < 65537) {
          if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
            return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
          }
        }

        var result = '';
        for (var i = 0; i < len; i++) {
          result += String.fromCharCode(buf[i]);
        }
        return result;
      }

      // Convert byte array to binary string
      exports.buf2binstring = function (buf) {
        return buf2binstring(buf, buf.length);
      };

      // Convert binary string (typed, when possible)
      exports.binstring2buf = function (str) {
        var buf = new utils.Buf8(str.length);
        for (var i = 0, len = buf.length; i < len; i++) {
          buf[i] = str.charCodeAt(i);
        }
        return buf;
      };

      // convert array to string
      exports.buf2string = function (buf, max) {
        var i, out, c, c_len;
        var len = max || buf.length;

        // Reserve max possible length (2 words per char)
        // NB: by unknown reasons, Array is significantly faster for
        //     String.fromCharCode.apply than Uint16Array.
        var utf16buf = new Array(len * 2);

        for (out = 0, i = 0; i < len;) {
          c = buf[i++];
          // quick process ascii
          if (c < 0x80) {
            utf16buf[out++] = c;continue;
          }

          c_len = _utf8len[c];
          // skip 5 & 6 byte codes
          if (c_len > 4) {
            utf16buf[out++] = 0xfffd;i += c_len - 1;continue;
          }

          // apply mask on first byte
          c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
          // join the rest
          while (c_len > 1 && i < len) {
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
          }

          // terminated by end of string?
          if (c_len > 1) {
            utf16buf[out++] = 0xfffd;continue;
          }

          if (c < 0x10000) {
            utf16buf[out++] = c;
          } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
          }
        }

        return buf2binstring(utf16buf, out);
      };

      // Calculate max possible position in utf8 buffer,
      // that will not break sequence. If that's not possible
      // - (very small limits) return max size as is.
      //
      // buf[] - utf8 bytes array
      // max   - length limit (mandatory);
      exports.utf8border = function (buf, max) {
        var pos;

        max = max || buf.length;
        if (max > buf.length) {
          max = buf.length;
        }

        // go back from last position, until start of sequence found
        pos = max - 1;
        while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
          pos--;
        }

        // Fuckup - very small and broken sequence,
        // return max, because we should return something anyway.
        if (pos < 0) {
          return max;
        }

        // If we came to start of buffer - that means vuffer is too small,
        // return max too.
        if (pos === 0) {
          return max;
        }

        return pos + _utf8len[buf[pos]] > max ? pos : max;
      };
    }, { "./common": 1 }], 3: [function (require, module, exports) {
      'use strict';

      // Note: adler32 takes 12% for level 0 and 2% for level 6.
      // It doesn't worth to make additional optimizationa as in original.
      // Small size is preferable.

      function adler32(adler, buf, len, pos) {
        var s1 = adler & 0xffff | 0,
            s2 = adler >>> 16 & 0xffff | 0,
            n = 0;

        while (len !== 0) {
          // Set limit ~ twice less than 5552, to keep
          // s2 in 31-bits, because we force signed ints.
          // in other case %= will fail.
          n = len > 2000 ? 2000 : len;
          len -= n;

          do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
          } while (--n);

          s1 %= 65521;
          s2 %= 65521;
        }

        return s1 | s2 << 16 | 0;
      }

      module.exports = adler32;
    }, {}], 4: [function (require, module, exports) {
      'use strict';

      module.exports = {

        /* Allowed flush values; see deflate() and inflate() below for details */
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,

        /* Return codes for the compression/decompression functions. Negative values
        * are errors, positive values are used for special but normal events.
        */
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        //Z_MEM_ERROR:     -4,
        Z_BUF_ERROR: -5,
        //Z_VERSION_ERROR: -6,

        /* compression levels */
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,

        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,

        /* Possible values of the data_type field (though see inflate()) */
        Z_BINARY: 0,
        Z_TEXT: 1,
        //Z_ASCII:                1, // = Z_TEXT (deprecated)
        Z_UNKNOWN: 2,

        /* The deflate compression method */
        Z_DEFLATED: 8
        //Z_NULL:                 null // Use -1 or null inline, depending on var type
      };
    }, {}], 5: [function (require, module, exports) {
      'use strict';

      // Note: we can't get significant speed boost here.
      // So write code to minimize size - no pregenerated tables
      // and array tools dependencies.


      // Use ordinary array, since untyped makes no boost here

      function makeTable() {
        var c,
            table = [];

        for (var n = 0; n < 256; n++) {
          c = n;
          for (var k = 0; k < 8; k++) {
            c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
          }
          table[n] = c;
        }

        return table;
      }

      // Create table on load. Just 255 signed longs. Not a problem.
      var crcTable = makeTable();

      function crc32(crc, buf, len, pos) {
        var t = crcTable,
            end = pos + len;

        crc ^= -1;

        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
        }

        return crc ^ -1; // >>> 0;
      }

      module.exports = crc32;
    }, {}], 6: [function (require, module, exports) {
      'use strict';

      function GZheader() {
        /* true if compressed data believed to be text */
        this.text = 0;
        /* modification time */
        this.time = 0;
        /* extra flags (not used when writing a gzip file) */
        this.xflags = 0;
        /* operating system */
        this.os = 0;
        /* pointer to extra field or Z_NULL if none */
        this.extra = null;
        /* extra field length (valid if extra != Z_NULL) */
        this.extra_len = 0; // Actually, we don't need it in JS,
        // but leave for few code modifications

        //
        // Setup limits is not necessary because in js we should not preallocate memory
        // for inflate use constant limit in 65536 bytes
        //

        /* space at extra (only when reading header) */
        // this.extra_max  = 0;
        /* pointer to zero-terminated file name or Z_NULL */
        this.name = '';
        /* space at name (only when reading header) */
        // this.name_max   = 0;
        /* pointer to zero-terminated comment or Z_NULL */
        this.comment = '';
        /* space at comment (only when reading header) */
        // this.comm_max   = 0;
        /* true if there was or will be a header crc */
        this.hcrc = 0;
        /* true when done reading gzip header (not used when writing a gzip file) */
        this.done = false;
      }

      module.exports = GZheader;
    }, {}], 7: [function (require, module, exports) {
      'use strict';

      // See state defs from inflate.js

      var BAD = 30; /* got a data error -- remain here until reset */
      var TYPE = 12; /* i: waiting for type bits, including last-flag bit */

      /*
         Decode literal, length, and distance codes and write out the resulting
         literal and match bytes until either not enough input or output is
         available, an end-of-block is encountered, or a data error is encountered.
         When large enough input and output buffers are supplied to inflate(), for
         example, a 16K input buffer and a 64K output buffer, more than 95% of the
         inflate execution time is spent in this routine.
      
         Entry assumptions:
      
              state.mode === LEN
              strm.avail_in >= 6
              strm.avail_out >= 258
              start >= strm.avail_out
              state.bits < 8
      
         On return, state.mode is one of:
      
              LEN -- ran out of enough output space or enough available input
              TYPE -- reached end of block code, inflate() to interpret next block
              BAD -- error in block data
      
         Notes:
      
          - The maximum input bits used by a length/distance pair is 15 bits for the
            length code, 5 bits for the length extra, 15 bits for the distance code,
            and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
            Therefore if strm.avail_in >= 6, then there is enough input to avoid
            checking for available input while decoding.
      
          - The maximum bytes that a single length/distance pair can output is 258
            bytes, which is the maximum length that can be coded.  inflate_fast()
            requires strm.avail_out >= 258 for each loop to avoid checking for
            output space.
       */
      module.exports = function inflate_fast(strm, start) {
        var state;
        var _in; /* local strm.input */
        var last; /* have enough input while in < last */
        var _out; /* local strm.output */
        var beg; /* inflate()'s initial strm.output */
        var end; /* while out < end, enough space available */
        //#ifdef INFLATE_STRICT
        var dmax; /* maximum distance from zlib header */
        //#endif
        var wsize; /* window size or zero if not using window */
        var whave; /* valid bytes in the window */
        var wnext; /* window write index */
        // Use `s_window` instead `window`, avoid conflict with instrumentation tools
        var s_window; /* allocated sliding window, if wsize != 0 */
        var hold; /* local strm.hold */
        var bits; /* local strm.bits */
        var lcode; /* local strm.lencode */
        var dcode; /* local strm.distcode */
        var lmask; /* mask for first level of length codes */
        var dmask; /* mask for first level of distance codes */
        var here; /* retrieved table entry */
        var op; /* code bits, operation, extra bits, or */
        /*  window position, window bytes to copy */
        var len; /* match length, unused bytes */
        var dist; /* match distance */
        var from; /* where to copy match from */
        var from_source;

        var input, output; // JS specific, because we have no pointers

        /* copy state to local variables */
        state = strm.state;
        //here = state.here;
        _in = strm.next_in;
        input = strm.input;
        last = _in + (strm.avail_in - 5);
        _out = strm.next_out;
        output = strm.output;
        beg = _out - (start - strm.avail_out);
        end = _out + (strm.avail_out - 257);
        //#ifdef INFLATE_STRICT
        dmax = state.dmax;
        //#endif
        wsize = state.wsize;
        whave = state.whave;
        wnext = state.wnext;
        s_window = state.window;
        hold = state.hold;
        bits = state.bits;
        lcode = state.lencode;
        dcode = state.distcode;
        lmask = (1 << state.lenbits) - 1;
        dmask = (1 << state.distbits) - 1;

        /* decode literals and length/distances until end-of-block or not enough
           input data or output space */

        top: do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }

          here = lcode[hold & lmask];

          dolen: for (;;) {
            // Goto emulation
            op = here >>> 24 /*here.bits*/;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/;
            if (op === 0) {
              /* literal */
              //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
              //        "inflate:         literal '%c'\n" :
              //        "inflate:         literal 0x%02x\n", here.val));
              output[_out++] = here & 0xffff /*here.val*/;
            } else if (op & 16) {
              /* length base */
              len = here & 0xffff /*here.val*/;
              op &= 15; /* number of extra bits */
              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              }
              //Tracevv((stderr, "inflate:         length %u\n", len));
              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }
              here = dcode[hold & dmask];

              dodist: for (;;) {
                // goto emulation
                op = here >>> 24 /*here.bits*/;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 0xff /*here.op*/;

                if (op & 16) {
                  /* distance base */
                  dist = here & 0xffff /*here.val*/;
                  op &= 15; /* number of extra bits */
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  //#ifdef INFLATE_STRICT
                  if (dist > dmax) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break top;
                  }
                  //#endif
                  hold >>>= op;
                  bits -= op;
                  //Tracevv((stderr, "inflate:         distance %u\n", dist));
                  op = _out - beg; /* max distance in output */
                  if (dist > op) {
                    /* see if copy from window */
                    op = dist - op; /* distance back in window */
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD;
                        break top;
                      }

                      // (!) This block is disabled in zlib defailts,
                      // don't enable it for binary compatibility
                      //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                      //                if (len <= op - whave) {
                      //                  do {
                      //                    output[_out++] = 0;
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //                len -= op - whave;
                      //                do {
                      //                  output[_out++] = 0;
                      //                } while (--op > whave);
                      //                if (op === 0) {
                      //                  from = _out - dist;
                      //                  do {
                      //                    output[_out++] = output[from++];
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //#endif
                    }
                    from = 0; // window index
                    from_source = s_window;
                    if (wnext === 0) {
                      /* very common case */
                      from += wsize - op;
                      if (op < len) {
                        /* some from window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist; /* rest from output */
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      /* wrap around window */
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        /* some from end of window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {
                          /* some from start of window */
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist; /* rest from output */
                          from_source = output;
                        }
                      }
                    } else {
                      /* contiguous in window */
                      from += wnext - op;
                      if (op < len) {
                        /* some from window */
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist; /* rest from output */
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist; /* copy direct from output */
                    do {
                      /* minimum length is three */
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  /* 2nd level distance code */
                  here = dcode[(here & 0xffff) + ( /*here.val*/hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = 'invalid distance code';
                  state.mode = BAD;
                  break top;
                }

                break; // need to emulate goto via "continue"
              }
            } else if ((op & 64) === 0) {
              /* 2nd level length code */
              here = lcode[(here & 0xffff) + ( /*here.val*/hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              /* end-of-block */
              //Tracevv((stderr, "inflate:         end of block\n"));
              state.mode = TYPE;
              break top;
            } else {
              strm.msg = 'invalid literal/length code';
              state.mode = BAD;
              break top;
            }

            break; // need to emulate goto via "continue"
          }
        } while (_in < last && _out < end);

        /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
        len = bits >> 3;
        _in -= len;
        bits -= len << 3;
        hold &= (1 << bits) - 1;

        /* update state and return */
        strm.next_in = _in;
        strm.next_out = _out;
        strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
        strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
        state.hold = hold;
        state.bits = bits;
        return;
      };
    }, {}], 8: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils/common');
      var adler32 = require('./adler32');
      var crc32 = require('./crc32');
      var inflate_fast = require('./inffast');
      var inflate_table = require('./inftrees');

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;

      /* Public constants ==========================================================*/
      /* ===========================================================================*/

      /* Allowed flush values; see deflate() and inflate() below for details */
      //var Z_NO_FLUSH      = 0;
      //var Z_PARTIAL_FLUSH = 1;
      //var Z_SYNC_FLUSH    = 2;
      //var Z_FULL_FLUSH    = 3;
      var Z_FINISH = 4;
      var Z_BLOCK = 5;
      var Z_TREES = 6;

      /* Return codes for the compression/decompression functions. Negative values
       * are errors, positive values are used for special but normal events.
       */
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_NEED_DICT = 2;
      //var Z_ERRNO         = -1;
      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3;
      var Z_MEM_ERROR = -4;
      var Z_BUF_ERROR = -5;
      //var Z_VERSION_ERROR = -6;

      /* The deflate compression method */
      var Z_DEFLATED = 8;

      /* STATES ====================================================================*/
      /* ===========================================================================*/

      var HEAD = 1; /* i: waiting for magic header */
      var FLAGS = 2; /* i: waiting for method and flags (gzip) */
      var TIME = 3; /* i: waiting for modification time (gzip) */
      var OS = 4; /* i: waiting for extra flags and operating system (gzip) */
      var EXLEN = 5; /* i: waiting for extra length (gzip) */
      var EXTRA = 6; /* i: waiting for extra bytes (gzip) */
      var NAME = 7; /* i: waiting for end of file name (gzip) */
      var COMMENT = 8; /* i: waiting for end of comment (gzip) */
      var HCRC = 9; /* i: waiting for header crc (gzip) */
      var DICTID = 10; /* i: waiting for dictionary check value */
      var DICT = 11; /* waiting for inflateSetDictionary() call */
      var TYPE = 12; /* i: waiting for type bits, including last-flag bit */
      var TYPEDO = 13; /* i: same, but skip check to exit inflate on new block */
      var STORED = 14; /* i: waiting for stored size (length and complement) */
      var COPY_ = 15; /* i/o: same as COPY below, but only first time in */
      var COPY = 16; /* i/o: waiting for input or output to copy stored block */
      var TABLE = 17; /* i: waiting for dynamic block table lengths */
      var LENLENS = 18; /* i: waiting for code length code lengths */
      var CODELENS = 19; /* i: waiting for length/lit and distance code lengths */
      var LEN_ = 20; /* i: same as LEN below, but only first time in */
      var LEN = 21; /* i: waiting for length/lit/eob code */
      var LENEXT = 22; /* i: waiting for length extra bits */
      var DIST = 23; /* i: waiting for distance code */
      var DISTEXT = 24; /* i: waiting for distance extra bits */
      var MATCH = 25; /* o: waiting for output space to copy string */
      var LIT = 26; /* o: waiting for output space to write literal */
      var CHECK = 27; /* i: waiting for 32-bit check value */
      var LENGTH = 28; /* i: waiting for 32-bit length (gzip) */
      var DONE = 29; /* finished check, done -- remain here until reset */
      var BAD = 30; /* got a data error -- remain here until reset */
      var MEM = 31; /* got an inflate() memory error -- remain here until reset */
      var SYNC = 32; /* looking for synchronization bytes to restart inflate() */

      /* ===========================================================================*/

      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592;
      //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

      var MAX_WBITS = 15;
      /* 32K LZ77 window */
      var DEF_WBITS = MAX_WBITS;

      function zswap32(q) {
        return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
      }

      function InflateState() {
        this.mode = 0; /* current inflate mode */
        this.last = false; /* true if processing last block */
        this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */
        this.havedict = false; /* true if dictionary provided */
        this.flags = 0; /* gzip header method and flags (0 if zlib) */
        this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */
        this.check = 0; /* protected copy of check value */
        this.total = 0; /* protected copy of output count */
        // TODO: may be {}
        this.head = null; /* where to save gzip header information */

        /* sliding window */
        this.wbits = 0; /* log base 2 of requested window size */
        this.wsize = 0; /* window size or zero if not using window */
        this.whave = 0; /* valid bytes in the window */
        this.wnext = 0; /* window write index */
        this.window = null; /* allocated sliding window, if needed */

        /* bit accumulator */
        this.hold = 0; /* input bit accumulator */
        this.bits = 0; /* number of bits in "in" */

        /* for string and stored block copying */
        this.length = 0; /* literal or length of data to copy */
        this.offset = 0; /* distance back to copy string from */

        /* for table and code decoding */
        this.extra = 0; /* extra bits needed */

        /* fixed and dynamic code tables */
        this.lencode = null; /* starting table for length/literal codes */
        this.distcode = null; /* starting table for distance codes */
        this.lenbits = 0; /* index bits for lencode */
        this.distbits = 0; /* index bits for distcode */

        /* dynamic table building */
        this.ncode = 0; /* number of code length code lengths */
        this.nlen = 0; /* number of length code lengths */
        this.ndist = 0; /* number of distance code lengths */
        this.have = 0; /* number of code lengths in lens[] */
        this.next = null; /* next available space in codes[] */

        this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
        this.work = new utils.Buf16(288); /* work area for code table building */

        /*
         because we don't have pointers in js, we use lencode and distcode directly
         as buffers so we don't need codes
        */
        //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
        this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */
        this.distdyn = null; /* dynamic table for distance codes (JS specific) */
        this.sane = 0; /* if false, allow invalid distance too far */
        this.back = 0; /* bits back of last unprocessed length/lit */
        this.was = 0; /* initial length of match */
      }

      function inflateResetKeep(strm) {
        var state;

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        strm.total_in = strm.total_out = state.total = 0;
        strm.msg = ''; /*Z_NULL*/
        if (state.wrap) {
          /* to support ill-conceived Java test suite */
          strm.adler = state.wrap & 1;
        }
        state.mode = HEAD;
        state.last = 0;
        state.havedict = 0;
        state.dmax = 32768;
        state.head = null /*Z_NULL*/;
        state.hold = 0;
        state.bits = 0;
        //state.lencode = state.distcode = state.next = state.codes;
        state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
        state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

        state.sane = 1;
        state.back = -1;
        //Tracev((stderr, "inflate: reset\n"));
        return Z_OK;
      }

      function inflateReset(strm) {
        var state;

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        state.wsize = 0;
        state.whave = 0;
        state.wnext = 0;
        return inflateResetKeep(strm);
      }

      function inflateReset2(strm, windowBits) {
        var wrap;
        var state;

        /* get the state */
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;

        /* extract wrap request from windowBits parameter */
        if (windowBits < 0) {
          wrap = 0;
          windowBits = -windowBits;
        } else {
          wrap = (windowBits >> 4) + 1;
          if (windowBits < 48) {
            windowBits &= 15;
          }
        }

        /* set number of window bits, free window if different */
        if (windowBits && (windowBits < 8 || windowBits > 15)) {
          return Z_STREAM_ERROR;
        }
        if (state.window !== null && state.wbits !== windowBits) {
          state.window = null;
        }

        /* update state and reset the rest of it */
        state.wrap = wrap;
        state.wbits = windowBits;
        return inflateReset(strm);
      }

      function inflateInit2(strm, windowBits) {
        var ret;
        var state;

        if (!strm) {
          return Z_STREAM_ERROR;
        }
        //strm.msg = Z_NULL;                 /* in case we return an error */

        state = new InflateState();

        //if (state === Z_NULL) return Z_MEM_ERROR;
        //Tracev((stderr, "inflate: allocated\n"));
        strm.state = state;
        state.window = null /*Z_NULL*/;
        ret = inflateReset2(strm, windowBits);
        if (ret !== Z_OK) {
          strm.state = null /*Z_NULL*/;
        }
        return ret;
      }

      function inflateInit(strm) {
        return inflateInit2(strm, DEF_WBITS);
      }

      /*
       Return state with length and distance decoding tables and index sizes set to
       fixed code decoding.  Normally this returns fixed tables from inffixed.h.
       If BUILDFIXED is defined, then instead this routine builds the tables the
       first time it's called, and returns those tables the first time and
       thereafter.  This reduces the size of the code by about 2K bytes, in
       exchange for a little execution time.  However, BUILDFIXED should not be
       used for threaded applications, since the rewriting of the tables and virgin
       may not be thread-safe.
       */
      var virgin = true;

      var lenfix, distfix; // We have no pointers in JS, so keep tables separate

      function fixedtables(state) {
        /* build fixed huffman tables if first call (may not be thread safe) */
        if (virgin) {
          var sym;

          lenfix = new utils.Buf32(512);
          distfix = new utils.Buf32(32);

          /* literal/length table */
          sym = 0;
          while (sym < 144) {
            state.lens[sym++] = 8;
          }
          while (sym < 256) {
            state.lens[sym++] = 9;
          }
          while (sym < 280) {
            state.lens[sym++] = 7;
          }
          while (sym < 288) {
            state.lens[sym++] = 8;
          }

          inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });

          /* distance table */
          sym = 0;
          while (sym < 32) {
            state.lens[sym++] = 5;
          }

          inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });

          /* do this just once */
          virgin = false;
        }

        state.lencode = lenfix;
        state.lenbits = 9;
        state.distcode = distfix;
        state.distbits = 5;
      }

      /*
       Update the window with the last wsize (normally 32K) bytes written before
       returning.  If window does not exist yet, create it.  This is only called
       when a window is already in use, or when output has been written during this
       inflate call, but the end of the deflate stream has not been reached yet.
       It is also called to create a window for dictionary data when a dictionary
       is loaded.
      
       Providing output buffers larger than 32K to inflate() should provide a speed
       advantage, since only the last 32K of output is copied to the sliding window
       upon return from inflate(), and since all distances after the first 32K of
       output will fall in the output data, making match copies simpler and faster.
       The advantage may be dependent on the size of the processor's data caches.
       */
      function updatewindow(strm, src, end, copy) {
        var dist;
        var state = strm.state;

        /* if it hasn't been done already, allocate space for the window */
        if (state.window === null) {
          state.wsize = 1 << state.wbits;
          state.wnext = 0;
          state.whave = 0;

          state.window = new utils.Buf8(state.wsize);
        }

        /* copy state->wsize or less output bytes into the circular window */
        if (copy >= state.wsize) {
          utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
          state.wnext = 0;
          state.whave = state.wsize;
        } else {
          dist = state.wsize - state.wnext;
          if (dist > copy) {
            dist = copy;
          }
          //zmemcpy(state->window + state->wnext, end - copy, dist);
          utils.arraySet(state.window, src, end - copy, dist, state.wnext);
          copy -= dist;
          if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            utils.arraySet(state.window, src, end - copy, copy, 0);
            state.wnext = copy;
            state.whave = state.wsize;
          } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) {
              state.wnext = 0;
            }
            if (state.whave < state.wsize) {
              state.whave += dist;
            }
          }
        }
        return 0;
      }

      function inflate(strm, flush) {
        var state;
        var input, output; // input/output buffers
        var next; /* next input INDEX */
        var put; /* next output INDEX */
        var have, left; /* available input and output */
        var hold; /* bit buffer */
        var bits; /* bits in bit buffer */
        var _in, _out; /* save starting available input and output */
        var copy; /* number of stored or match bytes to copy */
        var from; /* where to copy match bytes from */
        var from_source;
        var here = 0; /* current decoding table entry */
        var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
        //var last;                   /* parent table entry */
        var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
        var len; /* length to copy for repeats, bits to drop */
        var ret; /* return code */
        var hbuf = new utils.Buf8(4); /* buffer for gzip header crc calculation */
        var opts;

        var n; // temporary var for NEED_BITS

        var order = /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

        if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        if (state.mode === TYPE) {
          state.mode = TYPEDO;
        } /* skip check */

        //--- LOAD() ---
        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits;
        //---

        _in = have;
        _out = left;
        ret = Z_OK;

        inf_leave: // goto emulation
        for (;;) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              }
              //=== NEEDBITS(16);
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.wrap & 2 && hold === 0x8b1f) {
                /* gzip header */
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//

                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
              }
              state.flags = 0; /* expect zlib header */
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 0xff) << /*BITS(8)*/8) + (hold >> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = BAD;
                break;
              }
              if ((hold & 0x0f) !== /*BITS(4)*/Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }
              //--- DROPBITS(4) ---//
              hold >>>= 4;
              bits -= 4;
              //---//
              len = (hold & 0x0f) + /*BITS(4)*/8;
              if (state.wbits === 0) {
                state.wbits = len;
              } else if (len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << len;
              //Tracev((stderr, "inflate:   zlib header ok\n"));
              strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
              state.mode = hold & 0x200 ? DICTID : TYPE;
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              break;
            case FLAGS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.flags = hold;
              if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }
              if (state.flags & 0xe000) {
                strm.msg = 'unknown header flags set';
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = TIME;
            /* falls through */
            case TIME:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.head) {
                state.head.time = hold;
              }
              if (state.flags & 0x0200) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32(state.check, hbuf, 4, 0);
                //===
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = OS;
            /* falls through */
            case OS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
              }
              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0);
                //===//
              }
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = EXLEN;
            /* falls through */
            case EXLEN:
              if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 0x0200) {
                  //=== CRC2(state.check, hold);
                  hbuf[0] = hold & 0xff;
                  hbuf[1] = hold >>> 8 & 0xff;
                  state.check = crc32(state.check, hbuf, 2, 0);
                  //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
              } else if (state.head) {
                state.head.extra = null /*Z_NULL*/;
              }
              state.mode = EXTRA;
            /* falls through */
            case EXTRA:
              if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      // Use untyped array for more conveniend processing later
                      state.head.extra = new Array(state.head.extra_len);
                    }
                    utils.arraySet(state.head.extra, input, next,
                    // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    copy,
                    /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                  }
                  if (state.flags & 0x0200) {
                    state.check = crc32(state.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }
                if (state.length) {
                  break inf_leave;
                }
              }
              state.length = 0;
              state.mode = NAME;
            /* falls through */
            case NAME:
              if (state.flags & 0x0800) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  // TODO: 2 or 1 bytes?
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */
                  if (state.head && len && state.length < 65536 /*state.head.name_max*/) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);

                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }
              state.length = 0;
              state.mode = COMMENT;
            /* falls through */
            case COMMENT:
              if (state.flags & 0x1000) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */
                  if (state.head && len && state.length < 65536 /*state.head.comm_max*/) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }
              state.mode = HCRC;
            /* falls through */
            case HCRC:
              if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                if (hold !== (state.check & 0xffff)) {
                  strm.msg = 'header crc mismatch';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
              }
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              strm.adler = state.check = zswap32(hold);
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = DICT;
            /* falls through */
            case DICT:
              if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT;
              }
              strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/;
              state.mode = TYPE;
            /* falls through */
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case TYPEDO:
              if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
              }
              //=== NEEDBITS(3); */
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.last = hold & 0x01 /*BITS(1)*/;
              //--- DROPBITS(1) ---//
              hold >>>= 1;
              bits -= 1;
              //---//

              switch (hold & 0x03) {/*BITS(2)*/case 0:
                  /* stored block */
                  //Tracev((stderr, "inflate:     stored block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = STORED;
                  break;
                case 1:
                  /* fixed block */
                  fixedtables(state);
                  //Tracev((stderr, "inflate:     fixed codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = LEN_; /* decode codes */
                  if (flush === Z_TREES) {
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2;
                    //---//
                    break inf_leave;
                  }
                  break;
                case 2:
                  /* dynamic block */
                  //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = 'invalid block type';
                  state.mode = BAD;
              }
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break;
            case STORED:
              //--- BYTEBITS() ---// /* go to byte boundary */
              hold >>>= bits & 7;
              bits -= bits & 7;
              //---//
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = BAD;
                break;
              }
              state.length = hold & 0xffff;
              //Tracev((stderr, "inflate:       stored length %u\n",
              //        state.length));
              //=== INITBITS();
              hold = 0;
              bits = 0;
              //===//
              state.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case COPY_:
              state.mode = COPY;
            /* falls through */
            case COPY:
              copy = state.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                //--- zmemcpy(put, next, copy); ---
                utils.arraySet(output, input, next, copy, put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              }
              //Tracev((stderr, "inflate:       stored end\n"));
              state.mode = TYPE;
              break;
            case TABLE:
              //=== NEEDBITS(14); */
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              state.nlen = (hold & 0x1f) + /*BITS(5)*/257;
              //--- DROPBITS(5) ---//
              hold >>>= 5;
              bits -= 5;
              //---//
              state.ndist = (hold & 0x1f) + /*BITS(5)*/1;
              //--- DROPBITS(5) ---//
              hold >>>= 5;
              bits -= 5;
              //---//
              state.ncode = (hold & 0x0f) + /*BITS(4)*/4;
              //--- DROPBITS(4) ---//
              hold >>>= 4;
              bits -= 4;
              //---//
              //#ifndef PKZIP_BUG_WORKAROUND
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = BAD;
                break;
              }
              //#endif
              //Tracev((stderr, "inflate:       table sizes ok\n"));
              state.have = 0;
              state.mode = LENLENS;
            /* falls through */
            case LENLENS:
              while (state.have < state.ncode) {
                //=== NEEDBITS(3);
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
                //---//
              }
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              }
              // We have separate tables & no pointers. 2 commented lines below not needed.
              //state.next = state.codes;
              //state.lencode = state.next;
              // Switch to use dynamic table
              state.lencode = state.lendyn;
              state.lenbits = 7;

              opts = { bits: state.lenbits };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;

              if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = BAD;
                break;
              }
              //Tracev((stderr, "inflate:       code lengths ok\n"));
              state.have = 0;
              state.mode = CODELENS;
            /* falls through */
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (;;) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (here_bits <= bits) {
                    break;
                  }
                  //--- PULLBYTE() ---//
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                if (here_val < 16) {
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits;
                  //---//
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    //=== NEEDBITS(here.bits + 2);
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    if (state.have === 0) {
                      strm.msg = 'invalid bit length repeat';
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 0x03); //BITS(2);
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2;
                    //---//
                  } else if (here_val === 17) {
                    //=== NEEDBITS(here.bits + 3);
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    len = 0;
                    copy = 3 + (hold & 0x07); //BITS(3);
                    //--- DROPBITS(3) ---//
                    hold >>>= 3;
                    bits -= 3;
                    //---//
                  } else {
                    //=== NEEDBITS(here.bits + 7);
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    //===//
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    len = 0;
                    copy = 11 + (hold & 0x7f); //BITS(7);
                    //--- DROPBITS(7) ---//
                    hold >>>= 7;
                    bits -= 7;
                    //---//
                  }
                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = 'invalid bit length repeat';
                    state.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }

              /* handle error breaks in while */
              if (state.mode === BAD) {
                break;
              }

              /* check for end-of-block code (better have one) */
              if (state.lens[256] === 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = BAD;
                break;
              }

              /* build code tables -- note: do not change the lenbits or distbits
                 values here (9 and 6) without reading the comments in inftrees.h
                 concerning the ENOUGH constants, which depend on those values */
              state.lenbits = 9;

              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;
              state.lenbits = opts.bits;
              // state.lencode = state.next;

              if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = BAD;
                break;
              }

              state.distbits = 6;
              //state.distcode.copy(state.codes);
              // Switch to use dynamic table
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;
              state.distbits = opts.bits;
              // state.distcode = state.next;

              if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = BAD;
                break;
              }
              //Tracev((stderr, 'inflate:       codes ok\n'));
              state.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case LEN_:
              state.mode = LEN;
            /* falls through */
            case LEN:
              if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inflate_fast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---

                if (state.mode === TYPE) {
                  state.back = -1;
                }
                break;
              }
              state.back = 0;
              for (;;) {
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {
                  break;
                }
                //--- PULLBYTE() ---//
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }
              if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (;;) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> /*BITS(last.bits + last.op)*/last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  //--- PULLBYTE() ---//
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
              }
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            /* falls through */
            case LENEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
              }
              //Tracevv((stderr, "inflate:         length %u\n", state.length));
              state.was = state.length;
              state.mode = DIST;
            /* falls through */
            case DIST:
              for (;;) {
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {
                  break;
                }
                //--- PULLBYTE() ---//
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
                //---//
              }
              if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (;;) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> /*BITS(last.bits + last.op)*/last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  //--- PULLBYTE() ---//
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                  //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
              }
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            /* falls through */
            case DISTEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
              }
              //#ifdef INFLATE_STRICT
              if (state.offset > state.dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
              }
              //#endif
              //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
              state.mode = MATCH;
            /* falls through */
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state.offset > copy) {
                /* copy from window */
                copy = state.offset - copy;
                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break;
                  }
                  // (!) This block is disabled in zlib defailts,
                  // don't enable it for binary compatibility
                  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                  //          Trace((stderr, "inflate.c too far\n"));
                  //          copy -= state.whave;
                  //          if (copy > state.length) { copy = state.length; }
                  //          if (copy > left) { copy = left; }
                  //          left -= copy;
                  //          state.length -= copy;
                  //          do {
                  //            output[put++] = 0;
                  //          } while (--copy);
                  //          if (state.length === 0) { state.mode = LEN; }
                  //          break;
                  //#endif
                }
                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }
                if (copy > state.length) {
                  copy = state.length;
                }
                from_source = state.window;
              } else {
                /* copy from output */
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  // Use '|' insdead of '+' to make sure that result is signed
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) {
                  strm.adler = state.check =
                  /*UPDATE(state.check, put - _out, _out);*/
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = 'incorrect data check';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                //Tracev((stderr, "inflate:   check matches trailer\n"));
              }
              state.mode = LENGTH;
            /* falls through */
            case LENGTH:
              if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                //===//
                if (hold !== (state.total & 0xffffffff)) {
                  strm.msg = 'incorrect length check';
                  state.mode = BAD;
                  break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                //Tracev((stderr, "inflate:   length matches trailer\n"));
              }
              state.mode = DONE;
            /* falls through */
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            /* falls through */
            default:
              return Z_STREAM_ERROR;
          }
        }

        // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

        /*
           Return from inflate(), updating the total counts and the check value.
           If there was no progress during the inflate() call, return a buffer
           error.  Call updatewindow() to create and/or update the window state.
           Note: a memory error from inflate() is non-recoverable.
         */

        //--- RESTORE() ---
        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits;
        //---

        if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
          if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
            state.mode = MEM;
            return Z_MEM_ERROR;
          }
        }
        _in -= strm.avail_in;
        _out -= strm.avail_out;
        strm.total_in += _in;
        strm.total_out += _out;
        state.total += _out;
        if (state.wrap && _out) {
          strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
          state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
        }
        strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
        if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
          ret = Z_BUF_ERROR;
        }
        return ret;
      }

      function inflateEnd(strm) {

        if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
            return Z_STREAM_ERROR;
          }

        var state = strm.state;
        if (state.window) {
          state.window = null;
        }
        strm.state = null;
        return Z_OK;
      }

      function inflateGetHeader(strm, head) {
        var state;

        /* check state */
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }
        state = strm.state;
        if ((state.wrap & 2) === 0) {
          return Z_STREAM_ERROR;
        }

        /* save header structure */
        state.head = head;
        head.done = false;
        return Z_OK;
      }

      function inflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;

        var state;
        var dictid;
        var ret;

        /* check state */
        if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) {
            return Z_STREAM_ERROR;
          }
        state = strm.state;

        if (state.wrap !== 0 && state.mode !== DICT) {
          return Z_STREAM_ERROR;
        }

        /* check for correct dictionary identifier */
        if (state.mode === DICT) {
          dictid = 1; /* adler32(0, null, 0)*/
          /* dictid = adler32(dictid, dictionary, dictLength); */
          dictid = adler32(dictid, dictionary, dictLength, 0);
          if (dictid !== state.check) {
            return Z_DATA_ERROR;
          }
        }
        /* copy dictionary to window using updatewindow(), which will amend the
         existing dictionary if appropriate */
        ret = updatewindow(strm, dictionary, dictLength, dictLength);
        if (ret) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }
        state.havedict = 1;
        // Tracev((stderr, "inflate:   dictionary set\n"));
        return Z_OK;
      }

      exports.inflateReset = inflateReset;
      exports.inflateReset2 = inflateReset2;
      exports.inflateResetKeep = inflateResetKeep;
      exports.inflateInit = inflateInit;
      exports.inflateInit2 = inflateInit2;
      exports.inflate = inflate;
      exports.inflateEnd = inflateEnd;
      exports.inflateGetHeader = inflateGetHeader;
      exports.inflateSetDictionary = inflateSetDictionary;
      exports.inflateInfo = 'pako inflate (from Nodeca project)';

      /* Not implemented
      exports.inflateCopy = inflateCopy;
      exports.inflateGetDictionary = inflateGetDictionary;
      exports.inflateMark = inflateMark;
      exports.inflatePrime = inflatePrime;
      exports.inflateSync = inflateSync;
      exports.inflateSyncPoint = inflateSyncPoint;
      exports.inflateUndermine = inflateUndermine;
      */
    }, { "../utils/common": 1, "./adler32": 3, "./crc32": 5, "./inffast": 7, "./inftrees": 9 }], 9: [function (require, module, exports) {
      'use strict';

      var utils = require('../utils/common');

      var MAXBITS = 15;
      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592;
      //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;

      var lbase = [/* Length codes 257..285 base */
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];

      var lext = [/* Length codes 257..285 extra */
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];

      var dbase = [/* Distance codes 0..29 base */
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];

      var dext = [/* Distance codes 0..29 extra */
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

      module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
        var bits = opts.bits;
        //here = opts.here; /* table entry for duplication */

        var len = 0; /* a code's length in bits */
        var sym = 0; /* index of code symbols */
        var min = 0,
            max = 0; /* minimum and maximum code lengths */
        var root = 0; /* number of index bits for root table */
        var curr = 0; /* number of index bits for current table */
        var drop = 0; /* code bits to drop for sub-table */
        var left = 0; /* number of prefix codes available */
        var used = 0; /* code entries in table used */
        var huff = 0; /* Huffman code */
        var incr; /* for incrementing code, index */
        var fill; /* index for replicating entries */
        var low; /* low bits for current root entry */
        var mask; /* mask for low root bits */
        var next; /* next available space in table */
        var base = null; /* base value table to use */
        var base_index = 0;
        //  var shoextra;    /* extra bits table to use */
        var end; /* use base and extra for symbol > end */
        var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
        var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
        var extra = null;
        var extra_index = 0;

        var here_bits, here_op, here_val;

        /*
         Process a set of code lengths to create a canonical Huffman code.  The
         code lengths are lens[0..codes-1].  Each length corresponds to the
         symbols 0..codes-1.  The Huffman code is generated by first sorting the
         symbols by length from short to long, and retaining the symbol order
         for codes with equal lengths.  Then the code starts with all zero bits
         for the first code of the shortest length, and the codes are integer
         increments for the same length, and zeros are appended as the length
         increases.  For the deflate format, these bits are stored backwards
         from their more natural integer increment ordering, and so when the
         decoding tables are built in the large loop below, the integer codes
         are incremented backwards.
               This routine assumes, but does not check, that all of the entries in
         lens[] are in the range 0..MAXBITS.  The caller must assure this.
         1..MAXBITS is interpreted as that code length.  zero means that that
         symbol does not occur in this code.
               The codes are sorted by computing a count of codes for each length,
         creating from that a table of starting indices for each length in the
         sorted table, and then entering the symbols in order in the sorted
         table.  The sorted table is work[], with that space being provided by
         the caller.
               The length counts are used for other purposes as well, i.e. finding
         the minimum and maximum length codes, determining if there are any
         codes at all, checking for a valid set of lengths, and looking ahead
         at length counts to determine sub-table sizes when building the
         decoding tables.
         */

        /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
        for (len = 0; len <= MAXBITS; len++) {
          count[len] = 0;
        }
        for (sym = 0; sym < codes; sym++) {
          count[lens[lens_index + sym]]++;
        }

        /* bound code lengths, force root to be within code lengths */
        root = bits;
        for (max = MAXBITS; max >= 1; max--) {
          if (count[max] !== 0) {
            break;
          }
        }
        if (root > max) {
          root = max;
        }
        if (max === 0) {
          /* no symbols to code at all */
          //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
          //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
          //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0;

          //table.op[opts.table_index] = 64;
          //table.bits[opts.table_index] = 1;
          //table.val[opts.table_index++] = 0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0;

          opts.bits = 1;
          return 0; /* no symbols, but wait for decoding to report error */
        }
        for (min = 1; min < max; min++) {
          if (count[min] !== 0) {
            break;
          }
        }
        if (root < min) {
          root = min;
        }

        /* check for an over-subscribed or incomplete set of lengths */
        left = 1;
        for (len = 1; len <= MAXBITS; len++) {
          left <<= 1;
          left -= count[len];
          if (left < 0) {
            return -1;
          } /* over-subscribed */
        }
        if (left > 0 && (type === CODES || max !== 1)) {
          return -1; /* incomplete set */
        }

        /* generate offsets into symbol table for each length for sorting */
        offs[1] = 0;
        for (len = 1; len < MAXBITS; len++) {
          offs[len + 1] = offs[len] + count[len];
        }

        /* sort symbols by length, by symbol order within each length */
        for (sym = 0; sym < codes; sym++) {
          if (lens[lens_index + sym] !== 0) {
            work[offs[lens[lens_index + sym]]++] = sym;
          }
        }

        /*
         Create and fill in decoding tables.  In this loop, the table being
         filled is at next and has curr index bits.  The code being used is huff
         with length len.  That code is converted to an index by dropping drop
         bits off of the bottom.  For codes where len is less than drop + curr,
         those top drop + curr - len bits are incremented through all values to
         fill the table with replicated entries.
               root is the number of index bits for the root table.  When len exceeds
         root, sub-tables are created pointed to by the root entry with an index
         of the low root bits of huff.  This is saved in low to check for when a
         new sub-table should be started.  drop is zero when the root table is
         being filled, and drop is root when sub-tables are being filled.
               When a new sub-table is needed, it is necessary to look ahead in the
         code lengths to determine what size sub-table is needed.  The length
         counts are used for this, and so count[] is decremented as codes are
         entered in the tables.
               used keeps track of how many table entries have been allocated from the
         provided *table space.  It is checked for LENS and DIST tables against
         the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
         the initial root table size constants.  See the comments in inftrees.h
         for more information.
               sym increments through all symbols, and the loop terminates when
         all codes of length max, i.e. all codes, have been processed.  This
         routine permits incomplete codes, so another loop after this one fills
         in the rest of the decoding tables with invalid code markers.
         */

        /* set up for code type */
        // poor man optimization - use if-else instead of switch,
        // to avoid deopts in old v8
        if (type === CODES) {
          base = extra = work; /* dummy value--not used */
          end = 19;
        } else if (type === LENS) {
          base = lbase;
          base_index -= 257;
          extra = lext;
          extra_index -= 257;
          end = 256;
        } else {
          /* DISTS */
          base = dbase;
          extra = dext;
          end = -1;
        }

        /* initialize opts for loop */
        huff = 0; /* starting code */
        sym = 0; /* starting code symbol */
        len = min; /* starting code length */
        next = table_index; /* current table to fill in */
        curr = root; /* current table index bits */
        drop = 0; /* current bits to drop from code for index */
        low = -1; /* trigger new sub-table when len > root */
        used = 1 << root; /* use root table entries */
        mask = used - 1; /* mask for comparing low */

        /* check available table space */
        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }

        var i = 0;
        /* process all codes and make table entries */
        for (;;) {
          i++;
          /* create table entry */
          here_bits = len - drop;
          if (work[sym] < end) {
            here_op = 0;
            here_val = work[sym];
          } else if (work[sym] > end) {
            here_op = extra[extra_index + work[sym]];
            here_val = base[base_index + work[sym]];
          } else {
            here_op = 32 + 64; /* end of block */
            here_val = 0;
          }

          /* replicate for those indices with low len bits equal to huff */
          incr = 1 << len - drop;
          fill = 1 << curr;
          min = fill; /* save offset to next table */
          do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
          } while (fill !== 0);

          /* backwards increment the len-bit code huff */
          incr = 1 << len - 1;
          while (huff & incr) {
            incr >>= 1;
          }
          if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
          } else {
            huff = 0;
          }

          /* go to next symbol, update count, len */
          sym++;
          if (--count[len] === 0) {
            if (len === max) {
              break;
            }
            len = lens[lens_index + work[sym]];
          }

          /* create new sub-table if needed */
          if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */
            if (drop === 0) {
              drop = root;
            }

            /* increment past last table */
            next += min; /* here min is 1 << curr */

            /* determine length of next table */
            curr = len - drop;
            left = 1 << curr;
            while (curr + drop < max) {
              left -= count[curr + drop];
              if (left <= 0) {
                break;
              }
              curr++;
              left <<= 1;
            }

            /* check for enough space */
            used += 1 << curr;
            if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
              return 1;
            }

            /* point entry in root table to sub-table */
            low = huff & mask;
            /*table.op[low] = curr;
            table.bits[low] = root;
            table.val[low] = next - opts.table_index;*/
            table[low] = root << 24 | curr << 16 | next - table_index | 0;
          }
        }

        /* fill in remaining table entry if code is incomplete (guaranteed to have
         at most one remaining entry, since if the code is incomplete, the
         maximum code length that was allowed to get this far is one bit) */
        if (huff !== 0) {
          //table.op[next + huff] = 64;            /* invalid code marker */
          //table.bits[next + huff] = len - drop;
          //table.val[next + huff] = 0;
          table[next + huff] = len - drop << 24 | 64 << 16 | 0;
        }

        /* set return parameters */
        //opts.table_index += used;
        opts.bits = root;
        return 0;
      };
    }, { "../utils/common": 1 }], 10: [function (require, module, exports) {
      'use strict';

      module.exports = {
        2: 'need dictionary', /* Z_NEED_DICT       2  */
        1: 'stream end', /* Z_STREAM_END      1  */
        0: '', /* Z_OK              0  */
        '-1': 'file error', /* Z_ERRNO         (-1) */
        '-2': 'stream error', /* Z_STREAM_ERROR  (-2) */
        '-3': 'data error', /* Z_DATA_ERROR    (-3) */
        '-4': 'insufficient memory', /* Z_MEM_ERROR     (-4) */
        '-5': 'buffer error', /* Z_BUF_ERROR     (-5) */
        '-6': 'incompatible version' /* Z_VERSION_ERROR (-6) */
      };
    }, {}], 11: [function (require, module, exports) {
      'use strict';

      function ZStream() {
        /* next input byte */
        this.input = null; // JS specific, because we have no pointers
        this.next_in = 0;
        /* number of bytes available at input */
        this.avail_in = 0;
        /* total number of input bytes read so far */
        this.total_in = 0;
        /* next output byte should be put there */
        this.output = null; // JS specific, because we have no pointers
        this.next_out = 0;
        /* remaining free space at output */
        this.avail_out = 0;
        /* total number of bytes output so far */
        this.total_out = 0;
        /* last error message, NULL if no error */
        this.msg = '' /*Z_NULL*/;
        /* not visible by applications */
        this.state = null;
        /* best guess about the data type: binary or text */
        this.data_type = 2 /*Z_UNKNOWN*/;
        /* adler32 value of the uncompressed data */
        this.adler = 0;
      }

      module.exports = ZStream;
    }, {}], "/lib/inflate.js": [function (require, module, exports) {
      'use strict';

      var zlib_inflate = require('./zlib/inflate');
      var utils = require('./utils/common');
      var strings = require('./utils/strings');
      var c = require('./zlib/constants');
      var msg = require('./zlib/messages');
      var ZStream = require('./zlib/zstream');
      var GZheader = require('./zlib/gzheader');

      var toString = Object.prototype.toString;

      /**
       * class Inflate
       *
       * Generic JS-style wrapper for zlib calls. If you don't need
       * streaming behaviour - use more simple functions: [[inflate]]
       * and [[inflateRaw]].
       **/

      /* internal
       * inflate.chunks -> Array
       *
       * Chunks of output data, if [[Inflate#onData]] not overriden.
       **/

      /**
       * Inflate.result -> Uint8Array|Array|String
       *
       * Uncompressed result, generated by default [[Inflate#onData]]
       * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
       * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
       * push a chunk with explicit flush (call [[Inflate#push]] with
       * `Z_SYNC_FLUSH` param).
       **/

      /**
       * Inflate.err -> Number
       *
       * Error code after inflate finished. 0 (Z_OK) on success.
       * Should be checked if broken data possible.
       **/

      /**
       * Inflate.msg -> String
       *
       * Error message, if [[Inflate.err]] != 0
       **/

      /**
       * new Inflate(options)
       * - options (Object): zlib inflate options.
       *
       * Creates new inflator instance with specified params. Throws exception
       * on bad params. Supported options:
       *
       * - `windowBits`
       * - `dictionary`
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Additional options, for internal needs:
       *
       * - `chunkSize` - size of generated data chunks (16K by default)
       * - `raw` (Boolean) - do raw inflate
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       * By default, when no options set, autodetect deflate/gzip data format via
       * wrapper header.
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
       *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
       *
       * var inflate = new pako.Inflate({ level: 3});
       *
       * inflate.push(chunk1, false);
       * inflate.push(chunk2, true);  // true -> last chunk
       *
       * if (inflate.err) { throw new Error(inflate.err); }
       *
       * console.log(inflate.result);
       * ```
       **/
      function Inflate(options) {
        if (!(this instanceof Inflate)) return new Inflate(options);

        this.options = utils.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ''
        }, options || {});

        var opt = this.options;

        // Force window size for `raw` data, if not set directly,
        // because we have no header for autodetect.
        if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
          opt.windowBits = -opt.windowBits;
          if (opt.windowBits === 0) {
            opt.windowBits = -15;
          }
        }

        // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
        if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
          opt.windowBits += 32;
        }

        // Gzip header has no info about windows size, we can do autodetect only
        // for deflate. So, if window size not set, force it to max when gzip possible
        if (opt.windowBits > 15 && opt.windowBits < 48) {
          // bit 3 (16) -> gzipped data
          // bit 4 (32) -> autodetect gzip/deflate
          if ((opt.windowBits & 15) === 0) {
            opt.windowBits |= 15;
          }
        }

        this.err = 0; // error code, if happens (0 = Z_OK)
        this.msg = ''; // error message
        this.ended = false; // used to avoid multiple onEnd() calls
        this.chunks = []; // chunks of compressed data

        this.strm = new ZStream();
        this.strm.avail_out = 0;

        var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);

        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }

        this.header = new GZheader();

        zlib_inflate.inflateGetHeader(this.strm, this.header);
      }

      /**
       * Inflate#push(data[, mode]) -> Boolean
       * - data (Uint8Array|Array|ArrayBuffer|String): input data
       * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
       *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` meansh Z_FINISH.
       *
       * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
       * new output chunks. Returns `true` on success. The last data block must have
       * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
       * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
       * can use mode Z_SYNC_FLUSH, keeping the decompression context.
       *
       * On fail call [[Inflate#onEnd]] with error code and return false.
       *
       * We strongly recommend to use `Uint8Array` on input for best speed (output
       * format is detected automatically). Also, don't skip last param and always
       * use the same type in your code (boolean or number). That will improve JS speed.
       *
       * For regular `Array`-s make sure all elements are [0..255].
       *
       * ##### Example
       *
       * ```javascript
       * push(chunk, false); // push one of data chunks
       * ...
       * push(chunk, true);  // push last chunk
       * ```
       **/
      Inflate.prototype.push = function (data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var dictionary = this.options.dictionary;
        var status, _mode;
        var next_out_utf8, tail, utf8str;
        var dict;

        // Flag to properly process Z_BUF_ERROR on testing inflate call
        // when we check that all output data was flushed.
        var allowBufError = false;

        if (this.ended) {
          return false;
        }
        _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;

        // Convert data if needed
        if (typeof data === 'string') {
          // Only binary strings can be decompressed on practice
          strm.input = strings.binstring2buf(data);
        } else if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }

        strm.next_in = 0;
        strm.avail_in = strm.input.length;

        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }

          status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH); /* no bad return value */

          if (status === c.Z_NEED_DICT && dictionary) {
            // Convert data if needed
            if (typeof dictionary === 'string') {
              dict = strings.string2buf(dictionary);
            } else if (toString.call(dictionary) === '[object ArrayBuffer]') {
              dict = new Uint8Array(dictionary);
            } else {
              dict = dictionary;
            }

            status = zlib_inflate.inflateSetDictionary(this.strm, dict);
          }

          if (status === c.Z_BUF_ERROR && allowBufError === true) {
            status = c.Z_OK;
            allowBufError = false;
          }

          if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }

          if (strm.next_out) {
            if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {

              if (this.options.to === 'string') {

                next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

                tail = strm.next_out - next_out_utf8;
                utf8str = strings.buf2string(strm.output, next_out_utf8);

                // move tail
                strm.next_out = tail;
                strm.avail_out = chunkSize - tail;
                if (tail) {
                  utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
                }

                this.onData(utf8str);
              } else {
                this.onData(utils.shrinkBuf(strm.output, strm.next_out));
              }
            }
          }

          // When no more input data, we should check that internal inflate buffers
          // are flushed. The only way to do it when avail_out = 0 - run one more
          // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
          // Here we set flag to process this error properly.
          //
          // NOTE. Deflate does not return error in this case and does not needs such
          // logic.
          if (strm.avail_in === 0 && strm.avail_out === 0) {
            allowBufError = true;
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

        if (status === c.Z_STREAM_END) {
          _mode = c.Z_FINISH;
        }

        // Finalize on the last chunk.
        if (_mode === c.Z_FINISH) {
          status = zlib_inflate.inflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === c.Z_OK;
        }

        // callback interim results if Z_SYNC_FLUSH.
        if (_mode === c.Z_SYNC_FLUSH) {
          this.onEnd(c.Z_OK);
          strm.avail_out = 0;
          return true;
        }

        return true;
      };

      /**
       * Inflate#onData(chunk) -> Void
       * - chunk (Uint8Array|Array|String): ouput data. Type of array depends
       *   on js engine support. When string output requested, each chunk
       *   will be string.
       *
       * By default, stores data blocks in `chunks[]` property and glue
       * those in `onEnd`. Override this handler, if you need another behaviour.
       **/
      Inflate.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };

      /**
       * Inflate#onEnd(status) -> Void
       * - status (Number): inflate status. 0 (Z_OK) on success,
       *   other if not.
       *
       * Called either after you tell inflate that the input stream is
       * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
       * or if an error happened. By default - join collected chunks,
       * free memory and fill `results` / `err` properties.
       **/
      Inflate.prototype.onEnd = function (status) {
        // On success - join
        if (status === c.Z_OK) {
          if (this.options.to === 'string') {
            // Glue & convert here, until we teach pako to send
            // utf8 alligned strings to onData
            this.result = this.chunks.join('');
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }
        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };

      /**
       * inflate(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Decompress `data` with inflate/ungzip and `options`. Autodetect
       * format via wrapper header by default. That's why we don't provide
       * separate `ungzip` method.
       *
       * Supported options are:
       *
       * - windowBits
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information.
       *
       * Sugar (options):
       *
       * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
       *   negative windowBits implicitly.
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
       *   , output;
       *
       * try {
       *   output = pako.inflate(input);
       * } catch (err)
       *   console.log(err);
       * }
       * ```
       **/
      function inflate(input, options) {
        var inflator = new Inflate(options);

        inflator.push(input, true);

        // That will never happens, if you don't cheat with options :)
        if (inflator.err) {
          throw inflator.msg;
        }

        return inflator.result;
      }

      /**
       * inflateRaw(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * The same as [[inflate]], but creates raw data, without wrapper
       * (header and adler32 crc).
       **/
      function inflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return inflate(input, options);
      }

      /**
       * ungzip(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Just shortcut to [[inflate]], because it autodetects format
       * by header.content. Done for convenience.
       **/

      exports.Inflate = Inflate;
      exports.inflate = inflate;
      exports.inflateRaw = inflateRaw;
      exports.ungzip = inflate;
    }, { "./utils/common": 1, "./utils/strings": 2, "./zlib/constants": 4, "./zlib/gzheader": 6, "./zlib/inflate": 8, "./zlib/messages": 10, "./zlib/zstream": 11 }] }, {}, [])("/lib/inflate.js");
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
    };
}(),
    RC4 = function () {
    function RC4(a) {
        _classCallCheck(this, RC4), this._key = a;
        var b = new Uint8Array(256),
            c = 0,
            d = 0,
            e = a.length,
            f = 0;
        for (c = 0; 256 > c; c++) {
            b[c] = c;
        }for (c = 0; 256 > c; c++) {
            d = (d + b[c] + a[c % e]) % 256, f = b[c], b[c] = b[d], b[d] = f;
        }this._sbox = b, this._i = this._j = 0;
    }
    return _createClass(RC4, [{
        key: 'encrypt',
        value: function encrypt(a) {
            var b = this._i,
                c = this._j,
                d = this._sbox,
                e = 0,
                f = a.map(function (g, h) {
                return b = (b + 1) % 256, c = (c + d[b]) % 256, e = d[b], d[b] = d[c], d[c] = e, g ^ d[(d[b] + d[c]) % 256];
            });
            return this._i = b, this._j = c, f;
        }
    }, {
        key: 'encryptString',
        value: function encryptString(a) {
            var b = new Uint8Array(utf8.encode(a).split('').map(function (c) {
                return c.charCodeAt(0);
            }));
            return this.encrypt(b);
        }
    }, {
        key: 'decryptString',
        value: function decryptString(a) {
            return utf8.decode(Array.prototype.map.call(this.encrypt(a), function (b) {
                return String.fromCharCode(b);
            }).join(''));
        }
    }]), RC4;
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function');
}
module.exports = RC4;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(13);

var _WebNativeSocket = __webpack_require__(14);

var _WebNativeSocket2 = _interopRequireDefault(_WebNativeSocket);

var _FlashSocket = __webpack_require__(15);

var _FlashSocket2 = _interopRequireDefault(_FlashSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocketAdapter = function () {
    function SocketAdapter(config) {
        _classCallCheck(this, SocketAdapter);

        if (!config.url) {
            console.error(config.url + '\u4E0D\u80FD\u4E3A\u7A7A');
            return false;
        }
        this.socketType = _utils.Browser.Ie && !_utils.Browser.Ie11 && !_utils.Browser.Edge ? 'flash_socket' : localStorage.getItem('socketType') || 'native_socket';
        // 默认配置
        this._defaultConfig = {
            socketReconnectTimeArray: [3000, 6000, 9000], // socket重连的时间间隔，重连次数就是数组的长度
            url: '', // websocket url
            open: function open() {}, // socket 连接成功
            message: function message() {}, // socket 收到消息
            close: function close() {}, // socket 断开链接
            parseMsg4Client: function parseMsg4Client() {}, // 转换服务端发送过来的数据为客户端可读格式
            parseMsg4Server: function parseMsg4Server() {} // 转换客户端要发送的数据为服务端可读格式
        };
        this.cfg = Object.assign({}, this._defaultConfig, config);
        this._init();
        this._connect();
    }

    _createClass(SocketAdapter, [{
        key: '_init',
        value: function _init() {
            console.log('初始化开始');
        }
    }, {
        key: '_connect',
        value: function _connect() {
            //选择socket并初始化
            var Socket = this.socketType == 'native_socket' ? _WebNativeSocket2.default : _FlashSocket2.default;

            this.socketConnection = new Socket({
                url: this.cfg.url,
                onopen: this.open.bind(this),
                onclose: this.close.bind(this),
                onmessage: this.message.bind(this)
            });
        }

        /**Sock重连 */

    }, {
        key: '_reconnect',
        value: function _reconnect() {
            if (this._socketReconnectTime < this.cfg.socketReconnectTimeArray.length) {
                var reconnectDelay = this.cfg.socketReconnectTimeArray[this._socketReconnectTime];
                console.log('\u91CD\u65B0\u8FDE\u63A5\uFF0C\u7B2C' + (this._socketReconnectTime + 1) + '\u6B21\uFF0C\u5C06\u5728' + reconnectDelay + '\u6BEB\u79D2\u540E\u5F00\u59CB');
                this.socketConnection = null;
                setTimeout(this._connect.bind(this), reconnectDelay);
                this._socketReconnectTime++;
            } else {
                console.log("重连失败");
                this._socketReconnectTime = 0;
            }
        }

        /**
         * @method socket连接成功
         * 
         */

    }, {
        key: 'open',
        value: function open() {
            // 重置重连次数
            this._socketReconnectTime = 0;

            this.cfg.open();
        }

        /**
         * @method socket连接关闭
         * @param {String} closeType 关闭的模式
         */

    }, {
        key: 'close',
        value: function close(closeType) {
            this.cfg.close();
            // if (closeType != 'pageUnload') {
            //     this._reconnect();
            // }
        }

        /**
         * @method socket收到消息
         * @param {Object} rawMessage 收到的未经过任何处理的原始消息
         * @description 
         */

    }, {
        key: 'message',
        value: function message(rawMessage) {
            // 转换消息格式为client可读
            var messageForClient = this.cfg.parseMsg4Client(rawMessage);
            // master直接使用messageForClient
            this.cfg.message(messageForClient);
        }

        /**
         * @method 发送消息
         * @param {Object} message 消息体
         */

    }, {
        key: 'send',
        value: function send(message) {
            var messageForServer = this.cfg.parseMsg4Server(message);
            this.socketConnection.send(messageForServer);
        }

        /**
         * @method 销毁连接
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            //其他操作
            // 销毁socket连接
            if (this.socketConnection !== null) {
                this.socketConnection.close();
                this.socketConnection = null;
            }
        }
    }]);

    return SocketAdapter;
}();

exports.default = SocketAdapter;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.replaceLinkBreak = replaceLinkBreak;
var Browser = exports.Browser = {
    Ie: !!window.ActiveXObject || "ActiveXObject" in window, // 包括ie11，之所以不用document.all,是因为ie11假装不支持document.all，返回的是false
    Ie6: !!document.all && !window.XMLHttpRequest,
    Ie7: !!document.all && /msie 7.0/gi.test(window.navigator.appVersion),
    Ie8: !!document.all && /msie 8.0/gi.test(window.navigator.appVersion),
    Ie9: !!document.all && /msie 9.0/gi.test(window.navigator.appVersion),
    Ie10: !!document.all && /msie 10.0/gi.test(window.navigator.appVersion),
    Ie11: !document.all && /Trident\/7/gi.test(window.navigator.userAgent),
    Edge: /Edge/gi.test(window.navigator.userAgent),
    FF: /firefox/gi.test(window.navigator.userAgent),
    Opera: /opera/gi.test(window.navigator.userAgent),
    Chrome: /Chrome/gi.test(window.navigator.userAgent),
    Maxthon: /Maxthon/gi.test(window.navigator.userAgent),
    Ipad: /ipad/gi.test(window.navigator.userAgent)

    /**
     * @static 替换换行符
     * @param {String/Object} msg
     * @returns {Object} 替换后的Object
     */
};function replaceLinkBreak(msg) {
    if ((typeof msg === "undefined" ? "undefined" : _typeof(msg)) == "object") {
        msg = JSON.stringify(msg);
    }
    msg = msg.replace(/\\r\\n/g, '');
    return JSON.parse(msg);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * WebSocket
 */
var WebNativeSocket = function () {
    /**
     * url:socket链接地址
     * onopen{func} -->socket open处理
     * onmessage{func}--> socket onmessage处理
     * onclose{func} --》socket onclose处理
     */

    function WebNativeSocket(config) {
        _classCallCheck(this, WebNativeSocket);

        this.socketCfg = Object.assign({}, config);

        return this.connect();
    }

    _createClass(WebNativeSocket, [{
        key: 'connect',
        value: function connect() {
            var _this = this;

            var ws = new WebSocket(this.socketCfg.url);
            ws.binaryType = 'arraybuffer'; //Note:显示指定收到的是arraybuffer

            ws.onopen = function () {
                return _this.socketCfg.onopen();
            };

            ws.onmessage = function (evt) {
                return _this.socketCfg.onmessage(evt.data);
            };

            ws.onclose = function () {
                return _this.socketCfg.onclose();
            };

            return ws;
        }
    }]);

    return WebNativeSocket;
}();

exports.default = WebNativeSocket;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 负责在页面中嵌入 通信的swf
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _swfobject = __webpack_require__(16);

var _swfobject2 = _interopRequireDefault(_swfobject);

var _FlashSocket = __webpack_require__(17);

var _FlashSocket2 = _interopRequireDefault(_FlashSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashSocket = function () {
    function FlashSocket(config) {
        _classCallCheck(this, FlashSocket);

        this.swfUrl = _FlashSocket2.default;


        // this.swfUrl = socketSwfUrl;
        //生成嵌入swf的容器
        this.swfContainer = document.createElement('div');

        this.swfWidth = '1px';
        this.swfHeight = '1px';
        this.swfContentId = 'FLASH_SOCKET_SWF';
        this.swfObject = null;
        this.socketCfg = Object.assign({}, config);

        this.swfContent.id = this.swfContentId;
        this.swfContent.style.width = this.swfWidth;
        this.swfContent.style.height = this.swfHeight;

        document.body.appendChild(this.swfContainer);

        this._createSwfObject();
    }

    //https://blog.csdn.net/maco_liao/article/details/50945719


    _createClass(FlashSocket, [{
        key: '_createSwfObject',
        value: function _createSwfObject() {
            var swfVersionStr = '9.0.0',
                xiSwfUrlStr = 'expressInstall.swf',
                flashvars = {},
                params = {},
                attributes = {};

            params.base = '.';
            params.wmode = 'transparent';
            params.allowscriptaccess = 'always'; //允许脚本执行
            params.allowfullscreen = 'true';
            params.allowFullScreenInteractive = 'true';

            attributes.id = 'Flash_Socket_Swf';
            attributes.name = 'Flash_Socket_Swf';
            attributes.align = 'middle';

            _swfobject2.default.embedSWF(this.swfUrl, this.swfContentId, this.swfWidth, this.swfHeight, swfVersionStr, flashvars, params, attributes, this._loaded.bind(this));
        }

        /**
         * swf中有对应函数
         * ExternalInterface.addCallback('socketFlash.Command', function(cmd, msg){
         * 
         * })
         */

    }, {
        key: '_loaded',
        value: function _loaded(res) {
            if (res.success) {
                this.swfObject = res.ref;
            } else {
                console.log('加载flash_socket失败');
            }
        }

        //flashSocket加载完成时候调用

    }, {
        key: 'connectServer',
        value: function connectServer() {
            //
            var ip = this.socketCfg.ip;
            var port = this.socketCfg.port;
            if (typeof ip == 'undefined' || typeof port == 'undefined') {
                console.log('传入ip以及端口');
                return;
            }
            var server = {
                'serverIp': ip,
                'serverPort': port
                //通知flash链接socket
            };this.socketCommandFunc("connect_server", JSON.stringify(server));
        }
    }, {
        key: 'send',
        value: function send(msgObject) {
            this.socketCommandFunc("send_data", JSON.stringify(msgObject));
        }
    }, {
        key: 'close',
        value: function close() {
            this.socketCommandFunc("close_socket");
        }

        /**
         * @method 连接socket成功事件
         */

    }, {
        key: 'onopen',
        value: function onopen() {
            //链接成功的初始化操作
            this.socketConfig.onopen();
        }

        /**
         * @method 收到socket消息事件
         */

    }, {
        key: 'onmessage',
        value: function onmessage(msg) {
            this.socketConfig.onmessage(msg);
        }

        /**
         * @method 收到socket关闭事件
         */

    }, {
        key: 'onclose',
        value: function onclose() {
            this.socketConfig.onclose();
        }
    }, {
        key: 'socketCommandFunc',
        get: function get() {
            return this.swfObject["socketFlash.Command"];
        }
    }]);

    return FlashSocket;
}();

exports.default = FlashSocket;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/

var swfobject = function () {

	var UNDEF = "undefined",
	    OBJECT = "object",
	    SHOCKWAVE_FLASH = "Shockwave Flash",
	    SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
	    FLASH_MIME_TYPE = "application/x-shockwave-flash",
	    EXPRESS_INSTALL_ID = "SWFObjectExprInst",
	    ON_READY_STATE_CHANGE = "onreadystatechange",
	    win = window,
	    doc = document,
	    nav = navigator,
	    plugin = false,
	    domLoadFnArr = [main],
	    regObjArr = [],
	    objIdArr = [],
	    listenersArr = [],
	    storedAltContent,
	    storedAltContentId,
	    storedCallbackFn,
	    storedCallbackObj,
	    isDomLoaded = false,
	    isExpressInstallActive = false,
	    dynamicStylesheet,
	    dynamicStylesheetMedia,
	    autoHideShow = true,


	/* Centralized function for browser feature detection
 	- User agent string detection is only used when no good alternative is possible
 	- Is executed directly for optimal performance
 */
	ua = function () {
		var w3cdom = _typeof(doc.getElementById) != UNDEF && _typeof(doc.getElementsByTagName) != UNDEF && _typeof(doc.createElement) != UNDEF,
		    u = nav.userAgent.toLowerCase(),
		    p = nav.platform.toLowerCase(),
		    windows = p ? /win/.test(p) : /win/.test(u),
		    mac = p ? /mac/.test(p) : /mac/.test(u),
		    webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
		    // returns either the webkit version or false if not webkit
		ie = !+"\v1",
		    // feature detection based on Andrea Giammarchi's solution: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
		playerVersion = [0, 0, 0],
		    d = null;
		if (_typeof(nav.plugins) != UNDEF && _typeof(nav.plugins[SHOCKWAVE_FLASH]) == OBJECT) {
			d = nav.plugins[SHOCKWAVE_FLASH].description;
			if (d && !(_typeof(nav.mimeTypes) != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
				// navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
				plugin = true;
				ie = false; // cascaded feature detection for Internet Explorer
				d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
				playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
			}
		} else if (_typeof(win.ActiveXObject) != UNDEF) {
			try {
				var a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
				if (a) {
					// a will return null when ActiveX is disabled
					d = a.GetVariable("$version");
					if (d) {
						ie = true; // cascaded feature detection for Internet Explorer
						d = d.split(" ")[1].split(",");
						playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
			} catch (e) {}
		}
		return { w3: w3cdom, pv: playerVersion, wk: webkit, ie: ie, win: windows, mac: mac };
	}(),


	/* Cross-browser onDomLoad
 	- Will fire an event as soon as the DOM of a web page is loaded
 	- Internet Explorer workaround based on Diego Perini's solution: http://javascript.nwbox.com/IEContentLoaded/
 	- Regular onload serves as fallback
 */
	onDomLoad = function () {
		if (!ua.w3) {
			return;
		}
		if (_typeof(doc.readyState) != UNDEF && doc.readyState == "complete" || _typeof(doc.readyState) == UNDEF && (doc.getElementsByTagName("body")[0] || doc.body)) {
			// function is fired after onload, e.g. when script is inserted dynamically 
			callDomLoadFunctions();
		}
		if (!isDomLoaded) {
			if (_typeof(doc.addEventListener) != UNDEF) {
				doc.addEventListener("DOMContentLoaded", callDomLoadFunctions, false);
			}
			if (ua.ie && ua.win) {
				doc.attachEvent(ON_READY_STATE_CHANGE, function () {
					if (doc.readyState == "complete") {
						doc.detachEvent(ON_READY_STATE_CHANGE, arguments.callee);
						callDomLoadFunctions();
					}
				});
				if (win == top) {
					// if not inside an iframe
					(function () {
						if (isDomLoaded) {
							return;
						}
						try {
							doc.documentElement.doScroll("left");
						} catch (e) {
							setTimeout(arguments.callee, 0);
							return;
						}
						callDomLoadFunctions();
					})();
				}
			}
			if (ua.wk) {
				(function () {
					if (isDomLoaded) {
						return;
					}
					if (!/loaded|complete/.test(doc.readyState)) {
						setTimeout(arguments.callee, 0);
						return;
					}
					callDomLoadFunctions();
				})();
			}
			addLoadEvent(callDomLoadFunctions);
		}
	}();

	function callDomLoadFunctions() {
		if (isDomLoaded) {
			return;
		}
		try {
			// test if we can really add/remove elements to/from the DOM; we don't want to fire it too early
			var t = doc.getElementsByTagName("body")[0].appendChild(createElement("span"));
			t.parentNode.removeChild(t);
		} catch (e) {
			return;
		}
		isDomLoaded = true;
		var dl = domLoadFnArr.length;
		for (var i = 0; i < dl; i++) {
			domLoadFnArr[i]();
		}
	}

	function addDomLoadEvent(fn) {
		if (isDomLoaded) {
			fn();
		} else {
			domLoadFnArr[domLoadFnArr.length] = fn; // Array.push() is only available in IE5.5+
		}
	}

	/* Cross-browser onload
 	- Based on James Edwards' solution: http://brothercake.com/site/resources/scripts/onload/
 	- Will fire an event as soon as a web page including all of its assets are loaded 
  */
	function addLoadEvent(fn) {
		if (_typeof(win.addEventListener) != UNDEF) {
			win.addEventListener("load", fn, false);
		} else if (_typeof(doc.addEventListener) != UNDEF) {
			doc.addEventListener("load", fn, false);
		} else if (_typeof(win.attachEvent) != UNDEF) {
			addListener(win, "onload", fn);
		} else if (typeof win.onload == "function") {
			var fnOld = win.onload;
			win.onload = function () {
				fnOld();
				fn();
			};
		} else {
			win.onload = fn;
		}
	}

	/* Main function
 	- Will preferably execute onDomLoad, otherwise onload (as a fallback)
 */
	function main() {
		if (plugin) {
			testPlayerVersion();
		} else {
			matchVersions();
		}
	}

	/* Detect the Flash Player version for non-Internet Explorer browsers
 	- Detecting the plug-in version via the object element is more precise than using the plugins collection item's description:
 	  a. Both release and build numbers can be detected
 	  b. Avoid wrong descriptions by corrupt installers provided by Adobe
 	  c. Avoid wrong descriptions by multiple Flash Player entries in the plugin Array, caused by incorrect browser imports
 	- Disadvantage of this method is that it depends on the availability of the DOM, while the plugins collection is immediately available
 */
	function testPlayerVersion() {
		var b = doc.getElementsByTagName("body")[0];
		var o = createElement(OBJECT);
		o.setAttribute("type", FLASH_MIME_TYPE);
		var t = b.appendChild(o);
		if (t) {
			var counter = 0;
			(function () {
				if (_typeof(t.GetVariable) != UNDEF) {
					var d = t.GetVariable("$version");
					if (d) {
						d = d.split(" ")[1].split(",");
						ua.pv = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				} else if (counter < 10) {
					counter++;
					setTimeout(arguments.callee, 10);
					return;
				}
				b.removeChild(o);
				t = null;
				matchVersions();
			})();
		} else {
			matchVersions();
		}
	}

	/* Perform Flash Player and SWF version matching; static publishing only
 */
	function matchVersions() {
		var rl = regObjArr.length;
		if (rl > 0) {
			for (var i = 0; i < rl; i++) {
				// for each registered object element
				var id = regObjArr[i].id;
				var cb = regObjArr[i].callbackFn;
				var cbObj = { success: false, id: id };
				if (ua.pv[0] > 0) {
					var obj = getElementById(id);
					if (obj) {
						if (hasPlayerVersion(regObjArr[i].swfVersion) && !(ua.wk && ua.wk < 312)) {
							// Flash Player version >= published SWF version: Houston, we have a match!
							setVisibility(id, true);
							if (cb) {
								cbObj.success = true;
								cbObj.ref = _getObjectById(id);
								cb(cbObj);
							}
						} else if (regObjArr[i].expressInstall && canExpressInstall()) {
							// show the Adobe Express Install dialog if set by the web page author and if supported
							var att = {};
							att.data = regObjArr[i].expressInstall;
							att.width = obj.getAttribute("width") || "0";
							att.height = obj.getAttribute("height") || "0";
							if (obj.getAttribute("class")) {
								att.styleclass = obj.getAttribute("class");
							}
							if (obj.getAttribute("align")) {
								att.align = obj.getAttribute("align");
							}
							// parse HTML object param element's name-value pairs
							var par = {};
							var p = obj.getElementsByTagName("param");
							var pl = p.length;
							for (var j = 0; j < pl; j++) {
								if (p[j].getAttribute("name").toLowerCase() != "movie") {
									par[p[j].getAttribute("name")] = p[j].getAttribute("value");
								}
							}
							_showExpressInstall(att, par, id, cb);
						} else {
							// Flash Player and SWF version mismatch or an older Webkit engine that ignores the HTML object element's nested param elements: display alternative content instead of SWF
							displayAltContent(obj);
							if (cb) {
								cb(cbObj);
							}
						}
					}
				} else {
					// if no Flash Player is installed or the fp version cannot be detected we let the HTML object element do its job (either show a SWF or alternative content)
					setVisibility(id, true);
					if (cb) {
						var o = _getObjectById(id); // test whether there is an HTML object element or not
						if (o && _typeof(o.SetVariable) != UNDEF) {
							cbObj.success = true;
							cbObj.ref = o;
						}
						cb(cbObj);
					}
				}
			}
		}
	}

	function _getObjectById(objectIdStr) {
		var r = null;
		var o = getElementById(objectIdStr);
		if (o && o.nodeName == "OBJECT") {
			if (_typeof(o.SetVariable) != UNDEF) {
				r = o;
			} else {
				var n = o.getElementsByTagName(OBJECT)[0];
				if (n) {
					r = n;
				}
			}
		}
		return r;
	}

	/* Requirements for Adobe Express Install
 	- only one instance can be active at a time
 	- fp 6.0.65 or higher
 	- Win/Mac OS only
 	- no Webkit engines older than version 312
 */
	function canExpressInstall() {
		return !isExpressInstallActive && hasPlayerVersion("6.0.65") && (ua.win || ua.mac) && !(ua.wk && ua.wk < 312);
	}

	/* Show the Adobe Express Install dialog
 	- Reference: http://www.adobe.com/cfusion/knowledgebase/index.cfm?id=6a253b75
 */
	function _showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
		isExpressInstallActive = true;
		storedCallbackFn = callbackFn || null;
		storedCallbackObj = { success: false, id: replaceElemIdStr };
		var obj = getElementById(replaceElemIdStr);
		if (obj) {
			if (obj.nodeName == "OBJECT") {
				// static publishing
				storedAltContent = abstractAltContent(obj);
				storedAltContentId = null;
			} else {
				// dynamic publishing
				storedAltContent = obj;
				storedAltContentId = replaceElemIdStr;
			}
			att.id = EXPRESS_INSTALL_ID;
			if (_typeof(att.width) == UNDEF || !/%$/.test(att.width) && parseInt(att.width, 10) < 310) {
				att.width = "310";
			}
			if (_typeof(att.height) == UNDEF || !/%$/.test(att.height) && parseInt(att.height, 10) < 137) {
				att.height = "137";
			}
			doc.title = doc.title.slice(0, 47) + " - Flash Player Installation";
			var pt = ua.ie && ua.win ? "ActiveX" : "PlugIn",
			    fv = "MMredirectURL=" + encodeURI(window.location).toString().replace(/&/g, "%26") + "&MMplayerType=" + pt + "&MMdoctitle=" + doc.title;
			if (_typeof(par.flashvars) != UNDEF) {
				par.flashvars += "&" + fv;
			} else {
				par.flashvars = fv;
			}
			// IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
			// because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
			if (ua.ie && ua.win && obj.readyState != 4) {
				var newObj = createElement("div");
				replaceElemIdStr += "SWFObjectNew";
				newObj.setAttribute("id", replaceElemIdStr);
				obj.parentNode.insertBefore(newObj, obj); // insert placeholder div that will be replaced by the object element that loads expressinstall.swf
				obj.style.display = "none";
				(function () {
					if (obj.readyState == 4) {
						obj.parentNode.removeChild(obj);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			}
			_createSWF(att, par, replaceElemIdStr);
		}
	}

	/* Functions to abstract and display alternative content
 */
	function displayAltContent(obj) {
		if (ua.ie && ua.win && obj.readyState != 4) {
			// IE only: when a SWF is loading (AND: not available in cache) wait for the readyState of the object element to become 4 before removing it,
			// because you cannot properly cancel a loading SWF file without breaking browser load references, also obj.onreadystatechange doesn't work
			var el = createElement("div");
			obj.parentNode.insertBefore(el, obj); // insert placeholder div that will be replaced by the alternative content
			el.parentNode.replaceChild(abstractAltContent(obj), el);
			obj.style.display = "none";
			(function () {
				if (obj.readyState == 4) {
					obj.parentNode.removeChild(obj);
				} else {
					setTimeout(arguments.callee, 10);
				}
			})();
		} else {
			obj.parentNode.replaceChild(abstractAltContent(obj), obj);
		}
	}

	function abstractAltContent(obj) {
		var ac = createElement("div");
		if (ua.win && ua.ie) {
			ac.innerHTML = obj.innerHTML;
		} else {
			var nestedObj = obj.getElementsByTagName(OBJECT)[0];
			if (nestedObj) {
				var c = nestedObj.childNodes;
				if (c) {
					var cl = c.length;
					for (var i = 0; i < cl; i++) {
						if (!(c[i].nodeType == 1 && c[i].nodeName == "PARAM") && !(c[i].nodeType == 8)) {
							ac.appendChild(c[i].cloneNode(true));
						}
					}
				}
			}
		}
		return ac;
	}

	/* Cross-browser dynamic SWF creation
 */
	function _createSWF(attObj, parObj, id) {
		var r,
		    el = getElementById(id);
		if (ua.wk && ua.wk < 312) {
			return r;
		}
		if (el) {
			if (_typeof(attObj.id) == UNDEF) {
				// if no 'id' is defined for the object element, it will inherit the 'id' from the alternative content
				attObj.id = id;
			}
			if (ua.ie && ua.win) {
				// Internet Explorer + the HTML object element + W3C DOM methods do not combine: fall back to outerHTML
				var att = "";
				for (var i in attObj) {
					if (attObj[i] != Object.prototype[i]) {
						// filter out prototype additions from other potential libraries
						if (i.toLowerCase() == "data") {
							parObj.movie = attObj[i];
						} else if (i.toLowerCase() == "styleclass") {
							// 'class' is an ECMA4 reserved keyword
							att += ' class="' + attObj[i] + '"';
						} else if (i.toLowerCase() != "classid") {
							att += ' ' + i + '="' + attObj[i] + '"';
						}
					}
				}
				var par = "";
				for (var j in parObj) {
					if (parObj[j] != Object.prototype[j]) {
						// filter out prototype additions from other potential libraries
						par += '<param name="' + j + '" value="' + parObj[j] + '" />';
					}
				}
				el.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + att + '>' + par + '</object>';
				objIdArr[objIdArr.length] = attObj.id; // stored to fix object 'leaks' on unload (dynamic publishing only)
				r = getElementById(attObj.id);
			} else {
				// well-behaving browsers
				var o = createElement(OBJECT);
				o.setAttribute("type", FLASH_MIME_TYPE);
				for (var m in attObj) {
					if (attObj[m] != Object.prototype[m]) {
						// filter out prototype additions from other potential libraries
						if (m.toLowerCase() == "styleclass") {
							// 'class' is an ECMA4 reserved keyword
							o.setAttribute("class", attObj[m]);
						} else if (m.toLowerCase() != "classid") {
							// filter out IE specific attribute
							o.setAttribute(m, attObj[m]);
						}
					}
				}
				for (var n in parObj) {
					if (parObj[n] != Object.prototype[n] && n.toLowerCase() != "movie") {
						// filter out prototype additions from other potential libraries and IE specific param element
						createObjParam(o, n, parObj[n]);
					}
				}
				el.parentNode.replaceChild(o, el);
				r = o;
			}
		}
		return r;
	}

	function createObjParam(el, pName, pValue) {
		var p = createElement("param");
		p.setAttribute("name", pName);
		p.setAttribute("value", pValue);
		el.appendChild(p);
	}

	/* Cross-browser SWF removal
 	- Especially needed to safely and completely remove a SWF in Internet Explorer
 */
	function _removeSWF(id) {
		var obj = getElementById(id);
		if (obj && obj.nodeName == "OBJECT") {
			if (ua.ie && ua.win) {
				obj.style.display = "none";
				(function () {
					if (obj.readyState == 4) {
						removeObjectInIE(id);
					} else {
						setTimeout(arguments.callee, 10);
					}
				})();
			} else {
				obj.parentNode.removeChild(obj);
			}
		}
	}

	function removeObjectInIE(id) {
		var obj = getElementById(id);
		if (obj) {
			for (var i in obj) {
				if (typeof obj[i] == "function") {
					obj[i] = null;
				}
			}
			obj.parentNode.removeChild(obj);
		}
	}

	/* Functions to optimize JavaScript compression
 */
	function getElementById(id) {
		var el = null;
		try {
			el = doc.getElementById(id);
		} catch (e) {}
		return el;
	}

	function createElement(el) {
		return doc.createElement(el);
	}

	/* Updated attachEvent function for Internet Explorer
 	- Stores attachEvent information in an Array, so on unload the detachEvent functions can be called to avoid memory leaks
 */
	function addListener(target, eventType, fn) {
		target.attachEvent(eventType, fn);
		listenersArr[listenersArr.length] = [target, eventType, fn];
	}

	/* Flash Player and SWF content version matching
 */
	function hasPlayerVersion(rv) {
		var pv = ua.pv,
		    v = rv.split(".");
		v[0] = parseInt(v[0], 10);
		v[1] = parseInt(v[1], 10) || 0; // supports short notation, e.g. "9" instead of "9.0.0"
		v[2] = parseInt(v[2], 10) || 0;
		return pv[0] > v[0] || pv[0] == v[0] && pv[1] > v[1] || pv[0] == v[0] && pv[1] == v[1] && pv[2] >= v[2] ? true : false;
	}

	/* Cross-browser dynamic CSS creation
 	- Based on Bobby van der Sluis' solution: http://www.bobbyvandersluis.com/articles/dynamicCSS.php
 */
	function _createCSS(sel, decl, media, newStyle) {
		if (ua.ie && ua.mac) {
			return;
		}
		var h = doc.getElementsByTagName("head")[0];
		if (!h) {
			return;
		} // to also support badly authored HTML pages that lack a head element
		var m = media && typeof media == "string" ? media : "screen";
		if (newStyle) {
			dynamicStylesheet = null;
			dynamicStylesheetMedia = null;
		}
		if (!dynamicStylesheet || dynamicStylesheetMedia != m) {
			// create dynamic stylesheet + get a global reference to it
			var s = createElement("style");
			s.setAttribute("type", "text/css");
			s.setAttribute("media", m);
			dynamicStylesheet = h.appendChild(s);
			if (ua.ie && ua.win && _typeof(doc.styleSheets) != UNDEF && doc.styleSheets.length > 0) {
				dynamicStylesheet = doc.styleSheets[doc.styleSheets.length - 1];
			}
			dynamicStylesheetMedia = m;
		}
		// add style rule
		if (ua.ie && ua.win) {
			if (dynamicStylesheet && _typeof(dynamicStylesheet.addRule) == OBJECT) {
				dynamicStylesheet.addRule(sel, decl);
			}
		} else {
			if (dynamicStylesheet && _typeof(doc.createTextNode) != UNDEF) {
				dynamicStylesheet.appendChild(doc.createTextNode(sel + " {" + decl + "}"));
			}
		}
	}

	function setVisibility(id, isVisible) {
		if (!autoHideShow) {
			return;
		}
		var v = isVisible ? "visible" : "hidden";
		if (isDomLoaded && getElementById(id)) {
			getElementById(id).style.visibility = v;
		} else {
			_createCSS("#" + id, "visibility:" + v);
		}
	}

	/* Filter to avoid XSS attacks
 */
	function urlEncodeIfNecessary(s) {
		var regex = /[\\\"<>\.;]/;
		var hasBadChars = regex.exec(s) != null;
		return hasBadChars && (typeof encodeURIComponent === "undefined" ? "undefined" : _typeof(encodeURIComponent)) != UNDEF ? encodeURIComponent(s) : s;
	}

	/* Release memory to avoid memory leaks caused by closures, fix hanging audio/video threads and force open sockets/NetConnections to disconnect (Internet Explorer only)
 */
	var cleanup = function () {
		if (ua.ie && ua.win) {
			window.attachEvent("onunload", function () {
				// remove listeners to avoid memory leaks
				var ll = listenersArr.length;
				for (var i = 0; i < ll; i++) {
					listenersArr[i][0].detachEvent(listenersArr[i][1], listenersArr[i][2]);
				}
				// cleanup dynamically embedded objects to fix audio/video threads and force open sockets and NetConnections to disconnect
				var il = objIdArr.length;
				for (var j = 0; j < il; j++) {
					_removeSWF(objIdArr[j]);
				}
				// cleanup library's main closures to avoid memory leaks
				for (var k in ua) {
					ua[k] = null;
				}
				ua = null;
				for (var l in swfobject) {
					swfobject[l] = null;
				}
				swfobject = null;
			});
		}
	}();

	return {
		/* Public API
  	- Reference: http://code.google.com/p/swfobject/wiki/documentation
  */
		registerObject: function registerObject(objectIdStr, swfVersionStr, xiSwfUrlStr, callbackFn) {
			if (ua.w3 && objectIdStr && swfVersionStr) {
				var regObj = {};
				regObj.id = objectIdStr;
				regObj.swfVersion = swfVersionStr;
				regObj.expressInstall = xiSwfUrlStr;
				regObj.callbackFn = callbackFn;
				regObjArr[regObjArr.length] = regObj;
				setVisibility(objectIdStr, false);
			} else if (callbackFn) {
				callbackFn({ success: false, id: objectIdStr });
			}
		},

		getObjectById: function getObjectById(objectIdStr) {
			if (ua.w3) {
				return _getObjectById(objectIdStr);
			}
		},

		embedSWF: function embedSWF(swfUrlStr, replaceElemIdStr, widthStr, heightStr, swfVersionStr, xiSwfUrlStr, flashvarsObj, parObj, attObj, callbackFn) {
			var callbackObj = { success: false, id: replaceElemIdStr };
			if (ua.w3 && !(ua.wk && ua.wk < 312) && swfUrlStr && replaceElemIdStr && widthStr && heightStr && swfVersionStr) {
				setVisibility(replaceElemIdStr, false);
				addDomLoadEvent(function () {
					widthStr += ""; // auto-convert to string
					heightStr += "";
					var att = {};
					if (attObj && (typeof attObj === "undefined" ? "undefined" : _typeof(attObj)) === OBJECT) {
						for (var i in attObj) {
							// copy object to avoid the use of references, because web authors often reuse attObj for multiple SWFs
							att[i] = attObj[i];
						}
					}
					att.data = swfUrlStr;
					att.width = widthStr;
					att.height = heightStr;
					var par = {};
					if (parObj && (typeof parObj === "undefined" ? "undefined" : _typeof(parObj)) === OBJECT) {
						for (var j in parObj) {
							// copy object to avoid the use of references, because web authors often reuse parObj for multiple SWFs
							par[j] = parObj[j];
						}
					}
					if (flashvarsObj && (typeof flashvarsObj === "undefined" ? "undefined" : _typeof(flashvarsObj)) === OBJECT) {
						for (var k in flashvarsObj) {
							// copy object to avoid the use of references, because web authors often reuse flashvarsObj for multiple SWFs
							if (_typeof(par.flashvars) != UNDEF) {
								par.flashvars += "&" + k + "=" + flashvarsObj[k];
							} else {
								par.flashvars = k + "=" + flashvarsObj[k];
							}
						}
					}
					if (hasPlayerVersion(swfVersionStr)) {
						// create SWF
						var obj = _createSWF(att, par, replaceElemIdStr);
						if (att.id == replaceElemIdStr) {
							setVisibility(replaceElemIdStr, true);
						}
						callbackObj.success = true;
						callbackObj.ref = obj;
					} else if (xiSwfUrlStr && canExpressInstall()) {
						// show Adobe Express Install
						att.data = xiSwfUrlStr;
						_showExpressInstall(att, par, replaceElemIdStr, callbackFn);
						return;
					} else {
						// show alternative content
						setVisibility(replaceElemIdStr, true);
					}
					if (callbackFn) {
						callbackFn(callbackObj);
					}
				});
			} else if (callbackFn) {
				callbackFn(callbackObj);
			}
		},

		switchOffAutoHideShow: function switchOffAutoHideShow() {
			autoHideShow = false;
		},

		ua: ua,

		getFlashPlayerVersion: function getFlashPlayerVersion() {
			return { major: ua.pv[0], minor: ua.pv[1], release: ua.pv[2] };
		},

		hasFlashPlayerVersion: hasPlayerVersion,

		createSWF: function createSWF(attObj, parObj, replaceElemIdStr) {
			if (ua.w3) {
				return _createSWF(attObj, parObj, replaceElemIdStr);
			} else {
				return undefined;
			}
		},

		showExpressInstall: function showExpressInstall(att, par, replaceElemIdStr, callbackFn) {
			if (ua.w3 && canExpressInstall()) {
				_showExpressInstall(att, par, replaceElemIdStr, callbackFn);
			}
		},

		removeSWF: function removeSWF(objElemIdStr) {
			if (ua.w3) {
				_removeSWF(objElemIdStr);
			}
		},

		createCSS: function createCSS(selStr, declStr, mediaStr, newStyleBoolean) {
			if (ua.w3) {
				_createCSS(selStr, declStr, mediaStr, newStyleBoolean);
			}
		},

		addDomLoadEvent: addDomLoadEvent,

		addLoadEvent: addLoadEvent,

		getQueryParamValue: function getQueryParamValue(param) {
			var q = doc.location.search || doc.location.hash;
			if (q) {
				if (/\?/.test(q)) {
					q = q.split("?")[1];
				} // strip question mark
				if (param == null) {
					return urlEncodeIfNecessary(q);
				}
				var pairs = q.split("&");
				for (var i = 0; i < pairs.length; i++) {
					if (pairs[i].substring(0, pairs[i].indexOf("=")) == param) {
						return urlEncodeIfNecessary(pairs[i].substring(pairs[i].indexOf("=") + 1));
					}
				}
			}
			return "";
		},

		// For internal usage only
		expressInstallCallback: function expressInstallCallback() {
			if (isExpressInstallActive) {
				var obj = getElementById(EXPRESS_INSTALL_ID);
				if (obj && storedAltContent) {
					obj.parentNode.replaceChild(storedAltContent, obj);
					if (storedAltContentId) {
						setVisibility(storedAltContentId, true);
						if (ua.ie && ua.win) {
							storedAltContent.style.display = "block";
						}
					}
					if (storedCallbackFn) {
						storedCallbackFn(storedCallbackObj);
					}
				}
				isExpressInstallActive = false;
			}
		}
	};
}();

module.exports = swfobject;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/FlashSocket.279833c7.swf";

/***/ })
/******/ ]);