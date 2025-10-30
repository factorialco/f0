import { c as mt, a as ht, P as Fe, b as $, C as I, d as vt, e as Ee, f as yt, g as Y, h as Ie, i as $e, j as gt, k as je, S as Te, l as De, m as Be, O as bt, u as Me, I as xt, n as Pt, o as xe, p as wt, q as Ct, F as ze, r as St, s as Nt, t as Ot, D as At, v as Lt, w as kt, B as _t, x as Re, y as M, z as Ft, U as Et, L as It, A as $t, E as jt, X as Tt, G as Dt, H as Bt } from "./dialog-D3AmLiwa.js";
import { a5 as Qr, aa as en, J as tn, K as an, M as rn, Q as nn, R as on, T as sn, a6 as ln, V as cn, Y as un, W as dn, a7 as fn, a1 as pn, a4 as mn, a0 as hn, ab as vn, $ as yn, _ as gn, N as bn, Z as xn, a2 as Pn, ac as wn, a3 as Cn, a9 as Sn, a8 as Nn } from "./dialog-D3AmLiwa.js";
import { S as Pe, a as Mt, f as ne, L as K, b as zt, A as Rt, i as J, c as Kt, d as Ke, E as Vt, g as U, e as Gt, h as Wt, C as qt, j as D, k as Ve, u as Ht, G as Xt, l as Zt, m as we, n as Jt, o as Ge, p as Ut, B as We, X as qe, Y as le, q as Yt, r as He, s as Qt, t as ea, v as ta, w as aa, x as ra, y as na, z as oa, D as ia, F as Ce, H as sa, I as V, J as oe, K as la, M as ca, N as ua, O as da, P as fa, Q as pa, V as ma, R as ha, T as va, U as ie, W as ya, Z as Xe, _ as ga, $ as Ze, a0 as ba, a1 as xa, a2 as Se, a3 as Pa, a4 as Je, a5 as wa, a6 as Ca, a7 as Sa, a8 as Na } from "./hooks-BIQF5lqt.js";
import { aw as An, a9 as Ln, aa as kn, ab as _n, ac as Fn, ad as En, ae as In, af as $n, ah as jn, aj as Tn, ak as Dn, al as Bn, am as Mn, ap as zn, aq as Rn, ar as Kn, as as Vn, at as Gn, ao as Wn, ag as qn, av as Hn, ai as Xn, an as Zn, ax as Jn, ay as Un, az as Yn, aA as Qn, au as eo } from "./hooks-BIQF5lqt.js";
import { jsx as n, jsxs as N, Fragment as ae } from "react/jsx-runtime";
import * as fe from "react";
import L, { PureComponent as Oa, useState as _, forwardRef as q, useEffect as B, useMemo as se, useCallback as Ne, useRef as pe, useImperativeHandle as Aa, Children as La, createContext as ka } from "react";
import { d as ao } from "./i18n-provider-defaults-CzsArkn4.js";
const Or = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, z(e);
}
function _a(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Qe(a.key), a);
  }
}
function Ea(e, t, r) {
  return t && Fa(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ia(e, t, r) {
  return t = Q(t), $a(e, Ue() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r));
}
function $a(e, t) {
  if (t && (z(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ja(e);
}
function ja(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ue() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ue = function() {
    return !!e;
  })();
}
function Q(e) {
  return Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Q(e);
}
function Ta(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ce(e, t);
}
function ce(e, t) {
  return ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, ce(e, t);
}
function Ye(e, t, r) {
  return t = Qe(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Qe(e) {
  var t = Da(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function Da(e, t) {
  if (z(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (z(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var re = /* @__PURE__ */ function(e) {
  function t() {
    return _a(this, t), Ia(this, t, arguments);
  }
  return Ta(t, e), Ea(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(L.Component);
Ye(re, "displayName", "ZAxis");
Ye(re, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Ba = ["option", "isActive"];
function G() {
  return G = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, G.apply(this, arguments);
}
function Ma(e, t) {
  if (e == null) return {};
  var r = za(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      a = s[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function za(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function Ra(e) {
  var t = e.option, r = e.isActive, a = Ma(e, Ba);
  return typeof t == "string" ? /* @__PURE__ */ L.createElement(Pe, G({
    option: /* @__PURE__ */ L.createElement(Mt, G({
      type: t
    }, a)),
    isActive: r,
    shapeType: "symbols"
  }, a)) : /* @__PURE__ */ L.createElement(Pe, G({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, a));
}
function R(e) {
  "@babel/helpers - typeof";
  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, R(e);
}
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, W.apply(this, arguments);
}
function Oe(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oe(Object(r), !0).forEach(function(a) {
      T(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Ka(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ae(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, tt(a.key), a);
  }
}
function Va(e, t, r) {
  return t && Ae(e.prototype, t), r && Ae(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ga(e, t, r) {
  return t = ee(t), Wa(e, et() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r));
}
function Wa(e, t) {
  if (t && (R(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return qa(e);
}
function qa(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function et() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (et = function() {
    return !!e;
  })();
}
function ee(e) {
  return ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ee(e);
}
function Ha(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ue(e, t);
}
function ue(e, t) {
  return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, ue(e, t);
}
function T(e, t, r) {
  return t = tt(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tt(e) {
  var t = Xa(e, "string");
  return R(t) == "symbol" ? t : t + "";
}
function Xa(e, t) {
  if (R(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (R(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var H = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Ka(this, t);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return r = Ga(this, t, [].concat(o)), T(r, "state", {
      isAnimationFinished: !1
    }), T(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), T(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), T(r, "id", Ht("recharts-scatter-")), r;
  }
  return Ha(t, e), Va(t, [{
    key: "renderSymbolsStatically",
    value: function(a) {
      var o = this, s = this.props, l = s.shape, d = s.activeShape, i = s.activeIndex, m = ne(this.props, !1);
      return a.map(function(c, f) {
        var h = i === f, u = h ? d : l, x = E(E({}, m), c);
        return /* @__PURE__ */ L.createElement(K, W({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c == null ? void 0 : c.cx, "-").concat(c == null ? void 0 : c.cy, "-").concat(c == null ? void 0 : c.size, "-").concat(f)
        }, zt(o.props, c, f), {
          role: "img"
        }), /* @__PURE__ */ L.createElement(Ra, W({
          option: u,
          isActive: h,
          key: "symbol-".concat(f)
        }, x)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var a = this, o = this.props, s = o.points, l = o.isAnimationActive, d = o.animationBegin, i = o.animationDuration, m = o.animationEasing, c = o.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ L.createElement(Rt, {
        begin: d,
        duration: i,
        isActive: l,
        easing: m,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(c),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var u = h.t, x = s.map(function(O, C) {
          var A = f && f[C];
          if (A) {
            var b = J(A.cx, O.cx), g = J(A.cy, O.cy), P = J(A.size, O.size);
            return E(E({}, O), {}, {
              cx: b(u),
              cy: g(u),
              size: P(u)
            });
          }
          var S = J(0, O.size);
          return E(E({}, O), {}, {
            size: S(u)
          });
        });
        return /* @__PURE__ */ L.createElement(K, null, a.renderSymbolsStatically(x));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var a = this.props, o = a.points, s = a.isAnimationActive, l = this.state.prevPoints;
      return s && o && o.length && (!l || !Kt(l, o)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(o);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.points, l = o.xAxis, d = o.yAxis, i = o.children, m = Ke(i, Vt);
      return m ? m.map(function(c, f) {
        var h = c.props, u = h.direction, x = h.dataKey;
        return /* @__PURE__ */ L.cloneElement(c, {
          key: "".concat(u, "-").concat(x, "-").concat(s[f]),
          data: s,
          xAxis: l,
          yAxis: d,
          layout: u === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(C, A) {
            return {
              x: C.cx,
              y: C.cy,
              value: u === "x" ? +C.node.x : +C.node.y,
              errorVal: U(C, A)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var a = this.props, o = a.points, s = a.line, l = a.lineType, d = a.lineJointType, i = ne(this.props, !1), m = ne(s, !1), c, f;
      if (l === "joint")
        c = o.map(function(g) {
          return {
            x: g.cx,
            y: g.cy
          };
        });
      else if (l === "fitting") {
        var h = Gt(o), u = h.xmin, x = h.xmax, O = h.a, C = h.b, A = function(P) {
          return O * P + C;
        };
        c = [{
          x: u,
          y: A(u)
        }, {
          x,
          y: A(x)
        }];
      }
      var b = E(E(E({}, i), {}, {
        fill: "none",
        stroke: i && i.fill
      }, m), {}, {
        points: c
      });
      return /* @__PURE__ */ L.isValidElement(s) ? f = /* @__PURE__ */ L.cloneElement(s, b) : Wt(s) ? f = s(b) : f = /* @__PURE__ */ L.createElement(qt, W({}, b, {
        type: d
      })), /* @__PURE__ */ L.createElement(K, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, o = a.hide, s = a.points, l = a.line, d = a.className, i = a.xAxis, m = a.yAxis, c = a.left, f = a.top, h = a.width, u = a.height, x = a.id, O = a.isAnimationActive;
      if (o || !s || !s.length)
        return null;
      var C = this.state.isAnimationFinished, A = mt("recharts-scatter", d), b = i && i.allowDataOverflow, g = m && m.allowDataOverflow, P = b || g, S = D(x) ? this.id : x;
      return /* @__PURE__ */ L.createElement(K, {
        className: A,
        clipPath: P ? "url(#clipPath-".concat(S, ")") : null
      }, b || g ? /* @__PURE__ */ L.createElement("defs", null, /* @__PURE__ */ L.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ L.createElement("rect", {
        x: b ? c : c - h / 2,
        y: g ? f : f - u / 2,
        width: b ? h : h * 2,
        height: g ? u : u * 2
      }))) : null, l && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ L.createElement(K, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!O || C) && Ve.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a, o) {
      return a.animationId !== o.prevAnimationId ? {
        prevAnimationId: a.animationId,
        curPoints: a.points,
        prevPoints: o.curPoints
      } : a.points !== o.curPoints ? {
        curPoints: a.points
      } : null;
    }
  }]);
}(Oa);
T(H, "displayName", "Scatter");
T(H, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Xt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
T(H, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, a = e.zAxis, o = e.item, s = e.displayedData, l = e.xAxisTicks, d = e.yAxisTicks, i = e.offset, m = o.props.tooltipType, c = Ke(o.props.children, Zt), f = D(t.dataKey) ? o.props.dataKey : t.dataKey, h = D(r.dataKey) ? o.props.dataKey : r.dataKey, u = a && a.dataKey, x = a ? a.range : re.defaultProps.range, O = x && x[0], C = t.scale.bandwidth ? t.scale.bandwidth() : 0, A = r.scale.bandwidth ? r.scale.bandwidth() : 0, b = s.map(function(g, P) {
    var S = U(g, f), y = U(g, h), v = !D(u) && U(g, u) || "-", k = [{
      name: D(t.dataKey) ? o.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: S,
      payload: g,
      dataKey: f,
      type: m
    }, {
      name: D(r.dataKey) ? o.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: y,
      payload: g,
      dataKey: h,
      type: m
    }];
    v !== "-" && k.push({
      name: a.name || a.dataKey,
      unit: a.unit || "",
      value: v,
      payload: g,
      dataKey: u,
      type: m
    });
    var F = we({
      axis: t,
      ticks: l,
      bandSize: C,
      entry: g,
      index: P,
      dataKey: f
    }), j = we({
      axis: r,
      ticks: d,
      bandSize: A,
      entry: g,
      index: P,
      dataKey: h
    }), p = v !== "-" ? a.scale(v) : O, w = Math.sqrt(Math.max(p, 0) / Math.PI);
    return E(E({}, g), {}, {
      cx: F,
      cy: j,
      x: F - w,
      y: j - w,
      xAxis: t,
      yAxis: r,
      zAxis: a,
      width: 2 * w,
      height: 2 * w,
      size: p,
      node: {
        x: S,
        y,
        z: v
      },
      tooltipPayload: k,
      tooltipPosition: {
        x: F,
        y: j
      },
      payload: g
    }, c && c[P] && c[P].props);
  });
  return E({
    points: b
  }, i);
});
var Za = Jt({
  chartName: "ComposedChart",
  GraphicalChild: [Ge, Ut, We, H],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: qe
  }, {
    axisType: "yAxis",
    AxisComp: le
  }, {
    axisType: "zAxis",
    AxisComp: re
  }],
  formatAxisMap: Yt
});
const Ja = (e) => {
  const t = (r) => {
    const { cx: a, cy: o, fill: s, payload: l } = r, d = () => {
      if (!l) return "-";
      if (l[e] !== void 0)
        return l[e];
      for (const [i, m] of Object.entries(l))
        if (typeof m == "number" && i !== "x")
          return m;
      return "-";
    };
    return n("circle", {
      cx: a,
      cy: o,
      r: 4,
      fill: s,
      stroke: "white",
      strokeWidth: 2,
      ref: (i) => {
        i != null && i.parentElement && i.parentElement.setAttribute("aria-label", `Data point: ${d()}`);
      }
    });
  };
  return t.displayName = `Scatter-${e}`, t;
}, Ua = ({ dataConfig: e, data: t, xAxis: r, yAxis: a = {
  hide: !0
}, label: o = !1, hideTooltip: s = !1, hideGrid: l = !1, aspect: d, legend: i, showValueUnderLabel: m = !1, bar: c, line: f, scatter: h, onClick: u }, x) => {
  var v, k, F, j;
  const O = Qt(t), C = c != null && c.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], A = f != null && f.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], b = h != null && h.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], g = [...C, ...A, ...b], P = Math.max(...O.flatMap((p) => g.map((w) => ea(a != null && a.tickFormatter ? a.tickFormatter(`${p[w]}`) : `${p[w]}`)))), S = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "left"), y = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "right");
  return n(ta, {
    config: e,
    ref: x,
    aspect: d,
    children: N(Za, {
      accessibilityLayer: !0,
      data: O,
      margin: {
        left: a && !a.hide ? 0 : 12,
        right: 12,
        top: o ? 24 : 0,
        bottom: m ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (p) => {
        if (!u || !p.activeLabel || !p.activePayload)
          return;
        const w = {
          label: p.activeLabel,
          values: {}
        };
        for (const X of p.activePayload)
          w.values[X.name] = X.value;
        u(w);
      },
      children: [!s && n(aa, {
        ...ra(),
        content: n(na, {
          yAxisFormatter: a.tickFormatter
        })
      }), !l && n(oa, {
        ...ia()
      }), S.length > 0 && n(le, {
        ...Ce(a),
        tick: !0,
        width: a.width ?? P + 20 + (y.length > 0 && ((v = S[0]) != null && v.axisLabel) ? 20 : 0),
        hide: a.hide || S.some((p) => p == null ? void 0 : p.hideAxis),
        label: (k = S[0]) != null && k.axisLabel ? {
          value: S[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), y.length > 0 && n(le, {
        ...Ce(a),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: a.width ?? P + 20 + (S.length > 0 && ((F = y[0]) != null && F.axisLabel) ? 20 : 0),
        hide: a.hide || y.some((p) => p == null ? void 0 : p.hideAxis),
        label: (j = y[0]) != null && j.axisLabel ? {
          value: y[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), n(qe, {
        ...sa(r),
        hide: r == null ? void 0 : r.hide,
        tick: m ? (p) => {
          var ge, be;
          const { x: w, y: X, payload: ve } = p, ye = ((ge = t.find((pt) => pt.label === ve.value)) == null ? void 0 : ge.values) || "", Z = Object.keys(ye).length === 1 ? (be = Object.values(ye)) == null ? void 0 : be[0] : void 0, ft = Z !== void 0 && a.tickFormatter ? a.tickFormatter(`${Z}`) : Z.toLocaleString();
          return N("g", {
            transform: `translate(${w},${X})`,
            children: [n("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: ve.value
            }), !!Z && n("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: ft
            })]
          });
        } : void 0
      }), C.map((p, w) => n(We, {
        isAnimationActive: !1,
        dataKey: String(p),
        fill: e[p].color ? V(e[p].color) : oe(w),
        radius: 4,
        maxBarSize: 32,
        children: o && n(Ve, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(p)}`)
      }, `bar-${String(p)}`)), A.map((p, w) => n(Ge, {
        type: (f == null ? void 0 : f.lineType) ?? "natural",
        dataKey: String(p),
        stroke: e[p].color ? V(e[p].color) : oe(C.length + w),
        strokeWidth: 2,
        dot: (f == null ? void 0 : f.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (f == null ? void 0 : f.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(p)}`)), b.map((p, w) => n(H, {
        dataKey: String(p),
        fill: e[p].color ? V(e[p].color) : oe(C.length + A.length + w),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (h == null ? void 0 : h.axisPosition) === "right" ? "right" : void 0,
        shape: Ja(String(p))
      }, `scatter-${String(p)}`)), i && n(la, {
        content: n(ca, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Ya = He(Ua);
var me = "Progress", he = 100, [Qa, Ar] = ht(me), [er, tr] = Qa(me), at = fe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: a = null,
      max: o,
      getValueLabel: s = ar,
      ...l
    } = e;
    (o || o === 0) && !Le(o) && console.error(rr(`${o}`, "Progress"));
    const d = Le(o) ? o : he;
    a !== null && !ke(a, d) && console.error(nr(`${a}`, "Progress"));
    const i = ke(a, d) ? a : null, m = te(i) ? s(i, d) : void 0;
    return /* @__PURE__ */ n(er, { scope: r, value: i, max: d, children: /* @__PURE__ */ n(
      Fe.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": te(i) ? i : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": ot(i, d),
        "data-value": i ?? void 0,
        "data-max": d,
        ...l,
        ref: t
      }
    ) });
  }
);
at.displayName = me;
var rt = "ProgressIndicator", nt = fe.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...a } = e, o = tr(rt, r);
    return /* @__PURE__ */ n(
      Fe.div,
      {
        "data-state": ot(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...a,
        ref: t
      }
    );
  }
);
nt.displayName = rt;
function ar(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function ot(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function te(e) {
  return typeof e == "number";
}
function Le(e) {
  return te(e) && !isNaN(e) && e > 0;
}
function ke(e, t) {
  return te(e) && !isNaN(e) && e <= t && e >= 0;
}
function rr(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${he}\`.`;
}
function nr(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${he} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var it = at, or = nt;
const st = fe.forwardRef(({ className: e, value: t, ...r }, a) => n(it, {
  ref: a,
  className: $("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: n(or, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
st.displayName = it.displayName;
const ir = ({ value: e, max: t = 100, label: r, color: a }, o) => {
  const s = a ? V(a) : V("categorical-1"), l = e / t * 100;
  return N("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [n("div", {
      className: "flex-grow",
      children: n(st, {
        color: s,
        value: l,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": t,
        "aria-valuenow": e,
        "aria-label": `${l.toFixed(1)}%`
      })
    }), r && n("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: r
    })]
  });
}, sr = He(ir), Lr = I(
  {
    name: "AreaChart",
    type: "info"
  },
  ha
), kr = I(
  {
    name: "BarChart",
    type: "info"
  },
  ua
), _r = I(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  da
), Fr = I(
  {
    name: "LineChart",
    type: "info"
  },
  fa
), Er = I(
  {
    name: "PieChart",
    type: "info"
  },
  pa
), Ir = I(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ma
), $r = I(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  sr
), jr = I(
  {
    name: "ComboChart",
    type: "info"
  },
  Ya
), Tr = vt, Dr = Ee, Br = ["default", "outline", "neutral"], Mr = Ee, zr = yt, de = ({ count: e, list: t }) => {
  const [r, a] = _(!1), o = n(Y, {
    label: `+${e}`
  });
  return t != null && t.length ? N(Ie, {
    open: r,
    onOpenChange: a,
    children: [n($e, {
      asChild: !0,
      children: n("button", {
        className: gt("inline-flex flex-shrink-0 items-center"),
        children: o
      })
    }), n(je, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: N(Te, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((s, l) => n("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n(Y, {
            ...s
          })
        }, l)), n(De, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : o;
};
de.displayName = "ChipCounter";
const lt = ({ chips: e, max: t = 4, remainingCount: r, layout: a = "compact" }) => {
  if (a === "fill")
    return n(bt, {
      items: e,
      renderListItem: (i) => n(Y, {
        ...i
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: r !== void 0,
      renderOverflowIndicator: (i) => n(de, {
        count: (r ?? 0) + i,
        list: r ? void 0 : e.slice(e.length - i)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const o = e.slice(0, t), s = e.slice(t), l = r ?? e.length - t, d = l > 0;
  return N("div", {
    className: "flex items-center gap-2",
    children: [o.map((i, m) => n(Y, {
      ...i
    }, m)), d && n(de, {
      count: l,
      list: r ? void 0 : s
    })]
  });
};
lt.displayName = "F0ChipList";
const Rr = Be("F0ChipList", lt), ct = q(({ value: e, onDateChange: t, granularity: r, onOpenChange: a, minDate: o, maxDate: s, onClear: l, ...d }, i) => {
  const [m, c] = _(""), [f, h] = _(!1), u = Me();
  B(() => {
    c(r.toString(e == null ? void 0 : e.value, u));
  }, [e, r, u]);
  const x = (b) => Pt(b, r, {
    minDate: o,
    maxDate: s
  }), O = (b, g) => {
    if (b === "") {
      t == null || t({
        value: void 0,
        granularity: g.key
      }), h(d.required ?? !1);
      return;
    }
    const P = g.toRange(g.fromString(b, u));
    P && x(P == null ? void 0 : P.from) && x(P == null ? void 0 : P.to) ? (t == null || t({
      value: P,
      granularity: g.key
    }), h(!1)) : h(!0);
  }, C = () => {
    O(m, r);
  };
  return n(ae, {
    children: n(xt, {
      ...d,
      icon: va,
      ref: i,
      onFocus: () => a == null ? void 0 : a(!0),
      onClear: () => {
        l == null || l(), c(""), O("", r);
      },
      onKeyDown: (b) => {
        b.key === "Enter" && C();
      },
      type: "text",
      onChange: (b) => {
        c(b);
      },
      error: f || d.error,
      onBlur: C,
      value: m,
      onClickContent: () => a == null ? void 0 : a(!0)
    })
  });
});
ct.displayName = "DateInput";
function lr({ onChange: e, value: t, presets: r = [], granularities: a = ["day"], minDate: o, maxDate: s, open: l = !1, ...d }) {
  const [i, m] = _(), [c, f] = _(l);
  B(() => {
    f(l);
  }, [l]);
  const h = Me(), u = se(() => a[0] ?? "day", [a]), x = Ne((y) => {
    const v = y || u;
    if (!xe[v])
      throw new Error(`Invalid granularity ${v}`);
    return {
      ...xe[v],
      key: v
    };
  }, [u]), O = Ne((y) => {
    var k;
    if (!y)
      return;
    const v = x(y == null ? void 0 : y.granularity);
    return y ? {
      value: v.toRange(v.calendarMode === "range" ? y.value : ((k = y.value) == null ? void 0 : k.from) ?? void 0),
      granularity: y.granularity
    } : void 0;
  }, [x]), C = se(() => x(i == null ? void 0 : i.granularity), [i == null ? void 0 : i.granularity, x]);
  B(() => {
    const y = O(t);
    ie(i, y) || m(y);
  }, [t]);
  const A = (y) => {
    const v = O(y), F = x(v == null ? void 0 : v.granularity).calendarMode !== "range" && (v == null ? void 0 : v.granularity) === (i == null ? void 0 : i.granularity) && !ie(v, i);
    b(v), F && f(!1);
  }, b = (y) => {
    const v = O(y);
    if (m(v), !ie(v, i)) {
      const k = x(v == null ? void 0 : v.granularity);
      e == null || e(v, k.toString(v == null ? void 0 : v.value, h));
    }
  }, g = (y) => {
    var v;
    f(y), (v = d.onOpenChange) == null || v.call(d, y);
  }, P = se(() => r.filter((y) => a.includes(y.granularity)), [r, a]), S = pe(null);
  return B(() => {
    c && S.current && requestAnimationFrame(() => {
      var y;
      (y = S.current) == null || y.focus();
    });
  }, [c]), n(ya, {
    hideCalendarInput: !0,
    onSelect: A,
    value: i,
    presets: P,
    granularities: a,
    minDate: o,
    maxDate: s,
    open: c,
    onOpenChange: g,
    asChild: !0,
    children: n(ct, {
      ref: S,
      ...d,
      value: i,
      granularity: C,
      onDateChange: b
    })
  });
}
const Kr = wt, Vr = Be(
  "F0DatePicker",
  lr
), cr = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ur = q(function({ widgets: t, children: r }, a) {
  const o = pe(null);
  Aa(a, () => o.current);
  const s = La.toArray(t).filter((l) => !!l).map((l, d) => n("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: l
  }, d));
  return n(Xe, {
    layout: "home",
    children: N("div", {
      ref: o,
      className: "@container",
      children: [N("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [n(ga, {
          columns: cr,
          showArrows: !1,
          children: s
        }), n("main", {
          children: r
        })]
      }), N("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [n("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: s.slice(0, 3)
        }), n("main", {
          className: "col-span-2",
          children: r
        }), n("div", {
          className: "flex flex-1 flex-col gap-5",
          children: s.slice(3)
        })]
      })]
    })
  });
}), dr = q(function({ children: t, sideContent: r, mainColumnPosition: a = "left", sticky: o = !1 }, s) {
  return n("div", {
    ref: s,
    className: "h-full",
    children: N("div", {
      className: $("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
      children: [n("main", {
        className: $("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", a === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: t
      }), n(fr, {
        sticky: o,
        className: $("order-1", a === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), fr = ({ children: e, className: t }) => n("aside", {
  className: $("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
  children: e
}), pr = Ct({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ut = L.forwardRef(({ children: e, variant: t, className: r, ...a }, o) => n(Xe, {
  layout: "standard",
  children: n("section", {
    ref: o,
    className: $("relative flex-1 overflow-auto", r),
    ...a,
    children: n("div", {
      className: $(pr({
        variant: t
      })),
      children: e
    })
  })
}));
ut.displayName = "StandardLayout";
const Gr = I({
  name: "StandardLayout",
  type: "layout"
}, ut), Wr = I({
  name: "TwoColumnLayout",
  type: "layout"
}, dr), qr = I({
  name: "HomeLayout",
  type: "layout"
}, ur), mr = ({ benefits: e }) => n("div", {
  className: "flex flex-col gap-2",
  children: e.map((t, r) => n(hr, {
    text: t
  }, r))
}), hr = ({ text: e }) => N("div", {
  className: "flex flex-row items-start gap-2",
  children: [n(Nt, {
    icon: Ot,
    size: "md",
    className: "text-f1-icon-positive"
  }), n("span", {
    children: e
  })]
}), dt = q(({ title: e, image: t, benefits: r, actions: a, withShadow: o = !0, module: s, moduleName: l, tag: d }, i) => N("div", {
  ref: i,
  className: $("bg-white flex flex-row rounded-xl border border-f1-border-secondary", o && "shadow-md"),
  children: [n("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: n("img", {
      src: t,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), N("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [N("div", {
      className: "flex flex-col gap-5",
      children: [N("div", {
        className: "flex flex-col gap-2",
        children: [N("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && n(ze, {
            module: s
          }), l && n("p", {
            className: "text-base font-medium text-f1-foreground",
            children: l
          })]
        }), d && n("div", {
          className: "flex justify-start",
          children: n(St, {
            icon: d.icon,
            text: d.label
          })
        }), n("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: e
        })]
      }), n(mr, {
        benefits: r
      })]
    }), a && n("div", {
      className: "flex gap-3",
      children: a
    })]
  })]
}));
dt.displayName = "ProductBlankslate";
function vr({ isOpen: e, onClose: t, title: r, children: a, module: o, portalContainer: s }) {
  const [l, d] = _(e);
  return B(() => {
    d(e);
  }, [e]), n(At, {
    open: l,
    onOpenChange: (m) => {
      d(m), m || t();
    },
    modal: !0,
    children: N(Lt, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [N("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [N(kt, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [o && n(ze, {
            module: o,
            size: "lg"
          }), r]
        }), n(_t, {
          variant: "outline",
          icon: Re,
          onClick: t,
          label: "Close modal",
          hideLabel: !0
        })]
      }), N(Te, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [a, n(De, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Hr({ isOpen: e, onClose: t, title: r, image: a, benefits: o, errorMessage: s, successMessage: l, loadingState: d, nextSteps: i, closeLabel: m, primaryAction: c, modalTitle: f, modalModule: h, secondaryAction: u, portalContainer: x, tag: O, showResponseDialog: C = !0 }) {
  const [A, b] = _(e), [g, P] = _(null), [S, y] = _(!1), v = async () => {
    if (c != null && c.onClick) {
      y(!0);
      try {
        await c.onClick(), b(!1), C && P("success");
      } catch {
        C && P("error");
      } finally {
        y(!1);
      }
    }
  }, k = () => {
    b(!1), t == null || t();
  }, F = S;
  return N(ae, {
    children: [n(vr, {
      isOpen: A,
      onClose: k,
      title: f,
      module: h,
      portalContainer: x,
      children: n("div", {
        className: "pb-4 pl-4",
        children: n(dt, {
          title: r,
          image: a,
          benefits: o,
          withShadow: !1,
          tag: O,
          actions: N("div", {
            className: "flex gap-3",
            children: [c && n(M, {
              variant: c.variant,
              label: F ? d.label : c.label,
              icon: c.icon || void 0,
              onClick: v,
              loading: c.loading,
              size: c.size
            }), u && n(M, {
              onClick: u.onClick,
              label: u.label,
              variant: u.variant,
              size: u.size,
              icon: u.icon
            })]
          })
        })
      })
    }), g && C && n(Ze, {
      open: !0,
      onClose: () => {
        k(), P(null);
      },
      success: g === "success",
      errorMessage: s,
      successMessage: l,
      nextSteps: i,
      closeLabel: m,
      portalContainer: x
    })]
  });
}
function yr({ mediaUrl: e, title: t, description: r, onClose: a, dismissible: o, width: s, trackVisibility: l, actions: d, showConfirmation: i = !0 }) {
  const [m, c] = _(!1), f = () => {
    c(!0), a && a();
  };
  B(() => {
    l && l(!m);
  }, [l, m]);
  const h = e == null ? void 0 : e.includes(".mp4");
  return n(ae, {
    children: m ? null : N(ba, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [N(xa, {
        children: [o && n("div", {
          className: "absolute right-2 top-2 z-10",
          children: n(M, {
            variant: "ghost",
            icon: Re,
            size: "sm",
            hideLabel: !0,
            onClick: f,
            label: "Close"
          })
        }), N("div", {
          children: [n("div", {
            children: e && (h ? n("video", {
              src: e,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : n("img", {
              src: e,
              alt: t,
              className: "h-full w-full rounded-md"
            }))
          }), N("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [n(Se, {
              className: "text-lg font-medium",
              children: t
            }), n(Se, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: r
            })]
          })]
        })]
      }), d && n(Pa, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? n(Je, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: i && u.showConfirmation,
          variant: u.variant
        }, u.label) : n(M, {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        }, u.label))
      })]
    })
  });
}
const gr = q(function({ primaryAction: t, secondaryAction: r, ...a }, o) {
  const s = (i) => i.variant === "promote" ? n(Je, {
    label: i.label,
    onRequest: async () => {
      await i.onClick();
    },
    errorMessage: i.errorMessage,
    successMessage: i.successMessage,
    loadingState: i.loadingState,
    nextSteps: i.nextSteps,
    closeLabel: i.closeLabel,
    showIcon: i.showIcon,
    showConfirmation: i.showConfirmation,
    variant: i.variant
  }) : n(M, {
    onClick: i.onClick,
    label: i.label,
    variant: i.variant || "default",
    size: "md",
    icon: i.icon
  }), l = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0, d = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
  return N(wa, {
    ref: o,
    ...a,
    primaryAction: l,
    secondaryAction: d,
    children: [(t == null ? void 0 : t.variant) === "promote" && s(t), (r == null ? void 0 : r.variant) === "promote" && s(r)]
  });
});
gr.displayName = "UpsellingBanner";
function Xr({ isOpen: e, setIsOpen: t, label: r, variant: a = "promote", size: o = "md", showIcon: s = !0, side: l = "right", align: d = "center", icon: i = Ft, mediaUrl: m, title: c, description: f, width: h = "300px", trackVisibility: u, actions: x, onClick: O, hideLabel: C = !1 }) {
  const [A, b] = _(!1), [g, P] = _(null), [S, y] = _(null), v = (w) => {
    t(w), O && O();
  }, k = async (w) => {
    if (w.type === "upsell") {
      y(w);
      try {
        await w.onClick(), w.showConfirmation && (b(!0), P("success"));
      } catch {
        b(!0), P("error");
      }
    }
  }, F = () => {
    P(null), b(!1), y(null), t(!1);
  }, j = e && !A, p = x == null ? void 0 : x.map((w) => w.type === "upsell" ? {
    ...w,
    onClick: () => k(w)
  } : w);
  return N(ae, {
    children: [N(Ie, {
      open: j,
      onOpenChange: v,
      children: [n($e, {
        asChild: !0,
        children: n(M, {
          variant: a,
          label: r,
          size: o,
          icon: s ? i : void 0,
          onClick: () => t(e),
          hideLabel: C
        })
      }), n(je, {
        side: l,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: n(yr, {
          mediaUrl: m,
          title: c,
          description: f,
          onClose: () => t(!1),
          dismissible: !1,
          width: h,
          trackVisibility: u,
          actions: p,
          showConfirmation: !1
        })
      })]
    }), (S == null ? void 0 : S.type) === "upsell" && S.showConfirmation && g && n(Ze, {
      open: !0,
      onClose: F,
      success: g === "success",
      errorMessage: S.errorMessage,
      successMessage: S.successMessage,
      nextSteps: S.nextSteps,
      closeLabel: S.closeLabel,
      portalContainer: null
    })]
  });
}
const br = ka(null), xr = ({ children: e, fullScreen: t = !0 }) => {
  const r = pe(null), [a, o] = _(r.current);
  return Bt(() => {
    o(r.current);
  }, []), n(br.Provider, {
    value: {
      element: a
    },
    children: n("div", {
      ref: r,
      id: "f0-layout",
      className: $({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    })
  });
}, Pr = ({ children: e }) => n(Na, {
  reducedMotion: "user",
  children: e
}), Zr = ({ children: e, layout: t, link: r, privacyModeInitiallyEnabled: a, image: o, i18n: s, l10n: l, isDev: d = !1, dataCollectionStorageHandler: i, showExperimentalWarnings: m = !1 }) => n(Pr, {
  children: n(Et, {
    isDev: d,
    showExperimentalWarnings: m,
    children: n(It, {
      ...l,
      children: n($t, {
        ...s,
        children: n(jt, {
          ...r,
          children: n(xr, {
            ...t,
            children: n(Tt, {
              children: n(Ca, {
                initiallyEnabled: a,
                children: n(Dt, {
                  ...o,
                  children: n(Sa, {
                    handler: i,
                    children: e
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), _e = (e) => `datacollection-${e}`, Jr = {
  get: async (e) => JSON.parse(
    localStorage.getItem(_e(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(_e(e), JSON.stringify(t));
  }
};
export {
  Lr as AreaChart,
  Qr as Await,
  kr as BarChart,
  _r as CategoryBarChart,
  jr as ComboChart,
  An as DndProvider,
  en as EmojiImage,
  tn as F0Avatar,
  Ln as F0AvatarAlert,
  an as F0AvatarCompany,
  kn as F0AvatarDate,
  _n as F0AvatarEmoji,
  rn as F0AvatarFile,
  Fn as F0AvatarIcon,
  En as F0AvatarList,
  ze as F0AvatarModule,
  nn as F0AvatarPerson,
  on as F0AvatarTeam,
  M as F0Button,
  In as F0ButtonDropdown,
  $n as F0ButtonToggle,
  jn as F0Card,
  sn as F0Checkbox,
  Rr as F0ChipList,
  Vr as F0DatePicker,
  ln as F0EventCatcherProvider,
  Nt as F0Icon,
  cn as F0Link,
  Zr as F0Provider,
  Tn as F0TagAlert,
  Dn as F0TagBalance,
  Bn as F0TagCompany,
  Mn as F0TagDot,
  zn as F0TagList,
  Rn as F0TagPerson,
  St as F0TagRaw,
  Kn as F0TagStatus,
  Vn as F0TagTeam,
  un as GROUP_ID_SYMBOL,
  qr as HomeLayout,
  Fr as LineChart,
  dn as OneFilterPicker,
  Er as PieChart,
  Ca as PrivacyModeProvider,
  dt as ProductBlankslate,
  Gn as ProductCard,
  Hr as ProductModal,
  yr as ProductWidget,
  $r as ProgressBarChart,
  Gr as StandardLayout,
  Wn as TagCounter,
  Wr as TwoColumnLayout,
  Ze as UpsellRequestResponseDialog,
  gr as UpsellingBanner,
  Je as UpsellingButton,
  Xr as UpsellingPopover,
  Ir as VerticalBarChart,
  Or as avatarVariants,
  fn as buildTranslations,
  Mr as buttonDropdownSizes,
  Br as buttonDropdownVariants,
  Dr as buttonSizes,
  qn as buttonToggleSizes,
  Tr as buttonVariants,
  Hn as createAtlaskitDriver,
  pn as createDataSourceDefinition,
  Jr as dataCollectionLocalStorageHandler,
  Kr as datepickerSizes,
  ao as defaultTranslations,
  Be as experimental,
  mn as getAnimationVariants,
  hn as getDataSourcePaginationType,
  vn as getEmojiLabel,
  yn as isInfiniteScrollPagination,
  gn as isPageBasedPagination,
  zr as linkVariants,
  bn as modules,
  Xn as predefinedPresets,
  Zn as tagDotColors,
  xn as useData,
  Pn as useDataSource,
  Jn as useDndEvents,
  Un as useDraggable,
  Yn as useDroppableList,
  wn as useEmojiConfetti,
  Cn as useGroups,
  Qn as usePrivacyMode,
  Sn as useReducedMotion,
  eo as useSelectable,
  Nn as useXRay
};
