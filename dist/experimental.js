import { bd as Ar, be as Rp, bf as Fp, bg as Mp, bh as Pp, bi as zp, bj as Fo, bk as $p, bl as jp, bm as Bp, G as U, bn as Pd, bo as Hp, bp as Vp, a0 as ki, bq as zd, br as Wp, bs as Up, Y as Gp, bt as ba, bu as Ur, bv as qp, y as C, z as zt, R as X, bw as Kp, bx as Jp, by as Yp, bz as Qp, bA as Xp, a7 as we, bB as Zp, bC as ll, bD as $d, X as Ae, bE as eg, bF as jd, V as G, bG as Bd, bH as Hd, J as nt, bI as Vd, bJ as us, bK as Wd, w as B, bL as Tr, Q as M, bM as pt, bN as tg, bO as ng, bP as sr, ao as Ud, bQ as Gd, aA as en, bR as qd, bS as al, bT as dt, ap as cl, aq as Vn, s as Kd, bU as Jd, bV as rg, bW as va, bX as Rn, bY as dl, bZ as Er, b_ as Ci, b$ as ig, c0 as Yd, c1 as og, c2 as ul, c3 as lr, c4 as qe, c5 as sg, c6 as lg, c7 as Vt, c8 as Mo, c9 as ag, ca as ir, cb as Nn, cc as cg, cd as Qd, ce as dg, cf as ug, cg as fg, ch as hg, K as Ke, N as Ne, ci as sn, an as mn, ba as Dr, cj as Xd, ck as fl, cl as mg, cm as pg, cn as gg, co as bg, cp as vg, cq as yg, cr as xg, cs as wg, ct as kg, cu as hl, cv as Cg, cw as Zd, cx as Ng, cy as Sg, cz as Ig, cA as Ag, cB as Tg, cC as Eg, cD as Dg, aO as Nt, cE as eu, cF as _g, _ as se, x as ar, cG as tu, cH as nu, aw as ml, r as Lg, cI as Og, cJ as Rg, Z as cr, cK as Fg, cL as Po, cM as Mg, cN as pl, cO as Wt, ak as ru, cP as ya, cQ as xa, cR as Pg, cS as wa, cT as iu, cU as gl, al as ou, a5 as bl, a6 as vl, a8 as yl, ai as Ni, W as _r, cV as zg, cW as $g, cX as su, cY as jg, a9 as ut, cZ as Bg, c_ as lu, c$ as au, d0 as Hg, d1 as Lr, d2 as xl, d3 as Ji, aQ as Fn, d4 as fs, aj as dr, d5 as Vg, d6 as Wg, d7 as Ug, d8 as Gg, d9 as qg, da as cu, db as Kg, dc as du, dd as Jg, de as Yg, df as Qg, dg as ka, dh as uu, di as hs, ad as ms, dj as fu, dk as Xg, dl as Zg, b9 as Yi, au as hu, bc as eb, bb as tb, dm as mu, av as Jt, af as An, dn as Ca, dp as Si, dq as nb, dr as ps, aJ as Or, ds as Qi, dt as rb, du as ib, aP as ob, aK as pu, a as sb, u as lb, dv as wl, F as ab, dw as gu, dx as bu, dy as cb, dz as db, dA as ub, dB as fb, dC as hb, dD as vu, dE as mb, aL as yu, dF as xu, dG as pb, dH as gb, dI as bb, dJ as vb, dK as yb, dL as xb, dM as wb, dN as kb, aZ as Cb, a_ as Nb, b5 as Xi, b3 as kl, dO as Cl, b4 as wu, ae as Sb, a$ as Ii, dP as Ib, dQ as Ab, dR as gs, dS as Tb, dT as Na, dU as Eb, dV as Db, dW as _b, dX as Lb, dY as Ob, dZ as Rb, d_ as Fb, D as ku, aW as Mb, b2 as Pb, ax as zb, ay as $b, az as jb, $ as gt, d$ as Bb, e0 as Hb, e1 as Vb, e2 as Sa, e3 as Ia, e4 as Aa, e5 as Wb, e6 as Ub, e7 as Gb, e8 as Cu, e9 as qb } from "./F0AiChat-Degs8kEc.js";
import { ec as vL, eb as yL, ea as xL, eh as wL, ei as kL, ee as CL, ed as NL, eg as SL, aN as IL, ef as AL } from "./F0AiChat-Degs8kEc.js";
import { jsx as l, jsxs as g, Fragment as Z } from "react/jsx-runtime";
import * as Fe from "react";
import Q, { useContext as St, useState as F, useEffect as V, createContext as $t, forwardRef as q, useRef as W, PureComponent as Kb, useTransition as Jb, useLayoutEffect as Wn, useId as Nl, useCallback as ne, useMemo as z, useImperativeHandle as Nu, memo as Zi, Fragment as ln, isValidElement as Su, cloneElement as Sl, createElement as Ta, Children as Iu } from "react";
import { f as Tn, aR as ur, j as Gr, aS as Yb, b as zo, aT as Qb, A as Xb, d as qr, i as Zb, m as e0, G as t0, g as Ea, aU as n0, l as Da, aV as r0, p as i0, aW as Au, aX as Tu, aY as o0, aZ as bs, C as s0, aK as l0, ak as an, D as Me, a_ as bt, a$ as It, b0 as We, b1 as a0, b2 as ai, b3 as st, b4 as Eu, b5 as Qe, b6 as Il, b7 as ft, b8 as _a, b9 as c0, ba as Du, bb as Be, bc as Ze, bd as fr, be as Ai, bf as _u, bg as d0, bh as pn, bi as u0, bj as f0, bk as h0, bl as eo, bm as to, bn as Al, bo as m0, bp as Lu, bq as Ou, br as Ru, bs as p0, bt as Fu, bu as Mu, bv as Pu, bw as zu, bx as $u, by as ju, bz as vs, bA as g0, bB as b0, bC as v0, bD as y0, t as x0, x as w0, y as k0, F as C0, M as La, N as Oa, O as N0, P as S0, a3 as I0, a4 as A0, bE as T0, bF as E0, a6 as D0, ah as _0, a8 as L0, a9 as O0, bG as R0, aa as F0, ab as M0, ac as P0, af as z0, ag as $0, bH as Bu, bI as j0, bJ as B0, bK as H0, bL as Hu, av as ys, bM as V0, bN as W0, aF as no, aw as Tl, bO as El, au as Vu, a2 as Rr, aq as U0, bP as G0, bQ as q0, bR as K0, am as ro, bS as io, bT as oo, an as so, az as Dl, bU as J0, aO as Y0, bV as xs, bW as Q0, bX as Ti, bY as X0, aP as Z0, bZ as ev, aN as Wu, aM as tv, aL as nv, b_ as rv, b$ as iv, c0 as ov, c1 as sv, c2 as lv, c3 as av, c4 as cv, c5 as dv, c6 as uv, c7 as fv, c8 as hv, c9 as mv, ca as pv, cb as gv, cc as bv, aQ as Uu, cd as Gu, aD as qu, ce as vv, cf as yv, cg as xv, ap as wv, R as kv, T as Cv, V as Nv, W as Sv, Z as Iv, U as Av, ch as Ra, ci as Tv, cj as Ev, n as Dv } from "./DataCollectionStorageProvider-C2Idi3Gq.js";
import { ar as EL, ck as DL, ad as _L, ai as LL, aj as OL, co as RL, cn as FL, cl as ML, cm as PL, a5 as zL, ae as $L, aA as jL, aB as BL } from "./DataCollectionStorageProvider-C2Idi3Gq.js";
import './experimental.css';function Ku(t) {
  const e = Ar(() => Rp(t)), { isStatic: n } = St(Fp);
  if (n) {
    const [, r] = F(t);
    V(() => e.on("change", r), []);
  }
  return e;
}
function Ju(t, e) {
  const n = Ku(e()), r = () => n.set(e());
  return r(), Mp(() => {
    const i = () => Pp.preRender(r, !1, !0), o = t.map((s) => s.on("change", i));
    return () => {
      o.forEach((s) => s()), zp(r);
    };
  }), n;
}
function _v(t) {
  Fo.current = [], t();
  const e = Ju(Fo.current, t);
  return Fo.current = void 0, e;
}
function Lv(...t) {
  const e = !Array.isArray(t[0]), n = e ? 0 : -1, r = t[0 + n], i = t[1 + n], o = t[2 + n], s = t[3 + n], a = $p(i, o, s);
  return e ? a(r) : a;
}
function Ov(t, e, n, r) {
  if (typeof t == "function")
    return _v(t);
  const i = typeof e == "function" ? e : Lv(e, n, r);
  return Array.isArray(t) ? Fa(t, i) : Fa([t], ([o]) => i(o));
}
function Fa(t, e) {
  const n = Ar(() => []);
  return Ju(t, () => {
    n.length = 0;
    const r = t.length;
    for (let i = 0; i < r; i++)
      n[i] = t[i].get();
    return e(n);
  });
}
class Rv {
  constructor() {
    this.componentControls = /* @__PURE__ */ new Set();
  }
  /**
   * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
   *
   * @internal
   */
  subscribe(e) {
    return this.componentControls.add(e), () => this.componentControls.delete(e);
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
  start(e, n) {
    this.componentControls.forEach((r) => {
      r.start(e.nativeEvent || e, n);
    });
  }
}
const Fv = () => new Rv();
function lo() {
  return Ar(Fv);
}
const Yu = $t(null);
function Mv(t, e, n, r) {
  if (!r)
    return t;
  const i = t.findIndex((f) => f.value === e);
  if (i === -1)
    return t;
  const o = r > 0 ? 1 : -1, s = t[i + o];
  if (!s)
    return t;
  const a = t[i], c = s.layout, d = jp(c.min, c.max, 0.5);
  return o === 1 && a.layout.max + n > d || o === -1 && a.layout.min + n < d ? Bp(t, i, i + o) : t;
}
function Pv({ children: t, as: e = "ul", axis: n = "y", onReorder: r, values: i, ...o }, s) {
  const a = Ar(() => U[e]), c = [], d = W(!1);
  Pd(!!i, "Reorder.Group must be provided a values prop");
  const f = {
    axis: n,
    registerItem: (u, h) => {
      const m = c.findIndex((p) => u === p.value);
      m !== -1 ? c[m].layout = h[n] : c.push({ value: u, layout: h[n] }), c.sort($v);
    },
    updateOrder: (u, h, m) => {
      if (d.current)
        return;
      const p = Mv(c, u, h, m);
      c !== p && (d.current = !0, r(p.map(zv).filter((b) => i.indexOf(b) !== -1)));
    }
  };
  return V(() => {
    d.current = !1;
  }), l(a, { ...o, ref: s, ignoreStrict: !0, children: l(Yu.Provider, { value: f, children: t }) });
}
const Mn = /* @__PURE__ */ q(Pv);
function zv(t) {
  return t.value;
}
function $v(t, e) {
  return t.layout.min - e.layout.min;
}
function Ma(t, e = 0) {
  return Hp(t) ? t : Ku(e);
}
function jv({ children: t, style: e = {}, value: n, as: r = "li", onDrag: i, layout: o = !0, ...s }, a) {
  const c = Ar(() => U[r]), d = St(Yu), f = {
    x: Ma(e.x),
    y: Ma(e.y)
  }, u = Ov([f.x, f.y], ([b, y]) => b || y ? 1 : "unset");
  Pd(!!d, "Reorder.Item must be a child of Reorder.Group");
  const { axis: h, registerItem: m, updateOrder: p } = d;
  return l(c, { drag: h, ...s, dragSnapToOrigin: !0, style: { ...e, x: f.x, y: f.y, zIndex: u }, layout: o, onDrag: (b, y) => {
    const { velocity: v } = y;
    v[h] && p(n, f[h].get(), v[h]), i && i(b, y);
  }, onLayoutMeasure: (b) => m(n, b), ref: a, ignoreStrict: !0, children: t });
}
const Un = /* @__PURE__ */ q(jv);
const Bv = Vp("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
var Hv = ["cx", "cy", "innerRadius", "outerRadius", "gridType", "radialLines"];
function hr(t) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hr(t);
}
function Vv(t, e) {
  if (t == null) return {};
  var n = Wv(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Wv(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Mt.apply(this, arguments);
}
function Pa(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function mr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pa(Object(n), !0).forEach(function(r) {
      Uv(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Uv(t, e, n) {
  return e = Gv(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Gv(t) {
  var e = qv(t, "string");
  return hr(e) == "symbol" ? e : e + "";
}
function qv(t, e) {
  if (hr(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (hr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var Kv = function(e, n, r, i) {
  var o = "";
  return i.forEach(function(s, a) {
    var c = ur(n, r, e, s);
    a ? o += "L ".concat(c.x, ",").concat(c.y) : o += "M ".concat(c.x, ",").concat(c.y);
  }), o += "Z", o;
}, Jv = function(e) {
  var n = e.cx, r = e.cy, i = e.innerRadius, o = e.outerRadius, s = e.polarAngles, a = e.radialLines;
  if (!s || !s.length || !a)
    return null;
  var c = mr({
    stroke: "#ccc"
  }, Tn(e, !1));
  return /* @__PURE__ */ Q.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, s.map(function(d) {
    var f = ur(n, r, i, d), u = ur(n, r, o, d);
    return /* @__PURE__ */ Q.createElement("line", Mt({}, c, {
      key: "line-".concat(d),
      x1: f.x,
      y1: f.y,
      x2: u.x,
      y2: u.y
    }));
  }));
}, Yv = function(e) {
  var n = e.cx, r = e.cy, i = e.radius, o = e.index, s = mr(mr({
    stroke: "#ccc"
  }, Tn(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ Q.createElement("circle", Mt({}, s, {
    className: ki("recharts-polar-grid-concentric-circle", e.className),
    key: "circle-".concat(o),
    cx: n,
    cy: r,
    r: i
  }));
}, Qv = function(e) {
  var n = e.radius, r = e.index, i = mr(mr({
    stroke: "#ccc"
  }, Tn(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ Q.createElement("path", Mt({}, i, {
    className: ki("recharts-polar-grid-concentric-polygon", e.className),
    key: "path-".concat(r),
    d: Kv(n, e.cx, e.cy, e.polarAngles)
  }));
}, Xv = function(e) {
  var n = e.polarRadius, r = e.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ Q.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(i, o) {
    var s = o;
    return r === "circle" ? /* @__PURE__ */ Q.createElement(Yv, Mt({
      key: s
    }, e, {
      radius: i,
      index: o
    })) : /* @__PURE__ */ Q.createElement(Qv, Mt({
      key: s
    }, e, {
      radius: i,
      index: o
    }));
  }));
}, Qu = function(e) {
  var n = e.cx, r = n === void 0 ? 0 : n, i = e.cy, o = i === void 0 ? 0 : i, s = e.innerRadius, a = s === void 0 ? 0 : s, c = e.outerRadius, d = c === void 0 ? 0 : c, f = e.gridType, u = f === void 0 ? "polygon" : f, h = e.radialLines, m = h === void 0 ? !0 : h, p = Vv(e, Hv);
  return d <= 0 ? null : /* @__PURE__ */ Q.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ Q.createElement(Jv, Mt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: d,
    gridType: u,
    radialLines: m
  }, p)), /* @__PURE__ */ Q.createElement(Xv, Mt({
    cx: r,
    cy: o,
    innerRadius: a,
    outerRadius: d,
    gridType: u,
    radialLines: m
  }, p)));
};
Qu.displayName = "PolarGrid";
var $o, za;
function Zv() {
  if (za) return $o;
  za = 1;
  function t(e) {
    return e && e.length ? e[0] : void 0;
  }
  return $o = t, $o;
}
var jo, $a;
function ey() {
  return $a || ($a = 1, jo = Zv()), jo;
}
var ty = ey();
const ny = /* @__PURE__ */ zd(ty);
var ry = ["key"];
function Pn(t) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pn(t);
}
function iy(t, e) {
  if (t == null) return {};
  var n = oy(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function oy(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ei.apply(this, arguments);
}
function ja(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ze(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ja(Object(n), !0).forEach(function(r) {
      Ot(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ja(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function sy(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ba(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Zu(r.key), r);
  }
}
function ly(t, e, n) {
  return e && Ba(t.prototype, e), n && Ba(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ay(t, e, n) {
  return e = Di(e), cy(t, Xu() ? Reflect.construct(e, n || [], Di(t).constructor) : e.apply(t, n));
}
function cy(t, e) {
  if (e && (Pn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dy(t);
}
function dy(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Xu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xu = function() {
    return !!t;
  })();
}
function Di(t) {
  return Di = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Di(t);
}
function uy(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ws(t, e);
}
function ws(t, e) {
  return ws = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ws(t, e);
}
function Ot(t, e, n) {
  return e = Zu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Zu(t) {
  var e = fy(t, "string");
  return Pn(e) == "symbol" ? e : e + "";
}
function fy(t, e) {
  if (Pn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Pn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Fr = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    sy(this, e);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return n = ay(this, e, [].concat(i)), Ot(n, "state", {
      isAnimationFinished: !1
    }), Ot(n, "handleAnimationEnd", function() {
      var s = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Gr(s) && s();
    }), Ot(n, "handleAnimationStart", function() {
      var s = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Gr(s) && s();
    }), Ot(n, "handleMouseEnter", function(s) {
      var a = n.props.onMouseEnter;
      a && a(n.props, s);
    }), Ot(n, "handleMouseLeave", function(s) {
      var a = n.props.onMouseLeave;
      a && a(n.props, s);
    }), n;
  }
  return uy(e, t), ly(e, [{
    key: "renderDots",
    value: function(r) {
      var i = this.props, o = i.dot, s = i.dataKey, a = Tn(this.props, !1), c = Tn(o, !0), d = r.map(function(f, u) {
        var h = ze(ze(ze({
          key: "dot-".concat(u),
          r: 3
        }, a), c), {}, {
          dataKey: s,
          cx: f.x,
          cy: f.y,
          index: u,
          payload: f
        });
        return e.renderDotItem(o, h);
      });
      return /* @__PURE__ */ Q.createElement(zo, {
        className: "recharts-radar-dots"
      }, d);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var i = this.props, o = i.shape, s = i.dot, a = i.isRange, c = i.baseLinePoints, d = i.connectNulls, f;
      return /* @__PURE__ */ Q.isValidElement(o) ? f = /* @__PURE__ */ Q.cloneElement(o, ze(ze({}, this.props), {}, {
        points: r
      })) : Gr(o) ? f = o(ze(ze({}, this.props), {}, {
        points: r
      })) : f = /* @__PURE__ */ Q.createElement(Qb, Ei({}, Tn(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: a ? c : null,
        connectNulls: d
      })), /* @__PURE__ */ Q.createElement(zo, {
        className: "recharts-radar-polygon"
      }, f, s ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, i = this.props, o = i.points, s = i.isAnimationActive, a = i.animationBegin, c = i.animationDuration, d = i.animationEasing, f = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ Q.createElement(Xb, {
        begin: a,
        duration: c,
        isActive: s,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var m = h.t, p = u && u.length / o.length, b = o.map(function(y, v) {
          var w = u && u[Math.floor(v * p)];
          if (w) {
            var x = qr(w.x, y.x), D = qr(w.y, y.y);
            return ze(ze({}, y), {}, {
              x: x(m),
              y: D(m)
            });
          }
          var N = qr(y.cx, y.x), k = qr(y.cy, y.y);
          return ze(ze({}, y), {}, {
            x: N(m),
            y: k(m)
          });
        });
        return r.renderPolygonStatically(b);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, i = r.points, o = r.isAnimationActive, s = r.isRange, a = this.state.prevPoints;
      return o && i && i.length && !s && (!a || !Zb(a, i)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(i);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, o = r.className, s = r.points, a = r.isAnimationActive;
      if (i || !s || !s.length)
        return null;
      var c = this.state.isAnimationFinished, d = ki("recharts-radar", o);
      return /* @__PURE__ */ Q.createElement(zo, {
        className: d
      }, this.renderPolygon(), (!a || c) && e0.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, i) {
      return r.animationId !== i.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: i.curPoints
      } : r.points !== i.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }, {
    key: "renderDotItem",
    value: function(r, i) {
      var o;
      if (/* @__PURE__ */ Q.isValidElement(r))
        o = /* @__PURE__ */ Q.cloneElement(r, i);
      else if (Gr(r))
        o = r(i);
      else {
        var s = i.key, a = iy(i, ry);
        o = /* @__PURE__ */ Q.createElement(Yb, Ei({}, a, {
          key: s,
          className: ki("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
        }));
      }
      return o;
    }
  }]);
})(Kb);
Ot(Fr, "displayName", "Radar");
Ot(Fr, "defaultProps", {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: !1,
  activeDot: !0,
  dot: !1,
  legendType: "rect",
  isAnimationActive: !t0.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Ot(Fr, "getComposedData", function(t) {
  var e = t.radiusAxis, n = t.angleAxis, r = t.displayedData, i = t.dataKey, o = t.bandSize, s = n.cx, a = n.cy, c = !1, d = [], f = n.type !== "number" ? o ?? 0 : 0;
  r.forEach(function(h, m) {
    var p = Ea(h, n.dataKey, m), b = Ea(h, i), y = n.scale(p) + f, v = Array.isArray(b) ? n0(b) : b, w = Da(v) ? void 0 : e.scale(v);
    Array.isArray(b) && b.length >= 2 && (c = !0), d.push(ze(ze({}, ur(s, a, w, y)), {}, {
      name: p,
      value: b,
      cx: s,
      cy: a,
      radius: w,
      angle: y,
      payload: h
    }));
  });
  var u = [];
  return c && d.forEach(function(h) {
    if (Array.isArray(h.value)) {
      var m = ny(h.value), p = Da(m) ? void 0 : e.scale(m);
      u.push(ze(ze({}, h), {}, {
        radius: p
      }, ur(s, a, p, h.angle)));
    } else
      u.push(h);
  }), {
    points: d,
    isRange: c,
    baseLinePoints: u
  };
});
var Bo, Ha;
function hy() {
  if (Ha) return Bo;
  Ha = 1;
  var t = r0();
  function e(n) {
    var r = n == null ? 0 : n.length;
    return r ? t(n, 1) : [];
  }
  return Bo = e, Bo;
}
var my = i0({
  chartName: "RadarChart",
  GraphicalChild: Fr,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Au
  }, {
    axisType: "radiusAxis",
    AxisComp: Tu
  }],
  formatAxisMap: o0,
  defaultProps: {
    layout: "centric",
    startAngle: 90,
    endAngle: -270,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
const ef = q(({ className: t, items: e }, n) => l(Wp, {
  ref: n,
  className: t,
  children: g("div", {
    className: "flex items-center",
    children: [l(Up, {}), l(Gp, {
      items: e,
      children: l("button", {
        className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
        children: "..."
      })
    })]
  })
}));
ef.displayName = "CollapsedBreadcrumbItem";
const _l = 50, py = 120, _i = 8;
function gy(t, e) {
  const n = e.length;
  if (n <= 2) return n;
  const r = e[0];
  let i = t - r - _i, o = 0, s = 1;
  for (let a = n - 1; a > 0; a--) {
    const c = e[a];
    if (i < c)
      break;
    i -= c, o = a, s++;
  }
  if (s < n)
    for (i -= _l; i < 0 && s > 1; )
      i += e[o], o++, s--;
  return Math.max(2, s);
}
function Va(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + _i;
    default:
      return t[0] + _l + t[t.length - 1] + _i;
  }
}
function by(t, e) {
  return py * t + (e ? _l : 0) + _i;
}
function vy(t, e, n = []) {
  if (!t) {
    const s = Math.min(e.length, 2);
    return {
      visibleCount: s,
      headItem: e[0] ?? null,
      tailItems: e.slice(e.length - 1),
      collapsedItems: e.slice(1, e.length - 1),
      isOnly: e.length === 1,
      minWidth: by(
        s,
        e.length > 2
      )
    };
  }
  const r = e.length <= 2, i = n.map((s) => s.clientWidth);
  if (r)
    return {
      visibleCount: e.length,
      headItem: e[0] ?? null,
      tailItems: e.slice(1),
      collapsedItems: [],
      isOnly: e.length === 1,
      minWidth: Va(i)
    };
  const o = gy(t, i);
  return {
    visibleCount: o,
    headItem: e[0] || null,
    tailItems: e.slice(
      Math.max(1, e.length - (o - 1))
    ),
    collapsedItems: e.slice(
      1,
      e.length - (o - 1)
    ),
    isOnly: e.length === 1,
    minWidth: Va(i)
  };
}
function yy({ breadcrumbs: t, append: e }) {
  const n = W(null), r = W(null), [, i] = Jb(), [o, s] = F(null), a = (o?.collapsedItems || []).length > 0;
  return Wn(() => {
    const c = n.current, d = r.current;
    if (!c || !d || d.children.length < t.length) return;
    const f = () => {
      const h = n.current?.clientWidth ?? null, m = Array.from(d.children);
      i(() => {
        const p = vy(h, t, m);
        s(p);
      });
    }, u = new ResizeObserver(f);
    return u.observe(c), f(), () => u.disconnect();
  }, [t, e]), !t.length || o && !o.headItem ? l(ba, {
    ref: n,
    className: "w-full"
  }) : g(ba, {
    ref: n,
    className: "w-full overflow-x-hidden",
    style: {
      minWidth: o?.minWidth
    },
    children: [l("ol", {
      className: "invisible absolute -left-full",
      "aria-hidden": "true",
      ref: r,
      children: t.map((c, d) => l(Ur, {
        item: c,
        isLast: d === t.length - 1,
        isFirst: d === 0,
        children: d === t.length - 1 ? e : void 0
      }, c.id))
    }), o && o.headItem && g(qp, {
      children: [l(Ur, {
        isOnly: o.isOnly,
        isFirst: !0,
        item: o.headItem,
        isLast: !1
      }, `first-item-${o.headItem.id}`), a && g(Z, {
        children: [l(ef, {
          items: o.collapsedItems
        }, "collapsed-items"), o.tailItems.map((c, d) => l(Ur, {
          item: c,
          isLast: d === o.tailItems.length - 1,
          isFirst: !1,
          children: d === o.tailItems.length - 1 ? e : void 0
        }, c.id))]
      }), !a && l(Z, {
        children: o.tailItems.map((c, d) => l(Ur, {
          item: c,
          isLast: d === o.tailItems.length - 1,
          isFirst: !1,
          children: d === o.tailItems.length - 1 ? e : void 0
        }, c.id))
      })]
    })]
  }, `breadcrumb-${t.at(-1)?.id ?? 0}`);
}
const xy = zt({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Wa = [{
  id: "bottom",
  delay: 2.6,
  transformOrigin: "center 89%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z"
}, {
  id: "left",
  delay: 2.2,
  transformOrigin: "11% center",
  rotateAxis: "0, 1, 0",
  path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z"
}, {
  id: "right",
  delay: 2.4,
  transformOrigin: "88.5% center",
  rotateAxis: "0, 1, 0",
  path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z"
}, {
  id: "top",
  delay: 2,
  transformOrigin: "center 11%",
  rotateAxis: "1, 0, 0",
  path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z"
}], wy = ({ spin: t = !1, size: e = "md", background: n, hover: r = !1, ...i }, o) => {
  const s = Nl(), { onAnimationStart: a, onAnimationEnd: c, onDragStart: d, onDragEnd: f, onDrag: u, className: h, ...m } = i;
  return l("div", {
    className: C(xy({
      size: e
    }), h),
    style: {
      background: "transparent",
      perspective: t ? "10px" : void 0,
      transformStyle: t ? "preserve-3d" : void 0
    },
    children: g(U.svg, {
      width: "100%",
      height: "100%",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      ref: o,
      animate: {
        "--gradient-angle": ["0deg", "360deg"]
      },
      transition: n ? void 0 : {
        "--gradient-angle": {
          duration: 6,
          ease: "linear",
          repeat: 1 / 0
        }
      },
      style: {
        "--gradient-angle": "0deg",
        ...m.style
      },
      ...(({ style: p, ...b }) => b)(m),
      children: [g("defs", {
        children: [l("clipPath", {
          id: `${s}-circle`,
          children: l("circle", {
            cx: "16",
            cy: "16",
            r: "16"
          })
        }), Wa.map((p) => l("clipPath", {
          id: `${s}-${p.id}`,
          children: l("path", {
            d: p.path
          })
        }, p.id))]
      }), l("g", {
        clipPath: `url(#${s}-circle)`,
        children: Wa.map((p) => l(U.foreignObject, {
          x: "0",
          y: "0",
          width: "32",
          height: "32",
          clipPath: `url(#${s}-${p.id})`,
          animate: {
            "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
            "--scale": r ? 8 : 1,
            "--rotate": r ? "90deg" : "0deg",
            opacity: r ? p.id === "left" ? 1 : 0 : 1,
            filter: t ? ["blur(0px)", "blur(8px)", "blur(0px)"] : void 0
          },
          transition: {
            "--rotate3d-angle": {
              delay: t ? p.delay : 0,
              duration: 1.8,
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.99, 0.9999, 1]
            },
            "--scale": {
              duration: r ? 0.6 : 0.35,
              ease: [0.55, 0, 0.1, 1]
            },
            "--rotate": {
              duration: 0.35,
              ease: "easeInOut"
            },
            opacity: {
              duration: r ? 0.8 : 0.1,
              ease: "easeInOut"
            },
            filter: {
              delay: t ? p.delay : 0,
              duration: 1.8,
              ease: [0.65, 0, 0.35, 1],
              times: [0, 0.5, 1]
            }
          },
          style: {
            "--rotate3d-angle": "0deg",
            "--scale": 1,
            "--rotate": "0deg",
            transform: t ? `rotate3d(${p.rotateAxis}, var(--rotate3d-angle))` : "scale(var(--scale)) rotate(var(--rotate))",
            transformOrigin: p.transformOrigin,
            willChange: "transform"
          },
          children: l("div", {
            style: {
              width: "100%",
              height: "100%",
              background: n ?? "conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
            }
          })
        }, p.id))
      })]
    })
  });
}, tf = q(wy), nf = $t(null), ky = 15, Cy = ({ children: t, enabled: e, onShow: n, ...r }) => {
  const [i, o] = F(e), [s, a] = F(!1), [c, d] = F(!0), [f, u] = F(ky), h = W(null), m = (b) => {
    h.current = b;
  }, p = () => {
    h.current && h.current();
  };
  return V(() => {
    o(e);
  }, [e]), V(() => {
    if (s && n?.(), !s) {
      const b = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      d(!b);
    }
  }, [s, n]), l(nf.Provider, {
    value: {
      ...r,
      enabled: i,
      setEnabled: o,
      open: s,
      setOpen: a,
      shouldPlayEntranceAnimation: c,
      setShouldPlayEntranceAnimation: d,
      setAutoClearMinutes: u,
      autoClearMinutes: i ? f : null,
      clear: p,
      setClearFunction: m
    },
    children: t
  });
}, Cn = () => {
};
function ao() {
  const t = St(nf);
  return t === null ? {
    enabled: !1,
    setEnabled: Cn,
    open: !1,
    setOpen: Cn,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: Cn,
    setAutoClearMinutes: Cn,
    clear: Cn,
    setClearFunction: Cn,
    autoClearMinutes: null
  } : t;
}
const rf = ({ className: t, disabled: e }) => {
  const { enabled: n, setOpen: r, open: i } = ao(), o = X(), [s, a] = F(!1);
  return n ? l("div", {
    className: "flex items-center",
    children: l(Kp, {
      children: g(Jp, {
        delayDuration: 850,
        disableHoverableContent: !0,
        children: [l(Yp, {
          asChild: !0,
          children: l(U.div, {
            animate: {
              "--gradient-angle": ["0deg", "360deg"]
            },
            transition: {
              default: {
                duration: 8,
                ease: "linear",
                repeat: 1 / 0
              }
            },
            style: {
              "--gradient-angle": "180deg"
            },
            children: l(Qp, {
              onCheckedChange: (c) => {
                r(c);
              },
              checked: i,
              "aria-label": i ? o.ai.closeChat : o.ai.openChat,
              className: C("group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary transition-all hover:bg-f1-background-hover", "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]", "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse", "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100", e && "cursor-not-allowed opacity-50", we(), t),
              disabled: e,
              onMouseEnter: () => a(!0),
              onMouseLeave: () => a(!1),
              children: l(Xp, {
                className: C("block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: l("div", {
                  children: l(tf, {
                    size: "sm",
                    background: i ? "white" : void 0,
                    hover: s
                  })
                })
              })
            })
          })
        }), !i && l(Zp, {
          side: "left",
          className: "font-medium",
          children: o.ai.welcome
        })]
      })
    })
  }) : null;
}, Ua = "one_sidebar_locked", of = $t(void 0);
function Gn() {
  const t = St(of);
  return t === void 0 ? {
    isSmallScreen: !1,
    isLastToggleInvokedByUser: !0,
    prevSidebarState: null,
    sidebarState: "locked",
    toggleSidebar: () => {
    },
    setForceFloat: () => {
    }
  } : t;
}
function Ny({ children: t }) {
  const { currentPath: e } = ll(), [n, r] = F(!1), [i, o] = F(!1), s = n ? bs.xl : bs.md, a = $d(`(max-width: ${s}px)`, {
    initializeWithValue: !0
  }), [c, d] = F(() => {
    const v = localStorage.getItem(Ua);
    return v !== null ? !!v : !0;
  }), [f, u] = F(!1), [h, m] = F(null), p = ne(({ isInvokedByUser: v } = {
    isInvokedByUser: !0
  }) => {
    o(v ?? !0), a && u(!f), d(!c);
  }, [a, f, c, d, u]), b = ne((v) => {
    a || (v.clientX < 32 && u(!0), v.clientX > 280 && u(!1));
  }, [a, u]), y = z(() => a ? f ? "unlocked" : "hidden" : !c && !f ? "hidden" : !c && f ? "unlocked" : "locked", [a, f, c]);
  return V(() => {
    u(!1);
  }, [e]), V(() => {
    i && localStorage.setItem(Ua, c ? "1" : "");
  }, [c, i]), V(() => () => {
    m(y);
  }, [y]), l(of.Provider, {
    value: {
      isSmallScreen: a,
      isLastToggleInvokedByUser: i,
      sidebarState: y,
      toggleSidebar: p,
      prevSidebarState: h,
      setForceFloat: r
    },
    children: l("div", {
      onPointerMove: b,
      className: "h-screen w-screen",
      children: t
    })
  });
}
const Ga = U.create(G), qa = {
  initial: {
    scale: 1
  },
  animate: {
    scale: 1
  },
  exit: {
    scale: 0.5
  },
  enterFromUnfavorite: {
    scale: 0.5
  },
  enterFromFavorite: {
    scale: 0.8
  }
}, Sy = ({ isMarked: t, onChange: e, label: n }) => {
  const [r, i] = F(!1), o = () => {
    i(!0), e(!t);
  };
  return l(Ae, {
    mode: "wait",
    children: l("button", {
      className: C("flex h-6 w-6 items-center justify-center rounded", we()),
      onClick: o,
      "aria-label": n,
      children: t ? l(Ga, {
        size: "sm",
        icon: eg,
        className: "text-[hsl(var(--promote-50))] outline-none",
        variants: qa,
        initial: r ? "enterFromUnfavorite" : "initial",
        animate: "animate",
        exit: "exit",
        transition: {
          ease: [0.175, 0.885, 0.27, 2]
        },
        "aria-hidden": "true",
        focusable: !1,
        tabIndex: -1
      }, "favorite") : l(Ga, {
        size: "sm",
        whileTap: {
          scale: 0.8
        },
        icon: jd,
        className: "outline-none",
        variants: qa,
        initial: r ? "enterFromFavorite" : "initial",
        "aria-hidden": "true",
        focusable: !1,
        tabIndex: -1,
        animate: "animate",
        exit: "exit",
        transition: {
          ease: [0, 0, 0.58, 1]
        }
      }, "not-favorite")
    })
  });
}, Iy = ({ currentModule: t, label: e, getUpdates: n, updatesPageUrl: r, emptyScreen: i, errorScreen: o, onOpenChange: s = () => {
}, onHeaderClick: a = () => {
}, onItemClick: c = () => {
}, hasUnread: d = !1, crossSelling: f }) => {
  const [u, h] = F("idle"), [m, p] = F(null), [b, ...y] = m ?? [], [v, w] = F(!1);
  V(() => {
    p(null), h("idle");
  }, [t]);
  const x = ne(async () => {
    try {
      h("fetching");
      const D = await n();
      h("idle"), p(D);
    } catch {
      h("error");
    }
  }, [n]);
  return g(Bd, {
    open: v,
    onOpenChange: async (D) => {
      w(D), D && m === null && x(), s(D);
    },
    children: [l(Hd, {
      asChild: !0,
      children: l(nt, {
        variant: "outline",
        icon: Vd,
        hideLabel: !0,
        label: e,
        pressed: v,
        append: d && l(Ll, {
          className: "absolute -right-0.5 -top-[1px]"
        })
      })
    }), l(us, {
      children: g(Wd, {
        sideOffset: 8,
        collisionPadding: 20,
        align: "end",
        hideWhenDetached: !0,
        className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
        style: {
          maxHeight: "min(90vh, 760px)"
        },
        children: [l(Ey, {
          title: e,
          url: r,
          onClick: a
        }), u === "fetching" && l(Ly, {}), g("div", {
          className: "scrollbar-macos flex-1 overflow-y-auto",
          children: [u === "idle" && m !== null && m.length === 0 && l("div", {
            className: "p-2 pt-0",
            children: l(Dy, {
              ...i,
              buttonUrl: r
            })
          }), u === "idle" && m !== null && m.length > 0 && g("div", {
            className: "px-1",
            children: [l(Ay, {
              ...b,
              onClick: c
            }), m.length > 1 && l(Z, {
              children: l("div", {
                className: "pb-1",
                children: y.map((D, N) => l(Ty, {
                  ...D,
                  onClick: c
                }, N))
              })
            })]
          }), u === "error" && l("div", {
            className: "p-2 pt-0",
            children: l(_y, {
              ...o,
              onClick: () => {
                x();
              }
            })
          })]
        }), u === "idle" && f && f.isVisible && l(Oy, {
          isVisible: f.isVisible,
          onClose: f.onClose,
          crossSelling: f,
          onDropdownClose: () => w(!1)
        })]
      })
    })]
  });
}, Ay = ({ title: t, href: e, mediaUrl: n, unread: r, updated: i, onClick: o }) => {
  const s = "flex flex-col items-stretch w-full", a = n?.includes(".mp4");
  return l(tg, {
    onClick: o,
    asChild: !0,
    className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    children: g(pt, {
      href: e,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: C(s, "text-f1-foreground no-underline"),
      children: [l("div", {
        className: "px-1 pt-1",
        children: a ? l("div", {
          className: "overflow-clip rounded border border-solid border-f1-border-secondary",
          children: l("video", {
            src: n,
            className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center",
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0
          })
        }) : l("div", {
          className: "overflow-clip rounded border border-solid border-f1-border-secondary",
          children: l(ng, {
            fetchPriority: "high",
            src: n,
            className: "block aspect-video w-full bg-f1-background-secondary object-contain object-center"
          })
        })
      }), l("div", {
        className: "py-2 pl-2 pr-4",
        children: g("div", {
          className: "flex items-start gap-4",
          children: [g("div", {
            className: "flex-1 *:text-base",
            children: [l("h3", {
              className: "font-medium",
              children: t
            }), l("p", {
              className: "font-normal text-f1-foreground-secondary",
              children: i
            })]
          }), r && l(Ll, {
            className: "mt-1.5"
          })]
        })
      })]
    })
  });
}, Ty = ({ title: t, href: e, updated: n, unread: r = !1, onClick: i }) => {
  const o = C("flex flex-col items-stretch gap-3 w-full");
  return l(sr, {
    asChild: !0,
    className: o,
    onClick: i,
    children: l(pt, {
      href: e,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: C(o, "text-f1-foreground no-underline hover:cursor-pointer"),
      children: g("div", {
        className: "flex items-start gap-4",
        children: [g("div", {
          className: "flex-1 *:text-base",
          children: [l("h3", {
            className: "text-pretty font-medium",
            children: t
          }), l("p", {
            className: "font-normal text-f1-foreground-secondary",
            children: n
          })]
        }), r && l(Ll, {
          className: "mt-1.5"
        })]
      })
    })
  });
}, Ey = ({ title: t, url: e, onClick: n }) => g("a", {
  href: e,
  className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
  children: [l("h2", {
    className: "text-base font-medium",
    children: t
  }), l(B, {
    variant: "outline",
    size: "sm",
    icon: Tr,
    label: t,
    hideLabel: !0,
    onClick: n
  })]
}), sf = ({ icon: t, button: e, title: n, description: r, iconWrapperClassName: i }) => l("div", {
  className: "w-[420px] rounded border border-solid border-f1-border-secondary bg-[hsl(var(--neutral-2))] p-12",
  children: g("div", {
    className: "flex flex-col items-center gap-4",
    children: [l("div", {
      className: C("grid size-14 place-items-center overflow-clip rounded border border-solid border-f1-border-secondary bg-f1-background-tertiary *:block", i),
      children: t
    }), g("div", {
      className: "flex flex-1 flex-col gap-1 text-center *:text-base",
      children: [l("h3", {
        className: "text-pretty font-medium",
        children: n
      }), l("p", {
        className: "font-normal text-f1-foreground-secondary",
        children: r
      })]
    }), e]
  })
}), Dy = ({ title: t, buttonText: e, buttonUrl: n, description: r }) => l(sf, {
  title: t,
  description: r,
  icon: l(G, {
    icon: Vd,
    size: "lg",
    className: "block"
  }),
  button: l(pt, {
    href: n,
    children: l(B, {
      label: e
    })
  })
}), _y = ({ title: t, description: e, buttonText: n, onClick: r }) => l(sf, {
  title: t,
  description: e,
  iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
  icon: l(G, {
    icon: Ud,
    size: "lg"
  }),
  button: l(B, {
    variant: "outline",
    label: n,
    onClick: r
  })
}), Ly = () => l("div", {
  className: "flex flex-col",
  role: "status",
  "aria-busy": "true",
  "aria-live": "polite",
  children: g("div", {
    className: "p-2",
    children: [l(M, {
      className: "h-56 w-full rounded"
    }), l("div", {
      className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
      children: g("div", {
        className: "flex flex-1 flex-col gap-2 py-1",
        children: [l(M, {
          className: "h-3 w-2/3"
        }), l(M, {
          className: "h-3 w-1/3"
        })]
      })
    }), l("div", {
      className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
      children: g("div", {
        className: "flex flex-1 flex-col gap-2 py-1",
        children: [l(M, {
          className: "h-3 w-2/3"
        }), l(M, {
          className: "h-3 w-1/3"
        })]
      })
    })]
  })
}), Ll = ({ className: t = "" }) => l("div", {
  "aria-hidden": "true",
  className: C("size-2 rounded bg-f1-background-selected-bold", t)
}), Oy = ({ isVisible: t, onClose: e, crossSelling: n, onDropdownClose: r }) => {
  const [i, o] = F(t);
  V(() => {
    o(t);
  }, [t]);
  const s = () => {
    o(!1), e && e();
  }, a = (c) => {
    o(!1), r(), c && c();
  };
  return i && g(Z, {
    children: [l(Gd, {}), g("div", {
      className: "px-1 pb-2",
      children: [g("div", {
        className: "flex flex-row items-center justify-between px-3",
        children: [l("p", {
          className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary",
          children: n?.sectionTitle
        }), e && l("div", {
          className: "relative z-10 h-6 w-6",
          children: l(B, {
            variant: "ghost",
            icon: en,
            size: "sm",
            hideLabel: !0,
            onClick: s,
            label: "Close"
          })
        })]
      }), l(s0, {
        columns: {
          default: 1
        },
        showDots: !0,
        showArrows: !1,
        children: n?.products.map((c) => l(l0, {
          ...c,
          isVisible: !0,
          trackVisibility: c.trackVisibility,
          onClick: () => a(c.onClick)
        }, c.title))
      })]
    })]
  });
};
function Ka({ icon: t, href: e, label: n, disabled: r }) {
  const i = W(null);
  return l(B, {
    href: e,
    title: n,
    "aria-label": n,
    disabled: r,
    ref: i,
    size: "sm",
    variant: "outline",
    label: n,
    icon: t,
    hideLabel: !0
  });
}
function u_({ module: t, statusTag: e = void 0, breadcrumbs: n = [], actions: r = [], embedded: i = !1, navigation: o, productUpdates: s, favorites: a }) {
  const { sidebarState: c, toggleSidebar: d, isLastToggleInvokedByUser: f } = Gn(), u = [{
    id: t.href,
    label: t.name,
    href: t.href,
    module: t.id
  }, ...n], h = e && Object.keys(e).length !== 0, m = n.length > 0, p = !i && r.length > 0, b = !i && !!s?.isVisible, y = u[u.length - 1], v = m ? u[u.length - 2] : null;
  return g("div", {
    className: C("flex items-center justify-between px-5 py-4 xs:px-6", i ? "h-12" : "h-16"),
    children: [g("div", {
      className: "flex flex-grow items-center",
      children: [l(Ae, {
        children: !i && c !== "locked" && l(U.div, {
          initial: {
            opacity: 0,
            width: 0
          },
          animate: {
            opacity: 1,
            width: "auto"
          },
          exit: {
            opacity: 0,
            width: 0
          },
          children: l("div", {
            className: "mr-3",
            children: l(B, {
              ref: (w) => {
                f && w?.focus();
              },
              variant: "ghost",
              hideLabel: !0,
              onClick: () => d(),
              label: "Open main menu",
              icon: qd
            })
          })
        })
      }), g("div", {
        className: C("flex flex-grow items-center gap-2", i && m && "justify-center"),
        children: [i && m && v && !("loading" in v) && l("div", {
          className: "absolute left-4",
          children: l(pt, {
            href: v.href,
            children: l(B, {
              variant: "ghost",
              hideLabel: !0,
              label: "Back",
              icon: al,
              onClick: (w) => w.preventDefault()
            })
          })
        }), i && m ? l("div", {
          className: "text-lg font-semibold text-f1-foreground",
          children: "loading" in y ? l(M, {
            className: "h-4 w-24"
          }) : y.label
        }) : l(yy, {
          breadcrumbs: u,
          append: a !== void 0 && l(Sy, {
            label: a.label,
            isMarked: a.isMarked,
            onChange: a?.onChange
          })
        }, u[0].id)]
      })]
    }), g("div", {
      className: "flex items-center gap-3",
      children: [!i && h && l("div", {
        children: e.tooltip ? l(dt, {
          label: e.tooltip,
          children: l("div", {
            children: l(an, {
              text: e.text,
              variant: e.variant,
              additionalAccessibleText: e.tooltip
            })
          })
        }) : l(an, {
          text: e.text,
          variant: e.variant
        })
      }), !i && h && (o || p || b) && l("div", {
        className: "h-4 w-px bg-f1-border-secondary"
      }), o && g("div", {
        className: "flex items-center gap-3",
        children: [o.counter && g("span", {
          className: "text-sm text-f1-foreground-secondary",
          children: [o.counter.current, "/", o.counter.total]
        }), g("div", {
          className: "flex items-center gap-2",
          children: [l(Ka, {
            icon: cl,
            label: o.previous?.title || "Previous",
            href: o.previous?.url || "",
            disabled: !o.previous
          }), l(Ka, {
            icon: Vn,
            label: o.next?.title || "Next",
            href: o.next?.url || "",
            disabled: !o.next
          })]
        })]
      }), o && p && l("div", {
        className: "h-4 w-px bg-f1-border-secondary"
      }), (b || p) && g("div", {
        className: "flex items-center gap-2",
        children: [b && l("div", {
          className: "items-right flex gap-2",
          children: l(Iy, {
            ...s,
            currentModule: t.name
          })
        }), p && l("div", {
          className: "items-right flex gap-2",
          children: r.map((w, x) => l(Ry, {
            action: w
          }, x))
        })]
      }), g("div", {
        children: [l(Kd, {}), l(rf, {})]
      })]
    })]
  });
}
function Ry({ action: t }) {
  const e = W(null), [n, r] = F(!1);
  return "actions" in t ? l(Me, {
    items: t.actions,
    open: n,
    onOpenChange: r,
    children: l(nt, {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      pressed: n
    })
  }) : l(pt, {
    href: t.href,
    title: t.label,
    "aria-label": t.label,
    ref: e,
    children: l(B, {
      size: "md",
      variant: "outline",
      label: t.label,
      icon: t.icon,
      hideLabel: !0,
      onClick: (i) => {
        i.preventDefault(), e.current?.click();
      }
    })
  });
}
const Li = (t, e) => e.view.domAtPos(t).node.offsetParent !== null, Fy = (t, e, n) => {
  for (let r = t.depth; r > 0; r -= 1) {
    const i = t.node(r), o = e(i), s = Li(t.start(r), n);
    if (o && s)
      return {
        pos: r > 0 ? t.before(r) : 0,
        start: t.start(r),
        depth: r,
        node: i
      };
  }
}, Ja = (t, e) => {
  const { state: n, view: r, extensionManager: i } = t, { schema: o, selection: s } = n, { empty: a, $anchor: c } = s, d = !!i.extensions.find((v) => v.name === "gapCursor");
  if (!a || c.parent.type !== o.nodes.detailsSummary || !d || e === "right" && c.parentOffset !== c.parent.nodeSize - 2)
    return !1;
  const f = Il((v) => v.type === o.nodes.details)(s);
  if (!f)
    return !1;
  const u = ai(f.node, (v) => v.type === o.nodes.detailsContent);
  if (!u.length || Li(f.start + u[0].pos + 1, t))
    return !1;
  const m = n.doc.resolve(f.pos + f.node.nodeSize), p = _a.findFrom(m, 1, !1);
  if (!p)
    return !1;
  const { tr: b } = n, y = new _a(p);
  return b.setSelection(y), b.scrollIntoView(), r.dispatch(b), !0;
}, My = bt.create({
  name: "details",
  content: "detailsSummary detailsContent",
  group: "block",
  defining: !0,
  isolating: !0,
  allowGapCursor: !1,
  addOptions() {
    return {
      persist: !1,
      openClassName: "is-open",
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.persist ? {
      open: {
        default: !1,
        parseHTML: (t) => t.hasAttribute("open"),
        renderHTML: ({ open: t }) => t ? { open: "" } : {}
      }
    } : [];
  },
  parseHTML() {
    return [
      {
        tag: "details"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "details",
      ft(this.options.HTMLAttributes, t),
      0
    ];
  },
  addNodeView() {
    return ({ editor: t, getPos: e, node: n, HTMLAttributes: r }) => {
      const i = document.createElement("div"), o = ft(this.options.HTMLAttributes, r, {
        "data-type": this.name
      });
      Object.entries(o).forEach(([d, f]) => i.setAttribute(d, f));
      const s = document.createElement("button");
      s.type = "button", i.append(s);
      const a = document.createElement("div");
      i.append(a);
      const c = (d) => {
        if (d !== void 0)
          if (d) {
            if (i.classList.contains(this.options.openClassName))
              return;
            i.classList.add(this.options.openClassName);
          } else {
            if (!i.classList.contains(this.options.openClassName))
              return;
            i.classList.remove(this.options.openClassName);
          }
        else
          i.classList.toggle(this.options.openClassName);
        const f = new Event("toggleDetailsContent"), u = a.querySelector(':scope > div[data-type="detailsContent"]');
        u?.dispatchEvent(f);
      };
      return n.attrs.open && setTimeout(() => c()), s.addEventListener("click", () => {
        if (c(), !this.options.persist) {
          t.commands.focus(void 0, { scrollIntoView: !1 });
          return;
        }
        if (t.isEditable && typeof e == "function") {
          const { from: d, to: f } = t.state.selection;
          t.chain().command(({ tr: u }) => {
            const h = e(), m = u.doc.nodeAt(h);
            return m?.type !== this.type ? !1 : (u.setNodeMarkup(h, void 0, {
              open: !m.attrs.open
            }), !0);
          }).setTextSelection({
            from: d,
            to: f
          }).focus(void 0, { scrollIntoView: !1 }).run();
        }
      }), {
        dom: i,
        contentDOM: a,
        ignoreMutation(d) {
          return d.type === "selection" ? !1 : !i.contains(d.target) || i === d.target;
        },
        update: (d) => d.type !== this.type ? !1 : (d.attrs.open !== void 0 && c(d.attrs.open), !0)
      };
    };
  },
  addCommands() {
    return {
      setDetails: () => ({ state: t, chain: e }) => {
        var n;
        const { schema: r, selection: i } = t, { $from: o, $to: s } = i, a = o.blockRange(s);
        if (!a)
          return !1;
        const c = t.doc.slice(a.start, a.end);
        if (!r.nodes.detailsContent.contentMatch.matchFragment(c.content))
          return !1;
        const f = ((n = c.toJSON()) === null || n === void 0 ? void 0 : n.content) || [];
        return e().insertContentAt({ from: a.start, to: a.end }, {
          type: this.name,
          content: [
            {
              type: "detailsSummary"
            },
            {
              type: "detailsContent",
              content: f
            }
          ]
        }).setTextSelection(a.start + 2).run();
      },
      unsetDetails: () => ({ state: t, chain: e }) => {
        const { selection: n, schema: r } = t, i = Il((v) => v.type === this.type)(n);
        if (!i)
          return !1;
        const o = ai(i.node, (v) => v.type === r.nodes.detailsSummary), s = ai(i.node, (v) => v.type === r.nodes.detailsContent);
        if (!o.length || !s.length)
          return !1;
        const a = o[0], c = s[0], d = i.pos, f = t.doc.resolve(d), u = d + i.node.nodeSize, h = { from: d, to: u }, m = c.node.content.toJSON() || [], p = f.parent.type.contentMatch.defaultType, y = [
          p?.create(null, a.node.content).toJSON(),
          ...m
        ];
        return e().insertContentAt(h, y).setTextSelection(d + 1).run();
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => {
        const { schema: t, selection: e } = this.editor.state, { empty: n, $anchor: r } = e;
        return !n || r.parent.type !== t.nodes.detailsSummary ? !1 : r.parentOffset !== 0 ? this.editor.commands.command(({ tr: i }) => {
          const o = r.pos - 1, s = r.pos;
          return i.delete(o, s), !0;
        }) : this.editor.commands.unsetDetails();
      },
      // Creates a new node below it if it is closed.
      // Otherwise inside `DetailsContent`.
      Enter: ({ editor: t }) => {
        const { state: e, view: n } = t, { schema: r, selection: i } = e, { $head: o } = i;
        if (o.parent.type !== r.nodes.detailsSummary)
          return !1;
        const s = Li(o.after() + 1, t), a = s ? e.doc.nodeAt(o.after()) : o.node(-2);
        if (!a)
          return !1;
        const c = s ? 0 : o.indexAfter(-1), d = Eu(a.contentMatchAt(c));
        if (!d || !a.canReplaceWith(c, c, d))
          return !1;
        const f = d.createAndFill();
        if (!f)
          return !1;
        const u = s ? o.after() + 1 : o.after(-1), h = e.tr.replaceWith(u, u, f), m = h.doc.resolve(u), p = Qe.near(m, 1);
        return h.setSelection(p), h.scrollIntoView(), n.dispatch(h), !0;
      },
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowRight: ({ editor: t }) => Ja(t, "right"),
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowDown: ({ editor: t }) => Ja(t, "down")
    };
  },
  addProseMirrorPlugins() {
    return [
      // This plugin prevents text selections within the hidden content in `DetailsContent`.
      // The cursor is moved to the next visible position.
      new It({
        key: new We("detailsSelection"),
        appendTransaction: (t, e, n) => {
          const { editor: r, type: i } = this;
          if (!t.some((y) => y.selectionSet) || !e.selection.empty || !n.selection.empty || !a0(n, i.name))
            return;
          const { $from: a } = n.selection;
          if (Li(a.pos, r))
            return;
          const d = Fy(a, (y) => y.type === i, r);
          if (!d)
            return;
          const f = ai(d.node, (y) => y.type === n.schema.nodes.detailsSummary);
          if (!f.length)
            return;
          const u = f[0], m = (e.selection.from < n.selection.from ? "forward" : "backward") === "forward" ? d.start + u.pos : d.pos + u.pos + u.node.nodeSize, p = st.create(n.doc, m);
          return n.tr.setSelection(p);
        }
      })
    ];
  }
}), lf = My.configure({
  persist: !0,
  HTMLAttributes: {
    class: "rich-text-details"
  }
}), Py = bt.create({
  name: "detailsContent",
  content: "block+",
  defining: !0,
  selectable: !1,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: `div[data-type="${this.name}"]`
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "div",
      ft(this.options.HTMLAttributes, t, { "data-type": this.name }),
      0
    ];
  },
  addNodeView() {
    return ({ HTMLAttributes: t }) => {
      const e = document.createElement("div"), n = ft(this.options.HTMLAttributes, t, {
        "data-type": this.name,
        hidden: "hidden"
      });
      return Object.entries(n).forEach(([r, i]) => e.setAttribute(r, i)), e.addEventListener("toggleDetailsContent", () => {
        e.toggleAttribute("hidden");
      }), {
        dom: e,
        contentDOM: e,
        ignoreMutation(r) {
          return r.type === "selection" ? !1 : !e.contains(r.target) || e === r.target;
        },
        update: (r) => r.type === this.type
      };
    };
  },
  addKeyboardShortcuts() {
    return {
      // Escape node on double enter
      Enter: ({ editor: t }) => {
        const { state: e, view: n } = t, { selection: r } = e, { $from: i, empty: o } = r, s = Il((L) => L.type === this.type)(r);
        if (!o || !s || !s.node.childCount)
          return !1;
        const a = i.index(s.depth), { childCount: c } = s.node;
        if (!(c === a + 1))
          return !1;
        const f = s.node.type.contentMatch.defaultType, u = f?.createAndFill();
        if (!u)
          return !1;
        const h = e.doc.resolve(s.pos + 1), m = c - 1, p = s.node.child(m), b = h.posAtIndex(m, s.depth);
        if (!p.eq(u))
          return !1;
        const v = i.node(-3);
        if (!v)
          return !1;
        const w = i.indexAfter(-3), x = Eu(v.contentMatchAt(w));
        if (!x || !v.canReplaceWith(w, w, x))
          return !1;
        const D = x.createAndFill();
        if (!D)
          return !1;
        const { tr: N } = e, k = i.after(-2);
        N.replaceWith(k, k, D);
        const I = N.doc.resolve(k), E = Qe.near(I, 1);
        N.setSelection(E);
        const T = b, S = b + p.nodeSize;
        return N.delete(T, S), N.scrollIntoView(), n.dispatch(N), !0;
      }
    };
  }
}), af = Py, zy = bt.create({
  name: "detailsSummary",
  content: "text*",
  defining: !0,
  selectable: !1,
  isolating: !0,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "summary"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return [
      "summary",
      ft(this.options.HTMLAttributes, t),
      0
    ];
  }
}), cf = zy;
var ks, Cs;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  ks = (e) => t.get(e), Cs = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  ks = (r) => {
    for (let i = 0; i < t.length; i += 2)
      if (t[i] == r) return t[i + 1];
  }, Cs = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var xe = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, i = e / this.width | 0;
      let o = r + 1, s = i + 1;
      for (let a = 1; o < this.width && this.map[e + a] == n; a++)
        o++;
      for (let a = 1; s < this.height && this.map[e + this.width * a] == n; a++)
        s++;
      return { left: r, top: i, right: o, bottom: s };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t)
        return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(t, e, n) {
    const { left: r, right: i, top: o, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (n < 0 ? o - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: n,
      right: r,
      top: i,
      bottom: o
    } = this.findCell(t), {
      left: s,
      right: a,
      top: c,
      bottom: d
    } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(i, c),
      right: Math.max(r, a),
      bottom: Math.max(o, d)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++)
      for (let i = t.left; i < t.right; i++) {
        const o = r * this.width + i, s = this.map[o];
        n[s] || (n[s] = !0, !(i == t.left && i && this.map[o - 1] == s || r == t.top && r && this.map[o - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, n) {
    for (let r = 0, i = 0; ; r++) {
      const o = i + n.child(r).nodeSize;
      if (r == t) {
        let s = e + t * this.width;
        const a = (t + 1) * this.width;
        for (; s < a && this.map[s] < i; ) s++;
        return s == a ? o - 1 : this.map[s];
      }
      i = o;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return ks(t) || Cs(t, $y(t));
  }
};
function $y(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = jy(t), n = t.childCount, r = [];
  let i = 0, o = null;
  const s = [];
  for (let d = 0, f = e * n; d < f; d++) r[d] = 0;
  for (let d = 0, f = 0; d < n; d++) {
    const u = t.child(d);
    f++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (p == u.childCount) break;
      const b = u.child(p), { colspan: y, rowspan: v, colwidth: w } = b.attrs;
      for (let x = 0; x < v; x++) {
        if (x + d >= n) {
          (o || (o = [])).push({
            type: "overlong_rowspan",
            pos: f,
            n: v - x
          });
          break;
        }
        const D = i + x * e;
        for (let N = 0; N < y; N++) {
          r[D + N] == 0 ? r[D + N] = f : (o || (o = [])).push({
            type: "collision",
            row: d,
            pos: f,
            n: y - N
          });
          const k = w && w[N];
          if (k) {
            const I = (D + N) % e * 2, E = s[I];
            E == null || E != k && s[I + 1] == 1 ? (s[I] = k, s[I + 1] = 1) : E == k && s[I + 1]++;
          }
        }
      }
      i += y, f += b.nodeSize;
    }
    const h = (d + 1) * e;
    let m = 0;
    for (; i < h; ) r[i++] == 0 && m++;
    m && (o || (o = [])).push({ type: "missing", row: d, n: m }), f++;
  }
  (e === 0 || n === 0) && (o || (o = [])).push({ type: "zero_sized" });
  const a = new xe(e, n, r, o);
  let c = !1;
  for (let d = 0; !c && d < s.length; d += 2)
    s[d] != null && s[d + 1] < n && (c = !0);
  return c && By(a, s, t), a;
}
function jy(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const i = t.child(r);
    let o = 0;
    if (n)
      for (let s = 0; s < r; s++) {
        const a = t.child(s);
        for (let c = 0; c < a.childCount; c++) {
          const d = a.child(c);
          s + d.attrs.rowspan > r && (o += d.attrs.colspan);
        }
      }
    for (let s = 0; s < i.childCount; s++) {
      const a = i.child(s);
      o += a.attrs.colspan, a.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = o : e != o && (e = Math.max(e, o));
  }
  return e;
}
function By(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let i = 0; i < t.map.length; i++) {
    const o = t.map[i];
    if (r[o]) continue;
    r[o] = !0;
    const s = n.nodeAt(o);
    if (!s)
      throw new RangeError(`No cell with offset ${o} found`);
    let a = null;
    const c = s.attrs;
    for (let d = 0; d < c.colspan; d++) {
      const f = (i + d) % t.width, u = e[f * 2];
      u != null && (!c.colwidth || c.colwidth[d] != u) && ((a || (a = Hy(c)))[d] = u);
    }
    a && t.problems.unshift({
      type: "colwidth mismatch",
      pos: o,
      colwidth: a
    });
  }
}
function Hy(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function Pe(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], i = r.spec.tableRole;
      i && (e[i] = r);
    }
  }
  return e;
}
var Ut = new We("selectingCells");
function qn(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function Vy(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function vt(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function co(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = qn(e.$head) || Wy(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function Wy(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return t.doc.resolve(n - e.nodeSize);
  }
}
function Ns(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function Uy(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Ol(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function df(t, e, n) {
  const r = t.node(-1), i = xe.get(r), o = t.start(-1), s = i.nextCell(t.pos - o, e, n);
  return s == null ? null : t.node(0).resolve(o + s);
}
function cn(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function uf(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function Gy(t, e, n) {
  const r = Pe(e.type.schema).header_cell;
  for (let i = 0; i < t.height; i++)
    if (e.nodeAt(t.map[n + i * t.width]).type != r)
      return !1;
  return !0;
}
var pe = class _t extends Qe {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, n = e) {
    const r = e.node(-1), i = xe.get(r), o = e.start(-1), s = i.rectBetween(
      e.pos - o,
      n.pos - o
    ), a = e.node(0), c = i.cellsInRect(s).filter((f) => f != n.pos - o);
    c.unshift(n.pos - o);
    const d = c.map((f) => {
      const u = r.nodeAt(f);
      if (!u)
        throw RangeError(`No cell with offset ${f} found`);
      const h = o + f + 1;
      return new Du(
        a.resolve(h),
        a.resolve(h + u.content.size)
      );
    });
    super(d[0].$from, d[0].$to, d), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (Ns(r) && Ns(i) && Ol(r, i)) {
      const o = this.$anchorCell.node(-1) != r.node(-1);
      return o && this.isRowSelection() ? _t.rowSelection(r, i) : o && this.isColSelection() ? _t.colSelection(r, i) : new _t(r, i);
    }
    return st.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = xe.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), o = {}, s = [];
    for (let c = i.top; c < i.bottom; c++) {
      const d = [];
      for (let f = c * n.width + i.left, u = i.left; u < i.right; u++, f++) {
        const h = n.map[f];
        if (o[h]) continue;
        o[h] = !0;
        const m = n.findCell(h);
        let p = e.nodeAt(h);
        if (!p)
          throw RangeError(`No cell with offset ${h} found`);
        const b = i.left - m.left, y = m.right - i.right;
        if (b > 0 || y > 0) {
          let v = p.attrs;
          if (b > 0 && (v = cn(v, 0, b)), y > 0 && (v = cn(
            v,
            v.colspan - y,
            y
          )), m.left < i.left) {
            if (p = p.type.createAndFill(v), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(v)}`
              );
          } else
            p = p.type.create(v, p.content);
        }
        if (m.top < i.top || m.bottom > i.bottom) {
          const v = {
            ...p.attrs,
            rowspan: Math.min(m.bottom, i.bottom) - Math.max(m.top, i.top)
          };
          m.top < i.top ? p = p.type.createAndFill(v) : p = p.type.create(v, p.content);
        }
        d.push(p);
      }
      s.push(e.child(c).copy(Be.from(d)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : s;
    return new Ze(Be.from(a), 1, 1);
  }
  replace(e, n = Ze.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      const { $from: a, $to: c } = i[s], d = e.mapping.slice(r);
      e.replace(
        d.map(a.pos),
        d.map(c.pos),
        s ? Ze.empty : n
      );
    }
    const o = Qe.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    o && e.setSelection(o);
  }
  replaceWith(e, n) {
    this.replace(e, new Ze(Be.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = xe.get(n), i = this.$anchorCell.start(-1), o = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let s = 0; s < o.length; s++)
      e(n.nodeAt(o[s]), i + o[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, i) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, n = e) {
    const r = e.node(-1), i = xe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
    return s.top <= a.top ? (s.top > 0 && (e = c.resolve(o + i.map[s.left])), a.bottom < i.height && (n = c.resolve(
      o + i.map[i.width * (i.height - 1) + a.right - 1]
    ))) : (a.top > 0 && (n = c.resolve(o + i.map[a.left])), s.bottom < i.height && (e = c.resolve(
      o + i.map[i.width * (i.height - 1) + s.right - 1]
    ))), new _t(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = xe.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), o = n.colCount(this.$headCell.pos - r);
    if (Math.min(i, o) > 0) return !1;
    const s = i + this.$anchorCell.nodeAfter.attrs.colspan, a = o + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, a) == n.width;
  }
  eq(e) {
    return e instanceof _t && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, n = e) {
    const r = e.node(-1), i = xe.get(r), o = e.start(-1), s = i.findCell(e.pos - o), a = i.findCell(n.pos - o), c = e.node(0);
    return s.left <= a.left ? (s.left > 0 && (e = c.resolve(
      o + i.map[s.top * i.width]
    )), a.right < i.width && (n = c.resolve(
      o + i.map[i.width * (a.top + 1) - 1]
    ))) : (a.left > 0 && (n = c.resolve(o + i.map[a.top * i.width])), s.right < i.width && (e = c.resolve(
      o + i.map[i.width * (s.top + 1) - 1]
    ))), new _t(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new _t(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new _t(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new qy(this.$anchorCell.pos, this.$headCell.pos);
  }
};
pe.prototype.visible = !1;
Qe.jsonID("cell", pe);
var qy = class ff {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new ff(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && Ol(n, r) ? new pe(n, r) : Qe.near(r, 1);
  }
};
function Ky(t) {
  if (!(t.selection instanceof pe)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      Ai.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), fr.create(t.doc, e);
}
function Jy({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++)
    ;
  for (let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--)
    ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function Yy({ $from: t, $to: e }) {
  let n, r;
  for (let i = t.depth; i > 0; i--) {
    const o = t.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      n = o;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const o = e.node(i);
    if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
      r = o;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function Qy(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let o, s;
  if (r instanceof _u && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      o = pe.create(i, r.from);
    else if (s == "row") {
      const a = i.resolve(r.from + 1);
      o = pe.rowSelection(a, a);
    } else if (!n) {
      const a = xe.get(r.node), c = r.from + 1, d = c + a.map[a.width * a.height - 1];
      o = pe.create(i, c + 1, d);
    }
  } else r instanceof st && Jy(r) ? o = st.create(i, r.from) : r instanceof st && Yy(r) && (o = st.create(i, r.$from.start(), r.$from.end()));
  return o && (e || (e = t.tr)).setSelection(o), e;
}
var Xy = new We("fix-tables");
function hf(t, e, n, r) {
  const i = t.childCount, o = e.childCount;
  e: for (let s = 0, a = 0; s < o; s++) {
    const c = e.child(s);
    for (let d = a, f = Math.min(i, s + 3); d < f; d++)
      if (t.child(d) == c) {
        a = d + 1, n += c.nodeSize;
        continue e;
      }
    r(c, n), a < i && t.child(a).sameMarkup(c) ? hf(t.child(a), c, n + 1, r) : c.nodesBetween(0, c.content.size, r, n + 1), n += c.nodeSize;
  }
}
function mf(t, e) {
  let n;
  const r = (i, o) => {
    i.type.spec.tableRole == "table" && (n = Zy(t, i, o, n));
  };
  return e ? e.doc != t.doc && hf(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Zy(t, e, n, r) {
  const i = xe.get(e);
  if (!i.problems) return r;
  r || (r = t.tr);
  const o = [];
  for (let c = 0; c < i.height; c++) o.push(0);
  for (let c = 0; c < i.problems.length; c++) {
    const d = i.problems[c];
    if (d.type == "collision") {
      const f = e.nodeAt(d.pos);
      if (!f) continue;
      const u = f.attrs;
      for (let h = 0; h < u.rowspan; h++) o[d.row + h] += d.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + d.pos),
        null,
        cn(u, u.colspan - d.n, d.n)
      );
    } else if (d.type == "missing")
      o[d.row] += d.n;
    else if (d.type == "overlong_rowspan") {
      const f = e.nodeAt(d.pos);
      if (!f) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + d.pos), null, {
        ...f.attrs,
        rowspan: f.attrs.rowspan - d.n
      });
    } else if (d.type == "colwidth mismatch") {
      const f = e.nodeAt(d.pos);
      if (!f) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + d.pos), null, {
        ...f.attrs,
        colwidth: d.colwidth
      });
    } else if (d.type == "zero_sized") {
      const f = r.mapping.map(n);
      r.delete(f, f + e.nodeSize);
    }
  }
  let s, a;
  for (let c = 0; c < o.length; c++)
    o[c] && (s == null && (s = c), a = c);
  for (let c = 0, d = n + 1; c < i.height; c++) {
    const f = e.child(c), u = d + f.nodeSize, h = o[c];
    if (h > 0) {
      let m = "cell";
      f.firstChild && (m = f.firstChild.type.spec.tableRole);
      const p = [];
      for (let y = 0; y < h; y++) {
        const v = Pe(t.schema)[m].createAndFill();
        v && p.push(v);
      }
      const b = (c == 0 || s == c - 1) && a == c ? d + 1 : u - 1;
      r.insert(r.mapping.map(b), p);
    }
    d = u;
  }
  return r.setMeta(Xy, { fixTables: !0 });
}
function At(t) {
  const e = t.selection, n = co(t), r = n.node(-1), i = n.start(-1), o = xe.get(r);
  return { ...e instanceof pe ? o.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : o.findCell(n.pos - i), tableStart: i, map: o, table: r };
}
function pf(t, { map: e, tableStart: n, table: r }, i) {
  let o = i > 0 ? -1 : 0;
  Gy(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const a = s * e.width + i;
    if (i > 0 && i < e.width && e.map[a - 1] == e.map[a]) {
      const c = e.map[a], d = r.nodeAt(c);
      t.setNodeMarkup(
        t.mapping.map(n + c),
        null,
        uf(d.attrs, i - e.colCount(c))
      ), s += d.attrs.rowspan - 1;
    } else {
      const c = o == null ? Pe(r.type.schema).cell : r.nodeAt(e.map[a + o]).type, d = e.positionAt(s, i, r);
      t.insert(t.mapping.map(n + d), c.createAndFill());
    }
  }
  return t;
}
function ex(t, e) {
  if (!vt(t)) return !1;
  if (e) {
    const n = At(t);
    e(pf(t.tr, n, n.left));
  }
  return !0;
}
function tx(t, e) {
  if (!vt(t)) return !1;
  if (e) {
    const n = At(t);
    e(pf(t.tr, n, n.right));
  }
  return !0;
}
function nx(t, { map: e, table: n, tableStart: r }, i) {
  const o = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const a = s * e.width + i, c = e.map[a], d = n.nodeAt(c), f = d.attrs;
    if (i > 0 && e.map[a - 1] == c || i < e.width - 1 && e.map[a + 1] == c)
      t.setNodeMarkup(
        t.mapping.slice(o).map(r + c),
        null,
        cn(f, i - e.colCount(c))
      );
    else {
      const u = t.mapping.slice(o).map(r + c);
      t.delete(u, u + d.nodeSize);
    }
    s += f.rowspan;
  }
}
function rx(t, e) {
  if (!vt(t)) return !1;
  if (e) {
    const n = At(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let i = n.right - 1; nx(r, n, i), i != n.left; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = xe.get(o);
    }
    e(r);
  }
  return !0;
}
function ix(t, e, n) {
  var r;
  const i = Pe(e.type.schema).header_cell;
  for (let o = 0; o < t.width; o++)
    if (((r = e.nodeAt(t.map[o + n * t.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function gf(t, { map: e, tableStart: n, table: r }, i) {
  var o;
  let s = n;
  for (let d = 0; d < i; d++) s += r.child(d).nodeSize;
  const a = [];
  let c = i > 0 ? -1 : 0;
  ix(e, r, i + c) && (c = i == 0 || i == e.height ? null : 0);
  for (let d = 0, f = e.width * i; d < e.width; d++, f++)
    if (i > 0 && i < e.height && e.map[f] == e.map[f - e.width]) {
      const u = e.map[f], h = r.nodeAt(u).attrs;
      t.setNodeMarkup(n + u, null, {
        ...h,
        rowspan: h.rowspan + 1
      }), d += h.colspan - 1;
    } else {
      const u = c == null ? Pe(r.type.schema).cell : (o = r.nodeAt(e.map[f + c * e.width])) == null ? void 0 : o.type, h = u?.createAndFill();
      h && a.push(h);
    }
  return t.insert(s, Pe(r.type.schema).row.create(null, a)), t;
}
function ox(t, e) {
  if (!vt(t)) return !1;
  if (e) {
    const n = At(t);
    e(gf(t.tr, n, n.top));
  }
  return !0;
}
function sx(t, e) {
  if (!vt(t)) return !1;
  if (e) {
    const n = At(t);
    e(gf(t.tr, n, n.bottom));
  }
  return !0;
}
function lx(t, { map: e, table: n, tableStart: r }, i) {
  let o = 0;
  for (let d = 0; d < i; d++) o += n.child(d).nodeSize;
  const s = o + n.child(i).nodeSize, a = t.mapping.maps.length;
  t.delete(o + r, s + r);
  const c = /* @__PURE__ */ new Set();
  for (let d = 0, f = i * e.width; d < e.width; d++, f++) {
    const u = e.map[f];
    if (!c.has(u)) {
      if (c.add(u), i > 0 && u == e.map[f - e.width]) {
        const h = n.nodeAt(u).attrs;
        t.setNodeMarkup(t.mapping.slice(a).map(u + r), null, {
          ...h,
          rowspan: h.rowspan - 1
        }), d += h.colspan - 1;
      } else if (i < e.height && u == e.map[f + e.width]) {
        const h = n.nodeAt(u), m = h.attrs, p = h.type.create(
          { ...m, rowspan: h.attrs.rowspan - 1 },
          h.content
        ), b = e.positionAt(i + 1, d, n);
        t.insert(t.mapping.slice(a).map(r + b), p), d += m.colspan - 1;
      }
    }
  }
}
function ax(t, e) {
  if (!vt(t)) return !1;
  if (e) {
    const n = At(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let i = n.bottom - 1; lx(r, n, i), i != n.top; i--) {
      const o = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!o)
        throw RangeError("No table found");
      n.table = o, n.map = xe.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Ya(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function cx({ width: t, height: e, map: n }, r) {
  let i = r.top * t + r.left, o = i, s = (r.bottom - 1) * t + r.left, a = i + (r.right - r.left - 1);
  for (let c = r.top; c < r.bottom; c++) {
    if (r.left > 0 && n[o] == n[o - 1] || r.right < t && n[a] == n[a + 1])
      return !0;
    o += t, a += t;
  }
  for (let c = r.left; c < r.right; c++) {
    if (r.top > 0 && n[i] == n[i - t] || r.bottom < e && n[s] == n[s + t])
      return !0;
    i++, s++;
  }
  return !1;
}
function Qa(t, e) {
  const n = t.selection;
  if (!(n instanceof pe) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = At(t), { map: i } = r;
  if (cx(i, r)) return !1;
  if (e) {
    const o = t.tr, s = {};
    let a = Be.empty, c, d;
    for (let f = r.top; f < r.bottom; f++)
      for (let u = r.left; u < r.right; u++) {
        const h = i.map[f * i.width + u], m = r.table.nodeAt(h);
        if (!(s[h] || !m))
          if (s[h] = !0, c == null)
            c = h, d = m;
          else {
            Ya(m) || (a = a.append(m.content));
            const p = o.mapping.map(h + r.tableStart);
            o.delete(p, p + m.nodeSize);
          }
      }
    if (c == null || d == null)
      return !0;
    if (o.setNodeMarkup(c + r.tableStart, null, {
      ...uf(
        d.attrs,
        d.attrs.colspan,
        r.right - r.left - d.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), a.size) {
      const f = c + 1 + d.content.size, u = Ya(d) ? c + 1 : f;
      o.replaceWith(u + r.tableStart, f + r.tableStart, a);
    }
    o.setSelection(
      new pe(o.doc.resolve(c + r.tableStart))
    ), e(o);
  }
  return !0;
}
function Xa(t, e) {
  const n = Pe(t.schema);
  return dx(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function dx(t) {
  return (e, n) => {
    var r;
    const i = e.selection;
    let o, s;
    if (i instanceof pe) {
      if (i.$anchorCell.pos != i.$headCell.pos) return !1;
      o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
    } else {
      if (o = Vy(i.$from), !o) return !1;
      s = (r = qn(i.$from)) == null ? void 0 : r.pos;
    }
    if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1)
      return !1;
    if (n) {
      let a = o.attrs;
      const c = [], d = a.colwidth;
      a.rowspan > 1 && (a = { ...a, rowspan: 1 }), a.colspan > 1 && (a = { ...a, colspan: 1 });
      const f = At(e), u = e.tr;
      for (let m = 0; m < f.right - f.left; m++)
        c.push(
          d ? {
            ...a,
            colwidth: d && d[m] ? [d[m]] : null
          } : a
        );
      let h;
      for (let m = f.top; m < f.bottom; m++) {
        let p = f.map.positionAt(m, f.left, f.table);
        m == f.top && (p += o.nodeSize);
        for (let b = f.left, y = 0; b < f.right; b++, y++)
          b == f.left && m == f.top || u.insert(
            h = u.mapping.map(p + f.tableStart, 1),
            t({ node: o, row: m, col: b }).createAndFill(c[y])
          );
      }
      u.setNodeMarkup(
        s,
        t({ node: o, row: f.top, col: f.left }),
        c[0]
      ), i instanceof pe && u.setSelection(
        new pe(
          u.doc.resolve(i.$anchorCell.pos),
          h ? u.doc.resolve(h) : void 0
        )
      ), n(u);
    }
    return !0;
  };
}
function ux(t, e) {
  return function(n, r) {
    if (!vt(n)) return !1;
    const i = co(n);
    if (i.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const o = n.tr;
      n.selection instanceof pe ? n.selection.forEachCell((s, a) => {
        s.attrs[t] !== e && o.setNodeMarkup(a, null, {
          ...s.attrs,
          [t]: e
        });
      }) : o.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [t]: e
      }), r(o);
    }
    return !0;
  };
}
function fx(t) {
  return function(e, n) {
    if (!vt(e)) return !1;
    if (n) {
      const r = Pe(e.schema), i = At(e), o = e.tr, s = i.map.cellsInRect(
        t == "column" ? {
          left: i.left,
          top: 0,
          right: i.right,
          bottom: i.map.height
        } : t == "row" ? {
          left: 0,
          top: i.top,
          right: i.map.width,
          bottom: i.bottom
        } : i
      ), a = s.map((c) => i.table.nodeAt(c));
      for (let c = 0; c < s.length; c++)
        a[c].type == r.header_cell && o.setNodeMarkup(
          i.tableStart + s[c],
          r.cell,
          a[c].attrs
        );
      if (o.steps.length == 0)
        for (let c = 0; c < s.length; c++)
          o.setNodeMarkup(
            i.tableStart + s[c],
            r.header_cell,
            a[c].attrs
          );
      n(o);
    }
    return !0;
  };
}
function Za(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const o = e.table.nodeAt(r[i]);
    if (o && o.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function pr(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? fx(t) : function(n, r) {
    if (!vt(n)) return !1;
    if (r) {
      const i = Pe(n.schema), o = At(n), s = n.tr, a = Za("row", o, i), c = Za(
        "column",
        o,
        i
      ), f = (t === "column" ? a : t === "row" ? c : !1) ? 1 : 0, u = t == "column" ? {
        left: 0,
        top: f,
        right: 1,
        bottom: o.map.height
      } : t == "row" ? {
        left: f,
        top: 0,
        right: o.map.width,
        bottom: 1
      } : o, h = t == "column" ? c ? i.cell : i.header_cell : t == "row" ? a ? i.cell : i.header_cell : i.cell;
      o.map.cellsInRect(u).forEach((m) => {
        const p = m + o.tableStart, b = s.doc.nodeAt(p);
        b && s.setNodeMarkup(p, h, b.attrs);
      }), r(s);
    }
    return !0;
  };
}
pr("row", {
  useDeprecatedLogic: !0
});
pr("column", {
  useDeprecatedLogic: !0
});
var hx = pr("cell", {
  useDeprecatedLogic: !0
});
function mx(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, i = t.before(); r >= 0; r--) {
      const o = t.node(-1).child(r), s = o.lastChild;
      if (s)
        return i - 1 - s.nodeSize;
      i -= o.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), i = t.after(); r < n.childCount; r++) {
      const o = n.child(r);
      if (o.childCount) return i + 1;
      i += o.nodeSize;
    }
  }
  return null;
}
function ec(t) {
  return function(e, n) {
    if (!vt(e)) return !1;
    const r = mx(co(e), t);
    if (r == null) return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(
        e.tr.setSelection(st.between(i, Uy(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function px(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(r), n.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function Kr(t, e) {
  const n = t.selection;
  if (!(n instanceof pe)) return !1;
  if (e) {
    const r = t.tr, i = Pe(t.schema).cell.createAndFill().content;
    n.forEachCell((o, s) => {
      o.content.eq(i) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + o.nodeSize - 1),
        new Ze(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function gx(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, a = [];
  if (o == "row")
    for (let c = 0; c < e.childCount; c++) {
      let d = e.child(c).content;
      const f = c ? 0 : Math.max(0, n - 1), u = c < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (f || u) && (d = Ss(
        Pe(s).row,
        new Ze(d, f, u)
      ).content), a.push(d);
    }
  else if (o == "cell" || o == "header_cell")
    a.push(
      n || r ? Ss(
        Pe(s).row,
        new Ze(e, n, r)
      ).content : e
    );
  else
    return null;
  return bx(s, a);
}
function bx(t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (let s = o.childCount - 1; s >= 0; s--) {
      const { rowspan: a, colspan: c } = o.child(s).attrs;
      for (let d = i; d < i + a; d++)
        n[d] = (n[d] || 0) + c;
    }
  }
  let r = 0;
  for (let i = 0; i < n.length; i++) r = Math.max(r, n[i]);
  for (let i = 0; i < n.length; i++)
    if (i >= e.length && e.push(Be.empty), n[i] < r) {
      const o = Pe(t).cell.createAndFill(), s = [];
      for (let a = n[i]; a < r; a++)
        s.push(o);
      e[i] = e[i].append(Be.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function Ss(t, e) {
  const n = t.createAndFill();
  return new d0(n).replace(0, n.content.size, e).doc;
}
function vx({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const o = [], s = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], d = [];
      for (let f = o[a] || 0, u = 0; f < r; u++) {
        let h = c.child(u % c.childCount);
        f + h.attrs.colspan > r && (h = h.type.createChecked(
          cn(
            h.attrs,
            h.attrs.colspan,
            f + h.attrs.colspan - r
          ),
          h.content
        )), d.push(h), f += h.attrs.colspan;
        for (let m = 1; m < h.attrs.rowspan; m++)
          o[a + m] = (o[a + m] || 0) + h.attrs.colspan;
      }
      s.push(Be.from(d));
    }
    n = s, t = r;
  }
  if (e != i) {
    const o = [];
    for (let s = 0, a = 0; s < i; s++, a++) {
      const c = [], d = n[a % e];
      for (let f = 0; f < d.childCount; f++) {
        let u = d.child(f);
        s + u.attrs.rowspan > i && (u = u.type.create(
          {
            ...u.attrs,
            rowspan: Math.max(1, i - u.attrs.rowspan)
          },
          u.content
        )), c.push(u);
      }
      o.push(Be.from(c));
    }
    n = o, e = i;
  }
  return { width: t, height: e, rows: n };
}
function yx(t, e, n, r, i, o, s) {
  const a = t.doc.type.schema, c = Pe(a);
  let d, f;
  if (i > e.width)
    for (let u = 0, h = 0; u < e.height; u++) {
      const m = n.child(u);
      h += m.nodeSize;
      const p = [];
      let b;
      m.lastChild == null || m.lastChild.type == c.cell ? b = d || (d = c.cell.createAndFill()) : b = f || (f = c.header_cell.createAndFill());
      for (let y = e.width; y < i; y++) p.push(b);
      t.insert(t.mapping.slice(s).map(h - 1 + r), p);
    }
  if (o > e.height) {
    const u = [];
    for (let p = 0, b = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const y = p >= e.width ? !1 : n.nodeAt(e.map[b + p]).type == c.header_cell;
      u.push(
        y ? f || (f = c.header_cell.createAndFill()) : d || (d = c.cell.createAndFill())
      );
    }
    const h = c.row.create(null, Be.from(u)), m = [];
    for (let p = e.height; p < o; p++) m.push(h);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), m);
  }
  return !!(d || f);
}
function tc(t, e, n, r, i, o, s, a) {
  if (s == 0 || s == e.height) return !1;
  let c = !1;
  for (let d = i; d < o; d++) {
    const f = s * e.width + d, u = e.map[f];
    if (e.map[f - e.width] == u) {
      c = !0;
      const h = n.nodeAt(u), { top: m, left: p } = e.findCell(u);
      t.setNodeMarkup(t.mapping.slice(a).map(u + r), null, {
        ...h.attrs,
        rowspan: s - m
      }), t.insert(
        t.mapping.slice(a).map(e.positionAt(s, p, n)),
        h.type.createAndFill({
          ...h.attrs,
          rowspan: m + h.attrs.rowspan - s
        })
      ), d += h.attrs.colspan - 1;
    }
  }
  return c;
}
function nc(t, e, n, r, i, o, s, a) {
  if (s == 0 || s == e.width) return !1;
  let c = !1;
  for (let d = i; d < o; d++) {
    const f = d * e.width + s, u = e.map[f];
    if (e.map[f - 1] == u) {
      c = !0;
      const h = n.nodeAt(u), m = e.colCount(u), p = t.mapping.slice(a).map(u + r);
      t.setNodeMarkup(
        p,
        null,
        cn(
          h.attrs,
          s - m,
          h.attrs.colspan - (s - m)
        )
      ), t.insert(
        p + h.nodeSize,
        h.type.createAndFill(
          cn(h.attrs, 0, s - m)
        )
      ), d += h.attrs.rowspan - 1;
    }
  }
  return c;
}
function rc(t, e, n, r, i) {
  let o = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!o)
    throw new Error("No table found");
  let s = xe.get(o);
  const { top: a, left: c } = r, d = c + i.width, f = a + i.height, u = t.tr;
  let h = 0;
  function m() {
    if (o = n ? u.doc.nodeAt(n - 1) : u.doc, !o)
      throw new Error("No table found");
    s = xe.get(o), h = u.mapping.maps.length;
  }
  yx(u, s, o, n, d, f, h) && m(), tc(u, s, o, n, c, d, a, h) && m(), tc(u, s, o, n, c, d, f, h) && m(), nc(u, s, o, n, a, f, c, h) && m(), nc(u, s, o, n, a, f, d, h) && m();
  for (let p = a; p < f; p++) {
    const b = s.positionAt(p, c, o), y = s.positionAt(p, d, o);
    u.replace(
      u.mapping.slice(h).map(b + n),
      u.mapping.slice(h).map(y + n),
      new Ze(i.rows[p - a], 0, 0)
    );
  }
  m(), u.setSelection(
    new pe(
      u.doc.resolve(n + s.positionAt(a, c, o)),
      u.doc.resolve(n + s.positionAt(f - 1, d - 1, o))
    )
  ), e(u);
}
var xx = c0({
  ArrowLeft: Jr("horiz", -1),
  ArrowRight: Jr("horiz", 1),
  ArrowUp: Jr("vert", -1),
  ArrowDown: Jr("vert", 1),
  "Shift-ArrowLeft": Yr("horiz", -1),
  "Shift-ArrowRight": Yr("horiz", 1),
  "Shift-ArrowUp": Yr("vert", -1),
  "Shift-ArrowDown": Yr("vert", 1),
  Backspace: Kr,
  "Mod-Backspace": Kr,
  Delete: Kr,
  "Mod-Delete": Kr
});
function ci(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Jr(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    if (o instanceof pe)
      return ci(
        n,
        r,
        Qe.near(o.$headCell, e)
      );
    if (t != "horiz" && !o.empty) return !1;
    const s = bf(i, t, e);
    if (s == null) return !1;
    if (t == "horiz")
      return ci(
        n,
        r,
        Qe.near(n.doc.resolve(o.head + e), e)
      );
    {
      const a = n.doc.resolve(s), c = df(a, t, e);
      let d;
      return c ? d = Qe.near(c, 1) : e < 0 ? d = Qe.near(n.doc.resolve(a.before(-1)), -1) : d = Qe.near(n.doc.resolve(a.after(-1)), 1), ci(n, r, d);
    }
  };
}
function Yr(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const o = n.selection;
    let s;
    if (o instanceof pe)
      s = o;
    else {
      const c = bf(i, t, e);
      if (c == null) return !1;
      s = new pe(n.doc.resolve(c));
    }
    const a = df(s.$headCell, t, e);
    return a ? ci(
      n,
      r,
      new pe(s.$anchorCell, a)
    ) : !1;
  };
}
function wx(t, e) {
  const n = t.state.doc, r = qn(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new pe(r))), !0) : !1;
}
function kx(t, e, n) {
  if (!vt(t.state)) return !1;
  let r = gx(n);
  const i = t.state.selection;
  if (i instanceof pe) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        Be.from(
          Ss(Pe(t.state.schema).cell, n)
        )
      ]
    });
    const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), a = xe.get(o).rectBetween(
      i.$anchorCell.pos - s,
      i.$headCell.pos - s
    );
    return r = vx(r, a.right - a.left, a.bottom - a.top), rc(t.state, t.dispatch, s, a, r), !0;
  } else if (r) {
    const o = co(t.state), s = o.start(-1);
    return rc(
      t.state,
      t.dispatch,
      s,
      xe.get(o.node(-1)).findCell(o.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function Cx(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = ic(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof pe)
    o(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = qn(t.state.selection.$anchor)) != null && ((n = Ho(t, e)) == null ? void 0 : n.pos) != i.pos)
    o(i, e), e.preventDefault();
  else if (!r)
    return;
  function o(c, d) {
    let f = Ho(t, d);
    const u = Ut.getState(t.state) == null;
    if (!f || !Ol(c, f))
      if (u) f = c;
      else return;
    const h = new pe(c, f);
    if (u || !t.state.selection.eq(h)) {
      const m = t.state.tr.setSelection(h);
      u && m.setMeta(Ut, c.pos), t.dispatch(m);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", a), Ut.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(Ut, -1));
  }
  function a(c) {
    const d = c, f = Ut.getState(t.state);
    let u;
    if (f != null)
      u = t.state.doc.resolve(f);
    else if (ic(t, d.target) != r && (u = Ho(t, e), !u))
      return s();
    u && o(u, d);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", a);
}
function bf(t, e, n) {
  if (!(t.state.selection instanceof st)) return null;
  const { $head: r } = t.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const o = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : o.childCount)) return null;
    if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
      const a = r.before(i), c = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(c) ? a : null;
    }
  }
  return null;
}
function ic(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function Ho(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? qn(t.state.doc.resolve(n.pos)) : null;
}
var Nx = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Is(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Is(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Is(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, d = e.firstChild;
  const f = t.firstChild;
  if (f) {
    for (let u = 0, h = 0; u < f.childCount; u++) {
      const { colspan: m, colwidth: p } = f.child(u).attrs;
      for (let b = 0; b < m; b++, h++) {
        const y = i == h ? o : p && p[b], v = y ? y + "px" : "";
        if (a += y || r, y || (c = !1), d)
          d.style.width != v && (d.style.width = v), d = d.nextSibling;
        else {
          const w = document.createElement("col");
          w.style.width = v, e.appendChild(w);
        }
      }
    }
    for (; d; ) {
      const u = d.nextSibling;
      (s = d.parentNode) == null || s.removeChild(d), d = u;
    }
    c ? (n.style.width = a + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = a + "px");
  }
}
var Ge = new We(
  "tableColumnResizing"
);
function Sx({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = Nx,
  lastColumnResizable: i = !0
} = {}) {
  const o = new It({
    key: Ge,
    state: {
      init(s, a) {
        var c, d;
        const f = (d = (c = o.spec) == null ? void 0 : c.props) == null ? void 0 : d.nodeViews, u = Pe(a.schema).table.name;
        return r && f && (f[u] = (h, m) => new r(h, n, m)), new Ix(-1, !1);
      },
      apply(s, a) {
        return a.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const a = Ge.getState(s);
        return a && a.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, a) => {
          Ax(s, a, t, i);
        },
        mouseleave: (s) => {
          Tx(s);
        },
        mousedown: (s, a) => {
          Ex(s, a, e, n);
        }
      },
      decorations: (s) => {
        const a = Ge.getState(s);
        if (a && a.activeHandle > -1)
          return Rx(s, a.activeHandle);
      },
      nodeViews: {}
    }
  });
  return o;
}
var Ix = class di {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(Ge);
    if (r && r.setHandle != null)
      return new di(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new di(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return Ns(e.doc.resolve(i)) || (i = -1), new di(i, n.dragging);
    }
    return n;
  }
};
function Ax(t, e, n, r) {
  if (!t.editable) return;
  const i = Ge.getState(t.state);
  if (i && !i.dragging) {
    const o = _x(e.target);
    let s = -1;
    if (o) {
      const { left: a, right: c } = o.getBoundingClientRect();
      e.clientX - a <= n ? s = oc(t, e, "left", n) : c - e.clientX <= n && (s = oc(t, e, "right", n));
    }
    if (s != i.activeHandle) {
      if (!r && s !== -1) {
        const a = t.state.doc.resolve(s), c = a.node(-1), d = xe.get(c), f = a.start(-1);
        if (d.colCount(a.pos - f) + a.nodeAfter.attrs.colspan - 1 == d.width - 1)
          return;
      }
      vf(t, s);
    }
  }
}
function Tx(t) {
  if (!t.editable) return;
  const e = Ge.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && vf(t, -1);
}
function Ex(t, e, n, r) {
  var i;
  if (!t.editable) return !1;
  const o = (i = t.dom.ownerDocument.defaultView) != null ? i : window, s = Ge.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const a = t.state.doc.nodeAt(s.activeHandle), c = Dx(t, s.activeHandle, a.attrs);
  t.dispatch(
    t.state.tr.setMeta(Ge, {
      setDragging: { startX: e.clientX, startWidth: c }
    })
  );
  function d(u) {
    o.removeEventListener("mouseup", d), o.removeEventListener("mousemove", f);
    const h = Ge.getState(t.state);
    h?.dragging && (Lx(
      t,
      h.activeHandle,
      sc(h.dragging, u, n)
    ), t.dispatch(
      t.state.tr.setMeta(Ge, { setDragging: null })
    ));
  }
  function f(u) {
    if (!u.which) return d(u);
    const h = Ge.getState(t.state);
    if (h && h.dragging) {
      const m = sc(h.dragging, u, n);
      lc(
        t,
        h.activeHandle,
        m,
        r
      );
    }
  }
  return lc(
    t,
    s.activeHandle,
    c,
    r
  ), o.addEventListener("mouseup", d), o.addEventListener("mousemove", f), e.preventDefault(), !0;
}
function Dx(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const o = t.domAtPos(e);
  let a = o.node.childNodes[o.offset].offsetWidth, c = n;
  if (r)
    for (let d = 0; d < n; d++)
      r[d] && (a -= r[d], c--);
  return a / c;
}
function _x(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function oc(t, e, n, r) {
  const i = n == "right" ? -r : r, o = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!o) return -1;
  const { pos: s } = o, a = qn(t.state.doc.resolve(s));
  if (!a) return -1;
  if (n == "right") return a.pos;
  const c = xe.get(a.node(-1)), d = a.start(-1), f = c.map.indexOf(a.pos - d);
  return f % c.width == 0 ? -1 : d + c.map[f - 1];
}
function sc(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function vf(t, e) {
  t.dispatch(
    t.state.tr.setMeta(Ge, { setHandle: e })
  );
}
function Lx(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), o = xe.get(i), s = r.start(-1), a = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, c = t.state.tr;
  for (let d = 0; d < o.height; d++) {
    const f = d * o.width + a;
    if (d && o.map[f] == o.map[f - o.width]) continue;
    const u = o.map[f], h = i.nodeAt(u).attrs, m = h.colspan == 1 ? 0 : a - o.colCount(u);
    if (h.colwidth && h.colwidth[m] == n) continue;
    const p = h.colwidth ? h.colwidth.slice() : Ox(h.colspan);
    p[m] = n, c.setNodeMarkup(s + u, null, { ...h, colwidth: p });
  }
  c.docChanged && t.dispatch(c);
}
function lc(t, e, n, r) {
  const i = t.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), a = xe.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
  let c = t.domAtPos(i.start(-1)).node;
  for (; c && c.nodeName != "TABLE"; )
    c = c.parentNode;
  c && Is(
    o,
    c.firstChild,
    c,
    r,
    a,
    n
  );
}
function Ox(t) {
  return Array(t).fill(0);
}
function Rx(t, e) {
  var n;
  const r = [], i = t.doc.resolve(e), o = i.node(-1);
  if (!o)
    return fr.empty;
  const s = xe.get(o), a = i.start(-1), c = s.colCount(i.pos - a) + i.nodeAfter.attrs.colspan - 1;
  for (let d = 0; d < s.height; d++) {
    const f = c + d * s.width;
    if ((c == s.width - 1 || s.map[f] != s.map[f + 1]) && (d == 0 || s.map[f] != s.map[f - s.width])) {
      const u = s.map[f], h = a + u + o.nodeAt(u).nodeSize - 1, m = document.createElement("div");
      m.className = "column-resize-handle", (n = Ge.getState(t)) != null && n.dragging && r.push(
        Ai.node(
          a + u,
          a + u + o.nodeAt(u).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(Ai.widget(h, m));
    }
  }
  return fr.create(t.doc, r);
}
function Fx({
  allowTableNodeSelection: t = !1
} = {}) {
  return new It({
    key: Ut,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(Ut);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: i, pos: o } = e.mapping.mapResult(n);
        return i ? null : o;
      }
    },
    props: {
      decorations: Ky,
      handleDOMEvents: {
        mousedown: Cx
      },
      createSelectionBetween(e) {
        return Ut.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: wx,
      handleKeyDown: xx,
      handlePaste: kx
    },
    appendTransaction(e, n, r) {
      return Qy(
        r,
        mf(r, n),
        t
      );
    }
  });
}
var Mx = bt.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          var e, n;
          const r = t.getAttribute("colwidth"), i = r ? r.split(",").map((o) => parseInt(o, 10)) : null;
          if (!i) {
            const o = (e = t.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), s = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(t);
            if (s && s > -1 && o && o[s]) {
              const a = o[s].getAttribute("width");
              return a ? [parseInt(a, 10)] : null;
            }
          }
          return i;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", ft(this.options.HTMLAttributes, t), 0];
  }
}), Px = bt.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", ft(this.options.HTMLAttributes, t), 0];
  }
}), zx = bt.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", ft(this.options.HTMLAttributes, t), 0];
  }
});
function As(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function ac(t, e, n, r, i, o) {
  var s;
  let a = 0, c = !0, d = e.firstChild;
  const f = t.firstChild;
  if (f !== null)
    for (let h = 0, m = 0; h < f.childCount; h += 1) {
      const { colspan: p, colwidth: b } = f.child(h).attrs;
      for (let y = 0; y < p; y += 1, m += 1) {
        const v = i === m ? o : b && b[y], w = v ? `${v}px` : "";
        if (a += v || r, v || (c = !1), d) {
          if (d.style.width !== w) {
            const [x, D] = As(r, v);
            d.style.setProperty(x, D);
          }
          d = d.nextSibling;
        } else {
          const x = document.createElement("col"), [D, N] = As(r, v);
          x.style.setProperty(D, N), e.appendChild(x);
        }
      }
    }
  for (; d; ) {
    const h = d.nextSibling;
    (s = d.parentNode) == null || s.removeChild(d), d = h;
  }
  const u = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  c && !u ? (n.style.width = `${a}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${a}px`);
}
var $x = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ac(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, ac(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function jx(t, e, n, r) {
  let i = 0, o = !0;
  const s = [], a = t.firstChild;
  if (!a)
    return {};
  for (let u = 0, h = 0; u < a.childCount; u += 1) {
    const { colspan: m, colwidth: p } = a.child(u).attrs;
    for (let b = 0; b < m; b += 1, h += 1) {
      const y = n === h ? r : p && p[b];
      i += y || e, y || (o = !1);
      const [v, w] = As(e, y);
      s.push(["col", { style: `${v}: ${w}` }]);
    }
  }
  const c = o ? `${i}px` : "", d = o ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: c, tableMinWidth: d };
}
function cc(t, e) {
  return t.createAndFill();
}
function Bx(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function Hx(t, e, n, r, i) {
  const o = Bx(t), s = [], a = [];
  for (let d = 0; d < n; d += 1) {
    const f = cc(o.cell);
    if (f && a.push(f), r) {
      const u = cc(o.header_cell);
      u && s.push(u);
    }
  }
  const c = [];
  for (let d = 0; d < e; d += 1)
    c.push(o.row.createChecked(null, r && d === 0 ? s : a));
  return o.table.createChecked(null, c);
}
function Vx(t) {
  return t instanceof pe;
}
var Qr = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!Vx(e))
    return !1;
  let n = 0;
  const r = h0(e.ranges[0].$from, (o) => o.type.name === "table");
  return r?.node.descendants((o) => {
    if (o.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(o.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, Wx = "";
function Ux(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function Gx(t, e, n = {}) {
  var r;
  const i = (r = n.cellLineSeparator) != null ? r : Wx;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const o = [];
  t.content.forEach((p) => {
    const b = [];
    p.content && p.content.forEach((y) => {
      let v = "";
      y.content && Array.isArray(y.content) && y.content.length > 1 ? v = y.content.map((N) => e.renderChildren(N)).join(i) : v = y.content ? e.renderChildren(y.content) : "";
      const w = Ux(v), x = y.type === "tableHeader";
      b.push({ text: w, isHeader: x });
    }), o.push(b);
  });
  const s = o.reduce((p, b) => Math.max(p, b.length), 0);
  if (s === 0)
    return "";
  const a = new Array(s).fill(0);
  o.forEach((p) => {
    var b;
    for (let y = 0; y < s; y += 1) {
      const w = (((b = p[y]) == null ? void 0 : b.text) || "").length;
      w > a[y] && (a[y] = w), a[y] < 3 && (a[y] = 3);
    }
  });
  const c = (p, b) => p + " ".repeat(Math.max(0, b - p.length)), d = o[0], f = d.some((p) => p.isHeader);
  let u = `
`;
  const h = new Array(s).fill(0).map((p, b) => f && d[b] && d[b].text || "");
  return u += `| ${h.map((p, b) => c(p, a[b])).join(" | ")} |
`, u += `| ${a.map((p) => "-".repeat(Math.max(3, p))).join(" | ")} |
`, (f ? o.slice(1) : o).forEach((p) => {
    u += `| ${new Array(s).fill(0).map((b, y) => c(p[y] && p[y].text || "", a[y])).join(" | ")} |
`;
  }), u;
}
var qx = Gx, Kx = bt.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: $x,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = jx(t, this.options.cellMinWidth), o = e.style;
    function s() {
      return o || (r ? `width: ${r}` : `min-width: ${i}`);
    }
    const a = [
      "table",
      ft(this.options.HTMLAttributes, e, {
        style: s()
      }),
      n,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, a] : a;
  },
  parseMarkdown: (t, e) => {
    const n = [];
    if (t.header) {
      const r = [];
      t.header.forEach((i) => {
        r.push(e.createNode("tableHeader", {}, [{ type: "paragraph", content: e.parseInline(i.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, r));
    }
    return t.rows && t.rows.forEach((r) => {
      const i = [];
      r.forEach((o) => {
        i.push(e.createNode("tableCell", {}, [{ type: "paragraph", content: e.parseInline(o.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, i));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => qx(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: o }) => {
        const s = Hx(o.schema, t, e, n);
        if (i) {
          const a = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(st.near(r.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => ex(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => tx(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => rx(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => ox(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => sx(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => ax(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => px(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Qa(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Xa(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => pr("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => pr("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => hx(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Qa(t, e) ? !0 : Xa(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => ux(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => ec(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => ec(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && mf(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = pe.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: Qr,
      "Mod-Backspace": Qr,
      Delete: Qr,
      "Mod-Delete": Qr
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Sx({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Fx({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: u0(f0(t, "tableRole", e))
    };
  }
}), Jx = pn.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Kx.configure(this.options.table)), this.options.tableCell !== !1 && t.push(Mx.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Px.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(zx.configure(this.options.tableRow)), t;
  }
});
const Yx = Jx.configure({
  table: {
    resizable: !0
  }
});
function Qx(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Xx(t, e, n) {
  const i = Jd((n || {}).ignore || []), o = Zx(e);
  let s = -1;
  for (; ++s < o.length; )
    rg(t, "text", a);
  function a(d, f) {
    let u = -1, h;
    for (; ++u < f.length; ) {
      const m = f[u], p = h ? h.children : void 0;
      if (i(
        m,
        p ? p.indexOf(m) : void 0,
        h
      ))
        return;
      h = m;
    }
    if (h)
      return c(d, f);
  }
  function c(d, f) {
    const u = f[f.length - 1], h = o[s][0], m = o[s][1];
    let p = 0;
    const y = u.children.indexOf(d);
    let v = !1, w = [];
    h.lastIndex = 0;
    let x = h.exec(d.value);
    for (; x; ) {
      const D = x.index, N = {
        index: x.index,
        input: x.input,
        stack: [...f, d]
      };
      let k = m(...x, N);
      if (typeof k == "string" && (k = k.length > 0 ? { type: "text", value: k } : void 0), k === !1 ? h.lastIndex = D + 1 : (p !== D && w.push({
        type: "text",
        value: d.value.slice(p, D)
      }), Array.isArray(k) ? w.push(...k) : k && w.push(k), p = D + x[0].length, v = !0), !h.global)
        break;
      x = h.exec(d.value);
    }
    return v ? (p < d.value.length && w.push({ type: "text", value: d.value.slice(p) }), u.children.splice(y, 1, ...w)) : w = [d], y + w.length;
  }
}
function Zx(t) {
  const e = [];
  if (!Array.isArray(t))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const n = !t[0] || Array.isArray(t[0]) ? t : [t];
  let r = -1;
  for (; ++r < n.length; ) {
    const i = n[r];
    e.push([e1(i[0]), t1(i[1])]);
  }
  return e;
}
function e1(t) {
  return typeof t == "string" ? new RegExp(Qx(t), "g") : t;
}
function t1(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Vo = "phrasing", Wo = ["autolink", "link", "image", "label"];
function n1() {
  return {
    transforms: [c1],
    enter: {
      literalAutolink: i1,
      literalAutolinkEmail: Uo,
      literalAutolinkHttp: Uo,
      literalAutolinkWww: Uo
    },
    exit: {
      literalAutolink: a1,
      literalAutolinkEmail: l1,
      literalAutolinkHttp: o1,
      literalAutolinkWww: s1
    }
  };
}
function r1() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Vo,
        notInConstruct: Wo
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Vo,
        notInConstruct: Wo
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Vo,
        notInConstruct: Wo
      }
    ]
  };
}
function i1(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Uo(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function o1(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function s1(t) {
  this.config.exit.data.call(this, t);
  const e = this.stack[this.stack.length - 1];
  e.type, e.url = "http://" + this.sliceSerialize(t);
}
function l1(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function a1(t) {
  this.exit(t);
}
function c1(t) {
  Xx(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, d1],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), u1]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function d1(t, e, n, r, i) {
  let o = "";
  if (!yf(i) || (/^w/i.test(e) && (n = e + n, e = "", o = "http://"), !f1(n)))
    return !1;
  const s = h1(n + r);
  if (!s[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: o + e + s[0],
    children: [{ type: "text", value: e + s[0] }]
  };
  return s[1] ? [a, { type: "text", value: s[1] }] : a;
}
function u1(t, e, n, r) {
  return (
    // Not an expected previous character.
    !yf(r, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(n) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + e + "@" + n,
      children: [{ type: "text", value: e + "@" + n }]
    }
  );
}
function f1(t) {
  const e = t.split(".");
  return !(e.length < 2 || e[e.length - 1] && (/_/.test(e[e.length - 1]) || !/[a-zA-Z\d]/.test(e[e.length - 1])) || e[e.length - 2] && (/_/.test(e[e.length - 2]) || !/[a-zA-Z\d]/.test(e[e.length - 2])));
}
function h1(t) {
  const e = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!e)
    return [t, void 0];
  t = t.slice(0, e.index);
  let n = e[0], r = n.indexOf(")");
  const i = va(t, "(");
  let o = va(t, ")");
  for (; r !== -1 && i > o; )
    t += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), o++;
  return [t, n];
}
function yf(t, e) {
  const n = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || Rn(n) || dl(n)) && // If it’s an email, the previous character should not be a slash.
  (!e || n !== 47);
}
xf.peek = k1;
function m1() {
  this.buffer();
}
function p1(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function g1() {
  this.buffer();
}
function b1(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function v1(t) {
  const e = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Er(
    this.sliceSerialize(t)
  ).toLowerCase(), n.label = e;
}
function y1(t) {
  this.exit(t);
}
function x1(t) {
  const e = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Er(
    this.sliceSerialize(t)
  ).toLowerCase(), n.label = e;
}
function w1(t) {
  this.exit(t);
}
function k1() {
  return "[";
}
function xf(t, e, n, r) {
  const i = n.createTracker(r);
  let o = i.move("[^");
  const s = n.enter("footnoteReference"), a = n.enter("reference");
  return o += i.move(
    n.safe(n.associationId(t), { after: "]", before: o })
  ), a(), s(), o += i.move("]"), o;
}
function C1() {
  return {
    enter: {
      gfmFootnoteCallString: m1,
      gfmFootnoteCall: p1,
      gfmFootnoteDefinitionLabelString: g1,
      gfmFootnoteDefinition: b1
    },
    exit: {
      gfmFootnoteCallString: v1,
      gfmFootnoteCall: y1,
      gfmFootnoteDefinitionLabelString: x1,
      gfmFootnoteDefinition: w1
    }
  };
}
function N1(t) {
  let e = !1;
  return t && t.firstLineBlank && (e = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: xf },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, o, s) {
    const a = o.createTracker(s);
    let c = a.move("[^");
    const d = o.enter("footnoteDefinition"), f = o.enter("label");
    return c += a.move(
      o.safe(o.associationId(r), { before: c, after: "]" })
    ), f(), c += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), c += a.move(
      (e ? `
` : " ") + o.indentLines(
        o.containerFlow(r, a.current()),
        e ? wf : S1
      )
    )), d(), c;
  }
}
function S1(t, e, n) {
  return e === 0 ? t : wf(t, e, n);
}
function wf(t, e, n) {
  return (n ? "" : "    ") + t;
}
const I1 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
kf.peek = _1;
function A1() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: E1 },
    exit: { strikethrough: D1 }
  };
}
function T1() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: I1
      }
    ],
    handlers: { delete: kf }
  };
}
function E1(t) {
  this.enter({ type: "delete", children: [] }, t);
}
function D1(t) {
  this.exit(t);
}
function kf(t, e, n, r) {
  const i = n.createTracker(r), o = n.enter("strikethrough");
  let s = i.move("~~");
  return s += n.containerPhrasing(t, {
    ...i.current(),
    before: s,
    after: "~"
  }), s += i.move("~~"), o(), s;
}
function _1() {
  return "~";
}
function L1(t) {
  return t.length;
}
function O1(t, e) {
  const n = e || {}, r = (n.align || []).concat(), i = n.stringLength || L1, o = [], s = [], a = [], c = [];
  let d = 0, f = -1;
  for (; ++f < t.length; ) {
    const b = [], y = [];
    let v = -1;
    for (t[f].length > d && (d = t[f].length); ++v < t[f].length; ) {
      const w = R1(t[f][v]);
      if (n.alignDelimiters !== !1) {
        const x = i(w);
        y[v] = x, (c[v] === void 0 || x > c[v]) && (c[v] = x);
      }
      b.push(w);
    }
    s[f] = b, a[f] = y;
  }
  let u = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++u < d; )
      o[u] = dc(r[u]);
  else {
    const b = dc(r);
    for (; ++u < d; )
      o[u] = b;
  }
  u = -1;
  const h = [], m = [];
  for (; ++u < d; ) {
    const b = o[u];
    let y = "", v = "";
    b === 99 ? (y = ":", v = ":") : b === 108 ? y = ":" : b === 114 && (v = ":");
    let w = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      c[u] - y.length - v.length
    );
    const x = y + "-".repeat(w) + v;
    n.alignDelimiters !== !1 && (w = y.length + w + v.length, w > c[u] && (c[u] = w), m[u] = w), h[u] = x;
  }
  s.splice(1, 0, h), a.splice(1, 0, m), f = -1;
  const p = [];
  for (; ++f < s.length; ) {
    const b = s[f], y = a[f];
    u = -1;
    const v = [];
    for (; ++u < d; ) {
      const w = b[u] || "";
      let x = "", D = "";
      if (n.alignDelimiters !== !1) {
        const N = c[u] - (y[u] || 0), k = o[u];
        k === 114 ? x = " ".repeat(N) : k === 99 ? N % 2 ? (x = " ".repeat(N / 2 + 0.5), D = " ".repeat(N / 2 - 0.5)) : (x = " ".repeat(N / 2), D = x) : D = " ".repeat(N);
      }
      n.delimiterStart !== !1 && !u && v.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && w === "") && (n.delimiterStart !== !1 || u) && v.push(" "), n.alignDelimiters !== !1 && v.push(x), v.push(w), n.alignDelimiters !== !1 && v.push(D), n.padding !== !1 && v.push(" "), (n.delimiterEnd !== !1 || u !== d - 1) && v.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? v.join("").replace(/ +$/, "") : v.join("")
    );
  }
  return p.join(`
`);
}
function R1(t) {
  return t == null ? "" : String(t);
}
function dc(t) {
  const e = typeof t == "string" ? t.codePointAt(0) : 0;
  return e === 67 || e === 99 ? 99 : e === 76 || e === 108 ? 108 : e === 82 || e === 114 ? 114 : 0;
}
function F1(t, e, n, r) {
  const i = n.enter("blockquote"), o = n.createTracker(r);
  o.move("> "), o.shift(2);
  const s = n.indentLines(
    n.containerFlow(t, o.current()),
    M1
  );
  return i(), s;
}
function M1(t, e, n) {
  return ">" + (n ? "" : " ") + t;
}
function P1(t, e) {
  return uc(t, e.inConstruct, !0) && !uc(t, e.notInConstruct, !1);
}
function uc(t, e, n) {
  if (typeof e == "string" && (e = [e]), !e || e.length === 0)
    return n;
  let r = -1;
  for (; ++r < e.length; )
    if (t.includes(e[r]))
      return !0;
  return !1;
}
function fc(t, e, n, r) {
  let i = -1;
  for (; ++i < n.unsafe.length; )
    if (n.unsafe[i].character === `
` && P1(n.stack, n.unsafe[i]))
      return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function z1(t, e) {
  const n = String(t);
  let r = n.indexOf(e), i = r, o = 0, s = 0;
  if (typeof e != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++o > s && (s = o) : o = 1, i = r + e.length, r = n.indexOf(e, i);
  return s;
}
function $1(t, e) {
  return !!(e.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^ \r\n]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value));
}
function j1(t) {
  const e = t.options.fence || "`";
  if (e !== "`" && e !== "~")
    throw new Error(
      "Cannot serialize code with `" + e + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return e;
}
function B1(t, e, n, r) {
  const i = j1(n), o = t.value || "", s = i === "`" ? "GraveAccent" : "Tilde";
  if ($1(t, n)) {
    const u = n.enter("codeIndented"), h = n.indentLines(o, H1);
    return u(), h;
  }
  const a = n.createTracker(r), c = i.repeat(Math.max(z1(o, i) + 1, 3)), d = n.enter("codeFenced");
  let f = a.move(c);
  if (t.lang) {
    const u = n.enter(`codeFencedLang${s}`);
    f += a.move(
      n.safe(t.lang, {
        before: f,
        after: " ",
        encode: ["`"],
        ...a.current()
      })
    ), u();
  }
  if (t.lang && t.meta) {
    const u = n.enter(`codeFencedMeta${s}`);
    f += a.move(" "), f += a.move(
      n.safe(t.meta, {
        before: f,
        after: `
`,
        encode: ["`"],
        ...a.current()
      })
    ), u();
  }
  return f += a.move(`
`), o && (f += a.move(o + `
`)), f += a.move(c), d(), f;
}
function H1(t, e, n) {
  return (n ? "" : "    ") + t;
}
function Rl(t) {
  const e = t.options.quote || '"';
  if (e !== '"' && e !== "'")
    throw new Error(
      "Cannot serialize title with `" + e + "` for `options.quote`, expected `\"`, or `'`"
    );
  return e;
}
function V1(t, e, n, r) {
  const i = Rl(n), o = i === '"' ? "Quote" : "Apostrophe", s = n.enter("definition");
  let a = n.enter("label");
  const c = n.createTracker(r);
  let d = c.move("[");
  return d += c.move(
    n.safe(n.associationId(t), {
      before: d,
      after: "]",
      ...c.current()
    })
  ), d += c.move("]: "), a(), // If there’s no url, or…
  !t.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (a = n.enter("destinationLiteral"), d += c.move("<"), d += c.move(
    n.safe(t.url, { before: d, after: ">", ...c.current() })
  ), d += c.move(">")) : (a = n.enter("destinationRaw"), d += c.move(
    n.safe(t.url, {
      before: d,
      after: t.title ? " " : `
`,
      ...c.current()
    })
  )), a(), t.title && (a = n.enter(`title${o}`), d += c.move(" " + i), d += c.move(
    n.safe(t.title, {
      before: d,
      after: i,
      ...c.current()
    })
  ), d += c.move(i), a()), s(), d;
}
function W1(t) {
  const e = t.options.emphasis || "*";
  if (e !== "*" && e !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + e + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return e;
}
function gr(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function Oi(t, e, n) {
  const r = Ci(t), i = Ci(e);
  return r === void 0 ? i === void 0 ? (
    // Letter inside:
    // we have to encode *both* letters for `_` as it is looser.
    // it already forms for `*` (and GFMs `~`).
    n === "_" ? { inside: !0, outside: !0 } : { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (letter, whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: encode outer (letter)
    { inside: !1, outside: !0 }
  ) : r === 1 ? i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode both (whitespace).
    { inside: !0, outside: !0 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === void 0 ? (
    // Letter inside: already forms.
    { inside: !1, outside: !1 }
  ) : i === 1 ? (
    // Whitespace inside: encode inner (whitespace).
    { inside: !0, outside: !1 }
  ) : (
    // Punctuation inside: already forms.
    { inside: !1, outside: !1 }
  );
}
Cf.peek = U1;
function Cf(t, e, n, r) {
  const i = W1(n), o = n.enter("emphasis"), s = n.createTracker(r), a = s.move(i);
  let c = s.move(
    n.containerPhrasing(t, {
      after: i,
      before: a,
      ...s.current()
    })
  );
  const d = c.charCodeAt(0), f = Oi(
    r.before.charCodeAt(r.before.length - 1),
    d,
    i
  );
  f.inside && (c = gr(d) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), h = Oi(r.after.charCodeAt(0), u, i);
  h.inside && (c = c.slice(0, -1) + gr(u));
  const m = s.move(i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, a + c + m;
}
function U1(t, e, n) {
  return n.options.emphasis || "*";
}
function G1(t, e) {
  let n = !1;
  return ig(t, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, og;
  }), !!((!t.depth || t.depth < 3) && Yd(t) && (e.options.setext || n));
}
function q1(t, e, n, r) {
  const i = Math.max(Math.min(6, t.depth || 1), 1), o = n.createTracker(r);
  if (G1(t, n)) {
    const f = n.enter("headingSetext"), u = n.enter("phrasing"), h = n.containerPhrasing(t, {
      ...o.current(),
      before: `
`,
      after: `
`
    });
    return u(), f(), h + `
` + (i === 1 ? "=" : "-").repeat(
      // The whole size…
      h.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(h.lastIndexOf("\r"), h.lastIndexOf(`
`)) + 1)
    );
  }
  const s = "#".repeat(i), a = n.enter("headingAtx"), c = n.enter("phrasing");
  o.move(s + " ");
  let d = n.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...o.current()
  });
  return /^[\t ]/.test(d) && (d = gr(d.charCodeAt(0)) + d.slice(1)), d = d ? s + " " + d : s, n.options.closeAtx && (d += " " + s), c(), a(), d;
}
Nf.peek = K1;
function Nf(t) {
  return t.value || "";
}
function K1() {
  return "<";
}
Sf.peek = J1;
function Sf(t, e, n, r) {
  const i = Rl(n), o = i === '"' ? "Quote" : "Apostrophe", s = n.enter("image");
  let a = n.enter("label");
  const c = n.createTracker(r);
  let d = c.move("![");
  return d += c.move(
    n.safe(t.alt, { before: d, after: "]", ...c.current() })
  ), d += c.move("]("), a(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (a = n.enter("destinationLiteral"), d += c.move("<"), d += c.move(
    n.safe(t.url, { before: d, after: ">", ...c.current() })
  ), d += c.move(">")) : (a = n.enter("destinationRaw"), d += c.move(
    n.safe(t.url, {
      before: d,
      after: t.title ? " " : ")",
      ...c.current()
    })
  )), a(), t.title && (a = n.enter(`title${o}`), d += c.move(" " + i), d += c.move(
    n.safe(t.title, {
      before: d,
      after: i,
      ...c.current()
    })
  ), d += c.move(i), a()), d += c.move(")"), s(), d;
}
function J1() {
  return "!";
}
If.peek = Y1;
function If(t, e, n, r) {
  const i = t.referenceType, o = n.enter("imageReference");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let c = a.move("![");
  const d = n.safe(t.alt, {
    before: c,
    after: "]",
    ...a.current()
  });
  c += a.move(d + "]["), s();
  const f = n.stack;
  n.stack = [], s = n.enter("reference");
  const u = n.safe(n.associationId(t), {
    before: c,
    after: "]",
    ...a.current()
  });
  return s(), n.stack = f, o(), i === "full" || !d || d !== u ? c += a.move(u + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += a.move("]"), c;
}
function Y1() {
  return "!";
}
Af.peek = Q1;
function Af(t, e, n) {
  let r = t.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < n.unsafe.length; ) {
    const s = n.unsafe[o], a = n.compilePattern(s);
    let c;
    if (s.atBreak)
      for (; c = a.exec(r); ) {
        let d = c.index;
        r.charCodeAt(d) === 10 && r.charCodeAt(d - 1) === 13 && d--, r = r.slice(0, d) + " " + r.slice(c.index + 1);
      }
  }
  return i + r + i;
}
function Q1() {
  return "`";
}
function Tf(t, e) {
  const n = Yd(t);
  return !!(!e.options.resourceLink && // If there’s a url…
  t.url && // And there’s a no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (n === t.url || "mailto:" + n === t.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
Ef.peek = X1;
function Ef(t, e, n, r) {
  const i = Rl(n), o = i === '"' ? "Quote" : "Apostrophe", s = n.createTracker(r);
  let a, c;
  if (Tf(t, n)) {
    const f = n.stack;
    n.stack = [], a = n.enter("autolink");
    let u = s.move("<");
    return u += s.move(
      n.containerPhrasing(t, {
        before: u,
        after: ">",
        ...s.current()
      })
    ), u += s.move(">"), a(), n.stack = f, u;
  }
  a = n.enter("link"), c = n.enter("label");
  let d = s.move("[");
  return d += s.move(
    n.containerPhrasing(t, {
      before: d,
      after: "](",
      ...s.current()
    })
  ), d += s.move("]("), c(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (c = n.enter("destinationLiteral"), d += s.move("<"), d += s.move(
    n.safe(t.url, { before: d, after: ">", ...s.current() })
  ), d += s.move(">")) : (c = n.enter("destinationRaw"), d += s.move(
    n.safe(t.url, {
      before: d,
      after: t.title ? " " : ")",
      ...s.current()
    })
  )), c(), t.title && (c = n.enter(`title${o}`), d += s.move(" " + i), d += s.move(
    n.safe(t.title, {
      before: d,
      after: i,
      ...s.current()
    })
  ), d += s.move(i), c()), d += s.move(")"), a(), d;
}
function X1(t, e, n) {
  return Tf(t, n) ? "<" : "[";
}
Df.peek = Z1;
function Df(t, e, n, r) {
  const i = t.referenceType, o = n.enter("linkReference");
  let s = n.enter("label");
  const a = n.createTracker(r);
  let c = a.move("[");
  const d = n.containerPhrasing(t, {
    before: c,
    after: "]",
    ...a.current()
  });
  c += a.move(d + "]["), s();
  const f = n.stack;
  n.stack = [], s = n.enter("reference");
  const u = n.safe(n.associationId(t), {
    before: c,
    after: "]",
    ...a.current()
  });
  return s(), n.stack = f, o(), i === "full" || !d || d !== u ? c += a.move(u + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += a.move("]"), c;
}
function Z1() {
  return "[";
}
function Fl(t) {
  const e = t.options.bullet || "*";
  if (e !== "*" && e !== "+" && e !== "-")
    throw new Error(
      "Cannot serialize items with `" + e + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return e;
}
function ew(t) {
  const e = Fl(t), n = t.options.bulletOther;
  if (!n)
    return e === "*" ? "-" : "*";
  if (n !== "*" && n !== "+" && n !== "-")
    throw new Error(
      "Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (n === e)
    throw new Error(
      "Expected `bullet` (`" + e + "`) and `bulletOther` (`" + n + "`) to be different"
    );
  return n;
}
function tw(t) {
  const e = t.options.bulletOrdered || ".";
  if (e !== "." && e !== ")")
    throw new Error(
      "Cannot serialize items with `" + e + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return e;
}
function _f(t) {
  const e = t.options.rule || "*";
  if (e !== "*" && e !== "-" && e !== "_")
    throw new Error(
      "Cannot serialize rules with `" + e + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return e;
}
function nw(t, e, n, r) {
  const i = n.enter("list"), o = n.bulletCurrent;
  let s = t.ordered ? tw(n) : Fl(n);
  const a = t.ordered ? s === "." ? ")" : "." : ew(n);
  let c = e && n.bulletLastUsed ? s === n.bulletLastUsed : !1;
  if (!t.ordered) {
    const f = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (s === "*" || s === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), _f(n) === s && f
    ) {
      let u = -1;
      for (; ++u < t.children.length; ) {
        const h = t.children[u];
        if (h && h.type === "listItem" && h.children && h.children[0] && h.children[0].type === "thematicBreak") {
          c = !0;
          break;
        }
      }
    }
  }
  c && (s = a), n.bulletCurrent = s;
  const d = n.containerFlow(t, r);
  return n.bulletLastUsed = s, n.bulletCurrent = o, i(), d;
}
function rw(t) {
  const e = t.options.listItemIndent || "one";
  if (e !== "tab" && e !== "one" && e !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + e + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return e;
}
function iw(t, e, n, r) {
  const i = rw(n);
  let o = n.bulletCurrent || Fl(n);
  e && e.type === "list" && e.ordered && (o = (typeof e.start == "number" && e.start > -1 ? e.start : 1) + (n.options.incrementListMarker === !1 ? 0 : e.children.indexOf(t)) + o);
  let s = o.length + 1;
  (i === "tab" || i === "mixed" && (e && e.type === "list" && e.spread || t.spread)) && (s = Math.ceil(s / 4) * 4);
  const a = n.createTracker(r);
  a.move(o + " ".repeat(s - o.length)), a.shift(s);
  const c = n.enter("listItem"), d = n.indentLines(
    n.containerFlow(t, a.current()),
    f
  );
  return c(), d;
  function f(u, h, m) {
    return h ? (m ? "" : " ".repeat(s)) + u : (m ? o : o + " ".repeat(s - o.length)) + u;
  }
}
function ow(t, e, n, r) {
  const i = n.enter("paragraph"), o = n.enter("phrasing"), s = n.containerPhrasing(t, r);
  return o(), i(), s;
}
const sw = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Jd([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function lw(t, e, n, r) {
  return (t.children.some(function(s) {
    return sw(s);
  }) ? n.containerPhrasing : n.containerFlow).call(n, t, r);
}
function aw(t) {
  const e = t.options.strong || "*";
  if (e !== "*" && e !== "_")
    throw new Error(
      "Cannot serialize strong with `" + e + "` for `options.strong`, expected `*`, or `_`"
    );
  return e;
}
Lf.peek = cw;
function Lf(t, e, n, r) {
  const i = aw(n), o = n.enter("strong"), s = n.createTracker(r), a = s.move(i + i);
  let c = s.move(
    n.containerPhrasing(t, {
      after: i,
      before: a,
      ...s.current()
    })
  );
  const d = c.charCodeAt(0), f = Oi(
    r.before.charCodeAt(r.before.length - 1),
    d,
    i
  );
  f.inside && (c = gr(d) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), h = Oi(r.after.charCodeAt(0), u, i);
  h.inside && (c = c.slice(0, -1) + gr(u));
  const m = s.move(i + i);
  return o(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, a + c + m;
}
function cw(t, e, n) {
  return n.options.strong || "*";
}
function dw(t, e, n, r) {
  return n.safe(t.value, r);
}
function uw(t) {
  const e = t.options.ruleRepetition || 3;
  if (e < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + e + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return e;
}
function fw(t, e, n) {
  const r = (_f(n) + (n.options.ruleSpaces ? " " : "")).repeat(uw(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Of = {
  blockquote: F1,
  break: fc,
  code: B1,
  definition: V1,
  emphasis: Cf,
  hardBreak: fc,
  heading: q1,
  html: Nf,
  image: Sf,
  imageReference: If,
  inlineCode: Af,
  link: Ef,
  linkReference: Df,
  list: nw,
  listItem: iw,
  paragraph: ow,
  root: lw,
  strong: Lf,
  text: dw,
  thematicBreak: fw
};
function hw() {
  return {
    enter: {
      table: mw,
      tableData: hc,
      tableHeader: hc,
      tableRow: gw
    },
    exit: {
      codeText: bw,
      table: pw,
      tableData: Go,
      tableHeader: Go,
      tableRow: Go
    }
  };
}
function mw(t) {
  const e = t._align;
  this.enter(
    {
      type: "table",
      align: e.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    },
    t
  ), this.data.inTable = !0;
}
function pw(t) {
  this.exit(t), this.data.inTable = void 0;
}
function gw(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Go(t) {
  this.exit(t);
}
function hc(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function bw(t) {
  let e = this.resume();
  this.data.inTable && (e = e.replace(/\\([\\|])/g, vw));
  const n = this.stack[this.stack.length - 1];
  n.type, n.value = e, this.exit(t);
}
function vw(t, e) {
  return e === "|" ? e : t;
}
function yw(t) {
  const e = t || {}, n = e.tableCellPadding, r = e.tablePipeAlign, i = e.stringLength, o = n ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: h,
      table: s,
      tableCell: c,
      tableRow: a
    }
  };
  function s(m, p, b, y) {
    return d(f(m, b, y), m.align);
  }
  function a(m, p, b, y) {
    const v = u(m, b, y), w = d([v]);
    return w.slice(0, w.indexOf(`
`));
  }
  function c(m, p, b, y) {
    const v = b.enter("tableCell"), w = b.enter("phrasing"), x = b.containerPhrasing(m, {
      ...y,
      before: o,
      after: o
    });
    return w(), v(), x;
  }
  function d(m, p) {
    return O1(m, {
      align: p,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: r,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: n,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: i
    });
  }
  function f(m, p, b) {
    const y = m.children;
    let v = -1;
    const w = [], x = p.enter("table");
    for (; ++v < y.length; )
      w[v] = u(y[v], p, b);
    return x(), w;
  }
  function u(m, p, b) {
    const y = m.children;
    let v = -1;
    const w = [], x = p.enter("tableRow");
    for (; ++v < y.length; )
      w[v] = c(y[v], m, p, b);
    return x(), w;
  }
  function h(m, p, b) {
    let y = Of.inlineCode(m, p, b);
    return b.stack.includes("tableCell") && (y = y.replace(/\|/g, "\\$&")), y;
  }
}
function xw() {
  return {
    exit: {
      taskListCheckValueChecked: mc,
      taskListCheckValueUnchecked: mc,
      paragraph: kw
    }
  };
}
function ww() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: Cw }
  };
}
function mc(t) {
  const e = this.stack[this.stack.length - 2];
  e.type, e.checked = t.type === "taskListCheckValueChecked";
}
function kw(t) {
  const e = this.stack[this.stack.length - 2];
  if (e && e.type === "listItem" && typeof e.checked == "boolean") {
    const n = this.stack[this.stack.length - 1];
    n.type;
    const r = n.children[0];
    if (r && r.type === "text") {
      const i = e.children;
      let o = -1, s;
      for (; ++o < i.length; ) {
        const a = i[o];
        if (a.type === "paragraph") {
          s = a;
          break;
        }
      }
      s === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(t);
}
function Cw(t, e, n, r) {
  const i = t.children[0], o = typeof t.checked == "boolean" && i && i.type === "paragraph", s = "[" + (t.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  o && a.move(s);
  let c = Of.listItem(t, e, n, {
    ...r,
    ...a.current()
  });
  return o && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, d)), c;
  function d(f) {
    return f + s;
  }
}
function Nw() {
  return [
    n1(),
    C1(),
    A1(),
    hw(),
    xw()
  ];
}
function Sw(t) {
  return {
    extensions: [
      r1(),
      N1(t),
      T1(),
      yw(t),
      ww()
    ]
  };
}
const Iw = {
  tokenize: Lw,
  partial: !0
}, Rf = {
  tokenize: Ow,
  partial: !0
}, Ff = {
  tokenize: Rw,
  partial: !0
}, Mf = {
  tokenize: Fw,
  partial: !0
}, Aw = {
  tokenize: Mw,
  partial: !0
}, Pf = {
  name: "wwwAutolink",
  tokenize: Dw,
  previous: $f
}, zf = {
  name: "protocolAutolink",
  tokenize: _w,
  previous: jf
}, jt = {
  name: "emailAutolink",
  tokenize: Ew,
  previous: Bf
}, Tt = {};
function Tw() {
  return {
    text: Tt
  };
}
let tn = 48;
for (; tn < 123; )
  Tt[tn] = jt, tn++, tn === 58 ? tn = 65 : tn === 91 && (tn = 97);
Tt[43] = jt;
Tt[45] = jt;
Tt[46] = jt;
Tt[95] = jt;
Tt[72] = [jt, zf];
Tt[104] = [jt, zf];
Tt[87] = [jt, Pf];
Tt[119] = [jt, Pf];
function Ew(t, e, n) {
  const r = this;
  let i, o;
  return s;
  function s(u) {
    return !Ts(u) || !Bf.call(r, r.previous) || Ml(r.events) ? n(u) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), a(u));
  }
  function a(u) {
    return Ts(u) ? (t.consume(u), a) : u === 64 ? (t.consume(u), c) : n(u);
  }
  function c(u) {
    return u === 46 ? t.check(Aw, f, d)(u) : u === 45 || u === 95 || ul(u) ? (o = !0, t.consume(u), c) : f(u);
  }
  function d(u) {
    return t.consume(u), i = !0, c;
  }
  function f(u) {
    return o && i && lr(r.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), e(u)) : n(u);
  }
}
function Dw(t, e, n) {
  const r = this;
  return i;
  function i(s) {
    return s !== 87 && s !== 119 || !$f.call(r, r.previous) || Ml(r.events) ? n(s) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(Iw, t.attempt(Rf, t.attempt(Ff, o), n), n)(s));
  }
  function o(s) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), e(s);
  }
}
function _w(t, e, n) {
  const r = this;
  let i = "", o = !1;
  return s;
  function s(u) {
    return (u === 72 || u === 104) && jf.call(r, r.previous) && !Ml(r.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), i += String.fromCodePoint(u), t.consume(u), a) : n(u);
  }
  function a(u) {
    if (lr(u) && i.length < 5)
      return i += String.fromCodePoint(u), t.consume(u), a;
    if (u === 58) {
      const h = i.toLowerCase();
      if (h === "http" || h === "https")
        return t.consume(u), c;
    }
    return n(u);
  }
  function c(u) {
    return u === 47 ? (t.consume(u), o ? d : (o = !0, c)) : n(u);
  }
  function d(u) {
    return u === null || sg(u) || qe(u) || Rn(u) || dl(u) ? n(u) : t.attempt(Rf, t.attempt(Ff, f), n)(u);
  }
  function f(u) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), e(u);
  }
}
function Lw(t, e, n) {
  let r = 0;
  return i;
  function i(s) {
    return (s === 87 || s === 119) && r < 3 ? (r++, t.consume(s), i) : s === 46 && r === 3 ? (t.consume(s), o) : n(s);
  }
  function o(s) {
    return s === null ? n(s) : e(s);
  }
}
function Ow(t, e, n) {
  let r, i, o;
  return s;
  function s(d) {
    return d === 46 || d === 95 ? t.check(Mf, c, a)(d) : d === null || qe(d) || Rn(d) || d !== 45 && dl(d) ? c(d) : (o = !0, t.consume(d), s);
  }
  function a(d) {
    return d === 95 ? r = !0 : (i = r, r = void 0), t.consume(d), s;
  }
  function c(d) {
    return i || r || !o ? n(d) : e(d);
  }
}
function Rw(t, e) {
  let n = 0, r = 0;
  return i;
  function i(s) {
    return s === 40 ? (n++, t.consume(s), i) : s === 41 && r < n ? o(s) : s === 33 || s === 34 || s === 38 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 60 || s === 63 || s === 93 || s === 95 || s === 126 ? t.check(Mf, e, o)(s) : s === null || qe(s) || Rn(s) ? e(s) : (t.consume(s), i);
  }
  function o(s) {
    return s === 41 && r++, t.consume(s), i;
  }
}
function Fw(t, e, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (t.consume(a), r) : a === 38 ? (t.consume(a), o) : a === 93 ? (t.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || qe(a) || Rn(a) ? e(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || qe(a) || Rn(a) ? e(a) : r(a);
  }
  function o(a) {
    return lr(a) ? s(a) : n(a);
  }
  function s(a) {
    return a === 59 ? (t.consume(a), r) : lr(a) ? (t.consume(a), s) : n(a);
  }
}
function Mw(t, e, n) {
  return r;
  function r(o) {
    return t.consume(o), i;
  }
  function i(o) {
    return ul(o) ? n(o) : e(o);
  }
}
function $f(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || qe(t);
}
function jf(t) {
  return !lr(t);
}
function Bf(t) {
  return !(t === 47 || Ts(t));
}
function Ts(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || ul(t);
}
function Ml(t) {
  let e = t.length, n = !1;
  for (; e--; ) {
    const r = t[e][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return t.length > 0 && !n && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
const Pw = {
  tokenize: Uw,
  partial: !0
};
function zw() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: Hw,
        continuation: {
          tokenize: Vw
        },
        exit: Ww
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Bw
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: $w,
        resolveTo: jw
      }
    }
  };
}
function $w(t, e, n) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s;
  for (; i--; ) {
    const c = r.events[i][1];
    if (c.type === "labelImage") {
      s = c;
      break;
    }
    if (c.type === "gfmFootnoteCall" || c.type === "labelLink" || c.type === "label" || c.type === "image" || c.type === "link")
      break;
  }
  return a;
  function a(c) {
    if (!s || !s._balanced)
      return n(c);
    const d = Er(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }));
    return d.codePointAt(0) !== 94 || !o.includes(d.slice(1)) ? n(c) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(c), t.exit("gfmFootnoteCallLabelMarker"), e(c));
  }
}
function jw(t, e) {
  let n = t.length;
  for (; n--; )
    if (t[n][1].type === "labelImage" && t[n][0] === "enter") {
      t[n][1];
      break;
    }
  t[n + 1][1].type = "data", t[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[n + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[n + 3][1].end),
    end: Object.assign({}, t[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, s = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, o.start),
    end: Object.assign({}, o.end)
  }, a = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[n + 1],
    t[n + 2],
    ["enter", r, e],
    // The `[`
    t[n + 3],
    t[n + 4],
    // The `^`.
    ["enter", i, e],
    ["exit", i, e],
    // Everything in between.
    ["enter", o, e],
    ["enter", s, e],
    ["exit", s, e],
    ["exit", o, e],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", r, e]
  ];
  return t.splice(n, t.length - n + 1, ...a), t;
}
function Bw(t, e, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, s;
  return a;
  function a(u) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(u), t.exit("gfmFootnoteCallLabelMarker"), c;
  }
  function c(u) {
    return u !== 94 ? n(u) : (t.enter("gfmFootnoteCallMarker"), t.consume(u), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", d);
  }
  function d(u) {
    if (
      // Too long.
      o > 999 || // Closing brace with nothing.
      u === 93 && !s || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      u === null || u === 91 || qe(u)
    )
      return n(u);
    if (u === 93) {
      t.exit("chunkString");
      const h = t.exit("gfmFootnoteCallString");
      return i.includes(Er(r.sliceSerialize(h))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(u), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), e) : n(u);
    }
    return qe(u) || (s = !0), o++, t.consume(u), u === 92 ? f : d;
  }
  function f(u) {
    return u === 91 || u === 92 || u === 93 ? (t.consume(u), o++, d) : d(u);
  }
}
function Hw(t, e, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, s = 0, a;
  return c;
  function c(p) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(p), t.exit("gfmFootnoteDefinitionLabelMarker"), d;
  }
  function d(p) {
    return p === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(p), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", f) : n(p);
  }
  function f(p) {
    if (
      // Too long.
      s > 999 || // Closing brace with nothing.
      p === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || qe(p)
    )
      return n(p);
    if (p === 93) {
      t.exit("chunkString");
      const b = t.exit("gfmFootnoteDefinitionLabelString");
      return o = Er(r.sliceSerialize(b)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(p), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return qe(p) || (a = !0), s++, t.consume(p), p === 92 ? u : f;
  }
  function u(p) {
    return p === 91 || p === 92 || p === 93 ? (t.consume(p), s++, f) : f(p);
  }
  function h(p) {
    return p === 58 ? (t.enter("definitionMarker"), t.consume(p), t.exit("definitionMarker"), i.includes(o) || i.push(o), Vt(t, m, "gfmFootnoteDefinitionWhitespace")) : n(p);
  }
  function m(p) {
    return e(p);
  }
}
function Vw(t, e, n) {
  return t.check(lg, e, t.attempt(Pw, e, n));
}
function Ww(t) {
  t.exit("gfmFootnoteDefinition");
}
function Uw(t, e, n) {
  const r = this;
  return Vt(t, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "gfmFootnoteDefinitionIndent" && s[2].sliceSerialize(s[1], !0).length === 4 ? e(o) : n(o);
  }
}
function Gw(t) {
  let n = (t || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: o,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(s, a) {
    let c = -1;
    for (; ++c < s.length; )
      if (s[c][0] === "enter" && s[c][1].type === "strikethroughSequenceTemporary" && s[c][1]._close) {
        let d = c;
        for (; d--; )
          if (s[d][0] === "exit" && s[d][1].type === "strikethroughSequenceTemporary" && s[d][1]._open && // If the sizes are the same:
          s[c][1].end.offset - s[c][1].start.offset === s[d][1].end.offset - s[d][1].start.offset) {
            s[c][1].type = "strikethroughSequence", s[d][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, s[d][1].start),
              end: Object.assign({}, s[c][1].end)
            }, u = {
              type: "strikethroughText",
              start: Object.assign({}, s[d][1].end),
              end: Object.assign({}, s[c][1].start)
            }, h = [["enter", f, a], ["enter", s[d][1], a], ["exit", s[d][1], a], ["enter", u, a]], m = a.parser.constructs.insideSpan.null;
            m && Mo(h, h.length, 0, ag(m, s.slice(d + 1, c), a)), Mo(h, h.length, 0, [["exit", u, a], ["enter", s[c][1], a], ["exit", s[c][1], a], ["exit", f, a]]), Mo(s, d - 1, c - d + 3, h), c = d + h.length - 2;
            break;
          }
      }
    for (c = -1; ++c < s.length; )
      s[c][1].type === "strikethroughSequenceTemporary" && (s[c][1].type = "data");
    return s;
  }
  function o(s, a, c) {
    const d = this.previous, f = this.events;
    let u = 0;
    return h;
    function h(p) {
      return d === 126 && f[f.length - 1][1].type !== "characterEscape" ? c(p) : (s.enter("strikethroughSequenceTemporary"), m(p));
    }
    function m(p) {
      const b = Ci(d);
      if (p === 126)
        return u > 1 ? c(p) : (s.consume(p), u++, m);
      if (u < 2 && !n) return c(p);
      const y = s.exit("strikethroughSequenceTemporary"), v = Ci(p);
      return y._open = !v || v === 2 && !!b, y._close = !b || b === 2 && !!v, a(p);
    }
  }
}
class qw {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(e, n, r) {
    Kw(this, e, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(e) {
    if (this.map.sort(function(o, s) {
      return o[0] - s[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(e.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), e.length = this.map[n][0];
    r.push(e.slice()), e.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const o of i)
        e.push(o);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Kw(t, e, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < t.map.length; ) {
      if (t.map[i][0] === e) {
        t.map[i][1] += n, t.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    t.map.push([e, n, r]);
  }
}
function Jw(t, e) {
  let n = !1;
  const r = [];
  for (; e < t.length; ) {
    const i = t[e];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(t[e + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (t[e - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    e += 1;
  }
  return r;
}
function Yw() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Qw,
        resolveAll: Xw
      }
    }
  };
}
function Qw(t, e, n) {
  const r = this;
  let i = 0, o = 0, s;
  return a;
  function a(S) {
    let L = r.events.length - 1;
    for (; L > -1; ) {
      const R = r.events[L][1].type;
      if (R === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      R === "linePrefix") L--;
      else break;
    }
    const A = L > -1 ? r.events[L][1].type : null, O = A === "tableHead" || A === "tableRow" ? k : c;
    return O === k && r.parser.lazy[r.now().line] ? n(S) : O(S);
  }
  function c(S) {
    return t.enter("tableHead"), t.enter("tableRow"), d(S);
  }
  function d(S) {
    return S === 124 || (s = !0, o += 1), f(S);
  }
  function f(S) {
    return S === null ? n(S) : ir(S) ? o > 1 ? (o = 0, r.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(S), t.exit("lineEnding"), m) : n(S) : Nn(S) ? Vt(t, f, "whitespace")(S) : (o += 1, s && (s = !1, i += 1), S === 124 ? (t.enter("tableCellDivider"), t.consume(S), t.exit("tableCellDivider"), s = !0, f) : (t.enter("data"), u(S)));
  }
  function u(S) {
    return S === null || S === 124 || qe(S) ? (t.exit("data"), f(S)) : (t.consume(S), S === 92 ? h : u);
  }
  function h(S) {
    return S === 92 || S === 124 ? (t.consume(S), u) : u(S);
  }
  function m(S) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(S) : (t.enter("tableDelimiterRow"), s = !1, Nn(S) ? Vt(t, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : p(S));
  }
  function p(S) {
    return S === 45 || S === 58 ? y(S) : S === 124 ? (s = !0, t.enter("tableCellDivider"), t.consume(S), t.exit("tableCellDivider"), b) : N(S);
  }
  function b(S) {
    return Nn(S) ? Vt(t, y, "whitespace")(S) : y(S);
  }
  function y(S) {
    return S === 58 ? (o += 1, s = !0, t.enter("tableDelimiterMarker"), t.consume(S), t.exit("tableDelimiterMarker"), v) : S === 45 ? (o += 1, v(S)) : S === null || ir(S) ? D(S) : N(S);
  }
  function v(S) {
    return S === 45 ? (t.enter("tableDelimiterFiller"), w(S)) : N(S);
  }
  function w(S) {
    return S === 45 ? (t.consume(S), w) : S === 58 ? (s = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(S), t.exit("tableDelimiterMarker"), x) : (t.exit("tableDelimiterFiller"), x(S));
  }
  function x(S) {
    return Nn(S) ? Vt(t, D, "whitespace")(S) : D(S);
  }
  function D(S) {
    return S === 124 ? p(S) : S === null || ir(S) ? !s || i !== o ? N(S) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), e(S)) : N(S);
  }
  function N(S) {
    return n(S);
  }
  function k(S) {
    return t.enter("tableRow"), I(S);
  }
  function I(S) {
    return S === 124 ? (t.enter("tableCellDivider"), t.consume(S), t.exit("tableCellDivider"), I) : S === null || ir(S) ? (t.exit("tableRow"), e(S)) : Nn(S) ? Vt(t, I, "whitespace")(S) : (t.enter("data"), E(S));
  }
  function E(S) {
    return S === null || S === 124 || qe(S) ? (t.exit("data"), I(S)) : (t.consume(S), S === 92 ? T : E);
  }
  function T(S) {
    return S === 92 || S === 124 ? (t.consume(S), E) : E(S);
  }
}
function Xw(t, e) {
  let n = -1, r = !0, i = 0, o = [0, 0, 0, 0], s = [0, 0, 0, 0], a = !1, c = 0, d, f, u;
  const h = new qw();
  for (; ++n < t.length; ) {
    const m = t[n], p = m[1];
    m[0] === "enter" ? p.type === "tableHead" ? (a = !1, c !== 0 && (pc(h, e, c, d, f), f = void 0, c = 0), d = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, h.add(n, 0, [["enter", d, e]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, u = void 0, o = [0, 0, 0, 0], s = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, h.add(n, 0, [["enter", f, e]])), i = p.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, s[2] === 0 && (o[1] !== 0 && (s[0] = s[1], u = Xr(h, e, o, i, void 0, u), o = [0, 0, 0, 0]), s[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (o[1] !== 0 && (s[0] = s[1], u = Xr(h, e, o, i, void 0, u)), o = s, s = [o[1], n, 0, 0])) : p.type === "tableHead" ? (a = !0, c = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (c = n, o[1] !== 0 ? (s[0] = s[1], u = Xr(h, e, o, i, n, u)) : s[1] !== 0 && (u = Xr(h, e, s, i, n, u)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (s[3] = n);
  }
  for (c !== 0 && pc(h, e, c, d, f), h.consume(e.events), n = -1; ++n < e.events.length; ) {
    const m = e.events[n];
    m[0] === "enter" && m[1].type === "table" && (m[1]._align = Jw(e.events, n));
  }
  return t;
}
function Xr(t, e, n, r, i, o) {
  const s = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (o.end = Object.assign({}, Sn(e.events, n[0])), t.add(n[0], 0, [["exit", o, e]]));
  const c = Sn(e.events, n[1]);
  if (o = {
    type: s,
    start: Object.assign({}, c),
    // Note: correct end is set later.
    end: Object.assign({}, c)
  }, t.add(n[1], 0, [["enter", o, e]]), n[2] !== 0) {
    const d = Sn(e.events, n[2]), f = Sn(e.events, n[3]), u = {
      type: a,
      start: Object.assign({}, d),
      end: Object.assign({}, f)
    };
    if (t.add(n[2], 0, [["enter", u, e]]), r !== 2) {
      const h = e.events[n[2]], m = e.events[n[3]];
      if (h[1].end = Object.assign({}, m[1].end), h[1].type = "chunkText", h[1].contentType = "text", n[3] > n[2] + 1) {
        const p = n[2] + 1, b = n[3] - n[2] - 1;
        t.add(p, b, []);
      }
    }
    t.add(n[3] + 1, 0, [["exit", u, e]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Sn(e.events, i)), t.add(i, 0, [["exit", o, e]]), o = void 0), o;
}
function pc(t, e, n, r, i) {
  const o = [], s = Sn(e.events, n);
  i && (i.end = Object.assign({}, s), o.push(["exit", i, e])), r.end = Object.assign({}, s), o.push(["exit", r, e]), t.add(n + 1, 0, o);
}
function Sn(t, e) {
  const n = t[e], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const Zw = {
  name: "tasklistCheck",
  tokenize: tk
};
function ek() {
  return {
    text: {
      91: Zw
    }
  };
}
function tk(t, e, n) {
  const r = this;
  return i;
  function i(c) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(c) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(c), t.exit("taskListCheckMarker"), o)
    );
  }
  function o(c) {
    return qe(c) ? (t.enter("taskListCheckValueUnchecked"), t.consume(c), t.exit("taskListCheckValueUnchecked"), s) : c === 88 || c === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(c), t.exit("taskListCheckValueChecked"), s) : n(c);
  }
  function s(c) {
    return c === 93 ? (t.enter("taskListCheckMarker"), t.consume(c), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), a) : n(c);
  }
  function a(c) {
    return ir(c) ? e(c) : Nn(c) ? t.check({
      tokenize: nk
    }, e, n)(c) : n(c);
  }
}
function nk(t, e, n) {
  return Vt(t, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : e(i);
  }
}
function rk(t) {
  return cg([
    Tw(),
    zw(),
    Gw(t),
    Yw(),
    ek()
  ]);
}
const ik = {};
function ok(t) {
  const e = (
    /** @type {Processor<Root>} */
    this
  ), n = t || ik, r = e.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), s = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(rk(n)), o.push(Nw()), s.push(Sw(n));
}
const sk = dg().use(ug).use(ok).use(fg).use(hg), lk = q(function({ content: e, className: n, format: r = "html", ...i }, o) {
  const s = z(() => Qd.sanitize(r === "markdown" ? String(sk.processSync(e)) : e, {
    ADD_ATTR: ["target"],
    ALLOWED_ATTR: ["href", "target", "rel", "class"]
  }), [r, e]), a = /<[^>]*>/.test(s);
  return l("div", {
    ref: o,
    className: C("rich-text-display-container", !a && "whitespace-pre-wrap", n),
    dangerouslySetInnerHTML: {
      __html: s
    },
    ...i
  });
}), ak = q(function({ title: e, onClose: n, content: r, primaryAction: i, secondaryAction: o }, s) {
  return g("div", {
    ref: s,
    className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
    children: [g("div", {
      className: "flex flex-row items-center justify-between px-4 py-2",
      children: [l(Ke, {
        className: "font-medium",
        children: e
      }), n && l(B, {
        variant: "ghost",
        icon: en,
        size: "sm",
        hideLabel: !0,
        onClick: n,
        label: "Close"
      })]
    }), g("div", {
      className: "flex flex-col gap-[1px]",
      children: [l("div", {
        className: C("bg-f1-background px-4 py-3", o || i ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
        children: l(lk, {
          content: r
        })
      }), (o || i) && g("div", {
        className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
        children: [l("div", {
          children: o && l(B, {
            label: o.label,
            onClick: o.onClick,
            variant: "outline",
            icon: o.icon
          })
        }), l("div", {
          children: i && l(B, {
            label: i.label,
            onClick: i.onClick,
            variant: "outline",
            icon: i.icon
          })
        })]
      })]
    })]
  });
}), ck = ({ compact: t }) => g("div", {
  className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
  "aria-busy": "true",
  "aria-live": "polite",
  children: [l("div", {
    className: "flex flex-row items-center justify-between px-4 py-2",
    children: l(M, {
      className: "h-5 w-32 rounded-md"
    })
  }), g("div", {
    className: "flex flex-col gap-[1px]",
    children: [l("div", {
      className: C("rounded-t-[13.25px] bg-f1-background px-4 py-3", t && "rounded-[13.25px]"),
      children: g("div", {
        className: "flex flex-col gap-2",
        children: [l(M, {
          className: "h-4 w-full rounded-md"
        }), l(M, {
          className: "h-4 w-3/4 rounded-md"
        }), l(M, {
          className: "h-4 w-1/2 rounded-md"
        })]
      })
    }), !t && g("div", {
      className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
      children: [l(M, {
        className: "h-8 w-24 rounded-md"
      }), l(M, {
        className: "h-8 w-28 rounded-md"
      })]
    })]
  })]
}), Hf = q((t, e) => l(ak, {
  ref: e,
  ...t
})), dk = ({ compact: t }) => l(ck, {
  compact: t
});
Hf.displayName = "F0AiBanner";
const Vf = Ne(Hf, dk), uk = (t) => {
  if (!t?.content) return "";
  try {
    return m0(t.content, [Lu, Ou, Ru, p0, Fu, Mu, Pu, zu, $u, ju, lf, cf, af]);
  } catch {
    return "";
  }
}, fk = (t, e) => z(() => {
  if (e?.selectedTitle || e?.selectedEmoji)
    return {
      title: e.selectedTitle || t.title,
      emoji: e.selectedEmoji
    };
  const n = t.buttons?.find((r) => r.type === e?.selectedAction);
  return n ? {
    title: n.label,
    emoji: n.emoji
  } : {
    title: t.title
  };
}, [e, t]), hk = (t, e) => {
  const [n, r] = F(!1), i = ne(async (o) => {
    const s = t.buttons?.find((c) => c.type === o), a = {
      selectedAction: o,
      selectedTitle: s?.label || o,
      selectedEmoji: s?.emoji || "🤖",
      isEditable: s?.editable ?? !1
    };
    r(!0), e({
      data: {
        ...a,
        content: null
      }
    });
    try {
      const c = await t.onClick(o);
      e({
        data: {
          ...a,
          content: c
        }
      });
    } catch (c) {
      console.error("AIBlock error:", c), e({
        data: {
          ...a,
          content: null
        }
      });
    } finally {
      r(!1);
    }
  }, [t, e]);
  return {
    isLoading: n,
    handleClick: i
  };
}, mk = (t, e, n) => {
  V(() => {
    if (!n?.selectedAction || !t?.buttons) return;
    if (!n?.selectedTitle || !n?.selectedEmoji || n?.isEditable === void 0) {
      const i = t.buttons.find((o) => o.type === n.selectedAction);
      i && e({
        data: {
          ...n,
          selectedTitle: i.label,
          selectedEmoji: i.emoji,
          isEditable: i.editable ?? !1
        }
      });
    }
  }, [n, t, e]);
}, pk = (t, e, n) => {
  V(() => {
    t?.shouldExecute && t?.selectedAction && e && n && (n({
      data: {
        ...t,
        shouldExecute: !1
      }
    }), e(t.selectedAction));
  }, [e, n, t]);
}, gk = (t, e, n, r) => {
  V(() => {
    if (!r?.content || !r?.isEditable || !t || !n) return;
    const i = n();
    i !== void 0 && (e(), r.content && t.chain().focus().setTextSelection(i).insertContent(r.content).run());
  }, [r, t, n, e]);
}, bk = ({ config: t, isLoading: e, onButtonClick: n }) => g("div", {
  className: "flex flex-col gap-2",
  children: [t.title && l("div", {
    className: "text-f1-foreground-secondary",
    children: t.title
  }), l("div", {
    className: "relative flex flex-row flex-wrap items-center gap-2",
    children: t.buttons?.map((r, i) => l(B, {
      onClick: () => n(r.type),
      variant: "outline",
      icon: r.icon,
      label: r.label,
      disabled: e
    }, i))
  })]
}), vk = ({ isEditable: t }) => t ? g("div", {
  className: "flex flex-col gap-2",
  children: [l(M, {
    className: "h-4 w-1/2 rounded-md"
  }), l(M, {
    className: "h-4 w-full rounded-md"
  }), l(M, {
    className: "h-4 w-3/4 rounded-md"
  }), l(M, {
    className: "h-4 w-1/3 rounded-md"
  })]
}) : l(Vf.Skeleton, {
  compact: !0
}), yk = ({ node: t, updateAttributes: e, deleteNode: n, extension: r, editor: i, getPos: o }) => {
  const s = t.attrs.data, a = r.options.currentConfig || t.attrs.config, { title: c } = fk(a, s), { isLoading: d, handleClick: f } = hk(a, e), u = !!(s?.selectedAction && !s?.content), h = d || u, m = uk(s);
  if (gk(i, n, o, s), mk(a, e, s), pk(s, f, e), !s || !a || !a.buttons?.length) return null;
  const p = !!s?.content, y = !!(s?.selectedTitle || s?.selectedAction) && p && !s?.isEditable;
  return l(to, {
    contentEditable: !1,
    children: g("div", {
      className: "mb-3",
      children: [h ? l(vk, {
        isEditable: s?.isEditable
      }) : y ? l(Vf, {
        title: c,
        content: m,
        onClose: () => n()
      }) : l("div", {
        className: "editor-ai-block mb-3 flex w-full flex-col gap-4 rounded-lg",
        onClick: (w) => w.stopPropagation(),
        children: l(bk, {
          config: a,
          isLoading: h,
          onButtonClick: f
        })
      }), l(Al, {
        style: {
          display: "none"
        }
      })]
    })
  });
}, xk = bt.create({
  name: "aiBlock",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      currentConfig: null
    };
  },
  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("data-ai-block");
          return e ? JSON.parse(e) : null;
        },
        renderHTML: (t) => t.data ? {
          "data-ai-block": JSON.stringify(t.data)
        } : {}
      },
      config: {
        default: null
      },
      isCollapsed: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [{
      tag: "div[data-ai-block]"
    }];
  },
  renderHTML({ HTMLAttributes: t, node: e }) {
    const n = e.attrs.data, r = e.attrs.config;
    return !n || !r ? ["div"] : ["div", {
      ...t,
      class: "ai-block",
      "data-ai-block": JSON.stringify(n)
    }, ["div", {
      class: "ai-block-content"
    }, `AI Block: ${r.title}`]];
  },
  addNodeView() {
    return eo(yk);
  },
  addCommands() {
    return {
      insertAIBlock: (t, e) => ({ commands: n }) => n.insertContent({
        type: this.name,
        attrs: {
          data: t,
          config: e
        }
      }),
      executeAIAction: (t, e) => ({ commands: n }) => {
        const r = e.buttons?.find((i) => i.type === t);
        return r ? n.insertContent([{
          type: this.name,
          attrs: {
            data: {
              content: null,
              selectedAction: t,
              selectedTitle: r.label,
              selectedEmoji: r.emoji,
              isEditable: r.editable ?? !1,
              shouldExecute: !0
            },
            config: e
          }
        }, {
          type: "paragraph"
        }]) : !1;
      }
    };
  }
}), wk = xk, Wf = ["paragraph", "heading", "blockquote", "codeBlock", "bulletList", "orderedList", "listItem", "table", "details"], gc = new Set(Wf), kk = pn.create({
  name: "blockId",
  addGlobalAttributes() {
    return [{
      types: Wf,
      attributes: {
        id: {
          default: null,
          parseHTML: (t) => t.getAttribute("data-id"),
          renderHTML: (t) => t.id ? {
            "data-id": t.id
          } : {},
          keepOnSplit: !1
        }
      }
    }];
  },
  addProseMirrorPlugins() {
    return [new It({
      key: new We("blockIdPlugin"),
      appendTransaction: (t, e, n) => {
        if (!t.some((a) => a.docChanged))
          return null;
        const i = n.tr;
        let o = !1;
        const s = [];
        return t.forEach((a) => {
          a.docChanged && a.steps.forEach((c) => {
            c.getMap().forEach((f, u, h, m) => {
              const p = a.mapping.map(h), b = a.mapping.map(m), y = Math.max(0, Math.min(p, n.doc.content.size)), v = Math.max(0, Math.min(b, n.doc.content.size));
              y < v && s.push({
                from: y,
                to: v
              });
            });
          });
        }), s.length > 0 ? s.forEach(({ from: a, to: c }) => {
          a >= 0 && c <= n.doc.content.size && a < c && n.doc.nodesBetween(a, c, (d, f) => {
            if (gc.has(d.type.name) && !d.attrs.id) {
              const u = vs(5);
              i.setNodeMarkup(f, void 0, {
                ...d.attrs,
                id: u
              }), o = !0;
            }
          });
        }) : n.doc.descendants((a, c) => {
          if (gc.has(a.type.name) && !a.attrs.id) {
            const d = vs(5);
            i.setNodeMarkup(c, void 0, {
              ...a.attrs,
              id: d
            }), o = !0;
          }
          return !0;
        }), o ? i : null;
      }
    })];
  }
});
var Ck = ({ key: t, editor: e, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new It({
  key: t || new We("fileHandler"),
  props: {
    handleDrop(o, s) {
      var a;
      if (!r || !((a = s.dataTransfer) != null && a.files.length))
        return !1;
      const c = o.posAtCoords({
        left: s.clientX,
        top: s.clientY
      });
      let d = Array.from(s.dataTransfer.files);
      return i && (d = d.filter((f) => i.includes(f.type))), d.length === 0 ? !1 : (s.preventDefault(), s.stopPropagation(), r(e, d, c?.pos || 0), !0);
    },
    handlePaste(o, s) {
      var a;
      if (!n || !((a = s.clipboardData) != null && a.files.length))
        return !1;
      let c = Array.from(s.clipboardData.files);
      const d = s.clipboardData.getData("text/html");
      return i && (c = c.filter((f) => i.includes(f.type))), !(c.length === 0 || (s.preventDefault(), s.stopPropagation(), n(e, c, d), d.length > 0));
    }
  }
}), Nk = pn.create({
  name: "fileHandler",
  addOptions() {
    return {
      onPaste: void 0,
      onDrop: void 0,
      allowedMimeTypes: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      Ck({
        key: new We(this.name),
        editor: this.editor,
        allowedMimeTypes: this.options.allowedMimeTypes,
        onDrop: this.options.onDrop,
        onPaste: this.options.onPaste
      })
    ];
  }
});
const Sk = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Ik = bt.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", ft(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      g0({
        find: Sk,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
}), Ak = 15 * 1024 * 1024, Pl = ["image/jpeg", "image/png", "image/gif", "image/webp"], Tk = ({ node: t, deleteNode: e, selected: n, editor: r }) => {
  const { src: i, alt: o, title: s, uploading: a } = t.attrs, c = r.isEditable, d = X();
  return l(to, {
    className: "mb-2",
    children: g("div", {
      className: C("relative inline-block rounded-lg", n && "border-2 border-f1-border-selected-bold border-solid"),
      children: [l("img", {
        src: i,
        alt: o,
        title: s,
        draggable: !1,
        className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
      }), a && l("div", {
        className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200",
        children: l(sn, {
          size: "medium"
        })
      }), c && !a && l("div", {
        className: "dark absolute right-2 top-2",
        children: l(B, {
          onClick: e,
          label: d.actions.delete,
          icon: mn,
          variant: "outline",
          hideLabel: !0,
          size: "sm"
        })
      })]
    })
  });
}, Ek = Ik.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      uploading: {
        default: !1,
        renderHTML: () => ({}),
        parseHTML: () => !1
      },
      "data-upload-id": {
        default: null,
        renderHTML: () => ({}),
        parseHTML: () => null
      }
    };
  },
  addNodeView() {
    return eo(Tk);
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", ft(this.options.HTMLAttributes, t)];
  }
}).configure({
  inline: !1,
  allowBase64: !0
}), Es = async (t, e, n, r) => {
  const i = n.maxFileSize ?? Ak, { onError: o } = n;
  if (!Pl.includes(e.type)) {
    o?.("invalid-type");
    return;
  }
  if (e.size > i) {
    o?.("file-too-large");
    return;
  }
  const s = URL.createObjectURL(e), a = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`, c = r ?? t.state.selection.anchor;
  t.chain().focus().insertContentAt(c, [{
    type: "image",
    attrs: {
      src: s,
      alt: e.name,
      uploading: !0,
      "data-upload-id": a
    }
  }]).run();
  try {
    const { url: d } = await n.onUpload(e), { doc: f } = t.state;
    let u = null;
    f.descendants((h, m) => h.type.name === "image" && h.attrs["data-upload-id"] === a ? (u = m, !1) : !0), u !== null && t.chain().setNodeSelection(u).updateAttributes("image", {
      src: d,
      uploading: !1,
      "data-upload-id": null
    }).run();
  } catch {
    o?.("upload-failed");
    const { doc: d } = t.state;
    d.descendants((f, u) => f.type.name === "image" && f.attrs["data-upload-id"] === a ? (t.chain().setNodeSelection(u).deleteSelection().run(), !1) : !0);
  } finally {
    URL.revokeObjectURL(s);
  }
}, Dk = (t) => Nk.configure({
  allowedMimeTypes: Pl,
  onDrop: (e, n, r) => {
    n.forEach((i) => {
      Es(e, i, t, r);
    });
  },
  onPaste: (e, n) => {
    n.forEach((r) => {
      Es(e, r, t);
    });
  }
}), Uf = (t, e, n) => {
  Es(t, e, n);
}, Ds = {
  superNegative: vg,
  negative: bg,
  neutral: gg,
  positive: pg,
  superPositive: mg
}, _s = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive"
}, Gf = ({ firstName: t, lastName: e, src: n, "aria-label": r, "aria-labelledby": i, pulse: o, onPulseClick: s }) => {
  const a = X(), [c, d] = F(!o);
  return l("div", {
    className: "relative h-10 w-10",
    children: l(Ae, {
      mode: "popLayout",
      initial: !!c,
      children: c ? l(U.div, {
        className: "relative h-10 w-10 rounded-full bg-f1-background-warning",
        initial: {
          opacity: 0,
          scale: 0.8
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        exit: {
          opacity: 0,
          scale: 0.5
        },
        transition: {
          scale: {
            type: "spring",
            stiffness: 290,
            damping: 15.1,
            mass: 1.4
          },
          opacity: {
            type: "linear",
            duration: 0.2
          }
        },
        children: l(U.div, {
          initial: {
            opacity: 0,
            originX: 0.6,
            originY: 0.6
          },
          animate: {
            rotate: [-15, 20, -15],
            opacity: 1
          },
          exit: {
            opacity: 0,
            scale: 0
          },
          transition: {
            opacity: {
              duration: 0.4,
              ease: "easeOut"
            },
            scale: {
              duration: 0.4,
              ease: "easeOut"
            },
            rotate: {
              repeat: 1,
              duration: 0.5,
              ease: "easeInOut"
            }
          },
          onAnimationComplete: () => d(!1),
          className: "absolute inset-0 flex select-none items-center justify-center text-4xl",
          children: l(Dr, {
            emoji: "👋",
            size: "md"
          })
        }, "wave")
      }) : g(U.div, {
        initial: {
          opacity: 0,
          scale: 0.5
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        exit: {
          opacity: 0,
          scale: 0.5
        },
        className: "relative h-10 w-10",
        transition: {
          scale: {
            type: "spring",
            stiffness: 290,
            damping: 15.1,
            mass: 1.4
          },
          opacity: {
            type: "linear",
            duration: 0.2
          }
        },
        children: [l(Xd, {
          type: "rounded",
          name: [t, e],
          src: n,
          size: "lg",
          color: "random",
          "aria-label": r,
          "aria-labelledby": i
        }), o ? l("div", {
          className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background",
          children: l(fl, {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation(), s();
            },
            "aria-label": a.actions.edit,
            children: l(G, {
              icon: Ds[o],
              color: _s[o],
              size: "sm"
            })
          })
        }) : l(U.div, {
          initial: {
            opacity: 0,
            scale: 0.5
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.5
          },
          transition: {
            opacity: {
              delay: 0.25
            },
            scale: {
              delay: 0.25
            }
          },
          className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
          children: l(nt, {
            compact: !0,
            label: a.actions.add,
            variant: "neutral",
            size: "sm",
            icon: yg,
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation(), s();
            },
            hideLabel: !0
          })
        }, "reaction-button")]
      }, "avatar")
    })
  });
};
Gf.displayName = "PulseAvatar";
const _k = ({ node: t, deleteNode: e, updateAttributes: n }) => {
  const r = X(), [i, o] = F(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const d = !i;
    o(d), n({
      isOpen: d
    });
  }, c = [{
    label: r.actions.delete,
    icon: mn,
    critical: !0,
    onClick: () => e()
  }];
  return g(to, {
    contentEditable: !1,
    children: [g("div", {
      className: "editor-mood-tracker mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
      onClick: (d) => d.stopPropagation(),
      children: [g("div", {
        className: "flex flex-row items-center justify-between gap-2",
        children: [l("div", {
          className: "flex flex-row items-center gap-2",
          children: g("div", {
            className: "flex flex-col gap-1",
            children: [g("div", {
              className: "flex flex-row items-center gap-3",
              children: [l("p", {
                className: "text-f1-text-primary text-lg font-semibold",
                children: s.title
              }), l("div", {
                className: "flex flex-row items-center",
                children: s.days.map((d, f) => l("div", {
                  className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
                  children: l(G, {
                    icon: Ds[d.mood],
                    size: "lg",
                    color: _s[d.mood]
                  })
                }, f))
              })]
            }), l("p", {
              children: l("span", {
                className: "text-f1-text-primary text-md font-normal",
                children: s.averageMoodComment
              })
            })]
          })
        }), g("div", {
          className: "flex flex-row items-center gap-1",
          children: [l(B, {
            onClick: a,
            variant: "outline",
            hideLabel: !0,
            label: i ? r.actions.collapse : r.actions.expand,
            icon: i ? cl : Vn,
            size: "sm"
          }), l(Me, {
            items: c,
            size: "sm"
          })]
        })]
      }), i && l("div", {
        className: "text-f1-text-primary flex flex-col gap-2",
        children: s.days.map((d, f) => g("div", {
          className: "flex flex-row items-center gap-2",
          children: [l("div", {
            className: "flex items-center justify-center rounded-full",
            children: l(G, {
              icon: Ds[d.mood],
              size: "lg",
              color: _s[d.mood]
            })
          }), g("p", {
            className: "text-f1-text-primary text-md font-normal",
            children: [g("span", {
              className: "font-semibold",
              children: [d.day, ":"]
            }), " ", d.comment || "-"]
          })]
        }, f))
      })]
    }), l(Al, {
      style: {
        display: "none"
      }
    })]
  });
}, Lk = bt.create({
  name: "moodTracker",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      currentConfig: null
    };
  },
  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("data-mood-tracker");
          return e ? JSON.parse(e) : null;
        },
        renderHTML: (t) => t.data ? {
          "data-mood-tracker": JSON.stringify(t.data)
        } : {}
      },
      config: {
        default: null
      },
      isOpen: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [{
      tag: "div[data-mood-tracker]"
    }];
  },
  renderHTML({ HTMLAttributes: t, node: e }) {
    const n = e.attrs.data;
    return n ? ["div", {
      ...t,
      class: "mood-tracker-block",
      "data-mood-tracker": JSON.stringify(n)
    }, ["div", {
      class: "mood-tracker-content"
    }, `Mood Tracker: ${n.title}`]] : ["div"];
  },
  addNodeView() {
    return eo(_k);
  },
  addCommands() {
    return {
      insertMoodTracker: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: {
          data: t
        }
      })
    };
  }
}), Ok = Lk, Rk = ({ aiBlockConfig: t, translations: e, imageUploadConfig: n }) => Ls({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}).flatMap((i) => i.commands), Ls = ({ aiBlockConfig: t, translations: e, imageUploadConfig: n }) => [...t?.buttons && t.buttons.length > 0 ? [{
  title: t.title,
  commands: [...t.buttons.map((r) => ({
    title: r.label,
    command: (i) => {
      i.chain().focus().executeAIAction(r.type, t).run();
    },
    icon: r.icon
  }))]
}] : [], {
  title: e.richTextEditor.groups.textStyles,
  commands: [{
    title: e.richTextEditor.heading1,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleHeading({
        level: 1
      }).run();
    },
    icon: xg
  }, {
    title: e.richTextEditor.heading2,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleHeading({
        level: 2
      }).run();
    },
    icon: wg
  }, {
    title: e.richTextEditor.heading3,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleHeading({
        level: 3
      }).run();
    },
    icon: kg
  }]
}, {
  title: e.richTextEditor.groups.lists,
  commands: [{
    title: e.richTextEditor.bulletList,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleBulletList().run();
    },
    icon: hl
  }, {
    title: e.richTextEditor.orderedList,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleOrderedList().run();
    },
    icon: Cg
  }, {
    title: e.richTextEditor.taskList,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleTaskList().run();
    },
    icon: Zd
  }]
}, {
  title: e.richTextEditor.groups.blocks,
  commands: [...n ? [{
    title: "Image",
    command: (r) => {
      const i = document.createElement("input");
      i.type = "file", i.accept = Pl.join(","), i.onchange = () => {
        const o = i.files?.[0];
        o && Uf(r, o, n);
      }, i.click();
    },
    icon: Ng
  }] : [], {
    title: e.richTextEditor.details,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).setDetails().run();
    },
    icon: Vn
  }, {
    title: e.richTextEditor.codeBlock,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleCodeBlock().run();
    },
    icon: Sg
  }, {
    title: e.richTextEditor.quote,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).toggleBlockquote().run();
    },
    icon: Ig
  }, {
    title: e.richTextEditor.divider,
    command: (r) => {
      const { from: i, to: o } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: o
      }).setHorizontalRule().run();
    },
    icon: Ag
  }]
}], qf = q(({ items: t, groups: e, command: n }, r) => {
  const [i, o] = F(0), s = W(null), a = W(null), c = e || [{
    title: "",
    commands: t
  }], d = c.flatMap((y) => y.commands), f = ne((y) => {
    const v = d[y];
    v && n(v);
  }, [d, n]), u = ne((y) => {
    const v = s.current;
    if (!v) return;
    const w = v.getBoundingClientRect(), x = y.getBoundingClientRect();
    x.top < w.top ? v.scrollTop += x.top - w.top : x.bottom > w.bottom && (v.scrollTop += x.bottom - w.bottom);
  }, []), h = ne(() => {
    o((y) => y <= 0 ? d.length - 1 : y - 1);
  }, [d.length]), m = ne(() => {
    o((y) => y >= d.length - 1 ? 0 : y + 1);
  }, [d.length]), p = ne(() => {
    f(i);
  }, [i, f]);
  V(() => {
    a.current && u(a.current);
  }, [i, u]), V(() => {
    o(0);
  }, [t.length]), Nu(r, () => ({
    onKeyDown: ({ event: y }) => y.key === "ArrowUp" ? (y.preventDefault(), h(), !0) : y.key === "ArrowDown" ? (y.preventDefault(), m(), !0) : y.key === "Enter" ? (y.preventDefault(), p(), !0) : !1
  }), [h, m, p]);
  const b = (y, v) => {
    let w = 0;
    for (let x = 0; x < y; x++)
      w += c[x].commands.length;
    return w + v;
  };
  return l("div", {
    ref: s,
    className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
    children: c.map((y, v) => g("div", {
      children: [g("div", {
        className: "p-1",
        children: [e && y.title && l("div", {
          className: "p-2",
          children: l("p", {
            className: "text-sm font-medium tracking-wide text-f1-foreground-secondary",
            children: y.title
          })
        }), y.commands.map((w, x) => {
          const D = b(v, x), N = D === i;
          return g("div", {
            ref: N ? a : null,
            className: C("flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover", N && "bg-f1-background-secondary"),
            onClick: () => {
              o(D), f(D);
            },
            onMouseEnter: () => o(D),
            children: [w.emoji ? l("span", {
              className: "text-base",
              children: w.emoji
            }) : w.icon ? l(G, {
              icon: w.icon,
              className: "text-f1-foreground-secondary"
            }) : null, l("p", {
              className: "flex-grow text-sm font-medium text-f1-foreground",
              children: w.title
            })]
          }, `${v}-${x}`);
        })]
      }), e && v < c.length - 1 && l("div", {
        className: "py-1",
        children: l("div", {
          className: "h-[1px] w-full bg-f1-border-secondary"
        })
      })]
    }, v))
  });
});
qf.displayName = "CommandList";
const Fk = ({ aiBlockConfig: t, translations: e, imageUploadConfig: n }) => pn.create({
  name: "slashCommand",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        allowSpaces: !0,
        allowedPrefixes: [" ", `
`],
        startOfLine: !1,
        command: ({ editor: r, range: i, props: o }) => {
          const { state: s } = r, { from: a, to: c } = s.selection, f = s.doc.resolve(a), h = f.parent.textBetween(Math.max(0, f.parentOffset - 50), f.parentOffset, void 0, "￼").lastIndexOf("/");
          if (h !== -1) {
            const m = a - (f.parentOffset - h), p = c;
            r.chain().focus().deleteRange({
              from: m,
              to: p
            }).run();
          } else
            r.chain().focus().deleteRange(i).run();
          o.command(r);
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [b0({
      editor: this.editor,
      ...this.options.suggestion,
      items: ({ query: r }) => {
        const i = r.toLowerCase().trim(), o = Rk({
          translations: e,
          aiBlockConfig: t,
          imageUploadConfig: n
        }).filter((s) => {
          const a = s.title.toLowerCase();
          return i ? a.includes(i) : !0;
        });
        return o.length > 0 ? o : [];
      },
      render: () => {
        let r = null, i = null, o = null;
        const s = () => {
          const c = window.getSelection();
          if (c && c.rangeCount > 0) {
            const d = c.getRangeAt(0), { startContainer: f, startOffset: u } = d;
            if (f.nodeType === Node.TEXT_NODE) {
              const m = (f.textContent || "").lastIndexOf("/", u);
              if (m !== -1) {
                const p = document.createRange();
                return p.setStart(f, m), p.setEnd(f, m + 1), p.getBoundingClientRect();
              }
            }
            return d.getBoundingClientRect();
          }
          return document.body.getBoundingClientRect();
        }, a = ({ content: c, anchorRect: d }) => {
          const f = {
            position: "absolute",
            top: d.bottom + window.scrollY,
            left: d.left + window.scrollX,
            width: 0,
            height: 0
          };
          return g(Tg, {
            open: !0,
            modal: !1,
            children: [l("div", {
              style: f
            }), l(Eg, {
              asChild: !0,
              children: l("div", {
                style: f
              })
            }), l(Dg, {
              side: "bottom",
              align: "start",
              sideOffset: 15,
              collisionPadding: 10,
              style: {
                zIndex: 9999
              },
              onOpenAutoFocus: (u) => {
                u.preventDefault();
              },
              onCloseAutoFocus: (u) => {
                u.preventDefault();
              },
              children: l("div", {
                ref: (u) => {
                  u && c.parentNode !== u && u.appendChild(c);
                }
              })
            })]
          });
        };
        return {
          onStart: (c) => {
            if (c.items.length === 0) return;
            const d = Ls({
              aiBlockConfig: t,
              translations: e,
              imageUploadConfig: n
            });
            let f = d;
            if (c.query && c.query.trim()) {
              const m = c.query.toLowerCase().trim();
              f = d.map((p) => ({
                ...p,
                commands: p.commands.filter((b) => b.title.toLowerCase().includes(m))
              })).filter((p) => p.commands.length > 0);
            }
            r = new v0(qf, {
              props: {
                items: c.items,
                groups: f,
                command: c.command
              },
              editor: c.editor
            });
            const h = (() => {
              if (c.clientRect) {
                const m = c.clientRect();
                if (m && m.width && m.height) return m;
              }
              return s();
            })();
            o = document.createElement("div"), document.body.appendChild(o), i = y0.createRoot(o), i.render(l(a, {
              content: r.element,
              anchorRect: h,
              editor: c.editor
            }));
          },
          onUpdate: (c) => {
            if (!r || !o || !i) return;
            const d = Ls({
              aiBlockConfig: t,
              translations: e,
              imageUploadConfig: n
            });
            let f = d;
            if (c.query && c.query.trim()) {
              const u = c.query.toLowerCase().trim();
              f = d.map((h) => ({
                ...h,
                commands: h.commands.filter((m) => m.title.toLowerCase().includes(u))
              })).filter((h) => h.commands.length > 0);
            }
            if (r.updateProps({
              items: c.items,
              groups: f
            }), c.items.length === 0)
              o && (o.style.display = "none");
            else {
              o && (o.style.display = "");
              const h = (() => {
                if (c.clientRect) {
                  const m = c.clientRect();
                  if (m && m.width && m.height) return m;
                }
                return s();
              })();
              i.render(l(a, {
                content: r.element,
                anchorRect: h,
                editor: c.editor
              }));
            }
          },
          onKeyDown: (c) => {
            if (c.event.key === "Escape")
              return i && o && (i.unmount(), o.remove()), !0;
            const d = r?.ref;
            return d && typeof d == "object" && "onKeyDown" in d && typeof d.onKeyDown == "function" && d.onKeyDown(c) || !1;
          },
          onExit() {
            i && o && (i.unmount(), o.remove()), r?.destroy();
          }
        };
      }
    })];
  }
}), Mk = ({ node: t, deleteNode: e, updateAttributes: n }) => {
  const r = X(), [i, o] = F(t.attrs.isOpen ?? !1), s = t.attrs.data;
  if (!s) return null;
  const a = () => {
    const u = !i;
    o(u), n({
      isOpen: u
    });
  }, c = [{
    label: r.actions.delete,
    icon: mn,
    critical: !0,
    onClick: () => e()
  }], d = (u) => s.users.find((h) => h.id === u), f = (u) => {
    try {
      const h = new Date(u);
      return eu(h, "HH:mm");
    } catch (h) {
      return console.error(h), u;
    }
  };
  return g(to, {
    contentEditable: !1,
    children: [g("div", {
      className: "editor-transcript mb-4 flex w-full flex-col gap-4 rounded-md border border-solid border-f1-border-secondary p-3",
      onClick: (u) => u.stopPropagation(),
      children: [g("div", {
        className: "flex flex-row items-center justify-between gap-2",
        children: [l("div", {
          className: "flex flex-row items-center gap-2",
          children: g("div", {
            className: "flex flex-col gap-1",
            children: [l("div", {
              className: "flex flex-row items-center gap-3",
              children: l("p", {
                className: "text-f1-text-primary text-lg font-semibold",
                children: s.title
              })
            }), l("p", {
              className: "text-f1-text-secondary text-sm",
              children: s.messages.length
            })]
          })
        }), g("div", {
          className: "flex flex-row items-center gap-1",
          children: [l(B, {
            onClick: a,
            variant: "outline",
            hideLabel: !0,
            label: i ? r.actions.collapse : r.actions.expand,
            icon: i ? cl : Vn,
            size: "sm"
          }), l(Me, {
            items: c,
            size: "sm"
          })]
        })]
      }), i && l("div", {
        className: "scrollbar-macos text-f1-text-primary flex max-h-[500px] flex-col gap-4 overflow-y-auto",
        children: s.messages.map((u, h) => {
          const m = d(u.userId);
          return g("div", {
            className: "flex flex-row gap-3",
            children: [m?.imageUrl && l(Nt, {
              size: "xs",
              src: m.imageUrl,
              firstName: m.fullname,
              lastName: ""
            }), g("div", {
              className: "flex flex-col",
              children: [g("div", {
                className: "flex items-baseline gap-2",
                children: [l("span", {
                  className: "text-f1-text-primary font-medium",
                  children: m?.fullname || "Unknown User"
                }), l("span", {
                  className: "text-f1-text-tertiary text-xs",
                  children: f(u.dateTime)
                })]
              }), l("p", {
                className: "text-f1-text-secondary",
                children: u.text
              })]
            })]
          }, h);
        })
      })]
    }), l(Al, {
      style: {
        display: "none"
      }
    })]
  });
}, Pk = bt.create({
  name: "transcript",
  group: "block",
  atom: !0,
  selectable: !0,
  draggable: !0,
  addOptions() {
    return {
      currentConfig: null
    };
  },
  addAttributes() {
    return {
      data: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("data-transcript");
          return e ? JSON.parse(e) : null;
        },
        renderHTML: (t) => t.data ? {
          "data-transcript": JSON.stringify(t.data)
        } : {}
      },
      config: {
        default: null
      },
      isOpen: {
        default: !1
      }
    };
  },
  parseHTML() {
    return [{
      tag: "div[data-transcript]"
    }];
  },
  renderHTML({ HTMLAttributes: t, node: e }) {
    const n = e.attrs.data;
    return n ? ["div", {
      ...t,
      class: "transcript-block",
      "data-transcript": JSON.stringify(n)
    }, ["div", {
      class: "transcript-content"
    }, `Transcript: ${n.title}`]] : ["div"];
  },
  addNodeView() {
    return eo(Mk);
  },
  addCommands() {
    return {
      insertTranscript: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: {
          data: t
        }
      })
    };
  }
}), zk = Pk, $k = () => {
  const t = X();
  return g(U.div, {
    className: C("relative isolate m-3 mt-2 flex flex-col gap-3 rounded-lg border border-solid border-f1-border", "after:pointer-events-none after:absolute after:inset-0.5 after:z-[-2] after:rounded-[inherit] after:bg-f1-foreground-secondary after:opacity-0 after:blur-[5px] after:content-['']", "from-[#E55619] via-[#A1ADE5] to-[#E51943] after:scale-90 after:bg-[conic-gradient(from_var(--gradient-angle),var(--tw-gradient-stops))]", "after:transition-all after:delay-200 after:duration-300", "before:bg-white before:pointer-events-none before:absolute before:inset-0 before:z-[-1] before:rounded-[inherit] before:content-['']"),
    animate: {
      "--gradient-angle": ["0deg", "360deg"]
    },
    transition: {
      default: {
        duration: 6,
        ease: "linear",
        repeat: 1 / 0
      }
    },
    style: {
      "--gradient-angle": "180deg"
    },
    children: [l("div", {
      className: "grid grid-cols-1 grid-rows-1",
      children: l("textarea", {
        disabled: !0,
        name: "one-ai-input",
        placeholder: t.ai.inputPlaceholder,
        className: C("col-start-1 row-start-1", "mx-3 mb-0 mt-3 flex-1 resize-none outline-none transition-all", "bg-white text-f1-foreground placeholder:text-f1-foreground-secondary", "cursor-not-allowed opacity-60")
      })
    }), l("div", {
      className: "flex flex-row-reverse p-3 pt-0",
      children: l(nt, {
        type: "button",
        disabled: !0,
        variant: "neutral",
        label: t.ai.sendMessage,
        icon: _g,
        hideLabel: !0
      })
    })]
  });
}, jk = ({
  autoClearMinutes: t,
  reset: e,
  isOpen: n
}) => {
  const r = W(null);
  V(() => (n ? r.current && (clearTimeout(r.current), r.current = null) : t !== null && (r.current = setTimeout(
    () => {
    },
    t * 60 * 1e3
  )), () => {
    r.current && (clearTimeout(r.current), r.current = null);
  }), [e, n, t]);
}, Bk = ({ children: t }) => {
  const { open: e, shouldPlayEntranceAnimation: n, setShouldPlayEntranceAnimation: r, autoClearMinutes: i } = ao();
  return jk({
    reset: () => {
    },
    isOpen: e,
    autoClearMinutes: i
  }), l(Ae, {
    children: e && l(U.div, {
      "aria-hidden": !e,
      className: "relative flex h-full max-w-[360px] flex-col overflow-hidden border border-solid border-f1-border-secondary bg-f1-special-page shadow xs:rounded-xl",
      initial: n ? {
        opacity: 0,
        width: 0
      } : !1,
      animate: {
        opacity: 1,
        width: 360
      },
      exit: {
        opacity: 0,
        width: 0
      },
      transition: {
        duration: 0.3,
        ease: [0, 0, 0.1, 1]
      },
      onAnimationComplete: () => {
        n && r(!1);
      },
      children: l(U.div, {
        className: "relative flex h-full w-[360px] flex-col overflow-x-hidden",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          duration: n ? 0.3 : 0.05,
          ease: "easeOut",
          delay: n ? 0.2 : 0
        },
        children: t
      })
    }, "chat-window")
  });
}, Hk = ({ action: t, onClose: e }) => {
  const n = () => {
    t.onClick(), e();
  };
  switch (t.buttonType) {
    case "gradient":
      return l("button", {
        style: {
          color: "white",
          background: "linear-gradient(270deg, rgba(161, 173, 229, 0.7) 0%, rgba(229, 25, 67, 0.7) 50%, rgba(229, 86, 25, 0.7) 100%)",
          border: "none",
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "opacity 0.2s ease",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        onMouseEnter: (r) => {
          r.currentTarget.style.opacity = "0.9";
        },
        onMouseLeave: (r) => {
          r.currentTarget.style.opacity = "1";
        },
        onClick: n,
        children: t.isLoading ? l(sn, {
          size: "small"
        }) : t.label
      });
    case "internal":
      return l(nt, {
        label: t.label || "",
        onClick: n,
        variant: t.buttonVariant,
        icon: t.icon
      });
  }
}, Vk = ({ enabled: t = !1, greeting: e, title: n, description: r, benefits: i, actions: o, onShow: s, onHide: a, children: c }) => l(Cy, {
  enabled: t,
  greeting: e,
  title: n,
  description: r,
  benefits: i,
  actions: o,
  onShow: s,
  onHide: a,
  children: c
}), Wk = () => {
  const { enabled: t, greeting: e, title: n, description: r, benefits: i, actions: o, setOpen: s, onHide: a } = ao(), c = () => {
    s(!1), a?.();
  };
  return t ? l("div", {
    className: "p-1 pl-0",
    children: g(Bk, {
      clickOutsideToClose: !0,
      hitEscapeToClose: !0,
      shortcut: "",
      children: [l("div", {
        className: "flex items-center justify-end p-3 pb-0",
        children: l(nt, {
          variant: "ghost",
          hideLabel: !0,
          label: "",
          icon: en,
          onClick: c
        })
      }), l("div", {
        className: "flex-1 content-center overflow-y-auto",
        children: g("div", {
          className: "flex flex-col gap-4 p-6 pt-3",
          children: [g("div", {
            className: "flex flex-col gap-4",
            children: [l(tf, {
              spin: !0,
              size: "lg"
            }), g("div", {
              children: [l("p", {
                className: "text-lg font-medium text-f1-foreground-secondary",
                children: e
              }), l("h1", {
                className: "text-2xl font-semibold text-f1-foreground",
                children: n
              })]
            })]
          }), r && l("p", {
            className: "text-md text-f1-foreground-secondary",
            children: r
          }), i?.length && l("ul", {
            className: "flex flex-col gap-2",
            children: i.map((d, f) => g("li", {
              className: "flex items-center gap-1",
              children: [l(ar, {
                className: "h-5 w-5 flex-shrink-0"
              }), g("span", {
                className: "text-md text-f1-foreground",
                children: [d.noBoldText, " ", l("strong", {
                  children: d.boldText
                })]
              })]
            }, f))
          }), o?.length && l("div", {
            className: "flex flex-col gap-3 pt-2",
            children: o.map((d, f) => l(Hk, {
              action: d,
              onClose: () => s(!1)
            }, f))
          })]
        })
      }), l("div", {
        className: "m-3 mt-2 flex-shrink-0",
        children: l($k, {})
      })]
    })
  }) : null;
}, Uk = se("AiPromotionChat", Wk), Gk = se("AiPromotionChatProvider", Vk), Kf = zt({
  base: "flex w-full flex-col rounded-lg p-[1px]",
  variants: {
    variant: {
      ai: "bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F]",
      critical: "bg-f1-background-critical",
      positive: "bg-f1-background-positive",
      info: "bg-f1-background-info",
      warning: "bg-f1-background-warning"
    }
  },
  defaultVariants: {
    variant: "ai"
  }
}), bc = {
  positive: ml,
  warning: nu,
  info: tu
}, vc = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, qk = q(function({ title: e, onClose: n, children: r, actions: i = [], variant: o }, s) {
  if (i.length > 2)
    throw new Error(`F0Callout: Maximum of 2 actions allowed, but ${i.length} actions were provided.`);
  const a = i.length > 0;
  return g("div", {
    ref: s,
    className: Kf({
      variant: o
    }),
    children: [g("div", {
      className: "flex flex-row items-center justify-between px-4 py-2",
      children: [g("div", {
        className: C("flex flex-row items-center gap-2", vc[o]),
        children: [bc[o] && l(G, {
          icon: bc[o],
          size: "sm",
          "aria-hidden": !0
        }), l(Ke, {
          className: vc[o] || "font-medium",
          children: e
        })]
      }), n && l(B, {
        variant: "ghost",
        icon: en,
        size: "sm",
        hideLabel: !0,
        onClick: n,
        label: "Close"
      })]
    }), g("div", {
      className: "flex flex-col gap-[1px]",
      children: [l("div", {
        className: C("bg-f1-background px-4 py-3", a ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
        children: r
      }), a && l("div", {
        className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
        children: i.map((c, d) => l("div", {
          children: l(B, {
            label: c.label,
            onClick: c.onClick,
            variant: "outline",
            icon: c.icon
          })
        }, d))
      })]
    })]
  });
}), Kk = ({ compact: t, variant: e = "ai" }) => g("div", {
  className: Kf({
    variant: e
  }),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [l("div", {
    className: "flex flex-row items-center justify-between px-4 py-2",
    children: l(M, {
      className: "h-5 w-32 rounded-md"
    })
  }), g("div", {
    className: "flex flex-col gap-[1px]",
    children: [l("div", {
      className: C("rounded-t-[13.25px] bg-f1-background px-4 py-3", t && "rounded-[13.25px]"),
      children: g("div", {
        className: "flex flex-col gap-2",
        children: [l(M, {
          className: "h-4 w-full rounded-md"
        }), l(M, {
          className: "h-4 w-3/4 rounded-md"
        }), l(M, {
          className: "h-4 w-1/2 rounded-md"
        })]
      })
    }), !t && g("div", {
      className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
      children: [l(M, {
        className: "h-8 w-24 rounded-md"
      }), l(M, {
        className: "h-8 w-28 rounded-md"
      })]
    })]
  })]
}), Jf = q((t, e) => l(qk, {
  ref: e,
  ...t
})), Jk = ({ compact: t, variant: e }) => l(Kk, {
  compact: t,
  variant: e
});
Jf.displayName = "F0Callout";
const h_ = Ne(Jf, Jk), Yk = ({ data: t, dataConfig: e, scaleMin: n, scaleMax: r, aspect: i }, o) => {
  const s = Object.keys(e), a = t.map((c) => ({
    subject: c.label,
    ...c.values
  }));
  return l(w0, {
    config: e,
    ref: o,
    aspect: i,
    "data-chromatic": "ignore",
    children: g(my, {
      accessibilityLayer: !0,
      data: a,
      children: [l(k0, {
        cursor: !0,
        animationDuration: 100,
        offset: 20,
        content: l(C0, {
          indicator: "dot"
        })
      }), l(Qu, {
        gridType: "circle"
      }), l(Au, {
        dataKey: "subject"
      }), l(Tu, {
        angle: 90,
        type: "number",
        domain: [n ?? "dataMin", r ?? "dataMax"]
      }), s.map((c, d) => l(Fr, {
        dataKey: c,
        fill: e[c].color ? La(e[c].color) : Oa(d),
        stroke: e[c].color ? La(e[c].color) : Oa(d),
        strokeWidth: 1.5,
        fillOpacity: 0.3,
        label: e[c].label,
        isAnimationActive: !1
      }, c)), Object.keys(e).length > 1 && l(N0, {
        iconType: "star",
        content: l(S0, {})
      })]
    })
  });
}, m_ = x0(se("RadarChart", Yk)), Qk = U.create(Lg), Xk = () => {
  const t = X();
  return g("div", {
    className: "flex flex-row items-center gap-1 rounded-full border border-solid border-f1-border-secondary bg-f1-background px-2 py-1.5 pr-2.5 shadow-md",
    children: [l(Qk, {
      size: "xs",
      animate: {
        rotate: [0, 360],
        scale: [1, 0.8, 1],
        filter: ["blur(0px)", "blur(1px)", "blur(0px)"]
      },
      transition: {
        rotate: {
          duration: 1,
          ease: "linear",
          repeat: 1 / 0,
          repeatDelay: 1
        },
        scale: {
          duration: 1,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: 1 / 0,
          repeatDelay: 1
        },
        filter: {
          duration: 1,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: 1 / 0,
          repeatDelay: 1
        }
      }
    }), l("span", {
      className: "font-medium",
      children: t.t("coCreationForm.labels.applyingChanges")
    })]
  });
}, Zk = Zi(Xk);
var eC = hy();
const yc = /* @__PURE__ */ zd(eC), Yf = (t) => {
  switch (t) {
    case "1-5":
      return new Array(5).fill(0).map((e, n) => ({
        value: n + 1,
        label: (n + 1).toString()
      }));
    case "1-10":
      return new Array(10).fill(0).map((e, n) => ({
        value: n + 1,
        label: (n + 1).toString()
      }));
    case "emojis":
      return [
        { value: 1, label: "😠" },
        { value: 2, label: "😐" },
        { value: 3, label: "😊" },
        { value: 4, label: "😍" },
        { value: 5, label: "🤩" }
      ];
  }
}, Qf = (t) => {
  if (!t || t.length === 0) return null;
  const e = t.length, n = t.every((r) => /^\d+$/.test(r.label.trim()));
  return e === 5 && n ? "1-5" : e === 10 && n ? "1-10" : e === 5 && !n ? "emojis" : null;
}, Os = (t) => {
  switch (t) {
    case "rating":
      return {
        value: 0,
        options: Yf("1-5")
      };
    case "select":
    case "multi-select":
      return {
        options: [
          {
            value: "option-1",
            label: "New option 1"
          }
        ]
      };
    case "text":
    case "longText":
      return {
        value: ""
      };
    case "numeric":
      return {
        value: 0
      };
    case "link":
      return {
        value: ""
      };
    case "date":
      return {
        value: /* @__PURE__ */ new Date()
      };
    default:
      throw new Error(`Unsupported question type: ${t}`);
  }
}, Zr = (t) => `new-${t}-${Date.now()}`, xc = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date"
], tC = (t) => {
  if (!t)
    return xc[0];
  const e = xc.find(
    (n) => t?.includes(n)
  );
  if (!e)
    throw new Error(
      `No default question type found for allowed question types: ${t.join(", ")}`
    );
  return e;
}, Xf = $t(void 0);
function nC({ elements: t, children: e, isEditMode: n, disallowOptionalQuestions: r, onChange: i, allowedQuestionTypes: o }) {
  const s = z(() => {
    const x = t[t.length - 1];
    if (x)
      return x.type === "section" ? x.section.id : x.question.id;
  }, [t]), a = (x) => {
    const D = x.id, N = t.map((k) => {
      if (k.type === "question")
        return k.question.id === D ? {
          ...k,
          question: {
            ...k.question,
            ...x
          }
        } : k;
      if (k.type === "section") {
        const I = k.section.questions?.map((E) => E.id === D ? {
          ...E,
          ...x
        } : E);
        return {
          ...k,
          section: {
            ...k.section,
            questions: I
          }
        };
      }
      return k;
    });
    i(N);
  }, c = (x) => {
    const D = x.id, N = t.map((k) => k.type === "section" && k.section.id === D ? {
      ...k,
      section: {
        ...k.section,
        ...x
      }
    } : k);
    i(N);
  }, d = ne(({ element: x, afterId: D }) => {
    const N = [...t];
    if (!D) {
      N.push(x), i(N);
      return;
    }
    ((I) => {
      N.forEach((E, T) => {
        E.type === "section" && E.section.id === I && N.splice(T + 1, 0, x), E.type === "question" && E.question.id === I && N.splice(T + 1, 0, x);
      });
    })(D), x.type === "question" && N.length === t.length && N.forEach((I, E) => {
      if (I.type !== "section")
        return;
      const T = [...I.section.questions ?? []];
      T?.forEach((S, L) => {
        S.id === D && T.splice(L + 1, 0, x.question);
      }), N.splice(E, 1, {
        ...I,
        section: {
          ...I.section,
          questions: T
        }
      });
    }), i(N);
  }, [t, i]), f = ne(({ type: x, afterId: D }) => {
    const N = Zr(x === "section" ? "section" : "question"), k = tC(o), I = x === "section" ? {
      type: "section",
      section: {
        id: N,
        title: "",
        questions: [{
          id: Zr("question"),
          title: "",
          description: "",
          type: k,
          required: !0,
          ...Os(k)
        }]
      }
    } : {
      type: "question",
      question: {
        id: N,
        title: "",
        description: "",
        type: x,
        required: !0,
        ...Os(x)
      }
    };
    d({
      element: I,
      afterId: D
    });
  }, [d, o]), u = ({ elementId: x }) => {
    const N = yc(t.map((I) => I.type === "section" ? [I, ...I.section.questions ?? []] : [I.question])).find((I) => I.type === "section" ? I.section.id === x : I.id === x);
    let k;
    N && (k = N.type === "section" ? {
      ...N,
      section: {
        ...N.section,
        id: Zr("section")
      }
    } : {
      type: "question",
      question: {
        ...N,
        id: Zr("question")
      }
    }), k && d({
      element: k,
      afterId: x
    });
  }, h = (x) => yc(t.map((N) => N.type === "question" ? [N.question] : N.section.questions)).find((N) => N?.id === x), m = (x) => {
    let D = t.filter((N) => N.type === "section" ? N.section.id !== x : N.type === "question" ? N.question.id !== x : !0);
    D.length === t.length && (D = D.map((N) => N.type === "section" ? {
      ...N,
      section: {
        ...N.section,
        questions: N.section.questions?.filter((k) => k.id !== x)
      }
    } : N)), i(D);
  }, p = (x) => {
    const D = t.find((N) => N.type === "section" ? N.section.questions?.some((k) => k.id === x) : !1);
    return D?.type === "section" && D?.section.questions?.length === 1;
  }, b = (x) => {
    const D = t.find((N) => N.type === "section" ? N.section.questions?.some((k) => k.id === x) : !1);
    return D?.type === "section" ? D.section : void 0;
  }, y = W(!0), v = !t.length;
  V(() => {
    if (y.current) {
      y.current = !1, v && n && f({
        type: "section"
      });
      return;
    }
  }, [v, f, n]);
  const w = (x) => !o || o.includes(x);
  return l(Xf.Provider, {
    value: {
      onQuestionChange: a,
      onSectionChange: c,
      onAddNewElement: f,
      onDuplicateElement: u,
      getIsSingleQuestionInSection: p,
      getSectionContainingQuestion: b,
      isEditMode: n,
      getQuestionById: h,
      deleteElement: m,
      lastElementId: s,
      disallowOptionalQuestions: r,
      isQuestionTypeAllowed: w
    },
    children: e
  });
}
function Je() {
  const t = St(Xf);
  if (!t)
    throw new Error("useCoCreationFormContext must be used within a CoCreationFormProvider");
  return t;
}
const Zf = $t(void 0);
function zl({ children: t }) {
  const [e, n] = F(!1), [r, i] = F(null);
  return l(Zf.Provider, {
    value: {
      isDragging: e,
      setIsDragging: n,
      draggedItemId: r,
      setDraggedItemId: i
    },
    children: t
  });
}
function uo() {
  const t = St(Zf);
  return t || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
const $l = () => {
  const { isQuestionTypeAllowed: t } = Je(), { t: e } = X();
  return [
    {
      label: e("coCreationForm.questionTypes.rating"),
      icon: jd,
      questionType: "rating"
    },
    {
      label: e("coCreationForm.questionTypes.multipleChoice"),
      icon: Zd,
      questionType: "multi-select"
    },
    {
      label: e("coCreationForm.questionTypes.singleChoice"),
      icon: ar,
      questionType: "select"
    },
    {
      label: e("coCreationForm.questionTypes.text"),
      icon: Og,
      questionType: "text"
    },
    {
      label: e("coCreationForm.questionTypes.longText"),
      icon: hl,
      questionType: "longText"
    },
    {
      label: e("coCreationForm.questionTypes.numeric"),
      icon: Rg,
      questionType: "numeric"
    }
  ].filter(
    (i) => t(i.questionType)
  );
}, wc = [{
  label: "1 - 5",
  value: "1-5"
}, {
  label: "1 - 10",
  value: "1-10"
}, {
  label: "Emojis",
  value: "emojis"
}], rC = ({ label: t, icon: e, checked: n, onChange: r }) => l(sr, {
  className: "!pb-2.5 pr-4",
  onClick: (i) => {
    i.preventDefault(), r(!n);
  },
  children: g("div", {
    className: "flex w-full flex-row items-center gap-2",
    children: [l(Wt, {
      icon: e,
      color: "default"
    }), l("span", {
      className: "flex-1",
      children: t
    }), l(ru, {
      title: t,
      checked: n,
      onCheckedChange: r,
      hideLabel: !0
    })]
  })
}), iC = ({ label: t, value: e, questionTypes: n, currentRatingType: r, onSelectQuestionType: i, onSelectRatingType: o }) => {
  const s = n.find((a) => a.questionType === e)?.label;
  return g(ya, {
    children: [l(xa, {
      className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
      children: g("div", {
        className: "flex w-full flex-row items-center gap-2",
        children: [l(Wt, {
          icon: Pg,
          color: "default"
        }), l("span", {
          className: "flex-1 text-base font-medium",
          children: t
        }), !!s && l("span", {
          className: "mr-1 text-base text-f1-foreground-secondary",
          children: s
        })]
      })
    }), l(us, {
      children: l(wa, {
        children: n.map((a) => {
          const c = a.questionType === "rating", d = e === a.questionType;
          return c ? g(ya, {
            children: [l(xa, {
              className: "mx-1 mt-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
              children: g("div", {
                className: "flex w-full flex-row items-center gap-2 text-base font-medium",
                children: [l(Wt, {
                  icon: a.icon,
                  color: "default"
                }), l("span", {
                  className: "flex-1",
                  children: a.label
                }), r && l("span", {
                  className: "mr-1 text-base text-f1-foreground-secondary",
                  children: wc.find((f) => f.value === r)?.label
                })]
              })
            }), l(us, {
              children: l(wa, {
                children: wc.map((f) => l(sr, {
                  onClick: () => o(f.value),
                  children: g("div", {
                    className: "flex w-full flex-row items-center gap-2 pl-2",
                    children: [l("span", {
                      className: "flex-1",
                      children: f.label
                    }), r === f.value && l(Wt, {
                      icon: ar,
                      color: "default"
                    })]
                  })
                }, f.value))
              })
            })]
          }, a.questionType) : l(sr, {
            onClick: () => i(a.questionType),
            children: g("div", {
              className: "flex w-full flex-row items-center gap-2",
              children: [l(Wt, {
                icon: a.icon,
                color: "default"
              }), l("span", {
                className: "flex-1",
                children: a.label
              }), d && l(Wt, {
                icon: ar,
                color: "default"
              })]
            })
          }, a.questionType);
        })
      })
    })]
  });
}, kc = ({ label: t, icon: e, onClick: n, critical: r }) => l(sr, {
  onClick: n,
  className: C(r ? "text-f1-foreground-critical" : void 0),
  children: g("div", {
    className: "flex w-full flex-row items-center gap-2",
    children: [l(Wt, {
      icon: e,
      color: r ? "critical" : "default"
    }), l("span", {
      className: "flex-1",
      children: t
    })]
  })
});
function oC({ open: t, setOpen: e, questionId: n, questionType: r, canDeleteQuestion: i = !0 }) {
  const { t: o } = X(), { onQuestionChange: s, getQuestionById: a, deleteElement: c, onDuplicateElement: d, disallowOptionalQuestions: f } = Je(), u = z(() => a(n), [n, a]), h = $l(), m = z(() => {
    if (r !== "rating" || !u || !("options" in u) || u.type !== "rating")
      return null;
    const x = u.options;
    return !Array.isArray(x) || x.length === 0 || typeof x[0]?.value != "number" ? null : Qf(x);
  }, [r, u]), p = (x) => {
    s?.({
      id: n,
      type: r,
      required: x
    });
  }, b = (x) => {
    const D = x !== r && !((x === "select" || x === "multi-select") && u && "options" in u && u.options.length);
    s?.({
      id: n,
      type: x,
      ...D && {
        ...Os(x)
      }
    });
  }, y = (x) => {
    r === "rating" && s?.({
      id: n,
      type: "rating",
      value: 0,
      options: Yf(x)
    });
  }, v = () => {
    d?.({
      elementId: n,
      type: r
    });
  }, w = () => {
    c(n);
  };
  return g(Bd, {
    open: t,
    onOpenChange: e,
    children: [l(Hd, {
      tabIndex: -1,
      asChild: !0,
      children: l(B, {
        icon: cr,
        label: o("coCreationForm.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      })
    }), g(Wd, {
      className: "w-80",
      align: "start",
      children: [l(Fg, {
        className: "p-4 pb-2 font-medium text-f1-foreground-secondary",
        children: o("coCreationForm.labels.questionOptions")
      }), !f && l(Po, {
        children: l(rC, {
          label: o("coCreationForm.labels.required"),
          icon: Mg,
          checked: !!u?.required,
          onChange: p
        })
      }), l(Po, {
        children: l(iC, {
          label: o("coCreationForm.labels.questionType"),
          value: r,
          questionTypes: h,
          currentRatingType: m,
          onSelectQuestionType: b,
          onSelectRatingType: y
        })
      }), l(Gd, {}), g(Po, {
        children: [l(kc, {
          label: o("coCreationForm.actions.duplicateQuestion"),
          icon: pl,
          onClick: v
        }), i && l(kc, {
          label: o("coCreationForm.actions.deleteQuestion"),
          icon: mn,
          onClick: w
        })]
      })]
    })]
  });
}
const Cc = {
  fieldSizing: "content"
}, Kn = ({ id: t, title: e, description: n, children: r, required: i, locked: o, type: s }) => {
  const { onQuestionChange: a, onAddNewElement: c, isEditMode: d, getIsSingleQuestionInSection: f, getSectionContainingQuestion: u } = Je(), h = u(t), m = h?.locked || o, p = !!h, [b, y] = F(!1), [v, w] = F(!1), { isDragging: x } = uo(), { t: D } = X(), N = (O) => {
    a?.({
      id: t,
      type: s,
      title: O.target.value
    });
  }, k = (O) => {
    a?.({
      id: t,
      type: s,
      description: O.target.value
    });
  }, I = (O) => {
    c?.({
      type: O,
      afterId: t
    });
  }, E = () => {
    c?.({
      type: "section",
      afterId: t
    });
  }, T = $l(), S = [...p ? [] : [{
    label: D("coCreationForm.questionTypes.section"),
    icon: iu,
    onClick: E
  }, {
    type: "separator"
  }], ...T.map((O) => ({
    ...O,
    onClick: () => I(O.questionType)
  }))], L = f(t), A = !d || m;
  return g("div", {
    className: C("group/question relative flex w-full flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4", !x && "hover:border-f1-border-hover"),
    children: [g("div", {
      className: "flex flex-col gap-0.5",
      children: [g("div", {
        className: "flex flex-row gap-2",
        children: [g("div", {
          className: "relative w-full",
          children: [l("textarea", {
            value: e,
            "aria-label": D("coCreationForm.labels.title"),
            placeholder: D("coCreationForm.labels.titlePlaceholder"),
            onChange: N,
            disabled: A,
            className: C("w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden", A && "cursor-not-allowed"),
            style: Cc,
            autoFocus: !L
          }), g("div", {
            className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold",
            children: [l("span", {
              className: "opacity-0",
              children: e || D("coCreationForm.labels.titlePlaceholder")
            }), i && g("span", {
              className: C("text-f1-foreground-critical", !e && "text-f1-foreground-secondary"),
              children: [" ", "*"]
            })]
          })]
        }), d && !m && l("div", {
          className: C("opacity-0 group-hover/question:opacity-100", v && "opacity-100"),
          children: l(oC, {
            open: v,
            setOpen: w,
            questionId: t,
            questionType: s,
            canDeleteQuestion: !p || !L
          })
        })]
      }), l("textarea", {
        value: n,
        "aria-label": D("coCreationForm.labels.description"),
        placeholder: D("coCreationForm.labels.questionDescriptionPlaceholder"),
        onChange: k,
        disabled: A,
        className: C("w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden", A && "cursor-not-allowed"),
        style: Cc
      })]
    }), r, d && !h?.locked && l("div", {
      className: C("absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100", b && "opacity-100"),
      children: l(Me, {
        items: S,
        icon: gl,
        size: "sm",
        open: b,
        onOpenChange: y,
        align: "center"
      })
    })]
  });
}, sC = ({ value: t, ...e }) => {
  const { onQuestionChange: n, isEditMode: r } = Je(), { t: i } = X(), o = (a) => {
    r || n?.({
      ...e,
      type: "date",
      value: a?.value?.from
    });
  }, s = z(() => t ? {
    granularity: "day",
    value: {
      from: t,
      to: t
    }
  } : void 0, [t]);
  return l(Kn, {
    ...e,
    children: l("div", {
      className: "px-0.5",
      children: l(I0, {
        size: "md",
        value: s,
        onChange: o,
        disabled: r,
        label: i("coCreationForm.answer.label"),
        hideLabel: !0,
        required: e.required,
        readonly: r,
        clearable: !e.required
      })
    })
  });
}, lC = ({ value: t, ...e }) => {
  const { t: n } = X(), { onQuestionChange: r, isEditMode: i } = Je();
  return l(Kn, {
    ...e,
    children: l("div", {
      className: "px-0.5",
      children: l(ou, {
        type: "url",
        size: "md",
        value: t ?? void 0,
        onChange: (s) => {
          i || r?.({
            ...e,
            type: "link",
            value: s
          });
        },
        disabled: i,
        label: n("coCreationForm.answer.label"),
        hideLabel: !0,
        required: e.required,
        clearable: !e.required
      })
    })
  });
}, aC = ({ value: t, ...e }) => {
  const { t: n } = X(), { onQuestionChange: r, isEditMode: i } = Je();
  return l(Kn, {
    ...e,
    children: l("div", {
      className: "px-0.5",
      children: l(A0, {
        locale: "en-US",
        size: "md",
        value: t,
        onChange: (s) => {
          i || r?.({
            ...e,
            type: "numeric",
            value: s
          });
        },
        disabled: i,
        label: n("coCreationForm.answer.label"),
        hideLabel: !0,
        required: e.required
      })
    })
  });
}, cC = ({ option: t, selected: e, onClick: n, onChangeLabel: r, isEditMode: i, disabled: o, isEmojiMode: s = !1 }) => {
  const { value: a, label: c } = t, [d, f] = F(!1), u = () => {
    o || i || n(a);
  }, h = (m) => {
    r?.(a, m.native), f(!1);
  };
  return l("div", {
    className: C("group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium", e && "border-f1-border-selected-bold", !o && !i ? "cursor-pointer" : "cursor-default"),
    onClick: u,
    children: i ? l(Z, {
      children: s ? g(bl, {
        open: d,
        onOpenChange: f,
        children: [l(vl, {
          asChild: !0,
          children: l(B, {
            emoji: c,
            label: a.toString(),
            variant: "ghost",
            hideLabel: !0
          })
        }), l(yl, {
          side: "bottom",
          align: "center",
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          onClick: (m) => {
            m.preventDefault(), m.stopPropagation();
          },
          children: l(T0, {
            data: E0,
            onEmojiSelect: h,
            locale: "en",
            icons: "outline",
            set: "twitter",
            theme: "light",
            emojiButtonSize: 32,
            emojiButtonRadius: "10px",
            emojiSize: 24,
            maxFrequentRows: 2,
            skinTonePosition: "none",
            previewPosition: "none",
            searchPosition: "top",
            navPosition: "top",
            dynamicWidth: !0
          })
        })]
      }) : l("span", {
        className: "text-base font-medium",
        children: c
      })
    }) : l(Dr, {
      emoji: c,
      size: "sm"
    })
  });
}, dC = ({ options: t, value: e, ...n }) => {
  const { onQuestionChange: r, isEditMode: i } = Je(), s = Qf(t) === "emojis", a = (d) => {
    r?.({
      id: n.id,
      value: d,
      type: "rating"
    });
  }, c = (d, f) => {
    const u = t.map((h) => h.value === d ? {
      ...h,
      label: f
    } : h);
    r?.({
      id: n.id,
      type: "rating",
      value: e ?? 0,
      options: u
    });
  };
  return l(Kn, {
    ...n,
    children: l("div", {
      className: "grid grid-cols-3 gap-3 md:grid-cols-5",
      children: t.map((d) => l(cC, {
        option: d,
        selected: e === d.value,
        onClick: a,
        onChangeLabel: c,
        isEditMode: i,
        disabled: !1,
        isEmojiMode: s
      }, d.value))
    })
  });
}, uC = (t) => l(dC, {
  ...t,
  type: "rating"
}), fC = {
  fieldSizing: "content"
}, hC = ({ index: t, option: e, selected: n, onClick: r, onClickAction: i, onChangeLabel: o, isEditMode: s, correct: a, locked: c }) => {
  const { value: d, label: f } = e, { isDragging: u, setIsDragging: h, setDraggedItemId: m, draggedItemId: p } = uo(), { t: b } = X(), y = u && p === d, v = () => {
    s || r(d);
  }, w = (S) => {
    i({
      value: d,
      index: t,
      action: S
    });
  }, x = () => {
    w("mark-as-correct");
  }, D = () => {
    w("remove");
  }, N = (S) => {
    const L = S.target.value;
    o({
      value: d,
      index: t,
      newLabel: L
    });
  }, k = () => {
    h(!0), m(d);
  }, I = () => {
    h(!1), m(null);
  }, E = u ? y : s, T = !!s && !c;
  return l(Un, {
    value: e,
    onDragStart: k,
    onDragEnd: I,
    dragListener: T,
    layout: "position",
    as: "div",
    children: g("div", {
      className: C("group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover", !s && "cursor-pointer", u && "!cursor-grabbing active:!cursor-grabbing"),
      onClick: v,
      children: [l("div", {
        className: C("block", E ? "group-hover:hidden" : "cursor-default", u && "cursor-grabbing [&_button]:cursor-grabbing"),
        children: l(Ni, {
          title: f,
          checked: !!(n && !s),
          onCheckedChange: v,
          disabled: s,
          presentational: s,
          hideLabel: !0
        })
      }), l("div", {
        className: C("hidden scale-75 cursor-grab", T && "active:cursor-grabbing", E && "group-hover:block", u && "cursor-grabbing", !T && "cursor-not-allowed"),
        children: l("div", {
          className: "flex aspect-square w-6 scale-90 items-center justify-center",
          children: l(Wt, {
            icon: _r,
            size: "sm"
          })
        })
      }), s && !c ? l("textarea", {
        placeholder: b("coCreationForm.selectQuestion.optionPlaceholder"),
        value: f,
        onChange: N,
        className: "flex-1 resize-none font-medium",
        style: fC
      }) : l("p", {
        className: "flex-1 font-medium",
        children: f
      }), s && a && l("span", {
        className: "text-sm font-medium text-f1-foreground-positive",
        children: b("coCreationForm.selectQuestion.correct")
      }), s && !c ? g("div", {
        className: "hidden flex-row items-center gap-1 group-hover:inline-block",
        children: [l(B, {
          label: b("coCreationForm.selectQuestion.markAsCorrect"),
          variant: "ghost",
          icon: a ? en : zg,
          onClick: x,
          hideLabel: !0
        }), l(B, {
          label: b("coCreationForm.selectQuestion.remove"),
          variant: "ghost",
          icon: mn,
          hideLabel: !0,
          onClick: D
        })]
      }) : l("div", {
        className: "min-h-8"
      })]
    })
  });
}, mC = ({ options: t, ...e }) => {
  const { onQuestionChange: n, isEditMode: r, getSectionContainingQuestion: i } = Je(), o = new Set(t.map((b) => b.value)).size !== t.length, s = i(e.id), a = e.locked || s?.locked, { t: c } = X(), d = z(() => ({
    id: e.id,
    type: e.type,
    options: t
  }), [e.id, e.type, t]);
  V(() => {
    if (!o) return;
    let b = t.map((w) => ({
      ...w,
      value: w.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const y = {
      id: e.id,
      type: e.type
    }, v = new Set(b.map((w) => w.value)).size !== b.length;
    if (!v) {
      n?.({
        ...y,
        options: b
      });
      return;
    }
    b = b.map((w) => ({
      ...w,
      value: vs()
    })), v && n?.({
      ...y,
      options: b
    }), n?.({
      ...y,
      options: b
    });
  }, [o, n, t, e.id, e.type]);
  const f = (b) => {
    let y = t;
    b.action === "remove" && (y = t.filter((v) => v.value !== b.value)), b.action === "mark-as-correct" && (y = t.map((v) => ({
      ...v,
      correct: v.value === b.value ? !v.correct : v.correct
    }))), n?.({
      ...d,
      options: y
    });
  }, u = (b) => {
    if (e.type === "select")
      n?.({
        ...d,
        type: e.type,
        value: b
      });
    else if (e.type === "multi-select" && Array.isArray(e.value)) {
      const y = e.value.includes(b) ? e.value.filter((v) => v !== b) : [...e.value, b];
      n?.({
        ...d,
        type: e.type,
        value: y
      });
    }
  }, h = (b) => {
    const y = t.map((v, w) => ({
      ...v,
      ...w === b.index ? {
        value: b.value,
        label: b.newLabel
      } : {}
    }));
    n?.({
      ...d,
      options: y
    });
  }, m = () => {
    const b = t.length, y = {
      value: `new-option-${b + 1}`,
      label: c("coCreationForm.selectQuestion.newOption", {
        number: b + 1
      })
    };
    n?.({
      ...d,
      options: [...t, y]
    });
  }, p = (b) => {
    n?.({
      ...d,
      options: b
    });
  };
  return o ? null : l(Kn, {
    ...e,
    children: g("div", {
      className: "-mx-0.5 flex flex-col items-start [&>div]:w-full",
      children: [l(zl, {
        children: l(Mn, {
          axis: "y",
          values: t,
          onReorder: p,
          as: "div",
          children: t.map((b, y) => l("div", {
            className: "w-full [&>div]:w-full",
            children: l(hC, {
              index: y,
              option: b,
              correct: b.correct,
              selected: Array.isArray(e.value) ? e.value.includes(b.value) : e.value === b.value,
              onClick: u,
              onClickAction: f,
              onChangeLabel: h,
              isEditMode: r,
              locked: a
            })
          }, b.value))
        })
      }), r && !a && l("div", {
        className: "opacity-50",
        children: l(B, {
          label: c("coCreationForm.selectQuestion.addOption"),
          variant: "ghost",
          icon: gl,
          onClick: m
        })
      })]
    })
  });
}, pC = ({ value: t, ...e }) => {
  const { onQuestionChange: n, isEditMode: r } = Je(), { t: i } = X(), o = (d) => {
    r || n?.({
      ...e,
      value: d
    });
  }, s = i("coCreationForm.answer.placeholder"), c = {
    value: r ? s : t ?? void 0,
    onChange: o,
    placeholder: s,
    disabled: r,
    label: i("coCreationForm.answer.label"),
    hideLabel: !0,
    required: e.required
  };
  return l(Kn, {
    ...e,
    children: g("div", {
      className: "px-0.5",
      children: [e.type === "text" && l(ou, {
        type: "text",
        size: "md",
        clearable: !e.required,
        ...c
      }), e.type === "longText" && l(D0, {
        rows: 4,
        ...c
      })]
    })
  });
}, eh = ({ ...t }) => {
  switch (t.type) {
    case "text":
    case "longText":
      return l(pC, {
        ...t
      });
    case "rating":
      return l(uC, {
        ...t
      });
    case "select":
    case "multi-select":
      return l(mC, {
        ...t
      });
    case "numeric":
      return l(aC, {
        ...t
      });
    case "link":
      return l(lC, {
        ...t
      });
    case "date":
      return l(sC, {
        ...t
      });
    default:
      throw new Error("Invalid question type provided");
  }
}, gC = ({ question: t }) => {
  const { isDragging: e, setIsDragging: n, setDraggedItemId: r } = uo(), i = lo(), { isEditMode: o, getSectionContainingQuestion: s } = Je(), a = s(t.id), c = () => {
    n(!0), r(t.id);
  }, d = () => {
    n(!1), r(null);
  }, f = t.locked || a?.locked, u = !!o && !f;
  return l(Un, {
    value: t,
    as: "div",
    onDragStart: c,
    onDragEnd: d,
    dragListener: !1,
    dragControls: i,
    layout: "position",
    children: g("div", {
      className: C("group/question-element flex flex-row items-start gap-1", e && "cursor-grabbing"),
      style: {
        marginLeft: o ? -27 : 0
      },
      children: [!!o && l("div", {
        className: C("mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40", !e && "cursor-grab", !u && "cursor-not-allowed"),
        onPointerDown: (h) => {
          u && i.start(h);
        },
        children: l(G, {
          icon: _r,
          size: "sm"
        })
      }), l(eh, {
        ...t
      })]
    })
  });
}, bC = {
  fieldSizing: "content"
}, vC = ({ id: t, title: e, description: n, questions: r = [], locked: i }) => {
  const { onSectionChange: o, isEditMode: s, deleteElement: a, onDuplicateElement: c } = Je(), [d, f] = F(!1), { t: u } = X(), h = z(() => ({
    id: t,
    title: e,
    description: n
  }), [t, e, n]), m = (D) => {
    o?.({
      ...h,
      title: D.target.value
    });
  }, p = (D) => {
    o?.({
      ...h,
      description: D.target.value
    });
  }, b = (D) => {
    o?.({
      ...h,
      questions: D
    });
  }, y = () => {
    c?.({
      elementId: t,
      type: "section"
    });
  }, v = () => {
    a(t);
  }, w = [{
    label: u("coCreationForm.actions.duplicateSection"),
    icon: pl,
    onClick: y
  }, {
    label: u("coCreationForm.actions.deleteSection"),
    icon: mn,
    onClick: v,
    critical: !0
  }], x = !s || i;
  return g("div", {
    className: "group/section flex w-full flex-col gap-1 bg-f1-background",
    children: [g("div", {
      className: "py-1 pl-5 pr-3",
      children: [g("div", {
        className: "flex flex-row",
        children: [l("input", {
          type: "text",
          "aria-label": u("coCreationForm.labels.title"),
          value: e,
          placeholder: u("coCreationForm.labels.sectionTitlePlaceholder"),
          onChange: m,
          disabled: x,
          className: C("w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden", x && "cursor-not-allowed"),
          autoFocus: !0
        }), s && !i && l("div", {
          className: C("opacity-0 group-hover/section:opacity-100", d && "opacity-100"),
          children: l(Me, {
            items: w,
            icon: cr,
            open: d,
            onOpenChange: f,
            align: "start",
            children: l(B, {
              icon: cr,
              label: u("coCreationForm.actions.actions"),
              size: "md",
              variant: "ghost",
              tooltip: !1,
              hideLabel: !0
            })
          })
        })]
      }), l("textarea", {
        value: n,
        "aria-label": u("coCreationForm.labels.description"),
        placeholder: u("coCreationForm.labels.sectionDescriptionPlaceholder"),
        onChange: p,
        disabled: x,
        style: bC,
        className: C("w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden", x && "cursor-not-allowed")
      })]
    }), l(zl, {
      children: l(Mn, {
        axis: "y",
        values: r,
        onReorder: b,
        as: "div",
        children: l("div", {
          className: "group/section-list flex flex-col gap-4",
          children: r.map((D) => l(gC, {
            question: D
          }, D.id))
        })
      })
    }), g("div", {
      className: "mt-8 flex flex-row items-center gap-4",
      children: [l("div", {
        className: "h-px flex-1 bg-f1-border-secondary"
      }), l("span", {
        className: "text-base font-medium text-f1-foreground-secondary",
        children: u("coCreationForm.labels.endOfSection")
      }), l("div", {
        className: "h-px flex-1 bg-f1-border-secondary"
      })]
    })]
  });
}, yC = () => {
  const { isEditMode: t, onAddNewElement: e, lastElementId: n } = Je(), r = $l(), { t: i } = X(), o = (c) => {
    e?.({
      type: c,
      afterId: n
    });
  }, s = () => {
    e?.({
      type: "section",
      afterId: n
    });
  }, a = [{
    label: i("coCreationForm.questionTypes.section"),
    icon: iu,
    onClick: s
  }, {
    type: "separator"
  }, ...r.map((c) => ({
    ...c,
    onClick: () => o(c.questionType)
  }))];
  return t ? l("div", {
    className: "ml-[26px] flex justify-center",
    children: l(Me, {
      items: a,
      icon: gl,
      size: "md",
      align: "center"
    })
  }) : null;
}, xC = ({ element: t }) => {
  const { isDragging: e, setIsDragging: n, setDraggedItemId: r } = uo(), i = lo(), { isEditMode: o, getSectionContainingQuestion: s } = Je(), a = t.type === "question" ? s(t.question.id) : void 0, c = () => {
    n(!0), r(t.type === "section" ? t.section.id : t.question.id);
  }, d = () => {
    n(!1), r(null);
  }, f = t.type === "section" ? t.section.locked : t.question.locked || a?.locked, u = !!o && !f;
  return l(Un, {
    value: t,
    onDragStart: c,
    onDragEnd: d,
    dragListener: !1,
    dragControls: i,
    layout: "position",
    as: "div",
    children: l("div", {
      className: "w-full",
      children: g("div", {
        className: C("group/element flex flex-row items-start gap-1", e && "cursor-grabbing"),
        children: [!!o && l("div", {
          className: C("mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40", !e && "cursor-grab", !u && "cursor-not-allowed"),
          onPointerDown: (h) => {
            u && i.start(h);
          },
          children: l(G, {
            icon: _r,
            size: "sm"
          })
        }), t.type === "section" && l(vC, {
          ...t.section
        }), t.type === "question" && l(eh, {
          ...t.question
        })]
      })
    })
  });
}, p_ = ({ elements: t, isEditMode: e, onChange: n, disallowOptionalQuestions: r, allowedQuestionTypes: i, applyingChanges: o }) => {
  const s = e && (!t?.length || t?.at(-1)?.type === "section"), a = z(() => t.map((c) => c.type === "question" ? {
    ...c,
    question: {
      ...c.question,
      required: r ? !0 : c.question.required
    }
  } : c.type === "section" ? {
    ...c,
    section: {
      ...c.section,
      questions: c.section.questions?.map((d) => ({
        ...d,
        required: r ? !0 : d.required
      }))
    }
  } : c), [t, r]);
  return V(() => {
    if (o) {
      const c = document.activeElement;
      c && c.getAttribute("name") !== "one-ai-input" && c.blur();
    }
  }, [o]), l(nC, {
    isEditMode: e,
    elements: a,
    onChange: n,
    disallowOptionalQuestions: r,
    allowedQuestionTypes: i,
    children: g("div", {
      className: "relative",
      children: [g(U.div, {
        className: C("flex flex-col gap-6", o && "pointer-events-none"),
        initial: {
          filter: "blur(0px)"
        },
        animate: {
          filter: o ? "blur(2px)" : "none"
        },
        exit: {
          filter: "blur(0px)"
        },
        children: [l(zl, {
          children: l(Mn, {
            axis: "y",
            values: a,
            onReorder: n,
            as: "div",
            children: l("div", {
              className: "flex flex-col gap-8",
              children: a.map((c) => l(xC, {
                element: c
              }, c.type === "section" ? c.section.id : c.question.id))
            })
          })
        }), s && l(yC, {})]
      }), o && l(U.div, {
        className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
        initial: {
          opacity: 0,
          scale: 0.95
        },
        animate: {
          opacity: 1,
          scale: 1
        },
        exit: {
          opacity: 0,
          scale: 0.95
        },
        children: l(Zk, {})
      })]
    })
  });
};
function wC({ title: t, isActive: e = !1, onClick: n }) {
  return g("button", {
    type: "button",
    className: C("flex w-full flex-row items-center gap-[6px] rounded-md p-[6px] pr-2 text-left transition-colors", e && "bg-f1-background-tertiary", n && "cursor-pointer hover:bg-f1-background-hover", we("focus-visible:ring-inset")),
    onClick: n,
    disabled: !n,
    "aria-label": `${t}${e ? " (selected)" : ""}`,
    "aria-pressed": n ? e : void 0,
    children: [l(G, {
      icon: $g,
      size: "md",
      color: "selected"
    }), l(Ke, {
      lines: 1,
      className: "text-[13px] font-semibold leading-5 text-f1-foreground-selected",
      children: t
    })]
  });
}
function kC({ author: t, timestamp: e, onClick: n, isActive: r }) {
  const { locale: i } = su(), o = jg(i), s = eu(e, "PPPp", {
    locale: o
  }), a = `${t.firstName} ${t.lastName}`;
  return g("button", {
    type: "button",
    className: C("flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors", r && "bg-f1-background-tertiary", n && "cursor-pointer hover:bg-f1-background-hover", we("focus-visible:ring-inset")),
    onClick: n,
    disabled: !n,
    "aria-label": `Version ${s} by ${a}${r ? " (selected)" : ""}`,
    "aria-pressed": n ? r : void 0,
    children: [l(Ke, {
      lines: 1,
      className: "font-medium text-f1-foreground",
      children: s
    }), g("div", {
      className: "flex flex-row items-center gap-[6px]",
      children: [l(Nt, {
        firstName: t.firstName,
        lastName: t.lastName,
        src: t.src,
        size: "xs"
      }), l(Ke, {
        lines: 1,
        className: "font-medium text-f1-foreground-secondary",
        children: a
      })]
    })]
  });
}
function CC({ title: t, versions: e, currentVersion: n, activeVersionId: r }) {
  return g("nav", {
    className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
    "aria-label": t,
    children: [l(Ke, {
      tag: "h2",
      lines: 1,
      className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
      children: t
    }), l(ut, {
      className: "h-full flex-1",
      children: g("div", {
        className: "flex flex-col gap-1",
        children: [n && l(wC, {
          title: n.title,
          onClick: n.onClick,
          isActive: r === "current"
        }), e.map((i) => l(kC, {
          author: i.author,
          timestamp: i.timestamp,
          onClick: i.onClick,
          isActive: r === i.id
        }, i.id))]
      })
    })]
  });
}
const g_ = se("F0VersionHistory", CC), th = q(({ height: t, itemCount: e, itemSize: n, className: r, renderer: i }, o) => {
  const s = Q.useRef(null);
  Q.useImperativeHandle(o, () => s.current, []);
  const a = Bg({
    count: e,
    getScrollElement: () => s.current,
    estimateSize: typeof n == "number" ? () => n : n,
    overscan: 5
  });
  return l("div", {
    ref: s,
    className: C("scrollbar-macos w-full overflow-auto", r),
    style: {
      height: `${t}px`
    },
    children: l("div", {
      style: {
        height: `${a.getTotalSize()}px`,
        width: "100%",
        position: "relative"
      },
      children: a.getVirtualItems().map((c) => l("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: `${c.size}px`,
          transform: `translateY(${c.start}px)`
        },
        children: c ? i(c) : l(Z, {})
      }, c.key))
    })
  });
});
th.displayName = "VirtualList";
const Rs = se("VirtualList", th), nh = ({ text: t, search: e, searchKeys: n = [], semiBold: r = !1 }) => {
  if (!e)
    return l("span", {
      className: C("line-clamp-1", r ? "font-semibold" : ""),
      children: t
    });
  if (t.toLowerCase().indexOf(e.toLowerCase()) === -1)
    if (n.find((s) => s.toLowerCase().indexOf(e.toLowerCase().trim()) >= 0))
      e = t.split(" ")[0];
    else
      return l("span", {
        className: C("line-clamp-1", r ? "font-semibold" : ""),
        children: t
      });
  const i = new RegExp(`(${e})`, "gi"), o = t.split(i);
  return l("span", {
    className: C("line-clamp-1", r ? "font-semibold" : ""),
    children: o.map((s, a) => s.toLowerCase() === e.toLowerCase() ? l("span", {
      className: "truncate font-medium",
      style: {
        fontWeight: "bold"
      },
      children: s
    }, a) : s)
  });
};
function fo(t, e) {
  const r = Array.from(document.querySelectorAll('[data-avatarname-navigator-element="true"]')), i = r.indexOf(t);
  i >= 0 && i < r.length - 1 ? r[i + 1].focus() : r.length > 0 && e?.();
}
function ho(t, e) {
  const r = Array.from(document.querySelectorAll('[data-avatarname-navigator-element="true"]')), i = r.indexOf(t);
  i > 0 ? r[i - 1].focus() : r.length > 0 && e?.();
}
const NC = ({ entity: t, selected: e, onSelect: n, onRemove: r, marginLeft: i, search: o, goToFirst: s, goToLast: a, singleSelector: c = !1, disabled: d = !1, hiddenAvatar: f = !1 }) => {
  const u = t.name.split(" "), h = u[0] || "", m = u.slice(1).join(" "), p = (y) => {
    y.preventDefault(), y.stopPropagation(), !d && (e ? r(t) : n(t));
  }, b = (y) => {
    if (y.key === "Enter" || y.key === " ") {
      if (y.preventDefault(), d) return;
      e ? e && r(t) : n(t);
    } else y.key === "ArrowDown" ? fo(y.currentTarget, s) : y.key === "ArrowUp" && ho(y.currentTarget, a);
  };
  return l("div", {
    className: "w-full pl-1 pr-1",
    children: g("label", {
      "aria-label": t.name,
      className: C(i, "flex flex-row flex-wrap items-center gap-2 rounded-[10px] border px-2 py-1.5 hover:cursor-pointer", "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover", e && c ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""),
      children: [!f && l(Nt, {
        src: t.avatar,
        firstName: h,
        lastName: m,
        size: "xs",
        deactivated: t.deactivated
      }), l("div", {
        className: "flex flex-1 flex-col",
        children: l("div", {
          className: C("flex flex-1 flex-row items-center gap-2 break-all", t.deactivated ? "text-f1-foreground/[0.61]" : void 0),
          children: l(nh, {
            text: t.name,
            search: o,
            searchKeys: t.searchKeys
          })
        })
      }), l(xl, {
        "data-avatarname-navigator-element": "true",
        checked: e,
        disabled: d,
        onClick: p,
        onKeyDown: b,
        className: C("pointer-events-none ml-auto", c ? "opacity-0" : "")
      }), c && e && l(G, {
        className: "text-f1-icon-selected",
        icon: ml,
        size: "md"
      })]
    })
  });
}, ui = ({ groupView: t, expanded: e, search: n, entity: r, selected: i, partialSelected: o, onSelect: s, onRemove: a, onExpand: c, goToFirst: d, goToLast: f, isChild: u = !1, hideLine: h = !1, showGroupIcon: m = !1, singleSelector: p = !1, disabled: b = !1, hiddenAvatar: y = !1 }) => {
  const [v, w] = F(!1);
  if (!t)
    return l(NC, {
      marginLeft: u ? "ml-6" : "ml-0",
      entity: r,
      search: n,
      selected: i,
      onSelect: s,
      onRemove: a,
      singleSelector: p,
      goToFirst: d,
      goToLast: f,
      disabled: b,
      hiddenAvatar: y
    });
  const x = (k) => {
    if (k.key === " ")
      k.preventDefault(), c(!e);
    else if (k.key === "Enter" && p)
      c(!e);
    else if (k.key === "Enter") {
      if (b) return;
      !i || o ? s(r) : i && a(r);
    } else k.key === "ArrowDown" ? fo(k.currentTarget, d) : k.key === "ArrowUp" && ho(k.currentTarget, f);
  }, D = () => {
    if (v)
      c(!e), w(!1);
    else {
      if (b || p) return;
      i ? a(r) : s(r);
    }
  };
  if (!r.subItems?.length) return null;
  const N = i || o;
  return g(Z, {
    children: [g("div", {
      className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1",
      children: [l(B, {
        hideLabel: !0,
        icon: e ? lu : au,
        onClick: () => c(!e),
        label: e ? "Collapse" : "Expand",
        size: "sm",
        variant: "ghost",
        type: "button"
      }), g("label", {
        "aria-label": r.name,
        onPointerDown: () => {
          w(!0);
        },
        className: "flex flex-1 flex-row items-center gap-2 rounded-[10px] border px-2 py-1.5 focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:cursor-pointer hover:bg-f1-background-hover",
        children: [m && l(G, {
          icon: Hg,
          className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
        }), g("div", {
          className: "flex flex-grow flex-row items-center gap-2 break-all",
          children: [l(nh, {
            semiBold: !0,
            text: r.name,
            search: n,
            searchKeys: r.searchKeys
          }), l(Lr, {
            value: r.subItems?.length ?? 0
          })]
        }), l(xl, {
          checked: N,
          disabled: b,
          onClick: D,
          onKeyDown: x,
          indeterminate: o,
          onPointerDown: (k) => {
            k.stopPropagation(), w(!1);
          },
          "data-avatarname-navigator-element": "true",
          className: C("ml-auto", p ? "opacity-0" : "")
        })]
      })]
    }), !h && !e && l("div", {
      className: "h-[1px] w-full bg-f1-border-secondary"
    })]
  });
};
ui.displayName = "EntitySelectListItem";
const Nc = ({ label: t, onCreate: e, goToFirst: n, goToLast: r }) => l("div", {
  className: "w-full pl-1 pr-1",
  onKeyDown: (o) => {
    o.key === "ArrowDown" || o.key === "Tab" ? fo(o.currentTarget, n) : o.key === "ArrowUp" && ho(o.currentTarget, r);
  },
  children: g("label", {
    "aria-label": t,
    className: C("flex flex-row flex-wrap items-center gap-1.5 rounded-[10px] border px-1.5 py-1.5 hover:cursor-pointer", "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover", "select-none"),
    children: [l(B, {
      hideLabel: !0,
      label: t,
      onClick: () => e(),
      icon: Ji,
      size: "sm",
      variant: "outline"
    }), l("div", {
      className: "flex flex-1 flex-col",
      children: l("div", {
        className: "flex flex-1 flex-row items-center gap-2 break-all",
        children: l("span", {
          className: C("line-clamp-1"),
          children: t
        })
      })
    })]
  })
}), nr = ({ primaryAction: t, secondaryActions: e }) => {
  if (!e || e.length === 0)
    return l(B, {
      disabled: t.disabled,
      variant: t.variant,
      onClick: t.onClick,
      label: t.label,
      icon: t.icon,
      size: "sm"
    });
  const n = [t, ...e ?? []], r = n.map((s) => ({
    label: s.label,
    value: s.label,
    icon: s.icon,
    critical: s.variant === "critical"
  })) || [], i = (s) => {
    const a = n.find((c) => c.label === s);
    a && !a.disabled && a.onClick?.();
  }, o = n.every((s) => s.disabled);
  return l(Fn, {
    items: r,
    value: t.label,
    disabled: o,
    onClick: i,
    variant: "outline",
    size: "sm"
  });
}, SC = ({ actions: t, selectAllLabel: e, clearLabel: n, disabled: r, allVisibleSelected: i, anyVisibleSelected: o, loading: s, singleSelector: a, onSelectAll: c, onClear: d }) => {
  const f = !a && (e || n), u = t && t.length > 0;
  if (!(!s && (!a && f || u))) return null;
  let m, p, b = c ? {
    label: e || "",
    onClick: c,
    variant: "outline",
    disabled: r || i
  } : void 0, y = d ? {
    label: n || "",
    onClick: d,
    variant: "ghost",
    disabled: r || !o
  } : void 0;
  return b || (b = y, y = void 0), u && f ? (m = l(nr, {
    primaryAction: b,
    secondaryActions: y ? [y] : []
  }), p = l(nr, {
    primaryAction: t[0],
    secondaryActions: t.slice(1)
  })) : u ? m = l(nr, {
    primaryAction: t[0],
    secondaryActions: t.slice(1)
  }) : f && (m = l(nr, {
    primaryAction: b,
    secondaryActions: []
  }), y && (p = l(nr, {
    primaryAction: y,
    secondaryActions: []
  }))), l("footer", {
    className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl",
    children: g("div", {
      className: "flex flex-1 justify-between p-2",
      children: [m, p]
    })
  });
}, IC = ({ search: t, onSearch: e, searchPlaceholder: n, disabled: r = !1, goToFirst: i, goToLast: o }) => {
  const s = (a) => {
    a.key === "ArrowDown" ? (a.preventDefault(), a.stopPropagation(), fo(a.currentTarget, i)) : a.key === "ArrowUp" ? (a.preventDefault(), a.stopPropagation(), ho(a.currentTarget, o)) : a.key === "Enter" && (a.preventDefault(), a.stopPropagation());
  };
  return g("div", {
    className: "flex justify-between gap-1 rounded-[10px] border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover",
    children: [l(G, {
      icon: Bv,
      size: "md"
    }), l("input", {
      disabled: r,
      onKeyDown: s,
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: n,
      value: t,
      onChange: (a) => e(a.target.value)
    }), t && l(G, {
      icon: fs,
      size: "md",
      onClick: () => e(""),
      className: "cursor-pointer text-f1-icon-secondary"
    })]
  });
}, qo = 384, Ko = 36, AC = 37, Sc = 1, Ic = 200, Ac = '[data-avatarname-navigator-element="true"]', TC = ({ groupView: t, entities: e, groups: n, selectedGroup: r, search: i, onSelect: o, onRemove: s, onSubItemRemove: a, onSubItemSelect: c, onClear: d, onSelectAll: f, onSearch: u, selectedEntities: h = [], onGroupChange: m, onToggleExpand: p, searchPlaceholder: b, selectAllLabel: y, clearLabel: v, notFoundTitle: w, notFoundSubtitle: x, className: D, actions: N, onCreate: k, onCreateLabel: I, singleSelector: E = !1, loading: T = !1, disabled: S = !1, hiddenAvatar: L = !1 }) => {
  const A = Q.useRef(null), O = z(() => t ? e.reduce((P, Y) => P + (Y.subItems?.length ?? 0), 0) : e.length, [e, t]), R = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({
        top: 0
      });
    }, Sc), setTimeout(() => {
      Array.from(document.querySelectorAll(Ac))[0]?.focus();
    }, Ic);
  }, []), _ = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({
        top: A.current?.scrollHeight
      });
    }, Sc), setTimeout(() => {
      const P = Array.from(document.querySelectorAll(Ac));
      P[P.length - 1]?.focus();
    }, Ic);
  }, []), $ = z(() => new Map(h.map((P) => [P.id, P])), [h]), K = ne((P) => {
    const Y = $.get(P.id);
    if (!t)
      return {
        selected: !!Y,
        partialSelected: !!Y
      };
    const ie = (P.subItems ?? []).filter((be) => Y?.subItems?.some((De) => De.subId === be.subId)), ce = (P.subItems?.length ?? 0) === ie.length, ve = !ce && ie.length > 0;
    return {
      selected: ce,
      partialSelected: ve
    };
  }, [t, $]), ee = ne((P) => {
    if (P.index === 0 && k)
      return l(Nc, {
        label: I ?? "",
        onCreate: () => k?.(i),
        goToFirst: R,
        goToLast: _
      });
    const Y = k ? P.index - 1 : P.index, ie = e[Y], { selected: ce, partialSelected: ve } = K(ie);
    return l(ui, {
      expanded: ie.expanded ?? !1,
      onExpand: () => p(ie, !0),
      search: i,
      groupView: t,
      entity: ie,
      onSelect: o,
      onRemove: s,
      selected: ce,
      partialSelected: ve,
      showGroupIcon: EC(n, r),
      singleSelector: E,
      goToFirst: R,
      goToLast: _,
      disabled: S,
      hiddenAvatar: L
    }, ie.id);
  }, [k, I, S, e, K, R, _, t, n, L, s, o, p, i, r, E]), ae = z(() => t ? e.flatMap((P) => {
    const Y = ei(h ?? [], P.id);
    return [{
      parent: null,
      subItem: {
        subId: P.id,
        subName: P.name,
        subAvatar: P.avatar,
        expanded: P.expanded ?? Y?.expanded ?? !1,
        subItems: P.subItems,
        subSearchKeys: P.searchKeys
      }
    }, ...(P.subItems ?? []).map((ie) => ({
      parent: {
        ...P,
        expanded: P.expanded ?? Y?.expanded ?? !1
      },
      subItem: ie
    }))];
  }).filter((P) => (!P.parent || P.parent.expanded) && (!!P.parent || !!P.subItem.subItems && P.subItem.subItems.length > 0)) : e.map((P) => ({
    parent: null,
    subItem: {
      subId: P.id,
      subName: P.name,
      subAvatar: P.avatar,
      subSearchKeys: P.searchKeys
    }
  })), [t, e, h]), J = ne((P) => {
    if (P.index === 0 && k)
      return l(Nc, {
        label: I ?? "",
        onCreate: () => k?.(i),
        goToFirst: R,
        goToLast: _
      });
    const Y = k ? P.index - 1 : P.index, ie = ae[Y].parent, ce = ae[Y].subItem;
    if (!ie) {
      const be = {
        id: ce.subId,
        name: ce.subName,
        avatar: ce.subAvatar,
        subItems: ce.subItems,
        expanded: ce.expanded,
        searchKeys: ce.subSearchKeys
      }, De = ei(h, be.id), Se = (be?.subItems ?? []).filter((it) => De?.subItems?.some((vn) => vn.subId === it.subId)), Et = (be.subItems?.length ?? 0) === Se.length, rt = !Et && Se.length > 0;
      return l(ui, {
        groupView: !0,
        expanded: be.expanded ?? !1,
        onExpand: (it) => p(be, it),
        search: i,
        entity: be,
        onSelect: o,
        onRemove: s,
        selected: Et,
        partialSelected: rt,
        showGroupIcon: n.find((it) => it.value === r)?.groupType === "team",
        singleSelector: E,
        goToFirst: R,
        goToLast: _,
        hideLine: Y === ae.length - 1,
        disabled: S,
        hiddenAvatar: L
      });
    }
    let ve = !!ei(h, ce.subId);
    if (!ve) {
      const be = ei(h, ie.id);
      ve = !!(ie?.subItems ?? []).filter((Se) => be?.subItems?.some((Et) => Et.subId === Se.subId)).find((Se) => Se.subId === ce.subId);
    }
    return l(ui, {
      expanded: !1,
      onExpand: () => null,
      search: i,
      groupView: !1,
      entity: {
        id: ce.subId,
        name: ce.subName,
        avatar: ce.subAvatar,
        searchKeys: ce.subSearchKeys
      },
      onSelect: () => {
        c(ie, ce);
      },
      onRemove: () => a(ie, ce),
      selected: !!ve,
      partialSelected: !1,
      singleSelector: E,
      goToFirst: R,
      goToLast: _,
      isChild: !0,
      hiddenAvatar: L
    });
  }, [ae, h, i, E, R, _, o, s, n, S, p, r, c, a, L, k, I]), [H, le] = z(() => {
    if (!e.length)
      return [!1, !1];
    let P = 0, Y = 0;
    if (!t)
      P = e.length, Y = e.reduce((ve, { id: be }) => ve + ($.has(be) ? 1 : 0), 0);
    else {
      const ve = new Set([...$.values()].flatMap((be) => be.subItems?.map((De) => De.subId) ?? []));
      e.forEach((be) => {
        const De = be.subItems ?? [];
        P += De.length, Y += De.filter((Se) => ve.has(Se.subId)).length;
      });
    }
    const ie = P > 0 && Y === P, ce = Y > 0;
    return [ie, ce];
  }, [e, $, t]), te = ae.length, re = !E && (y || v), ue = N && N.length > 0, j = !T && (!E && re || ue);
  return g("div", {
    className: C("flex w-full flex-col rounded-l-xl border-0", E || T ? "rounded-r-xl" : "", D),
    children: [g("header", {
      className: C("flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl", E || T ? "rounded-t-xl border-r-0" : ""),
      children: [l("div", {
        className: "flex-1",
        children: l(IC, {
          search: i,
          onSearch: u,
          searchPlaceholder: b,
          goToFirst: R,
          goToLast: _
        })
      }), n && n.length > 1 && l("div", {
        className: "flex-1",
        children: l(dr, {
          label: "Group",
          hideLabel: !0,
          disabled: T,
          onChange: m,
          options: n,
          value: r,
          className: C("h-8 rounded-[10px] bg-transparent py-[5px]", r === "all" ? "text-f1-foreground-secondary" : "")
        })
      })]
    }), g("section", {
      className: C("flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background", j ? "" : "rounded-b-xl border-r-0"),
      children: [T && l("div", {
        className: "flex h-full w-full flex-row items-center justify-center",
        children: l(sn, {})
      }), !T && !O && g("div", {
        className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
        style: {
          height: qo
        },
        children: [l("span", {
          className: "text-lg font-medium",
          children: w
        }), l("span", {
          className: "text-center text-f1-foreground-secondary",
          children: x
        })]
      }), !T && (!!O || k) && l("div", {
        className: "h-full",
        children: t ? l(Rs, {
          height: qo,
          itemCount: te + (k ? 1 : 0),
          itemSize: (P) => {
            if (P === 0 && k) return Ko;
            const Y = k ? P - 1 : P;
            return ae[Y]?.parent === null ? AC : Ko;
          },
          renderer: J,
          ref: A
        }) : l(Rs, {
          height: qo,
          itemCount: e.length + (k ? 1 : 0),
          itemSize: Ko,
          renderer: ee,
          ref: A
        })
      })]
    }), l(SC, {
      onSelectAll: f,
      onClear: d,
      singleSelector: E,
      totalFilteredEntities: O,
      allVisibleSelected: H,
      anyVisibleSelected: le,
      selectAllLabel: y,
      clearLabel: v,
      disabled: S,
      actions: N
    })]
  });
}, ei = (t, e) => t.find((n) => n.id === e), EC = (t, e) => t.find((n) => n.value === e)?.groupType === "team", DC = ({ entity: t, onRemove: e, disabled: n = !1, hiddenAvatar: r = !1 }) => l("div", {
  className: "pr-2 pt-1.5",
  children: l(Vg, {
    className: C("max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]", "rounded-full", r ? "pl-2" : "pl-0"),
    left: !r && l(Xd, {
      src: t.subAvatar,
      name: t.subName,
      size: "xs",
      type: "rounded"
    }),
    right: !n && l(G, {
      icon: en,
      size: "sm",
      className: "cursor-pointer text-f1-icon-secondary",
      onClick: () => e?.(t)
    }),
    text: t.subName
  })
}), _C = ({ groupView: t, onSubItemRemove: e, onRemove: n, selectedEntities: r, selectedLabel: i, disabled: o = !1, hiddenAvatar: s = !1 }) => {
  const a = z(() => {
    const d = t ? r.flatMap((u) => (u.subItems ?? []).map((h) => ({
      parent: u,
      subItem: h
    }))) : r.map((u) => ({
      parent: null,
      subItem: {
        subId: u.id,
        subName: u.name,
        subAvatar: u.avatar
      }
    })), f = /* @__PURE__ */ new Set();
    return d.filter((u) => {
      const h = u.subItem.subId;
      return f.has(h) ? !1 : (f.add(h), !0);
    });
  }, [t, r]), c = a.length;
  return g("div", {
    className: "w-full flex-col rounded-r-xl",
    children: [l("div", {
      className: "flex h-[48px] rounded-tr-xl border-0 border-b-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-3 backdrop-blur-2xl",
      children: i && g("span", {
        className: "my-auto text-f1-foreground-secondary",
        children: [c, " ", i]
      })
    }), l("div", {
      className: "flex flex-col gap-3 rounded-br-xl bg-f1-background pb-0 pl-2",
      children: l(Rs, {
        height: 425,
        itemCount: c,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (d) => {
          const f = a[d.index];
          return f ? l(DC, {
            entity: f.subItem,
            disabled: o,
            hiddenAvatar: s,
            onRemove: () => f.parent ? e?.(f.parent, f.subItem) : n({
              id: f.subItem.subId,
              name: f.subItem.subName,
              avatar: f.subItem.subAvatar
            })
          }) : l(Z, {});
        }
      })
    })]
  });
}, LC = 500, Tc = 520, Ec = 210, Dc = ({ groupView: t, onRemove: e, onSubItemRemove: n, selectedEntities: r, selectedLabel: i, width: o, singleSelector: s = !1, loading: a = !1, hiddenAvatar: c = !1, actions: d, onCreate: f, onCreateLabel: u, ...h }) => {
  const m = (o ?? Tc) < LC, p = !a && !s && !m, b = o ?? Tc, y = p ? b - Ec : b;
  return g("div", {
    className: "relative overflow-hidden",
    style: {
      height: s && (!d || d.length === 0) ? "435px" : "473px",
      width: b
    },
    children: [l("div", {
      className: "absolute right-0 top-0",
      style: {
        width: Ec + "px"
      },
      children: l(_C, {
        groupView: t,
        onRemove: e,
        onSubItemRemove: n,
        selectedEntities: r ?? [],
        selectedLabel: i,
        disabled: h.disabled,
        hiddenAvatar: c
      })
    }), l("div", {
      className: "absolute left-0",
      style: {
        width: y + 1 + "px"
      },
      children: l(TC, {
        ...h,
        groupView: t,
        onRemove: e,
        onSubItemRemove: n,
        selectedEntities: r,
        singleSelector: s,
        loading: a,
        disabled: h.disabled,
        hiddenAvatar: c,
        actions: d,
        onCreate: f,
        onCreateLabel: u
      })
    })]
  });
}, OC = ({ placeholder: t, selected: e, selectedEntities: n, disabled: r = !1, hiddenAvatar: i = !1, label: o, labelIcon: s, icon: a, error: c, status: d, hint: f, onClickContent: u, hideLabel: h = !1, maxLength: m, loading: p = !1, required: b = !1, readonly: y = !1, append: v, size: w = "sm", open: x }) => {
  const D = z(() => n.some((E) => E.subItems && E.subItems.length > 0), [n]), N = z(() => D ? n.flatMap((E) => (E.subItems ?? []).map((T) => ({
    parent: E,
    subItem: T
  }))) : n.map((E) => ({
    parent: null,
    subItem: {
      subId: E.id,
      subName: E.name,
      subAvatar: E.avatar
    }
  })), [D, n]), k = N.length === 0 ? void 0 : N.length === 1 ? N[0].subItem.subName : N.length + " " + e, I = N.length === 1 ? N[0].subItem.subName : void 0;
  return l(Wg, {
    onClickContent: u,
    role: "combobox",
    label: o,
    labelIcon: s,
    "aria-expanded": !1,
    "aria-controls": "listbox",
    icon: a && !k ? a : void 0,
    error: c,
    status: d,
    hint: f,
    hideLabel: h,
    maxLength: m,
    clearable: !1,
    value: k,
    disabled: r,
    loading: p,
    required: b,
    readonly: y,
    size: w,
    avatar: i || !I ? void 0 : {
      type: "person",
      firstName: I,
      lastName: "",
      src: N[0].subItem.subAvatar
    },
    append: v ?? l(Z, {
      children: l(Ug, {
        open: x,
        disabled: r,
        size: w
      })
    }),
    children: l("span", {
      role: "button",
      className: C("my-auto flex items-center pr-1", t && "text-f1-foreground-secondary", k && "text-f1-foreground", N.length === 1 && !i || a && !k ? "pl-8" : "pl-2"),
      children: l(Ke, {
        tag: "span",
        children: N.length === 0 ? t ?? "" : N.length === 1 ? N[0].subItem.subName : `${N.length} ${e}`
      })
    })
  });
}, b_ = (t) => {
  const [e, n] = F((t.alwaysOpen || t.defaultOpen) ?? !1), r = (k) => {
    n(k), t.onOpenChange?.(k);
  };
  V(() => {
    t.defaultOpen && e && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [i, o] = F(t.entities), [s, a] = F(""), [c, d] = Gg("", 300), f = z(() => t.entities.some((k) => k.subItems && k.subItems.length > 0), [t.entities]);
  function u(k) {
    if (t.singleSelector) {
      t.onSelect(k), n(!1);
      return;
    }
    const I = t.selectedEntities ?? [], E = i.find((O) => O.id === k.id);
    if (!E)
      return;
    const T = new Set((E.subItems ?? []).map((O) => O.subId)), S = /* @__PURE__ */ new Set([E.id]);
    i.forEach((O) => {
      O.id !== E.id && (O.subItems ?? []).some((_) => T.has(_.subId)) && S.add(O.id);
    });
    const L = [...I];
    function A(O) {
      const R = L.findIndex((_) => _.id === O.id);
      R >= 0 ? L[R] = O : L.push(O);
    }
    S.forEach((O) => {
      const R = i.find((K) => K.id === O);
      if (!R) return;
      const _ = R.subItems?.filter((K) => T.has(K.subId)) ?? [], $ = L.findIndex((K) => K.id === O);
      if ($ >= 0) {
        const K = L[$].subItems ?? [], ee = new Set(K.map((J) => J.subId)), ae = [...K, ..._.filter((J) => !ee.has(J.subId))];
        A({
          ...R,
          subItems: ae
        });
      } else
        A({
          ...R,
          subItems: _
        });
    }), t.onSelect(L);
  }
  function h(k, I) {
    if (t.singleSelector)
      t.onSelect({
        ...k,
        subItems: [{
          ...I
        }]
      }), n(!1);
    else {
      const E = t.selectedEntities ?? [], T = new Set(E.map((A) => A.id)), S = new Map(E.map((A) => [A.id, A.subItems ?? []]));
      T.add(k.id), t.entities.forEach((A) => {
        A.subItems?.some((R) => R.subId === I.subId) && T.add(A.id);
      });
      const L = [];
      t.entities.forEach((A) => {
        if (T.has(A.id)) {
          let R = [...S.get(A.id) ?? []];
          A.subItems?.some((K) => K.subId === I.subId) && (R.some((ee) => ee.subId === I.subId) || R.push(I));
          const $ = new Set((A.subItems ?? []).map((K) => K.subId));
          R = R.filter((K) => $.has(K.subId)), L.push({
            ...A,
            subItems: R
          });
        }
      }), t.onSelect(L);
    }
  }
  function m(k) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let I = [];
    const E = t.selectedEntities ?? [];
    if (f) {
      const T = i.find((L) => L.id === k.id);
      if (!T)
        return;
      const S = new Set((T.subItems ?? []).map((L) => L.subId));
      for (const L of E) {
        const A = (L.subItems ?? []).filter((O) => !S.has(O.subId));
        A.length > 0 && I.push({
          ...L,
          subItems: A
        });
      }
    } else
      I = (E ?? []).filter((T) => T.id !== k.id);
    t.onSelect(I);
  }
  function p(k, I) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const E = t.selectedEntities ?? [], T = I.subId, S = [];
    for (const L of E) {
      const A = L.subItems?.filter((O) => O.subId !== T) ?? [];
      A.length > 0 && S.push({
        ...L,
        subItems: A
      });
    }
    t.onSelect(S);
  }
  function b() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const k = t.selectedEntities ?? [];
    let I = [];
    if (f) {
      const E = new Set(i.flatMap((T) => (T.subItems ?? []).map((S) => S.subId)));
      for (const T of k) {
        const S = (T.subItems ?? []).filter((L) => !E.has(L.subId));
        S.length > 0 && I.push({
          ...T,
          subItems: S
        });
      }
    } else {
      const E = new Set(i.map((T) => T.id));
      I = (k ?? []).filter((T) => !E.has(T.id));
    }
    t.onSelect(I);
  }
  function y() {
    const k = [...t.selectedEntities ?? []];
    i.forEach((I) => {
      const E = k.find((T) => T.id === I.id);
      if (!E)
        k.push({
          ...I,
          subItems: I.subItems || []
        });
      else {
        const T = Array.from(/* @__PURE__ */ new Set([...E.subItems ?? [], ...I.subItems ?? []]));
        E.subItems = T;
      }
    }), t.singleSelector || t.onSelect(k);
  }
  const v = (k) => {
    a(k), d(k);
  }, w = (k, I) => {
    t.onItemExpandedChange(k.id, I), o(i.map((E) => E.id === k.id ? {
      ...E,
      expanded: !k.expanded
    } : E));
  };
  V(() => {
    if (!c) {
      o(t.entities);
      return;
    }
    if (f && !t.applySearchToGroup) {
      const I = t.entities.map((E) => {
        const T = RC(E, c), S = E.subItems?.map((L) => ({
          ...L,
          score: Ri(c, L.subSearchKeys ?? [L.subName])
        })).filter((L) => L.score < 1 / 0).sort((L, A) => L.score - A.score);
        return {
          ...E,
          score: T,
          expanded: E.expanded ?? (S?.length ?? 0) > 0,
          subItems: S
        };
      }).filter((E) => E.score < 1 / 0).sort((E, T) => E.score - T.score);
      o(I);
    } else {
      const k = t.entities.map((I) => {
        const E = Ri(c, I.searchKeys ?? [I.name]);
        return {
          ...I,
          score: E
        };
      }).filter((I) => I.score < 1 / 0).sort((I, E) => I.score - E.score);
      o(k);
    }
  }, [c, t.entities, t.applySearchToGroup, f, o]);
  const x = W(null), [D, N] = F(0);
  return Wn(() => {
    const k = () => {
      x.current && N(x.current.offsetWidth);
    };
    return k(), window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, []), t.alwaysOpen ? l("div", {
    ref: x,
    className: C("scrollbar-macos relative overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0", t.width ? "w-fit" : "w-full"),
    children: l(Dc, {
      groupView: f,
      entities: i,
      groups: t.groups,
      onGroupChange: t.onGroupChange,
      selectedGroup: t.selectedGroup,
      onSelect: u,
      onRemove: m,
      onSubItemRemove: p,
      onSubItemSelect: h,
      onClear: b,
      onSelectAll: y,
      selectedEntities: t.selectedEntities ?? [],
      search: s,
      onSearch: v,
      onToggleExpand: w,
      searchPlaceholder: t.searchPlaceholder,
      selectAllLabel: t.selectAllLabel,
      clearLabel: t.clearLabel,
      selectedLabel: t.selectedLabel,
      singleSelector: t.singleSelector,
      loading: t.loading,
      notFoundTitle: t.notFoundTitle,
      notFoundSubtitle: t.notFoundSubtitle,
      width: t.width ?? D - 2,
      disabled: t.disabled,
      hiddenAvatar: t.hiddenAvatar,
      onCreate: t.onCreate,
      onCreateLabel: t.onCreateLabel
    })
  }) : g(bl, {
    ...t,
    onOpenChange: r,
    open: e,
    children: [l(vl, {
      className: "w-full",
      disabled: t.disabled,
      "aria-label": t.label || t.placeholder,
      children: t.children ? t.children : l(OC, {
        selected: t.selectedItemsCopy,
        selectedEntities: t.selectedEntities ?? [],
        hiddenAvatar: t.hiddenAvatar,
        label: t.label,
        labelIcon: t.labelIcon,
        icon: t.icon,
        error: t.error,
        status: t.status,
        hint: t.hint,
        hideLabel: t.hideLabel,
        maxLength: t.maxLength,
        value: t.value?.toString() ?? void 0,
        disabled: t.disabled,
        placeholder: t.placeholder,
        loading: t.alwaysOpen ? t.loading : !1,
        required: t.required,
        readonly: t.readonly,
        append: t.append,
        size: t.size,
        open: e
      })
    }), l(yl, {
      className: C("scrollbar-macos relative w-full overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"),
      children: l(Dc, {
        groupView: f,
        entities: i,
        groups: t.groups,
        onGroupChange: t.onGroupChange,
        selectedGroup: t.selectedGroup,
        onSelect: u,
        onRemove: m,
        onSubItemRemove: p,
        onSubItemSelect: h,
        onClear: b,
        onSelectAll: y,
        selectedEntities: t.selectedEntities ?? [],
        search: s,
        onSearch: v,
        onToggleExpand: w,
        searchPlaceholder: t.searchPlaceholder,
        selectAllLabel: t.selectAllLabel,
        clearLabel: t.clearLabel,
        selectedLabel: t.selectedLabel,
        singleSelector: t.singleSelector,
        loading: t.loading,
        notFoundTitle: t.notFoundTitle,
        notFoundSubtitle: t.notFoundSubtitle,
        width: t.width,
        disabled: t.disabled,
        hiddenAvatar: t.hiddenAvatar,
        actions: t.actions,
        onCreate: t.onCreate,
        onCreateLabel: t.onCreateLabel
      })
    })]
  });
};
function Fs(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function _c(t) {
  return Fs(t).split(/\s+/).filter((e) => e.length > 0);
}
function Ri(t = "", e) {
  const n = _c(t);
  if (n.length === 0)
    return 1 / 0;
  for (const r of e) {
    const i = Fs(r), o = _c(r), s = Fs(t);
    if (i.includes(s) || n.every((c) => o.some((d) => d.includes(c))))
      return 1;
  }
  return 1 / 0;
}
function RC(t, e) {
  const n = Ri(e, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((i, o) => {
    const s = Ri(e, o.subSearchKeys ?? [o.subName]);
    return Math.min(i, s);
  }, 1 / 0)), Math.min(n, r);
}
var Jn = "ToggleGroup", [rh] = qg(Jn, [
  cu
]), ih = cu(), jl = Q.forwardRef((t, e) => {
  const { type: n, ...r } = t;
  if (n === "single")
    return /* @__PURE__ */ l(FC, { ...r, ref: e });
  if (n === "multiple")
    return /* @__PURE__ */ l(MC, { ...r, ref: e });
  throw new Error(`Missing prop \`type\` expected on \`${Jn}\``);
});
jl.displayName = Jn;
var [oh, sh] = rh(Jn), FC = Q.forwardRef((t, e) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: i = () => {
    },
    ...o
  } = t, [s, a] = du({
    prop: n,
    defaultProp: r,
    onChange: i
  });
  return /* @__PURE__ */ l(
    oh,
    {
      scope: t.__scopeToggleGroup,
      type: "single",
      value: s ? [s] : [],
      onItemActivate: a,
      onItemDeactivate: Q.useCallback(() => a(""), [a]),
      children: /* @__PURE__ */ l(lh, { ...o, ref: e })
    }
  );
}), MC = Q.forwardRef((t, e) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: i = () => {
    },
    ...o
  } = t, [s = [], a] = du({
    prop: n,
    defaultProp: r,
    onChange: i
  }), c = Q.useCallback(
    (f) => a((u = []) => [...u, f]),
    [a]
  ), d = Q.useCallback(
    (f) => a((u = []) => u.filter((h) => h !== f)),
    [a]
  );
  return /* @__PURE__ */ l(
    oh,
    {
      scope: t.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: c,
      onItemDeactivate: d,
      children: /* @__PURE__ */ l(lh, { ...o, ref: e })
    }
  );
});
jl.displayName = Jn;
var [PC, zC] = rh(Jn), lh = Q.forwardRef(
  (t, e) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: i = !0,
      orientation: o,
      dir: s,
      loop: a = !0,
      ...c
    } = t, d = ih(n), f = Yg(s), u = { role: "group", dir: f, ...c };
    return /* @__PURE__ */ l(PC, { scope: n, rovingFocus: i, disabled: r, children: i ? /* @__PURE__ */ l(
      Qg,
      {
        asChild: !0,
        ...d,
        orientation: o,
        dir: f,
        loop: a,
        children: /* @__PURE__ */ l(ka.div, { ...u, ref: e })
      }
    ) : /* @__PURE__ */ l(ka.div, { ...u, ref: e }) });
  }
), Fi = "ToggleGroupItem", ah = Q.forwardRef(
  (t, e) => {
    const n = sh(Fi, t.__scopeToggleGroup), r = zC(Fi, t.__scopeToggleGroup), i = ih(t.__scopeToggleGroup), o = n.value.includes(t.value), s = r.disabled || t.disabled, a = { ...t, pressed: o, disabled: s }, c = Q.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ l(
      Kg,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: o,
        ref: c,
        children: /* @__PURE__ */ l(Lc, { ...a, ref: e })
      }
    ) : /* @__PURE__ */ l(Lc, { ...a, ref: e });
  }
);
ah.displayName = Fi;
var Lc = Q.forwardRef(
  (t, e) => {
    const { __scopeToggleGroup: n, value: r, ...i } = t, o = sh(Fi, n), s = { role: "radio", "aria-checked": t.pressed, "aria-pressed": void 0 }, a = o.type === "single" ? s : void 0;
    return /* @__PURE__ */ l(
      Jg,
      {
        ...a,
        ...i,
        ref: e,
        onPressedChange: (c) => {
          c ? o.onItemActivate(r) : o.onItemDeactivate(r);
        }
      }
    );
  }
), ch = jl, dh = ah;
const uh = zt({
  base: C("inline-flex items-center justify-center rounded-sm text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground", we()),
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
}), $C = Fe.forwardRef(({ className: t, variant: e, size: n, ...r }, i) => l(uu, {
  ref: i,
  className: C(uh({
    variant: e,
    size: n,
    className: t
  })),
  ...r
}));
$C.displayName = uu.displayName;
const fh = Fe.createContext({
  size: "default",
  variant: "default"
}), hh = Fe.forwardRef(({ className: t, variant: e, size: n, children: r, ...i }, o) => l(ch, {
  ref: o,
  className: C("flex items-center justify-center gap-1.5", t),
  ...i,
  children: l(fh.Provider, {
    value: {
      variant: e,
      size: n
    },
    children: r
  })
}));
hh.displayName = ch.displayName;
const mh = Fe.forwardRef(({ className: t, children: e, variant: n, size: r, ...i }, o) => {
  const s = Fe.useContext(fh);
  return l(dh, {
    ref: o,
    className: C(uh({
      variant: s.variant || n,
      size: s.size || r
    }), t),
    ...i,
    children: e
  });
});
mh.displayName = dh.displayName;
function v_({ onSubmit: t, children: e, ...n }) {
  const r = n.formState.errors.root;
  return l(_0, {
    ...n,
    children: g("form", {
      onSubmit: t,
      className: "flex flex-col gap-4",
      children: [r && l("p", {
        className: "text-sm font-medium text-f1-foreground-critical",
        children: r.message
      }), e]
    })
  });
}
function y_({ submitLabel: t, form: e }) {
  return l("div", {
    children: l(B, {
      type: "submit",
      label: t,
      loading: e.formState.isSubmitting
    })
  });
}
const x_ = ({ label: t, description: e, children: n, ...r }) => l(L0, {
  ...r,
  render: ({ field: i }) => g(O0, {
    children: [l(R0, {
      children: t
    }), l(F0, {
      children: n(i)
    }), l(M0, {
      children: e
    }), l(P0, {})]
  })
});
function w_(t, e, n) {
  const r = z0({
    resolver: $0(t),
    mode: "onChange",
    ...e
  }), i = async (o) => {
    const s = await n(o);
    s.success || (Object.keys(s.errors).map((a) => {
      r.setError(a, {
        message: s.errors[a]
      });
    }), s.rootMessage && r.setError("root", {
      message: s.rootMessage
    }));
  };
  return {
    ...r,
    onSubmit: r.handleSubmit(i)
  };
}
const jC = ({ id: t, createdAt: e, title: n, description: r, icon: i, category: o, isUnread: s = !1, onClick: a, onVisible: c }) => {
  const { ref: d } = hs({
    threshold: 0.1,
    onChange(h) {
      h && c?.(t);
    }
  }), f = Bu(e, {
    yesterdayRelative: !1
  });
  return g("div", {
    ref: d,
    className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
    onClick: () => {
      a(t);
    },
    children: [l(ms, {
      icon: i ?? fu
    }), g("div", {
      className: "flex-1",
      children: [l("p", {
        className: "line-clamp-2 font-medium text-f1-foreground",
        title: n,
        children: n
      }), l("p", {
        className: "line-clamp-2 text-f1-foreground-secondary",
        title: r,
        children: r
      }), l("div", {
        className: "mt-1.5 flex flex-row",
        children: l("p", {
          className: "text-f1-foreground-secondary",
          children: `${o} · ${f}`
        })
      })]
    }), l("div", {
      className: "ml-1",
      children: s && l("div", {
        className: "mt-1.5 size-2 rounded-full bg-f1-icon-accent"
      })
    })]
  });
}, BC = () => g("div", {
  className: "flex w-full flex-row gap-2 rounded-lg p-2 pr-3",
  children: [l(M, {
    className: "size-9 rounded-md"
  }), g("div", {
    className: "flex-1",
    children: [l(M, {
      className: "mb-1 h-5 w-full"
    }), l(M, {
      className: "mb-1 h-4 w-full"
    }), l(M, {
      className: "mb-1 h-4 w-full"
    }), l(M, {
      className: "mt-1.5 h-4 w-1/3"
    })]
  })]
}), Bl = se("ActivityItem", Ne(jC, BC)), ph = ({ title: t, children: e }) => g("div", {
  children: [l("div", {
    className: "pb-2 pl-2 pt-1",
    children: l("p", {
      className: "text-sm font-medium text-f1-foreground-secondary",
      children: t
    })
  }), l("div", {
    className: "flex flex-col gap-1",
    children: e
  })]
}), HC = ({ title: t, items: e, onClickItem: n, onItemVisible: r }) => l(ph, {
  title: t,
  children: e.map((i) => l(Bl, {
    ...i,
    onClick: () => n(i.id),
    onVisible: r
  }, i.id))
}), VC = ({ title: t, numItems: e }) => l(ph, {
  title: t,
  children: Array.from({
    length: e
  }).map((n, r) => l(Bl.Skeleton, {}, r))
}), fi = Ne(HC, VC), WC = 3, UC = ["today", "yesterday", "lastWeek", "lastMonth"], GC = (t) => H0(t, ([e]) => {
  const n = UC.indexOf(e);
  return n === -1 ? -Number(e) : n - 4e3;
}), Ms = () => l("div", {
  className: "-mx-2 h-px bg-f1-background-secondary"
}), qC = ({ items: t, loadingMoreItems: e = !1, onClickItem: n, onEndReached: r, onEndReachedItemsThreshold: i = 5 }) => {
  const o = X(), s = j0(t, "createdAt"), a = Object.values(s).slice().flatMap((f) => f.map((u) => u.id)).slice(-i), c = B0((f) => {
    a.includes(f) && r?.();
  }, 1e3), d = GC(Object.entries(s).filter(([f, u]) => !!u.length));
  return g("div", {
    className: "flex flex-col gap-2 p-2",
    children: [d.map(([f, u], h) => g(Q.Fragment, {
      children: [l(fi, {
        title: f in o.date.groups ? o.date.groups[f] : f,
        items: u,
        onClickItem: n,
        onItemVisible: c
      }), h !== d.length - 1 && l(Ms, {})]
    }, f)), e && new Array(WC).fill(null).map((f, u) => l(Bl.Skeleton, {}, u))]
  });
}, KC = () => {
  const t = X();
  return g("div", {
    className: "flex flex-col gap-2 p-2",
    children: [l(fi.Skeleton, {
      title: t.date.groups.today,
      numItems: 1
    }), l(Ms, {}), l(fi.Skeleton, {
      title: t.date.groups.yesterday,
      numItems: 3
    }), l(Ms, {}), l(fi.Skeleton, {
      title: t.date.groups.lastMonth,
      numItems: 5
    })]
  });
}, k_ = se("ActivityItemList", Ne(qC, KC)), JC = {
  birthday: "🎂",
  anniversary: "🎉",
  "first-day": "💼"
}, YC = {
  viridian: "bg-[hsl(theme(colors.viridian.50)_/_0.2)]",
  malibu: "bg-[hsl(theme(colors.malibu.50)_/_0.2)]",
  yellow: "bg-[hsl(theme(colors.yellow.50)_/_0.2)]",
  purple: "bg-[hsl(theme(colors.purple.50)_/_0.2)]",
  lilac: "bg-[hsl(theme(colors.lilac.50)_/_0.2)]",
  barbie: "bg-[hsl(theme(colors.barbie.50)_/_0.2)]",
  smoke: "bg-[hsl(theme(colors.smoke.50)_/_0.2)]",
  army: "bg-[hsl(theme(colors.army.50)_/_0.2)]",
  flubber: "bg-[hsl(theme(colors.flubber.50)_/_0.2)]",
  indigo: "bg-[hsl(theme(colors.indigo.50)_/_0.2)]",
  camel: "bg-[hsl(theme(colors.camel.50)_/_0.2)]"
};
function QC({ firstName: t, lastName: e, src: n, canReact: r, lastEmojiReaction: i, onReactionSelect: o, pickerRef: s }) {
  return g("div", {
    className: C("relative h-32 w-full overflow-hidden rounded-md bg-f1-background", n ? "" : YC[Xg([t, e].join(""))]),
    children: [n && l("div", {
      className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",
      style: {
        backgroundImage: `url("${n}")`
      }
    }), l("div", {
      className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-md backdrop-blur",
      children: g("div", {
        className: "relative h-fit w-fit",
        children: [l("div", {
          style: r ? {
            clipPath: "path('M69.6933 48.707C71.1842 44.7556 72 40.4731 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72C40.4731 72 44.7556 71.1842 48.707 69.6933C48.6283 69.4953 48.5557 69.2942 48.4894 69.0902C48 67.5838 48 65.7226 48 62C48 58.2774 48 56.4162 48.4894 54.9098C49.4786 51.8655 51.8655 49.4786 54.9098 48.4894C56.4162 48 58.2774 48 62 48C65.7226 48 67.5838 48 69.0902 48.4894C69.2942 48.5557 69.4953 48.6283 69.6933 48.707')"
          } : {},
          children: l(Nt, {
            src: n,
            firstName: t,
            lastName: e,
            size: "2xl"
          })
        }), r && l("div", {
          ref: s,
          className: C("absolute -right-0.5", n ? "bottom-0.5" : "-bottom-[3px]"),
          children: l(Hu, {
            lastEmojiReaction: i,
            onSelect: o,
            size: "sm",
            variant: "neutral"
          })
        })]
      })
    })]
  });
}
function XC(t) {
  const e = W(null), n = W(), r = ne(() => {
    const o = e.current;
    if (!o) return;
    const s = Zg.create(o, {
      resize: !0,
      useWorker: !1
    }), a = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], c = 0.1;
    n.current = setInterval(() => {
      s({
        particleCount: 1,
        angle: 90,
        spread: 45,
        origin: {
          x: c + Math.random() * (1 - c * 2),
          y: -0.1
        },
        gravity: 0.65,
        scalar: 1,
        ticks: 80,
        startVelocity: 1,
        disableForReducedMotion: t,
        colors: [
          a[Math.floor(Math.random() * a.length)]
        ]
      });
    }, 100);
  }, [t]), i = ne(() => {
    clearInterval(n.current);
  }, []);
  return { canvasRef: e, handleMouseEnter: r, handleMouseLeave: i };
}
const ZC = ({ link: t, firstName: e, lastName: n, src: r, onClick: i, canReact: o = !0, lastEmojiReaction: s, onReactionSelect: a, type: c, typeLabel: d, date: f }) => {
  const [u, h] = F(s), m = W(null);
  V(() => {
    h(s);
  }, [s]);
  const p = (D) => {
    h(D), a?.(D);
  }, b = Yi(), { canvasRef: y, handleMouseEnter: v, handleMouseLeave: w } = XC(b), x = Dr({
    emoji: JC[c],
    size: "sm"
  });
  return g(pt, {
    href: t,
    onClick: i,
    className: C("relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary no-underline transition-shadow hover:shadow", we()),
    onMouseEnter: b ? void 0 : v,
    onMouseLeave: b ? void 0 : w,
    children: [l("canvas", {
      ref: y,
      className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
    }), l("div", {
      className: "basis-2/3 px-1 pt-1",
      children: l(QC, {
        firstName: e,
        lastName: n,
        src: r,
        canReact: o,
        lastEmojiReaction: u,
        onReactionSelect: p,
        pickerRef: m
      })
    }), g("div", {
      className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
      children: [g("div", {
        className: "flex min-w-0 flex-1 flex-col",
        children: [g("div", {
          className: "truncate font-medium text-f1-foreground",
          children: [e, " ", n]
        }), g("div", {
          className: "flex flex-row items-center gap-1.5 text-f1-foreground-secondary",
          children: [l("span", {
            className: "truncate",
            children: d
          }), l("span", {
            className: "shrink-0 leading-none",
            children: x
          })]
        })]
      }), l("div", {
        className: "shrink-0",
        children: l(ys, {
          date: f
        })
      })]
    })]
  });
}, eN = () => g("div", {
  className: "bg-f1-background-inverse-secondar flex flex-col rounded-xl border border-solid border-f1-border-secondary",
  role: "status",
  "aria-busy": "true",
  "aria-live": "polite",
  children: [l("div", {
    className: "basis-2/3 px-1 pt-1",
    children: l(M, {
      className: "h-32 w-full rounded-lg"
    })
  }), l("div", {
    className: "flex basis-1/3 flex-row justify-between gap-2 p-3",
    children: l("div", {
      className: "flex min-w-0 flex-1 flex-col",
      children: g("div", {
        className: "flex flex-col gap-2 py-1",
        children: [l(M, {
          className: "h-3 w-2/3"
        }), l(M, {
          className: "h-3 w-1/3"
        })]
      })
    })
  })]
}), C_ = Ne(ZC, eN), N_ = ({ title: t, subtitle: e, buttonLabel: n, onClick: r }) => g("div", {
  className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4",
  children: [g("div", {
    className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center",
    children: [l(hu, {
      module: "kudos",
      size: "lg"
    }), g("div", {
      className: "flex flex-col",
      children: [l("span", {
        className: "font-medium text-f1-foreground",
        children: t
      }), l("span", {
        className: "text-f1-foreground-secondary",
        children: e
      })]
    })]
  }), l("div", {
    className: "w-full sm:w-fit [&>div]:w-full",
    children: l(B, {
      label: n,
      variant: "outline",
      onClick: r
    })
  })]
});
function tN({ emoji: t, initialCount: e, hasReacted: n = !1, users: r, onInteraction: i }) {
  const [o, s] = F(n), [a, c] = F(e), d = W(null), { fireEmojiConfetti: f } = eb(), u = (p, b) => {
    p.stopPropagation(), c(a + (o ? -1 : 1)), s(!o), i?.(b), o || f(b, d);
  }, h = r?.map((p) => p.name).join(", ") || "", m = l(fl, {
    ref: d,
    variant: "outline",
    size: "md",
    compact: !0,
    onClick: (p) => {
      u(p, t);
    },
    className: C("flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100", o && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"),
    "aria-label": tb(t),
    prepend: l(Dr, {
      emoji: t,
      size: "md"
    }),
    children: l(mu, {
      value: a,
      spinTiming: {
        duration: 200,
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      },
      className: C("tabular-nums", o ? "text-f1-foreground-selected" : "text-f1-foreground")
    })
  });
  return h ? l(dt, {
    label: h,
    children: m
  }) : m;
}
function nN({ items: t, onInteraction: e, locale: n, action: r }) {
  return g("div", {
    className: "flex flex-wrap gap-2",
    children: [r && l(B, {
      label: r.label,
      icon: r.icon,
      onClick: r.onClick,
      variant: "outline",
      hideLabel: !0
    }), l(Hu, {
      onSelect: e,
      locale: n
    }), t.map((i) => l(tN, {
      emoji: i.emoji,
      initialCount: i.initialCount,
      hasReacted: i.hasReacted,
      users: i.users,
      onInteraction: e
    }, i.emoji))]
  });
}
const rN = se("Reactions", nN), Oc = (t) => {
  t.stopPropagation();
}, iN = ({ content: t, collapsed: e }) => {
  const n = "FactorialOneTextEditor";
  return document.querySelectorAll(`.${n} a`).forEach((r) => {
    r.removeEventListener("click", Oc), r.addEventListener("click", Oc);
  }), l("div", {
    dangerouslySetInnerHTML: {
      __html: Qd.sanitize(t)
    },
    className: C(n, e && "line-clamp-5")
  });
}, oN = () => g("div", {
  className: "flex flex-col justify-around gap-3 py-2",
  children: [l(M, {
    className: "h-2.5 w-1/2 rounded-2xs"
  }), l(M, {
    className: "h-2.5 w-2/3 rounded-2xs"
  })]
}), gh = Ne(iN, oN), Rc = ({ tags: t, right: e }) => l("div", {
  className: C("flex flex-1 flex-row items-center gap-1.5", e && "justify-end"),
  children: t.map((n) => {
    const r = l("div", {
      children: l(Jt, {
        icon: n.icon,
        text: n.label ?? (n.description || ""),
        onlyIcon: !0,
        additionalAccessibleText: `${n.label}: ${n.description}`
      })
    });
    return n.label || n.description ? l(dt, {
      label: n.label,
      description: n.description,
      children: r
    }, n.label ?? n.description) : r;
  })
}), Ps = q(function({ label: e, title: n, subtitle: r, description: i, color: o, isPending: s, leftTags: a, rightTags: c, fromDate: d, toDate: f, noBackground: u }, h) {
  return g("div", {
    ref: h,
    className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
    children: [!u && g(Z, {
      children: [l("div", {
        className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
        style: {
          background: `${o}`
        }
      }), l("div", {
        className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
        style: {
          background: `linear-gradient(to right, ${o}, transparent)`
        }
      })]
    }), l("div", {
      className: "min-h-10 min-w-1 rounded-2xs",
      style: s ? {
        backgroundImage: `repeating-linear-gradient(
              135deg,
              ${o} 0px,
              ${o} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
      } : {
        backgroundColor: o
      }
    }), g("div", {
      className: "z-10 flex flex-1 flex-col gap-2",
      children: [g("div", {
        className: "flex flex-row items-start gap-2.5",
        children: [g("div", {
          className: "flex flex-1 flex-col gap-0.5",
          children: [!!e && l("p", {
            className: "line-clamp-1 text-sm text-f1-foreground-secondary",
            children: e
          }), g("p", {
            className: "line-clamp-3 font-medium text-f1-foreground",
            children: [n, !!r && l("span", {
              className: "pl-1 font-normal text-f1-foreground-secondary",
              children: `· ${r}`
            })]
          }), l("p", {
            className: "text-f1-foreground-secondary",
            children: i
          })]
        }), g("div", {
          className: "flex flex-row items-center",
          children: [d && g(Z, {
            children: [l(ys, {
              date: d
            }), l(G, {
              icon: Tr,
              size: "sm",
              className: "text-f1-foreground-tertiary"
            })]
          }), f && l(ys, {
            date: f
          })]
        })]
      }), (a || c) && g("div", {
        className: "flex flex-row items-center justify-between",
        children: [a && l(Rc, {
          tags: a
        }), c && l(Rc, {
          tags: c,
          right: !0
        })]
      })]
    })]
  });
}), sN = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), bh = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const n = (t?.split(".")).at(-1);
  return !!n && sN.has(n);
}, lN = ({ title: t, mediaUrl: e, place: n, date: r }) => {
  let i = V0(r);
  const o = (s) => {
    s.stopPropagation();
  };
  return n && (i = `${i} · ${n}`), g("div", {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow",
    children: [e && l("div", {
      className: "relative aspect-video w-full overflow-hidden rounded-md",
      children: bh(e) ? l("video", {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: o,
        children: l("source", {
          src: e
        })
      }) : g(Z, {
        children: [l("img", {
          src: e,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }), l(M, {
          className: "absolute inset-0 h-full w-full"
        })]
      })
    }), l(Ps, {
      title: t,
      description: i,
      color: W0.special.highlight,
      isPending: !1,
      toDate: r,
      noBackground: !0
    })]
  });
}, aN = () => g("div", {
  className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1",
  role: "status",
  "aria-busy": "true",
  "aria-live": "polite",
  children: [l("div", {
    children: l(M, {
      className: "aspect-video h-full w-full rounded-lg"
    })
  }), g("div", {
    className: "flex h-full flex-row gap-3 p-2",
    children: [l(M, {
      className: "w-1 shrink-0 self-stretch rounded-full"
    }), g("div", {
      className: "flex grow flex-col gap-1.5 py-1",
      children: [l(M, {
        className: "mt-px h-3 w-1/2"
      }), l(M, {
        className: "mb-px h-3 w-1/4"
      })]
    })]
  })]
}), vh = Ne(lN, aN), cN = ({ id: t, author: e, group: n, createdAt: r, title: i, description: o, onClick: s, mediaUrl: a, event: c, counters: d, reactions: f, inLabel: u, comment: h, dropdownItems: m, noReactionsButton: p = !1 }) => {
  const b = [d.views, d.comments].filter(Boolean).join(" · "), y = Bu(r), v = () => {
    s(t);
  }, w = (D) => {
    D.stopPropagation();
  }, x = e ? `${e.firstName} ${e.lastName}` : void 0;
  return g("div", {
    className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
    onClick: v,
    children: [l("div", {
      className: "hidden md:block",
      children: e ? l(An, {
        href: e.url || "#",
        title: x,
        stopPropagation: !0,
        children: l(Nt, {
          firstName: e.firstName,
          lastName: e.lastName,
          src: e.avatarUrl
        })
      }) : l(ms, {
        icon: Ca
      })
    }), g("div", {
      className: "flex flex-1 flex-col gap-3",
      children: [g("div", {
        className: "flex flex-col gap-2",
        children: [g("div", {
          className: "flex flex-row justify-between",
          children: [g("div", {
            className: "flex flex-1 flex-row flex-wrap items-center gap-1",
            children: [e ? g(Z, {
              children: [l(An, {
                href: e.url,
                className: "block md:hidden",
                title: x,
                stopPropagation: !0,
                children: l("span", {
                  className: "flex items-center",
                  children: l(Nt, {
                    firstName: e.firstName,
                    lastName: e.lastName,
                    src: e.avatarUrl,
                    size: "xs"
                  })
                })
              }), l(An, {
                href: e.url,
                title: x,
                className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                stopPropagation: !0,
                children: x
              })]
            }) : l("div", {
              className: "block md:hidden",
              children: l(ms, {
                icon: Ca,
                size: "sm"
              })
            }), l("span", {
              className: C("text-f1-foreground-secondary", !e && "capitalize"),
              children: u
            }), l(An, {
              onClick: n.onClick,
              title: n.title,
              className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
              stopPropagation: !0,
              href: "#",
              children: n.title
            }), l("span", {
              className: "hidden text-f1-foreground-secondary md:inline",
              children: "·"
            }), l("span", {
              className: "text-f1-foreground-secondary",
              children: y
            })]
          }), g("div", {
            className: "flex flex-row gap-2",
            children: [l("div", {
              className: "hidden flex-row gap-2 md:flex",
              children: m?.length && l(Me, {
                items: m,
                icon: Si,
                size: "sm"
              })
            }), l("div", {
              className: "md:hidden",
              children: l(Me, {
                items: [{
                  label: h.label,
                  onClick: h.onClick
                }, ...m ?? []],
                icon: Si,
                size: "sm"
              })
            })]
          })]
        }), g("div", {
          className: "flex flex-col gap-1 text-f1-foreground",
          children: [l("p", {
            className: "text-xl font-semibold",
            children: i
          }), o && l(gh, {
            content: o,
            collapsed: !0
          })]
        })]
      }), a && !c && l("div", {
        className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]",
        children: bh(a) ? l("video", {
          controls: !0,
          className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
          onClick: w,
          children: l("source", {
            src: a
          })
        }) : g(Z, {
          children: [l("img", {
            src: a,
            role: "presentation",
            loading: "lazy",
            className: "aspect-video h-full w-full object-cover"
          }), l(M, {
            className: "absolute inset-0 -z-10 h-full w-full"
          })]
        })
      }), c && l("div", {
        className: "w-full md:max-w-[480px]",
        children: l(vh, {
          ...c
        })
      }), l("p", {
        className: "text-f1-foreground-secondary",
        children: b
      }), !p && l(rN, {
        items: f?.items ?? [],
        onInteraction: f?.onInteraction,
        action: {
          label: h.label,
          onClick: h.onClick,
          icon: nb
        }
      })]
    })]
  });
}, dN = ({ withEvent: t, withImage: e }) => g("div", {
  className: "flex w-full cursor-wait flex-row gap-3 rounded-xl p-3 pt-2 md:pb-4 md:pt-3",
  children: [l("div", {
    className: "hidden md:block",
    children: l(M, {
      className: "aspect-square w-8 rounded-full"
    })
  }), g("div", {
    className: "w-full",
    children: [g("div", {
      className: "flex h-6 flex-row items-center gap-2",
      children: [l("div", {
        className: "md:hidden",
        children: l(M, {
          className: "aspect-square w-4 rounded-full"
        })
      }), l(M, {
        className: "h-2.5 w-14 rounded-2xs"
      }), l(M, {
        className: "h-2.5 w-18 rounded-2xs"
      })]
    }), l(M, {
      className: "mt-3.5 h-3.5 w-1/5 rounded-2xs"
    }), l("div", {
      className: "mt-3",
      children: l(gh.Skeleton, {})
    }), e && !t && l("div", {
      className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3",
      children: l(M, {
        className: "h-full w-full rounded-2xs"
      })
    }), t && l("div", {
      className: "mt-3 w-full md:w-2/3",
      children: l(vh.Skeleton, {})
    }), g("div", {
      className: "mt-3 flex flex-row items-center gap-1 py-1",
      children: [l(M, {
        className: "h-2.5 w-14 rounded-2xs"
      }), l(M, {
        className: "h-2.5 w-14 rounded-2xs"
      })]
    })]
  })]
}), S_ = Ne(cN, dN), uN = ({ description: t }) => {
  const [e, n] = F(!1), [r, i] = F(!1), o = X(), s = W(null), a = W(null), c = ps({
    ref: s
  }), d = ps({
    ref: a
  });
  return V(() => {
    d.height && c.height && i(d.height > c.height);
  }, [d.height, c.height]), g("div", {
    className: "flex max-w-[640px] flex-col gap-1",
    children: [g(U.div, {
      initial: !1,
      animate: {
        height: e ? d.height ?? c.height : c.height ?? "3rem"
      },
      transition: {
        duration: r ? 0.15 : 0,
        ease: [0.165, 0.84, 0.44, 1]
      },
      className: C(e ? "overflow-y-scroll" : "overflow-clip", "relative max-h-80"),
      children: [l("div", {
        ref: a,
        className: "pointer-events-none invisible absolute left-0 top-0 -z-10 text-lg text-f1-foreground-secondary",
        "aria-hidden": "true",
        children: t
      }), l("div", {
        ref: s,
        className: C("text-lg text-f1-foreground-secondary", !e && "line-clamp-2"),
        children: t
      })]
    }), (r || e) && l("button", {
      onClick: () => n((f) => !f),
      className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
      children: e ? o.actions.showLess : o.actions.showAll
    })]
  });
}, fN = {
  warning: {
    icon: nu,
    iconColor: "warning",
    textColor: "text-f1-foreground-warning"
  },
  critical: {
    icon: Ud,
    iconColor: "critical",
    textColor: "text-f1-foreground-critical"
  }
};
function Jo({ item: t, collapse: e = !1 }) {
  const { value: n } = t;
  switch (n.type) {
    case "text":
      return l("span", {
        children: n.content
      });
    case "avatar":
      return g("div", {
        className: "flex items-center gap-1",
        children: [l(Or, {
          avatar: n.variant,
          size: "xs"
        }), n.text && l("span", {
          children: n.text
        })]
      });
    case "status":
      return l(an, {
        text: n.label,
        variant: n.variant
      });
    case "list":
      return l(Tl, {
        type: n.variant,
        avatars: n.avatars,
        size: "xs",
        max: 3
      });
    case "data-list":
      return e ? g("div", {
        className: "flex items-center justify-center gap-1 font-medium",
        children: [n.data[0], n.data.length > 1 && g("span", {
          className: "tabular-nums text-f1-foreground-secondary",
          children: ["+", n.data.length - 1]
        })]
      }) : l("div", {
        className: "flex flex-col gap-1.5",
        children: n.data.map((r) => l("span", {
          children: r
        }, r))
      });
    case "tag-list":
      return e ? g("div", {
        className: "flex flex-wrap items-center justify-center gap-1 font-medium",
        children: [l(Jt, {
          text: n.tags[0]
        }), n.tags.length > 1 && g("span", {
          className: "tabular-nums text-f1-foreground-secondary",
          children: ["+", n.tags.length - 1]
        })]
      }) : l("div", {
        className: C("flex flex-col gap-1 [&>div]:w-fit", n.tags.length > 1 && "-mt-[3px]"),
        children: n.tags.map((r) => l(Jt, {
          text: r
        }, r))
      });
    case "dot-tag":
      return l(no, {
        text: n.label,
        color: n.color
      });
    case "date": {
      if (n.icon === void 0)
        return l("span", {
          children: n.formattedDate
        });
      const { icon: r, iconColor: i, textColor: o } = fN[n.icon];
      return g("div", {
        className: "flex items-center justify-center gap-0.5 font-medium",
        children: [l(G, {
          icon: r,
          color: i
        }), l("span", {
          className: o,
          children: n.formattedDate
        })]
      });
    }
  }
}
const hN = (t) => t?.type !== "copy", mN = (t) => t?.type === "copy";
function pN({ item: t }) {
  const [e, n] = F(!1), r = t.value.type === "data-list" && t.value.data.length > 1 || t.value.type === "tag-list" && t.value.tags.length > 1, i = !!t.actions?.length, o = i || r, s = (a, c) => {
    if (c)
      return c;
    let d;
    switch (a.type) {
      case "text":
        return a.content;
      case "avatar":
        return a.text;
      case "status":
      case "dot-tag":
        return a.label;
      case "date":
        return a.formattedDate;
      case "tag-list":
        return a.tags.join(", ");
      case "data-list":
        return a.data.join(", ");
      case "list":
        return "";
      default:
        return d = a, d;
    }
  };
  return g("div", {
    className: "flex h-8 items-center gap-2",
    children: [g("div", {
      className: C("flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit", t.hideLabel && "md:hidden"),
      children: [t.label, t.info && l("div", {
        className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help",
        children: l(dt, {
          label: t.info.title,
          description: t.info.description,
          children: l(G, {
            icon: Qi,
            size: "sm"
          })
        })
      })]
    }), g("div", {
      role: "button",
      tabIndex: o ? 0 : -1,
      onMouseEnter: () => o && n(!0),
      onMouseLeave: () => o && n(!1),
      onFocus: () => o && n(!0),
      onBlur: () => o && n(!1),
      className: "relative flex h-5 w-fit items-center hover:cursor-default",
      "aria-label": `${t.label} actions`,
      children: [l("div", {
        className: C("hidden font-medium text-f1-foreground md:block", !i && "block"),
        children: l(Jo, {
          item: t,
          collapse: !0
        })
      }), i && l("div", {
        className: "w-full md:hidden",
        children: l(El, {
          items: t.actions?.filter(hN).map((a) => ({
            label: a.label,
            icon: a.icon,
            onClick: a.onClick
          })) ?? [],
          children: l(Jo, {
            item: t,
            collapse: !0
          })
        })
      }), l(Ae, {
        children: e && o && g(U.div, {
          className: C("absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex", !r && "h-8 items-start", i ? "pr-1" : "pr-1.5"),
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: 0.1
          },
          children: [l("div", {
            className: C("flex h-6 items-center font-medium text-f1-foreground", r && "h-auto items-start pt-0.5"),
            children: l(Jo, {
              item: t
            })
          }), i && l(U.div, {
            className: "flex gap-1",
            initial: {
              x: -16
            },
            animate: {
              x: 0
            },
            exit: {
              x: -16
            },
            transition: {
              duration: 0.1
            },
            children: t.actions?.map((a, c) => mN(a) ? l(rb, {
              valueToCopy: s(t.value, a.copyValue)
            }, `copy-${c}`) : l(dt, {
              label: a.label,
              children: l(B, {
                size: "sm",
                variant: "neutral",
                label: a.label,
                hideLabel: !0,
                icon: a.icon,
                onClick: a.onClick
              }, `action-${c}`)
            }, `tooltip-${c}`))
          })]
        })
      })]
    })]
  });
}
const gN = Zi(function({ items: e }) {
  const n = e.filter((r) => typeof r == "object");
  return l("div", {
    className: "flex flex-col items-start gap-x-3 gap-y-0 md:flex-row md:flex-wrap md:items-center",
    children: n.map((r, i) => g(Z, {
      children: [l(pN, {
        item: r
      }, `item-${i}`), i < n.length - 1 && l("div", {
        className: "hidden h-4 w-[1px] bg-f1-border md:block"
      }, `separator-${i}`)]
    }))
  });
}), Fc = se("Metadata", gN), Yo = (t) => t.isVisible !== !1;
function bN({ title: t, avatar: e, deactivated: n, description: r, primaryAction: i, secondaryActions: o = [], otherActions: s = [], status: a, metadata: c = [] }) {
  const d = [a && {
    label: a.label,
    value: {
      type: "status",
      label: a.text,
      variant: a.variant
    },
    actions: a.actions,
    hideLabel: !0
  }, ...c], f = o.filter(Yo), u = s.filter(Yo), h = i && Yo(i), m = f.length > 0, p = u.length > 0, b = (v) => !!v && "items" in v, y = (v) => !!v && "label" in v && !("items" in v);
  return g("div", {
    className: "resource-header flex flex-col gap-3 px-6 pb-5 pt-3",
    children: [g("div", {
      className: C("flex flex-col items-start justify-start gap-4 md:flex-row", !r && "md:items-center"),
      children: [g("div", {
        className: C("flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start", !r && "md:items-center"),
        children: [e && l("div", {
          className: "flex items-start",
          children: l(Or, {
            avatar: {
              ...e.type === "generic" ? {
                ...e,
                type: "company"
              } : e
            },
            size: "xl"
          })
        }), g("div", {
          className: "flex flex-col gap-1",
          children: [l("span", {
            className: C("text-2xl font-semibold", n ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
            children: t
          }), r && l(uN, {
            description: r
          })]
        })]
      }), d.length > 0 && l("div", {
        className: "flex flex-wrap items-center gap-x-3 gap-y-1 md:hidden",
        children: l(Fc, {
          items: d
        })
      }), g("div", {
        className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden",
        children: [h && y(i) && l("div", {
          className: "w-full md:hidden [&>*]:w-full",
          children: l(B, {
            label: i.label,
            onClick: i.onClick,
            variant: "default",
            icon: i.icon,
            size: "lg",
            disabled: i.disabled,
            tooltip: i.tooltip
          })
        }), h && b(i) && l("div", {
          className: "w-full md:hidden [&>*]:w-full",
          children: l(Fn, {
            items: i.items,
            onClick: i.onClick,
            variant: "default",
            value: i.value,
            size: "lg",
            disabled: i.disabled,
            tooltip: i.tooltip
          })
        }), f.map((v) => l(ln, {
          children: l("div", {
            className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full",
            children: l(B, {
              label: v.label,
              onClick: v.onClick,
              variant: v.variant ?? "outline",
              icon: v.icon,
              size: "lg",
              hideLabel: v.hideLabel,
              disabled: v.disabled,
              tooltip: v.tooltip
            })
          })
        }, v.label)), u.length > 0 && l("div", {
          className: "w-full [&>*]:w-full [&_button]:w-full",
          children: l(El, {
            items: u
          })
        })]
      }), g("div", {
        className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto",
        children: [u.length > 0 && l("div", {
          children: l(Me, {
            items: u
          })
        }), f.map((v) => l(ln, {
          children: l("div", {
            className: "hidden md:block",
            children: l(B, {
              label: v.label,
              onClick: v.onClick,
              variant: v.variant ?? "outline",
              icon: v.icon,
              hideLabel: v.hideLabel,
              disabled: v.disabled,
              tooltip: v.tooltip
            })
          })
        }, v.label)), h && (m || p) && l("div", {
          className: "mx-1 h-4 w-px bg-f1-background-secondary-hover"
        }), h && y(i) && l("div", {
          className: "hidden md:block",
          children: l(B, {
            label: i.label,
            onClick: i.onClick,
            variant: "default",
            icon: i.icon,
            disabled: i.disabled,
            tooltip: i.tooltip
          })
        }), h && b(i) && l("div", {
          className: "hidden md:block",
          children: l(Fn, {
            items: i.items,
            onClick: i.onClick,
            variant: "default",
            value: i.value,
            size: "md",
            disabled: i.disabled,
            tooltip: i.tooltip
          })
        })]
      })]
    }), d.length > 0 && l("div", {
      className: "hidden flex-wrap items-center gap-x-3 gap-y-1 md:block",
      children: l(Fc, {
        items: d
      })
    })]
  });
}
const vN = ({ avatar: t, title: e, description: n, primaryAction: r, secondaryActions: i, otherActions: o, status: s, metadata: a, deactivated: c }) => l(bN, {
  avatar: t,
  title: e,
  description: n,
  primaryAction: r,
  secondaryActions: i,
  otherActions: o,
  status: s,
  metadata: a,
  deactivated: c
}), I_ = se("ResourceHeader", vN), yN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], xN = q(function({ daysOfTheWeek: e = yN, activatedDays: n = [] }, r) {
  const i = n.map((o) => `${o}-${e[o]}`);
  return l(hh, {
    type: "multiple",
    value: i,
    disabled: !0,
    className: "flex justify-start",
    ref: r,
    children: e.map((o, s) => l(mh, {
      "aria-label": o,
      value: `${s}-${o}`,
      className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
      children: o[0]
    }, s))
  });
}), wN = 750, kN = ({ text: t, children: e }) => {
  const [n, r] = F(!1);
  V(() => {
    if (n) {
      const o = setTimeout(() => r(!1), wN);
      return () => clearTimeout(o);
    }
  }, [n]);
  const i = async () => {
    try {
      await navigator.clipboard.writeText(t), r(!0);
    } catch {
    }
  };
  return g("button", {
    type: "button",
    "aria-label": n ? "Copied!" : `Copy ${t}`,
    className: C("group flex items-center gap-1.5 rounded p-1.5", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold", "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover", n ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0),
    onClick: i,
    children: [e, l("div", {
      className: "relative h-5 w-5",
      children: g(Ae, {
        mode: "wait",
        children: [!n && l(U.div, {
          initial: {
            opacity: 0,
            scale: 0.8
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.8
          },
          transition: {
            duration: 0.1
          },
          className: "absolute inset-0",
          children: l(G, {
            icon: pl,
            size: "md",
            "aria-hidden": !0,
            color: "default",
            className: C("opacity-0 transition-opacity duration-300", !n && "group-hover:opacity-100 group-focus-visible:opacity-100")
          })
        }, "copy-icon"), n && l(U.div, {
          initial: {
            opacity: 0,
            scale: 0.8
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.8
          },
          transition: {
            duration: 0.1
          },
          className: "absolute inset-0",
          children: l(G, {
            icon: ml,
            size: "md",
            "aria-hidden": !0,
            color: "positive",
            className: C("text-f1-icon-positive opacity-0 transition-opacity duration-300", n && "group-hover:opacity-100 group-focus-visible:opacity-100")
          })
        }, "check-icon")]
      })
    })]
  });
}, yh = Zi(({ children: t, className: e, ...n }) => g(pt, {
  ...n,
  className: C("text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground", "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover", e),
  children: [t, l("div", {
    className: "grid",
    children: l(G, {
      "aria-hidden": !0,
      icon: Tr,
      size: "md"
    })
  })]
}));
yh.displayName = "NavigateAction";
const xh = Zi(({ children: t, className: e, href: n, ...r }) => g(pt, {
  ...r,
  target: "_blank",
  href: n,
  rel: "noopener noreferrer",
  className: C("text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground", "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover", e),
  children: [t, l("div", {
    className: "grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100",
    children: l(G, {
      "aria-hidden": !0,
      icon: ib,
      size: "md",
      color: "default"
    })
  })]
}));
xh.displayName = "OpenLinkAction";
const Mr = q((t, e) => {
  const { text: n, leftIcon: r, className: i, action: o = {
    type: "noop"
  } } = t;
  return l("li", {
    className: "flex rounded font-medium text-f1-foreground *:flex-1",
    ref: e,
    children: g(CN, {
      action: o,
      className: C("flex items-center gap-1.5 p-1.5", i),
      children: [r && (typeof r == "function" ? r({}) : l(G, {
        icon: r,
        size: "md",
        "aria-hidden": "true"
      })), l("div", {
        className: "line-clamp-5 flex-1 whitespace-pre-line text-left",
        children: n
      })]
    })
  });
});
Mr.displayName = "ItemContainer";
const CN = ({ children: t, action: e, ...n }) => {
  const r = e.type;
  switch (r) {
    case "copy":
      return l(kN, {
        ...e,
        ...n,
        children: t
      });
    case "navigate":
      return l(yh, {
        ...e,
        ...n,
        children: t
      });
    case "open-link":
      return l(xh, {
        ...e,
        ...n,
        children: t
      });
    case "noop":
      return l("div", {
        ...n,
        children: t
      });
    default:
      return r;
  }
}, wh = q(({ children: t, label: e, isHorizontal: n = !1 }, r) => g("div", {
  className: C(n ? "flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row" : "min-w-32 md:max-w-80"),
  children: [e && l("p", {
    className: C("px-1.5 text-f1-foreground-secondary", n ? "mt-1.5 w-44 xs:px-0" : "mb-0.5"),
    children: e
  }), l("ul", {
    className: "flex flex-col justify-center gap-0.5",
    ref: r,
    children: t
  })]
}));
wh.displayName = "DataList";
const kh = q(({ text: t, icon: e, action: n }, r) => l(Mr, {
  ref: r,
  text: t,
  leftIcon: e,
  action: mo(n, t)
}));
kh.displayName = "DataList.Item";
const NN = se("DataList.Item", kh), Ch = q(({ action: t, avatarUrl: e, firstName: n, lastName: r }, i) => {
  const o = `${n} ${r}`;
  return l(Mr, {
    ref: i,
    leftIcon: () => l(Nt, {
      size: "xs",
      src: e,
      firstName: n,
      lastName: r
    }),
    text: o,
    action: mo(t, o)
  });
});
Ch.displayName = "PersonItem";
const SN = se("PersonItem", Ch), Nh = q(({ avatarUrl: t, name: e, action: n }, r) => l(Mr, {
  ref: r,
  leftIcon: () => l(pu, {
    name: e,
    size: "xs",
    src: t
  }),
  text: e,
  action: mo(n, e)
}));
Nh.displayName = "CompanyItem";
const IN = se("CompanyItem", Nh), Sh = q(({ action: t, name: e }, n) => l(Mr, {
  ref: n,
  leftIcon: () => l(ob, {
    name: e,
    size: "xs"
  }),
  text: e,
  action: mo(t, e)
}));
Sh.displayName = "TeamItem";
const AN = se("TeamItem", Sh), Ih = q(({ ...t }, e) => l("li", {
  ref: e,
  className: "flex items-start pt-1",
  children: l(no, {
    ...t
  })
}));
Ih.displayName = "DotTagItem";
const TN = se("DotTagItem", Ih), mo = (t, e) => t && t.type === "copy" ? {
  type: "copy",
  text: t.text ?? e
} : t, EN = se("DataList", wh), In = Object.assign(EN, {
  Item: NN,
  CompanyItem: IN,
  PersonItem: SN,
  TeamItem: AN,
  DotTagItem: TN
}), DN = ({ content: t }) => g(Z, {
  children: [t.type === "weekdays" && l("li", {
    className: "list-none px-1.5 py-1",
    children: l(xN, {
      ...t
    })
  }), t.type === "person" && l(In.PersonItem, {
    ...t
  }), t.type === "item" && l(In.Item, {
    ...t
  }), t.type === "team" && l(In.TeamItem, {
    ...t
  }), t.type === "company" && l(In.CompanyItem, {
    ...t
  }), t.type === "dot-tag" && l(In.DotTagItem, {
    ...t
  })]
}), _N = q(function({ title: e, content: n, isHorizontal: r = !1, spacingAtTheBottom: i }, o) {
  const s = Array.isArray(n) ? n : [n];
  return l("div", {
    ref: o,
    className: C("flex flex-col gap-0.5", i && !r && "pb-3", r && "xs:[&_ul>li]:p-0 [&_ul]:flex-1"),
    children: l(In, {
      label: e,
      isHorizontal: r,
      children: s.map((a, c) => l(DN, {
        content: a
      }, c))
    })
  });
}), LN = se("DetailsItem", _N), ON = q(function({ title: e, tableView: n = !1, details: r }, i) {
  return g("div", {
    ref: i,
    className: "flex flex-col gap-4",
    children: [!!e && l("p", {
      className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary",
      children: e.toLocaleUpperCase()
    }), l("div", {
      className: C("flex flex-col", n ? "max-w-[580px] rounded-md border border-solid border-f1-border-secondary" : "gap-3"),
      children: r?.map((o, s) => g(Q.Fragment, {
        children: [l(LN, {
          title: o.title,
          content: o.content,
          spacingAtTheBottom: o.spacingAtTheBottom,
          isHorizontal: n
        }, o.title), n && s !== r.length - 1 && l("div", {
          className: "h-[1px] w-full bg-f1-border-secondary"
        })]
      }, o.title))
    })]
  });
}), A_ = se("DetailsItemsList", ON), Ah = Q.forwardRef(({ person: t, onClick: e, ...n }, r) => {
  const i = () => {
    e();
  };
  return g("div", {
    ref: r,
    className: C("flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", n.withPointerCursor && "cursor-pointer"),
    onClick: i,
    children: [l(Nt, {
      firstName: t.firstName,
      lastName: t.lastName,
      src: t.avatarUrl,
      badge: t.avatarBadge
    }), g("div", {
      className: "flex flex-1 flex-col",
      children: [g("div", {
        className: "flex flex-1 flex-row items-center gap-1",
        children: [l("span", {
          className: "truncate font-medium",
          children: `${t.firstName} ${t.lastName}`
        }), n.info && l(dt, {
          label: n.info,
          children: l(G, {
            icon: tu,
            size: "sm",
            className: "text-f1-icon-secondary"
          })
        })]
      }), "bottomTags" in n && l("div", {
        className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1",
        children: n.bottomTags.map((o, s) => g(Z, {
          children: [l(Jt, {
            ...o
          }, o.text), s < n.bottomTags.length - 1 && l("span", {
            children: "·"
          })]
        }))
      }), "description" in n && n.description && l("p", {
        className: "truncate text-f1-foreground-secondary",
        children: n.description
      })]
    }), g("div", {
      className: "flex flex-row items-center justify-between gap-2",
      children: ["rightTag" in n && n.rightTag && l(no, {
        ...n.rightTag
      }), "actions" in n && g("div", {
        className: "flex flex-1 flex-row items-center justify-end gap-2",
        children: [n.actions?.primary && l(B, {
          variant: "outline",
          onClick: n.actions.primary.onClick,
          label: n.actions.primary.label,
          icon: n.actions.primary.icon
        }), n.actions?.secondary && l(B, {
          variant: "outline",
          onClick: n.actions.secondary.onClick,
          label: "Secondary",
          icon: n.actions.secondary.icon,
          hideLabel: !0
        })]
      })]
    })]
  });
}), RN = () => g("div", {
  className: "flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
  children: [l(M, {
    className: "aspect-square w-8 rounded-full"
  }), g("div", {
    className: "flex flex-1 flex-col gap-0.5",
    children: [l(M, {
      className: "h-4"
    }), l(M, {
      className: "h-4"
    })]
  })]
});
Ah.displayName = "OnePersonListItem";
const T_ = se("OnePersonListItem", Ne(Ah, RN));
function FN({ children: t, sidebar: e, banner: n, ai: r, aiPromotion: i }) {
  const o = r?.enabled ? sb : i?.enabled ? Gk : ln, s = r?.enabled ? r : i?.enabled ? i : void 0;
  return l(Ny, {
    children: l(o, {
      ...s,
      children: l($N, {
        ai: r,
        aiPromotion: i,
        sidebar: e,
        banner: n,
        children: t
      })
    })
  });
}
const E_ = se("ApplicationFrame", FN), MN = ({ contentId: t }) => {
  const e = X();
  return l("a", {
    href: `#${t}`,
    className: we("absolute z-50 -translate-y-[1000px] translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"),
    children: e.actions.skipToContent
  });
};
function PN(t, e, n) {
  return !e && t ? n === "hidden" : e && !t ? n !== "hidden" : !1;
}
function zN(t, e) {
  const { sidebarState: n, toggleSidebar: r } = Gn(), i = W(t);
  V(() => {
    e && PN(t, i.current, n) && r({
      isInvokedByUser: !1
    }), i.current = t;
  }, [t, e, n, r]);
}
function $N({ ai: t, aiPromotion: e, children: n, sidebar: r, banner: i }) {
  const { sidebarState: o, toggleSidebar: s, isSmallScreen: a, setForceFloat: c } = Gn(), d = Yi(), { open: f } = lb(), { open: u } = ao(), h = $d(`(max-width: ${bs.xl}px)`, {
    initializeWithValue: !0
  });
  return V(() => {
    c(f);
  }, [f, c]), V(() => {
    c(u);
  }, [u, c]), zN(f, h), l(Z, {
    children: l(Vu, {
      reducedMotion: d ? "always" : "never",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
        duration: d ? 0 : 0.2
      },
      children: g("div", {
        className: "grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)] items-stretch",
        children: [l("div", {
          className: "col-[1/-1]",
          children: i
        }), l(wl, {
          id: "ai-chat-group",
          children: g("div", {
            className: "relative isolate flex h-full",
            children: [l(Ae, {
              children: o === "unlocked" && l(U.nav, {
                className: C("fixed inset-0 z-[5] bg-f1-background-inverse", {
                  hidden: !a
                }),
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 0.1
                },
                exit: {
                  opacity: 0
                },
                transition: {
                  duration: d ? 0 : 0.2
                },
                onClick: () => s()
              })
            }), g("div", {
              className: C({
                "transition-all": !d
              }, o === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"),
              ref: (m) => {
                o === "hidden" ? m?.setAttribute("inert", "") : m?.removeAttribute("inert");
              },
              children: [l(MN, {
                contentId: "content"
              }), r]
            }), l(U.main, {
              id: "content",
              layoutId: "main",
              className: C("relative flex max-w-full flex-1 overflow-auto xs:py-1 xs:pr-1", o === "locked" ? "pl-0" : "xs:pl-1"),
              layoutDependency: [o],
              transition: {
                duration: d ? 0 : 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30
              },
              children: l(U.div, {
                className: "flex max-w-full flex-1 overflow-auto",
                layout: "position",
                children: n
              })
            }), t && t.enabled && l(ab, {}), e && e.enabled && l(Uk, {})]
          })
        })]
      })
    })
  });
}
const jN = zt({
  base: "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
  variants: {
    period: {
      morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
      afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
      evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
    }
  },
  defaultVariants: {
    period: "morning"
  }
});
function Th({ children: t, header: e, period: n, embedded: r = !1 }) {
  const { sidebarState: i, toggleSidebar: o, isSmallScreen: s } = Gn();
  return g("div", {
    className: `relative flex w-full flex-col overflow-hidden ${r ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
    children: [l("div", {
      className: jN({
        period: n
      })
    }), e && g("div", {
      className: "flex flex-row items-center justify-between pr-6 @container",
      children: [g("div", {
        className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-6",
        children: [(s || i === "hidden") && l(B, {
          variant: "ghost",
          onClick: () => o(),
          label: "Open main menu",
          icon: qd,
          hideLabel: !0
        }), g("div", {
          className: C("flex flex-row items-center", s ? "gap-1.5" : "gap-3"),
          children: [e?.onPulseClick ? l(Gf, {
            src: e.employeeAvatar,
            firstName: e.employeeFirstName,
            lastName: e.employeeLastName,
            pulse: e.pulse,
            onPulseClick: e.onPulseClick
          }) : l(Nt, {
            src: e.employeeAvatar,
            firstName: e.employeeFirstName,
            lastName: e.employeeLastName,
            size: s ? "small" : e.description ? "large" : "medium"
          }), g("div", {
            className: "flex flex-col",
            children: [l("p", {
              className: C(s ? "text-lg" : "text-2xl", "font-semibold text-f1-foreground"),
              children: e.title
            }), e.description && l("p", {
              className: C(s ? "text-md" : "text-lg", "text-f1-foreground-secondary"),
              children: e.description
            })]
          })]
        })]
      }), g("div", {
        children: [l(Kd, {}), l(rf, {})]
      })]
    }), l("div", {
      className: C("isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1", s && "-mt-3"),
      children: t
    })]
  });
}
Th.displayName = "DaytimePage";
const D_ = se("DaytimePage", Th);
function BN(t) {
  return t.filter((e) => !!e.title).map(({ title: e, description: n, href: r, onClick: i, target: o }) => ({
    label: e,
    description: n,
    href: r,
    onClick: i ? () => i(void 0) : void 0
  }));
}
function HN({ label: t, options: e, hasNewUpdate: n }) {
  return l("div", {
    className: "fixed z-10",
    style: {
      bottom: "calc(8px + env(safe-area-inset-bottom))",
      right: "calc(8px + env(safe-area-inset-right))"
    },
    children: l(Me, {
      items: BN(e),
      children: g("button", {
        className: C("relative flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-inverse text-f1-foreground-inverse shadow-md transition-all", we()),
        "aria-label": t,
        children: [l(G, {
          icon: gu,
          size: "sm"
        }), n && l("div", {
          className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical"
        })]
      })
    })
  });
}
const __ = se("OmniButton", HN);
function Eh({ children: t, header: e, embedded: n = !1 }) {
  return g("div", {
    className: `flex min-h-full w-full flex-col overflow-hidden ${n ? "" : "xs:rounded-xl"} bg-f1-special-page ring-1 ring-inset ring-f1-border-secondary`,
    children: [e && l("div", {
      className: "flex flex-col",
      children: e
    }), l("div", {
      className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1",
      children: t
    })]
  });
}
Eh.displayName = "Page";
const L_ = se("Page", Eh);
function VN({ companies: t, selected: e, onChange: n, isLoading: r = !1, withNotification: i = !1, additionalOptions: o = [] }) {
  const s = z(() => t.find((a) => a.id === e) || t[0], [t, e]);
  return r ? g("div", {
    className: "flex w-fit items-center gap-2 p-1.5",
    children: [l(M, {
      className: "size-6"
    }), l(M, {
      className: "h-3 w-14"
    })]
  }) : t.length + (o?.length || 0) === 1 ? l("div", {
    className: "p-1.5",
    style: {
      maxWidth: "168px"
    },
    children: l(Mc, {
      company: s,
      withNotification: i
    })
  }) : l("div", {
    className: "min-w-0 flex-1",
    children: l(WN, {
      companies: t,
      selected: s,
      onChange: n,
      additionalOptions: o,
      children: l(Mc, {
        company: s,
        withNotification: i
      })
    })
  });
}
const WN = ({ companies: t, selected: e, onChange: n, children: r, additionalOptions: i = [] }) => {
  const o = X(), [s, a] = F(!1), c = z(() => [...t.map((f) => ({
    value: f.id,
    label: f.name,
    avatar: {
      type: "company",
      name: f.name,
      src: f.logo,
      "aria-label": `${f.name} logo`
    }
  })), ...i.length ? [{
    type: "separator"
  }] : [], ...i], [t, i]), d = (f) => {
    const u = i?.find((h) => h.value === f);
    if (u?.onClick) {
      u.onClick();
      return;
    }
    n(f);
  };
  return l(dr, {
    label: o.navigation.sidebar.companySelector.label,
    hideLabel: !0,
    options: c,
    value: e.id,
    onChange: d,
    placeholder: o.navigation.sidebar.companySelector.placeholder,
    open: s,
    onOpenChange: a,
    children: g("div", {
      className: C("group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover", we()),
      tabIndex: 0,
      title: e?.name,
      children: [r, l("div", {
        className: "flex w-5 shrink-0 items-center justify-center",
        children: l("div", {
          className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all",
          children: l(U.div, {
            animate: {
              rotate: s ? 180 : 0
            },
            transition: {
              duration: 0.2
            },
            className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
            children: l(G, {
              icon: Vn,
              size: "xs"
            })
          })
        })
      })]
    })
  });
}, Mc = ({ company: t, withNotification: e = !1 }) => g("div", {
  className: C("flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden rounded text-lg font-semibold text-f1-foreground transition-colors"),
  children: [l(pu, {
    name: t?.name?.[0],
    src: t?.logo,
    size: "sm",
    badge: e ? {
      icon: bu,
      type: "highlight"
    } : void 0
  }), l(Ke, {
    tag: "span",
    children: t?.name ?? ""
  })]
});
function O_({ user: t, options: e, showActivityButton: n = !1, activityButtonShortcut: r, onActivityButtonClick: i, onDropdownClick: o, hasActivityUpdates: s }) {
  const a = X();
  return g("div", {
    className: "flex flex-row items-center justify-between gap-1 p-3",
    children: [l("div", {
      className: "min-w-0 flex-1",
      children: l(Me, {
        items: e,
        children: g("button", {
          className: C("flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary", we("focus-visible:ring-inset")),
          onClick: o,
          children: [l(Nt, {
            src: t.avatarUrl,
            firstName: t.firstName,
            lastName: t.lastName,
            size: "xs"
          }), l(Ke, {
            children: `${t.firstName} ${t.lastName}`
          })]
        })
      })
    }), n && l(dt, {
      label: a.notifications,
      shortcut: r,
      children: g("div", {
        className: "relative",
        children: [l(B, {
          icon: fu,
          label: a.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }), s && l("div", {
          className: "absolute -right-1 -top-1 rounded-full bg-f1-background",
          children: l(cb, {
            type: "highlight",
            size: "sm",
            icon: bu
          })
        })]
      })
    })]
  });
}
function UN({ isExpanded: t }) {
  return g("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-f1-icon-bold",
    children: [l("rect", {
      id: "container",
      x: "3.33325",
      y: "5",
      width: "13.3333",
      height: "10",
      rx: "3",
      strokeWidth: "1.3",
      className: "stroke-current"
    }), l("path", {
      id: "arrow",
      d: t ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
      strokeWidth: "1.3",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: C("translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none", t ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]")
    }), l("path", {
      id: "line",
      d: "M7.5 5L7.5 15",
      strokeWidth: "1.3",
      strokeLinecap: "round",
      className: C("stroke-current transition-all duration-200 ease-out motion-reduce:transition-none", t ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100")
    })]
  });
}
function GN() {
  const { prevSidebarState: t, sidebarState: e, toggleSidebar: n, isSmallScreen: r } = Gn(), i = W(null);
  return V(() => {
    t === "hidden" && e === "locked" && i.current?.focus();
  }, [t, e]), g(fl, {
    variant: "ghost",
    size: "md",
    onClick: () => n(),
    className: "group hover:bg-f1-background-hover",
    title: "Close Sidebar",
    ref: i,
    compact: !0,
    "aria-label": "Close Sidebar",
    children: [l("div", {
      className: C("hidden", {
        flex: !r
      }),
      children: l(UN, {
        isExpanded: e === "locked"
      })
    }), l("div", {
      className: C("hidden", {
        flex: r
      }),
      children: l(G, {
        icon: en,
        size: "md"
      })
    })]
  });
}
function R_({ companies: t, selected: e, onChange: n, withNotification: r = !1, additionalOptions: i, isLoading: o = !1 }) {
  return g("div", {
    className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3",
    children: [l(VN, {
      companies: t,
      selected: e,
      onChange: n,
      isLoading: o,
      withNotification: r,
      additionalOptions: i
    }), l(GN, {})]
  });
}
function qN() {
  const [t, e] = F(!1);
  return V(() => {
    e(window.matchMedia("(pointer: coarse)").matches);
  }, []), t;
}
const Dh = $t(void 0);
function KN({ children: t }) {
  const [e, n] = F(!1), [r, i] = F(null);
  return l(Dh.Provider, {
    value: {
      isDragging: e,
      setIsDragging: n,
      draggedItemId: r,
      setDraggedItemId: i
    },
    children: t
  });
}
function Hl() {
  const t = St(Dh);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const JN = ({ item: t, active: e }) => g("div", {
  className: "flex w-full items-center justify-between",
  children: [g("div", {
    className: "flex items-center gap-1.5 font-medium text-f1-foreground",
    children: [l(G, {
      icon: t.icon,
      size: "md",
      className: C("transition-colors", e ? "text-f1-icon-bold" : "text-f1-icon")
    }), l("span", {
      children: t.label
    })]
  }), t.badge && l(Lr, {
    value: t.badge,
    size: "sm",
    type: "bold"
  })]
}), YN = ({ item: t }) => {
  const { isActive: e } = ll(), { label: n, icon: r, ...i } = t, o = e(i.href, {
    exact: i.exactMatch
  });
  return l(pt, {
    ...i,
    className: C("flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors", we("focus-visible:ring-inset"), o ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"),
    children: l(JN, {
      item: t,
      active: o
    })
  });
}, QN = ({ item: t, tooltip: e, dragConstraints: n, onRemove: r, index: i, total: o, onMove: s, onReorderFinish: a, isSortable: c = !0 }) => {
  const d = X(), { isDragging: f, setIsDragging: u, draggedItemId: h, setDraggedItemId: m } = Hl(), { isActive: p } = ll(), b = p(t.href, {
    exact: t.exactMatch
  }), y = W(!1), [v, w] = F(!1), x = i === 0, D = i === o - 1, N = o === 1, k = z(() => {
    const A = [];
    return !N && !x && A.push({
      label: d.actions.moveUp,
      onClick: () => s?.(i, i - 1),
      icon: db
    }), !N && !D && A.push({
      label: d.actions.moveDown,
      onClick: () => s?.(i, i + 1),
      icon: ub
    }), A.length > 0 && A.push({
      type: "separator"
    }), A.push({
      label: d.favorites.remove,
      onClick: () => r?.(t),
      icon: mn,
      critical: !0
    }), A;
  }, [N, x, D, d, s, i, r, t]), I = () => {
    u(!0), w(!1), m(t.href || null), y.current = !0;
  }, E = () => {
    u(!1), m(null), a(), setTimeout(() => {
      y.current = !1;
    }, 0);
  }, T = f && h === t.href, S = z(() => C("group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing", c && "touch-none", b ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary", v && "bg-f1-background-secondary", T && "bg-f1-background-secondary"), [b, v, T, c]), L = z(() => g(Z, {
    children: [l("div", {
      className: "flex w-full items-center justify-between px-1.5 py-1.5",
      children: l(ZN, {
        tooltip: e,
        children: g(pt, {
          onClick: t.onClick,
          href: t.href,
          exactMatch: t.exactMatch,
          className: C("flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline", T && "pointer-events-none"),
          draggable: !1,
          children: [t.type === "icon" ? l(G, {
            icon: t.icon,
            size: "md",
            className: C("transition-colors", b ? "text-f1-icon-bold" : "text-f1-icon")
          }) : t.avatar ? l(Or, {
            size: "xs",
            avatar: t.avatar
          }) : null, l(Ke, {
            tag: "span",
            className: "line-clamp-1 font-medium text-f1-foreground",
            lines: 1,
            noTooltip: !!e,
            children: t.label
          })]
        })
      })
    }), l("div", {
      className: C("absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100", v && "bg-f1-background-secondary opacity-100", T && "opacity-100"),
      children: l(Me, {
        open: v,
        onOpenChange: w,
        items: k,
        children: l("div", {
          className: "flex items-center justify-center",
          role: "list",
          children: l(G, {
            icon: Si,
            size: "sm"
          })
        })
      })
    })]
  }), [t, b, v, T, k, e]);
  return c ? l(Un, {
    value: t,
    drag: "y",
    dragConstraints: n,
    dragElastic: 0.1,
    onDragStart: I,
    onDragEnd: E,
    className: S,
    whileDrag: {
      scale: 1.05
    },
    children: L
  }) : l("div", {
    className: S,
    children: L
  });
}, _h = ({ title: t, isOpen: e = !0, isRoot: n, onCollapse: r, children: i, isDragging: o, wasDragging: s }) => {
  const [a, c] = F(e), d = Yi(), f = () => {
    if (o || s?.current) return;
    const u = !a;
    c(u), r?.(u);
  };
  return l("div", {
    children: g(fb, {
      open: a,
      children: [l("div", {
        className: "group relative flex items-center",
        children: g("div", {
          className: C("group relative flex w-full select-none items-center gap-1 rounded px-1.5 py-2 text-sm font-medium text-f1-foreground-secondary transition-colors hover:cursor-pointer hover:bg-f1-background-secondary", we("focus-visible:ring-inset"), n && "hidden"),
          onClick: f,
          tabIndex: 0,
          onKeyDown: (u) => {
            (u.key === "Enter" || u.key === " ") && f();
          },
          children: [t, l(U.div, {
            initial: !1,
            animate: {
              rotate: a ? 0 : -90
            },
            transition: {
              duration: d ? 0 : 0.1
            },
            className: "h-3 w-3",
            children: l(G, {
              icon: Vn,
              size: "xs",
              className: "text-f1-icon-secondary"
            })
          })]
        })
      }), l(hb, {
        forceMount: !0,
        className: "flex flex-col gap-1",
        children: l(U.div, {
          initial: !1,
          animate: {
            height: a ? "auto" : 0,
            opacity: a ? 1 : 0,
            visibility: a ? "visible" : "hidden"
          },
          transition: {
            duration: d ? 0 : 0.15,
            ease: [0.165, 0.84, 0.44, 1]
          },
          children: l("div", {
            className: "flex flex-col gap-0.5",
            children: i
          })
        })
      })]
    })
  });
}, Qo = ({ category: t, isSortable: e = !1, dragConstraints: n, onCollapse: r, onDragEnd: i, currentOrder: o }) => {
  const { isDragging: s, setIsDragging: a } = Hl(), c = W(!1), d = lo(), f = () => {
    a(!0), c.current = !0;
  }, u = () => {
    a(!1), setTimeout(() => {
      c.current = !1, o && i?.(o);
    }, 0);
  }, h = (p) => {
    !s && !c.current && r?.(t, p);
  }, m = l(_h, {
    title: t.title,
    isOpen: t.isOpen,
    isRoot: t.isRoot,
    onCollapse: h,
    isDragging: s,
    wasDragging: c,
    children: l("div", {
      className: C("flex flex-col gap-0.5", s && !c.current && "pointer-events-none"),
      children: t.items.map((p, b) => l(YN, {
        item: p
      }, b))
    })
  });
  return e ? l(Un, {
    id: t.id,
    value: t,
    dragConstraints: n,
    dragElastic: 0.1,
    dragControls: d,
    onDragStart: f,
    onDragEnd: u,
    layout: !0,
    layoutId: `category-${t.id}`,
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      filter: "blur(8px)"
    },
    transition: {
      opacity: {
        duration: 0.2,
        ease: "easeInOut"
      },
      filter: {
        duration: 0.1,
        ease: "easeInOut"
      },
      scale: {
        duration: 0.2,
        ease: [0.175, 0.885, 0.32, 1.275]
      },
      layout: {
        type: "spring",
        bounce: 0.1,
        damping: 15
      }
    },
    whileDrag: {
      scale: 1.04,
      cursor: "grabbing",
      zIndex: 50,
      backdropFilter: "blur(4px)"
    },
    className: "relative",
    children: m
  }) : m;
};
function F_({ tree: t, onCollapse: e, onSort: n, onFavoritesChange: r, favorites: i }) {
  const o = W(null), s = t.filter((p) => p.isSortable === !1), [a, c] = F(t.filter((p) => p.isSortable !== !1)), [d, f] = F(0), u = ne((p) => {
    c(p);
  }, []), h = ne((p) => {
    n?.(p);
  }, [n]), m = qN();
  return l(KN, {
    children: l(wl, {
      id: "sidebar-menu",
      children: l(XN, {
        disableDragging: m,
        nonSortableItems: s,
        sortableItems: a,
        setSortableItems: u,
        containerRef: o,
        onCollapse: e,
        onDragEnd: h,
        favorites: i,
        onFavoritesChange: r,
        forceUpdate: () => f((p) => p + 1)
      }, d)
    })
  });
}
function XN({ nonSortableItems: t, sortableItems: e, setSortableItems: n, containerRef: r, onCollapse: i, onDragEnd: o, favorites: s = [], onFavoritesChange: a, forceUpdate: c, disableDragging: d = !1 }) {
  const f = X(), { isDragging: u } = Hl(), h = t.some((R) => R.isRoot), m = t.filter((R) => !R.isRoot).length > 0, p = e.length > 0, b = W(null), [y, v] = F(s), w = s.length > 0;
  V(() => {
    JSON.stringify(s) !== JSON.stringify(y) && v(s);
  }, [s]);
  const x = (R) => {
    v(R);
  }, D = ne((R) => {
    const _ = y.filter(($) => $.href !== R.href);
    v(_), a?.(_);
  }, [y, a]), N = ne((R, _) => {
    if (_ < 0 || _ >= y.length) return;
    const $ = [...y], [K] = $.splice(R, 1);
    $.splice(_, 0, K), v($), a?.($);
  }, [y, a]), [k, I] = F(!1), E = W(null);
  V(() => {
    e.length > 0 && !k && (n([...e]), I(!0));
  }, [e, n, k]), V(() => {
    const R = () => {
      E.current !== null && window.clearTimeout(E.current), E.current = window.setTimeout(() => {
        r.current && e.length > 0 && c();
      }, 50);
    };
    return window.addEventListener("resize", R), () => {
      window.removeEventListener("resize", R), E.current !== null && window.clearTimeout(E.current);
    };
  }, [r, e, c]);
  const T = "flex flex-col gap-0.5", S = z(() => y.reduce((R, _, $) => (_.label in R || (R[_.label] = []), R[_.label].push($), R), {}), [y]), L = z(() => w && y.map((R, _) => l(QN, {
    isSortable: !d,
    tooltip: (S[R.label] ?? []).length > 1 ? R.tooltip : void 0,
    item: R,
    dragConstraints: b,
    onRemove: D,
    index: _,
    total: y.length,
    onMove: N,
    onReorderFinish: () => {
      a?.(y);
    }
  }, `${R.href}-${R.label}`)), [w, y, S, D, N, a, d]), A = "flex flex-col gap-3", O = z(() => e.map((R) => l(Qo, {
    category: R,
    isSortable: !d,
    dragConstraints: r,
    onCollapse: i,
    onDragEnd: o,
    currentOrder: e
  }, R.id)), [e, d, r, i, o]);
  return g("div", {
    className: C("relative", u && "cursor-grabbing [&_*]:cursor-grabbing"),
    children: [h && l("div", {
      className: "flex w-full flex-col gap-3 bg-transparent px-3",
      children: t.filter((R) => R.isRoot).map((R, _) => l(Qo, {
        category: R,
        onCollapse: i
      }, `fixed-${_}`))
    }), w && l("div", {
      className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3",
      children: l(_h, {
        title: f.favorites.favorites,
        children: l("div", {
          ref: b,
          children: d ? l("div", {
            className: T,
            children: L
          }) : l(Mn, {
            axis: "y",
            values: y,
            onReorder: x,
            className: T,
            children: L
          })
        })
      })
    }), m && l("div", {
      className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3",
      children: t.filter((R) => !R.isRoot).map((R, _) => l(Qo, {
        category: R,
        onCollapse: i
      }, `fixed-${_}`))
    }), p && l("div", {
      className: C("mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"),
      ref: r,
      children: d ? l("div", {
        className: A,
        children: O
      }) : l(Mn, {
        axis: "y",
        values: e,
        onReorder: n,
        layoutScroll: !0,
        className: A,
        children: O
      })
    })]
  });
}
const ZN = ({ tooltip: t, children: e }) => t ? l(dt, {
  description: t,
  children: e
}) : e;
function M_({ onClick: t, placeholder: e, shortcut: n = ["cmd", "k"], ...r }) {
  return l("div", {
    className: "px-3",
    children: g("button", {
      onClick: t,
      className: C("mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover", we()),
      type: "button",
      ...r,
      children: [g("div", {
        className: "flex items-center gap-1",
        children: [l(G, {
          icon: vu,
          size: "md"
        }), l("span", {
          children: e
        })]
      }), l("div", {
        className: "hidden xs:block",
        children: l(mb, {
          keys: n
        })
      })]
    })
  });
}
const Pc = ({ position: t }) => l(U.div, {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 0.5
  },
  exit: {
    opacity: 0
  },
  transition: {
    duration: 0.2,
    ease: "easeOut"
  },
  className: C("pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']", t === "top" ? ["top-0", "bg-gradient-to-b from-f1-background-secondary to-transparent", "after:top-0"] : ["bottom-0", "bg-gradient-to-t from-f1-background-secondary to-transparent", "after:bottom-0"])
});
function P_({ header: t, body: e, footer: n, onFooterDropdownClick: r }) {
  const { sidebarState: i, isSmallScreen: o } = Gn(), s = Yi(), [a, c] = hs({
    threshold: 1
  }), [d, f] = hs({
    threshold: 1
  }), u = X(), h = {
    x: {
      ease: i !== "locked" ? o ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : i !== "locked" && !o ? 0.3 : 0.2
    },
    top: {
      duration: s ? 0 : 0.1
    },
    left: {
      duration: s ? 0 : 0.1
    },
    default: {
      duration: s ? 0 : 0.2
    }
  }, m = () => n ? Su(n) && r ? Sl(n, {
    onDropdownClick: r
  }) : n : null;
  return g(U.aside, {
    initial: !1,
    "aria-label": u.navigation.sidebar.label,
    className: C("absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]", i === "locked" ? "h-full" : C("shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl", o ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60")),
    animate: {
      top: i === "locked" || o ? 0 : "8px",
      borderRadius: i === "locked" || o ? "0" : "12px",
      left: i === "locked" ? "0" : o ? 0 : "8px",
      x: i === "hidden" ? -260 : 0,
      opacity: i === "hidden" ? o ? 0.7 : 0 : 1,
      pointerEvents: i === "hidden" ? "none" : "auto"
    },
    transition: h,
    children: [l("header", {
      className: "flex-shrink-0",
      children: t
    }), e && g("nav", {
      className: "relative flex-grow overflow-y-hidden",
      children: [g(ut, {
        className: "h-full",
        children: [l("div", {
          ref: a,
          className: "h-px",
          "aria-hidden": "true"
        }, "top-ref"), l("div", {
          className: "w-[var(--ds-sidebar-width)]",
          children: e
        }), l("div", {
          ref: d,
          className: "h-px",
          "aria-hidden": "true"
        }, "bottom-ref")]
      }), g(Ae, {
        children: [!c && l(Pc, {
          position: "top"
        }, "shadow-scroll-top"), !f && l(Pc, {
          position: "bottom"
        }, "shadow-scroll-bottom")]
      })]
    }), l("footer", {
      className: "flex-shrink-0",
      children: m()
    })]
  });
}
const eS = {
  waiting: "neutral",
  pending: "neutral",
  approved: "positive",
  rejected: "critical"
}, zc = {
  approved: {
    icon: ar,
    type: "positive",
    size: "sm"
  },
  rejected: {
    icon: en,
    type: "critical",
    size: "sm"
  }
}, tS = {
  icon: gu,
  type: "neutral",
  size: "sm"
}, nS = {
  positive: 4,
  highlight: 3,
  critical: 2,
  warning: 1,
  neutral: 0
}, rS = (t) => t in zc ? zc[t] : tS;
function $c(t) {
  return nS[t ?? "neutral"] ?? 0;
}
const iS = ({ title: t, approvalsRequired: e = 1, status: n, approvers: r }) => {
  const i = X(), o = e === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace("{{count}}", e.toString()), s = i.approvals.statuses[n], a = z(() => r.map((c) => {
    const d = rS(c.status);
    return {
      firstName: c.firstName,
      lastName: c.lastName,
      src: c.avatar,
      badge: d
    };
  }).sort((c, d) => $c(d.badge?.type) - $c(c.badge?.type)), [r]);
  return g("div", {
    className: "flex flex-col gap-3 pb-5 pl-4 pr-3 pt-3",
    children: [g("div", {
      className: "flex flex-row items-start justify-between",
      children: [g("div", {
        children: [l("p", {
          className: "font-medium text-f1-foreground",
          children: t
        }), l("p", {
          className: "text-f1-foreground-secondary",
          children: o
        })]
      }), l(an, {
        text: s,
        variant: eS[n]
      })]
    }), l("div", {
      className: "w-full",
      children: l(Tl, {
        avatars: a,
        layout: "fill",
        type: "person",
        size: "md"
      })
    })]
  });
}, oS = ({ steps: t }) => {
  const n = X().approvals.history, r = t.findIndex((i) => i.status === "pending");
  return g("div", {
    className: "flex w-full flex-col gap-4",
    children: [l("h2", {
      className: "mb-2 text-lg font-semibold text-f1-foreground",
      children: n
    }), g("div", {
      className: "flex flex-row gap-4",
      children: [l("div", {
        className: "mt-3.5 flex flex-col items-center",
        children: t.map((i, o) => g("div", {
          className: "flex flex-col items-center",
          children: [l("div", {
            className: C("flex size-5 items-center justify-center rounded-xs text-sm font-medium", o < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"),
            children: l("span", {
              children: o + 1
            })
          }), o !== t.length - 1 && l("div", {
            className: "h-[96px] w-px bg-f1-border-secondary"
          })]
        }, i.title))
      }), l("div", {
        className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary",
        children: t.map((i, o) => g(Z, {
          children: [l(iS, {
            title: i.title,
            approvalsRequired: i.approvalsRequired,
            status: i.status,
            approvers: i.approvers
          }, i.title), o !== t.length - 1 && l("div", {
            className: "h-px w-full bg-f1-border-secondary"
          })]
        }))
      })]
    })]
  });
}, z_ = se("OneApprovalHistory", oS);
function Lh({ title: t, description: e, variant: n = "default", emoji: r, actions: i }) {
  return g("div", {
    className: "flex flex-col items-center justify-center gap-5 p-8",
    children: [n === "default" && l(yu, {
      emoji: r,
      size: "lg"
    }), n !== "default" && l(Rr, {
      type: n,
      size: "lg"
    }), g("div", {
      className: "flex flex-col items-center justify-center gap-0.5",
      children: [l("p", {
        className: "text-center text-lg font-medium text-f1-foreground",
        children: t
      }), e && l("p", {
        className: "max-w-96 text-center text-f1-foreground-secondary",
        children: e
      })]
    }), i && l("div", {
      className: "flex w-full flex-col items-center justify-center gap-2 sm:w-fit sm:flex-row sm:gap-3 [&>div]:w-full",
      children: i.map((o) => o.type === "upsell" ? l(U0, {
        label: o.label,
        onRequest: () => Promise.resolve(o.onClick()),
        errorMessage: o.errorMessage,
        successMessage: o.successMessage,
        loadingState: o.loadingState,
        nextSteps: o.nextSteps,
        closeLabel: o.closeLabel
      }, o.label) : l(B, {
        label: o.label,
        variant: o.variant,
        onClick: o.onClick,
        icon: o.icon
      }, o.label))
    })]
  });
}
const zs = ({
  value: t,
  delay: e
}) => {
  const [n, r] = F(!1);
  return V(() => {
    let i;
    return t ? i = setTimeout(() => {
      r(t);
    }, e) : r(!1), () => {
      i && clearTimeout(i);
    };
  }, [t, e]), n;
}, sS = (t) => {
  if (!t)
    return [];
  const e = t();
  return (Array.isArray(e) ? e : [e]).filter((n) => n !== void 0);
}, lS = 2, aS = (t) => "items" in t, cS = (t) => "label" in t && !("items" in t), jc = (t) => t.every(aS) ? t : t.every(cS) ? [{
  items: t
}] : t.map((e) => ({
  items: e
})), dS = (t) => t ? typeof t == "function" ? jc(t() || []) : "actions" in t ? jc(t.actions() || []) : [] : [], uS = (t) => t.map((e) => ({
  ...e,
  items: e.items.filter((n) => n.enabled === void 0 || n.enabled)
}));
function fS(t) {
  return "items" in t;
}
const hS = (t) => Array.isArray(t) ? t.every((e) => fS(e)) ? t : [{
  items: t
}] : [t], Bc = ({ message: t }) => g("div", {
  className: "flex w-full flex-row items-center gap-2 rounded-md bg-f1-background-warning p-2",
  children: [l(Rr, {
    type: "warning",
    size: "sm"
  }), l("p", {
    className: "flex-1 font-medium text-f1-foreground-warning",
    children: t
  })]
}), mS = ({ isOpen: t, secondaryActions: e = [], selectedNumber: n = void 0, onUnselect: r, warningMessage: i, ...o }) => {
  const s = X(), a = n === 1 ? s.status.selected.singular : s.status.selected.plural, c = e.slice(0, 2), d = e.slice(2).map((p) => ({
    ...p,
    critical: p.critical || !1
  })), f = z(() => hS(o.primaryActions ?? []), [o.primaryActions]), u = z(() => f.map((p) => ({
    ...p,
    items: p.items.map((b) => ({
      value: b.label,
      label: b.label,
      icon: b.icon,
      critical: b.critical,
      description: b.description,
      disabled: b.disabled
    }))
  })), [f]), h = z(() => f.length === 1 && f[0].items.length === 1 ? f[0].items[0] : null, [f]), m = ne((p) => f.flatMap((b) => b.items).find((b) => b.label === p), [f]);
  return l(Ae, {
    children: t && g(U.div, {
      initial: {
        opacity: 0,
        y: 32,
        filter: "blur(6px)"
      },
      animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)"
      },
      exit: {
        opacity: 0,
        y: 32,
        filter: "blur(6px)"
      },
      transition: {
        ease: [0.175, 0.885, 0.32, 1.275],
        duration: 0.3
      },
      className: C("fixed bottom-2 left-2 right-2 z-50 flex h-fit w-[calc(100%-16px)] flex-col gap-2 rounded-xl bg-f1-background-inverse p-2 text-f1-foreground-inverse shadow-lg backdrop-blur-sm dark:bg-f1-background-inverse-secondary sm:bottom-5 sm:mx-auto sm:h-12 sm:w-max sm:flex-row sm:gap-8", i && "sm:py-1 sm:pr-1"),
      children: [n && g("div", {
        className: "dark flex h-8 w-full items-center justify-between gap-2 px-2 sm:h-auto sm:w-fit sm:justify-start sm:pl-2 sm:pr-0",
        children: [g("span", {
          className: "font-medium tabular-nums",
          children: [l(mu, {
            value: n,
            spinTiming: {
              duration: 200,
              easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }
          }), g("span", {
            children: [" ", a]
          })]
        }), l(B, {
          variant: "outline",
          size: "sm",
          label: s.actions.unselect,
          onClick: r
        })]
      }), g("div", {
        className: "dark",
        children: [l("div", {
          className: C("flex flex-col items-center gap-2 sm:hidden", !i && "[&_button]:w-full [&_div]:w-full"),
          children: i ? l(Bc, {
            message: i
          }) : g(ln, {
            children: [l(El, {
              items: e
            }), h ? l(B, {
              label: h.label,
              icon: h.icon,
              onClick: h.onClick,
              disabled: h.disabled,
              size: "lg"
            }) : l(Fn, {
              items: u,
              onClick: (p) => {
                m(p)?.onClick?.();
              },
              size: "lg"
            })]
          }, "mobile-actions")
        }), l("div", {
          className: "hidden items-center gap-2 sm:flex",
          children: i ? l(Bc, {
            message: i
          }) : g(ln, {
            children: [d.length > 0 && l(Me, {
              items: d
            }), c.slice().reverse().map((p) => l(B, {
              variant: p.critical ? "critical" : "outline",
              label: p.label,
              icon: p.icon,
              onClick: p.onClick,
              disabled: p.disabled
            }, p.label)), h ? l(B, {
              label: h.label,
              icon: h.icon,
              onClick: h.onClick,
              disabled: h.disabled
            }) : l(Z, {
              children: l(Fn, {
                items: u,
                onClick: (p) => {
                  m(p)?.onClick?.();
                }
              })
            })]
          }, "desktop-actions")
        })]
      })]
    })
  });
}, pS = ({ primaryActions: t, secondaryActions: e, otherActions: n }) => {
  const r = (Array.isArray(t) ? t : [t]).filter((c) => c !== void 0), i = e || [], o = z(() => (n || []).map((c) => c.items).reduce((c, d) => (c.length > 0 && c.push({
    type: "separator"
  }), c.push(...d), c), []), [n]), [s, a] = F(!1);
  return r.length === 0 && i.length === 0 && o.length === 0 ? null : g("div", {
    className: "flex flex-row-reverse items-center gap-2",
    children: [r.length === 1 ? l(B, {
      size: "md",
      onClick: r[0].onClick,
      icon: r[0].icon,
      variant: "default",
      label: r[0].label,
      loading: r[0].loading,
      disabled: r[0].disabled
    }) : r.length > 1 && l(Fn, {
      size: "md",
      items: r.map((c, d) => ({
        label: c.label,
        icon: c.icon,
        value: d.toString()
      })),
      onClick: (c) => {
        r[Number(c)]?.onClick?.();
      }
    }), i?.map((c) => l(B, {
      size: "md",
      onClick: c.onClick,
      icon: c.icon,
      variant: "outline",
      hideLabel: c.hideLabelWhenExpanded,
      label: c.label,
      disabled: c.disabled,
      loading: c.loading
    }, c.label)), o.length > 0 && l(Me, {
      items: o,
      align: "end",
      open: s,
      onOpenChange: a,
      children: l(nt, {
        variant: "outline",
        icon: cr,
        label: "Actions",
        hideLabel: !0,
        pressed: s
      })
    })]
  });
}, Oh = q(({ value: t, compareToValue: e, onDateChange: n, disabled: r, error: i, className: o, highlighted: s, onClick: a, navigation: c, granularity: d, hideGoToCurrent: f, ...u }, h) => {
  const m = X(), p = z(() => {
    if (!t || !t.value)
      return [m.date.selectDate];
    const I = d || xu[t.granularity];
    return [t.value, Array.isArray(e) ? e[0] : e].filter((T) => T !== void 0).sort((T, S) => T?.from.getTime() - S?.from.getTime()).map((T) => I.toString(T, m, "long"));
  }, [t, m, e, d]), b = z(() => Object.values(p).join(" ⸱ "), [p]), y = (I) => {
    I && n?.(I);
  }, v = z(() => {
    if (u.minDate)
      return d?.toRange(u.minDate)?.from;
  }, [u.minDate, d]), w = z(() => {
    if (u.maxDate)
      return d?.toRange(u.maxDate)?.to;
  }, [u.maxDate, d]), [x, D] = F(null);
  V(() => {
    D(d?.toRange(/* @__PURE__ */ new Date()) ?? null);
    const I = () => {
      const T = d?.toRange(/* @__PURE__ */ new Date()) ?? null;
      T && pb(T.from, v) && gb(T.to || T.from, w) ? D(T) : D(null);
    }, E = setInterval(() => {
      I();
    }, 6e4);
    return I(), () => clearInterval(E);
  }, [d, v, w]);
  const N = t?.value ? d?.getPrevNext(t?.value, {
    min: v,
    max: w
  }) : void 0, k = () => {
    const I = d?.toRange(/* @__PURE__ */ new Date());
    I && n?.(I);
  };
  return g("div", {
    ref: h,
    className: C("inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover", "[%>*] py-1", we("focus:ring-f1-border-hover"), r && "cursor-not-allowed bg-f1-background-secondary opacity-50", i && "ring-f1-border-critical-bold", o),
    onClick: (I) => I.stopPropagation(),
    children: [g("div", {
      className: C("flex flex-1 gap-1", c ? "justify-between" : "justify-center"),
      children: [c && l(B, {
        size: "sm",
        variant: "ghost",
        icon: al,
        label: "Previous",
        hideLabel: !0,
        disabled: !N?.prev,
        onClick: () => y(N?.prev ?? !1)
      }), l(nt, {
        fontSize: "md",
        size: "sm",
        variant: "ghost",
        label: b,
        onClick: a,
        disabled: r,
        style: {
          minWidth: d?.toStringMaxWidth()
        },
        className: C(s && "bg-f1-background-secondary-hover")
      }), c && l(B, {
        variant: "ghost",
        icon: Tr,
        label: "Next",
        hideLabel: !0,
        size: "sm",
        fontSize: "md",
        disabled: !N?.next,
        onClick: () => y(N?.next ?? !1)
      })]
    }), !f && x && l("div", {
      className: "border-l-solid flex-shrink-0 border-[#f00]",
      children: l(B, {
        fontSize: "md",
        size: "sm",
        variant: "ghost",
        label: m.date.granularities[t?.granularity ?? "day"]?.currentDate,
        onClick: k
      })
    })]
  });
});
Oh.displayName = "DatePickerTrigger";
function gS({ onSelect: t, defaultValue: e, presets: n = [], granularities: r = ["day"], hideNavigation: i = !1, hideGoToCurrent: o = !1, compareTo: s, defaultCompareTo: a, onCompareToChange: c, value: d, ...f }) {
  const [u, h] = F(e ?? d);
  V(() => {
    G0(d, u) || h(d || e);
  }, [d, e]);
  const [m, p] = F(), [b, y] = F(!1), v = su(), w = f.weekStartsOn ?? v.date?.weekStartsOn ?? bb.Monday, x = z(() => {
    const I = u?.granularity ?? "day";
    return vb(w)[I];
  }, [u?.granularity, w]), D = (I) => {
    h(I), t?.(I);
  }, N = (I) => {
    p(I), c?.(I);
  }, k = (I) => {
    D({
      value: x.toRange(I),
      granularity: u?.granularity ?? "day"
    });
  };
  return l(q0, {
    onSelect: D,
    value: u,
    defaultValue: e,
    presets: n,
    granularities: r,
    minDate: f.minDate,
    maxDate: f.maxDate,
    open: b,
    onOpenChange: y,
    compareTo: s,
    defaultCompareTo: a,
    onCompareToChange: N,
    weekStartsOn: w,
    asChild: !0,
    children: l(Oh, {
      value: u,
      compareToValue: m,
      highlighted: b,
      navigation: !i,
      onDateChange: k,
      granularity: x,
      minDate: f.minDate,
      maxDate: f.maxDate,
      disabled: f.disabled,
      hideGoToCurrent: o,
      onClick: () => y(!0)
    })
  });
}
function bS({ filter: t, value: e, onChange: n }) {
  const r = X(), i = {
    granularity: "day",
    ...t
  }, o = Array.isArray(i.granularity) ? i.granularity : [i.granularity], s = yb(e.granularity || o[0]);
  return l("div", {
    className: "flex items-center gap-2",
    children: l(gS, {
      onSelect: (c) => {
        !c || !c.value || n({
          value: c.value,
          granularity: c.granularity,
          valueString: s.toString(c.value, r)
        });
      },
      defaultValue: e,
      granularities: o,
      minDate: i.min,
      maxDate: i.max,
      presets: i.presets,
      hideGoToCurrent: i.hideGoToCurrent
    })
  });
}
const vS = (t) => "date" in t, yS = {
  valueConverter: function(t, e, n) {
    const r = Array.isArray(e.granularity) ? e.granularity : [e.granularity], i = e.defaultGranularity || r[0] || "day";
    if (t || (t = /* @__PURE__ */ new Date()), vS(t))
      return t;
    const o = xu[i];
    return {
      value: o.toRange(t),
      valueString: o.toString(t, n),
      granularity: i
    };
  },
  render: (t) => l(bS, {
    ...t
  })
}, Rh = {
  "date-navigator": yS
}, Hc = ({ navigationFilters: t, currentNavigationFilters: e, onChangeNavigationFilters: n }) => l(Z, {
  children: t && Object.entries(t).map(([r, i]) => {
    const o = Rh[i.type];
    return l(Q.Fragment, {
      children: o.render({
        filter: i,
        value: e[r],
        onChange: (s) => {
          n({
            ...e,
            [r]: s
          });
        }
      })
    }, r);
  })
}), Vc = ({ loading: t }) => t ? l(G, {
  icon: wb,
  className: "animate-spin"
}) : l(G, {
  icon: vu,
  className: "text"
}), xS = ({ value: t, onChange: e, loading: n = !1 }) => {
  const [r, i] = F(!1), o = Nl(), s = W(null), a = W(null), c = X(), d = () => {
    e(void 0), i(!1), a?.current && (a.current.value = "");
  };
  xb(s, () => {
    r && i(!1);
  });
  const f = () => {
    r || (i(!0), setTimeout(() => {
      a.current?.focus();
    }, 0));
  }, u = (h) => {
    r ? h.key === "Escape" && (h.preventDefault(), d(), i(!1)) : (h.key === "Enter" || h.key === " ") && (h.preventDefault(), f());
  };
  return l(wl, {
    id: o,
    children: l(Vu, {
      transition: {
        duration: 0.2,
        ease: [0.175, 0.885, 0.32, 1.05]
      },
      children: l(Ae, {
        children: l(U.div, {
          layout: !0,
          ref: s,
          className: C("relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center", (r || t) && "w-[180px]"),
          children: r ? l(U.div, {
            layout: !0,
            layoutId: "search-container",
            className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
            style: {
              borderRadius: 12
            },
            children: g(U.div, {
              layout: !0,
              className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
              style: {
                borderRadius: 11
              },
              children: [l(U.div, {
                className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
                layoutId: "search-icon",
                children: l(Vc, {
                  loading: n
                }, "loading")
              }), l(U.input, {
                layout: !0,
                ref: a,
                type: "text",
                value: t,
                placeholder: c.actions.search,
                onChange: (h) => e(h.target.value),
                className: "h-full w-full appearance-none rounded border-none bg-f1-background py-2 pl-7 text-base text-f1-foreground",
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                onKeyDown: u
              }), l(U.div, {
                tabIndex: 0,
                className: C("flex h-5 w-5 items-center justify-center rounded-full", we()),
                onClick: (h) => {
                  h.stopPropagation(), d();
                },
                onKeyDown: (h) => {
                  (h.key === "Enter" || h.key === " ") && d();
                },
                role: "button",
                "aria-label": c.actions.clear,
                children: l(G, {
                  icon: fs,
                  size: "md",
                  color: "secondary"
                })
              })]
            })
          }) : l(U.div, {
            role: "button",
            "aria-label": c.actions.search,
            tabIndex: 0,
            layout: !0,
            layoutId: "search-container",
            className: C("relative h-8 w-full bg-f1-border p-px transition-colors hover:bg-f1-border-hover", we()),
            onClick: f,
            onKeyDown: u,
            style: {
              borderRadius: 10
            },
            children: g(U.div, {
              layout: !0,
              className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
              style: {
                borderRadius: 9
              },
              children: [l(U.div, {
                className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
                layoutId: "search-icon",
                children: l(Vc, {
                  loading: n
                })
              }), t && g("div", {
                className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5",
                children: [l(U.div, {
                  layout: !0,
                  className: "line-clamp-1 overflow-hidden py-2 pl-7",
                  children: t
                }), l(U.div, {
                  tabIndex: 0,
                  className: C("flex h-5 w-5 items-center justify-center rounded-full", we()),
                  onClick: (h) => {
                    h.stopPropagation(), d();
                  },
                  onKeyDown: (h) => {
                    (h.key === "Enter" || h.key === " ") && d();
                  },
                  role: "button",
                  "aria-label": c.actions.clear,
                  children: l(G, {
                    icon: fs,
                    size: "md",
                    color: "secondary"
                  })
                })]
              })]
            })
          })
        })
      })
    })
  });
}, Wc = ({ isReady: t, totalItemSummaryResult: e }) => l("div", {
  className: "flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold",
  children: t ? g("div", {
    className: "flex h-5 items-center",
    children: [" ", e]
  }) : l(M, {
    className: "h-5 w-24"
  })
}), wS = [
  "filters",
  "navigationFilters",
  "sortings",
  "grouping",
  "visualization",
  "search"
], Uc = ["*", "all"], kS = (t) => {
  const e = /* @__PURE__ */ new Set();
  return t ? (t.some((n) => Uc.includes(n)) && wS.forEach((n) => {
    e.add(n);
  }), t.filter((n) => !Uc.includes(n)).forEach((n) => {
    n.startsWith("!") ? e.delete(n.slice(1)) : e.add(n);
  }), Array.from(e)) : [];
}, CS = (t) => {
  if (!t || typeof t != "string")
    return !1;
  const e = t.lastIndexOf("/");
  if (e === -1)
    return !1;
  const n = t.substring(0, e), r = t.substring(e + 1);
  return !(!n || n.trim() === "" || !r || !/^v[0-9]+$/.test(r));
}, NS = (t, e, n, r) => {
  const [i, o] = F(!1), s = K0();
  t && !CS(t) && console.error(
    `Invalid storage key format: "${t}". Key must follow the format "name/version" where name can be a path (e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`
  );
  const a = z(
    // Settings is always included
    () => [...kS(e), "settings"],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional
    [JSON.stringify(e)]
  ), c = z(() => !r && !!t, [r, t]);
  V(() => {
    if (!c) {
      o(!0);
      return;
    }
    s.get(t).then((u) => {
      Object.entries(n).forEach(
        ([h, m]) => {
          if (a.includes(
            h
          )) {
            const p = u[h];
            p !== void 0 && m.setValue(
              p
            );
          }
        }
      );
    }), o(!0);
  }, [t, c]);
  const d = z(
    () => JSON.stringify(
      Object.entries(n).map(
        ([u, h]) => [
          u,
          h.value
        ]
      )
    ),
    [n]
  ), f = kb(
    (u) => {
      if (!c || !i)
        return;
      const h = Object.fromEntries(
        Object.entries(u).map(([m, p]) => a.includes(m) ? [m, p.value] : [m, void 0]).filter(([m, p]) => p !== void 0)
      );
      if (Object.keys(h).length === 0) {
        s.set(t, {});
        return;
      }
      s.set(t, h);
    },
    200
  );
  return V(() => {
    f(n);
  }, [
    t,
    a,
    s,
    i,
    d
  ]), {
    storageReady: i
  };
}, SS = (t = {}, e) => {
  const n = X(), r = {
    "no-data": {
      emoji: "📄",
      title: n.collections.emptyStates.noData.title,
      description: n.collections.emptyStates.noData.description
    },
    "no-results": {
      emoji: "🔍",
      title: n.collections.emptyStates.noResults.title,
      description: n.collections.emptyStates.noResults.description,
      actions: [
        {
          label: n.collections.emptyStates.noResults.clearFilters,
          onClick: e.clearFilters
        }
      ]
    },
    error: {
      title: n.collections.emptyStates.error.title,
      description: n.collections.emptyStates.error.description,
      actions: [
        {
          label: n.collections.emptyStates.error.retry,
          onClick: e.retry
        }
      ]
    }
  }, [i, o] = F(void 0);
  return { emptyState: i, setEmptyStateType: (a, c) => {
    if (!a) {
      o(void 0);
      return;
    }
    const d = t[a] ?? {}, f = r[a], u = {
      title: d.title ?? f.title,
      description: d.description ?? (a === "error" && c ? c : f.description),
      actions: d.actions ?? f.actions
    };
    o(a === "error" ? {
      ...u,
      variant: "critical"
    } : {
      ...u,
      emoji: d.emoji ?? f.emoji
    });
  } };
};
function IS(t, { filters: e, onError: n } = {}) {
  const [r, i] = F(void 0);
  return {
    ...Cb(t, {
      filters: e,
      onError: n,
      fetchParamsProvider: (s) => ({
        ...s,
        navigationFilters: t.currentNavigationFilters
      }),
      onResponse: (s) => {
        const a = "summaries" in s ? s.summaries : void 0;
        i(a);
      }
    }, [JSON.stringify(t.currentNavigationFilters)]),
    summaries: r
  };
}
function po(t, e = {}) {
  return {
    ...IS(t, e)
  };
}
const Fh = ({ className: t, ...e }) => l("nav", {
  role: "navigation",
  "aria-label": "pagination",
  className: C("flex w-full justify-center", t),
  ...e
});
Fh.displayName = "Pagination";
const Mh = Fe.forwardRef(({ className: t, ...e }, n) => l("div", {
  ref: n,
  className: C("flex list-none flex-row items-center gap-1", t),
  ...e
}));
Mh.displayName = "PaginationContent";
const hi = Fe.forwardRef(({ className: t, ...e }, n) => l("div", {
  ref: n,
  className: C("", t),
  ...e
}));
hi.displayName = "PaginationItem";
const go = ({ className: t, isActive: e, ...n }) => l("a", {
  "aria-current": e ? "page" : void 0,
  className: C("flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover", e && "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover", we(), t),
  ...n
});
go.displayName = "PaginationLink";
const Ph = ({ className: t, ...e }) => l(go, {
  role: "button",
  "aria-label": "Go to previous page",
  className: C("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", t),
  ...e,
  children: l(G, {
    icon: al
  })
});
Ph.displayName = "PaginationPrevious";
const zh = ({ className: t, ...e }) => l(go, {
  role: "button",
  "aria-label": "Go to next page",
  className: C("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", t),
  ...e,
  children: l(G, {
    icon: Tr
  })
});
zh.displayName = "PaginationNext";
const $h = ({ className: t, ...e }) => l("span", {
  role: "presentation",
  "aria-hidden": !0,
  className: C("flex h-9 w-9 items-center justify-center", t),
  ...e,
  children: l(G, {
    icon: Si
  })
});
$h.displayName = "PaginationEllipsis";
function AS({ totalPages: t, currentPage: e = 1, onPageChange: n, showControls: r = !0, ariaLabel: i = "Page navigation", visibleRange: o = 3, hasNextPage: s = !0, disabled: a = !1 }) {
  const c = t === 0, d = ne((u) => {
    n && (c || u >= 1 && u <= t) && n(u);
  }, [n, t, c]), f = z(() => {
    if (c) return [];
    const u = [];
    if (t <= 5)
      return Array.from({
        length: t
      }, (b, y) => y + 1);
    u.push(1);
    const h = Math.floor(o / 2);
    let m = e - h, p = e + h;
    return e <= h + 2 ? (m = 2, p = m + o - 1, u.push(...Array.from({
      length: p - m + 1
    }, (b, y) => y + m)), u.push("...")) : e >= t - h - 1 ? (m = t - o - 1, p = t - 1, u.push("..."), u.push(...Array.from({
      length: p - m + 1
    }, (b, y) => y + m))) : (u.push("..."), u.push(...Array.from({
      length: o
    }, (b, y) => y + m)), u.push("...")), u.push(t), u;
  }, [e, t, o, c]);
  return l(Fh, {
    children: g(Mh, {
      role: "navigation",
      "aria-label": i,
      children: [r && l(hi, {
        children: l(Ph, {
          "aria-disabled": e === 1 || a,
          tabIndex: e === 1 ? -1 : 0,
          className: C(!c && "mr-1", e === 1 || a ? "pointer-events-none opacity-50" : ""),
          onClick: () => d(e - 1),
          onKeyDown: (u) => {
            u.key === "Enter" && d(e - 1);
          }
        })
      }), !c && f.map((u, h) => l(hi, {
        className: C("hidden sm:flex", u === e && "flex", a && "pointer-events-none opacity-50"),
        children: u === "..." ? l($h, {}) : l(go, {
          "aria-current": u === e ? "page" : void 0,
          isActive: u === e,
          onClick: () => d(u),
          onKeyDown: (m) => {
            m.key === "Enter" && d(u);
          },
          tabIndex: 0,
          children: u
        })
      }, h)), r && l(hi, {
        children: l(zh, {
          "aria-disabled": (c ? !s : e === t) || a,
          tabIndex: c ? s ? 0 : -1 : e === t ? -1 : 0,
          className: C(!c && "ml-1", !c && e === t || !s && c || a ? "pointer-events-none opacity-50" : ""),
          onClick: () => d(e + 1),
          onKeyDown: (u) => {
            u.key === "Enter" && d(e + 1);
          }
        })
      })]
    })
  });
}
const TS = se("OnePagination", AS), Vl = ({ paginationInfo: t, setPage: e, className: n }) => {
  const r = X();
  return Nb(t) && g("div", {
    className: C("flex w-full items-center justify-between px-4", n),
    children: [l("span", {
      className: "shrink-0 text-f1-foreground-secondary",
      children: t.total > 0 && `${(t.currentPage - 1) * t.perPage + 1}-${Math.min(t.currentPage * t.perPage, t.total)} ${r.collections.visualizations.pagination.of} ${t.total}`
    }), l("div", {
      className: "flex items-center",
      children: l(TS, {
        totalPages: t.pagesCount,
        currentPage: t.currentPage,
        onPageChange: e,
        disabled: t.pagesCount <= 1
      })
    })]
  });
}, ES = (t) => Math.ceil(t / 12) * 12, jh = ({ children: t, tmpFullWidth: e }) => l("div", {
  className: C("grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", e && "px-0"),
  children: t
}), Gc = ({ source: t, items: e, selectedItems: n, handleSelectItemChange: r, cardProperties: i, title: o, description: s, avatar: a, image: c, imageFit: d, imageSize: f, blurredBackground: u, compact: h, tmpFullWidth: m }) => {
  function p(v, w) {
    return w.map((x) => {
      if (x.hide?.(v))
        return null;
      const D = x.render(v);
      if (D === void 0)
        return null;
      const N = b(D);
      return N ? N.type === "file" ? {
        property: N
      } : {
        icon: x.icon ?? Sb,
        tooltip: x.tooltip,
        property: N
      } : null;
    }).filter((x) => x !== null);
  }
  function b(v) {
    return typeof v == "string" ? {
      type: "text",
      value: v
    } : typeof v == "number" ? {
      type: "number",
      value: v
    } : y(v) ? v : null;
  }
  function y(v) {
    if (typeof v != "object" || v === null || !("type" in v))
      return !1;
    const w = v.type;
    return typeof w == "string" && w in J0;
  }
  return l(jh, {
    tmpFullWidth: m,
    children: e.map((v, w) => {
      const x = t.selectable ? t.selectable(v) : void 0, D = t.itemUrl ? t.itemUrl(v) : void 0, N = t.itemOnClick ? t.itemOnClick(v) : void 0, k = (t.itemActions ? t.itemActions(v) || [] : []).filter((A) => A.type !== "separator"), I = (k.filter((A) => A.type === "other" || !A.type) || []).map((A) => ({
        ...A,
        type: "item"
      })), E = k.find((A) => A.type === "primary") || void 0, T = k.filter((A) => A.type === "secondary") || [], S = !!t.selectable && x !== void 0, L = p(v, i);
      return l(U.div, {
        layout: !0,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        custom: w,
        variants: wu({
          delay: 0.02,
          duration: 0.3
        }),
        children: l(Dl, {
          title: o(v),
          selectable: S,
          description: s ? s(v) : void 0,
          avatar: a ? a(v) : void 0,
          image: c ? c(v) : void 0,
          imageFit: d,
          imageSize: f,
          blurredBackground: u,
          selected: S && n.has(x),
          onSelect: (A) => r(v, A),
          secondaryActions: T,
          primaryAction: E,
          otherActions: I,
          onClick: N,
          link: D,
          compact: h || !1,
          metadata: L,
          fullHeight: !0
        }, w)
      }, w);
    })
  });
}, DS = ({ cardProperties: t, title: e, description: n, avatar: r, image: i, imageFit: o, imageSize: s, blurredBackground: a, compact: c, source: d, onSelectItems: f, onLoadData: u, onLoadError: h, tmpFullWidth: m }) => {
  const p = z(() => {
    if (d.dataAdapter.paginationType === "pages") {
      const L = d.dataAdapter.perPage, A = ES(L ?? 24);
      return {
        ...d.dataAdapter,
        perPage: A
      };
    }
    return d.dataAdapter;
  }, [d.dataAdapter]), { data: b, paginationInfo: y, setPage: v, isInitialLoading: w } = po({
    ...d,
    dataAdapter: p
  }, {
    onError: (L) => {
      h(L);
    }
  });
  V(() => {
    u({
      totalItems: y?.total || b.records.length,
      filters: d.currentFilters,
      search: d.currentSearch,
      isInitialLoading: w,
      data: b.records
    });
  }, [y?.total, b.records]);
  const { selectedItems: x, groupAllSelectedStatus: D, handleSelectItemChange: N, handleSelectGroupChange: k } = Xi({
    data: b,
    paginationInfo: y,
    source: d,
    onSelectItems: f,
    selectionMode: "multi",
    selectedState: d.defaultSelectedItems
  }), I = d.grouping?.collapsible, E = d.grouping?.defaultOpenGroups, { openGroups: T, setGroupOpen: S } = kl(b?.type === "grouped" ? b.groups : [], E);
  return g("div", {
    className: "flex h-full min-h-0 flex-1 flex-col gap-4",
    children: [l("div", {
      className: "overflow-auto",
      children: w ? l(jh, {
        tmpFullWidth: m,
        children: Array.from({
          length: 8
        }).map((L, A) => g(ro, {
          children: [l(io, {
            children: l(oo, {
              "aria-label": "Loading card",
              children: l(M, {
                className: "h-4 w-3/4"
              })
            })
          }), l(so, {
            className: "space-y-2",
            children: t.map((O) => g("div", {
              className: "space-y-1",
              children: [l(M, {
                className: "h-3 w-1/4"
              }), l(M, {
                className: "h-3 w-1/2"
              })]
            }, String(O.label)))
          })]
        }, A))
      }) : g(Z, {
        children: [b?.type === "grouped" && b.groups.map((L) => g(Z, {
          children: [l(Cl, {
            label: L.label,
            itemCount: L.itemCount,
            onOpenChange: (A) => S(L.key, A),
            open: T[L.key],
            selectable: !!d.selectable,
            showOpenChange: I,
            select: D[L.key]?.checked ? !0 : D[L.key]?.indeterminate ? "indeterminate" : !1,
            onSelectChange: (A) => k(L, A),
            className: "px-4 pb-2 pt-4"
          }), l(Ae, {
            children: (!I || T[L.key]) && l(Gc, {
              source: d,
              items: L.records,
              selectedItems: x,
              handleSelectItemChange: N,
              title: e,
              cardProperties: t,
              description: n,
              avatar: r,
              image: i,
              imageFit: o,
              imageSize: s,
              blurredBackground: a,
              compact: c,
              tmpFullWidth: m
            }, L.key)
          })]
        })), b?.type === "flat" && l(Gc, {
          source: d,
          items: b.records,
          selectedItems: x,
          handleSelectItemChange: N,
          title: e,
          cardProperties: t,
          description: n,
          avatar: r,
          image: i,
          imageFit: o,
          imageSize: s,
          blurredBackground: a,
          compact: c,
          tmpFullWidth: m
        })]
      })
    }), l(Vl, {
      paginationInfo: y,
      setPage: v
    })]
  });
};
function _S(t, e) {
  const n = { ...t };
  for (const [r, i] of Object.entries(e)) {
    const o = t[r];
    if (Array.isArray(o) && Array.isArray(i) && o.length > 0 && i.length > 0) {
      const s = o.filter(
        (a) => i.includes(a)
      );
      n[r] = s;
    } else
      n[r] = i;
  }
  return n;
}
const LS = ({ source: t, lane: e, onError: n, onHookUpdate: r }) => {
  const i = z(() => _S(t.currentFilters, e.filters), [t.currentFilters, e.filters]), o = po(t, {
    filters: i,
    onError: n
  });
  return V(() => {
    r?.(o);
  }, [o]), null;
};
function OS(t, e = {}) {
  const { lanes: n } = t;
  if (!z(() => n && n.length > 0, [n]))
    throw new Error("Lanes has not been configured on data source");
  const [i, o] = F({}), s = ne((y, v) => {
    o((w) => ({
      ...w,
      [y]: v
    }));
  }, []), a = z(() => JSON.stringify(n), [n]), c = z(() => JSON.stringify(t.currentFilters), [t.currentFilters]), d = z(() => JSON.stringify(t.currentNavigationFilters), [t.currentNavigationFilters]), f = z(() => JSON.stringify(t.currentSortings), [t.currentSortings]), u = z(() => JSON.stringify(t.currentGrouping), [t.currentGrouping]), h = z(() => JSON.stringify(t.currentSearch), [t.currentSearch]), m = z(() => JSON.stringify(t.grouping), [t.grouping]), p = z(() => JSON.stringify(t.dataAdapter), [t.dataAdapter]);
  return {
    lanesProvider: z(() => (n || []).map((y) => l(LS, {
      lane: y,
      onError: e.onError,
      source: t,
      onHookUpdate: (v) => s(y.id, v)
    }, y.id)), [a, s, c, d, f, u, h, m, p]),
    lanesHooks: i
  };
}
const RS = (t) => {
  const e = Array.from(t.values());
  return {
    allSelected: e.every((n) => n.allSelected),
    itemsStatus: e.flatMap((n) => n.itemsStatus),
    groupsStatus: e.reduce(
      (n, r) => ({
        ...n,
        ...r.groupsStatus
      }),
      {}
    ),
    filters: e.reduce(
      (n, r) => ({
        ...n,
        ...r.filters
      }),
      {}
    ),
    selectedCount: e.reduce(
      (n, r) => n + r.selectedCount,
      0
    ),
    selectedIds: e.flatMap((n) => n.selectedIds)
  };
}, FS = (t) => {
  const e = Xi({
    data: t.data || {
      type: "flat",
      records: [],
      groups: []
    },
    paginationInfo: t.paginationInfo,
    source: t.source,
    onSelectItems: t.onSelectItems,
    selectedState: t.source.defaultSelectedItems
  });
  return V(() => {
    t.onHookUpdate(e);
  }, [e]), null;
}, MS = (t, e, n) => {
  const [r, i] = F(/* @__PURE__ */ new Map()), [o, s] = F({
    selectItemsStatus: /* @__PURE__ */ new Map(),
    clearCallback: /* @__PURE__ */ new Map()
  }), a = ne(() => {
    o.clearCallback.forEach((d) => d());
  }, [o.clearCallback]);
  V(() => {
    const d = Object.fromEntries(o.selectItemsStatus);
    n?.({
      ...RS(o.selectItemsStatus),
      byLane: d
    }, a);
  }, [o]);
  const c = z(() => (t || []).map((d) => l(FS, {
    source: e,
    data: d.data || {
      type: "flat",
      records: [],
      groups: []
    },
    paginationInfo: d.paginationInfo,
    onHookUpdate: (f) => i((u) => new Map(u).set(d.id, f)),
    onSelectItems: (f, u) => {
      s((h) => ({
        selectItemsStatus: new Map(h.selectItemsStatus).set(d.id, f),
        clearCallback: new Map(h.clearCallback).set(d.id, u)
      }));
    }
  }, d.id)), [JSON.stringify(t)]);
  return {
    lanesUseSelectable: r,
    lanesSelectProvider: c
  };
}, PS = 5;
function zS(t) {
  if (!t.length)
    return;
  if (t.length === 1 && t[0] && // checking to see if `classNames[0]` is a string that contains other classnames
  !t[0].includes(" "))
    return t[0];
  const e = {};
  for (const r of t) {
    if (!r)
      continue;
    const i = r.split(" ");
    for (const o of i) {
      const s = o.startsWith("_") ? o.slice(0, PS) : o;
      e[s] = o;
    }
  }
  let n = "";
  for (const r in e)
    n += e[r] + " ";
  if (n)
    return n.trimEnd();
}
var Bh = {
  default: "var(--ds-border-selected, #1868DB)",
  warning: "var(--ds-border-warning, #E06C00)"
}, $S = "var(--ds-border-width-selected, 2px)", jS = {
  top: "horizontal",
  bottom: "horizontal",
  left: "vertical",
  right: "vertical"
}, BS = {
  root: "_1e0c1ule _kqswstnw _1pbykb7n _lcxvglyw _bfhkys7w _rfx31ssb _3l8810ly _kzdanqa1 _15m6ys7w _cfu11ld9 _1kt9b3bt _1cs8stnw _13y0usvi _1mp4vjfa _kfgtvjfa"
}, HS = {
  horizontal: "_4t3i10ly _1e02fghn _rjxpidpf _z5wtuj5p",
  vertical: "_1bsb10ly _154ifghn _94n5idpf _1aukuj5p"
}, VS = {
  top: "_154ihv0e _1auk70hn",
  right: "_1xi2hv0e _ooun70hn",
  bottom: "_94n5hv0e _19wo70hn",
  left: "_1ltvhv0e _qnec70hn"
}, WS = {
  // - half the terminal bleeding out the containing element
  // - half the terminal inside the containing element (we need to position the line next to this)
  terminal: function(e) {
    var n = e.indent;
    return "calc(var(--terminal-radius) + ".concat(n, ")");
  },
  // The full terminal is inside the containing element (we need to position the line next to this)
  "terminal-no-bleed": function(e) {
    var n = e.indent;
    return "calc(var(--terminal-diameter) + ".concat(n, ")");
  },
  // No terminal to worry about, line should take up all the space
  "no-terminal": function(e) {
    var n = e.indent;
    return n;
  }
};
function US(t) {
  var e = t.edge, n = t.gap, r = n === void 0 ? "0px" : n, i = t.indent, o = i === void 0 ? "0px" : i, s = t.strokeColor, a = s === void 0 ? Bh.default : s, c = t.strokeWidth, d = c === void 0 ? $S : c, f = t.type, u = f === void 0 ? "terminal" : f, h = jS[e];
  return /* @__PURE__ */ Fe.createElement("div", {
    style: {
      // ## All
      "--stroke-color": a,
      "--stroke-width": d,
      // Shift line and terminal on the main access to account for gaps between items
      "--main-axis-offset": "calc(-0.5 * (".concat(r, " + var(--stroke-width)))"),
      // ## Line
      // If there is a terminal, we want the line to start from next to it
      "--line-main-axis-start": WS[u]({
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
    className: zS([BS.root, HS[h], VS[e]])
  });
}
function GS(t) {
  var e = t.appearance, n = e === void 0 ? "default" : e, r = t.edge, i = t.gap, o = t.indent, s = t.type;
  return /* @__PURE__ */ Q.createElement(US, {
    edge: r,
    gap: i,
    strokeColor: Bh[n],
    type: s,
    indent: o
  });
}
const qS = 'button, a[href], input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], [role="option"], [role="radio"], [role="switch"]', KS = (t) => t instanceof HTMLElement ? !!t.closest(qS) : !1;
function JS({ drag: t, id: e, index: n, total: r, laneId: i, draggable: o = !1, showIndicator: s = !0, disabledEdges: a = [], forcedEdge: c = null, ...d }) {
  const f = W(null), u = W(null), [h, m] = F(null);
  Y0({
    ref: f,
    payload: {
      kind: t.type ?? "list-card",
      id: t.id,
      data: t.data
    }
  }), V(() => {
    if (f.current)
      return xs({
        element: f.current,
        getData: ({ input: v, element: w }) => Q0({
          type: "list-card-target",
          id: e,
          index: n,
          laneId: i
        }, {
          input: v,
          element: w,
          allowedEdges: ["top", "bottom"]
        }),
        onDragEnter: ({ self: v, source: w }) => {
          if (w?.data?.id === e) {
            m(null);
            return;
          }
          const x = Ti(v.data);
          m(x === "top" || x === "bottom" ? x : null);
        },
        onDrag: ({ self: v, source: w }) => {
          if (w?.data?.id === e) {
            m(null);
            return;
          }
          const x = Ti(v.data);
          m(x === "top" || x === "bottom" ? x : null);
        },
        onDragLeave: () => m(null),
        onDrop: () => m(null)
      });
  }, [e, n, i]);
  const p = n === 0, b = n === r - 1, y = (v) => {
    if (o && !KS(v.target)) {
      if (d.onClick) {
        d.onClick(), v.preventDefault(), v.stopPropagation();
        return;
      }
      u.current && (u.current.click(), v.preventDefault(), v.stopPropagation());
    }
  };
  return g("div", {
    ref: f,
    className: C("group relative my-1", o && "cursor-grab active:cursor-grabbing", p && "mt-1.5", b && "mb-1.5"),
    "data-kanban-card": "true",
    "data-index": n,
    "data-lane-id": i,
    onClick: y,
    children: [l(X0, {
      ...d,
      disableOverlayLink: o
    }), d.link && l(An, {
      ref: u,
      href: d.link,
      className: C("!z-1 pointer-events-none absolute inset-0 block rounded-xl", we()),
      "aria-label": d.title,
      children: " "
    }), s && (c ?? h) && l(Z, {
      children: (() => {
        const v = c ?? h;
        return a.includes(v) ? null : l(GS, {
          edge: v,
          type: "terminal-no-bleed",
          gap: "4px"
        });
      })()
    })]
  });
}
const Wl = (t, e, n, r) => {
  const i = W(null);
  return V(() => {
    if (!Ii(t) || !t.hasMore)
      return;
    const o = i.current;
    if (!o) return;
    const s = new IntersectionObserver(
      (a) => {
        a[0].isIntersecting && !e && !n && r();
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
  }, [t, n, r, e]), {
    loadingIndicatorRef: i
    // Ref to the loading indicator (that is also used as a trigger for the infinite scroll)
  };
}, YS = ({ label: t, variant: e, count: n, onPrimaryAction: r }) => {
  const i = !!r;
  return g("div", {
    className: "flex items-center gap-2 px-1 pb-0.5 pt-2",
    children: [l(an, {
      text: t,
      variant: e || "neutral"
    }), l(Lr, {
      size: "md",
      type: "default",
      value: n
    }), i && l("div", {
      className: "ml-auto flex items-center gap-1 pr-1",
      children: l(B, {
        variant: "ghost",
        size: "sm",
        label: "Add",
        icon: Ji,
        hideLabel: !0,
        onClick: r
      })
    })]
  });
}, $s = q(({ showPlaceholders: t = !0, count: e = 3 }, n) => l("div", {
  ref: n,
  className: "space-y-1",
  "aria-hidden": !t,
  children: t && Array.from({
    length: e
  }).map((r, i) => l(Dl.Skeleton, {
    compact: !0
  }, i))
}));
$s.displayName = "LoadingSkeleton";
function QS({ title: t, items: e, renderCard: n, getKey: r, emptyState: i, fetchMore: o, variant: s = "neutral", loading: a = !1, hasMore: c = !1, loadingMore: d = !1, total: f, onPrimaryAction: u, onFooterAction: h, dropPlaceholderIndex: m }) {
  const p = {
    type: "infinite-scroll",
    cursor: null,
    hasMore: c,
    total: e.length + (c ? 1 : 0),
    perPage: 3
  }, { loadingIndicatorRef: b } = Wl(p, a, d, o ?? (() => {
  })), y = !!h;
  return g("div", {
    className: "shadow-sm group relative flex h-full w-[323.2px] flex-col",
    children: [l(YS, {
      label: t || "Lane",
      variant: s,
      count: f ?? e.length,
      onPrimaryAction: u
    }), l("div", {
      className: C("relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1", (y || e.length === 0) && "pb-11", !y && e.length === 0 && m !== void 0 && "pb-1"),
      children: a ? g(ut, {
        className: C("relative h-full flex-1 rounded-lg", a && "select-none opacity-50 transition-opacity"),
        children: [l($s, {}), l(Ae, {
          children: l(U.div, {
            className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            children: l(sn, {})
          })
        })]
      }) : e.length === 0 && m === void 0 ? i : g(Z, {
        children: [l(ut, {
          className: "relative h-full flex-1",
          children: g("div", {
            className: C("relative", d && "select-none opacity-50 transition-opacity"),
            "aria-live": d ? "polite" : void 0,
            "aria-busy": d ? "true" : void 0,
            children: [e.length === 0 && m !== void 0 ? l("div", {
              className: "relative my-1 mt-1.5",
              children: l(Dl.Skeleton, {
                compact: !0
              })
            }) : e.map((v, w) => {
              const x = r(v, w);
              return l(Q.Fragment, {
                children: n(v, w)
              }, x);
            }), (d || c) && l($s, {
              ref: b
            })]
          })
        }), d && l(Ae, {
          children: l(U.div, {
            className: "absolute inset-0 m-auto flex w-10 cursor-progress items-center justify-center",
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            children: l(sn, {})
          })
        })]
      })
    }), y && l("div", {
      className: "pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
      children: l(nt, {
        variant: "ghost",
        size: "md",
        className: "w-full justify-center",
        icon: Ji,
        label: "Add",
        hideLabel: !0,
        onClick: h
      })
    })]
  });
}
function XS(t, e) {
  const n = e.find(
    (i) => i.data.type === "list-droppable" && i.data.id === t
  ), r = e.find(
    (i) => i.data.type === "list-card-target"
  );
  return n ? r && r.data ? { type: "sameLaneOverCard", laneTarget: n, cardTarget: r } : { type: "sameLaneOverEmptySpace", laneTarget: n, cardTarget: void 0 } : r && r.data ? { type: "differentLaneOverCard", laneTarget: void 0, cardTarget: r } : {
    type: "differentLaneOverEmptySpace",
    laneTarget: void 0,
    cardTarget: void 0
  };
}
function ZS(t) {
  const {
    cardTarget: e,
    fromLaneId: n,
    toLaneId: r,
    sourceId: i
  } = t, o = Number(e.data.index), s = Ti(e.data);
  return {
    fromLaneId: n,
    toLaneId: r,
    sourceId: i,
    position: s === "bottom" ? "below" : "above",
    indexOfTarget: o
  };
}
function eI(t) {
  const {
    fromLaneId: e,
    toLaneId: n,
    sourceId: r
  } = t;
  return {
    fromLaneId: e,
    toLaneId: n,
    sourceId: r,
    indexOfTarget: null,
    position: null
  };
}
function tI(t) {
  const { cardTarget: e, fromLaneId: n, toLaneId: r, sourceId: i } = t, o = Number(e.data.index), s = Ti(e.data);
  return {
    fromLaneId: n,
    toLaneId: r,
    sourceId: i,
    position: s === "bottom" ? "below" : "above",
    indexOfTarget: o
  };
}
function nI(t) {
  const { fromLaneId: e, toLaneId: n, sourceId: r } = t;
  return {
    fromLaneId: e,
    toLaneId: n,
    sourceId: r,
    indexOfTarget: null,
    position: null
  };
}
function rI({ id: t, getLaneResourceIndexById: e, onMove: n, ...r }) {
  const i = W(null), o = W(null), s = W(null), [a, c] = F(!1), [d, f] = F(null), u = !!(t && e), h = W(null), m = W(null), p = W(null), b = W(0), y = W(null), [v, w] = F(!1), [x, D] = F(null), [N, k] = F(null), [I, E] = F(!1), [T, S] = F(-1);
  return Z0(u ? {
    ref: i,
    id: t,
    accepts: ["list-card"]
  } : void 0), V(() => {
    const L = () => {
      const A = performance.now(), O = y.current ?? A, R = (A - O) / 1e3;
      y.current = A;
      const _ = m.current;
      if (!v || b.current === 0) {
        p.current != null && (window.cancelAnimationFrame(p.current), p.current = null), y.current = null;
        return;
      }
      _ && (_.scrollTop += b.current * R), p.current = window.requestAnimationFrame(L);
    };
    return p.current == null && v && b.current !== 0 && (y.current = null, p.current = window.requestAnimationFrame(L)), () => {
      p.current != null && (window.cancelAnimationFrame(p.current), p.current = null), y.current = null, b.current = 0;
    };
  }, [v]), V(() => {
    if (!t) return;
    const L = () => {
      p.current == null && b.current !== 0 && (y.current = null, p.current = window.requestAnimationFrame(() => {
        const O = performance.now();
        y.current = O, p.current = window.requestAnimationFrame(function R() {
          const _ = y.current ?? performance.now(), $ = performance.now(), K = ($ - _) / 1e3;
          y.current = $;
          const ee = m.current;
          if (!v || b.current === 0) {
            p.current != null && (window.cancelAnimationFrame(p.current), p.current = null);
            return;
          }
          ee && (ee.scrollTop += b.current * K), p.current = window.requestAnimationFrame(R);
        });
      }));
    }, A = (O) => XS(t, O);
    return ev({
      onDropTargetChange: ({ location: O, source: R }) => {
        const _ = O.current.dropTargets.some((H) => {
          const le = H.data;
          return le.type === "list-droppable" && le.id === t;
        });
        c(_);
        const $ = String(R.data.id), ee = String(R.data.data?.laneId ?? "") || String(O.initial.dropTargets.find((H) => H.data.type === "list-droppable")?.data?.id ?? ""), ae = String(ee) === String(t), J = r.items.findIndex((H, le) => String(r.getKey(H, le)) === $);
        if (_ && ae ? S(J) : (!_ || !ae) && S(-1), _ && v && r.items.length === 0 ? (E(!0), D(null), k(null)) : _ && v && r.items.length > 0 && E(!1), _ && v) {
          const H = m.current || i.current;
          if (H) {
            const le = H.getBoundingClientRect(), te = O.current.input?.clientY, re = O.current.input?.clientX;
            if (typeof te == "number" && typeof re == "number") {
              const ue = le.top + le.height / 2, j = te - ue, P = 24, Y = 300, ie = le.height / 2;
              let ce = 0;
              if (Math.abs(j) > P) {
                const De = Math.min(Math.abs(j) - P, ie) / ie;
                ce = Math.sign(j) * Y * De;
              }
              if (b.current = ce, L(), O.current.dropTargets.some((be) => be.data.type === "list-card-target"))
                (x !== null || N !== null) && (D(null), k(null));
              else {
                const be = i.current;
                if (be) {
                  const De = Array.from(be.querySelectorAll(`[data-kanban-card="true"][data-lane-id="${t}"]`));
                  if (De.length > 0) {
                    let Se = -1, Et = Number.POSITIVE_INFINITY, rt = "top";
                    for (const vn of De) {
                      const Zn = vn.getAttribute("data-index"), _o = Zn ? Number(Zn) : -1, Hr = vn.getBoundingClientRect(), Vr = Hr.top + Hr.height / 2, yn = Math.abs(te - Vr);
                      yn < Et && (Et = yn, Se = _o, rt = te < Vr ? "top" : "bottom");
                    }
                    ae && J >= 0 && (Se === J && rt === "top" || Se === J && rt === "bottom" || Se === J - 1 && rt === "bottom" || Se === J + 1 && rt === "top") ? (D(null), k(null)) : (D(Se >= 0 ? Se : null), k(Se >= 0 ? rt : null));
                  }
                }
              }
            }
          }
        } else
          b.current = 0, _ || (D(null), k(null), E(!1), S(-1));
      },
      onDrop: async ({ location: O, source: R }) => {
        c(!1), E(!1);
        const _ = String(R.data.id);
        R.data.data;
        const $ = r.items.findIndex((re, ue) => String(r.getKey(re, ue)) === _), ee = String(R.data.data?.laneId ?? "") || String(O.initial.dropTargets.find((re) => re.data.type === "list-droppable")?.data?.id ?? ""), ae = String(ee) !== String(t);
        if (!ae && $ >= 0) {
          const re = O.current.dropTargets.find((ue) => ue.data.type === "list-card-target");
          if (re) {
            const ue = re.data.index, j = re.data.closestEdge;
            if (ue !== void 0 && j) {
              let P = !1;
              if ((ue === $ || ue === $ - 1 && j === "bottom" || ue === $ + 1 && j === "top") && (P = !0), P)
                return;
            }
          }
        }
        if (!ae && x !== null && N !== null && (x === $ && N === "top" || x === $ && N === "bottom" || x === $ - 1 && N === "bottom" || x === $ + 1 && N === "top")) {
          D(null), k(null);
          return;
        }
        if (!O.current.dropTargets.some((re) => {
          const ue = re.data;
          return ue.type === "list-droppable" && ue.id === t;
        }))
          return;
        let H = null;
        const { type: le, cardTarget: te } = A(O.current.dropTargets);
        if (ae ? te && te.data ? H = tI({
          cardTarget: te,
          fromLaneId: ee,
          toLaneId: t,
          sourceId: _
        }) : x !== null && N ? H = {
          fromLaneId: ee,
          toLaneId: t,
          sourceId: _,
          indexOfTarget: x,
          position: N === "bottom" ? "below" : "above"
        } : H = nI({
          fromLaneId: ee,
          toLaneId: t,
          sourceId: _
        }) : le === "sameLaneOverCard" && te && te.data ? H = ZS({
          cardTarget: te,
          fromLaneId: ee,
          toLaneId: t,
          sourceId: _
        }) : x !== null && N ? H = {
          fromLaneId: ee,
          toLaneId: t,
          sourceId: _,
          indexOfTarget: x,
          position: N === "bottom" ? "below" : "above"
        } : H = eI({
          fromLaneId: ee,
          toLaneId: t,
          sourceId: _
        }), !!H) {
          if (!ae && H.indexOfTarget !== void 0) {
            const re = H.indexOfTarget, ue = H.position;
            if (re === $ && ue === "above" || re === $ && ue === "below" || re === $ - 1 && ue === "below" || re === $ + 1 && ue === "above")
              return;
          }
          await n?.(H), D(null), k(null);
        }
      }
    });
  }, [t, e, n, v, r.items, r.getKey, x, N]), V(() => {
    const L = () => {
      const R = i.current;
      return R ? (m.current = R.querySelector("[data-scroll-container]"), m.current) : null;
    };
    L();
    const A = i.current;
    if (!A) return;
    const O = new MutationObserver(() => {
      L();
    });
    return O.observe(A, {
      subtree: !0,
      childList: !0
    }), () => O.disconnect();
  }, [t]), Wu(({ phase: L }) => {
    L === "start" && w(!0), (L === "drop" || L === "cancel") && (w(!1), E(!1), D(null), k(null), S(-1));
  }), V(() => {
    const L = (A) => {
      if (!t) return;
      const O = A.detail;
      O && O.toLaneId === t && n?.(O).catch(() => {
      });
    };
    return window.addEventListener("kanban-test-move", L), () => window.removeEventListener("kanban-test-move", L);
  }, [t, n]), Wn(() => {
    const L = s.current, A = o.current;
    if (!L || !A) return;
    let O = null, R = null;
    const _ = () => {
      const ae = A.parentElement?.parentElement;
      if (!ae) return;
      const J = ae.offsetHeight, H = A.style.height;
      A.style.height = "auto", L.offsetHeight;
      const le = L.scrollHeight;
      A.style.height = H;
      let te;
      J < 100 ? te = Math.max(le, 400) : te = Math.min(le, J), (R === null || Math.abs(te - R) > 1) && (R = te, f(te));
    };
    _();
    const $ = () => {
      O !== null && cancelAnimationFrame(O), O = requestAnimationFrame(() => {
        _(), O = null;
      });
    }, K = new ResizeObserver($);
    K.observe(L);
    const ee = A.parentElement?.parentElement;
    return ee && K.observe(ee), () => {
      O !== null && cancelAnimationFrame(O), K.disconnect();
    };
  }, [r.items.length, r.loading, I]), l("div", {
    ref: o,
    className: "relative rounded",
    style: {
      height: d ? `${d}px` : void 0
    },
    children: g("div", {
      ref: i,
      className: "relative flex h-full w-full flex-col gap-0 rounded-xl border transition-colors",
      style: {
        backgroundColor: a ? "hsla(210, 91%, 22%, 0.08)" : "hsla(210, 91%, 22%, 0.02)"
      },
      children: [l("div", {
        ref: h,
        className: C("pointer-events-none absolute inset-0 z-[1]", "bg-transparent"),
        "aria-hidden": !0
      }), l("div", {
        ref: s,
        className: "flex h-full flex-col",
        children: l(QS, {
          ...r,
          dropPlaceholderIndex: I && r.items.length === 0 ? 0 : void 0,
          renderCard: (L, A) => {
            const O = r.renderCard(L, A);
            if (Su(O)) {
              const R = A === x ? N : null, _ = [];
              return T >= 0 && (A === T ? _.push("top", "bottom") : A === T - 1 ? _.push("bottom") : A === T + 1 && _.push("top")), Sl(O, {
                forcedEdge: R,
                disabledEdges: _
              });
            }
            return O;
          }
        })
      })]
    })
  });
}
function qc(t) {
  const { lanes: e, renderCard: n, getKey: r, className: i, dnd: o, loading: s, onCreate: a } = t, [c, d] = F(() => e), f = W(""), u = W(null);
  V(() => {
    const k = e.map((I) => `${I.id}:[${I.items.map((E, T) => r(E, T, I.id)).join(",")}]`).join("|");
    if (u.current !== null)
      if (k === u.current)
        u.current = null, f.current = k, d(e);
      else
        return;
    else k !== f.current && (f.current = k, d(e));
  }, [e, r, c]);
  const [h, m] = F(!1), p = W(null), b = W(null), y = W(null), v = W(null), w = W(0), x = W(null);
  Wu(({ phase: k }) => {
    k === "start" && m(!0), (k === "drop" || k === "cancel") && m(!1);
  }), V(() => {
    const k = () => {
      const S = performance.now(), L = x.current ?? S, A = (S - L) / 1e3;
      x.current = S;
      const O = y.current;
      if (!h || !O || w.current === 0) {
        v.current != null && (window.cancelAnimationFrame(v.current), v.current = null), x.current = null;
        return;
      }
      O.scrollLeft += w.current * A, v.current = window.requestAnimationFrame(k);
    }, I = (S) => {
      w.current = S, v.current == null && (x.current = null, v.current = window.requestAnimationFrame(k));
    }, E = () => {
      w.current = 0, v.current != null && (window.cancelAnimationFrame(v.current), v.current = null), x.current = null;
    }, T = [];
    return p.current && T.push(xs({
      element: p.current,
      getData: () => ({
        type: "board-scroll-edge",
        edge: "left"
      }),
      onDragEnter: () => I(-400),
      onDrag: () => I(-400),
      onDragLeave: () => E(),
      onDrop: () => E()
    })), b.current && T.push(xs({
      element: b.current,
      getData: () => ({
        type: "board-scroll-edge",
        edge: "right"
      }),
      onDragEnter: () => I(400),
      onDrag: () => I(400),
      onDragLeave: () => E(),
      onDrop: () => E()
    })), () => {
      T.forEach((S) => S()), E();
    };
  }, [h]);
  const D = (k, I) => {
    const E = c.find((T) => T.id === k);
    return E ? E.items.findIndex((T, S) => String(r(T, S, k)) === String(I)) : -1;
  }, N = async (k) => {
    const { fromLaneId: I, toLaneId: E, sourceId: T, indexOfTarget: S, position: L } = k, A = c;
    let O = A.findIndex((H) => H.id === I);
    const R = A.findIndex((H) => H.id === E);
    if (R === -1) return Promise.reject(new Error("Lane not found"));
    let _ = -1;
    if (O !== -1 && (_ = A[O].items.findIndex((H, le) => String(r(H, le, I)) === String(T))), _ === -1)
      for (let H = 0; H < A.length; H++) {
        const le = A[H].id, te = A[H].items.findIndex((re, ue) => String(r(re, ue, le)) === String(T));
        if (te !== -1) {
          O = H, _ = te;
          break;
        }
      }
    if (O === -1 || _ === -1)
      return Promise.resolve(void 0);
    const $ = A[O].items[_];
    let K = 0;
    S == null ? K = 0 : K = S + (L === "below" ? 1 : 0);
    const ee = I === E, ae = A.map((H, le) => {
      if (le === O && ee) {
        const te = [...H.items];
        te.splice(_, 1);
        const re = _ < K ? K - 1 : K;
        return te.splice(re, 0, $), {
          ...H,
          items: te
        };
      }
      if (le === O) {
        const te = [...H.items];
        te.splice(_, 1);
        const re = typeof H.total == "number" && !ee ? Math.max(0, H.total - 1) : H.total;
        return {
          ...H,
          items: te,
          total: re
        };
      }
      if (le === R) {
        const te = [...H.items], re = Math.max(0, Math.min(K, te.length));
        te.splice(re, 0, $);
        const ue = typeof H.total == "number" && !ee ? H.total + 1 : H.total;
        return {
          ...H,
          items: te,
          total: ue
        };
      }
      return H;
    });
    d(ae);
    const J = ae.map((H) => `${H.id}:[${H.items.map((le, te) => r(le, te, H.id)).join(",")}]`).join("|");
    u.current = J, f.current = J;
    try {
      const H = S == null ? null : A[R].items[S], le = await o?.onMove?.(I, E, $, H ? {
        record: H,
        position: L ?? "above"
      } : null);
      return le && d((te) => {
        const re = te.map((j) => {
          if (j.id !== E) return j;
          const P = [...j.items], Y = P.findIndex((ie, ce) => String(r(ie, ce, E)) === String(T));
          return Y !== -1 && P.splice(Y, 1, le), {
            ...j,
            items: P
          };
        }), ue = re.map((j) => `${j.id}:[${j.items.map((P, Y) => r(P, Y, j.id)).join(",")}]`).join("|");
        return f.current = ue, re;
      }), le;
    } catch (H) {
      throw d(A), u.current = null, H;
    }
  };
  return g("div", {
    className: C("relative h-full w-full px-4", i),
    children: [l(ut, {
      className: "relative h-full w-full [&>div>div]:h-full",
      viewportRef: y,
      children: l("div", {
        className: "relative mb-2 flex h-full items-start gap-2",
        children: c.map((k, I) => {
          const E = k.total ?? k.items.length;
          return l("div", {
            className: "relative shrink-0",
            children: l(rI, {
              id: k.id,
              getLaneResourceIndexById: k.id ? (T) => D(k.id, T) : void 0,
              onMove: N,
              title: k.title,
              items: k.items,
              getKey: (T, S) => r(T, S, k.id),
              renderCard: (T, S) => n(T, S, E, k.id),
              emptyState: k.emptyState,
              loading: s || k.loading,
              variant: k.variant,
              total: E,
              hasMore: k.hasMore,
              loadingMore: k.loadingMore,
              fetchMore: k.fetchMore,
              onPrimaryAction: a && k.id ? () => a(k.id) : void 0,
              onFooterAction: a && k.id ? () => a(k.id) : void 0
            })
          }, k.id ?? String(I));
        })
      })
    }), l("div", {
      ref: p,
      className: C("pointer-events-none absolute left-0 top-0 z-[9999] h-full w-12 select-none", h ? "pointer-events-auto" : "opacity-0"),
      "aria-hidden": !0
    }), l("div", {
      ref: b,
      className: C("pointer-events-none absolute right-0 top-0 z-[9999] h-full w-12 select-none", h ? "pointer-events-auto" : "opacity-0"),
      "aria-hidden": !0
    })]
  });
}
const iI = ({ lanes: t, title: e, description: n, avatar: r, metadata: i, onMove: o, onCreate: s, source: a, onSelectItems: c, onLoadError: d, onLoadData: f }) => {
  const { lanesProvider: u, lanesHooks: h } = OS(a, {
    onError: (A) => d(A)
  }), m = Ib();
  if (a.currentGrouping && m)
    throw new Error("Grouping is not supported in Kanban yet");
  const [p] = F(() => /* @__PURE__ */ Symbol("kanban-visualization")), b = a.idProvider, y = z(() => JSON.stringify(Object.values(h).map((A) => A.data)), [h]), v = z(() => t.map((A) => ({
    ...A,
    items: h[A.id]?.data?.records || []
  })), [y]), w = (A) => A.map(({ icon: O, tooltip: R, property: _ }) => _.type === "file" ? {
    property: _
  } : {
    icon: O,
    tooltip: R,
    property: _
  }), x = (A) => !!(A && A.type === "infinite-scroll"), D = {
    lanes: v.map((A) => {
      const O = h[A.id], R = O?.paginationInfo?.total, _ = x(O?.paginationInfo) && O?.paginationInfo?.hasMore;
      return {
        id: A.id,
        title: A.title,
        items: A.items,
        variant: A.variant,
        total: R,
        hasMore: _,
        loading: O?.isLoading || !1,
        loadingMore: O?.isLoadingMore || !1,
        fetchMore: _ ? () => O.loadMore() : void 0
      };
    }),
    loading: Object.values(h).some((A) => A.isInitialLoading),
    getKey: (A, O) => {
      if (b) return String(b(A, O));
      const R = A?.id;
      return R != null ? String(R) : String(O);
    },
    renderCard: (A, O, R, _) => {
      const $ = String(b ? b(A, O) : A?.id ?? O), K = a.selectable ? a.selectable(A) : A.id, ee = L && _ ? L.get(_) : void 0, ae = (typeof K == "string" || typeof K == "number") && ee && ee?.selectedItems.has(K), J = a.itemUrl ? a.itemUrl(A) : void 0, H = a.itemOnClick ? a.itemOnClick(A) : void 0;
      return l(JS, {
        drag: {
          id: $,
          type: "list-card",
          data: {
            ...A,
            laneId: _
          }
        },
        id: String(A.id),
        index: O,
        total: R,
        laneId: _,
        showIndicator: I,
        title: e ? e(A) : String(O),
        description: n ? n(A) : void 0,
        avatar: r ? r(A) : void 0,
        draggable: o !== void 0,
        metadata: i ? w(i(A)) : void 0,
        compact: !0,
        forceVerticalMetadata: !0,
        selectable: a.selectable !== void 0,
        selected: ae,
        onSelect: (le) => {
          ee && ee.handleSelectItemChange(A, le);
        },
        onClick: H,
        link: J
      }, $);
    },
    onCreate: s
  }, N = z(() => {
    const A = Object.values(h);
    if (A.length !== 0)
      return A.reduce((O, R) => {
        const _ = R.paginationInfo?.total ?? R.data.records.length;
        return O + (typeof _ == "number" ? _ : 0);
      }, 0);
  }, [h]), k = z(() => {
    const A = Object.values(h);
    return A.length === 0 ? !0 : A.some((O) => O.isInitialLoading);
  }, [h]);
  V(() => {
    f({
      totalItems: N,
      filters: a.currentFilters,
      search: a.currentSearch,
      isInitialLoading: k,
      data: Object.values(h).flatMap((A) => A.data.records)
    });
  }, [N, k]);
  const I = a.currentSortings === null, E = z(() => {
    const A = /* @__PURE__ */ new Map();
    return v.forEach((O) => {
      const R = /* @__PURE__ */ new Map();
      O.items.forEach((_, $) => {
        const K = b ? b(_, $) : _?.id ?? $, ee = String(K);
        R.set(ee, $);
      }), A.set(O.id, R);
    }), A;
  }, [v, b]);
  D.dnd = {
    instanceId: p,
    getIndexById: (A, O) => {
      const R = E.get(A)?.get(O) ?? -1;
      return I ? R : -1;
    },
    onMove: o
  };
  const T = z(() => t.map((A) => ({
    id: A.id,
    data: h[A.id]?.data || {
      type: "flat",
      records: [],
      groups: []
    },
    paginationInfo: h[A.id]?.paginationInfo || null
  })), [t, h]), { lanesSelectProvider: S, lanesUseSelectable: L } = MS(T, a, (A, O) => {
    c?.(A, O);
  });
  return g(Z, {
    children: [u, S, o ? l(tv, {
      driver: nv(p),
      children: l(qc, {
        ...D
      })
    }) : l(qc, {
      ...D
    })]
  });
}, Hh = ({ items: t, onOpenChange: e, align: n = "end", label: r = "Actions", className: i }) => {
  const [o, s] = F(!1);
  return !t || t.length === 0 ? null : l("div", {
    className: C("pointer-events-auto", i),
    children: l(Me, {
      align: n,
      items: t.map((a) => a.type === "separator" || a.type === "label" ? a : {
        ...a,
        type: "item"
      }),
      open: o,
      onOpenChange: (a) => {
        s(a), e?.(a);
      },
      children: l(nt, {
        icon: cr,
        label: r,
        hideLabel: !0,
        variant: "ghost",
        pressed: o
      })
    })
  });
}, Vh = ({ items: t, onOpenChange: e, className: n }) => l("div", {
  className: C(n),
  children: l(Hh, {
    label: "Mobile Actions",
    align: "end",
    items: t,
    onOpenChange: e
  })
}), Wh = ({ className: t, primaryItemActions: e, dropdownItemActions: n, handleDropDownOpenChange: r }) => g("aside", {
  className: C("items-center justify-end gap-2 md:flex", t),
  children: [e.map((i) => l(B, {
    label: i.label,
    variant: "outline",
    onClick: i.onClick,
    icon: i.icon
  }, i.label)), l(Hh, {
    align: "end",
    items: n,
    onOpenChange: r
  })]
}), Uh = ({ children: t, dropDownOpen: e, className: n }) => l("aside", {
  className: C("absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex", "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]", "via-[#F5F6F8] via-60% dark:via-[#192231]", "to-transparent to-100%", e ? "opacity-100" : "opacity-0", n),
  children: t
}), oI = (t, e) => (t && t(e) || []).filter((n) => n.type === "separator" || n.enabled === void 0 || n.enabled), sI = (t) => t ? t.indeterminate || t.selectedCount !== void 0 && t.selectedCount > 0 && !t.checked ? "indeterminate" : t.checked : !1, Kc = (t) => (t || []).map((e) => e.type === "separator" ? e : {
  ...e,
  type: "item"
}), Gh = ({
  source: t,
  item: e
}) => {
  const [n, r] = F(!1), [i, o] = F(null);
  if (!t.itemActions)
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
  const s = oI(t.itemActions, e), a = s.filter(
    (u) => u.type === "primary"
  ).slice(0, 2), c = Kc(
    s.filter(
      (u) => u.type === "separator" || !a.includes(u)
    )
  ), d = Kc([
    ...a,
    ...s.filter(
      (u) => u.type === "separator" || !a.includes(u)
    )
  ]), f = (u) => {
    if (!u) {
      o(
        setTimeout(() => {
          r(!1);
        }, 100)
      );
      return;
    }
    i && (clearTimeout(i), o(null)), r(!0);
  };
  return {
    hasItemActions: s.length > 0,
    primaryItemActions: a,
    dropdownItemActions: c,
    mobileDropdownItemActions: d,
    handleDropDownOpenChange: f,
    dropDownOpen: n,
    setDropDownOpen: r
  };
}, Xo = {
  default: "-",
  list: void 0
}, qh = (t, e, n, r) => {
  const i = e.render(t), o = n in Xo ? Xo[n] : Xo.default;
  return rv(
    i,
    {
      visualization: n,
      i18n: r
    },
    o
  );
}, lI = ({ title: t, avatar: e, description: n }) => g("article", {
  className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
  children: [e && l(Or, {
    avatar: e,
    size: "md"
  }), g("div", {
    className: "flex flex-1 flex-col gap-0.5",
    children: [l("header", {
      children: l("h3", {
        children: l(Ke, {
          className: "text-base font-medium text-f1-foreground",
          children: t
        })
      })
    }), l("aside", {
      children: n && n.length > 0 && l("div", {
        className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1",
        children: n.map((r, i) => g("div", {
          className: "flex min-w-0 gap-1",
          children: [l(Ke, {
            children: r
          }), i < n.length - 1 && l("span", {
            className: "hidden md:inline",
            children: " · "
          })]
        }, i))
      })
    })]
  })]
}), aI = ({ source: t, item: e, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: o }) => {
  const s = X(), { actions: a } = s, c = (w, x) => qh(w, x, "list", s), d = t.itemUrl ? t.itemUrl(e) : void 0, f = t.itemOnClick ? t.itemOnClick(e) : void 0, u = t.selectable ? t.selectable(e) : void 0, h = o(e), { primaryItemActions: m, dropdownItemActions: p, mobileDropdownItemActions: b, handleDropDownOpenChange: y, dropDownOpen: v } = Gh({
    source: t,
    item: e
  });
  return g("div", {
    className: C("relative flex min-h-[64px] w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:p-2 md:pl-3 md:pr-4", "group after:absolute after:inset-y-0 after:-right-px after:z-10 after:hidden after:h-full after:w-10 after:bg-gradient-to-r after:from-transparent after:via-f1-background after:via-75% after:to-f1-background after:transition-all after:content-[''] hover:after:via-[#F5F6F8] hover:after:to-[#F5F6F8] dark:hover:after:via-[#192231] dark:hover:after:to-[#192231] md:after:block hover:md:bg-f1-background-hover"),
    children: [l("div", {
      onClick: f,
      className: "pointer-events-auto absolute inset-0"
    }), g("div", {
      className: "pointer-events-none flex flex-1 flex-row items-center gap-2",
      children: [t.selectable && u !== void 0 && l("div", {
        className: "pointer-events-auto z-10 hidden items-center justify-end md:flex",
        children: l(Ni, {
          checked: n.has(u),
          onCheckedChange: (w) => r(e, w),
          title: `Select ${t.selectable(e)}`,
          hideLabel: !0
        })
      }), d && l(An, {
        href: d,
        className: "pointer-events-auto absolute inset-0 block",
        tabIndex: 0,
        onClick: f,
        children: l("span", {
          className: "sr-only",
          children: a.view
        })
      }), l(lI, {
        title: h.title,
        avatar: h.avatar,
        description: h.description
      })]
    }), l("div", {
      className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end",
      children: (i || []).filter((w) => !w.hide?.(e)).map((w) => {
        const x = c(e, w);
        return x ? l("div", {
          children: l("div", {
            className: "flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap",
            children: x
          })
        }, String(w.label)) : null;
      })
    }), t.itemActions && g(Z, {
      children: [l(Uh, {
        dropDownOpen: v,
        className: "pointer-events-auto hidden md:flex",
        children: l(Wh, {
          primaryItemActions: m,
          dropdownItemActions: p,
          handleDropDownOpenChange: y
        })
      }), l(Vh, {
        className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
        items: b,
        onOpenChange: y
      })]
    }), t.selectable && u !== void 0 && l("div", {
      className: C("pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", t.itemActions && "right-12"),
      children: l(Ni, {
        checked: n.has(u),
        onCheckedChange: (w) => r(e, w),
        title: `Select ${t.selectable(e)}`,
        hideLabel: !0
      })
    })]
  });
}, Jc = ({ source: t, items: e, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: o, isLoadingMore: s }) => l("div", {
  className: C("flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", s && "rounded-b-none"),
  children: e.map((a, c) => l(aI, {
    source: t,
    item: a,
    selectedItems: n,
    handleSelectItemChange: r,
    fields: i,
    itemDefinition: o
  }, `row-${c}`))
}), Yc = ({ source: t, fields: e, count: n = 5, isInitialLoading: r, className: i }) => l("div", {
  className: C("relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", r ? "mx-4 mt-2 rounded-t-xl" : "border-t-0", i),
  children: Array.from({
    length: n
  }).map((o, s) => g("div", {
    className: "relative flex w-full flex-col justify-between gap-4 p-3 transition-colors md:flex-row md:pl-3 md:pr-4",
    children: [g("div", {
      className: "flex flex-1 flex-row items-center gap-2",
      children: [t.selectable && l("div", {
        className: "z-10 hidden items-center justify-end md:flex",
        children: l(M, {
          className: "h-4 w-4"
        })
      }), g("article", {
        className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
        children: [l(M, {
          className: "h-8 w-8 rounded-full"
        }), g("div", {
          className: "flex flex-1 flex-col gap-1",
          children: [l("header", {
            children: l(M, {
              className: "h-5 w-32"
            })
          }), l("aside", {
            children: g("div", {
              className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-2",
              children: [l(M, {
                className: "h-4 w-20"
              }), l(M, {
                className: "h-4 w-24"
              })]
            })
          })]
        })]
      })]
    }), l("div", {
      className: "flex flex-col items-start md:flex-row md:items-center [&>div]:justify-end",
      children: e.map((a, c) => l("div", {
        children: l("div", {
          className: "flex items-center justify-center px-0 py-1 md:p-3",
          children: l(M, {
            className: "h-4 w-20"
          })
        })
      }, `skeleton-field-${c}`))
    }), t.itemActions && l("div", {
      className: "absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden",
      children: l(M, {
        className: "h-6 w-6"
      })
    }), t.selectable && l("div", {
      className: C("absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", t.itemActions && "right-12"),
      children: l(M, {
        className: "h-4 w-4"
      })
    })]
  }, `skeleton-item-${s}`))
}), cI = ({ fields: t, itemDefinition: e, source: n, onSelectItems: r, onLoadData: i, onLoadError: o, tmpFullWidth: s }) => {
  const { data: a, paginationInfo: c, setPage: d, isInitialLoading: f, isLoadingMore: u, loadMore: h } = po(n, {
    onError: (T) => {
      o(T);
    }
  });
  V(() => {
    i({
      totalItems: c?.total || a.records.length,
      filters: n.currentFilters,
      search: n.currentSearch,
      isInitialLoading: f,
      data: a.records
    });
  }, [c?.total, a.records]);
  const { isLoading: m } = n, { loadingIndicatorRef: p } = Wl(c, m, u, h), { selectedItems: b, groupAllSelectedStatus: y, handleSelectItemChange: v, handleSelectGroupChange: w } = Xi({
    data: a,
    paginationInfo: c,
    source: n,
    onSelectItems: r,
    selectionMode: "multi",
    selectedState: n.defaultSelectedItems
  }), x = n.grouping?.collapsible, D = n.grouping?.defaultOpenGroups, { openGroups: N, setGroupOpen: k } = kl(a?.type === "grouped" ? a.groups : [], D);
  if (zs({
    value: f,
    delay: 100
  }))
    return l(Yc, {
      source: n,
      fields: t,
      count: 30,
      isInitialLoading: !0
    });
  n.sortings || t.forEach((T) => {
    T.sorting && console.warn("Sorting is defined on a property but no sortings are provided in the data source");
  });
  const E = f || m && n.dataAdapter.paginationType === "pages";
  return g("div", {
    className: C("flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2", s && "px-0"),
    children: [l("div", {
      className: C("flex min-h-0 flex-1 flex-col gap-2", E && "select-none opacity-50 transition-opacity"),
      "aria-live": E ? "polite" : void 0,
      "aria-busy": E ? "true" : void 0,
      children: g("div", {
        className: "min-h-0 flex-1 overflow-auto pb-3",
        children: [a.type === "grouped" && a.groups.map((T, S) => {
          const L = T.itemCount;
          return g("div", {
            className: "flex flex-col gap-0 pt-2 first:pt-0",
            children: [l(Cl, {
              className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
              selectable: !!n.selectable,
              select: y[T.key]?.checked ? !0 : y[T.key]?.indeterminate ? "indeterminate" : !1,
              onSelectChange: (A) => w(T, A),
              showOpenChange: x,
              label: T.label,
              itemCount: L,
              open: N[T.key],
              onOpenChange: (A) => k(T.key, A)
            }, `group-header-${T.key}`), l(Ae, {
              children: (!x || N[T.key]) && l(U.div, {
                initial: {
                  height: 0,
                  opacity: 0
                },
                animate: {
                  height: "auto",
                  opacity: 1
                },
                exit: {
                  height: 0,
                  opacity: 0
                },
                transition: {
                  duration: 0.1,
                  ease: "easeInOut"
                },
                className: "mt-0.5",
                children: l(Jc, {
                  source: n,
                  items: T.records,
                  selectedItems: b,
                  handleSelectItemChange: v,
                  fields: t,
                  itemDefinition: e,
                  isLoadingMore: u && S === a.groups.length - 1
                }, `list-group-${T.key}`)
              })
            })]
          }, `group-header-${T.key}`);
        }), a?.type === "flat" && l(Jc, {
          source: n,
          items: a.records,
          selectedItems: b,
          handleSelectItemChange: v,
          fields: t,
          itemDefinition: e,
          isLoadingMore: u
        }), Ii(c) && u && l(Yc, {
          source: n,
          fields: t,
          count: 5
        }), Ii(c) && c.hasMore && l("div", {
          ref: p,
          className: "w-full",
          "aria-hidden": "true"
        })]
      })
    }), l(Vl, {
      paginationInfo: c,
      setPage: d
    })]
  });
}, dI = (t) => {
  t.setVisualizationSettings("table", {});
}, uI = () => {
  const t = {};
  for (const [e, n] of Object.entries(Pr))
    n.settings.default && (t[e] = {
      ...n.settings.default
    });
  return t;
}, Kh = $t({
  setSettings: () => {
  },
  settings: {
    visualization: {}
  },
  setVisualizationSettings: () => {
  }
}), bo = () => {
  const t = St(Kh);
  if (!t)
    throw new Error("useTableSettings must be used within a TableSettingsProvider");
  return t;
}, fI = ({ children: t }) => {
  const [e, n] = F({
    visualization: uI()
  }), r = (i, o) => {
    n(typeof o == "function" ? (s) => ({
      ...s,
      visualization: {
        ...s.visualization,
        [i]: o(s.visualization[i])
      }
    }) : (s) => ({
      ...s,
      visualization: {
        ...s.visualization,
        [i]: o
      }
    }));
  };
  return l(Kh.Provider, {
    value: {
      settings: e,
      setSettings: n,
      setVisualizationSettings: r
    },
    children: t
  });
}, Lt = (t) => t.id ?? t.label ?? "column", hI = (t) => [...t].sort((e, n) => (e.order ?? t.length) - (n.order ?? t.length)).map((e) => Lt(e)), mI = (t) => t.filter((e) => e.hidden && !e.noHiding).map((e) => Lt(e)), Jh = (t, e, n, r, i) => {
  const o = () => {
    if (!i || n?.hidden === void 0)
      return mI(t);
    if (!n.order || n.order.length === 0)
      return n.hidden;
    const h = new Set(n.order), m = t.filter(
      (p) => p.hidden && !p.noHiding && !h.has(Lt(p))
    ).map(Lt);
    return [...n.hidden, ...m];
  }, [s, a] = F(o()), [c, d] = F(
    (r && n?.order !== void 0 ? n.order : void 0) ?? hI(t)
  );
  V(() => {
    i && n?.hidden !== void 0 && a(o());
  }, [JSON.stringify(n?.hidden), i]), V(() => {
    r && n?.order !== void 0 && d(n.order);
  }, [JSON.stringify(n?.order), r]);
  const f = z(() => {
    const h = [...t], m = e || 1;
    return [
      // Frozen columns can not be hidden even if the id is in status
      // The frist column is always visible and not sortable even if frozenColumns is 0
      ...h.slice(0, m).map((p, b) => ({
        column: {
          ...p,
          id: Lt(p)
        },
        canHide: !1,
        visible: !0,
        sortable: !1,
        order: b
      })),
      // The rest of the columns are sorted and hidden using the status in colsOrder and colsHidden
      ...h.slice(m).sort((p, b) => {
        const y = c.indexOf(Lt(p)), v = c.indexOf(Lt(b)), w = y === -1 ? c.length : y, x = v === -1 ? c.length : v;
        return w - x;
      }).map((p, b) => ({
        column: {
          ...p,
          id: Lt(p)
        },
        canHide: i ? !(p.noHiding ?? !1) : !1,
        visible: !s.includes(Lt(p)),
        sortable: !!r,
        order: b + e
      }))
    ];
  }, [
    e,
    c,
    s,
    t,
    r,
    i
  ]);
  return {
    columns: z(() => f.filter((h) => h.visible).map((h) => h.column), [f]),
    columnsWithStatus: f,
    colsHidden: s,
    setColsHidden: a,
    colsOrder: c,
    setColsOrder: d
  };
}, pI = ({ item: t, onChangeVisibility: e, allowSorting: n, allowHiding: r }) => {
  const i = "flex items-center gap-2 text-medium text-sm pr-4", o = lo(), s = g("div", {
    className: i,
    children: [n && l("div", {
      className: C("flex shrink-0 items-center justify-center text-f1-icon", t.sortable && "cursor-grab"),
      style: {
        width: "20px"
      },
      onPointerDown: (a) => {
        t.sortable && o.start(a);
      },
      children: t.sortable ? l(G, {
        icon: _r,
        size: "xs"
      }) : l(G, {
        icon: Ab,
        size: "sm"
      })
    }), l("span", {
      className: C("flex-1", t.sortable ? "text-f1-foreground" : "text-f1-foreground-secondary"),
      children: l(Ke, {
        children: t.label
      })
    }), r && l(ru, {
      checked: t.visible,
      onCheckedChange: (a) => {
        e({
          ...t,
          visible: a
        });
      },
      title: t.label,
      hideLabel: !0,
      disabled: !t.canHide
    })]
  });
  return t.sortable ? l(Un, {
    value: t,
    drag: "y",
    dragElastic: 0.1,
    whileDrag: {
      scale: 1.05
    },
    dragListener: !1,
    dragControls: o,
    children: s
  }) : l("li", {
    children: s
  });
}, gI = ({ items: t, onChange: e, allowSorting: n, allowHiding: r }) => {
  const i = (s) => {
    e?.(t.map((a) => a.id === s.id ? s : a));
  };
  return l(Mn, {
    className: "flex flex-1 select-none list-none flex-col gap-2",
    values: t,
    onReorder: (s) => {
      e?.(s);
    },
    axis: "y",
    layoutScroll: !0,
    children: t.map((s) => l(pI, {
      item: s,
      onChangeVisibility: i,
      allowSorting: n,
      allowHiding: r
    }, s.id))
  });
}, bI = ({ columns: t, frozenColumns: e, allowSorting: n, allowHiding: r }) => {
  const i = X(), { settings: o, setVisualizationSettings: s } = bo(), { columnsWithStatus: a } = Jh(t, e, o.visualization.table, n, r), c = z(() => a.filter((h) => r || h.visible).map((h) => ({
    id: h.column.id,
    label: h.column.label,
    sortable: h.sortable,
    canHide: h.canHide,
    visible: h.visible
  })), [a, r]), d = (h) => {
    s("table", (m) => ({
      ...m,
      order: h.map((p) => p.id),
      hidden: h.filter((p) => !p.visible).map((p) => p.id)
    }));
  }, f = (h) => {
    d(c.map((m) => ({
      ...m,
      visible: m.canHide ? h : m.visible
    })));
  }, u = r && c.filter((h) => h.canHide).length > 1;
  return l("div", {
    className: "relative -mr-2 flex h-[200px] flex-col gap-2",
    children: g(ut, {
      className: "h-[200px]",
      children: [l(gI, {
        items: c,
        onChange: d,
        allowSorting: n,
        allowHiding: r
      }), u && g("div", {
        className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm",
        children: [l(B, {
          variant: "outline",
          size: "sm",
          label: i.collections.table.settings.showAllColumns,
          onClick: () => {
            f(!0);
          }
        }), l(B, {
          variant: "ghost",
          size: "sm",
          label: i.collections.table.settings.hideAllColumns,
          onClick: () => {
            f(!1);
          }
        })]
      })]
    })
  });
}, vI = (t) => !t.allowColumnHiding && !t.allowColumnReordering ? null : l(bI, {
  columns: t.columns,
  frozenColumns: t.frozenColumns || 0,
  allowSorting: t.allowColumnReordering ?? !1,
  allowHiding: t.allowColumnHiding ?? !1
}), Ul = Fe.forwardRef(({ className: t, ...e }, n) => l("div", {
  className: "relative w-full",
  children: l("table", {
    ref: n,
    className: C("w-full caption-bottom border-spacing-0 border-0 border-none text-base", t),
    ...e
  })
}));
Ul.displayName = "Table";
const Yh = Fe.forwardRef(({ className: t, ...e }, n) => l("thead", {
  ref: n,
  className: C("relative min-h-10 [&_tr]:hover:bg-transparent", "before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", t),
  ...e
}));
Yh.displayName = "TableHeader";
const Qh = Fe.forwardRef(({ className: t, ...e }, n) => l("tbody", {
  ref: n,
  className: C("border-0", t),
  ...e
}));
Qh.displayName = "TableBody";
const Xh = Fe.forwardRef(({ className: t, ...e }, n) => l("tfoot", {
  ref: n,
  className: C("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", t),
  ...e
}));
Xh.displayName = "TableFooter";
const Zh = Fe.forwardRef(({ className: t, ...e }, n) => l("tr", {
  ref: n,
  className: C("group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover", t),
  ...e
}));
Zh.displayName = "TableRow";
const em = Fe.forwardRef(({ className: t, ...e }, n) => l("th", {
  ref: n,
  className: C("relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6", "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover", "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent", t),
  ...e
}));
em.displayName = "TableHead";
const tm = Fe.forwardRef(({ className: t, ...e }, n) => l("td", {
  ref: n,
  className: C("relative min-h-[48px] whitespace-nowrap p-2 align-top first:pl-6 last:pr-6", "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2.5", t),
  ...e
}));
tm.displayName = "TableCell";
const yI = Fe.forwardRef(({ className: t, ...e }, n) => l("caption", {
  ref: n,
  className: C("text-muted-foreground mt-4 text-sm", t),
  ...e
}));
yI.displayName = "TableCaption";
function nm({ children: t }) {
  return l(Qh, {
    children: t
  });
}
const xI = {
  auto: void 0,
  fit: 1
}, wI = (t) => typeof t == "number", rm = (t) => wI(t) ? t : xI[t], Gl = $t(void 0);
function im() {
  const t = St(Gl);
  if (!t)
    throw new Error("useTable must be used within a TableProvider");
  return t;
}
const vo = 32, Mi = 24, mi = 18, kI = "1px", Gt = 8, om = 32, sm = 4, js = 40, CI = js - Mi, ql = ({
  depth: t,
  padding: e = 0
}) => `${t * vo + e}px`, NI = ({
  depth: t,
  isDetailedVariant: e
}) => ql({
  depth: t,
  padding: e ? -om / 2 : -sm
}), lm = (t, e) => t && e > 0, am = (t, e) => t && e, SI = (t, e) => t && e, cm = (t, e) => t && e, II = (t, e, n) => !e && cm(t, n), AI = (t, e) => t && e?.nestedVariant === "detailed", TI = ({ width: t, linkRef: e, firstCell: n, nestedRowProps: r, children: i, onClick: o }) => {
  const s = am(n, !!r?.rowWithChildren), a = lm(n, r?.depth ?? 0), c = II(n, !!r?.rowWithChildren, !!r?.tableWithChildren), d = AI(n, r), f = r?.onLoadMoreChildren, u = r?.depth ?? 0, h = a ? ql({
    depth: s ? u : u + 1
  }) : void 0;
  return l("div", {
    className: C(t !== "auto" && "overflow-hidden", "relative z-[1]", s && "flex items-center gap-2"),
    style: {
      marginLeft: f ? NI({
        depth: u + (d ? 0 : 1),
        isDetailedVariant: d
      }) : h
    },
    onClick: () => {
      e.current?.click(), o?.();
    },
    children: f ? l(Z, {
      children: l("div", {
        className: C("pointer-events-auto cursor-pointer"),
        children: l(B, {
          variant: "ghost",
          size: "md",
          icon: gs,
          label: "See more",
          onClick: (m) => {
            m.stopPropagation(), f?.();
          }
        })
      })
    }) : g(Z, {
      children: [l("div", {
        className: C("flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center", s && "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"),
        style: {
          "--chevron-parent-size": `${Mi}px`,
          "--chevron-size": `${mi}px`,
          "--spacing-factor": `${vo}px`
        },
        onClick: (m) => {
          s && (m.stopPropagation(), r?.onExpand?.());
        },
        children: s && (r?.expanded ? l(lu, {
          className: "pointer-events-none shrink-0",
          size: mi
        }) : l(au, {
          className: "pointer-events-none shrink-0",
          size: mi
        }))
      }), l("div", {
        className: C(s && "min-w-0", c && "pl-[var(--spacing-factor)]", "relative"),
        children: i
      })]
    })
  });
}, EI = (t, e) => {
  const { rowWithChildren: n, nestedVariant: r, onLoadMoreChildren: i } = e ?? {}, o = r === "detailed", s = i ? om / 2 - Gt : Mi / 2 - Gt, a = n && !i ? CI : o ? js - 6 : js, c = t !== 0 && `calc(${t}px - ${Mi + Gt}px )`;
  return {
    "--line-left": `-${2 * mi}px`,
    "--line-width": kI,
    "--horizontal-offset": `${s}px`,
    "--horizontal-left": "4px",
    "--horizontal-height": `${vo / 2}px`,
    "--connector-width": `${a}px`,
    ...c ? {
      "--line-height": c
    } : {}
  };
}, DI = "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[40px] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", _I = "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]", LI = ({ firstCell: t, nestedRowProps: e }) => {
  const n = lm(t, e?.depth ?? 0), r = SI(e?.expanded ?? !1, t), i = e === void 0 || e?.nestedVariant === "basic", o = e?.nestedVariant === "detailed", s = i || e?.rowWithChildren, a = o && e?.onLoadMoreChildren, c = n ? ql({
    depth: e?.depth ?? 0,
    padding: 0
  }) : void 0, d = e?.connectorHeight ?? 0;
  return !r && !n && !e?.rowWithChildren ? null : l("div", {
    className: C("absolute inset-0 h-full", e?.parentHasChildren && r && DI, e?.parentHasChildren && n && s && !a && _I),
    style: {
      marginLeft: c,
      ...EI(d, e)
    }
  });
};
function kt({ children: t, href: e, onClick: n, width: r = "auto", firstCell: i = !1, sticky: o, colSpan: s, className: a, loading: c = !1, nestedRowProps: d }) {
  const { isScrolled: f, isScrolledRight: u } = im(), { actions: h } = X(), m = o?.left !== void 0, p = o?.right !== void 0, b = m || p, y = o?.left, v = o?.right, w = rm(r), x = W(null), D = d?.depth ?? 0, N = d?.nestedVariant === "detailed", k = cm(i, !!d?.tableWithChildren) && {
    marginLeft: `${(D + (N ? 0 : 1)) * vo}px`
  };
  return g(tm, {
    colSpan: s,
    className: C("h-full", i && "peer font-medium", b && f && "bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:bg-f1-background before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] group-hover:before:bg-f1-background-hover", b && "sticky z-10", p && "bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:bg-f1-background before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] group-hover:before:bg-f1-background-hover", e && "cursor-pointer", a),
    style: {
      width: w,
      maxWidth: w,
      minWidth: w,
      left: y,
      right: v
    },
    children: [l(Ae, {
      children: (m && f || p && u) && l(U.div, {
        className: C("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", m && "-right-4 bg-gradient-to-r", p && "-left-4 bg-gradient-to-l"),
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 0.1
        },
        exit: {
          opacity: 0
        }
      }, "cell-shadow-gradient")
    }), i && d?.tableWithChildren && l(LI, {
      firstCell: i,
      nestedRowProps: d
    }), c && l("div", {
      style: {
        ...k
      },
      children: l(M, {
        className: "h-4 w-full"
      })
    }), !c && g(Z, {
      children: [l("div", {
        className: C("[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]", "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]", "[&:has(a)]:relative [&:has(a)]:z-[1]", "pointer-events-none h-full items-start"),
        children: am(i, !!d?.rowWithChildren) ? l(TI, {
          linkRef: x,
          firstCell: i,
          nestedRowProps: d,
          children: t
        }) : l("div", {
          className: C(r !== "auto" && "overflow-hidden", "relative z-[1]"),
          style: {
            ...k
          },
          onClick: () => {
            x.current?.click(), n?.();
          },
          children: t
        })
      }), e && l(pt, {
        ref: x,
        href: e,
        className: "pointer-events-auto absolute inset-0 !z-0 block",
        tabIndex: i ? void 0 : -1,
        children: l("span", {
          className: "sr-only",
          children: h.view
        })
      }), n && l("button", {
        type: "button",
        onClick: (I) => {
          I.stopPropagation(), n();
        },
        className: "table-cell-action-button absolute inset-0 !z-0 block",
        tabIndex: i ? void 0 : -1,
        onKeyDown: (I) => {
          (I.key === "Enter" || I.key === " ") && (I.preventDefault(), n());
        },
        children: l("span", {
          className: "sr-only",
          children: h.view
        })
      })]
    })]
  });
}
function pi({ children: t, width: e = "auto", sortState: n = "none", onSortClick: r, info: i, infoIcon: o = Qi, sticky: s, hidden: a = !1, align: c = "left", className: d }) {
  const { isScrolled: f, isScrolledRight: u } = im(), h = s?.left !== void 0, m = s?.right !== void 0, p = h || m, b = s?.left ?? 0, y = s?.right ?? 0, v = r || i, w = l(Z, {
    children: g("div", {
      className: C("flex items-center whitespace-nowrap", v && "gap-1", c === "right" && "flex-row-reverse"),
      children: [l("div", {
        className: C("truncate", e !== "auto" && "overflow-hidden"),
        children: t
      }), v && g("div", {
        className: "flex items-center",
        children: [i && l("div", {
          className: "flex h-6 w-6 items-center justify-center text-f1-foreground-secondary",
          children: l(dt, {
            label: i,
            children: l("div", {
              className: C("flex h-5 w-5 items-center justify-center rounded-xs", we()),
              tabIndex: 0,
              children: l(G, {
                icon: o,
                size: "sm"
              })
            })
          })
        }), r && l(U.button, {
          onClick: r,
          className: C("relative h-5 w-5 rounded-xs p-1 text-f1-foreground-secondary opacity-0 transition-all focus-within:opacity-100 hover:bg-f1-background-hover group-hover:opacity-100", we()),
          "aria-label": "Sort",
          whileTap: {
            scale: 0.8
          },
          transition: {
            duration: 0.1
          },
          children: g(Ae, {
            children: [l(U.div, {
              className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
              animate: {
                rotate: n === "desc" ? 0 : 180,
                x: n === "none" ? -3 : 0,
                y: n === "none" ? -1 : 0,
                scale: n === "none" ? 0.9 : 1
              },
              transition: {
                duration: 0.2,
                ease: [0.175, 0.885, 0.32, 1.275]
              },
              children: l(G, {
                icon: gs,
                size: "xs"
              })
            }, "sort-arrow"), n === "none" && l(U.div, {
              className: "absolute left-1 top-1 flex h-3 w-3 items-center justify-center",
              initial: {
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.9
              },
              animate: {
                opacity: 1,
                x: 3,
                y: 1,
                scale: 0.9
              },
              exit: {
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.9
              },
              transition: {
                duration: 0.2,
                ease: [0.175, 0.885, 0.32, 1.275]
              },
              children: l(G, {
                icon: gs,
                size: "xs"
              })
            }, "sort-arrow-secondary")]
          })
        })]
      })]
    })
  }), x = rm(e);
  return g(em, {
    className: C("group", "bg-f1-background", p && (f || u) && "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", p && "sticky", a && "after:hidden", d),
    tabIndex: s ? 0 : void 0,
    style: {
      width: x,
      maxWidth: x,
      minWidth: x,
      left: b,
      right: y
    },
    role: a ? "presentation" : void 0,
    "aria-sort": r ? n === "asc" ? "ascending" : n === "desc" ? "descending" : "none" : void 0,
    children: [l("div", {
      className: "absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"
    }), l(Ae, {
      children: (h && f || m && u) && l(U.div, {
        className: C("absolute inset-y-0 h-full w-4 from-f1-foreground-secondary to-transparent", h && "-right-4 bg-gradient-to-r", m && "-left-4 bg-gradient-to-l"),
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 0.1
        },
        exit: {
          opacity: 0
        }
      }, "shadow-gradient")
    }), !a && w]
  });
}
function dm({ children: t, sticky: e = !1 }) {
  return l(Yh, {
    className: C(e && "sticky top-0 z-20"),
    children: t
  });
}
const qt = q(({ children: t, selected: e, className: n, sticky: r }, i) => l(Zh, {
  ref: i,
  className: C(e && "bg-f1-background-selected hover:bg-f1-background-selected", n, "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']", "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring", "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring", r && "hover:bg-f1-background-hover! sticky top-10 z-50 bg-f1-background"),
  children: t
}));
qt.displayName = "TableRow";
function OI({ children: t, loading: e = !1 }) {
  const [n, r] = F(!1), [i, o] = F(!1), s = W(null);
  return V(() => {
    const a = s.current;
    if (!a) return;
    const c = () => {
      r(a.scrollLeft > 0), o(a.scrollWidth - a.scrollLeft - a.clientWidth > 0);
    };
    return c(), a.addEventListener("scroll", c), () => {
      a.removeEventListener("scroll", c);
    };
  }, []), l(Gl.Provider, {
    value: {
      isScrolled: n,
      setIsScrolled: r,
      isScrolledRight: i,
      setIsScrolledRight: o
    },
    children: g("div", {
      ref: s,
      className: "relative h-full w-full overflow-auto",
      children: [l(Ul, {
        className: C(e && "select-none opacity-50 transition-opacity"),
        "aria-live": e ? "polite" : void 0,
        "aria-busy": e ? "true" : void 0,
        children: t
      }), l(Ae, {
        children: e && l(U.div, {
          className: "absolute inset-0 flex cursor-progress items-center justify-center",
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          children: l(sn, {})
        })
      })]
    })
  });
}
function RI({ columns: t = 5 }) {
  return l(Gl.Provider, {
    value: {
      isScrolled: !1,
      setIsScrolled: () => {
      },
      isScrolledRight: !1,
      setIsScrolledRight: () => {
      }
    },
    children: g(Ul, {
      className: "cursor-progress",
      role: "presentation",
      "aria-hidden": "true",
      children: [l(dm, {
        children: l(qt, {
          children: Array.from({
            length: t
          }).map((e, n) => l(pi, {
            children: l(M, {
              className: "h-4 w-[80px]"
            })
          }, `skeleton-header-${n}`))
        })
      }), l(nm, {
        children: Array.from({
          length: 5
        }).map((e, n) => l(qt, {
          children: Array.from({
            length: t
          }).map((r, i) => l(kt, {
            children: l(M, {
              className: "h-4 w-[80px]"
            })
          }, `skeleton-cell-${n}-${i}`))
        }, `skeleton-row-${n}`))
      })]
    })
  });
}
const Qc = Ne(OI, RI);
function FI({ children: t }) {
  return l(Xh, {
    className: C("bg-f1-background-default sticky bottom-0 z-10 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"),
    children: t
  });
}
const um = (t, e, n) => {
  const r = n ? 52 : 0;
  return {
    getStickyPosition: ne(
      (o) => o < t && e.length > 1 ? {
        left: e.slice(0, Math.max(0, o)).reduce(
          (s, a) => s + (a.width ?? 0),
          r
        )
      } : void 0,
      [t, e, r]
    ),
    checkColumnWidth: r
  };
}, MI = (t, e) => {
  const [n, r] = F(null), [i, o] = F(null), [s, a] = F(0), c = W(null), d = W(null), f = ne(
    (h) => {
      c.current = h, h && r(h);
    },
    [r]
  ), u = ne(
    (h) => {
      d.current = h, h && o(h);
    },
    [o]
  );
  return Wn(() => {
    const h = n?.previousElementSibling;
    if (!n || !h) {
      a(0);
      return;
    }
    const m = !i || i.getBoundingClientRect().top === 0, p = () => m ? (n.getBoundingClientRect().top ?? 0) - Gt / 2 : (i?.getBoundingClientRect().top ?? 0) - Gt / 2, b = () => m ? n.getBoundingClientRect().bottom - Gt : (i?.getBoundingClientRect().bottom ?? 0) - Gt, y = () => n.getBoundingClientRect().top ?? 0 - Gt, v = () => h.getBoundingClientRect().height, w = () => e && t === "basic" ? sm : 0, x = () => {
      const E = (t === "basic" ? p() : b()) - y() + v() + w();
      a(E);
    };
    x();
    const D = new MutationObserver(() => {
      x();
    }), N = n.parentElement;
    N && D.observe(N, {
      childList: !0,
      subtree: !0,
      attributes: !0
    });
    const k = new ResizeObserver(() => {
      x();
    });
    return k.observe(n), i && k.observe(i), () => {
      D.disconnect(), k.disconnect();
    };
  }, [n, i, t]), { setFirstChildRef: f, setLastChildRef: u, calculatedHeight: s };
}, fm = $t(void 0), PI = ({ children: t }) => {
  const [e, n] = F({}), r = ne((o, s) => {
    n((a) => ({
      ...a,
      [o]: s
    }));
  }, []), i = ne(() => {
    n({});
  }, []);
  return l(fm.Provider, {
    value: {
      fetchedData: e,
      updateFetchedData: r,
      clearFetchedData: i
    },
    children: t
  });
}, zI = () => {
  const t = St(fm);
  if (!t)
    throw new Error("useNestedDataContext must be used within NestedDataProvider");
  return t;
}, $I = (t) => t ? typeof t == "object" && "type" in t && t.type === "detailed" : !1, Xc = (t) => t ? Array.isArray(t) ? t : t.records : [], Zc = (t) => t && $I(t) ? t?.type ?? "basic" : "basic", jI = ({
  rowId: t,
  item: e,
  source: n,
  onClearFetchedData: r
}) => {
  const {
    fetchedData: i,
    updateFetchedData: o,
    clearFetchedData: s
  } = zI(), [a, c] = F(
    Xc(i?.[t])
  ), [d, f] = F(i?.[t]?.paginationInfo), [u, h] = F(!1), [m, p] = F(
    Zc(i?.[t])
  ), b = W(n.currentFilters), y = W(n.currentSortings), v = W(n.currentNavigationFilters);
  V(() => {
    const N = b.current !== n.currentFilters, k = y.current !== n.currentSortings, I = v.current !== n.currentNavigationFilters;
    (N || k || I) && (c([]), f(void 0), p("basic"), s(), r(), b.current = n.currentFilters, y.current = n.currentSortings, v.current = n.currentNavigationFilters);
  }, [
    n.currentFilters,
    n.currentSortings,
    n.currentNavigationFilters,
    s,
    r
  ]);
  const w = W(), x = ne(
    (N) => {
      const k = Xc(N), I = [...a, ...k];
      c(I);
      const E = {
        records: I,
        type: N?.type,
        paginationInfo: N?.paginationInfo
      };
      return o(t, E), p(Zc(N)), f(N?.paginationInfo), k;
    },
    [a, t, o]
  ), D = ne(() => {
    if (a.length > 0 && !d?.hasMore) return a;
    w.current?.unsubscribe(), h(!0);
    const N = n.fetchChildren?.({
      item: e,
      filters: n.currentFilters,
      pagination: d,
      sortings: n.currentSortings
    });
    if (!N)
      return h(!1), [];
    if (!("then" in N) && !("subscribe" in N)) {
      const I = x(N);
      return h(!1), I;
    }
    const k = "subscribe" in N ? N : Tb(N);
    return w.current = k.subscribe({
      next: (I) => {
        I.loading ? h(!0) : I.error ? h(!1) : I.data && (x(I.data), h(!1));
      },
      error: (I) => {
        h(!1), console.error("Error loading children:", I);
      },
      complete: () => {
        w.current = void 0;
      }
    }), [];
  }, [a, e, n, d, x]);
  return V(() => () => {
    w.current?.unsubscribe();
  }, []), {
    children: a,
    loadChildren: D,
    isLoading: u,
    childrenType: m,
    paginationInfo: d
  };
}, BI = (t, e) => {
  const n = W(null), r = t.rowRef?.current;
  Wn(() => {
    if (n.current && r) {
      const a = t.rowRef?.current?.getBoundingClientRect().height;
      n.current.style.height = `${a}px`;
    }
  }, [r, t.rowRef]);
  const i = (a) => {
    n.current = a, typeof e == "function" && e(a);
  }, o = t.nestedRowProps?.depth ?? 0, s = t.columns.map((a) => ({
    ...a,
    render: () => ""
  }));
  return l(zn, {
    ...t,
    columns: s,
    ref: i,
    noBorder: o > 0,
    nestedRowProps: {
      ...t.nestedRowProps,
      depth: o + 1,
      hasLoadedChildren: !1,
      onLoadMoreChildren: t.onLoadMoreChildren
    }
  });
}, HI = q(BI), VI = 5, WI = ({ rowRef: t, rowIndex: e, source: n, item: r, columns: i, frozenColumnsLeft: o, nestedRowProps: s, groupIndex: a, onCheckedChange: c, selectedItems: d, checkColumnWidth: f, tableWithChildren: u, shouldHideBorder: h }, m) => {
  const p = W(null), b = t?.current;
  Wn(() => {
    if (p.current && b) {
      const w = t.current.getBoundingClientRect().height;
      p.current.style.height = `${w}px`;
    }
  }, [b, t]);
  const y = s?.depth ?? 0, v = (w) => {
    p.current = w, typeof m == "function" && m(w);
  };
  return l(zn, {
    source: {
      ...n,
      itemsWithChildren: () => !1
    },
    item: r,
    index: e,
    frozenColumnsLeft: o,
    columns: i,
    noBorder: h ?? !1,
    groupIndex: a,
    onCheckedChange: c,
    selectedItems: d,
    checkColumnWidth: f,
    loading: !0,
    ref: v,
    nestedRowProps: {
      ...s,
      depth: s?.parentHasChildren ? y + 1 : y,
      hasLoadedChildren: !1,
      expanded: !1
    },
    tableWithChildren: u
  }, `row-loading-${e}`);
}, UI = q(WI), GI = ({ rowRef: t, ...e }, n) => {
  const r = e.source.childrenCount?.({
    item: e.item,
    pagination: e.paginationInfo
  }), i = e.paginationInfo ? e.paginationInfo.total ? Math.min(e.paginationInfo.perPage, e.paginationInfo.total - e.paginationInfo.currentPage * e.paginationInfo.perPage) : e.paginationInfo.perPage : void 0, o = r ?? i ?? VI;
  return l(Z, {
    children: Array.from({
      length: o
    }).map((s, a) => {
      const d = !(a === o - 1) || e.shouldHideBorder;
      return l(UI, {
        ref: n,
        rowRef: t,
        rowIndex: a,
        ...e,
        shouldHideBorder: d
      }, `row-loading-${a}`);
    })
  });
}, qI = q(GI), KI = (t, e) => {
  const [n, r] = F(!1), i = W(null), o = `${t.nestedRowProps?.depth ?? 0}-${"id" in t.item ? t.item.id : t.index}`, { children: s, loadChildren: a, isLoading: c, childrenType: d, paginationInfo: f } = jI({
    rowId: o,
    item: t.item,
    source: t.source,
    onClearFetchedData: () => r(!1)
  }), u = n && c, h = n, m = n && f?.hasMore, { calculatedHeight: p, setFirstChildRef: b, setLastChildRef: y } = MI(d, !!m), v = ne((I) => {
    i.current = I, typeof e == "function" && e(I);
  }, [e]), w = () => {
    const I = !n;
    r(I), I && !s.length && a();
  }, x = {
    depth: t.nestedRowProps?.depth ?? 0,
    expanded: n,
    onExpand: w,
    nestedVariant: d,
    connectorHeight: p
  }, D = (t.nestedRowProps?.depth ?? 0) === 0, N = (t.nestedRowProps?.isLastChild || D) ?? !1, k = n || !N;
  return g(Z, {
    children: [l(zn, {
      ...t,
      disableHover: !t.source.itemOnClick,
      noBorder: k,
      ref: v,
      nestedRowProps: {
        ...x,
        parentHasChildren: t.nestedRowProps?.parentHasChildren ?? s.length > 0,
        hasLoadedChildren: !1,
        isLastChild: N
      },
      tableWithChildren: t.tableWithChildren
    }), h && s.map((I, E) => {
      const T = I, S = t.source.itemsWithChildren?.(T), L = E === 0, A = E === s.length - 1, O = (t.nestedRowProps?.depth ?? 0) + 1, R = () => {
        if (L)
          return ($) => {
            b($);
          };
        if (A && !m)
          return ($) => {
            y($);
          };
      }, _ = A && N && !m;
      if (S)
        return Ta(hm, {
          ...t,
          key: `nested-row-${t.groupIndex}-${I.id}-${t.index}-${E}`,
          index: E,
          item: T,
          tableWithChildren: t.tableWithChildren,
          ref: R(),
          nestedRowProps: {
            ...t.nestedRowProps,
            parentHasChildren: !0,
            depth: O,
            isLastChild: _
          }
        });
      {
        const $ = !_;
        return Ta(zn, {
          ...t,
          key: `row-${t.groupIndex}-${t.index}-${E}`,
          index: E,
          item: T,
          noBorder: $,
          ref: R(),
          nestedRowProps: {
            ...t.nestedRowProps,
            depth: (t.nestedRowProps?.depth ?? 0) + 1,
            parentHasChildren: !0,
            nestedVariant: d,
            onExpand: w,
            isLastChild: _
          },
          tableWithChildren: t.tableWithChildren
        });
      }
    }), u && l(qI, {
      ...t,
      rowRef: i,
      nestedRowProps: {
        ...x,
        parentHasChildren: s.length > 0
      },
      paginationInfo: f,
      ref: y,
      shouldHideBorder: !N
    }), m && !c && l(HI, {
      ...t,
      disableHover: !0,
      rowRef: i,
      onLoadMoreChildren: a,
      ref: y,
      nestedRowProps: {
        ...t.nestedRowProps,
        parentHasChildren: !0,
        nestedVariant: d
      }
    })]
  });
}, JI = (t, e) => (t.nestedRowProps?.depth ?? 0) === 0 ? l(PI, {
  children: l(ed, {
    ...t,
    ref: e
  })
}) : l(ed, {
  ...t,
  ref: e
}), ed = q(KI), hm = q(JI), YI = ({ source: t, item: e, onCheckedChange: n, selectedItems: r, columns: i, frozenColumnsLeft: o, checkColumnWidth: s, index: a, groupIndex: c, noBorder: d = !1, loading: f = !1, nestedRowProps: u, tableWithChildren: h, disableHover: m = !1 }, p) => {
  const b = t.itemUrl ? t.itemUrl(e) : void 0, y = t.itemOnClick ? t.itemOnClick(e) : void 0, v = t.selectable ? t.selectable(e) : void 0, w = !!t.itemsWithChildren?.(e), x = X(), D = (R, _) => qh(R, _, "table", x), N = `table-row-${c}-${a}`, { getStickyPosition: k } = um(o, i, !!t.selectable), { hasItemActions: I, primaryItemActions: E, dropdownItemActions: T, mobileDropdownItemActions: S, handleDropDownOpenChange: L, dropDownOpen: A } = Gh({
    source: t,
    item: e
  }), O = u?.hasLoadedChildren === void 0 || u?.hasLoadedChildren;
  return w && O ? l(hm, {
    source: t,
    item: e,
    onCheckedChange: n,
    selectedItems: r,
    columns: i,
    frozenColumnsLeft: o,
    checkColumnWidth: s,
    index: a,
    groupIndex: c,
    nestedRowProps: u,
    tableWithChildren: h
  }, N) : g(qt, {
    ref: p,
    className: C("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", d && "after:bg-white-100", m && "hover:bg-transparent"),
    children: [t.selectable && l(kt, {
      width: s,
      sticky: {
        left: 0
      },
      loading: f,
      children: v !== void 0 && l("div", {
        className: "pointer-events-auto flex items-center justify-end",
        children: l(xl, {
          checked: r.has(v),
          onCheckedChange: n,
          title: `Select ${t.selectable(e)}`,
          hideLabel: !0
        })
      })
    }), i.map((R, _) => l(kt, {
      firstCell: _ === 0,
      href: b,
      onClick: y,
      width: R.width,
      sticky: k(_),
      loading: f,
      nestedRowProps: {
        ...u,
        rowWithChildren: w,
        tableWithChildren: h
      },
      children: l("div", {
        className: C(R.align === "right" ? "justify-end" : "", "flex"),
        children: D(e, R)
      })
    }, `table-cell-${c}-${a}-${_}`)), I && !f && !u?.onLoadMoreChildren && g(Z, {
      children: [l("td", {
        className: "sticky right-0 top-0 z-10 hidden md:table-cell",
        children: l(Uh, {
          dropDownOpen: A,
          children: l(Wh, {
            primaryItemActions: E,
            dropdownItemActions: T,
            handleDropDownOpenChange: L
          })
        })
      }), l(kt, {
        width: 68,
        sticky: {
          right: 0
        },
        href: b,
        className: "table-cell md:hidden",
        loading: f,
        children: l(Vh, {
          items: S,
          onOpenChange: L
        })
      }, `table-cell-${c}-${a}-actions`)]
    })]
  }, N);
}, zn = q(YI), QI = ({ columns: t, source: e, frozenColumns: n = 0, onSelectItems: r, onLoadData: i, onLoadError: o, allowColumnHiding: s, allowColumnReordering: a }) => {
  const c = X(), [d] = F(() => U.create(zn)), { settings: f } = bo(), { columns: u } = Jh(t, n, f.visualization?.table, a, s), { data: h, paginationInfo: m, setPage: p, isInitialLoading: b, isLoadingMore: y, loadMore: v, summaries: w } = po(e, {
    onError: (j) => {
      o(j);
    }
  }), { currentSortings: x, setCurrentSortings: D, isLoading: N } = e, { loadingIndicatorRef: k } = Wl(m, N, y, v);
  V(() => {
    i({
      totalItems: m?.total || h.records.length,
      filters: e.currentFilters,
      search: e.currentSearch,
      isInitialLoading: b,
      data: h.records
    });
  }, [m?.total, h.records]);
  const I = z(() => n, [n]), E = (j, P) => "id" in j && j.id !== void 0 && j.id !== null ? `id:${String(j.id)}` : `index:${String(P)}`, { selectedItems: T, allSelectedStatus: S, groupAllSelectedStatus: L, handleSelectItemChange: A, handleSelectAll: O, handleSelectGroupChange: R } = Xi({
    data: h,
    paginationInfo: m,
    source: e,
    onSelectItems: r,
    selectionMode: "multi",
    selectedState: e.defaultSelectedItems
  }), _ = z(() => !w || !e.summaries ? null : {
    data: w,
    sticky: !0,
    label: e.summaries?.label
  }, [w, e.summaries]), $ = (j, P, Y) => {
    if (!(!j || !P))
      return Y === null ? "none" : Y.field === j ? Y.order : "none";
  }, K = (j) => {
    D(() => !x || x.field !== j ? {
      field: j,
      order: "asc"
    } : x.order === "asc" ? {
      field: j,
      order: "desc"
    } : null);
  }, ee = e.grouping?.collapsible, ae = e.grouping?.defaultOpenGroups, { openGroups: J, setGroupOpen: H } = kl(h?.type === "grouped" ? h.groups : [], ae), le = u.length + (e.itemActions ? 1 : 0) + (e.selectable ? 1 : 0), { getStickyPosition: te, checkColumnWidth: re } = um(I, u, !!e.selectable), ue = h?.records.some((j) => e.itemsWithChildren?.(j));
  return b ? l(Qc.Skeleton, {
    columns: le
  }) : (e.sortings || u.forEach((j) => {
    j.sorting && console.warn("Sorting is defined on a column but no sortings are provided in the data source");
  }), g("div", {
    className: "flex h-full min-h-0 flex-col gap-4",
    children: [g(Qc, {
      loading: N,
      children: [l(dm, {
        sticky: !0,
        children: g(qt, {
          children: [e.selectable && l(pi, {
            width: re,
            sticky: {
              left: 0
            },
            align: "right",
            children: l("div", {
              className: "flex w-full items-center justify-end",
              children: l(Ni, {
                checked: S.selectedCount > 0 || S.checked,
                indeterminate: S.indeterminate || S.selectedCount > 0 && !S.checked,
                onCheckedChange: O,
                title: c.actions.selectAll,
                hideLabel: !0,
                disabled: h?.records.length === 0
              })
            })
          }), u.map(({ sorting: j, label: P, ...Y }, ie) => l(pi, {
            sortState: $(j, e.sortings, x),
            width: Y.width,
            align: Y.align,
            sticky: te(ie),
            ...Y,
            hidden: !1,
            onSortClick: j ? () => {
              j && K(j);
            } : void 0,
            children: P
          }, `table-head-${ie}`)), e.itemActions && g(Z, {
            children: [l("th", {}), l(pi, {
              width: 68,
              hidden: !0,
              sticky: {
                right: 0
              },
              className: "table-cell md:hidden",
              children: c.collections.actions.actions
            }, "actions")]
          })]
        })
      }), g(nm, {
        children: [h?.type === "grouped" && h.groups.map((j, P) => {
          const Y = j.itemCount;
          return g(ln, {
            children: [g(qt, {
              sticky: !0,
              children: [l(kt, {
                sticky: {
                  left: 0
                },
                colSpan: (I || 1) + (e.selectable ? 1 : 0),
                children: l(Cl, {
                  className: "px-3",
                  selectable: !!e.selectable,
                  select: sI(L[j.key]),
                  onSelectChange: (ie) => R(j, ie),
                  showOpenChange: ee,
                  label: j.label,
                  itemCount: Y,
                  open: J[j.key],
                  onOpenChange: (ie) => H(j.key, ie)
                })
              }), l(kt, {
                colSpan: u.length - (I || 1) + (e.selectable ? 1 : 0),
                children: " "
              })]
            }, `group-header-${j.key}`), l(Ae, {
              children: d && (!ee || J[j.key]) && j.records.map((ie, ce) => l(d, {
                variants: wu(),
                initial: ee ? "hidden" : "visible",
                animate: "visible",
                exit: "hidden",
                custom: ce,
                layout: !0,
                source: e,
                item: ie,
                index: ce,
                groupIndex: P,
                onCheckedChange: (ve) => A(ie, ve),
                selectedItems: T,
                columns: u,
                frozenColumnsLeft: I,
                checkColumnWidth: re
              }, `row-${P}-${E(ie, ce)}`))
            }, `group-animate-${P}`)]
          }, `group-${j.key}`);
        }), h?.type === "flat" && h.records.map((j, P) => l(zn, {
          groupIndex: 0,
          source: e,
          item: j,
          index: P,
          onCheckedChange: (Y) => A(j, Y),
          selectedItems: T,
          columns: u,
          frozenColumnsLeft: I,
          checkColumnWidth: re,
          tableWithChildren: ue
        }, `row-${E(j, P)}`)), m?.type === "infinite-scroll" && y && Array.from({
          length: 5
        }).map((j, P) => l(qt, {
          children: Array.from({
            length: le
          }).map((Y, ie) => l(kt, {
            children: l(M, {
              className: "h-4 w-full"
            })
          }, `skeleton-cell-${P}-${ie}`))
        }, `skeleton-row-${P}`)), Ii(m) && m.hasMore && l("tr", {
          children: l("td", {
            colSpan: u.length + (e.selectable ? 1 : 0) + 1,
            ref: k,
            className: "h-10",
            "aria-hidden": "true"
          })
        })]
      }), _ && l(FI, {
        children: g(qt, {
          className: C(_.sticky && "sticky bottom-0 z-10 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background", "font-medium"),
          children: [e.selectable && l(kt, {
            width: re,
            sticky: {
              left: 0
            },
            children: _.label && l("div", {
              className: "font-medium text-f1-foreground-secondary",
              children: _.label
            })
          }), u.map((j, P) => l(kt, {
            firstCell: P === 0,
            width: j.width,
            sticky: te(P),
            children: P === 0 && !e.selectable && _.label ? l("div", {
              className: "font-medium text-f1-foreground-secondary",
              children: _.label
            }) : l("div", {
              className: C(j.align === "right" ? "justify-end" : "", "flex"),
              children: j.summary && e.summaries && e.summaries[j.summary]?.type === "sum" ? g("div", {
                className: "flex gap-1",
                children: [l("span", {
                  className: "text-f1-foreground-secondary",
                  children: c.collections.summaries.types.sum
                }), `${_.data[j.summary]}`]
              }) : "-"
            })
          }, `summary-${String(j.label)}`)), e.itemActions && g(Z, {
            children: [l("th", {
              className: "hidden md:table-cell"
            }), l(kt, {
              width: 68,
              sticky: {
                right: 0
              },
              className: "table-cell md:hidden",
              children: ""
            }, "summary-actions")]
          })]
        })
      })]
    }), l(Vl, {
      paginationInfo: m,
      setPage: p,
      className: "pb-4"
    })]
  }));
}, Pr = {
  table: {
    name: "Table",
    icon: Eb,
    render: (t) => l(QI, {
      ...t
    }),
    settings: {
      renderer: vI,
      resetHandler: dI,
      default: {}
    }
  },
  list: {
    name: "List",
    icon: hl,
    settings: {
      default: {}
    },
    render: (t) => l(cI, {
      ...t
    })
  },
  card: {
    name: "Card",
    icon: Na,
    settings: {
      default: {}
    },
    render: (t) => l(DS, {
      ...t
    })
  },
  kanban: {
    name: "Kanban",
    icon: Na,
    settings: {
      default: {}
    },
    render: (t) => l(iI, {
      ...t
    })
  }
}, XI = ({ visualization: t, source: e, onSelectItems: n, onLoadData: r, onLoadError: i, tmpFullWidth: o }) => {
  if (t.type === "custom")
    return t.component({
      source: e,
      onLoadData: r,
      onLoadError: i,
      onSelectItems: n
    });
  const s = Pr[t.type];
  if (!s)
    throw new Error(`Visualization type ${t.type} not found`);
  return s.render({
    source: e,
    ...t.options,
    onSelectItems: n,
    onLoadData: r,
    onLoadError: i,
    tmpFullWidth: o
  });
}, ti = "__no-sorting__", ZI = ({ currentSortings: t, sortings: e, onChange: n }) => {
  const r = X(), i = [{
    label: r.collections.sorting.noSorting,
    value: ti
  }, ...Object.entries(e || {}).map(([c, d]) => ({
    label: d.label,
    value: c
  }))], [o, s] = F(t);
  V(() => {
    s(t || {
      field: ti,
      order: "asc"
    });
  }, [JSON.stringify(t)]);
  const a = (c) => {
    !c || c.field === ti ? n(null) : n(c);
  };
  return l("div", {
    className: "flex flex-col",
    children: g("div", {
      className: "flex items-end gap-2",
      children: [l("div", {
        className: "shrink grow [&_button]:h-8 [&_button]:rounded",
        children: l(dr, {
          label: r.collections.sorting.sortBy,
          options: i,
          value: o?.field,
          onChange: (c) => {
            a({
              field: c,
              order: o?.order ?? "asc"
            });
          }
        })
      }), o?.field !== ti && l("div", {
        children: l(B, {
          hideLabel: !0,
          label: r.collections.sorting.toggleDirection,
          variant: "outline",
          icon: o?.order === "asc" ? Db : _b,
          onClick: () => a({
            field: o?.field,
            order: o?.order === "asc" ? "desc" : "asc"
          })
        })
      })]
    })
  });
}, eA = ({ visualizations: t, currentVisualization: e, onVisualizationChange: n }) => {
  const r = X(), i = (s) => {
    n(s);
  }, o = (s) => s.type === "custom" ? {
    icon: s.icon,
    label: s.label
  } : {
    icon: Pr[s.type].icon,
    label: r.collections.visualizations[s.type]
  };
  return l("div", {
    className: "grid grid-cols-2 p-2",
    children: t.map((s, a) => {
      const { icon: c, label: d } = o(s);
      return g("button", {
        className: C("flex w-full flex-col items-center justify-center gap-1 rounded-sm p-2 font-medium text-f1-foreground-secondary transition-colors", e === a && "bg-f1-background-secondary text-f1-foreground", we()),
        onClick: () => i(a),
        children: [l(G, {
          icon: c
        }), d]
      }, s.type);
    })
  });
}, tA = (t) => {
  if (t === "custom")
    return null;
  const e = Pr[t];
  if (!e)
    throw new Error(`Visualization type ${t} not found`);
  return e;
}, mm = (t) => tA(t.type)?.settings.renderer ?? null, nA = (t) => {
  if (t.type === "custom")
    return !1;
  const e = mm(t);
  return e ? e(t.options) !== null : !1;
}, rA = ({ visualization: t }) => {
  if (t.type === "custom")
    return null;
  const e = mm(t);
  return e ? e(t.options) : null;
}, iA = ({ visualizations: t, currentVisualization: e, onVisualizationChange: n, grouping: r, currentGrouping: i, onGroupingChange: o, sortings: s, currentSortings: a, onSortingsChange: c }) => {
  const d = X(), f = r ? Object.keys(r.groupBy).length + (r.mandatory ? 1 : 0) : 0, [u, h] = F(!1), m = (E) => {
    h(!1), n(E);
  }, p = (E) => {
    o(E);
  }, b = t && t.length > 1, y = r && f > 0, v = s && Object.keys(s).length > 0, w = z(() => t[e], [e, t?.[e]]), x = z(() => l(rA, {
    visualization: w
  }, "visualization-settings"), [w]), D = z(() => nA(w), [w]), N = z(() => {
    const E = t[e]?.type;
    if (!E) return "-";
    const T = d.collections.visualizations[E] ?? "-";
    return d.collections.visualizations.settings.replace("{{visualizationName}}", T);
  }, [e]), k = bo(), I = () => {
    Object.values(Pr).forEach((E) => {
      E.settings.resetHandler?.(k);
    });
  };
  return l("div", {
    className: "flex gap-2",
    children: g(bl, {
      open: u,
      onOpenChange: h,
      children: [l(vl, {
        asChild: !0,
        onClick: () => h(!u),
        children: l(nt, {
          variant: "outline",
          label: "Settings",
          icon: Lb,
          onClick: () => {
          },
          hideLabel: !0,
          compact: !0,
          pressed: u,
          "aria-controls": u ? "settings" : void 0
        })
      }), l(yl, {
        className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
        align: "end",
        sideOffset: 8,
        children: [b && l(eA, {
          visualizations: t,
          currentVisualization: e,
          onVisualizationChange: m
        }, "visualization"), y && !r?.hideSelector && !(r.mandatory && Object.entries(r.groupBy).length < 2) && l("div", {
          className: "p-3",
          children: l(Ob, {
            grouping: r,
            currentGrouping: i,
            onGroupingChange: p
          }, "grouping")
        }), v && l("div", {
          className: "p-3",
          children: l(ZI, {
            currentSortings: a,
            onChange: c,
            sortings: s
          }, "sorting")
        }), D && g("section", {
          className: "p-3 pb-0",
          children: [l("h3", {
            className: "mb-2 text-sm font-medium text-f1-foreground-secondary",
            children: N
          }), x]
        }, "visualization-settings"), l("section", {
          className: "border-0 border-t border-solid border-t-f1-border p-3",
          children: l(B, {
            size: "sm",
            variant: "ghost",
            icon: Rb,
            label: d.collections.visualizations.reset,
            onClick: I
          })
        }, "reset")].filter(Boolean)
      })]
    })
  });
}, oA = ({ source: t, visualizations: e, onSelectItems: n, onBulkAction: r, onStateChange: i, emptyStates: o, fullHeight: s, storage: a, id: c, tmpFullWidth: d }) => {
  const { filters: f, currentFilters: u, setCurrentFilters: h, presets: m, presetsLoading: p, currentNavigationFilters: b, navigationFilters: y, setCurrentNavigationFilters: v, search: w, currentSearch: x, setCurrentSearch: D, isLoading: N, primaryActions: k, secondaryActions: I, totalItemSummary: E, currentGrouping: T, setCurrentGrouping: S, grouping: L, currentSortings: A, setCurrentSortings: O, sortings: R } = t, [_, $] = F(0), K = W(A), { emitSortingChange: ee } = Fb({
    defaultSorting: K.current
  });
  V(() => {
    ee(A);
  }, [ee, A]);
  const ae = z(() => sS(k), [k]), J = z(() => uS(dS(I)), [I]), H = z(() => Math.min(I && "expanded" in I && I.expanded || 0, lS), [I]), le = z(() => J[0]?.items.slice(0, H) || [], [J, H]), te = z(() => [{
    ...J[0],
    items: J[0]?.items.slice(H) || []
  }, ...J.slice(1)].filter((fe) => fe.items.length > 0), [J, H]), re = ae?.length > 0 || J?.length > 0, [ue, j] = F(void 0), P = iv(), [Y, ie] = F(void 0), ce = ne((fe) => {
    if (!fe)
      return [];
    const _e = [];
    let Ie = [];
    for (const xt of fe)
      "type" in xt && xt.type === "separator" ? (_e.push({
        items: Ie
      }), Ie = []) : Ie.push(xt);
    return Ie.length > 0 && _e.push({
      items: Ie
    }), _e;
  }, []), ve = z(() => {
    if (Y)
      return "warningMessage" in Y ? {
        warningMessage: Y.warningMessage
      } : {
        primary: ce(Y.primary ?? []),
        secondary: (Y?.secondary ?? []).filter((fe) => !("type" in fe && fe.type === "separator"))
      };
  }, [Y, ce]), [be, De] = F(!1), [Se, Et] = F(0), rt = X(), it = z(() => E === !0 ? (fe) => fe !== void 0 ? `${fe} ${rt.collections.itemsCount}` : null : E || void 0, [E, rt]), vn = (fe, _e) => {
    n?.(fe, _e), De(!!fe.allSelected || fe.itemsStatus.some((tr) => tr.checked)), Et(fe.selectedCount), j(() => _e);
    const Ie = t.bulkActions ? t.bulkActions(fe) : void 0, xt = (tr) => {
      if ("type" in tr && tr.type === "separator")
        return {
          type: "separator"
        };
      const Ro = tr;
      return {
        ...Ro,
        onClick: () => {
          r?.(Ro.id, fe, _e), Ro.keepSelection || _e();
        }
      };
    };
    Ie && ("primary" in Ie ? ie({
      primary: (Ie?.primary || []).map(xt),
      secondary: (Ie?.secondary || []).map(xt)
    }) : "warningMessage" in Ie && ie({
      warningMessage: Ie.warningMessage
    }));
  }, [Zn, _o] = F(void 0), [Hr, Vr] = F(!0), yn = z(() => [w?.enabled, e.length > 1].some(Boolean), [w, e]), { emptyState: xn, setEmptyStateType: er } = SS(o, {
    retry: () => {
      er(!1), h({
        ...u
      });
    },
    clearFilters: () => {
      er(!1), h({}), D(void 0);
    }
  }), Ip = (fe, _e, Ie) => fe === 0 ? Object.keys(_e).length > 0 || Ie ? "no-results" : "no-data" : !1, Ap = ({ totalItems: fe, filters: _e, isInitialLoading: Ie, search: xt }) => {
    Ie || (Vr(Ie), _o(fe), er(Ip(fe, _e, xt)));
  }, Tp = (fe) => {
    er("error", fe.cause instanceof Error ? fe.cause.message : fe.message);
  }, Ep = zs({
    value: !!p,
    delay: 100
  });
  V(() => {
    er(!1);
  }, [u, x, b, t.dataAdapter]);
  const ma = z(() => it !== void 0, [it]), pa = it === void 0 ? null : Zn !== void 0 ? it(Zn) : null, { settings: Lo, setSettings: Dp } = bo(), { storageReady: _p } = NS(c, typeof a == "object" ? a?.features ?? ["*"] : ["*"], {
    settings: {
      value: Lo,
      setValue: Dp
    },
    sortings: {
      value: A,
      setValue: O
    },
    grouping: {
      value: T,
      setValue: S
    },
    navigationFilters: {
      value: b,
      setValue: v
    },
    visualization: {
      value: _,
      setValue: $
    },
    search: {
      value: x,
      setValue: D
    },
    filters: {
      value: u,
      setValue: h
    }
  }, a === !1), ga = zs({
    value: Hr && _p,
    delay: 100
  });
  ku(() => {
    i?.({
      filters: u,
      sortings: A,
      visualization: _,
      grouping: T,
      search: x,
      navigationFilters: b,
      settings: Lo
    });
  }, [u, x, b, A, _, T, Lo]);
  const Oo = z(() => {
    const fe = L ? Object.keys(L.groupBy).length + (L.mandatory ? 1 : 0) : 0, _e = Object.values(e).find((xt) => xt.type === "table"), Ie = !!_e && (!!_e.options?.allowColumnHiding || !!_e.options?.allowColumnReordering);
    return e && e.length > 1 || fe > 0 && !L?.hideSelector || R && Object.keys(R).length > 0 || Ie;
  }, [e, L, R]), Wr = z(() => yn || re || Oo || w && w.enabled, [yn, re, Oo, w]), wn = z(() => ma ? f ? "top" : "bottom" : !1, [f, ma]), kn = z(() => y ? Wr ? "top" : "bottom" : !1, [y, Wr]), Lp = z(() => wn === "top" || kn === "top", [wn, kn]), Op = z(() => f || Wr || kn === "bottom" || wn === "bottom", [f, Wr, kn, wn]);
  return g("div", {
    className: C("flex flex-col gap-4", P === "standard" && "-mx-[23px]", s && "h-full flex-1"),
    style: {
      width: P === "standard" && !d ? "calc(100% + 46px)" : "100%"
    },
    children: [Lp && g("div", {
      className: "border-f1-border-primary flex gap-4 px-4",
      children: [wn === "top" && l(Wc, {
        isReady: !ga,
        totalItemSummaryResult: pa
      }), l("div", {
        className: "flex flex-1 flex-shrink justify-end",
        children: kn === "top" && l(Hc, {
          navigationFilters: y,
          currentNavigationFilters: b,
          onChangeNavigationFilters: v
        })
      })]
    }), Op && g("div", {
      className: C("flex flex-row gap-4 px-4", s && "max-h-full", d && "px-0"),
      children: [wn === "bottom" && l(Wc, {
        isReady: !ga,
        totalItemSummaryResult: pa
      }), l("div", {
        className: "flex-1",
        children: g(Mb, {
          filters: f,
          value: u,
          presets: m,
          presetsLoading: Ep,
          onChange: (fe) => h(fe),
          children: [N && l(U.div, {
            className: "flex h-8 w-8 items-center justify-center",
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            children: l(sn, {
              size: "small"
            })
          }), w && l(xS, {
            onChange: D,
            value: x
          }), Oo && l(iA, {
            visualizations: e,
            currentVisualization: _,
            onVisualizationChange: $,
            grouping: L,
            currentGrouping: T,
            onGroupingChange: S,
            sortings: R,
            currentSortings: A,
            onSortingsChange: O
          }), re && g(Z, {
            children: [yn && l("div", {
              className: "mx-1 h-4 w-px bg-f1-background-secondary-hover"
            }), l(pS, {
              primaryActions: ae,
              secondaryActions: le,
              otherActions: te
            })]
          }), kn === "bottom" && l(Hc, {
            navigationFilters: y,
            currentNavigationFilters: b,
            onChangeNavigationFilters: v
          })]
        })
      })]
    }), l("div", {
      className: C(xn && "hidden", s && "h-full min-h-0 flex-1"),
      children: l(XI, {
        visualization: e[_],
        source: t,
        onSelectItems: vn,
        onLoadData: Ap,
        onLoadError: Tp,
        tmpFullWidth: d
      })
    }), xn ? l("div", {
      className: "flex flex-1 flex-col items-center justify-center",
      children: l(Lh, {
        emoji: xn.emoji,
        title: xn.title,
        description: xn.description,
        actions: xn.actions
      })
    }) : l(Z, {
      children: Y && l(mS, {
        isOpen: be,
        selectedNumber: Se,
        primaryActions: ve && "primary" in ve ? ve.primary : [],
        secondaryActions: ve && "secondary" in ve ? ve.secondary : [],
        warningMessage: "warningMessage" in Y ? Y.warningMessage : void 0,
        onUnselect: () => ue?.()
      })
    })]
  });
}, sA = (t) => l(fI, {
  children: l(oA, {
    ...t
  })
}), $_ = se("OneDataCollection", sA), j_ = (t, e = []) => {
  const n = X(), {
    navigationFilters: r,
    summaries: i,
    currentNavigationFilters: o
  } = t, s = Pb(
    {
      ...t,
      dataAdapter: t.dataAdapter
    },
    e
  ), [a, c] = F(() => r ? Object.fromEntries(
    Object.entries(r).map(([f, u]) => {
      const h = Rh[u.type];
      return [
        f,
        h.valueConverter ? h.valueConverter(u.defaultValue, u, n) : u.defaultValue
      ];
    })
  ) : {});
  ku(() => {
    o && c(o);
  }, [o]);
  const d = z(() => i, e);
  return {
    ...s,
    summaries: d,
    navigationFilters: r,
    currentNavigationFilters: a,
    setCurrentNavigationFilters: c
  };
}, pm = q(({ header: t, actions: e, open: n, onClose: r }, i) => {
  const [o, s] = F(!1), a = ne(() => {
    s(!0);
    const c = setTimeout(() => {
      r?.(), s(!1);
    }, 200);
    return () => clearTimeout(c);
  }, [r]);
  return l(zb, {
    open: n && !o,
    onOpenChange: (c) => !c && a?.(),
    children: g($b, {
      ref: i,
      className: "bottom-3 top-auto max-w-[400px]",
      children: [g(ov, {
        className: "flex flex-col gap-4 px-4 py-5",
        children: [l(Rr, {
          type: t.type,
          size: "lg"
        }), g("div", {
          className: "flex flex-col gap-0.5",
          children: [l(jb, {
            className: "text-xl sm:text-lg",
            children: t.title
          }), l(sv, {
            className: "text-lg sm:text-base",
            children: t.description
          })]
        })]
      }), e && g(lv, {
        className: "px-4 pb-4 pt-2",
        children: [g("div", {
          className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full",
          children: [l(B, {
            variant: "outline",
            ...e.secondary
          }), l(B, {
            ...e.primary,
            variant: e.primary.variant || "default"
          })]
        }), g("div", {
          className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full",
          children: [l(B, {
            variant: "outline",
            ...e.secondary,
            size: "lg"
          }), l(B, {
            ...e.primary,
            variant: e.primary.variant || "default",
            size: "lg"
          })]
        })]
      })]
    })
  });
});
pm.displayName = "Dialog";
const lA = se("Dialog", pm), B_ = gt({
  name: "Dialog",
  type: "info"
}, lA), at = () => /* @__PURE__ */ new Map(), Bs = (t) => {
  const e = at();
  return t.forEach((n, r) => {
    e.set(r, n);
  }), e;
}, Bt = (t, e, n) => {
  let r = t.get(e);
  return r === void 0 && t.set(e, r = n()), r;
}, aA = (t, e) => {
  const n = [];
  for (const [r, i] of t)
    n.push(e(i, r));
  return n;
}, cA = (t, e) => {
  for (const [n, r] of t)
    if (e(r, n))
      return !0;
  return !1;
}, dn = () => /* @__PURE__ */ new Set(), Zo = (t) => t[t.length - 1], dA = (t, e) => {
  for (let n = 0; n < e.length; n++)
    t.push(e[n]);
}, un = Array.from, uA = (t, e) => {
  for (let n = 0; n < t.length; n++)
    if (e(t[n], n, t))
      return !0;
  return !1;
}, Hs = Array.isArray;
class gm {
  constructor() {
    this._observers = at();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(e, n) {
    return Bt(
      this._observers,
      /** @type {string} */
      e,
      dn
    ).add(n), n;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(e, n) {
    const r = (...i) => {
      this.off(
        e,
        /** @type {any} */
        r
      ), n(...i);
    };
    this.on(
      e,
      /** @type {any} */
      r
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(e, n) {
    const r = this._observers.get(e);
    r !== void 0 && (r.delete(n), r.size === 0 && this._observers.delete(e));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(e, n) {
    return un((this._observers.get(e) || at()).values()).forEach((r) => r(...n));
  }
  destroy() {
    this._observers = at();
  }
}
const Pt = Math.floor, gi = Math.abs, $n = (t, e) => t < e ? t : e, Yt = (t, e) => t > e ? t : e, bm = (t) => t !== 0 ? t < 0 : 1 / t < 0, td = 1, nd = 2, es = 4, ts = 8, br = 32, Rt = 64, $e = 128, fA = 1 << 29, yo = 31, Vs = 63, on = 127, hA = 2147483647, vm = Number.MAX_SAFE_INTEGER, mA = Number.isInteger || ((t) => typeof t == "number" && isFinite(t) && Pt(t) === t), pA = String.fromCharCode, gA = (t) => t.toLowerCase(), bA = /^\s*/g, vA = (t) => t.replace(bA, ""), yA = /([A-Z])/g, rd = (t, e) => vA(t.replace(yA, (n) => `${e}${gA(n)}`)), xA = (t) => {
  const e = unescape(encodeURIComponent(t)), n = e.length, r = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    r[i] = /** @type {number} */
    e.codePointAt(i);
  return r;
}, vr = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), wA = (t) => vr.encode(t), kA = vr ? wA : xA;
let or = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
or && or.decode(new Uint8Array()).length === 1 && (or = null);
class zr {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const $r = () => new zr(), CA = (t) => {
  const e = $r();
  return t(e), lt(e);
}, NA = (t) => {
  let e = t.cpos;
  for (let n = 0; n < t.bufs.length; n++)
    e += t.bufs[n].length;
  return e;
}, lt = (t) => {
  const e = new Uint8Array(NA(t));
  let n = 0;
  for (let r = 0; r < t.bufs.length; r++) {
    const i = t.bufs[r];
    e.set(i, n), n += i.length;
  }
  return e.set(new Uint8Array(t.cbuf.buffer, 0, t.cpos), n), e;
}, SA = (t, e) => {
  const n = t.cbuf.length;
  n - t.cpos < e && (t.bufs.push(new Uint8Array(t.cbuf.buffer, 0, t.cpos)), t.cbuf = new Uint8Array(Yt(n, e) * 2), t.cpos = 0);
}, Te = (t, e) => {
  const n = t.cbuf.length;
  t.cpos === n && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(n * 2), t.cpos = 0), t.cbuf[t.cpos++] = e;
}, Ws = Te, de = (t, e) => {
  for (; e > on; )
    Te(t, $e | on & e), e = Pt(e / 128);
  Te(t, on & e);
}, Kl = (t, e) => {
  const n = bm(e);
  for (n && (e = -e), Te(t, (e > Vs ? $e : 0) | (n ? Rt : 0) | Vs & e), e = Pt(e / 64); e > 0; )
    Te(t, (e > on ? $e : 0) | on & e), e = Pt(e / 128);
}, Us = new Uint8Array(3e4), IA = Us.length / 3, AA = (t, e) => {
  if (e.length < IA) {
    const n = vr.encodeInto(e, Us).written || 0;
    de(t, n);
    for (let r = 0; r < n; r++)
      Te(t, Us[r]);
  } else
    Ue(t, kA(e));
}, TA = (t, e) => {
  const n = unescape(encodeURIComponent(e)), r = n.length;
  de(t, r);
  for (let i = 0; i < r; i++)
    Te(
      t,
      /** @type {number} */
      n.codePointAt(i)
    );
}, En = vr && /** @type {any} */
vr.encodeInto ? AA : TA, xo = (t, e) => {
  const n = t.cbuf.length, r = t.cpos, i = $n(n - r, e.length), o = e.length - i;
  t.cbuf.set(e.subarray(0, i), r), t.cpos += i, o > 0 && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(Yt(n * 2, o)), t.cbuf.set(e.subarray(i)), t.cpos = o);
}, Ue = (t, e) => {
  de(t, e.byteLength), xo(t, e);
}, Jl = (t, e) => {
  SA(t, e);
  const n = new DataView(t.cbuf.buffer, t.cpos, e);
  return t.cpos += e, n;
}, EA = (t, e) => Jl(t, 4).setFloat32(0, e, !1), DA = (t, e) => Jl(t, 8).setFloat64(0, e, !1), _A = (t, e) => (
  /** @type {any} */
  Jl(t, 8).setBigInt64(0, e, !1)
), id = new DataView(new ArrayBuffer(4)), LA = (t) => (id.setFloat32(0, t), id.getFloat32(0) === t), jn = (t, e) => {
  switch (typeof e) {
    case "string":
      Te(t, 119), En(t, e);
      break;
    case "number":
      mA(e) && gi(e) <= hA ? (Te(t, 125), Kl(t, e)) : LA(e) ? (Te(t, 124), EA(t, e)) : (Te(t, 123), DA(t, e));
      break;
    case "bigint":
      Te(t, 122), _A(t, e);
      break;
    case "object":
      if (e === null)
        Te(t, 126);
      else if (Hs(e)) {
        Te(t, 117), de(t, e.length);
        for (let n = 0; n < e.length; n++)
          jn(t, e[n]);
      } else if (e instanceof Uint8Array)
        Te(t, 116), Ue(t, e);
      else {
        Te(t, 118);
        const n = Object.keys(e);
        de(t, n.length);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          En(t, i), jn(t, e[i]);
        }
      }
      break;
    case "boolean":
      Te(t, e ? 120 : 121);
      break;
    default:
      Te(t, 127);
  }
};
class od extends zr {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(e) {
    super(), this.w = e, this.s = null, this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(e) {
    this.s === e ? this.count++ : (this.count > 0 && de(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e);
  }
}
const sd = (t) => {
  t.count > 0 && (Kl(t.encoder, t.count === 1 ? t.s : -t.s), t.count > 1 && de(t.encoder, t.count - 2));
};
class bi {
  constructor() {
    this.encoder = new zr(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.s === e ? this.count++ : (sd(this), this.count = 1, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return sd(this), lt(this.encoder);
  }
}
const ld = (t) => {
  if (t.count > 0) {
    const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
    Kl(t.encoder, e), t.count > 1 && de(t.encoder, t.count - 2);
  }
};
class ns {
  constructor() {
    this.encoder = new zr(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.diff === e - this.s ? (this.s = e, this.count++) : (ld(this), this.count = 1, this.diff = e - this.s, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return ld(this), lt(this.encoder);
  }
}
class OA {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new bi();
  }
  /**
   * @param {string} string
   */
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new zr();
    return this.sarr.push(this.s), this.s = "", En(e, this.sarr.join("")), xo(e, this.lensE.toUint8Array()), lt(e);
  }
}
const Qt = (t) => new Error(t), ct = () => {
  throw Qt("Method unimplemented");
}, Ve = () => {
  throw Qt("Unexpected case");
}, ym = Qt("Unexpected end of array"), xm = Qt("Integer out of Range");
class wo {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const Yl = (t) => new wo(t), RA = (t) => t.pos !== t.arr.length, FA = (t, e) => {
  const n = new Uint8Array(t.arr.buffer, t.pos + t.arr.byteOffset, e);
  return t.pos += e, n;
}, Ye = (t) => FA(t, ge(t)), yr = (t) => t.arr[t.pos++], ge = (t) => {
  let e = 0, n = 1;
  const r = t.arr.length;
  for (; t.pos < r; ) {
    const i = t.arr[t.pos++];
    if (e = e + (i & on) * n, n *= 128, i < $e)
      return e;
    if (e > vm)
      throw xm;
  }
  throw ym;
}, Ql = (t) => {
  let e = t.arr[t.pos++], n = e & Vs, r = 64;
  const i = (e & Rt) > 0 ? -1 : 1;
  if ((e & $e) === 0)
    return i * n;
  const o = t.arr.length;
  for (; t.pos < o; ) {
    if (e = t.arr[t.pos++], n = n + (e & on) * r, r *= 128, e < $e)
      return i * n;
    if (n > vm)
      throw xm;
  }
  throw ym;
}, MA = (t) => {
  let e = ge(t);
  if (e === 0)
    return "";
  {
    let n = String.fromCodePoint(yr(t));
    if (--e < 100)
      for (; e--; )
        n += String.fromCodePoint(yr(t));
    else
      for (; e > 0; ) {
        const r = e < 1e4 ? e : 1e4, i = t.arr.subarray(t.pos, t.pos + r);
        t.pos += r, n += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          i
        ), e -= r;
      }
    return decodeURIComponent(escape(n));
  }
}, PA = (t) => (
  /** @type any */
  or.decode(Ye(t))
), Gs = or ? PA : MA, Xl = (t, e) => {
  const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
  return t.pos += e, n;
}, zA = (t) => Xl(t, 4).getFloat32(0, !1), $A = (t) => Xl(t, 8).getFloat64(0, !1), jA = (t) => (
  /** @type {any} */
  Xl(t, 8).getBigInt64(0, !1)
), BA = [
  (t) => {
  },
  // CASE 127: undefined
  (t) => null,
  // CASE 126: null
  Ql,
  // CASE 125: integer
  zA,
  // CASE 124: float32
  $A,
  // CASE 123: float64
  jA,
  // CASE 122: bigint
  (t) => !1,
  // CASE 121: boolean (false)
  (t) => !0,
  // CASE 120: boolean (true)
  Gs,
  // CASE 119: string
  (t) => {
    const e = ge(t), n = {};
    for (let r = 0; r < e; r++) {
      const i = Gs(t);
      n[i] = Pi(t);
    }
    return n;
  },
  (t) => {
    const e = ge(t), n = [];
    for (let r = 0; r < e; r++)
      n.push(Pi(t));
    return n;
  },
  Ye
  // CASE 116: Uint8Array
], Pi = (t) => BA[127 - yr(t)](t);
class ad extends wo {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(e, n) {
    super(e), this.reader = n, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), RA(this) ? this.count = ge(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class vi extends wo {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = Ql(this);
      const e = bm(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = ge(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class rs extends wo {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const e = Ql(this), n = e & 1;
      this.diff = Pt(e / 2), this.count = 1, n && (this.count = ge(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class HA {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    this.decoder = new vi(e), this.str = Gs(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const e = this.spos + this.decoder.read(), n = this.str.slice(this.spos, e);
    return this.spos = e, n;
  }
}
const VA = crypto.getRandomValues.bind(crypto), WA = Math.random, wm = () => VA(new Uint32Array(1))[0], UA = (t) => t[Pt(WA() * t.length)], GA = "10000000-1000-4000-8000" + -1e11, qA = () => GA.replace(
  /[018]/g,
  /** @param {number} c */
  (t) => (t ^ wm() & 15 >> t / 4).toString(16)
), KA = Date.now, cd = (t) => (
  /** @type {Promise<T>} */
  new Promise(t)
);
Promise.all.bind(Promise);
const dd = (t) => t === void 0 ? null : t;
class JA {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(e, n) {
    this.map.set(e, n);
  }
  /**
   * @param {string} key
   */
  getItem(e) {
    return this.map.get(e);
  }
}
let km = new JA(), YA = !0;
try {
  typeof localStorage < "u" && localStorage && (km = localStorage, YA = !1);
} catch {
}
const QA = km, XA = Object.assign, Cm = Object.keys, ZA = (t, e) => {
  for (const n in t)
    e(t[n], n);
}, ud = (t) => Cm(t).length, e2 = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, Nm = (t, e) => {
  for (const n in t)
    if (!e(t[n], n))
      return !1;
  return !0;
}, t2 = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n2 = (t, e) => t === e || ud(t) === ud(e) && Nm(t, (n, r) => (n !== void 0 || t2(e, r)) && e[r] === n), r2 = Object.freeze, Sm = (t) => {
  for (const e in t) {
    const n = t[e];
    (typeof n == "object" || typeof n == "function") && Sm(t[e]);
  }
  return r2(t);
}, Zl = (t, e, n = 0) => {
  try {
    for (; n < t.length; n++)
      t[n](...e);
  } finally {
    n < t.length && Zl(t, e, n + 1);
  }
}, i2 = (t, e) => e.includes(t), Bn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Im = typeof window < "u" && typeof document < "u" && !Bn;
let wt;
const o2 = () => {
  if (wt === void 0)
    if (Bn) {
      wt = at();
      const t = process.argv;
      let e = null;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        r[0] === "-" ? (e !== null && wt.set(e, ""), e = r) : e !== null && (wt.set(e, r), e = null);
      }
      e !== null && wt.set(e, "");
    } else typeof location == "object" ? (wt = at(), (location.search || "?").slice(1).split("&").forEach((t) => {
      if (t.length !== 0) {
        const [e, n] = t.split("=");
        wt.set(`--${rd(e, "-")}`, n), wt.set(`-${rd(e, "-")}`, n);
      }
    })) : wt = at();
  return wt;
}, qs = (t) => o2().has(t), zi = (t) => dd(Bn ? process.env[t.toUpperCase().replaceAll("-", "_")] : QA.getItem(t)), Am = (t) => qs("--" + t) || zi(t) !== null;
Am("production");
const s2 = Bn && i2(process.env.FORCE_COLOR, ["true", "1", "2"]), l2 = s2 || !qs("--no-colors") && // @todo deprecate --no-colors
!Am("no-color") && (!Bn || process.stdout.isTTY) && (!Bn || qs("--color") || zi("COLORTERM") !== null || (zi("TERM") || "").includes("color")), a2 = (t) => {
  let e = "";
  for (let n = 0; n < t.byteLength; n++)
    e += pA(t[n]);
  return btoa(e);
}, c2 = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"), d2 = Im ? a2 : c2, u2 = (t) => CA((e) => jn(e, t));
class f2 {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(e, n) {
    this.left = e, this.right = n;
  }
}
const Dt = (t, e) => new f2(t, e), h2 = (
  /** @type {Document} */
  typeof document < "u" ? document : {}
);
typeof DOMParser < "u" && new DOMParser();
const m2 = (t) => aA(t, (e, n) => `${n}:${e};`).join(""), p2 = (t) => class {
  /**
   * @param {number} timeoutId
   */
  constructor(n) {
    this._ = n;
  }
  destroy() {
    t(this._);
  }
}, g2 = p2(clearTimeout), Tm = (t, e) => new g2(setTimeout(e, t)), Ht = Symbol, Em = Ht(), Dm = Ht(), b2 = Ht(), v2 = Ht(), y2 = Ht(), _m = Ht(), x2 = Ht(), ea = Ht(), w2 = Ht(), k2 = (t) => {
  t.length === 1 && t[0]?.constructor === Function && (t = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  t[0]());
  const e = [], n = [];
  let r = 0;
  for (; r < t.length; r++) {
    const i = t[r];
    if (i === void 0)
      break;
    if (i.constructor === String || i.constructor === Number)
      e.push(i);
    else if (i.constructor === Object)
      break;
  }
  for (r > 0 && n.push(e.join("")); r < t.length; r++) {
    const i = t[r];
    i instanceof Symbol || n.push(i);
  }
  return n;
}, C2 = {
  [Em]: Dt("font-weight", "bold"),
  [Dm]: Dt("font-weight", "normal"),
  [b2]: Dt("color", "blue"),
  [y2]: Dt("color", "green"),
  [v2]: Dt("color", "grey"),
  [_m]: Dt("color", "red"),
  [x2]: Dt("color", "purple"),
  [ea]: Dt("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [w2]: Dt("color", "black")
}, N2 = (t) => {
  t.length === 1 && t[0]?.constructor === Function && (t = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  t[0]());
  const e = [], n = [], r = at();
  let i = [], o = 0;
  for (; o < t.length; o++) {
    const s = t[o], a = C2[s];
    if (a !== void 0)
      r.set(a.left, a.right);
    else {
      if (s === void 0)
        break;
      if (s.constructor === String || s.constructor === Number) {
        const c = m2(r);
        o > 0 || c.length > 0 ? (e.push("%c" + s), n.push(c)) : e.push(s);
      } else
        break;
    }
  }
  for (o > 0 && (i = n, i.unshift(e.join(""))); o < t.length; o++) {
    const s = t[o];
    s instanceof Symbol || i.push(s);
  }
  return i;
}, Lm = l2 ? N2 : k2, S2 = (...t) => {
  console.log(...Lm(t)), Rm.forEach((e) => e.print(t));
}, Om = (...t) => {
  console.warn(...Lm(t)), t.unshift(ea), Rm.forEach((e) => e.print(t));
}, Rm = dn(), Fm = (t) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: t
}), I2 = (t, e) => Fm(() => {
  let n;
  do
    n = t.next();
  while (!n.done && !e(n.value));
  return n;
}), is = (t, e) => Fm(() => {
  const { done: n, value: r } = t.next();
  return { done: n, value: n ? void 0 : e(r) };
});
class ta {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(e, n) {
    this.clock = e, this.len = n;
  }
}
class Yn {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const Xt = (t, e, n) => e.clients.forEach((r, i) => {
  const o = (
    /** @type {Array<GC|Item>} */
    t.doc.store.clients.get(i)
  );
  if (o != null) {
    const s = o[o.length - 1], a = s.id.clock + s.length;
    for (let c = 0, d = r[c]; c < r.length && d.clock < a; d = r[++c])
      Vm(t, o, d.clock, d.len, n);
  }
}), A2 = (t, e) => {
  let n = 0, r = t.length - 1;
  for (; n <= r; ) {
    const i = Pt((n + r) / 2), o = t[i], s = o.clock;
    if (s <= e) {
      if (e < s + o.len)
        return i;
      n = i + 1;
    } else
      r = i - 1;
  }
  return null;
}, Qn = (t, e) => {
  const n = t.clients.get(e.client);
  return n !== void 0 && A2(n, e.clock) !== null;
}, na = (t) => {
  t.clients.forEach((e) => {
    e.sort((i, o) => i.clock - o.clock);
    let n, r;
    for (n = 1, r = 1; n < e.length; n++) {
      const i = e[r - 1], o = e[n];
      i.clock + i.len >= o.clock ? i.len = Yt(i.len, o.clock + o.len - i.clock) : (r < n && (e[r] = o), r++);
    }
    e.length = r;
  });
}, Ks = (t) => {
  const e = new Yn();
  for (let n = 0; n < t.length; n++)
    t[n].clients.forEach((r, i) => {
      if (!e.clients.has(i)) {
        const o = r.slice();
        for (let s = n + 1; s < t.length; s++)
          dA(o, t[s].clients.get(i) || []);
        e.clients.set(i, o);
      }
    });
  return na(e), e;
}, xr = (t, e, n, r) => {
  Bt(t.clients, e, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new ta(n, r));
}, Mm = () => new Yn(), T2 = (t) => {
  const e = Mm();
  return t.clients.forEach((n, r) => {
    const i = [];
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      if (s.deleted) {
        const a = s.id.clock;
        let c = s.length;
        if (o + 1 < n.length)
          for (let d = n[o + 1]; o + 1 < n.length && d.deleted; d = n[++o + 1])
            c += d.length;
        i.push(new ta(a, c));
      }
    }
    i.length > 0 && e.clients.set(r, i);
  }), e;
}, ra = (t, e) => {
  de(t.restEncoder, e.clients.size), un(e.clients.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
    t.resetDsCurVal(), de(t.restEncoder, n);
    const i = r.length;
    de(t.restEncoder, i);
    for (let o = 0; o < i; o++) {
      const s = r[o];
      t.writeDsClock(s.clock), t.writeDsLen(s.len);
    }
  });
}, E2 = (t) => {
  const e = new Yn(), n = ge(t.restDecoder);
  for (let r = 0; r < n; r++) {
    t.resetDsCurVal();
    const i = ge(t.restDecoder), o = ge(t.restDecoder);
    if (o > 0) {
      const s = Bt(e.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let a = 0; a < o; a++)
        s.push(new ta(t.readDsClock(), t.readDsLen()));
    }
  }
  return e;
}, fd = (t, e, n) => {
  const r = new Yn(), i = ge(t.restDecoder);
  for (let o = 0; o < i; o++) {
    t.resetDsCurVal();
    const s = ge(t.restDecoder), a = ge(t.restDecoder), c = n.clients.get(s) || [], d = ke(n, s);
    for (let f = 0; f < a; f++) {
      const u = t.readDsClock(), h = u + t.readDsLen();
      if (u < d) {
        d < h && xr(r, s, d, h - d);
        let m = ht(c, u), p = c[m];
        for (!p.deleted && p.id.clock < u && (c.splice(m + 1, 0, Ui(e, p, u - p.id.clock)), m++); m < c.length && (p = c[m++], p.id.clock < h); )
          p.deleted || (h < p.id.clock + p.length && c.splice(m, 0, Ui(e, p, h - p.id.clock)), p.delete(e));
      } else
        xr(r, s, u, h - u);
    }
  }
  if (r.clients.size > 0) {
    const o = new ko();
    return de(o.restEncoder, 0), ra(o, r), o.toUint8Array();
  }
  return null;
}, Pm = wm;
class gn extends gm {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: e = qA(), collectionid: n = null, gc: r = !0, gcFilter: i = () => !0, meta: o = null, autoLoad: s = !1, shouldLoad: a = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = Pm(), this.guid = e, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new Bm(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = a, this.autoLoad = s, this.meta = o, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = cd((d) => {
      this.on("load", () => {
        this.isLoaded = !0, d(this);
      });
    });
    const c = () => cd((d) => {
      const f = (u) => {
        (u === void 0 || u === !0) && (this.off("sync", f), d());
      };
      this.on("sync", f);
    });
    this.on("sync", (d) => {
      d === !1 && this.isSynced && (this.whenSynced = c()), this.isSynced = d === void 0 || d === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = c();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const e = this._item;
    e !== null && !this.shouldLoad && he(
      /** @type {any} */
      e.parent.doc,
      (n) => {
        n.subdocsLoaded.add(this);
      },
      null,
      !0
    ), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(un(this.subdocs).map((e) => e.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(e, n = null) {
    return he(this, e, n);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `ydoc.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `ydoc.get(name, Y.Array) === ydoc.get(name, Y.Array)`
   *
   * After this method is called, the type is also available on `ydoc.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Y.Doc instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const ydoc = new Y.Doc(..)
   *   const appState = {
   *     document: ydoc.getText('document')
   *     comments: ydoc.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(e, n = (
    /** @type {any} */
    Ee
  )) {
    const r = Bt(this.share, e, () => {
      const o = new n();
      return o._integrate(this, null), o;
    }), i = r.constructor;
    if (n !== Ee && i !== n)
      if (i === Ee) {
        const o = new n();
        o._map = r._map, r._map.forEach(
          /** @param {Item?} n */
          (s) => {
            for (; s !== null; s = s.left)
              s.parent = o;
          }
        ), o._start = r._start;
        for (let s = o._start; s !== null; s = s.right)
          s.parent = o;
        return o._length = r._length, this.share.set(e, o), o._integrate(this, null), /** @type {InstanceType<Type>} */
        o;
      } else
        throw new Error(`Type with the name ${e} has already been defined with a different constructor`);
    return (
      /** @type {InstanceType<Type>} */
      r
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(e = "") {
    return (
      /** @type {YArray<T>} */
      this.get(e, Ln)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(e = "") {
    return this.get(e, Zt);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(e = "") {
    return (
      /** @type {YMap<T>} */
      this.get(e, Hn)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(e = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(e, Oe)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(e = "") {
    return this.get(e, fn);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const e = {};
    return this.share.forEach((n, r) => {
      e[r] = n.toJSON();
    }), e;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    this.isDestroyed = !0, un(this.subdocs).forEach((n) => n.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        e.content
      );
      n.doc = new gn({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = e, he(
        /** @type {any} */
        e.parent.doc,
        (r) => {
          const i = n.doc;
          e.deleted || r.subdocsAdded.add(i), r.subdocsRemoved.add(this);
        },
        null,
        !0
      );
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
}
class D2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    this.dsCurrVal = 0, this.restDecoder = e;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return this.dsCurrVal += ge(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const e = ge(this.restDecoder) + 1;
    return this.dsCurrVal += e, e;
  }
}
class $i extends D2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    super(e), this.keys = [], ge(e), this.keyClockDecoder = new rs(Ye(e)), this.clientDecoder = new vi(Ye(e)), this.leftClockDecoder = new rs(Ye(e)), this.rightClockDecoder = new rs(Ye(e)), this.infoDecoder = new ad(Ye(e), yr), this.stringDecoder = new HA(Ye(e)), this.parentInfoDecoder = new ad(Ye(e), yr), this.typeRefDecoder = new vi(Ye(e)), this.lenDecoder = new vi(Ye(e));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new Dn(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new Dn(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return Pi(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return Ye(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return Pi(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const e = this.keyClockDecoder.read();
    if (e < this.keys.length)
      return this.keys[e];
    {
      const n = this.stringDecoder.read();
      return this.keys.push(n), n;
    }
  }
}
class _2 {
  constructor() {
    this.restEncoder = $r();
  }
  toUint8Array() {
    return lt(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    de(this.restEncoder, e);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    de(this.restEncoder, e);
  }
}
class L2 extends _2 {
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    de(this.restEncoder, e.client), de(this.restEncoder, e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    de(this.restEncoder, e.client), de(this.restEncoder, e.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(e) {
    de(this.restEncoder, e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    Ws(this.restEncoder, e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    En(this.restEncoder, e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    de(this.restEncoder, e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    de(this.restEncoder, e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    de(this.restEncoder, e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    jn(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    Ue(this.restEncoder, e);
  }
  /**
   * @param {any} embed
   */
  writeJSON(e) {
    En(this.restEncoder, JSON.stringify(e));
  }
  /**
   * @param {string} key
   */
  writeKey(e) {
    En(this.restEncoder, e);
  }
}
class O2 {
  constructor() {
    this.restEncoder = $r(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return lt(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(e) {
    const n = e - this.dsCurrVal;
    this.dsCurrVal = e, de(this.restEncoder, n);
  }
  /**
   * @param {number} len
   */
  writeDsLen(e) {
    e === 0 && Ve(), de(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class ko extends O2 {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new ns(), this.clientEncoder = new bi(), this.leftClockEncoder = new ns(), this.rightClockEncoder = new ns(), this.infoEncoder = new od(Ws), this.stringEncoder = new OA(), this.parentInfoEncoder = new od(Ws), this.typeRefEncoder = new bi(), this.lenEncoder = new bi();
  }
  toUint8Array() {
    const e = $r();
    return de(e, 0), Ue(e, this.keyClockEncoder.toUint8Array()), Ue(e, this.clientEncoder.toUint8Array()), Ue(e, this.leftClockEncoder.toUint8Array()), Ue(e, this.rightClockEncoder.toUint8Array()), Ue(e, lt(this.infoEncoder)), Ue(e, this.stringEncoder.toUint8Array()), Ue(e, lt(this.parentInfoEncoder)), Ue(e, this.typeRefEncoder.toUint8Array()), Ue(e, this.lenEncoder.toUint8Array()), xo(e, lt(this.restEncoder)), lt(e);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(e) {
    this.clientEncoder.write(e.client), this.leftClockEncoder.write(e.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(e) {
    this.clientEncoder.write(e.client), this.rightClockEncoder.write(e.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(e) {
    this.clientEncoder.write(e);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(e) {
    this.infoEncoder.write(e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    this.stringEncoder.write(e);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(e) {
    this.parentInfoEncoder.write(e ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(e) {
    this.typeRefEncoder.write(e);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(e) {
    this.lenEncoder.write(e);
  }
  /**
   * @param {any} any
   */
  writeAny(e) {
    jn(this.restEncoder, e);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(e) {
    Ue(this.restEncoder, e);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(e) {
    jn(this.restEncoder, e);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(e) {
    const n = this.keyMap.get(e);
    n === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(e)) : this.keyClockEncoder.write(n);
  }
}
const R2 = (t, e, n, r) => {
  r = Yt(r, e[0].id.clock);
  const i = ht(e, r);
  de(t.restEncoder, e.length - i), t.writeClient(n), de(t.restEncoder, r);
  const o = e[i];
  o.write(t, r - o.id.clock);
  for (let s = i + 1; s < e.length; s++)
    e[s].write(t, 0);
}, zm = (t, e, n) => {
  const r = /* @__PURE__ */ new Map();
  n.forEach((i, o) => {
    ke(e, o) > i && r.set(o, i);
  }), Co(e).forEach((i, o) => {
    n.has(o) || r.set(o, 0);
  }), de(t.restEncoder, r.size), un(r.entries()).sort((i, o) => o[0] - i[0]).forEach(([i, o]) => {
    R2(
      t,
      /** @type {Array<GC|Item>} */
      e.clients.get(i),
      i,
      o
    );
  });
}, F2 = (t, e) => {
  const n = at(), r = ge(t.restDecoder);
  for (let i = 0; i < r; i++) {
    const o = ge(t.restDecoder), s = new Array(o), a = t.readClient();
    let c = ge(t.restDecoder);
    n.set(a, { i: 0, refs: s });
    for (let d = 0; d < o; d++) {
      const f = t.readInfo();
      switch (yo & f) {
        case 0: {
          const u = t.readLen();
          s[d] = new Xe(oe(a, c), u), c += u;
          break;
        }
        case 10: {
          const u = ge(t.restDecoder);
          s[d] = new ot(oe(a, c), u), c += u;
          break;
        }
        default: {
          const u = (f & (Rt | $e)) === 0, h = new me(
            oe(a, c),
            null,
            // left
            (f & $e) === $e ? t.readLeftID() : null,
            // origin
            null,
            // right
            (f & Rt) === Rt ? t.readRightID() : null,
            // right origin
            u ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null,
            // parent
            u && (f & br) === br ? t.readString() : null,
            // parentSub
            up(t, f)
            // item content
          );
          s[d] = h, c += h.length;
        }
      }
    }
  }
  return n;
}, M2 = (t, e, n) => {
  const r = [];
  let i = un(n.keys()).sort((m, p) => m - p);
  if (i.length === 0)
    return null;
  const o = () => {
    if (i.length === 0)
      return null;
    let m = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      n.get(i[i.length - 1])
    );
    for (; m.refs.length === m.i; )
      if (i.pop(), i.length > 0)
        m = /** @type {{i:number,refs:Array<GC|Item>}} */
        n.get(i[i.length - 1]);
      else
        return null;
    return m;
  };
  let s = o();
  if (s === null)
    return null;
  const a = new Bm(), c = /* @__PURE__ */ new Map(), d = (m, p) => {
    const b = c.get(m);
    (b == null || b > p) && c.set(m, p);
  };
  let f = (
    /** @type {any} */
    s.refs[
      /** @type {any} */
      s.i++
    ]
  );
  const u = /* @__PURE__ */ new Map(), h = () => {
    for (const m of r) {
      const p = m.id.client, b = n.get(p);
      b ? (b.i--, a.clients.set(p, b.refs.slice(b.i)), n.delete(p), b.i = 0, b.refs = []) : a.clients.set(p, [m]), i = i.filter((y) => y !== p);
    }
    r.length = 0;
  };
  for (; ; ) {
    if (f.constructor !== ot) {
      const p = Bt(u, f.id.client, () => ke(e, f.id.client)) - f.id.clock;
      if (p < 0)
        r.push(f), d(f.id.client, f.id.clock - 1), h();
      else {
        const b = f.getMissing(t, e);
        if (b !== null) {
          r.push(f);
          const y = n.get(
            /** @type {number} */
            b
          ) || { refs: [], i: 0 };
          if (y.refs.length === y.i)
            d(
              /** @type {number} */
              b,
              ke(e, b)
            ), h();
          else {
            f = y.refs[y.i++];
            continue;
          }
        } else (p === 0 || p < f.length) && (f.integrate(t, p), u.set(f.id.client, f.id.clock + f.length));
      }
    }
    if (r.length > 0)
      f = /** @type {GC|Item} */
      r.pop();
    else if (s !== null && s.i < s.refs.length)
      f = /** @type {GC|Item} */
      s.refs[s.i++];
    else {
      if (s = o(), s === null)
        break;
      f = /** @type {GC|Item} */
      s.refs[s.i++];
    }
  }
  if (a.clients.size > 0) {
    const m = new ko();
    return zm(m, a, /* @__PURE__ */ new Map()), de(m.restEncoder, 0), { missing: c, update: m.toUint8Array() };
  }
  return null;
}, P2 = (t, e) => zm(t, e.doc.store, e.beforeState), z2 = (t, e, n, r = new $i(t)) => he(e, (i) => {
  i.local = !1;
  let o = !1;
  const s = i.doc, a = s.store, c = F2(r, s), d = M2(i, a, c), f = a.pendingStructs;
  if (f) {
    for (const [h, m] of f.missing)
      if (m < ke(a, h)) {
        o = !0;
        break;
      }
    if (d) {
      for (const [h, m] of d.missing) {
        const p = f.missing.get(h);
        (p == null || p > m) && f.missing.set(h, m);
      }
      f.update = wd([f.update, d.update]);
    }
  } else
    a.pendingStructs = d;
  const u = fd(r, i, a);
  if (a.pendingDs) {
    const h = new $i(Yl(a.pendingDs));
    ge(h.restDecoder);
    const m = fd(h, i, a);
    u && m ? a.pendingDs = wd([u, m]) : a.pendingDs = u || m;
  } else
    a.pendingDs = u;
  if (o) {
    const h = (
      /** @type {{update: Uint8Array}} */
      a.pendingStructs.update
    );
    a.pendingStructs = null, Js(i.doc, h);
  }
}, n, !1), Js = (t, e, n, r = $i) => {
  const i = Yl(e);
  z2(i, t, n, new r(i));
};
class $2 {
  constructor() {
    this.l = [];
  }
}
const hd = () => new $2(), md = (t, e) => t.l.push(e), pd = (t, e) => {
  const n = t.l, r = n.length;
  t.l = n.filter((i) => e !== i), r === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, $m = (t, e, n) => Zl(t.l, [e, n]);
class Dn {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(e, n) {
    this.client = e, this.clock = n;
  }
}
const ni = (t, e) => t === e || t !== null && e !== null && t.client === e.client && t.clock === e.clock, oe = (t, e) => new Dn(t, e), wr = (t) => {
  for (const [e, n] of t.doc.share.entries())
    if (n === t)
      return e;
  throw Ve();
}, kr = (t, e) => {
  for (; e !== null; ) {
    if (e.parent === t)
      return !0;
    e = /** @type {AbstractType<any>} */
    e.parent._item;
  }
  return !1;
};
class ji {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(e, n, r, i = 0) {
    this.type = e, this.tname = n, this.item = r, this.assoc = i;
  }
}
class j2 {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(e, n, r = 0) {
    this.type = e, this.index = n, this.assoc = r;
  }
}
const B2 = (t, e, n = 0) => new j2(t, e, n), ri = (t, e, n) => {
  let r = null, i = null;
  return t._item === null ? i = wr(t) : r = oe(t._item.id.client, t._item.id.clock), new ji(r, i, e, n);
}, os = (t, e, n = 0) => {
  let r = t._start;
  if (n < 0) {
    if (e === 0)
      return ri(t, null, n);
    e--;
  }
  for (; r !== null; ) {
    if (!r.deleted && r.countable) {
      if (r.length > e)
        return ri(t, oe(r.id.client, r.id.clock + e), n);
      e -= r.length;
    }
    if (r.right === null && n < 0)
      return ri(t, r.lastId, n);
    r = r.right;
  }
  return ri(t, null, n);
}, H2 = (t, e) => {
  const n = _n(t, e), r = e.clock - n.id.clock;
  return {
    item: n,
    diff: r
  };
}, V2 = (t, e, n = !0) => {
  const r = e.store, i = t.item, o = t.type, s = t.tname, a = t.assoc;
  let c = null, d = 0;
  if (i !== null) {
    if (ke(r, i.client) <= i.clock)
      return null;
    const f = n ? Zs(r, i) : H2(r, i), u = f.item;
    if (!(u instanceof me))
      return null;
    if (c = /** @type {AbstractType<any>} */
    u.parent, c._item === null || !c._item.deleted) {
      d = u.deleted || !u.countable ? 0 : f.diff + (a >= 0 ? 0 : 1);
      let h = u.left;
      for (; h !== null; )
        !h.deleted && h.countable && (d += h.length), h = h.left;
    }
  } else {
    if (s !== null)
      c = e.get(s);
    else if (o !== null) {
      if (ke(r, o.client) <= o.clock)
        return null;
      const { item: f } = n ? Zs(r, o) : { item: _n(r, o) };
      if (f instanceof me && f.content instanceof yt)
        c = f.content.type;
      else
        return null;
    } else
      throw Ve();
    a >= 0 ? d = c._length : d = 0;
  }
  return B2(c, d, t.assoc);
};
class ia {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(e, n) {
    this.ds = e, this.sv = n;
  }
}
const jm = (t, e) => new ia(t, e), ss = (t) => jm(T2(t.store), Co(t.store)), nn = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !Qn(e.ds, t.id), Ys = (t, e) => {
  const n = Bt(t.meta, Ys, dn), r = t.doc.store;
  n.has(e) || (e.sv.forEach((i, o) => {
    i < ke(r, o) && je(t, oe(o, i));
  }), Xt(t, e.ds, (i) => {
  }), n.add(e));
};
class Bm {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const Co = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.clients.forEach((n, r) => {
    const i = n[n.length - 1];
    e.set(r, i.id.clock + i.length);
  }), e;
}, ke = (t, e) => {
  const n = t.clients.get(e);
  if (n === void 0)
    return 0;
  const r = n[n.length - 1];
  return r.id.clock + r.length;
}, Hm = (t, e) => {
  let n = t.clients.get(e.id.client);
  if (n === void 0)
    n = [], t.clients.set(e.id.client, n);
  else {
    const r = n[n.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw Ve();
  }
  n.push(e);
}, ht = (t, e) => {
  let n = 0, r = t.length - 1, i = t[r], o = i.id.clock;
  if (o === e)
    return r;
  let s = Pt(e / (o + i.length - 1) * r);
  for (; n <= r; ) {
    if (i = t[s], o = i.id.clock, o <= e) {
      if (e < o + i.length)
        return s;
      n = s + 1;
    } else
      r = s - 1;
    s = Pt((n + r) / 2);
  }
  throw Ve();
}, W2 = (t, e) => {
  const n = t.clients.get(e.client);
  return n[ht(n, e.clock)];
}, _n = (
  /** @type {function(StructStore,ID):Item} */
  W2
), Qs = (t, e, n) => {
  const r = ht(e, n), i = e[r];
  return i.id.clock < n && i instanceof me ? (e.splice(r + 1, 0, Ui(t, i, n - i.id.clock)), r + 1) : r;
}, je = (t, e) => {
  const n = (
    /** @type {Array<Item>} */
    t.doc.store.clients.get(e.client)
  );
  return n[Qs(t, n, e.clock)];
}, gd = (t, e, n) => {
  const r = e.clients.get(n.client), i = ht(r, n.clock), o = r[i];
  return n.clock !== o.id.clock + o.length - 1 && o.constructor !== Xe && r.splice(i + 1, 0, Ui(t, o, n.clock - o.id.clock + 1)), o;
}, U2 = (t, e, n) => {
  const r = (
    /** @type {Array<GC|Item>} */
    t.clients.get(e.id.client)
  );
  r[ht(r, e.id.clock)] = n;
}, Vm = (t, e, n, r, i) => {
  if (r === 0)
    return;
  const o = n + r;
  let s = Qs(t, e, n), a;
  do
    a = e[s++], o < a.id.clock + a.length && Qs(t, e, o), i(a);
  while (s < e.length && e[s].id.clock < o);
};
class G2 {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(e, n, r) {
    this.doc = e, this.deleteSet = new Yn(), this.beforeState = Co(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const bd = (t, e) => e.deleteSet.clients.size === 0 && !cA(e.afterState, (n, r) => e.beforeState.get(r) !== n) ? !1 : (na(e.deleteSet), P2(t, e), ra(t, e.deleteSet), !0), vd = (t, e, n) => {
  const r = e._item;
  (r === null || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && Bt(t.changed, e, dn).add(n);
}, yi = (t, e) => {
  let n = t[e], r = t[e - 1], i = e;
  for (; i > 0; n = r, r = t[--i - 1]) {
    if (r.deleted === n.deleted && r.constructor === n.constructor && r.mergeWith(n)) {
      n instanceof me && n.parentSub !== null && /** @type {AbstractType<any>} */
      n.parent._map.get(n.parentSub) === n && n.parent._map.set(
        n.parentSub,
        /** @type {Item} */
        r
      );
      continue;
    }
    break;
  }
  const o = e - i;
  return o && t.splice(e + 1 - o, o), o;
}, q2 = (t, e, n) => {
  for (const [r, i] of t.clients.entries()) {
    const o = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let s = i.length - 1; s >= 0; s--) {
      const a = i[s], c = a.clock + a.len;
      for (let d = ht(o, a.clock), f = o[d]; d < o.length && f.id.clock < c; f = o[++d]) {
        const u = o[d];
        if (a.clock + a.len <= u.id.clock)
          break;
        u instanceof me && u.deleted && !u.keep && n(u) && u.gc(e, !1);
      }
    }
  }
}, K2 = (t, e) => {
  t.clients.forEach((n, r) => {
    const i = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let o = n.length - 1; o >= 0; o--) {
      const s = n[o], a = $n(i.length - 1, 1 + ht(i, s.clock + s.len - 1));
      for (let c = a, d = i[c]; c > 0 && d.id.clock >= s.clock; d = i[c])
        c -= 1 + yi(i, c);
    }
  });
}, Wm = (t, e) => {
  if (e < t.length) {
    const n = t[e], r = n.doc, i = r.store, o = n.deleteSet, s = n._mergeStructs;
    try {
      na(o), n.afterState = Co(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
      const a = [];
      n.changed.forEach(
        (c, d) => a.push(() => {
          (d._item === null || !d._item.deleted) && d._callObserver(n, c);
        })
      ), a.push(() => {
        n.changedParentTypes.forEach((c, d) => {
          d._dEH.l.length > 0 && (d._item === null || !d._item.deleted) && (c = c.filter(
            (f) => f.target._item === null || !f.target._item.deleted
          ), c.forEach((f) => {
            f.currentTarget = d, f._path = null;
          }), c.sort((f, u) => f.path.length - u.path.length), $m(d._dEH, c, n));
        });
      }), a.push(() => r.emit("afterTransaction", [n, r])), Zl(a, []), n._needFormattingCleanup && mT(n);
    } finally {
      r.gc && q2(o, i, r.gcFilter), K2(o, i), n.afterState.forEach((f, u) => {
        const h = n.beforeState.get(u) || 0;
        if (h !== f) {
          const m = (
            /** @type {Array<GC|Item>} */
            i.clients.get(u)
          ), p = Yt(ht(m, h), 1);
          for (let b = m.length - 1; b >= p; )
            b -= 1 + yi(m, b);
        }
      });
      for (let f = s.length - 1; f >= 0; f--) {
        const { client: u, clock: h } = s[f].id, m = (
          /** @type {Array<GC|Item>} */
          i.clients.get(u)
        ), p = ht(m, h);
        p + 1 < m.length && yi(m, p + 1) > 1 || p > 0 && yi(m, p);
      }
      if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (S2(ea, Em, "[yjs] ", Dm, _m, "Changed the client-id because another client seems to be using it."), r.clientID = Pm()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
        const f = new L2();
        bd(f, n) && r.emit("update", [f.toUint8Array(), n.origin, r, n]);
      }
      if (r._observers.has("updateV2")) {
        const f = new ko();
        bd(f, n) && r.emit("updateV2", [f.toUint8Array(), n.origin, r, n]);
      }
      const { subdocsAdded: a, subdocsLoaded: c, subdocsRemoved: d } = n;
      (a.size > 0 || d.size > 0 || c.size > 0) && (a.forEach((f) => {
        f.clientID = r.clientID, f.collectionid == null && (f.collectionid = r.collectionid), r.subdocs.add(f);
      }), d.forEach((f) => r.subdocs.delete(f)), r.emit("subdocs", [{ loaded: c, added: a, removed: d }, r, n]), d.forEach((f) => f.destroy())), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : Wm(t, e + 1);
    }
  }
}, he = (t, e, n = null, r = !0) => {
  const i = t._transactionCleanups;
  let o = !1, s = null;
  t._transaction === null && (o = !0, t._transaction = new G2(t, n, r), i.push(t._transaction), i.length === 1 && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
  try {
    s = e(t._transaction);
  } finally {
    if (o) {
      const a = t._transaction === i[0];
      t._transaction = null, a && Wm(i, 0);
    }
  }
  return s;
};
class J2 {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(e, n) {
    this.insertions = n, this.deletions = e, this.meta = /* @__PURE__ */ new Map();
  }
}
const yd = (t, e, n) => {
  Xt(t, n.deletions, (r) => {
    r instanceof me && e.scope.some((i) => i === t.doc || kr(
      /** @type {AbstractType<any>} */
      i,
      r
    )) && ca(r, !1);
  });
}, xd = (t, e, n) => {
  let r = null;
  const i = t.doc, o = t.scope;
  he(i, (a) => {
    for (; e.length > 0 && t.currStackItem === null; ) {
      const c = i.store, d = (
        /** @type {StackItem} */
        e.pop()
      ), f = /* @__PURE__ */ new Set(), u = [];
      let h = !1;
      Xt(a, d.insertions, (m) => {
        if (m instanceof me) {
          if (m.redone !== null) {
            let { item: p, diff: b } = Zs(c, m.id);
            b > 0 && (p = je(a, oe(p.id.client, p.id.clock + b))), m = p;
          }
          !m.deleted && o.some((p) => p === a.doc || kr(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            m
          )) && u.push(m);
        }
      }), Xt(a, d.deletions, (m) => {
        m instanceof me && o.some((p) => p === a.doc || kr(
          /** @type {AbstractType<any>} */
          p,
          m
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Qn(d.insertions, m.id) && f.add(m);
      }), f.forEach((m) => {
        h = dp(a, m, f, d.insertions, t.ignoreRemoteMapChanges, t) !== null || h;
      });
      for (let m = u.length - 1; m >= 0; m--) {
        const p = u[m];
        t.deleteFilter(p) && (p.delete(a), h = !0);
      }
      t.currStackItem = h ? d : null;
    }
    a.changed.forEach((c, d) => {
      c.has(null) && d._searchMarker && (d._searchMarker.length = 0);
    }), r = a;
  }, t);
  const s = t.currStackItem;
  if (s != null) {
    const a = r.changedParentTypes;
    t.emit("stack-item-popped", [{ stackItem: s, type: n, changedParentTypes: a, origin: t }, t]), t.currStackItem = null;
  }
  return s;
};
class Um extends gm {
  /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */
  constructor(e, {
    captureTimeout: n = 500,
    captureTransaction: r = (c) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: o = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: s = !1,
    doc: a = (
      /** @type {Doc} */
      Hs(e) ? e[0].doc : e instanceof gn ? e : e.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = a, this.addToScope(e), this.deleteFilter = i, o.add(this), this.trackedOrigins = o, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = s, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((y) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        y
      ) || y === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const d = this.undoing, f = this.redoing, u = d ? this.redoStack : this.undoStack;
      d ? this.stopCapturing() : f || this.clear(!1, !0);
      const h = new Yn();
      c.afterState.forEach((y, v) => {
        const w = c.beforeState.get(v) || 0, x = y - w;
        x > 0 && xr(h, v, w, x);
      });
      const m = KA();
      let p = !1;
      if (this.lastChange > 0 && m - this.lastChange < this.captureTimeout && u.length > 0 && !d && !f) {
        const y = u[u.length - 1];
        y.deletions = Ks([y.deletions, c.deleteSet]), y.insertions = Ks([y.insertions, h]);
      } else
        u.push(new J2(c.deleteSet, h)), p = !0;
      !d && !f && (this.lastChange = m), Xt(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (y) => {
          y instanceof me && this.scope.some((v) => v === c.doc || kr(
            /** @type {AbstractType<any>} */
            v,
            y
          )) && ca(y, !0);
        }
      );
      const b = [{ stackItem: u[u.length - 1], origin: c.origin, type: d ? "redo" : "undo", changedParentTypes: c.changedParentTypes }, this];
      p ? this.emit("stack-item-added", b) : this.emit("stack-item-updated", b);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  /**
   * Extend the scope.
   *
   * @param {Array<AbstractType<any> | Doc> | AbstractType<any> | Doc} ytypes
   */
  addToScope(e) {
    const n = new Set(this.scope);
    e = Hs(e) ? e : [e], e.forEach((r) => {
      n.has(r) || (n.add(r), (r instanceof Ee ? r.doc !== this.doc : r !== this.doc) && Om("[yjs#509] Not same Y.Doc"), this.scope.push(r));
    });
  }
  /**
   * @param {any} origin
   */
  addTrackedOrigin(e) {
    this.trackedOrigins.add(e);
  }
  /**
   * @param {any} origin
   */
  removeTrackedOrigin(e) {
    this.trackedOrigins.delete(e);
  }
  clear(e = !0, n = !0) {
    (e && this.canUndo() || n && this.canRedo()) && this.doc.transact((r) => {
      e && (this.undoStack.forEach((i) => yd(r, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => yd(r, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: n }]);
    });
  }
  /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */
  stopCapturing() {
    this.lastChange = 0;
  }
  /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  undo() {
    this.undoing = !0;
    let e;
    try {
      e = xd(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return e;
  }
  /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  redo() {
    this.redoing = !0;
    let e;
    try {
      e = xd(this, this.redoStack, "redo");
    } finally {
      this.redoing = !1;
    }
    return e;
  }
  /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */
  canUndo() {
    return this.undoStack.length > 0;
  }
  /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
  }
}
function* Y2(t) {
  const e = ge(t.restDecoder);
  for (let n = 0; n < e; n++) {
    const r = ge(t.restDecoder), i = t.readClient();
    let o = ge(t.restDecoder);
    for (let s = 0; s < r; s++) {
      const a = t.readInfo();
      if (a === 10) {
        const c = ge(t.restDecoder);
        yield new ot(oe(i, o), c), o += c;
      } else if ((yo & a) !== 0) {
        const c = (a & (Rt | $e)) === 0, d = new me(
          oe(i, o),
          null,
          // left
          (a & $e) === $e ? t.readLeftID() : null,
          // origin
          null,
          // right
          (a & Rt) === Rt ? t.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          c ? t.readParentInfo() ? t.readString() : t.readLeftID() : null,
          // parent
          c && (a & br) === br ? t.readString() : null,
          // parentSub
          up(t, a)
          // item content
        );
        yield d, o += d.length;
      } else {
        const c = t.readLen();
        yield new Xe(oe(i, o), c), o += c;
      }
    }
  }
}
class Q2 {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(e, n) {
    this.gen = Y2(e), this.curr = null, this.done = !1, this.filterSkips = n, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === ot);
    return this.curr;
  }
}
class X2 {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(e) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = e, this.clientStructs = [];
  }
}
const Z2 = (t, e) => {
  if (t.constructor === Xe) {
    const { client: n, clock: r } = t.id;
    return new Xe(oe(n, r + e), t.length - e);
  } else if (t.constructor === ot) {
    const { client: n, clock: r } = t.id;
    return new ot(oe(n, r + e), t.length - e);
  } else {
    const n = (
      /** @type {Item} */
      t
    ), { client: r, clock: i } = n.id;
    return new me(
      oe(r, i + e),
      null,
      oe(r, i + e - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(e)
    );
  }
}, wd = (t, e = $i, n = ko) => {
  if (t.length === 1)
    return t[0];
  const r = t.map((f) => new e(Yl(f)));
  let i = r.map((f) => new Q2(f, !0)), o = null;
  const s = new n(), a = new X2(s);
  for (; i = i.filter((h) => h.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (h, m) => {
      if (h.curr.id.client === m.curr.id.client) {
        const p = h.curr.id.clock - m.curr.id.clock;
        return p === 0 ? h.curr.constructor === m.curr.constructor ? 0 : h.curr.constructor === ot ? 1 : -1 : p;
      } else
        return m.curr.id.client - h.curr.id.client;
    }
  ), i.length !== 0; ) {
    const f = i[0], u = (
      /** @type {Item | GC} */
      f.curr.id.client
    );
    if (o !== null) {
      let h = (
        /** @type {Item | GC | null} */
        f.curr
      ), m = !1;
      for (; h !== null && h.id.clock + h.length <= o.struct.id.clock + o.struct.length && h.id.client >= o.struct.id.client; )
        h = f.next(), m = !0;
      if (h === null || // current decoder is empty
      h.id.client !== u || // check whether there is another decoder that has has updates from `firstClient`
      m && h.id.clock > o.struct.id.clock + o.struct.length)
        continue;
      if (u !== o.struct.id.client)
        rr(a, o.struct, o.offset), o = { struct: h, offset: 0 }, f.next();
      else if (o.struct.id.clock + o.struct.length < h.id.clock)
        if (o.struct.constructor === ot)
          o.struct.length = h.id.clock + h.length - o.struct.id.clock;
        else {
          rr(a, o.struct, o.offset);
          const p = h.id.clock - o.struct.id.clock - o.struct.length;
          o = { struct: new ot(oe(u, o.struct.id.clock + o.struct.length), p), offset: 0 };
        }
      else {
        const p = o.struct.id.clock + o.struct.length - h.id.clock;
        p > 0 && (o.struct.constructor === ot ? o.struct.length -= p : h = Z2(h, p)), o.struct.mergeWith(
          /** @type {any} */
          h
        ) || (rr(a, o.struct, o.offset), o = { struct: h, offset: 0 }, f.next());
      }
    } else
      o = { struct: (
        /** @type {Item | GC} */
        f.curr
      ), offset: 0 }, f.next();
    for (let h = f.curr; h !== null && h.id.client === u && h.id.clock === o.struct.id.clock + o.struct.length && h.constructor !== ot; h = f.next())
      rr(a, o.struct, o.offset), o = { struct: h, offset: 0 };
  }
  o !== null && (rr(a, o.struct, o.offset), o = null), eT(a);
  const c = r.map((f) => E2(f)), d = Ks(c);
  return ra(s, d), s.toUint8Array();
}, Gm = (t) => {
  t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: lt(t.encoder.restEncoder) }), t.encoder.restEncoder = $r(), t.written = 0);
}, rr = (t, e, n) => {
  t.written > 0 && t.currClient !== e.id.client && Gm(t), t.written === 0 && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), de(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++;
}, eT = (t) => {
  Gm(t);
  const e = t.encoder.restEncoder;
  de(e, t.clientStructs.length);
  for (let n = 0; n < t.clientStructs.length; n++) {
    const r = t.clientStructs[n];
    de(e, r.written), xo(e, r.restEncoder);
  }
}, kd = "You must not compute changes after the event-handler fired.";
class No {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(e, n) {
    this.target = e, this.currentTarget = e, this.transaction = n, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = tT(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(e) {
    return Qn(this.transaction.deleteSet, e.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Qt(kd);
      const e = /* @__PURE__ */ new Map(), n = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(n).forEach((i) => {
        if (i !== null) {
          const o = (
            /** @type {Item} */
            n._map.get(i)
          );
          let s, a;
          if (this.adds(o)) {
            let c = o.left;
            for (; c !== null && this.adds(c); )
              c = c.left;
            if (this.deletes(o))
              if (c !== null && this.deletes(c))
                s = "delete", a = Zo(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (s = "update", a = Zo(c.content.getContent())) : (s = "add", a = void 0);
          } else if (this.deletes(o))
            s = "delete", a = Zo(
              /** @type {Item} */
              o.content.getContent()
            );
          else
            return;
          e.set(i, { action: s, oldValue: a });
        }
      }), this._keys = e;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(e) {
    return e.id.clock >= (this.transaction.beforeState.get(e.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let e = this._changes;
    if (e === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Qt(kd);
      const n = this.target, r = dn(), i = dn(), o = [];
      if (e = {
        added: r,
        deleted: i,
        delta: o,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(n).has(null)) {
        let a = null;
        const c = () => {
          a && o.push(a);
        };
        for (let d = n._start; d !== null; d = d.right)
          d.deleted ? this.deletes(d) && !this.adds(d) && ((a === null || a.delete === void 0) && (c(), a = { delete: 0 }), a.delete += d.length, i.add(d)) : this.adds(d) ? ((a === null || a.insert === void 0) && (c(), a = { insert: [] }), a.insert = a.insert.concat(d.content.getContent()), r.add(d)) : ((a === null || a.retain === void 0) && (c(), a = { retain: 0 }), a.retain += d.length);
        a !== null && a.retain === void 0 && c();
      }
      this._changes = e;
    }
    return (
      /** @type {any} */
      e
    );
  }
}
const tT = (t, e) => {
  const n = [];
  for (; e._item !== null && e !== t; ) {
    if (e._item.parentSub !== null)
      n.unshift(e._item.parentSub);
    else {
      let r = 0, i = (
        /** @type {AbstractType<any>} */
        e._item.parent._start
      );
      for (; i !== e._item && i !== null; )
        !i.deleted && i.countable && (r += i.length), i = i.right;
      n.unshift(r);
    }
    e = /** @type {AbstractType<any>} */
    e._item.parent;
  }
  return n;
}, Re = () => {
  Om("Invalid access: Add Yjs type to a document before reading data.");
}, qm = 80;
let oa = 0;
class nT {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(e, n) {
    e.marker = !0, this.p = e, this.index = n, this.timestamp = oa++;
  }
}
const rT = (t) => {
  t.timestamp = oa++;
}, Km = (t, e, n) => {
  t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = oa++;
}, iT = (t, e, n) => {
  if (t.length >= qm) {
    const r = t.reduce((i, o) => i.timestamp < o.timestamp ? i : o);
    return Km(r, e, n), r;
  } else {
    const r = new nT(e, n);
    return t.push(r), r;
  }
}, So = (t, e) => {
  if (t._start === null || e === 0 || t._searchMarker === null)
    return null;
  const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((o, s) => gi(e - o.index) < gi(e - s.index) ? o : s);
  let r = t._start, i = 0;
  for (n !== null && (r = n.p, i = n.index, rT(n)); r.right !== null && i < e; ) {
    if (!r.deleted && r.countable) {
      if (e < i + r.length)
        break;
      i += r.length;
    }
    r = r.right;
  }
  for (; r.left !== null && i > e; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  for (; r.left !== null && r.left.id.client === r.id.client && r.left.id.clock + r.left.length === r.id.clock; )
    r = r.left, !r.deleted && r.countable && (i -= r.length);
  return n !== null && gi(n.index - i) < /** @type {YText|YArray<any>} */
  r.parent.length / qm ? (Km(n, r, i), n) : iT(t._searchMarker, r, i);
}, Cr = (t, e, n) => {
  for (let r = t.length - 1; r >= 0; r--) {
    const i = t[r];
    if (n > 0) {
      let o = i.p;
      for (o.marker = !1; o && (o.deleted || !o.countable); )
        o = o.left, o && !o.deleted && o.countable && (i.index -= o.length);
      if (o === null || o.marker === !0) {
        t.splice(r, 1);
        continue;
      }
      i.p = o, o.marker = !0;
    }
    (e < i.index || n > 0 && e === i.index) && (i.index = Yt(e, i.index + n));
  }
}, Io = (t, e, n) => {
  const r = t, i = e.changedParentTypes;
  for (; Bt(i, t, () => []).push(n), t._item !== null; )
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  $m(r._eH, n, e);
};
class Ee {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = hd(), this._dEH = hd(), this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(e, n) {
    this.doc = e, this._item = n;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw ct();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw ct();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(e) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let e = this._start;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    !e.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(e) {
    md(this._eH, e);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(e) {
    md(this._dEH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(e) {
    pd(this._eH, e);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(e) {
    pd(this._dEH, e);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const Jm = (t, e, n) => {
  t.doc ?? Re(), e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
  let r = n - e;
  const i = [];
  let o = t._start;
  for (; o !== null && r > 0; ) {
    if (o.countable && !o.deleted) {
      const s = o.content.getContent();
      if (s.length <= e)
        e -= s.length;
      else {
        for (let a = e; a < s.length && r > 0; a++)
          i.push(s[a]), r--;
        e = 0;
      }
    }
    o = o.right;
  }
  return i;
}, Ym = (t) => {
  t.doc ?? Re();
  const e = [];
  let n = t._start;
  for (; n !== null; ) {
    if (n.countable && !n.deleted) {
      const r = n.content.getContent();
      for (let i = 0; i < r.length; i++)
        e.push(r[i]);
    }
    n = n.right;
  }
  return e;
}, Qm = (t, e) => {
  const n = [];
  let r = t._start;
  for (; r !== null; ) {
    if (r.countable && nn(r, e)) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        n.push(i[o]);
    }
    r = r.right;
  }
  return n;
}, Nr = (t, e) => {
  let n = 0, r = t._start;
  for (t.doc ?? Re(); r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let o = 0; o < i.length; o++)
        e(i[o], n++, t);
    }
    r = r.right;
  }
}, Xm = (t, e) => {
  const n = [];
  return Nr(t, (r, i) => {
    n.push(e(r, i, t));
  }), n;
}, oT = (t) => {
  let e = t._start, n = null, r = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (n === null) {
        for (; e !== null && e.deleted; )
          e = e.right;
        if (e === null)
          return {
            done: !0,
            value: void 0
          };
        n = e.content.getContent(), r = 0, e = e.right;
      }
      const i = n[r++];
      return n.length <= r && (n = null), {
        done: !1,
        value: i
      };
    }
  };
}, Zm = (t, e) => {
  t.doc ?? Re();
  const n = So(t, e);
  let r = t._start;
  for (n !== null && (r = n.p, e -= n.index); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (e < r.length)
        return r.content.getContent()[e];
      e -= r.length;
    }
}, Bi = (t, e, n, r) => {
  let i = n;
  const o = t.doc, s = o.clientID, a = o.store, c = n === null ? e._start : n.right;
  let d = [];
  const f = () => {
    d.length > 0 && (i = new me(oe(s, ke(a, s)), i, i && i.lastId, c, c && c.id, e, null, new hn(d)), i.integrate(t, 0), d = []);
  };
  r.forEach((u) => {
    if (u === null)
      d.push(u);
    else
      switch (u.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          d.push(u);
          break;
        default:
          switch (f(), u.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new me(oe(s, ke(a, s)), i, i && i.lastId, c, c && c.id, e, null, new jr(new Uint8Array(
                /** @type {Uint8Array} */
                u
              ))), i.integrate(t, 0);
              break;
            case gn:
              i = new me(oe(s, ke(a, s)), i, i && i.lastId, c, c && c.id, e, null, new Br(
                /** @type {Doc} */
                u
              )), i.integrate(t, 0);
              break;
            default:
              if (u instanceof Ee)
                i = new me(oe(s, ke(a, s)), i, i && i.lastId, c, c && c.id, e, null, new yt(u)), i.integrate(t, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), f();
}, ep = () => Qt("Length exceeded!"), tp = (t, e, n, r) => {
  if (n > e._length)
    throw ep();
  if (n === 0)
    return e._searchMarker && Cr(e._searchMarker, n, r.length), Bi(t, e, null, r);
  const i = n, o = So(e, n);
  let s = e._start;
  for (o !== null && (s = o.p, n -= o.index, n === 0 && (s = s.prev, n += s && s.countable && !s.deleted ? s.length : 0)); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (n <= s.length) {
        n < s.length && je(t, oe(s.id.client, s.id.clock + n));
        break;
      }
      n -= s.length;
    }
  return e._searchMarker && Cr(e._searchMarker, i, r.length), Bi(t, e, s, r);
}, sT = (t, e, n) => {
  let i = (e._searchMarker || []).reduce((o, s) => s.index > o.index ? s : o, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return Bi(t, e, i, n);
}, np = (t, e, n, r) => {
  if (r === 0)
    return;
  const i = n, o = r, s = So(e, n);
  let a = e._start;
  for (s !== null && (a = s.p, n -= s.index); a !== null && n > 0; a = a.right)
    !a.deleted && a.countable && (n < a.length && je(t, oe(a.id.client, a.id.clock + n)), n -= a.length);
  for (; r > 0 && a !== null; )
    a.deleted || (r < a.length && je(t, oe(a.id.client, a.id.clock + r)), a.delete(t), r -= a.length), a = a.right;
  if (r > 0)
    throw ep();
  e._searchMarker && Cr(
    e._searchMarker,
    i,
    -o + r
    /* in case we remove the above exception */
  );
}, Hi = (t, e, n) => {
  const r = e._map.get(n);
  r !== void 0 && r.delete(t);
}, sa = (t, e, n, r) => {
  const i = e._map.get(n) || null, o = t.doc, s = o.clientID;
  let a;
  if (r == null)
    a = new hn([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        a = new hn([r]);
        break;
      case Uint8Array:
        a = new jr(
          /** @type {Uint8Array} */
          r
        );
        break;
      case gn:
        a = new Br(
          /** @type {Doc} */
          r
        );
        break;
      default:
        if (r instanceof Ee)
          a = new yt(r);
        else
          throw new Error("Unexpected content type");
    }
  new me(oe(s, ke(o.store, s)), i, i && i.lastId, null, null, e, n, a).integrate(t, 0);
}, la = (t, e) => {
  t.doc ?? Re();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, rp = (t) => {
  const e = {};
  return t.doc ?? Re(), t._map.forEach((n, r) => {
    n.deleted || (e[r] = n.content.getContent()[n.length - 1]);
  }), e;
}, ip = (t, e) => {
  t.doc ?? Re();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted;
}, lT = (t, e) => {
  const n = {};
  return t._map.forEach((r, i) => {
    let o = r;
    for (; o !== null && (!e.sv.has(o.id.client) || o.id.clock >= (e.sv.get(o.id.client) || 0)); )
      o = o.left;
    o !== null && nn(o, e) && (n[i] = o.content.getContent()[o.length - 1]);
  }), n;
}, ii = (t) => (t.doc ?? Re(), I2(
  t._map.entries(),
  /** @param {any} entry */
  (e) => !e[1].deleted
));
class aT extends No {
}
class Ln extends Ee {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(e) {
    const n = new Ln();
    return n.push(e), n;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new Ln();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const e = new Ln();
    return e.insert(0, this.toArray().map(
      (n) => n instanceof Ee ? (
        /** @type {typeof el} */
        n.clone()
      ) : n
    )), e;
  }
  get length() {
    return this.doc ?? Re(), this._length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    super._callObserver(e, n), Io(this, e, new aT(this, e));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      tp(
        r,
        this,
        e,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(e) {
    this.doc !== null ? he(this.doc, (n) => {
      sT(
        n,
        this,
        /** @type {any} */
        e
      );
    }) : this._prelimContent.push(...e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<T>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(e, n = 1) {
    this.doc !== null ? he(this.doc, (r) => {
      np(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(e) {
    return Zm(this, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Ym(this);
  }
  /**
   * Returns a portion of this YArray into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(e = 0, n = this.length) {
    return Jm(this, e, n);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((e) => e instanceof Ee ? e.toJSON() : e);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(e) {
    return Xm(
      this,
      /** @type {any} */
      e
    );
  }
  /**
   * Executes a provided function once on every element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    Nr(this, e);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return oT(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(OT);
  }
}
const cT = (t) => new Ln();
class dT extends No {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(e, n, r) {
    super(e, n), this.keysChanged = r;
  }
}
class Hn extends Ee {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(e) {
    super(), this._prelimContent = null, e === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(e);
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), this._prelimContent.forEach((r, i) => {
      this.set(i, r);
    }), this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new Hn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YMap<MapType>}
   */
  clone() {
    const e = new Hn();
    return this.forEach((n, r) => {
      e.set(r, n instanceof Ee ? (
        /** @type {typeof value} */
        n.clone()
      ) : n);
    }), e;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    Io(this, e, new dT(this, e, n));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    this.doc ?? Re();
    const e = {};
    return this._map.forEach((n, r) => {
      if (!n.deleted) {
        const i = n.content.getContent()[n.length - 1];
        e[r] = i instanceof Ee ? i.toJSON() : i;
      }
    }), e;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...ii(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return is(
      ii(this),
      /** @param {any} v */
      (e) => e[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return is(
      ii(this),
      /** @param {any} v */
      (e) => e[1].content.getContent()[e[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return is(
      ii(this),
      /** @param {any} v */
      (e) => (
        /** @type {any} */
        [e[0], e[1].content.getContent()[e[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    this.doc ?? Re(), this._map.forEach((n, r) => {
      n.deleted || e(n.content.getContent()[n.length - 1], r, this);
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(e) {
    this.doc !== null ? he(this.doc, (n) => {
      Hi(n, this, e);
    }) : this._prelimContent.delete(e);
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(e, n) {
    return this.doc !== null ? he(this.doc, (r) => {
      sa(
        r,
        this,
        e,
        /** @type {any} */
        n
      );
    }) : this._prelimContent.set(e, n), n;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(e) {
    return (
      /** @type {any} */
      la(this, e)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(e) {
    return ip(this, e);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? he(this.doc, (e) => {
      this.forEach(function(n, r, i) {
        Hi(e, i, r);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(RT);
  }
}
const uT = (t) => new Hn(), Kt = (t, e) => t === e || typeof t == "object" && typeof e == "object" && t && e && n2(t, e);
class Xs {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(e, n, r, i) {
    this.left = e, this.right = n, this.index = r, this.currentAttributes = i;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    this.right === null && Ve(), this.right.content.constructor === Ce ? this.right.deleted || Xn(
      this.currentAttributes,
      /** @type {ContentFormat} */
      this.right.content
    ) : this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right;
  }
}
const Cd = (t, e, n) => {
  for (; e.right !== null && n > 0; )
    e.right.content.constructor === Ce ? e.right.deleted || Xn(
      e.currentAttributes,
      /** @type {ContentFormat} */
      e.right.content
    ) : e.right.deleted || (n < e.right.length && je(t, oe(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length), e.left = e.right, e.right = e.right.right;
  return e;
}, oi = (t, e, n, r) => {
  const i = /* @__PURE__ */ new Map(), o = r ? So(e, n) : null;
  if (o) {
    const s = new Xs(o.p.left, o.p, o.index, i);
    return Cd(t, s, n - o.index);
  } else {
    const s = new Xs(null, e._start, 0, i);
    return Cd(t, s, n);
  }
}, op = (t, e, n, r) => {
  for (; n.right !== null && (n.right.deleted === !0 || n.right.content.constructor === Ce && Kt(
    r.get(
      /** @type {ContentFormat} */
      n.right.content.key
    ),
    /** @type {ContentFormat} */
    n.right.content.value
  )); )
    n.right.deleted || r.delete(
      /** @type {ContentFormat} */
      n.right.content.key
    ), n.forward();
  const i = t.doc, o = i.clientID;
  r.forEach((s, a) => {
    const c = n.left, d = n.right, f = new me(oe(o, ke(i.store, o)), c, c && c.lastId, d, d && d.id, e, null, new Ce(a, s));
    f.integrate(t, 0), n.right = f, n.forward();
  });
}, Xn = (t, e) => {
  const { key: n, value: r } = e;
  r === null ? t.delete(n) : t.set(n, r);
}, sp = (t, e) => {
  for (; t.right !== null; ) {
    if (!(t.right.deleted || t.right.content.constructor === Ce && Kt(
      e[
        /** @type {ContentFormat} */
        t.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      t.right.content.value
    ))) break;
    t.forward();
  }
}, lp = (t, e, n, r) => {
  const i = t.doc, o = i.clientID, s = /* @__PURE__ */ new Map();
  for (const a in r) {
    const c = r[a], d = n.currentAttributes.get(a) ?? null;
    if (!Kt(d, c)) {
      s.set(a, d);
      const { left: f, right: u } = n;
      n.right = new me(oe(o, ke(i.store, o)), f, f && f.lastId, u, u && u.id, e, null, new Ce(a, c)), n.right.integrate(t, 0), n.forward();
    }
  }
  return s;
}, ls = (t, e, n, r, i) => {
  n.currentAttributes.forEach((h, m) => {
    i[m] === void 0 && (i[m] = null);
  });
  const o = t.doc, s = o.clientID;
  sp(n, i);
  const a = lp(t, e, n, i), c = r.constructor === String ? new mt(
    /** @type {string} */
    r
  ) : r instanceof Ee ? new yt(r) : new bn(r);
  let { left: d, right: f, index: u } = n;
  e._searchMarker && Cr(e._searchMarker, n.index, c.getLength()), f = new me(oe(s, ke(o.store, s)), d, d && d.lastId, f, f && f.id, e, null, c), f.integrate(t, 0), n.right = f, n.index = u, n.forward(), op(t, e, n, a);
}, Nd = (t, e, n, r, i) => {
  const o = t.doc, s = o.clientID;
  sp(n, i);
  const a = lp(t, e, n, i);
  e: for (; n.right !== null && (r > 0 || a.size > 0 && (n.right.deleted || n.right.content.constructor === Ce)); ) {
    if (!n.right.deleted)
      switch (n.right.content.constructor) {
        case Ce: {
          const { key: c, value: d } = (
            /** @type {ContentFormat} */
            n.right.content
          ), f = i[c];
          if (f !== void 0) {
            if (Kt(f, d))
              a.delete(c);
            else {
              if (r === 0)
                break e;
              a.set(c, d);
            }
            n.right.delete(t);
          } else
            n.currentAttributes.set(c, d);
          break;
        }
        default:
          r < n.right.length && je(t, oe(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
          break;
      }
    n.forward();
  }
  if (r > 0) {
    let c = "";
    for (; r > 0; r--)
      c += `
`;
    n.right = new me(oe(s, ke(o.store, s)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new mt(c)), n.right.integrate(t, 0), n.forward();
  }
  op(t, e, n, a);
}, ap = (t, e, n, r, i) => {
  let o = e;
  const s = at();
  for (; o && (!o.countable || o.deleted); ) {
    if (!o.deleted && o.content.constructor === Ce) {
      const d = (
        /** @type {ContentFormat} */
        o.content
      );
      s.set(d.key, d);
    }
    o = o.right;
  }
  let a = 0, c = !1;
  for (; e !== o; ) {
    if (n === e && (c = !0), !e.deleted) {
      const d = e.content;
      if (d.constructor === Ce) {
        const { key: f, value: u } = (
          /** @type {ContentFormat} */
          d
        ), h = r.get(f) ?? null;
        (s.get(f) !== d || h === u) && (e.delete(t), a++, !c && (i.get(f) ?? null) === u && h !== u && (h === null ? i.delete(f) : i.set(f, h))), !c && !e.deleted && Xn(
          i,
          /** @type {ContentFormat} */
          d
        );
      }
    }
    e = /** @type {Item} */
    e.right;
  }
  return a;
}, fT = (t, e) => {
  for (; e && e.right && (e.right.deleted || !e.right.countable); )
    e = e.right;
  const n = /* @__PURE__ */ new Set();
  for (; e && (e.deleted || !e.countable); ) {
    if (!e.deleted && e.content.constructor === Ce) {
      const r = (
        /** @type {ContentFormat} */
        e.content.key
      );
      n.has(r) ? e.delete(t) : n.add(r);
    }
    e = e.left;
  }
}, hT = (t) => {
  let e = 0;
  return he(
    /** @type {Doc} */
    t.doc,
    (n) => {
      let r = (
        /** @type {Item} */
        t._start
      ), i = t._start, o = at();
      const s = Bs(o);
      for (; i; )
        i.deleted === !1 && (i.content.constructor === Ce ? Xn(
          s,
          /** @type {ContentFormat} */
          i.content
        ) : (e += ap(n, r, i, o, s), o = Bs(s), r = i)), i = i.right;
    }
  ), e;
}, mT = (t) => {
  const e = /* @__PURE__ */ new Set(), n = t.doc;
  for (const [r, i] of t.afterState.entries()) {
    const o = t.beforeState.get(r) || 0;
    i !== o && Vm(
      t,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(r),
      o,
      i,
      (s) => {
        !s.deleted && /** @type {Item} */
        s.content.constructor === Ce && s.constructor !== Xe && e.add(
          /** @type {any} */
          s.parent
        );
      }
    );
  }
  he(n, (r) => {
    Xt(t, t.deleteSet, (i) => {
      if (i instanceof Xe || !/** @type {YText} */
      i.parent._hasFormatting || e.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const o = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === Ce ? e.add(o) : fT(r, i);
    });
    for (const i of e)
      hT(i);
  });
}, Sd = (t, e, n) => {
  const r = n, i = Bs(e.currentAttributes), o = e.right;
  for (; n > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case yt:
        case bn:
        case mt:
          n < e.right.length && je(t, oe(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t);
          break;
      }
    e.forward();
  }
  o && ap(t, o, e.right, i, e.currentAttributes);
  const s = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (e.left || e.right).parent
  );
  return s._searchMarker && Cr(s._searchMarker, e.index, -r + n), e;
};
class pT extends No {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(e, n, r) {
    super(e, n), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), r.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.keysChanged.add(i);
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const e = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = e;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const e = (
        /** @type {Doc} */
        this.target.doc
      ), n = [];
      he(e, (r) => {
        const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
        let s = this.target._start, a = null;
        const c = {};
        let d = "", f = 0, u = 0;
        const h = () => {
          if (a !== null) {
            let m = null;
            switch (a) {
              case "delete":
                u > 0 && (m = { delete: u }), u = 0;
                break;
              case "insert":
                (typeof d == "object" || d.length > 0) && (m = { insert: d }, i.size > 0 && (m.attributes = {}, i.forEach((p, b) => {
                  p !== null && (m.attributes[b] = p);
                }))), d = "";
                break;
              case "retain":
                f > 0 && (m = { retain: f }, e2(c) || (m.attributes = XA({}, c))), f = 0;
                break;
            }
            m && n.push(m), a = null;
          }
        };
        for (; s !== null; ) {
          switch (s.content.constructor) {
            case yt:
            case bn:
              this.adds(s) ? this.deletes(s) || (h(), a = "insert", d = s.content.getContent()[0], h()) : this.deletes(s) ? (a !== "delete" && (h(), a = "delete"), u += 1) : s.deleted || (a !== "retain" && (h(), a = "retain"), f += 1);
              break;
            case mt:
              this.adds(s) ? this.deletes(s) || (a !== "insert" && (h(), a = "insert"), d += /** @type {ContentString} */
              s.content.str) : this.deletes(s) ? (a !== "delete" && (h(), a = "delete"), u += s.length) : s.deleted || (a !== "retain" && (h(), a = "retain"), f += s.length);
              break;
            case Ce: {
              const { key: m, value: p } = (
                /** @type {ContentFormat} */
                s.content
              );
              if (this.adds(s)) {
                if (!this.deletes(s)) {
                  const b = i.get(m) ?? null;
                  Kt(b, p) ? p !== null && s.delete(r) : (a === "retain" && h(), Kt(p, o.get(m) ?? null) ? delete c[m] : c[m] = p);
                }
              } else if (this.deletes(s)) {
                o.set(m, p);
                const b = i.get(m) ?? null;
                Kt(b, p) || (a === "retain" && h(), c[m] = b);
              } else if (!s.deleted) {
                o.set(m, p);
                const b = c[m];
                b !== void 0 && (Kt(b, p) ? b !== null && s.delete(r) : (a === "retain" && h(), p === null ? delete c[m] : c[m] = p));
              }
              s.deleted || (a === "insert" && h(), Xn(
                i,
                /** @type {ContentFormat} */
                s.content
              ));
              break;
            }
          }
          s = s.right;
        }
        for (h(); n.length > 0; ) {
          const m = n[n.length - 1];
          if (m.retain !== void 0 && m.attributes === void 0)
            n.pop();
          else
            break;
        }
      }), this._delta = n;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class Zt extends Ee {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(e) {
    super(), this._pending = e !== void 0 ? [() => this.insert(0, e)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this.doc ?? Re(), this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n);
    try {
      this._pending.forEach((r) => r());
    } catch (r) {
      console.error(r);
    }
    this._pending = null;
  }
  _copy() {
    return new Zt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const e = new Zt();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    super._callObserver(e, n);
    const r = new pT(this, e, n);
    Io(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    this.doc ?? Re();
    let e = "", n = this._start;
    for (; n !== null; )
      !n.deleted && n.countable && n.content.constructor === mt && (e += /** @type {ContentString} */
      n.content.str), n = n.right;
    return e;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {Array<any>} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(e, { sanitize: n = !0 } = {}) {
    this.doc !== null ? he(this.doc, (r) => {
      const i = new Xs(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let o = 0; o < e.length; o++) {
        const s = e[o];
        if (s.insert !== void 0) {
          const a = !n && typeof s.insert == "string" && o === e.length - 1 && i.right === null && s.insert.slice(-1) === `
` ? s.insert.slice(0, -1) : s.insert;
          (typeof a != "string" || a.length > 0) && ls(r, this, i, a, s.attributes || {});
        } else s.retain !== void 0 ? Nd(r, this, i, s.retain, s.attributes || {}) : s.delete !== void 0 && Sd(r, i, s.delete);
      }
    }) : this._pending.push(() => this.applyDelta(e));
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(e, n, r) {
    this.doc ?? Re();
    const i = [], o = /* @__PURE__ */ new Map(), s = (
      /** @type {Doc} */
      this.doc
    );
    let a = "", c = this._start;
    function d() {
      if (a.length > 0) {
        const u = {};
        let h = !1;
        o.forEach((p, b) => {
          h = !0, u[b] = p;
        });
        const m = { insert: a };
        h && (m.attributes = u), i.push(m), a = "";
      }
    }
    const f = () => {
      for (; c !== null; ) {
        if (nn(c, e) || n !== void 0 && nn(c, n))
          switch (c.content.constructor) {
            case mt: {
              const u = o.get("ychange");
              e !== void 0 && !nn(c, e) ? (u === void 0 || u.user !== c.id.client || u.type !== "removed") && (d(), o.set("ychange", r ? r("removed", c.id) : { type: "removed" })) : n !== void 0 && !nn(c, n) ? (u === void 0 || u.user !== c.id.client || u.type !== "added") && (d(), o.set("ychange", r ? r("added", c.id) : { type: "added" })) : u !== void 0 && (d(), o.delete("ychange")), a += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case yt:
            case bn: {
              d();
              const u = {
                insert: c.content.getContent()[0]
              };
              if (o.size > 0) {
                const h = (
                  /** @type {Object<string,any>} */
                  {}
                );
                u.attributes = h, o.forEach((m, p) => {
                  h[p] = m;
                });
              }
              i.push(u);
              break;
            }
            case Ce:
              nn(c, e) && (d(), Xn(
                o,
                /** @type {ContentFormat} */
                c.content
              ));
              break;
          }
        c = c.right;
      }
      d();
    };
    return e || n ? he(s, (u) => {
      e && Ys(u, e), n && Ys(u, n), f();
    }, "cleanup") : f(), i;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(e, n, r) {
    if (n.length <= 0)
      return;
    const i = this.doc;
    i !== null ? he(i, (o) => {
      const s = oi(o, this, e, !r);
      r || (r = {}, s.currentAttributes.forEach((a, c) => {
        r[c] = a;
      })), ls(o, this, s, n, r);
    }) : this._pending.push(() => this.insert(e, n, r));
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(e, n, r) {
    const i = this.doc;
    i !== null ? he(i, (o) => {
      const s = oi(o, this, e, !r);
      ls(o, this, s, n, r || {});
    }) : this._pending.push(() => this.insertEmbed(e, n, r || {}));
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(e, n) {
    if (n === 0)
      return;
    const r = this.doc;
    r !== null ? he(r, (i) => {
      Sd(i, oi(i, this, e, !0), n);
    }) : this._pending.push(() => this.delete(e, n));
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(e, n, r) {
    if (n === 0)
      return;
    const i = this.doc;
    i !== null ? he(i, (o) => {
      const s = oi(o, this, e, !1);
      s.right !== null && Nd(o, this, s, n, r);
    }) : this._pending.push(() => this.format(e, n, r));
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? he(this.doc, (n) => {
      Hi(n, this, e);
    }) : this._pending.push(() => this.removeAttribute(e));
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      sa(r, this, e, n);
    }) : this._pending.push(() => this.setAttribute(e, n));
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      la(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return rp(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(FT);
  }
}
const gT = (t) => new Zt();
class as {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(e, n = () => !0) {
    this._filter = n, this._root = e, this._currentNode = /** @type {Item} */
    e._start, this._firstCall = !0, e.doc ?? Re();
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let e = this._currentNode, n = e && e.content && /** @type {any} */
    e.content.type;
    if (e !== null && (!this._firstCall || e.deleted || !this._filter(n)))
      do
        if (n = /** @type {any} */
        e.content.type, !e.deleted && (n.constructor === Oe || n.constructor === fn) && n._start !== null)
          e = n._start;
        else
          for (; e !== null; ) {
            const r = e.next;
            if (r !== null) {
              e = r;
              break;
            } else e.parent === this._root ? e = null : e = /** @type {AbstractType<any>} */
            e.parent._item;
          }
      while (e !== null && (e.deleted || !this._filter(
        /** @type {ContentType} */
        e.content.type
      )));
    return this._firstCall = !1, e === null ? { value: void 0, done: !0 } : (this._currentNode = e, { value: (
      /** @type {any} */
      e.content.type
    ), done: !1 });
  }
}
class fn extends Ee {
  constructor() {
    super(), this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const e = this._first;
    return e ? e.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  _copy() {
    return new fn();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const e = new fn();
    return e.insert(0, this.toArray().map((n) => n instanceof Ee ? n.clone() : n)), e;
  }
  get length() {
    return this.doc ?? Re(), this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(e) {
    return new as(this, e);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(e) {
    e = e.toUpperCase();
    const r = new as(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
    return r.done ? null : r.value;
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(e) {
    return e = e.toUpperCase(), un(new as(this, (n) => n.nodeName && n.nodeName.toUpperCase() === e));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    Io(this, e, new yT(this, n, e));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Xm(this, (e) => e.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n = {}, r) {
    const i = e.createDocumentFragment();
    return r !== void 0 && r._createAssociation(i, this), Nr(this, (o) => {
      i.insertBefore(o.toDOM(e, n, r), null);
    }), i;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      tp(r, this, e, n);
    }) : this._prelimContent.splice(e, 0, ...n);
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(e, n) {
    if (this.doc !== null)
      he(this.doc, (r) => {
        const i = e && e instanceof Ee ? e._item : e;
        Bi(r, this, i, n);
      });
    else {
      const r = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = e === null ? 0 : r.findIndex((o) => o === e) + 1;
      if (i === 0 && e !== null)
        throw Qt("Reference item not found");
      r.splice(i, 0, ...n);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(e, n = 1) {
    this.doc !== null ? he(this.doc, (r) => {
      np(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Ym(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(e) {
    this.insert(this.length, e);
  }
  /**
   * Prepends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to prepend.
   */
  unshift(e) {
    this.insert(0, e);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(e) {
    return Zm(this, e);
  }
  /**
   * Returns a portion of this YXmlFragment into a JavaScript Array selected
   * from start to end (end not included).
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(e = 0, n = this.length) {
    return Jm(this, e, n);
  }
  /**
   * Executes a provided function on once on every child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(e) {
    Nr(this, e);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(PT);
  }
}
const bT = (t) => new fn();
class Oe extends fn {
  constructor(e = "UNDEFINED") {
    super(), this.nodeName = e, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(e, n) {
    super._integrate(e, n), /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((r, i) => {
      this.setAttribute(i, r);
    }), this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new Oe(this.nodeName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlElement<KV>}
   */
  clone() {
    const e = new Oe(this.nodeName), n = this.getAttributes();
    return ZA(n, (r, i) => {
      typeof r == "string" && e.setAttribute(i, r);
    }), e.insert(0, this.toArray().map((r) => r instanceof Ee ? r.clone() : r)), e;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const e = this.getAttributes(), n = [], r = [];
    for (const a in e)
      r.push(a);
    r.sort();
    const i = r.length;
    for (let a = 0; a < i; a++) {
      const c = r[a];
      n.push(c + '="' + e[c] + '"');
    }
    const o = this.nodeName.toLocaleLowerCase(), s = n.length > 0 ? " " + n.join(" ") : "";
    return `<${o}${s}>${super.toString()}</${o}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(e) {
    this.doc !== null ? he(this.doc, (n) => {
      Hi(n, this, e);
    }) : this._prelimAttrs.delete(e);
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(e, n) {
    this.doc !== null ? he(this.doc, (r) => {
      sa(r, this, e, n);
    }) : this._prelimAttrs.set(e, n);
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(e) {
    return (
      /** @type {any} */
      la(this, e)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(e) {
    return (
      /** @type {any} */
      ip(this, e)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(e) {
    return (
      /** @type {any} */
      e ? lT(this, e) : rp(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n = {}, r) {
    const i = e.createElement(this.nodeName), o = this.getAttributes();
    for (const s in o) {
      const a = o[s];
      typeof a == "string" && i.setAttribute(s, a);
    }
    return Nr(this, (s) => {
      i.appendChild(s.toDOM(e, n, r));
    }), r !== void 0 && r._createAssociation(i, this), i;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(MT), e.writeKey(this.nodeName);
  }
}
const vT = (t) => new Oe(t.readKey());
class yT extends No {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with which the
   *                                  change was created.
   */
  constructor(e, n, r) {
    super(e, r), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), n.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.attributesChanged.add(i);
    });
  }
}
class Vi extends Hn {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(e) {
    super(), this.hookName = e;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new Vi(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const e = new Vi(this.hookName);
    return this.forEach((n, r) => {
      e.set(r, n);
    }), e;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n = {}, r) {
    const i = n[this.hookName];
    let o;
    return i !== void 0 ? o = i.createDom(this) : o = document.createElement(this.hookName), o.setAttribute("data-yjs-hook", this.hookName), r !== void 0 && r._createAssociation(o, this), o;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(e) {
    e.writeTypeRef(zT), e.writeKey(this.hookName);
  }
}
const xT = (t) => new Vi(t.readKey());
class He extends Zt {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const e = this._item ? this._item.next : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const e = this._item ? this._item.prev : null;
    return e ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      e.content.type
    ) : null;
  }
  _copy() {
    return new He();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlText}
   */
  clone() {
    const e = new He();
    return e.applyDelta(this.toDelta()), e;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(e = document, n, r) {
    const i = e.createTextNode(this.toString());
    return r !== void 0 && r._createAssociation(i, this), i;
  }
  toString() {
    return this.toDelta().map((e) => {
      const n = [];
      for (const i in e.attributes) {
        const o = [];
        for (const s in e.attributes[i])
          o.push({ key: s, value: e.attributes[i][s] });
        o.sort((s, a) => s.key < a.key ? -1 : 1), n.push({ nodeName: i, attrs: o });
      }
      n.sort((i, o) => i.nodeName < o.nodeName ? -1 : 1);
      let r = "";
      for (let i = 0; i < n.length; i++) {
        const o = n[i];
        r += `<${o.nodeName}`;
        for (let s = 0; s < o.attrs.length; s++) {
          const a = o.attrs[s];
          r += ` ${a.key}="${a.value}"`;
        }
        r += ">";
      }
      r += e.insert;
      for (let i = n.length - 1; i >= 0; i--)
        r += `</${n[i].nodeName}>`;
      return r;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef($T);
  }
}
const wT = (t) => new He();
class aa {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(e, n) {
    this.id = e, this.length = n;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw ct();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} whether this merged with right
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(e, n, r) {
    throw ct();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    throw ct();
  }
}
const kT = 0;
class Xe extends aa {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    n > 0 && (this.id.clock += n, this.length -= n), Hm(e.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(kT), e.writeLen(this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, n) {
    return null;
  }
}
class jr {
  /**
   * @param {Uint8Array} content
   */
  constructor(e) {
    this.content = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new jr(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(e) {
    throw ct();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
const CT = (t) => new jr(t.readBuf());
class Sr {
  /**
   * @param {number} len
   */
  constructor(e) {
    this.len = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new Sr(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(e) {
    const n = new Sr(this.len - e);
    return this.len = e, n;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.len += e.len, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
    xr(e.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeLen(this.len - n);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const NT = (t) => new Sr(t.readLen()), cp = (t, e) => new gn({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class Br {
  /**
   * @param {Doc} doc
   */
  constructor(e) {
    e._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = e;
    const n = {};
    this.opts = n, e.gc || (n.gc = !1), e.autoLoad && (n.autoLoad = !0), e.meta !== null && (n.meta = e.meta);
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new Br(cp(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(e) {
    throw ct();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
    this.doc._item = n, e.subdocsAdded.add(this.doc), this.doc.shouldLoad && e.subdocsLoaded.add(this.doc);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    e.subdocsAdded.has(this.doc) ? e.subdocsAdded.delete(this.doc) : e.subdocsRemoved.add(this.doc);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeString(this.doc.guid), e.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
const ST = (t) => new Br(cp(t.readString(), t.readAny()));
class bn {
  /**
   * @param {Object} embed
   */
  constructor(e) {
    this.embed = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new bn(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(e) {
    throw ct();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
const IT = (t) => new bn(t.readJSON());
class Ce {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(e, n) {
    this.key = e, this.value = n;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new Ce(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(e) {
    throw ct();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(e, n) {
    const r = (
      /** @type {YText} */
      n.parent
    );
    r._searchMarker = null, r._hasFormatting = !0;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeKey(this.key), e.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const AT = (t) => new Ce(t.readKey(), t.readJSON());
class Wi {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new Wi(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(e) {
    const n = new Wi(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), n;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    const r = this.arr.length;
    e.writeLen(r - n);
    for (let i = n; i < r; i++) {
      const o = this.arr[i];
      e.writeString(o === void 0 ? "undefined" : JSON.stringify(o));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const TT = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++) {
    const i = t.readString();
    i === "undefined" ? n.push(void 0) : n.push(JSON.parse(i));
  }
  return new Wi(n);
}, ET = zi("node_env") === "development";
class hn {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e, ET && Sm(e);
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new hn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(e) {
    const n = new hn(this.arr.slice(e));
    return this.arr = this.arr.slice(0, e), n;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.arr = this.arr.concat(e.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    const r = this.arr.length;
    e.writeLen(r - n);
    for (let i = n; i < r; i++) {
      const o = this.arr[i];
      e.writeAny(o);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const DT = (t) => {
  const e = t.readLen(), n = [];
  for (let r = 0; r < e; r++)
    n.push(t.readAny());
  return new hn(n);
};
class mt {
  /**
   * @param {string} str
   */
  constructor(e) {
    this.str = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new mt(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(e) {
    const n = new mt(this.str.slice(e));
    this.str = this.str.slice(0, e);
    const r = this.str.charCodeAt(e - 1);
    return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, e - 1) + "�", n.str = "�" + n.str.slice(1)), n;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.str += e.str, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeString(n === 0 ? this.str : this.str.slice(n));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const _T = (t) => new mt(t.readString()), LT = [
  cT,
  uT,
  gT,
  vT,
  bT,
  xT,
  wT
], OT = 0, RT = 1, FT = 2, MT = 3, PT = 4, zT = 5, $T = 6;
class yt {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(e) {
    this.type = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new yt(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(e) {
    throw ct();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(e) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(e, n) {
    this.type._integrate(e.doc, n);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(e) {
    let n = this.type._start;
    for (; n !== null; )
      n.deleted ? n.id.clock < (e.beforeState.get(n.id.client) || 0) && e._mergeStructs.push(n) : n.delete(e), n = n.right;
    this.type._map.forEach((r) => {
      r.deleted ? r.id.clock < (e.beforeState.get(r.id.client) || 0) && e._mergeStructs.push(r) : r.delete(e);
    }), e.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(e) {
    let n = this.type._start;
    for (; n !== null; )
      n.gc(e, !0), n = n.right;
    this.type._start = null, this.type._map.forEach(
      /** @param {Item | null} item */
      (r) => {
        for (; r !== null; )
          r.gc(e, !0), r = r.left;
      }
    ), this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    this.type._write(e);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const jT = (t) => new yt(LT[t.readTypeRef()](t)), Zs = (t, e) => {
  let n = e, r = 0, i;
  do
    r > 0 && (n = oe(n.client, n.clock + r)), i = _n(t, n), r = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof me);
  return {
    item: i,
    diff: r
  };
}, ca = (t, e) => {
  for (; t !== null && t.keep !== e; )
    t.keep = e, t = /** @type {AbstractType<any>} */
    t.parent._item;
}, Ui = (t, e, n) => {
  const { client: r, clock: i } = e.id, o = new me(
    oe(r, i + n),
    e,
    oe(r, i + n - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(n)
  );
  return e.deleted && o.markDeleted(), e.keep && (o.keep = !0), e.redone !== null && (o.redone = oe(e.redone.client, e.redone.clock + n)), e.right = o, o.right !== null && (o.right.left = o), t._mergeStructs.push(o), o.parentSub !== null && o.right === null && o.parent._map.set(o.parentSub, o), e.length = n, o;
}, Id = (t, e) => uA(
  t,
  /** @param {StackItem} s */
  (n) => Qn(n.deletions, e)
), dp = (t, e, n, r, i, o) => {
  const s = t.doc, a = s.store, c = s.clientID, d = e.redone;
  if (d !== null)
    return je(t, d);
  let f = (
    /** @type {AbstractType<any>} */
    e.parent._item
  ), u = null, h;
  if (f !== null && f.deleted === !0) {
    if (f.redone === null && (!n.has(f) || dp(t, f, n, r, i, o) === null))
      return null;
    for (; f.redone !== null; )
      f = je(t, f.redone);
  }
  const m = f === null ? (
    /** @type {AbstractType<any>} */
    e.parent
  ) : (
    /** @type {ContentType} */
    f.content.type
  );
  if (e.parentSub === null) {
    for (u = e.left, h = e; u !== null; ) {
      let v = u;
      for (; v !== null && /** @type {AbstractType<any>} */
      v.parent._item !== f; )
        v = v.redone === null ? null : je(t, v.redone);
      if (v !== null && /** @type {AbstractType<any>} */
      v.parent._item === f) {
        u = v;
        break;
      }
      u = u.left;
    }
    for (; h !== null; ) {
      let v = h;
      for (; v !== null && /** @type {AbstractType<any>} */
      v.parent._item !== f; )
        v = v.redone === null ? null : je(t, v.redone);
      if (v !== null && /** @type {AbstractType<any>} */
      v.parent._item === f) {
        h = v;
        break;
      }
      h = h.right;
    }
  } else if (h = null, e.right && !i) {
    for (u = e; u !== null && u.right !== null && (u.right.redone || Qn(r, u.right.id) || Id(o.undoStack, u.right.id) || Id(o.redoStack, u.right.id)); )
      for (u = u.right; u.redone; ) u = je(t, u.redone);
    if (u && u.right !== null)
      return null;
  } else
    u = m._map.get(e.parentSub) || null;
  const p = ke(a, c), b = oe(c, p), y = new me(
    b,
    u,
    u && u.lastId,
    h,
    h && h.id,
    m,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = b, ca(y, !0), y.integrate(t, 0), y;
};
let me = class el extends aa {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(e, n, r, i, o, s, a, c) {
    super(e, c.getLength()), this.origin = r, this.left = n, this.right = i, this.rightOrigin = o, this.parent = s, this.parentSub = a, this.redone = null, this.content = c, this.info = this.content.isCountable() ? nd : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(e) {
    (this.info & ts) > 0 !== e && (this.info ^= ts);
  }
  get marker() {
    return (this.info & ts) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & td) > 0;
  }
  set keep(e) {
    this.keep !== e && (this.info ^= td);
  }
  get countable() {
    return (this.info & nd) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & es) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= es);
  }
  markDeleted() {
    this.info |= es;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, n) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= ke(n, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= ke(n, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === Dn && this.id.client !== this.parent.client && this.parent.clock >= ke(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = gd(e, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = je(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === Xe || this.right && this.right.constructor === Xe)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === el ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === el && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === Dn) {
      const r = _n(n, this.parent);
      r.constructor === Xe ? this.parent = null : this.parent = /** @type {ContentType} */
      r.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    if (n > 0 && (this.id.clock += n, this.left = gd(e, e.doc.store, oe(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let r = this.left, i;
        if (r !== null)
          i = r.right;
        else if (this.parentSub !== null)
          for (i = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; i !== null && i.left !== null; )
            i = i.left;
        else
          i = /** @type {AbstractType<any>} */
          this.parent._start;
        const o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (s.add(i), o.add(i), ni(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              r = i, o.clear();
            else if (ni(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && s.has(_n(e.doc.store, i.origin)))
            o.has(_n(e.doc.store, i.origin)) || (r = i, o.clear());
          else
            break;
          i = i.right;
        }
        this.left = r;
      }
      if (this.left !== null) {
        const r = this.left.right;
        this.right = r, this.left.right = this;
      } else {
        let r;
        if (this.parentSub !== null)
          for (r = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; r !== null && r.left !== null; )
            r = r.left;
        else
          r = /** @type {AbstractType<any>} */
          this.parent._start, this.parent._start = this;
        this.right = r;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Hm(e.doc.store, this), this.content.integrate(e, this), vd(
        e,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(e);
    } else
      new Xe(this.id, this.length).integrate(e, 0);
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let e = this.right;
    for (; e !== null && e.deleted; )
      e = e.right;
    return e;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let e = this.left;
    for (; e !== null && e.deleted; )
      e = e.left;
    return e;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : oe(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(e) {
    if (this.constructor === e.constructor && ni(e.origin, this.lastId) && this.right === e && ni(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      return n && n.forEach((r) => {
        r.p === e && (r.p = this, !this.deleted && this.countable && (r.index -= this.length));
      }), e.keep && (this.keep = !0), this.right = e.right, this.right !== null && (this.right.left = this), this.length += e.length, !0;
    }
    return !1;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(e) {
    if (!this.deleted) {
      const n = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), xr(e.deleteSet, this.id.client, this.id.clock, this.length), vd(e, n, this.parentSub), this.content.delete(e);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(e, n) {
    if (!this.deleted)
      throw Ve();
    this.content.gc(e), n ? U2(e, this, new Xe(this.id, this.length)) : this.content = new Sr(this.length);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(e, n) {
    const r = n > 0 ? oe(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, o = this.parentSub, s = this.content.getRef() & yo | (r === null ? 0 : $e) | // origin is defined
    (i === null ? 0 : Rt) | // right origin is defined
    (o === null ? 0 : br);
    if (e.writeInfo(s), r !== null && e.writeLeftID(r), i !== null && e.writeRightID(i), r === null && i === null) {
      const a = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (a._item !== void 0) {
        const c = a._item;
        if (c === null) {
          const d = wr(a);
          e.writeParentInfo(!0), e.writeString(d);
        } else
          e.writeParentInfo(!1), e.writeLeftID(c.id);
      } else a.constructor === String ? (e.writeParentInfo(!0), e.writeString(a)) : a.constructor === Dn ? (e.writeParentInfo(!1), e.writeLeftID(a)) : Ve();
      o !== null && e.writeString(o);
    }
    this.content.write(e, n);
  }
};
const up = (t, e) => BT[e & yo](t), BT = [
  () => {
    Ve();
  },
  // GC is not ItemContent
  NT,
  // 1
  TT,
  // 2
  CT,
  // 3
  _T,
  // 4
  IT,
  // 5
  AT,
  // 6
  jT,
  // 7
  DT,
  // 8
  ST,
  // 9
  () => {
    Ve();
  }
  // 10 - Skip is not ItemContent
], HT = 10;
class ot extends aa {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(e) {
    return this.constructor !== e.constructor ? !1 : (this.length += e.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(e, n) {
    Ve();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(e, n) {
    e.writeInfo(HT), de(e.restEncoder, this.length - n);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(e, n) {
    return null;
  }
}
const fp = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), hp = "__ $YJS$ __";
fp[hp] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
fp[hp] = !0;
const VT = () => {
  let t = !0;
  return (e, n) => {
    if (t) {
      t = !1;
      try {
        e();
      } finally {
        t = !0;
      }
    } else n !== void 0 && n();
  };
}, WT = /[\uD800-\uDBFF]/, UT = /[\uDC00-\uDFFF]/, GT = (t, e) => {
  let n = 0, r = 0;
  for (; n < t.length && n < e.length && t[n] === e[n]; )
    n++;
  for (n > 0 && WT.test(t[n - 1]) && n--; r + n < t.length && r + n < e.length && t[t.length - r - 1] === e[e.length - r - 1]; )
    r++;
  return r > 0 && UT.test(t[t.length - r]) && r--, {
    index: n,
    remove: t.length - n - r,
    insert: e.slice(n, e.length - r)
  };
}, qT = GT, ye = new We("y-sync"), Ft = new We("y-undo");
new We("yjs-cursor");
const Ct = (t, e) => t >>> e | t << 32 - e, KT = (t) => Ct(t, 2) ^ Ct(t, 13) ^ Ct(t, 22), JT = (t) => Ct(t, 6) ^ Ct(t, 11) ^ Ct(t, 25), YT = (t) => Ct(t, 7) ^ Ct(t, 18) ^ t >>> 3, QT = (t) => Ct(t, 17) ^ Ct(t, 19) ^ t >>> 10, XT = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), ZT = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
class eE {
  constructor() {
    const e = new ArrayBuffer(320);
    this._H = new Uint32Array(e, 0, 8), this._H.set(ZT), this._W = new Uint32Array(e, 64, 64);
  }
  _updateHash() {
    const e = this._H, n = this._W;
    for (let u = 16; u < 64; u++)
      n[u] = QT(n[u - 2]) + n[u - 7] + YT(n[u - 15]) + n[u - 16];
    let r = e[0], i = e[1], o = e[2], s = e[3], a = e[4], c = e[5], d = e[6], f = e[7];
    for (let u = 0, h, m; u < 64; u++)
      h = f + JT(a) + (a & c ^ ~a & d) + XT[u] + n[u] >>> 0, m = KT(r) + (r & i ^ r & o ^ i & o) >>> 0, f = d, d = c, c = a, a = s + h >>> 0, s = o, o = i, i = r, r = h + m >>> 0;
    e[0] += r, e[1] += i, e[2] += o, e[3] += s, e[4] += a, e[5] += c, e[6] += d, e[7] += f;
  }
  /**
   * Returns a 32-byte hash.
   *
   * @param {Uint8Array} data
   */
  digest(e) {
    let n = 0;
    for (; n + 56 <= e.length; ) {
      let s = 0;
      for (; s < 16 && n + 3 < e.length; s++)
        this._W[s] = e[n++] << 24 | e[n++] << 16 | e[n++] << 8 | e[n++];
      if (n % 64 !== 0) {
        for (this._W.fill(0, s, 16); n < e.length; )
          this._W[s] |= e[n] << (3 - n % 4) * 8, n++;
        this._W[s] |= $e << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const r = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < e.length; i++)
      for (let s = 3; s >= 0 && n < e.length; s--)
        this._W[i] |= e[n++] << s * 8;
    r || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= $e << (3 - n % 4) * 8), this._W[14] = e.byteLength / fA, this._W[15] = e.byteLength * 8, this._updateHash();
    const o = new Uint8Array(32);
    for (let s = 0; s < this._H.length; s++)
      for (let a = 0; a < 4; a++)
        o[s * 4 + a] = this._H[s] >>> (3 - a) * 8;
    return o;
  }
}
const tE = (t) => new eE().digest(t), nE = (t) => {
  for (let n = 6; n < t.length; n++)
    t[n % 6] = t[n % 6] ^ t[n];
  return t.slice(0, 6);
}, rE = (t) => d2(nE(tE(u2(t)))), Gi = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && /** @type {number} */
e.sv.get(t.id.client) > t.id.clock && !Qn(e.ds, t.id), iE = [{ light: "#ecd44433", dark: "#ecd444" }], oE = (t, e, n) => {
  if (!t.has(n)) {
    if (t.size < e.length) {
      const r = dn();
      t.forEach((i) => r.add(i)), e = e.filter((i) => !r.has(i));
    }
    t.set(n, UA(e));
  }
  return (
    /** @type {ColorDef} */
    t.get(n)
  );
}, sE = (t, {
  colors: e = iE,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: r = null,
  onFirstRender: i = () => {
  },
  mapping: o
} = {}) => {
  let s = !1;
  const a = new aE(t, o), c = new It({
    props: {
      editable: (d) => {
        const f = ye.getState(d);
        return f.snapshot == null && f.prevSnapshot == null;
      }
    },
    key: ye,
    state: {
      /**
       * @returns {any}
       */
      init: (d, f) => ({
        type: t,
        doc: t.doc,
        binding: a,
        snapshot: null,
        prevSnapshot: null,
        isChangeOrigin: !1,
        isUndoRedoOperation: !1,
        addToHistory: !0,
        colors: e,
        colorMapping: n,
        permanentUserData: r
      }),
      apply: (d, f) => {
        const u = d.getMeta(ye);
        if (u !== void 0) {
          f = Object.assign({}, f);
          for (const h in u)
            f[h] = u[h];
        }
        return f.addToHistory = d.getMeta("addToHistory") !== !1, f.isChangeOrigin = u !== void 0 && !!u.isChangeOrigin, f.isUndoRedoOperation = u !== void 0 && !!u.isChangeOrigin && !!u.isUndoRedoOperation, a.prosemirrorView !== null && u !== void 0 && (u.snapshot != null || u.prevSnapshot != null) && Tm(0, () => {
          a.prosemirrorView != null && (u.restore == null ? a._renderSnapshot(
            u.snapshot,
            u.prevSnapshot,
            f
          ) : (a._renderSnapshot(
            u.snapshot,
            u.snapshot,
            f
          ), delete f.restore, delete f.snapshot, delete f.prevSnapshot, a.mux(() => {
            a._prosemirrorChanged(
              a.prosemirrorView.state.doc
            );
          })));
        }), f;
      }
    },
    view: (d) => (a.initView(d), o == null && a._forceRerender(), i(), {
      update: () => {
        const f = c.getState(d.state);
        if (f.snapshot == null && f.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (s || d.state.doc.content.findDiffStart(
          d.state.doc.type.createAndFill().content
        ) !== null)) {
          if (s = !0, f.addToHistory === !1 && !f.isChangeOrigin) {
            const u = Ft.getState(d.state), h = u && u.undoManager;
            h && h.stopCapturing();
          }
          a.mux(() => {
            f.doc.transact((u) => {
              u.meta.set("addToHistory", f.addToHistory), a._prosemirrorChanged(d.state.doc);
            }, ye);
          });
        }
      },
      destroy: () => {
        a.destroy();
      }
    })
  });
  return c;
}, lE = (t, e, n) => {
  if (e !== null && e.anchor !== null && e.head !== null)
    if (e.type === "all")
      t.setSelection(new av(t.doc));
    else if (e.type === "node") {
      const r = wi(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      );
      t.setSelection(_u.create(t.doc, r));
    } else {
      const r = wi(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      ), i = wi(
        n.doc,
        n.type,
        e.head,
        n.mapping
      );
      if (r !== null && i !== null) {
        const o = st.between(t.doc.resolve(r), t.doc.resolve(i));
        t.setSelection(o);
      }
    }
}, tl = (t, e) => ({
  type: (
    /** @type {any} */
    e.selection.jsonID
  ),
  anchor: ol(
    e.selection.anchor,
    t.type,
    t.mapping
  ),
  head: ol(
    e.selection.head,
    t.type,
    t.mapping
  )
});
class aE {
  /**
   * @param {Y.XmlFragment} yXmlFragment The bind source
   * @param {ProsemirrorMapping} mapping
   */
  constructor(e, n = /* @__PURE__ */ new Map()) {
    this.type = e, this.prosemirrorView = null, this.mux = VT(), this.mapping = n, this.isOMark = /* @__PURE__ */ new Map(), this._observeFunction = this._typeChanged.bind(this), this.doc = e.doc, this.beforeTransactionSelection = null, this.beforeAllTransactions = () => {
      this.beforeTransactionSelection === null && this.prosemirrorView != null && (this.beforeTransactionSelection = tl(
        this,
        this.prosemirrorView.state
      ));
    }, this.afterAllTransactions = () => {
      this.beforeTransactionSelection = null;
    }, this._domSelectionInView = null;
  }
  /**
   * Create a transaction for changing the prosemirror state.
   *
   * @returns
   */
  get _tr() {
    return this.prosemirrorView.state.tr.setMeta("addToHistory", !1);
  }
  _isLocalCursorInView() {
    return this.prosemirrorView.hasFocus() ? (Im && this._domSelectionInView === null && (Tm(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const e = this.prosemirrorView._root.getSelection();
    if (e == null || e.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(e.anchorNode, e.anchorOffset), n.setEnd(e.focusNode, e.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), o = h2.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || o.clientWidth || 0) && i.top <= (window.innerHeight || o.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(e, n) {
    n || (n = jm(Mm(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(ye, { snapshot: e, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const e = this.type.toArray().map(
        (r) => xi(
          /** @type {Y.XmlElement} */
          r,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((r) => r !== null), n = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ze(Be.from(e), 0, 0)
      );
      n.setMeta(ye, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const e = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => xi(
          /** @type {Y.XmlElement} */
          i,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((i) => i !== null), r = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ze(Be.from(n), 0, 0)
      );
      if (e) {
        const i = $n(Yt(e.anchor, 0), r.doc.content.size), o = $n(Yt(e.head, 0), r.doc.content.size);
        r.setSelection(st.create(r.doc, i, o));
      }
      this.prosemirrorView.dispatch(
        r.setMeta(ye, { isChangeOrigin: !0, binding: this })
      );
    });
  }
  /**
   * @param {Y.Snapshot|Uint8Array} snapshot
   * @param {Y.Snapshot|Uint8Array} prevSnapshot
   * @param {Object} pluginState
   */
  _renderSnapshot(e, n, r) {
    let i = this.doc, o = this.type;
    if (e || (e = ss(this.doc)), e instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(e instanceof Uint8Array) || !(n instanceof Uint8Array)) && Ve(), i = new gn({ gc: !1 }), Js(i, n), n = ss(i), Js(i, e), e = ss(i), o._item === null) {
        const s = Array.from(this.doc.share.keys()).find(
          (a) => this.doc.share.get(a) === this.type
        );
        o = i.getXmlFragment(s);
      } else {
        const s = i.store.clients.get(o._item.id.client) ?? [], a = ht(
          s,
          o._item.id.clock
        );
        o = /** @type {Y.XmlFragment} */
        /** @type {Y.ContentType} */
        /** @type {Y.Item} */
        s[a].content.type;
      }
    this.mapping.clear(), this.mux(() => {
      i.transact((s) => {
        const a = r.permanentUserData;
        a && a.dss.forEach((u) => {
          Xt(s, u, (h) => {
          });
        });
        const c = (u, h) => {
          const m = u === "added" ? a.getUserByClientId(h.client) : a.getUserByDeletedId(h);
          return {
            user: m,
            type: u,
            color: oE(
              r.colorMapping,
              r.colors,
              m
            )
          };
        }, d = Qm(
          o,
          new ia(n.ds, e.sv)
        ).map((u) => !u._item.deleted || Gi(u._item, e) || Gi(u._item, n) ? xi(
          u,
          this.prosemirrorView.state.schema,
          { mapping: /* @__PURE__ */ new Map(), isOMark: /* @__PURE__ */ new Map() },
          e,
          n,
          c
        ) : null).filter((u) => u !== null), f = this._tr.replace(
          0,
          this.prosemirrorView.state.doc.content.size,
          new Ze(Be.from(d), 0, 0)
        );
        this.prosemirrorView.dispatch(
          f.setMeta(ye, { isChangeOrigin: !0 })
        );
      }, ye);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(e, n) {
    if (this.prosemirrorView == null) return;
    const r = ye.getState(this.prosemirrorView.state);
    if (e.length === 0 || r.snapshot != null || r.prevSnapshot != null) {
      this.renderSnapshot(r.snapshot, r.prevSnapshot);
      return;
    }
    this.mux(() => {
      const i = (a, c) => this.mapping.delete(c);
      Xt(
        n,
        n.deleteSet,
        (a) => {
          if (a.constructor === me) {
            const c = (
              /** @type {Y.ContentType} */
              /** @type {Y.Item} */
              a.content.type
            );
            c && this.mapping.delete(c);
          }
        }
      ), n.changed.forEach(i), n.changedParentTypes.forEach(i);
      const o = this.type.toArray().map(
        (a) => mp(
          /** @type {Y.XmlElement | Y.XmlHook} */
          a,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((a) => a !== null);
      let s = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ze(Be.from(o), 0, 0)
      );
      lE(s, this.beforeTransactionSelection, this), s = s.setMeta(ye, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof Um }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && s.scrollIntoView(), this.prosemirrorView.dispatch(s);
    });
  }
  /**
   * @param {import('prosemirror-model').Node} doc
   */
  _prosemirrorChanged(e) {
    this.doc.transact(() => {
      rl(this.doc, this.type, e, this), this.beforeTransactionSelection = tl(
        this,
        this.prosemirrorView.state
      );
    }, ye);
  }
  /**
   * View is ready to listen to changes. Register observers.
   * @param {any} prosemirrorView
   */
  initView(e) {
    this.prosemirrorView != null && this.destroy(), this.prosemirrorView = e, this.doc.on("beforeAllTransactions", this.beforeAllTransactions), this.doc.on("afterAllTransactions", this.afterAllTransactions), this.type.observeDeep(this._observeFunction);
  }
  destroy() {
    this.prosemirrorView != null && (this.prosemirrorView = null, this.type.unobserveDeep(this._observeFunction), this.doc.off("beforeAllTransactions", this.beforeAllTransactions), this.doc.off("afterAllTransactions", this.afterAllTransactions));
  }
}
const mp = (t, e, n, r, i, o) => {
  const s = (
    /** @type {PModel.Node} */
    n.mapping.get(t)
  );
  if (s === void 0) {
    if (t instanceof Oe)
      return xi(
        t,
        e,
        n,
        r,
        i,
        o
      );
    throw ct();
  }
  return s;
}, xi = (t, e, n, r, i, o) => {
  const s = [], a = (c) => {
    if (c instanceof Oe) {
      const d = mp(
        c,
        e,
        n,
        r,
        i,
        o
      );
      d !== null && s.push(d);
    } else {
      const d = (
        /** @type {Y.ContentType} */
        c._item.right?.content?.type
      );
      d instanceof Zt && !d._item.deleted && d._item.id.client === d.doc.clientID && (c.applyDelta([
        { retain: c.length },
        ...d.toDelta()
      ]), d.doc.transact((u) => {
        d._item.delete(u);
      }));
      const f = cE(
        c,
        e,
        n,
        r,
        i,
        o
      );
      f !== null && f.forEach((u) => {
        u !== null && s.push(u);
      });
    }
  };
  r === void 0 || i === void 0 ? t.toArray().forEach(a) : Qm(t, new ia(i.ds, r.sv)).forEach(a);
  try {
    const c = t.getAttributes(r);
    r !== void 0 && (Gi(
      /** @type {Y.Item} */
      t._item,
      r
    ) ? Gi(
      /** @type {Y.Item} */
      t._item,
      i
    ) || (c.ychange = o ? o(
      "added",
      /** @type {Y.Item} */
      t._item.id
    ) : { type: "added" }) : c.ychange = o ? o(
      "removed",
      /** @type {Y.Item} */
      t._item.id
    ) : { type: "removed" });
    const d = e.node(t.nodeName, c, s);
    return n.mapping.set(t, d), d;
  } catch {
    return t.doc.transact((d) => {
      t._item.delete(d);
    }, ye), n.mapping.delete(t), null;
  }
}, cE = (t, e, n, r, i, o) => {
  const s = [], a = t.toDelta(r, i, o);
  try {
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      s.push(e.text(d.insert, pE(d.attributes, e)));
    }
  } catch {
    return t.doc.transact((d) => {
      t._item.delete(d);
    }, ye), null;
  }
  return s;
}, dE = (t, e) => {
  const n = new He(), r = t.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: gp(i.marks, e)
  }));
  return n.applyDelta(r), e.mapping.set(n, t), n;
}, uE = (t, e) => {
  const n = new Oe(t.type.name);
  for (const r in t.attrs) {
    const i = t.attrs[r];
    i !== null && r !== "ychange" && n.setAttribute(r, i);
  }
  return n.insert(
    0,
    Ao(t).map(
      (r) => nl(r, e)
    )
  ), e.mapping.set(n, t), n;
}, nl = (t, e) => t instanceof Array ? dE(t, e) : uE(t, e), Ad = (t) => typeof t == "object" && t !== null, da = (t, e) => {
  const n = Object.keys(t).filter((i) => t[i] !== null);
  let r = n.length === (e == null ? 0 : Object.keys(e).filter((i) => e[i] !== null).length);
  for (let i = 0; i < n.length && r; i++) {
    const o = n[i], s = t[o], a = e[o];
    r = o === "ychange" || s === a || Ad(s) && Ad(a) && da(s, a);
  }
  return r;
}, Ao = (t) => {
  const e = t.content.content, n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i.isText) {
      const o = [];
      for (let s = e[r]; r < e.length && s.isText; s = e[++r])
        o.push(s);
      r--, n.push(o);
    } else
      n.push(i);
  }
  return n;
}, pp = (t, e) => {
  const n = t.toDelta();
  return n.length === e.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (r, i) => r.insert === /** @type {any} */
    e[i].text && Cm(r.attributes || {}).length === e[i].marks.length && Nm(r.attributes, (o, s) => {
      const a = ua(s), c = e[i].marks;
      return da(o, c.find(
        /** @param {any} mark */
        (d) => d.type.name === a
      )?.attrs);
    })
  );
}, Ir = (t, e) => {
  if (t instanceof Oe && !(e instanceof Array) && il(t, e)) {
    const n = Ao(e);
    return t._length === n.length && da(t.getAttributes(), e.attrs) && t.toArray().every(
      (r, i) => Ir(r, n[i])
    );
  }
  return t instanceof He && e instanceof Array && pp(t, e);
}, qi = (t, e) => t === e || t instanceof Array && e instanceof Array && t.length === e.length && t.every(
  (n, r) => e[r] === n
), Td = (t, e, n) => {
  const r = t.toArray(), i = Ao(e), o = i.length, s = r.length, a = $n(s, o);
  let c = 0, d = 0, f = !1;
  for (; c < a; c++) {
    const u = r[c], h = i[c];
    if (qi(n.mapping.get(u), h))
      f = !0;
    else if (!Ir(u, h))
      break;
  }
  for (; c + d < a; d++) {
    const u = r[s - d - 1], h = i[o - d - 1];
    if (qi(n.mapping.get(u), h))
      f = !0;
    else if (!Ir(u, h))
      break;
  }
  return {
    equalityFactor: c + d,
    foundMappedChild: f
  };
}, fE = (t) => {
  let e = "", n = t._start;
  const r = {};
  for (; n !== null; )
    n.deleted || (n.countable && n.content instanceof mt ? e += n.content.str : n.content instanceof Ce && (r[n.content.key] = null)), n = n.right;
  return {
    str: e,
    nAttrs: r
  };
}, hE = (t, e, n) => {
  n.mapping.set(t, e);
  const { nAttrs: r, str: i } = fE(t), o = e.map((d) => ({
    insert: (
      /** @type {any} */
      d.text
    ),
    attributes: Object.assign({}, r, gp(d.marks, n))
  })), { insert: s, remove: a, index: c } = qT(
    i,
    o.map((d) => d.insert).join("")
  );
  t.delete(c, a), t.insert(c, s), t.applyDelta(
    o.map((d) => ({ retain: d.insert.length, attributes: d.attributes }))
  );
}, mE = /(.*)(--[a-zA-Z0-9+/=]{8})$/, ua = (t) => mE.exec(t)?.[1] ?? t, pE = (t, e) => {
  const n = [];
  for (const r in t)
    n.push(e.mark(ua(r), t[r]));
  return n;
}, gp = (t, e) => {
  const n = {};
  return t.forEach((r) => {
    if (r.type.name !== "ychange") {
      const i = Bt(e.isOMark, r.type, () => !r.type.excludes(r.type));
      n[i ? `${r.type.name}--${rE(r.toJSON())}` : r.type.name] = r.attrs;
    }
  }), n;
}, rl = (t, e, n, r) => {
  if (e instanceof Oe && e.nodeName !== n.type.name)
    throw new Error("node name mismatch!");
  if (r.mapping.set(e, n), e instanceof Oe) {
    const u = e.getAttributes(), h = n.attrs;
    for (const m in h)
      h[m] !== null ? u[m] !== h[m] && m !== "ychange" && e.setAttribute(m, h[m]) : e.removeAttribute(m);
    for (const m in u)
      h[m] === void 0 && e.removeAttribute(m);
  }
  const i = Ao(n), o = i.length, s = e.toArray(), a = s.length, c = $n(o, a);
  let d = 0, f = 0;
  for (; d < c; d++) {
    const u = s[d], h = i[d];
    if (!qi(r.mapping.get(u), h))
      if (Ir(u, h))
        r.mapping.set(u, h);
      else
        break;
  }
  for (; f + d + 1 < c; f++) {
    const u = s[a - f - 1], h = i[o - f - 1];
    if (!qi(r.mapping.get(u), h))
      if (Ir(u, h))
        r.mapping.set(u, h);
      else
        break;
  }
  t.transact(() => {
    for (; a - d - f > 0 && o - d - f > 0; ) {
      const h = s[d], m = i[d], p = s[a - f - 1], b = i[o - f - 1];
      if (h instanceof He && m instanceof Array)
        pp(h, m) || hE(h, m, r), d += 1;
      else {
        let y = h instanceof Oe && il(h, m), v = p instanceof Oe && il(p, b);
        if (y && v) {
          const w = Td(
            /** @type {Y.XmlElement} */
            h,
            /** @type {PModel.Node} */
            m,
            r
          ), x = Td(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            b,
            r
          );
          w.foundMappedChild && !x.foundMappedChild ? v = !1 : !w.foundMappedChild && x.foundMappedChild || w.equalityFactor < x.equalityFactor ? y = !1 : v = !1;
        }
        y ? (rl(
          t,
          /** @type {Y.XmlFragment} */
          h,
          /** @type {PModel.Node} */
          m,
          r
        ), d += 1) : v ? (rl(
          t,
          /** @type {Y.XmlFragment} */
          p,
          /** @type {PModel.Node} */
          b,
          r
        ), f += 1) : (r.mapping.delete(e.get(d)), e.delete(d, 1), e.insert(d, [
          nl(m, r)
        ]), d += 1);
      }
    }
    const u = a - d - f;
    if (a === 1 && o === 0 && s[0] instanceof He ? (r.mapping.delete(s[0]), s[0].delete(0, s[0].length)) : u > 0 && (e.slice(d, d + u).forEach((h) => r.mapping.delete(h)), e.delete(d, u)), d + f < o) {
      const h = [];
      for (let m = d; m < o - f; m++)
        h.push(nl(i[m], r));
      e.insert(d, h);
    }
  }, ye);
}, il = (t, e) => !(e instanceof Array) && t.nodeName === e.type.name, ol = (t, e, n) => {
  if (t === 0)
    return os(e, 0, e.length === 0 ? -1 : 0);
  let r = e._first === null ? null : (
    /** @type {Y.ContentType} */
    e._first.content.type
  );
  for (; r !== null && e !== r; ) {
    if (r instanceof He) {
      if (r._length >= t)
        return os(r, t, e.length === 0 ? -1 : 0);
      if (t -= r._length, r._item !== null && r._item.next !== null)
        r = /** @type {Y.ContentType} */
        r._item.next.content.type;
      else {
        do
          r = r._item === null ? null : r._item.parent, t--;
        while (r !== e && r !== null && r._item !== null && r._item.next === null);
        r !== null && r !== e && (r = r._item === null ? null : (
          /** @type {Y.ContentType} */
          /** @type Y.Item */
          r._item.next.content.type
        ));
      }
    } else {
      const i = (
        /** @type {any} */
        (n.get(r) || { nodeSize: 0 }).nodeSize
      );
      if (r._first !== null && t < i)
        r = /** @type {Y.ContentType} */
        r._first.content.type, t--;
      else {
        if (t === 1 && r._length === 0 && i > 1)
          return new ji(r._item === null ? null : r._item.id, r._item === null ? wr(r) : null, null);
        if (t -= i, r._item !== null && r._item.next !== null)
          r = /** @type {Y.ContentType} */
          r._item.next.content.type;
        else {
          if (t === 0)
            return r = r._item === null ? r : r._item.parent, new ji(r._item === null ? null : r._item.id, r._item === null ? wr(r) : null, null);
          do
            r = /** @type {Y.Item} */
            r._item.parent, t--;
          while (r !== e && /** @type {Y.Item} */
          r._item.next === null);
          r !== e && (r = /** @type {Y.ContentType} */
          /** @type {Y.Item} */
          /** @type {Y.Item} */
          r._item.next.content.type);
        }
      }
    }
    if (r === null)
      throw Ve();
    if (t === 0 && r.constructor !== He && r !== e)
      return gE(r._item.parent, r._item);
  }
  return os(e, e._length, e.length === 0 ? -1 : 0);
}, gE = (t, e) => {
  let n = null, r = null;
  return t._item === null ? r = wr(t) : n = oe(t._item.id.client, t._item.id.clock), new ji(n, r, e.id);
}, wi = (t, e, n, r) => {
  const i = V2(n, t);
  if (i === null || i.type !== e && !kr(e, i.type._item))
    return null;
  let o = i.type, s = 0;
  if (o.constructor === He)
    s = i.index;
  else if (o._item === null || !o._item.deleted) {
    let a = o._first, c = 0;
    for (; c < o._length && c < i.index && a !== null; ) {
      if (!a.deleted) {
        const d = (
          /** @type {Y.ContentType} */
          a.content.type
        );
        c++, d instanceof He ? s += d._length : s += /** @type {any} */
        r.get(d).nodeSize;
      }
      a = /** @type {Y.Item} */
      a.right;
    }
    s += 1;
  }
  for (; o !== e && o._item !== null; ) {
    const a = o._item.parent;
    if (a._item === null || !a._item.deleted) {
      s += 1;
      let c = (
        /** @type {Y.AbstractType} */
        a._first
      );
      for (; c !== null; ) {
        const d = (
          /** @type {Y.ContentType} */
          c.content.type
        );
        if (d === o)
          break;
        c.deleted || (d instanceof He ? s += d._length : s += /** @type {any} */
        r.get(d).nodeSize), c = c.right;
      }
    }
    o = /** @type {Y.AbstractType} */
    a;
  }
  return s - 1;
};
function bE(t) {
  const e = t.toArray(), n = (r) => {
    let i;
    if (r instanceof He)
      i = r.toDelta().map(
        /** @param {any} d */
        (s) => {
          const a = {
            type: "text",
            text: s.insert
          };
          return s.attributes && (a.marks = Object.keys(s.attributes).map((c) => {
            const d = s.attributes[c], u = {
              type: ua(c)
            };
            return Object.keys(d) && (u.attrs = d), u;
          })), a;
        }
      );
    else if (r instanceof Oe) {
      i = {
        type: r.nodeName
      };
      const o = r.getAttributes();
      Object.keys(o).length && (i.attrs = o);
      const s = r.toArray();
      s.length && (i.content = s.map(n).flat());
    } else
      Ve();
    return i;
  };
  return {
    type: "doc",
    content: e.map(n)
  };
}
const vE = (t) => Ft.getState(t)?.undoManager?.undo() != null, yE = (t) => Ft.getState(t)?.undoManager?.redo() != null, xE = /* @__PURE__ */ new Set(["paragraph"]), wE = (t, e) => !(t instanceof me) || !(t.content instanceof yt) || !(t.content.type instanceof Zt || t.content.type instanceof Oe && e.has(t.content.type.nodeName)) || t.content.type._length === 0, kE = ({ protectedNodes: t = xE, trackedOrigins: e = [], undoManager: n = null } = {}) => new It({
  key: Ft,
  state: {
    init: (r, i) => {
      const o = ye.getState(i), s = n || new Um(o.type, {
        trackedOrigins: new Set([ye].concat(e)),
        deleteFilter: (a) => wE(a, t),
        captureTransaction: (a) => a.meta.get("addToHistory") !== !1
      });
      return {
        undoManager: s,
        prevSel: null,
        hasUndoOps: s.undoStack.length > 0,
        hasRedoOps: s.redoStack.length > 0
      };
    },
    apply: (r, i, o, s) => {
      const a = ye.getState(s).binding, c = i.undoManager, d = c.undoStack.length > 0, f = c.redoStack.length > 0;
      return a ? {
        undoManager: c,
        prevSel: tl(a, o),
        hasUndoOps: d,
        hasRedoOps: f
      } : d !== i.hasUndoOps || f !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : i;
    }
  },
  view: (r) => {
    const i = ye.getState(r.state), o = Ft.getState(r.state).undoManager;
    return o.on("stack-item-added", ({ stackItem: s }) => {
      const a = i.binding;
      a && s.meta.set(a, Ft.getState(r.state).prevSel);
    }), o.on("stack-item-popped", ({ stackItem: s }) => {
      const a = i.binding;
      a && (a.beforeTransactionSelection = s.meta.get(a) || a.beforeTransactionSelection);
    }), {
      destroy: () => {
        o.destroy();
      }
    };
  }
});
pn.create({
  name: "collaboration",
  priority: 1e3,
  addOptions() {
    return {
      document: null,
      field: "default",
      fragment: null
    };
  },
  addStorage() {
    return {
      isDisabled: !1
    };
  },
  onCreate() {
    this.editor.extensionManager.extensions.find((t) => t.name === "history") && console.warn('[tiptap warn]: "@tiptap/extension-collaboration" comes with its own history support and is not compatible with "@tiptap/extension-history".');
  },
  addCommands() {
    return {
      undo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Ft.getState(e).undoManager.undoStack.length === 0 ? !1 : n ? vE(e) : !0),
      redo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Ft.getState(e).undoManager.redoStack.length === 0 ? !1 : n ? yE(e) : !0)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo()
    };
  },
  addProseMirrorPlugins() {
    var t;
    const e = this.options.fragment ? this.options.fragment : this.options.document.getXmlFragment(this.options.field), n = kE(this.options.yUndoOptions), r = n.spec.view;
    n.spec.view = (s) => {
      const { undoManager: a } = Ft.getState(s.state);
      a.restore && (a.restore(), a.restore = () => {
      });
      const c = r ? r(s) : void 0;
      return {
        destroy: () => {
          const d = a.trackedOrigins.has(a), f = a._observers;
          a.restore = () => {
            d && a.trackedOrigins.add(a), a.doc.on("afterTransaction", a.afterTransactionHandler), a._observers = f;
          }, c?.destroy && c.destroy();
        }
      };
    };
    const i = {
      ...this.options.ySyncOptions,
      onFirstRender: this.options.onFirstRender
    }, o = sE(e, i);
    return this.editor.options.enableContentCheck && ((t = e.doc) === null || t === void 0 || t.on("beforeTransaction", () => {
      try {
        const s = bE(e);
        if (s.content.length === 0)
          return;
        this.editor.schema.nodeFromJSON(s).check();
      } catch (s) {
        return this.editor.emit("contentError", {
          error: s,
          editor: this.editor,
          disableCollaboration: () => {
            var a;
            (a = e.doc) === null || a === void 0 || a.destroy(), this.storage.isDisabled = !0;
          }
        }), !1;
      }
    })), [
      o,
      n,
      // Only add the filterInvalidContent plugin if content checking is enabled
      this.editor.options.enableContentCheck && new It({
        key: new We("filterInvalidContent"),
        filterTransaction: () => {
          var s;
          return this.storage.isDisabled && ((s = e.doc) === null || s === void 0 || s.destroy()), !0;
        }
      })
    ].filter(Boolean);
  }
});
function CE(t) {
  return !!t.getMeta(ye);
}
function Ed(t) {
  if (!t.length)
    return fr.empty;
  const e = [], n = t[0].$from.node(0);
  return t.forEach((r) => {
    const i = r.$from.pos, o = r.$from.nodeAfter;
    o && e.push(Ai.node(i, i + o.nodeSize, {
      class: "ProseMirror-selectednoderange"
    }));
  }), fr.create(n, e);
}
function To(t, e, n) {
  const r = [], i = t.node(0);
  n = typeof n == "number" && n >= 0 ? n : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const o = new cv(t, e, n), s = o.depth === 0 ? 0 : i.resolve(o.start).posAtIndex(0);
  return o.parent.forEach((a, c) => {
    const d = s + c, f = d + a.nodeSize;
    if (d < o.start || d >= o.end)
      return;
    const u = new Du(i.resolve(d), i.resolve(f));
    r.push(u);
  }), r;
}
class fa {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new fa(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return new Le(n, r);
  }
}
class Le extends Qe {
  constructor(e, n, r, i = 1) {
    const { doc: o } = e, s = e === n, a = e.pos === o.content.size && n.pos === o.content.size, c = s && !a ? o.resolve(n.pos + (i > 0 ? 1 : -1)) : n, d = s && a ? o.resolve(e.pos - (i > 0 ? 1 : -1)) : e, f = To(d.min(c), d.max(c), r), u = c.pos >= e.pos ? f[0].$from : f[f.length - 1].$to, h = c.pos >= e.pos ? f[f.length - 1].$to : f[0].$from;
    super(u, h, f), this.depth = r;
  }
  // we can safely ignore this TypeScript error: https://github.com/Microsoft/TypeScript/issues/338
  // @ts-ignore
  get $to() {
    return this.ranges[this.ranges.length - 1].$to;
  }
  eq(e) {
    return e instanceof Le && e.$from.pos === this.$from.pos && e.$to.pos === this.$to.pos;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.anchor)), i = e.resolve(n.map(this.head));
    return new Le(r, i);
  }
  toJSON() {
    return {
      type: "nodeRange",
      anchor: this.anchor,
      head: this.head
    };
  }
  get isForwards() {
    return this.head >= this.anchor;
  }
  get isBackwards() {
    return !this.isForwards;
  }
  extendBackwards() {
    const { doc: e } = this.$from;
    if (this.isForwards && this.ranges.length > 1) {
      const i = this.ranges.slice(0, -1), o = i[0].$from, s = i[i.length - 1].$to;
      return new Le(o, s, this.depth);
    }
    const n = this.ranges[0], r = e.resolve(Math.max(0, n.$from.pos - 1));
    return new Le(this.$anchor, r, this.depth);
  }
  extendForwards() {
    const { doc: e } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), o = i[0].$from, s = i[i.length - 1].$to;
      return new Le(s, o, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], r = e.resolve(Math.min(e.content.size, n.$to.pos + 1));
    return new Le(this.$anchor, r, this.depth);
  }
  static fromJSON(e, n) {
    return new Le(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r, i, o = 1) {
    return new this(e.resolve(n), e.resolve(r), i, o);
  }
  getBookmark() {
    return new fa(this.anchor, this.head);
  }
}
Le.prototype.visible = !1;
function si(t) {
  return t instanceof Le;
}
pn.create({
  name: "nodeRange",
  addOptions() {
    return {
      depth: void 0,
      key: "Mod"
    };
  },
  addKeyboardShortcuts() {
    return {
      // extend NodeRangeSelection upwards
      "Shift-ArrowUp": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: o, tr: s } = r, { anchor: a, head: c } = o;
        if (!si(o)) {
          const f = Le.create(i, a, c, e, -1);
          return s.setSelection(f), n.dispatch(s), !0;
        }
        const d = o.extendBackwards();
        return s.setSelection(d), n.dispatch(s), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: o, tr: s } = r, { anchor: a, head: c } = o;
        if (!si(o)) {
          const f = Le.create(i, a, c, e);
          return s.setSelection(f), n.dispatch(s), !0;
        }
        const d = o.extendForwards();
        return s.setSelection(d), n.dispatch(s), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, tr: o } = r, s = Le.create(i, 0, i.content.size, e);
        return o.setSelection(s), n.dispatch(o), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: t } = this.editor.state;
    si(t) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let t = !1, e = !1;
    return [
      new It({
        key: new We("nodeRange"),
        props: {
          attributes: () => t ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, r) => {
              const { key: i } = this.options, o = /Mac/.test(navigator.platform), s = !!r.shiftKey, a = !!r.ctrlKey, c = !!r.altKey, d = !!r.metaKey, f = o ? d : a;
              return (i == null || i === "Shift" && s || i === "Control" && a || i === "Alt" && c || i === "Meta" && d || i === "Mod" && f) && (e = !0), e && document.addEventListener("mouseup", () => {
                e = !1;
                const { state: u } = n, { doc: h, selection: m, tr: p } = u, { $anchor: b, $head: y } = m;
                if (b.sameParent(y))
                  return;
                const v = Le.create(h, b.pos, y.pos, this.options.depth);
                p.setSelection(v), n.dispatch(p);
              }, { once: !0 }), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: r } = n, i = si(r);
            if (t = !1, !e)
              return i ? (t = !0, Ed(r.ranges)) : null;
            const { $from: o, $to: s } = r;
            if (!i && o.sameParent(s))
              return null;
            const a = To(o, s, this.options.depth);
            return a.length ? (t = !0, Ed(a)) : null;
          }
        }
      })
    ];
  }
});
function NE(t) {
  let e = "";
  const n = getComputedStyle(t);
  for (let r = 0; r < n.length; r += 1)
    e += `${n[r]}:${n.getPropertyValue(n[r])};`;
  return e;
}
function SE(t) {
  const e = t.cloneNode(!0), n = [t, ...Array.from(t.getElementsByTagName("*"))], r = [e, ...Array.from(e.getElementsByTagName("*"))];
  return n.forEach((i, o) => {
    r[o].style.cssText = NE(i);
  }), e;
}
const bp = (t) => {
  const { x: e, y: n, direction: r, editor: i } = t;
  let o = null, s = null, a = null, c = e;
  for (; s === null && c < window.innerWidth && c > 0; ) {
    const d = document.elementsFromPoint(c, n), f = d.findIndex((h) => h.classList.contains("ProseMirror")), u = d.slice(0, f);
    if (u.length > 0) {
      const h = u[0];
      if (o = h, a = i.view.posAtDOM(h, 0), a >= 0) {
        s = i.state.doc.nodeAt(Math.max(a - 1, 0)), s?.isText && (s = i.state.doc.nodeAt(Math.max(a - 1, 0))), s || (s = i.state.doc.nodeAt(Math.max(a, 0)));
        break;
      }
    }
    r === "left" ? c -= 1 : c += 1;
  }
  return { resultElement: o, resultNode: s, pos: a ?? null };
};
function li(t, e) {
  return window.getComputedStyle(t)[e];
}
function IE(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function AE(t, e, n) {
  const r = parseInt(li(t.dom, "paddingLeft"), 10), i = parseInt(li(t.dom, "paddingRight"), 10), o = parseInt(li(t.dom, "borderLeftWidth"), 10), s = parseInt(li(t.dom, "borderLeftWidth"), 10), a = t.dom.getBoundingClientRect();
  return {
    left: IE(e, a.left + r + o, a.right - i - s),
    top: n
  };
}
function vp(t) {
  var e;
  (e = t.parentNode) === null || e === void 0 || e.removeChild(t);
}
function TE(t, e) {
  const { doc: n } = e.view.state, r = bp({
    editor: e,
    x: t.clientX,
    y: t.clientY,
    direction: "right"
  });
  if (!r.resultNode || r.pos === null)
    return [];
  const i = t.clientX, o = AE(e.view, i, t.clientY), s = e.view.posAtCoords(o);
  if (!s)
    return [];
  const { pos: a } = s;
  if (!n.resolve(a).parent)
    return [];
  const d = n.resolve(r.pos), f = n.resolve(r.pos + 1);
  return To(d, f, 0);
}
function EE(t, e) {
  const { view: n } = e;
  if (!t.dataTransfer)
    return;
  const { empty: r, $from: i, $to: o } = n.state.selection, s = TE(t, e), a = To(i, o, 0), c = a.some((y) => s.find((v) => v.$from === y.$from && v.$to === y.$to)), d = r || !c ? s : a;
  if (!d.length)
    return;
  const { tr: f } = n.state, u = document.createElement("div"), h = d[0].$from.pos, m = d[d.length - 1].$to.pos, p = Le.create(n.state.doc, h, m), b = p.content();
  d.forEach((y) => {
    const v = n.nodeDOM(y.$from.pos), w = SE(v);
    u.append(w);
  }), u.style.position = "absolute", u.style.top = "-10000px", document.body.append(u), t.dataTransfer.clearData(), t.dataTransfer.setDragImage(u, 0, 0), n.dragging = { slice: b, move: !0 }, f.setSelection(p), n.dispatch(f), document.addEventListener("drop", () => vp(u), { once: !0 });
}
const Dd = (t, e) => {
  const n = t.resolve(e), { depth: r } = n;
  return r === 0 ? e : n.pos - n.parentOffset - 1;
}, _d = (t, e) => {
  const n = t.nodeAt(e), r = t.resolve(e);
  let { depth: i } = r, o = n;
  for (; i > 0; ) {
    const s = r.node(i);
    i -= 1, i === 0 && (o = s);
  }
  return o;
}, cs = (t, e) => {
  const n = ye.getState(t);
  return n ? ol(e, n.type, n.binding.mapping) : null;
}, DE = (t, e) => {
  const n = ye.getState(t);
  return n ? wi(n.doc, n.type, e, n.binding.mapping) || 0 : -1;
}, Ld = (t, e) => {
  let n = e;
  for (; n && n.parentNode && n.parentNode !== t.dom; )
    n = n.parentNode;
  return n;
}, yp = new We("dragHandle"), xp = ({ pluginKey: t = yp, element: e, editor: n, tippyOptions: r, onNodeChange: i }) => {
  const o = document.createElement("div");
  let s = null, a = !1, c = null, d = -1, f;
  return e.addEventListener("dragstart", (u) => {
    EE(u, n), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new It({
    key: typeof t == "string" ? new We(t) : t,
    state: {
      init() {
        return { locked: !1 };
      },
      apply(u, h, m, p) {
        const b = u.getMeta("lockDragHandle"), y = u.getMeta("hideDragHandle");
        if (b !== void 0 && (a = b), y && s)
          return s.hide(), a = !1, c = null, d = -1, i?.({ editor: n, node: null, pos: -1 }), h;
        if (u.docChanged && d !== -1 && e && s)
          if (CE(u)) {
            const v = DE(p, f);
            v !== d && (d = v);
          } else {
            const v = u.mapping.map(d);
            v !== d && (d = v, f = cs(p, d));
          }
        return h;
      }
    },
    view: (u) => {
      var h;
      return e.draggable = !0, e.style.pointerEvents = "auto", (h = n.view.dom.parentElement) === null || h === void 0 || h.appendChild(o), o.appendChild(e), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.top = "0", o.style.left = "0", {
        update(m, p) {
          if (!e)
            return;
          if (!n.isEditable) {
            s?.destroy(), s = null;
            return;
          }
          if (s || (s = dv(u.dom, {
            getReferenceClientRect: null,
            interactive: !0,
            trigger: "manual",
            placement: "left-start",
            hideOnClick: !1,
            duration: 100,
            popperOptions: {
              modifiers: [
                { name: "flip", enabled: !1 },
                {
                  name: "preventOverflow",
                  options: {
                    rootBoundary: "document",
                    mainAxis: !1
                  }
                }
              ]
            },
            ...r,
            appendTo: o,
            content: e
          })), a ? e.draggable = !1 : e.draggable = !0, u.state.doc.eq(p.doc) || d === -1)
            return;
          let b = u.nodeDOM(d);
          if (b = Ld(u, b), b === u.dom || b?.nodeType !== 1)
            return;
          const y = u.posAtDOM(b, 0), v = _d(n.state.doc, y), w = Dd(n.state.doc, y);
          c = v, d = w, f = cs(u.state, d), i?.({ editor: n, node: c, pos: d }), s.setProps({
            getReferenceClientRect: () => b.getBoundingClientRect()
          });
        },
        // TODO: Kills even on hot reload
        destroy() {
          s?.destroy(), e && vp(o);
        }
      };
    },
    props: {
      handleDOMEvents: {
        mouseleave(u, h) {
          return a || h.target && !o.contains(h.relatedTarget) && (s?.hide(), c = null, d = -1, i?.({ editor: n, node: null, pos: -1 })), !1;
        },
        mousemove(u, h) {
          if (!e || !s || a)
            return !1;
          const m = bp({
            x: h.clientX,
            y: h.clientY,
            direction: "right",
            editor: n
          });
          if (!m.resultElement)
            return !1;
          let p = m.resultElement;
          if (p = Ld(u, p), p === u.dom || p?.nodeType !== 1)
            return !1;
          const b = u.posAtDOM(p, 0), y = _d(n.state.doc, b);
          if (y !== c) {
            const v = Dd(n.state.doc, b);
            c = y, d = v, f = cs(u.state, d), i?.({ editor: n, node: c, pos: d }), s.setProps({
              getReferenceClientRect: () => p.getBoundingClientRect()
            }), s.show();
          }
          return !1;
        }
      }
    }
  });
};
pn.create({
  name: "dragHandle",
  addOptions() {
    return {
      render() {
        const t = document.createElement("div");
        return t.classList.add("drag-handle"), t;
      },
      tippyOptions: {},
      locked: !1,
      onNodeChange: () => null
    };
  },
  addCommands() {
    return {
      lockDragHandle: () => ({ editor: t }) => (this.options.locked = !0, t.commands.setMeta("lockDragHandle", this.options.locked)),
      unlockDragHandle: () => ({ editor: t }) => (this.options.locked = !1, t.commands.setMeta("lockDragHandle", this.options.locked)),
      toggleDragHandle: () => ({ editor: t }) => (this.options.locked = !this.options.locked, t.commands.setMeta("lockDragHandle", this.options.locked))
    };
  },
  addProseMirrorPlugins() {
    const t = this.options.render();
    return [
      xp({
        tippyOptions: this.options.tippyOptions,
        element: t,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange
      })
    ];
  }
});
const _E = (t) => {
  const { className: e = "drag-handle", children: n, editor: r, pluginKey: i = yp, onNodeChange: o, tippyOptions: s } = t, [a, c] = F(null), d = W(null);
  return V(() => a ? r.isDestroyed ? () => {
    d.current = null;
  } : (d.current || (d.current = xp({
    editor: r,
    element: a,
    pluginKey: i,
    tippyOptions: s,
    onNodeChange: o
  }), r.registerPlugin(d.current)), () => {
    r.unregisterPlugin(i), d.current = null;
  }) : () => {
    d.current = null;
  }, [a, r, o, i, s]), Q.createElement("div", { className: e, ref: c }, n);
}, LE = ({ placeholder: t, translations: e, aiBlockConfig: n, imageUploadConfig: r }) => [Lu, Ou, Ru, Fu, Mu, Pu, zu, $u, ju, lf, cf, af, Yx, Ok, zk, wk.configure({
  currentConfig: n
}), Ek, ...r ? [Dk(r)] : [], kk, uv, fv(t), hv(t), Fk({
  aiBlockConfig: n,
  translations: e,
  imageUploadConfig: r
})], OE = ({ items: t }) => t?.map((e, n) => g(ln, {
  children: [e.type === "status" ? l(an, {
    text: e.label,
    variant: e.variant
  }) : e.type === "dot-tag" ? l(no, {
    text: e.label,
    color: e.color
  }) : e.type === "tag" ? l(Jt, {
    text: e.label,
    icon: e.icon
  }) : e.type === "person" ? g("div", {
    className: "flex items-center gap-1",
    children: [l("div", {
      className: "flex w-fit items-center truncate text-f1-foreground-secondary",
      children: l("span", {
        children: e.label
      })
    }), l(Or, {
      avatar: {
        type: "person",
        firstName: e.firstName,
        lastName: e.lastName,
        src: e.src
      },
      size: "xs"
    }), g("span", {
      children: [e.firstName, " ", e.lastName]
    })]
  }) : e.type === "text" && g("div", {
    className: "flex flex-row gap-2",
    children: [l("div", {
      className: "flex w-fit items-center truncate text-f1-foreground-secondary",
      children: l("span", {
        children: e.label
      })
    }), l("div", {
      className: "flex items-center truncate font-medium text-f1-foreground",
      children: l("span", {
        children: e.content
      })
    })]
  }), n < t.length - 1 && l("div", {
    className: "h-4 w-[1px] bg-f1-border"
  })]
}, `intersperse-${n}`)), RE = ({ actions: t, metadata: e, secondaryActions: n }) => g("div", {
  className: "flex items-center justify-between gap-2 px-6 py-3",
  children: [l(ut, {
    children: l("div", {
      className: "flex flex-row items-center gap-2",
      children: OE({
        items: e || []
      })
    })
  }), g("div", {
    className: "flex flex-shrink-0 flex-row gap-2",
    children: [n && l(Me, {
      items: n.map((r) => ({
        label: r.label,
        icon: r.icon,
        onClick: r.onClick,
        critical: r.critical
      }))
    }), t?.map((r, i) => l(B, {
      onClick: r.onClick,
      variant: r.variant || "outline",
      label: r.label,
      icon: r.icon,
      hideLabel: r.hideLabel
    }, i))]
  })]
}), V_ = q(function({ onChange: e, placeholder: n, initialEditorState: r, readonly: i = !1, aiBlockConfig: o, imageUploadConfig: s, onTitleChange: a, actions: c, secondaryActions: d, metadata: f, withPadding: u = !0, showBubbleMenu: h = !1, titlePlaceholder: m }, p) {
  const b = X(), y = W(null), v = W(null), w = Nl(), [x] = F(() => r?.content || ""), [D, N] = F(r?.title || ""), [k, I] = F(null), E = (_) => {
    switch (_) {
      case "file-too-large":
        return b.imageUpload.errors.fileTooLarge;
      case "invalid-type":
        return b.imageUpload.errors.invalidType;
      case "upload-failed":
        return b.imageUpload.errors.uploadFailed;
      default:
        return b.imageUpload.errors.uploadFailed;
    }
  };
  V(() => {
    a && a(D);
  }, [D, a]);
  const T = mv({
    extensions: LE({
      placeholder: n,
      translations: b,
      aiBlockConfig: o,
      imageUploadConfig: s ? {
        ...s,
        onError: (_) => {
          I(_);
        }
      } : void 0
    }),
    content: x,
    onUpdate: ({ editor: _ }) => {
      e(_.isEmpty ? {
        json: null,
        html: null
      } : {
        json: _.getJSON(),
        html: _.getHTML()
      });
    },
    editable: !i
  });
  Nu(p, () => ({
    clear: () => T?.commands.clearContent(),
    focus: () => T?.commands.focus(),
    setContent: (_) => T?.commands.setContent(_),
    insertAIBlock: () => {
      !T || !o || T.chain().focus().insertContentAt(T.state.doc.content.size, [{
        type: "aiBlock",
        attrs: {
          data: {
            content: null,
            selectedAction: void 0
          },
          config: o,
          isCollapsed: !1
        }
      }, {
        type: "paragraph"
      }]).run();
    },
    insertTranscript: (_, $, K) => {
      T && T.chain().focus().insertContentAt(T.state.doc.content.size, [{
        type: "transcript",
        attrs: {
          data: {
            title: _,
            users: $,
            messages: K
          },
          isOpen: !1
        }
      }, {
        type: "paragraph"
      }]).run();
    },
    pushContent: (_) => {
      T && T.chain().focus().insertContentAt(T.state.doc.content.size, _).run();
    },
    insertImage: (_) => {
      !T || !s || Uf(T, _, {
        ...s,
        onError: ($) => {
          I($);
        }
      });
    }
  }));
  const S = z(() => ({
    offset: [0, 5]
  }), []), L = ne(({ node: _, pos: $ }) => {
    v.current = _ ? {
      pos: $,
      nodeSize: _.nodeSize
    } : null;
  }, []), A = ne(() => {
    const _ = v.current;
    if (!_ || !T) return;
    const { pos: $, nodeSize: K } = _, ee = T.state.doc.nodeAt($);
    if (ee && ee.content.size === 0)
      T.chain().focus().setTextSelection($ + 1).insertContent("/").run();
    else {
      const ae = $ + K;
      T.chain().focus().insertContentAt(ae, {
        type: "paragraph"
      }).setTextSelection(ae + 1).insertContent("/").run();
    }
  }, [T]), O = c && c.length > 0 || f && f.length > 0 || d && d.length > 0, R = a || D;
  return T ? g("div", {
    className: "relative flex h-full w-full flex-col",
    ref: y,
    id: w,
    children: [O && l(RE, {
      actions: c,
      metadata: f,
      secondaryActions: d
    }), k && l("div", {
      className: "mx-auto flex w-full max-w-[824px] px-14 py-2",
      children: g("div", {
        className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm",
        children: [g("div", {
          className: "flex w-full flex-row items-center gap-2",
          children: [l("div", {
            className: "flex-shrink-0",
            children: l(Rr, {
              size: "sm",
              type: "critical"
            })
          }), l("p", {
            className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
            title: E(k),
            children: E(k)
          })]
        }), l("div", {
          className: "flex-shrink-0",
          children: l(B, {
            variant: "outline",
            onClick: () => I(null),
            label: b.imageUpload.errors.dismiss,
            size: "sm"
          })
        })]
      })
    }), !i && !h && l("div", {
      className: "absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg bg-f1-background p-2 shadow-md",
      children: l(pv, {
        editor: T,
        disableButtons: !1,
        showEmojiPicker: !1,
        plainHtmlMode: !1
      })
    }), g(ut, {
      className: "h-full gap-6",
      children: [R && l("div", {
        className: `mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 ${u ? "px-14" : "pl-12"}`,
        children: l("input", {
          disabled: !a || i,
          value: D,
          onChange: (_) => N(_.target.value),
          placeholder: m || "",
          className: "text-[39px] font-semibold text-f1-foreground placeholder-f1-foreground-tertiary"
        })
      }), g("div", {
        className: "notes-text-editor h-full",
        onClick: () => T.commands.focus(),
        children: [!i && l(_E, {
          editor: T,
          tippyOptions: S,
          onNodeChange: L,
          children: g("div", {
            className: "flex flex-row",
            children: [l(nt, {
              compact: !0,
              variant: "ghost",
              size: "sm",
              className: "text-f1-foreground-tertiary",
              onClick: A,
              label: "Add paragraph",
              hideLabel: !0,
              icon: Ji
            }), l("div", {
              className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
              draggable: !0,
              "data-drag-handle": !0,
              children: l(G, {
                icon: _r,
                size: "xs"
              })
            })]
          })
        }), l(gv, {
          editor: T,
          className: `pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 ${u ? "[&>div]:px-14" : "[&>div]:pl-12"}`
        })]
      })]
    }), !i && l(bv, {
      editorId: w,
      editor: T,
      disableButtons: !1,
      isToolbarOpen: !h,
      isFullscreen: !1,
      plainHtmlMode: !1
    })]
  }) : null;
}), W_ = ({ withHeader: t = !1, withTitle: e = !0, withToolbar: n = !0 }) => g("div", {
  className: "relative flex h-full w-full flex-col",
  "aria-busy": "true",
  "aria-live": "polite",
  children: [t && g("div", {
    className: "flex items-center justify-between border-b border-f1-border px-6 py-3",
    children: [g("div", {
      className: "flex items-center gap-3",
      children: [l(M, {
        className: "h-6 w-20 rounded-md"
      }), l(M, {
        className: "h-6 w-24 rounded-md"
      })]
    }), g("div", {
      className: "flex items-center gap-2",
      children: [l(M, {
        className: "h-8 w-16 rounded-md"
      }), l(M, {
        className: "h-8 w-12 rounded-md"
      })]
    })]
  }), n && g("div", {
    className: "absolute bottom-8 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-[9px] rounded-lg bg-f1-background p-2 shadow-md",
    children: [l(M, {
      className: "h-8 w-8 rounded"
    }), g("div", {
      className: "flex items-center gap-0.5",
      children: [l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      })]
    }), g("div", {
      className: "flex items-center gap-0.5",
      children: [l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      })]
    }), g("div", {
      className: "flex items-center gap-0.5",
      children: [l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      }), l(M, {
        className: "h-8 w-8 rounded"
      })]
    })]
  }), g(ut, {
    className: "h-full gap-6",
    children: [e && l("div", {
      className: "mx-auto flex w-full max-w-[824px] flex-col px-14 pb-5 pt-5",
      children: l(M, {
        className: "h-8 w-80 rounded-md"
      })
    }), l("div", {
      className: "h-full",
      children: l("div", {
        className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:px-14",
        children: g("div", {
          className: "flex flex-col gap-2",
          children: [l(M, {
            className: "h-5 w-full rounded-md"
          }), l(M, {
            className: "h-5 w-4/5 rounded-md"
          }), l(M, {
            className: "h-5 w-3/5 rounded-md"
          }), l(M, {
            className: "h-5 w-full rounded-md"
          }), l(M, {
            className: "h-5 w-1/2 rounded-md"
          })]
        })
      })
    })]
  })]
}), ha = {
  0: "gap-0",
  px: "gap-px",
  "0.5": "gap-0.5",
  1: "gap-1",
  "1.5": "gap-1.5",
  2: "gap-2",
  "2.5": "gap-2.5",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  11: "gap-11",
  12: "gap-12",
  14: "gap-14",
  16: "gap-16",
  sm: "gap-1",
  md: "gap-2",
  lg: "gap-3",
  xl: "gap-4"
}, FE = zt({
  base: "grid grid-cols-1",
  variants: {
    tileSize: {
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...ha
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), ME = Q.forwardRef(function({ className: e, gap: n, children: r, tileSize: i, ...o }, s) {
  return l("div", {
    className: C("@container", "grow"),
    ref: s,
    ...o,
    children: l("div", {
      className: C(FE({
        gap: n,
        tileSize: i
      }), e),
      ref: s,
      ...o,
      children: r
    })
  });
}), PE = zt({
  base: "flex",
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto"
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16"
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    },
    height: {
      auto: "h-auto",
      full: "h-full"
    },
    width: {
      auto: "w-auto",
      full: "w-full"
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16"
    },
    basis: {
      0: "basis-0"
    },
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    justifyContent: {
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      start: "justify-start",
      stretch: "justify-stretch"
    },
    alignItems: {
      center: "items-center",
      end: "items-end",
      "space-between": "items-between",
      start: "items-start",
      stretch: "items-stretch"
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0"
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0"
    }
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: !1
  }
}), wp = q(function({ className: e, grow: n, basis: r, shrink: i, paddingX: o, paddingY: s, inline: a, overflow: c, maxWidth: d, justifyContent: f, alignItems: u, height: h, width: m, ...p }, b) {
  return l("div", {
    className: C(PE({
      paddingX: o,
      basis: r,
      paddingY: s,
      grow: n,
      shrink: i,
      inline: a,
      overflow: c,
      maxWidth: d,
      justifyContent: f,
      alignItems: u,
      height: h,
      width: m
    }), e),
    ref: b,
    ...p
  });
}), zE = zt({
  base: "flex-row",
  variants: {
    gap: {
      ...ha
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), $E = Q.forwardRef(function({ className: e, gap: n, wrap: r, ...i }, o) {
  return l(wp, {
    className: C(zE({
      gap: n,
      wrap: r
    }), e),
    ref: o,
    ...i
  });
}), jE = zt({
  base: "flex-col",
  variants: {
    gap: {
      ...ha
    }
  },
  defaultVariants: {}
}), BE = q(function({ className: e, gap: n, children: r, ...i }, o) {
  return l(wp, {
    className: C(jE({
      gap: n
    }), e),
    ref: o,
    ...i,
    children: r
  });
}), U_ = gt({
  name: "Stack",
  type: "layout"
}, BE), G_ = gt({
  name: "Split",
  type: "layout"
}, $E), q_ = gt({
  name: "AutoGrid",
  type: "layout"
}, ME), HE = ({ children: t }) => {
  const { enabled: e } = Uu();
  return l("div", {
    className: C("inline-flex ring-1 ring-inset ring-transparent transition-all duration-150", e && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"),
    "aria-hidden": e,
    children: l(U.div, {
      className: "h-full w-full",
      animate: {
        opacity: e ? 0 : 1,
        scale: e ? 0.95 : 1
      },
      transition: {
        duration: 0.15
      },
      children: t
    })
  });
}, VE = () => l("div", {
  className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary"
}), WE = q(function({ header: e, children: n, action: r, summaries: i, alert: o, status: s, fullHeight: a = !1 }, c) {
  const { enabled: d, toggle: f } = Uu();
  V(() => {
    if (o && s)
      throw Error("You cannot pass both alert and status at the same time to this component");
  }, [o, s]);
  const u = (m) => !!m && !(Q.isValidElement(m) && m.type === Q.Fragment && Q.Children.count(m.props.children) === 0), h = () => {
    e?.link?.onClick?.();
  };
  return g(ro, {
    className: C(a ? "h-full" : "", "relative flex gap-3 border-f1-border-secondary"),
    ref: c,
    children: [e && l(io, {
      className: "-mr-1 -mt-1",
      children: g("div", {
        className: "flex w-full flex-1 flex-col gap-4",
        children: [g("div", {
          className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2",
          children: [g("div", {
            className: "flex min-h-6 grow flex-row items-center gap-1 truncate",
            children: [e.title && l(oo, {
              className: "truncate",
              children: e.title
            }), e.subtitle && g("div", {
              className: "flex flex-row items-center gap-1",
              children: [l(VE, {}), l(Gu, {
                className: "truncate",
                children: e.subtitle
              })]
            }), e.info && l(dt, {
              label: e.info,
              children: l(G, {
                icon: Qi,
                size: "sm",
                className: "text-f1-foreground-secondary"
              })
            }), e.count && l("div", {
              className: "ml-0.5",
              children: l(Lr, {
                value: e.count
              })
            })]
          }), g("div", {
            className: "flex flex-row items-center gap-3",
            children: [o && l(qu, {
              text: o,
              level: "critical"
            }), s && l(an, {
              text: s.text,
              variant: s.variant
            }), e.link && l(vv, {
              onClick: h,
              href: e.link.url,
              title: e.link.title,
              icon: e.link.icon
            })]
          })]
        }), e.comment && g("div", {
          className: "flex flex-row items-center gap-3 overflow-visible",
          children: [l(HE, {
            children: l(yv, {
              children: e.comment
            })
          }), !!e.canBeBlurred && l("span", {
            children: l(B, {
              icon: d ? Bb : Hb,
              hideLabel: !0,
              label: "hide/show",
              variant: "outline",
              onClick: f,
              size: "sm"
            })
          })]
        })]
      })
    }), g(so, {
      className: "flex h-full flex-col gap-4",
      children: [i && l("div", {
        className: "flex flex-row",
        children: i.map((m, p) => g("div", {
          className: "grow",
          children: [l("div", {
            className: "mb-0.5 text-sm text-f1-foreground-secondary",
            children: m.label
          }), g("div", {
            className: "flex flex-row items-end gap-0.5 text-2xl font-semibold",
            children: [!!m.prefixUnit && l("div", {
              className: "text-lg font-medium",
              children: m.prefixUnit
            }), m.value, !!m.postfixUnit && l("div", {
              className: "text-lg font-medium",
              children: m.postfixUnit
            })]
          })]
        }, p))
      }), Q.Children.toArray(n).filter(u).map((m, p) => g(Q.Fragment, {
        children: [p > 0 && l(xv, {
          bare: !0
        }), m]
      }, p))]
    }), r && l(wv, {
      children: l(B, {
        variant: "neutral",
        size: "sm",
        ...r
      })
    })]
  });
}), UE = zt({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), GE = q(function({ header: e, height: n }, r) {
  return g(ro, {
    className: C("flex gap-4 border-f1-border-secondary", n === "full" && "h-full"),
    ref: r,
    "aria-live": "polite",
    "aria-busy": !0,
    children: [l(io, {
      className: "-mr-1 -mt-1",
      children: g("div", {
        className: "flex h-6 w-full flex-row items-center gap-1.5",
        "aria-hidden": !0,
        children: [e?.title ? l(oo, {
          children: e.title
        }) : l(M, {
          className: "h-4 w-full max-w-16"
        }), e?.subtitle && l(Gu, {
          children: e.subtitle
        })]
      })
    }), l(so, {
      "aria-hidden": !0,
      className: C(n !== "full" && UE({
        height: n
      })),
      children: [...Array(4)].map((i, o) => l(M, {
        className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][o]}`
      }, o))
    })]
  });
}), On = se("Widget", Ne(WE, GE)), tt = Object.assign(q(function({ chart: e, summaries: n, ...r }, i) {
  return l(On, {
    ref: i,
    ...r,
    summaries: n,
    children: e && l("div", {
      className: "min-h-52 min-w-52 grow pt-2",
      children: e
    })
  });
}), {
  Skeleton: On.Skeleton
}), qE = Ne(q(function({ canBeBlurred: e, ...n }, r) {
  const i = {
    ...n,
    header: {
      ...n.header,
      canBeBlurred: e
    }
  }, o = {
    ...n.chart,
    yAxis: n.chart.yAxis ? {
      ...n.chart.yAxis
    } : {
      hide: !0
    }
  };
  return l(tt, {
    ref: r,
    ...i,
    chart: l(kv, {
      ...o,
      canBeBlurred: e
    })
  });
}), tt.Skeleton), KE = se("AreaChartWidget", qE), JE = q(function(e, n) {
  return l(tt, {
    ref: n,
    ...e,
    chart: l(Cv, {
      yAxis: {
        hide: !0
      },
      ...e.chart
    })
  });
}), YE = se("BarChartWidget", Ne(JE, tt.Skeleton)), QE = Ne(q(function(e, n) {
  return l(tt, {
    ref: n,
    ...e,
    chart: l(Nv, {
      yAxis: {
        hide: !0
      },
      ...e.chart
    })
  });
}), tt.Skeleton), XE = se("LineChartWidget", QE), ZE = Ne(q(function(e, n) {
  return l(tt, {
    ref: n,
    ...e,
    chart: l(Sv, {
      ...e.chart
    })
  });
}), tt.Skeleton), eD = se("PieChartWidget", ZE), tD = Ne(q(function(e, n) {
  return l(tt, {
    ref: n,
    ...e,
    chart: null
  });
}), tt.Skeleton), nD = se("SummariesWidget", tD), rD = Ne(q(function(e, n) {
  return l(tt, {
    ref: n,
    ...e,
    chart: l(Iv, {
      xAxis: {
        hide: !0
      },
      ...e.chart
    })
  });
}), tt.Skeleton), iD = se("VerticalBarChartWidget", rD), K_ = gt({
  name: "AreaChartWidget",
  type: "info"
}, KE), J_ = gt({
  name: "BarChartWidget",
  type: "info"
}, YE), Y_ = gt({
  name: "LineChartWidget",
  type: "info"
}, XE), Q_ = gt({
  name: "PieChartWidget",
  type: "info"
}, eD), X_ = gt({
  name: "VerticalBarChartWidget",
  type: "info"
}, iD), Z_ = gt({
  name: "SummariesWidget",
  type: "info"
}, nD), oD = (t, e) => g("svg", {
  width: "366",
  height: "146",
  viewBox: "0 0 366 146",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: e,
  ...t,
  children: [l("g", {
    filter: "url(#filter0_b_378_17717)",
    children: l("rect", {
      y: "60",
      width: "40",
      height: "86",
      rx: "10",
      fill: "#F5A51C",
      fillOpacity: "0.1"
    })
  }), l("g", {
    filter: "url(#filter1_b_378_17717)",
    children: l("rect", {
      x: "80",
      y: "33",
      width: "40",
      height: "113",
      rx: "10",
      fill: "#F5A51C",
      fillOpacity: "0.1"
    })
  }), l("g", {
    filter: "url(#filter2_b_378_17717)",
    children: l("rect", {
      x: "162",
      y: "60",
      width: "40",
      height: "86",
      rx: "10",
      fill: "#F5A51C",
      fillOpacity: "0.1"
    })
  }), l("g", {
    filter: "url(#filter3_b_378_17717)",
    children: l("rect", {
      x: "244",
      y: "38",
      width: "40",
      height: "108",
      rx: "10",
      fill: "#F5A51C",
      fillOpacity: "0.1"
    })
  }), l("g", {
    filter: "url(#filter4_b_378_17717)",
    children: l("rect", {
      x: "326",
      width: "40",
      height: "146",
      rx: "10",
      fill: "#F5A51C",
      fillOpacity: "0.1"
    })
  }), g("defs", {
    children: [g("filter", {
      id: "filter0_b_378_17717",
      x: "-40",
      y: "20",
      width: "120",
      height: "166",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [l("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), l("feGaussianBlur", {
        in: "BackgroundImageFix",
        stdDeviation: "20"
      }), l("feComposite", {
        in2: "SourceAlpha",
        operator: "in",
        result: "effect1_backgroundBlur_378_17717"
      }), l("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "effect1_backgroundBlur_378_17717",
        result: "shape"
      })]
    }), g("filter", {
      id: "filter1_b_378_17717",
      x: "40",
      y: "-7",
      width: "120",
      height: "193",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [l("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), l("feGaussianBlur", {
        in: "BackgroundImageFix",
        stdDeviation: "20"
      }), l("feComposite", {
        in2: "SourceAlpha",
        operator: "in",
        result: "effect1_backgroundBlur_378_17717"
      }), l("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "effect1_backgroundBlur_378_17717",
        result: "shape"
      })]
    }), g("filter", {
      id: "filter2_b_378_17717",
      x: "122",
      y: "20",
      width: "120",
      height: "166",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [l("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), l("feGaussianBlur", {
        in: "BackgroundImageFix",
        stdDeviation: "20"
      }), l("feComposite", {
        in2: "SourceAlpha",
        operator: "in",
        result: "effect1_backgroundBlur_378_17717"
      }), l("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "effect1_backgroundBlur_378_17717",
        result: "shape"
      })]
    }), g("filter", {
      id: "filter3_b_378_17717",
      x: "204",
      y: "-2",
      width: "120",
      height: "188",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [l("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), l("feGaussianBlur", {
        in: "BackgroundImageFix",
        stdDeviation: "20"
      }), l("feComposite", {
        in2: "SourceAlpha",
        operator: "in",
        result: "effect1_backgroundBlur_378_17717"
      }), l("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "effect1_backgroundBlur_378_17717",
        result: "shape"
      })]
    }), g("filter", {
      id: "filter4_b_378_17717",
      x: "286",
      y: "-40",
      width: "120",
      height: "226",
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB",
      children: [l("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), l("feGaussianBlur", {
        in: "BackgroundImageFix",
        stdDeviation: "20"
      }), l("feComposite", {
        in2: "SourceAlpha",
        operator: "in",
        result: "effect1_backgroundBlur_378_17717"
      }), l("feBlend", {
        mode: "normal",
        in: "SourceGraphic",
        in2: "effect1_backgroundBlur_378_17717",
        result: "shape"
      })]
    })]
  })]
}), sD = q(oD), lD = (t, e) => g("svg", {
  width: "406",
  height: "179",
  viewBox: "0 0 406 179",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ref: e,
  ...t,
  children: [l("path", {
    d: "M406 1L352.178 11.5985C343.237 13.359 334.653 16.5974 326.777 21.1805L270.327 54.031L208.727 80.0238C204.915 81.6326 200.986 82.9506 196.974 83.9662L146.837 96.6597C139.431 98.5348 132.323 101.436 125.72 105.279L80.2168 131.758C71.6933 136.718 62.3449 140.1 52.6208 141.742L1.12057e-05 150.623",
    stroke: "#E51943",
    strokeOpacity: "0.1",
    strokeWidth: "1.3",
    strokeLinejoin: "round"
  }), l("path", {
    d: "M203 82.4405L270.327 54.031L338.673 14.2578L406 1V179H0V150.623L67.3266 139.26L135.673 99.4862L203 82.4405Z",
    fill: "url(#paint0_linear_3715_9085)"
  }), l("defs", {
    children: g("linearGradient", {
      id: "paint0_linear_3715_9085",
      x1: "203",
      y1: "179",
      x2: "203",
      y2: "1",
      gradientUnits: "userSpaceOnUse",
      children: [l("stop", {
        stopColor: "#E51943",
        stopOpacity: "0"
      }), l("stop", {
        offset: "1",
        stopColor: "#E51943",
        stopOpacity: "0.05"
      })]
    })
  })]
}), aD = q(lD), cD = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, dD = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, uD = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, fD = {
  "line-chart": "default",
  "bar-chart": "promote"
}, hD = q(function({ title: e, content: n, buttonLabel: r, buttonIcon: i, buttonAction: o, type: s }, a) {
  const c = cD[s], d = dD[s], f = uD[s], u = fD[s];
  return g(ro, {
    className: C("relative flex gap-4 overflow-hidden border-dashed", c),
    ref: a,
    children: [l(io, {
      className: "-mt-0.5",
      children: l(oo, {
        children: e
      })
    }), g(so, {
      className: C("flex flex-col gap-4", d),
      children: [g("div", {
        className: C("absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30", f),
        children: [s === "bar-chart" && l("div", {
          className: "absolute bottom-1 left-4 right-4",
          children: l(sD, {
            className: "w-full"
          })
        }), s === "line-chart" && l(aD, {
          className: "w-full"
        })]
      }), g("div", {
        className: "relative flex min-h-28 flex-1 flex-col items-start gap-5",
        children: [l("p", {
          className: "flex w-3/4 text-xl font-semibold",
          children: n
        }), r && l(B, {
          label: r,
          icon: i,
          variant: u,
          onClick: o
        })]
      })]
    })]
  });
}), eL = se("ChartWidgetEmptyState", hD);
function mD(t, e) {
  const n = W(null), r = W(null), [i, o] = F({
    visibleItems: [],
    overflowItems: []
  });
  ps({
    ref: n,
    onResize: () => {
      d();
    }
  });
  const s = ne((f, u, h) => u < h - 1 ? f + e : f, [e]), a = ne(() => {
    if (!r.current) return [];
    const f = r.current.children, u = [];
    for (let h = 0; h < f.length; h++) {
      const m = f[h].getBoundingClientRect().height;
      u.push(m);
    }
    return u;
  }, []), c = ne((f, u) => {
    let h = 0, m = 0;
    for (let p = 0; p < f.length; p++) {
      const b = m + f[p];
      if (b > u + 30) break;
      m = b, m = s(m, p, f.length), h++;
    }
    return h;
  }, [s]), d = ne(() => {
    if (!n.current || t.length === 0) return;
    const f = n.current.clientHeight, u = a(), h = c(u, f);
    o(h === 0 ? {
      visibleItems: [],
      overflowItems: t
    } : (m) => m.visibleItems.length === h && m.overflowItems.length === t.length - h ? m : {
      visibleItems: t.slice(0, h),
      overflowItems: t.slice(h)
    });
  }, [t, a, c]);
  return V(() => {
    d();
  }, [d]), {
    containerRef: n,
    measurementContainerRef: r,
    visibleItems: i.visibleItems,
    overflowItems: i.overflowItems
  };
}
const Eo = function({ items: e, renderListItem: n, className: r, gap: i = 0, minSize: o, onVisibleItemsChange: s }) {
  const { containerRef: a, measurementContainerRef: c, visibleItems: d } = mD(e, i);
  return V(() => {
    s?.(d);
  }, [s, d]), g("div", {
    ref: a,
    className: C("relative flex h-full flex-col", r),
    style: {
      minHeight: `${o}px`
    },
    children: [l("div", {
      ref: c,
      "aria-hidden": "true",
      className: "pointer-events-none invisible absolute left-0 right-0 top-0 flex flex-col opacity-0",
      style: {
        gap: `${i}px`
      },
      children: e.map((f, u) => l("div", {
        children: n(f, u, !1)
      }, `measure-${u}`))
    }), l("div", {
      className: "flex flex-col",
      style: {
        gap: `${i}px`
      },
      children: d.map((f, u) => l("div", {
        className: "transition-all duration-150",
        children: n(f, u, !0)
      }, `item-${u}`))
    })]
  });
};
Eo.displayName = "VerticalOverflowList";
const tL = ({ events: t, showAllItems: e, gap: n = 8, minSize: r = 184 }) => t.length ? e ? l("div", {
  className: "flex flex-col",
  children: t.map((i) => l(Ps, {
    ...i
  }, i.title))
}) : l(Eo, {
  items: t,
  gap: n,
  minSize: r,
  renderListItem: (i) => l(Ps, {
    ...i
  }, i.title)
}) : null;
function nL({ title: t, subtitle: e, data: n, helpText: r, legend: i = !1, hideTooltip: o = !1 }) {
  return g("div", {
    children: [g("div", {
      className: "flex items-baseline justify-between",
      children: [l("span", {
        className: "text-3xl font-semibold",
        children: t
      }), l("span", {
        className: "text-xl text-f1-foreground-secondary",
        children: e
      })]
    }), l("div", {
      className: "mt-2",
      children: l(Av, {
        data: n,
        legend: i,
        hideTooltip: o
      })
    }), !!r && l("div", {
      className: i ? "mt-1" : "mt-2",
      children: l("span", {
        className: C("text-f1-foreground", i ? "text-sm" : "text-base"),
        children: r
      })
    })]
  });
}
const kp = (t, e) => ((e ?? 0) < -1 * (t ?? 0) ? -1 * t : e) ?? 0, pD = ({
  data: t = [],
  labels: e,
  trackedMinutes: n,
  remainingMinutes: r,
  canSeeRemainingTime: i = !0
}) => {
  const s = t[t.length - 1]?.variant || "clocked-out", a = {
    "clocked-out": e.clockedOut,
    "clocked-in": e.clockedIn,
    break: e.onBreak
  }[s], c = (() => {
    if (!i || r === void 0) return;
    const f = kp(
      n,
      r
    ), u = Math.abs(f), h = Math.floor(u / 60), m = Math.floor(u % 60), p = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    return r >= 0 ? `${e.remainingTime} ${p}` : `${e.overtime} ${p}`;
  })(), d = rn[s];
  return {
    status: s,
    statusText: a,
    subtitle: c,
    statusColor: d
  };
}, ds = "--:--", gD = (t, e) => {
  if (t && t > 0)
    return {
      value: t * 60 / e,
      color: rn.empty
    };
  if (!e)
    return {
      value: 1,
      color: rn.empty
    };
}, bD = ({
  data: t = [],
  trackedMinutes: e,
  remainingMinutes: n = 0
}) => {
  const r = n < 0 && n < -1 * e, i = kp(
    e,
    n
  ), o = t.reduce(
    (f, u) => f + (u.to.getTime() - u.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, s = r || (i ?? 0) < 0 ? void 0 : gD(
    i ?? 0,
    o
  );
  let a = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, d = [
    ...[...t].reverse().reduce(
      (f, u) => {
        const h = (u.to.getTime() - u.from.getTime()) / 1e3, m = u.variant === "clocked-in" ? Math.min(h, a) : 0, b = (h - m) / o;
        return a -= m, u.variant === "clocked-in" && r ? [
          ...f,
          {
            value: m / o + b,
            color: rn.overtime
          }
        ] : [
          ...f,
          {
            value: m / o,
            color: rn.overtime
          },
          {
            value: b,
            color: rn[u.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...s ? [s] : []
  ];
  return d = d.filter((f) => f.value > 0), d.length || d.push({
    value: 1,
    color: rn.empty
  }), d;
}, vD = ({
  data: t = [],
  remainingMinutes: e,
  trackedMinutes: n = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, i = t.at(-1), o = r ? Ra(r) : ds, s = e === void 0 || e > 0 ? ds : i ? Ra(i.to) : ds, c = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : n * 60 * 1e3, d = Math.floor(c / (1e3 * 60 * 60)), f = Math.floor(c % (1e3 * 60 * 60) / (1e3 * 60)), u = `${d.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
  return {
    primaryLabel: o,
    secondaryLabel: s,
    time: u
  };
}, rn = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function yD({ data: t = [], trackedMinutes: e = 0, remainingMinutes: n }) {
  const r = bD({
    data: t,
    trackedMinutes: e,
    remainingMinutes: n
  }), { primaryLabel: i, secondaryLabel: o, time: s } = vD({
    data: t,
    trackedMinutes: e,
    remainingMinutes: n
  });
  return g("div", {
    className: "relative h-40 w-40",
    children: [l(Tv, {
      width: 156,
      height: 156,
      children: l(Ev, {
        data: r,
        cx: 74,
        cy: 74,
        innerRadius: 62,
        outerRadius: 74,
        startAngle: 225,
        endAngle: -45,
        paddingAngle: 2,
        cornerRadius: 4,
        dataKey: "value",
        strokeWidth: 0,
        isAnimationActive: !1,
        children: r.map((a, c) => l(Dv, {
          fill: a.color,
          role: "presentation",
          "aria-label": `${a.value} minutes`
        }, `cell-${c}`))
      })
    }), l("div", {
      className: "absolute inset-0 flex items-center justify-center",
      children: l("span", {
        className: "text-3xl font-semibold tabular-nums text-f1-foreground",
        children: s
      })
    }), g("div", {
      className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary",
      children: [l("span", {
        className: "text-sm font-medium opacity-60",
        children: i
      }), l("span", {
        className: "text-sm font-medium opacity-60",
        children: o
      })]
    })]
  });
}
function xD({ text: t, placeholder: e, icon: n, onClick: r }) {
  return g("div", {
    className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
    onClick: r,
    children: [n && l(G, {
      icon: n,
      className: "text-f1-icon"
    }), l("span", {
      className: C("font-medium", t ? "text-f1-foreground" : "text-f1-foreground-secondary"),
      children: t ?? e
    }), l(G, {
      icon: Vb
    })]
  });
}
function rL({ trackedMinutes: t, remainingMinutes: e, data: n = [], labels: r, locationId: i, locations: o, canShowLocation: s = !0, locationSelectorDisabled: a = !1, onClockIn: c, onClockOut: d, onBreak: f, breakTypes: u, onChangeBreakTypeId: h, canShowBreakButton: m = !0, canSeeGraph: p = !0, canSeeRemainingTime: b = !0, onChangeLocationId: y, canShowProject: v = !0, projectSelectorElement: w, breakTypeName: x }) {
  const { status: D, statusText: N, subtitle: k, statusColor: I } = pD({
    data: n,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: e,
    canSeeRemainingTime: b
  }), E = D === "clocked-out", T = u?.map((J) => ({
    value: J.id,
    label: J.duration ? `${J.name} · ${J.duration}` : J.name,
    description: J.description,
    tag: J.isPaid ? r.paid : r.unpaid
  })) ?? [], [S, L] = F(!1), A = () => {
    if (T.length > 1)
      S || L(!0);
    else {
      const J = T?.[0]?.value;
      f?.(J);
    }
  }, O = (J) => {
    h?.(J), L(!1), f?.(J);
  }, R = E && o.length && !a && s, _ = o.find((J) => J.id === i), $ = o.map((J) => ({
    value: J.id,
    label: J.name,
    icon: J.icon
  })), K = D === "break", [ee, ae] = F(!1);
  return l("div", {
    className: "@container",
    children: g("div", {
      className: "flex-grow flex-col",
      children: [g("div", {
        className: "flex flex-col-reverse items-center gap-2 @xs:flex-row",
        children: [g("div", {
          className: "flex-1 space-y-4",
          children: [g("div", {
            className: "flex flex-col items-center space-y-0.5 @xs:items-start",
            children: [g("div", {
              className: "flex items-center gap-2",
              children: [l("span", {
                className: "line-clamp-1 text-2xl font-semibold text-f1-foreground",
                children: N
              }), g("div", {
                className: "relative aspect-square h-4",
                children: [l(U.div, {
                  className: "absolute inset-0 rounded-full opacity-20",
                  style: {
                    backgroundColor: I
                  },
                  initial: {
                    scale: 0.5,
                    opacity: 0.6
                  },
                  animate: {
                    scale: 1.6,
                    opacity: 0
                  },
                  transition: {
                    duration: 1.5,
                    repeat: 1 / 0,
                    repeatDelay: 1
                  }
                }), l("div", {
                  className: "absolute inset-[3px] rounded-full",
                  style: {
                    backgroundColor: I
                  }
                })]
              })]
            }), k && l("p", {
              className: "line-clamp-1 text-f1-foreground-secondary",
              children: k
            })]
          }), g("div", {
            className: "flex justify-center gap-2 @xs:justify-start",
            children: [D === "clocked-out" && l("div", {
              className: "mr-3 @xs:mr-0",
              children: l(B, {
                onClick: c,
                label: r.clockIn,
                icon: Sa
              })
            }), D === "clocked-in" && g(Z, {
              children: [m && l(Z, {
                children: T.length > 1 && h ? l(dr, {
                  label: r.break,
                  hideLabel: !0,
                  value: "",
                  options: T,
                  onChange: O,
                  open: S,
                  onOpenChange: L,
                  selectContentClassName: "min-w-80",
                  children: l("div", {
                    "aria-label": "Select break type",
                    children: l(B, {
                      label: r.break,
                      variant: "neutral",
                      icon: Ia,
                      hideLabel: !0
                    })
                  })
                }) : l(B, {
                  onClick: A,
                  label: r.break,
                  variant: "neutral",
                  icon: Ia,
                  hideLabel: !0
                })
              }), l(B, {
                onClick: d,
                label: r.clockOut,
                variant: "neutral",
                icon: Aa
              })]
            }), D === "break" && g(Z, {
              children: [l(B, {
                onClick: d,
                label: r.clockOut,
                variant: "neutral",
                icon: Aa,
                hideLabel: !0
              }), l(B, {
                onClick: c,
                label: r.resume,
                icon: Sa
              })]
            })]
          })]
        }), p && l(yD, {
          data: n,
          trackedMinutes: t,
          remainingMinutes: b ? e : 0
        })]
      }), l("div", {
        className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start",
        children: R ? g(Z, {
          children: [l(dr, {
            label: r.selectLocation,
            hideLabel: !0,
            value: i,
            options: $,
            onChange: y,
            open: ee,
            onOpenChange: ae,
            disabled: a,
            children: l("div", {
              "aria-label": "Select location",
              children: l(xD, {
                text: _?.name,
                placeholder: r.selectLocation,
                icon: _?.icon
              })
            })
          }), v && w]
        }) : g(Z, {
          children: [s && _ && l(Z, {
            children: l(Jt, {
              text: _.name,
              icon: _.icon
            })
          }), v && w, K && x && l(Jt, {
            text: x
          })]
        })
      })]
    })
  });
}
const wD = ({ onClick: t, children: e }) => {
  const n = "block rounded-lg border border-solid border-transparent p-[1px] -m-1";
  return t ? l("a", {
    className: C(n, "cursor-pointer focus:border-f1-background-selected-bold focus:outline-none"),
    onClick: t,
    tabIndex: 0,
    children: e
  }) : l("div", {
    className: n,
    tabIndex: 1,
    children: e
  });
};
function iL({ label: t, count: e, icon: n, iconClassName: r, onClick: i }) {
  return l(wD, {
    onClick: i,
    children: g("div", {
      className: C("flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5", i && "hover:border-f1-border-hover"),
      children: [g("div", {
        className: "flex flex-row items-center",
        children: [l("p", {
          className: "line-clamp-1 flex-1 text-f1-foreground-secondary",
          children: t
        }), l(G, {
          icon: n,
          size: "md",
          className: r
        })]
      }), l("p", {
        className: "line-clamp-1 flex-1 text-3xl font-semibold text-f1-foreground",
        children: e
      })]
    })
  });
}
const kD = q(function({ content: e, label: n, color: r, ...i }, o) {
  return g("div", {
    className: "flex flex-col gap-1",
    ref: o,
    children: [l("p", {
      className: "text-3xl font-semibold",
      children: e
    }), g("div", {
      className: "flex items-center gap-1",
      children: [l("p", {
        className: "line-clamp-1 text-f1-foreground-secondary",
        title: n,
        children: n
      }), "icon" in i && i.icon && l("span", {
        className: C("flex", r),
        children: l(G, {
          icon: i.icon
        })
      }), "emoji" in i && i.emoji && l("span", {
        className: C("flex", r),
        children: l(Dr, {
          emoji: i.emoji,
          size: "md"
        })
      })]
    })]
  }, n);
}), oL = q(function({ items: e }, n) {
  return l("div", {
    ref: n,
    className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
    children: e.map(({ label: r, content: i, color: o, ...s }) => l(kD, {
      label: r,
      content: i,
      color: o,
      ...s
    }, `${r}-${i}`))
  });
}), CD = ({ onClick: t, withEmoji: e, withPointerCursor: n, children: r }) => {
  const i = C("flex flex-row items-center rounded-md border border-solid border-transparent p-2 text-f1-foreground", e ? "gap-2" : "gap-2.5", n ? "cursor-pointer" : "cursor-default", t ? "hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
  return t ? l("a", {
    className: i,
    onClick: t,
    children: r
  }) : l("div", {
    className: i,
    children: r
  });
};
function sL({ id: t, title: e, subtitle: n, avatars: r, remainingCount: i, withPointerCursor: o = !1, onClick: s, ...a }) {
  return g(CD, {
    onClick: (d) => {
      d.preventDefault(), s?.(t);
    },
    withEmoji: "emoji" in a && !!a.emoji,
    withPointerCursor: o,
    children: ["alert" in a && a.alert && l(Rr, {
      type: a.alert
    }), "emoji" in a && a.emoji && l(yu, {
      emoji: a.emoji
    }), g("div", {
      className: "flex-1",
      children: [l("p", {
        className: "line-clamp-1 font-medium",
        children: e
      }), l("p", {
        className: "line-clamp-1 text-f1-foreground-secondary",
        children: n
      })]
    }), l("div", {
      className: "min-w-0 flex-1",
      children: l(Tl, {
        avatars: r,
        remainingCount: i,
        size: "emoji" in a && a.emoji ? "md" : "sm",
        type: "person"
      })
    })]
  });
}
const ND = ({ onClick: t, className: e, children: n }) => t ? l("a", {
  className: e,
  onClick: t,
  tabIndex: 0,
  children: n
}) : l("div", {
  className: e,
  tabIndex: -1,
  children: n
});
function Od({ id: t, title: e, subtitle: n, onClick: r, module: i }) {
  const o = C("flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground", r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
  return g(ND, {
    onClick: (a) => {
      a.preventDefault(), r?.(t);
    },
    className: o,
    children: [l(hu, {
      module: i ?? "inbox",
      size: "md"
    }), g("div", {
      className: "flex-1",
      children: [l("p", {
        className: "line-clamp-1 font-medium",
        children: e
      }), l("p", {
        className: "line-clamp-1 text-f1-foreground-secondary",
        children: n
      })]
    })]
  });
}
const SD = ({ onClick: t, className: e, children: n }) => t ? l("a", {
  className: e,
  onClick: t,
  tabIndex: 0,
  children: n
}) : l("div", {
  className: e,
  tabIndex: -1,
  children: n
});
function sl({ id: t, title: e, alert: n, rawTag: r, count: i, icon: o, rightIcon: s, iconClassName: a = "text-f1-icon-secondary", rightIconClassName: c = "text-f1-icon-secondary", onClick: d }) {
  const f = C("flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground", d ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
  return g(SD, {
    onClick: (h) => {
      h.preventDefault(), d?.(t);
    },
    className: f,
    children: [g("div", {
      className: "flex flex-1 flex-row items-start gap-1",
      children: [o && l(G, {
        icon: o,
        size: "md",
        className: C("mt-0.5", a)
      }), l("p", {
        className: "mt-0.5 line-clamp-2 font-medium",
        children: e
      }), s && l(G, {
        icon: s,
        size: "md",
        className: C("mt-0.5", c)
      })]
    }), g("div", {
      className: "flex flex-row items-center gap-2",
      children: [n && l(qu, {
        ...n
      }), r && l(Jt, {
        ...r
      }), !!i && l(Lr, {
        value: i
      })]
    })]
  });
}
function lL({ items: t, minSize: e = 184, onClickItem: n, showAllItems: r, onVisibleItemsChange: i }) {
  return r ? l("div", {
    className: "flex flex-col gap-2",
    children: t.map((o) => l(Od, {
      ...o,
      onClick: n
    }, o.id))
  }) : l(Eo, {
    items: t,
    minSize: e,
    renderListItem: (o) => l(Od, {
      ...o,
      onClick: n
    }, o.id),
    onVisibleItemsChange: i,
    gap: 8
  });
}
function aL({ items: t, gap: e, minSize: n = 184, onClickItem: r, showAllItems: i }) {
  return i ? l("div", {
    className: "flex flex-col",
    style: {
      minHeight: `${n}px`
    },
    children: t.map((o) => l(sl, {
      ...o,
      onClick: r
    }, o.id))
  }) : l(Eo, {
    items: t,
    gap: e,
    renderListItem: (o) => l(sl, {
      ...o,
      onClick: r
    }),
    minSize: n
  });
}
function ID({ task: t, status: e, onClick: n, hideIcon: r = !1 }) {
  const i = () => {
    n?.(t);
  }, o = z(() => {
    if (!r) {
      if (e === "todo")
        return Wb;
      if (e === "in-progress")
        return Ub;
    }
  }, [e, r]);
  return l(sl, {
    id: t.id,
    title: t.text,
    icon: o,
    iconClassName: e === "todo" ? "text-f1-icon" : "text-f1-icon-info",
    alert: t.badge?.isPastDue ? {
      text: t.badge.text,
      level: "critical"
    } : void 0,
    rawTag: t.badge && !t.badge.isPastDue ? {
      text: t.badge.text,
      icon: Gb
    } : void 0,
    count: t.counter,
    onClick: i
  });
}
function cL({ tasks: t, onClickTask: e, hideIcons: n = !1, maxTasksToShow: r = 5, emptyMessage: i = "No tasks assigned" }) {
  const s = [{
    key: "inProgress",
    status: "in-progress"
  }, {
    key: "todo",
    status: "todo"
  }].flatMap(({ key: c, status: d }) => (t[c] || []).map((f) => typeof f == "string" ? {
    id: f,
    text: f
  } : f).map(({ id: f, text: u, badge: h, counter: m }) => ({
    id: f,
    text: u,
    badge: h,
    counter: m,
    status: d
  }))), a = !s.length;
  return l("div", {
    className: "flex flex-col gap-0",
    children: a ? l("p", {
      className: "pl-2 font-medium",
      children: i
    }) : s.slice(0, r).map((c) => l(ID, {
      task: c,
      status: c.status,
      hideIcon: n,
      onClick: e
    }, c.id))
  });
}
const AD = ({ title: t, info: e }) => g("div", {
  className: "flex items-center justify-between",
  children: [l("p", {
    className: "flex text-f1-foreground-secondary",
    children: t
  }), l("div", {
    className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium",
    children: e
  })]
}), dL = q(function({ title: e, titleValue: n, titleTooltip: r, list: i }, o) {
  return g("div", {
    ref: o,
    className: "flex flex-col gap-2",
    children: [e && g("div", {
      className: "flex items-center justify-between gap-2 font-medium",
      children: [g("div", {
        className: "flex items-center gap-1",
        children: [l("div", {
          children: e
        }), r && l("div", {
          className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help",
          children: l(dt, {
            label: r.label,
            description: r.description,
            children: l(G, {
              icon: Qi,
              size: "sm"
            })
          })
        })]
      }), n && l("div", {
        children: n
      })]
    }), i.map((s) => l(AD, {
      title: s.title,
      info: s.info
    }, s.title))]
  });
});
var TD = Object.defineProperty, ED = Object.defineProperties, DD = Object.getOwnPropertyDescriptors, Ki = Object.getOwnPropertySymbols, Cp = Object.prototype.hasOwnProperty, Np = Object.prototype.propertyIsEnumerable, Rd = (t, e, n) => e in t ? TD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, et = (t, e) => {
  for (var n in e || (e = {})) Cp.call(e, n) && Rd(t, n, e[n]);
  if (Ki) for (var n of Ki(e)) Np.call(e, n) && Rd(t, n, e[n]);
  return t;
}, Do = (t, e) => ED(t, DD(e)), _D = (t, e) => {
  var n = {};
  for (var r in t) Cp.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Ki) for (var r of Ki(t)) e.indexOf(r) < 0 && Np.call(t, r) && (n[r] = t[r]);
  return n;
}, LD = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, OD = ({ spotsList: t, usedSpot: e }) => t.some((n) => n !== e && e.left === n.left), RD = ({ position: t, spot: e, stone: n }) => {
  if (t.left > e.left && e.right >= t.left && t.top + n.height > e.top) {
    if (e.bottom && e.bottom < t.top) return e;
    let r = et({}, e);
    return r.right = t.left, r;
  }
  return null;
}, FD = ({ position: t, stone: e, spot: n }) => {
  if (t.left + e.width > n.left && t.top >= n.top) {
    if (n.bottom && n.bottom < t.top || n.right < t.left) return n;
    let r = et({}, n);
    return r.bottom = t.top, r;
  }
  return null;
}, MD = ({ stone: t, position: e, spotsList: n, optimalSpot: r }) => {
  let i = et({}, r);
  return i.left = e.left + t.width, LD(i) || OD({ usedSpot: i, spotsList: n }) ? null : i;
}, PD = ({ spots: t, position: e, optimalSpot: n, stone: r }) => t.map((i, o, s) => {
  if (i === n) return MD({ stone: r, position: e, optimalSpot: n, spotsList: s });
  let a = RD({ position: e, spot: i, stone: r });
  return a || FD({ position: e, stone: r, spot: i }) || i;
});
function zD(t, e) {
  for (let n = 0, r = e.length; n < r; n++) {
    let i = e[n];
    if (t(i)) return i;
  }
  return null;
}
var $D = (t, e) => e.filter(t), jD = (t, e) => [...e].sort(t), BD = (t, e) => t.top === e.top ? t.left < e.left ? -1 : 1 : t.top < e.top ? -1 : 1, HD = (t) => jD(BD, t), VD = ({ availableSpots: t, optimalSpot: e, containerSize: n, stone: r }) => {
  let i = { right: n, top: e.top + r.height, left: e.left };
  e.bottom && (i.bottom = e.bottom);
  for (let o = 0, s = t.length; o < s; o += 1) {
    let a = t[o];
    if (i.left < a.left && i.top < a.top) {
      i.right = a.left;
      break;
    }
  }
  return i;
}, WD = (t, e) => {
  let n = t.right - t.left >= e.width;
  if (!t.bottom) return n;
  let r = t.bottom - t.top >= e.height;
  return n && r;
}, UD = ({ availableSpots: t, stone: e }) => zD((n) => WD(n, e), t);
function GD({ stone: t, availableSpots: e, containerSize: n }) {
  let r = UD({ availableSpots: e, stone: t }), i = { left: r.left, top: r.top }, o = VD({ optimalSpot: r, availableSpots: e.filter((c) => c !== r), stone: t, containerSize: n }), s = [...e, o], a = PD({ spots: s, position: i, optimalSpot: r, stone: t });
  return s = [...$D(Boolean, a)], s = HD(s), { position: i, availableSpots: s };
}
var qD = ({ stones: t, containerSize: e }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return n;
  let r = 0, i = [], o = [{ top: 0, left: 0, right: e }];
  for (let s of t) {
    let a = GD({ availableSpots: o, stone: s, containerSize: e }), c = a.position.top + s.height;
    r < c && (r = c), i.push(a.position), o = a.availableSpots;
  }
  return { availableSpots: o, positions: i, containerHeight: r };
}, KD = (t) => t.reduce((e, n) => {
  if (!n) return e;
  let r = n.getBoundingClientRect();
  return e.push({ width: r.width, height: r.height }), e;
}, []), JD = ({ boxesRefs: t, wrapperRef: e, children: n, windowWidth: r, wrapperWidth: i }) => {
  let [{ positions: o, containerHeight: s, stones: a, availableSpots: c }, d] = F({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return V(() => {
    var f, u;
    let h = KD(t.current), m = (u = (f = e.current) == null ? void 0 : f.offsetWidth) != null ? u : 0;
    if (m === null) return;
    let p = qD({ stones: h, containerSize: m });
    d(Do(et({}, p), { stones: h }));
  }, [n, t, e, r, i]), { positions: o, containerHeight: s, stones: a, availableSpots: c };
}, YD = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), QD = ({ transition: t, transitionDuration: e }) => t ? { transition: YD(e)[t] } : null, XD = (t) => t ? Do(et({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, ZD = ({ style: t, position: e, transition: n, transitionDuration: r }) => et(et(Do(et({}, t), { position: "absolute" }), XD(e)), QD({ transition: n, transitionDuration: r }));
function e_(t, e, n) {
  let r;
  return function(...i) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, i);
    }, e);
  };
}
var t_ = () => {
  let [t, e] = F(), n = W(e_(e, 300));
  return V(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, n_ = (t) => {
  let [e, n] = F(null);
  return V(() => {
    let r = new ResizeObserver((i) => {
      for (let o of i) n(o.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), e;
}, r_ = (t) => {
  var e = t, { children: n, style: r, transition: i = !1, transitionDuration: o = 500, transitionStep: s = 50 } = e, a = _D(e, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let c = W([]), d = W(null), f = t_(), u = n_(d), { positions: h, containerHeight: m } = JD({ boxesRefs: c, wrapperRef: d, children: n, windowWidth: f, wrapperWidth: u }), p = et({ minHeight: m ?? 0, position: "relative" }, r);
  return l("div", Do(et({ ref: d, style: p }, a), { children: Iu.map(n, (b, y) => {
    if (typeof b != "object" || !b || !("type" in b)) return b;
    let v = { style: ZD({ style: b.props.style, position: h[y], transition: i, transitionDuration: o }), ref: (w) => c.current[y] = w };
    return Sl(b, et(et({}, b.props), v));
  }) }));
};
const i_ = {
  sm: 340,
  md: 480,
  lg: 640
}, Fd = q(function({ children: e, widgetWidth: n = "sm" }, r) {
  const i = i_[n], [o, s] = F(), a = Iu.toArray(e), c = W(null);
  return V(() => {
    const d = () => {
      const f = c.current?.offsetWidth;
      f && s(Math.floor(f / i) || 1);
    };
    return d(), window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d);
    };
  }, [s, i]), l("div", {
    ref: r,
    className: "text-f1-foreground",
    children: l("div", {
      ref: c,
      children: o === 1 ? l("div", {
        className: "flex flex-col gap-4 *:shadow",
        children: e
      }) : o && o > 1 && l("div", {
        className: "relative -mr-4",
        children: l(r_, {
          children: a.map((d, f) => l("div", {
            style: {
              width: `${Math.floor(1 / o * 1e4) / 100 - 0.05}%`
            },
            className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
            children: d
          }, f))
        }, o)
      })
    })
  });
}), o_ = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], uL = Ne(Fd, () => l(Cu, {
  children: l(Fd, {
    children: o_.map((t, e) => l(On.Skeleton, {
      height: t
    }, e))
  })
})), Md = ({ children: t }) => l("div", {
  className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]",
  children: t
}), fL = Ne(q(function({ children: e }, n) {
  return l(ut, {
    ref: n,
    showBar: !1,
    children: l(Md, {
      children: e
    })
  });
}), () => l(Cu, {
  orientation: "horizontal",
  children: g(Md, {
    children: [l(On.Skeleton, {}), l(On.Skeleton, {}), l(On.Skeleton, {})]
  })
}));
function s_({ title: t, description: e, emoji: n, actions: r }) {
  if ((r?.length ?? 0) > 2)
    throw Error("You can only provide up to two actions for the WidgetEmptyState");
  return l(Lh, {
    title: t,
    description: e,
    ...n ? {
      emoji: n
    } : {
      variant: "warning"
    },
    actions: r
  });
}
const hL = se("WidgetEmptyState", s_), Sp = q(({ title: t, children: e }, n) => (qb(t, {
  disallowEmpty: !0
}, {
  componentName: "WidgetSection"
}), g("div", {
  ref: n,
  className: "flex flex-col gap-2",
  children: [l("p", {
    className: "text-base font-medium text-f1-foreground-secondary",
    children: t
  }), e]
})));
Sp.displayName = "WidgetSection";
const mL = se("WidgetSection", Sp), pL = gt(
  {
    name: "ScrollArea",
    type: "layout"
  },
  ut
);
export {
  k_ as ActivityItemList,
  KC as ActivityItemListSkeleton,
  Uk as AiPromotionChat,
  Gk as AiPromotionChatProvider,
  E_ as ApplicationFrame,
  K_ as AreaChartWidget,
  q_ as AutoGrid,
  cb as Badge,
  J_ as BarChartWidget,
  qC as BaseActivityItemList,
  EL as BaseBanner,
  ZC as BaseCelebration,
  cN as BaseCommunityPost,
  vL as BaseTabs,
  yL as BreadcrumbSelect,
  yy as Breadcrumbs,
  Ps as CalendarEvent,
  tL as CalendarEventList,
  DL as CardSelectable,
  _L as CardSelectableContainer,
  s0 as Carousel,
  nL as CategoryBarSection,
  C_ as Celebration,
  eN as CelebrationSkeleton,
  eL as ChartWidgetEmptyState,
  rL as ClockInControls,
  p_ as CoCreationForm,
  S_ as CommunityPost,
  dN as CommunityPostSkeleton,
  VN as CompanySelector,
  Lr as Counter,
  uL as Dashboard,
  D_ as DaytimePage,
  LN as DetailsItem,
  A_ as DetailsItemsList,
  B_ as Dialog,
  Me as Dropdown,
  b_ as EntitySelect,
  LL as F0ActionBar,
  Vf as F0AiBanner,
  hu as F0AvatarModule,
  h_ as F0Callout,
  OL as F0TableOfContent,
  g_ as F0VersionHistory,
  xL as F1SearchBox,
  RL as FILE_TYPES,
  FL as FileItem,
  v_ as Form,
  y_ as FormActions,
  x_ as FormField,
  N_ as HighlightBanner,
  oL as IndicatorsList,
  ou as Input,
  ML as Item,
  PL as ItemSectionHeader,
  Y_ as LineChartWidget,
  F_ as Menu,
  El as MobileDropdown,
  V_ as NotesTextEditor,
  W_ as NotesTextEditorSkeleton,
  A0 as NumberInput,
  __ as OmniButton,
  z_ as OneApprovalHistory,
  wL as OneCalendar,
  kL as OneCalendarInternal,
  $_ as OneDataCollection,
  gS as OneDateNavigator,
  Lh as OneEmptyState,
  TS as OnePagination,
  T_ as OnePersonListItem,
  L_ as Page,
  u_ as PageHeader,
  Q_ as PieChartWidget,
  HE as PrivateBox,
  m_ as RadarChart,
  I_ as ResourceHeader,
  lk as RichTextDisplay,
  zL as RichTextEditor,
  pL as ScrollArea,
  M_ as SearchBar,
  $L as SectionHeader,
  dr as Select,
  mb as Shortcut,
  P_ as Sidebar,
  O_ as SidebarFooter,
  R_ as SidebarHeader,
  sn as Spinner,
  G_ as Split,
  U_ as Stack,
  Z_ as SummariesWidget,
  ru as Switch,
  CL as Tabs,
  NL as TabsSkeleton,
  cL as TasksList,
  D0 as Textarea,
  hh as ToggleGroup,
  mh as ToggleGroupItem,
  dt as Tooltip,
  dL as TwoColumnsList,
  X_ as VerticalBarChartWidget,
  bb as WeekStartDay,
  xN as Weekdays,
  On as Widget,
  sL as WidgetAvatarsListItem,
  hL as WidgetEmptyState,
  iL as WidgetHighlightButton,
  lL as WidgetInboxList,
  Od as WidgetInboxListItem,
  mL as WidgetSection,
  aL as WidgetSimpleList,
  sl as WidgetSimpleListItem,
  fL as WidgetStrip,
  Yk as _RadarChart,
  yb as getGranularityDefinition,
  vb as getGranularityDefinitions,
  SL as getGranularitySimpleDefinition,
  xu as granularityDefinitions,
  IL as modules,
  jL as predefinedPresets,
  AL as rangeSeparator,
  BL as selectSizes,
  ao as useAiPromotionChat,
  po as useDataCollectionData,
  j_ as useDataCollectionSource,
  z0 as useForm,
  w_ as useFormSchema,
  Wl as useInfiniteScrollPagination,
  Gn as useSidebar
};
