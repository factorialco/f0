import { jsxs as E, jsx as u } from "react/jsx-runtime";
import b, { PureComponent as be, forwardRef as ge } from "react";
import { S as te, a as xe, f as Y, L as F, b as Ae, A as Pe, i as G, c as oe, E as Oe, g as Z, d as we, e as Ce, C as Se, h as K, j as se, u as _e, G as je, k as Ee, l as re, m as $e, n as le, o as Te, B as ce, X as ue, Y as H, p as Ne, q as ee, r as N, s as R, t as Be, v as ke, w as De, x as Ke, y as ze, z as Ie, D as Le, F as Fe, H as ie, I as Re, J as Me, K as Ve, M as We, N as Ge, O as Ze, P as qe, V as Je } from "./index-gM-GQqGn.js";
import { i as Xe, b as Ye, T as He, d as Qe, e as Ue, f as et, g as tt, w as B, C as k } from "./index-DyAxXmVo.js";
function z(t) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, z(t);
}
function rt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function it(t, e) {
  for (var i = 0; i < e.length; i++) {
    var r = e[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, de(r.key), r);
  }
}
function at(t, e, i) {
  return e && it(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function nt(t, e, i) {
  return e = q(e), ot(t, pe() ? Reflect.construct(e, i || [], q(t).constructor) : e.apply(t, i));
}
function ot(t, e) {
  if (e && (z(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return st(t);
}
function st(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function pe() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pe = function() {
    return !!t;
  })();
}
function q(t) {
  return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, q(t);
}
function lt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Q(t, e);
}
function Q(t, e) {
  return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Q(t, e);
}
function fe(t, e, i) {
  return e = de(e), e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t;
}
function de(t) {
  var e = ct(t, "string");
  return z(e) == "symbol" ? e : e + "";
}
function ct(t, e) {
  if (z(t) != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(t, e);
    if (z(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var X = /* @__PURE__ */ (function(t) {
  function e() {
    return rt(this, e), nt(this, e, arguments);
  }
  return lt(e, t), at(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(b.Component);
fe(X, "displayName", "ZAxis");
fe(X, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var ut = ["option", "isActive"];
function M() {
  return M = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, M.apply(this, arguments);
}
function pt(t, e) {
  if (t == null) return {};
  var i = ft(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    for (a = 0; a < n.length; a++)
      r = n[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
  }
  return i;
}
function ft(t, e) {
  if (t == null) return {};
  var i = {};
  for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r)) {
      if (e.indexOf(r) >= 0) continue;
      i[r] = t[r];
    }
  return i;
}
function dt(t) {
  var e = t.option, i = t.isActive, r = pt(t, ut);
  return typeof e == "string" ? /* @__PURE__ */ b.createElement(te, M({
    option: /* @__PURE__ */ b.createElement(xe, M({
      type: e
    }, r)),
    isActive: i,
    shapeType: "symbols"
  }, r)) : /* @__PURE__ */ b.createElement(te, M({
    option: e,
    isActive: i,
    shapeType: "symbols"
  }, r));
}
function I(t) {
  "@babel/helpers - typeof";
  return I = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, I(t);
}
function V() {
  return V = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
    }
    return t;
  }, V.apply(this, arguments);
}
function ae(t, e) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), i.push.apply(i, r);
  }
  return i;
}
function S(t) {
  for (var e = 1; e < arguments.length; e++) {
    var i = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ae(Object(i), !0).forEach(function(r) {
      T(t, r, i[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : ae(Object(i)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(i, r));
    });
  }
  return t;
}
function mt(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ne(t, e) {
  for (var i = 0; i < e.length; i++) {
    var r = e[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, he(r.key), r);
  }
}
function ht(t, e, i) {
  return e && ne(t.prototype, e), i && ne(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function yt(t, e, i) {
  return e = J(e), vt(t, me() ? Reflect.construct(e, i || [], J(t).constructor) : e.apply(t, i));
}
function vt(t, e) {
  if (e && (I(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bt(t);
}
function bt(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function me() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (me = function() {
    return !!t;
  })();
}
function J(t) {
  return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, J(t);
}
function gt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && U(t, e);
}
function U(t, e) {
  return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, U(t, e);
}
function T(t, e, i) {
  return e = he(e), e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t;
}
function he(t) {
  var e = xt(t, "string");
  return I(e) == "symbol" ? e : e + "";
}
function xt(t, e) {
  if (I(t) != "object" || !t) return t;
  var i = t[Symbol.toPrimitive];
  if (i !== void 0) {
    var r = i.call(t, e);
    if (I(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(t);
}
var W = /* @__PURE__ */ (function(t) {
  function e() {
    var i;
    mt(this, e);
    for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++)
      a[n] = arguments[n];
    return i = yt(this, e, [].concat(a)), T(i, "state", {
      isAnimationFinished: !1
    }), T(i, "handleAnimationEnd", function() {
      i.setState({
        isAnimationFinished: !0
      });
    }), T(i, "handleAnimationStart", function() {
      i.setState({
        isAnimationFinished: !1
      });
    }), T(i, "id", _e("recharts-scatter-")), i;
  }
  return gt(e, t), ht(e, [{
    key: "renderSymbolsStatically",
    value: function(r) {
      var a = this, n = this.props, c = n.shape, m = n.activeShape, f = n.activeIndex, h = Y(this.props, !1);
      return r.map(function(s, l) {
        var p = f === l, d = p ? m : c, x = S(S({}, h), s);
        return /* @__PURE__ */ b.createElement(F, V({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(s?.cx, "-").concat(s?.cy, "-").concat(s?.size, "-").concat(l)
        }, Ae(a.props, s, l), {
          role: "img"
        }), /* @__PURE__ */ b.createElement(dt, V({
          option: d,
          isActive: p,
          key: "symbol-".concat(l)
        }, x)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var r = this, a = this.props, n = a.points, c = a.isAnimationActive, m = a.animationBegin, f = a.animationDuration, h = a.animationEasing, s = a.animationId, l = this.state.prevPoints;
      return /* @__PURE__ */ b.createElement(Pe, {
        begin: m,
        duration: f,
        isActive: c,
        easing: h,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(s),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var d = p.t, x = n.map(function(A, v) {
          var g = l && l[v];
          if (g) {
            var O = G(g.cx, A.cx), y = G(g.cy, A.cy), C = G(g.size, A.size);
            return S(S({}, A), {}, {
              cx: O(d),
              cy: y(d),
              size: C(d)
            });
          }
          var w = G(0, A.size);
          return S(S({}, A), {}, {
            size: w(d)
          });
        });
        return /* @__PURE__ */ b.createElement(F, null, r.renderSymbolsStatically(x));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var r = this.props, a = r.points, n = r.isAnimationActive, c = this.state.prevPoints;
      return n && a && a.length && (!c || !Xe(c, a)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(a);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var r = this.props.isAnimationActive;
      if (r && !this.state.isAnimationFinished)
        return null;
      var a = this.props, n = a.points, c = a.xAxis, m = a.yAxis, f = a.children, h = oe(f, Oe);
      return h ? h.map(function(s, l) {
        var p = s.props, d = p.direction, x = p.dataKey;
        return /* @__PURE__ */ b.cloneElement(s, {
          key: "".concat(d, "-").concat(x, "-").concat(n[l]),
          data: n,
          xAxis: c,
          yAxis: m,
          layout: d === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(v, g) {
            return {
              x: v.cx,
              y: v.cy,
              value: d === "x" ? +v.node.x : +v.node.y,
              errorVal: Z(v, g)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var r = this.props, a = r.points, n = r.line, c = r.lineType, m = r.lineJointType, f = Y(this.props, !1), h = Y(n, !1), s, l;
      if (c === "joint")
        s = a.map(function(y) {
          return {
            x: y.cx,
            y: y.cy
          };
        });
      else if (c === "fitting") {
        var p = we(a), d = p.xmin, x = p.xmax, A = p.a, v = p.b, g = function(C) {
          return A * C + v;
        };
        s = [{
          x: d,
          y: g(d)
        }, {
          x,
          y: g(x)
        }];
      }
      var O = S(S(S({}, f), {}, {
        fill: "none",
        stroke: f && f.fill
      }, h), {}, {
        points: s
      });
      return /* @__PURE__ */ b.isValidElement(n) ? l = /* @__PURE__ */ b.cloneElement(n, O) : Ce(n) ? l = n(O) : l = /* @__PURE__ */ b.createElement(Se, V({}, O, {
        type: m
      })), /* @__PURE__ */ b.createElement(F, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, l);
    }
  }, {
    key: "render",
    value: function() {
      var r = this.props, a = r.hide, n = r.points, c = r.line, m = r.className, f = r.xAxis, h = r.yAxis, s = r.left, l = r.top, p = r.width, d = r.height, x = r.id, A = r.isAnimationActive;
      if (a || !n || !n.length)
        return null;
      var v = this.state.isAnimationFinished, g = Ye("recharts-scatter", m), O = f && f.allowDataOverflow, y = h && h.allowDataOverflow, C = O || y, w = K(x) ? this.id : x;
      return /* @__PURE__ */ b.createElement(F, {
        className: g,
        clipPath: C ? "url(#clipPath-".concat(w, ")") : null
      }, O || y ? /* @__PURE__ */ b.createElement("defs", null, /* @__PURE__ */ b.createElement("clipPath", {
        id: "clipPath-".concat(w)
      }, /* @__PURE__ */ b.createElement("rect", {
        x: O ? s : s - p / 2,
        y: y ? l : l - d / 2,
        width: O ? p : p * 2,
        height: y ? d : d * 2
      }))) : null, c && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ b.createElement(F, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!A || v) && se.renderCallByParent(this.props, n));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(r, a) {
      return r.animationId !== a.prevAnimationId ? {
        prevAnimationId: r.animationId,
        curPoints: r.points,
        prevPoints: a.curPoints
      } : r.points !== a.curPoints ? {
        curPoints: r.points
      } : null;
    }
  }]);
})(be);
T(W, "displayName", "Scatter");
T(W, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !je.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
T(W, "getComposedData", function(t) {
  var e = t.xAxis, i = t.yAxis, r = t.zAxis, a = t.item, n = t.displayedData, c = t.xAxisTicks, m = t.yAxisTicks, f = t.offset, h = a.props.tooltipType, s = oe(a.props.children, Ee), l = K(e.dataKey) ? a.props.dataKey : e.dataKey, p = K(i.dataKey) ? a.props.dataKey : i.dataKey, d = r && r.dataKey, x = r ? r.range : X.defaultProps.range, A = x && x[0], v = e.scale.bandwidth ? e.scale.bandwidth() : 0, g = i.scale.bandwidth ? i.scale.bandwidth() : 0, O = n.map(function(y, C) {
    var w = Z(y, l), _ = Z(y, p), o = !K(d) && Z(y, d) || "-", P = [{
      name: K(e.dataKey) ? a.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: w,
      payload: y,
      dataKey: l,
      type: h
    }, {
      name: K(i.dataKey) ? a.props.name : i.name || i.dataKey,
      unit: i.unit || "",
      value: _,
      payload: y,
      dataKey: p,
      type: h
    }];
    o !== "-" && P.push({
      name: r.name || r.dataKey,
      unit: r.unit || "",
      value: o,
      payload: y,
      dataKey: d,
      type: h
    });
    var $ = re({
      axis: e,
      ticks: c,
      bandSize: v,
      entry: y,
      index: C,
      dataKey: l
    }), D = re({
      axis: i,
      ticks: m,
      bandSize: g,
      entry: y,
      index: C,
      dataKey: p
    }), L = o !== "-" ? r.scale(o) : A, j = Math.sqrt(Math.max(L, 0) / Math.PI);
    return S(S({}, y), {}, {
      cx: $,
      cy: D,
      x: $ - j,
      y: D - j,
      xAxis: e,
      yAxis: i,
      zAxis: r,
      width: 2 * j,
      height: 2 * j,
      size: L,
      node: {
        x: w,
        y: _,
        z: o
      },
      tooltipPayload: P,
      tooltipPosition: {
        x: $,
        y: D
      },
      payload: y
    }, s && s[C] && s[C].props);
  });
  return S({
    points: O
  }, f);
});
var At = $e({
  chartName: "ComposedChart",
  GraphicalChild: [le, Te, ce, W],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: ue
  }, {
    axisType: "yAxis",
    AxisComp: H
  }, {
    axisType: "zAxis",
    AxisComp: X
  }],
  formatAxisMap: Ne
});
const Pt = ({ data: t, legend: e = !0, hideTooltip: i = !1 }, r) => {
  const a = t.reduce((n, c) => n + c.value, 0);
  return a <= 0 ? null : /* @__PURE__ */ E(He, { children: [
    /* @__PURE__ */ u("div", { className: "w-full", ref: r, children: /* @__PURE__ */ u("div", { className: "flex h-2 gap-1 overflow-hidden", children: t.map((n, c) => {
      const m = n.value / a * 100, f = n.color ? N(n.color) : R(c), h = (s) => {
        const l = s / a * 100;
        return l % 1 === 0 ? l.toFixed(0) : l.toFixed(1);
      };
      return m === 0 ? null : /* @__PURE__ */ E(Qe, { children: [
        /* @__PURE__ */ u(
          Ue,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${m}%` },
            title: n.name,
            asChild: !0,
            children: /* @__PURE__ */ u(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: f },
                role: "img",
                title: n.name,
                tabIndex: 0
              }
            )
          }
        ),
        !i && /* @__PURE__ */ E(et, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ u(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: f }
            }
          ),
          /* @__PURE__ */ u("span", { className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary", children: n.name }),
          /* @__PURE__ */ E("span", { className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground", children: [
            n.value,
            " (",
            h(n.value),
            "%)"
          ] })
        ] })
      ] }, n.name);
    }) }) }),
    e && /* @__PURE__ */ u(
      "div",
      {
        className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: t.map((n, c) => {
          const m = n.color ? N(n.color) : R(c);
          return /* @__PURE__ */ E(
            "div",
            {
              className: "flex items-center gap-1.5",
              role: "listitem",
              children: [
                /* @__PURE__ */ u(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 rounded-full",
                    style: { backgroundColor: m }
                  }
                ),
                /* @__PURE__ */ u("span", { className: "text-f1-foreground", children: n.name })
              ]
            },
            n.name
          );
        })
      }
    )
  ] });
}, Ot = ee(Pt), wt = (t) => {
  const e = (i) => {
    const { cx: r, cy: a, fill: n, payload: c } = i, m = () => {
      if (!c) return "-";
      if (c[t] !== void 0)
        return c[t];
      for (const [f, h] of Object.entries(c))
        if (typeof h == "number" && f !== "x")
          return h;
      return "-";
    };
    return /* @__PURE__ */ u(
      "circle",
      {
        cx: r,
        cy: a,
        r: 4,
        fill: n,
        stroke: "white",
        strokeWidth: 2,
        ref: (f) => {
          f?.parentElement && f.parentElement.setAttribute(
            "aria-label",
            `Data point: ${m()}`
          );
        }
      }
    );
  };
  return e.displayName = `Scatter-${t}`, e;
}, Ct = ({
  dataConfig: t,
  data: e,
  xAxis: i,
  yAxis: r = { hide: !0 },
  label: a = !1,
  hideTooltip: n = !1,
  hideGrid: c = !1,
  aspect: m,
  legend: f,
  showValueUnderLabel: h = !1,
  bar: s,
  line: l,
  scatter: p,
  onClick: d
}, x) => {
  const A = Be(e), v = s?.categories ? Array.isArray(s.categories) ? s.categories : [s.categories] : [], g = l?.categories ? Array.isArray(l.categories) ? l.categories : [l.categories] : [], O = p?.categories ? Array.isArray(p.categories) ? p.categories : [p.categories] : [], y = [
    ...v,
    ...g,
    ...O
  ], C = Math.max(
    ...A.flatMap(
      (o) => y.map(
        (P) => ke(
          r?.tickFormatter ? r.tickFormatter(`${o[P]}`) : `${o[P]}`
        )
      )
    )
  ), w = [s, l, p].filter(
    (o) => o?.axisPosition === "left"
  ), _ = [s, l, p].filter(
    (o) => o?.axisPosition === "right"
  );
  return /* @__PURE__ */ u(De, { config: t, ref: x, aspect: m, children: /* @__PURE__ */ E(
    At,
    {
      accessibilityLayer: !0,
      data: A,
      margin: {
        left: r && !r.hide ? 0 : 12,
        right: 12,
        top: a ? 24 : 0,
        bottom: h ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (o) => {
        if (!d || !o.activeLabel || !o.activePayload)
          return;
        const P = {
          label: o.activeLabel,
          values: {}
        };
        for (const $ of o.activePayload)
          P.values[$.name] = $.value;
        d(P);
      },
      children: [
        !n && /* @__PURE__ */ u(
          Ke,
          {
            ...ze(),
            content: /* @__PURE__ */ u(Ie, { yAxisFormatter: r.tickFormatter })
          }
        ),
        !c && /* @__PURE__ */ u(Le, { ...Fe() }),
        w.length > 0 && /* @__PURE__ */ u(
          H,
          {
            ...ie(r),
            tick: !0,
            width: r.width ?? C + 20 + (_.length > 0 && w[0]?.axisLabel ? 20 : 0),
            hide: r.hide || w.some((o) => o?.hideAxis),
            label: w[0]?.axisLabel ? {
              value: w[0].axisLabel,
              angle: -90,
              position: "insideLeft"
            } : void 0
          }
        ),
        _.length > 0 && /* @__PURE__ */ u(
          H,
          {
            ...ie(r),
            yAxisId: "right",
            orientation: "right",
            tick: !0,
            width: r.width ?? C + 20 + (w.length > 0 && _[0]?.axisLabel ? 20 : 0),
            hide: r.hide || _.some((o) => o?.hideAxis),
            label: _[0]?.axisLabel ? {
              value: _[0].axisLabel,
              angle: 90,
              position: "insideRight"
            } : void 0
          }
        ),
        /* @__PURE__ */ u(
          ue,
          {
            ...Re(i),
            hide: i?.hide,
            tick: h ? (o) => {
              const { x: P, y: $, payload: D } = o, L = e.find((ve) => ve.label === D.value)?.values || "", j = Object.keys(L).length === 1 ? Object.values(L)?.[0] : void 0, ye = j !== void 0 && r.tickFormatter ? r.tickFormatter(`${j}`) : j.toLocaleString();
              return /* @__PURE__ */ E("g", { transform: `translate(${P},${$})`, children: [
                /* @__PURE__ */ u(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 12,
                    textAnchor: "middle",
                    className: "text-sm font-medium !text-f1-foreground-secondary",
                    children: D.value
                  }
                ),
                !!j && /* @__PURE__ */ u(
                  "text",
                  {
                    x: 0,
                    y: 0,
                    dy: 28,
                    textAnchor: "middle",
                    className: "!fill-f1-foreground text-sm font-medium",
                    children: ye
                  }
                )
              ] });
            } : void 0
          }
        ),
        v.map((o, P) => /* @__PURE__ */ u(
          ce,
          {
            isAnimationActive: !1,
            dataKey: String(o),
            fill: t[o].color ? N(t[o].color) : R(P),
            radius: 4,
            maxBarSize: 32,
            children: a && /* @__PURE__ */ u(
              se,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${String(o)}`
            )
          },
          `bar-${String(o)}`
        )),
        g.map((o, P) => /* @__PURE__ */ u(
          le,
          {
            type: l?.lineType ?? "natural",
            dataKey: String(o),
            stroke: t[o].color ? N(t[o].color) : R(v.length + P),
            strokeWidth: 2,
            dot: l?.dot ?? !1,
            isAnimationActive: !1,
            yAxisId: l?.axisPosition === "right" ? "right" : void 0
          },
          `line-${String(o)}`
        )),
        O.map((o, P) => /* @__PURE__ */ u(
          W,
          {
            dataKey: String(o),
            fill: t[o].color ? N(t[o].color) : R(
              v.length + g.length + P
            ),
            r: 4,
            isAnimationActive: !1,
            yAxisId: p?.axisPosition === "right" ? "right" : void 0,
            shape: wt(String(o))
          },
          `scatter-${String(o)}`
        )),
        f && /* @__PURE__ */ u(
          Me,
          {
            content: /* @__PURE__ */ u(Ve, { nameKey: "label" }),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ]
    }
  ) });
}, St = ee(Ct), _t = ({ value: t, max: e = 100, label: i, color: r }, a) => {
  const n = r ? N(r) : N("categorical-1"), c = e > 0 ? e : 1, m = Math.min(100, Math.max(0, t / c * 100));
  return /* @__PURE__ */ E("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ u("div", { className: "flex-grow", children: /* @__PURE__ */ u(
      tt,
      {
        color: n,
        value: m,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": t,
        "aria-label": `${m.toFixed(1)}%`
      }
    ) }),
    i && /* @__PURE__ */ u("div", { className: "flex-shrink-0 text-sm font-medium", children: i })
  ] });
}, jt = ee(_t), Et = ge(
  function({ value: e, max: i = 100 }, r) {
    const a = Math.min(100, Math.max(0, e / i * 100));
    return /* @__PURE__ */ E("div", { ref: r, className: "flex h-2 w-full gap-0.5 overflow-hidden", children: [
      /* @__PURE__ */ u(
        "div",
        {
          className: "rounded transition-all duration-300 ease-in-out",
          style: {
            width: `${a}%`,
            backgroundColor: N("categorical-1")
          }
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          className: "rounded bg-f1-foreground-disabled transition-all duration-300 ease-in-out",
          style: { width: `${100 - a}%` }
        }
      )
    ] });
  }
);
Et.displayName = "ProgressBarDuo";
const kt = B(
  k({ name: "AreaChart", type: "info" }, We)
), Dt = B(
  k({ name: "BarChart", type: "info" }, Ge)
), Kt = B(
  k(
    { name: "CategoryBarChart", type: "info" },
    Ot
  )
), zt = B(
  k({ name: "LineChart", type: "info" }, Ze)
), It = B(
  k({ name: "PieChart", type: "info" }, qe)
), Lt = B(
  k(
    { name: "VerticalBarChart", type: "info" },
    Je
  )
), Ft = B(
  k({ name: "ProgressBarChart", type: "info" }, jt)
), Rt = B(
  k({ name: "ComboChart", type: "info" }, St)
);
export {
  kt as A,
  Dt as B,
  Kt as C,
  zt as L,
  It as P,
  Lt as V,
  Ft as a,
  Rt as b,
  Et as c
};
