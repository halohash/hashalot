/*
 AngularJS v1.0.9-a4dc21e
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q, U, t) {
    'use strict';
    function p(b, a, c) {
        var d;
        if (b)
            if (N(b))
                for (d in b)
                    "prototype" != d && "length" != d && "name" != d && b.hasOwnProperty(d) && a.call(c, b[d], d);
            else if (b.forEach && b.forEach !== p)
                b.forEach(a, c);
            else {
                var e;
                e = b && "number" === typeof b.length ? "function" != typeof b.hasOwnProperty && "function" != typeof b.constructor ? !0 : b instanceof K || ba && b instanceof ba || "[object Object]" !== na.call(b) || "function" === typeof b.callee : !1;
                if (e)
                    for (d = 0; d < b.length; d++)
                        a.call(c, b[d], d);
                else
                    for (d in b)
                        b.hasOwnProperty(d) && a.call(c, b[d], d)
            }
        return b
    }
    function mb(b) {
        var a = [], c;
        for (c in b)
            b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }
    function dc(b, a, c) {
        for (var d = mb(b), e = 0; e < d.length; e++)
            a.call(c, b[d[e]], d[e]);
        return d
    }
    function nb(b) {
        return function(a, c) {
            b(c, a)
        }
    }
    function ya() {
        for (var b = $.length, a; b; ) {
            b--;
            a = $[b].charCodeAt(0);
            if (57 == a)
                return $[b] = "A",
                $.join("");
            if (90 == a)
                $[b] = "0";
            else
                return $[b] = String.fromCharCode(a + 1),
                $.join("")
        }
        $.unshift("0");
        return $.join("")
    }
    function ob(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }
    function G(b) {
        var a = b.$$hashKey;
        p(arguments, function(a) {
            a !== b && p(a, function(a, c) {
                b[c] = a
            })
        });
        ob(b, a);
        return b
    }
    function D(b) {
        return parseInt(b, 10)
    }
    function za(b, a) {
        return G(new (G(function() {}, {
            prototype: b
        })), a)
    }
    function y() {}
    function oa(b) {
        return b
    }
    function H(b) {
        return function() {
            return b
        }
    }
    function A(b) {
        return "undefined" == typeof b
    }
    function z(b) {
        return "undefined" != typeof b
    }
    function O(b) {
        return null != b && "object" == typeof b
    }
    function F(b) {
        return "string" == typeof b
    }
    function Qa(b) {
        return "number" == typeof b
    }
    function pa(b) {
        return "[object Date]" == na.apply(b)
    }
    function E(b) {
        return "[object Array]" == na.apply(b)
    }
    function N(b) {
        return "function" == typeof b
    }
    function Ra(b) {
        return "[object RegExp]" == na.apply(b)
    }
    function qa(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }
    function Aa(b) {
        return b && b.$evalAsync && b.$watch
    }
    function ec(b) {
        return b && (b.nodeName || b.bind && b.find)
    }
    function Sa(b, a, c) {
        var d = [];
        p(b, function(b, g, h) {
            d.push(a.call(c, b, g, h))
        });
        return d
    }
    function Ba(b, a) {
        if (b.indexOf)
            return b.indexOf(a);
        for (var c = 0; c < b.length; c++)
            if (a === b[c])
                return c;
        return -1
    }
    function Ta(b, a) {
        var c = Ba(b, a);
        0 <= c && b.splice(c, 1);
        return a
    }
    function V(b, a) {
        if (qa(b) || Aa(b))
            throw Error("Can't copy Window or Scope");
        if (a) {
            if (b === a)
                throw Error("Can't copy equivalent objects or arrays");
            if (E(b))
                for (var c = a.length = 0; c < b.length; c++)
                    a.push(V(b[c]));
            else {
                c = a.$$hashKey;
                p(a, function(b, c) {
                    delete a[c]
                });
                for (var d in b)
                    a[d] = V(b[d]);
                ob(a, c)
            }
        } else
            (a = b) && (E(b) ? a = V(b, []) : pa(b) ? a = new Date(b.getTime()) : Ra(b) ? a = RegExp(b.source) : O(b) && (a = V(b, {})));
        return a
    }
    function fc(b, a) {
        a = a || {};
        for (var c in b)
            b.hasOwnProperty(c) && "$$" !== c.substr(0, 2) && (a[c] = b[c]);
        return a
    }
    function ga(b, a) {
        if (b === a)
            return !0;
        if (null === b || null === a)
            return !1;
        if (b !== b && a !== a)
            return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)
            if (E(b)) {
                if (!E(a))
                    return !1;
                if ((c = b.length) == a.length) {
                    for (d = 0; d < c; d++)
                        if (!ga(b[d], a[d]))
                            return !1;
                    return !0
                }
            } else {
                if (pa(b))
                    return pa(a) && b.getTime() == a.getTime();
                if (Ra(b) && Ra(a))
                    return b.toString() == a.toString();
                if (Aa(b) || Aa(a) || qa(b) || qa(a) || E(a))
                    return !1;
                c = {};
                for (d in b)
                    if ("$" !== d.charAt(0) && !N(b[d])) {
                        if (!ga(b[d], a[d]))
                            return !1;
                        c[d] = !0
                    }
                for (d in a)
                    if (!c[d] && "$" !== d.charAt(0) && a[d] !== t && !N(a[d]))
                        return !1;
                return !0
            }
        return !1
    }
    function Ua(b, a) {
        var c = 2 < arguments.length ? ja.call(arguments, 2) : [];
        return !N(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, c.concat(ja.call(arguments, 0))) : a.apply(b, c)
        }
        : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }
    function gc(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c = t : qa(a) ? c = "$WINDOW" : a && U === a ? c = "$DOCUMENT" : Aa(a) && (c = "$SCOPE");
        return c
    }
    function ca(b, a) {
        return "undefined" === typeof b ? t : JSON.stringify(b, gc, a ? "  " : null)
    }
    function pb(b) {
        return F(b) ? JSON.parse(b) : b
    }
    function Va(b) {
        b && 0 !== b.length ? (b = B("" + b),
        b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b
    }
    function ra(b) {
        b = v(b).clone();
        try {
            b.html("")
        } catch (a) {}
        var c = v("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? B(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + B(b)
            })
        } catch (d) {
            return B(c)
        }
    }
    function qb(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {}
    }
    function Wa(b) {
        var a = {}, c, d;
        p((b || "").split("&"), function(b) {
            b && (c = b.split("="),
            d = qb(c[0]),
            z(d) && (a[d] = z(c[1]) ? qb(c[1]) : !0))
        });
        return a
    }
    function rb(b) {
        var a = [];
        p(b, function(b, d) {
            a.push(Xa(d, !0) + (!0 === b ? "" : "=" + Xa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }
    function Ya(b) {
        return Xa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }
    function Xa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }
    function hc(b, a) {
        function c(a) {
            a && d.push(a)
        }
        var d = [b], e, g, h = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        p(h, function(a) {
            h[a] = !0;
            c(U.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (p(b.querySelectorAll("." + a), c),
            p(b.querySelectorAll("." + a + "\\:"), c),
            p(b.querySelectorAll("[" + a + "]"), c))
        });
        p(d, function(a) {
            if (!e) {
                var b = f.exec(" " + a.className + " ");
                b ? (e = a,
                g = (b[2] || "").replace(/\s+/g, ",")) : p(a.attributes, function(b) {
                    !e && h[b.name] && (e = a,
                    g = b.value)
                })
            }
        });
        e && a(e, g ? [g] : [])
    }
    function sb(b, a) {
        var c = function() {
            b = v(b);
            a = a || [];
            a.unshift(["$provide", function(a) {
                a.value("$rootElement", b)
            }
            ]);
            a.unshift("ng");
            var c = tb(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }
            ]);
            return c
        }
          , d = /^NG_DEFER_BOOTSTRAP!/;
        if (Q && !d.test(Q.name))
            return c();
        Q.name = Q.name.replace(d, "");
        Za.resumeBootstrap = function(b) {
            p(b, function(b) {
                a.push(b)
            });
            c()
        }
    }
    function $a(b, a) {
        a = a || "_";
        return b.replace(ic, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }
    function ab(b, a, c) {
        if (!b)
            throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }
    function sa(b, a, c) {
        c && E(b) && (b = b[b.length - 1]);
        ab(N(b), a, "not a function, got " + (b && "object" == typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }
    function bb(b, a, c) {
        if (!a)
            return b;
        a = a.split(".");
        for (var d, e = b, g = a.length, h = 0; h < g; h++)
            d = a[h],
            b && (b = (e = b)[d]);
        return !c && N(b) ? Ua(e, b) : b
    }
    function jc(b) {
        function a(a, b, e) {
            return a[b] || (a[b] = e())
        }
        return a(a(b, "angular", Object), "module", function() {
            var b = {};
            return function(d, e, g) {
                e && b.hasOwnProperty(d) && (b[d] = null);
                return a(b, d, function() {
                    function a(c, d, e) {
                        return function() {
                            b[e || "push"]([c, d, arguments]);
                            return m
                        }
                    }
                    if (!e)
                        throw Error("No module: " + d);
                    var b = []
                      , c = []
                      , l = a("$injector", "invoke")
                      , m = {
                        _invokeQueue: b,
                        _runBlocks: c,
                        requires: e,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: l,
                        run: function(a) {
                            c.push(a);
                            return this
                        }
                    };
                    g && l(g);
                    return m
                })
            }
        })
    }
    function ub(b) {
        return b.replace(kc, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(lc, "Moz$1")
    }
    function cb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [this.filter(b)] : [this], k = a, l, m, n, r, s, q;
            if (!d || null != b)
                for (; e.length; )
                    for (l = e.shift(),
                    m = 0,
                    n = l.length; m < n; m++)
                        for (r = v(l[m]),
                        k ? r.triggerHandler("$destroy") : k = !k,
                        s = 0,
                        r = (q = r.children()).length; s < r; s++)
                            e.push(ba(q[s]));
            return g.apply(this, arguments)
        }
        var g = ba.fn[b]
          , g = g.$original || g;
        e.$original = g;
        ba.fn[b] = e
    }
    function K(b) {
        if (b instanceof K)
            return b;
        if (!(this instanceof K)) {
            if (F(b) && "<" != b.charAt(0))
                throw Error("selectors not implemented");
            return new K(b)
        }
        if (F(b)) {
            var a = U.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            db(this, a.childNodes);
            this.remove()
        } else
            db(this, b)
    }
    function eb(b) {
        return b.cloneNode(!0)
    }
    function ta(b) {
        vb(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++)
            ta(b[a])
    }
    function wb(b, a, c) {
        var d = aa(b, "events");
        aa(b, "handle") && (A(a) ? p(d, function(a, c) {
            fb(b, c, a);
            delete d[c]
        }) : A(c) ? (fb(b, a, d[a]),
        delete d[a]) : Ta(d[a] || [], c))
    }
    function vb(b) {
        var a = b[Ca]
          , c = Da[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"),
        wb(b)),
        delete Da[a],
        b[Ca] = t)
    }
    function aa(b, a, c) {
        var d = b[Ca]
          , d = Da[d || -1];
        if (z(c))
            d || (b[Ca] = d = ++mc,
            d = Da[d] = {}),
            d[a] = c;
        else
            return d && d[a]
    }
    function xb(b, a, c) {
        var d = aa(b, "data")
          , e = z(c)
          , g = !e && z(a)
          , h = g && !O(a);
        d || h || aa(b, "data", d = {});
        if (e)
            d[a] = c;
        else if (g) {
            if (h)
                return d && d[a];
            G(d, a)
        } else
            return d
    }
    function Ea(b, a) {
        return -1 < (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ")
    }
    function yb(b, a) {
        a && p(a.split(" "), function(a) {
            b.className = R((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + R(a) + " ", " "))
        })
    }
    function zb(b, a) {
        a && p(a.split(" "), function(a) {
            Ea(b, a) || (b.className = R(b.className + " " + R(a)))
        })
    }
    function db(b, a) {
        if (a) {
            a = a.nodeName || !z(a.length) || qa(a) ? [a] : a;
            for (var c = 0; c < a.length; c++)
                b.push(a[c])
        }
    }
    function Ab(b, a) {
        return Fa(b, "$" + (a || "ngController") + "Controller")
    }
    function Fa(b, a, c) {
        b = v(b);
        for (9 == b[0].nodeType && (b = b.find("html")); b.length; ) {
            if (c = b.data(a))
                return c;
            b = b.parent()
        }
    }
    function Bb(b, a) {
        var c = Ga[a.toLowerCase()];
        return c && Cb[b.nodeName] && c
    }
    function nc(b, a) {
        var c = function(c, e) {
            c.preventDefault || (c.preventDefault = function() {
                c.returnValue = !1
            }
            );
            c.stopPropagation || (c.stopPropagation = function() {
                c.cancelBubble = !0
            }
            );
            c.target || (c.target = c.srcElement || U);
            if (A(c.defaultPrevented)) {
                var g = c.preventDefault;
                c.preventDefault = function() {
                    c.defaultPrevented = !0;
                    g.call(c)
                }
                ;
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function() {
                return c.defaultPrevented
            }
            ;
            p(a[e || c.type], function(a) {
                a.call(b, c)
            });
            8 >= W ? (c.preventDefault = null,
            c.stopPropagation = null,
            c.isDefaultPrevented = null) : (delete c.preventDefault,
            delete c.stopPropagation,
            delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }
    function ha(b) {
        var a = typeof b, c;
        "object" == a && null !== b ? "function" == typeof (c = b.$$hashKey) ? c = b.$$hashKey() : c === t && (c = b.$$hashKey = ya()) : c = b;
        return a + ":" + c
    }
    function Ha(b) {
        p(b, this.put, this)
    }
    function gb() {}
    function Db(b) {
        var a, c;
        "function" == typeof b ? (a = b.$inject) || (a = [],
        c = b.toString().replace(oc, ""),
        c = c.match(pc),
        p(c[1].split(qc), function(b) {
            b.replace(rc, function(b, c, d) {
                a.push(d)
            })
        }),
        b.$inject = a) : E(b) ? (c = b.length - 1,
        sa(b[c], "fn"),
        a = b.slice(0, c)) : sa(b, "fn", !0);
        return a
    }
    function tb(b) {
        function a(a) {
            return function(b, c) {
                if (O(b))
                    p(b, nb(a));
                else
                    return a(b, c)
            }
        }
        function c(a, b) {
            if (N(b) || E(b))
                b = n.instantiate(b);
            if (!b.$get)
                throw Error("Provider " + a + " must define $get factory method.");
            return m[a + f] = b
        }
        function d(a, b) {
            return c(a, {
                $get: b
            })
        }
        function e(a) {
            var b = [];
            p(a, function(a) {
                if (!l.get(a))
                    if (l.put(a, !0),
                    F(a)) {
                        var c = ua(a);
                        b = b.concat(e(c.requires)).concat(c._runBlocks);
                        try {
                            for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                                var g = d[c]
                                  , q = "$injector" == g[0] ? n : n.get(g[0]);
                                q[g[1]].apply(q, g[2])
                            }
                        } catch (k) {
                            throw k.message && (k.message += " from " + a),
                            k;
                        }
                    } else if (N(a))
                        try {
                            b.push(n.invoke(a))
                        } catch (h) {
                            throw h.message && (h.message += " from " + a),
                            h;
                        }
                    else if (E(a))
                        try {
                            b.push(n.invoke(a))
                        } catch (s) {
                            throw s.message && (s.message += " from " + String(a[a.length - 1])),
                            s;
                        }
                    else
                        sa(a, "module")
            });
            return b
        }
        function g(a, b) {
            function c(d) {
                if ("string" !== typeof d)
                    throw Error("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] === h)
                        throw Error("Circular dependency: " + k.join(" <- "));
                    return a[d]
                }
                try {
                    return k.unshift(d),
                    a[d] = h,
                    a[d] = b(d)
                } finally {
                    k.shift()
                }
            }
            function d(a, b, e) {
                var f = [], l = Db(a), g, q, k;
                q = 0;
                for (g = l.length; q < g; q++)
                    k = l[q],
                    f.push(e && e.hasOwnProperty(k) ? e[k] : c(k));
                a.$inject || (a = a[g]);
                switch (b ? -1 : f.length) {
                case 0:
                    return a();
                case 1:
                    return a(f[0]);
                case 2:
                    return a(f[0], f[1]);
                case 3:
                    return a(f[0], f[1], f[2]);
                case 4:
                    return a(f[0], f[1], f[2], f[3]);
                case 5:
                    return a(f[0], f[1], f[2], f[3], f[4]);
                case 6:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                case 7:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                case 8:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                case 9:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                case 10:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                default:
                    return a.apply(b, f)
                }
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {}, e;
                    c.prototype = (E(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return O(e) ? e : c
                },
                get: c,
                annotate: Db
            }
        }
        var h = {}
          , f = "Provider"
          , k = []
          , l = new Ha
          , m = {
            $provide: {
                provider: a(c),
                factory: a(d),
                service: a(function(a, b) {
                    return d(a, ["$injector", function(a) {
                        return a.instantiate(b)
                    }
                    ])
                }),
                value: a(function(a, b) {
                    return d(a, H(b))
                }),
                constant: a(function(a, b) {
                    m[a] = b;
                    r[a] = b
                }),
                decorator: function(a, b) {
                    var c = n.get(a + f)
                      , d = c.$get;
                    c.$get = function() {
                        var a = s.invoke(d, c);
                        return s.invoke(b, null, {
                            $delegate: a
                        })
                    }
                }
            }
        }
          , n = g(m, function() {
            throw Error("Unknown provider: " + k.join(" <- "));
        })
          , r = {}
          , s = r.$injector = g(r, function(a) {
            a = n.get(a + f);
            return s.invoke(a.$get, a)
        });
        p(e(b), function(a) {
            s.invoke(a || y)
        });
        return s
    }
    function sc() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        }
        ;
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                p(a, function(a) {
                    b || "a" !== B(a.nodeName) || (b = a)
                });
                return b
            }
            function g() {
                var b = c.hash(), d;
                b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }
            var h = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function() {
                d.$evalAsync(g)
            });
            return g
        }
        ]
    }
    function tc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ja.call(arguments, 1))
            } finally {
                if (q--,
                0 === q)
                    for (; u.length; )
                        try {
                            u.pop()()
                        } catch (b) {
                            c.error(b)
                        }
            }
        }
        function g(a, b) {
            (function va() {
                p(w, function(a) {
                    a()
                });
                L = b(va, a)
            }
            )()
        }
        function h() {
            P != f.url() && (P = f.url(),
            p(I, function(a) {
                a(f.url())
            }))
        }
        var f = this
          , k = a[0]
          , l = b.location
          , m = b.history
          , n = b.setTimeout
          , r = b.clearTimeout
          , s = {};
        f.isMock = !1;
        var q = 0
          , u = [];
        f.$$completeOutstandingRequest = e;
        f.$$incOutstandingRequestCount = function() {
            q++
        }
        ;
        f.notifyWhenNoOutstandingRequests = function(a) {
            p(w, function(a) {
                a()
            });
            0 === q ? a() : u.push(a)
        }
        ;
        var w = [], L;
        f.addPollFn = function(a) {
            A(L) && g(100, n);
            w.push(a);
            return a
        }
        ;
        var P = l.href
          , J = a.find("base")
          , x = null;
        f.url = function(a, b) {
            if (a) {
                if (P != a)
                    return P = a,
                    d.history ? b ? m.replaceState(null, "", a) : (m.pushState(null, "", a),
                    J.attr("href", J.attr("href"))) : b ? (l.replace(a),
                    x = a) : (l.href = a,
                    x = null),
                    f
            } else
                return x || l.href.replace(/%27/g, "'")
        }
        ;
        var I = []
          , ia = !1;
        f.onUrlChange = function(a) {
            ia || (d.history && v(b).bind("popstate", h),
            d.hashchange ? v(b).bind("hashchange", h) : f.addPollFn(h),
            ia = !0);
            I.push(a);
            return a
        }
        ;
        f.baseHref = function() {
            var a = J.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        }
        ;
        var ka = {}
          , C = ""
          , Z = f.baseHref();
        f.cookies = function(a, b) {
            var d, e, f, l;
            if (a)
                b === t ? k.cookie = escape(a) + "=;path=" + Z + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : F(b) && (d = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + Z).length + 1,
                4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!"));
            else {
                if (k.cookie !== C)
                    for (C = k.cookie,
                    d = C.split("; "),
                    ka = {},
                    f = 0; f < d.length; f++)
                        e = d[f],
                        l = e.indexOf("="),
                        0 < l && (a = unescape(e.substring(0, l)),
                        ka[a] === t && (ka[a] = unescape(e.substring(l + 1))));
                return ka
            }
        }
        ;
        f.defer = function(a, b) {
            var c;
            q++;
            c = n(function() {
                delete s[c];
                e(a)
            }, b || 0);
            s[c] = !0;
            return c
        }
        ;
        f.defer.cancel = function(a) {
            return s[a] ? (delete s[a],
            r(a),
            e(y),
            !0) : !1
        }
    }
    function uc() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new tc(b,d,a,c)
        }
        ]
    }
    function vc() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != n && (r ? r == a && (r = a.n) : r = a,
                    g(a.n, a.p),
                    g(a, n),
                    n = a,
                    n.n = null)
                }
                function g(a, b) {
                    a != b && (a && (a.p = b),
                    b && (b.n = a))
                }
                if (b in a)
                    throw Error("cacheId " + b + " taken");
                var h = 0
                  , f = G({}, d, {
                    id: b
                })
                  , k = {}
                  , l = d && d.capacity || Number.MAX_VALUE
                  , m = {}
                  , n = null
                  , r = null;
                return a[b] = {
                    put: function(a, b) {
                        var c = m[a] || (m[a] = {
                            key: a
                        });
                        e(c);
                        A(b) || (a in k || h++,
                        k[a] = b,
                        h > l && this.remove(r.key))
                    },
                    get: function(a) {
                        var b = m[a];
                        if (b)
                            return e(b),
                            k[a]
                    },
                    remove: function(a) {
                        var b = m[a];
                        b && (b == n && (n = b.p),
                        b == r && (r = b.n),
                        g(b.n, b.p),
                        delete m[a],
                        delete k[a],
                        h--)
                    },
                    removeAll: function() {
                        k = {};
                        h = 0;
                        m = {};
                        n = r = null
                    },
                    destroy: function() {
                        m = f = k = null;
                        delete a[b]
                    },
                    info: function() {
                        return G({}, f, {
                            size: h
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                p(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            }
            ;
            b.get = function(b) {
                return a[b]
            }
            ;
            return b
        }
    }
    function wc() {
        this.$get = ["$cacheFactory", function(b) {
            return b("templates")
        }
        ]
    }
    function Eb(b) {
        var a = {}
          , c = "Directive"
          , d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/
          , e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/
          , g = /^\s*(https?|ftp|mailto|file):/;
        this.directive = function f(d, e) {
            F(d) ? (ab(e, "directive"),
            a.hasOwnProperty(d) || (a[d] = [],
            b.factory(d + c, ["$injector", "$exceptionHandler", function(b, c) {
                var e = [];
                p(a[d], function(a) {
                    try {
                        var f = b.invoke(a);
                        N(f) ? f = {
                            compile: H(f)
                        } : !f.compile && f.link && (f.compile = H(f.link));
                        f.priority = f.priority || 0;
                        f.name = f.name || d;
                        f.require = f.require || f.controller && f.name;
                        f.restrict = f.restrict || "A";
                        e.push(f)
                    } catch (l) {
                        c(l)
                    }
                });
                return e
            }
            ])),
            a[d].push(e)) : p(d, nb(f));
            return this
        }
        ;
        this.urlSanitizationWhitelist = function(a) {
            return z(a) ? (g = a,
            this) : g
        }
        ;
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function(b, k, l, m, n, r, s, q, u) {
            function w(a, b, c) {
                a instanceof v || (a = v(a));
                p(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = v(b).wrap("<span></span>").parent()[0])
                });
                var d = P(a, b, a, c);
                return function(b, c) {
                    ab(b, "scope");
                    for (var e = c ? wa.clone.call(a) : a, f = 0, l = e.length; f < l; f++) {
                        var g = e[f];
                        1 != g.nodeType && 9 != g.nodeType || e.eq(f).data("$scope", b)
                    }
                    L(e, "ng-scope");
                    c && c(e, b);
                    d && d(b, e, e);
                    return e
                }
            }
            function L(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }
            function P(a, b, c, d) {
                function e(a, c, d, l) {
                    var g, k, m, q, s, n, r, w = [];
                    s = 0;
                    for (n = c.length; s < n; s++)
                        w.push(c[s]);
                    r = s = 0;
                    for (n = f.length; s < n; r++)
                        k = w[r],
                        c = f[s++],
                        g = f[s++],
                        c ? (c.scope ? (m = a.$new(O(c.scope)),
                        v(k).data("$scope", m)) : m = a,
                        (q = c.transclude) || !l && b ? c(g, m, k, d, function(b) {
                            return function(c) {
                                var d = a.$new();
                                d.$$transcluded = !0;
                                return b(d, c).bind("$destroy", Ua(d, d.$destroy))
                            }
                        }(q || b)) : c(g, m, k, t, l)) : g && g(a, k.childNodes, t, l)
                }
                for (var f = [], l, g, k, m = 0; m < a.length; m++)
                    g = new va,
                    l = J(a[m], [], g, d),
                    g = (l = l.length ? x(l, a[m], g, b, c) : null) && l.terminal || !a[m].childNodes || !a[m].childNodes.length ? null : P(a[m].childNodes, l ? l.transclude : b),
                    f.push(l),
                    f.push(g),
                    k = k || l || g;
                return k ? e : null
            }
            function J(a, b, c, f) {
                var l = c.$attr, g;
                switch (a.nodeType) {
                case 1:
                    I(b, fa(Ja(a).toLowerCase()), "E", f);
                    var k, m, q;
                    g = a.attributes;
                    for (var s = 0, n = g && g.length; s < n; s++)
                        if (k = g[s],
                        !W || 8 <= W || k.specified)
                            m = k.name,
                            q = fa(m.toLowerCase()),
                            l[q] = m,
                            c[q] = k = R(W && "href" == m ? decodeURIComponent(a.getAttribute(m, 2)) : k.value),
                            Bb(a, q) && (c[q] = !0),
                            T(a, b, k, q),
                            I(b, q, "A", f);
                    a = a.className;
                    if (F(a) && "" !== a)
                        for (; g = e.exec(a); )
                            q = fa(g[2]),
                            I(b, q, "C", f) && (c[q] = R(g[3])),
                            a = a.substr(g.index + g[0].length);
                    break;
                case 3:
                    S(b, a.nodeValue);
                    break;
                case 8:
                    try {
                        if (g = d.exec(a.nodeValue))
                            q = fa(g[1]),
                            I(b, q, "M", f) && (c[q] = R(g[2]))
                    } catch (r) {}
                }
                b.sort(C);
                return b
            }
            function x(a, b, c, d, e) {
                function f(a, b) {
                    a && (a.require = C.require,
                    q.push(a));
                    b && (b.require = C.require,
                    n.push(b))
                }
                function g(a, b) {
                    var c, d = "data", e = !1;
                    if (F(a)) {
                        for (; "^" == (c = a.charAt(0)) || "?" == c; )
                            a = a.substr(1),
                            "^" == c && (d = "inheritedData"),
                            e = e || "?" == c;
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e)
                            throw Error("No controller: " + a);
                    } else
                        E(a) && (c = [],
                        p(a, function(a) {
                            c.push(g(a, b))
                        }));
                    return c
                }
                function k(a, d, e, f, m) {
                    var w, u, Ia, ea, C;
                    w = b === e ? c : fc(c, new va(v(e),c.$attr));
                    u = w.$$element;
                    if (I) {
                        var P = /^\s*([@=&])\s*(\w*)\s*$/
                          , x = d.$parent || d;
                        p(I.scope, function(a, b) {
                            var c = a.match(P) || [], e = c[2] || b, c = c[1], f, g, l;
                            d.$$isolateBindings[b] = c + e;
                            switch (c) {
                            case "@":
                                w.$observe(e, function(a) {
                                    d[b] = a
                                });
                                w.$$observers[e].$$scope = x;
                                break;
                            case "=":
                                g = r(w[e]);
                                l = g.assign || function() {
                                    f = d[b] = g(x);
                                    throw Error("Non-assignable model expression: " + w[e] + " (directive: " + I.name + ")");
                                }
                                ;
                                f = d[b] = g(x);
                                d.$watch(function() {
                                    var a = g(x);
                                    a !== d[b] && (a !== f ? f = d[b] = a : l(x, a = f = d[b]));
                                    return a
                                });
                                break;
                            case "&":
                                g = r(w[e]);
                                d[b] = function(a) {
                                    return g(x, a)
                                }
                                ;
                                break;
                            default:
                                throw Error("Invalid isolate scope definition for directive " + I.name + ": " + a);
                            }
                        })
                    }
                    y && p(y, function(a) {
                        var b = {
                            $scope: d,
                            $element: u,
                            $attrs: w,
                            $transclude: m
                        };
                        C = a.controller;
                        "@" == C && (C = w[a.name]);
                        u.data("$" + a.name + "Controller", s(C, b))
                    });
                    f = 0;
                    for (Ia = q.length; f < Ia; f++)
                        try {
                            ea = q[f],
                            ea(d, u, w, ea.require && g(ea.require, u))
                        } catch (L) {
                            l(L, ra(u))
                        }
                    a && a(d, e.childNodes, t, m);
                    f = 0;
                    for (Ia = n.length; f < Ia; f++)
                        try {
                            ea = n[f],
                            ea(d, u, w, ea.require && g(ea.require, u))
                        } catch (xc) {
                            l(xc, ra(u))
                        }
                }
                for (var m = -Number.MAX_VALUE, q = [], n = [], u = null, I = null, P = null, x = c.$$element = v(b), C, S, T, z, A = d, y, G, D, H = 0, K = a.length; H < K; H++) {
                    C = a[H];
                    T = t;
                    if (m > C.priority)
                        break;
                    if (D = C.scope)
                        Z("isolated scope", I, C, x),
                        O(D) && (L(x, "ng-isolate-scope"),
                        I = C),
                        L(x, "ng-scope"),
                        u = u || C;
                    S = C.name;
                    if (D = C.controller)
                        y = y || {},
                        Z("'" + S + "' controller", y[S], C, x),
                        y[S] = C;
                    if (D = C.transclude)
                        Z("transclusion", z, C, x),
                        z = C,
                        m = C.priority,
                        "element" == D ? (T = v(b),
                        x = c.$$element = v(U.createComment(" " + S + ": " + c[S] + " ")),
                        b = x[0],
                        da(e, v(T[0]), b),
                        A = w(T, d, m)) : (T = v(eb(b)).contents(),
                        x.html(""),
                        A = w(T, d));
                    if (D = C.template)
                        if (Z("template", P, C, x),
                        P = C,
                        D = B(D),
                        C.replace) {
                            T = v("<div>" + R(D) + "</div>").contents();
                            b = T[0];
                            if (1 != T.length || 1 !== b.nodeType)
                                throw Error("Template must have exactly one root element. was: " + D);
                            da(e, x, b);
                            S = {
                                $attr: {}
                            };
                            a = a.concat(J(b, a.splice(H + 1, a.length - (H + 1)), S));
                            ia(c, S);
                            K = a.length
                        } else
                            x.html(D);
                    if (C.templateUrl)
                        Z("template", P, C, x),
                        P = C,
                        k = ka(a.splice(H, a.length - H), k, x, c, e, C.replace, A),
                        K = a.length;
                    else if (C.compile)
                        try {
                            G = C.compile(x, c, A),
                            N(G) ? f(null, G) : G && f(G.pre, G.post)
                        } catch (M) {
                            l(M, ra(x))
                        }
                    C.terminal && (k.terminal = !0,
                    m = Math.max(m, C.priority))
                }
                k.scope = u && u.scope;
                k.transclude = z && A;
                return k
            }
            function I(d, e, g, k) {
                var m = !1;
                if (a.hasOwnProperty(e)) {
                    var q;
                    e = b.get(e + c);
                    for (var s = 0, n = e.length; s < n; s++)
                        try {
                            q = e[s],
                            (k === t || k > q.priority) && -1 != q.restrict.indexOf(g) && (d.push(q),
                            m = !0)
                        } catch (r) {
                            l(r)
                        }
                }
                return m
            }
            function ia(a, b) {
                var c = b.$attr
                  , d = a.$attr
                  , e = a.$$element;
                p(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && (d += ("style" === e ? ";" : " ") + b[e]),
                    a.$set(e, d, !0, c[e]))
                });
                p(b, function(b, f) {
                    "class" == f ? (L(e, b),
                    a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? e.attr("style", e.attr("style") + ";" + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b,
                    d[f] = c[f])
                })
            }
            function ka(a, b, c, d, e, f, g) {
                var l = [], k, q, s = c[0], r = a.shift(), w = G({}, r, {
                    controller: null,
                    templateUrl: null,
                    transclude: null,
                    scope: null
                });
                c.html("");
                m.get(r.templateUrl, {
                    cache: n
                }).success(function(m) {
                    var n, r;
                    m = B(m);
                    if (f) {
                        r = v("<div>" + R(m) + "</div>").contents();
                        n = r[0];
                        if (1 != r.length || 1 !== n.nodeType)
                            throw Error("Template must have exactly one root element. was: " + m);
                        m = {
                            $attr: {}
                        };
                        da(e, c, n);
                        J(n, a, m);
                        ia(d, m)
                    } else
                        n = s,
                        c.html(m);
                    a.unshift(w);
                    k = x(a, n, d, g);
                    for (q = P(c[0].childNodes, g); l.length; ) {
                        var u = l.pop();
                        m = l.pop();
                        r = l.pop();
                        var I = l.pop()
                          , C = n;
                        r !== s && (C = eb(n),
                        da(m, v(r), C));
                        k(function() {
                            b(q, I, C, e, u)
                        }, I, C, e, u)
                    }
                    l = null
                }).error(function(a, b, c, d) {
                    throw Error("Failed to load template: " + d.url);
                });
                return function(a, c, d, e, f) {
                    l ? (l.push(c),
                    l.push(d),
                    l.push(e),
                    l.push(f)) : k(function() {
                        b(q, c, d, e, f)
                    }, c, d, e, f)
                }
            }
            function C(a, b) {
                return b.priority - a.priority
            }
            function Z(a, b, c, d) {
                if (b)
                    throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + ra(d));
            }
            function S(a, b) {
                var c = k(b, !0);
                c && a.push({
                    priority: 0,
                    compile: H(function(a, b) {
                        var d = b.parent()
                          , e = d.data("$binding") || [];
                        e.push(c);
                        L(d.data("$binding", e), "ng-binding");
                        a.$watch(c, function(a) {
                            b[0].nodeValue = a
                        })
                    })
                })
            }
            function T(a, b, c, d) {
                var e = k(c, !0);
                e && b.push({
                    priority: 100,
                    compile: H(function(a, b, c) {
                        b = c.$$observers || (c.$$observers = {});
                        "class" === d && (e = k(c[d], !0));
                        c[d] = t;
                        (b[d] || (b[d] = [])).$$inter = !0;
                        (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function(a) {
                            c.$set(d, a)
                        })
                    })
                })
            }
            function da(a, b, c) {
                var d = b[0], e = d.parentNode, f, g;
                if (a)
                    for (f = 0,
                    g = a.length; f < g; f++)
                        if (a[f] == d) {
                            a[f] = c;
                            break
                        }
                e && e.replaceChild(c, d);
                c[v.expando] = d[v.expando];
                b[0] = c
            }
            var va = function(a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            va.prototype = {
                $normalize: fa,
                $set: function(a, b, c, d) {
                    var e = Bb(this.$$element[0], a)
                      , f = this.$$observers;
                    e && (this.$$element.prop(a, b),
                    d = e);
                    this[a] = b;
                    d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = $a(a, "-"));
                    "A" === Ja(this.$$element[0]) && "href" === a && (z.setAttribute("href", b),
                    e = z.href,
                    "" === e || e.match(g) || (this[a] = b = "unsafe:" + e));
                    !1 !== c && (null === b || b === t ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    f && p(f[a], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            l(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this
                      , d = c.$$observers || (c.$$observers = {})
                      , e = d[a] || (d[a] = []);
                    e.push(b);
                    q.$evalAsync(function() {
                        e.$$inter || b(c[a])
                    });
                    return b
                }
            };
            var z = u[0].createElement("a")
              , A = k.startSymbol()
              , y = k.endSymbol()
              , B = "{{" == A || "}}" == y ? oa : function(a) {
                return a.replace(/\{\{/g, A).replace(/}}/g, y)
            }
            ;
            return w
        }
        ]
    }
    function fa(b) {
        return ub(b.replace(yc, ""))
    }
    function zc() {
        var b = {};
        this.register = function(a, c) {
            O(a) ? G(b, a) : b[a] = c
        }
        ;
        this.$get = ["$injector", "$window", function(a, c) {
            return function(d, e) {
                if (F(d)) {
                    var g = d;
                    d = b.hasOwnProperty(g) ? b[g] : bb(e.$scope, g, !0) || bb(c, g, !0);
                    sa(d, g, !0)
                }
                return a.instantiate(d, e)
            }
        }
        ]
    }
    function Ac() {
        this.$get = ["$window", function(b) {
            return v(b.document)
        }
        ]
    }
    function Bc() {
        this.$get = ["$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments)
            }
        }
        ]
    }
    function Cc() {
        var b = "{{"
          , a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a,
            this) : b
        }
        ;
        this.endSymbol = function(b) {
            return b ? (a = b,
            this) : a
        }
        ;
        this.$get = ["$parse", function(c) {
            function d(d, f) {
                for (var k, l, m = 0, n = [], r = d.length, s = !1, q = []; m < r; )
                    -1 != (k = d.indexOf(b, m)) && -1 != (l = d.indexOf(a, k + e)) ? (m != k && n.push(d.substring(m, k)),
                    n.push(m = c(s = d.substring(k + e, l))),
                    m.exp = s,
                    m = l + g,
                    s = !0) : (m != r && n.push(d.substring(m)),
                    m = r);
                (r = n.length) || (n.push(""),
                r = 1);
                if (!f || s)
                    return q.length = r,
                    m = function(a) {
                        for (var b = 0, c = r, d; b < c; b++)
                            "function" == typeof (d = n[b]) && (d = d(a),
                            null == d || d == t ? d = "" : "string" != typeof d && (d = ca(d))),
                            q[b] = d;
                        return q.join("")
                    }
                    ,
                    m.exp = d,
                    m.parts = n,
                    m
            }
            var e = b.length
              , g = a.length;
            d.startSymbol = function() {
                return b
            }
            ;
            d.endSymbol = function() {
                return a
            }
            ;
            return d
        }
        ]
    }
    function Fb(b) {
        b = b.split("/");
        for (var a = b.length; a--; )
            b[a] = Ya(b[a]);
        return b.join("/")
    }
    function xa(b, a) {
        var c = Gb.exec(b)
          , c = {
            protocol: c[1],
            host: c[3],
            port: D(c[5]) || Hb[c[1]] || null,
            path: c[6] || "/",
            search: c[8],
            hash: c[10]
        };
        a && (a.$$protocol = c.protocol,
        a.$$host = c.host,
        a.$$port = c.port);
        return c
    }
    function la(b, a, c) {
        return b + "://" + a + (c == Hb[b] ? "" : ":" + c)
    }
    function Dc(b, a, c) {
        var d = xa(b);
        return decodeURIComponent(d.path) != a || A(d.hash) || 0 !== d.hash.indexOf(c) ? b : la(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }
    function Ec(b, a, c) {
        var d = xa(b);
        if (decodeURIComponent(d.path) != a || A(d.hash) || 0 !== d.hash.indexOf(c)) {
            var e = d.search && "?" + d.search || ""
              , g = d.hash && "#" + d.hash || ""
              , h = a.substr(0, a.lastIndexOf("/"))
              , f = d.path.substr(h.length);
            if (0 !== d.path.indexOf(h))
                throw Error('Invalid url "' + b + '", missing path prefix "' + h + '" !');
            return la(d.protocol, d.host, d.port) + a + "#" + c + f + e + g
        }
        return b
    }
    function hb(b, a, c) {
        a = a || "";
        this.$$parse = function(b) {
            var c = xa(b, this);
            if (0 !== c.path.indexOf(a))
                throw Error('Invalid url "' + b + '", missing path prefix "' + a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = Wa(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        }
        ;
        this.$$compose = function() {
            var b = rb(this.$$search)
              , c = this.$$hash ? "#" + Ya(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = la(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
        }
        ;
        this.$$rewriteAppUrl = function(a) {
            if (0 == a.indexOf(c))
                return a
        }
        ;
        this.$$parse(b)
    }
    function Ka(b, a, c) {
        var d;
        this.$$parse = function(b) {
            var c = xa(b, this);
            if (c.hash && 0 !== c.hash.indexOf(a))
                throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Fc.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? ("/" == c[1].charAt(0) ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = Wa(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) || "";
            this.$$compose()
        }
        ;
        this.$$compose = function() {
            var b = rb(this.$$search)
              , c = this.$$hash ? "#" + Ya(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = la(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        }
        ;
        this.$$rewriteAppUrl = function(a) {
            if (0 == a.indexOf(c))
                return a
        }
        ;
        this.$$parse(b)
    }
    function Ib(b, a, c, d) {
        Ka.apply(this, arguments);
        this.$$rewriteAppUrl = function(b) {
            if (0 == b.indexOf(c))
                return c + d + "#" + a + b.substr(c.length)
        }
    }
    function La(b) {
        return function() {
            return this[b]
        }
    }
    function Jb(b, a) {
        return function(c) {
            if (A(c))
                return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }
    function Gc() {
        var b = ""
          , a = !1;
        this.hashPrefix = function(a) {
            return z(a) ? (b = a,
            this) : b
        }
        ;
        this.html5Mode = function(b) {
            return z(b) ? (a = b,
            this) : a
        }
        ;
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, g) {
            function h(a) {
                c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
            }
            var f, k, l, m = d.url(), n = xa(m);
            a ? (k = d.baseHref() || "/",
            l = k.substr(0, k.lastIndexOf("/")),
            n = la(n.protocol, n.host, n.port) + l + "/",
            f = e.history ? new hb(Dc(m, k, b),l,n) : new Ib(Ec(m, k, b),b,n,k.substr(l.length + 1))) : (n = la(n.protocol, n.host, n.port) + (n.path || "") + (n.search ? "?" + n.search : "") + "#" + b + "/",
            f = new Ka(m,b,n));
            g.bind("click", function(a) {
                if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                    for (var b = v(a.target); "a" !== B(b[0].nodeName); )
                        if (b[0] === g[0] || !(b = b.parent())[0])
                            return;
                    var d = b.prop("href")
                      , e = f.$$rewriteAppUrl(d);
                    d && !b.attr("target") && e && (f.$$parse(e),
                    c.$apply(),
                    a.preventDefault(),
                    Q.angular["ff-684208-preventDefault"] = !0)
                }
            });
            f.absUrl() != m && d.url(f.absUrl(), !0);
            d.onUrlChange(function(a) {
                f.absUrl() != a && (c.$broadcast("$locationChangeStart", a, f.absUrl()).defaultPrevented ? d.url(f.absUrl()) : (c.$evalAsync(function() {
                    var b = f.absUrl();
                    f.$$parse(a);
                    h(b)
                }),
                c.$$phase || c.$digest()))
            });
            var r = 0;
            c.$watch(function() {
                var a = d.url()
                  , b = f.$$replace;
                r && a == f.absUrl() || (r++,
                c.$evalAsync(function() {
                    c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b),
                    h(a))
                }));
                f.$$replace = !1;
                return r
            });
            return f
        }
        ]
    }
    function Hc() {
        this.$get = ["$window", function(b) {
            function a(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }
            function c(c) {
                var e = b.console || {}
                  , g = e[c] || e.log || y;
                return g.apply ? function() {
                    var b = [];
                    p(arguments, function(c) {
                        b.push(a(c))
                    });
                    return g.apply(e, b)
                }
                : function(a, b) {
                    g(a, b)
                }
            }
            return {
                log: c("log"),
                warn: c("warn"),
                info: c("info"),
                error: c("error")
            }
        }
        ]
    }
    function Ic(b, a) {
        function c(a) {
            return -1 != a.indexOf(w)
        }
        function d() {
            return q + 1 < b.length ? b.charAt(q + 1) : !1
        }
        function e(a) {
            return "0" <= a && "9" >= a
        }
        function g(a) {
            return " " == a || "\r" == a || "\t" == a || "\n" == a || "\v" == a || "\u00a0" == a
        }
        function h(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" == a || "$" == a
        }
        function f(a) {
            return "-" == a || "+" == a || e(a)
        }
        function k(a, c, d) {
            d = d || q;
            throw Error("Lexer Error: " + a + " at column" + (z(c) ? "s " + c + "-" + q + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }
        function l() {
            for (var a = "", c = q; q < b.length; ) {
                var l = B(b.charAt(q));
                if ("." == l || e(l))
                    a += l;
                else {
                    var g = d();
                    if ("e" == l && f(g))
                        a += l;
                    else if (f(l) && g && e(g) && "e" == a.charAt(a.length - 1))
                        a += l;
                    else if (!f(l) || g && e(g) || "e" != a.charAt(a.length - 1))
                        break;
                    else
                        k("Invalid exponent")
                }
                q++
            }
            a *= 1;
            r.push({
                index: c,
                text: a,
                json: !0,
                fn: function() {
                    return a
                }
            })
        }
        function m() {
            for (var c = "", d = q, f, l, k, m; q < b.length; ) {
                m = b.charAt(q);
                if ("." == m || h(m) || e(m))
                    "." == m && (f = q),
                    c += m;
                else
                    break;
                q++
            }
            if (f)
                for (l = q; l < b.length; ) {
                    m = b.charAt(l);
                    if ("(" == m) {
                        k = c.substr(f - d + 1);
                        c = c.substr(0, f - d);
                        q = l;
                        break
                    }
                    if (g(m))
                        l++;
                    else
                        break
                }
            d = {
                index: d,
                text: c
            };
            if (Ma.hasOwnProperty(c))
                d.fn = d.json = Ma[c];
            else {
                var n = Kb(c, a);
                d.fn = G(function(a, b) {
                    return n(a, b)
                }, {
                    assign: function(a, b) {
                        return Lb(a, c, b)
                    }
                })
            }
            r.push(d);
            k && (r.push({
                index: f,
                text: ".",
                json: !1
            }),
            r.push({
                index: f + 1,
                text: k,
                json: !1
            }))
        }
        function n(a) {
            var c = q;
            q++;
            for (var d = "", e = a, f = !1; q < b.length; ) {
                var l = b.charAt(q)
                  , e = e + l;
                if (f)
                    "u" == l ? (l = b.substring(q + 1, q + 5),
                    l.match(/[\da-f]{4}/i) || k("Invalid unicode escape [\\u" + l + "]"),
                    q += 4,
                    d += String.fromCharCode(parseInt(l, 16))) : d = (f = Jc[l]) ? d + f : d + l,
                    f = !1;
                else if ("\\" == l)
                    f = !0;
                else {
                    if (l == a) {
                        q++;
                        r.push({
                            index: c,
                            text: e,
                            string: d,
                            json: !0,
                            fn: function() {
                                return d
                            }
                        });
                        return
                    }
                    d += l
                }
                q++
            }
            k("Unterminated quote", c)
        }
        for (var r = [], s, q = 0, u = [], w, L = ":"; q < b.length; ) {
            w = b.charAt(q);
            if (c("\"'"))
                n(w);
            else if (e(w) || c(".") && e(d()))
                l();
            else if (h(w))
                m(),
                -1 != "{,".indexOf(L) && "{" == u[0] && (s = r[r.length - 1]) && (s.json = -1 == s.text.indexOf("."));
            else if (c("(){}[].,;:"))
                r.push({
                    index: q,
                    text: w,
                    json: -1 != ":[,".indexOf(L) && c("{[") || c("}]:,")
                }),
                c("{[") && u.unshift(w),
                c("}]") && u.shift(),
                q++;
            else if (g(w)) {
                q++;
                continue
            } else {
                var p = w + d()
                  , J = Ma[w]
                  , x = Ma[p];
                x ? (r.push({
                    index: q,
                    text: p,
                    fn: x
                }),
                q += 2) : J ? (r.push({
                    index: q,
                    text: w,
                    fn: J,
                    json: -1 != "[,:".indexOf(L) && c("+-")
                }),
                q += 1) : k("Unexpected next character ", q, q + 1)
            }
            L = w
        }
        return r
    }
    function Kc(b, a, c, d) {
        function e(a, c) {
            throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }
        function g() {
            if (0 === z.length)
                throw Error("Unexpected end of expression: " + b);
            return z[0]
        }
        function h(a, b, c, d) {
            if (0 < z.length) {
                var e = z[0]
                  , f = e.text;
                if (f == a || f == b || f == c || f == d || !(a || b || c || d))
                    return e
            }
            return !1
        }
        function f(b, c, d, f) {
            return (b = h(b, c, d, f)) ? (a && !b.json && e("is not valid json", b),
            z.shift(),
            b) : !1
        }
        function k(a) {
            f(a) || e("is unexpected, expecting [" + a + "]", h())
        }
        function l(a, b) {
            return function(c, d) {
                return a(c, d, b)
            }
        }
        function m(a, b, c) {
            return function(d, e) {
                return b(d, e, a, c)
            }
        }
        function n() {
            for (var a = []; ; )
                if (0 < z.length && !h("}", ")", ";", "]") && a.push(E()),
                !f(";"))
                    return 1 == a.length ? a[0] : function(b, c) {
                        for (var d, e = 0; e < a.length; e++) {
                            var f = a[e];
                            f && (d = f(b, c))
                        }
                        return d
                    }
        }
        function r() {
            for (var a = v(), b; ; )
                if (b = f("|"))
                    a = m(a, b.fn, s());
                else
                    return a
        }
        function s() {
            for (var a = f(), b = c(a.text), d = []; ; )
                if (a = f(":"))
                    d.push(v());
                else {
                    var e = function(a, c, e) {
                        e = [e];
                        for (var f = 0; f < d.length; f++)
                            e.push(d[f](a, c));
                        return b.apply(a, e)
                    };
                    return function() {
                        return e
                    }
                }
        }
        function q() {
            var a = u(), c, d;
            return (d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d),
            c = u(),
            function(b, d) {
                return a.assign(b, c(b, d), d)
            }
            ) : a
        }
        function u() {
            for (var a = w(), b; ; )
                if (b = f("||"))
                    a = m(a, b.fn, w());
                else
                    return a
        }
        function w() {
            var a = L(), b;
            if (b = f("&&"))
                a = m(a, b.fn, w());
            return a
        }
        function L() {
            var a = p(), b;
            if (b = f("==", "!="))
                a = m(a, b.fn, L());
            return a
        }
        function p() {
            var a;
            a = J();
            for (var b; b = f("+", "-"); )
                a = m(a, b.fn, J());
            if (b = f("<", ">", "<=", ">="))
                a = m(a, b.fn, p());
            return a
        }
        function J() {
            for (var a = x(), b; b = f("*", "/", "%"); )
                a = m(a, b.fn, x());
            return a
        }
        function x() {
            var a;
            return f("+") ? I() : (a = f("-")) ? m(T, a.fn, x()) : (a = f("!")) ? l(a.fn, x()) : I()
        }
        function I() {
            var a;
            if (f("("))
                a = E(),
                k(")");
            else if (f("["))
                a = Z();
            else if (f("{"))
                a = S();
            else {
                var b = f();
                (a = b.fn) || e("not a primary expression", b)
            }
            for (var c; b = f("(", "[", "."); )
                "(" === b.text ? (a = D(a, c),
                c = null) : "[" === b.text ? (c = a,
                a = F(a)) : "." === b.text ? (c = a,
                a = B(a)) : e("IMPOSSIBLE");
            return a
        }
        function ia(a) {
            var b = f().text
              , c = Kb(b, d);
            return G(function(b, d, e) {
                return c(e || a(b, d), d)
            }, {
                assign: function(c, d, e) {
                    return Lb(a(c, e), b, d)
                }
            })
        }
        function A(a) {
            var b = v();
            k("]");
            return G(function(c, d) {
                var e = a(c, d), f = b(c, d), l;
                if (!e)
                    return t;
                (e = e[f]) && e.then && (l = e,
                "$$v"in e || (l.$$v = t,
                l.then(function(a) {
                    l.$$v = a
                })),
                e = e.$$v);
                return e
            }, {
                assign: function(c, d, e) {
                    return a(c, e)[b(c, e)] = d
                }
            })
        }
        function C(a, b) {
            var c = [];
            if (")" != g().text) {
                do
                    c.push(v());
                while (f(","))
            }
            k(")");
            return function(d, e) {
                for (var f = [], l = b ? b(d, e) : d, g = 0; g < c.length; g++)
                    f.push(c[g](d, e));
                g = a(d, e, l) || y;
                return g.apply ? g.apply(l, f) : g(f[0], f[1], f[2], f[3], f[4])
            }
        }
        function Z() {
            var a = [];
            if ("]" != g().text) {
                do
                    a.push(v());
                while (f(","))
            }
            k("]");
            return function(b, c) {
                for (var d = [], e = 0; e < a.length; e++)
                    d.push(a[e](b, c));
                return d
            }
        }
        function S() {
            var a = [];
            if ("}" != g().text) {
                do {
                    var b = f()
                      , b = b.string || b.text;
                    k(":");
                    var c = v();
                    a.push({
                        key: b,
                        value: c
                    })
                } while (f(","))
            }
            k("}");
            return function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            }
        }
        var T = H(0), da, z = Ic(b, d), v = q, D = C, B = ia, F = A, E = r;
        a ? (v = u,
        D = B = F = E = function() {
            e("is not valid json", {
                text: b,
                index: 0
            })
        }
        ,
        da = I()) : da = n();
        0 !== z.length && e("is an unexpected token", z[0]);
        return da
    }
    function Lb(b, a, c) {
        a = a.split(".");
        for (var d = 0; 1 < a.length; d++) {
            var e = a.shift()
              , g = b[e];
            g || (g = {},
            b[e] = g);
            b = g
        }
        return b[a.shift()] = c
    }
    function Mb(b, a, c, d, e) {
        return function(g, h) {
            var f = h && h.hasOwnProperty(b) ? h : g, k;
            if (null === f || f === t)
                return f;
            (f = f[b]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!a || null === f || f === t)
                return f;
            (f = f[a]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!c || null === f || f === t)
                return f;
            (f = f[c]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!d || null === f || f === t)
                return f;
            (f = f[d]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            if (!e || null === f || f === t)
                return f;
            (f = f[e]) && f.then && ("$$v"in f || (k = f,
            k.$$v = t,
            k.then(function(a) {
                k.$$v = a
            })),
            f = f.$$v);
            return f
        }
    }
    function Kb(b, a) {
        if (ib.hasOwnProperty(b))
            return ib[b];
        var c = b.split("."), d = c.length, e;
        if (a)
            e = 6 > d ? Mb(c[0], c[1], c[2], c[3], c[4]) : function(a, b) {
                var e = 0, l;
                do
                    l = Mb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b),
                    b = t,
                    a = l;
                while (e < d);
                return l
            }
            ;
        else {
            var g = "var l, fn, p;\n";
            p(c, function(a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            g += "return s;";
            e = Function("s", "k", g);
            e.toString = function() {
                return g
            }
        }
        return ib[b] = e
    }
    function Lc() {
        var b = {};
        this.$get = ["$filter", "$sniffer", function(a, c) {
            return function(d) {
                switch (typeof d) {
                case "string":
                    return b.hasOwnProperty(d) ? b[d] : b[d] = Kc(d, !1, a, c.csp);
                case "function":
                    return d;
                default:
                    return y
                }
            }
        }
        ]
    }
    function Mc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return Nc(function(a) {
                b.$evalAsync(a)
            }, a)
        }
        ]
    }
    function Nc(b, a) {
        function c(a) {
            return a
        }
        function d(a) {
            return h(a)
        }
        var e = function() {
            var f = [], k, l;
            return l = {
                resolve: function(a) {
                    if (f) {
                        var c = f;
                        f = t;
                        k = g(a);
                        c.length && b(function() {
                            for (var a, b = 0, d = c.length; b < d; b++)
                                a = c[b],
                                k.then(a[0], a[1])
                        })
                    }
                },
                reject: function(a) {
                    l.resolve(h(a))
                },
                promise: {
                    then: function(b, l) {
                        var g = e()
                          , h = function(d) {
                            try {
                                g.resolve((b || c)(d))
                            } catch (e) {
                                g.reject(e),
                                a(e)
                            }
                        }
                          , q = function(b) {
                            try {
                                g.resolve((l || d)(b))
                            } catch (c) {
                                g.reject(c),
                                a(c)
                            }
                        };
                        f ? f.push([h, q]) : k.then(h, q);
                        return g.promise
                    }
                }
            }
        }
          , g = function(a) {
            return a && a.then ? a : {
                then: function(c) {
                    var d = e();
                    b(function() {
                        d.resolve(c(a))
                    });
                    return d.promise
                }
            }
        }
          , h = function(a) {
            return {
                then: function(c, l) {
                    var g = e();
                    b(function() {
                        g.resolve((l || d)(a))
                    });
                    return g.promise
                }
            }
        };
        return {
            defer: e,
            reject: h,
            when: function(f, k, l) {
                var m = e(), n, r = function(b) {
                    try {
                        return (k || c)(b)
                    } catch (d) {
                        return a(d),
                        h(d)
                    }
                }, s = function(b) {
                    try {
                        return (l || d)(b)
                    } catch (c) {
                        return a(c),
                        h(c)
                    }
                };
                b(function() {
                    g(f).then(function(a) {
                        n || (n = !0,
                        m.resolve(g(a).then(r, s)))
                    }, function(a) {
                        n || (n = !0,
                        m.resolve(s(a)))
                    })
                });
                return m.promise
            },
            all: function(a) {
                var b = e()
                  , c = a.length
                  , d = [];
                c ? p(a, function(a, e) {
                    g(a).then(function(a) {
                        e in d || (d[e] = a,
                        --c || b.resolve(d))
                    }, function(a) {
                        e in d || b.reject(a)
                    })
                }) : b.resolve(d);
                return b.promise
            }
        }
    }
    function Oc() {
        var b = {};
        this.when = function(a, c) {
            b[a] = G({
                reloadOnSearch: !0
            }, c);
            if (a) {
                var d = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                b[d] = {
                    redirectTo: a
                }
            }
            return this
        }
        ;
        this.otherwise = function(a) {
            this.when(null, a);
            return this
        }
        ;
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function(a, c, d, e, g, h, f) {
            function k(a, b) {
                b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$";
                for (var c = "", d = [], e = {}, f = /:(\w+)/g, l, g = 0; null !== (l = f.exec(b)); )
                    c += b.slice(g, l.index),
                    c += "([^\\/]*)",
                    d.push(l[1]),
                    g = f.lastIndex;
                var c = c + b.substr(g)
                  , k = a.match(RegExp(c));
                k && p(d, function(a, b) {
                    e[a] = k[b + 1]
                });
                return k ? e : null
            }
            function l() {
                var b = m()
                  , l = s.current;
                if (b && l && b.$$route === l.$$route && ga(b.pathParams, l.pathParams) && !b.reloadOnSearch && !r)
                    l.params = b.params,
                    V(l.params, d),
                    a.$broadcast("$routeUpdate", l);
                else if (b || l)
                    r = !1,
                    a.$broadcast("$routeChangeStart", b, l),
                    (s.current = b) && b.redirectTo && (F(b.redirectTo) ? c.path(n(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()),
                    e.when(b).then(function() {
                        if (b) {
                            var a = [], c = [], d;
                            p(b.resolve || {}, function(b, d) {
                                a.push(d);
                                c.push(F(b) ? g.get(b) : g.invoke(b))
                            });
                            z(d = b.template) || z(d = b.templateUrl) && (d = h.get(d, {
                                cache: f
                            }).then(function(a) {
                                return a.data
                            }));
                            z(d) && (a.push("$template"),
                            c.push(d));
                            return e.all(c).then(function(b) {
                                var c = {};
                                p(b, function(b, d) {
                                    c[a[d]] = b
                                });
                                return c
                            })
                        }
                    }).then(function(c) {
                        b == s.current && (b && (b.locals = c,
                        V(b.params, d)),
                        a.$broadcast("$routeChangeSuccess", b, l))
                    }, function(c) {
                        b == s.current && a.$broadcast("$routeChangeError", b, l, c)
                    })
            }
            function m() {
                var a, d;
                p(b, function(b, e) {
                    !d && (a = k(c.path(), e)) && (d = za(b, {
                        params: G({}, c.search(), a),
                        pathParams: a
                    }),
                    d.$$route = b)
                });
                return d || b[null] && za(b[null], {
                    params: {},
                    pathParams: {}
                })
            }
            function n(a, b) {
                var c = [];
                p((a || "").split(":"), function(a, d) {
                    if (0 == d)
                        c.push(a);
                    else {
                        var e = a.match(/(\w+)(.*)/)
                          , f = e[1];
                        c.push(b[f]);
                        c.push(e[2] || "");
                        delete b[f]
                    }
                });
                return c.join("")
            }
            var r = !1
              , s = {
                routes: b,
                reload: function() {
                    r = !0;
                    a.$evalAsync(l)
                }
            };
            a.$on("$locationChangeSuccess", l);
            return s
        }
        ]
    }
    function Pc() {
        this.$get = H({})
    }
    function Qc() {
        var b = 10;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        }
        ;
        this.$get = ["$injector", "$exceptionHandler", "$parse", function(a, c, d) {
            function e() {
                this.$id = ya();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {}
            }
            function g(a) {
                if (k.$$phase)
                    throw Error(k.$$phase + " already in progress");
                k.$$phase = a
            }
            function h(a, b) {
                var c = d(a);
                sa(c, b);
                return c
            }
            function f() {}
            e.prototype = {
                $new: function(a) {
                    if (N(a))
                        throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                    a ? (a = new e,
                    a.$root = this.$root) : (a = function() {}
                    ,
                    a.prototype = this,
                    a = new a,
                    a.$id = ya());
                    a["this"] = a;
                    a.$$listeners = {};
                    a.$parent = this;
                    a.$$asyncQueue = [];
                    a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a
                },
                $watch: function(a, b, c) {
                    var d = h(a, "watch")
                      , e = this.$$watchers
                      , g = {
                        fn: b,
                        last: f,
                        get: d,
                        exp: a,
                        eq: !!c
                    };
                    if (!N(b)) {
                        var k = h(b || y, "listener");
                        g.fn = function(a, b, c) {
                            k(c)
                        }
                    }
                    e || (e = this.$$watchers = []);
                    e.unshift(g);
                    return function() {
                        Ta(e, g)
                    }
                },
                $digest: function() {
                    var a, d, e, h, s, q, u, w = b, p, t = [], J, x;
                    g("$digest");
                    do {
                        u = !1;
                        p = this;
                        do {
                            for (s = p.$$asyncQueue; s.length; )
                                try {
                                    p.$eval(s.shift())
                                } catch (I) {
                                    c(I)
                                }
                            if (h = p.$$watchers)
                                for (q = h.length; q--; )
                                    try {
                                        (a = h[q]) && (d = a.get(p)) !== (e = a.last) && !(a.eq ? ga(d, e) : "number" == typeof d && "number" == typeof e && isNaN(d) && isNaN(e)) && (u = !0,
                                        a.last = a.eq ? V(d) : d,
                                        a.fn(d, e === f ? d : e, p),
                                        5 > w && (J = 4 - w,
                                        t[J] || (t[J] = []),
                                        x = N(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                        x += "; newVal: " + ca(d) + "; oldVal: " + ca(e),
                                        t[J].push(x)))
                                    } catch (z) {
                                        c(z)
                                    }
                            if (!(h = p.$$childHead || p !== this && p.$$nextSibling))
                                for (; p !== this && !(h = p.$$nextSibling); )
                                    p = p.$parent
                        } while (p = h);
                        if (u && !w--)
                            throw k.$$phase = null,
                            Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + ca(t));
                    } while (u || s.length);
                    k.$$phase = null
                },
                $destroy: function() {
                    if (k != this && !this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                        a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                    }
                },
                $eval: function(a, b) {
                    return d(a)(this, b)
                },
                $evalAsync: function(a) {
                    this.$$asyncQueue.push(a)
                },
                $apply: function(a) {
                    try {
                        return g("$apply"),
                        this.$eval(a)
                    } catch (b) {
                        c(b)
                    } finally {
                        k.$$phase = null;
                        try {
                            k.$digest()
                        } catch (d) {
                            throw c(d),
                            d;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    return function() {
                        c[Ba(c, b)] = null
                    }
                },
                $emit: function(a, b) {
                    var d = [], e, f = this, g = !1, k = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0
                        },
                        preventDefault: function() {
                            k.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    }, h = [k].concat(ja.call(arguments, 1)), p, t;
                    do {
                        e = f.$$listeners[a] || d;
                        k.currentScope = f;
                        p = 0;
                        for (t = e.length; p < t; p++)
                            if (e[p])
                                try {
                                    if (e[p].apply(null, h),
                                    g)
                                        return k
                                } catch (J) {
                                    c(J)
                                }
                            else
                                e.splice(p, 1),
                                p--,
                                t--;
                        f = f.$parent
                    } while (f);
                    return k
                },
                $broadcast: function(a, b) {
                    var d = this, e = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0
                        },
                        defaultPrevented: !1
                    }, g = [f].concat(ja.call(arguments, 1)), k, h;
                    do {
                        d = e;
                        f.currentScope = d;
                        e = d.$$listeners[a] || [];
                        k = 0;
                        for (h = e.length; k < h; k++)
                            if (e[k])
                                try {
                                    e[k].apply(null, g)
                                } catch (p) {
                                    c(p)
                                }
                            else
                                e.splice(k, 1),
                                k--,
                                h--;
                        if (!(e = d.$$childHead || d !== this && d.$$nextSibling))
                            for (; d !== this && !(e = d.$$nextSibling); )
                                d = d.$parent
                    } while (d = e);
                    return f
                }
            };
            var k = new e;
            return k
        }
        ]
    }
    function Rc() {
        this.$get = ["$window", function(b) {
            var a = {}
              , c = D((/android (\d+)/.exec(B(b.navigator.userAgent)) || [])[1]);
            return {
                history: !(!b.history || !b.history.pushState || 4 > c),
                hashchange: "onhashchange"in b && (!b.document.documentMode || 7 < b.document.documentMode),
                hasEvent: function(c) {
                    if ("input" == c && 9 == W)
                        return !1;
                    if (A(a[c])) {
                        var e = b.document.createElement("div");
                        a[c] = "on" + c in e
                    }
                    return a[c]
                },
                csp: !1
            }
        }
        ]
    }
    function Sc() {
        this.$get = H(Q)
    }
    function Nb(b) {
        var a = {}, c, d, e;
        if (!b)
            return a;
        p(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = B(R(b.substr(0, e)));
            d = R(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + (", " + d) : d)
        });
        return a
    }
    function Ob(b) {
        var a = O(b) ? b : t;
        return function(c) {
            a || (a = Nb(b));
            return c ? a[B(c)] || null : a
        }
    }
    function Pb(b, a, c) {
        if (N(c))
            return c(b, a);
        p(c, function(c) {
            b = c(b, a)
        });
        return b
    }
    function Tc() {
        var b = /^\s*(\[|\{[^\{])/
          , a = /[\}\]]\s*$/
          , c = /^\)\]\}',?\n/
          , d = this.defaults = {
            transformResponse: [function(d) {
                F(d) && (d = d.replace(c, ""),
                b.test(d) && a.test(d) && (d = pb(d, !0)));
                return d
            }
            ],
            transformRequest: [function(a) {
                return O(a) && "[object File]" !== na.apply(a) ? ca(a) : a
            }
            ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "X-Requested-With": "XMLHttpRequest"
                },
                post: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                put: {
                    "Content-Type": "application/json;charset=utf-8"
                }
            }
        }
          , e = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, k, l, m) {
            function n(a) {
                function c(a) {
                    var b = G({}, a, {
                        data: Pb(a.data, a.headers, f)
                    });
                    return 200 <= a.status && 300 > a.status ? b : l.reject(b)
                }
                a.method = ma(a.method);
                var e = a.transformRequest || d.transformRequest, f = a.transformResponse || d.transformResponse, g = G({}, a.headers), k = G({
                    "X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]
                }, d.headers.common, d.headers[B(a.method)]), m, s, n, q;
                n: for (m in k) {
                    s = B(m);
                    for (n in a.headers)
                        if (B(n) === s)
                            continue n;
                    g[m] = k[m]
                }
                if (A(a.data))
                    for (var t in g)
                        if ("content-type" === B(t)) {
                            delete g[t];
                            break
                        }
                e = Pb(a.data, Ob(g), e);
                q = r(a, e, g);
                q = q.then(c, c);
                p(u, function(a) {
                    q = a(q)
                });
                q.success = function(b) {
                    q.then(function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return q
                }
                ;
                q.error = function(b) {
                    q.then(null, function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return q
                }
                ;
                return q
            }
            function r(b, c, d) {
                function e(a, b, c) {
                    p && (200 <= a && 300 > a ? p.put(t, [a, b, Nb(c)]) : p.remove(t));
                    f(b, a, c);
                    k.$apply()
                }
                function f(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && 300 > c ? m.resolve : m.reject)({
                        data: a,
                        status: c,
                        headers: Ob(d),
                        config: b
                    })
                }
                function h() {
                    var a = Ba(n.pendingRequests, b);
                    -1 !== a && n.pendingRequests.splice(a, 1)
                }
                var m = l.defer(), r = m.promise, p, u, t = s(b.url, b.params);
                n.pendingRequests.push(b);
                r.then(h, h);
                b.cache && "GET" == b.method && (p = O(b.cache) ? b.cache : q);
                if (p)
                    if (u = p.get(t),
                    z(u)) {
                        if (u.then)
                            return u.then(h, h),
                            u;
                        E(u) ? f(u[1], u[0], V(u[2])) : f(u, 200, {})
                    } else
                        p.put(t, r);
                A(u) && a(b.method, t, c, e, d, b.timeout, b.withCredentials);
                return r
            }
            function s(a, b) {
                if (!b)
                    return a;
                var c = [];
                dc(b, function(a, b) {
                    null != a && a != t && (O(a) && (a = ca(a)),
                    c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                });
                return a + (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")
            }
            var q = c("$http")
              , u = [];
            p(e, function(a) {
                u.push(F(a) ? m.get(a) : m.invoke(a))
            });
            n.pendingRequests = [];
            (function(a) {
                p(arguments, function(a) {
                    n[a] = function(b, c) {
                        return n(G(c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            }
            )("get", "delete", "head", "jsonp");
            (function(a) {
                p(arguments, function(a) {
                    n[a] = function(b, c, d) {
                        return n(G(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            }
            )("post", "put");
            n.defaults = d;
            return n
        }
        ]
    }
    function Uc() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return Vc(b, Wc, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
        }
        ]
    }
    function Vc(b, a, c, d, e, g) {
        function h(a, b) {
            var c = e.createElement("script")
              , d = function() {
                e.body.removeChild(c);
                b && b()
            };
            c.type = "text/javascript";
            c.src = a;
            W ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d()
            }
            : c.onload = c.onerror = d;
            e.body.appendChild(c)
        }
        return function(e, k, l, m, n, r, s) {
            function q(a, c, d, e) {
                c = "file" == (k.match(Gb) || ["", g])[1] ? d ? 200 : 404 : c;
                a(1223 == c ? 204 : c, d, e);
                b.$$completeOutstandingRequest(y)
            }
            b.$$incOutstandingRequestCount();
            k = k || b.url();
            if ("jsonp" == B(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function(a) {
                    d[u].data = a
                }
                ;
                h(k.replace("JSON_CALLBACK", "angular.callbacks." + u), function() {
                    d[u].data ? q(m, 200, d[u].data) : q(m, -2);
                    delete d[u]
                })
            } else {
                var w = new a;
                w.open(e, k, !0);
                p(n, function(a, b) {
                    a && w.setRequestHeader(b, a)
                });
                var t;
                w.onreadystatechange = function() {
                    if (4 == w.readyState) {
                        var a = w.getAllResponseHeaders()
                          , b = "Cache-Control Content-Language Content-Type Expires Last-Modified Pragma".split(" ");
                        a || (a = "",
                        p(b, function(b) {
                            var c = w.getResponseHeader(b);
                            c && (a += b + ": " + c + "\n")
                        }));
                        q(m, t || w.status, w.responseText, a)
                    }
                }
                ;
                s && (w.withCredentials = !0);
                w.send(l || "");
                0 < r && c(function() {
                    t = -1;
                    w.abort()
                }, r)
            }
        }
    }
    function Xc() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }
    function Yc() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
            function e(e, f, k) {
                var l = c.defer()
                  , m = l.promise
                  , n = z(k) && !k;
                f = a.defer(function() {
                    try {
                        l.resolve(e())
                    } catch (a) {
                        l.reject(a),
                        d(a)
                    } finally {
                        delete g[m.$$timeoutId]
                    }
                    n || b.$apply()
                }, f);
                m.$$timeoutId = f;
                g[f] = l;
                return m
            }
            var g = {};
            e.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"),
                delete g[b.$$timeoutId],
                a.defer.cancel(b.$$timeoutId)) : !1
            }
            ;
            return e
        }
        ]
    }
    function Qb(b) {
        function a(a, e) {
            return b.factory(a + c, e)
        }
        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + c)
            }
        }
        ];
        a("currency", Rb);
        a("date", Sb);
        a("filter", Zc);
        a("json", $c);
        a("limitTo", ad);
        a("lowercase", bd);
        a("number", Tb);
        a("orderBy", Ub);
        a("uppercase", cd)
    }
    function Zc() {
        return function(b, a) {
            if (!E(b))
                return b;
            var c = [];
            c.check = function(a) {
                for (var b = 0; b < c.length; b++)
                    if (!c[b](a))
                        return !1;
                return !0
            }
            ;
            var d = function(a, b) {
                if ("!" === b.charAt(0))
                    return !d(a, b.substr(1));
                switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    return -1 < ("" + a).toLowerCase().indexOf(b);
                case "object":
                    for (var c in a)
                        if ("$" !== c.charAt(0) && d(a[c], b))
                            return !0;
                    return !1;
                case "array":
                    for (c = 0; c < a.length; c++)
                        if (d(a[c], b))
                            return !0;
                    return !1;
                default:
                    return !1
                }
            };
            switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
                a = {
                    $: a
                };
            case "object":
                for (var e in a)
                    "$" == e ? function() {
                        var b = ("" + a[e]).toLowerCase();
                        b && c.push(function(a) {
                            return d(a, b)
                        })
                    }() : function() {
                        var b = e
                          , f = ("" + a[e]).toLowerCase();
                        f && c.push(function(a) {
                            return d(bb(a, b), f)
                        })
                    }();
                break;
            case "function":
                c.push(a);
                break;
            default:
                return b
            }
            for (var g = [], h = 0; h < b.length; h++) {
                var f = b[h];
                c.check(f) && g.push(f)
            }
            return g
        }
    }
    function Rb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            A(d) && (d = a.CURRENCY_SYM);
            return Vb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }
    function Tb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return Vb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }
    function Vb(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b))
            return "";
        var g = 0 > b;
        b = Math.abs(b);
        var h = b + ""
          , f = ""
          , k = []
          , l = !1;
        if (-1 !== h.indexOf("e")) {
            var m = h.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? h = "0" : (f = h,
            l = !0)
        }
        if (l)
            0 < e && -1 < b && 1 > b && (f = b.toFixed(e));
        else {
            h = (h.split(".")[1] || "").length;
            A(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
            h = Math.pow(10, e);
            b = Math.round(b * h) / h;
            b = ("" + b).split(".");
            h = b[0];
            b = b[1] || "";
            var l = 0
              , m = a.lgSize
              , n = a.gSize;
            if (h.length >= m + n)
                for (var l = h.length - m, r = 0; r < l; r++)
                    0 === (l - r) % n && 0 !== r && (f += c),
                    f += h.charAt(r);
            for (r = l; r < h.length; r++)
                0 === (h.length - r) % m && 0 !== r && (f += c),
                f += h.charAt(r);
            for (; b.length < e; )
                b += "0";
            e && "0" !== e && (f += d + b.substr(0, e))
        }
        k.push(g ? a.negPre : a.posPre);
        k.push(f);
        k.push(g ? a.negSuf : a.posSuf);
        return k.join("")
    }
    function jb(b, a, c) {
        var d = "";
        0 > b && (d = "-",
        b = -b);
        for (b = "" + b; b.length < a; )
            b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }
    function M(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c)
                e += c;
            0 === e && -12 == c && (e = 12);
            return jb(e, a, d)
        }
    }
    function Na(b, a) {
        return function(c, d) {
            var e = c["get" + b]()
              , g = ma(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }
    function Sb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var g = 0
                  , h = 0;
                b[9] && (g = D(b[9] + b[10]),
                h = D(b[9] + b[11]));
                a.setUTCFullYear(D(b[1]), D(b[2]) - 1, D(b[3]));
                a.setUTCHours(D(b[4] || 0) - g, D(b[5] || 0) - h, D(b[6] || 0), D(b[7] || 0))
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var g = "", h = [], f, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            F(c) && (c = dd.test(c) ? D(c) : a(c));
            Qa(c) && (c = new Date(c));
            if (!pa(c))
                return c;
            for (; e; )
                (k = ed.exec(e)) ? (h = h.concat(ja.call(k, 1)),
                e = h.pop()) : (h.push(e),
                e = null);
            p(h, function(a) {
                f = fd[a];
                g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }
    function $c() {
        return function(b) {
            return ca(b, !0)
        }
    }
    function ad() {
        return function(b, a) {
            if (!(b instanceof Array))
                return b;
            a = D(a);
            var c = [], d, e;
            if (!(b && b instanceof Array))
                return c;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0,
            e = a) : (d = b.length + a,
            e = b.length);
            for (; d < e; d++)
                c.push(b[d]);
            return c
        }
    }
    function Ub(b) {
        return function(a, c, d) {
            function e(a, b) {
                return Va(b) ? function(b, c) {
                    return a(c, b)
                }
                : a
            }
            if (!E(a) || !c)
                return a;
            c = E(c) ? c : [c];
            c = Sa(c, function(a) {
                var c = !1
                  , d = a || oa;
                if (F(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))
                        c = "-" == a.charAt(0),
                        a = a.substring(1);
                    d = b(a)
                }
                return e(function(a, b) {
                    var c;
                    c = d(a);
                    var e = d(b)
                      , f = typeof c
                      , g = typeof e;
                    f == g ? ("string" == f && (c = c.toLowerCase(),
                    e = e.toLowerCase()),
                    c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            });
            for (var g = [], h = 0; h < a.length; h++)
                g.push(a[h]);
            return g.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)
                        return e
                }
                return 0
            }, d))
        }
    }
    function X(b) {
        N(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return H(b)
    }
    function Wb(b, a) {
        function c(a, c) {
            c = c ? "-" + $a(c, "-") : "";
            b.removeClass((a ? "ng-invalid" : "ng-valid") + c).addClass((a ? "ng-valid" : "ng-invalid") + c)
        }
        var d = this
          , e = b.parent().controller("form") || Oa
          , g = 0
          , h = d.$error = {};
        d.$name = a.name || a.ngForm;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass("ng-pristine");
        c(!0);
        d.$addControl = function(a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        }
        ;
        d.$removeControl = function(a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            p(h, function(b, c) {
                d.$setValidity(c, !0, a)
            })
        }
        ;
        d.$setValidity = function(a, b, l) {
            var m = h[a];
            if (b)
                m && (Ta(m, l),
                m.length || (g--,
                g || (c(b),
                d.$valid = !0,
                d.$invalid = !1),
                h[a] = !1,
                c(!0, a),
                e.$setValidity(a, !0, d)));
            else {
                g || c(b);
                if (m) {
                    if (-1 != Ba(m, l))
                        return
                } else
                    h[a] = m = [],
                    g++,
                    c(!1, a),
                    e.$setValidity(a, !1, d);
                m.push(l);
                d.$valid = !1;
                d.$invalid = !0
            }
        }
        ;
        d.$setDirty = function() {
            b.removeClass("ng-pristine").addClass("ng-dirty");
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        }
    }
    function Y(b) {
        return A(b) || "" === b || null === b || b !== b
    }
    function Pa(b, a, c, d, e, g) {
        var h = function() {
            var c = R(a.val());
            d.$viewValue !== c && b.$apply(function() {
                d.$setViewValue(c)
            })
        };
        if (e.hasEvent("input"))
            a.bind("input", h);
        else {
            var f, k = function() {
                f || (f = g.defer(function() {
                    h();
                    f = null
                }))
            };
            a.bind("keydown", function(a) {
                a = a.keyCode;
                91 === a || 15 < a && 19 > a || 37 <= a && 40 >= a || k()
            });
            a.bind("change", h);
            e.hasEvent("paste") && a.bind("paste cut", k)
        }
        d.$render = function() {
            a.val(Y(d.$viewValue) ? "" : d.$viewValue)
        }
        ;
        var l = c.ngPattern
          , m = function(a, b) {
            if (Y(b) || a.test(b))
                return d.$setValidity("pattern", !0),
                b;
            d.$setValidity("pattern", !1);
            return t
        };
        l && (l.match(/^\/(.*)\/$/) ? (l = RegExp(l.substr(1, l.length - 2)),
        e = function(a) {
            return m(l, a)
        }
        ) : e = function(a) {
            var c = b.$eval(l);
            if (!c || !c.test)
                throw Error("Expected " + l + " to be a RegExp but was " + c);
            return m(c, a)
        }
        ,
        d.$formatters.push(e),
        d.$parsers.push(e));
        if (c.ngMinlength) {
            var n = D(c.ngMinlength);
            e = function(a) {
                if (!Y(a) && a.length < n)
                    return d.$setValidity("minlength", !1),
                    t;
                d.$setValidity("minlength", !0);
                return a
            }
            ;
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var r = D(c.ngMaxlength);
            c = function(a) {
                if (!Y(a) && a.length > r)
                    return d.$setValidity("maxlength", !1),
                    t;
                d.$setValidity("maxlength", !0);
                return a
            }
            ;
            d.$parsers.push(c);
            d.$formatters.push(c)
        }
    }
    function kb(b, a) {
        b = "ngClass" + b;
        return X(function(c, d, e) {
            function g(b) {
                if (!0 === a || c.$index % 2 === a)
                    k && !ga(b, k) && h(k),
                    f(b);
                k = V(b)
            }
            function h(a) {
                O(a) && !E(a) && (a = Sa(a, function(a, b) {
                    if (a)
                        return b
                }));
                d.removeClass(E(a) ? a.join(" ") : a)
            }
            function f(a) {
                O(a) && !E(a) && (a = Sa(a, function(a, b) {
                    if (a)
                        return b
                }));
                a && d.addClass(E(a) ? a.join(" ") : a)
            }
            var k = t;
            c.$watch(e[b], g, !0);
            e.$observe("class", function(a) {
                a = c.$eval(e[b]);
                g(a, a)
            });
            "ngClass" !== b && c.$watch("$index", function(d, g) {
                var k = d & 1;
                k !== g & 1 && (k === a ? f(c.$eval(e[b])) : h(c.$eval(e[b])))
            })
        })
    }
    var B = function(b) {
        return F(b) ? b.toLowerCase() : b
    }, ma = function(b) {
        return F(b) ? b.toUpperCase() : b
    }, W = D((/msie (\d+)/.exec(B(navigator.userAgent)) || [])[1]), v, ba, ja = [].slice, gd = [].push, na = Object.prototype.toString, Za = Q.angular || (Q.angular = {}), ua, Ja, $ = ["0", "0", "0"];
    y.$inject = [];
    oa.$inject = [];
    var R = function() {
        return String.prototype.trim ? function(b) {
            return F(b) ? b.trim() : b
        }
        : function(b) {
            return F(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
        }
    }();
    Ja = 9 > W ? function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? ma(b.scopeName + ":" + b.nodeName) : b.nodeName
    }
    : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    }
    ;
    var ic = /[A-Z]/g
      , hd = {
        full: "1.0.9-a4dc21e",
        major: 1,
        minor: 0,
        dot: 9,
        codeName: "marc-todo"
    }
      , Da = K.cache = {}
      , Ca = K.expando = "ng-" + (new Date).getTime()
      , mc = 1
      , Xb = Q.document.addEventListener ? function(b, a, c) {
        b.addEventListener(a, c, !1)
    }
    : function(b, a, c) {
        b.attachEvent("on" + a, c)
    }
      , fb = Q.document.removeEventListener ? function(b, a, c) {
        b.removeEventListener(a, c, !1)
    }
    : function(b, a, c) {
        b.detachEvent("on" + a, c)
    }
      , kc = /([\:\-\_]+(.))/g
      , lc = /^moz([A-Z])/
      , wa = K.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0,
                b())
            }
            var c = !1;
            this.bind("DOMContentLoaded", a);
            K(Q).bind("load", a)
        },
        toString: function() {
            var b = [];
            p(this, function(a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        },
        eq: function(b) {
            return 0 <= b ? v(this[b]) : v(this[this.length + b])
        },
        length: 0,
        push: gd,
        sort: [].sort,
        splice: [].splice
    }
      , Ga = {};
    p("multiple selected checked disabled readOnly required".split(" "), function(b) {
        Ga[B(b)] = b
    });
    var Cb = {};
    p("input select option textarea button form".split(" "), function(b) {
        Cb[ma(b)] = !0
    });
    p({
        data: xb,
        inheritedData: Fa,
        scope: function(b) {
            return Fa(b, "$scope")
        },
        controller: Ab,
        injector: function(b) {
            return Fa(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Ea,
        css: function(b, a, c) {
            a = ub(a);
            if (z(c))
                b.style[a] = c;
            else {
                var d;
                8 >= W && (d = b.currentStyle && b.currentStyle[a],
                "" === d && (d = "auto"));
                d = d || b.style[a];
                8 >= W && (d = "" === d ? t : d);
                return d
            }
        },
        attr: function(b, a, c) {
            var d = B(a);
            if (Ga[d])
                if (z(c))
                    c ? (b[a] = !0,
                    b.setAttribute(a, d)) : (b[a] = !1,
                    b.removeAttribute(d));
                else
                    return b[a] || (b.attributes.getNamedItem(a) || y).specified ? d : t;
            else if (z(c))
                b.setAttribute(a, c);
            else if (b.getAttribute)
                return b = b.getAttribute(a, 2),
                null === b ? t : b
        },
        prop: function(b, a, c) {
            if (z(c))
                b[a] = c;
            else
                return b[a]
        },
        text: G(9 > W ? function(b, a) {
            if (1 == b.nodeType) {
                if (A(a))
                    return b.innerText;
                b.innerText = a
            } else {
                if (A(a))
                    return b.nodeValue;
                b.nodeValue = a
            }
        }
        : function(b, a) {
            if (A(a))
                return b.textContent;
            b.textContent = a
        }
        , {
            $dv: ""
        }),
        val: function(b, a) {
            if (A(a)) {
                if ("SELECT" === Ja(b) && b.multiple) {
                    var c = [];
                    p(b.options, function(a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function(b, a) {
            if (A(a))
                return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++)
                ta(d[c]);
            b.innerHTML = a
        }
    }, function(b, a) {
        K.prototype[a] = function(a, d) {
            var e, g;
            if ((2 == b.length && b !== Ea && b !== Ab ? a : d) === t) {
                if (O(a)) {
                    for (e = 0; e < this.length; e++)
                        if (b === xb)
                            b(this[e], a);
                        else
                            for (g in a)
                                b(this[e], g, a[g]);
                    return this
                }
                if (this.length)
                    return b(this[0], a, d)
            } else {
                for (e = 0; e < this.length; e++)
                    b(this[e], a, d);
                return this
            }
            return b.$dv
        }
    });
    p({
        removeData: vb,
        dealoc: ta,
        bind: function a(c, d, e) {
            var g = aa(c, "events")
              , h = aa(c, "handle");
            g || aa(c, "events", g = {});
            h || aa(c, "handle", h = nc(c, g));
            p(d.split(" "), function(d) {
                var k = g[d];
                if (!k) {
                    if ("mouseenter" == d || "mouseleave" == d) {
                        var l = U.body.contains || U.body.compareDocumentPosition ? function(a, c) {
                            var d = 9 === a.nodeType ? a.documentElement : a
                              , e = c && c.parentNode;
                            return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                        }
                        : function(a, c) {
                            if (c)
                                for (; c = c.parentNode; )
                                    if (c === a)
                                        return !0;
                            return !1
                        }
                        ;
                        g[d] = [];
                        a(c, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[d], function(a) {
                            var c = a.relatedTarget;
                            c && (c === this || l(this, c)) || h(a, d)
                        })
                    } else
                        Xb(c, d, h),
                        g[d] = [];
                    k = g[d]
                }
                k.push(e)
            })
        },
        unbind: wb,
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            ta(a);
            p(new K(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            p(a.childNodes, function(a) {
                1 === a.nodeType && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.childNodes || []
        },
        append: function(a, c) {
            p(new K(c), function(c) {
                1 === a.nodeType && a.appendChild(c)
            })
        },
        prepend: function(a, c) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                p(new K(c), function(c) {
                    a.insertBefore(c, d)
                })
            }
        },
        wrap: function(a, c) {
            c = v(c)[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: function(a) {
            ta(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        },
        after: function(a, c) {
            var d = a
              , e = a.parentNode;
            p(new K(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        },
        addClass: zb,
        removeClass: yb,
        toggleClass: function(a, c, d) {
            A(d) && (d = !Ea(a, c));
            (d ? zb : yb)(a, c)
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        next: function(a) {
            if (a.nextElementSibling)
                return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType; )
                a = a.nextSibling;
            return a
        },
        find: function(a, c) {
            return a.getElementsByTagName(c)
        },
        clone: eb,
        triggerHandler: function(a, c) {
            var d = (aa(a, "events") || {})[c];
            p(d, function(c) {
                c.call(a, null)
            })
        }
    }, function(a, c) {
        K.prototype[c] = function(c, e) {
            for (var g, h = 0; h < this.length; h++)
                g == t ? (g = a(this[h], c, e),
                g !== t && (g = v(g))) : db(g, a(this[h], c, e));
            return g == t ? this : g
        }
    });
    Ha.prototype = {
        put: function(a, c) {
            this[ha(a)] = c
        },
        get: function(a) {
            return this[ha(a)]
        },
        remove: function(a) {
            var c = this[a = ha(a)];
            delete this[a];
            return c
        }
    };
    gb.prototype = {
        push: function(a, c) {
            var d = this[a = ha(a)];
            d ? d.push(c) : this[a] = [c]
        },
        shift: function(a) {
            var c = this[a = ha(a)];
            if (c)
                return 1 == c.length ? (delete this[a],
                c[0]) : c.shift()
        },
        peek: function(a) {
            if (a = this[ha(a)])
                return a[0]
        }
    };
    var pc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
      , qc = /,/
      , rc = /^\s*(_?)(\S+?)\1\s*$/
      , oc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
    Eb.$inject = ["$provide"];
    var yc = /^(x[\:\-_]|data[\:\-_])/i
      , Gb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/
      , Yb = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/
      , Fc = Yb
      , Hb = {
        http: 80,
        https: 443,
        ftp: 21
    };
    hb.prototype = {
        $$replace: !1,
        absUrl: La("$$absUrl"),
        url: function(a, c) {
            if (A(a))
                return this.$$url;
            var d = Yb.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            (d[2] || d[1]) && this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this
        },
        protocol: La("$$protocol"),
        host: La("$$host"),
        port: La("$$port"),
        path: Jb("$$path", function(a) {
            return "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function(a, c) {
            if (A(a))
                return this.$$search;
            z(c) ? null === c ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = F(a) ? Wa(a) : a;
            this.$$compose();
            return this
        },
        hash: Jb("$$hash", oa),
        replace: function() {
            this.$$replace = !0;
            return this
        }
    };
    Ka.prototype = za(hb.prototype);
    Ib.prototype = za(Ka.prototype);
    var Ma = {
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: y,
        "+": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return z(d) ? z(e) ? d + e : d : z(e) ? e : t
        },
        "-": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (z(d) ? d : 0) - (z(e) ? e : 0)
        },
        "*": function(a, c, d, e) {
            return d(a, c) * e(a, c)
        },
        "/": function(a, c, d, e) {
            return d(a, c) / e(a, c)
        },
        "%": function(a, c, d, e) {
            return d(a, c) % e(a, c)
        },
        "^": function(a, c, d, e) {
            return d(a, c) ^ e(a, c)
        },
        "=": y,
        "==": function(a, c, d, e) {
            return d(a, c) == e(a, c)
        },
        "!=": function(a, c, d, e) {
            return d(a, c) != e(a, c)
        },
        "<": function(a, c, d, e) {
            return d(a, c) < e(a, c)
        },
        ">": function(a, c, d, e) {
            return d(a, c) > e(a, c)
        },
        "<=": function(a, c, d, e) {
            return d(a, c) <= e(a, c)
        },
        ">=": function(a, c, d, e) {
            return d(a, c) >= e(a, c)
        },
        "&&": function(a, c, d, e) {
            return d(a, c) && e(a, c)
        },
        "||": function(a, c, d, e) {
            return d(a, c) || e(a, c)
        },
        "&": function(a, c, d, e) {
            return d(a, c) & e(a, c)
        },
        "|": function(a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        },
        "!": function(a, c, d) {
            return !d(a, c)
        }
    }
      , Jc = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "\t",
        v: "\v",
        "'": "'",
        '"': '"'
    }
      , ib = {}
      , Wc = Q.XMLHttpRequest || function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (a) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {}
        throw Error("This browser does not support XMLHttpRequest.");
    }
    ;
    Qb.$inject = ["$provide"];
    Rb.$inject = ["$locale"];
    Tb.$inject = ["$locale"];
    var fd = {
        yyyy: M("FullYear", 4),
        yy: M("FullYear", 2, 0, !0),
        y: M("FullYear", 1),
        MMMM: Na("Month"),
        MMM: Na("Month", !0),
        MM: M("Month", 2, 1),
        M: M("Month", 1, 1),
        dd: M("Date", 2),
        d: M("Date", 1),
        HH: M("Hours", 2),
        H: M("Hours", 1),
        hh: M("Hours", 2, -12),
        h: M("Hours", 1, -12),
        mm: M("Minutes", 2),
        m: M("Minutes", 1),
        ss: M("Seconds", 2),
        s: M("Seconds", 1),
        EEEE: Na("Day"),
        EEE: Na("Day", !0),
        a: function(a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function(a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + jb(Math.abs(a % 60), 2))
        }
    }
      , ed = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
      , dd = /^\d+$/;
    Sb.$inject = ["$locale"];
    var bd = H(B)
      , cd = H(ma);
    Ub.$inject = ["$parse"];
    var id = H({
        restrict: "E",
        compile: function(a, c) {
            8 >= W && (c.href || c.name || c.$set("href", ""),
            a.append(U.createComment("IE fix")));
            return function(a, c) {
                c.bind("click", function(a) {
                    c.attr("href") || a.preventDefault()
                })
            }
        }
    })
      , lb = {};
    p(Ga, function(a, c) {
        var d = fa("ng-" + c);
        lb[d] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(a, g, h) {
                        a.$watch(h[d], function(a) {
                            h.$set(c, !!a)
                        })
                    }
                }
            }
        }
    });
    p(["src", "href"], function(a) {
        var c = fa("ng-" + a);
        lb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, g) {
                    g.$observe(c, function(c) {
                        c && (g.$set(a, c),
                        W && e.prop(a, g[a]))
                    })
                }
            }
        }
    });
    var Oa = {
        $addControl: y,
        $removeControl: y,
        $setValidity: y,
        $setDirty: y
    };
    Wb.$inject = ["$element", "$attrs", "$scope"];
    var Zb = function(a) {
        return ["$timeout", function(c) {
            var d = {
                name: "form",
                restrict: "E",
                controller: Wb,
                compile: function() {
                    return {
                        pre: function(a, d, h, f) {
                            if (!h.action) {
                                var k = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                Xb(d[0], "submit", k);
                                d.bind("$destroy", function() {
                                    c(function() {
                                        fb(d[0], "submit", k)
                                    }, 0, !1)
                                })
                            }
                            var l = d.parent().controller("form")
                              , m = h.name || h.ngForm;
                            m && (a[m] = f);
                            l && d.bind("$destroy", function() {
                                l.$removeControl(f);
                                m && (a[m] = t);
                                G(f, Oa)
                            })
                        }
                    }
                }
            };
            return a ? G(V(d), {
                restrict: "EAC"
            }) : d
        }
        ]
    }
      , jd = Zb()
      , kd = Zb(!0)
      , ld = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/
      , md = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/
      , nd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/
      , $b = {
        text: Pa,
        number: function(a, c, d, e, g, h) {
            Pa(a, c, d, e, g, h);
            e.$parsers.push(function(a) {
                var c = Y(a);
                if (c || nd.test(a))
                    return e.$setValidity("number", !0),
                    "" === a ? null : c ? a : parseFloat(a);
                e.$setValidity("number", !1);
                return t
            });
            e.$formatters.push(function(a) {
                return Y(a) ? "" : "" + a
            });
            if (d.min) {
                var f = parseFloat(d.min);
                a = function(a) {
                    if (!Y(a) && a < f)
                        return e.$setValidity("min", !1),
                        t;
                    e.$setValidity("min", !0);
                    return a
                }
                ;
                e.$parsers.push(a);
                e.$formatters.push(a)
            }
            if (d.max) {
                var k = parseFloat(d.max);
                d = function(a) {
                    if (!Y(a) && a > k)
                        return e.$setValidity("max", !1),
                        t;
                    e.$setValidity("max", !0);
                    return a
                }
                ;
                e.$parsers.push(d);
                e.$formatters.push(d)
            }
            e.$formatters.push(function(a) {
                if (Y(a) || Qa(a))
                    return e.$setValidity("number", !0),
                    a;
                e.$setValidity("number", !1);
                return t
            })
        },
        url: function(a, c, d, e, g, h) {
            Pa(a, c, d, e, g, h);
            a = function(a) {
                if (Y(a) || ld.test(a))
                    return e.$setValidity("url", !0),
                    a;
                e.$setValidity("url", !1);
                return t
            }
            ;
            e.$formatters.push(a);
            e.$parsers.push(a)
        },
        email: function(a, c, d, e, g, h) {
            Pa(a, c, d, e, g, h);
            a = function(a) {
                if (Y(a) || md.test(a))
                    return e.$setValidity("email", !0),
                    a;
                e.$setValidity("email", !1);
                return t
            }
            ;
            e.$formatters.push(a);
            e.$parsers.push(a)
        },
        radio: function(a, c, d, e) {
            A(d.name) && c.attr("name", ya());
            c.bind("click", function() {
                c[0].checked && a.$apply(function() {
                    e.$setViewValue(d.value)
                })
            });
            e.$render = function() {
                c[0].checked = d.value == e.$viewValue
            }
            ;
            d.$observe("value", e.$render)
        },
        checkbox: function(a, c, d, e) {
            var g = d.ngTrueValue
              , h = d.ngFalseValue;
            F(g) || (g = !0);
            F(h) || (h = !1);
            c.bind("click", function() {
                a.$apply(function() {
                    e.$setViewValue(c[0].checked)
                })
            });
            e.$render = function() {
                c[0].checked = e.$viewValue
            }
            ;
            e.$formatters.push(function(a) {
                return a === g
            });
            e.$parsers.push(function(a) {
                return a ? g : h
            })
        },
        hidden: y,
        button: y,
        submit: y,
        reset: y
    }
      , ac = ["$browser", "$sniffer", function(a, c) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(d, e, g, h) {
                h && ($b[B(g.type)] || $b.text)(d, e, g, h, c, a)
            }
        }
    }
    ]
      , od = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, c, d, e, g) {
        function h(a, c) {
            c = c ? "-" + $a(c, "-") : "";
            e.removeClass((a ? "ng-invalid" : "ng-valid") + c).addClass((a ? "ng-valid" : "ng-invalid") + c)
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var f = g(d.ngModel)
          , k = f.assign;
        if (!k)
            throw Error("Non-assignable model expression: " + d.ngModel + " (" + ra(e) + ")");
        this.$render = y;
        var l = e.inheritedData("$formController") || Oa
          , m = 0
          , n = this.$error = {};
        e.addClass("ng-pristine");
        h(!0);
        this.$setValidity = function(a, c) {
            n[a] !== !c && (c ? (n[a] && m--,
            m || (h(!0),
            this.$valid = !0,
            this.$invalid = !1)) : (h(!1),
            this.$invalid = !0,
            this.$valid = !1,
            m++),
            n[a] = !c,
            h(c, a),
            l.$setValidity(a, c, this))
        }
        ;
        this.$setViewValue = function(d) {
            this.$viewValue = d;
            this.$pristine && (this.$dirty = !0,
            this.$pristine = !1,
            e.removeClass("ng-pristine").addClass("ng-dirty"),
            l.$setDirty());
            p(this.$parsers, function(a) {
                d = a(d)
            });
            this.$modelValue !== d && (this.$modelValue = d,
            k(a, d),
            p(this.$viewChangeListeners, function(a) {
                try {
                    a()
                } catch (d) {
                    c(d)
                }
            }))
        }
        ;
        var r = this;
        a.$watch(function() {
            var c = f(a);
            if (r.$modelValue !== c) {
                var d = r.$formatters
                  , e = d.length;
                for (r.$modelValue = c; e--; )
                    c = d[e](c);
                r.$viewValue !== c && (r.$viewValue = c,
                r.$render())
            }
        })
    }
    ]
      , pd = function() {
        return {
            require: ["ngModel", "^?form"],
            controller: od,
            link: function(a, c, d, e) {
                var g = e[0]
                  , h = e[1] || Oa;
                h.$addControl(g);
                c.bind("$destroy", function() {
                    h.$removeControl(g)
                })
            }
        }
    }
      , qd = H({
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange)
            })
        }
    })
      , bc = function() {
        return {
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var g = function(a) {
                        if (d.required && (Y(a) || !1 === a))
                            e.$setValidity("required", !1);
                        else
                            return e.$setValidity("required", !0),
                            a
                    };
                    e.$formatters.push(g);
                    e.$parsers.unshift(g);
                    d.$observe("required", function() {
                        g(e.$viewValue)
                    })
                }
            }
        }
    }
      , rd = function() {
        return {
            require: "ngModel",
            link: function(a, c, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    var c = [];
                    a && p(a.split(g), function(a) {
                        a && c.push(R(a))
                    });
                    return c
                });
                e.$formatters.push(function(a) {
                    return E(a) ? a.join(", ") : t
                })
            }
        }
    }
      , sd = /^(true|false|\d+)$/
      , td = function() {
        return {
            priority: 100,
            compile: function(a, c) {
                return sd.test(c.ngValue) ? function(a, c, g) {
                    g.$set("value", a.$eval(g.ngValue))
                }
                : function(a, c, g) {
                    a.$watch(g.ngValue, function(a) {
                        g.$set("value", a)
                    })
                }
            }
        }
    }
      , ud = X(function(a, c, d) {
        c.addClass("ng-binding").data("$binding", d.ngBind);
        a.$watch(d.ngBind, function(a) {
            c.text(a == t ? "" : a)
        })
    })
      , vd = ["$interpolate", function(a) {
        return function(c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function(a) {
                d.text(a)
            })
        }
    }
    ]
      , wd = [function() {
        return function(a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
            a.$watch(d.ngBindHtmlUnsafe, function(a) {
                c.html(a || "")
            })
        }
    }
    ]
      , xd = kb("", !0)
      , yd = kb("Odd", 0)
      , zd = kb("Even", 1)
      , Ad = X({
        compile: function(a, c) {
            c.$set("ngCloak", t);
            a.removeClass("ng-cloak")
        }
    })
      , Bd = [function() {
        return {
            scope: !0,
            controller: "@"
        }
    }
    ]
      , Cd = ["$sniffer", function(a) {
        return {
            priority: 1E3,
            compile: function() {
                a.csp = !0
            }
        }
    }
    ]
      , cc = {};
    p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave submit".split(" "), function(a) {
        var c = fa("ng-" + a);
        cc[c] = ["$parse", function(d) {
            return function(e, g, h) {
                var f = d(h[c]);
                g.bind(B(a), function(a) {
                    e.$apply(function() {
                        f(e, {
                            $event: a
                        })
                    })
                })
            }
        }
        ]
    });
    var Dd = ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, c, d, e) {
        return {
            restrict: "ECA",
            terminal: !0,
            compile: function(g, h) {
                var f = h.ngInclude || h.src
                  , k = h.onload || ""
                  , l = h.autoscroll;
                return function(g, h) {
                    var r = 0, p, q = function() {
                        p && (p.$destroy(),
                        p = null);
                        h.html("")
                    };
                    g.$watch(f, function(f) {
                        var t = ++r;
                        f ? a.get(f, {
                            cache: c
                        }).success(function(a) {
                            t === r && (p && p.$destroy(),
                            p = g.$new(),
                            h.html(a),
                            e(h.contents())(p),
                            !z(l) || l && !g.$eval(l) || d(),
                            p.$emit("$includeContentLoaded"),
                            g.$eval(k))
                        }).error(function() {
                            t === r && q()
                        }) : q()
                    })
                }
            }
        }
    }
    ]
      , Ed = X({
        compile: function() {
            return {
                pre: function(a, c, d) {
                    a.$eval(d.ngInit)
                }
            }
        }
    })
      , Fd = X({
        terminal: !0,
        priority: 1E3
    })
      , Gd = ["$locale", "$interpolate", function(a, c) {
        var d = /{}/g;
        return {
            restrict: "EA",
            link: function(e, g, h) {
                var f = h.count
                  , k = g.attr(h.$attr.when)
                  , l = h.offset || 0
                  , m = e.$eval(k)
                  , n = {}
                  , r = c.startSymbol()
                  , s = c.endSymbol();
                p(m, function(a, e) {
                    n[e] = c(a.replace(d, r + f + "-" + l + s))
                });
                e.$watch(function() {
                    var c = parseFloat(e.$eval(f));
                    if (isNaN(c))
                        return "";
                    c in m || (c = a.pluralCat(c - l));
                    return n[c](e, g, !0)
                }, function(a) {
                    g.text(a)
                })
            }
        }
    }
    ]
      , Hd = X({
        transclude: "element",
        priority: 1E3,
        terminal: !0,
        compile: function(a, c, d) {
            return function(a, c, h) {
                var f = h.ngRepeat;
                h = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/);
                var k, l, m;
                if (!h)
                    throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
                f = h[1];
                k = h[2];
                h = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!h)
                    throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + f + "'.");
                l = h[3] || h[1];
                m = h[2];
                var n = new gb;
                a.$watch(function(a) {
                    var e, f, h = a.$eval(k), p = c, t = new gb, z, v, x, A, y, D;
                    if (E(h))
                        y = h || [];
                    else {
                        y = [];
                        for (x in h)
                            h.hasOwnProperty(x) && "$" != x.charAt(0) && y.push(x);
                        y.sort()
                    }
                    z = y.length - 1;
                    e = 0;
                    for (f = y.length; e < f; e++)
                        x = h === y ? e : y[e],
                        A = h[x],
                        (D = n.shift(A)) ? (v = D.scope,
                        t.push(A, D),
                        e !== D.index && (D.index = e,
                        p.after(D.element)),
                        p = D.element) : v = a.$new(),
                        v[l] = A,
                        m && (v[m] = x),
                        v.$index = e,
                        v.$first = 0 === e,
                        v.$last = e === z,
                        v.$middle = !(v.$first || v.$last),
                        D || d(v, function(a) {
                            p.after(a);
                            D = {
                                scope: v,
                                element: p = a,
                                index: e
                            };
                            t.push(A, D)
                        });
                    for (x in n)
                        if (n.hasOwnProperty(x))
                            for (y = n[x]; y.length; )
                                A = y.pop(),
                                A.element.remove(),
                                A.scope.$destroy();
                    n = t
                })
            }
        }
    })
      , Id = X(function(a, c, d) {
        a.$watch(d.ngShow, function(a) {
            c.css("display", Va(a) ? "" : "none")
        })
    })
      , Jd = X(function(a, c, d) {
        a.$watch(d.ngHide, function(a) {
            c.css("display", Va(a) ? "none" : "")
        })
    })
      , Kd = X(function(a, c, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && p(d, function(a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    })
      , Ld = H({
        restrict: "EA",
        require: "ngSwitch",
        controller: ["$scope", function() {
            this.cases = {}
        }
        ],
        link: function(a, c, d, e) {
            var g, h, f;
            a.$watch(d.ngSwitch || d.on, function(k) {
                h && (f.$destroy(),
                h.remove(),
                h = f = null);
                if (g = e.cases["!" + k] || e.cases["?"])
                    a.$eval(d.change),
                    f = a.$new(),
                    g(f, function(a) {
                        h = a;
                        c.append(a)
                    })
            })
        }
    })
      , Md = X({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(a, c, d) {
            return function(a, g, h, f) {
                f.cases["!" + c.ngSwitchWhen] = d
            }
        }
    })
      , Nd = X({
        transclude: "element",
        priority: 500,
        require: "^ngSwitch",
        compile: function(a, c, d) {
            return function(a, c, h, f) {
                f.cases["?"] = d
            }
        }
    })
      , Od = X({
        controller: ["$transclude", "$element", function(a, c) {
            a(function(a) {
                c.append(a)
            })
        }
        ]
    })
      , Pd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function(a, c, d, e, g, h) {
        return {
            restrict: "ECA",
            terminal: !0,
            link: function(a, c, l) {
                function m() {
                    var l = d.current && d.current.locals
                      , m = l && l.$template;
                    if (m) {
                        c.html(m);
                        n && (n.$destroy(),
                        n = null);
                        var m = g(c.contents())
                          , p = d.current;
                        n = p.scope = a.$new();
                        p.controller && (l.$scope = n,
                        l = h(p.controller, l),
                        c.children().data("$ngControllerController", l));
                        m(n);
                        n.$emit("$viewContentLoaded");
                        n.$eval(r);
                        e()
                    } else
                        c.html(""),
                        n && (n.$destroy(),
                        n = null)
                }
                var n, r = l.onload || "";
                a.$on("$routeChangeSuccess", m);
                m()
            }
        }
    }
    ]
      , Qd = ["$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text)
            }
        }
    }
    ]
      , Rd = H({
        terminal: !0
    })
      , Sd = ["$compile", "$parse", function(a, c) {
        var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/
          , e = {
            $setViewValue: y
        };
        return {
            restrict: "E",
            require: ["select", "?ngModel"],
            controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                var k = this, l = {}, m = e, n;
                k.databound = d.ngModel;
                k.init = function(a, c, d) {
                    m = a;
                    n = d
                }
                ;
                k.addOption = function(c) {
                    l[c] = !0;
                    m.$viewValue == c && (a.val(c),
                    n.parent() && n.remove())
                }
                ;
                k.removeOption = function(a) {
                    this.hasOption(a) && (delete l[a],
                    m.$viewValue == a && this.renderUnknownOption(a))
                }
                ;
                k.renderUnknownOption = function(c) {
                    c = "? " + ha(c) + " ?";
                    n.val(c);
                    a.prepend(n);
                    a.val(c);
                    n.prop("selected", !0)
                }
                ;
                k.hasOption = function(a) {
                    return l.hasOwnProperty(a)
                }
                ;
                c.$on("$destroy", function() {
                    k.renderUnknownOption = y
                })
            }
            ],
            link: function(e, h, f, k) {
                function l(a, c, d, e) {
                    d.$render = function() {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (x.parent() && x.remove(),
                        c.val(a),
                        "" === a && y.prop("selected", !0)) : A(a) && y ? c.val("") : e.renderUnknownOption(a)
                    }
                    ;
                    c.bind("change", function() {
                        a.$apply(function() {
                            x.parent() && x.remove();
                            d.$setViewValue(c.val())
                        })
                    })
                }
                function m(a, c, d) {
                    var e;
                    d.$render = function() {
                        var a = new Ha(d.$viewValue);
                        p(c.find("option"), function(c) {
                            c.selected = z(a.get(c.value))
                        })
                    }
                    ;
                    a.$watch(function() {
                        ga(e, d.$viewValue) || (e = V(d.$viewValue),
                        d.$render())
                    });
                    c.bind("change", function() {
                        a.$apply(function() {
                            var a = [];
                            p(c.find("option"), function(c) {
                                c.selected && a.push(c.value)
                            });
                            d.$setViewValue(a)
                        })
                    })
                }
                function n(e, f, g) {
                    function k() {
                        var a = {
                            "": []
                        }, c = [""], d, h, u, v, y;
                        u = g.$modelValue;
                        v = s(e) || [];
                        var z = n ? mb(v) : v, A, B, E;
                        B = {};
                        y = !1;
                        var F, H;
                        q && (y = new Ha(u));
                        for (E = 0; A = z.length,
                        E < A; E++) {
                            h = E;
                            if (n) {
                                h = z[E];
                                if ("$" === h.charAt(0))
                                    continue;
                                B[n] = h
                            }
                            B[m] = v[h];
                            d = p(e, B) || "";
                            (h = a[d]) || (h = a[d] = [],
                            c.push(d));
                            q ? d = y.remove(r(e, B)) != t : (d = u === r(e, B),
                            y = y || d);
                            F = l(e, B);
                            F = F === t ? "" : F;
                            h.push({
                                id: n ? z[E] : E,
                                label: F,
                                selected: d
                            })
                        }
                        q || (w || null === u ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !y
                        }) : y || a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        }));
                        B = 0;
                        for (z = c.length; B < z; B++) {
                            d = c[B];
                            h = a[d];
                            x.length <= B ? (u = {
                                element: G.clone().attr("label", d),
                                label: h.label
                            },
                            v = [u],
                            x.push(v),
                            f.append(u.element)) : (v = x[B],
                            u = v[0],
                            u.label != d && u.element.attr("label", u.label = d));
                            F = null;
                            E = 0;
                            for (A = h.length; E < A; E++)
                                d = h[E],
                                (y = v[E + 1]) ? (F = y.element,
                                y.label !== d.label && F.text(y.label = d.label),
                                y.id !== d.id && F.val(y.id = d.id),
                                F[0].selected !== d.selected && F.prop("selected", y.selected = d.selected)) : ("" === d.id && w ? H = w : (H = D.clone()).val(d.id).attr("selected", d.selected).text(d.label),
                                v.push({
                                    element: H,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }),
                                F ? F.after(H) : u.element.append(H),
                                F = H);
                            for (E++; v.length > E; )
                                v.pop().element.remove()
                        }
                        for (; x.length > B; )
                            x.pop()[0].element.remove()
                    }
                    var h;
                    if (!(h = u.match(d)))
                        throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + u + "'.");
                    var l = c(h[2] || h[1])
                      , m = h[4] || h[6]
                      , n = h[5]
                      , p = c(h[3] || "")
                      , r = c(h[2] ? h[1] : m)
                      , s = c(h[7])
                      , x = [[{
                        element: f,
                        label: ""
                    }]];
                    w && (a(w)(e),
                    w.removeClass("ng-scope"),
                    w.remove());
                    f.html("");
                    f.bind("change", function() {
                        e.$apply(function() {
                            var a, c = s(e) || [], d = {}, h, k, l, p, u, v;
                            if (q)
                                for (k = [],
                                p = 0,
                                v = x.length; p < v; p++)
                                    for (a = x[p],
                                    l = 1,
                                    u = a.length; l < u; l++)
                                        (h = a[l].element)[0].selected && (h = h.val(),
                                        n && (d[n] = h),
                                        d[m] = c[h],
                                        k.push(r(e, d)));
                            else
                                h = f.val(),
                                "?" == h ? k = t : "" == h ? k = null : (d[m] = c[h],
                                n && (d[n] = h),
                                k = r(e, d));
                            g.$setViewValue(k)
                        })
                    });
                    g.$render = k;
                    e.$watch(k)
                }
                if (k[1]) {
                    var r = k[0], s = k[1], q = f.multiple, u = f.ngOptions, w = !1, y, D = v(U.createElement("option")), G = v(U.createElement("optgroup")), x = D.clone();
                    k = 0;
                    for (var B = h.children(), F = B.length; k < F; k++)
                        if ("" == B[k].value) {
                            y = w = B.eq(k);
                            break
                        }
                    r.init(s, w, x);
                    if (q && (f.required || f.ngRequired)) {
                        var E = function(a) {
                            s.$setValidity("required", !f.required || a && a.length);
                            return a
                        };
                        s.$parsers.push(E);
                        s.$formatters.unshift(E);
                        f.$observe("required", function() {
                            E(s.$viewValue)
                        })
                    }
                    u ? n(e, h, s) : q ? m(e, h, s) : l(e, h, s, r)
                }
            }
        }
    }
    ]
      , Td = ["$interpolate", function(a) {
        var c = {
            addOption: y,
            removeOption: y
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (A(e.value)) {
                    var g = a(d.text(), !0);
                    g || e.$set("value", d.text())
                }
                return function(a, d, e) {
                    var l = d.parent()
                      , m = l.data("$selectController") || l.parent().data("$selectController");
                    m && m.databound ? d.prop("selected", !1) : m = c;
                    g ? a.$watch(g, function(a, c) {
                        e.$set("value", a);
                        a !== c && m.removeOption(c);
                        m.addOption(a)
                    }) : m.addOption(e.value);
                    d.bind("$destroy", function() {
                        m.removeOption(e.value)
                    })
                }
            }
        }
    }
    ]
      , Ud = H({
        restrict: "E",
        terminal: !0
    });
    (ba = Q.jQuery) ? (v = ba,
    G(ba.fn, {
        scope: wa.scope,
        controller: wa.controller,
        injector: wa.injector,
        inheritedData: wa.inheritedData
    }),
    cb("remove", !0, !0, !1),
    cb("empty", !1, !1, !1),
    cb("html", !1, !1, !0)) : v = K;
    Za.element = v;
    (function(a) {
        G(a, {
            bootstrap: sb,
            copy: V,
            extend: G,
            equals: ga,
            element: v,
            forEach: p,
            injector: tb,
            noop: y,
            bind: Ua,
            toJson: ca,
            fromJson: pb,
            identity: oa,
            isUndefined: A,
            isDefined: z,
            isString: F,
            isFunction: N,
            isObject: O,
            isNumber: Qa,
            isElement: ec,
            isArray: E,
            version: hd,
            isDate: pa,
            lowercase: B,
            uppercase: ma,
            callbacks: {
                counter: 0
            }
        });
        ua = jc(Q);
        try {
            ua("ngLocale")
        } catch (c) {
            ua("ngLocale", []).provider("$locale", Xc)
        }
        ua("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider("$compile", Eb).directive({
                a: id,
                input: ac,
                textarea: ac,
                form: jd,
                script: Qd,
                select: Sd,
                style: Ud,
                option: Td,
                ngBind: ud,
                ngBindHtmlUnsafe: wd,
                ngBindTemplate: vd,
                ngClass: xd,
                ngClassEven: zd,
                ngClassOdd: yd,
                ngCsp: Cd,
                ngCloak: Ad,
                ngController: Bd,
                ngForm: kd,
                ngHide: Jd,
                ngInclude: Dd,
                ngInit: Ed,
                ngNonBindable: Fd,
                ngPluralize: Gd,
                ngRepeat: Hd,
                ngShow: Id,
                ngStyle: Kd,
                ngSwitch: Ld,
                ngSwitchWhen: Md,
                ngSwitchDefault: Nd,
                ngOptions: Rd,
                ngView: Pd,
                ngTransclude: Od,
                ngModel: pd,
                ngList: rd,
                ngChange: qd,
                required: bc,
                ngRequired: bc,
                ngValue: td
            }).directive(lb).directive(cc);
            a.provider({
                $anchorScroll: sc,
                $browser: uc,
                $cacheFactory: vc,
                $controller: zc,
                $document: Ac,
                $exceptionHandler: Bc,
                $filter: Qb,
                $interpolate: Cc,
                $http: Tc,
                $httpBackend: Uc,
                $location: Gc,
                $log: Hc,
                $parse: Lc,
                $route: Oc,
                $routeParams: Pc,
                $rootScope: Qc,
                $q: Mc,
                $sniffer: Rc,
                $templateCache: wc,
                $timeout: Yc,
                $window: Sc
            })
        }
        ])
    }
    )(Za);
    v(U).ready(function() {
        hc(U, sb)
    })
}
)(window, document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";\n\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak],\n.ng-cloak, .x-ng-cloak {\n  display: none !important;\n}\n\nng\\:form {\n  display: block;\n}\n</style>');

/*
 AngularJS v1.0.9-a4dc21e
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F, d, z) {
    'use strict';
    d.module("ngResource", ["ng"]).factory("$resource", ["$http", "$parse", function(A, B) {
        function v(a, e) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, e ? "%20" : "+")
        }
        function w(a, e) {
            this.template = a += "#";
            this.defaults = e || {};
            var b = this.urlParams = {};
            h(a.split(/\W/), function(f) {
                f && RegExp("(^|[^\\\\]):" + f + "\\W").test(a) && (b[f] = !0)
            });
            this.template = a.replace(/\\:/g, ":")
        }
        function x(a, e, b) {
            function f(p, a) {
                var b = {};
                a = r({}, e, a);
                h(a, function(a, C) {
                    var c;
                    a.charAt && "@" == a.charAt(0) ? (c = a.substr(1),
                    c = B(c)(p)) : c = a;
                    b[C] = c
                });
                return b
            }
            function g(a) {
                y(a || {}, this)
            }
            var m = new w(a);
            b = r({}, D, b);
            h(b, function(a, b) {
                a.method = d.uppercase(a.method);
                var e = "POST" == a.method || "PUT" == a.method || "PATCH" == a.method;
                g[b] = function(b, c, d, E) {
                    var l = {}, k, n = s, t = null;
                    switch (arguments.length) {
                    case 4:
                        t = E,
                        n = d;
                    case 3:
                    case 2:
                        if (u(c)) {
                            if (u(b)) {
                                n = b;
                                t = c;
                                break
                            }
                            n = c;
                            t = d
                        } else {
                            l = b;
                            k = c;
                            n = d;
                            break
                        }
                    case 1:
                        u(b) ? n = b : e ? k = b : l = b;
                        break;
                    case 0:
                        break;
                    default:
                        throw "Expected between 0-4 arguments [params, data, success, error], got " + arguments.length + " arguments.";
                    }
                    var q = this instanceof g ? this : a.isArray ? [] : new g(k);
                    A({
                        method: a.method,
                        url: m.url(r({}, f(k, a.params || {}), l)),
                        data: k
                    }).then(function(b) {
                        var c = b.data;
                        c && (a.isArray ? (q.length = 0,
                        h(c, function(a) {
                            q.push(new g(a))
                        })) : y(c, q));
                        (n || s)(q, b.headers)
                    }, t);
                    return q
                }
                ;
                g.prototype["$" + b] = function(a, d, h) {
                    var p = f(this), l = s, k;
                    switch (arguments.length) {
                    case 3:
                        p = a;
                        l = d;
                        k = h;
                        break;
                    case 2:
                    case 1:
                        u(a) ? (l = a,
                        k = d) : (p = a,
                        l = d || s);
                    case 0:
                        break;
                    default:
                        throw "Expected between 1-3 arguments [params, success, error], got " + arguments.length + " arguments.";
                    }
                    g[b].call(this, p, e ? this : z, l, k)
                }
            });
            g.bind = function(d) {
                return x(a, r({}, e, d), b)
            }
            ;
            return g
        }
        var D = {
            get: {
                method: "GET"
            },
            save: {
                method: "POST"
            },
            query: {
                method: "GET",
                isArray: !0
            },
            remove: {
                method: "DELETE"
            },
            "delete": {
                method: "DELETE"
            }
        }
          , s = d.noop
          , h = d.forEach
          , r = d.extend
          , y = d.copy
          , u = d.isFunction;
        w.prototype = {
            url: function(a) {
                var e = this, b = this.template, f, g;
                a = a || {};
                h(this.urlParams, function(h, c) {
                    f = a.hasOwnProperty(c) ? a[c] : e.defaults[c];
                    d.isDefined(f) && null !== f ? (g = v(f, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"),
                    b = b.replace(RegExp(":" + c + "(\\W)", "g"), g + "$1")) : b = b.replace(RegExp("(/?):" + c + "(\\W)", "g"), function(a, b, c) {
                        return "/" == c.charAt(0) ? c : b + c
                    })
                });
                var b = b.replace(/\/?#$/, "")
                  , m = [];
                h(a, function(a, b) {
                    e.urlParams[b] || m.push(v(b) + "=" + v(a))
                });
                m.sort();
                b = b.replace(/\/*$/, "");
                return b + (m.length ? "?" + m.join("&") : "")
            }
        };
        return x
    }
    ])
}
)(window, window.angular);

(function() {
    var d, aa = aa || {}, h = this;
    function ba(a, b, c) {
        a = a.split(".");
        c = c || h;
        a[0]in c || !c.execScript || c.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift()); )
            a.length || void 0 === b ? c = c[e] ? c[e] : c[e] = {} : c[e] = b
    }
    function m(a, b) {
        for (var c = a.split("."), e = b || h, f; f = c.shift(); )
            if (null != e[f])
                e = e[f];
            else
                return null;
        return e
    }
    function p() {}
    function da(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function t(a) {
        return void 0 !== a
    }
    function u(a) {
        return "array" == da(a)
    }
    function ea(a) {
        var b = da(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function v(a) {
        return "string" == typeof a
    }
    function fa(a) {
        return "number" == typeof a
    }
    function ga(a) {
        return "function" == da(a)
    }
    function ha(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var ia = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , ja = 0;
    function la(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ma(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, e);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function w(a, b, c) {
        w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
        return w.apply(null, arguments)
    }
    function na(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    function x(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    var y = Date.now || function() {
        return +new Date
    }
    ;
    function z(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.h = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    }
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return w.apply(null, c)
        }
        return w(this, a)
    }
    ;
    Function.prototype.k9 = function(a) {
        var b = Array.prototype.slice.call(arguments);
        b.unshift(this, null);
        return w.apply(null, b)
    }
    ;
    Function.prototype.G8 = function(a) {
        z(this, a)
    }
    ;
    Function.prototype.g9 = function(a) {
        x(this.prototype, a)
    }
    ;
    function oa(a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, oa) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    }
    z(oa, Error);
    oa.prototype.name = "CustomError";
    var pa;
    function sa(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }
    function ta(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    function ua(a, b) {
        var c = String(a).toLowerCase()
          , e = String(b).toLowerCase();
        return c < e ? -1 : c == e ? 0 : 1
    }
    function va(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    function wa(a, b) {
        if (b)
            return a.replace(xa, "&amp;").replace(ya, "&lt;").replace(Aa, "&gt;").replace(Ba, "&quot;");
        if (!Ca.test(a))
            return a;
        -1 != a.indexOf("&") && (a = a.replace(xa, "&amp;"));
        -1 != a.indexOf("<") && (a = a.replace(ya, "&lt;"));
        -1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
        -1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
        return a
    }
    var xa = /&/g
      , ya = /</g
      , Aa = />/g
      , Ba = /\"/g
      , Ca = /[&<>\"]/;
    function C(a, b) {
        return -1 != a.indexOf(b)
    }
    function Da(a) {
        return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    Math.random();
    function Ea(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }
    function Fa(a, b) {
        var c = v(b) ? Da(b) : "\\s";
        return a.replace(RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
            return b + c.toUpperCase()
        })
    }
    ;var D = Array.prototype
      , Ga = D.indexOf ? function(a, b, c) {
        return D.indexOf.call(a, b, c)
    }
    : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (v(a))
            return v(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , E = D.forEach ? function(a, b, c) {
        D.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
            g in f && b.call(c, f[g], g, a)
    }
    ;
    function Ha(a, b, c) {
        for (var e = a.length, f = v(a) ? a.split("") : a, e = e - 1; 0 <= e; --e)
            e in f && b.call(c, f[e], e, a)
    }
    var Ia = D.filter ? function(a, b, c) {
        return D.filter.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = [], g = 0, k = v(a) ? a.split("") : a, l = 0; l < e; l++)
            if (l in k) {
                var n = k[l];
                b.call(c, n, l, a) && (f[g++] = n)
            }
        return f
    }
      , Ja = D.map ? function(a, b, c) {
        return D.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = Array(e), g = v(a) ? a.split("") : a, k = 0; k < e; k++)
            k in g && (f[k] = b.call(c, g[k], k, a));
        return f
    }
      , Ka = D.some ? function(a, b, c) {
        return D.some.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && b.call(c, f[g], g, a))
                return !0;
        return !1
    }
      , La = D.every ? function(a, b, c) {
        return D.every.call(a, b, c)
    }
    : function(a, b, c) {
        for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
            if (g in f && !b.call(c, f[g], g, a))
                return !1;
        return !0
    }
    ;
    function Ma(a, b, c) {
        t: {
            for (var e = a.length, f = v(a) ? a.split("") : a, g = 0; g < e; g++)
                if (g in f && b.call(c, f[g], g, a)) {
                    b = g;
                    break t
                }
            b = -1
        }
        return 0 > b ? null : v(a) ? a.charAt(b) : a[b]
    }
    function F(a, b) {
        return 0 <= Ga(a, b)
    }
    function Na(a, b) {
        var c = Ga(a, b), e;
        (e = 0 <= c) && D.splice.call(a, c, 1);
        return e
    }
    function Oa(a) {
        return D.concat.apply(D, arguments)
    }
    function Pa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), e = 0; e < b; e++)
                c[e] = a[e];
            return c
        }
        return []
    }
    function Qa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var e = arguments[c], f;
            if (u(e) || (f = ea(e)) && Object.prototype.hasOwnProperty.call(e, "callee"))
                a.push.apply(a, e);
            else if (f)
                for (var g = a.length, k = e.length, l = 0; l < k; l++)
                    a[g + l] = e[l];
            else
                a.push(e)
        }
    }
    function Ra(a, b, c) {
        return 2 >= arguments.length ? D.slice.call(a, b) : D.slice.call(a, b, c)
    }
    function Sa(a, b, c) {
        b = b || a;
        c = c || function() {
            return ha(k) ? "o" + (k[ia] || (k[ia] = ++ja)) : (typeof k).charAt(0) + k
        }
        ;
        for (var e = {}, f = 0, g = 0; g < a.length; ) {
            var k = a[g++]
              , l = c(k);
            Object.prototype.hasOwnProperty.call(e, l) || (e[l] = !0,
            b[f++] = k)
        }
        b.length = f
    }
    function Ta(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var e = arguments[c];
            u(e) ? b.push.apply(b, Ta.apply(null, e)) : b.push(e)
        }
        return b
    }
    ;function Ua(a) {
        a = a.className;
        return v(a) && a.match(/\S+/g) || []
    }
    function Va(a, b) {
        for (var c = Ua(a), e = Ra(arguments, 1), f = c.length + e.length, g = c, k = 0; k < e.length; k++)
            F(g, e[k]) || g.push(e[k]);
        g = c.join(" ");
        a.className = g;
        return c.length == f
    }
    function Wa(a, b) {
        var c = Ua(a)
          , e = Ra(arguments, 1)
          , f = Xa(c, e)
          , g = f.join(" ");
        a.className = g;
        return f.length == c.length - e.length
    }
    function Xa(a, b) {
        return Ia(a, function(a) {
            return !F(b, a)
        })
    }
    function Ya(a, b, c) {
        c ? Va(a, b) : Wa(a, b)
    }
    ;function Za(a) {
        return function() {
            return a
        }
    }
    Za(!1);
    Za(!0);
    Za(null);
    function $a(a) {
        return function() {
            throw a;
        }
    }
    function ab(a, b) {
        b = b || 0;
        return function() {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    }
    ;function bb(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }
    ;function cb(a, b) {
        this.x = t(a) ? a : 0;
        this.y = t(b) ? b : 0
    }
    d = cb.prototype;
    d.clone = function() {
        return new cb(this.x,this.y)
    }
    ;
    d.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    }
    ;
    d.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    d.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    d.j8 = function(a, b) {
        a instanceof cb ? (this.x += a.x,
        this.y += a.y) : (this.x += a,
        fa(b) && (this.y += b));
        return this
    }
    ;
    d.scale = function(a, b) {
        var c = fa(b) ? b : a;
        this.x *= a;
        this.y *= c;
        return this
    }
    ;
    function db(a, b) {
        this.width = a;
        this.height = b
    }
    d = db.prototype;
    d.clone = function() {
        return new db(this.width,this.height)
    }
    ;
    d.Y6 = function() {
        return Math.max(this.width, this.height)
    }
    ;
    d.D7 = function() {
        return Math.min(this.width, this.height)
    }
    ;
    d.yZ = function() {
        return this.width * this.height
    }
    ;
    d.o9 = function() {
        return 2 * (this.width + this.height)
    }
    ;
    d.NE = function() {
        return this.width / this.height
    }
    ;
    d.Ga = function() {
        return !this.yZ()
    }
    ;
    d.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    }
    ;
    d.l6 = function(a) {
        return this.width <= a.width && this.height <= a.height
    }
    ;
    d.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    d.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    d.scale = function(a, b) {
        var c = fa(b) ? b : a;
        this.width *= a;
        this.height *= c;
        return this
    }
    ;
    d.I9 = function(a) {
        a = this.NE() > a.NE() ? a.width / this.width : a.height / this.height;
        return this.scale(a)
    }
    ;
    function eb(a, b, c) {
        for (var e in a)
            b.call(c, a[e], e, a)
    }
    function fb(a, b, c) {
        var e = {}, f;
        for (f in a)
            e[f] = b.call(c, a[f], f, a);
        return e
    }
    function gb(a, b, c) {
        for (var e in a)
            if (b.call(c, a[e], e, a))
                return !0;
        return !1
    }
    function hb(a) {
        for (var b in a)
            return b
    }
    function ib(a) {
        var b = [], c = 0, e;
        for (e in a)
            b[c++] = a[e];
        return b
    }
    function jb(a) {
        var b = [], c = 0, e;
        for (e in a)
            b[c++] = e;
        return b
    }
    function kb(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function ob(a, b, c) {
        for (var e in a)
            if (b.call(c, a[e], e, a))
                return e
    }
    function pb(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function qb(a, b, c) {
        if (b in a)
            throw Error('The object already contains the key "' + b + '"');
        a[b] = c
    }
    function rb(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    function sb(a) {
        var b = {}, c;
        for (c in a)
            b[a[c]] = c;
        return b
    }
    var tb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function ub(a, b) {
        for (var c, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (c in e)
                a[c] = e[c];
            for (var g = 0; g < tb.length; g++)
                c = tb[g],
                Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
        }
    }
    ;var vb, wb, xb, yb, zb, Ab;
    function Bb() {
        return h.navigator ? h.navigator.userAgent : null
    }
    function Cb() {
        return h.navigator
    }
    zb = yb = xb = wb = vb = !1;
    var Db;
    if (Db = Bb()) {
        var Eb = Cb();
        vb = 0 == Db.lastIndexOf("Opera", 0);
        wb = !vb && (C(Db, "MSIE") || C(Db, "Trident"));
        yb = (xb = !vb && C(Db, "WebKit")) && C(Db, "Mobile");
        zb = !vb && !xb && !wb && "Gecko" == Eb.product
    }
    var Fb = vb
      , H = wb
      , Gb = zb
      , I = xb
      , Hb = yb
      , Ib = Cb()
      , Jb = Ib && Ib.platform || "";
    Ab = C(Jb, "Mac");
    C(Jb, "Win");
    C(Jb, "Linux");
    Cb() && C(Cb().appVersion || "", "X11");
    var Kb = Bb();
    Kb && C(Kb, "Android");
    Kb && C(Kb, "iPhone");
    Kb && C(Kb, "iPad");
    function Lb() {
        var a = h.document;
        return a ? a.documentMode : void 0
    }
    var Mb;
    t: {
        var Ob = "", Pb;
        if (Fb && h.opera)
            var Qb = h.opera.version
              , Ob = "function" == typeof Qb ? Qb() : Qb;
        else if (Gb ? Pb = /rv\:([^\);]+)(\)|;)/ : H ? Pb = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : I && (Pb = /WebKit\/(\S+)/),
        Pb)
            var Rb = Pb.exec(Bb())
              , Ob = Rb ? Rb[1] : "";
        if (H) {
            var Sb = Lb();
            if (Sb > parseFloat(Ob)) {
                Mb = String(Sb);
                break t
            }
        }
        Mb = Ob
    }
    var Tb = Mb
      , Ub = {};
    function J(a) {
        var b;
        if (!(b = Ub[a])) {
            var c = 0;
            b = ta(String(Tb)).split(".");
            for (var e = ta(String(a)).split("."), f = Math.max(b.length, e.length), g = 0; 0 == c && g < f; g++) {
                var k = b[g] || ""
                  , l = e[g] || ""
                  , n = RegExp("(\\d*)(\\D*)", "g")
                  , q = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var s = n.exec(k) || ["", "", ""]
                      , r = q.exec(l) || ["", "", ""];
                    if (0 == s[0].length && 0 == r[0].length)
                        break;
                    var c = 0 == s[1].length ? 0 : parseInt(s[1], 10)
                      , G = 0 == r[1].length ? 0 : parseInt(r[1], 10)
                      , c = (c < G ? -1 : c > G ? 1 : 0) || ((0 == s[2].length) < (0 == r[2].length) ? -1 : (0 == s[2].length) > (0 == r[2].length) ? 1 : 0) || (s[2] < r[2] ? -1 : s[2] > r[2] ? 1 : 0)
                } while (0 == c)
            }
            b = Ub[a] = 0 <= c
        }
        return b
    }
    function Vb(a) {
        return H && Wb >= a
    }
    var Xb = h.document
      , Wb = Xb && H ? Lb() || ("CSS1Compat" == Xb.compatMode ? parseInt(Tb, 10) : 5) : void 0;
    var Yb = !H || Vb(9)
      , Zb = !Gb && !H || H && Vb(9) || Gb && J("1.9.1")
      , $b = H && !J("9")
      , ac = H || Fb || I;
    function bc(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : cc(document, "*", a, b)
    }
    function dc(a, b) {
        var c = b || document
          , e = null;
        return (e = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : bc(a, b)[0]) || null
    }
    function cc(a, b, c, e) {
        a = e || a;
        b = b && "*" != b ? b.toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                e = {};
                for (var f = 0, g = 0, k; k = a[g]; g++)
                    b == k.nodeName && (e[f++] = k);
                e.length = f;
                return e
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            e = {};
            for (g = f = 0; k = a[g]; g++)
                b = k.className,
                "function" == typeof b.split && F(b.split(/\s+/), c) && (e[f++] = k);
            e.length = f;
            return e
        }
        return a
    }
    function ec(a, b) {
        eb(b, function(b, e) {
            "style" == e ? a.style.cssText = b : "class" == e ? a.className = b : "for" == e ? a.htmlFor = b : e in fc ? a.setAttribute(fc[e], b) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, b) : a[e] = b
        })
    }
    var fc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function gc(a) {
        a = a.document;
        a = hc(a) ? a.documentElement : a.body;
        return new db(a.clientWidth,a.clientHeight)
    }
    function ic(a) {
        var b = a.document
          , c = 0;
        if (b) {
            a = gc(a).height;
            var c = b.body
              , e = b.documentElement;
            if (hc(b) && e.scrollHeight)
                c = e.scrollHeight != a ? e.scrollHeight : e.offsetHeight;
            else {
                var b = e.scrollHeight
                  , f = e.offsetHeight;
                e.clientHeight != f && (b = c.scrollHeight,
                f = c.offsetHeight);
                c = b > a ? b > f ? b : f : b < f ? b : f
            }
        }
        return c
    }
    function jc(a, b, c, e) {
        function f(c) {
            c && b.appendChild(v(c) ? a.createTextNode(c) : c)
        }
        for (; e < c.length; e++) {
            var g = c[e];
            ea(g) && !kc(g) ? E(lc(g) ? Pa(g) : g, f) : f(g)
        }
    }
    function mc(a, b) {
        var c = a.createElement("div");
        H ? (c.innerHTML = "<br>" + b,
        c.removeChild(c.firstChild)) : c.innerHTML = b;
        if (1 == c.childNodes.length)
            return c.removeChild(c.firstChild);
        for (var e = a.createDocumentFragment(); c.firstChild; )
            e.appendChild(c.firstChild);
        return e
    }
    function hc(a) {
        return "CSS1Compat" == a.compatMode
    }
    function nc(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function oc(a, b, c) {
        a.insertBefore(b, a.childNodes[c] || null)
    }
    function pc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    function qc(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    }
    function rc(a) {
        return Zb && void 0 != a.children ? a.children : Ia(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    }
    function sc(a, b) {
        for (; a && 1 != a.nodeType; )
            a = b ? a.nextSibling : a.previousSibling;
        return a
    }
    function kc(a) {
        return ha(a) && 0 < a.nodeType
    }
    function tc(a) {
        return ha(a) && 1 == a.nodeType
    }
    function uc(a, b) {
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || Boolean(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function vc(a, b) {
        var c = a.parentNode;
        if (c == b)
            return -1;
        for (var e = b; e.parentNode != c; )
            e = e.parentNode;
        return wc(e, a)
    }
    function wc(a, b) {
        for (var c = b; c = c.previousSibling; )
            if (c == a)
                return -1;
        return 1
    }
    function xc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function yc(a) {
        return a.contentDocument || a.contentWindow.document
    }
    function zc(a, b, c, e) {
        if (null != a)
            for (a = a.firstChild; a; ) {
                if (b(a) && (c.push(a),
                e) || zc(a, b, c, e))
                    return !0;
                a = a.nextSibling
            }
        return !1
    }
    var Ac = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Bc = {
        IMG: " ",
        BR: "\n"
    };
    function Cc(a) {
        return Dc(a) && Ec(a)
    }
    function Dc(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    }
    function Ec(a) {
        a = a.tabIndex;
        return fa(a) && 0 <= a && 32768 > a
    }
    function Fc(a) {
        if ($b && "innerText"in a)
            a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Gc(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        $b || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }
    function Gc(a, b, c) {
        if (!(a.nodeName in Ac))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Bc)
                b.push(Bc[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Gc(a, b, c),
                    a = a.nextSibling
    }
    function lc(a) {
        if (a && "number" == typeof a.length) {
            if (ha(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (ga(a))
                return "function" == typeof a.item
        }
        return !1
    }
    function Hc(a, b, c) {
        if (!b && !c)
            return null;
        var e = b ? b.toUpperCase() : null;
        return Ic(a, function(a) {
            return (!e || a.nodeName == e) && (!c || F(Ua(a), c))
        }, !0)
    }
    function Jc(a, b) {
        return Hc(a, null, b)
    }
    function Ic(a, b, c, e) {
        c || (a = a.parentNode);
        c = null == e;
        for (var f = 0; a && (c || f <= e); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            f++
        }
        return null
    }
    (function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    )(function() {
        var a = window
          , b = Gb && Hb;
        return t(a.devicePixelRatio) && !b ? a.devicePixelRatio : a.matchMedia ? Kc(0.75) || Kc(1.5) || Kc(2) || Kc(3) || 1 : 1
    });
    function Kc(a) {
        return window.matchMedia("(-webkit-min-device-pixel-ratio: " + a + "),(min--moz-device-pixel-ratio: " + a + "),(min-resolution: " + a + "dppx)").matches ? a : 0
    }
    function Lc(a) {
        this.Da = a || h.document || document
    }
    d = Lc.prototype;
    d.G6 = function(a) {
        return a ? new Lc(xc(a)) : pa || (pa = new Lc)
    }
    ;
    d.N9 = function(a) {
        this.Da = a
    }
    ;
    d.WD = function() {
        return this.Da
    }
    ;
    d.CZ = function(a) {
        return v(a) ? this.Da.getElementById(a) : a
    }
    ;
    d.w7 = function(a) {
        return v(a) ? document.getElementById(a) : a
    }
    ;
    d.I0 = Lc.prototype.CZ;
    d.DZ = function(a, b, c) {
        return cc(this.Da, a, b, c)
    }
    ;
    d.J6 = function(a, b) {
        return bc(a, b || this.Da)
    }
    ;
    d.I6 = function(a, b) {
        return dc(a, b || this.Da)
    }
    ;
    d.J0 = Lc.prototype.DZ;
    d.Z9 = ec;
    d.J7 = function(a) {
        a = a || this.UE();
        return gc(a || window)
    }
    ;
    d.D6 = function() {
        return ic(this.UE())
    }
    ;
    d.AZ = function(a, b, c) {
        var e = this.Da
          , f = arguments
          , g = f[0]
          , k = f[1];
        if (!Yb && k && (k.name || k.type)) {
            g = ["<", g];
            k.name && g.push(' name="', wa(k.name), '"');
            if (k.type) {
                g.push(' type="', wa(k.type), '"');
                var l = {};
                ub(l, k);
                delete l.type;
                k = l
            }
            g.push(">");
            g = g.join("")
        }
        g = e.createElement(g);
        k && (v(k) ? g.className = k : u(k) ? Va.apply(null, [g].concat(k)) : ec(g, k));
        2 < f.length && jc(e, g, f, 2);
        return g
    }
    ;
    d.K0 = Lc.prototype.AZ;
    d.createElement = function(a) {
        return this.Da.createElement(a)
    }
    ;
    d.Y7 = function(a) {
        return this.Da.createTextNode(String(a))
    }
    ;
    d.V5 = function(a, b, c) {
        var e = this.Da
          , f = !!c;
        c = ["<tr>"];
        for (var g = 0; g < b; g++)
            c.push(f ? "<td>&nbsp;</td>" : "<td></td>");
        c.push("</tr>");
        c = c.join("");
        b = ["<table>"];
        for (g = 0; g < a; g++)
            b.push(c);
        b.push("</table>");
        a = e.createElement("DIV");
        a.innerHTML = b.join("");
        return a.removeChild(a.firstChild)
    }
    ;
    d.F8 = function(a) {
        return mc(this.Da, a)
    }
    ;
    d.L8 = function() {
        return hc(this.Da)
    }
    ;
    d.UE = function() {
        return this.Da.parentWindow || this.Da.defaultView
    }
    ;
    d.F6 = function() {
        return !I && hc(this.Da) ? this.Da.documentElement : this.Da.body || this.Da.documentElement
    }
    ;
    d.E6 = function() {
        var a = this.Da
          , b = !I && hc(a) ? a.documentElement : a.body || a.documentElement
          , a = a.parentWindow || a.defaultView;
        return H && J("10") && a.pageYOffset != b.scrollTop ? new cb(b.scrollLeft,b.scrollTop) : new cb(a.pageXOffset || b.scrollLeft,a.pageYOffset || b.scrollTop)
    }
    ;
    d.o6 = function(a) {
        var b;
        t: {
            a = a || this.Da;
            try {
                b = a && a.activeElement;
                break t
            } catch (c) {}
            b = null
        }
        return b
    }
    ;
    d.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    d.append = function(a, b) {
        jc(xc(a), a, arguments, 1)
    }
    ;
    d.X7 = function(a) {
        if (1 != a.nodeType)
            return !1;
        switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
        }
        return !0
    }
    ;
    d.B9 = nc;
    d.J8 = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    ;
    d.I8 = function(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    ;
    d.H8 = oc;
    d.c8 = pc;
    d.E9 = qc;
    d.m6 = function(a) {
        var b, c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode)
                return a.removeNode(!1);
            for (; b = a.firstChild; )
                c.insertBefore(b, a);
            return pc(a)
        }
    }
    ;
    d.Z7 = rc;
    d.N6 = function(a) {
        return void 0 != a.firstElementChild ? a.firstElementChild : sc(a.firstChild, !0)
    }
    ;
    d.V6 = function(a) {
        return void 0 != a.lastElementChild ? a.lastElementChild : sc(a.lastChild, !1)
    }
    ;
    d.b7 = function(a) {
        return void 0 != a.nextElementSibling ? a.nextElementSibling : sc(a.nextSibling, !0)
    }
    ;
    d.p7 = function(a) {
        return void 0 != a.previousElementSibling ? a.previousElementSibling : sc(a.previousSibling, !1)
    }
    ;
    d.c7 = function(a) {
        if (!a)
            return null;
        if (a.firstChild)
            return a.firstChild;
        for (; a && !a.nextSibling; )
            a = a.parentNode;
        return a ? a.nextSibling : null
    }
    ;
    d.q7 = function(a) {
        if (!a)
            return null;
        if (!a.previousSibling)
            return a.parentNode;
        for (a = a.previousSibling; a && a.lastChild; )
            a = a.lastChild;
        return a
    }
    ;
    d.T8 = kc;
    d.a8 = tc;
    d.a9 = function(a) {
        return ha(a) && a.window == a
    }
    ;
    d.n7 = function(a) {
        if (ac && !(H && J("9") && !J("10") && h.SVGElement && a instanceof h.SVGElement))
            return a.parentElement;
        a = a.parentNode;
        return tc(a) ? a : null
    }
    ;
    d.contains = uc;
    d.T5 = function(a, b) {
        if (a == b)
            return 0;
        if (a.compareDocumentPosition)
            return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (H && !Vb(9)) {
            if (9 == a.nodeType)
                return -1;
            if (9 == b.nodeType)
                return 1
        }
        if ("sourceIndex"in a || a.parentNode && "sourceIndex"in a.parentNode) {
            var c = 1 == a.nodeType
              , e = 1 == b.nodeType;
            if (c && e)
                return a.sourceIndex - b.sourceIndex;
            var f = a.parentNode
              , g = b.parentNode;
            return f == g ? wc(a, b) : !c && uc(f, b) ? -1 * vc(a, b) : !e && uc(g, a) ? vc(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (e ? b.sourceIndex : g.sourceIndex)
        }
        e = xc(a);
        c = e.createRange();
        c.selectNode(a);
        c.collapse(!0);
        e = e.createRange();
        e.selectNode(b);
        e.collapse(!0);
        return c.compareBoundaryPoints(h.Range.START_TO_END, e)
    }
    ;
    d.e6 = function(a) {
        var b, c = arguments.length;
        if (!c)
            return null;
        if (1 == c)
            return arguments[0];
        var e = []
          , f = Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], k = arguments[b]; k; )
                g.unshift(k),
                k = k.parentNode;
            e.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var k = e[0][b], l = 1; l < c; l++)
                if (k != e[l][b])
                    return g;
            g = k
        }
        return g
    }
    ;
    d.i7 = xc;
    d.O6 = yc;
    d.P6 = function(a) {
        var b;
        (b = a.contentWindow) || (b = (a = yc(a)) ? a.parentWindow || a.defaultView : window);
        return b
    }
    ;
    d.g$ = function(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = b
        } else {
            nc(a);
            var c = xc(a);
            a.appendChild(c.createTextNode(String(b)))
        }
    }
    ;
    d.h7 = function(a) {
        if ("outerHTML"in a)
            return a.outerHTML;
        var b = xc(a).createElement("div");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    }
    ;
    d.f6 = function(a, b) {
        var c = [];
        return zc(a, b, c, !0) ? c[0] : void 0
    }
    ;
    d.g6 = function(a, b) {
        var c = [];
        zc(a, b, c, !1);
        return c
    }
    ;
    d.O8 = Cc;
    d.P9 = function(a, b) {
        b ? a.tabIndex = 0 : (a.tabIndex = -1,
        a.removeAttribute("tabIndex"))
    }
    ;
    d.b8 = function(a) {
        var b;
        (b = "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!Dc(a) || Ec(a)) : Cc(a)) && H ? (a = ga(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        },
        a = null != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    }
    ;
    d.G7 = Fc;
    d.e7 = function(a) {
        return Fc(a).length
    }
    ;
    d.f7 = function(a, b) {
        for (var c = b || xc(a).body, e = []; a && a != c; ) {
            for (var f = a; f = f.previousSibling; )
                e.unshift(Fc(f));
            a = a.parentNode
        }
        return e.join("").replace(/^[\s\xa0]+/, "").replace(/ +/g, " ").length
    }
    ;
    d.d7 = function(a, b, c) {
        a = [a];
        for (var e = 0, f = null; 0 < a.length && e < b; )
            if (f = a.pop(),
            !(f.nodeName in Ac))
                if (3 == f.nodeType)
                    var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ")
                      , e = e + g.length;
                else if (f.nodeName in Bc)
                    e += Bc[f.nodeName].length;
                else
                    for (g = f.childNodes.length - 1; 0 <= g; g--)
                        a.push(f.childNodes[g]);
        ha(c) && (c.z9 = f ? f.nodeValue.length + b - e - 1 : 0,
        c.node = f);
        return f
    }
    ;
    d.U8 = lc;
    d.t6 = Hc;
    d.s6 = Jc;
    d.r6 = Ic;
    function Mc() {}
    d = Mc.prototype;
    d.Us = !1;
    d.oD = function() {
        return this.Us
    }
    ;
    d.C6 = Mc.prototype.oD;
    d.Xd = function() {
        this.Us || (this.Us = !0,
        this.I())
    }
    ;
    d.y9 = function(a) {
        this.xZ(na(Nc, a))
    }
    ;
    d.xZ = function(a, b) {
        this.Zj || (this.Zj = []);
        this.Zj.push(w(a, b))
    }
    ;
    d.I = function() {
        if (this.Zj)
            for (; this.Zj.length; )
                this.Zj.shift()()
    }
    ;
    function Nc(a) {
        a && "function" == typeof a.Xd && a.Xd()
    }
    function Oc(a) {
        for (var b = 0, c = arguments.length; b < c; ++b) {
            var e = arguments[b];
            ea(e) ? Oc.apply(null, e) : Nc(e)
        }
    }
    ;function Pc(a, b) {
        this.ry = b || {};
        this.Zq = a && (a.$inject || a.inject) || []
    }
    z(Pc, Mc);
    Pc.prototype.I = function() {
        this.Zq = this.ry = null;
        Pc.h.I.call(this)
    }
    ;
    function Qc(a, b, c) {
        if (!(a instanceof Function))
            throw Error("registerCallable called with a non-function, did you mean to call register?");
        Pc.call(this, a, c);
        this.By = a
    }
    z(Qc, Pc);
    Qc.prototype.get = function(a) {
        return this.By.apply(null, a)
    }
    ;
    Qc.prototype.I = function() {
        this.By = null;
        Qc.h.I.call(this)
    }
    ;
    function Rc(a) {
        for (var b = Array.prototype.slice.call(arguments), c; !c && b.length; )
            c = b.shift();
        for (var e = b.length, f, g = 0; g < e; ++g)
            f = b[g],
            f.id && !c.id && (c.id = f.id),
            Ua(f).forEach(function(a) {
                Va(c, a)
            });
        return c
    }
    ;function Sc(a, b, c) {
        if (!(a instanceof Function))
            throw "registerConstructor called with a non-function, did you mean to call register?";
        Pc.call(this, a, c);
        this.Cy = a
    }
    z(Sc, Pc);
    Sc.prototype.P5 = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            if (a.hasOwnProperty(f))
                a = a[f];
            else
                return !1
        }
        return a
    }
    ;
    Sc.prototype.get = function(a) {
        var b = this.Cy;
        switch (a.length) {
        case 0:
            return new b;
        case 1:
            return new b(a[0]);
        case 2:
            return new b(a[0],a[1]);
        case 3:
            return new b(a[0],a[1],a[2]);
        case 4:
            return new b(a[0],a[1],a[2],a[3]);
        case 5:
            return new b(a[0],a[1],a[2],a[3],a[4]);
        case 6:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5]);
        case 7:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);
        case 8:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]);
        case 9:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]);
        case 10:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9]);
        case 11:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10]);
        case 12:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11]);
        case 13:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12]);
        case 14:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13]);
        case 15:
            return new b(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14]);
        default:
            var c = function() {};
            c.prototype = b.prototype;
            c = new c;
            a = b.apply(c, a);
            return Object(a) === a ? a : c
        }
    }
    ;
    Sc.prototype.I = function() {
        this.Cy = null;
        Sc.h.I.call(this)
    }
    ;
    function Tc(a, b, c, e, f) {
        if (!(a instanceof Function))
            throw "registerComponent called with a non-function, did you mean to call register?";
        this.Xp = b;
        (this.hx = e) && b.gb(e, void 0, f);
        Sc.call(this, a, b, c)
    }
    z(Tc, Sc);
    Tc.prototype.get = function(a) {
        a = Tc.h.get.call(this, a);
        a.injector = this.Xp;
        a.ga();
        if (this.hx) {
            var b = this.Xp.get(this.hx);
            b instanceof Function ? a.o = Rc(a.o, b()) : a.template = b
        }
        a.FJ();
        a.createElement();
        return a
    }
    ;
    Tc.prototype.I = function() {
        this.Xp = null;
        Tc.h.I.call(this)
    }
    ;
    function Uc(a, b, c) {
        Pc.call(this, a, c);
        this.dr = a
    }
    z(Uc, Pc);
    Uc.prototype.get = function() {
        return this.dr
    }
    ;
    Uc.prototype.I = function() {
        Nc(this.dr);
        this.dr = null;
        Uc.h.I.call(this)
    }
    ;
    function Vc(a, b, c) {
        Qc.call(this, a, b, c);
        this.Xa = null
    }
    z(Vc, Qc);
    Vc.prototype.get = function(a) {
        this.Xa || (this.Xa = Vc.h.get.call(this, a));
        return this.Xa
    }
    ;
    Vc.prototype.I = function() {
        Nc(this.Xa);
        this.Xa = null;
        Vc.h.I.call(this)
    }
    ;
    function Wc(a, b, c) {
        if (!(a instanceof Function))
            throw Error("registerSingleton called with a non-function, did you mean to call register?");
        Sc.call(this, a, b, c);
        this.Xa = null
    }
    z(Wc, Sc);
    Wc.prototype.get = function(a) {
        this.Xa || (this.Xa = Wc.h.get.call(this, a));
        return this.Xa
    }
    ;
    Wc.prototype.I = function() {
        Nc(this.Xa);
        this.Xa = null;
        Wc.h.I.call(this)
    }
    ;
    /*


 The MIT License.

 Copyright (c) 2010-2012 Google, Inc. http://angularjs.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 @fileoverview JavaScript parser originally found in Angular.js. Modified for
 Google3 style and Closure integration. Where possible, methods that were
 defined inside of deeper, looped lexical scopes have been pulled up to only
 be defined once. Many definitions require the inner lexical scope to work
 properly and have therefore been left in place.
*/
    var Xc;
    (function() {
        function a(a) {
            if (lb.hasOwnProperty(a))
                return lb[a];
            var b, c = "var l, fn, p;\n";
            b = a.split(".");
            for (var e = b.length, f = 0; f < e; ++f)
                var g = b[f]
                  , c = c + ("if(!s) return s;\nl=s;\ns=" + (f ? "s" : '((k&&k.hasOwnProperty("' + g + '"))?k:s)') + '["' + g + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n');
            c += "return s;";
            b = Function("s", "k", c);
            b.toString = function() {
                return c
            }
            ;
            return lb[a] = b
        }
        function b(a, b, c) {
            b = b.split(".");
            for (var e = 0; 1 < b.length; e++) {
                var f = b.shift()
                  , g = a[f];
                g || (g = {},
                a[f] = g);
                a = g
            }
            return a[b.shift()] = c
        }
        function c(c) {
            function e(a) {
                var b = n;
                n++;
                for (var f = "", g = a, l = !1; n < c.length; ) {
                    var q = c.charAt(n)
                      , g = g + q;
                    if (l)
                        "u" == q ? (q = c.substring(n + 1, n + 5),
                        q.match(/[\da-f]{4}/i) || s("Invalid unicode escape [\\u" + q + "]", c, n),
                        n += 4,
                        f += String.fromCharCode(parseInt(q, 16))) : f = (l = qd[q]) ? f + l : f + q,
                        l = !1;
                    else if ("\\" == q)
                        l = !0;
                    else {
                        if (q == a) {
                            n++;
                            k.push({
                                index: b,
                                text: g,
                                hU: f,
                                ve: !0,
                                jb: function() {
                                    return f
                                }
                            });
                            return
                        }
                        f += q
                    }
                    n++
                }
                s("Unterminated quote", c, n, b)
            }
            function f() {
                for (var e = "", g = n, l, q, A; n < c.length; ) {
                    var s = c.charAt(n);
                    if ("." == s || Z(s) || ca(s))
                        "." == s && (l = n),
                        e += s;
                    else
                        break;
                    n++
                }
                if (l)
                    for (q = n; q < c.length; ) {
                        s = c.charAt(q);
                        if ("(" == s) {
                            A = e.substr(l - g + 1);
                            e = e.substr(0, l - g);
                            n = q;
                            break
                        }
                        if (ka(s))
                            q++;
                        else
                            break
                    }
                g = {
                    index: g,
                    text: e
                };
                if (qa.hasOwnProperty(e))
                    g.jb = g.ve = qa[e];
                else {
                    var r = a(e);
                    g.jb = rd(function(a, b) {
                        return r(a, b)
                    }, {
                        assign: function(a, c) {
                            return b(a, e, c)
                        }
                    })
                }
                k.push(g);
                A && (k.push({
                    index: l,
                    text: ".",
                    ve: !1
                }),
                k.push({
                    index: l + 1,
                    text: A,
                    ve: !1
                }))
            }
            function g() {
                for (var a = "", b = n; n < c.length; ) {
                    var e = r(c.charAt(n));
                    if ("." == e || ca(e))
                        a += e;
                    else {
                        var f = n + 1 < c.length ? c.charAt(n + 1) : !1;
                        if ("e" == e && G(f))
                            a += e;
                        else if (G(e) && f && ca(f) && "e" == a.charAt(a.length - 1))
                            a += e;
                        else if (!G(e) || f && ca(f) || "e" != a.charAt(a.length - 1))
                            break;
                        else
                            s("Invalid exponent", c, n)
                    }
                    n++
                }
                a = 1 * a;
                k.push({
                    index: b,
                    text: a,
                    ve: !0,
                    jb: function() {
                        return a
                    }
                })
            }
            for (var k = [], l, n = 0, q = [], L, ra = ":"; n < c.length; ) {
                L = c.charAt(n);
                if (-1 != "\"'".indexOf(L))
                    e(L);
                else if (ca(L) || -1 != ".".indexOf(L) && ca(n + 1 < c.length ? c.charAt(n + 1) : !1))
                    g();
                else if (Z(L))
                    f(),
                    -1 != "{,".indexOf(ra) && "{" == q[0] && (l = k[k.length - 1]) && (l.ve = -1 == l.text.indexOf("."));
                else if (-1 != "(){}[].,;:".indexOf(L))
                    k.push({
                        index: n,
                        text: L,
                        ve: -1 != ":[,".indexOf(ra) && -1 != "{[".indexOf(L) || -1 != "}]:,".indexOf(L)
                    }),
                    -1 != "{[".indexOf(L) && q.unshift(L),
                    -1 != "}]".indexOf(L) && q.shift(),
                    n++;
                else if (ka(L)) {
                    n++;
                    continue
                } else {
                    var mb = L + (n + 1 < c.length ? c.charAt(n + 1) : !1)
                      , nb = qa[L]
                      , za = qa[mb];
                    za ? (k.push({
                        index: n,
                        text: mb,
                        jb: za
                    }),
                    n += 2) : nb ? (ra = -1 != "[,:".indexOf(ra) && -1 != "+-".indexOf(L),
                    k.push({
                        index: n,
                        text: L,
                        jb: nb,
                        ve: ra
                    }),
                    n += 1) : s("Unexpected next character ", c, n, n, n + 1)
                }
                ra = L
            }
            return k
        }
        function e(a, b, c) {
            return function(e, f) {
                return b(e, f, a, c)
            }
        }
        function f(a, b) {
            return function(c, e) {
                return a(c, e, b)
            }
        }
        function g(a, b, c, e) {
            k(a, b, c, e) || q("is unexpected, expecting [" + e + "]", c, n(b))
        }
        function k(a, b, c, e, f, g, k) {
            return (e = n(b, e, f, g, k)) ? (a && !e.ve && q("is not valid json", c, e),
            b.shift(),
            e) : !1
        }
        function l(a) {
            if (0 === a.length)
                throw Error("Unexpected end of expression.");
            return a[0]
        }
        function n(a, b, c, e, f) {
            if (0 < a.length) {
                a = a[0];
                var g = a.text;
                if (g == b || g == c || g == e || g == f || !(b || c || e || f))
                    return a
            }
            return !1
        }
        function q(a, b, c) {
            throw Error('Syntax Error: Token "' + c.text + '" ' + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }
        function s(a, b, c, e, f) {
            f = f || c;
            throw Error("Lexer Error: " + a + " at column" + (void 0 !== e ? "s " + e + "-" + c + " [" + b.substring(e, f) + "]" : " " + f) + " in expression [" + b + "].");
        }
        function r(a) {
            return a.toLowerCase()
        }
        function G(a) {
            return "-" == a || "+" == a || ca(a)
        }
        function Z(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" == a || "$" == a
        }
        function ka(a) {
            return " " == a || "\r" == a || "\t" == a || "\n" == a || "\v" == a || "\u00a0" == a
        }
        function ca(a) {
            return "0" <= a && "9" >= a
        }
        function za() {}
        function rd(a, b) {
            for (var c = Array.prototype.slice.call(arguments, 1), e = c.length, f = 0; f < e; ++f) {
                var g = c[f], k;
                for (k in g)
                    a[k] = g[k]
            }
            return a
        }
        var qd = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        }
          , Bg = function(a) {
            return function() {
                return a
            }
        }(0)
          , qa = {
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            d0: za,
            "+": function(a, b, c, e) {
                c = c(a, b);
                e = e(a, b);
                return (void 0 !== c ? c : 0) + (void 0 !== e ? e : 0)
            },
            "-": function(a, b, c, e) {
                c = c(a, b);
                e = e(a, b);
                return (void 0 !== c ? c : 0) - (void 0 !== e ? e : 0)
            },
            "*": function(a, b, c, e) {
                return c(a, b) * e(a, b)
            },
            "/": function(a, b, c, e) {
                return c(a, b) / e(a, b)
            },
            "%": function(a, b, c, e) {
                return c(a, b) % e(a, b)
            },
            "^": function(a, b, c, e) {
                return c(a, b) ^ e(a, b)
            },
            "=": za,
            "==": function(a, b, c, e) {
                return c(a, b) == e(a, b)
            },
            "!=": function(a, b, c, e) {
                return c(a, b) != e(a, b)
            },
            "<": function(a, b, c, e) {
                return c(a, b) < e(a, b)
            },
            ">": function(a, b, c, e) {
                return c(a, b) > e(a, b)
            },
            "<=": function(a, b, c, e) {
                return c(a, b) <= e(a, b)
            },
            ">=": function(a, b, c, e) {
                return c(a, b) >= e(a, b)
            },
            "&&": function(a, b, c, e) {
                return c(a, b) && e(a, b)
            },
            "||": function(a, b, c, e) {
                return c(a, b) || e(a, b)
            },
            "&": function(a, b, c, e) {
                return c(a, b) & e(a, b)
            },
            "|": function(a, b, c, e) {
                return e(a, b) | c(a, b)
            },
            "!": function(a, b, c) {
                return !c(a, b)
            }
        }
          , lb = {};
        Xc = function(r, A, G) {
            function Z() {
                var a = [];
                if ("}" != l(B).text) {
                    do {
                        var b = k(A, B, r)
                          , b = b.hU || b.text;
                        g(A, B, r, ":");
                        var c = Nb();
                        a.push({
                            key: b,
                            value: c
                        })
                    } while (k(A, B, r, ","))
                }
                g(A, B, r, "}");
                return function(b, c) {
                    for (var e = {}, f = 0; f < a.length; f++) {
                        var g = a[f]
                          , k = g.value(b, c);
                        e[g.key] = k
                    }
                    return e
                }
            }
            function ca() {
                var a = [];
                if ("]" != l(B).text) {
                    do
                        a.push(Nb());
                    while (k(A, B, r, ","))
                }
                g(A, B, r, "]");
                return function(b, c) {
                    for (var e = [], f = 0; f < a.length; f++)
                        e.push(a[f](b, c));
                    return e
                }
            }
            function ka() {
                var a;
                if (k(A, B, r, "("))
                    a = zg(),
                    g(A, B, r, ")");
                else if (k(A, B, r, "["))
                    a = ca();
                else if (k(A, B, r, "{"))
                    a = Z();
                else {
                    var b = k(A, B, r);
                    a = b.jb;
                    a || (b || (b = {
                        index: 1
                    }),
                    q("not a primary expression", r, b))
                }
                for (var c; b = k(A, B, r, "(", "[", "."); )
                    "(" === b.text ? (a = Ee(a, c),
                    c = null) : "[" === b.text ? (c = a,
                    a = Ce(a)) : "." === b.text ? (c = a,
                    a = De(a)) : q("IMPOSSIBLE", r);
                return a
            }
            function qa() {
                var a;
                return k(A, B, r, "+") ? ka() : (a = k(A, B, r, "-")) ? e(Bg, a.jb, qa()) : (a = k(A, B, r, "!")) ? f(a.jb, qa()) : ka()
            }
            function lb() {
                for (var a = qa(), b; b = k(A, B, r, "*", "/", "%"); )
                    a = e(a, b.jb, qa());
                return a
            }
            function L() {
                var a;
                a = lb();
                for (var b; b = k(A, B, r, "+", "-"); )
                    a = e(a, b.jb, lb());
                if (b = k(A, B, r, "<", ">", "<=", ">="))
                    a = e(a, b.jb, L());
                return a
            }
            function ra() {
                var a = L(), b;
                if (b = k(A, B, r, "==", "!="))
                    a = e(a, b.jb, ra());
                return a
            }
            function mb() {
                var a = ra(), b;
                if (b = k(A, B, r, "&&"))
                    a = e(a, b.jb, mb());
                return a
            }
            function nb() {
                for (var a = mb(), b; ; )
                    if (b = k(A, B, r, "||"))
                        a = e(a, b.jb, mb());
                    else
                        return a
            }
            function qd() {
                for (var a = []; ; )
                    if (0 < B.length && !n(B, "}", ")", ";", "]") && a.push(zg()),
                    !k(A, B, r, ";"))
                        return 1 == a.length ? a[0] : function(b, c) {
                            for (var e, f = 0; f < a.length; f++) {
                                var g = a[f];
                                g && (e = g(b, c))
                            }
                            return e
                        }
            }
            function Ce(a) {
                var b = Nb();
                g(A, B, r, "]");
                return rd(function(c, e) {
                    var f = a(c, e), g = b(c, e), k;
                    if (f)
                        return (f = f[g]) && f.then && (k = f,
                        "$$v"in f || (k.XC = void 0,
                        k.then(function(a) {
                            k.XC = a
                        })),
                        f = f.XC),
                        f
                }, {
                    assign: function(c, e, f) {
                        return a(c, f)[b(c, f)] = e
                    }
                })
            }
            function De(c) {
                var e = k(A, B, r).text
                  , f = a(e);
                return rd(function(a, b) {
                    return f(c(a, b), b)
                }, {
                    assign: function(a, f, g) {
                        return b(c(a, g), e, f)
                    }
                })
            }
            function Ee(a, b) {
                var c = [];
                if (")" != l(B).text) {
                    do
                        c.push(Nb());
                    while (k(A, B, r, ","))
                }
                g(A, B, r, ")");
                return function(e, f) {
                    for (var g = [], k = b ? b(e, f) : e, l = 0; l < c.length; l++)
                        g.push(c[l](e, f));
                    l = a(e, f) || za;
                    return l.apply ? l.apply(k, g) : l(g[0], g[1], g[2], g[3], g[4])
                }
            }
            function Nb() {
                var a = nb(), b, c;
                return (c = k(A, B, r, "=")) ? (a.assign || s("implies assignment but [" + r.substring(0, c.index) + "] can not be assigned to", r, c.index, c),
                b = nb(),
                function(c, e) {
                    return a.assign(c, b(c, e), e)
                }
                ) : a
            }
            function zg() {
                for (var a = Nb(), b; ; )
                    if (b = k(A, B, r, "|"))
                        a = e(a, b.jb, Fl());
                    else
                        return a
            }
            function Fl() {
                for (var a = k(A, B, r), b = G(a.text), c = []; ; )
                    if (a = k(A, B, r, ":"))
                        c.push(Nb());
                    else {
                        var e = function(a, e, f) {
                            f = [f];
                            for (var g = 0; g < c.length; g++)
                                f.push(c[g](a, e));
                            return b.apply(a, f)
                        };
                        return function() {
                            return e
                        }
                    }
            }
            var B = c(r), Ag;
            A ? (Nb = nb,
            Ee = De = Ce = zg = function() {
                q("is not valid JSON", r, {
                    text: r,
                    index: 0
                })
            }
            ,
            Ag = ka()) : Ag = qd();
            0 !== B.length && q("is an unexpected token", r, B[0]);
            return Ag
        }
    }
    )();
    function Yc(a, b, c) {
        if (!a || !a.children)
            return null;
        var e;
        if (!c && (e = b(a),
        void 0 !== e && !e))
            return a;
        e = a.children;
        for (var f = e.length, g = 0; g < f; ++g)
            Yc(e[g], b, c);
        c && b(a);
        return a
    }
    ;function Zc(a) {
        if (!a.bc && !a.Wm) {
            var b = [];
            Yc(a, function(c) {
                var e = [];
                if (c !== a && -1 < c.className.indexOf("$"))
                    return !1;
                var f = c.dataset || {}, g;
                for (g in f)
                    e.push($c(g, f[g]));
                f = c.attributes;
                g = 0;
                for (var k = f.length; g < k; ++g) {
                    var l = f.item(g)
                      , n = l.nodeName
                      , l = l.nodeValue
                      , q = ad
                      , s = bd;
                    l && !s.test(n) && q.test(l) && e.push(cd(n, l))
                }
                0 === c.children.length && c.textContent && (f = c.textContent) && "SCRIPT" !== c.nodeName && ad.test(f) && e.push(dd(f));
                0 < e.length && b.push(ed(c, e))
            });
            fd(a, b)
        }
    }
    function fd(a, b) {
        a.Om = b;
        a.Wm = function(b, e) {
            for (var f = 0, g = a.Om.length; f < g; ++f)
                a.Om[f](b, e)
        }
    }
    function ed(a, b) {
        a.bc = b;
        return function(b, e) {
            for (var f = 0, g = a.bc.length; f < g; f++)
                a.bc[f](a, b, e)
        }
    }
    function gd(a, b, c) {
        a.bc && c.push(ed(b, a.bc));
        a = a.children;
        for (var e = 0, f = a.length; e < f; ++e) {
            var g = a[e];
            -1 == g.className.indexOf("$") && gd(g, b.children[e], c)
        }
    }
    var ad = /\{\{(.*)\}\}/m
      , bd = /^data-/
      , hd = /^\{\{([^\{]*)\}\}$/
      , id = /\{\{([^\{]*)\}\}/gm;
    function cd(a, b) {
        var c = jd(b);
        return function(b, f) {
            b.setAttribute(a, c(f))
        }
    }
    function dd(a) {
        var b = jd(a);
        return function(a, e) {
            var f = b ? b(e) : null;
            f != a.textContent && (a.textContent = f)
        }
    }
    function jd(a) {
        return a && ad.test(a) ? hd.test(a) ? function(b) {
            var c = hd.exec(a)[1];
            b = Xc(c, !1)(b);
            return null != b ? b : ""
        }
        : function(b) {
            return a.replace(id, function(a, e) {
                var f = Xc(e, !1)(b);
                return null != f ? f : ""
            })
        }
        : null
    }
    function kd(a) {
        if ("true" === a)
            return !0;
        if ("false" === a)
            return !1;
        var b = parseInt(a, 10);
        return isNaN(b) ? a : b
    }
    function $c(a, b) {
        if (ad.test(b)) {
            var c = jd(b);
            return function(b, e, f) {
                e[a] = c(f)
            }
        }
        var e = !1
          , f = kd(b);
        return function(b, c) {
            !e && c && (c[a] = f,
            e = !0)
        }
    }
    ;function ld(a) {
        a = a && a.trim();
        if (!a)
            throw Error("Can not create Element from empty markup.");
        var b = mc(document, a);
        if (!(b instanceof Element))
            throw Error("Element must have a single root, but instead: " + a);
        return b
    }
    ;function md(a, b) {
        a = b.get("templatePreprocessor", {
            markup: a
        });
        var c = ld(a);
        Zc(c);
        return function() {
            var a = c.cloneNode(!0)
              , b = [];
            gd(c, a, b);
            fd(a, b);
            return a
        }
    }
    md.inject = ["markup", "injector"];
    var nd = "StopIteration"in h ? h.StopIteration : Error("StopIteration");
    function od() {}
    od.prototype.next = function() {
        throw nd;
    }
    ;
    od.prototype.Gb = function() {
        return this
    }
    ;
    function pd(a) {
        if (a instanceof od)
            return a;
        if ("function" == typeof a.Gb)
            return a.Gb(!1);
        if (ea(a)) {
            var b = 0
              , c = new od;
            c.next = function() {
                for (; ; ) {
                    if (b >= a.length)
                        throw nd;
                    if (b in a)
                        return a[b++];
                    b++
                }
            }
            ;
            return c
        }
        throw Error("Not implemented");
    }
    function sd(a, b, c) {
        if (ea(a))
            try {
                E(a, b, c)
            } catch (e) {
                if (e !== nd)
                    throw e;
            }
        else {
            a = pd(a);
            try {
                for (; ; )
                    b.call(c, a.next(), void 0, a)
            } catch (f) {
                if (f !== nd)
                    throw f;
            }
        }
    }
    function td(a) {
        if (ea(a))
            return Pa(a);
        a = pd(a);
        var b = [];
        sd(a, function(a) {
            b.push(a)
        });
        return b
    }
    ;function ud(a, b) {
        this.hb = {};
        this.ea = [];
        this.vj = this.yd = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var e = 0; e < c; e += 2)
                this.pc(arguments[e], arguments[e + 1])
        } else
            a && this.cQ(a)
    }
    d = ud.prototype;
    d.Y = function() {
        return this.yd
    }
    ;
    d.na = function() {
        this.Og();
        for (var a = [], b = 0; b < this.ea.length; b++)
            a.push(this.hb[this.ea[b]]);
        return a
    }
    ;
    d.Yb = function() {
        this.Og();
        return this.ea.concat()
    }
    ;
    d.Xm = function(a) {
        return vd(this.hb, a)
    }
    ;
    d.Rj = function(a) {
        for (var b = 0; b < this.ea.length; b++) {
            var c = this.ea[b];
            if (vd(this.hb, c) && this.hb[c] == a)
                return !0
        }
        return !1
    }
    ;
    d.equals = function(a, b) {
        if (this === a)
            return !0;
        if (this.yd != a.Y())
            return !1;
        var c = b || wd;
        this.Og();
        for (var e, f = 0; e = this.ea[f]; f++)
            if (!c(this.get(e), a.get(e)))
                return !1;
        return !0
    }
    ;
    function wd(a, b) {
        return a === b
    }
    d.Ga = function() {
        return 0 == this.yd
    }
    ;
    d.clear = function() {
        this.hb = {};
        this.vj = this.yd = this.ea.length = 0
    }
    ;
    d.remove = function(a) {
        return vd(this.hb, a) ? (delete this.hb[a],
        this.yd--,
        this.vj++,
        this.ea.length > 2 * this.yd && this.Og(),
        !0) : !1
    }
    ;
    d.Og = function() {
        if (this.yd != this.ea.length) {
            for (var a = 0, b = 0; a < this.ea.length; ) {
                var c = this.ea[a];
                vd(this.hb, c) && (this.ea[b++] = c);
                a++
            }
            this.ea.length = b
        }
        if (this.yd != this.ea.length) {
            for (var e = {}, b = a = 0; a < this.ea.length; )
                c = this.ea[a],
                vd(e, c) || (this.ea[b++] = c,
                e[c] = 1),
                a++;
            this.ea.length = b
        }
    }
    ;
    d.get = function(a, b) {
        return vd(this.hb, a) ? this.hb[a] : b
    }
    ;
    d.pc = function(a, b) {
        vd(this.hb, a) || (this.yd++,
        this.ea.push(a),
        this.vj++);
        this.hb[a] = b
    }
    ;
    d.cQ = function(a) {
        var b;
        a instanceof ud ? (b = a.Yb(),
        a = a.na()) : (b = jb(a),
        a = ib(a));
        for (var c = 0; c < b.length; c++)
            this.pc(b[c], a[c])
    }
    ;
    d.clone = function() {
        return new ud(this)
    }
    ;
    d.u$ = function() {
        for (var a = new ud, b = 0; b < this.ea.length; b++) {
            var c = this.ea[b];
            a.pc(this.hb[c], c)
        }
        return a
    }
    ;
    d.s$ = function() {
        this.Og();
        for (var a = {}, b = 0; b < this.ea.length; b++) {
            var c = this.ea[b];
            a[c] = this.hb[c]
        }
        return a
    }
    ;
    d.T6 = function() {
        return this.Gb(!0)
    }
    ;
    d.I7 = function() {
        return this.Gb(!1)
    }
    ;
    d.Gb = function(a) {
        this.Og();
        var b = 0
          , c = this.ea
          , e = this.hb
          , f = this.vj
          , g = this
          , k = new od;
        k.next = function() {
            for (; ; ) {
                if (f != g.vj)
                    throw Error("The map has changed since the iterator was created");
                if (b >= c.length)
                    throw nd;
                var k = c[b++];
                return a ? k : e[k]
            }
        }
        ;
        return k
    }
    ;
    function vd(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function xd(a, b) {
        this.Bj = a || null;
        this.Vr = !!b;
        this.vd = new ud;
        this.fa = new yd("",void 0);
        this.fa.next = this.fa.Fb = this.fa
    }
    d = xd.prototype;
    d.lD = function(a) {
        (a = this.vd.get(a)) && this.Vr && (a.remove(),
        this.PC(a));
        return a
    }
    ;
    d.get = function(a, b) {
        var c = this.lD(a);
        return c ? c.value : b
    }
    ;
    d.n9 = function(a, b) {
        var c = this.vd.get(a);
        return c ? c.value : b
    }
    ;
    d.pi = function(a, b) {
        var c = this.lD(a);
        c ? c.value = b : (c = new yd(a,b),
        this.vd.pc(a, c),
        this.PC(c))
    }
    ;
    d.l9 = function() {
        return this.fa.next.value
    }
    ;
    d.m9 = function() {
        return this.fa.Fb.value
    }
    ;
    d.shift = function() {
        return this.uC(this.fa.next)
    }
    ;
    d.x8 = function() {
        return this.uC(this.fa.Fb)
    }
    ;
    d.remove = function(a) {
        return (a = this.vd.get(a)) ? (this.ns(a),
        !0) : !1
    }
    ;
    d.ns = function(a) {
        a.remove();
        this.vd.remove(a.key)
    }
    ;
    d.Y = function() {
        return this.vd.Y()
    }
    ;
    d.Ga = function() {
        return this.vd.Ga()
    }
    ;
    d.V9 = function(a) {
        this.Bj = a || null;
        null != this.Bj && this.Ps(this.Bj)
    }
    ;
    d.Yb = function() {
        return this.map(function(a, b) {
            return b
        })
    }
    ;
    d.na = function() {
        return this.map(function(a) {
            return a
        })
    }
    ;
    d.contains = function(a) {
        return this.some(function(b) {
            return b == a
        })
    }
    ;
    d.w8 = function(a) {
        return this.vd.Xm(a)
    }
    ;
    d.clear = function() {
        this.Ps(0)
    }
    ;
    d.forEach = function(a, b) {
        for (var c = this.fa.next; c != this.fa; c = c.next)
            a.call(b, c.value, c.key, this)
    }
    ;
    d.map = function(a, b) {
        for (var c = [], e = this.fa.next; e != this.fa; e = e.next)
            c.push(a.call(b, e.value, e.key, this));
        return c
    }
    ;
    d.some = function(a, b) {
        for (var c = this.fa.next; c != this.fa; c = c.next)
            if (a.call(b, c.value, c.key, this))
                return !0;
        return !1
    }
    ;
    d.every = function(a, b) {
        for (var c = this.fa.next; c != this.fa; c = c.next)
            if (!a.call(b, c.value, c.key, this))
                return !1;
        return !0
    }
    ;
    d.PC = function(a) {
        this.Vr ? (a.next = this.fa.next,
        a.Fb = this.fa,
        this.fa.next = a,
        a.next.Fb = a) : (a.Fb = this.fa.Fb,
        a.next = this.fa,
        this.fa.Fb = a,
        a.Fb.next = a);
        null != this.Bj && this.Ps(this.Bj)
    }
    ;
    d.Ps = function(a) {
        for (var b = this.vd.Y(); b > a; b--)
            this.ns(this.Vr ? this.fa.Fb : this.fa.next)
    }
    ;
    d.uC = function(a) {
        this.fa != a && this.ns(a);
        return a.value
    }
    ;
    function yd(a, b) {
        this.key = a;
        this.value = b
    }
    yd.prototype.remove = function() {
        this.Fb.next = this.next;
        this.next.Fb = this.Fb;
        delete this.Fb;
        delete this.next
    }
    ;
    function K() {
        this.wg = null;
        this.HU = 0;
        this.oE()
    }
    z(K, Mc);
    K.prototype.oE = function() {
        this.wg = new xd
    }
    ;
    K.prototype.b = function(a, b) {
        var c = this.wg
          , e = String(this.HU++);
        c.pi(e, {
            eventName: a,
            me: b
        });
        return function() {
            c.remove(e)
        }
    }
    ;
    K.prototype.G = function(a, b) {
        if (void 0 !== this.wg)
            for (var c = Array.prototype.slice.call(arguments, 1), e = this.wg.na(), f = 0, g = e.length; f < g; ++f) {
                var k = e[f];
                k.eventName === a && k.me.apply(this, c)
            }
    }
    ;
    K.prototype.I = function() {
        this.wg && this.wg.clear();
        K.h.I.call(this)
    }
    ;
    function zd(a) {
        this.j = a;
        this.responseType = ""
    }
    zd.prototype.get = function(a, b, c) {
        var e = new K
          , f = new XMLHttpRequest;
        f.responseType = this.responseType;
        var g = p
          , k = p;
        f.onreadystatechange = function() {
            if (f.readyState === XMLHttpRequest.DONE) {
                b && (g = e.b("success", b));
                c && (k = e.b("failure", c));
                var a = f.getResponseHeader("content-type");
                a && (a = a.match(/json/) ? this.j.JSON.parse(f.response) : a.match(/xml/) ? f.responseXML : "arraybuffer" === f.responseType ? f.response : f.responseText,
                e.G("success", a))
            }
        }
        ;
        f.open("GET", a, !0);
        f.send();
        return function() {
            g();
            k()
        }
    }
    ;
    function Ad(a, b) {
        this.At = a;
        this.QV = b;
        this.Wj = {}
    }
    Ad.prototype.register = function(a, b, c) {
        b ? (this.Wj[a] && (this.Wj[a] = null),
        this.ZD(a, b, c)) : this.tX(a, b, c)
    }
    ;
    Ad.prototype.ZD = function(a, b, c) {
        b = {
            markup: b,
            injector: this.At
        };
        v(c) && (c = this.At.get(c, b));
        this.At.Hw(a, c || md, b)
    }
    ;
    Ad.prototype.tX = function(a, b, c) {
        this.Wj[a] = {
            name: a,
            content: b,
            processor: c
        }
    }
    ;
    Ad.prototype.execute = function(a) {
        function b() {
            0 === --c && a && a()
        }
        var c = 0, e;
        for (e in this.Wj) {
            c++;
            var f = this.Wj[e];
            if (f) {
                var g = w(function(a, c) {
                    this.ZD(a.name, c, a.v0);
                    b()
                }, this, f);
                this.QV.get(f.name, g, b)
            }
        }
    }
    ;
    Ad.inject = ["injector", "xhr"];
    function Bd(a, b) {
        Array.prototype.slice.call(arguments, 1).forEach(function(b) {
            for (var e in b)
                a[e] = b[e]
        });
        return a
    }
    function Cd(a, b) {
        for (var c in a)
            b(a[c], c, a)
    }
    ;function Dd() {
        this.id = ++Ed;
        this.Wc = {};
        this.register("injector", this)
    }
    var Ed = 0;
    Dd.prototype.addChild = function(a) {
        a.parent = this;
        return a
    }
    ;
    d = Dd.prototype;
    d.remove = function() {
        for (var a = this.hE(), b = 0, c = a.length; b < c; ++b)
            Nc(this.Wc[a[b]]);
        this.Wc = {};
        this.parent = null
    }
    ;
    d.HZ = function() {
        return this.parent ? this.parent.HZ() : this
    }
    ;
    d.t9 = function(a) {
        var b = new Dd;
        a && a(b);
        return this.addChild(b)
    }
    ;
    d.hh = function(a, b) {
        Nc(this.Wc[a]);
        return this.Wc[a] = b
    }
    ;
    d.register = function(a, b, c) {
        return this.hh(a, new Uc(b,this,c))
    }
    ;
    d.Hw = function(a, b, c) {
        return this.hh(a, new Vc(b,this,c))
    }
    ;
    d.Iv = function(a, b, c) {
        return this.hh(a, new Qc(b,this,c))
    }
    ;
    d.x9 = function(a, b, c) {
        return this.hh(a, new Sc(b,this,c))
    }
    ;
    d.WI = function(a, b, c, e, f) {
        return this.hh(a, new Tc(b,this,e,c,f))
    }
    ;
    d.gb = function(a, b, c) {
        return this.get("templateResolver").register(a, b, c)
    }
    ;
    d.vL = function(a) {
        this.get("templateResolver").execute(a)
    }
    ;
    d.rp = function(a, b, c) {
        if (this.contains(a)) {
            var e = this.Eg(a);
            if (e && e.Xa)
                throw Error('Unable to register singleton "' + a + '" with new constructor because this original was already registered and instantiated.');
        }
        return this.hh(a, new Wc(b,this,c))
    }
    ;
    d.K5 = function(a, b) {
        return this.Wc[a] = this.Wc[b]
    }
    ;
    d.get = function(a, b, c) {
        function e(a) {
            var q = k.MX(a, b, c);
            if (!q)
                throw q = 'Error, injector cannot find declaration for "' + a + '"',
                g != a && (q += ' While attempting to create "' + g + '".'),
                Error(q);
            var s = f(q.ry)
              , r = Bd({}, s, l)
              , s = (u(q.Zq) ? q.Zq : []).map(function(b) {
                if (b in r)
                    return r[b];
                if (b === g)
                    throw Error("Circular dependency found where " + g + " loaded " + a + " which then required " + b + ".");
                return l[b] = e(b)
            });
            return q.get(s)
        }
        function f(a) {
            a = a || {};
            var b = {};
            Cd(a, function(a, c) {
                "string" === typeof a && /^\$/.test(a) && (a = e(a.replace(/^\$/, "")));
                b[c] = a
            });
            return b
        }
        var g = "function" === typeof a ? "temp" : a
          , k = this
          , l = b || {};
        return e(a)
    }
    ;
    d.MX = function(a, b, c) {
        return "function" === typeof a ? new (c || Sc)(a,this,b) : this.Eg(a)
    }
    ;
    d.Eg = function(a) {
        return this.Wc[a] ? this.Wc[a] : this.parent && this.parent.Eg instanceof Function ? this.parent.Eg(a) : null
    }
    ;
    d.hE = function() {
        return jb(this.Wc)
    }
    ;
    d.contains = function(a) {
        return a ? !!(this.Wc[a] || this.parent && this.parent.contains(a)) : !1
    }
    ;
    function Fd(a, b, c) {
        a.Wm && a.Wm(b, c)
    }
    ;function Gd(a, b, c) {
        v(a) && (a = ld(a));
        if (a.rg && b)
            return Fd(b.o),
            null;
        var e = null;
        if (-1 < a.className.indexOf("$")) {
            if (!c)
                throw Error("Cannot create components without an injector.");
            Va(a, "{{getStyles()}}");
            e = Hd(a, c, b);
            a = e.o
        }
        a.Wm || Zc(a);
        Yc(a, function(b) {
            if (a !== b && -1 < b.className.indexOf("$"))
                return Gd(b, e, c),
                !1;
            c && c.contains(b.nodeName) && !b.QP && (c.get(b.nodeName, {
                element: b
            }),
            b.QP = !0)
        });
        !e && b && (e = b);
        Fd(a, e, b);
        e && e.ready instanceof Function && e.ready();
        return e
    }
    function Hd(a, b, c) {
        for (var e = Ua(a), f, g, k = null, l = e.length - 1; 0 <= l; --l)
            f = e[l],
            0 === f.indexOf("$") && (g = f.substr(1),
            a.oA || (a.oA = {}),
            a.oA[g] || (Wa(a, f),
            Va(a, String(g).replace(/([A-Z])/g, "-$1").toLowerCase()),
            k = b.get(g),
            k.template && !k.o && (v(k.template) ? k.o = ld(k.template) : k.template instanceof Function && (k.o = k.template())),
            a && k.o ? (qc(k.o, a),
            Rc(k.o, a),
            Zc(a),
            f = a,
            g = k.o,
            f.bc && 0 < f.bc.length && g.Om && (g.bc ? g.bc = f.bc.concat(g.bc) : g.Om.unshift(ed(g, f.bc)))) : k.o = a,
            a.rg || (a.rg = k),
            k.o.tabIndex = -1,
            k.ff(),
            k.DO(),
            c && c.addChild instanceof Function ? c.addChild(k) : k.vO = c || null));
        return k
    }
    ;function Id(a, b, c) {
        v(b) ? Jd(a, c, b) : eb(b, na(Jd, a))
    }
    function Jd(a, b, c) {
        var e;
        t: if (e = Ea(c),
        void 0 === a.style[e] && (c = (I ? "Webkit" : Gb ? "Moz" : H ? "ms" : Fb ? "O" : null) + Fa(c),
        void 0 !== a.style[c])) {
            e = c;
            break t
        }
        e && (a.style[e] = b)
    }
    ;var Kd = {
        N0: "branding",
        P0: "channel",
        Q0: "channel_paid_info",
        F5: "video_like_value",
        w5: "subscription",
        D5: "video"
    }
      , Ld = {
        name: "ADJECTIVE_THUMBNAIL_QUALITY",
        id: 920505
    }
      , Md = {
        name: "ALTERNATE_SEARCH_POSITION",
        id: 942E3
    }
      , Nd = {
        name: "DISABLE_EUREKA_720",
        id: 932100
    }
      , Od = {
        name: "EVENT_SOUNDS_LAUNCH",
        id: 927906
    }
      , Pd = {
        name: "PREVIEW_NEXT_VIDEO",
        id: 927901
    }
      , Qd = {
        name: "RELATED_SEARCH_RESULTS_HOLDBACK",
        id: 912519
    }
      , Rd = {
        name: "VIDEO_VERIFICATION_TOKENS",
        id: 932401
    }
      , Sd = {
        name: "HELP_AND_FEEDBACK",
        id: 920508
    }
      , Td = {
        name: "USE_INNER_TUBE",
        id: 938800
    }
      , Ud = {
        name: "PAID_SCOPE",
        id: 938801
    }
      , Vd = {
        name: "USE_CORS_LAUNCH",
        id: 938804
    }
      , Wd = {
        L0: Ld,
        M0: Md,
        T0: Nd,
        Y0: {
            name: "EVENT_SOUNDS_HOLDBACK",
            id: 927905
        },
        Z0: Od,
        r5: Pd,
        t5: Qd,
        G5: Rd,
        c2: Sd,
        C5: Td,
        m5: Ud,
        B5: Vd
    }
      , Xd = "AE AR AU BE BR CA CL CO CZ DE EG ES FR GB HK HU ID IE IL IN IT JO JP KR MA MX MY NL NZ PE PH PL RU SA SE SG TW ZA".split(" ")
      , Yd = ["\u309b", "\u309c", "\u5c0f"]
      , Zd = {
        "\u3042": ["\u3044", "\u3046", "\u3048", "\u304a"],
        "\u304b": ["\u304d", "\u304f", "\u3051", "\u3053"],
        "\u3055": ["\u3057", "\u3059", "\u305b", "\u305d"],
        "\u305f": ["\u3061", "\u3064", "\u3066", "\u3068"],
        "\u306a": ["\u306b", "\u306c", "\u306d", "\u306e"],
        "\u306f": ["\u3072", "\u3075", "\u3078", "\u307b"],
        "\u307e": ["\u307f", "\u3080", "\u3081", "\u3082"],
        "\u3084": ["\u3086", "\u3088"],
        "\u3089": ["\u308a", "\u308b", "\u308c", "\u308d"],
        "\u308f": ["\u3092", "\u3093"],
        "\u309b": ["\u309c", "\u5c0f", "\u30fc"]
    }
      , $d = {
        "\u3131": ["\u3132"],
        "\u3137": ["\u3138"],
        "\u3142": ["\u3143"],
        "\u3145": ["\u3146"],
        "\u3148": ["\u3149"]
    }
      , ae = {
        "\u3131": "\u1100",
        "\u3132": "\u1101",
        "\u3134": "\u1102",
        "\u3137": "\u1103",
        "\u3138": "\u1104",
        "\u314f": "\u1161",
        "\u3153": "\u1165",
        "\u3157": "\u1169",
        "\u3139": "\u1105",
        "\u3141": "\u1106",
        "\u3142": "\u1107",
        "\u3143": "\u1108",
        "\u3145": "\u1109",
        "\u3151": "\u1163",
        "\u3155": "\u1167",
        "\u315b": "\u116d",
        "\u3146": "\u110a",
        "\u3147": "\u110b",
        "\u3148": "\u110c",
        "\u3149": "\u110d",
        "\u314a": "\u110e",
        "\u3161": "\u1173",
        "\u3163": "\u1175",
        "\u315c": "\u116e",
        "\u314b": "\u110f",
        "\u314c": "\u1110",
        "\u314d": "\u1111",
        "\u314e": "\u1112",
        "\u3150": "\u1162",
        "\u3154": "\u1166",
        "\u3160": "\u1172",
        "\u3152": "\u1164",
        "\u3156": "\u1168"
    }
      , be = {
        "\u5c0f": {
            "\u3042": "\u3041",
            "\u3041": "\u3042",
            "\u3044": "\u3043",
            "\u3043": "\u3044",
            "\u3048": "\u3047",
            "\u3047": "\u3048",
            "\u304a": "\u3049",
            "\u3049": "\u304a",
            "\u3084": "\u3083",
            "\u3083": "\u3084",
            "\u3086": "\u3085",
            "\u3085": "\u3086",
            "\u3088": "\u3087",
            "\u3087": "\u3088",
            "\u308f": "\u308e",
            "\u308e": "\u308f",
            "\u304b": "\u3095",
            "\u3095": "\u304b",
            "\u304c": "\u3095",
            "\u3051": "\u3096",
            "\u3096": "\u3051",
            "\u3052": "\u3096",
            "\u3064": "\u3063",
            "\u3063": "\u3064",
            "\u3065": "\u3063",
            "\u3046": "\u3045",
            "\u3045": "\u3046",
            "\u3094": "\u3045"
        },
        "\u309b": {
            "\u304d": "\u304e",
            "\u304e": "\u304d",
            "\u304f": "\u3050",
            "\u3050": "\u304f",
            "\u3053": "\u3054",
            "\u3054": "\u3053",
            "\u3055": "\u3056",
            "\u3056": "\u3055",
            "\u3057": "\u3058",
            "\u3058": "\u3057",
            "\u3059": "\u305a",
            "\u305a": "\u3059",
            "\u305b": "\u305c",
            "\u305c": "\u305b",
            "\u305d": "\u305e",
            "\u305e": "\u305d",
            "\u305f": "\u3060",
            "\u3060": "\u305f",
            "\u3061": "\u3062",
            "\u3062": "\u3061",
            "\u3066": "\u3067",
            "\u3067": "\u3066",
            "\u3068": "\u3069",
            "\u3069": "\u3068",
            "\u304b": "\u304c",
            "\u304c": "\u304b",
            "\u3095": "\u304c",
            "\u3051": "\u3052",
            "\u3052": "\u3051",
            "\u3096": "\u3052",
            "\u3064": "\u3065",
            "\u3065": "\u3064",
            "\u3063": "\u3065",
            "\u3046": "\u3094",
            "\u3045": "\u3094",
            "\u3094": "\u3046",
            "\u3071": "\u3070",
            "\u3070": "\u306f",
            "\u306f": "\u3070",
            "\u3074": "\u3073",
            "\u3073": "\u3072",
            "\u3072": "\u3073",
            "\u3077": "\u3076",
            "\u3076": "\u3075",
            "\u3075": "\u3076",
            "\u307a": "\u3079",
            "\u3079": "\u3078",
            "\u3078": "\u3079",
            "\u307d": "\u307c",
            "\u307c": "\u307b",
            "\u307b": "\u307c"
        },
        "\u309c": {
            "\u306f": "\u3071",
            "\u3071": "\u306f",
            "\u3070": "\u3071",
            "\u3072": "\u3074",
            "\u3074": "\u3072",
            "\u3073": "\u3074",
            "\u3075": "\u3077",
            "\u3077": "\u3075",
            "\u3076": "\u3077",
            "\u3078": "\u307a",
            "\u307a": "\u3078",
            "\u3079": "\u307a",
            "\u307b": "\u307d",
            "\u307d": "\u307b",
            "\u307c": "\u307d"
        }
    }
      , ce = /lang-\w+/
      , de = {
        R0: "zh_CN",
        e2: "zh_HK",
        JAPAN: "ja_JP",
        j5: "ko_KR",
        uZ: "nb_NO",
        u5: "ru_RU",
        x5: "zh_TW",
        y5: "uk_UA"
    }
      , ee = "af_ZA am_ET bg_BG bn_BD ca_ES cs_CZ da_DK de_DE el_GR en_US en_GB es_ES es_MX et_EE eu_ES fa_IR fi_FI fil_PH fr_FR fr_CA gl_ES gu_IN hi_IN hr_HR hu_HU id_ID is_IS it_IT ja_JP kn_IN ko_KR lt_LT lv_LV ml_IN mr_IN ms_MY nb_NO nl_NL pl_PL pt_PT pt_BR ro_RO ru_RU sk_SK sl_SI sr_RS sv_SE sw_TZ ta_IN te_IN th_TH tr_TR uk_UA ur_PK vi_VN zh_CN zh_HK zh_TW zu_ZA".split(" ")
      , fe = {
        uZ: ["no_NO"]
    };
    ba("yt.tv.constants.PlayerState", {
        O0: 3,
        X0: 0,
        ERROR: -1E3,
        n5: 2,
        p5: 1,
        z5: -1,
        E5: 5
    }, void 0);
    var ge = {
        EN: "abcdefghijklmnopqrstuvwxyz",
        KO: "\u3131\u3134\u3137\u3139\u3141\u3142\u3145\u3147\u3148\u314a\u314b\u314c\u314d\u314e\n\u314f\u3151\u3153\u3155\u3157\u315b\u315c\u3160\u3161\u3163\u3150\u3152\u3154\u3156",
        RU: "\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f",
        JP: "\u3042\u304b\u3055\u305f\u306a\u306f\u307e\u3084\u3089\u308f\u309b",
        NUMBERS: "1234567890_"
    }
      , he = {
        d2: "HL",
        s5: "RC",
        v5: "SU",
        H5: "WL"
    }
      , ie = {
        "default": [0, 854],
        mqdefault: [855, 1366],
        hqdefault: [1367, 1920],
        sddefault: [1921, Number.MAX_VALUE]
    }
      , je = {
        Yi: "icon-player-closedcaptions",
        S0: "disabled-button",
        Ai: "icon-dislike",
        U0: "icon-dislike-checked",
        mm: "icon-player-ff",
        Im: "icon-flag",
        Bi: "icon-like",
        k5: "icon-like-checked",
        My: "icon-player-pause",
        gO: "icon-player-play",
        q5: "play-button",
        nm: "icon-player-rew",
        Ls: "icon-search",
        tm: "icon-subscribe",
        A5: "icon-unsubscribe"
    }
      , ke = {
        Yi: "transport-closed-captions-button",
        Wf: "player-controls",
        Ai: "transport-dislike-button",
        mm: "transport-ff-button",
        Im: "transport-flag-button",
        Bi: "transport-like-button",
        o5: "player-controls",
        Ny: "transport-playpause-button",
        wA: "progress-bar",
        nm: "transport-rw-button",
        Ls: "transport-search-button",
        tm: "transport-subscribe-button"
    }
      , le = {
        FRIEND_ADDED: "[[{{username}} added a friend|The message that describes user activity. Displayed when a user has added a friend.]]",
        USER_SUBSCRIPTION_ADDED: "[[{{username}} added a subscription|The message that describes user activity. Displayed when a user subscribed to a channel.]]",
        VIDEO_ADDED_TO_LEGO: "[[{{username}} added a video|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
        VIDEO_ADDED_TO_PLAYLIST: "[[{{username}} added a video to a playlist|The message that describes user activity. Displayed when a user added a video to a playlist.]]",
        VIDEO_COMMENTED: "[[{{username}} commented a video|The message that describes user activity. Displayed when a user has commented on a video.]]",
        VIDEO_FAVORITED: "[[{{username}} favorited a video|The message that describes user activity. Displayed when a user has favorited a video.]]",
        VIDEO_RATED: "[[{{username}} rated a video|The message that describes user activity. Displayed when a user has rated a video.]]",
        VIDEO_RECOMMENDED: "[[video recommended|The message that describes that a video has been recommended.]]",
        VIDEO_SHARED: "[[{{username}} shared a video|The message that describes user activity. Displayed when a user has shared a video.]]",
        VIDEO_UPLOADED: "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    };
    function me(a, b) {
        for (var c = b.length, e = 0; e < c; ++e) {
            var f = a
              , g = b[e];
            ne(f, g);
            oe(f, g)
        }
    }
    function ne(a, b) {
        pe(b);
        a.prototype.__defineGetter__(b, function() {
            return this[b + "_"]
        })
    }
    function oe(a, b) {
        pe(b);
        var c = b + "_";
        a.prototype.__defineSetter__(b, function(a) {
            if (a !== this[c]) {
                var f = this[c];
                this[c] = a;
                this.G && ga(this.G) && this.G(b + ":changed", a, f)
            }
        })
    }
    function pe(a) {
        if (!a.match(/^[a-zA-Z]+$/))
            throw Error("Invalid property name");
    }
    ;function qe(a, b, c, e) {
        a = xc(a).createEvent("Event");
        a.initEvent(b, c, !0);
        a.detail = e;
        return a
    }
    function re(a, b, c, e, f) {
        a = qe(a, b, e);
        a.which = c;
        a.charCode = c;
        a.keyCode = c;
        a.ng = f;
        return a
    }
    function M(a, b, c) {
        a.stopPropagation();
        c && a.stopImmediatePropagation && a.stopImmediatePropagation();
        b || a.preventDefault()
    }
    ;function se() {
        K.call(this);
        this.Cs = !1;
        this.o = null
    }
    z(se, K);
    d = se.prototype;
    d.oE = function() {}
    ;
    d.b = function(a, b) {
        if (this.o)
            return this.o.addEventListener(a, b, !1),
            w(this.o.removeEventListener, this.o, a, b, !1);
        throw Error("Attempt to register event on " + a + " before DOM element is available.");
    }
    ;
    d.G = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        this.OE(a, !1, c)
    }
    ;
    d.l = function(a, b) {
        this.OE(a, !0, b)
    }
    ;
    d.OE = function(a, b, c) {
        this.Cs = this.Cs || !!this.o;
        if (this.o)
            a = qe(this.o, a, b, c),
            this.o.dispatchEvent(a);
        else {
            if (this.Cs)
                throw Error("Attempt to dispatch " + a + " without DOM element.");
            if (!C(a, ":changed"))
                throw Error("Attempt to dispatch " + a + " before DOM element is available.");
        }
    }
    ;
    d.I = function() {
        pc(this.o);
        se.h.I.call(this)
    }
    ;
    function te() {
        se.call(this);
        this.Lc = []
    }
    z(te, se);
    d = te.prototype;
    d.b = function(a, b) {
        var c = te.h.b.call(this, a, b);
        this.Lc.push({
            Xa: this,
            event: a,
            al: c
        });
        return c
    }
    ;
    d.aa = function(a, b, c) {
        this.Lc.push({
            Xa: a,
            event: b,
            al: a.b(b, c)
        })
    }
    ;
    d.Md = function() {
        for (var a = 0, b = this.Lc.length; a < b; ++a)
            this.Lc[a].al();
        this.Lc.length = 0
    }
    ;
    d.AY = function(a, b) {
        for (var c = [], e = 0, f = this.Lc.length; e < f; ++e) {
            var g = this.Lc[e];
            g.Xa !== a || null != b && b != g.event ? c.push(g) : g.al()
        }
        this.Lc.length = 0;
        this.Lc = c
    }
    ;
    d.I = function() {
        this.Md();
        te.h.I.call(this)
    }
    ;
    function N() {
        te.call(this);
        this.children = [];
        this.model = this.template = this.eb = null;
        this.isHidden = this.isActive = !1
    }
    z(N, te);
    me(N, ["model", "isActive", "isHidden"]);
    d = N.prototype;
    d.ga = function() {}
    ;
    d.FJ = function() {}
    ;
    d.createElement = function() {}
    ;
    d.ff = function() {}
    ;
    d.DO = function() {
        this.b("model:changed", w(this.wp, this));
        this.b("activated", w(this.Mp, this));
        this.b("deactivated", w(this.eM, this))
    }
    ;
    d.ready = function() {}
    ;
    d.h9 = function(a) {
        this.b("click", w(a, this))
    }
    ;
    d.i9 = function(a) {
        this.b("mousedown", w(a, this));
        this.b("keydown", w(function(b) {
            13 === b.which && a.apply(this, arguments)
        }, this))
    }
    ;
    d.j9 = function(a) {
        this.b("mouseup", w(a, this));
        this.b("keyup", w(function(b) {
            13 === b.which && a.apply(this, arguments)
        }, this))
    }
    ;
    d.wp = function(a) {
        this.AY(this.model);
        a.detail && this.wm()
    }
    ;
    d.N5 = function(a, b) {
        var c = this.injector.get(a, b, Tc);
        if (c)
            this.addChild(c);
        else
            throw Error("Error while creating child " + a);
        return c
    }
    ;
    d.q$ = function() {}
    ;
    d.wm = function() {}
    ;
    d.iz = function(a, b) {
        this.aa(this.model, a, b)
    }
    ;
    d.b6 = function(a, b) {
        return this.injector.get(a, b, Qc)
    }
    ;
    d.focus = function() {
        this.eb && this.eb.isActive ? this.eb.focus() : this.o.focus()
    }
    ;
    d.B = function() {
        this.isActive || (this.isActive = !0,
        this.eb && this.eb.B(),
        this.l("activated"),
        this.Qa(),
        this.focus())
    }
    ;
    d.Mp = function(a) {
        this.Pz(a) && (this.B(),
        this.eb != a.target.rg && (this.eb && this.eb.J(),
        this.eb = a.target.rg),
        M(a, !1, !0))
    }
    ;
    d.J = function() {
        this.isActive && (this.isActive = !1,
        this.eb && this.eb.J(),
        this.l("deactivated"),
        this.Qa())
    }
    ;
    d.eM = function(a) {
        this.Pz(a) && (this.isActive && this.focus(),
        M(a, !1, !0))
    }
    ;
    d.Pz = function(a) {
        return a.target.parentNode == this.o
    }
    ;
    d.s9 = function() {
        this.isHidden = !1
    }
    ;
    d.r9 = function() {
        this.isHidden = !0
    }
    ;
    d.addClass = function(a) {
        Va(this.o, a)
    }
    ;
    d.removeClass = function(a) {
        Wa(this.o, a)
    }
    ;
    d.$Y = function(a, b) {
        var c = a(this, b);
        return this.AE(function(b) {
            return b.$Y(a, c)
        }, this)
    }
    ;
    d.ZY = function(a, b) {
        var c = this.AE(function(c) {
            return c.ZY(a, b)
        }, this);
        return a(this, c)
    }
    ;
    d.AE = function(a, b) {
        var c = 0;
        return this.children.map(function(e) {
            return a.call(b, e, c++)
        })
    }
    ;
    N.prototype.addChild = function(a) {
        this.children.push(a);
        a.parent = this;
        return this
    }
    ;
    d = N.prototype;
    d.XP = function(a, b) {
        this.children.splice(b, 0, a);
        a.parent = this;
        return this
    }
    ;
    d.ss = function(a) {
        return this.children[a]
    }
    ;
    d.rK = function(a) {
        a = this.children.indexOf(a);
        -1 < a && this.Wr(a);
        return a
    }
    ;
    d.Wr = function(a) {
        if (-1 < a && a < this.children.length) {
            var b = this.children[a];
            b == this.eb && (this.eb = null);
            this.children.splice(a, 1);
            Nc(b);
            return b
        }
        return null
    }
    ;
    d.A9 = function() {
        for (var a = [], b = this.IY(), c = 0; c < b; ++c)
            a.push(this.Wr(0));
        return a
    }
    ;
    d.IY = function() {
        return this.children.length
    }
    ;
    d.I = function() {
        this.J();
        Oc(this.children);
        this.parent && this.parent.rK(this);
        this.parent = null;
        N.h.I.call(this)
    }
    ;
    d.Qa = function(a) {
        Fd(this.o, this, this.parent || this.vO || this);
        a && this.yB(a)
    }
    ;
    d.yB = function(a) {
        for (var b = 0, c = this.children.length; b < c; ++b)
            this.children[b].Qa(a)
    }
    ;
    d.kg = function(a, b) {
        b ? Wa(a, "hidden") : Va(a, "hidden")
    }
    ;
    N.prototype.getStyles = function() {
        var a = [];
        this.isActive && a.push("active");
        this.isHidden && a.push("hidden");
        return a.join(" ")
    }
    ;
    function ue(a, b) {
        this.$a = a;
        this.sB = b;
        this.jB = !1;
        this.tU = null
    }
    ;function ve(a, b) {
        var c = a.split(b)
          , e = c.shift();
        c.forEach(function(a) {
            e += a && a.length ? a.charAt(0).toUpperCase() + a.slice(1) : a
        });
        return e
    }
    function we(a) {
        return a ? a.toLowerCase().replace(/(^\s+|\s+$)/g, "").replace(/\s+/g, "-").replace(/[^a-z0-9_\-]/g, "") : ""
    }
    function xe(a, b) {
        if (isNaN(a))
            return "0%";
        b = isNaN(b) ? 100 : b;
        return Math.round(a * b) + "%"
    }
    function ye(a, b) {
        var c = 4 <= b ? b - 4 : b;
        a = a || "";
        if (a.length < c || 0 > c)
            return a;
        for (var e = c; 0 < e; e--)
            if (" " == a[e]) {
                c = e;
                break
            }
        return a.substr(0, c) + "..."
    }
    function ze(a, b, c) {
        return a.replace(/\{([^\{]*)\}([\/])*/gm, function(a, f, g) {
            (a = b[f]) && g && (a = a + "/");
            return void 0 !== a ? (c && (b[f] = null),
            a) : ""
        })
    }
    ;function Ae(a, b) {
        this.UV = a;
        this.RW = b
    }
    d = Ae.prototype;
    d.get = function(a, b, c, e, f) {
        c = this.Qt(c, e);
        b = Be(b);
        a = ze(a, b, !0);
        a = Fe(a, b);
        c.send(a, "GET", null, f);
        return w(c.abort, c)
    }
    ;
    d.post = function(a, b, c, e, f, g) {
        e = this.Qt(e, f);
        f = Be(c);
        b = Be(b);
        c = v(c) ? c : Ge(f);
        a = ze(a, b, !0);
        e.send(a, "POST", c, g);
        return w(e.abort, e)
    }
    ;
    d.f_ = function(a, b, c, e, f, g) {
        e = this.Qt(e, f);
        c = Be(c);
        b = Be(b);
        a = ze(a, b);
        a = Fe(a, c);
        e.send(a, "DELETE", null, g);
        return w(e.abort, e)
    }
    ;
    d.jsonp = function(a, b, c, e, f) {
        b = Be(b);
        var g = !1
          , k = new this.RW(ze(a, b),f);
        k.HX(3E4);
        var l = k.send(b, c, function(a) {
            if (e && !g) {
                var b = new ue;
                b.jB = !0;
                b.tU = a;
                e(b)
            }
        });
        return function() {
            g = !0;
            k.cancel(l)
        }
    }
    ;
    d.Qt = function(a, b) {
        var c = new this.UV;
        c.addEventListener("success", w(function(b) {
            b = b.target;
            a && a(this.transformResponse(b));
            b.Xd()
        }, this));
        c.addEventListener("error", function(a) {
            a = a.target;
            b && b(new ue(a.Kk(),a.getStatus()));
            a.Xd()
        });
        return c
    }
    ;
    d.transformResponse = function(a) {
        var b = a.getResponseHeader("content-type"), c;
        0 <= b.indexOf("xml") ? c = a.pX() : 0 <= b.indexOf("html") ? c = a.fg() : 0 > b.indexOf("image") && (c = a.oX());
        return c
    }
    ;
    Ae.$inject = ["xhrBackend", "jsonpBackend"];
    function He(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    function Ie(a) {
        return eval("(" + a + ")")
    }
    function O(a, b) {
        return (new Je(b)).wt(a)
    }
    function Je(a) {
        this.Wn = a
    }
    Je.prototype.wt = function(a) {
        var b = [];
        this.Ht(a, b);
        return b.join("")
    }
    ;
    Je.prototype.Ht = function(a, b) {
        switch (typeof a) {
        case "string":
            this.RD(a, b);
            break;
        case "number":
            this.EX(a, b);
            break;
        case "boolean":
            b.push(a);
            break;
        case "undefined":
            b.push("null");
            break;
        case "object":
            if (null == a) {
                b.push("null");
                break
            }
            if (u(a)) {
                this.DX(a, b);
                break
            }
            this.FX(a, b);
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof a);
        }
    }
    ;
    var Ke = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Le = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    Je.prototype.RD = function(a, b) {
        b.push('"', a.replace(Le, function(a) {
            if (a in Ke)
                return Ke[a];
            var b = a.charCodeAt(0)
              , f = "\\u";
            16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
            return Ke[a] = f + b.toString(16)
        }), '"')
    }
    ;
    Je.prototype.EX = function(a, b) {
        b.push(isFinite(a) && !isNaN(a) ? a : "null")
    }
    ;
    Je.prototype.DX = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var e = "", f = 0; f < c; f++)
            b.push(e),
            e = a[f],
            this.Ht(this.Wn ? this.Wn.call(a, String(f), e) : e, b),
            e = ",";
        b.push("]")
    }
    ;
    Je.prototype.FX = function(a, b) {
        b.push("{");
        var c = "", e;
        for (e in a)
            if (Object.prototype.hasOwnProperty.call(a, e)) {
                var f = a[e];
                "function" != typeof f && (b.push(c),
                this.RD(e, b),
                b.push(":"),
                this.Ht(this.Wn ? this.Wn.call(a, e, f) : f, b),
                c = ",")
            }
        b.push("}")
    }
    ;
    function Me() {}
    ;function Ne() {}
    z(Ne, Me);
    Ne.prototype.Y = function() {
        var a = 0;
        sd(this.Gb(!0), function() {
            a++
        });
        return a
    }
    ;
    Ne.prototype.clear = function() {
        var a = td(this.Gb(!0))
          , b = this;
        E(a, function(a) {
            b.remove(a)
        })
    }
    ;
    function Oe(a) {
        this.ec = a
    }
    z(Oe, Ne);
    d = Oe.prototype;
    d.OX = function() {
        if (!this.ec)
            return !1;
        try {
            return this.ec.setItem("__sak", "1"),
            this.ec.removeItem("__sak"),
            !0
        } catch (a) {
            return !1
        }
    }
    ;
    d.Kn = function(a, b) {
        try {
            this.ec.setItem(a, b)
        } catch (c) {
            if (0 == this.ec.length)
                throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    d.get = function(a) {
        a = this.ec.getItem(a);
        if (!v(a) && null !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    d.remove = function(a) {
        this.ec.removeItem(a)
    }
    ;
    d.Y = function() {
        return this.ec.length
    }
    ;
    d.Gb = function(a) {
        var b = 0
          , c = this.ec
          , e = new od;
        e.next = function() {
            if (b >= c.length)
                throw nd;
            var e;
            e = c.key(b++);
            if (a)
                return e;
            e = c.getItem(e);
            if (!v(e))
                throw "Storage mechanism: Invalid value was encountered";
            return e
        }
        ;
        return e
    }
    ;
    d.clear = function() {
        this.ec.clear()
    }
    ;
    d.key = function(a) {
        return this.ec.key(a)
    }
    ;
    function Pe() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.ec = a
    }
    z(Pe, Oe);
    function Qe(a, b) {
        if (H && !Vb(9)) {
            Re || (Re = new ud);
            this.ib = Re.get(a);
            this.ib || (b ? this.ib = document.getElementById(b) : (this.ib = document.createElement("userdata"),
            this.ib.addBehavior("#default#userData"),
            document.body.appendChild(this.ib)),
            Re.pc(a, this.ib));
            this.ct = a;
            try {
                this.TT()
            } catch (c) {
                this.ib = null
            }
        }
    }
    z(Qe, Ne);
    var Se = {
        ".": ".2E",
        "!": ".21",
        "~": ".7E",
        "*": ".2A",
        "'": ".27",
        "(": ".28",
        ")": ".29",
        "%": "."
    }
      , Re = null;
    d = Qe.prototype;
    d.ib = null;
    d.ct = null;
    function Te(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
            return Se[a]
        })
    }
    d.PX = function() {
        return !!this.ib
    }
    ;
    d.Kn = function(a, b) {
        this.ib.setAttribute(Te(a), b);
        this.pt()
    }
    ;
    d.get = function(a) {
        a = this.ib.getAttribute(Te(a));
        if (!v(a) && null !== a)
            throw "Storage mechanism: Invalid value was encountered";
        return a
    }
    ;
    d.remove = function(a) {
        this.ib.removeAttribute(Te(a));
        this.pt()
    }
    ;
    d.Y = function() {
        return this.Nt().attributes.length
    }
    ;
    d.Gb = function(a) {
        var b = 0
          , c = this.Nt().attributes
          , e = new od;
        e.next = function() {
            if (b >= c.length)
                throw nd;
            var e;
            e = c[b++];
            if (a)
                return decodeURIComponent(e.nodeName.replace(/\./g, "%")).substr(1);
            e = e.nodeValue;
            if (!v(e))
                throw "Storage mechanism: Invalid value was encountered";
            return e
        }
        ;
        return e
    }
    ;
    d.clear = function() {
        for (var a = this.Nt(), b = a.attributes.length; 0 < b; b--)
            a.removeAttribute(a.attributes[b - 1].nodeName);
        this.pt()
    }
    ;
    d.TT = function() {
        this.ib.load(this.ct)
    }
    ;
    d.pt = function() {
        try {
            this.ib.save(this.ct)
        } catch (a) {
            throw "Storage mechanism: Quota exceeded";
        }
    }
    ;
    d.Nt = function() {
        return this.ib.XMLDocument.documentElement
    }
    ;
    function Ue(a, b) {
        this.bh = a;
        this.xf = b + "::"
    }
    z(Ue, Ne);
    d = Ue.prototype;
    d.bh = null;
    d.xf = "";
    d.Kn = function(a, b) {
        this.bh.Kn(this.xf + a, b)
    }
    ;
    d.get = function(a) {
        return this.bh.get(this.xf + a)
    }
    ;
    d.remove = function(a) {
        this.bh.remove(this.xf + a)
    }
    ;
    d.Gb = function(a) {
        var b = this.bh.Gb(!0)
          , c = this
          , e = new od;
        e.next = function() {
            for (var e = b.next(); e.substr(0, c.xf.length) != c.xf; )
                e = b.next();
            return a ? e.substr(c.xf.length) : c.bh.get(e)
        }
        ;
        return e
    }
    ;
    function Ve(a) {
        this.Qn = a;
        this.WV = new Je
    }
    Ve.prototype.Zi = function(a, b) {
        t(b) ? this.Qn.Kn(a, this.WV.wt(b)) : this.Qn.remove(a)
    }
    ;
    Ve.prototype.get = function(a) {
        var b;
        try {
            b = this.Qn.get(a)
        } catch (c) {
            return
        }
        if (null !== b)
            try {
                return He(b)
            } catch (e) {
                throw "Storage: Invalid value was encountered";
            }
    }
    ;
    Ve.prototype.remove = function(a) {
        this.Qn.remove(a)
    }
    ;
    function We(a) {
        Ve.call(this, a)
    }
    z(We, Ve);
    function Xe(a) {
        this.data = a
    }
    function Ye(a) {
        return !t(a) || a instanceof Xe ? a : new Xe(a)
    }
    We.prototype.Zi = function(a, b) {
        We.h.Zi.call(this, a, Ye(b))
    }
    ;
    We.prototype.Gr = function(a) {
        a = We.h.get.call(this, a);
        if (!t(a) || a instanceof Object)
            return a;
        throw "Storage: Invalid value was encountered";
    }
    ;
    We.prototype.get = function(a) {
        if (a = this.Gr(a)) {
            if (a = a.data,
            !t(a))
                throw "Storage: Invalid value was encountered";
        } else
            a = void 0;
        return a
    }
    ;
    function Ze(a) {
        Ve.call(this, a)
    }
    z(Ze, We);
    Ze.prototype.Zi = function(a, b, c) {
        if (b = Ye(b)) {
            if (c) {
                if (c < y()) {
                    Ze.prototype.remove.call(this, a);
                    return
                }
                b.expiration = c
            }
            b.creation = y()
        }
        Ze.h.Zi.call(this, a, b)
    }
    ;
    Ze.prototype.Gr = function(a, b) {
        var c = Ze.h.Gr.call(this, a);
        if (c) {
            var e;
            if (e = !b) {
                e = c.creation;
                var f = c.expiration;
                e = !!f && f < y() || !!e && e > y()
            }
            if (e)
                Ze.prototype.remove.call(this, a);
            else
                return c
        }
    }
    ;
    function $e(a) {
        this.WE = a
    }
    var af = /\s*;\s*/;
    d = $e.prototype;
    d.q8 = function() {
        return navigator.cookieEnabled
    }
    ;
    d.uY = function(a) {
        return !/[;=\s]/.test(a)
    }
    ;
    d.vY = function(a) {
        return !/[;\r\n]/.test(a)
    }
    ;
    d.st = function(a, b, c, e, f, g) {
        if (!this.uY(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (!this.vY(b))
            throw Error('Invalid cookie value "' + b + '"');
        t(c) || (c = -1);
        f = f ? ";domain=" + f : "";
        e = e ? ";path=" + e : "";
        g = g ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
        this.wY(a + "=" + b + f + e + c + g)
    }
    ;
    d.get = function(a, b) {
        for (var c = a + "=", e = this.Lt(), f = 0, g; g = e[f]; f++) {
            if (0 == g.lastIndexOf(c, 0))
                return g.substr(c.length);
            if (g == a)
                return ""
        }
        return b
    }
    ;
    d.remove = function(a, b, c) {
        var e = this.LY(a);
        this.st(a, "", 0, b, c);
        return e
    }
    ;
    d.Yb = function() {
        return this.Zn().keys
    }
    ;
    d.na = function() {
        return this.Zn().mE
    }
    ;
    d.Ga = function() {
        return !this.Mt()
    }
    ;
    d.Y = function() {
        return this.Mt() ? this.Lt().length : 0
    }
    ;
    d.LY = function(a) {
        return t(this.get(a))
    }
    ;
    d.Rj = function(a) {
        for (var b = this.Zn().mE, c = 0; c < b.length; c++)
            if (b[c] == a)
                return !0;
        return !1
    }
    ;
    d.clear = function() {
        for (var a = this.Zn().keys, b = a.length - 1; 0 <= b; b--)
            this.remove(a[b])
    }
    ;
    d.wY = function(a) {
        this.WE.cookie = a
    }
    ;
    d.Mt = function() {
        return this.WE.cookie
    }
    ;
    d.Lt = function() {
        return (this.Mt() || "").split(af)
    }
    ;
    d.Zn = function() {
        for (var a = this.Lt(), b = [], c = [], e, f, g = 0; f = a[g]; g++)
            e = f.indexOf("="),
            -1 == e ? (b.push(""),
            c.push(f)) : (b.push(f.substring(0, e)),
            c.push(f.substring(e + 1)));
        return {
            keys: b,
            mE: c
        }
    }
    ;
    var bf = new $e(document);
    bf.l5 = 3950;
    function cf(a, b) {
        return bf.get("yt-dev." + a, b)
    }
    function df(a, b, c) {
        return bf.remove("yt-dev." + a, b || "/", c || "google.com")
    }
    ;function ef(a) {
        var b = new Pe;
        (b = b.OX() ? a ? new Ue(b,a) : b : null) || (a = new Qe(a || "UserDataSharedStore"),
        b = a.PX() ? a : null);
        this.Mn = (a = b) ? new Ze(a) : null
    }
    ef.prototype.ut = function() {
        return !!this.Mn
    }
    ;
    ef.prototype.aB = function(a, b, c, e) {
        c = c || 31104E3;
        if (this.ut())
            try {
                this.Mn.Zi(a, b, y() + 1E3 * c);
                return
            } catch (f) {}
        this.remove(a);
        var g = "";
        if (e)
            try {
                g = escape(O(b))
            } catch (k) {
                return
            }
        else
            g = escape(b);
        a = "yt-dev." + a;
        bf.st(a, g, c, "/", document.domain || "google.com")
    }
    ;
    ef.prototype.get = function(a, b) {
        var c = "";
        if (this.ut())
            try {
                c = this.Mn.get(a)
            } catch (e) {}
        if (!c && (c = cf(a, "")) && (c = unescape(c),
        b))
            try {
                c = He(c)
            } catch (f) {
                this.remove(a),
                c = ""
            }
        return c
    }
    ;
    ef.prototype.remove = function(a) {
        this.ut() && this.Mn.remove(a);
        df(a, "/", document.domain)
    }
    ;
    function ff(a) {
        this.Ca = a
    }
    ff.prototype.zf = function() {}
    ;
    function gf(a) {
        this.Ca = a
    }
    z(gf, ff);
    gf.prototype.zf = function() {
        var a = this.Ca.get("private_data");
        a && a["crash-data"] && (delete a["crash-data"],
        this.Ca.Ra("private_data", a))
    }
    ;
    function hf(a) {
        this.Ca = a
    }
    z(hf, ff);
    hf.prototype.zf = function() {
        this.Ca.Ra("needs_rental_auth_dialog", !0)
    }
    ;
    function jf(a) {
        this.Ca = a
    }
    z(jf, ff);
    jf.prototype.zf = function() {
        for (var a = ["crash-count", "device-statistics", "activity-path", "spinner_log"], b = {}, c = a.length, e = 0; e < c; e++)
            b[a[e]] = this.Ca.get(a[e]);
        this.Ca.Ra("private_data", b)
    }
    ;
    function kf(a) {
        this.Ca = a
    }
    z(kf, ff);
    kf.prototype.zf = function() {
        var a = this.Ca.get("private_data");
        if (a && a["crash-count"]) {
            var b = {
                startup: 0
            };
            b["crash-count"] = a["crash-count"];
            a["crash-data"] = b;
            delete a["crash-count"];
            this.Ca.Ra("private_data", a)
        }
    }
    ;
    function lf(a) {
        this.Ca = a
    }
    z(lf, ff);
    lf.prototype.zf = function() {
        var a = this.Ca.get("leanback_oauth_renew");
        a && (this.Ca.get("tv-refresh-token") || this.Ca.Ra("tv-refresh-token", a, 15768E3),
        this.Ca.remove("leanback_oauth_renew"))
    }
    ;
    function mf(a) {
        this.Ca = a
    }
    z(mf, ff);
    mf.prototype.zf = function() {
        for (var a = ["tv-access-token", "activity-path", "saved-searches", "spinner_log"], b = this.Ca.get("private_data"), c = 0, e = a.length; c < e; ++c) {
            var f = a[c];
            this.Ca.remove(f);
            b && delete b[f]
        }
        b && this.Ca.Ra("private_data", b)
    }
    ;
    var nf = {
        0: ff,
        1: ff,
        2: ff,
        3: ff,
        4: jf,
        5: ff,
        6: kf,
        7: ff,
        8: lf,
        9: mf,
        10: gf,
        11: hf
    };
    function of(a) {
        this.FT = a;
        this.Dm = new ef("yt.leanback");
        var b;
        for (a = this.get("schema-version", 31536E4, !0) || 0; 12 > a; )
            b = nf[a],
            b = new b(this),
            b.zf(),
            a++,
            this.Ra("schema-version", a, 31536E4)
    }
    of.prototype.Ra = function(a, b, c, e) {
        this.Dm.aB(a, b, c, e)
    }
    ;
    of.prototype.get = function(a, b, c) {
        var e = this.Dm.get(a, c);
        e && b && this.Ra(a, e, b, c);
        return e
    }
    ;
    of.prototype.remove = function(a) {
        this.Dm.remove(a)
    }
    ;
    of.prototype.vi = function(a) {
        this.FT.gZ(a)
    }
    ;
    of.inject = ["devicePlugin"];
    function pf(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    d = pf.prototype;
    d.NZ = function() {}
    ;
    d.Xd = function() {}
    ;
    d.te = !1;
    d.defaultPrevented = !1;
    d.IB = !0;
    d.stopPropagation = function() {
        this.te = !0
    }
    ;
    d.preventDefault = function() {
        this.defaultPrevented = !0;
        this.IB = !1
    }
    ;
    function qf(a) {
        qf[" "](a);
        return a
    }
    qf[" "] = p;
    var rf = !H || Vb(9)
      , sf = !H || Vb(9)
      , tf = H && !J("9");
    !I || J("528");
    Gb && J("1.9b") || H && J("8") || Fb && J("9.5") || I && J("528");
    Gb && !J("8") || H && J("9");
    function uf(a) {
        return I ? "webkit" + a : Fb ? "o" + a.toLowerCase() : a.toLowerCase()
    }
    uf("AnimationStart");
    uf("AnimationEnd");
    uf("AnimationIteration");
    uf("TransitionEnd");
    function vf(a, b) {
        a && this.SZ(a, b)
    }
    z(vf, pf);
    var wf = [1, 4, 2];
    d = vf.prototype;
    d.target = null;
    d.relatedTarget = null;
    d.rU = 0;
    d.sU = 0;
    d.clientX = 0;
    d.clientY = 0;
    d.screenX = 0;
    d.screenY = 0;
    d.pU = 0;
    d.keyCode = 0;
    d.charCode = 0;
    d.ctrlKey = !1;
    d.altKey = !1;
    d.shiftKey = !1;
    d.qU = !1;
    d.uU = !1;
    d.ke = null;
    d.SZ = function(a, b) {
        var c = this.type = a.type;
        pf.call(this, c);
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        if (e) {
            if (Gb) {
                var f;
                t: {
                    try {
                        qf(e.nodeName);
                        f = !0;
                        break t
                    } catch (g) {}
                    f = !1
                }
                f || (e = null)
            }
        } else
            "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.relatedTarget = e;
        this.rU = I || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.sU = I || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.pU = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.qU = a.metaKey;
        this.uU = Ab ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.ke = a;
        a.defaultPrevented && this.preventDefault();
        delete this.te
    }
    ;
    d.TZ = function(a) {
        return rf ? this.ke.button == a : "click" == this.type ? 0 == a : !!(this.ke.button & wf[a])
    }
    ;
    d.R8 = function() {
        return this.TZ(0) && !(I && Ab && this.ctrlKey)
    }
    ;
    d.stopPropagation = function() {
        vf.h.stopPropagation.call(this);
        this.ke.stopPropagation ? this.ke.stopPropagation() : this.ke.cancelBubble = !0
    }
    ;
    d.preventDefault = function() {
        vf.h.preventDefault.call(this);
        var a = this.ke;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        tf)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    d.v6 = function() {
        return this.ke
    }
    ;
    d.NZ = function() {}
    ;
    var xf = "closure_listenable_" + (1E6 * Math.random() | 0);
    function yf(a) {
        try {
            return !(!a || !a[xf])
        } catch (b) {
            return !1
        }
    }
    var zf = 0;
    function Af(a, b, c, e, f, g) {
        this.listener = a;
        this.xn = b;
        this.src = c;
        this.type = e;
        this.capture = !!f;
        this.me = g;
        this.key = ++zf;
        this.Rg = this.gn = !1
    }
    Af.prototype.rn = function() {
        this.Rg = !0;
        this.me = this.src = this.xn = this.listener = null
    }
    ;
    function Bf(a) {
        this.src = a;
        this.Ha = {};
        this.Mj = 0
    }
    d = Bf.prototype;
    d.ZU = function() {
        return this.Mj
    }
    ;
    d.f8 = function() {
        var a = 0, b;
        for (b in this.Ha)
            a += this.Ha[b].length;
        return a
    }
    ;
    d.mt = function(a, b, c, e, f) {
        var g = this.Ha[a];
        g || (g = this.Ha[a] = [],
        this.Mj++);
        var k = Cf(g, b, e, f);
        -1 < k ? (a = g[k],
        c || (a.gn = !1)) : (a = new Af(b,null,this.src,a,!!e,f),
        a.gn = c,
        g.push(a));
        return a
    }
    ;
    d.remove = function(a, b, c, e) {
        if (!(a in this.Ha))
            return !1;
        var f = this.Ha[a];
        b = Cf(f, b, c, e);
        return -1 < b ? (f[b].rn(),
        D.splice.call(f, b, 1),
        0 == f.length && (delete this.Ha[a],
        this.Mj--),
        !0) : !1
    }
    ;
    d.BC = function(a) {
        var b = a.type;
        if (!(b in this.Ha))
            return !1;
        var c = Na(this.Ha[b], a);
        c && (a.rn(),
        0 == this.Ha[b].length && (delete this.Ha[b],
        this.Mj--));
        return c
    }
    ;
    d.ZW = function(a) {
        var b = 0, c;
        for (c in this.Ha)
            if (!a || c == a) {
                for (var e = this.Ha[c], f = 0; f < e.length; f++)
                    ++b,
                    e[f].rn();
                delete this.Ha[c];
                this.Mj--
            }
        return b
    }
    ;
    d.iE = function(a, b) {
        var c = this.Ha[a]
          , e = [];
        if (c)
            for (var f = 0; f < c.length; ++f) {
                var g = c[f];
                g.capture == b && e.push(g)
            }
        return e
    }
    ;
    d.is = function(a, b, c, e) {
        a = this.Ha[a];
        var f = -1;
        a && (f = Cf(a, b, c, e));
        return -1 < f ? a[f] : null
    }
    ;
    d.YW = function(a, b) {
        var c = t(a)
          , e = t(b);
        return gb(this.Ha, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != a || e && f[g].capture != b))
                    return !0;
            return !1
        })
    }
    ;
    function Cf(a, b, c, e) {
        for (var f = 0; f < a.length; ++f) {
            var g = a[f];
            if (!g.Rg && g.listener == b && g.capture == !!c && g.me == e)
                return f
        }
        return -1
    }
    ;var Df = "closure_lm_" + (1E6 * Math.random() | 0)
      , Ef = {}
      , Ff = 0;
    function Gf(a, b, c, e, f) {
        if (u(b)) {
            for (var g = 0; g < b.length; g++)
                Gf(a, b[g], c, e, f);
            return null
        }
        c = Hf(c);
        return yf(a) ? a.mi(b, c, e, f) : If(a, b, c, !1, e, f)
    }
    function If(a, b, c, e, f, g) {
        if (!b)
            throw Error("Invalid event type");
        var k = !!f
          , l = Jf(a);
        l || (a[Df] = l = new Bf(a));
        c = l.mt(b, c, e, f, g);
        if (c.xn)
            return c;
        e = Kf();
        c.xn = e;
        e.src = a;
        e.listener = c;
        a.addEventListener ? a.addEventListener(b, e, k) : a.attachEvent(b in Ef ? Ef[b] : Ef[b] = "on" + b, e);
        Ff++;
        return c
    }
    function Kf() {
        var a = Lf
          , b = sf ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function Mf(a, b, c, e, f) {
        if (u(b)) {
            for (var g = 0; g < b.length; g++)
                Mf(a, b[g], c, e, f);
            return null
        }
        c = Hf(c);
        return yf(a) ? a.MZ(b, c, e, f) : If(a, b, c, !0, e, f)
    }
    function Nf(a, b, c, e, f) {
        if (u(b)) {
            for (var g = 0; g < b.length; g++)
                Nf(a, b[g], c, e, f);
            return null
        }
        c = Hf(c);
        if (yf(a))
            return a.en(b, c, e, f);
        if (!a)
            return !1;
        e = !!e;
        if (a = Jf(a))
            if (b = a.is(b, c, e, f))
                return Of(b);
        return !1
    }
    function Of(a) {
        if (fa(a) || !a || a.Rg)
            return !1;
        var b = a.src;
        if (yf(b))
            return b.ZA(a);
        var c = a.type
          , e = a.xn;
        b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent && b.detachEvent(c in Ef ? Ef[c] : Ef[c] = "on" + c, e);
        Ff--;
        (c = Jf(b)) ? (c.BC(a),
        0 == c.ZU() && (c.src = null,
        b[Df] = null)) : a.rn();
        return !0
    }
    function Pf(a, b, c, e) {
        var f = 1;
        if (a = Jf(a))
            if (b = a.Ha[b])
                for (b = Pa(b),
                a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.Rg && (f &= !1 !== Qf(g, e))
                }
        return Boolean(f)
    }
    function Qf(a, b) {
        var c = a.listener
          , e = a.me || a.src;
        a.gn && Of(a);
        return c.call(e, b)
    }
    function Lf(a, b) {
        if (a.Rg)
            return !0;
        if (!sf) {
            var c = b || m("window.event")
              , e = new vf(c,this)
              , f = !0;
            if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                t: {
                    var g = !1;
                    if (0 == c.keyCode)
                        try {
                            c.keyCode = -1;
                            break t
                        } catch (k) {
                            g = !0
                        }
                    if (g || void 0 == c.returnValue)
                        c.returnValue = !0
                }
                c = [];
                for (g = e.currentTarget; g; g = g.parentNode)
                    c.push(g);
                for (var g = a.type, l = c.length - 1; !e.te && 0 <= l; l--)
                    e.currentTarget = c[l],
                    f &= Pf(c[l], g, !0, e);
                for (l = 0; !e.te && l < c.length; l++)
                    e.currentTarget = c[l],
                    f &= Pf(c[l], g, !1, e)
            }
            return f
        }
        return Qf(a, new vf(b,this))
    }
    function Jf(a) {
        a = a[Df];
        return a instanceof Bf ? a : null
    }
    var Rf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function Hf(a) {
        return ga(a) ? a : a[Rf] || (a[Rf] = function(b) {
            return a.handleEvent(b)
        }
        )
    }
    ;function Sf() {
        this.Uc = new Bf(this);
        this.JC = this
    }
    z(Sf, Mc);
    Sf.prototype[xf] = !0;
    d = Sf.prototype;
    d.br = null;
    d.BD = function() {
        return this.br
    }
    ;
    d.Y9 = function(a) {
        this.br = a
    }
    ;
    d.addEventListener = function(a, b, c, e) {
        Gf(this, a, b, c, e)
    }
    ;
    d.removeEventListener = function(a, b, c, e) {
        Nf(this, a, b, c, e)
    }
    ;
    d.dispatchEvent = function(a) {
        this.vC();
        var b, c = this.BD();
        if (c) {
            b = [];
            for (var e = 1; c; c = c.BD())
                b.push(c),
                ++e
        }
        c = this.JC;
        e = a.type || a;
        if (v(a))
            a = new pf(a,c);
        else if (a instanceof pf)
            a.target = a.target || c;
        else {
            var f = a;
            a = new pf(e,c);
            ub(a, f)
        }
        var f = !0, g;
        if (b)
            for (var k = b.length - 1; !a.te && 0 <= k; k--)
                g = a.currentTarget = b[k],
                f = g.Nn(e, !0, a) && f;
        a.te || (g = a.currentTarget = c,
        f = g.Nn(e, !0, a) && f,
        a.te || (f = g.Nn(e, !1, a) && f));
        if (b)
            for (k = 0; !a.te && k < b.length; k++)
                g = a.currentTarget = b[k],
                f = g.Nn(e, !1, a) && f;
        return f
    }
    ;
    d.I = function() {
        Sf.h.I.call(this);
        this.CL();
        this.br = null
    }
    ;
    d.mi = function(a, b, c, e) {
        this.vC();
        return this.Uc.mt(String(a), b, !1, c, e)
    }
    ;
    d.MZ = function(a, b, c, e) {
        return this.Uc.mt(String(a), b, !0, c, e)
    }
    ;
    d.en = function(a, b, c, e) {
        return this.Uc.remove(String(a), b, c, e)
    }
    ;
    d.ZA = function(a) {
        return this.Uc.BC(a)
    }
    ;
    d.CL = function(a) {
        return this.Uc ? this.Uc.ZW(a) : 0
    }
    ;
    d.Nn = function(a, b, c) {
        a = this.Uc.Ha[String(a)];
        if (!a)
            return !0;
        a = Pa(a);
        for (var e = !0, f = 0; f < a.length; ++f) {
            var g = a[f];
            if (g && !g.Rg && g.capture == b) {
                var k = g.listener
                  , l = g.me || g.src;
                g.gn && this.ZA(g);
                e = !1 !== k.call(l, c) && e
            }
        }
        return e && !1 != c.IB
    }
    ;
    d.iE = function(a, b) {
        return this.Uc.iE(String(a), b)
    }
    ;
    d.IP = function(a, b, c, e) {
        return this.Uc.is(String(a), b, c, e)
    }
    ;
    d.e8 = function(a, b) {
        var c = t(a) ? String(a) : void 0;
        return this.Uc.YW(c, b)
    }
    ;
    d.f$ = function(a) {
        this.JC = a
    }
    ;
    d.vC = function() {}
    ;
    function Tf(a, b) {
        Sf.call(this);
        this.Vg = a || 1;
        this.ug = b || h;
        this.Ss = w(this.kV, this);
        this.Ts = y()
    }
    z(Tf, Sf);
    d = Tf.prototype;
    d.enabled = !1;
    d.dc = null;
    d.ur = function() {
        return this.Vg
    }
    ;
    d.qm = function(a) {
        this.Vg = a;
        this.dc && this.enabled ? (this.Bb(),
        this.start()) : this.dc && this.Bb()
    }
    ;
    d.kV = function() {
        if (this.enabled) {
            var a = y() - this.Ts;
            0 < a && a < 0.8 * this.Vg ? this.dc = this.ug.setTimeout(this.Ss, this.Vg - a) : (this.dc && (this.ug.clearTimeout(this.dc),
            this.dc = null),
            this.ZS(),
            this.enabled && (this.dc = this.ug.setTimeout(this.Ss, this.Vg),
            this.Ts = y()))
        }
    }
    ;
    d.ZS = function() {
        this.dispatchEvent("tick")
    }
    ;
    d.start = function() {
        this.enabled = !0;
        this.dc || (this.dc = this.ug.setTimeout(this.Ss, this.Vg),
        this.Ts = y())
    }
    ;
    d.Bb = function() {
        this.enabled = !1;
        this.dc && (this.ug.clearTimeout(this.dc),
        this.dc = null)
    }
    ;
    d.I = function() {
        Tf.h.I.call(this);
        this.Bb();
        delete this.ug
    }
    ;
    function Uf(a, b, c) {
        if (ga(a))
            c && (a = w(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = w(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : h.setTimeout(a, b || 0)
    }
    ;function Vf(a, b, c) {
        this.jq = a;
        this.kP = b || 0;
        this.w = c;
        this.jP = w(this.cB, this)
    }
    z(Vf, Mc);
    d = Vf.prototype;
    d.le = 0;
    d.I = function() {
        Vf.h.I.call(this);
        this.oi();
        delete this.jq;
        delete this.w
    }
    ;
    d.start = function(a) {
        this.oi();
        this.le = Uf(this.jP, t(a) ? a : this.kP)
    }
    ;
    d.oi = function() {
        this.isActive() && h.clearTimeout(this.le);
        this.le = 0
    }
    ;
    d.IZ = function() {
        this.oi();
        this.cB()
    }
    ;
    d.k6 = function() {
        this.isActive() && this.IZ()
    }
    ;
    Vf.prototype.isActive = function() {
        return 0 != this.le
    }
    ;
    Vf.prototype.cB = function() {
        this.le = 0;
        this.jq && this.jq.call(this.w)
    }
    ;
    function Wf(a, b) {
        this.vw = a;
        this.w = b;
        this.og = new Vf(w(this.lQ, this),0,this)
    }
    z(Wf, Mc);
    d = Wf.prototype;
    d.pj = 0;
    d.$r = 0;
    d.Zr = !1;
    d.I = function() {
        this.og.Xd();
        delete this.vw;
        delete this.w;
        Wf.h.I.call(this)
    }
    ;
    d.start = function(a, b) {
        this.pV();
        this.Zr = !1;
        var c = b || 0;
        this.pj = Math.max(a || 0, 0);
        this.$r = 0 > c ? -1 : y() + c;
        this.og.start(0 > c ? this.pj : Math.min(this.pj, c))
    }
    ;
    d.pV = function() {
        this.og.oi()
    }
    ;
    Wf.prototype.isActive = function() {
        return this.og.isActive()
    }
    ;
    Wf.prototype.M8 = function() {
        return this.Zr
    }
    ;
    Wf.prototype.ce = function() {}
    ;
    Wf.prototype.cP = function() {}
    ;
    Wf.prototype.lQ = function() {
        if (this.vw.call(this.w))
            this.Zr = !0,
            this.ce();
        else if (0 > this.$r)
            this.og.start(this.pj);
        else {
            var a = this.$r - y();
            0 >= a ? this.cP() : this.og.start(Math.min(this.pj, a))
        }
    }
    ;
    function Xf(a, b, c) {
        this.HP = a;
        this.GP = b;
        this.w = c;
        this.FP = w(this.yQ, this)
    }
    z(Xf, Mc);
    d = Xf.prototype;
    d.gh = !1;
    d.Tj = 0;
    d.sf = null;
    d.ty = function() {
        this.sf || this.Tj ? this.gh = !0 : this.gt()
    }
    ;
    d.Kw = function() {
        this.sf && (h.clearTimeout(this.sf),
        this.sf = null,
        this.gh = !1)
    }
    ;
    d.pause = function() {
        this.Tj++
    }
    ;
    d.mP = function() {
        this.Tj--;
        this.Tj || !this.gh || this.sf || (this.gh = !1,
        this.gt())
    }
    ;
    d.I = function() {
        Xf.h.I.call(this);
        this.Kw()
    }
    ;
    d.yQ = function() {
        this.sf = null;
        this.gh && !this.Tj && (this.gh = !1,
        this.gt())
    }
    ;
    d.gt = function() {
        this.sf = Uf(this.FP, this.GP);
        this.HP.call(this.w)
    }
    ;
    function Yf() {}
    d = Yf.prototype;
    d.Wp = function(a, b, c) {
        return new Vf(a,b,c)
    }
    ;
    d.aQ = function(a, b) {
        return new Wf(a,b)
    }
    ;
    d.bH = function(a, b, c) {
        return new Xf(a,b,c)
    }
    ;
    d.lf = function() {
        return new Date
    }
    ;
    d.Ik = function(a, b) {
        return setInterval(a, b)
    }
    ;
    d.Hi = function(a) {
        clearInterval(a)
    }
    ;
    d.setTimeout = function(a, b) {
        return setTimeout(a, b)
    }
    ;
    d.clearTimeout = function(a) {
        clearTimeout(a)
    }
    ;
    function Zf(a, b, c, e) {
        K.call(this);
        this.fb = a;
        this.qj = b;
        this.mj = c;
        this.pO = e;
        this.qs = this.DA = 0;
        this.P_ = "SboVhoG9s0rNafixCSGGKXAT";
        this.O_ = [];
        this.an = null;
        this.ks = 0;
        this.$i = !!this.gj();
        this.ij = !1;
        this.Ar = 0
    }
    z(Zf, K);
    d = Zf.prototype;
    d.b = function(a, b) {
        "state:changed" == a && this.Aw(b);
        return Zf.h.b.call(this, a, b)
    }
    ;
    d.Aw = function(a) {
        a(!!this.gj(), this.$i)
    }
    ;
    d.Kb = function(a) {
        var b = this.gj();
        if (b) {
            var c = this.fr();
            c ? a(c) : this.QB(b, a)
        } else
            a(null)
    }
    ;
    d.WN = function() {
        return this.$i
    }
    ;
    d.ef = function(a) {
        this.Js();
        this.MD();
        this.EV();
        this.aD();
        this.$C(!1, a);
        this.Ar = 0
    }
    ;
    d.Js = function() {
        this.qj.clearTimeout(this.DA);
        this.qj.clearTimeout(this.qs)
    }
    ;
    d.hL = function(a) {
        a = a || 15;
        this.qj.clearTimeout(this.qs);
        this.qs = this.qj.setTimeout(w(function() {
            this.Js()
        }, this), 1E3 * a)
    }
    ;
    d.QB = function(a, b) {
        var c = {
            client_id: this.wn(),
            client_secret: this.$s(),
            refresh_token: a,
            grant_type: "refresh_token"
        };
        this.fb.post("https://accounts.google.com/token", null, c, w(this.Ei, this, b), w(this.Yl, this, b))
    }
    ;
    d.Ei = function(a, b) {
        this.ij && (this.ij = !1,
        this.Ar++);
        var c = b.access_token
          , e = Math.round(0.9 * b.expires_in);
        this.bX(c, e);
        a(c)
    }
    ;
    d.Yl = function(a, b) {
        this.ij = !1;
        b && 400 != b.sB || this.ef(!0);
        a(null)
    }
    ;
    d.yX = function(a, b) {
        this.Js();
        var c = {
            client_id: this.wn(),
            scope: "http://gdata.youtube.com"
        };
        this.fb.post("https://accounts.google.com/device/code", null, c, w(function(c) {
            this.VU(c, a, b)
        }, this))
    }
    ;
    d.SB = function(a) {
        (a && 401 == a.sB || a.jB || this.pO.ye) && (a = this.gj()) && !this.ij && (5 <= this.Ar ? this.ef(!0) : (this.ij = !0,
        this.QB(a, p)))
    }
    ;
    d.VU = function(a, b, c) {
        this.GD(a.device_code, 1E3 * a.interval, c);
        b(a.user_code, 0.9 * Number(a.expires_in))
    }
    ;
    d.GD = function(a, b, c) {
        var e = {
            client_id: this.wn(),
            client_secret: this.$s(),
            code: a,
            grant_type: "http://oauth.net/grant_type/device/1.0"
        }
          , f = w(function(e) {
            this.bV(e, a, b, c)
        }, this);
        this.fb.post("https://accounts.google.com/token", null, e, f)
    }
    ;
    d.bV = function(a, b, c, e) {
        var f = "slow_down" == a.error;
        "authorization_pending" == a.error || f ? (f && (c *= 2),
        this.DA = this.qj.setTimeout(w(function() {
            this.GD(b, c, e)
        }, this), c)) : (this.HD(a.refresh_token),
        this.Ei(e, a))
    }
    ;
    d.HD = function(a) {
        this.mj.Ra("tv-refresh-token", a, 15768E3);
        this.mj.vi()
    }
    ;
    d.gj = function() {
        return this.mj.get("tv-refresh-token", 15768E3)
    }
    ;
    d.EV = function() {
        this.mj.remove("tv-refresh-token");
        this.mj.vi()
    }
    ;
    d.MD = function() {
        var a = this.gj();
        a && this.fb.post("https://accounts.google.com/revoke", null, {
            token: a
        })
    }
    ;
    d.bX = function(a, b) {
        this.an = a;
        this.ks = y() + 1E3 * b;
        this.$C(!0)
    }
    ;
    d.fr = function() {
        if (this.an && this.ks > y())
            return this.an;
        this.aD();
        return ""
    }
    ;
    d.aD = function() {
        this.an = null;
        this.ks = 0
    }
    ;
    d.$C = function(a, b) {
        var c = this.$i;
        this.$i = a;
        this.G("state:changed", a, c, b || !1)
    }
    ;
    d.$s = function() {
        return "SboVhoG9s0rNafixCSGGKXAT"
    }
    ;
    d.wn = function() {
        return "861556708454-d6dlm3lh05idd8npek18k6be8ba3oc68.apps.googleusercontent.com"
    }
    ;
    Zf.inject = ["ytHttp", "timeService", "localStorage", "environmentModel"];
    function P() {
        this.sb = Array;
        this.SD = {}
    }
    d = P.prototype;
    d.Sa = function(a, b) {
        this.SD[a] = w(b, this)
    }
    ;
    d.parse = function(a, b) {
        if (b) {
            var c = null, e;
            for (e in b)
                c = this.FZ(e),
                c.call(this, a, e, b[e])
        }
        return a
    }
    ;
    d.FZ = function(a) {
        return this.SD[a] || this.SY
    }
    ;
    d.SY = function(a, b, c) {
        b = ve(b, "_");
        b in a && (a[b] = this.ja(c));
        return a
    }
    ;
    d.ja = function(a) {
        return a
    }
    ;
    function $f() {
        P.call(this);
        this.Sa("feed", this.LT);
        this.Sa("entry", this.eh);
        this.Sa("openSearch$startIndex", this.NT);
        this.Sa("openSearch$totalResults", this.OT);
        this.Sa("openSearch$itemsPerPage", this.MT)
    }
    z($f, P);
    d = $f.prototype;
    d.LT = function(a, b, c) {
        return this.parse(a, c)
    }
    ;
    d.OT = function(a, b, c) {
        a.Ee = this.ja(c);
        return a
    }
    ;
    d.NT = function(a, b, c) {
        a.o0 = this.ja(c);
        return a
    }
    ;
    d.MT = function(a, b, c) {
        a.n0 = this.ja(c);
        return a
    }
    ;
    d.eh = function(a, b, c) {
        a.a6 = c;
        return a
    }
    ;
    d.Vs = function(a) {
        return u(a) ? a[0] : a
    }
    ;
    d.ja = function(a) {
        return (a = this.Vs(a)) && a.$t ? a.$t : ""
    }
    ;
    function ag(a, b) {
        this.model = a;
        this.cancel = b || p
    }
    ;var bg = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    function cg(a) {
        if (dg) {
            dg = !1;
            var b = h.location;
            if (b) {
                var c = b.href;
                if (c && (c = eg(c)) && c != b.hostname)
                    throw dg = !0,
                    Error();
            }
        }
        return a.match(bg)
    }
    var dg = I;
    function eg(a) {
        return (a = cg(a)[3] || null) && decodeURIComponent(a)
    }
    function fg(a) {
        if (a[1]) {
            var b = a[0]
              , c = b.indexOf("#");
            0 <= c && (a.push(b.substr(c)),
            a[0] = b = b.substr(0, c));
            c = b.indexOf("?");
            0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
        }
        return a.join("")
    }
    function gg(a, b, c) {
        if (u(b))
            for (var e = 0; e < b.length; e++)
                gg(a, String(b[e]), c);
        else
            null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    }
    function hg(a, b) {
        for (var c in b)
            gg(c, b[c], a);
        return a
    }
    ;function ig(a) {
        if ("function" == typeof a.Y)
            a = a.Y();
        else if (ea(a) || v(a))
            a = a.length;
        else {
            var b = 0, c;
            for (c in a)
                b++;
            a = b
        }
        return a
    }
    function jg(a) {
        if ("function" == typeof a.na)
            return a.na();
        if (v(a))
            return a.split("");
        if (ea(a)) {
            for (var b = [], c = a.length, e = 0; e < c; e++)
                b.push(a[e]);
            return b
        }
        return ib(a)
    }
    function kg(a) {
        if ("function" == typeof a.Yb)
            return a.Yb();
        if ("function" != typeof a.na) {
            if (ea(a) || v(a)) {
                var b = [];
                a = a.length;
                for (var c = 0; c < a; c++)
                    b.push(c);
                return b
            }
            return jb(a)
        }
    }
    function lg(a, b, c) {
        if ("function" == typeof a.forEach)
            a.forEach(b, c);
        else if (ea(a) || v(a))
            E(a, b, c);
        else
            for (var e = kg(a), f = jg(a), g = f.length, k = 0; k < g; k++)
                b.call(c, f[k], e && e[k], a)
    }
    function mg(a, b, c) {
        if ("function" == typeof a.every)
            return a.every(b, c);
        if (ea(a) || v(a))
            return La(a, b, c);
        for (var e = kg(a), f = jg(a), g = f.length, k = 0; k < g; k++)
            if (!b.call(c, f[k], e && e[k], a))
                return !1;
        return !0
    }
    ;function ng(a) {
        this.pe = new ud;
        a && this.AX(a)
    }
    function og(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + (a[ia] || (a[ia] = ++ja)) : b.substr(0, 1) + a
    }
    d = ng.prototype;
    d.Y = function() {
        return this.pe.Y()
    }
    ;
    d.Yn = function(a) {
        this.pe.pc(og(a), a)
    }
    ;
    d.AX = function(a) {
        a = jg(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.Yn(a[c])
    }
    ;
    d.PZ = function(a) {
        a = jg(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.remove(a[c])
    }
    ;
    d.remove = function(a) {
        return this.pe.remove(og(a))
    }
    ;
    d.clear = function() {
        this.pe.clear()
    }
    ;
    d.Ga = function() {
        return this.pe.Ga()
    }
    ;
    d.contains = function(a) {
        return this.pe.Xm(og(a))
    }
    ;
    d.U5 = function(a) {
        return mg(a, this.contains, this)
    }
    ;
    d.z8 = function(a) {
        var b = new ng;
        a = jg(a);
        for (var c = 0; c < a.length; c++) {
            var e = a[c];
            this.contains(e) && b.Yn(e)
        }
        return b
    }
    ;
    d.y8 = function(a) {
        var b = this.clone();
        b.PZ(a);
        return b
    }
    ;
    d.na = function() {
        return this.pe.na()
    }
    ;
    d.clone = function() {
        return new ng(this)
    }
    ;
    d.equals = function(a) {
        return this.Y() == ig(a) && this.QU(a)
    }
    ;
    d.QU = function(a) {
        var b = ig(a);
        if (this.Y() > b)
            return !1;
        !(a instanceof ng) && 5 < b && (a = new ng(a));
        return mg(this, function(b) {
            return "function" == typeof a.contains ? a.contains(b) : "function" == typeof a.Rj ? a.Rj(b) : ea(a) || v(a) ? F(a, b) : kb(a, b)
        })
    }
    ;
    d.Gb = function() {
        return this.pe.Gb(!1)
    }
    ;
    function pg(a, b) {
        this.mZ = void 0 != a ? a : ",";
        this.UW = void 0 != b ? b : "YYYY/MM/DD"
    }
    d = pg.prototype;
    d.GY = function(a) {
        return a ? a.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, this.mZ) : "0"
    }
    ;
    d.FY = function(a) {
        var b = this.KX(a)
          , c = this.JX(a);
        a = this.NX(a);
        switch (this.UW) {
        case "DD/MM/YYYY":
            return [c, b, a].join("/");
        case "DD.MM.YYYY":
            return [c, b, a].join(".");
        case "MM/DD/YYYY":
            return [b, c, a].join("/");
        default:
            return [a, b, c].join("/")
        }
    }
    ;
    d.JX = function(a) {
        return ("0" + a.getDate()).slice(-2)
    }
    ;
    d.KX = function(a) {
        return ("0" + (a.getMonth() + 1)).slice(-2)
    }
    ;
    d.NX = function(a) {
        return a.getFullYear().toString()
    }
    ;
    d.HY = function(a) {
        var b = a % 60;
        a /= 60;
        var c = 0;
        return 60 <= a ? (c = a / 60,
        [Math.floor(c), this.Ot(a % 60), this.Ot(b)].join(":")) : [Math.floor(a), this.Ot(b)].join(":")
    }
    ;
    d.Ot = function(a) {
        a = Math.floor(a);
        return 9 < a ? a : "0" + a
    }
    ;
    function qg(a, b) {
        switch (a) {
        case "de":
            return new pg(".","DD.MM.YYYY");
        case "fr":
            return new pg(" ","DD/MM/YYYY");
        case "ru":
            return new pg(" ","DD.MM.YYYY");
        case "nl":
        case "es":
        case "it":
        case "pt":
            return new pg("","DD/MM/YYYY");
        case "en":
            switch (b) {
            case "GB":
                return new pg(",","DD/MM/YYYY")
            }
            return new pg(",","MM/DD/YYYY");
        default:
            return new pg(",","YYYY/MM/DD")
        }
    }
    ;function Ge(a) {
        var b = [];
        a = Be(a);
        for (var c in a)
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
    function Be(a) {
        var b = {}, c;
        for (c in a) {
            var e = a[c];
            "undefined" !== typeof e && null !== e && "" !== e && (b[c] = rg(e || 0))
        }
        return b
    }
    function rg(a) {
        if (!isNaN(a)) {
            var b = parseInt(a, 10);
            if (!isNaN(b))
                return Number(a)
        }
        if ("string" === typeof a && "" === a.trim())
            return a;
        b = String(a).toLowerCase();
        return "true" === b || !0 == a ? !0 : "false" === b || !1 == a ? !1 : a
    }
    function sg(a) {
        a = a.replace(/^\?/, "");
        a = a.split("&");
        for (var b = {}, c, e = 0, f = a.length; e < f; ++e)
            c = a[e].split("="),
            b[c.shift()] = rg(c.join("="));
        return b
    }
    function Fe(a, b) {
        pb(b) || (a += "?" + Ge(b));
        return a
    }
    ;function tg(a, b) {
        this.jW = a;
        this.rW = b;
        this.Cf = null
    }
    tg.$inject = ["applicationPath", "$http"];
    tg.prototype.load = function(a, b) {
        var c = w(function(a) {
            this.xY(a);
            b()
        }, this)
          , e = this.jW + a.replace(/(.*)/, "/locale/messages-$1.json");
        this.rW.get(e).success(c).error(ab(c))
    }
    ;
    tg.prototype.UY = function(a, b, c) {
        var e = a;
        pb(this.Cf) || (b = this.LX(a, b),
        c && a == this.Cf[b] && this.Cf[c] ? e = this.Cf[c] : this.Cf[b] && (e = this.Cf[b]));
        return e
    }
    ;
    tg.prototype.xY = function(a) {
        this.Cf = a || {}
    }
    ;
    tg.prototype.LX = function(a, b) {
        var c = String(a + b).toLowerCase(), e = 0, f, g;
        for (f = 0; f < c.length; ++f)
            g = c.charCodeAt(f),
            e = (e << 5) - e + g,
            e &= -2147483649;
        return String(e)
    }
    ;
    function ug(a, b, c) {
        this.j = a;
        this.az = b;
        this.OM = c;
        this.nz = this.language = this.Ma = this.om = null;
        this.rN()
    }
    ug.$inject = ["$window", "messages", "time"];
    d = ug.prototype;
    d.hM = function(a) {
        !this.Ma || this.xr(this.Ma) ? this.OM.setTimeout(a, 0) : this.az.load(this.Ma, a)
    }
    ;
    d.ca = function(a) {
        if (!a)
            return "";
        if (-1 == a.indexOf("[["))
            return a;
        var b = "", c, e = 0;
        do
            if (c = a.indexOf("[[", e),
            0 < e && (e += 2),
            0 <= c ? (b += a.slice(e, c),
            e = a.indexOf("]]", c)) : (b += a.slice(e),
            e = -1),
            0 <= c && 0 <= e)
                var f = a.slice(c + 2, e)
                  , b = b + this.XZ(f);
        while (0 <= c && 0 <= e);
        return b
    }
    ;
    d.Zf = function(a) {
        return this.om.GY(a)
    }
    ;
    d.fq = function(a) {
        return this.om.HY(a)
    }
    ;
    d.PL = function(a) {
        return this.om.FY(a)
    }
    ;
    d.GS = function() {
        return F(["ja_JP", "zh_CN", "zh_HK", "zh_TW"], this.Ma)
    }
    ;
    d.rN = function() {
        this.XW() || this.VW() || this.WW() || this.dX();
        this.eX()
    }
    ;
    d.eX = function() {
        this.language = this.Ma.split("_")[0];
        this.om = qg(this.language, this.nz)
    }
    ;
    d.yr = function(a) {
        a && 1 < a.indexOf("_") && (this.nz = a.split("_")[1])
    }
    ;
    d.XZ = function(a) {
        var b = a.split("|");
        if (2 > b.length)
            return a;
        var c;
        (a = b[b.length - 1]) && !isNaN(a) && (c = b.pop());
        a = b.pop();
        b = b.join("|");
        return this.az.UY(b, a, c)
    }
    ;
    d.XW = function() {
        var a = sg(this.j.location.search).hl || ""
          , a = a.replace("-", "_");
        this.Ma = this.Bz(a);
        this.yr(a);
        return !!this.Ma
    }
    ;
    d.VW = function() {
        var a = this.j && this.j.environment && this.j.environment.language;
        if (a)
            for (var b = this.wN(a), c = 0; c < b.length; ++c)
                if (a = this.uz(b[c])) {
                    if (this.xr(a))
                        break;
                    this.Ma = a;
                    this.yr(b[c]);
                    return !0
                }
        return !1
    }
    ;
    d.WW = function() {
        var a = (this.j.navigator.language || this.j.navigator.userLanguage || this.j.navigator.systemLanguage || this.j.navigator.browserLanguage || "").replace("-", "_");
        this.Ma = this.Bz(a);
        this.yr(a);
        return !!this.Ma
    }
    ;
    d.wN = function(a) {
        return Ja(a.split(","), function(a) {
            return ta(a.split(";")[0].replace("-", "_"))
        })
    }
    ;
    d.uz = function(a) {
        if (/^[\s\xa0]*$/.test(null == a ? "" : String(a)) || 2 > a.length)
            return null;
        var b = Ma(ee, this.Ut, a);
        if (!b)
            for (var c in fe)
                if (Ma(fe[c], this.Ut, a)) {
                    b = de[c];
                    break
                }
        !b && 1 < a.indexOf("_") && (b = Ma(ee, this.Ut, a.split("_")[0]));
        return b
    }
    ;
    d.Ut = function(a) {
        return 0 == ua(this, a.substr(0, this.length))
    }
    ;
    d.Bz = function(a) {
        a = this.uz(a);
        return !this.xr(a) && a || null
    }
    ;
    d.xr = function(a) {
        return "en_US" == a
    }
    ;
    d.dX = function() {
        this.Ma = "en_US"
    }
    ;
    function vg(a) {
        this.j = a;
        this.Za = {}
    }
    vg.prototype.ga = function(a) {
        switch (a) {
        case 7:
            this.Za = {
                917525: 177,
                917526: 176
            };
            break;
        case 1:
            this.Za = {
                412: 227,
                413: 178,
                415: 250,
                417: 228,
                424: 177,
                425: 176,
                461: 27
            };
            break;
        case 2:
            this.Za = {
                917507: 19,
                917523: 227,
                917524: 228,
                917528: 250,
                917777: 27
            };
            break;
        case 3:
            this.Za = {
                195: 227,
                196: 228,
                425: 176,
                424: 177
            };
            break;
        case 4:
            this.Za = {
                29443: 13,
                29460: 38,
                29461: 40,
                4: 37,
                5: 39,
                27: -1,
                69: 227,
                70: 178,
                71: 250,
                72: 228,
                74: 19,
                88: 27,
                1078: 176,
                1080: 177
            };
            break;
        case 5:
            this.Za = {
                415: 250,
                19: 19,
                413: 178,
                465: 228,
                417: 228,
                412: 227,
                425: 176,
                463: 177,
                424: 177
            };
            break;
        case 6:
            this.Za = {
                238: 227,
                239: 228
            };
            break;
        case 8:
            this.Za = {
                461: 27,
                415: 250,
                413: 178,
                417: 228,
                412: 227,
                48: 83
            };
            break;
        case 9:
            this.Za = {
                113: 227,
                114: 228,
                115: 177,
                116: 176
            }
        }
        this.j.VK_FAST_FWD && (this.Za[this.j.VK_FAST_FWD] = 228);
        this.j.VK_REWIND && (this.Za[this.j.VK_REWIND] = 227);
        this.j.VK_TRACK_PREV && (this.Za[this.j.VK_TRACK_PREV] = 177);
        this.j.VK_TRACK_NEXT && (this.Za[this.j.VK_TRACK_NEXT] = 176);
        this.j.VK_PLAY && (this.Za[this.j.VK_PLAY] = 250);
        this.j.VK_STOP && (this.Za[this.j.VK_STOP] = 178)
    }
    ;
    vg.prototype.XY = function(a) {
        return this.Za[a] || a
    }
    ;
    vg.inject = ["window"];
    function wg(a, b, c, e, f) {
        this.j = a;
        this.jo = b;
        this.Fe = c;
        this.Bu = e;
        this.rh = f;
        this.Dh = this.j && this.j.location || {};
        this.Hf = this.Id = "";
        this.wo = [];
        this.xo = [];
        this.n_ = "TVHTML5";
        this.m_ = "4";
        this.La = this.wb = "";
        this.Ah = new ng;
        this.uo = {};
        this.wF = this.fk = this.ju = this.eu = this.tF = this.du = this.iu = this.sF = this.qh = this.eo = this.qu = this.jk = this.Be = this.vF = this.uF = this.Gf = this.pu = this.ru = this.ou = this.ku = this.sh = this.nu = this.yh = this.mo = this.DF = this.to = this.Eu = this.tu = this.ho = !1;
        this.lo = this.ro = this.Hd = this.qo = this.nk = this.ok = "";
        this.no = null;
        this.qk = 0;
        this.Ld = {};
        this.forcedExperiments = this.hu = this.th = this.Fd = this.su = this.cssPrefix = this.lk = "";
        this.yo = new ng;
        this.forcedOffExperiments = "";
        this.zo = new ng;
        this.initSearchQuery = this.initPlaylistId = this.initChannelId = this.gdataRegionId = "";
        this.initTime = 0;
        this.additionalDataUrlForDial = this.initReversePairingCode = this.initVideoId = "";
        this.isChromelessContext = this.isPlayOnlyContext = this.is720pVideo = this.Ed = this.ye = this.bk = this.ko = this.Dd = this.fc = this.Ja = this.Yt = this.ze = !1;
        this.gu = !0;
        this.p_ = this.po = this.mk = this.isLowPerformingSearch = this.o_ = this.De = this.isLimitedGraphics = this.usePaidScope = this.useTestInnerTube = this.useInnerTube = this.supportsDash = !1;
        this.keyMapId = 0;
        this.reversedSelectionKeys = this.supportsSingleVideoTag = !1;
        this.fu = 300;
        this.q_ = 1500;
        this.enableAppDataOnCast = this.enableVideoVerificationTokens = !1;
        this.supportsAdaptiveBitrate = !0;
        this.supportsPaidContent = this.supportsNetworkRetry = this.supportsNativeOsk = this.supportsHardwareKeyboard = this.au = this.supportsDrm = this.supportsCors = !1;
        this.supportsPairing = !0;
        this.supportsAnimation = this.bo = this.supportsSteelDial = this.supportsSounds = this.supportsSearchSuggestion = this.supportsPointer = !1;
        this.supportsTranslateZ = !0;
        this.useStageGdata = !1;
        this.supportsWebM = !0;
        this.isVideoInfoVisible = this.cu = this.supportsBackgrounds = this.supportsHdDrm = this.supportsLive = !1;
        this.requestVideoQuality = "";
        this.ik = NaN;
        this.loopRows = !1;
        this.launch = "";
        this.isMario = !1;
        this.HF = "debugjs env_cssPrefix env_enableAppDataOnCast env_forcedExperiments env_forcedOffExperiments env_gdataRegionId env_is720pVideo env_isChromelessContext env_isLimitedGraphics env_isLowPerformingSearch env_isVideoInfoVisible env_isMario env_keyMapId env_reversedSelectionKeys env_supportsAdaptiveBitrate env_supportsAnimation env_supportsBackgrounds env_supportsCors env_supportsDash env_supportsDrm env_supportsHardwareKeyboard env_supportsHdDrm env_supportsLive env_supportsNetworkRetry env_supportsPaidContent env_supportsPairing env_supportsPointer env_supportsSearchSuggestion env_supportsSingleVideoTag env_supportsSounds env_supportsSteelDial env_supportsTranslateZ env_useInnerTube env_useStageGdata env_useTestInnerTube env_requestVideoQuality label".split(" ");
        this.IF = {
            additionalDataUrl: "additionalDataUrlForDial",
            c: "initChannelId",
            e: "initErrorCode",
            isChromelessContext: "isChromelessContext",
            launch: "launch",
            list: "initPlaylistId",
            loopRows: "loopRows",
            p: "initPlaylistId",
            pairingCode: "initReversePairingCode",
            q: "initSearchQuery",
            reversePairingCode: "initReversePairingCode",
            send_mdx_vvts: "enableVideoVerificationTokens",
            t: "initTime",
            v: "initVideoId"
        };
        this.KF()
    }
    d = wg.prototype;
    d.KF = function() {
        this.yS();
        this.mS();
        this.wS();
        this.qS();
        this.oS();
        this.xS();
        this.pS();
        this.vS();
        this.AS();
        this.sS();
        this.tS();
        this.rS();
        this.zS();
        this.uS();
        this.BS();
        this.nS()
    }
    ;
    d.yS = function() {
        this.lo = this.j.label;
        var a = this.j.environment || {};
        this.Hd = a.platform || "";
        this.wb = a.brand;
        this.La = a.model;
        this.Id = a.browser;
        this.Hf = a.browser_version;
        this.ok = a.os;
        this.nk = a.os_version;
        this.qo = a.network;
        this.lk = a.country;
        this.ik = a.start_time;
        this.qK(a.experiments);
        this.ze = !!a.debug;
        this.uo = a;
        this.Yt = window.devjs;
        this.gdataRegionId = F(Xd, this.lk) ? this.lk : ""
    }
    ;
    d.mS = function() {
        if ("Steel" == this.Id)
            this.yh = this.mo = !0;
        else if ("Bamboo" == this.Id)
            this.yh = this.tu = !0;
        else if (this.Ne("Explorer"))
            this.Eu = !0;
        else if (this.Ne("Opera"))
            this.fc = !0;
        else if (this.Ne("Firefox"))
            this.to = !0;
        else if (this.Ne("Mozilla") || this.to)
            this.DF = !0;
        else if (this.Ne("Chrome") || this.Ne("GoogleTV"))
            this.yh = !0
    }
    ;
    d.wS = function() {
        this.sh = !(!this.wb && !this.La);
        this.Fd = "YouTube TV";
        switch (this.wb && this.wb.toLowerCase()) {
        case "boxee":
            this.ho = !0;
            this.Fd = "Boxee";
            break;
        case "cht":
            this.nu = !0;
            break;
        case "humax":
        case "freesat":
        case "freesat/1.0":
            this.ou = !0;
            break;
        case "realtek":
            this.uF = !0;
            break;
        case "roku":
            this.vF = !0;
            break;
        case "sony":
            this.jk = !0;
            "PS3" !== this.La && (this.qu = !0);
            this.fc && C(this.Hf, "9.80") && (this.eo = !0);
            break;
        case "samsung":
            this.Be = !0;
            break;
        case "lg":
            this.Gf = !0;
            break;
        case "panasonic":
            this.qh = !0;
            this.De || (this.sF = !0);
            break;
        case "philipstv":
            this.iu = !0;
            break;
        case "pioneer":
            this.du = !0;
            break;
        case "pure":
            this.tF = !0;
            break;
        case "telecomitalia":
            this.ru = !0;
            break;
        case "toshiba":
            this.eu = !0;
            -1 < this.La.indexOf("13A_NAEU_") && (this.fk = !0);
            break;
        case "tivo":
            this.ju = !0;
            break;
        case "vizio":
            this.wF = !0
        }
        switch (this.La && this.La.toLowerCase()) {
        case "ps3":
            this.jk && (this.Dd = !0,
            this.Fd = "Sony PS3",
            "steel" == this.Id.toLowerCase() && "2.00" == this.Hf && (this.ko = !0));
            break;
        case "eureka":
            "Google" === this.wb && (this.Ja = !0,
            this.Fd = "Chromecast",
            this.isChromelessContext = !0);
            break;
        case "ipc1100":
        case "vms1100":
            this.pu = "MMI" === this.wb;
            break;
        case "viera":
            this.Fd = "Viera";
            break;
        case "wiiu":
            this.bk = !0;
            this.Fd = "Wii U";
            if (this.mo)
                this.Ed = !0;
            else if (this.tu || this.j.nsf)
                this.ye = !0;
            break;
        case "mario":
            this.isMario = !0,
            this.Fd = "Mario"
        }
        this.Ne("GoogleTV") && (this.ku = !0);
        this.yh = this.yh || this.Gf || this.Be;
        this.keyMapId = this.aH();
        this.no = this.bk ? "NINTENDO" : null;
        this.cssPrefix = this.$G();
        "tv" === this.Hd.toLowerCase() ? this.th = "tv" : this.sh || (this.th = "desktop")
    }
    ;
    d.qS = function() {}
    ;
    d.oS = function() {
        this.is720pVideo = this.Ja;
        this.gu = !this.qh;
        this.supportsSingleVideoTag = this.fc && !this.ho || this.Ja || this.Be || this.ku || this.ko || this.Ed;
        this.supportsAdaptiveBitrate = !this.qh;
        this.supportsDash = !!this.Rp("dash_enabled");
        this.supportsDrm = this.Ed || this.Ja || this.jk && !this.Dd;
        this.au = this.sh;
        this.supportsHardwareKeyboard = this.qh && !this.fc || this.mo || this.Gf || !this.sh;
        this.supportsHdDrm = this.Ed || this.Ja;
        this.supportsNativeOsk = this.Ed;
        this.supportsNetworkRetry = this.Ja;
        this.supportsPointer = this.Gf;
        this.supportsPairing = !this.ye;
        this.supportsWebM = !this.Be;
        this.supportsSteelDial = !(!this.j || "undefined" == typeof this.j.DialServer);
        var a = Bb();
        if (a && this.Ja && (a = /CrKey [A-Za-z0-9_]+ ([0-9\.]+)/.exec(a)) && 1 < a.length) {
            var b = a[1].split(".")
              , a = 0 < b.length && parseInt(b[0], 10) || 0
              , b = 1 < b.length && parseInt(b[1], 10) || 0;
            if (1 < a || 1 == a && 1 <= b)
                this.bo = !0
        }
    }
    ;
    d.xS = function() {
        this.supportsPaidContent = !this.Dd
    }
    ;
    d.pS = function() {
        this.rh.ga();
        this.reversedSelectionKeys = !this.rh.ws
    }
    ;
    d.vS = function() {
        this.De = this.qh && ("DMP-BD79_89" === this.La || "DMP-MS10" === this.La || this.fe("BD 13S01") || this.fe("BD 13S02") || this.fe("BDT220"));
        this.jk && (this.mk = this.fe("BDP") || this.fe("CTV") || this.fe("BRAVIA") && this.fe("mips"));
        this.po = this.eu && ("BDX3400KU" === this.La || "BDX5400KU" === this.La || this.fk);
        this.nM = this.du && "BDP-160" === this.La;
        this.isLimitedGraphics = this.mk || this.De || this.po || this.nM || this.ho;
        this.supportsAnimation = !(this.isLimitedGraphics || this.eo);
        this.isLowPerformingSearch = this.De;
        this.supportsSearchSuggestion = !this.De && !this.Ed && !F(["zh_CN", "zh_HK", "ja_JP", "ko_KR", "zh_TW"], this.jo.Ma);
        this.supportsBackgrounds = !this.isLimitedGraphics && !this.isPlayOnlyContext && !this.Ja;
        if (this.mk || this.De || this.po)
            this.fu = 1E3;
        this.supportsTranslateZ = this.supportsAnimation && !this.fc
    }
    ;
    d.tS = function() {
        if (this.Ja || this.Jb(Rd))
            this.enableVideoVerificationTokens = !0;
        this.Ja && this.Jb(Nd) && (this.is720pVideo = !1);
        this.useInnerTube = this.useInnerTube || this.useTestInnerTube || this.Jb(Td);
        this.usePaidScope = this.Jb(Ud);
        this.supportsSounds = this.supportsSounds || this.Jb(Od) && this.Dd || this.oP(Od);
        this.cu = this.supportsBackgrounds && !this.ye && !this.iu && !this.ju;
        this.supportsCors = this.supportsCors || !(this.fc && this.fe("11.10")) && this.Jb(Vd)
    }
    ;
    d.AS = function() {
        if (this.Dh && (this.Dh.search || this.Dh.hash)) {
            var a = this.Dh.search || ""
              , a = a + (this.Dh.hash || "")
              , a = a.replace(/\#[^\?]*\??/, "&");
            this.gY(a)
        }
    }
    ;
    d.sS = function() {
        this.forcedExperiments && this.sE(String(this.forcedExperiments), this.yo);
        this.forcedOffExperiments && this.sE(String(this.forcedOffExperiments), this.zo)
    }
    ;
    d.rS = function() {
        this.hu = this.Ah.na().map(function(a) {
            return "exp-" + a
        }).join(" ")
    }
    ;
    d.zS = function() {
        var a = []
          , b = we(this.wb);
        b && a.push(b);
        (b = we(this.La)) && a.push(b);
        this.th && a.push(this.th);
        this.fc && a.push("opera");
        this.Ja && a.push("eureka");
        this.fk && a.push("toshiba-mstar");
        this.reversedSelectionKeys && a.push("reversed-keys");
        this.jo && a.push("lang-" + this.jo.language);
        this.isLimitedGraphics && a.push("limited-graphics");
        this.ze && this.Fe.H() && a.push("debug");
        this.eo && a.push("sony-odm-2012");
        this.supportsPointer && a.push("pointer");
        this.Ed ? a.push("wiiusteel") : this.ye && a.push("wiiubamboo");
        this.su = a.join(" ")
    }
    ;
    d.uS = function() {
        this.Bu.ga(this.keyMapId)
    }
    ;
    d.BS = function() {
        this.$z = "hqdefault";
        if (this.Jb(Ld)) {
            var a = this.j.screen && this.j.screen.width;
            if (a) {
                this.isLimitedGraphics && (a = Math.max(0, a - 560));
                for (var b in ie) {
                    var c = ie[b];
                    if (a >= c[0] && a <= c[1]) {
                        this.$z = b;
                        break
                    }
                }
            }
        }
    }
    ;
    d.nS = function() {
        "desktop" === this.th ? (this.qk = 100,
        this.Ld = {}) : this.De || this.mk ? (this.qk = 0,
        this.Ld = {}) : (this.qk = 0,
        this.Ld = {},
        this.Ld.branding = 10);
        this.Ld.subscription = 200;
        this.Ld.channel_paid_info = 200;
        this.Ld.video_like_value = 200
    }
    ;
    d.gY = function(a) {
        a = sg(a);
        for (var b in a) {
            var c = rg(a[b])
              , e = 0 === b.indexOf("env_")
              , f = e ? b.substr(4) : b;
            this.Be && (f = this.hS(f, c));
            -1 < this.HF.indexOf(b) ? (this.ze = !0,
            this.xo.push(b),
            e ? this[f] = c : "label" == b && (this.ro = c)) : e ? this.wo.push(b) : (e = "isPlayOnlyContext" == f ? f : this.IF[f]) && (this[e] = c)
        }
        0 < this.xo.length && (this.Fe.push("WARNING: REMOVE DEBUG QUERY PARAMETERS "),
        this.Fe.push("[" + this.xo.join(", ") + "] "),
        this.Fe.push("BEFORE PRODUCTION RELEASE."));
        0 < this.wo.length && (this.Fe.push("\n\n"),
        this.Fe.push("ERROR: UNEXPECTED PARAMETER(S): "),
        this.Fe.push(this.wo.join(", ")))
    }
    ;
    d.hS = function(a, b) {
        return "isChromelessContext" == a || "launch" == a && ("search" == b || "social" == b) ? "isPlayOnlyContext" : a
    }
    ;
    d.sE = function(a, b) {
        var c = decodeURIComponent(a).split(","), e;
        for (e in c) {
            var f = parseInt(c[e], 10);
            b.Yn(f)
        }
    }
    ;
    d.aH = function() {
        return this.Gf || this.ou ? 1 : this.Be ? 4 : this.ru ? 6 : this.pu ? 2 : this.qu ? 5 : this.ko || this.Ed ? 9 : this.nu ? 7 : this.fk ? 8 : this.fc ? 3 : 0
    }
    ;
    d.qK = function(a) {
        if (a)
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                c && this.Ah.Yn(c)
            }
    }
    ;
    d.Jb = function(a) {
        return (this.Ah.contains(a.id) || this.yo.contains(a.id)) && !this.zo.contains(a.id)
    }
    ;
    d.oP = function(a) {
        return this.yo.contains(a.id) && !this.zo.contains(a.id)
    }
    ;
    d.Rp = function(a) {
        return a in this.uo && this.uo[a]
    }
    ;
    d.Ne = function(a) {
        var b = this.Id || Bb() || "";
        return C(b, a)
    }
    ;
    d.fe = function(a) {
        var b = Bb() || "";
        return C(b, a)
    }
    ;
    d.$G = function() {
        return this.fc ? "-O" : this.to ? "-moz" : this.Eu ? "-ms" : "-webkit"
    }
    ;
    d.ig = function() {
        return {
            c: "TVHTML5",
            cbr: this.Id,
            cbrand: this.wb,
            cbrver: this.Hf,
            cmodel: this.La,
            cnetwork: this.qo,
            cos: this.ok,
            cosver: this.nk,
            cplatform: this.Hd,
            cver: "4"
        }
    }
    ;
    d.RN = function() {
        var a = {};
        this.wb && (a.cbrand = this.wb);
        this.La && (a.cmodel = this.La);
        this.Hd && (a.cplatform = this.Hd);
        a.e = this.Lr();
        return a
    }
    ;
    d.YS = function() {
        var a = {};
        this.wb && (a.psd_brand = this.wb);
        this.La && (a.psd_model = this.La);
        this.Hd && (a.psd_platform = this.Hd);
        return a
    }
    ;
    d.GA = function(a) {
        a.vM = this.rh.Hs;
        a.uM = this.rh.Gs
    }
    ;
    d.nX = function(a) {
        return this.Bu.XY(a)
    }
    ;
    d.Fl = function() {
        return this.$z
    }
    ;
    d.DW = function(a) {
        return this.Ld[a] || this.qk
    }
    ;
    d.xN = function() {
        var a = {
            Label: this.lo,
            Platform: this.Hd || "unknown",
            Brand: this.wb || "unknown",
            Model: this.La || "unknown",
            Browser: "unknown",
            "User Agent": Bb(),
            OS: "unknown",
            Network: this.qo || "unknown"
        };
        this.ro && (a.Label += " (" + this.ro + ")");
        this.Id && (a.Browser = this.Id,
        this.Hf && (a.Browser += " (" + this.Hf + ")"));
        var b = [];
        this.j.VK_FAST_FWD && b.push(" VK_FAST_FWD=" + this.j.VK_FAST_FWD);
        this.j.VK_REWIND && b.push(" VK_REWIND=" + this.j.VK_REWIND);
        this.j.VK_TRACK_PREV && b.push(" VK_TRACK_PREV=" + this.j.VK_TRACK_PREV);
        this.j.VK_TRACK_NEXT && b.push(" VK_TRACK_NEXT=" + this.j.VK_TRACK_NEXT);
        this.j.VK_PLAY && b.push(" VK_PLAY=" + this.j.VK_PLAY);
        this.j.VK_STOP && b.push(" VK_STOP=" + this.j.VK_STOP);
        0 < b.length && (a.Browser += " with key map" + b.join());
        this.ok && (a.OS = this.ok,
        this.nk && (a.OS += " (" + this.nk + ")"));
        var b = "", c;
        for (c in Wd)
            this.Jb(Wd[c]) && (b += Wd[c].name + ", ");
        a["Active TV Experiments"] = b || "None";
        return a
    }
    ;
    d.Lr = function() {
        return this.Ah && this.Ah.na().join() || ""
    }
    ;
    wg.inject = ["window", "locale", "debugModel", "keyMapModel", "devicePlugin"];
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function xg(a, b) {
        this.Pm = [];
        this.WA = a;
        this.cA = b || null;
        this.nj = this.vB = !1;
        this.Kg = void 0;
        this.ts = this.$O = this.Yr = !1;
        this.Vm = 0;
        this.rf = null;
        this.Qm = 0
    }
    d = xg.prototype;
    d.cancel = function(a) {
        if (this.oj())
            this.Kg instanceof xg && this.Kg.cancel();
        else {
            if (this.rf) {
                var b = this.rf;
                delete this.rf;
                a ? b.cancel(a) : b.JS()
            }
            this.WA ? this.WA.call(this.cA, this) : this.ts = !0;
            this.oj() || this.Zm(new yg(this))
        }
    }
    ;
    d.JS = function() {
        this.Qm--;
        0 >= this.Qm && this.cancel()
    }
    ;
    d.bB = function(a, b) {
        this.Yr = !1;
        this.vt(a, b)
    }
    ;
    d.vt = function(a, b) {
        this.vB = !0;
        this.Kg = b;
        this.nj = !a;
        this.YC()
    }
    ;
    d.aE = function() {
        if (this.oj()) {
            if (!this.ts)
                throw new Cg(this);
            this.ts = !1
        }
    }
    ;
    d.VB = function(a) {
        this.aE();
        this.$D(a);
        this.vt(!0, a)
    }
    ;
    d.Zm = function(a) {
        this.aE();
        this.$D(a);
        this.LA(a);
        this.vt(!1, a)
    }
    ;
    d.LA = function() {}
    ;
    d.$D = function() {}
    ;
    d.ei = function(a, b) {
        return this.wj(a, null, b)
    }
    ;
    d.Fx = function(a, b) {
        return this.wj(null, a, b)
    }
    ;
    d.I5 = function(a, b) {
        return this.wj(a, a, b)
    }
    ;
    d.wj = function(a, b, c) {
        this.Pm.push([a, b, c]);
        this.oj() && this.YC();
        return this
    }
    ;
    d.yW = function(a) {
        this.wj(a.VB, a.Zm, a);
        return this
    }
    ;
    d.M5 = function(a) {
        return this.ei(w(a.cY, a))
    }
    ;
    d.cY = function(a) {
        var b = new xg;
        this.yW(b);
        a && (b.rf = this,
        this.Qm++);
        return b
    }
    ;
    d.oj = function() {
        return this.vB
    }
    ;
    d.LP = function(a) {
        return a instanceof Error
    }
    ;
    d.dB = function() {
        return Ka(this.Pm, function(a) {
            return ga(a[1])
        })
    }
    ;
    d.YC = function() {
        this.Vm && this.oj() && this.dB() && (h.clearTimeout(this.Vm),
        delete this.Vm);
        this.rf && (this.rf.Qm--,
        delete this.rf);
        for (var a = this.Kg, b = !1, c = !1; this.Pm.length && !this.Yr; ) {
            var e = this.Pm.shift()
              , f = e[0]
              , g = e[1]
              , e = e[2];
            if (f = this.nj ? g : f)
                try {
                    var k = f.call(e || this.cA, a);
                    t(k) && (this.nj = this.nj && (k == a || this.LP(k)),
                    this.Kg = a = k);
                    a instanceof xg && (this.Yr = c = !0)
                } catch (l) {
                    a = l,
                    this.nj = !0,
                    this.LA(a),
                    this.dB() || (b = !0)
                }
        }
        this.Kg = a;
        c && (a.wj(w(this.bB, this, !0), w(this.bB, this, !1)),
        a.$O = !0);
        b && (this.Vm = h.setTimeout($a(a), 0))
    }
    ;
    function Cg(a) {
        oa.call(this);
        this.O7 = a
    }
    z(Cg, oa);
    Cg.prototype.message = "Deferred has already fired";
    Cg.prototype.name = "AlreadyCalledError";
    function yg(a) {
        oa.call(this);
        this.P7 = a
    }
    z(yg, oa);
    yg.prototype.message = "Deferred was canceled";
    yg.prototype.name = "CanceledError";
    function Dg(a, b) {
        var c = b || {}
          , e = c.document || document
          , f = document.createElement("SCRIPT")
          , g = {
            oC: f,
            U: void 0
        }
          , k = new xg(Eg,g)
          , l = null
          , n = null != c.timeout ? c.timeout : 5E3;
        0 < n && (l = window.setTimeout(function() {
            Fg(f, !0);
            k.Zm(new Gg(1,"Timeout reached for loading script " + a))
        }, n),
        g.U = l);
        f.onload = f.onreadystatechange = function() {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (Fg(f, c.PP || !1, l),
            k.VB(null))
        }
        ;
        f.onerror = function() {
            Fg(f, !0, l);
            k.Zm(new Gg(0,"Error while loading script " + a))
        }
        ;
        ec(f, {
            type: "text/javascript",
            charset: "UTF-8",
            src: a
        });
        Hg(e).appendChild(f);
        return k
    }
    function Hg(a) {
        var b = a.getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }
    function Eg() {
        if (this && this.oC) {
            var a = this.oC;
            a && "SCRIPT" == a.tagName && Fg(a, !0, this.U)
        }
    }
    function Fg(a, b, c) {
        null != c && h.clearTimeout(c);
        a.onload = p;
        a.onerror = p;
        a.onreadystatechange = p;
        b && window.setTimeout(function() {
            pc(a)
        }, 0)
    }
    function Gg(a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        oa.call(this, c);
        this.code = a
    }
    z(Gg, oa);
    function Ig(a, b, c) {
        this.j = a;
        this.M_ = c;
        this.qf = {};
        this.tz = b.RN();
        this.vz = !1;
        this.Am = [];
        this.j.jstiming && (this.qf[this.j.jstiming.load.name] = this.j.jstiming.load,
        this.j.jstiming.load = null)
    }
    d = Ig.prototype;
    d.p$ = function(a) {
        var b = new this.j.jstiming.Timer;
        b.name = a;
        return this.qf[a] = b
    }
    ;
    d.JT = function(a) {
        this.qf[a] = null
    }
    ;
    d.jp = function(a) {
        return this.qf[a] || null
    }
    ;
    d.dt = function(a, b) {
        var c = this.jp(a);
        return c && (b ? w(c.tick, c, b) : w(c.tick, c)) || p
    }
    ;
    d.Je = function(a, b) {
        var c = this.qf[a];
        c && c.tick(b)
    }
    ;
    d.report = function(a, b) {
        var c = this.qf[a];
        if (c)
            if (this.ON()) {
                var e = b && x(b, this.tz) || this.tz;
                this.j.jstiming.report(c, e);
                this.qf[a] = null
            } else
                this.Am.push(w(this.report, this, a, b)),
                this.vz || (this.vz = !0,
                this.PN())
    }
    ;
    d.PN = function() {
        Dg(Q.Vq + "/csi-tail.js").ei(w(this.cX, this))
    }
    ;
    d.cX = function() {
        for (var a = this.Am.length - 1; 0 <= a; --a) {
            var b = this.Am[a];
            ga(b) && b()
        }
        this.Am.length = 0
    }
    ;
    d.ON = function() {
        return !!m("jstiming.report", this.j)
    }
    ;
    Ig.inject = ["window", "environmentModel", "timeService"];
    function Jg(a, b, c, e, f, g, k, l, n, q) {
        this.id = a;
        this.path = b || "";
        this.fb = e;
        this.rj = c;
        this.xd = f;
        this.FA = g;
        this.bi = k;
        this.Wi = l;
        this.Hg = n || {};
        this.tA = q || null;
        this.Sm = this.Um = this.Tm = this.Rm = p
    }
    d = Jg.prototype;
    d.Vc = function() {
        return ""
    }
    ;
    d.Wl = function(a) {
        var b = this.Vc() + this.path;
        return fg(hg([b], a || {}))
    }
    ;
    d.Aj = function() {
        return "GET"
    }
    ;
    d.Mc = function(a, b, c, e) {
        this.Rm = w(this.rj.JT, this.rj, a);
        this.Tm = b ? this.rj.dt(a, b) : p;
        this.Um = c ? this.rj.dt(a, c) : p;
        this.Sm = e ? this.rj.dt(a, e) : p
    }
    ;
    d.Jr = function() {
        this.Tm();
        this.Tm = p
    }
    ;
    d.Kr = function() {
        this.Um();
        this.Um = p
    }
    ;
    d.Tq = function() {
        this.Sm();
        this.Rm = this.Sm = p
    }
    ;
    d.Ay = function() {
        this.Rm();
        this.Rm = this.Sm = this.Um = this.Tm = p
    }
    ;
    d.load = function(a, b) {
        return this.bt(a, b)
    }
    ;
    d.bt = function(a, b, c, e, f) {
        var g = {};
        this.VC(this.Hg);
        this.$T(this.Hg);
        x(g, this.Hg);
        a && x(g, a);
        if (this.Wi && (a = this.ZT(g[this.Wi])))
            return b && b(a),
            new ag(a);
        e = e ? e : this.OB();
        return new ag(e,this.Ug(e, g, b, c, f))
    }
    ;
    d.OB = function() {
        return new this.bi.sb
    }
    ;
    d.Ug = function(a, b, c, e, f) {
        c = c || p;
        var g = w(function(e) {
            this.Kr();
            this.bi.parse(a, e);
            this.KP(this.Wi && b[this.Wi], a);
            this.Tq();
            c(a)
        }, this)
          , k = w(function() {
            this.Ay();
            c(a)
        }, this);
        this.Jr();
        if ("GET" === this.Aj())
            return this.fb.get(this.Vc() + this.path, b, g, e || k);
        if ("JSONP" === this.Aj())
            return this.fb.jsonp(this.Vc() + this.path, b, g, e || k);
        if ("POST" == this.Aj()) {
            if (this.xd.useInnerTube) {
                var l = O(b);
                return this.fb.post(this.Vc() + this.path, {}, l, g, e || k, f)
            }
            return this.fb.post(this.Vc() + this.path, {}, b, g, e || k, f)
        }
        return p
    }
    ;
    d.lS = function(a, b, c) {
        c[a] && (c[b] = c[a],
        delete c[a]);
        return c
    }
    ;
    d.VC = function(a) {
        a && "" === a.hl && (a.hl = this.tA.Ma,
        a.override_hl = 1)
    }
    ;
    d.$T = function(a) {
        a && "" === a.regionId && this.xd.gdataRegionId && (a.regionId = this.xd.gdataRegionId)
    }
    ;
    d.Vn = function() {
        return this.bi.sb.CACHE_TYPE
    }
    ;
    d.ZT = function(a) {
        return a && this.Vn() ? this.FA.get(this.Vn(), a) : null
    }
    ;
    d.KP = function(a, b) {
        a && this.Vn() && this.FA.as(this.Vn(), a, b)
    }
    ;
    function Kg(a, b, c, e, f, g, k, l, n, q) {
        var s = {
            alt: "json",
            key: "AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            v: "2.1"
        };
        q && x(s, q);
        this.zD = g;
        Jg.call(this, a, b, c, e, f, k, l, n, s)
    }
    z(Kg, Jg);
    d = Kg.prototype;
    d.Vc = function() {
        return this.xd.useStageGdata ? "https://yt2009.truehosting.net/feeds/api" : "https://yt2009.truehosting.net/feeds/api"
    }
    ;
    d.Aj = function() {
        return this.xd.supportsCors ? "GET" : "JSONP"
    }
    ;
    d.load = function(a, b, c) {
        var e;
        a && (e = a.query,
        delete a.query);
        return this.ab(e, b, a, c)
    }
    ;
    d.ab = function(a, b, c, e, f) {
        c = c || {};
        c[this.Wi] = a;
        this.MV(c, this.Hg);
        b = this.bt(c, b, e, f);
        f || (b.model.serviceQuery = a);
        return b
    }
    ;
    d.Ug = function(a, b, c, e) {
        var f = !1, g;
        this.zD.Kb(w(function(k) {
            f || (k && (b.access_token = k),
            k = w(function(a) {
                e && e(a);
                this.zD.SB(a)
            }, this),
            g = Jg.prototype.Ug.call(this, a, b, c, k))
        }, this));
        return function() {
            g ? g() : f = !0
        }
    }
    ;
    d.MV = function(a, b) {
        b && b.fields && this.pZ(b.fields) && (a.fields = this.oZ(b.fields))
    }
    ;
    d.pZ = function(a) {
        return !!Ma(Lg, function(b) {
            return C(a, b[0])
        })
    }
    ;
    d.oZ = function(a) {
        E(Lg, function(b) {
            a = a.replace(b[0], this.zZ(b[1]))
        }, this);
        return a
    }
    ;
    d.zZ = function(a) {
        a = ib(fb(a, function(a) {
            return ga(a) ? a.call(this) : a
        }, this));
        return Ia(a, Boolean).join(" and ")
    }
    ;
    var Lg = [["$default-filter", {
        wZ: "not(app:control/yt:state)",
        vZ: function() {
            var a = "";
            this.xd.supportsPaidContent ? this.xd.supportsDrm || (a = 'not(media:group/media:category/@label = "Movies" and yt:paidContent/@type = "paygate")') : a = "not(yt:paidContent/@type)";
            return a
        },
        W0: "media:group/yt:duration/@seconds>0"
    }], ["$inline-filter", {
        wZ: "not(link/entry/app:control/yt:state)",
        V0: "not(link/entry/app:control/app:draft)",
        vZ: function() {
            return this.xd.supportsPaidContent ? "" : "not(link/entry/yt:paidContent/@type)"
        }
    }]];
    function R(a, b, c) {
        te.call(this);
        this.id = b.attr("id") || "";
        this.name = this.name || this.id || "directive";
        this.scope = a;
        this.element = b;
        this.Qc = c;
        this.isActive = !1;
        this.Jh = this.Jh || c.ytFocusable || !1;
        this.children = {};
        this.X = [];
        this.scope[this.name] = this;
        this.scope.focusable = this;
        this.scope.controller = this;
        this.Jh && this.element.attr("tabindex", "-1");
        this.o = this.element[0];
        this.Qc.activateWhen && this.scope.$watch(this.Qc.activateWhen, w(this.PM, this));
        this.Qc.data && this.scope.$watch(this.Qc.data, w(this.xb, this));
        this.scope.$on("$destroy", w(this.bq, this));
        this.uc()
    }
    z(R, te);
    d = R.prototype;
    d.ga = function() {
        this.l("added", this);
        this.b("added", w(this.sa, this))
    }
    ;
    d.uc = function() {
        this.td("elementIdEquals", this.mX)
    }
    ;
    d.td = function(a, b) {
        this[a] = w(b, this)
    }
    ;
    d.bq = function() {
        this.data = null;
        this.scope[this.name] = null;
        this.scope.focusable = null;
        this.scope.controller = null;
        this.scope.q0 = null;
        this.scope.p0 = {};
        this.Md();
        this.eg()
    }
    ;
    d.xb = function(a) {
        this.data = a
    }
    ;
    d.setData = function(a) {
        this.data = a
    }
    ;
    d.Iu = function(a, b) {
        var c = this.scope.$on(a, b);
        this.Lc.push({
            Xa: this.scope,
            event: a,
            al: c
        });
        return c
    }
    ;
    d.Nc = function() {
        return this.$j()
    }
    ;
    d.$j = function() {
        return !0
    }
    ;
    d.pa = function() {}
    ;
    d.B = function() {
        var a = this.isActive;
        this.isActive = !0;
        this.element.addClass("active");
        !a && this.Jh && this.focus()
    }
    ;
    d.J = function() {
        this.isActive = !1;
        this.activeChildName = null;
        this.element.removeClass("active");
        this.md(this.Bc)
    }
    ;
    d.md = function(a) {
        a && (a.J(),
        this.Bc = null)
    }
    ;
    d.P = function(a) {
        a && (this.Bc ? this.Bc !== a ? (this.Bc.J(),
        a.B(),
        this.Bc = a) : this.Bc === a && a.focus() : (a.B(),
        this.Bc = a))
    }
    ;
    d.PM = function(a) {
        a ? this.B() : this.isActive && this.J()
    }
    ;
    d.focus = function() {
        this.element[0].focus();
        this.Bc && this.Bc.focus()
    }
    ;
    d.sa = function(a) {
        var b = a.detail
          , c = b.element.attr("id");
        c && (this.children[c] = b);
        M(a);
        this.X.push(b)
    }
    ;
    d.eg = function() {
        for (var a = this.X.length, b = 0; b < a; ++b) {
            var c = this.X[b];
            c instanceof N ? (Nc(c),
            pc(c.o)) : this.X[b].element.remove()
        }
        this.X.length = 0;
        this.children = {}
    }
    ;
    d.Y5 = function(a) {
        var b = a.dE;
        a.dE = null;
        this.mc(a);
        a.dE = b
    }
    ;
    d.X5 = function(a) {
        a in this.children && this.mc(this.children[a].scope)
    }
    ;
    d.mc = function(a) {
        a || (a = this.scope.$root);
        a.$$phase || a.$digest()
    }
    ;
    d.mX = function(a) {
        return this.id === a
    }
    ;
    d.k = function(a) {
        return this.element[0].querySelector(a)
    }
    ;
    d.x6 = function(a) {
        return this.element[0].querySelectorAll(a)
    }
    ;
    d.L = function(a, b) {
        a.textContent = b || ""
    }
    ;
    d.Ve = function(a, b) {
        a.innerHTML = b || ""
    }
    ;
    d.M = function(a, b) {
        angular.element(a).css("display", b ? "" : "none")
    }
    ;
    d.Jc = function(a) {
        return this.X[a]
    }
    ;
    d.cn = function(a) {
        return this.children[a]
    }
    ;
    d.rv = function(a, b, c) {
        a = Gd(this.o.getElementsByClassName("$" + a)[0], c, b);
        return this.BB(a)
    }
    ;
    d.bz = function(a, b, c, e) {
        a = Mg(a, c, e);
        b.innerHTML = "";
        b.appendChild(a.o);
        return this.BB(a)
    }
    ;
    d.BB = function(a) {
        if (a) {
            this.la = {
                $destroy: p
            };
            this.X.push(a);
            var b = a.o.id;
            b && (this.children[b] = a)
        }
        return a
    }
    ;
    R.$inject = ["$scope", "$element", "$attrs"];
    function S(a, b, c) {
        this.name = this.name || "focusable";
        this.Jh = !0;
        R.call(this, a, b, c)
    }
    z(S, R);
    S.$inject = ["$scope", "$element", "$attrs"];
    function Ng(a, b, c, e) {
        N.call(this);
        this.xx = a;
        this.EQ = b;
        this.ex = e;
        this.activationCode = c.ca("[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]");
        this.cl = p;
        this.dx = 0
    }
    z(Ng, N);
    d = Ng.prototype;
    d.ready = function() {
        this.nD()
    }
    ;
    d.I = function() {
        this.xx.hL();
        this.ex.clearTimeout(this.dx);
        this.cl();
        this.cl = p;
        Ng.h.I.call(this)
    }
    ;
    d.nD = function() {
        this.xx.yX(w(this.xX, this), w(this.CX, this))
    }
    ;
    d.xX = function(a, b) {
        this.activationCode = a;
        this.Qa();
        this.dx = this.ex.setTimeout(w(this.nD, this), 1E3 * b)
    }
    ;
    d.CX = function() {
        this.cl = this.EQ.ab("default", w(this.xD, this), null, w(this.xD, this)).cancel
    }
    ;
    d.xD = function() {
        this.cl = p;
        this.l("dialog:complete")
    }
    ;
    Ng.inject = ["authService", "userProfileService", "locale", "timeService"];
    function Og(a) {
        K.call(this);
        this.length = 0;
        this.ia = [];
        a && this.push(a)
    }
    z(Og, K);
    d = Og.prototype;
    d.push = function(a) {
        this.fF("push", a)
    }
    ;
    d.unshift = function(a) {
        this.fF("unshift", a)
    }
    ;
    d.ba = function() {
        return this.ia
    }
    ;
    d.$ = function(a) {
        return this.ia[a]
    }
    ;
    d.$f = function(a) {
        this.ia = a.slice();
        this.length = a.length;
        this.Sj(this.ia)
    }
    ;
    d.A$ = function(a, b) {
        this.ia[a] = b;
        this.length = this.ia.length;
        this.Sj(b)
    }
    ;
    d.H = function() {
        return this.length
    }
    ;
    d.slice = function(a, b) {
        var c;
        switch (arguments.length) {
        case 0:
            c = this.ia.slice();
            break;
        case 1:
            c = this.ia.slice(a);
            break;
        case 2:
            c = this.ia.slice(a, b)
        }
        return new Og(c)
    }
    ;
    d.splice = function(a, b, c) {
        var e;
        switch (arguments.length) {
        case 0:
            e = this.ia.splice();
            break;
        case 1:
            e = this.ia.splice(a);
            break;
        case 2:
            e = this.ia.splice(a, b);
            break;
        default:
            e = this.ia.splice.apply(this.ia, arguments)
        }
        this.length = this.ia.length;
        this.Sj(this.ia);
        return new Og(e)
    }
    ;
    d.clear = function() {
        this.length = this.ia.length = 0;
        this.Sj()
    }
    ;
    d.pP = function(a) {
        function b(a, b) {
            return a - b
        }
        this.ia.sort(a || b);
        return this
    }
    ;
    d.Sj = function(a) {
        this.G("items:changed", a)
    }
    ;
    d.fF = function(a, b) {
        var c = u(b) ? b : [b]
          , e = c.length;
        0 < e && (this.ia[a].apply(this.ia, c),
        this.length += e,
        this.Sj(b))
    }
    ;
    function Pg(a) {
        a && (this.id = a.id || a.name,
        this.name = a.name,
        this.Yd = a.app,
        this.type = a.type || "REMOTE_CONTROL",
        this.username = a.user || "")
    }
    d = Pg.prototype;
    d.id = "";
    d.name = "";
    d.Yd = "";
    d.type = "REMOTE_CONTROL";
    d.username = "";
    d.df = !1;
    d.MA = function() {
        return {
            id: this.id,
            name: this.name,
            app: this.Yd,
            type: this.type,
            user: this.username
        }
    }
    ;
    d.equals = function(a) {
        return a ? this.id == a.id : !1
    }
    ;
    function Qg(a) {
        var b = a.name || "";
        a.username && (b = b + " (" + a.username + ")");
        this.displayString = wa(b);
        var b = a.df ? "connected" : "disconnected"
          , c = "mdx-unknown ";
        "LOUNGE_SCREEN" == a.type ? c = "mdx-screen " : a.Yd && (c = 0 < a.Yd.search(/tablet|ipad/g) ? "mdx-tablet " : "mdx-mobile ");
        this.deviceClass = c + b
    }
    ;function Rg(a, b) {
        var c;
        a instanceof Rg ? (this.ne = t(b) ? b : a.mO(),
        this.gm(a.ir()),
        this.hm(a.jr()),
        this.Fi(a.Zd()),
        this.Gi(a.zg()),
        this.fm(a.Ti()),
        this.Vi(a.nO().clone()),
        this.em(a.hr())) : a && (c = cg(String(a))) ? (this.ne = !!b,
        this.gm(c[1] || "", !0),
        this.hm(c[2] || "", !0),
        this.Fi(c[3] || "", !0),
        this.Gi(c[4]),
        this.fm(c[5] || "", !0),
        this.Vi(c[6] || "", !0),
        this.em(c[7] || "", !0)) : (this.ne = !!b,
        this.tb = new Sg(null,null,this.ne))
    }
    d = Rg.prototype;
    d.kh = "";
    d.Ft = "";
    d.Bt = "";
    d.Sn = null;
    d.Et = "";
    d.Ct = "";
    d.Tt = !1;
    d.ne = !1;
    d.toString = function() {
        var a = []
          , b = this.ir();
        b && a.push(Tg(b, Ug), ":");
        if (b = this.Zd()) {
            a.push("//");
            var c = this.jr();
            c && a.push(Tg(c, Ug), "@");
            a.push(encodeURIComponent(String(b)));
            b = this.zg();
            null != b && a.push(":", String(b))
        }
        if (b = this.Ti())
            this.fj() && "/" != b.charAt(0) && a.push("/"),
            a.push(Tg(b, "/" == b.charAt(0) ? Vg : Wg));
        (b = this.gC()) && a.push("?", b);
        (b = this.hr()) && a.push("#", Tg(b, Xg));
        return a.join("")
    }
    ;
    d.resolve = function(a) {
        var b = this.clone()
          , c = a.tO();
        c ? b.gm(a.ir()) : c = a.uO();
        c ? b.hm(a.jr()) : c = a.fj();
        c ? b.Fi(a.Zd()) : c = a.Pr();
        var e = a.Ti();
        if (c)
            b.Gi(a.zg());
        else if (c = a.fA()) {
            if ("/" != e.charAt(0))
                if (this.fj() && !this.fA())
                    e = "/" + e;
                else {
                    var f = b.Ti().lastIndexOf("/");
                    -1 != f && (e = b.Ti().substr(0, f + 1) + e)
                }
            f = e;
            if (".." == f || "." == f)
                e = "";
            else if (C(f, "./") || C(f, "/.")) {
                for (var e = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], k = 0; k < f.length; ) {
                    var l = f[k++];
                    "." == l ? e && k == f.length && g.push("") : ".." == l ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(),
                    e && k == f.length && g.push("")) : (g.push(l),
                    e = !0)
                }
                e = g.join("/")
            } else
                e = f
        }
        c ? b.fm(e) : c = a.sO();
        c ? b.Vi(a.qO()) : c = a.rO();
        c && b.em(a.hr());
        return b
    }
    ;
    d.clone = function() {
        return new Rg(this)
    }
    ;
    d.ir = function() {
        return this.kh
    }
    ;
    d.gm = function(a, b) {
        this.Cc();
        if (this.kh = b ? a ? decodeURIComponent(a) : "" : a)
            this.kh = this.kh.replace(/:$/, "");
        return this
    }
    ;
    d.tO = function() {
        return !!this.kh
    }
    ;
    d.jr = function() {
        return this.Ft
    }
    ;
    d.hm = function(a, b) {
        this.Cc();
        this.Ft = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    d.uO = function() {
        return !!this.Ft
    }
    ;
    d.Zd = function() {
        return this.Bt
    }
    ;
    d.Fi = function(a, b) {
        this.Cc();
        this.Bt = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    d.fj = function() {
        return !!this.Bt
    }
    ;
    d.zg = function() {
        return this.Sn
    }
    ;
    d.Gi = function(a) {
        this.Cc();
        if (a) {
            a = Number(a);
            if (isNaN(a) || 0 > a)
                throw Error("Bad port number " + a);
            this.Sn = a
        } else
            this.Sn = null;
        return this
    }
    ;
    d.Pr = function() {
        return null != this.Sn
    }
    ;
    d.Ti = function() {
        return this.Et
    }
    ;
    d.fm = function(a, b) {
        this.Cc();
        this.Et = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    d.fA = function() {
        return !!this.Et
    }
    ;
    d.sO = function() {
        return "" !== this.tb.toString()
    }
    ;
    d.Vi = function(a, b) {
        this.Cc();
        a instanceof Sg ? (this.tb = a,
        this.tb.xC(this.ne)) : (b || (a = Tg(a, Yg)),
        this.tb = new Sg(a,null,this.ne));
        return this
    }
    ;
    d.N7 = function(a, b) {
        return this.Vi(a, b)
    }
    ;
    d.gC = function() {
        return this.tb.toString()
    }
    ;
    d.qO = function() {
        return this.tb.oW()
    }
    ;
    d.nO = function() {
        return this.tb
    }
    ;
    d.s7 = function() {
        return this.gC()
    }
    ;
    d.qa = function(a, b) {
        this.Cc();
        this.tb.PU(a, b);
        return this
    }
    ;
    d.Tf = function(a, b) {
        this.Cc();
        u(b) || (b = [String(b)]);
        this.tb.eB(a, b);
        return this
    }
    ;
    d.m7 = function(a) {
        return this.tb.na(a)
    }
    ;
    d.l7 = function(a) {
        return this.tb.get(a)
    }
    ;
    d.hr = function() {
        return this.Ct
    }
    ;
    d.em = function(a, b) {
        this.Cc();
        this.Ct = b ? a ? decodeURIComponent(a) : "" : a;
        return this
    }
    ;
    d.rO = function() {
        return !!this.Ct
    }
    ;
    d.C8 = function(a) {
        return (!this.fj() && !a.fj() || this.Zd() == a.Zd()) && (!this.Pr() && !a.Pr() || this.zg() == a.zg())
    }
    ;
    d.xg = function() {
        this.Cc();
        this.qa("zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36));
        return this
    }
    ;
    d.D9 = function(a) {
        this.Cc();
        this.tb.remove(a);
        return this
    }
    ;
    d.a$ = function(a) {
        this.Tt = a;
        return this
    }
    ;
    d.V8 = function() {
        return this.Tt
    }
    ;
    d.Cc = function() {
        if (this.Tt)
            throw Error("Tried to modify a read-only Uri");
    }
    ;
    d.M7 = function(a) {
        this.ne = a;
        this.tb && this.tb.xC(a);
        return this
    }
    ;
    d.mO = function() {
        return this.ne
    }
    ;
    function Zg(a, b, c, e, f, g, k, l) {
        l = new Rg(null,l);
        a && l.gm(a);
        b && l.hm(b);
        c && l.Fi(c);
        e && l.Gi(e);
        f && l.fm(f);
        g && l.Vi(g);
        k && l.em(k);
        return l
    }
    function Tg(a, b) {
        return v(a) ? encodeURI(a).replace(b, $g) : null
    }
    function $g(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var Ug = /[#\/\?@]/g
      , Wg = /[\#\?:]/g
      , Vg = /[\#\?]/g
      , Yg = /[\#\?@]/g
      , Xg = /#/g;
    function Sg(a, b, c) {
        this.qe = a || null;
        this.Is = !!c
    }
    d = Sg.prototype;
    d.Rc = function() {
        if (!this.ha && (this.ha = new ud,
        this.ub = 0,
        this.qe))
            for (var a = this.qe.split("&"), b = 0; b < a.length; b++) {
                var c = a[b].indexOf("=")
                  , e = null
                  , f = null;
                0 <= c ? (e = a[b].substring(0, c),
                f = a[b].substring(c + 1)) : e = a[b];
                e = va(e);
                e = this.pf(e);
                this.JB(e, f ? va(f) : "")
            }
    }
    ;
    d.ha = null;
    d.ub = null;
    d.Y = function() {
        this.Rc();
        return this.ub
    }
    ;
    d.JB = function(a, b) {
        this.Rc();
        this.Mg();
        a = this.pf(a);
        var c = this.ha.get(a);
        c || this.ha.pc(a, c = []);
        c.push(b);
        this.ub++;
        return this
    }
    ;
    d.remove = function(a) {
        this.Rc();
        a = this.pf(a);
        return this.ha.Xm(a) ? (this.Mg(),
        this.ub -= this.ha.get(a).length,
        this.ha.remove(a)) : !1
    }
    ;
    d.clear = function() {
        this.Mg();
        this.ha = null;
        this.ub = 0
    }
    ;
    d.Ga = function() {
        this.Rc();
        return 0 == this.ub
    }
    ;
    d.jA = function(a) {
        this.Rc();
        a = this.pf(a);
        return this.ha.Xm(a)
    }
    ;
    d.Rj = function(a) {
        var b = this.na();
        return F(b, a)
    }
    ;
    d.Yb = function() {
        this.Rc();
        for (var a = this.ha.na(), b = this.ha.Yb(), c = [], e = 0; e < b.length; e++)
            for (var f = a[e], g = 0; g < f.length; g++)
                c.push(b[e]);
        return c
    }
    ;
    d.na = function(a) {
        this.Rc();
        var b = [];
        if (v(a))
            this.jA(a) && (b = Oa(b, this.ha.get(this.pf(a))));
        else {
            a = this.ha.na();
            for (var c = 0; c < a.length; c++)
                b = Oa(b, a[c])
        }
        return b
    }
    ;
    d.PU = function(a, b) {
        this.Rc();
        this.Mg();
        a = this.pf(a);
        this.jA(a) && (this.ub -= this.ha.get(a).length);
        this.ha.pc(a, [b]);
        this.ub++;
        return this
    }
    ;
    d.get = function(a, b) {
        var c = a ? this.na(a) : [];
        return 0 < c.length ? String(c[0]) : b
    }
    ;
    d.eB = function(a, b) {
        this.remove(a);
        0 < b.length && (this.Mg(),
        this.ha.pc(this.pf(a), Pa(b)),
        this.ub += b.length)
    }
    ;
    d.toString = function() {
        if (this.qe)
            return this.qe;
        if (!this.ha)
            return "";
        for (var a = [], b = this.ha.Yb(), c = 0; c < b.length; c++)
            for (var e = b[c], f = encodeURIComponent(String(e)), e = this.na(e), g = 0; g < e.length; g++) {
                var k = f;
                "" !== e[g] && (k += "=" + encodeURIComponent(String(e[g])));
                a.push(k)
            }
        return this.qe = a.join("&")
    }
    ;
    d.oW = function() {
        return this.toString() ? decodeURIComponent(this.toString()) : ""
    }
    ;
    d.Mg = function() {
        this.qe = null
    }
    ;
    d.d6 = function(a) {
        this.Rc();
        lg(this.ha, function(b, c) {
            F(a, c) || this.remove(c)
        }, this);
        return this
    }
    ;
    d.clone = function() {
        var a = new Sg;
        a.qe = this.qe;
        this.ha && (a.ha = this.ha.clone(),
        a.ub = this.ub);
        return a
    }
    ;
    d.pf = function(a) {
        a = String(a);
        this.Is && (a = a.toLowerCase());
        return a
    }
    ;
    d.xC = function(a) {
        a && !this.Is && (this.Rc(),
        this.Mg(),
        lg(this.ha, function(a, c) {
            var e = c.toLowerCase();
            c != e && (this.remove(c),
            this.eB(e, a))
        }, this));
        this.Is = a
    }
    ;
    d.L7 = function(a) {
        for (var b = 0; b < arguments.length; b++)
            lg(arguments[b], function(a, b) {
                this.JB(b, a)
            }, this)
    }
    ;
    function ah(a, b) {
        this.kJ = a;
        this.params = b || null
    }
    ;function bh(a) {
        a && (this.name = wa(a.name),
        this.Zb = a.screenId,
        this.$b = a.loungeToken,
        this.Hn = a.dialId || "")
    }
    d = bh.prototype;
    d.name = "";
    d.Zb = "";
    d.$b = "";
    d.Hn = "";
    d.eS = function() {
        return !!this.Zb
    }
    ;
    d.c6 = function() {
        return {
            key: this.Zb,
            name: this.name
        }
    }
    ;
    d.$P = function() {
        return {
            name: this.name,
            screenId: this.Zb,
            loungeToken: this.$b,
            dialId: this.Hn
        }
    }
    ;
    d.P8 = function(a) {
        return a == this.Zb || a == this.Hn
    }
    ;
    d.toString = function() {
        var a = this.$b ? this.$b.slice(-6) : "null";
        return "{name:" + this.name + ",screenId:" + this.Zb + ",loungeToken:..." + a + ",dialId:" + this.Hn + "}"
    }
    ;
    function ch() {
        this.cF = y()
    }
    var dh = new ch;
    ch.prototype.LZ = function(a) {
        this.cF = a
    }
    ;
    ch.prototype.tY = function() {
        this.LZ(y())
    }
    ;
    ch.prototype.get = function() {
        return this.cF
    }
    ;
    function eh(a) {
        this.FW = a || "";
        this.Rn = dh
    }
    d = eh.prototype;
    d.L5 = !0;
    d.k$ = !0;
    d.n$ = !0;
    d.m$ = !0;
    d.l$ = !1;
    d.o$ = !1;
    d.d$ = function(a) {
        this.Rn = a
    }
    ;
    d.F7 = function() {
        return this.Rn
    }
    ;
    d.G9 = function() {
        this.Rn.tY()
    }
    ;
    function fh(a) {
        a = new Date(a.RE());
        return gh(a.getFullYear() - 2E3) + gh(a.getMonth() + 1) + gh(a.getDate()) + " " + gh(a.getHours()) + ":" + gh(a.getMinutes()) + ":" + gh(a.getSeconds()) + "." + gh(Math.floor(a.getMilliseconds() / 10))
    }
    function gh(a) {
        return 10 > a ? "0" + a : String(a)
    }
    function hh(a, b) {
        var c = (a.RE() - b) / 1E3
          , e = c.toFixed(3)
          , f = 0;
        if (1 > c)
            f = 2;
        else
            for (; 100 > c; )
                f++,
                c *= 10;
        for (; 0 < f--; )
            e = " " + e;
        return e
    }
    function ih(a) {
        eh.call(this, a)
    }
    z(ih, eh);
    ih.prototype.n6 = function(a) {
        var b = [];
        b.push(this.FW, " ");
        b.push("[", fh(a), "] ");
        b.push("[", hh(a, this.Rn.get()), "s] ");
        b.push("[", a.PW(), "] ");
        b.push(a.TD());
        b.push("\n");
        return b.join("")
    }
    ;
    function jh(a, b) {
        this.YX = new Je(a);
        this.jZ = b ? Ie : He
    }
    jh.prototype.i8 = function(a) {
        return this.YX.wt(a)
    }
    ;
    jh.prototype.parse = function(a) {
        return this.jZ(a)
    }
    ;
    function kh(a, b, c) {
        c = c || h;
        var e = c.onerror
          , f = !!b;
        I && !J("535.3") && (f = !f);
        c.onerror = function(b, c, l, n, q) {
            e && e(b, c, l, n, q);
            a({
                message: b,
                fileName: c,
                tZ: l,
                H0: n,
                error: q
            });
            return f
        }
    }
    function lh(a, b) {
        try {
            var c = mh(a);
            return "Message: " + wa(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + wa(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + wa(nh(b) + "-> ")
        } catch (e) {
            return "Exception trying to expose exception! You win, we lose. " + e
        }
    }
    function mh(a) {
        var b = m("window.location.href");
        if (v(a))
            return {
                message: a,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: b,
                stack: "Not available"
            };
        var c, e, f = !1;
        try {
            c = a.lineNumber || a.tZ || "Not available"
        } catch (g) {
            c = "Not available",
            f = !0
        }
        try {
            e = a.fileName || a.filename || a.sourceURL || h.$googDebugFname || b
        } catch (k) {
            e = "Not available",
            f = !0
        }
        return !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
            message: a.message || "Not available",
            name: a.name || "UnknownError",
            lineNumber: c,
            fileName: e,
            stack: a.stack || "Not available"
        }
    }
    function nh(a) {
        return oh(a || arguments.callee.caller, [])
    }
    function oh(a, b) {
        var c = [];
        if (F(b, a))
            c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(ph(a) + "(");
            for (var e = a.arguments, f = 0; f < e.length; f++) {
                0 < f && c.push(", ");
                var g;
                g = e[f];
                switch (typeof g) {
                case "object":
                    g = g ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    g = String(g);
                    break;
                case "boolean":
                    g = g ? "true" : "false";
                    break;
                case "function":
                    g = (g = ph(g)) ? g : "[fn]";
                    break;
                default:
                    g = typeof g
                }
                40 < g.length && (g = g.substr(0, 40) + "...");
                c.push(g)
            }
            b.push(a);
            c.push(")\n");
            try {
                c.push(oh(a.caller, b))
            } catch (k) {
                c.push("[exception trying to get caller]\n")
            }
        } else
            a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    }
    function ph(a) {
        if (qh[a])
            return qh[a];
        a = String(a);
        if (!qh[a]) {
            var b = /function ([^\(]+)/.exec(a);
            qh[a] = b ? b[1] : "[Anonymous]"
        }
        return qh[a]
    }
    var qh = {};
    function rh(a, b, c, e, f) {
        this.JZ(a, b, c, e, f)
    }
    rh.prototype.yD = 0;
    rh.prototype.kt = null;
    rh.prototype.jt = null;
    var sh = 0;
    d = rh.prototype;
    d.JZ = function(a, b, c, e, f) {
        this.yD = "number" == typeof f ? f : sh++;
        this.uD = e || y();
        this.tD = a;
        this.wD = b;
        this.vD = c;
        delete this.kt;
        delete this.jt
    }
    ;
    d.PW = function() {
        return this.vD
    }
    ;
    d.K6 = function() {
        return this.kt
    }
    ;
    d.iY = function(a) {
        this.kt = a
    }
    ;
    d.L6 = function() {
        return this.jt
    }
    ;
    d.jY = function(a) {
        this.jt = a
    }
    ;
    d.T9 = function(a) {
        this.vD = a
    }
    ;
    d.Q7 = function() {
        return this.tD
    }
    ;
    d.R7 = function(a) {
        this.tD = a
    }
    ;
    d.TD = function() {
        return this.wD
    }
    ;
    d.W9 = function(a) {
        this.wD = a
    }
    ;
    d.RE = function() {
        return this.uD
    }
    ;
    d.X9 = function(a) {
        this.uD = a
    }
    ;
    d.C7 = function() {
        return this.yD
    }
    ;
    function th(a) {
        this.BE = a
    }
    th.prototype.VE = null;
    th.prototype.U7 = null;
    th.prototype.Pt = null;
    th.prototype.T7 = null;
    function uh(a, b) {
        this.name = a;
        this.value = b
    }
    uh.prototype.toString = function() {
        return this.name
    }
    ;
    var vh = new uh("OFF",Infinity);
    new uh("SHOUT",1200);
    var wh = new uh("SEVERE",1E3);
    new uh("WARNING",900);
    new uh("INFO",800);
    var xh = new uh("CONFIG",700);
    new uh("FINE",500);
    new uh("FINER",400);
    new uh("FINEST",300);
    new uh("ALL",0);
    d = th.prototype;
    d.getName = function() {
        return this.BE
    }
    ;
    d.J5 = function() {}
    ;
    d.C9 = function() {
        return !1
    }
    ;
    d.fY = function() {
        return this.VE
    }
    ;
    d.KZ = function() {
        this.Pt || (this.Pt = {});
        return this.Pt
    }
    ;
    d.Hy = function() {}
    ;
    d.S7 = function() {
        return vh
    }
    ;
    d.H6 = function() {
        return vh
    }
    ;
    d.Q8 = function() {
        return !1
    }
    ;
    d.log = function() {}
    ;
    d.X6 = function(a, b, c) {
        var e = new rh(a,String(b),this.BE);
        c && (e.iY(c),
        e.jY(lh(c, arguments.callee.caller)));
        return e
    }
    ;
    d.j$ = function() {}
    ;
    d.V7 = function() {}
    ;
    d.W7 = function() {}
    ;
    d.info = function() {}
    ;
    d.config = function() {}
    ;
    d.h6 = function() {}
    ;
    d.i6 = function() {}
    ;
    d.j6 = function() {}
    ;
    d.d9 = function() {}
    ;
    d.Z5 = function(a) {
        var b = "log:" + a.TD();
        h.console && (h.console.timeStamp ? h.console.timeStamp(b) : h.console.markTimeline && h.console.markTimeline(b));
        h.msWriteProfilerMark && h.msWriteProfilerMark(b);
        for (b = this; b; )
            b.dY(a),
            b = b.fY()
    }
    ;
    d.dY = function() {}
    ;
    d.kY = function(a) {
        this.VE = a
    }
    ;
    d.bY = function(a, b) {
        this.KZ()[a] = b
    }
    ;
    var yh = {}
      , zh = null;
    function Ah(a) {
        zh || (zh = new th(""),
        yh[""] = zh,
        zh.Hy(xh));
        var b;
        if (!(b = yh[a])) {
            b = new th(a);
            var c = a.lastIndexOf(".")
              , e = a.substr(0, c)
              , c = a.substr(c + 1)
              , e = Ah(e);
            e.bY(c, b);
            b.kY(e);
            yh[a] = b
        }
        return b
    }
    ;function Bh() {}
    ;function Ch(a) {
        this.ih = 0;
        this.ot = a || 100;
        this.Bd = []
    }
    d = Ch.prototype;
    d.t8 = function(a) {
        var b = this.Bd[this.ih];
        this.Bd[this.ih] = a;
        this.ih = (this.ih + 1) % this.ot;
        return b
    }
    ;
    d.get = function(a) {
        a = this.kE(a);
        return this.Bd[a]
    }
    ;
    d.v8 = function(a, b) {
        a = this.kE(a);
        this.Bd[a] = b
    }
    ;
    d.Y = function() {
        return this.Bd.length
    }
    ;
    d.Ga = function() {
        return 0 == this.Bd.length
    }
    ;
    d.clear = function() {
        this.ih = this.Bd.length = 0
    }
    ;
    d.na = function() {
        return this.NU(this.Y())
    }
    ;
    d.NU = function(a) {
        var b = this.Y()
          , c = [];
        for (a = this.Y() - a; a < b; a++)
            c.push(this.get(a));
        return c
    }
    ;
    d.Yb = function() {
        for (var a = [], b = this.Y(), c = 0; c < b; c++)
            a[c] = c;
        return a
    }
    ;
    d.u8 = function(a) {
        return a < this.Y()
    }
    ;
    d.Rj = function(a) {
        for (var b = this.Y(), c = 0; c < b; c++)
            if (this.get(c) == a)
                return !0;
        return !1
    }
    ;
    d.U6 = function() {
        return 0 == this.Y() ? null : this.get(this.Y() - 1)
    }
    ;
    d.kE = function(a) {
        if (a >= this.Bd.length)
            throw Error("Out of bounds exception");
        return this.Bd.length < this.ot ? a : (this.ih + Number(a)) % this.ot
    }
    ;
    function Dh(a) {
        this.w = a;
        this.vf = {}
    }
    z(Dh, Mc);
    var Eh = [];
    d = Dh.prototype;
    d.mi = function(a, b, c, e, f) {
        u(b) || (Eh[0] = b,
        b = Eh);
        for (var g = 0; g < b.length; g++) {
            var k = Gf(a, b[g], c || this.handleEvent, e || !1, f || this.w || this);
            if (!k)
                break;
            this.vf[k.key] = k
        }
        return this
    }
    ;
    d.xQ = function(a, b, c, e, f) {
        if (u(b))
            for (var g = 0; g < b.length; g++)
                this.xQ(a, b[g], c, e, f);
        else {
            a = Mf(a, b, c || this.handleEvent, e, f || this.w || this);
            if (!a)
                return this;
            this.vf[a.key] = a
        }
        return this
    }
    ;
    d.b9 = function(a, b, c, e, f) {
        b.mi(a, c, e, f || this.w || this, this);
        return this
    }
    ;
    d.d8 = function() {
        var a = 0, b;
        for (b in this.vf)
            Object.prototype.hasOwnProperty.call(this.vf, b) && a++;
        return a
    }
    ;
    d.en = function(a, b, c, e, f) {
        if (u(b))
            for (var g = 0; g < b.length; g++)
                this.en(a, b[g], c, e, f);
        else
            c = c || this.handleEvent,
            f = f || this.w || this,
            c = Hf(c),
            e = !!e,
            b = yf(a) ? a.IP(b, c, e, f) : a ? (a = Jf(a)) ? a.is(b, c, e, f) : null : null,
            b && (Of(b),
            delete this.vf[b.key]);
        return this
    }
    ;
    d.v$ = function(a, b, c, e, f) {
        b.en(a, c, e, f || this.w || this, this);
        return this
    }
    ;
    d.Nw = function() {
        eb(this.vf, Of);
        this.vf = {}
    }
    ;
    d.I = function() {
        Dh.h.I.call(this);
        this.Nw()
    }
    ;
    d.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function Fh() {}
    Fh.prototype.KE = null;
    Fh.prototype.mx = function() {
        return this.KE || (this.KE = this.VY())
    }
    ;
    var Gh;
    function Hh() {}
    z(Hh, Fh);
    Hh.prototype.zE = function() {
        var a = this.TE();
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    }
    ;
    Hh.prototype.VY = function() {
        var a = {};
        this.TE() && (a[0] = !0,
        a[1] = !0);
        return a
    }
    ;
    Hh.prototype.TE = function() {
        if (!this.XE && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0; b < a.length; b++) {
                var c = a[b];
                try {
                    return new ActiveXObject(c),
                    this.XE = c
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return this.XE
    }
    ;
    Gh = new Hh;
    function Ih(a, b, c, e, f) {
        this.lb = a;
        this.da = b;
        this.ed = c;
        this.yb = e;
        this.Hh = f || 1;
        this.U = 45E3;
        this.Cp = new Dh(this);
        this.Ul = new Tf;
        this.Ul.qm(250)
    }
    d = Ih.prototype;
    d.Iq = null;
    d.Wb = !1;
    d.ah = null;
    d.vs = null;
    d.jl = null;
    d.Pi = null;
    d.Te = null;
    d.mb = null;
    d.tg = null;
    d.ya = null;
    d.hi = 0;
    d.yc = null;
    d.Yf = null;
    d.nd = null;
    d.qw = -1;
    d.ix = !0;
    d.Ue = !1;
    d.Jq = 0;
    d.Wk = null;
    function Jh(a, b) {
        switch (a) {
        case 0:
            return "Non-200 return code (" + b + ")";
        case 1:
            return "XMLHTTP failure (no data)";
        case 2:
            return "HttpConnection timeout";
        default:
            return "Unknown error"
        }
    }
    var Kh = {}
      , Lh = {};
    d = Ih.prototype;
    d.Kh = function(a) {
        this.Iq = a
    }
    ;
    d.setTimeout = function(a) {
        this.U = a
    }
    ;
    d.GJ = function(a) {
        this.Jq = a
    }
    ;
    d.Vw = function(a, b, c) {
        this.Pi = 1;
        this.Te = a.clone().xg();
        this.tg = b;
        this.Sv = c;
        this.pC(null)
    }
    ;
    d.mp = function(a, b, c, e) {
        this.Pi = 1;
        this.Te = a.clone().xg();
        this.tg = null;
        this.Sv = b;
        e && (this.ix = !1);
        this.pC(c)
    }
    ;
    d.pC = function(a) {
        this.jl = y();
        this.Rf();
        this.mb = this.Te.clone();
        this.mb.Tf("t", this.Hh);
        this.hi = 0;
        var b = this.lb.Uk();
        this.ya = this.lb.xq(b ? a : null);
        0 < this.Jq && (this.Wk = new Xf(w(this.xw, this, this.ya),this.Jq));
        this.Cp.mi(this.ya, "readystatechange", this.hK);
        a = this.Iq ? rb(this.Iq) : {};
        this.tg ? (this.Yf = "POST",
        a["Content-Type"] = "application/x-www-form-urlencoded",
        this.ya.send(this.mb, this.Yf, this.tg, a)) : (this.Yf = "GET",
        this.ix && !I && (a.Connection = "close"),
        this.ya.send(this.mb, this.Yf, null, a));
        this.lb.lc(1);
        this.da.iK(this.Yf, this.mb, this.yb, this.Hh, this.tg)
    }
    ;
    d.hK = function(a) {
        a = a.target;
        var b = this.Wk;
        b && 3 == a.Rd() ? (this.da.C("Throttling readystatechange."),
        b.ty()) : this.xw(a)
    }
    ;
    d.xw = function(a) {
        try {
            a == this.ya ? this.TN() : this.da.Ph("Called back with an unexpected xmlhttp")
        } catch (b) {
            this.da.C("Failed call to OnXmlHttpReadyStateChanged_"),
            this.ya && this.ya.fg() ? this.da.ae(b, "ResponseText: " + this.ya.fg()) : this.da.ae(b, "No response text")
        } finally {}
    }
    ;
    d.TN = function() {
        var a = this.ya.Rd()
          , b = this.ya.iI()
          , c = this.ya.getStatus();
        if (H && !Vb(10) || I && !J("420+")) {
            if (4 > a)
                return
        } else if (3 > a || 3 == a && !Fb && !this.ya.fg())
            return;
        this.Ue || 4 != a || 7 == b || (8 == b || 0 >= c ? this.lb.lc(3) : this.lb.lc(2));
        this.Nk();
        this.qw = b = this.ya.getStatus();
        (c = this.ya.fg()) || this.da.C("No response text for uri " + this.mb + " status " + b);
        this.Wb = 200 == b;
        this.da.tI(this.Yf, this.mb, this.yb, this.Hh, a, b);
        this.Wb ? (4 == a && this.Sd(),
        this.Sv ? (this.dw(a, c),
        Fb && this.Wb && 3 == a && this.sI()) : (this.da.gi(this.yb, c, null),
        this.Hp(c)),
        this.Wb && !this.Ue && (4 == a ? this.lb.Vh(this) : (this.Wb = !1,
        this.Rf()))) : (400 == b && 0 < c.indexOf("Unknown SID") ? (this.nd = 3,
        T(13),
        this.da.Ph("XMLHTTP Unknown SID (" + this.yb + ")")) : (this.nd = 0,
        T(14),
        this.da.Ph("XMLHTTP Bad status " + b + " (" + this.yb + ")")),
        this.Sd(),
        this.Xh())
    }
    ;
    d.dw = function(a, b) {
        for (var c = !0; !this.Ue && this.hi < b.length; ) {
            var e = this.wO(b);
            if (e == Lh) {
                4 == a && (this.nd = 4,
                T(15),
                c = !1);
                this.da.gi(this.yb, null, "[Incomplete Response]");
                break
            } else if (e == Kh) {
                this.nd = 4;
                T(16);
                this.da.gi(this.yb, b, "[Invalid Chunk]");
                c = !1;
                break
            } else
                this.da.gi(this.yb, e, null),
                this.Hp(e)
        }
        4 == a && 0 == b.length && (this.nd = 1,
        T(17),
        c = !1);
        this.Wb = this.Wb && c;
        c || (this.da.gi(this.yb, b, "[Invalid Chunked Response]"),
        this.Sd(),
        this.Xh())
    }
    ;
    d.ZV = function() {
        var a = this.ya.Rd()
          , b = this.ya.fg();
        this.hi < b.length && (this.Nk(),
        this.dw(a, b),
        this.Wb && 4 != a && this.Rf())
    }
    ;
    d.sI = function() {
        this.Cp.mi(this.Ul, "tick", this.ZV);
        this.Ul.start()
    }
    ;
    d.O5 = function() {
        this.Wb && this.da.fd("Received browser offline event even though request completed successfully");
        this.da.dP(this.mb);
        this.Sd();
        this.nd = 6;
        T(21);
        this.Xh()
    }
    ;
    d.wO = function(a) {
        var b = this.hi
          , c = a.indexOf("\n", b);
        if (-1 == c)
            return Lh;
        b = a.substring(b, c);
        b = Number(b);
        if (isNaN(b))
            return Kh;
        c += 1;
        if (c + b > a.length)
            return Lh;
        a = a.substr(c, b);
        this.hi = c + b;
        return a
    }
    ;
    d.Zv = function(a, b) {
        this.Pi = 3;
        this.Te = a.clone().xg();
        this.xV(b)
    }
    ;
    d.xV = function(a) {
        this.jl = y();
        this.Rf();
        var b = a ? window.location.hostname : "";
        this.mb = this.Te.clone();
        this.mb.qa("DOMAIN", b);
        this.mb.qa("t", this.Hh);
        try {
            this.yc = new ActiveXObject("htmlfile")
        } catch (c) {
            this.da.fd("ActiveX blocked");
            this.Sd();
            this.nd = 7;
            T(22);
            this.Xh();
            return
        }
        var e = "<html><body>";
        a && (e += '<script>document.domain="' + b + '"\x3c/script>');
        e += "</body></html>";
        this.yc.open();
        this.yc.write(e);
        this.yc.close();
        this.yc.parentWindow.m = w(this.UK, this);
        this.yc.parentWindow.d = w(this.ey, this, !0);
        this.yc.parentWindow.rpcClose = w(this.ey, this, !1);
        a = this.yc.createElement("div");
        this.yc.parentWindow.document.body.appendChild(a);
        a.innerHTML = '<iframe src="' + this.mb + '"></iframe>';
        this.da.VK("GET", this.mb, this.yb, this.Hh);
        this.lb.lc(1)
    }
    ;
    d.UK = function(a) {
        Mh(w(this.a_, this, a), 0)
    }
    ;
    d.a_ = function(a) {
        this.Ue || (this.da.zQ(this.yb, a),
        this.Nk(),
        this.Hp(a),
        this.Rf())
    }
    ;
    d.ey = function(a) {
        Mh(w(this.$Z, this, a), 0)
    }
    ;
    d.$Z = function(a) {
        this.Ue || (this.da.yO(this.yb, a),
        this.Sd(),
        this.Wb = a,
        this.lb.Vh(this),
        this.lb.lc(4))
    }
    ;
    d.pL = function(a) {
        this.Pi = 2;
        this.Te = a.clone().xg();
        this.uV()
    }
    ;
    d.uV = function() {
        (new Image).src = this.Te;
        this.jl = y();
        this.Rf()
    }
    ;
    d.cancel = function() {
        this.Ue = !0;
        this.Sd()
    }
    ;
    d.Rf = function() {
        this.vs = y() + this.U;
        this.XA(this.U)
    }
    ;
    d.XA = function(a) {
        if (null != this.ah)
            throw Error("WatchDog timer not null");
        this.ah = Mh(w(this.aY, this), a)
    }
    ;
    d.Nk = function() {
        this.ah && (h.clearTimeout(this.ah),
        this.ah = null)
    }
    ;
    d.aY = function() {
        this.ah = null;
        var a = y();
        0 <= a - this.vs ? this.$R() : (this.da.Ph("WatchDog timer called too early"),
        this.XA(this.vs - a))
    }
    ;
    d.$R = function() {
        this.Wb && this.da.fd("Received watchdog timeout even though request loaded successfully");
        this.da.FN(this.mb);
        2 != this.Pi && this.lb.lc(3);
        this.Sd();
        this.nd = 2;
        T(18);
        this.Xh()
    }
    ;
    d.Xh = function() {
        this.lb.ZC() || this.Ue || this.lb.Vh(this)
    }
    ;
    d.Sd = function() {
        this.Nk();
        Nc(this.Wk);
        this.Wk = null;
        this.Ul.Bb();
        this.Cp.Nw();
        if (this.ya) {
            var a = this.ya;
            this.ya = null;
            a.abort();
            a.Xd()
        }
        this.yc && (this.yc = null)
    }
    ;
    d.xv = function() {
        return this.Wb
    }
    ;
    d.Kk = function() {
        return this.nd
    }
    ;
    d.zk = function() {
        return this.qw
    }
    ;
    d.p8 = function() {
        return this.ed
    }
    ;
    d.nL = function() {
        return this.yb
    }
    ;
    d.op = function() {
        return this.tg
    }
    ;
    d.Yp = function() {
        return this.jl
    }
    ;
    d.Hp = function(a) {
        try {
            this.lb.zB(this, a),
            this.lb.lc(4)
        } catch (b) {
            this.da.ae(b, "Error in httprequest callback")
        }
    }
    ;
    function Nh() {
        this.n8 = null
    }
    d = Nh.prototype;
    d.o8 = function() {
        return null
    }
    ;
    d.dP = function(a) {
        this.info("BROWSER_OFFLINE: " + a)
    }
    ;
    d.iK = function(a, b, c, e, f) {
        this.info("XMLHTTP REQ (" + c + ") [attempt " + e + "]: " + a + "\n" + b + "\n" + this.ZZ(f))
    }
    ;
    d.tI = function(a, b, c, e, f, g) {
        this.info("XMLHTTP RESP (" + c + ") [ attempt " + e + "]: " + a + "\n" + b + "\n" + f + " " + g)
    }
    ;
    d.gi = function(a, b, c) {
        this.info("XMLHTTP TEXT (" + a + "): " + this.bF(b) + (c ? " " + c : ""))
    }
    ;
    d.VK = function(a, b, c, e) {
        this.info("TRIDENT REQ (" + c + ") [ attempt " + e + "]: " + a + "\n" + b)
    }
    ;
    d.zQ = function(a, b) {
        this.info("TRIDENT TEXT (" + a + "): " + this.bF(b))
    }
    ;
    d.yO = function(a, b) {
        this.info("TRIDENT TEXT (" + a + "): " + b ? "success" : "failure")
    }
    ;
    d.FN = function(a) {
        this.info("TIMEOUT: " + a)
    }
    ;
    d.C = function(a) {
        this.info(a)
    }
    ;
    d.ae = function(a, b) {
        this.fd((b || "Exception") + a)
    }
    ;
    d.info = function() {}
    ;
    d.Ph = function() {}
    ;
    d.fd = function() {}
    ;
    d.bF = function(a) {
        if (!a || "y2f%" == a)
            return a;
        try {
            var b = Ie(a);
            if (b)
                for (var c = 0; c < b.length; c++)
                    u(b[c]) && this.NR(b[c]);
            return O(b)
        } catch (e) {
            return this.C("Exception parsing expected JS array - probably was not JS"),
            a
        }
    }
    ;
    d.NR = function(a) {
        if (!(2 > a.length || (a = a[1],
        !u(a) || 1 > a.length))) {
            var b = a[0];
            if ("noop" != b && "stop" != b)
                for (b = 1; b < a.length; b++)
                    a[b] = ""
        }
    }
    ;
    d.ZZ = function(a) {
        if (!a)
            return null;
        var b = "";
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var e = a[c].split("=");
            if (1 < e.length)
                var f = e[0]
                  , e = e[1]
                  , g = f.split("_")
                  , b = 2 <= g.length && "type" == g[1] ? b + (f + "=" + e + "&") : b + (f + "=redacted&")
        }
        return b
    }
    ;
    function Oh(a, b, c, e, f) {
        (new Nh).C("TestLoadImageWithRetries: " + f);
        if (0 == e)
            c(!1);
        else {
            var g = f || 0;
            e--;
            Ph(a, b, function(f) {
                f ? c(!0) : h.setTimeout(function() {
                    Oh(a, b, c, e, g)
                }, g)
            })
        }
    }
    function Ph(a, b, c) {
        var e = new Nh;
        e.C("TestLoadImage: loading " + a);
        var f = new Image;
        f.onload = function() {
            try {
                e.C("TestLoadImage: loaded"),
                Qh(f),
                c(!0)
            } catch (a) {
                e.ae(a)
            }
        }
        ;
        f.onerror = function() {
            try {
                e.C("TestLoadImage: error"),
                Qh(f),
                c(!1)
            } catch (a) {
                e.ae(a)
            }
        }
        ;
        f.onabort = function() {
            try {
                e.C("TestLoadImage: abort"),
                Qh(f),
                c(!1)
            } catch (a) {
                e.ae(a)
            }
        }
        ;
        f.ontimeout = function() {
            try {
                e.C("TestLoadImage: timeout"),
                Qh(f),
                c(!1)
            } catch (a) {
                e.ae(a)
            }
        }
        ;
        h.setTimeout(function() {
            if (f.ontimeout)
                f.ontimeout()
        }, b);
        f.src = a
    }
    function Qh(a) {
        a.onload = null;
        a.onerror = null;
        a.onabort = null;
        a.ontimeout = null
    }
    ;function Rh(a, b) {
        this.za = a;
        this.Cb = b;
        this.fy = new jh(null,!0)
    }
    d = Rh.prototype;
    d.Nq = null;
    d.qb = null;
    d.Ol = !1;
    d.pz = null;
    d.Nl = null;
    d.Cq = null;
    d.Oq = null;
    d.Db = null;
    d.Ci = -1;
    d.ri = null;
    d.ji = null;
    d.tN = function(a) {
        this.Nq = a
    }
    ;
    d.uN = function(a) {
        this.fy = a
    }
    ;
    d.sN = function(a) {
        this.Oq = a;
        a = this.za.Pw(this.Oq);
        T(3);
        this.pz = y();
        var b = this.za.yN();
        null != b ? (this.ri = this.za.hp(b[0]),
        (this.ji = b[1]) ? (this.Db = 1,
        this.gx()) : (this.Db = 2,
        this.kq())) : (a.Tf("MODE", "init"),
        this.qb = new Ih(this,this.Cb,void 0,void 0,void 0),
        this.qb.Kh(this.Nq),
        this.qb.mp(a, !1, null, !0),
        this.Db = 0)
    }
    ;
    d.gx = function() {
        var a = this.za.gr(this.ji, "/mail/images/cleardot.gif");
        a.xg();
        Oh(a.toString(), 5E3, w(this.IR, this), 3, 2E3);
        this.lc(1)
    }
    ;
    d.IR = function(a) {
        a ? (this.Db = 2,
        this.kq()) : (T(4),
        this.za.KR(this));
        a && this.lc(2)
    }
    ;
    d.kq = function() {
        this.Cb.C("TestConnection: starting stage 2");
        var a = this.za.sM();
        null != a ? (this.Cb.C("TestConnection: skipping stage 2, precomputed result is " + a ? "Buffered" : "Unbuffered"),
        T(5),
        a ? (T(11),
        this.za.si(this, !1)) : (T(12),
        this.za.si(this, !0))) : (this.qb = new Ih(this,this.Cb,void 0,void 0,void 0),
        this.qb.Kh(this.Nq),
        a = this.za.Yv(this.ri, this.Oq),
        T(5),
        !H || Vb(10) ? (a.Tf("TYPE", "xmlhttp"),
        this.qb.mp(a, !1, this.ri, !1)) : (a.Tf("TYPE", "html"),
        this.qb.Zv(a, Boolean(this.ri))))
    }
    ;
    d.xq = function(a) {
        return this.za.xq(a)
    }
    ;
    d.abort = function() {
        this.qb && (this.qb.cancel(),
        this.qb = null);
        this.Ci = -1
    }
    ;
    d.ZC = function() {
        return !1
    }
    ;
    d.zB = function(a, b) {
        this.Ci = a.zk();
        if (0 == this.Db)
            if (this.Cb.C("TestConnection: Got data for stage 1"),
            b) {
                try {
                    var c = this.fy.parse(b)
                } catch (e) {
                    this.Cb.ae(e);
                    this.za.Dq(this, 4);
                    return
                }
                this.ri = this.za.hp(c[0]);
                this.ji = c[1]
            } else
                this.Cb.C("TestConnection: Null responseText"),
                this.za.Dq(this, 4);
        else
            2 == this.Db && (this.Ol ? (T(7),
            this.Cq = y()) : "11111" == b ? (T(6),
            this.Ol = !0,
            this.Nl = y(),
            this.bL() && (this.Ci = 200,
            this.qb.cancel(),
            this.Cb.C("Test connection succeeded; using streaming connection"),
            T(12),
            this.za.si(this, !0))) : (T(8),
            this.Nl = this.Cq = y(),
            this.Ol = !1))
    }
    ;
    d.Vh = function() {
        this.Ci = this.qb.zk();
        if (!this.qb.xv())
            this.Cb.C("TestConnection: request failed, in state " + this.Db),
            0 == this.Db ? T(9) : 2 == this.Db && T(10),
            this.za.Dq(this, this.qb.Kk());
        else if (0 == this.Db)
            this.Cb.C("TestConnection: request complete for initial check"),
            this.ji ? (this.Db = 1,
            this.gx()) : (this.Db = 2,
            this.kq());
        else if (2 == this.Db) {
            this.Cb.C("TestConnection: request complete for stage 2");
            var a = !1;
            (a = !H || Vb(10) ? this.Ol : 200 > this.Cq - this.Nl ? !1 : !0) ? (this.Cb.C("Test connection succeeded; using streaming connection"),
            T(12),
            this.za.si(this, !0)) : (this.Cb.C("Test connection failed; not using streaming"),
            T(11),
            this.za.si(this, !1))
        }
    }
    ;
    d.mr = function() {
        return this.Ci
    }
    ;
    d.Uk = function() {
        return this.za.Uk()
    }
    ;
    Rh.prototype.isActive = function() {
        return this.za.isActive()
    }
    ;
    Rh.prototype.bL = function() {
        var a = this.Nl - this.pz;
        return !H || Vb(10) || 500 > a
    }
    ;
    Rh.prototype.lc = function(a) {
        this.za.lc(a)
    }
    ;
    function Sh(a) {
        Sf.call(this);
        this.headers = new ud;
        this.Cl = a || null;
        this.Pd = !1;
        this.sl = this.F = null;
        this.Lw = this.wi = "";
        this.mg = 0;
        this.$d = "";
        this.Qe = this.gq = this.nl = this.mq = !1;
        this.cf = 0;
        this.Dl = null;
        this.xi = "";
        this.El = this.nq = !1
    }
    z(Sh, Sf);
    Sh.prototype.r8 = null;
    var Th = /^https?$/i
      , Uh = ["POST", "PUT"]
      , Vh = [];
    d = Sh.prototype;
    d.R5 = function() {
        this.Xd();
        Na(Vh, this)
    }
    ;
    d.H7 = function() {
        return this.cf
    }
    ;
    d.h$ = function(a) {
        this.cf = Math.max(0, a)
    }
    ;
    d.b$ = function(a) {
        this.xi = a
    }
    ;
    d.A7 = function() {
        return this.xi
    }
    ;
    d.yY = function(a) {
        this.nq = a
    }
    ;
    d.K7 = function() {
        return this.nq
    }
    ;
    d.send = function(a, b, c, e) {
        if (this.F)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + this.wi + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.wi = a;
        this.$d = "";
        this.mg = 0;
        this.Lw = b;
        this.mq = !1;
        this.Pd = !0;
        this.F = this.qJ();
        this.sl = this.Cl ? this.Cl.mx() : Gh.mx();
        this.F.onreadystatechange = w(this.Fw, this);
        try {
            Bh(null, this.qd("Opening Xhr")),
            this.gq = !0,
            this.F.open(b, a, !0),
            this.gq = !1
        } catch (f) {
            Bh(null, this.qd("Error opening Xhr: " + f.message));
            this.lx(5, f);
            return
        }
        a = c || "";
        var g = this.headers.clone();
        e && lg(e, function(a, b) {
            g.pc(b, a)
        });
        e = Ma(g.Yb(), Wh);
        c = h.FormData && a instanceof h.FormData;
        !F(Uh, b) || e || c || g.pc("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        lg(g, function(a, b) {
            this.F.setRequestHeader(b, a)
        }, this);
        this.xi && (this.F.responseType = this.xi);
        "withCredentials"in this.F && (this.F.withCredentials = this.nq);
        try {
            this.kx(),
            0 < this.cf && (this.El = H && J(9) && fa(this.F.timeout) && t(this.F.ontimeout),
            Bh(null, this.qd("Will abort after " + this.cf + "ms if incomplete, xhr2 " + this.El)),
            this.El ? (this.F.timeout = this.cf,
            this.F.ontimeout = w(this.U, this)) : this.Dl = Uf(this.U, this.cf, this)),
            Bh(null, this.qd("Sending request")),
            this.nl = !0,
            this.F.send(a),
            this.nl = !1
        } catch (k) {
            Bh(null, this.qd("Send error: " + k.message)),
            this.lx(5, k)
        }
    }
    ;
    function Wh(a) {
        return "content-type" == a.toLowerCase()
    }
    d.qJ = function() {
        return this.Cl ? this.Cl.zE() : Gh.zE()
    }
    ;
    d.U = function() {
        "undefined" != typeof aa && this.F && (this.$d = "Timed out after " + this.cf + "ms, aborting",
        this.mg = 8,
        this.qd(this.$d),
        this.dispatchEvent("timeout"),
        this.abort(8))
    }
    ;
    d.lx = function(a, b) {
        this.Pd = !1;
        this.F && (this.Qe = !0,
        this.F.abort(),
        this.Qe = !1);
        this.$d = b;
        this.mg = a;
        this.cz();
        this.$k()
    }
    ;
    d.cz = function() {
        this.mq || (this.mq = !0,
        this.dispatchEvent("complete"),
        this.dispatchEvent("error"))
    }
    ;
    d.abort = function(a) {
        this.F && this.Pd && (this.qd("Aborting"),
        this.Pd = !1,
        this.Qe = !0,
        this.F.abort(),
        this.Qe = !1,
        this.mg = a || 7,
        this.dispatchEvent("complete"),
        this.dispatchEvent("abort"),
        this.$k())
    }
    ;
    d.I = function() {
        this.F && (this.Pd && (this.Pd = !1,
        this.Qe = !0,
        this.F.abort(),
        this.Qe = !1),
        this.$k(!0));
        Sh.h.I.call(this)
    }
    ;
    d.Fw = function() {
        this.oD() || (this.gq || this.nl || this.Qe ? this.qD() : this.$U())
    }
    ;
    d.$U = function() {
        this.qD()
    }
    ;
    d.qD = function() {
        if (this.Pd && "undefined" != typeof aa)
            if (this.sl[1] && 4 == this.Rd() && 2 == this.getStatus())
                this.qd("Local request error detected and ignored");
            else if (this.nl && 4 == this.Rd())
                Uf(this.Fw, 0, this);
            else if (this.dispatchEvent("readystatechange"),
            this.Dr()) {
                this.qd("Request complete");
                this.Pd = !1;
                try {
                    this.BP() ? (this.dispatchEvent("complete"),
                    this.dispatchEvent("success")) : (this.mg = 6,
                    this.$d = this.AP() + " [" + this.getStatus() + "]",
                    this.cz())
                } finally {
                    this.$k()
                }
            }
    }
    ;
    d.$k = function(a) {
        if (this.F) {
            this.kx();
            var b = this.F
              , c = this.sl[0] ? p : null;
            this.sl = this.F = null;
            a || this.dispatchEvent("ready");
            try {
                b.onreadystatechange = c
            } catch (e) {}
        }
    }
    ;
    d.kx = function() {
        this.F && this.El && (this.F.ontimeout = null);
        fa(this.Dl) && (h.clearTimeout(this.Dl),
        this.Dl = null)
    }
    ;
    Sh.prototype.isActive = function() {
        return !!this.F
    }
    ;
    d = Sh.prototype;
    d.Dr = function() {
        return 4 == this.Rd()
    }
    ;
    d.BP = function() {
        var a = this.getStatus(), b;
        t: switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            b = !0;
            break t;
        default:
            b = !1
        }
        return b || 0 === a && !this.UZ()
    }
    ;
    d.UZ = function() {
        var a;
        a = cg(String(this.wi))[1] || null;
        !a && self.location && (a = self.location.protocol,
        a = a.substr(0, a.length - 1));
        a = a ? a.toLowerCase() : "";
        return Th.test(a)
    }
    ;
    d.Rd = function() {
        return this.F ? this.F.readyState : 0
    }
    ;
    d.getStatus = function() {
        try {
            return 2 < this.Rd() ? this.F.status : -1
        } catch (a) {
            return -1
        }
    }
    ;
    d.AP = function() {
        try {
            return 2 < this.Rd() ? this.F.statusText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    d.W6 = function() {
        return String(this.wi)
    }
    ;
    d.fg = function() {
        try {
            return this.F ? this.F.responseText : ""
        } catch (a) {
            return ""
        }
    }
    ;
    d.y7 = function() {
        try {
            if (this.F && "responseBody"in this.F)
                return this.F.responseBody
        } catch (a) {}
        return null
    }
    ;
    d.pX = function() {
        try {
            return this.F ? this.F.responseXML : null
        } catch (a) {
            return null
        }
    }
    ;
    d.oX = function(a) {
        if (this.F) {
            var b = this.F.responseText;
            a && 0 == b.indexOf(a) && (b = b.substring(a.length));
            return He(b)
        }
    }
    ;
    d.x7 = function() {
        try {
            if (!this.F)
                return null;
            if ("response"in this.F)
                return this.F.response;
            switch (this.xi) {
            case "":
            case "text":
                return this.F.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer"in this.F)
                    return this.F.mozResponseArrayBuffer
            }
            return null
        } catch (a) {
            return null
        }
    }
    ;
    d.getResponseHeader = function(a) {
        return this.F && this.Dr() ? this.F.getResponseHeader(a) : void 0
    }
    ;
    d.OZ = function() {
        return this.F && this.Dr() ? this.F.getAllResponseHeaders() : ""
    }
    ;
    d.z7 = function() {
        for (var a = {}, b = this.OZ().split("\r\n"), c = 0; c < b.length; c++)
            if (!/^[\s\xa0]*$/.test(b[c])) {
                var e;
                e = 2;
                for (var f = b[c].split(": "), g = []; 0 < e && f.length; )
                    g.push(f.shift()),
                    e--;
                f.length && g.push(f.join(": "));
                e = g;
                a[e[0]] = a[e[0]] ? a[e[0]] + (", " + e[1]) : e[1]
            }
        return a
    }
    ;
    d.iI = function() {
        return this.mg
    }
    ;
    d.Kk = function() {
        return v(this.$d) ? this.$d : String(this.$d)
    }
    ;
    d.qd = function(a) {
        return a + " [" + this.Lw + " " + this.wi + " " + this.getStatus() + "]"
    }
    ;
    function Xh(a, b, c) {
        this.Sw = a || null;
        this.xa = 1;
        this.pb = [];
        this.Kc = [];
        this.D = new Nh;
        this.rl = new jh(null,!0);
        this.lO = b || null;
        this.oO = null != c ? c : null
    }
    function Yh(a, b, c) {
        this.yA = a;
        this.map = b;
        this.context = c || null
    }
    d = Xh.prototype;
    d.bg = null;
    d.Oi = null;
    d.Na = null;
    d.ta = null;
    d.Sp = null;
    d.ll = null;
    d.Gv = null;
    d.Qk = null;
    d.Ds = !0;
    d.li = 0;
    d.TO = 0;
    d.Hz = !1;
    d.w = null;
    d.xc = null;
    d.rd = null;
    d.of = null;
    d.de = null;
    d.rq = null;
    d.Ir = !0;
    d.Lh = -1;
    d.Dz = -1;
    d.od = -1;
    d.Td = 0;
    d.gg = 0;
    d.lA = 5E3;
    d.nA = 1E4;
    d.FE = 2;
    d.Xq = 2E4;
    d.Cx = 0;
    d.ao = !1;
    d.Ie = 8;
    var Zh = new Sf;
    function $h(a, b) {
        pf.call(this, "statevent", a);
        this.k8 = b
    }
    z($h, pf);
    function ai(a, b, c, e) {
        pf.call(this, "timingevent", a);
        this.B0 = b;
        this.E0 = c;
        this.D0 = e
    }
    z(ai, pf);
    function bi(a, b) {
        pf.call(this, "serverreachability", a);
        this.q9 = b
    }
    z(bi, pf);
    d = Xh.prototype;
    d.w6 = function() {
        return this.D
    }
    ;
    d.L9 = function(a) {
        null != a && (this.D = a)
    }
    ;
    d.Or = function(a, b, c, e, f) {
        this.D.C("connect()");
        T(0);
        this.Sp = b;
        this.Oi = c || {};
        e && t(f) && (this.Oi.OSID = e,
        this.Oi.OAID = f);
        this.hO(a)
    }
    ;
    d.Yy = function() {
        this.D.C("disconnect()");
        this.Ow();
        if (3 == this.xa) {
            var a = this.li++
              , b = this.ll.clone();
            b.qa("SID", this.ed);
            b.qa("RID", a);
            b.qa("TYPE", "terminate");
            this.Zh(b);
            (new Ih(this,this.D,this.ed,a,void 0)).pL(b)
        }
        this.Qw()
    }
    ;
    d.Oz = function() {
        return this.ed
    }
    ;
    d.hO = function(a) {
        this.D.C("connectTest_()");
        this.Gp() && (this.de = new Rh(this,this.D),
        this.de.tN(this.bg),
        this.de.uN(this.rl),
        this.de.sN(a))
    }
    ;
    d.KN = function() {
        this.D.C("connectChannel_()");
        this.YN(1, 0);
        this.ll = this.Pw(this.Sp);
        this.Jp()
    }
    ;
    d.Ow = function() {
        this.de && (this.de.abort(),
        this.de = null);
        this.ta && (this.ta.cancel(),
        this.ta = null);
        this.rd && (h.clearTimeout(this.rd),
        this.rd = null);
        this.Vk();
        this.Na && (this.Na.cancel(),
        this.Na = null);
        this.xc && (h.clearTimeout(this.xc),
        this.xc = null)
    }
    ;
    d.M6 = function() {
        return this.bg
    }
    ;
    d.Sz = function(a) {
        this.bg = a
    }
    ;
    d.m8 = function(a) {
        this.Cx = a
    }
    ;
    d.e$ = function(a) {
        this.ao = a
    }
    ;
    d.Q6 = function() {
        return this.w
    }
    ;
    d.bA = function(a) {
        this.w = a
    }
    ;
    d.q6 = function() {
        return this.Ds
    }
    ;
    d.K9 = function(a) {
        this.Ds = a
    }
    ;
    d.GC = function() {
        return !this.rq
    }
    ;
    d.p6 = function() {
        return this.Ir
    }
    ;
    d.J9 = function(a) {
        this.Ir = a
    }
    ;
    d.PQ = function(a, b) {
        if (0 == this.xa)
            throw Error("Invalid operation: sending map when state is closed");
        1E3 == this.pb.length && this.D.fd("Already have 1000 queued maps upon queueing " + O(a));
        this.pb.push(new Yh(this.TO++,a,b));
        2 != this.xa && 3 != this.xa || this.Jp()
    }
    ;
    d.O9 = function(a) {
        this.Hz = a;
        this.D.info("setFailFast: " + a);
        (this.Na || this.xc) && this.Td > this.Hq() && (this.D.info("Retry count " + this.Td + " > new maxRetries " + this.Hq() + ". Fail immediately!"),
        this.Na ? (this.Na.cancel(),
        this.Vh(this.Na)) : (h.clearTimeout(this.xc),
        this.xc = null,
        this.Ab(2)))
    }
    ;
    d.Hq = function() {
        return this.Hz ? 0 : this.FE
    }
    ;
    d.Q9 = function(a) {
        this.FE = a
    }
    ;
    d.R9 = function(a) {
        this.Xq = a
    }
    ;
    d.YL = function() {
        return 3
    }
    ;
    d.ZC = function() {
        return 0 == this.xa
    }
    ;
    d.ud = function() {
        return this.xa
    }
    ;
    d.DV = function() {
        return this.od
    }
    ;
    d.Nz = function() {
        return this.Lh
    }
    ;
    d.Iz = function() {
        return 0 != this.b_()
    }
    ;
    d.l8 = function(a) {
        this.rl = a
    }
    ;
    d.b_ = function() {
        var a = 0;
        this.ta && a++;
        this.Na && a++;
        return a
    }
    ;
    d.Jp = function() {
        this.Na || this.xc || (this.xc = Mh(w(this.ky, this), 0),
        this.Td = 0)
    }
    ;
    d.UI = function(a) {
        if (this.Na || this.xc)
            return this.D.fd("Request already in progress"),
            !1;
        if (1 == this.xa || this.Td >= this.Hq())
            return !1;
        this.D.C("Going to retry POST");
        this.xc = Mh(w(this.ky, this, a), this.fx(this.Td));
        this.Td++;
        return !0
    }
    ;
    d.ky = function(a) {
        this.xc = null;
        this.HA(a)
    }
    ;
    d.HA = function(a) {
        this.D.C("startForwardChannel_");
        this.Gp() && (1 == this.xa ? a ? this.D.fd("Not supposed to retry the open") : (this.yL(),
        this.xa = 2) : 3 == this.xa && (a ? this.sy(a) : 0 == this.pb.length ? this.D.C("startForwardChannel_ returned: nothing to send") : this.Na ? this.D.fd("startForwardChannel_ returned: connection already in progress") : (this.sy(),
        this.D.C("startForwardChannel_ finished, sent request"))))
    }
    ;
    d.yL = function() {
        this.D.C("open_()");
        this.li = Math.floor(1E5 * Math.random());
        var a = this.li++
          , b = new Ih(this,this.D,"",a,void 0);
        b.Kh(this.bg);
        var c = this.qq()
          , e = this.ll.clone();
        e.qa("RID", a);
        this.Sw && e.qa("CVER", this.Sw);
        this.Zh(e);
        b.Vw(e, c, !0);
        this.Na = b
    }
    ;
    d.sy = function(a) {
        var b;
        a ? 6 < this.Ie ? (this.oL(),
        b = this.li - 1,
        a = this.qq()) : (b = a.nL(),
        a = a.op()) : (b = this.li++,
        a = this.qq());
        var c = this.ll.clone();
        c.qa("SID", this.ed);
        c.qa("RID", b);
        c.qa("AID", this.Lh);
        this.Zh(c);
        b = new Ih(this,this.D,this.ed,b,this.Td + 1);
        b.Kh(this.bg);
        b.setTimeout(Math.round(0.5 * this.Xq) + Math.round(0.5 * this.Xq * Math.random()));
        this.Na = b;
        b.Vw(c, a, !0)
    }
    ;
    d.Zh = function(a) {
        if (this.w) {
            var b = this.w.RA(this);
            b && lg(b, function(b, e) {
                a.qa(e, b)
            })
        }
    }
    ;
    d.qq = function() {
        var a = Math.min(this.pb.length, 1E3), b = ["count=" + a], c;
        6 < this.Ie && 0 < a ? (c = this.pb[0].yA,
        b.push("ofs=" + c)) : c = 0;
        for (var e = 0; e < a; e++) {
            var f = this.pb[e].yA
              , g = this.pb[e].map
              , f = 6 >= this.Ie ? e : f - c;
            try {
                lg(g, function(a, c) {
                    b.push("req" + f + "_" + c + "=" + encodeURIComponent(a))
                })
            } catch (k) {
                b.push("req" + f + "_type=" + encodeURIComponent("_badmap")),
                this.w && this.w.WO(this, g)
            }
        }
        this.Kc = this.Kc.concat(this.pb.splice(0, a));
        return b.join("&")
    }
    ;
    d.oL = function() {
        this.pb = this.Kc.concat(this.pb);
        this.Kc.length = 0
    }
    ;
    d.uv = function() {
        this.ta || this.rd || (this.Ew = 1,
        this.rd = Mh(w(this.Ey, this), 0),
        this.gg = 0)
    }
    ;
    d.Tp = function() {
        if (this.ta || this.rd)
            return this.D.fd("Request already in progress"),
            !1;
        if (this.gg >= this.YL())
            return !1;
        this.D.C("Going to retry GET");
        this.Ew++;
        this.rd = Mh(w(this.Ey, this), this.fx(this.gg));
        this.gg++;
        return !0
    }
    ;
    d.Ey = function() {
        this.rd = null;
        this.uX()
    }
    ;
    d.uX = function() {
        if (this.Gp()) {
            this.D.C("Creating new HttpRequest");
            this.ta = new Ih(this,this.D,this.ed,"rpc",this.Ew);
            this.ta.Kh(this.bg);
            this.ta.GJ(this.Cx);
            var a = this.Gv.clone();
            a.qa("RID", "rpc");
            a.qa("SID", this.ed);
            a.qa("CI", this.rq ? "0" : "1");
            a.qa("AID", this.Lh);
            this.Zh(a);
            !H || Vb(10) ? (a.qa("TYPE", "xmlhttp"),
            this.ta.mp(a, !0, this.Qk, !1)) : (a.qa("TYPE", "html"),
            this.ta.Zv(a, Boolean(this.Qk)));
            this.D.C("New Request created")
        }
    }
    ;
    d.Gp = function() {
        if (this.w) {
            var a = this.w.zL(this);
            if (0 != a)
                return this.D.C("Handler returned error code from okToMakeRequest"),
                this.Ab(a),
                !1
        }
        return !0
    }
    ;
    d.si = function(a, b) {
        this.D.C("Test Connection Finished");
        this.rq = this.Ir && b;
        this.od = a.mr();
        this.KN()
    }
    ;
    d.Dq = function(a) {
        this.D.C("Test Connection Failed");
        this.od = a.mr();
        this.Ab(2)
    }
    ;
    d.KR = function() {
        this.D.C("Test Connection Blocked");
        this.od = this.de.mr();
        this.Ab(9)
    }
    ;
    d.zB = function(a, b) {
        if (0 != this.xa && (this.ta == a || this.Na == a))
            if (this.od = a.zk(),
            this.Na == a && 3 == this.xa)
                if (7 < this.Ie) {
                    var c;
                    try {
                        c = this.rl.parse(b)
                    } catch (e) {
                        c = null
                    }
                    u(c) && 3 == c.length ? this.JJ(c) : (this.D.C("Bad POST response data returned"),
                    this.Ab(11))
                } else
                    "y2f%" != b && (this.D.C("Bad data returned - missing/invald magic cookie"),
                    this.Ab(11));
            else
                this.ta == a && this.Vk(),
                /^[\s\xa0]*$/.test(b) || (c = this.rl.parse(b),
                u(c),
                this.KJ(c))
    }
    ;
    d.JJ = function(a) {
        if (0 == a[0])
            this.LN();
        else {
            this.Dz = a[1];
            var b = this.Dz - this.Lh;
            0 < b && (a = a[2],
            this.D.C(a + " bytes (in " + b + " arrays) are outstanding on the BackChannel"),
            this.NN(a) && !this.of && (this.of = Mh(w(this.MN, this), 6E3)))
        }
    }
    ;
    d.LN = function() {
        this.D.C("Server claims our backchannel is missing.");
        if (this.rd)
            this.D.C("But we are currently starting the request.");
        else {
            if (this.ta)
                if (this.ta.Yp() + 3E3 < this.Na.Yp())
                    this.Vk(),
                    this.ta.cancel(),
                    this.ta = null;
                else
                    return;
            else
                this.D.Ph("We do not have a BackChannel established");
            this.Tp();
            T(19)
        }
    }
    ;
    d.NN = function(a) {
        return 37500 > a && !this.GC() && 0 == this.gg
    }
    ;
    d.hp = function(a) {
        return this.Ds ? this.w ? this.w.FQ(a) : a : null
    }
    ;
    d.MN = function() {
        null != this.of && (this.of = null,
        this.ta.cancel(),
        this.ta = null,
        this.Tp(),
        T(20))
    }
    ;
    d.Vk = function() {
        null != this.of && (h.clearTimeout(this.of),
        this.of = null)
    }
    ;
    d.Vh = function(a) {
        this.D.C("Request complete");
        var b;
        if (this.ta == a)
            this.Vk(),
            this.ta = null,
            b = 2;
        else if (this.Na == a)
            this.Na = null,
            b = 1;
        else
            return;
        this.od = a.zk();
        if (0 != this.xa)
            if (a.xv())
                1 == b ? (b = a.op() ? a.op().length : 0,
                a = y() - a.Yp(),
                Zh.dispatchEvent(new ai(Zh,b,a,this.Td)),
                this.Jp(),
                this.VI(),
                this.Kc.length = 0) : this.uv();
            else {
                var c = a.Kk();
                if (3 == c || 7 == c || 0 == c && 0 < this.od)
                    this.D.C("Not retrying due to error type");
                else {
                    this.D.C("Maybe retrying, last error: " + Jh(c, this.od));
                    if (1 == b && this.UI(a) || 2 == b && this.Tp())
                        return;
                    this.D.C("Exceeded max number of retries")
                }
                this.D.C("Error: HTTP request failed");
                switch (c) {
                case 1:
                    this.Ab(5);
                    break;
                case 4:
                    this.Ab(10);
                    break;
                case 3:
                    this.Ab(6);
                    break;
                case 7:
                    this.Ab(12);
                    break;
                default:
                    this.Ab(2)
                }
            }
    }
    ;
    d.fx = function(a) {
        var b = this.lA + Math.floor(Math.random() * this.nA);
        this.isActive() || (this.D.C("Inactive channel"),
        b *= 2);
        return b * a
    }
    ;
    d.c$ = function(a, b) {
        this.lA = a;
        this.nA = b
    }
    ;
    d.KJ = function(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            this.Lh = c[0];
            c = c[1];
            2 == this.xa ? "c" == c[0] ? (this.ed = c[1],
            this.Qk = this.hp(c[2]),
            c = c[3],
            null != c ? this.Ie = c : this.Ie = 6,
            this.xa = 3,
            this.w && this.w.Ky(this),
            this.Gv = this.Yv(this.Qk, this.Sp),
            this.uv()) : "stop" == c[0] && this.Ab(7) : 3 == this.xa && ("stop" == c[0] ? this.Ab(7) : "noop" != c[0] && this.w && this.w.Jy(this, c),
            this.gg = 0)
        }
    }
    ;
    d.YN = function(a) {
        if (!F(arguments, this.xa))
            throw Error("Unexpected channel state: " + this.xa);
    }
    ;
    d.Ab = function(a) {
        this.D.info("Error code " + a);
        if (2 == a || 9 == a) {
            var b = null;
            this.w && (b = this.w.SN(this));
            var c = w(this.UN, this);
            b || (b = new Rg("//www.google.com/images/cleardot.gif"),
            b.xg());
            Ph(b.toString(), 1E4, c)
        } else
            T(2);
        this.Gz(a)
    }
    ;
    d.UN = function(a) {
        a ? (this.D.info("Successfully pinged google.com"),
        T(2)) : (this.D.info("Failed to ping google.com"),
        T(1),
        this.Gz(8))
    }
    ;
    d.VI = function() {
        this.w && this.w.jQ(this, this.Kc)
    }
    ;
    d.Gz = function(a) {
        this.D.C("HttpChannel: error - " + a);
        this.xa = 0;
        this.w && this.w.hy(this, a);
        this.Qw();
        this.Ow()
    }
    ;
    d.Qw = function() {
        this.xa = 0;
        this.od = -1;
        if (this.w)
            if (0 == this.Kc.length && 0 == this.pb.length)
                this.w.Bq(this);
            else {
                this.D.C("Number of undelivered maps, pending: " + this.Kc.length + ", outgoing: " + this.pb.length);
                var a = Pa(this.Kc)
                  , b = Pa(this.pb);
                this.Kc.length = 0;
                this.pb.length = 0;
                this.w.Bq(this, a, b)
            }
    }
    ;
    d.Pw = function(a) {
        a = this.gr(null, a);
        this.D.C("GetForwardChannelUri: " + a);
        return a
    }
    ;
    d.yN = function() {
        return this.lO
    }
    ;
    d.sM = function() {
        return this.oO
    }
    ;
    d.Yv = function(a, b) {
        var c = this.gr(this.Uk() ? a : null, b);
        this.D.C("GetBackChannelUri: " + c);
        return c
    }
    ;
    d.gr = function(a, b, c) {
        var e = b instanceof Rg ? b.clone() : new Rg(b,void 0);
        if ("" != e.Zd())
            a && e.Fi(a + "." + e.Zd()),
            e.Gi(c || e.zg());
        else
            var f = window.location
              , e = Zg(f.protocol, null, a ? a + "." + f.hostname : f.hostname, c || f.port, b);
        this.Oi && lg(this.Oi, function(a, b) {
            e.qa(b, a)
        });
        e.qa("VER", this.Ie);
        this.Zh(e);
        return e
    }
    ;
    d.xq = function(a) {
        if (a && !this.ao)
            throw Error("Can't create secondary domain capable XhrIo object.");
        a = new Sh;
        a.yY(this.ao);
        return a
    }
    ;
    Xh.prototype.isActive = function() {
        return !!this.w && this.w.isActive(this)
    }
    ;
    function Mh(a, b) {
        if (!ga(a))
            throw Error("Fn must not be null and must be a function");
        return h.setTimeout(function() {
            a()
        }, b)
    }
    Xh.prototype.lc = function(a) {
        Zh.dispatchEvent(new bi(Zh,a))
    }
    ;
    function T(a) {
        Zh.dispatchEvent(new $h(Zh,a))
    }
    Xh.prototype.Uk = function() {
        return this.ao || !(!H || Vb(10))
    }
    ;
    new Ch(1E3);
    new ih;
    function ci() {}
    d = ci.prototype;
    d.Q5 = null;
    d.zL = function() {
        return 0
    }
    ;
    d.Ky = function() {}
    ;
    d.Jy = function() {}
    ;
    d.jQ = function() {}
    ;
    d.hy = function() {}
    ;
    d.Bq = function() {}
    ;
    d.RA = function() {
        return {}
    }
    ;
    d.SN = function() {
        return null
    }
    ;
    ci.prototype.isActive = function() {
        return !0
    }
    ;
    ci.prototype.WO = function() {}
    ;
    ci.prototype.FQ = function(a) {
        return a
    }
    ;
    function di() {
        this.ac = [];
        this.zc = {}
    }
    z(di, Mc);
    d = di.prototype;
    d.pD = 1;
    d.Cn = 0;
    d.YD = function(a, b, c) {
        var e = this.zc[a];
        e || (e = this.zc[a] = []);
        var f = this.pD;
        this.ac[f] = a;
        this.ac[f + 1] = b;
        this.ac[f + 2] = c;
        this.pD = f + 3;
        e.push(f);
        return f
    }
    ;
    d.r$ = function(a, b, c) {
        var e = this.YD(a, function(a) {
            b.apply(c, arguments);
            this.Yg(e)
        }, this);
        return e
    }
    ;
    d.ZX = function(a, b, c) {
        if (a = this.zc[a]) {
            var e = this.ac;
            if (a = Ma(a, function(a) {
                return e[a + 1] == b && e[a + 2] == c
            }))
                return this.Yg(a)
        }
        return !1
    }
    ;
    d.Yg = function(a) {
        if (0 != this.Cn)
            return this.Di || (this.Di = []),
            this.Di.push(a),
            !1;
        var b = this.ac[a];
        if (b) {
            var c = this.zc[b];
            c && Na(c, a);
            delete this.ac[a];
            delete this.ac[a + 1];
            delete this.ac[a + 2]
        }
        return !!b
    }
    ;
    d.UD = function(a, b) {
        var c = this.zc[a];
        if (c) {
            this.Cn++;
            for (var e = Ra(arguments, 1), f = 0, g = c.length; f < g; f++) {
                var k = c[f];
                this.ac[k + 1].apply(this.ac[k + 2], e)
            }
            this.Cn--;
            if (this.Di && 0 == this.Cn)
                for (; c = this.Di.pop(); )
                    this.Yg(c);
            return 0 != f
        }
        return !1
    }
    ;
    d.clear = function(a) {
        if (a) {
            var b = this.zc[a];
            b && (E(b, this.Yg, this),
            delete this.zc[a])
        } else
            this.ac.length = 0,
            this.zc = {}
    }
    ;
    d.Y = function(a) {
        if (a) {
            var b = this.zc[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.zc)
            a += this.Y(b);
        return a
    }
    ;
    d.I = function() {
        di.h.I.call(this);
        delete this.ac;
        delete this.zc;
        delete this.Di
    }
    ;
    function ei(a, b) {
        Tf.call(this);
        if (ga(a))
            b && (a = w(a, b));
        else if (a && ga(a.handleEvent))
            a = w(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        this.GV = a;
        Gf(this, "tick", w(this.JD, this));
        this.zC()
    }
    z(ei, Tf);
    d = ei.prototype;
    d.rr = 0;
    d.JD = function() {
        if (this.GW()) {
            var a = this.ur();
            24E4 > 2 * a && (a *= 2);
            this.qm(a)
        }
        this.GV()
    }
    ;
    d.zW = function() {
        this.enabled && (this.Bb(),
        this.start(),
        this.JD())
    }
    ;
    d.start = function() {
        ei.h.start.call(this);
        this.rr = y() + this.ur()
    }
    ;
    d.Bb = function() {
        this.rr = 0;
        ei.h.Bb.call(this)
    }
    ;
    d.AW = function() {
        return this.rr
    }
    ;
    d.zC = function() {
        this.Bb();
        var a = 5E3 + 2E4 * Math.random();
        this.qm(a)
    }
    ;
    d.vV = function() {
        this.Bb();
        this.qm(500)
    }
    ;
    d.GW = function() {
        return 500 < this.ur()
    }
    ;
    function fi(a, b) {
        this.Ez = a;
        this.bj = b;
        this.Tg = new di;
        this.Eb = new ei(this.GR,this);
        this.Ba = null
    }
    z(fi, ci);
    d = fi.prototype;
    d.ym = "";
    d.aj = 0;
    d.bn = 0;
    d.Fr = function() {}
    ;
    d.A6 = function() {
        return this.bj
    }
    ;
    d.Bm = function(a, b, c) {
        return this.Tg.YD(a, b, c)
    }
    ;
    d.z$ = function(a, b, c) {
        return this.Tg.ZX(a, b, c)
    }
    ;
    d.Yg = function(a) {
        return this.Tg.Yg(a)
    }
    ;
    d.at = function(a, b) {
        return this.Tg.UD.apply(this.Tg, arguments)
    }
    ;
    d.he = function() {
        return this.Ba
    }
    ;
    d.u6 = function() {
        return {
            firstTestResults: [""],
            secondTestResults: this.Ba.GC(),
            sessionId: this.Ba.Oz(),
            arrayId: this.Ba.Nz()
        }
    }
    ;
    d.oz = function(a) {
        return 2 == a && 401 == this.Ba.DV()
    }
    ;
    d.IA = function(a, b, c) {
        if (!this.Ba || 2 != this.Ba.ud()) {
            this.ym = "";
            this.Eb.Bb();
            this.um = a || null;
            this.aj = b || 0;
            a = this.Ez + "/test";
            b = this.Ez + "/bind";
            var e = new Xh("1",c ? c.firstTestResults : null,c ? c.secondTestResults : null)
              , f = this.Ba;
            f && f.bA(null);
            e.bA(this);
            this.Ba = e;
            f ? ((3 == f.ud() || f.Iz()) && this.Fr("Unexpected state on old channel when reconnecting: " + f.ud()),
            this.Ba.Or(a, b, this.bj, f.Oz(), f.Nz())) : c ? this.Ba.Or(a, b, this.bj, c.sessionId, c.arrayId) : this.Ba.Or(a, b, this.bj)
        }
    }
    ;
    d.y$ = function(a) {
        this.bn = a || 0;
        this.Eb.Bb();
        this.Ba && 0 != this.Ba.ud() && this.Ba.Yy();
        this.bn = 0
    }
    ;
    d.GQ = function(a, b) {
        if (!this.Ba || 0 == this.Ba.ud() || 2 != this.Ba.ud() && 3 != this.Ba.ud() && !this.Eb.enabled)
            this.Fr("Ignoring message: " + a);
        else {
            var c = {
                _sc: a
            };
            b && ub(c, b);
            this.he().PQ(c)
        }
    }
    ;
    d.Ky = function() {
        this.Eb.zC();
        this.um = null;
        this.aj = 0;
        this.at("handlerOpened")
    }
    ;
    d.hy = function(a, b) {
        var c = this.oz(b);
        4 == b || c || (6 == b && this.Eb.vV(),
        this.Eb.start());
        this.at("handlerError", b)
    }
    ;
    d.Bq = function() {
        this.Eb.enabled || this.at("handlerClosed")
    }
    ;
    d.RA = function() {
        var a = {
            v: 2
        };
        this.ym && (a.gsessionid = this.ym);
        0 != this.aj && (a.ui = "" + this.aj);
        0 != this.bn && (a.ui = "" + this.bn);
        this.um && ub(a, this.um);
        return a
    }
    ;
    d.Jy = function(a, b) {
        if ("S" == b[0])
            this.ym = b[1];
        else {
            var c = this.VV(b[0], b[1]);
            this.Tg.UD("handlerMessage", c)
        }
    }
    ;
    d.VV = function(a, b) {
        return new ah(a,b)
    }
    ;
    d.U9 = function(a) {
        (this.bj.loungeIdToken = a) || this.Eb.Bb()
    }
    ;
    d.t7 = function() {
        return this.Eb.enabled ? this.Eb.AW() - y() : NaN
    }
    ;
    d.w9 = function() {
        this.Eb.zW()
    }
    ;
    d.GR = function() {
        this.Eb.Bb();
        this.Ba.Iz() ? this.Eb.start() : this.IA(this.um, this.aj)
    }
    ;
    function gi(a, b, c) {
        fi.call(this, a, {
            device: "LOUNGE_SCREEN",
            id: b.id,
            name: b.name,
            app: b.Yd,
            loungeIdToken: c,
            hasCc: ""
        });
        this.Bn = [];
        this.Bm("handlerOpened", this.FD, this);
        this.Bm("handlerError", this.FD, this)
    }
    z(gi, fi);
    gi.prototype.Fr = function() {}
    ;
    gi.prototype.FD = function() {
        var a = 3 == this.he().ud();
        if (0 < this.Bn.length) {
            var b = this.Bn;
            this.Bn = [];
            E(b, function(b) {
                b(a)
            })
        }
    }
    ;
    gi.prototype.cO = function(a) {
        this.he() && 3 == this.he().ud() ? a(!0) : (this.Bn.push(a),
        this.IA())
    }
    ;
    y();
    function hi(a) {
        "?" == a.charAt(0) && (a = a.substr(1));
        a = a.split("&");
        for (var b = {}, c = 0, e = a.length; c < e; c++) {
            var f = a[c].split("=");
            if (1 == f.length && f[0] || 2 == f.length) {
                var g = va(f[0] || "")
                  , f = va(f[1] || "");
                g in b ? u(b[g]) ? Qa(b[g], f) : b[g] = [b[g], f] : b[g] = f
            }
        }
        return b
    }
    function ii(a) {
        a = hg([], a);
        a[0] = "";
        return a.join("")
    }
    var ji = eg;
    function ki(a, b) {
        var c = a.split("#", 2);
        a = c[0];
        var c = 1 < c.length ? "#" + c[1] : ""
          , e = a.split("?", 2);
        a = e[0];
        var e = hi(e[1] || ""), f;
        for (f in b)
            e[f] = b[f];
        return fg(hg([a], e)) + c
    }
    ;var li = window.yt && window.yt.config_ || {};
    ba("yt.config_", li, void 0);
    ba("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
    ba("yt.msgs_", window.yt && window.yt.msgs_ || {}, void 0);
    function mi(a) {
        var b = arguments;
        if (1 < b.length) {
            var c = b[0];
            li[c] = b[1]
        } else
            for (c in b = b[0],
            b)
                li[c] = b[c]
    }
    function ni(a, b) {
        return a in li ? li[a] : b
    }
    function oi(a, b) {
        ga(a) && (a = pi(a));
        return window.setTimeout(a, b)
    }
    function pi(a) {
        return a && window.yterr ? function() {
            try {
                return a.apply(this, arguments)
            } catch (b) {
                var c = b;
                if (window && window.yterr) {
                    var e = m("yt.www.errors.log");
                    e ? e(c) : (e = ni("ERRORS") || [],
                    e.push(c),
                    mi("ERRORS", e))
                }
                throw b;
            }
        }
        : a
    }
    ;var qi = null;
    "undefined" != typeof XMLHttpRequest ? qi = function() {
        return new XMLHttpRequest
    }
    : "undefined" != typeof ActiveXObject && (qi = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
    }
    );
    function ri(a, b, c, e, f, g, k) {
        var l = qi && qi();
        if ("open"in l) {
            l.onreadystatechange = function() {
                4 == (l && "readyState"in l ? l.readyState : 0) && b && pi(b)(l)
            }
            ;
            c = (c || "GET").toUpperCase();
            e = e || "";
            l.open(c, a, !0);
            g && (l.responseType = g);
            k && (l.withCredentials = !0);
            g = "POST" == c;
            if (f = si(a, f))
                for (var n in f)
                    l.setRequestHeader(n, f[n]),
                    "content-type" == n.toLowerCase() && (g = !1);
            g && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            l.send(e);
            return l
        }
    }
    function si(a, b) {
        b = b || {};
        var c;
        if (c = ni("PAGE_CL"))
            if (c = ni("PAGE_BUILD_TIMESTAMP")) {
                c = void 0;
                c = window.location.href;
                var e = cg(a)[1] || null
                  , f = ji(a);
                e && f ? (e = c,
                c = cg(a),
                e = cg(e),
                c = c[3] == e[3] && c[1] == e[1] && c[4] == e[4]) : c = f ? ji(c) == f && (Number(cg(c)[4] || null) || null) == (Number(cg(a)[4] || null) || null) : !0;
                c = c || ti(a, ["X-YouTube-Page-CL", "X-YouTube-Page-Timestamp"])
            }
        c && (b["X-YouTube-Page-CL"] = ni("PAGE_CL"),
        b["X-YouTube-Page-Timestamp"] = ni("PAGE_BUILD_TIMESTAMP"));
        return b
    }
    function ti(a, b) {
        var c = ni("CORS_HEADER_WHITELIST") || {}
          , e = ji(a);
        if (!e)
            return !0;
        var f = c[e];
        return f ? La(b, function(a) {
            return F(f, a)
        }) : !1
    }
    function ui(a, b) {
        var c = b.format || "JSON";
        b.k0 && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
        var e = b.m0;
        e && (a = ki(a, e));
        var f = b.l0 || "";
        (e = b.Ym) && v(f) && (f = hi(f),
        ub(f, e),
        f = ii(f));
        var g = !1, k, l = ri(a, function(a) {
            if (!g) {
                g = !0;
                k && window.clearTimeout(k);
                var e;
                t: switch (a && "status"in a ? a.status : -1) {
                case 0:
                case 200:
                case 201:
                case 202:
                case 203:
                case 204:
                case 205:
                case 206:
                case 304:
                    e = !0;
                    break t;
                default:
                    e = !1
                }
                var f = null;
                if (e || 400 <= a.status && 500 > a.status)
                    f = vi(c, a);
                if (e)
                    t: {
                        e = f;
                        switch (c) {
                        case "XML":
                            e = 0 == parseInt(e && e.return_code, 10);
                            break t;
                        case "RAW":
                            e = !0;
                            break t
                        }
                        e = !!e
                    }
                var f = f || {}
                  , l = b.context || h;
                e ? b.ce && b.ce.call(l, a, f) : b.onError && b.onError.call(l, a, f);
                b.rV && b.rV.call(l, a, f)
            }
        }, b.method, f, b.headers, b.responseType, b.withCredentials);
        b.sV && 0 < b.timeout && (k = oi(function() {
            g || (g = !0,
            l.abort(),
            window.clearTimeout(k),
            b.sV.call(b.context || h, l))
        }, b.timeout));
        return l
    }
    function vi(a, b) {
        var c = null;
        switch (a) {
        case "JSON":
            var e = b.responseText
              , f = b.getResponseHeader("Content-Type") || "";
            e && 0 <= f.indexOf("json") && (c = Ie(e));
            break;
        case "XML":
            if (e = (e = b.responseXML) ? wi(e) : null)
                c = {},
                e = e.getElementsByTagName("*"),
                E(e, function(a) {
                    c[a.tagName] = xi(a)
                })
        }
        return c
    }
    function wi(a) {
        return a ? (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
    }
    function xi(a) {
        var b = "";
        E(a.childNodes, function(a) {
            b += a.nodeValue
        });
        return b
    }
    ;function yi(a) {
        this.hs = a || new ef("yt.leanback");
        a = this.hs.get("yt_mdx_screen", !0);
        this.ua = new bh(a);
        this.ua.eS() || this.Uz();
        this.CB();
        this.Sg = [];
        this.hn = []
    }
    d = yi.prototype;
    d.Xz = function() {
        return this.ua
    }
    ;
    d.Dj = function(a) {
        if (0 < this.Sg.length)
            this.Sg.push(a);
        else {
            var b = w(function(a) {
                !a && this.ua && (this.ua.$b = "");
                this.hs.aB("yt_mdx_screen", this.ua.$P(), 0, !0);
                a = this.Sg;
                this.Sg = [];
                E(a, function(a) {
                    a(this.ua)
                }, this)
            }, this);
            this.ua ? "" == this.ua.$b ? (this.Sg.push(a),
            this.nB(this.ua.Zb, b)) : a(this.ua) : (this.Sg.push(a),
            this.YP(w(function(a) {
                this.nB(a, b)
            }, this)))
        }
    }
    ;
    d.HV = function(a, b, c, e) {
        this.hn.push(e);
        if (!(1 < this.hn.length)) {
            var f = w(function(a) {
                var b = this.hn;
                this.hn = [];
                E(b, function(b) {
                    b(a)
                })
            }, this);
            this.Dj(w(this.$B, this, a, b, c, w(function(e) {
                e ? f(e) : (this.ua.$b = "",
                this.Dj(w(this.$B, this, a, b, c, f)))
            }, this)))
        }
    }
    ;
    d.UX = function(a, b) {
        this.Dj(w(this.hY, this, a, !0, b))
    }
    ;
    d.$V = function(a, b) {
        var c = b;
        60 < c ? c = 60 * Math.floor((5 + c) / 60) : 10 < c && (c = 10 * Math.floor((1 + c) / 10));
        this.Dj(w(this.mY, this, a, c))
    }
    ;
    d.Uz = function() {
        this.hs.remove("yt_mdx_screen");
        this.ua = null
    }
    ;
    d.yj = function(a, b) {
        var c = Number(cg(document.location.href)[4] || null) || null || "";
        c && (c = ":" + c);
        c = "https://" + eg(document.location.href) + c + a;
        return fg(hg([c], b || {}))
    }
    ;
    d.CB = function() {
        this.ua && (this.ua.$b = "");
        oi(w(this.CB, this), 864E5)
    }
    ;
    d.YP = function(a) {
        ui(this.yj("/api/lounge/pairing/generate_screen_id"), {
            method: "GET",
            format: "RAW",
            ce: function(b) {
                a(b.responseText)
            },
            onError: na(a, "")
        })
    }
    ;
    d.$B = function(a, b, c, e) {
        a = {
            lounge_token: this.ua.$b,
            access_type: a ? "permanent" : "temporary",
            screen_id: this.ua.Zb || "",
            screen_name: b
        };
        ui(this.yj("/api/lounge/pairing/get_pairing_code", {
            ctx: c
        }), {
            Ym: a,
            method: "POST",
            format: "RAW",
            ce: function(a) {
                e(a.responseText)
            },
            onError: na(e, "")
        })
    }
    ;
    d.hY = function(a, b, c) {
        ui(this.yj("/api/lounge/pairing/register_pairing_code"), {
            Ym: {
                screen_id: this.ua.Zb,
                pairing_code: a,
                access_type: b ? "permanent" : "temporary"
            },
            method: "POST",
            format: "RAW",
            ce: w(c, this, !0),
            onError: w(c, this, !1)
        })
    }
    ;
    d.mY = function(a, b) {
        ui(this.yj("/api/lounge/pairing/unregister_pairing_code", {
            s: b
        }), {
            Ym: {
                screen_id: this.ua.Zb,
                pairing_code: a
            },
            method: "POST"
        })
    }
    ;
    d.nB = function(a, b) {
        var c = w(function(c) {
            c = He(c.responseText);
            var f = !1;
            c.screens && E(c.screens, function(b) {
                b.screenId == a && (this.ua ? this.ua.$b = b.loungeToken : this.ua = new bh(b),
                f = !0)
            }, this);
            b(f)
        }, this);
        ui(this.yj("/api/lounge/pairing/get_lounge_token_batch"), {
            Ym: {
                screen_ids: a
            },
            method: "POST",
            ce: c,
            onError: na(b, !1)
        })
    }
    ;
    function zi(a, b, c) {
        this.videoId = a;
        this.reason = b;
        this.error = c
    }
    zi.prototype.dn = function() {
        return {
            videoId: this.videoId,
            reason: this.reason,
            error: this.error
        }
    }
    ;
    function Ai(a, b, c, e, f) {
        this.Xx = e;
        this.Tk = c;
        this.S = b;
        this.Ag = f;
        this.af = new yi(a);
        this.nr = "";
        this.Ty = 0;
        this.w = null;
        this.Re = {};
        this.zp = !1;
        this.di = !0
    }
    d = Ai.prototype;
    d.Jl = function() {
        var a = [], b;
        for (b in this.Re)
            a.push(b);
        return a.sort()
    }
    ;
    d.dz = function(a) {
        this.Ag = a;
        this.w && this.w.he().Sz(a ? {
            Authorization: "OAuth " + a
        } : {})
    }
    ;
    d.oq = function() {
        return !!this.Ag
    }
    ;
    d.iU = function() {
        return this.w ? this.af.Xz().Zb || null : null
    }
    ;
    d.Rz = function(a) {
        this.af.Dj(a)
    }
    ;
    d.fB = function(a) {
        this.Rz(w(this.RY, this, a || p))
    }
    ;
    d.Br = function() {
        this.w && (this.w.he().HA(),
        this.w.he().Yy(),
        this.w = null);
        this.Re = {}
    }
    ;
    d.kO = function() {
        this.Br();
        this.af.Uz();
        this.Tk.G("remote:status", [])
    }
    ;
    d.jU = function(a, b) {
        this.af.HV(!0, this.Xx.name, a, w(function(a) {
            this.nr = a;
            this.Ty = y();
            b(a)
        }, this))
    }
    ;
    d.kU = function() {
        var a = this.nr;
        if (a) {
            this.nr = "";
            var b = Math.floor((y() - this.Ty) / 1E3);
            300 > b && this.af.$V(a, b)
        }
    }
    ;
    d.yT = function(a, b) {
        this.af.UX(a, b)
    }
    ;
    d.uI = function(a) {
        var b = a;
        -1E3 == a && (b = -1);
        var b = {
            currentTime: this.S.Mf(),
            state: b
        }, c;
        -1E3 == a && (c = this.S.SA(),
        b.currentError = O(c.dn()));
        this.tc("onStateChange", b);
        -1E3 == a && this.tc("onError", {
            errors: O([c.dn()])
        })
    }
    ;
    d.nw = function() {
        this.cx()
    }
    ;
    d.Ku = function(a, b) {
        this.tc("onVolumeChanged", {
            volume: a,
            muted: b
        }, !0)
    }
    ;
    d.ov = function(a) {
        this.bx(a || [])
    }
    ;
    d.zr = function(a) {
        for (var b = [], c = 0, e = a.length; c < e; ++c)
            b.push(a[c].dn());
        return O(b)
    }
    ;
    d.ev = function(a) {
        this.tc("onError", {
            errors: this.zr(a)
        })
    }
    ;
    d.Wv = function(a, b) {
        var c = {
            videoId: a
        };
        if (b && !pb(b)) {
            var e = b.languageCode || "";
            ub(c, {
                trackName: b.name || "",
                languageCode: e,
                sourceLanguageCode: b.sourceLanguageCode || e,
                languageName: b.languageName,
                format: b.format || 1,
                kind: b.kind || ""
            })
        }
        this.tc("onSubtitlesTrackChanged", c)
    }
    ;
    d.Z6 = function() {
        this.tc("getLoungeStatus")
    }
    ;
    d.MS = function(a, b) {
        this.tc("updateUser", {
            username: a,
            authToken: b
        }, !0)
    }
    ;
    d.tc = function(a, b, c) {
        (c || this.zp) && this.w && this.w.GQ(a, b)
    }
    ;
    d.cx = function(a, b) {
        if (this.w) {
            var c = {}
              , e = this.S.Bp()
              , f = this.S.Mb();
            if (f || e.length)
                f && 0 > e.indexOf(f) && console.warn("MDx send nowPlaying: Queue does not contain current video: " + f + " not in " + O(e)),
                this.gz(c);
            this.fz(c, a);
            this.tc("nowPlaying", c, b)
        }
    }
    ;
    d.bx = function(a, b, c) {
        if (this.w) {
            var e = {}
              , f = this.S.Bp()
              , g = this.S.vN()
              , k = this.S.Mb();
            if (k || 0 < f.length)
                k && 0 > f.indexOf(k) && (console.warn("MDx send nowPlayingPlaylist: Queue does not contain current video: " + k + " not in " + O(f) + ". Adding to the end of queue."),
                f = Pa(f),
                f.push(k),
                g.push("x-missing")),
                e.video_ids = f.join(","),
                g.length == f.length ? e.videoSources = g.join(",") : console.warn("MDx send nowPlayingPlaylist: Sources and playlist length differ. " + g.length + " != " + f.length),
                this.gz(e),
                a.length && (e.errors = this.zr(a));
            this.fz(e, b);
            this.tc("nowPlayingPlaylist", e, c)
        }
    }
    ;
    d.RY = function(a, b) {
        b && !this.w ? (this.w = new gi("/api/lounge/bc",this.Xx,b.$b),
        this.w.Bm("handlerMessage", this.dO, this),
        this.w.Bm("handlerError", function(a) {
            this.w.oz(a) && this.eO()
        }, this),
        this.w.cO(a),
        this.Ag && this.w.he().Sz({
            Authorization: "OAuth " + this.Ag
        })) : a(!!this.w)
    }
    ;
    d.eO = function() {
        this.Ag && (this.Ag = null,
        this.af.Xz().$b = "",
        this.Br(),
        this.fB())
    }
    ;
    d.dO = function(a) {
        var b = a.params || {};
        switch (a.kJ) {
        case "play":
            this.S.Kp();
            break;
        case "pause":
            this.S.pause();
            break;
        case "seekTo":
            this.S.aw(this.tq(b));
            break;
        case "stopVideo":
            this.S.Yu();
            break;
        case "setVideo":
            var c = this.uq(b)
              , e = this.tq(b)
              , b = this.S.Bp()
              , f = b.indexOf(c);
            0 <= f ? this.S.jJ(c, f, e) : console.warn("MDx received setVideo without currently playing video: " + c + " not in " + O(b));
            this.di = !1;
            break;
        case "setPlaylist":
            var c = this.$w(b)
              , e = this.tq(b)
              , g = parseInt(b.currentIndex, 10)
              , f = this.ax(b)
              , b = this.Zw(b);
            isNaN(g) && (g = 0);
            this.S.Pp(w(this.Yw, this), c, f, b, g, e, this.di);
            this.di = !1;
            break;
        case "updatePlaylist":
            c = this.$w(b);
            f = this.ax(b);
            b = this.Zw(b);
            e = !0;
            (g = this.S.Mb()) && (e = 0 <= c.indexOf(g));
            e ? this.S.Pp(w(this.Yw, this), c, f, b) : console.warn("MDx received updatePlaylist without currently playing video: " + g + " not in " + O(c));
            this.di = !1;
            this.tc("confirmPlaylistUpdate", {
                updated: e
            });
            break;
        case "setVolume":
            e = this.S.iq();
            c = parseInt(b.volume, 10) || 0;
            "delta"in b && (f = parseInt(b.delta, 10),
            0 <= e && !isNaN(f) && (c = Math.max(0, Math.min(e + f, 100))));
            this.S.bw(c);
            "true" == b.muted || "1" == b.muted ? this.S.$v() : this.S.cw();
            break;
        case "getVolume":
            this.Ku(this.S.iq(), this.S.Zk());
            break;
        case "setSubtitlesTrack":
            e = this.S.Mb();
            c = this.uq(b) || e;
            if (c == e) {
                f = {};
                if (b.trackName || b.languageCode)
                    f.name = b.trackName,
                    f.languageName = b.languageName,
                    f.languageCode = b.languageCode,
                    f.format = parseInt(b.format, 10) || 1,
                    f.kind = b.kind;
                this.S.iJ(c, f)
            }
            break;
        case "getSubtitlesTrack":
            f = this.S.Vv();
            e = this.S.Mb();
            c = this.uq(b) || e;
            c != e && (f = null);
            this.Wv(c, f);
            break;
        case "getNowPlaying":
            this.cx(a, !0);
            break;
        case "getPlaylist":
            this.S.fJ(w(function(b) {
                this.bx(b, a, !0)
            }, this));
            break;
        case "remoteConnected":
            e = new Pg(He(b.device));
            b = !!b.ui;
            this.zp = !0;
            pb(this.Re) && b && (this.di = !0);
            this.Re[e.id] = e.Yd;
            this.Tk.G("remote:connected", e, b);
            break;
        case "remoteDisconnected":
            e = new Pg(He(b.device));
            b = !!b.ui;
            delete this.Re[e.id];
            this.Tk.G("remote:disconnected", e, b);
            break;
        case "loungeStatus":
            c = [];
            b = He(b.devices);
            if (u(b))
                for (f = 0,
                g = b.length; f < g; ++f)
                    e = new Pg(b[f]),
                    "REMOTE_CONTROL" == e.type && c.push(e);
            this.gJ(c);
            this.Tk.G("remote:status", c)
        }
    }
    ;
    d.fz = function(a, b) {
        b && b.params && b.params.recipientDevice && (a.recipientDevice = b.params.recipientDevice)
    }
    ;
    d.uq = function(a) {
        return a.videoId || a.video_id || ""
    }
    ;
    d.$w = function(a) {
        a = a.videoIds || a.video_ids || "";
        return 0 < a.length ? a.split(",") : []
    }
    ;
    d.ax = function(a) {
        a = a.videoSources || "";
        return 0 < a.length ? a.split(",") : []
    }
    ;
    d.Zw = function(a) {
        var b = a.vvts || "";
        a = {};
        if (0 < b.length)
            for (var b = b.split(","), c = 0, e = b.length; c < e; ++c) {
                var f = b[c].split(":");
                a[f[0]] = f[1]
            }
        return a
    }
    ;
    d.tq = function(a) {
        a = parseFloat(a.currentTime || a.newTime);
        if (isNaN(a) || 0 > a)
            a = 0;
        return a
    }
    ;
    d.gJ = function(a) {
        this.Re = {};
        for (var b = 0, c = a.length; b < c; ++b)
            this.zp = !0,
            this.Re[a[b].id] = a[b].Yd
    }
    ;
    d.gz = function(a) {
        var b = this.S.Mb();
        if (b) {
            var c = this.S.ci()
              , e = c;
            -1E3 == c && (e = -1);
            a.video_id = b;
            a.current_time = this.S.Mf();
            a.state = e;
            -1E3 == c && (b = this.S.SA(),
            a.currentError = O(b.dn()))
        }
    }
    ;
    d.Yw = function(a) {
        a.length && this.tc("onError", {
            errors: this.zr(a)
        })
    }
    ;
    var Bi = m("yt.dom.getNextId_");
    if (!Bi) {
        Bi = function() {
            return ++Ci
        }
        ;
        ba("yt.dom.getNextId_", Bi, void 0);
        var Ci = 0
    }
    ;function Di(a) {
        if (a = a || window.event) {
            for (var b in a)
                b in Ei || (this[b] = a[b]);
            this.scale = a.scale;
            this.rotation = a.rotation;
            this.Xc = a;
            (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
            this.target = b;
            if (b = a.relatedTarget)
                try {
                    b = b.nodeName && b
                } catch (c) {
                    b = null
                }
            else
                "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
            this.relatedTarget = b;
            this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode ? a.keyCode : a.which;
            this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
            this.altKey = a.altKey;
            this.ctrlKey = a.ctrlKey;
            this.shiftKey = a.shiftKey;
            "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0,
            this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform"in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30,
            this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2,
            this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0,
            this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3,
            this.wheelDeltaY = a.wheelDeltaY / -3);
            this.qt = a.pageX;
            this.rt = a.pageY
        }
    }
    d = Di.prototype;
    d.qE = function() {
        if (document.body && document.documentElement) {
            var a = document.body.scrollTop + document.documentElement.scrollTop;
            this.qt = this.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
            this.rt = this.clientY + a
        }
    }
    ;
    d.j7 = function() {
        t(this.qt) || this.qE();
        return this.qt
    }
    ;
    d.k7 = function() {
        t(this.rt) || this.qE();
        return this.rt
    }
    ;
    d.Xc = null;
    d.type = "";
    d.target = null;
    d.relatedTarget = null;
    d.currentTarget = null;
    d.data = null;
    d.source = null;
    Di.prototype.state = null;
    d = Di.prototype;
    d.keyCode = 0;
    d.charCode = 0;
    d.altKey = !1;
    d.ctrlKey = !1;
    d.shiftKey = !1;
    d.clientX = 0;
    d.clientY = 0;
    d.wheelDeltaX = 0;
    d.wheelDeltaY = 0;
    d.rotation = 0;
    d.scale = 1;
    d.x$ = null;
    d.changedTouches = null;
    d.preventDefault = function() {
        this.Xc.returnValue = !1;
        this.Xc.preventDefault && this.Xc.preventDefault()
    }
    ;
    d.stopPropagation = function() {
        this.Xc.cancelBubble = !0;
        this.Xc.stopPropagation && this.Xc.stopPropagation()
    }
    ;
    d.stopImmediatePropagation = function() {
        this.Xc.cancelBubble = !0;
        this.Xc.stopImmediatePropagation && this.Xc.stopImmediatePropagation()
    }
    ;
    d.B8 = function() {
        return this.altKey || this.ctrlKey || this.shiftKey
    }
    ;
    var Ei = {
        stopImmediatePropagation: 1,
        stopPropagation: 1,
        preventMouseEvent: 1,
        preventManipulation: 1,
        preventDefault: 1,
        layerX: 1,
        layerY: 1,
        scale: 1,
        rotation: 1
    };
    var Fi = m("yt.events.listeners_") || {};
    ba("yt.events.listeners_", Fi, void 0);
    var Gi = m("yt.events.counter_") || {
        count: 0
    };
    ba("yt.events.counter_", Gi, void 0);
    function Hi(a, b, c, e) {
        return ob(Fi, function(f) {
            return f[0] == a && f[1] == b && f[2] == c && f[4] == !!e
        })
    }
    function Ii(a, b, c, e) {
        if (!a || !a.addEventListener && !a.attachEvent)
            return "";
        e = !!e;
        var f = Hi(a, b, c, e);
        if (f)
            return f;
        var f = ++Gi.count + "", g = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter"in document), k;
        k = g ? function(e) {
            e = new Di(e);
            if (!Ic(e.relatedTarget, function(b) {
                return b == a
            }, !0))
                return e.currentTarget = a,
                e.type = b,
                c.call(a, e)
        }
        : function(b) {
            b = new Di(b);
            b.currentTarget = a;
            return c.call(a, b)
        }
        ;
        k = pi(k);
        Fi[f] = [a, b, c, k, e];
        a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover", k, e) : "mouseleave" == b && g ? a.addEventListener("mouseout", k, e) : "mousewheel" == b && "MozBoxSizing"in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", k, e) : a.addEventListener(b, k, e) : a.attachEvent("on" + b, k);
        return f
    }
    ;var Ji = {
        "-1000": 0,
        "-1": 1,
        0: 1,
        1: 2,
        2: 1,
        3: 2,
        5: 1,
        1081: 1
    };
    function Ki(a) {
        this.Ya = a;
        this.zm = 0;
        this.wd = null;
        this.mB = "";
        this.Qs = new cast.receiver.Receiver("YouTube",["ramp"]);
        this.pn = new cast.receiver.ChannelHandler("ramp");
        this.pn.addChannelFactory(this.Qs.createChannelFactory("ramp"));
        Ii(this.pn, cast.receiver.Channel.EventType.OPEN, w(this.PR, this));
        Ii(this.pn, cast.receiver.Channel.EventType.MESSAGE, w(this.OR, this));
        this.Qs.start()
    }
    d = Ki.prototype;
    d.To = function(a) {
        this.mB = a;
        var b = this.Qs.getConnectionService();
        b.isConnected() && (a ? b.setAppData('<additionalData xmlns="http://www.youtube.com/dial"><screenId>' + a + "</screenId></additionalData>") : b.setAppData(""))
    }
    ;
    d.PR = function(a) {
        this.Qg(a.target, {
            cmd_id: 0,
            type: "STATUS",
            status: this.Pg()
        });
        this.To(this.mB)
    }
    ;
    d.OR = function(a) {
        var b = a.target;
        a = a.message;
        t(a.cmd_id) && t(a.type) && this.QZ(b, a)
    }
    ;
    d.Qg = function(a, b) {
        try {
            a.send(b)
        } catch (c) {}
    }
    ;
    d.OD = function(a) {
        for (var b = this.pn.getChannels(), c = b.length, e = 0; e < c; ++e)
            b[e].isOpen() && this.Qg(b[e], a)
    }
    ;
    d.Sr = function() {
        var a = this.Ya.iq();
        return 0 <= a ? a / 100 : 1
    }
    ;
    d.Pg = function(a, b) {
        var c = this.Ya.Mb()
          , e = t(a) ? a : this.Ya.ci();
        if (!ha(this.wd) || !c || this.wd.content_id != c)
            return {
                event_sequence: this.zm++,
                state: 0,
                muted: this.Ya.Zk(),
                volume: this.Sr()
            };
        if (-1E3 == e)
            return {
                event_sequence: this.zm++,
                content_id: this.Ya.Mb(),
                state: 0,
                error: {
                    domain: "YouTube.MDx",
                    code: 2
                }
            };
        var f = Ji[e] || 0
          , c = {
            event_sequence: this.zm++,
            state: f,
            content_id: c,
            current_time: this.Ya.Mf(),
            duration: this.wd.duration,
            muted: this.Ya.Zk(),
            time_progress: 1 == e,
            title: this.wd.title,
            volume: this.Sr()
        };
        this.wd.thumbnail_url && (c.image_url = this.wd.thumbnail_url);
        ha(b) && ub(c, b);
        return c
    }
    ;
    d.wy = function(a) {
        this.OD({
            cmd_id: 0,
            type: "STATUS",
            status: this.Pg(a)
        })
    }
    ;
    d.pE = function(a) {
        this.wd = a || null;
        this.OD({
            cmd_id: 0,
            type: "STATUS",
            status: this.Pg()
        })
    }
    ;
    d.QZ = function(a, b) {
        switch (b.type) {
        case "PLAY":
            var c = this.Ya.ci()
              , e = 3;
            this.wd && t(b.position) && fa(b.position) ? (Math.max(0, Math.min(b.position, this.wd.duration)),
            this.Ya.aw(b.position),
            2 == c && this.Ya.Kp()) : this.Ya.Kp();
            if (2 == c || 1 == c)
                e = 1;
            this.Qg(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: this.Pg(e)
            });
            break;
        case "STOP":
            this.Ya.pause();
            break;
        case "INFO":
            this.Qg(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: this.Pg()
            });
            break;
        case "VOLUME":
            c = this.Sr();
            t(b.volume) && fa(b.volume) && (this.Ya.bw(Math.round(100 * b.volume)),
            c = b.volume);
            e = this.Ya.Zk();
            t(b.muted) && (b.muted ? this.Ya.$v() : this.Ya.cw(),
            e = b.muted);
            this.Qg(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: this.Pg(void 0, {
                    volume: c,
                    muted: e
                })
            });
            break;
        default:
            this.Qg(a, {
                cmd_id: b.cmd_id,
                type: "RESPONSE",
                status: {
                    event_sequence: this.zm++,
                    original_operation: b.type,
                    error: {
                        domain: "YouTube.MDx",
                        code: 1
                    }
                }
            })
        }
    }
    ;
    function Li(a, b) {
        this.TW = b.fc && b.isLimitedGraphics ? "http:" : a.location.protocol
    }
    Li.prototype.$c = function(a) {
        return a ? this.LE(this.eZ(a), "i", "1") : ""
    }
    ;
    Li.prototype.Rk = function(a, b) {
        return this.LE(a, "vi", b)
    }
    ;
    Li.prototype.LE = function(a, b, c) {
        return this.TW + "//i1.ytimg.com/" + b + "/" + a + "/" + c + ".jpg"
    }
    ;
    Li.prototype.eZ = function(a) {
        return 24 == a.length ? a.substr(2) : a
    }
    ;
    Li.inject = ["$window", "environmentModel"];
    function Mi(a, b, c) {
        this.videoId = a || "";
        this.playlistId = b || "";
        this.browseId = c || ""
    }
    ;function Ni(a, b) {
        Og.call(this);
        this.Hl = a;
        this.Si = {};
        b && this.push(b)
    }
    z(Ni, Og);
    d = Ni.prototype;
    d.clear = function() {
        this.Si = {};
        Ni.h.clear.call(this)
    }
    ;
    d.slice = function(a, b) {
        return new Ni(this.Hl,Ni.h.slice.call(this, a, b).ba())
    }
    ;
    d.push = function(a) {
        Ni.h.push.call(this, this.Az(a))
    }
    ;
    d.unshift = function(a) {
        Ni.h.unshift.call(this, this.Az(a, !0))
    }
    ;
    d.Az = function(a, b) {
        return (u(a) ? a : [a]).filter(b ? this.nZ : this.kZ, this)
    }
    ;
    d.kZ = function(a) {
        if ((a = a && a[this.Hl]) && this.Si[a])
            return !1;
        a && (this.Si[a] = !0);
        return !0
    }
    ;
    d.nZ = function(a) {
        if (a = a && a[this.Hl]) {
            if (this.Si[a]) {
                var b = this.AT(a);
                if (0 > b)
                    return !1;
                this.ia.splice(b, 1);
                this.length = this.ia.length
            }
            this.Si[a] = !0
        }
        return !0
    }
    ;
    d.AT = function(a) {
        for (var b = 0; b < this.H(); ++b)
            if (this.ia[b][this.Hl] === a)
                return b;
        return -1
    }
    ;
    function U() {
        this.title = this.serviceQuery = this.oa = this.Ka = this.Pk = this.Oe = "";
        this.Ee = 0;
        this.A = new Ni("videoId")
    }
    U.prototype.H = function() {
        return this.A.H()
    }
    ;
    U.prototype.clone = function() {
        var a = new U;
        a.Oe = this.Oe;
        a.Pk = this.Pk;
        a.Ka = this.Ka;
        a.oa = this.oa;
        a.serviceQuery = this.serviceQuery;
        a.title = this.title;
        a.Ee = this.Ee;
        a.A = this.A.slice(0, this.A.H());
        return a
    }
    ;
    function Oi() {
        K.call(this);
        this.model = new U;
        this.service = null;
        this.xj = this.activeIndex = 0;
        this.jf = new Mi;
        this.widgetName = "videotile"
    }
    z(Oi, K);
    me(Oi, ["activeIndex", "model"]);
    function Pi(a, b, c, e, f, g) {
        var k = new Oi;
        Qi(k, a, b, c, e, f, g);
        return k
    }
    function Qi(a, b, c, e, f, g, k) {
        a.service = b;
        a.model.title = c || "";
        a.model.Ta = e;
        a.model.oa = b.id;
        a.model.serviceQuery = f || "";
        a.jf = g || a.jf;
        a.widgetName = k || a.widgetName;
        return a
    }
    d = Oi.prototype;
    d.H = function() {
        return this.model ? this.model.A.H() : 0
    }
    ;
    d.iS = function(a) {
        this.model.serviceQuery = a.model.serviceQuery;
        this.model.oa = a.model.oa;
        this.model.title = a.model.title;
        this.model.Ta = a.model.Ta;
        this.service = a.service;
        this.jf = a.jf;
        this.widgetName = a.widgetName;
        return this
    }
    ;
    d.equals = function(a) {
        return !!(a && a.model && this.model && a.model.H() === this.model.H() && a.model.serviceQuery === this.model.serviceQuery && a.model.title === this.model.title)
    }
    ;
    d.Ae = function() {
        return this.$(this.activeIndex)
    }
    ;
    d.load = function(a, b) {
        var c = {
            query: this.model.serviceQuery
        };
        x(c, this.jf);
        b && this.service.Mc && this.service.Mc("start_browse", "fr_rq", "fr_rs", "fr_r");
        this.service.load(c, w(function(b) {
            b.$a && (this.$a = b.$a);
            this.clear();
            this.model.A.push(b.A.ba());
            a && a(b)
        }, this))
    }
    ;
    d.clear = function() {
        this.model.A.clear()
    }
    ;
    d.$ = function(a) {
        return this.model && this.model.A ? this.model.A.$(a) : null
    }
    ;
    d.Cr = function(a, b) {
        var c = -1;
        this.model && this.model.A && this.model.A.ba().some(function(e, f) {
            if (e[a] === b)
                return c = f,
                !0
        });
        return c
    }
    ;
    d.jy = function() {
        return this.model.A
    }
    ;
    d.Rq = function(a) {
        this.xj += a
    }
    ;
    d.Rl = function() {
        return !1
    }
    ;
    d.Oa = function(a) {
        this.activeIndex = a
    }
    ;
    function Ri() {
        this.Va = [];
        this.Qh = [];
        this.lC = !0;
        this.numLoadedPages = 0;
        this.mw = null;
        Oi.call(this)
    }
    z(Ri, Oi);
    me(Ri, ["numLoadedPages"]);
    function Si(a, b, c, e, f, g) {
        var k = new Ri;
        Qi(k, a, b, c, e, f, g);
        return k
    }
    d = Ri.prototype;
    d.clear = function() {
        this.SL();
        for (var a = 0, b = this.Va.length; a < b; ++a)
            this.Va[a] && (this.Va[a].jd = null);
        a = 0;
        for (b = this.Qh.length; a < b; ++a) {
            var c = this.Qh[a];
            c.Uf && (c.Uf.cancel && c.Uf.cancel(),
            c.Uf = null)
        }
        this.numLoadedPages = 0;
        Ri.h.clear.call(this)
    }
    ;
    d.uQ = function(a) {
        this.mw = a
    }
    ;
    d.SL = function() {
        for (var a = this.ml() - 2; 0 <= a; --a)
            this.Va[a].jd && (this.activeIndex -= this.Va[a].dl)
    }
    ;
    d.iw = function(a) {
        return a.every(function(a) {
            a = this.Va[a.index];
            return !(!a || !a.jd || a.error)
        }, this)
    }
    ;
    d.load = function(a, b) {
        var c = this.KS()
          , e = a || p;
        if (this.iw(c))
            e();
        else {
            var f, g = !!b;
            this.Qh = c;
            for (var k = 0, l = c.length; k < l; ++k) {
                var n = c[k];
                (f = this.Va[n.index]) && f.jd && !f.error || this.LS(n, c, e, g);
                g && (g = !1)
            }
        }
    }
    ;
    d.LS = function(a, b, c, e) {
        var f = {
            query: this.model.serviceQuery
        };
        f["start-index"] = 25 * a.index + 1;
        f["max-results"] = 25;
        x(f, this.jf);
        e && this.service.Mc && this.service.Mc("start_browse", "fr_rq", "fr_rs", "fr_r");
        a.Uf = this.service.load(f, w(this.Gl, this, a, b, c), w(this.UT, this, a, b, c))
    }
    ;
    d.Gl = function(a, b, c, e) {
        a.Uf = null;
        a.jd = e;
        a.dl = e.A.H();
        this.Va[a.index] = a;
        a.error = !1;
        if (this.iw(b)) {
            a = this.model.A;
            if (0 === a.H())
                for (var f = 0, g = b.length; f < g; ++f) {
                    var k = this.Va[b[f].index];
                    a.push(k.jd.A.ba())
                }
            else
                for (var l = this.ml(), f = 0, g = b.length; f < g; ++f)
                    k = this.Va[b[f].index],
                    k.index >= l ? a.push(k.jd.A.ba()) : (a.unshift(k.jd.A.ba()),
                    this.activeIndex += k.dl);
            this.numLoadedPages += b.length;
            this.Qh = [];
            c()
        }
        this.model.title || (e.Oe && "UU" == e.Ka ? (this.model.title = e.Oe,
        this.model.Ta = this.mw.$c(e.Pk),
        this.G("model:changed", this.model)) : e.title && (this.model.title = e.title,
        this.G("model:changed", this.model)))
    }
    ;
    d.UT = function(a, b, c) {
        this.Gl(a, b, c, new U);
        this.Va[a.index].error = !0;
        b.some(function(a) {
            return this.Va[a.index].error
        }, this) && (this.Qh = [],
        c())
    }
    ;
    d.ml = function() {
        if (0 === this.xj)
            return 0;
        for (var a = 0, b = this.Va.length, c, e = 0; e < b; ++e)
            if (c = this.Va[e])
                if (a += c.dl,
                this.xj < a)
                    return c.index;
        return 0
    }
    ;
    d.y6 = function() {
        return this.Va[this.ml()]
    }
    ;
    d.KS = function() {
        var a = this.lC ? [this.Pn()] : [this.Pn(-1), this.Pn(), this.Pn(1)];
        this.lC = !1;
        return a.filter(function(a) {
            return 0 <= a.index && (a.error || !a.jd)
        })
    }
    ;
    d.Pn = function(a) {
        a = a || 0;
        a = this.ml() + a;
        var b = this.Va[a];
        return b ? b : new Ti(a)
    }
    ;
    d.Rl = function(a) {
        return 0 < a ? this.activeIndex === this.H() - 4 : 4 === this.activeIndex && 4 < this.xj
    }
    ;
    function Ti(a) {
        this.jd = null;
        this.dl = 0;
        this.Uf = null;
        this.index = a
    }
    ;function Ui() {
        K.call(this);
        this.timeLeft = this.percentagePlayed = this.percentageLoaded = this.percentagePlayedStyle = this.percentageLoadedStyle = this.duration = this.currentTime = 0
    }
    z(Ui, K);
    me(Ui, "currentTime duration percentageLoadedStyle percentagePlayedStyle percentageLoaded percentagePlayed timeLeft".split(" "));
    function Vi() {
        Ri.call(this);
        this.Qp = [];
        this.Zl = NaN
    }
    z(Vi, Ri);
    function Wi(a, b, c, e, f, g) {
        var k = new Vi;
        Qi(k, a, b, c, e, f, g);
        return k
    }
    Vi.prototype.kp = function(a) {
        this.Qp.push(a)
    }
    ;
    Vi.prototype.TP = function(a) {
        this.Zl = a
    }
    ;
    Vi.prototype.Gl = function(a, b, c, e) {
        var f = w(function() {
            this.jy().unshift(this.Qp);
            !isNaN(this.Zl) && this.Zl < this.H() && this.jy().splice(this.Zl);
            c()
        }, this);
        Vi.h.Gl.call(this, a, b, f, e)
    }
    ;
    function Xi() {
        this.PT = this.kn = this.JA = this.dm = this.Bs = "";
        this.Wy = !1
    }
    Xi.CACHE_TYPE = "branding";
    function Yi(a, b) {
        this.imageUrl = "";
        this.oa = a;
        this.serviceQuery = b;
        this.displayName = this.videoId = this.title = "";
        this.V_ = null;
        this.W_ = "";
        this.IQ = 0;
        this.id = this.username = this.zb = this.X_ = "";
        this.viewCount = this.Y_ = 0;
        this.er = new Xi;
        this.Pb = !1
    }
    Yi.CACHE_TYPE = "channel";
    function Zi(a) {
        this.dD = a;
        this.Qj = this.dD.get("captions-settings") || {}
    }
    Zi.prototype.JR = function() {
        return this.Qj && this.Qj.cD ? this.Qj.cD : 3
    }
    ;
    Zi.prototype.aC = function(a) {
        this.Qj.cD = a;
        this.dD.Ra("captions-settings", this.Qj)
    }
    ;
    Zi.inject = ["localStorage"];
    function $i(a, b, c) {
        this.oa = a;
        this.serviceQuery = b;
        this.Ka = c;
        this.sw = this.RI();
        this.Jo = null;
        this.fp = "request-playback";
        this.Yc = "";
        this.cv = !1;
        this.Eh = null;
        this.zh = this.fo = "";
        this.channel = null;
        this.dislikesLabel = this.description = "";
        this.dislikesStyle = {};
        this.duration = 0;
        this.Nb = null;
        this.imageUrl = Q.g + "/../img/no_thumbnail.jpg";
        this.iv = this.Po = !1;
        this.likesLabel = "";
        this.likesStyle = {};
        this.Ev = null;
        this.videoId = this.title = this.uploadedDateLabel = "";
        this.viewCount = 0;
        this.viewCountLabel = "";
        this.Ap = this.Pb = !1
    }
    $i.prototype.RI = function() {
        return he[this.Ka] ? this.Ka : this.Ka + (this.serviceQuery || "")
    }
    ;
    $i.CACHE_TYPE = "video";
    function aj(a, b) {
        this.Ej = a;
        this.DR = b;
        this.video = null;
        this.startTime = 0;
        this.Ye = !1
    }
    aj.prototype.XL = function(a, b, c) {
        var e = {
            list: this.video.sw,
            start: this.startTime,
            video_id: this.video.videoId
        };
        e.dash = rg(this.Ej.supportsDash) ? "1" : "0";
        var f;
        f = this.Ej.supportsNetworkRetry && !!this.Ej.Rp("network_retry");
        f = rg(f) ? "1" : "0";
        e.retryneterr = f;
        e.cenchd = rg(this.Ej.supportsHdDrm) ? "1" : "0";
        e.vq = this.Ej.requestVideoQuality;
        e.cc_load_policy = this.DR.JR();
        this.Ye && (e.autoplay = "1");
        a && (e.oauth_token = a);
        this.video.Eh && (e.vvt = this.video.Eh);
        "RQ" == this.video.Ka && (e.feature = "RQdial" == this.video.sw ? "ytremote_d" : "ytremote",
        e.mdx = "1");
        b && b.length && (e.ytr = b.join(","));
        c && (e.is_fling = "1");
        return e
    }
    ;
    aj.prototype.update = function(a, b, c) {
        this.VX();
        this.video = a;
        this.startTime = b || 0;
        this.Ye = !!c
    }
    ;
    aj.prototype.VX = function() {
        this.videoId = "";
        this.startTime = 0;
        this.Ye = !1
    }
    ;
    aj.inject = ["environmentModel", "captionsSettingsService"];
    function bj() {
        this.rows = [];
        this.Ua = 0
    }
    d = bj.prototype;
    d.Lf = function() {
        return this.rows[this.Ua]
    }
    ;
    d.Vd = function() {
        return this.rows
    }
    ;
    d.H = function() {
        return this.rows.length
    }
    ;
    d.sP = function(a) {
        this.rows.push(a)
    }
    ;
    d.clear = function() {
        this.rows.length = 0
    }
    ;
    d.iL = function(a) {
        for (var b = this.H(), c = 0; c < b; ++c)
            if (a === this.rows[c].model.title)
                return c;
        return -1
    }
    ;
    function cj() {
        this.Gg = new xd(25,!0)
    }
    d = cj.prototype;
    d.load = function(a, b) {
        for (var c = [], e = this.Gg.na(), f = 0, g = e.length; f < g; ++f)
            c.push(e[f].video);
        e = new U;
        e.A.push(c);
        b && b(e);
        return e
    }
    ;
    d.QO = function(a) {
        return (a = this.Gg.get(a)) ? (a.pd.Oa(a.activeIndex),
        a.pd) : null
    }
    ;
    d.cW = function(a, b) {
        this.Gg.get(a.videoId) || this.Gg.pi(a.videoId, {
            video: a,
            pd: this.OU(b),
            tR: b,
            activeIndex: b.activeIndex
        })
    }
    ;
    d.OU = function(a) {
        for (var b = this.Gg.na(), c = 0, e = b.length; c < e; ++c)
            if (b[c].tR === a)
                return b[c].pd;
        b = new Ri;
        b.iS(a);
        return b
    }
    ;
    d.H = function() {
        return this.Gg.Y()
    }
    ;
    function dj(a, b, c, e, f, g, k) {
        bj.call(this);
        this.OP = a;
        this.Kz = b;
        this.US = c;
        this.NP = e;
        this.pm = f;
        this.Jz = g;
        this.currentVideo = this.sd = null;
        this.Mr = this.PS();
        this.QN = k
    }
    z(dj, bj);
    d = dj.prototype;
    d.Ae = function() {
        var a = this.Lf();
        return a ? a.Ae() : null
    }
    ;
    d.PS = function() {
        var a = Pi(this.pm, "[[Current Watch History|Displays previously watched videos.]]", "icon-hourglass");
        a.model.Ka = "HL";
        return a
    }
    ;
    d.vh = function(a, b, c, e) {
        this.currentVideo = a;
        this.Jz.update(this.currentVideo, c, e);
        var f = b === this.Mr;
        f && (b = this.pm.QO(a.videoId));
        c = this.PO(a.channel);
        b && "[[Featured Playlist|Title for playlist.]]" !== b.model.title && (b.service !== this.Kz || b instanceof Vi) || (c.kp(a),
        b = c);
        e = [];
        this.rows.length = 1;
        b !== this.sd && (this.sd = this.rows[0] = b,
        this.sd.load(p));
        !f && this.currentVideo && this.SO(this.currentVideo.videoId);
        f = this.OO(a);
        e.push(f);
        e.push(c);
        this.MO(a);
        0 < this.pm.H() && e.push(this.ar());
        this.NO(e, this.rows);
        this.Pu([f, this.Mr]);
        return b
    }
    ;
    d.uP = function() {
        var a = this.sd;
        this.currentVideo && a && this.pm.cW(this.currentVideo, a)
    }
    ;
    d.uy = function() {
        this.currentVideo = null
    }
    ;
    d.NO = function(a, b) {
        for (var c, e = a.length, f = 0; f < e; ++f)
            (c = a[f]) && (b.some(function(a) {
                return c.model.title === a.model.title
            }) || b.push(c))
    }
    ;
    d.PO = function(a) {
        return Wi(this.US, "[[Uploads for channel:|sWqBGwb2WdBVvjLS_6hayw]] " + a.displayName, a.imageUrl, a.username)
    }
    ;
    d.OO = function(a) {
        return Si(this.Kz, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", "icon-related", a.videoId)
    }
    ;
    d.MO = function(a) {
        a.Po && this.OP.ab(a.channel.username, w(function(b) {
            if (b.kn.length) {
                var c = Si(this.NP, "[[Featured Playlist|Title for playlist.]]", "icon-subscribe");
                c.serviceQuery = b.kn;
                c.jf = new Mi(a.videoId,b.kn);
                this.rows.push(c)
            }
        }, this))
    }
    ;
    d.o7 = function() {
        return this.Jz
    }
    ;
    d.SO = function(a) {
        a = this.sd.Cr("videoId", a);
        this.sd.Oa(Math.max(a, 0))
    }
    ;
    d.ar = function() {
        return this.Mr
    }
    ;
    d.BJ = function() {
        return this.sd ? this.sd.model : null
    }
    ;
    d.Mk = function() {
        return this.rows[0]
    }
    ;
    d.Sq = function() {
        var a = this.Mk()
          , b = -1;
        this.currentVideo && (b = a.Cr("videoId", this.currentVideo.videoId));
        -1 == b && (b = a.activeIndex);
        return b < a.H() - 1 ? a.$(++b) : this.QN.loopRows ? a.$(0) : null
    }
    ;
    d.next = function(a) {
        var b = this.Sq();
        if (b) {
            var c = this.Mk();
            this.vh(b, c, 0, a);
            c.Rq(1);
            c.Rl(1) && c.load(p);
            return this.currentVideo.videoId
        }
        return ""
    }
    ;
    d.nP = function() {
        if (this.currentVideo) {
            var a = this.sd
              , b = a.Cr("videoId", this.currentVideo.videoId);
            if (0 < b)
                return this.vh(a.$(--b), a),
                a.Rq(-1),
                a.Rl(-1) && a.load(p),
                this.currentVideo.videoId
        }
        return ""
    }
    ;
    d.Pu = function(a) {
        (a || [this.ar()]).forEach(function(a) {
            a.Oa(0)
        });
        this.Ua = 0
    }
    ;
    dj.inject = "brandingService relatedVideosService userUploadsService vevoPlaylistService watchHistoryModel playerVariablesModel environmentModel".split(" ");
    function ej(a, b, c) {
        this.SW = a;
        this.x0 = b;
        this.zt = b[0];
        this.Xn = c
    }
    d = ej.prototype;
    d.Rb = function(a) {
        a = a || this.SW;
        a.$$phase || a.$digest()
    }
    ;
    d.zX = function() {
        return this.oY() || this.pY() || this.qY()
    }
    ;
    d.oY = function() {
        var a = this.zt.activeElement !== this.zt.body ? this.zt.activeElement : null
          , b = this.KY(a);
        return a && b ? b : null
    }
    ;
    d.KY = function(a) {
        return angular.element(a).scope()
    }
    ;
    d.qY = function() {
        return {
            $emit: function() {},
            $root: {}
        }
    }
    ;
    d.pY = function() {
        return this.Xn && this.Xn.current && this.Xn.current.scope ? this.Xn.current.scope : null
    }
    ;
    ej.$inject = ["$rootScope", "$document", "$route"];
    function fj() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return ("x" == a ? b : b & 3 | 8).toString(16)
        })
    }
    ;function gj() {
        K.call(this);
        this.Xg = -1;
        this.Wg = !1
    }
    z(gj, K);
    gj.prototype.vg = function() {
        return this.Xg
    }
    ;
    gj.prototype.zi = function() {
        return this.Wg
    }
    ;
    gj.prototype.jE = function(a, b) {
        if (a !== this.Xg || b !== this.Wg) {
            var c = {
                volume: this.Xg,
                muted: this.Wg
            };
            this.Xg = a;
            this.Wg = b;
            this.G("volumeData:changed", {
                volume: a,
                muted: b
            }, c)
        }
    }
    ;
    gj.prototype.gE = function() {
        this.G("volumeData:changed", {
            volume: this.Xg,
            muted: this.Wg
        }, {
            volume: this.Xg,
            muted: this.Wg
        })
    }
    ;
    function hj(a, b) {
        gj.call(this);
        this.j = a;
        this.xM = b;
        this.im = [];
        this.Oy = !1;
        this.Sc = null
    }
    z(hj, gj);
    d = hj.prototype;
    d.uH = function(a) {
        this.xM.Ja && (this.Oy ? a() : (this.im.push(a),
        1 < this.im.length || Dg("https://www.gstatic.com/cast/js/receiver/1.0/cast_receiver.js", {
            timeout: 3E4
        }).ei(w(this.bT, this))))
    }
    ;
    d.bT = function() {
        if (m("cast.receiver.Receiver")) {
            var a = m("cast.receiver.logger.setLevelValue");
            a && a(900);
            if (this.Sc = m("cast.receiver.platform"))
                this.Sc.addEventListener(cast.receiver.Platform.EventType.VOLUME_CHANGED, w(this.KD, this)),
                this.Sc.isReady() && this.KD();
            a = this.im;
            this.im = [];
            this.Oy = !0;
            for (var b = a.length, c = 0; c < b; ++c)
                a[c]()
        }
    }
    ;
    d.KD = function() {
        var a = this.Sc.getVolume()
          , b = !!this.Sc.getMuted()
          , a = fa(a) ? bb(Math.round(100 * a), 0, 100) : -1;
        this.jE(a, b)
    }
    ;
    d.zn = function(a) {
        this.Sc ? this.Sc.setVolume(a / 100) : this.gE()
    }
    ;
    d.eF = function(a) {
        this.Sc ? this.Sc.setMuted(a) : this.gE()
    }
    ;
    d.yn = function() {
        this.eF(!0)
    }
    ;
    d.An = function() {
        this.eF(!1)
    }
    ;
    hj.$inject = ["$window", "environmentModel"];
    function ij(a, b) {
        this.Af = a;
        this.ht = b
    }
    ij.prototype.state = function(a, b) {
        var c = !1;
        void 0 !== a && (this.Af.path("/" + a),
        c = !0);
        b && (this.Af.search(b),
        c = !0);
        c && this.ht.Rb();
        (c = this.Af.path()) && (c = c.split("/").join(""));
        return c
    }
    ;
    ij.prototype.mode = function(a) {
        void 0 !== a && (this.Af.search("mode", a),
        this.ht.Rb());
        return this.Af.search().mode
    }
    ;
    ij.prototype.url = function(a) {
        void 0 !== a && (this.Af.url(a),
        this.ht.Rb());
        return this.Af.url()
    }
    ;
    ij.prototype.rm = function(a) {
        return this.mode() === a
    }
    ;
    ij.prototype.zl = function() {
        var a = this.state() || ""
          , b = this.mode() || "";
        return {
            state: a,
            mode: b,
            url: this.url()
        }
    }
    ;
    ij.inject = ["$location", "angularHelper"];
    function jj() {}
    jj.prototype.jS = function(a, b) {
        var c = m("yt.player.embed");
        return c && c(a, b)
    }
    ;
    jj.prototype.ay = function() {
        return !!m("yt.player.embed")
    }
    ;
    function kj(a, b, c, e, f, g, k, l, n, q, s, r) {
        gj.call(this);
        this.j = a;
        this.yk = b;
        this.Lk = c;
        this.kv = e;
        this.nc = f;
        this.Xu = g;
        this.qG = k;
        this.Nu = l;
        this.Qo = n;
        this.Ak = q;
        this.nb = s;
        this.KG = r;
        this.Ou = [];
        this.ip = !1;
        this.Jk = [];
        this.T = this.Th = null;
        this.Gk = this.Fk = this.Fc = !1;
        this.Zu = this.Zo = null;
        this.$a = "";
        this.hv = 0;
        this.Go = this.isPlayingAd = this.isPlaying = this.bp = !1;
        this.Uo = this.Mh = this.state = -1;
        this.Sh = !1;
        this.Xf = {};
        this.Me = NaN;
        this.wk = this.Ak.bH(this.cH, 800, this);
        this.Ek = -1;
        this.subtitlesModuleGeneration = 0;
        this.subtitlesTrack = null;
        this.VG = w(this.Ck, this);
        this.dp = this.Ke = p;
        if (a = this.Lk.jp("start_watch") || this.Lk.jp("start_dial"))
            this.Ke = w(a.tick, a),
            this.dp = w(this.Lk.report, this.Lk, a.name);
        this.nc.Ja && document.addEventListener("webkitvisibilitychange", w(function() {
            document.r_ ? this.pause() : 2 === this.state && this.Xo()
        }, this), !1);
        this.vk()
    }
    z(kj, gj);
    ba("yt.tv.services.PlayerService", kj, void 0);
    me(kj, ["isPlaying", "isPlayingAd", "state", "subtitlesModuleGeneration", "subtitlesTrack"]);
    d = kj.prototype;
    d.oT = function(a) {
        this.Ou = a
    }
    ;
    d.hT = function() {
        this.Go = !0
    }
    ;
    d.qB = function() {
        return this.RZ("captions")
    }
    ;
    d.kT = function() {
        if (!this.qB())
            return !1;
        this.T.loadModule("captions");
        return !0
    }
    ;
    d.qT = function() {
        var a = this.uf();
        a && a.unloadModule && (this.subtitlesTrack = null,
        this.kv.aC(3),
        this.T.unloadModule("captions"))
    }
    ;
    d.jT = function() {
        return this.SE("captions", "tracklist", {
            includeAsr: 1
        }) || []
    }
    ;
    d.iT = function() {
        return this.SE("captions", "track") || {}
    }
    ;
    d.pT = function(a) {
        return this.wE("captions", "fontSize", a)
    }
    ;
    d.nT = function(a) {
        this.kv.aC(1);
        return this.wE("captions", "track", a)
    }
    ;
    d.vg = function() {
        if (!this.Fc)
            return this.Pq(),
            kj.h.vg.call(this);
        var a = this.T.getVolume();
        return fa(a) ? a : kj.h.vg.call(this)
    }
    ;
    d.zi = function() {
        return this.Fc ? this.T.isMuted() : (this.Pq(),
        kj.h.zi.call(this))
    }
    ;
    d.zn = function(a) {
        this.Oc(w(function() {
            this.T.setVolume(a)
        }, this))
    }
    ;
    d.yn = function() {
        this.Oc(w(function() {
            this.T.mute()
        }, this))
    }
    ;
    d.An = function() {
        this.Oc(w(function() {
            this.T.unMute()
        }, this))
    }
    ;
    d.uf = function() {
        return this.Fc ? this.T : null
    }
    ;
    d.Pq = function() {
        this.T || (this.Zo = this.Ak.aQ(this.Qo.ay),
        this.Zo.ce = w(this.iQ, this, "leanback-player-container", this.bQ()),
        this.eQ(),
        this.dQ())
    }
    ;
    d.eQ = function() {
        this.Fk ? this.Dg() : dc("html5-video-player") ? (this.Fk = !0,
        this.Dg()) : this.KG.get("/leanback_ajax", {
            action_player_template: 1,
            hl: this.Xu.Ma,
            override_hl: 1
        }, w(this.WS, this))
    }
    ;
    d.WS = function(a) {
        a = mc(document, a);
        document.body.appendChild(a);
        this.Fk = !0;
        this.Ke("plht_r");
        this.Dg()
    }
    ;
    d.dQ = function() {
        this.Gk ? this.Dg() : this.Qo.ay() ? (this.Gk = !0,
        this.Dg()) : Dg(this.j.environment.player_url, {
            timeout: 3E4
        }).ei(w(this.DN, this))
    }
    ;
    d.DN = function() {
        this.Gk = !0;
        this.Ke("pljs_r");
        this.Dg()
    }
    ;
    d.Dg = function() {
        !this.T && this.Fk && this.Gk && this.Zo.start(0, 1E3)
    }
    ;
    d.iQ = function(a, b) {
        this.T || (this.Ke("pem_rq"),
        this.T = this.Qo.jS(a, b))
    }
    ;
    d.bQ = function() {
        var a = this.j.swfConfig;
        x(a.args, {
            add_player_event_listeners: "0",
            autoplay: 0,
            BASE_YT_URL: null,
            controls: 0,
            el: "leanback",
            enablejsapi: 1,
            ps: "leanback",
            jsapicallback: w(this.BL, this),
            iv_load_policy: 3,
            cc_load_policy: 3,
            video_container_override: this.AL(),
            hl: this.Xu.Ma,
            svt: this.nc.supportsSingleVideoTag,
            canplaylive: this.nc.supportsLive,
            canplaypaid: this.nc.supportsPaidContent,
            store_user_volume: !1,
            use_media_volume: this.nc.Ja && !this.nc.bo
        });
        x(a.args, this.nc.ig());
        a.args.altf = !this.nc.supportsWebM;
        a.assets.css = null;
        a.html5 = !0;
        a.disable = {
            flash: !0
        };
        a.fallback = w(function() {
            this.Uw()
        }, this);
        this.nc.supportsAdaptiveBitrate || (a.args.noadapt = !0);
        return a
    }
    ;
    d.AL = function() {
        return this.nc.is720pVideo ? "1280x720" : this.j.innerWidth + "x" + this.j.innerHeight
    }
    ;
    d.ti = function() {
        this.Xl();
        this.Ek = this.Ak.Ik(this.VG, 500)
    }
    ;
    d.Xl = function() {
        this.Ak.Hi(this.Ek);
        this.Ek = -1
    }
    ;
    d.Fz = function() {
        this.Th = null;
        this.Me = NaN
    }
    ;
    d.vk = function() {
        this.nb.timeLeft = 0;
        this.nb.currentTime = 0;
        this.nb.duration = 0;
        this.nb.percentageLoaded = 0;
        this.nb.percentagePlayed = 0
    }
    ;
    d.Ck = function() {
        var a = this.uf();
        if (a && this.Sh) {
            var a = a.getVideoLoadedFraction(), b = this.cS(), c, e;
            0 == this.state ? (c = b,
            e = 1) : (c = this.dS(),
            e = !isNaN(c) && isFinite(c) && !isNaN(b) && isFinite(b) && 0 !== b ? c / b : c = b = 0);
            this.fS(c);
            0 !== b && (this.nb.duration = b);
            this.nb.currentTime = c;
            this.nb.timeLeft = Math.max(Math.round(this.nb.duration - this.nb.currentTime), 1);
            this.nb.percentageLoaded = this.Gm(a);
            this.nb.percentagePlayed = this.Gm(e)
        } else
            this.vk()
    }
    ;
    d.Gm = function(a) {
        return isNaN(a) || !isFinite(a) ? 0 : Math.round(1E3 * a) / 1E3
    }
    ;
    d.BL = function() {
        this.Ke("pem_r");
        this.Fc = !0;
        this.T.addEventListener("onStateChange", w(this.kA, this));
        this.T.addEventListener("onAdStateChange", w(this.iA, this));
        this.T.addEventListener("onDetailedError", w(this.Uw, this));
        this.T.addEventListener("onCaptionsTrackListChanged", w(this.VP, this));
        this.T.addEventListener("captionschanged", w(this.UP, this));
        this.T.addEventListener("onVolumeChange", w(this.WP, this));
        this.Mq()
    }
    ;
    d.iA = function(a, b) {
        this.Zu = b || null;
        this.Uo = a;
        this.BA();
        this.yk.Rb()
    }
    ;
    d.kA = function(a) {
        if (-1 !== a || 0 !== this.Mh) {
            switch (a) {
            case 3:
                3 !== this.Mh && this.wk.pause();
                break;
            case -1:
            case 0:
                this.wk.Kw()
            }
            3 === this.Mh && 3 !== a && this.wk.mP();
            0 === a && this.Oc(w(function() {
                this.T.stopVideo()
            }, this));
            this.Mh = a;
            this.BA();
            1 != this.state || this.isPlayingAd || (this.Go = !1);
            this.yk.Rb()
        }
    }
    ;
    d.SQ = function() {
        var a = this.isPlayingAd;
        switch (this.Uo) {
        case 0:
        case -1:
            this.isPlayingAd = !1;
            break;
        case 3:
        case 1:
            this.isPlayingAd = !0
        }
        return a != this.isPlayingAd
    }
    ;
    d.BA = function() {
        var a = this.SQ();
        this.state = this.isPlayingAd ? this.Uo : this.Mh;
        var b = this.Sh;
        switch (this.state) {
        case 3:
            this.Eq();
            break;
        case -1:
        case 0:
            this.Ck();
            this.Sh = this.isPlaying = !1;
            this.Xl();
            break;
        case 2:
            this.isPlaying = !1;
            break;
        case 1:
            this.Eq(),
            this.Sh = this.isPlaying = !0
        }
        if (b = this.Sh && !b)
            this.Ke("pb_r"),
            this.dp(),
            this.dp = this.Ke = p;
        if (a || b)
            this.Ck(),
            -1 === this.Ek && this.ti()
    }
    ;
    d.Uw = function(a) {
        this.Fz();
        this.vk();
        this.Xl();
        this.bp = !!a && 1 == a.errorDetail;
        this.hv = !!a && a.errorCode || 0;
        a && a.message ? this.$a = this.bp ? "[[To view this video, please confirm you are old enough by signing in.|Text message displayed when a user tries to watch age-restricted videos.]]" : a.message : this.$a = "[[An error has occurred please try again later.|Text message displayed when a video cannot be played.]]";
        this.state = -1E3;
        this.yk.Rb()
    }
    ;
    d.Eq = function() {
        this.bp = !1;
        this.hv = 0;
        this.$a = ""
    }
    ;
    d.RZ = function(a) {
        var b = this.uf();
        a = b && b.getOptions && b.getOptions(a);
        return !(!a || !a.length)
    }
    ;
    d.SE = function(a, b, c) {
        var e = this.uf();
        return e && e.getOption ? e.getOption(a, b, c) : null
    }
    ;
    d.wE = function(a, b, c) {
        var e = this.uf();
        return e && e.setOption ? (e.setOption(a, b, c),
        !0) : !1
    }
    ;
    d.UP = function(a) {
        this.subtitlesTrack = a
    }
    ;
    d.WP = function(a) {
        a.volume = Math.round(a.volume);
        this.jE(a.volume, a.muted)
    }
    ;
    d.VP = function() {
        this.subtitlesModuleGeneration++;
        this.yk.Rb()
    }
    ;
    d.Oc = function(a) {
        this.Jk.push(a);
        this.Fc ? this.Mq() : this.Pq()
    }
    ;
    d.nU = function(a) {
        this.Fc && this.Oc(a)
    }
    ;
    d.Mq = function() {
        if (!this.ip) {
            this.ip = !0;
            for (var a = this.Jk.length, b = 0; b < a && this.Fc; ++b)
                this.Jk[b]();
            this.Jk.splice(0, b);
            this.ip = !1
        }
    }
    ;
    d.cS = function() {
        return Math.ceil(this.lm())
    }
    ;
    d.lm = function() {
        var a = this.uf();
        return a && a.getDuration ? a.getDuration() : 0
    }
    ;
    d.kj = function() {
        var a = this.uf();
        return a && a.getCurrentTime ? this.Gm(a.getCurrentTime()) : 0
    }
    ;
    d.dS = function() {
        return isNaN(this.Me) ? this.kj() : this.Me
    }
    ;
    d.cH = function() {
        if (this.Th) {
            var a = this.Th;
            this.Th = null;
            this.Oc(a)
        }
    }
    ;
    d.lT = function(a) {
        this.Nu.startTime = a;
        this.sC()
    }
    ;
    d.sC = function() {
        this.Rx(!0);
        this.Oc(w(function() {
            this.Fc = !1;
            this.qG.Kb(w(function(a) {
                this.Fc = !0;
                this.Eq();
                a = this.Nu.XL(a, this.Ou, this.Go);
                this.T.loadVideoByPlayerVars(a);
                this.nc.isVideoInfoVisible ? this.T.showVideoInfo() : this.T.hideVideoInfo();
                this.G("video:changed");
                this.ti();
                this.Mq()
            }, this))
        }, this))
    }
    ;
    d.pg = function() {
        this.isPlaying ? this.pause() : this.Xo()
    }
    ;
    d.Xo = function() {
        this.Oc(w(function() {
            this.T.playVideo();
            this.ti()
        }, this))
    }
    ;
    d.Rx = function(a) {
        if (this.Fc && this.T) {
            var b = 0 != this.state && -1 != this.state;
            this.Xl();
            this.Fz();
            this.vk();
            b && this.Oc(w(function() {
                this.T.pauseVideo();
                this.T.stopVideo()
            }, this));
            this.Zu = null;
            if (b || a)
                this.kA(-1),
                this.iA(-1)
        }
    }
    ;
    d.pause = function() {
        this.Oc(w(function() {
            this.T.pauseVideo()
        }, this))
    }
    ;
    d.tB = function(a, b) {
        a = Math.max(a, 0);
        a = Math.min(a, this.lm());
        a = this.Gm(a);
        a = Math.max(a, 0.001);
        this.Th = w(function() {
            this.Me = NaN;
            this.ti();
            this.T.seekTo(a, b)
        }, this);
        this.ti();
        this.Me = a;
        this.Ck();
        this.wk.ty()
    }
    ;
    d.mT = function(a) {
        var b = isNaN(this.Me) ? this.nb.currentTime : this.Me;
        a = 0 < a ? Math.min(this.lm(), b + a) : Math.max(0, b + a);
        a != b && this.tB(a, !0)
    }
    ;
    d.rT = function() {
        this.nU(w(function() {
            this.T.updateLastActiveTime && this.T.updateLastActiveTime()
        }, this))
    }
    ;
    d.fT = function(a, b, c, e) {
        this.nb.currentTime >= b ? c() : this.Xf[a] = {
            time: b,
            me: c,
            mode: e || 1
        }
    }
    ;
    d.fS = function(a) {
        var b, c;
        for (c in this.Xf)
            b = this.Xf[c],
            (!this.isPlayingAd || 1 !== b.mode) && a >= b.time && (b.me(),
            delete this.Xf[c])
    }
    ;
    d.A8 = function(a) {
        return a in this.Xf
    }
    ;
    d.gT = function() {
        this.Xf = {}
    }
    ;
    kj.inject = "window angularHelper csiService captionsSettingsService environmentModel locale authService playerVariablesModel playerFactoryService timeService progressModel templateClient".split(" ");
    function lj(a, b) {
        this.fZ = a;
        this.lZ = b
    }
    lj.prototype.XX = function() {
        return this.fZ
    }
    ;
    lj.prototype.sD = function() {
        return this.lZ
    }
    ;
    function mj(a, b, c) {
        this.IV = a;
        this.fh = null;
        this.dh = {};
        this.BV = b || p;
        this.CV = c || p
    }
    d = mj.prototype;
    d.MW = function() {
        return this.BV
    }
    ;
    d.NW = function() {
        return this.CV
    }
    ;
    d.getName = function() {
        return this.IV
    }
    ;
    d.GX = function(a) {
        this.fh = a
    }
    ;
    d.E$ = function() {
        return this.fh
    }
    ;
    d.D$ = function(a) {
        return this.XD(a.XX(), a.sD())
    }
    ;
    d.XD = function(a, b) {
        qb(this.dh, a, new lj(a,b));
        return this
    }
    ;
    d.g7 = function() {
        var a = 0, b;
        for (b in this.dh)
            ++a;
        return a
    }
    ;
    d.B7 = function(a) {
        return this.dh[a] || null
    }
    ;
    d.qC = function(a) {
        return !!this.dh[a] || !(!this.fh || !this.fh.qC(a))
    }
    ;
    d.UU = function(a) {
        return this.QD(a, this.getName())
    }
    ;
    d.QD = function(a, b) {
        return this.dh[a] ? this.dh[a].sD() : this.fh ? this.fh.QD(a, b) : b
    }
    ;
    function nj() {
        K.call(this);
        this.Jj = {};
        this.En = this.ue = null;
        this.LU(this.KU(this.hD()))
    }
    z(nj, K);
    d = nj.prototype;
    d.LU = function(a) {
        this.Jj = a
    }
    ;
    d.ga = function() {
        this.En && this.kB(this.En)
    }
    ;
    d.hD = function() {
        return []
    }
    ;
    d.yf = function(a, b, c) {
        return new mj(a,b,c)
    }
    ;
    d.kB = function(a) {
        (a = this.Jj[a.getName()]) && this.jD(a)
    }
    ;
    d.z6 = function() {
        return this.ue
    }
    ;
    d.C$ = function(a) {
        return (a in this.Jj ? this.Jj[a] : void 0) || null
    }
    ;
    d.Aq = function(a) {
        a = this.kD(a);
        if (!this.ue.qC(a))
            return !1;
        a = this.ue.UU(a);
        return a != this.ue.getName() ? (this.jD(this.Jj[a]),
        !0) : !1
    }
    ;
    d.jD = function(a) {
        var b = this.ue;
        b && b.NW()(b, a);
        this.ue = a;
        this.ue.MW()(this.ue, b)
    }
    ;
    d.kD = function(a) {
        return a.name
    }
    ;
    d.KU = function(a) {
        for (var b = {}, c = 0, e = a.length; c < e; ++c) {
            var f = a[c]
              , g = "state"in f ? f.state : void 0
              , k = "rules"in f ? f.rules : []
              , l = 0
              , n = k.length;
            for (; l < n; ++l) {
                var q = k[l]
                  , s = "name"in q ? q.name : void 0
                  , r = "nextState"in q ? q.nextState : void 0;
                if (s && r)
                    g.XD(s, r.getName());
                else
                    throw Error("Attempting to parse malformed rule: " + q);
            }
            g.GX("parent"in f ? f.parent : null);
            if ("initial"in f) {
                if (this.En)
                    throw Error("Attempting to parse duplicate initial state: " + g);
                this.En = g
            }
            qb(b, g.getName(), g)
        }
        return b
    }
    ;
    function oj(a) {
        nj.call(this);
        this.UA = a;
        this.K = null;
        this.QA = -1;
        this.UB = this.bs = 0
    }
    z(oj, nj);
    me(oj, ["spinnerState"]);
    oj.prototype.mQ = function(a) {
        this.K = a;
        this.K.b("state:changed", w(this.Aq, this))
    }
    ;
    var pj = {
        xA: "buffering-confirmed",
        EA: "playing-confirmed"
    };
    d = oj.prototype;
    d.hD = function() {
        for (var a = this.yf("unstarted"), b = this.yf("confirmingPlaying", w(this.bU, this), w(this.dU, this)), c = this.yf("confirmingBuffering", w(this.aU, this), w(this.cU, this)), e = this.yf("playing", w(this.ft, this)), f = this.yf("paused", w(this.ft, this)), g = this.yf("buffering", w(this.fU, this)), k = this.yf("error", w(this.ft, this)), b = [{
            state: a,
            initial: !0,
            rules: [{
                name: 1,
                nextState: b
            }, {
                name: 3,
                nextState: c
            }]
        }, {
            state: k,
            rules: []
        }, {
            state: b,
            rules: [{
                name: pj.EA,
                nextState: e
            }, {
                name: 3,
                nextState: c
            }]
        }, {
            state: c,
            rules: [{
                name: pj.xA,
                nextState: g
            }, {
                name: 1,
                nextState: b
            }]
        }, {
            state: e,
            rules: [{
                name: 3,
                nextState: c
            }]
        }, {
            state: f,
            rules: [{
                name: 1,
                nextState: b
            }]
        }, {
            state: g,
            rules: [{
                name: 1,
                nextState: b
            }]
        }], c = 0, e = b.length; c < e; ++c)
            g = b[c],
            g.state !== f && g.state !== k && g.rules.push({
                name: 2,
                nextState: f
            }),
            g.state !== a && g.rules.push({
                name: -1,
                nextState: a
            }),
            g.state !== k && g.rules.push({
                name: -1E3,
                nextState: k
            });
        return b
    }
    ;
    d.bU = function() {
        this.CE(w(this.QY, this), 100)
    }
    ;
    d.dU = function() {
        this.uj()
    }
    ;
    d.aU = function(a, b) {
        this.CE(w(this.PY, this, b), 800)
    }
    ;
    d.cU = function() {
        this.uj()
    }
    ;
    d.CE = function(a, b) {
        this.uj();
        this.bs = this.K.kj();
        this.QA = this.UA.Ik(a, b)
    }
    ;
    d.uj = function() {
        this.UA.Hi(this.QA)
    }
    ;
    d.PY = function(a) {
        this.uj();
        this.K.kj() <= this.bs ? this.Aq(pj.xA) : this.kB(a)
    }
    ;
    d.QY = function() {
        this.K.kj() > this.bs && (this.uj(),
        this.Aq(pj.EA))
    }
    ;
    d.ft = function() {
        this.UB = 0
    }
    ;
    d.fU = function() {
        this.UB = 1
    }
    ;
    d.kD = function(a) {
        return String(a)
    }
    ;
    function qj(a, b) {
        K.call(this);
        this.K = a;
        this.U_ = b;
        this.isPlayingAd = this.nQ = !1;
        this.S_ = 0;
        this.$a = "";
        this.R_ = null;
        this.T_ = this.isPlaying = !1;
        this.state = -1;
        this.subtitlesModuleGeneration = 0;
        this.subtitlesTrack = null;
        this.hq = new oj(b);
        this.pQ()
    }
    z(qj, K);
    me(qj, ["spinnerShowing"]);
    qj.prototype.pQ = function() {
        this.oQ();
        this.hq.mQ(this.K);
        this.hq.ga()
    }
    ;
    function rj(a) {
        qj.prototype.__defineGetter__(a, function() {
            return this.K[a]
        });
        qj.prototype.__defineSetter__(a, function(b) {
            this.K[a] = b
        })
    }
    rj("adVideoId");
    rj("errorCode");
    rj("errorMessage");
    rj("isPlaying");
    rj("isPlayingAd");
    rj("needsLogin");
    rj("state");
    rj("subtitlesModuleGeneration");
    rj("subtitlesTrack");
    d = qj.prototype;
    d.oQ = function() {
        this.hq.b("spinnerState:changed", w(this.PK, this));
        for (var a = "subtitlesModuleGeneration subtitlesTrack volumeData adPlaying video isPlaying isPlayingAd".split(" "), b = 0, c = a.length; b < c; ++b) {
            var e = a[b] + ":changed";
            this.K.b(e, w(this.Hx, this, e))
        }
        e = "state:changed";
        this.K.b(e, w(this.QK, this, e))
    }
    ;
    d.Hx = function(a, b) {
        this.G.apply(this, arguments)
    }
    ;
    d.QK = function(a, b) {
        2 == b && this.K.kj() == this.K.lm() || this.Hx(a, b)
    }
    ;
    d.PK = function(a) {
        this.nQ = 1 == a
    }
    ;
    d.Ri = function(a, b, c, e) {
        this.K.fT(a, b, c, e)
    }
    ;
    d.Xi = function() {
        this.K.gT()
    }
    ;
    d.fO = function() {
        this.K.hT()
    }
    ;
    d.lq = function() {
        return this.K.iT()
    }
    ;
    d.ly = function() {
        return this.K.jT()
    }
    ;
    d.Ov = function() {
        return this.K.kT()
    }
    ;
    d.XB = function() {
        this.K.sC()
    }
    ;
    d.pause = function() {
        this.K.pause()
    }
    ;
    d.Vf = function() {
        this.K.Xo()
    }
    ;
    d.CJ = function(a) {
        this.K.lT(a)
    }
    ;
    d.cq = function(a, b) {
        this.K.tB(a, b)
    }
    ;
    d.Hr = function(a) {
        return this.K.nT(a)
    }
    ;
    d.Kl = function(a) {
        this.K.oT(a)
    }
    ;
    d.bI = function(a) {
        return this.K.pT(a)
    }
    ;
    d.wl = function(a) {
        this.K.Rx(a)
    }
    ;
    d.Cm = function() {
        this.K.qT()
    }
    ;
    d.vP = function() {
        this.K.rT()
    }
    ;
    d.zP = function() {
        return this.K.qB()
    }
    ;
    d.pg = function() {
        this.K.pg()
    }
    ;
    d.tn = function(a) {
        this.K.mT(a)
    }
    ;
    d.zn = function(a) {
        this.K.zn(a)
    }
    ;
    d.vg = function() {
        return this.K.vg()
    }
    ;
    d.zi = function() {
        return this.K.zi()
    }
    ;
    d.yn = function() {
        this.K.yn()
    }
    ;
    d.An = function() {
        this.K.An()
    }
    ;
    qj.inject = ["playerService", "timeService"];
    function sj(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && a.setAttribute(c, b[c])
    }
    function tj() {
        var a = new ActiveXObject("MSXML2.DOMDocument");
        if (a) {
            a.resolveExternals = !1;
            a.validateOnParse = !1;
            try {
                a.setProperty("ProhibitDTD", !0),
                a.setProperty("MaxXMLSize", 2048),
                a.setProperty("MaxElementDepth", 256)
            } catch (b) {}
        }
        return a
    }
    ;function uj(a) {
        var b = {};
        if (1 == a.nodeType && 0 < a.attributes.length)
            for (var c = 0; c < a.attributes.length; ++c) {
                var e = a.attributes.item(c);
                b[e.nodeName.replace(":", "$")] = e.nodeValue
            }
        if (a.hasChildNodes())
            for (a = a.firstChild; a; )
                3 == a.nodeType ? (c = "$t",
                e = a.nodeValue) : (c = a.nodeName.replace(":", "$"),
                e = uj(a)),
                c in b ? (u(b[c]) || (b[c] = [b[c]]),
                b[c].push(e)) : b[c] = e,
                a = a.nextSibling;
        return b
    }
    ;function vj(a, b, c) {
        $f.call(this);
        this.sb = U;
        this.yi = a;
        this.dK = b;
        this.ap = c;
        this.Sa("author", this.ER);
        this.Sa("logo", this.FR);
        this.Sa("title", this.HR)
    }
    z(vj, $f);
    d = vj.prototype;
    d.ER = function(a, b, c) {
        c && (a.Oe = this.ja(c[0].name),
        a.Pk = this.ja(c[0].yt$userId));
        return a
    }
    ;
    d.HR = function(a, b, c) {
        a.title = this.ja(c);
        return a
    }
    ;
    d.FR = function(a, b, c) {
        a.imageUrl = this.ja(c);
        return a
    }
    ;
    d.eh = function(a, b, c) {
        if (u(c)) {
            b = 0;
            for (var e = c.length; b < e; ++b)
                this.gF(a, c[b])
        } else
            this.gF(a, c);
        return a
    }
    ;
    d.gF = function(a, b) {
        var c = this.Bl(a, b);
        a && a.A && c && a.A.push(c)
    }
    ;
    d.Bl = function(a, b) {
        var c = new $i(a.oa,a.serviceQuery,a.Ka)
          , e = new Yi(a.oa,a.serviceQuery);
        if (this.ML(b))
            return this.EL(c, b),
            this.DL(e, b),
            c.channel = e,
            c;
        c.Yc = this.yp();
        c.description = this.IL(b);
        c.channel = this.HL(e, b);
        c.duration = this.vy(b);
        c.xh = this.yi.fq(c.duration);
        c.imageUrl = this.ap.Rk(this.cr(b), this.dK.Fl());
        c.iv = this.KL(b);
        c.Po = this.FL(b);
        c.title = this.JL(b);
        c.videoId = this.cr(b);
        c.viewCount = this.LL(b);
        c.viewCountLabel = this.yi.Zf(c.viewCount);
        c.Ev = this.GL(b);
        e = new Date(Date.parse(c.Ev));
        c.uploadedDateLabel = this.yi.PL(e);
        this.NL(c, b);
        this.OL(c, b);
        if (b.app$control && b.app$control.yt$state)
            for (var e = u(b.app$control.yt$state) ? b.app$control.yt$state : [b.app$control.yt$state], f = 0, g = e.length; f < g; ++f)
                if (e[f] && "restricted" == e[f].name) {
                    c.Nb = e[f].reasonCode;
                    break
                }
        return c
    }
    ;
    d.NL = function(a, b) {
        var c = this.SS(b)
          , e = this.RS(b)
          , f = c + e;
        0 < f ? (a.Fj = e / f,
        a.Gj = c / f) : (a.Fj = 0,
        a.Gj = 0);
        a.Ns = e;
        a.dislikesLabel = this.yi.Zf(a.Ns);
        a.dislikesStyle = {
            width: xe(a.Fj)
        };
        a.Os = c;
        a.likesLabel = this.yi.Zf(a.Os);
        a.likesStyle = {
            width: xe(a.Gj)
        }
    }
    ;
    d.OL = function(a, b) {
        a.Pb = !!b.yt$paidContent;
        a.Ap = !!b.yt$paidContent && "free" === b.yt$paidContent.type
    }
    ;
    d.RS = function(a) {
        if (a && a.yt$rating && a.yt$rating.numDislikes)
            return parseInt(a.yt$rating.numDislikes, 10)
    }
    ;
    d.SS = function(a) {
        if (a && a.yt$rating && a.yt$rating.numLikes)
            return parseInt(a.yt$rating.numLikes, 10)
    }
    ;
    d.yp = function() {
        return "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    }
    ;
    d.GL = function(a) {
        return a && a.media$group && a.media$group.yt$uploaded ? new Date(this.ja(a.media$group.yt$uploaded)) : null
    }
    ;
    d.cr = function(a) {
        return a && a.media$group && a.media$group.yt$videoid ? a.media$group.yt$videoid.$t : ""
    }
    ;
    d.IL = function(a) {
        return a && a.media$group && a.media$group.media$description && a.media$group.media$description.$t ? a.media$group.media$description.$t.slice(0, 165) : ""
    }
    ;
    d.JL = function(a) {
        return a && a.title ? a.title.$t : ""
    }
    ;
    d.vy = function(a) {
        return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration.seconds, 10) : 0
    }
    ;
    d.KL = function(a) {
        return !!a.yt$hd
    }
    ;
    d.FL = function(a) {
        return !!a.yt$claimed
    }
    ;
    d.HL = function(a, b) {
        b.media$group && b.media$group.yt$uploaderId && (a.zb = b.media$group.yt$uploaderId.$t);
        b.media$group && b.media$group.media$credit && (a.username = this.Vs(b.media$group.media$credit).$t,
        a.displayName = this.Vs(b.media$group.media$credit).yt$display);
        a.zb && (a.imageUrl = this.ap.$c(a.zb));
        b.yt$paidContent && b.yt$paidContent.link && b.yt$paidContent.link.length && (a.Pb = Ka(b.yt$paidContent.link, function(a) {
            return a.rel && -1 < a.rel.indexOf("channel.indirectOffer")
        }));
        return a
    }
    ;
    d.LL = function(a) {
        return a.yt$statistics ? a.yt$statistics.viewCount : 0
    }
    ;
    d.ML = function(a) {
        return a.batch$status && "200" != a.batch$status.code
    }
    ;
    d.EL = function(a, b) {
        a.videoId = b.batch$id.$t;
        a.Nb = "notAvailable"
    }
    ;
    d.DL = function(a, b) {
        a.videoId = b.batch$id.$t
    }
    ;
    vj.inject = ["locale", "environmentModel", "ytThumbnails"];
    function wj(a, b, c, e, f, g, k, l, n, q, s, r) {
        this.uR = f;
        this.oM = g;
        this.LM = l;
        this.wq = new xd;
        this.re = [];
        this.Il = {};
        this.my = 1;
        this.Wq = 0;
        this.Ze = {};
        t: if (document.implementation && document.implementation.createDocument)
            g = document.implementation.createDocument("http://www.w3.org/2005/Atom", "feed", null);
        else {
            if ("undefined" != typeof ActiveXObject && (g = tj())) {
                g.appendChild(g.createNode(1, "feed", "http://www.w3.org/2005/Atom"));
                break t
            }
            throw Error("Your browser does not support creating new documents");
        }
        this.Dc = new Lc(g);
        Jg.call(this, a, b, c, e, f, k, q, s, r)
    }
    z(wj, Jg);
    d = wj.prototype;
    d.Gw = function(a, b) {
        this.re = a;
        this.Il = b
    }
    ;
    d.MI = function(a) {
        ub(this.Ze, a);
        a = 0;
        for (var b = this.re.length; a < b; ++a) {
            var c = this.re[a];
            if (this.Ze[c]) {
                var e = this.sg(c);
                if (e = this.wq.get(e))
                    e.Eh = this.Ze[c]
            }
        }
    }
    ;
    d.rQ = function() {
        for (var a = [], b = 0, c = this.re.length; b < c; ++b)
            a.push(this.Il[this.re[b]] || "x-unknown");
        return a
    }
    ;
    d.Yq = function() {
        return this.re
    }
    ;
    d.Wl = function(a) {
        a = a || {};
        a.vpsid = this.id;
        return wj.h.Wl.call(this, a)
    }
    ;
    d.Vc = function() {
        return this.uR.useStageGdata ? "//stage.gdata.youtube.com/feeds/api" : "//gdata.youtube.com/feeds/api"
    }
    ;
    d.bP = function(a, b, c, e, f) {
        var g = this.Yq()
          , k = this.my++;
        this.oM.Kb(w(function(l) {
            l && (c.access_token = l);
            this.EO(c, e, w(function(c) {
                if (this.Wq > k)
                    this.Ay(),
                    f && f(b);
                else {
                    this.Wq = k;
                    b.A.clear();
                    for (var e = 0, l = c.length; e < l; ++e) {
                        var r;
                        r = c[e];
                        if ("string" == typeof r)
                            if ("undefined" != typeof DOMParser)
                                r = (new DOMParser).parseFromString(r, "application/xml");
                            else if ("undefined" != typeof ActiveXObject) {
                                var G = tj();
                                G.loadXML(r);
                                r = G
                            } else
                                throw Error("Your browser does not support loading xml documents");
                        r = uj(r);
                        this.bi.parse(b, r)
                    }
                    this.mz(b, g, a);
                    this.Tq();
                    f && f(b)
                }
            }, this))
        }, this))
    }
    ;
    d.Ug = function(a, b, c) {
        var e = {}
          , f = this.aP(e);
        a.serviceQuery = b.query;
        a.Ka = this.LM;
        0 < f.length ? this.bP(e, a, b, f, c) : (a.A.clear(),
        this.Wq = this.my++,
        this.mz(a, this.Yq(), e),
        c && c(a));
        return p
    }
    ;
    d.sg = function(a, b) {
        var c = this.Vc() + "/videos/" + a
          , e = rb(this.Hg || {});
        b && ub(e, b);
        return fg(hg([c], e))
    }
    ;
    d.aP = function(a) {
        for (var b = [], c = 0, e = this.re.length; c < e; ++c) {
            var f = this.re[c]
              , g = this.sg(f)
              , k = this.wq.get(g);
            k ? a[g] = k : b.push(f)
        }
        return b
    }
    ;
    d.EO = function(a, b, c) {
        for (var e = [], f = [], g = 0, k = b.length; g < k; ++g) {
            var l = b[g]
              , n = {};
            l in this.Ze ? e.push({
                video: l,
                AR: this.Ze[l]
            }) : f.push(l)
        }
        for (k = 0; k < f.length; )
            n = Math.min(k + 50, f.length),
            e.push({
                MB: f.slice(k, n)
            }),
            k += 50;
        var q = 0
          , s = []
          , f = w(function(a, b) {
            s[a] = b;
            ++q == e.length && (this.Kr(),
            c(s))
        }, this);
        b = this.Wl(a);
        a = rb(a);
        a.access_token = null;
        g = {
            "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            "Content-Type": "application/atom+xml"
        };
        this.Jr();
        l = 0;
        for (k = e.length; l < k; ++l) {
            var n = e[l]
              , r = na(f, l);
            if (n.MB)
                this.fb.post(b, null, this.wR(b, n.MB), r, null, g);
            else {
                var G = {
                    "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
                    "X-YouTube-VVT": n.AR
                };
                this.fb.get(this.sg(n.video, a), null, r, null, G)
            }
        }
    }
    ;
    d.cL = function(a, b) {
        var c = new $i(this.id,b,"RQ");
        c.channel = new Yi(this.id,b);
        c.videoId = a;
        c.Nb = "notAvailable";
        c.channel.videoId = a;
        return c
    }
    ;
    d.mz = function(a, b, c) {
        if (0 < a.A.H()) {
            for (var e = a.A.ba(), f = 0, g = e.length; f < g; ++f) {
                var k = e[f]
                  , l = this.sg(k.videoId);
                this.wq.pi(l, k);
                c[l] = k
            }
            a.A.clear()
        }
        f = 0;
        for (g = b.length; f < g; ++f)
            e = b[f],
            l = this.sg(e),
            k = c[l] || this.cL(e, a.serviceQuery),
            e in this.Il && (k.Jo = this.Il[e]),
            e in this.Ze && (k.Eh = this.Ze[e]),
            a.A.push(k);
        a.title = "[[Queued Videos|Title above a list of videos that are queued up to be viewed.]]";
        a.Ta = "icon-playlist"
    }
    ;
    d.createElement = function(a, b) {
        var c = this.Dc.WD();
        return c.createElementNS(b || c.documentElement.namespaceURI, a)
    }
    ;
    d.eW = function(a) {
        var b = this.sg(a)
          , c = this.createElement("entry")
          , e = this.createElement("id");
        this.Dc.append(e, b);
        var f = this.createElement("batch:id", "http://schemas.google.com/gdata/batch");
        this.Dc.append(f, a);
        a = this.createElement("link");
        sj(a, {
            rel: "http://schemas.google.com/g/2005#batch",
            type: "application/atom+xml",
            href: b
        });
        this.Dc.appendChild(c, e);
        this.Dc.appendChild(c, f);
        this.Dc.appendChild(c, a);
        return c
    }
    ;
    d.wR = function(a, b) {
        var c = this.Dc.WD().documentElement;
        nc(c);
        var e = this.createElement("id");
        this.Dc.append(e, a);
        var f = this.createElement("batch:operation", "http://schemas.google.com/gdata/batch");
        sj(f, {
            type: "query"
        });
        this.Dc.appendChild(c, e);
        this.Dc.appendChild(c, f);
        e = 0;
        for (f = b.length; e < f; ++e)
            this.Dc.appendChild(c, this.eW(b[e]));
        if ("undefined" != typeof XMLSerializer)
            c = (new XMLSerializer).serializeToString(c);
        else if (c = c.xml,
        !c)
            throw Error("Your browser does not support serializing XML documents");
        return '<?xml version="1.0" encoding="UTF-8"?>' + c
    }
    ;
    function xj(a, b, c, e, f, g, k, l, n, q, s, r, G, Z) {
        K.call(this);
        this.LG = Z;
        this.qH = a;
        this.Ao = b;
        this.Fo = c;
        this.Of = e;
        this.Z = f;
        this.Cv = g;
        this.Gu = k;
        this.IG = n;
        this.Ec = l;
        this.Ho = r;
        this.hc = null;
        this.ad = q;
        this.ic = s;
        this.lp = null;
        this.ek = G;
        this.W = null;
        this.va = "";
        this.Sb = null;
        this.Od = new Og;
        this.yv = !1;
        this.kc = new Og;
        this.Zc = this.fv = "";
        this.Lb = -1;
        this.Ff = 0;
        this.Qf = this.vv = null;
        this.Ge = this.ic.bo ? this.Cv : this.Z;
        this.dd = this.O = this.Ce = null;
        this.sH();
        this.vH();
        this.ic.Ja && this.Cv.uH(w(function() {
            this.dd = new Ki(this);
            this.ic.enableAppDataOnCast && this.dd.To(this.Vo() || "");
            this.tH();
            this.Lu(this.Sb)
        }, this))
    }
    z(xj, K);
    d = xj.prototype;
    d.sH = function() {
        var a = this.Of.get("mdx-device-id");
        a || (a = fj(),
        this.Of.Ra("mdx-device-id", a));
        this.fv = a;
        a = new Pg({
            id: this.fv,
            name: this.ic.Fd,
            type: "LOUNGE_SCREEN",
            app: "lb-v4"
        });
        this.O = new Ai(this.Of.Dm,this,this,a,"");
        if (a = this.Of.get("mdx-paired-devices", 31536E3, !0))
            this.kc.$f(a.map(function(a) {
                return new Pg(a)
            })),
            this.xl(null)
    }
    ;
    d.vH = function() {
        this.ek.b("mdxClearVideo", w(this.lI, this));
        this.ek.b("mdxPlaylistChange", w(this.rI, this));
        this.Z.b("subtitlesModuleGeneration:changed", w(this.pI, this));
        this.Z.b("subtitlesTrack:changed", w(this.qI, this));
        this.Z.b("state:changed", w(this.Sk, this));
        this.Z.b("adPlaying:changed", w(this.jI, this));
        this.Z.b("video:changed", w(this.kI, this));
        this.Ge.b("volumeData:changed", w(function(a) {
            this.O.Ku(a.volume, a.muted)
        }, this));
        this.b("currentVideoId:changed", w(this.O.nw, this.O));
        this.b("currentPlayerState:changed", w(this.O.uI, this.O));
        this.b("remote:connected", w(this.mI, this));
        this.b("remote:disconnected", w(this.nI, this));
        this.b("remote:status", w(this.oI, this));
        this.Gu.b("currentTime:changed", w(function() {
            var a = this.Mf();
            2 <= Math.abs(this.Ff - a) && this.Sk(this.Lb);
            this.Ff = a
        }, this))
    }
    ;
    d.tH = function() {
        this.Ge.b("volumeData:changed", w(function() {
            this.dd.wy()
        }, this));
        this.b("currentPlayerState:changed", w(this.dd.wy, this.dd));
        this.b("currentVideoModel:changed", w(this.Lu, this))
    }
    ;
    d.nV = function() {
        this.O.nw();
        this.O.Br()
    }
    ;
    d.ga = function() {
        var a = this.ic.initReversePairingCode
          , b = !1;
        this.IG.Kb(w(function(c) {
            b || (b = !0,
            this.O.dz(c || ""),
            a || this.O.oq() || this.kc.H() ? this.$y(a) : this.kz())
        }, this))
    }
    ;
    d.xm = function(a) {
        this.O.fB(w(function(b) {
            a && a(b);
            this.kz()
        }, this))
    }
    ;
    d.kz = function() {
        this.ic.enableAppDataOnCast && this.dd && this.dd.To(this.Vo() || "");
        if (this.ic.additionalDataUrlForDial) {
            var a = new Rg(this.ic.additionalDataUrlForDial);
            "localhost" != a.Zd() ? console.warn("Given additionalDataUrl with non-localhost domain: " + a) : this.O.Rz(w(function(b) {
                a.qa("screenId", b.Zb);
                this.LG.get(a.toString())
            }, this))
        }
    }
    ;
    d.$y = function(a) {
        this.xm(w(function() {
            a && this.O.yT(a, p)
        }, this))
    }
    ;
    d.Lu = function(a) {
        a ? this.dd.pE({
            content_id: a.videoId,
            title: a.title,
            duration: a.duration,
            thumbnail_url: a.imageUrl
        }) : this.dd.pE()
    }
    ;
    d.qR = function() {
        this.Of.remove("mdx-paired-devices");
        this.kc.clear();
        this.Od.clear();
        this.O.kO();
        this.Z.Kl(this.O.Jl());
        this.O.oq() && this.xm()
    }
    ;
    d.Kp = function() {
        this.dq();
        this.hg(this.Mb()) && this.jg()
    }
    ;
    d.pause = function() {
        this.Z.pause();
        this.jg()
    }
    ;
    d.Yu = function() {
        this.Z.wl();
        this.hg("")
    }
    ;
    d.aw = function(a) {
        var b = this.ci();
        1081 != b && (0 == b || -1 == b ? this.hg(this.Mb(), a) && this.jg() : (this.Z.cq(a, !0),
        this.jg()))
    }
    ;
    d.jJ = function(a, b, c) {
        this.dq();
        this.hg(a, c) && this.jg()
    }
    ;
    d.bw = function(a) {
        this.Ge.zn(a)
    }
    ;
    d.iq = function() {
        return this.Ge.vg()
    }
    ;
    d.Zk = function() {
        return this.Ge.zi()
    }
    ;
    d.$v = function() {
        this.Ge.yn()
    }
    ;
    d.cw = function() {
        this.Ge.An()
    }
    ;
    d.iJ = function(a, b) {
        (b.name || b.languageCode) && this.Z.Ov() ? (this.Qf = b,
        this.Qf.videoId = a) : (this.Qf = null,
        this.Z.Cm())
    }
    ;
    d.Vv = function() {
        var a = this.Z.subtitlesTrack;
        return !pb(a) && a || null
    }
    ;
    d.Mf = function() {
        return this.va != this.Zc || this.Z.isPlayingAd ? 0 : 1 == this.Lb || 2 == this.Lb || 3 == this.Lb || 0 == this.Lb ? this.Gu.currentTime : 0
    }
    ;
    d.ci = function() {
        return this.Z.isPlayingAd ? 1081 : this.va != this.Zc ? 3 : -1E3 == this.Lb ? -1E3 : this.Lb
    }
    ;
    d.Mb = function() {
        return this.va || ""
    }
    ;
    d.cy = function(a, b) {
        this.O.dz(b);
        this.O.MS(a, b);
        b && this.xm()
    }
    ;
    d.gL = function(a, b) {
        this.O.jU(a, b)
    }
    ;
    d.Vo = function() {
        return this.O.iU() || ""
    }
    ;
    d.YG = function() {
        this.O.kU()
    }
    ;
    d.Jf = function(a, b) {
        return a != this.va ? (this.Lb = (this.va = a) ? 3 : -1,
        this.Ff = 0,
        this.Qf = null,
        b || this.G("currentVideoId:changed", this.va),
        this.Kd(this.Gd()),
        !0) : !1
    }
    ;
    d.Mw = function(a, b) {
        this.hc = Pi(this.Ec, "[[YouTube Remote Playlist|Title of playlist created by a user using a remote mobile device (like an Android phone).]]", "icon-remote", "dial");
        this.Pp(w(this.O.ov, this.O), [a], ["fling"], {}, 0, b, !0, !0)
    }
    ;
    d.Pp = function(a, b, c, e, f, g, k, l) {
        this.Ce && (this.Ce(),
        this.Ce = null);
        if (0 == b.length)
            this.Yu(),
            this.Ec.Gw([], {}),
            this.hc && this.hc.load(p),
            this.W = null,
            a([]);
        else {
            this.hc || (this.hc = Pi(this.Ec, "[[YouTube Remote Playlist|Title of playlist created by a user using a remote mobile device (like an Android phone).]]", "icon-remote", this.ic.initReversePairingCode ? "dial" : "mdx"));
            var n = ""
              , q = !1;
            this.W && this.W === this.hc || (this.W = this.hc,
            q = !0);
            var s = !1;
            if (void 0 === f) {
                var r = this.Mb();
                f = r ? b.indexOf(r) : -1;
                q && r && this.ad.vh(this.ad.currentVideo, this.W)
            } else
                0 > f ? (this.Zc = "",
                this.hg("")) : (this.dq(),
                n = b[f],
                s = this.Jf(n, !0) || !!k);
            for (var q = {}, r = 0, G = c.length; r < G; ++r)
                q[b[r]] = c[r];
            0 <= f && this.hc.Oa(f);
            e && this.ic.enableVideoVerificationTokens && this.Ec.MI(e);
            this.Ec.Gw(b, q);
            s && (this.G("currentVideoId:changed", this.va),
            this.Kd(this.Gd()));
            this.hc.load(w(function() {
                n && n == this.va && (this.Kd(this.Gd()),
                this.hg(n, g, k, l) && this.jg());
                a(this.rk())
            }, this))
        }
    }
    ;
    d.Nm = function(a) {
        if (this.W)
            if (this.W instanceof Vi && 0 == this.W.numLoadedPages)
                for (var b = this.W.Qp, c = 0, e = b.length; c < e && !a(b[c]); ++c)
                    ;
            else
                for (b = this.W.model.A.ba(),
                c = 0,
                e = b.length; c < e && !a(b[c]); ++c)
                    ;
    }
    ;
    d.Bp = function() {
        var a = [];
        this.W && (this.W.service && this.W.service.id == this.Ec.id ? a = this.Ec.Yq() : this.Nm(function(b) {
            a.push(b.videoId)
        }));
        return a
    }
    ;
    d.vN = function() {
        var a = [];
        this.W && (this.W.service && this.W.service.id == this.Ec.id ? a = this.Ec.rQ() : this.Nm(function(b) {
            b.Jo ? a.push(b.Jo) : a.push("lb-" + b.Ka.toLowerCase())
        }));
        return a
    }
    ;
    d.fJ = function(a) {
        this.W ? a(this.rk()) : a([])
    }
    ;
    d.SA = function() {
        var a = "unknown";
        this.Sb && (this.Sb.Nb || (this.Sb.Nb = "notAvailable"),
        a = this.Sb.Nb);
        return new zi(this.va,a,"PLAYER_ERROR")
    }
    ;
    d.jI = function() {
        this.Sk(this.Lb)
    }
    ;
    d.Sk = function(a) {
        this.Zc != this.va || !this.va || -1E3 == this.Lb && -1 == a || (this.Ff = this.Mf(),
        this.Lb = a,
        this.Ho.clearTimeout(this.Zx),
        0 == a ? this.oB() : this.Zx = this.Ho.setTimeout(w(this.oB, this), 50))
    }
    ;
    d.oB = function() {
        this.Zx = 0;
        if (this.Zc == this.va) {
            var a = this.ci();
            1 == a && this.Sb && this.Sb.Nb && (this.Sb.Nb = null,
            this.O.ev(this.rk()));
            this.G("currentPlayerState:changed", a)
        }
    }
    ;
    d.kI = function() {
        var a = this.ad.currentVideo;
        this.Ff = (this.Zc = a = a ? a.videoId : "") ? this.Mf() : 0;
        this.Jf(a) || (this.Kd(this.Gd()),
        this.Sk(this.Lb))
    }
    ;
    d.lI = function() {
        this.Zc = "";
        this.Jf("")
    }
    ;
    d.rI = function(a) {
        this.wv(a.detail)
    }
    ;
    d.wv = function(a) {
        var b = !1;
        if (!this.W || !this.W.equals(a)) {
            var c = "";
            c = a && a != this.hc ? (b = a.Ae()) ? b.videoId || "" : "" : this.va;
            b = this.Jf(c, !0);
            this.Zc = c;
            this.Ff = 0;
            this.Ce && (this.Ce(),
            this.Ce = null);
            a instanceof Ri && (this.Ce = a.b("numPagesLoaded:changed", w(function() {
                this.wv(a)
            }, this)))
        }
        c = !(!a.service || a.service.id != this.Ec.id);
        this.W = a;
        var e = this.rk();
        c ? (b && this.G("currentVideoId:changed", this.va),
        e && e.length && this.O.ev(e)) : this.O.ov(e);
        this.Kd(this.Gd())
    }
    ;
    d.Dp = function() {
        this.lp || (this.lp = this.Fo.zX().application);
        return this.lp
    }
    ;
    d.Xv = function(a, b, c, e) {
        e && a && this.Z.fO();
        this.ek.l("request-playback", {
            data: a,
            pd: b,
            startTime: c
        })
    }
    ;
    d.AK = function(a, b) {
        var c = this.ad.BJ();
        c && c.oa && c.oa != this.W.service.id && this.ad.vh(this.ad.currentVideo, this.W);
        c = this.Z.state;
        if ((0 == c || -1 == c) && this.Dp().jw()) {
            this.ad.currentVideo = null;
            this.Ao.state("browse", {});
            this.ek.G("request-close-dialog");
            var e = this.Gd()
              , f = this.W;
            this.Ho.Wp(w(function() {
                e.videoId == this.va && this.Xv(e, f, a, b)
            }, this)).start(250);
            return !0
        }
        if (0 == c)
            return this.Z.CJ(a || 0),
            !1;
        this.Z.Vf();
        void 0 === a || b || this.Z.cq(a, !0);
        return !1
    }
    ;
    d.Px = function(a, b, c, e, f) {
        e && f && !this.O.oq() && a.Pb && !a.Ap && this.ic.enableVideoVerificationTokens && !a.Eh || (this.Xv(a, b, c, e),
        this.Fo.Rb())
    }
    ;
    d.hg = function(a, b, c, e) {
        var f = this.Dp();
        if (!a)
            return this.Jf("", !0),
            this.G("currentVideoId:changed", ""),
            this.Kd(null),
            f.Ea() && (this.Ao.state("browse", {}),
            this.Fo.Rb()),
            !1;
        if (!this.W)
            return !1;
        this.Jf(a);
        if ((f.Ea() || f.jw()) && this.ad.currentVideo && this.ad.currentVideo.videoId == a)
            return !this.AK(b, c);
        f = this.Gd();
        if (!f) {
            var g = this.W;
            this.hc.load(w(function() {
                if (a == this.va && g == this.W) {
                    var f = this.Gd();
                    this.Kd(f);
                    f ? this.Px(f, g, b, c, e) : console.warn("MDx ensurePlayerFocus failed to load video for playback request: " + a + ", time=" + b)
                }
            }, this));
            return !1
        }
        this.Kd(f);
        this.Px(f, this.W, b, c, e);
        return !1
    }
    ;
    d.rk = function() {
        var a = [];
        this.Nm(function(b) {
            b.Nb && "limitedSyndication" != b.Nb && a.push(new zi(b.videoId,b.Nb,"NOT_PLAYABLE"))
        });
        return a
    }
    ;
    d.Gd = function() {
        var a = null
          , b = this.va;
        this.Nm(function(c) {
            if (c.videoId == b)
                return a = c,
                !0
        });
        return a
    }
    ;
    d.Kd = function(a) {
        this.Sb && a && this.Sb.videoId == a.videoId || !this.Sb && !a || (this.Sb = a,
        this.G("currentVideoModel:changed", a))
    }
    ;
    d.jg = function() {
        var a = this.Dp();
        !a.Ea() || a.ld && !a.Fh() || this.Ao.mode("transport")
    }
    ;
    d.xl = function(a) {
        if (a) {
            var b = new Pg(a.MA());
            a = b.id.indexOf("#");
            0 < a && (b.id = b.id.substr(0, a));
            var c = !1;
            a = this.kc.ba();
            this.kc.$f(a.map(function(a) {
                return a.id == b.id ? (c = !0,
                b) : a
            }));
            c || (this.kc.unshift(b),
            this.Of.Ra("mdx-paired-devices", this.kc.ba().map(function(a) {
                return a.MA()
            }), 31536E3, !0))
        }
        this.kc.pP(function(a, b) {
            var c = (a.df ? 0 : 1) - (b.df ? 0 : 1);
            if (0 != c)
                return c;
            var c = (new Qg(a)).displayString
              , k = (new Qg(b)).displayString;
            return ua(c, k)
        })
    }
    ;
    d.oI = function(a) {
        for (var b = this.kc.ba(), c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            f.df = !1
        }
        this.Od.$f(a);
        a = this.Od.ba();
        c = 0;
        for (e = a.length; c < e; ++c)
            f = a[c],
            f.df = !0,
            this.xl(f);
        this.Z.Kl(this.O.Jl());
        this.G("pairing:changed")
    }
    ;
    d.mI = function(a) {
        var b = this.Od.ba().filter(function(b) {
            return b.id != a.id
        });
        a.df = !0;
        b.unshift(a);
        this.Od.$f(b);
        this.xl(a);
        this.Z.Kl(this.O.Jl());
        this.G("pairing:changed")
    }
    ;
    d.nI = function(a) {
        this.Od.$f(this.Od.ba().filter(function(b) {
            return b.id != a.id
        }));
        for (var b = this.kc.ba(), c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            f.id == a.id && (f.df = !1)
        }
        this.xl(null);
        this.Z.Kl(this.O.Jl());
        this.G("pairing:changed")
    }
    ;
    d.qI = function() {
        if (this.va && this.va == this.Zc) {
            var a = this.Vv();
            !a || a.name || a.languageCode || (a = null);
            this.hz(this.vv, a) || (this.vv = a,
            this.O.Wv(this.va, a))
        }
    }
    ;
    d.hz = function(a, b) {
        return a && b ? a.id && b.id && a.id == b.id ? !0 : (!a.type || !b.type || a.type === b.type) && (!a.format || !b.format || a.format === b.format) && (!a.name || !b.name || a.name === b.name) && a.languageCode === b.languageCode : !a == !b
    }
    ;
    d.pI = function() {
        var a = this.Qf;
        this.Qf = null;
        if (a && a.videoId && a.videoId == this.Mb()) {
            for (var b = this.Z.ly(), c = !1, e = 0, f = b.length; e < f; ++e)
                if (this.hz(b[e], a)) {
                    this.Z.Hr(b[e]);
                    c = !0;
                    break
                }
            c || this.Z.Cm()
        }
    }
    ;
    d.Hk = function() {
        return this.Od
    }
    ;
    d.Dk = function() {
        return this.kc
    }
    ;
    d.dq = function() {
        this.yv || (this.yv = !0,
        this.qH.Je("start_dial", "rply_rqd"))
    }
    ;
    xj.inject = "csiService locationService angularHelper localStorage playerFacade eurekaService progressModel remoteQueueService authService watchModel environmentModel timeService rootDispatcher ytHttp".split(" ");
    var yj = angular.module("yt.tv.localization", ["ng"]);
    yj.service("locale", ug);
    yj.service("messages", tg);
    yj.service("time", Yf);
    yj.value("applicationPath", "");
    yj.config(["$provide", "$httpProvider", function(a, b) {
        a.decorator("$interpolate", ["$delegate", "locale", function(a, e) {
            b.defaults.transformResponse.push(function(a) {
                return angular.isString(a) ? e.ca(a) : a
            });
            var f = na(yj.cV, e, a);
            f.startSymbol = a.startSymbol;
            f.endSymbol = a.endSymbol;
            return f
        }
        ])
    }
    ]);
    yj.cV = function(a, b, c, e) {
        var f = a.ca(c)
          , g = b(f, f == c && e);
        return g ? function(b) {
            b = g(b);
            return a.ca(b)
        }
        : null
    }
    ;
    function zj(a, b, c, e) {
        this.name = "pair";
        N.call(this);
        this.Wh = b;
        this.pH = c;
        this.Do = a;
        this.tv = this.He = 0;
        this.vu = !0;
        this.displayPairingCode = this.zv = e.ca("[[Loading...|Tooltip displaying while connecting a mobile device with the application.]]");
        this.qrCodeImageUrl = "";
        this.connectedDevices = new Og;
        this.Wh.Hk().b("items:changed", w(this.Rv, this))
    }
    z(zj, N);
    d = zj.prototype;
    d.ff = function() {
        zj.h.ff.call(this);
        this.OI = this.o.querySelector(".connected-list")
    }
    ;
    d.ready = function() {
        zj.h.ready.call(this);
        this.Rv()
    }
    ;
    d.J = function() {
        zj.h.J.call(this);
        0 != this.He && (this.Do.clearTimeout(this.He),
        this.He = 0)
    }
    ;
    d.B = function() {
        this.tv = 0;
        this.Wh.xm(w(function() {
            this.by()
        }, this))
    }
    ;
    d.eL = function(a) {
        return a.match(/.../g).join(" ")
    }
    ;
    d.by = function() {
        this.displayPairingCode = this.zv;
        this.qrCodeImageUrl = "";
        this.Qa();
        this.He && (this.Do.clearTimeout(this.He),
        this.He = 0);
        var a = "pair";
        v(this.data) && (a = this.data);
        this.vu && "pair" == a && 4 < ++this.tv ? this.l("request-close-dialog") : (0 < this.Wh.Dk().H() && (a += "-ytr"),
        this.He = this.Do.setTimeout(w(this.by, this), 3E5),
        this.Wh.gL(a, w(function(a) {
            this.displayPairingCode = this.eL(a);
            this.pH.bk || (this.qrCodeImageUrl = "http://chart.apis.google.com/chart?cht=qr&chs=350x350&chl=http%3A%2F%2Fm.youtube.com%2Fpair%3FpairingCode%3D" + a);
            this.Qa()
        }, this)))
    }
    ;
    d.Rv = function() {
        var a = this.Wh.Hk().ba();
        this.kg(this.OI, 0 < a.length);
        this.connectedDevices.clear();
        for (var b = 0, c = a.length; b < c; ++b)
            this.connectedDevices.push(new Qg(a[b]));
        this.Qa()
    }
    ;
    zj.inject = ["timeService", "remoteService", "environmentModel", "locale"];
    function Aj() {
        K.call(this);
        this.wf = 0;
        this.Ia = []
    }
    z(Aj, K);
    d = Aj.prototype;
    d.push = function(a) {
        this.aF("push", a)
    }
    ;
    d.unshift = function(a) {
        this.aF("unshift", a)
    }
    ;
    d.ba = function() {
        return this.Ia.slice()
    }
    ;
    d.$ = function(a) {
        return this.Ia[a]
    }
    ;
    d.AO = function(a) {
        return Ga(this.Ia, a)
    }
    ;
    d.v9 = function(a) {
        this.Ia = a.slice();
        this.wf = a.length;
        this.gf(this.Ia)
    }
    ;
    d.u9 = function(a, b) {
        this.Ia[a] = b;
        this.wf = this.Ia.length;
        this.gf(b)
    }
    ;
    d.H = function() {
        return this.wf
    }
    ;
    d.slice = function(a, b) {
        var c = new Aj, e;
        switch (arguments.length) {
        case 0:
            e = this.Ia.slice();
            break;
        case 1:
            e = this.Ia.slice(a);
            break;
        case 2:
            e = this.Ia.slice(a, b)
        }
        c.push(e);
        return c
    }
    ;
    d.splice = function(a, b, c) {
        var e = new Aj, f;
        switch (arguments.length) {
        case 0:
            f = this.Ia.splice();
            break;
        case 1:
            f = this.Ia.splice(a);
            break;
        case 2:
            f = this.Ia.splice(a, b);
            break;
        default:
            f = this.Ia.splice.apply(this.Ia, arguments)
        }
        this.wf = this.Ia.length;
        this.gf();
        e.push(f);
        return e
    }
    ;
    d.clear = function() {
        this.wf = this.Ia.length = 0;
        this.gf()
    }
    ;
    d.gf = function(a) {
        this.G("items:changed", a)
    }
    ;
    d.aF = function(a, b) {
        var c = u(b) ? b : [b]
          , e = c.length;
        0 < e && (this.Ia[a].apply(this.Ia, c),
        this.wf += e,
        this.gf(b))
    }
    ;
    function Bj() {
        Aj.call(this);
        this.Rs = -1
    }
    z(Bj, Aj);
    d = Bj.prototype;
    d.bl = function(a) {
        if (this.MR(a)) {
            var b = this.Rs;
            this.Rs = a;
            this.G("selectedIndex:changed", a, b)
        }
    }
    ;
    d.Pe = function() {
        return this.Rs
    }
    ;
    d.Ae = function() {
        return this.$(this.Pe())
    }
    ;
    d.MR = function(a) {
        return 0 === this.H() ? -1 === a : !isNaN(a) && 0 <= a && a < this.H() && a !== this.Pe()
    }
    ;
    d.gf = function(a) {
        0 === this.H() && -1 !== this.Pe() ? this.bl(-1) : 0 < this.H() && -1 === this.Pe() && this.bl(0);
        Bj.h.gf.call(this, a)
    }
    ;
    function Cj(a, b, c, e, f, g, k, l, n, q) {
        q = {
            client: "youtube",
            ds: "yt",
            hl: q.language
        };
        x(q, n);
        Jg.call(this, a, b, c, e, f, g, k, l, q)
    }
    z(Cj, Jg);
    Cj.prototype.load = function(a, b) {
        var c = []
          , e = {};
        x(e, this.Hg);
        a && x(e, this.lS("query", "q", a));
        this.Jr();
        var f = this.Wl()
          , f = this.fb.jsonp(f, e, w(function(a) {
            this.Kr();
            a = a[1];
            for (var f = RegExp("^" + Da(e.q), "i"), l = a.length, n = 0; n < l; ++n)
                f.test(a[n][0]) && c.push(a[n][0]);
            this.Tq();
            b && b(c)
        }, this));
        return new ag(c,f)
    }
    ;
    Cj.prototype.Vc = function() {
        return "//clients1.google.com"
    }
    ;
    function Dj(a) {
        K.call(this);
        this.lY = a;
        this.suggestions = new Bj;
        this.$n = null
    }
    z(Dj, K);
    Dj.prototype.update = function(a) {
        this.$n && (this.$n(),
        this.$n = null);
        a ? this.$n = this.lY.load({
            query: a
        }, w(function(a) {
            this.suggestions.clear();
            this.suggestions.push(a)
        }, this)).cancel : this.suggestions.clear()
    }
    ;
    Dj.inject = ["suggestionService"];
    function Mg(a, b, c) {
        return Gd('<div class="$' + a + '"></div>', c, b)
    }
    ;function Ej(a) {
        this.sc = a;
        this.wc = !0
    }
    Ej.prototype.tQ = function() {
        this.wc = !F(Ua(this.sc.o), "horizontal");
        this.sc.b("keydown", w(this.lJ, this));
        this.sc.b("mouseover", w(this.mJ, this))
    }
    ;
    Ej.prototype.lJ = function(a) {
        var b = 0
          , b = a.keyCode;
        if (40 == b && this.wc || 39 == b && !this.wc)
            b = 1;
        else if (38 == b && this.wc || 37 == b && !this.wc)
            b = -1;
        else
            return;
        M(a, !1, !0);
        a = this.sc.model;
        a.bl(a.Pe() + b);
        this.sc.Qa()
    }
    ;
    Ej.prototype.mJ = function(a) {
        for (a = a.target; a && a.parentNode != this.sc.o; )
            a = a.parentNode;
        var b = a && a.rg && a.rg.model;
        b && (a = this.sc.model,
        b = a.AO(b),
        a.bl(b),
        this.sc.Qa())
    }
    ;
    Ej.prototype.KM = function() {
        if (this.sc.model instanceof Bj) {
            var a = this.sc.model.Pe();
            -1 != a && this.sc.ss(a).B()
        }
    }
    ;
    function Fj() {
        N.call(this);
        this.itemFactory = this.model = null;
        this.mA = -1;
        this.Ex = new Ej(this)
    }
    z(Fj, N);
    d = Fj.prototype;
    d.ff = function() {
        this.o.children.length && this.sQ();
        this.Ex.tQ()
    }
    ;
    d.sQ = function() {
        for (var a = null, b, c = rc(this.o), e = 0, f = c.length; e < f; ++e)
            if (tc(c[e])) {
                a = pc(c[e]);
                break
            }
        a && (-1 == a.className.indexOf("$") && Va(a, "$component"),
        b = a.outerHTML,
        this.itemFactory = function() {
            return Gd(b, null, this.injector)
        }
        )
    }
    ;
    d.SV = function() {
        var a = this.uA();
        0 <= this.mA && (a = this.mA);
        var b = this.o.children;
        if (a > b.length)
            for (b = b.length; b < a; ++b)
                this.sz(this.model.$(b));
        else
            for (; a < b.length; )
                this.Wr(b.length - 1)
    }
    ;
    d.uA = function() {
        return this.model ? this.model.H() : 0
    }
    ;
    d.sz = function(a, b) {
        var c;
        if (this.itemFactory)
            c = this.itemFactory(a);
        else if (a && a.cd)
            c = Mg(a.cd, this.injector);
        else
            throw Error("Attempt to create a list item without factory or name.");
        t(b) ? (oc(this.o, c.o, b),
        this.XP(c, b)) : (this.o.appendChild(c.o),
        this.addChild(c))
    }
    ;
    d.ready = function() {
        this.itemName && (this.itemFactory = function() {
            return Mg(this.itemName, this.injector)
        }
        );
        this.IE()
    }
    ;
    d.Mp = function(a) {
        Fj.h.Mp.call(this, a);
        this.eb && this.MM(this.eb)
    }
    ;
    d.Qa = function(a) {
        this.isActive && this.Ex.KM();
        Fj.h.Qa.call(this, a)
    }
    ;
    d.wm = function() {
        this.iz("items:changed", w(this.IE, this))
    }
    ;
    d.IE = function() {
        this.SV();
        this.Qa(!0)
    }
    ;
    d.yB = function() {
        for (var a = 0, b = this.children.length; a < b; ++a) {
            var c = this.children[a]
              , e = this.model ? this.model.$(a) : null;
            c && c.model && e && e.cd && c.model.cd != e.cd && (Nc(c),
            this.sz(e, a),
            c = this.children[a]);
            c.model = e;
            c.Qa()
        }
    }
    ;
    d.a7 = function(a) {
        return this.model.$(a)
    }
    ;
    d.MM = function(a) {
        a = a.o;
        var b = this.wc ? "offsetTop" : "offsetLeft"
          , c = this.wc ? "offsetHeight" : "offsetWidth"
          , e = this.wc ? "scrollTop" : "scrollLeft"
          , f = a[b] >= this.o[e]
          , g = a[b] + a[c] <= this.o[e] + this.o[c];
        f && g || (this.o[e] = f ? a[b] + a[c] - this.o[c] : a[b])
    }
    ;
    function Gj(a) {
        N.call(this);
        this.model = a;
        this.zq = null
    }
    z(Gj, N);
    d = Gj.prototype;
    d.ff = function() {
        this.b("keyup", w(this.FM, this))
    }
    ;
    d.ready = function() {
        this.zq = this.ss(0)
    }
    ;
    d.B = function() {
        Gj.h.B.call(this);
        this.zq.B()
    }
    ;
    d.J = function() {
        this.zq.J();
        Gj.h.J.call(this)
    }
    ;
    d.update = function(a) {
        this.model.update(a)
    }
    ;
    d.FM = function(a) {
        if (13 == a.keyCode) {
            var b = this.model.suggestions.Pe();
            0 <= b && (a.stopPropagation(),
            this.l("suggest", this.model.suggestions.$(b)))
        }
    }
    ;
    Gj.inject = ["suggestionsModel"];
    function Hj(a) {
        N.call(this);
        this.jK = a;
        this.$x = new Ij;
        this.rD = "";
        this.Zp = this.zw = this.Ur = null
    }
    z(Hj, N);
    Hj.prototype.I = function() {
        this.$x = null;
        Hj.h.I.call(this)
    }
    ;
    Hj.prototype.ff = function() {
        this.Ur = this.o.querySelector(".video-thumb");
        this.zw = this.o.querySelector(".details");
        this.Zp = this.o.querySelector(".set");
        this.kg(this.Zp, !1);
        this.sk = this.o.querySelector(".activity");
        this.tk = this.o.querySelector(".duration")
    }
    ;
    Hj.prototype.wp = function(a) {
        Hj.h.wp.call(this, a);
        this.model && !this.model.cv && (a = this.model.channel.zb == this.model.channel.serviceQuery ? this.model.zh || this.model.channel.displayName : this.jK.ca(this.model.Yc),
        this.model.Yc = a,
        this.model.cv = !0,
        this.model.Yc = this.model.Yc.replace("{{username}}", this.model.zh || this.model.channel.displayName))
    }
    ;
    Hj.prototype.Qa = function(a) {
        Hj.h.Qa.call(this, a);
        this.kg(this.o, !!this.model);
        this.model && (this.kg(this.Zp, this.model instanceof Jj),
        this.kg(this.tk, this.model.xh),
        Id(this.zw, "backgroundImage", this.model.fo || this.model.channel.imageUrl || ""),
        this.YI(),
        this.kg(this.sk, this.model.Yc))
    }
    ;
    Hj.prototype.getDescriptionText = function() {
        return this.model ? ye(this.model.description, 90) : ""
    }
    ;
    Hj.prototype.YI = function() {
        this.model && this.model.imageUrl !== this.rD && this.Ur && (this.$x.ED(this.Ur, this.model.imageUrl, "preloaded"),
        this.rD = this.model.imageUrl)
    }
    ;
    Hj.inject = ["locale"];
    function Kj() {
        K.call(this);
        this.F0 = 150;
        this.C0 = 75;
        this.G0 = 20;
        this.clear()
    }
    z(Kj, K);
    d = Kj.prototype;
    d.start = function(a, b) {
        this.clear();
        b || (this.un = a);
        this.Ms(a)
    }
    ;
    d.LK = function(a) {
        this.Ms(a)
    }
    ;
    d.KK = function(a) {
        this.un ? 150 >= a.timeStamp - this.un.timeStamp && this.G("tap", a) : this.Ms(a);
        this.clear();
        this.un = null
    }
    ;
    d.clear = function() {
        this.MC = 0;
        this.tt = NaN;
        this.On = null
    }
    ;
    d.Xj = function(a) {
        return isNaN(this.tt) ? !0 : 20 >= Math.abs(this.tt - a)
    }
    ;
    d.Ms = function(a) {
        var b = a && a.changedTouches && a.changedTouches[0] ? a.changedTouches[0] : a
          , b = {
            x: b.screenX,
            y: b.screenY
        };
        this.On || (this.On = b);
        this.MC = this.KV(this.On, b);
        b = this.JV(this.On, b);
        this.LV(a);
        this.tt = b
    }
    ;
    d.LV = function(a) {
        75 <= this.MC && (this.Xj(90) ? this.Un("swiperight", a) : this.Xj(-90) ? this.Un("swipeleft", a) : this.Xj(0) ? this.Un("swipedown", a) : (this.Xj(180) || this.Xj(-180)) && this.Un("swipeup", a))
    }
    ;
    d.Un = function(a, b) {
        this.G(a, this.un);
        this.clear();
        this.start(b, !0)
    }
    ;
    d.KV = function(a, b) {
        var c = this.PE(a, b);
        return Math.round(Math.sqrt(c.x * c.x + c.y * c.y))
    }
    ;
    d.PE = function(a, b) {
        return a && b ? {
            x: b.x - a.x,
            y: b.y - a.y
        } : {
            x: 0,
            y: 0
        }
    }
    ;
    d.JV = function(a, b) {
        if (a && b) {
            var c = this.PE(a, b);
            return Math.round(180 * Math.atan2(c.x, c.y) / Math.PI)
        }
        return NaN
    }
    ;
    function V(a, b, c) {
        this.UC = c;
        this.Pj = null;
        this.uT = a;
        this.keyCode = b;
        this.et = 500;
        this.In = !1
    }
    V.prototype.Nj = function() {
        this.In || (this.In = !0);
        var a = new Date
          , b = a - this.Pj;
        if (!this.Pj || b > this.et)
            this.Pj && (this.et = 100),
            this.Pj = a,
            this.UC.Ln("keydown", this.keyCode)
    }
    ;
    V.prototype.Oj = function() {
        this.In && (this.In = !1,
        this.Pj = null,
        this.et = 500,
        this.UC.Ln("keyup", this.keyCode))
    }
    ;
    function Lj(a) {
        var b = angular.element(a)
          , c = !1
          , e = 0;
        b.bind("mousedown", function(a) {
            c = !0;
            e = a.pageY;
            M(a)
        });
        b.bind("mouseup", function() {
            c = !1;
            e = NaN
        });
        b.bind("mousemove", function(b) {
            if (c) {
                var g = Math.min(a.scrollHeight, Math.max(0, a.scrollTop + (e - b.pageY)));
                a.scrollTop = g;
                M(b)
            }
        });
        return !0
    }
    ;function Mj(a, b) {
        this.SC = a;
        this.QC = new V(-1,37,b);
        this.RC = new V(-1,39,b);
        this.TC = new V(-1,38,b);
        this.OC = new V(-1,40,b)
    }
    Mj.prototype.update = function() {
        var a = this.SC.movementX
          , b = this.SC.movementY;
        -0.5 > a ? this.QC.Nj() : this.QC.Oj();
        0.5 < a ? this.RC.Nj() : this.RC.Oj();
        -0.5 > b ? this.TC.Nj() : this.TC.Oj();
        0.5 < b ? this.OC.Nj() : this.OC.Oj()
    }
    ;
    function Nj(a, b, c, e, f, g, k, l, n, q) {
        bj.call(this);
        this.pA = c;
        this.CO = a;
        this.HO = n;
        this.Xr = e;
        this.BO = f;
        this.Km = b;
        this.GO = l;
        this.FO = k;
        this.dA = g;
        this.qA = q;
        this.Ng = this.Fg = this.lj = null;
        this.qp = this.Nx = !1
    }
    z(Nj, bj);
    d = Nj.prototype;
    d.load = function(a) {
        this.CO.Kb(w(function(b) {
            var c = w(function(b) {
                this.PB(b);
                this.Km.Je("start_browse", "ar_r");
                a && a()
            }, this);
            this.Km.Je("start_browse", "ar_rq");
            b ? this.BO.load(c) : this.Xr.Mc && (this.Xr.Mc("start_browse", "", "feed_rs", "feed_r"),
            this.Xr.load({}, c))
        }, this))
    }
    ;
    d.PB = function(a) {
        this.rows = a;
        this.Fg || (this.Fg = this.FO.vQ());
        a = this.rows.length;
        a = this.pA.Jb(Md) ? Math.min(a, 1) : a;
        this.rows.splice(a, 0, this.Fg);
        a = this.pA.initChannelId;
        !this.lj && a && (this.lj = Si(this.HO, "", this.qA.$c(a), a),
        this.lj.uQ(this.qA));
        this.lj && this.rows.unshift(this.lj);
        this.Ng || (this.Ng = this.GO.wQ());
        this.Ng.clear();
        this.rows.push(this.Ng)
    }
    ;
    d.VA = function() {
        this.Ng && this.Ng.load()
    }
    ;
    d.lw = function(a) {
        a && a.service && "searchService" === a.service.id && (this.dA.FB(a.model.serviceQuery, a.$(0), a.model.Ee),
        this.Fg && this.RB())
    }
    ;
    d.WU = function() {
        this.dA.clear();
        this.RB()
    }
    ;
    d.RB = function() {
        this.Fg.load();
        this.Fg.Oa(0)
    }
    ;
    Nj.inject = "authService csiService environmentModel featuredService personalDataService searchHistoryService searchRowService settingsRowService userUploadsService ytThumbnails".split(" ");
    function Oj(a, b, c, e, f, g, k, l, n, q, s) {
        Nj.call(this, a, b, c, e, f, g, k, l, n, q);
        this.YV = s
    }
    z(Oj, Nj);
    Oj.prototype.load = function(a) {
        this.Km.Je("start_browse", "ar_rq");
        this.YV.load({}, w(this.XV, this, a || p))
    }
    ;
    Oj.prototype.XV = function(a, b) {
        this.PB(b);
        this.rows = b;
        this.Km.Je("start_browse", "ar_r");
        a()
    }
    ;
    Oj.inject = "authService csiService environmentModel featuredService personalDataService searchHistoryService searchRowService settingsRowService userUploadsService ytThumbnails guideService".split(" ");
    function Pj(a, b) {
        P.call(this);
        this.sb = U;
        this.eD = a;
        this.EU = b
    }
    z(Pj, P);
    Pj.prototype.parse = function(a, b) {
        var c = m("contents.sectionListRenderer.contents", b);
        if (c)
            for (var e = 0, f = c.length; e < f; ++e) {
                var g = m("itemSectionRenderer.contents", c[e]);
                if (g)
                    this.fQ(a, g);
                else {
                    a.$a = "Can not parse item. Found keys: " + jb(c[e]).join(", ");
                    a.A.clear();
                    break
                }
            }
        else
            a.$a = "Can not parse response. Found keys: " + jb(b).join(", ")
    }
    ;
    Pj.prototype.fQ = function(a, b) {
        for (var c = 0, e = b.length; c < e; ++c) {
            var f = b[c];
            if (f.videoRenderer)
                this.eD.Dn(a, f.videoRenderer);
            else if (f.playlistRenderer)
                this.EU.iC(a, f.playlistRenderer);
            else
                for (var g in f)
                    if (0 <= g.indexOf("Renderer")) {
                        this.eD.Dn(a, f[g]);
                        break
                    }
        }
    }
    ;
    Pj.$inject = ["innerTubeVideoParser", "innerTubePlaylistParser"];
    function Qj(a) {
        if (v(a))
            return a;
        if (!a || !m("runs.length", a))
            return "";
        for (var b = "", c = 0, e = a.runs.length; c < e; ++c) {
            var f = a.runs[c]
              , g = f.text;
            f.bold && (g = "<strong>" + g + "</strong>");
            f.italics && (g = "<em>" + g + "</em>");
            b += g
        }
        return b
    }
    ;function Rj(a) {
        P.call(this);
        this.service = a
    }
    z(Rj, P);
    Rj.prototype.parse = function(a, b) {
        for (var c = b.contents || b.items, e = 0, f = c.length; e < f; ++e) {
            var g = c[e].guideSectionRenderer;
            g ? Array.prototype.push.apply(a, this.c_(g)) : a.push(Pi({}, 'UNSUPPORTED "' + hb(c[e]) + '"', ""))
        }
    }
    ;
    Rj.prototype.c_ = function(a) {
        a = a.items || a.section.items;
        for (var b = [], c = 0, e = a.length; c < e; ++c) {
            var f;
            f = {};
            var g = a[c].guideEntryRenderer || a[c]
              , k = g.navigationEndpoint;
            "browseEndpoint"in k ? (f.title = this.sY(g),
            f.zY = this.rY(g),
            g = new Mi,
            g.browseId = k.browseEndpoint.browseId,
            k = "",
            g.browseId && 0 == g.browseId.indexOf("UC") && (k = g.browseId.substr(2)),
            f = Pi(this.service, f.title, f.zY, k, g)) : (k = ob(k, function(a, b) {
                return 0 <= b.indexOf("Endpoint")
            }),
            f.title = "Can't render \"" + k + '"',
            f = Pi({}, f.title, ""));
            b.push(f)
        }
        return b
    }
    ;
    Rj.prototype.rY = function(a) {
        return m("thumbnail.thumbnails.0.url", a) || console.error("Cannot retrieve section thumbnail!") || ""
    }
    ;
    Rj.prototype.sY = function(a) {
        return Qj(a.title)
    }
    ;
    Rj.inject = ["browseService"];
    function Jj(a, b) {
        this.imageUrl = "";
        this.oa = a;
        this.serviceQuery = b;
        this.videoId = this.title = "";
        this.$A = [];
        this.es = this.$_ = this.id = this.Oe = "";
        this.fp = "request-playlist-playback";
        this.channel = null;
        this.qv = this.pv = ""
    }
    ;function Sj(a, b) {
        P.call(this);
        this.sb = U;
        this.KA = a;
        this.Tz = b;
        this.Lg = Qj
    }
    z(Sj, P);
    d = Sj.prototype;
    d.iC = function(a, b) {
        var c = this.us(a, b);
        a && a.A && c && a.A.push(c)
    }
    ;
    d.us = function(a, b) {
        var c = new Jj(a.oa,a.serviceQuery)
          , e = new Yi(a.oa,a.serviceQuery)
          , f = this.nR(b);
        if (!f)
            return c.title = "Not a playlist renderer.",
            c.channel = e,
            console.error("InnerTube playlist parser: not a playlist!", hb(m("data.target", b))),
            c;
        c.$A = this.kR(b, e, a);
        var g = c.$A[0];
        c.channel = this.eR(e, b);
        c.imageUrl = this.gR(b);
        c.title = g ? g.title : "Error: playlist empty";
        c.pv = this.fR(b);
        c.id = f;
        c.videoId = this.dR(b);
        c.es = this.hR(b);
        c.uploadedDateLabel = this.oR(b);
        c.qv = "1 of " + c.es;
        c.description = ":Video description missing:";
        return c
    }
    ;
    d.eR = function(a, b) {
        a.zb = m("owner.channelId", b);
        a.username = m("owner.title", b);
        a.displayName = this.Lg(m("ownerText", b) || ":Owner missing:");
        a.zb && (a.imageUrl = this.Tz.$c(a.zb));
        return a
    }
    ;
    d.dR = function(a) {
        return (a = m("videos", a)) && 0 < a.length ? a[0].videoId : ""
    }
    ;
    d.nR = function(a) {
        return m("playlistId", a)
    }
    ;
    d.gR = function(a) {
        var b = "";
        a.thumbnails && 0 < a.thumbnails.length && (b = (b = m("thumbnails.0.thumbnails.0.url", a)) ? b.replace("mqdefault", this.KA.Fl()) : "");
        return b
    }
    ;
    d.oR = function(a) {
        return this.Lg(m("publishedTimeText", a))
    }
    ;
    d.kR = function(a, b, c) {
        a = m("videos", a);
        var e = [];
        if (a)
            for (var f = 0, g = a.length; f < g; ++f) {
                var k = new $i(c.oa,c.serviceQuery,c.Ka);
                k.videoId = m("childVideoRenderer.videoId", a[f]);
                k.title = this.Lg(m("childVideoRenderer.title", a[f]));
                k.channel = b;
                k.xh = this.Lg(m("childVideoRenderer.lengthText", a[f]));
                k.videoId && (k.imageUrl = this.Tz.Rk(k.videoId, this.KA.Fl()));
                e.push(k)
            }
        return e
    }
    ;
    d.fR = function(a) {
        return this.Lg(m("title", a)) + " " + this.Lg(m("ownerText", a))
    }
    ;
    d.hR = function(a) {
        return m("videoCount", a)
    }
    ;
    Sj.inject = ["environmentModel", "ytThumbnails"];
    function Tj(a, b) {
        P.call(this);
        this.sb = U;
        this.NB = a;
        this.CR = b
    }
    z(Tj, P);
    Tj.prototype.parse = function(a, b) {
        var c = m("contents.sectionListRenderer.contents.0.itemSectionRenderer.contents", b);
        if (c) {
            a.Ee = m("estimatedResults", b);
            for (var e = 0, f = c.length; e < f; ++e) {
                var g = c[e];
                m("videoRenderer", g) ? this.NB.Dn(a, m("videoRenderer", g)) : m("playlistRenderer", g) ? this.CR.iC(a, m("playlistRenderer", g)) : this.NB.Dn(a, g)
            }
        } else
            a.$a = "Can not parse response. Found keys: " + jb(b).join(", ")
    }
    ;
    Tj.inject = ["innerTubeVideoParser", "innerTubePlaylistParser"];
    function Uj(a, b, c) {
        P.call(this);
        this.sb = U;
        this.xB = a;
        this.WL = b;
        this.gy = c;
        this.Zg = Qj
    }
    z(Uj, P);
    d = Uj.prototype;
    d.Dn = function(a, b) {
        var c = this.xR(a, b);
        a && a.A && c && a.A.push(c)
    }
    ;
    d.xR = function(a, b) {
        var c = new $i(a.oa,a.serviceQuery,a.Ka)
          , e = new Yi(a.oa,a.serviceQuery)
          , f = this.iN(b);
        if (!f)
            return c.title = "Not a video renderer.",
            c.channel = e,
            console.error("InnerTube video parser: not a video!", hb(m("data.target", b))),
            c;
        c.Yc = this.cN();
        c.description = this.fN(b);
        c.channel = this.eN(e, b);
        c.duration = this.hN(b);
        c.xh = this.gN(b);
        c.imageUrl = this.gy.Rk(f, this.WL.Fl());
        c.iv = this.kN(b);
        c.Po = this.dN(b);
        c.title = this.jN(b);
        c.videoId = f;
        c.viewCount = this.mN(b);
        c.viewCountLabel = this.lN(b);
        c.uploadedDateLabel = this.pN(b);
        this.nN(c, b);
        this.oN(c, b);
        if (e = m("app$control.yt$state", b))
            for (var e = u(e) ? e : [e], f = 0, g = e.length; f < g; ++f)
                if (e[f] && "restricted" == e[f].name) {
                    c.Nb = e[f].reasonCode;
                    break
                }
        return c
    }
    ;
    d.fN = function(a) {
        return (a = this.Zg(m("descriptionSnippet", a)) || ": Video description missing :") && a.slice(0, 165) || ""
    }
    ;
    d.eN = function(a, b) {
        a.zb = m("owner.channelId", b);
        a.username = m("owner.title", b);
        a.displayName = this.Zg(m("ownerText", b) || ":Owner missing:");
        a.imageUrl = m("owner.image.thumbnails.0.url", b) || this.gy.$c(a.zb);
        return a
    }
    ;
    d.hN = function(a) {
        return parseInt(m("lengthMs", a) / 1E3, 10)
    }
    ;
    d.gN = function(a) {
        return this.Zg(m("lengthText", a))
    }
    ;
    d.iN = function(a) {
        return m("videoId", a)
    }
    ;
    d.dN = function() {
        return !1
    }
    ;
    d.jN = function(a) {
        return this.Zg(m("title", a))
    }
    ;
    d.mN = function(a) {
        return m("viewCount", a)
    }
    ;
    d.lN = function(a) {
        return this.Zg(m("viewCountText", a))
    }
    ;
    d.pN = function(a) {
        return this.Zg(m("publishedTimeText", a))
    }
    ;
    d.nN = function(a, b) {
        var c = this.xT(b)
          , e = this.wT(b)
          , f = c + e;
        0 < f ? (a.Fj = e / f,
        a.Gj = c / f) : (a.Fj = 0,
        a.Gj = 0);
        a.Ns = e;
        a.dislikesLabel = this.xB.Zf(a.Ns);
        a.dislikesStyle = {
            width: xe(a.Fj)
        };
        a.Os = c;
        a.likesLabel = this.xB.Zf(a.Os);
        a.likesStyle = {
            width: xe(a.Gj)
        }
    }
    ;
    d.xT = function(a) {
        return m("likes", a)
    }
    ;
    d.wT = function(a) {
        return m("dislikes", a)
    }
    ;
    d.cN = function() {
        return "[[{{username}} uploaded a video|The message that describes user activity. Displayed when a user has uploaded a video.]]"
    }
    ;
    d.oN = function(a) {
        a.Pb = !1;
        a.Ap = !1
    }
    ;
    d.kN = function() {
        return !1
    }
    ;
    Uj.inject = ["locale", "environmentModel", "ytThumbnails"];
    function Vj(a, b, c, e, f, g, k, l, n, q, s) {
        this.eV = g;
        this.OA = !0;
        g = {
            context: {
                client: {
                    hl: "en",
                    gl: "US",
                    clientName: "TVHTML5",
                    clientVersion: "LIVE"
                }
            }
        };
        x(m("context.client", g), m("context.client", q));
        x(m("context", g), m("context", q));
        Jg.call(this, a, b, c, e, f, k, l, n, g, s)
    }
    z(Vj, Jg);
    Vj.prototype.Vc = function() {
        return this.xd.useTestInnerTube ? "//www-googleapis-test.sandbox.google.com/youtubei/vi" : "//www.googleapis.com/youtubei/vi"
    }
    ;
    Vj.prototype.Aj = function() {
        return "POST"
    }
    ;
    Vj.prototype.load = function(a, b) {
        this.eV.Kb(w(function(c) {
            var e = {
                "Content-Type": "application/json"
            };
            c && (e.Authorization = "Bearer " + c);
            c = this.OB();
            c.serviceQuery = a.query;
            this.bt(a, b, null, c, e)
        }, this))
    }
    ;
    Vj.prototype.VC = function(a) {
        a && "" === m("context.client.hl") && (a.context.client.hl = this.tA.Ma)
    }
    ;
    function W(a, b) {
        this.e0 = this.templateUrl = this.title = this.className = "";
        this.Ly = this.Cg = !1;
        this.mU = a || p;
        this.nC = b || p;
        this.So = "[[OK|Standard button title in a dialog popup. Accepts changes made by a user.]]";
        this.Ro = "[[Cancel|Standard button title in a dialog popup. Usually closes the dialog without performing any action.]]";
        this.dv = "confirm-dialog-cancel-button"
    }
    ;function Wj(a, b) {
        W.call(this, a, b);
        this.title = "[[Captions Settings|Settings screen where the user can choose the language of subtitles or turn them off.]]";
        this.widgetName = "yt:closedcaptions"
    }
    z(Wj, W);
    function Xj(a) {
        W.call(this);
        this.title = "Debug Info";
        this.templateUrl = Q.g + "/dialogs/debug_info.html";
        this.className = "text-dialog";
        this.Ix = a.xN()
    }
    z(Xj, W);
    function Yj(a, b) {
        W.call(this);
        this.title = "[[Tell us what you think or report an issue|Title of a page where user can submit their issue or provide a feedback.]]";
        this.widgetName = "yt:helpFeedback";
        this.className = "feedback";
        this.baseUrl = a ? "www.youtube.com/ps3_feedback" : "www.youtube.com/tv_feedback";
        this.qrCodeUrl = this.baseUrl + "?" + Ge(b)
    }
    z(Yj, W);
    function Zj(a, b) {
        W.call(this, null, b);
        this.title = "[[Submit a claim for:|Displayed in a dialog when a user decides to claim that a video infringes copyrights. Followed by a list of options.]]";
        this.templateUrl = Q.g + "/dialogs/flag_claim.html";
        this.video = a;
        this.sq = "youtu.be/" + this.video.videoId
    }
    z(Zj, W);
    function ak() {
        W.call(this);
        this.title = "[[Flag This Video For:|Displayed in a dialog when a user decides to claim that a video is inappropriate. Followed by a list of options.]]";
        this.widgetName = "yt:flagoptions"
    }
    z(ak, W);
    function bk(a, b) {
        W.call(this, null, b);
        this.title = "[[To Flag this video|Tooltip helping a user to mark a video as inappropriate. Followed by a list of steps that needs to be performed.]]";
        this.templateUrl = Q.g + "/dialogs/flag_video.html";
        this.video = a;
        this.sq = "youtu.be/" + this.video.videoId
    }
    z(bk, W);
    function ck(a) {
        W.call(this);
        this.title = "[[Get help with YouTube on TV|Title of a page where user can access to the help articles on how to use YouTube on TV application.]]";
        this.widgetName = "yt:helpFeedback";
        this.className = "help";
        this.baseUrl = a ? "www.youtube.com/ps3_help" : "www.youtube.com/tv_help"
    }
    z(ck, W);
    function dk(a, b, c) {
        W.call(this, a, c);
        this.title = b || "[[Sign in to YouTube:|Dialog title helping a user to sign in to YouTube via this application.|12570103]]";
        this.widgetName = "loginInfo"
    }
    z(dk, W);
    function ek(a, b) {
        W.call(this, b);
        this.title = "[[Sign Out?|Dialog title asking a user if she wants to sign out from her YouTube account via this application.]]";
        this.templateUrl = Q.g + "/dialogs/logout_info.html";
        this.Cg = !0;
        this.qi = a
    }
    z(ek, W);
    function fk(a, b, c) {
        W.call(this, b, c);
        this.title = "[[Payment Required|Title of a dialog that asks user to make a payment in order to play a video.]]";
        this.templateUrl = Q.g + "/dialogs/paid_channel_info.html";
        this.JN = a
    }
    z(fk, W);
    fk.prototype.zO = function() {
        return "www.youtube.com/user/" + this.JN
    }
    ;
    function gk(a, b) {
        W.call(this, a, b);
        this.title = "[[YouTube TV is requesting permission to:|Dialog title that tells users that the application is requestin new permissions. The list of permissions will follow this title.]]";
        this.templateUrl = Q.g + "/dialogs/paid_scope.html";
        this.type = "remote-pair";
        this.Ly = this.Cg = !0;
        this.So = "[[Accept|Text on button that accepts new permissions]]";
        this.Ro = "[[Sign out|Text on button that signs user out of application]]";
        this.className = "text-dialog";
        this.dv = "confirm-dialog-ok-button"
    }
    z(gk, W);
    function hk(a, b, c) {
        W.call(this, b, c);
        this.title = "[[Playback Error.|Tooltip displayed when a video cannot be played.]]";
        this.templateUrl = Q.g + "/dialogs/player_error_info.html";
        this.Cg = !0;
        this.className = "player-error-dialog";
        this.So = "[[Next Video|Button title in a dialog popup. Proceeds playback to the next video.]]";
        this.Ro = "[[Back to Guide|Button title in a dialog popup. Navigates back to the main Guide page.]]";
        this.$a = a
    }
    z(hk, W);
    hk.prototype.bO = function() {
        return this.$a
    }
    ;
    function ik() {
        W.call(this);
        this.title = "[[Pair your phone, tablet or laptop.|Tooltip helping a user to connect their mobile device with the application.|11149392]]";
        this.widgetName = "pairing";
        this.type = "remote-pair"
    }
    z(ik, W);
    function jk(a, b) {
        W.call(this, b);
        this.title = "[[Remove Paired Devices?|Dialog title asking a user for a confirmation to disconnect any mobile devices paired with the application]]";
        this.templateUrl = Q.g + "/dialogs/remote_reset_info.html";
        this.Cg = !0;
        this.className = "remote-reset-dialog";
        this.type = "remote-reset";
        this.bN = a
    }
    z(jk, W);
    jk.prototype.DM = function() {
        return this.bN.Dk()
    }
    ;
    function kk(a, b) {
        W.call(this);
        this.templateUrl = Q.g + "/dialogs/scrollable_dialog.html";
        this.title = a || "";
        this.contentUrl = b || ""
    }
    z(kk, W);
    function lk(a, b) {
        W.call(this, a, b);
        this.title = "[[Signed Out|Dialog title that informs the user that they are signed out of the application]]";
        this.templateUrl = Q.g + "/dialogs/signed_out_info.html";
        this.Cg = !0;
        this.className = "text-dialog"
    }
    z(lk, W);
    function mk(a, b, c, e, f) {
        W.call(this, e, f);
        this.templateUrl = Q.g + "/dialogs/simple_dialog.html";
        this.title = a || "";
        this.contentUrl = b || "";
        this.className = c || "text-dialog"
    }
    z(mk, W);
    function X(a, b, c, e, f, g, k) {
        this.kf = a;
        this.cd = b;
        this.fp = c;
        this.title = e || "";
        this.iconClass = f || "";
        this.description = g || "";
        this.tileClass = k || "";
        this.ca()
    }
    X.prototype.ca = function() {
        this.title = this.kf.ca(this.title);
        this.description = this.kf.ca(this.description)
    }
    ;
    function nk(a, b, c, e) {
        this.deviceCount = e;
        this.Gy = this.Fy = "";
        X.call(this, a, b, c)
    }
    z(nk, X);
    nk.prototype.ca = function() {
        nk.h.ca.call(this);
        this.Fy = this.kf.ca("[[PAIR DEVICE|Title of menu item that allows a user to pair one mobile device with the application.]]");
        this.Gy = this.kf.ca("[[PAIR ANOTHER DEVICE|Title of menu item that allows a user to pair an additional mobile device with the application.]]")
    }
    ;
    nk.prototype.getTitle = function() {
        return 0 < this.deviceCount ? this.Gy : this.Fy
    }
    ;
    nk.prototype.getTitleClass = function() {
        return 0 < this.deviceCount ? "long-title" : ""
    }
    ;
    function ok(a, b, c, e, f, g) {
        this.TL = f;
        this.imageUrl = g;
        this.totalResultsLocalized = "";
        X.call(this, a, b, c, e)
    }
    z(ok, X);
    ok.prototype.ca = function() {
        ok.h.ca.call(this);
        this.totalResultsLocalized = this.kf.Zf(this.TL)
    }
    ;
    function pk(a, b, c, e) {
        this.searchCount = e;
        X.call(this, a, b, c)
    }
    z(pk, X);
    function qk(a, b, c, e) {
        this.channel = e || null;
        X.call(this, a, b, c)
    }
    z(qk, X);
    function rk(a, b, c, e, f, g) {
        this.tE = g || p;
        this.yy = this.zy = null;
        X.call(this, a, b, c, e, "", f)
    }
    z(rk, X);
    rk.prototype.ca = function() {
        rk.h.ca.call(this);
        this.zy = this.kf.ca("[[Enabled|Explanatory text that says a feature is currently enabled.]]");
        this.yy = this.kf.ca("[[Disabled|Explanatory text that says a feature is currently Disabled.]]")
    }
    ;
    rk.prototype.getToggleStatus = function() {
        return this.tE() && this.zy || this.yy || ""
    }
    ;
    rk.prototype.getToggleClass = function() {
        return this.tE() ? "enabled" : "disabled"
    }
    ;
    function sk(a, b, c) {
        this.text = a;
        this.Pc = {
            type: b
        };
        c && x(this.Pc, c)
    }
    ;function tk(a) {
        this.fX = a;
        this.Jt = {};
        this.Kt = []
    }
    tk.prototype.get = function(a) {
        return this.Jt[a]
    }
    ;
    tk.prototype.Yb = function() {
        return this.Kt
    }
    ;
    tk.prototype.rs = function(a, b) {
        var c = this.get(a);
        this.Jt[a] = b;
        !c && this.Kt.push(a) > this.fX && (c = this.Kt.shift(),
        delete this.Jt[c])
    }
    ;
    function uk() {
        this.Pb = !1
    }
    uk.CACHE_TYPE = "channel_paid_info";
    function vk() {
        K.call(this);
        this.message = ""
    }
    z(vk, K);
    me(vk, ["message"]);
    function wk(a, b) {
        this.top = a || 0;
        this.left = b || 0
    }
    ;function xk(a, b, c) {
        $i.call(this, a, b, c);
        this.fi = "";
        this.Nf = 5
    }
    z(xk, $i);
    xk.prototype.SP = function(a) {
        for (var b in a)
            this[b] = a[b]
    }
    ;
    function yk(a, b) {
        bj.call(this);
        this.RP = a;
        this.ys = b
    }
    z(yk, bj);
    yk.prototype.load = function() {
        this.clear();
        var a = Wi(this.RP, "", "", this.ys.currentVideo.videoId, null, "postplaytile")
          , b = this.ys.Sq();
        if (b) {
            var c = new xk(b.oa,b.serviceQuery,b.Ka);
            c.SP(b);
            c.fi = this.ys.Mk().model.title;
            a.kp(c)
        }
        a.TP(3);
        this.rows.push(a)
    }
    ;
    yk.inject = ["relatedVideosService", "watchModel"];
    function zk() {
        this.Nr = this.r0 = this.className = this.message = this.id = "";
        this.AA = !1;
        this.Xs = this.zA = 0
    }
    ;function Ak() {
        K.call(this);
        this.percentageScrolled = 0
    }
    z(Ak, K);
    me(Ak, ["percentageScrolled"]);
    function Bk(a) {
        bj.call(this);
        this.e_ = a
    }
    z(Bk, bj);
    Bk.prototype.load = function() {
        this.rows.push(Si(this.e_, "", "icon-search"))
    }
    ;
    Bk.inject = ["searchService"];
    function Ck(a, b, c, e, f) {
        K.call(this);
        this.vU = a.useInnerTube ? f : c;
        this.i0 = a;
        this.WT = b;
        this.h0 = 1500;
        this.VT = e.Wp(this.XU, 1500, this);
        this.query = "";
        this.sm = null;
        this.YA = !1
    }
    z(Ck, K);
    me(Ck, ["query"]);
    d = Ck.prototype;
    d.B$ = function() {
        this.query = ""
    }
    ;
    d.TX = function() {
        this.sm = new U
    }
    ;
    d.XU = function() {
        this.query && (this.YA = !0,
        this.vU.load({
            query: this.query
        }, this.eY(this.query)))
    }
    ;
    d.Ga = function() {
        return !this.query
    }
    ;
    d.eY = function(a) {
        return w(function(b) {
            this.YA = !1;
            this.query === a && (b.serviceQuery = a,
            this.sm = b,
            this.G("results:changed", b))
        }, this)
    }
    ;
    d.Hc = function(a) {
        a != this.query && (a && (a = a.replace("\n", "")),
        this.query = (a = this.WT.SX(a) ? "" : a) || "",
        this.TX(),
        this.VT.start())
    }
    ;
    d.bC = function(a) {
        this.Hc(this.query + a)
    }
    ;
    d.vm = function() {
        this.query.length && this.Hc(this.query.slice(0, -1))
    }
    ;
    Ck.inject = ["environmentModel", "debugCallService", "searchService", "timeService", "innerTubeSearchService"];
    function Dk(a) {
        this.It = null;
        this.BY = a
    }
    Dk.prototype.oV = function(a, b) {
        var c = new zd(window);
        c.responseType = "arraybuffer";
        c.get(this.BY, w(function(c) {
            a.decodeAudioData(c, w(function(a) {
                this.It = a;
                b()
            }, this), function(a) {
                console.error("Error in loading sound:", a)
            })
        }, this))
    }
    ;
    function Ek(a) {
        this.id = fj();
        this.Qr = this.wB = a.ik;
        this.Lm = 0;
        this.Rr = a.lk;
        this.Fm = this.dj = this.hj = this.Em = 0;
        this.ej = ""
    }
    Ek.prototype.dT = function() {
        return O({
            id: this.id,
            recentActive: this.wB,
            firstActive: this.Qr,
            prevActive: this.Lm,
            firstActiveGeo: this.Rr,
            loginState: this.Em,
            recentLogin: this.hj,
            firstLogin: this.dj,
            prevLogin: this.Fm,
            uga: this.ej
        })
    }
    ;
    function Fk() {
        this.DE = "";
        this.Hm = []
    }
    Fk.prototype.aA = function() {
        return this.Hm.join("")
    }
    ;
    Fk.prototype.HC = function(a) {
        this.DE = a
    }
    ;
    Fk.prototype.UO = function() {
        return this.DE
    }
    ;
    function Gk(a, b, c) {
        vj.call(this, a, b, c);
        this.Sa("videoFromEntry", this.Bl)
    }
    z(Gk, vj);
    d = Gk.prototype;
    d.Bl = function(a, b) {
        for (var c = this.kL(b), e = c.length, f = 0; f < e; ++f) {
            var g = c[f];
            if (this.mL(g))
                return c = Gk.h.Bl.call(this, a, g.entry[0]),
                c.Yc = this.yp(b),
                c.zh = this.Lx(b),
                e = this.jL(b),
                c.fo = this.ap.$c(e),
                c
        }
        return null
    }
    ;
    d.jL = function(a) {
        return a.author && a.author[0] ? this.ja(a.author[0].yt$userId) : ""
    }
    ;
    d.Lx = function(a) {
        return a.author && a.author[0] ? this.ja(a.author[0].name) : ""
    }
    ;
    d.cr = function(a) {
        return a && a.id && a.id.$t || ""
    }
    ;
    d.vy = function(a) {
        return a.media$group && a.media$group.yt$duration ? parseInt(a.media$group.yt$duration, 10) : 0
    }
    ;
    d.mL = function(a) {
        return a.rel && "http://gdata.youtube.com/schemas/2007#video" === a.rel
    }
    ;
    d.kL = function(a) {
        return a && a.link || []
    }
    ;
    d.yp = function(a) {
        if (!a)
            return "";
        var b = this.Lx(a)
          , c = a.category && a.category[1] && a.category[1].term && a.category[1].term.toUpperCase();
        return b && c && le[c] || this.ja(a.title)
    }
    ;
    Gk.inject = ["locale", "environmentModel", "ytThumbnails"];
    function Hk() {
        P.call(this);
        this.sb = Xi;
        this.Sa("entry", this.XT)
    }
    z(Hk, P);
    Hk.prototype.XT = function(a, b, c) {
        a.Bs = this.Vj(c, "device_watchpage.watermark.image.url");
        a.dm = this.Vj(c, "generictv_watchpage.banner.image.url");
        a.JA = this.Vj(c, "channel.banner.tv.image.url");
        a.kn = this.Vj(c, "watchpage.global.featured_playlist.id");
        a.PT = this.Vj(c, "channel.featured_video_module.video_id.string");
        return a
    }
    ;
    Hk.prototype.Vj = function(a, b) {
        return a && a.yt$option ? this.EZ(a.yt$option, b) : ""
    }
    ;
    Hk.prototype.EZ = function(a, b) {
        for (var c = a.length, e, f = 0; f < c; ++f)
            if (e = a[f],
            e.name === b)
                return e.$t;
        return ""
    }
    ;
    function Ik() {
        P.call(this);
        this.sb = uk;
        this.Sa("entry", this.DT);
        this.Sa("yt$paidContent", this.ET)
    }
    z(Ik, P);
    Ik.prototype.DT = function(a, b, c) {
        this.parse(a, c)
    }
    ;
    Ik.prototype.ET = function(a, b, c) {
        a.Pb = !!c
    }
    ;
    function Jk() {
        $f.call(this);
        this.sb = U
    }
    z(Jk, $f);
    Jk.prototype.eh = function(a, b, c) {
        c.forEach(function(b) {
            var c = new Yi(a.oa,a.serviceQuery);
            this.parse(c, b);
            a.A.push(this.js(c, b))
        }, this);
        return a
    }
    ;
    Jk.prototype.js = function(a, b) {
        a.displayName = this.qZ(b) || a.username;
        a.id = this.rZ(b);
        return a
    }
    ;
    Jk.prototype.qZ = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.ja(a.content.entry[0].title) : ""
    }
    ;
    Jk.prototype.rZ = function(a) {
        return a && a.content && a.content.entry && a.content.entry[0] ? this.ja(a.content.entry[0].yt$channelId) : ""
    }
    ;
    function Kk(a, b) {
        P.call(this);
        this.FU = a;
        this.eT = b;
        this.$S = {
            FLtrends: "icon-trends",
            SFon_the_web: "icon-trends",
            FLYTOTVAllMusic: "icon-music",
            FLYTOTVmusic: "icon-music",
            STmost_popular_Music: "icon-music",
            FLYTOTVgaming: "icon-gaming",
            STmost_popular_Games: "icon-gaming",
            FLYTOTVsports: "icon-sport",
            STmost_popular_Sports: "icon-sport",
            FLYTOTVfilm: "icon-film",
            STmost_popular_Film: "icon-film",
            STmost_popular_Entertainment: "icon-entertainment",
            STmost_popular_Comedy: "icon-lol",
            STmost_popular_News: "icon-news",
            STmost_popular_People: "icon-people",
            STmost_popular_Tech: "icon-rocket",
            STmost_popular_Howto: "icon-lips",
            STmost_popular_Education: "icon-education",
            STmost_popular_Animals: "icon-pets",
            STmost_popular: "icon-star"
        };
        this.Sa("sets", this.aV)
    }
    z(Kk, P);
    Kk.prototype.aV = function(a, b, c) {
        c.forEach(function(b) {
            this.WZ(a, b)
        }, this);
        return a
    }
    ;
    Kk.prototype.WZ = function(a, b) {
        var c = b.title
          , e = b.gdata_list_id
          , f = e.substr(0, 2)
          , g = e.substr(2);
        try {
            var k = this.FU.get(f)
              , l = Si(k, c || "", this.hZ(e, g), g);
            a.push(l)
        } catch (n) {}
    }
    ;
    Kk.prototype.hZ = function(a, b) {
        var c = this.$S[a];
        !c && a.match(/^UU.+/) && (c = this.eT.$c(b));
        return c
    }
    ;
    Kk.inject = ["$injector", "ytThumbnails"];
    function Lk() {
        $f.call(this);
        this.sb = U
    }
    z(Lk, $f);
    d = Lk.prototype;
    d.eh = function(a, b, c) {
        c.forEach(function(b) {
            var c = new Jj(a.oa,a.serviceQuery);
            this.parse(c, b);
            a.A.push(this.us(c, b))
        }, this);
        return a
    }
    ;
    d.us = function(a, b) {
        a.id = this.lV(b);
        a.serviceQuery = a.id;
        a.imageUrl = this.gV(b);
        a.es = this.iV(b);
        a.Oe = this.hV(b);
        a.imageUrl && (a.videoId = this.fV(a));
        return a
    }
    ;
    d.lV = function(a) {
        return this.ja(a.yt$playlistId)
    }
    ;
    d.gV = function(a) {
        return a.media$group && a.media$group.media$thumbnail && a.media$group.media$thumbnail[0].url || ""
    }
    ;
    d.iV = function(a) {
        return this.ja(a.yt$countHint)
    }
    ;
    d.hV = function(a) {
        return a.author && a.author[0].name ? this.ja(a.author[0].name) : ""
    }
    ;
    d.fV = function(a) {
        a = a.imageUrl.split("/");
        return a[a.length - 2]
    }
    ;
    function Mk(a) {
        K.call(this);
        this.aW = a;
        this.Ad = {};
        this.KW()
    }
    z(Mk, K);
    d = Mk.prototype;
    d.KW = function() {
        for (var a in Kd)
            this.Mm(Kd[a])
    }
    ;
    d.Mm = function(a) {
        var b = this.aW.DW(a);
        this.Ad[a] = new tk(b)
    }
    ;
    d.get = function(a, b) {
        return this.Ad[a] && this.Ad[a].get(b)
    }
    ;
    d.lL = function(a) {
        return this.Ad[a] && this.Ad[a].Yb()
    }
    ;
    d.as = function(a, b, c) {
        this.Ad[a] && (this.Ad[a].rs(b, c),
        this.G("cache:changed", a))
    }
    ;
    d.hP = function(a, b) {
        if (this.Ad[a]) {
            for (var c in b)
                this.Ad[a].rs(c, b[c]);
            this.G("cache:changed", a)
        }
    }
    ;
    Mk.inject = ["environmentModel"];
    function Nk(a) {
        $f.call(this);
        this.sb = U;
        this.LO = a
    }
    z(Nk, $f);
    d = Nk.prototype;
    d.eh = function(a, b, c) {
        var e = {};
        c.forEach(function(b) {
            var c = new Yi(a.oa,a.serviceQuery);
            this.parse(c, b);
            c = this.js(c, b);
            c.displayName && (a.A.push(c),
            e[c.username] = this.iP(b))
        }, this);
        this.LO.hP("subscription", e);
        return a
    }
    ;
    d.js = function(a, b) {
        a.id = this.DY(b);
        a.username = this.EY(b);
        a.displayName = this.CY(b) || a.username;
        return a
    }
    ;
    d.EY = function(a) {
        return this.ja(a.yt$username)
    }
    ;
    d.CY = function(a) {
        return a && a.yt$username && a.yt$username.display ? a.yt$username.display : ""
    }
    ;
    d.DY = function(a) {
        return this.ja(a.yt$channelId)
    }
    ;
    d.iP = function(a) {
        return this.ja(a.id)
    }
    ;
    Nk.$inject = ["cacheService"];
    function Ok() {
        $f.call(this);
        this.sb = Yi;
        this.Sa("yt$username", this.FS);
        this.Sa("title", this.HS);
        this.Sa("media$thumbnail", this.DS);
        this.Sa("yt$statistics", this.ES)
    }
    z(Ok, $f);
    d = Ok.prototype;
    d.eh = function(a, b, c) {
        this.parse(a, c);
        a.displayName || (a.displayName = a.title)
    }
    ;
    d.FS = function(a, b, c) {
        a.username = this.ja(c);
        c.display && (a.displayName = c.display)
    }
    ;
    d.HS = function(a, b, c) {
        a.title = this.ja(c)
    }
    ;
    d.DS = function(a, b, c) {
        a.imageUrl = c.url
    }
    ;
    d.ES = function(a, b, c) {
        a.IQ = c.subscriberCount;
        a.viewCount = c.totalUploadViews
    }
    ;
    function Pk() {
        N.call(this);
        this.eventName = this.label = ""
    }
    z(Pk, N);
    Pk.prototype.EM = function(a) {
        13 == a.keyCode && this.BZ()
    }
    ;
    Pk.prototype.BZ = function() {
        this.l(this.eventName)
    }
    ;
    Pk.prototype.ff = function() {
        this.b("keyup", w(this.EM, this))
    }
    ;
    function Qk(a, b) {
        var c = Array.prototype.slice.call(arguments)
          , e = c.shift();
        if ("undefined" == typeof e)
            throw Error("[goog.string.format] Template required");
        return e.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, e, l, n, q, s, r) {
            if ("%" == q)
                return "%";
            var G = c.shift();
            if ("undefined" == typeof G)
                throw Error("[goog.string.format] Not enough arguments");
            arguments[0] = G;
            return Rk[q].apply(null, arguments)
        })
    }
    var Rk = {
        s: function(a, b, c) {
            return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
        },
        f: function(a, b, c, e, f) {
            e = a.toString();
            isNaN(f) || "" == f || (e = a.toFixed(f));
            var g;
            g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
            0 <= a && (e = g + e);
            if (isNaN(c) || e.length >= c)
                return e;
            e = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
            a = c - e.length - g.length;
            0 <= b.indexOf("-", 0) ? e = g + e + Array(a + 1).join(" ") : (b = 0 <= b.indexOf("0", 0) ? "0" : " ",
            e = g + Array(a + 1).join(b) + e);
            return e
        },
        d: function(a, b, c, e, f, g, k, l) {
            return Rk.f(parseInt(a, 10), b, c, e, 0, g, k, l)
        }
    };
    Rk.i = Rk.d;
    Rk.u = Rk.d;
    function Sk(a) {
        Fj.call(this);
        this.xt = a;
        this.TA = this.PA = this.model = null;
        this.QW()
    }
    z(Sk, Fj);
    d = Sk.prototype;
    d.Qa = function(a) {
        Sk.h.Qa.call(this, !0);
        a && this.Ry()
    }
    ;
    d.wm = function() {
        Sk.h.wm.call(this);
        this.iz("selectedIndex:changed", w(this.Ry, this))
    }
    ;
    d.ss = function(a) {
        return this.children[a % this.model.GZ()]
    }
    ;
    d.uA = function() {
        return this.model && this.model.GZ() || 0
    }
    ;
    d.Ry = function() {
        for (var a = 0, b = this.children.length; a < b; ++a)
            this.d_(this.children[a], a)
    }
    ;
    d.QW = function() {
        var a = this.xt.cssPrefix
          , b = this.xt.supportsTranslateZ ? "translateZ(0)" : "";
        this.PA = Qk("%s-transform: translateX(%s) %s; %s-transition: %s-transform %s; transition: %s-transform %s;", a, "%position", b, a, a, "200ms", a, "200ms");
        this.TA = Qk("%s-transform: translateX(%s) %s; %s-transition: none 0s; transition: none 0s;", a, "%position", b, a)
    }
    ;
    d.d_ = function(a, b) {
        b = this.model.Q_(b);
        var c = this.gQ(b) ? this.PA : this.TA
          , e = xe(104 * b, 1);
        a.o.style.cssText = c.replace("%position", e)
    }
    ;
    d.gQ = function(a) {
        return this.xt.supportsAnimation && this.model.A0(a)
    }
    ;
    Sk.inject = ["environmentModel"];
    function Tk(a) {
        Dd.call(this);
        this.j = a || {};
        this.YO()
    }
    z(Tk, Dd);
    Tk.prototype.Eg = function(a) {
        return this.contains(a) || !this.rz ? Tk.h.Eg.call(this, a) : new Uc(this.rz(a),this)
    }
    ;
    Tk.prototype.YO = function() {
        function a(a) {
            return a
        }
        this.register("window", this.j);
        this.register("document", this.j.document || {});
        this.register("location", this.j.location || {});
        a.inject = ["markup"];
        this.Iv("templatePreprocessor", a);
        this.rp("xhr", zd);
        this.rp("templateResolver", Ad)
    }
    ;
    function Uk() {}
    Uk.prototype.Kj = function() {}
    ;
    function Vk() {
        this.enabled = !1
    }
    Vk.prototype.Wa = function() {
        this.enabled = !this.enabled
    }
    ;
    function Wk(a, b, c) {
        this.Ub = a;
        this.As = b;
        this.AV = this.yV(c)
    }
    Wk.prototype.yV = function(a) {
        return a ? (a = this.Ub.Rp(a),
        !!a && 100 * Math.random() < a) : !0
    }
    ;
    Wk.prototype.kr = function() {
        return this.AV
    }
    ;
    Wk.prototype.Ni = function(a, b, c, e) {
        this.kr() && this.As.BX(a, b, c, e)
    }
    ;
    function Xk(a, b, c, e, f) {
        Wk.call(this, a, b, "activity_sw");
        this.UL = c;
        this.wU = e;
        this.pR = f;
        this.xs = null;
        this.KB = this.Jx = !1
    }
    z(Xk, Wk);
    var Yk = {
        state: "exit"
    };
    d = Xk.prototype;
    d.ga = function() {
        this.UL.b("state:changed", w(function(a) {
            this.Jx = a
        }, this))
    }
    ;
    d.NV = function() {
        var a = this.nE;
        this.nE = this.wU.lf();
        return a ? ((this.nE - a) / 1E3).toFixed(1) : null
    }
    ;
    d.vE = function(a) {
        a = this.Qy(a);
        var b = this.TV(a, this.NV());
        this.Ni("/gen_204", b);
        this.xs = a
    }
    ;
    d.tV = function() {
        this.vE(Yk)
    }
    ;
    d.TV = function(a, b) {
        var c = Zk
          , e = {
            a: "tv_activity"
        };
        e[c.SR] = a;
        e.logged_in = this.Jx ? 1 : 0;
        null != this.xs && (e[c.RR] = this.xs);
        null != b && (e.t = b);
        !this.KB && this.pR.UR() && (e[c.QR] = 1,
        this.KB = !0);
        e.e = this.Ub.Lr();
        x(e, this.Ub.ig());
        return e
    }
    ;
    d.Qy = function(a) {
        return a.mode ? a.state + ":" + a.mode : a.state
    }
    ;
    var Zk = {
        RR: "prev",
        QR: "first_activation",
        SR: "state"
    };
    Xk.inject = ["environmentModel", "privateDataService", "authService", "timeService", "statsService"];
    function $k(a, b, c) {
        this.name = "gamepad";
        S.call(this, a, b, c)
    }
    z($k, S);
    $k.$inject = ["$scope", "$element", "$attrs"];
    function al(a, b, c, e, f, g, k, l, n, q, s) {
        this.qL = a;
        this.rL = b;
        this.j = c;
        this.Uv = e;
        this.ny = f;
        this.K_ = g;
        this.$l = k;
        this.Uq = l;
        this.tM = n;
        this.HG = q;
        this.Nh = s;
        this.qN()
    }
    d = al.prototype;
    d.qN = function() {
        !this.j.nsf && this.j.require && this.j.require("all");
        this.j.nsf && (this.Qb = this.j.nsf,
        this.j.requestAnimationFrame = this.j.requestAnimationFrame || this.j.webkitRequestAnimationFrame,
        this.Uv.b("state:changed", w(this.EI, this)),
        this.Qb.system.WiiUSystem.getInstance().z_ = !1,
        this.Vp = this.Qb.display.DisplayManager.getInstance(),
        this.CI(),
        this.DI(!1));
        this.BI()
    }
    ;
    d.EI = function() {
        this.bZ(1 !== this.Uv.state)
    }
    ;
    d.CI = function() {
        var a = this.Qb.input;
        a.WiiUGamePad.navigationEnabled = !1;
        a.WiiUGamePad.scrollEnabled = !1;
        this.Ks = a.WiiUGamePad.getController(a.WiiUGamePad.DRC_1);
        this.aT = this.ST();
        this.VR = new Mj(this.Ks.leftStick,this.$l);
        this.CC()
    }
    ;
    d.ST = function() {
        var a = this.Qb.input.ControllerButton
          , b = this.$l;
        return [new V(a.DRC_A,13,b), new V(a.DRC_B,27,b), new V(a.DRC_DOWN,40,b), new V(a.DRC_L,37,b), new V(a.DRC_LEFT,37,b), new V(a.DRC_MINUS,40,b), new V(a.DRC_PLUS,38,b), new V(a.DRC_R,39,b), new V(a.DRC_RIGHT,39,b), new V(a.DRC_UP,38,b), new V(a.DRC_X,71,b), new V(a.DRC_Y,83,b), new V(a.DRC_ZL,227,b), new V(a.DRC_ZR,228,b)]
    }
    ;
    d.ZO = function() {
        this.iX(this.Ks, this.aT);
        this.CC()
    }
    ;
    d.CC = function() {
        this.j.requestAnimationFrame(w(this.ZO, this))
    }
    ;
    d.iX = function(a, b) {
        if (a && a.connected) {
            this.VR.update();
            for (var c, e = 0, f = b.length; e < f; ++e)
                c = b[e],
                a && a.buttons && a.buttons.isButtonPressed(c.uT) ? c.Nj() : c.Oj()
        }
    }
    ;
    d.BI = function() {
        this.ai = this.Qb ? this.VH() : this.UH();
        this.ai.load(Q.g + "/wii/game_pad_shell.html");
        this.Nh.b("row-loaded", w(this.Tv, this));
        this.Nh.b("active-item-changed", w(this.Tv, this));
        this.Nh.b("active-item-changed", w(this.TH, this));
        this.Nh.b("search-input-focused", w(this.YH, this));
        this.Nh.b("search-input-blurred", w(this.XH, this));
        this.HG.b("redirection-requested", w(this.WH, this))
    }
    ;
    d.WH = function() {
        if (this.Qb) {
            var a = this.Qb.input.SoftwareKeyboard;
            a.dismiss(a.DISMISS_CANCEL);
            this.Tc.isOskVisible = !1;
            this.Kj()
        }
    }
    ;
    d.XH = function() {
        if (this.Qb) {
            var a = this.Qb.input.SoftwareKeyboard;
            a.dismiss(a.DISMISS_CANCEL);
            this.Tc.isOskVisible = !1;
            this.Kj()
        }
    }
    ;
    d.YH = function() {
        if (this.Qb) {
            var a = this.Qb.input.SoftwareKeyboard;
            a.invoke(w(this.CT, this), {
                display: a.DISPLAY_DRC_0,
                fullscreen: !1,
                max_chars: 1024,
                text: this.Uq.query
            });
            this.Tc.isOskVisible = !0;
            this.Kj()
        }
    }
    ;
    d.CT = function(a) {
        var b = a.text;
        switch (a.user_select) {
        case "ok":
            this.$l.AD(13);
            break;
        case "cancel":
            "search" === this.tM.mode() && this.$l.AD(40);
            break;
        case "backspace":
            this.Uq.vm();
            break;
        case "char":
            this.Uq.bC(b)
        }
    }
    ;
    d.Tv = function() {
        !this.Tc && this.ZR() && (this.Tc = this.qr.$new(),
        this.aS || (this.aS = Lj(this.ai.window.document.body)),
        this.qL(this.ai.window.document)(this.Tc),
        this.ny.Rb(this.rL))
    }
    ;
    d.ZR = function() {
        this.qr || (this.qr = angular.element(this.j.document.getElementById("app-markup")).scope());
        return this.qr
    }
    ;
    d.VH = function() {
        return this.Vp.getDRCDisplay(0)
    }
    ;
    d.UH = function() {
        var a = {};
        a.load = w(function(b) {
            b = angular.element('<iframe id="drc" src="' + b + '" width="854" height="480" style="position:absolute;z-index:10000;bottom:0;"></iframe>');
            angular.element(this.j.document.body).append(b);
            a.window = b[0].contentWindow
        }, this);
        a.connected = !0;
        return a
    }
    ;
    d.TH = function(a) {
        this.OV() && (a = a ? a.detail : void 0,
        a = a instanceof $i ? a : null,
        a !== this.Tc.data && (this.Tc.hasLoadedOnce = !0,
        this.Tc.data = a,
        this.Kj()))
    }
    ;
    d.OV = function() {
        return this.Tc && this.ai && (this.ai.connected || this.Ks.connected)
    }
    ;
    d.bZ = function(a) {
        this.Vp.getTVDisplay().JY = a;
        var b = this.Vp.getDRCDisplay(0);
        b && (b.JY = a)
    }
    ;
    d.DI = function(a) {
        var b = this.Qb.system.APD;
        a ? b.enable() : b.disable()
    }
    ;
    d.Kj = function() {
        this.ny.Rb(this.Tc)
    }
    ;
    al.$inject = "$compile $rootScope window playerFacade angularHelper environmentModel gestureService searchQueryModel locationService debugCallService rootDispatcher".split(" ");
    function bl(a, b, c) {
        this.fD = a;
        this.oy = b;
        this.GU = c
    }
    bl.prototype.ga = function() {
        this.oy.b("state:changed", w(this.wM, this))
    }
    ;
    bl.prototype.wM = function(a) {
        a && this.fD.no && this.oy.Kb(w(function(a) {
            this.GU.get("/vendor_signin", {
                g0: a,
                vendor: this.fD.no
            })
        }, this))
    }
    ;
    bl.inject = ["environmentModel", "authService", "ytHttp"];
    function cl(a, b) {
        Wk.call(this, a, b);
        this.f0 = "crash-data";
        this.$m = this.sj = this.zj = this.tj = 0;
        this.hC = !1
    }
    z(cl, Wk);
    d = cl.prototype;
    d.ga = function() {
        this.lW();
        this.nW() && this.Ni("/gen_204", this.qW());
        this.pW()
    }
    ;
    d.lW = function() {
        var a = this.As.wC("crash-data");
        a && (this.tj = a["startup-count"],
        this.zj = a["clean-exits"],
        this.sj = a["crash-count"],
        this.$m = a.startup,
        this.hC = !0)
    }
    ;
    d.nW = function() {
        return this.hC && this.sj < this.cC()
    }
    ;
    d.pW = function() {
        this.sj = this.cC();
        this.tj++;
        this.$m = this.Ub.ik;
        this.ZB()
    }
    ;
    d.cC = function() {
        return this.tj - this.zj
    }
    ;
    d.qV = function() {
        this.zj++;
        this.ZB()
    }
    ;
    d.qW = function() {
        var a = {
            a: "tv_crash"
        };
        a.startups = this.tj;
        a.exits = this.zj;
        a.last_count = this.sj;
        a.start = this.$m;
        x(a, this.Ub.ig());
        return a
    }
    ;
    d.ZB = function() {
        var a = {};
        a["startup-count"] = this.tj;
        a["clean-exits"] = this.zj;
        a["crash-count"] = this.sj;
        a.startup = this.$m;
        this.As.rB("crash-data", a)
    }
    ;
    cl.inject = ["environmentModel", "privateDataService"];
    function dl(a, b, c) {
        Wk.call(this, a, b);
        this.xU = c
    }
    z(dl, Wk);
    dl.prototype.DU = function() {
        var a = this.Ub.ig();
        x(a, this.xU.oU());
        this.Ni("//www.youtube-nocookie.com/device_204", a, null, !0)
    }
    ;
    dl.inject = ["environmentModel", "privateDataService", "statsService"];
    function el(a, b, c, e, f) {
        this.j = a;
        this.BN = b;
        this.zN = c;
        this.AN = e;
        this.CN = f;
        this.Vz = !1
    }
    el.prototype.ga = function() {
        var a = w(this.XO, this);
        this.j.addEventListener("beforeunload", a, !1);
        this.j.addEventListener("unload", a, !1)
    }
    ;
    el.prototype.cZ = function() {
        this.AN.qV();
        this.zN.tV();
        this.CN.nV();
        this.BN.vi()
    }
    ;
    el.prototype.XO = function() {
        this.Vz || (this.cZ(),
        this.Vz = !0)
    }
    ;
    el.inject = ["window", "localStorage", "activityReportingService", "crashReportingService", "remoteService"];
    function fl(a, b) {
        this.TU = a;
        this.it = b;
        this.iD = !1;
        this.s0 = "pairingCode";
        this.u0 = "v";
        this.t0 = "t"
    }
    fl.prototype.ga = function() {
        if (!this.Gt && this.TU.supportsSteelDial)
            try {
                this.Gt = this.BW(),
                this.Gt.onGet("/", w(this.EW, this)),
                this.Gt.onPost("/", w(this.HW, this))
            } catch (a) {
                console.error("Steel Dial Server Creation exception: " + a)
            }
    }
    ;
    fl.prototype.BW = function() {
        return new DialServer("YouTube")
    }
    ;
    fl.prototype.EW = function(a, b) {
        var c = this.it.Vo()
          , e = '<?xml version="1.0" encoding="UTF-8"?><service xmlns="urn:dial-multiscreen-org:schemas:dial"><name>YouTube</name><options allowStop="false" /><state>' + (null != c || this.iD ? "running" : "stopped") + "</state>";
        null != c && (e += '<additionalData xmlns="http://www.youtube.com/dial"><screenId>' + c + "</screenId></additionalData>");
        b.mimeType = 'text/xml; charset="utf-8"';
        b.responseCode = 200;
        b.body = e + "</service>";
        return !0
    }
    ;
    fl.prototype.HW = function(a, b) {
        var c = sg(a.body);
        if (c.hasOwnProperty("pairingCode") && c.pairingCode) {
            this.it.$y(c.pairingCode);
            this.iD = !0;
            if (c.v) {
                var e = parseFloat(c.t);
                this.it.Mw(c.v, isNaN(e) ? 0 : e)
            }
            b.responseCode = 201;
            b.addHeader("LOCATION", "http://" + a.host + a.path + "/run");
            b.mimeType = 'text/plain; charset="utf-8"';
            b.body = "";
            return !0
        }
        return !1
    }
    ;
    fl.inject = ["environmentModel", "remoteService"];
    function gl(a, b, c, e, f, g, k, l, n, q, s) {
        this.zT = a;
        this.Vl = b;
        this.OQ = c;
        this.XQ = e;
        this.Mx = f;
        this.YQ = g;
        this.LQ = k;
        this.RQ = l;
        this.CK = n;
        this.QQ = q;
        this.WQ = s
    }
    d = gl.prototype;
    d.bootstrap = function() {
        this.xL();
        this.uL();
        this.tL();
        this.wL();
        if (this.Mx.Yt && this.Vl.contains("templateResolver"))
            this.Vl.vL();
        else {
            var a = this.Vl;
            a.gb(Q.g + "/rebound/button.html", "<div>{{title}}</div>");
            a.gb(Q.g + "/rebound/dialogs/login_info.html", '<div>  <div class="connection-instructions">    <div class="remote-pair-icon"/></div>    <div class="connection-steps">      [[<div class="step1">Go To</div>      <div class="activation-url">youtube.com/activate</div>|Tells user that there\'s a URL here to navigate to]]      [[<div class="step2">and enter</div>      <div class="activation-code">{{activationCode}}</div>|Tells user this is the string to enter into the device.]]    </div>  </div></div>');
            a.gb(Q.g + "/rebound/dialogs/remote_pairing_info.html", '<div class="pairing">  <div class="connection-instructions">      <div class="remote-pair-icon"/></div>      <div class="connection-steps">        [[<div class="step1">Go to</div>        <div class="pair-url">youtube.com/pair</div>|Tells user that there\'s a URL here to navigate to]]        [[<div class="step2">and enter</div>        <div class="pair-code">{{displayPairingCode}}</div>|Tells user this is the string to enter into the device]]      </div>    <div class="qr-code-wrapper">      <div class="qr-code">        <div class="scan">[[Or scan|Title above QR code telling a user that it is possible to sign into account by using QR-code scanner.]]</div>        <img class="qr-code-image" src="{{qrCodeImageUrl}}" />      </div>    </div>    <div class="connected-list">      <div class="connected-header">[[Connected|Heading for a list of devices connected to the application.]]</div>      <ul class="$list devices" data-model="{{connectedDevices}}">        <li class="{{model.deviceClass}}">{{model.displayString}}</li>      </ul>    </div>  </div></div>');
            a.gb(Q.g + "/rebound/suggestions.html", '<div>  <ul class="$list horizontal" data-model="{{model.suggestions}}">    <li>{{model}}</li>  </ul></div>');
            a.gb(Q.g + "/rebound/tiles/action.html", '<div class="content {{model.tileClass}}" data-model="{{model}}">  <div class="title">{{model.title}}</div>  <div class="large-action-icon {{model.iconClass}}"></div>  <div class="description">{{model.description}}</div></div>');
            a.gb(Q.g + "/rebound/tiles/kenko.html", '<div class="content">  <div class="title">\u5065\u5eb7\u306e\u305f\u3081\u306e<br>\u3054\u6ce8\u610f</div></div>');
            a.gb(Q.g + "/rebound/tiles/recent_search.html", '<div class="content recent-search-tile" data-model="{{model}}">  <div class="top">    <div class="video-thumb" style="background-image: url({{model.imageUrl}});"></div>  </div>  <div class="bottom">    <div class="title">{{model.title.toLowerCase()}}</div>    <div class="overlay">[[{{model.totalResultsLocalized}} results|Displays how many different searches a user has performed.]]</div>  </div></div>');
            a.gb(Q.g + "/rebound/tiles/remote_pairing.html", '<div class="content" data-model="{{model}}">  <div class="title {{model.getTitleClass()}}">{{model.getTitle()}}</div>  <div class="remote-pair-icon"></div>  <div class="remote-pair-text">[[Find videos on your mobile device and watch on your TV.|Tooltip explains that a user will be able to use their mobile device to find videos and watch them via the application.]]</div></div>');
            a.gb(Q.g + "/rebound/tiles/reset_pairing.html", '<div class="content" data-model="{{model}}">  <div class="title">[[DELETE|Title of the button that disconnects mobile phones from the application]]</div>  <div class="remote-reset-phone">    <div class="remote-count">{{model.deviceCount}}</div>  </div>  <div class="remote-reset-help">[[Delete all paired devices?|Button that allows a user to disconnect mobile phones from the application.]]</div></div>');
            a.gb(Q.g + "/rebound/tiles/search.html", '<div class="content search-tile" data-model="{{model}}">  <div class="title">[[Search|Clicking this launches the search interface.]]</div>  <div class="large-action-icon search-icon"></div>  <div class="description">[[{{model.searchCount}} recent search(es)|Displays how many search a user has performed recently.]]</div></div>');
            a.gb(Q.g + "/rebound/tiles/shiyojo.html", '<div class="content">  <div class="title">\u4f7f\u7528\u4e0a\u306e<br>\u3054\u6ce8\u610f</div></div>');
            a.gb(Q.g + "/rebound/tiles/sign_out.html", '<div class="content" data-model="{{model}}">  <div class="title display-name">{{model.channel.displayName}}</div>  <div class="platform-container">    <div class="platform-user-icon" style="background-image:url({{model.channel.platformUserIcon}})"></div>    <span class="platform-user-name">{{model.channel.platformUserName}}</span>  </div>  <div class="sign-out-user-icon" style="background-image:url({{model.channel.imageUrl}})"></div>  <div class="sign-out-help-text">[[Sign Out?|Tooltip in a dialog when a user is going to sign out.]]</div></div>');
            a.gb(Q.g + "/rebound/tiles/togglable.html", '<div class="content" data-model="{{model}}">  <div class="title">{{model.title}}</div>  <div class="status">    <div>{{model.getToggleStatus()}}</div>    <div class="icon {{model.getToggleClass()}}"></div>  </div>  <div class="description">{{model.description}}</div></div>');
            a.gb(Q.g + "/rebound/video_tile.html", '<div class="video-tile">  <div class="top">    <div class="video-thumb"></div>    <div class="duration hidden">{{model.durationLabel}}</div>  </div>  <div class="bottom">    <div class="title">{{model.title}}</div>    <div class="overlay">      [[Published on <span class="updated">{{model.uploadedDateLabel}}</span> by <span class="name">{{model.channel.displayName}}</span>|Label that represents the date when a video was uploaded.]]    </div>    <div class="details">      <div class="activity">{{model.activityDescription}}</div>      <div class="description">{{getDescriptionText()}}</div>    </div>    <div class="set hidden">      <span class="title">{{model.playlistName}}</span>      <span class="count">{{model.videoPosition}}</span>    </div>  </div></div>')
        }
        this.CK.vi()
    }
    ;
    d.xL = function() {
        Va(this.zT.body, this.Mx.su)
    }
    ;
    d.uL = function() {
        for (var a = ["gestureService", "resizeService", "bambooService", "samsungService", "soundService"], b = 0, c = a.length; b < c; ++b)
            this.Vl.get(a[b])
    }
    ;
    d.tL = function() {
        this.YQ.ga();
        this.LQ.ga();
        this.RQ.ga();
        this.QQ.ga();
        this.WQ.ga()
    }
    ;
    d.wL = function() {
        this.OQ.DU();
        this.XQ.ga()
    }
    ;
    gl.inject = "document injector retentionReportingService crashReportingService environmentModel remoteService bountyService steelDialService localStorage shutdownService activityReportingService".split(" ");
    function hl(a) {
        this.Zs = a;
        this.Cj = new xd(10,!0);
        this.aX()
    }
    d = hl.prototype;
    d.FB = function(a, b, c) {
        this.Cj.pi(a, this.EC(a, b, c));
        a = this.Cj.map(function(a, b) {
            return this.EC(b, a.video, a.totalResults)
        }, this);
        this.Zs.Ra("recent-searches", a, void 0, !0)
    }
    ;
    d.load = function() {
        return this.Cj.na()
    }
    ;
    d.clear = function() {
        this.Cj.clear();
        this.Zs.remove("recent-searches")
    }
    ;
    d.EC = function(a, b, c) {
        return {
            query: a,
            video: b,
            totalResults: c
        }
    }
    ;
    d.aX = function() {
        var a = this.Zs.get("recent-searches", void 0, !0) || [];
        Ha(a, function(a) {
            this.Cj.pi(a.query, a)
        }, this)
    }
    ;
    hl.inject = ["localStorage"];
    function il(a, b, c) {
        K.call(this);
        this.j = a;
        this.km = b;
        this.GM = c;
        this.Zy = {
            exp: w(this.SM, this),
            f5: w(this.WM, this),
            hl: w(this.YM, this),
            http: w(this.XM, this),
            keys: w(this.UM, this),
            lbl: w(this.TM, this),
            lclr: w(this.QM, this),
            llock: w(this.ZM, this),
            mdiag: w(this.VM, this),
            movies: w(this.RM, this),
            stagegdata: w(this.$M, this)
        }
    }
    z(il, K);
    var jl = /[-_]/
      , kl = /^[a-z]+$/
      , ll = /^[a-f0-9]{8}$|^[a-z]+$/;
    il.prototype.isActive = function() {
        return !!this.km.ze
    }
    ;
    d = il.prototype;
    d.SX = function(a) {
        if (a && " " == a[a.length - 1]) {
            var b = a.toLowerCase().split(" ")
              , c = b[0];
            if (c)
                if (this.isActive()) {
                    if (c in this.Zy)
                        return b = b.slice(1, b.length - 1),
                        (c = this.Zy[c](b)) && this.GM.FB(a, null, 0),
                        c
                } else
                    return this.kX(c)
        }
        return !1
    }
    ;
    d.kX = function(a) {
        this.km.ze = "mcvpanta" == a;
        return this.isActive()
    }
    ;
    d.WM = function() {
        this.G("redirection-requested");
        this.j.location.hash = "";
        this.j.location.reload(!0);
        return !0
    }
    ;
    d.YM = function(a) {
        a = a[0];
        if (!a)
            return !1;
        a = a.replace(jl, "");
        if (!kl.test(a))
            return !1;
        3 < a.length && (a = a.substr(0, 2) + "_" + a.substr(2).toUpperCase());
        this.Yj(Fe("/tv", {
            hl: a
        }));
        return !0
    }
    ;
    d.XM = function() {
        this.Yj("http://www.youtube.com/tv");
        return !0
    }
    ;
    d.UM = function() {
        this.Yj("https://kcdsfrdvcs.appspot.com");
        return !0
    }
    ;
    d.TM = function(a) {
        return 1 == a.length && (a = a[0],
        ll.test(a)) ? (a = Fe("/tv", {
            label: a
        }),
        this.Yj(a),
        !0) : !1
    }
    ;
    d.VM = function() {
        Dg(Q.Vq + "/modules/media-diagnostics.js");
        return !0
    }
    ;
    d.RM = function() {
        return this.km.supportsDrm = !0
    }
    ;
    d.$M = function() {
        return this.km.useStageGdata = !0
    }
    ;
    d.Yj = function(a) {
        this.G("redirection-requested");
        this.j.location.href = a
    }
    ;
    d.SM = function(a) {
        var b = 0 < a.length && "" === a.pop() && a;
        return u(b) && !Ka(b, isNaN) ? (a = Fe("/tv", {
            env_forcedExperiments: a.join(",")
        }),
        this.Yj(a),
        !0) : !1
    }
    ;
    d.ZM = function(a) {
        return 1 == a.length && (a = a[0],
        ll.test(a)) ? (bf.st("yt-dev.stickyLabel", a, 86400, "/", "google.com"),
        !0) : !1
    }
    ;
    d.QM = function() {
        df("stickyLabel");
        return !0
    }
    ;
    il.inject = ["window", "environmentModel", "searchHistoryService"];
    function ml() {
        this.Ij = null;
        this.fC = !1;
        this.ws = !0;
        this.Hs = this.Gs = "";
        this.vr = 100;
        this.jC = p
    }
    ml.prototype.ga = function() {
        this.Ij = v("devicePlugin") ? document.getElementById("devicePlugin") : "devicePlugin";
        this.fC = !!this.Ij;
        this.ws = this.Lj("crossMeansAdvance", this.ws);
        this.Gs = this.Lj("psnAvatarURL", this.Gs);
        this.Hs = this.Lj("psnOnlineName", this.Hs);
        this.vr = this.Lj("licenseArea", this.vr);
        this.jC = this.QS("requestSavegameSync")
    }
    ;
    ml.prototype.Lj = function(a, b) {
        return this.fC && t(this.Ij[a]) ? this.Ij[a] : b
    }
    ;
    ml.prototype.QS = function(a) {
        return (a = this.Lj(a, null)) ? w(a, this.Ij) : p
    }
    ;
    ml.prototype.gZ = function(a) {
        this.jC(!!a)
    }
    ;
    function nl(a, b, c, e, f, g) {
        Ae.call(this, a, b);
        this.IC = c;
        this.LC = g;
        this.HT = f
    }
    z(nl, Ae);
    nl.prototype.get = function(a, b, c, e) {
        var f = this.LC.contains(a) ? this.LC.get(a) : this.HT.get(a);
        f && c ? c(this.IC.ca(f)) : Ae.prototype.get.call(this, a, b, c, e)
    }
    ;
    nl.prototype.transformResponse = function(a) {
        a = Ae.prototype.transformResponse.call(this, a);
        return this.IC.ca(a)
    }
    ;
    nl.$inject = "xhrBackend jsonpBackend locale $injector $templateCache injector".split(" ");
    function ol(a, b, c, e, f, g, k, l) {
        this.name = "dialog";
        S.call(this, a, b, c);
        k.FG(this);
        this.MF = e;
        this.Ef = f;
        this.nF = g;
        this.la = null;
        this.Ru = l;
        this.If = this.k("#inner-dialog-container");
        this.oF = this.k(".title");
        this.jF = this.k(".buttons");
        this.kF = this.k("#confirm-dialog-cancel-button");
        this.mF = this.k("#confirm-dialog-ok-button");
        this.lF = this.k("#dialog-legend");
        this.b("keyup", w(this.GG, this));
        this.b("keydown", w(M, this));
        this.b("request-close-dialog", w(this.No, this));
        this.Ic = {};
        this.hk = null;
        a = Q.g;
        this.Ic[a + "/dialogs/simple_dialog.html"] = this.Lo;
        this.Ic[a + "/dialogs/scrollable_dialog.html"] = this.Lo;
        this.Ic[a + "/dialogs/flag_claim.html"] = this.zG;
        this.Ic[a + "/dialogs/flag_video.html"] = this.AG;
        this.Ic[a + "/dialogs/logout_info.html"] = this.BG;
        this.Ic[a + "/dialogs/paid_channel_info.html"] = this.CG;
        this.Ic[a + "/dialogs/player_error_info.html"] = this.DG;
        this.Ic[a + "/dialogs/remote_reset_info.html"] = this.EG;
        this.Ic[a + "/dialogs/debug_info.html"] = this.yG;
        this.b("dialog:complete", w(this.Su, this))
    }
    z(ol, S);
    d = ol.prototype;
    d.sa = function(a) {
        var b = a.detail;
        "confirm-dialog-cancel-button" != b.id && "confirm-dialog-ok-button" != b.id && ol.h.sa.call(this, a)
    }
    ;
    d.LD = function() {
        this.yw() || (this.data.nC(),
        this.No())
    }
    ;
    d.Up = function() {
        return !(!this.data || !this.data.Cg)
    }
    ;
    d.yw = function() {
        return !(!this.data || !this.data.Ly)
    }
    ;
    d.xb = function(a) {
        ol.h.xb.call(this, a);
        this.data ? (this.Up() && (this.activeChildName = this.data.dv),
        this.data.widgetName ? this.GI() : this.data.templateUrl && this.nF.get(a.templateUrl, {}, w(this.FI, this)),
        this.Dw && this.element.removeClass(this.Dw),
        this.element.addClass(this.data.className),
        this.Dw = this.data.className,
        this.element.html() && (this.L(this.oF, this.Ef(this.data.title)(this.scope)),
        this.M(this.jF, this.Up()),
        this.M(this.lF, !this.yw()),
        this.L(this.kF, this.Ef(this.data.Ro || "")(this.scope)),
        this.L(this.mF, this.Ef(this.data.So || "")(this.scope)))) : this.Hv()
    }
    ;
    d.Hv = function() {
        this.la && (this.la.$destroy(),
        this.eg())
    }
    ;
    d.GI = function() {
        if (this.If) {
            var a = this.data.widgetName;
            this.Ru.contains(a) ? this.hk = this.bz(a, this.If, this.Ru) : (this.Ve(this.If, "<" + a + ' activate-when="dialog.isActive" data="dialog.data"></' + a + ">"),
            this.Lo())
        }
    }
    ;
    d.FI = function(a) {
        this.Ve(this.If, a);
        this.B();
        this.focus();
        (a = this.Ic[this.data.templateUrl]) && a.call(this)
    }
    ;
    d.Lo = function() {
        this.Hv();
        this.la = this.scope.$new();
        this.MF(angular.element(this.If).contents())(this.la);
        this.B()
    }
    ;
    d.B = function() {
        ol.h.B.call(this);
        this.hk && this.hk.B()
    }
    ;
    d.GG = function(a) {
        M(a);
        var b = a.target;
        switch (a.keyCode) {
        case 8:
        case 27:
            this.LD();
            break;
        case 13:
            a.target && Jc(b, "back") && this.LD()
        }
        this.Up() && this.zV(a.keyCode, b);
        this.mc(this.scope)
    }
    ;
    d.zV = function(a, b) {
        switch (a) {
        case 39:
            this.activeChildName = "confirm-dialog-ok-button";
            break;
        case 37:
            this.activeChildName = "confirm-dialog-cancel-button";
            break;
        case 13:
            if ("confirm-dialog-ok-button" === this.activeChildName || b && "confirm-dialog-ok-button" === b.id)
                this.Su();
            else if ("confirm-dialog-cancel-button" === this.activeChildName || b && "confirm-dialog-cancel-button" === b.id) {
                var c = this.data.nC;
                this.No();
                c()
            }
        }
    }
    ;
    d.No = function(a) {
        this.la && (this.la.$destroy(),
        this.la = null,
        this.eg(),
        this.hk = null);
        a || this.l("request-close-dialog")
    }
    ;
    d.zG = function() {
        this.L(this.k(".text"), this.Ef(this.data.video.title)(this.scope));
        this.L(this.k(".url"), this.data.sq)
    }
    ;
    d.AG = function() {
        this.L(this.k(".url"), this.data.sq)
    }
    ;
    d.BG = function() {
        this.L(this.k(".display-name"), this.data.qi.displayName);
        this.L(this.k(".platform-user-name"), this.data.qi.vM);
        this.k(".login-user-icon").style.backgroundImage = "url(" + this.data.qi.imageUrl + ")";
        this.k(".platform-user-icon").style.backgroundImage = "url(" + this.data.qi.uM + ")";
        var a = this.Ef("[[<div>You're signed in as <strong>" + this.data.qi.displayName + "&nbsp;</strong></div>|Tooltip displaying the YouTube username of the currently signed-in user.]]")({
            L_: this
        });
        this.Ve(this.k(".signed-in-message"), a)
    }
    ;
    d.CG = function() {
        this.L(this.k(".channel-url"), this.data.zO())
    }
    ;
    d.DG = function() {
        this.L(this.k(".player-error"), this.Ef(this.data.bO())(this.scope))
    }
    ;
    d.EG = function() {
        var a = this.data.DM().ba();
        this.M(this.If, 0 < a.length);
        var b = "";
        a.forEach(function(a) {
            a = new Qg(a);
            b += '<li class="' + a.deviceClass + '">' + a.displayString + "</li>"
        });
        this.Ve(this.k(".devices"), b)
    }
    ;
    d.yG = function() {
        var a = "<ul>", b;
        for (b in this.data.Ix)
            a += "<li>" + b + ": " + this.data.Ix[b] + "</li>";
        a += "</ul>";
        this.Ve(this.k(".message"), a)
    }
    ;
    d.Su = function() {
        this.data.mU()
    }
    ;
    ol.$inject = "$scope $element $attrs $compile $interpolate templateClient dialogService injector".split(" ");
    function pl(a, b, c, e, f, g, k, l, n, q, s) {
        K.call(this);
        this.pl = b;
        this.xO = c;
        this.Z_ = a;
        this.Xb = e;
        this.qg = f;
        this.BQ = g;
        this.qz = k;
        this.np = l;
        this.wz = n;
        this.IN = q;
        this.JI = s;
        this.LR()
    }
    z(pl, K);
    d = pl.prototype;
    d.FG = function(a) {
        this.AB = a
    }
    ;
    d.LR = function() {
        for (var a = [{
            eventName: "request-close-dialog",
            handler: this.Jw
        }, {
            eventName: "request-flag-options",
            handler: this.pq
        }, {
            eventName: "request-flag-video",
            handler: this.OJ
        }, {
            eventName: "request-flag-claim",
            handler: this.NJ
        }, {
            eventName: "request-cc-options",
            handler: this.LJ
        }, {
            eventName: "network-failure",
            handler: this.RJ
        }, {
            eventName: "request-toggle-subscription",
            handler: this.VJ
        }, {
            eventName: "request-debug-info",
            handler: this.MJ
        }, {
            eventName: "request-logout",
            handler: this.QJ
        }, {
            eventName: "request-login",
            handler: this.rw
        }, {
            eventName: "request_paid_scope_dialog",
            handler: this.SJ
        }, {
            eventName: "request-pairing",
            handler: this.TJ
        }, {
            eventName: "request-remote-reset",
            handler: this.UJ
        }, {
            eventName: "request-view-tos",
            handler: this.aK
        }, {
            eventName: "request-view-credits",
            handler: this.WJ
        }, {
            eventName: "request-view-kenko",
            handler: this.ZJ
        }, {
            eventName: "request-view-shiyojo",
            handler: this.$J
        }, {
            eventName: "request-like-video",
            handler: this.PJ
        }, {
            eventName: "request-view-help",
            handler: this.YJ
        }, {
            eventName: "request-view-feedback",
            handler: this.XJ
        }], b = 0, c = a.length; b < c; ++b)
            this.JI.b(a[b].eventName, w(a[b].handler, this));
        this.np.b("state:changed", w(this.bK, this))
    }
    ;
    d.Aa = function(a) {
        this.AB.xb(a);
        this.G("dialog:changed", !0)
    }
    ;
    d.Jw = function() {
        this.AB.xb(null);
        this.G("dialog:changed", !1)
    }
    ;
    d.ni = function(a, b, c, e, f) {
        a = new mk(a,b,c,e,f);
        this.Aa(a)
    }
    ;
    d.sr = function(a, b) {
        this.Aa(new kk(a,b))
    }
    ;
    d.jx = function(a) {
        var b = new W;
        b.title = a;
        this.Aa(b)
    }
    ;
    d.pq = function(a) {
        this.Aa(new ak);
        a && M(a)
    }
    ;
    d.OJ = function(a) {
        this.Aa(new bk(this.pl.currentVideo,w(this.pq, this)));
        M(a)
    }
    ;
    d.NJ = function(a) {
        this.Aa(new Zj(this.pl.currentVideo,w(this.pq, this)));
        M(a)
    }
    ;
    d.LJ = function(a) {
        var b = this.Xb.isPlaying
          , c = this.Xb.lq();
        this.Aa(new Wj(null,w(function() {
            pb(c) ? this.Xb.Cm() : this.Xb.Hr(c);
            b && this.Xb.Vf()
        }, this)));
        a && M(a)
    }
    ;
    d.MJ = function() {
        this.Aa(new Xj(this.qg))
    }
    ;
    d.VD = function(a, b) {
        this.np.Kb(w(function(c) {
            if (c)
                a();
            else {
                var e = !1;
                this.Xb.isPlaying && (e = !0,
                this.Xb.pause());
                var f = w(function() {
                    e && this.Xb.Vf()
                }, this);
                this.Aa(new dk(w(function() {
                    a();
                    f();
                    this.G("login:complete")
                }, this),b,f))
            }
        }, this))
    }
    ;
    d.PJ = function(a) {
        var b = a.detail.videoId
          , c = a.detail.lM
          , e = this.BQ
          , f = this.qz;
        this.VD(function() {
            e.send({
                likeValue: c,
                videoId: b
            });
            f.as("video_like_value", b, c)
        }, "[[Please sign in to like or dislike...|Dialog title asking a user to sign in before they can like or dislike this video.]]")
    }
    ;
    d.VJ = function(a) {
        this.VD(w(this.dZ, this, a.detail), "[[Please sign in to subscribe...|Dialog title asking a user to sign in before they can subscribe.]]")
    }
    ;
    d.dZ = function(a) {
        if (this.pl.currentVideo.channel.Pb)
            this.yP(a);
        else {
            var b = w(this.xP, this);
            this.IN.send({
                channelName: a.username
            }, w(function() {
                this.qz.as("subscription", a.username, a);
                this.G("login:complete")
            }, this), b)
        }
    }
    ;
    d.yP = function(a) {
        var b = this.Xb.isPlaying;
        b && this.Xb.pause();
        this.Aa(new fk(a.zb,null,w(function() {
            b && this.Xb.Vf()
        }, this)))
    }
    ;
    d.xP = function(a) {
        this.np.SB(a);
        this.Aa(new mk("[[A subscription error has occurred please try again later.|Text message displayed when an error occurs while user tries to subscribe to a channel.]]"))
    }
    ;
    d.QJ = function(a) {
        a = a.detail.data.channel;
        this.qg.GA(a);
        this.Aa(new ek(a,w(this.G, this, "logout:complete")))
    }
    ;
    d.bK = function(a, b, c) {
        !a && b && (c ? this.ZP() : this.Aa(new lk(w(this.rw, this),w(this.G, this, "logout:confirmed"))))
    }
    ;
    d.ZP = function() {
        this.ni("[[Sign in error|Dialog title that tells the user that he is no longer signed into YouTube account on TV due to error]]", Q.g + "/dialogs/authentication_error_info.html")
    }
    ;
    d.rw = function() {
        this.Aa(new dk(w(this.G, this, "login:complete")))
    }
    ;
    d.SJ = function() {
        this.Aa(new gk(w(this.G, this, "paidScope:changed", !0),w(this.G, this, "paidScope:changed", !1)))
    }
    ;
    d.TJ = function() {
        this.Aa(new ik)
    }
    ;
    d.UJ = function() {
        this.Aa(new jk(this.wz,w(this.jV, this)))
    }
    ;
    d.jV = function() {
        this.wz.qR();
        this.G("dialog:changed", !1);
        this.xO.VA()
    }
    ;
    d.RJ = function() {
        this.Xb.wl();
        this.pl.uy();
        this.ni("[[A network error has occurred|Dialog title that tells the user that a network error has occurred]]", Q.g + "/dialogs/network_error_info.html")
    }
    ;
    d.aK = function() {
        this.ni("[[Terms of Service and Privacy Policy|Dialog title that shows links to terms of use and privacy documents on youtube.com.]]", Q.g + "/dialogs/tos_info.html")
    }
    ;
    d.WJ = function() {
        this.sr("[[Credits|Dialog title that shows credit information, giving credit to all open-source software used in building this product.]]", Q.g + "/dialogs/" + (this.qg.Dd ? "licenses.html" : "bamboo_licenses.html"))
    }
    ;
    d.ZJ = function() {
        this.sr("\u5065\u5eb7\u306e\u305f\u3081\u306e\u3054\u6ce8\u610f", Q.g + "/dialogs/kenko_warning.html")
    }
    ;
    d.$J = function() {
        this.sr("\u4f7f\u7528\u4e0a\u306e\u3054\u6ce8\u610f", Q.g + "/dialogs/shiyojo_warning.html")
    }
    ;
    d.YJ = function() {
        this.Aa(new ck(this.qg.Dd))
    }
    ;
    d.XJ = function() {
        this.Aa(new Yj(this.qg.Dd,this.qg.YS()))
    }
    ;
    pl.$inject = "locationService watchModel browseModel playerFacade environmentModel likeService cacheService authService remoteService subscribeService rootDispatcher".split(" ");
    function ql(a, b, c) {
        this.DC = a;
        this.se = b;
        this.AC = [];
        this.Qi = (a = this.se.get("device-retention-permission", 31536E4)) ? a.enabled : !0;
        this.NQ = c.Wp(this.se.vi, 1E3, this.se);
        this.c0 = "private_data"
    }
    d = ql.prototype;
    d.fW = function(a) {
        this.Qi = a;
        this.se.Ra("device-retention-permission", {
            enabled: a
        }, 31536E4);
        this.vT();
        this.NQ.start()
    }
    ;
    d.uK = function(a) {
        this.AC.push(a)
    }
    ;
    d.vT = function() {
        this.se.remove("private_data");
        this.AC.forEach(function(a) {
            a()
        }, this)
    }
    ;
    d.rB = function(a, b) {
        this.Qi && this.nY(a, b)
    }
    ;
    d.wC = function(a) {
        var b = this.se.get("private_data", 31536E3);
        return b ? b[a] : null
    }
    ;
    d.nY = function(a, b) {
        var c = this.se.get("private_data") || {};
        c[a] = b;
        this.se.Ra("private_data", c, 31536E3)
    }
    ;
    d.BX = function(a, b, c, e) {
        this.Qi ? e ? this.DC.jsonp(a, b, c) : this.DC.get(a, b, c) : c && c()
    }
    ;
    ql.inject = ["ytHttp", "localStorage", "timeService"];
    function rl(a, b, c, e, f) {
        Wk.call(this, c, e, "h5_exceptions_sw");
        this.Sy = a;
        this.j = b;
        this.mM = f;
        this.Yz = {};
        kh(w(this.Bv, this))
    }
    z(rl, Wk);
    rl.prototype.kr = function() {
        return this.Ub.au && rl.h.kr.call(this) || this.Ub.ze
    }
    ;
    rl.prototype.Bv = function(a) {
        var b = a.stacktrace;
        a = mh(a);
        b = b || a.stack;
        console.error(b);
        this.Yz[a.message] || (this.WY(a.message, a.fileName, a.lineNumber, a.stack),
        this.Yz[a.message] = !0)
    }
    ;
    rl.prototype.WY = function(a, b, c, e) {
        var f = {
            a: "logerror"
        }
          , g = this.Sy.get("watchModel");
        f.err = a;
        f.vid = g.currentVideo ? g.currentVideo.videoId : "";
        a = this.Sy.get("locationService").zl();
        a = this.mM.Qy(a);
        f.screen = a;
        x(f, this.Ub.ig());
        f.t = "jserror";
        f.file = b;
        f.line = c;
        f.url = this.j.location.href;
        f.label = this.Ub.lo;
        b = Be(f);
        b = 2047 - Fe("/gen_204", b).length + 26;
        e = encodeURIComponent(e);
        e = e.substr(0, b);
        f.stack = decodeURIComponent(e);
        this.Ni("/gen_204", f)
    }
    ;
    rl.inject = ["injector", "window", "environmentModel", "privateDataService", "activityReportingService"];
    function sl(a, b, c, e, f) {
        this.QT = b;
        this.KT = this.OW(a, c);
        this.RT = e;
        this.NC = f
    }
    sl.prototype.OW = function(a, b) {
        switch (b) {
        case "delete":
            return w(a.f_, a);
        case "post":
            return w(a.post, a);
        default:
            return w(a.get, a)
        }
    }
    ;
    sl.prototype.send = function(a, b, c) {
        var e = "//gdata.youtube.com/feeds/api" + this.RT
          , f = "";
        if (this.NC && a)
            var g = ze(this.NC, a)
              , f = ze(this.IU(), {
                body: g
            });
        this.QT.Kb(w(function(g) {
            g && this.KT(e, a, f, b, c, this.JU(g))
        }, this))
    }
    ;
    sl.prototype.JU = function(a) {
        return {
            Authorization: "Bearer " + a,
            "X-GData-Key": "key=AI39si5-UxCbfO2jRg9EV2bWI0UDWm74GkLzZWFHkQR0bm4d0JTKyrhSi6NZORaTMuJaRH8zs0PmsCONB9uV3pSgzZklwvMoRA",
            "Content-Type": "application/atom+xml",
            "GData-Version": "2"
        }
    }
    ;
    sl.prototype.IU = function() {
        return '<?xml version="1.0" encoding="UTF-8"?> <entry xmlns="http://www.w3.org/2005/Atom" xmlns:yt="http://gdata.youtube.com/schemas/2007">{body}</entry>'
    }
    ;
    function tl(a) {
        return function(b, c, e) {
            var f, g = 1E3 / b;
            return function(b) {
                var l = a.lf() - (f || 0)
                  , n = !0;
                e && (n = e.apply(this, arguments));
                n && (!isNaN(l) && l <= g ? M(b) : (c.apply(this, arguments),
                f = a.lf()))
            }
        }
    }
    tl.inject = ["timeService"];
    function ul(a, b, c, e, f) {
        this.lt = a;
        this.j0 = b;
        this.IT = c;
        this.Ac = e;
        this.gK = f;
        this.mV()
    }
    d = ul.prototype;
    d.mV = function() {
        this.ge("keydown", this.Sx);
        this.ge("keyup", this.Sx);
        this.ge("mousedown", this.Tx);
        this.ge("mouseup", this.Tx);
        this.ge("mousewheel", this.gK(10, w(this.EK, this)));
        this.ge("touchstart", w(this.Ac.start, this.Ac));
        this.ge("touchmove", w(this.Ac.LK, this.Ac));
        this.ge("touchend", w(this.Ac.KK, this.Ac));
        this.Ac.b("tap", w(this.JK, this));
        this.Ac.b("swipedown", w(this.FK, this));
        this.Ac.b("swipeleft", w(this.GK, this));
        this.Ac.b("swiperight", w(this.HK, this));
        this.Ac.b("swipeup", w(this.IK, this))
    }
    ;
    d.ge = function(a, b) {
        this.lt.addEventListener(a, w(b, this), !0)
    }
    ;
    d.Sx = function(a) {
        var b = this.IT.nX(a.keyCode);
        16 === b ? M(a, !1, !0) : a.ng || b == a.keyCode || (b = re(a.target, a.type, b, !0, a),
        M(a, !1, !0),
        a.target.dispatchEvent(b))
    }
    ;
    d.Tx = function(a) {
        if (this.jh)
            this.jh = !1;
        else {
            var b = a.type.replace("mouse", "key");
            this.we(a, 13, b)
        }
    }
    ;
    d.EK = function(a) {
        this.we(a, 0 < a.wheelDelta ? 38 : 40)
    }
    ;
    d.JK = function(a) {
        this.jh = !0;
        this.we(a, 13, "keydown");
        this.we(a, 13, "keyup")
    }
    ;
    d.FK = function(a) {
        this.jh = !0;
        this.we(a, 38)
    }
    ;
    d.IK = function(a) {
        this.jh = !0;
        this.we(a, 40)
    }
    ;
    d.GK = function(a) {
        this.jh = !0;
        this.we(a, 39)
    }
    ;
    d.HK = function(a) {
        this.jh = !0;
        this.we(a, 37)
    }
    ;
    d.we = function(a, b, c) {
        b = re(a.target, c ? c : "keydown", b, !0, a);
        M(a, !1, !0);
        a.target.dispatchEvent(b)
    }
    ;
    d.AD = function(a) {
        this.Ln("keydown", a);
        this.Ln("keyup", a)
    }
    ;
    d.Ln = function(a, b) {
        var c = this.lt.activeElement || this.lt
          , e = re(c, a, b, !0);
        c.dispatchEvent(e)
    }
    ;
    ul.inject = ["document", "$route", "environmentModel", "gestureRecognizer", "rateLimit"];
    function vl(a) {
        this.Bf = [];
        this.bW = a
    }
    d = vl.prototype;
    d.R6 = function() {
        return this.Bf
    }
    ;
    d.eP = function(a) {
        this.nt(a) && (this.IW(a),
        this.Bf.push(a))
    }
    ;
    d.SU = function() {
        this.Bf.pop();
        return this.Bf.pop()
    }
    ;
    d.IW = function(a) {
        this.nt(a) && (this.Bf = this.Bf.filter(function(b) {
            return !this.JW(b, a)
        }, this))
    }
    ;
    d.iO = function() {
        this.Bf.length = 0
    }
    ;
    d.kC = function(a) {
        this.nt(a) && this.bW.vE(a)
    }
    ;
    d.nt = function(a) {
        return "state"in a && "mode"in a
    }
    ;
    d.JW = function(a, b) {
        var c = a.mode
          , e = b.mode
          , f = c === e
          , g = "" !== c && "" !== e
          , k = a.state === b.state;
        return k && f || f && g || k && g && c !== e
    }
    ;
    vl.inject = ["activityReportingService"];
    function wl(a, b, c, e, f, g, k, l, n, q, s, r, G, Z) {
        this.uJ = a;
        this.tJ = b;
        this.xJ = c;
        this.yq = e;
        this.vJ = f;
        this.wJ = g;
        this.rJ = k;
        this.rx = l;
        this.sx = n;
        this.yJ = q;
        this.px = s;
        this.tx = r;
        this.sJ = G;
        this.ux = Z
    }
    wl.prototype.load = function(a) {
        function b() {
            0 == --e && a(Ta(c))
        }
        var c = [];
        c[0] = [this.Ql({
            ee: this.uJ,
            title: "[[What to Watch|Title of a list of videos which mix therecommendations and the subscriptions of a user.]]",
            Ta: "icon-star"
        }), this.Ql({
            ee: this.sJ,
            title: "[[My Subscriptions|Title for a list of videos that includes all of the channels that this user has subscribed to.|9186267]]",
            Ta: "icon-subscribe"
        })];
        c[3] = [this.Ql({
            ee: this.vJ,
            title: "[[My Favorites|Title of playlist of the users favorite videos.]]",
            Ta: "icon-star"
        })];
        c[6] = [{
            ee: this.tJ,
            title: "[[Recommended Videos for You|Title of playlist with videos recommended to a user.]]",
            Ta: "icon-reward"
        }, {
            ee: this.yq,
            title: "[[My Uploads|Playlist title for videos uploaded by the current user.]]",
            Ta: "icon-upload"
        }, {
            ee: this.wJ,
            title: "[[My Watch History|Title of a playlist with recently watched videos.]]",
            Ta: "icon-hourglass"
        }, {
            ee: this.rJ,
            title: "[[My Activity|Title of a playlist with videos a user recently liked, or subscribed to.]]",
            Ta: "icon-speechbubble"
        }, {
            ee: this.xJ,
            title: "[[My Watch Later Videos|Title of a playlist with videos a user was planning to watch later.]]",
            Ta: "icon-player-watchlater"
        }].map(w(this.Ql, this));
        var e = 4;
        this.sx.Mc("start_browse", "", "us_rs", "us_r");
        var f = w(function(a, e) {
            var l = 50 * a;
            e && l > Math.min(e.Ee, 100) ? this.Gq(c, b, e, this.yq, "displayName", 1, w(function(a) {
                return this.ux.$c(a)
            }, this)) : (l += 1,
            this.sx.ab("default", w(function(b) {
                e ? e.A.push(b.A.ba()) : e = b;
                f(a + 1, e)
            }, this), {
                "start-index": l
            }, function() {
                e || (e = new U);
                f(a + 1, e)
            }))
        }, this);
        f(0);
        this.rx.Mc("start_browse", "", "up_rs", "up_r");
        this.rx.ab("default", w(function(a) {
            this.Gq(c, b, a, this.yJ, "title", 2, function() {
                return "icon-playlist"
            })
        }, this), null, w(this.Gx, this, c, b, 2));
        this.tx.Mc("start_browse", "", "feed_rs", "feed_r");
        this.tx.load({}, w(function(a) {
            c[4] = a;
            b()
        }, this));
        this.px.Mc("start_browse", "", "si_rs", "si_r");
        this.px.load({
            query: "default",
            type: "channel"
        }, w(function(a) {
            this.Gq(c, b, a, this.yq, "displayName", 5, w(function(a) {
                return this.ux.$c(a)
            }, this))
        }, this), w(this.Gx, this, c, b, 5))
    }
    ;
    wl.prototype.Gq = function(a, b, c, e, f, g, k) {
        a[g] = c.A.ba().map(function(a) {
            return Si(e, a[f], k(a.id), a.id)
        }, this);
        b()
    }
    ;
    wl.prototype.Gx = function(a, b, c) {
        a[c] = [];
        b()
    }
    ;
    wl.prototype.Ql = function(a) {
        return Si(a.ee, a.title, a.Ta, "default")
    }
    ;
    wl.inject = "riverService recommendedVideosService watchLaterService userUploadsService userFavoritesService watchHistoryService activityService userPlaylistsService userSubscriptionsService playlistService channelSuggestionService featuredService newSubscriptionsService ytThumbnails".split(" ");
    function xl(a, b, c) {
        Wk.call(this, a, b, "post_play_sw");
        this.YB = c
    }
    z(xl, Wk);
    xl.prototype.RV = function() {
        this.Fs = this.YB.lf()
    }
    ;
    xl.prototype.Py = function(a, b, c) {
        this.Fs && (this.Ni("/gen_204", this.jX(a, b, c)),
        this.Fs = null)
    }
    ;
    xl.prototype.jX = function(a, b, c) {
        var e = yl
          , f = {
            a: "tv_postplay"
        };
        f[e.YR] = a;
        f[e.WR] = b;
        c && (f[e.XR] = c);
        f.t = ((this.YB.lf() - this.Fs) / 1E3).toFixed(1);
        f.e = this.Ub.Lr();
        x(f, this.Ub.ig());
        return f
    }
    ;
    var yl = {
        WR: "v",
        XR: "next",
        YR: "outcome"
    };
    xl.inject = ["environmentModel", "privateDataService", "timeService"];
    function Il(a) {
        this.EE = a.document.body;
        a.addEventListener("resize", w(this.GE, this), !1);
        this.GE()
    }
    Il.prototype.GE = function() {
        Id(this.EE, "fontSize", xe(this.EE.offsetHeight / 720))
    }
    ;
    Il.inject = ["window"];
    function Jl(a, b, c) {
        this.VL = b;
        this.j = a;
        this.HN = c;
        this.GN = 0;
        this.N_ = 5E3;
        this.cj = null;
        this.aO()
    }
    Jl.prototype.aO = function() {
        if (this.cj = this.j.document.getElementById("pluginObjectNetwork"))
            this.GN = this.HN.Ik(w(function() {
                this.ZN()
            }, this), 5E3)
    }
    ;
    Jl.prototype.ZN = function() {
        this.TR() || this.VL.G("network-failure")
    }
    ;
    Jl.prototype.TR = function() {
        var a = 0
          , a = 0
          , b = this.cj.GetActiveType();
        if (-1 === b)
            return !1;
        a = this.cj.CheckPhysicalConnection(b);
        if (1 !== a)
            return !1;
        a = this.cj.CheckGateway(b);
        return 1 !== a ? !1 : !0
    }
    ;
    Jl.prototype.kM = function() {
        this.j.curWidget && this.j.curWidget.setPreference("return", "true")
    }
    ;
    Jl.inject = ["window", "rootDispatcher", "timeService"];
    function Kl(a, b, c) {
        this.w0 = a;
        this.qQ = b;
        this.CA = c;
        this.pB = new pk(c,"searchTile","request-search",0);
        this.kQ = new X(c,"actionTile","request-clear-searches","[[CLEAR|A button that clears all of a users recent searches.]]","clear-search-icon","[[Clear search history|Displayed as menu item subtitle. Explains to a user that this item will clear previous search history.]]","search-tile")
    }
    Kl.prototype.load = function(a, b) {
        var c = new U
          , e = this.qQ.load();
        this.pB.searchCount = e.length;
        c.A.push(this.pB);
        for (var f = 0, g = e.length; f < g; ++f) {
            var k = e[f];
            c.A.push(new ok(this.CA,"recentSearchTile","request-search",k.query,k.totalResults,k.video ? k.video.imageUrl : ""))
        }
        0 < e.length && c.A.push(this.kQ);
        b && b(c)
    }
    ;
    Kl.prototype.vQ = function() {
        var a = this.CA.ca("[[Search|Clicking this launches the search interface.]]");
        return Pi(this, a, "icon-search", "searchRow", null, "actiontile")
    }
    ;
    Kl.inject = ["$rootScope", "searchHistoryService", "locale"];
    function Ll(a, b, c, e, f, g, k, l, n, q, s, r) {
        Kg.call(this, a, b, c, e, f, g, k, q, s, r);
        this.yU = l;
        this.OA = n
    }
    z(Ll, Kg);
    Ll.prototype.Ug = function(a, b, c, e) {
        a.Ka = this.yU;
        return Kg.prototype.Ug.call(this, a, b, c, e)
    }
    ;
    function Ml(a, b, c, e, f, g, k, l, n, q, s, r) {
        Ll.call(this, a, b, c, e, f, g, k, l, n, q, s, r);
        this.MY = {};
        this.JE = "relevance";
        this.serviceQuery = ""
    }
    z(Ml, Ll);
    Ml.prototype.load = function(a, b) {
        var c = this.JM(a);
        return c.query ? Ml.h.load.call(this, c, b) : (c = new this.bi.sb,
        b && b(c),
        new ag(c))
    }
    ;
    Ml.prototype.JM = function(a) {
        var b = {};
        x(b, this.MY);
        !1 === b.hd && delete b.hd;
        a && x(b, a);
        this.JE && (b.orderby = this.JE);
        return b
    }
    ;
    Ml.prototype.S5 = function() {
        this.serviceQuery = ""
    }
    ;
    function Nl(a, b, c, e, f, g, k, l, n) {
        this.y_ = a;
        this.gI = b;
        this.RH = c;
        this.SH = e;
        this.ki = f;
        this.Tb = g;
        this.zH = k;
        this.AH = l;
        this.rc = n;
        this.x_ = {};
        this.xH = new X(n,"actionTile","request-login","[[SIGN IN|Title of menu item which allows a user to sign in to the application with a YouTube account and see personalized content.]]","sign-in-user-icon","[[View your subscriptions, uploads, playlists, likes and more.|Explanatory text on a menu item. Explains access to what features a user will get access when she logs in.]]");
        this.Lv = new qk(n,"signOutTile","request-logout");
        this.Fv = this.Tb.supportsPairing && new nk(n,"pairTile","request-pairing",this.ki.Hk().H()) || null;
        this.pp = this.Tb.supportsPairing && new nk(n,"resetPairingTile","request-remote-reset",this.ki.Dk().H()) || null;
        this.qc = [];
        this.vI();
        this.Tb.supportsPairing && this.ki.b("pairing:changed", w(this.wI, this))
    }
    d = Nl.prototype;
    d.vI = function() {
        if (this.Tb.supportsSounds) {
            var a = new rk(this.rc,"toggleTile","request-toggle-sounds","[[Sounds|Title for a tile that toggles sounds.]]","[[Turn on or off application sounds.|Description for a tile that toggles sounds made by the YouTube TV application]]",w(function() {
                return this.AH.enabled
            }, this));
            this.qc.push(a)
        }
        if (this.Tb.Jb(Sd)) {
            var a = new X(this.rc,"actionTile","request-view-help","[[Help|A button title that provides an access to the help page.]]","help-icon")
              , b = new X(this.rc,"actionTile","request-view-feedback","[[Feedback|A button title that provides an access to the feedback page.]]","feedback-icon");
            this.qc.push(a);
            this.qc.push(b)
        }
        a = new rk(this.rc,"toggleTile","request-device-retention","[[Improve YouTube|Title for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]","[[Help improve YouTube by sending anonymous usage data.|Description for a tile that indicates whether a user can enable or disable whether the application gathers statistics about them.]]",w(function() {
            return this.zH.Qi
        }, this));
        this.qc.push(a);
        this.Tb.ze && (a = new rk(this.rc,"toggleTile","request-toggle-video-info","Show Video Info","",w(function() {
            return this.Tb.isVideoInfoVisible
        }, this)),
        b = new X(this.rc,"actionTile","request-debug-info","SHOW DEBUG INFO","warning"),
        this.qc.push(a),
        this.qc.push(b));
        if (this.Tb.Dd || this.Tb.bk)
            a = new X(this.rc,"actionTile","request-view-credits","[[CREDITS|Button that shows credit information, giving credit to all open-source software used in building this product.]]"),
            this.qc.push(a);
        0 == this.Tb.rh.vr && (a = new X(this.rc,"kenkoTile","request-view-kenko"),
        b = new X(this.rc,"shiyojoTile","request-view-shiyojo"),
        this.qc.push(a),
        this.qc.push(b));
        a = new X(this.rc,"actionTile","request-view-tos","[[Terms of Service and Privacy|Title of menu item which shows links to terms of service and privacy documents on youtube.com]]");
        this.qc.push(a)
    }
    ;
    d.wI = function() {
        this.hW();
        this.gI.Rb()
    }
    ;
    d.hW = function() {
        this.Fv.deviceCount = this.ki.Hk().H();
        this.pp.deviceCount = this.ki.Dk().H()
    }
    ;
    d.load = function(a, b) {
        var c = b || p;
        this.RH.Kb(w(function(a) {
            a ? this.SH.ab("default", w(this.yC, this, c), null, w(this.yC, this, c, null)) : this.LB(c, null)
        }, this))
    }
    ;
    d.yC = function(a, b) {
        b || (b = new Yi("",""));
        this.Tb.GA(b);
        this.LB(a, b)
    }
    ;
    d.LB = function(a, b) {
        this.Lv.channel = b;
        var c = [];
        c.push(b ? this.Lv : this.xH);
        this.Tb.supportsPairing && (c.push(this.Fv),
        0 < this.pp.deviceCount && c.push(this.pp));
        var e = new U;
        e.A.$f(c.concat(this.qc));
        a(e)
    }
    ;
    d.wQ = function() {
        var a = this.rc.ca("[[Sign In & Settings|Menu item title that allows a user to sign in or change settings of the application.]]");
        return Pi(this, a, "icon-player-settings", "settingsRowService", null, "actiontile")
    }
    ;
    Nl.inject = "locationService angularHelper authService userProfileService remoteService environmentModel privateDataService soundService locale".split(" ");
    function Ol(a, b, c) {
        this.py = b;
        this.qy = new tk(50);
        this.enabled = this.py.get("sound-enabled");
        b = typeof a.webkitAudioContext;
        a = typeof a.AudioContext;
        if ("function" == b || "object" == b)
            this.Mi = new webkitAudioContext;
        else if ("function" == a || "object" == a)
            this.Mi = new AudioContext;
        this.Mi ? c.b("play-sound", w(this.bM, this)) : console.error("Sound Service was created, but the platform has no audio context!")
    }
    Ol.prototype.bM = function(a) {
        if (this.enabled) {
            a = a.detail;
            var b = this.qy.get(a);
            b ? this.DD(b) : (b = new Dk(Q.Vq + "/sound/" + a + ".wav"),
            this.qy.rs(a, b),
            b.oV(this.Mi, w(this.DD, this, b)))
        }
    }
    ;
    Ol.prototype.DD = function(a) {
        if (a.It) {
            var b = this.Mi.createBufferSource();
            b.buffer = a.It;
            b.connect(this.Mi.destination);
            b.start(0)
        }
    }
    ;
    Ol.prototype.Wa = function() {
        this.enabled = !this.enabled;
        this.py.Ra("sound-enabled", this.enabled)
    }
    ;
    Ol.$inject = ["window", "localStorage", "rootDispatcher"];
    function Pl(a, b, c, e, f) {
        Zf.call(this, a, b, c, e);
        this.Ki = this.Li = !1;
        this.Hj = [];
        this.ND = f
    }
    z(Pl, Zf);
    d = Pl.prototype;
    d.Aw = function(a) {
        this.Li ? a(this.Ki, this.$i) : this.mD(w(function(a, c) {
            a(!!c, !!c)
        }, this, a))
    }
    ;
    d.Kb = function(a) {
        var b = this.fr();
        !b && this.Ki || !this.Li ? this.mD(a) : a(b)
    }
    ;
    d.ef = function() {
        this.Ki = !1;
        Pl.h.ef.call(this)
    }
    ;
    d.MD = function() {
        this.fb.post("https://yt-xbox.sandbox.google.com/api/xbox/deregister", null, {
            style: "json"
        })
    }
    ;
    d.HD = function(a) {
        this.fb.post("https://yt-xbox.sandbox.google.com/api/xbox/register", null, {
            token: a
        })
    }
    ;
    d.Ei = function(a, b) {
        this.Li = !0;
        Pl.h.Ei.call(this, a, b);
        this.Ki = !!this.fr()
    }
    ;
    d.Yl = function(a, b) {
        this.Li && this.ef();
        this.Li = !0;
        this.Ki = !1;
        Pl.h.Yl.call(this, a, b)
    }
    ;
    d.$s = function() {
        return this.ND.getOauthClientSecret()
    }
    ;
    d.wn = function() {
        return this.ND.getOauthClientId()
    }
    ;
    d.mD = function(a) {
        var b = w(this.GT, this);
        this.Hj.push(a);
        1 == this.Hj.length && this.fb.post("https://yt-xbox.sandbox.google.com/api/xbox/refresh", null, {
            style: "json"
        }, w(this.Ei, this, b), w(this.Yl, this, b))
    }
    ;
    d.GT = function(a) {
        for (var b = 0, c = this.Hj.length; b < c; ++b)
            this.Hj[b](a);
        this.Hj = []
    }
    ;
    Pl.inject = ["ytHttp", "timeService", "localStorage", "environmentModel", "ssoApi"];
    function Ql(a, b, c) {
        this.V = new Ek(a);
        this.Ww = a;
        this.Fq = b;
        this.zK = c;
        (a = this.wK()) && this.yK(He(a));
        this.Xw();
        this.Fq.uK(w(this.vK, this));
        this.zK.b("state:changed", w(this.xK, this))
    }
    d = Ql.prototype;
    d.UR = function() {
        return !this.V.Lm
    }
    ;
    d.xK = function(a, b) {
        this.V.Em = a ? 1 : 0;
        a && (this.V.ej = b || this.V.ej,
        this.V.Fm = this.V.hj,
        this.V.hj = this.Ww.ik,
        this.V.dj || (this.V.dj = this.V.hj));
        this.Xw()
    }
    ;
    d.oU = function() {
        return {
            app_anon_id: this.V.id,
            firstactive: this.V.Qr,
            prevactive: this.V.Lm,
            firstactivegeo: this.V.Rr,
            loginstate: this.V.Em,
            firstlogin: this.V.dj,
            prevlogin: this.V.Fm,
            uga: this.V.ej
        }
    }
    ;
    d.Xw = function() {
        this.Fq.rB("device-statistics", this.V.dT())
    }
    ;
    d.wK = function() {
        return this.Fq.wC("device-statistics")
    }
    ;
    d.yK = function(a) {
        this.V.id = a.id;
        this.V.Qr = a.firstActive;
        this.V.Rr = a.firstActiveGeo;
        this.V.hj = a.recentLogin;
        this.V.dj = a.firstLogin;
        this.V.Fm = a.prevLogin;
        this.V.ej = a.uga;
        this.V.Em = a.loginState ? 1 : 0;
        this.V.Lm = a.recentActive
    }
    ;
    d.vK = function() {
        this.V = new Ek(this.Ww)
    }
    ;
    Ql.inject = ["environmentModel", "privateDataService", "authService"];
    !H || J(9);
    var Rl = {
        f2: "zh-hant-t-i0-array-1992",
        g2: "zh-hans-t-i0-cangjie-1982",
        i2: "zh-hans-t-i0-cangjie-1987",
        h2: "zh-hant-t-i0-cangjie-1982",
        j2: "zh-hant-t-i0-cangjie-1987",
        k2: "yue-hant-t-i0-und",
        l2: "zh-t-i0-pinyin",
        m2: "zh-hant-t-i0-pinyin",
        n2: "am-t-i0-und",
        o2: "ar-t-i0-und",
        p2: "be-t-i0-und",
        q2: "bn-t-i0-und",
        r2: "bg-t-i0-und",
        t2: "en-t-i0-und",
        s2: "nl-t-i0-und",
        u2: "fr-t-i0-und",
        v2: "de-t-i0-und",
        w2: "el-t-i0-und",
        x2: "gu-t-i0-und",
        y2: "he-t-i0-und",
        z2: "hi-t-i0-und",
        A2: "ja-hira-t-i0-und",
        B2: "it-t-i0-und",
        C2: "ja-t-ja-hira-i0-und",
        D2: "kn-t-i0-und",
        E2: "ml-t-i0-und",
        F2: "mr-t-i0-und",
        G2: "ne-t-i0-und",
        H2: "or-t-i0-und",
        I2: "fa-t-i0-und",
        J2: "pl-t-i0-und",
        K2: "pt-t-i0-und",
        L2: "pa-t-i0-und",
        M2: "ru-t-i0-und",
        N2: "sa-t-i0-und",
        O2: "sr-t-i0-und",
        P2: "si-t-i0-und",
        Q2: "es-t-i0-und",
        R2: "ta-t-i0-und",
        S2: "te-t-i0-und",
        T2: "ti-t-i0-und",
        U2: "tr-t-i0-und",
        V2: "uk-t-i0-und",
        W2: "ur-t-i0-und",
        X2: "vi-t-i0-und",
        Y2: "zh-t-i0-wubi-1986",
        Z2: "zh-hant-t-i0-und",
        a3: "sq-t-k0-und",
        b3: "ar-t-k0-und",
        c3: "hy-hyr-t-k0-und",
        d3: "hy-hyt-t-k0-und",
        e3: "eu-t-k0-und",
        f3: "be-t-k0-und",
        g3: "bn-t-k0-und",
        h3: "bn-t-und-latn-k0-und",
        i3: "bs-t-k0-und",
        j3: "pt-br-t-k0-und",
        k3: "bg-t-k0-und",
        l3: "bg-t-k0-qwerty",
        m3: "ca-t-k0-und",
        n3: "chr-t-k0-und",
        o3: "chr-t-und-latn-k0-und",
        p3: "hr-t-k0-und",
        q3: "cs-t-k0-und",
        r3: "cs-t-k0-qwertz",
        s3: "da-t-k0-und",
        t3: "prs-t-k0-und",
        u3: "hi-t-k0-qwerty",
        v3: "nl-t-k0-und",
        w3: "dz-t-k0-und",
        x3: "en-t-k0-und",
        y3: "en-t-k0-dvorak",
        z3: "et-t-k0-und",
        A3: "und-ethi-t-k0-und",
        B3: "fi-t-k0-und",
        C3: "fr-t-k0-und",
        D3: "gl-t-k0-und",
        E3: "ka-t-k0-und",
        F3: "ka-t-k0-legacy",
        G3: "de-t-k0-und",
        H3: "el-t-k0-und",
        I3: "gu-t-k0-und",
        J3: "gu-t-und-latn-k0-qwerty",
        K3: "pa-guru-t-k0-und",
        L3: "pa-guru-t-und-latn-k0-und",
        M3: "he-t-k0-und",
        N3: "hi-t-k0-und",
        O3: "hu-t-k0-101key",
        P3: "is-t-k0-und",
        Q3: "it-t-k0-und",
        R3: "kn-t-k0-und",
        S3: "kn-t-und-latn-k0-und",
        T3: "kk-t-k0-und",
        U3: "km-t-k0-und",
        V3: "ko-t-k0-und",
        W3: "ky-cyrl-t-k0-und",
        X3: "lo-t-k0-und",
        Y3: "lv-t-k0-und",
        Z3: "lt-t-k0-und",
        a4: "mk-t-k0-und",
        b4: "ml-t-k0-und",
        c4: "ml-t-und-latn-k0-und",
        d4: "mt-t-k0-und",
        h4: "my-t-k0-und",
        e4: "mi-t-k0-und",
        f4: "mn-cyrl-t-k0-und",
        g4: "srp-t-k0-und",
        k4: "no-t-k0-und",
        l4: "or-t-k0-und",
        m4: "or-t-und-latn-k0-und",
        n4: "latn-002-t-k0-und",
        o4: "ps-t-k0-und",
        p4: "fa-t-k0-und",
        q4: "pl-t-k0-und",
        r4: "pt-pt-t-k0-und",
        s4: "rom-t-k0-und",
        t4: "ro-t-k0-und",
        u4: "ro-t-k0-legacy",
        v4: "ro-t-k0-extended",
        w4: "ru-t-k0-und",
        x4: "ru-t-k0-qwerty",
        y4: "sa-t-und-latn-k0-und",
        z4: "sr-cyrl-t-k0-und",
        A4: "sr-latn-t-k0-und",
        B4: "si-t-k0-und",
        C4: "sk-t-k0-und",
        D4: "sk-t-k0-qwerty",
        E4: "sl-t-k0-und",
        F4: "uzs-t-k0-und",
        G4: "es-t-k0-und",
        H4: "sv-t-k0-und",
        I4: "de-ch-t-k0-und",
        J4: "ta-t-k0-ta99",
        K4: "ta-t-k0-und",
        M4: "ta-t-und-latn-k0-und",
        N4: "ta-t-k0-typewriter",
        L4: "ta-t-k0-itrans",
        O4: "tt-t-k0-und",
        P4: "te-t-k0-und",
        Q4: "te-t-und-latn-k0-und",
        R4: "th-t-k0-und",
        S4: "th-t-k0-pattajoti",
        T4: "th-t-k0-tis",
        U4: "tr-t-k0-legacy",
        V4: "tr-t-k0-und",
        W4: "ug-t-k0-und",
        X4: "uk-t-k0-101key",
        Y4: "ur-t-k0-und",
        a5: "uz-cyrl-t-k0-und",
        b5: "uz-cyrl-t-k0-legacy",
        c5: "uz-latn-t-k0-und",
        d5: "vi-t-k0-und",
        e5: "vi-t-k0-legacy",
        g5: "vi-t-k0-viqr",
        h5: "vi-t-k0-vni",
        i5: "yi-t-k0-und",
        i4: "ne-t-k0-und",
        j4: "ne-t-und-latn-k0-und",
        Z4: "en-us-t-k0-intl",
        $0: "af-t-i0-handwrit",
        c1: "be-t-i0-handwrit",
        d1: "bg-t-i0-handwrit",
        e1: "ca-t-i0-handwrit",
        j1: "cs-t-i0-handwrit",
        b2: "cy-t-i0-handwrit",
        k1: "da-t-i0-handwrit",
        s1: "de-t-i0-handwrit",
        t1: "el-t-i0-handwrit",
        m1: "en-t-i0-handwrit",
        U1: "es-t-i0-handwrit",
        n1: "et-t-i0-handwrit",
        b1: "eu-t-i0-handwrit",
        p1: "fi-t-i0-handwrit",
        o1: "fil-t-i0-handwrit",
        q1: "fr-t-i0-handwrit",
        z1: "ga-t-i0-handwrit",
        r1: "gl-t-i0-handwrit",
        v1: "hi-t-i0-handwrit",
        i1: "hr-t-i0-handwrit",
        u1: "ht-t-i0-handwrit",
        w1: "hu-t-i0-handwrit",
        y1: "id-t-i0-handwrit",
        x1: "is-t-i0-handwrit",
        A1: "it-t-i0-handwrit",
        B1: "ja-t-i0-handwrit",
        C1: "ko-t-i0-handwrit",
        D1: "la-t-i0-handwrit",
        F1: "lt-t-i0-handwrit",
        E1: "lv-t-i0-handwrit",
        G1: "mk-t-i0-handwrit",
        H1: "ms-t-i0-handwrit",
        J1: "nb-t-i0-handwrit",
        l1: "nl-t-i0-handwrit",
        K1: "nn-t-i0-handwrit",
        I1: "no-t-i0-handwrit",
        L1: "pl-t-i0-handwrit",
        M1: "pt-t-i0-handwrit",
        N1: "pt-br-t-i0-handwrit",
        O1: "pt-pt-t-i0-handwrit",
        P1: "ro-t-i0-handwrit",
        Q1: "ru-t-i0-handwrit",
        S1: "sk-t-i0-handwrit",
        T1: "sl-t-i0-handwrit",
        a1: "sq-t-i0-handwrit",
        R1: "sr-t-i0-handwrit",
        W1: "sv-t-i0-handwrit",
        V1: "sw-t-i0-handwrit",
        X1: "th-t-i0-handwrit",
        Y1: "tr-t-i0-handwrit",
        Z1: "uk-t-i0-handwrit",
        a2: "vi-t-i0-handwrit",
        f1: "zh-t-i0-handwrit",
        g1: "zh-hans-t-i0-handwrit",
        h1: "zh-hant-t-i0-handwrit"
    };
    function Sl(a) {
        this.code = a;
        this.type = null;
        this.gW = this.dC = "en";
        this.RX();
        this.y0 = a
    }
    var Tl = "ar-t-k0-und prs-t-k0-und he-t-k0-und ps-t-k0-und fa-t-k0-und uzs-t-k0-und ug-t-k0-und ur-t-k0-und yi-t-k0-und".split(" ")
      , Ul = ["ar-t-i0-und", "he-t-i0-und", "fa-t-i0-und", "ur-t-i0-und"]
      , Vl = {};
    function Wl(a) {
        if (!a)
            return null;
        kb(Rl, a) || (a = Xl(a));
        a = a.replace(/_/g, "-");
        kb(Rl, a) || (a = Xl(a + "-und"));
        return Vl[a] ? Vl[a] : kb(Rl, a) ? (Vl[a] = new Sl(a),
        Vl[a]) : null
    }
    var Yl = "bn gu pa kn ml or sa ta te ne".split(" ")
      , Zl = {
        im_pinyin_zh_hans: "zh-t-i0-pinyin",
        im_wubi_zh_hans: "zh-t-i0-wubi-1986",
        im_pinyin_zh_hant: "zh-hant-t-i0-pinyin",
        im_zhuyin_zh_hant: "zh-hant-t-i0-und",
        im_t13n_ja: "ja-t-ja-hira-i0-und",
        "im_t13n_ja-Hira": "ja-hira-t-i0-und",
        vkd_en_dvorak: "en-t-k0-dvorak",
        vkd_hy_east: "hy-hyr-t-k0-und",
        vkd_hy_west: "hy-hyt-t-k0-und",
        vkd_bg_phone: "bg-t-k0-qwerty",
        vkd_cs_qwertz: "cs-t-k0-qwertz",
        vkd_deva_phone: "hi-t-k0-qwerty",
        vkd_ethi: "und-ethi-t-k0-und",
        vkd_ka_qwerty: "ka-t-k0-und",
        vkd_ka_typewriter: "ka-t-k0-legacy",
        vkd_guru_inscript: "pa-guru-t-k0-und",
        vkd_guru_phone: "pa-guru-t-und-latn-k0-und",
        vkd_gu_phone: "gu-t-und-latn-k0-qwerty",
        vkd_hu_101: "hu-t-k0-101key",
        vkd_ro_sr13392_primary: "ro-t-k0-legacy",
        vkd_ro_sr13392_secondary: "ro-t-k0-extended",
        vkd_sk_qwerty: "sk-t-k0-qwerty",
        vkd_es_es: "es-t-k0-und",
        vkd_ta_tamil99: "ta-t-k0-ta99",
        vkd_ta_typewriter: "ta-t-k0-typewriter",
        vkd_ta_itrans: "ta-t-k0-itrans",
        vkd_tr_f: "tr-t-k0-legacy",
        vkd_tr_q: "tr-t-k0-und",
        vkd_uk_101: "uk-t-k0-101key",
        vkd_uz_cyrl_phone: "uz-cyrl-t-k0-und",
        vkd_uz_cyrl_type: "uz-cyrl-t-k0-legacy",
        vkd_vi_tcvn: "vi-t-k0-und",
        vkd_vi_telex: "vi-t-k0-legacy",
        vkd_vi_viqr: "vi-t-k0-viqr",
        vkd_chr_phone: "chr-t-und-latn-k0-und",
        vkd_th_pattajoti: "th-t-k0-pattajoti",
        vkd_th_tis: "th-t-k0-tis"
    }
      , $l = sb(Zl);
    function Xl(a) {
        if (Zl[a])
            return Zl[a];
        if ("vkd_iw" == a)
            return "he-t-k0-und";
        if ("im_t13n_iw" == a)
            return "he-t-i0-und";
        if ("tr-t-k0-lagacy" == a)
            return "tr-t-k0-legacy";
        var b = a.split("_")
          , b = 0 == a.lastIndexOf("im_t13n", 0) ? b[2] + "-t-i0-und" : 2 == b.length ? b[1] + "-t-k0-und" : F(Yl, b[1]) ? "inscript" == b[2] ? b[1] + "-t-k0-und" : b[1] + "-t-und-latn-k0-und" : b[1] + "-" + b[2] + "-t-k0-und";
        return kb(Rl, b) ? b : a
    }
    d = Sl.prototype;
    d.rX = function() {
        if ($l[this.code])
            this.Vt = $l[this.code].slice(4);
        else {
            var a = this.code.split("-t-")
              , b = a[0]
              , a = a[1]
              , b = b.replace(/-/g, "_");
            "en_us" == b && (b = "us");
            !F(Yl, b) || "und-latn-k0-und" != a && "k0-und" != a ? "k0-und" == a ? this.Vt = b : (a = a.match(/k0-(.*)/),
            a[1] && (this.Vt = b + "_" + a[1].replace("qwerty", "phone"))) : this.Vt = b + ("k0-und" == a ? "_inscript" : "_phone")
        }
    }
    ;
    d.RX = function() {
        0 <= this.code.indexOf("-i0") ? (this.type = "im",
        sa(this.code, "-handwrit") && (this.type = "hw")) : 0 <= this.code.indexOf("-k0") && (this.type = "vkd");
        var a = this.code.split(/-t|-i0|-k0/);
        "yue-hant" == a[0] && (a[0] = "zh-Hant");
        switch (this.code) {
        case "yue-hant-t-i0-und":
            a[0] = "zh-Hant";
            break;
        case "zh-t-i0-pinyin":
        case "zh-t-i0-wubi-1986":
            a[0] = "zh-Hans"
        }
        this.dC = this.rE(a[0]);
        a[1] && (this.gW = this.rE(a[1]));
        "vkd" == this.type && this.rX()
    }
    ;
    d.toString = function() {
        return this.code
    }
    ;
    d.B6 = function() {
        return this.VZ() ? "rtl" : "ltr"
    }
    ;
    d.VZ = function() {
        return F(Ul, this.code) || F(Tl, this.code)
    }
    ;
    d.D8 = function() {
        return "im" == this.type ? /^(zh|yue)/.test(this.code) : !1
    }
    ;
    d.rE = function(a) {
        if ("und-ethi" == a)
            return "et";
        a = a.split("-");
        return 2 == a.length ? 2 == a[1].length ? a[0] + "-" + a[1].toUpperCase() : a[0] + "-" + a[1].charAt(0).toUpperCase() + a[1].slice(1) : a[0]
    }
    ;
    d.Y8 = function() {
        return "im" == this.type && !/^(zh|yue|ja)/.test(this.code)
    }
    ;
    var am, bm, cm, dm, em, fm, gm;
    gm = fm = em = dm = cm = bm = am = !1;
    var hm = Bb();
    hm && (-1 != hm.indexOf("Firefox") ? am = !0 : -1 != hm.indexOf("Camino") ? bm = !0 : -1 != hm.indexOf("iPhone") || -1 != hm.indexOf("iPod") ? cm = !0 : -1 != hm.indexOf("iPad") ? dm = !0 : -1 != hm.indexOf("Chrome") ? fm = !0 : -1 != hm.indexOf("Android") ? em = !0 : -1 != hm.indexOf("Safari") && (gm = !0));
    var im = am
      , jm = bm
      , km = cm
      , lm = dm
      , mm = em
      , nm = fm
      , om = gm;
    function pm(a) {
        return (a = a.exec(Bb())) ? a[1] : ""
    }
    (function() {
        if (im)
            return pm(/Firefox\/([0-9.]+)/);
        if (H || Fb)
            return Tb;
        if (nm)
            return pm(/Chrome\/([0-9.]+)/);
        if (om)
            return pm(/Version\/([0-9.]+)/);
        if (km || lm) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Bb());
            if (a)
                return a[1] + "." + a[2]
        } else {
            if (mm)
                return (a = pm(/Android\s+([0-9.]+)/)) ? a : pm(/Version\/([0-9.]+)/);
            if (jm)
                return pm(/Camino\/([0-9.]+)/)
        }
        return ""
    }
    )();
    function qm(a, b, c) {
        this.url = a;
        this.Pc = b;
        this.data = c ? c : null
    }
    ;function rm(a, b) {
        this.gX = a;
        this.$g = b;
        this.vX = [a, b].join("|")
    }
    var sm = {};
    function tm(a, b) {
        "iw" == a ? a = "he" : "iw" == b && (b = "he");
        var c = [a, b].join("|");
        return sm[c] || (sm[c] = new rm(a,b))
    }
    rm.prototype.toString = function() {
        return this.vX
    }
    ;
    rm.prototype.g8 = function() {
        return tm(this.$g, this.gX)
    }
    ;
    function um(a, b, c) {
        this.text = u(a) ? a : [a];
        this.Ws = !!b;
        this.priority = void 0 == c ? 0 : c;
        this.status = "i"
    }
    um.prototype.Cz = function() {
        return this.text[0]
    }
    ;
    um.prototype.h8 = function() {
        return "s" == this.status || "f" == this.status
    }
    ;
    function vm(a, b) {
        null != a && this.append.apply(this, arguments)
    }
    d = vm.prototype;
    d.xe = "";
    d.s8 = function(a) {
        this.xe = "" + a
    }
    ;
    d.append = function(a, b, c) {
        this.xe += a;
        if (null != b)
            for (var e = 1; e < arguments.length; e++)
                this.xe += arguments[e];
        return this
    }
    ;
    d.clear = function() {
        this.xe = ""
    }
    ;
    d.H = function() {
        return this.xe.length
    }
    ;
    d.toString = function() {
        return this.xe
    }
    ;
    function wm(a, b, c, e, f) {
        um.call(this, a, c);
        this.fn = this.mn = 1;
        this.zs = !!e;
        this.b0 = this.a0 = !1;
        this.Es = "";
        this.eC = !0;
        this.zd = null;
        this.DB = f ? Pa(f) : null;
        b instanceof Sl ? this.zd = b : this.zd = "zh" == b.$g || "zh-Hans" == b.$g ? Wl("zh-t-i0-pinyin") : "zh-Hant" == b.$g ? Wl("zh-hant-t-i0-und") : "ja" == b.$g ? Wl("ja-t-ja-hira-i0-und") : Wl(b.$g + "-t-i0-und")
    }
    z(wm, um);
    d = wm.prototype;
    d.S8 = function() {
        return !1
    }
    ;
    d.w$ = function() {
        return this.eC
    }
    ;
    d.i$ = function(a) {
        this.eC = a
    }
    ;
    d.S9 = function(a) {
        this.Es = a
    }
    ;
    d.r7 = function() {
        return this.fn || 0
    }
    ;
    d.WB = function(a) {
        this.fn = 0 < a ? a : 0
    }
    ;
    d.Jn = function() {
        return this.mn || 0
    }
    ;
    d.mC = function(a) {
        this.mn = 0 < a ? a : 0
    }
    ;
    d.Cz = function() {
        return wm.h.Cz.call(this)
    }
    ;
    d.E8 = function() {
        return [this.zd.toString()]
    }
    ;
    d.f9 = function(a) {
        return this.zd != a.zd || this.zs || a.zs || this.Ws || a.Ws || !(5 > this.text.length + a.text.length) || 0 != this.priority || 0 != a.priority ? !1 : (F(this.text, a.text) || Qa(this.text, a.text),
        a.Jn() > this.Jn() && this.mC(a.Jn()),
        !0)
    }
    ;
    d.H9 = function(a) {
        return La(a.text, function(b) {
            return F(this.text, b) && 0 == a.priority
        }, this) && this.mn >= a.Jn()
    }
    ;
    d.S6 = function() {
        return this.zd.code
    }
    ;
    d.WC = function(a) {
        for (var b = new vm, c = 0; c < a.length; c++) {
            var e = a.charAt(c);
            switch (e) {
            case ",":
                b.append("%2C");
                break;
            case "|":
                b.append("%7C");
                break;
            case "%":
                b.append("%25");
                break;
            default:
                b.append(e)
            }
        }
        return b.toString()
    }
    ;
    d.kW = function(a, b) {
        var c = "";
        switch (this.zd.dC) {
        case "ja-Hira":
        case "ja":
            c = ",||t:1"
        }
        var e = new vm;
        this.Es && (e.append("|"),
        e.append(this.WC(this.Es)),
        e.append(","));
        E(this.text, function(a, b) {
            e.append(this.WC(a));
            b != this.text.length - 1 && e.append(",")
        }, this);
        e.append(c);
        c = {
            text: e.toString(),
            itc: this.zd.code,
            num: this.fn,
            cp: "0",
            cs: "1",
            ie: "utf-8",
            oe: "utf-8",
            app: "jsapi"
        };
        a.eU && (c.sct = a.eU);
        ub(c, b);
        var f = this.DB ? {
            feedback: Ja(this.DB, function(a) {
                return a.toJSON()
            })
        } : null;
        return new qm("/request",c,f)
    }
    ;
    d.E7 = function(a) {
        var b = "";
        0 <= a && a < this.text.length && (b = this.text[a]);
        a = new wm(b,this.zd,this.Ws,this.zs);
        a.WB(this.fn);
        a.mC(this.mn);
        return a
    }
    ;
    function xm(a) {
        this.sZ = a
    }
    xm.prototype.iZ = function(a, b) {
        var c = new wm(a,b);
        c.WB(15);
        c = c.kW({}, {});
        c.Pc.app = "youtubetv";
        return ki("//inputtools.google.com" + c.url, c.Pc)
    }
    ;
    xm.prototype.hX = function(a, b, c) {
        this.sZ.jsonp(this.iZ(a, b), null, c, null, "cb")
    }
    ;
    xm.inject = ["ytHttp"];
    function ym(a, b) {
        this.qP = a;
        this.rP = b
    }
    ym.prototype.load = function(a, b) {
        var c = b || p
          , e = new U;
        this.qP.load({
            query: a.playlistId
        }, w(function(b) {
            e.A.push(b.A.ba());
            this.rP.load({
                query: a.videoId
            }, w(function(a) {
                e.A.push(a.A.ba());
                c(e)
            }, this))
        }, this), na(c, e))
    }
    ;
    ym.inject = ["playlistService", "relatedVideosService"];
    for (var zm = "\u1100 \u1101 \u1100\u1109 \u1102 \u1102\u110c \u1102\u1112 \u1103 \u1105 \u1105\u1100 \u1105\u1106 \u1105\u1107 \u1105\u1109 \u1105\u1110 \u1105\u1111 \u1105\u1112 \u1106 \u1107 \u1107\u1109 \u1109 \u110a \u110b \u110c \u110e \u110f \u1110 \u1111 \u1112 \u1100\u1105".split(" "), Am = {
        "\u1104": "\u1104",
        "\u1108": "\u1108",
        "\u110d": "\u110d"
    }, Bm = 0; Bm < zm.length; ++Bm)
        Am[zm[Bm]] = String.fromCharCode(4520 + Bm);
    var Cm = {
        "\u1169\u1161": "\u116a",
        "\u1169\u1162": "\u116b",
        "\u1169\u1175": "\u116c",
        "\u116e\u1165": "\u116f",
        "\u116e\u1166": "\u1170",
        "\u116e\u1175": "\u1171",
        "\u1173\u1175": "\u1174"
    }
      , Dm = /[\u11a8-\u11c3]/g
      , Em = RegExp("\u1169\u1161|\u1169\u1162|\u1169\u1175|\u116e\u1165|\u116e\u1166|\u116e\u1175|\u1173\u1175", "g")
      , Fm = /[\uac00-\ud7af]/g
      , Gm = /([\u1100-\u1112][\u1161-\u1175][\u11a7-\u11c3]?)/g
      , Hm = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112][\u1161-\u1175])", "g")
      , Im = RegExp("([\u1161-\u1175])(\u1100\u1109|\u1102\u110c|\u1102\u1112|\u1105\u1100|\u1105\u1106|\u1105\u1107|\u1105\u1109|\u1105\u1110|\u1105\u1111|\u1105\u1112|\u1107\u1109)(([^\u1161-\u1175]|$))", "g")
      , Jm = RegExp("([\u1161-\u1175])([\u1100-\u1112])([\u1100-\u1112]([^\u1161-\u1175]|$))", "g")
      , Km = RegExp("([\u1161-\u1175])([\u1100-\u1112])(([^\u1100-\u1112\u1161-\u1175]|$))", "g");
    function Lm(a) {
        a = a.charCodeAt(0) - 44032;
        var b = 4449 + a % 588 / 28
          , c = 4519 + a % 28;
        return String.fromCharCode(4352 + a / 588) + String.fromCharCode(b) + (4519 == c ? "" : String.fromCharCode(c))
    }
    function Mm(a) {
        return a.replace(Dm, function(a) {
            return zm[a.charCodeAt(0) - 4519 - 1]
        })
    }
    function Nm(a) {
        return a.replace(Em, function(a) {
            return Cm[a]
        })
    }
    function Om(a) {
        return a.replace(Fm, Lm)
    }
    function Pm(a) {
        var b = a.charCodeAt(0) - 4352
          , c = a.charCodeAt(1) - 4449;
        a = 3 <= a.length ? a.charCodeAt(2) - 4519 : 0;
        return String.fromCharCode(28 * (21 * b + c) + a + 44032)
    }
    function Qm(a) {
        return a.replace(Gm, Pm)
    }
    function Rm(a, b, c, e) {
        return b + Am[c] + e
    }
    function Sm(a) {
        return Nm(Mm(a)).replace(Hm, Rm).replace(Hm, Rm).replace(Im, Rm).replace(Jm, Rm).replace(Km, Rm)
    }
    ;function Ij() {
        this.St = new Image
    }
    Ij.prototype.ED = function(a, b, c) {
        Id(a, "background-image", "");
        this.Yh(a, b, c)
    }
    ;
    Ij.prototype.Yh = function(a, b, c) {
        b && !c || Id(a, "background-image", "");
        c && Ya(a, c, !0);
        this.St.onload = function() {
            c && Ya(a, c, !1);
            Id(a, "background-image", "url(" + this.src + ")")
        }
        ;
        this.St.src = "";
        this.St.src = b
    }
    ;
    function Tm(a, b, c) {
        this.name = "tile";
        S.call(this, a, b, c);
        this.className = "tile";
        this.b("keyup", w(this.IM, this))
    }
    z(Tm, S);
    Tm.prototype.pa = function() {
        this.element.addClass(this.className)
    }
    ;
    Tm.prototype.IM = function(a) {
        13 === a.keyCode && (M(a),
        this.data && (this.isActive || a.ng && ("mouseup" === a.ng.type || "touchend" === a.ng.type)) && (this.l("play-sound", "cross-enter"),
        this.l(this.data.fp, {
            data: this.data
        })))
    }
    ;
    Tm.$inject = ["$scope", "$element", "$attrs"];
    function Um(a, b, c, e) {
        Tm.call(this, a, b, c);
        this.$N = e;
        this.Eo = "actiontile";
        this.className = "action-tile"
    }
    z(Um, Tm);
    Um.prototype.setData = function(a) {
        var b = this.data != a;
        Um.h.setData.call(this, a);
        b && this.pa()
    }
    ;
    Um.prototype.pa = function() {
        this.M(this.o, !!this.data);
        if (this.data) {
            var a = this.bz(this.data.cd, this.o, this.$N, {
                model: this.data
            });
            Va(this.o, this.className);
            Wa(a.o, this.className)
        }
    }
    ;
    Um.$inject = ["$scope", "$element", "$attrs", "injector"];
    function Vm(a, b, c, e, f, g, k) {
        this.name = "advertisementCallout";
        R.call(this, a, b, c);
        this.A_ = e;
        this.Mo = f;
        this.$H = g;
        this.MH = this.k(".time-left");
        this.LH = this.k(".remaining_duration");
        this.$u = angular.element(this.k(".thumbnail"));
        this.Bk = "";
        this.NH = k;
        this.av = new Ij;
        this.sp = !1;
        this.Ip = p;
        this.Mo.b("isPlayingAd:changed", w(this.QI, this))
    }
    z(Vm, R);
    Vm.prototype.QI = function(a) {
        a ? this.Ip = this.$H.b("timeLeft:changed", w(this.cK, this)) : (this.M(this.element[0], !1),
        this.sp = !1,
        this.Ip(),
        this.Ip = p,
        this.Bk = "");
        this.av.Yh(this.$u[0], this.Bk)
    }
    ;
    Vm.prototype.cK = function(a) {
        !this.sp && this.Mo.isPlayingAd && 0 < a && (this.M(this.element[0], !0),
        this.sp = !0);
        this.L(this.MH, String(a));
        this.L(this.LH, this.NH.fq(a))
    }
    ;
    Vm.prototype.setData = function(a) {
        Vm.h.setData.call(this, a);
        a && (this.Bk = a.imageUrl,
        this.Mo.isPlayingAd && this.av.Yh(this.$u[0], this.Bk))
    }
    ;
    Vm.$inject = "$scope $element $attrs $interpolate playerFacade progressModel locale".split(" ");
    function Wm(a, b, c, e, f, g, k, l, n, q, s, r, G, Z, ka, ca, za, rd, qd, Bg, qa, lb, zl, A, Al, Bl, Cl, Dl, El, Gl, L, ra, mb, nb, Hl, Ce, De, Ee) {
        this.name = "application";
        R.call(this, a, b, c);
        this.Xt = ka;
        this.ak = Z;
        this.kb = s;
        this.j_ = e;
        this.Wt = f;
        this.U = g;
        this.j = k;
        this.co = l;
        this.ka = qa;
        this.nh = lb;
        this.uu = zl;
        this.watchModel = za;
        this.lh = n;
        this.N = q;
        this.bb = "";
        this.pF = ca;
        this.wu = r;
        this.dk = G;
        this.zF = rd;
        this.Cu = qd;
        this.Df = Bg;
        this.AF = A;
        this.yF = Al;
        this.mu = Bl;
        this.CF = Cl;
        this.l_ = Dl;
        this.ph = El;
        this.Zt = Gl;
        this.g_ = L;
        this.EF = ra;
        this.gc = mb;
        this.BF = nb;
        this.Hb = Hl;
        this.iF = Ce;
        this.hF = De;
        this.bu = Ee;
        this.yu = new Ij;
        this.legendTemplatePath = Q.g + "/legend.html";
        this.io = this.GF();
        this.k_ = this.i_ = null;
        this.h_ = 0;
        this.lu = !1;
        this.searchQuery = this.zu = "";
        this.xF = this.k("#spinner-container");
        this.xu = -1;
        this.mh = null;
        this.JF()
    }
    z(Wm, R);
    d = Wm.prototype;
    d.JF = function() {
        this.lU();
        this.nh.load();
        var a = this.co[0].getElementById("loader");
        pc(a);
        this.gU();
        this.yg();
        this.Cd()
    }
    ;
    d.eH = function() {
        var a = this.ka.Nx;
        if (!a || this.ka.qp)
            this.ka.load(w(function() {
                this.uh();
                a || this.j.requestAnimationFrame(w(function() {
                    this.zF.Je("start_browse", "b_rn")
                }, this))
            }, this)),
            this.ka.Nx = !0,
            this.ka.qp = !1
    }
    ;
    d.GF = function() {
        return {
            browse: {
                search: {
                    down: this.Pf,
                    up: this.ck,
                    enter: this.Pf,
                    esc: this.Ud
                },
                none: {
                    esc: this.kk
                }
            },
            watch: {
                browse: {
                    esc: this.mR
                },
                search: {
                    down: this.Pf,
                    up: this.ck,
                    enter: this.Pf,
                    esc: this.lR
                },
                title: {
                    down: this.qn,
                    esc: this.Ud,
                    enter: this.vc,
                    fastforward: this.vc,
                    rewind: this.vc
                },
                transport: {
                    up: this.iR,
                    down: this.qn,
                    esc: this.Ud
                },
                "post-play": {
                    esc: this.bR
                },
                none: {
                    up: this.vc,
                    down: this.qn,
                    esc: this.cR,
                    enter: this.vc,
                    pause: this.vc,
                    fastforward: this.vc,
                    rewind: this.vc,
                    mousemove: this.vc
                }
            },
            dialog: {
                none: {
                    esc: this.qn
                }
            }
        }
    }
    ;
    d.lU = function() {
        "loading" == this.co[0].readyState ? this.N.fc ? this.j.document.addEventListener("readystatechange", w(this.Io, this), !1) : this.co.ready(w(this.Io, this)) : this.Df.setTimeout(w(this.Io, this), 1);
        this.aa(this.Hb, "spinnerShowing:changed", w(this.WF, this));
        this.aa(this.Hb, "state:changed", w(this.mG, this));
        this.aa(this.Hb, "isPlayingAd:changed", w(this.Cd, this));
        this.Iu("$routeChangeSuccess", w(this.gG, this));
        this.b("keydown", w(this.hG, this));
        this.b("keyup", w(this.iG, this));
        this.b("mousemove", this.hF(2, w(this.kG, this)));
        this.b("loaded", w(this.eG, this));
        this.b("row-changed", w(this.dG, this));
        this.b("item-changed", w(this.Hu, this));
        this.b("toggle-loading", w(this.fG, this));
        this.b("row-loaded", w(this.pG, this));
        this.b("next-video", w(function() {
            this.Kf()
        }, this));
        this.b("previous-video", w(this.VF, this));
        this.b("request-playlist-playback", w(this.oG, this));
        this.b("request-device-retention", w(this.YF, this));
        this.b("request-search", w(this.aG, this));
        this.b("request-clear-searches", w(this.XF, this));
        this.b("request-playback-authorization", w(this.ZF, this));
        this.b("request-player-error", w(this.$F, this));
        this.b("request-toggle-video-info", w(this.cG, this));
        this.b("request-toggle-sounds", w(this.bG, this));
        this.b("focus-search", w(this.ck, this));
        this.b("exit-application", w(this.kk, this));
        this.aa(this.gc, "dialog:changed", w(this.RF, this));
        this.aa(this.gc, "login:complete", w(this.Mu, this));
        this.aa(this.gc, "logout:complete", w(this.SF, this));
        this.aa(this.gc, "logout:confirmed", w(this.TF, this));
        this.aa(this.gc, "paidScope:changed", w(this.UF, this));
        this.aa(this.lh, "state:changed", w(this.jG, this));
        this.aa(this.ak, "pairing:changed", w(this.lG, this));
        this.aa(this.iF, "request-playback", w(this.nG, this))
    }
    ;
    d.Io = function() {
        this.kb.state() || (0 < this.j.location.href.indexOf("pairingCode=") ? this.Gh() : this.Se())
    }
    ;
    d.mG = function(a) {
        switch (a) {
        case 1:
            this.sX();
            break;
        case 0:
            this.lX(),
            this.yg()
        }
    }
    ;
    d.WF = function(a) {
        this.Ea() && this.ID(a)
    }
    ;
    d.Ux = function() {
        return this.vb() ? this.nh : this.Ea() ? this.watchModel : this.ka
    }
    ;
    d.fG = function(a) {
        this.Ea() || this.ID(!!a.detail)
    }
    ;
    d.ID = function(a) {
        this.M(this.xF, a);
        this.children.watch.cT(a)
    }
    ;
    d.sX = function() {
        this.uk() ? this.Wu() : (this.U(w(function() {
            var a = this.AF.duration;
            0 < a && (a = Math.min(a / 4, 10),
            this.Hb.Ri("add-to-history", a, w(this.AQ, this)))
        }, this), 500, !1),
        this.Hb.Ri("first-progress", 0.01, w(this.CQ, this), 2))
    }
    ;
    d.AQ = function() {
        this.watchModel.uP();
        !this.lu && 0 < this.pF.H() && (this.ka.sP(this.watchModel.ar()),
        this.lu = !0)
    }
    ;
    d.CQ = function() {
        this.LW();
        this.jc(!1)
    }
    ;
    d.eG = function(a) {
        a = a.detail;
        var b = this.nh.Vd()[0];
        b.model = a ? a.clone() : new U;
        b.model.Ta = "icon-search";
        b.Oa(0);
        this.vb() && this.l("active-item-changed", this.nh.Vd()[0].Ae());
        this.Df.setTimeout(w(this.mc, this), 0)
    }
    ;
    d.pG = function(a) {
        (this.Rh() || this.vb()) && this.l("active-item-changed", a.detail.Ae())
    }
    ;
    d.Z8 = function(a) {
        return "UU" === a.Ka
    }
    ;
    d.MP = function(a) {
        this.Df.clearTimeout(this.xu);
        this.xu = this.Df.setTimeout(w(function() {
            this.CF.ab(a, w(this.gv, this))
        }, this), 500)
    }
    ;
    d.dG = function(a) {
        var b = this.Ux().Vd()[a.detail.rowIndex];
        if (this.N.cu && this.uk() && b) {
            var c = b.model.serviceQuery;
            b.service.OA && c ? this.MP(c) : (this.mh = null,
            this.yg())
        }
        this.Hu(a)
    }
    ;
    d.Hu = function(a) {
        if (this.Rh() || this.vb()) {
            var b = a.detail.rowIndex;
            a = a.detail.Tu;
            (b = this.Ux().Vd()[b].$(a)) && this.l("active-item-changed", b)
        }
    }
    ;
    d.cc = function(a) {
        var b = this.ld || "none";
        this.io[this.bb] && this.io[this.bb][b] && ("esc" === a && this.l("play-sound", "cross-back"),
        b = this.io[this.bb][b][a]) && (b.call(this, a),
        this.mc())
    }
    ;
    d.ck = function() {
        this.activeChildName = "search";
        this.Cd();
        this.P(this.children.search)
    }
    ;
    d.Pf = function() {
        this.activeChildName = "browse";
        this.Cd();
        this.N.usePaidScope && this.bu.get("needs_rental_auth_dialog") && this.lh.WN() && this.l("request_paid_scope_dialog")
    }
    ;
    d.UF = function(a) {
        this.bu.Ra("needs_rental_auth_dialog", !1);
        a ? this.jc(!1) : this.lh.ef()
    }
    ;
    d.dH = function() {
        this.activeChildName = "watch";
        this.Cd()
    }
    ;
    d.cR = function() {
        this.N.isChromelessContext ? (this.l("mdxClearVideo"),
        this.Gh()) : this.N.isPlayOnlyContext ? this.kk() : (this.l("mdxClearVideo"),
        this.Ud())
    }
    ;
    d.bR = function() {
        this.Se();
        this.IX()
    }
    ;
    d.Ud = function() {
        var a = this.wu.SU();
        a && a.url ? this.kb.url(a.url) : this.Se()
    }
    ;
    d.ql = function() {
        this.kb.mode("search")
    }
    ;
    d.Se = function(a) {
        this.kb.state("browse", {});
        this.kb.mode(a)
    }
    ;
    d.qn = function() {
        this.N.isPlayOnlyContext || this.N.isChromelessContext || this.kb.mode("browse")
    }
    ;
    d.vc = function(a) {
        if ("mousemove" !== a || this.kb.rm("transport"))
            this.U.cancel(this.hQ),
            this.hQ = this.U(w(function() {
                this.Ea() && this.kb.mode("transport")
            }, this), 250, !1)
    }
    ;
    d.ez = function() {
        this.U.cancel(this.DQ);
        this.DQ = this.U(w(function() {
            this.Ea() && this.kb.mode("title")
        }, this), 250, !1)
    }
    ;
    d.XS = function() {
        this.kb.mode("post-play");
        this.EF.RV()
    }
    ;
    d.lX = function() {
        !this.Ea() || this.Rh() || this.vb() || this.NS()
    }
    ;
    d.NS = function() {
        this.N.isPlayOnlyContext || this.N.isChromelessContext ? this.Kf(!0) : this.XS()
    }
    ;
    d.lR = function() {
        0 === this.Hb.state ? this.Kf() : this.Ud()
    }
    ;
    d.mR = function(a) {
        0 === this.Hb.state ? this.Kf(a) : this.vc()
    }
    ;
    d.VF = function() {
        var a = this.watchModel.nP();
        a && (this.yg(),
        this.aq(a),
        this.ez(),
        this.l("active-item-changed", this.watchModel.currentVideo))
    }
    ;
    d.Kf = function(a) {
        (a = this.watchModel.next(a)) ? (this.yg(),
        this.aq(a),
        this.ez(),
        this.l("active-item-changed", this.watchModel.currentVideo)) : this.N.isChromelessContext ? this.Gh() : this.N.isPlayOnlyContext ? this.kk() : this.Se()
    }
    ;
    d.iR = function() {
        this.kb.mode(null)
    }
    ;
    d.hG = function(a) {
        switch (a.keyCode) {
        case 40:
            this.cc("down");
            break;
        case 38:
            this.cc("up");
            break;
        case 37:
            this.cc("left");
            break;
        case 39:
            this.cc("right");
            break;
        case 75:
        case 19:
        case 32:
            this.cc("pause");
            break;
        case 228:
        case 76:
            this.cc("fastforward");
            break;
        case 227:
        case 74:
            this.cc("rewind");
            break;
        case 8:
        case 27:
            this.NA() || M(a)
        }
    }
    ;
    d.iG = function(a) {
        switch (a.keyCode) {
        case 170:
        case 83:
            this.vb() || this.ql();
            break;
        case 172:
        case 71:
            this.Se();
            break;
        case 8:
        case 27:
            this.NA() || M(a);
            this.cc("esc");
            break;
        case 13:
            M(a);
            this.tP(a.target) || this.cc("enter");
            break;
        case 178:
            this.Ea() && this.Se()
        }
        this.Hb.vP()
    }
    ;
    d.tP = function(a) {
        return !(!a || !Ic(a, w(function(a) {
            a = (a.className || "").split(" ");
            return F(a, "more") ? (this.cc("down"),
            !0) : F(a, "back") || F(a, "reversed-back") ? (this.cc("esc"),
            !0) : F(a, "search") ? (this.ql(),
            !0) : F(a, "home") ? (this.Se(),
            !0) : F(a, "delete") ? (this.uu.vm(),
            !0) : !1
        }, this)))
    }
    ;
    d.kG = function() {
        this.cc("mousemove")
    }
    ;
    d.nn = function() {
        this.ka.VA()
    }
    ;
    d.aq = function(a) {
        this.kb.state("watch", a ? {
            v: a
        } : {});
        this.uh()
    }
    ;
    d.gG = function(a, b) {
        if (this.Wt.current && (b = b || this.Wt.current) && b.$$route && b.$$route.state) {
            var c = this.ld
              , e = this.bb;
            this.ld = b.params.mode;
            this.bb = b.$$route.state();
            b.scope = this.children[this.bb].scope;
            if (this.kb.state()) {
                this.Co();
                var f = !0;
                this.vb() ? this.ck() : this.Wo() ? this.N.isChromelessContext && this.uk() ? this.Gh() : this.activeChildName = "dialog" : this.Rh() ? this.N.isChromelessContext ? this.Gh() : (this.eH(),
                this.Pf()) : (this.dH(),
                this.Fh() || (f = !1));
                if (this.uk())
                    this.Wu(),
                    this.vb() || (this.searchQuery = "",
                    this.watchModel.Pu());
                else if (this.Ea())
                    if ("browse" !== this.ld && ("watch" !== e || "browse" === c))
                        this.watchModel.currentVideo && this.l("active-item-changed", this.watchModel.currentVideo);
                    else if ("browse" === this.ld) {
                        var g = this.watchModel.Ae();
                        g && this.l("active-item-changed", g)
                    }
                this.fH(e, c) && this.uh();
                this.Cd();
                e != this.bb && this.gv(this.mh);
                this.M(this.k("#browse"), f)
            }
        }
    }
    ;
    d.fH = function(a, b) {
        return a !== this.bb || this.wV(b) || this.Fh()
    }
    ;
    d.wV = function(a) {
        return this.vb() || "search" === a
    }
    ;
    d.Co = function() {
        var a = this.N.initPlaylistId
          , b = this.N.initSearchQuery
          , c = this.N.initTime
          , e = this.N.initVideoId;
        this.N.initErrorCode ? this.gc.jx("[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]") : e && this.Ea() ? this.watchModel.currentVideo || (this.N.initReversePairingCode ? this.ak.Mw(e, c) : this.Xt.ab(e, w(function(a) {
            if (a && a.A && a.A.$(0)) {
                var b = a.A.$(0)
                  , e = Pi(this.Xt, b.title, b.channel.imageUrl);
                a.title = b.title;
                e.model = a;
                e.model.Ta = b.channel.imageUrl;
                this.tl(b, e, c)
            } else
                this.Ud(),
                this.gc.jx("[[There was an error retrieving the requested video.|Error displayed when a video cannot be loaded.]]")
        }, this))) : a && this.Ea() ? this.watchModel.currentVideo || this.dk.ab(a, w(function(a) {
            var b = Pi(this.dk, a.title, a.serviceQuery);
            b.model = a;
            this.tl(b.$(0), b, c)
        }, this)) : b && this.vb() && (this.searchQuery = decodeURI(b),
        this.ql())
    }
    ;
    d.Wu = function() {
        this.Hb.wl();
        this.watchModel.uy()
    }
    ;
    d.Cd = function() {
        var a = [this.N.hu, (this.bb || "no") + "-state", (this.ld || "no") + "-mode", this.activeChildName + "-active", this.Hb.isPlayingAd ? "playing-ad" : ""].join(" ")
          , b = this.element[0];
        b.className != a && (b.className = a)
    }
    ;
    d.gU = function() {
        this.zu = "bg" + Math.floor(56 * Math.random() + 1) + ".jpg"
    }
    ;
    d.yg = function(a) {
        if (this.N.supportsBackgrounds) {
            a = a || this.mh && this.mh.JA || Q.$o + "/" + this.zu;
            var b = this.element.css("background-image");
            (!b || 0 > b.indexOf(a)) && this.yu.Yh(this.element[0], a)
        }
    }
    ;
    d.LW = function() {
        this.element.css("background-image") && this.yu.Yh(this.element[0], "")
    }
    ;
    d.gD = function() {
        this.ka.WU();
        this.uu.query = ""
    }
    ;
    d.gv = function(a) {
        this.mh = a;
        this.yg()
    }
    ;
    d.IX = function() {
        this.wu.kC(this.kb.zl())
    }
    ;
    d.NA = function() {
        return this.Rh() && !this.vb() && !this.Wo() && !this.Ea()
    }
    ;
    d.Rh = function() {
        return "browse" === this.ld || "browse" === this.bb
    }
    ;
    d.vb = function() {
        return "search" === this.ld
    }
    ;
    d.Ea = function() {
        return "watch" === this.bb
    }
    ;
    d.Fh = function() {
        return "post-play" == this.ld && this.Ea()
    }
    ;
    d.jw = function() {
        return "call-to-cast" == this.bb
    }
    ;
    d.Wo = function() {
        return "dialog" === this.activeChildName
    }
    ;
    d.uk = function() {
        return "browse" === this.bb
    }
    ;
    d.jc = function(a, b) {
        a && b ? this.gc.Aa(b) : this.Wo() && this.gc.Jw()
    }
    ;
    d.RF = function(a) {
        this.activeChildName = a ? "dialog" : this.bb;
        this.Cd();
        this.mc();
        this.M(this.k("#legend"), !a)
    }
    ;
    d.Gh = function() {
        this.bb = this.activeChildName = "call-to-cast";
        this.Cd()
    }
    ;
    d.ZF = function(a) {
        a = a.detail;
        this.N.Ja ? this.gc.ni("", Q.g + "/dialogs/eureka_authorization_info.html", "status-dialog") : (this.jc(!0, new dk(w(this.fK, this),a,w(this.eK, this))),
        this.N.loopRows && this.Rw())
    }
    ;
    d.fK = function() {
        this.Mu();
        this.Hb.Xi();
        this.Hb.XB()
    }
    ;
    d.eK = function() {
        this.jc(!1);
        this.Ud()
    }
    ;
    d.Mu = function() {
        this.jc(!1);
        this.lh.Kb(w(function(a) {
            this.ak.cy("default", a)
        }, this));
        var a;
        this.ka.Lf() && (a = this.ka.Lf().model.title);
        this.ka.load(w(function() {
            var b = this.ph.lL("subscription");
            this.ka.qp = b.some(function(a) {
                return !this.ph.get("subscription", a).id
            }, this);
            b = a ? this.ka.iL(a) : -1;
            this.ka.Ua = -1 != b ? b : this.ka.H() - 1;
            this.uh()
        }, this));
        this.Ea() && this.Co()
    }
    ;
    d.SF = function() {
        this.jc(!1);
        this.lh.ef();
        this.gD()
    }
    ;
    d.TF = function() {
        this.Ea() && this.Co()
    }
    ;
    d.oG = function(a) {
        var b = a.detail.data;
        this.ka.lw(a.detail.pd);
        this.dk.ab(b.id, w(function(a) {
            var b = Pi(this.dk, a.title, a.serviceQuery);
            b.model = a;
            this.tl(b.$(0), b)
        }, this))
    }
    ;
    d.nG = function(a) {
        this.tl(a.detail.data, a.detail.pd, a.detail.startTime, a.detail.Ye)
    }
    ;
    d.tl = function(a, b, c, e) {
        if (!b || "remoteQueueService" != b.service.id && "playlistService" != b.service.id)
            this.vb() ? (this.ka.lw(b),
            this.N.Jb(Qd) || (b = Wi(this.Zt, "[[Now Playing|Title for currently playing playlists.]]", Q.$o + "/icon-related.png", a.videoId),
            b.kp(a))) : this.Fh() && (b = "RV" === a.Ka ? Si(this.Zt, "[[Related Videos|Title for playlist that shows videos related to the one currently is playing.]]", Q.$o + "/icon-related.png", a.videoId) : this.watchModel.Mk());
        this.jc(!1);
        b = this.watchModel.vh(a, b, c, e);
        this.l("mdxPlaylistChange", b);
        this.aq(a.videoId);
        this.vc()
    }
    ;
    d.uh = function() {
        this.vb() ? this.cn("browse").setData(this.nh) : this.Fh() ? (this.mu.load(),
        this.cn("browse").setData(this.mu),
        this.Pf()) : this.Ea() ? this.cn("browse").setData(this.watchModel) : this.cn("browse").setData(this.ka)
    }
    ;
    d.YF = function() {
        this.Cu.fW(!this.Cu.Qi);
        this.nn()
    }
    ;
    d.aG = function(a) {
        (a = a.detail) && (this.searchQuery = a.data ? a.data.title : "");
        this.ql()
    }
    ;
    d.XF = function() {
        this.gD()
    }
    ;
    d.cG = function() {
        this.N.isVideoInfoVisible = !this.N.isVideoInfoVisible;
        this.nn()
    }
    ;
    d.bG = function() {
        this.BF.Wa();
        this.nn()
    }
    ;
    d.lG = function() {
        this.nn()
    }
    ;
    d.$F = function(a) {
        var b = a.detail;
        this.Ea() && (this.N.Ja ? this.gc.ni("", Q.g + "/dialogs/eureka_player_error_info.html", "status-dialog") : this.jc(!0, new hk(b,w(this.oJ, this),w(this.nJ, this))));
        M(a);
        this.N.loopRows && this.Rw()
    }
    ;
    d.oJ = function() {
        this.jc(!1);
        this.Kf()
    }
    ;
    d.nJ = function() {
        this.jc(!1);
        this.Ud()
    }
    ;
    d.Rw = function() {
        this.Df.clearTimeout(this.MU);
        this.MU = this.Df.setTimeout(w(function() {
            this.jc(!1);
            this.Kf(!0)
        }, this), 5E3)
    }
    ;
    d.jG = function(a, b) {
        !a && b && (this.ak.cy("", ""),
        this.ka.load(w(function() {
            this.ka.Ua = this.ka.H() - 1;
            this.uh()
        }, this)),
        this.ph.Mm("subscription"),
        this.ph.Mm("video_like_value"),
        this.ph.Mm("channel"))
    }
    ;
    d.kk = function() {
        this.N.Gf && this.j.NetCastBack ? this.j.NetCastBack() : this.N.Be ? this.yF.kM() : this.N.sh && this.j.close && this.j.close()
    }
    ;
    Wm.$inject = "$scope $element $attrs $rootScope $route $timeout $window $document authService environmentModel locationService navigationService playlistService remoteService videoPlaybackInfoService watchHistoryModel watchModel csiService privateDataService timeService browseModel searchModel searchQueryModel progressModel samsungService postPlayModel brandingService subscribeService cacheService relatedVideosService bambooService postPlayReportingService dialogService soundService playerFacade rootDispatcher rateLimit localStorage".split(" ");
    function Xm(a, b, c) {
        if (c.ytBackgroundImage) {
            var e = new Image;
            a.$watch(c.ytBackgroundImage, function(a) {
                b.css("background-image", "");
                a && (e.onload = function() {
                    e.src = "";
                    b.css("background-image", "url(" + a + ")")
                }
                ,
                e.src = a)
            })
        }
    }
    Xm.$inject = ["$scope", "$element", "$attrs", "angularHelper"];
    function Ym(a, b, c, e, f, g) {
        S.call(this, a, b, c);
        this.Vb = e;
        this.tr = f;
        this.PV = g
    }
    z(Ym, S);
    d = Ym.prototype;
    d.B = function() {
        S.prototype.B.call(this);
        var a = this.Vb.zl();
        this.fs() && this.tr.eP(a);
        this.gs() && this.Uy(a)
    }
    ;
    d.J = function() {
        S.prototype.J.call(this);
        this.Ib()
    }
    ;
    d.fs = function() {
        return !0
    }
    ;
    d.gs = function() {
        return !0
    }
    ;
    d.Uy = function(a) {
        a = a || this.Vb.zl();
        this.tr.kC(a)
    }
    ;
    d.Ib = function(a) {
        this.PV.message = a || ""
    }
    ;
    function Zm(a, b, c, e, f, g, k, l, n, q, s, r, G) {
        this.name = "browse";
        Ym.call(this, a, b, c, g, k, l);
        this.Fu = f;
        this.U = n;
        this.j = e;
        this.Mv = q;
        this.so = s;
        this.FF = r;
        this.Pv = G;
        this.v_ = "nav-arrows-enabled";
        this.Ua = 0;
        this.vo = !0;
        this.so.supportsPointer && this.b("keyup", w(this.HH, this));
        this.b("button-click", w(this.GH, this));
        this.b("mousemove", this.Pv(2, w(this.IH, this)));
        this.b("request-playback", w(this.JH, this));
        this.b("request-playlist-playback", w(this.KH, this));
        this.Qv(100, this.FH);
        this.Qv(8, this.EH);
        this.element[0].addEventListener("scroll", w(function() {
            this.element[0].scrollTop = 0;
            this.element[0].scrollLeft = 0
        }, this))
    }
    z(Zm, Ym);
    d = Zm.prototype;
    d.B = function() {
        "browse" != this.Vb.state() || this.Vb.mode() || this.tr.iO();
        Ym.prototype.B.call(this);
        this.P(this.Ih());
        this.data && this.setData(this.data)
    }
    ;
    d.fs = function() {
        return "browse" == this.Vb.state()
    }
    ;
    d.gs = function() {
        return "search" != this.Vb.mode()
    }
    ;
    d.setData = function(a) {
        this.data = a;
        (a = this.pr()) && a.setData(this.data.Vd());
        this.zz(this.data.Ua);
        (a = this.Ih()) && a.setData(this.Ob())
    }
    ;
    d.M9 = function(a) {
        this.data && (this.data.Ua = a)
    }
    ;
    d.HH = function(a) {
        switch (a.keyCode) {
        case 38:
        case 40:
        case 37:
        case 39:
            M(a);
            this.FC();
            break;
        case 13:
            this.aZ(a.target)
        }
    }
    ;
    d.GH = function(a) {
        for (var b = 0, c = this.data.rows.length, e; b < c; b++)
            if (e = this.data.rows[b],
            e.equals(a.detail)) {
                a = b - this.data.Ua;
                0 != a && this.Uj(a);
                break
            }
    }
    ;
    d.IH = function() {
        this.fE()
    }
    ;
    d.Qv = function(a, b) {
        this.b("keydown", this.Pv(a, w(b, this)))
    }
    ;
    d.EH = function(a) {
        switch (a.keyCode) {
        case 37:
            this.Tn(-1);
            break;
        case 39:
            this.Tn(1)
        }
    }
    ;
    d.Tn = function(a) {
        var b = this.Ob()
          , c = this.ep()
          , e = c + a
          , f = b.H() - 1;
        0 <= e && e <= f ? (this.l("play-sound", "same-toggle"),
        this.NM(c + a, a),
        b.Rl(a) && this.Dx()) : 0 > e && this.l("play-sound", "same-heavy")
    }
    ;
    d.FH = function(a) {
        switch (a.keyCode) {
        case 38:
            this.Uj(-1);
            break;
        case 40:
            this.Uj(1)
        }
    }
    ;
    d.Uj = function(a) {
        this.data && (this.Av(!0),
        this.l("play-sound", "same-light"),
        this.zz(this.data.Ua, a))
    }
    ;
    d.zz = function(a, b) {
        if (this.data) {
            b = b || 0;
            var c = this.data.H()
              , e = (a + b) % c || 0;
            0 > e && (e += c);
            this.pr().Oa(e);
            e != this.data.Ua && (this.Ih().element.toggleClass("disabled", !0),
            "watch" === this.Vb.state() && 0 === this.data.Ua || this.XN(),
            this.md(this.Ih()),
            this.data.Ua = e);
            this.Dx()
        }
    }
    ;
    d.F$ = function() {
        var a = 100 / this.data.Vd().length;
        this.Mv.aR = a;
        this.Mv.percentageScrolled = a * this.data.Ua
    }
    ;
    d.u7 = function(a) {
        a = this.data.Ua + a;
        var b = this.data.length;
        0 > a ? a += b : a >= b && (a %= b);
        return this.data.Vd()[a]
    }
    ;
    d.K8 = function(a) {
        return this.isActive && this.Ob() === a
    }
    ;
    d.Ob = function() {
        return this.data ? this.data.Lf() : null
    }
    ;
    d.ep = function() {
        var a = this.Ob();
        return a ? a.activeIndex : 0
    }
    ;
    d.W8 = function(a) {
        return !!this.data.Vd()[a].H()
    }
    ;
    d.fE = function() {
        Va(this.element[0], "nav-arrows-enabled");
        this.U.cancel(this.KC);
        this.KC = this.U(w(function() {
            this.FC()
        }, this), 3E3, !1)
    }
    ;
    d.FC = function() {
        this.U.cancel(this.KC);
        Wa(this.element[0], "nav-arrows-enabled")
    }
    ;
    d.aZ = function(a) {
        this.fE();
        switch (a.id) {
        case "up-arrow":
            this.Uj(-1);
            break;
        case "down-arrow":
            this.Uj(1);
            break;
        case "left-arrow":
            this.Tn(-2);
            break;
        case "right-arrow":
            this.Tn(2)
        }
    }
    ;
    d.XN = function() {
        var a = this.Ob();
        a && (a.clear(),
        this.focus())
    }
    ;
    d.NM = function(a, b) {
        var c = this.Ob();
        c.Oa(a);
        c.Rq(b);
        this.l("item-changed", {
            rowIndex: this.data.Ua,
            Tu: this.ep()
        })
    }
    ;
    d.Dx = function() {
        this.U.cancel(this.yR);
        this.yR = this.U(w(function() {
            this.vR()
        }, this), this.so.fu, !1);
        this.isActive && this.Ib()
    }
    ;
    d.vR = function() {
        var a = this.Ob();
        a && (this.isActive && this.l("toggle-loading", !0),
        a.load(w(this.lP, this), this.vo))
    }
    ;
    d.lP = function() {
        var a = this.Ob();
        this.l("row-loaded", a);
        if (0 == a.H() && this.isActive) {
            var b = a.model.serviceQuery;
            !this.so.supportsPaidContent && b ? (a = w(this.rH, this, b),
            this.FF.ab(b, a, null, a)) : this.Ib(a.$a || "[[No videos are available|The message shown when a row has no videos to show.]]")
        } else
            0 < a.H() && this.Ib();
        this.Av(!1);
        b = this.Ih();
        b.setData(this.Ob());
        this.l("toggle-loading", !1);
        this.l("row-changed", {
            rowIndex: this.data.Ua,
            Tu: this.ep()
        });
        b.element.toggleClass("disabled", !1);
        this.isActive && this.P(this.children["browse-row"]);
        this.vo && (this.vo = !1,
        this.j.requestAnimationFrame(w(function() {
            this.Fu.Je("start_browse", "fr_rn");
            this.Fu.report("start_browse")
        }, this)))
    }
    ;
    d.Av = function(a) {
        this.pr().element.toggleClass("enabled", a)
    }
    ;
    d.JH = function(a) {
        if (a.target != this.o) {
            M(a);
            var b = a.detail.pd || this.Ob();
            b && this.l("request-playback", {
                data: a.detail.data,
                pd: b,
                startTime: a.detail.startTime,
                Ye: a.detail.Ye
            })
        }
    }
    ;
    d.KH = function(a) {
        a.target !== this.o && (M(a),
        this.l("request-playlist-playback", {
            data: a.detail.data,
            pd: this.Ob()
        }))
    }
    ;
    d.Ih = function() {
        return this.children["browse-row"]
    }
    ;
    d.pr = function() {
        return this.children["super-scroller"]
    }
    ;
    d.rH = function(a, b) {
        var c = this.Ob();
        a === (c && c.model && c.model.serviceQuery) && (b && b.Pb ? this.Ib("[[Paid channels are not available on this device.|Message that is displayed for a video channel on a device that doesn't support paid subscriptions.]]") : this.Ib("[[No videos are available|The message shown when a row has no videos to show.]]"))
    }
    ;
    Zm.$inject = "$scope $element $attrs $window csiService locationService navigationService messageModel $timeout scrollbarModel environmentModel channelPaidInfoService rateLimit".split(" ");
    function Y(a, b, c, e, f) {
        this.name = this.name || "list";
        S.call(this, a, b, c);
        this.WG = e;
        this.activeIndex = 0;
        this.yx = c.orientation || "vertical";
        this.Oh = this.scope.$eval(c.displayCount);
        this.nx = c.loop ? !!this.scope.$eval(c.loop) : !1;
        this.pJ = c.paging ? !!this.scope.$eval(c.paging) : !0;
        this.la = null;
        this.HJ = f;
        c.activeIndex && this.scope.$watch(c.activeIndex, w(this.Oa, this));
        this.b("keyup", w(this.IJ, this));
        c.repeatRate ? this.b("keydown", this.HJ(this.scope.$eval(c.repeatRate), w(this.Pl, this))) : this.b("keydown", w(this.Pl, this));
        this.scope.list = this
    }
    z(Y, S);
    d = Y.prototype;
    d.B = function() {
        Y.h.B.call(this);
        this.Ii(this.activeIndex, !1)
    }
    ;
    d.xb = function(a) {
        a && this.data && a.length === this.data.length ? this.data = a : (this.data = a,
        this.$e(),
        this.data && this.Nc())
    }
    ;
    d.setData = function(a) {
        Y.h.setData.call(this, a);
        this.Nc() || (this.Ml(),
        this.isActive && this.$e())
    }
    ;
    d.Ml = function() {
        for (var a = this.X.length, b = 0; b < a; ++b)
            this.X[b].setData(this.$(b))
    }
    ;
    d.Nc = function() {
        if (!Y.h.Nc.call(this))
            return !1;
        for (var a = "", b = Math.min(this.Oh ? this.Oh : this.data.length, this.data.length), c = 0; c < b; ++c)
            a += this.Kq(this.data[c].cd, c);
        this.la && (this.la.$destroy(),
        this.eg());
        this.la = this.scope.$new();
        this.element.html(a);
        this.WG(this.element.contents())(this.la);
        this.mc();
        this.isActive && this.$e();
        return !0
    }
    ;
    d.Kq = function(a) {
        a = a || this.Qc.itemRenderer;
        return "<" + a + ' class="item"></' + a + ">"
    }
    ;
    d.sa = function(a) {
        var b = a.detail;
        Y.h.sa.call(this, a);
        a = this.X.length - 1;
        b.setData(this.$(a));
        b.scope.Yo = a;
        this.isActive && a == this.activeIndex && this.P(b)
    }
    ;
    d.Oa = function(a) {
        a != this.activeIndex && this.yE(a, !1)
    }
    ;
    d.xE = function() {}
    ;
    d.eE = function() {}
    ;
    d.IJ = function(a) {
        switch (a.keyCode) {
        case 37:
        case 39:
            this.wc() || M(a)
        }
        this.eE(a)
    }
    ;
    d.Pl = function(a) {
        var b = this.$X(a.keyCode);
        0 !== b && this.yE(this.activeIndex + b, !0, a);
        this.xE(a)
    }
    ;
    d.$X = function(a) {
        if (this.wc())
            switch (a) {
            case 40:
                return 1;
            case 38:
                return -1
            }
        else
            switch (a) {
            case 37:
                return -1;
            case 39:
                return 1
            }
        if (this.pJ)
            switch (a) {
            case 176:
                return 8;
            case 177:
                return -8
            }
        return 0
    }
    ;
    d.YE = function() {
        return !0
    }
    ;
    d.qX = function(a) {
        return this.YE(a) && this.activeIndex !== a
    }
    ;
    d.$e = function() {
        this.P(this.Jc(this.activeIndex))
    }
    ;
    d.Ii = function(a, b) {
        this.activeIndex = a;
        this.P(this.Jc(this.activeIndex));
        b && this.l("list-item-index-change", this.activeIndex)
    }
    ;
    d.yE = function(a, b, c) {
        var e = this.data ? this.data.length : 0
          , f = this.nx ? (a + e) % e : bb(a, 0, e - 1);
        if (f != this.activeIndex) {
            a = a < this.activeIndex ? -1 : 1;
            for (var e = this.nx ? e : 0 > a ? f + 1 : e - f, g = 0; g < e; ++g) {
                var k = f + g * a;
                if (this.qX(k)) {
                    c && M(c);
                    this.Ii(k, b);
                    break
                }
            }
        }
    }
    ;
    d.$ = function(a) {
        return this.data ? this.data[a] : null
    }
    ;
    d.Wa = function(a) {
        this.X[this.activeIndex].Wa(a)
    }
    ;
    d.wc = function() {
        return "vertical" === this.yx
    }
    ;
    Y.$inject = ["$scope", "$element", "$attrs", "$compile", "rateLimit"];
    function $m(a, b, c, e, f) {
        Y.call(this, a, b, c, e, f);
        this.Oh = 3;
        this.yx = "horizontal";
        this.TB = ""
    }
    z($m, Y);
    d = $m.prototype;
    d.B = function() {
        $m.h.B.call(this);
        this.P(this.X[0])
    }
    ;
    d.J = function() {
        $m.h.J.call(this);
        this.md(this.X[0])
    }
    ;
    d.$j = function() {
        var a = this.scope.$eval(this.Qc.itemRenderer);
        return this.TB !== a && 0 < this.data.length || this.X.length < this.data.length && this.X.length < Math.min(this.data.length, this.Oh) ? (this.TB = a,
        !0) : !1
    }
    ;
    d.Kq = function(a) {
        a = this.scope.$eval(this.Qc.itemRenderer);
        return "<yt:" + a + '  class="item"></yt:' + a + ">"
    }
    ;
    d.Pl = function() {}
    ;
    d.sa = function(a) {
        $m.h.sa.call(this, a);
        this.isActive && this.P(this.Jc(0))
    }
    ;
    d.Oa = function(a) {
        this.activeIndex = a;
        this.Ml();
        this.isActive && this.P(this.X[0])
    }
    ;
    d.$ = function(a) {
        return this.data ? this.data[this.activeIndex + a] : null
    }
    ;
    $m.$inject = ["$scope", "$element", "$attrs", "$compile", "rateLimit"];
    function an(a, b, c) {
        this.name = "browseRow";
        R.call(this, a, b, c)
    }
    z(an, R);
    d = an.prototype;
    d.B = function() {
        an.h.B.call(this);
        this.P(this.children["tile-row"])
    }
    ;
    d.J = function() {
        an.h.J.call(this);
        this.md(this.children["tile-row"])
    }
    ;
    d.Md = function() {
        this.$h && this.$h();
        an.h.Md.call(this)
    }
    ;
    d.setData = function(a) {
        a && a !== this.data && (this.data = a,
        this.Md(),
        this.aa(a, "model:changed", w(this.XI, this)),
        this.aa(a, "activeIndex:changed", w(this.Iw, this)),
        this.$h = a.model.A.b("items:changed", w(this.Al, this)),
        this.Iw(a.activeIndex),
        this.Al())
    }
    ;
    d.Iw = function(a) {
        var b = this.children["tile-row"];
        b && b.Oa(a)
    }
    ;
    d.XI = function(a) {
        this.$h && this.$h();
        this.$h = a.A.b("items:changed", w(this.Al, this));
        this.Al()
    }
    ;
    d.Al = function() {
        var a = this.data.model.A.ba()
          , b = this.children["tile-row"];
        b && (b.setData(a),
        this.isActive && b.B())
    }
    ;
    an.$inject = ["$scope", "$element", "$attrs"];
    function bn(a, b, c, e) {
        this.name = "button";
        S.call(this, a, b, c);
        this.OK = e;
        this.b("keyup", w(this.yM, this))
    }
    z(bn, S);
    bn.prototype.xb = function(a) {
        a && (this.data = new sk(a.text,a.Pc.type,a.Pc),
        this.L(this.element[0], this.OK(a.text || "")(this.scope)))
    }
    ;
    bn.prototype.setData = function(a) {
        bn.h.setData.call(this, a);
        this.xb(a)
    }
    ;
    bn.prototype.yM = function(a) {
        13 == a.keyCode && (this.l("button-click", this.data.Pc),
        M(a))
    }
    ;
    bn.$inject = ["$scope", "$element", "$attrs", "$interpolate"];
    function cn(a, b, c, e) {
        this.name = "call-to-cast";
        this.vx = e;
        S.call(this, a, b, c)
    }
    z(cn, S);
    cn.prototype.B = function() {
        cn.h.B.call(this);
        this.wx = this.vx.setTimeout(w(this.fL, this), 3E5)
    }
    ;
    cn.prototype.J = function() {
        cn.h.J.call(this);
        this.wx && this.vx.clearTimeout(this.wx)
    }
    ;
    cn.prototype.fL = function() {
        this.l("exit-application")
    }
    ;
    cn.$inject = ["$scope", "$element", "$attrs", "timeService"];
    function dn(a, b, c, e, f) {
        this.name = "carousel";
        S.call(this, a, b, c);
        this.activeIndex = 0;
        this.Tl = f;
        this.yH = e;
        this.F_ = 7;
        this.G_ = 4;
        this.H_ = 2;
        this.Wx = !1;
        this.la = null;
        this.E_ = "200ms";
        this.Uh = "";
        this.b("keydown", w(function() {
            this.Wx = this.Tl.supportsAnimation
        }, this))
    }
    z(dn, S);
    d = dn.prototype;
    d.B = function() {
        dn.h.B.call(this);
        var a = this.fl();
        this.P(this.X[a])
    }
    ;
    d.J = function() {
        dn.h.J.call(this);
        this.md(this.X[this.fl()])
    }
    ;
    d.setData = function(a) {
        dn.h.setData.call(this, a);
        this.Nc() || this.lz()
    }
    ;
    d.$j = function() {
        var a = this.scope.$eval(this.Qc.itemRenderer);
        if (this.Uh === a)
            return !1;
        this.Uh = a;
        return !0
    }
    ;
    d.Nc = function() {
        if (!dn.h.Nc.call(this))
            return !1;
        for (var a = 0, b = ""; 7 > a; )
            b += "<yt:" + this.Uh + ' class="item"></yt:' + this.Uh + ">",
            a++;
        this.la && (this.la.$destroy(),
        this.eg());
        this.la = this.scope.$new();
        this.element.html(b);
        this.yH(this.element.contents())(this.la);
        this.mc();
        return !0
    }
    ;
    d.iy = function(a, b) {
        a.setData(this.TY(b));
        this.bD(a, b)
    }
    ;
    d.lz = function() {
        for (var a = 0, b = this.X.length; a < b; ++a)
            this.iy(this.X[a], a)
    }
    ;
    d.p9 = function() {
        for (var a = 0, b = this.X.length; a < b; ++a)
            this.bD(this.X[a], a)
    }
    ;
    d.bD = function(a, b) {
        var c = this.fl();
        this.TS(a, b);
        this.VS(a, b);
        c === b && this.isActive && this.P(a)
    }
    ;
    d.sa = function(a) {
        var b = a.detail;
        b.Eo === this.Uh && (dn.h.sa.call(this, a),
        this.iy(b, this.X.length - 1))
    }
    ;
    d.Oa = function(a) {
        this.activeIndex = a;
        this.lz()
    }
    ;
    d.TY = function(a) {
        var b = Math.max(0, this.activeIndex - 2);
        a = this.Dt(a) - this.bE();
        return this.data ? this.data[b + a] : null
    }
    ;
    d.TS = function(a, b) {
        a.element.toggleClass("obscured", 0 > this.Dt(b))
    }
    ;
    d.VS = function(a, b) {
        b = this.Dt(b);
        var c = this.Tl.supportsTranslateZ ? "translateZ(0)" : ""
          , e = this.Tl.cssPrefix + "-transform"
          , c = "translateX(" + xe(104 * b, 1) + ") " + c
          , f = this.Tl.cssPrefix + "-transition"
          , g = this.wX(b) ? e + " 200ms" : "none 0s";
        a.element.css(e, c);
        a.element.css(f, g)
    }
    ;
    d.bE = function() {
        return Math.max(-this.activeIndex, -2)
    }
    ;
    d.cE = function() {
        return Math.min(this.activeIndex, 2)
    }
    ;
    d.wX = function(a) {
        return this.Wx && -2 != a && a != 6 - this.cE()
    }
    ;
    d.Dt = function(a) {
        a -= this.fl();
        a += this.cE();
        a %= 7;
        0 > a && (a += 7);
        return a += this.bE()
    }
    ;
    d.fl = function() {
        return this.activeIndex % 7
    }
    ;
    dn.$inject = ["$scope", "$element", "$attrs", "$compile", "environmentModel"];
    function $(a, b, c, e, f, g, k) {
        this.name = "keyboard";
        S.call(this, a, b, c);
        this.mK = e;
        this.dJ = f;
        this.Yk = g;
        this.ol = [];
        this.vl = 0;
        this.ma = new wk;
        this.b("keyup", w(this.oK, this));
        this.b("keydown", k(20, w(this.nK, this)));
        this.b("mouseover", w(this.pK, this));
        this.b("letter-tile-key-press", w(this.Ok, this));
        this.b("grid-point-change", w(this.lK, this));
        this.kK()
    }
    z($, S);
    d = $.prototype;
    d.B = function() {
        $.h.B.call(this);
        this.Bw();
        this.Jd();
        this.bd()
    }
    ;
    d.J = function() {
        this.ob();
        $.h.J.call(this);
        this.sL()
    }
    ;
    d.sa = function(a) {
        $.h.sa.call(this, a);
        "keyboard-grid" == a.detail.id && this.cb().setData(this.Xe())
    }
    ;
    d.uc = function() {
        $.h.uc.call(this);
        this.td("getLetters", this.Xe);
        this.td("isLetterSuggestVisible", this.yl);
        this.td("getKeyRepeatRate", this.aM)
    }
    ;
    d.Jd = function() {
        var a = this.cb();
        a.isActive || this.P(a)
    }
    ;
    d.sL = function() {
        this.md(this.cb())
    }
    ;
    d.rA = function() {
        this.P(this.mf())
    }
    ;
    d.cb = function() {
        return this.children["keyboard-grid"]
    }
    ;
    d.mf = function() {
        return this.children["letter-suggest"]
    }
    ;
    d.hf = function() {
        return []
    }
    ;
    d.aM = function() {
        return this.mK.isLowPerformingSearch ? 4 : 20
    }
    ;
    d.cm = function() {
        return this.cb().isActive
    }
    ;
    d.am = function() {
        return this.mf().isActive
    }
    ;
    d.yl = function() {
        var a = this.hf();
        return !!(this.QX() && a && a.length)
    }
    ;
    d.QX = function() {
        return this.mf().element.hasClass("enabled")
    }
    ;
    d.Dy = function() {
        return "en" == this.QE()
    }
    ;
    d.QE = function() {
        return this.ol[this.vl].language
    }
    ;
    d.Xe = function() {
        return this.ol[this.vl].kS
    }
    ;
    d.Ui = function() {
        return this.Xe()[this.ma.top][this.ma.left]
    }
    ;
    d.oK = function(a) {
        switch (a.keyCode) {
        case 83:
            this.ob();
            break;
        case 8:
        case 27:
            this.yl() && (M(a),
            this.ob())
        }
    }
    ;
    d.nK = function(a) {
        switch (a.keyCode) {
        case 37:
            this.BU() && M(a);
            break;
        case 39:
            this.CU() && M(a);
            break;
        case 40:
            this.Fn() && M(a);
            break;
        case 38:
            this.Gn() && M(a);
            break;
        case 172:
        case 71:
            this.ob()
        }
    }
    ;
    d.pK = function(a) {
        var b = angular.element(a.target).scope();
        b.tile && (a = b.Yo,
        b = b.$parent.$parent.Yo,
        fa(a) && fa(b) && (this.l("focus-search"),
        this.ma.left = a,
        this.ma.top = b,
        a = this.cb(),
        this.Jd(),
        a.Wa(!0),
        a.lg(this.ma),
        this.bd()))
    }
    ;
    d.Ok = function(a) {
        var b = a.detail;
        this.ob();
        this.$p(a, b) || (b != this.Ui() && this.sT(b),
        this.bd())
    }
    ;
    d.lK = function(a) {
        a = a.detail;
        this.ma.top = a.top;
        this.ma.left = a.left;
        this.isActive && this.bd()
    }
    ;
    d.ZE = function(a) {
        if (this.am()) {
            var b = this.cb();
            b.Wa(!0);
            this.ma.left += a;
            b.lg(this.ma);
            (a = this.hf()) && a.length && b.Wa(!1);
            this.bd();
            return !0
        }
        return !1
    }
    ;
    d.$p = function(a, b) {
        if (this.wP(b)) {
            var c = this.cb();
            this.vl = ++this.vl % this.ol.length;
            c.setData(this.Xe());
            c.lg(this.ma);
            this.Bw();
            this.bd();
            M(a);
            return !0
        }
        return !1
    }
    ;
    d.ob = function() {
        this.Tr(0);
        this.cb().Wa(!0);
        this.Jd();
        this.gA(!1)
    }
    ;
    d.Tr = function(a) {
        this.mf().Oa(a)
    }
    ;
    d.Fn = function() {
        if (this.cm() && this.yl())
            return this.Tr(0),
            this.rA(),
            this.cb().Wa(!1),
            !0;
        this.ob();
        return !1
    }
    ;
    d.BU = function() {
        return this.ZE(-1)
    }
    ;
    d.CU = function() {
        return this.ZE(1)
    }
    ;
    d.Gn = function() {
        if (this.am())
            return this.ob(),
            !0;
        this.ob();
        return !1
    }
    ;
    d.jz = function() {
        this.gA(!0);
        var a = this.cb().$(this.ma);
        a && (a = a.element[0].getBoundingClientRect(),
        this.mf().element.css("left", a.left + "px").css("top", a.bottom + "px"))
    }
    ;
    d.bd = function() {
        var a = this.hf();
        a && a.length ? this.jz(this.Ui()) : this.ob();
        this.mf().setData(a || [])
    }
    ;
    d.sT = function(a) {
        E(this.Xe(), function(b, c) {
            if (u(b)) {
                var e = Ga(b, a);
                0 <= e && (this.ma.left = e,
                this.ma.top = c,
                e = this.cb(),
                e.lg(this.ma),
                e.Wa(!0),
                this.Jd())
            }
        }, this)
    }
    ;
    d.kK = function() {
        var a = [], b, c;
        switch (this.dJ.Ma) {
        case "ru_RU":
        case "uk_UA":
            a.push("RU");
            break;
        case "ko_KR":
            a.push("KO");
            break;
        case "ja_JP":
            a.push("JP")
        }
        a.push("EN");
        for (b = 0; b < a.length; ++b)
            c = this.tT(a[b]),
            c[c.length - 1].push({
                jj: "delete-icon"
            }),
            1 < a.length && c[c.length - 1].push({
                jj: "language-toggle-icon"
            }),
            this.ol.push({
                language: a[b],
                kS: c
            })
    }
    ;
    d.tT = function(a) {
        var b;
        b = "" + ge[a];
        "JP" !== a && (b += "1234567890_");
        a = b.split("\n");
        return Ja(a, function(a) {
            return a.split("")
        })
    }
    ;
    d.wP = function(a) {
        return !(!a || "language-toggle-icon" !== a.jj)
    }
    ;
    d.gA = function(a) {
        this.mf().element.toggleClass("enabled", a)
    }
    ;
    d.Bw = function() {
        var a = "lang-" + this.QE().toLowerCase();
        this.element.hasClass(a) || (a = this.element.attr("class").replace(ce, "") + " " + a,
        this.element.attr("class", a))
    }
    ;
    $.$inject = "$scope $element $attrs environmentModel locale searchQueryModel rateLimit".split(" ");
    function en(a, b, c, e, f, g, k, l) {
        $.call(this, a, b, c, e, f, g, l);
        this.cg = "keyboard-grid";
        this.NI = k;
        this.element.addClass("transliterable");
        this.b("transliteration-selected", w(function() {
            this.Jd();
            this.bd()
        }, this))
    }
    z(en, $);
    en.prototype.xz = function() {
        return this.children.transliteration.isActive
    }
    ;
    en.prototype.B = function() {
        $.prototype.B.call(this);
        this.children["keyboard-grid"].Wa(!0);
        "keyboard-grid" === this.cg ? this.Jd() : "transliteration" === this.cg && this.P(this.children.transliteration);
        this.activeChildName = this.cg
    }
    ;
    en.prototype.Fn = function() {
        if (this.xz())
            return this.Jd(),
            this.bd(),
            !0;
        if (this.cm() && this.yl())
            return this.Tr(0),
            this.rA(),
            this.children["keyboard-grid"].Wa(!1),
            !0;
        this.cg = "keyboard-grid";
        this.ob();
        return !1
    }
    ;
    en.prototype.Gn = function() {
        if (this.cm() && this.NI.UO())
            return this.ob(),
            this.P(this.children.transliteration),
            !0;
        if (this.am())
            return this.Jd(),
            this.children["keyboard-grid"].Wa(!0),
            !0;
        this.xz() ? this.cg = "transliteration" : (this.cg = "keyboard-grid",
        this.ob());
        return !1
    }
    ;
    en.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel".split(" ");
    function fn(a, b, c, e, f, g, k, l) {
        en.call(this, a, b, c, e, f, g, k, l);
        this.langCodePair = tm("en", "zh-Hans")
    }
    z(fn, en);
    fn.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel rateLimit".split(" ");
    function gn(a, b, c, e) {
        this.name = "closedCaptions";
        S.call(this, a, b, c);
        this.kd = e;
        this.options = [];
        this.Kv = this.k("#captions-not-available");
        this.Jv = this.k("#captions-loading");
        this.ma = new wk;
        this.rowCount = 6;
        this.b("button-click", w(this.cI, this));
        this.scope.$watch(w(function() {
            return this.kd.subtitlesModuleGeneration
        }, this), w(function(a, b) {
            a !== b && this.aI()
        }, this));
        this.kd.Ov() && this.kd.bI(0.5) ? this.M(this.Kv, !1) : (this.M(this.Jv, !1),
        this.isActive = !0)
    }
    z(gn, S);
    d = gn.prototype;
    d.VN = function() {
        var a = this.cb();
        a.isActive || this.P(a)
    }
    ;
    d.cb = function() {
        return this.children["cc-languages"]
    }
    ;
    d.aI = function() {
        this.options = [];
        var a = this.kd.ly()
          , b = this.kd.lq()
          , c = !pb(b) && b || this.kd.subtitlesTrack || {};
        a && a.length && (a = Ja(a, function(a) {
            return new sk(a.displayName,"captions-language",{
                track: a
            })
        }),
        a.unshift(new sk("[[Turn Captions Off|Button which is displayed on the subtitles settings dialog. Turns off on screen subtitles.]]","captions-off")),
        E(a, function(a, b) {
            0 == b % 3 && this.options.push([]);
            this.options[this.options.length - 1].push(a);
            a.Pc && a.Pc.track && c && a.Pc.track.id === c.id && (this.ma = new wk(Math.floor(b / 3),b % 3))
        }, this));
        this.M(this.Jv, !1);
        this.M(this.Kv, !this.options.length);
        this.VN();
        this.cb().setData(this.options);
        this.cb().lg(this.ma)
    }
    ;
    d.cI = function(a) {
        var b = a.detail;
        switch (b.type) {
        case "captions-off":
            this.kd.Cm();
            break;
        case "captions-language":
            b.track && this.kd.Hr(b.track)
        }
        M(a);
        this.FV()
    }
    ;
    d.FV = function() {
        this.l("request-close-dialog");
        this.kd.Vf()
    }
    ;
    gn.$inject = ["$scope", "$element", "$attrs", "playerFacade"];
    function hn(a, b, c, e, f) {
        this.name = "debug";
        R.call(this, a, b, c);
        this.j = e;
        this.xp = f;
        this.xp.b("items:changed", w(this.pa, this));
        this.xp.H() && this.pa()
    }
    z(hn, R);
    hn.prototype.pa = function() {
        Va(this.j.document.body, "debug");
        this.element[0].textContent = this.xp.ba().join("");
        this.element[0].innerHTML = this.element[0].innerHTML.replace(/\n/g, "<br />")
    }
    ;
    hn.$inject = ["$scope", "$element", "$attrs", "$window", "debugModel"];
    function jn(a, b, c, e) {
        S.call(this, a, b, c);
        this.U = e;
        this.ms = 0;
        this.Oo = 5E3;
        this.gS = w(this.Ys, this)
    }
    z(jn, S);
    jn.prototype.B = function() {
        S.prototype.B.call(this);
        this.oc()
    }
    ;
    jn.prototype.J = function() {
        this.U.cancel(this.ms);
        S.prototype.J.call(this)
    }
    ;
    jn.prototype.oc = function() {
        this.U.cancel(this.ms);
        this.ms = this.U(this.gS, this.Oo)
    }
    ;
    jn.prototype.Ys = function() {}
    ;
    function kn(a, b, c, e) {
        this.name = "feedIcon";
        R.call(this, a, b, c);
        this.yI = e;
        this.zI = this.k("h2");
        this.qx = this.k(".icon");
        this.b("keyup", w(this.zJ, this))
    }
    z(kn, R);
    d = kn.prototype;
    d.setData = function(a) {
        kn.h.setData.call(this, a);
        this.kl && this.kl();
        this.data && this.data.model && !this.data.model.title && (this.kl = this.data.b("model:changed", w(this.pa, this)));
        this.pa()
    }
    ;
    d.bq = function() {
        this.kl && this.kl();
        kn.h.bq.call(this)
    }
    ;
    d.pa = function() {
        this.data && (this.L(this.zI, this.yI(this.data.model.title)(this.scope)),
        this.ZQ(this.data.model.Ta))
    }
    ;
    d.ZQ = function(a) {
        var b = ""
          , c = "icon";
        a && (sa(a, ".jpg") || sa(a, ".png") ? b = "url(" + a + ")" : c += " " + a);
        this.qx.className = c;
        this.qx.style.backgroundImage = b
    }
    ;
    d.zJ = function(a) {
        13 == a.keyCode && F(Ua(a.target), "icon") && (this.l("button-click", this.data),
        M(a))
    }
    ;
    kn.$inject = ["$scope", "$element", "$attrs", "$interpolate"];
    function ln(a, b, c) {
        this.name = "flag";
        S.call(this, a, b, c);
        this.activeItemIndex = this.activeIndex = 0;
        this.flagData = [[new sk("[[Sexual Content|GTGC4NgMTyty-lg7bvKq5g]]","flag-normal"), new sk("[[Violent or Repulsive Content|qhVb-TasMDalcVlh0-bVNQ]]","flag-normal"), new sk("[[Hateful or Abusive Content|VlY1sRyrA4TwmawjC86xFw]]","flag-normal"), new sk("[[Harmful Dangerous Acts|rCIBQRDFyfIBja9x497u6A]]","flag-normal")], [new sk("[[Child Abuse|IngFQG4SEoOLkyKZJEPR6g]]","flag-normal"), new sk("[[Spam|Pnw-OErhkCrqYT5klcLesw]]","flag-normal"), new sk("[[Infringes My Rights|GwQ2vMHBH9Ls3VHHIixT-Q]]","flag-rights")]];
        this.b("keyup", w(this.qM, this));
        this.b("list-item-index-change", w(this.rM, this));
        this.b("button-click", w(this.pM, this))
    }
    z(ln, S);
    d = ln.prototype;
    d.sa = function(a) {
        var b = a.detail;
        ln.h.sa.call(this, a);
        b.setData(this.flagData[this.X.length - 1])
    }
    ;
    d.uc = function() {
        ln.h.uc.call(this);
        this.td("activeIndexEquals", this.BM)
    }
    ;
    d.qM = function(a) {
        switch (a.keyCode) {
        case 37:
            this.activeIndex = Math.max(this.activeIndex - 1, 0);
            this.mc(this.scope);
            M(a);
            break;
        case 39:
            this.activeIndex = Math.min(++this.activeIndex, this.flagData.length - 1);
            this.mc(this.scope);
            M(a);
            break;
        case 8:
        case 13:
        case 27:
            break;
        default:
            M(a)
        }
    }
    ;
    d.pM = function(a) {
        switch (a.detail.type) {
        case "flag-normal":
            this.l("request-flag-video");
            M(a);
            break;
        case "flag-rights":
            this.l("request-flag-claim"),
            M(a)
        }
    }
    ;
    d.rM = function(a) {
        this.activeItemIndex = a.detail
    }
    ;
    d.BM = function(a) {
        return this.activeIndex === a
    }
    ;
    ln.$inject = ["$scope", "$element", "$attrs"];
    function mn(a, b, c, e, f) {
        this.name = "grid";
        S.call(this, a, b, c);
        this.ZG = e;
        this.Kx = f;
        this.wa = new wk;
        this.cd = c.itemRenderer || "";
        this.DK = c.loop || !1;
        this.Vx = Number(this.scope.$eval(c.rowCount));
        this.Qx = c.repeatRate;
        this.b("keydown", w(this.MK, this));
        this.b("list-item-index-change", w(this.NK, this))
    }
    z(mn, S);
    d = mn.prototype;
    d.B = function() {
        mn.h.B.call(this);
        this.P(this.Jc(this.wa.top))
    }
    ;
    d.J = function() {
        mn.h.J.call(this);
        this.md(this.Jc(this.wa.top))
    }
    ;
    d.setData = function(a) {
        mn.h.setData.call(this, a);
        this.Nc();
        this.bm(0, 0)
    }
    ;
    d.Nc = function() {
        if (!mn.h.Nc.call(this))
            return !1;
        for (var a = "", b = 0, c = this.data.length; b < c; ++b)
            a += this.RK(b);
        this.zx() && (a += this.SK());
        this.la && (this.la.$destroy(),
        this.eg());
        this.la = this.scope.$new();
        this.element.html(a);
        this.ZG(this.element.contents())(this.la);
        this.vp();
        this.mc();
        return !0
    }
    ;
    d.uc = function() {
        mn.h.uc.call(this);
        this.td("getDataRow", this.CM)
    }
    ;
    d.lg = function(a) {
        a && this.wa != a && this.bm(a.top, a.left, !0)
    }
    ;
    d.RK = function(a) {
        a = ' class="grid-row" data="grid.getDataRow(' + a + ')" item-renderer="' + this.cd + '" loop="' + this.DK + '" orientation="horizontal"';
        this.Qx && (a += ' repeat-rate="' + this.Qx + '"');
        return "<yt:list " + a + "></yt:list>"
    }
    ;
    d.SK = function() {
        return '<yt:scrollbar class="grid-scrollbar"></yt:scrollbar>'
    }
    ;
    d.MK = function(a) {
        switch (a.keyCode) {
        case 40:
            this.$E(1) && M(a);
            break;
        case 38:
            this.$E(-1) && M(a)
        }
    }
    ;
    d.$E = function(a) {
        if (!t(this.Qc.consumeKeys) || this.scope.$eval(this.Qc.consumeKeys))
            if (a = this.wa.top + a,
            this.data[a])
                return this.bm(a, this.wa.left),
                !0;
        return !1
    }
    ;
    d.NK = function(a) {
        this.bm(this.wa.top, a.detail, !1, !0);
        M(a)
    }
    ;
    d.bm = function(a, b, c, e) {
        this.wa.top = a;
        this.wa.left = b;
        this.VO();
        e || this.ww();
        c || this.l("grid-point-change", this.wa);
        this.vp()
    }
    ;
    d.vp = function() {
        if (this.zx()) {
            var a = 100 / this.data.length;
            this.Kx.aR = a;
            this.Kx.percentageScrolled = this.wa.top * a
        }
    }
    ;
    d.sa = function(a) {
        mn.h.sa.call(this, a);
        a = a.detail;
        var b = this.X.length - 1;
        a.scope.Yo = b;
        this.isActive && b == this.wa.top && this.ww();
        a.element.hasClass("scrollbar") && this.vp()
    }
    ;
    d.ww = function() {
        var a = this.Jc(this.wa.top);
        a && (this.P(a),
        a.Oa(this.wa.left))
    }
    ;
    d.VO = function() {
        this.data && this.data.length && (this.wa.top = bb(this.wa.top, 0, this.data.length - 1),
        this.wa.left = bb(this.wa.left, 0, this.data[this.wa.top].length - 1))
    }
    ;
    d.CM = function(a) {
        return this.data ? this.data[a] : null
    }
    ;
    d.Wa = function(a) {
        var b = this.Jc(this.wa.top);
        b && (b = b.Jc(this.wa.left)) && b.Wa(a)
    }
    ;
    d.$ = function(a) {
        var b = this.Jc(a.top);
        return b && b.Jc(a.left)
    }
    ;
    d.zx = function() {
        return !!(this.Vx && this.data && this.data.length > this.Vx)
    }
    ;
    mn.$inject = ["$scope", "$element", "$attrs", "$compile", "scrollbarModel"];
    function nn(a, b, c) {
        this.name = "helpFeedback";
        R.call(this, a, b, c)
    }
    z(nn, R);
    nn.prototype.xb = function(a) {
        nn.h.xb.call(this, a);
        this.L(this.k(".base-url"), this.data.baseUrl);
        this.k(".qr").src = this.$I()
    }
    ;
    nn.prototype.$I = function() {
        return "http://chart.apis.google.com/chart?cht=qr&chs=350x350&chl=" + encodeURIComponent(this.data.qrCodeUrl || this.data.baseUrl)
    }
    ;
    nn.$inject = ["$scope", "$element", "$attrs"];
    function on(a, b, c, e, f, g, k, l) {
        en.call(this, a, b, c, e, f, g, k, l);
        this.langCodePair = tm("ja-Hira", "ja")
    }
    z(on, en);
    on.prototype.Ok = function(a) {
        var b = a.detail;
        if (!this.$p(a, b)) {
            if (this.jO(b)) {
                var c = this.Yk.query
                  , e = c.slice(-1);
                if (b = be[b][e])
                    c = c.slice(0, c.length - 1) + b,
                    this.Yk.Hc(c),
                    this.l("letter-tile-key-press");
                M(a)
            }
            this.hf() && this.jz(this.Ui())
        }
    }
    ;
    on.prototype.hf = function() {
        return Zd[this.Ui()] || []
    }
    ;
    on.prototype.jO = function(a) {
        return F(Yd, a)
    }
    ;
    on.$inject = "$scope $element $attrs environmentModel locale searchQueryModel transliterationModel rateLimit".split(" ");
    function pn(a, b, c, e, f, g, k) {
        $.call(this, a, b, c, e, f, g, k);
        this.QL = sb(ae);
        this.Yk.b("query:changed", w(this.jM, this))
    }
    z(pn, $);
    d = pn.prototype;
    d.jM = function(a) {
        a = Ja(a.split(""), function(a) {
            return ae[a] || a
        }).join("");
        a = Qm(Sm(Om(a.replace("\u001d", ""))));
        a = Ja(a.split(""), function(a) {
            return this.QL[a] || a
        }, this).join("");
        this.Yk.Hc(a)
    }
    ;
    d.Fn = function() {
        return this.am() && this.CD(1) || $.prototype.Fn.call(this)
    }
    ;
    d.Gn = function() {
        return this.cm() && this.CD(-1) || $.prototype.Gn.call(this)
    }
    ;
    d.CD = function(a) {
        return this.Xe() && this.Xe()[this.ma.top + a] ? (this.ob(),
        this.ma.top += a,
        this.children["keyboard-grid"].lg(this.ma),
        this.bd(),
        !0) : !1
    }
    ;
    d.hf = function() {
        return this.Dy() ? $.prototype.hf.call(this) : $d[this.Ui()] || []
    }
    ;
    d.Ok = function(a) {
        var b = a.detail;
        this.Dy() ? pn.h.Ok.call(this, a) : (this.ob(),
        this.$p(a, b))
    }
    ;
    pn.$inject = "$scope $element $attrs environmentModel locale searchQueryModel rateLimit".split(" ");
    function qn(a, b, c, e, f) {
        Y.call(this, a, b, c, e, f)
    }
    z(qn, Y);
    qn.prototype.$e = function() {
        if (!this.data || this.activeIndex >= this.data.length)
            this.activeIndex = bb(this.activeIndex, 0, this.data.length - 1);
        qn.h.$e.call(this)
    }
    ;
    qn.prototype.$j = function() {
        return this.data.length !== this.X.length
    }
    ;
    qn.$inject = ["$scope", "$element", "$attrs", "$compile", "rateLimit"];
    function rn(a, b, c) {
        this.name = "tile";
        S.call(this, a, b, c);
        this.B_ = "letter-tile";
        this.C_ = this.element[0].children[0];
        this.b("keydown", w(function(a) {
            13 == a.keyCode && this.l("letter-tile-key-press", this.data)
        }, this))
    }
    z(rn, S);
    d = rn.prototype;
    d.setData = function(a) {
        rn.h.setData.call(this, a);
        this.pa()
    }
    ;
    d.xb = function(a) {
        rn.h.xb.call(this, a);
        this.pa()
    }
    ;
    d.pa = function() {
        this.M(this.element[0], this.data);
        if (this.data) {
            var a, b = ["letter-tile"];
            this.data.jj ? (b.push(this.data.jj),
            a = "\u00a0") : a = this.data;
            this.L(this.element[0], a);
            this.EP(b)
        }
    }
    ;
    d.EP = function(a) {
        var b = this.element[0].className.split(" ");
        b.push.apply(b, a);
        Sa(b);
        this.element[0].className = b.join(" ")
    }
    ;
    d.Wa = function(a) {
        this.element.toggleClass("disabled", !a)
    }
    ;
    rn.$inject = ["$scope", "$element", "$attrs"];
    function sn(a, b, c, e, f) {
        this.name = "message";
        R.call(this, a, b, c);
        this.dL = e;
        this.data = f;
        this.Vy(this.data.message);
        this.data.b("message:changed", w(this.Vy, this))
    }
    z(sn, R);
    sn.prototype.Vy = function(a) {
        this.L(this.element[0], this.dL(a || "")(this.scope))
    }
    ;
    sn.$inject = ["$scope", "$element", "$attrs", "$interpolate", "messageModel"];
    function tn(a, b, c) {
        R.call(this, a, b, c);
        setInterval(w(this.YZ, this), 3E3)
    }
    z(tn, R);
    tn.prototype.YZ = function() {
        var a = (this.scope.$root.$perfLog || []).slice(-15);
        this.element[0].innerHTML = a.map(function(a) {
            return "<li>" + a + "</li>"
        }, this).join("")
    }
    ;
    tn.$inject = ["$scope", "$element", "$attrs"];
    function un(a, b, c, e, f, g, k, l) {
        this.name = "postPlayTile";
        Tm.call(this, a, b, c);
        this.className = "post-play-tile";
        this.QF = e;
        this.pk = f;
        this.wH = g;
        this.nv = k;
        this.mv = l;
        this.NF = this.k(".default-title");
        this.OF = this.k(".next-up-title");
        this.PF = this.k(".row-title");
        this.Du = this.k(".post-play-countdown");
        this.Ch = -1;
        this.Eo = "postplaytile";
        this.b("keydown", w(this.KI, this));
        this.b("request-playback", w(this.LI, this))
    }
    z(un, Tm);
    d = un.prototype;
    d.setData = function(a) {
        un.h.setData.call(this, a);
        var b = this.X[0];
        b && (b.setData(a),
        a && -1 == this.Ch && 0 < this.data.Nf && (this.Ch = this.pk.Ik(w(this.tK, this), 1E3),
        this.tp(!0)));
        this.pa()
    }
    ;
    d.sa = function(a) {
        un.h.sa.call(this, a);
        this.setData(this.data)
    }
    ;
    d.pa = function() {
        un.h.pa.call(this);
        this.M(this.element[0], this.data);
        this.data && (this.M(this.OF, this.data.fi),
        this.M(this.NF, !this.data.fi),
        this.data.fi && this.L(this.PF, this.QF(this.data.fi)(this.scope)),
        this.L(this.Du, this.data.Nf))
    }
    ;
    d.KI = function(a) {
        this.tp(!1);
        this.pk.Hi(this.Ch);
        this.pa();
        switch (a.keyCode) {
        case 8:
        case 27:
            this.mv.Py("back", this.nv.currentVideo.videoId)
        }
    }
    ;
    d.tK = function() {
        this.data ? (--this.data.Nf,
        this.L(this.Du, this.data.Nf),
        0 === this.data.Nf && (this.tp(!1),
        this.pk.Hi(this.Ch),
        this.l("request-playback", {
            data: this.data,
            Ye: !0
        }))) : this.pk.Hi(this.Ch)
    }
    ;
    d.tp = function(a) {
        this.element.toggleClass("countdown-active", a)
    }
    ;
    d.LI = function(a) {
        a = a.detail.data;
        var b;
        0 === a.Nf ? b = "timeout" : (b = Ga(this.wH.Lf().model.A.ba(), a),
        b = ze("play{n}", {
            n: b + 1
        }));
        this.mv.Py(b, this.nv.currentVideo.videoId, a.videoId)
    }
    ;
    un.$inject = "$scope $element $attrs $interpolate timeService postPlayModel watchModel postPlayReportingService".split(" ");
    function vn(a, b, c, e, f) {
        R.call(this, a, b, c);
        this.ii = e;
        this.Lp = f;
        this.Np = this.k(".player-seek-buffer");
        this.Op = this.k(".player-seek-active")
    }
    z(vn, R);
    d = vn.prototype;
    d.enable = function() {
        this.Ll(this.Np, this.ii.percentageLoaded);
        this.Ll(this.Op, this.ii.percentagePlayed);
        this.ox(this.Lp.isPlayingAd);
        this.zU()
    }
    ;
    d.disable = function() {
        this.Ax()
    }
    ;
    d.zU = function() {
        this.Ax();
        this.aa(this.Lp, "isPlayingAd:changed", w(this.ox, this));
        this.aa(this.ii, "percentageLoaded:changed", w(this.Ll, this, this.Np));
        this.aa(this.ii, "percentagePlayed:changed", w(this.Ll, this, this.Op));
        this.b("keyup", w(function(a) {
            this.DJ(a.ng.target) && this.EJ(a.ng)
        }, this))
    }
    ;
    d.Ax = function() {
        this.Md()
    }
    ;
    d.Ll = function(a, b) {
        a.style.width = xe(b)
    }
    ;
    d.ox = function(a) {
        this.Op.className = a ? "player-seek-ad" : "player-seek-active";
        this.Np.className = "player-seek-buffer"
    }
    ;
    d.DJ = function(a) {
        return "progress-bar" === a.id || "player-seek-buffer" === a.className || "player-seek-active" === a.className
    }
    ;
    d.EJ = function(a) {
        this.Lp.cq(this.ii.duration * (a.offsetX / this.element[0].offsetWidth), !0)
    }
    ;
    vn.$inject = ["$scope", "$element", "$attrs", "progressModel", "playerFacade"];
    function wn(a, b, c, e, f) {
        Y.call(this, a, b, c, e, f);
        this.z0 = 2;
        this.Oh = 12
    }
    z(wn, Y);
    wn.prototype.Pl = function() {}
    ;
    wn.prototype.$ = function(a) {
        a = a + this.activeIndex - 2;
        0 > a && (a += this.data.length);
        a = a % this.data.length;
        return this.data ? this.data[a] : null
    }
    ;
    wn.prototype.Ii = function(a, b) {
        this.activeIndex = a;
        b && this.l("list-item-index-change", this.activeIndex)
    }
    ;
    wn.prototype.Oa = function(a) {
        wn.h.Oa.call(this, a);
        this.Ml()
    }
    ;
    wn.$inject = ["$scope", "$element", "$attrs", "$compile", "rateLimit"];
    function xn(a, b, c, e) {
        this.name = "scrollpane";
        S.call(this, a, b, c);
        this.zM = e;
        this.b("keydown", w(this.AM, this))
    }
    z(xn, S);
    xn.prototype.AM = function(a) {
        switch (a.keyCode) {
        case 40:
            this.dF(1);
            break;
        case 38:
            this.dF(-1)
        }
    }
    ;
    xn.prototype.dF = function(a) {
        var b = this.element[0]
          , c = Math.min(b.scrollHeight / 100, 0.5 * b.offsetHeight);
        b.scrollTop += a * c;
        a = b.scrollHeight - b.offsetHeight;
        this.zM.percentageScrolled = 0 == a ? 0 : 100 * b.scrollTop / a
    }
    ;
    xn.$inject = ["$scope", "$element", "$attrs", "scrollbarModel"];
    function yn(a, b, c, e) {
        this.name = "scrollbar";
        R.call(this, a, b, c);
        this.hA = e;
        this.eA = this.k(".handle");
        this.aa(this.hA, "percentageScrolled:changed", w(this.IO, this))
    }
    z(yn, R);
    yn.prototype.IO = function() {
        this.uE || (this.uE = 0.01 * (this.element[0].offsetHeight - this.eA.offsetHeight));
        this.eA.style.top = Math.floor(this.uE * this.hA.percentageScrolled) + "px"
    }
    ;
    yn.$inject = ["$scope", "$element", "$attrs", "scrollbarModel"];
    function zn(a, b, c, e, f, g, k, l, n, q, s) {
        this.name = "search";
        Ym.call(this, a, b, c, e, f, g);
        this.Qd = k;
        this.LF = l;
        this.Fa = n;
        this.rF = s;
        this.sv = q;
        this.bv = this.gk = !1;
        this.Gc = this.k("#search-input");
        this.oo = this.Qd.supportsHardwareKeyboard || this.Qd.supportsNativeOsk;
        this.qF = this.k("#search-query");
        this.Nd = null;
        this.oh = this.rv("pairing", this.sv);
        this.oh.vu = !1;
        this.scope.$watch(c.query, w(function(a) {
            a && this.Fa.Hc(a)
        }, this));
        this.oo || this.Gc.setAttribute("disabled", "true");
        this.Qd.supportsSearchSuggestion ? (this.Nd = this.rv("suggestions", this.sv),
        this.Ju(this.Nd)) : this.M(this.k("#search-suggestions"), !1);
        this.Gc.addEventListener("keydown", w(this.hH, this), !0);
        this.Gc.addEventListener("keyup", w(this.iH, this), !0);
        this.Gc.addEventListener("input", w(this.gH, this), !0);
        this.b("letter-tile-key-press", w(function(a) {
            this.kH(a.detail)
        }, this));
        this.b("keydown", w(this.lH, this));
        this.b("keyup", w(this.mH, this));
        this.Fa.b("query:changed", w(this.nH, this));
        this.Fa.b("results:changed", w(this.oH, this));
        this.b("suggest", w(this.jH, this))
    }
    z(zn, Ym);
    d = zn.prototype;
    d.hH = function(a) {
        this.HE(a.keyCode) && M(a, !0)
    }
    ;
    d.iH = function(a) {
        this.HE(a.keyCode) && (this.bv = !0,
        M(a, !0));
        switch (a.keyCode) {
        case 8:
            M(a, !0);
            break;
        case 13:
            M(a)
        }
    }
    ;
    d.J = function() {
        zn.h.J.call(this);
        this.oh.J()
    }
    ;
    d.gH = function(a) {
        this.Fa.Hc(a.target.value)
    }
    ;
    d.HE = function(a) {
        return 27 != a && 172 != a && 40 != a && 37 != a && 39 != a
    }
    ;
    d.jH = function(a) {
        this.Fa.Hc(a.detail)
    }
    ;
    d.sa = function(a) {
        var b = a.detail;
        zn.h.sa.call(this, a);
        this.Ju(b);
        this.Bx()
    }
    ;
    d.Ju = function(a) {
        a.b("mouseover", w(this.HM, this, a))
    }
    ;
    d.B = function() {
        zn.h.B.call(this);
        this.LF.setTimeout(w(this.Bx, this), 0);
        this.TK() && this.oh.B()
    }
    ;
    d.uc = function() {
        zn.h.uc.call(this)
    }
    ;
    d.Bx = function() {
        this.isActive && (this.Qd.supportsNativeOsk ? this.P(this.Jm()) : this.P(this.Jg()))
    }
    ;
    d.mH = function(a) {
        switch (a.keyCode) {
        case 13:
        case 172:
        case 71:
            M(a, !0)
        }
    }
    ;
    d.lH = function(a) {
        switch (a.keyCode) {
        case 40:
            this.CP() && M(a);
            break;
        case 38:
            this.DP() && M(a);
            break;
        case 172:
            M(a, !0);
            this.Qd.supportsNativeOsk || this.Fa.vm();
            break;
        default:
            this.Qd.supportsHardwareKeyboard && 37 != a.keyCode && 39 != a.keyCode && 13 != a.keyCode && 27 != a.keyCode && 170 != a.keyCode && (this.Qd.gu || 8 != a.keyCode) && this.P(this.Jm())
        }
    }
    ;
    d.HM = function(a) {
        a && a != this.Bc && this.P(a)
    }
    ;
    d.jR = function() {
        return this.Jg().isActive
    }
    ;
    d.Mz = function() {
        var a = this.Jm();
        return a && a.isActive
    }
    ;
    d.JO = function() {
        return this.Bc == this.Nd
    }
    ;
    d.CP = function() {
        if (this.Mz()) {
            if (this.Lz())
                return this.P(this.Nd),
                !0;
            if (this.Jg())
                return this.P(this.Jg()),
                !0
        } else if (this.JO() && this.Jg())
            return this.P(this.Jg()),
            !0;
        return this.Fa.Ga() || !this.gk
    }
    ;
    d.DP = function() {
        return this.jR() && this.Lz() ? (this.P(this.Nd),
        !0) : this.bv && !this.Mz() ? (this.P(this.Jm()),
        !0) : !1
    }
    ;
    d.Lz = function() {
        return !!this.Nd && 0 < this.Nd.model.suggestions.H()
    }
    ;
    d.N8 = function() {
        return !!this.Fa.sm && 0 === this.Fa.sm.H()
    }
    ;
    d.TK = function() {
        return this.isActive && this.Fa.Ga()
    }
    ;
    d.kH = function(a) {
        "string" == typeof a ? this.Fa.bC(a.replace("_", " ")) : this.AU(a) && this.Fa.vm()
    }
    ;
    d.AU = function(a) {
        return !(!a || "delete-icon" !== a.jj)
    }
    ;
    d.nH = function() {
        var a = this.Fa.query;
        this.M(this.Gc, this.oo || this.Fa.Ga());
        this.oo ? this.Gc.value != a && (this.Gc.value = a,
        this.Gc.scrollLeft = this.Gc.scrollWidth - this.Gc.clientWidth) : this.L(this.qF, a);
        this.gk = !1;
        this.Fa.Ga() ? (this.M(this.k(".search-pairing"), !0),
        this.oh.B()) : (this.M(this.k(".search-pairing"), !1),
        this.oh.J());
        this.Ib();
        this.XG();
        this.l("toggle-loading", !this.Fa.Ga());
        this.l("loaded");
        this.Fa.Ga() && this.rF.YG()
    }
    ;
    d.XG = function() {
        this.Qd.supportsSearchSuggestion && this.Nd.update(this.Fa.query)
    }
    ;
    d.oH = function(a) {
        this.l("toggle-loading", !1);
        this.l("loaded", a);
        0 === a.H() ? (this.gk = !1,
        this.Fa.Ga() || this.Ib("[[No videos are available|The message shown when a row has no videos to show.]]")) : this.gk = !0
    }
    ;
    d.Jg = function() {
        return this.children["search-keyboard"]
    }
    ;
    d.Jm = function() {
        return this.children["search-input"]
    }
    ;
    zn.$inject = "$scope $element $attrs locationService navigationService messageModel environmentModel timeService searchQueryModel injector remoteService".split(" ");
    function An(a, b, c, e, f, g, k, l, n) {
        this.name = "search";
        this.Jh = !1;
        Ym.call(this, a, b, c, f, g, k);
        this.u_ = n;
        this.Le = l;
        this.s_ = e("[[search|A tooltip indicating that a user can start searching within a text box]]...")(a);
        this.Au = e("[[Use your GamePad to search.|A message that tells Wii U users to use their GamePad controller to enter a search.]]")(a);
        this.t_ = this.wh = !1;
        this.Bh = this.k("#search-query");
        this.scope.$watch(c.query, w(function(a) {
            a && this.Le.Hc(a)
        }, this));
        this.b("keydown", w(this.BH, this));
        this.b("keyup", w(this.CH, this));
        this.Le.b("query:changed", w(this.Nv, this));
        this.Le.b("results:changed", w(this.DH, this));
        this.Bh.addEventListener("focus", w(function() {
            this.l("search-input-focused")
        }, this), !1);
        this.Bh.addEventListener("blur", w(function() {
            this.l("search-input-blurred")
        }, this), !1);
        this.Nv()
    }
    z(An, Ym);
    d = An.prototype;
    d.CH = function(a) {
        switch (a.keyCode) {
        case 40:
        case 37:
        case 39:
        case 38:
            M(a);
            break;
        case 13:
        case 27:
            break;
        default:
            this.Le.Hc(this.Bh.textContent),
            M(a, !0)
        }
    }
    ;
    d.BH = function(a) {
        switch (a.keyCode) {
        case 40:
            !this.Le.Ga() && this.wh || M(a);
            break;
        case 38:
            M(a);
            break;
        case 27:
            break;
        default:
            M(a, !0)
        }
    }
    ;
    d.X8 = function() {
        return "search-query" === this.activeChildName
    }
    ;
    d.B = function() {
        An.h.B.call(this);
        this.hJ = angular.element(this.Bh).scope();
        this.P(this.hJ.focusable);
        this.wh || this.Ib(this.Au)
    }
    ;
    d.Nv = function(a) {
        this.isActive && (a ? this.Ib("") : (this.Ib(this.Au),
        this.wh = !1));
        this.Bh.textContent = a || "";
        this.l("toggle-loading", !this.Le.Ga());
        this.l("loaded")
    }
    ;
    d.DH = function(a) {
        this.l("toggle-loading", !1);
        this.l("loaded", a);
        0 === a.H() ? (this.wh = !1,
        this.Le.Ga() || this.Ib("[[No videos are available|The message shown when a row has no videos to show.]]")) : this.wh = !0
    }
    ;
    An.$inject = "$scope $element $attrs $interpolate locationService navigationService messageModel searchQueryModel timeService".split(" ");
    function Bn() {
        this.Rt = !1
    }
    Bn.prototype.WX = function() {
        this.Rt = !1
    }
    ;
    Bn.prototype.tf = function(a) {
        return a ? "icon-unsubscribe" : "icon-subscribe"
    }
    ;
    Bn.prototype.or = function() {
        this.Rt = !0
    }
    ;
    Bn.prototype.Ig = function(a) {
        return a ? this.Rt ? "[[Now Subscribed!|Tooltip suggesting that the user has just subscribed to the current video.]]" : "[[Already Subscribed!|Tooltip stating that the user is subscribed to the current video, but has tried to subscribe again.]]" : "[[Subscribe?|Tooltip suggesting that the user can subscribe tothe current video.]]"
    }
    ;
    function Cn(a, b, c, e, f, g, k, l, n) {
        this.name = "toasts";
        S.call(this, a, b, c);
        this.Fp = e;
        this.JG = g;
        this.hI = k;
        this.gd = [];
        this.w_ = null;
        this.Xk = this.k(".toasts");
        this.Dv = this.eI();
        this.hI.Ja || l.b("volumeData:changed", w(this.fI, this));
        this.aa(n, "remote:connected", w(this.kw, this, !0));
        this.aa(n, "remote:disconnected", w(this.kw, this, !1))
    }
    z(Cn, S);
    d = Cn.prototype;
    d.iB = function() {
        return 0 < this.gd.length || !1
    }
    ;
    d.eI = function() {
        return {
            "android-phone": {
                "true": "android-phone-connected",
                "false": "android-phone-disconnected"
            },
            "android-tablet": {
                "true": "android-tablet-connected",
                "false": "android-tablet-disconnected"
            },
            "youtube-desktop": {
                "true": "laptop-connected",
                "false": "laptop-disconnected"
            },
            "blazer-phone": {
                "true": "remote-connected",
                "false": "remote-disconnected"
            },
            "blazer-tablet": {
                "true": "remote-connected",
                "false": "remote-disconnected"
            },
            "ytios-phone": {
                "true": "ios-phone-connected",
                "false": "ios-phone-disconnected"
            },
            "ytios-tablet": {
                "true": "ios-tablet-connected",
                "false": "ios-tablet-disconnected"
            }
        }
    }
    ;
    d.gB = function() {
        0 < this.gd.length && this.JG.get(Q.g + "/rolling_toast.html", {}, w(this.aN, this))
    }
    ;
    d.aN = function(a) {
        this.Ve(this.Xk, "");
        for (var b, c, e, f = 0, g = this.gd.length; f < g; ++f)
            this.Xk.innerHTML += a,
            b = this.Xk.children,
            e = this.gd[f],
            b = b[b.length - 1],
            b.id = this.on(e.id),
            b.className += " " + e.className + " ",
            c = b.querySelector(".toast-icon"),
            c.className += " " + e.Nr,
            c = b.querySelector(".toast-progress"),
            c.style.display = e.AA ? "" : "none",
            c = b.querySelector(".progress"),
            c.style.width = e.zA + "%",
            b = b.querySelector(".toast-msg"),
            this.Ve(b, e.message)
    }
    ;
    d.fI = function(a, b) {
        if (-1 != b.volume) {
            var c = a.volume
              , e = this.hB("vol", !0, 7500)
              , f = Math.round(c / 10);
            e.className = "volume-toast";
            e.AA = !0;
            e.zA = c;
            e.message = "" + f;
            e.Nr = a.muted ? "volume-muted" : 8 <= f ? "volume-high" : 4 <= f ? "volume-mid" : 1 <= f ? "volume-low" : "volume-muted";
            this.gB();
            this.M(this.element[0], this.iB())
        }
    }
    ;
    d.kw = function(a, b, c) {
        if ("remote-pair" != this.data && "remote-reset" != this.data && c) {
            c = this.hB(b.id, !1, 5E3);
            c.className = "remote-connect";
            var e = b.Yd.match(/^[^-]+-[^-]+/)
              , e = e ? e[0] : "";
            c.Nr = this.Dv[e] ? this.Dv[e][a] : a ? "remote-connected" : "remote-disconnected";
            c.message = (new Qg(b)).displayString;
            this.gB();
            this.M(this.element[0], this.iB())
        }
    }
    ;
    d.hB = function(a, b, c) {
        var e = a ? Ma(this.gd, function(b) {
            return b.id === a
        }) : null;
        e ? (this.Fp.clearTimeout(e.Xs),
        (b = document.getElementById(this.on(e.id))) && Wa(b, "")) : (e = new zk,
        e.id = a || (e[ia] || (e[ia] = ++ja)).toString(),
        b ? this.gd.unshift(e) : this.gd.push(e));
        e.Xs = this.Fp.setTimeout(w(this.dV, this, e), c);
        return e
    }
    ;
    d.dV = function(a) {
        var b = document.getElementById(this.on(a.id));
        Va(b, "toast-roll");
        a.Xs = this.Fp.setTimeout(w(this.mW, this, a.id), 700)
    }
    ;
    d.mW = function(a) {
        this.gd = this.gd.filter(function(b) {
            return b.id != a
        });
        pc(document.getElementById(this.on(a)))
    }
    ;
    d.on = function(a) {
        return "toast-" + a
    }
    ;
    Cn.$inject = "$scope $element $attrs timeService rootDispatcher templateClient environmentModel playerFacade remoteService".split(" ");
    function Dn(a, b, c, e, f, g, k) {
        this.name = "transliteration";
        R.call(this, a, b, c);
        this.pw = e;
        this.bS = f;
        this.nf = g;
        this.langCodePair_ = this.scope.$eval(c.langCodePair);
        this.uB = new Vf(this.CS,500,this);
        this.activeItemIndex = 0;
        this.vn = [];
        this.jm = this.ln = "";
        k.GS() && this.IS()
    }
    z(Dn, R);
    d = Dn.prototype;
    d.B = function() {
        Dn.h.B.call(this);
        this.P(this.children.transliteration)
    }
    ;
    d.J = function() {
        Dn.h.J.call(this);
        this.md(this.children.transliteration)
    }
    ;
    d.IS = function() {
        this.pw.b("query:changed", w(this.iM, this));
        this.b("letter-tile-key-press", w(this.gM, this));
        this.b("list-item-index-change", w(this.fM, this))
    }
    ;
    d.iM = function(a) {
        if (a) {
            a = a.toLowerCase();
            var b = a.length < this.jm.length
              , c = this.rC(a);
            !c && b && (c = this.BT(a));
            this.nf.HC(c);
            (this.ln = c) && this.uB.start();
            this.jm = a
        } else
            this.wr(),
            this.nf.HC(""),
            this.ln = ""
    }
    ;
    d.CS = function() {
        this.bS.hX(this.ln, this.langCodePair_, w(this.$W, this))
    }
    ;
    d.rC = function(a) {
        var b = ""
          , c = this.nf.aA();
        -1 != a.indexOf(c) && (b = a.replace(c, ""));
        return b
    }
    ;
    d.BT = function(a) {
        for (var b = ""; !b && 0 < this.nf.Hm.length; )
            this.nf.Hm.pop(),
            b = this.rC(a);
        return b
    }
    ;
    d.$W = function(a) {
        0 < a[1][0].length && this.ln ? (this.vn = a[1][0][1],
        this.children.transliteration.setData(this.vn),
        this.activeItemIndex = 0) : this.wr()
    }
    ;
    d.wr = function() {
        this.vn.length = 0;
        this.uB.oi();
        this.children.transliteration.setData(this.vn)
    }
    ;
    d.gM = function(a) {
        this.nf.Hm.push(a.detail);
        this.jm = this.nf.aA();
        this.pw.Hc(this.jm);
        this.wr();
        this.l("transliteration-selected");
        M(a)
    }
    ;
    d.fM = function(a) {
        this.activeItemIndex = a.detail
    }
    ;
    Dn.$inject = "$scope $element $attrs searchQueryModel transliterationService transliterationModel locale".split(" ");
    function En(a, b, c, e, f, g, k, l, n, q, s, r, G, Z, ka) {
        this.name = "transport";
        jn.call(this, a, b, c, e);
        this.TI = f;
        this.Pa = g;
        this.eJ = k;
        this.xI = l;
        this.xk = n;
        this.Ep = q;
        this.We = s;
        this.Bo = r;
        this.D_ = G;
        this.NG = Z;
        this.Oo = 3E3;
        this.R = ke;
        this.Wd = je;
        this.Sf = this.BK();
        this.Ox = v("player-controls-container") ? document.getElementById("player-controls-container") : "player-controls-container";
        this.Sl = dc("html5-video-controls");
        this.Uu = this.k(".player-time-elapsed");
        this.Vu = this.k(".player-time-total");
        this.SI = this.k(".button-tooltip");
        this.MG = ka
    }
    z(En, jn);
    d = En.prototype;
    d.BK = function() {
        var a = [];
        a.push(this.xW());
        var a = a.concat(this.uW())
          , b = [];
        (3 > a.length ? a : b).push(this.wW());
        b.push(this.sW());
        b.push(this.tW());
        return a.concat(this.vW()).concat(b)
    }
    ;
    d.wW = function() {
        return {
            id: this.R.Ls,
            className: this.Wd.Ls,
            je: w(function() {
                this.scope.transport.sR()
            }, this)
        }
    }
    ;
    d.vW = function() {
        return [{
            disabled: !0,
            id: this.R.nm,
            className: this.Wd.nm,
            ls: w(function() {
                this.scope.transport.gP()
            }, this)
        }, {
            AI: !0,
            id: this.R.Ny,
            className: this.Wd.My,
            je: w(function() {
                this.scope.transport.pg()
            }, this)
        }, {
            disabled: !0,
            id: this.R.mm,
            className: this.Wd.mm,
            ls: w(function() {
                this.scope.transport.fP()
            }, this)
        }]
    }
    ;
    d.xW = function() {
        var a = this.Ep;
        return {
            checked: !1,
            id: this.R.tm,
            tf: function() {
                return a.tf(this.checked)
            },
            je: w(function() {
                this.scope.transport.or()
            }, this),
            disabled: !1,
            Ig: function() {
                return a.Ig(this.checked)
            }
        }
    }
    ;
    d.uW = function() {
        return [{
            checked: !1,
            id: this.R.Bi,
            tf: function() {
                return this.checked ? "icon-like-checked" : "icon-like"
            },
            je: w(function() {
                this.scope.transport.lB(!0)
            }, this),
            disabled: !1,
            Ig: function() {
                return this.checked ? "[[Liked!|Tooltip stating that the user has liked the current video.]]" : "[[Like?|Tooltip stating that the user can like the video by clicking the button.]]"
            }
        }, {
            checked: !1,
            id: this.R.Ai,
            tf: function() {
                return this.checked ? "icon-dislike-checked" : "icon-dislike"
            },
            je: w(function() {
                this.scope.transport.lB(!1)
            }, this),
            disabled: !1,
            Ig: function() {
                return this.checked ? "[[Disliked!|Tooltip stating that the user has disliked the current video.]]" : "[[Dislike?|Tooltip stating that the user can dislike the video by clicking the button.]]"
            }
        }]
    }
    ;
    d.sW = function() {
        return {
            Wz: !1,
            id: this.R.Yi,
            className: this.Wd.Yi,
            je: w(function() {
                this.scope.transport.KQ()
            }, this)
        }
    }
    ;
    d.tW = function() {
        return {
            disabled: !0,
            id: this.R.Im,
            className: this.Wd.Im,
            je: w(function() {
                this.scope.transport.rR()
            }, this)
        }
    }
    ;
    d.ga = function() {
        En.h.ga.call(this);
        this.Pa.b("video:changed", w(this.QH, this));
        this.Bo.b("cache:changed", w(this.PH, this));
        this.jv()
    }
    ;
    d.jv = function() {
        this.b("list-item-index-change", w(function(a) {
            this.Tw();
            M(a)
        }, this));
        this.b("keydown", w(function(a) {
            this.oc();
            switch (a.keyCode) {
            case 37:
            case 39:
                M(a)
            }
        }, this));
        this.b("keyup", w(function(a, b) {
            this.oc();
            switch (b) {
            case 37:
            case 39:
                M(a)
            }
        }, this));
        this.aa(this.NG, "mousemove", this.MG(2, w(this.ZI, this)));
        this.aa(this.Pa, "isPlaying:changed", w(this.ew, this));
        this.aa(this.Pa, "isPlayingAd:changed", w(this.fw, this));
        this.aa(this.Pa, "state:changed", w(this.gw, this));
        this.aa(this.xk, "duration:changed", w(this.il, this, this.Vu));
        this.aa(this.xk, "currentTime:changed", w(this.il, this, this.Uu))
    }
    ;
    d.B = function() {
        this.P(this.children[this.R.Wf]);
        this.enable();
        this.Pa.isPlaying ? jn.prototype.B.call(this) : S.prototype.B.call(this);
        this.Yx()
    }
    ;
    d.J = function() {
        jn.prototype.J.call(this);
        this.Yx();
        this.md(this.children[this.R.Wf]);
        this.disable()
    }
    ;
    d.enable = function() {
        this.fw(this.Pa.isPlayingAd);
        this.ew(this.Pa.isPlaying);
        this.gw(this.Pa.state);
        this.il(this.Vu, this.xk.duration);
        this.il(this.Uu, this.xk.currentTime);
        this.sA();
        this.Md();
        this.jv();
        var a = this.children[this.R.wA];
        a && a.enable()
    }
    ;
    d.disable = function() {
        this.Md();
        this.children[this.R.wA].disable()
    }
    ;
    d.Ys = function() {
        this.Pa.isPlaying && this.isActive ? (this.xI.mode(null),
        this.l("hidden")) : this.oc()
    }
    ;
    d.sa = function(a) {
        var b = a.detail;
        En.h.sa.call(this, a);
        b.id === this.R.Wf && this.dg()
    }
    ;
    d.fw = function(a) {
        this.Er(!a);
        this.children[this.R.Wf].$e()
    }
    ;
    d.il = function(a, b) {
        this.L(a, this.eJ.fq(b))
    }
    ;
    d.ew = function(a) {
        a && this.oc();
        this.Er(!this.Pa.isPlayingAd);
        this.Zz();
        this.rb(this.R.Ny).className = a ? this.Wd.My : this.Wd.gO;
        this.dg()
    }
    ;
    d.gw = function(a) {
        -1E3 === a && this.Er(!1);
        this.Zz()
    }
    ;
    d.ZI = function() {
        this.oc()
    }
    ;
    d.PH = function(a) {
        "subscription" === a ? this.sA() : "video_like_value" === a && this.lE()
    }
    ;
    d.sA = function() {
        this.rb(this.R.tm).checked = this.Xy();
        this.dg()
    }
    ;
    d.lE = function() {
        if (this.We.currentVideo) {
            var a = this.Bo.get("video_like_value", this.We.currentVideo.videoId);
            this.rb(this.R.Bi).checked = "like" == a;
            this.rb(this.R.Ai).checked = "dislike" == a;
            this.dg()
        }
    }
    ;
    d.Xy = function() {
        return !!this.Bo.get("subscription", this.NY())
    }
    ;
    d.Zz = function() {
        var a = this.Pa.zP()
          , b = this.rb(this.R.Yi);
        b.disabled = !a;
        a && (b.Wz = !pb(this.Pa.lq()))
    }
    ;
    d.Er = function(a) {
        this.rb(this.R.mm).disabled = !a;
        this.rb(this.R.nm).disabled = !a;
        this.rb(this.R.Im).disabled = !a;
        this.rb(this.R.Yi).disabled = !a;
        this.rb(this.R.Bi).disabled = !a;
        this.rb(this.R.Ai).disabled = !a;
        this.rb(this.R.tm).disabled = !a;
        this.dg()
    }
    ;
    d.pg = function() {
        this.Pa.pg()
    }
    ;
    d.or = function() {
        this.Ep.or();
        !this.Xy() && this.We.currentVideo && this.l("request-toggle-subscription", this.We.currentVideo.channel)
    }
    ;
    d.QH = function() {
        this.lE();
        this.Ep.WX()
    }
    ;
    d.lB = function(a) {
        var b = this.rb(this.R.Bi)
          , c = this.rb(this.R.Ai);
        !(a ? b : c).checked && this.We.currentVideo && this.l("request-like-video", {
            videoId: this.We.currentVideo.videoId,
            lM: a ? "like" : "dislike"
        })
    }
    ;
    d.t$ = function(a) {
        a.checked = !a.checked;
        this.dg()
    }
    ;
    d.fP = function() {
        this.oc();
        this.Pa.tn(10)
    }
    ;
    d.gP = function() {
        this.oc();
        this.Pa.tn(-10)
    }
    ;
    d.sR = function() {
        this.l("request-search")
    }
    ;
    d.rR = function() {
        this.Pa.pause();
        this.l("request-flag-options")
    }
    ;
    d.KQ = function() {
        this.Pa.pause();
        this.l("request-cc-options")
    }
    ;
    d.rb = function(a) {
        return Ma(this.Sf, function(b) {
            return b.id === a
        })
    }
    ;
    d.e9 = function() {
        this.Sf = this.Sf.slice()
    }
    ;
    d.dg = function() {
        this.children[this.R.Wf].setData(this.Sf);
        this.pa()
    }
    ;
    d.pa = function() {
        this.Tw()
    }
    ;
    d.Tw = function() {
        var a = this.Sf[this.children[this.R.Wf].activeIndex]
          , a = a.Ig ? this.TI(a.Ig())(this.scope) : "";
        this.L(this.SI, a)
    }
    ;
    d.NY = function() {
        var a = this.We.currentVideo;
        return a && a.channel ? a.channel.username : ""
    }
    ;
    d.Yx = function() {
        this.Sl = this.Sl || dc("html5-video-controls");
        if (this.Ox && this.Sl) {
            var a = this.Ox.getBoundingClientRect()
              , b = "2em";
            a.top && (b = Math.round(ic(window) - a.top) + "px");
            Id(this.Sl, "bottom", b)
        }
    }
    ;
    En.$inject = "$scope $element $attrs $timeout $interpolate playerFacade locale locationService progressModel subscribeLogic watchModel cacheService environmentModel rootDispatcher rateLimit".split(" ");
    function Fn(a, b, c, e, f) {
        this.name = "transportControlsList";
        Y.call(this, a, b, c, e, f)
    }
    z(Fn, Y);
    d = Fn.prototype;
    d.B = function() {
        Fn.h.B.call(this);
        for (var a = this.scope.transport.Sf.length, b = 0; b < a; ++b)
            if (this.data[b].AI) {
                this.Ii(b, !1);
                break
            }
    }
    ;
    d.$j = function() {
        return 0 === this.element.children().length
    }
    ;
    d.Kq = function(a, b) {
        return "<div yt:focusable " + this.jn(b) + "></div>"
    }
    ;
    d.Ml = function() {
        for (var a = this.element.children(), b = a.length, c = 0; c < b; ++c)
            a[c].className = this.jn(c)
    }
    ;
    d.jn = function(a) {
        var b = ["item"];
        if (this.data) {
            var c = this.data[a];
            c && (b.push(c.className),
            c.tf && b.push(c.tf()),
            c.disabled && b.push("disabled-button"),
            c.Wz && b.push("highlighted"))
        }
        a === this.activeIndex && b.push("active");
        return b.join(" ")
    }
    ;
    d.xE = function(a) {
        if (this.isActive)
            switch (this.scope.transport.oc(),
            a.keyCode) {
            case 37:
            case 39:
                M(a);
                break;
            case 13:
                this.dW(this.data[this.PD(a.target)]),
                M(a)
            }
    }
    ;
    d.eE = function(a) {
        if (this.isActive)
            switch (this.scope.transport.oc(),
            a.keyCode) {
            case 37:
            case 39:
                M(a);
                break;
            case 13:
                this.iW(this.data[this.PD(a.target)]),
                M(a)
            }
    }
    ;
    d.PD = function(a) {
        if (a && a.className) {
            a = a.className.split(" ");
            for (var b = a.length, c = this.data, e = c.length, f, g = 0; g < e; ++g) {
                f = c[g];
                for (var k = 0; k < b; ++k)
                    if ((f.className || f.tf()) === a[k])
                        return g
            }
        }
        return this.activeIndex
    }
    ;
    d.iW = function(a) {
        a && !a.disabled && a.je && a.je(this.activeIndex)
    }
    ;
    d.dW = function(a) {
        a && !a.disabled && a.ls && a.ls()
    }
    ;
    d.YE = function(a) {
        return !this.data[a].disabled
    }
    ;
    d.$e = function() {}
    ;
    d.Ii = function(a, b) {
        var c = this.element.children()
          , e = this.activeIndex;
        this.activeIndex = a;
        var f = c[e];
        f && (f.className = this.jn(e));
        if (c = c[this.activeIndex])
            c.className = this.jn(this.activeIndex),
            c.focus();
        b && this.l("list-item-index-change", this.activeIndex)
    }
    ;
    Fn.$inject = ["$scope", "$element", "$attrs", "$compile"];
    function Gn(a, b, c, e) {
        this.name = "videoTile";
        Tm.call(this, a, b, c);
        this.className = "video-tile";
        this.TG = e;
        this.UG = this.k(".title");
        this.RG = this.k(".name");
        this.QG = this.k(".updated");
        this.sk = this.k(".activity");
        this.tk = this.k(".duration");
        this.lv = this.k(".description");
        this.$L = angular.element(this.k(".video-thumb"));
        this.SG = this.k(".details");
        this.gp = this.k(".set");
        this.M(this.gp, !1);
        this.PG = this.k(".set .title");
        this.OG = this.k(".count");
        this.Eo = "videotile";
        this.ZL = new Ij;
        this.Iy = ""
    }
    z(Gn, Tm);
    Gn.prototype.W5 = 90;
    Gn.prototype.setData = function(a) {
        Gn.h.setData.call(this, a);
        this.pa()
    }
    ;
    Gn.prototype.pa = function() {
        Gn.h.pa.call(this);
        this.M(this.element[0], this.data);
        if (this.data) {
            this.L(this.UG, this.data.title);
            this.L(this.RG, this.data.channel.displayName);
            this.L(this.QG, this.data.uploadedDateLabel);
            var a = this.data.channel.zb == this.data.channel.serviceQuery ? this.data.zh || this.data.channel.displayName : this.TG(this.data.Yc)({
                username: this.data.zh || this.data.channel.displayName
            });
            this.M(this.sk, a);
            this.L(this.sk, a);
            this.M(this.tk, this.data.xh);
            this.L(this.tk, this.data.xh);
            this.M(this.lv, this.data.description);
            a = ye(this.data.description, 90);
            this.L(this.lv, a);
            this.SG.style.backgroundImage = "url(" + (this.data.fo || this.data.channel.imageUrl || "") + ")";
            this.ZH();
            this.data instanceof Jj ? (this.M(this.gp, !0),
            this.L(this.PG, this.data.pv),
            this.L(this.OG, this.data.qv)) : this.M(this.gp, !1)
        }
    }
    ;
    Gn.prototype.ZH = function() {
        this.data && this.data.imageUrl !== this.Iy && (this.ZL.ED(this.$L[0], this.data.imageUrl, "preloaded"),
        this.Iy = this.data.imageUrl)
    }
    ;
    Gn.$inject = ["$scope", "$element", "$attrs", "$interpolate"];
    function Hn(a, b, c, e, f, g, k, l, n, q, s, r, G, Z, ka, ca, za) {
        this.name = "watch";
        Ym.call(this, a, b, c, l, n, e);
        this.I_ = c;
        this.II = k;
        this.sK = f;
        this.HI = g;
        this.uw = s;
        this.aJ = r;
        this.bJ = G;
        this.J_ = Z;
        this.AJ = ka;
        this.cJ = ca;
        this.Lq = this.ul = null;
        this.tw = 0;
        this.Cw = null;
        this.ra = q;
        this.xy = this.k("#branding-container");
        this.Bg = this.Qq = this.dy = this.Ji = null;
        this.OH = za;
        this.RL()
    }
    z(Hn, Ym);
    d = Hn.prototype;
    d.B = function() {
        this.Vb.rm("transport") && (this.activeChildName = "transport");
        Ym.prototype.B.call(this)
    }
    ;
    d.fs = function() {
        return this.Vb.rm("search") || !this.Vb.mode()
    }
    ;
    d.gs = function() {
        return !1
    }
    ;
    d.J = function() {
        Ym.prototype.J.call(this);
        this.l("toggle-loading", 0)
    }
    ;
    d.xb = function(a) {
        (this.Lq = a) ? (this.Uy(),
        this.VQ = a.videoId,
        this.TQ(),
        this.UQ(),
        this.MQ(),
        this.GB() && this.GB().setData(this.ag()),
        this.HB() && this.HB().setData(this.Lq)) : (this.VQ = "",
        this.ra.wl())
    }
    ;
    d.uc = function() {
        Hn.h.uc.call(this);
        this.td("isTitleMode", this.cM);
        this.td("getCurrentVideo", this.ag);
        this.td("isTransportActive", this.ow)
    }
    ;
    d.MQ = function() {
        this.YT();
        this.ra.Xi();
        this.ra.XB()
    }
    ;
    d.ow = function() {
        return this.isActive && "transport" === this.activeChildName
    }
    ;
    d.cM = function() {
        return this.Vb.rm("title")
    }
    ;
    d.RL = function() {
        this.Iu("$routeChangeSuccess", w(this.ZK, this));
        this.b("hidden", w(this.YK, this));
        this.b("keyup", w(this.aL, this));
        this.b("keydown", this.OH(5, w(this.$K, this), function(a) {
            return 228 === a.keyCode || 76 === a.keyCode || 227 === a.keyCode || 74 === a.keyCode
        }));
        this.ra.b("isPlayingAd:changed", w(this.WK, this));
        this.ra.b("state:changed", w(this.XK, this))
    }
    ;
    d.ZK = function(a, b) {
        b && b.params && b.params.mode && "transport" === b.params.mode ? this.activeChildName = "transport" : this.isActive && (this.activeChildName = null,
        this.focus())
    }
    ;
    d.YK = function() {
        this.tw = this.uw.lf().getTime()
    }
    ;
    d.WK = function(a) {
        a ? this.xy.style.display = "none" : (this.xy.style.display = "block",
        this.OY())
    }
    ;
    d.XK = function(a) {
        switch (a) {
        case 2:
            this.ME(!1);
            break;
        case 1:
            this.ME(!0);
            break;
        case -1E3:
            this.YY()
        }
    }
    ;
    d.F9 = function(a) {
        this.l("toggle-loading", a)
    }
    ;
    d.YT = function() {
        this.element.toggleClass("play", !1);
        this.element.toggleClass("pause", !1)
    }
    ;
    d.ME = function(a) {
        this.element.toggleClass("play", a);
        this.element.toggleClass("pause", !a)
    }
    ;
    d.cT = function(a) {
        this.element.toggleClass("loading", a)
    }
    ;
    d.c9 = function(a) {
        this.II.ab(a, w(function(a) {
            if (a = a.A.$(0))
                this.ul = a,
                this.Cw = this.HI.ab(this.ul.channel.username).model
        }, this))
    }
    ;
    d.OY = function() {
        this.Cw = this.ul = null
    }
    ;
    d.$K = function(a) {
        switch (a.keyCode) {
        case 228:
        case 76:
            this.ra.tn(10);
            break;
        case 227:
        case 74:
            this.ra.tn(-10)
        }
    }
    ;
    d.aL = function(a) {
        switch (a.keyCode) {
        case 39:
        case 176:
            this.ra.isPlayingAd || this.l("next-video");
            M(a);
            break;
        case 37:
        case 177:
            this.ra.isPlayingAd || this.l("previous-video");
            M(a);
            break;
        case 75:
        case 179:
        case 32:
            this.ra.pg();
            M(a);
            break;
        case 19:
            this.ra.pause();
            break;
        case 250:
            this.ra.Vf();
            M(a);
            break;
        case 8:
        case 27:
            this.ra.isPlaying && this.ow() && (this.Vb.mode(null),
            M(a),
            this.l("play-sound", "cross-back"))
        }
        (27 === a.keyCode || 8 === a.keyCode) && this.tw + 1E3 > this.uw.lf().getTime() && M(a)
    }
    ;
    d.tC = function() {
        var a = this.ag();
        return a && a.channel ? a.channel.er : null
    }
    ;
    d.TQ = function() {
        var a = this.ag();
        a && (this.yz(),
        this.ra.Xi(),
        this.sK.ab(a.channel.username, w(this.$Q, this)))
    }
    ;
    d.Qz = function() {
        this.Ji || (this.Ji = this.k("#branding-banner"),
        this.dy = this.k("#branding-banner-image"),
        this.Qq = this.k("#branding-banner-overlay"));
        this.Bg || (this.Bg = this.k("#branding-watermark"))
    }
    ;
    d.$Q = function(a) {
        var b = this.ag();
        if (b) {
            b.channel.er = a;
            var c = 15;
            this.Qz();
            this.ra.Xi();
            if (a && a.dm)
                this.ra.Ri("show-branding-banner-start", 0.1, w(this.vA, this)),
                this.ra.Ri("hide-branding-banner", 5, w(this.RO, this));
            else if (this.aJ.Jb(Pd)) {
                c = this.bJ.Sq();
                if (!c || !c.channel)
                    return;
                a = new Xi;
                a.Wy = !0;
                a.dm = this.cJ.Rk(c.videoId, "mqdefault");
                b.channel.er = a;
                c = 8
            } else {
                this.yz();
                this.ra.Xi();
                return
            }
            this.ra.Ri("show-branding-banner-end", b.duration - c, w(this.vA, this))
        }
    }
    ;
    d.yz = function() {
        this.Qz();
        this.Ji.style.display = "none";
        this.Bg.style.display = "none"
    }
    ;
    d.RO = function() {
        this.Ji.style.display = "none";
        this.Qq.style.display = "none";
        var a = this.tC();
        this.Bg.style.display = a && a.Bs ? "block" : "none"
    }
    ;
    d.vA = function() {
        var a = this.tC();
        this.Bg.src = a.Bs;
        this.dy.src = a.dm;
        this.Bg.style.display = "none";
        this.Ji.style.display = "block";
        this.Qq.style.display = a.Wy ? "block" : "none"
    }
    ;
    d.UQ = function() {
        var a = this.ag();
        a && a.Pb && a.channel.zb && this.AJ.ab(a.channel.zb, w(this.zR, this, a.channel))
    }
    ;
    d.zR = function(a, b) {
        a.Pb = b.Pb
    }
    ;
    d.YY = function() {
        this.l("request-player-error", this.ra.$a)
    }
    ;
    d.ag = function() {
        return this.ra.isPlayingAd ? this.YU() : this.Lq
    }
    ;
    d.YU = function() {
        return this.ul
    }
    ;
    d.HB = function() {
        return this.children["watch-title"]
    }
    ;
    d.GB = function() {
        return this.children["ad-callout"]
    }
    ;
    Hn.$inject = "$scope $element $attrs messageModel brandingService userProfileService videoPlaybackInfoService locationService navigationService playerFacade timeService environmentModel watchModel progressModel channelPaidInfoService ytThumbnails rateLimit".split(" ");
    function In(a, b, c, e, f, g, k, l) {
        this.name = "title";
        jn.call(this, a, b, c, e);
        this.dI = f;
        this.hw = g;
        this.wG = l;
        this.Oo = 3E3;
        this.rG = this.k("img");
        this.tG = this.k(".player-video-title");
        this.Qu = this.k(".username");
        this.sG = this.k(".uploaded-date");
        this.vG = this.k(".view-count-label");
        this.uG = this.k(".view-count");
        this.Ko = this.k(".set-context");
        this.M(this.Ko, !1);
        this.xG = k;
        this.hw.b("isPlayingAd:changed", w(function(a) {
            this.M(this.element[0], !a)
        }, this))
    }
    z(In, jn);
    In.prototype.Ys = function() {
        this.hw.isPlaying ? this.dI.mode(null) : this.oc()
    }
    ;
    In.prototype.setData = function(a) {
        In.h.setData.call(this, a);
        if (a) {
            this.rG.src = a.channel.imageUrl;
            this.L(this.tG, a.title);
            var b = this.xG.Lf()
              , c = this.wG.useInnerTube && b && b.service && "playlistService" == b.service.id;
            this.M(this.Ko, c);
            this.M(this.Qu, !c);
            c ? this.L(this.Ko, b.model.title + ": " + (b.activeIndex + 1) + " of " + b.model.Ee) : this.L(this.Qu, a.channel.displayName);
            this.L(this.sG, a.uploadedDateLabel);
            this.L(this.vG, a.viewCountLabel);
            this.M(this.uG, !!a.viewCount)
        }
    }
    ;
    In.$inject = "$scope $element $attrs $timeout locationService playerFacade watchModel environmentModel".split(" ");
    function Jn(a, b) {
        this.JQ = new Rg(a);
        this.HQ = b ? b : "callback";
        this.U = 5E3
    }
    var Kn = 0;
    Jn.prototype.HX = function(a) {
        this.U = a
    }
    ;
    Jn.prototype.v7 = function() {
        return this.U
    }
    ;
    Jn.prototype.send = function(a, b, c, e) {
        a = a || null;
        e = e || "_" + (Kn++).toString(36) + y().toString(36);
        h._callbacks_ || (h._callbacks_ = {});
        var f = this.JQ.clone();
        if (a)
            for (var g in a)
                a.hasOwnProperty && !a.hasOwnProperty(g) || f.Tf(g, a[g]);
        b && (b = Ln(e, b),
        h._callbacks_[e] = b,
        f.Tf(this.HQ, "_callbacks_." + e));
        b = Dg(f.toString(), {
            timeout: this.U,
            PP: !0
        });
        c = Mn(e, a, c);
        b.Fx(c);
        return {
            le: e,
            EB: b
        }
    }
    ;
    Jn.prototype.cancel = function(a) {
        a && (a.EB && a.EB.cancel(),
        a.le && Nn(a.le, !1))
    }
    ;
    function Mn(a, b, c) {
        return function() {
            Nn(a, !1);
            c && c(b)
        }
    }
    function Ln(a, b) {
        return function(c) {
            Nn(a, !0);
            b.apply(void 0, arguments)
        }
    }
    function Nn(a, b) {
        h._callbacks_[a] && (b ? delete h._callbacks_[a] : h._callbacks_[a] = p)
    }
    ;var Q = angular.module("leanback-app", ["leanback-templates", "ngResource", yj.name]);
    Q.config(["$routeProvider", "$locationProvider", "$provide", function(a, b, c) {
        a.when("/browse", {
            state: function() {
                return "browse"
            }
        });
        a.when("/watch", {
            state: function() {
                return "watch"
            }
        });
        a.when("", {
            state: function() {
                return -1 < window.location.href.indexOf("pairingCode=") ? "dialog" : "browse"
            }
        });
        a.otherwise({
            redirectTo: "/browse",
            state: function() {
                return "browse"
            }
        });
        On(window);
        Pn(c)
    }
    ]);
    Q.run(["$injector", function(a) {
        var b = Qn;
        b.rz = w(a.get, a);
        a.get = w(b.get, b)
    }
    ]);
    Q.run(["bootstrapService", function(a) {
        a.bootstrap()
    }
    ]);
    var Qn = null;
    function On(a) {
        function b(a, b) {
            return b.ca(a)
        }
        Qn = Qn || new Tk(a);
        Qn.register("ssoApi", m("environment.ytshell.sso", window));
        var c = [{
            name: "activityParser",
            constructor: Gk
        }, {
            name: "activityReportingService",
            constructor: Xk
        }, {
            name: "angularHelper",
            constructor: ej
        }, {
            name: "authService",
            constructor: Zf
        }, {
            name: "bootstrapService",
            constructor: gl
        }, {
            name: "bountyService",
            constructor: bl
        }, {
            name: "brandingParser",
            constructor: Hk
        }, {
            name: "browseParser",
            constructor: Pj
        }, {
            name: "cacheService",
            constructor: Mk
        }, {
            name: "channelPaidInfoParser",
            constructor: Ik
        }, {
            name: "channelSuggestionParser",
            constructor: Jk
        }, {
            name: "captionsSettingsService",
            constructor: Zi
        }, {
            name: "crashReportingService",
            constructor: cl
        }, {
            name: "csiService",
            constructor: Ig
        }, {
            name: "debugModel",
            constructor: Og
        }, {
            name: "debugCallService",
            constructor: il
        }, {
            name: "devicePlugin",
            constructor: ml
        }, {
            name: "dialogService",
            constructor: pl
        }, {
            name: "environmentModel",
            constructor: wg
        }, {
            name: "exceptionLogger",
            constructor: rl
        }, {
            name: "eurekaService",
            constructor: hj
        }, {
            name: "featuredParser",
            constructor: Kk
        }, {
            name: "gestureRecognizer",
            constructor: Kj
        }, {
            name: "gestureService",
            constructor: ul
        }, {
            name: "guideParser",
            constructor: Rj
        }, {
            name: "keyMapModel",
            constructor: vg
        }, {
            name: "localStorage",
            constructor: of
        }, {
            name: "locationService",
            constructor: ij
        }, {
            name: "messageModel",
            constructor: vk
        }, {
            name: "navigationService",
            constructor: vl
        }, {
            name: "personalDataService",
            constructor: wl
        }, {
            name: "playerFacade",
            constructor: qj
        }, {
            name: "playerFactoryService",
            constructor: jj
        }, {
            name: "playerService",
            constructor: kj
        }, {
            name: "playerVariablesModel",
            constructor: aj
        }, {
            name: "playlistParser",
            constructor: Lk
        }, {
            name: "postPlayModel",
            constructor: yk
        }, {
            name: "postPlayReportingService",
            constructor: xl
        }, {
            name: "privateDataService",
            constructor: ql
        }, {
            name: "progressModel",
            constructor: Ui
        }, {
            name: "remoteService",
            constructor: xj
        }, {
            name: "resizeService",
            constructor: Il
        }, {
            name: "retentionReportingService",
            constructor: dl
        }, {
            name: "samsungService",
            constructor: Jl
        }, {
            name: "scrollbarModel",
            constructor: Ak
        }, {
            name: "searchModel",
            constructor: Bk
        }, {
            name: "searchRowService",
            constructor: Kl
        }, {
            name: "settingsRowService",
            constructor: Nl
        }, {
            name: "searchHistoryService",
            constructor: hl
        }, {
            name: "searchParser",
            constructor: Tj
        }, {
            name: "searchQueryModel",
            constructor: Ck
        }, {
            name: "shutdownService",
            constructor: el
        }, {
            name: "statsService",
            constructor: Ql
        }, {
            name: "steelDialService",
            constructor: fl
        }, {
            name: "subscribeLogic",
            constructor: Bn
        }, {
            name: "subscriptionsParser",
            constructor: Nk
        }, {
            name: "suggestionsModel",
            constructor: Dj
        }, {
            name: "templateClient",
            constructor: nl
        }, {
            name: "timeService",
            constructor: Yf
        }, {
            name: "transliterationModel",
            constructor: Fk
        }, {
            name: "transliterationService",
            constructor: xm
        }, {
            name: "userProfileParser",
            constructor: Ok
        }, {
            name: "vevoPlaylistService",
            constructor: ym
        }, {
            name: "videoParser",
            constructor: vj
        }, {
            name: "innerTubeVideoParser",
            constructor: Uj
        }, {
            name: "innerTubePlaylistParser",
            constructor: Sj
        }, {
            name: "watchHistoryModel",
            constructor: cj
        }, {
            name: "watchModel",
            constructor: dj
        }, {
            name: "ytHttp",
            constructor: Ae
        }, {
            name: "ytThumbnails",
            constructor: Li
        }];
        a = 0;
        for (var e = c.length; a < e; ++a) {
            var f = c[a];
            Qn.rp(f.name, f.constructor)
        }
        c = [{
            name: "list",
            be: Fj
        }, {
            name: "carousel",
            be: Sk
        }, {
            name: "loginInfo",
            be: Ng,
            templateUrl: "/rebound/dialogs/login_info.html"
        }, {
            name: "pairing",
            be: zj,
            templateUrl: "/rebound/dialogs/remote_pairing_info.html"
        }, {
            name: "suggestions",
            be: Gj,
            templateUrl: "/rebound/suggestions.html"
        }, {
            name: "buttonDecorator",
            be: Pk
        }, {
            name: "button",
            be: Pk,
            templateUrl: "/rebound/button.html"
        }, {
            name: "component"
        }, {
            name: "actionTile",
            templateUrl: "/rebound/tiles/action.html"
        }, {
            name: "pairTile",
            templateUrl: "/rebound/tiles/remote_pairing.html"
        }, {
            name: "resetPairingTile",
            templateUrl: "/rebound/tiles/reset_pairing.html"
        }, {
            name: "toggleTile",
            templateUrl: "/rebound/tiles/togglable.html"
        }, {
            name: "signOutTile",
            templateUrl: "/rebound/tiles/sign_out.html"
        }, {
            name: "searchTile",
            templateUrl: "/rebound/tiles/search.html"
        }, {
            name: "recentSearchTile",
            templateUrl: "/rebound/tiles/recent_search.html"
        }, {
            name: "kenkoTile",
            templateUrl: "/rebound/tiles/kenko.html"
        }, {
            name: "shiyojoTile",
            templateUrl: "/rebound/tiles/shiyojo.html"
        }, {
            name: "videoTile",
            be: Hj,
            templateUrl: "/rebound/video_tile.html"
        }];
        a = 0;
        for (e = c.length; a < e; ++a)
            f = c[a],
            Qn.WI(f.name, f.be || N, f.templateUrl ? Q.g + f.templateUrl : "");
        c = [{
            name: "rootDispatcher",
            factory: function(a) {
                var b = new te;
                b.o = a;
                return b
            },
            bf: ["document"]
        }, {
            name: "$exceptionHandler",
            factory: function(a) {
                return w(a.Bv, a)
            },
            bf: ["exceptionLogger"]
        }, {
            name: "bambooService",
            factory: function(a, b) {
                return a.get(b.ye ? al : Uk)
            },
            bf: ["injector", "environmentModel"]
        }, {
            name: "rateLimit",
            factory: tl,
            bf: ["timeService"]
        }, {
            name: "soundService",
            factory: function(a, b) {
                return a.get(b.supportsSounds ? Ol : Vk)
            },
            bf: ["injector", "environmentModel"]
        }, {
            name: "browseModel",
            factory: function(a, b) {
                return a.get(b.useInnerTube ? Oj : Nj)
            },
            bf: ["injector", "environmentModel"]
        }, {
            name: "authService",
            factory: function(a, b) {
                return a.get(b.isMario ? Pl : Zf)
            },
            bf: ["injector", "environmentModel"]
        }];
        a = 0;
        for (e = c.length; a < e; ++a)
            f = c[a],
            f.factory.inject = f.bf,
            Qn.Hw(f.name, f.factory);
        b.inject = ["markup", "locale"];
        Qn.Iv("templatePreprocessor", b)
    }
    function Pn(a) {
        for (var b = Qn.hE(), c = 0, e = b.length; c < e; ++c)
            a.factory(b[c], w(Qn.get, Qn, b[c]))
    }
    function Rn(a, b) {
        function c(a) {
            a.controller && a.controller.ga()
        }
        function e(b, c) {
            a.factory(b.name, ["$injector", function(a) {
                return a.instantiate(c, b)
            }
            ]);
            b.altName && a.factory(b.altName, [b.name, function(a) {
                return a
            }
            ])
        }
        Q.value("locale", b);
        Q.value("brandable", !1);
        for (var f = [{
            name: "likeService",
            httpMethod: "post",
            path: "/videos/{videoId}/ratings",
            template: '<yt:rating value="{likeValue}"/>'
        }, {
            name: "subscribeService",
            httpMethod: "post",
            path: "/users/default/subscriptions",
            template: '<category scheme="http://gdata.youtube.com/schemas/2007/subscriptiontypes.cat" term="channel"/><yt:username>{channelName}</yt:username>'
        }, {
            name: "unsubscribeService",
            httpMethod: "delete",
            path: "/users/default/subscriptions/{subscriptionId}",
            template: ""
        }], g = 0, k = f.length; g < k; ++g)
            e(f[g], ["ytHttp", "authService", "httpMethod", "path", "template", sl]);
        f = [{
            name: "brandingService",
            path: "/partners/{userName}/branding/default",
            parser: "brandingParser",
            paramKey: "userName",
            params: {
                fields: "yt:option[@name='device_watchpage.watermark.image.url' or @name='generictv_watchpage.banner.image.url' or @name='channel.banner.tv.image.url' or @name='watchpage.global.featured_playlist.id' or @name='channel.featured_video_module.video_id.string']"
            }
        }, {
            name: "userPlaylistsService",
            path: "/users/{userName}/playlists",
            parser: "playlistParser",
            paramKey: "userName",
            params: {
                fields: "entry(yt:playlistId,title,summary,author,yt:countHint)"
            }
        }, {
            name: "channelPaidInfoService",
            path: "/channels/{channelId}",
            parser: "channelPaidInfoParser",
            paramKey: "channelId",
            params: {
                fields: "yt:paidContent"
            }
        }, {
            name: "channelPaidInfoService",
            path: "/channels/{channelId}",
            parser: "channelPaidInfoParser",
            paramKey: "channelId",
            params: {
                fields: "yt:paidContent"
            }
        }, {
            name: "userSubscriptionsService",
            path: "/users/{userName}/subscriptions",
            parser: "subscriptionsParser",
            paramKey: "userName",
            params: {
                fields: "entry(id,yt:username,yt:channelId),openSearch:totalResults",
                "max-results": 50
            }
        }, {
            name: "userProfileService",
            path: "/users/{userName}",
            parser: "userProfileParser",
            paramKey: "userName",
            params: {
                fields: "yt:userId,yt:username,title,media:thumbnail,yt:statistics"
            }
        }, {
            name: "channelSuggestionService",
            path: "/users/{userName}/suggestion",
            parser: "channelSuggestionParser",
            paramKey: "userName",
            params: {
                fields: "entry",
                inline: !0,
                "max-results": 3
            }
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", f[g].parser, "paramKey", "params", "locale", f[g].altConstructor || Kg]);
        f = [{
            altConstructor: wj,
            listType: "RQ",
            name: "remoteQueueService",
            path: "/videos/batch",
            paramKey: null,
            params: {
                v: "2.1"
            }
        }, {
            altConstructor: Ml,
            listType: "SR",
            name: "searchService",
            path: "/videos",
            paramKey: "q",
            params: {
                fields: "title,logo,entry[$default-filter](title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaded,yt:uploaderId,media:credit,media:description)),openSearch:totalResults",
                "max-results": 50
            }
        }, {
            altName: "FL",
            listType: "FL",
            name: "userFavoritesService",
            path: "/users/{userName}/favorites",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            altName: "UU",
            listType: "UU",
            brandable: !0,
            name: "userUploadsService",
            path: "/users/{userName}/uploads",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            altName: "SF",
            listType: "SF",
            name: "videoService",
            path: "/standardfeeds/{regionId}/{feedName}",
            paramKey: "feedName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults",
                regionId: ""
            }
        }, {
            name: "newSubscriptionsService",
            listType: "SU",
            path: "/users/default/newsubscriptionvideos",
            paramKey: "noParamKeyRequired",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            altName: "ST",
            listType: "SF",
            name: "standardFeedService",
            path: "/standardfeeds/{regionId}/{feedName}",
            paramKey: "feedName",
            params: {
                time: "today",
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults",
                regionId: ""
            }
        }, {
            name: "activityService",
            listType: "AF",
            path: "/users/{userName}/events",
            parser: "activityParser",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[$inline-filter],openSearch:totalResults",
                inline: !0
            }
        }, {
            name: "riverService",
            listType: "HP",
            path: "/users/{userName}/river",
            parser: "activityParser",
            paramKey: "userName",
            params: {
                fields: "title,logo,entry[$inline-filter],openSearch:totalResults",
                inline: !0
            }
        }, {
            name: "playlistService",
            altName: "PL",
            listType: "PL",
            path: "/playlists/{playlistId}",
            paramKey: "playlistId",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            name: "relatedVideosService",
            listType: "RV",
            path: "/videos/{relatedId}/related",
            paramKey: "relatedId",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            name: "videoPlaybackInfoService",
            listType: "VI",
            path: "/videos/{videoId}",
            paramKey: "videoId",
            params: {
                fields: "title,yt:statistics,yt:hd,yt:claimed,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit)"
            }
        }, {
            name: "recommendedVideosService",
            listType: "RC",
            path: "/users/{userName}/recommendations",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            name: "watchLaterService",
            listType: "WL",
            path: "/users/{userName}/watch_later",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }, {
            name: "watchHistoryService",
            listType: "HL",
            path: "/users/{userName}/watch_history",
            paramKey: "userName",
            params: {
                fields: "author,title,logo,entry[$default-filter](author,title,yt:statistics,yt:hd,yt:claimed,yt:paidContent,yt:rating,media:group(yt:videoid,yt:duration,yt:uploaderId,yt:uploaded,media:credit,media:description)),openSearch:totalResults"
            }
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", "listType", "brandable", f[g].parser || "videoParser", "paramKey", "params", "locale", f[g].altConstructor || Ll]);
        f = [{
            name: "featuredService",
            path: "/leanback_ajax",
            parser: "featuredParser",
            paramKey: null,
            params: {
                action_featured: 1,
                client: "lb4",
                hl: ""
            }
        }, {
            altConstructor: Cj,
            name: "suggestionService",
            path: "/complete/search",
            parser: "videoParser",
            paramKey: "q",
            params: {}
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "cacheService", f[g].parser, "paramKey", "params", "locale", f[g].altConstructor || Jg]);
        f = [{
            name: "guideService",
            path: "/guide",
            parser: "guideParser",
            paramKey: "g",
            params: {}
        }, {
            name: "browseService",
            path: "/browse",
            parser: "browseParser",
            paramKey: "b",
            params: {}
        }, {
            name: "innerTubeSearchService",
            path: "/search",
            parser: "searchParser",
            paramKey: "q",
            params: {}
        }];
        g = 0;
        for (k = f.length; g < k; ++g)
            e(f[g], ["name", "path", "csiService", "ytHttp", "environmentModel", "authService", "cacheService", f[g].parser, "paramKey", "params", "locale", f[g].altConstructor || Vj]);
        [{
            name: "ytActiontile",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/tiles/action_tile.html",
            controller: Um
        }, {
            name: "ytAdvertisementcallout",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/advertisement_callout.html",
            controller: Vm
        }, {
            name: "ytApplication",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/app.html",
            controller: Wm
        }, {
            name: "ytBackgroundImage",
            restrict: "A",
            replace: !1,
            scope: !0,
            controller: Xm
        }, {
            name: "ytBrowse",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/browse.html",
            controller: Zm
        }, {
            name: "ytBrowserow",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/browse_row.html",
            controller: an
        }, {
            name: "ytButton",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/button.html",
            controller: bn
        }, {
            name: "ytCalltocast",
            restrict: "E",
            replace: !0,
            scope: !1,
            templateUrl: Q.g + "/call_to_cast.html",
            controller: cn
        }, {
            name: "ytClosedcaptions",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/dialogs/closed_captions.html",
            controller: gn
        }, {
            name: "ytDebug",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/debug.html",
            controller: hn
        }, {
            name: "ytDialog",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/dialogs/dialog.html",
            controller: ol
        }, {
            name: "ytFeedicon",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/feed_icon.html",
            controller: kn
        }, {
            name: "ytFlagoptions",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/dialogs/flag_options.html",
            controller: ln
        }, {
            name: "ytGrid",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/grid.html",
            controller: mn
        }, {
            name: "ytHelpfeedback",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/dialogs/help_and_feedback.html",
            controller: nn
        }, {
            name: "ytLettertile",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/letter_tile.html",
            controller: rn
        }, {
            name: "ytLettersuggestlist",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/list.html",
            controller: qn
        }, {
            name: "ytList",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/list.html",
            controller: Y
        }, {
            name: "ytMessage",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/message.html",
            controller: sn
        }, {
            name: "ytPerflog",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/perflog.html",
            controller: tn
        }, {
            name: "ytPostplaytile",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/tiles/post_play_tile.html",
            controller: un
        }, {
            name: "ytProgressbar",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/progress_bar.html",
            controller: vn
        }, {
            name: "ytRotatelist",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/list.html",
            controller: wn
        }, {
            name: "ytScrollpane",
            restrict: "A",
            replace: !1,
            scope: !0,
            controller: xn
        }, {
            name: "ytScrollbar",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/scrollbar.html",
            controller: yn
        }, {
            name: "ytToasts",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/toasts.html",
            controller: Cn
        }, {
            name: "ytVideotile",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/tiles/video_tile.html",
            controller: Gn
        }, {
            name: "ytTransliteration",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/transliteration.html",
            controller: Dn
        }, {
            name: "ytTransportcontrols",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/transport_controls.html",
            controller: En
        }, {
            name: "ytTransportcontrolslist",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/list.html",
            controller: Fn
        }, {
            name: "ytWatch",
            restrict: "E",
            replace: !1,
            scope: !0,
            templateUrl: Q.g + "/watch.html",
            controller: Hn
        }, {
            name: "ytWatchtitletray",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/watch_title_tray.html",
            controller: In
        }, {
            name: "ytWiigamepad",
            restrict: "E",
            replace: !0,
            scope: !0,
            templateUrl: Q.g + "/wii/game_pad.html",
            controller: $k
        }].forEach(function(b) {
            a.directive(b.name, function() {
                var a = {
                    restrict: b.restrict,
                    replace: b.replace,
                    scope: b.scope,
                    templateUrl: b.templateUrl,
                    controller: b.controller
                };
                "E" === b.restrict && (a.link = c);
                return a
            })
        });
        a.directive("ytFocusable", ["timeService", function(a) {
            return {
                restrict: "A",
                replace: !1,
                scope: !0,
                controller: S,
                link: function(b) {
                    a.setTimeout(function() {
                        c(b)
                    }, 0)
                }
            }
        }
        ]);
        a.directive("ytSearch", ["$injector", "environmentModel", function(a, b) {
            var e = {
                restrict: "E",
                replace: !1,
                scope: !0,
                controller: zn,
                templateUrl: Q.g + "/search.html",
                link: c
            };
            b.ye && (e.templateUrl = Q.g + "/search_bamboo.html",
            e.controller = An);
            return e
        }
        ]);
        a.directive("ytKeyboard", ["$injector", "locale", "environmentModel", function(a, b, e) {
            a = $;
            switch (b.Ma) {
            case "ja_JP":
                a = on;
                break;
            case "ko_KR":
                a = pn;
                break;
            case "zh_CN":
            case "zh_HK":
            case "zh_TW":
                a = fn
            }
            return e.supportsNativeOsk ? {
                restrict: "E",
                replace: !0,
                template: ""
            } : {
                restrict: "E",
                replace: !0,
                scope: !0,
                templateUrl: Q.g + "/keyboard.html",
                controller: a,
                link: c
            }
        }
        ]);
        a.directive("ytTilerow", ["environmentModel", function(a) {
            var b = dn
              , e = "/carousel.html";
            a.isLimitedGraphics && (b = $m,
            e = "/list.html");
            return {
                restrict: "E",
                replace: !0,
                scope: !0,
                templateUrl: Q.g + e,
                controller: b,
                link: c
            }
        }
        ]);
        a.value("xhrBackend", Sh);
        a.value("jsonpBackend", Jn)
    }
    ;ba("yt.tv.initializer", function(a) {
        var b = "start_browse";
        window.location.href.match(/[?&]v=[\w\+\/\-_=]+/) ? b = "start_watch" : window.location.href.match(/[?&]pairingCode=/) && (b = "start_dial");
        window.jstiming.load.name = b;
        if (b = cf("stickyLabel"))
            if (0 <= window.location.href.indexOf("stick=0&"))
                df("stickyLabel");
            else if (!window.location.href.match("label=")) {
                window.location.href = window.location.href.replace(/\?/, "?label=" + b + "&");
                return
            }
        Ah("goog.net.BrowserChannel").Hy(wh);
        a && (Q.Vq = a,
        Q.g = a + "/html",
        Q.$o = a + "/img");
        Ie = He = JSON.parse;
        O = JSON.stringify;
        jh.prototype.parse = function(a) {
            return JSON.parse(a)
        }
        ;
        window.requestAnimationFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                window.setTimeout(a, 16)
            }
        }();
        yj.value("applicationPath", a);
        b = angular.injector([yj.name]).get("locale");
        Rn(Q, b);
        var c = {
            lr: 0,
            dM: 0,
            complete: function() {
                if (this.lr <= ++this.dM) {
                    window.jstiming.load.tick("app_r");
                    var a = [];
                    0 <= Bb().indexOf("LeanbackShell") && a.push('<object id="devicePlugin" class="device-plugin" type="x-youtube/x-device"></object>');
                    0 <= Bb().indexOf("SmartHub") && (a.push('<object id="pluginObjectTV" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-TV"></object>'),
                    a.push('<object id="pluginObjectWindow" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-WINDOW"></object>'),
                    a.push('<object id="pluginObjectTVMW" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-TVMW"></object>'),
                    a.push('<object id="pluginObjectNNavi" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-NNAVI"></object>'),
                    a.push('<object id="pluginObjectNetwork" class="device-plugin" border=0 classid="clsid:SAMSUNG-INFOLINK-NETWORK"></object>'));
                    a.push('<div id="app-container">');
                    a.push("<yt:application></yt:application>");
                    a.push("</div>");
                    var b = document.getElementById("leanback");
                    angular.element(b).html(a.join(""));
                    angular.bootstrap(b, ["leanback-app"])
                }
            }
        };
        c.lr++;
        window.jstiming.load.tick("msg_rq");
        b.hM(w(Sn, window, c));
        "Steel" == m("environment.browser", window) && (a += "/api-compiled.js",
        c.lr++,
        window.jstiming.load.tick("yts_rq"),
        Dg(a).ei(function() {
            ytshell.ready(w(Tn, window, c))
        }).Fx(function() {
            c.complete()
        }))
    }, void 0);
    function Tn(a, b) {
        window.jstiming.load.tick("yts_r");
        null == m("environment.ytshell", window) && (window.environment.ytshell = b);
        a.complete()
    }
    function Sn(a) {
        window.jstiming.load.tick("msg_r");
        a.complete()
    }
    ;angular.module("leanback-templates", []).run(["$templateCache", function(a) {
        a.put(Q.g + "/advertisement_callout.html", '<div class="advertisement-overlay" style="display: none">  <div class="advertisement-tooltip">    [[Advertisement|Tooltip stating that the video currently playing is an advertisement.]]    (<span class="remaining_duration">&nbsp;</span>)  </div>  <div class="advertisement-callout">    <div class="time-left-label">      [[Your video will play in <span class="time-left">&nbsp;</span>s|Label preceeding the number of seconds countdown for when the currently playing ad will finish, and when the main video will begin.]]    </div>    <div class="skip-time-label" style="display: none">      [[You can skip to video in <span class="skip-time">&nbsp;</span>|Label preceeding the number of seconds before the user can skip the remainder of the ad and begin playing the main video.]]    </div>    <div class="thumbnail-container">      <div class="aspect-ratio-dummy"></div>      <div class="thumbnail"></div>    </div>  </div>  <div class="skip-ad-callout" style="display: none">    <span class="icon">&nbsp;</span>    <span class="label">[[Skip ad|Label indicating action that the user can take to skip the ad.]]</span>  </div></div>');
        a.put(Q.g + "/app.html", '<div id="app-markup">  <yt:watch id="watch" activate-when="focusable.elementIdEquals(application.activeChildName)" data="application.watchModel.currentVideo"></yt:watch>  <yt:browse id="browse" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:browse>  <yt:search id="search" activate-when="focusable.elementIdEquals(application.activeChildName)" query="application.searchQuery"></yt:search>  <yt:calltocast id="call-to-cast" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:calltocast>  <div class="logo-container"></div>  <div ng-include="application.legendTemplatePath" id="legend" class="legend"></div>  <yt:message id="message"></yt:message>  <div id="spinner-container" style="display: none;">    <div class="fallback-loading-indicator">[[LOADING...|Indicator that content is loading from the network.]]</div>    <div class="carousel-loading-indicator"></div>  </div>  <yt:debug id="debug-watermark"></yt:debug>  <yt:dialog id="dialog" activate-when="focusable.elementIdEquals(application.activeChildName)"></yt:dialog>  <yt:toasts data="application.getCurrentDialogType()"></yt:toasts></div>');
        a.put(Q.g + "/browse.html", '<div>  <yt:browserow id="browse-row" class="item"></yt:browserow>  <yt:rotatelist id="super-scroller" item-renderer="yt:feedicon" orientation="vertical"></yt:rotatelist>  <yt:scrollbar id="browse-scrollbar"></yt:scrollbar>  <div id="up-arrow" class="nav-arrow"></div>  <div id="down-arrow" class="nav-arrow"></div>  <div id="left-arrow" class="nav-arrow"></div>  <div id="right-arrow" class="nav-arrow"></div>  <div id="scroller-background"></div></div>');
        a.put(Q.g + "/browse_row.html", '<div class="browse-row"> <yt:tilerow id="tile-row" class="feed-row" item-renderer="browseRow.data.widgetName"></yt:tilerow></div>');
        a.put(Q.g + "/button.html", "<div></div>");
        a.put(Q.g + "/call_to_cast.html", '<div>  <h2 class="call-to-cast-text">[[Ready to watch?|Title of the instructions screen encouraging user to take action.]]</h2>  <h3 class="call-to-cast-text">[[Choose a YouTube video on your mobile device or laptop, then watch it here.|Steps to be taken on paired device such as phone, laptop or tablet, to trigger a playback on TV, acting as a screen.]]</h3></div>');
        a.put(Q.g + "/carousel.html", '<ul class="carousel">  \x3c!-- Item renderers inserted here by compile phase. --\x3e</ul>');
        a.put(Q.g + "/debug.html", "<h1></h1>");
        a.put(Q.g + "/delayed_image.html", '<img ng-src="{{imageUrl}}" />');
        a.put(Q.g + "/dialogs/authentication_error_info.html", "<div>[[Your account couldn't be accessed. Please sign in again or use a different account.|Error dialog that is shown when sign in credentials are no longer valid and user is automatically signed out]]</div>");
        a.put(Q.g + "/dialogs/closed_captions.html", '<div id="closed-captions-widget">  <yt:grid id="cc-languages" class="cc-list" item-renderer="yt:button" row-count="closedCaptions.rowCount"></yt:grid>  <h3 id="captions-not-available">[[Captions are not available for this video|Tooltip displayed when there is no subtitles available for this video.]]</h3>  <h3 id="captions-loading">[[Loading...|Tooltip displayed when some data is loading.]]</h3></div>');
        a.put(Q.g + "/dialogs/debug_info.html", '<div class="message"></div>');
        a.put(Q.g + "/dialogs/dialog.html", '<div>  <div id="dialog-wrapper">    <div class="dialog-icon"></div>    <div class="dialog-contents">      <div class="title"></div>      <div id="inner-dialog-container"></div>      <div class="buttons">        <div id="confirm-dialog-cancel-button" yt:focusable activate-when="focusable.elementIdEquals(dialog.activeChildName)"></div>        <div id="confirm-dialog-ok-button" yt:focusable activate-when="focusable.elementIdEquals(dialog.activeChildName)"></div>      </div>    </div>    <div ng-include="application.legendTemplatePath" id="dialog-legend" class="legend"></div>  </div></div>');
        a.put(Q.g + "/dialogs/eureka_authorization_info.html", '<div class="icon"></div><div class="info">  <div class="title">[[This video can\'t be played on this device.|Informs the user that this video can\'t be played on this device.]]</div>  <div class="message">    [[Please choose another video.|Informs the user to please choose another video for playback.]]  </div></div>');
        a.put(Q.g + "/dialogs/eureka_player_error_info.html", '<div class="icon"></div><div class="info">  <div class="title">[[There was an error playing this video.|Informs the user of a video playback error.]]</div>  <div class="message">    [[Please choose another video.|Informs the user to please choose another video for playback.]]  </div></div>');
        a.put(Q.g + "/dialogs/flag_claim.html", '<div class="flag-claim">  <div class="metadata">    <span class="text"></span>    <div class="url"></div>  </div>  <div class="copyright-infringment">    [[<div class="subtitle">Infringes my copyright</div> youtube.com/t/dmca_policy <div class="email">or email</div> copyright@youtube.com|Provides a way, via email or web site, to claim that a video infringes the current user\'s copyright.]]  </div>  <div class="privacy-invasion">    [[<div class="subtitle">Invades my privacy</div> youtube.com/t/privacy_guidelines|Provides a way to claim, via email or web site, that a given video invades the current user\'s privacy.]]  </div></div>');
        a.put(Q.g + "/dialogs/flag_options.html", '<div class="flag-list-container">  <yt:list class="flag-list" data="flag.flagData[0]" item-renderer="yt:button" activate-when="flag.activeIndexEquals(0)" active-index="flag.activeItemIndex"></yt:list>  <yt:list class="flag-list" data="flag.flagData[1]" item-renderer="yt:button" activate-when="flag.activeIndexEquals(1)" active-index="flag.activeItemIndex"></yt:list></div>');
        a.put(Q.g + "/dialogs/flag_video.html", '<div class="flag-video">  [[Visit this video on your computer or laptop and click the flag icon to submit a claim:|Provides a URL which a user can access in order to flag the video as inappropriate. Followed by actual URL.]]  <span class="url"></span></div><div class="flag-example"></div>');
        a.put(Q.g + "/dialogs/help_and_feedback.html", '<div>  <div class="box">[[On your phone or tablet, go to: <a class="base-url"></a>|Explanation on how to access help and feedback web pages.]]</div>  <div class="box">[[Or scan: <br><img class="qr" />|Explains alternative way of accessing help and feedback pages by scanning QR code.]]</div></div>');
        a.put(Q.g + "/dialogs/kenko_warning.html", '\x3c!--  Kenko is a health warning required for PS3 devices licensed in JAPAN.  - The first warning is about flashing lights and seizures.  - The second warning is about fatigue and pain.  - The third warning is about limiting exposure of young children to 3D content.  - The last warning is about sleep deprivation.//--\x3e<div>  <div id="kenko">    <div>      <p><div class="warning"></div>\u8b66\u544a</p>      <p>\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u5f15\u304d\u8d77\u3053\u3055\u308c\u308b\u767a\u4f5c\u306b\u3064\u3044\u3066</p>      <p>\u70b9\u6ec5\u3092\u7e70\u308a\u8fd4\u3059\u753b\u9762\u3084\u3001\u305d\u306e\u4ed6\u306e\u5149\u306e\u523a\u6fc0\u306b\u3088\u3063\u3066\u3001\u307e\u308c\u306b\u3001\u76ee\u306e\u75db\u307f\u3001\u8996\u899a\u7570\u5e38\u3001\u504f\u982d\u75db\u3001\u3051\u3044\u308c\u3093\u3084\u610f\u8b58\u969c\u5bb3\uff08\u5931\u795e\u306a\u3069\uff09\u306a\u3069\u306e\u75c7\u72b6\uff08\u5149\u611f\u53d7\u6027\u767a\u4f5c\uff09\u304c\u8d77\u304d\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3046\u3057\u305f\u75c7\u72b6\u306e\u3042\u308b\u65b9\u306f\u3001\u4e8b\u524d\u306b\u5fc5\u305a\u533b\u5e2b\u306b\u76f8\u8ac7\u3057\u3066\u304f\u3060\u3055\u3044</p>    </div>    <div>      <p><div class="warning"></div>\u6ce8\u610f</p>      <p>\u3053\u3093\u306a\u3068\u304d\u306f\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3059\u308b</p>      <p>\u4e0a\u8a18\u306e\u75c7\u72b6\u306b\u52a0\u3048\u3001\u982d\u75db\u3001\u3081\u307e\u3044\u3001\u5410\u304d\u6c17\u3001\u75b2\u52b4\u611f\u3001\u4e57\u308a\u7269\u9154\u3044\u306b\u4f3c\u305f\u75c7\u72b6\u306a\u3069\u3092\u611f\u3058\u305f\u3068\u304d\u3084\u3001\u76ee\u3001\u8033\u3001\u624b\u3001\u8155\u3001\u8db3\u306a\u3069\u3001\u8eab\u4f53\u306e\u4e00\u90e8\u306b\u4e0d\u5feb\u611f\u3084\u75db\u307f\u3092\u611f\u3058\u305f\u3068\u304d\u306f\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30d7\u30ec\u30a4\u3092\u4e2d\u6b62\u3057\u3066\u3082\u6cbb\u3089\u306a\u3044\u3068\u304d\u306f\u3001\u533b\u5e2b\u306e\u8a3a\u5bdf\u3092\u53d7\u3051\u3066\u304f\u3060\u3055\u3044\u3002</p>    </div>    <div>      <p>3D\u6620\u50cf\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u306b\u3064\u3044\u3066</p>    3D\u6620\u50cf\u306e\u898b\u3048\u65b9\u306b\u306f\u500b\u4eba\u5dee\u304c\u3042\u308a\u307e\u3059\u3002\u9055\u548c\u611f\u3092\u611f\u3058\u305f\u308a\u3001\u7acb\u4f53\u306b\u898b\u3048\u306a\u3044\u5834\u5408\u306f\u30013D\u6a5f\u80fd\u306e\u3054\u4f7f\u7528\u3092\u304a\u63a7\u3048\u304f\u3060\u3055\u3044\u3002\u6700\u65b0\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u4e0b\u8a18URL\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002    http://www.jp.playstation.com/support/</p>      <p>\u306a\u304a\u3001\u304a\u5b50\u3055\u307e\uff08\u7279\u306b6\u6b73\u672a\u6e80\u306e\u5b50\uff09\u306e\u8996\u899a\u306f\u767a\u9054\u6bb5\u968e\u306b\u3042\u308a\u307e\u3059\u3002\u304a\u5b50\u3055\u307e\u304c3D\u6620\u50cf\u3092\u8996\u8074\u3057\u305f\u308a\u30013D\u7acb\u4f53\u8996\u30b2\u30fc\u30e0\u3092\u30d7\u30ec\u30a4\u3059\u308b\u524d\u306b\u3001\u5c0f\u5150\u79d1\u3084\u773c\u79d1\u306a\u3069\u306e\u533b\u5e2b\u306b\u3054\u76f8\u8ac7\u3044\u305f\u3060\u304f\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002</p>    </div>    <div>      <p>\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306e\u632f\u52d5\u6a5f\u80fd\u306b\u5bfe\u5fdc\u3057\u305f\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306b\u3064\u3044\u3066</p>      <p>\u632f\u52d5\u969c\u5bb3\u306e\u3042\u308b\u65b9\u306f\u3001\u30d0\u30a4\u30d6\u30ec\u30fc\u30b7\u30e7\u30f3\uff08\u632f\u52d5\uff09\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002</p>      <p>\u203b\u632f\u52d5\u6a5f\u80fd\u306e\u5165\uff0f\u5207\u306f\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30e9\u306ePS\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u8868\u793a\u3055\u308c\u308b\u30e1\u30cb\u30e5\u30fc\u304b\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002</p>    </div>    <div>      <ul class="ul">        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u3001\u90e8\u5c4b\u3092\u660e\u308b\u304f\u3057\u3001\u3067\u304d\u308b\u3060\u3051\u753b\u9762\u304b\u3089\u96e2\u308c\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u75b2\u308c\u3066\u3044\u308b\u3068\u304d\u3084\u7761\u7720\u4e0d\u8db3\u306e\u3068\u304d\u306f\u3001\u30d7\u30ec\u30a4\u3092\u907f\u3051\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u3059\u308b\u3068\u304d\u306f\u5065\u5eb7\u306e\u305f\u3081\u30011\u6642\u9593\u3054\u3068\u306b15\u5206\u7a0b\u5ea6\u306e\u4f11\u61a9\u3092\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002</li>        <li>\u30d7\u30ec\u30a4\u4e2d\u306b\u4f53\u8abf\u304c\u60aa\u304f\u306a\u3063\u305f\u3089\u3001\u3059\u3050\u306b\u30d7\u30ec\u30a4\u3092\u3084\u3081\u3066\u304f\u3060\u3055\u3044\u3002</li>      </ul>    </div>  </div></div>');
        a.put(Q.g + "/dialogs/logout_info.html", '<div>  <div class="logout-authenticated-info">    <div class="login-user-icon"></div>    <div class="login-user-info">      <h3 class="display-name"></h3>      <div class="platform-container">        <div class="platform-user-icon"></div>        <span class="platform-user-name"></span>      </div>      <div class="signed-in-message"></div>    </div>  </div></div>');
        a.put(Q.g + "/dialogs/network_error_info.html", "<div>[[A network error has occurred. Please check your network connection.|Dialog subtitle telling user that a network error has occurred, and asking the user to check their network connection]]</div>");
        a.put(Q.g + "/dialogs/paid_channel_info.html", '<div class="paid-channel-info">[[This is a paid channel, which requires a recurring subscription payment to view the content. To find out more about this channel visit <span class="channel-url"></span> on your computer.|Message that is displayed when user tries to subscribe to a paid channel.]]</div>');
        a.put(Q.g + "/dialogs/paid_scope.html", "<div>[[View and manage your rental and purchase history. Please note: This means your rental and purchase history may be displayed and accessible on this device.|This is a dialog subtitle that list a permission that the application is requesting.]]</div>");
        a.put(Q.g + "/dialogs/player_error_info.html", '<span class="player-error"></span>');
        a.put(Q.g + "/dialogs/remote_reset_info.html", '<div class="connected-list">  <div class="connected-header">[[Paired Devices|Tooltip showing status of paired devices, connected to the application or not.]]</div>  <ul class="devices"></ul></div><span class="reset-help">[[Selecting \'OK\' will disconnect all paired devices.|Tooltip displayed when a user is going to disconnect her mobile device from the application.]]</span>');
        a.put(Q.g + "/dialogs/scrollable_dialog.html", '<div yt-scrollpane activate-when="dialog.isActive" class="scrolling-text" ng-include="dialog.data.contentUrl"></div><yt:scrollbar id="dialog-scrollbar"></yt:scrollbar>');
        a.put(Q.g + "/dialogs/shiyojo_warning.html", '\x3c!--  Shiyojo is a warning required for PS3 devices licensed in Japan.  - This is a PS3 only app.  - When displayed in a TV other than an LCD TV an afterimage may be burned  into the device if the game/app is left paused for too long.//--\x3e<div id="shiyojo">  <ul>    <li>\u3053\u306e\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306fPlayStation&#174;3\u5c02\u7528\u3067\u3059\u3002</li>    <li>PlayStation&#174;3\u3092\u30d7\u30e9\u30ba\u30de\u30c6\u30ec\u30d3\u3084\u3001\u6db2\u6676\u65b9\u5f0f\u4ee5\u5916\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30b7\u30e7\u30f3\u30c6\u30ec\u30d3\uff08\u30b9\u30af\u30ea\u30fc\u30f3\u6295\u5f71\u65b9\u5f0f\u30c6\u30ec\u30d3\uff09\u306b\u3064\u306a\u3050\u3068\u3001\u753b\u50cf\u306e\u713c\u304d\u4ed8\u304d\uff08\u6b8b\u50cf\u6620\u50cf\uff09\u304c\u8d77\u3053\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u7279\u306b\u3001\u9759\u6b62\u753b\u3092\u30c6\u30ec\u30d3\u753b\u9762\u306b\u8868\u793a\u3057\u305f\u307e\u307e\u9577\u6642\u9593\u653e\u7f6e\u3059\u308b\u3068\u3001\u713c\u304d\u4ed8\u304d\u304c\u8d77\u3053\u308a\u3084\u3059\u304f\u306a\u308a\u307e\u3059\u3002</li>    <li>PlayStation&#174;3\u306e\u30b7\u30b9\u30c6\u30e0\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u306f\u3001\u5e38\u306b\u6700\u65b0\u306e\u3082\u306e\u306b\u30d0\u30fc\u30b8\u30e7\u30f3\u30a2\u30c3\u30d7\u3057\u3066\u304a\u4f7f\u3044\u304f\u3060\u3055\u3044\u3002</li>  </ul>  <div class="small-print">    "<div class="playstation-logo"></div>", "PlayStation", "<div class="ps3-logo"></div>", "PSN logo", "DUALSHOCK" and "SIXAXIS" are registered trademarks of Sony Computer Entertainment Inc.    <p>"XMB" and "\u30af\u30ed\u30b9\u30e1\u30c7\u30a3\u30a2\u30d0\u30fc" are trademarks of Sony Corporation and Sony Computer Entertainment Inc.</p>    <p>Library programs &#169;Sony Computer Entertainment Inc.</p>    "<div class="playstation-logo"></div>"&#169;1994 Sony Computer Entertainment Inc.</p>  <div></div>');
        a.put(Q.g + "/dialogs/signed_out_info.html", "<div>  [[You have been signed out by the application.|Message that tells the user that they have been signed out by the application]]</div><div>  [[Would you like to sign in again?|Message that asks the user if they would like to sign in again]]</div>");
        a.put(Q.g + "/dialogs/simple_dialog.html", '<div ng-include="dialog.data.contentUrl"></div>');
        a.put(Q.g + "/dialogs/tos_info.html", "<div>[[To view the Terms of Service go to:|Dialog subtitle telling user to go to the following URL to view youtube terms of service.]]</div><div class='url'>http://www.youtube.com/terms</div><div>[[To view the Privacy Policy go to:|Dialog subtitle telling user to go to the following URL to view youtube privacy policy document]]</div><div class='url'>http://www.youtube.com/privacy</div>");
        a.put(Q.g + "/feed_icon.html", '<div class="feed-icon">  <div class="icon"></div>  <h2></h2></div>');
        a.put(Q.g + "/grid.html", '<div class="grid-content"></div>');
        a.put(Q.g + "/keyboard.html", '<div>  <div id="transliteration-container">    <yt:transliteration id="transliteration" lang-code-pair="keyboard.langCodePair"></yt:transliteration>  </div>  <yt:grid id="keyboard-grid" item-renderer="yt:lettertile" loop="true" consume-keys="!keyboard.isLetterSuggestVisible()" repeat-rate="keyboard.getKeyRepeatRate()"></yt:grid>  <yt:lettersuggestlist id="letter-suggest" class="letter-suggest" item-renderer="yt:lettertile" orientation="vertical"></yt:lettersuggestlist></div>');
        a.put(Q.g + "/legend.html", '<div class="more"><span class="icon dpad-down"></span><span class="title">[[More|A button that shows more content in the application.]]</span></div><div class="back"><span class="icon"></span><span class="title">[[Back|A button that navigates to the previous screen a user has visited.]]</span></div><div class="reversed-back"><span class="icon cross"></span><span class="title">[[Back|A button that navigates to the previous screen a user has visited.]]</span></div><div class="search"><span class="icon"></span><span class="title">[[Search|Clicking this launches the search interface.]]</span></div><div class="home"><span class="icon"></span><span class="title">[[Home|Clicking this navigates to the main screen.]]</span></div><div class="delete"><span class="icon"></span><span class="title">[[Delete|A button that deletes a video from a user\'s playlist.]]</span></div>');
        a.put(Q.g + "/letter_tile.html", "<li></li>");
        a.put(Q.g + "/list.html", '<div class="list-content"></div>');
        a.put(Q.g + "/message.html", "<div></div>");
        a.put(Q.g + "/perflog.html", "<ul></ul>");
        a.put(Q.g + "/progress_bar.html", '<div>  <div class="player-seek-buffer"></div>  <div class="player-seek-active"></div></div>');
        a.put(Q.g + "/rolling_toast.html", '<div class="toast">  <div class="toast-container">    <div class="toast-icon">&nbsp;</div>    <div class="toast-progress">      <div class="progress">&nbsp;</div>    </div>    <div class="toast-msg"></div>  </div></div>');
        a.put(Q.g + "/scrollbar.html", '<div class="scrollbar">  <div class="handle"></div></div>');
        a.put(Q.g + "/search.html", '<div class="controls">  <div id="search-text-box">    <input id="search-input" autocomplete="off" yt:focusable placeholder="[[Search...|Placeholder indicating that a user can start searching within a text box]]"/>    <span id="search-query"></span>  </div>  <div id="search-suggestions" class="$suggestions"></div>  <yt:keyboard id="search-keyboard"></yt:keyboard></div><div class="search-pairing">  <div class="search-message">    <div class="title">[[Search Faster|Search pairing hint title]]</div>    [[Find videos with your mobile device or laptop and watch them here.|Search pairing hint that you can search on the remote and play on the TV screen.]]  </div>  <div class="$pairing"></div></div>');
        a.put(Q.g + "/search_bamboo.html", '<div class="controls">  <div id="search-text-box">    <span id="search-query" yt:focusable></span>    <span id="search-query-cursor"></span>  </div></div>');
        a.put(Q.g + "/tiles/action_tile.html", "<div></div>");
        a.put(Q.g + "/tiles/post_play_tile.html", '<div>  <div class="post-play-title">    <span class="default-title">[[You may also like...|Label informing the user that they may enjoy these videos.]]</span>    <span class="next-up-title">[[Next up in <span class="row-title"></span>|Informs the user of the next video that will play in this playlist. This is followed by the title of the playlist.]]</span>  </div>  <yt:videoTile></yt:videoTile>  <div class="post-play-countdown">0</div></div>');
        a.put(Q.g + "/tiles/video_tile.html", '<div>  <div class="top">    <div class="video-thumb"></div>    <div class="duration"></div>  </div>  <div class="bottom">    <div class="title"></div>    <div class="overlay">      [[Published on <span class="updated"></span> by <span class="name"></span>|Label that represents the date when a video was uploaded.]]    </div>    <div class="details">      <div class="activity"></div>      <div class="description"></div>    </div>    <div class="set">      <span class="title">&nbsp;</span>      <span class="count">&nbsp;</span>    </div>  </div></div>');
        a.put(Q.g + "/toasts.html", '<div id="toast">  <div class="toasts"></div></div>');
        a.put(Q.g + "/transliteration.html", '<div>  <yt:list id="transliteration" orientation="horizontal" item-renderer="yt:lettertile" loop="true"></yt:list></div>');
        a.put(Q.g + "/transport_controls.html", '<div id="player-controls-container">  <div class="player-controls-widget">    <div class="player-controls-border"></div>    <div class="button-tooltip"></div>    <yt:transportcontrolslist id="player-controls" class="player-controls" orientation="horizontal" paging="false"></yt:transportcontrolslist>    <div class="player-seekbar">      <yt:progressbar id="progress-bar"></yt:progressbar>      <div class="player-time-elapsed"></div>      <div class="player-time-total"></div>    </div>  </div></div>');
        a.put(Q.g + "/watch.html", '<div id="leanback-player-container"></div><yt:watchtitletray id="watch-title" activate-when="watch.isTitleMode()"></yt:watchtitletray><div id="eureka-player-controls-container">  <div id="eureka-player-controls"></div></div><yt:transportcontrols activate-when="watch.isTransportActive()"></yt:transportcontrols><yt:advertisementcallout id="ad-callout"></yt:advertisementcallout><div id="branding-container">  <div class="branding-element">    <div id="branding-banner">      <img id="branding-banner-image" />      <div id="branding-banner-overlay">[[Up Next|Message indicating what video is coming next.]]</div>    </div>  </div>  <img id="branding-watermark" class="branding-element" /></div>');
        a.put(Q.g + "/watch_title_tray.html", '<div class="title-card">  <div class="player-meta">    <div class="player-video-avatar">      <img />    </div>    <div class="player-video-title">&nbsp;</div>    <div class="player-video-details">      <div class="username">&nbsp;</div>      <div class="set-context">&nbsp;</div>      <div class="uploaded-date"></div>      <div class="view-count"><span>[[Views:|VIEWS]] </span><span class="view-count-label"></span></div>    </div>  </div></div>');
        a.put(Q.g + "/wii/game_pad.html", '<div id="drc-widget" ng-show="data" ng-class="application.applicationStyles">  <div id="media-details">    <div id="drc-title">      <h2 class="no-select">[[Active Video|A page title that refers to a focused, selected or playing video.]]</h2>    </div>    <div id="drc-content">      <div>        <div class="left" yt-background-image="data.imageUrl"></div>        <div class="right">          <div id="view-count">{{data.viewCountLabel}}</div>          <div class="likes-dislikes-bar">            <div class="likes-bar" ng-style="data.likesStyle"></div>            <div class="dislikes-bar" ng-style="data.dislikesStyle"></div>          </div>          <div id="likes-label">{{data.likesLabel}}<span class="label">[[likes|A label describing the number of YouTube likes.]]</span></div>          <div id="dislikes-label">{{data.dislikesLabel}}<span class="label">[[dislikes|A label describing the number of YouTube dislikes.]]</span></div>        </div>        <div class="center">          <div id="video-title" class="title">{{data.title}}</div>          <div id="uploaded-by" class="uploader">{{data.channel.displayName}}</div>          <div id="uploaded-at" class="uploaded-at">{{data.uploadedDateLabel}}</div>          <div id="video-description" class="description">{{data.description}}</div>        </div>      </div>    </div>    <div id="drc-footer"></div>  </div></div>');
        a.put(Q.g + "/wii/game_pad_shell.html", "<!DOCTYPE html><html><head>  <title>YouTube</title>  \x3c!-- TODO(lbayes): Extract CSS to a separate file. --\x3e  <style>    @font-face {      font-family: 'roboto-condensed-regular';      /** NOTE(lbayes): Removed local() declarations. These fail on Wii U */      src: url('../../img/RobotoCondensed-Regular.ttf') format('truetype');    }    body, html {      background-color: #fff;      font-family: 'roboto-condensed-regular', arial, sans-serif;      font-size: 100%;      margin: auto;      padding: 0;      overflow: hidden;    }    #logo {      background-position: center center;      background-repeat: no-repeat;      background-image: url(data:image/gif;base64,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);      height: 100%;      left: 0;      position: absolute;      top: 0;      width: 100%;      z-index: 0;    }    body > div {      -webkit-overflow-scrolling: auto;    }    h1, h2, h3, h4 {      font-weight: bold;      margin: 0;      padding: 0;    }    .ng-binding, .no-select {      -webkit-touch-callout: none;      -webkit-user-select: none;      user-select: none;    }    #drc {      height: 100%;      position: absolute;      width: 100%;    }    #drc-title {      background: rgba(230, 230, 230, 1);      color: rgba(102, 102, 102, 1);      height: 10%;      text-align: center;      text-shadow: 0 2px 0 rgba(250, 250, 250, 1);    }    #drc-title > div {      height: 100%;    }    #drc-title h2 {      border-bottom: 1px solid #aaa;      box-shadow: 0px 0px 20pt #CCC;      font-size: 120%;      font-weight: normal;      padding: 1.2% 0 1.2%;      text-align: center;    }    #drc-content {      height: 70%;      width: 100%;    }    #drc-footer {      height: 20%;      width: 100%;    }    #drc-content > div {      position: absolute;      width: 100%;      top: 4.5em;    }    #drc-content > div > div {      position: relative;    }    #drc-content .left {      background-position: center;      background-repeat: no-repeat;      background-size: 100%;      border: 1px solid #ccc;      font-size: 92%;      height: 7.2em;      left: 3%;      position: absolute;      width: 12.8em;    }    #drc-content .center {      margin: 0 auto;      width: 46%;    }    #drc-content .center .title {      font-size: 240%;      font-weight: 300;    }    #drc-content .center .uploader {      color: rgba(133, 0, 0, .9);      font-size: 150%;      margin-top: 5%;    }    #drc-content .center .uploaded-at {      font-size: 104%;    }    #drc-content .center .description {      color: rgb(102, 102, 102);      font-size: 100%;      font-weight: normal;      margin: 10% 0;    }    #drc-content .right {      position: absolute;      right: 3%;      top: 5%;      width: 20%;    }    #view-count {      font-size: 150%;      text-align: right;    }    #drc-content .right .likes-dislikes-bar {      height: .4em;      margin-bottom: .2em;      width: 100%;    }    #drc-content .right .likes-bar {      background: rgba(68, 110, 34, 1);      float: left;      height: 100%;      top: 0;    }    #drc-content .right .dislikes-bar {      background: rgba(102, 102, 102, .2);      float: right;      height: 100%;    }    #likes-label {      float: left;      font-size: 150%;      font-weight: 300;      text-transform: uppercase;    }    #dislikes-label {      float: right;      font-size: 140%;      font-weight: 300;      text-align: right;      text-transform: uppercase;    }    #drc-content .right .label {      display: block;      font-size: 60%;    }    #media-details {      display: block;    }    #spinner {      background-position: center center;      background-repeat: no-repeat;      background-image: url(data:image/gif;base64,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);      width: 100px;      height: 100px;      bottom: 1em;      right: 1em;      position: absolute;    }  </style></head><body>  <yt:wiigamepad></yt:wiigamepad>  <div ng-hide=\"data || isOskVisible\">    <div id=\"logo\"></div>    <div id=\"spinner\" ng-hide=\"hasLoadedOnce\"></div>  </div></body></html>")
    }
    ]);
}
)();
