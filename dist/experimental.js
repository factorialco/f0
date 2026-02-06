import { a5 as zd, bC as Fp, bD as Mp, bE as Pp, bF as Os, bG as zp, bH as qi, D as $p, bI as jp, ab as G, V as $d, J as Bp, bJ as Hp, ao as yi, bK as jd, bL as Vp, bM as Wp, ak as Up, bN as va, bO as Vr, bP as Gp, a6 as C, a7 as St, u as X, bQ as qp, bR as Kp, bS as Jp, bT as Yp, bU as Qp, av as we, bV as Xp, bW as ll, bX as Bd, aj as Ae, bY as Zp, bZ as Hd, ah as q, b_ as Vd, b$ as Wd, ac as nt, c0 as Ud, c1 as co, c2 as Gd, a8 as j, c3 as Ar, ag as M, c4 as mt, c5 as eg, c6 as tg, c7 as or, aO as qd, c8 as Kd, a_ as Zt, c9 as Jd, ca as al, cb as dt, aP as cl, aQ as Vn, v as Yd, cc as Qd, cd as ng, ce as xa, cf as On, cg as dl, ch as Tr, ci as wi, cj as rg, ck as Xd, cl as ig, cm as ul, cn as lr, co as Ke, cp as sg, cq as og, cr as Vt, cs as Rs, ct as lg, cu as ir, cv as Cn, cw as ag, cx as Zd, cy as cg, cz as dg, cA as ug, cB as fg, ad as Ve, af as Ne, cC as sn, aN as hn, bz as Er, cD as eu, cE as fl, cF as hg, cG as mg, cH as pg, cI as gg, cJ as bg, cK as vg, cL as xg, cM as yg, cN as wg, cO as hl, cP as kg, cQ as tu, cR as Cg, cS as Ng, cT as Sg, cU as Ig, cV as Ag, cW as Tg, cX as Eg, bb as Ct, cY as nu, cZ as Dg, am as oe, a9 as ar, c_ as ru, c$ as iu, aW as ml, t as _g, d0 as Lg, d1 as Og, al as cr, d2 as Rg, d3 as Fs, d4 as Fg, d5 as pl, d6 as Wt, aI as su, d7 as ya, d8 as wa, d9 as Mg, da as ka, db as ou, dc as gl, aJ as lu, at as bl, au as vl, aw as xl, aG as ki, ai as Dr, dd as Pg, de as zg, df as au, dg as $g, ax as Nt, dh as jg, di as cu, dj as du, dk as Bg, dl as _r, dm as yl, dn as Ki, bd as on, dp as uo, aH as dr, dq as Hg, dr as Vg, ds as Wg, dt as Ug, du as Gg, dv as qg, dw as uu, dx as Kg, dy as fu, dz as Jg, dA as Yg, dB as Qg, dC as Ca, dD as hu, dE as fo, aB as ho, dF as mu, dG as Xg, dH as Zg, by as Ji, aU as pu, bB as eb, bA as tb, dI as gu, aV as ln, aD as In, dJ as Na, dK as Ci, dL as nb, dM as mo, b6 as Yi, dN as Qi, dO as rb, dP as ib, bc as sb, b7 as bu, a as ob, d as lb, dQ as wl, F as ab, dR as vu, dS as xu, dT as cb, dU as db, dV as ub, dW as fb, dX as hb, dY as yu, dZ as mb, b8 as wu, d_ as ku, d$ as pb, e0 as gb, e1 as bb, e2 as vb, e3 as xb, e4 as yb, e5 as wb, e6 as kb, bm as Cb, bn as Nb, bu as Xi, bs as kl, e7 as Cl, bt as Cu, aC as Sb, bo as Ni, e8 as Ib, e9 as Ab, ea as po, eb as Tb, ec as Sa, ed as Eb, ee as Db, ef as _b, eg as Lb, eh as Ob, ei as Rb, ej as Fb, aa as Nu, bj as Mb, br as Pb, aX as zb, aY as $b, aZ as jb, an as pt, ek as Bb, el as Hb, em as Vb, en as Ia, eo as Aa, ep as Ta, eq as Wb, er as Ub, es as Gb, et as Su, eu as qb } from "./F0AiChat-BtrP9inl.js";
import { ex as kL, ew as CL, ev as NL, eC as SL, eD as IL, ez as AL, ey as TL, eB as EL, ba as DL, eA as _L } from "./F0AiChat-BtrP9inl.js";
import { jsx as l, jsxs as g, Fragment as ee } from "react/jsx-runtime";
import * as Fe from "react";
import Q, { createContext as zt, forwardRef as J, useRef as W, useEffect as V, useContext as $t, PureComponent as Kb, useTransition as Jb, useState as F, useLayoutEffect as Wn, useId as Nl, useCallback as ne, useMemo as z, useImperativeHandle as Iu, memo as Zi, Fragment as Rn, isValidElement as Au, cloneElement as Sl, createElement as Ea, Children as Tu } from "react";
import { f as An, aR as ur, j as Wr, aS as Yb, b as Ms, aT as Qb, A as Xb, d as Ur, i as Zb, m as e0, G as t0, g as Da, aU as n0, l as _a, aV as r0, p as i0, aW as Eu, aX as Du, aY as s0, aZ as go, C as o0, aK as l0, ak as Fn, D as Me, a_ as gt, a$ as It, b0 as Ue, b1 as a0, b2 as oi, b3 as ot, b4 as _u, b5 as Qe, b6 as Il, b7 as ut, b8 as La, b9 as c0, ba as Lu, bb as Be, bc as Ze, bd as fr, be as Si, bf as Ou, bg as d0, bh as mn, bi as u0, bj as f0, bk as h0, bl as es, bm as ts, bn as Al, bo as m0, bp as Ru, bq as Fu, br as Mu, bs as p0, bt as Pu, bu as zu, bv as $u, bw as ju, bx as Bu, by as Hu, bz as bo, bA as g0, bB as b0, bC as v0, bD as x0, t as y0, x as w0, y as k0, F as C0, M as Oa, N as Ra, O as N0, P as S0, a3 as I0, a4 as A0, bE as T0, bF as E0, a6 as D0, ah as _0, a8 as L0, a9 as O0, bG as R0, aa as F0, ab as M0, ac as P0, af as z0, ag as $0, bH as Vu, bI as j0, bJ as B0, bK as H0, bL as Wu, av as vo, bM as V0, bN as W0, aF as Tl, aw as El, bO as Dl, au as Uu, a2 as Lr, aq as U0, bP as G0, bQ as q0, bR as K0, am as ns, bS as rs, bT as is, an as ss, az as _l, bU as J0, aO as Y0, bV as xo, bW as Q0, bX as Ii, bY as X0, aP as Z0, bZ as ev, aN as Gu, aM as tv, aL as nv, b_ as rv, b$ as iv, c0 as sv, c1 as ov, c2 as lv, c3 as av, c4 as cv, c5 as dv, c6 as uv, c7 as fv, c8 as hv, c9 as mv, ca as pv, cb as gv, cc as bv, aQ as qu, cd as Ku, aD as Ju, ce as vv, cf as xv, cg as yv, ap as wv, R as kv, T as Cv, V as Nv, W as Sv, Z as Iv, U as Av, ch as Fa, ci as Tv, cj as Ev, n as Dv } from "./DataCollectionStorageProvider-Bn2VNYio.js";
import { ar as OL, ck as RL, ad as FL, ai as ML, aj as PL, co as zL, cn as $L, cl as jL, cm as BL, a5 as HL, ae as VL, aA as WL, aB as UL } from "./DataCollectionStorageProvider-Bn2VNYio.js";
import './experimental.css';function Yu(t, e) {
  const n = zd(e()), r = () => n.set(e());
  return r(), Fp(() => {
    const i = () => Mp.preRender(r, !1, !0), s = t.map((o) => o.on("change", i));
    return () => {
      s.forEach((o) => o()), Pp(r);
    };
  }), n;
}
function _v(t) {
  Os.current = [], t();
  const e = Yu(Os.current, t);
  return Os.current = void 0, e;
}
function Lv(...t) {
  const e = !Array.isArray(t[0]), n = e ? 0 : -1, r = t[0 + n], i = t[1 + n], s = t[2 + n], o = t[3 + n], a = zp(i, s, o);
  return e ? a(r) : a;
}
function Ov(t, e, n, r) {
  if (typeof t == "function")
    return _v(t);
  const i = typeof e == "function" ? e : Lv(e, n, r);
  return Array.isArray(t) ? Ma(t, i) : Ma([t], ([s]) => i(s));
}
function Ma(t, e) {
  const n = qi(() => []);
  return Yu(t, () => {
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
function os() {
  return qi(Fv);
}
const Qu = zt(null);
function Mv(t, e, n, r) {
  if (!r)
    return t;
  const i = t.findIndex((f) => f.value === e);
  if (i === -1)
    return t;
  const s = r > 0 ? 1 : -1, o = t[i + s];
  if (!o)
    return t;
  const a = t[i], c = o.layout, d = $p(c.min, c.max, 0.5);
  return s === 1 && a.layout.max + n > d || s === -1 && a.layout.min + n < d ? jp(t, i, i + s) : t;
}
function Pv({ children: t, as: e = "ul", axis: n = "y", onReorder: r, values: i, ...s }, o) {
  const a = qi(() => G[e]), c = [], d = W(!1);
  $d(!!i, "Reorder.Group must be provided a values prop");
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
  }), l(a, { ...s, ref: o, ignoreStrict: !0, children: l(Qu.Provider, { value: f, children: t }) });
}
const Mn = /* @__PURE__ */ J(Pv);
function zv(t) {
  return t.value;
}
function $v(t, e) {
  return t.layout.min - e.layout.min;
}
function Pa(t, e = 0) {
  return Bp(t) ? t : zd(e);
}
function jv({ children: t, style: e = {}, value: n, as: r = "li", onDrag: i, layout: s = !0, ...o }, a) {
  const c = qi(() => G[r]), d = $t(Qu), f = {
    x: Pa(e.x),
    y: Pa(e.y)
  }, u = Ov([f.x, f.y], ([b, v]) => b || v ? 1 : "unset");
  $d(!!d, "Reorder.Item must be a child of Reorder.Group");
  const { axis: h, registerItem: m, updateOrder: p } = d;
  return l(c, { drag: h, ...o, dragSnapToOrigin: !0, style: { ...e, x: f.x, y: f.y, zIndex: u }, layout: s, onDrag: (b, v) => {
    const { velocity: x } = v;
    x[h] && p(n, f[h].get(), x[h]), i && i(b, v);
  }, onLayoutMeasure: (b) => m(n, b), ref: a, ignoreStrict: !0, children: t });
}
const Un = /* @__PURE__ */ J(jv);
const Bv = Hp("Search", [
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
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
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
function za(t, e) {
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
    e % 2 ? za(Object(n), !0).forEach(function(r) {
      Uv(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : za(Object(n)).forEach(function(r) {
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
  var s = "";
  return i.forEach(function(o, a) {
    var c = ur(n, r, e, o);
    a ? s += "L ".concat(c.x, ",").concat(c.y) : s += "M ".concat(c.x, ",").concat(c.y);
  }), s += "Z", s;
}, Jv = function(e) {
  var n = e.cx, r = e.cy, i = e.innerRadius, s = e.outerRadius, o = e.polarAngles, a = e.radialLines;
  if (!o || !o.length || !a)
    return null;
  var c = mr({
    stroke: "#ccc"
  }, An(e, !1));
  return /* @__PURE__ */ Q.createElement("g", {
    className: "recharts-polar-grid-angle"
  }, o.map(function(d) {
    var f = ur(n, r, i, d), u = ur(n, r, s, d);
    return /* @__PURE__ */ Q.createElement("line", Mt({}, c, {
      key: "line-".concat(d),
      x1: f.x,
      y1: f.y,
      x2: u.x,
      y2: u.y
    }));
  }));
}, Yv = function(e) {
  var n = e.cx, r = e.cy, i = e.radius, s = e.index, o = mr(mr({
    stroke: "#ccc"
  }, An(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ Q.createElement("circle", Mt({}, o, {
    className: yi("recharts-polar-grid-concentric-circle", e.className),
    key: "circle-".concat(s),
    cx: n,
    cy: r,
    r: i
  }));
}, Qv = function(e) {
  var n = e.radius, r = e.index, i = mr(mr({
    stroke: "#ccc"
  }, An(e, !1)), {}, {
    fill: "none"
  });
  return /* @__PURE__ */ Q.createElement("path", Mt({}, i, {
    className: yi("recharts-polar-grid-concentric-polygon", e.className),
    key: "path-".concat(r),
    d: Kv(n, e.cx, e.cy, e.polarAngles)
  }));
}, Xv = function(e) {
  var n = e.polarRadius, r = e.gridType;
  return !n || !n.length ? null : /* @__PURE__ */ Q.createElement("g", {
    className: "recharts-polar-grid-concentric"
  }, n.map(function(i, s) {
    var o = s;
    return r === "circle" ? /* @__PURE__ */ Q.createElement(Yv, Mt({
      key: o
    }, e, {
      radius: i,
      index: s
    })) : /* @__PURE__ */ Q.createElement(Qv, Mt({
      key: o
    }, e, {
      radius: i,
      index: s
    }));
  }));
}, Xu = function(e) {
  var n = e.cx, r = n === void 0 ? 0 : n, i = e.cy, s = i === void 0 ? 0 : i, o = e.innerRadius, a = o === void 0 ? 0 : o, c = e.outerRadius, d = c === void 0 ? 0 : c, f = e.gridType, u = f === void 0 ? "polygon" : f, h = e.radialLines, m = h === void 0 ? !0 : h, p = Vv(e, Hv);
  return d <= 0 ? null : /* @__PURE__ */ Q.createElement("g", {
    className: "recharts-polar-grid"
  }, /* @__PURE__ */ Q.createElement(Jv, Mt({
    cx: r,
    cy: s,
    innerRadius: a,
    outerRadius: d,
    gridType: u,
    radialLines: m
  }, p)), /* @__PURE__ */ Q.createElement(Xv, Mt({
    cx: r,
    cy: s,
    innerRadius: a,
    outerRadius: d,
    gridType: u,
    radialLines: m
  }, p)));
};
Xu.displayName = "PolarGrid";
var Ps, $a;
function Zv() {
  if ($a) return Ps;
  $a = 1;
  function t(e) {
    return e && e.length ? e[0] : void 0;
  }
  return Ps = t, Ps;
}
var zs, ja;
function ex() {
  return ja || (ja = 1, zs = Zv()), zs;
}
var tx = ex();
const nx = /* @__PURE__ */ jd(tx);
var rx = ["key"];
function Pn(t) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pn(t);
}
function ix(t, e) {
  if (t == null) return {};
  var n = sx(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (i = 0; i < s.length; i++)
      r = s[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function sx(t, e) {
  if (t == null) return {};
  var n = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      n[r] = t[r];
    }
  return n;
}
function Ai() {
  return Ai = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ai.apply(this, arguments);
}
function Ba(t, e) {
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
    e % 2 ? Ba(Object(n), !0).forEach(function(r) {
      Ot(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ba(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ox(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ha(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ef(r.key), r);
  }
}
function lx(t, e, n) {
  return e && Ha(t.prototype, e), n && Ha(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function ax(t, e, n) {
  return e = Ti(e), cx(t, Zu() ? Reflect.construct(e, n || [], Ti(t).constructor) : e.apply(t, n));
}
function cx(t, e) {
  if (e && (Pn(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dx(t);
}
function dx(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Zu() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zu = function() {
    return !!t;
  })();
}
function Ti(t) {
  return Ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ti(t);
}
function ux(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && yo(t, e);
}
function yo(t, e) {
  return yo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, yo(t, e);
}
function Ot(t, e, n) {
  return e = ef(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function ef(t) {
  var e = fx(t, "string");
  return Pn(e) == "symbol" ? e : e + "";
}
function fx(t, e) {
  if (Pn(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Pn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var Or = /* @__PURE__ */ (function(t) {
  function e() {
    var n;
    ox(this, e);
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    return n = ax(this, e, [].concat(i)), Ot(n, "state", {
      isAnimationFinished: !1
    }), Ot(n, "handleAnimationEnd", function() {
      var o = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Wr(o) && o();
    }), Ot(n, "handleAnimationStart", function() {
      var o = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Wr(o) && o();
    }), Ot(n, "handleMouseEnter", function(o) {
      var a = n.props.onMouseEnter;
      a && a(n.props, o);
    }), Ot(n, "handleMouseLeave", function(o) {
      var a = n.props.onMouseLeave;
      a && a(n.props, o);
    }), n;
  }
  return ux(e, t), lx(e, [{
    key: "renderDots",
    value: function(r) {
      var i = this.props, s = i.dot, o = i.dataKey, a = An(this.props, !1), c = An(s, !0), d = r.map(function(f, u) {
        var h = ze(ze(ze({
          key: "dot-".concat(u),
          r: 3
        }, a), c), {}, {
          dataKey: o,
          cx: f.x,
          cy: f.y,
          index: u,
          payload: f
        });
        return e.renderDotItem(s, h);
      });
      return /* @__PURE__ */ Q.createElement(Ms, {
        className: "recharts-radar-dots"
      }, d);
    }
  }, {
    key: "renderPolygonStatically",
    value: function(r) {
      var i = this.props, s = i.shape, o = i.dot, a = i.isRange, c = i.baseLinePoints, d = i.connectNulls, f;
      return /* @__PURE__ */ Q.isValidElement(s) ? f = /* @__PURE__ */ Q.cloneElement(s, ze(ze({}, this.props), {}, {
        points: r
      })) : Wr(s) ? f = s(ze(ze({}, this.props), {}, {
        points: r
      })) : f = /* @__PURE__ */ Q.createElement(Qb, Ai({}, An(this.props, !0), {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        points: r,
        baseLinePoints: a ? c : null,
        connectNulls: d
      })), /* @__PURE__ */ Q.createElement(Ms, {
        className: "recharts-radar-polygon"
      }, f, o ? this.renderDots(r) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function() {
      var r = this, i = this.props, s = i.points, o = i.isAnimationActive, a = i.animationBegin, c = i.animationDuration, d = i.animationEasing, f = i.animationId, u = this.state.prevPoints;
      return /* @__PURE__ */ Q.createElement(Xb, {
        begin: a,
        duration: c,
        isActive: o,
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
        var m = h.t, p = u && u.length / s.length, b = s.map(function(v, x) {
          var w = u && u[Math.floor(x * p)];
          if (w) {
            var y = Ur(w.x, v.x), E = Ur(w.y, v.y);
            return ze(ze({}, v), {}, {
              x: y(m),
              y: E(m)
            });
          }
          var S = Ur(v.cx, v.x), k = Ur(v.cy, v.y);
          return ze(ze({}, v), {}, {
            x: S(m),
            y: k(m)
          });
        });
        return r.renderPolygonStatically(b);
      });
    }
  }, {
    key: "renderPolygon",
    value: function() {
      var r = this.props, i = r.points, s = r.isAnimationActive, o = r.isRange, a = this.state.prevPoints;
      return s && i && i.length && !o && (!a || !Zb(a, i)) ? this.renderPolygonWithAnimation() : this.renderPolygonStatically(i);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, i = r.hide, s = r.className, o = r.points, a = r.isAnimationActive;
      if (i || !o || !o.length)
        return null;
      var c = this.state.isAnimationFinished, d = yi("recharts-radar", s);
      return /* @__PURE__ */ Q.createElement(Ms, {
        className: d
      }, this.renderPolygon(), (!a || c) && e0.renderCallByParent(this.props, o));
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
      var s;
      if (/* @__PURE__ */ Q.isValidElement(r))
        s = /* @__PURE__ */ Q.cloneElement(r, i);
      else if (Wr(r))
        s = r(i);
      else {
        var o = i.key, a = ix(i, rx);
        s = /* @__PURE__ */ Q.createElement(Yb, Ai({}, a, {
          key: o,
          className: yi("recharts-radar-dot", typeof r != "boolean" ? r.className : "")
        }));
      }
      return s;
    }
  }]);
})(Kb);
Ot(Or, "displayName", "Radar");
Ot(Or, "defaultProps", {
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
Ot(Or, "getComposedData", function(t) {
  var e = t.radiusAxis, n = t.angleAxis, r = t.displayedData, i = t.dataKey, s = t.bandSize, o = n.cx, a = n.cy, c = !1, d = [], f = n.type !== "number" ? s ?? 0 : 0;
  r.forEach(function(h, m) {
    var p = Da(h, n.dataKey, m), b = Da(h, i), v = n.scale(p) + f, x = Array.isArray(b) ? n0(b) : b, w = _a(x) ? void 0 : e.scale(x);
    Array.isArray(b) && b.length >= 2 && (c = !0), d.push(ze(ze({}, ur(o, a, w, v)), {}, {
      name: p,
      value: b,
      cx: o,
      cy: a,
      radius: w,
      angle: v,
      payload: h
    }));
  });
  var u = [];
  return c && d.forEach(function(h) {
    if (Array.isArray(h.value)) {
      var m = nx(h.value), p = _a(m) ? void 0 : e.scale(m);
      u.push(ze(ze({}, h), {}, {
        radius: p
      }, ur(o, a, p, h.angle)));
    } else
      u.push(h);
  }), {
    points: d,
    isRange: c,
    baseLinePoints: u
  };
});
var $s, Va;
function hx() {
  if (Va) return $s;
  Va = 1;
  var t = r0();
  function e(n) {
    var r = n == null ? 0 : n.length;
    return r ? t(n, 1) : [];
  }
  return $s = e, $s;
}
var mx = i0({
  chartName: "RadarChart",
  GraphicalChild: Or,
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Eu
  }, {
    axisType: "radiusAxis",
    AxisComp: Du
  }],
  formatAxisMap: s0,
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
const tf = J(({ className: t, items: e }, n) => l(Vp, {
  ref: n,
  className: t,
  children: g("div", {
    className: "flex items-center",
    children: [l(Wp, {}), l(Up, {
      items: e,
      children: l("button", {
        className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
        children: "..."
      })
    })]
  })
}));
tf.displayName = "CollapsedBreadcrumbItem";
const Ll = 50, px = 120, Ei = 8;
function gx(t, e) {
  const n = e.length;
  if (n <= 2) return n;
  const r = e[0];
  let i = t - r - Ei, s = 0, o = 1;
  for (let a = n - 1; a > 0; a--) {
    const c = e[a];
    if (i < c)
      break;
    i -= c, s = a, o++;
  }
  if (o < n)
    for (i -= Ll; i < 0 && o > 1; )
      i += e[s], s++, o--;
  return Math.max(2, o);
}
function Wa(t = []) {
  switch (t.length) {
    case 0:
      return;
    case 1:
      return t[0] + Ei;
    default:
      return t[0] + Ll + t[t.length - 1] + Ei;
  }
}
function bx(t, e) {
  return px * t + (e ? Ll : 0) + Ei;
}
function vx(t, e, n = []) {
  if (!t) {
    const o = Math.min(e.length, 2);
    return {
      visibleCount: o,
      headItem: e[0] ?? null,
      tailItems: e.slice(e.length - 1),
      collapsedItems: e.slice(1, e.length - 1),
      isOnly: e.length === 1,
      minWidth: bx(
        o,
        e.length > 2
      )
    };
  }
  const r = e.length <= 2, i = n.map((o) => o.clientWidth);
  if (r)
    return {
      visibleCount: e.length,
      headItem: e[0] ?? null,
      tailItems: e.slice(1),
      collapsedItems: [],
      isOnly: e.length === 1,
      minWidth: Wa(i)
    };
  const s = gx(t, i);
  return {
    visibleCount: s,
    headItem: e[0] || null,
    tailItems: e.slice(
      Math.max(1, e.length - (s - 1))
    ),
    collapsedItems: e.slice(
      1,
      e.length - (s - 1)
    ),
    isOnly: e.length === 1,
    minWidth: Wa(i)
  };
}
function xx({ breadcrumbs: t, append: e }) {
  const n = W(null), r = W(null), [, i] = Jb(), [s, o] = F(null), a = (s?.collapsedItems || []).length > 0;
  return Wn(() => {
    const c = n.current, d = r.current;
    if (!c || !d || d.children.length < t.length) return;
    const f = () => {
      const h = n.current?.clientWidth ?? null, m = Array.from(d.children);
      i(() => {
        const p = vx(h, t, m);
        o(p);
      });
    }, u = new ResizeObserver(f);
    return u.observe(c), f(), () => u.disconnect();
  }, [t, e]), !t.length || s && !s.headItem ? l(va, {
    ref: n,
    className: "w-full"
  }) : g(va, {
    ref: n,
    className: "w-full overflow-x-hidden",
    style: {
      minWidth: s?.minWidth
    },
    children: [l("ol", {
      className: "invisible absolute -left-full",
      "aria-hidden": "true",
      ref: r,
      children: t.map((c, d) => l(Vr, {
        item: c,
        isLast: d === t.length - 1,
        isFirst: d === 0,
        children: d === t.length - 1 ? e : void 0
      }, c.id))
    }), s && s.headItem && g(Gp, {
      children: [l(Vr, {
        isOnly: s.isOnly,
        isFirst: !0,
        item: s.headItem,
        isLast: !1
      }, `first-item-${s.headItem.id}`), a && g(ee, {
        children: [l(tf, {
          items: s.collapsedItems
        }, "collapsed-items"), s.tailItems.map((c, d) => l(Vr, {
          item: c,
          isLast: d === s.tailItems.length - 1,
          isFirst: !1,
          children: d === s.tailItems.length - 1 ? e : void 0
        }, c.id))]
      }), !a && l(ee, {
        children: s.tailItems.map((c, d) => l(Vr, {
          item: c,
          isLast: d === s.tailItems.length - 1,
          isFirst: !1,
          children: d === s.tailItems.length - 1 ? e : void 0
        }, c.id))
      })]
    })]
  }, `breadcrumb-${t.at(-1)?.id ?? 0}`);
}
const yx = St({
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
}), Ua = [{
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
}], wx = ({ spin: t = !1, size: e = "md", background: n, hover: r = !1, ...i }, s) => {
  const o = Nl(), { onAnimationStart: a, onAnimationEnd: c, onDragStart: d, onDragEnd: f, onDrag: u, className: h, ...m } = i;
  return l("div", {
    className: C(yx({
      size: e
    }), h),
    style: {
      background: "transparent",
      perspective: t ? "10px" : void 0,
      transformStyle: t ? "preserve-3d" : void 0
    },
    children: g(G.svg, {
      width: "100%",
      height: "100%",
      viewBox: "0 0 32 32",
      xmlns: "http://www.w3.org/2000/svg",
      ref: s,
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
          id: `${o}-circle`,
          children: l("circle", {
            cx: "16",
            cy: "16",
            r: "16"
          })
        }), Ua.map((p) => l("clipPath", {
          id: `${o}-${p.id}`,
          children: l("path", {
            d: p.path
          })
        }, p.id))]
      }), l("g", {
        clipPath: `url(#${o}-circle)`,
        children: Ua.map((p) => l(G.foreignObject, {
          x: "0",
          y: "0",
          width: "32",
          height: "32",
          clipPath: `url(#${o}-${p.id})`,
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
}, nf = J(wx), rf = zt(null), kx = 15, Cx = ({ children: t, enabled: e, onShow: n, ...r }) => {
  const [i, s] = F(e), [o, a] = F(!1), [c, d] = F(!0), [f, u] = F(kx), h = W(null), m = (b) => {
    h.current = b;
  }, p = () => {
    h.current && h.current();
  };
  return V(() => {
    s(e);
  }, [e]), V(() => {
    if (o && n?.(), !o) {
      const b = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      d(!b);
    }
  }, [o, n]), l(rf.Provider, {
    value: {
      ...r,
      enabled: i,
      setEnabled: s,
      open: o,
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
}, kn = () => {
};
function ls() {
  const t = $t(rf);
  return t === null ? {
    enabled: !1,
    setEnabled: kn,
    open: !1,
    setOpen: kn,
    shouldPlayEntranceAnimation: !0,
    setShouldPlayEntranceAnimation: kn,
    setAutoClearMinutes: kn,
    clear: kn,
    setClearFunction: kn,
    autoClearMinutes: null
  } : t;
}
const sf = ({ className: t, disabled: e }) => {
  const { enabled: n, setOpen: r, open: i } = ls(), s = X(), [o, a] = F(!1);
  return n ? l("div", {
    className: "flex items-center",
    children: l(qp, {
      children: g(Kp, {
        delayDuration: 850,
        disableHoverableContent: !0,
        children: [l(Jp, {
          asChild: !0,
          children: l(G.div, {
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
            children: l(Yp, {
              onCheckedChange: (c) => {
                r(c);
              },
              checked: i,
              "aria-label": i ? s.ai.closeChat : s.ai.openChat,
              className: C("group relative h-8 w-12 rounded-full border-none bg-f1-background-inverse-secondary transition-all hover:bg-f1-background-hover", "shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.04)] data-[state=checked]:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_0_4px_rgba(13,22,37,.6)]", "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] data-[state=checked]:after:ring-f1-border-inverse", "before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] before:opacity-0 before:transition-all before:duration-300 before:content-[''] data-[state=checked]:before:opacity-100", e && "cursor-not-allowed opacity-50", we(), t),
              disabled: e,
              onMouseEnter: () => a(!0),
              onMouseLeave: () => a(!1),
              children: l(Qp, {
                className: C("block h-[1.375rem] w-[1.375rem] translate-x-[0.3125rem] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[1.3125rem]"),
                style: {
                  transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,1.5)"
                },
                children: l("div", {
                  children: l(nf, {
                    size: "sm",
                    background: i ? "white" : void 0,
                    hover: o
                  })
                })
              })
            })
          })
        }), !i && l(Xp, {
          side: "left",
          className: "font-medium",
          children: s.ai.welcome
        })]
      })
    })
  }) : null;
}, Ga = "one_sidebar_locked", of = zt(void 0);
function Gn() {
  const t = $t(of);
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
function Nx({ children: t }) {
  const { currentPath: e } = ll(), [n, r] = F(!1), [i, s] = F(!1), o = n ? go.xl : go.md, a = Bd(`(max-width: ${o}px)`, {
    initializeWithValue: !0
  }), [c, d] = F(() => {
    const x = localStorage.getItem(Ga);
    return x !== null ? !!x : !0;
  }), [f, u] = F(!1), [h, m] = F(null), p = ne(({ isInvokedByUser: x } = {
    isInvokedByUser: !0
  }) => {
    s(x ?? !0), a && u(!f), d(!c);
  }, [a, f, c, d, u]), b = ne((x) => {
    a || (x.clientX < 32 && u(!0), x.clientX > 280 && u(!1));
  }, [a, u]), v = z(() => a ? f ? "unlocked" : "hidden" : !c && !f ? "hidden" : !c && f ? "unlocked" : "locked", [a, f, c]);
  return V(() => {
    u(!1);
  }, [e]), V(() => {
    i && localStorage.setItem(Ga, c ? "1" : "");
  }, [c, i]), V(() => () => {
    m(v);
  }, [v]), l(of.Provider, {
    value: {
      isSmallScreen: a,
      isLastToggleInvokedByUser: i,
      sidebarState: v,
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
const qa = G.create(q), Ka = {
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
}, Sx = ({ isMarked: t, onChange: e, label: n }) => {
  const [r, i] = F(!1), s = () => {
    i(!0), e(!t);
  };
  return l(Ae, {
    mode: "wait",
    children: l("button", {
      className: C("flex h-6 w-6 items-center justify-center rounded", we()),
      onClick: s,
      "aria-label": n,
      children: t ? l(qa, {
        size: "sm",
        icon: Zp,
        className: "text-[hsl(var(--promote-50))] outline-none",
        variants: Ka,
        initial: r ? "enterFromUnfavorite" : "initial",
        animate: "animate",
        exit: "exit",
        transition: {
          ease: [0.175, 0.885, 0.27, 2]
        },
        "aria-hidden": "true",
        focusable: !1,
        tabIndex: -1
      }, "favorite") : l(qa, {
        size: "sm",
        whileTap: {
          scale: 0.8
        },
        icon: Hd,
        className: "outline-none",
        variants: Ka,
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
}, Ix = ({ currentModule: t, label: e, getUpdates: n, updatesPageUrl: r, emptyScreen: i, errorScreen: s, onOpenChange: o = () => {
}, onHeaderClick: a = () => {
}, onItemClick: c = () => {
}, hasUnread: d = !1, crossSelling: f }) => {
  const [u, h] = F("idle"), [m, p] = F(null), [b, ...v] = m ?? [], [x, w] = F(!1);
  V(() => {
    p(null), h("idle");
  }, [t]);
  const y = ne(async () => {
    try {
      h("fetching");
      const E = await n();
      h("idle"), p(E);
    } catch {
      h("error");
    }
  }, [n]);
  return g(Vd, {
    open: x,
    onOpenChange: async (E) => {
      w(E), E && m === null && y(), o(E);
    },
    children: [l(Wd, {
      asChild: !0,
      children: l(nt, {
        variant: "outline",
        icon: Ud,
        hideLabel: !0,
        label: e,
        pressed: x,
        append: d && l(Ol, {
          className: "absolute -right-0.5 -top-[1px]"
        })
      })
    }), l(co, {
      children: g(Gd, {
        sideOffset: 8,
        collisionPadding: 20,
        align: "end",
        hideWhenDetached: !0,
        className: "min-h-auto flex max-h-[90vh] min-w-96 max-w-md flex-col",
        style: {
          maxHeight: "min(90vh, 760px)"
        },
        children: [l(Ex, {
          title: e,
          url: r,
          onClick: a
        }), u === "fetching" && l(Lx, {}), g("div", {
          className: "scrollbar-macos flex-1 overflow-y-auto",
          children: [u === "idle" && m !== null && m.length === 0 && l("div", {
            className: "p-2 pt-0",
            children: l(Dx, {
              ...i,
              buttonUrl: r
            })
          }), u === "idle" && m !== null && m.length > 0 && g("div", {
            className: "px-1",
            children: [l(Ax, {
              ...b,
              onClick: c
            }), m.length > 1 && l(ee, {
              children: l("div", {
                className: "pb-1",
                children: v.map((E, S) => l(Tx, {
                  ...E,
                  onClick: c
                }, S))
              })
            })]
          }), u === "error" && l("div", {
            className: "p-2 pt-0",
            children: l(_x, {
              ...s,
              onClick: () => {
                y();
              }
            })
          })]
        }), u === "idle" && f && f.isVisible && l(Ox, {
          isVisible: f.isVisible,
          onClose: f.onClose,
          crossSelling: f,
          onDropdownClose: () => w(!1)
        })]
      })
    })]
  });
}, Ax = ({ title: t, href: e, mediaUrl: n, unread: r, updated: i, onClick: s }) => {
  const o = "flex flex-col items-stretch w-full", a = n?.includes(".mp4");
  return l(eg, {
    onClick: s,
    asChild: !0,
    className: "relative flex cursor-default select-none items-center rounded-md px-1 text-base font-medium outline-none transition-colors after:absolute after:inset-x-1 after:inset-y-0 after:h-full after:rounded after:bg-f1-background-hover after:opacity-0 after:transition-opacity after:duration-75 after:content-[''] hover:cursor-pointer hover:after:opacity-100 focus:after:opacity-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    children: g(mt, {
      href: e,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: C(o, "text-f1-foreground no-underline"),
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
          children: l(tg, {
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
          }), r && l(Ol, {
            className: "mt-1.5"
          })]
        })
      })]
    })
  });
}, Tx = ({ title: t, href: e, updated: n, unread: r = !1, onClick: i }) => {
  const s = C("flex flex-col items-stretch gap-3 w-full");
  return l(or, {
    asChild: !0,
    className: s,
    onClick: i,
    children: l(mt, {
      href: e,
      target: "_blank",
      referrerPolicy: "no-referrer",
      rel: "noopener noreferrer",
      className: C(s, "text-f1-foreground no-underline hover:cursor-pointer"),
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
        }), r && l(Ol, {
          className: "mt-1.5"
        })]
      })
    })
  });
}, Ex = ({ title: t, url: e, onClick: n }) => g("a", {
  href: e,
  className: "flex items-center justify-between gap-4 px-4 pb-2 pt-3 text-f1-foreground no-underline visited:text-f1-foreground hover:text-f1-foreground",
  children: [l("h2", {
    className: "text-base font-medium",
    children: t
  }), l(j, {
    variant: "outline",
    size: "sm",
    icon: Ar,
    label: t,
    hideLabel: !0,
    onClick: n
  })]
}), lf = ({ icon: t, button: e, title: n, description: r, iconWrapperClassName: i }) => l("div", {
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
}), Dx = ({ title: t, buttonText: e, buttonUrl: n, description: r }) => l(lf, {
  title: t,
  description: r,
  icon: l(q, {
    icon: Ud,
    size: "lg",
    className: "block"
  }),
  button: l(mt, {
    href: n,
    children: l(j, {
      label: e
    })
  })
}), _x = ({ title: t, description: e, buttonText: n, onClick: r }) => l(lf, {
  title: t,
  description: e,
  iconWrapperClassName: "text-f1-icon-critical bg-f1-background-critical border-f1-critical",
  icon: l(q, {
    icon: qd,
    size: "lg"
  }),
  button: l(j, {
    variant: "outline",
    label: n,
    onClick: r
  })
}), Lx = () => l("div", {
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
}), Ol = ({ className: t = "" }) => l("div", {
  "aria-hidden": "true",
  className: C("size-2 rounded bg-f1-background-selected-bold", t)
}), Ox = ({ isVisible: t, onClose: e, crossSelling: n, onDropdownClose: r }) => {
  const [i, s] = F(t);
  V(() => {
    s(t);
  }, [t]);
  const o = () => {
    s(!1), e && e();
  }, a = (c) => {
    s(!1), r(), c && c();
  };
  return i && g(ee, {
    children: [l(Kd, {}), g("div", {
      className: "px-1 pb-2",
      children: [g("div", {
        className: "flex flex-row items-center justify-between px-3",
        children: [l("p", {
          className: "text-balance pb-2 pt-2 text-sm font-medium text-f1-foreground-secondary",
          children: n?.sectionTitle
        }), e && l("div", {
          className: "relative z-10 h-6 w-6",
          children: l(j, {
            variant: "ghost",
            icon: Zt,
            size: "sm",
            hideLabel: !0,
            onClick: o,
            label: "Close"
          })
        })]
      }), l(o0, {
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
function Ja({ icon: t, href: e, label: n, disabled: r }) {
  const i = W(null);
  return l(j, {
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
function p_({ module: t, statusTag: e = void 0, breadcrumbs: n = [], actions: r = [], embedded: i = !1, navigation: s, productUpdates: o, favorites: a }) {
  const { sidebarState: c, toggleSidebar: d } = Gn(), f = [{
    id: t.href,
    label: t.name,
    href: t.href,
    module: t.id
  }, ...n], u = e && Object.keys(e).length !== 0, h = n.length > 0, m = !i && r.length > 0, p = !i && !!o?.isVisible, b = f[f.length - 1], v = h ? f[f.length - 2] : null;
  return g("div", {
    className: C("flex items-center justify-between px-5 py-4 xs:px-6", i ? "h-12" : "h-16"),
    children: [g("div", {
      className: "flex flex-grow items-center",
      children: [l(Ae, {
        children: !i && c !== "locked" && l(G.div, {
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
            children: l(j, {
              variant: "ghost",
              hideLabel: !0,
              onClick: () => d(),
              label: "Open main menu",
              icon: Jd
            })
          })
        })
      }), g("div", {
        className: C("flex flex-grow items-center gap-2", i && h && "justify-center"),
        children: [i && h && v && !("loading" in v) && l("div", {
          className: "absolute left-4",
          children: l(mt, {
            href: v.href,
            children: l(j, {
              variant: "ghost",
              hideLabel: !0,
              label: "Back",
              icon: al,
              onClick: (x) => x.preventDefault()
            })
          })
        }), i && h ? l("div", {
          className: "text-lg font-semibold text-f1-foreground",
          children: "loading" in b ? l(M, {
            className: "h-4 w-24"
          }) : b.label
        }) : l(xx, {
          breadcrumbs: f,
          append: a !== void 0 && l(Sx, {
            label: a.label,
            isMarked: a.isMarked,
            onChange: a?.onChange
          })
        }, f[0].id)]
      })]
    }), g("div", {
      className: "flex items-center gap-3",
      children: [!i && u && l("div", {
        children: e.tooltip ? l(dt, {
          label: e.tooltip,
          children: l("div", {
            children: l(Fn, {
              text: e.text,
              variant: e.variant,
              additionalAccessibleText: e.tooltip
            })
          })
        }) : l(Fn, {
          text: e.text,
          variant: e.variant
        })
      }), !i && u && (s || m || p) && l("div", {
        className: "h-4 w-px bg-f1-border-secondary"
      }), s && g("div", {
        className: "flex items-center gap-3",
        children: [s.counter && g("span", {
          className: "text-sm text-f1-foreground-secondary",
          children: [s.counter.current, "/", s.counter.total]
        }), g("div", {
          className: "flex items-center gap-2",
          children: [l(Ja, {
            icon: cl,
            label: s.previous?.title || "Previous",
            href: s.previous?.url || "",
            disabled: !s.previous
          }), l(Ja, {
            icon: Vn,
            label: s.next?.title || "Next",
            href: s.next?.url || "",
            disabled: !s.next
          })]
        })]
      }), s && m && l("div", {
        className: "h-4 w-px bg-f1-border-secondary"
      }), (p || m) && g("div", {
        className: "flex items-center gap-2",
        children: [p && l("div", {
          className: "items-right flex gap-2",
          children: l(Ix, {
            ...o,
            currentModule: t.name
          })
        }), m && l("div", {
          className: "items-right flex gap-2",
          children: r.map((x, w) => l(Rx, {
            action: x
          }, w))
        })]
      }), g("div", {
        children: [l(Yd, {}), l(sf, {})]
      })]
    })]
  });
}
function Rx({ action: t }) {
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
  }) : l(mt, {
    href: t.href,
    title: t.label,
    "aria-label": t.label,
    ref: e,
    children: l(j, {
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
const Di = (t, e) => e.view.domAtPos(t).node.offsetParent !== null, Fx = (t, e, n) => {
  for (let r = t.depth; r > 0; r -= 1) {
    const i = t.node(r), s = e(i), o = Di(t.start(r), n);
    if (s && o)
      return {
        pos: r > 0 ? t.before(r) : 0,
        start: t.start(r),
        depth: r,
        node: i
      };
  }
}, Ya = (t, e) => {
  const { state: n, view: r, extensionManager: i } = t, { schema: s, selection: o } = n, { empty: a, $anchor: c } = o, d = !!i.extensions.find((x) => x.name === "gapCursor");
  if (!a || c.parent.type !== s.nodes.detailsSummary || !d || e === "right" && c.parentOffset !== c.parent.nodeSize - 2)
    return !1;
  const f = Il((x) => x.type === s.nodes.details)(o);
  if (!f)
    return !1;
  const u = oi(f.node, (x) => x.type === s.nodes.detailsContent);
  if (!u.length || Di(f.start + u[0].pos + 1, t))
    return !1;
  const m = n.doc.resolve(f.pos + f.node.nodeSize), p = La.findFrom(m, 1, !1);
  if (!p)
    return !1;
  const { tr: b } = n, v = new La(p);
  return b.setSelection(v), b.scrollIntoView(), r.dispatch(b), !0;
}, Mx = gt.create({
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
      ut(this.options.HTMLAttributes, t),
      0
    ];
  },
  addNodeView() {
    return ({ editor: t, getPos: e, node: n, HTMLAttributes: r }) => {
      const i = document.createElement("div"), s = ut(this.options.HTMLAttributes, r, {
        "data-type": this.name
      });
      Object.entries(s).forEach(([d, f]) => i.setAttribute(d, f));
      const o = document.createElement("button");
      o.type = "button", i.append(o);
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
      return n.attrs.open && setTimeout(() => c()), o.addEventListener("click", () => {
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
        const { schema: r, selection: i } = t, { $from: s, $to: o } = i, a = s.blockRange(o);
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
        const { selection: n, schema: r } = t, i = Il((x) => x.type === this.type)(n);
        if (!i)
          return !1;
        const s = oi(i.node, (x) => x.type === r.nodes.detailsSummary), o = oi(i.node, (x) => x.type === r.nodes.detailsContent);
        if (!s.length || !o.length)
          return !1;
        const a = s[0], c = o[0], d = i.pos, f = t.doc.resolve(d), u = d + i.node.nodeSize, h = { from: d, to: u }, m = c.node.content.toJSON() || [], p = f.parent.type.contentMatch.defaultType, v = [
          p?.create(null, a.node.content).toJSON(),
          ...m
        ];
        return e().insertContentAt(h, v).setTextSelection(d + 1).run();
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Backspace: () => {
        const { schema: t, selection: e } = this.editor.state, { empty: n, $anchor: r } = e;
        return !n || r.parent.type !== t.nodes.detailsSummary ? !1 : r.parentOffset !== 0 ? this.editor.commands.command(({ tr: i }) => {
          const s = r.pos - 1, o = r.pos;
          return i.delete(s, o), !0;
        }) : this.editor.commands.unsetDetails();
      },
      // Creates a new node below it if it is closed.
      // Otherwise inside `DetailsContent`.
      Enter: ({ editor: t }) => {
        const { state: e, view: n } = t, { schema: r, selection: i } = e, { $head: s } = i;
        if (s.parent.type !== r.nodes.detailsSummary)
          return !1;
        const o = Di(s.after() + 1, t), a = o ? e.doc.nodeAt(s.after()) : s.node(-2);
        if (!a)
          return !1;
        const c = o ? 0 : s.indexAfter(-1), d = _u(a.contentMatchAt(c));
        if (!d || !a.canReplaceWith(c, c, d))
          return !1;
        const f = d.createAndFill();
        if (!f)
          return !1;
        const u = o ? s.after() + 1 : s.after(-1), h = e.tr.replaceWith(u, u, f), m = h.doc.resolve(u), p = Qe.near(m, 1);
        return h.setSelection(p), h.scrollIntoView(), n.dispatch(h), !0;
      },
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowRight: ({ editor: t }) => Ya(t, "right"),
      // The default gapcursor implementation can’t handle hidden content, so we need to fix this.
      ArrowDown: ({ editor: t }) => Ya(t, "down")
    };
  },
  addProseMirrorPlugins() {
    return [
      // This plugin prevents text selections within the hidden content in `DetailsContent`.
      // The cursor is moved to the next visible position.
      new It({
        key: new Ue("detailsSelection"),
        appendTransaction: (t, e, n) => {
          const { editor: r, type: i } = this;
          if (!t.some((v) => v.selectionSet) || !e.selection.empty || !n.selection.empty || !a0(n, i.name))
            return;
          const { $from: a } = n.selection;
          if (Di(a.pos, r))
            return;
          const d = Fx(a, (v) => v.type === i, r);
          if (!d)
            return;
          const f = oi(d.node, (v) => v.type === n.schema.nodes.detailsSummary);
          if (!f.length)
            return;
          const u = f[0], m = (e.selection.from < n.selection.from ? "forward" : "backward") === "forward" ? d.start + u.pos : d.pos + u.pos + u.node.nodeSize, p = ot.create(n.doc, m);
          return n.tr.setSelection(p);
        }
      })
    ];
  }
}), af = Mx.configure({
  persist: !0,
  HTMLAttributes: {
    class: "rich-text-details"
  }
}), Px = gt.create({
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
      ut(this.options.HTMLAttributes, t, { "data-type": this.name }),
      0
    ];
  },
  addNodeView() {
    return ({ HTMLAttributes: t }) => {
      const e = document.createElement("div"), n = ut(this.options.HTMLAttributes, t, {
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
        const { state: e, view: n } = t, { selection: r } = e, { $from: i, empty: s } = r, o = Il((_) => _.type === this.type)(r);
        if (!s || !o || !o.node.childCount)
          return !1;
        const a = i.index(o.depth), { childCount: c } = o.node;
        if (!(c === a + 1))
          return !1;
        const f = o.node.type.contentMatch.defaultType, u = f?.createAndFill();
        if (!u)
          return !1;
        const h = e.doc.resolve(o.pos + 1), m = c - 1, p = o.node.child(m), b = h.posAtIndex(m, o.depth);
        if (!p.eq(u))
          return !1;
        const x = i.node(-3);
        if (!x)
          return !1;
        const w = i.indexAfter(-3), y = _u(x.contentMatchAt(w));
        if (!y || !x.canReplaceWith(w, w, y))
          return !1;
        const E = y.createAndFill();
        if (!E)
          return !1;
        const { tr: S } = e, k = i.after(-2);
        S.replaceWith(k, k, E);
        const I = S.doc.resolve(k), T = Qe.near(I, 1);
        S.setSelection(T);
        const D = b, N = b + p.nodeSize;
        return S.delete(D, N), S.scrollIntoView(), n.dispatch(S), !0;
      }
    };
  }
}), cf = Px, zx = gt.create({
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
      ut(this.options.HTMLAttributes, t),
      0
    ];
  }
}), df = zx;
var wo, ko;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  wo = (e) => t.get(e), ko = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  wo = (r) => {
    for (let i = 0; i < t.length; i += 2)
      if (t[i] == r) return t[i + 1];
  }, ko = (r, i) => (n == 10 && (n = 0), t[n++] = r, t[n++] = i);
}
var ye = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, i = e / this.width | 0;
      let s = r + 1, o = i + 1;
      for (let a = 1; s < this.width && this.map[e + a] == n; a++)
        s++;
      for (let a = 1; o < this.height && this.map[e + this.width * a] == n; a++)
        o++;
      return { left: r, top: i, right: s, bottom: o };
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
    const { left: r, right: i, top: s, bottom: o } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : i == this.width) ? null : this.map[s * this.width + (n < 0 ? r - 1 : i)] : (n < 0 ? s == 0 : o == this.height) ? null : this.map[r + this.width * (n < 0 ? s - 1 : o)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: n,
      right: r,
      top: i,
      bottom: s
    } = this.findCell(t), {
      left: o,
      right: a,
      top: c,
      bottom: d
    } = this.findCell(e);
    return {
      left: Math.min(n, o),
      top: Math.min(i, c),
      right: Math.max(r, a),
      bottom: Math.max(s, d)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++)
      for (let i = t.left; i < t.right; i++) {
        const s = r * this.width + i, o = this.map[s];
        n[o] || (n[o] = !0, !(i == t.left && i && this.map[s - 1] == o || r == t.top && r && this.map[s - this.width] == o) && e.push(o));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, n) {
    for (let r = 0, i = 0; ; r++) {
      const s = i + n.child(r).nodeSize;
      if (r == t) {
        let o = e + t * this.width;
        const a = (t + 1) * this.width;
        for (; o < a && this.map[o] < i; ) o++;
        return o == a ? s - 1 : this.map[o];
      }
      i = s;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return wo(t) || ko(t, $x(t));
  }
};
function $x(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = jx(t), n = t.childCount, r = [];
  let i = 0, s = null;
  const o = [];
  for (let d = 0, f = e * n; d < f; d++) r[d] = 0;
  for (let d = 0, f = 0; d < n; d++) {
    const u = t.child(d);
    f++;
    for (let p = 0; ; p++) {
      for (; i < r.length && r[i] != 0; ) i++;
      if (p == u.childCount) break;
      const b = u.child(p), { colspan: v, rowspan: x, colwidth: w } = b.attrs;
      for (let y = 0; y < x; y++) {
        if (y + d >= n) {
          (s || (s = [])).push({
            type: "overlong_rowspan",
            pos: f,
            n: x - y
          });
          break;
        }
        const E = i + y * e;
        for (let S = 0; S < v; S++) {
          r[E + S] == 0 ? r[E + S] = f : (s || (s = [])).push({
            type: "collision",
            row: d,
            pos: f,
            n: v - S
          });
          const k = w && w[S];
          if (k) {
            const I = (E + S) % e * 2, T = o[I];
            T == null || T != k && o[I + 1] == 1 ? (o[I] = k, o[I + 1] = 1) : T == k && o[I + 1]++;
          }
        }
      }
      i += v, f += b.nodeSize;
    }
    const h = (d + 1) * e;
    let m = 0;
    for (; i < h; ) r[i++] == 0 && m++;
    m && (s || (s = [])).push({ type: "missing", row: d, n: m }), f++;
  }
  (e === 0 || n === 0) && (s || (s = [])).push({ type: "zero_sized" });
  const a = new ye(e, n, r, s);
  let c = !1;
  for (let d = 0; !c && d < o.length; d += 2)
    o[d] != null && o[d + 1] < n && (c = !0);
  return c && Bx(a, o, t), a;
}
function jx(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const i = t.child(r);
    let s = 0;
    if (n)
      for (let o = 0; o < r; o++) {
        const a = t.child(o);
        for (let c = 0; c < a.childCount; c++) {
          const d = a.child(c);
          o + d.attrs.rowspan > r && (s += d.attrs.colspan);
        }
      }
    for (let o = 0; o < i.childCount; o++) {
      const a = i.child(o);
      s += a.attrs.colspan, a.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = s : e != s && (e = Math.max(e, s));
  }
  return e;
}
function Bx(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let i = 0; i < t.map.length; i++) {
    const s = t.map[i];
    if (r[s]) continue;
    r[s] = !0;
    const o = n.nodeAt(s);
    if (!o)
      throw new RangeError(`No cell with offset ${s} found`);
    let a = null;
    const c = o.attrs;
    for (let d = 0; d < c.colspan; d++) {
      const f = (i + d) % t.width, u = e[f * 2];
      u != null && (!c.colwidth || c.colwidth[d] != u) && ((a || (a = Hx(c)))[d] = u);
    }
    a && t.problems.unshift({
      type: "colwidth mismatch",
      pos: s,
      colwidth: a
    });
  }
}
function Hx(t) {
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
var Ut = new Ue("selectingCells");
function qn(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function Vx(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function bt(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function as(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = qn(e.$head) || Wx(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function Wx(t) {
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
function Co(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function Ux(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function Rl(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function uf(t, e, n) {
  const r = t.node(-1), i = ye.get(r), s = t.start(-1), o = i.nextCell(t.pos - s, e, n);
  return o == null ? null : t.node(0).resolve(s + o);
}
function an(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((i) => i > 0) || (r.colwidth = null)), r;
}
function ff(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let i = 0; i < n; i++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function Gx(t, e, n) {
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
    const r = e.node(-1), i = ye.get(r), s = e.start(-1), o = i.rectBetween(
      e.pos - s,
      n.pos - s
    ), a = e.node(0), c = i.cellsInRect(o).filter((f) => f != n.pos - s);
    c.unshift(n.pos - s);
    const d = c.map((f) => {
      const u = r.nodeAt(f);
      if (!u)
        throw RangeError(`No cell with offset ${f} found`);
      const h = s + f + 1;
      return new Lu(
        a.resolve(h),
        a.resolve(h + u.content.size)
      );
    });
    super(d[0].$from, d[0].$to, d), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), i = e.resolve(n.map(this.$headCell.pos));
    if (Co(r) && Co(i) && Rl(r, i)) {
      const s = this.$anchorCell.node(-1) != r.node(-1);
      return s && this.isRowSelection() ? _t.rowSelection(r, i) : s && this.isColSelection() ? _t.colSelection(r, i) : new _t(r, i);
    }
    return ot.between(r, i);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = ye.get(e), r = this.$anchorCell.start(-1), i = n.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), s = {}, o = [];
    for (let c = i.top; c < i.bottom; c++) {
      const d = [];
      for (let f = c * n.width + i.left, u = i.left; u < i.right; u++, f++) {
        const h = n.map[f];
        if (s[h]) continue;
        s[h] = !0;
        const m = n.findCell(h);
        let p = e.nodeAt(h);
        if (!p)
          throw RangeError(`No cell with offset ${h} found`);
        const b = i.left - m.left, v = m.right - i.right;
        if (b > 0 || v > 0) {
          let x = p.attrs;
          if (b > 0 && (x = an(x, 0, b)), v > 0 && (x = an(
            x,
            x.colspan - v,
            v
          )), m.left < i.left) {
            if (p = p.type.createAndFill(x), !p)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(x)}`
              );
          } else
            p = p.type.create(x, p.content);
        }
        if (m.top < i.top || m.bottom > i.bottom) {
          const x = {
            ...p.attrs,
            rowspan: Math.min(m.bottom, i.bottom) - Math.max(m.top, i.top)
          };
          m.top < i.top ? p = p.type.createAndFill(x) : p = p.type.create(x, p.content);
        }
        d.push(p);
      }
      o.push(e.child(c).copy(Be.from(d)));
    }
    const a = this.isColSelection() && this.isRowSelection() ? e : o;
    return new Ze(Be.from(a), 1, 1);
  }
  replace(e, n = Ze.empty) {
    const r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      const { $from: a, $to: c } = i[o], d = e.mapping.slice(r);
      e.replace(
        d.map(a.pos),
        d.map(c.pos),
        o ? Ze.empty : n
      );
    }
    const s = Qe.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    s && e.setSelection(s);
  }
  replaceWith(e, n) {
    this.replace(e, new Ze(Be.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = ye.get(n), i = this.$anchorCell.start(-1), s = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - i,
        this.$headCell.pos - i
      )
    );
    for (let o = 0; o < s.length; o++)
      e(n.nodeAt(s[o]), i + s[o]);
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
    const r = e.node(-1), i = ye.get(r), s = e.start(-1), o = i.findCell(e.pos - s), a = i.findCell(n.pos - s), c = e.node(0);
    return o.top <= a.top ? (o.top > 0 && (e = c.resolve(s + i.map[o.left])), a.bottom < i.height && (n = c.resolve(
      s + i.map[i.width * (i.height - 1) + a.right - 1]
    ))) : (a.top > 0 && (n = c.resolve(s + i.map[a.left])), o.bottom < i.height && (e = c.resolve(
      s + i.map[i.width * (i.height - 1) + o.right - 1]
    ))), new _t(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = ye.get(e), r = this.$anchorCell.start(-1), i = n.colCount(this.$anchorCell.pos - r), s = n.colCount(this.$headCell.pos - r);
    if (Math.min(i, s) > 0) return !1;
    const o = i + this.$anchorCell.nodeAfter.attrs.colspan, a = s + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, a) == n.width;
  }
  eq(e) {
    return e instanceof _t && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, n = e) {
    const r = e.node(-1), i = ye.get(r), s = e.start(-1), o = i.findCell(e.pos - s), a = i.findCell(n.pos - s), c = e.node(0);
    return o.left <= a.left ? (o.left > 0 && (e = c.resolve(
      s + i.map[o.top * i.width]
    )), a.right < i.width && (n = c.resolve(
      s + i.map[i.width * (a.top + 1) - 1]
    ))) : (a.left > 0 && (n = c.resolve(s + i.map[a.top * i.width])), o.right < i.width && (e = c.resolve(
      s + i.map[i.width * (o.top + 1) - 1]
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
    return new qx(this.$anchorCell.pos, this.$headCell.pos);
  }
};
pe.prototype.visible = !1;
Qe.jsonID("cell", pe);
var qx = class hf {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new hf(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && Rl(n, r) ? new pe(n, r) : Qe.near(r, 1);
  }
};
function Kx(t) {
  if (!(t.selection instanceof pe)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      Si.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), fr.create(t.doc, e);
}
function Jx({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, i = t.depth;
  for (; i >= 0 && !(t.after(i + 1) < t.end(i)); i--, n++)
    ;
  for (let s = e.depth; s >= 0 && !(e.before(s + 1) > e.start(s)); s--, r--)
    ;
  return n == r && /row|table/.test(t.node(i).type.spec.tableRole);
}
function Yx({ $from: t, $to: e }) {
  let n, r;
  for (let i = t.depth; i > 0; i--) {
    const s = t.node(i);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      n = s;
      break;
    }
  }
  for (let i = e.depth; i > 0; i--) {
    const s = e.node(i);
    if (s.type.spec.tableRole === "cell" || s.type.spec.tableRole === "header_cell") {
      r = s;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function Qx(t, e, n) {
  const r = (e || t).selection, i = (e || t).doc;
  let s, o;
  if (r instanceof Ou && (o = r.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell")
      s = pe.create(i, r.from);
    else if (o == "row") {
      const a = i.resolve(r.from + 1);
      s = pe.rowSelection(a, a);
    } else if (!n) {
      const a = ye.get(r.node), c = r.from + 1, d = c + a.map[a.width * a.height - 1];
      s = pe.create(i, c + 1, d);
    }
  } else r instanceof ot && Jx(r) ? s = ot.create(i, r.from) : r instanceof ot && Yx(r) && (s = ot.create(i, r.$from.start(), r.$from.end()));
  return s && (e || (e = t.tr)).setSelection(s), e;
}
var Xx = new Ue("fix-tables");
function mf(t, e, n, r) {
  const i = t.childCount, s = e.childCount;
  e: for (let o = 0, a = 0; o < s; o++) {
    const c = e.child(o);
    for (let d = a, f = Math.min(i, o + 3); d < f; d++)
      if (t.child(d) == c) {
        a = d + 1, n += c.nodeSize;
        continue e;
      }
    r(c, n), a < i && t.child(a).sameMarkup(c) ? mf(t.child(a), c, n + 1, r) : c.nodesBetween(0, c.content.size, r, n + 1), n += c.nodeSize;
  }
}
function pf(t, e) {
  let n;
  const r = (i, s) => {
    i.type.spec.tableRole == "table" && (n = Zx(t, i, s, n));
  };
  return e ? e.doc != t.doc && mf(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function Zx(t, e, n, r) {
  const i = ye.get(e);
  if (!i.problems) return r;
  r || (r = t.tr);
  const s = [];
  for (let c = 0; c < i.height; c++) s.push(0);
  for (let c = 0; c < i.problems.length; c++) {
    const d = i.problems[c];
    if (d.type == "collision") {
      const f = e.nodeAt(d.pos);
      if (!f) continue;
      const u = f.attrs;
      for (let h = 0; h < u.rowspan; h++) s[d.row + h] += d.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + d.pos),
        null,
        an(u, u.colspan - d.n, d.n)
      );
    } else if (d.type == "missing")
      s[d.row] += d.n;
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
  let o, a;
  for (let c = 0; c < s.length; c++)
    s[c] && (o == null && (o = c), a = c);
  for (let c = 0, d = n + 1; c < i.height; c++) {
    const f = e.child(c), u = d + f.nodeSize, h = s[c];
    if (h > 0) {
      let m = "cell";
      f.firstChild && (m = f.firstChild.type.spec.tableRole);
      const p = [];
      for (let v = 0; v < h; v++) {
        const x = Pe(t.schema)[m].createAndFill();
        x && p.push(x);
      }
      const b = (c == 0 || o == c - 1) && a == c ? d + 1 : u - 1;
      r.insert(r.mapping.map(b), p);
    }
    d = u;
  }
  return r.setMeta(Xx, { fixTables: !0 });
}
function At(t) {
  const e = t.selection, n = as(t), r = n.node(-1), i = n.start(-1), s = ye.get(r);
  return { ...e instanceof pe ? s.rectBetween(
    e.$anchorCell.pos - i,
    e.$headCell.pos - i
  ) : s.findCell(n.pos - i), tableStart: i, map: s, table: r };
}
function gf(t, { map: e, tableStart: n, table: r }, i) {
  let s = i > 0 ? -1 : 0;
  Gx(e, r, i + s) && (s = i == 0 || i == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const a = o * e.width + i;
    if (i > 0 && i < e.width && e.map[a - 1] == e.map[a]) {
      const c = e.map[a], d = r.nodeAt(c);
      t.setNodeMarkup(
        t.mapping.map(n + c),
        null,
        ff(d.attrs, i - e.colCount(c))
      ), o += d.attrs.rowspan - 1;
    } else {
      const c = s == null ? Pe(r.type.schema).cell : r.nodeAt(e.map[a + s]).type, d = e.positionAt(o, i, r);
      t.insert(t.mapping.map(n + d), c.createAndFill());
    }
  }
  return t;
}
function ey(t, e) {
  if (!bt(t)) return !1;
  if (e) {
    const n = At(t);
    e(gf(t.tr, n, n.left));
  }
  return !0;
}
function ty(t, e) {
  if (!bt(t)) return !1;
  if (e) {
    const n = At(t);
    e(gf(t.tr, n, n.right));
  }
  return !0;
}
function ny(t, { map: e, table: n, tableStart: r }, i) {
  const s = t.mapping.maps.length;
  for (let o = 0; o < e.height; ) {
    const a = o * e.width + i, c = e.map[a], d = n.nodeAt(c), f = d.attrs;
    if (i > 0 && e.map[a - 1] == c || i < e.width - 1 && e.map[a + 1] == c)
      t.setNodeMarkup(
        t.mapping.slice(s).map(r + c),
        null,
        an(f, i - e.colCount(c))
      );
    else {
      const u = t.mapping.slice(s).map(r + c);
      t.delete(u, u + d.nodeSize);
    }
    o += f.rowspan;
  }
}
function ry(t, e) {
  if (!bt(t)) return !1;
  if (e) {
    const n = At(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let i = n.right - 1; ny(r, n, i), i != n.left; i--) {
      const s = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!s)
        throw RangeError("No table found");
      n.table = s, n.map = ye.get(s);
    }
    e(r);
  }
  return !0;
}
function iy(t, e, n) {
  var r;
  const i = Pe(e.type.schema).header_cell;
  for (let s = 0; s < t.width; s++)
    if (((r = e.nodeAt(t.map[s + n * t.width])) == null ? void 0 : r.type) != i)
      return !1;
  return !0;
}
function bf(t, { map: e, tableStart: n, table: r }, i) {
  var s;
  let o = n;
  for (let d = 0; d < i; d++) o += r.child(d).nodeSize;
  const a = [];
  let c = i > 0 ? -1 : 0;
  iy(e, r, i + c) && (c = i == 0 || i == e.height ? null : 0);
  for (let d = 0, f = e.width * i; d < e.width; d++, f++)
    if (i > 0 && i < e.height && e.map[f] == e.map[f - e.width]) {
      const u = e.map[f], h = r.nodeAt(u).attrs;
      t.setNodeMarkup(n + u, null, {
        ...h,
        rowspan: h.rowspan + 1
      }), d += h.colspan - 1;
    } else {
      const u = c == null ? Pe(r.type.schema).cell : (s = r.nodeAt(e.map[f + c * e.width])) == null ? void 0 : s.type, h = u?.createAndFill();
      h && a.push(h);
    }
  return t.insert(o, Pe(r.type.schema).row.create(null, a)), t;
}
function sy(t, e) {
  if (!bt(t)) return !1;
  if (e) {
    const n = At(t);
    e(bf(t.tr, n, n.top));
  }
  return !0;
}
function oy(t, e) {
  if (!bt(t)) return !1;
  if (e) {
    const n = At(t);
    e(bf(t.tr, n, n.bottom));
  }
  return !0;
}
function ly(t, { map: e, table: n, tableStart: r }, i) {
  let s = 0;
  for (let d = 0; d < i; d++) s += n.child(d).nodeSize;
  const o = s + n.child(i).nodeSize, a = t.mapping.maps.length;
  t.delete(s + r, o + r);
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
function ay(t, e) {
  if (!bt(t)) return !1;
  if (e) {
    const n = At(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let i = n.bottom - 1; ly(r, n, i), i != n.top; i--) {
      const s = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!s)
        throw RangeError("No table found");
      n.table = s, n.map = ye.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Qa(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function cy({ width: t, height: e, map: n }, r) {
  let i = r.top * t + r.left, s = i, o = (r.bottom - 1) * t + r.left, a = i + (r.right - r.left - 1);
  for (let c = r.top; c < r.bottom; c++) {
    if (r.left > 0 && n[s] == n[s - 1] || r.right < t && n[a] == n[a + 1])
      return !0;
    s += t, a += t;
  }
  for (let c = r.left; c < r.right; c++) {
    if (r.top > 0 && n[i] == n[i - t] || r.bottom < e && n[o] == n[o + t])
      return !0;
    i++, o++;
  }
  return !1;
}
function Xa(t, e) {
  const n = t.selection;
  if (!(n instanceof pe) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = At(t), { map: i } = r;
  if (cy(i, r)) return !1;
  if (e) {
    const s = t.tr, o = {};
    let a = Be.empty, c, d;
    for (let f = r.top; f < r.bottom; f++)
      for (let u = r.left; u < r.right; u++) {
        const h = i.map[f * i.width + u], m = r.table.nodeAt(h);
        if (!(o[h] || !m))
          if (o[h] = !0, c == null)
            c = h, d = m;
          else {
            Qa(m) || (a = a.append(m.content));
            const p = s.mapping.map(h + r.tableStart);
            s.delete(p, p + m.nodeSize);
          }
      }
    if (c == null || d == null)
      return !0;
    if (s.setNodeMarkup(c + r.tableStart, null, {
      ...ff(
        d.attrs,
        d.attrs.colspan,
        r.right - r.left - d.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), a.size) {
      const f = c + 1 + d.content.size, u = Qa(d) ? c + 1 : f;
      s.replaceWith(u + r.tableStart, f + r.tableStart, a);
    }
    s.setSelection(
      new pe(s.doc.resolve(c + r.tableStart))
    ), e(s);
  }
  return !0;
}
function Za(t, e) {
  const n = Pe(t.schema);
  return dy(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function dy(t) {
  return (e, n) => {
    var r;
    const i = e.selection;
    let s, o;
    if (i instanceof pe) {
      if (i.$anchorCell.pos != i.$headCell.pos) return !1;
      s = i.$anchorCell.nodeAfter, o = i.$anchorCell.pos;
    } else {
      if (s = Vx(i.$from), !s) return !1;
      o = (r = qn(i.$from)) == null ? void 0 : r.pos;
    }
    if (s == null || o == null || s.attrs.colspan == 1 && s.attrs.rowspan == 1)
      return !1;
    if (n) {
      let a = s.attrs;
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
        m == f.top && (p += s.nodeSize);
        for (let b = f.left, v = 0; b < f.right; b++, v++)
          b == f.left && m == f.top || u.insert(
            h = u.mapping.map(p + f.tableStart, 1),
            t({ node: s, row: m, col: b }).createAndFill(c[v])
          );
      }
      u.setNodeMarkup(
        o,
        t({ node: s, row: f.top, col: f.left }),
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
function uy(t, e) {
  return function(n, r) {
    if (!bt(n)) return !1;
    const i = as(n);
    if (i.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const s = n.tr;
      n.selection instanceof pe ? n.selection.forEachCell((o, a) => {
        o.attrs[t] !== e && s.setNodeMarkup(a, null, {
          ...o.attrs,
          [t]: e
        });
      }) : s.setNodeMarkup(i.pos, null, {
        ...i.nodeAfter.attrs,
        [t]: e
      }), r(s);
    }
    return !0;
  };
}
function fy(t) {
  return function(e, n) {
    if (!bt(e)) return !1;
    if (n) {
      const r = Pe(e.schema), i = At(e), s = e.tr, o = i.map.cellsInRect(
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
      ), a = o.map((c) => i.table.nodeAt(c));
      for (let c = 0; c < o.length; c++)
        a[c].type == r.header_cell && s.setNodeMarkup(
          i.tableStart + o[c],
          r.cell,
          a[c].attrs
        );
      if (s.steps.length == 0)
        for (let c = 0; c < o.length; c++)
          s.setNodeMarkup(
            i.tableStart + o[c],
            r.header_cell,
            a[c].attrs
          );
      n(s);
    }
    return !0;
  };
}
function ec(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let i = 0; i < r.length; i++) {
    const s = e.table.nodeAt(r[i]);
    if (s && s.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function pr(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? fy(t) : function(n, r) {
    if (!bt(n)) return !1;
    if (r) {
      const i = Pe(n.schema), s = At(n), o = n.tr, a = ec("row", s, i), c = ec(
        "column",
        s,
        i
      ), f = (t === "column" ? a : t === "row" ? c : !1) ? 1 : 0, u = t == "column" ? {
        left: 0,
        top: f,
        right: 1,
        bottom: s.map.height
      } : t == "row" ? {
        left: f,
        top: 0,
        right: s.map.width,
        bottom: 1
      } : s, h = t == "column" ? c ? i.cell : i.header_cell : t == "row" ? a ? i.cell : i.header_cell : i.cell;
      s.map.cellsInRect(u).forEach((m) => {
        const p = m + s.tableStart, b = o.doc.nodeAt(p);
        b && o.setNodeMarkup(p, h, b.attrs);
      }), r(o);
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
var hy = pr("cell", {
  useDeprecatedLogic: !0
});
function my(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, i = t.before(); r >= 0; r--) {
      const s = t.node(-1).child(r), o = s.lastChild;
      if (o)
        return i - 1 - o.nodeSize;
      i -= s.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), i = t.after(); r < n.childCount; r++) {
      const s = n.child(r);
      if (s.childCount) return i + 1;
      i += s.nodeSize;
    }
  }
  return null;
}
function tc(t) {
  return function(e, n) {
    if (!bt(e)) return !1;
    const r = my(as(e), t);
    if (r == null) return !1;
    if (n) {
      const i = e.doc.resolve(r);
      n(
        e.tr.setSelection(ot.between(i, Ux(i))).scrollIntoView()
      );
    }
    return !0;
  };
}
function py(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(r), n.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function Gr(t, e) {
  const n = t.selection;
  if (!(n instanceof pe)) return !1;
  if (e) {
    const r = t.tr, i = Pe(t.schema).cell.createAndFill().content;
    n.forEachCell((s, o) => {
      s.content.eq(i) || r.replace(
        r.mapping.map(o + 1),
        r.mapping.map(o + s.nodeSize - 1),
        new Ze(i, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function gy(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const i = e.child(0), s = i.type.spec.tableRole, o = i.type.schema, a = [];
  if (s == "row")
    for (let c = 0; c < e.childCount; c++) {
      let d = e.child(c).content;
      const f = c ? 0 : Math.max(0, n - 1), u = c < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (f || u) && (d = No(
        Pe(o).row,
        new Ze(d, f, u)
      ).content), a.push(d);
    }
  else if (s == "cell" || s == "header_cell")
    a.push(
      n || r ? No(
        Pe(o).row,
        new Ze(e, n, r)
      ).content : e
    );
  else
    return null;
  return by(o, a);
}
function by(t, e) {
  const n = [];
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    for (let o = s.childCount - 1; o >= 0; o--) {
      const { rowspan: a, colspan: c } = s.child(o).attrs;
      for (let d = i; d < i + a; d++)
        n[d] = (n[d] || 0) + c;
    }
  }
  let r = 0;
  for (let i = 0; i < n.length; i++) r = Math.max(r, n[i]);
  for (let i = 0; i < n.length; i++)
    if (i >= e.length && e.push(Be.empty), n[i] < r) {
      const s = Pe(t).cell.createAndFill(), o = [];
      for (let a = n[i]; a < r; a++)
        o.push(s);
      e[i] = e[i].append(Be.from(o));
    }
  return { height: e.length, width: r, rows: e };
}
function No(t, e) {
  const n = t.createAndFill();
  return new d0(n).replace(0, n.content.size, e).doc;
}
function vy({ width: t, height: e, rows: n }, r, i) {
  if (t != r) {
    const s = [], o = [];
    for (let a = 0; a < n.length; a++) {
      const c = n[a], d = [];
      for (let f = s[a] || 0, u = 0; f < r; u++) {
        let h = c.child(u % c.childCount);
        f + h.attrs.colspan > r && (h = h.type.createChecked(
          an(
            h.attrs,
            h.attrs.colspan,
            f + h.attrs.colspan - r
          ),
          h.content
        )), d.push(h), f += h.attrs.colspan;
        for (let m = 1; m < h.attrs.rowspan; m++)
          s[a + m] = (s[a + m] || 0) + h.attrs.colspan;
      }
      o.push(Be.from(d));
    }
    n = o, t = r;
  }
  if (e != i) {
    const s = [];
    for (let o = 0, a = 0; o < i; o++, a++) {
      const c = [], d = n[a % e];
      for (let f = 0; f < d.childCount; f++) {
        let u = d.child(f);
        o + u.attrs.rowspan > i && (u = u.type.create(
          {
            ...u.attrs,
            rowspan: Math.max(1, i - u.attrs.rowspan)
          },
          u.content
        )), c.push(u);
      }
      s.push(Be.from(c));
    }
    n = s, e = i;
  }
  return { width: t, height: e, rows: n };
}
function xy(t, e, n, r, i, s, o) {
  const a = t.doc.type.schema, c = Pe(a);
  let d, f;
  if (i > e.width)
    for (let u = 0, h = 0; u < e.height; u++) {
      const m = n.child(u);
      h += m.nodeSize;
      const p = [];
      let b;
      m.lastChild == null || m.lastChild.type == c.cell ? b = d || (d = c.cell.createAndFill()) : b = f || (f = c.header_cell.createAndFill());
      for (let v = e.width; v < i; v++) p.push(b);
      t.insert(t.mapping.slice(o).map(h - 1 + r), p);
    }
  if (s > e.height) {
    const u = [];
    for (let p = 0, b = (e.height - 1) * e.width; p < Math.max(e.width, i); p++) {
      const v = p >= e.width ? !1 : n.nodeAt(e.map[b + p]).type == c.header_cell;
      u.push(
        v ? f || (f = c.header_cell.createAndFill()) : d || (d = c.cell.createAndFill())
      );
    }
    const h = c.row.create(null, Be.from(u)), m = [];
    for (let p = e.height; p < s; p++) m.push(h);
    t.insert(t.mapping.slice(o).map(r + n.nodeSize - 2), m);
  }
  return !!(d || f);
}
function nc(t, e, n, r, i, s, o, a) {
  if (o == 0 || o == e.height) return !1;
  let c = !1;
  for (let d = i; d < s; d++) {
    const f = o * e.width + d, u = e.map[f];
    if (e.map[f - e.width] == u) {
      c = !0;
      const h = n.nodeAt(u), { top: m, left: p } = e.findCell(u);
      t.setNodeMarkup(t.mapping.slice(a).map(u + r), null, {
        ...h.attrs,
        rowspan: o - m
      }), t.insert(
        t.mapping.slice(a).map(e.positionAt(o, p, n)),
        h.type.createAndFill({
          ...h.attrs,
          rowspan: m + h.attrs.rowspan - o
        })
      ), d += h.attrs.colspan - 1;
    }
  }
  return c;
}
function rc(t, e, n, r, i, s, o, a) {
  if (o == 0 || o == e.width) return !1;
  let c = !1;
  for (let d = i; d < s; d++) {
    const f = d * e.width + o, u = e.map[f];
    if (e.map[f - 1] == u) {
      c = !0;
      const h = n.nodeAt(u), m = e.colCount(u), p = t.mapping.slice(a).map(u + r);
      t.setNodeMarkup(
        p,
        null,
        an(
          h.attrs,
          o - m,
          h.attrs.colspan - (o - m)
        )
      ), t.insert(
        p + h.nodeSize,
        h.type.createAndFill(
          an(h.attrs, 0, o - m)
        )
      ), d += h.attrs.rowspan - 1;
    }
  }
  return c;
}
function ic(t, e, n, r, i) {
  let s = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!s)
    throw new Error("No table found");
  let o = ye.get(s);
  const { top: a, left: c } = r, d = c + i.width, f = a + i.height, u = t.tr;
  let h = 0;
  function m() {
    if (s = n ? u.doc.nodeAt(n - 1) : u.doc, !s)
      throw new Error("No table found");
    o = ye.get(s), h = u.mapping.maps.length;
  }
  xy(u, o, s, n, d, f, h) && m(), nc(u, o, s, n, c, d, a, h) && m(), nc(u, o, s, n, c, d, f, h) && m(), rc(u, o, s, n, a, f, c, h) && m(), rc(u, o, s, n, a, f, d, h) && m();
  for (let p = a; p < f; p++) {
    const b = o.positionAt(p, c, s), v = o.positionAt(p, d, s);
    u.replace(
      u.mapping.slice(h).map(b + n),
      u.mapping.slice(h).map(v + n),
      new Ze(i.rows[p - a], 0, 0)
    );
  }
  m(), u.setSelection(
    new pe(
      u.doc.resolve(n + o.positionAt(a, c, s)),
      u.doc.resolve(n + o.positionAt(f - 1, d - 1, s))
    )
  ), e(u);
}
var yy = c0({
  ArrowLeft: qr("horiz", -1),
  ArrowRight: qr("horiz", 1),
  ArrowUp: qr("vert", -1),
  ArrowDown: qr("vert", 1),
  "Shift-ArrowLeft": Kr("horiz", -1),
  "Shift-ArrowRight": Kr("horiz", 1),
  "Shift-ArrowUp": Kr("vert", -1),
  "Shift-ArrowDown": Kr("vert", 1),
  Backspace: Gr,
  "Mod-Backspace": Gr,
  Delete: Gr,
  "Mod-Delete": Gr
});
function li(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function qr(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const s = n.selection;
    if (s instanceof pe)
      return li(
        n,
        r,
        Qe.near(s.$headCell, e)
      );
    if (t != "horiz" && !s.empty) return !1;
    const o = vf(i, t, e);
    if (o == null) return !1;
    if (t == "horiz")
      return li(
        n,
        r,
        Qe.near(n.doc.resolve(s.head + e), e)
      );
    {
      const a = n.doc.resolve(o), c = uf(a, t, e);
      let d;
      return c ? d = Qe.near(c, 1) : e < 0 ? d = Qe.near(n.doc.resolve(a.before(-1)), -1) : d = Qe.near(n.doc.resolve(a.after(-1)), 1), li(n, r, d);
    }
  };
}
function Kr(t, e) {
  return (n, r, i) => {
    if (!i) return !1;
    const s = n.selection;
    let o;
    if (s instanceof pe)
      o = s;
    else {
      const c = vf(i, t, e);
      if (c == null) return !1;
      o = new pe(n.doc.resolve(c));
    }
    const a = uf(o.$headCell, t, e);
    return a ? li(
      n,
      r,
      new pe(o.$anchorCell, a)
    ) : !1;
  };
}
function wy(t, e) {
  const n = t.state.doc, r = qn(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new pe(r))), !0) : !1;
}
function ky(t, e, n) {
  if (!bt(t.state)) return !1;
  let r = gy(n);
  const i = t.state.selection;
  if (i instanceof pe) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        Be.from(
          No(Pe(t.state.schema).cell, n)
        )
      ]
    });
    const s = i.$anchorCell.node(-1), o = i.$anchorCell.start(-1), a = ye.get(s).rectBetween(
      i.$anchorCell.pos - o,
      i.$headCell.pos - o
    );
    return r = vy(r, a.right - a.left, a.bottom - a.top), ic(t.state, t.dispatch, o, a, r), !0;
  } else if (r) {
    const s = as(t.state), o = s.start(-1);
    return ic(
      t.state,
      t.dispatch,
      o,
      ye.get(s.node(-1)).findCell(s.pos - o),
      r
    ), !0;
  } else
    return !1;
}
function Cy(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = sc(t, e.target);
  let i;
  if (e.shiftKey && t.state.selection instanceof pe)
    s(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (i = qn(t.state.selection.$anchor)) != null && ((n = js(t, e)) == null ? void 0 : n.pos) != i.pos)
    s(i, e), e.preventDefault();
  else if (!r)
    return;
  function s(c, d) {
    let f = js(t, d);
    const u = Ut.getState(t.state) == null;
    if (!f || !Rl(c, f))
      if (u) f = c;
      else return;
    const h = new pe(c, f);
    if (u || !t.state.selection.eq(h)) {
      const m = t.state.tr.setSelection(h);
      u && m.setMeta(Ut, c.pos), t.dispatch(m);
    }
  }
  function o() {
    t.root.removeEventListener("mouseup", o), t.root.removeEventListener("dragstart", o), t.root.removeEventListener("mousemove", a), Ut.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(Ut, -1));
  }
  function a(c) {
    const d = c, f = Ut.getState(t.state);
    let u;
    if (f != null)
      u = t.state.doc.resolve(f);
    else if (sc(t, d.target) != r && (u = js(t, e), !u))
      return o();
    u && s(u, d);
  }
  t.root.addEventListener("mouseup", o), t.root.addEventListener("dragstart", o), t.root.addEventListener("mousemove", a);
}
function vf(t, e, n) {
  if (!(t.state.selection instanceof ot)) return null;
  const { $head: r } = t.state.selection;
  for (let i = r.depth - 1; i >= 0; i--) {
    const s = r.node(i);
    if ((n < 0 ? r.index(i) : r.indexAfter(i)) != (n < 0 ? 0 : s.childCount)) return null;
    if (s.type.spec.tableRole == "cell" || s.type.spec.tableRole == "header_cell") {
      const a = r.before(i), c = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(c) ? a : null;
    }
  }
  return null;
}
function sc(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function js(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? qn(t.state.doc.resolve(n.pos)) : null;
}
var Ny = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), So(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, So(
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
function So(t, e, n, r, i, s) {
  var o;
  let a = 0, c = !0, d = e.firstChild;
  const f = t.firstChild;
  if (f) {
    for (let u = 0, h = 0; u < f.childCount; u++) {
      const { colspan: m, colwidth: p } = f.child(u).attrs;
      for (let b = 0; b < m; b++, h++) {
        const v = i == h ? s : p && p[b], x = v ? v + "px" : "";
        if (a += v || r, v || (c = !1), d)
          d.style.width != x && (d.style.width = x), d = d.nextSibling;
        else {
          const w = document.createElement("col");
          w.style.width = x, e.appendChild(w);
        }
      }
    }
    for (; d; ) {
      const u = d.nextSibling;
      (o = d.parentNode) == null || o.removeChild(d), d = u;
    }
    c ? (n.style.width = a + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = a + "px");
  }
}
var qe = new Ue(
  "tableColumnResizing"
);
function Sy({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = Ny,
  lastColumnResizable: i = !0
} = {}) {
  const s = new It({
    key: qe,
    state: {
      init(o, a) {
        var c, d;
        const f = (d = (c = s.spec) == null ? void 0 : c.props) == null ? void 0 : d.nodeViews, u = Pe(a.schema).table.name;
        return r && f && (f[u] = (h, m) => new r(h, n, m)), new Iy(-1, !1);
      },
      apply(o, a) {
        return a.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const a = qe.getState(o);
        return a && a.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, a) => {
          Ay(o, a, t, i);
        },
        mouseleave: (o) => {
          Ty(o);
        },
        mousedown: (o, a) => {
          Ey(o, a, e, n);
        }
      },
      decorations: (o) => {
        const a = qe.getState(o);
        if (a && a.activeHandle > -1)
          return Ry(o, a.activeHandle);
      },
      nodeViews: {}
    }
  });
  return s;
}
var Iy = class ai {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta(qe);
    if (r && r.setHandle != null)
      return new ai(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new ai(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let i = e.mapping.map(n.activeHandle, -1);
      return Co(e.doc.resolve(i)) || (i = -1), new ai(i, n.dragging);
    }
    return n;
  }
};
function Ay(t, e, n, r) {
  if (!t.editable) return;
  const i = qe.getState(t.state);
  if (i && !i.dragging) {
    const s = _y(e.target);
    let o = -1;
    if (s) {
      const { left: a, right: c } = s.getBoundingClientRect();
      e.clientX - a <= n ? o = oc(t, e, "left", n) : c - e.clientX <= n && (o = oc(t, e, "right", n));
    }
    if (o != i.activeHandle) {
      if (!r && o !== -1) {
        const a = t.state.doc.resolve(o), c = a.node(-1), d = ye.get(c), f = a.start(-1);
        if (d.colCount(a.pos - f) + a.nodeAfter.attrs.colspan - 1 == d.width - 1)
          return;
      }
      xf(t, o);
    }
  }
}
function Ty(t) {
  if (!t.editable) return;
  const e = qe.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && xf(t, -1);
}
function Ey(t, e, n, r) {
  var i;
  if (!t.editable) return !1;
  const s = (i = t.dom.ownerDocument.defaultView) != null ? i : window, o = qe.getState(t.state);
  if (!o || o.activeHandle == -1 || o.dragging)
    return !1;
  const a = t.state.doc.nodeAt(o.activeHandle), c = Dy(t, o.activeHandle, a.attrs);
  t.dispatch(
    t.state.tr.setMeta(qe, {
      setDragging: { startX: e.clientX, startWidth: c }
    })
  );
  function d(u) {
    s.removeEventListener("mouseup", d), s.removeEventListener("mousemove", f);
    const h = qe.getState(t.state);
    h?.dragging && (Ly(
      t,
      h.activeHandle,
      lc(h.dragging, u, n)
    ), t.dispatch(
      t.state.tr.setMeta(qe, { setDragging: null })
    ));
  }
  function f(u) {
    if (!u.which) return d(u);
    const h = qe.getState(t.state);
    if (h && h.dragging) {
      const m = lc(h.dragging, u, n);
      ac(
        t,
        h.activeHandle,
        m,
        r
      );
    }
  }
  return ac(
    t,
    o.activeHandle,
    c,
    r
  ), s.addEventListener("mouseup", d), s.addEventListener("mousemove", f), e.preventDefault(), !0;
}
function Dy(t, e, { colspan: n, colwidth: r }) {
  const i = r && r[r.length - 1];
  if (i) return i;
  const s = t.domAtPos(e);
  let a = s.node.childNodes[s.offset].offsetWidth, c = n;
  if (r)
    for (let d = 0; d < n; d++)
      r[d] && (a -= r[d], c--);
  return a / c;
}
function _y(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function oc(t, e, n, r) {
  const i = n == "right" ? -r : r, s = t.posAtCoords({
    left: e.clientX + i,
    top: e.clientY
  });
  if (!s) return -1;
  const { pos: o } = s, a = qn(t.state.doc.resolve(o));
  if (!a) return -1;
  if (n == "right") return a.pos;
  const c = ye.get(a.node(-1)), d = a.start(-1), f = c.map.indexOf(a.pos - d);
  return f % c.width == 0 ? -1 : d + c.map[f - 1];
}
function lc(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function xf(t, e) {
  t.dispatch(
    t.state.tr.setMeta(qe, { setHandle: e })
  );
}
function Ly(t, e, n) {
  const r = t.state.doc.resolve(e), i = r.node(-1), s = ye.get(i), o = r.start(-1), a = s.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, c = t.state.tr;
  for (let d = 0; d < s.height; d++) {
    const f = d * s.width + a;
    if (d && s.map[f] == s.map[f - s.width]) continue;
    const u = s.map[f], h = i.nodeAt(u).attrs, m = h.colspan == 1 ? 0 : a - s.colCount(u);
    if (h.colwidth && h.colwidth[m] == n) continue;
    const p = h.colwidth ? h.colwidth.slice() : Oy(h.colspan);
    p[m] = n, c.setNodeMarkup(o + u, null, { ...h, colwidth: p });
  }
  c.docChanged && t.dispatch(c);
}
function ac(t, e, n, r) {
  const i = t.state.doc.resolve(e), s = i.node(-1), o = i.start(-1), a = ye.get(s).colCount(i.pos - o) + i.nodeAfter.attrs.colspan - 1;
  let c = t.domAtPos(i.start(-1)).node;
  for (; c && c.nodeName != "TABLE"; )
    c = c.parentNode;
  c && So(
    s,
    c.firstChild,
    c,
    r,
    a,
    n
  );
}
function Oy(t) {
  return Array(t).fill(0);
}
function Ry(t, e) {
  var n;
  const r = [], i = t.doc.resolve(e), s = i.node(-1);
  if (!s)
    return fr.empty;
  const o = ye.get(s), a = i.start(-1), c = o.colCount(i.pos - a) + i.nodeAfter.attrs.colspan - 1;
  for (let d = 0; d < o.height; d++) {
    const f = c + d * o.width;
    if ((c == o.width - 1 || o.map[f] != o.map[f + 1]) && (d == 0 || o.map[f] != o.map[f - o.width])) {
      const u = o.map[f], h = a + u + s.nodeAt(u).nodeSize - 1, m = document.createElement("div");
      m.className = "column-resize-handle", (n = qe.getState(t)) != null && n.dragging && r.push(
        Si.node(
          a + u,
          a + u + s.nodeAt(u).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(Si.widget(h, m));
    }
  }
  return fr.create(t.doc, r);
}
function Fy({
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
        const { deleted: i, pos: s } = e.mapping.mapResult(n);
        return i ? null : s;
      }
    },
    props: {
      decorations: Kx,
      handleDOMEvents: {
        mousedown: Cy
      },
      createSelectionBetween(e) {
        return Ut.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: wy,
      handleKeyDown: yy,
      handlePaste: ky
    },
    appendTransaction(e, n, r) {
      return Qx(
        r,
        pf(r, n),
        t
      );
    }
  });
}
var My = gt.create({
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
          const r = t.getAttribute("colwidth"), i = r ? r.split(",").map((s) => parseInt(s, 10)) : null;
          if (!i) {
            const s = (e = t.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), o = Array.from(((n = t.parentElement) == null ? void 0 : n.children) || []).indexOf(t);
            if (o && o > -1 && s && s[o]) {
              const a = s[o].getAttribute("width");
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
    return ["td", ut(this.options.HTMLAttributes, t), 0];
  }
}), Py = gt.create({
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
    return ["th", ut(this.options.HTMLAttributes, t), 0];
  }
}), zy = gt.create({
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
    return ["tr", ut(this.options.HTMLAttributes, t), 0];
  }
});
function Io(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function cc(t, e, n, r, i, s) {
  var o;
  let a = 0, c = !0, d = e.firstChild;
  const f = t.firstChild;
  if (f !== null)
    for (let h = 0, m = 0; h < f.childCount; h += 1) {
      const { colspan: p, colwidth: b } = f.child(h).attrs;
      for (let v = 0; v < p; v += 1, m += 1) {
        const x = i === m ? s : b && b[v], w = x ? `${x}px` : "";
        if (a += x || r, x || (c = !1), d) {
          if (d.style.width !== w) {
            const [y, E] = Io(r, x);
            d.style.setProperty(y, E);
          }
          d = d.nextSibling;
        } else {
          const y = document.createElement("col"), [E, S] = Io(r, x);
          y.style.setProperty(E, S), e.appendChild(y);
        }
      }
    }
  for (; d; ) {
    const h = d.nextSibling;
    (o = d.parentNode) == null || o.removeChild(d), d = h;
  }
  const u = t.attrs.style && typeof t.attrs.style == "string" && /\bwidth\s*:/i.test(t.attrs.style);
  c && !u ? (n.style.width = `${a}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${a}px`);
}
var $y = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), t.attrs.style && (this.table.style.cssText = t.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), cc(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, cc(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    const e = t.target, n = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(n && !r && (t.type === "attributes" || t.type === "childList" || t.type === "characterData"));
  }
};
function jy(t, e, n, r) {
  let i = 0, s = !0;
  const o = [], a = t.firstChild;
  if (!a)
    return {};
  for (let u = 0, h = 0; u < a.childCount; u += 1) {
    const { colspan: m, colwidth: p } = a.child(u).attrs;
    for (let b = 0; b < m; b += 1, h += 1) {
      const v = n === h ? r : p && p[b];
      i += v || e, v || (s = !1);
      const [x, w] = Io(e, v);
      o.push(["col", { style: `${x}: ${w}` }]);
    }
  }
  const c = s ? `${i}px` : "", d = s ? "" : `${i}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: c, tableMinWidth: d };
}
function dc(t, e) {
  return t.createAndFill();
}
function By(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function Hy(t, e, n, r, i) {
  const s = By(t), o = [], a = [];
  for (let d = 0; d < n; d += 1) {
    const f = dc(s.cell);
    if (f && a.push(f), r) {
      const u = dc(s.header_cell);
      u && o.push(u);
    }
  }
  const c = [];
  for (let d = 0; d < e; d += 1)
    c.push(s.row.createChecked(null, r && d === 0 ? o : a));
  return s.table.createChecked(null, c);
}
function Vy(t) {
  return t instanceof pe;
}
var Jr = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!Vy(e))
    return !1;
  let n = 0;
  const r = h0(e.ranges[0].$from, (s) => s.type.name === "table");
  return r?.node.descendants((s) => {
    if (s.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(s.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, Wy = "";
function Uy(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}
function Gy(t, e, n = {}) {
  var r;
  const i = (r = n.cellLineSeparator) != null ? r : Wy;
  if (!t || !t.content || t.content.length === 0)
    return "";
  const s = [];
  t.content.forEach((p) => {
    const b = [];
    p.content && p.content.forEach((v) => {
      let x = "";
      v.content && Array.isArray(v.content) && v.content.length > 1 ? x = v.content.map((S) => e.renderChildren(S)).join(i) : x = v.content ? e.renderChildren(v.content) : "";
      const w = Uy(x), y = v.type === "tableHeader";
      b.push({ text: w, isHeader: y });
    }), s.push(b);
  });
  const o = s.reduce((p, b) => Math.max(p, b.length), 0);
  if (o === 0)
    return "";
  const a = new Array(o).fill(0);
  s.forEach((p) => {
    var b;
    for (let v = 0; v < o; v += 1) {
      const w = (((b = p[v]) == null ? void 0 : b.text) || "").length;
      w > a[v] && (a[v] = w), a[v] < 3 && (a[v] = 3);
    }
  });
  const c = (p, b) => p + " ".repeat(Math.max(0, b - p.length)), d = s[0], f = d.some((p) => p.isHeader);
  let u = `
`;
  const h = new Array(o).fill(0).map((p, b) => f && d[b] && d[b].text || "");
  return u += `| ${h.map((p, b) => c(p, a[b])).join(" | ")} |
`, u += `| ${a.map((p) => "-".repeat(Math.max(3, p))).join(" | ")} |
`, (f ? s.slice(1) : s).forEach((p) => {
    u += `| ${new Array(o).fill(0).map((b, v) => c(p[v] && p[v].text || "", a[v])).join(" | ")} |
`;
  }), u;
}
var qy = Gy, Ky = gt.create({
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
      View: $y,
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
    const { colgroup: n, tableWidth: r, tableMinWidth: i } = jy(t, this.options.cellMinWidth), s = e.style;
    function o() {
      return s || (r ? `width: ${r}` : `min-width: ${i}`);
    }
    const a = [
      "table",
      ut(this.options.HTMLAttributes, e, {
        style: o()
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
      r.forEach((s) => {
        i.push(e.createNode("tableCell", {}, [{ type: "paragraph", content: e.parseInline(s.tokens) }]));
      }), n.push(e.createNode("tableRow", {}, i));
    }), e.createNode("table", void 0, n);
  },
  renderMarkdown: (t, e) => qy(t, e),
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: i, editor: s }) => {
        const o = Hy(s.schema, t, e, n);
        if (i) {
          const a = r.selection.from + 1;
          r.replaceSelectionWith(o).scrollIntoView().setSelection(ot.near(r.doc.resolve(a)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => ey(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => ty(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => ry(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => sy(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => oy(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => ay(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => py(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => Xa(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Za(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => pr("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => pr("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => hy(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => Xa(t, e) ? !0 : Za(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => uy(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => tc(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => tc(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && pf(t), !0),
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
      Backspace: Jr,
      "Mod-Backspace": Jr,
      Delete: Jr,
      "Mod-Delete": Jr
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        Sy({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      Fy({
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
}), Jy = mn.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(Ky.configure(this.options.table)), this.options.tableCell !== !1 && t.push(My.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(Py.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(zy.configure(this.options.tableRow)), t;
  }
});
const Yy = Jy.configure({
  table: {
    resizable: !0
  }
});
function Qy(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Xy(t, e, n) {
  const i = Qd((n || {}).ignore || []), s = Zy(e);
  let o = -1;
  for (; ++o < s.length; )
    ng(t, "text", a);
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
    const u = f[f.length - 1], h = s[o][0], m = s[o][1];
    let p = 0;
    const v = u.children.indexOf(d);
    let x = !1, w = [];
    h.lastIndex = 0;
    let y = h.exec(d.value);
    for (; y; ) {
      const E = y.index, S = {
        index: y.index,
        input: y.input,
        stack: [...f, d]
      };
      let k = m(...y, S);
      if (typeof k == "string" && (k = k.length > 0 ? { type: "text", value: k } : void 0), k === !1 ? h.lastIndex = E + 1 : (p !== E && w.push({
        type: "text",
        value: d.value.slice(p, E)
      }), Array.isArray(k) ? w.push(...k) : k && w.push(k), p = E + y[0].length, x = !0), !h.global)
        break;
      y = h.exec(d.value);
    }
    return x ? (p < d.value.length && w.push({ type: "text", value: d.value.slice(p) }), u.children.splice(v, 1, ...w)) : w = [d], v + w.length;
  }
}
function Zy(t) {
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
  return typeof t == "string" ? new RegExp(Qy(t), "g") : t;
}
function t1(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Bs = "phrasing", Hs = ["autolink", "link", "image", "label"];
function n1() {
  return {
    transforms: [c1],
    enter: {
      literalAutolink: i1,
      literalAutolinkEmail: Vs,
      literalAutolinkHttp: Vs,
      literalAutolinkWww: Vs
    },
    exit: {
      literalAutolink: a1,
      literalAutolinkEmail: l1,
      literalAutolinkHttp: s1,
      literalAutolinkWww: o1
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
        inConstruct: Bs,
        notInConstruct: Hs
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Bs,
        notInConstruct: Hs
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Bs,
        notInConstruct: Hs
      }
    ]
  };
}
function i1(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Vs(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function s1(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function o1(t) {
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
  Xy(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, d1],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), u1]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function d1(t, e, n, r, i) {
  let s = "";
  if (!yf(i) || (/^w/i.test(e) && (n = e + n, e = "", s = "http://"), !f1(n)))
    return !1;
  const o = h1(n + r);
  if (!o[0]) return !1;
  const a = {
    type: "link",
    title: null,
    url: s + e + o[0],
    children: [{ type: "text", value: e + o[0] }]
  };
  return o[1] ? [a, { type: "text", value: o[1] }] : a;
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
  const i = xa(t, "(");
  let s = xa(t, ")");
  for (; r !== -1 && i > s; )
    t += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), s++;
  return [t, n];
}
function yf(t, e) {
  const n = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || On(n) || dl(n)) && // If it’s an email, the previous character should not be a slash.
  (!e || n !== 47);
}
wf.peek = k1;
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
  n.type, n.identifier = Tr(
    this.sliceSerialize(t)
  ).toLowerCase(), n.label = e;
}
function x1(t) {
  this.exit(t);
}
function y1(t) {
  const e = this.resume(), n = this.stack[this.stack.length - 1];
  n.type, n.identifier = Tr(
    this.sliceSerialize(t)
  ).toLowerCase(), n.label = e;
}
function w1(t) {
  this.exit(t);
}
function k1() {
  return "[";
}
function wf(t, e, n, r) {
  const i = n.createTracker(r);
  let s = i.move("[^");
  const o = n.enter("footnoteReference"), a = n.enter("reference");
  return s += i.move(
    n.safe(n.associationId(t), { after: "]", before: s })
  ), a(), o(), s += i.move("]"), s;
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
      gfmFootnoteCall: x1,
      gfmFootnoteDefinitionLabelString: y1,
      gfmFootnoteDefinition: w1
    }
  };
}
function N1(t) {
  let e = !1;
  return t && t.firstLineBlank && (e = !0), {
    handlers: { footnoteDefinition: n, footnoteReference: wf },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function n(r, i, s, o) {
    const a = s.createTracker(o);
    let c = a.move("[^");
    const d = s.enter("footnoteDefinition"), f = s.enter("label");
    return c += a.move(
      s.safe(s.associationId(r), { before: c, after: "]" })
    ), f(), c += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), c += a.move(
      (e ? `
` : " ") + s.indentLines(
        s.containerFlow(r, a.current()),
        e ? kf : S1
      )
    )), d(), c;
  }
}
function S1(t, e, n) {
  return e === 0 ? t : kf(t, e, n);
}
function kf(t, e, n) {
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
Cf.peek = _1;
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
    handlers: { delete: Cf }
  };
}
function E1(t) {
  this.enter({ type: "delete", children: [] }, t);
}
function D1(t) {
  this.exit(t);
}
function Cf(t, e, n, r) {
  const i = n.createTracker(r), s = n.enter("strikethrough");
  let o = i.move("~~");
  return o += n.containerPhrasing(t, {
    ...i.current(),
    before: o,
    after: "~"
  }), o += i.move("~~"), s(), o;
}
function _1() {
  return "~";
}
function L1(t) {
  return t.length;
}
function O1(t, e) {
  const n = e || {}, r = (n.align || []).concat(), i = n.stringLength || L1, s = [], o = [], a = [], c = [];
  let d = 0, f = -1;
  for (; ++f < t.length; ) {
    const b = [], v = [];
    let x = -1;
    for (t[f].length > d && (d = t[f].length); ++x < t[f].length; ) {
      const w = R1(t[f][x]);
      if (n.alignDelimiters !== !1) {
        const y = i(w);
        v[x] = y, (c[x] === void 0 || y > c[x]) && (c[x] = y);
      }
      b.push(w);
    }
    o[f] = b, a[f] = v;
  }
  let u = -1;
  if (typeof r == "object" && "length" in r)
    for (; ++u < d; )
      s[u] = uc(r[u]);
  else {
    const b = uc(r);
    for (; ++u < d; )
      s[u] = b;
  }
  u = -1;
  const h = [], m = [];
  for (; ++u < d; ) {
    const b = s[u];
    let v = "", x = "";
    b === 99 ? (v = ":", x = ":") : b === 108 ? v = ":" : b === 114 && (x = ":");
    let w = n.alignDelimiters === !1 ? 1 : Math.max(
      1,
      c[u] - v.length - x.length
    );
    const y = v + "-".repeat(w) + x;
    n.alignDelimiters !== !1 && (w = v.length + w + x.length, w > c[u] && (c[u] = w), m[u] = w), h[u] = y;
  }
  o.splice(1, 0, h), a.splice(1, 0, m), f = -1;
  const p = [];
  for (; ++f < o.length; ) {
    const b = o[f], v = a[f];
    u = -1;
    const x = [];
    for (; ++u < d; ) {
      const w = b[u] || "";
      let y = "", E = "";
      if (n.alignDelimiters !== !1) {
        const S = c[u] - (v[u] || 0), k = s[u];
        k === 114 ? y = " ".repeat(S) : k === 99 ? S % 2 ? (y = " ".repeat(S / 2 + 0.5), E = " ".repeat(S / 2 - 0.5)) : (y = " ".repeat(S / 2), E = y) : E = " ".repeat(S);
      }
      n.delimiterStart !== !1 && !u && x.push("|"), n.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(n.alignDelimiters === !1 && w === "") && (n.delimiterStart !== !1 || u) && x.push(" "), n.alignDelimiters !== !1 && x.push(y), x.push(w), n.alignDelimiters !== !1 && x.push(E), n.padding !== !1 && x.push(" "), (n.delimiterEnd !== !1 || u !== d - 1) && x.push("|");
    }
    p.push(
      n.delimiterEnd === !1 ? x.join("").replace(/ +$/, "") : x.join("")
    );
  }
  return p.join(`
`);
}
function R1(t) {
  return t == null ? "" : String(t);
}
function uc(t) {
  const e = typeof t == "string" ? t.codePointAt(0) : 0;
  return e === 67 || e === 99 ? 99 : e === 76 || e === 108 ? 108 : e === 82 || e === 114 ? 114 : 0;
}
function F1(t, e, n, r) {
  const i = n.enter("blockquote"), s = n.createTracker(r);
  s.move("> "), s.shift(2);
  const o = n.indentLines(
    n.containerFlow(t, s.current()),
    M1
  );
  return i(), o;
}
function M1(t, e, n) {
  return ">" + (n ? "" : " ") + t;
}
function P1(t, e) {
  return fc(t, e.inConstruct, !0) && !fc(t, e.notInConstruct, !1);
}
function fc(t, e, n) {
  if (typeof e == "string" && (e = [e]), !e || e.length === 0)
    return n;
  let r = -1;
  for (; ++r < e.length; )
    if (t.includes(e[r]))
      return !0;
  return !1;
}
function hc(t, e, n, r) {
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
  let r = n.indexOf(e), i = r, s = 0, o = 0;
  if (typeof e != "string")
    throw new TypeError("Expected substring");
  for (; r !== -1; )
    r === i ? ++s > o && (o = s) : s = 1, i = r + e.length, r = n.indexOf(e, i);
  return o;
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
  const i = j1(n), s = t.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
  if ($1(t, n)) {
    const u = n.enter("codeIndented"), h = n.indentLines(s, H1);
    return u(), h;
  }
  const a = n.createTracker(r), c = i.repeat(Math.max(z1(s, i) + 1, 3)), d = n.enter("codeFenced");
  let f = a.move(c);
  if (t.lang) {
    const u = n.enter(`codeFencedLang${o}`);
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
    const u = n.enter(`codeFencedMeta${o}`);
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
`), s && (f += a.move(s + `
`)), f += a.move(c), d(), f;
}
function H1(t, e, n) {
  return (n ? "" : "    ") + t;
}
function Fl(t) {
  const e = t.options.quote || '"';
  if (e !== '"' && e !== "'")
    throw new Error(
      "Cannot serialize title with `" + e + "` for `options.quote`, expected `\"`, or `'`"
    );
  return e;
}
function V1(t, e, n, r) {
  const i = Fl(n), s = i === '"' ? "Quote" : "Apostrophe", o = n.enter("definition");
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
  )), a(), t.title && (a = n.enter(`title${s}`), d += c.move(" " + i), d += c.move(
    n.safe(t.title, {
      before: d,
      after: i,
      ...c.current()
    })
  ), d += c.move(i), a()), o(), d;
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
function _i(t, e, n) {
  const r = wi(t), i = wi(e);
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
Nf.peek = U1;
function Nf(t, e, n, r) {
  const i = W1(n), s = n.enter("emphasis"), o = n.createTracker(r), a = o.move(i);
  let c = o.move(
    n.containerPhrasing(t, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const d = c.charCodeAt(0), f = _i(
    r.before.charCodeAt(r.before.length - 1),
    d,
    i
  );
  f.inside && (c = gr(d) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), h = _i(r.after.charCodeAt(0), u, i);
  h.inside && (c = c.slice(0, -1) + gr(u));
  const m = o.move(i);
  return s(), n.attentionEncodeSurroundingInfo = {
    after: h.outside,
    before: f.outside
  }, a + c + m;
}
function U1(t, e, n) {
  return n.options.emphasis || "*";
}
function G1(t, e) {
  let n = !1;
  return rg(t, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break")
      return n = !0, ig;
  }), !!((!t.depth || t.depth < 3) && Xd(t) && (e.options.setext || n));
}
function q1(t, e, n, r) {
  const i = Math.max(Math.min(6, t.depth || 1), 1), s = n.createTracker(r);
  if (G1(t, n)) {
    const f = n.enter("headingSetext"), u = n.enter("phrasing"), h = n.containerPhrasing(t, {
      ...s.current(),
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
  const o = "#".repeat(i), a = n.enter("headingAtx"), c = n.enter("phrasing");
  s.move(o + " ");
  let d = n.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...s.current()
  });
  return /^[\t ]/.test(d) && (d = gr(d.charCodeAt(0)) + d.slice(1)), d = d ? o + " " + d : o, n.options.closeAtx && (d += " " + o), c(), a(), d;
}
Sf.peek = K1;
function Sf(t) {
  return t.value || "";
}
function K1() {
  return "<";
}
If.peek = J1;
function If(t, e, n, r) {
  const i = Fl(n), s = i === '"' ? "Quote" : "Apostrophe", o = n.enter("image");
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
  )), a(), t.title && (a = n.enter(`title${s}`), d += c.move(" " + i), d += c.move(
    n.safe(t.title, {
      before: d,
      after: i,
      ...c.current()
    })
  ), d += c.move(i), a()), d += c.move(")"), o(), d;
}
function J1() {
  return "!";
}
Af.peek = Y1;
function Af(t, e, n, r) {
  const i = t.referenceType, s = n.enter("imageReference");
  let o = n.enter("label");
  const a = n.createTracker(r);
  let c = a.move("![");
  const d = n.safe(t.alt, {
    before: c,
    after: "]",
    ...a.current()
  });
  c += a.move(d + "]["), o();
  const f = n.stack;
  n.stack = [], o = n.enter("reference");
  const u = n.safe(n.associationId(t), {
    before: c,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = f, s(), i === "full" || !d || d !== u ? c += a.move(u + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += a.move("]"), c;
}
function Y1() {
  return "!";
}
Tf.peek = Q1;
function Tf(t, e, n) {
  let r = t.value || "", i = "`", s = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); )
    i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++s < n.unsafe.length; ) {
    const o = n.unsafe[s], a = n.compilePattern(o);
    let c;
    if (o.atBreak)
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
function Ef(t, e) {
  const n = Xd(t);
  return !!(!e.options.resourceLink && // If there’s a url…
  t.url && // And there’s a no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (n === t.url || "mailto:" + n === t.url) && // And that starts w/ a protocol…
  /^[a-z][a-z+.-]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
Df.peek = X1;
function Df(t, e, n, r) {
  const i = Fl(n), s = i === '"' ? "Quote" : "Apostrophe", o = n.createTracker(r);
  let a, c;
  if (Ef(t, n)) {
    const f = n.stack;
    n.stack = [], a = n.enter("autolink");
    let u = o.move("<");
    return u += o.move(
      n.containerPhrasing(t, {
        before: u,
        after: ">",
        ...o.current()
      })
    ), u += o.move(">"), a(), n.stack = f, u;
  }
  a = n.enter("link"), c = n.enter("label");
  let d = o.move("[");
  return d += o.move(
    n.containerPhrasing(t, {
      before: d,
      after: "](",
      ...o.current()
    })
  ), d += o.move("]("), c(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (c = n.enter("destinationLiteral"), d += o.move("<"), d += o.move(
    n.safe(t.url, { before: d, after: ">", ...o.current() })
  ), d += o.move(">")) : (c = n.enter("destinationRaw"), d += o.move(
    n.safe(t.url, {
      before: d,
      after: t.title ? " " : ")",
      ...o.current()
    })
  )), c(), t.title && (c = n.enter(`title${s}`), d += o.move(" " + i), d += o.move(
    n.safe(t.title, {
      before: d,
      after: i,
      ...o.current()
    })
  ), d += o.move(i), c()), d += o.move(")"), a(), d;
}
function X1(t, e, n) {
  return Ef(t, n) ? "<" : "[";
}
_f.peek = Z1;
function _f(t, e, n, r) {
  const i = t.referenceType, s = n.enter("linkReference");
  let o = n.enter("label");
  const a = n.createTracker(r);
  let c = a.move("[");
  const d = n.containerPhrasing(t, {
    before: c,
    after: "]",
    ...a.current()
  });
  c += a.move(d + "]["), o();
  const f = n.stack;
  n.stack = [], o = n.enter("reference");
  const u = n.safe(n.associationId(t), {
    before: c,
    after: "]",
    ...a.current()
  });
  return o(), n.stack = f, s(), i === "full" || !d || d !== u ? c += a.move(u + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += a.move("]"), c;
}
function Z1() {
  return "[";
}
function Ml(t) {
  const e = t.options.bullet || "*";
  if (e !== "*" && e !== "+" && e !== "-")
    throw new Error(
      "Cannot serialize items with `" + e + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return e;
}
function ew(t) {
  const e = Ml(t), n = t.options.bulletOther;
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
function Lf(t) {
  const e = t.options.rule || "*";
  if (e !== "*" && e !== "-" && e !== "_")
    throw new Error(
      "Cannot serialize rules with `" + e + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return e;
}
function nw(t, e, n, r) {
  const i = n.enter("list"), s = n.bulletCurrent;
  let o = t.ordered ? tw(n) : Ml(n);
  const a = t.ordered ? o === "." ? ")" : "." : ew(n);
  let c = e && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
  if (!t.ordered) {
    const f = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (o === "*" || o === "-") && // Empty first list item:
      f && (!f.children || !f.children[0]) && // Directly in two other list items:
      n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && // That are each the first child.
      n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), Lf(n) === o && f
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
  c && (o = a), n.bulletCurrent = o;
  const d = n.containerFlow(t, r);
  return n.bulletLastUsed = o, n.bulletCurrent = s, i(), d;
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
  let s = n.bulletCurrent || Ml(n);
  e && e.type === "list" && e.ordered && (s = (typeof e.start == "number" && e.start > -1 ? e.start : 1) + (n.options.incrementListMarker === !1 ? 0 : e.children.indexOf(t)) + s);
  let o = s.length + 1;
  (i === "tab" || i === "mixed" && (e && e.type === "list" && e.spread || t.spread)) && (o = Math.ceil(o / 4) * 4);
  const a = n.createTracker(r);
  a.move(s + " ".repeat(o - s.length)), a.shift(o);
  const c = n.enter("listItem"), d = n.indentLines(
    n.containerFlow(t, a.current()),
    f
  );
  return c(), d;
  function f(u, h, m) {
    return h ? (m ? "" : " ".repeat(o)) + u : (m ? s : s + " ".repeat(o - s.length)) + u;
  }
}
function sw(t, e, n, r) {
  const i = n.enter("paragraph"), s = n.enter("phrasing"), o = n.containerPhrasing(t, r);
  return s(), i(), o;
}
const ow = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Qd([
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
  return (t.children.some(function(o) {
    return ow(o);
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
Of.peek = cw;
function Of(t, e, n, r) {
  const i = aw(n), s = n.enter("strong"), o = n.createTracker(r), a = o.move(i + i);
  let c = o.move(
    n.containerPhrasing(t, {
      after: i,
      before: a,
      ...o.current()
    })
  );
  const d = c.charCodeAt(0), f = _i(
    r.before.charCodeAt(r.before.length - 1),
    d,
    i
  );
  f.inside && (c = gr(d) + c.slice(1));
  const u = c.charCodeAt(c.length - 1), h = _i(r.after.charCodeAt(0), u, i);
  h.inside && (c = c.slice(0, -1) + gr(u));
  const m = o.move(i + i);
  return s(), n.attentionEncodeSurroundingInfo = {
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
  const r = (Lf(n) + (n.options.ruleSpaces ? " " : "")).repeat(uw(n));
  return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Rf = {
  blockquote: F1,
  break: hc,
  code: B1,
  definition: V1,
  emphasis: Nf,
  hardBreak: hc,
  heading: q1,
  html: Sf,
  image: If,
  imageReference: Af,
  inlineCode: Tf,
  link: Df,
  linkReference: _f,
  list: nw,
  listItem: iw,
  paragraph: sw,
  root: lw,
  strong: Of,
  text: dw,
  thematicBreak: fw
};
function hw() {
  return {
    enter: {
      table: mw,
      tableData: mc,
      tableHeader: mc,
      tableRow: gw
    },
    exit: {
      codeText: bw,
      table: pw,
      tableData: Ws,
      tableHeader: Ws,
      tableRow: Ws
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
function Ws(t) {
  this.exit(t);
}
function mc(t) {
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
function xw(t) {
  const e = t || {}, n = e.tableCellPadding, r = e.tablePipeAlign, i = e.stringLength, s = n ? " " : "|";
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
      table: o,
      tableCell: c,
      tableRow: a
    }
  };
  function o(m, p, b, v) {
    return d(f(m, b, v), m.align);
  }
  function a(m, p, b, v) {
    const x = u(m, b, v), w = d([x]);
    return w.slice(0, w.indexOf(`
`));
  }
  function c(m, p, b, v) {
    const x = b.enter("tableCell"), w = b.enter("phrasing"), y = b.containerPhrasing(m, {
      ...v,
      before: s,
      after: s
    });
    return w(), x(), y;
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
    const v = m.children;
    let x = -1;
    const w = [], y = p.enter("table");
    for (; ++x < v.length; )
      w[x] = u(v[x], p, b);
    return y(), w;
  }
  function u(m, p, b) {
    const v = m.children;
    let x = -1;
    const w = [], y = p.enter("tableRow");
    for (; ++x < v.length; )
      w[x] = c(v[x], m, p, b);
    return y(), w;
  }
  function h(m, p, b) {
    let v = Rf.inlineCode(m, p, b);
    return b.stack.includes("tableCell") && (v = v.replace(/\|/g, "\\$&")), v;
  }
}
function yw() {
  return {
    exit: {
      taskListCheckValueChecked: pc,
      taskListCheckValueUnchecked: pc,
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
function pc(t) {
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
      let s = -1, o;
      for (; ++s < i.length; ) {
        const a = i[s];
        if (a.type === "paragraph") {
          o = a;
          break;
        }
      }
      o === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(t);
}
function Cw(t, e, n, r) {
  const i = t.children[0], s = typeof t.checked == "boolean" && i && i.type === "paragraph", o = "[" + (t.checked ? "x" : " ") + "] ", a = n.createTracker(r);
  s && a.move(o);
  let c = Rf.listItem(t, e, n, {
    ...r,
    ...a.current()
  });
  return s && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, d)), c;
  function d(f) {
    return f + o;
  }
}
function Nw() {
  return [
    n1(),
    C1(),
    A1(),
    hw(),
    yw()
  ];
}
function Sw(t) {
  return {
    extensions: [
      r1(),
      N1(t),
      T1(),
      xw(t),
      ww()
    ]
  };
}
const Iw = {
  tokenize: Lw,
  partial: !0
}, Ff = {
  tokenize: Ow,
  partial: !0
}, Mf = {
  tokenize: Rw,
  partial: !0
}, Pf = {
  tokenize: Fw,
  partial: !0
}, Aw = {
  tokenize: Mw,
  partial: !0
}, zf = {
  name: "wwwAutolink",
  tokenize: Dw,
  previous: jf
}, $f = {
  name: "protocolAutolink",
  tokenize: _w,
  previous: Bf
}, jt = {
  name: "emailAutolink",
  tokenize: Ew,
  previous: Hf
}, Tt = {};
function Tw() {
  return {
    text: Tt
  };
}
let en = 48;
for (; en < 123; )
  Tt[en] = jt, en++, en === 58 ? en = 65 : en === 91 && (en = 97);
Tt[43] = jt;
Tt[45] = jt;
Tt[46] = jt;
Tt[95] = jt;
Tt[72] = [jt, $f];
Tt[104] = [jt, $f];
Tt[87] = [jt, zf];
Tt[119] = [jt, zf];
function Ew(t, e, n) {
  const r = this;
  let i, s;
  return o;
  function o(u) {
    return !Ao(u) || !Hf.call(r, r.previous) || Pl(r.events) ? n(u) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), a(u));
  }
  function a(u) {
    return Ao(u) ? (t.consume(u), a) : u === 64 ? (t.consume(u), c) : n(u);
  }
  function c(u) {
    return u === 46 ? t.check(Aw, f, d)(u) : u === 45 || u === 95 || ul(u) ? (s = !0, t.consume(u), c) : f(u);
  }
  function d(u) {
    return t.consume(u), i = !0, c;
  }
  function f(u) {
    return s && i && lr(r.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), e(u)) : n(u);
  }
}
function Dw(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return o !== 87 && o !== 119 || !jf.call(r, r.previous) || Pl(r.events) ? n(o) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(Iw, t.attempt(Ff, t.attempt(Mf, s), n), n)(o));
  }
  function s(o) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), e(o);
  }
}
function _w(t, e, n) {
  const r = this;
  let i = "", s = !1;
  return o;
  function o(u) {
    return (u === 72 || u === 104) && Bf.call(r, r.previous) && !Pl(r.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), i += String.fromCodePoint(u), t.consume(u), a) : n(u);
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
    return u === 47 ? (t.consume(u), s ? d : (s = !0, c)) : n(u);
  }
  function d(u) {
    return u === null || sg(u) || Ke(u) || On(u) || dl(u) ? n(u) : t.attempt(Ff, t.attempt(Mf, f), n)(u);
  }
  function f(u) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), e(u);
  }
}
function Lw(t, e, n) {
  let r = 0;
  return i;
  function i(o) {
    return (o === 87 || o === 119) && r < 3 ? (r++, t.consume(o), i) : o === 46 && r === 3 ? (t.consume(o), s) : n(o);
  }
  function s(o) {
    return o === null ? n(o) : e(o);
  }
}
function Ow(t, e, n) {
  let r, i, s;
  return o;
  function o(d) {
    return d === 46 || d === 95 ? t.check(Pf, c, a)(d) : d === null || Ke(d) || On(d) || d !== 45 && dl(d) ? c(d) : (s = !0, t.consume(d), o);
  }
  function a(d) {
    return d === 95 ? r = !0 : (i = r, r = void 0), t.consume(d), o;
  }
  function c(d) {
    return i || r || !s ? n(d) : e(d);
  }
}
function Rw(t, e) {
  let n = 0, r = 0;
  return i;
  function i(o) {
    return o === 40 ? (n++, t.consume(o), i) : o === 41 && r < n ? s(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? t.check(Pf, e, s)(o) : o === null || Ke(o) || On(o) ? e(o) : (t.consume(o), i);
  }
  function s(o) {
    return o === 41 && r++, t.consume(o), i;
  }
}
function Fw(t, e, n) {
  return r;
  function r(a) {
    return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (t.consume(a), r) : a === 38 ? (t.consume(a), s) : a === 93 ? (t.consume(a), i) : (
      // `<` is an end.
      a === 60 || // So is whitespace.
      a === null || Ke(a) || On(a) ? e(a) : n(a)
    );
  }
  function i(a) {
    return a === null || a === 40 || a === 91 || Ke(a) || On(a) ? e(a) : r(a);
  }
  function s(a) {
    return lr(a) ? o(a) : n(a);
  }
  function o(a) {
    return a === 59 ? (t.consume(a), r) : lr(a) ? (t.consume(a), o) : n(a);
  }
}
function Mw(t, e, n) {
  return r;
  function r(s) {
    return t.consume(s), i;
  }
  function i(s) {
    return ul(s) ? n(s) : e(s);
  }
}
function jf(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || Ke(t);
}
function Bf(t) {
  return !lr(t);
}
function Hf(t) {
  return !(t === 47 || Ao(t));
}
function Ao(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || ul(t);
}
function Pl(t) {
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
  const s = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o;
  for (; i--; ) {
    const c = r.events[i][1];
    if (c.type === "labelImage") {
      o = c;
      break;
    }
    if (c.type === "gfmFootnoteCall" || c.type === "labelLink" || c.type === "label" || c.type === "image" || c.type === "link")
      break;
  }
  return a;
  function a(c) {
    if (!o || !o._balanced)
      return n(c);
    const d = Tr(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }));
    return d.codePointAt(0) !== 94 || !s.includes(d.slice(1)) ? n(c) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(c), t.exit("gfmFootnoteCallLabelMarker"), e(c));
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
  const s = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, o = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, s.start),
    end: Object.assign({}, s.end)
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
    ["enter", s, e],
    ["enter", o, e],
    ["exit", o, e],
    ["exit", s, e],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", r, e]
  ];
  return t.splice(n, t.length - n + 1, ...a), t;
}
function Bw(t, e, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s = 0, o;
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
      s > 999 || // Closing brace with nothing.
      u === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      u === null || u === 91 || Ke(u)
    )
      return n(u);
    if (u === 93) {
      t.exit("chunkString");
      const h = t.exit("gfmFootnoteCallString");
      return i.includes(Tr(r.sliceSerialize(h))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(u), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), e) : n(u);
    }
    return Ke(u) || (o = !0), s++, t.consume(u), u === 92 ? f : d;
  }
  function f(u) {
    return u === 91 || u === 92 || u === 93 ? (t.consume(u), s++, d) : d(u);
  }
}
function Hw(t, e, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s, o = 0, a;
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
      o > 999 || // Closing brace with nothing.
      p === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || Ke(p)
    )
      return n(p);
    if (p === 93) {
      t.exit("chunkString");
      const b = t.exit("gfmFootnoteDefinitionLabelString");
      return s = Tr(r.sliceSerialize(b)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(p), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), h;
    }
    return Ke(p) || (a = !0), o++, t.consume(p), p === 92 ? u : f;
  }
  function u(p) {
    return p === 91 || p === 92 || p === 93 ? (t.consume(p), o++, f) : f(p);
  }
  function h(p) {
    return p === 58 ? (t.enter("definitionMarker"), t.consume(p), t.exit("definitionMarker"), i.includes(s) || i.push(s), Vt(t, m, "gfmFootnoteDefinitionWhitespace")) : n(p);
  }
  function m(p) {
    return e(p);
  }
}
function Vw(t, e, n) {
  return t.check(og, e, t.attempt(Pw, e, n));
}
function Ww(t) {
  t.exit("gfmFootnoteDefinition");
}
function Uw(t, e, n) {
  const r = this;
  return Vt(t, i, "gfmFootnoteDefinitionIndent", 5);
  function i(s) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "gfmFootnoteDefinitionIndent" && o[2].sliceSerialize(o[1], !0).length === 4 ? e(s) : n(s);
  }
}
function Gw(t) {
  let n = (t || {}).singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: s,
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
  function i(o, a) {
    let c = -1;
    for (; ++c < o.length; )
      if (o[c][0] === "enter" && o[c][1].type === "strikethroughSequenceTemporary" && o[c][1]._close) {
        let d = c;
        for (; d--; )
          if (o[d][0] === "exit" && o[d][1].type === "strikethroughSequenceTemporary" && o[d][1]._open && // If the sizes are the same:
          o[c][1].end.offset - o[c][1].start.offset === o[d][1].end.offset - o[d][1].start.offset) {
            o[c][1].type = "strikethroughSequence", o[d][1].type = "strikethroughSequence";
            const f = {
              type: "strikethrough",
              start: Object.assign({}, o[d][1].start),
              end: Object.assign({}, o[c][1].end)
            }, u = {
              type: "strikethroughText",
              start: Object.assign({}, o[d][1].end),
              end: Object.assign({}, o[c][1].start)
            }, h = [["enter", f, a], ["enter", o[d][1], a], ["exit", o[d][1], a], ["enter", u, a]], m = a.parser.constructs.insideSpan.null;
            m && Rs(h, h.length, 0, lg(m, o.slice(d + 1, c), a)), Rs(h, h.length, 0, [["exit", u, a], ["enter", o[c][1], a], ["exit", o[c][1], a], ["exit", f, a]]), Rs(o, d - 1, c - d + 3, h), c = d + h.length - 2;
            break;
          }
      }
    for (c = -1; ++c < o.length; )
      o[c][1].type === "strikethroughSequenceTemporary" && (o[c][1].type = "data");
    return o;
  }
  function s(o, a, c) {
    const d = this.previous, f = this.events;
    let u = 0;
    return h;
    function h(p) {
      return d === 126 && f[f.length - 1][1].type !== "characterEscape" ? c(p) : (o.enter("strikethroughSequenceTemporary"), m(p));
    }
    function m(p) {
      const b = wi(d);
      if (p === 126)
        return u > 1 ? c(p) : (o.consume(p), u++, m);
      if (u < 2 && !n) return c(p);
      const v = o.exit("strikethroughSequenceTemporary"), x = wi(p);
      return v._open = !x || x === 2 && !!b, v._close = !b || b === 2 && !!x, a(p);
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
    if (this.map.sort(function(s, o) {
      return s[0] - o[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(e.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), e.length = this.map[n][0];
    r.push(e.slice()), e.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const s of i)
        e.push(s);
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
          const s = r.length - 1;
          r[s] = r[s] === "left" ? "center" : "right";
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
  let i = 0, s = 0, o;
  return a;
  function a(N) {
    let _ = r.events.length - 1;
    for (; _ > -1; ) {
      const O = r.events[_][1].type;
      if (O === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      O === "linePrefix") _--;
      else break;
    }
    const A = _ > -1 ? r.events[_][1].type : null, L = A === "tableHead" || A === "tableRow" ? k : c;
    return L === k && r.parser.lazy[r.now().line] ? n(N) : L(N);
  }
  function c(N) {
    return t.enter("tableHead"), t.enter("tableRow"), d(N);
  }
  function d(N) {
    return N === 124 || (o = !0, s += 1), f(N);
  }
  function f(N) {
    return N === null ? n(N) : ir(N) ? s > 1 ? (s = 0, r.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(N), t.exit("lineEnding"), m) : n(N) : Cn(N) ? Vt(t, f, "whitespace")(N) : (s += 1, o && (o = !1, i += 1), N === 124 ? (t.enter("tableCellDivider"), t.consume(N), t.exit("tableCellDivider"), o = !0, f) : (t.enter("data"), u(N)));
  }
  function u(N) {
    return N === null || N === 124 || Ke(N) ? (t.exit("data"), f(N)) : (t.consume(N), N === 92 ? h : u);
  }
  function h(N) {
    return N === 92 || N === 124 ? (t.consume(N), u) : u(N);
  }
  function m(N) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(N) : (t.enter("tableDelimiterRow"), o = !1, Cn(N) ? Vt(t, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(N) : p(N));
  }
  function p(N) {
    return N === 45 || N === 58 ? v(N) : N === 124 ? (o = !0, t.enter("tableCellDivider"), t.consume(N), t.exit("tableCellDivider"), b) : S(N);
  }
  function b(N) {
    return Cn(N) ? Vt(t, v, "whitespace")(N) : v(N);
  }
  function v(N) {
    return N === 58 ? (s += 1, o = !0, t.enter("tableDelimiterMarker"), t.consume(N), t.exit("tableDelimiterMarker"), x) : N === 45 ? (s += 1, x(N)) : N === null || ir(N) ? E(N) : S(N);
  }
  function x(N) {
    return N === 45 ? (t.enter("tableDelimiterFiller"), w(N)) : S(N);
  }
  function w(N) {
    return N === 45 ? (t.consume(N), w) : N === 58 ? (o = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(N), t.exit("tableDelimiterMarker"), y) : (t.exit("tableDelimiterFiller"), y(N));
  }
  function y(N) {
    return Cn(N) ? Vt(t, E, "whitespace")(N) : E(N);
  }
  function E(N) {
    return N === 124 ? p(N) : N === null || ir(N) ? !o || i !== s ? S(N) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), e(N)) : S(N);
  }
  function S(N) {
    return n(N);
  }
  function k(N) {
    return t.enter("tableRow"), I(N);
  }
  function I(N) {
    return N === 124 ? (t.enter("tableCellDivider"), t.consume(N), t.exit("tableCellDivider"), I) : N === null || ir(N) ? (t.exit("tableRow"), e(N)) : Cn(N) ? Vt(t, I, "whitespace")(N) : (t.enter("data"), T(N));
  }
  function T(N) {
    return N === null || N === 124 || Ke(N) ? (t.exit("data"), I(N)) : (t.consume(N), N === 92 ? D : T);
  }
  function D(N) {
    return N === 92 || N === 124 ? (t.consume(N), T) : T(N);
  }
}
function Xw(t, e) {
  let n = -1, r = !0, i = 0, s = [0, 0, 0, 0], o = [0, 0, 0, 0], a = !1, c = 0, d, f, u;
  const h = new qw();
  for (; ++n < t.length; ) {
    const m = t[n], p = m[1];
    m[0] === "enter" ? p.type === "tableHead" ? (a = !1, c !== 0 && (gc(h, e, c, d, f), f = void 0, c = 0), d = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, h.add(n, 0, [["enter", d, e]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, u = void 0, s = [0, 0, 0, 0], o = [0, n + 1, 0, 0], a && (a = !1, f = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, h.add(n, 0, [["enter", f, e]])), i = p.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (s[1] !== 0 && (o[0] = o[1], u = Yr(h, e, s, i, void 0, u), s = [0, 0, 0, 0]), o[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (s[1] !== 0 && (o[0] = o[1], u = Yr(h, e, s, i, void 0, u)), s = o, o = [s[1], n, 0, 0])) : p.type === "tableHead" ? (a = !0, c = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (c = n, s[1] !== 0 ? (o[0] = o[1], u = Yr(h, e, s, i, n, u)) : o[1] !== 0 && (u = Yr(h, e, o, i, n, u)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (o[3] = n);
  }
  for (c !== 0 && gc(h, e, c, d, f), h.consume(e.events), n = -1; ++n < e.events.length; ) {
    const m = e.events[n];
    m[0] === "enter" && m[1].type === "table" && (m[1]._align = Jw(e.events, n));
  }
  return t;
}
function Yr(t, e, n, r, i, s) {
  const o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
  n[0] !== 0 && (s.end = Object.assign({}, Nn(e.events, n[0])), t.add(n[0], 0, [["exit", s, e]]));
  const c = Nn(e.events, n[1]);
  if (s = {
    type: o,
    start: Object.assign({}, c),
    // Note: correct end is set later.
    end: Object.assign({}, c)
  }, t.add(n[1], 0, [["enter", s, e]]), n[2] !== 0) {
    const d = Nn(e.events, n[2]), f = Nn(e.events, n[3]), u = {
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
  return i !== void 0 && (s.end = Object.assign({}, Nn(e.events, i)), t.add(i, 0, [["exit", s, e]]), s = void 0), s;
}
function gc(t, e, n, r, i) {
  const s = [], o = Nn(e.events, n);
  i && (i.end = Object.assign({}, o), s.push(["exit", i, e])), r.end = Object.assign({}, o), s.push(["exit", r, e]), t.add(n + 1, 0, s);
}
function Nn(t, e) {
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
      !r._gfmTasklistFirstContentOfListItem ? n(c) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(c), t.exit("taskListCheckMarker"), s)
    );
  }
  function s(c) {
    return Ke(c) ? (t.enter("taskListCheckValueUnchecked"), t.consume(c), t.exit("taskListCheckValueUnchecked"), o) : c === 88 || c === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(c), t.exit("taskListCheckValueChecked"), o) : n(c);
  }
  function o(c) {
    return c === 93 ? (t.enter("taskListCheckMarker"), t.consume(c), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), a) : n(c);
  }
  function a(c) {
    return ir(c) ? e(c) : Cn(c) ? t.check({
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
  return ag([
    Tw(),
    zw(),
    Gw(t),
    Yw(),
    ek()
  ]);
}
const ik = {};
function sk(t) {
  const e = (
    /** @type {Processor<Root>} */
    this
  ), n = t || ik, r = e.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), s = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), o = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(rk(n)), s.push(Nw()), o.push(Sw(n));
}
const ok = cg().use(dg).use(sk).use(ug).use(fg), lk = J(function({ content: e, className: n, format: r = "html", ...i }, s) {
  const o = z(() => Zd.sanitize(r === "markdown" ? String(ok.processSync(e)) : e, {
    ADD_ATTR: ["target"],
    ALLOWED_ATTR: ["href", "target", "rel", "class"]
  }), [r, e]), a = /<[^>]*>/.test(o);
  return l("div", {
    ref: s,
    className: C("rich-text-display-container", !a && "whitespace-pre-wrap", n),
    dangerouslySetInnerHTML: {
      __html: o
    },
    ...i
  });
}), ak = J(function({ title: e, onClose: n, content: r, primaryAction: i, secondaryAction: s }, o) {
  return g("div", {
    ref: o,
    className: "flex w-full flex-col rounded-lg bg-gradient-to-l from-[#A1ADE51F] via-[#E519431F] to-[#E556191F] p-[1px]",
    children: [g("div", {
      className: "flex flex-row items-center justify-between px-4 py-2",
      children: [l(Ve, {
        className: "font-medium",
        children: e
      }), n && l(j, {
        variant: "ghost",
        icon: Zt,
        size: "sm",
        hideLabel: !0,
        onClick: n,
        label: "Close"
      })]
    }), g("div", {
      className: "flex flex-col gap-[1px]",
      children: [l("div", {
        className: C("bg-f1-background px-4 py-3", s || i ? "rounded-t-[13.25px]" : "rounded-[13.25px]"),
        children: l(lk, {
          content: r
        })
      }), (s || i) && g("div", {
        className: "flex flex-row items-center justify-between gap-3 rounded-b-[13.25px] bg-f1-background px-4 py-3",
        children: [l("div", {
          children: s && l(j, {
            label: s.label,
            onClick: s.onClick,
            variant: "outline",
            icon: s.icon
          })
        }), l("div", {
          children: i && l(j, {
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
}), Vf = J((t, e) => l(ak, {
  ref: e,
  ...t
})), dk = ({ compact: t }) => l(ck, {
  compact: t
});
Vf.displayName = "F0AiBanner";
const Wf = Ne(Vf, dk), uk = (t) => {
  if (!t?.content) return "";
  try {
    return m0(t.content, [Ru, Fu, Mu, p0, Pu, zu, $u, ju, Bu, Hu, af, df, cf]);
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
  const [n, r] = F(!1), i = ne(async (s) => {
    const o = t.buttons?.find((c) => c.type === s), a = {
      selectedAction: s,
      selectedTitle: o?.label || s,
      selectedEmoji: o?.emoji || "🤖",
      isEditable: o?.editable ?? !1
    };
    r(!0), e({
      data: {
        ...a,
        content: null
      }
    });
    try {
      const c = await t.onClick(s);
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
      const i = t.buttons.find((s) => s.type === n.selectedAction);
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
    children: t.buttons?.map((r, i) => l(j, {
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
}) : l(Wf.Skeleton, {
  compact: !0
}), xk = ({ node: t, updateAttributes: e, deleteNode: n, extension: r, editor: i, getPos: s }) => {
  const o = t.attrs.data, a = r.options.currentConfig || t.attrs.config, { title: c } = fk(a, o), { isLoading: d, handleClick: f } = hk(a, e), u = !!(o?.selectedAction && !o?.content), h = d || u, m = uk(o);
  if (gk(i, n, s, o), mk(a, e, o), pk(o, f, e), !o || !a || !a.buttons?.length) return null;
  const p = !!o?.content, v = !!(o?.selectedTitle || o?.selectedAction) && p && !o?.isEditable;
  return l(ts, {
    contentEditable: !1,
    children: g("div", {
      className: "mb-3",
      children: [h ? l(vk, {
        isEditable: o?.isEditable
      }) : v ? l(Wf, {
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
}, yk = gt.create({
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
    return es(xk);
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
}), wk = yk, Uf = ["paragraph", "heading", "blockquote", "codeBlock", "bulletList", "orderedList", "listItem", "table", "details"], bc = new Set(Uf), kk = mn.create({
  name: "blockId",
  addGlobalAttributes() {
    return [{
      types: Uf,
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
      key: new Ue("blockIdPlugin"),
      appendTransaction: (t, e, n) => {
        if (!t.some((a) => a.docChanged))
          return null;
        const i = n.tr;
        let s = !1;
        const o = [];
        return t.forEach((a) => {
          a.docChanged && a.steps.forEach((c) => {
            c.getMap().forEach((f, u, h, m) => {
              const p = a.mapping.map(h), b = a.mapping.map(m), v = Math.max(0, Math.min(p, n.doc.content.size)), x = Math.max(0, Math.min(b, n.doc.content.size));
              v < x && o.push({
                from: v,
                to: x
              });
            });
          });
        }), o.length > 0 ? o.forEach(({ from: a, to: c }) => {
          a >= 0 && c <= n.doc.content.size && a < c && n.doc.nodesBetween(a, c, (d, f) => {
            if (bc.has(d.type.name) && !d.attrs.id) {
              const u = bo(5);
              i.setNodeMarkup(f, void 0, {
                ...d.attrs,
                id: u
              }), s = !0;
            }
          });
        }) : n.doc.descendants((a, c) => {
          if (bc.has(a.type.name) && !a.attrs.id) {
            const d = bo(5);
            i.setNodeMarkup(c, void 0, {
              ...a.attrs,
              id: d
            }), s = !0;
          }
          return !0;
        }), s ? i : null;
      }
    })];
  }
});
var Ck = ({ key: t, editor: e, onPaste: n, onDrop: r, allowedMimeTypes: i }) => new It({
  key: t || new Ue("fileHandler"),
  props: {
    handleDrop(s, o) {
      var a;
      if (!r || !((a = o.dataTransfer) != null && a.files.length))
        return !1;
      const c = s.posAtCoords({
        left: o.clientX,
        top: o.clientY
      });
      let d = Array.from(o.dataTransfer.files);
      return i && (d = d.filter((f) => i.includes(f.type))), d.length === 0 ? !1 : (o.preventDefault(), o.stopPropagation(), r(e, d, c?.pos || 0), !0);
    },
    handlePaste(s, o) {
      var a;
      if (!n || !((a = o.clipboardData) != null && a.files.length))
        return !1;
      let c = Array.from(o.clipboardData.files);
      const d = o.clipboardData.getData("text/html");
      return i && (c = c.filter((f) => i.includes(f.type))), !(c.length === 0 || (o.preventDefault(), o.stopPropagation(), n(e, c, d), d.length > 0));
    }
  }
}), Nk = mn.create({
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
        key: new Ue(this.name),
        editor: this.editor,
        allowedMimeTypes: this.options.allowedMimeTypes,
        onDrop: this.options.onDrop,
        onPaste: this.options.onPaste
      })
    ];
  }
});
const Sk = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Ik = gt.create({
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
    return ["img", ut(this.options.HTMLAttributes, t)];
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
}), Ak = 15 * 1024 * 1024, zl = ["image/jpeg", "image/png", "image/gif", "image/webp"], Tk = ({ node: t, deleteNode: e, selected: n, editor: r }) => {
  const { src: i, alt: s, title: o, uploading: a } = t.attrs, c = r.isEditable, d = X();
  return l(ts, {
    className: "mb-2",
    children: g("div", {
      className: C("relative inline-block rounded-lg", n && "border-2 border-f1-border-selected-bold border-solid"),
      children: [l("img", {
        src: i,
        alt: s,
        title: o,
        draggable: !1,
        className: "block h-auto w-full rounded-md transition-all duration-150 ease-out"
      }), a && l("div", {
        className: "absolute inset-0 flex items-center justify-center rounded-lg bg-f1-background-secondary backdrop-blur-[2px] transition-opacity duration-200",
        children: l(sn, {
          size: "medium"
        })
      }), c && !a && l("div", {
        className: "dark absolute right-2 top-2",
        children: l(j, {
          onClick: e,
          label: d.actions.delete,
          icon: hn,
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
    return es(Tk);
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", ut(this.options.HTMLAttributes, t)];
  }
}).configure({
  inline: !1,
  allowBase64: !0
}), To = async (t, e, n, r) => {
  const i = n.maxFileSize ?? Ak, { onError: s } = n;
  if (!zl.includes(e.type)) {
    s?.("invalid-type");
    return;
  }
  if (e.size > i) {
    s?.("file-too-large");
    return;
  }
  const o = URL.createObjectURL(e), a = `upload-${Date.now()}-${Math.random().toString(36).slice(2)}`, c = r ?? t.state.selection.anchor;
  t.chain().focus().insertContentAt(c, [{
    type: "image",
    attrs: {
      src: o,
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
    s?.("upload-failed");
    const { doc: d } = t.state;
    d.descendants((f, u) => f.type.name === "image" && f.attrs["data-upload-id"] === a ? (t.chain().setNodeSelection(u).deleteSelection().run(), !1) : !0);
  } finally {
    URL.revokeObjectURL(o);
  }
}, Dk = (t) => Nk.configure({
  allowedMimeTypes: zl,
  onDrop: (e, n, r) => {
    n.forEach((i) => {
      To(e, i, t, r);
    });
  },
  onPaste: (e, n) => {
    n.forEach((r) => {
      To(e, r, t);
    });
  }
}), Gf = (t, e, n) => {
  To(t, e, n);
}, Eo = {
  superNegative: bg,
  negative: gg,
  neutral: pg,
  positive: mg,
  superPositive: hg
}, Do = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive"
}, qf = ({ firstName: t, lastName: e, src: n, "aria-label": r, "aria-labelledby": i, pulse: s, onPulseClick: o }) => {
  const a = X(), [c, d] = F(!s);
  return l("div", {
    className: "relative h-10 w-10",
    children: l(Ae, {
      mode: "popLayout",
      initial: !!c,
      children: c ? l(G.div, {
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
        children: l(G.div, {
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
          children: l(Er, {
            emoji: "👋",
            size: "md"
          })
        }, "wave")
      }) : g(G.div, {
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
        children: [l(eu, {
          type: "rounded",
          name: [t, e],
          src: n,
          size: "lg",
          color: "random",
          "aria-label": r,
          "aria-labelledby": i
        }), s ? l("div", {
          className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background",
          children: l(fl, {
            variant: "neutral",
            size: "sm",
            compact: !0,
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation(), o();
            },
            "aria-label": a.actions.edit,
            children: l(q, {
              icon: Eo[s],
              color: Do[s],
              size: "sm"
            })
          })
        }) : l(G.div, {
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
            icon: vg,
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation(), o();
            },
            hideLabel: !0
          })
        }, "reaction-button")]
      }, "avatar")
    })
  });
};
qf.displayName = "PulseAvatar";
const _k = ({ node: t, deleteNode: e, updateAttributes: n }) => {
  const r = X(), [i, s] = F(t.attrs.isOpen ?? !1), o = t.attrs.data;
  if (!o) return null;
  const a = () => {
    const d = !i;
    s(d), n({
      isOpen: d
    });
  }, c = [{
    label: r.actions.delete,
    icon: hn,
    critical: !0,
    onClick: () => e()
  }];
  return g(ts, {
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
                children: o.title
              }), l("div", {
                className: "flex flex-row items-center",
                children: o.days.map((d, f) => l("div", {
                  className: "-ml-1.5 flex items-center justify-center rounded-full bg-f1-background",
                  children: l(q, {
                    icon: Eo[d.mood],
                    size: "lg",
                    color: Do[d.mood]
                  })
                }, f))
              })]
            }), l("p", {
              children: l("span", {
                className: "text-f1-text-primary text-md font-normal",
                children: o.averageMoodComment
              })
            })]
          })
        }), g("div", {
          className: "flex flex-row items-center gap-1",
          children: [l(j, {
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
        children: o.days.map((d, f) => g("div", {
          className: "flex flex-row items-center gap-2",
          children: [l("div", {
            className: "flex items-center justify-center rounded-full",
            children: l(q, {
              icon: Eo[d.mood],
              size: "lg",
              color: Do[d.mood]
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
}, Lk = gt.create({
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
    return es(_k);
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
}), Ok = Lk, Rk = ({ aiBlockConfig: t, translations: e, imageUploadConfig: n }) => _o({
  aiBlockConfig: t,
  translations: e,
  imageUploadConfig: n
}).flatMap((i) => i.commands), _o = ({ aiBlockConfig: t, translations: e, imageUploadConfig: n }) => [...t?.buttons && t.buttons.length > 0 ? [{
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
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleHeading({
        level: 1
      }).run();
    },
    icon: xg
  }, {
    title: e.richTextEditor.heading2,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleHeading({
        level: 2
      }).run();
    },
    icon: yg
  }, {
    title: e.richTextEditor.heading3,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleHeading({
        level: 3
      }).run();
    },
    icon: wg
  }]
}, {
  title: e.richTextEditor.groups.lists,
  commands: [{
    title: e.richTextEditor.bulletList,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleBulletList().run();
    },
    icon: hl
  }, {
    title: e.richTextEditor.orderedList,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleOrderedList().run();
    },
    icon: kg
  }, {
    title: e.richTextEditor.taskList,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleTaskList().run();
    },
    icon: tu
  }]
}, {
  title: e.richTextEditor.groups.blocks,
  commands: [...n ? [{
    title: "Image",
    command: (r) => {
      const i = document.createElement("input");
      i.type = "file", i.accept = zl.join(","), i.onchange = () => {
        const s = i.files?.[0];
        s && Gf(r, s, n);
      }, i.click();
    },
    icon: Cg
  }] : [], {
    title: e.richTextEditor.details,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).setDetails().run();
    },
    icon: Vn
  }, {
    title: e.richTextEditor.codeBlock,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleCodeBlock().run();
    },
    icon: Ng
  }, {
    title: e.richTextEditor.quote,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).toggleBlockquote().run();
    },
    icon: Sg
  }, {
    title: e.richTextEditor.divider,
    command: (r) => {
      const { from: i, to: s } = r.state.selection;
      r.chain().focus().setTextSelection({
        from: i,
        to: s
      }).setHorizontalRule().run();
    },
    icon: Ig
  }]
}], Kf = J(({ items: t, groups: e, command: n }, r) => {
  const [i, s] = F(0), o = W(null), a = W(null), c = e || [{
    title: "",
    commands: t
  }], d = c.flatMap((v) => v.commands), f = ne((v) => {
    const x = d[v];
    x && n(x);
  }, [d, n]), u = ne((v) => {
    const x = o.current;
    if (!x) return;
    const w = x.getBoundingClientRect(), y = v.getBoundingClientRect();
    y.top < w.top ? x.scrollTop += y.top - w.top : y.bottom > w.bottom && (x.scrollTop += y.bottom - w.bottom);
  }, []), h = ne(() => {
    s((v) => v <= 0 ? d.length - 1 : v - 1);
  }, [d.length]), m = ne(() => {
    s((v) => v >= d.length - 1 ? 0 : v + 1);
  }, [d.length]), p = ne(() => {
    f(i);
  }, [i, f]);
  V(() => {
    a.current && u(a.current);
  }, [i, u]), V(() => {
    s(0);
  }, [t.length]), Iu(r, () => ({
    onKeyDown: ({ event: v }) => v.key === "ArrowUp" ? (v.preventDefault(), h(), !0) : v.key === "ArrowDown" ? (v.preventDefault(), m(), !0) : v.key === "Enter" ? (v.preventDefault(), p(), !0) : !1
  }), [h, m, p]);
  const b = (v, x) => {
    let w = 0;
    for (let y = 0; y < v; y++)
      w += c[y].commands.length;
    return w + x;
  };
  return l("div", {
    ref: o,
    className: "scrollbar-macos max-h-96 w-72 overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background drop-shadow-md",
    children: c.map((v, x) => g("div", {
      children: [g("div", {
        className: "p-1",
        children: [e && v.title && l("div", {
          className: "p-2",
          children: l("p", {
            className: "text-sm font-medium tracking-wide text-f1-foreground-secondary",
            children: v.title
          })
        }), v.commands.map((w, y) => {
          const E = b(x, y), S = E === i;
          return g("div", {
            ref: S ? a : null,
            className: C("flex w-full cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-left text-sm hover:bg-f1-background-hover", S && "bg-f1-background-secondary"),
            onClick: () => {
              s(E), f(E);
            },
            onMouseEnter: () => s(E),
            children: [w.emoji ? l("span", {
              className: "text-base",
              children: w.emoji
            }) : w.icon ? l(q, {
              icon: w.icon,
              className: "text-f1-foreground-secondary"
            }) : null, l("p", {
              className: "flex-grow text-sm font-medium text-f1-foreground",
              children: w.title
            })]
          }, `${x}-${y}`);
        })]
      }), e && x < c.length - 1 && l("div", {
        className: "py-1",
        children: l("div", {
          className: "h-[1px] w-full bg-f1-border-secondary"
        })
      })]
    }, x))
  });
});
Kf.displayName = "CommandList";
const Fk = ({ aiBlockConfig: t, translations: e, imageUploadConfig: n }) => mn.create({
  name: "slashCommand",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        allowSpaces: !0,
        allowedPrefixes: [" ", `
`],
        startOfLine: !1,
        command: ({ editor: r, range: i, props: s }) => {
          const { state: o } = r, { from: a, to: c } = o.selection, f = o.doc.resolve(a), h = f.parent.textBetween(Math.max(0, f.parentOffset - 50), f.parentOffset, void 0, "￼").lastIndexOf("/");
          if (h !== -1) {
            const m = a - (f.parentOffset - h), p = c;
            r.chain().focus().deleteRange({
              from: m,
              to: p
            }).run();
          } else
            r.chain().focus().deleteRange(i).run();
          s.command(r);
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [b0({
      editor: this.editor,
      ...this.options.suggestion,
      items: ({ query: r }) => {
        const i = r.toLowerCase().trim(), s = Rk({
          translations: e,
          aiBlockConfig: t,
          imageUploadConfig: n
        }).filter((o) => {
          const a = o.title.toLowerCase();
          return i ? a.includes(i) : !0;
        });
        return s.length > 0 ? s : [];
      },
      render: () => {
        let r = null, i = null, s = null;
        const o = () => {
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
          return g(Ag, {
            open: !0,
            modal: !1,
            children: [l("div", {
              style: f
            }), l(Tg, {
              asChild: !0,
              children: l("div", {
                style: f
              })
            }), l(Eg, {
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
            const d = _o({
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
            r = new v0(Kf, {
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
              return o();
            })();
            s = document.createElement("div"), document.body.appendChild(s), i = x0.createRoot(s), i.render(l(a, {
              content: r.element,
              anchorRect: h,
              editor: c.editor
            }));
          },
          onUpdate: (c) => {
            if (!r || !s || !i) return;
            const d = _o({
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
              s && (s.style.display = "none");
            else {
              s && (s.style.display = "");
              const h = (() => {
                if (c.clientRect) {
                  const m = c.clientRect();
                  if (m && m.width && m.height) return m;
                }
                return o();
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
              return i && s && (i.unmount(), s.remove()), !0;
            const d = r?.ref;
            return d && typeof d == "object" && "onKeyDown" in d && typeof d.onKeyDown == "function" && d.onKeyDown(c) || !1;
          },
          onExit() {
            i && s && (i.unmount(), s.remove()), r?.destroy();
          }
        };
      }
    })];
  }
}), Mk = ({ node: t, deleteNode: e, updateAttributes: n }) => {
  const r = X(), [i, s] = F(t.attrs.isOpen ?? !1), o = t.attrs.data;
  if (!o) return null;
  const a = () => {
    const u = !i;
    s(u), n({
      isOpen: u
    });
  }, c = [{
    label: r.actions.delete,
    icon: hn,
    critical: !0,
    onClick: () => e()
  }], d = (u) => o.users.find((h) => h.id === u), f = (u) => {
    try {
      const h = new Date(u);
      return nu(h, "HH:mm");
    } catch (h) {
      return console.error(h), u;
    }
  };
  return g(ts, {
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
                children: o.title
              })
            }), l("p", {
              className: "text-f1-text-secondary text-sm",
              children: o.messages.length
            })]
          })
        }), g("div", {
          className: "flex flex-row items-center gap-1",
          children: [l(j, {
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
        children: o.messages.map((u, h) => {
          const m = d(u.userId);
          return g("div", {
            className: "flex flex-row gap-3",
            children: [m?.imageUrl && l(Ct, {
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
}, Pk = gt.create({
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
    return es(Mk);
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
  return g(G.div, {
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
        icon: Dg,
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
  const { open: e, shouldPlayEntranceAnimation: n, setShouldPlayEntranceAnimation: r, autoClearMinutes: i } = ls();
  return jk({
    reset: () => {
    },
    isOpen: e,
    autoClearMinutes: i
  }), l(Ae, {
    children: e && l(G.div, {
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
      children: l(G.div, {
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
}, Vk = ({ enabled: t = !1, greeting: e, title: n, description: r, benefits: i, actions: s, onShow: o, onHide: a, children: c }) => l(Cx, {
  enabled: t,
  greeting: e,
  title: n,
  description: r,
  benefits: i,
  actions: s,
  onShow: o,
  onHide: a,
  children: c
}), Wk = () => {
  const { enabled: t, greeting: e, title: n, description: r, benefits: i, actions: s, setOpen: o, onHide: a } = ls(), c = () => {
    o(!1), a?.();
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
          icon: Zt,
          onClick: c
        })
      }), l("div", {
        className: "flex-1 content-center overflow-y-auto",
        children: g("div", {
          className: "flex flex-col gap-4 p-6 pt-3",
          children: [g("div", {
            className: "flex flex-col gap-4",
            children: [l(nf, {
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
          }), s?.length && l("div", {
            className: "flex flex-col gap-3 pt-2",
            children: s.map((d, f) => l(Hk, {
              action: d,
              onClose: () => o(!1)
            }, f))
          })]
        })
      }), l("div", {
        className: "m-3 mt-2 flex-shrink-0",
        children: l($k, {})
      })]
    })
  }) : null;
}, Uk = oe("AiPromotionChat", Wk), Gk = oe("AiPromotionChatProvider", Vk), Jf = St({
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
}), vc = {
  positive: ml,
  warning: iu,
  info: ru
}, xc = {
  positive: "text-f1-foreground-positive font-medium",
  warning: "text-f1-foreground-warning font-medium",
  info: "text-f1-foreground-info font-medium"
}, qk = J(function({ title: e, onClose: n, children: r, actions: i = [], variant: s }, o) {
  if (i.length > 2)
    throw new Error(`F0Callout: Maximum of 2 actions allowed, but ${i.length} actions were provided.`);
  const a = i.length > 0;
  return g("div", {
    ref: o,
    className: Jf({
      variant: s
    }),
    children: [g("div", {
      className: "flex flex-row items-center justify-between px-4 py-2",
      children: [g("div", {
        className: C("flex flex-row items-center gap-2", xc[s]),
        children: [vc[s] && l(q, {
          icon: vc[s],
          size: "sm",
          "aria-hidden": !0
        }), l(Ve, {
          className: xc[s] || "font-medium",
          children: e
        })]
      }), n && l(j, {
        variant: "ghost",
        icon: Zt,
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
          children: l(j, {
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
  className: Jf({
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
}), Yf = J((t, e) => l(qk, {
  ref: e,
  ...t
})), Jk = ({ compact: t, variant: e }) => l(Kk, {
  compact: t,
  variant: e
});
Yf.displayName = "F0Callout";
const b_ = Ne(Yf, Jk), Yk = ({ data: t, dataConfig: e, scaleMin: n, scaleMax: r, aspect: i }, s) => {
  const o = Object.keys(e), a = t.map((c) => ({
    subject: c.label,
    ...c.values
  }));
  return l(w0, {
    config: e,
    ref: s,
    aspect: i,
    "data-chromatic": "ignore",
    children: g(mx, {
      accessibilityLayer: !0,
      data: a,
      children: [l(k0, {
        cursor: !0,
        animationDuration: 100,
        offset: 20,
        content: l(C0, {
          indicator: "dot"
        })
      }), l(Xu, {
        gridType: "circle"
      }), l(Eu, {
        dataKey: "subject"
      }), l(Du, {
        angle: 90,
        type: "number",
        domain: [n ?? "dataMin", r ?? "dataMax"]
      }), o.map((c, d) => l(Or, {
        dataKey: c,
        fill: e[c].color ? Oa(e[c].color) : Ra(d),
        stroke: e[c].color ? Oa(e[c].color) : Ra(d),
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
}, v_ = y0(oe("RadarChart", Yk)), Qk = G.create(_g), Xk = () => {
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
var eC = hx();
const yc = /* @__PURE__ */ jd(eC), Qf = (t) => {
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
}, Xf = (t) => {
  if (!t || t.length === 0) return null;
  const e = t.length, n = t.every((r) => /^\d+$/.test(r.label.trim()));
  return e === 5 && n ? "1-5" : e === 10 && n ? "1-10" : e === 5 && !n ? "emojis" : null;
}, Lo = (t) => {
  switch (t) {
    case "rating":
      return {
        value: 0,
        options: Qf("1-5")
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
}, Qr = (t) => `new-${t}-${Date.now()}`, wc = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date"
], tC = (t) => {
  if (!t)
    return wc[0];
  const e = wc.find(
    (n) => t?.includes(n)
  );
  if (!e)
    throw new Error(
      `No default question type found for allowed question types: ${t.join(", ")}`
    );
  return e;
}, Zf = zt(void 0);
function nC({ elements: t, children: e, isEditMode: n, disallowOptionalQuestions: r, onChange: i, allowedQuestionTypes: s }) {
  const o = z(() => {
    const y = t[t.length - 1];
    if (y)
      return y.type === "section" ? y.section.id : y.question.id;
  }, [t]), a = (y) => {
    const E = y.id, S = t.map((k) => {
      if (k.type === "question")
        return k.question.id === E ? {
          ...k,
          question: {
            ...k.question,
            ...y
          }
        } : k;
      if (k.type === "section") {
        const I = k.section.questions?.map((T) => T.id === E ? {
          ...T,
          ...y
        } : T);
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
    i(S);
  }, c = (y) => {
    const E = y.id, S = t.map((k) => k.type === "section" && k.section.id === E ? {
      ...k,
      section: {
        ...k.section,
        ...y
      }
    } : k);
    i(S);
  }, d = ne(({ element: y, afterId: E }) => {
    const S = [...t];
    if (!E) {
      S.push(y), i(S);
      return;
    }
    ((I) => {
      S.forEach((T, D) => {
        T.type === "section" && T.section.id === I && S.splice(D + 1, 0, y), T.type === "question" && T.question.id === I && S.splice(D + 1, 0, y);
      });
    })(E), y.type === "question" && S.length === t.length && S.forEach((I, T) => {
      if (I.type !== "section")
        return;
      const D = [...I.section.questions ?? []];
      D?.forEach((N, _) => {
        N.id === E && D.splice(_ + 1, 0, y.question);
      }), S.splice(T, 1, {
        ...I,
        section: {
          ...I.section,
          questions: D
        }
      });
    }), i(S);
  }, [t, i]), f = ne(({ type: y, afterId: E }) => {
    const S = Qr(y === "section" ? "section" : "question"), k = tC(s), I = y === "section" ? {
      type: "section",
      section: {
        id: S,
        title: "",
        questions: [{
          id: Qr("question"),
          title: "",
          description: "",
          type: k,
          required: !0,
          ...Lo(k)
        }]
      }
    } : {
      type: "question",
      question: {
        id: S,
        title: "",
        description: "",
        type: y,
        required: !0,
        ...Lo(y)
      }
    };
    d({
      element: I,
      afterId: E
    });
  }, [d, s]), u = ({ elementId: y }) => {
    const S = yc(t.map((I) => I.type === "section" ? [I, ...I.section.questions ?? []] : [I.question])).find((I) => I.type === "section" ? I.section.id === y : I.id === y);
    let k;
    S && (k = S.type === "section" ? {
      ...S,
      section: {
        ...S.section,
        id: Qr("section")
      }
    } : {
      type: "question",
      question: {
        ...S,
        id: Qr("question")
      }
    }), k && d({
      element: k,
      afterId: y
    });
  }, h = (y) => yc(t.map((S) => S.type === "question" ? [S.question] : S.section.questions)).find((S) => S?.id === y), m = (y) => {
    let E = t.filter((S) => S.type === "section" ? S.section.id !== y : S.type === "question" ? S.question.id !== y : !0);
    E.length === t.length && (E = E.map((S) => S.type === "section" ? {
      ...S,
      section: {
        ...S.section,
        questions: S.section.questions?.filter((k) => k.id !== y)
      }
    } : S)), i(E);
  }, p = (y) => {
    const E = t.find((S) => S.type === "section" ? S.section.questions?.some((k) => k.id === y) : !1);
    return E?.type === "section" && E?.section.questions?.length === 1;
  }, b = (y) => {
    const E = t.find((S) => S.type === "section" ? S.section.questions?.some((k) => k.id === y) : !1);
    return E?.type === "section" ? E.section : void 0;
  }, v = W(!0), x = !t.length;
  V(() => {
    if (v.current) {
      v.current = !1, x && n && f({
        type: "section"
      });
      return;
    }
  }, [x, f, n]);
  const w = (y) => !s || s.includes(y);
  return l(Zf.Provider, {
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
      lastElementId: o,
      disallowOptionalQuestions: r,
      isQuestionTypeAllowed: w
    },
    children: e
  });
}
function Je() {
  const t = $t(Zf);
  if (!t)
    throw new Error("useCoCreationFormContext must be used within a CoCreationFormProvider");
  return t;
}
const eh = zt(void 0);
function $l({ children: t }) {
  const [e, n] = F(!1), [r, i] = F(null);
  return l(eh.Provider, {
    value: {
      isDragging: e,
      setIsDragging: n,
      draggedItemId: r,
      setDraggedItemId: i
    },
    children: t
  });
}
function cs() {
  const t = $t(eh);
  return t || {
    isDragging: !1,
    setIsDragging: () => {
    },
    draggedItemId: null,
    setDraggedItemId: () => {
    }
  };
}
const jl = () => {
  const { isQuestionTypeAllowed: t } = Je(), { t: e } = X();
  return [
    {
      label: e("coCreationForm.questionTypes.rating"),
      icon: Hd,
      questionType: "rating"
    },
    {
      label: e("coCreationForm.questionTypes.multipleChoice"),
      icon: tu,
      questionType: "multi-select"
    },
    {
      label: e("coCreationForm.questionTypes.singleChoice"),
      icon: ar,
      questionType: "select"
    },
    {
      label: e("coCreationForm.questionTypes.text"),
      icon: Lg,
      questionType: "text"
    },
    {
      label: e("coCreationForm.questionTypes.longText"),
      icon: hl,
      questionType: "longText"
    },
    {
      label: e("coCreationForm.questionTypes.numeric"),
      icon: Og,
      questionType: "numeric"
    }
  ].filter(
    (i) => t(i.questionType)
  );
}, kc = [{
  label: "1 - 5",
  value: "1-5"
}, {
  label: "1 - 10",
  value: "1-10"
}, {
  label: "Emojis",
  value: "emojis"
}], rC = ({ label: t, icon: e, checked: n, onChange: r }) => l(or, {
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
    }), l(su, {
      title: t,
      checked: n,
      onCheckedChange: r,
      hideLabel: !0
    })]
  })
}), iC = ({ label: t, value: e, questionTypes: n, currentRatingType: r, onSelectQuestionType: i, onSelectRatingType: s }) => {
  const o = n.find((a) => a.questionType === e)?.label;
  return g(ya, {
    children: [l(wa, {
      className: "mx-1 px-2 data-[state=open]:rounded-sm data-[state=closed]:bg-transparent data-[state=open]:bg-f1-background-hover",
      children: g("div", {
        className: "flex w-full flex-row items-center gap-2",
        children: [l(Wt, {
          icon: Mg,
          color: "default"
        }), l("span", {
          className: "flex-1 text-base font-medium",
          children: t
        }), !!o && l("span", {
          className: "mr-1 text-base text-f1-foreground-secondary",
          children: o
        })]
      })
    }), l(co, {
      children: l(ka, {
        children: n.map((a) => {
          const c = a.questionType === "rating", d = e === a.questionType;
          return c ? g(ya, {
            children: [l(wa, {
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
                  children: kc.find((f) => f.value === r)?.label
                })]
              })
            }), l(co, {
              children: l(ka, {
                children: kc.map((f) => l(or, {
                  onClick: () => s(f.value),
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
          }, a.questionType) : l(or, {
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
}, Cc = ({ label: t, icon: e, onClick: n, critical: r }) => l(or, {
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
function sC({ open: t, setOpen: e, questionId: n, questionType: r, canDeleteQuestion: i = !0 }) {
  const { t: s } = X(), { onQuestionChange: o, getQuestionById: a, deleteElement: c, onDuplicateElement: d, disallowOptionalQuestions: f } = Je(), u = z(() => a(n), [n, a]), h = jl(), m = z(() => {
    if (r !== "rating" || !u || !("options" in u) || u.type !== "rating")
      return null;
    const y = u.options;
    return !Array.isArray(y) || y.length === 0 || typeof y[0]?.value != "number" ? null : Xf(y);
  }, [r, u]), p = (y) => {
    o?.({
      id: n,
      type: r,
      required: y
    });
  }, b = (y) => {
    const E = y !== r && !((y === "select" || y === "multi-select") && u && "options" in u && u.options.length);
    o?.({
      id: n,
      type: y,
      ...E && {
        ...Lo(y)
      }
    });
  }, v = (y) => {
    r === "rating" && o?.({
      id: n,
      type: "rating",
      value: 0,
      options: Qf(y)
    });
  }, x = () => {
    d?.({
      elementId: n,
      type: r
    });
  }, w = () => {
    c(n);
  };
  return g(Vd, {
    open: t,
    onOpenChange: e,
    children: [l(Wd, {
      tabIndex: -1,
      asChild: !0,
      children: l(j, {
        icon: cr,
        label: s("coCreationForm.labels.actions"),
        size: "md",
        variant: "ghost",
        tooltip: !1,
        hideLabel: !0
      })
    }), g(Gd, {
      className: "w-80",
      align: "start",
      children: [l(Rg, {
        className: "p-4 pb-2 font-medium text-f1-foreground-secondary",
        children: s("coCreationForm.labels.questionOptions")
      }), !f && l(Fs, {
        children: l(rC, {
          label: s("coCreationForm.labels.required"),
          icon: Fg,
          checked: !!u?.required,
          onChange: p
        })
      }), l(Fs, {
        children: l(iC, {
          label: s("coCreationForm.labels.questionType"),
          value: r,
          questionTypes: h,
          currentRatingType: m,
          onSelectQuestionType: b,
          onSelectRatingType: v
        })
      }), l(Kd, {}), g(Fs, {
        children: [l(Cc, {
          label: s("coCreationForm.actions.duplicateQuestion"),
          icon: pl,
          onClick: x
        }), i && l(Cc, {
          label: s("coCreationForm.actions.deleteQuestion"),
          icon: hn,
          onClick: w
        })]
      })]
    })]
  });
}
const Nc = {
  fieldSizing: "content"
}, Kn = ({ id: t, title: e, description: n, children: r, required: i, locked: s, type: o }) => {
  const { onQuestionChange: a, onAddNewElement: c, isEditMode: d, getIsSingleQuestionInSection: f, getSectionContainingQuestion: u } = Je(), h = u(t), m = h?.locked || s, p = !!h, [b, v] = F(!1), [x, w] = F(!1), { isDragging: y } = cs(), { t: E } = X(), S = (L) => {
    a?.({
      id: t,
      type: o,
      title: L.target.value
    });
  }, k = (L) => {
    a?.({
      id: t,
      type: o,
      description: L.target.value
    });
  }, I = (L) => {
    c?.({
      type: L,
      afterId: t
    });
  }, T = () => {
    c?.({
      type: "section",
      afterId: t
    });
  }, D = jl(), N = [...p ? [] : [{
    label: E("coCreationForm.questionTypes.section"),
    icon: ou,
    onClick: T
  }, {
    type: "separator"
  }], ...D.map((L) => ({
    ...L,
    onClick: () => I(L.questionType)
  }))], _ = f(t), A = !d || m;
  return g("div", {
    className: C("group/question relative flex w-full flex-col gap-4 rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 py-4", !y && "hover:border-f1-border-hover"),
    children: [g("div", {
      className: "flex flex-col gap-0.5",
      children: [g("div", {
        className: "flex flex-row gap-2",
        children: [g("div", {
          className: "relative w-full",
          children: [l("textarea", {
            value: e,
            "aria-label": E("coCreationForm.labels.title"),
            placeholder: E("coCreationForm.labels.titlePlaceholder"),
            onChange: S,
            disabled: A,
            className: C("w-full resize-none px-2 py-1 text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden", A && "cursor-not-allowed"),
            style: Nc,
            autoFocus: !_
          }), g("div", {
            className: "textarea-overlay pointer-events-none absolute left-0 top-0 h-full w-full whitespace-pre-wrap break-words px-2 py-1 text-lg font-semibold",
            children: [l("span", {
              className: "opacity-0",
              children: e || E("coCreationForm.labels.titlePlaceholder")
            }), i && g("span", {
              className: C("text-f1-foreground-critical", !e && "text-f1-foreground-secondary"),
              children: [" ", "*"]
            })]
          })]
        }), d && !m && l("div", {
          className: C("opacity-0 group-hover/question:opacity-100", x && "opacity-100"),
          children: l(sC, {
            open: x,
            setOpen: w,
            questionId: t,
            questionType: o,
            canDeleteQuestion: !p || !_
          })
        })]
      }), l("textarea", {
        value: n,
        "aria-label": E("coCreationForm.labels.description"),
        placeholder: E("coCreationForm.labels.questionDescriptionPlaceholder"),
        onChange: k,
        disabled: A,
        className: C("w-full resize-none px-2 text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden", A && "cursor-not-allowed"),
        style: Nc
      })]
    }), r, d && !h?.locked && l("div", {
      className: C("absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] bg-f1-background opacity-0 group-hover/question:opacity-100", b && "opacity-100"),
      children: l(Me, {
        items: N,
        icon: gl,
        size: "sm",
        open: b,
        onOpenChange: v,
        align: "center"
      })
    })]
  });
}, oC = ({ value: t, ...e }) => {
  const { onQuestionChange: n, isEditMode: r } = Je(), { t: i } = X(), s = (a) => {
    r || n?.({
      ...e,
      type: "date",
      value: a?.value?.from
    });
  }, o = z(() => t ? {
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
        value: o,
        onChange: s,
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
      children: l(lu, {
        type: "url",
        size: "md",
        value: t ?? void 0,
        onChange: (o) => {
          i || r?.({
            ...e,
            type: "link",
            value: o
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
        onChange: (o) => {
          i || r?.({
            ...e,
            type: "numeric",
            value: o
          });
        },
        disabled: i,
        label: n("coCreationForm.answer.label"),
        hideLabel: !0,
        required: e.required
      })
    })
  });
}, cC = ({ option: t, selected: e, onClick: n, onChangeLabel: r, isEditMode: i, disabled: s, isEmojiMode: o = !1 }) => {
  const { value: a, label: c } = t, [d, f] = F(!1), u = () => {
    s || i || n(a);
  }, h = (m) => {
    r?.(a, m.native), f(!1);
  };
  return l("div", {
    className: C("group relative flex h-10 min-w-20 flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary text-center font-medium", e && "border-f1-border-selected-bold", !s && !i ? "cursor-pointer" : "cursor-default"),
    onClick: u,
    children: i ? l(ee, {
      children: o ? g(bl, {
        open: d,
        onOpenChange: f,
        children: [l(vl, {
          asChild: !0,
          children: l(j, {
            emoji: c,
            label: a.toString(),
            variant: "ghost",
            hideLabel: !0
          })
        }), l(xl, {
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
    }) : l(Er, {
      emoji: c,
      size: "sm"
    })
  });
}, dC = ({ options: t, value: e, ...n }) => {
  const { onQuestionChange: r, isEditMode: i } = Je(), o = Xf(t) === "emojis", a = (d) => {
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
        isEmojiMode: o
      }, d.value))
    })
  });
}, uC = (t) => l(dC, {
  ...t,
  type: "rating"
}), fC = {
  fieldSizing: "content"
}, hC = ({ index: t, option: e, selected: n, onClick: r, onClickAction: i, onChangeLabel: s, isEditMode: o, correct: a, locked: c }) => {
  const { value: d, label: f } = e, { isDragging: u, setIsDragging: h, setDraggedItemId: m, draggedItemId: p } = cs(), { t: b } = X(), v = u && p === d, x = () => {
    o || r(d);
  }, w = (N) => {
    i({
      value: d,
      index: t,
      action: N
    });
  }, y = () => {
    w("mark-as-correct");
  }, E = () => {
    w("remove");
  }, S = (N) => {
    const _ = N.target.value;
    s({
      value: d,
      index: t,
      newLabel: _
    });
  }, k = () => {
    h(!0), m(d);
  }, I = () => {
    h(!1), m(null);
  }, T = u ? v : o, D = !!o && !c;
  return l(Un, {
    value: e,
    onDragStart: k,
    onDragEnd: I,
    dragListener: D,
    layout: "position",
    as: "div",
    children: g("div", {
      className: C("group relative flex min-h-9 items-center gap-3 rounded-md bg-f1-background py-0.5 pl-2 pr-0.5 hover:bg-f1-background-hover", !o && "cursor-pointer", u && "!cursor-grabbing active:!cursor-grabbing"),
      onClick: x,
      children: [l("div", {
        className: C("block", T ? "group-hover:hidden" : "cursor-default", u && "cursor-grabbing [&_button]:cursor-grabbing"),
        children: l(ki, {
          title: f,
          checked: !!(n && !o),
          onCheckedChange: x,
          disabled: o,
          presentational: o,
          hideLabel: !0
        })
      }), l("div", {
        className: C("hidden scale-75 cursor-grab", D && "active:cursor-grabbing", T && "group-hover:block", u && "cursor-grabbing", !D && "cursor-not-allowed"),
        children: l("div", {
          className: "flex aspect-square w-6 scale-90 items-center justify-center",
          children: l(Wt, {
            icon: Dr,
            size: "sm"
          })
        })
      }), o && !c ? l("textarea", {
        placeholder: b("coCreationForm.selectQuestion.optionPlaceholder"),
        value: f,
        onChange: S,
        className: "flex-1 resize-none font-medium",
        style: fC
      }) : l("p", {
        className: "flex-1 font-medium",
        children: f
      }), o && a && l("span", {
        className: "text-sm font-medium text-f1-foreground-positive",
        children: b("coCreationForm.selectQuestion.correct")
      }), o && !c ? g("div", {
        className: "hidden flex-row items-center gap-1 group-hover:inline-block",
        children: [l(j, {
          label: b("coCreationForm.selectQuestion.markAsCorrect"),
          variant: "ghost",
          icon: a ? Zt : Pg,
          onClick: y,
          hideLabel: !0
        }), l(j, {
          label: b("coCreationForm.selectQuestion.remove"),
          variant: "ghost",
          icon: hn,
          hideLabel: !0,
          onClick: E
        })]
      }) : l("div", {
        className: "min-h-8"
      })]
    })
  });
}, mC = ({ options: t, ...e }) => {
  const { onQuestionChange: n, isEditMode: r, getSectionContainingQuestion: i } = Je(), s = new Set(t.map((b) => b.value)).size !== t.length, o = i(e.id), a = e.locked || o?.locked, { t: c } = X(), d = z(() => ({
    id: e.id,
    type: e.type,
    options: t
  }), [e.id, e.type, t]);
  V(() => {
    if (!s) return;
    let b = t.map((w) => ({
      ...w,
      value: w.label.toLowerCase().replace(/\s+/g, "-")
    }));
    const v = {
      id: e.id,
      type: e.type
    }, x = new Set(b.map((w) => w.value)).size !== b.length;
    if (!x) {
      n?.({
        ...v,
        options: b
      });
      return;
    }
    b = b.map((w) => ({
      ...w,
      value: bo()
    })), x && n?.({
      ...v,
      options: b
    }), n?.({
      ...v,
      options: b
    });
  }, [s, n, t, e.id, e.type]);
  const f = (b) => {
    let v = t;
    b.action === "remove" && (v = t.filter((x) => x.value !== b.value)), b.action === "mark-as-correct" && (v = t.map((x) => ({
      ...x,
      correct: x.value === b.value ? !x.correct : x.correct
    }))), n?.({
      ...d,
      options: v
    });
  }, u = (b) => {
    if (e.type === "select")
      n?.({
        ...d,
        type: e.type,
        value: b
      });
    else if (e.type === "multi-select" && Array.isArray(e.value)) {
      const v = e.value.includes(b) ? e.value.filter((x) => x !== b) : [...e.value, b];
      n?.({
        ...d,
        type: e.type,
        value: v
      });
    }
  }, h = (b) => {
    const v = t.map((x, w) => ({
      ...x,
      ...w === b.index ? {
        value: b.value,
        label: b.newLabel
      } : {}
    }));
    n?.({
      ...d,
      options: v
    });
  }, m = () => {
    const b = t.length, v = {
      value: `new-option-${b + 1}`,
      label: c("coCreationForm.selectQuestion.newOption", {
        number: b + 1
      })
    };
    n?.({
      ...d,
      options: [...t, v]
    });
  }, p = (b) => {
    n?.({
      ...d,
      options: b
    });
  };
  return s ? null : l(Kn, {
    ...e,
    children: g("div", {
      className: "-mx-0.5 flex flex-col items-start [&>div]:w-full",
      children: [l($l, {
        children: l(Mn, {
          axis: "y",
          values: t,
          onReorder: p,
          as: "div",
          children: t.map((b, v) => l("div", {
            className: "w-full [&>div]:w-full",
            children: l(hC, {
              index: v,
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
        children: l(j, {
          label: c("coCreationForm.selectQuestion.addOption"),
          variant: "ghost",
          icon: gl,
          onClick: m
        })
      })]
    })
  });
}, pC = ({ value: t, ...e }) => {
  const { onQuestionChange: n, isEditMode: r } = Je(), { t: i } = X(), s = (d) => {
    r || n?.({
      ...e,
      value: d
    });
  }, o = i("coCreationForm.answer.placeholder"), c = {
    value: r ? o : t ?? void 0,
    onChange: s,
    placeholder: o,
    disabled: r,
    label: i("coCreationForm.answer.label"),
    hideLabel: !0,
    required: e.required
  };
  return l(Kn, {
    ...e,
    children: g("div", {
      className: "px-0.5",
      children: [e.type === "text" && l(lu, {
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
}, th = ({ ...t }) => {
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
      return l(oC, {
        ...t
      });
    default:
      throw new Error("Invalid question type provided");
  }
}, gC = ({ question: t }) => {
  const { isDragging: e, setIsDragging: n, setDraggedItemId: r } = cs(), i = os(), { isEditMode: s, getSectionContainingQuestion: o } = Je(), a = o(t.id), c = () => {
    n(!0), r(t.id);
  }, d = () => {
    n(!1), r(null);
  }, f = t.locked || a?.locked, u = !!s && !f;
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
        marginLeft: s ? -27 : 0
      },
      children: [!!s && l("div", {
        className: C("mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/question-element:opacity-40", !e && "cursor-grab", !u && "cursor-not-allowed"),
        onPointerDown: (h) => {
          u && i.start(h);
        },
        children: l(q, {
          icon: Dr,
          size: "sm"
        })
      }), l(th, {
        ...t
      })]
    })
  });
}, bC = {
  fieldSizing: "content"
}, vC = ({ id: t, title: e, description: n, questions: r = [], locked: i }) => {
  const { onSectionChange: s, isEditMode: o, deleteElement: a, onDuplicateElement: c } = Je(), [d, f] = F(!1), { t: u } = X(), h = z(() => ({
    id: t,
    title: e,
    description: n
  }), [t, e, n]), m = (E) => {
    s?.({
      ...h,
      title: E.target.value
    });
  }, p = (E) => {
    s?.({
      ...h,
      description: E.target.value
    });
  }, b = (E) => {
    s?.({
      ...h,
      questions: E
    });
  }, v = () => {
    c?.({
      elementId: t,
      type: "section"
    });
  }, x = () => {
    a(t);
  }, w = [{
    label: u("coCreationForm.actions.duplicateSection"),
    icon: pl,
    onClick: v
  }, {
    label: u("coCreationForm.actions.deleteSection"),
    icon: hn,
    onClick: x,
    critical: !0
  }], y = !o || i;
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
          disabled: y,
          className: C("w-full text-lg font-semibold disabled:text-f1-foreground [&::-webkit-search-cancel-button]:hidden", y && "cursor-not-allowed"),
          autoFocus: !0
        }), o && !i && l("div", {
          className: C("opacity-0 group-hover/section:opacity-100", d && "opacity-100"),
          children: l(Me, {
            items: w,
            icon: cr,
            open: d,
            onOpenChange: f,
            align: "start",
            children: l(j, {
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
        disabled: y,
        style: bC,
        className: C("w-full resize-none text-f1-foreground-secondary placeholder:text-f1-foreground-tertiary disabled:text-f1-foreground-secondary [&::-webkit-search-cancel-button]:hidden", y && "cursor-not-allowed")
      })]
    }), l($l, {
      children: l(Mn, {
        axis: "y",
        values: r,
        onReorder: b,
        as: "div",
        children: l("div", {
          className: "group/section-list flex flex-col gap-4",
          children: r.map((E) => l(gC, {
            question: E
          }, E.id))
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
}, xC = () => {
  const { isEditMode: t, onAddNewElement: e, lastElementId: n } = Je(), r = jl(), { t: i } = X(), s = (c) => {
    e?.({
      type: c,
      afterId: n
    });
  }, o = () => {
    e?.({
      type: "section",
      afterId: n
    });
  }, a = [{
    label: i("coCreationForm.questionTypes.section"),
    icon: ou,
    onClick: o
  }, {
    type: "separator"
  }, ...r.map((c) => ({
    ...c,
    onClick: () => s(c.questionType)
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
}, yC = ({ element: t }) => {
  const { isDragging: e, setIsDragging: n, setDraggedItemId: r } = cs(), i = os(), { isEditMode: s, getSectionContainingQuestion: o } = Je(), a = t.type === "question" ? o(t.question.id) : void 0, c = () => {
    n(!0), r(t.type === "section" ? t.section.id : t.question.id);
  }, d = () => {
    n(!1), r(null);
  }, f = t.type === "section" ? t.section.locked : t.question.locked || a?.locked, u = !!s && !f;
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
        children: [!!s && l("div", {
          className: C("mt-2 flex aspect-square w-6 scale-75 items-center opacity-0 hover:opacity-40 group-hover/element:opacity-40", !e && "cursor-grab", !u && "cursor-not-allowed"),
          onPointerDown: (h) => {
            u && i.start(h);
          },
          children: l(q, {
            icon: Dr,
            size: "sm"
          })
        }), t.type === "section" && l(vC, {
          ...t.section
        }), t.type === "question" && l(th, {
          ...t.question
        })]
      })
    })
  });
}, x_ = ({ elements: t, isEditMode: e, onChange: n, disallowOptionalQuestions: r, allowedQuestionTypes: i, applyingChanges: s }) => {
  const o = e && (!t?.length || t?.at(-1)?.type === "section"), a = z(() => t.map((c) => c.type === "question" ? {
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
    if (s) {
      const c = document.activeElement;
      c && c.getAttribute("name") !== "one-ai-input" && c.blur();
    }
  }, [s]), l(nC, {
    isEditMode: e,
    elements: a,
    onChange: n,
    disallowOptionalQuestions: r,
    allowedQuestionTypes: i,
    children: g("div", {
      className: "relative",
      children: [g(G.div, {
        className: C("flex flex-col gap-6", s && "pointer-events-none"),
        initial: {
          filter: "blur(0px)"
        },
        animate: {
          filter: s ? "blur(2px)" : "none"
        },
        exit: {
          filter: "blur(0px)"
        },
        children: [l($l, {
          children: l(Mn, {
            axis: "y",
            values: a,
            onReorder: n,
            as: "div",
            children: l("div", {
              className: "flex flex-col gap-8",
              children: a.map((c) => l(yC, {
                element: c
              }, c.type === "section" ? c.section.id : c.question.id))
            })
          })
        }), o && l(xC, {})]
      }), s && l(G.div, {
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
    children: [l(q, {
      icon: zg,
      size: "md",
      color: "selected"
    }), l(Ve, {
      lines: 1,
      className: "text-[13px] font-semibold leading-5 text-f1-foreground-selected",
      children: t
    })]
  });
}
function kC({ author: t, timestamp: e, onClick: n, isActive: r }) {
  const { locale: i } = au(), s = $g(i), o = nu(e, "PPPp", {
    locale: s
  }), a = `${t.firstName} ${t.lastName}`;
  return g("button", {
    type: "button",
    className: C("flex w-full flex-col gap-[6px] rounded-md px-2 py-[6px] text-left transition-colors", r && "bg-f1-background-tertiary", n && "cursor-pointer hover:bg-f1-background-hover", we("focus-visible:ring-inset")),
    onClick: n,
    disabled: !n,
    "aria-label": `Version ${o} by ${a}${r ? " (selected)" : ""}`,
    "aria-pressed": n ? r : void 0,
    children: [l(Ve, {
      lines: 1,
      className: "font-medium text-f1-foreground",
      children: o
    }), g("div", {
      className: "flex flex-row items-center gap-[6px]",
      children: [l(Ct, {
        firstName: t.firstName,
        lastName: t.lastName,
        src: t.src,
        size: "xs"
      }), l(Ve, {
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
    children: [l(Ve, {
      tag: "h2",
      lines: 1,
      className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
      children: t
    }), l(Nt, {
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
const y_ = oe("F0VersionHistory", CC), nh = J(({ height: t, itemCount: e, itemSize: n, className: r, renderer: i }, s) => {
  const o = Q.useRef(null);
  Q.useImperativeHandle(s, () => o.current, []);
  const a = jg({
    count: e,
    getScrollElement: () => o.current,
    estimateSize: typeof n == "number" ? () => n : n,
    overscan: 5
  });
  return l("div", {
    ref: o,
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
        children: c ? i(c) : l(ee, {})
      }, c.key))
    })
  });
});
nh.displayName = "VirtualList";
const Oo = oe("VirtualList", nh), rh = ({ text: t, search: e, searchKeys: n = [], semiBold: r = !1 }) => {
  if (!e)
    return l("span", {
      className: C("line-clamp-1", r ? "font-semibold" : ""),
      children: t
    });
  if (t.toLowerCase().indexOf(e.toLowerCase()) === -1)
    if (n.find((o) => o.toLowerCase().indexOf(e.toLowerCase().trim()) >= 0))
      e = t.split(" ")[0];
    else
      return l("span", {
        className: C("line-clamp-1", r ? "font-semibold" : ""),
        children: t
      });
  const i = new RegExp(`(${e})`, "gi"), s = t.split(i);
  return l("span", {
    className: C("line-clamp-1", r ? "font-semibold" : ""),
    children: s.map((o, a) => o.toLowerCase() === e.toLowerCase() ? l("span", {
      className: "truncate font-medium",
      style: {
        fontWeight: "bold"
      },
      children: o
    }, a) : o)
  });
};
function ds(t, e) {
  const r = Array.from(document.querySelectorAll('[data-avatarname-navigator-element="true"]')), i = r.indexOf(t);
  i >= 0 && i < r.length - 1 ? r[i + 1].focus() : r.length > 0 && e?.();
}
function us(t, e) {
  const r = Array.from(document.querySelectorAll('[data-avatarname-navigator-element="true"]')), i = r.indexOf(t);
  i > 0 ? r[i - 1].focus() : r.length > 0 && e?.();
}
const NC = ({ entity: t, selected: e, onSelect: n, onRemove: r, marginLeft: i, search: s, goToFirst: o, goToLast: a, singleSelector: c = !1, disabled: d = !1, hiddenAvatar: f = !1 }) => {
  const u = t.name.split(" "), h = u[0] || "", m = u.slice(1).join(" "), p = (v) => {
    v.preventDefault(), v.stopPropagation(), !d && (e ? r(t) : n(t));
  }, b = (v) => {
    if (v.key === "Enter" || v.key === " ") {
      if (v.preventDefault(), d) return;
      e ? e && r(t) : n(t);
    } else v.key === "ArrowDown" ? ds(v.currentTarget, o) : v.key === "ArrowUp" && us(v.currentTarget, a);
  };
  return l("div", {
    className: "w-full pl-1 pr-1",
    children: g("label", {
      "aria-label": t.name,
      className: C(i, "flex flex-row flex-wrap items-center gap-2 rounded-[10px] border px-2 py-1.5 hover:cursor-pointer", "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover", e && c ? "bg-f1-background-selected-bold/10 transition-colors dark:bg-f1-background-selected-bold/20" : ""),
      children: [!f && l(Ct, {
        src: t.avatar,
        firstName: h,
        lastName: m,
        size: "xs",
        deactivated: t.deactivated
      }), l("div", {
        className: "flex flex-1 flex-col",
        children: l("div", {
          className: C("flex flex-1 flex-row items-center gap-2 break-all", t.deactivated ? "text-f1-foreground/[0.61]" : void 0),
          children: l(rh, {
            text: t.name,
            search: s,
            searchKeys: t.searchKeys
          })
        })
      }), l(yl, {
        "data-avatarname-navigator-element": "true",
        checked: e,
        disabled: d,
        onClick: p,
        onKeyDown: b,
        className: C("pointer-events-none ml-auto", c ? "opacity-0" : "")
      }), c && e && l(q, {
        className: "text-f1-icon-selected",
        icon: ml,
        size: "md"
      })]
    })
  });
}, ci = ({ groupView: t, expanded: e, search: n, entity: r, selected: i, partialSelected: s, onSelect: o, onRemove: a, onExpand: c, goToFirst: d, goToLast: f, isChild: u = !1, hideLine: h = !1, showGroupIcon: m = !1, singleSelector: p = !1, disabled: b = !1, hiddenAvatar: v = !1 }) => {
  const [x, w] = F(!1);
  if (!t)
    return l(NC, {
      marginLeft: u ? "ml-6" : "ml-0",
      entity: r,
      search: n,
      selected: i,
      onSelect: o,
      onRemove: a,
      singleSelector: p,
      goToFirst: d,
      goToLast: f,
      disabled: b,
      hiddenAvatar: v
    });
  const y = (k) => {
    if (k.key === " ")
      k.preventDefault(), c(!e);
    else if (k.key === "Enter" && p)
      c(!e);
    else if (k.key === "Enter") {
      if (b) return;
      !i || s ? o(r) : i && a(r);
    } else k.key === "ArrowDown" ? ds(k.currentTarget, d) : k.key === "ArrowUp" && us(k.currentTarget, f);
  }, E = () => {
    if (x)
      c(!e), w(!1);
    else {
      if (b || p) return;
      i ? a(r) : o(r);
    }
  };
  if (!r.subItems?.length) return null;
  const S = i || s;
  return g(ee, {
    children: [g("div", {
      className: "flex w-full flex-row flex-wrap items-center gap-0 rounded-md border pl-2.5 pr-1",
      children: [l(j, {
        hideLabel: !0,
        icon: e ? cu : du,
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
        children: [m && l(q, {
          icon: Bg,
          className: "rounded-xs bg-f1-foreground-secondary text-f1-foreground-inverse"
        }), g("div", {
          className: "flex flex-grow flex-row items-center gap-2 break-all",
          children: [l(rh, {
            semiBold: !0,
            text: r.name,
            search: n,
            searchKeys: r.searchKeys
          }), l(_r, {
            value: r.subItems?.length ?? 0
          })]
        }), l(yl, {
          checked: S,
          disabled: b,
          onClick: E,
          onKeyDown: y,
          indeterminate: s,
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
ci.displayName = "EntitySelectListItem";
const Sc = ({ label: t, onCreate: e, goToFirst: n, goToLast: r }) => l("div", {
  className: "w-full pl-1 pr-1",
  onKeyDown: (s) => {
    s.key === "ArrowDown" || s.key === "Tab" ? ds(s.currentTarget, n) : s.key === "ArrowUp" && us(s.currentTarget, r);
  },
  children: g("label", {
    "aria-label": t,
    className: C("flex flex-row flex-wrap items-center gap-1.5 rounded-[10px] border px-1.5 py-1.5 hover:cursor-pointer", "focus-within:outline focus-within:outline-1 focus-within:-outline-offset-1 focus-within:outline-f1-border-selected-bold hover:bg-f1-background-hover", "select-none"),
    children: [l(j, {
      hideLabel: !0,
      label: t,
      onClick: () => e(),
      icon: Ki,
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
    return l(j, {
      disabled: t.disabled,
      variant: t.variant,
      onClick: t.onClick,
      label: t.label,
      icon: t.icon,
      size: "sm"
    });
  const n = [t, ...e ?? []], r = n.map((o) => ({
    label: o.label,
    value: o.label,
    icon: o.icon,
    critical: o.variant === "critical"
  })) || [], i = (o) => {
    const a = n.find((c) => c.label === o);
    a && !a.disabled && a.onClick?.();
  }, s = n.every((o) => o.disabled);
  return l(on, {
    items: r,
    value: t.label,
    disabled: s,
    onClick: i,
    variant: "outline",
    size: "sm"
  });
}, SC = ({ actions: t, selectAllLabel: e, clearLabel: n, disabled: r, allVisibleSelected: i, anyVisibleSelected: s, loading: o, singleSelector: a, onSelectAll: c, onClear: d }) => {
  const f = !a && (e || n), u = t && t.length > 0;
  if (!(!o && (!a && f || u))) return null;
  let m, p, b = c ? {
    label: e || "",
    onClick: c,
    variant: "outline",
    disabled: r || i
  } : void 0, v = d ? {
    label: n || "",
    onClick: d,
    variant: "ghost",
    disabled: r || !s
  } : void 0;
  return b || (b = v, v = void 0), u && f ? (m = l(nr, {
    primaryAction: b,
    secondaryActions: v ? [v] : []
  }), p = l(nr, {
    primaryAction: t[0],
    secondaryActions: t.slice(1)
  })) : u ? m = l(nr, {
    primaryAction: t[0],
    secondaryActions: t.slice(1)
  }) : f && (m = l(nr, {
    primaryAction: b,
    secondaryActions: []
  }), v && (p = l(nr, {
    primaryAction: v,
    secondaryActions: []
  }))), l("footer", {
    className: "rounded-bl-xl border-0 border-r-[1px] border-t-[1px] border-solid border-f1-border-secondary bg-f1-background/30 backdrop-blur-2xl",
    children: g("div", {
      className: "flex flex-1 justify-between p-2",
      children: [m, p]
    })
  });
}, IC = ({ search: t, onSearch: e, searchPlaceholder: n, disabled: r = !1, goToFirst: i, goToLast: s }) => {
  const o = (a) => {
    a.key === "ArrowDown" ? (a.preventDefault(), a.stopPropagation(), ds(a.currentTarget, i)) : a.key === "ArrowUp" ? (a.preventDefault(), a.stopPropagation(), us(a.currentTarget, s)) : a.key === "Enter" && (a.preventDefault(), a.stopPropagation());
  };
  return g("div", {
    className: "flex justify-between gap-1 rounded-[10px] border-[1px] border-solid border-f1-border px-2 py-[3px] transition-all focus-within:border-f1-border-hover hover:border-f1-border-hover",
    children: [l(q, {
      icon: Bv,
      size: "md"
    }), l("input", {
      disabled: r,
      onKeyDown: o,
      type: "text",
      className: "w-full border-none bg-transparent focus:outline-none",
      placeholder: n,
      value: t,
      onChange: (a) => e(a.target.value)
    }), t && l(q, {
      icon: uo,
      size: "md",
      onClick: () => e(""),
      className: "cursor-pointer text-f1-icon-secondary"
    })]
  });
}, Us = 384, Gs = 36, AC = 37, Ic = 1, Ac = 200, Tc = '[data-avatarname-navigator-element="true"]', TC = ({ groupView: t, entities: e, groups: n, selectedGroup: r, search: i, onSelect: s, onRemove: o, onSubItemRemove: a, onSubItemSelect: c, onClear: d, onSelectAll: f, onSearch: u, selectedEntities: h = [], onGroupChange: m, onToggleExpand: p, searchPlaceholder: b, selectAllLabel: v, clearLabel: x, notFoundTitle: w, notFoundSubtitle: y, className: E, actions: S, onCreate: k, onCreateLabel: I, singleSelector: T = !1, loading: D = !1, disabled: N = !1, hiddenAvatar: _ = !1 }) => {
  const A = Q.useRef(null), L = z(() => t ? e.reduce((P, Y) => P + (Y.subItems?.length ?? 0), 0) : e.length, [e, t]), O = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({
        top: 0
      });
    }, Ic), setTimeout(() => {
      Array.from(document.querySelectorAll(Tc))[0]?.focus();
    }, Ac);
  }, []), R = ne(() => {
    setTimeout(() => {
      A.current?.scrollTo({
        top: A.current?.scrollHeight
      });
    }, Ic), setTimeout(() => {
      const P = Array.from(document.querySelectorAll(Tc));
      P[P.length - 1]?.focus();
    }, Ac);
  }, []), $ = z(() => new Map(h.map((P) => [P.id, P])), [h]), U = ne((P) => {
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
  }, [t, $]), Z = ne((P) => {
    if (P.index === 0 && k)
      return l(Sc, {
        label: I ?? "",
        onCreate: () => k?.(i),
        goToFirst: O,
        goToLast: R
      });
    const Y = k ? P.index - 1 : P.index, ie = e[Y], { selected: ce, partialSelected: ve } = U(ie);
    return l(ci, {
      expanded: ie.expanded ?? !1,
      onExpand: () => p(ie, !0),
      search: i,
      groupView: t,
      entity: ie,
      onSelect: s,
      onRemove: o,
      selected: ce,
      partialSelected: ve,
      showGroupIcon: EC(n, r),
      singleSelector: T,
      goToFirst: O,
      goToLast: R,
      disabled: N,
      hiddenAvatar: _
    }, ie.id);
  }, [k, I, N, e, U, O, R, t, n, _, o, s, p, i, r, T]), ae = z(() => t ? e.flatMap((P) => {
    const Y = Xr(h ?? [], P.id);
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
  })), [t, e, h]), K = ne((P) => {
    if (P.index === 0 && k)
      return l(Sc, {
        label: I ?? "",
        onCreate: () => k?.(i),
        goToFirst: O,
        goToLast: R
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
      }, De = Xr(h, be.id), Se = (be?.subItems ?? []).filter((it) => De?.subItems?.some((bn) => bn.subId === it.subId)), Et = (be.subItems?.length ?? 0) === Se.length, rt = !Et && Se.length > 0;
      return l(ci, {
        groupView: !0,
        expanded: be.expanded ?? !1,
        onExpand: (it) => p(be, it),
        search: i,
        entity: be,
        onSelect: s,
        onRemove: o,
        selected: Et,
        partialSelected: rt,
        showGroupIcon: n.find((it) => it.value === r)?.groupType === "team",
        singleSelector: T,
        goToFirst: O,
        goToLast: R,
        hideLine: Y === ae.length - 1,
        disabled: N,
        hiddenAvatar: _
      });
    }
    let ve = !!Xr(h, ce.subId);
    if (!ve) {
      const be = Xr(h, ie.id);
      ve = !!(ie?.subItems ?? []).filter((Se) => be?.subItems?.some((Et) => Et.subId === Se.subId)).find((Se) => Se.subId === ce.subId);
    }
    return l(ci, {
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
      singleSelector: T,
      goToFirst: O,
      goToLast: R,
      isChild: !0,
      hiddenAvatar: _
    });
  }, [ae, h, i, T, O, R, s, o, n, N, p, r, c, a, _, k, I]), [H, le] = z(() => {
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
  }, [e, $, t]), te = ae.length, re = !T && (v || x), ue = S && S.length > 0, B = !D && (!T && re || ue);
  return g("div", {
    className: C("flex w-full flex-col rounded-l-xl border-0", T || D ? "rounded-r-xl" : "", E),
    children: [g("header", {
      className: C("flex h-[48px] justify-between gap-2 rounded-tl-xl border-0 border-b-[1px] border-r-[1px] border-solid border-f1-border-secondary bg-f1-background/30 p-2 backdrop-blur-2xl", T || D ? "rounded-t-xl border-r-0" : ""),
      children: [l("div", {
        className: "flex-1",
        children: l(IC, {
          search: i,
          onSearch: u,
          searchPlaceholder: b,
          goToFirst: O,
          goToLast: R
        })
      }), n && n.length > 1 && l("div", {
        className: "flex-1",
        children: l(dr, {
          label: "Group",
          hideLabel: !0,
          disabled: D,
          onChange: m,
          options: n,
          value: r,
          className: C("h-8 rounded-[10px] bg-transparent py-[5px]", r === "all" ? "text-f1-foreground-secondary" : "")
        })
      })]
    }), g("section", {
      className: C("flex-grow-1 flex h-96 flex-col justify-start gap-1 border-0 border-r-[1px] border-solid border-f1-border-secondary bg-f1-background", B ? "" : "rounded-b-xl border-r-0"),
      children: [D && l("div", {
        className: "flex h-full w-full flex-row items-center justify-center",
        children: l(sn, {})
      }), !D && !L && g("div", {
        className: "absolute flex w-full flex-col items-center justify-center gap-0.5 p-5",
        style: {
          height: Us
        },
        children: [l("span", {
          className: "text-lg font-medium",
          children: w
        }), l("span", {
          className: "text-center text-f1-foreground-secondary",
          children: y
        })]
      }), !D && (!!L || k) && l("div", {
        className: "h-full",
        children: t ? l(Oo, {
          height: Us,
          itemCount: te + (k ? 1 : 0),
          itemSize: (P) => {
            if (P === 0 && k) return Gs;
            const Y = k ? P - 1 : P;
            return ae[Y]?.parent === null ? AC : Gs;
          },
          renderer: K,
          ref: A
        }) : l(Oo, {
          height: Us,
          itemCount: e.length + (k ? 1 : 0),
          itemSize: Gs,
          renderer: Z,
          ref: A
        })
      })]
    }), l(SC, {
      onSelectAll: f,
      onClear: d,
      singleSelector: T,
      totalFilteredEntities: L,
      allVisibleSelected: H,
      anyVisibleSelected: le,
      selectAllLabel: v,
      clearLabel: x,
      disabled: N,
      actions: S
    })]
  });
}, Xr = (t, e) => t.find((n) => n.id === e), EC = (t, e) => t.find((n) => n.value === e)?.groupType === "team", DC = ({ entity: t, onRemove: e, disabled: n = !1, deactivated: r = !1, hiddenAvatar: i = !1 }) => l("div", {
  className: "pr-2 pt-1.5",
  children: l(Hg, {
    className: C("max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]", "rounded-full", i ? "pl-2" : "pl-0"),
    left: !i && l(eu, {
      src: t.subAvatar,
      name: t.subName,
      size: "xs",
      type: "rounded",
      icon: r ? {
        icon: Vg,
        color: "secondary"
      } : void 0
    }),
    right: !n && l(q, {
      icon: Zt,
      size: "sm",
      className: "cursor-pointer text-f1-icon-secondary",
      onClick: () => e?.(t)
    }),
    text: t.subName,
    deactivated: r
  })
}), _C = ({ groupView: t, onSubItemRemove: e, onRemove: n, selectedEntities: r, selectedLabel: i, disabled: s = !1, hiddenAvatar: o = !1 }) => {
  const a = z(() => {
    const d = t ? r.flatMap((u) => (u.subItems ?? []).map((h) => ({
      parent: u,
      subItem: h
    }))) : r.map((u) => ({
      parent: null,
      subItem: {
        subId: u.id,
        subName: u.name,
        subAvatar: u.avatar,
        subDeactivated: u.deactivated
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
      children: l(Oo, {
        height: 425,
        itemCount: c,
        itemSize: 30,
        className: "overflow-x-hidden",
        renderer: (d) => {
          const f = a[d.index];
          return f ? l(DC, {
            deactivated: f.subItem.subDeactivated,
            entity: f.subItem,
            disabled: s,
            hiddenAvatar: o,
            onRemove: () => f.parent ? e?.(f.parent, f.subItem) : n({
              id: f.subItem.subId,
              name: f.subItem.subName,
              avatar: f.subItem.subAvatar
            })
          }) : l(ee, {});
        }
      })
    })]
  });
}, LC = 500, Ec = 520, Dc = 210, _c = ({ groupView: t, onRemove: e, onSubItemRemove: n, selectedEntities: r, selectedLabel: i, width: s, singleSelector: o = !1, loading: a = !1, hiddenAvatar: c = !1, actions: d, onCreate: f, onCreateLabel: u, ...h }) => {
  const m = (s ?? Ec) < LC, p = !a && !o && !m, b = s ?? Ec, v = p ? b - Dc : b;
  return g("div", {
    className: "relative overflow-hidden",
    style: {
      height: o && (!d || d.length === 0) ? "435px" : "473px",
      width: b
    },
    children: [l("div", {
      className: "absolute right-0 top-0",
      style: {
        width: Dc + "px"
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
        width: v + 1 + "px"
      },
      children: l(TC, {
        ...h,
        groupView: t,
        onRemove: e,
        onSubItemRemove: n,
        selectedEntities: r,
        singleSelector: o,
        loading: a,
        disabled: h.disabled,
        hiddenAvatar: c,
        actions: d,
        onCreate: f,
        onCreateLabel: u
      })
    })]
  });
}, OC = ({ placeholder: t, selected: e, selectedEntities: n, disabled: r = !1, hiddenAvatar: i = !1, label: s, labelIcon: o, icon: a, error: c, status: d, hint: f, onClickContent: u, hideLabel: h = !1, maxLength: m, loading: p = !1, required: b = !1, readonly: v = !1, append: x, size: w = "sm", open: y }) => {
  const E = z(() => n.some((T) => T.subItems && T.subItems.length > 0), [n]), S = z(() => E ? n.flatMap((T) => (T.subItems ?? []).map((D) => ({
    parent: T,
    subItem: D
  }))) : n.map((T) => ({
    parent: null,
    subItem: {
      subId: T.id,
      subName: T.name,
      subAvatar: T.avatar,
      subDeactivated: T.deactivated
    }
  })), [E, n]), k = S.length === 0 ? void 0 : S.length === 1 ? S[0].subItem.subName : S.length + " " + e, I = S.length === 1 ? S[0].subItem.subName : void 0;
  return l(Wg, {
    onClickContent: u,
    role: "combobox",
    label: s,
    labelIcon: o,
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
    readonly: v,
    size: w,
    avatar: i || !I ? void 0 : {
      type: "person",
      firstName: I,
      lastName: "",
      src: S[0].subItem.subAvatar,
      deactivated: S[0].subItem.subDeactivated
    },
    append: x ?? l(ee, {
      children: l(Ug, {
        open: y,
        disabled: r,
        size: w
      })
    }),
    children: l("span", {
      role: "button",
      className: C("my-auto flex items-center pr-1", t && "text-f1-foreground-secondary", k && "text-f1-foreground", S.length === 1 && !i || a && !k ? "pl-8" : "pl-2"),
      children: l(Ve, {
        tag: "span",
        className: S.length === 1 && S[0].subItem.subDeactivated ? "text-f1-foreground-disabled" : void 0,
        children: S.length === 0 ? t ?? "" : S.length === 1 ? S[0].subItem.subName : `${S.length} ${e}`
      })
    })
  });
}, w_ = (t) => {
  const [e, n] = F((t.alwaysOpen || t.defaultOpen) ?? !1), r = (k) => {
    n(k), t.onOpenChange?.(k);
  };
  V(() => {
    t.defaultOpen && e && t.onOpenChange?.(!0);
  }, [t.defaultOpen]);
  const [i, s] = F(t.entities), [o, a] = F(""), [c, d] = Gg("", 300), f = z(() => t.entities.some((k) => k.subItems && k.subItems.length > 0), [t.entities]);
  function u(k) {
    if (t.singleSelector) {
      t.onSelect(k), n(!1);
      return;
    }
    const I = t.selectedEntities ?? [], T = i.find((L) => L.id === k.id);
    if (!T)
      return;
    const D = new Set((T.subItems ?? []).map((L) => L.subId)), N = /* @__PURE__ */ new Set([T.id]);
    i.forEach((L) => {
      L.id !== T.id && (L.subItems ?? []).some((R) => D.has(R.subId)) && N.add(L.id);
    });
    const _ = [...I];
    function A(L) {
      const O = _.findIndex((R) => R.id === L.id);
      O >= 0 ? _[O] = L : _.push(L);
    }
    N.forEach((L) => {
      const O = i.find((U) => U.id === L);
      if (!O) return;
      const R = O.subItems?.filter((U) => D.has(U.subId)) ?? [], $ = _.findIndex((U) => U.id === L);
      if ($ >= 0) {
        const U = _[$].subItems ?? [], Z = new Set(U.map((K) => K.subId)), ae = [...U, ...R.filter((K) => !Z.has(K.subId))];
        A({
          ...O,
          subItems: ae
        });
      } else
        A({
          ...O,
          subItems: R
        });
    }), t.onSelect(_);
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
      const T = t.selectedEntities ?? [], D = new Set(T.map((A) => A.id)), N = new Map(T.map((A) => [A.id, A.subItems ?? []]));
      D.add(k.id), t.entities.forEach((A) => {
        A.subItems?.some((O) => O.subId === I.subId) && D.add(A.id);
      });
      const _ = [];
      t.entities.forEach((A) => {
        if (D.has(A.id)) {
          let O = [...N.get(A.id) ?? []];
          A.subItems?.some((U) => U.subId === I.subId) && (O.some((Z) => Z.subId === I.subId) || O.push(I));
          const $ = new Set((A.subItems ?? []).map((U) => U.subId));
          O = O.filter((U) => $.has(U.subId)), _.push({
            ...A,
            subItems: O
          });
        }
      }), t.onSelect(_);
    }
  }
  function m(k) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    let I = [];
    const T = t.selectedEntities ?? [];
    if (f) {
      const D = i.find((_) => _.id === k.id);
      if (!D)
        return;
      const N = new Set((D.subItems ?? []).map((_) => _.subId));
      for (const _ of T) {
        const A = (_.subItems ?? []).filter((L) => !N.has(L.subId));
        A.length > 0 && I.push({
          ..._,
          subItems: A
        });
      }
    } else
      I = (T ?? []).filter((D) => D.id !== k.id);
    t.onSelect(I);
  }
  function p(k, I) {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const T = t.selectedEntities ?? [], D = I.subId, N = [];
    for (const _ of T) {
      const A = _.subItems?.filter((L) => L.subId !== D) ?? [];
      A.length > 0 && N.push({
        ..._,
        subItems: A
      });
    }
    t.onSelect(N);
  }
  function b() {
    if (t.singleSelector) {
      t.onSelect(null);
      return;
    }
    const k = t.selectedEntities ?? [];
    let I = [];
    if (f) {
      const T = new Set(i.flatMap((D) => (D.subItems ?? []).map((N) => N.subId)));
      for (const D of k) {
        const N = (D.subItems ?? []).filter((_) => !T.has(_.subId));
        N.length > 0 && I.push({
          ...D,
          subItems: N
        });
      }
    } else {
      const T = new Set(i.map((D) => D.id));
      I = (k ?? []).filter((D) => !T.has(D.id));
    }
    t.onSelect(I);
  }
  function v() {
    const k = [...t.selectedEntities ?? []];
    i.forEach((I) => {
      const T = k.find((D) => D.id === I.id);
      if (!T)
        k.push({
          ...I,
          subItems: I.subItems || []
        });
      else {
        const D = Array.from(/* @__PURE__ */ new Set([...T.subItems ?? [], ...I.subItems ?? []]));
        T.subItems = D;
      }
    }), t.singleSelector || t.onSelect(k);
  }
  const x = (k) => {
    a(k), d(k);
  }, w = (k, I) => {
    t.onItemExpandedChange(k.id, I), s(i.map((T) => T.id === k.id ? {
      ...T,
      expanded: !k.expanded
    } : T));
  };
  V(() => {
    if (!c) {
      s(t.entities);
      return;
    }
    if (f && !t.applySearchToGroup) {
      const I = t.entities.map((T) => {
        const D = RC(T, c), N = T.subItems?.map((_) => ({
          ..._,
          score: Li(c, _.subSearchKeys ?? [_.subName])
        })).filter((_) => _.score < 1 / 0).sort((_, A) => _.score - A.score);
        return {
          ...T,
          score: D,
          expanded: T.expanded ?? (N?.length ?? 0) > 0,
          subItems: N
        };
      }).filter((T) => T.score < 1 / 0).sort((T, D) => T.score - D.score);
      s(I);
    } else {
      const k = t.entities.map((I) => {
        const T = Li(c, I.searchKeys ?? [I.name]);
        return {
          ...I,
          score: T
        };
      }).filter((I) => I.score < 1 / 0).sort((I, T) => I.score - T.score);
      s(k);
    }
  }, [c, t.entities, t.applySearchToGroup, f, s]);
  const y = W(null), [E, S] = F(0);
  return Wn(() => {
    const k = () => {
      y.current && S(y.current.offsetWidth);
    };
    return k(), window.addEventListener("resize", k), () => window.removeEventListener("resize", k);
  }, []), t.alwaysOpen ? l("div", {
    ref: y,
    className: C("scrollbar-macos relative overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0", t.width ? "w-fit" : "w-full"),
    children: l(_c, {
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
      onSelectAll: v,
      selectedEntities: t.selectedEntities ?? [],
      search: o,
      onSearch: x,
      onToggleExpand: w,
      searchPlaceholder: t.searchPlaceholder,
      selectAllLabel: t.selectAllLabel,
      clearLabel: t.clearLabel,
      selectedLabel: t.selectedLabel,
      singleSelector: t.singleSelector,
      loading: t.loading,
      notFoundTitle: t.notFoundTitle,
      notFoundSubtitle: t.notFoundSubtitle,
      width: t.width ?? E - 2,
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
    }), l(xl, {
      className: C("scrollbar-macos relative w-full overflow-auto rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"),
      children: l(_c, {
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
        onSelectAll: v,
        selectedEntities: t.selectedEntities ?? [],
        search: o,
        onSearch: x,
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
function Ro(t) {
  return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function Lc(t) {
  return Ro(t).split(/\s+/).filter((e) => e.length > 0);
}
function Li(t = "", e) {
  const n = Lc(t);
  if (n.length === 0)
    return 1 / 0;
  for (const r of e) {
    const i = Ro(r), s = Lc(r), o = Ro(t);
    if (i.includes(o) || n.every((c) => s.some((d) => d.includes(c))))
      return 1;
  }
  return 1 / 0;
}
function RC(t, e) {
  const n = Li(e, t.searchKeys ?? [t.name]);
  let r = 1 / 0;
  return t.subItems?.length && (r = t.subItems.reduce((i, s) => {
    const o = Li(e, s.subSearchKeys ?? [s.subName]);
    return Math.min(i, o);
  }, 1 / 0)), Math.min(n, r);
}
var Jn = "ToggleGroup", [ih] = qg(Jn, [
  uu
]), sh = uu(), Bl = Q.forwardRef((t, e) => {
  const { type: n, ...r } = t;
  if (n === "single")
    return /* @__PURE__ */ l(FC, { ...r, ref: e });
  if (n === "multiple")
    return /* @__PURE__ */ l(MC, { ...r, ref: e });
  throw new Error(`Missing prop \`type\` expected on \`${Jn}\``);
});
Bl.displayName = Jn;
var [oh, lh] = ih(Jn), FC = Q.forwardRef((t, e) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: i = () => {
    },
    ...s
  } = t, [o, a] = fu({
    prop: n,
    defaultProp: r,
    onChange: i
  });
  return /* @__PURE__ */ l(
    oh,
    {
      scope: t.__scopeToggleGroup,
      type: "single",
      value: o ? [o] : [],
      onItemActivate: a,
      onItemDeactivate: Q.useCallback(() => a(""), [a]),
      children: /* @__PURE__ */ l(ah, { ...s, ref: e })
    }
  );
}), MC = Q.forwardRef((t, e) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: i = () => {
    },
    ...s
  } = t, [o = [], a] = fu({
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
      value: o,
      onItemActivate: c,
      onItemDeactivate: d,
      children: /* @__PURE__ */ l(ah, { ...s, ref: e })
    }
  );
});
Bl.displayName = Jn;
var [PC, zC] = ih(Jn), ah = Q.forwardRef(
  (t, e) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: i = !0,
      orientation: s,
      dir: o,
      loop: a = !0,
      ...c
    } = t, d = sh(n), f = Yg(o), u = { role: "group", dir: f, ...c };
    return /* @__PURE__ */ l(PC, { scope: n, rovingFocus: i, disabled: r, children: i ? /* @__PURE__ */ l(
      Qg,
      {
        asChild: !0,
        ...d,
        orientation: s,
        dir: f,
        loop: a,
        children: /* @__PURE__ */ l(Ca.div, { ...u, ref: e })
      }
    ) : /* @__PURE__ */ l(Ca.div, { ...u, ref: e }) });
  }
), Oi = "ToggleGroupItem", ch = Q.forwardRef(
  (t, e) => {
    const n = lh(Oi, t.__scopeToggleGroup), r = zC(Oi, t.__scopeToggleGroup), i = sh(t.__scopeToggleGroup), s = n.value.includes(t.value), o = r.disabled || t.disabled, a = { ...t, pressed: s, disabled: o }, c = Q.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ l(
      Kg,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: s,
        ref: c,
        children: /* @__PURE__ */ l(Oc, { ...a, ref: e })
      }
    ) : /* @__PURE__ */ l(Oc, { ...a, ref: e });
  }
);
ch.displayName = Oi;
var Oc = Q.forwardRef(
  (t, e) => {
    const { __scopeToggleGroup: n, value: r, ...i } = t, s = lh(Oi, n), o = { role: "radio", "aria-checked": t.pressed, "aria-pressed": void 0 }, a = s.type === "single" ? o : void 0;
    return /* @__PURE__ */ l(
      Jg,
      {
        ...a,
        ...i,
        ref: e,
        onPressedChange: (c) => {
          c ? s.onItemActivate(r) : s.onItemDeactivate(r);
        }
      }
    );
  }
), dh = Bl, uh = ch;
const fh = St({
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
}), $C = Fe.forwardRef(({ className: t, variant: e, size: n, ...r }, i) => l(hu, {
  ref: i,
  className: C(fh({
    variant: e,
    size: n,
    className: t
  })),
  ...r
}));
$C.displayName = hu.displayName;
const hh = Fe.createContext({
  size: "default",
  variant: "default"
}), mh = Fe.forwardRef(({ className: t, variant: e, size: n, children: r, ...i }, s) => l(dh, {
  ref: s,
  className: C("flex items-center justify-center gap-1.5", t),
  ...i,
  children: l(hh.Provider, {
    value: {
      variant: e,
      size: n
    },
    children: r
  })
}));
mh.displayName = dh.displayName;
const ph = Fe.forwardRef(({ className: t, children: e, variant: n, size: r, ...i }, s) => {
  const o = Fe.useContext(hh);
  return l(uh, {
    ref: s,
    className: C(fh({
      variant: o.variant || n,
      size: o.size || r
    }), t),
    ...i,
    children: e
  });
});
ph.displayName = uh.displayName;
function k_({ onSubmit: t, children: e, ...n }) {
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
function C_({ submitLabel: t, form: e }) {
  return l("div", {
    children: l(j, {
      type: "submit",
      label: t,
      loading: e.formState.isSubmitting
    })
  });
}
const N_ = ({ label: t, description: e, children: n, ...r }) => l(L0, {
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
function S_(t, e, n) {
  const r = z0({
    resolver: $0(t),
    mode: "onChange",
    ...e
  }), i = async (s) => {
    const o = await n(s);
    o.success || (Object.keys(o.errors).map((a) => {
      r.setError(a, {
        message: o.errors[a]
      });
    }), o.rootMessage && r.setError("root", {
      message: o.rootMessage
    }));
  };
  return {
    ...r,
    onSubmit: r.handleSubmit(i)
  };
}
const jC = ({ id: t, createdAt: e, title: n, description: r, icon: i, category: s, isUnread: o = !1, onClick: a, onVisible: c }) => {
  const { ref: d } = fo({
    threshold: 0.1,
    onChange(h) {
      h && c?.(t);
    }
  }), f = Vu(e, {
    yesterdayRelative: !1
  });
  return g("div", {
    ref: d,
    className: "flex w-full cursor-pointer flex-row gap-2 rounded-lg p-2 pr-3 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold",
    onClick: () => {
      a(t);
    },
    children: [l(ho, {
      icon: i ?? mu
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
          children: `${s} · ${f}`
        })
      })]
    }), l("div", {
      className: "ml-1",
      children: o && l("div", {
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
}), Hl = oe("ActivityItem", Ne(jC, BC)), gh = ({ title: t, children: e }) => g("div", {
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
}), HC = ({ title: t, items: e, onClickItem: n, onItemVisible: r }) => l(gh, {
  title: t,
  children: e.map((i) => l(Hl, {
    ...i,
    onClick: () => n(i.id),
    onVisible: r
  }, i.id))
}), VC = ({ title: t, numItems: e }) => l(gh, {
  title: t,
  children: Array.from({
    length: e
  }).map((n, r) => l(Hl.Skeleton, {}, r))
}), di = Ne(HC, VC), WC = 3, UC = ["today", "yesterday", "lastWeek", "lastMonth"], GC = (t) => H0(t, ([e]) => {
  const n = UC.indexOf(e);
  return n === -1 ? -Number(e) : n - 4e3;
}), Fo = () => l("div", {
  className: "-mx-2 h-px bg-f1-background-secondary"
}), qC = ({ items: t, loadingMoreItems: e = !1, onClickItem: n, onEndReached: r, onEndReachedItemsThreshold: i = 5 }) => {
  const s = X(), o = j0(t, "createdAt"), a = Object.values(o).slice().flatMap((f) => f.map((u) => u.id)).slice(-i), c = B0((f) => {
    a.includes(f) && r?.();
  }, 1e3), d = GC(Object.entries(o).filter(([f, u]) => !!u.length));
  return g("div", {
    className: "flex flex-col gap-2 p-2",
    children: [d.map(([f, u], h) => g(Q.Fragment, {
      children: [l(di, {
        title: f in s.date.groups ? s.date.groups[f] : f,
        items: u,
        onClickItem: n,
        onItemVisible: c
      }), h !== d.length - 1 && l(Fo, {})]
    }, f)), e && new Array(WC).fill(null).map((f, u) => l(Hl.Skeleton, {}, u))]
  });
}, KC = () => {
  const t = X();
  return g("div", {
    className: "flex flex-col gap-2 p-2",
    children: [l(di.Skeleton, {
      title: t.date.groups.today,
      numItems: 1
    }), l(Fo, {}), l(di.Skeleton, {
      title: t.date.groups.yesterday,
      numItems: 3
    }), l(Fo, {}), l(di.Skeleton, {
      title: t.date.groups.lastMonth,
      numItems: 5
    })]
  });
}, I_ = oe("ActivityItemList", Ne(qC, KC)), JC = {
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
function QC({ firstName: t, lastName: e, src: n, canReact: r, lastEmojiReaction: i, onReactionSelect: s, pickerRef: o }) {
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
          children: l(Ct, {
            src: n,
            firstName: t,
            lastName: e,
            size: "2xl"
          })
        }), r && l("div", {
          ref: o,
          className: C("absolute -right-0.5", n ? "bottom-0.5" : "-bottom-[3px]"),
          children: l(Wu, {
            lastEmojiReaction: i,
            onSelect: s,
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
    const s = e.current;
    if (!s) return;
    const o = Zg.create(s, {
      resize: !0,
      useWorker: !1
    }), a = ["9D76F3", "3FC495", "E61D46", "F6AF3D"], c = 0.1;
    n.current = setInterval(() => {
      o({
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
const ZC = ({ link: t, firstName: e, lastName: n, src: r, onClick: i, canReact: s = !0, lastEmojiReaction: o, onReactionSelect: a, type: c, typeLabel: d, date: f }) => {
  const [u, h] = F(o), m = W(null);
  V(() => {
    h(o);
  }, [o]);
  const p = (E) => {
    h(E), a?.(E);
  }, b = Ji(), { canvasRef: v, handleMouseEnter: x, handleMouseLeave: w } = XC(b), y = Er({
    emoji: JC[c],
    size: "sm"
  });
  return g(mt, {
    href: t,
    onClick: i,
    className: C("relative flex flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary no-underline transition-shadow hover:shadow", we()),
    onMouseEnter: b ? void 0 : x,
    onMouseLeave: b ? void 0 : w,
    children: [l("canvas", {
      ref: v,
      className: "pointer-events-none absolute inset-0 z-50 h-full w-full"
    }), l("div", {
      className: "basis-2/3 px-1 pt-1",
      children: l(QC, {
        firstName: e,
        lastName: n,
        src: r,
        canReact: s,
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
            children: y
          })]
        })]
      }), l("div", {
        className: "shrink-0",
        children: l(vo, {
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
}), A_ = Ne(ZC, eN), T_ = ({ title: t, subtitle: e, buttonLabel: n, onClick: r }) => g("div", {
  className: "flex w-full flex-col items-start justify-between gap-4 rounded-md bg-gradient-to-r from-[#F5A51C]/30 via-[#E51943]/30 to-[#5596F6]/30 px-3 py-3 ring-1 ring-inset ring-f1-border-secondary sm:flex-row sm:items-center sm:px-4",
  children: [g("div", {
    className: "flex flex-col items-start gap-3 sm:flex-row sm:items-center",
    children: [l(pu, {
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
    children: l(j, {
      label: n,
      variant: "outline",
      onClick: r
    })
  })]
});
function tN({ emoji: t, initialCount: e, hasReacted: n = !1, users: r, onInteraction: i }) {
  const [s, o] = F(n), [a, c] = F(e), d = W(null), { fireEmojiConfetti: f } = eb(), u = (p, b) => {
    p.stopPropagation(), c(a + (s ? -1 : 1)), o(!s), i?.(b), s || f(b, d);
  }, h = r?.map((p) => p.name).join(", ") || "", m = l(fl, {
    ref: d,
    variant: "outline",
    size: "md",
    compact: !0,
    onClick: (p) => {
      u(p, t);
    },
    className: C("flex items-center gap-1 px-[3px] font-medium leading-tight shadow-none transition-all active:scale-90 motion-reduce:transition-none motion-reduce:active:scale-100", s && "border-f1-border-selected bg-f1-background-selected hover:border-f1-border-selected-bold"),
    "aria-label": tb(t),
    prepend: l(Er, {
      emoji: t,
      size: "md"
    }),
    children: l(gu, {
      value: a,
      spinTiming: {
        duration: 200,
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      },
      className: C("tabular-nums", s ? "text-f1-foreground-selected" : "text-f1-foreground")
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
    children: [r && l(j, {
      label: r.label,
      icon: r.icon,
      onClick: r.onClick,
      variant: "outline",
      hideLabel: !0
    }), l(Wu, {
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
const rN = oe("Reactions", nN), Rc = (t) => {
  t.stopPropagation();
}, iN = ({ content: t, collapsed: e }) => {
  const n = "FactorialOneTextEditor";
  return document.querySelectorAll(`.${n} a`).forEach((r) => {
    r.removeEventListener("click", Rc), r.addEventListener("click", Rc);
  }), l("div", {
    dangerouslySetInnerHTML: {
      __html: Zd.sanitize(t)
    },
    className: C(n, e && "line-clamp-5")
  });
}, sN = () => g("div", {
  className: "flex flex-col justify-around gap-3 py-2",
  children: [l(M, {
    className: "h-2.5 w-1/2 rounded-2xs"
  }), l(M, {
    className: "h-2.5 w-2/3 rounded-2xs"
  })]
}), bh = Ne(iN, sN), Fc = ({ tags: t, right: e }) => l("div", {
  className: C("flex flex-1 flex-row items-center gap-1.5", e && "justify-end"),
  children: t.map((n) => {
    const r = l("div", {
      children: l(ln, {
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
}), Mo = J(function({ label: e, title: n, subtitle: r, description: i, color: s, isPending: o, leftTags: a, rightTags: c, fromDate: d, toDate: f, noBackground: u }, h) {
  return g("div", {
    ref: h,
    className: "relative flex flex-row items-stretch gap-2.5 overflow-hidden rounded-sm p-2",
    children: [!u && g(ee, {
      children: [l("div", {
        className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
        style: {
          background: `${s}`
        }
      }), l("div", {
        className: "absolute bottom-0 left-0 right-0 top-0 opacity-5",
        style: {
          background: `linear-gradient(to right, ${s}, transparent)`
        }
      })]
    }), l("div", {
      className: "min-h-10 min-w-1 rounded-2xs",
      style: o ? {
        backgroundImage: `repeating-linear-gradient(
              135deg,
              ${s} 0px,
              ${s} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
      } : {
        backgroundColor: s
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
          children: [d && g(ee, {
            children: [l(vo, {
              date: d
            }), l(q, {
              icon: Ar,
              size: "sm",
              className: "text-f1-foreground-tertiary"
            })]
          }), f && l(vo, {
            date: f
          })]
        })]
      }), (a || c) && g("div", {
        className: "flex flex-row items-center justify-between",
        children: [a && l(Fc, {
          tags: a
        }), c && l(Fc, {
          tags: c,
          right: !0
        })]
      })]
    })]
  });
}), oN = /* @__PURE__ */ new Set(["avi", "mkv", "mov", "mpeg", "mp4", "webm", "wmv"]), vh = (t) => {
  if (!t) return !1;
  if (t.indexOf("//s3.") >= 0)
    return t.indexOf("response-content-type=video") >= 0;
  const n = (t?.split(".")).at(-1);
  return !!n && oN.has(n);
}, lN = ({ title: t, mediaUrl: e, place: n, date: r }) => {
  let i = V0(r);
  const s = (o) => {
    o.stopPropagation();
  };
  return n && (i = `${i} · ${n}`), g("div", {
    className: "flex w-full flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary p-1 shadow",
    children: [e && l("div", {
      className: "relative aspect-video w-full overflow-hidden rounded-md",
      children: vh(e) ? l("video", {
        controls: !0,
        className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
        onClick: s,
        children: l("source", {
          src: e
        })
      }) : g(ee, {
        children: [l("img", {
          src: e,
          role: "presentation",
          loading: "lazy",
          className: "aspect-video h-full w-full object-cover"
        }), l(M, {
          className: "absolute inset-0 h-full w-full"
        })]
      })
    }), l(Mo, {
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
}), xh = Ne(lN, aN), cN = ({ id: t, author: e, group: n, createdAt: r, title: i, description: s, onClick: o, mediaUrl: a, event: c, counters: d, reactions: f, inLabel: u, comment: h, dropdownItems: m, noReactionsButton: p = !1 }) => {
  const b = [d.views, d.comments].filter(Boolean).join(" · "), v = Vu(r), x = () => {
    o(t);
  }, w = (E) => {
    E.stopPropagation();
  }, y = e ? `${e.firstName} ${e.lastName}` : void 0;
  return g("div", {
    className: "flex w-full cursor-pointer flex-row gap-3 rounded-xl border border-solid border-transparent p-3 pt-2 hover:bg-f1-background-hover focus:border-f1-border-secondary focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold md:pb-4 md:pt-3",
    onClick: x,
    children: [l("div", {
      className: "hidden md:block",
      children: e ? l(In, {
        href: e.url || "#",
        title: y,
        stopPropagation: !0,
        children: l(Ct, {
          firstName: e.firstName,
          lastName: e.lastName,
          src: e.avatarUrl
        })
      }) : l(ho, {
        icon: Na
      })
    }), g("div", {
      className: "flex flex-1 flex-col gap-3",
      children: [g("div", {
        className: "flex flex-col gap-2",
        children: [g("div", {
          className: "flex flex-row justify-between",
          children: [g("div", {
            className: "flex flex-1 flex-row flex-wrap items-center gap-1",
            children: [e ? g(ee, {
              children: [l(In, {
                href: e.url,
                className: "block md:hidden",
                title: y,
                stopPropagation: !0,
                children: l("span", {
                  className: "flex items-center",
                  children: l(Ct, {
                    firstName: e.firstName,
                    lastName: e.lastName,
                    src: e.avatarUrl,
                    size: "xs"
                  })
                })
              }), l(In, {
                href: e.url,
                title: y,
                className: "font-medium text-f1-foreground no-underline visited:text-f1-foreground",
                stopPropagation: !0,
                children: y
              })]
            }) : l("div", {
              className: "block md:hidden",
              children: l(ho, {
                icon: Na,
                size: "sm"
              })
            }), l("span", {
              className: C("text-f1-foreground-secondary", !e && "capitalize"),
              children: u
            }), l(In, {
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
              children: v
            })]
          }), g("div", {
            className: "flex flex-row gap-2",
            children: [l("div", {
              className: "hidden flex-row gap-2 md:flex",
              children: m?.length && l(Me, {
                items: m,
                icon: Ci,
                size: "sm"
              })
            }), l("div", {
              className: "md:hidden",
              children: l(Me, {
                items: [{
                  label: h.label,
                  onClick: h.onClick
                }, ...m ?? []],
                icon: Ci,
                size: "sm"
              })
            })]
          })]
        }), g("div", {
          className: "flex flex-col gap-1 text-f1-foreground",
          children: [l("p", {
            className: "text-xl font-semibold",
            children: i
          }), s && l(bh, {
            content: s,
            collapsed: !0
          })]
        })]
      }), a && !c && l("div", {
        className: "relative aspect-video overflow-hidden rounded-xl md:max-w-[480px]",
        children: vh(a) ? l("video", {
          controls: !0,
          className: "aspect-video h-full w-full bg-f1-background-secondary object-cover",
          onClick: w,
          children: l("source", {
            src: a
          })
        }) : g(ee, {
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
        children: l(xh, {
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
      children: l(bh.Skeleton, {})
    }), e && !t && l("div", {
      className: "mt-3 aspect-video w-full overflow-hidden rounded-xl md:w-2/3",
      children: l(M, {
        className: "h-full w-full rounded-2xs"
      })
    }), t && l("div", {
      className: "mt-3 w-full md:w-2/3",
      children: l(xh.Skeleton, {})
    }), g("div", {
      className: "mt-3 flex flex-row items-center gap-1 py-1",
      children: [l(M, {
        className: "h-2.5 w-14 rounded-2xs"
      }), l(M, {
        className: "h-2.5 w-14 rounded-2xs"
      })]
    })]
  })]
}), E_ = Ne(cN, dN), uN = ({ description: t }) => {
  const [e, n] = F(!1), [r, i] = F(!1), s = X(), o = W(null), a = W(null), c = mo({
    ref: o
  }), d = mo({
    ref: a
  });
  return V(() => {
    d.height && c.height && i(d.height > c.height);
  }, [d.height, c.height]), g("div", {
    className: "flex max-w-[640px] flex-col gap-1",
    children: [g(G.div, {
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
        ref: o,
        className: C("text-lg text-f1-foreground-secondary", !e && "line-clamp-2"),
        children: t
      })]
    }), (r || e) && l("button", {
      onClick: () => n((f) => !f),
      className: "relative w-fit font-medium text-f1-foreground after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1.5px] after:bg-f1-border after:transition-all after:content-[''] hover:after:bg-f1-border-hover",
      children: e ? s.actions.showLess : s.actions.showAll
    })]
  });
}, fN = {
  warning: {
    icon: iu,
    iconColor: "warning",
    textColor: "text-f1-foreground-warning"
  },
  critical: {
    icon: qd,
    iconColor: "critical",
    textColor: "text-f1-foreground-critical"
  }
};
function qs({ item: t, collapse: e = !1 }) {
  const { value: n } = t;
  switch (n.type) {
    case "text":
      return l("span", {
        children: n.content
      });
    case "avatar":
      return g("div", {
        className: "flex items-center gap-1",
        children: [l(Yi, {
          avatar: n.variant,
          size: "xs"
        }), n.text && l("span", {
          children: n.text
        })]
      });
    case "status":
      return l(Fn, {
        text: n.label,
        variant: n.variant
      });
    case "list":
      return l(El, {
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
        children: [l(ln, {
          text: n.tags[0]
        }), n.tags.length > 1 && g("span", {
          className: "tabular-nums text-f1-foreground-secondary",
          children: ["+", n.tags.length - 1]
        })]
      }) : l("div", {
        className: C("flex flex-col gap-1 [&>div]:w-fit", n.tags.length > 1 && "-mt-[3px]"),
        children: n.tags.map((r) => l(ln, {
          text: r
        }, r))
      });
    case "dot-tag":
      return l(Tl, {
        text: n.label,
        color: n.color
      });
    case "date": {
      if (n.icon === void 0)
        return l("span", {
          children: n.formattedDate
        });
      const { icon: r, iconColor: i, textColor: s } = fN[n.icon];
      return g("div", {
        className: "flex items-center justify-center gap-0.5 font-medium",
        children: [l(q, {
          icon: r,
          color: i
        }), l("span", {
          className: s,
          children: n.formattedDate
        })]
      });
    }
  }
}
const hN = (t) => t?.type !== "copy", mN = (t) => t?.type === "copy";
function pN({ item: t }) {
  const [e, n] = F(!1), r = t.value.type === "data-list" && t.value.data.length > 1 || t.value.type === "tag-list" && t.value.tags.length > 1, i = !!t.actions?.length, s = i || r, o = (a, c) => {
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
          children: l(q, {
            icon: Qi,
            size: "sm"
          })
        })
      })]
    }), g("div", {
      role: "button",
      tabIndex: s ? 0 : -1,
      onMouseEnter: () => s && n(!0),
      onMouseLeave: () => s && n(!1),
      onFocus: () => s && n(!0),
      onBlur: () => s && n(!1),
      className: "relative flex h-5 w-fit items-center hover:cursor-default",
      "aria-label": `${t.label} actions`,
      children: [l("div", {
        className: C("hidden font-medium text-f1-foreground md:block", !i && "block"),
        children: l(qs, {
          item: t,
          collapse: !0
        })
      }), i && l("div", {
        className: "w-full md:hidden",
        children: l(Dl, {
          items: t.actions?.filter(hN).map((a) => ({
            label: a.label,
            icon: a.icon,
            onClick: a.onClick
          })) ?? [],
          children: l(qs, {
            item: t,
            collapse: !0
          })
        })
      }), l(Ae, {
        children: e && s && g(G.div, {
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
            children: l(qs, {
              item: t
            })
          }), i && l(G.div, {
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
              valueToCopy: o(t.value, a.copyValue)
            }, `copy-${c}`) : l(dt, {
              label: a.label,
              children: l(j, {
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
    children: n.map((r, i) => g(ee, {
      children: [l(pN, {
        item: r
      }, `item-${i}`), i < n.length - 1 && l("div", {
        className: "hidden h-4 w-[1px] bg-f1-border md:block"
      }, `separator-${i}`)]
    }))
  });
}), Po = oe("Metadata", gN), Ks = (t) => t.isVisible !== !1;
function bN({ title: t, avatar: e, deactivated: n, description: r, primaryAction: i, secondaryActions: s = [], otherActions: o = [], status: a, metadata: c = [] }) {
  const d = [a && {
    label: a.label,
    value: {
      type: "status",
      label: a.text,
      variant: a.variant
    },
    actions: a.actions,
    hideLabel: !0
  }, ...c], f = s.filter(Ks), u = o.filter(Ks), h = i && Ks(i), m = f.length > 0, p = u.length > 0, b = (x) => !!x && "items" in x, v = (x) => !!x && "label" in x && !("items" in x);
  return g("div", {
    className: "resource-header flex flex-col gap-3 px-6 pb-5 pt-3",
    children: [g("div", {
      className: C("flex flex-col items-start justify-start gap-4 md:flex-row", !r && "md:items-center"),
      children: [g("div", {
        className: C("flex grow flex-col items-start justify-start gap-3 md:flex-row md:items-start", !r && "md:items-center"),
        children: [e && l("div", {
          className: "flex items-start",
          children: l(Yi, {
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
        children: l(Po, {
          items: d
        })
      }), g("div", {
        className: "flex w-full shrink-0 flex-col gap-x-2 gap-y-3 md:hidden",
        children: [h && v(i) && l("div", {
          className: "w-full md:hidden [&>*]:w-full",
          children: l(j, {
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
          children: l(on, {
            items: i.items,
            onClick: i.onClick,
            variant: "default",
            value: i.value,
            size: "lg",
            disabled: i.disabled,
            tooltip: i.tooltip
          })
        }), f.map((x) => l(Rn, {
          children: l("div", {
            className: "w-full md:hidden [&>*]:w-full [&>span]:block [&>span_div]:w-full",
            children: l(j, {
              label: x.label,
              onClick: x.onClick,
              variant: x.variant ?? "outline",
              icon: x.icon,
              size: "lg",
              hideLabel: x.hideLabel,
              disabled: x.disabled,
              tooltip: x.tooltip
            })
          })
        }, x.label)), u.length > 0 && l("div", {
          className: "w-full [&>*]:w-full [&_button]:w-full",
          children: l(Dl, {
            items: u
          })
        })]
      }), g("div", {
        className: "-m-1 hidden w-fit shrink-0 flex-wrap items-center gap-x-2 gap-y-2 p-1 md:flex md:overflow-x-auto",
        children: [u.length > 0 && l("div", {
          children: l(Me, {
            items: u
          })
        }), f.map((x) => l(Rn, {
          children: l("div", {
            className: "hidden md:block",
            children: l(j, {
              label: x.label,
              onClick: x.onClick,
              variant: x.variant ?? "outline",
              icon: x.icon,
              hideLabel: x.hideLabel,
              disabled: x.disabled,
              tooltip: x.tooltip
            })
          })
        }, x.label)), h && (m || p) && l("div", {
          className: "mx-1 h-4 w-px bg-f1-background-secondary-hover"
        }), h && v(i) && l("div", {
          className: "hidden md:block",
          children: l(j, {
            label: i.label,
            onClick: i.onClick,
            variant: "default",
            icon: i.icon,
            disabled: i.disabled,
            tooltip: i.tooltip
          })
        }), h && b(i) && l("div", {
          className: "hidden md:block",
          children: l(on, {
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
      children: l(Po, {
        items: d
      })
    })]
  });
}
const vN = ({ avatar: t, title: e, description: n, primaryAction: r, secondaryActions: i, otherActions: s, status: o, metadata: a, deactivated: c }) => l(bN, {
  avatar: t,
  title: e,
  description: n,
  primaryAction: r,
  secondaryActions: i,
  otherActions: s,
  status: o,
  metadata: a,
  deactivated: c
}), D_ = oe("ResourceHeader", vN), xN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], yN = J(function({ daysOfTheWeek: e = xN, activatedDays: n = [] }, r) {
  const i = n.map((s) => `${s}-${e[s]}`);
  return l(mh, {
    type: "multiple",
    value: i,
    disabled: !0,
    className: "flex justify-start",
    ref: r,
    children: e.map((s, o) => l(ph, {
      "aria-label": s,
      value: `${o}-${s}`,
      className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
      children: s[0]
    }, o))
  });
}), wN = 750, kN = ({ text: t, children: e }) => {
  const [n, r] = F(!1);
  V(() => {
    if (n) {
      const s = setTimeout(() => r(!1), wN);
      return () => clearTimeout(s);
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
        children: [!n && l(G.div, {
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
          children: l(q, {
            icon: pl,
            size: "md",
            "aria-hidden": !0,
            color: "default",
            className: C("opacity-0 transition-opacity duration-300", !n && "group-hover:opacity-100 group-focus-visible:opacity-100")
          })
        }, "copy-icon"), n && l(G.div, {
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
          children: l(q, {
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
}, yh = Zi(({ children: t, className: e, ...n }) => g(mt, {
  ...n,
  className: C("text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground", "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover", e),
  children: [t, l("div", {
    className: "grid",
    children: l(q, {
      "aria-hidden": !0,
      icon: Ar,
      size: "md"
    })
  })]
}));
yh.displayName = "NavigateAction";
const wh = Zi(({ children: t, className: e, href: n, ...r }) => g(mt, {
  ...r,
  target: "_blank",
  href: n,
  rel: "noopener noreferrer",
  className: C("text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground", "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover", e),
  children: [t, l("div", {
    className: "grid opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100",
    children: l(q, {
      "aria-hidden": !0,
      icon: ib,
      size: "md",
      color: "default"
    })
  })]
}));
wh.displayName = "OpenLinkAction";
const Rr = J((t, e) => {
  const { text: n, leftIcon: r, className: i, action: s = {
    type: "noop"
  } } = t;
  return l("li", {
    className: "flex rounded font-medium text-f1-foreground *:flex-1",
    ref: e,
    children: g(CN, {
      action: s,
      className: C("flex items-center gap-1.5 p-1.5", i),
      children: [r && (typeof r == "function" ? r({}) : l(q, {
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
Rr.displayName = "ItemContainer";
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
      return l(wh, {
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
}, kh = J(({ children: t, label: e, isHorizontal: n = !1 }, r) => g("div", {
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
kh.displayName = "DataList";
const Ch = J(({ text: t, icon: e, action: n }, r) => l(Rr, {
  ref: r,
  text: t,
  leftIcon: e,
  action: fs(n, t)
}));
Ch.displayName = "DataList.Item";
const NN = oe("DataList.Item", Ch), Nh = J(({ action: t, avatarUrl: e, firstName: n, lastName: r }, i) => {
  const s = `${n} ${r}`;
  return l(Rr, {
    ref: i,
    leftIcon: () => l(Ct, {
      size: "xs",
      src: e,
      firstName: n,
      lastName: r
    }),
    text: s,
    action: fs(t, s)
  });
});
Nh.displayName = "PersonItem";
const SN = oe("PersonItem", Nh), Sh = J(({ avatarUrl: t, name: e, action: n }, r) => l(Rr, {
  ref: r,
  leftIcon: () => l(bu, {
    name: e,
    size: "xs",
    src: t
  }),
  text: e,
  action: fs(n, e)
}));
Sh.displayName = "CompanyItem";
const IN = oe("CompanyItem", Sh), Ih = J(({ action: t, name: e }, n) => l(Rr, {
  ref: n,
  leftIcon: () => l(sb, {
    name: e,
    size: "xs"
  }),
  text: e,
  action: fs(t, e)
}));
Ih.displayName = "TeamItem";
const AN = oe("TeamItem", Ih), Ah = J(({ ...t }, e) => l("li", {
  ref: e,
  className: "flex items-start pt-1",
  children: l(Tl, {
    ...t
  })
}));
Ah.displayName = "DotTagItem";
const TN = oe("DotTagItem", Ah), fs = (t, e) => t && t.type === "copy" ? {
  type: "copy",
  text: t.text ?? e
} : t, EN = oe("DataList", kh), Sn = Object.assign(EN, {
  Item: NN,
  CompanyItem: IN,
  PersonItem: SN,
  TeamItem: AN,
  DotTagItem: TN
}), DN = ({ content: t }) => g(ee, {
  children: [t.type === "weekdays" && l("li", {
    className: "list-none px-1.5 py-1",
    children: l(yN, {
      ...t
    })
  }), t.type === "person" && l(Sn.PersonItem, {
    ...t
  }), t.type === "item" && l(Sn.Item, {
    ...t
  }), t.type === "team" && l(Sn.TeamItem, {
    ...t
  }), t.type === "company" && l(Sn.CompanyItem, {
    ...t
  }), t.type === "dot-tag" && l(Sn.DotTagItem, {
    ...t
  })]
}), _N = J(function({ title: e, content: n, isHorizontal: r = !1, spacingAtTheBottom: i }, s) {
  const o = Array.isArray(n) ? n : [n];
  return l("div", {
    ref: s,
    className: C("flex flex-col gap-0.5", i && !r && "pb-3", r && "xs:[&_ul>li]:p-0 [&_ul]:flex-1"),
    children: l(Sn, {
      label: e,
      isHorizontal: r,
      children: o.map((a, c) => l(DN, {
        content: a
      }, c))
    })
  });
}), LN = oe("DetailsItem", _N), ON = J(function({ title: e, tableView: n = !1, details: r }, i) {
  return g("div", {
    ref: i,
    className: "flex flex-col gap-4",
    children: [!!e && l("p", {
      className: "mb-1 pl-1.5 text-sm font-semibold text-f1-foreground-secondary",
      children: e.toLocaleUpperCase()
    }), l("div", {
      className: C("flex flex-col", n ? "max-w-[580px] rounded-md border border-solid border-f1-border-secondary" : "gap-3"),
      children: r?.map((s, o) => g(Q.Fragment, {
        children: [l(LN, {
          title: s.title,
          content: s.content,
          spacingAtTheBottom: s.spacingAtTheBottom,
          isHorizontal: n
        }, s.title), n && o !== r.length - 1 && l("div", {
          className: "h-[1px] w-full bg-f1-border-secondary"
        })]
      }, s.title))
    })]
  });
}), __ = oe("DetailsItemsList", ON), Th = Q.forwardRef(({ person: t, onClick: e, ...n }, r) => {
  const i = () => {
    e();
  };
  return g("div", {
    ref: r,
    className: C("flex w-full flex-row flex-wrap items-center gap-2 rounded-md border p-2 hover:bg-f1-background-hover focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold", n.withPointerCursor && "cursor-pointer"),
    onClick: i,
    children: [l(Ct, {
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
          children: l(q, {
            icon: ru,
            size: "sm",
            className: "text-f1-icon-secondary"
          })
        })]
      }), "bottomTags" in n && l("div", {
        className: "-ml-1.5 flex flex-row items-center [&>div]:-mr-1",
        children: n.bottomTags.map((s, o) => g(ee, {
          children: [l(ln, {
            ...s
          }, s.text), o < n.bottomTags.length - 1 && l("span", {
            children: "·"
          })]
        }))
      }), "description" in n && n.description && l("p", {
        className: "truncate text-f1-foreground-secondary",
        children: n.description
      })]
    }), g("div", {
      className: "flex flex-row items-center justify-between gap-2",
      children: ["rightTag" in n && n.rightTag && l(Tl, {
        ...n.rightTag
      }), "actions" in n && g("div", {
        className: "flex flex-1 flex-row items-center justify-end gap-2",
        children: [n.actions?.primary && l(j, {
          variant: "outline",
          onClick: n.actions.primary.onClick,
          label: n.actions.primary.label,
          icon: n.actions.primary.icon
        }), n.actions?.secondary && l(j, {
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
Th.displayName = "OnePersonListItem";
const L_ = oe("OnePersonListItem", Ne(Th, RN));
function FN({ children: t, sidebar: e, banner: n, ai: r, aiPromotion: i }) {
  const s = r?.enabled ? ob : i?.enabled ? Gk : Rn, o = r?.enabled ? r : i?.enabled ? i : void 0;
  return l(Nx, {
    children: l(s, {
      ...o,
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
const O_ = oe("ApplicationFrame", FN), MN = ({ contentId: t }) => {
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
  const { sidebarState: s, toggleSidebar: o, isSmallScreen: a, setForceFloat: c } = Gn(), d = Ji(), { open: f } = lb(), { open: u } = ls(), h = Bd(`(max-width: ${go.xl}px)`, {
    initializeWithValue: !0
  });
  return V(() => {
    c(f);
  }, [f, c]), V(() => {
    c(u);
  }, [u, c]), zN(f, h), l(ee, {
    children: l(Uu, {
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
              children: s === "unlocked" && l(G.nav, {
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
                onClick: () => o()
              })
            }), g("div", {
              className: C({
                "transition-all": !d
              }, s === "locked" ? "w-[240px] shrink-0 pl-3" : "w-0"),
              ref: (m) => {
                s === "hidden" ? m?.setAttribute("inert", "") : m?.removeAttribute("inert");
              },
              children: [l(MN, {
                contentId: "content"
              }), r]
            }), l(G.main, {
              id: "content",
              layoutId: "main",
              className: C("relative flex max-w-full flex-1 overflow-auto xs:py-1", t && t.enabled ? "xs:pr-0.5" : "xs:pr-1", s === "locked" ? "pl-0" : "xs:pl-1"),
              layoutDependency: [s],
              transition: {
                duration: d ? 0 : 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30
              },
              children: l(G.div, {
                className: "flex max-w-full flex-1 overflow-auto",
                layout: "position",
                children: n
              })
            }), t && t.enabled && l("div", {
              className: "py-1 pr-1 pl-0 h-full flex",
              children: l(ab, {})
            }), e && e.enabled && l(Uk, {})]
          })
        })]
      })
    })
  });
}
const jN = St({
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
function Eh({ children: t, header: e, period: n, embedded: r = !1 }) {
  const { sidebarState: i, toggleSidebar: s, isSmallScreen: o } = Gn();
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
        children: [(o || i === "hidden") && l(j, {
          variant: "ghost",
          onClick: () => s(),
          label: "Open main menu",
          icon: Jd,
          hideLabel: !0
        }), g("div", {
          className: C("flex flex-row items-center", o ? "gap-1.5" : "gap-3"),
          children: [e?.onPulseClick ? l(qf, {
            src: e.employeeAvatar,
            firstName: e.employeeFirstName,
            lastName: e.employeeLastName,
            pulse: e.pulse,
            onPulseClick: e.onPulseClick
          }) : l(Ct, {
            src: e.employeeAvatar,
            firstName: e.employeeFirstName,
            lastName: e.employeeLastName,
            size: o ? "small" : e.description ? "large" : "medium"
          }), g("div", {
            className: "flex flex-col",
            children: [l("p", {
              className: C(o ? "text-lg" : "text-2xl", "font-semibold text-f1-foreground"),
              children: e.title
            }), e.description && l("p", {
              className: C(o ? "text-md" : "text-lg", "text-f1-foreground-secondary"),
              children: e.description
            })]
          })]
        })]
      }), g("div", {
        children: [l(Yd, {}), l(sf, {})]
      })]
    }), l("div", {
      className: C("isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1", o && "-mt-3"),
      children: t
    })]
  });
}
Eh.displayName = "DaytimePage";
const R_ = oe("DaytimePage", Eh);
function BN(t) {
  return t.filter((e) => !!e.title).map(({ title: e, description: n, href: r, onClick: i, target: s }) => ({
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
        children: [l(q, {
          icon: vu,
          size: "sm"
        }), n && l("div", {
          className: "absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-f1-background-critical-bold ring-2 ring-f1-background-critical"
        })]
      })
    })
  });
}
const F_ = oe("OmniButton", HN);
function Dh({ children: t, header: e, embedded: n = !1 }) {
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
Dh.displayName = "Page";
const M_ = oe("Page", Dh);
function VN({ companies: t, selected: e, onChange: n, isLoading: r = !1, withNotification: i = !1, additionalOptions: s = [] }) {
  const o = z(() => t.find((a) => a.id === e) || t[0], [t, e]);
  return r ? g("div", {
    className: "flex w-fit items-center gap-2 p-1.5",
    children: [l(M, {
      className: "size-6"
    }), l(M, {
      className: "h-3 w-14"
    })]
  }) : t.length + (s?.length || 0) === 1 ? l("div", {
    className: "p-1.5",
    style: {
      maxWidth: "168px"
    },
    children: l(Mc, {
      company: o,
      withNotification: i
    })
  }) : l("div", {
    className: "min-w-0 flex-1",
    children: l(WN, {
      companies: t,
      selected: o,
      onChange: n,
      additionalOptions: s,
      children: l(Mc, {
        company: o,
        withNotification: i
      })
    })
  });
}
const WN = ({ companies: t, selected: e, onChange: n, children: r, additionalOptions: i = [] }) => {
  const s = X(), [o, a] = F(!1), c = z(() => [...t.map((f) => ({
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
    label: s.navigation.sidebar.companySelector.label,
    hideLabel: !0,
    options: c,
    value: e.id,
    onChange: d,
    placeholder: s.navigation.sidebar.companySelector.placeholder,
    open: o,
    onOpenChange: a,
    children: g("div", {
      className: C("group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover", we()),
      tabIndex: 0,
      title: e?.name,
      children: [r, l("div", {
        className: "flex w-5 shrink-0 items-center justify-center",
        children: l("div", {
          className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all",
          children: l(G.div, {
            animate: {
              rotate: o ? 180 : 0
            },
            transition: {
              duration: 0.2
            },
            className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
            children: l(q, {
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
  children: [l(bu, {
    name: t?.name?.[0],
    src: t?.logo,
    size: "sm",
    badge: e ? {
      icon: xu,
      type: "highlight"
    } : void 0
  }), l(Ve, {
    tag: "span",
    children: t?.name ?? ""
  })]
});
function P_({ user: t, options: e, showActivityButton: n = !1, activityButtonShortcut: r, onActivityButtonClick: i, onDropdownClick: s, hasActivityUpdates: o }) {
  const a = X();
  return g("div", {
    className: "flex flex-row items-center justify-between gap-1 p-3",
    children: [l("div", {
      className: "min-w-0 flex-1",
      children: l(Me, {
        items: e,
        children: g("button", {
          className: C("flex w-full max-w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary", we("focus-visible:ring-inset")),
          onClick: s,
          children: [l(Ct, {
            src: t.avatarUrl,
            firstName: t.firstName,
            lastName: t.lastName,
            size: "xs"
          }), l(Ve, {
            children: `${t.firstName} ${t.lastName}`
          })]
        })
      })
    }), n && l(dt, {
      label: a.notifications,
      shortcut: r,
      children: g("div", {
        className: "relative",
        children: [l(j, {
          icon: mu,
          label: a.notifications,
          onClick: i,
          variant: "ghost",
          hideLabel: !0
        }), o && l("div", {
          className: "absolute -right-1 -top-1 rounded-full bg-f1-background",
          children: l(cb, {
            type: "highlight",
            size: "sm",
            icon: xu
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
      children: l(q, {
        icon: Zt,
        size: "md"
      })
    })]
  });
}
function z_({ companies: t, selected: e, onChange: n, withNotification: r = !1, additionalOptions: i, isLoading: s = !1 }) {
  return g("div", {
    className: "flex h-[72px] w-full flex-1 items-center justify-between gap-3 px-3",
    children: [l(VN, {
      companies: t,
      selected: e,
      onChange: n,
      isLoading: s,
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
const _h = zt(void 0);
function KN({ children: t }) {
  const [e, n] = F(!1), [r, i] = F(null);
  return l(_h.Provider, {
    value: {
      isDragging: e,
      setIsDragging: n,
      draggedItemId: r,
      setDraggedItemId: i
    },
    children: t
  });
}
function Vl() {
  const t = $t(_h);
  if (!t)
    throw new Error("useDragContext must be used within a DragProvider");
  return t;
}
const JN = ({ item: t, active: e }) => g("div", {
  className: "flex w-full items-center justify-between",
  children: [g("div", {
    className: "flex items-center gap-1.5 font-medium text-f1-foreground",
    children: [l(q, {
      icon: t.icon,
      size: "md",
      className: C("transition-colors", e ? "text-f1-icon-bold" : "text-f1-icon")
    }), l("span", {
      children: t.label
    })]
  }), t.badge && l(_r, {
    value: t.badge,
    size: "sm",
    type: "bold"
  })]
}), YN = ({ item: t }) => {
  const { isActive: e } = ll(), { label: n, icon: r, ...i } = t, s = e(i.href, {
    exact: i.exactMatch
  });
  return l(mt, {
    ...i,
    className: C("flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors", we("focus-visible:ring-inset"), s ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary"),
    children: l(JN, {
      item: t,
      active: s
    })
  });
}, QN = ({ item: t, tooltip: e, dragConstraints: n, onRemove: r, index: i, total: s, onMove: o, onReorderFinish: a, isSortable: c = !0 }) => {
  const d = X(), { isDragging: f, setIsDragging: u, draggedItemId: h, setDraggedItemId: m } = Vl(), { isActive: p } = ll(), b = p(t.href, {
    exact: t.exactMatch
  }), v = W(!1), [x, w] = F(!1), y = i === 0, E = i === s - 1, S = s === 1, k = z(() => {
    const A = [];
    return !S && !y && A.push({
      label: d.actions.moveUp,
      onClick: () => o?.(i, i - 1),
      icon: db
    }), !S && !E && A.push({
      label: d.actions.moveDown,
      onClick: () => o?.(i, i + 1),
      icon: ub
    }), A.length > 0 && A.push({
      type: "separator"
    }), A.push({
      label: d.favorites.remove,
      onClick: () => r?.(t),
      icon: hn,
      critical: !0
    }), A;
  }, [S, y, E, d, o, i, r, t]), I = () => {
    u(!0), w(!1), m(t.href || null), v.current = !0;
  }, T = () => {
    u(!1), m(null), a(), setTimeout(() => {
      v.current = !1;
    }, 0);
  }, D = f && h === t.href, N = z(() => C("group relative cursor-pointer select-none list-none rounded backdrop-blur-sm active:cursor-grabbing", c && "touch-none", b ? "bg-f1-background-secondary text-f1-foreground" : "hover:bg-f1-background-secondary", x && "bg-f1-background-secondary", D && "bg-f1-background-secondary"), [b, x, D, c]), _ = z(() => g(ee, {
    children: [l("div", {
      className: "flex w-full items-center justify-between px-1.5 py-1.5",
      children: l(ZN, {
        tooltip: e,
        children: g(mt, {
          onClick: t.onClick,
          href: t.href,
          exactMatch: t.exactMatch,
          className: C("flex w-[calc(100%-24px-2px)] items-center gap-1.5 no-underline", D && "pointer-events-none"),
          draggable: !1,
          children: [t.type === "icon" ? l(q, {
            icon: t.icon,
            size: "md",
            className: C("transition-colors", b ? "text-f1-icon-bold" : "text-f1-icon")
          }) : t.avatar ? l(Yi, {
            size: "xs",
            avatar: t.avatar
          }) : null, l(Ve, {
            tag: "span",
            className: "line-clamp-1 font-medium text-f1-foreground",
            lines: 1,
            noTooltip: !!e,
            children: t.label
          })]
        })
      })
    }), l("div", {
      className: C("absolute inset-y-1 right-1 z-10 flex h-6 w-6 items-center justify-center rounded-sm opacity-0 transition-opacity duration-100 hover:bg-f1-background-secondary group-hover:opacity-100", x && "bg-f1-background-secondary opacity-100", D && "opacity-100"),
      children: l(Me, {
        open: x,
        onOpenChange: w,
        items: k,
        children: l("div", {
          className: "flex items-center justify-center",
          role: "list",
          children: l(q, {
            icon: Ci,
            size: "sm"
          })
        })
      })
    })]
  }), [t, b, x, D, k, e]);
  return c ? l(Un, {
    value: t,
    drag: "y",
    dragConstraints: n,
    dragElastic: 0.1,
    onDragStart: I,
    onDragEnd: T,
    className: N,
    whileDrag: {
      scale: 1.05
    },
    children: _
  }) : l("div", {
    className: N,
    children: _
  });
}, Lh = ({ title: t, isOpen: e = !0, isRoot: n, onCollapse: r, children: i, isDragging: s, wasDragging: o }) => {
  const [a, c] = F(e), d = Ji(), f = () => {
    if (s || o?.current) return;
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
          children: [t, l(G.div, {
            initial: !1,
            animate: {
              rotate: a ? 0 : -90
            },
            transition: {
              duration: d ? 0 : 0.1
            },
            className: "h-3 w-3",
            children: l(q, {
              icon: Vn,
              size: "xs",
              className: "text-f1-icon-secondary"
            })
          })]
        })
      }), l(hb, {
        forceMount: !0,
        className: "flex flex-col gap-1",
        children: l(G.div, {
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
}, Js = ({ category: t, isSortable: e = !1, dragConstraints: n, onCollapse: r, onDragEnd: i, currentOrder: s }) => {
  const { isDragging: o, setIsDragging: a } = Vl(), c = W(!1), d = os(), f = () => {
    a(!0), c.current = !0;
  }, u = () => {
    a(!1), setTimeout(() => {
      c.current = !1, s && i?.(s);
    }, 0);
  }, h = (p) => {
    !o && !c.current && r?.(t, p);
  }, m = l(Lh, {
    title: t.title,
    isOpen: t.isOpen,
    isRoot: t.isRoot,
    onCollapse: h,
    isDragging: o,
    wasDragging: c,
    children: l("div", {
      className: C("flex flex-col gap-0.5", o && !c.current && "pointer-events-none"),
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
function $_({ tree: t, onCollapse: e, onSort: n, onFavoritesChange: r, favorites: i }) {
  const s = W(null), o = t.filter((p) => p.isSortable === !1), [a, c] = F(t.filter((p) => p.isSortable !== !1)), [d, f] = F(0), u = ne((p) => {
    c(p);
  }, []), h = ne((p) => {
    n?.(p);
  }, [n]), m = qN();
  return l(KN, {
    children: l(wl, {
      id: "sidebar-menu",
      children: l(XN, {
        disableDragging: m,
        nonSortableItems: o,
        sortableItems: a,
        setSortableItems: u,
        containerRef: s,
        onCollapse: e,
        onDragEnd: h,
        favorites: i,
        onFavoritesChange: r,
        forceUpdate: () => f((p) => p + 1)
      }, d)
    })
  });
}
function XN({ nonSortableItems: t, sortableItems: e, setSortableItems: n, containerRef: r, onCollapse: i, onDragEnd: s, favorites: o = [], onFavoritesChange: a, forceUpdate: c, disableDragging: d = !1 }) {
  const f = X(), { isDragging: u } = Vl(), h = t.some((O) => O.isRoot), m = t.filter((O) => !O.isRoot).length > 0, p = e.length > 0, b = W(null), [v, x] = F(o), w = o.length > 0;
  V(() => {
    JSON.stringify(o) !== JSON.stringify(v) && x(o);
  }, [o]);
  const y = (O) => {
    x(O);
  }, E = ne((O) => {
    const R = v.filter(($) => $.href !== O.href);
    x(R), a?.(R);
  }, [v, a]), S = ne((O, R) => {
    if (R < 0 || R >= v.length) return;
    const $ = [...v], [U] = $.splice(O, 1);
    $.splice(R, 0, U), x($), a?.($);
  }, [v, a]), [k, I] = F(!1), T = W(null);
  V(() => {
    e.length > 0 && !k && (n([...e]), I(!0));
  }, [e, n, k]), V(() => {
    const O = () => {
      T.current !== null && window.clearTimeout(T.current), T.current = window.setTimeout(() => {
        r.current && e.length > 0 && c();
      }, 50);
    };
    return window.addEventListener("resize", O), () => {
      window.removeEventListener("resize", O), T.current !== null && window.clearTimeout(T.current);
    };
  }, [r, e, c]);
  const D = "flex flex-col gap-0.5", N = z(() => v.reduce((O, R, $) => (R.label in O || (O[R.label] = []), O[R.label].push($), O), {}), [v]), _ = z(() => w && v.map((O, R) => l(QN, {
    isSortable: !d,
    tooltip: (N[O.label] ?? []).length > 1 ? O.tooltip : void 0,
    item: O,
    dragConstraints: b,
    onRemove: E,
    index: R,
    total: v.length,
    onMove: S,
    onReorderFinish: () => {
      a?.(v);
    }
  }, `${O.href}-${O.label}`)), [w, v, N, E, S, a, d]), A = "flex flex-col gap-3", L = z(() => e.map((O) => l(Js, {
    category: O,
    isSortable: !d,
    dragConstraints: r,
    onCollapse: i,
    onDragEnd: s,
    currentOrder: e
  }, O.id)), [e, d, r, i, s]);
  return g("div", {
    className: C("relative", u && "cursor-grabbing [&_*]:cursor-grabbing"),
    children: [h && l("div", {
      className: "flex w-full flex-col gap-3 bg-transparent px-3",
      children: t.filter((O) => O.isRoot).map((O, R) => l(Js, {
        category: O,
        onCollapse: i
      }, `fixed-${R}`))
    }), w && l("div", {
      className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3",
      children: l(Lh, {
        title: f.favorites.favorites,
        children: l("div", {
          ref: b,
          children: d ? l("div", {
            className: D,
            children: _
          }) : l(Mn, {
            axis: "y",
            values: v,
            onReorder: y,
            className: D,
            children: _
          })
        })
      })
    }), m && l("div", {
      className: "mt-3 flex w-full flex-col gap-3 bg-transparent px-3",
      children: t.filter((O) => !O.isRoot).map((O, R) => l(Js, {
        category: O,
        onCollapse: i
      }, `fixed-${R}`))
    }), p && l("div", {
      className: C("mt-3 flex w-full flex-col gap-3 bg-transparent px-3 [&_li]:list-none"),
      ref: r,
      children: d ? l("div", {
        className: A,
        children: L
      }) : l(Mn, {
        axis: "y",
        values: e,
        onReorder: n,
        layoutScroll: !0,
        className: A,
        children: L
      })
    })]
  });
}
const ZN = ({ tooltip: t, children: e }) => t ? l(dt, {
  description: t,
  children: e
}) : e;
function j_({ onClick: t, placeholder: e, shortcut: n = ["cmd", "k"], ...r }) {
  return l("div", {
    className: "px-3",
    children: g("button", {
      onClick: t,
      className: C("mb-[calc(0.75rem-1px)] flex w-full cursor-pointer items-center justify-between rounded bg-f1-background-inverse-secondary p-1.5 text-f1-foreground-secondary ring-1 ring-inset ring-f1-border-secondary transition-all hover:ring-f1-border-hover", we()),
      type: "button",
      ...r,
      children: [g("div", {
        className: "flex items-center gap-1",
        children: [l(q, {
          icon: yu,
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
const Pc = ({ position: t }) => l(G.div, {
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
function B_({ header: t, body: e, footer: n, onFooterDropdownClick: r }) {
  const { sidebarState: i, isSmallScreen: s } = Gn(), o = Ji(), [a, c] = fo({
    threshold: 1
  }), [d, f] = fo({
    threshold: 1
  }), u = X(), h = {
    x: {
      ease: i !== "locked" ? s ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: o ? 0 : i !== "locked" && !s ? 0.3 : 0.2
    },
    top: {
      duration: o ? 0 : 0.1
    },
    left: {
      duration: o ? 0 : 0.1
    },
    default: {
      duration: o ? 0 : 0.2
    }
  }, m = () => n ? Au(n) && r ? Sl(n, {
    onDropdownClick: r
  }) : n : null;
  return g(G.aside, {
    initial: !1,
    "aria-label": u.navigation.sidebar.label,
    className: C("absolute bottom-0 left-0 top-0 z-10 flex w-[var(--ds-sidebar-width)] flex-col transition-[background-color]", i === "locked" ? "h-full" : C("shadow-lg ring-1 ring-f1-border-secondary backdrop-blur-2xl", s ? "h-full border-y-transparent border-l-transparent bg-f1-background/90" : "h-[calc(100%-16px)] bg-f1-background/60")),
    animate: {
      top: i === "locked" || s ? 0 : "8px",
      borderRadius: i === "locked" || s ? "0" : "12px",
      left: i === "locked" ? "0" : s ? 0 : "8px",
      x: i === "hidden" ? -260 : 0,
      opacity: i === "hidden" ? s ? 0.7 : 0 : 1,
      pointerEvents: i === "hidden" ? "none" : "auto"
    },
    transition: h,
    children: [l("header", {
      className: "flex-shrink-0",
      children: t
    }), e && g("nav", {
      className: "relative flex-grow overflow-y-hidden",
      children: [g(Nt, {
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
    icon: Zt,
    type: "critical",
    size: "sm"
  }
}, tS = {
  icon: vu,
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
  const i = X(), s = e === 1 ? i.approvals.requiredNumbers.one : i.approvals.requiredNumbers.other.replace("{{count}}", e.toString()), o = i.approvals.statuses[n], a = z(() => r.map((c) => {
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
          children: s
        })]
      }), l(Fn, {
        text: o,
        variant: eS[n]
      })]
    }), l("div", {
      className: "w-full",
      children: l(El, {
        avatars: a,
        layout: "fill",
        type: "person",
        size: "md"
      })
    })]
  });
}, sS = ({ steps: t }) => {
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
        children: t.map((i, s) => g("div", {
          className: "flex flex-col items-center",
          children: [l("div", {
            className: C("flex size-5 items-center justify-center rounded-xs text-sm font-medium", s < r ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border-secondary bg-f1-background-secondary text-f1-foreground"),
            children: l("span", {
              children: s + 1
            })
          }), s !== t.length - 1 && l("div", {
            className: "h-[96px] w-px bg-f1-border-secondary"
          })]
        }, i.title))
      }), l("div", {
        className: "flex w-full flex-col rounded-xl border border-solid border-f1-border-secondary",
        children: t.map((i, s) => g(ee, {
          children: [l(iS, {
            title: i.title,
            approvalsRequired: i.approvalsRequired,
            status: i.status,
            approvers: i.approvers
          }, i.title), s !== t.length - 1 && l("div", {
            className: "h-px w-full bg-f1-border-secondary"
          })]
        }))
      })]
    })]
  });
}, H_ = oe("OneApprovalHistory", sS);
function Oh({ title: t, description: e, variant: n = "default", emoji: r, actions: i }) {
  return g("div", {
    className: "flex flex-col items-center justify-center gap-5 p-8",
    children: [n === "default" && l(wu, {
      emoji: r,
      size: "lg"
    }), n !== "default" && l(Lr, {
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
      children: i.map((s) => s.type === "upsell" ? l(U0, {
        label: s.label,
        onRequest: () => Promise.resolve(s.onClick()),
        errorMessage: s.errorMessage,
        successMessage: s.successMessage,
        loadingState: s.loadingState,
        nextSteps: s.nextSteps,
        closeLabel: s.closeLabel
      }, s.label) : l(j, {
        label: s.label,
        variant: s.variant,
        onClick: s.onClick,
        icon: s.icon
      }, s.label))
    })]
  });
}
const zo = ({
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
}, oS = (t) => {
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
  children: [l(Lr, {
    type: "warning",
    size: "sm"
  }), l("p", {
    className: "flex-1 font-medium text-f1-foreground-warning",
    children: t
  })]
}), mS = ({ isOpen: t, secondaryActions: e = [], selectedNumber: n = void 0, onUnselect: r, warningMessage: i, ...s }) => {
  const o = X(), a = n === 1 ? o.status.selected.singular : o.status.selected.plural, c = e.slice(0, 2), d = e.slice(2).map((p) => ({
    ...p,
    critical: p.critical || !1
  })), f = z(() => hS(s.primaryActions ?? []), [s.primaryActions]), u = z(() => f.map((p) => ({
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
    children: t && g(G.div, {
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
          children: [l(gu, {
            value: n,
            spinTiming: {
              duration: 200,
              easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            }
          }), g("span", {
            children: [" ", a]
          })]
        }), l(j, {
          variant: "outline",
          size: "sm",
          label: o.actions.unselect,
          onClick: r
        })]
      }), g("div", {
        className: "dark",
        children: [l("div", {
          className: C("flex flex-col items-center gap-2 sm:hidden", !i && "[&_button]:w-full [&_div]:w-full"),
          children: i ? l(Bc, {
            message: i
          }) : g(Rn, {
            children: [l(Dl, {
              items: e
            }), h ? l(j, {
              label: h.label,
              icon: h.icon,
              onClick: h.onClick,
              disabled: h.disabled,
              size: "lg"
            }) : l(on, {
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
          }) : g(Rn, {
            children: [d.length > 0 && l(Me, {
              items: d
            }), c.slice().reverse().map((p) => l(j, {
              variant: p.critical ? "critical" : "outline",
              label: p.label,
              icon: p.icon,
              onClick: p.onClick,
              disabled: p.disabled
            }, p.label)), h ? l(j, {
              label: h.label,
              icon: h.icon,
              onClick: h.onClick,
              disabled: h.disabled
            }) : l(ee, {
              children: l(on, {
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
  const r = (Array.isArray(t) ? t : [t]).filter((c) => c !== void 0), i = e || [], s = z(() => (n || []).map((c) => c.items).reduce((c, d) => (c.length > 0 && c.push({
    type: "separator"
  }), c.push(...d), c), []), [n]), [o, a] = F(!1);
  return r.length === 0 && i.length === 0 && s.length === 0 ? null : g("div", {
    className: "flex flex-row-reverse items-center gap-2",
    children: [r.length === 1 ? l(j, {
      size: "md",
      onClick: r[0].onClick,
      icon: r[0].icon,
      variant: "default",
      label: r[0].label,
      loading: r[0].loading,
      disabled: r[0].disabled
    }) : r.length > 1 && l(on, {
      size: "md",
      items: r.map((c, d) => ({
        label: c.label,
        icon: c.icon,
        value: d.toString()
      })),
      onClick: (c) => {
        r[Number(c)]?.onClick?.();
      }
    }), i?.map((c) => l(j, {
      size: "md",
      onClick: c.onClick,
      icon: c.icon,
      variant: "outline",
      hideLabel: c.hideLabelWhenExpanded,
      label: c.label,
      disabled: c.disabled,
      loading: c.loading
    }, c.label)), s.length > 0 && l(Me, {
      items: s,
      align: "end",
      open: o,
      onOpenChange: a,
      children: l(nt, {
        variant: "outline",
        icon: cr,
        label: "Actions",
        hideLabel: !0,
        pressed: o
      })
    })]
  });
}, Rh = J(({ value: t, compareToValue: e, onDateChange: n, disabled: r, error: i, className: s, highlighted: o, onClick: a, navigation: c, granularity: d, hideGoToCurrent: f, ...u }, h) => {
  const m = X(), p = z(() => {
    if (!t || !t.value)
      return [m.date.selectDate];
    const I = d || ku[t.granularity];
    return [t.value, Array.isArray(e) ? e[0] : e].filter((D) => D !== void 0).sort((D, N) => D?.from.getTime() - N?.from.getTime()).map((D) => I.toString(D, m, "long"));
  }, [t, m, e, d]), b = z(() => Object.values(p).join(" ⸱ "), [p]), v = (I) => {
    I && n?.(I);
  }, x = z(() => {
    if (u.minDate)
      return d?.toRange(u.minDate)?.from;
  }, [u.minDate, d]), w = z(() => {
    if (u.maxDate)
      return d?.toRange(u.maxDate)?.to;
  }, [u.maxDate, d]), [y, E] = F(null);
  V(() => {
    E(d?.toRange(/* @__PURE__ */ new Date()) ?? null);
    const I = () => {
      const D = d?.toRange(/* @__PURE__ */ new Date()) ?? null;
      D && pb(D.from, x) && gb(D.to || D.from, w) ? E(D) : E(null);
    }, T = setInterval(() => {
      I();
    }, 6e4);
    return I(), () => clearInterval(T);
  }, [d, x, w]);
  const S = t?.value ? d?.getPrevNext(t?.value, {
    min: x,
    max: w
  }) : void 0, k = () => {
    const I = d?.toRange(/* @__PURE__ */ new Date());
    I && n?.(I);
  };
  return g("div", {
    ref: h,
    className: C("inline-flex cursor-auto appearance-none gap-1 rounded-md border-0 bg-f1-background px-1 ring-1 ring-inset ring-f1-border transition-all placeholder:text-f1-foreground-tertiary hover:ring-f1-border-hover", "[%>*] py-1", we("focus:ring-f1-border-hover"), r && "cursor-not-allowed bg-f1-background-secondary opacity-50", i && "ring-f1-border-critical-bold", s),
    onClick: (I) => I.stopPropagation(),
    children: [g("div", {
      className: C("flex flex-1 gap-1", c ? "justify-between" : "justify-center"),
      children: [c && l(j, {
        size: "sm",
        variant: "ghost",
        icon: al,
        label: "Previous",
        hideLabel: !0,
        disabled: !S?.prev,
        onClick: () => v(S?.prev ?? !1)
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
        className: C(o && "bg-f1-background-secondary-hover")
      }), c && l(j, {
        variant: "ghost",
        icon: Ar,
        label: "Next",
        hideLabel: !0,
        size: "sm",
        fontSize: "md",
        disabled: !S?.next,
        onClick: () => v(S?.next ?? !1)
      })]
    }), !f && y && l("div", {
      className: "border-l-solid flex-shrink-0 border-[#f00]",
      children: l(j, {
        fontSize: "md",
        size: "sm",
        variant: "ghost",
        label: m.date.granularities[t?.granularity ?? "day"]?.currentDate,
        onClick: k
      })
    })]
  });
});
Rh.displayName = "DatePickerTrigger";
function gS({ onSelect: t, defaultValue: e, presets: n = [], granularities: r = ["day"], hideNavigation: i = !1, hideGoToCurrent: s = !1, compareTo: o, defaultCompareTo: a, onCompareToChange: c, value: d, ...f }) {
  const [u, h] = F(e ?? d);
  V(() => {
    G0(d, u) || h(d || e);
  }, [d, e]);
  const [m, p] = F(), [b, v] = F(!1), x = au(), w = f.weekStartsOn ?? x.date?.weekStartsOn ?? bb.Monday, y = z(() => {
    const I = u?.granularity ?? "day";
    return vb(w)[I];
  }, [u?.granularity, w]), E = (I) => {
    h(I), t?.(I);
  }, S = (I) => {
    p(I), c?.(I);
  }, k = (I) => {
    E({
      value: y.toRange(I),
      granularity: u?.granularity ?? "day"
    });
  };
  return l(q0, {
    onSelect: E,
    value: u,
    defaultValue: e,
    presets: n,
    granularities: r,
    minDate: f.minDate,
    maxDate: f.maxDate,
    open: b,
    onOpenChange: v,
    compareTo: o,
    defaultCompareTo: a,
    onCompareToChange: S,
    weekStartsOn: w,
    asChild: !0,
    children: l(Rh, {
      value: u,
      compareToValue: m,
      highlighted: b,
      navigation: !i,
      onDateChange: k,
      granularity: y,
      minDate: f.minDate,
      maxDate: f.maxDate,
      disabled: f.disabled,
      hideGoToCurrent: s,
      onClick: () => v(!0)
    })
  });
}
function bS({ filter: t, value: e, onChange: n }) {
  const r = X(), i = {
    granularity: "day",
    ...t
  }, s = Array.isArray(i.granularity) ? i.granularity : [i.granularity], o = xb(e.granularity || s[0]);
  return l("div", {
    className: "flex items-center gap-2",
    children: l(gS, {
      onSelect: (c) => {
        !c || !c.value || n({
          value: c.value,
          granularity: c.granularity,
          valueString: o.toString(c.value, r)
        });
      },
      defaultValue: e,
      granularities: s,
      minDate: i.min,
      maxDate: i.max,
      presets: i.presets,
      hideGoToCurrent: i.hideGoToCurrent
    })
  });
}
const vS = (t) => "date" in t, xS = {
  valueConverter: function(t, e, n) {
    const r = Array.isArray(e.granularity) ? e.granularity : [e.granularity], i = e.defaultGranularity || r[0] || "day";
    if (t || (t = /* @__PURE__ */ new Date()), vS(t))
      return t;
    const s = ku[i];
    return {
      value: s.toRange(t),
      valueString: s.toString(t, n),
      granularity: i
    };
  },
  render: (t) => l(bS, {
    ...t
  })
}, Fh = {
  "date-navigator": xS
}, Hc = ({ navigationFilters: t, currentNavigationFilters: e, onChangeNavigationFilters: n }) => l(ee, {
  children: t && Object.entries(t).map(([r, i]) => {
    const s = Fh[i.type];
    return l(Q.Fragment, {
      children: s.render({
        filter: i,
        value: e[r],
        onChange: (o) => {
          n({
            ...e,
            [r]: o
          });
        }
      })
    }, r);
  })
}), Vc = ({ loading: t }) => t ? l(q, {
  icon: wb,
  className: "animate-spin"
}) : l(q, {
  icon: yu,
  className: "text"
}), yS = ({ value: t, onChange: e, loading: n = !1 }) => {
  const [r, i] = F(!1), s = Nl(), o = W(null), a = W(null), c = X(), d = () => {
    e(void 0), i(!1), a?.current && (a.current.value = "");
  };
  yb(o, () => {
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
    id: s,
    children: l(Uu, {
      transition: {
        duration: 0.2,
        ease: [0.175, 0.885, 0.32, 1.05]
      },
      children: l(Ae, {
        children: l(G.div, {
          layout: !0,
          ref: o,
          className: C("relative flex h-8 w-fit min-w-8 max-w-[180px] items-center justify-center", (r || t) && "w-[180px]"),
          children: r ? l(G.div, {
            layout: !0,
            layoutId: "search-container",
            className: "absolute inset-0 h-8 w-full bg-f1-border p-px transition-colors focus-within:bg-f1-border-hover",
            style: {
              borderRadius: 12
            },
            children: g(G.div, {
              layout: !0,
              className: "relative flex h-full w-full items-center justify-between gap-1 overflow-hidden bg-f1-background pr-1.5",
              style: {
                borderRadius: 11
              },
              children: [l(G.div, {
                className: "absolute left-[5px] top-[5px] z-10 flex h-5 w-5 items-center justify-center text-f1-icon",
                layoutId: "search-icon",
                children: l(Vc, {
                  loading: n
                }, "loading")
              }), l(G.input, {
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
              }), l(G.div, {
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
                children: l(q, {
                  icon: uo,
                  size: "md",
                  color: "secondary"
                })
              })]
            })
          }) : l(G.div, {
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
            children: g(G.div, {
              layout: !0,
              className: "relative flex h-full w-full items-center gap-1 overflow-hidden bg-f1-background",
              style: {
                borderRadius: 9
              },
              children: [l(G.div, {
                className: "absolute left-[5px] top-[5px] flex h-5 w-5 items-center justify-center text-f1-icon-bold",
                layoutId: "search-icon",
                children: l(Vc, {
                  loading: n
                })
              }), t && g("div", {
                className: "flex h-7 w-full items-center justify-between gap-1.5 overflow-hidden pr-1.5",
                children: [l(G.div, {
                  layout: !0,
                  className: "line-clamp-1 overflow-hidden py-2 pl-7",
                  children: t
                }), l(G.div, {
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
                  children: l(q, {
                    icon: uo,
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
  const [i, s] = F(!1), o = K0();
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
      s(!0);
      return;
    }
    o.get(t).then((u) => {
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
    }), s(!0);
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
        o.set(t, {});
        return;
      }
      o.set(t, h);
    },
    200
  );
  return V(() => {
    f(n);
  }, [
    t,
    a,
    o,
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
  }, [i, s] = F(void 0);
  return { emptyState: i, setEmptyStateType: (a, c) => {
    if (!a) {
      s(void 0);
      return;
    }
    const d = t[a] ?? {}, f = r[a], u = {
      title: d.title ?? f.title,
      description: d.description ?? (a === "error" && c ? c : f.description),
      actions: d.actions ?? f.actions
    };
    s(a === "error" ? {
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
      fetchParamsProvider: (o) => ({
        ...o,
        navigationFilters: t.currentNavigationFilters
      }),
      onResponse: (o) => {
        const a = "summaries" in o ? o.summaries : void 0;
        i(a);
      }
    }, [JSON.stringify(t.currentNavigationFilters)]),
    summaries: r
  };
}
function hs(t, e = {}) {
  return {
    ...IS(t, e)
  };
}
const Mh = ({ className: t, ...e }) => l("nav", {
  role: "navigation",
  "aria-label": "pagination",
  className: C("flex w-full justify-center", t),
  ...e
});
Mh.displayName = "Pagination";
const Ph = Fe.forwardRef(({ className: t, ...e }, n) => l("div", {
  ref: n,
  className: C("flex list-none flex-row items-center gap-1", t),
  ...e
}));
Ph.displayName = "PaginationContent";
const ui = Fe.forwardRef(({ className: t, ...e }, n) => l("div", {
  ref: n,
  className: C("", t),
  ...e
}));
ui.displayName = "PaginationItem";
const ms = ({ className: t, isActive: e, ...n }) => l("a", {
  "aria-current": e ? "page" : void 0,
  className: C("flex h-8 min-w-8 select-none items-center justify-center rounded px-1.5 font-medium text-f1-foreground-secondary transition-all hover:cursor-pointer hover:bg-f1-background-secondary-hover", e && "bg-f1-background-selected-bold font-semibold text-f1-foreground-inverse hover:bg-f1-background-selected-bold-hover", we(), t),
  ...n
});
ms.displayName = "PaginationLink";
const zh = ({ className: t, ...e }) => l(ms, {
  role: "button",
  "aria-label": "Go to previous page",
  className: C("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", t),
  ...e,
  children: l(q, {
    icon: al
  })
});
zh.displayName = "PaginationPrevious";
const $h = ({ className: t, ...e }) => l(ms, {
  role: "button",
  "aria-label": "Go to next page",
  className: C("border border-solid border-f1-border hover:border-f1-border-hover hover:bg-f1-background", t),
  ...e,
  children: l(q, {
    icon: Ar
  })
});
$h.displayName = "PaginationNext";
const jh = ({ className: t, ...e }) => l("span", {
  role: "presentation",
  "aria-hidden": !0,
  className: C("flex h-9 w-9 items-center justify-center", t),
  ...e,
  children: l(q, {
    icon: Ci
  })
});
jh.displayName = "PaginationEllipsis";
function AS({ totalPages: t, currentPage: e = 1, onPageChange: n, showControls: r = !0, ariaLabel: i = "Page navigation", visibleRange: s = 3, hasNextPage: o = !0, disabled: a = !1 }) {
  const c = t === 0, d = ne((u) => {
    n && (c || u >= 1 && u <= t) && n(u);
  }, [n, t, c]), f = z(() => {
    if (c) return [];
    const u = [];
    if (t <= 5)
      return Array.from({
        length: t
      }, (b, v) => v + 1);
    u.push(1);
    const h = Math.floor(s / 2);
    let m = e - h, p = e + h;
    return e <= h + 2 ? (m = 2, p = m + s - 1, u.push(...Array.from({
      length: p - m + 1
    }, (b, v) => v + m)), u.push("...")) : e >= t - h - 1 ? (m = t - s - 1, p = t - 1, u.push("..."), u.push(...Array.from({
      length: p - m + 1
    }, (b, v) => v + m))) : (u.push("..."), u.push(...Array.from({
      length: s
    }, (b, v) => v + m)), u.push("...")), u.push(t), u;
  }, [e, t, s, c]);
  return l(Mh, {
    children: g(Ph, {
      role: "navigation",
      "aria-label": i,
      children: [r && l(ui, {
        children: l(zh, {
          "aria-disabled": e === 1 || a,
          tabIndex: e === 1 ? -1 : 0,
          className: C(!c && "mr-1", e === 1 || a ? "pointer-events-none opacity-50" : ""),
          onClick: () => d(e - 1),
          onKeyDown: (u) => {
            u.key === "Enter" && d(e - 1);
          }
        })
      }), !c && f.map((u, h) => l(ui, {
        className: C("hidden sm:flex", u === e && "flex", a && "pointer-events-none opacity-50"),
        children: u === "..." ? l(jh, {}) : l(ms, {
          "aria-current": u === e ? "page" : void 0,
          isActive: u === e,
          onClick: () => d(u),
          onKeyDown: (m) => {
            m.key === "Enter" && d(u);
          },
          tabIndex: 0,
          children: u
        })
      }, h)), r && l(ui, {
        children: l($h, {
          "aria-disabled": (c ? !o : e === t) || a,
          tabIndex: c ? o ? 0 : -1 : e === t ? -1 : 0,
          className: C(!c && "ml-1", !c && e === t || !o && c || a ? "pointer-events-none opacity-50" : ""),
          onClick: () => d(e + 1),
          onKeyDown: (u) => {
            u.key === "Enter" && d(e + 1);
          }
        })
      })]
    })
  });
}
const TS = oe("OnePagination", AS), Wl = ({ paginationInfo: t, setPage: e, className: n }) => {
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
}, ES = (t) => Math.ceil(t / 12) * 12, Bh = ({ children: t, tmpFullWidth: e }) => l("div", {
  className: C("grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", e && "px-0"),
  children: t
}), Gc = ({ source: t, items: e, selectedItems: n, handleSelectItemChange: r, cardProperties: i, title: s, description: o, avatar: a, image: c, imageFit: d, imageSize: f, blurredBackground: u, compact: h, tmpFullWidth: m }) => {
  function p(x, w) {
    return w.map((y) => {
      if (y.hide?.(x))
        return null;
      const E = y.render(x);
      if (E === void 0)
        return null;
      const S = b(E);
      return S ? S.type === "file" ? {
        property: S
      } : {
        icon: y.icon ?? Sb,
        tooltip: y.tooltip,
        property: S
      } : null;
    }).filter((y) => y !== null);
  }
  function b(x) {
    return typeof x == "string" ? {
      type: "text",
      value: x
    } : typeof x == "number" ? {
      type: "number",
      value: x
    } : v(x) ? x : null;
  }
  function v(x) {
    if (typeof x != "object" || x === null || !("type" in x))
      return !1;
    const w = x.type;
    return typeof w == "string" && w in J0;
  }
  return l(Bh, {
    tmpFullWidth: m,
    children: e.map((x, w) => {
      const y = t.selectable ? t.selectable(x) : void 0, E = t.itemUrl ? t.itemUrl(x) : void 0, S = t.itemOnClick ? t.itemOnClick(x) : void 0, k = (t.itemActions ? t.itemActions(x) || [] : []).filter((A) => A.type !== "separator"), I = (k.filter((A) => A.type === "other" || !A.type) || []).map((A) => ({
        ...A,
        type: "item"
      })), T = k.find((A) => A.type === "primary") || void 0, D = k.filter((A) => A.type === "secondary") || [], N = !!t.selectable && y !== void 0, _ = p(x, i);
      return l(G.div, {
        layout: !0,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        custom: w,
        variants: Cu({
          delay: 0.02,
          duration: 0.3
        }),
        children: l(_l, {
          title: s(x),
          selectable: N,
          description: o ? o(x) : void 0,
          avatar: a ? a(x) : void 0,
          image: c ? c(x) : void 0,
          imageFit: d,
          imageSize: f,
          blurredBackground: u,
          selected: N && n.has(y),
          onSelect: (A) => r(x, A),
          secondaryActions: D,
          primaryAction: T,
          otherActions: I,
          onClick: S,
          link: E,
          compact: h || !1,
          metadata: _,
          fullHeight: !0
        }, w)
      }, w);
    })
  });
}, DS = ({ cardProperties: t, title: e, description: n, avatar: r, image: i, imageFit: s, imageSize: o, blurredBackground: a, compact: c, source: d, onSelectItems: f, onLoadData: u, onLoadError: h, tmpFullWidth: m }) => {
  const p = z(() => {
    if (d.dataAdapter.paginationType === "pages") {
      const _ = d.dataAdapter.perPage, A = ES(_ ?? 24);
      return {
        ...d.dataAdapter,
        perPage: A
      };
    }
    return d.dataAdapter;
  }, [d.dataAdapter]), { data: b, paginationInfo: v, setPage: x, isInitialLoading: w } = hs({
    ...d,
    dataAdapter: p
  }, {
    onError: (_) => {
      h(_);
    }
  });
  V(() => {
    u({
      totalItems: v?.total || b.records.length,
      filters: d.currentFilters,
      search: d.currentSearch,
      isInitialLoading: w,
      data: b.records
    });
  }, [v?.total, b.records]);
  const { selectedItems: y, groupAllSelectedStatus: E, handleSelectItemChange: S, handleSelectGroupChange: k } = Xi({
    data: b,
    paginationInfo: v,
    source: d,
    onSelectItems: f,
    selectionMode: "multi",
    selectedState: d.defaultSelectedItems
  }), I = d.grouping?.collapsible, T = d.grouping?.defaultOpenGroups, { openGroups: D, setGroupOpen: N } = kl(b?.type === "grouped" ? b.groups : [], T);
  return g("div", {
    className: "flex h-full min-h-0 flex-1 flex-col gap-4",
    children: [l("div", {
      className: "overflow-auto",
      children: w ? l(Bh, {
        tmpFullWidth: m,
        children: Array.from({
          length: 8
        }).map((_, A) => g(ns, {
          children: [l(rs, {
            children: l(is, {
              "aria-label": "Loading card",
              children: l(M, {
                className: "h-4 w-3/4"
              })
            })
          }), l(ss, {
            className: "space-y-2",
            children: t.map((L) => g("div", {
              className: "space-y-1",
              children: [l(M, {
                className: "h-3 w-1/4"
              }), l(M, {
                className: "h-3 w-1/2"
              })]
            }, String(L.label)))
          })]
        }, A))
      }) : g(ee, {
        children: [b?.type === "grouped" && b.groups.map((_) => g(ee, {
          children: [l(Cl, {
            label: _.label,
            itemCount: _.itemCount,
            onOpenChange: (A) => N(_.key, A),
            open: D[_.key],
            selectable: !!d.selectable,
            showOpenChange: I,
            select: E[_.key]?.checked ? !0 : E[_.key]?.indeterminate ? "indeterminate" : !1,
            onSelectChange: (A) => k(_, A),
            className: "px-4 pb-2 pt-4"
          }), l(Ae, {
            children: (!I || D[_.key]) && l(Gc, {
              source: d,
              items: _.records,
              selectedItems: y,
              handleSelectItemChange: S,
              title: e,
              cardProperties: t,
              description: n,
              avatar: r,
              image: i,
              imageFit: s,
              imageSize: o,
              blurredBackground: a,
              compact: c,
              tmpFullWidth: m
            }, _.key)
          })]
        })), b?.type === "flat" && l(Gc, {
          source: d,
          items: b.records,
          selectedItems: y,
          handleSelectItemChange: S,
          title: e,
          cardProperties: t,
          description: n,
          avatar: r,
          image: i,
          imageFit: s,
          imageSize: o,
          blurredBackground: a,
          compact: c,
          tmpFullWidth: m
        })]
      })
    }), l(Wl, {
      paginationInfo: v,
      setPage: x
    })]
  });
};
function _S(t, e) {
  const n = { ...t };
  for (const [r, i] of Object.entries(e)) {
    const s = t[r];
    if (Array.isArray(s) && Array.isArray(i) && s.length > 0 && i.length > 0) {
      const o = s.filter(
        (a) => i.includes(a)
      );
      n[r] = o;
    } else
      n[r] = i;
  }
  return n;
}
const LS = ({ source: t, lane: e, onError: n, onHookUpdate: r }) => {
  const i = z(() => _S(t.currentFilters, e.filters), [t.currentFilters, e.filters]), s = hs(t, {
    filters: i,
    onError: n
  });
  return V(() => {
    r?.(s);
  }, [s]), null;
};
function OS(t, e = {}) {
  const { lanes: n } = t;
  if (!z(() => n && n.length > 0, [n]))
    throw new Error("Lanes has not been configured on data source");
  const [i, s] = F({}), o = ne((v, x) => {
    s((w) => ({
      ...w,
      [v]: x
    }));
  }, []), a = z(() => JSON.stringify(n), [n]), c = z(() => JSON.stringify(t.currentFilters), [t.currentFilters]), d = z(() => JSON.stringify(t.currentNavigationFilters), [t.currentNavigationFilters]), f = z(() => JSON.stringify(t.currentSortings), [t.currentSortings]), u = z(() => JSON.stringify(t.currentGrouping), [t.currentGrouping]), h = z(() => JSON.stringify(t.currentSearch), [t.currentSearch]), m = z(() => JSON.stringify(t.grouping), [t.grouping]), p = z(() => JSON.stringify(t.dataAdapter), [t.dataAdapter]);
  return {
    lanesProvider: z(() => (n || []).map((v) => l(LS, {
      lane: v,
      onError: e.onError,
      source: t,
      onHookUpdate: (x) => o(v.id, x)
    }, v.id)), [a, o, c, d, f, u, h, m, p]),
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
  const [r, i] = F(/* @__PURE__ */ new Map()), [s, o] = F({
    selectItemsStatus: /* @__PURE__ */ new Map(),
    clearCallback: /* @__PURE__ */ new Map()
  }), a = ne(() => {
    s.clearCallback.forEach((d) => d());
  }, [s.clearCallback]);
  V(() => {
    const d = Object.fromEntries(s.selectItemsStatus);
    n?.({
      ...RS(s.selectItemsStatus),
      byLane: d
    }, a);
  }, [s]);
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
      o((h) => ({
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
    for (const s of i) {
      const o = s.startsWith("_") ? s.slice(0, PS) : s;
      e[o] = s;
    }
  }
  let n = "";
  for (const r in e)
    n += e[r] + " ";
  if (n)
    return n.trimEnd();
}
var Hh = {
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
  var e = t.edge, n = t.gap, r = n === void 0 ? "0px" : n, i = t.indent, s = i === void 0 ? "0px" : i, o = t.strokeColor, a = o === void 0 ? Hh.default : o, c = t.strokeWidth, d = c === void 0 ? $S : c, f = t.type, u = f === void 0 ? "terminal" : f, h = jS[e];
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
        indent: s
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
  var e = t.appearance, n = e === void 0 ? "default" : e, r = t.edge, i = t.gap, s = t.indent, o = t.type;
  return /* @__PURE__ */ Q.createElement(US, {
    edge: r,
    gap: i,
    strokeColor: Hh[n],
    type: o,
    indent: s
  });
}
const qS = 'button, a[href], input, select, textarea, [role="button"], [role="checkbox"], [role="menuitem"], [role="option"], [role="radio"], [role="switch"]', KS = (t) => t instanceof HTMLElement ? !!t.closest(qS) : !1;
function JS({ drag: t, id: e, index: n, total: r, laneId: i, draggable: s = !1, showIndicator: o = !0, disabledEdges: a = [], forcedEdge: c = null, ...d }) {
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
      return xo({
        element: f.current,
        getData: ({ input: x, element: w }) => Q0({
          type: "list-card-target",
          id: e,
          index: n,
          laneId: i
        }, {
          input: x,
          element: w,
          allowedEdges: ["top", "bottom"]
        }),
        onDragEnter: ({ self: x, source: w }) => {
          if (w?.data?.id === e) {
            m(null);
            return;
          }
          const y = Ii(x.data);
          m(y === "top" || y === "bottom" ? y : null);
        },
        onDrag: ({ self: x, source: w }) => {
          if (w?.data?.id === e) {
            m(null);
            return;
          }
          const y = Ii(x.data);
          m(y === "top" || y === "bottom" ? y : null);
        },
        onDragLeave: () => m(null),
        onDrop: () => m(null)
      });
  }, [e, n, i]);
  const p = n === 0, b = n === r - 1, v = (x) => {
    if (s && !KS(x.target)) {
      if (d.onClick) {
        d.onClick(), x.preventDefault(), x.stopPropagation();
        return;
      }
      u.current && (u.current.click(), x.preventDefault(), x.stopPropagation());
    }
  };
  return g("div", {
    ref: f,
    className: C("group relative my-1", s && "cursor-grab active:cursor-grabbing", p && "mt-1.5", b && "mb-1.5"),
    "data-kanban-card": "true",
    "data-index": n,
    "data-lane-id": i,
    onClick: v,
    children: [l(X0, {
      ...d,
      disableOverlayLink: s
    }), d.link && l(In, {
      ref: u,
      href: d.link,
      className: C("!z-1 pointer-events-none absolute inset-0 block rounded-xl", we()),
      "aria-label": d.title,
      children: " "
    }), o && (c ?? h) && l(ee, {
      children: (() => {
        const x = c ?? h;
        return a.includes(x) ? null : l(GS, {
          edge: x,
          type: "terminal-no-bleed",
          gap: "4px"
        });
      })()
    })]
  });
}
const Ul = (t, e, n, r) => {
  const i = W(null);
  return V(() => {
    if (!Ni(t) || !t.hasMore)
      return;
    const s = i.current;
    if (!s) return;
    const o = new IntersectionObserver(
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
    return o.observe(s), () => {
      o.disconnect();
    };
  }, [t, n, r, e]), {
    loadingIndicatorRef: i
    // Ref to the loading indicator (that is also used as a trigger for the infinite scroll)
  };
}, YS = ({ label: t, variant: e, count: n, onPrimaryAction: r }) => {
  const i = !!r;
  return g("div", {
    className: "flex items-center gap-2 px-1 pb-0.5 pt-2",
    children: [l(Fn, {
      text: t,
      variant: e || "neutral"
    }), l(_r, {
      size: "md",
      type: "default",
      value: n
    }), i && l("div", {
      className: "ml-auto flex items-center gap-1 pr-1",
      children: l(j, {
        variant: "ghost",
        size: "sm",
        label: "Add",
        icon: Ki,
        hideLabel: !0,
        onClick: r
      })
    })]
  });
}, $o = J(({ showPlaceholders: t = !0, count: e = 3 }, n) => l("div", {
  ref: n,
  className: "space-y-1",
  "aria-hidden": !t,
  children: t && Array.from({
    length: e
  }).map((r, i) => l(_l.Skeleton, {
    compact: !0
  }, i))
}));
$o.displayName = "LoadingSkeleton";
function QS({ title: t, items: e, renderCard: n, getKey: r, emptyState: i, fetchMore: s, variant: o = "neutral", loading: a = !1, hasMore: c = !1, loadingMore: d = !1, total: f, onPrimaryAction: u, onFooterAction: h, dropPlaceholderIndex: m }) {
  const p = {
    type: "infinite-scroll",
    cursor: null,
    hasMore: c,
    total: e.length + (c ? 1 : 0),
    perPage: 3
  }, { loadingIndicatorRef: b } = Ul(p, a, d, s ?? (() => {
  })), v = !!h;
  return g("div", {
    className: "shadow-sm group relative flex h-full w-[323.2px] flex-col",
    children: [l(YS, {
      label: t || "Lane",
      variant: o,
      count: f ?? e.length,
      onPrimaryAction: u
    }), l("div", {
      className: C("relative flex h-full min-h-0 flex-1 flex-col px-1 pb-1", (v || e.length === 0) && "pb-11", !v && e.length === 0 && m !== void 0 && "pb-1"),
      children: a ? g(Nt, {
        className: C("relative h-full flex-1 rounded-lg", a && "select-none opacity-50 transition-opacity"),
        children: [l($o, {}), l(Ae, {
          children: l(G.div, {
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
      }) : e.length === 0 && m === void 0 ? i : g(ee, {
        children: [l(Nt, {
          className: "relative h-full flex-1",
          children: g("div", {
            className: C("relative", d && "select-none opacity-50 transition-opacity"),
            "aria-live": d ? "polite" : void 0,
            "aria-busy": d ? "true" : void 0,
            children: [e.length === 0 && m !== void 0 ? l("div", {
              className: "relative my-1 mt-1.5",
              children: l(_l.Skeleton, {
                compact: !0
              })
            }) : e.map((x, w) => {
              const y = r(x, w);
              return l(Q.Fragment, {
                children: n(x, w)
              }, y);
            }), (d || c) && l($o, {
              ref: b
            })]
          })
        }), d && l(Ae, {
          children: l(G.div, {
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
    }), v && l("div", {
      className: "pointer-events-none absolute inset-x-1 bottom-1.5 z-20 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100",
      children: l(nt, {
        variant: "ghost",
        size: "md",
        className: "w-full justify-center",
        icon: Ki,
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
  } = t, s = Number(e.data.index), o = Ii(e.data);
  return {
    fromLaneId: n,
    toLaneId: r,
    sourceId: i,
    position: o === "bottom" ? "below" : "above",
    indexOfTarget: s
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
  const { cardTarget: e, fromLaneId: n, toLaneId: r, sourceId: i } = t, s = Number(e.data.index), o = Ii(e.data);
  return {
    fromLaneId: n,
    toLaneId: r,
    sourceId: i,
    position: o === "bottom" ? "below" : "above",
    indexOfTarget: s
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
  const i = W(null), s = W(null), o = W(null), [a, c] = F(!1), [d, f] = F(null), u = !!(t && e), h = W(null), m = W(null), p = W(null), b = W(0), v = W(null), [x, w] = F(!1), [y, E] = F(null), [S, k] = F(null), [I, T] = F(!1), [D, N] = F(-1);
  return Z0(u ? {
    ref: i,
    id: t,
    accepts: ["list-card"]
  } : void 0), V(() => {
    const _ = () => {
      const A = performance.now(), L = v.current ?? A, O = (A - L) / 1e3;
      v.current = A;
      const R = m.current;
      if (!x || b.current === 0) {
        p.current != null && (window.cancelAnimationFrame(p.current), p.current = null), v.current = null;
        return;
      }
      R && (R.scrollTop += b.current * O), p.current = window.requestAnimationFrame(_);
    };
    return p.current == null && x && b.current !== 0 && (v.current = null, p.current = window.requestAnimationFrame(_)), () => {
      p.current != null && (window.cancelAnimationFrame(p.current), p.current = null), v.current = null, b.current = 0;
    };
  }, [x]), V(() => {
    if (!t) return;
    const _ = () => {
      p.current == null && b.current !== 0 && (v.current = null, p.current = window.requestAnimationFrame(() => {
        const L = performance.now();
        v.current = L, p.current = window.requestAnimationFrame(function O() {
          const R = v.current ?? performance.now(), $ = performance.now(), U = ($ - R) / 1e3;
          v.current = $;
          const Z = m.current;
          if (!x || b.current === 0) {
            p.current != null && (window.cancelAnimationFrame(p.current), p.current = null);
            return;
          }
          Z && (Z.scrollTop += b.current * U), p.current = window.requestAnimationFrame(O);
        });
      }));
    }, A = (L) => XS(t, L);
    return ev({
      onDropTargetChange: ({ location: L, source: O }) => {
        const R = L.current.dropTargets.some((H) => {
          const le = H.data;
          return le.type === "list-droppable" && le.id === t;
        });
        c(R);
        const $ = String(O.data.id), Z = String(O.data.data?.laneId ?? "") || String(L.initial.dropTargets.find((H) => H.data.type === "list-droppable")?.data?.id ?? ""), ae = String(Z) === String(t), K = r.items.findIndex((H, le) => String(r.getKey(H, le)) === $);
        if (R && ae ? N(K) : (!R || !ae) && N(-1), R && x && r.items.length === 0 ? (T(!0), E(null), k(null)) : R && x && r.items.length > 0 && T(!1), R && x) {
          const H = m.current || i.current;
          if (H) {
            const le = H.getBoundingClientRect(), te = L.current.input?.clientY, re = L.current.input?.clientX;
            if (typeof te == "number" && typeof re == "number") {
              const ue = le.top + le.height / 2, B = te - ue, P = 24, Y = 300, ie = le.height / 2;
              let ce = 0;
              if (Math.abs(B) > P) {
                const De = Math.min(Math.abs(B) - P, ie) / ie;
                ce = Math.sign(B) * Y * De;
              }
              if (b.current = ce, _(), L.current.dropTargets.some((be) => be.data.type === "list-card-target"))
                (y !== null || S !== null) && (E(null), k(null));
              else {
                const be = i.current;
                if (be) {
                  const De = Array.from(be.querySelectorAll(`[data-kanban-card="true"][data-lane-id="${t}"]`));
                  if (De.length > 0) {
                    let Se = -1, Et = Number.POSITIVE_INFINITY, rt = "top";
                    for (const bn of De) {
                      const Zn = bn.getAttribute("data-index"), Es = Zn ? Number(Zn) : -1, jr = bn.getBoundingClientRect(), Br = jr.top + jr.height / 2, vn = Math.abs(te - Br);
                      vn < Et && (Et = vn, Se = Es, rt = te < Br ? "top" : "bottom");
                    }
                    ae && K >= 0 && (Se === K && rt === "top" || Se === K && rt === "bottom" || Se === K - 1 && rt === "bottom" || Se === K + 1 && rt === "top") ? (E(null), k(null)) : (E(Se >= 0 ? Se : null), k(Se >= 0 ? rt : null));
                  }
                }
              }
            }
          }
        } else
          b.current = 0, R || (E(null), k(null), T(!1), N(-1));
      },
      onDrop: async ({ location: L, source: O }) => {
        c(!1), T(!1);
        const R = String(O.data.id);
        O.data.data;
        const $ = r.items.findIndex((re, ue) => String(r.getKey(re, ue)) === R), Z = String(O.data.data?.laneId ?? "") || String(L.initial.dropTargets.find((re) => re.data.type === "list-droppable")?.data?.id ?? ""), ae = String(Z) !== String(t);
        if (!ae && $ >= 0) {
          const re = L.current.dropTargets.find((ue) => ue.data.type === "list-card-target");
          if (re) {
            const ue = re.data.index, B = re.data.closestEdge;
            if (ue !== void 0 && B) {
              let P = !1;
              if ((ue === $ || ue === $ - 1 && B === "bottom" || ue === $ + 1 && B === "top") && (P = !0), P)
                return;
            }
          }
        }
        if (!ae && y !== null && S !== null && (y === $ && S === "top" || y === $ && S === "bottom" || y === $ - 1 && S === "bottom" || y === $ + 1 && S === "top")) {
          E(null), k(null);
          return;
        }
        if (!L.current.dropTargets.some((re) => {
          const ue = re.data;
          return ue.type === "list-droppable" && ue.id === t;
        }))
          return;
        let H = null;
        const { type: le, cardTarget: te } = A(L.current.dropTargets);
        if (ae ? te && te.data ? H = tI({
          cardTarget: te,
          fromLaneId: Z,
          toLaneId: t,
          sourceId: R
        }) : y !== null && S ? H = {
          fromLaneId: Z,
          toLaneId: t,
          sourceId: R,
          indexOfTarget: y,
          position: S === "bottom" ? "below" : "above"
        } : H = nI({
          fromLaneId: Z,
          toLaneId: t,
          sourceId: R
        }) : le === "sameLaneOverCard" && te && te.data ? H = ZS({
          cardTarget: te,
          fromLaneId: Z,
          toLaneId: t,
          sourceId: R
        }) : y !== null && S ? H = {
          fromLaneId: Z,
          toLaneId: t,
          sourceId: R,
          indexOfTarget: y,
          position: S === "bottom" ? "below" : "above"
        } : H = eI({
          fromLaneId: Z,
          toLaneId: t,
          sourceId: R
        }), !!H) {
          if (!ae && H.indexOfTarget !== void 0) {
            const re = H.indexOfTarget, ue = H.position;
            if (re === $ && ue === "above" || re === $ && ue === "below" || re === $ - 1 && ue === "below" || re === $ + 1 && ue === "above")
              return;
          }
          await n?.(H), E(null), k(null);
        }
      }
    });
  }, [t, e, n, x, r.items, r.getKey, y, S]), V(() => {
    const _ = () => {
      const O = i.current;
      return O ? (m.current = O.querySelector("[data-scroll-container]"), m.current) : null;
    };
    _();
    const A = i.current;
    if (!A) return;
    const L = new MutationObserver(() => {
      _();
    });
    return L.observe(A, {
      subtree: !0,
      childList: !0
    }), () => L.disconnect();
  }, [t]), Gu(({ phase: _ }) => {
    _ === "start" && w(!0), (_ === "drop" || _ === "cancel") && (w(!1), T(!1), E(null), k(null), N(-1));
  }), V(() => {
    const _ = (A) => {
      if (!t) return;
      const L = A.detail;
      L && L.toLaneId === t && n?.(L).catch(() => {
      });
    };
    return window.addEventListener("kanban-test-move", _), () => window.removeEventListener("kanban-test-move", _);
  }, [t, n]), Wn(() => {
    const _ = o.current, A = s.current;
    if (!_ || !A) return;
    let L = null, O = null;
    const R = () => {
      const ae = A.parentElement?.parentElement;
      if (!ae) return;
      const K = ae.offsetHeight, H = A.style.height;
      A.style.height = "auto", _.offsetHeight;
      const le = _.scrollHeight;
      A.style.height = H;
      let te;
      K < 100 ? te = Math.max(le, 400) : te = Math.min(le, K), (O === null || Math.abs(te - O) > 1) && (O = te, f(te));
    };
    R();
    const $ = () => {
      L !== null && cancelAnimationFrame(L), L = requestAnimationFrame(() => {
        R(), L = null;
      });
    }, U = new ResizeObserver($);
    U.observe(_);
    const Z = A.parentElement?.parentElement;
    return Z && U.observe(Z), () => {
      L !== null && cancelAnimationFrame(L), U.disconnect();
    };
  }, [r.items.length, r.loading, I]), l("div", {
    ref: s,
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
        ref: o,
        className: "flex h-full flex-col",
        children: l(QS, {
          ...r,
          dropPlaceholderIndex: I && r.items.length === 0 ? 0 : void 0,
          renderCard: (_, A) => {
            const L = r.renderCard(_, A);
            if (Au(L)) {
              const O = A === y ? S : null, R = [];
              return D >= 0 && (A === D ? R.push("top", "bottom") : A === D - 1 ? R.push("bottom") : A === D + 1 && R.push("top")), Sl(L, {
                forcedEdge: O,
                disabledEdges: R
              });
            }
            return L;
          }
        })
      })]
    })
  });
}
function qc(t) {
  const { lanes: e, renderCard: n, getKey: r, className: i, dnd: s, loading: o, onCreate: a } = t, [c, d] = F(() => e), f = W(""), u = W(null);
  V(() => {
    const k = e.map((I) => `${I.id}:[${I.items.map((T, D) => r(T, D, I.id)).join(",")}]`).join("|");
    if (u.current !== null)
      if (k === u.current)
        u.current = null, f.current = k, d(e);
      else
        return;
    else k !== f.current && (f.current = k, d(e));
  }, [e, r, c]);
  const [h, m] = F(!1), p = W(null), b = W(null), v = W(null), x = W(null), w = W(0), y = W(null);
  Gu(({ phase: k }) => {
    k === "start" && m(!0), (k === "drop" || k === "cancel") && m(!1);
  }), V(() => {
    const k = () => {
      const N = performance.now(), _ = y.current ?? N, A = (N - _) / 1e3;
      y.current = N;
      const L = v.current;
      if (!h || !L || w.current === 0) {
        x.current != null && (window.cancelAnimationFrame(x.current), x.current = null), y.current = null;
        return;
      }
      L.scrollLeft += w.current * A, x.current = window.requestAnimationFrame(k);
    }, I = (N) => {
      w.current = N, x.current == null && (y.current = null, x.current = window.requestAnimationFrame(k));
    }, T = () => {
      w.current = 0, x.current != null && (window.cancelAnimationFrame(x.current), x.current = null), y.current = null;
    }, D = [];
    return p.current && D.push(xo({
      element: p.current,
      getData: () => ({
        type: "board-scroll-edge",
        edge: "left"
      }),
      onDragEnter: () => I(-400),
      onDrag: () => I(-400),
      onDragLeave: () => T(),
      onDrop: () => T()
    })), b.current && D.push(xo({
      element: b.current,
      getData: () => ({
        type: "board-scroll-edge",
        edge: "right"
      }),
      onDragEnter: () => I(400),
      onDrag: () => I(400),
      onDragLeave: () => T(),
      onDrop: () => T()
    })), () => {
      D.forEach((N) => N()), T();
    };
  }, [h]);
  const E = (k, I) => {
    const T = c.find((D) => D.id === k);
    return T ? T.items.findIndex((D, N) => String(r(D, N, k)) === String(I)) : -1;
  }, S = async (k) => {
    const { fromLaneId: I, toLaneId: T, sourceId: D, indexOfTarget: N, position: _ } = k, A = c;
    let L = A.findIndex((H) => H.id === I);
    const O = A.findIndex((H) => H.id === T);
    if (O === -1) return Promise.reject(new Error("Lane not found"));
    let R = -1;
    if (L !== -1 && (R = A[L].items.findIndex((H, le) => String(r(H, le, I)) === String(D))), R === -1)
      for (let H = 0; H < A.length; H++) {
        const le = A[H].id, te = A[H].items.findIndex((re, ue) => String(r(re, ue, le)) === String(D));
        if (te !== -1) {
          L = H, R = te;
          break;
        }
      }
    if (L === -1 || R === -1)
      return Promise.resolve(void 0);
    const $ = A[L].items[R];
    let U = 0;
    N == null ? U = 0 : U = N + (_ === "below" ? 1 : 0);
    const Z = I === T, ae = A.map((H, le) => {
      if (le === L && Z) {
        const te = [...H.items];
        te.splice(R, 1);
        const re = R < U ? U - 1 : U;
        return te.splice(re, 0, $), {
          ...H,
          items: te
        };
      }
      if (le === L) {
        const te = [...H.items];
        te.splice(R, 1);
        const re = typeof H.total == "number" && !Z ? Math.max(0, H.total - 1) : H.total;
        return {
          ...H,
          items: te,
          total: re
        };
      }
      if (le === O) {
        const te = [...H.items], re = Math.max(0, Math.min(U, te.length));
        te.splice(re, 0, $);
        const ue = typeof H.total == "number" && !Z ? H.total + 1 : H.total;
        return {
          ...H,
          items: te,
          total: ue
        };
      }
      return H;
    });
    d(ae);
    const K = ae.map((H) => `${H.id}:[${H.items.map((le, te) => r(le, te, H.id)).join(",")}]`).join("|");
    u.current = K, f.current = K;
    try {
      const H = N == null ? null : A[O].items[N], le = await s?.onMove?.(I, T, $, H ? {
        record: H,
        position: _ ?? "above"
      } : null);
      return le && d((te) => {
        const re = te.map((B) => {
          if (B.id !== T) return B;
          const P = [...B.items], Y = P.findIndex((ie, ce) => String(r(ie, ce, T)) === String(D));
          return Y !== -1 && P.splice(Y, 1, le), {
            ...B,
            items: P
          };
        }), ue = re.map((B) => `${B.id}:[${B.items.map((P, Y) => r(P, Y, B.id)).join(",")}]`).join("|");
        return f.current = ue, re;
      }), le;
    } catch (H) {
      throw d(A), u.current = null, H;
    }
  };
  return g("div", {
    className: C("relative h-full w-full px-4", i),
    children: [l(Nt, {
      className: "relative h-full w-full [&>div>div]:h-full",
      viewportRef: v,
      children: l("div", {
        className: "relative mb-2 flex h-full items-start gap-2",
        children: c.map((k, I) => {
          const T = k.total ?? k.items.length;
          return l("div", {
            className: "relative shrink-0",
            children: l(rI, {
              id: k.id,
              getLaneResourceIndexById: k.id ? (D) => E(k.id, D) : void 0,
              onMove: S,
              title: k.title,
              items: k.items,
              getKey: (D, N) => r(D, N, k.id),
              renderCard: (D, N) => n(D, N, T, k.id),
              emptyState: k.emptyState,
              loading: o || k.loading,
              variant: k.variant,
              total: T,
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
const iI = ({ lanes: t, title: e, description: n, avatar: r, metadata: i, onMove: s, onCreate: o, source: a, onSelectItems: c, onLoadError: d, onLoadData: f }) => {
  const { lanesProvider: u, lanesHooks: h } = OS(a, {
    onError: (A) => d(A)
  }), m = Ib();
  if (a.currentGrouping && m)
    throw new Error("Grouping is not supported in Kanban yet");
  const [p] = F(() => /* @__PURE__ */ Symbol("kanban-visualization")), b = a.idProvider, v = z(() => JSON.stringify(Object.values(h).map((A) => A.data)), [h]), x = z(() => t.map((A) => ({
    ...A,
    items: h[A.id]?.data?.records || []
  })), [v]), w = (A) => A.map(({ icon: L, tooltip: O, property: R }) => R.type === "file" ? {
    property: R
  } : {
    icon: L,
    tooltip: O,
    property: R
  }), y = (A) => !!(A && A.type === "infinite-scroll"), E = {
    lanes: x.map((A) => {
      const L = h[A.id], O = L?.paginationInfo?.total, R = y(L?.paginationInfo) && L?.paginationInfo?.hasMore;
      return {
        id: A.id,
        title: A.title,
        items: A.items,
        variant: A.variant,
        total: O,
        hasMore: R,
        loading: L?.isLoading || !1,
        loadingMore: L?.isLoadingMore || !1,
        fetchMore: R ? () => L.loadMore() : void 0
      };
    }),
    loading: Object.values(h).some((A) => A.isInitialLoading),
    getKey: (A, L) => {
      if (b) return String(b(A, L));
      const O = A?.id;
      return O != null ? String(O) : String(L);
    },
    renderCard: (A, L, O, R) => {
      const $ = String(b ? b(A, L) : A?.id ?? L), U = a.selectable ? a.selectable(A) : A.id, Z = _ && R ? _.get(R) : void 0, ae = (typeof U == "string" || typeof U == "number") && Z && Z?.selectedItems.has(U), K = a.itemUrl ? a.itemUrl(A) : void 0, H = a.itemOnClick ? a.itemOnClick(A) : void 0;
      return l(JS, {
        drag: {
          id: $,
          type: "list-card",
          data: {
            ...A,
            laneId: R
          }
        },
        id: String(A.id),
        index: L,
        total: O,
        laneId: R,
        showIndicator: I,
        title: e ? e(A) : String(L),
        description: n ? n(A) : void 0,
        avatar: r ? r(A) : void 0,
        draggable: s !== void 0,
        metadata: i ? w(i(A)) : void 0,
        compact: !0,
        forceVerticalMetadata: !0,
        selectable: a.selectable !== void 0,
        selected: ae,
        onSelect: (le) => {
          Z && Z.handleSelectItemChange(A, le);
        },
        onClick: H,
        link: K
      }, $);
    },
    onCreate: o
  }, S = z(() => {
    const A = Object.values(h);
    if (A.length !== 0)
      return A.reduce((L, O) => {
        const R = O.paginationInfo?.total ?? O.data.records.length;
        return L + (typeof R == "number" ? R : 0);
      }, 0);
  }, [h]), k = z(() => {
    const A = Object.values(h);
    return A.length === 0 ? !0 : A.some((L) => L.isInitialLoading);
  }, [h]);
  V(() => {
    f({
      totalItems: S,
      filters: a.currentFilters,
      search: a.currentSearch,
      isInitialLoading: k,
      data: Object.values(h).flatMap((A) => A.data.records)
    });
  }, [S, k]);
  const I = a.currentSortings === null, T = z(() => {
    const A = /* @__PURE__ */ new Map();
    return x.forEach((L) => {
      const O = /* @__PURE__ */ new Map();
      L.items.forEach((R, $) => {
        const U = b ? b(R, $) : R?.id ?? $, Z = String(U);
        O.set(Z, $);
      }), A.set(L.id, O);
    }), A;
  }, [x, b]);
  E.dnd = {
    instanceId: p,
    getIndexById: (A, L) => {
      const O = T.get(A)?.get(L) ?? -1;
      return I ? O : -1;
    },
    onMove: s
  };
  const D = z(() => t.map((A) => ({
    id: A.id,
    data: h[A.id]?.data || {
      type: "flat",
      records: [],
      groups: []
    },
    paginationInfo: h[A.id]?.paginationInfo || null
  })), [t, h]), { lanesSelectProvider: N, lanesUseSelectable: _ } = MS(D, a, (A, L) => {
    c?.(A, L);
  });
  return g(ee, {
    children: [u, N, s ? l(tv, {
      driver: nv(p),
      children: l(qc, {
        ...E
      })
    }) : l(qc, {
      ...E
    })]
  });
}, Vh = ({ items: t, onOpenChange: e, align: n = "end", label: r = "Actions", className: i }) => {
  const [s, o] = F(!1);
  return !t || t.length === 0 ? null : l("div", {
    className: C("pointer-events-auto", i),
    children: l(Me, {
      align: n,
      items: t.map((a) => a.type === "separator" || a.type === "label" ? a : {
        ...a,
        type: "item"
      }),
      open: s,
      onOpenChange: (a) => {
        o(a), e?.(a);
      },
      children: l(nt, {
        icon: cr,
        label: r,
        hideLabel: !0,
        variant: "ghost",
        pressed: s
      })
    })
  });
}, Wh = ({ items: t, onOpenChange: e, className: n }) => l("div", {
  className: C(n),
  children: l(Vh, {
    label: "Mobile Actions",
    align: "end",
    items: t,
    onOpenChange: e
  })
}), Uh = ({ className: t, primaryItemActions: e, dropdownItemActions: n, handleDropDownOpenChange: r }) => g("aside", {
  className: C("items-center justify-end gap-2 md:flex", t),
  children: [e.map((i) => l(j, {
    label: i.label,
    variant: "outline",
    onClick: i.onClick,
    icon: i.icon
  }, i.label)), l(Vh, {
    align: "end",
    items: n,
    onOpenChange: r
  })]
}), Gh = ({ children: t, dropDownOpen: e, className: n }) => l("aside", {
  className: C("absolute bottom-0 right-0 top-0 z-20 hidden items-center justify-end gap-2 py-2 pl-20 pr-3 opacity-0 transition-all group-hover:opacity-100 md:flex", "bg-gradient-to-l from-[#F5F6F8] from-0% dark:from-[#192231]", "via-[#F5F6F8] via-60% dark:via-[#192231]", "to-transparent to-100%", e ? "opacity-100" : "opacity-0", n),
  children: t
}), sI = (t, e) => (t && t(e) || []).filter((n) => n.type === "separator" || n.enabled === void 0 || n.enabled), oI = (t) => t ? t.indeterminate || t.selectedCount !== void 0 && t.selectedCount > 0 && !t.checked ? "indeterminate" : t.checked : !1, Kc = (t) => (t || []).map((e) => e.type === "separator" ? e : {
  ...e,
  type: "item"
}), qh = ({
  source: t,
  item: e
}) => {
  const [n, r] = F(!1), [i, s] = F(null);
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
  const o = sI(t.itemActions, e), a = o.filter(
    (u) => u.type === "primary"
  ).slice(0, 2), c = Kc(
    o.filter(
      (u) => u.type === "separator" || !a.includes(u)
    )
  ), d = Kc([
    ...a,
    ...o.filter(
      (u) => u.type === "separator" || !a.includes(u)
    )
  ]), f = (u) => {
    if (!u) {
      s(
        setTimeout(() => {
          r(!1);
        }, 100)
      );
      return;
    }
    i && (clearTimeout(i), s(null)), r(!0);
  };
  return {
    hasItemActions: o.length > 0,
    primaryItemActions: a,
    dropdownItemActions: c,
    mobileDropdownItemActions: d,
    handleDropDownOpenChange: f,
    dropDownOpen: n,
    setDropDownOpen: r
  };
}, Ys = {
  default: "-",
  list: void 0
}, Kh = (t, e, n, r) => {
  const i = e.render(t), s = n in Ys ? Ys[n] : Ys.default;
  return rv(
    i,
    {
      visualization: n,
      i18n: r
    },
    s
  );
}, lI = ({ title: t, avatar: e, description: n }) => g("article", {
  className: "flex w-[calc(100%-72px)] min-w-40 flex-col items-start gap-3 md:w-full md:flex-row md:items-center md:gap-2",
  children: [e && l(Yi, {
    avatar: e,
    size: "md"
  }), g("div", {
    className: "flex flex-1 flex-col gap-0.5",
    children: [l("header", {
      children: l("h3", {
        children: l(Ve, {
          className: "text-base font-medium text-f1-foreground",
          children: t
        })
      })
    }), l("aside", {
      children: n && n.length > 0 && l("div", {
        className: "flex w-full flex-col text-base font-normal text-f1-foreground-secondary md:flex-row md:gap-1",
        children: n.map((r, i) => g("div", {
          className: "flex min-w-0 gap-1",
          children: [l(Ve, {
            children: r
          }), i < n.length - 1 && l("span", {
            className: "hidden md:inline",
            children: " · "
          })]
        }, i))
      })
    })]
  })]
}), aI = ({ source: t, item: e, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: s }) => {
  const o = X(), { actions: a } = o, c = (w, y) => Kh(w, y, "list", o), d = t.itemUrl ? t.itemUrl(e) : void 0, f = t.itemOnClick ? t.itemOnClick(e) : void 0, u = t.selectable ? t.selectable(e) : void 0, h = s(e), { primaryItemActions: m, dropdownItemActions: p, mobileDropdownItemActions: b, handleDropDownOpenChange: v, dropDownOpen: x } = qh({
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
        children: l(ki, {
          checked: n.has(u),
          onCheckedChange: (w) => r(e, w),
          title: `Select ${t.selectable(e)}`,
          hideLabel: !0
        })
      }), d && l(In, {
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
        const y = c(e, w);
        return y ? l("div", {
          children: l("div", {
            className: "flex items-center justify-center px-0 py-1 md:p-3 [&>span]:whitespace-nowrap",
            children: y
          })
        }, String(w.label)) : null;
      })
    }), t.itemActions && g(ee, {
      children: [l(Gh, {
        dropDownOpen: x,
        className: "pointer-events-auto hidden md:flex",
        children: l(Uh, {
          primaryItemActions: m,
          dropdownItemActions: p,
          handleDropDownOpenChange: v
        })
      }), l(Wh, {
        className: "absolute -right-px bottom-0 top-0 z-20 items-center justify-end gap-2 py-2 pl-20 pr-3 md:hidden",
        items: b,
        onOpenChange: v
      })]
    }), t.selectable && u !== void 0 && l("div", {
      className: C("pointer-events-auto absolute right-3 top-3 flex h-8 w-8 items-center justify-center md:hidden", t.itemActions && "right-12"),
      children: l(ki, {
        checked: n.has(u),
        onCheckedChange: (w) => r(e, w),
        title: `Select ${t.selectable(e)}`,
        hideLabel: !0
      })
    })]
  });
}, Jc = ({ source: t, items: e, selectedItems: n, handleSelectItemChange: r, fields: i, itemDefinition: s, isLoadingMore: o }) => l("div", {
  className: C("flex flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", o && "rounded-b-none"),
  children: e.map((a, c) => l(aI, {
    source: t,
    item: a,
    selectedItems: n,
    handleSelectItemChange: r,
    fields: i,
    itemDefinition: s
  }, `row-${c}`))
}), Yc = ({ source: t, fields: e, count: n = 5, isInitialLoading: r, className: i }) => l("div", {
  className: C("relative flex h-full flex-col overflow-hidden rounded-b-xl border border-solid border-f1-border-secondary [&>div:last-child]:border-b-transparent [&>div]:border [&>div]:border-solid [&>div]:border-transparent [&>div]:border-b-f1-border-secondary", r ? "mx-4 mt-2 rounded-t-xl" : "border-t-0", i),
  children: Array.from({
    length: n
  }).map((s, o) => g("div", {
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
  }, `skeleton-item-${o}`))
}), cI = ({ fields: t, itemDefinition: e, source: n, onSelectItems: r, onLoadData: i, onLoadError: s, tmpFullWidth: o }) => {
  const { data: a, paginationInfo: c, setPage: d, isInitialLoading: f, isLoadingMore: u, loadMore: h } = hs(n, {
    onError: (D) => {
      s(D);
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
  const { isLoading: m } = n, { loadingIndicatorRef: p } = Ul(c, m, u, h), { selectedItems: b, groupAllSelectedStatus: v, handleSelectItemChange: x, handleSelectGroupChange: w } = Xi({
    data: a,
    paginationInfo: c,
    source: n,
    onSelectItems: r,
    selectionMode: "multi",
    selectedState: n.defaultSelectedItems
  }), y = n.grouping?.collapsible, E = n.grouping?.defaultOpenGroups, { openGroups: S, setGroupOpen: k } = kl(a?.type === "grouped" ? a.groups : [], E);
  if (zo({
    value: f,
    delay: 100
  }))
    return l(Yc, {
      source: n,
      fields: t,
      count: 30,
      isInitialLoading: !0
    });
  n.sortings || t.forEach((D) => {
    D.sorting && console.warn("Sorting is defined on a property but no sortings are provided in the data source");
  });
  const T = f || m && n.dataAdapter.paginationType === "pages";
  return g("div", {
    className: C("flex max-h-full min-h-0 flex-1 flex-col gap-4 py-2", o && "px-0"),
    children: [l("div", {
      className: C("flex min-h-0 flex-1 flex-col gap-2", T && "select-none opacity-50 transition-opacity"),
      "aria-live": T ? "polite" : void 0,
      "aria-busy": T ? "true" : void 0,
      children: g("div", {
        className: "min-h-0 flex-1 overflow-auto pb-3",
        children: [a.type === "grouped" && a.groups.map((D, N) => {
          const _ = D.itemCount;
          return g("div", {
            className: "flex flex-col gap-0 pt-2 first:pt-0",
            children: [l(Cl, {
              className: "cursor-pointer select-none rounded-md px-3.5 py-3 transition-colors hover:bg-f1-background-hover",
              selectable: !!n.selectable,
              select: v[D.key]?.checked ? !0 : v[D.key]?.indeterminate ? "indeterminate" : !1,
              onSelectChange: (A) => w(D, A),
              showOpenChange: y,
              label: D.label,
              itemCount: _,
              open: S[D.key],
              onOpenChange: (A) => k(D.key, A)
            }, `group-header-${D.key}`), l(Ae, {
              children: (!y || S[D.key]) && l(G.div, {
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
                  items: D.records,
                  selectedItems: b,
                  handleSelectItemChange: x,
                  fields: t,
                  itemDefinition: e,
                  isLoadingMore: u && N === a.groups.length - 1
                }, `list-group-${D.key}`)
              })
            })]
          }, `group-header-${D.key}`);
        }), a?.type === "flat" && l(Jc, {
          source: n,
          items: a.records,
          selectedItems: b,
          handleSelectItemChange: x,
          fields: t,
          itemDefinition: e,
          isLoadingMore: u
        }), Ni(c) && u && l(Yc, {
          source: n,
          fields: t,
          count: 5
        }), Ni(c) && c.hasMore && l("div", {
          ref: p,
          className: "w-full",
          "aria-hidden": "true"
        })]
      })
    }), l(Wl, {
      paginationInfo: c,
      setPage: d
    })]
  });
}, dI = (t) => {
  t.setVisualizationSettings("table", {});
}, uI = () => {
  const t = {};
  for (const [e, n] of Object.entries(Fr))
    n.settings.default && (t[e] = {
      ...n.settings.default
    });
  return t;
}, Jh = zt({
  setSettings: () => {
  },
  settings: {
    visualization: {}
  },
  setVisualizationSettings: () => {
  }
}), ps = () => {
  const t = $t(Jh);
  if (!t)
    throw new Error("useTableSettings must be used within a TableSettingsProvider");
  return t;
}, fI = ({ children: t }) => {
  const [e, n] = F({
    visualization: uI()
  }), r = (i, s) => {
    n(typeof s == "function" ? (o) => ({
      ...o,
      visualization: {
        ...o.visualization,
        [i]: s(o.visualization[i])
      }
    }) : (o) => ({
      ...o,
      visualization: {
        ...o.visualization,
        [i]: s
      }
    }));
  };
  return l(Jh.Provider, {
    value: {
      settings: e,
      setSettings: n,
      setVisualizationSettings: r
    },
    children: t
  });
}, Lt = (t) => t.id ?? t.label ?? "column", hI = (t) => [...t].sort((e, n) => (e.order ?? t.length) - (n.order ?? t.length)).map((e) => Lt(e)), mI = (t) => t.filter((e) => e.hidden && !e.noHiding).map((e) => Lt(e)), Yh = (t, e, n, r, i) => {
  const s = () => {
    if (!i || n?.hidden === void 0)
      return mI(t);
    if (!n.order || n.order.length === 0)
      return n.hidden;
    const h = new Set(n.order), m = t.filter(
      (p) => p.hidden && !p.noHiding && !h.has(Lt(p))
    ).map(Lt);
    return [...n.hidden, ...m];
  }, [o, a] = F(s()), [c, d] = F(
    (r && n?.order !== void 0 ? n.order : void 0) ?? hI(t)
  );
  V(() => {
    i && n?.hidden !== void 0 && a(s());
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
        const v = c.indexOf(Lt(p)), x = c.indexOf(Lt(b)), w = v === -1 ? c.length : v, y = x === -1 ? c.length : x;
        return w - y;
      }).map((p, b) => ({
        column: {
          ...p,
          id: Lt(p)
        },
        canHide: i ? !(p.noHiding ?? !1) : !1,
        visible: !o.includes(Lt(p)),
        sortable: !!r,
        order: b + e
      }))
    ];
  }, [
    e,
    c,
    o,
    t,
    r,
    i
  ]);
  return {
    columns: z(() => f.filter((h) => h.visible).map((h) => h.column), [f]),
    columnsWithStatus: f,
    colsHidden: o,
    setColsHidden: a,
    colsOrder: c,
    setColsOrder: d
  };
}, pI = ({ item: t, onChangeVisibility: e, allowSorting: n, allowHiding: r }) => {
  const i = "flex items-center gap-2 text-medium text-sm pr-4", s = os(), o = g("div", {
    className: i,
    children: [n && l("div", {
      className: C("flex shrink-0 items-center justify-center text-f1-icon", t.sortable && "cursor-grab"),
      style: {
        width: "20px"
      },
      onPointerDown: (a) => {
        t.sortable && s.start(a);
      },
      children: t.sortable ? l(q, {
        icon: Dr,
        size: "xs"
      }) : l(q, {
        icon: Ab,
        size: "sm"
      })
    }), l("span", {
      className: C("flex-1", t.sortable ? "text-f1-foreground" : "text-f1-foreground-secondary"),
      children: l(Ve, {
        children: t.label
      })
    }), r && l(su, {
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
    dragControls: s,
    children: o
  }) : l("li", {
    children: o
  });
}, gI = ({ items: t, onChange: e, allowSorting: n, allowHiding: r }) => {
  const i = (o) => {
    e?.(t.map((a) => a.id === o.id ? o : a));
  };
  return l(Mn, {
    className: "flex flex-1 select-none list-none flex-col gap-2",
    values: t,
    onReorder: (o) => {
      e?.(o);
    },
    axis: "y",
    layoutScroll: !0,
    children: t.map((o) => l(pI, {
      item: o,
      onChangeVisibility: i,
      allowSorting: n,
      allowHiding: r
    }, o.id))
  });
}, bI = ({ columns: t, frozenColumns: e, allowSorting: n, allowHiding: r }) => {
  const i = X(), { settings: s, setVisualizationSettings: o } = ps(), { columnsWithStatus: a } = Yh(t, e, s.visualization.table, n, r), c = z(() => a.filter((h) => r || h.visible).map((h) => ({
    id: h.column.id,
    label: h.column.label,
    sortable: h.sortable,
    canHide: h.canHide,
    visible: h.visible
  })), [a, r]), d = (h) => {
    o("table", (m) => ({
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
    children: g(Nt, {
      className: "h-[200px]",
      children: [l(gI, {
        items: c,
        onChange: d,
        allowSorting: n,
        allowHiding: r
      }), u && g("div", {
        className: "sticky bottom-0 flex justify-between bg-f1-background/80 p-2 pl-0 backdrop-blur-sm",
        children: [l(j, {
          variant: "outline",
          size: "sm",
          label: i.collections.table.settings.showAllColumns,
          onClick: () => {
            f(!0);
          }
        }), l(j, {
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
}), Gl = Fe.forwardRef(({ className: t, ...e }, n) => l("div", {
  className: "relative w-full",
  children: l("table", {
    ref: n,
    className: C("w-full caption-bottom border-spacing-0 border-0 border-none text-base", t),
    ...e
  })
}));
Gl.displayName = "Table";
const Qh = Fe.forwardRef(({ className: t, ...e }, n) => l("thead", {
  ref: n,
  className: C("relative min-h-10 [&_tr]:hover:bg-transparent", "before:absolute before:inset-x-0 before:top-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", t),
  ...e
}));
Qh.displayName = "TableHeader";
const Xh = Fe.forwardRef(({ className: t, ...e }, n) => l("tbody", {
  ref: n,
  className: C("border-0", t),
  ...e
}));
Xh.displayName = "TableBody";
const Zh = Fe.forwardRef(({ className: t, ...e }, n) => l("tfoot", {
  ref: n,
  className: C("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", t),
  ...e
}));
Zh.displayName = "TableFooter";
const em = Fe.forwardRef(({ className: t, ...e }, n) => l("tr", {
  ref: n,
  className: C("group relative transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] hover:bg-f1-background-hover", t),
  ...e
}));
em.displayName = "TableRow";
const tm = Fe.forwardRef(({ className: t, ...e }, n) => l("th", {
  ref: n,
  className: C("relative px-3 py-2.5 text-left align-middle font-medium text-f1-foreground-secondary first:pl-6 last:pr-6", "after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-1 after:rounded after:bg-transparent after:transition-colors after:content-[''] first:after:left-3 last:after:right-3 hover:after:bg-f1-background-hover", "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2 [&:has([role=checkbox])]:hover:after:bg-transparent", t),
  ...e
}));
tm.displayName = "TableHead";
const nm = Fe.forwardRef(({ className: t, ...e }, n) => l("td", {
  ref: n,
  className: C("relative min-h-[48px] whitespace-nowrap p-2 align-top first:pl-6 last:pr-6", "[&:has([role=checkbox])]:px-2 [&:has([role=checkbox])]:py-2.5", t),
  ...e
}));
nm.displayName = "TableCell";
const xI = Fe.forwardRef(({ className: t, ...e }, n) => l("caption", {
  ref: n,
  className: C("text-muted-foreground mt-4 text-sm", t),
  ...e
}));
xI.displayName = "TableCaption";
function rm({ children: t }) {
  return l(Xh, {
    children: t
  });
}
const yI = {
  auto: void 0,
  fit: 1
}, wI = (t) => typeof t == "number", im = (t) => wI(t) ? t : yI[t], ql = zt(void 0);
function sm() {
  const t = $t(ql);
  if (!t)
    throw new Error("useTable must be used within a TableProvider");
  return t;
}
const gs = 32, Ri = 24, fi = 18, kI = "1px", Gt = 8, om = 32, lm = 4, jo = 40, CI = jo - Ri, Kl = ({
  depth: t,
  padding: e = 0
}) => `${t * gs + e}px`, NI = ({
  depth: t,
  isDetailedVariant: e
}) => Kl({
  depth: t,
  padding: e ? -om / 2 : -lm
}), am = (t, e) => t && e > 0, cm = (t, e) => t && e, SI = (t, e) => t && e, dm = (t, e) => t && e, II = (t, e, n) => !e && dm(t, n), AI = (t, e) => t && e?.nestedVariant === "detailed", TI = ({ width: t, linkRef: e, firstCell: n, nestedRowProps: r, children: i, onClick: s }) => {
  const o = cm(n, !!r?.rowWithChildren), a = am(n, r?.depth ?? 0), c = II(n, !!r?.rowWithChildren, !!r?.tableWithChildren), d = AI(n, r), f = r?.onLoadMoreChildren, u = r?.depth ?? 0, h = a ? Kl({
    depth: o ? u : u + 1
  }) : void 0;
  return l("div", {
    className: C(t !== "auto" && "overflow-hidden", "relative z-[1]", o && "flex items-center gap-2"),
    style: {
      marginLeft: f ? NI({
        depth: u + (d ? 0 : 1),
        isDetailedVariant: d
      }) : h
    },
    onClick: () => {
      e.current?.click(), s?.();
    },
    children: f ? l(ee, {
      children: l("div", {
        className: C("pointer-events-auto cursor-pointer"),
        children: l(j, {
          variant: "ghost",
          size: "md",
          icon: po,
          label: "See more",
          onClick: (m) => {
            m.stopPropagation(), f?.();
          }
        })
      })
    }) : g(ee, {
      children: [l("div", {
        className: C("flex h-[var(--chevron-parent-size)] w-[var(--chevron-parent-size)] min-w-[var(--chevron-parent-size)] items-center justify-center", o && "pointer-events-auto cursor-pointer rounded-sm hover:bg-f1-foreground-disabled"),
        style: {
          "--chevron-parent-size": `${Ri}px`,
          "--chevron-size": `${fi}px`,
          "--spacing-factor": `${gs}px`
        },
        onClick: (m) => {
          o && (m.stopPropagation(), r?.onExpand?.());
        },
        children: o && (r?.expanded ? l(cu, {
          className: "pointer-events-none shrink-0",
          size: fi
        }) : l(du, {
          className: "pointer-events-none shrink-0",
          size: fi
        }))
      }), l("div", {
        className: C(o && "min-w-0", c && "pl-[var(--spacing-factor)]", "relative"),
        children: i
      })]
    })
  });
}, EI = (t, e) => {
  const { rowWithChildren: n, nestedVariant: r, onLoadMoreChildren: i } = e ?? {}, s = r === "detailed", o = i ? om / 2 - Gt : Ri / 2 - Gt, a = n && !i ? CI : s ? jo - 6 : jo, c = t !== 0 && `calc(${t}px - ${Ri + Gt}px )`;
  return {
    "--line-left": `-${2 * fi}px`,
    "--line-width": kI,
    "--horizontal-offset": `${o}px`,
    "--horizontal-left": "4px",
    "--horizontal-height": `${gs / 2}px`,
    "--connector-width": `${a}px`,
    ...c ? {
      "--line-height": c
    } : {}
  };
}, DI = "h-full overflow-visible before:absolute before:-left-[var(--line-left)] before:top-[40px] before:h-[var(--line-height)] before:w-[var(--line-width)] before:bg-f1-foreground-disabled before:content-['']", _I = "after:absolute after:left-[var(--horizontal-left)] after:top-[var(--horizontal-offset)] after:h-[var(--horizontal-height)] after:w-[var(--connector-width)] after:rounded-bl-[var(--horizontal-height)] after:content-[''] after:shadow-[inset_1px_-1px_0_0_hsl(var(--neutral-30))]", LI = ({ firstCell: t, nestedRowProps: e }) => {
  const n = am(t, e?.depth ?? 0), r = SI(e?.expanded ?? !1, t), i = e === void 0 || e?.nestedVariant === "basic", s = e?.nestedVariant === "detailed", o = i || e?.rowWithChildren, a = s && e?.onLoadMoreChildren, c = n ? Kl({
    depth: e?.depth ?? 0,
    padding: 0
  }) : void 0, d = e?.connectorHeight ?? 0;
  return !r && !n && !e?.rowWithChildren ? null : l("div", {
    className: C("absolute inset-0 h-full", e?.parentHasChildren && r && DI, e?.parentHasChildren && n && o && !a && _I),
    style: {
      marginLeft: c,
      ...EI(d, e)
    }
  });
};
function wt({ children: t, href: e, onClick: n, width: r = "auto", firstCell: i = !1, sticky: s, colSpan: o, className: a, loading: c = !1, nestedRowProps: d }) {
  const { isScrolled: f, isScrolledRight: u } = sm(), { actions: h } = X(), m = s?.left !== void 0, p = s?.right !== void 0, b = m || p, v = s?.left, x = s?.right, w = im(r), y = W(null), E = d?.depth ?? 0, S = d?.nestedVariant === "detailed", k = dm(i, !!d?.tableWithChildren) && {
    marginLeft: `${(E + (S ? 0 : 1)) * gs}px`
  };
  return g(nm, {
    colSpan: o,
    className: C("h-full", i && "peer font-medium", b && f && "bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:bg-f1-background before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] group-hover:before:bg-f1-background-hover", b && "sticky z-10", p && "bg-f1-background before:absolute before:inset-0 before:z-[-1] before:h-[calc(100%-1px)] before:w-full before:bg-f1-background before:transition-all before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-[''] group-hover:before:bg-f1-background-hover", e && "cursor-pointer", a),
    style: {
      width: w,
      maxWidth: w,
      minWidth: w,
      left: v,
      right: x
    },
    children: [l(Ae, {
      children: (m && f || p && u) && l(G.div, {
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
    }), !c && g(ee, {
      children: [l("div", {
        className: C("[&:has([role=checkbox])]:relative [&:has([role=checkbox])]:z-[1]", "[&:has([type=button])]:relative [&:has([type=button])]:z-[1]", "[&:has(a)]:relative [&:has(a)]:z-[1]", "pointer-events-none h-full items-start"),
        children: cm(i, !!d?.rowWithChildren) ? l(TI, {
          linkRef: y,
          firstCell: i,
          nestedRowProps: d,
          children: t
        }) : l("div", {
          className: C(r !== "auto" && "overflow-hidden", "relative z-[1]"),
          style: {
            ...k
          },
          onClick: () => {
            y.current?.click(), n?.();
          },
          children: t
        })
      }), e && l(mt, {
        ref: y,
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
function hi({ children: t, width: e = "auto", sortState: n = "none", onSortClick: r, info: i, infoIcon: s = Qi, sticky: o, hidden: a = !1, align: c = "left", className: d }) {
  const { isScrolled: f, isScrolledRight: u } = sm(), h = o?.left !== void 0, m = o?.right !== void 0, p = h || m, b = o?.left ?? 0, v = o?.right ?? 0, x = r || i, w = l(ee, {
    children: g("div", {
      className: C("flex items-center whitespace-nowrap", x && "gap-1", c === "right" && "flex-row-reverse"),
      children: [l("div", {
        className: C("truncate", e !== "auto" && "overflow-hidden"),
        children: t
      }), x && g("div", {
        className: "flex items-center",
        children: [i && l("div", {
          className: "flex h-6 w-6 items-center justify-center text-f1-foreground-secondary",
          children: l(dt, {
            label: i,
            children: l("div", {
              className: C("flex h-5 w-5 items-center justify-center rounded-xs", we()),
              tabIndex: 0,
              children: l(q, {
                icon: s,
                size: "sm"
              })
            })
          })
        }), r && l(G.button, {
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
            children: [l(G.div, {
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
              children: l(q, {
                icon: po,
                size: "xs"
              })
            }, "sort-arrow"), n === "none" && l(G.div, {
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
              children: l(q, {
                icon: po,
                size: "xs"
              })
            }, "sort-arrow-secondary")]
          })
        })]
      })]
    })
  }), y = im(e);
  return g(tm, {
    className: C("group", "bg-f1-background", p && (f || u) && "relative bg-f1-background z-10 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:w-full before:bg-f1-border-secondary before:content-['']", p && "sticky", a && "after:hidden", d),
    tabIndex: o ? 0 : void 0,
    style: {
      width: y,
      maxWidth: y,
      minWidth: y,
      left: b,
      right: v
    },
    role: a ? "presentation" : void 0,
    "aria-sort": r ? n === "asc" ? "ascending" : n === "desc" ? "descending" : "none" : void 0,
    children: [l("div", {
      className: "absolute inset-x-0 top-0 z-[1] h-px w-full bg-f1-border-secondary"
    }), l(Ae, {
      children: (h && f || m && u) && l(G.div, {
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
function um({ children: t, sticky: e = !1 }) {
  return l(Qh, {
    className: C(e && "sticky top-0 z-20"),
    children: t
  });
}
const qt = J(({ children: t, selected: e, className: n, sticky: r }, i) => l(em, {
  ref: i,
  className: C(e && "bg-f1-background-selected hover:bg-f1-background-selected", n, "relative before:pointer-events-none before:absolute before:inset-0 before:z-10 before:content-['']", "[&:has(.table-cell-action-button:focus)]:before:rounded-sm [&:has(.table-cell-action-button:focus)]:before:ring-1 [&:has(.table-cell-action-button:focus)]:before:ring-inset [&:has(.table-cell-action-button:focus)]:before:ring-f1-special-ring", "[&:has(a:focus)]:before:rounded-sm [&:has(a:focus)]:before:ring-1 [&:has(a:focus)]:before:ring-inset [&:has(a:focus)]:before:ring-f1-special-ring", r && "hover:bg-f1-background-hover! sticky top-10 z-50 bg-f1-background"),
  children: t
}));
qt.displayName = "TableRow";
function OI({ children: t, loading: e = !1 }) {
  const [n, r] = F(!1), [i, s] = F(!1), o = W(null);
  return V(() => {
    const a = o.current;
    if (!a) return;
    const c = () => {
      r(a.scrollLeft > 0), s(a.scrollWidth - a.scrollLeft - a.clientWidth > 0);
    };
    return c(), a.addEventListener("scroll", c), () => {
      a.removeEventListener("scroll", c);
    };
  }, []), l(ql.Provider, {
    value: {
      isScrolled: n,
      setIsScrolled: r,
      isScrolledRight: i,
      setIsScrolledRight: s
    },
    children: g("div", {
      ref: o,
      className: "relative h-full w-full overflow-auto",
      children: [l(Gl, {
        className: C(e && "select-none opacity-50 transition-opacity"),
        "aria-live": e ? "polite" : void 0,
        "aria-busy": e ? "true" : void 0,
        children: t
      }), l(Ae, {
        children: e && l(G.div, {
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
  return l(ql.Provider, {
    value: {
      isScrolled: !1,
      setIsScrolled: () => {
      },
      isScrolledRight: !1,
      setIsScrolledRight: () => {
      }
    },
    children: g(Gl, {
      className: "cursor-progress",
      role: "presentation",
      "aria-hidden": "true",
      children: [l(um, {
        children: l(qt, {
          children: Array.from({
            length: t
          }).map((e, n) => l(hi, {
            children: l(M, {
              className: "h-4 w-[80px]"
            })
          }, `skeleton-header-${n}`))
        })
      }), l(rm, {
        children: Array.from({
          length: 5
        }).map((e, n) => l(qt, {
          children: Array.from({
            length: t
          }).map((r, i) => l(wt, {
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
  return l(Zh, {
    className: C("bg-f1-background-default sticky bottom-0 z-10 shadow-[0_-1px_0_0_var(--f1-border-secondary)]"),
    children: t
  });
}
const fm = (t, e, n) => {
  const r = n ? 52 : 0;
  return {
    getStickyPosition: ne(
      (s) => s < t && e.length > 1 ? {
        left: e.slice(0, Math.max(0, s)).reduce(
          (o, a) => o + (a.width ?? 0),
          r
        )
      } : void 0,
      [t, e, r]
    ),
    checkColumnWidth: r
  };
}, MI = (t, e) => {
  const [n, r] = F(null), [i, s] = F(null), [o, a] = F(0), c = W(null), d = W(null), f = ne(
    (h) => {
      c.current = h, h && r(h);
    },
    [r]
  ), u = ne(
    (h) => {
      d.current = h, h && s(h);
    },
    [s]
  );
  return Wn(() => {
    const h = n?.previousElementSibling;
    if (!n || !h) {
      a(0);
      return;
    }
    const m = !i || i.getBoundingClientRect().top === 0, p = () => m ? (n.getBoundingClientRect().top ?? 0) - Gt / 2 : (i?.getBoundingClientRect().top ?? 0) - Gt / 2, b = () => m ? n.getBoundingClientRect().bottom - Gt : (i?.getBoundingClientRect().bottom ?? 0) - Gt, v = () => n.getBoundingClientRect().top ?? 0 - Gt, x = () => h.getBoundingClientRect().height, w = () => e && t === "basic" ? lm : 0, y = () => {
      const T = (t === "basic" ? p() : b()) - v() + x() + w();
      a(T);
    };
    y();
    const E = new MutationObserver(() => {
      y();
    }), S = n.parentElement;
    S && E.observe(S, {
      childList: !0,
      subtree: !0,
      attributes: !0
    });
    const k = new ResizeObserver(() => {
      y();
    });
    return k.observe(n), i && k.observe(i), () => {
      E.disconnect(), k.disconnect();
    };
  }, [n, i, t]), { setFirstChildRef: f, setLastChildRef: u, calculatedHeight: o };
}, hm = zt(void 0), PI = ({ children: t }) => {
  const [e, n] = F({}), r = ne((s, o) => {
    n((a) => ({
      ...a,
      [s]: o
    }));
  }, []), i = ne(() => {
    n({});
  }, []);
  return l(hm.Provider, {
    value: {
      fetchedData: e,
      updateFetchedData: r,
      clearFetchedData: i
    },
    children: t
  });
}, zI = () => {
  const t = $t(hm);
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
    updateFetchedData: s,
    clearFetchedData: o
  } = zI(), [a, c] = F(
    Xc(i?.[t])
  ), [d, f] = F(i?.[t]?.paginationInfo), [u, h] = F(!1), [m, p] = F(
    Zc(i?.[t])
  ), b = W(n.currentFilters), v = W(n.currentSortings), x = W(n.currentNavigationFilters);
  V(() => {
    const S = b.current !== n.currentFilters, k = v.current !== n.currentSortings, I = x.current !== n.currentNavigationFilters;
    (S || k || I) && (c([]), f(void 0), p("basic"), o(), r(), b.current = n.currentFilters, v.current = n.currentSortings, x.current = n.currentNavigationFilters);
  }, [
    n.currentFilters,
    n.currentSortings,
    n.currentNavigationFilters,
    o,
    r
  ]);
  const w = W(), y = ne(
    (S) => {
      const k = Xc(S), I = [...a, ...k];
      c(I);
      const T = {
        records: I,
        type: S?.type,
        paginationInfo: S?.paginationInfo
      };
      return s(t, T), p(Zc(S)), f(S?.paginationInfo), k;
    },
    [a, t, s]
  ), E = ne(() => {
    if (a.length > 0 && !d?.hasMore) return a;
    w.current?.unsubscribe(), h(!0);
    const S = n.fetchChildren?.({
      item: e,
      filters: n.currentFilters,
      pagination: d,
      sortings: n.currentSortings
    });
    if (!S)
      return h(!1), [];
    if (!("then" in S) && !("subscribe" in S)) {
      const I = y(S);
      return h(!1), I;
    }
    const k = "subscribe" in S ? S : Tb(S);
    return w.current = k.subscribe({
      next: (I) => {
        I.loading ? h(!0) : I.error ? h(!1) : I.data && (y(I.data), h(!1));
      },
      error: (I) => {
        h(!1), console.error("Error loading children:", I);
      },
      complete: () => {
        w.current = void 0;
      }
    }), [];
  }, [a, e, n, d, y]);
  return V(() => () => {
    w.current?.unsubscribe();
  }, []), {
    children: a,
    loadChildren: E,
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
  }, s = t.nestedRowProps?.depth ?? 0, o = t.columns.map((a) => ({
    ...a,
    render: () => ""
  }));
  return l(zn, {
    ...t,
    columns: o,
    ref: i,
    noBorder: s > 0,
    nestedRowProps: {
      ...t.nestedRowProps,
      depth: s + 1,
      hasLoadedChildren: !1,
      onLoadMoreChildren: t.onLoadMoreChildren
    }
  });
}, HI = J(BI), VI = 5, WI = ({ rowRef: t, rowIndex: e, source: n, item: r, columns: i, frozenColumnsLeft: s, nestedRowProps: o, groupIndex: a, onCheckedChange: c, selectedItems: d, checkColumnWidth: f, tableWithChildren: u, shouldHideBorder: h }, m) => {
  const p = W(null), b = t?.current;
  Wn(() => {
    if (p.current && b) {
      const w = t.current.getBoundingClientRect().height;
      p.current.style.height = `${w}px`;
    }
  }, [b, t]);
  const v = o?.depth ?? 0, x = (w) => {
    p.current = w, typeof m == "function" && m(w);
  };
  return l(zn, {
    source: {
      ...n,
      itemsWithChildren: () => !1
    },
    item: r,
    index: e,
    frozenColumnsLeft: s,
    columns: i,
    noBorder: h ?? !1,
    groupIndex: a,
    onCheckedChange: c,
    selectedItems: d,
    checkColumnWidth: f,
    loading: !0,
    ref: x,
    nestedRowProps: {
      ...o,
      depth: o?.parentHasChildren ? v + 1 : v,
      hasLoadedChildren: !1,
      expanded: !1
    },
    tableWithChildren: u
  }, `row-loading-${e}`);
}, UI = J(WI), GI = ({ rowRef: t, ...e }, n) => {
  const r = e.source.childrenCount?.({
    item: e.item,
    pagination: e.paginationInfo
  }), i = e.paginationInfo ? e.paginationInfo.total ? Math.min(e.paginationInfo.perPage, e.paginationInfo.total - e.paginationInfo.currentPage * e.paginationInfo.perPage) : e.paginationInfo.perPage : void 0, s = r ?? i ?? VI;
  return l(ee, {
    children: Array.from({
      length: s
    }).map((o, a) => {
      const d = !(a === s - 1) || e.shouldHideBorder;
      return l(UI, {
        ref: n,
        rowRef: t,
        rowIndex: a,
        ...e,
        shouldHideBorder: d
      }, `row-loading-${a}`);
    })
  });
}, qI = J(GI), KI = (t, e) => {
  const [n, r] = F(!1), i = W(null), s = `${t.nestedRowProps?.depth ?? 0}-${"id" in t.item ? t.item.id : t.index}`, { children: o, loadChildren: a, isLoading: c, childrenType: d, paginationInfo: f } = jI({
    rowId: s,
    item: t.item,
    source: t.source,
    onClearFetchedData: () => r(!1)
  }), u = n && c, h = n, m = n && f?.hasMore, { calculatedHeight: p, setFirstChildRef: b, setLastChildRef: v } = MI(d, !!m), x = ne((I) => {
    i.current = I, typeof e == "function" && e(I);
  }, [e]), w = () => {
    const I = !n;
    r(I), I && !o.length && a();
  }, y = {
    depth: t.nestedRowProps?.depth ?? 0,
    expanded: n,
    onExpand: w,
    nestedVariant: d,
    connectorHeight: p
  }, E = (t.nestedRowProps?.depth ?? 0) === 0, S = (t.nestedRowProps?.isLastChild || E) ?? !1, k = n || !S;
  return g(ee, {
    children: [l(zn, {
      ...t,
      disableHover: !t.source.itemOnClick,
      noBorder: k,
      ref: x,
      nestedRowProps: {
        ...y,
        parentHasChildren: t.nestedRowProps?.parentHasChildren ?? o.length > 0,
        hasLoadedChildren: !1,
        isLastChild: S
      },
      tableWithChildren: t.tableWithChildren
    }), h && o.map((I, T) => {
      const D = I, N = t.source.itemsWithChildren?.(D), _ = T === 0, A = T === o.length - 1, L = (t.nestedRowProps?.depth ?? 0) + 1, O = () => {
        if (_)
          return ($) => {
            b($);
          };
        if (A && !m)
          return ($) => {
            v($);
          };
      }, R = A && S && !m;
      if (N)
        return Ea(mm, {
          ...t,
          key: `nested-row-${t.groupIndex}-${I.id}-${t.index}-${T}`,
          index: T,
          item: D,
          tableWithChildren: t.tableWithChildren,
          ref: O(),
          nestedRowProps: {
            ...t.nestedRowProps,
            parentHasChildren: !0,
            depth: L,
            isLastChild: R
          }
        });
      {
        const $ = !R;
        return Ea(zn, {
          ...t,
          key: `row-${t.groupIndex}-${t.index}-${T}`,
          index: T,
          item: D,
          noBorder: $,
          ref: O(),
          nestedRowProps: {
            ...t.nestedRowProps,
            depth: (t.nestedRowProps?.depth ?? 0) + 1,
            parentHasChildren: !0,
            nestedVariant: d,
            onExpand: w,
            isLastChild: R
          },
          tableWithChildren: t.tableWithChildren
        });
      }
    }), u && l(qI, {
      ...t,
      rowRef: i,
      nestedRowProps: {
        ...y,
        parentHasChildren: o.length > 0
      },
      paginationInfo: f,
      ref: v,
      shouldHideBorder: !S
    }), m && !c && l(HI, {
      ...t,
      disableHover: !0,
      rowRef: i,
      onLoadMoreChildren: a,
      ref: v,
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
}), ed = J(KI), mm = J(JI), YI = ({ source: t, item: e, onCheckedChange: n, selectedItems: r, columns: i, frozenColumnsLeft: s, checkColumnWidth: o, index: a, groupIndex: c, noBorder: d = !1, loading: f = !1, nestedRowProps: u, tableWithChildren: h, disableHover: m = !1 }, p) => {
  const b = t.itemUrl ? t.itemUrl(e) : void 0, v = t.itemOnClick ? t.itemOnClick(e) : void 0, x = t.selectable ? t.selectable(e) : void 0, w = !!t.itemsWithChildren?.(e), y = X(), E = (O, R) => Kh(O, R, "table", y), S = `table-row-${c}-${a}`, { getStickyPosition: k } = fm(s, i, !!t.selectable), { hasItemActions: I, primaryItemActions: T, dropdownItemActions: D, mobileDropdownItemActions: N, handleDropDownOpenChange: _, dropDownOpen: A } = qh({
    source: t,
    item: e
  }), L = u?.hasLoadedChildren === void 0 || u?.hasLoadedChildren;
  return w && L ? l(mm, {
    source: t,
    item: e,
    onCheckedChange: n,
    selectedItems: r,
    columns: i,
    frozenColumnsLeft: s,
    checkColumnWidth: o,
    index: a,
    groupIndex: c,
    nestedRowProps: u,
    tableWithChildren: h
  }, S) : g(qt, {
    ref: p,
    className: C("group transition-colors hover:bg-f1-background-hover", "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:w-full after:bg-f1-border-secondary after:content-['']", d && "after:bg-white-100", m && "hover:bg-transparent"),
    children: [t.selectable && l(wt, {
      width: o,
      sticky: {
        left: 0
      },
      loading: f,
      children: x !== void 0 && l("div", {
        className: "pointer-events-auto flex items-center justify-end",
        children: l(yl, {
          checked: r.has(x),
          onCheckedChange: n,
          title: `Select ${t.selectable(e)}`,
          hideLabel: !0
        })
      })
    }), i.map((O, R) => l(wt, {
      firstCell: R === 0,
      href: b,
      onClick: v,
      width: O.width,
      sticky: k(R),
      loading: f,
      nestedRowProps: {
        ...u,
        rowWithChildren: w,
        tableWithChildren: h
      },
      children: l("div", {
        className: C(O.align === "right" ? "justify-end" : "", "flex"),
        children: E(e, O)
      })
    }, `table-cell-${c}-${a}-${R}`)), I && !f && !u?.onLoadMoreChildren && g(ee, {
      children: [l("td", {
        className: "sticky right-0 top-0 z-10 hidden md:table-cell",
        children: l(Gh, {
          dropDownOpen: A,
          children: l(Uh, {
            primaryItemActions: T,
            dropdownItemActions: D,
            handleDropDownOpenChange: _
          })
        })
      }), l(wt, {
        width: 68,
        sticky: {
          right: 0
        },
        href: b,
        className: "table-cell md:hidden",
        loading: f,
        children: l(Wh, {
          items: N,
          onOpenChange: _
        })
      }, `table-cell-${c}-${a}-actions`)]
    })]
  }, S);
}, zn = J(YI), QI = ({ columns: t, source: e, frozenColumns: n = 0, onSelectItems: r, onLoadData: i, onLoadError: s, allowColumnHiding: o, allowColumnReordering: a }) => {
  const c = X(), [d] = F(() => G.create(zn)), { settings: f } = ps(), { columns: u } = Yh(t, n, f.visualization?.table, a, o), { data: h, paginationInfo: m, setPage: p, isInitialLoading: b, isLoadingMore: v, loadMore: x, summaries: w } = hs(e, {
    onError: (B) => {
      s(B);
    }
  }), { currentSortings: y, setCurrentSortings: E, isLoading: S } = e, { loadingIndicatorRef: k } = Ul(m, S, v, x);
  V(() => {
    i({
      totalItems: m?.total || h.records.length,
      filters: e.currentFilters,
      search: e.currentSearch,
      isInitialLoading: b,
      data: h.records
    });
  }, [m?.total, h.records]);
  const I = z(() => n, [n]), T = (B, P) => "id" in B && B.id !== void 0 && B.id !== null ? `id:${String(B.id)}` : `index:${String(P)}`, { selectedItems: D, allSelectedStatus: N, groupAllSelectedStatus: _, handleSelectItemChange: A, handleSelectAll: L, handleSelectGroupChange: O } = Xi({
    data: h,
    paginationInfo: m,
    source: e,
    onSelectItems: r,
    selectionMode: "multi",
    selectedState: e.defaultSelectedItems
  }), R = z(() => !w || !e.summaries ? null : {
    data: w,
    sticky: !0,
    label: e.summaries?.label
  }, [w, e.summaries]), $ = (B, P, Y) => {
    if (!(!B || !P))
      return Y === null ? "none" : Y.field === B ? Y.order : "none";
  }, U = (B) => {
    E(() => !y || y.field !== B ? {
      field: B,
      order: "asc"
    } : y.order === "asc" ? {
      field: B,
      order: "desc"
    } : null);
  }, Z = e.grouping?.collapsible, ae = e.grouping?.defaultOpenGroups, { openGroups: K, setGroupOpen: H } = kl(h?.type === "grouped" ? h.groups : [], ae), le = u.length + (e.itemActions ? 1 : 0) + (e.selectable ? 1 : 0), { getStickyPosition: te, checkColumnWidth: re } = fm(I, u, !!e.selectable), ue = h?.records.some((B) => e.itemsWithChildren?.(B));
  return b ? l(Qc.Skeleton, {
    columns: le
  }) : (e.sortings || u.forEach((B) => {
    B.sorting && console.warn("Sorting is defined on a column but no sortings are provided in the data source");
  }), g("div", {
    className: "flex h-full min-h-0 flex-col gap-4",
    children: [g(Qc, {
      loading: S,
      children: [l(um, {
        sticky: !0,
        children: g(qt, {
          children: [e.selectable && l(hi, {
            width: re,
            sticky: {
              left: 0
            },
            align: "right",
            children: l("div", {
              className: "flex w-full items-center justify-end",
              children: l(ki, {
                checked: N.selectedCount > 0 || N.checked,
                indeterminate: N.indeterminate || N.selectedCount > 0 && !N.checked,
                onCheckedChange: L,
                title: c.actions.selectAll,
                hideLabel: !0,
                disabled: h?.records.length === 0
              })
            })
          }), u.map(({ sorting: B, label: P, ...Y }, ie) => l(hi, {
            sortState: $(B, e.sortings, y),
            width: Y.width,
            align: Y.align,
            sticky: te(ie),
            ...Y,
            hidden: !1,
            onSortClick: B ? () => {
              B && U(B);
            } : void 0,
            children: P
          }, `table-head-${ie}`)), e.itemActions && g(ee, {
            children: [l("th", {}), l(hi, {
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
      }), g(rm, {
        children: [h?.type === "grouped" && h.groups.map((B, P) => {
          const Y = B.itemCount;
          return g(Rn, {
            children: [g(qt, {
              sticky: !0,
              children: [l(wt, {
                sticky: {
                  left: 0
                },
                colSpan: (I || 1) + (e.selectable ? 1 : 0),
                children: l(Cl, {
                  className: "px-3",
                  selectable: !!e.selectable,
                  select: oI(_[B.key]),
                  onSelectChange: (ie) => O(B, ie),
                  showOpenChange: Z,
                  label: B.label,
                  itemCount: Y,
                  open: K[B.key],
                  onOpenChange: (ie) => H(B.key, ie)
                })
              }), l(wt, {
                colSpan: u.length - (I || 1) + (e.selectable ? 1 : 0),
                children: " "
              })]
            }, `group-header-${B.key}`), l(Ae, {
              children: d && (!Z || K[B.key]) && B.records.map((ie, ce) => l(d, {
                variants: Cu(),
                initial: Z ? "hidden" : "visible",
                animate: "visible",
                exit: "hidden",
                custom: ce,
                layout: !0,
                source: e,
                item: ie,
                index: ce,
                groupIndex: P,
                onCheckedChange: (ve) => A(ie, ve),
                selectedItems: D,
                columns: u,
                frozenColumnsLeft: I,
                checkColumnWidth: re
              }, `row-${P}-${T(ie, ce)}`))
            }, `group-animate-${P}`)]
          }, `group-${B.key}`);
        }), h?.type === "flat" && h.records.map((B, P) => l(zn, {
          groupIndex: 0,
          source: e,
          item: B,
          index: P,
          onCheckedChange: (Y) => A(B, Y),
          selectedItems: D,
          columns: u,
          frozenColumnsLeft: I,
          checkColumnWidth: re,
          tableWithChildren: ue
        }, `row-${T(B, P)}`)), m?.type === "infinite-scroll" && v && Array.from({
          length: 5
        }).map((B, P) => l(qt, {
          children: Array.from({
            length: le
          }).map((Y, ie) => l(wt, {
            children: l(M, {
              className: "h-4 w-full"
            })
          }, `skeleton-cell-${P}-${ie}`))
        }, `skeleton-row-${P}`)), Ni(m) && m.hasMore && l("tr", {
          children: l("td", {
            colSpan: u.length + (e.selectable ? 1 : 0) + 1,
            ref: k,
            className: "h-10",
            "aria-hidden": "true"
          })
        })]
      }), R && l(FI, {
        children: g(qt, {
          className: C(R.sticky && "sticky bottom-0 z-10 bg-f1-background shadow-[0_-1px_0_0_var(--f1-border-secondary)] hover:bg-f1-background", "font-medium"),
          children: [e.selectable && l(wt, {
            width: re,
            sticky: {
              left: 0
            },
            children: R.label && l("div", {
              className: "font-medium text-f1-foreground-secondary",
              children: R.label
            })
          }), u.map((B, P) => l(wt, {
            firstCell: P === 0,
            width: B.width,
            sticky: te(P),
            children: P === 0 && !e.selectable && R.label ? l("div", {
              className: "font-medium text-f1-foreground-secondary",
              children: R.label
            }) : l("div", {
              className: C(B.align === "right" ? "justify-end" : "", "flex"),
              children: B.summary && e.summaries && e.summaries[B.summary]?.type === "sum" ? g("div", {
                className: "flex gap-1",
                children: [l("span", {
                  className: "text-f1-foreground-secondary",
                  children: c.collections.summaries.types.sum
                }), `${R.data[B.summary]}`]
              }) : "-"
            })
          }, `summary-${String(B.label)}`)), e.itemActions && g(ee, {
            children: [l("th", {
              className: "hidden md:table-cell"
            }), l(wt, {
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
    }), l(Wl, {
      paginationInfo: m,
      setPage: p,
      className: "pb-4"
    })]
  }));
}, Fr = {
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
    icon: Sa,
    settings: {
      default: {}
    },
    render: (t) => l(DS, {
      ...t
    })
  },
  kanban: {
    name: "Kanban",
    icon: Sa,
    settings: {
      default: {}
    },
    render: (t) => l(iI, {
      ...t
    })
  }
}, XI = ({ visualization: t, source: e, onSelectItems: n, onLoadData: r, onLoadError: i, tmpFullWidth: s }) => {
  if (t.type === "custom")
    return t.component({
      source: e,
      onLoadData: r,
      onLoadError: i,
      onSelectItems: n
    });
  const o = Fr[t.type];
  if (!o)
    throw new Error(`Visualization type ${t.type} not found`);
  return o.render({
    source: e,
    ...t.options,
    onSelectItems: n,
    onLoadData: r,
    onLoadError: i,
    tmpFullWidth: s
  });
}, Zr = "__no-sorting__", ZI = ({ currentSortings: t, sortings: e, onChange: n }) => {
  const r = X(), i = [{
    label: r.collections.sorting.noSorting,
    value: Zr
  }, ...Object.entries(e || {}).map(([c, d]) => ({
    label: d.label,
    value: c
  }))], [s, o] = F(t);
  V(() => {
    o(t || {
      field: Zr,
      order: "asc"
    });
  }, [JSON.stringify(t)]);
  const a = (c) => {
    !c || c.field === Zr ? n(null) : n(c);
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
          value: s?.field,
          onChange: (c) => {
            a({
              field: c,
              order: s?.order ?? "asc"
            });
          }
        })
      }), s?.field !== Zr && l("div", {
        children: l(j, {
          hideLabel: !0,
          label: r.collections.sorting.toggleDirection,
          variant: "outline",
          icon: s?.order === "asc" ? Db : _b,
          onClick: () => a({
            field: s?.field,
            order: s?.order === "asc" ? "desc" : "asc"
          })
        })
      })]
    })
  });
}, eA = ({ visualizations: t, currentVisualization: e, onVisualizationChange: n }) => {
  const r = X(), i = (o) => {
    n(o);
  }, s = (o) => o.type === "custom" ? {
    icon: o.icon,
    label: o.label
  } : {
    icon: Fr[o.type].icon,
    label: r.collections.visualizations[o.type]
  };
  return l("div", {
    className: "grid grid-cols-2 p-2",
    children: t.map((o, a) => {
      const { icon: c, label: d } = s(o);
      return g("button", {
        className: C("flex w-full flex-col items-center justify-center gap-1 rounded-sm p-2 font-medium text-f1-foreground-secondary transition-colors", e === a && "bg-f1-background-secondary text-f1-foreground", we()),
        onClick: () => i(a),
        children: [l(q, {
          icon: c
        }), d]
      }, o.type);
    })
  });
}, tA = (t) => {
  if (t === "custom")
    return null;
  const e = Fr[t];
  if (!e)
    throw new Error(`Visualization type ${t} not found`);
  return e;
}, pm = (t) => tA(t.type)?.settings.renderer ?? null, nA = (t) => {
  if (t.type === "custom")
    return !1;
  const e = pm(t);
  return e ? e(t.options) !== null : !1;
}, rA = ({ visualization: t }) => {
  if (t.type === "custom")
    return null;
  const e = pm(t);
  return e ? e(t.options) : null;
}, iA = ({ visualizations: t, currentVisualization: e, onVisualizationChange: n, grouping: r, currentGrouping: i, onGroupingChange: s, sortings: o, currentSortings: a, onSortingsChange: c }) => {
  const d = X(), f = r ? Object.keys(r.groupBy).length + (r.mandatory ? 1 : 0) : 0, [u, h] = F(!1), m = (T) => {
    h(!1), n(T);
  }, p = (T) => {
    s(T);
  }, b = t && t.length > 1, v = r && f > 0, x = o && Object.keys(o).length > 0, w = z(() => t[e], [e, t?.[e]]), y = z(() => l(rA, {
    visualization: w
  }, "visualization-settings"), [w]), E = z(() => nA(w), [w]), S = z(() => {
    const T = t[e]?.type;
    if (!T) return "-";
    const D = d.collections.visualizations[T] ?? "-";
    return d.collections.visualizations.settings.replace("{{visualizationName}}", D);
  }, [e]), k = ps(), I = () => {
    Object.values(Fr).forEach((T) => {
      T.settings.resetHandler?.(k);
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
      }), l(xl, {
        className: "flex w-[280px] flex-col gap-0 rounded-md border border-solid border-f1-border-secondary p-0",
        align: "end",
        sideOffset: 8,
        children: [b && l(eA, {
          visualizations: t,
          currentVisualization: e,
          onVisualizationChange: m
        }, "visualization"), v && !r?.hideSelector && !(r.mandatory && Object.entries(r.groupBy).length < 2) && l("div", {
          className: "p-3",
          children: l(Ob, {
            grouping: r,
            currentGrouping: i,
            onGroupingChange: p
          }, "grouping")
        }), x && l("div", {
          className: "p-3",
          children: l(ZI, {
            currentSortings: a,
            onChange: c,
            sortings: o
          }, "sorting")
        }), E && g("section", {
          className: "p-3 pb-0",
          children: [l("h3", {
            className: "mb-2 text-sm font-medium text-f1-foreground-secondary",
            children: S
          }), y]
        }, "visualization-settings"), l("section", {
          className: "border-0 border-t border-solid border-t-f1-border p-3",
          children: l(j, {
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
}, sA = ({ source: t, visualizations: e, onSelectItems: n, onBulkAction: r, onStateChange: i, emptyStates: s, fullHeight: o, storage: a, id: c, tmpFullWidth: d }) => {
  const { filters: f, currentFilters: u, setCurrentFilters: h, presets: m, presetsLoading: p, currentNavigationFilters: b, navigationFilters: v, setCurrentNavigationFilters: x, search: w, currentSearch: y, setCurrentSearch: E, isLoading: S, primaryActions: k, secondaryActions: I, totalItemSummary: T, currentGrouping: D, setCurrentGrouping: N, grouping: _, currentSortings: A, setCurrentSortings: L, sortings: O } = t, [R, $] = F(0), U = W(A), { emitSortingChange: Z } = Fb({
    defaultSorting: U.current
  });
  V(() => {
    Z(A);
  }, [Z, A]);
  const ae = z(() => oS(k), [k]), K = z(() => uS(dS(I)), [I]), H = z(() => Math.min(I && "expanded" in I && I.expanded || 0, lS), [I]), le = z(() => K[0]?.items.slice(0, H) || [], [K, H]), te = z(() => [{
    ...K[0],
    items: K[0]?.items.slice(H) || []
  }, ...K.slice(1)].filter((fe) => fe.items.length > 0), [K, H]), re = ae?.length > 0 || K?.length > 0, [ue, B] = F(void 0), P = iv(), [Y, ie] = F(void 0), ce = ne((fe) => {
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
  }, [Y, ce]), [be, De] = F(!1), [Se, Et] = F(0), rt = X(), it = z(() => T === !0 ? (fe) => fe !== void 0 ? `${fe} ${rt.collections.itemsCount}` : null : T || void 0, [T, rt]), bn = (fe, _e) => {
    n?.(fe, _e), De(!!fe.allSelected || fe.itemsStatus.some((tr) => tr.checked)), Et(fe.selectedCount), B(() => _e);
    const Ie = t.bulkActions ? t.bulkActions(fe) : void 0, xt = (tr) => {
      if ("type" in tr && tr.type === "separator")
        return {
          type: "separator"
        };
      const Ls = tr;
      return {
        ...Ls,
        onClick: () => {
          r?.(Ls.id, fe, _e), Ls.keepSelection || _e();
        }
      };
    };
    Ie && ("primary" in Ie ? ie({
      primary: (Ie?.primary || []).map(xt),
      secondary: (Ie?.secondary || []).map(xt)
    }) : "warningMessage" in Ie && ie({
      warningMessage: Ie.warningMessage
    }));
  }, [Zn, Es] = F(void 0), [jr, Br] = F(!0), vn = z(() => [w?.enabled, e.length > 1].some(Boolean), [w, e]), { emptyState: xn, setEmptyStateType: er } = SS(s, {
    retry: () => {
      er(!1), h({
        ...u
      });
    },
    clearFilters: () => {
      er(!1), h({}), E(void 0);
    }
  }), Ap = (fe, _e, Ie) => fe === 0 ? Object.keys(_e).length > 0 || Ie ? "no-results" : "no-data" : !1, Tp = ({ totalItems: fe, filters: _e, isInitialLoading: Ie, search: xt }) => {
    Ie || (Br(Ie), Es(fe), er(Ap(fe, _e, xt)));
  }, Ep = (fe) => {
    er("error", fe.cause instanceof Error ? fe.cause.message : fe.message);
  }, Dp = zo({
    value: !!p,
    delay: 100
  });
  V(() => {
    er(!1);
  }, [u, y, b, t.dataAdapter]);
  const pa = z(() => it !== void 0, [it]), ga = it === void 0 ? null : Zn !== void 0 ? it(Zn) : null, { settings: Ds, setSettings: _p } = ps(), { storageReady: Lp } = NS(c, typeof a == "object" ? a?.features ?? ["*"] : ["*"], {
    settings: {
      value: Ds,
      setValue: _p
    },
    sortings: {
      value: A,
      setValue: L
    },
    grouping: {
      value: D,
      setValue: N
    },
    navigationFilters: {
      value: b,
      setValue: x
    },
    visualization: {
      value: R,
      setValue: $
    },
    search: {
      value: y,
      setValue: E
    },
    filters: {
      value: u,
      setValue: h
    }
  }, a === !1), ba = zo({
    value: jr && Lp,
    delay: 100
  });
  Nu(() => {
    i?.({
      filters: u,
      sortings: A,
      visualization: R,
      grouping: D,
      search: y,
      navigationFilters: b,
      settings: Ds
    });
  }, [u, y, b, A, R, D, Ds]);
  const _s = z(() => {
    const fe = _ ? Object.keys(_.groupBy).length + (_.mandatory ? 1 : 0) : 0, _e = Object.values(e).find((xt) => xt.type === "table"), Ie = !!_e && (!!_e.options?.allowColumnHiding || !!_e.options?.allowColumnReordering);
    return e && e.length > 1 || fe > 0 && !_?.hideSelector || O && Object.keys(O).length > 0 || Ie;
  }, [e, _, O]), Hr = z(() => vn || re || _s || w && w.enabled, [vn, re, _s, w]), yn = z(() => pa ? f ? "top" : "bottom" : !1, [f, pa]), wn = z(() => v ? Hr ? "top" : "bottom" : !1, [v, Hr]), Op = z(() => yn === "top" || wn === "top", [yn, wn]), Rp = z(() => f || Hr || wn === "bottom" || yn === "bottom", [f, Hr, wn, yn]);
  return g("div", {
    className: C("flex flex-col gap-4", P === "standard" && "-mx-[23px]", o && "h-full flex-1"),
    style: {
      width: P === "standard" && !d ? "calc(100% + 46px)" : "100%"
    },
    children: [Op && g("div", {
      className: "border-f1-border-primary flex gap-4 px-4",
      children: [yn === "top" && l(Wc, {
        isReady: !ba,
        totalItemSummaryResult: ga
      }), l("div", {
        className: "flex flex-1 flex-shrink justify-end",
        children: wn === "top" && l(Hc, {
          navigationFilters: v,
          currentNavigationFilters: b,
          onChangeNavigationFilters: x
        })
      })]
    }), Rp && g("div", {
      className: C("flex flex-row gap-4 px-4", o && "max-h-full", d && "px-0"),
      children: [yn === "bottom" && l(Wc, {
        isReady: !ba,
        totalItemSummaryResult: ga
      }), l("div", {
        className: "flex-1",
        children: g(Mb, {
          filters: f,
          value: u,
          presets: m,
          presetsLoading: Dp,
          onChange: (fe) => h(fe),
          children: [S && l(G.div, {
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
          }), w && l(yS, {
            onChange: E,
            value: y
          }), _s && l(iA, {
            visualizations: e,
            currentVisualization: R,
            onVisualizationChange: $,
            grouping: _,
            currentGrouping: D,
            onGroupingChange: N,
            sortings: O,
            currentSortings: A,
            onSortingsChange: L
          }), re && g(ee, {
            children: [vn && l("div", {
              className: "mx-1 h-4 w-px bg-f1-background-secondary-hover"
            }), l(pS, {
              primaryActions: ae,
              secondaryActions: le,
              otherActions: te
            })]
          }), wn === "bottom" && l(Hc, {
            navigationFilters: v,
            currentNavigationFilters: b,
            onChangeNavigationFilters: x
          })]
        })
      })]
    }), l("div", {
      className: C(xn && "hidden", o && "h-full min-h-0 flex-1"),
      children: l(XI, {
        visualization: e[R],
        source: t,
        onSelectItems: bn,
        onLoadData: Tp,
        onLoadError: Ep,
        tmpFullWidth: d
      })
    }), xn ? l("div", {
      className: "flex flex-1 flex-col items-center justify-center",
      children: l(Oh, {
        emoji: xn.emoji,
        title: xn.title,
        description: xn.description,
        actions: xn.actions
      })
    }) : l(ee, {
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
}, oA = (t) => l(fI, {
  children: l(sA, {
    ...t
  })
}), V_ = oe("OneDataCollection", oA), W_ = (t, e = []) => {
  const n = X(), {
    navigationFilters: r,
    summaries: i,
    currentNavigationFilters: s
  } = t, o = Pb(
    {
      ...t,
      dataAdapter: t.dataAdapter
    },
    e
  ), [a, c] = F(() => r ? Object.fromEntries(
    Object.entries(r).map(([f, u]) => {
      const h = Fh[u.type];
      return [
        f,
        h.valueConverter ? h.valueConverter(u.defaultValue, u, n) : u.defaultValue
      ];
    })
  ) : {});
  Nu(() => {
    s && c(s);
  }, [s]);
  const d = z(() => i, e);
  return {
    ...o,
    summaries: d,
    navigationFilters: r,
    currentNavigationFilters: a,
    setCurrentNavigationFilters: c
  };
}, gm = J(({ header: t, actions: e, open: n, onClose: r }, i) => {
  const [s, o] = F(!1), a = ne(() => {
    o(!0);
    const c = setTimeout(() => {
      r?.(), o(!1);
    }, 200);
    return () => clearTimeout(c);
  }, [r]);
  return l(zb, {
    open: n && !s,
    onOpenChange: (c) => !c && a?.(),
    children: g($b, {
      ref: i,
      className: "bottom-3 top-auto max-w-[400px]",
      children: [g(sv, {
        className: "flex flex-col gap-4 px-4 py-5",
        children: [l(Lr, {
          type: t.type,
          size: "lg"
        }), g("div", {
          className: "flex flex-col gap-0.5",
          children: [l(jb, {
            className: "text-xl sm:text-lg",
            children: t.title
          }), l(ov, {
            className: "text-lg sm:text-base",
            children: t.description
          })]
        })]
      }), e && g(lv, {
        className: "px-4 pb-4 pt-2",
        children: [g("div", {
          className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3 [&>div]:w-full",
          children: [l(j, {
            variant: "outline",
            ...e.secondary
          }), l(j, {
            ...e.primary,
            variant: e.primary.variant || "default"
          })]
        }), g("div", {
          className: "flex flex-col-reverse gap-2 sm:hidden [&>div]:w-full",
          children: [l(j, {
            variant: "outline",
            ...e.secondary,
            size: "lg"
          }), l(j, {
            ...e.primary,
            variant: e.primary.variant || "default",
            size: "lg"
          })]
        })]
      })]
    })
  });
});
gm.displayName = "Dialog";
const lA = oe("Dialog", gm), U_ = pt({
  name: "Dialog",
  type: "info"
}, lA), at = () => /* @__PURE__ */ new Map(), Bo = (t) => {
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
}, cn = () => /* @__PURE__ */ new Set(), Qs = (t) => t[t.length - 1], dA = (t, e) => {
  for (let n = 0; n < e.length; n++)
    t.push(e[n]);
}, dn = Array.from, uA = (t, e) => {
  for (let n = 0; n < t.length; n++)
    if (e(t[n], n, t))
      return !0;
  return !1;
}, Ho = Array.isArray;
class bm {
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
      cn
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
    return dn((this._observers.get(e) || at()).values()).forEach((r) => r(...n));
  }
  destroy() {
    this._observers = at();
  }
}
const Pt = Math.floor, mi = Math.abs, $n = (t, e) => t < e ? t : e, Jt = (t, e) => t > e ? t : e, vm = (t) => t !== 0 ? t < 0 : 1 / t < 0, td = 1, nd = 2, Xs = 4, Zs = 8, br = 32, Rt = 64, $e = 128, fA = 1 << 29, bs = 31, Vo = 63, rn = 127, hA = 2147483647, xm = Number.MAX_SAFE_INTEGER, mA = Number.isInteger || ((t) => typeof t == "number" && isFinite(t) && Pt(t) === t), pA = String.fromCharCode, gA = (t) => t.toLowerCase(), bA = /^\s*/g, vA = (t) => t.replace(bA, ""), xA = /([A-Z])/g, rd = (t, e) => vA(t.replace(xA, (n) => `${e}${gA(n)}`)), yA = (t) => {
  const e = unescape(encodeURIComponent(t)), n = e.length, r = new Uint8Array(n);
  for (let i = 0; i < n; i++)
    r[i] = /** @type {number} */
    e.codePointAt(i);
  return r;
}, vr = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), wA = (t) => vr.encode(t), kA = vr ? wA : yA;
let sr = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
sr && sr.decode(new Uint8Array()).length === 1 && (sr = null);
class Mr {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const Pr = () => new Mr(), CA = (t) => {
  const e = Pr();
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
  n - t.cpos < e && (t.bufs.push(new Uint8Array(t.cbuf.buffer, 0, t.cpos)), t.cbuf = new Uint8Array(Jt(n, e) * 2), t.cpos = 0);
}, Te = (t, e) => {
  const n = t.cbuf.length;
  t.cpos === n && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(n * 2), t.cpos = 0), t.cbuf[t.cpos++] = e;
}, Wo = Te, de = (t, e) => {
  for (; e > rn; )
    Te(t, $e | rn & e), e = Pt(e / 128);
  Te(t, rn & e);
}, Jl = (t, e) => {
  const n = vm(e);
  for (n && (e = -e), Te(t, (e > Vo ? $e : 0) | (n ? Rt : 0) | Vo & e), e = Pt(e / 64); e > 0; )
    Te(t, (e > rn ? $e : 0) | rn & e), e = Pt(e / 128);
}, Uo = new Uint8Array(3e4), IA = Uo.length / 3, AA = (t, e) => {
  if (e.length < IA) {
    const n = vr.encodeInto(e, Uo).written || 0;
    de(t, n);
    for (let r = 0; r < n; r++)
      Te(t, Uo[r]);
  } else
    Ge(t, kA(e));
}, TA = (t, e) => {
  const n = unescape(encodeURIComponent(e)), r = n.length;
  de(t, r);
  for (let i = 0; i < r; i++)
    Te(
      t,
      /** @type {number} */
      n.codePointAt(i)
    );
}, Tn = vr && /** @type {any} */
vr.encodeInto ? AA : TA, vs = (t, e) => {
  const n = t.cbuf.length, r = t.cpos, i = $n(n - r, e.length), s = e.length - i;
  t.cbuf.set(e.subarray(0, i), r), t.cpos += i, s > 0 && (t.bufs.push(t.cbuf), t.cbuf = new Uint8Array(Jt(n * 2, s)), t.cbuf.set(e.subarray(i)), t.cpos = s);
}, Ge = (t, e) => {
  de(t, e.byteLength), vs(t, e);
}, Yl = (t, e) => {
  SA(t, e);
  const n = new DataView(t.cbuf.buffer, t.cpos, e);
  return t.cpos += e, n;
}, EA = (t, e) => Yl(t, 4).setFloat32(0, e, !1), DA = (t, e) => Yl(t, 8).setFloat64(0, e, !1), _A = (t, e) => (
  /** @type {any} */
  Yl(t, 8).setBigInt64(0, e, !1)
), id = new DataView(new ArrayBuffer(4)), LA = (t) => (id.setFloat32(0, t), id.getFloat32(0) === t), jn = (t, e) => {
  switch (typeof e) {
    case "string":
      Te(t, 119), Tn(t, e);
      break;
    case "number":
      mA(e) && mi(e) <= hA ? (Te(t, 125), Jl(t, e)) : LA(e) ? (Te(t, 124), EA(t, e)) : (Te(t, 123), DA(t, e));
      break;
    case "bigint":
      Te(t, 122), _A(t, e);
      break;
    case "object":
      if (e === null)
        Te(t, 126);
      else if (Ho(e)) {
        Te(t, 117), de(t, e.length);
        for (let n = 0; n < e.length; n++)
          jn(t, e[n]);
      } else if (e instanceof Uint8Array)
        Te(t, 116), Ge(t, e);
      else {
        Te(t, 118);
        const n = Object.keys(e);
        de(t, n.length);
        for (let r = 0; r < n.length; r++) {
          const i = n[r];
          Tn(t, i), jn(t, e[i]);
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
class sd extends Mr {
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
const od = (t) => {
  t.count > 0 && (Jl(t.encoder, t.count === 1 ? t.s : -t.s), t.count > 1 && de(t.encoder, t.count - 2));
};
class pi {
  constructor() {
    this.encoder = new Mr(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(e) {
    this.s === e ? this.count++ : (od(this), this.count = 1, this.s = e);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return od(this), lt(this.encoder);
  }
}
const ld = (t) => {
  if (t.count > 0) {
    const e = t.diff * 2 + (t.count === 1 ? 0 : 1);
    Jl(t.encoder, e), t.count > 1 && de(t.encoder, t.count - 2);
  }
};
class eo {
  constructor() {
    this.encoder = new Mr(), this.s = 0, this.count = 0, this.diff = 0;
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
    this.sarr = [], this.s = "", this.lensE = new pi();
  }
  /**
   * @param {string} string
   */
  write(e) {
    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length);
  }
  toUint8Array() {
    const e = new Mr();
    return this.sarr.push(this.s), this.s = "", Tn(e, this.sarr.join("")), vs(e, this.lensE.toUint8Array()), lt(e);
  }
}
const Yt = (t) => new Error(t), ct = () => {
  throw Yt("Method unimplemented");
}, We = () => {
  throw Yt("Unexpected case");
}, ym = Yt("Unexpected end of array"), wm = Yt("Integer out of Range");
class xs {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(e) {
    this.arr = e, this.pos = 0;
  }
}
const Ql = (t) => new xs(t), RA = (t) => t.pos !== t.arr.length, FA = (t, e) => {
  const n = new Uint8Array(t.arr.buffer, t.pos + t.arr.byteOffset, e);
  return t.pos += e, n;
}, Ye = (t) => FA(t, ge(t)), xr = (t) => t.arr[t.pos++], ge = (t) => {
  let e = 0, n = 1;
  const r = t.arr.length;
  for (; t.pos < r; ) {
    const i = t.arr[t.pos++];
    if (e = e + (i & rn) * n, n *= 128, i < $e)
      return e;
    if (e > xm)
      throw wm;
  }
  throw ym;
}, Xl = (t) => {
  let e = t.arr[t.pos++], n = e & Vo, r = 64;
  const i = (e & Rt) > 0 ? -1 : 1;
  if ((e & $e) === 0)
    return i * n;
  const s = t.arr.length;
  for (; t.pos < s; ) {
    if (e = t.arr[t.pos++], n = n + (e & rn) * r, r *= 128, e < $e)
      return i * n;
    if (n > xm)
      throw wm;
  }
  throw ym;
}, MA = (t) => {
  let e = ge(t);
  if (e === 0)
    return "";
  {
    let n = String.fromCodePoint(xr(t));
    if (--e < 100)
      for (; e--; )
        n += String.fromCodePoint(xr(t));
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
  sr.decode(Ye(t))
), Go = sr ? PA : MA, Zl = (t, e) => {
  const n = new DataView(t.arr.buffer, t.arr.byteOffset + t.pos, e);
  return t.pos += e, n;
}, zA = (t) => Zl(t, 4).getFloat32(0, !1), $A = (t) => Zl(t, 8).getFloat64(0, !1), jA = (t) => (
  /** @type {any} */
  Zl(t, 8).getBigInt64(0, !1)
), BA = [
  (t) => {
  },
  // CASE 127: undefined
  (t) => null,
  // CASE 126: null
  Xl,
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
  Go,
  // CASE 119: string
  (t) => {
    const e = ge(t), n = {};
    for (let r = 0; r < e; r++) {
      const i = Go(t);
      n[i] = Fi(t);
    }
    return n;
  },
  (t) => {
    const e = ge(t), n = [];
    for (let r = 0; r < e; r++)
      n.push(Fi(t));
    return n;
  },
  Ye
  // CASE 116: Uint8Array
], Fi = (t) => BA[127 - xr(t)](t);
class ad extends xs {
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
class gi extends xs {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(e) {
    super(e), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = Xl(this);
      const e = vm(this.s);
      this.count = 1, e && (this.s = -this.s, this.count = ge(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class to extends xs {
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
      const e = Xl(this), n = e & 1;
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
    this.decoder = new gi(e), this.str = Go(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const e = this.spos + this.decoder.read(), n = this.str.slice(this.spos, e);
    return this.spos = e, n;
  }
}
const VA = crypto.getRandomValues.bind(crypto), WA = Math.random, km = () => VA(new Uint32Array(1))[0], UA = (t) => t[Pt(WA() * t.length)], GA = "10000000-1000-4000-8000" + -1e11, qA = () => GA.replace(
  /[018]/g,
  /** @param {number} c */
  (t) => (t ^ km() & 15 >> t / 4).toString(16)
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
let Cm = new JA(), YA = !0;
try {
  typeof localStorage < "u" && localStorage && (Cm = localStorage, YA = !1);
} catch {
}
const QA = Cm, XA = Object.assign, Nm = Object.keys, ZA = (t, e) => {
  for (const n in t)
    e(t[n], n);
}, ud = (t) => Nm(t).length, e2 = (t) => {
  for (const e in t)
    return !1;
  return !0;
}, Sm = (t, e) => {
  for (const n in t)
    if (!e(t[n], n))
      return !1;
  return !0;
}, t2 = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n2 = (t, e) => t === e || ud(t) === ud(e) && Sm(t, (n, r) => (n !== void 0 || t2(e, r)) && e[r] === n), r2 = Object.freeze, Im = (t) => {
  for (const e in t) {
    const n = t[e];
    (typeof n == "object" || typeof n == "function") && Im(t[e]);
  }
  return r2(t);
}, ea = (t, e, n = 0) => {
  try {
    for (; n < t.length; n++)
      t[n](...e);
  } finally {
    n < t.length && ea(t, e, n + 1);
  }
}, i2 = (t, e) => e.includes(t), Bn = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", Am = typeof window < "u" && typeof document < "u" && !Bn;
let yt;
const s2 = () => {
  if (yt === void 0)
    if (Bn) {
      yt = at();
      const t = process.argv;
      let e = null;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        r[0] === "-" ? (e !== null && yt.set(e, ""), e = r) : e !== null && (yt.set(e, r), e = null);
      }
      e !== null && yt.set(e, "");
    } else typeof location == "object" ? (yt = at(), (location.search || "?").slice(1).split("&").forEach((t) => {
      if (t.length !== 0) {
        const [e, n] = t.split("=");
        yt.set(`--${rd(e, "-")}`, n), yt.set(`-${rd(e, "-")}`, n);
      }
    })) : yt = at();
  return yt;
}, qo = (t) => s2().has(t), Mi = (t) => dd(Bn ? process.env[t.toUpperCase().replaceAll("-", "_")] : QA.getItem(t)), Tm = (t) => qo("--" + t) || Mi(t) !== null;
Tm("production");
const o2 = Bn && i2(process.env.FORCE_COLOR, ["true", "1", "2"]), l2 = o2 || !qo("--no-colors") && // @todo deprecate --no-colors
!Tm("no-color") && (!Bn || process.stdout.isTTY) && (!Bn || qo("--color") || Mi("COLORTERM") !== null || (Mi("TERM") || "").includes("color")), a2 = (t) => {
  let e = "";
  for (let n = 0; n < t.byteLength; n++)
    e += pA(t[n]);
  return btoa(e);
}, c2 = (t) => Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("base64"), d2 = Am ? a2 : c2, u2 = (t) => CA((e) => jn(e, t));
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
}, g2 = p2(clearTimeout), Em = (t, e) => new g2(setTimeout(e, t)), Ht = Symbol, Dm = Ht(), _m = Ht(), b2 = Ht(), v2 = Ht(), x2 = Ht(), Lm = Ht(), y2 = Ht(), ta = Ht(), w2 = Ht(), k2 = (t) => {
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
  [Dm]: Dt("font-weight", "bold"),
  [_m]: Dt("font-weight", "normal"),
  [b2]: Dt("color", "blue"),
  [x2]: Dt("color", "green"),
  [v2]: Dt("color", "grey"),
  [Lm]: Dt("color", "red"),
  [y2]: Dt("color", "purple"),
  [ta]: Dt("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [w2]: Dt("color", "black")
}, N2 = (t) => {
  t.length === 1 && t[0]?.constructor === Function && (t = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  t[0]());
  const e = [], n = [], r = at();
  let i = [], s = 0;
  for (; s < t.length; s++) {
    const o = t[s], a = C2[o];
    if (a !== void 0)
      r.set(a.left, a.right);
    else {
      if (o === void 0)
        break;
      if (o.constructor === String || o.constructor === Number) {
        const c = m2(r);
        s > 0 || c.length > 0 ? (e.push("%c" + o), n.push(c)) : e.push(o);
      } else
        break;
    }
  }
  for (s > 0 && (i = n, i.unshift(e.join(""))); s < t.length; s++) {
    const o = t[s];
    o instanceof Symbol || i.push(o);
  }
  return i;
}, Om = l2 ? N2 : k2, S2 = (...t) => {
  console.log(...Om(t)), Fm.forEach((e) => e.print(t));
}, Rm = (...t) => {
  console.warn(...Om(t)), t.unshift(ta), Fm.forEach((e) => e.print(t));
}, Fm = cn(), Mm = (t) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: t
}), I2 = (t, e) => Mm(() => {
  let n;
  do
    n = t.next();
  while (!n.done && !e(n.value));
  return n;
}), no = (t, e) => Mm(() => {
  const { done: n, value: r } = t.next();
  return { done: n, value: n ? void 0 : e(r) };
});
class na {
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
const Qt = (t, e, n) => e.clients.forEach((r, i) => {
  const s = (
    /** @type {Array<GC|Item>} */
    t.doc.store.clients.get(i)
  );
  if (s != null) {
    const o = s[s.length - 1], a = o.id.clock + o.length;
    for (let c = 0, d = r[c]; c < r.length && d.clock < a; d = r[++c])
      Wm(t, s, d.clock, d.len, n);
  }
}), A2 = (t, e) => {
  let n = 0, r = t.length - 1;
  for (; n <= r; ) {
    const i = Pt((n + r) / 2), s = t[i], o = s.clock;
    if (o <= e) {
      if (e < o + s.len)
        return i;
      n = i + 1;
    } else
      r = i - 1;
  }
  return null;
}, Qn = (t, e) => {
  const n = t.clients.get(e.client);
  return n !== void 0 && A2(n, e.clock) !== null;
}, ra = (t) => {
  t.clients.forEach((e) => {
    e.sort((i, s) => i.clock - s.clock);
    let n, r;
    for (n = 1, r = 1; n < e.length; n++) {
      const i = e[r - 1], s = e[n];
      i.clock + i.len >= s.clock ? i.len = Jt(i.len, s.clock + s.len - i.clock) : (r < n && (e[r] = s), r++);
    }
    e.length = r;
  });
}, Ko = (t) => {
  const e = new Yn();
  for (let n = 0; n < t.length; n++)
    t[n].clients.forEach((r, i) => {
      if (!e.clients.has(i)) {
        const s = r.slice();
        for (let o = n + 1; o < t.length; o++)
          dA(s, t[o].clients.get(i) || []);
        e.clients.set(i, s);
      }
    });
  return ra(e), e;
}, yr = (t, e, n, r) => {
  Bt(t.clients, e, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new na(n, r));
}, Pm = () => new Yn(), T2 = (t) => {
  const e = Pm();
  return t.clients.forEach((n, r) => {
    const i = [];
    for (let s = 0; s < n.length; s++) {
      const o = n[s];
      if (o.deleted) {
        const a = o.id.clock;
        let c = o.length;
        if (s + 1 < n.length)
          for (let d = n[s + 1]; s + 1 < n.length && d.deleted; d = n[++s + 1])
            c += d.length;
        i.push(new na(a, c));
      }
    }
    i.length > 0 && e.clients.set(r, i);
  }), e;
}, ia = (t, e) => {
  de(t.restEncoder, e.clients.size), dn(e.clients.entries()).sort((n, r) => r[0] - n[0]).forEach(([n, r]) => {
    t.resetDsCurVal(), de(t.restEncoder, n);
    const i = r.length;
    de(t.restEncoder, i);
    for (let s = 0; s < i; s++) {
      const o = r[s];
      t.writeDsClock(o.clock), t.writeDsLen(o.len);
    }
  });
}, E2 = (t) => {
  const e = new Yn(), n = ge(t.restDecoder);
  for (let r = 0; r < n; r++) {
    t.resetDsCurVal();
    const i = ge(t.restDecoder), s = ge(t.restDecoder);
    if (s > 0) {
      const o = Bt(e.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let a = 0; a < s; a++)
        o.push(new na(t.readDsClock(), t.readDsLen()));
    }
  }
  return e;
}, fd = (t, e, n) => {
  const r = new Yn(), i = ge(t.restDecoder);
  for (let s = 0; s < i; s++) {
    t.resetDsCurVal();
    const o = ge(t.restDecoder), a = ge(t.restDecoder), c = n.clients.get(o) || [], d = ke(n, o);
    for (let f = 0; f < a; f++) {
      const u = t.readDsClock(), h = u + t.readDsLen();
      if (u < d) {
        d < h && yr(r, o, d, h - d);
        let m = ft(c, u), p = c[m];
        for (!p.deleted && p.id.clock < u && (c.splice(m + 1, 0, Vi(e, p, u - p.id.clock)), m++); m < c.length && (p = c[m++], p.id.clock < h); )
          p.deleted || (h < p.id.clock + p.length && c.splice(m, 0, Vi(e, p, h - p.id.clock)), p.delete(e));
      } else
        yr(r, o, u, h - u);
    }
  }
  if (r.clients.size > 0) {
    const s = new ys();
    return de(s.restEncoder, 0), ia(s, r), s.toUint8Array();
  }
  return null;
}, zm = km;
class pn extends bm {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: e = qA(), collectionid: n = null, gc: r = !0, gcFilter: i = () => !0, meta: s = null, autoLoad: o = !1, shouldLoad: a = !0 } = {}) {
    super(), this.gc = r, this.gcFilter = i, this.clientID = zm(), this.guid = e, this.collectionid = n, this.share = /* @__PURE__ */ new Map(), this.store = new Hm(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = a, this.autoLoad = o, this.meta = s, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = cd((d) => {
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
    return new Set(dn(this.subdocs).map((e) => e.guid));
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
      const s = new n();
      return s._integrate(this, null), s;
    }), i = r.constructor;
    if (n !== Ee && i !== n)
      if (i === Ee) {
        const s = new n();
        s._map = r._map, r._map.forEach(
          /** @param {Item?} n */
          (o) => {
            for (; o !== null; o = o.left)
              o.parent = s;
          }
        ), s._start = r._start;
        for (let o = s._start; o !== null; o = o.right)
          o.parent = s;
        return s._length = r._length, this.share.set(e, s), s._integrate(this, null), /** @type {InstanceType<Type>} */
        s;
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
      this.get(e, _n)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(e = "") {
    return this.get(e, Xt);
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
    return this.get(e, un);
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
    this.isDestroyed = !0, dn(this.subdocs).forEach((n) => n.destroy());
    const e = this._item;
    if (e !== null) {
      this._item = null;
      const n = (
        /** @type {ContentDoc} */
        e.content
      );
      n.doc = new pn({ guid: this.guid, ...n.opts, shouldLoad: !1 }), n.doc._item = e, he(
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
class Pi extends D2 {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(e) {
    super(e), this.keys = [], ge(e), this.keyClockDecoder = new to(Ye(e)), this.clientDecoder = new gi(Ye(e)), this.leftClockDecoder = new to(Ye(e)), this.rightClockDecoder = new to(Ye(e)), this.infoDecoder = new ad(Ye(e), xr), this.stringDecoder = new HA(Ye(e)), this.parentInfoDecoder = new ad(Ye(e), xr), this.typeRefDecoder = new gi(Ye(e)), this.lenDecoder = new gi(Ye(e));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new En(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new En(this.clientDecoder.read(), this.rightClockDecoder.read());
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
    return Fi(this.restDecoder);
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
    return Fi(this.restDecoder);
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
    this.restEncoder = Pr();
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
    Wo(this.restEncoder, e);
  }
  /**
   * @param {string} s
   */
  writeString(e) {
    Tn(this.restEncoder, e);
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
    Ge(this.restEncoder, e);
  }
  /**
   * @param {any} embed
   */
  writeJSON(e) {
    Tn(this.restEncoder, JSON.stringify(e));
  }
  /**
   * @param {string} key
   */
  writeKey(e) {
    Tn(this.restEncoder, e);
  }
}
class O2 {
  constructor() {
    this.restEncoder = Pr(), this.dsCurrVal = 0;
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
    e === 0 && We(), de(this.restEncoder, e - 1), this.dsCurrVal += e;
  }
}
class ys extends O2 {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new eo(), this.clientEncoder = new pi(), this.leftClockEncoder = new eo(), this.rightClockEncoder = new eo(), this.infoEncoder = new sd(Wo), this.stringEncoder = new OA(), this.parentInfoEncoder = new sd(Wo), this.typeRefEncoder = new pi(), this.lenEncoder = new pi();
  }
  toUint8Array() {
    const e = Pr();
    return de(e, 0), Ge(e, this.keyClockEncoder.toUint8Array()), Ge(e, this.clientEncoder.toUint8Array()), Ge(e, this.leftClockEncoder.toUint8Array()), Ge(e, this.rightClockEncoder.toUint8Array()), Ge(e, lt(this.infoEncoder)), Ge(e, this.stringEncoder.toUint8Array()), Ge(e, lt(this.parentInfoEncoder)), Ge(e, this.typeRefEncoder.toUint8Array()), Ge(e, this.lenEncoder.toUint8Array()), vs(e, lt(this.restEncoder)), lt(e);
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
    Ge(this.restEncoder, e);
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
  r = Jt(r, e[0].id.clock);
  const i = ft(e, r);
  de(t.restEncoder, e.length - i), t.writeClient(n), de(t.restEncoder, r);
  const s = e[i];
  s.write(t, r - s.id.clock);
  for (let o = i + 1; o < e.length; o++)
    e[o].write(t, 0);
}, $m = (t, e, n) => {
  const r = /* @__PURE__ */ new Map();
  n.forEach((i, s) => {
    ke(e, s) > i && r.set(s, i);
  }), ws(e).forEach((i, s) => {
    n.has(s) || r.set(s, 0);
  }), de(t.restEncoder, r.size), dn(r.entries()).sort((i, s) => s[0] - i[0]).forEach(([i, s]) => {
    R2(
      t,
      /** @type {Array<GC|Item>} */
      e.clients.get(i),
      i,
      s
    );
  });
}, F2 = (t, e) => {
  const n = at(), r = ge(t.restDecoder);
  for (let i = 0; i < r; i++) {
    const s = ge(t.restDecoder), o = new Array(s), a = t.readClient();
    let c = ge(t.restDecoder);
    n.set(a, { i: 0, refs: o });
    for (let d = 0; d < s; d++) {
      const f = t.readInfo();
      switch (bs & f) {
        case 0: {
          const u = t.readLen();
          o[d] = new Xe(se(a, c), u), c += u;
          break;
        }
        case 10: {
          const u = ge(t.restDecoder);
          o[d] = new st(se(a, c), u), c += u;
          break;
        }
        default: {
          const u = (f & (Rt | $e)) === 0, h = new me(
            se(a, c),
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
            fp(t, f)
            // item content
          );
          o[d] = h, c += h.length;
        }
      }
    }
  }
  return n;
}, M2 = (t, e, n) => {
  const r = [];
  let i = dn(n.keys()).sort((m, p) => m - p);
  if (i.length === 0)
    return null;
  const s = () => {
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
  let o = s();
  if (o === null)
    return null;
  const a = new Hm(), c = /* @__PURE__ */ new Map(), d = (m, p) => {
    const b = c.get(m);
    (b == null || b > p) && c.set(m, p);
  };
  let f = (
    /** @type {any} */
    o.refs[
      /** @type {any} */
      o.i++
    ]
  );
  const u = /* @__PURE__ */ new Map(), h = () => {
    for (const m of r) {
      const p = m.id.client, b = n.get(p);
      b ? (b.i--, a.clients.set(p, b.refs.slice(b.i)), n.delete(p), b.i = 0, b.refs = []) : a.clients.set(p, [m]), i = i.filter((v) => v !== p);
    }
    r.length = 0;
  };
  for (; ; ) {
    if (f.constructor !== st) {
      const p = Bt(u, f.id.client, () => ke(e, f.id.client)) - f.id.clock;
      if (p < 0)
        r.push(f), d(f.id.client, f.id.clock - 1), h();
      else {
        const b = f.getMissing(t, e);
        if (b !== null) {
          r.push(f);
          const v = n.get(
            /** @type {number} */
            b
          ) || { refs: [], i: 0 };
          if (v.refs.length === v.i)
            d(
              /** @type {number} */
              b,
              ke(e, b)
            ), h();
          else {
            f = v.refs[v.i++];
            continue;
          }
        } else (p === 0 || p < f.length) && (f.integrate(t, p), u.set(f.id.client, f.id.clock + f.length));
      }
    }
    if (r.length > 0)
      f = /** @type {GC|Item} */
      r.pop();
    else if (o !== null && o.i < o.refs.length)
      f = /** @type {GC|Item} */
      o.refs[o.i++];
    else {
      if (o = s(), o === null)
        break;
      f = /** @type {GC|Item} */
      o.refs[o.i++];
    }
  }
  if (a.clients.size > 0) {
    const m = new ys();
    return $m(m, a, /* @__PURE__ */ new Map()), de(m.restEncoder, 0), { missing: c, update: m.toUint8Array() };
  }
  return null;
}, P2 = (t, e) => $m(t, e.doc.store, e.beforeState), z2 = (t, e, n, r = new Pi(t)) => he(e, (i) => {
  i.local = !1;
  let s = !1;
  const o = i.doc, a = o.store, c = F2(r, o), d = M2(i, a, c), f = a.pendingStructs;
  if (f) {
    for (const [h, m] of f.missing)
      if (m < ke(a, h)) {
        s = !0;
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
    const h = new Pi(Ql(a.pendingDs));
    ge(h.restDecoder);
    const m = fd(h, i, a);
    u && m ? a.pendingDs = wd([u, m]) : a.pendingDs = u || m;
  } else
    a.pendingDs = u;
  if (s) {
    const h = (
      /** @type {{update: Uint8Array}} */
      a.pendingStructs.update
    );
    a.pendingStructs = null, Jo(i.doc, h);
  }
}, n, !1), Jo = (t, e, n, r = Pi) => {
  const i = Ql(e);
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
}, jm = (t, e, n) => ea(t.l, [e, n]);
class En {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(e, n) {
    this.client = e, this.clock = n;
  }
}
const ei = (t, e) => t === e || t !== null && e !== null && t.client === e.client && t.clock === e.clock, se = (t, e) => new En(t, e), wr = (t) => {
  for (const [e, n] of t.doc.share.entries())
    if (n === t)
      return e;
  throw We();
}, kr = (t, e) => {
  for (; e !== null; ) {
    if (e.parent === t)
      return !0;
    e = /** @type {AbstractType<any>} */
    e.parent._item;
  }
  return !1;
};
class zi {
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
const B2 = (t, e, n = 0) => new j2(t, e, n), ti = (t, e, n) => {
  let r = null, i = null;
  return t._item === null ? i = wr(t) : r = se(t._item.id.client, t._item.id.clock), new zi(r, i, e, n);
}, ro = (t, e, n = 0) => {
  let r = t._start;
  if (n < 0) {
    if (e === 0)
      return ti(t, null, n);
    e--;
  }
  for (; r !== null; ) {
    if (!r.deleted && r.countable) {
      if (r.length > e)
        return ti(t, se(r.id.client, r.id.clock + e), n);
      e -= r.length;
    }
    if (r.right === null && n < 0)
      return ti(t, r.lastId, n);
    r = r.right;
  }
  return ti(t, null, n);
}, H2 = (t, e) => {
  const n = Dn(t, e), r = e.clock - n.id.clock;
  return {
    item: n,
    diff: r
  };
}, V2 = (t, e, n = !0) => {
  const r = e.store, i = t.item, s = t.type, o = t.tname, a = t.assoc;
  let c = null, d = 0;
  if (i !== null) {
    if (ke(r, i.client) <= i.clock)
      return null;
    const f = n ? Zo(r, i) : H2(r, i), u = f.item;
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
    if (o !== null)
      c = e.get(o);
    else if (s !== null) {
      if (ke(r, s.client) <= s.clock)
        return null;
      const { item: f } = n ? Zo(r, s) : { item: Dn(r, s) };
      if (f instanceof me && f.content instanceof vt)
        c = f.content.type;
      else
        return null;
    } else
      throw We();
    a >= 0 ? d = c._length : d = 0;
  }
  return B2(c, d, t.assoc);
};
class sa {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(e, n) {
    this.ds = e, this.sv = n;
  }
}
const Bm = (t, e) => new sa(t, e), io = (t) => Bm(T2(t.store), ws(t.store)), tn = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !Qn(e.ds, t.id), Yo = (t, e) => {
  const n = Bt(t.meta, Yo, cn), r = t.doc.store;
  n.has(e) || (e.sv.forEach((i, s) => {
    i < ke(r, s) && je(t, se(s, i));
  }), Qt(t, e.ds, (i) => {
  }), n.add(e));
};
class Hm {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const ws = (t) => {
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
}, Vm = (t, e) => {
  let n = t.clients.get(e.id.client);
  if (n === void 0)
    n = [], t.clients.set(e.id.client, n);
  else {
    const r = n[n.length - 1];
    if (r.id.clock + r.length !== e.id.clock)
      throw We();
  }
  n.push(e);
}, ft = (t, e) => {
  let n = 0, r = t.length - 1, i = t[r], s = i.id.clock;
  if (s === e)
    return r;
  let o = Pt(e / (s + i.length - 1) * r);
  for (; n <= r; ) {
    if (i = t[o], s = i.id.clock, s <= e) {
      if (e < s + i.length)
        return o;
      n = o + 1;
    } else
      r = o - 1;
    o = Pt((n + r) / 2);
  }
  throw We();
}, W2 = (t, e) => {
  const n = t.clients.get(e.client);
  return n[ft(n, e.clock)];
}, Dn = (
  /** @type {function(StructStore,ID):Item} */
  W2
), Qo = (t, e, n) => {
  const r = ft(e, n), i = e[r];
  return i.id.clock < n && i instanceof me ? (e.splice(r + 1, 0, Vi(t, i, n - i.id.clock)), r + 1) : r;
}, je = (t, e) => {
  const n = (
    /** @type {Array<Item>} */
    t.doc.store.clients.get(e.client)
  );
  return n[Qo(t, n, e.clock)];
}, gd = (t, e, n) => {
  const r = e.clients.get(n.client), i = ft(r, n.clock), s = r[i];
  return n.clock !== s.id.clock + s.length - 1 && s.constructor !== Xe && r.splice(i + 1, 0, Vi(t, s, n.clock - s.id.clock + 1)), s;
}, U2 = (t, e, n) => {
  const r = (
    /** @type {Array<GC|Item>} */
    t.clients.get(e.id.client)
  );
  r[ft(r, e.id.clock)] = n;
}, Wm = (t, e, n, r, i) => {
  if (r === 0)
    return;
  const s = n + r;
  let o = Qo(t, e, n), a;
  do
    a = e[o++], s < a.id.clock + a.length && Qo(t, e, s), i(a);
  while (o < e.length && e[o].id.clock < s);
};
class G2 {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(e, n, r) {
    this.doc = e, this.deleteSet = new Yn(), this.beforeState = ws(e.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = n, this.meta = /* @__PURE__ */ new Map(), this.local = r, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const bd = (t, e) => e.deleteSet.clients.size === 0 && !cA(e.afterState, (n, r) => e.beforeState.get(r) !== n) ? !1 : (ra(e.deleteSet), P2(t, e), ia(t, e.deleteSet), !0), vd = (t, e, n) => {
  const r = e._item;
  (r === null || r.id.clock < (t.beforeState.get(r.id.client) || 0) && !r.deleted) && Bt(t.changed, e, cn).add(n);
}, bi = (t, e) => {
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
  const s = e - i;
  return s && t.splice(e + 1 - s, s), s;
}, q2 = (t, e, n) => {
  for (const [r, i] of t.clients.entries()) {
    const s = (
      /** @type {Array<GC|Item>} */
      e.clients.get(r)
    );
    for (let o = i.length - 1; o >= 0; o--) {
      const a = i[o], c = a.clock + a.len;
      for (let d = ft(s, a.clock), f = s[d]; d < s.length && f.id.clock < c; f = s[++d]) {
        const u = s[d];
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
    for (let s = n.length - 1; s >= 0; s--) {
      const o = n[s], a = $n(i.length - 1, 1 + ft(i, o.clock + o.len - 1));
      for (let c = a, d = i[c]; c > 0 && d.id.clock >= o.clock; d = i[c])
        c -= 1 + bi(i, c);
    }
  });
}, Um = (t, e) => {
  if (e < t.length) {
    const n = t[e], r = n.doc, i = r.store, s = n.deleteSet, o = n._mergeStructs;
    try {
      ra(s), n.afterState = ws(n.doc.store), r.emit("beforeObserverCalls", [n, r]);
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
          }), c.sort((f, u) => f.path.length - u.path.length), jm(d._dEH, c, n));
        });
      }), a.push(() => r.emit("afterTransaction", [n, r])), ea(a, []), n._needFormattingCleanup && mT(n);
    } finally {
      r.gc && q2(s, i, r.gcFilter), K2(s, i), n.afterState.forEach((f, u) => {
        const h = n.beforeState.get(u) || 0;
        if (h !== f) {
          const m = (
            /** @type {Array<GC|Item>} */
            i.clients.get(u)
          ), p = Jt(ft(m, h), 1);
          for (let b = m.length - 1; b >= p; )
            b -= 1 + bi(m, b);
        }
      });
      for (let f = o.length - 1; f >= 0; f--) {
        const { client: u, clock: h } = o[f].id, m = (
          /** @type {Array<GC|Item>} */
          i.clients.get(u)
        ), p = ft(m, h);
        p + 1 < m.length && bi(m, p + 1) > 1 || p > 0 && bi(m, p);
      }
      if (!n.local && n.afterState.get(r.clientID) !== n.beforeState.get(r.clientID) && (S2(ta, Dm, "[yjs] ", _m, Lm, "Changed the client-id because another client seems to be using it."), r.clientID = zm()), r.emit("afterTransactionCleanup", [n, r]), r._observers.has("update")) {
        const f = new L2();
        bd(f, n) && r.emit("update", [f.toUint8Array(), n.origin, r, n]);
      }
      if (r._observers.has("updateV2")) {
        const f = new ys();
        bd(f, n) && r.emit("updateV2", [f.toUint8Array(), n.origin, r, n]);
      }
      const { subdocsAdded: a, subdocsLoaded: c, subdocsRemoved: d } = n;
      (a.size > 0 || d.size > 0 || c.size > 0) && (a.forEach((f) => {
        f.clientID = r.clientID, f.collectionid == null && (f.collectionid = r.collectionid), r.subdocs.add(f);
      }), d.forEach((f) => r.subdocs.delete(f)), r.emit("subdocs", [{ loaded: c, added: a, removed: d }, r, n]), d.forEach((f) => f.destroy())), t.length <= e + 1 ? (r._transactionCleanups = [], r.emit("afterAllTransactions", [r, t])) : Um(t, e + 1);
    }
  }
}, he = (t, e, n = null, r = !0) => {
  const i = t._transactionCleanups;
  let s = !1, o = null;
  t._transaction === null && (s = !0, t._transaction = new G2(t, n, r), i.push(t._transaction), i.length === 1 && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
  try {
    o = e(t._transaction);
  } finally {
    if (s) {
      const a = t._transaction === i[0];
      t._transaction = null, a && Um(i, 0);
    }
  }
  return o;
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
const xd = (t, e, n) => {
  Qt(t, n.deletions, (r) => {
    r instanceof me && e.scope.some((i) => i === t.doc || kr(
      /** @type {AbstractType<any>} */
      i,
      r
    )) && da(r, !1);
  });
}, yd = (t, e, n) => {
  let r = null;
  const i = t.doc, s = t.scope;
  he(i, (a) => {
    for (; e.length > 0 && t.currStackItem === null; ) {
      const c = i.store, d = (
        /** @type {StackItem} */
        e.pop()
      ), f = /* @__PURE__ */ new Set(), u = [];
      let h = !1;
      Qt(a, d.insertions, (m) => {
        if (m instanceof me) {
          if (m.redone !== null) {
            let { item: p, diff: b } = Zo(c, m.id);
            b > 0 && (p = je(a, se(p.id.client, p.id.clock + b))), m = p;
          }
          !m.deleted && s.some((p) => p === a.doc || kr(
            /** @type {AbstractType<any>} */
            p,
            /** @type {Item} */
            m
          )) && u.push(m);
        }
      }), Qt(a, d.deletions, (m) => {
        m instanceof me && s.some((p) => p === a.doc || kr(
          /** @type {AbstractType<any>} */
          p,
          m
        )) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Qn(d.insertions, m.id) && f.add(m);
      }), f.forEach((m) => {
        h = up(a, m, f, d.insertions, t.ignoreRemoteMapChanges, t) !== null || h;
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
  const o = t.currStackItem;
  if (o != null) {
    const a = r.changedParentTypes;
    t.emit("stack-item-popped", [{ stackItem: o, type: n, changedParentTypes: a, origin: t }, t]), t.currStackItem = null;
  }
  return o;
};
class Gm extends bm {
  /**
   * @param {Doc|AbstractType<any>|Array<AbstractType<any>>} typeScope Limits the scope of the UndoManager. If this is set to a ydoc instance, all changes on that ydoc will be undone. If set to a specific type, only changes on that type or its children will be undone. Also accepts an array of types.
   * @param {UndoManagerOptions} options
   */
  constructor(e, {
    captureTimeout: n = 500,
    captureTransaction: r = (c) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: s = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: a = (
      /** @type {Doc} */
      Ho(e) ? e[0].doc : e instanceof pn ? e : e.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = a, this.addToScope(e), this.deleteFilter = i, s.add(this), this.trackedOrigins = s, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = n, this.afterTransactionHandler = (c) => {
      if (!this.captureTransaction(c) || !this.scope.some((v) => c.changedParentTypes.has(
        /** @type {AbstractType<any>} */
        v
      ) || v === this.doc) || !this.trackedOrigins.has(c.origin) && (!c.origin || !this.trackedOrigins.has(c.origin.constructor)))
        return;
      const d = this.undoing, f = this.redoing, u = d ? this.redoStack : this.undoStack;
      d ? this.stopCapturing() : f || this.clear(!1, !0);
      const h = new Yn();
      c.afterState.forEach((v, x) => {
        const w = c.beforeState.get(x) || 0, y = v - w;
        y > 0 && yr(h, x, w, y);
      });
      const m = KA();
      let p = !1;
      if (this.lastChange > 0 && m - this.lastChange < this.captureTimeout && u.length > 0 && !d && !f) {
        const v = u[u.length - 1];
        v.deletions = Ko([v.deletions, c.deleteSet]), v.insertions = Ko([v.insertions, h]);
      } else
        u.push(new J2(c.deleteSet, h)), p = !0;
      !d && !f && (this.lastChange = m), Qt(
        c,
        c.deleteSet,
        /** @param {Item|GC} item */
        (v) => {
          v instanceof me && this.scope.some((x) => x === c.doc || kr(
            /** @type {AbstractType<any>} */
            x,
            v
          )) && da(v, !0);
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
    e = Ho(e) ? e : [e], e.forEach((r) => {
      n.has(r) || (n.add(r), (r instanceof Ee ? r.doc !== this.doc : r !== this.doc) && Rm("[yjs#509] Not same Y.Doc"), this.scope.push(r));
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
      e && (this.undoStack.forEach((i) => xd(r, this, i)), this.undoStack = []), n && (this.redoStack.forEach((i) => xd(r, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: e, redoStackCleared: n }]);
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
      e = yd(this, this.undoStack, "undo");
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
      e = yd(this, this.redoStack, "redo");
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
    let s = ge(t.restDecoder);
    for (let o = 0; o < r; o++) {
      const a = t.readInfo();
      if (a === 10) {
        const c = ge(t.restDecoder);
        yield new st(se(i, s), c), s += c;
      } else if ((bs & a) !== 0) {
        const c = (a & (Rt | $e)) === 0, d = new me(
          se(i, s),
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
          fp(t, a)
          // item content
        );
        yield d, s += d.length;
      } else {
        const c = t.readLen();
        yield new Xe(se(i, s), c), s += c;
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
    while (this.filterSkips && this.curr !== null && this.curr.constructor === st);
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
    return new Xe(se(n, r + e), t.length - e);
  } else if (t.constructor === st) {
    const { client: n, clock: r } = t.id;
    return new st(se(n, r + e), t.length - e);
  } else {
    const n = (
      /** @type {Item} */
      t
    ), { client: r, clock: i } = n.id;
    return new me(
      se(r, i + e),
      null,
      se(r, i + e - 1),
      null,
      n.rightOrigin,
      n.parent,
      n.parentSub,
      n.content.splice(e)
    );
  }
}, wd = (t, e = Pi, n = ys) => {
  if (t.length === 1)
    return t[0];
  const r = t.map((f) => new e(Ql(f)));
  let i = r.map((f) => new Q2(f, !0)), s = null;
  const o = new n(), a = new X2(o);
  for (; i = i.filter((h) => h.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (h, m) => {
      if (h.curr.id.client === m.curr.id.client) {
        const p = h.curr.id.clock - m.curr.id.clock;
        return p === 0 ? h.curr.constructor === m.curr.constructor ? 0 : h.curr.constructor === st ? 1 : -1 : p;
      } else
        return m.curr.id.client - h.curr.id.client;
    }
  ), i.length !== 0; ) {
    const f = i[0], u = (
      /** @type {Item | GC} */
      f.curr.id.client
    );
    if (s !== null) {
      let h = (
        /** @type {Item | GC | null} */
        f.curr
      ), m = !1;
      for (; h !== null && h.id.clock + h.length <= s.struct.id.clock + s.struct.length && h.id.client >= s.struct.id.client; )
        h = f.next(), m = !0;
      if (h === null || // current decoder is empty
      h.id.client !== u || // check whether there is another decoder that has has updates from `firstClient`
      m && h.id.clock > s.struct.id.clock + s.struct.length)
        continue;
      if (u !== s.struct.id.client)
        rr(a, s.struct, s.offset), s = { struct: h, offset: 0 }, f.next();
      else if (s.struct.id.clock + s.struct.length < h.id.clock)
        if (s.struct.constructor === st)
          s.struct.length = h.id.clock + h.length - s.struct.id.clock;
        else {
          rr(a, s.struct, s.offset);
          const p = h.id.clock - s.struct.id.clock - s.struct.length;
          s = { struct: new st(se(u, s.struct.id.clock + s.struct.length), p), offset: 0 };
        }
      else {
        const p = s.struct.id.clock + s.struct.length - h.id.clock;
        p > 0 && (s.struct.constructor === st ? s.struct.length -= p : h = Z2(h, p)), s.struct.mergeWith(
          /** @type {any} */
          h
        ) || (rr(a, s.struct, s.offset), s = { struct: h, offset: 0 }, f.next());
      }
    } else
      s = { struct: (
        /** @type {Item | GC} */
        f.curr
      ), offset: 0 }, f.next();
    for (let h = f.curr; h !== null && h.id.client === u && h.id.clock === s.struct.id.clock + s.struct.length && h.constructor !== st; h = f.next())
      rr(a, s.struct, s.offset), s = { struct: h, offset: 0 };
  }
  s !== null && (rr(a, s.struct, s.offset), s = null), eT(a);
  const c = r.map((f) => E2(f)), d = Ko(c);
  return ia(o, d), o.toUint8Array();
}, qm = (t) => {
  t.written > 0 && (t.clientStructs.push({ written: t.written, restEncoder: lt(t.encoder.restEncoder) }), t.encoder.restEncoder = Pr(), t.written = 0);
}, rr = (t, e, n) => {
  t.written > 0 && t.currClient !== e.id.client && qm(t), t.written === 0 && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), de(t.encoder.restEncoder, e.id.clock + n)), e.write(t.encoder, n), t.written++;
}, eT = (t) => {
  qm(t);
  const e = t.encoder.restEncoder;
  de(e, t.clientStructs.length);
  for (let n = 0; n < t.clientStructs.length; n++) {
    const r = t.clientStructs[n];
    de(e, r.written), vs(e, r.restEncoder);
  }
}, kd = "You must not compute changes after the event-handler fired.";
class ks {
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
        throw Yt(kd);
      const e = /* @__PURE__ */ new Map(), n = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(n).forEach((i) => {
        if (i !== null) {
          const s = (
            /** @type {Item} */
            n._map.get(i)
          );
          let o, a;
          if (this.adds(s)) {
            let c = s.left;
            for (; c !== null && this.adds(c); )
              c = c.left;
            if (this.deletes(s))
              if (c !== null && this.deletes(c))
                o = "delete", a = Qs(c.content.getContent());
              else
                return;
            else
              c !== null && this.deletes(c) ? (o = "update", a = Qs(c.content.getContent())) : (o = "add", a = void 0);
          } else if (this.deletes(s))
            o = "delete", a = Qs(
              /** @type {Item} */
              s.content.getContent()
            );
          else
            return;
          e.set(i, { action: o, oldValue: a });
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
        throw Yt(kd);
      const n = this.target, r = cn(), i = cn(), s = [];
      if (e = {
        added: r,
        deleted: i,
        delta: s,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(n).has(null)) {
        let a = null;
        const c = () => {
          a && s.push(a);
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
  Rm("Invalid access: Add Yjs type to a document before reading data.");
}, Km = 80;
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
}, Jm = (t, e, n) => {
  t.p.marker = !1, t.p = e, e.marker = !0, t.index = n, t.timestamp = oa++;
}, iT = (t, e, n) => {
  if (t.length >= Km) {
    const r = t.reduce((i, s) => i.timestamp < s.timestamp ? i : s);
    return Jm(r, e, n), r;
  } else {
    const r = new nT(e, n);
    return t.push(r), r;
  }
}, Cs = (t, e) => {
  if (t._start === null || e === 0 || t._searchMarker === null)
    return null;
  const n = t._searchMarker.length === 0 ? null : t._searchMarker.reduce((s, o) => mi(e - s.index) < mi(e - o.index) ? s : o);
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
  return n !== null && mi(n.index - i) < /** @type {YText|YArray<any>} */
  r.parent.length / Km ? (Jm(n, r, i), n) : iT(t._searchMarker, r, i);
}, Cr = (t, e, n) => {
  for (let r = t.length - 1; r >= 0; r--) {
    const i = t[r];
    if (n > 0) {
      let s = i.p;
      for (s.marker = !1; s && (s.deleted || !s.countable); )
        s = s.left, s && !s.deleted && s.countable && (i.index -= s.length);
      if (s === null || s.marker === !0) {
        t.splice(r, 1);
        continue;
      }
      i.p = s, s.marker = !0;
    }
    (e < i.index || n > 0 && e === i.index) && (i.index = Jt(e, i.index + n));
  }
}, Ns = (t, e, n) => {
  const r = t, i = e.changedParentTypes;
  for (; Bt(i, t, () => []).push(n), t._item !== null; )
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  jm(r._eH, n, e);
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
const Ym = (t, e, n) => {
  t.doc ?? Re(), e < 0 && (e = t._length + e), n < 0 && (n = t._length + n);
  let r = n - e;
  const i = [];
  let s = t._start;
  for (; s !== null && r > 0; ) {
    if (s.countable && !s.deleted) {
      const o = s.content.getContent();
      if (o.length <= e)
        e -= o.length;
      else {
        for (let a = e; a < o.length && r > 0; a++)
          i.push(o[a]), r--;
        e = 0;
      }
    }
    s = s.right;
  }
  return i;
}, Qm = (t) => {
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
}, Xm = (t, e) => {
  const n = [];
  let r = t._start;
  for (; r !== null; ) {
    if (r.countable && tn(r, e)) {
      const i = r.content.getContent();
      for (let s = 0; s < i.length; s++)
        n.push(i[s]);
    }
    r = r.right;
  }
  return n;
}, Nr = (t, e) => {
  let n = 0, r = t._start;
  for (t.doc ?? Re(); r !== null; ) {
    if (r.countable && !r.deleted) {
      const i = r.content.getContent();
      for (let s = 0; s < i.length; s++)
        e(i[s], n++, t);
    }
    r = r.right;
  }
}, Zm = (t, e) => {
  const n = [];
  return Nr(t, (r, i) => {
    n.push(e(r, i, t));
  }), n;
}, sT = (t) => {
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
}, ep = (t, e) => {
  t.doc ?? Re();
  const n = Cs(t, e);
  let r = t._start;
  for (n !== null && (r = n.p, e -= n.index); r !== null; r = r.right)
    if (!r.deleted && r.countable) {
      if (e < r.length)
        return r.content.getContent()[e];
      e -= r.length;
    }
}, $i = (t, e, n, r) => {
  let i = n;
  const s = t.doc, o = s.clientID, a = s.store, c = n === null ? e._start : n.right;
  let d = [];
  const f = () => {
    d.length > 0 && (i = new me(se(o, ke(a, o)), i, i && i.lastId, c, c && c.id, e, null, new fn(d)), i.integrate(t, 0), d = []);
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
              i = new me(se(o, ke(a, o)), i, i && i.lastId, c, c && c.id, e, null, new zr(new Uint8Array(
                /** @type {Uint8Array} */
                u
              ))), i.integrate(t, 0);
              break;
            case pn:
              i = new me(se(o, ke(a, o)), i, i && i.lastId, c, c && c.id, e, null, new $r(
                /** @type {Doc} */
                u
              )), i.integrate(t, 0);
              break;
            default:
              if (u instanceof Ee)
                i = new me(se(o, ke(a, o)), i, i && i.lastId, c, c && c.id, e, null, new vt(u)), i.integrate(t, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), f();
}, tp = () => Yt("Length exceeded!"), np = (t, e, n, r) => {
  if (n > e._length)
    throw tp();
  if (n === 0)
    return e._searchMarker && Cr(e._searchMarker, n, r.length), $i(t, e, null, r);
  const i = n, s = Cs(e, n);
  let o = e._start;
  for (s !== null && (o = s.p, n -= s.index, n === 0 && (o = o.prev, n += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (n <= o.length) {
        n < o.length && je(t, se(o.id.client, o.id.clock + n));
        break;
      }
      n -= o.length;
    }
  return e._searchMarker && Cr(e._searchMarker, i, r.length), $i(t, e, o, r);
}, oT = (t, e, n) => {
  let i = (e._searchMarker || []).reduce((s, o) => o.index > s.index ? o : s, { index: 0, p: e._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return $i(t, e, i, n);
}, rp = (t, e, n, r) => {
  if (r === 0)
    return;
  const i = n, s = r, o = Cs(e, n);
  let a = e._start;
  for (o !== null && (a = o.p, n -= o.index); a !== null && n > 0; a = a.right)
    !a.deleted && a.countable && (n < a.length && je(t, se(a.id.client, a.id.clock + n)), n -= a.length);
  for (; r > 0 && a !== null; )
    a.deleted || (r < a.length && je(t, se(a.id.client, a.id.clock + r)), a.delete(t), r -= a.length), a = a.right;
  if (r > 0)
    throw tp();
  e._searchMarker && Cr(
    e._searchMarker,
    i,
    -s + r
    /* in case we remove the above exception */
  );
}, ji = (t, e, n) => {
  const r = e._map.get(n);
  r !== void 0 && r.delete(t);
}, la = (t, e, n, r) => {
  const i = e._map.get(n) || null, s = t.doc, o = s.clientID;
  let a;
  if (r == null)
    a = new fn([r]);
  else
    switch (r.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
      case Date:
      case BigInt:
        a = new fn([r]);
        break;
      case Uint8Array:
        a = new zr(
          /** @type {Uint8Array} */
          r
        );
        break;
      case pn:
        a = new $r(
          /** @type {Doc} */
          r
        );
        break;
      default:
        if (r instanceof Ee)
          a = new vt(r);
        else
          throw new Error("Unexpected content type");
    }
  new me(se(o, ke(s.store, o)), i, i && i.lastId, null, null, e, n, a).integrate(t, 0);
}, aa = (t, e) => {
  t.doc ?? Re();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted ? n.content.getContent()[n.length - 1] : void 0;
}, ip = (t) => {
  const e = {};
  return t.doc ?? Re(), t._map.forEach((n, r) => {
    n.deleted || (e[r] = n.content.getContent()[n.length - 1]);
  }), e;
}, sp = (t, e) => {
  t.doc ?? Re();
  const n = t._map.get(e);
  return n !== void 0 && !n.deleted;
}, lT = (t, e) => {
  const n = {};
  return t._map.forEach((r, i) => {
    let s = r;
    for (; s !== null && (!e.sv.has(s.id.client) || s.id.clock >= (e.sv.get(s.id.client) || 0)); )
      s = s.left;
    s !== null && tn(s, e) && (n[i] = s.content.getContent()[s.length - 1]);
  }), n;
}, ni = (t) => (t.doc ?? Re(), I2(
  t._map.entries(),
  /** @param {any} entry */
  (e) => !e[1].deleted
));
class aT extends ks {
}
class _n extends Ee {
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
    const n = new _n();
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
    return new _n();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YArray<T>}
   */
  clone() {
    const e = new _n();
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
    super._callObserver(e, n), Ns(this, e, new aT(this, e));
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
      np(
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
      oT(
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
      rp(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(e) {
    return ep(this, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Qm(this);
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
    return Ym(this, e, n);
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
    return Zm(
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
    return sT(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(OT);
  }
}
const cT = (t) => new _n();
class dT extends ks {
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
    Ns(this, e, new dT(this, e, n));
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
    return [...ni(this)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return no(
      ni(this),
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
    return no(
      ni(this),
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
    return no(
      ni(this),
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
      ji(n, this, e);
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
      la(
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
      aa(this, e)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(e) {
    return sp(this, e);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? he(this.doc, (e) => {
      this.forEach(function(n, r, i) {
        ji(e, i, r);
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
class Xo {
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
    this.right === null && We(), this.right.content.constructor === Ce ? this.right.deleted || Xn(
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
    ) : e.right.deleted || (n < e.right.length && je(t, se(e.right.id.client, e.right.id.clock + n)), e.index += e.right.length, n -= e.right.length), e.left = e.right, e.right = e.right.right;
  return e;
}, ri = (t, e, n, r) => {
  const i = /* @__PURE__ */ new Map(), s = r ? Cs(e, n) : null;
  if (s) {
    const o = new Xo(s.p.left, s.p, s.index, i);
    return Cd(t, o, n - s.index);
  } else {
    const o = new Xo(null, e._start, 0, i);
    return Cd(t, o, n);
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
  const i = t.doc, s = i.clientID;
  r.forEach((o, a) => {
    const c = n.left, d = n.right, f = new me(se(s, ke(i.store, s)), c, c && c.lastId, d, d && d.id, e, null, new Ce(a, o));
    f.integrate(t, 0), n.right = f, n.forward();
  });
}, Xn = (t, e) => {
  const { key: n, value: r } = e;
  r === null ? t.delete(n) : t.set(n, r);
}, lp = (t, e) => {
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
}, ap = (t, e, n, r) => {
  const i = t.doc, s = i.clientID, o = /* @__PURE__ */ new Map();
  for (const a in r) {
    const c = r[a], d = n.currentAttributes.get(a) ?? null;
    if (!Kt(d, c)) {
      o.set(a, d);
      const { left: f, right: u } = n;
      n.right = new me(se(s, ke(i.store, s)), f, f && f.lastId, u, u && u.id, e, null, new Ce(a, c)), n.right.integrate(t, 0), n.forward();
    }
  }
  return o;
}, so = (t, e, n, r, i) => {
  n.currentAttributes.forEach((h, m) => {
    i[m] === void 0 && (i[m] = null);
  });
  const s = t.doc, o = s.clientID;
  lp(n, i);
  const a = ap(t, e, n, i), c = r.constructor === String ? new ht(
    /** @type {string} */
    r
  ) : r instanceof Ee ? new vt(r) : new gn(r);
  let { left: d, right: f, index: u } = n;
  e._searchMarker && Cr(e._searchMarker, n.index, c.getLength()), f = new me(se(o, ke(s.store, o)), d, d && d.lastId, f, f && f.id, e, null, c), f.integrate(t, 0), n.right = f, n.index = u, n.forward(), op(t, e, n, a);
}, Nd = (t, e, n, r, i) => {
  const s = t.doc, o = s.clientID;
  lp(n, i);
  const a = ap(t, e, n, i);
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
          r < n.right.length && je(t, se(n.right.id.client, n.right.id.clock + r)), r -= n.right.length;
          break;
      }
    n.forward();
  }
  if (r > 0) {
    let c = "";
    for (; r > 0; r--)
      c += `
`;
    n.right = new me(se(o, ke(s.store, o)), n.left, n.left && n.left.lastId, n.right, n.right && n.right.id, e, null, new ht(c)), n.right.integrate(t, 0), n.forward();
  }
  op(t, e, n, a);
}, cp = (t, e, n, r, i) => {
  let s = e;
  const o = at();
  for (; s && (!s.countable || s.deleted); ) {
    if (!s.deleted && s.content.constructor === Ce) {
      const d = (
        /** @type {ContentFormat} */
        s.content
      );
      o.set(d.key, d);
    }
    s = s.right;
  }
  let a = 0, c = !1;
  for (; e !== s; ) {
    if (n === e && (c = !0), !e.deleted) {
      const d = e.content;
      if (d.constructor === Ce) {
        const { key: f, value: u } = (
          /** @type {ContentFormat} */
          d
        ), h = r.get(f) ?? null;
        (o.get(f) !== d || h === u) && (e.delete(t), a++, !c && (i.get(f) ?? null) === u && h !== u && (h === null ? i.delete(f) : i.set(f, h))), !c && !e.deleted && Xn(
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
      ), i = t._start, s = at();
      const o = Bo(s);
      for (; i; )
        i.deleted === !1 && (i.content.constructor === Ce ? Xn(
          o,
          /** @type {ContentFormat} */
          i.content
        ) : (e += cp(n, r, i, s, o), s = Bo(o), r = i)), i = i.right;
    }
  ), e;
}, mT = (t) => {
  const e = /* @__PURE__ */ new Set(), n = t.doc;
  for (const [r, i] of t.afterState.entries()) {
    const s = t.beforeState.get(r) || 0;
    i !== s && Wm(
      t,
      /** @type {Array<Item|GC>} */
      n.store.clients.get(r),
      s,
      i,
      (o) => {
        !o.deleted && /** @type {Item} */
        o.content.constructor === Ce && o.constructor !== Xe && e.add(
          /** @type {any} */
          o.parent
        );
      }
    );
  }
  he(n, (r) => {
    Qt(t, t.deleteSet, (i) => {
      if (i instanceof Xe || !/** @type {YText} */
      i.parent._hasFormatting || e.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const s = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === Ce ? e.add(s) : fT(r, i);
    });
    for (const i of e)
      hT(i);
  });
}, Sd = (t, e, n) => {
  const r = n, i = Bo(e.currentAttributes), s = e.right;
  for (; n > 0 && e.right !== null; ) {
    if (e.right.deleted === !1)
      switch (e.right.content.constructor) {
        case vt:
        case gn:
        case ht:
          n < e.right.length && je(t, se(e.right.id.client, e.right.id.clock + n)), n -= e.right.length, e.right.delete(t);
          break;
      }
    e.forward();
  }
  s && cp(t, s, e.right, i, e.currentAttributes);
  const o = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (e.left || e.right).parent
  );
  return o._searchMarker && Cr(o._searchMarker, e.index, -r + n), e;
};
class pT extends ks {
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
        const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
        let o = this.target._start, a = null;
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
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case vt:
            case gn:
              this.adds(o) ? this.deletes(o) || (h(), a = "insert", d = o.content.getContent()[0], h()) : this.deletes(o) ? (a !== "delete" && (h(), a = "delete"), u += 1) : o.deleted || (a !== "retain" && (h(), a = "retain"), f += 1);
              break;
            case ht:
              this.adds(o) ? this.deletes(o) || (a !== "insert" && (h(), a = "insert"), d += /** @type {ContentString} */
              o.content.str) : this.deletes(o) ? (a !== "delete" && (h(), a = "delete"), u += o.length) : o.deleted || (a !== "retain" && (h(), a = "retain"), f += o.length);
              break;
            case Ce: {
              const { key: m, value: p } = (
                /** @type {ContentFormat} */
                o.content
              );
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const b = i.get(m) ?? null;
                  Kt(b, p) ? p !== null && o.delete(r) : (a === "retain" && h(), Kt(p, s.get(m) ?? null) ? delete c[m] : c[m] = p);
                }
              } else if (this.deletes(o)) {
                s.set(m, p);
                const b = i.get(m) ?? null;
                Kt(b, p) || (a === "retain" && h(), c[m] = b);
              } else if (!o.deleted) {
                s.set(m, p);
                const b = c[m];
                b !== void 0 && (Kt(b, p) ? b !== null && o.delete(r) : (a === "retain" && h(), p === null ? delete c[m] : c[m] = p));
              }
              o.deleted || (a === "insert" && h(), Xn(
                i,
                /** @type {ContentFormat} */
                o.content
              ));
              break;
            }
          }
          o = o.right;
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
class Xt extends Ee {
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
    return new Xt();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YText}
   */
  clone() {
    const e = new Xt();
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
    Ns(this, e, r), !e.local && this._hasFormatting && (e._needFormattingCleanup = !0);
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
      !n.deleted && n.countable && n.content.constructor === ht && (e += /** @type {ContentString} */
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
      const i = new Xo(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let s = 0; s < e.length; s++) {
        const o = e[s];
        if (o.insert !== void 0) {
          const a = !n && typeof o.insert == "string" && s === e.length - 1 && i.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof a != "string" || a.length > 0) && so(r, this, i, a, o.attributes || {});
        } else o.retain !== void 0 ? Nd(r, this, i, o.retain, o.attributes || {}) : o.delete !== void 0 && Sd(r, i, o.delete);
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
    const i = [], s = /* @__PURE__ */ new Map(), o = (
      /** @type {Doc} */
      this.doc
    );
    let a = "", c = this._start;
    function d() {
      if (a.length > 0) {
        const u = {};
        let h = !1;
        s.forEach((p, b) => {
          h = !0, u[b] = p;
        });
        const m = { insert: a };
        h && (m.attributes = u), i.push(m), a = "";
      }
    }
    const f = () => {
      for (; c !== null; ) {
        if (tn(c, e) || n !== void 0 && tn(c, n))
          switch (c.content.constructor) {
            case ht: {
              const u = s.get("ychange");
              e !== void 0 && !tn(c, e) ? (u === void 0 || u.user !== c.id.client || u.type !== "removed") && (d(), s.set("ychange", r ? r("removed", c.id) : { type: "removed" })) : n !== void 0 && !tn(c, n) ? (u === void 0 || u.user !== c.id.client || u.type !== "added") && (d(), s.set("ychange", r ? r("added", c.id) : { type: "added" })) : u !== void 0 && (d(), s.delete("ychange")), a += /** @type {ContentString} */
              c.content.str;
              break;
            }
            case vt:
            case gn: {
              d();
              const u = {
                insert: c.content.getContent()[0]
              };
              if (s.size > 0) {
                const h = (
                  /** @type {Object<string,any>} */
                  {}
                );
                u.attributes = h, s.forEach((m, p) => {
                  h[p] = m;
                });
              }
              i.push(u);
              break;
            }
            case Ce:
              tn(c, e) && (d(), Xn(
                s,
                /** @type {ContentFormat} */
                c.content
              ));
              break;
          }
        c = c.right;
      }
      d();
    };
    return e || n ? he(o, (u) => {
      e && Yo(u, e), n && Yo(u, n), f();
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
    i !== null ? he(i, (s) => {
      const o = ri(s, this, e, !r);
      r || (r = {}, o.currentAttributes.forEach((a, c) => {
        r[c] = a;
      })), so(s, this, o, n, r);
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
    i !== null ? he(i, (s) => {
      const o = ri(s, this, e, !r);
      so(s, this, o, n, r || {});
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
      Sd(i, ri(i, this, e, !0), n);
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
    i !== null ? he(i, (s) => {
      const o = ri(s, this, e, !1);
      o.right !== null && Nd(s, this, o, n, r);
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
      ji(n, this, e);
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
      la(r, this, e, n);
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
      aa(this, e)
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
    return ip(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(e) {
    e.writeTypeRef(FT);
  }
}
const gT = (t) => new Xt();
class oo {
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
        e.content.type, !e.deleted && (n.constructor === Oe || n.constructor === un) && n._start !== null)
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
class un extends Ee {
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
    return new un();
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlFragment}
   */
  clone() {
    const e = new un();
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
    return new oo(this, e);
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
    const r = new oo(this, (i) => i.nodeName && i.nodeName.toUpperCase() === e).next();
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
    return e = e.toUpperCase(), dn(new oo(this, (n) => n.nodeName && n.nodeName.toUpperCase() === e));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(e, n) {
    Ns(this, e, new xT(this, n, e));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Zm(this, (e) => e.toString()).join("");
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
    return r !== void 0 && r._createAssociation(i, this), Nr(this, (s) => {
      i.insertBefore(s.toDOM(e, n, r), null);
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
      np(r, this, e, n);
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
        $i(r, this, i, n);
      });
    else {
      const r = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = e === null ? 0 : r.findIndex((s) => s === e) + 1;
      if (i === 0 && e !== null)
        throw Yt("Reference item not found");
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
      rp(r, this, e, n);
    }) : this._prelimContent.splice(e, n);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Qm(this);
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
    return ep(this, e);
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
    return Ym(this, e, n);
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
const bT = (t) => new un();
class Oe extends un {
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
    const s = this.nodeName.toLocaleLowerCase(), o = n.length > 0 ? " " + n.join(" ") : "";
    return `<${s}${o}>${super.toString()}</${s}>`;
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
      ji(n, this, e);
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
      la(r, this, e, n);
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
      aa(this, e)
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
      sp(this, e)
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
      e ? lT(this, e) : ip(this)
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
    const i = e.createElement(this.nodeName), s = this.getAttributes();
    for (const o in s) {
      const a = s[o];
      typeof a == "string" && i.setAttribute(o, a);
    }
    return Nr(this, (o) => {
      i.appendChild(o.toDOM(e, n, r));
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
class xT extends ks {
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
class Bi extends Hn {
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
    return new Bi(this.hookName);
  }
  /**
   * Makes a copy of this data type that can be included somewhere else.
   *
   * Note that the content is only readable _after_ it has been included somewhere in the Ydoc.
   *
   * @return {YXmlHook}
   */
  clone() {
    const e = new Bi(this.hookName);
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
    let s;
    return i !== void 0 ? s = i.createDom(this) : s = document.createElement(this.hookName), s.setAttribute("data-yjs-hook", this.hookName), r !== void 0 && r._createAssociation(s, this), s;
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
const yT = (t) => new Bi(t.readKey());
class He extends Xt {
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
        const s = [];
        for (const o in e.attributes[i])
          s.push({ key: o, value: e.attributes[i][o] });
        s.sort((o, a) => o.key < a.key ? -1 : 1), n.push({ nodeName: i, attrs: s });
      }
      n.sort((i, s) => i.nodeName < s.nodeName ? -1 : 1);
      let r = "";
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        r += `<${s.nodeName}`;
        for (let o = 0; o < s.attrs.length; o++) {
          const a = s.attrs[o];
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
class ca {
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
class Xe extends ca {
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
    n > 0 && (this.id.clock += n, this.length -= n), Vm(e.doc.store, this);
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
class zr {
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
    return new zr(this.content);
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
const CT = (t) => new zr(t.readBuf());
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
    yr(e.deleteSet, n.id.client, n.id.clock, this.len), n.markDeleted();
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
const NT = (t) => new Sr(t.readLen()), dp = (t, e) => new pn({ guid: t, ...e, shouldLoad: e.shouldLoad || e.autoLoad || !1 });
class $r {
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
    return new $r(dp(this.doc.guid, this.opts));
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
const ST = (t) => new $r(dp(t.readString(), t.readAny()));
class gn {
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
    return new gn(this.embed);
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
const IT = (t) => new gn(t.readJSON());
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
class Hi {
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
    return new Hi(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(e) {
    const n = new Hi(this.arr.slice(e));
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
      const s = this.arr[i];
      e.writeString(s === void 0 ? "undefined" : JSON.stringify(s));
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
  return new Hi(n);
}, ET = Mi("node_env") === "development";
class fn {
  /**
   * @param {Array<any>} arr
   */
  constructor(e) {
    this.arr = e, ET && Im(e);
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
    return new fn(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(e) {
    const n = new fn(this.arr.slice(e));
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
      const s = this.arr[i];
      e.writeAny(s);
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
  return new fn(n);
};
class ht {
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
    return new ht(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(e) {
    const n = new ht(this.str.slice(e));
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
const _T = (t) => new ht(t.readString()), LT = [
  cT,
  uT,
  gT,
  vT,
  bT,
  yT,
  wT
], OT = 0, RT = 1, FT = 2, MT = 3, PT = 4, zT = 5, $T = 6;
class vt {
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
    return new vt(this.type._copy());
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
const jT = (t) => new vt(LT[t.readTypeRef()](t)), Zo = (t, e) => {
  let n = e, r = 0, i;
  do
    r > 0 && (n = se(n.client, n.clock + r)), i = Dn(t, n), r = n.clock - i.id.clock, n = i.redone;
  while (n !== null && i instanceof me);
  return {
    item: i,
    diff: r
  };
}, da = (t, e) => {
  for (; t !== null && t.keep !== e; )
    t.keep = e, t = /** @type {AbstractType<any>} */
    t.parent._item;
}, Vi = (t, e, n) => {
  const { client: r, clock: i } = e.id, s = new me(
    se(r, i + n),
    e,
    se(r, i + n - 1),
    e.right,
    e.rightOrigin,
    e.parent,
    e.parentSub,
    e.content.splice(n)
  );
  return e.deleted && s.markDeleted(), e.keep && (s.keep = !0), e.redone !== null && (s.redone = se(e.redone.client, e.redone.clock + n)), e.right = s, s.right !== null && (s.right.left = s), t._mergeStructs.push(s), s.parentSub !== null && s.right === null && s.parent._map.set(s.parentSub, s), e.length = n, s;
}, Id = (t, e) => uA(
  t,
  /** @param {StackItem} s */
  (n) => Qn(n.deletions, e)
), up = (t, e, n, r, i, s) => {
  const o = t.doc, a = o.store, c = o.clientID, d = e.redone;
  if (d !== null)
    return je(t, d);
  let f = (
    /** @type {AbstractType<any>} */
    e.parent._item
  ), u = null, h;
  if (f !== null && f.deleted === !0) {
    if (f.redone === null && (!n.has(f) || up(t, f, n, r, i, s) === null))
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
      let x = u;
      for (; x !== null && /** @type {AbstractType<any>} */
      x.parent._item !== f; )
        x = x.redone === null ? null : je(t, x.redone);
      if (x !== null && /** @type {AbstractType<any>} */
      x.parent._item === f) {
        u = x;
        break;
      }
      u = u.left;
    }
    for (; h !== null; ) {
      let x = h;
      for (; x !== null && /** @type {AbstractType<any>} */
      x.parent._item !== f; )
        x = x.redone === null ? null : je(t, x.redone);
      if (x !== null && /** @type {AbstractType<any>} */
      x.parent._item === f) {
        h = x;
        break;
      }
      h = h.right;
    }
  } else if (h = null, e.right && !i) {
    for (u = e; u !== null && u.right !== null && (u.right.redone || Qn(r, u.right.id) || Id(s.undoStack, u.right.id) || Id(s.redoStack, u.right.id)); )
      for (u = u.right; u.redone; ) u = je(t, u.redone);
    if (u && u.right !== null)
      return null;
  } else
    u = m._map.get(e.parentSub) || null;
  const p = ke(a, c), b = se(c, p), v = new me(
    b,
    u,
    u && u.lastId,
    h,
    h && h.id,
    m,
    e.parentSub,
    e.content.copy()
  );
  return e.redone = b, da(v, !0), v.integrate(t, 0), v;
};
let me = class el extends ca {
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
  constructor(e, n, r, i, s, o, a, c) {
    super(e, c.getLength()), this.origin = r, this.left = n, this.right = i, this.rightOrigin = s, this.parent = o, this.parentSub = a, this.redone = null, this.content = c, this.info = this.content.isCountable() ? nd : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(e) {
    (this.info & Zs) > 0 !== e && (this.info ^= Zs);
  }
  get marker() {
    return (this.info & Zs) > 0;
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
    return (this.info & Xs) > 0;
  }
  set deleted(e) {
    this.deleted !== e && (this.info ^= Xs);
  }
  markDeleted() {
    this.info |= Xs;
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
    if (this.parent && this.parent.constructor === En && this.id.client !== this.parent.client && this.parent.clock >= ke(n, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = gd(e, n, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = je(e, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === Xe || this.right && this.right.constructor === Xe)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === el ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === el && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === En) {
      const r = Dn(n, this.parent);
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
    if (n > 0 && (this.id.clock += n, this.left = gd(e, e.doc.store, se(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(n), this.length -= n), this.parent) {
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
        const s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (o.add(i), s.add(i), ei(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              r = i, s.clear();
            else if (ei(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && o.has(Dn(e.doc.store, i.origin)))
            s.has(Dn(e.doc.store, i.origin)) || (r = i, s.clear());
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
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(e)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Vm(e.doc.store, this), this.content.integrate(e, this), vd(
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
    return this.length === 1 ? this.id : se(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(e) {
    if (this.constructor === e.constructor && ei(e.origin, this.lastId) && this.right === e && ei(this.rightOrigin, e.rightOrigin) && this.id.client === e.id.client && this.id.clock + this.length === e.id.clock && this.deleted === e.deleted && this.redone === null && e.redone === null && this.content.constructor === e.content.constructor && this.content.mergeWith(e.content)) {
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
      this.countable && this.parentSub === null && (n._length -= this.length), this.markDeleted(), yr(e.deleteSet, this.id.client, this.id.clock, this.length), vd(e, n, this.parentSub), this.content.delete(e);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(e, n) {
    if (!this.deleted)
      throw We();
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
    const r = n > 0 ? se(this.id.client, this.id.clock + n - 1) : this.origin, i = this.rightOrigin, s = this.parentSub, o = this.content.getRef() & bs | (r === null ? 0 : $e) | // origin is defined
    (i === null ? 0 : Rt) | // right origin is defined
    (s === null ? 0 : br);
    if (e.writeInfo(o), r !== null && e.writeLeftID(r), i !== null && e.writeRightID(i), r === null && i === null) {
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
      } else a.constructor === String ? (e.writeParentInfo(!0), e.writeString(a)) : a.constructor === En ? (e.writeParentInfo(!1), e.writeLeftID(a)) : We();
      s !== null && e.writeString(s);
    }
    this.content.write(e, n);
  }
};
const fp = (t, e) => BT[e & bs](t), BT = [
  () => {
    We();
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
    We();
  }
  // 10 - Skip is not ItemContent
], HT = 10;
class st extends ca {
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
    We();
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
const hp = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), mp = "__ $YJS$ __";
hp[mp] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
hp[mp] = !0;
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
}, qT = GT, xe = new Ue("y-sync"), Ft = new Ue("y-undo");
new Ue("yjs-cursor");
const kt = (t, e) => t >>> e | t << 32 - e, KT = (t) => kt(t, 2) ^ kt(t, 13) ^ kt(t, 22), JT = (t) => kt(t, 6) ^ kt(t, 11) ^ kt(t, 25), YT = (t) => kt(t, 7) ^ kt(t, 18) ^ t >>> 3, QT = (t) => kt(t, 17) ^ kt(t, 19) ^ t >>> 10, XT = new Uint32Array([
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
    let r = e[0], i = e[1], s = e[2], o = e[3], a = e[4], c = e[5], d = e[6], f = e[7];
    for (let u = 0, h, m; u < 64; u++)
      h = f + JT(a) + (a & c ^ ~a & d) + XT[u] + n[u] >>> 0, m = KT(r) + (r & i ^ r & s ^ i & s) >>> 0, f = d, d = c, c = a, a = o + h >>> 0, o = s, s = i, i = r, r = h + m >>> 0;
    e[0] += r, e[1] += i, e[2] += s, e[3] += o, e[4] += a, e[5] += c, e[6] += d, e[7] += f;
  }
  /**
   * Returns a 32-byte hash.
   *
   * @param {Uint8Array} data
   */
  digest(e) {
    let n = 0;
    for (; n + 56 <= e.length; ) {
      let o = 0;
      for (; o < 16 && n + 3 < e.length; o++)
        this._W[o] = e[n++] << 24 | e[n++] << 16 | e[n++] << 8 | e[n++];
      if (n % 64 !== 0) {
        for (this._W.fill(0, o, 16); n < e.length; )
          this._W[o] |= e[n] << (3 - n % 4) * 8, n++;
        this._W[o] |= $e << (3 - n % 4) * 8;
      }
      this._updateHash();
    }
    const r = n % 64 !== 0;
    this._W.fill(0, 0, 16);
    let i = 0;
    for (; n < e.length; i++)
      for (let o = 3; o >= 0 && n < e.length; o--)
        this._W[i] |= e[n++] << o * 8;
    r || (this._W[i - (n % 4 === 0 ? 0 : 1)] |= $e << (3 - n % 4) * 8), this._W[14] = e.byteLength / fA, this._W[15] = e.byteLength * 8, this._updateHash();
    const s = new Uint8Array(32);
    for (let o = 0; o < this._H.length; o++)
      for (let a = 0; a < 4; a++)
        s[o * 4 + a] = this._H[o] >>> (3 - a) * 8;
    return s;
  }
}
const tE = (t) => new eE().digest(t), nE = (t) => {
  for (let n = 6; n < t.length; n++)
    t[n % 6] = t[n % 6] ^ t[n];
  return t.slice(0, 6);
}, rE = (t) => d2(nE(tE(u2(t)))), Wi = (t, e) => e === void 0 ? !t.deleted : e.sv.has(t.id.client) && /** @type {number} */
e.sv.get(t.id.client) > t.id.clock && !Qn(e.ds, t.id), iE = [{ light: "#ecd44433", dark: "#ecd444" }], sE = (t, e, n) => {
  if (!t.has(n)) {
    if (t.size < e.length) {
      const r = cn();
      t.forEach((i) => r.add(i)), e = e.filter((i) => !r.has(i));
    }
    t.set(n, UA(e));
  }
  return (
    /** @type {ColorDef} */
    t.get(n)
  );
}, oE = (t, {
  colors: e = iE,
  colorMapping: n = /* @__PURE__ */ new Map(),
  permanentUserData: r = null,
  onFirstRender: i = () => {
  },
  mapping: s
} = {}) => {
  let o = !1;
  const a = new aE(t, s), c = new It({
    props: {
      editable: (d) => {
        const f = xe.getState(d);
        return f.snapshot == null && f.prevSnapshot == null;
      }
    },
    key: xe,
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
        const u = d.getMeta(xe);
        if (u !== void 0) {
          f = Object.assign({}, f);
          for (const h in u)
            f[h] = u[h];
        }
        return f.addToHistory = d.getMeta("addToHistory") !== !1, f.isChangeOrigin = u !== void 0 && !!u.isChangeOrigin, f.isUndoRedoOperation = u !== void 0 && !!u.isChangeOrigin && !!u.isUndoRedoOperation, a.prosemirrorView !== null && u !== void 0 && (u.snapshot != null || u.prevSnapshot != null) && Em(0, () => {
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
    view: (d) => (a.initView(d), s == null && a._forceRerender(), i(), {
      update: () => {
        const f = c.getState(d.state);
        if (f.snapshot == null && f.prevSnapshot == null && // If the content doesn't change initially, we don't render anything to Yjs
        // If the content was cleared by a user action, we want to catch the change and
        // represent it in Yjs
        (o || d.state.doc.content.findDiffStart(
          d.state.doc.type.createAndFill().content
        ) !== null)) {
          if (o = !0, f.addToHistory === !1 && !f.isChangeOrigin) {
            const u = Ft.getState(d.state), h = u && u.undoManager;
            h && h.stopCapturing();
          }
          a.mux(() => {
            f.doc.transact((u) => {
              u.meta.set("addToHistory", f.addToHistory), a._prosemirrorChanged(d.state.doc);
            }, xe);
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
      const r = xi(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      );
      t.setSelection(Ou.create(t.doc, r));
    } else {
      const r = xi(
        n.doc,
        n.type,
        e.anchor,
        n.mapping
      ), i = xi(
        n.doc,
        n.type,
        e.head,
        n.mapping
      );
      if (r !== null && i !== null) {
        const s = ot.between(t.doc.resolve(r), t.doc.resolve(i));
        t.setSelection(s);
      }
    }
}, tl = (t, e) => ({
  type: (
    /** @type {any} */
    e.selection.jsonID
  ),
  anchor: sl(
    e.selection.anchor,
    t.type,
    t.mapping
  ),
  head: sl(
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
    return this.prosemirrorView.hasFocus() ? (Am && this._domSelectionInView === null && (Em(0, () => {
      this._domSelectionInView = null;
    }), this._domSelectionInView = this._isDomSelectionInView()), this._domSelectionInView) : !1;
  }
  _isDomSelectionInView() {
    const e = this.prosemirrorView._root.getSelection();
    if (e == null || e.anchorNode == null) return !1;
    const n = this.prosemirrorView._root.createRange();
    n.setStart(e.anchorNode, e.anchorOffset), n.setEnd(e.focusNode, e.focusOffset), n.getClientRects().length === 0 && n.startContainer && n.collapsed && n.selectNodeContents(n.startContainer);
    const i = n.getBoundingClientRect(), s = h2.documentElement;
    return i.bottom >= 0 && i.right >= 0 && i.left <= (window.innerWidth || s.clientWidth || 0) && i.top <= (window.innerHeight || s.clientHeight || 0);
  }
  /**
   * @param {Y.Snapshot} snapshot
   * @param {Y.Snapshot} prevSnapshot
   */
  renderSnapshot(e, n) {
    n || (n = Bm(Pm(), /* @__PURE__ */ new Map())), this.prosemirrorView.dispatch(
      this._tr.setMeta(xe, { snapshot: e, prevSnapshot: n })
    );
  }
  unrenderSnapshot() {
    this.mapping.clear(), this.mux(() => {
      const e = this.type.toArray().map(
        (r) => vi(
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
      n.setMeta(xe, { snapshot: null, prevSnapshot: null }), this.prosemirrorView.dispatch(n);
    });
  }
  _forceRerender() {
    this.mapping.clear(), this.mux(() => {
      const e = this.beforeTransactionSelection !== null ? null : this.prosemirrorView.state.selection, n = this.type.toArray().map(
        (i) => vi(
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
        const i = $n(Jt(e.anchor, 0), r.doc.content.size), s = $n(Jt(e.head, 0), r.doc.content.size);
        r.setSelection(ot.create(r.doc, i, s));
      }
      this.prosemirrorView.dispatch(
        r.setMeta(xe, { isChangeOrigin: !0, binding: this })
      );
    });
  }
  /**
   * @param {Y.Snapshot|Uint8Array} snapshot
   * @param {Y.Snapshot|Uint8Array} prevSnapshot
   * @param {Object} pluginState
   */
  _renderSnapshot(e, n, r) {
    let i = this.doc, s = this.type;
    if (e || (e = io(this.doc)), e instanceof Uint8Array || n instanceof Uint8Array)
      if ((!(e instanceof Uint8Array) || !(n instanceof Uint8Array)) && We(), i = new pn({ gc: !1 }), Jo(i, n), n = io(i), Jo(i, e), e = io(i), s._item === null) {
        const o = Array.from(this.doc.share.keys()).find(
          (a) => this.doc.share.get(a) === this.type
        );
        s = i.getXmlFragment(o);
      } else {
        const o = i.store.clients.get(s._item.id.client) ?? [], a = ft(
          o,
          s._item.id.clock
        );
        s = /** @type {Y.XmlFragment} */
        /** @type {Y.ContentType} */
        /** @type {Y.Item} */
        o[a].content.type;
      }
    this.mapping.clear(), this.mux(() => {
      i.transact((o) => {
        const a = r.permanentUserData;
        a && a.dss.forEach((u) => {
          Qt(o, u, (h) => {
          });
        });
        const c = (u, h) => {
          const m = u === "added" ? a.getUserByClientId(h.client) : a.getUserByDeletedId(h);
          return {
            user: m,
            type: u,
            color: sE(
              r.colorMapping,
              r.colors,
              m
            )
          };
        }, d = Xm(
          s,
          new sa(n.ds, e.sv)
        ).map((u) => !u._item.deleted || Wi(u._item, e) || Wi(u._item, n) ? vi(
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
          f.setMeta(xe, { isChangeOrigin: !0 })
        );
      }, xe);
    });
  }
  /**
   * @param {Array<Y.YEvent<any>>} events
   * @param {Y.Transaction} transaction
   */
  _typeChanged(e, n) {
    if (this.prosemirrorView == null) return;
    const r = xe.getState(this.prosemirrorView.state);
    if (e.length === 0 || r.snapshot != null || r.prevSnapshot != null) {
      this.renderSnapshot(r.snapshot, r.prevSnapshot);
      return;
    }
    this.mux(() => {
      const i = (a, c) => this.mapping.delete(c);
      Qt(
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
      const s = this.type.toArray().map(
        (a) => pp(
          /** @type {Y.XmlElement | Y.XmlHook} */
          a,
          this.prosemirrorView.state.schema,
          this
        )
      ).filter((a) => a !== null);
      let o = this._tr.replace(
        0,
        this.prosemirrorView.state.doc.content.size,
        new Ze(Be.from(s), 0, 0)
      );
      lE(o, this.beforeTransactionSelection, this), o = o.setMeta(xe, { isChangeOrigin: !0, isUndoRedoOperation: n.origin instanceof Gm }), this.beforeTransactionSelection !== null && this._isLocalCursorInView() && o.scrollIntoView(), this.prosemirrorView.dispatch(o);
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
    }, xe);
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
const pp = (t, e, n, r, i, s) => {
  const o = (
    /** @type {PModel.Node} */
    n.mapping.get(t)
  );
  if (o === void 0) {
    if (t instanceof Oe)
      return vi(
        t,
        e,
        n,
        r,
        i,
        s
      );
    throw ct();
  }
  return o;
}, vi = (t, e, n, r, i, s) => {
  const o = [], a = (c) => {
    if (c instanceof Oe) {
      const d = pp(
        c,
        e,
        n,
        r,
        i,
        s
      );
      d !== null && o.push(d);
    } else {
      const d = (
        /** @type {Y.ContentType} */
        c._item.right?.content?.type
      );
      d instanceof Xt && !d._item.deleted && d._item.id.client === d.doc.clientID && (c.applyDelta([
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
        s
      );
      f !== null && f.forEach((u) => {
        u !== null && o.push(u);
      });
    }
  };
  r === void 0 || i === void 0 ? t.toArray().forEach(a) : Xm(t, new sa(i.ds, r.sv)).forEach(a);
  try {
    const c = t.getAttributes(r);
    r !== void 0 && (Wi(
      /** @type {Y.Item} */
      t._item,
      r
    ) ? Wi(
      /** @type {Y.Item} */
      t._item,
      i
    ) || (c.ychange = s ? s(
      "added",
      /** @type {Y.Item} */
      t._item.id
    ) : { type: "added" }) : c.ychange = s ? s(
      "removed",
      /** @type {Y.Item} */
      t._item.id
    ) : { type: "removed" });
    const d = e.node(t.nodeName, c, o);
    return n.mapping.set(t, d), d;
  } catch {
    return t.doc.transact((d) => {
      t._item.delete(d);
    }, xe), n.mapping.delete(t), null;
  }
}, cE = (t, e, n, r, i, s) => {
  const o = [], a = t.toDelta(r, i, s);
  try {
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      o.push(e.text(d.insert, pE(d.attributes, e)));
    }
  } catch {
    return t.doc.transact((d) => {
      t._item.delete(d);
    }, xe), null;
  }
  return o;
}, dE = (t, e) => {
  const n = new He(), r = t.map((i) => ({
    // @ts-ignore
    insert: i.text,
    attributes: bp(i.marks, e)
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
    Ss(t).map(
      (r) => nl(r, e)
    )
  ), e.mapping.set(n, t), n;
}, nl = (t, e) => t instanceof Array ? dE(t, e) : uE(t, e), Ad = (t) => typeof t == "object" && t !== null, ua = (t, e) => {
  const n = Object.keys(t).filter((i) => t[i] !== null);
  let r = n.length === (e == null ? 0 : Object.keys(e).filter((i) => e[i] !== null).length);
  for (let i = 0; i < n.length && r; i++) {
    const s = n[i], o = t[s], a = e[s];
    r = s === "ychange" || o === a || Ad(o) && Ad(a) && ua(o, a);
  }
  return r;
}, Ss = (t) => {
  const e = t.content.content, n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    if (i.isText) {
      const s = [];
      for (let o = e[r]; r < e.length && o.isText; o = e[++r])
        s.push(o);
      r--, n.push(s);
    } else
      n.push(i);
  }
  return n;
}, gp = (t, e) => {
  const n = t.toDelta();
  return n.length === e.length && n.every(
    /** @type {(d:any,i:number) => boolean} */
    (r, i) => r.insert === /** @type {any} */
    e[i].text && Nm(r.attributes || {}).length === e[i].marks.length && Sm(r.attributes, (s, o) => {
      const a = fa(o), c = e[i].marks;
      return ua(s, c.find(
        /** @param {any} mark */
        (d) => d.type.name === a
      )?.attrs);
    })
  );
}, Ir = (t, e) => {
  if (t instanceof Oe && !(e instanceof Array) && il(t, e)) {
    const n = Ss(e);
    return t._length === n.length && ua(t.getAttributes(), e.attrs) && t.toArray().every(
      (r, i) => Ir(r, n[i])
    );
  }
  return t instanceof He && e instanceof Array && gp(t, e);
}, Ui = (t, e) => t === e || t instanceof Array && e instanceof Array && t.length === e.length && t.every(
  (n, r) => e[r] === n
), Td = (t, e, n) => {
  const r = t.toArray(), i = Ss(e), s = i.length, o = r.length, a = $n(o, s);
  let c = 0, d = 0, f = !1;
  for (; c < a; c++) {
    const u = r[c], h = i[c];
    if (Ui(n.mapping.get(u), h))
      f = !0;
    else if (!Ir(u, h))
      break;
  }
  for (; c + d < a; d++) {
    const u = r[o - d - 1], h = i[s - d - 1];
    if (Ui(n.mapping.get(u), h))
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
    n.deleted || (n.countable && n.content instanceof ht ? e += n.content.str : n.content instanceof Ce && (r[n.content.key] = null)), n = n.right;
  return {
    str: e,
    nAttrs: r
  };
}, hE = (t, e, n) => {
  n.mapping.set(t, e);
  const { nAttrs: r, str: i } = fE(t), s = e.map((d) => ({
    insert: (
      /** @type {any} */
      d.text
    ),
    attributes: Object.assign({}, r, bp(d.marks, n))
  })), { insert: o, remove: a, index: c } = qT(
    i,
    s.map((d) => d.insert).join("")
  );
  t.delete(c, a), t.insert(c, o), t.applyDelta(
    s.map((d) => ({ retain: d.insert.length, attributes: d.attributes }))
  );
}, mE = /(.*)(--[a-zA-Z0-9+/=]{8})$/, fa = (t) => mE.exec(t)?.[1] ?? t, pE = (t, e) => {
  const n = [];
  for (const r in t)
    n.push(e.mark(fa(r), t[r]));
  return n;
}, bp = (t, e) => {
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
  const i = Ss(n), s = i.length, o = e.toArray(), a = o.length, c = $n(s, a);
  let d = 0, f = 0;
  for (; d < c; d++) {
    const u = o[d], h = i[d];
    if (!Ui(r.mapping.get(u), h))
      if (Ir(u, h))
        r.mapping.set(u, h);
      else
        break;
  }
  for (; f + d + 1 < c; f++) {
    const u = o[a - f - 1], h = i[s - f - 1];
    if (!Ui(r.mapping.get(u), h))
      if (Ir(u, h))
        r.mapping.set(u, h);
      else
        break;
  }
  t.transact(() => {
    for (; a - d - f > 0 && s - d - f > 0; ) {
      const h = o[d], m = i[d], p = o[a - f - 1], b = i[s - f - 1];
      if (h instanceof He && m instanceof Array)
        gp(h, m) || hE(h, m, r), d += 1;
      else {
        let v = h instanceof Oe && il(h, m), x = p instanceof Oe && il(p, b);
        if (v && x) {
          const w = Td(
            /** @type {Y.XmlElement} */
            h,
            /** @type {PModel.Node} */
            m,
            r
          ), y = Td(
            /** @type {Y.XmlElement} */
            p,
            /** @type {PModel.Node} */
            b,
            r
          );
          w.foundMappedChild && !y.foundMappedChild ? x = !1 : !w.foundMappedChild && y.foundMappedChild || w.equalityFactor < y.equalityFactor ? v = !1 : x = !1;
        }
        v ? (rl(
          t,
          /** @type {Y.XmlFragment} */
          h,
          /** @type {PModel.Node} */
          m,
          r
        ), d += 1) : x ? (rl(
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
    if (a === 1 && s === 0 && o[0] instanceof He ? (r.mapping.delete(o[0]), o[0].delete(0, o[0].length)) : u > 0 && (e.slice(d, d + u).forEach((h) => r.mapping.delete(h)), e.delete(d, u)), d + f < s) {
      const h = [];
      for (let m = d; m < s - f; m++)
        h.push(nl(i[m], r));
      e.insert(d, h);
    }
  }, xe);
}, il = (t, e) => !(e instanceof Array) && t.nodeName === e.type.name, sl = (t, e, n) => {
  if (t === 0)
    return ro(e, 0, e.length === 0 ? -1 : 0);
  let r = e._first === null ? null : (
    /** @type {Y.ContentType} */
    e._first.content.type
  );
  for (; r !== null && e !== r; ) {
    if (r instanceof He) {
      if (r._length >= t)
        return ro(r, t, e.length === 0 ? -1 : 0);
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
          return new zi(r._item === null ? null : r._item.id, r._item === null ? wr(r) : null, null);
        if (t -= i, r._item !== null && r._item.next !== null)
          r = /** @type {Y.ContentType} */
          r._item.next.content.type;
        else {
          if (t === 0)
            return r = r._item === null ? r : r._item.parent, new zi(r._item === null ? null : r._item.id, r._item === null ? wr(r) : null, null);
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
      throw We();
    if (t === 0 && r.constructor !== He && r !== e)
      return gE(r._item.parent, r._item);
  }
  return ro(e, e._length, e.length === 0 ? -1 : 0);
}, gE = (t, e) => {
  let n = null, r = null;
  return t._item === null ? r = wr(t) : n = se(t._item.id.client, t._item.id.clock), new zi(n, r, e.id);
}, xi = (t, e, n, r) => {
  const i = V2(n, t);
  if (i === null || i.type !== e && !kr(e, i.type._item))
    return null;
  let s = i.type, o = 0;
  if (s.constructor === He)
    o = i.index;
  else if (s._item === null || !s._item.deleted) {
    let a = s._first, c = 0;
    for (; c < s._length && c < i.index && a !== null; ) {
      if (!a.deleted) {
        const d = (
          /** @type {Y.ContentType} */
          a.content.type
        );
        c++, d instanceof He ? o += d._length : o += /** @type {any} */
        r.get(d).nodeSize;
      }
      a = /** @type {Y.Item} */
      a.right;
    }
    o += 1;
  }
  for (; s !== e && s._item !== null; ) {
    const a = s._item.parent;
    if (a._item === null || !a._item.deleted) {
      o += 1;
      let c = (
        /** @type {Y.AbstractType} */
        a._first
      );
      for (; c !== null; ) {
        const d = (
          /** @type {Y.ContentType} */
          c.content.type
        );
        if (d === s)
          break;
        c.deleted || (d instanceof He ? o += d._length : o += /** @type {any} */
        r.get(d).nodeSize), c = c.right;
      }
    }
    s = /** @type {Y.AbstractType} */
    a;
  }
  return o - 1;
};
function bE(t) {
  const e = t.toArray(), n = (r) => {
    let i;
    if (r instanceof He)
      i = r.toDelta().map(
        /** @param {any} d */
        (o) => {
          const a = {
            type: "text",
            text: o.insert
          };
          return o.attributes && (a.marks = Object.keys(o.attributes).map((c) => {
            const d = o.attributes[c], u = {
              type: fa(c)
            };
            return Object.keys(d) && (u.attrs = d), u;
          })), a;
        }
      );
    else if (r instanceof Oe) {
      i = {
        type: r.nodeName
      };
      const s = r.getAttributes();
      Object.keys(s).length && (i.attrs = s);
      const o = r.toArray();
      o.length && (i.content = o.map(n).flat());
    } else
      We();
    return i;
  };
  return {
    type: "doc",
    content: e.map(n)
  };
}
const vE = (t) => Ft.getState(t)?.undoManager?.undo() != null, xE = (t) => Ft.getState(t)?.undoManager?.redo() != null, yE = /* @__PURE__ */ new Set(["paragraph"]), wE = (t, e) => !(t instanceof me) || !(t.content instanceof vt) || !(t.content.type instanceof Xt || t.content.type instanceof Oe && e.has(t.content.type.nodeName)) || t.content.type._length === 0, kE = ({ protectedNodes: t = yE, trackedOrigins: e = [], undoManager: n = null } = {}) => new It({
  key: Ft,
  state: {
    init: (r, i) => {
      const s = xe.getState(i), o = n || new Gm(s.type, {
        trackedOrigins: new Set([xe].concat(e)),
        deleteFilter: (a) => wE(a, t),
        captureTransaction: (a) => a.meta.get("addToHistory") !== !1
      });
      return {
        undoManager: o,
        prevSel: null,
        hasUndoOps: o.undoStack.length > 0,
        hasRedoOps: o.redoStack.length > 0
      };
    },
    apply: (r, i, s, o) => {
      const a = xe.getState(o).binding, c = i.undoManager, d = c.undoStack.length > 0, f = c.redoStack.length > 0;
      return a ? {
        undoManager: c,
        prevSel: tl(a, s),
        hasUndoOps: d,
        hasRedoOps: f
      } : d !== i.hasUndoOps || f !== i.hasRedoOps ? Object.assign({}, i, {
        hasUndoOps: c.undoStack.length > 0,
        hasRedoOps: c.redoStack.length > 0
      }) : i;
    }
  },
  view: (r) => {
    const i = xe.getState(r.state), s = Ft.getState(r.state).undoManager;
    return s.on("stack-item-added", ({ stackItem: o }) => {
      const a = i.binding;
      a && o.meta.set(a, Ft.getState(r.state).prevSel);
    }), s.on("stack-item-popped", ({ stackItem: o }) => {
      const a = i.binding;
      a && (a.beforeTransactionSelection = o.meta.get(a) || a.beforeTransactionSelection);
    }), {
      destroy: () => {
        s.destroy();
      }
    };
  }
});
mn.create({
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
      redo: () => ({ tr: t, state: e, dispatch: n }) => (t.setMeta("preventDispatch", !0), Ft.getState(e).undoManager.redoStack.length === 0 ? !1 : n ? xE(e) : !0)
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
    n.spec.view = (o) => {
      const { undoManager: a } = Ft.getState(o.state);
      a.restore && (a.restore(), a.restore = () => {
      });
      const c = r ? r(o) : void 0;
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
    }, s = oE(e, i);
    return this.editor.options.enableContentCheck && ((t = e.doc) === null || t === void 0 || t.on("beforeTransaction", () => {
      try {
        const o = bE(e);
        if (o.content.length === 0)
          return;
        this.editor.schema.nodeFromJSON(o).check();
      } catch (o) {
        return this.editor.emit("contentError", {
          error: o,
          editor: this.editor,
          disableCollaboration: () => {
            var a;
            (a = e.doc) === null || a === void 0 || a.destroy(), this.storage.isDisabled = !0;
          }
        }), !1;
      }
    })), [
      s,
      n,
      // Only add the filterInvalidContent plugin if content checking is enabled
      this.editor.options.enableContentCheck && new It({
        key: new Ue("filterInvalidContent"),
        filterTransaction: () => {
          var o;
          return this.storage.isDisabled && ((o = e.doc) === null || o === void 0 || o.destroy()), !0;
        }
      })
    ].filter(Boolean);
  }
});
function CE(t) {
  return !!t.getMeta(xe);
}
function Ed(t) {
  if (!t.length)
    return fr.empty;
  const e = [], n = t[0].$from.node(0);
  return t.forEach((r) => {
    const i = r.$from.pos, s = r.$from.nodeAfter;
    s && e.push(Si.node(i, i + s.nodeSize, {
      class: "ProseMirror-selectednoderange"
    }));
  }), fr.create(n, e);
}
function Is(t, e, n) {
  const r = [], i = t.node(0);
  n = typeof n == "number" && n >= 0 ? n : t.sameParent(e) ? Math.max(0, t.sharedDepth(e.pos) - 1) : t.sharedDepth(e.pos);
  const s = new cv(t, e, n), o = s.depth === 0 ? 0 : i.resolve(s.start).posAtIndex(0);
  return s.parent.forEach((a, c) => {
    const d = o + c, f = d + a.nodeSize;
    if (d < s.start || d >= s.end)
      return;
    const u = new Lu(i.resolve(d), i.resolve(f));
    r.push(u);
  }), r;
}
class ha {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new ha(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return new Le(n, r);
  }
}
class Le extends Qe {
  constructor(e, n, r, i = 1) {
    const { doc: s } = e, o = e === n, a = e.pos === s.content.size && n.pos === s.content.size, c = o && !a ? s.resolve(n.pos + (i > 0 ? 1 : -1)) : n, d = o && a ? s.resolve(e.pos - (i > 0 ? 1 : -1)) : e, f = Is(d.min(c), d.max(c), r), u = c.pos >= e.pos ? f[0].$from : f[f.length - 1].$to, h = c.pos >= e.pos ? f[f.length - 1].$to : f[0].$from;
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
      const i = this.ranges.slice(0, -1), s = i[0].$from, o = i[i.length - 1].$to;
      return new Le(s, o, this.depth);
    }
    const n = this.ranges[0], r = e.resolve(Math.max(0, n.$from.pos - 1));
    return new Le(this.$anchor, r, this.depth);
  }
  extendForwards() {
    const { doc: e } = this.$from;
    if (this.isBackwards && this.ranges.length > 1) {
      const i = this.ranges.slice(1), s = i[0].$from, o = i[i.length - 1].$to;
      return new Le(o, s, this.depth);
    }
    const n = this.ranges[this.ranges.length - 1], r = e.resolve(Math.min(e.content.size, n.$to.pos + 1));
    return new Le(this.$anchor, r, this.depth);
  }
  static fromJSON(e, n) {
    return new Le(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r, i, s = 1) {
    return new this(e.resolve(n), e.resolve(r), i, s);
  }
  getBookmark() {
    return new ha(this.anchor, this.head);
  }
}
Le.prototype.visible = !1;
function ii(t) {
  return t instanceof Le;
}
mn.create({
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
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: s, tr: o } = r, { anchor: a, head: c } = s;
        if (!ii(s)) {
          const f = Le.create(i, a, c, e, -1);
          return o.setSelection(f), n.dispatch(o), !0;
        }
        const d = s.extendBackwards();
        return o.setSelection(d), n.dispatch(o), !0;
      },
      // extend NodeRangeSelection downwards
      "Shift-ArrowDown": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, selection: s, tr: o } = r, { anchor: a, head: c } = s;
        if (!ii(s)) {
          const f = Le.create(i, a, c, e);
          return o.setSelection(f), n.dispatch(o), !0;
        }
        const d = s.extendForwards();
        return o.setSelection(d), n.dispatch(o), !0;
      },
      // add `NodeRangeSelection` to all nodes
      "Mod-a": ({ editor: t }) => {
        const { depth: e } = this.options, { view: n, state: r } = t, { doc: i, tr: s } = r, o = Le.create(i, 0, i.content.size, e);
        return s.setSelection(o), n.dispatch(s), !0;
      }
    };
  },
  onSelectionUpdate() {
    const { selection: t } = this.editor.state;
    ii(t) && this.editor.view.dom.classList.add("ProseMirror-noderangeselection");
  },
  addProseMirrorPlugins() {
    let t = !1, e = !1;
    return [
      new It({
        key: new Ue("nodeRange"),
        props: {
          attributes: () => t ? {
            class: "ProseMirror-noderangeselection"
          } : { class: "" },
          handleDOMEvents: {
            mousedown: (n, r) => {
              const { key: i } = this.options, s = /Mac/.test(navigator.platform), o = !!r.shiftKey, a = !!r.ctrlKey, c = !!r.altKey, d = !!r.metaKey, f = s ? d : a;
              return (i == null || i === "Shift" && o || i === "Control" && a || i === "Alt" && c || i === "Meta" && d || i === "Mod" && f) && (e = !0), e && document.addEventListener("mouseup", () => {
                e = !1;
                const { state: u } = n, { doc: h, selection: m, tr: p } = u, { $anchor: b, $head: v } = m;
                if (b.sameParent(v))
                  return;
                const x = Le.create(h, b.pos, v.pos, this.options.depth);
                p.setSelection(x), n.dispatch(p);
              }, { once: !0 }), !1;
            }
          },
          // when selecting some text we want to render some decorations
          // to preview a `NodeRangeSelection`
          decorations: (n) => {
            const { selection: r } = n, i = ii(r);
            if (t = !1, !e)
              return i ? (t = !0, Ed(r.ranges)) : null;
            const { $from: s, $to: o } = r;
            if (!i && s.sameParent(o))
              return null;
            const a = Is(s, o, this.options.depth);
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
  return n.forEach((i, s) => {
    r[s].style.cssText = NE(i);
  }), e;
}
const vp = (t) => {
  const { x: e, y: n, direction: r, editor: i } = t;
  let s = null, o = null, a = null, c = e;
  for (; o === null && c < window.innerWidth && c > 0; ) {
    const d = document.elementsFromPoint(c, n), f = d.findIndex((h) => h.classList.contains("ProseMirror")), u = d.slice(0, f);
    if (u.length > 0) {
      const h = u[0];
      if (s = h, a = i.view.posAtDOM(h, 0), a >= 0) {
        o = i.state.doc.nodeAt(Math.max(a - 1, 0)), o?.isText && (o = i.state.doc.nodeAt(Math.max(a - 1, 0))), o || (o = i.state.doc.nodeAt(Math.max(a, 0)));
        break;
      }
    }
    r === "left" ? c -= 1 : c += 1;
  }
  return { resultElement: s, resultNode: o, pos: a ?? null };
};
function si(t, e) {
  return window.getComputedStyle(t)[e];
}
function IE(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function AE(t, e, n) {
  const r = parseInt(si(t.dom, "paddingLeft"), 10), i = parseInt(si(t.dom, "paddingRight"), 10), s = parseInt(si(t.dom, "borderLeftWidth"), 10), o = parseInt(si(t.dom, "borderLeftWidth"), 10), a = t.dom.getBoundingClientRect();
  return {
    left: IE(e, a.left + r + s, a.right - i - o),
    top: n
  };
}
function xp(t) {
  var e;
  (e = t.parentNode) === null || e === void 0 || e.removeChild(t);
}
function TE(t, e) {
  const { doc: n } = e.view.state, r = vp({
    editor: e,
    x: t.clientX,
    y: t.clientY,
    direction: "right"
  });
  if (!r.resultNode || r.pos === null)
    return [];
  const i = t.clientX, s = AE(e.view, i, t.clientY), o = e.view.posAtCoords(s);
  if (!o)
    return [];
  const { pos: a } = o;
  if (!n.resolve(a).parent)
    return [];
  const d = n.resolve(r.pos), f = n.resolve(r.pos + 1);
  return Is(d, f, 0);
}
function EE(t, e) {
  const { view: n } = e;
  if (!t.dataTransfer)
    return;
  const { empty: r, $from: i, $to: s } = n.state.selection, o = TE(t, e), a = Is(i, s, 0), c = a.some((v) => o.find((x) => x.$from === v.$from && x.$to === v.$to)), d = r || !c ? o : a;
  if (!d.length)
    return;
  const { tr: f } = n.state, u = document.createElement("div"), h = d[0].$from.pos, m = d[d.length - 1].$to.pos, p = Le.create(n.state.doc, h, m), b = p.content();
  d.forEach((v) => {
    const x = n.nodeDOM(v.$from.pos), w = SE(x);
    u.append(w);
  }), u.style.position = "absolute", u.style.top = "-10000px", document.body.append(u), t.dataTransfer.clearData(), t.dataTransfer.setDragImage(u, 0, 0), n.dragging = { slice: b, move: !0 }, f.setSelection(p), n.dispatch(f), document.addEventListener("drop", () => xp(u), { once: !0 });
}
const Dd = (t, e) => {
  const n = t.resolve(e), { depth: r } = n;
  return r === 0 ? e : n.pos - n.parentOffset - 1;
}, _d = (t, e) => {
  const n = t.nodeAt(e), r = t.resolve(e);
  let { depth: i } = r, s = n;
  for (; i > 0; ) {
    const o = r.node(i);
    i -= 1, i === 0 && (s = o);
  }
  return s;
}, lo = (t, e) => {
  const n = xe.getState(t);
  return n ? sl(e, n.type, n.binding.mapping) : null;
}, DE = (t, e) => {
  const n = xe.getState(t);
  return n ? xi(n.doc, n.type, e, n.binding.mapping) || 0 : -1;
}, Ld = (t, e) => {
  let n = e;
  for (; n && n.parentNode && n.parentNode !== t.dom; )
    n = n.parentNode;
  return n;
}, yp = new Ue("dragHandle"), wp = ({ pluginKey: t = yp, element: e, editor: n, tippyOptions: r, onNodeChange: i }) => {
  const s = document.createElement("div");
  let o = null, a = !1, c = null, d = -1, f;
  return e.addEventListener("dragstart", (u) => {
    EE(u, n), setTimeout(() => {
      e && (e.style.pointerEvents = "none");
    }, 0);
  }), e.addEventListener("dragend", () => {
    e && (e.style.pointerEvents = "auto");
  }), new It({
    key: typeof t == "string" ? new Ue(t) : t,
    state: {
      init() {
        return { locked: !1 };
      },
      apply(u, h, m, p) {
        const b = u.getMeta("lockDragHandle"), v = u.getMeta("hideDragHandle");
        if (b !== void 0 && (a = b), v && o)
          return o.hide(), a = !1, c = null, d = -1, i?.({ editor: n, node: null, pos: -1 }), h;
        if (u.docChanged && d !== -1 && e && o)
          if (CE(u)) {
            const x = DE(p, f);
            x !== d && (d = x);
          } else {
            const x = u.mapping.map(d);
            x !== d && (d = x, f = lo(p, d));
          }
        return h;
      }
    },
    view: (u) => {
      var h;
      return e.draggable = !0, e.style.pointerEvents = "auto", (h = n.view.dom.parentElement) === null || h === void 0 || h.appendChild(s), s.appendChild(e), s.style.pointerEvents = "none", s.style.position = "absolute", s.style.top = "0", s.style.left = "0", {
        update(m, p) {
          if (!e)
            return;
          if (!n.isEditable) {
            o?.destroy(), o = null;
            return;
          }
          if (o || (o = dv(u.dom, {
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
            appendTo: s,
            content: e
          })), a ? e.draggable = !1 : e.draggable = !0, u.state.doc.eq(p.doc) || d === -1)
            return;
          let b = u.nodeDOM(d);
          if (b = Ld(u, b), b === u.dom || b?.nodeType !== 1)
            return;
          const v = u.posAtDOM(b, 0), x = _d(n.state.doc, v), w = Dd(n.state.doc, v);
          c = x, d = w, f = lo(u.state, d), i?.({ editor: n, node: c, pos: d }), o.setProps({
            getReferenceClientRect: () => b.getBoundingClientRect()
          });
        },
        // TODO: Kills even on hot reload
        destroy() {
          o?.destroy(), e && xp(s);
        }
      };
    },
    props: {
      handleDOMEvents: {
        mouseleave(u, h) {
          return a || h.target && !s.contains(h.relatedTarget) && (o?.hide(), c = null, d = -1, i?.({ editor: n, node: null, pos: -1 })), !1;
        },
        mousemove(u, h) {
          if (!e || !o || a)
            return !1;
          const m = vp({
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
          const b = u.posAtDOM(p, 0), v = _d(n.state.doc, b);
          if (v !== c) {
            const x = Dd(n.state.doc, b);
            c = v, d = x, f = lo(u.state, d), i?.({ editor: n, node: c, pos: d }), o.setProps({
              getReferenceClientRect: () => p.getBoundingClientRect()
            }), o.show();
          }
          return !1;
        }
      }
    }
  });
};
mn.create({
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
      wp({
        tippyOptions: this.options.tippyOptions,
        element: t,
        editor: this.editor,
        onNodeChange: this.options.onNodeChange
      })
    ];
  }
});
const _E = (t) => {
  const { className: e = "drag-handle", children: n, editor: r, pluginKey: i = yp, onNodeChange: s, tippyOptions: o } = t, [a, c] = F(null), d = W(null);
  return V(() => a ? r.isDestroyed ? () => {
    d.current = null;
  } : (d.current || (d.current = wp({
    editor: r,
    element: a,
    pluginKey: i,
    tippyOptions: o,
    onNodeChange: s
  }), r.registerPlugin(d.current)), () => {
    r.unregisterPlugin(i), d.current = null;
  }) : () => {
    d.current = null;
  }, [a, r, s, i, o]), Q.createElement("div", { className: e, ref: c }, n);
}, LE = ({ placeholder: t, translations: e, aiBlockConfig: n, imageUploadConfig: r }) => [Ru, Fu, Mu, Pu, zu, $u, ju, Bu, Hu, af, df, cf, Yy, Ok, zk, wk.configure({
  currentConfig: n
}), Ek, ...r ? [Dk(r)] : [], kk, uv, fv(t), hv(t), Fk({
  aiBlockConfig: n,
  translations: e,
  imageUploadConfig: r
})], OE = St({
  base: "flex flex-row items-center justify-center gap-2 p-3",
  variants: {
    variant: {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      neutral: "bg-f1-background-tertiary text-f1-foreground",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }
  },
  defaultVariants: {
    variant: "info"
  }
}), Od = (t) => t.isVisible !== !1, RE = (t) => "isVisible" in t ? t.isVisible !== !1 : !0, FE = (t) => !!t && "items" in t, ME = (t) => !!t && "label" in t && !("items" in t), PE = ({ primaryAction: t, secondaryActions: e = [], metadata: n, otherActions: r = [], banner: i }) => {
  const s = e.filter(Od), o = r.filter(RE), a = t && Od(t), c = s.length > 0, d = o.length > 0, f = c || d || a;
  return g("div", {
    className: "flex flex-col",
    children: [(n && n.length > 0 || f) && g("div", {
      className: "flex flex-col items-start justify-between gap-2 sm:px-6 px-0 py-4 sm:flex-row sm:items-center",
      children: [n && n.length > 0 && l(Po, {
        items: n
      }), g("div", {
        className: "flex flex-shrink-0 flex-row items-center gap-2",
        children: [d && l(Me, {
          items: o
        }), s.map((u, h) => l(j, {
          onClick: u.onClick,
          variant: u.variant || "outline",
          label: u.label,
          icon: u.icon,
          hideLabel: u.hideLabel,
          disabled: u.disabled,
          tooltip: u.tooltip
        }, h)), a && (c || d) && l("div", {
          className: "mx-1 h-4 w-px bg-f1-background-secondary-hover"
        }), a && ME(t) && l(j, {
          label: t.label,
          onClick: t.onClick,
          variant: "default",
          icon: t.icon,
          disabled: t.disabled,
          tooltip: t.tooltip
        }), a && FE(t) && l(on, {
          items: t.items,
          onClick: t.onClick,
          variant: "default",
          value: t.value,
          disabled: t.disabled,
          tooltip: t.tooltip
        })]
      })]
    }), i && g("div", {
      className: OE({
        variant: i.variant
      }),
      children: [l(q, {
        icon: i.icon
      }), l(Ve, {
        children: i.title
      })]
    })]
  });
}, zE = ({ value: t, onChange: e, placeholder: n, disabled: r = !1 }) => l("div", {
  className: "mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0",
  children: l("textarea", {
    ref: (o) => {
      o && (o.style.height = "auto", o.style.height = `${o.scrollHeight}px`);
    },
    disabled: r,
    value: t,
    onChange: (o) => {
      const a = o.target.value.replace(/[\r\n]/g, "");
      e?.(a), o.target.style.height = "auto", o.target.style.height = `${o.target.scrollHeight}px`;
    },
    onKeyDown: (o) => {
      o.key === "Enter" && o.preventDefault();
    },
    placeholder: n,
    className: "resize-none overflow-hidden font-semibold text-f1-foreground placeholder-f1-foreground-tertiary sm:text-[39px] sm:leading-[49px] text-[34px] leading-[42px]",
    rows: 1
  })
}), q_ = J(function({ onChange: e, placeholder: n, initialEditorState: r, readonly: i = !1, aiBlockConfig: s, imageUploadConfig: o, onTitleChange: a, primaryAction: c, secondaryActions: d, otherActions: f, metadata: u, banner: h, showBubbleMenu: m = !1, titlePlaceholder: p }, b) {
  const v = X(), x = W(null), w = W(null), y = Nl(), [E] = F(() => r?.content || ""), [S, k] = F(r?.title || ""), [I, T] = F(null), D = ($) => {
    switch ($) {
      case "file-too-large":
        return v.imageUpload.errors.fileTooLarge;
      case "invalid-type":
        return v.imageUpload.errors.invalidType;
      case "upload-failed":
        return v.imageUpload.errors.uploadFailed;
      default:
        return v.imageUpload.errors.uploadFailed;
    }
  };
  V(() => {
    a && a(S);
  }, [S, a]);
  const N = mv({
    extensions: LE({
      placeholder: n,
      translations: v,
      aiBlockConfig: s,
      imageUploadConfig: o ? {
        ...o,
        onError: ($) => {
          T($);
        }
      } : void 0
    }),
    content: E,
    onUpdate: ({ editor: $ }) => {
      e($.isEmpty ? {
        json: null,
        html: null
      } : {
        json: $.getJSON(),
        html: $.getHTML()
      });
    },
    editable: !i
  });
  Iu(b, () => ({
    clear: () => N?.commands.clearContent(),
    focus: () => N?.commands.focus(),
    setContent: ($) => N?.commands.setContent($),
    insertAIBlock: () => {
      !N || !s || N.chain().focus().insertContentAt(N.state.doc.content.size, [{
        type: "aiBlock",
        attrs: {
          data: {
            content: null,
            selectedAction: void 0
          },
          config: s,
          isCollapsed: !1
        }
      }, {
        type: "paragraph"
      }]).run();
    },
    insertTranscript: ($, U, Z) => {
      N && N.chain().focus().insertContentAt(N.state.doc.content.size, [{
        type: "transcript",
        attrs: {
          data: {
            title: $,
            users: U,
            messages: Z
          },
          isOpen: !1
        }
      }, {
        type: "paragraph"
      }]).run();
    },
    pushContent: ($) => {
      N && N.chain().focus().insertContentAt(N.state.doc.content.size, $).run();
    },
    insertImage: ($) => {
      !N || !o || Gf(N, $, {
        ...o,
        onError: (U) => {
          T(U);
        }
      });
    }
  }));
  const _ = z(() => ({
    offset: [0, 5]
  }), []), A = ne(({ node: $, pos: U }) => {
    w.current = $ ? {
      pos: U,
      nodeSize: $.nodeSize
    } : null;
  }, []), L = ne(() => {
    const $ = w.current;
    if (!$ || !N) return;
    const { pos: U, nodeSize: Z } = $, ae = N.state.doc.nodeAt(U);
    if (ae && ae.content.size === 0)
      N.chain().focus().setTextSelection(U + 1).insertContent("/").run();
    else {
      const K = U + Z;
      N.chain().focus().insertContentAt(K, {
        type: "paragraph"
      }).setTextSelection(K + 1).insertContent("/").run();
    }
  }, [N]), O = c || d && d.length > 0 || u && u.length > 0 || f && f.length > 0 || h, R = a || S;
  return N ? g("div", {
    className: "relative flex h-full w-full flex-col",
    ref: x,
    id: y,
    children: [O && l(PE, {
      primaryAction: c,
      secondaryActions: d,
      metadata: u,
      otherActions: f,
      banner: h
    }), I && l("div", {
      className: "mx-auto flex w-full max-w-[824px] px-14 py-2",
      children: g("div", {
        className: "flex w-max max-w-full items-center gap-4 rounded-md bg-f1-background-critical p-2 drop-shadow-sm",
        children: [g("div", {
          className: "flex w-full flex-row items-center gap-2",
          children: [l("div", {
            className: "flex-shrink-0",
            children: l(Lr, {
              size: "sm",
              type: "critical"
            })
          }), l("p", {
            className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
            title: D(I),
            children: D(I)
          })]
        }), l("div", {
          className: "flex-shrink-0",
          children: l(j, {
            variant: "outline",
            onClick: () => T(null),
            label: v.imageUpload.errors.dismiss,
            size: "sm"
          })
        })]
      })
    }), !i && !m && l("div", {
      className: "absolute bottom-8 left-1/2 z-50 max-w-[calc(100%-48px)] -translate-x-1/2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-2 shadow-md",
      children: l(pv, {
        editor: N,
        disableButtons: !1,
        showEmojiPicker: !1,
        plainHtmlMode: !1
      })
    }), g(Nt, {
      className: "h-full gap-6",
      children: [R && l(zE, {
        value: S,
        onChange: a ? k : void 0,
        placeholder: p,
        disabled: !a || i
      }), g("div", {
        className: "notes-text-editor h-full",
        onClick: () => N.commands.focus(),
        children: [!i && l(_E, {
          editor: N,
          tippyOptions: _,
          onNodeChange: A,
          children: g("div", {
            className: "flex flex-row",
            children: [l(nt, {
              compact: !0,
              variant: "ghost",
              size: "sm",
              className: "text-f1-foreground-tertiary",
              onClick: L,
              label: "Add paragraph",
              hideLabel: !0,
              icon: Ki
            }), l("div", {
              className: "flex cursor-move items-center justify-center p-0.5 text-f1-icon-secondary",
              draggable: !0,
              "data-drag-handle": !0,
              children: l(q, {
                icon: Dr,
                size: "xs"
              })
            })]
          })
        }), l(gv, {
          editor: N,
          className: "pb-28 [&>div]:mx-auto [&>div]:w-full [&>div]:max-w-[824px] [&>div]:transition-[padding] [&>div]:duration-300 sm:[&>div]:px-14 [&>div]:px-0"
        })]
      })]
    }), !i && l(bv, {
      editorId: y,
      editor: N,
      disableButtons: !1,
      isToolbarOpen: !m,
      isFullscreen: !1,
      plainHtmlMode: !1
    })]
  }) : null;
}), K_ = ({ withHeader: t = !1, withTitle: e = !0, withToolbar: n = !0 }) => g("div", {
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
  }), g(Nt, {
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
}), ma = {
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
}, $E = St({
  base: "grid grid-cols-1",
  variants: {
    tileSize: {
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...ma
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), jE = Q.forwardRef(function({ className: e, gap: n, children: r, tileSize: i, ...s }, o) {
  return l("div", {
    className: C("@container", "grow"),
    ref: o,
    ...s,
    children: l("div", {
      className: C($E({
        gap: n,
        tileSize: i
      }), e),
      ref: o,
      ...s,
      children: r
    })
  });
}), BE = St({
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
}), kp = J(function({ className: e, grow: n, basis: r, shrink: i, paddingX: s, paddingY: o, inline: a, overflow: c, maxWidth: d, justifyContent: f, alignItems: u, height: h, width: m, ...p }, b) {
  return l("div", {
    className: C(BE({
      paddingX: s,
      basis: r,
      paddingY: o,
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
}), HE = St({
  base: "flex-row",
  variants: {
    gap: {
      ...ma
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), VE = Q.forwardRef(function({ className: e, gap: n, wrap: r, ...i }, s) {
  return l(kp, {
    className: C(HE({
      gap: n,
      wrap: r
    }), e),
    ref: s,
    ...i
  });
}), WE = St({
  base: "flex-col",
  variants: {
    gap: {
      ...ma
    }
  },
  defaultVariants: {}
}), UE = J(function({ className: e, gap: n, children: r, ...i }, s) {
  return l(kp, {
    className: C(WE({
      gap: n
    }), e),
    ref: s,
    ...i,
    children: r
  });
}), J_ = pt({
  name: "Stack",
  type: "layout"
}, UE), Y_ = pt({
  name: "Split",
  type: "layout"
}, VE), Q_ = pt({
  name: "AutoGrid",
  type: "layout"
}, jE), GE = ({ children: t }) => {
  const { enabled: e } = qu();
  return l("div", {
    className: C("inline-flex ring-1 ring-inset ring-transparent transition-all duration-150", e && "select-none overflow-hidden rounded-sm bg-f1-background-tertiary ring-f1-border-secondary"),
    "aria-hidden": e,
    children: l(G.div, {
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
}, qE = () => l("div", {
  className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary"
}), KE = J(function({ header: e, children: n, action: r, summaries: i, alert: s, status: o, fullHeight: a = !1 }, c) {
  const { enabled: d, toggle: f } = qu();
  V(() => {
    if (s && o)
      throw Error("You cannot pass both alert and status at the same time to this component");
  }, [s, o]);
  const u = (m) => !!m && !(Q.isValidElement(m) && m.type === Q.Fragment && Q.Children.count(m.props.children) === 0), h = () => {
    e?.link?.onClick?.();
  };
  return g(ns, {
    className: C(a ? "h-full" : "", "relative flex gap-3 border-f1-border-secondary"),
    ref: c,
    children: [e && l(rs, {
      className: "-mr-1 -mt-1",
      children: g("div", {
        className: "flex w-full flex-1 flex-col gap-4",
        children: [g("div", {
          className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2",
          children: [g("div", {
            className: "flex min-h-6 grow flex-row items-center gap-1 truncate",
            children: [e.title && l(is, {
              className: "truncate",
              children: e.title
            }), e.subtitle && g("div", {
              className: "flex flex-row items-center gap-1",
              children: [l(qE, {}), l(Ku, {
                className: "truncate",
                children: e.subtitle
              })]
            }), e.info && l(dt, {
              label: e.info,
              children: l(q, {
                icon: Qi,
                size: "sm",
                className: "text-f1-foreground-secondary"
              })
            }), e.count && l("div", {
              className: "ml-0.5",
              children: l(_r, {
                value: e.count
              })
            })]
          }), g("div", {
            className: "flex flex-row items-center gap-3",
            children: [s && l(Ju, {
              text: s,
              level: "critical"
            }), o && l(Fn, {
              text: o.text,
              variant: o.variant
            }), e.link && l(vv, {
              onClick: h,
              href: e.link.url,
              title: e.link.title,
              icon: e.link.icon
            })]
          })]
        }), e.comment && g("div", {
          className: "flex flex-row items-center gap-3 overflow-visible",
          children: [l(GE, {
            children: l(xv, {
              children: e.comment
            })
          }), !!e.canBeBlurred && l("span", {
            children: l(j, {
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
    }), g(ss, {
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
        children: [p > 0 && l(yv, {
          bare: !0
        }), m]
      }, p))]
    }), r && l(wv, {
      children: l(j, {
        variant: "neutral",
        size: "sm",
        ...r
      })
    })]
  });
}), JE = St({
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), YE = J(function({ header: e, height: n }, r) {
  return g(ns, {
    className: C("flex gap-4 border-f1-border-secondary", n === "full" && "h-full"),
    ref: r,
    "aria-live": "polite",
    "aria-busy": !0,
    children: [l(rs, {
      className: "-mr-1 -mt-1",
      children: g("div", {
        className: "flex h-6 w-full flex-row items-center gap-1.5",
        "aria-hidden": !0,
        children: [e?.title ? l(is, {
          children: e.title
        }) : l(M, {
          className: "h-4 w-full max-w-16"
        }), e?.subtitle && l(Ku, {
          children: e.subtitle
        })]
      })
    }), l(ss, {
      "aria-hidden": !0,
      className: C(n !== "full" && JE({
        height: n
      })),
      children: [...Array(4)].map((i, s) => l(M, {
        className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][s]}`
      }, s))
    })]
  });
}), Ln = oe("Widget", Ne(KE, YE)), tt = Object.assign(J(function({ chart: e, summaries: n, ...r }, i) {
  return l(Ln, {
    ref: i,
    ...r,
    summaries: n,
    children: e && l("div", {
      className: "min-h-52 min-w-52 grow pt-2",
      children: e
    })
  });
}), {
  Skeleton: Ln.Skeleton
}), QE = Ne(J(function({ canBeBlurred: e, ...n }, r) {
  const i = {
    ...n,
    header: {
      ...n.header,
      canBeBlurred: e
    }
  }, s = {
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
      ...s,
      canBeBlurred: e
    })
  });
}), tt.Skeleton), XE = oe("AreaChartWidget", QE), ZE = J(function(e, n) {
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
}), eD = oe("BarChartWidget", Ne(ZE, tt.Skeleton)), tD = Ne(J(function(e, n) {
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
}), tt.Skeleton), nD = oe("LineChartWidget", tD), rD = Ne(J(function(e, n) {
  return l(tt, {
    ref: n,
    ...e,
    chart: l(Sv, {
      ...e.chart
    })
  });
}), tt.Skeleton), iD = oe("PieChartWidget", rD), sD = Ne(J(function(e, n) {
  return l(tt, {
    ref: n,
    ...e,
    chart: null
  });
}), tt.Skeleton), oD = oe("SummariesWidget", sD), lD = Ne(J(function(e, n) {
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
}), tt.Skeleton), aD = oe("VerticalBarChartWidget", lD), X_ = pt({
  name: "AreaChartWidget",
  type: "info"
}, XE), Z_ = pt({
  name: "BarChartWidget",
  type: "info"
}, eD), eL = pt({
  name: "LineChartWidget",
  type: "info"
}, nD), tL = pt({
  name: "PieChartWidget",
  type: "info"
}, iD), nL = pt({
  name: "VerticalBarChartWidget",
  type: "info"
}, aD), rL = pt({
  name: "SummariesWidget",
  type: "info"
}, oD), cD = (t, e) => g("svg", {
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
}), dD = J(cD), uD = (t, e) => g("svg", {
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
}), fD = J(uD), hD = {
  "line-chart": "border-f1-border",
  "bar-chart": "border-f1-border-promote"
}, mD = {
  "line-chart": "min-h-48",
  "bar-chart": "min-h-64"
}, pD = {
  "line-chart": "from-f1-background-accent",
  "bar-chart": "from-f1-background-promote"
}, gD = {
  "line-chart": "default",
  "bar-chart": "promote"
}, bD = J(function({ title: e, content: n, buttonLabel: r, buttonIcon: i, buttonAction: s, type: o }, a) {
  const c = hD[o], d = mD[o], f = pD[o], u = gD[o];
  return g(ns, {
    className: C("relative flex gap-4 overflow-hidden border-dashed", c),
    ref: a,
    children: [l(rs, {
      className: "-mt-0.5",
      children: l(is, {
        children: e
      })
    }), g(ss, {
      className: C("flex flex-col gap-4", d),
      children: [g("div", {
        className: C("absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30", f),
        children: [o === "bar-chart" && l("div", {
          className: "absolute bottom-1 left-4 right-4",
          children: l(dD, {
            className: "w-full"
          })
        }), o === "line-chart" && l(fD, {
          className: "w-full"
        })]
      }), g("div", {
        className: "relative flex min-h-28 flex-1 flex-col items-start gap-5",
        children: [l("p", {
          className: "flex w-3/4 text-xl font-semibold",
          children: n
        }), r && l(j, {
          label: r,
          icon: i,
          variant: u,
          onClick: s
        })]
      })]
    })]
  });
}), iL = oe("ChartWidgetEmptyState", bD);
function vD(t, e) {
  const n = W(null), r = W(null), [i, s] = F({
    visibleItems: [],
    overflowItems: []
  });
  mo({
    ref: n,
    onResize: () => {
      d();
    }
  });
  const o = ne((f, u, h) => u < h - 1 ? f + e : f, [e]), a = ne(() => {
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
      m = b, m = o(m, p, f.length), h++;
    }
    return h;
  }, [o]), d = ne(() => {
    if (!n.current || t.length === 0) return;
    const f = n.current.clientHeight, u = a(), h = c(u, f);
    s(h === 0 ? {
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
const As = function({ items: e, renderListItem: n, className: r, gap: i = 0, minSize: s, onVisibleItemsChange: o }) {
  const { containerRef: a, measurementContainerRef: c, visibleItems: d } = vD(e, i);
  return V(() => {
    o?.(d);
  }, [o, d]), g("div", {
    ref: a,
    className: C("relative flex h-full flex-col", r),
    style: {
      minHeight: `${s}px`
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
As.displayName = "VerticalOverflowList";
const sL = ({ events: t, showAllItems: e, gap: n = 8, minSize: r = 184 }) => t.length ? e ? l("div", {
  className: "flex flex-col",
  children: t.map((i) => l(Mo, {
    ...i
  }, i.title))
}) : l(As, {
  items: t,
  gap: n,
  minSize: r,
  renderListItem: (i) => l(Mo, {
    ...i
  }, i.title)
}) : null;
function oL({ title: t, subtitle: e, data: n, helpText: r, legend: i = !1, hideTooltip: s = !1 }) {
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
        hideTooltip: s
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
const Cp = (t, e) => ((e ?? 0) < -1 * (t ?? 0) ? -1 * t : e) ?? 0, xD = ({
  data: t = [],
  labels: e,
  trackedMinutes: n,
  remainingMinutes: r,
  canSeeRemainingTime: i = !0
}) => {
  const o = t[t.length - 1]?.variant || "clocked-out", a = {
    "clocked-out": e.clockedOut,
    "clocked-in": e.clockedIn,
    break: e.onBreak
  }[o], c = (() => {
    if (!i || r === void 0) return;
    const f = Cp(
      n,
      r
    ), u = Math.abs(f), h = Math.floor(u / 60), m = Math.floor(u % 60), p = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    return r >= 0 ? `${e.remainingTime} ${p}` : `${e.overtime} ${p}`;
  })(), d = nn[o];
  return {
    status: o,
    statusText: a,
    subtitle: c,
    statusColor: d
  };
}, ao = "--:--", yD = (t, e) => {
  if (t && t > 0)
    return {
      value: t * 60 / e,
      color: nn.empty
    };
  if (!e)
    return {
      value: 1,
      color: nn.empty
    };
}, wD = ({
  data: t = [],
  trackedMinutes: e,
  remainingMinutes: n = 0
}) => {
  const r = n < 0 && n < -1 * e, i = Cp(
    e,
    n
  ), s = t.reduce(
    (f, u) => f + (u.to.getTime() - u.from.getTime()) / 1e3,
    0
  ) + (i ?? 0) * 60, o = r || (i ?? 0) < 0 ? void 0 : yD(
    i ?? 0,
    s
  );
  let a = (i ?? 0) < 0 ? Math.abs(i ?? 0) * 60 : 0, d = [
    ...[...t].reverse().reduce(
      (f, u) => {
        const h = (u.to.getTime() - u.from.getTime()) / 1e3, m = u.variant === "clocked-in" ? Math.min(h, a) : 0, b = (h - m) / s;
        return a -= m, u.variant === "clocked-in" && r ? [
          ...f,
          {
            value: m / s + b,
            color: nn.overtime
          }
        ] : [
          ...f,
          {
            value: m / s,
            color: nn.overtime
          },
          {
            value: b,
            color: nn[u.variant]
          }
        ];
      },
      []
    ).reverse(),
    ...o ? [o] : []
  ];
  return d = d.filter((f) => f.value > 0), d.length || d.push({
    value: 1,
    color: nn.empty
  }), d;
}, kD = ({
  data: t = [],
  remainingMinutes: e,
  trackedMinutes: n = 0
}) => {
  const r = t.find((h) => h.variant === "clocked-in")?.from, i = t.at(-1), s = r ? Fa(r) : ao, o = e === void 0 || e > 0 ? ao : i ? Fa(i.to) : ao, c = i?.variant === "break" ? i?.to.getTime() - i?.from.getTime() || 0 : n * 60 * 1e3, d = Math.floor(c / (1e3 * 60 * 60)), f = Math.floor(c % (1e3 * 60 * 60) / (1e3 * 60)), u = `${d.toString().padStart(2, "0")}:${f.toString().padStart(2, "0")}`;
  return {
    primaryLabel: s,
    secondaryLabel: o,
    time: u
  };
}, nn = {
  "clocked-in": "hsl(var(--positive-50))",
  break: "hsl(var(--promote-50))",
  empty: "hsl(var(--neutral-10))",
  "clocked-out": "hsl(var(--neutral-10))",
  overtime: "hsl(var(--warning-50))"
};
function CD({ data: t = [], trackedMinutes: e = 0, remainingMinutes: n }) {
  const r = wD({
    data: t,
    trackedMinutes: e,
    remainingMinutes: n
  }), { primaryLabel: i, secondaryLabel: s, time: o } = kD({
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
        children: o
      })
    }), g("div", {
      className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary",
      children: [l("span", {
        className: "text-sm font-medium opacity-60",
        children: i
      }), l("span", {
        className: "text-sm font-medium opacity-60",
        children: s
      })]
    })]
  });
}
function ND({ text: t, placeholder: e, icon: n, onClick: r }) {
  return g("div", {
    className: "flex cursor-default flex-row items-center gap-1 rounded-xs px-1 py-0.5 hover:bg-f1-background-hover",
    onClick: r,
    children: [n && l(q, {
      icon: n,
      className: "text-f1-icon"
    }), l("span", {
      className: C("font-medium", t ? "text-f1-foreground" : "text-f1-foreground-secondary"),
      children: t ?? e
    }), l(q, {
      icon: Vb
    })]
  });
}
function lL({ trackedMinutes: t, remainingMinutes: e, data: n = [], labels: r, locationId: i, locations: s, canShowLocation: o = !0, locationSelectorDisabled: a = !1, onClockIn: c, onClockOut: d, onBreak: f, breakTypes: u, onChangeBreakTypeId: h, canShowBreakButton: m = !0, canSeeGraph: p = !0, canSeeRemainingTime: b = !0, onChangeLocationId: v, canShowProject: x = !0, projectSelectorElement: w, breakTypeName: y }) {
  const { status: E, statusText: S, subtitle: k, statusColor: I } = xD({
    data: n,
    labels: r,
    trackedMinutes: t,
    remainingMinutes: e,
    canSeeRemainingTime: b
  }), T = E === "clocked-out", D = u?.map((K) => ({
    value: K.id,
    label: K.duration ? `${K.name} · ${K.duration}` : K.name,
    description: K.description,
    tag: K.isPaid ? r.paid : r.unpaid
  })) ?? [], [N, _] = F(!1), A = () => {
    if (D.length > 1)
      N || _(!0);
    else {
      const K = D?.[0]?.value;
      f?.(K);
    }
  }, L = (K) => {
    h?.(K), _(!1), f?.(K);
  }, O = T && s.length && !a && o, R = s.find((K) => K.id === i), $ = s.map((K) => ({
    value: K.id,
    label: K.name,
    icon: K.icon
  })), U = E === "break", [Z, ae] = F(!1);
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
                children: S
              }), g("div", {
                className: "relative aspect-square h-4",
                children: [l(G.div, {
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
            children: [E === "clocked-out" && l("div", {
              className: "mr-3 @xs:mr-0",
              children: l(j, {
                onClick: c,
                label: r.clockIn,
                icon: Ia
              })
            }), E === "clocked-in" && g(ee, {
              children: [m && l(ee, {
                children: D.length > 1 && h ? l(dr, {
                  label: r.break,
                  hideLabel: !0,
                  value: "",
                  options: D,
                  onChange: L,
                  open: N,
                  onOpenChange: _,
                  selectContentClassName: "min-w-80",
                  children: l("div", {
                    "aria-label": "Select break type",
                    children: l(j, {
                      label: r.break,
                      variant: "neutral",
                      icon: Aa,
                      hideLabel: !0
                    })
                  })
                }) : l(j, {
                  onClick: A,
                  label: r.break,
                  variant: "neutral",
                  icon: Aa,
                  hideLabel: !0
                })
              }), l(j, {
                onClick: d,
                label: r.clockOut,
                variant: "neutral",
                icon: Ta
              })]
            }), E === "break" && g(ee, {
              children: [l(j, {
                onClick: d,
                label: r.clockOut,
                variant: "neutral",
                icon: Ta,
                hideLabel: !0
              }), l(j, {
                onClick: c,
                label: r.resume,
                icon: Ia
              })]
            })]
          })]
        }), p && l(CD, {
          data: n,
          trackedMinutes: t,
          remainingMinutes: b ? e : 0
        })]
      }), l("div", {
        className: "mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start",
        children: O ? g(ee, {
          children: [l(dr, {
            label: r.selectLocation,
            hideLabel: !0,
            value: i,
            options: $,
            onChange: v,
            open: Z,
            onOpenChange: ae,
            disabled: a,
            children: l("div", {
              "aria-label": "Select location",
              children: l(ND, {
                text: R?.name,
                placeholder: r.selectLocation,
                icon: R?.icon
              })
            })
          }), x && w]
        }) : g(ee, {
          children: [o && R && l(ee, {
            children: l(ln, {
              text: R.name,
              icon: R.icon
            })
          }), x && w, U && y && l(ln, {
            text: y
          })]
        })
      })]
    })
  });
}
const SD = ({ onClick: t, children: e }) => {
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
function aL({ label: t, count: e, icon: n, iconClassName: r, onClick: i }) {
  return l(SD, {
    onClick: i,
    children: g("div", {
      className: C("flex flex-col gap-0.5 rounded-md border border-solid border-f1-border-secondary px-3 py-2.5", i && "hover:border-f1-border-hover"),
      children: [g("div", {
        className: "flex flex-row items-center",
        children: [l("p", {
          className: "line-clamp-1 flex-1 text-f1-foreground-secondary",
          children: t
        }), l(q, {
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
const ID = J(function({ content: e, label: n, color: r, ...i }, s) {
  return g("div", {
    className: "flex flex-col gap-1",
    ref: s,
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
        children: l(q, {
          icon: i.icon
        })
      }), "emoji" in i && i.emoji && l("span", {
        className: C("flex", r),
        children: l(Er, {
          emoji: i.emoji,
          size: "md"
        })
      })]
    })]
  }, n);
}), cL = J(function({ items: e }, n) {
  return l("div", {
    ref: n,
    className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
    children: e.map(({ label: r, content: i, color: s, ...o }) => l(ID, {
      label: r,
      content: i,
      color: s,
      ...o
    }, `${r}-${i}`))
  });
}), AD = ({ onClick: t, withEmoji: e, withPointerCursor: n, children: r }) => {
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
function dL({ id: t, title: e, subtitle: n, avatars: r, remainingCount: i, withPointerCursor: s = !1, onClick: o, ...a }) {
  return g(AD, {
    onClick: (d) => {
      d.preventDefault(), o?.(t);
    },
    withEmoji: "emoji" in a && !!a.emoji,
    withPointerCursor: s,
    children: ["alert" in a && a.alert && l(Lr, {
      type: a.alert
    }), "emoji" in a && a.emoji && l(wu, {
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
      children: l(El, {
        avatars: r,
        remainingCount: i,
        size: "emoji" in a && a.emoji ? "md" : "sm",
        type: "person"
      })
    })]
  });
}
const TD = ({ onClick: t, className: e, children: n }) => t ? l("a", {
  className: e,
  onClick: t,
  tabIndex: 0,
  children: n
}) : l("div", {
  className: e,
  tabIndex: -1,
  children: n
});
function Rd({ id: t, title: e, subtitle: n, onClick: r, module: i }) {
  const s = C("flex flex-row gap-2 rounded-md border border-solid border-transparent p-2 text-f1-foreground", r ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
  return g(TD, {
    onClick: (a) => {
      a.preventDefault(), r?.(t);
    },
    className: s,
    children: [l(pu, {
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
const ED = ({ onClick: t, className: e, children: n }) => t ? l("a", {
  className: e,
  onClick: t,
  tabIndex: 0,
  children: n
}) : l("div", {
  className: e,
  tabIndex: -1,
  children: n
});
function ol({ id: t, title: e, alert: n, rawTag: r, count: i, icon: s, rightIcon: o, iconClassName: a = "text-f1-icon-secondary", rightIconClassName: c = "text-f1-icon-secondary", onClick: d }) {
  const f = C("flex flex-row items-start gap-1 rounded-md border border-solid border-transparent px-2 py-1.5 text-f1-foreground", d ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0);
  return g(ED, {
    onClick: (h) => {
      h.preventDefault(), d?.(t);
    },
    className: f,
    children: [g("div", {
      className: "flex flex-1 flex-row items-start gap-1",
      children: [s && l(q, {
        icon: s,
        size: "md",
        className: C("mt-0.5", a)
      }), l("p", {
        className: "mt-0.5 line-clamp-2 font-medium",
        children: e
      }), o && l(q, {
        icon: o,
        size: "md",
        className: C("mt-0.5", c)
      })]
    }), g("div", {
      className: "flex flex-row items-center gap-2",
      children: [n && l(Ju, {
        ...n
      }), r && l(ln, {
        ...r
      }), !!i && l(_r, {
        value: i
      })]
    })]
  });
}
function uL({ items: t, minSize: e = 184, onClickItem: n, showAllItems: r, onVisibleItemsChange: i }) {
  return r ? l("div", {
    className: "flex flex-col gap-2",
    children: t.map((s) => l(Rd, {
      ...s,
      onClick: n
    }, s.id))
  }) : l(As, {
    items: t,
    minSize: e,
    renderListItem: (s) => l(Rd, {
      ...s,
      onClick: n
    }, s.id),
    onVisibleItemsChange: i,
    gap: 8
  });
}
function fL({ items: t, gap: e, minSize: n = 184, onClickItem: r, showAllItems: i }) {
  return i ? l("div", {
    className: "flex flex-col",
    style: {
      minHeight: `${n}px`
    },
    children: t.map((s) => l(ol, {
      ...s,
      onClick: r
    }, s.id))
  }) : l(As, {
    items: t,
    gap: e,
    renderListItem: (s) => l(ol, {
      ...s,
      onClick: r
    }),
    minSize: n
  });
}
function DD({ task: t, status: e, onClick: n, hideIcon: r = !1 }) {
  const i = () => {
    n?.(t);
  }, s = z(() => {
    if (!r) {
      if (e === "todo")
        return Wb;
      if (e === "in-progress")
        return Ub;
    }
  }, [e, r]);
  return l(ol, {
    id: t.id,
    title: t.text,
    icon: s,
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
function hL({ tasks: t, onClickTask: e, hideIcons: n = !1, maxTasksToShow: r = 5, emptyMessage: i = "No tasks assigned" }) {
  const o = [{
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
  }))), a = !o.length;
  return l("div", {
    className: "flex flex-col gap-0",
    children: a ? l("p", {
      className: "pl-2 font-medium",
      children: i
    }) : o.slice(0, r).map((c) => l(DD, {
      task: c,
      status: c.status,
      hideIcon: n,
      onClick: e
    }, c.id))
  });
}
const _D = ({ title: t, info: e }) => g("div", {
  className: "flex items-center justify-between",
  children: [l("p", {
    className: "flex text-f1-foreground-secondary",
    children: t
  }), l("div", {
    className: "max-w-32 flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-right font-medium",
    children: e
  })]
}), mL = J(function({ title: e, titleValue: n, titleTooltip: r, list: i }, s) {
  return g("div", {
    ref: s,
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
            children: l(q, {
              icon: Qi,
              size: "sm"
            })
          })
        })]
      }), n && l("div", {
        children: n
      })]
    }), i.map((o) => l(_D, {
      title: o.title,
      info: o.info
    }, o.title))]
  });
});
var LD = Object.defineProperty, OD = Object.defineProperties, RD = Object.getOwnPropertyDescriptors, Gi = Object.getOwnPropertySymbols, Np = Object.prototype.hasOwnProperty, Sp = Object.prototype.propertyIsEnumerable, Fd = (t, e, n) => e in t ? LD(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, et = (t, e) => {
  for (var n in e || (e = {})) Np.call(e, n) && Fd(t, n, e[n]);
  if (Gi) for (var n of Gi(e)) Sp.call(e, n) && Fd(t, n, e[n]);
  return t;
}, Ts = (t, e) => OD(t, RD(e)), FD = (t, e) => {
  var n = {};
  for (var r in t) Np.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Gi) for (var r of Gi(t)) e.indexOf(r) < 0 && Sp.call(t, r) && (n[r] = t[r]);
  return n;
}, MD = (t) => t.right - t.left < 5 || t.bottom && t.bottom - t.top < 5, PD = ({ spotsList: t, usedSpot: e }) => t.some((n) => n !== e && e.left === n.left), zD = ({ position: t, spot: e, stone: n }) => {
  if (t.left > e.left && e.right >= t.left && t.top + n.height > e.top) {
    if (e.bottom && e.bottom < t.top) return e;
    let r = et({}, e);
    return r.right = t.left, r;
  }
  return null;
}, $D = ({ position: t, stone: e, spot: n }) => {
  if (t.left + e.width > n.left && t.top >= n.top) {
    if (n.bottom && n.bottom < t.top || n.right < t.left) return n;
    let r = et({}, n);
    return r.bottom = t.top, r;
  }
  return null;
}, jD = ({ stone: t, position: e, spotsList: n, optimalSpot: r }) => {
  let i = et({}, r);
  return i.left = e.left + t.width, MD(i) || PD({ usedSpot: i, spotsList: n }) ? null : i;
}, BD = ({ spots: t, position: e, optimalSpot: n, stone: r }) => t.map((i, s, o) => {
  if (i === n) return jD({ stone: r, position: e, optimalSpot: n, spotsList: o });
  let a = zD({ position: e, spot: i, stone: r });
  return a || $D({ position: e, stone: r, spot: i }) || i;
});
function HD(t, e) {
  for (let n = 0, r = e.length; n < r; n++) {
    let i = e[n];
    if (t(i)) return i;
  }
  return null;
}
var VD = (t, e) => e.filter(t), WD = (t, e) => [...e].sort(t), UD = (t, e) => t.top === e.top ? t.left < e.left ? -1 : 1 : t.top < e.top ? -1 : 1, GD = (t) => WD(UD, t), qD = ({ availableSpots: t, optimalSpot: e, containerSize: n, stone: r }) => {
  let i = { right: n, top: e.top + r.height, left: e.left };
  e.bottom && (i.bottom = e.bottom);
  for (let s = 0, o = t.length; s < o; s += 1) {
    let a = t[s];
    if (i.left < a.left && i.top < a.top) {
      i.right = a.left;
      break;
    }
  }
  return i;
}, KD = (t, e) => {
  let n = t.right - t.left >= e.width;
  if (!t.bottom) return n;
  let r = t.bottom - t.top >= e.height;
  return n && r;
}, JD = ({ availableSpots: t, stone: e }) => HD((n) => KD(n, e), t);
function YD({ stone: t, availableSpots: e, containerSize: n }) {
  let r = JD({ availableSpots: e, stone: t }), i = { left: r.left, top: r.top }, s = qD({ optimalSpot: r, availableSpots: e.filter((c) => c !== r), stone: t, containerSize: n }), o = [...e, s], a = BD({ spots: o, position: i, optimalSpot: r, stone: t });
  return o = [...VD(Boolean, a)], o = GD(o), { position: i, availableSpots: o };
}
var QD = ({ stones: t, containerSize: e }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!t.length) return n;
  let r = 0, i = [], s = [{ top: 0, left: 0, right: e }];
  for (let o of t) {
    let a = YD({ availableSpots: s, stone: o, containerSize: e }), c = a.position.top + o.height;
    r < c && (r = c), i.push(a.position), s = a.availableSpots;
  }
  return { availableSpots: s, positions: i, containerHeight: r };
}, XD = (t) => t.reduce((e, n) => {
  if (!n) return e;
  let r = n.getBoundingClientRect();
  return e.push({ width: r.width, height: r.height }), e;
}, []), ZD = ({ boxesRefs: t, wrapperRef: e, children: n, windowWidth: r, wrapperWidth: i }) => {
  let [{ positions: s, containerHeight: o, stones: a, availableSpots: c }, d] = F({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return V(() => {
    var f, u;
    let h = XD(t.current), m = (u = (f = e.current) == null ? void 0 : f.offsetWidth) != null ? u : 0;
    if (m === null) return;
    let p = QD({ stones: h, containerSize: m });
    d(Ts(et({}, p), { stones: h }));
  }, [n, t, e, r, i]), { positions: s, containerHeight: o, stones: a, availableSpots: c };
}, e_ = (t) => ({ fade: `${t}ms opacity ease`, fadeMove: `
    ${t}ms opacity ease,
    ${t}ms top ease,
    ${t}ms left ease
  `, move: `
    ${t}ms top ease,
    ${t}ms left ease
  ` }), t_ = ({ transition: t, transitionDuration: e }) => t ? { transition: e_(e)[t] } : null, n_ = (t) => t ? Ts(et({}, t), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, r_ = ({ style: t, position: e, transition: n, transitionDuration: r }) => et(et(Ts(et({}, t), { position: "absolute" }), n_(e)), t_({ transition: n, transitionDuration: r }));
function i_(t, e, n) {
  let r;
  return function(...i) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, t.apply(null, i);
    }, e);
  };
}
var s_ = () => {
  let [t, e] = F(), n = W(i_(e, 300));
  return V(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), t;
}, o_ = (t) => {
  let [e, n] = F(null);
  return V(() => {
    let r = new ResizeObserver((i) => {
      for (let s of i) n(s.contentRect.width);
    });
    return t.current && r.observe(t.current), () => {
      r.disconnect();
    };
  }, [t]), e;
}, l_ = (t) => {
  var e = t, { children: n, style: r, transition: i = !1, transitionDuration: s = 500, transitionStep: o = 50 } = e, a = FD(e, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let c = W([]), d = W(null), f = s_(), u = o_(d), { positions: h, containerHeight: m } = ZD({ boxesRefs: c, wrapperRef: d, children: n, windowWidth: f, wrapperWidth: u }), p = et({ minHeight: m ?? 0, position: "relative" }, r);
  return l("div", Ts(et({ ref: d, style: p }, a), { children: Tu.map(n, (b, v) => {
    if (typeof b != "object" || !b || !("type" in b)) return b;
    let x = { style: r_({ style: b.props.style, position: h[v], transition: i, transitionDuration: s }), ref: (w) => c.current[v] = w };
    return Sl(b, et(et({}, b.props), x));
  }) }));
};
const a_ = {
  sm: 340,
  md: 480,
  lg: 640
}, Md = J(function({ children: e, widgetWidth: n = "sm" }, r) {
  const i = a_[n], [s, o] = F(), a = Tu.toArray(e), c = W(null);
  return V(() => {
    const d = () => {
      const f = c.current?.offsetWidth;
      f && o(Math.floor(f / i) || 1);
    };
    return d(), window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d);
    };
  }, [o, i]), l("div", {
    ref: r,
    className: "text-f1-foreground",
    children: l("div", {
      ref: c,
      children: s === 1 ? l("div", {
        className: "flex flex-col gap-4 *:shadow",
        children: e
      }) : s && s > 1 && l("div", {
        className: "relative -mr-4",
        children: l(l_, {
          children: a.map((d, f) => l("div", {
            style: {
              width: `${Math.floor(1 / s * 1e4) / 100 - 0.05}%`
            },
            className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
            children: d
          }, f))
        }, s)
      })
    })
  });
}), c_ = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], pL = Ne(Md, () => l(Su, {
  children: l(Md, {
    children: c_.map((t, e) => l(Ln.Skeleton, {
      height: t
    }, e))
  })
})), Pd = ({ children: t }) => l("div", {
  className: "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground @container [&>div]:min-w-[calc(100vw-64px)] @2xl:[&>div]:min-w-[calc(50vw-48px)]",
  children: t
}), gL = Ne(J(function({ children: e }, n) {
  return l(Nt, {
    ref: n,
    showBar: !1,
    children: l(Pd, {
      children: e
    })
  });
}), () => l(Su, {
  orientation: "horizontal",
  children: g(Pd, {
    children: [l(Ln.Skeleton, {}), l(Ln.Skeleton, {}), l(Ln.Skeleton, {})]
  })
}));
function d_({ title: t, description: e, emoji: n, actions: r }) {
  if ((r?.length ?? 0) > 2)
    throw Error("You can only provide up to two actions for the WidgetEmptyState");
  return l(Oh, {
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
const bL = oe("WidgetEmptyState", d_), Ip = J(({ title: t, children: e }, n) => (qb(t, {
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
Ip.displayName = "WidgetSection";
const vL = oe("WidgetSection", Ip), xL = pt(
  {
    name: "ScrollArea",
    type: "layout"
  },
  Nt
);
export {
  I_ as ActivityItemList,
  KC as ActivityItemListSkeleton,
  Uk as AiPromotionChat,
  Gk as AiPromotionChatProvider,
  O_ as ApplicationFrame,
  X_ as AreaChartWidget,
  Q_ as AutoGrid,
  cb as Badge,
  Z_ as BarChartWidget,
  qC as BaseActivityItemList,
  OL as BaseBanner,
  ZC as BaseCelebration,
  cN as BaseCommunityPost,
  kL as BaseTabs,
  CL as BreadcrumbSelect,
  xx as Breadcrumbs,
  Mo as CalendarEvent,
  sL as CalendarEventList,
  RL as CardSelectable,
  FL as CardSelectableContainer,
  o0 as Carousel,
  oL as CategoryBarSection,
  A_ as Celebration,
  eN as CelebrationSkeleton,
  iL as ChartWidgetEmptyState,
  lL as ClockInControls,
  x_ as CoCreationForm,
  E_ as CommunityPost,
  dN as CommunityPostSkeleton,
  VN as CompanySelector,
  _r as Counter,
  pL as Dashboard,
  R_ as DaytimePage,
  LN as DetailsItem,
  __ as DetailsItemsList,
  U_ as Dialog,
  Me as Dropdown,
  w_ as EntitySelect,
  ML as F0ActionBar,
  Wf as F0AiBanner,
  pu as F0AvatarModule,
  b_ as F0Callout,
  PL as F0TableOfContent,
  y_ as F0VersionHistory,
  NL as F1SearchBox,
  zL as FILE_TYPES,
  $L as FileItem,
  k_ as Form,
  C_ as FormActions,
  N_ as FormField,
  T_ as HighlightBanner,
  cL as IndicatorsList,
  lu as Input,
  jL as Item,
  BL as ItemSectionHeader,
  eL as LineChartWidget,
  $_ as Menu,
  Dl as MobileDropdown,
  q_ as NotesTextEditor,
  K_ as NotesTextEditorSkeleton,
  A0 as NumberInput,
  F_ as OmniButton,
  H_ as OneApprovalHistory,
  SL as OneCalendar,
  IL as OneCalendarInternal,
  V_ as OneDataCollection,
  gS as OneDateNavigator,
  Oh as OneEmptyState,
  TS as OnePagination,
  L_ as OnePersonListItem,
  M_ as Page,
  p_ as PageHeader,
  tL as PieChartWidget,
  GE as PrivateBox,
  v_ as RadarChart,
  D_ as ResourceHeader,
  lk as RichTextDisplay,
  HL as RichTextEditor,
  xL as ScrollArea,
  j_ as SearchBar,
  VL as SectionHeader,
  dr as Select,
  mb as Shortcut,
  B_ as Sidebar,
  P_ as SidebarFooter,
  z_ as SidebarHeader,
  sn as Spinner,
  Y_ as Split,
  J_ as Stack,
  rL as SummariesWidget,
  su as Switch,
  AL as Tabs,
  TL as TabsSkeleton,
  hL as TasksList,
  D0 as Textarea,
  mh as ToggleGroup,
  ph as ToggleGroupItem,
  dt as Tooltip,
  mL as TwoColumnsList,
  nL as VerticalBarChartWidget,
  bb as WeekStartDay,
  yN as Weekdays,
  Ln as Widget,
  dL as WidgetAvatarsListItem,
  bL as WidgetEmptyState,
  aL as WidgetHighlightButton,
  uL as WidgetInboxList,
  Rd as WidgetInboxListItem,
  vL as WidgetSection,
  fL as WidgetSimpleList,
  ol as WidgetSimpleListItem,
  gL as WidgetStrip,
  Yk as _RadarChart,
  xb as getGranularityDefinition,
  vb as getGranularityDefinitions,
  EL as getGranularitySimpleDefinition,
  ku as granularityDefinitions,
  DL as modules,
  WL as predefinedPresets,
  _L as rangeSeparator,
  UL as selectSizes,
  ls as useAiPromotionChat,
  hs as useDataCollectionData,
  W_ as useDataCollectionSource,
  z0 as useForm,
  S_ as useFormSchema,
  Ul as useInfiniteScrollPagination,
  Gn as useSidebar
};
