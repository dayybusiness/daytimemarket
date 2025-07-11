/*
     *   .-.      Messenger Loader
     * `-'-'  _   Copyright 2022 Userlike
     *    _  | |  https://userlike.com
     *   | | | |
     *   | | | |  app key:    39a2e506-3a40-3220-b3a3-d1f77847594f
     *   \ '_' /  widget key: 674692748a5546f49e274c2525ea2d9d93295675b653408ab21db7045e4512cb
     *    \___/
     */
( () => {
    "use strict";
    var e = {
        423: (e, t, n) => {
            e = n.hmd(e);
            !function(e) {
                var t, n = e.Symbol;
                if ("function" == typeof n)
                    if (n.observable)
                        t = n.observable;
                    else {
                        t = "function" == typeof n.for ? n.for("https://github.com/benlesh/symbol-observable") : n("https://github.com/benlesh/symbol-observable");
                        try {
                            n.observable = t
                        } catch (e) {}
                    }
                else
                    t = "@@observable"
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : e)
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var u = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](u, u.exports, n),
        u.loaded = !0,
        u.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.hmd = e => ((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    n(423),
    ( () => {
        var e = function() {
            return e = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            e.apply(this, arguments)
        }
          , t = function(e, t) {
            void 0 === t && (t = window),
            t.dispatchEvent(new CustomEvent("userlike:messenger:script",{
                detail: e
            }))
        };
        function n(t, n) {
            return void 0 === n && (n = window),
            !0 === function(t) {
                var n = t;
                return n.__USERLIKE_PURE__ = e({}, n.__USERLIKE_PURE__),
                n
            }(n).__USERLIKE_PURE__[t]
        }
        function r(e) {
            return e ? (Number(e) ^ 16 * Math.random() >> Number(e) / 4).toString(16) : "".concat(1e7, "-").concat(1e3, "-").concat(4e3, "-").concat(8e3, "-").concat(1e11).replace(/[018]/g, r)
        }
        var o = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, u) {
                function i(e) {
                    try {
                        a(r.next(e))
                    } catch (e) {
                        u(e)
                    }
                }
                function c(e) {
                    try {
                        a(r.throw(e))
                    } catch (e) {
                        u(e)
                    }
                }
                function a(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, c)
                }
                a((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , u = function(e, t) {
            var n, r, o, u, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return u = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                return this
            }
            ),
            u;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u && (u = 0,
                        c[0] && (i = 0)),
                        i; )
                            try {
                                if (n = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = i.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        i.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                        i.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2],
                                        i.ops.push(c);
                                        break
                                    }
                                    o[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                c = t.call(e, i)
                            } catch (e) {
                                c = [6, e],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        }
          , i = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, u) {
                function i(e) {
                    try {
                        a(r.next(e))
                    } catch (e) {
                        u(e)
                    }
                }
                function c(e) {
                    try {
                        a(r.throw(e))
                    } catch (e) {
                        u(e)
                    }
                }
                function a(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, c)
                }
                a((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , c = function(e, t) {
            var n, r, o, u, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return u = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (u[Symbol.iterator] = function() {
                return this
            }
            ),
            u;
            function c(c) {
                return function(a) {
                    return function(c) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; u && (u = 0,
                        c[0] && (i = 0)),
                        i; )
                            try {
                                if (n = 1,
                                r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, c[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (c = [2 & c[0], o.value]),
                                c[0]) {
                                case 0:
                                case 1:
                                    o = c;
                                    break;
                                case 4:
                                    return i.label++,
                                    {
                                        value: c[1],
                                        done: !1
                                    };
                                case 5:
                                    i.label++,
                                    r = c[1],
                                    c = [0];
                                    continue;
                                case 7:
                                    c = i.ops.pop(),
                                    i.trys.pop();
                                    continue;
                                default:
                                    if (!(o = i.trys,
                                    (o = o.length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                        i = 0;
                                        continue
                                    }
                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                        i.label = c[1];
                                        break
                                    }
                                    if (6 === c[0] && i.label < o[1]) {
                                        i.label = o[1],
                                        o = c;
                                        break
                                    }
                                    if (o && i.label < o[2]) {
                                        i.label = o[2],
                                        i.ops.push(c);
                                        break
                                    }
                                    o[2] && i.ops.pop(),
                                    i.trys.pop();
                                    continue
                                }
                                c = t.call(e, i)
                            } catch (e) {
                                c = [6, e],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & c[0])
                            throw c[1];
                        return {
                            value: c[0] ? c[1] : void 0,
                            done: !0
                        }
                    }([c, a])
                }
            }
        };
        function a(e, t, n) {
            return (i = navigator.userAgent).indexOf("MSIE") > 0 || i.indexOf("Trident") > 0 ? Promise.reject(new Error("Browser is not suported by Userlike messenger.")) : Promise.all([l(n), o(void 0, void 0, void 0, (function() {
                var e;
                return u(this, (function(t) {
                    return (e = document.createElement("iframe")).id = "userlike-frame-".concat(r()),
                    e.title = "Empty frame",
                    e.setAttribute("aria-hidden", "true"),
                    e.tabIndex = -1,
                    e.style.setProperty("position", "absolute", "important"),
                    e.style.setProperty("opacity", "0", "important"),
                    e.style.setProperty("height", "1px", "important"),
                    e.style.setProperty("top", "0", "important"),
                    e.style.setProperty("left", "0", "important"),
                    e.style.setProperty("border", "none", "important"),
                    e.style.setProperty("display", "block", "important"),
                    e.style.setProperty("z-index", "-1", "important"),
                    [2, new Promise((function(t) {
                        e.addEventListener("load", (function() {
                            return t(e)
                        }
                        )),
                        document.body.appendChild(e)
                    }
                    ))]
                }
                ))
            }
            ))]).then((function(n) {
                var r = n[0]
                  , o = n[1];
                return new Promise((function(n, u) {
                    var i = o.contentWindow
                      , c = o.contentDocument;
                    if (!i || !c)
                        return Promise.reject(new Error("iframe did not initialize"));
                    var a = r.length - 1;
                    r.slice(0, a).forEach((function(e) {
                        s(c, e)
                    }
                    )),
                    s(c, r[a], (function() {
                        (0,
                        i.run)({
                            widget_key: t
                        }, e).then((function(e) {
                            return n(e)
                        }
                        )).catch(u)
                    }
                    ))
                }
                ))
            }
            ));
            var i
        }
        function s(e, t, n) {
            var r = e.createElement("script");
            r.async = !1,
            r.src = t,
            n && (r.onload = n),
            e.head.appendChild(r)
        }
        function l(e) {
            return i(this, void 0, void 0, (function() {
                var t, n;
                return c(this, (function(r) {
                    switch (r.label) {
                    case 0:
                        return t = function(e) {
                            void 0 === e && (e = "https://userlike-cdn-widgets.s3-eu-west-1.amazonaws.com");
                            return "".concat(e, "/umm-manifest.json")
                        }(e),
                        [4, fetch(t, {
                            mode: "cors"
                        })];
                    case 1:
                        return (n = r.sent()).ok ? [2, n.json()] : [2, Promise.reject(new Error(n.statusText))]
                    }
                }
                ))
            }
            ))
        }
        function p(e) {
            return e
        }
        var f = p;
        function d(e, t, n, r, o, u, i, c, a) {
            switch (arguments.length) {
            case 1:
                return e;
            case 2:
                return function() {
                    return t(e.apply(this, arguments))
                }
                ;
            case 3:
                return function() {
                    return n(t(e.apply(this, arguments)))
                }
                ;
            case 4:
                return function() {
                    return r(n(t(e.apply(this, arguments))))
                }
                ;
            case 5:
                return function() {
                    return o(r(n(t(e.apply(this, arguments)))))
                }
                ;
            case 6:
                return function() {
                    return u(o(r(n(t(e.apply(this, arguments))))))
                }
                ;
            case 7:
                return function() {
                    return i(u(o(r(n(t(e.apply(this, arguments)))))))
                }
                ;
            case 8:
                return function() {
                    return c(i(u(o(r(n(t(e.apply(this, arguments))))))))
                }
                ;
            case 9:
                return function() {
                    return a(c(i(u(o(r(n(t(e.apply(this, arguments)))))))))
                }
            }
        }
        var _ = {
            equals: function(e, t) {
                return e === t
            }
        }
          , y = {
            equals: _.equals,
            compare: function(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }
        };
        function m(e) {
            return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"]
        }
        function h(e) {
            return function t(n) {
                return 0 === arguments.length || m(n) ? t : e.apply(this, arguments)
            }
        }
        var g = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
        const A = h("function" == typeof String.prototype.trim && !g.trim() && "​".trim() ? function(e) {
            return e.trim()
        }
        : function(e) {
            var t = new RegExp("^[" + g + "][" + g + "]*")
              , n = new RegExp("[" + g + "][" + g + "]*$");
            return e.replace(t, "").replace(n, "")
        }
        );
        function P(e) {
            return function t(n, r) {
                switch (arguments.length) {
                case 0:
                    return t;
                case 1:
                    return m(n) ? t : h((function(t) {
                        return e(n, t)
                    }
                    ));
                default:
                    return m(n) && m(r) ? t : m(n) ? h((function(t) {
                        return e(t, r)
                    }
                    )) : m(r) ? h((function(t) {
                        return e(n, t)
                    }
                    )) : e(n, r)
                }
            }
        }
        function b(e, t) {
            switch (e) {
            case 0:
                return function() {
                    return t.apply(this, arguments)
                }
                ;
            case 1:
                return function(e) {
                    return t.apply(this, arguments)
                }
                ;
            case 2:
                return function(e, n) {
                    return t.apply(this, arguments)
                }
                ;
            case 3:
                return function(e, n, r) {
                    return t.apply(this, arguments)
                }
                ;
            case 4:
                return function(e, n, r, o) {
                    return t.apply(this, arguments)
                }
                ;
            case 5:
                return function(e, n, r, o, u) {
                    return t.apply(this, arguments)
                }
                ;
            case 6:
                return function(e, n, r, o, u, i) {
                    return t.apply(this, arguments)
                }
                ;
            case 7:
                return function(e, n, r, o, u, i, c) {
                    return t.apply(this, arguments)
                }
                ;
            case 8:
                return function(e, n, r, o, u, i, c, a) {
                    return t.apply(this, arguments)
                }
                ;
            case 9:
                return function(e, n, r, o, u, i, c, a, s) {
                    return t.apply(this, arguments)
                }
                ;
            case 10:
                return function(e, n, r, o, u, i, c, a, s, l) {
                    return t.apply(this, arguments)
                }
                ;
            default:
                throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
            }
        }
        function E(e, t, n) {
            return function() {
                for (var r = [], o = 0, u = e, i = 0; i < t.length || o < arguments.length; ) {
                    var c;
                    i < t.length && (!m(t[i]) || o >= arguments.length) ? c = t[i] : (c = arguments[o],
                    o += 1),
                    r[i] = c,
                    m(c) || (u -= 1),
                    i += 1
                }
                return u <= 0 ? n.apply(this, r) : b(u, E(e, r, n))
            }
        }
        const U = P((function(e, t) {
            return 1 === e ? h(t) : b(e, E(e, [], t))
        }
        ));
        function v(e) {
            for (var t, n = []; !(t = e.next()).done; )
                n.push(t.value);
            return n
        }
        function I(e, t, n) {
            for (var r = 0, o = n.length; r < o; ) {
                if (e(t, n[r]))
                    return !0;
                r += 1
            }
            return !1
        }
        function O(e, t) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        const w = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
        ;
        var C = Object.prototype.toString;
        const L = function() {
            return "[object Arguments]" === C.call(arguments) ? function(e) {
                return "[object Arguments]" === C.call(e)
            }
            : function(e) {
                return O("callee", e)
            }
        }();
        var N = !{
            toString: null
        }.propertyIsEnumerable("toString")
          , D = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
          , S = function() {
            return arguments.propertyIsEnumerable("length")
        }()
          , M = function(e, t) {
            for (var n = 0; n < e.length; ) {
                if (e[n] === t)
                    return !0;
                n += 1
            }
            return !1
        };
        const k = "function" != typeof Object.keys || S ? h((function(e) {
            if (Object(e) !== e)
                return [];
            var t, n, r = [], o = S && L(e);
            for (t in e)
                !O(t, e) || o && "length" === t || (r[r.length] = t);
            if (N)
                for (n = D.length - 1; n >= 0; )
                    O(t = D[n], e) && !M(r, t) && (r[r.length] = t),
                    n -= 1;
            return r
        }
        )) : h((function(e) {
            return Object(e) !== e ? [] : Object.keys(e)
        }
        ));
        const R = h((function(e) {
            return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1)
        }
        ));
        function T(e, t, n, r) {
            var o = v(e);
            function u(e, t) {
                return G(e, t, n.slice(), r.slice())
            }
            return !I((function(e, t) {
                return !I(u, t, e)
            }
            ), v(t), o)
        }
        function G(e, t, n, r) {
            if (w(e, t))
                return !0;
            var o = R(e);
            if (o !== R(t))
                return !1;
            if (null == e || null == t)
                return !1;
            if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof t["fantasy-land/equals"])
                return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);
            if ("function" == typeof e.equals || "function" == typeof t.equals)
                return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);
            switch (o) {
            case "Arguments":
            case "Array":
            case "Object":
                if ("function" == typeof e.constructor && "Promise" === function(e) {
                    var t = String(e).match(/^function (\w*)/);
                    return null == t ? "" : t[1]
                }(e.constructor))
                    return e === t;
                break;
            case "Boolean":
            case "Number":
            case "String":
                if (typeof e != typeof t || !w(e.valueOf(), t.valueOf()))
                    return !1;
                break;
            case "Date":
                if (!w(e.valueOf(), t.valueOf()))
                    return !1;
                break;
            case "Error":
                return e.name === t.name && e.message === t.message;
            case "RegExp":
                if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode)
                    return !1
            }
            for (var u = n.length - 1; u >= 0; ) {
                if (n[u] === e)
                    return r[u] === t;
                u -= 1
            }
            switch (o) {
            case "Map":
                return e.size === t.size && T(e.entries(), t.entries(), n.concat([e]), r.concat([t]));
            case "Set":
                return e.size === t.size && T(e.values(), t.values(), n.concat([e]), r.concat([t]));
            case "Arguments":
            case "Array":
            case "Object":
            case "Boolean":
            case "Number":
            case "String":
            case "Date":
            case "Error":
            case "RegExp":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float32Array":
            case "Float64Array":
            case "ArrayBuffer":
                break;
            default:
                return !1
            }
            var i = k(e);
            if (i.length !== k(t).length)
                return !1;
            var c = n.concat([e])
              , a = r.concat([t]);
            for (u = i.length - 1; u >= 0; ) {
                var s = i[u];
                if (!O(s, t) || !G(t[s], e[s], c, a))
                    return !1;
                u -= 1
            }
            return !0
        }
        var B = P((function(e, t) {
            return G(e, t, [], [])
        }
        ));
        const j = B;
        function x(e, t) {
            return function(e, t, n) {
                var r, o;
                if ("function" == typeof e.indexOf)
                    switch (typeof t) {
                    case "number":
                        if (0 === t) {
                            for (r = 1 / t; n < e.length; ) {
                                if (0 === (o = e[n]) && 1 / o === r)
                                    return n;
                                n += 1
                            }
                            return -1
                        }
                        if (t != t) {
                            for (; n < e.length; ) {
                                if ("number" == typeof (o = e[n]) && o != o)
                                    return n;
                                n += 1
                            }
                            return -1
                        }
                        return e.indexOf(t, n);
                    case "string":
                    case "boolean":
                    case "function":
                    case "undefined":
                        return e.indexOf(t, n);
                    case "object":
                        if (null === t)
                            return e.indexOf(t, n)
                    }
                for (; n < e.length; ) {
                    if (j(e[n], t))
                        return n;
                    n += 1
                }
                return -1
            }(t, e, 0) >= 0
        }
        function H(e, t) {
            for (var n = 0, r = t.length, o = Array(r); n < r; )
                o[n] = e(t[n]),
                n += 1;
            return o
        }
        function K(e) {
            return '"' + e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"'
        }
        var W = function(e) {
            return (e < 10 ? "0" : "") + e
        }
          , q = "function" == typeof Date.prototype.toISOString ? function(e) {
            return e.toISOString()
        }
        : function(e) {
            return e.getUTCFullYear() + "-" + W(e.getUTCMonth() + 1) + "-" + W(e.getUTCDate()) + "T" + W(e.getUTCHours()) + ":" + W(e.getUTCMinutes()) + ":" + W(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
        }
        ;
        const Y = q;
        const z = Array.isArray || function(e) {
            return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e)
        }
        ;
        function F(e, t, n) {
            return function() {
                if (0 === arguments.length)
                    return n();
                var r = Array.prototype.slice.call(arguments, 0)
                  , o = r.pop();
                if (!z(o)) {
                    for (var u = 0; u < e.length; ) {
                        if ("function" == typeof o[e[u]])
                            return o[e[u]].apply(o, r);
                        u += 1
                    }
                    if (function(e) {
                        return null != e && "function" == typeof e["@@transducer/step"]
                    }(o))
                        return t.apply(null, r)(o)
                }
                return n.apply(this, arguments)
            }
        }
        const V = h((function(e) {
            return !!z(e) || !!e && ("object" == typeof e && (!function(e) {
                return "[object String]" === Object.prototype.toString.call(e)
            }(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && (e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1)))))
        }
        ));
        var X = function() {
            function e(e) {
                this.f = e
            }
            return e.prototype["@@transducer/init"] = function() {
                throw new Error("init not implemented on XWrap")
            }
            ,
            e.prototype["@@transducer/result"] = function(e) {
                return e
            }
            ,
            e.prototype["@@transducer/step"] = function(e, t) {
                return this.f(e, t)
            }
            ,
            e
        }();
        const Q = P((function(e, t) {
            return b(e.length, (function() {
                return e.apply(t, arguments)
            }
            ))
        }
        ));
        function $(e, t, n) {
            for (var r = n.next(); !r.done; ) {
                if ((t = e["@@transducer/step"](t, r.value)) && t["@@transducer/reduced"]) {
                    t = t["@@transducer/value"];
                    break
                }
                r = n.next()
            }
            return e["@@transducer/result"](t)
        }
        function J(e, t, n, r) {
            return e["@@transducer/result"](n[r](Q(e["@@transducer/step"], e), t))
        }
        var Z = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
        function ee(e, t, n) {
            if ("function" == typeof e && (e = function(e) {
                return new X(e)
            }(e)),
            V(n))
                return function(e, t, n) {
                    for (var r = 0, o = n.length; r < o; ) {
                        if ((t = e["@@transducer/step"](t, n[r])) && t["@@transducer/reduced"]) {
                            t = t["@@transducer/value"];
                            break
                        }
                        r += 1
                    }
                    return e["@@transducer/result"](t)
                }(e, t, n);
            if ("function" == typeof n["fantasy-land/reduce"])
                return J(e, t, n, "fantasy-land/reduce");
            if (null != n[Z])
                return $(e, t, n[Z]());
            if ("function" == typeof n.next)
                return $(e, t, n);
            if ("function" == typeof n.reduce)
                return J(e, t, n, "reduce");
            throw new TypeError("reduce: list must be array or iterable")
        }
        const te = function() {
            return this.xf["@@transducer/init"]()
        }
          , ne = function(e) {
            return this.xf["@@transducer/result"](e)
        };
        var re = function() {
            function e(e, t) {
                this.xf = t,
                this.f = e
            }
            return e.prototype["@@transducer/init"] = te,
            e.prototype["@@transducer/result"] = ne,
            e.prototype["@@transducer/step"] = function(e, t) {
                return this.f(t) ? this.xf["@@transducer/step"](e, t) : e
            }
            ,
            e
        }()
          , oe = P((function(e, t) {
            return new re(e,t)
        }
        ));
        const ue = P(F(["filter"], oe, (function(e, t) {
            return n = t,
            "[object Object]" === Object.prototype.toString.call(n) ? ee((function(n, r) {
                return e(t[r]) && (n[r] = t[r]),
                n
            }
            ), {}, k(t)) : function(e, t) {
                for (var n = 0, r = t.length, o = []; n < r; )
                    e(t[n]) && (o[o.length] = t[n]),
                    n += 1;
                return o
            }(e, t);
            var n
        }
        )));
        var ie = P((function(e, t) {
            return ue(function(e) {
                return function() {
                    return !e.apply(this, arguments)
                }
            }(e), t)
        }
        ));
        const ce = ie;
        function ae(e, t) {
            var n = function(n) {
                var r = t.concat([e]);
                return x(n, r) ? "<Circular>" : ae(n, r)
            }
              , r = function(e, t) {
                return H((function(t) {
                    return K(t) + ": " + n(e[t])
                }
                ), t.slice().sort())
            };
            switch (Object.prototype.toString.call(e)) {
            case "[object Arguments]":
                return "(function() { return arguments; }(" + H(n, e).join(", ") + "))";
            case "[object Array]":
                return "[" + H(n, e).concat(r(e, ce((function(e) {
                    return /^\d+$/.test(e)
                }
                ), k(e)))).join(", ") + "]";
            case "[object Boolean]":
                return "object" == typeof e ? "new Boolean(" + n(e.valueOf()) + ")" : e.toString();
            case "[object Date]":
                return "new Date(" + (isNaN(e.valueOf()) ? n(NaN) : K(Y(e))) + ")";
            case "[object Null]":
                return "null";
            case "[object Number]":
                return "object" == typeof e ? "new Number(" + n(e.valueOf()) + ")" : 1 / e == -1 / 0 ? "-0" : e.toString(10);
            case "[object String]":
                return "object" == typeof e ? "new String(" + n(e.valueOf()) + ")" : K(e);
            case "[object Undefined]":
                return "undefined";
            default:
                if ("function" == typeof e.toString) {
                    var o = e.toString();
                    if ("[object Object]" !== o)
                        return o
                }
                return "{" + r(e, k(e)).join(", ") + "}"
            }
        }
        const se = h((function(e) {
            return ae(e, [])
        }
        ));
        var le = P((function(e, t) {
            return U(e + 1, (function() {
                var n = arguments[e];
                if (null != n && function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object Function]" === t || "[object AsyncFunction]" === t || "[object GeneratorFunction]" === t || "[object AsyncGeneratorFunction]" === t
                }(n[t]))
                    return n[t].apply(n, Array.prototype.slice.call(arguments, 0, e));
                throw new TypeError(se(n) + ' does not have a method named "' + t + '"')
            }
            ))
        }
        ));
        const pe = le(0, "toLowerCase");
        var fe = Symbol("@ts-pattern/matcher");
        function de(e) {
            var t;
            return (t = {})[fe] = function() {
                return {
                    match: function(t) {
                        return {
                            matched: Boolean(e(t))
                        }
                    }
                }
            }
            ,
            t
        }
        de((function(e) {
            return !0
        }
        )),
        de((function(e) {
            return "string" == typeof e
        }
        )),
        de((function(e) {
            return "number" == typeof e
        }
        )),
        de((function(e) {
            return "boolean" == typeof e
        }
        )),
        de((function(e) {
            return "bigint" == typeof e
        }
        )),
        de((function(e) {
            return "symbol" == typeof e
        }
        )),
        de((function(e) {
            return null == e
        }
        ));
        const _e = () => {}
        ;
        d(A, pe);
        !function(e) {
            var t = function(e) {
                return function(t, n) {
                    return t === n || e.compare(t, n) < 1 ? t : n
                }
            }(e)
              , n = function(e) {
                return function(t, n) {
                    return t === n || e.compare(t, n) > -1 ? t : n
                }
            }(e)
        }(y);
        const ye = () => (( (e, t, ...n) => {
            if (!e) {
                let e = 0;
                const r = new Error(t.replace(/%s/g, ( () => String(n[e++]))));
                throw r.name = "Invariant Violation",
                r
            }
        }
        )("production", "ENV_NAME is not defined"),
        "production")
          , me = () => "test" === ge()
          , he = () => "cypress" === ye() || "storybook" === ye() || me()
          , ge = () => "production"
          , Ae = () => {
            const e = e => ({
                DOMAIN_APP: `app-playground-development${e}.userlike.com`,
                DOMAIN_WEB: `playground-development${e}.userlike.com`,
                DOMAIN_UMD: `umd-playground-development${e}.userlike.com`,
                URL_BUCKET_WEB: `playground-development${e}.userlike.com`,
                URL_AUDIO_CALL_UMC: "./call-app.html",
                URL_AUDIO_CALL_UMM: "./call-app.html",
                URL_BUCKET_WIDGETS: `playground-development${e}.userlike.com/widgets`,
                IMAGE_PROXY: `app-playground-development${e}.userlike.com/api/proxy/image/`,
                DOMAIN_API: `api-playground-development${e}.userlike.com`,
                UPS_PUB_KEY: "BMTaXm7VH4B11davw9HU-odxgRQiSCC-piCJeMzBDkQKxkuue2qctwpbCqP0z3s_yGlVB-85uGr3tPcUuA3R0so",
                OMQ_API_ENDPOINT: "omq-develop.de",
                CHANNEL_FACEBOOK_APP_ID: "537950694960671",
                CHANNEL_WHATSAPP_SIGNUP_CONFIG_ID: "1844872132719727",
                WHATSAPP_360DIALOG_DASHBOARD_URL: `https://playground-development${e}.userlike.local/api/whatsapp_mock/360partnerapi`,
                TILE_LAYER: "https://maps.omniscale.net/v2/devel-85802b20/style.grayscale/{z}/{x}/{y}.png",
                RECURLY_PUBLIC_KEY: "ewr1-XL5jyw4GEJCgSmPiNRldD0",
                VERSION_UMM: "1"
            });
            return {
                PRODUCTION: {
                    DOMAIN_UMD: "umd.userlike.com",
                    DOMAIN_WEB: "www.userlike.com",
                    DOMAIN_APP: "app.userlike.com",
                    URL_BUCKET_WEB: "userlike-cdn-web.b-cdn.net",
                    URL_AUDIO_CALL_UMC: "./call-app.html",
                    URL_AUDIO_CALL_UMM: "./call-app.html",
                    URL_BUCKET_WIDGETS: "userlike-cdn-widgets.s3-eu-west-1.amazonaws.com",
                    IMAGE_PROXY: "app.userlike.com/api/proxy/image/",
                    DOMAIN_API: "api.userlike.com",
                    UPS_PUB_KEY: "BMTaXm7VH4B11davw9HU-odxgRQiSCC-piCJeMzBDkQKxkuue2qctwpbCqP0z3s_yGlVB-85uGr3tPcUuA3R0so",
                    OMQ_API_ENDPOINT: "userlike-automation.com",
                    CHANNEL_FACEBOOK_APP_ID: "306564382734840",
                    CHANNEL_WHATSAPP_SIGNUP_CONFIG_ID: "3163350397149029",
                    WHATSAPP_360DIALOG_DASHBOARD_URL: "https://hub.360dialog.com/dashboard/app/nGW3H5PA",
                    TILE_LAYER: "https://maps.omniscale.net/v2/devel-85802b20/style.grayscale/{z}/{x}/{y}.png",
                    RECURLY_PUBLIC_KEY: "ewr1-XL5jyw4GEJCgSmPiNRldD0",
                    VERSION_UMM: "1"
                },
                CI: {
                    DOMAIN_UMD: "umd-ci.userlike.com",
                    DOMAIN_WEB: "ci.userlike.com",
                    DOMAIN_APP: "app-ci.userlike.com",
                    URL_BUCKET_WEB: "ci-cdn-web.b-cdn.net",
                    URL_AUDIO_CALL_UMC: "./call-app.html",
                    URL_AUDIO_CALL_UMM: "./call-app.html",
                    URL_BUCKET_WIDGETS: "ci.userlike.com/widgets",
                    IMAGE_PROXY: "app-ci.userlike.com/api/proxy/image/",
                    DOMAIN_API: "api-ci.userlike.com",
                    UPS_PUB_KEY: "BMTaXm7VH4B11davw9HU-odxgRQiSCC-piCJeMzBDkQKxkuue2qctwpbCqP0z3s_yGlVB-85uGr3tPcUuA3R0so",
                    OMQ_API_ENDPOINT: "omq-develop.de",
                    CHANNEL_FACEBOOK_APP_ID: "537950694960671",
                    CHANNEL_WHATSAPP_SIGNUP_CONFIG_ID: "1844872132719727",
                    WHATSAPP_360DIALOG_DASHBOARD_URL: "https://ci.userlike.com/api/whatsapp_mock/360partnerapi",
                    TILE_LAYER: "https://maps.omniscale.net/v2/devel-85802b20/style.grayscale/{z}/{x}/{y}.png",
                    RECURLY_PUBLIC_KEY: "ewr1-XL5jyw4GEJCgSmPiNRldD0",
                    VERSION_UMM: "1"
                },
                STAGING: {
                    DOMAIN_UMD: "umd-staging.userlike.com",
                    DOMAIN_WEB: "staging.userlike.com",
                    DOMAIN_APP: "app-staging.userlike.com",
                    URL_BUCKET_WEB: "staging-cdn-web.b-cdn.net",
                    URL_AUDIO_CALL_UMC: "./call-app.html",
                    URL_AUDIO_CALL_UMM: "./call-app.html",
                    URL_BUCKET_WIDGETS: "staging.userlike.com/widgets",
                    IMAGE_PROXY: "app-staging.userlike.com/api/proxy/image/",
                    DOMAIN_API: "api-staging.userlike.com",
                    UPS_PUB_KEY: "BMTaXm7VH4B11davw9HU-odxgRQiSCC-piCJeMzBDkQKxkuue2qctwpbCqP0z3s_yGlVB-85uGr3tPcUuA3R0so",
                    OMQ_API_ENDPOINT: "omq-develop.de",
                    CHANNEL_FACEBOOK_APP_ID: "226171944167862",
                    CHANNEL_WHATSAPP_SIGNUP_CONFIG_ID: "933401335620872",
                    WHATSAPP_360DIALOG_DASHBOARD_URL: "https://hub.360dialog.com/dashboard/app/nGW3H5PA",
                    TILE_LAYER: "https://maps.omniscale.net/v2/devel-85802b20/style.grayscale/{z}/{x}/{y}.png",
                    RECURLY_PUBLIC_KEY: "ewr1-XL5jyw4GEJCgSmPiNRldD0",
                    VERSION_UMM: "1"
                },
                DEVEL: {
                    DOMAIN_WEB: "devel.userlike.local",
                    DOMAIN_UMD: "devel.userlike.local",
                    DOMAIN_APP: "app.userlike.local",
                    URL_BUCKET_WEB: "devel.userlike.local",
                    URL_AUDIO_CALL_UMC: "./call-app.html",
                    URL_AUDIO_CALL_UMM: "./call-app.html",
                    URL_BUCKET_WIDGETS: "devel.userlike.local/widgets",
                    IMAGE_PROXY: "app.userlike.local/api/proxy/image/",
                    DOMAIN_API: "devel.userlike.local",
                    UPS_PUB_KEY: "BMTaXm7VH4B11davw9HU-odxgRQiSCC-piCJeMzBDkQKxkuue2qctwpbCqP0z3s_yGlVB-85uGr3tPcUuA3R0so",
                    OMQ_API_ENDPOINT: "omq-develop.de",
                    CHANNEL_FACEBOOK_APP_ID: "537950694960671",
                    CHANNEL_WHATSAPP_SIGNUP_CONFIG_ID: "1844872132719727",
                    WHATSAPP_360DIALOG_DASHBOARD_URL: "https://devel.userlike.local/api/whatsapp_mock/360partnerapi",
                    RECURLY_PUBLIC_KEY: "ewr1-XL5jyw4GEJCgSmPiNRldD0",
                    TILE_LAYER: "https://maps.omniscale.net/v2/devel-85802b20/style.grayscale/{z}/{x}/{y}.png",
                    VERSION_UMM: "1"
                },
                UNIT_TEST: {
                    DOMAIN_UMD: "unit-test-umd-ci.userlike.com",
                    DOMAIN_WEB: "unit-test-ci.userlike.com",
                    DOMAIN_APP: "unit-test-app-ci.userlike.com",
                    URL_BUCKET_WEB: "unit-test-ci-cdn-web.b-cdn.net",
                    URL_AUDIO_CALL_UMC: "unit-test-ci.userlike.com/umc/app_call",
                    URL_AUDIO_CALL_UMM: "unit-test-ci.userlike.com/umm/app_call",
                    URL_BUCKET_WIDGETS: "unit-test-ci.userlike.com/widgets",
                    IMAGE_PROXY: "unit-test-app-ci.userlike.com/api/proxy/image/",
                    DOMAIN_API: "unit-test-api-ci.userlike.com",
                    UPS_PUB_KEY: "foo_bar",
                    OMQ_API_ENDPOINT: "uni-test-omq-develop.de",
                    CHANNEL_FACEBOOK_APP_ID: "537950694960671",
                    CHANNEL_WHATSAPP_SIGNUP_CONFIG_ID: "1844872132719727",
                    WHATSAPP_360DIALOG_DASHBOARD_URL: "https://unit-test-360dialog.com",
                    TILE_LAYER: "https:/unit-test.com/image.png",
                    RECURLY_PUBLIC_KEY: "foo_bar",
                    VERSION_UMM: "1"
                },
                PG1: e("01"),
                PG2: e("02"),
                PG3: e("03"),
                PG4: e("04"),
                PG5: e("05"),
                PG6: e("06"),
                PG7: e("07"),
                PG8: e("08"),
                PG9: e("09")
            }
        }
        ;
        let Pe = function(e) {
            return e.PRODUCTION = "PRODUCTION",
            e.CI = "CI",
            e.UNIT_TEST = "UNIT_TEST",
            e.STAGING = "STAGING",
            e.DEVEL = "DEVEL",
            e.PG1 = "PG1",
            e.PG2 = "PG2",
            e.PG3 = "PG3",
            e.PG4 = "PG4",
            e.PG5 = "PG5",
            e.PG6 = "PG6",
            e.PG7 = "PG7",
            e.PG8 = "PG8",
            e.PG9 = "PG9",
            e
        }({});
        const be = () => {
            if (me())
                return Ae().UNIT_TEST;
            if (he())
                return Ae().CI;
            if ("isolated" !== ye())
                return f({
                    ENV_NAME: "production",
                    VERSION_UMM: "2220",
                    PUBLIC_PATH: "https://userlike-cdn-umm.b-cdn.net/",
                    NODE_ENV: "production",
                    USERNAME: "deploy",
                    URL_BUCKET_WEB: "userlike-cdn-web.b-cdn.net",
                    URL_BUCKET_WIDGETS: "userlike-cdn-widgets.s3-eu-west-1.amazonaws.com",
                    IMAGE_PROXY: "app.userlike.com/api/proxy/image/",
                    DOMAIN_API: "api.userlike.com",
                    URL_AUDIO_CALL_UMM: "app.userlike.com/audio/umm",
                    DOMAIN_WEB: "www.userlike.com",
                    SENTRY_DSN_UMM: "https://364b4fe397c84861b7b93b254ba3d7cd@bug.userlike.com/24",
                    DOMAIN_UMD: "umd.userlike.com",
                    URL_BUCKET_UMM: "userlike-cdn-umm.b-cdn.net",
                    UMF_APP: "UMM"
                });
            const e = Ae()
              , t = function() {
                try {
                    if ("window"in self) {
                        const t = JSON.parse(self.window.top?.localStorage.getItem(Ue) ?? null);
                        return e = t,
                        Object.values(Pe).some((t => t === e)) ? t : (Ee(),
                        Pe.CI)
                    }
                    return Pe.CI
                } catch (e) {
                    return Pe.CI
                }
                var e
            }();
            return e[t]
        }
        ;
        const Ee = (e => {
            let t = null;
            const n = (...n) => {
                if (null === t) {
                    const r = e(...n);
                    return t = {
                        args: n,
                        result: r
                    },
                    r
                }
                if (n.length === t.args.length && n.every(( (e, n) => t.args[n] === e)))
                    return t.result;
                const r = e(...n);
                return t = {
                    args: n,
                    result: r
                },
                r
            }
            ;
            return n.reset = () => {
                t = null
            }
            ,
            n
        }
        )(( () => {
            console.warn(`Could not read selected env from localstorage. Falling back to: ${Pe.CI}`)
        }
        ))
          , Ue = "uslk-isolated-env";
        function ve(e) {
            const t = function(e) {
                let t = !1;
                return () => new Promise((n => {
                    t || (t = !0,
                    e().then(n).catch(_e))
                }
                ))
            }(e);
            return Boolean(window.sessionStorage.getItem(Oe)) ? Ie(t) : new Promise((e => {
                window.addEventListener("scroll", ( () => {
                    setTimeout(( () => Ie(t).then(e)), 1e3)
                }
                ), {
                    once: !0
                }),
                setTimeout(( () => Ie(t).then(e)), 5e3)
            }
            ))
        }
        function Ie(e) {
            return new Promise((t => {
                "requestIdleCallback"in window ? requestIdleCallback(( () => {
                    e().then(t).catch(_e)
                }
                )) : e().then(t).catch(_e)
            }
            ))
        }
        const Oe = "uslk_umm_interacted";
        const we = "674692748a5546f49e274c2525ea2d9d93295675b653408ab21db7045e4512cb";
        !function(e) {
            if (n(we))
                return void ve(e).then((e => {
                    t({
                        kind: "success",
                        value: e
                    })
                }
                )).catch((e => {
                    t({
                        kind: "error",
                        error: {
                            widget_key: we,
                            original: e
                        }
                    })
                }
                ));
            const r = document.currentScript?.nonce || void 0
              , o = window
              , u = {
                load: () => e().then(( ({load: e}) => e({
                    nonce: r
                }))).catch(( () => {}
                ))
            };
            if ("function" == typeof o.define && o.define.amd && "function" == typeof o.require && "function" == typeof o.require.specified && o.require.specified("userlike-loader"))
                return void o.define("userlike-loader", ( () => u));
            "function" == typeof o.define && o.define.amd && void 0 !== o.dojoConfig ? o.define([], ( () => u)) : ve(e).then(( ({load: e}) => e({
                nonce: r
            }))).catch(( () => {}
            ))
        }(( () => {
            try {
                return a(window, we, `https://${be().URL_BUCKET_WIDGETS}`)
            } catch (e) {
                return Promise.reject(e)
            }
        }
        ))
    }
    )()
}
)();
