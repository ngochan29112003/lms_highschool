/**
 * @license
 * lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;
(function () {
    function t(t, n) {
        return t.set(n[0], n[1]), t
    }
    function n(t, n) {
        return t.add(n), t
    }
    function r(t, n, r) {
        switch (r.length) {
            case 0:
                return t.call(n);
            case 1:
                return t.call(n, r[0]);
            case 2:
                return t.call(n, r[0], r[1]);
            case 3:
                return t.call(n, r[0], r[1], r[2])
        }
        return t.apply(n, r)
    }
    function e(t, n, r, e) {
        for (var u = -1, o = t ? t.length : 0; ++u < o; ) {
            var i = t[u];
            n(e, i, r(i), t)
        }
        return e
    }
    function u(t, n) {
        for (var r = -1, e = t ? t.length : 0; ++r < e && false !== n(t[r], r, t); )
            ;
        return t
    }
    function o(t, n) {
        for (var r = t ? t.length : 0; r-- && false !== n(t[r], r, t); )
            ;
        return t
    }
    function i(t, n) {
        for (var r = -1, e = t ? t.length : 0; ++r < e; )
            if (!n(t[r], r, t))
                return false;
        return true
    }
    function f(t, n) {
        for (var r = -1, e = t ? t.length : 0, u = 0, o = []; ++r < e; ) {
            var i = t[r];
            n(i, r, t) && (o[u++] = i)
        }
        return o
    }
    function c(t, n) {
        return!(!t || !t.length) && -1 < d(t, n, 0)
    }
    function a(t, n, r) {
        for (var e = -1, u = t ? t.length : 0; ++e < u; )
            if (r(n, t[e]))
                return true;
        return false
    }
    function l(t, n) {
        for (var r = -1, e = t ? t.length : 0, u = Array(e); ++r < e; )
            u[r] = n(t[r], r, t);
        return u
    }
    function s(t, n) {
        for (var r = -1, e = n.length, u = t.length; ++r < e; )
            t[u + r] = n[r];
        return t
    }
    function h(t, n, r, e) {
        var u = -1, o = t ? t.length : 0;
        for (e && o && (r = t[++u]); ++u < o; )
            r = n(r, t[u], u, t);
        return r
    }
    function p(t, n, r, e) {
        var u = t ? t.length : 0;
        for (e && u && (r = t[--u]); u--; )
            r = n(r, t[u], u, t);
        return r
    }
    function _(t, n) {
        for (var r = -1, e = t ? t.length : 0; ++r < e; )
            if (n(t[r], r, t))
                return true;
        return false
    }
    function v(t, n, r) {
        var e;
        return r(t, function (t, r, u) {
            return n(t, r, u) ? (e = r, false) : void 0
        }), e
    }
    function g(t, n, r, e) {
        var u = t.length;
        for (r += e?1: - 1; e?r--:++r < u; )
            if (n(t[r], r, t))
                return r;
        return-1
    }
    function d(t, n, r) {
        if (n !== n)
            return M(t, r);
        --r;
        for (var e = t.length; ++r < e; )
            if (t[r] === n)
                return r;
        return-1
    }
    function y(t, n, r, e) {
        --r;
        for (var u = t.length; ++r < u; )
            if (e(t[r], n))
                return r;
        return-1
    }
    function b(t, n) {
        var r = t ? t.length : 0;
        return r ? w(t, n) / r : V
    }
    function x(t, n, r, e, u) {
        return u(t, function (t, u, o) {
            r = e ? (e = false, t) : n(r, t, u, o)
        }), r
    }
    function j(t, n) {
        var r = t.length;
        for (t.sort(n); r--; )
            t[r] = t[r].c;
        return t
    }
    function w(t, n) {
        for (var r, e = -1, u = t.length; ++e < u; ) {
            var o = n(t[e]);
            o !== T && (r = r === T ? o : r + o)
        }
        return r
    }
    function m(t, n) {
        for (var r = -1, e = Array(t); ++r < t; )
            e[r] = n(r);
        return e
    }
    function A(t, n) {
        return l(n, function (n) {
            return[n, t[n]];
        })
    }
    function O(t) {
        return function (n) {
            return t(n)
        }
    }
    function k(t, n) {
        return l(n, function (n) {
            return t[n]
        })
    }
    function E(t, n) {
        return t.has(n)
    }
    function S(t, n) {
        for (var r = -1, e = t.length; ++r < e && - 1 < d(n, t[r], 0); )
            ;
        return r
    }
    function I(t, n) {
        for (var r = t.length; r-- && - 1 < d(n, t[r], 0); )
            ;
        return r
    }
    function R(t) {
        return t && t.Object === Object ? t : null
    }
    function W(t) {
        return zt[t]
    }
    function B(t) {
        return Ut[t]
    }
    function L(t) {
        return"\\" + Dt[t]
    }
    function M(t, n, r) {
        var e = t.length;
        for (n += r ? 1 : -1; r ? n-- : ++n < e; ) {
            var u = t[n];
            if (u !== u)
                return n
        }
        return-1;
    }
    function C(t) {
        var n = false;
        if (null != t && typeof t.toString != "function")
            try {
                n = !!(t + "")
            } catch (r) {
            }
        return n
    }
    function z(t) {
        for (var n, r = []; !(n = t.next()).done; )
            r.push(n.value);
        return r
    }
    function U(t) {
        var n = -1, r = Array(t.size);
        return t.forEach(function (t, e) {
            r[++n] = [e, t]
        }), r
    }
    function $(t, n) {
        for (var r = -1, e = t.length, u = 0, o = []; ++r < e; ) {
            var i = t[r];
            i !== n && "__lodash_placeholder__" !== i || (t[r] = "__lodash_placeholder__", o[u++] = r)
        }
        return o
    }
    function D(t) {
        var n = -1, r = Array(t.size);
        return t.forEach(function (t) {
            r[++n] = t
        }), r
    }
    function F(t) {
        var n = -1, r = Array(t.size);
        return t.forEach(function (t) {
            r[++n] = [t, t]
        }), r
    }
    function N(t) {
        if (!t || !Wt.test(t))
            return t.length;
        for (var n = It.lastIndex = 0; It.test(t); )
            n++;
        return n
    }
    function P(t) {
        return $t[t]
    }
    function Z(R) {
        function At(t, n) {
            return R.setTimeout.call(Kt, t, n)
        }
        function Ot(t) {
            if (Te(t) && !yi(t) && !(t instanceof Ut)) {
                if (t instanceof zt)
                    return t;
                if (Wu.call(t, "__wrapped__"))
                    return ae(t)
            }
            return new zt(t)
        }
        function kt() {
        }
        function zt(t, n) {
            this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0,
                    this.__values__ = T
        }
        function Ut(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
        }
        function $t(t) {
            var n = -1, r = t ? t.length : 0;
            for (this.clear(); ++n < r; ) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }
        function Dt(t) {
            var n = -1, r = t ? t.length : 0;
            for (this.clear(); ++n < r; ) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }
        function Pt(t) {
            var n = -1, r = t ? t.length : 0;
            for (this.clear(); ++n < r; ) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }
        function Zt(t) {
            var n = -1, r = t ? t.length : 0;
            for (this.__data__ = new Pt; ++n < r; )
                this.add(t[n])
        }
        function qt(t) {
            this.__data__ = new Dt(t)
        }
        function Vt(t, n, r, e) {
            return t === T || Ce(t, ku[r]) && !Wu.call(e, r) ? n : t
        }
        function Jt(t, n, r) {
            (r === T || Ce(t[n], r)) && (typeof n != "number" || r !== T || n in t) || (t[n] = r)
        }
        function Yt(t, n, r) {
            var e = t[n];
            Wu.call(t, n) && Ce(e, r) && (r !== T || n in t) || (t[n] = r)
        }
        function Ht(t, n) {
            for (var r = t.length; r--; )
                if (Ce(t[r][0], n))
                    return r;
            return-1
        }
        function Qt(t, n, r, e) {
            return Ao(t, function (t, u, o) {
                n(e, t, r(t), o)
            }), e
        }
        function Xt(t, n) {
            return t && sr(n, iu(n), t)
        }
        function tn(t, n) {
            for (var r = -1, e = null == t, u = n.length, o = Array(u); ++r < u; )
                o[r] = e ? T : uu(t, n[r]);
            return o
        }
        function nn(t, n, r) {
            return t === t && (r !== T && (t = r >= t ? t : r), n !== T && (t = t >= n ? t : n)), t
        }
        function rn(t, n, r, e, o, i, f) {
            var c;
            if (e && (c = i ? e(t, o, i, f) : e(t)), c !== T)
                return c;
            if (!Ze(t))
                return t;
            if (o = yi(t)) {
                if (c = Kr(t), !n)
                    return lr(t, c)
            } else {
                var a = qr(t), l = "[object Function]" == a || "[object GeneratorFunction]" == a;
                if (bi(t))
                    return or(t, n);
                if ("[object Object]" == a || "[object Arguments]" == a || l && !i) {
                    if (C(t))
                        return i ? t : {};
                    if (c = Gr(l ? {} : t),
                            !n)
                        return hr(t, Xt(c, t))
                } else {
                    if (!Ct[a])
                        return i ? t : {};
                    c = Jr(t, a, rn, n)
                }
            }
            if (f || (f = new qt), i = f.get(t))
                return i;
            if (f.set(t, c), !o)
                var s = r ? gn(t, iu, Tr) : iu(t);
            return u(s || t, function (u, o) {
                s && (o = u, u = t[o]), Yt(c, o, rn(u, n, r, e, o, t, f))
            }), c
        }
        function en(t) {
            var n = iu(t), r = n.length;
            return function (e) {
                if (null == e)
                    return!r;
                for (var u = r; u--; ) {
                    var o = n[u], i = t[o], f = e[o];
                    if (f === T && !(o in Object(e)) || !i(f))
                        return false
                }
                return true
            }
        }
        function un(t) {
            return Ze(t) ? Tu(t) : {}
        }
        function on(t, n, r) {
            if (typeof t != "function")
                throw new Au("Expected a function");
            return At(function () {
                t.apply(T, r)
            }, n)
        }
        function fn(t, n, r, e) {
            var u = -1, o = c, i = true, f = t.length, s = [], h = n.length;
            if (!f)
                return s;
            r && (n = l(n, O(r))), e ? (o = a, i = false) : n.length >= 200 && (o = E, i = false, n = new Zt(n));
            t:for (; ++u < f; ) {
                var p = t[u], _ = r ? r(p) : p, p = e || 0 !== p ? p : 0;
                if (i && _ === _) {
                    for (var v = h; v--; )
                        if (n[v] === _)
                            continue t;
                    s.push(p)
                } else
                    o(n, _, e) || s.push(p)
            }
            return s
        }
        function cn(t, n) {
            var r = true;
            return Ao(t, function (t, e, u) {
                return r = !!n(t, e, u)
            }), r
        }
        function an(t, n, r) {
            for (var e = -1, u = t.length; ++e < u; ) {
                var o = t[e], i = n(o);
                if (null != i && (f === T ? i === i && !Je(i) : r(i, f)))
                    var f = i, c = o;
            }
            return c
        }
        function ln(t, n) {
            var r = [];
            return Ao(t, function (t, e, u) {
                n(t, e, u) && r.push(t)
            }), r
        }
        function sn(t, n, r, e, u) {
            var o = -1, i = t.length;
            for (r || (r = Hr), u || (u = []); ++o < i; ) {
                var f = t[o];
                n > 0 && r(f) ? n > 1 ? sn(f, n - 1, r, e, u) : s(u, f) : e || (u[u.length] = f)
            }
            return u
        }
        function hn(t, n) {
            return t && ko(t, n, iu)
        }
        function pn(t, n) {
            return t && Eo(t, n, iu)
        }
        function _n(t, n) {
            return f(n, function (n) {
                return Fe(t[n])
            })
        }
        function vn(t, n) {
            n = ne(n, t) ? [n] : er(n);
            for (var r = 0, e = n.length; null != t && e > r; )
                t = t[fe(n[r++])];
            return r && r == e ? t : T
        }
        function gn(t, n, r) {
            return n = n(t), yi(t) ? n : s(n, r(t))
        }
        function dn(t, n) {
            return t > n
        }
        function yn(t, n) {
            return null != t && (Wu.call(t, n) || typeof t == "object" && n in t && null === Ju(Object(t)))
        }
        function bn(t, n) {
            return null != t && n in Object(t)
        }
        function xn(t, n, r) {
            for (var e = r ? a : c, u = t[0].length, o = t.length, i = o, f = Array(o), s = 1 / 0, h = []; i--; ) {
                var p = t[i];
                i && n && (p = l(p, O(n))), s = to(p.length, s), f[i] = !r && (n || u >= 120 && p.length >= 120) ? new Zt(i && p) : T
            }
            var p = t[0], _ = -1, v = f[0];
            t:for (; ++_ < u && s > h.length; ) {
                var g = p[_], d = n ? n(g) : g, g = r || 0 !== g ? g : 0;
                if (v ? !E(v, d) : !e(h, d, r)) {
                    for (i = o; --i; ) {
                        var y = f[i];
                        if (y ? !E(y, d) : !e(t[i], d, r))
                            continue t
                    }
                    v && v.push(d), h.push(g)
                }
            }
            return h
        }
        function jn(t, n, r) {
            var e = {};
            return hn(t, function (t, u, o) {
                n(e, r(t), u, o)
            }), e
        }
        function wn(t, n, e) {
            return ne(n, t) || (n = er(n), t = ie(t, n), n = ve(n)), n = null == t ? t : t[fe(n)], null == n ? T : r(n, t, e)
        }
        function mn(t, n, r, e, u) {
            if (t === n)
                n = true;
            else if (null == t || null == n || !Ze(t) && !Te(n))
                n = t !== t && n !== n;
            else
                t:{
                    var o = yi(t), i = yi(n), f = "[object Array]", c = "[object Array]";
                    o || (f = qr(t), f = "[object Arguments]" == f ? "[object Object]" : f), i || (c = qr(n),
                            c = "[object Arguments]" == c ? "[object Object]" : c);
                    var a = "[object Object]" == f && !C(t), i = "[object Object]" == c && !C(n);
                    if ((c = f == c) && !a)
                        u || (u = new qt), n = o || Ye(t) ? zr(t, n, mn, r, e, u) : Ur(t, n, f, mn, r, e, u);
                    else {
                        if (!(2 & e) && (o = a && Wu.call(t, "__wrapped__"), f = i && Wu.call(n, "__wrapped__"), o || f)) {
                            t = o ? t.value() : t, n = f ? n.value() : n, u || (u = new qt), n = mn(t, n, r, e, u);
                            break t
                        }
                        if (c)
                            n:if (u || (u = new qt), o = 2 & e, f = iu(t), i = f.length, c = iu(n).length, i == c || o) {
                                for (a = i; a--; ) {
                                    var l = f[a];
                                    if (!(o ? l in n : yn(n, l))) {
                                        n = false;
                                        break n
                                    }
                                }
                                if (c = u.get(t))
                                    n = c == n;
                                else {
                                    c = true, u.set(t, n);
                                    for (var s = o; ++a < i; ) {
                                        var l = f[a], h = t[l], p = n[l];
                                        if (r)
                                            var _ = o ? r(p, h, l, n, t, u) : r(h, p, l, t, n, u);
                                        if (_ === T ? h !== p && !mn(h, p, r, e, u) : !_) {
                                            c = false;
                                            break
                                        }
                                        s || (s = "constructor" == l)
                                    }
                                    c && !s && (r = t.constructor, e = n.constructor, r != e && "constructor"in t && "constructor"in n && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u["delete"](t), n = c
                                }
                            } else
                                n = false;
                        else
                            n = false
                    }
                }
            return n
        }
        function An(t, n, r, e) {
            var u = r.length, o = u, i = !e;
            if (null == t)
                return!o;
            for (t = Object(t); u--; ) {
                var f = r[u];
                if (i && f[2] ? f[1] !== t[f[0]] : !(f[0]in t))
                    return false;
            }
            for (; ++u < o; ) {
                var f = r[u], c = f[0], a = t[c], l = f[1];
                if (i && f[2]) {
                    if (a === T && !(c in t))
                        return false
                } else {
                    if (f = new qt, e)
                        var s = e(a, l, c, t, n, f);
                    if (s === T ? !mn(l, a, e, 3, f) : !s)
                        return false
                }
            }
            return true
        }
        function On(t) {
            return!Ze(t) || Iu && Iu in t ? false : (Fe(t) || C(t) ? zu : yt).test(ce(t))
        }
        function kn(t) {
            return typeof t == "function" ? t : null == t ? pu : typeof t == "object" ? yi(t) ? Wn(t[0], t[1]) : Rn(t) : du(t)
        }
        function En(t) {
            t = null == t ? t : Object(t);
            var n, r = [];
            for (n in t)
                r.push(n);
            return r
        }
        function Sn(t, n) {
            return n > t
        }
        function In(t, n) {
            var r = -1, e = Ue(t) ? Array(t.length) : [];
            return Ao(t, function (t, u, o) {
                e[++r] = n(t, u, o)
            }), e
        }
        function Rn(t) {
            var n = Pr(t);
            return 1 == n.length && n[0][2] ? ue(n[0][0], n[0][1]) : function (r) {
                return r === t || An(r, t, n)
            }
        }
        function Wn(t, n) {
            return ne(t) && n === n && !Ze(n) ? ue(fe(t), n) : function (r) {
                var e = uu(r, t);
                return e === T && e === n ? ou(r, t) : mn(n, e, T, 3)
            }
        }
        function Bn(t, n, r, e, o) {
            if (t !== n) {
                if (!yi(n) && !Ye(n))
                    var i = fu(n);
                u(i || n, function (u, f) {
                    if (i && (f = u, u = n[f]), Ze(u)) {
                        o || (o = new qt);
                        var c = f, a = o, l = t[c], s = n[c], h = a.get(s);
                        if (h)
                            Jt(t, c, h);
                        else {
                            var h = e ? e(l, s, c + "", t, n, a) : T, p = h === T;
                            p && (h = s,
                                    yi(s) || Ye(s) ? yi(l) ? h = l : $e(l) ? h = lr(l) : (p = false, h = rn(s, true)) : Ve(s) || ze(s) ? ze(l) ? h = ru(l) : !Ze(l) || r && Fe(l) ? (p = false, h = rn(s, true)) : h = l : p = false), a.set(s, h), p && Bn(h, s, r, e, a), a["delete"](s), Jt(t, c, h)
                        }
                    } else
                        c = e ? e(t[f], u, f + "", t, n, o) : T, c === T && (c = u), Jt(t, f, c)
                })
            }
        }
        function Ln(t, n) {
            var r = t.length;
            return r ? (n += 0 > n ? r : 0, Xr(n, r) ? t[n] : T) : void 0
        }
        function Mn(t, n, r) {
            var e = -1;
            return n = l(n.length ? n : [pu], O(Fr())), t = In(t, function (t) {
                return{a: l(n, function (n) {
                        return n(t)
                    }), b: ++e, c: t}
            }), j(t, function (t, n) {
                var e;
                t:{
                    e = -1;
                    for (var u = t.a, o = n.a, i = u.length, f = r.length; ++e < i; ) {
                        var c = fr(u[e], o[e]);
                        if (c) {
                            e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);
                            break t
                        }
                    }
                    e = t.b - n.b
                }
                return e
            })
        }
        function Cn(t, n) {
            return t = Object(t), h(n, function (n, r) {
                return r in t && (n[r] = t[r]), n
            }, {})
        }
        function zn(t, n) {
            for (var r = -1, e = gn(t, fu, Bo), u = e.length, o = {}; ++r < u; ) {
                var i = e[r], f = t[i];
                n(f, i) && (o[i] = f)
            }
            return o
        }
        function Un(t) {
            return function (n) {
                return null == n ? T : n[t]
            }
        }
        function $n(t) {
            return function (n) {
                return vn(n, t)
            }
        }
        function Dn(t, n, r, e) {
            var u = e ? y : d, o = -1, i = n.length, f = t;
            for (t === n && (n = lr(n)), r && (f = l(t, O(r))); ++o < i; )
                for (var c = 0, a = n[o], a = r ? r(a) : a; - 1 < (c = u(f, a, c, e)); )
                    f !== t && Vu.call(f, c, 1),
                            Vu.call(t, c, 1);
            return t
        }
        function Fn(t, n) {
            for (var r = t ? n.length : 0, e = r - 1; r--; ) {
                var u = n[r];
                if (r == e || u !== o) {
                    var o = u;
                    if (Xr(u))
                        Vu.call(t, u, 1);
                    else if (ne(u, t))
                        delete t[fe(u)];
                    else {
                        var u = er(u), i = ie(t, u);
                        null != i && delete i[fe(ve(u))]
                    }
                }
            }
        }
        function Nn(t, n) {
            return t + Gu(ro() * (n - t + 1))
        }
        function Pn(t, n) {
            var r = "";
            if (!t || 1 > n || n > 9007199254740991)
                return r;
            do
                n % 2 && (r += t), (n = Gu(n / 2)) && (t += t);
            while (n);
            return r
        }
        function Zn(t, n, r, e) {
            n = ne(n, t) ? [n] : er(n);
            for (var u = -1, o = n.length, i = o - 1, f = t; null != f && ++u < o; ) {
                var c = fe(n[u]);
                if (Ze(f)) {
                    var a = r;
                    if (u != i) {
                        var l = f[c], a = e ? e(l, c, f) : T;
                        a === T && (a = null == l ? Xr(n[u + 1]) ? [] : {} : l)
                    }
                    Yt(f, c, a)
                }
                f = f[c]
            }
            return t
        }
        function Tn(t, n, r) {
            var e = -1, u = t.length;
            for (0 > n && (n = - n > u?0:u + n), r = r > u?u:r, 0 > r && (r += u), u = n > r?0:r - n >>> 0, n >>>= 0, r = Array(u); ++e < u; )
                r[e] = t[e + n];
            return r
        }
        function qn(t, n) {
            var r;
            return Ao(t, function (t, e, u) {
                return r = n(t, e, u), !r
            }), !!r
        }
        function Vn(t, n, r) {
            var e = 0, u = t ? t.length : e;
            if (typeof n == "number" && n === n && 2147483647 >= u) {
                for (; u > e; ) {
                    var o = e + u >>> 1, i = t[o];
                    null !== i && !Je(i) && (r ? n >= i : n > i) ? e = o + 1 : u = o
                }
                return u
            }
            return Kn(t, n, pu, r)
        }
        function Kn(t, n, r, e) {
            n = r(n);
            for (var u = 0, o = t ? t.length : 0, i = n !== n, f = null === n, c = Je(n), a = n === T; o > u; ) {
                var l = Gu((u + o) / 2), s = r(t[l]), h = s !== T, p = null === s, _ = s === s, v = Je(s);
                (i ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? n >= s : n > s) ? u = l + 1 : o = l
            }
            return to(o, 4294967294)
        }
        function Gn(t, n) {
            for (var r = -1, e = t.length, u = 0, o = []; ++r < e; ) {
                var i = t[r], f = n ? n(i) : i;
                if (!r || !Ce(f, c)) {
                    var c = f;
                    o[u++] = 0 === i ? 0 : i
                }
            }
            return o
        }
        function Jn(t) {
            return typeof t == "number" ? t : Je(t) ? V : +t
        }
        function Yn(t) {
            if (typeof t == "string")
                return t;
            if (Je(t))
                return mo ? mo.call(t) : "";
            var n = t + "";
            return"0" == n && 1 / t == -q ? "-0" : n
        }
        function Hn(t, n, r) {
            var e = -1, u = c, o = t.length, i = true, f = [], l = f;
            if (r)
                i = false, u = a;
            else if (o >= 200) {
                if (u = n ? null : Io(t))
                    return D(u);
                i = false, u = E, l = new Zt
            } else
                l = n ? [] : f;
            t:for (; ++e < o; ) {
                var s = t[e], h = n ? n(s) : s, s = r || 0 !== s ? s : 0;
                if (i && h === h) {
                    for (var p = l.length; p--; )
                        if (l[p] === h)
                            continue t;
                    n && l.push(h), f.push(s)
                } else
                    u(l, h, r) || (l !== f && l.push(h), f.push(s))
            }
            return f
        }
        function Qn(t, n, r, e) {
            for (var u = t.length, o = e ? u : -1; (e?o--:++o < u) && n(t[o], o, t); )
                ;
            return r ? Tn(t, e ? 0 : o, e ? o + 1 : u) : Tn(t, e ? o + 1 : 0, e ? u : o);
        }
        function Xn(t, n) {
            var r = t;
            return r instanceof Ut && (r = r.value()), h(n, function (t, n) {
                return n.func.apply(n.thisArg, s([t], n.args))
            }, r)
        }
        function tr(t, n, r) {
            for (var e = -1, u = t.length; ++e < u; )
                var o = o ? s(fn(o, t[e], n, r), fn(t[e], o, n, r)) : t[e];
            return o && o.length ? Hn(o, n, r) : []
        }
        function nr(t, n, r) {
            for (var e = -1, u = t.length, o = n.length, i = {}; ++e < u; )
                r(i, t[e], o > e ? n[e] : T);
            return i
        }
        function rr(t) {
            return $e(t) ? t : []
        }
        function er(t) {
            return yi(t) ? t : Co(t)
        }
        function ur(t, n, r) {
            var e = t.length;
            return r = r === T ? e : r, !n && r >= e ? t : Tn(t, n, r)
        }
        function or(t, n) {
            if (n)
                return t.slice();
            var r = new t.constructor(t.length);
            return t.copy(r), r
        }
        function ir(t) {
            var n = new t.constructor(t.byteLength);
            return new Fu(n).set(new Fu(t)), n
        }
        function fr(t, n) {
            if (t !== n) {
                var r = t !== T, e = null === t, u = t === t, o = Je(t), i = n !== T, f = null === n, c = n === n, a = Je(n);
                if (!f && !a && !o && t > n || o && i && c && !f && !a || e && i && c || !r && c || !u)
                    return 1;
                if (!e && !o && !a && n > t || a && r && u && !e && !o || f && r && u || !i && u || !c)
                    return-1
            }
            return 0
        }
        function cr(t, n, r, e) {
            var u = -1, o = t.length, i = r.length, f = -1, c = n.length, a = Xu(o - i, 0), l = Array(c + a);
            for (e = !e; ++f < c; )
                l[f] = n[f];
            for (; ++u < i; )
                (e || o > u) && (l[r[u]] = t[u]);
            for (; a--; )
                l[f++] = t[u++];
            return l
        }
        function ar(t, n, r, e) {
            var u = -1, o = t.length, i = -1, f = r.length, c = -1, a = n.length, l = Xu(o - f, 0), s = Array(l + a);
            for (e = !e; ++u < l; )
                s[u] = t[u];
            for (l = u; ++c < a; )
                s[l + c] = n[c];
            for (; ++i < f; )
                (e || o > u) && (s[l + r[i]] = t[u++]);
            return s
        }
        function lr(t, n) {
            var r = -1, e = t.length;
            for (n || (n = Array(e)); ++r < e; )
                n[r] = t[r];
            return n
        }
        function sr(t, n, r, e) {
            r || (r = {});
            for (var u = -1, o = n.length; ++u < o; ) {
                var i = n[u], f = e ? e(r[i], t[i], i, r, t) : t[i];
                Yt(r, i, f)
            }
            return r
        }
        function hr(t, n) {
            return sr(t, Tr(t), n);
        }
        function pr(t, n) {
            return function (r, u) {
                var o = yi(r) ? e : Qt, i = n ? n() : {};
                return o(r, t, Fr(u), i)
            }
        }
        function _r(t) {
            return Me(function (n, r) {
                var e = -1, u = r.length, o = u > 1 ? r[u - 1] : T, i = u > 2 ? r[2] : T, o = t.length > 3 && typeof o == "function" ? (u--, o) : T;
                for (i && te(r[0], r[1], i) && (o = 3 > u?T:o, u = 1), n = Object(n); ++e < u; )
                    (i = r[e]) && t(n, i, e, o);
                return n
            })
        }
        function vr(t, n) {
            return function (r, e) {
                if (null == r)
                    return r;
                if (!Ue(r))
                    return t(r, e);
                for (var u = r.length, o = n ? u : -1, i = Object(r); (n?o--:++o < u) && false !== e(i[o], o, i); )
                    ;
                return r
            }
        }
        function gr(t) {
            return function (n, r, e) {
                var u = -1, o = Object(n);
                e = e(n);
                for (var i = e.length; i--; ) {
                    var f = e[t ? i : ++u];
                    if (false === r(o[f], f, o))
                        break
                }
                return n
            }
        }
        function dr(t, n, r) {
            function e() {
                return(this && this !== Kt && this instanceof e ? o : t).apply(u ? r : this, arguments)
            }
            var u = 1 & n, o = xr(t);
            return e
        }
        function yr(t) {
            return function (n) {
                n = eu(n);
                var r = Wt.test(n) ? n.match(It) : T, e = r ? r[0] : n.charAt(0);
                return n = r ? ur(r, 1).join("") : n.slice(1), e[t]() + n
            }
        }
        function br(t) {
            return function (n) {
                return h(su(lu(n).replace(Et, "")), t, "")
            }
        }
        function xr(t) {
            return function () {
                var n = arguments;
                switch (n.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(n[0]);
                    case 2:
                        return new t(n[0], n[1]);
                    case 3:
                        return new t(n[0], n[1], n[2]);
                    case 4:
                        return new t(n[0], n[1], n[2], n[3]);
                    case 5:
                        return new t(n[0], n[1], n[2], n[3], n[4]);
                    case 6:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
                    case 7:
                        return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                }
                var r = un(t.prototype), n = t.apply(r, n);
                return Ze(n) ? n : r
            }
        }
        function jr(t, n, e) {
            function u() {
                for (var i = arguments.length, f = Array(i), c = i, a = Dr(u); c--; )
                    f[c] = arguments[c];
                return c = 3 > i && f[0] !== a && f[i - 1] !== a ? [] : $(f, a),
                        i -= c.length, e > i ? Br(t, n, Ar, u.placeholder, T, f, c, T, T, e - i) : r(this && this !== Kt && this instanceof u ? o : t, this, f)
            }
            var o = xr(t);
            return u
        }
        function wr(t) {
            return function (n, r, e) {
                var u = Object(n);
                if (r = Fr(r, 3), !Ue(n))
                    var o = iu(n);
                return e = t(o || n, function (t, n) {
                    return o && (n = t, t = u[n]), r(t, n, u)
                }, e), e > -1 ? n[o ? o[e] : e] : T
            }
        }
        function mr(t) {
            return Me(function (n) {
                n = sn(n, 1);
                var r = n.length, e = r, u = zt.prototype.thru;
                for (t && n.reverse(); e--; ) {
                    var o = n[e];
                    if (typeof o != "function")
                        throw new Au("Expected a function");
                    if (u && !i && "wrapper" == $r(o))
                        var i = new zt([], true);
                }
                for (e = i?e:r; ++e < r; )
                    var o = n[e], u = $r(o), f = "wrapper" == u ? Ro(o) : T, i = f && re(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? i[$r(f[0])].apply(i, f[3]) : 1 == o.length && re(o) ? i[u]() : i.thru(o);
                return function () {
                    var t = arguments, e = t[0];
                    if (i && 1 == t.length && yi(e) && e.length >= 200)
                        return i.plant(e).value();
                    for (var u = 0, t = r ? n[u].apply(this, t) : e; ++u < r; )
                        t = n[u].call(this, t);
                    return t
                }
            })
        }
        function Ar(t, n, r, e, u, o, i, f, c, a) {
            function l() {
                for (var d = arguments.length, y = Array(d), b = d; b--; )
                    y[b] = arguments[b];
                if (_) {
                    var x, j = Dr(l), b = y.length;
                    for (x = 0; b--; )
                        y[b] === j && x++;
                }
                if (e && (y = cr(y, e, u, _)), o && (y = ar(y, o, i, _)), d -= x, _ && a > d)
                    return j = $(y, j), Br(t, n, Ar, l.placeholder, r, y, j, f, c, a - d);
                if (j = h ? r : this, b = p ? j[t] : t, d = y.length, f) {
                    x = y.length;
                    for (var w = to(f.length, x), m = lr(y); w--; ) {
                        var A = f[w];
                        y[w] = Xr(A, x) ? m[A] : T
                    }
                } else
                    v && d > 1 && y.reverse();
                return s && d > c && (y.length = c), this && this !== Kt && this instanceof l && (b = g || xr(b)), b.apply(j, y)
            }
            var s = 128 & n, h = 1 & n, p = 2 & n, _ = 24 & n, v = 512 & n, g = p ? T : xr(t);
            return l
        }
        function Or(t, n) {
            return function (r, e) {
                return jn(r, t, n(e))
            }
        }
        function kr(t) {
            return function (n, r) {
                var e;
                if (n === T && r === T)
                    return 0;
                if (n !== T && (e = n), r !== T) {
                    if (e === T)
                        return r;
                    typeof n == "string" || typeof r == "string" ? (n = Yn(n), r = Yn(r)) : (n = Jn(n), r = Jn(r)), e = t(n, r)
                }
                return e
            }
        }
        function Er(t) {
            return Me(function (n) {
                return n = 1 == n.length && yi(n[0]) ? l(n[0], O(Fr())) : l(sn(n, 1, Qr), O(Fr())), Me(function (e) {
                    var u = this;
                    return t(n, function (t) {
                        return r(t, u, e)
                    })
                })
            })
        }
        function Sr(t, n) {
            n = n === T ? " " : Yn(n);
            var r = n.length;
            return 2 > r ? r ? Pn(n, t) : n : (r = Pn(n, Ku(t / N(n))), Wt.test(n) ? ur(r.match(It), 0, t).join("") : r.slice(0, t))
        }
        function Ir(t, n, e, u) {
            function o() {
                for (var n = -1, c = arguments.length, a = -1, l = u.length, s = Array(l + c), h = this && this !== Kt && this instanceof o ? f : t; ++a < l; )
                    s[a] = u[a];
                for (; c--; )
                    s[a++] = arguments[++n];
                return r(h, i ? e : this, s)
            }
            var i = 1 & n, f = xr(t);
            return o
        }
        function Rr(t) {
            return function (n, r, e) {
                e && typeof e != "number" && te(n, r, e) && (r = e = T), n = nu(n), n = n === n ? n : 0, r === T ? (r = n, n = 0) : r = nu(r) || 0, e = e === T ? r > n ? 1 : -1 : nu(e) || 0;
                var u = -1;
                r = Xu(Ku((r - n) / (e || 1)), 0);
                for (var o = Array(r); r--; )
                    o[t ? r : ++u] = n, n += e;
                return o
            }
        }
        function Wr(t) {
            return function (n, r) {
                return typeof n == "string" && typeof r == "string" || (n = nu(n),
                        r = nu(r)), t(n, r)
            }
        }
        function Br(t, n, r, e, u, o, i, f, c, a) {
            var l = 8 & n, s = l ? i : T;
            i = l ? T : i;
            var h = l ? o : T;
            return o = l ? T : o, n = (n | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & n || (n &= -4), n = [t, n, u, h, s, o, i, f, c, a], r = r.apply(T, n), re(t) && Mo(r, n), r.placeholder = e, r
        }
        function Lr(t) {
            var n = wu[t];
            return function (t, r) {
                if (t = nu(t), r = to(Xe(r), 292)) {
                    var e = (eu(t) + "e").split("e"), e = n(e[0] + "e" + (+e[1] + r)), e = (eu(e) + "e").split("e");
                    return+(e[0] + "e" + (+e[1] - r))
                }
                return n(t)
            }
        }
        function Mr(t) {
            return function (n) {
                var r = qr(n);
                return"[object Map]" == r ? U(n) : "[object Set]" == r ? F(n) : A(n, t(n));
            }
        }
        function Cr(t, n, r, e, u, o, i, f) {
            var c = 2 & n;
            if (!c && typeof t != "function")
                throw new Au("Expected a function");
            var a = e ? e.length : 0;
            if (a || (n &= -97, e = u = T), i = i === T ? i : Xu(Xe(i), 0), f = f === T ? f : Xe(f), a -= u ? u.length : 0, 64 & n) {
                var l = e, s = u;
                e = u = T
            }
            var h = c ? T : Ro(t);
            return o = [t, n, r, e, u, l, s, o, i, f], h && (r = o[1], t = h[1], n = r | t, e = 128 == t && 8 == r || 128 == t && 256 == r && h[8] >= o[7].length || 384 == t && h[8] >= h[7].length && 8 == r, 131 > n || e) && (1 & t && (o[2] = h[2], n |= 1 & r ? 0 : 4), (r = h[3]) && (e = o[3], o[3] = e ? cr(e, r, h[4]) : r, o[4] = e ? $(o[3], "__lodash_placeholder__") : h[4]),
                    (r = h[5]) && (e = o[5], o[5] = e ? ar(e, r, h[6]) : r, o[6] = e ? $(o[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (o[7] = r), 128 & t && (o[8] = null == o[8] ? h[8] : to(o[8], h[8])), null == o[9] && (o[9] = h[9]), o[0] = h[0], o[1] = n), t = o[0], n = o[1], r = o[2], e = o[3], u = o[4], f = o[9] = null == o[9] ? c ? 0 : t.length : Xu(o[9] - a, 0), !f && 24 & n && (n &= -25), (h ? So : Mo)(n && 1 != n ? 8 == n || 16 == n ? jr(t, n, f) : 32 != n && 33 != n || u.length ? Ar.apply(T, o) : Ir(t, n, r, e) : dr(t, n, r), o)
        }
        function zr(t, n, r, e, u, o) {
            var i = 2 & u, f = t.length, c = n.length;
            if (f != c && !(i && c > f))
                return false;
            if (c = o.get(t))
                return c == n;
            var c = -1, a = true, l = 1 & u ? new Zt : T;
            for (o.set(t, n); ++c < f; ) {
                var s = t[c], h = n[c];
                if (e)
                    var p = i ? e(h, s, c, n, t, o) : e(s, h, c, t, n, o);
                if (p !== T) {
                    if (p)
                        continue;
                    a = false;
                    break
                }
                if (l) {
                    if (!_(n, function (t, n) {
                        return l.has(n) || s !== t && !r(s, t, e, u, o) ? void 0 : l.add(n)
                    })) {
                        a = false;
                        break
                    }
                } else if (s !== h && !r(s, h, e, u, o)) {
                    a = false;
                    break
                }
            }
            return o["delete"](t), a
        }
        function Ur(t, n, r, e, u, o, i) {
            switch (r) {
                case"[object DataView]":
                    if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
                        break;
                    t = t.buffer, n = n.buffer;
                case"[object ArrayBuffer]":
                    if (t.byteLength != n.byteLength || !e(new Fu(t), new Fu(n)))
                        break;
                    return true;
                case"[object Boolean]":
                case"[object Date]":
                    return+t == +n;
                case"[object Error]":
                    return t.name == n.name && t.message == n.message;
                case"[object Number]":
                    return t != +t ? n != +n : t == +n;
                case"[object RegExp]":
                case"[object String]":
                    return t == n + "";
                case"[object Map]":
                    var f = U;
                case"[object Set]":
                    if (f || (f = D), t.size != n.size && !(2 & o))
                        break;
                    return(r = i.get(t)) ? r == n : (o |= 1, i.set(t, n), zr(f(t), f(n), e, u, o, i));
                case"[object Symbol]":
                    if (wo)
                        return wo.call(t) == wo.call(n)
            }
            return false
        }
        function $r(t) {
            for (var n = t.name + "", r = _o[n], e = Wu.call(_o, n) ? r.length : 0; e--; ) {
                var u = r[e], o = u.func;
                if (null == o || o == t)
                    return u.name
            }
            return n
        }
        function Dr(t) {
            return(Wu.call(Ot, "placeholder") ? Ot : t).placeholder
        }
        function Fr() {
            var t = Ot.iteratee || _u, t = t === _u ? kn : t;
            return arguments.length ? t(arguments[0], arguments[1]) : t
        }
        function Nr(t, n) {
            var r = t.__data__, e = typeof n;
            return("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== n : null === n) ? r[typeof n == "string" ? "string" : "hash"] : r.map
        }
        function Pr(t) {
            for (var n = iu(t), r = n.length; r--; ) {
                var e = n[r], u = t[e];
                n[r] = [e, u, u === u && !Ze(u)]
            }
            return n;
        }
        function Zr(t, n) {
            var r = null == t ? T : t[n];
            return On(r) ? r : T
        }
        function Tr(t) {
            return Pu(Object(t))
        }
        function qr(t) {
            return Mu.call(t)
        }
        function Vr(t, n, r) {
            n = ne(n, t) ? [n] : er(n);
            for (var e, u = -1, o = n.length; ++u < o; ) {
                var i = fe(n[u]);
                if (!(e = null != t && r(t, i)))
                    break;
                t = t[i]
            }
            return e ? e : (o = t ? t.length : 0, !!o && Pe(o) && Xr(i, o) && (yi(t) || Ge(t) || ze(t)))
        }
        function Kr(t) {
            var n = t.length, r = t.constructor(n);
            return n && "string" == typeof t[0] && Wu.call(t, "index") && (r.index = t.index, r.input = t.input), r
        }
        function Gr(t) {
            return typeof t.constructor != "function" || ee(t) ? {} : un(Ju(Object(t)));
        }
        function Jr(r, e, u, o) {
            var i = r.constructor;
            switch (e) {
                case"[object ArrayBuffer]":
                    return ir(r);
                case"[object Boolean]":
                case"[object Date]":
                    return new i(+r);
                case"[object DataView]":
                    return e = o ? ir(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return e = o ? ir(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.length);
                case"[object Map]":
                    return e = o ? u(U(r), true) : U(r), h(e, t, new r.constructor);
                case"[object Number]":
                case"[object String]":
                    return new i(r);
                case"[object RegExp]":
                    return e = new r.constructor(r.source, _t.exec(r)), e.lastIndex = r.lastIndex, e;
                case"[object Set]":
                    return e = o ? u(D(r), true) : D(r), h(e, n, new r.constructor);
                case"[object Symbol]":
                    return wo ? Object(wo.call(r)) : {}
                }
        }
        function Yr(t) {
            var n = t ? t.length : T;
            return Pe(n) && (yi(t) || Ge(t) || ze(t)) ? m(n, String) : null;
        }
        function Hr(t) {
            return yi(t) || ze(t)
        }
        function Qr(t) {
            return yi(t) && !(2 == t.length && !Fe(t[0]))
        }
        function Xr(t, n) {
            return n = null == n ? 9007199254740991 : n, !!n && (typeof t == "number" || xt.test(t)) && t > -1 && 0 == t % 1 && n > t
        }
        function te(t, n, r) {
            if (!Ze(r))
                return false;
            var e = typeof n;
            return("number" == e ? Ue(r) && Xr(n, r.length) : "string" == e && n in r) ? Ce(r[n], t) : false
        }
        function ne(t, n) {
            if (yi(t))
                return false;
            var r = typeof t;
            return"number" == r || "symbol" == r || "boolean" == r || null == t || Je(t) ? true : ut.test(t) || !et.test(t) || null != n && t in Object(n)
        }
        function re(t) {
            var n = $r(t), r = Ot[n];
            return typeof r == "function" && n in Ut.prototype ? t === r ? true : (n = Ro(r), !!n && t === n[0]) : false
        }
        function ee(t) {
            var n = t && t.constructor;
            return t === (typeof n == "function" && n.prototype || ku)
        }
        function ue(t, n) {
            return function (r) {
                return null == r ? false : r[t] === n && (n !== T || t in Object(r))
            }
        }
        function oe(t, n, r, e, u, o) {
            return Ze(t) && Ze(n) && Bn(t, n, T, oe, o.set(n, t)), t
        }
        function ie(t, n) {
            return 1 == n.length ? t : vn(t, Tn(n, 0, -1))
        }
        function fe(t) {
            if (typeof t == "string" || Je(t))
                return t;
            var n = t + "";
            return"0" == n && 1 / t == -q ? "-0" : n
        }
        function ce(t) {
            if (null != t) {
                try {
                    return Ru.call(t)
                } catch (n) {
                }
                return t + ""
            }
            return""
        }
        function ae(t) {
            if (t instanceof Ut)
                return t.clone();
            var n = new zt(t.__wrapped__, t.__chain__);
            return n.__actions__ = lr(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n
        }
        function le(t, n, r) {
            var e = t ? t.length : 0;
            return e ? (n = r || n === T ? 1 : Xe(n), Tn(t, 0 > n ? 0 : n, e)) : []
        }
        function se(t, n, r) {
            var e = t ? t.length : 0;
            return e ? (n = r || n === T ? 1 : Xe(n), n = e - n, Tn(t, 0, 0 > n ? 0 : n)) : []
        }
        function he(t, n, r) {
            var e = t ? t.length : 0;
            return e ? (r = null == r ? 0 : Xe(r), 0 > r && (r = Xu(e + r, 0)),
                    g(t, Fr(n, 3), r)) : -1
        }
        function pe(t, n, r) {
            var e = t ? t.length : 0;
            if (!e)
                return-1;
            var u = e - 1;
            return r !== T && (u = Xe(r), u = 0 > r ? Xu(e + u, 0) : to(u, e - 1)), g(t, Fr(n, 3), u, true)
        }
        function _e(t) {
            return t && t.length ? t[0] : T
        }
        function ve(t) {
            var n = t ? t.length : 0;
            return n ? t[n - 1] : T
        }
        function ge(t, n) {
            return t && t.length && n && n.length ? Dn(t, n) : t
        }
        function de(t) {
            return t ? uo.call(t) : t
        }
        function ye(t) {
            if (!t || !t.length)
                return[];
            var n = 0;
            return t = f(t, function (t) {
                return $e(t) ? (n = Xu(t.length, n), true) : void 0
            }), m(n, function (n) {
                return l(t, Un(n))
            })
        }
        function be(t, n) {
            if (!t || !t.length)
                return[];
            var e = ye(t);
            return null == n ? e : l(e, function (t) {
                return r(n, T, t)
            })
        }
        function xe(t) {
            return t = Ot(t), t.__chain__ = true, t
        }
        function je(t, n) {
            return n(t)
        }
        function we() {
            return this
        }
        function me(t, n) {
            return(yi(t) ? u : Ao)(t, Fr(n, 3))
        }
        function Ae(t, n) {
            return(yi(t) ? o : Oo)(t, Fr(n, 3))
        }
        function Oe(t, n) {
            return(yi(t) ? l : In)(t, Fr(n, 3))
        }
        function ke(t, n, r) {
            var e = -1, u = He(t), o = u.length, i = o - 1;
            for (n = (r?te(t, n, r):n === T)?1:nn(Xe(n), 0, o); ++e < n; )
                t = Nn(e, i), r = u[t], u[t] = u[e], u[e] = r;
            return u.length = n, u
        }
        function Ee() {
            return xu.now()
        }
        function Se(t, n, r) {
            return n = r ? T : n, n = t && null == n ? t.length : n, Cr(t, 128, T, T, T, T, n)
        }
        function Ie(t, n) {
            var r;
            if (typeof n != "function")
                throw new Au("Expected a function");
            return t = Xe(t), function () {
                return 0 < --t && (r = n.apply(this, arguments)), 1 >= t && (n = T), r
            }
        }
        function Re(t, n, r) {
            return n = r ? T : n, t = Cr(t, 8, T, T, T, T, T, n), t.placeholder = Re.placeholder, t
        }
        function We(t, n, r) {
            return n = r ? T : n, t = Cr(t, 16, T, T, T, T, T, n), t.placeholder = We.placeholder, t
        }
        function Be(t, n, r) {
            function e(n) {
                var r = c, e = a;
                return c = a = T, _ = n, s = t.apply(e, r);
            }
            function u(t) {
                var r = t - p;
                return t -= _, p === T || r >= n || 0 > r || g && t >= l
            }
            function o() {
                var t = Ee();
                if (u(t))
                    return i(t);
                var r;
                r = t - _, t = n - (t - p), r = g ? to(t, l - r) : t, h = At(o, r)
            }
            function i(t) {
                return h = T, d && c ? e(t) : (c = a = T, s)
            }
            function f() {
                var t = Ee(), r = u(t);
                if (c = arguments, a = this, p = t, r) {
                    if (h === T)
                        return _ = t = p, h = At(o, n), v ? e(t) : s;
                    if (g)
                        return h = At(o, n), e(p)
                }
                return h === T && (h = At(o, n)), s
            }
            var c, a, l, s, h, p, _ = 0, v = false, g = false, d = true;
            if (typeof t != "function")
                throw new Au("Expected a function");
            return n = nu(n) || 0, Ze(r) && (v = !!r.leading, l = (g = "maxWait"in r) ? Xu(nu(r.maxWait) || 0, n) : l,
                    d = "trailing"in r ? !!r.trailing : d), f.cancel = function () {
                _ = 0, c = p = a = h = T
            }, f.flush = function () {
                return h === T ? s : i(Ee())
            }, f
        }
        function Le(t, n) {
            function r() {
                var e = arguments, u = n ? n.apply(this, e) : e[0], o = r.cache;
                return o.has(u) ? o.get(u) : (e = t.apply(this, e), r.cache = o.set(u, e), e)
            }
            if (typeof t != "function" || n && typeof n != "function")
                throw new Au("Expected a function");
            return r.cache = new (Le.Cache || Pt), r
        }
        function Me(t, n) {
            if (typeof t != "function")
                throw new Au("Expected a function");
            return n = Xu(n === T ? t.length - 1 : Xe(n), 0), function () {
                for (var e = arguments, u = -1, o = Xu(e.length - n, 0), i = Array(o); ++u < o; )
                    i[u] = e[n + u];
                switch (n) {
                    case 0:
                        return t.call(this, i);
                    case 1:
                        return t.call(this, e[0], i);
                    case 2:
                        return t.call(this, e[0], e[1], i)
                }
                for (o = Array(n + 1), u = - 1; ++u < n; )
                    o[u] = e[u];
                return o[n] = i, r(t, this, o)
            }
        }
        function Ce(t, n) {
            return t === n || t !== t && n !== n
        }
        function ze(t) {
            return $e(t) && Wu.call(t, "callee") && (!qu.call(t, "callee") || "[object Arguments]" == Mu.call(t))
        }
        function Ue(t) {
            return null != t && Pe(Wo(t)) && !Fe(t)
        }
        function $e(t) {
            return Te(t) && Ue(t)
        }
        function De(t) {
            return Te(t) ? "[object Error]" == Mu.call(t) || typeof t.message == "string" && typeof t.name == "string" : false
        }
        function Fe(t) {
            return t = Ze(t) ? Mu.call(t) : "", "[object Function]" == t || "[object GeneratorFunction]" == t
        }
        function Ne(t) {
            return typeof t == "number" && t == Xe(t)
        }
        function Pe(t) {
            return typeof t == "number" && t > -1 && 0 == t % 1 && 9007199254740991 >= t
        }
        function Ze(t) {
            var n = typeof t;
            return!!t && ("object" == n || "function" == n)
        }
        function Te(t) {
            return!!t && typeof t == "object"
        }
        function qe(t) {
            return typeof t == "number" || Te(t) && "[object Number]" == Mu.call(t);
        }
        function Ve(t) {
            return!Te(t) || "[object Object]" != Mu.call(t) || C(t) ? false : (t = Ju(Object(t)), null === t ? true : (t = Wu.call(t, "constructor") && t.constructor, typeof t == "function" && t instanceof t && Ru.call(t) == Lu))
        }
        function Ke(t) {
            return Ze(t) && "[object RegExp]" == Mu.call(t)
        }
        function Ge(t) {
            return typeof t == "string" || !yi(t) && Te(t) && "[object String]" == Mu.call(t)
        }
        function Je(t) {
            return typeof t == "symbol" || Te(t) && "[object Symbol]" == Mu.call(t)
        }
        function Ye(t) {
            return Te(t) && Pe(t.length) && !!Mt[Mu.call(t)]
        }
        function He(t) {
            if (!t)
                return[];
            if (Ue(t))
                return Ge(t) ? t.match(It) : lr(t);
            if (Zu && t[Zu])
                return z(t[Zu]());
            var n = qr(t);
            return("[object Map]" == n ? U : "[object Set]" == n ? D : cu)(t)
        }
        function Qe(t) {
            return t ? (t = nu(t), t === q || t === -q ? 1.7976931348623157e308 * (0 > t ? -1 : 1) : t === t ? t : 0) : 0 === t ? t : 0
        }
        function Xe(t) {
            t = Qe(t);
            var n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        function tu(t) {
            return t ? nn(Xe(t), 0, 4294967295) : 0
        }
        function nu(t) {
            if (typeof t == "number")
                return t;
            if (Je(t))
                return V;
            if (Ze(t) && (t = Fe(t.valueOf) ? t.valueOf() : t, t = Ze(t) ? t + "" : t), typeof t != "string")
                return 0 === t ? t : +t;
            t = t.replace(ct, "");
            var n = dt.test(t);
            return n || bt.test(t) ? Nt(t.slice(2), n ? 2 : 8) : gt.test(t) ? V : +t
        }
        function ru(t) {
            return sr(t, fu(t))
        }
        function eu(t) {
            return null == t ? "" : Yn(t)
        }
        function uu(t, n, r) {
            return t = null == t ? T : vn(t, n), t === T ? r : t
        }
        function ou(t, n) {
            return null != t && Vr(t, n, bn)
        }
        function iu(t) {
            var n = ee(t);
            if (!n && !Ue(t))
                return Qu(Object(t));
            var r, e = Yr(t), u = !!e, e = e || [], o = e.length;
            for (r in t)
                !yn(t, r) || u && ("length" == r || Xr(r, o)) || n && "constructor" == r || e.push(r);
            return e
        }
        function fu(t) {
            for (var n = -1, r = ee(t), e = En(t), u = e.length, o = Yr(t), i = !!o, o = o || [], f = o.length; ++n < u; ) {
                var c = e[n];
                i && ("length" == c || Xr(c, f)) || "constructor" == c && (r || !Wu.call(t, c)) || o.push(c)
            }
            return o
        }
        function cu(t) {
            return t ? k(t, iu(t)) : []
        }
        function au(t) {
            return qi(eu(t).toLowerCase())
        }
        function lu(t) {
            return(t = eu(t)) && t.replace(jt, W).replace(St, "")
        }
        function su(t, n, r) {
            return t = eu(t), n = r ? T : n, n === T && (n = Bt.test(t) ? Rt : st), t.match(n) || []
        }
        function hu(t) {
            return function () {
                return t
            }
        }
        function pu(t) {
            return t
        }
        function _u(t) {
            return kn(typeof t == "function" ? t : rn(t, true))
        }
        function vu(t, n, r) {
            var e = iu(n), o = _n(n, e);
            null != r || Ze(n) && (o.length || !e.length) || (r = n,
                    n = t, t = this, o = _n(n, iu(n)));
            var i = !(Ze(r) && "chain"in r && !r.chain), f = Fe(t);
            return u(o, function (r) {
                var e = n[r];
                t[r] = e, f && (t.prototype[r] = function () {
                    var n = this.__chain__;
                    if (i || n) {
                        var r = t(this.__wrapped__);
                        return(r.__actions__ = lr(this.__actions__)).push({func: e, args: arguments, thisArg: t}), r.__chain__ = n, r
                    }
                    return e.apply(t, s([this.value()], arguments))
                })
            }), t
        }
        function gu() {
        }
        function du(t) {
            return ne(t) ? Un(fe(t)) : $n(t)
        }
        function yu() {
            return[]
        }
        function bu() {
            return false
        }
        R = R ? Gt.defaults({}, R, Gt.pick(Kt, Lt)) : Kt;
        var xu = R.Date, ju = R.Error, wu = R.Math, mu = R.RegExp, Au = R.TypeError, Ou = R.Array.prototype, ku = R.Object.prototype, Eu = R.String.prototype, Su = R["__core-js_shared__"], Iu = function () {
            var t = /[^.]+$/.exec(Su && Su.keys && Su.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(), Ru = R.Function.prototype.toString, Wu = ku.hasOwnProperty, Bu = 0, Lu = Ru.call(Object), Mu = ku.toString, Cu = Kt._, zu = mu("^" + Ru.call(Wu).replace(it, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Uu = Tt ? R.Buffer : T, $u = R.Reflect, Du = R.Symbol, Fu = R.Uint8Array, Nu = $u ? $u.f : T, Pu = Object.getOwnPropertySymbols, Zu = typeof (Zu = Du && Du.iterator) == "symbol" ? Zu : T, Tu = Object.create, qu = ku.propertyIsEnumerable, Vu = Ou.splice, Ku = wu.ceil, Gu = wu.floor, Ju = Object.getPrototypeOf, Yu = R.isFinite, Hu = Ou.join, Qu = Object.keys, Xu = wu.max, to = wu.min, no = R.parseInt, ro = wu.random, eo = Eu.replace, uo = Ou.reverse, oo = Eu.split, io = Zr(R, "DataView"), fo = Zr(R, "Map"), co = Zr(R, "Promise"), ao = Zr(R, "Set"), lo = Zr(R, "WeakMap"), so = Zr(Object, "create"), ho = lo && new lo, po = !qu.call({
            valueOf: 1}, "valueOf"), _o = {}, vo = ce(io), go = ce(fo), yo = ce(co), bo = ce(ao), xo = ce(lo), jo = Du ? Du.prototype : T, wo = jo ? jo.valueOf : T, mo = jo ? jo.toString : T;
        Ot.templateSettings = {escape: tt, evaluate: nt, interpolate: rt, variable: "", imports: {_: Ot}}, Ot.prototype = kt.prototype, Ot.prototype.constructor = Ot, zt.prototype = un(kt.prototype), zt.prototype.constructor = zt, Ut.prototype = un(kt.prototype), Ut.prototype.constructor = Ut, $t.prototype.clear = function () {
            this.__data__ = so ? so(null) : {}
        }, $t.prototype["delete"] = function (t) {
            return this.has(t) && delete this.__data__[t];
        }, $t.prototype.get = function (t) {
            var n = this.__data__;
            return so ? (t = n[t], "__lodash_hash_undefined__" === t ? T : t) : Wu.call(n, t) ? n[t] : T
        }, $t.prototype.has = function (t) {
            var n = this.__data__;
            return so ? n[t] !== T : Wu.call(n, t)
        }, $t.prototype.set = function (t, n) {
            return this.__data__[t] = so && n === T ? "__lodash_hash_undefined__" : n, this
        }, Dt.prototype.clear = function () {
            this.__data__ = []
        }, Dt.prototype["delete"] = function (t) {
            var n = this.__data__;
            return t = Ht(n, t), 0 > t ? false : (t == n.length - 1 ? n.pop() : Vu.call(n, t, 1), true)
        }, Dt.prototype.get = function (t) {
            var n = this.__data__;
            return t = Ht(n, t), 0 > t ? T : n[t][1]
        }, Dt.prototype.has = function (t) {
            return-1 < Ht(this.__data__, t)
        }, Dt.prototype.set = function (t, n) {
            var r = this.__data__, e = Ht(r, t);
            return 0 > e ? r.push([t, n]) : r[e][1] = n, this
        }, Pt.prototype.clear = function () {
            this.__data__ = {hash: new $t, map: new (fo || Dt), string: new $t}
        }, Pt.prototype["delete"] = function (t) {
            return Nr(this, t)["delete"](t)
        }, Pt.prototype.get = function (t) {
            return Nr(this, t).get(t)
        }, Pt.prototype.has = function (t) {
            return Nr(this, t).has(t)
        }, Pt.prototype.set = function (t, n) {
            return Nr(this, t).set(t, n), this
        }, Zt.prototype.add = Zt.prototype.push = function (t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"), this
        }, Zt.prototype.has = function (t) {
            return this.__data__.has(t)
        }, qt.prototype.clear = function () {
            this.__data__ = new Dt
        }, qt.prototype["delete"] = function (t) {
            return this.__data__["delete"](t)
        }, qt.prototype.get = function (t) {
            return this.__data__.get(t)
        }, qt.prototype.has = function (t) {
            return this.__data__.has(t)
        }, qt.prototype.set = function (t, n) {
            var r = this.__data__;
            return r instanceof Dt && 200 == r.__data__.length && (r = this.__data__ = new Pt(r.__data__)),
                    r.set(t, n), this
        };
        var Ao = vr(hn), Oo = vr(pn, true), ko = gr(), Eo = gr(true);
        Nu && !qu.call({valueOf: 1}, "valueOf") && (En = function (t) {
            return z(Nu(t))
        });
        var So = ho ? function (t, n) {
            return ho.set(t, n), t
        } : pu, Io = ao && 1 / D(new ao([, -0]))[1] == q ? function (t) {
            return new ao(t)
        } : gu, Ro = ho ? function (t) {
            return ho.get(t)
        } : gu, Wo = Un("length");
        Pu || (Tr = yu);
        var Bo = Pu ? function (t) {
            for (var n = []; t; )
                s(n, Tr(t)), t = Ju(Object(t));
            return n
        } : Tr;
        (io && "[object DataView]" != qr(new io(new ArrayBuffer(1))) || fo && "[object Map]" != qr(new fo) || co && "[object Promise]" != qr(co.resolve()) || ao && "[object Set]" != qr(new ao) || lo && "[object WeakMap]" != qr(new lo)) && (qr = function (t) {
            var n = Mu.call(t);
            if (t = (t = "[object Object]" == n ? t.constructor : T) ? ce(t) : T)
                switch (t) {
                    case vo:
                        return"[object DataView]";
                    case go:
                        return"[object Map]";
                    case yo:
                        return"[object Promise]";
                    case bo:
                        return"[object Set]";
                    case xo:
                        return"[object WeakMap]"
                }
            return n
        });
        var Lo = Su ? Fe : bu, Mo = function () {
            var t = 0, n = 0;
            return function (r, e) {
                var u = Ee(), o = 16 - (u - n);
                if (n = u, o > 0) {
                    if (150 <= ++t)
                        return r
                } else
                    t = 0;
                return So(r, e)
            }
        }(), Co = Le(function (t) {
            var n = [];
            return eu(t).replace(ot, function (t, r, e, u) {
                n.push(e ? u.replace(ht, "$1") : r || t)
            }),
            n
        }), zo = Me(function (t, n) {
            return $e(t) ? fn(t, sn(n, 1, $e, true)) : []
        }), Uo = Me(function (t, n) {
            var r = ve(n);
            return $e(r) && (r = T), $e(t) ? fn(t, sn(n, 1, $e, true), Fr(r)) : []
        }), $o = Me(function (t, n) {
            var r = ve(n);
            return $e(r) && (r = T), $e(t) ? fn(t, sn(n, 1, $e, true), T, r) : []
        }), Do = Me(function (t) {
            var n = l(t, rr);
            return n.length && n[0] === t[0] ? xn(n) : []
        }), Fo = Me(function (t) {
            var n = ve(t), r = l(t, rr);
            return n === ve(r) ? n = T : r.pop(), r.length && r[0] === t[0] ? xn(r, Fr(n)) : []
        }), No = Me(function (t) {
            var n = ve(t), r = l(t, rr);
            return n === ve(r) ? n = T : r.pop(), r.length && r[0] === t[0] ? xn(r, T, n) : [];
        }), Po = Me(ge), Zo = Me(function (t, n) {
            n = sn(n, 1);
            var r = t ? t.length : 0, e = tn(t, n);
            return Fn(t, l(n, function (t) {
                return Xr(t, r) ? +t : t
            }).sort(fr)), e
        }), To = Me(function (t) {
            return Hn(sn(t, 1, $e, true))
        }), qo = Me(function (t) {
            var n = ve(t);
            return $e(n) && (n = T), Hn(sn(t, 1, $e, true), Fr(n))
        }), Vo = Me(function (t) {
            var n = ve(t);
            return $e(n) && (n = T), Hn(sn(t, 1, $e, true), T, n)
        }), Ko = Me(function (t, n) {
            return $e(t) ? fn(t, n) : []
        }), Go = Me(function (t) {
            return tr(f(t, $e))
        }), Jo = Me(function (t) {
            var n = ve(t);
            return $e(n) && (n = T), tr(f(t, $e), Fr(n))
        }), Yo = Me(function (t) {
            var n = ve(t);
            return $e(n) && (n = T), tr(f(t, $e), T, n)
        }), Ho = Me(ye), Qo = Me(function (t) {
            var n = t.length, n = n > 1 ? t[n - 1] : T, n = typeof n == "function" ? (t.pop(), n) : T;
            return be(t, n)
        }), Xo = Me(function (t) {
            function n(n) {
                return tn(n, t)
            }
            t = sn(t, 1);
            var r = t.length, e = r ? t[0] : 0, u = this.__wrapped__;
            return!(r > 1 || this.__actions__.length) && u instanceof Ut && Xr(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({func: je, args: [n], thisArg: T}), new zt(u, this.__chain__).thru(function (t) {
                return r && !t.length && t.push(T), t
            })) : this.thru(n)
        }), ti = pr(function (t, n, r) {
            Wu.call(t, r) ? ++t[r] : t[r] = 1
        }), ni = wr(he), ri = wr(pe), ei = pr(function (t, n, r) {
            Wu.call(t, r) ? t[r].push(n) : t[r] = [n]
        }), ui = Me(function (t, n, e) {
            var u = -1, o = typeof n == "function", i = ne(n), f = Ue(t) ? Array(t.length) : [];
            return Ao(t, function (t) {
                var c = o ? n : i && null != t ? t[n] : T;
                f[++u] = c ? r(c, t, e) : wn(t, n, e)
            }), f
        }), oi = pr(function (t, n, r) {
            t[r] = n
        }), ii = pr(function (t, n, r) {
            t[r ? 0 : 1].push(n)
        }, function () {
            return[[], []]
        }), fi = Me(function (t, n) {
            if (null == t)
                return[];
            var r = n.length;
            return r > 1 && te(t, n[0], n[1]) ? n = [] : r > 2 && te(n[0], n[1], n[2]) && (n = [n[0]]),
                    n = 1 == n.length && yi(n[0]) ? n[0] : sn(n, 1, Qr), Mn(t, n, [])
        }), ci = Me(function (t, n, r) {
            var e = 1;
            if (r.length)
                var u = $(r, Dr(ci)), e = 32 | e;
            return Cr(t, e, n, r, u)
        }), ai = Me(function (t, n, r) {
            var e = 3;
            if (r.length)
                var u = $(r, Dr(ai)), e = 32 | e;
            return Cr(n, e, t, r, u)
        }), li = Me(function (t, n) {
            return on(t, 1, n)
        }), si = Me(function (t, n, r) {
            return on(t, nu(n) || 0, r)
        });
        Le.Cache = Pt;
        var hi = Me(function (t, n) {
            n = 1 == n.length && yi(n[0]) ? l(n[0], O(Fr())) : l(sn(n, 1, Qr), O(Fr()));
            var e = n.length;
            return Me(function (u) {
                for (var o = -1, i = to(u.length, e); ++o < i; )
                    u[o] = n[o].call(this, u[o]);
                return r(t, this, u)
            })
        }), pi = Me(function (t, n) {
            var r = $(n, Dr(pi));
            return Cr(t, 32, T, n, r)
        }), _i = Me(function (t, n) {
            var r = $(n, Dr(_i));
            return Cr(t, 64, T, n, r)
        }), vi = Me(function (t, n) {
            return Cr(t, 256, T, T, T, sn(n, 1))
        }), gi = Wr(dn), di = Wr(function (t, n) {
            return t >= n
        }), yi = Array.isArray, bi = Uu ? function (t) {
            return t instanceof Uu
        } : bu, xi = Wr(Sn), ji = Wr(function (t, n) {
            return n >= t
        }), wi = _r(function (t, n) {
            if (po || ee(n) || Ue(n))
                sr(n, iu(n), t);
            else
                for (var r in n)
                    Wu.call(n, r) && Yt(t, r, n[r])
        }), mi = _r(function (t, n) {
            if (po || ee(n) || Ue(n))
                sr(n, fu(n), t);
            else
                for (var r in n)
                    Yt(t, r, n[r]);
        }), Ai = _r(function (t, n, r, e) {
            sr(n, fu(n), t, e)
        }), Oi = _r(function (t, n, r, e) {
            sr(n, iu(n), t, e)
        }), ki = Me(function (t, n) {
            return tn(t, sn(n, 1))
        }), Ei = Me(function (t) {
            return t.push(T, Vt), r(Ai, T, t)
        }), Si = Me(function (t) {
            return t.push(T, oe), r(Li, T, t)
        }), Ii = Or(function (t, n, r) {
            t[n] = r
        }, hu(pu)), Ri = Or(function (t, n, r) {
            Wu.call(t, n) ? t[n].push(r) : t[n] = [r]
        }, Fr), Wi = Me(wn), Bi = _r(function (t, n, r) {
            Bn(t, n, r)
        }), Li = _r(function (t, n, r, e) {
            Bn(t, n, r, e)
        }), Mi = Me(function (t, n) {
            return null == t ? {} : (n = l(sn(n, 1), fe), Cn(t, fn(gn(t, fu, Bo), n)))
        }), Ci = Me(function (t, n) {
            return null == t ? {} : Cn(t, l(sn(n, 1), fe))
        }), zi = Mr(iu), Ui = Mr(fu), $i = br(function (t, n, r) {
            return n = n.toLowerCase(), t + (r ? au(n) : n)
        }), Di = br(function (t, n, r) {
            return t + (r ? "-" : "") + n.toLowerCase()
        }), Fi = br(function (t, n, r) {
            return t + (r ? " " : "") + n.toLowerCase()
        }), Ni = yr("toLowerCase"), Pi = br(function (t, n, r) {
            return t + (r ? "_" : "") + n.toLowerCase()
        }), Zi = br(function (t, n, r) {
            return t + (r ? " " : "") + qi(n)
        }), Ti = br(function (t, n, r) {
            return t + (r ? " " : "") + n.toUpperCase()
        }), qi = yr("toUpperCase"), Vi = Me(function (t, n) {
            try {
                return r(t, T, n)
            } catch (e) {
                return De(e) ? e : new ju(e)
            }
        }), Ki = Me(function (t, n) {
            return u(sn(n, 1), function (n) {
                n = fe(n), t[n] = ci(t[n], t)
            }), t
        }), Gi = mr(), Ji = mr(true), Yi = Me(function (t, n) {
            return function (r) {
                return wn(r, t, n)
            }
        }), Hi = Me(function (t, n) {
            return function (r) {
                return wn(t, r, n)
            }
        }), Qi = Er(l), Xi = Er(i), tf = Er(_), nf = Rr(), rf = Rr(true), ef = kr(function (t, n) {
            return t + n
        }), uf = Lr("ceil"), of = kr(function (t, n) {
            return t / n
        }), ff = Lr("floor"), cf = kr(function (t, n) {
            return t * n
        }), af = Lr("round"), lf = kr(function (t, n) {
            return t - n
        });
        return Ot.after = function (t, n) {
            if (typeof n != "function")
                throw new Au("Expected a function");
            return t = Xe(t), function () {
                return 1 > --t ? n.apply(this, arguments) : void 0
            }
        }, Ot.ary = Se, Ot.assign = wi, Ot.assignIn = mi, Ot.assignInWith = Ai, Ot.assignWith = Oi, Ot.at = ki, Ot.before = Ie, Ot.bind = ci, Ot.bindAll = Ki, Ot.bindKey = ai, Ot.castArray = function () {
            if (!arguments.length)
                return[];
            var t = arguments[0];
            return yi(t) ? t : [t]
        }, Ot.chain = xe, Ot.chunk = function (t, n, r) {
            if (n = (r ? te(t, n, r) : n === T) ? 1 : Xu(Xe(n), 0), r = t ? t.length : 0, !r || 1 > n)
                return[];
            for (var e = 0, u = 0, o = Array(Ku(r / n)); r > e; )
                o[u++] = Tn(t, e, e += n);
            return o
        }, Ot.compact = function (t) {
            for (var n = -1, r = t ? t.length : 0, e = 0, u = []; ++n < r; ) {
                var o = t[n];
                o && (u[e++] = o)
            }
            return u
        }, Ot.concat = function () {
            for (var t = arguments.length, n = Array(t ? t - 1 : 0), r = arguments[0], e = t; e--; )
                n[e - 1] = arguments[e];
            return t ? s(yi(r) ? lr(r) : [r], sn(n, 1)) : []
        }, Ot.cond = function (t) {
            var n = t ? t.length : 0, e = Fr();
            return t = n ? l(t, function (t) {
                if ("function" != typeof t[1])
                    throw new Au("Expected a function");
                return[e(t[0]), t[1]]
            }) : [], Me(function (e) {
                for (var u = -1; ++u < n; ) {
                    var o = t[u];
                    if (r(o[0], this, e))
                        return r(o[1], this, e)
                }
            })
        }, Ot.conforms = function (t) {
            return en(rn(t, true))
        }, Ot.constant = hu, Ot.countBy = ti,
                Ot.create = function (t, n) {
                    var r = un(t);
                    return n ? Xt(r, n) : r
                }, Ot.curry = Re, Ot.curryRight = We, Ot.debounce = Be, Ot.defaults = Ei, Ot.defaultsDeep = Si, Ot.defer = li, Ot.delay = si, Ot.difference = zo, Ot.differenceBy = Uo, Ot.differenceWith = $o, Ot.drop = le, Ot.dropRight = se, Ot.dropRightWhile = function (t, n) {
            return t && t.length ? Qn(t, Fr(n, 3), true, true) : []
        }, Ot.dropWhile = function (t, n) {
            return t && t.length ? Qn(t, Fr(n, 3), true) : []
        }, Ot.fill = function (t, n, r, e) {
            var u = t ? t.length : 0;
            if (!u)
                return[];
            for (r && typeof r != "number" && te(t, n, r) && (r = 0, e = u), u = t.length,
                    r = Xe(r), 0 > r && (r = - r > u?0:u + r), e = e === T || e > u?u:Xe(e), 0 > e && (e += u), e = r > e?0:tu(e); e > r; )
                t[r++] = n;
            return t
        }, Ot.filter = function (t, n) {
            return(yi(t) ? f : ln)(t, Fr(n, 3))
        }, Ot.flatMap = function (t, n) {
            return sn(Oe(t, n), 1)
        }, Ot.flatMapDeep = function (t, n) {
            return sn(Oe(t, n), q)
        }, Ot.flatMapDepth = function (t, n, r) {
            return r = r === T ? 1 : Xe(r), sn(Oe(t, n), r)
        }, Ot.flatten = function (t) {
            return t && t.length ? sn(t, 1) : []
        }, Ot.flattenDeep = function (t) {
            return t && t.length ? sn(t, q) : []
        }, Ot.flattenDepth = function (t, n) {
            return t && t.length ? (n = n === T ? 1 : Xe(n), sn(t, n)) : [];
        }, Ot.flip = function (t) {
            return Cr(t, 512)
        }, Ot.flow = Gi, Ot.flowRight = Ji, Ot.fromPairs = function (t) {
            for (var n = -1, r = t ? t.length : 0, e = {}; ++n < r; ) {
                var u = t[n];
                e[u[0]] = u[1]
            }
            return e
        }, Ot.functions = function (t) {
            return null == t ? [] : _n(t, iu(t))
        }, Ot.functionsIn = function (t) {
            return null == t ? [] : _n(t, fu(t))
        }, Ot.groupBy = ei, Ot.initial = function (t) {
            return se(t, 1)
        }, Ot.intersection = Do, Ot.intersectionBy = Fo, Ot.intersectionWith = No, Ot.invert = Ii, Ot.invertBy = Ri, Ot.invokeMap = ui, Ot.iteratee = _u, Ot.keyBy = oi, Ot.keys = iu, Ot.keysIn = fu, Ot.map = Oe,
                Ot.mapKeys = function (t, n) {
                    var r = {};
                    return n = Fr(n, 3), hn(t, function (t, e, u) {
                        r[n(t, e, u)] = t
                    }), r
                }, Ot.mapValues = function (t, n) {
            var r = {};
            return n = Fr(n, 3), hn(t, function (t, e, u) {
                r[e] = n(t, e, u)
            }), r
        }, Ot.matches = function (t) {
            return Rn(rn(t, true))
        }, Ot.matchesProperty = function (t, n) {
            return Wn(t, rn(n, true))
        }, Ot.memoize = Le, Ot.merge = Bi, Ot.mergeWith = Li, Ot.method = Yi, Ot.methodOf = Hi, Ot.mixin = vu, Ot.negate = function (t) {
            if (typeof t != "function")
                throw new Au("Expected a function");
            return function () {
                return!t.apply(this, arguments)
            }
        }, Ot.nthArg = function (t) {
            return t = Xe(t), Me(function (n) {
                return Ln(n, t)
            })
        }, Ot.omit = Mi, Ot.omitBy = function (t, n) {
            return n = Fr(n), zn(t, function (t, r) {
                return!n(t, r)
            })
        }, Ot.once = function (t) {
            return Ie(2, t)
        }, Ot.orderBy = function (t, n, r, e) {
            return null == t ? [] : (yi(n) || (n = null == n ? [] : [n]), r = e ? T : r, yi(r) || (r = null == r ? [] : [r]), Mn(t, n, r))
        }, Ot.over = Qi, Ot.overArgs = hi, Ot.overEvery = Xi, Ot.overSome = tf, Ot.partial = pi, Ot.partialRight = _i, Ot.partition = ii, Ot.pick = Ci, Ot.pickBy = function (t, n) {
            return null == t ? {} : zn(t, Fr(n))
        }, Ot.property = du, Ot.propertyOf = function (t) {
            return function (n) {
                return null == t ? T : vn(t, n)
            }
        }, Ot.pull = Po, Ot.pullAll = ge, Ot.pullAllBy = function (t, n, r) {
            return t && t.length && n && n.length ? Dn(t, n, Fr(r)) : t
        }, Ot.pullAllWith = function (t, n, r) {
            return t && t.length && n && n.length ? Dn(t, n, T, r) : t
        }, Ot.pullAt = Zo, Ot.range = nf, Ot.rangeRight = rf, Ot.rearg = vi, Ot.reject = function (t, n) {
            var r = yi(t) ? f : ln;
            return n = Fr(n, 3), r(t, function (t, r, e) {
                return!n(t, r, e)
            })
        }, Ot.remove = function (t, n) {
            var r = [];
            if (!t || !t.length)
                return r;
            var e = -1, u = [], o = t.length;
            for (n = Fr(n, 3); ++e < o; ) {
                var i = t[e];
                n(i, e, t) && (r.push(i),
                        u.push(e))
            }
            return Fn(t, u), r
        }, Ot.rest = Me, Ot.reverse = de, Ot.sampleSize = ke, Ot.set = function (t, n, r) {
            return null == t ? t : Zn(t, n, r)
        }, Ot.setWith = function (t, n, r, e) {
            return e = typeof e == "function" ? e : T, null == t ? t : Zn(t, n, r, e)
        }, Ot.shuffle = function (t) {
            return ke(t, 4294967295)
        }, Ot.slice = function (t, n, r) {
            var e = t ? t.length : 0;
            return e ? (r && typeof r != "number" && te(t, n, r) ? (n = 0, r = e) : (n = null == n ? 0 : Xe(n), r = r === T ? e : Xe(r)), Tn(t, n, r)) : []
        }, Ot.sortBy = fi, Ot.sortedUniq = function (t) {
            return t && t.length ? Gn(t) : []
        }, Ot.sortedUniqBy = function (t, n) {
            return t && t.length ? Gn(t, Fr(n)) : []
        }, Ot.split = function (t, n, r) {
            return r && typeof r != "number" && te(t, n, r) && (n = r = T), r = r === T ? 4294967295 : r >>> 0, r ? (t = eu(t)) && (typeof n == "string" || null != n && !Ke(n)) && (n = Yn(n), "" == n && Wt.test(t)) ? ur(t.match(It), 0, r) : oo.call(t, n, r) : []
        }, Ot.spread = function (t, n) {
            if (typeof t != "function")
                throw new Au("Expected a function");
            return n = n === T ? 0 : Xu(Xe(n), 0), Me(function (e) {
                var u = e[n];
                return e = ur(e, 0, n), u && s(e, u), r(t, this, e)
            })
        }, Ot.tail = function (t) {
            return le(t, 1)
        }, Ot.take = function (t, n, r) {
            return t && t.length ? (n = r || n === T ? 1 : Xe(n),
                    Tn(t, 0, 0 > n ? 0 : n)) : []
        }, Ot.takeRight = function (t, n, r) {
            var e = t ? t.length : 0;
            return e ? (n = r || n === T ? 1 : Xe(n), n = e - n, Tn(t, 0 > n ? 0 : n, e)) : []
        }, Ot.takeRightWhile = function (t, n) {
            return t && t.length ? Qn(t, Fr(n, 3), false, true) : []
        }, Ot.takeWhile = function (t, n) {
            return t && t.length ? Qn(t, Fr(n, 3)) : []
        }, Ot.tap = function (t, n) {
            return n(t), t
        }, Ot.throttle = function (t, n, r) {
            var e = true, u = true;
            if (typeof t != "function")
                throw new Au("Expected a function");
            return Ze(r) && (e = "leading"in r ? !!r.leading : e, u = "trailing"in r ? !!r.trailing : u), Be(t, n, {leading: e, maxWait: n,
                trailing: u})
        }, Ot.thru = je, Ot.toArray = He, Ot.toPairs = zi, Ot.toPairsIn = Ui, Ot.toPath = function (t) {
            return yi(t) ? l(t, fe) : Je(t) ? [t] : lr(Co(t))
        }, Ot.toPlainObject = ru, Ot.transform = function (t, n, r) {
            var e = yi(t) || Ye(t);
            if (n = Fr(n, 4), null == r)
                if (e || Ze(t)) {
                    var o = t.constructor;
                    r = e ? yi(t) ? new o : [] : Fe(o) ? un(Ju(Object(t))) : {}
                } else
                    r = {};
            return(e ? u : hn)(t, function (t, e, u) {
                return n(r, t, e, u)
            }), r
        }, Ot.unary = function (t) {
            return Se(t, 1)
        }, Ot.union = To, Ot.unionBy = qo, Ot.unionWith = Vo, Ot.uniq = function (t) {
            return t && t.length ? Hn(t) : []
        }, Ot.uniqBy = function (t, n) {
            return t && t.length ? Hn(t, Fr(n)) : []
        }, Ot.uniqWith = function (t, n) {
            return t && t.length ? Hn(t, T, n) : []
        }, Ot.unset = function (t, n) {
            var r;
            if (null == t)
                r = true;
            else {
                r = t;
                var e = n, e = ne(e, r) ? [e] : er(e);
                r = ie(r, e), e = fe(ve(e)), r = !(null != r && yn(r, e)) || delete r[e]
            }
            return r
        }, Ot.unzip = ye, Ot.unzipWith = be, Ot.update = function (t, n, r) {
            return null == t ? t : Zn(t, n, (typeof r == "function" ? r : pu)(vn(t, n)), void 0)
        }, Ot.updateWith = function (t, n, r, e) {
            return e = typeof e == "function" ? e : T, null != t && (t = Zn(t, n, (typeof r == "function" ? r : pu)(vn(t, n)), e)), t
        }, Ot.values = cu,
                Ot.valuesIn = function (t) {
                    return null == t ? [] : k(t, fu(t))
                }, Ot.without = Ko, Ot.words = su, Ot.wrap = function (t, n) {
            return n = null == n ? pu : n, pi(n, t)
        }, Ot.xor = Go, Ot.xorBy = Jo, Ot.xorWith = Yo, Ot.zip = Ho, Ot.zipObject = function (t, n) {
            return nr(t || [], n || [], Yt)
        }, Ot.zipObjectDeep = function (t, n) {
            return nr(t || [], n || [], Zn)
        }, Ot.zipWith = Qo, Ot.entries = zi, Ot.entriesIn = Ui, Ot.extend = mi, Ot.extendWith = Ai, vu(Ot, Ot), Ot.add = ef, Ot.attempt = Vi, Ot.camelCase = $i, Ot.capitalize = au, Ot.ceil = uf, Ot.clamp = function (t, n, r) {
            return r === T && (r = n, n = T), r !== T && (r = nu(r),
                    r = r === r ? r : 0), n !== T && (n = nu(n), n = n === n ? n : 0), nn(nu(t), n, r)
        }, Ot.clone = function (t) {
            return rn(t, false, true)
        }, Ot.cloneDeep = function (t) {
            return rn(t, true, true)
        }, Ot.cloneDeepWith = function (t, n) {
            return rn(t, true, true, n)
        }, Ot.cloneWith = function (t, n) {
            return rn(t, false, true, n)
        }, Ot.deburr = lu, Ot.divide = of, Ot.endsWith = function (t, n, r) {
            t = eu(t), n = Yn(n);
            var e = t.length;
            return r = r === T ? e : nn(Xe(r), 0, e), r -= n.length, r >= 0 && t.indexOf(n, r) == r
        }, Ot.eq = Ce, Ot.escape = function (t) {
            return(t = eu(t)) && X.test(t) ? t.replace(H, B) : t
        }, Ot.escapeRegExp = function (t) {
            return(t = eu(t)) && ft.test(t) ? t.replace(it, "\\$&") : t
        }, Ot.every = function (t, n, r) {
            var e = yi(t) ? i : cn;
            return r && te(t, n, r) && (n = T), e(t, Fr(n, 3))
        }, Ot.find = ni, Ot.findIndex = he, Ot.findKey = function (t, n) {
            return v(t, Fr(n, 3), hn)
        }, Ot.findLast = ri, Ot.findLastIndex = pe, Ot.findLastKey = function (t, n) {
            return v(t, Fr(n, 3), pn)
        }, Ot.floor = ff, Ot.forEach = me, Ot.forEachRight = Ae, Ot.forIn = function (t, n) {
            return null == t ? t : ko(t, Fr(n, 3), fu)
        }, Ot.forInRight = function (t, n) {
            return null == t ? t : Eo(t, Fr(n, 3), fu)
        }, Ot.forOwn = function (t, n) {
            return t && hn(t, Fr(n, 3));
        }, Ot.forOwnRight = function (t, n) {
            return t && pn(t, Fr(n, 3))
        }, Ot.get = uu, Ot.gt = gi, Ot.gte = di, Ot.has = function (t, n) {
            return null != t && Vr(t, n, yn)
        }, Ot.hasIn = ou, Ot.head = _e, Ot.identity = pu, Ot.includes = function (t, n, r, e) {
            return t = Ue(t) ? t : cu(t), r = r && !e ? Xe(r) : 0, e = t.length, 0 > r && (r = Xu(e + r, 0)), Ge(t) ? e >= r && -1 < t.indexOf(n, r) : !!e && -1 < d(t, n, r)
        }, Ot.indexOf = function (t, n, r) {
            var e = t ? t.length : 0;
            return e ? (r = null == r ? 0 : Xe(r), 0 > r && (r = Xu(e + r, 0)), d(t, n, r)) : -1
        }, Ot.inRange = function (t, n, r) {
            return n = nu(n) || 0, r === T ? (r = n, n = 0) : r = nu(r) || 0, t = nu(t),
                    t >= to(n, r) && t < Xu(n, r)
        }, Ot.invoke = Wi, Ot.isArguments = ze, Ot.isArray = yi, Ot.isArrayBuffer = function (t) {
            return Te(t) && "[object ArrayBuffer]" == Mu.call(t)
        }, Ot.isArrayLike = Ue, Ot.isArrayLikeObject = $e, Ot.isBoolean = function (t) {
            return true === t || false === t || Te(t) && "[object Boolean]" == Mu.call(t)
        }, Ot.isBuffer = bi, Ot.isDate = function (t) {
            return Te(t) && "[object Date]" == Mu.call(t)
        }, Ot.isElement = function (t) {
            return!!t && 1 === t.nodeType && Te(t) && !Ve(t)
        }, Ot.isEmpty = function (t) {
            if (Ue(t) && (yi(t) || Ge(t) || Fe(t.splice) || ze(t) || bi(t)))
                return!t.length;
            if (Te(t)) {
                var n = qr(t);
                if ("[object Map]" == n || "[object Set]" == n)
                    return!t.size
            }
            for (var r in t)
                if (Wu.call(t, r))
                    return false;
            return!(po && iu(t).length)
        }, Ot.isEqual = function (t, n) {
            return mn(t, n)
        }, Ot.isEqualWith = function (t, n, r) {
            var e = (r = typeof r == "function" ? r : T) ? r(t, n) : T;
            return e === T ? mn(t, n, r) : !!e
        }, Ot.isError = De, Ot.isFinite = function (t) {
            return typeof t == "number" && Yu(t)
        }, Ot.isFunction = Fe, Ot.isInteger = Ne, Ot.isLength = Pe, Ot.isMap = function (t) {
            return Te(t) && "[object Map]" == qr(t)
        }, Ot.isMatch = function (t, n) {
            return t === n || An(t, n, Pr(n));
        }, Ot.isMatchWith = function (t, n, r) {
            return r = typeof r == "function" ? r : T, An(t, n, Pr(n), r)
        }, Ot.isNaN = function (t) {
            return qe(t) && t != +t
        }, Ot.isNative = function (t) {
            if (Lo(t))
                throw new ju("This method is not supported with `core-js`. Try https://github.com/es-shims.");
            return On(t)
        }, Ot.isNil = function (t) {
            return null == t
        }, Ot.isNull = function (t) {
            return null === t
        }, Ot.isNumber = qe, Ot.isObject = Ze, Ot.isObjectLike = Te, Ot.isPlainObject = Ve, Ot.isRegExp = Ke, Ot.isSafeInteger = function (t) {
            return Ne(t) && t >= -9007199254740991 && 9007199254740991 >= t;
        }, Ot.isSet = function (t) {
            return Te(t) && "[object Set]" == qr(t)
        }, Ot.isString = Ge, Ot.isSymbol = Je, Ot.isTypedArray = Ye, Ot.isUndefined = function (t) {
            return t === T
        }, Ot.isWeakMap = function (t) {
            return Te(t) && "[object WeakMap]" == qr(t)
        }, Ot.isWeakSet = function (t) {
            return Te(t) && "[object WeakSet]" == Mu.call(t)
        }, Ot.join = function (t, n) {
            return t ? Hu.call(t, n) : ""
        }, Ot.kebabCase = Di, Ot.last = ve, Ot.lastIndexOf = function (t, n, r) {
            var e = t ? t.length : 0;
            if (!e)
                return-1;
            var u = e;
            if (r !== T && (u = Xe(r), u = (0 > u ? Xu(e + u, 0) : to(u, e - 1)) + 1), n !== n)
                return M(t, u - 1, true);
            for (; u--; )
                if (t[u] === n)
                    return u;
            return-1
        }, Ot.lowerCase = Fi, Ot.lowerFirst = Ni, Ot.lt = xi, Ot.lte = ji, Ot.max = function (t) {
            return t && t.length ? an(t, pu, dn) : T
        }, Ot.maxBy = function (t, n) {
            return t && t.length ? an(t, Fr(n), dn) : T
        }, Ot.mean = function (t) {
            return b(t, pu)
        }, Ot.meanBy = function (t, n) {
            return b(t, Fr(n))
        }, Ot.min = function (t) {
            return t && t.length ? an(t, pu, Sn) : T
        }, Ot.minBy = function (t, n) {
            return t && t.length ? an(t, Fr(n), Sn) : T
        }, Ot.stubArray = yu, Ot.stubFalse = bu, Ot.stubObject = function () {
            return{}
        }, Ot.stubString = function () {
            return""
        }, Ot.stubTrue = function () {
            return true
        }, Ot.multiply = cf, Ot.nth = function (t, n) {
            return t && t.length ? Ln(t, Xe(n)) : T
        }, Ot.noConflict = function () {
            return Kt._ === this && (Kt._ = Cu), this
        }, Ot.noop = gu, Ot.now = Ee, Ot.pad = function (t, n, r) {
            t = eu(t);
            var e = (n = Xe(n)) ? N(t) : 0;
            return!n || e >= n ? t : (n = (n - e) / 2, Sr(Gu(n), r) + t + Sr(Ku(n), r))
        }, Ot.padEnd = function (t, n, r) {
            t = eu(t);
            var e = (n = Xe(n)) ? N(t) : 0;
            return n && n > e ? t + Sr(n - e, r) : t
        }, Ot.padStart = function (t, n, r) {
            t = eu(t);
            var e = (n = Xe(n)) ? N(t) : 0;
            return n && n > e ? Sr(n - e, r) + t : t
        }, Ot.parseInt = function (t, n, r) {
            return r || null == n ? n = 0 : n && (n = +n),
                    t = eu(t).replace(ct, ""), no(t, n || (vt.test(t) ? 16 : 10))
        }, Ot.random = function (t, n, r) {
            if (r && typeof r != "boolean" && te(t, n, r) && (n = r = T), r === T && (typeof n == "boolean" ? (r = n, n = T) : typeof t == "boolean" && (r = t, t = T)), t === T && n === T ? (t = 0, n = 1) : (t = nu(t) || 0, n === T ? (n = t, t = 0) : n = nu(n) || 0), t > n) {
                var e = t;
                t = n, n = e
            }
            return r || t % 1 || n % 1 ? (r = ro(), to(t + r * (n - t + Ft("1e-" + ((r + "").length - 1))), n)) : Nn(t, n)
        }, Ot.reduce = function (t, n, r) {
            var e = yi(t) ? h : x, u = 3 > arguments.length;
            return e(t, Fr(n, 4), r, u, Ao)
        }, Ot.reduceRight = function (t, n, r) {
            var e = yi(t) ? p : x, u = 3 > arguments.length;
            return e(t, Fr(n, 4), r, u, Oo)
        }, Ot.repeat = function (t, n, r) {
            return n = (r ? te(t, n, r) : n === T) ? 1 : Xe(n), Pn(eu(t), n)
        }, Ot.replace = function () {
            var t = arguments, n = eu(t[0]);
            return 3 > t.length ? n : eo.call(n, t[1], t[2])
        }, Ot.result = function (t, n, r) {
            n = ne(n, t) ? [n] : er(n);
            var e = -1, u = n.length;
            for (u || (t = T, u = 1); ++e < u; ) {
                var o = null == t ? T : t[fe(n[e])];
                o === T && (e = u, o = r), t = Fe(o) ? o.call(t) : o
            }
            return t
        }, Ot.round = af, Ot.runInContext = Z, Ot.sample = function (t) {
            t = Ue(t) ? t : cu(t);
            var n = t.length;
            return n > 0 ? t[Nn(0, n - 1)] : T
        }, Ot.size = function (t) {
            if (null == t)
                return 0;
            if (Ue(t)) {
                var n = t.length;
                return n && Ge(t) ? N(t) : n
            }
            return Te(t) && (n = qr(t), "[object Map]" == n || "[object Set]" == n) ? t.size : iu(t).length
        }, Ot.snakeCase = Pi, Ot.some = function (t, n, r) {
            var e = yi(t) ? _ : qn;
            return r && te(t, n, r) && (n = T), e(t, Fr(n, 3))
        }, Ot.sortedIndex = function (t, n) {
            return Vn(t, n)
        }, Ot.sortedIndexBy = function (t, n, r) {
            return Kn(t, n, Fr(r))
        }, Ot.sortedIndexOf = function (t, n) {
            var r = t ? t.length : 0;
            if (r) {
                var e = Vn(t, n);
                if (r > e && Ce(t[e], n))
                    return e
            }
            return-1
        }, Ot.sortedLastIndex = function (t, n) {
            return Vn(t, n, true)
        }, Ot.sortedLastIndexBy = function (t, n, r) {
            return Kn(t, n, Fr(r), true)
        }, Ot.sortedLastIndexOf = function (t, n) {
            if (t && t.length) {
                var r = Vn(t, n, true) - 1;
                if (Ce(t[r], n))
                    return r
            }
            return-1
        }, Ot.startCase = Zi, Ot.startsWith = function (t, n, r) {
            return t = eu(t), r = nn(Xe(r), 0, t.length), t.lastIndexOf(Yn(n), r) == r
        }, Ot.subtract = lf, Ot.sum = function (t) {
            return t && t.length ? w(t, pu) : 0
        }, Ot.sumBy = function (t, n) {
            return t && t.length ? w(t, Fr(n)) : 0
        }, Ot.template = function (t, n, r) {
            var e = Ot.templateSettings;
            r && te(t, n, r) && (n = T), t = eu(t), n = Ai({}, n, e, Vt), r = Ai({}, n.imports, e.imports, Vt);
            var u, o, i = iu(r), f = k(r, i), c = 0;
            r = n.interpolate || wt;
            var a = "__p+='";
            r = mu((n.escape || wt).source + "|" + r.source + "|" + (r === rt ? pt : wt).source + "|" + (n.evaluate || wt).source + "|$", "g");
            var l = "sourceURL"in n ? "//# sourceURL=" + n.sourceURL + "\n" : "";
            if (t.replace(r, function (n, r, e, i, f, l) {
                return e || (e = i), a += t.slice(c, l).replace(mt, L), r && (u = true, a += "'+__e(" + r + ")+'"), f && (o = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + n.length, n
            }), a += "';", (n = n.variable) || (a = "with(obj){" + a + "}"), a = (o ? a.replace(K, "") : a).replace(G, "$1").replace(J, "$1;"),
                    a = "function(" + (n || "obj") + "){" + (n ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", n = Vi(function () {
                return Function(i, l + "return " + a).apply(T, f)
            }), n.source = a, De(n))
                throw n;
            return n
        }, Ot.times = function (t, n) {
            if (t = Xe(t), 1 > t || t > 9007199254740991)
                return[];
            var r = 4294967295, e = to(t, 4294967295);
            for (n = Fr(n), t -= 4294967295, e = m(e, n); ++r < t; )
                n(r);
            return e
        }, Ot.toFinite = Qe, Ot.toInteger = Xe, Ot.toLength = tu, Ot.toLower = function (t) {
            return eu(t).toLowerCase()
        }, Ot.toNumber = nu, Ot.toSafeInteger = function (t) {
            return nn(Xe(t), -9007199254740991, 9007199254740991)
        }, Ot.toString = eu, Ot.toUpper = function (t) {
            return eu(t).toUpperCase()
        }, Ot.trim = function (t, n, r) {
            return(t = eu(t)) && (r || n === T) ? t.replace(ct, "") : t && (n = Yn(n)) ? (t = t.match(It), n = n.match(It), ur(t, S(t, n), I(t, n) + 1).join("")) : t
        }, Ot.trimEnd = function (t, n, r) {
            return(t = eu(t)) && (r || n === T) ? t.replace(lt, "") : t && (n = Yn(n)) ? (t = t.match(It), n = I(t, n.match(It)) + 1, ur(t, 0, n).join("")) : t
        }, Ot.trimStart = function (t, n, r) {
            return(t = eu(t)) && (r || n === T) ? t.replace(at, "") : t && (n = Yn(n)) ? (t = t.match(It), n = S(t, n.match(It)), ur(t, n).join("")) : t
        }, Ot.truncate = function (t, n) {
            var r = 30, e = "...";
            if (Ze(n))
                var u = "separator"in n ? n.separator : u, r = "length"in n ? Xe(n.length) : r, e = "omission"in n ? Yn(n.omission) : e;
            t = eu(t);
            var o = t.length;
            if (Wt.test(t))
                var i = t.match(It), o = i.length;
            if (r >= o)
                return t;
            if (o = r - N(e), 1 > o)
                return e;
            if (r = i ? ur(i, 0, o).join("") : t.slice(0, o), u === T)
                return r + e;
            if (i && (o += r.length - o), Ke(u)) {
                if (t.slice(o).search(u)) {
                    var f = r;
                    for (u.global || (u = mu(u.source, eu(_t.exec(u)) + "g")),
                            u.lastIndex = 0; i = u.exec(f); )
                        var c = i.index;
                    r = r.slice(0, c === T ? o : c)
                }
            } else
                t.indexOf(Yn(u), o) != o && (u = r.lastIndexOf(u), u > -1 && (r = r.slice(0, u)));
            return r + e
        }, Ot.unescape = function (t) {
            return(t = eu(t)) && Q.test(t) ? t.replace(Y, P) : t
        }, Ot.uniqueId = function (t) {
            var n = ++Bu;
            return eu(t) + n
        }, Ot.upperCase = Ti, Ot.upperFirst = qi, Ot.each = me, Ot.eachRight = Ae, Ot.first = _e, vu(Ot, function () {
            var t = {};
            return hn(Ot, function (n, r) {
                Wu.call(Ot.prototype, r) || (t[r] = n)
            }), t
        }(), {chain: false}), Ot.VERSION = "4.13.1", u("bind bindKey curry curryRight partial partialRight".split(" "), function (t) {
            Ot[t].placeholder = Ot
        }), u(["drop", "take"], function (t, n) {
            Ut.prototype[t] = function (r) {
                var e = this.__filtered__;
                if (e && !n)
                    return new Ut(this);
                r = r === T ? 1 : Xu(Xe(r), 0);
                var u = this.clone();
                return e ? u.__takeCount__ = to(r, u.__takeCount__) : u.__views__.push({size: to(r, 4294967295), type: t + (0 > u.__dir__ ? "Right" : "")}), u
            }, Ut.prototype[t + "Right"] = function (n) {
                return this.reverse()[t](n).reverse()
            }
        }), u(["filter", "map", "takeWhile"], function (t, n) {
            var r = n + 1, e = 1 == r || 3 == r;
            Ut.prototype[t] = function (t) {
                var n = this.clone();
                return n.__iteratees__.push({
                    iteratee: Fr(t, 3), type: r}), n.__filtered__ = n.__filtered__ || e, n
            }
        }), u(["head", "last"], function (t, n) {
            var r = "take" + (n ? "Right" : "");
            Ut.prototype[t] = function () {
                return this[r](1).value()[0]
            }
        }), u(["initial", "tail"], function (t, n) {
            var r = "drop" + (n ? "" : "Right");
            Ut.prototype[t] = function () {
                return this.__filtered__ ? new Ut(this) : this[r](1)
            }
        }), Ut.prototype.compact = function () {
            return this.filter(pu)
        }, Ut.prototype.find = function (t) {
            return this.filter(t).head()
        }, Ut.prototype.findLast = function (t) {
            return this.reverse().find(t);
        }, Ut.prototype.invokeMap = Me(function (t, n) {
            return typeof t == "function" ? new Ut(this) : this.map(function (r) {
                return wn(r, t, n)
            })
        }), Ut.prototype.reject = function (t) {
            return t = Fr(t, 3), this.filter(function (n) {
                return!t(n)
            })
        }, Ut.prototype.slice = function (t, n) {
            t = Xe(t);
            var r = this;
            return r.__filtered__ && (t > 0 || 0 > n) ? new Ut(r) : (0 > t ? r = r.takeRight(-t) : t && (r = r.drop(t)), n !== T && (n = Xe(n), r = 0 > n ? r.dropRight(-n) : r.take(n - t)), r)
        }, Ut.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse()
        }, Ut.prototype.toArray = function () {
            return this.take(4294967295)
        }, hn(Ut.prototype, function (t, n) {
            var r = /^(?:filter|find|map|reject)|While$/.test(n), e = /^(?:head|last)$/.test(n), u = Ot[e ? "take" + ("last" == n ? "Right" : "") : n], o = e || /^find/.test(n);
            u && (Ot.prototype[n] = function () {
                function n(t) {
                    return t = u.apply(Ot, s([t], f)), e && h ? t[0] : t
                }
                var i = this.__wrapped__, f = e ? [1] : arguments, c = i instanceof Ut, a = f[0], l = c || yi(i);
                l && r && typeof a == "function" && 1 != a.length && (c = l = false);
                var h = this.__chain__, p = !!this.__actions__.length, a = o && !h, c = c && !p;
                return!o && l ? (i = c ? i : new Ut(this),
                        i = t.apply(i, f), i.__actions__.push({func: je, args: [n], thisArg: T}), new zt(i, h)) : a && c ? t.apply(this, f) : (i = this.thru(n), a ? e ? i.value()[0] : i.value() : i)
            })
        }), u("pop push shift sort splice unshift".split(" "), function (t) {
            var n = Ou[t], r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(t);
            Ot.prototype[t] = function () {
                var t = arguments;
                if (e && !this.__chain__) {
                    var u = this.value();
                    return n.apply(yi(u) ? u : [], t)
                }
                return this[r](function (r) {
                    return n.apply(yi(r) ? r : [], t)
                })
            }
        }), hn(Ut.prototype, function (t, n) {
            var r = Ot[n];
            if (r) {
                var e = r.name + "";
                (_o[e] || (_o[e] = [])).push({name: n, func: r})
            }
        }), _o[Ar(T, 2).name] = [{name: "wrapper", func: T}], Ut.prototype.clone = function () {
            var t = new Ut(this.__wrapped__);
            return t.__actions__ = lr(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = lr(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = lr(this.__views__), t
        }, Ut.prototype.reverse = function () {
            if (this.__filtered__) {
                var t = new Ut(this);
                t.__dir__ = -1, t.__filtered__ = true
            } else
                t = this.clone(),
                        t.__dir__ *= -1;
            return t
        }, Ut.prototype.value = function () {
            var t, n = this.__wrapped__.value(), r = this.__dir__, e = yi(n), u = 0 > r, o = e ? n.length : 0;
            t = o;
            for (var i = this.__views__, f = 0, c = -1, a = i.length; ++c < a; ) {
                var l = i[c], s = l.size;
                switch (l.type) {
                    case"drop":
                        f += s;
                        break;
                    case"dropRight":
                        t -= s;
                        break;
                    case"take":
                        t = to(t, f + s);
                        break;
                    case"takeRight":
                        f = Xu(f, t - s)
                    }
            }
            if (t = {start: f, end: t}, i = t.start, f = t.end, t = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, c = 0, a = to(t, this.__takeCount__), !e || 200 > o || o == t && a == t)
                return Xn(n, this.__actions__);
            e = [];
            t:for (; t-- && a > c; ) {
                for (u += r, o = -1, l = n[u]; ++o < f; ) {
                    var h = i[o], s = h.type, h = (0, h.iteratee)(l);
                    if (2 == s)
                        l = h;
                    else if (!h) {
                        if (1 == s)
                            continue t;
                        break t
                    }
                }
                e[c++] = l
            }
            return e
        }, Ot.prototype.at = Xo, Ot.prototype.chain = function () {
            return xe(this)
        }, Ot.prototype.commit = function () {
            return new zt(this.value(), this.__chain__)
        }, Ot.prototype.next = function () {
            this.__values__ === T && (this.__values__ = He(this.value()));
            var t = this.__index__ >= this.__values__.length, n = t ? T : this.__values__[this.__index__++];
            return{done: t, value: n}
        }, Ot.prototype.plant = function (t) {
            for (var n, r = this; r instanceof kt; ) {
                var e = ae(r);
                e.__index__ = 0, e.__values__ = T, n ? u.__wrapped__ = e : n = e;
                var u = e, r = r.__wrapped__
            }
            return u.__wrapped__ = t, n
        }, Ot.prototype.reverse = function () {
            var t = this.__wrapped__;
            return t instanceof Ut ? (this.__actions__.length && (t = new Ut(this)), t = t.reverse(), t.__actions__.push({func: je, args: [de], thisArg: T}), new zt(t, this.__chain__)) : this.thru(de)
        }, Ot.prototype.toJSON = Ot.prototype.valueOf = Ot.prototype.value = function () {
            return Xn(this.__wrapped__, this.__actions__)
        }, Zu && (Ot.prototype[Zu] = we),
        Ot
    }
    var T, q = 1 / 0, V = NaN, K = /\b__p\+='';/g, G = /\b(__p\+=)''\+/g, J = /(__e\(.*?\)|\b__t\))\+'';/g, Y = /&(?:amp|lt|gt|quot|#39|#96);/g, H = /[&<>"'`]/g, Q = RegExp(Y.source), X = RegExp(H.source), tt = /<%-([\s\S]+?)%>/g, nt = /<%([\s\S]+?)%>/g, rt = /<%=([\s\S]+?)%>/g, et = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ut = /^\w*$/, ot = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g, it = /[\\^$.*+?()[\]{}|]/g, ft = RegExp(it.source), ct = /^\s+|\s+$/g, at = /^\s+/, lt = /\s+$/, st = /[a-zA-Z0-9]+/g, ht = /\\(\\)?/g, pt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, _t = /\w*$/, vt = /^0x/i, gt = /^[-+]0x[0-9a-f]+$/i, dt = /^0b[01]+$/i, yt = /^\[object .+?Constructor\]$/, bt = /^0o[0-7]+$/i, xt = /^(?:0|[1-9]\d*)$/, jt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, wt = /($^)/, mt = /['\n\r\u2028\u2029\\]/g, At = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*", Ot = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + At, kt = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])", Et = RegExp("['\u2019]", "g"), St = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"), It = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + kt + At, "g"), Rt = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d+", Ot].join("|"), "g"), Wt = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"), Bt = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Lt = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ isFinite parseInt setTimeout".split(" "), Mt = {};
    Mt["[object Float32Array]"] = Mt["[object Float64Array]"] = Mt["[object Int8Array]"] = Mt["[object Int16Array]"] = Mt["[object Int32Array]"] = Mt["[object Uint8Array]"] = Mt["[object Uint8ClampedArray]"] = Mt["[object Uint16Array]"] = Mt["[object Uint32Array]"] = true, Mt["[object Arguments]"] = Mt["[object Array]"] = Mt["[object ArrayBuffer]"] = Mt["[object Boolean]"] = Mt["[object DataView]"] = Mt["[object Date]"] = Mt["[object Error]"] = Mt["[object Function]"] = Mt["[object Map]"] = Mt["[object Number]"] = Mt["[object Object]"] = Mt["[object RegExp]"] = Mt["[object Set]"] = Mt["[object String]"] = Mt["[object WeakMap]"] = false;
    var Ct = {};
    Ct["[object Arguments]"] = Ct["[object Array]"] = Ct["[object ArrayBuffer]"] = Ct["[object DataView]"] = Ct["[object Boolean]"] = Ct["[object Date]"] = Ct["[object Float32Array]"] = Ct["[object Float64Array]"] = Ct["[object Int8Array]"] = Ct["[object Int16Array]"] = Ct["[object Int32Array]"] = Ct["[object Map]"] = Ct["[object Number]"] = Ct["[object Object]"] = Ct["[object RegExp]"] = Ct["[object Set]"] = Ct["[object String]"] = Ct["[object Symbol]"] = Ct["[object Uint8Array]"] = Ct["[object Uint8ClampedArray]"] = Ct["[object Uint16Array]"] = Ct["[object Uint32Array]"] = true,
            Ct["[object Error]"] = Ct["[object Function]"] = Ct["[object WeakMap]"] = false;
    var zt = {"\xc0": "A", "\xc1": "A", "\xc2": "A", "\xc3": "A", "\xc4": "A", "\xc5": "A", "\xe0": "a", "\xe1": "a", "\xe2": "a", "\xe3": "a", "\xe4": "a", "\xe5": "a", "\xc7": "C", "\xe7": "c", "\xd0": "D", "\xf0": "d", "\xc8": "E", "\xc9": "E", "\xca": "E", "\xcb": "E", "\xe8": "e", "\xe9": "e", "\xea": "e", "\xeb": "e", "\xcc": "I", "\xcd": "I", "\xce": "I", "\xcf": "I", "\xec": "i", "\xed": "i", "\xee": "i", "\xef": "i", "\xd1": "N", "\xf1": "n", "\xd2": "O", "\xd3": "O", "\xd4": "O", "\xd5": "O", "\xd6": "O",
        "\xd8": "O", "\xf2": "o", "\xf3": "o", "\xf4": "o", "\xf5": "o", "\xf6": "o", "\xf8": "o", "\xd9": "U", "\xda": "U", "\xdb": "U", "\xdc": "U", "\xf9": "u", "\xfa": "u", "\xfb": "u", "\xfc": "u", "\xdd": "Y", "\xfd": "y", "\xff": "y", "\xc6": "Ae", "\xe6": "ae", "\xde": "Th", "\xfe": "th", "\xdf": "ss"}, Ut = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"}, $t = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'", "&#96;": "`"}, Dt = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"}, Ft = parseFloat, Nt = parseInt, Pt = typeof exports == "object" && exports, Zt = Pt && typeof module == "object" && module, Tt = Zt && Zt.exports === Pt, qt = R(typeof self == "object" && self), Vt = R(typeof this == "object" && this), Kt = R(typeof global == "object" && global) || qt || Vt || Function("return this")(), Gt = Z();
    (qt || {})._ = Gt, typeof define == "function" && typeof define.amd == "object" && define.amd ? define(function () {
        return Gt
    }) : Zt ? ((Zt.exports = Gt)._ = Gt, Pt._ = Gt) : Kt._ = Gt
}).call(this);
// ==============================================
// =============== action hoi dap ===============
// ==============================================

var txtreplyold;
$(".reply_hd").live("click", function () {
    var i;
    $(".hoidapnhanh li[class=ques] span[id]").each(function () {
        if ($(this).text() == "Ẩn") {
            $(this).html(txtreplyold);
            i = $(this).attr("id");
        }
    });
    $(".action_reply_hoidap").hide();
    var id = $(this).attr("id");
    if ($(this).text() == "Ẩn") {
        $("div#show_" + id).hide();
        $(this).html(txtreplyold);
    }
    else {
        if ($(this).attr("id") != i) {
            $("div#show_" + id).show();
            $('ul.hoidap_reply[rid="'+id+'"]').scrollTop($('ul.hoidap_reply[rid="'+id+'"]')[0].scrollHeight);
            txtreplyold = $(this).html();
            $(this).text("Ẩn");
        }
    }
})

$('.old_hd[act="ctrlhd"]').live('click', function () {
    var limit = parseInt($('.bottom_hd .num_hd').attr('limit'));
    var curent = parseInt($('.bottom_hd .num_hd').text());
    var act = $('.bottom_hd .num_hd').attr('rel');
    var newcurent = limit + curent;
    $.post(base_urlroot + 'hoidap/loadpage', {limit: limit, curent: curent, act: act}, function (rs) {
        if (IsJsonString(rs)) {
            data = jQuery.parseJSON(rs);
            if (data.mess != '') {
                $('.hoidapnhanh').hide().html(data.mess).fadeIn(500);
                $('.bottom_hd .num_hd').text(newcurent);
            } else {
                $('.hoidapnhanh').html('<p id="hdn-error">Dữ liệu đã hết!</p>');
                $('.old_hd[act="ctrlhd"]').attr('act', '');
                $('.bottom_hd .num_hd').text(newcurent);
            }
        } else {
            alert('Có lỗi trong quá trình xử lý. Vui lòng thực hiện lại!');
            window.location = "";
        }
    });
});

$('.new_hd[act="ctrlhd"]').live('click', function () {
    var limit = parseInt($('.bottom_hd .num_hd').attr('limit'));
    var curent = parseInt($('.bottom_hd .num_hd').text());
    var act = $('.bottom_hd .num_hd').attr('rel');
    if (curent > limit) {
        var newcurent = parseInt(curent - (limit * 2));
        $.post(base_urlroot + 'hoidap/loadpage', {limit: limit, curent: newcurent, act: act}, function (rs) {
            if (IsJsonString(rs)) {
                data = jQuery.parseJSON(rs);
                $('.hoidapnhanh').hide().html(data.mess).fadeIn(500);
                $('.bottom_hd .num_hd').text(newcurent + limit);
                $('.old_hd').attr('act', 'ctrlhd');
            } else {
                alert('Có lỗi trong quá trình xử lý. Vui lòng thực hiện lại!');
                window.location = "";
            }
        });
    }
});

// ==============================================
// ================== common ====================
// ==============================================

function IsJsonString(code) {
    if ($.trim(code) == "") {
        return false;
    }
    try {
        $.parseJSON(code)
    } catch (e) {
        return false;
    }
    return true;
}
function validate_pass(string) {
    var reg = /(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9])^\S+$/;
    if (string.length < 6)
        return false;
    var rs = reg.test(string);
    return rs;
}
function reloadCapcha(idSelecter) {
    var d = new Date();
    var captcha = base_urlroot + "includes/captcha.php?r=" + d.getTime();
    $(idSelecter).attr("src", captcha);
}
function toPos(ElementTo) {
    var postCm = $(ElementTo).offset()
    $('html, body').animate({scrollTop: postCm.top}, 300);
}
function toPos_(ElementTo, speed) {
    var postCm = $(ElementTo).offset()
    $('html, body').animate({scrollTop: postCm.top}, speed);
}
function scroll_hd() {
    toPos(".title_hoidap");
}
// hack_js
function hackjs(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ==============================================
// =============== action report ================
// ==============================================

function form_report_err(handler, cmd) {
    if (handler == 'close')
    {
        $('.render_report_error').html('');
        return false;
    }
    var pre_send = '<div class="lt123_box_gopy">';
    pre_send += '<div class="lt123_gopy_title"></div>';
    pre_send += '<div class="lt123_gopy_noti">';
    pre_send += 'Nếu bạn phát hiện ra lỗi hoặc có góp ý về nội dung - chất lượng của bài học này, xin vui lòng gửi cho BQT. Đóng góp của bạn sẽ giúp Luyện Thi 123 có chất lượng ngày';
    pre_send += ' một tốt hơn.';
    pre_send += 'Chân thành cảm ơn !';
    pre_send += '</div>';
//    pre_send += '<div class="ch_error">';
//    pre_send += '    <input type="radio" name="ch_radio" id="err_nhap_chon" class="ch_radio"/>';
//    pre_send += '    <label for="err_nhap_chon">Con không nhập hoặc chọn được đáp án</label>';
//    pre_send += '</div>';
//    pre_send += '<div class="ch_error">';
//    pre_send += '    <input type="radio" name="ch_radio" id="err_wrong_ans" class="ch_radio"/>';
//    pre_send += '    <label for="err_wrong_ans">Con nghĩ đáp án bị sai rồi</label>';
//    pre_send += '</div>';

    pre_send += '<textarea id="content_report" placeholder="Nếu có lỗi hoặc góp ý khác bạn hãy nhập nội dung ở đây..." class="lt123_gopy_area"></textarea><br/>';
    pre_send += '<a class="lt123_btn_close" href="javascript:;" onclick="form_report_err(&#39;close&#39;);">Đóng cửa sổ</a>';
    if (handler == 'bkt') {
        pre_send += '<a class="lt123_btn_sent" href="javascript:;" onclick="send_report_err(this,\'bkt\');">Gửi</a>';
    } else {
        pre_send += '<a class="lt123_btn_sent" href="javascript:;" onclick="send_report_err(this,\'bt\');">Gửi</a>';
    }

    pre_send += '<div style="clear: both"></div>';
    pre_send += '</div>';

    if (handler == 'bkt') {
        $('.render_report_error').html('');
        var ren_parent_ = $(cmd).parents('.bt_question');
        var render_ = ren_parent_.find('.render_report_error');
        $(render_).html(pre_send);
        //toPos(ren_parent_);
    } else {
        $('.render_report_error').html(pre_send);
        toPos('.basic_segment');
    }
    $('.lt123_box_gopy').draggable({handle: ".lt123_gopy_title"});
}
function send_report_err(curr, act) {
    var content_report = $('#content_report').val();

    //get answer of member
    var flag = true;
    var mem_ans = '';
    var _ck_ans = '';
    if ($('.btques_active #dien_so').length > 0) {
        $('.btques_active').find('.tim_x').each(function () {
            _ck_ans += $(this).val() + ',';
        });
        mem_ans = 'Nhập: ' + _ck_ans;
    } else if ($('.btques_active #lua_chon1').length > 0 || $('.btques_active #lua_chon2').length > 0) {
        _ck_ans = $('.btques_active').find('.bt_ans_lua_chon.active').attr('value');
        mem_ans = 'Chọn đáp án số: ' + (parseInt(_ck_ans) + 1);
    }

    //get technic error
    var tech_err = '';
//    if ($('#err_nhap_chon').is(":checked")) {
//        tech_err = 'Con không nhập hoặc chọn được đáp án';
//    }
//
//    if ($('#err_wrong_ans').is(":checked")) {
//        tech_err = 'Con nghĩ đáp án bị sai rồi';
//    }

    //neu ko co loi ky thuat thi phai nhap noi dung loi
    if (tech_err == '') {
        if ($.trim(content_report) == 0 || $.trim(content_report).length < 6) {
            alert('Nội dung gửi ít nhất 6 ký tự và tối đa 1.000 ký tự');
            flag = false;
        }
        else if ($.trim(content_report).length > 1000) {
            alert('Nội dung gửi vượt quá 1.000 ký tự');
            flag = false;
        }
    }

    if (flag) {
        $(curr).removeAttr('onclick').text('Đang gửi...');
        var id_q = 0;
        if (act == 'bkt') {
            id_q = $(curr).parents('.bt_question').attr('id');
        } else {
            id_q = $('.btques_active').attr('id');
        }
        var parrams = {act_nologin: 'report_error', id_q: id_q, cont: content_report, mem_ans: mem_ans,
            'cookie': navigator.cookieEnabled,
            'platform': navigator.platform,
            'js_e': navigator.javaEnabled(),
            'brow': get_info_browser(),
            'tech_err': tech_err
        };
        $.post(base_urlroot + 'act/baihoc_report', parrams, function (data) {
            if (IsJsonString(data)) {

                data = jQuery.parseJSON(data);
                if (data.stt == 1) {
                    console.log('datastt 1');
                    var bef_send = '<div class="lt123_box_gopy">';
                    bef_send += '<div class="box_thank_send">';
                    bef_send += '<div class="thank_txt">';
                    bef_send += 'Cảm ơn bạn. Nội dung góp ý của bạn đã được gửi đến BQT website.<br>';
                    bef_send += '<span>Cửa sổ sẽ tự đóng sau 2 giây</span>';
                    bef_send += '</div>';
                    bef_send += '<div style="clear: both"></div>';
                    bef_send += '</div>';

                    if (act == 'bkt') {
                        id_q = $(curr).parents('.bt_question').find('.render_report_error').html(bef_send);
                    } else {
                        $('.render_report_error').html(bef_send);
                    }
                    var t = setInterval(function () {
                        $('.render_report_error').html('');
                        clearInterval(t);
                    }, 2000);
                } else if (data.stt == 0) {
                    alert(data.msg);
                } else {
                    alert('False');
                }
            }
        });
    }
}
function paidmember() {
    var paid_id = document.getElementById("paid_member");
    if (paid_id != null) {
        return true;
    } else {
        return false;
    }
}

// ==============================================
// =============== nano status bar ==============
// ==============================================

var Nanobar = function () {
    var c, d, e, f, g, h, k = {width: "100%", height: "4px", zIndex: 9999, top: "0"}, l = {width: 0, height: "100%", clear: "both", transition: "height .3s"};
    c = function (a, b) {
        for (var c in b)
            a.style[c] = b[c];
        a.style["float"] = "left"
    };
    f = function () {
        var a = this, b = this.width - this.here;
        0.1 > b && -0.1 < b ? (g.call(this, this.here), this.moving = !1, 100 == this.width && (this.el.style.height = 0, setTimeout(function () {
            a.cont.el.removeChild(a.el)
        }, 300))) : (g.call(this, this.width - b / 4), setTimeout(function () {
            a.go()
        }, 16))
    };
    g = function (a) {
        this.width =
                a;
        this.el.style.width = this.width + "%"
    };
    h = function () {
        var a = new d(this);
        this.bars.unshift(a)
    };
    d = function (a) {
        this.el = document.createElement("div");
        this.el.style.backgroundColor = a.opts.bg;
        this.here = this.width = 0;
        this.moving = !1;
        this.cont = a;
        c(this.el, l);
        a.el.appendChild(this.el)
    };
    d.prototype.go = function (a) {
        a ? (this.here = a, this.moving || (this.moving = !0, f.call(this))) : this.moving && f.call(this)
    };
    e = function (a) {
        a = this.opts = a || {};
        var b;
        a.bg = a.bg || "#d55";
        this.bars = [];
        b = this.el = document.createElement("div");
        c(this.el,
                k);
        a.id && (b.id = a.id);
        b.style.position = a.target ? "relative" : "fixed";
        a.target ? a.target.insertBefore(b, a.target.firstChild) : document.getElementsByTagName("body")[0].appendChild(b);
        h.call(this)
    };
    e.prototype.go = function (a) {
        this.bars[0].go(a);
        100 == a && h.call(this)
    };
    return e
}();

// ==============================================
// =============== question libs ================
// ==============================================
function unescapeHTML(escapedHTML) {
    escapedHTML = escapedHTML.toString();
    // replace svg
    return escapedHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}

function j_split(str, elm) {
    var arr = {};
    var arr = str.split('' + elm + '');
    return arr;
}
function json_to_arr(value) {
    if (IsJsonString(value)) {
        data = jQuery.parseJSON(value);
    } else {
        data = value;
    }
    return data;
}
function strip_html(str) {
    str = str.toString();
    var regex = /(<([^>]+)>)/ig
    var result = str.replace(regex, "");
    return result;
}
function convertToArrayOfObjects(data) {
    var keys = data.shift(),
            i = 0, k = 0,
            obj = null,
            output = [];

    for (i = 0; i < data.length; i++) {
        obj = {};

        for (k = 0; k < keys.length; k++) {
            obj[keys[k]] = data[i][k];
        }

        output.push(obj);
    }

    return output;
}
function search_str(str, in_str) {
    var n = in_str.search(str);
    if (n > 0) {
        return true;
    } else {
        return false;
    }
}

function get_info_browser2() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera 15+, the true version is after "OPR/" 
    if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 4);
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/')))
    {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    //return 'Browser name  = '+browserName+'<br>'+'Full version  = '+fullVersion+'<br>'+'Major version = '+majorVersion+'<br>'+'navigator.appName = '+navigator.appName+'<br>'+'navigator.userAgent = '+navigator.userAgent+'<br>';
    return browserName + '-' + fullVersion + '|' + navigator.platform + '|js-' + navigator.javaEnabled() + '|ck-' + navigator.cookieEnabled;
}
function get_info_browser() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;

    // In Opera 15+, the true version is after "OPR/" 
    if ((verOffset = nAgt.indexOf("OPR/")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 4);
    }
    // In older Opera, the true version is after "Opera" or after "Version"
    else if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset + 5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset + 7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset + 8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
            (verOffset = nAgt.lastIndexOf('/')))
    {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    return 'Browser name  = ' + browserName + '<br>' + 'Full version  = ' + fullVersion + '<br>' + 'Major version = ' + majorVersion + '<br>' + 'navigator.appName = ' + navigator.appName + '<br>' + 'navigator.userAgent = ' + navigator.userAgent + '<br>';
}

function paidmember() {
    var paid_id = document.getElementById("paid_member");
    if (paid_id != null) {
        return true
    } else {
        return false
    }
}

function resizeInput() {
    $(this).attr('size', $(this).val().length < 1 ? 1 : $(this).val().length);
}

function resizeInput_basic_long() {
    $(this).attr('size', $(this).val().length < 5 ? 5 : $(this).val().length);
}

function resizeInput_basic() {
    $(this).attr('size', $(this).val().length < 1 ? 1 : $(this).val().length);
}
function GetXmlHttpObject()
{
    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject)
    {
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}

function check_lesson_show_audio(table) {
    var table_show = ["toan_lop_1"];
    if (table_show.indexOf(table) != -1) {
        return true;
    } else {
        return false;
    }
}

function remove_vietnamese(str, phancach) {
    str = str.toLowerCase();
    phancach = phancach != ''?phancach:'-';
    
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, phancach);

    str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1- 
    str = str.replace(/^\-+|\-+$/g, "");
    str = str[str.length-1]==phancach?str.slice(0,-1):str;

    return str;
}

/*=====================================MOBILE====================================*/
function scroll2Top(elm){
    $('html, body').animate({
        scrollTop: $("#wrapper").offset().top
    }, 1000);
}

//SHARE FB
//===============================================
//  window.fbAsyncInit = function() {
//   // init the FB JS SDK
//   FB.init({
//     appId      : '590421784681865',                        // App ID from the app dashboard
//     channelUrl : '', // Channel file for x-domain comms
//     status     : true,                                 // Check Facebook Login status
//     xfbml      : true,
//     version    : 'v2.7'                                 // Look for social plugins on the page
//   });
// };
// // Load the SDK asynchronously
// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/all.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));

function fb_share(options) {
    FB.ui( {
        method: 'feed',
        name: options.name,
        description: options.description, //Noi dung
        link: options.link,
        picture: "https://www.luyenthi123.com/static/image/giaitoan/ic-owl.png",
        caption: "Luyện thi trực tuyến"
    }, function( response ) {
        console.log( response );
        if ( response !== null && typeof response !== 'undefined' && typeof response.post_id != 'undefined' ) {
            // ajax call to save response
          $.post( 'https://www.luyenthi123.com', { 'response': response }, function( result ) {
                console.log( result );
            }, 'json' );
        }
    } );

}
