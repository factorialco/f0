import { e4 as Da, e5 as mt, e6 as ec, q as es, e7 as tc, e8 as rc, e9 as nc, ea as nr, eb as ac, m as ic, ec as oc, z as ee, g as ts, b as sc, ed as St, aA as lc, w as cc, G as fe, aV as rs, cA as dc, cB as uc, ak as ns, y as Ge, ee as as, ef as is, eg as os, t as I, dl as ft, u as ae, eh as ss, ei as ls, ej as Wn, ek as fc, el as Ta, cC as cs, dt as ds, dm as Un, a2 as us, a3 as fs, a5 as hs, F as ne, b$ as na, dr as hc, as as Ot, em as pc, aC as gc, en as mc, N as aa, aW as vc, aX as bc, aY as yc, df as wc, b0 as xc, b9 as Cc, K as Ne, c_ as Sc, O as It, dk as _c, be as Me, P as ia, B as vt, M as ps, bW as gs, a4 as Ee, eo as Nc, ep as Dc, ah as Tc, dq as Ac, eq as Oc, d2 as Ic, cJ as Aa, dL as kc, d4 as Rc, E as ue, er as Ec, bw as Lc, d0 as Fc, bx as jc, bE as Mt, bC as oa, aZ as Pc, d6 as qc, d7 as Mc, a_ as zc, es as sa, bD as ms, bj as la, ac as Hc, et as $c, aD as vs, du as Yn, cF as Gc, cG as Bc, bX as Vc, c0 as Kc, d9 as Wc, D as Uc, cr as kt, by as Rt, eu as Yc, ev as Jc, cH as Xc, J as Zc, dH as Qc, at as ed, a6 as Et, ao as Lt, bQ as td, bR as rd, bS as nd, bV as ad, ew as id, cy as od, ap as sd, ex as ld, ad as bs, aU as cd, au as dd, cI as ys, di as ud, b7 as fd, dF as Oa, aB as hd, dI as pd, dM as gd, dv as md, dw as vd, dK as bd, ey as yd, dJ as wd, ez as xd, Q as ws, bm as Cd, bB as Sd } from "./F0Input-C9w04Jpr.js";
import { jsx as i, jsxs as O, Fragment as te } from "react/jsx-runtime";
import * as De from "react";
import ca, { useContext as Te, useMemo as F, createContext as Le, forwardRef as ce, useRef as V, useEffect as K, useState as M, useCallback as oe, Fragment as Ft, useId as _d, useLayoutEffect as Ze, createElement as Ia, isValidElement as Nd, cloneElement as Dd } from "react";
import './useDataCollectionSource.css';function Td({ children: e, isValidProp: t, ...r }) {
  t && ec(t), r = { ...Te(Da), ...r }, r.isStatic = mt(() => r.isStatic);
  const n = F(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return i(Da.Provider, { value: n, children: e });
}
function xs(e, t) {
  const r = es(t()), n = () => r.set(t());
  return n(), tc(() => {
    const a = () => rc.preRender(n, !1, !0), o = e.map((s) => s.on("change", a));
    return () => {
      o.forEach((s) => s()), nc(n);
    };
  }), r;
}
function Ad(e) {
  nr.current = [], e();
  const t = xs(nr.current, e);
  return nr.current = void 0, t;
}
function Od(...e) {
  const t = !Array.isArray(e[0]), r = t ? 0 : -1, n = e[0 + r], a = e[1 + r], o = e[2 + r], s = e[3 + r], l = ac(a, o, s);
  return t ? l(n) : l;
}
function Id(e, t, r, n) {
  if (typeof e == "function")
    return Ad(e);
  const a = typeof t == "function" ? t : Od(t, r, n);
  return Array.isArray(e) ? ka(e, a) : ka([e], ([o]) => a(o));
}
function ka(e, t) {
  const r = mt(() => []);
  return xs(e, () => {
    r.length = 0;
    const n = e.length;
    for (let a = 0; a < n; a++)
      r[a] = e[a].get();
    return t(r);
  });
}
class kd {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(t) {
    return this.componentControls.add(t), () => this.componentControls.delete(t);
  }
  /**
   * Start a drag gesture on every `motion` component that has this set of drag controls
   * passed into it via the `dragControls` prop.
   *
   * ```jsx
   * dragControls.start(e, {
   *   snapToCursor: true
   * })
   * ```
   *
   * @param event - PointerEvent
   * @param options - Options
   *
   * @public
   */
  start(t, r) {
    this.componentControls.forEach((n) => {
      n.start(t.nativeEvent || t, r);
    });
  }
}
const Rd = () => new kd();
function Ed() {
  return mt(Rd);
}
const Cs = Le(null);
function Ld(e, t, r, n) {
  if (!n)
    return e;
  const a = e.findIndex((f) => f.value === t);
  if (a === -1)
    return e;
  const o = n > 0 ? 1 : -1, s = e[a + o];
  if (!s)
    return e;
  const l = e[a], c = s.layout, d = ic(c.min, c.max, 0.5);
  return o === 1 && l.layout.max + r > d || o === -1 && l.layout.min + r < d ? oc(e, a, a + o) : e;
}
function Fd({ children: e, as: t = "ul", axis: r = "y", onReorder: n, values: a, ...o }, s) {
  const l = mt(() => ee[t]), c = [], d = V(!1);
  ts(!!a, "Reorder.Group must be provided a values prop");
  const f = {
    axis: r,
    registerItem: (u, h) => {
      const m = c.findIndex((g) => u === g.value);
      m !== -1 ? c[m].layout = h[r] : c.push({ value: u, layout: h[r] }), c.sort(qd);
    },
    updateOrder: (u, h, m) => {
      if (d.current)
        return;
      const g = Ld(c, u, h, m);
      c !== g && (d.current = !0, n(g.map(Pd).filter((p) => a.indexOf(p) !== -1)));
    }
  };
  return K(() => {
    d.current = !1;
  }), i(l, { ...o, ref: s, ignoreStrict: !0, children: i(Cs.Provider, { value: f, children: e }) });
}
const jd = /* @__PURE__ */ ce(Fd);
function Pd(e) {
  return e.value;
}
function qd(e, t) {
  return e.layout.min - t.layout.min;
}
function Ra(e, t = 0) {
  return sc(e) ? e : es(t);
}
function Md({ children: e, style: t = {}, value: r, as: n = "li", onDrag: a, layout: o = !0, ...s }, l) {
  const c = mt(() => ee[n]), d = Te(Cs), f = {
    x: Ra(t.x),
    y: Ra(t.y)
  }, u = Id([f.x, f.y], ([p, v]) => p || v ? 1 : "unset");
  ts(!!d, "Reorder.Item must be a child of Reorder.Group");
  const { axis: h, registerItem: m, updateOrder: g } = d;
  return i(c, { drag: h, ...s, dragSnapToOrigin: !0, style: { ...t, x: f.x, y: f.y, zIndex: u }, layout: o, onDrag: (p, v) => {
    const { velocity: y } = v;
    y[h] && g(r, f[h].get(), y[h]), a && a(p, v);
  }, onLayoutMeasure: (p) => m(r, p), ref: l, ignoreStrict: !0, children: e });
}
const zd = /* @__PURE__ */ ce(Md), Ss = Le(null);
function sm({ children: e, layout: t }) {
  return /* @__PURE__ */ i(Ss.Provider, { value: t, children: e });
}
function Hd() {
  return Te(Ss);
}
var ar, Ea;
function $d() {
  if (Ea) return ar;
  Ea = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return ar = e, ar;
}
var ir, La;
function _s() {
  if (La) return ir;
  La = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return ir = e, ir;
}
var or, Fa;
function zt() {
  if (Fa) return or;
  Fa = 1;
  var e = _s();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return or = t, or;
}
var sr, ja;
function Gd() {
  if (ja) return sr;
  ja = 1;
  var e = zt(), t = Array.prototype, r = t.splice;
  function n(a) {
    var o = this.__data__, s = e(o, a);
    if (s < 0)
      return !1;
    var l = o.length - 1;
    return s == l ? o.pop() : r.call(o, s, 1), --this.size, !0;
  }
  return sr = n, sr;
}
var lr, Pa;
function Bd() {
  if (Pa) return lr;
  Pa = 1;
  var e = zt();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return lr = t, lr;
}
var cr, qa;
function Vd() {
  if (qa) return cr;
  qa = 1;
  var e = zt();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return cr = t, cr;
}
var dr, Ma;
function Kd() {
  if (Ma) return dr;
  Ma = 1;
  var e = zt();
  function t(r, n) {
    var a = this.__data__, o = e(a, r);
    return o < 0 ? (++this.size, a.push([r, n])) : a[o][1] = n, this;
  }
  return dr = t, dr;
}
var ur, za;
function Ht() {
  if (za) return ur;
  za = 1;
  var e = $d(), t = Gd(), r = Bd(), n = Vd(), a = Kd();
  function o(s) {
    var l = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++l < c; ) {
      var d = s[l];
      this.set(d[0], d[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = r, o.prototype.has = n, o.prototype.set = a, ur = o, ur;
}
var fr, Ha;
function Wd() {
  if (Ha) return fr;
  Ha = 1;
  var e = Ht();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return fr = t, fr;
}
var hr, $a;
function Ud() {
  if ($a) return hr;
  $a = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return hr = e, hr;
}
var pr, Ga;
function Yd() {
  if (Ga) return pr;
  Ga = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return pr = e, pr;
}
var gr, Ba;
function Jd() {
  if (Ba) return gr;
  Ba = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return gr = e, gr;
}
var mr, Va;
function Ns() {
  if (Va) return mr;
  Va = 1;
  var e = typeof St == "object" && St && St.Object === Object && St;
  return mr = e, mr;
}
var vr, Ka;
function Fe() {
  if (Ka) return vr;
  Ka = 1;
  var e = Ns(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return vr = r, vr;
}
var br, Wa;
function da() {
  if (Wa) return br;
  Wa = 1;
  var e = Fe(), t = e.Symbol;
  return br = t, br;
}
var yr, Ua;
function Xd() {
  if (Ua) return yr;
  Ua = 1;
  var e = da(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function o(s) {
    var l = r.call(s, a), c = s[a];
    try {
      s[a] = void 0;
      var d = !0;
    } catch {
    }
    var f = n.call(s);
    return d && (l ? s[a] = c : delete s[a]), f;
  }
  return yr = o, yr;
}
var wr, Ya;
function Zd() {
  if (Ya) return wr;
  Ya = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return wr = r, wr;
}
var xr, Ja;
function $t() {
  if (Ja) return xr;
  Ja = 1;
  var e = da(), t = Xd(), r = Zd(), n = "[object Null]", a = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function s(l) {
    return l == null ? l === void 0 ? a : n : o && o in Object(l) ? t(l) : r(l);
  }
  return xr = s, xr;
}
var Cr, Xa;
function Ds() {
  if (Xa) return Cr;
  Xa = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Cr = e, Cr;
}
var Sr, Za;
function Ts() {
  if (Za) return Sr;
  Za = 1;
  var e = $t(), t = Ds(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", o = "[object Proxy]";
  function s(l) {
    if (!t(l))
      return !1;
    var c = e(l);
    return c == n || c == a || c == r || c == o;
  }
  return Sr = s, Sr;
}
var _r, Qa;
function Qd() {
  if (Qa) return _r;
  Qa = 1;
  var e = Fe(), t = e["__core-js_shared__"];
  return _r = t, _r;
}
var Nr, ei;
function eu() {
  if (ei) return Nr;
  ei = 1;
  var e = Qd(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Nr = r, Nr;
}
var Dr, ti;
function As() {
  if (ti) return Dr;
  ti = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Dr = r, Dr;
}
var Tr, ri;
function tu() {
  if (ri) return Tr;
  ri = 1;
  var e = Ts(), t = eu(), r = Ds(), n = As(), a = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, s = Function.prototype, l = Object.prototype, c = s.toString, d = l.hasOwnProperty, f = RegExp(
    "^" + c.call(d).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function u(h) {
    if (!r(h) || t(h))
      return !1;
    var m = e(h) ? f : o;
    return m.test(n(h));
  }
  return Tr = u, Tr;
}
var Ar, ni;
function ru() {
  if (ni) return Ar;
  ni = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Ar = e, Ar;
}
var Or, ai;
function rt() {
  if (ai) return Or;
  ai = 1;
  var e = tu(), t = ru();
  function r(n, a) {
    var o = t(n, a);
    return e(o) ? o : void 0;
  }
  return Or = r, Or;
}
var Ir, ii;
function ua() {
  if (ii) return Ir;
  ii = 1;
  var e = rt(), t = Fe(), r = e(t, "Map");
  return Ir = r, Ir;
}
var kr, oi;
function Gt() {
  if (oi) return kr;
  oi = 1;
  var e = rt(), t = e(Object, "create");
  return kr = t, kr;
}
var Rr, si;
function nu() {
  if (si) return Rr;
  si = 1;
  var e = Gt();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Rr = t, Rr;
}
var Er, li;
function au() {
  if (li) return Er;
  li = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Er = e, Er;
}
var Lr, ci;
function iu() {
  if (ci) return Lr;
  ci = 1;
  var e = Gt(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(o) {
    var s = this.__data__;
    if (e) {
      var l = s[o];
      return l === t ? void 0 : l;
    }
    return n.call(s, o) ? s[o] : void 0;
  }
  return Lr = a, Lr;
}
var Fr, di;
function ou() {
  if (di) return Fr;
  di = 1;
  var e = Gt(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var o = this.__data__;
    return e ? o[a] !== void 0 : r.call(o, a);
  }
  return Fr = n, Fr;
}
var jr, ui;
function su() {
  if (ui) return jr;
  ui = 1;
  var e = Gt(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var o = this.__data__;
    return this.size += this.has(n) ? 0 : 1, o[n] = e && a === void 0 ? t : a, this;
  }
  return jr = r, jr;
}
var Pr, fi;
function lu() {
  if (fi) return Pr;
  fi = 1;
  var e = nu(), t = au(), r = iu(), n = ou(), a = su();
  function o(s) {
    var l = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++l < c; ) {
      var d = s[l];
      this.set(d[0], d[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = r, o.prototype.has = n, o.prototype.set = a, Pr = o, Pr;
}
var qr, hi;
function cu() {
  if (hi) return qr;
  hi = 1;
  var e = lu(), t = Ht(), r = ua();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return qr = n, qr;
}
var Mr, pi;
function du() {
  if (pi) return Mr;
  pi = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Mr = e, Mr;
}
var zr, gi;
function Bt() {
  if (gi) return zr;
  gi = 1;
  var e = du();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return zr = t, zr;
}
var Hr, mi;
function uu() {
  if (mi) return Hr;
  mi = 1;
  var e = Bt();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return Hr = t, Hr;
}
var $r, vi;
function fu() {
  if (vi) return $r;
  vi = 1;
  var e = Bt();
  function t(r) {
    return e(this, r).get(r);
  }
  return $r = t, $r;
}
var Gr, bi;
function hu() {
  if (bi) return Gr;
  bi = 1;
  var e = Bt();
  function t(r) {
    return e(this, r).has(r);
  }
  return Gr = t, Gr;
}
var Br, yi;
function pu() {
  if (yi) return Br;
  yi = 1;
  var e = Bt();
  function t(r, n) {
    var a = e(this, r), o = a.size;
    return a.set(r, n), this.size += a.size == o ? 0 : 1, this;
  }
  return Br = t, Br;
}
var Vr, wi;
function Os() {
  if (wi) return Vr;
  wi = 1;
  var e = cu(), t = uu(), r = fu(), n = hu(), a = pu();
  function o(s) {
    var l = -1, c = s == null ? 0 : s.length;
    for (this.clear(); ++l < c; ) {
      var d = s[l];
      this.set(d[0], d[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = r, o.prototype.has = n, o.prototype.set = a, Vr = o, Vr;
}
var Kr, xi;
function gu() {
  if (xi) return Kr;
  xi = 1;
  var e = Ht(), t = ua(), r = Os(), n = 200;
  function a(o, s) {
    var l = this.__data__;
    if (l instanceof e) {
      var c = l.__data__;
      if (!t || c.length < n - 1)
        return c.push([o, s]), this.size = ++l.size, this;
      l = this.__data__ = new r(c);
    }
    return l.set(o, s), this.size = l.size, this;
  }
  return Kr = a, Kr;
}
var Wr, Ci;
function mu() {
  if (Ci) return Wr;
  Ci = 1;
  var e = Ht(), t = Wd(), r = Ud(), n = Yd(), a = Jd(), o = gu();
  function s(l) {
    var c = this.__data__ = new e(l);
    this.size = c.size;
  }
  return s.prototype.clear = t, s.prototype.delete = r, s.prototype.get = n, s.prototype.has = a, s.prototype.set = o, Wr = s, Wr;
}
var Ur, Si;
function vu() {
  if (Si) return Ur;
  Si = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return Ur = t, Ur;
}
var Yr, _i;
function bu() {
  if (_i) return Yr;
  _i = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Yr = e, Yr;
}
var Jr, Ni;
function yu() {
  if (Ni) return Jr;
  Ni = 1;
  var e = Os(), t = vu(), r = bu();
  function n(a) {
    var o = -1, s = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++o < s; )
      this.add(a[o]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, Jr = n, Jr;
}
var Xr, Di;
function wu() {
  if (Di) return Xr;
  Di = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return Xr = e, Xr;
}
var Zr, Ti;
function xu() {
  if (Ti) return Zr;
  Ti = 1;
  function e(t, r) {
    return t.has(r);
  }
  return Zr = e, Zr;
}
var Qr, Ai;
function Is() {
  if (Ai) return Qr;
  Ai = 1;
  var e = yu(), t = wu(), r = xu(), n = 1, a = 2;
  function o(s, l, c, d, f, u) {
    var h = c & n, m = s.length, g = l.length;
    if (m != g && !(h && g > m))
      return !1;
    var p = u.get(s), v = u.get(l);
    if (p && v)
      return p == l && v == s;
    var y = -1, b = !0, x = c & a ? new e() : void 0;
    for (u.set(s, l), u.set(l, s); ++y < m; ) {
      var S = s[y], N = l[y];
      if (d)
        var w = h ? d(N, S, y, l, s, u) : d(S, N, y, s, l, u);
      if (w !== void 0) {
        if (w)
          continue;
        b = !1;
        break;
      }
      if (x) {
        if (!t(l, function(_, T) {
          if (!r(x, T) && (S === _ || f(S, _, c, d, u)))
            return x.push(T);
        })) {
          b = !1;
          break;
        }
      } else if (!(S === N || f(S, N, c, d, u))) {
        b = !1;
        break;
      }
    }
    return u.delete(s), u.delete(l), b;
  }
  return Qr = o, Qr;
}
var en, Oi;
function Cu() {
  if (Oi) return en;
  Oi = 1;
  var e = Fe(), t = e.Uint8Array;
  return en = t, en;
}
var tn, Ii;
function Su() {
  if (Ii) return tn;
  Ii = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, o) {
      n[++r] = [o, a];
    }), n;
  }
  return tn = e, tn;
}
var rn, ki;
function _u() {
  if (ki) return rn;
  ki = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return rn = e, rn;
}
var nn, Ri;
function Nu() {
  if (Ri) return nn;
  Ri = 1;
  var e = da(), t = Cu(), r = _s(), n = Is(), a = Su(), o = _u(), s = 1, l = 2, c = "[object Boolean]", d = "[object Date]", f = "[object Error]", u = "[object Map]", h = "[object Number]", m = "[object RegExp]", g = "[object Set]", p = "[object String]", v = "[object Symbol]", y = "[object ArrayBuffer]", b = "[object DataView]", x = e ? e.prototype : void 0, S = x ? x.valueOf : void 0;
  function N(w, _, T, A, E, k, C) {
    switch (T) {
      case b:
        if (w.byteLength != _.byteLength || w.byteOffset != _.byteOffset)
          return !1;
        w = w.buffer, _ = _.buffer;
      case y:
        return !(w.byteLength != _.byteLength || !k(new t(w), new t(_)));
      case c:
      case d:
      case h:
        return r(+w, +_);
      case f:
        return w.name == _.name && w.message == _.message;
      case m:
      case p:
        return w == _ + "";
      case u:
        var D = a;
      case g:
        var q = A & s;
        if (D || (D = o), w.size != _.size && !q)
          return !1;
        var L = C.get(w);
        if (L)
          return L == _;
        A |= l, C.set(w, _);
        var z = n(D(w), D(_), A, E, k, C);
        return C.delete(w), z;
      case v:
        if (S)
          return S.call(w) == S.call(_);
    }
    return !1;
  }
  return nn = N, nn;
}
var an, Ei;
function Du() {
  if (Ei) return an;
  Ei = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, o = t.length; ++n < a; )
      t[o + n] = r[n];
    return t;
  }
  return an = e, an;
}
var on, Li;
function fa() {
  if (Li) return on;
  Li = 1;
  var e = Array.isArray;
  return on = e, on;
}
var sn, Fi;
function Tu() {
  if (Fi) return sn;
  Fi = 1;
  var e = Du(), t = fa();
  function r(n, a, o) {
    var s = a(n);
    return t(n) ? s : e(s, o(n));
  }
  return sn = r, sn;
}
var ln, ji;
function Au() {
  if (ji) return ln;
  ji = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, o = 0, s = []; ++n < a; ) {
      var l = t[n];
      r(l, n, t) && (s[o++] = l);
    }
    return s;
  }
  return ln = e, ln;
}
var cn, Pi;
function Ou() {
  if (Pi) return cn;
  Pi = 1;
  function e() {
    return [];
  }
  return cn = e, cn;
}
var dn, qi;
function Iu() {
  if (qi) return dn;
  qi = 1;
  var e = Au(), t = Ou(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, o = a ? function(s) {
    return s == null ? [] : (s = Object(s), e(a(s), function(l) {
      return n.call(s, l);
    }));
  } : t;
  return dn = o, dn;
}
var un, Mi;
function ku() {
  if (Mi) return un;
  Mi = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return un = e, un;
}
var fn, zi;
function Vt() {
  if (zi) return fn;
  zi = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return fn = e, fn;
}
var hn, Hi;
function Ru() {
  if (Hi) return hn;
  Hi = 1;
  var e = $t(), t = Vt(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return hn = n, hn;
}
var pn, $i;
function Eu() {
  if ($i) return pn;
  $i = 1;
  var e = Ru(), t = Vt(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, o = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(s) {
    return t(s) && n.call(s, "callee") && !a.call(s, "callee");
  };
  return pn = o, pn;
}
var ct = { exports: {} }, gn, Gi;
function Lu() {
  if (Gi) return gn;
  Gi = 1;
  function e() {
    return !1;
  }
  return gn = e, gn;
}
ct.exports;
var Bi;
function ks() {
  return Bi || (Bi = 1, (function(e, t) {
    var r = Fe(), n = Lu(), a = t && !t.nodeType && t, o = a && !0 && e && !e.nodeType && e, s = o && o.exports === a, l = s ? r.Buffer : void 0, c = l ? l.isBuffer : void 0, d = c || n;
    e.exports = d;
  })(ct, ct.exports)), ct.exports;
}
var mn, Vi;
function Fu() {
  if (Vi) return mn;
  Vi = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var o = typeof n;
    return a = a ?? e, !!a && (o == "number" || o != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return mn = r, mn;
}
var vn, Ki;
function Rs() {
  if (Ki) return vn;
  Ki = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return vn = t, vn;
}
var bn, Wi;
function ju() {
  if (Wi) return bn;
  Wi = 1;
  var e = $t(), t = Rs(), r = Vt(), n = "[object Arguments]", a = "[object Array]", o = "[object Boolean]", s = "[object Date]", l = "[object Error]", c = "[object Function]", d = "[object Map]", f = "[object Number]", u = "[object Object]", h = "[object RegExp]", m = "[object Set]", g = "[object String]", p = "[object WeakMap]", v = "[object ArrayBuffer]", y = "[object DataView]", b = "[object Float32Array]", x = "[object Float64Array]", S = "[object Int8Array]", N = "[object Int16Array]", w = "[object Int32Array]", _ = "[object Uint8Array]", T = "[object Uint8ClampedArray]", A = "[object Uint16Array]", E = "[object Uint32Array]", k = {};
  k[b] = k[x] = k[S] = k[N] = k[w] = k[_] = k[T] = k[A] = k[E] = !0, k[n] = k[a] = k[v] = k[o] = k[y] = k[s] = k[l] = k[c] = k[d] = k[f] = k[u] = k[h] = k[m] = k[g] = k[p] = !1;
  function C(D) {
    return r(D) && t(D.length) && !!k[e(D)];
  }
  return bn = C, bn;
}
var yn, Ui;
function Pu() {
  if (Ui) return yn;
  Ui = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return yn = e, yn;
}
var dt = { exports: {} };
dt.exports;
var Yi;
function qu() {
  return Yi || (Yi = 1, (function(e, t) {
    var r = Ns(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, o = a && a.exports === n, s = o && r.process, l = (function() {
      try {
        var c = a && a.require && a.require("util").types;
        return c || s && s.binding && s.binding("util");
      } catch {
      }
    })();
    e.exports = l;
  })(dt, dt.exports)), dt.exports;
}
var wn, Ji;
function Es() {
  if (Ji) return wn;
  Ji = 1;
  var e = ju(), t = Pu(), r = qu(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return wn = a, wn;
}
var xn, Xi;
function Mu() {
  if (Xi) return xn;
  Xi = 1;
  var e = ku(), t = Eu(), r = fa(), n = ks(), a = Fu(), o = Es(), s = Object.prototype, l = s.hasOwnProperty;
  function c(d, f) {
    var u = r(d), h = !u && t(d), m = !u && !h && n(d), g = !u && !h && !m && o(d), p = u || h || m || g, v = p ? e(d.length, String) : [], y = v.length;
    for (var b in d)
      (f || l.call(d, b)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
      (b == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      m && (b == "offset" || b == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      g && (b == "buffer" || b == "byteLength" || b == "byteOffset") || // Skip index properties.
      a(b, y))) && v.push(b);
    return v;
  }
  return xn = c, xn;
}
var Cn, Zi;
function zu() {
  if (Zi) return Cn;
  Zi = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Cn = t, Cn;
}
var Sn, Qi;
function Hu() {
  if (Qi) return Sn;
  Qi = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Sn = e, Sn;
}
var _n, eo;
function $u() {
  if (eo) return _n;
  eo = 1;
  var e = Hu(), t = e(Object.keys, Object);
  return _n = t, _n;
}
var Nn, to;
function Gu() {
  if (to) return Nn;
  to = 1;
  var e = zu(), t = $u(), r = Object.prototype, n = r.hasOwnProperty;
  function a(o) {
    if (!e(o))
      return t(o);
    var s = [];
    for (var l in Object(o))
      n.call(o, l) && l != "constructor" && s.push(l);
    return s;
  }
  return Nn = a, Nn;
}
var Dn, ro;
function Bu() {
  if (ro) return Dn;
  ro = 1;
  var e = Ts(), t = Rs();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Dn = r, Dn;
}
var Tn, no;
function Vu() {
  if (no) return Tn;
  no = 1;
  var e = Mu(), t = Gu(), r = Bu();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return Tn = n, Tn;
}
var An, ao;
function Ku() {
  if (ao) return An;
  ao = 1;
  var e = Tu(), t = Iu(), r = Vu();
  function n(a) {
    return e(a, r, t);
  }
  return An = n, An;
}
var On, io;
function Wu() {
  if (io) return On;
  io = 1;
  var e = Ku(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(o, s, l, c, d, f) {
    var u = l & t, h = e(o), m = h.length, g = e(s), p = g.length;
    if (m != p && !u)
      return !1;
    for (var v = m; v--; ) {
      var y = h[v];
      if (!(u ? y in s : n.call(s, y)))
        return !1;
    }
    var b = f.get(o), x = f.get(s);
    if (b && x)
      return b == s && x == o;
    var S = !0;
    f.set(o, s), f.set(s, o);
    for (var N = u; ++v < m; ) {
      y = h[v];
      var w = o[y], _ = s[y];
      if (c)
        var T = u ? c(_, w, y, s, o, f) : c(w, _, y, o, s, f);
      if (!(T === void 0 ? w === _ || d(w, _, l, c, f) : T)) {
        S = !1;
        break;
      }
      N || (N = y == "constructor");
    }
    if (S && !N) {
      var A = o.constructor, E = s.constructor;
      A != E && "constructor" in o && "constructor" in s && !(typeof A == "function" && A instanceof A && typeof E == "function" && E instanceof E) && (S = !1);
    }
    return f.delete(o), f.delete(s), S;
  }
  return On = a, On;
}
var In, oo;
function Uu() {
  if (oo) return In;
  oo = 1;
  var e = rt(), t = Fe(), r = e(t, "DataView");
  return In = r, In;
}
var kn, so;
function Yu() {
  if (so) return kn;
  so = 1;
  var e = rt(), t = Fe(), r = e(t, "Promise");
  return kn = r, kn;
}
var Rn, lo;
function Ju() {
  if (lo) return Rn;
  lo = 1;
  var e = rt(), t = Fe(), r = e(t, "Set");
  return Rn = r, Rn;
}
var En, co;
function Xu() {
  if (co) return En;
  co = 1;
  var e = rt(), t = Fe(), r = e(t, "WeakMap");
  return En = r, En;
}
var Ln, uo;
function Zu() {
  if (uo) return Ln;
  uo = 1;
  var e = Uu(), t = ua(), r = Yu(), n = Ju(), a = Xu(), o = $t(), s = As(), l = "[object Map]", c = "[object Object]", d = "[object Promise]", f = "[object Set]", u = "[object WeakMap]", h = "[object DataView]", m = s(e), g = s(t), p = s(r), v = s(n), y = s(a), b = o;
  return (e && b(new e(new ArrayBuffer(1))) != h || t && b(new t()) != l || r && b(r.resolve()) != d || n && b(new n()) != f || a && b(new a()) != u) && (b = function(x) {
    var S = o(x), N = S == c ? x.constructor : void 0, w = N ? s(N) : "";
    if (w)
      switch (w) {
        case m:
          return h;
        case g:
          return l;
        case p:
          return d;
        case v:
          return f;
        case y:
          return u;
      }
    return S;
  }), Ln = b, Ln;
}
var Fn, fo;
function Qu() {
  if (fo) return Fn;
  fo = 1;
  var e = mu(), t = Is(), r = Nu(), n = Wu(), a = Zu(), o = fa(), s = ks(), l = Es(), c = 1, d = "[object Arguments]", f = "[object Array]", u = "[object Object]", h = Object.prototype, m = h.hasOwnProperty;
  function g(p, v, y, b, x, S) {
    var N = o(p), w = o(v), _ = N ? f : a(p), T = w ? f : a(v);
    _ = _ == d ? u : _, T = T == d ? u : T;
    var A = _ == u, E = T == u, k = _ == T;
    if (k && s(p)) {
      if (!s(v))
        return !1;
      N = !0, A = !1;
    }
    if (k && !A)
      return S || (S = new e()), N || l(p) ? t(p, v, y, b, x, S) : r(p, v, _, y, b, x, S);
    if (!(y & c)) {
      var C = A && m.call(p, "__wrapped__"), D = E && m.call(v, "__wrapped__");
      if (C || D) {
        var q = C ? p.value() : p, L = D ? v.value() : v;
        return S || (S = new e()), x(q, L, y, b, S);
      }
    }
    return k ? (S || (S = new e()), n(p, v, y, b, x, S)) : !1;
  }
  return Fn = g, Fn;
}
var jn, ho;
function ef() {
  if (ho) return jn;
  ho = 1;
  var e = Qu(), t = Vt();
  function r(n, a, o, s, l) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, o, s, r, l);
  }
  return jn = r, jn;
}
var Pn, po;
function tf() {
  if (po) return Pn;
  po = 1;
  var e = ef();
  function t(r, n) {
    return e(r, n);
  }
  return Pn = t, Pn;
}
var rf = tf();
const lm = /* @__PURE__ */ lc(rf), nf = cc({
  base: "flex items-center justify-center border border-solid",
  variants: {
    type: {
      critical: "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
      warning: "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
      info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
      positive: "border-f1-border-positive bg-f1-background-positive text-f1-icon-positive"
    },
    size: {
      sm: "h-6 w-6 rounded-sm",
      md: "h-8 w-8 rounded",
      lg: "h-10 w-10 rounded-md"
    }
  },
  defaultVariants: {
    type: "info",
    size: "md"
  }
}), af = ({
  type: e,
  size: t,
  "aria-label": r,
  "aria-labelledby": n
}) => {
  const a = {
    critical: ns,
    warning: uc,
    info: dc,
    positive: rs
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: nf({ type: e, size: t }),
      "aria-label": r,
      "aria-labelledby": n,
      role: "alert",
      children: /* @__PURE__ */ i(fe, { icon: a[e], size: t })
    }
  );
}, ha = Ge(af);
function of(e, t) {
  const n = df(e);
  let a;
  if (n.date) {
    const c = uf(n.date, 2);
    a = ff(c.restDateString, c.year);
  }
  if (!a || isNaN(a.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  const o = a.getTime();
  let s = 0, l;
  if (n.time && (s = hf(n.time), isNaN(s)))
    return /* @__PURE__ */ new Date(NaN);
  if (n.timezone) {
    if (l = pf(n.timezone), isNaN(l))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    const c = new Date(o + s), d = /* @__PURE__ */ new Date(0);
    return d.setFullYear(
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ), d.setHours(
      c.getUTCHours(),
      c.getUTCMinutes(),
      c.getUTCSeconds(),
      c.getUTCMilliseconds()
    ), d;
  }
  return new Date(o + s + l);
}
const _t = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, sf = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, lf = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, cf = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function df(e) {
  const t = {}, r = e.split(_t.dateTimeDelimiter);
  let n;
  if (r.length > 2)
    return t;
  if (/:/.test(r[0]) ? n = r[0] : (t.date = r[0], n = r[1], _t.timeZoneDelimiter.test(t.date) && (t.date = e.split(_t.timeZoneDelimiter)[0], n = e.substr(
    t.date.length,
    e.length
  ))), n) {
    const a = _t.timezone.exec(n);
    a ? (t.time = n.replace(a[1], ""), t.timezone = a[1]) : t.time = n;
  }
  return t;
}
function uf(e, t) {
  const r = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"
  ), n = e.match(r);
  if (!n) return { year: NaN, restDateString: "" };
  const a = n[1] ? parseInt(n[1]) : null, o = n[2] ? parseInt(n[2]) : null;
  return {
    year: o === null ? a : o * 100,
    restDateString: e.slice((n[1] || n[2]).length)
  };
}
function ff(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const r = e.match(sf);
  if (!r) return /* @__PURE__ */ new Date(NaN);
  const n = !!r[4], a = st(r[1]), o = st(r[2]) - 1, s = st(r[3]), l = st(r[4]), c = st(r[5]) - 1;
  if (n)
    return yf(t, l, c) ? gf(t, l, c) : /* @__PURE__ */ new Date(NaN);
  {
    const d = /* @__PURE__ */ new Date(0);
    return !vf(t, o, s) || !bf(t, a) ? /* @__PURE__ */ new Date(NaN) : (d.setUTCFullYear(t, o, Math.max(a, s)), d);
  }
}
function st(e) {
  return e ? parseInt(e) : 1;
}
function hf(e) {
  const t = e.match(lf);
  if (!t) return NaN;
  const r = qn(t[1]), n = qn(t[2]), a = qn(t[3]);
  return wf(r, n, a) ? r * as + n * is + a * 1e3 : NaN;
}
function qn(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function pf(e) {
  if (e === "Z") return 0;
  const t = e.match(cf);
  if (!t) return 0;
  const r = t[1] === "+" ? -1 : 1, n = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return xf(n, a) ? r * (n * as + a * is) : NaN;
}
function gf(e, t, r) {
  const n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(e, 0, 4);
  const a = n.getUTCDay() || 7, o = (t - 1) * 7 + r + 1 - a;
  return n.setUTCDate(n.getUTCDate() + o), n;
}
const mf = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ls(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function vf(e, t, r) {
  return t >= 0 && t <= 11 && r >= 1 && r <= (mf[t] || (Ls(e) ? 29 : 28));
}
function bf(e, t) {
  return t >= 1 && t <= (Ls(e) ? 366 : 365);
}
function yf(e, t, r) {
  return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function wf(e, t, r) {
  return e === 24 ? t === 0 && r === 0 : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function xf(e, t) {
  return t >= 0 && t <= 59;
}
const Fs = ce(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  os,
  {
    ref: r,
    className: I("text-f1-foreground-secondary", e),
    ...t
  }
));
Fs.displayName = os.displayName;
const js = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i("div", { className: e, ...t });
js.displayName = "DialogFooter";
const Ps = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i("div", { className: e, ...t });
Ps.displayName = "DialogHeader";
const Cf = (e, t, r) => {
  const n = ft[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function Sf({
  granularities: e,
  value: t,
  onChange: r
}) {
  const n = ae(), a = (o) => {
    r(o);
  };
  return /* @__PURE__ */ O("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ i("h6", { className: "text-sm font-medium", children: n.date.selectedBy }),
    /* @__PURE__ */ i(ss, { value: t, onValueChange: a, as: "list", children: /* @__PURE__ */ i(ls, { children: e.map((o) => /* @__PURE__ */ i(Wn, { value: o, children: n.date.granularities[o]?.label || o }, o)) }) })
  ] });
}
const go = "__custom__", _f = (e, t) => {
  if (!e?.value) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : Ta(e.value.from, r.from) && (!e.value.to || !r.to || Ta(e.value.to, r.to));
}, Nf = ({ presets: e, ...t }) => {
  const [r, n] = M();
  return K(() => {
    if (t.date) {
      const o = Object.entries(e).find(
        ([s, l]) => _f(t.date, l)
      );
      n(o ? o[0] : void 0);
    }
  }, [t.date, e]), /* @__PURE__ */ i(ss, { as: "list", value: r, onValueChange: (o) => {
    n(o), t.onSelect?.(o);
  }, children: /* @__PURE__ */ O(ls, { children: [
    Object.entries(e).map(([o, s]) => /* @__PURE__ */ i(Wn, { value: o, children: s?.label || o }, o)),
    /* @__PURE__ */ i(fc, {}),
    /* @__PURE__ */ i(Wn, { value: go, children: "Custom" }, go)
  ] }) });
}, Xe = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, mo = "__custom__";
function qs({
  onSelect: e,
  defaultValue: t,
  presets: r = [],
  granularities: n = ["day"],
  children: a,
  compareTo: o,
  defaultCompareTo: s,
  onCompareToChange: l,
  hideCalendarInput: c,
  value: d,
  asChild: f,
  weekStartsOn: u,
  ...h
}) {
  const m = ae(), g = cs(), [p, v] = M(
    d || t
  ), y = u ?? g.date?.weekStartsOn ?? ds.Monday;
  K(() => {
    Xe(d, p) || v(d || t);
  }, [d, t]);
  const b = F(
    () => p?.granularity ?? "day",
    [p?.granularity]
  ), x = F(() => Un(y)[b], [b, y]), S = F(() => x.calendarMode || "single", [x]), N = (H) => {
    w({
      value: x.toRange(H ?? void 0),
      granularity: b
    });
  }, w = (H) => {
    Xe(H, p) || (v(H), e?.(H));
  }, _ = (H) => {
    A(H === mo);
    const U = H ? r[+H] : void 0;
    if (!U) return;
    const Y = Un(y);
    w({
      value: Y[U.granularity].toRange(
        typeof U.value == "function" ? U.value() : U.value
      ),
      granularity: U.granularity
    }), H !== mo && h.onOpenChange?.(!1);
  }, [T, A] = M(!1), E = (H) => {
    w({
      value: p?.value,
      granularity: H
    });
  }, k = F(
    () => r.length > 0 && !T,
    [r, T]
  ), C = () => {
    A(!1);
  }, D = F(
    () => x.calendarView || "day",
    [x]
  ), [q, L] = M(s || void 0), z = F(() => {
    const H = (o ?? {})[b] || [];
    if (!p?.value)
      return [];
    const U = p.value, Y = H.map((R, P) => {
      const $ = typeof R.value == "function" ? R.value(x.toRange(U)) : Cf(
        x.toRange(U),
        R.value.delta,
        R.value.units
      ), B = Array.isArray($) ? $.map((J) => x.toString(J, m)).join(", ") : x.toString($, m);
      return {
        label: R.label,
        value: (P + 1).toString(),
        // This leaves index 0 spot vacant for the 'none' option.
        description: B,
        dateValue: $
      };
    });
    return Y.length === 0 ? [] : [
      {
        label: m.date.none,
        value: "0",
        description: "",
        dateValue: void 0
      },
      ...Y
    ];
  }, [o, p, x, b]);
  K(() => {
    L(s || "0");
  }, [b, s]);
  const W = (H) => {
    L(H);
  };
  return K(() => {
    l?.(
      q ? z[+q]?.dateValue : void 0
    );
  }, [q, l, z]), /* @__PURE__ */ O(us, { open: h.open, onOpenChange: h.onOpenChange, children: [
    /* @__PURE__ */ i(fs, { asChild: f, children: a }),
    /* @__PURE__ */ i(hs, { className: "w-full overflow-auto", align: "start", children: k ? /* @__PURE__ */ i(
      Nf,
      {
        presets: r,
        date: p,
        onSelect: _
      }
    ) : /* @__PURE__ */ O("div", { className: "flex gap-4", children: [
      (r.length > 0 || n.length > 1) && /* @__PURE__ */ O("div", { children: [
        r.length > 0 && /* @__PURE__ */ i(
          ne,
          {
            icon: na,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: C
          }
        ),
        n.length > 1 && /* @__PURE__ */ i(
          Sf,
          {
            granularities: n,
            value: b,
            onChange: E
          }
        )
      ] }),
      /* @__PURE__ */ O("div", { className: "min-w-[300px] flex-1", children: [
        /* @__PURE__ */ i(
          hc,
          {
            showInput: !c,
            mode: S,
            view: D,
            onSelect: N,
            defaultSelected: p?.value,
            minDate: h.minDate,
            maxDate: h.maxDate,
            weekStartsOn: y
          }
        ),
        z.length > 0 && /* @__PURE__ */ O("div", { className: "mt-4 flex flex-col gap-2", children: [
          /* @__PURE__ */ i("div", { className: "text-gray-500 text-sm", children: m.date.compareTo }),
          /* @__PURE__ */ i(
            Ot,
            {
              label: m.date.compareTo,
              hideLabel: !0,
              placeholder: m.date.compareTo,
              options: z.map((H) => ({
                label: H.label,
                value: H.value,
                description: H.description ?? ""
              })),
              onChange: W,
              value: q
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
const Ms = ce(
  ({
    value: e,
    onDateChange: t,
    granularity: r,
    onOpenChange: n,
    minDate: a,
    maxDate: o,
    onClear: s,
    showIcon: l = !0,
    displayFormat: c,
    ...d
  }, f) => {
    const [u, h] = M(""), [m, g] = M(!1), p = ae();
    K(() => {
      h(
        r.toString(e?.value, p, c ?? "long")
      );
    }, [e, r, p, c]);
    const v = (N) => mc(N, r, {
      minDate: a,
      maxDate: o
    }), y = (N, w) => {
      if (N === "") {
        t?.({
          value: void 0,
          granularity: w.key
        }), g(d.required ?? !1);
        return;
      }
      const _ = w.toRange(
        w.fromString(N, p)
      );
      _ && (v(_?.from) && v(_?.to) ? (t?.({
        value: _,
        granularity: w.key
      }), g(!1)) : g(!0));
    }, b = () => {
      y(u, r);
    }, x = (N) => {
      h(N);
    }, S = d.placeholder ?? r.placeholder();
    return /* @__PURE__ */ i(te, { children: /* @__PURE__ */ i(
      pc,
      {
        ...d,
        placeholder: S,
        icon: l ? gc : void 0,
        ref: f,
        onFocus: () => n?.(!0),
        onClear: () => {
          s?.(), h(""), y("", r);
        },
        onKeyDown: (N) => {
          N.key === "Enter" && b();
        },
        type: "text",
        onChange: x,
        error: m || d.error,
        onBlur: b,
        value: u,
        onClickContent: () => n?.(!0)
      }
    ) });
  }
);
Ms.displayName = "DateInput";
function Df({
  onChange: e,
  value: t,
  presets: r = [],
  granularities: n = ["day"],
  minDate: a,
  maxDate: o,
  open: s = !1,
  showIcon: l = !0,
  displayFormat: c,
  ...d
}) {
  const [f, u] = M(), [h, m] = M(s);
  K(() => {
    m(s);
  }, [s]);
  const g = ae(), p = F(() => n[0] ?? "day", [n]), v = oe(
    (T) => {
      const A = T || p;
      if (!ft[A])
        throw new Error(`Invalid granularity ${A}`);
      return {
        ...ft[A],
        key: A
      };
    },
    [p]
  ), y = oe(
    (T) => {
      if (!T) return;
      const A = v(T.granularity), E = A.toRange(
        A.calendarMode === "range" ? T.value : T.value?.from ?? void 0
      );
      if (E)
        return { value: E, granularity: T.granularity };
    },
    [v]
  ), b = F(() => v(f?.granularity), [f?.granularity, v]);
  K(() => {
    const T = y(t);
    Xe(f, T) || u(T);
  }, [t]);
  const x = (T) => {
    const A = y(T), k = v(A?.granularity).calendarMode !== "range" && !Xe(A, f);
    S(A), k && m(!1);
  }, S = (T) => {
    const A = y(T);
    if (u(A), !Xe(A, f)) {
      const E = v(A?.granularity);
      e?.(A, E.toString(A?.value, g));
    }
  }, N = (T) => {
    m(T), d.onOpenChange?.(T);
  }, w = F(() => r.filter(
    (T) => n.includes(T.granularity)
  ), [r, n]), _ = V(null);
  return K(() => {
    h && _.current && requestAnimationFrame(() => {
      _.current?.focus();
    });
  }, [h]), /* @__PURE__ */ i(
    qs,
    {
      hideCalendarInput: !0,
      onSelect: x,
      value: f,
      presets: w,
      granularities: n,
      minDate: a,
      maxDate: o,
      open: h,
      onOpenChange: N,
      asChild: !0,
      children: /* @__PURE__ */ i(
        Ms,
        {
          ref: _,
          ...d,
          value: f,
          granularity: b,
          onDateChange: S,
          showIcon: l,
          displayFormat: c
        }
      )
    }
  );
}
const Tf = Ge(
  aa("F0DatePicker", Df)
);
function Af(e) {
  if (Array.isArray(e)) return e;
}
function Of(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, o, s, l = [], c = !0, d = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(c = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); c = !0) ;
    } catch (f) {
      d = !0, a = f;
    } finally {
      try {
        if (!c && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (d) throw a;
      }
    }
    return l;
  }
}
function Jn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zs(e, t) {
  if (e) {
    if (typeof e == "string") return Jn(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Jn(e, t) : void 0;
  }
}
function If() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hs(e, t) {
  return Af(e) || Of(e, t) || zs(e, t) || If();
}
var Mn = {}, lt = {}, vo;
function $s() {
  if (vo) return lt;
  vo = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.bind = void 0;
  function e(t, r) {
    var n = r.type, a = r.listener, o = r.options;
    return t.addEventListener(n, a, o), function() {
      t.removeEventListener(n, a, o);
    };
  }
  return lt.bind = e, lt;
}
var $e = {}, bo;
function kf() {
  if (bo) return $e;
  bo = 1;
  var e = $e && $e.__assign || function() {
    return e = Object.assign || function(o) {
      for (var s, l = 1, c = arguments.length; l < c; l++) {
        s = arguments[l];
        for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (o[d] = s[d]);
      }
      return o;
    }, e.apply(this, arguments);
  };
  Object.defineProperty($e, "__esModule", { value: !0 }), $e.bindAll = void 0;
  var t = /* @__PURE__ */ $s();
  function r(o) {
    if (!(typeof o > "u"))
      return typeof o == "boolean" ? {
        capture: o
      } : o;
  }
  function n(o, s) {
    if (s == null)
      return o;
    var l = e(e({}, o), { options: e(e({}, r(s)), r(o.options)) });
    return l;
  }
  function a(o, s, l) {
    var c = s.map(function(d) {
      var f = n(d, l);
      return (0, t.bind)(o, f);
    });
    return function() {
      c.forEach(function(f) {
        return f();
      });
    };
  }
  return $e.bindAll = a, $e;
}
var yo;
function Rf() {
  return yo || (yo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ $s();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ kf();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  })(Mn)), Mn;
}
var Qe = /* @__PURE__ */ Rf(), Gs = "data-pdnd-honey-pot";
function Bs(e) {
  return e instanceof Element && e.hasAttribute(Gs);
}
function Vs(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = Hs(t, 2), n = r[0], a = r[1];
  return n ? Bs(n) ? a ?? null : n : null;
}
function ht(e) {
  "@babel/helpers - typeof";
  return ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ht(e);
}
function Ef(e, t) {
  if (ht(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ht(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Lf(e) {
  var t = Ef(e, "string");
  return ht(t) == "symbol" ? t : t + "";
}
function bt(e, t, r) {
  return (t = Lf(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Ff = 2147483647;
function wo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wo(Object(r), !0).forEach(function(n) {
      bt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var pt = 2, Co = pt / 2;
function jf(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function Pf(e) {
  return {
    x: e.x - Co,
    y: e.y - Co
  };
}
function qf(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function Mf(e) {
  return {
    x: Math.min(e.x, window.innerWidth - pt),
    y: Math.min(e.y, window.innerHeight - pt)
  };
}
function So(e) {
  var t = e.client, r = Mf(qf(Pf(jf(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: pt,
    height: pt
  });
}
function _o(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function zf(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function Hf(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(Gs, "true");
  var n = So({
    client: t
  });
  Object.assign(r.style, xo(xo({
    // Setting a background color explicitly to avoid any inherited styles.
    // Looks like this could be `opacity: 0`, but worried that _might_
    // cause the element to be ignored on some platforms.
    // When debugging, set backgroundColor to something like "red".
    backgroundColor: "transparent",
    position: "fixed",
    // Being explicit to avoid inheriting styles
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  }, _o({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: Ff
  })), document.body.appendChild(r);
  var a = Qe.bind(window, {
    type: "pointermove",
    listener: function(s) {
      var l = {
        x: s.clientX,
        y: s.clientY
      };
      n = So({
        client: l
      }), Object.assign(r.style, _o({
        clientRect: n
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(s) {
    var l = s.current;
    if (a(), zf({
      client: l,
      clientRect: n
    })) {
      r.remove();
      return;
    }
    function c() {
      d(), r.remove();
    }
    var d = Qe.bindAll(window, [
      {
        type: "pointerdown",
        listener: c
      },
      {
        type: "pointermove",
        listener: c
      },
      {
        type: "focusin",
        listener: c
      },
      {
        type: "focusout",
        listener: c
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: c
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: c
      },
      {
        type: "dragover",
        listener: c
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function $f() {
  var e = null;
  function t() {
    return e = null, Qe.bind(window, {
      type: "pointermove",
      listener: function(a) {
        e = {
          x: a.clientX,
          y: a.clientY
        };
      },
      // listening for pointer move in capture phase
      // so we are less likely to be impacted by events being stopped.
      options: {
        capture: !0
      }
    });
  }
  function r() {
    var n = null;
    return function(o) {
      var s = o.eventName, l = o.payload;
      if (s === "onDragStart") {
        var c = l.location.initial.input, d = e ?? {
          x: c.clientX,
          y: c.clientY
        };
        n = Hf({
          initial: d
        });
      }
      if (s === "onDrop") {
        var f, u = l.location.current.input;
        (f = n) === null || f === void 0 || f({
          current: {
            x: u.clientX,
            y: u.clientY
          }
        }), n = null, e = null;
      }
    };
  }
  return {
    bindEvents: t,
    getOnPostDispatch: r
  };
}
function Gf(e) {
  if (Array.isArray(e)) return Jn(e);
}
function Bf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vf() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ks(e) {
  return Gf(e) || Bf(e) || zs(e) || Vf();
}
function nt(e) {
  var t = null;
  return function() {
    if (!t) {
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      var s = e.apply(this, a);
      t = {
        result: s
      };
    }
    return t.result;
  };
}
var Kf = nt(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), pa = nt(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), Xn = {
  isLeavingWindow: /* @__PURE__ */ Symbol("leaving"),
  isEnteringWindow: /* @__PURE__ */ Symbol("entering")
};
function Wf(e) {
  var t = e.dragLeave;
  return pa() ? t.hasOwnProperty(Xn.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !pa())
    return;
  function t() {
    return {
      enterCount: 0,
      isOverWindow: !1
    };
  }
  var r = t();
  function n() {
    r = t();
  }
  Qe.bindAll(
    window,
    [{
      type: "dragstart",
      listener: function() {
        r.enterCount = 0, r.isOverWindow = !0;
      }
    }, {
      type: "drop",
      listener: n
    }, {
      type: "dragend",
      listener: n
    }, {
      type: "dragenter",
      listener: function(o) {
        !r.isOverWindow && r.enterCount === 0 && (o[Xn.isEnteringWindow] = !0), r.isOverWindow = !0, r.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(o) {
        r.enterCount--, r.isOverWindow && r.enterCount === 0 && (o[Xn.isLeavingWindow] = !0, r.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function Uf(e) {
  return "nodeName" in e;
}
function Yf(e) {
  return Uf(e) && e.ownerDocument !== document;
}
function Jf(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : pa() ? Wf({
    dragLeave: t
  }) : n == null ? !0 : Kf() ? Yf(n) : n instanceof HTMLIFrameElement;
}
function Xf(e) {
  var t = e.onDragEnd;
  return [
    // ## Detecting drag ending for removed draggables
    //
    // If a draggable element is removed during a drag and the user drops:
    // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
    // 2. if not over a valid drop target (or cancelled): we get nothing
    // The "dragend" event will not fire on the source draggable if it has been
    // removed from the DOM.
    // So we need to figure out if a drag operation has finished by looking at other events
    // We can do this by looking at other events
    // ### First detection: "pointermove" events
    // 1. "pointermove" events cannot fire during a drag and drop operation
    // according to the spec. So if we get a "pointermove" it means that
    // the drag and drop operations has finished. So if we get a "pointermove"
    // we know that the drag is over
    // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
    // other pointer events. However, firefox will allow a few
    // pointer event to get through after a drag starts.
    // The most I've seen is 3
    {
      type: "pointermove",
      listener: /* @__PURE__ */ (function() {
        var r = 0;
        return function() {
          if (r < 20) {
            r++;
            return;
          }
          t();
        };
      })()
    },
    // ### Second detection: "pointerdown" events
    // If we receive this event then we know that a drag operation has finished
    // and potentially another one is about to start.
    // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
    {
      type: "pointerdown",
      listener: t
    }
  ];
}
function ut(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY
  };
}
var Zf = function(t) {
  var r = [], n = null, a = function() {
    for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
      l[c] = arguments[c];
    r = l, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return a.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, a;
}, zn = Zf(function(e) {
  return e();
}), Nt = /* @__PURE__ */ (function() {
  var e = null;
  function t(n) {
    var a = requestAnimationFrame(function() {
      e = null, n();
    });
    e = {
      frameId: a,
      fn: n
    };
  }
  function r() {
    e && (cancelAnimationFrame(e.frameId), e.fn(), e = null);
  }
  return {
    schedule: t,
    flush: r
  };
})();
function Qf(e) {
  var t = e.source, r = e.initial, n = e.dispatchEvent, a = {
    dropTargets: []
  };
  function o(l) {
    n(l), a = {
      dropTargets: l.payload.location.current.dropTargets
    };
  }
  var s = {
    start: function(c) {
      var d = c.nativeSetDragImage, f = {
        current: r,
        previous: a,
        initial: r
      };
      o({
        eventName: "onGenerateDragPreview",
        payload: {
          source: t,
          location: f,
          nativeSetDragImage: d
        }
      }), Nt.schedule(function() {
        o({
          eventName: "onDragStart",
          payload: {
            source: t,
            location: f
          }
        });
      });
    },
    dragUpdate: function(c) {
      var d = c.current;
      Nt.flush(), zn.cancel(), o({
        eventName: "onDropTargetChange",
        payload: {
          source: t,
          location: {
            initial: r,
            previous: a,
            current: d
          }
        }
      });
    },
    drag: function(c) {
      var d = c.current;
      zn(function() {
        Nt.flush();
        var f = {
          initial: r,
          previous: a,
          current: d
        };
        o({
          eventName: "onDrag",
          payload: {
            source: t,
            location: f
          }
        });
      });
    },
    drop: function(c) {
      var d = c.current, f = c.updatedSourcePayload;
      Nt.flush(), zn.cancel(), o({
        eventName: "onDrop",
        payload: {
          source: f ?? t,
          location: {
            current: d,
            previous: a,
            initial: r
          }
        }
      });
    }
  };
  return s;
}
var Zn = {
  isActive: !1
};
function Ws() {
  return !Zn.isActive;
}
function eh(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function th(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function rh(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!Ws())
    return;
  var o = nh({
    event: t,
    dragType: r,
    getDropTargetsOver: n
  });
  Zn.isActive = !0;
  var s = {
    current: o
  };
  Hn({
    event: t,
    current: o.dropTargets
  });
  var l = Qf({
    source: r.payload,
    dispatchEvent: a,
    initial: o
  });
  function c(m) {
    var g = th({
      current: s.current.dropTargets,
      next: m.dropTargets
    });
    s.current = m, g && l.dragUpdate({
      current: s.current
    });
  }
  function d(m) {
    var g = ut(m), p = Bs(m.target) ? Vs({
      x: g.clientX,
      y: g.clientY
    }) : m.target, v = n({
      target: p,
      input: g,
      source: r.payload,
      current: s.current.dropTargets
    });
    v.length && (m.preventDefault(), Hn({
      event: m,
      current: v
    })), c({
      dropTargets: v,
      input: g
    });
  }
  function f() {
    s.current.dropTargets.length && c({
      dropTargets: [],
      input: s.current.input
    }), l.drop({
      current: s.current,
      updatedSourcePayload: null
    }), u();
  }
  function u() {
    Zn.isActive = !1, h();
  }
  var h = Qe.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(g) {
        d(g), l.drag({
          current: s.current
        });
      }
    }, {
      type: "dragenter",
      listener: d
    }, {
      type: "dragleave",
      listener: function(g) {
        Jf({
          dragLeave: g
        }) && (c({
          input: s.current.input,
          dropTargets: []
        }), r.startedFrom === "external" && f());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(g) {
        if (s.current = {
          dropTargets: s.current.dropTargets,
          input: ut(g)
        }, !s.current.dropTargets.length) {
          f();
          return;
        }
        g.preventDefault(), Hn({
          event: g,
          current: s.current.dropTargets
        }), l.drop({
          current: s.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: r.type === "external" ? r.getDropPayload(g) : null
        }), u();
      }
    }, {
      // "dragend" fires when on the drag source (eg a draggable element)
      // when the drag is finished.
      // "dragend" will fire after "drop" (if there was a successful drop)
      // "dragend" does not fire if the draggable source has been removed during the drag
      // or for external drag sources (eg files)
      // This "dragend" listener will not fire if there was a successful drop
      // as we will have already removed the event listener
      type: "dragend",
      listener: function(g) {
        s.current = {
          dropTargets: s.current.dropTargets,
          input: ut(g)
        }, f();
      }
    }].concat(Ks(Xf({
      onDragEnd: f
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  l.start({
    nativeSetDragImage: eh(t)
  });
}
function Hn(e) {
  var t, r = e.event, n = e.current, a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function nh(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = ut(t);
  if (r.startedFrom === "external")
    return {
      input: a,
      dropTargets: []
    };
  var o = n({
    input: a,
    source: r.payload,
    target: t.target,
    current: []
  });
  return {
    input: a,
    dropTargets: o
  };
}
var No = {
  canStart: Ws,
  start: rh
}, Qn = /* @__PURE__ */ new Map();
function ah(e) {
  var t = e.typeKey, r = e.mount, n = Qn.get(t);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: t,
    unmount: r(),
    usageCount: 1
  };
  return Qn.set(t, a), a;
}
function ih(e) {
  var t = ah(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), Qn.delete(e.typeKey));
  };
}
function Kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function() {
    t.forEach(function(a) {
      return a();
    });
  };
}
function Us(e, t) {
  var r = t.attribute, n = t.value;
  return e.setAttribute(r, n), function() {
    return e.removeAttribute(r);
  };
}
function Do(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Do(Object(r), !0).forEach(function(n) {
      bt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Do(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $n(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = oh(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, s = !0, l = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var d = r.next();
    return s = d.done, d;
  }, e: function(d) {
    l = !0, o = d;
  }, f: function() {
    try {
      s || r.return == null || r.return();
    } finally {
      if (l) throw o;
    }
  } };
}
function oh(e, t) {
  if (e) {
    if (typeof e == "string") return To(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? To(e, t) : void 0;
  }
}
function To(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Gn(e) {
  return e.slice(0).reverse();
}
function sh(e) {
  var t = e.typeKey, r = e.defaultDropEffect, n = /* @__PURE__ */ new WeakMap(), a = "data-drop-target-for-".concat(t), o = "[".concat(a, "]");
  function s(m) {
    return n.set(m.element, m), function() {
      return n.delete(m.element);
    };
  }
  function l(m) {
    if (process.env.NODE_ENV !== "production") {
      var g = n.get(m.element);
      g && console.warn("You have already registered a [".concat(t, "] dropTarget on the same element"), {
        existing: g,
        proposed: m
      }), m.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    var p = Kt(Us(m.element, {
      attribute: a,
      value: "true"
    }), s(m));
    return nt(p);
  }
  function c(m) {
    var g, p, v, y, b = m.source, x = m.target, S = m.input, N = m.result, w = N === void 0 ? [] : N;
    if (x == null)
      return w;
    if (!(x instanceof Element))
      return x instanceof Node ? c({
        source: b,
        target: x.parentElement,
        input: S,
        result: w
      }) : w;
    var _ = x.closest(o);
    if (_ == null)
      return w;
    var T = n.get(_);
    if (T == null)
      return w;
    var A = {
      input: S,
      source: b,
      element: T.element
    };
    if (T.canDrop && !T.canDrop(A))
      return c({
        source: b,
        target: T.element.parentElement,
        input: S,
        result: w
      });
    var E = (g = (p = T.getData) === null || p === void 0 ? void 0 : p.call(T, A)) !== null && g !== void 0 ? g : {}, k = (v = (y = T.getDropEffect) === null || y === void 0 ? void 0 : y.call(T, A)) !== null && v !== void 0 ? v : r, C = {
      data: E,
      element: T.element,
      dropEffect: k,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return c({
      source: b,
      target: T.element.parentElement,
      input: S,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(Ks(w), [C])
    });
  }
  function d(m) {
    var g = m.eventName, p = m.payload, v = $n(p.location.current.dropTargets), y;
    try {
      for (v.s(); !(y = v.n()).done; ) {
        var b, x = y.value, S = n.get(x.element), N = Pe(Pe({}, p), {}, {
          self: x
        });
        S == null || (b = S[g]) === null || b === void 0 || b.call(
          S,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          N
        );
      }
    } catch (w) {
      v.e(w);
    } finally {
      v.f();
    }
  }
  var f = {
    onGenerateDragPreview: d,
    onDrag: d,
    onDragStart: d,
    onDrop: d,
    onDropTargetChange: function(g) {
      var p = g.payload, v = new Set(p.location.current.dropTargets.map(function(W) {
        return W.element;
      })), y = /* @__PURE__ */ new Set(), b = $n(p.location.previous.dropTargets), x;
      try {
        for (b.s(); !(x = b.n()).done; ) {
          var S, N = x.value;
          y.add(N.element);
          var w = n.get(N.element), _ = v.has(N.element), T = Pe(Pe({}, p), {}, {
            self: N
          });
          if (w == null || (S = w.onDropTargetChange) === null || S === void 0 || S.call(w, T), !_) {
            var A;
            w == null || (A = w.onDragLeave) === null || A === void 0 || A.call(w, T);
          }
        }
      } catch (W) {
        b.e(W);
      } finally {
        b.f();
      }
      var E = $n(p.location.current.dropTargets), k;
      try {
        for (E.s(); !(k = E.n()).done; ) {
          var C, D, q = k.value;
          if (!y.has(q.element)) {
            var L = Pe(Pe({}, p), {}, {
              self: q
            }), z = n.get(q.element);
            z == null || (C = z.onDropTargetChange) === null || C === void 0 || C.call(z, L), z == null || (D = z.onDragEnter) === null || D === void 0 || D.call(z, L);
          }
        }
      } catch (W) {
        E.e(W);
      } finally {
        E.f();
      }
    }
  };
  function u(m) {
    f[m.eventName](m);
  }
  function h(m) {
    var g = m.source, p = m.target, v = m.input, y = m.current, b = c({
      source: g,
      target: p,
      input: v
    });
    if (b.length >= y.length)
      return b;
    for (var x = Gn(y), S = Gn(b), N = [], w = 0; w < x.length; w++) {
      var _, T = x[w], A = S[w];
      if (A != null) {
        N.push(A);
        continue;
      }
      var E = N[w - 1], k = x[w - 1];
      if (E?.element !== k?.element)
        break;
      var C = n.get(T.element);
      if (!C)
        break;
      var D = {
        input: v,
        source: g,
        element: C.element
      };
      if (C.canDrop && !C.canDrop(D) || !((_ = C.getIsSticky) !== null && _ !== void 0 && _.call(C, D)))
        break;
      N.push(Pe(Pe({}, T), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return Gn(N);
  }
  return {
    dropTargetForConsumers: l,
    getIsOver: h,
    dispatchEvent: u
  };
}
function lh(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = ch(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, s = !0, l = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var d = r.next();
    return s = d.done, d;
  }, e: function(d) {
    l = !0, o = d;
  }, f: function() {
    try {
      s || r.return == null || r.return();
    } finally {
      if (l) throw o;
    }
  } };
}
function ch(e, t) {
  if (e) {
    if (typeof e == "string") return Ao(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ao(e, t) : void 0;
  }
}
function Ao(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Oo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oo(Object(r), !0).forEach(function(n) {
      bt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oo(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uh() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(o) {
    t && (!o.canMonitor || o.canMonitor(t.canMonitorArgs)) && t.active.add(o);
  }
  function n(o) {
    var s = dh({}, o);
    e.add(s), r(s);
    function l() {
      e.delete(s), t && t.active.delete(s);
    }
    return nt(l);
  }
  function a(o) {
    var s = o.eventName, l = o.payload;
    if (s === "onGenerateDragPreview") {
      t = {
        canMonitorArgs: {
          initial: l.location.initial,
          source: l.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var c = lh(e), d;
      try {
        for (c.s(); !(d = c.n()).done; ) {
          var f = d.value;
          r(f);
        }
      } catch (v) {
        c.e(v);
      } finally {
        c.f();
      }
    }
    if (t) {
      for (var u = Array.from(t.active), h = 0, m = u; h < m.length; h++) {
        var g = m[h];
        if (t.active.has(g)) {
          var p;
          (p = g[s]) === null || p === void 0 || p.call(g, l);
        }
      }
      s === "onDrop" && (t.active.clear(), t = null);
    }
  }
  return {
    dispatchEvent: a,
    monitorForConsumers: n
  };
}
function fh(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, o = e.defaultDropEffect, s = uh(), l = sh({
    typeKey: t,
    defaultDropEffect: o
  });
  function c(u) {
    n?.(u), l.dispatchEvent(u), s.dispatchEvent(u), a?.(u);
  }
  function d(u) {
    var h = u.event, m = u.dragType;
    No.start({
      event: h,
      dragType: m,
      getDropTargetsOver: l.getIsOver,
      dispatchEvent: c
    });
  }
  function f() {
    function u() {
      var h = {
        canStart: No.canStart,
        start: d
      };
      return r(h);
    }
    return ih({
      typeKey: t,
      mount: u
    });
  }
  return {
    registerUsage: f,
    dropTarget: l.dropTargetForConsumers,
    monitor: s.monitorForConsumers
  };
}
var hh = nt(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), ph = "pdnd:android-fallback", Io = "text/plain", gh = "text/uri-list", mh = "application/vnd.pdnd", gt = /* @__PURE__ */ new WeakMap();
function vh(e) {
  return gt.set(e.element, e), function() {
    gt.delete(e.element);
  };
}
var ko = $f(), ga = fh({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return Kt(ko.bindEvents(), Qe.bind(document, {
      type: "dragstart",
      listener: function(n) {
        var a, o, s, l, c, d;
        if (t.canStart(n) && !n.defaultPrevented) {
          if (!n.dataTransfer) {
            process.env.NODE_ENV !== "production" && console.warn(`
              It appears as though you have are not testing DragEvents correctly.

              - If you are unit testing, ensure you have polyfilled DragEvent.
              - If you are browser testing, ensure you are dispatching drag events correctly.

              Please see our testing guides for more information:
              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing
            `.replace(/ {2}/g, ""));
            return;
          }
          var f = n.target;
          if (!(f instanceof HTMLElement))
            return null;
          var u = gt.get(f);
          if (!u)
            return null;
          var h = ut(n), m = {
            element: u.element,
            dragHandle: (a = u.dragHandle) !== null && a !== void 0 ? a : null,
            input: h
          };
          if (u.canDrag && !u.canDrag(m))
            return n.preventDefault(), null;
          if (u.dragHandle) {
            var g = Vs({
              x: h.clientX,
              y: h.clientY
            });
            if (!u.dragHandle.contains(g))
              return n.preventDefault(), null;
          }
          var p = (o = (s = u.getInitialDataForExternal) === null || s === void 0 ? void 0 : s.call(u, m)) !== null && o !== void 0 ? o : null;
          if (p)
            for (var v = 0, y = Object.entries(p); v < y.length; v++) {
              var b = Hs(y[v], 2), x = b[0], S = b[1];
              n.dataTransfer.setData(x, S ?? "");
            }
          hh() && !n.dataTransfer.types.includes(Io) && !n.dataTransfer.types.includes(gh) && n.dataTransfer.setData(Io, ph), n.dataTransfer.setData(mh, "");
          var N = {
            element: u.element,
            dragHandle: (l = u.dragHandle) !== null && l !== void 0 ? l : null,
            data: (c = (d = u.getInitialData) === null || d === void 0 ? void 0 : d.call(u, m)) !== null && c !== void 0 ? c : {}
          }, w = {
            type: "element",
            payload: N,
            startedFrom: "internal"
          };
          t.start({
            event: n,
            dragType: w
          });
        }
      }
    }));
  },
  dispatchEventToSource: function(t) {
    var r, n, a = t.eventName, o = t.payload;
    (r = gt.get(o.source.element)) === null || r === void 0 || (n = r[a]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      o
    );
  },
  onPostDispatch: ko.getOnPostDispatch()
}), jt = ga.dropTarget, Ys = ga.monitor;
function bh(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = gt.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var r = Kt(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    ga.registerUsage(),
    vh(e),
    Us(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return nt(r);
}
function Ro(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ro(Object(r), !0).forEach(function(n) {
      bt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ro(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var yh = {
  top: function(t, r) {
    return Math.abs(r.y - t.top);
  },
  right: function(t, r) {
    return Math.abs(t.right - r.x);
  },
  bottom: function(t, r) {
    return Math.abs(t.bottom - r.y);
  },
  left: function(t, r) {
    return Math.abs(r.x - t.left);
  }
}, Js = /* @__PURE__ */ Symbol("closestEdge");
function Xs(e, t) {
  var r, n, a = t.element, o = t.input, s = t.allowedEdges, l = {
    x: o.clientX,
    y: o.clientY
  }, c = a.getBoundingClientRect(), d = s.map(function(u) {
    return {
      edge: u,
      value: yh[u](c, l)
    };
  }), f = (r = (n = d.sort(function(u, h) {
    return u.value - h.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return Eo(Eo({}, e), {}, bt({}, Js, f));
}
function Pt(e) {
  var t;
  return (t = e[Js]) !== null && t !== void 0 ? t : null;
}
function wh(e) {
  const t = /* @__PURE__ */ new Set();
  return Kt(
    Ys({
      canMonitor(r) {
        return r.source.data.instanceId === e;
      },
      onDragStart(r) {
        const n = r.source.data;
        t.forEach((a) => a({ phase: "start", source: n }));
      },
      onDrop(r) {
        const n = r.source.data;
        t.forEach((a) => a({ phase: "drop", source: n }));
      },
      onDropTargetChange(r) {
        const n = r.source.data;
        t.forEach((a) => a({ phase: "over", source: n }));
      }
    })
  ), {
    registerDraggable(r, { payload: n, disabled: a, handle: o }) {
      return a ? () => {
      } : bh({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: o ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return jt({
        element: r,
        getData: ({ input: a, element: o }) => Xs(
          { type: "list-droppable", index: 0, id: n },
          {
            input: a,
            element: o,
            allowedEdges: ["top", "bottom"]
          }
        )
      });
    },
    subscribe(r) {
      return t.add(r), () => t.delete(r);
    }
  };
}
const Zs = Le(null);
function ma() {
  return Te(Zs);
}
function xh({
  driver: e,
  children: t
}) {
  const r = V(e), n = F(
    () => ({ driver: r.current }),
    []
  );
  return /* @__PURE__ */ i(Zs.Provider, { value: n, children: t });
}
function Ch(e) {
  const t = ma(), { ref: r, payload: n, disabled: a, handleRef: o } = e, s = n.data, l = n.id + "|" + (s?.currentParentId ?? "null");
  K(() => {
    if (r.current && !(!t || a))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: a,
        handle: o?.current ?? null
      });
  }, [t, r, l, a, o, n]);
}
function Sh(e) {
  const t = ma(), r = e?.ref, n = e?.id, a = e?.accepts;
  K(() => {
    if (r?.current && !(!t || !n || !a))
      return t.driver.registerDroppable(r.current, { id: n, accepts: a });
  }, [t, r, n, a]);
}
function Qs(e) {
  const t = ma();
  K(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
const _h = ce(
  function({ bare: t = !1, ...r }, n) {
    return /* @__PURE__ */ i(
      "div",
      {
        ref: n,
        role: "separator",
        className: I("-mx-4 h-[1px]", t ? void 0 : "my-4"),
        style: {
          backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
        },
        ...r
      }
    );
  }
), Nh = ({ text: e, isCompleted: t }) => /* @__PURE__ */ O("div", { className: "flex flex-row items-center gap-2", children: [
  /* @__PURE__ */ i(
    fe,
    {
      className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
      icon: t ? rs : wc,
      size: "md"
    }
  ),
  /* @__PURE__ */ i(
    "span",
    {
      className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
      children: e
    }
  )
] }), Dh = ({ title: e, items: t }) => /* @__PURE__ */ O("div", { className: "px-4 pb-2", children: [
  /* @__PURE__ */ i("div", { className: "mb-2 text-sm text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ i("div", { className: "flex flex-col gap-2", children: t.map((r) => /* @__PURE__ */ i(
    Nh,
    {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    },
    r.text
  )) })
] }), Th = ({
  onClose: e,
  success: t,
  successButtonOnClick: r,
  successButtonLabel: n,
  closeLabel: a
}) => {
  const o = t && n && r, s = (l = !1) => /* @__PURE__ */ O(te, { children: [
    /* @__PURE__ */ i(
      ne,
      {
        variant: "outline",
        label: a,
        onClick: e,
        size: l ? "lg" : void 0
      }
    ),
    o && /* @__PURE__ */ i(
      ne,
      {
        variant: "promote",
        label: n,
        onClick: () => {
          r(), e?.();
        },
        size: l ? "lg" : void 0
      }
    )
  ] });
  return /* @__PURE__ */ O(js, { className: "px-4 pb-4 pt-2 [&_div]:w-full", children: [
    /* @__PURE__ */ i("div", { className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3", children: s() }),
    /* @__PURE__ */ i("div", { className: "flex flex-col-reverse gap-2 sm:hidden", children: s(!0) })
  ] });
}, el = ce(
  ({
    open: e,
    onClose: t,
    success: r = !0,
    errorMessage: n,
    successMessage: a,
    nextSteps: o,
    closeLabel: s,
    portalContainer: l
  }, c) => {
    const [d, f] = M(!1), u = oe(() => {
      f(!0), setTimeout(() => {
        t?.(), f(!1);
      }, 200);
    }, [t]);
    return /* @__PURE__ */ i(
      vc,
      {
        open: e && !d,
        onOpenChange: (h) => !h && u?.(),
        children: /* @__PURE__ */ O(
          bc,
          {
            ref: c,
            className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
            container: l,
            children: [
              /* @__PURE__ */ O(
                Ps,
                {
                  className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
                  children: [
                    /* @__PURE__ */ i(ha, { type: r ? "positive" : "critical", size: "lg" }),
                    /* @__PURE__ */ O("div", { className: "flex flex-col gap-0.5", children: [
                      /* @__PURE__ */ i(yc, { className: "text-xl font-semibold sm:text-lg", children: r ? a?.title : n?.title }),
                      /* @__PURE__ */ i(Fs, { className: "text-lg sm:text-base", children: r ? a?.description : n?.description })
                    ] })
                  ]
                }
              ),
              r && o && o.items?.length > 0 ? /* @__PURE__ */ O(te, { children: [
                /* @__PURE__ */ i(_h, {}),
                /* @__PURE__ */ i(Dh, { title: o.title, items: o.items })
              ] }) : null,
              /* @__PURE__ */ i(
                Th,
                {
                  onClose: u,
                  success: r,
                  successButtonLabel: a.buttonLabel,
                  successButtonOnClick: a.buttonOnClick,
                  closeLabel: s
                }
              )
            ]
          }
        )
      }
    );
  }
);
el.displayName = "UpsellRequestResponseDialog";
const Ah = Ge(
  el
);
function Oh({
  label: e,
  showIcon: t = !0,
  onRequest: r,
  showConfirmation: n = !0,
  loading: a,
  errorMessage: o,
  successMessage: s,
  loadingState: l,
  nextSteps: c,
  closeLabel: d,
  variant: f = "promote",
  onModalStateChange: u,
  portalContainer: h,
  ...m
}) {
  const [g, p] = M(null), [v, y] = M(!1), b = async () => {
    if (r) {
      y(!0);
      try {
        await r(), n && (p("success"), u?.(!0));
      } catch {
        p("error"), u?.(!0);
      } finally {
        y(!1);
      }
    }
  }, x = () => {
    p(null), u?.(!1);
  }, S = a || v, N = S ? l.label : e;
  return /* @__PURE__ */ O(te, { children: [
    /* @__PURE__ */ i(
      ne,
      {
        variant: f,
        label: N,
        icon: t ? xc : void 0,
        onClick: b,
        loading: S,
        ...m
      }
    ),
    n && g && /* @__PURE__ */ i(
      Ah,
      {
        open: !0,
        onClose: x,
        success: g === "success",
        errorMessage: o,
        successMessage: s,
        nextSteps: c,
        closeLabel: d,
        portalContainer: h
      }
    )
  ] });
}
const Ih = Ge(Oh);
function kh({
  title: e,
  description: t,
  variant: r = "default",
  emoji: n,
  actions: a,
  ...o
}) {
  return /* @__PURE__ */ O(
    "div",
    {
      className: "flex flex-col items-center justify-center gap-5 p-8",
      ...o,
      children: [
        r === "default" && /* @__PURE__ */ i(Cc, { emoji: n, size: "lg" }),
        r !== "default" && /* @__PURE__ */ i(ha, { type: r, size: "lg" }),
        /* @__PURE__ */ O("div", { className: "flex flex-col items-center justify-center gap-0.5", children: [
          /* @__PURE__ */ i("p", { className: "text-center text-lg font-medium text-f1-foreground", children: e }),
          t && /* @__PURE__ */ i("p", { className: "max-w-96 text-center text-f1-foreground-secondary", children: t })
        ] }),
        a && /* @__PURE__ */ i("div", { className: "flex w-full flex-col items-center justify-center gap-2 sm:w-fit sm:flex-row sm:gap-3 [&>div]:w-full", children: a.map((s) => s.type === "upsell" ? /* @__PURE__ */ i(
          Ih,
          {
            label: s.label,
            onRequest: () => Promise.resolve(s.onClick()),
            errorMessage: s.errorMessage,
            successMessage: s.successMessage,
            loadingState: s.loadingState,
            nextSteps: s.nextSteps,
            closeLabel: s.closeLabel
          },
          s.label
        ) : /* @__PURE__ */ i(
          ne,
          {
            label: s.label,
            variant: s.variant,
            onClick: s.onClick,
            icon: s.icon
          },
          s.label
        )) })
      ]
    }
  );
}
const Rh = Ge(kh), ea = ({
  value: e,
  delay: t
}) => {
  const [r, n] = M(!1);
  return K(() => {
    let a;
    return e ? a = setTimeout(() => {
      n(e);
    }, t) : n(!1), () => {
      a && clearTimeout(a);
    };
  }, [e, t]), r;
}, Eh = (e) => {
  if (!e)
    return [];
  const t = e();
  return (Array.isArray(t) ? t : [t]).filter(
    (r) => r !== void 0
  );
}, Lh = 2, Fh = (e) => "items" in e, jh = (e) => "label" in e && !("items" in e), Lo = (e) => e.every(Fh) ? e : e.every(jh) ? [
  {
    items: e
  }
] : e.map((t) => ({
  items: t
})), Ph = (e) => e ? typeof e == "function" ? Lo(e() || []) : "actions" in e ? Lo(e.actions() || []) : [] : [], qh = (e) => e.map((t) => ({
  ...t,
  items: t.items.filter(
    (r) => r.enabled === void 0 || r.enabled
  )
}));
function Mh(e) {
  return "items" in e;
}
const zh = (e) => Array.isArray(e) ? e.every((t) => Mh(t)) ? e : [
  {
    items: e
  }
] : [e], Fo = ({ message: e }) => /* @__PURE__ */ O("div", { className: "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2", children: [
  /* @__PURE__ */ i(ha, { type: "warning", size: "sm" }),
  /* @__PURE__ */ i("p", { className: "flex-1 font-medium text-f1-foreground-warning", children: e })
] }), Hh = ({
  isOpen: e,
  secondaryActions: t = [],
  selectedNumber: r = void 0,
  onUnselect: n,
  warningMessage: a,
  allPagesSelection: o = !1,
  isAllItemsSelected: s = !1,
  totalItems: l,
  ...c
}) => {
  const { t: d, ...f } = ae(), u = r === 1 ? f.status.selected.singular : f.status.selected.plural, h = o && s && l !== void 0, m = t.slice(0, 2), g = t.slice(2).map((x) => ({
    ...x,
    critical: x.critical || !1
  })), p = F(
    () => zh(c.primaryActions ?? []),
    [c.primaryActions]
  ), v = F(() => p.map((x) => ({
    ...x,
    items: x.items.map((S) => ({
      value: S.label,
      label: S.label,
      icon: S.icon,
      critical: S.critical,
      description: S.description,
      disabled: S.disabled
    }))
  })), [p]), y = F(() => p.length === 1 && p[0].items.length === 1 ? p[0].items[0] : null, [p]), b = oe(
    (x) => p.flatMap((S) => S.items).find((S) => S.label === x),
    [p]
  );
  return /* @__PURE__ */ i(Ne, { children: e && /* @__PURE__ */ O(
    ee.div,
    {
      initial: { opacity: 0, y: 32, filter: "blur(6px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: 32, filter: "blur(6px)" },
      transition: { ease: [0.175, 0.885, 0.32, 1.275], duration: 0.3 },
      className: I(
        "fixed bottom-2 left-2 right-2 z-50 flex h-fit w-[calc(100%-16px)] flex-col gap-2 rounded-xl bg-f1-background-inverse p-2 text-f1-foreground-inverse shadow-lg backdrop-blur-sm dark:bg-f1-background-inverse-secondary sm:bottom-5 sm:mx-auto sm:h-12 sm:w-max sm:flex-row sm:gap-8",
        a && "sm:py-1 sm:pr-1"
      ),
      children: [
        r && /* @__PURE__ */ O("div", { className: "dark flex h-8 w-full items-center justify-between gap-3 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0", children: [
          h ? /* @__PURE__ */ i("span", { className: "font-medium tabular-nums", children: d("status.selected.allItemsSelected", {
            total: l ?? 0
          }) }) : /* @__PURE__ */ O("span", { className: "flex items-center gap-1 font-medium tabular-nums", children: [
            /* @__PURE__ */ i(
              Sc,
              {
                value: r,
                spinTiming: {
                  duration: 200,
                  easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                }
              }
            ),
            /* @__PURE__ */ i(It, { className: "text-f1-foreground", children: u })
          ] }),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "outline",
              label: f.actions.unselect,
              onClick: n,
              size: "sm"
            }
          )
        ] }),
        /* @__PURE__ */ O("div", { className: "dark", children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: I(
                "flex flex-col items-center gap-2 sm:hidden",
                !a && "[&_button]:w-full [&_div]:w-full"
              ),
              children: a ? /* @__PURE__ */ i(Fo, { message: a }) : /* @__PURE__ */ O(Ft, { children: [
                /* @__PURE__ */ i(_c, { items: t }),
                y ? /* @__PURE__ */ i(
                  ne,
                  {
                    label: y.label,
                    icon: y.icon,
                    onClick: y.onClick,
                    disabled: y.disabled
                  }
                ) : /* @__PURE__ */ i(
                  Me,
                  {
                    items: v,
                    onClick: (x) => {
                      b(x)?.onClick?.();
                    }
                  }
                )
              ] }, "mobile-actions")
            }
          ),
          /* @__PURE__ */ i("div", { className: "hidden items-center gap-2 sm:flex", children: a ? /* @__PURE__ */ i(Fo, { message: a }) : /* @__PURE__ */ O(Ft, { children: [
            g.length > 0 && /* @__PURE__ */ i(ia, { items: g }),
            m.slice().reverse().map((x) => /* @__PURE__ */ i(
              ne,
              {
                variant: x.critical ? "critical" : "outline",
                label: x.label,
                icon: x.icon,
                onClick: x.onClick,
                disabled: x.disabled
              },
              x.label
            )),
            y ? /* @__PURE__ */ i(
              ne,
              {
                label: y.label,
                icon: y.icon,
                onClick: y.onClick,
                disabled: y.disabled
              }
            ) : /* @__PURE__ */ i(te, { children: /* @__PURE__ */ i(
              Me,
              {
                items: v,
                onClick: (x) => {
                  b(x)?.onClick?.();
                }
              }
            ) })
          ] }, "desktop-actions") })
        ] })
      ]
    }
  ) });
}, $h = ({
  primaryActions: e,
  primaryActionsLabel: t,
  secondaryActions: r,
  otherActions: n
}) => {
  const a = (Array.isArray(e) ? e : [e]).filter((f) => f !== void 0), o = r || [], s = F(
    () => (n || []).map((f) => f.items).reduce((f, u) => (f.length > 0 && f.push({ type: "separator" }), f.push(...u), f), []),
    [n]
  ), [l, c] = M(!1), d = a.some(
    (f) => f.description !== void 0
  );
  return a.length === 0 && o.length === 0 && s.length === 0 ? null : /* @__PURE__ */ O("div", { className: "flex flex-row-reverse items-center gap-2", children: [
    d ? /* @__PURE__ */ i(
      Me,
      {
        mode: "dropdown",
        size: "md",
        trigger: t,
        items: a.map((f, u) => ({
          label: f.label,
          icon: f.icon,
          description: f.description,
          value: u.toString()
        })),
        onClick: (f) => {
          a[Number(f)]?.onClick?.();
        }
      }
    ) : a.length === 1 ? /* @__PURE__ */ i(
      ne,
      {
        size: "md",
        onClick: a[0].onClick,
        icon: a[0].icon,
        variant: "default",
        label: a[0].label,
        loading: a[0].loading,
        disabled: a[0].disabled
      }
    ) : a.length > 1 && /* @__PURE__ */ i(
      Me,
      {
        size: "md",
        items: a.map((f, u) => ({
          label: f.label,
          icon: f.icon,
          value: u.toString()
        })),
        onClick: (f) => {
          a[Number(f)]?.onClick?.();
        }
      }
    ),
    o?.map((f) => /* @__PURE__ */ i(
      ne,
      {
        size: "md",
        onClick: f.onClick,
        icon: f.icon,
        variant: "outline",
        hideLabel: f.hideLabelWhenExpanded,
        label: f.label,
        disabled: f.disabled,
        loading: f.loading
      },
      f.label
    )),
    s.length > 0 && /* @__PURE__ */ i(
      ia,
      {
        items: s,
        align: "end",
        open: l,
        onOpenChange: c,
        children: /* @__PURE__ */ i(
          vt,
          {
            variant: "outline",
            icon: ps,
            label: "Actions",
            hideLabel: !0,
            pressed: l
          }
        )
      }
    )
  ] });
}, tl = ce(
  ({
    value: e,
    compareToValue: t,
    onDateChange: r,
    disabled: n,
    error: a,
    className: o,
    highlighted: s,
    onClick: l,
    navigation: c,
    granularity: d,
    hideGoToCurrent: f,
    ...u
  }, h) => {
    const m = ae(), g = F(() => {
      if (!e || !e.value)
        return [m.date.selectDate];
      const _ = d || ft[e.granularity];
      return [
        e.value,
        Array.isArray(t) ? t[0] : t
      ].filter((A) => A !== void 0).sort((A, E) => A?.from.getTime() - E?.from.getTime()).map((A) => _.toString(A, m, "long"));
    }, [e, m, t, d]), p = F(() => Object.values(g).join(" ⸱ "), [g]), v = (_) => {
      _ && r?.(_);
    }, y = F(() => {
      if (u.minDate)
        return d?.toRange(u.minDate)?.from;
    }, [u.minDate, d]), b = F(() => {
      if (u.maxDate)
        return d?.toRange(u.maxDate)?.to;
    }, [u.maxDate, d]), [x, S] = M(null);
    K(() => {
      S(d?.toRange(/* @__PURE__ */ new Date()) ?? null);
      const _ = () => {
        const A = d?.toRange(/* @__PURE__ */ new Date()) ?? null;
        A && Nc(A.from, y) && Dc(A.to || A.from, b) ? S(A) : S(null);
      }, T = setInterval(() => {
        _();
      }, 6e4);
      return _(), () => clearInterval(T);
    }, [d, y, b]);
    const N = e?.value ? d?.getPrevNext(e?.value, {
      min: y,
      max: b
    }) : void 0, w = () => {
      const _ = d?.toRange(/* @__PURE__ */ new Date());
      _ && r?.(_);
    };
    return /* @__PURE__ */ O(
      "div",
      {
        ref: h,
        className: I(
          "inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover",
          "[%>*] py-1",
          Ee("focus:ring-f1-border-hover"),
          n && "cursor-not-allowed bg-f1-background-secondary opacity-50",
          a && "ring-f1-border-critical-bold",
          o
        ),
        onClick: (_) => _.stopPropagation(),
        children: [
          /* @__PURE__ */ O(
            "div",
            {
              className: I(
                "flex flex-1 gap-1",
                c ? "justify-between" : "justify-center"
              ),
              children: [
                c && /* @__PURE__ */ i(
                  ne,
                  {
                    size: "sm",
                    variant: "ghost",
                    icon: na,
                    label: "Previous",
                    hideLabel: !0,
                    disabled: !N?.prev,
                    onClick: () => v(N?.prev ?? !1)
                  }
                ),
                /* @__PURE__ */ i(
                  vt,
                  {
                    fontSize: "md",
                    size: "sm",
                    variant: "ghost",
                    label: p,
                    onClick: l,
                    disabled: n,
                    style: { minWidth: d?.toStringMaxWidth() },
                    className: I(s && "bg-f1-background-secondary-hover")
                  }
                ),
                c && /* @__PURE__ */ i(
                  ne,
                  {
                    variant: "ghost",
                    icon: gs,
                    label: "Next",
                    hideLabel: !0,
                    size: "sm",
                    fontSize: "md",
                    disabled: !N?.next,
                    onClick: () => v(N?.next ?? !1)
                  }
                )
              ]
            }
          ),
          !f && x && /* @__PURE__ */ i("div", { className: "border-l-solid flex-shrink-0 border-[#f00]", children: /* @__PURE__ */ i(
            ne,
            {
              fontSize: "md",
              size: "sm",
              variant: "ghost",
              label: m.date.granularities[e?.granularity ?? "day"]?.currentDate,
              onClick: w
            }
          ) })
        ]
      }
    );
  }
);
tl.displayName = "DatePickerTrigger";
function Gh({
  onSelect: e,
  defaultValue: t,
  presets: r = [],
  granularities: n = ["day"],
  hideNavigation: a = !1,
  hideGoToCurrent: o = !1,
  compareTo: s,
  defaultCompareTo: l,
  onCompareToChange: c,
  value: d,
  dataTestId: f,
  ...u
}) {
  const [h, m] = M(
    t ?? d
  );
  K(() => {
    Xe(d, h) || m(d || t);
  }, [d, t]);
  const [g, p] = M(), [v, y] = M(!1), b = cs(), x = u.weekStartsOn ?? b.date?.weekStartsOn ?? ds.Monday, S = F(() => {
    const T = h?.granularity ?? "day";
    return Un(x)[T];
  }, [h?.granularity, x]), N = (T) => {
    m(T), e?.(T);
  }, w = (T) => {
    p(T), c?.(T);
  }, _ = (T) => {
    N({
      value: S.toRange(T),
      granularity: h?.granularity ?? "day"
    });
  };
  return /* @__PURE__ */ i(Tc, { dataTestId: f, children: /* @__PURE__ */ i(
    qs,
    {
      onSelect: N,
      value: h,
      defaultValue: t,
      presets: r,
      granularities: n,
      minDate: u.minDate,
      maxDate: u.maxDate,
      open: v,
      onOpenChange: y,
      compareTo: s,
      defaultCompareTo: l,
      onCompareToChange: w,
      weekStartsOn: x,
      asChild: !0,
      children: /* @__PURE__ */ i(
        tl,
        {
          value: h,
          compareToValue: g,
          highlighted: v,
          navigation: !a,
          onDateChange: _,
          granularity: S,
          minDate: u.minDate,
          maxDate: u.maxDate,
          disabled: u.disabled,
          hideGoToCurrent: o,
          onClick: () => y(!0)
        }
      )
    }
  ) });
}
const Bh = Gh;
function Vh({
  filter: e,
  value: t,
  onChange: r
}) {
  const n = ae(), a = {
    granularity: "day",
    ...e
  }, o = Array.isArray(a.granularity) ? a.granularity : [a.granularity], s = Ac(
    t.granularity || o[0]
  );
  return /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i(
    Bh,
    {
      onSelect: (c) => {
        !c || !c.value || r({
          value: c.value,
          granularity: c.granularity,
          valueString: s.toString(c.value, n)
        });
      },
      defaultValue: t,
      granularities: o,
      minDate: a.min,
      maxDate: a.max,
      presets: a.presets,
      hideGoToCurrent: a.hideGoToCurrent
    }
  ) });
}
const Kh = (e) => "date" in e, Wh = {
  valueConverter: function(e, t, r) {
    const n = Array.isArray(t.granularity) ? t.granularity : [t.granularity], a = t.defaultGranularity || n[0] || "day";
    if (e || (e = /* @__PURE__ */ new Date()), Kh(e))
      return e;
    const o = ft[a];
    return {
      value: o.toRange(e),
      valueString: o.toString(e, r),
      granularity: a
    };
  },
  render: (e) => /* @__PURE__ */ i(Vh, { ...e })
}, rl = {
  "date-navigator": Wh
}, jo = ({
  navigationFilters: e,
  currentNavigationFilters: t,
  onChangeNavigationFilters: r
}) => /* @__PURE__ */ i(te, { children: e && Object.entries(e).map(([n, a]) => {
  const o = rl[a.type];
  return /* @__PURE__ */ i(ca.Fragment, { children: o.render({
    filter: a,
    value: t[n],
    onChange: (s) => {
      r({
        ...t,
        [n]: s
      });
    }
  }) }, n);
}) }), Po = ({ loading: e }) => e ? /* @__PURE__ */ i(fe, { icon: kc, className: "animate-spin" }) : /* @__PURE__ */ i(fe, { icon: Rc, className: "text" }), Uh = ({ value: e, onChange: t, loading: r = !1 }) => {
  const [n, a] = M(!1), o = _d(), s = V(null), l = V(null), c = ae(), d = () => {
    t(void 0), a(!1), l?.current && (l.current.value = "");
  };
  Oc(s, () => {
    n && a(!1);
  });
  const f = () => {
    n || (a(!0), setTimeout(() => {
      l.current?.focus();
    }, 0));
  }, u = (h) => {
    n ? h.key === "Escape" && (h.preventDefault(), d(), a(!1)) : (h.key === "Enter" || h.key === " ") && (h.preventDefault(), f());
  };
  return /* @__PURE__ */ i(Ic, { id: o, children: /* @__PURE__ */ i(
    Td,
    {
      transition: { duration: 0.2, ease: [0.175, 0.885, 0.32, 1.05] },
      children: /* @__PURE__ */ i(Ne, { children: /* @__PURE__ */ i(
        ee.div,
        {
          layout: !0,
          ref: s,
          className: I(
            "relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center",
            (n || e) && "w-[180px]"
          ),
          children: n ? /* @__PURE__ */ i(
            ee.div,
            {
              layout: !0,
              layoutId: "search-container",
              className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
              style: { borderRadius: 12 },
              children: /* @__PURE__ */ O(
                ee.div,
                {
                  layout: !0,
                  className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
                  style: { borderRadius: 11 },
                  children: [
                    /* @__PURE__ */ i(
                      ee.div,
                      {
                        className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
                        layoutId: "search-icon",
                        children: /* @__PURE__ */ i(Po, { loading: r }, "loading")
                      }
                    ),
                    /* @__PURE__ */ i(
                      ee.input,
                      {
                        layout: !0,
                        ref: l,
                        type: "text",
                        value: e,
                        placeholder: c.actions.search,
                        onChange: (h) => t(h.target.value),
                        className: "h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        onKeyDown: u
                      }
                    ),
                    /* @__PURE__ */ i(
                      ee.div,
                      {
                        tabIndex: 0,
                        className: I(
                          "flex h-5 w-5 items-center justify-center rounded-full",
                          Ee()
                        ),
                        onClick: (h) => {
                          h.stopPropagation(), d();
                        },
                        onKeyDown: (h) => {
                          (h.key === "Enter" || h.key === " ") && d();
                        },
                        role: "button",
                        "aria-label": c.actions.clear,
                        children: /* @__PURE__ */ i(fe, { icon: Aa, size: "md", color: "secondary" })
                      }
                    )
                  ]
                }
              )
            }
          ) : /* @__PURE__ */ i(
            ee.div,
            {
              role: "button",
              "aria-label": c.actions.search,
              tabIndex: 0,
              layout: !0,
              layoutId: "search-container",
              className: I(
                "relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover",
                Ee()
              ),
              onClick: f,
              onKeyDown: u,
              style: { borderRadius: 10 },
              children: /* @__PURE__ */ O(
                ee.div,
                {
                  layout: !0,
                  className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
                  style: { borderRadius: 9 },
                  children: [
                    /* @__PURE__ */ i(
                      ee.div,
                      {
                        className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
                        layoutId: "search-icon",
                        children: /* @__PURE__ */ i(Po, { loading: r })
                      }
                    ),
                    e && /* @__PURE__ */ O("div", { className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5", children: [
                      /* @__PURE__ */ i(
                        ee.div,
                        {
                          layout: !0,
                          className: "line-clamp-1 overflow-hidden py-2 pl-7",
                          children: e
                        }
                      ),
                      /* @__PURE__ */ i(
                        ee.div,
                        {
                          tabIndex: 0,
                          className: I(
                            "flex h-5 w-5 items-center justify-center rounded-full",
                            Ee()
                          ),
                          onClick: (h) => {
                            h.stopPropagation(), d();
                          },
                          onKeyDown: (h) => {
                            (h.key === "Enter" || h.key === " ") && d();
                          },
                          role: "button",
                          "aria-label": c.actions.clear,
                          children: /* @__PURE__ */ i(
                            fe,
                            {
                              icon: Aa,
                              size: "md",
                              color: "secondary"
                            }
                          )
                        }
                      )
                    ] })
                  ]
                }
              )
            }
          )
        }
      ) })
    }
  ) });
}, qo = ({
  isReady: e,
  totalItemSummaryResult: t
}) => /* @__PURE__ */ i("div", { className: "flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold", children: e ? /* @__PURE__ */ O("div", { className: "flex h-5 items-center", children: [
  " ",
  t
] }) : /* @__PURE__ */ i(ue, { className: "h-5 w-24" }) }), nl = {
  get: () => ({}),
  set: () => Promise.resolve()
}, al = Le(nl), cm = ({
  children: e,
  handler: t
}) => /* @__PURE__ */ i(al.Provider, { value: t ?? nl, children: e }), Yh = () => {
  const e = Te(al);
  if (!e)
    throw new Error(
      "useDataCollectionStorage must be used within a DataCollectionStorageProvider"
    );
  return e;
}, Jh = [
  "filters",
  "navigationFilters",
  "sortings",
  "grouping",
  "visualization",
  "search",
  "visualizationFilters"
], Mo = ["*", "all"], Xh = (e) => {
  const t = /* @__PURE__ */ new Set();
  return e ? (e.some((r) => Mo.includes(r)) && Jh.forEach((r) => {
    t.add(r);
  }), e.filter((r) => !Mo.includes(r)).forEach((r) => {
    r.startsWith("!") ? t.delete(r.slice(1)) : t.add(r);
  }), Array.from(t)) : [];
}, Zh = (e) => {
  if (!e || typeof e != "string")
    return !1;
  const t = e.lastIndexOf("/");
  if (t === -1)
    return !1;
  const r = e.substring(0, t), n = e.substring(t + 1);
  return !(!r || r.trim() === "" || !n || !/^v[0-9]+$/.test(n));
}, Qh = (e, t, r, n) => {
  const [a, o] = M(!1), s = Yh();
  e && !Zh(e) && console.error(
    `Invalid storage key format: "${e}". Key must follow the format "name/version" where name can be a path (e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`
  );
  const l = F(
    // Settings is always included
    () => [...Xh(t), "settings"],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional
    [JSON.stringify(t)]
  ), c = F(() => !n && !!e, [n, e]);
  K(() => {
    if (!c) {
      o(!0);
      return;
    }
    s.get(e).then((u) => {
      Object.entries(r).forEach(
        ([h, m]) => {
          if (l.includes(
            h
          )) {
            const g = u[h];
            g !== void 0 && m.setValue(
              g
            );
          }
        }
      ), o(!0);
    });
  }, [e, c]);
  const d = F(
    () => JSON.stringify(
      Object.entries(r).map(
        ([u, h]) => [
          u,
          h.value
        ]
      )
    ),
    [r]
  ), f = Ec(
    (u) => {
      if (!c || !a)
        return;
      const h = Object.fromEntries(
        Object.entries(u).map(([m, g]) => l.includes(m) ? [m, g.value] : [m, void 0]).filter(([m, g]) => g !== void 0)
      );
      if (Object.keys(h).length === 0) {
        s.set(e, {});
        return;
      }
      s.set(e, h);
    },
    200
  );
  return K(() => {
    f(r);
  }, [
    e,
    l,
    s,
    a,
    d
  ]), {
    storageReady: a
  };
}, ep = (e) => e.some(
  (t) => t.filters !== void 0 || t.presets !== void 0
), Ye = (e) => String(e), Bn = (e, t, r) => {
  const n = t[e];
  if (n?.presets !== void 0) {
    const o = n.presets[0];
    return o ? o.filter : {};
  }
  const a = r?.[0];
  return a ? a.filter : {};
}, tp = ({
  sourceFilters: e,
  sourcePresets: t,
  sourceCurrentFilters: r,
  sourceSetCurrentFilters: n,
  visualizations: a,
  currentVisualization: o
}) => {
  const s = F(
    () => ep(a),
    [a]
  ), [l, c] = M({}), d = V(o), f = V(!1), u = V(!1), h = V(null), m = V(r);
  if (s && u.current) {
    const x = Ye(d.current), S = Ye(o);
    if (x !== S) {
      const N = l[S];
      h.current = N ?? Bn(
        o,
        a,
        t
      );
    } else r !== m.current && (h.current = null);
  } else
    h.current = null;
  m.current = r, Ze(() => {
    if (!s || !f.current || u.current) return;
    const x = Ye(o), S = l[x];
    n(
      S ?? Bn(
        o,
        a,
        t
      )
    ), u.current = !0;
  }, [s, o, l]), Ze(() => {
    if (!s) return;
    if (f.current && !u.current) {
      d.current = o;
      return;
    }
    const x = Ye(d.current), S = Ye(o);
    if (x !== S) {
      c((w) => ({
        ...w,
        [x]: r
      }));
      const N = l[S];
      n(
        N ?? Bn(
          o,
          a,
          t
        )
      );
    }
    d.current = o;
  }, [o, s]);
  const g = F(() => {
    if (!s) return e;
    const x = a[o];
    return x?.filters ? x.filters : e;
  }, [s, e, a, o]), p = F(() => {
    if (!s) return t;
    const S = a[o]?.presets;
    if (S)
      return S;
    const N = g ? new Set(Object.keys(g)) : void 0;
    if (N && t) {
      const w = t.filter((_) => Object.keys(_.filter).every((A) => N.has(A)));
      return w.length > 0 ? w : void 0;
    }
    return t;
  }, [
    s,
    t,
    a,
    o,
    g
  ]), v = F(() => {
    if (!s) return {};
    const x = Ye(o);
    return {
      ...l,
      [x]: r
    };
  }, [
    s,
    l,
    o,
    r
  ]), y = oe(
    (x) => {
      f.current || (f.current = !0, c(x));
    },
    []
  );
  if (!s)
    return {
      effectiveFilters: e,
      effectivePresets: t,
      currentFilters: r,
      setCurrentFilters: n,
      allVisualizationFilters: {},
      setAllVisualizationFilters: () => {
      },
      hasPerVisualizationFilters: !1
    };
  const b = h.current ?? r;
  return {
    effectiveFilters: g,
    effectivePresets: p,
    currentFilters: b,
    setCurrentFilters: n,
    allVisualizationFilters: v,
    setAllVisualizationFilters: y,
    hasPerVisualizationFilters: !0
  };
}, rp = (e = {}, t) => {
  const r = ae(), n = {
    "no-data": {
      emoji: "📄",
      title: r.collections.emptyStates.noData.title,
      description: r.collections.emptyStates.noData.description
    },
    "no-results": {
      emoji: "🔍",
      title: r.collections.emptyStates.noResults.title,
      description: r.collections.emptyStates.noResults.description,
      actions: [
        {
          label: r.collections.emptyStates.noResults.clearFilters,
          onClick: t.clearFilters
        }
      ]
    },
    error: {
      title: r.collections.emptyStates.error.title,
      description: r.collections.emptyStates.error.description,
      actions: [
        {
          label: r.collections.emptyStates.error.retry,
          onClick: t.retry
        }
      ]
    }
  }, [a, o] = M(void 0);
  return { emptyState: a, setEmptyStateType: (l, c) => {
    if (!l) {
      o(void 0);
      return;
    }
    const d = e[l] ?? {}, f = n[l], u = {
      title: d.title ?? f.title,
      description: d.description ?? (l === "error" && c ? c : f.description),
      actions: d.actions ?? f.actions
    };
    o(l === "error" ? {
      ...u,
      variant: "critical"
    } : {
      ...u,
      emoji: d.emoji ?? f.emoji
    });
  } };
};
function np(e, { filters: t, onError: r } = {}) {
  const [n, a] = M(void 0);
  return {
    ...Lc(
      e,
      {
        filters: t,
        onError: r,
        fetchParamsProvider: (s) => ({
          ...s,
          navigationFilters: e.currentNavigationFilters
        }),
        onResponse: (s) => {
          const l = "summaries" in s ? s.summaries : void 0;
          a(l);
        }
      },
      [JSON.stringify(e.currentNavigationFilters)]
    ),
    summaries: n
  };
}
function Wt(e, t = {}) {
  return {
    ...np(e, t)
  };
}
const il = ({ className: e, ...t }) => /* @__PURE__ */ i(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: I("flex w-full justify-center", e),
    ...t
  }
);
il.displayName = "Pagination";
const ol = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  "div",
  {
    ref: r,
    className: I("flex list-none flex-row items-center gap-1", e),
    ...t
  }
));
ol.displayName = "PaginationContent";
const Tt = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i("div", { ref: r, className: I("", e), ...t }));
Tt.displayName = "PaginationItem";
const Ut = ({
  className: e,
  isActive: t,
  ...r
}) => /* @__PURE__ */ i(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: I(
      "flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover",
      t && "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover",
      Ee(),
      e
    ),
    ...r
  }
);
Ut.displayName = "PaginationLink";
const sl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i(
  Ut,
  {
    role: "button",
    "aria-label": "Go to previous page",
    className: I(
      "border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i(fe, { icon: na })
  }
);
sl.displayName = "PaginationPrevious";
const ll = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i(
  Ut,
  {
    role: "button",
    "aria-label": "Go to next page",
    className: I(
      "border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background",
      e
    ),
    ...t,
    children: /* @__PURE__ */ i(fe, { icon: gs })
  }
);
ll.displayName = "PaginationNext";
const cl = ({
  className: e,
  ...t
}) => /* @__PURE__ */ i(
  "span",
  {
    role: "presentation",
    "aria-hidden": !0,
    className: I("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: /* @__PURE__ */ i(fe, { icon: Fc })
  }
);
cl.displayName = "PaginationEllipsis";
function ap({
  totalPages: e,
  currentPage: t = 1,
  onPageChange: r,
  showControls: n = !0,
  ariaLabel: a = "Page navigation",
  visibleRange: o = 3,
  hasNextPage: s = !0,
  disabled: l = !1
}) {
  const c = e === 0, d = oe(
    (u) => {
      r && (c || u >= 1 && u <= e) && r(u);
    },
    [r, e, c]
  ), f = F(() => {
    if (c) return [];
    const u = [];
    if (e <= 5)
      return Array.from({ length: e }, (p, v) => v + 1);
    u.push(1);
    const h = Math.floor(o / 2);
    let m = t - h, g = t + h;
    return t <= h + 2 ? (m = 2, g = m + o - 1, u.push(
      ...Array.from(
        { length: g - m + 1 },
        (p, v) => v + m
      )
    ), u.push("...")) : t >= e - h - 1 ? (m = e - o - 1, g = e - 1, u.push("..."), u.push(
      ...Array.from(
        { length: g - m + 1 },
        (p, v) => v + m
      )
    )) : (u.push("..."), u.push(
      ...Array.from({ length: o }, (p, v) => v + m)
    ), u.push("...")), u.push(e), u;
  }, [t, e, o, c]);
  return /* @__PURE__ */ i(il, { children: /* @__PURE__ */ O(ol, { role: "navigation", "aria-label": a, children: [
    n && /* @__PURE__ */ i(Tt, { children: /* @__PURE__ */ i(
      sl,
      {
        "aria-disabled": t === 1 || l,
        tabIndex: t === 1 ? -1 : 0,
        className: I(
          !c && "mr-1",
          t === 1 || l ? "pointer-events-none opacity-50" : ""
        ),
        onClick: () => d(t - 1),
        onKeyDown: (u) => {
          u.key === "Enter" && d(t - 1);
        }
      }
    ) }),
    !c && f.map((u, h) => /* @__PURE__ */ i(
      Tt,
      {
        className: I(
          "hidden sm:flex",
          u === t && "flex",
          l && "pointer-events-none opacity-50"
        ),
        children: u === "..." ? /* @__PURE__ */ i(cl, {}) : /* @__PURE__ */ i(
          Ut,
          {
            "aria-current": u === t ? "page" : void 0,
            isActive: u === t,
            onClick: () => d(u),
            onKeyDown: (m) => {
              m.key === "Enter" && d(u);
            },
            tabIndex: 0,
            children: u
          }
        )
      },
      h
    )),
    n && /* @__PURE__ */ i(Tt, { children: /* @__PURE__ */ i(
      ll,
      {
        "aria-disabled": (c ? !s : t === e) || l,
        tabIndex: c ? s ? 0 : -1 : t === e ? -1 : 0,
        className: I(
          !c && "ml-1",
          !c && t === e || !s && c || l ? "pointer-events-none opacity-50" : ""
        ),
        onClick: () => d(t + 1),
        onKeyDown: (u) => {
          u.key === "Enter" && d(t + 1);
        }
      }
    ) })
  ] }) });
}
const ip = Ge(
  aa("OnePagination", ap)
), va = ({
  paginationInfo: e,
  setPage: t,
  className: r
}) => {
  const n = ae();
  return !jc(e) || e.pagesCount <= 1 ? null : /* @__PURE__ */ O(
    "div",
    {
      className: I("flex w-full items-center justify-between px-4", r),
      children: [
        /* @__PURE__ */ i("span", { className: "shrink-0 text-f1-foreground-secondary", children: e.total > 0 && `${(e.currentPage - 1) * e.perPage + 1}-${Math.min(
          e.currentPage * e.perPage,
          e.total
        )} ${n.collections.visualizations.pagination.of} ${e.total}` }),
        /* @__PURE__ */ i("div", { className: "flex items-center", children: /* @__PURE__ */ i(
          ip,
          {
            totalPages: e.pagesCount,
            currentPage: e.currentPage,
            onPageChange: t
          }
        ) })
      ]
    }
  );
}, op = (e) => Math.ceil(e / 12) * 12, dl = ({
  children: e,
  tmpFullWidth: t
}) => /* @__PURE__ */ i("div", { className: I("@container", t ? "px-0" : "px-4"), children: /* @__PURE__ */ i(
  "div",
  {
    className: I(
      "grid grid-cols-1 gap-4",
      "@sm:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4"
    ),
    children: e
  }
) }), zo = ({
  source: e,
  items: t,
  selectedItems: r,
  handleSelectItemChange: n,
  cardProperties: a,
  title: o,
  description: s,
  avatar: l,
  image: c,
  imageFit: d,
  imageSize: f,
  imageAspectRatio: u,
  blurredBackground: h,
  compact: m,
  tmpFullWidth: g
}) => {
  function p(b, x) {
    return x.map((S) => {
      if (S.hide?.(b))
        return null;
      const N = S.render(b);
      if (N === void 0)
        return null;
      const w = v(N);
      return w ? w.type === "file" ? {
        property: w
      } : {
        icon: S.icon ?? Hc,
        tooltip: S.tooltip,
        property: w
      } : null;
    }).filter((S) => S !== null);
  }
  function v(b) {
    return typeof b == "string" ? { type: "text", value: b } : typeof b == "number" ? { type: "number", value: b } : y(b) ? b : null;
  }
  function y(b) {
    if (typeof b != "object" || b === null || !("type" in b))
      return !1;
    const x = b.type;
    return typeof x == "string" && x in $c;
  }
  return /* @__PURE__ */ i(dl, { tmpFullWidth: g, children: t.map((b, x) => {
    const S = e.selectable ? e.selectable(b) : void 0, N = e.itemUrl ? e.itemUrl(b) : void 0, w = e.itemOnClick ? e.itemOnClick(b) : void 0, _ = (e.itemActions ? e.itemActions(b) || [] : []).filter((D) => D.type !== "separator"), T = (_.filter(
      (D) => D.type === "other" || !D.type
    ) || []).map((D) => ({
      ...D,
      // Reconverts the type to DropdownItemObject
      type: "item"
    })), A = _.find((D) => D.type === "primary") || void 0, E = _.filter((D) => D.type === "secondary") || [], k = !!e.selectable && S !== void 0, C = p(b, a);
    return /* @__PURE__ */ i(
      ee.div,
      {
        layout: !0,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        custom: x,
        variants: ms({
          delay: 0.02,
          duration: 0.3
        }),
        children: /* @__PURE__ */ i(
          la,
          {
            title: o(b),
            selectable: k,
            description: s ? s(b) : void 0,
            avatar: l ? l(b) : void 0,
            image: c ? c(b) : void 0,
            imageFit: d,
            imageSize: f,
            imageAspectRatio: u,
            blurredBackground: h,
            selected: k && r.has(S),
            onSelect: (D) => n(b, D),
            secondaryActions: E,
            primaryAction: A,
            otherActions: T,
            onClick: w,
            link: N,
            compact: m || !1,
            metadata: C,
            fullHeight: !0
          },
          x
        )
      },
      x
    );
  }) });
}, sp = ({
  cardProperties: e,
  title: t,
  description: r,
  avatar: n,
  image: a,
  imageFit: o,
  imageSize: s,
  imageAspectRatio: l,
  blurredBackground: c,
  compact: d,
  source: f,
  onSelectItems: u,
  onLoadData: h,
  onLoadError: m,
  tmpFullWidth: g
}) => {
  const p = F(() => {
    if (f.dataAdapter.paginationType === "pages") {
      const C = f.dataAdapter.perPage, D = op(C ?? 24);
      return {
        ...f.dataAdapter,
        perPage: D
      };
    }
    return f.dataAdapter;
  }, [f.dataAdapter]), { data: v, paginationInfo: y, setPage: b, isInitialLoading: x } = Wt(
    {
      ...f,
      dataAdapter: p
    },
    {
      onError: (C) => {
        m(C);
      }
    }
  );
  K(() => {
    h({
      totalItems: y?.total || v.records.length,
      filters: f.currentFilters,
      search: f.currentSearch,
      isInitialLoading: x,
      data: v.records
    });
  }, [y?.total, v.records]);
  const {
    selectedItems: S,
    groupAllSelectedStatus: N,
    handleSelectItemChange: w,
    handleSelectGroupChange: _
  } = Mt({
    data: v,
    paginationInfo: y,
    source: f,
    onSelectItems: u,
    selectionMode: "multi",
    selectedState: f.defaultSelectedItems
  }), T = f.grouping?.collapsible, A = f.grouping?.defaultOpenGroups, { openGroups: E, setGroupOpen: k } = oa(
    v?.type === "grouped" ? v.groups : [],
    A
  );
  return /* @__PURE__ */ O("div", { className: "flex h-full min-h-0 flex-1 flex-col gap-4", children: [
    /* @__PURE__ */ i("div", { className: "overflow-auto", children: x ? /* @__PURE__ */ i(dl, { tmpFullWidth: g, children: Array.from({ length: 8 }).map((C, D) => /* @__PURE__ */ O(Pc, { children: [
      /* @__PURE__ */ i(qc, { children: /* @__PURE__ */ i(Mc, { "aria-label": "Loading card", children: /* @__PURE__ */ i(ue, { className: "h-4 w-3/4" }) }) }),
      /* @__PURE__ */ i(zc, { className: "space-y-2", children: e.map((q) => /* @__PURE__ */ O("div", { className: "space-y-1", children: [
        /* @__PURE__ */ i(ue, { className: "h-3 w-1/4" }),
        /* @__PURE__ */ i(ue, { className: "h-3 w-1/2" })
      ] }, String(q.label))) })
    ] }, D)) }) : /* @__PURE__ */ O(te, { children: [
      v?.type === "grouped" && v.groups.map((C) => /* @__PURE__ */ O(te, { children: [
        /* @__PURE__ */ i(
          sa,
          {
            label: C.label,
            itemCount: C.itemCount,
            onOpenChange: (D) => k(C.key, D),
            open: E[C.key],
            selectable: !!f.selectable,
            showOpenChange: T,
            select: N[C.key]?.checked ? !0 : N[C.key]?.indeterminate ? "indeterminate" : !1,
            onSelectChange: (D) => _(C, D),
            className: "px-4 pb-2 pt-4"
          }
        ),
        /* @__PURE__ */ i(Ne, { children: (!T || E[C.key]) && /* @__PURE__ */ i(
          zo,
          {
            source: f,
            items: C.records,
            selectedItems: S,
            handleSelectItemChange: w,
            title: t,
            cardProperties: e,
            description: r,
            avatar: n,
            image: a,
            imageFit: o,
            imageSize: s,
            imageAspectRatio: l,
            blurredBackground: c,
            compact: d,
            tmpFullWidth: g
          },
          C.key
        ) })
      ] })),
      v?.type === "flat" && /* @__PURE__ */ i(
        zo,
        {
          source: f,
          items: v.records,
          selectedItems: S,
          handleSelectItemChange: w,
          title: t,
          cardProperties: e,
          description: r,
          avatar: n,
          image: a,
          imageFit: o,
          imageSize: s,
          imageAspectRatio: l,
          blurredBackground: c,
          compact: d,
          tmpFullWidth: g
        }
      )
    ] }) }),
    /* @__PURE__ */ i(va, { paginationInfo: y, setPage: b })
  ] });
}, lp = () => {
  const e = {};
  for (const [t, r] of Object.entries(xt))
    r.settings.default && (e[t] = { ...r.settings.default });
  return e;
}, ul = Le({
  setSettings: () => {
  },
  settings: {
    // To avoid circular dependency initializating the settings (the value is provided in the provider)
    visualization: {}
  },
  setVisualizationSettings: () => {
  }
}), yt = () => {
  const e = Te(ul);
  if (!e)
    throw new Error(
      "useTableSettings must be used within a TableSettingsProvider"
    );
  return e;
}, cp = ({
  children: e
}) => {
  const [t, r] = M({
    visualization: lp()
  }), n = (a, o) => {
    r(typeof o == "function" ? (s) => ({
      ...s,
      visualization: {
        ...s.visualization,
        [a]: o(s.visualization[a])
      }
    }) : (s) => ({
      ...s,
      visualization: { ...s.visualization, [a]: o }
    }));
  };
  return /* @__PURE__ */ i(
    ul.Provider,
    {
      value: { settings: t, setSettings: r, setVisualizationSettings: n },
      children: e
    }
  );
}, ba = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i("div", { className: "relative w-full", children: /* @__PURE__ */ i(
  "table",
  {
    ref: r,
    className: I(
      "w-full caption-bottom border-spacing-0 border-0 border-none text-base",
      e
    ),
    ...t
  }
) }));
ba.displayName = "Table";
const fl = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  "thead",
  {
    ref: r,
    className: I(
      "relative min-h-10 [&_tr]:hover:bg-transparent",
      "before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']",
      e
    ),
    ...t
  }
));
fl.displayName = "TableHeader";
const hl = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i("tbody", { ref: r, className: I("border-0", e), ...t }));
hl.displayName = "TableBody";
const pl = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  "tfoot",
  {
    ref: r,
    className: I(
      "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
pl.displayName = "TableFooter";
const gl = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  "tr",
  {
    ref: r,
    className: I(
      "group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover",
      e
    ),
    ...t
  }
));
gl.displayName = "TableRow";
const ml = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  "th",
  {
    ref: r,
    className: I(
      "relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6",
      "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover",
      "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent",
      e
    ),
    ...t
  }
));
ml.displayName = "TableHead";
const vl = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  "td",
  {
    ref: r,
    className: I(
      "relative min-h-[48px] whitespace-nowrap p-2 align-top first:pl-6 last:pr-6",
      "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2",
      e
    ),
    ...t
  }
));
vl.displayName = "TableCell";
const dp = De.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ i(
  "caption",
  {
    ref: r,
    className: I("text-muted-foreground mt-4 text-sm", e),
    ...t
  }
));
dp.displayName = "TableCaption";
function bl({ children: e }) {
  return /* @__PURE__ */ i(hl, { children: e });
}
const up = {
  auto: void 0,
  fit: 1
}, fp = (e) => typeof e == "number", yl = (e) => fp(e) ? e : up[e], ya = Le(
  void 0
);
function wl() {
  const e = Te(ya);
  if (!e)
    throw new Error("useTable must be used within a TableProvider");
  return e;
}
const Yt = 32, qt = 24, At = 18, hp = "1px", qe = 8, xl = 32, Cl = 4, ta = 40, pp = ta - qt, gp = 24, mp = 16, wa = ({
  depth: e,
  padding: t = 0
}) => `${e * Yt + t}px`, vp = ({
  depth: e,
  isDetailedVariant: t
}) => wa({
  depth: e,
  padding: t ? -xl / 2 : -Cl
}), Sl = (e, t) => e && t > 0, _l = (e, t) => e && t, bp = (e, t) => e && t, Nl = (e, t) => e && t, yp = (e, t, r) => !t && Nl(e, r), wp = (e, t) => e && t?.nestedVariant === "detailed", xp = ({
  width: e,
  linkRef: t,
  firstCell: r,
  nestedRowProps: n,
  children: a,
  onClick: o
}) => {
  const s = _l(
    r,
    !!n?.rowWithChildren
  ), l = Sl(
    r,
    n?.depth ?? 0
  ), c = yp(
    r,
    !!n?.rowWithChildren,
    !!n?.tableWithChildren
  ), d = wp(r, n), f = n?.onLoadMoreChildren, u = n?.onAddRow, h = n?.depth ?? 0, m = l ? wa({
    depth: s ? h : h + 1
  }) : void 0, g = f || u;
  return /* @__PURE__ */ i(
    "div",
    {
      className: I(
        e !== "auto" && "overflow-hidden",
        "relative z-[1] h-full",
        s && "flex items-center gap-2"
      ),
      style: {
        marginLeft: g ? vp({
          depth: h + (d ? 0 : 1),
          isDetailedVariant: d
        }) : m
      },
      onClick: () => {
        g || (t.current?.click(), o?.());
      },
      children: u ? /* @__PURE__ */ i(
        "div",
        {
          className: I("pointer-events-auto flex items-center w-full h-full"),
          children: u.actions.length === 1 ? /* @__PURE__ */ i(
            ne,
            {
              variant: "outline",
              size: "sm",
              icon: u.actions[0].icon ?? vs,
              label: u.actions[0].label,
              onClick: (p) => {
                p.stopPropagation(), u.actions[0].onClick?.();
              },
              loading: u.actions[0].loading,
              disabled: u.actions[0].disabled
            }
          ) : u.actions.some((p) => p.description !== void 0) ? /* @__PURE__ */ i(
            Me,
            {
              mode: "dropdown",
              variant: "outline",
              size: "sm",
              trigger: u.label,
              disabled: u.actions.every((p) => p.disabled),
              loading: u.actions.some((p) => p.loading),
              items: u.actions.map((p, v) => ({
                value: v.toString(),
                label: p.label,
                icon: p.icon,
                description: p.description
              })),
              onClick: (p) => {
                u.actions[Number(p)]?.onClick?.();
              }
            }
          ) : /* @__PURE__ */ i(
            Me,
            {
              variant: "outline",
              size: "sm",
              disabled: u.actions.every((p) => p.disabled),
              loading: u.actions.some((p) => p.loading),
              items: u.actions.map((p, v) => ({
                value: v.toString(),
                label: p.label,
                icon: p.icon
              })),
              onClick: (p) => {
                u.actions[Number(p)]?.onClick?.();
              }
            }
          )
        }
      ) : f ? /* @__PURE__ */ i(te, { children: /* @__PURE__ */ i(
        "div",
        {
          className: I(
            "pointer-events-auto cursor-pointer flex items-center w-full h-full border-0 border-r-[1px] border-solid border-f1-border-secondary"
          ),
          children: /* @__PURE__ */ i(
            ne,
            {
              variant: "ghost",
              size: "md",
              icon: Yn,
              label: "See more",
              onClick: (p) => {
                p.stopPropagation(), f?.();
              }
            }
          )
        }
      ) }) : /* @__PURE__ */ O(te, { children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: I(
              "flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center",
              s && "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"
            ),
            style: {
              "--chevron-parent-size": `${qt}px`,
              "--chevron-size": `${At}px`,
              "--spacing-factor": `${Yt}px`
            },
            onClick: (p) => {
              s && (p.stopPropagation(), n?.onExpand?.());
            },
            children: s && (n?.expanded ? /* @__PURE__ */ i(
              Gc,
              {
                className: "pointer-events-none shrink-0",
                size: At
              }
            ) : /* @__PURE__ */ i(
              Bc,
              {
                className: "pointer-events-none shrink-0",
                size: At
              }
            ))
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            className: I(
              s && "min-w-0 w-full",
              c && "pl-[var(--spacing-factor)]",
              "relative"
            ),
            children: a
          }
        )
      ] })
    }
  );
}, Cp = (e, t, r) => {
  const { rowWithChildren: n, nestedVariant: a, onLoadMoreChildren: o, onAddRow: s } = t ?? {}, l = a === "detailed", c = o || s, d = c ? xl / 2 - qe : qt / 2 - qe, f = n && !c ? pp : l ? ta - 6 : ta, u = e !== 0 && `calc(${e}px - ${qt + qe}px )`, h = r === "editableTable" ? {
    "--horizontal-offset": `${d + (l ? 12 : 8)}px`,
    "--starting-y": "52px",
    ...u ? {
      "--line-height": `calc(${u} - ${l ? 12 : 0}px)`
    } : {}
  } : {}, m = r === "editableTable" ? gp : mp;
  return {
    "--line-left": `-${2 * At - (t?.selectableRow ? m : 0)}px`,
    "--line-width": hp,
    "--horizontal-offset": `${d}px`,
    "--horizontal-left": `calc(4px - ${t?.selectableRow ? m : 0}px)`,
    "--horizontal-height": `${Yt / 2}px`,
    "--connector-width": `${f}px`,
    ...u ? { "--line-height": u } : {},
    "--starting-y": "40px",
    ...h
  };
}, Sp = "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[var(--starting-y)] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", _p = "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]", Np = ({
  firstCell: e,
  nestedRowProps: t,
  fromVisualization: r
}) => {
  const n = Sl(
    e,
    t?.depth ?? 0
  ), a = bp(
    t?.expanded ?? !1,
    e
  ), o = t === void 0 || t?.nestedVariant === "basic", s = t?.nestedVariant === "detailed", l = o || t?.rowWithChildren, c = s && (t?.onLoadMoreChildren || t?.onAddRow), d = n ? wa({
    depth: t?.depth ?? 0,
    padding: 0
  }) : void 0, f = t?.connectorHeight ?? 0;
  return !a && !n && !t?.rowWithChildren ? null : /* @__PURE__ */ i(
    "div",
    {
      className: I(
        "absolute inset-0 h-full",
        t?.parentHasChildren && a && Sp,
        t?.parentHasChildren && n && l && !c && _p
      ),
      style: {
        marginLeft: d,
        ...Cp(
          f,
          t,
          r
        )
      }
    }
  );
}, Vn = "repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)", Ho = "before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", $o = {
  none: `bg-f1-background ${Ho} before:bg-f1-background group-hover:before:bg-f1-background-hover`,
  striped: `bg-f1-background bg-[${Vn}] [background-size:100%_100px] ${Ho} before:bg-[${Vn},_var(--f1-background)] before:[background-size:100%_100px,_100%_100%] group-hover:before:bg-[${Vn},_var(--f1-background-hover)] group-hover:before:[background-size:100%_100px,_100%_100%]`
};
function Se({
  children: e,
  href: t,
  onClick: r,
  width: n = "auto",
  firstCell: a = !1,
  sticky: o,
  colSpan: s,
  className: l,
  loading: c = !1,
  nestedRowProps: d,
  fromVisualization: f,
  referenceRowType: u = "none"
}) {
  const { isScrolled: h, isScrolledRight: m } = wl(), { actions: g } = ae(), p = o?.left !== void 0, v = o?.right !== void 0, y = p || v, b = o?.left, x = o?.right, S = yl(n), N = V(null), w = d?.depth ?? 0, _ = d?.nestedVariant === "detailed", T = Nl(
    a,
    !!d?.tableWithChildren
  ) && {
    marginLeft: `${(w + (_ ? 0 : 1)) * Yt}px`
  };
  return /* @__PURE__ */ O(
    vl,
    {
      colSpan: s,
      className: I(
        "h-full",
        a && "peer font-medium",
        y && h && $o[u],
        y && "sticky z-10",
        v && $o[u],
        t && "cursor-pointer",
        l
      ),
      style: {
        width: S,
        maxWidth: S,
        minWidth: S,
        left: b,
        right: x
      },
      children: [
        /* @__PURE__ */ i(Ne, { children: (p && h || v && m) && /* @__PURE__ */ i(
          ee.div,
          {
            className: I(
              "absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent",
              p && "-right-4 bg-gradient-to-r",
              v && "-left-4 bg-gradient-to-l"
            ),
            initial: { opacity: 0 },
            animate: { opacity: 0.1 },
            exit: { opacity: 0 }
          },
          "cell-shadow-gradient"
        ) }),
        a && d?.tableWithChildren && /* @__PURE__ */ i(
          Np,
          {
            firstCell: a,
            nestedRowProps: d,
            fromVisualization: f
          }
        ),
        c && /* @__PURE__ */ i(
          "div",
          {
            style: { ...T },
            className: I(
              "flex h-full items-center",
              f === "editableTable" ? "min-h-[32px]" : "min-h-[24px]"
            ),
            children: /* @__PURE__ */ i(ue, { className: "h-4 w-full" })
          }
        ),
        !c && /* @__PURE__ */ O(te, { children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: I(
                "[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]",
                "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]",
                "[&:has(a)]:relative [&:has(a)]:z-[1]",
                "pointer-events-none h-full items-start"
              ),
              children: _l(
                a,
                !!d?.rowWithChildren
              ) ? /* @__PURE__ */ i(
                xp,
                {
                  linkRef: N,
                  firstCell: a,
                  nestedRowProps: d,
                  children: e
                }
              ) : /* @__PURE__ */ i(
                "div",
                {
                  className: I(
                    n !== "auto" && "overflow-hidden",
                    "relative z-[1] h-full"
                  ),
                  style: {
                    ...T
                  },
                  onClick: () => {
                    N.current?.click(), r?.();
                  },
                  children: e
                }
              )
            }
          ),
          t && /* @__PURE__ */ i(
            Vc,
            {
              ref: N,
              href: t,
              className: "pointer-events-auto absolute inset-0 !z-0 block",
              tabIndex: a ? void 0 : -1,
              children: /* @__PURE__ */ i("span", { className: "sr-only", children: g.view })
            }
          ),
          r && /* @__PURE__ */ i(
            "button",
            {
              type: "button",
              onClick: (A) => {
                A.stopPropagation(), r();
              },
              "data-testid": "table-cell-action-button",
              className: "table-cell-action-button absolute inset-0 !z-0 block",
              tabIndex: a ? void 0 : -1,
              onKeyDown: (A) => {
                (A.key === "Enter" || A.key === " ") && (A.preventDefault(), r());
              },
              children: /* @__PURE__ */ i("span", { className: "sr-only", children: g.view })
            }
          )
        ] })
      ]
    }
  );
}
function ke({
  children: e,
  width: t = "auto",
  sortState: r = "none",
  onSortClick: n,
  info: a,
  infoIcon: o = Wc,
  sticky: s,
  hidden: l = !1,
  align: c = "left",
  className: d,
  colSpan: f
}) {
  const { isScrolled: u, isScrolledRight: h } = wl(), m = s?.left !== void 0, g = s?.right !== void 0, p = m || g, v = s?.left ?? 0, y = s?.right ?? 0, b = n || a, x = /* @__PURE__ */ i(te, { children: /* @__PURE__ */ O(
    "div",
    {
      className: I(
        "flex items-center whitespace-nowrap",
        b && "gap-1",
        c === "right" && "flex-row-reverse"
      ),
      children: [
        /* @__PURE__ */ i("div", { className: I("truncate", t !== "auto" && "overflow-hidden"), children: e }),
        b && /* @__PURE__ */ O("div", { className: "flex items-center", children: [
          a && /* @__PURE__ */ i("div", { className: "flex h-6 w-6 items-center justify-center text-f1-foreground-secondary", children: /* @__PURE__ */ i(Kc, { label: a, children: /* @__PURE__ */ i(
            "div",
            {
              className: I(
                "flex h-5 w-5 items-center justify-center rounded-xs",
                Ee()
              ),
              tabIndex: 0,
              children: /* @__PURE__ */ i(fe, { icon: o, size: "sm" })
            }
          ) }) }),
          n && /* @__PURE__ */ i(
            ee.button,
            {
              onClick: n,
              className: I(
                "relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100",
                Ee()
              ),
              "aria-label": "Sort",
              whileTap: { scale: 0.8 },
              transition: { duration: 0.1 },
              children: /* @__PURE__ */ O(Ne, { children: [
                /* @__PURE__ */ i(
                  ee.div,
                  {
                    className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
                    animate: {
                      rotate: r === "desc" ? 0 : 180,
                      x: r === "none" ? -3 : 0,
                      y: r === "none" ? -1 : 0,
                      scale: r === "none" ? 0.9 : 1
                    },
                    transition: {
                      duration: 0.2,
                      ease: [0.175, 0.885, 0.32, 1.275]
                    },
                    children: /* @__PURE__ */ i(fe, { icon: Yn, size: "xs" })
                  },
                  "sort-arrow"
                ),
                r === "none" && /* @__PURE__ */ i(
                  ee.div,
                  {
                    className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
                    initial: { opacity: 0, x: 0, y: 0, scale: 0.9 },
                    animate: { opacity: 1, x: 3, y: 1, scale: 0.9 },
                    exit: { opacity: 0, x: 0, y: 0, scale: 0.9 },
                    transition: {
                      duration: 0.2,
                      ease: [0.175, 0.885, 0.32, 1.275]
                    },
                    children: /* @__PURE__ */ i(fe, { icon: Yn, size: "xs" })
                  },
                  "sort-arrow-secondary"
                )
              ] })
            }
          )
        ] })
      ]
    }
  ) }), S = yl(t);
  return /* @__PURE__ */ O(
    ml,
    {
      className: I(
        "group h-11",
        "bg-f1-background",
        p && (u || h) && "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']",
        p && "sticky",
        l && "after:hidden",
        d
      ),
      tabIndex: s ? 0 : void 0,
      colSpan: f,
      style: {
        width: S,
        maxWidth: S,
        minWidth: S,
        left: v,
        right: y
      },
      role: l ? "presentation" : void 0,
      "aria-sort": n ? r === "asc" ? "ascending" : r === "desc" ? "descending" : "none" : void 0,
      children: [
        /* @__PURE__ */ i("div", { className: "absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary" }),
        /* @__PURE__ */ i(Ne, { children: (m && u || g && h) && /* @__PURE__ */ i(
          ee.div,
          {
            className: I(
              "absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent",
              m && "-right-4 bg-gradient-to-r",
              g && "-left-4 bg-gradient-to-l"
            ),
            initial: { opacity: 0 },
            animate: { opacity: 0.1 },
            exit: { opacity: 0 }
          },
          "shadow-gradient"
        ) }),
        !l && x
      ]
    }
  );
}
function Dl({ children: e, sticky: t = !1 }) {
  return /* @__PURE__ */ i(fl, { className: I(t && "sticky top-0 z-20"), children: e });
}
const _e = ce(
  ({ children: e, selected: t, className: r, sticky: n }, a) => /* @__PURE__ */ i(
    gl,
    {
      ref: a,
      className: I(
        t && "bg-f1-background-selected hover:bg-f1-background-selected",
        r,
        "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']",
        "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring",
        "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring",
        n && "hover:bg-f1-background-hover! sticky top-10 z-50 bg-f1-background"
      ),
      children: e
    }
  )
);
_e.displayName = "TableRow";
function Dp({ children: e, loading: t = !1 }) {
  const [r, n] = M(!1), [a, o] = M(!1), s = V(null);
  return K(() => {
    const l = s.current;
    if (!l) return;
    const c = () => {
      n(l.scrollLeft > 0), o(
        l.scrollWidth - l.scrollLeft - l.clientWidth > 0
      );
    };
    return c(), l.addEventListener("scroll", c), () => {
      l.removeEventListener("scroll", c);
    };
  }, []), /* @__PURE__ */ i(
    ya.Provider,
    {
      value: { isScrolled: r, setIsScrolled: n, isScrolledRight: a, setIsScrolledRight: o },
      children: /* @__PURE__ */ O("div", { ref: s, className: "relative h-full w-full overflow-auto", children: [
        /* @__PURE__ */ i(
          ba,
          {
            className: I(t && "select-none opacity-50 transition-opacity"),
            "aria-live": t ? "polite" : void 0,
            "aria-busy": t ? "true" : void 0,
            children: e
          }
        ),
        /* @__PURE__ */ i(Ne, { children: t && /* @__PURE__ */ i(
          ee.div,
          {
            className: "absolute inset-0 flex cursor-progress items-center justify-center",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: /* @__PURE__ */ i(kt, {})
          }
        ) })
      ] })
    }
  );
}
function Tp({ columns: e = 5 }) {
  return /* @__PURE__ */ i(
    ya.Provider,
    {
      value: {
        isScrolled: !1,
        setIsScrolled: () => {
        },
        isScrolledRight: !1,
        setIsScrolledRight: () => {
        }
      },
      children: /* @__PURE__ */ O(
        ba,
        {
          className: "cursor-progress",
          role: "presentation",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ i(Dl, { children: /* @__PURE__ */ i(_e, { children: Array.from({ length: e }).map((t, r) => /* @__PURE__ */ i(ke, { children: /* @__PURE__ */ i(ue, { className: "h-4 w-[80px]" }) }, `skeleton-header-${r}`)) }) }),
            /* @__PURE__ */ i(bl, { children: Array.from({ length: 5 }).map((t, r) => /* @__PURE__ */ i(_e, { children: Array.from({ length: e }).map((n, a) => /* @__PURE__ */ i(Se, { children: /* @__PURE__ */ i(ue, { className: "h-4 w-[80px]" }) }, `skeleton-cell-${r}-${a}`)) }, `skeleton-row-${r}`)) })
          ]
        }
      )
    }
  );
}
const Go = Uc(Dp, Tp);
function Ap({ children: e }) {
  return /* @__PURE__ */ i(
    pl,
    {
      className: I(
        "bg-f1-background-default sticky bottom-0 z-10 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"
      ),
      children: e
    }
  );
}
const xa = (e, t, r, n) => {
  const a = V(null);
  return K(() => {
    if (!Rt(e) || !e.hasMore)
      return;
    const o = a.current;
    if (!o) return;
    const s = new IntersectionObserver(
      (l) => {
        l[0].isIntersecting && !t && !r && n();
      },
      {
        root: null,
        // viewport
        rootMargin: "200px",
        threshold: 0.1
      }
    );
    return s.observe(o), () => {
      s.disconnect();
    };
  }, [e, r, n, t]), {
    loadingIndicatorRef: a
    // Ref to the loading indicator (that is also used as a trigger for the infinite scroll)
  };
}, Tl = Le(null);
function Op({
  addRowActions: e,
  addRowActionsLabel: t,
  addNestedRowActions: r,
  addNestedRowActionsLabel: n,
  children: a
}) {
  return /* @__PURE__ */ i(
    Tl.Provider,
    {
      value: {
        addRowActions: e,
        addRowActionsLabel: t,
        addNestedRowActions: r,
        addNestedRowActionsLabel: n
      },
      children: a
    }
  );
}
function Al() {
  return Te(Tl);
}
const Ip = (e) => e ? e.indeterminate || e.selectedCount !== void 0 && e.selectedCount > 0 && !e.checked ? "indeterminate" : e.checked : !1, Bo = (e) => (e || []).map((t) => t.type === "separator" ? t : {
  ...t,
  type: "item"
}), Ol = ({
  items: e,
  onOpenChange: t,
  align: r = "end",
  label: n = "Actions",
  className: a
}) => {
  const [o, s] = M(!1);
  return !e || e.length === 0 ? null : /* @__PURE__ */ i("div", { className: I("pointer-events-auto", a), children: /* @__PURE__ */ i(
    ia,
    {
      align: r,
      items: e.map((l) => l.type === "separator" || l.type === "label" ? l : {
        ...l,
        type: "item"
      }),
      open: o,
      onOpenChange: (l) => {
        s(l), t?.(l);
      },
      children: /* @__PURE__ */ i(
        vt,
        {
          icon: ps,
          label: n,
          hideLabel: !0,
          variant: "ghost",
          pressed: o
        }
      )
    }
  ) });
}, Il = ({
  items: e,
  onOpenChange: t,
  className: r
}) => /* @__PURE__ */ i("div", { className: I(r), children: /* @__PURE__ */ i(
  Ol,
  {
    label: "Mobile Actions",
    align: "end",
    items: e,
    onOpenChange: t
  }
) }), kl = ({
  children: e,
  dropDownOpen: t,
  className: r
}) => /* @__PURE__ */ i(
  "aside",
  {
    className: I(
      "absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex",
      "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]",
      "via-[#F5F6F8] via-60% dark:via-[#192231]",
      "to-transparent to-100%",
      t ? "opacity-100" : "opacity-0",
      r
    ),
    children: e
  }
), kp = (e, t) => (e && e(t) || []).filter(
  (r) => r.type === "separator" || r.enabled === void 0 || r.enabled
), Rl = ({
  source: e,
  item: t
}) => {
  const [r, n] = M(!1), [a, o] = M(null);
  if (!e.itemActions)
    return {
      hasItemActions: !1,
      primaryItemActions: [],
      dropdownItemActions: [],
      mobileDropdownItemActions: [],
      handleDropDownOpenChange: () => {
      },
      dropDownOpen: !1,
      setDropDownOpen: () => {
      }
    };
  const s = kp(e.itemActions, t), l = s.filter(
    (u) => u.type === "primary"
  ).slice(0, 2), c = Bo(
    s.filter(
      (u) => u.type === "separator" || !l.includes(u)
    )
  ), d = Bo([
    ...l,
    ...s.filter(
      (u) => u.type === "separator" || !l.includes(u)
    )
  ]), f = (u) => {
    if (!u) {
      o(
        setTimeout(() => {
          n(!1);
        }, 100)
      );
      return;
    }
    a && (clearTimeout(a), o(null)), n(!0);
  };
  return {
    hasItemActions: s.length > 0,
    primaryItemActions: l,
    dropdownItemActions: c,
    mobileDropdownItemActions: d,
    handleDropDownOpenChange: f,
    dropDownOpen: r,
    setDropDownOpen: n
  };
}, Kn = {
  default: "-",
  list: void 0
}, wt = (e, t, r, n) => {
  const a = t.render(e), o = r in Kn ? Kn[r] : Kn.default;
  return Yc(
    a,
    {
      visualization: r,
      i18n: n
    },
    o
  );
}, El = ({
  className: e,
  primaryItemActions: t,
  dropdownItemActions: r,
  handleDropDownOpenChange: n
}) => /* @__PURE__ */ O("aside", { className: I("items-center justify-end gap-2 md:flex", e), children: [
  t.map((a) => /* @__PURE__ */ i(
    ne,
    {
      label: a.label,
      variant: "outline",
      onClick: a.onClick,
      icon: a.icon
    },
    a.label
  )),
  /* @__PURE__ */ i(
    Ol,
    {
      align: "end",
      items: r,
      onOpenChange: n
    }
  )
] }), Ll = (e, t, r) => {
  const n = r ? 46 : 0;
  return {
    getStickyPosition: oe(
      (o) => o < e && t.length > 1 ? {
        left: t.slice(0, Math.max(0, o)).reduce(
          (s, l) => s + (l.width ?? 0),
          n
        )
      } : void 0,
      [e, t, n]
    ),
    checkColumnWidth: n
  };
}, Rp = (e, t) => {
  const [r, n] = M(null), [a, o] = M(null), [s, l] = M(0), c = V(null), d = V(null), f = oe(
    (h) => {
      c.current = h, h && n(h);
    },
    [n]
  ), u = oe(
    (h) => {
      d.current = h, h && o(h);
    },
    [o]
  );
  return Ze(() => {
    const h = r?.previousElementSibling;
    if (!r || !h) {
      l(0);
      return;
    }
    const m = !a || a.getBoundingClientRect().top === 0, g = () => m ? (r.getBoundingClientRect().top ?? 0) - qe / 2 : (a?.getBoundingClientRect().top ?? 0) - qe / 2, p = () => m ? r.getBoundingClientRect().bottom - qe : (a?.getBoundingClientRect().bottom ?? 0) - qe, v = () => r.getBoundingClientRect().top ?? 0 - qe, y = () => h.getBoundingClientRect().height, b = () => t && e === "basic" ? Cl : 0, x = () => {
      const T = (e === "basic" ? g() : p()) - v() + y() + b();
      l(T);
    };
    x();
    const S = new MutationObserver(() => {
      x();
    }), N = r.parentElement;
    N && S.observe(N, {
      childList: !0,
      subtree: !0,
      attributes: !0
    });
    const w = new ResizeObserver(() => {
      x();
    });
    return w.observe(r), a && w.observe(a), () => {
      S.disconnect(), w.disconnect();
    };
  }, [r, a, e]), { setFirstChildRef: f, setLastChildRef: u, calculatedHeight: s };
}, Fl = Le(void 0), Ep = ({
  children: e
}) => {
  const [t, r] = M({}), n = oe(
    (c, d) => {
      r((f) => ({
        ...f,
        [c]: d
      }));
    },
    []
  ), [a, o] = M({}), s = oe(() => {
    r({}), o({});
  }, []), l = oe((c, d) => {
    o((f) => {
      if (d) return { ...f, [c]: !0 };
      const u = { ...f };
      return delete u[c], u;
    });
  }, []);
  return /* @__PURE__ */ i(
    Fl.Provider,
    {
      value: {
        fetchedData: t,
        updateFetchedData: n,
        clearFetchedData: s,
        expandedRowIds: a,
        setRowExpanded: l
      },
      children: e
    }
  );
}, jl = () => {
  const e = Te(Fl);
  if (!e)
    throw new Error(
      "useNestedDataContext must be used within NestedDataProvider"
    );
  return e;
}, Lp = (e) => e ? typeof e == "object" && "type" in e && e.type === "detailed" : !1, Vo = (e) => e ? Array.isArray(e) ? e : e.records : [], Ko = (e) => e && Lp(e) ? e?.type ?? "basic" : "basic", Fp = ({
  rowId: e,
  item: t,
  source: r,
  onClearFetchedData: n
}) => {
  const {
    fetchedData: a,
    updateFetchedData: o,
    clearFetchedData: s
  } = jl(), [l, c] = M(
    Vo(a?.[e])
  ), [d, f] = M(a?.[e]?.paginationInfo), [u, h] = M(!1), [m, g] = M(
    Ko(a?.[e])
  ), p = V(r.currentFilters), v = V(r.currentSortings), y = V(r.currentNavigationFilters);
  K(() => {
    const N = p.current !== r.currentFilters, w = v.current !== r.currentSortings, _ = y.current !== r.currentNavigationFilters;
    (N || w || _) && (c([]), f(void 0), g("basic"), s(), n(), p.current = r.currentFilters, v.current = r.currentSortings, y.current = r.currentNavigationFilters);
  }, [
    r.currentFilters,
    r.currentSortings,
    r.currentNavigationFilters,
    s,
    n
  ]);
  const b = V(), x = oe(
    (N) => {
      const w = Vo(N), _ = [...l, ...w];
      c(_);
      const T = {
        records: _,
        type: N?.type,
        paginationInfo: N?.paginationInfo
      };
      return o(e, T), g(Ko(N)), f(N?.paginationInfo), w;
    },
    [l, e, o]
  ), S = oe(() => {
    if (l.length > 0 && !d?.hasMore) return l;
    b.current?.unsubscribe(), h(!0);
    const N = r.fetchChildren?.({
      item: t,
      filters: r.currentFilters,
      pagination: d,
      sortings: r.currentSortings
    });
    if (!N)
      return h(!1), [];
    if (!("then" in N) && !("subscribe" in N)) {
      const _ = x(N);
      return h(!1), _;
    }
    const w = "subscribe" in N ? N : Jc(N);
    return b.current = w.subscribe({
      next: (_) => {
        _.loading ? h(!0) : _.error ? h(!1) : _.data && (x(_.data), h(!1));
      },
      error: (_) => {
        h(!1), console.error("Error loading children:", _);
      },
      complete: () => {
        b.current = void 0;
      }
    }), [];
  }, [l, t, r, d, x]);
  return K(() => () => {
    b.current?.unsubscribe();
  }, []), {
    children: l,
    loadChildren: S,
    isLoading: u,
    childrenType: m,
    paginationInfo: d
  };
}, jp = (e, t) => {
  const r = V(null), n = e.rowRef?.current;
  Ze(() => {
    if (r.current && n) {
      const l = e.rowRef?.current?.getBoundingClientRect().height;
      r.current.style.height = `${l}px`;
    }
  }, [n, e.rowRef]);
  const a = (l) => {
    r.current = l, typeof t == "function" ? t(l) : t && (t.current = l);
  }, o = e.nestedRowProps?.depth ?? 0, s = e.columns.map((l) => ({
    ...l,
    render: () => "",
    editType: () => "display-only"
  }));
  return /* @__PURE__ */ i(
    et,
    {
      ...e,
      columns: s,
      ref: a,
      noBorder: o > 0,
      nestedRowProps: {
        ...e.nestedRowProps,
        depth: o + 1,
        hasLoadedChildren: !1,
        ...e.nestedRowPropsOverride
      }
    }
  );
}, Pl = ce(jp), Pp = (e, t) => {
  const r = e.addRowActions.map((n) => ({
    label: n.label,
    icon: n.icon,
    description: n.description,
    onClick: n.onClick,
    loading: n.loading,
    disabled: n.disabled
  }));
  return /* @__PURE__ */ i(
    Pl,
    {
      ...e,
      ref: t,
      nestedRowPropsOverride: {
        onAddRow: {
          actions: r,
          label: e.addRowLabel
        }
      }
    }
  );
}, ql = ce(Pp);
ql.displayName = "AddRowRow";
const qp = (e, t) => /* @__PURE__ */ i(
  Pl,
  {
    ...e,
    ref: t,
    nestedRowPropsOverride: {
      onLoadMoreChildren: e.onLoadMoreChildren
    }
  }
), Mp = ce(qp), zp = 5, Hp = ({
  rowRef: e,
  rowIndex: t,
  source: r,
  item: n,
  columns: a,
  frozenColumnsLeft: o,
  nestedRowProps: s,
  groupIndex: l,
  onCheckedChange: c,
  selectedItems: d,
  checkColumnWidth: f,
  tableWithChildren: u,
  shouldHideBorder: h,
  fromVisualization: m,
  headerGroups: g
}, p) => {
  const v = V(null), y = e?.current;
  Ze(() => {
    if (v.current && y) {
      const S = e.current.getBoundingClientRect().height;
      v.current.style.height = `${S}px`;
    }
  }, [y, e]);
  const b = s?.depth ?? 0, x = (S) => {
    v.current = S, typeof p == "function" && p(S);
  };
  return /* @__PURE__ */ i(
    et,
    {
      source: {
        ...r,
        itemsWithChildren: () => !1
      },
      item: n,
      index: t,
      frozenColumnsLeft: o,
      columns: a,
      noBorder: h ?? !1,
      groupIndex: l,
      onCheckedChange: c,
      selectedItems: d,
      checkColumnWidth: f,
      loading: !0,
      headerGroups: g,
      ref: x,
      nestedRowProps: {
        ...s,
        depth: s?.parentHasChildren ? b + 1 : b,
        hasLoadedChildren: !1,
        expanded: !1
      },
      tableWithChildren: u,
      fromVisualization: m
    },
    `row-loading-${t}`
  );
}, $p = ce(Hp), Gp = ({
  rowRef: e,
  ...t
}, r) => {
  const n = t.source.childrenCount?.({
    item: t.item,
    pagination: t.paginationInfo
  }), a = t.paginationInfo ? t.paginationInfo.total ? Math.min(
    t.paginationInfo.perPage,
    t.paginationInfo.total - t.paginationInfo.currentPage * t.paginationInfo.perPage
  ) : t.paginationInfo.perPage : void 0, o = n ?? a ?? zp;
  return /* @__PURE__ */ i(te, { children: Array.from({ length: o }).map((s, l) => {
    const d = !(l === o - 1) || t.shouldHideBorder;
    return /* @__PURE__ */ i(
      $p,
      {
        ref: r,
        rowRef: e,
        rowIndex: l,
        ...t,
        shouldHideBorder: d
      },
      `row-loading-${l}`
    );
  }) });
}, Bp = ce(Gp), Vp = (e) => e ? (Array.isArray(e) ? e : [e]).filter(
  (t) => t !== void 0
) : [], Kp = (e, t) => {
  const r = V(null), n = Al(), a = `${e.nestedRowProps?.depth ?? 0}-${"id" in e.item ? e.item.id + "-" + e.index : e.index}`, { expandedRowIds: o, setRowExpanded: s } = jl(), l = o[a] ?? !1, { children: c, loadChildren: d, isLoading: f, childrenType: u, paginationInfo: h } = Fp({
    rowId: a,
    item: e.item,
    source: e.source,
    onClearFetchedData: () => s(a, !1)
  }), m = l && f, g = l, p = l && h?.hasMore, v = l ? Vp(n?.addNestedRowActions?.(e.item)) : [], y = v.length > 0, { calculatedHeight: b, setFirstChildRef: x, setLastChildRef: S } = Rp(
    u,
    !!p || y
  ), N = oe(
    (C) => {
      r.current = C, typeof t == "function" && t(C);
    },
    [t]
  ), w = () => {
    const C = !l;
    s(a, C), C && !c.length && d();
  }, _ = {
    depth: e.nestedRowProps?.depth ?? 0,
    expanded: l,
    onExpand: w,
    nestedVariant: u,
    connectorHeight: b
  }, T = e.fromVisualization === "table", A = (e.nestedRowProps?.depth ?? 0) === 0, E = (e.nestedRowProps?.isLastChild || A) ?? !1, k = (l || !E) && T;
  return /* @__PURE__ */ O(te, { children: [
    /* @__PURE__ */ i(
      et,
      {
        ...e,
        disableHover: !e.source.itemOnClick,
        noBorder: k,
        ref: N,
        nestedRowProps: {
          ..._,
          // If nestedRowProps.parentHasChildren is not provided, we need to set it to true if the parent has children
          // This nestedRowProps.parentHasChildren is provided on children iteration
          parentHasChildren: e.nestedRowProps?.parentHasChildren ?? c.length > 0,
          hasLoadedChildren: !1,
          isLastChild: E
        },
        tableWithChildren: e.tableWithChildren,
        fromVisualization: e.fromVisualization
      }
    ),
    g && c.map((C, D) => {
      const q = C, L = e.source.itemsWithChildren?.(q), z = D === 0, W = D === c.length - 1, H = (e.nestedRowProps?.depth ?? 0) + 1, U = () => {
        if (z)
          return (P) => {
            x(P);
          };
        if (W && !p && !y)
          return (P) => {
            S(P);
          };
      }, Y = W && E && !p, R = e.rowWrapper;
      if (L) {
        const P = /* @__PURE__ */ Ia(
          Ml,
          {
            ...e,
            key: `nested-row-${e.groupIndex}-${C.id}-${e.index}-${D}`,
            index: D,
            item: q,
            tableWithChildren: e.tableWithChildren,
            ref: U(),
            nestedRowProps: {
              ...e.nestedRowProps,
              parentHasChildren: !0,
              depth: H,
              isLastChild: Y
            },
            fromVisualization: e.fromVisualization
          }
        );
        return R ? /* @__PURE__ */ i(
          R,
          {
            item: q,
            index: D,
            children: P
          },
          `nested-row-${e.groupIndex}-${C.id}-${e.index}-${D}`
        ) : P;
      } else {
        const P = !Y && T, $ = /* @__PURE__ */ Ia(
          et,
          {
            ...e,
            key: `row-${e.groupIndex}-${e.index}-${D}`,
            index: D,
            item: q,
            noBorder: P,
            ref: U(),
            nestedRowProps: {
              ...e.nestedRowProps,
              depth: (e.nestedRowProps?.depth ?? 0) + 1,
              parentHasChildren: !0,
              nestedVariant: u,
              onExpand: w,
              isLastChild: Y
            },
            fromVisualization: e.fromVisualization,
            tableWithChildren: e.tableWithChildren
          }
        );
        return R ? /* @__PURE__ */ i(
          R,
          {
            item: q,
            index: D,
            children: $
          },
          `row-${e.groupIndex}-${e.index}-${D}`
        ) : $;
      }
    }),
    m && /* @__PURE__ */ i(
      Bp,
      {
        ...e,
        rowRef: r,
        nestedRowProps: {
          ..._,
          parentHasChildren: c.length > 0
        },
        paginationInfo: h,
        ref: S,
        shouldHideBorder: !E
      }
    ),
    p && !f && /* @__PURE__ */ i(
      Mp,
      {
        ...e,
        disableHover: !0,
        rowRef: r,
        onLoadMoreChildren: d,
        ref: y ? void 0 : S,
        nestedRowProps: {
          ...e.nestedRowProps,
          parentHasChildren: !0,
          nestedVariant: u
        }
      }
    ),
    y && /* @__PURE__ */ i(
      ql,
      {
        ...e,
        disableHover: !0,
        rowRef: r,
        addRowActions: v,
        addRowLabel: n?.addNestedRowActionsLabel,
        ref: S,
        nestedRowProps: {
          ...e.nestedRowProps,
          parentHasChildren: !0,
          nestedVariant: u
        }
      }
    )
  ] });
}, Wp = (e, t) => /* @__PURE__ */ i(Up, { ...e, ref: t }), Up = ce(Kp), Ml = ce(Wp), Je = "border-0 border-r border-solid border-f1-border-secondary", Yp = (e, t) => {
  const r = [];
  return e.forEach((n, a) => {
    const o = n.headerGroupId;
    if (!o) {
      r.push({
        type: "ungrouped",
        columnIndices: [a]
      });
      return;
    }
    const s = r[r.length - 1];
    s && s.type === "group" && s.id === o ? (s.colSpan++, s.columnIndices.push(a)) : r.push({
      colSpan: 1,
      id: o,
      type: "group",
      columnIndices: [a],
      label: t[o] ?? o
    });
  }), r;
}, Jp = (e, t) => F(() => !t || !e.some((n) => n.headerGroupId) ? null : Yp(e, t), [e, t]), Xp = {
  none: "",
  striped: "bg-[repeating-linear-gradient(45deg,transparent_0px,transparent_8px,hsl(var(--neutral-20))_8px,hsl(var(--neutral-20))_9px)] [background-size:100%_100px]"
}, Zp = ({
  source: e,
  item: t,
  onCheckedChange: r,
  selectedItems: n,
  columns: a,
  frozenColumnsLeft: o,
  checkColumnWidth: s,
  index: l,
  groupIndex: c,
  noBorder: d = !1,
  loading: f = !1,
  nestedRowProps: u,
  tableWithChildren: h,
  disableHover: m = !1,
  referenceRowType: g,
  cellRenderer: p,
  rowWrapper: v,
  fromVisualization: y,
  headerGroups: b
}, x) => {
  const S = e.itemUrl ? e.itemUrl(t) : void 0, N = e.itemOnClick ? e.itemOnClick(t) : void 0, w = e.selectable ? e.selectable(t) : void 0, _ = !!e.itemsWithChildren?.(t), T = ae(), A = (P, $) => wt(P, $, "table", T), E = `table-row-${c}-${l}`, { getStickyPosition: k } = Ll(
    o,
    a,
    !!e.selectable
  ), {
    hasItemActions: C,
    primaryItemActions: D,
    dropdownItemActions: q,
    mobileDropdownItemActions: L,
    handleDropDownOpenChange: z,
    dropDownOpen: W
  } = Rl({ source: e, item: t }), H = u?.hasLoadedChildren === void 0 || u?.hasLoadedChildren;
  if (_ && H)
    return /* @__PURE__ */ i(
      Ml,
      {
        source: e,
        item: t,
        onCheckedChange: r,
        selectedItems: n,
        columns: a,
        frozenColumnsLeft: o,
        checkColumnWidth: s,
        index: l,
        groupIndex: c,
        nestedRowProps: u,
        tableWithChildren: h,
        referenceRowType: g,
        cellRenderer: p,
        rowWrapper: v,
        headerGroups: b,
        fromVisualization: y
      },
      E
    );
  const U = w !== void 0 && n.has(w), Y = g?.(t) ?? "none", R = p ? I(
    "h-[48px] p-0 align-middle last:pr-0",
    !h && "first:pl-0"
  ) : void 0;
  return /* @__PURE__ */ O(
    _e,
    {
      ref: x,
      className: I(
        "group transition-colors hover:bg-f1-background-hover",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']",
        d && "after:bg-white-100",
        m && "hover:bg-transparent",
        U && "bg-f1-background-selected-secondary",
        Xp[Y]
      ),
      children: [
        e.selectable && /* @__PURE__ */ i(
          Se,
          {
            width: s,
            sticky: { left: 0 },
            loading: f,
            className: I(
              f && h ? "first:pl-4" : "",
              b && "[&>div:first-child]:hidden",
              b && Je,
              R
            ),
            referenceRowType: Y,
            children: w !== void 0 && /* @__PURE__ */ i("div", { className: "pointer-events-auto ml-1.5 flex h-full items-center justify-start", children: /* @__PURE__ */ i(
              Xc,
              {
                checked: n.has(w),
                onCheckedChange: r,
                title: `Select ${e.selectable(t)}`,
                hideLabel: !0
              }
            ) })
          }
        ),
        a.map((P, $) => {
          const B = b?.find((ie) => ie.type === "group" && ie.columnIndices.includes($)), J = !!b && (!B || B.columnIndices[B.columnIndices.length - 1] === $), Q = /* @__PURE__ */ i(
            "div",
            {
              className: I(
                P.align === "right" ? "justify-end" : "",
                "flex"
              ),
              children: A(t, P)
            }
          );
          return /* @__PURE__ */ i(
            Se,
            {
              firstCell: $ === 0,
              href: S,
              onClick: N,
              width: P.width,
              sticky: k($),
              loading: f,
              nestedRowProps: {
                ...u,
                rowWithChildren: _,
                tableWithChildren: h,
                selectableRow: !!e.selectable
              },
              fromVisualization: y,
              referenceRowType: Y,
              className: I(R, J && Je),
              children: p ? /* @__PURE__ */ i(
                p,
                {
                  item: t,
                  isLastColumn: !C && $ === a.length - 1,
                  column: P,
                  cellIndex: $,
                  children: Q
                }
              ) : Q
            },
            `table-cell-${c}-${l}-${$}`
          );
        }),
        C && !f && !u?.onLoadMoreChildren && !u?.onAddRow && /* @__PURE__ */ O(te, { children: [
          /* @__PURE__ */ i("td", { className: "sticky right-0 top-0 z-10 hidden md:table-cell", children: /* @__PURE__ */ i(kl, { dropDownOpen: W, children: /* @__PURE__ */ i(
            El,
            {
              primaryItemActions: D,
              dropdownItemActions: q,
              handleDropDownOpenChange: z
            }
          ) }) }),
          /* @__PURE__ */ i(
            Se,
            {
              width: 68,
              sticky: {
                right: 0
              },
              href: S,
              className: "table-cell md:hidden",
              loading: f,
              children: /* @__PURE__ */ i(
                Il,
                {
                  items: L,
                  onOpenChange: z
                }
              )
            },
            `table-cell-${c}-${l}-actions`
          )
        ] })
      ]
    },
    E
  );
}, et = ce(Zp), Re = (e) => e.id ?? e.label ?? "column", Qp = (e) => [...e].sort((t, r) => (t.order ?? e.length) - (r.order ?? e.length)).map((t) => Re(t)), eg = (e) => e.filter((t) => t.hidden && !t.noHiding).map((t) => Re(t)), zl = (e, t, r, n, a) => {
  const o = () => {
    if (!a || r?.hidden === void 0)
      return eg(e);
    if (!r.order || r.order.length === 0)
      return r.hidden;
    const h = new Set(r.order), m = e.filter(
      (g) => g.hidden && !g.noHiding && !h.has(Re(g))
    ).map(Re);
    return [...r.hidden, ...m];
  }, [s, l] = M(o()), [c, d] = M(
    (n && r?.order !== void 0 ? r.order : void 0) ?? Qp(e)
  );
  K(() => {
    a && r?.hidden !== void 0 && l(o());
  }, [JSON.stringify(r?.hidden), a]), K(() => {
    n && r?.order !== void 0 && d(r.order);
  }, [JSON.stringify(r?.order), n]);
  const f = F(() => {
    const h = [...e], m = t || 1;
    return [
      // Frozen columns can not be hidden even if the id is in status
      // The frist column is always visible and not sortable even if frozenColumns is 0
      ...h.slice(0, m).map((g, p) => ({
        column: {
          ...g,
          id: Re(g)
        },
        canHide: !1,
        visible: !0,
        sortable: !1,
        order: p
      })),
      // The rest of the columns are sorted and hidden using the status in colsOrder and colsHidden
      ...h.slice(m).sort((g, p) => {
        const v = c.indexOf(Re(g)), y = c.indexOf(Re(p)), b = v === -1 ? c.length : v, x = y === -1 ? c.length : y;
        return b - x;
      }).map((g, p) => ({
        column: {
          ...g,
          id: Re(g)
        },
        canHide: a ? !(g.noHiding ?? !1) : !1,
        visible: !s.includes(Re(g)),
        sortable: !!n,
        order: p + t
      }))
    ];
  }, [
    t,
    c,
    s,
    e,
    n,
    a
  ]);
  return {
    columns: F(() => f.filter((h) => h.visible).map((h) => h.column), [f]),
    columnsWithStatus: f,
    colsHidden: s,
    setColsHidden: l,
    colsOrder: c,
    setColsOrder: d
  };
}, tg = ({
  item: e,
  onChangeVisibility: t,
  allowSorting: r,
  allowHiding: n
}) => {
  const a = "flex items-center gap-2 text-medium text-sm pr-4", o = Ed(), s = /* @__PURE__ */ O("div", { className: a, children: [
    r && /* @__PURE__ */ i(
      "div",
      {
        className: I(
          "flex shrink-0 items-center justify-center text-f1-icon",
          e.sortable && "cursor-grab"
        ),
        style: { width: "20px" },
        onPointerDown: (l) => {
          e.sortable && o.start(l);
        },
        children: e.sortable ? /* @__PURE__ */ i(fe, { icon: Zc, size: "xs" }) : /* @__PURE__ */ i(fe, { icon: Qc, size: "sm" })
      }
    ),
    /* @__PURE__ */ i(
      "span",
      {
        className: I(
          "flex-1 min-w-0",
          e.sortable ? "text-f1-foreground" : "text-f1-foreground-secondary"
        ),
        children: /* @__PURE__ */ i(It, { children: e.label })
      }
    ),
    n && /* @__PURE__ */ i(
      ed,
      {
        checked: e.visible,
        onCheckedChange: (l) => {
          t({
            ...e,
            visible: l
          });
        },
        title: e.label,
        hideLabel: !0,
        disabled: !e.canHide
      }
    )
  ] });
  return e.sortable ? /* @__PURE__ */ i(
    zd,
    {
      value: e,
      drag: "y",
      dragElastic: 0.1,
      whileDrag: {
        scale: 1.05
      },
      dragListener: !1,
      dragControls: o,
      children: s
    }
  ) : /* @__PURE__ */ i("li", { children: s });
}, rg = ({
  items: e,
  onChange: t,
  allowSorting: r,
  allowHiding: n
}) => {
  const a = (s) => {
    t?.(e.map((l) => l.id === s.id ? s : l));
  };
  return /* @__PURE__ */ i(
    jd,
    {
      className: "flex flex-1 select-none list-none flex-col gap-2",
      values: e,
      onReorder: (s) => {
        t?.(s);
      },
      axis: "y",
      layoutScroll: !0,
      children: e.map((s) => /* @__PURE__ */ i(
        tg,
        {
          item: s,
          onChangeVisibility: a,
          allowSorting: r,
          allowHiding: n
        },
        s.id
      ))
    }
  );
}, ng = ({
  columns: e,
  frozenColumns: t,
  allowSorting: r,
  allowHiding: n,
  visualizationKey: a = "table"
}) => {
  const o = ae(), { settings: s, setVisualizationSettings: l } = yt(), c = s.visualization[a], { columnsWithStatus: d } = zl(
    e,
    t,
    c,
    r,
    n
  ), f = F(
    () => d.filter((g) => n || g.visible).map((g) => ({
      id: g.column.id,
      label: g.column.label,
      sortable: g.sortable,
      canHide: g.canHide,
      visible: g.visible
    })),
    [d, n]
  ), u = (g) => {
    l(a, (p) => ({
      ...p,
      order: g.map((v) => v.id),
      hidden: g.filter((v) => !v.visible).map((v) => v.id)
    }));
  }, h = (g) => {
    u(
      f.map((p) => ({
        ...p,
        visible: p.canHide ? g : p.visible
      }))
    );
  }, m = n && f.filter((g) => g.canHide).length > 1;
  return /* @__PURE__ */ i("div", { className: "relative -mr-2 flex h-[200px] flex-col gap-2", children: /* @__PURE__ */ O(Et, { className: "h-[200px]", children: [
    /* @__PURE__ */ i(
      rg,
      {
        items: f,
        onChange: u,
        allowSorting: r,
        allowHiding: n
      }
    ),
    m && /* @__PURE__ */ O("div", { className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm", children: [
      /* @__PURE__ */ i(
        ne,
        {
          variant: "outline",
          size: "sm",
          label: o.collections.table.settings.showAllColumns,
          onClick: () => {
            h(!0);
          }
        }
      ),
      /* @__PURE__ */ i(
        ne,
        {
          variant: "ghost",
          size: "sm",
          label: o.collections.table.settings.hideAllColumns,
          onClick: () => {
            h(!1);
          }
        }
      )
    ] })
  ] }) });
}, Wo = (e) => !e.allowColumnHiding && !e.allowColumnReordering ? null : /* @__PURE__ */ i(
  ng,
  {
    columns: e.columns,
    frozenColumns: e.frozenColumns || 0,
    allowSorting: e.allowColumnReordering ?? !1,
    allowHiding: e.allowColumnHiding ?? !1,
    visualizationKey: e.visualizationKey
  }
), ag = (e) => e ? (Array.isArray(e) ? e : [e]).filter(
  (t) => t !== void 0
) : [], ig = ({ text: e, count: t }) => {
  const r = String(t), n = e.indexOf(r);
  if (n === -1)
    return /* @__PURE__ */ i("span", { className: "font-me text-base font-medium text-f1-foreground-secondary", children: e });
  const a = e.slice(0, n), o = e.slice(n + r.length);
  return /* @__PURE__ */ O("span", { className: "text-base font-medium text-f1-foreground-secondary", children: [
    a,
    /* @__PURE__ */ i("span", { className: "font-semibold text-f1-foreground", children: r }),
    o
  ] });
}, Hl = ({
  columns: e,
  source: t,
  frozenColumns: r = 0,
  onSelectItems: n,
  onLoadData: a,
  onLoadError: o,
  allowColumnHiding: s,
  allowColumnReordering: l,
  referenceRowType: c,
  headerGroupLabels: d,
  rowWrapper: f,
  cellRenderer: u,
  showItemActions: h,
  visualizationSettings: m,
  fromVisualization: g = "table",
  summaryPlaceholder: p = "-"
}) => {
  const { t: v, ...y } = ae(), b = Al(), [x] = M(
    () => ee.create(
      et
    )
  ), { settings: S } = yt(), { columns: N } = zl(
    e,
    r,
    m ?? S.visualization?.table,
    l,
    s
  ), {
    data: w,
    paginationInfo: _,
    setPage: T,
    isInitialLoading: A,
    isLoadingMore: E,
    loadMore: k,
    summaries: C
  } = Wt(t, {
    onError: (j) => {
      o(j);
    }
  }), { currentSortings: D, setCurrentSortings: q, isLoading: L } = t, z = h !== !1 && !!t.itemActions, W = F(
    () => h === !1 ? {
      ...t,
      itemActions: void 0
    } : t,
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only recompute when source identity or showItemActions changes
    [t, h]
  ), { loadingIndicatorRef: H } = xa(
    _,
    L,
    E,
    k
  );
  K(() => {
    a({
      totalItems: _?.total || w.records.length,
      filters: t.currentFilters,
      search: t.currentSearch,
      isInitialLoading: A,
      data: w.records
    });
  }, [_?.total, w.records]);
  const U = F(() => r, [r]), Y = (j, G) => "id" in j && j.id !== void 0 && j.id !== null ? `id:${String(j.id)}` : `index:${String(G)}`, {
    selectedItems: R,
    allSelectedStatus: P,
    groupAllSelectedStatus: $,
    handleSelectItemChange: B,
    handleSelectAll: J,
    handleSelectAllItems: Q,
    handleSelectGroupChange: ie
  } = Mt({
    data: w,
    paginationInfo: _,
    source: t,
    onSelectItems: n,
    selectionMode: "multi",
    selectedState: t.defaultSelectedItems
  }), se = F(() => !C || !t.summaries ? null : {
    data: C,
    sticky: !0,
    label: t.summaries?.label
  }, [C, t.summaries]), pe = (j, G, Z) => {
    if (!(!j || !G))
      return Z === null ? "none" : Z.field === j ? Z.order : "none";
  }, xe = (j) => j == null || j === "", at = (j) => j ?? p, Ae = (j) => {
    q(() => !D || D.field !== j ? {
      field: j,
      order: "asc"
    } : D.order === "asc" ? {
      field: j,
      order: "desc"
    } : null);
  }, ve = t.grouping?.collapsible, ye = t.grouping?.defaultOpenGroups, { openGroups: ze, setGroupOpen: Ce } = oa(
    w?.type === "grouped" ? w.groups : [],
    ye
  ), be = N.length + (z ? 1 : 0) + (t.selectable ? 1 : 0), { getStickyPosition: Oe, checkColumnWidth: we } = Ll(
    U,
    N,
    !!t.selectable
  ), le = Jp(N, d), He = w?.records.some(
    (j) => t.itemsWithChildren?.(j)
  );
  if (A)
    return /* @__PURE__ */ i(Go.Skeleton, { columns: be });
  t.sortings || N.forEach((j) => {
    j.sorting && console.warn(
      "Sorting is defined on a column but no sortings are provided in the data source"
    );
  });
  const Be = P.selectedCount > 0 || P.checked, Ve = !P.checked && P.unselectedCount === 0 && P.selectedCount > 0, Jt = !!t.allPagesSelection && !P.checked && _?.total !== void 0 && _.total > P.selectedCount, Xt = N.length + (z ? 2 : 0), Zt = P.selectedCount === 1 ? y.status.selected.singular : y.status.selected.plural;
  return /* @__PURE__ */ i("div", { className: "flex h-full min-h-0 flex-col gap-4", children: /* @__PURE__ */ O(He ? Ep : Ft, { children: [
    /* @__PURE__ */ O(Go, { loading: L, children: [
      /* @__PURE__ */ i(Dl, { sticky: !0, children: Be && t.selectable ? /* @__PURE__ */ O(_e, { children: [
        /* @__PURE__ */ i(
          ke,
          {
            width: we,
            sticky: { left: 0 },
            align: "left",
            children: /* @__PURE__ */ i("div", { className: "ml-1.5 flex w-full items-center justify-start", children: /* @__PURE__ */ i(
              Lt,
              {
                checked: !0,
                indeterminate: P.indeterminate || P.selectedCount > 0 && !P.checked,
                onCheckedChange: J,
                title: y.actions.selectAll,
                hideLabel: !0
              }
            ) })
          }
        ),
        /* @__PURE__ */ i(
          "th",
          {
            colSpan: Xt,
            className: "h-11 border-0 border-t border-solid border-f1-border-secondary bg-f1-background px-3",
            children: /* @__PURE__ */ O("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ i(
                ig,
                {
                  text: P.checked ? v("status.selected.allItemsSelected", {
                    total: _?.total ?? P.selectedCount
                  }) : Ve ? v("status.selected.allOnPage", {
                    count: P.selectedCount
                  }) : `${P.selectedCount} ${Zt}`,
                  count: P.checked ? _?.total ?? P.selectedCount : P.selectedCount
                }
              ),
              Jt && /* @__PURE__ */ i(
                ne,
                {
                  variant: "outline",
                  label: v("status.selected.selectAllItems", {
                    total: _?.total ?? 0
                  }),
                  onClick: () => Q(!0),
                  size: "sm"
                }
              )
            ] })
          }
        )
      ] }) : /* @__PURE__ */ O(te, { children: [
        le ? /* @__PURE__ */ O(_e, { children: [
          t.selectable && /* @__PURE__ */ i(
            ke,
            {
              align: "left",
              sticky: { left: 0 },
              width: we,
              className: I(
                Je,
                "hover:after:bg-transparent"
              ),
              children: /* @__PURE__ */ i("div", { className: "ml-1.5 flex w-full items-center justify-start" })
            }
          ),
          le.map((j, G) => {
            const Z = I(
              Je,
              "hover:after:bg-transparent"
            );
            return j.type === "group" ? /* @__PURE__ */ i(
              ke,
              {
                align: "right",
                colSpan: j.colSpan,
                className: Z,
                children: j.label
              },
              `header-group-${j.id}-${G}`
            ) : /* @__PURE__ */ i(
              ke,
              {
                align: "right",
                className: Z,
                width: N[j.columnIndices[0]].width,
                sticky: Oe(j.columnIndices[0]),
                children: /* @__PURE__ */ i("span", {})
              },
              `header-ungrouped-${j.columnIndices[0]}`
            );
          }),
          z && /* @__PURE__ */ O(te, { children: [
            /* @__PURE__ */ i("th", { className: "hidden md:table-cell" }),
            /* @__PURE__ */ i(
              ke,
              {
                hidden: !0,
                width: 68,
                sticky: { right: 0 },
                className: "table-cell md:hidden",
                children: /* @__PURE__ */ i("span", {})
              },
              "actions"
            )
          ] })
        ] }) : null,
        /* @__PURE__ */ O(_e, { children: [
          t.selectable && /* @__PURE__ */ i(
            ke,
            {
              width: we,
              sticky: { left: 0 },
              align: "left",
              className: le ? I("[&>div:first-child]:hidden", Je) : void 0,
              children: /* @__PURE__ */ i("div", { className: "ml-1.5 flex w-full items-center justify-start", children: /* @__PURE__ */ i(
                Lt,
                {
                  checked: !1,
                  onCheckedChange: J,
                  title: y.actions.selectAll,
                  hideLabel: !0,
                  disabled: w?.records.length === 0
                }
              ) })
            }
          ),
          N.map(({ sorting: j, label: G, ...Z }, re) => {
            const he = le?.find(
              (Ie) => Ie.type === "group" && Ie.columnIndices.includes(re)
            ), Ke = !!le && (!he || he.columnIndices[he.columnIndices.length - 1] === re);
            return /* @__PURE__ */ i(
              ke,
              {
                sortState: pe(
                  j,
                  t.sortings,
                  D
                ),
                width: Z.width,
                align: Z.align,
                sticky: Oe(re),
                ...Z,
                hidden: !1,
                className: I(
                  le && "[&>div:first-child]:hidden",
                  Ke && Je,
                  g === "editableTable" && re !== N.length - 1 && "border-0 border-r-[1px] border-solid border-f1-border-secondary"
                ) || void 0,
                onSortClick: j ? () => {
                  j && Ae(j);
                } : void 0,
                children: G
              },
              `table-head-${re}`
            );
          }),
          z && /* @__PURE__ */ O(te, { children: [
            /* @__PURE__ */ i("th", { className: "hidden md:table-cell" }),
            /* @__PURE__ */ i(
              ke,
              {
                width: 68,
                hidden: !0,
                sticky: {
                  right: 0
                },
                className: "table-cell md:hidden",
                children: y.collections.actions.actions
              },
              "actions"
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ O(bl, { children: [
        w?.type === "grouped" && w.groups.map((j, G) => {
          const Z = j.itemCount;
          return /* @__PURE__ */ O(Ft, { children: [
            /* @__PURE__ */ O(_e, { sticky: !0, children: [
              /* @__PURE__ */ i(
                Se,
                {
                  sticky: { left: 0 },
                  colSpan: (U || 1) + (t.selectable ? 1 : 0),
                  children: /* @__PURE__ */ i(
                    sa,
                    {
                      className: "px-3",
                      selectable: !!t.selectable,
                      select: Ip(
                        $[j.key]
                      ),
                      onSelectChange: (re) => ie(j, re),
                      showOpenChange: ve,
                      label: j.label,
                      itemCount: Z,
                      open: ze[j.key],
                      onOpenChange: (re) => Ce(j.key, re)
                    }
                  )
                }
              ),
              /* @__PURE__ */ i(
                Se,
                {
                  colSpan: N.length - (U || 1) + (t.selectable ? 1 : 0),
                  children: " "
                }
              )
            ] }, `group-header-${j.key}`),
            /* @__PURE__ */ i(Ne, { children: x && (!ve || ze[j.key]) && j.records.map((re, he) => {
              const Ke = `row-${G}-${Y(re, he)}`, Ie = /* @__PURE__ */ i(
                x,
                {
                  variants: ms(),
                  initial: ve ? "hidden" : "visible",
                  animate: "visible",
                  exit: "hidden",
                  custom: he,
                  layout: !0,
                  source: W,
                  item: re,
                  index: he,
                  groupIndex: G,
                  onCheckedChange: (je) => B(re, je),
                  selectedItems: R,
                  columns: N,
                  frozenColumnsLeft: U,
                  checkColumnWidth: we,
                  referenceRowType: c,
                  rowWrapper: f,
                  cellRenderer: u,
                  headerGroups: le
                },
                Ke
              );
              return f ? /* @__PURE__ */ i(
                f,
                {
                  item: re,
                  index: he,
                  children: Ie
                },
                Ke
              ) : Ie;
            }) }, `group-animate-${G}`)
          ] }, `group-${j.key}`);
        }),
        w?.type === "flat" && w.records.map((j, G) => {
          const Z = `row-${Y(j, G)}`, re = /* @__PURE__ */ i(
            et,
            {
              groupIndex: 0,
              source: W,
              item: j,
              index: G,
              onCheckedChange: (he) => B(j, he),
              selectedItems: R,
              columns: N,
              frozenColumnsLeft: U,
              checkColumnWidth: we,
              tableWithChildren: He,
              referenceRowType: c,
              rowWrapper: f,
              cellRenderer: u,
              fromVisualization: g,
              headerGroups: le
            },
            Z
          );
          return f ? /* @__PURE__ */ i(f, { item: j, index: G, children: re }, Z) : re;
        }),
        _?.type === "infinite-scroll" && E && Array.from({ length: 5 }).map((j, G) => /* @__PURE__ */ i(_e, { children: Array.from({ length: be }).map(
          (Z, re) => /* @__PURE__ */ i(Se, { children: /* @__PURE__ */ i(ue, { className: "h-4 w-full" }) }, `skeleton-cell-${G}-${re}`)
        ) }, `skeleton-row-${G}`)),
        Rt(_) && _.hasMore && /* @__PURE__ */ i("tr", { children: /* @__PURE__ */ i(
          "td",
          {
            colSpan: N.length + (t.selectable ? 1 : 0) + (z ? 1 : 0),
            ref: H,
            className: "h-10",
            "aria-hidden": "true"
          }
        ) })
      ] }),
      (() => {
        const j = ag(b?.addRowActions?.());
        return !se && j.length === 0 ? null : /* @__PURE__ */ O(Ap, { children: [
          se && /* @__PURE__ */ O(
            _e,
            {
              className: I(
                se.sticky && "sticky bottom-0 z-10 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background",
                "font-medium"
              ),
              children: [
                t.selectable && /* @__PURE__ */ i(Se, { width: we, sticky: { left: 0 }, children: se.label && /* @__PURE__ */ i("div", { className: "font-medium text-f1-foreground-secondary", children: se.label }) }),
                N.map((G, Z) => /* @__PURE__ */ i(
                  Se,
                  {
                    firstCell: Z === 0,
                    width: G.width,
                    sticky: Oe(Z),
                    children: Z === 0 && !t.selectable && se.label ? /* @__PURE__ */ i("div", { className: "font-medium text-f1-foreground-secondary", children: se.label }) : /* @__PURE__ */ i(
                      "div",
                      {
                        className: I(
                          G.align === "right" ? "justify-end" : "",
                          "flex"
                        ),
                        children: (() => {
                          const re = at(
                            G.summaryPlaceholder
                          );
                          if (G.summary && t.summaries && t.summaries[G.summary]?.type === "sum") {
                            const he = se.data[G.summary];
                            return xe(he) ? /* @__PURE__ */ i("span", { className: "text-f1-foreground-secondary", children: re }) : /* @__PURE__ */ O("div", { className: "flex gap-1", children: [
                              /* @__PURE__ */ i("span", { className: "text-f1-foreground-secondary", children: y.collections.summaries.types.sum }),
                              `${he}`
                            ] });
                          }
                          return /* @__PURE__ */ i("span", { className: "text-f1-foreground-secondary", children: re });
                        })()
                      }
                    )
                  },
                  `summary-${String(G.label)}`
                )),
                z && /* @__PURE__ */ O(te, { children: [
                  /* @__PURE__ */ i("th", { className: "hidden md:table-cell" }),
                  /* @__PURE__ */ i(
                    Se,
                    {
                      width: 68,
                      sticky: {
                        right: 0
                      },
                      className: "table-cell md:hidden",
                      children: ""
                    },
                    "summary-actions"
                  )
                ] })
              ]
            }
          ),
          j.length > 0 && /* @__PURE__ */ i(_e, { children: /* @__PURE__ */ i(
            Se,
            {
              colSpan: N.length + (t.selectable ? 1 : 0) + (z ? 2 : 0),
              className: "h-[48px] align-middle",
              children: /* @__PURE__ */ i(
                "div",
                {
                  className: "pointer-events-auto flex h-full items-center",
                  onClick: (G) => G.stopPropagation(),
                  onMouseDownCapture: (G) => G.stopPropagation(),
                  children: j.length === 1 ? /* @__PURE__ */ i(
                    ne,
                    {
                      variant: "outline",
                      icon: j[0].icon ?? vs,
                      label: j[0].label,
                      onClick: j[0].onClick,
                      loading: j[0].loading,
                      disabled: j[0].disabled,
                      size: "sm"
                    }
                  ) : j.some((G) => G.description !== void 0) ? /* @__PURE__ */ i(
                    Me,
                    {
                      mode: "dropdown",
                      variant: "outline",
                      size: "sm",
                      trigger: b?.addRowActionsLabel,
                      disabled: j.every((G) => G.disabled),
                      loading: j.some((G) => G.loading),
                      items: j.map((G, Z) => ({
                        value: Z.toString(),
                        label: G.label,
                        icon: G.icon,
                        description: G.description
                      })),
                      onClick: (G) => {
                        j[Number(G)]?.onClick?.();
                      }
                    }
                  ) : /* @__PURE__ */ i(
                    Me,
                    {
                      variant: "outline",
                      size: "sm",
                      disabled: j.every((G) => G.disabled),
                      loading: j.some((G) => G.loading),
                      items: j.map((G, Z) => ({
                        value: Z.toString(),
                        label: G.label,
                        icon: G.icon
                      })),
                      onClick: (G) => {
                        j[Number(G)]?.onClick?.();
                      }
                    }
                  )
                }
              )
            }
          ) })
        ] });
      })()
    ] }),
    /* @__PURE__ */ i(
      va,
      {
        paginationInfo: _,
        setPage: T,
        className: "pb-4"
      }
    )
  ] }) });
};
function og({ message: e, children: t }) {
  const [r, n] = M(!1), a = oe(() => n(!0), []), o = oe(() => n(!1), []);
  return /* @__PURE__ */ i("div", { className: "relative h-full w-full", children: /* @__PURE__ */ i(td, { delayDuration: 100, disableHoverableContent: !0, children: /* @__PURE__ */ O(rd, { open: r, onOpenChange: n, children: [
    /* @__PURE__ */ i(nd, { asChild: !0, className: "pointer-events-auto h-full w-full", children: /* @__PURE__ */ i(
      "div",
      {
        className: "h-full w-full",
        onFocusCapture: a,
        onBlurCapture: o,
        children: t
      }
    ) }),
    /* @__PURE__ */ O(ad, { side: "top", className: "flex items-center gap-1", children: [
      /* @__PURE__ */ i(fe, { icon: ns, color: "critical", size: "sm" }),
      /* @__PURE__ */ i("span", { className: "text-sm font-medium text-f1-foreground-critical", children: e })
    ] })
  ] }) }) });
}
const sg = {
  text: "cursor-text",
  pointer: "cursor-pointer",
  default: "cursor-default",
  "not-allowed": "cursor-not-allowed"
};
function tt({
  readonly: e = !1,
  showRightBorder: t = !0,
  cursor: r = "text",
  error: n,
  children: a
}) {
  return /* @__PURE__ */ i(
    "div",
    {
      className: I(
        "flex w-full h-full min-w-0 min-h-12 border-solid",
        sg[r],
        n ? "border-0 bg-f1-background-critical/10 outline outline-1 outline-[hsl(var(--critical-50))] -outline-offset-[0.5px]" : I(
          "border-0 border-r-[1px] border-f1-border-secondary",
          !t && "border-r-0"
        ),
        e && "bg-f1-background-secondary"
      ),
      children: n ? /* @__PURE__ */ i(og, { message: n, children: a }) : a
    }
  );
}
const lg = "yyyy-MM-dd";
function cg({
  editableColumn: e,
  value: t,
  inputPlaceholder: r,
  error: n,
  loading: a,
  isLastColumn: o,
  onChange: s
}) {
  const l = F(() => {
    if (!t) return;
    const d = of(t);
    if (id(d))
      return { granularity: "day", value: { from: d, to: d } };
  }, [t]), c = (d) => {
    const f = d?.value?.from, u = f ? od(f, lg) : "";
    u !== t && s(u);
  };
  return /* @__PURE__ */ i(tt, { showRightBorder: !o, error: n, children: /* @__PURE__ */ i(
    "div",
    {
      className: I(
        "flex w-full min-w-0 items-center",
        e.align === "right" && "justify-end"
      ),
      children: /* @__PURE__ */ i(
        Tf,
        {
          className: I(
            "[&_input]:!py-0",
            "[&_[data-slot='placeholder']]:!flex",
            "[&_[data-slot='placeholder']]:!items-center",
            "[&_[data-slot='placeholder']]:!py-0",
            "[&_[data-slot='placeholder']]:!truncate"
          ),
          placeholder: r ?? e.inputPlaceholder,
          label: e.label,
          hideLabel: !0,
          showIcon: !1,
          transparent: !0,
          displayFormat: "default",
          value: l,
          onChange: c,
          loading: a
        }
      )
    }
  ) });
}
const Uo = /* @__PURE__ */ new Set();
function dg({
  editableColumn: e,
  value: t,
  error: r,
  loading: n,
  onChange: a,
  item: o
}) {
  const s = ae(), l = e.selectConfig;
  if (!l)
    return Uo.has(e.label) || (Uo.add(e.label), console.warn(
      `SelectCell: column "${e.label}" has editType "select" but no selectConfig`
    )), /* @__PURE__ */ i(tt, { children: wt(o, e, "editableTable", s) });
  const c = {
    label: e.label,
    hideLabel: !0,
    value: t || void 0,
    onChange: (f) => {
      const u = f ?? "";
      u !== t && a(u);
    },
    loading: n,
    size: "sm",
    placeholder: l.placeholder,
    showSearchBox: l.showSearchBox,
    defaultItem: l.defaultItem?.(o),
    multiple: !1
  }, d = l.clearable ? { clearable: !0 } : {};
  return /* @__PURE__ */ i(tt, { error: r, children: /* @__PURE__ */ i(
    "div",
    {
      className: I(
        "flex w-full min-w-0 h-full",
        "items-center",
        "[&_[data-testid=input-field-wrapper]]:border-0",
        "[&_[data-testid=input-field-wrapper]]:bg-transparent",
        "[&_[data-testid=input-field-wrapper]]:shadow-none",
        "[&_[data-testid=input-field-wrapper]]:ring-0",
        "[&_[data-testid=input-field-wrapper]]:focus-within:ring-0",
        "[&_[data-testid=input-field-wrapper]]:focus-within:ring-offset-0",
        "[&_[data-testid=input-field-wrapper]]:h-full",
        "[&_[data-testid=input-field-wrapper]_.absolute]:top-1/2",
        "[&_[data-testid=input-field-wrapper]_.absolute]:-translate-y-1/2",
        "[&_[data-testid=input-field-wrapper]_.absolute]:bottom-auto",
        "[&>div]:h-full",
        "[&>div]:w-full",
        "[&>div>button]:h-full",
        e.align === "right" && "justify-end"
      ),
      children: "source" in l && l.source ? /* @__PURE__ */ i(
        Ot,
        {
          ...c,
          ...d,
          source: l.source,
          mapOptions: l.mapOptions
        }
      ) : /* @__PURE__ */ i(
        Ot,
        {
          ...c,
          ...d,
          options: typeof l.options == "function" ? l.options(o) : l.options
        }
      )
    }
  ) });
}
function ug({
  editableColumn: e,
  item: t
}) {
  const r = ae();
  return /* @__PURE__ */ i(tt, { children: /* @__PURE__ */ i(
    "div",
    {
      className: I(
        e.align === "right" ? "justify-end" : "",
        "flex p-4 min-h-12 items-center border-0 h-full",
        "bg-f1-background-hover h-full",
        "cursor-pointer w-full"
      ),
      children: wt(t, e, "editableTable", r)
    }
  ) });
}
function $l({
  editableColumn: e,
  item: t,
  isLastColumn: r
}) {
  const n = ae();
  return /* @__PURE__ */ i(tt, { showRightBorder: !r, children: /* @__PURE__ */ i(
    "div",
    {
      className: I(
        "flex w-full min-w-0",
        "cursor-text items-center",
        "cursor-pointer w-full",
        e.align === "right" && "justify-end"
      ),
      children: wt(t, e, "editableTable", n)
    }
  ) });
}
function Yo({
  editableColumn: e,
  value: t,
  error: r,
  loading: n,
  onChange: a
}) {
  return /* @__PURE__ */ i(tt, { error: r, children: /* @__PURE__ */ i(
    "div",
    {
      className: I(
        "flex w-full min-w-0",
        "cursor-text items-center",
        e.align === "right" && "[&_input]:text-right"
      ),
      children: /* @__PURE__ */ i(
        sd,
        {
          type: "text",
          label: e.label,
          hideLabel: !0,
          value: t,
          onChange: a,
          loading: n,
          transparent: !0
        }
      )
    }
  ) });
}
const fg = {
  text: Yo,
  date: cg,
  select: dg,
  multiselect: Yo,
  "display-only": $l,
  disabled: ug
}, Gl = Le(null);
function hg({
  item: e,
  onCellChange: t,
  children: r
}) {
  const [n, a] = M(e), [o, s] = M({}), [l, c] = M({}), { t: d } = ae(), f = V(n);
  f.current = n, K(() => {
    a(e);
  }, [e]);
  const u = oe(
    (h, m) => {
      const g = { ...f.current, [h]: m };
      a(g), s((p) => {
        if (h in p) {
          const { [h]: v, ...y } = p;
          return y;
        }
        return p;
      }), c((p) => ({ ...p, [h]: !0 })), t(g).then((p) => {
        p && Object.keys(p).length > 0 && s((v) => ({ ...v, ...p }));
      }).catch((p) => {
        s((v) => ({
          ...v,
          [h]: p instanceof Error ? p.message : d("collections.editableTable.errors.saveFailed")
        }));
      }).finally(() => {
        c((p) => ({ ...p, [h]: !1 }));
      });
    },
    [t, d]
  );
  return /* @__PURE__ */ i(
    Gl.Provider,
    {
      value: { localItem: n, cellErrors: o, cellLoading: l, handleCellChange: u },
      children: r
    }
  );
}
function pg() {
  return Te(Gl);
}
function Jo(e, t) {
  if (t.id !== void 0 && t.id in e) {
    const n = e[t.id];
    return n == null ? "" : String(n);
  }
  const r = t.render(e);
  return typeof r == "string" ? r : typeof r == "number" ? String(r) : "";
}
function gg({
  column: e,
  children: t,
  isLastColumn: r
}) {
  const n = pg();
  if (!n)
    return /* @__PURE__ */ i(te, { children: t });
  const { localItem: a, cellErrors: o, cellLoading: s, handleCellChange: l } = n, c = e, d = c.editType?.(a), f = c.id !== void 0, u = (h) => {
    c.id !== void 0 && l(c.id, h);
  };
  if (f && d) {
    const h = fg[d], m = Jo(a, c);
    if (h) {
      const g = c.id ? o[c.id] : void 0, p = c.id ? s[c.id] ?? !1 : !1;
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions -- stops cell navigation (href/onClick) from bubbling to the row after child interactions complete
        /* @__PURE__ */ i(
          "div",
          {
            className: "pointer-events-auto h-full",
            onClick: (v) => v.stopPropagation(),
            onMouseDown: (v) => v.stopPropagation(),
            children: /* @__PURE__ */ i(
              h,
              {
                editableColumn: c,
                value: m,
                inputPlaceholder: c.inputPlaceholder,
                error: g,
                item: a,
                isLastColumn: r,
                loading: p,
                onChange: u
              }
            )
          }
        )
      );
    }
  }
  return /* @__PURE__ */ i(
    $l,
    {
      editableColumn: c,
      item: a,
      value: Jo(a, c),
      isLastColumn: r,
      onChange: u
    }
  );
}
const mg = ({
  onCellChange: e,
  addRowActions: t,
  addRowActionsLabel: r,
  addNestedRowActions: n,
  addNestedRowActionsLabel: a,
  ...o
}) => {
  const { settings: s } = yt(), l = V(e);
  l.current = e;
  const c = F(() => function({ item: f, children: u }) {
    return /* @__PURE__ */ i(
      hg,
      {
        item: f,
        onCellChange: (...h) => l.current?.(...h),
        children: u
      }
    );
  }, []);
  return /* @__PURE__ */ i(
    Op,
    {
      addRowActions: t,
      addRowActionsLabel: r,
      addNestedRowActions: n,
      addNestedRowActionsLabel: a,
      children: /* @__PURE__ */ i(
        Hl,
        {
          ...o,
          rowWrapper: c,
          cellRenderer: gg,
          showItemActions: !1,
          visualizationSettings: s.visualization?.editableTable,
          fromVisualization: "editableTable"
        }
      )
    }
  );
};
function vg(e, t) {
  const r = { ...e };
  for (const [n, a] of Object.entries(t)) {
    const o = e[n];
    if (Array.isArray(o) && Array.isArray(a) && o.length > 0 && a.length > 0) {
      const s = o.filter(
        (l) => a.includes(l)
      );
      r[n] = s;
    } else
      r[n] = a;
  }
  return r;
}
const bg = ({
  source: e,
  lane: t,
  onError: r,
  onHookUpdate: n
}) => {
  const a = F(
    () => vg(e.currentFilters, t.filters),
    [e.currentFilters, t.filters]
  ), o = Wt(e, {
    filters: a,
    onError: r
  }), {
    data: s,
    search: l,
    setSearch: c,
    isInitialLoading: d,
    isLoading: f,
    isLoadingMore: u,
    error: h,
    paginationInfo: m,
    setPage: g,
    loadMore: p,
    totalItems: v,
    mergedFilters: y,
    summaries: b
  } = o;
  return K(() => {
    n?.({
      data: s,
      search: l,
      setSearch: c,
      isInitialLoading: d,
      isLoading: f,
      isLoadingMore: u,
      error: h,
      paginationInfo: m,
      setPage: g,
      loadMore: p,
      totalItems: v,
      mergedFilters: y,
      summaries: b
    });
  }, [
    s,
    l,
    c,
    d,
    f,
    u,
    h,
    m,
    g,
    p,
    v,
    y,
    b,
    n
  ]), null;
};
function yg(e, t = {}) {
  const { lanes: r } = e;
  if (!F(() => r && r.length > 0, [r]))
    throw new Error("Lanes has not been configured on data source");
  const [a, o] = M({}), s = oe(
    (v, y) => {
      o((b) => ({ ...b, [v]: y }));
    },
    []
  ), l = F(() => JSON.stringify(r), [r]), c = F(
    () => JSON.stringify(e.currentFilters),
    [e.currentFilters]
  ), d = F(
    () => JSON.stringify(e.currentNavigationFilters),
    [e.currentNavigationFilters]
  ), f = F(
    () => JSON.stringify(e.currentSortings),
    [e.currentSortings]
  ), u = F(
    () => JSON.stringify(e.currentGrouping),
    [e.currentGrouping]
  ), h = F(
    () => JSON.stringify(e.currentSearch),
    [e.currentSearch]
  ), m = F(
    () => JSON.stringify(e.grouping),
    [e.grouping]
  ), g = F(
    () => JSON.stringify(e.dataAdapter),
    [e.dataAdapter]
  );
  return {
    lanesProvider: F(
      () => (r || []).map((v) => /* @__PURE__ */ i(
        bg,
        {
          lane: v,
          onError: t.onError,
          source: e,
          onHookUpdate: (y) => s(v.id, y)
        },
        v.id
      )),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        // TODO check why source ref is updated always
        l,
        s,
        c,
        d,
        f,
        u,
        h,
        m,
        g
        // Include dataAdapter to detect cache updates
      ]
    ),
    lanesHooks: a
  };
}
const wg = (e) => {
  const t = Array.from(e.values());
  return {
    allSelected: t.every((r) => r.allSelected),
    itemsStatus: t.flatMap((r) => r.itemsStatus),
    groupsStatus: t.reduce(
      (r, n) => ({
        ...r,
        ...n.groupsStatus
      }),
      {}
    ),
    filters: t.reduce(
      (r, n) => ({
        ...r,
        ...n.filters
      }),
      {}
    ),
    selectedCount: t.reduce(
      (r, n) => r + n.selectedCount,
      0
    ),
    selectedIds: t.flatMap((r) => r.selectedIds)
  };
}, xg = (e) => {
  const t = Mt({
    data: e.data || { type: "flat", records: [], groups: [] },
    paginationInfo: e.paginationInfo,
    source: e.source,
    onSelectItems: e.onSelectItems,
    selectedState: e.source.defaultSelectedItems
  });
  return K(() => {
    e.onHookUpdate(t);
  }, [t]), null;
}, Cg = (e, t, r) => {
  const [n, a] = M(/* @__PURE__ */ new Map()), [o, s] = M({ selectItemsStatus: /* @__PURE__ */ new Map(), clearCallback: /* @__PURE__ */ new Map() }), l = oe(() => {
    o.clearCallback.forEach((d) => d());
  }, [o.clearCallback]);
  K(() => {
    const d = Object.fromEntries(
      o.selectItemsStatus
    );
    r?.(
      {
        ...wg(
          o.selectItemsStatus
        ),
        byLane: d
      },
      l
    );
  }, [o]);
  const c = F(() => (e || []).map((d) => /* @__PURE__ */ i(
    xg,
    {
      source: t,
      data: d.data || { type: "flat", records: [], groups: [] },
      paginationInfo: d.paginationInfo,
      onHookUpdate: (f) => a((u) => new Map(u).set(d.id, f)),
      onSelectItems: (f, u) => {
        s((h) => ({
          selectItemsStatus: new Map(h.selectItemsStatus).set(
            d.id,
            f
          ),
          clearCallback: new Map(h.clearCallback).set(d.id, u)
        }));
      }
    },
    d.id
  )), [JSON.stringify(e)]);
  return {
    lanesUseSelectable: n,
    lanesSelectProvider: c
  };
}, Sg = 5;
function _g(e) {
  if (!e.length)
    return;
  if (e.length === 1 && e[0] && // checking to see if `classNames[0]` is a string that contains other classnames
  !e[0].includes(" "))
    return e[0];
  const t = {};
  for (const n of e) {
    if (!n)
      continue;
    const a = n.split(" ");
    for (const o of a) {
      const s = o.startsWith("_") ? o.slice(0, Sg) : o;
      t[s] = o;
    }
  }
  let r = "";
  for (const n in t)
    r += t[n] + " ";
  if (r)
    return r.trimEnd();
}
var Bl = {
  default: "var(--ds-border-selected, #1868DB)",
  warning: "var(--ds-border-warning, #E06C00)"
}, Ng = "var(--ds-border-width-selected, 2px)", Dg = {
  top: "horizontal",
  bottom: "horizontal",
  left: "vertical",
  right: "vertical"
}, Tg = {
  root: "_1e0c1ule _kqswstnw _1pbykb7n _lcxvglyw _bfhkys7w _rfx31ssb _3l8810ly _kzdanqa1 _15m6ys7w _cfu11ld9 _1kt9b3bt _1cs8stnw _13y0usvi _1mp4vjfa _kfgtvjfa"
}, Ag = {
  horizontal: "_4t3i10ly _1e02fghn _rjxpidpf _z5wtuj5p",
  vertical: "_1bsb10ly _154ifghn _94n5idpf _1aukuj5p"
}, Og = {
  top: "_154ihv0e _1auk70hn",
  right: "_1xi2hv0e _ooun70hn",
  bottom: "_94n5hv0e _19wo70hn",
  left: "_1ltvhv0e _qnec70hn"
}, Ig = {
  // - half the terminal bleeding out the containing element
  // - half the terminal inside the containing element (we need to position the line next to this)
  terminal: function(t) {
    var r = t.indent;
    return "calc(var(--terminal-radius) + ".concat(r, ")");
  },
  // The full terminal is inside the containing element (we need to position the line next to this)
  "terminal-no-bleed": function(t) {
    var r = t.indent;
    return "calc(var(--terminal-diameter) + ".concat(r, ")");
  },
  // No terminal to worry about, line should take up all the space
  "no-terminal": function(t) {
    var r = t.indent;
    return r;
  }
};
function kg(e) {
  var t = e.edge, r = e.gap, n = r === void 0 ? "0px" : r, a = e.indent, o = a === void 0 ? "0px" : a, s = e.strokeColor, l = s === void 0 ? Bl.default : s, c = e.strokeWidth, d = c === void 0 ? Ng : c, f = e.type, u = f === void 0 ? "terminal" : f, h = Dg[t];
  return /* @__PURE__ */ De.createElement("div", {
    style: {
      // ## All
      "--stroke-color": l,
      "--stroke-width": d,
      // Shift line and terminal on the main access to account for gaps between items
      "--main-axis-offset": "calc(-0.5 * (".concat(n, " + var(--stroke-width)))"),
      // ## Line
      // If there is a terminal, we want the line to start from next to it
      "--line-main-axis-start": Ig[u]({
        indent: o
      }),
      // ## Terminal
      "--terminal-display": u === "no-terminal" ? "none" : "block",
      "--terminal-diameter": "calc(var(--stroke-width) * 4)",
      "--terminal-radius": "calc(var(--terminal-diameter) / 2)",
      // The line is positioned to account for the the terminal (--line-main-axis-start).
      // The terminal is rendered relative to the line (it's a `::before`)
      // We need to pull the terminal backwards so it sits before the start of the line
      "--terminal-main-axis-start": "calc(-1 * var(--terminal-diameter))",
      // Pull the terminal backwards on the cross axis (eg "up" on "vertical")
      // so the center of the terminal lines up with the center of the line
      "--terminal-cross-axis-offset": "calc(calc(var(--stroke-width) - var(--terminal-diameter)) / 2)"
    },
    className: _g([Tg.root, Ag[h], Og[t]])
  });
}
function Rg(e) {
  var t = e.appearance, r = t === void 0 ? "default" : t, n = e.edge, a = e.gap, o = e.indent, s = e.type;
  return /* @__PURE__ */ ca.createElement(kg, {
    edge: n,
    gap: a,
    strokeColor: Bl[r],
    type: s,
    indent: o
  });
}
const Eg = 'button, a[href], input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], [role="option"], [role="radio"], [role="switch"]', Lg = (e) => e instanceof HTMLElement ? !!e.closest(Eg) : !1;
function Fg({
  drag: e,
  id: t,
  index: r,
  total: n,
  laneId: a,
  draggable: o = !1,
  showIndicator: s = !0,
  disabledEdges: l = [],
  forcedEdge: c = null,
  ...d
}) {
  const f = V(null), u = V(null), [h, m] = M(null);
  Ch({
    ref: f,
    payload: { kind: e.type ?? "list-card", id: e.id, data: e.data }
  }), K(() => {
    if (f.current)
      return jt({
        element: f.current,
        getData: ({ input: y, element: b }) => Xs(
          { type: "list-card-target", id: t, index: r, laneId: a },
          {
            input: y,
            element: b,
            allowedEdges: ["top", "bottom"]
          }
        ),
        onDragEnter: ({ self: y, source: b }) => {
          if (b?.data?.id === t) {
            m(null);
            return;
          }
          const x = Pt(y.data);
          m(x === "top" || x === "bottom" ? x : null);
        },
        onDrag: ({ self: y, source: b }) => {
          if (b?.data?.id === t) {
            m(null);
            return;
          }
          const x = Pt(y.data);
          m(x === "top" || x === "bottom" ? x : null);
        },
        onDragLeave: () => m(null),
        onDrop: () => m(null)
      });
  }, [t, r, a]);
  const g = r === 0, p = r === n - 1, v = (y) => {
    if (o && !Lg(y.target)) {
      if (d.onClick) {
        d.onClick(), y.preventDefault(), y.stopPropagation();
        return;
      }
      u.current && (u.current.click(), y.preventDefault(), y.stopPropagation());
    }
  };
  return /* @__PURE__ */ O(
    "div",
    {
      ref: f,
      className: I(
        "group relative my-1",
        o && "cursor-grab active:cursor-grabbing",
        g && "mt-1.5",
        p && "mb-1.5"
      ),
      "data-kanban-card": "true",
      "data-index": r,
      "data-lane-id": a,
      onClick: v,
      children: [
        /* @__PURE__ */ i(ld, { ...d, disableOverlayLink: o }),
        d.link && /* @__PURE__ */ i(
          bs,
          {
            ref: u,
            href: d.link,
            className: I(
              "!z-1 pointer-events-none absolute inset-0 block rounded-xl",
              Ee()
            ),
            "aria-label": d.title,
            children: " "
          }
        ),
        s && (c ?? h) && /* @__PURE__ */ i(te, { children: (() => {
          const y = c ?? h;
          return l.includes(y) ? null : /* @__PURE__ */ i(
            Rg,
            {
              edge: y,
              type: "terminal-no-bleed",
              gap: "4px"
            }
          );
        })() })
      ]
    }
  );
}
const jg = ({
  label: e,
  variant: t,
  count: r,
  onPrimaryAction: n
}) => /* @__PURE__ */ O("div", { className: "flex items-center gap-2 px-1 pb-0.5 pt-2", children: [
  /* @__PURE__ */ i(cd, { text: e, variant: t || "neutral" }),
  /* @__PURE__ */ i(dd, { size: "md", type: "default", value: r }),
  !!n && /* @__PURE__ */ i("div", { className: "ml-auto flex items-center gap-1 pr-1", children: /* @__PURE__ */ i(
    ne,
    {
      variant: "ghost",
      size: "sm",
      label: "Add",
      icon: ys,
      hideLabel: !0,
      onClick: n
    }
  ) })
] }), ra = ce(
  ({ showPlaceholders: e = !0, count: t = 3 }, r) => /* @__PURE__ */ i("div", { ref: r, className: "space-y-1", "aria-hidden": !e, children: e && Array.from({ length: t }).map((n, a) => /* @__PURE__ */ i(la.Skeleton, { compact: !0 }, a)) })
);
ra.displayName = "LoadingSkeleton";
function Pg({
  title: e,
  items: t,
  renderCard: r,
  getKey: n,
  emptyState: a,
  fetchMore: o,
  variant: s = "neutral",
  loading: l = !1,
  hasMore: c = !1,
  loadingMore: d = !1,
  total: f,
  onPrimaryAction: u,
  onFooterAction: h,
  dropPlaceholderIndex: m
}) {
  const g = {
    type: "infinite-scroll",
    cursor: null,
    hasMore: c,
    total: t.length + (c ? 1 : 0),
    perPage: 3
  }, { loadingIndicatorRef: p } = xa(
    g,
    l,
    d,
    o ?? (() => {
    })
  ), v = !!h;
  return /* @__PURE__ */ O("div", { className: "shadow-sm group relative flex h-full w-[323.2px] flex-col", children: [
    /* @__PURE__ */ i(
      jg,
      {
        label: e || "Lane",
        variant: s,
        count: f ?? t.length,
        onPrimaryAction: u
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        className: I(
          "relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1",
          (v || t.length === 0) && "pb-11",
          !v && t.length === 0 && m !== void 0 && "pb-1"
        ),
        children: l ? /* @__PURE__ */ O(
          Et,
          {
            className: I(
              "relative h-full flex-1 rounded-lg",
              l && "select-none opacity-50 transition-opacity"
            ),
            children: [
              /* @__PURE__ */ i(ra, {}),
              /* @__PURE__ */ i(Ne, { children: /* @__PURE__ */ i(
                ee.div,
                {
                  className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  children: /* @__PURE__ */ i(kt, {})
                }
              ) })
            ]
          }
        ) : t.length === 0 && m === void 0 ? a : /* @__PURE__ */ O(te, { children: [
          /* @__PURE__ */ i(Et, { className: "relative h-full flex-1", children: /* @__PURE__ */ O(
            "div",
            {
              className: I(
                "relative",
                d && "select-none opacity-50 transition-opacity"
              ),
              "aria-live": d ? "polite" : void 0,
              "aria-busy": d ? "true" : void 0,
              children: [
                t.length === 0 && m !== void 0 ? /* @__PURE__ */ i("div", { className: "relative my-1 mt-1.5", children: /* @__PURE__ */ i(la.Skeleton, { compact: !0 }) }) : t.map((y, b) => {
                  const x = n(y, b);
                  return /* @__PURE__ */ i(ca.Fragment, { children: r(y, b) }, x);
                }),
                (d || c) && /* @__PURE__ */ i(ra, { ref: p })
              ]
            }
          ) }),
          d && /* @__PURE__ */ i(Ne, { children: /* @__PURE__ */ i(
            ee.div,
            {
              className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: /* @__PURE__ */ i(kt, {})
            }
          ) })
        ] })
      }
    ),
    v && /* @__PURE__ */ i("div", { className: "pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100", children: /* @__PURE__ */ i(
      vt,
      {
        variant: "ghost",
        size: "md",
        className: "w-full justify-center",
        icon: ys,
        label: "Add",
        hideLabel: !0,
        onClick: h
      }
    ) })
  ] });
}
function qg(e, t) {
  const r = t.find(
    (a) => a.data.type === "list-droppable" && a.data.id === e
  ), n = t.find(
    (a) => a.data.type === "list-card-target"
  );
  return r ? n && n.data ? { type: "sameLaneOverCard", laneTarget: r, cardTarget: n } : { type: "sameLaneOverEmptySpace", laneTarget: r, cardTarget: void 0 } : n && n.data ? { type: "differentLaneOverCard", laneTarget: void 0, cardTarget: n } : {
    type: "differentLaneOverEmptySpace",
    laneTarget: void 0,
    cardTarget: void 0
  };
}
function Mg(e) {
  const {
    cardTarget: t,
    fromLaneId: r,
    toLaneId: n,
    sourceId: a
  } = e, o = Number(t.data.index), s = Pt(t.data);
  return {
    fromLaneId: r,
    toLaneId: n,
    sourceId: a,
    position: s === "bottom" ? "below" : "above",
    indexOfTarget: o
  };
}
function zg(e) {
  const {
    fromLaneId: t,
    toLaneId: r,
    sourceId: n
  } = e;
  return {
    fromLaneId: t,
    toLaneId: r,
    sourceId: n,
    indexOfTarget: null,
    position: null
  };
}
function Hg(e) {
  const { cardTarget: t, fromLaneId: r, toLaneId: n, sourceId: a } = e, o = Number(t.data.index), s = Pt(t.data);
  return {
    fromLaneId: r,
    toLaneId: n,
    sourceId: a,
    position: s === "bottom" ? "below" : "above",
    indexOfTarget: o
  };
}
function $g(e) {
  const { fromLaneId: t, toLaneId: r, sourceId: n } = e;
  return {
    fromLaneId: t,
    toLaneId: r,
    sourceId: n,
    indexOfTarget: null,
    position: null
  };
}
function Gg({
  id: e,
  getLaneResourceIndexById: t,
  onMove: r,
  ...n
}) {
  const a = V(null), o = V(null), s = V(null), [l, c] = M(!1), [d, f] = M(null), u = !!(e && t), h = V(null), m = V(null), g = V(null), p = V(0), v = V(null), [y, b] = M(!1), [x, S] = M(null), [N, w] = M(null), [_, T] = M(!1), [A, E] = M(-1);
  return Sh(
    u ? {
      ref: a,
      id: e,
      accepts: ["list-card"]
    } : void 0
  ), K(() => {
    const k = () => {
      const C = performance.now(), D = v.current ?? C, q = (C - D) / 1e3;
      v.current = C;
      const L = m.current;
      if (!y || p.current === 0) {
        g.current != null && (window.cancelAnimationFrame(g.current), g.current = null), v.current = null;
        return;
      }
      L && (L.scrollTop += p.current * q), g.current = window.requestAnimationFrame(k);
    };
    return g.current == null && y && p.current !== 0 && (v.current = null, g.current = window.requestAnimationFrame(k)), () => {
      g.current != null && (window.cancelAnimationFrame(g.current), g.current = null), v.current = null, p.current = 0;
    };
  }, [y]), K(() => {
    if (!e) return;
    const k = () => {
      g.current == null && p.current !== 0 && (v.current = null, g.current = window.requestAnimationFrame(() => {
        const D = performance.now();
        v.current = D, g.current = window.requestAnimationFrame(function q() {
          const L = v.current ?? performance.now(), z = performance.now(), W = (z - L) / 1e3;
          v.current = z;
          const H = m.current;
          if (!y || p.current === 0) {
            g.current != null && (window.cancelAnimationFrame(g.current), g.current = null);
            return;
          }
          H && (H.scrollTop += p.current * W), g.current = window.requestAnimationFrame(q);
        });
      }));
    }, C = (D) => qg(e, D);
    return Ys({
      onDropTargetChange: ({ location: D, source: q }) => {
        const L = D.current.dropTargets.some((R) => {
          const P = R.data;
          return P.type === "list-droppable" && P.id === e;
        });
        c(L);
        const z = String(q.data.id), H = String(
          q.data.data?.laneId ?? ""
        ) || String(
          D.initial.dropTargets.find(
            (R) => R.data.type === "list-droppable"
          )?.data?.id ?? ""
        ), U = String(H) === String(e), Y = n.items.findIndex((R, P) => String(n.getKey(R, P)) === z);
        if (L && U ? E(Y) : (!L || !U) && E(-1), L && y && n.items.length === 0 ? (T(!0), S(null), w(null)) : L && y && n.items.length > 0 && T(!1), L && y) {
          const R = m.current || a.current;
          if (R) {
            const P = R.getBoundingClientRect(), $ = D.current.input?.clientY, B = D.current.input?.clientX;
            if (typeof $ == "number" && typeof B == "number") {
              const J = P.top + P.height / 2, Q = $ - J, ie = 24, se = 300, pe = P.height / 2;
              let xe = 0;
              if (Math.abs(Q) > ie) {
                const ve = Math.min(
                  Math.abs(Q) - ie,
                  pe
                ) / pe;
                xe = Math.sign(Q) * se * ve;
              }
              if (p.current = xe, k(), D.current.dropTargets.some((Ae) => Ae.data.type === "list-card-target"))
                (x !== null || N !== null) && (S(null), w(null));
              else {
                const Ae = a.current;
                if (Ae) {
                  const ve = Array.from(
                    Ae.querySelectorAll(
                      `[data-kanban-card="true"][data-lane-id="${e}"]`
                    )
                  );
                  if (ve.length > 0) {
                    let ye = -1, ze = Number.POSITIVE_INFINITY, Ce = "top";
                    for (const Oe of ve) {
                      const we = Oe.getAttribute("data-index"), le = we ? Number(we) : -1, He = Oe.getBoundingClientRect(), Be = He.top + He.height / 2, Ve = Math.abs($ - Be);
                      Ve < ze && (ze = Ve, ye = le, Ce = $ < Be ? "top" : "bottom");
                    }
                    U && Y >= 0 && // 1. Above itself
                    (ye === Y && Ce === "top" || // 2. Below itself
                    ye === Y && Ce === "bottom" || // 3. Below the card above (stays in same position)
                    ye === Y - 1 && Ce === "bottom" || // 4. Above the card below (stays in same position)
                    ye === Y + 1 && Ce === "top") ? (S(null), w(null)) : (S(ye >= 0 ? ye : null), w(ye >= 0 ? Ce : null));
                  }
                }
              }
            }
          }
        } else
          p.current = 0, L || (S(null), w(null), T(!1), E(-1));
      },
      onDrop: async ({ location: D, source: q }) => {
        c(!1), T(!1);
        const L = String(q.data.id);
        q.data.data;
        const z = n.items.findIndex((B, J) => String(n.getKey(B, J)) === L), H = String(
          q.data.data?.laneId ?? ""
        ) || String(
          D.initial.dropTargets.find(
            (B) => B.data.type === "list-droppable"
          )?.data?.id ?? ""
        ), U = String(H) !== String(e);
        if (!U && z >= 0) {
          const B = D.current.dropTargets.find((J) => J.data.type === "list-card-target");
          if (B) {
            const J = B.data.index, Q = B.data.closestEdge;
            if (J !== void 0 && Q) {
              let ie = !1;
              if ((J === z || J === z - 1 && Q === "bottom" || J === z + 1 && Q === "top") && (ie = !0), ie)
                return;
            }
          }
        }
        if (!U && x !== null && N !== null && (x === z && N === "top" || x === z && N === "bottom" || x === z - 1 && N === "bottom" || x === z + 1 && N === "top")) {
          S(null), w(null);
          return;
        }
        if (!D.current.dropTargets.some((B) => {
          const J = B.data;
          return J.type === "list-droppable" && J.id === e;
        }))
          return;
        let R = null;
        const { type: P, cardTarget: $ } = C(
          D.current.dropTargets
        );
        if (U ? $ && $.data ? R = Hg({
          cardTarget: $,
          fromLaneId: H,
          toLaneId: e,
          sourceId: L
        }) : x !== null && N ? R = {
          fromLaneId: H,
          toLaneId: e,
          sourceId: L,
          indexOfTarget: x,
          position: N === "bottom" ? "below" : "above"
        } : R = $g({
          fromLaneId: H,
          toLaneId: e,
          sourceId: L
        }) : P === "sameLaneOverCard" && $ && $.data ? R = Mg({
          cardTarget: $,
          fromLaneId: H,
          toLaneId: e,
          sourceId: L
        }) : x !== null && N ? R = {
          fromLaneId: H,
          toLaneId: e,
          sourceId: L,
          indexOfTarget: x,
          position: N === "bottom" ? "below" : "above"
        } : R = zg({
          fromLaneId: H,
          toLaneId: e,
          sourceId: L
        }), !!R) {
          if (!U && R.indexOfTarget !== void 0) {
            const B = R.indexOfTarget, J = R.position;
            if (B === z && J === "above" || B === z && J === "below" || B === z - 1 && J === "below" || B === z + 1 && J === "above")
              return;
          }
          await r?.(R), S(null), w(null);
        }
      }
    });
  }, [
    e,
    t,
    r,
    y,
    n.items,
    n.getKey,
    x,
    N
  ]), K(() => {
    const k = () => {
      const q = a.current;
      return q ? (m.current = q.querySelector(
        "[data-scroll-container]"
      ), m.current) : null;
    };
    k();
    const C = a.current;
    if (!C) return;
    const D = new MutationObserver(() => {
      k();
    });
    return D.observe(C, { subtree: !0, childList: !0 }), () => D.disconnect();
  }, [e]), Qs(({ phase: k }) => {
    k === "start" && b(!0), (k === "drop" || k === "cancel") && (b(!1), T(!1), S(null), w(null), E(-1));
  }), K(() => {
    const k = (C) => {
      if (!e) return;
      const D = C.detail;
      D && D.toLaneId === e && r?.(D).catch(() => {
      });
    };
    return window.addEventListener("kanban-test-move", k), () => window.removeEventListener("kanban-test-move", k);
  }, [e, r]), Ze(() => {
    const k = s.current, C = o.current;
    if (!k || !C) return;
    let D = null, q = null;
    const L = () => {
      const U = C.parentElement?.parentElement;
      if (!U) return;
      const Y = U.offsetHeight, R = C.style.height;
      C.style.height = "auto", k.offsetHeight;
      const P = k.scrollHeight;
      C.style.height = R;
      let $;
      Y < 100 ? $ = Math.max(P, 400) : $ = Math.min(P, Y), (q === null || Math.abs($ - q) > 1) && (q = $, f($));
    };
    L();
    const z = () => {
      D !== null && cancelAnimationFrame(D), D = requestAnimationFrame(() => {
        L(), D = null;
      });
    }, W = new ResizeObserver(z);
    W.observe(k);
    const H = C.parentElement?.parentElement;
    return H && W.observe(H), () => {
      D !== null && cancelAnimationFrame(D), W.disconnect();
    };
  }, [n.items.length, n.loading, _]), /* @__PURE__ */ i(
    "div",
    {
      ref: o,
      className: "relative rounded",
      style: {
        height: d ? `${d}px` : void 0
      },
      children: /* @__PURE__ */ O(
        "div",
        {
          ref: a,
          className: "relative flex h-full w-full flex-col gap-0 rounded-xl border transition-colors",
          style: {
            backgroundColor: l ? "hsla(210, 91%, 22%, 0.08)" : "hsla(210, 91%, 22%, 0.02)"
          },
          children: [
            /* @__PURE__ */ i(
              "div",
              {
                ref: h,
                className: I(
                  "pointer-events-none absolute inset-0 z-[1]",
                  "bg-transparent"
                ),
                "aria-hidden": !0
              }
            ),
            /* @__PURE__ */ i("div", { ref: s, className: "flex h-full flex-col", children: /* @__PURE__ */ i(
              Pg,
              {
                ...n,
                dropPlaceholderIndex: _ && n.items.length === 0 ? 0 : void 0,
                renderCard: (k, C) => {
                  const D = n.renderCard(k, C);
                  if (Nd(D)) {
                    const q = C === x ? N : null, L = [];
                    return A >= 0 && (C === A ? L.push("top", "bottom") : C === A - 1 ? L.push("bottom") : C === A + 1 && L.push("top")), Dd(
                      D,
                      {
                        forcedEdge: q,
                        disabledEdges: L
                      }
                    );
                  }
                  return D;
                }
              }
            ) })
          ]
        }
      )
    }
  );
}
function Xo(e) {
  const { lanes: t, renderCard: r, getKey: n, className: a, dnd: o, loading: s, onCreate: l } = e, [c, d] = M(
    () => t
  ), f = V(""), u = V(null);
  K(() => {
    const w = t.map(
      (_) => `${_.id}:[${_.items.map((T, A) => n(T, A, _.id)).join(",")}]`
    ).join("|");
    if (u.current !== null)
      if (w === u.current)
        u.current = null, f.current = w, d(t);
      else
        return;
    else w !== f.current && (f.current = w, d(t));
  }, [t, n, c]);
  const [h, m] = M(!1), g = V(null), p = V(null), v = V(null), y = V(null), b = V(0), x = V(null);
  Qs(({ phase: w }) => {
    w === "start" && m(!0), (w === "drop" || w === "cancel") && m(!1);
  }), K(() => {
    const w = () => {
      const E = performance.now(), k = x.current ?? E, C = (E - k) / 1e3;
      x.current = E;
      const D = v.current;
      if (!h || !D || b.current === 0) {
        y.current != null && (window.cancelAnimationFrame(y.current), y.current = null), x.current = null;
        return;
      }
      D.scrollLeft += b.current * C, y.current = window.requestAnimationFrame(w);
    }, _ = (E) => {
      b.current = E, y.current == null && (x.current = null, y.current = window.requestAnimationFrame(w));
    }, T = () => {
      b.current = 0, y.current != null && (window.cancelAnimationFrame(y.current), y.current = null), x.current = null;
    }, A = [];
    return g.current && A.push(
      jt({
        element: g.current,
        getData: () => ({ type: "board-scroll-edge", edge: "left" }),
        onDragEnter: () => _(-400),
        onDrag: () => _(-400),
        onDragLeave: () => T(),
        onDrop: () => T()
      })
    ), p.current && A.push(
      jt({
        element: p.current,
        getData: () => ({ type: "board-scroll-edge", edge: "right" }),
        onDragEnter: () => _(400),
        onDrag: () => _(400),
        onDragLeave: () => T(),
        onDrop: () => T()
      })
    ), () => {
      A.forEach((E) => E()), T();
    };
  }, [h]);
  const S = (w, _) => {
    const T = c.find((A) => A.id === w);
    return T ? T.items.findIndex((A, E) => String(n(A, E, w)) === String(_)) : -1;
  }, N = async (w) => {
    const { fromLaneId: _, toLaneId: T, sourceId: A, indexOfTarget: E, position: k } = w, C = c;
    let D = C.findIndex((R) => R.id === _);
    const q = C.findIndex((R) => R.id === T);
    if (q === -1) return Promise.reject(new Error("Lane not found"));
    let L = -1;
    if (D !== -1 && (L = C[D].items.findIndex((R, P) => String(n(R, P, _)) === String(A))), L === -1)
      for (let R = 0; R < C.length; R++) {
        const P = C[R].id, $ = C[R].items.findIndex((B, J) => String(n(B, J, P)) === String(A));
        if ($ !== -1) {
          D = R, L = $;
          break;
        }
      }
    if (D === -1 || L === -1)
      return Promise.resolve(void 0);
    const z = C[D].items[L];
    let W = 0;
    E == null ? W = 0 : W = E + (k === "below" ? 1 : 0);
    const H = _ === T, U = C.map((R, P) => {
      if (P === D && H) {
        const $ = [...R.items];
        $.splice(L, 1);
        const B = L < W ? W - 1 : W;
        return $.splice(B, 0, z), { ...R, items: $ };
      }
      if (P === D) {
        const $ = [...R.items];
        $.splice(L, 1);
        const B = typeof R.total == "number" && !H ? Math.max(0, R.total - 1) : R.total;
        return { ...R, items: $, total: B };
      }
      if (P === q) {
        const $ = [...R.items], B = Math.max(0, Math.min(W, $.length));
        $.splice(B, 0, z);
        const J = typeof R.total == "number" && !H ? R.total + 1 : R.total;
        return { ...R, items: $, total: J };
      }
      return R;
    });
    d(U);
    const Y = U.map(
      (R) => `${R.id}:[${R.items.map((P, $) => n(P, $, R.id)).join(",")}]`
    ).join("|");
    u.current = Y, f.current = Y;
    try {
      const R = E == null ? null : C[q].items[E], P = await o?.onMove?.(
        _,
        T,
        z,
        R ? {
          record: R,
          position: k ?? "above"
        } : null
      );
      return P && d(($) => {
        const B = $.map((Q) => {
          if (Q.id !== T) return Q;
          const ie = [...Q.items], se = ie.findIndex((pe, xe) => String(n(pe, xe, T)) === String(A));
          return se !== -1 && ie.splice(se, 1, P), { ...Q, items: ie };
        }), J = B.map(
          (Q) => `${Q.id}:[${Q.items.map((ie, se) => n(ie, se, Q.id)).join(",")}]`
        ).join("|");
        return f.current = J, B;
      }), P;
    } catch (R) {
      throw d(C), u.current = null, R;
    }
  };
  return /* @__PURE__ */ O("div", { className: I("relative h-full w-full px-4", a), children: [
    /* @__PURE__ */ i(
      Et,
      {
        className: "relative h-full w-full [&>div>div]:h-full",
        viewportRef: v,
        children: /* @__PURE__ */ i("div", { className: "relative mb-2 flex h-full items-start gap-2", children: c.map(
          (w, _) => {
            const T = w.total ?? w.items.length;
            return /* @__PURE__ */ i(
              "div",
              {
                className: "relative shrink-0",
                "data-testid": `lane-${w.id ?? String(_)}`,
                children: /* @__PURE__ */ i(
                  Gg,
                  {
                    id: w.id,
                    getLaneResourceIndexById: w.id ? (A) => S(w.id, A) : void 0,
                    onMove: N,
                    title: w.title,
                    items: w.items,
                    getKey: (A, E) => n(A, E, w.id),
                    renderCard: (A, E) => r(A, E, T, w.id),
                    emptyState: w.emptyState,
                    loading: s || w.loading,
                    variant: w.variant,
                    total: T,
                    hasMore: w.hasMore,
                    loadingMore: w.loadingMore,
                    fetchMore: w.fetchMore,
                    onPrimaryAction: l && w.id ? () => l(w.id) : void 0,
                    onFooterAction: l && w.id ? () => l(w.id) : void 0
                  }
                )
              },
              w.id ?? String(_)
            );
          }
        ) })
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        ref: g,
        className: I(
          "pointer-events-none absolute left-0 top-0 z-[9999] h-full w-12 select-none",
          h ? "pointer-events-auto" : "opacity-0"
        ),
        "aria-hidden": !0
      }
    ),
    /* @__PURE__ */ i(
      "div",
      {
        ref: p,
        className: I(
          "pointer-events-none absolute right-0 top-0 z-[9999] h-full w-12 select-none",
          h ? "pointer-events-auto" : "opacity-0"
        ),
        "aria-hidden": !0
      }
    )
  ] });
}
const Bg = ({
  lanes: e,
  title: t,
  description: r,
  avatar: n,
  metadata: a,
  onMove: o,
  onCreate: s,
  source: l,
  onSelectItems: c,
  onLoadError: d,
  onLoadData: f
}) => {
  const { lanesProvider: u, lanesHooks: h } = yg(l, {
    onError: (C) => d(C)
  }), m = ud();
  if (l.currentGrouping && m)
    throw new Error("Grouping is not supported in Kanban yet");
  const [g] = M(() => /* @__PURE__ */ Symbol("kanban-visualization")), p = l.idProvider, v = F(() => JSON.stringify(
    Object.values(h).map((C) => C.data)
  ), [h]), y = F(() => e.map((C) => ({
    ...C,
    items: h[C.id]?.data?.records || []
  })), [v]), b = (C) => C.map(
    ({ icon: D, tooltip: q, property: L }) => L.type === "file" ? { property: L } : { icon: D, tooltip: q, property: L }
  ), x = (C) => !!(C && C.type === "infinite-scroll"), S = {
    lanes: y.map((C) => {
      const D = h[C.id], q = D?.paginationInfo?.total, L = x(D?.paginationInfo) && D?.paginationInfo?.hasMore;
      return {
        id: C.id,
        title: C.title,
        items: C.items,
        variant: C.variant,
        total: q,
        hasMore: L,
        loading: D?.isLoading || !1,
        loadingMore: D?.isLoadingMore || !1,
        fetchMore: L ? () => D.loadMore() : void 0
      };
    }),
    loading: Object.values(h).some(
      (C) => C.isInitialLoading
    ),
    getKey: (C, D) => {
      if (p) return String(p(C, D));
      const q = C?.id;
      return q != null ? String(q) : String(D);
    },
    renderCard: (C, D, q, L) => {
      const z = String(
        p ? p(C, D) : C?.id ?? D
      ), W = l.selectable ? l.selectable(C) : C.id, H = k && L ? k.get(L) : void 0, U = (typeof W == "string" || typeof W == "number") && H && H?.selectedItems.has(W), Y = l.itemUrl ? l.itemUrl(C) : void 0, R = l.itemOnClick ? l.itemOnClick(C) : void 0;
      return /* @__PURE__ */ i(
        Fg,
        {
          drag: { id: z, type: "list-card", data: { ...C, laneId: L } },
          id: String(C.id),
          index: D,
          total: q,
          laneId: L,
          showIndicator: _,
          title: t ? t(C) : String(D),
          description: r ? r(C) : void 0,
          avatar: n ? n(C) : void 0,
          draggable: o !== void 0,
          metadata: a ? b(a(C)) : void 0,
          compact: !0,
          forceVerticalMetadata: !0,
          selectable: l.selectable !== void 0,
          selected: U,
          "data-testid": `kanban-card-${String(C.id)}`,
          onSelect: (P) => {
            H && H.handleSelectItemChange(C, P);
          },
          onClick: R,
          link: Y
        },
        z
      );
    },
    onCreate: s
  }, N = F(() => {
    const C = Object.values(h);
    if (C.length !== 0)
      return C.reduce((D, q) => {
        const L = q.paginationInfo?.total ?? q.data.records.length;
        return D + (typeof L == "number" ? L : 0);
      }, 0);
  }, [h]), w = F(() => {
    const C = Object.values(h);
    return C.length === 0 ? !0 : C.some((D) => D.isInitialLoading);
  }, [h]);
  K(() => {
    f({
      totalItems: N,
      filters: l.currentFilters,
      search: l.currentSearch,
      isInitialLoading: w,
      data: Object.values(h).flatMap((C) => C.data.records)
    });
  }, [N, w]);
  const _ = l.currentSortings === null, T = F(() => {
    const C = /* @__PURE__ */ new Map();
    return y.forEach((D) => {
      const q = /* @__PURE__ */ new Map();
      D.items.forEach((L, z) => {
        const W = p ? p(L, z) : L?.id ?? z, H = String(W);
        q.set(H, z);
      }), C.set(D.id, q);
    }), C;
  }, [y, p]);
  S.dnd = {
    instanceId: g,
    getIndexById: (C, D) => {
      const q = T.get(C)?.get(D) ?? -1;
      return _ ? q : -1;
    },
    onMove: o
  };
  const A = F(() => e.map((C) => ({
    id: C.id,
    data: h[C.id]?.data || {
      type: "flat",
      records: [],
      groups: []
    },
    paginationInfo: h[C.id]?.paginationInfo || null
  })), [e, h]), { lanesSelectProvider: E, lanesUseSelectable: k } = Cg(A, l, (C, D) => {
    c?.(C, D);
  });
  return /* @__PURE__ */ O(te, { children: [
    u,
    E,
    o ? /* @__PURE__ */ i(xh, { driver: wh(g), children: /* @__PURE__ */ i(Xo, { ...S }) }) : /* @__PURE__ */ i(Xo, { ...S })
  ] });
}, Vg = ({ title: e, avatar: t, description: r }) => /* @__PURE__ */ O("article", { className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2", children: [
  t && /* @__PURE__ */ i(fd, { avatar: t, size: "md" }),
  /* @__PURE__ */ O("div", { className: "flex flex-1 flex-col gap-0.5", children: [
    /* @__PURE__ */ i("header", { children: /* @__PURE__ */ i("h3", { children: /* @__PURE__ */ i(It, { className: "text-base font-medium text-f1-foreground", children: e }) }) }),
    /* @__PURE__ */ i("aside", { children: r && r.length > 0 && /* @__PURE__ */ i("div", { className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1", children: r.map((n, a) => /* @__PURE__ */ O("div", { className: "flex min-w-0 gap-1", children: [
      /* @__PURE__ */ i(It, { children: n }),
      a < r.length - 1 && /* @__PURE__ */ i("span", { className: "hidden md:inline", children: " · " })
    ] }, a)) }) })
  ] })
] }), Kg = ({
  source: e,
  item: t,
  selectedItems: r,
  handleSelectItemChange: n,
  fields: a,
  itemDefinition: o
}) => {
  const s = ae(), { actions: l } = s, c = (b, x) => wt(b, x, "list", s), d = e.itemUrl ? e.itemUrl(t) : void 0, f = e.itemOnClick ? e.itemOnClick(t) : void 0, u = e.selectable ? e.selectable(t) : void 0, h = o(t), {
    primaryItemActions: m,
    dropdownItemActions: g,
    mobileDropdownItemActions: p,
    handleDropDownOpenChange: v,
    dropDownOpen: y
  } = Rl({ source: e, item: t });
  return /* @__PURE__ */ O(
    "div",
    {
      className: I(
        "relative flex min-h-[64px] w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4",
        "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            onClick: f,
            className: "pointer-events-auto absolute inset-0"
          }
        ),
        /* @__PURE__ */ O("div", { className: "pointer-events-none flex flex-1 flex-row items-center gap-2", children: [
          e.selectable && u !== void 0 && // z-10 is needed here to prevent the checkbox from not being selectable when itemHref is provided
          /* @__PURE__ */ i("div", { className: "pointer-events-auto z-10 hidden items-center justify-end md:flex", children: /* @__PURE__ */ i(
            Lt,
            {
              checked: r.has(u),
              onCheckedChange: (b) => n(t, b),
              title: `Select ${e.selectable(t)}`,
              hideLabel: !0
            }
          ) }),
          d && /* @__PURE__ */ i(
            bs,
            {
              href: d,
              className: "pointer-events-auto absolute inset-0 block",
              tabIndex: 0,
              onClick: f,
              children: /* @__PURE__ */ i("span", { className: "sr-only", children: l.view })
            }
          ),
          /* @__PURE__ */ i(
            Vg,
            {
              title: h.title,
              avatar: h.avatar,
              description: h.description
            }
          )
        ] }),
        /* @__PURE__ */ i("div", { className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end", children: (a || []).filter((b) => !b.hide?.(t)).map((b) => {
          const x = c(t, b);
          return x ? /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("div", { className: "flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap", children: x }) }, String(b.label)) : null;
        }) }),
        e.itemActions && /* @__PURE__ */ O(te, { children: [
          /* @__PURE__ */ i(
            kl,
            {
              dropDownOpen: y,
              className: "pointer-events-auto hidden md:flex",
              children: /* @__PURE__ */ i(
                El,
                {
                  primaryItemActions: m,
                  dropdownItemActions: g,
                  handleDropDownOpenChange: v
                }
              )
            }
          ),
          /* @__PURE__ */ i(
            Il,
            {
              className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
              items: p,
              onOpenChange: v
            }
          )
        ] }),
        e.selectable && u !== void 0 && /* @__PURE__ */ i(
          "div",
          {
            className: I(
              "pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
              e.itemActions && "right-12"
            ),
            children: /* @__PURE__ */ i(
              Lt,
              {
                checked: r.has(u),
                onCheckedChange: (b) => n(t, b),
                title: `Select ${e.selectable(t)}`,
                hideLabel: !0
              }
            )
          }
        )
      ]
    }
  );
}, Zo = ({
  source: e,
  items: t,
  selectedItems: r,
  handleSelectItemChange: n,
  fields: a,
  itemDefinition: o,
  isLoadingMore: s
}) => /* @__PURE__ */ i(
  "div",
  {
    className: I(
      "flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
      s && "rounded-b-none"
    ),
    children: t.map((l, c) => /* @__PURE__ */ i(
      Kg,
      {
        source: e,
        item: l,
        selectedItems: r,
        handleSelectItemChange: n,
        fields: a,
        itemDefinition: o
      },
      `row-${c}`
    ))
  }
), Qo = ({
  source: e,
  fields: t,
  count: r = 5,
  isInitialLoading: n,
  className: a
}) => /* @__PURE__ */ i(
  "div",
  {
    className: I(
      "relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary",
      n ? "mx-4 mt-2 rounded-t-xl" : "border-t-0",
      a
    ),
    children: Array.from({ length: r }).map((o, s) => /* @__PURE__ */ O(
      "div",
      {
        "data-testid": "skeleton-item",
        className: "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:pl-3 md:pr-4",
        children: [
          /* @__PURE__ */ O("div", { className: "flex flex-1 flex-row items-center gap-2", children: [
            e.selectable && /* @__PURE__ */ i("div", { className: "z-10 hidden items-center justify-end md:flex", children: /* @__PURE__ */ i(ue, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ O("article", { className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2", children: [
              /* @__PURE__ */ i(ue, { className: "h-8 w-8 rounded-full" }),
              /* @__PURE__ */ O("div", { className: "flex flex-1 flex-col gap-1", children: [
                /* @__PURE__ */ i("header", { children: /* @__PURE__ */ i(ue, { className: "h-5 w-32" }) }),
                /* @__PURE__ */ i("aside", { children: /* @__PURE__ */ O("div", { className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-2", children: [
                  /* @__PURE__ */ i(ue, { className: "h-4 w-20" }),
                  /* @__PURE__ */ i(ue, { className: "h-4 w-24" })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i("div", { className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end", children: t.map((l, c) => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("div", { className: "flex items-center justify-center px-0 py-1 md:p-3", children: /* @__PURE__ */ i(ue, { className: "h-4 w-20" }) }) }, `skeleton-field-${c}`)) }),
          e.itemActions && /* @__PURE__ */ i("div", { className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", children: /* @__PURE__ */ i(ue, { className: "h-6 w-6" }) }),
          e.selectable && /* @__PURE__ */ i(
            "div",
            {
              className: I(
                "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
                e.itemActions && "right-12"
              ),
              children: /* @__PURE__ */ i(ue, { className: "h-4 w-4" })
            }
          )
        ]
      },
      `skeleton-item-${s}`
    ))
  }
), Wg = ({
  fields: e,
  itemDefinition: t,
  source: r,
  onSelectItems: n,
  onLoadData: a,
  onLoadError: o,
  tmpFullWidth: s
}) => {
  const {
    data: l,
    paginationInfo: c,
    setPage: d,
    isInitialLoading: f,
    isLoadingMore: u,
    loadMore: h
  } = Wt(r, {
    onError: (A) => {
      o(A);
    }
  });
  K(() => {
    a({
      totalItems: c?.total || l.records.length,
      filters: r.currentFilters,
      search: r.currentSearch,
      isInitialLoading: f,
      data: l.records
    });
  }, [c?.total, l.records]);
  const { isLoading: m } = r, { loadingIndicatorRef: g } = xa(
    c,
    m,
    u,
    h
  ), {
    selectedItems: p,
    groupAllSelectedStatus: v,
    handleSelectItemChange: y,
    handleSelectGroupChange: b
  } = Mt({
    data: l,
    paginationInfo: c,
    source: r,
    onSelectItems: n,
    selectionMode: "multi",
    selectedState: r.defaultSelectedItems
  }), x = r.grouping?.collapsible, S = r.grouping?.defaultOpenGroups, { openGroups: N, setGroupOpen: w } = oa(
    l?.type === "grouped" ? l.groups : [],
    S
  );
  if (ea({
    value: f,
    delay: 100
  }))
    return /* @__PURE__ */ i(
      Qo,
      {
        source: r,
        fields: e,
        count: 30,
        isInitialLoading: !0
      }
    );
  r.sortings || e.forEach((A) => {
    A.sorting && console.warn(
      "Sorting is defined on a property but no sortings are provided in the data source"
    );
  });
  const T = f || m && r.dataAdapter.paginationType === "pages";
  return /* @__PURE__ */ O(
    "div",
    {
      className: I(
        "flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2",
        s && "px-0"
      ),
      children: [
        /* @__PURE__ */ i(
          "div",
          {
            className: I(
              "flex min-h-0 flex-1 flex-col gap-2",
              T && "select-none opacity-50 transition-opacity"
            ),
            "aria-live": T ? "polite" : void 0,
            "aria-busy": T ? "true" : void 0,
            children: /* @__PURE__ */ O("div", { className: "min-h-0 flex-1 overflow-auto pb-3", children: [
              l.type === "grouped" && l.groups.map((A, E) => {
                const k = A.itemCount;
                return /* @__PURE__ */ O(
                  "div",
                  {
                    className: "flex flex-col gap-0 pt-2 first:pt-0",
                    children: [
                      /* @__PURE__ */ i(
                        sa,
                        {
                          className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
                          selectable: !!r.selectable,
                          select: v[A.key]?.checked ? !0 : v[A.key]?.indeterminate ? "indeterminate" : !1,
                          onSelectChange: (C) => b(A, C),
                          showOpenChange: x,
                          label: A.label,
                          itemCount: k,
                          open: N[A.key],
                          onOpenChange: (C) => w(A.key, C)
                        },
                        `group-header-${A.key}`
                      ),
                      /* @__PURE__ */ i(Ne, { children: (!x || N[A.key]) && /* @__PURE__ */ i(
                        ee.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.1, ease: "easeInOut" },
                          className: "mt-0.5",
                          children: /* @__PURE__ */ i(
                            Zo,
                            {
                              source: r,
                              items: A.records,
                              selectedItems: p,
                              handleSelectItemChange: y,
                              fields: e,
                              itemDefinition: t,
                              isLoadingMore: u && E === l.groups.length - 1
                            },
                            `list-group-${A.key}`
                          )
                        }
                      ) })
                    ]
                  },
                  `group-header-${A.key}`
                );
              }),
              l?.type === "flat" && /* @__PURE__ */ i(
                Zo,
                {
                  source: r,
                  items: l.records,
                  selectedItems: p,
                  handleSelectItemChange: y,
                  fields: e,
                  itemDefinition: t,
                  isLoadingMore: u
                }
              ),
              Rt(c) && u && /* @__PURE__ */ i(Qo, { source: r, fields: e, count: 5 }),
              Rt(c) && c.hasMore && /* @__PURE__ */ i(
                "div",
                {
                  ref: g,
                  className: "w-full",
                  "aria-hidden": "true"
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ i(va, { paginationInfo: c, setPage: d })
      ]
    }
  );
}, xt = {
  table: {
    name: "Table",
    icon: gd,
    render: (e) => /* @__PURE__ */ i(
      Hl,
      {
        ...e
      }
    ),
    settings: {
      renderer: (e) => Wo({ ...e, visualizationKey: "table" }),
      resetHandler: (e) => e.setVisualizationSettings("table", {}),
      default: {}
    }
  },
  editableTable: {
    name: "Editable table",
    icon: pd,
    render: (e) => /* @__PURE__ */ i(
      mg,
      {
        ...e
      }
    ),
    settings: {
      renderer: (e) => Wo({ ...e, visualizationKey: "editableTable" }),
      resetHandler: (e) => e.setVisualizationSettings("editableTable", {}),
      default: {}
    }
  },
  list: {
    name: "List",
    icon: hd,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ i(
      Wg,
      {
        ...e
      }
    )
  },
  card: {
    name: "Card",
    icon: Oa,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ i(
      sp,
      {
        ...e
      }
    )
  },
  kanban: {
    name: "Kanban",
    icon: Oa,
    settings: {
      default: {}
    },
    render: (e) => /* @__PURE__ */ i(
      Bg,
      {
        ...e
      }
    )
  }
}, Ug = ({
  visualization: e,
  source: t,
  onSelectItems: r,
  onLoadData: n,
  onLoadError: a,
  tmpFullWidth: o
}) => {
  if (e.type === "custom")
    return e.component({
      source: t,
      onLoadData: n,
      onLoadError: a,
      onSelectItems: r
    });
  const s = xt[e.type];
  if (!s)
    throw new Error(`Visualization type ${e.type} not found`);
  return s.render({
    source: t,
    ...e.options,
    onSelectItems: r,
    onLoadData: n,
    onLoadError: a,
    tmpFullWidth: o
  });
}, Dt = "__no-sorting__", Yg = ({
  currentSortings: e,
  sortings: t,
  onChange: r
}) => {
  const n = ae(), a = [
    {
      label: n.collections.sorting.noSorting,
      value: Dt
    },
    ...Object.entries(t || {}).map(([c, d]) => ({
      label: d.label,
      value: c
    }))
  ], [o, s] = M(e);
  K(() => {
    s(e || {
      field: Dt,
      order: "asc"
    });
  }, [JSON.stringify(e)]);
  const l = (c) => {
    !c || c.field === Dt ? r(null) : r(c);
  };
  return /* @__PURE__ */ i("div", { className: "flex flex-col", children: /* @__PURE__ */ O("div", { className: "flex items-end gap-2", children: [
    /* @__PURE__ */ i("div", { className: "shrink grow [&_button]:h-8 [&_button]:rounded", children: /* @__PURE__ */ i(
      Ot,
      {
        label: n.collections.sorting.sortBy,
        options: a,
        value: o?.field,
        onChange: (c) => {
          l({
            field: c,
            order: o?.order ?? "asc"
          });
        }
      }
    ) }),
    o?.field !== Dt && /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
      ne,
      {
        hideLabel: !0,
        label: n.collections.sorting.toggleDirection,
        variant: "outline",
        icon: o?.order === "asc" ? md : vd,
        onClick: () => l({
          field: o?.field,
          order: o?.order === "asc" ? "desc" : "asc"
        })
      }
    ) })
  ] }) });
}, Jg = ({
  visualizations: e,
  currentVisualization: t,
  onVisualizationChange: r
}) => {
  const n = ae(), a = (s) => {
    r(s);
  }, o = (s) => s.type === "custom" ? {
    icon: s.icon,
    label: s.label
  } : {
    icon: xt[s.type].icon,
    label: n.collections.visualizations[s.type]
  };
  return /* @__PURE__ */ i("div", { className: "grid grid-cols-2 p-2", children: e.map((s, l) => {
    const { icon: c, label: d } = o(s);
    return /* @__PURE__ */ O(
      "button",
      {
        className: I(
          "flex w-full flex-col items-center justify-center gap-1 rounded-sm p-2 font-medium text-f1-foreground-secondary transition-colors",
          t === l && "bg-f1-background-secondary text-f1-foreground",
          Ee()
        ),
        onClick: () => a(l),
        children: [
          /* @__PURE__ */ i(fe, { icon: c }),
          d
        ]
      },
      s.type
    );
  }) });
}, Xg = (e) => {
  if (e === "custom")
    return null;
  const t = xt[e];
  if (!t)
    throw new Error(`Visualization type ${e} not found`);
  return t;
}, Vl = (e) => Xg(e.type)?.settings.renderer ?? null, Zg = (e) => {
  if (e.type === "custom")
    return !1;
  const t = Vl(e);
  return t ? t(
    e.options
  ) !== null : !1;
}, Qg = ({
  visualization: e
}) => {
  if (e.type === "custom")
    return null;
  const t = Vl(e);
  return t ? t(
    e.options
  ) : null;
}, em = ({
  visualizations: e,
  currentVisualization: t,
  onVisualizationChange: r,
  grouping: n,
  // summaries, // TODO: implement summaries selector
  currentGrouping: a,
  onGroupingChange: o,
  sortings: s,
  currentSortings: l,
  onSortingsChange: c
}) => {
  const d = ae(), f = n ? Object.keys(n.groupBy).length + (n.mandatory ? 1 : 0) : 0, [u, h] = M(!1), m = (T) => {
    h(!1), r(T);
  }, g = (T) => {
    o(T);
  }, p = e && e.length > 1, v = n && f > 0, y = s && Object.keys(s).length > 0, b = F(
    () => e[t],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [t, e?.[t]]
  ), x = F(
    () => /* @__PURE__ */ i(
      Qg,
      {
        visualization: b
      },
      "visualization-settings"
    ),
    [b]
  ), S = F(
    () => Zg(b),
    [b]
  ), N = F(
    () => {
      const T = e[t]?.type;
      if (!T) return "-";
      const A = d.collections.visualizations[T] ?? "-";
      return d.collections.visualizations.settings.replace(
        "{{visualizationName}}",
        A
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we are not memoizing the visualization as is a constant
    [t]
  ), w = yt(), _ = () => {
    Object.values(xt).forEach((T) => {
      T.settings.resetHandler?.(w);
    });
  };
  return /* @__PURE__ */ i("div", { className: "flex gap-2", children: /* @__PURE__ */ O(us, { open: u, onOpenChange: h, children: [
    /* @__PURE__ */ i(fs, { asChild: !0, onClick: () => h(!u), children: /* @__PURE__ */ i(
      vt,
      {
        variant: "outline",
        label: "Settings",
        icon: bd,
        onClick: () => {
        },
        hideLabel: !0,
        compact: !0,
        pressed: u,
        "aria-controls": u ? "settings" : void 0
      }
    ) }),
    /* @__PURE__ */ i(
      hs,
      {
        className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
        align: "end",
        sideOffset: 8,
        children: [
          p && /* @__PURE__ */ i(
            Jg,
            {
              visualizations: e,
              currentVisualization: t,
              onVisualizationChange: m
            },
            "visualization"
          ),
          v && !n?.hideSelector && !(n.mandatory && Object.entries(n.groupBy).length < 2) && /* @__PURE__ */ i("div", { className: "p-3", children: /* @__PURE__ */ i(
            yd,
            {
              grouping: n,
              currentGrouping: a,
              onGroupingChange: g
            },
            "grouping"
          ) }),
          y && /* @__PURE__ */ i("div", { className: "p-3", children: /* @__PURE__ */ i(
            Yg,
            {
              currentSortings: l,
              onChange: c,
              sortings: s
            },
            "sorting"
          ) }),
          S && /* @__PURE__ */ O("section", { className: "p-3 pb-0", children: [
            /* @__PURE__ */ i("h3", { className: "mb-2 text-sm font-medium text-f1-foreground-secondary", children: N }),
            x
          ] }, "visualization-settings"),
          /* @__PURE__ */ i(
            "section",
            {
              className: "border-0 border-t border-solid border-t-f1-border p-3",
              children: /* @__PURE__ */ i(
                ne,
                {
                  size: "sm",
                  variant: "ghost",
                  icon: wd,
                  label: d.collections.visualizations.reset,
                  onClick: _
                }
              )
            },
            "reset"
          )
        ].filter(Boolean)
      }
    )
  ] }) });
}, tm = ({
  source: e,
  visualizations: t,
  onSelectItems: r,
  onBulkAction: n,
  onStateChange: a,
  emptyStates: o,
  fullHeight: s,
  storage: l,
  id: c,
  tmpFullWidth: d
}) => {
  const {
    // Filters
    filters: f,
    currentFilters: u,
    setCurrentFilters: h,
    presets: m,
    presetsLoading: g,
    // Navigation filter
    currentNavigationFilters: p,
    navigationFilters: v,
    setCurrentNavigationFilters: y,
    // Search
    search: b,
    currentSearch: x,
    setCurrentSearch: S,
    //
    isLoading: N,
    // Actions
    primaryActions: w,
    primaryActionsLabel: _,
    secondaryActions: T,
    // Summary
    totalItemSummary: A,
    currentGrouping: E,
    setCurrentGrouping: k,
    grouping: C,
    currentSortings: D,
    setCurrentSortings: q,
    sortings: L
  } = e, [z, W] = M(0), {
    effectiveFilters: H,
    effectivePresets: U,
    currentFilters: Y,
    setCurrentFilters: R,
    allVisualizationFilters: P,
    setAllVisualizationFilters: $,
    hasPerVisualizationFilters: B
  } = tp({
    sourceFilters: f,
    sourcePresets: m,
    sourceCurrentFilters: u,
    sourceSetCurrentFilters: h,
    visualizations: t,
    currentVisualization: z
  }), J = F(() => B ? {
    ...e,
    currentFilters: Y,
    setCurrentFilters: R
  } : e, [
    e,
    B,
    Y,
    R
  ]), Q = V(D), { emitSortingChange: ie } = xd({
    defaultSorting: Q.current,
    currentVisualization: B ? z : void 0
  });
  K(() => {
    ie(D);
  }, [ie, D]);
  const se = F(
    () => Eh(w),
    [w]
  ), pe = F(
    () => qh(Ph(T)),
    [T]
  ), xe = F(
    () => Math.min(
      T && "expanded" in T && T.expanded || 0,
      Lh
    ),
    [T]
  ), at = F(
    () => pe[0]?.items.slice(0, xe) || [],
    [pe, xe]
  ), Ae = F(() => [
    {
      ...pe[0],
      items: pe[0]?.items.slice(xe) || []
    },
    ...pe.slice(1)
  ].filter((X) => X.items.length > 0), [pe, xe]), ve = se?.length > 0 || pe?.length > 0, [ye, ze] = M(void 0), Ce = Hd(), [be, Oe] = M(void 0), we = oe((X) => {
    if (!X)
      return [];
    const de = [];
    let ge = [];
    for (const me of X)
      "type" in me && me.type === "separator" ? (de.push({ items: ge }), ge = []) : ge.push(me);
    return ge.length > 0 && de.push({ items: ge }), de;
  }, []), le = F(() => {
    if (be)
      return "warningMessage" in be ? {
        warningMessage: be.warningMessage
      } : {
        primary: we(be.primary ?? []),
        secondary: (be?.secondary ?? []).filter(
          (X) => !("type" in X && X.type === "separator")
        )
      };
  }, [be, we]), [He, Be] = M(!1), [Ve, Jt] = M(0), [Xt, Zt] = M(!1), Qt = ae(), j = F(() => A === !0 ? (X) => X !== void 0 ? `${X} ${Qt.collections.itemsCount}` : null : A || void 0, [A, Qt]), G = (X, de, ge) => {
    r?.(X, de, ge), Be(
      !!X.allSelected || X.itemsStatus.some((ot) => ot.checked)
    ), Jt(X.selectedCount), ze(() => de), Zt(X.allSelected === !0);
    const me = e.bulkActions ? e.bulkActions(X) : void 0, Na = (ot) => {
      if ("type" in ot && ot.type === "separator")
        return { type: "separator" };
      const rr = ot;
      return {
        ...rr,
        onClick: () => {
          n?.(rr.id, X, de), rr.keepSelection || de();
        }
      };
    };
    me && ("primary" in me ? Oe({
      primary: (me?.primary || []).map(Na),
      secondary: (me?.secondary || []).map(Na)
    }) : "warningMessage" in me && Oe({ warningMessage: me.warningMessage }));
  }, [Z, re] = M(void 0), [he, Ke] = M(!0), Ie = F(
    () => [b?.enabled, t.length > 1].some(Boolean),
    [b, t]
  ), { emptyState: je, setEmptyStateType: it } = rp(o, {
    retry: () => {
      it(!1), R({ ...Y });
    },
    clearFilters: () => {
      it(!1), R({}), S(void 0);
    }
  }), Kl = (X, de, ge) => X === 0 ? Object.keys(de).length > 0 || ge ? "no-results" : "no-data" : !1, Wl = ({
    totalItems: X,
    filters: de,
    isInitialLoading: ge,
    search: me
  }) => {
    ge || (Ke(ge), re(X), it(Kl(X, de, me)));
  }, Ul = (X) => {
    it(
      "error",
      X.cause instanceof Error ? X.cause.message : X.message
    );
  }, Yl = ea({
    value: !!g,
    delay: 100
  });
  K(() => {
    it(!1);
  }, [
    Y,
    x,
    p,
    e.dataAdapter
  ]);
  const Ca = F(() => j !== void 0, [j]), Sa = j === void 0 ? null : Z !== void 0 ? j(Z) : null, { settings: er, setSettings: Jl } = yt(), { storageReady: Xl } = Qh(
    c,
    typeof l == "object" ? l?.features ?? ["*"] : ["*"],
    {
      settings: {
        value: er,
        setValue: Jl
      },
      sortings: {
        value: D,
        setValue: q
      },
      grouping: {
        value: E,
        setValue: k
      },
      navigationFilters: {
        value: p,
        setValue: y
      },
      visualization: {
        value: z,
        setValue: W
      },
      search: {
        value: x,
        setValue: S
      },
      filters: {
        value: u,
        setValue: h
      },
      ...B ? {
        visualizationFilters: {
          value: P,
          setValue: $
        }
      } : {}
    },
    l === !1
  ), _a = ea({
    value: he && Xl,
    delay: 100
  });
  ws(() => {
    a?.({
      filters: Y,
      sortings: D,
      visualization: z,
      grouping: E,
      search: x,
      navigationFilters: p,
      settings: er,
      ...B ? { visualizationFilters: P } : {}
    });
  }, [
    Y,
    x,
    p,
    D,
    z,
    E,
    er,
    P
  ]);
  const tr = F(() => {
    const X = C ? Object.keys(C.groupBy).length + (C.mandatory ? 1 : 0) : 0, de = Object.values(t).find(
      (me) => me.type === "table"
    ), ge = !!de && (!!de.options?.allowColumnHiding || !!de.options?.allowColumnReordering);
    return t && t.length > 1 || X > 0 && !C?.hideSelector || L && Object.keys(L).length > 0 || ge;
  }, [t, C, L]), Ct = F(() => Ie || ve || tr || b && b.enabled, [Ie, ve, tr, b]), We = F(() => Ca ? H ? "top" : "bottom" : !1, [H, Ca]), Ue = F(() => v ? Ct ? "top" : "bottom" : !1, [v, Ct]), Zl = F(() => We === "top" || Ue === "top", [We, Ue]), Ql = F(() => H || Ct || Ue === "bottom" || We === "bottom", [
    H,
    Ct,
    Ue,
    We
  ]);
  return /* @__PURE__ */ O(
    "div",
    {
      className: I(
        "flex flex-col gap-4",
        Ce === "standard" && "-mx-[23px]",
        s && "h-full flex-1"
      ),
      style: {
        width: Ce === "standard" && !d ? "calc(100% + 46px)" : "100%"
        // To counteract the -mx-[23px] from the layout,
      },
      children: [
        Zl && /* @__PURE__ */ O("div", { className: "border-f1-border-primary flex gap-4 px-4", children: [
          We === "top" && /* @__PURE__ */ i(
            qo,
            {
              isReady: !_a,
              totalItemSummaryResult: Sa
            }
          ),
          /* @__PURE__ */ i("div", { className: "flex flex-1 flex-shrink justify-end", children: Ue === "top" && /* @__PURE__ */ i(
            jo,
            {
              navigationFilters: v,
              currentNavigationFilters: p,
              onChangeNavigationFilters: y
            }
          ) })
        ] }),
        Ql && /* @__PURE__ */ O(
          "div",
          {
            className: I(
              "flex flex-row gap-4 px-4",
              s && "max-h-full",
              d && "px-0"
            ),
            children: [
              We === "bottom" && /* @__PURE__ */ i(
                qo,
                {
                  isReady: !_a,
                  totalItemSummaryResult: Sa
                }
              ),
              /* @__PURE__ */ i("div", { className: "flex-1", children: /* @__PURE__ */ O(
                Cd,
                {
                  filters: H,
                  value: Y,
                  presets: U,
                  presetsLoading: Yl,
                  onChange: (X) => R(X),
                  children: [
                    N && /* @__PURE__ */ i(
                      ee.div,
                      {
                        className: "flex h-8 w-8 items-center justify-center",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: {
                          opacity: 0
                        },
                        children: /* @__PURE__ */ i(kt, { size: "small" })
                      }
                    ),
                    b && /* @__PURE__ */ i(Uh, { onChange: S, value: x }),
                    tr && /* @__PURE__ */ i(
                      em,
                      {
                        visualizations: t,
                        currentVisualization: z,
                        onVisualizationChange: W,
                        grouping: C,
                        currentGrouping: E,
                        onGroupingChange: k,
                        sortings: L,
                        currentSortings: D,
                        onSortingsChange: q
                      }
                    ),
                    ve && /* @__PURE__ */ O(te, { children: [
                      Ie && /* @__PURE__ */ i("div", { className: "mx-1 h-4 w-px bg-f1-background-secondary-hover" }),
                      /* @__PURE__ */ i(
                        $h,
                        {
                          primaryActions: se,
                          primaryActionsLabel: _,
                          secondaryActions: at,
                          otherActions: Ae
                        }
                      )
                    ] }),
                    Ue === "bottom" && /* @__PURE__ */ i(
                      jo,
                      {
                        navigationFilters: v,
                        currentNavigationFilters: p,
                        onChangeNavigationFilters: y
                      }
                    )
                  ]
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ i(
          "div",
          {
            className: I(
              je && "hidden",
              s && "h-full min-h-0 flex-1"
            ),
            children: /* @__PURE__ */ i(
              Ug,
              {
                visualization: t[z],
                source: J,
                onSelectItems: G,
                onLoadData: Wl,
                onLoadError: Ul,
                tmpFullWidth: d
              }
            )
          }
        ),
        je ? /* @__PURE__ */ i("div", { className: "flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ i(
          Rh,
          {
            emoji: je.emoji,
            title: je.title,
            description: je.description,
            actions: je.actions
          }
        ) }) : /* @__PURE__ */ i(te, { children: be && /* @__PURE__ */ i(
          Hh,
          {
            isOpen: He,
            selectedNumber: Ve,
            primaryActions: le && "primary" in le ? le.primary : [],
            secondaryActions: le && "secondary" in le ? le.secondary : [],
            warningMessage: "warningMessage" in be ? be.warningMessage : void 0,
            onUnselect: () => ye?.(),
            allPagesSelection: !!e.allPagesSelection,
            isAllItemsSelected: Xt,
            totalItems: Z
          }
        ) })
      ]
    }
  );
}, rm = (e) => /* @__PURE__ */ i(cp, { children: /* @__PURE__ */ i(tm, { ...e }) }), nm = Ge(
  aa("OneDataCollection", rm)
), dm = nm, um = (e, t = []) => {
  const r = ae(), {
    navigationFilters: n,
    summaries: a,
    currentNavigationFilters: o
  } = e, s = Sd(
    {
      ...e,
      dataAdapter: e.dataAdapter
    },
    t
  ), [l, c] = M(() => n ? Object.fromEntries(
    Object.entries(n).map(([f, u]) => {
      const h = rl[u.type];
      return [
        f,
        h.valueConverter ? h.valueConverter(u.defaultValue, u, r) : u.defaultValue
      ];
    })
  ) : {});
  ws(() => {
    o && c(o);
  }, [o]);
  const d = F(() => a, t);
  return {
    ...s,
    summaries: d,
    navigationFilters: n,
    currentNavigationFilters: l,
    setCurrentNavigationFilters: c
  };
};
export {
  Ps as $,
  Eu as A,
  Fu as B,
  Rs as C,
  cm as D,
  Ju as E,
  ha as F,
  _u as G,
  yu as H,
  xu as I,
  Du as J,
  Bu as K,
  sm as L,
  Td as M,
  Pu as N,
  Rh as O,
  rt as P,
  _s as Q,
  zd as R,
  _h as S,
  Fe as T,
  Ah as U,
  Hu as V,
  wu as W,
  jt as X,
  Pt as Y,
  Xs as Z,
  Hd as _,
  Tf as a,
  Fs as a0,
  js as a1,
  jd as b,
  Ih as c,
  wh as d,
  xh as e,
  Qs as f,
  Ch as g,
  Sh as h,
  lm as i,
  dm as j,
  Wt as k,
  um as l,
  xa as m,
  Bh as n,
  ip as o,
  Vt as p,
  fa as q,
  $t as r,
  Os as s,
  da as t,
  Ed as u,
  Ts as v,
  Ds as w,
  mu as x,
  ef as y,
  Vu as z
};
