'use strict';
var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 'value' in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
            }
        }
        return function (Constructor, protoProps, staticProps) {
            return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor
        }
    }(),
    RC4 = function () {
        function RC4(a) {
            _classCallCheck(this, RC4), this._key = a;
            var b = new Uint8Array(256),
                c = 0,
                d = 0,
                e = a.length,
                f = 0;
            for (c = 0; 256 > c; c++) b[c] = c;
            for (c = 0; 256 > c; c++) d = (d + b[c] + a[c % e]) % 256, f = b[c], b[c] = b[d], b[d] = f;
            this._sbox = b, this._i = this._j = 0
        }
        return _createClass(RC4, [{
            key: 'encrypt',
            value: function encrypt(a) {
                var b = this._i,
                    c = this._j,
                    d = this._sbox,
                    e = 0,
                    f = a.map(function (g, h) {
                        return b = (b + 1) % 256, c = (c + d[b]) % 256, e = d[b], d[b] = d[c], d[c] = e, g ^ d[(d[b] + d[c]) % 256]
                    });
                return this._i = b, this._j = c, f
            }
        }, {
            key: 'encryptString',
            value: function encryptString(a) {
                var b = new Uint8Array(utf8.encode(a).split('').map(function (c) {
                    return c.charCodeAt(0)
                }));
                return this.encrypt(b)
            }
        }, {
            key: 'decryptString',
            value: function decryptString(a) {
                return utf8.decode(Array.prototype.map.call(this.encrypt(a), function (b) {
                    return String.fromCharCode(b)
                }).join(''))
            }
        }]), RC4
    }();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError('Cannot call a class as a function')
}
module.exports = RC4;