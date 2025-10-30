import { c as mt, a as ht, P as Te, b as E, C as _, d as vt, e as Fe, f as yt, g as Z, h as _e, i as Ee, j as gt, k as je, S as Ie, l as $e, m as Be, O as bt, u as Me, I as xt, n as wt, o as xe, p as Pt, q as St, F as Re, r as Ct, s as Nt, t as At, D as Ot, v as Lt, w as kt, B as Dt, x as ze, y as M, z as Tt, U as Ft, L as _t, A as Et, E as jt, X as It, G as $t, H as Bt } from "./dialog-BF8CBjf_.js";
import { a5 as en, aa as tn, J as an, K as rn, M as nn, Q as on, R as sn, T as ln, a6 as cn, V as un, Y as dn, W as fn, a7 as pn, a1 as mn, a4 as hn, a0 as vn, ab as yn, $ as gn, _ as bn, N as xn, Z as wn, a2 as Pn, ac as Sn, a3 as Cn, a9 as Nn, a8 as An } from "./dialog-BF8CBjf_.js";
import { S as we, a as Mt, f as ne, L as K, b as Rt, A as zt, i as H, c as Kt, d as Ke, E as Wt, g as X, e as Vt, h as qt, C as Gt, j as $, k as We, u as Jt, G as Ut, l as Yt, m as Pe, n as Ht, o as Ve, p as Xt, B as qe, X as Ge, Y as le, q as Zt, r as Je, s as Qt, t as ea, v as ta, w as aa, x as ra, y as na, z as oa, D as ia, F as Se, H as sa, I as W, J as oe, K as la, M as ca, N as ua, O as da, P as fa, Q as pa, V as ma, R as ha, T as va, U as ie, W as ya, Z as Ue, _ as ga, $ as Ye, a0 as ba, a1 as xa, a2 as Ce, a3 as wa, a4 as He, a5 as Pa, a6 as Sa, a7 as Ca, a8 as Na } from "./hooks-ChTZ58Up.js";
import { aw as Ln, a9 as kn, aa as Dn, ab as Tn, ac as Fn, ad as _n, ae as En, af as jn, ah as In, aj as $n, ak as Bn, al as Mn, am as Rn, ap as zn, aq as Kn, ar as Wn, as as Vn, at as qn, ao as Gn, ag as Jn, av as Un, ai as Yn, an as Hn, ax as Xn, ay as Zn, az as Qn, aA as eo, au as to } from "./hooks-ChTZ58Up.js";
import { jsx as n, jsxs as N, Fragment as ae } from "react/jsx-runtime";
import * as fe from "react";
import L, { PureComponent as Aa, useState as D, forwardRef as G, useEffect as B, useMemo as se, useCallback as Ne, useRef as pe, useImperativeHandle as Oa, Children as La, createContext as ka } from "react";
const Ar = {
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected"
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required"
    }
  },
  navigation: {
    sidebar: "Main navigation",
    previous: "Previous",
    next: "Next"
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    send: "Send",
    cancel: "Cancel",
    copy: "Copy",
    close: "Close",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
    moveUp: "Move up",
    moveDown: "Move down",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    other: "Other actions",
    toggle: "Toggle",
    toggleDropdownMenu: "Toggle dropdown menu"
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected"
    }
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    applySelection: "Apply selection",
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry"
  },
  toc: {
    search: "Search..."
  },
  collections: {
    sorting: {
      noSorting: "No sorting",
      toggleDirection: "Toggle sorting direction",
      sortBy: "Sort by"
    },
    grouping: {
      noGrouping: "No grouping",
      groupBy: "Group by",
      toggleDirection: "Toggle direction"
    },
    actions: {
      actions: "Actions"
    },
    visualizations: {
      table: "Table view",
      card: "Card view",
      list: "List view",
      kanban: "Kanban view",
      pagination: {
        of: "of"
      },
      settings: "{{visualizationName}} settings",
      reset: "Reset to default"
    },
    itemsCount: "items",
    emptyStates: {
      noData: {
        title: "No data",
        description: "No data available"
      },
      noResults: {
        title: "No results",
        description: "No results found try another search or clear the filters",
        clearFilters: "Clear filters"
      },
      error: {
        title: "Error",
        description: "An error occurred while loading the data",
        retry: "Retry"
      }
    },
    summaries: {
      types: {
        sum: "sum"
      }
    }
  },
  shortcut: "Shortcut",
  date: {
    from: "From",
    to: "To",
    none: "None",
    date: "Date",
    custom: "Custom period",
    selectDate: "Select Date",
    compareTo: "Compare to",
    presets: {
      last7Days: "Last 7 days",
      last30Days: "Last 30 days",
      last3Months: "Last 3 months",
      last6Months: "Last 6 months",
      lastYear: "Last year",
      last3Years: "Last 3 years",
      last100Years: "Last 100 years"
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other"
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day"
      },
      week: {
        currentDate: "This week",
        label: "Week",
        long: "Week of {{day}} {{month}} {{year}}",
        longSingular: "Week of {{date}}",
        longPlural: "Weeks of {{date}}"
      },
      month: {
        currentDate: "This month",
        label: "Month"
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter"
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year"
      },
      year: {
        currentDate: "This year",
        label: "Year"
      },
      range: {
        currentDate: "Today",
        label: "Range"
      }
    },
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December"
    }
  },
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite"
  },
  notifications: "Notifications",
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  }
}, Or = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
function R(e) {
  "@babel/helpers - typeof";
  return R = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, R(e);
}
function Da(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ta(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Qe(a.key), a);
  }
}
function Fa(e, t, r) {
  return t && Ta(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _a(e, t, r) {
  return t = Q(t), Ea(e, Xe() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r));
}
function Ea(e, t) {
  if (t && (R(t) === "object" || typeof t == "function"))
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
function Xe() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Xe = function() {
    return !!e;
  })();
}
function Q(e) {
  return Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Q(e);
}
function Ia(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ce(e, t);
}
function ce(e, t) {
  return ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, ce(e, t);
}
function Ze(e, t, r) {
  return t = Qe(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Qe(e) {
  var t = $a(e, "string");
  return R(t) == "symbol" ? t : t + "";
}
function $a(e, t) {
  if (R(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (R(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var re = /* @__PURE__ */ function(e) {
  function t() {
    return Da(this, t), _a(this, t, arguments);
  }
  return Ia(t, e), Fa(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(L.Component);
Ze(re, "displayName", "ZAxis");
Ze(re, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Ba = ["option", "isActive"];
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, V.apply(this, arguments);
}
function Ma(e, t) {
  if (e == null) return {};
  var r = Ra(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      a = s[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function Ra(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function za(e) {
  var t = e.option, r = e.isActive, a = Ma(e, Ba);
  return typeof t == "string" ? /* @__PURE__ */ L.createElement(we, V({
    option: /* @__PURE__ */ L.createElement(Mt, V({
      type: t
    }, a)),
    isActive: r,
    shapeType: "symbols"
  }, a)) : /* @__PURE__ */ L.createElement(we, V({
    option: t,
    isActive: r,
    shapeType: "symbols"
  }, a));
}
function z(e) {
  "@babel/helpers - typeof";
  return z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, z(e);
}
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, q.apply(this, arguments);
}
function Ae(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ae(Object(r), !0).forEach(function(a) {
      I(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ae(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Ka(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oe(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, tt(a.key), a);
  }
}
function Wa(e, t, r) {
  return t && Oe(e.prototype, t), r && Oe(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Va(e, t, r) {
  return t = ee(t), qa(e, et() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r));
}
function qa(e, t) {
  if (t && (z(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ga(e);
}
function Ga(e) {
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
function Ja(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ue(e, t);
}
function ue(e, t) {
  return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, ue(e, t);
}
function I(e, t, r) {
  return t = tt(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tt(e) {
  var t = Ua(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function Ua(e, t) {
  if (z(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (z(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var J = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Ka(this, t);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return r = Va(this, t, [].concat(o)), I(r, "state", {
      isAnimationFinished: !1
    }), I(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), I(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), I(r, "id", Jt("recharts-scatter-")), r;
  }
  return Ja(t, e), Wa(t, [{
    key: "renderSymbolsStatically",
    value: function(a) {
      var o = this, s = this.props, l = s.shape, d = s.activeShape, i = s.activeIndex, m = ne(this.props, !1);
      return a.map(function(c, f) {
        var h = i === f, u = h ? d : l, x = F(F({}, m), c);
        return /* @__PURE__ */ L.createElement(K, q({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c == null ? void 0 : c.cx, "-").concat(c == null ? void 0 : c.cy, "-").concat(c == null ? void 0 : c.size, "-").concat(f)
        }, Rt(o.props, c, f), {
          role: "img"
        }), /* @__PURE__ */ L.createElement(za, q({
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
      return /* @__PURE__ */ L.createElement(zt, {
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
        var u = h.t, x = s.map(function(A, S) {
          var O = f && f[S];
          if (O) {
            var b = H(O.cx, A.cx), g = H(O.cy, A.cy), w = H(O.size, A.size);
            return F(F({}, A), {}, {
              cx: b(u),
              cy: g(u),
              size: w(u)
            });
          }
          var C = H(0, A.size);
          return F(F({}, A), {}, {
            size: C(u)
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
      var o = this.props, s = o.points, l = o.xAxis, d = o.yAxis, i = o.children, m = Ke(i, Wt);
      return m ? m.map(function(c, f) {
        var h = c.props, u = h.direction, x = h.dataKey;
        return /* @__PURE__ */ L.cloneElement(c, {
          key: "".concat(u, "-").concat(x, "-").concat(s[f]),
          data: s,
          xAxis: l,
          yAxis: d,
          layout: u === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(S, O) {
            return {
              x: S.cx,
              y: S.cy,
              value: u === "x" ? +S.node.x : +S.node.y,
              errorVal: X(S, O)
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
        var h = Vt(o), u = h.xmin, x = h.xmax, A = h.a, S = h.b, O = function(w) {
          return A * w + S;
        };
        c = [{
          x: u,
          y: O(u)
        }, {
          x,
          y: O(x)
        }];
      }
      var b = F(F(F({}, i), {}, {
        fill: "none",
        stroke: i && i.fill
      }, m), {}, {
        points: c
      });
      return /* @__PURE__ */ L.isValidElement(s) ? f = /* @__PURE__ */ L.cloneElement(s, b) : qt(s) ? f = s(b) : f = /* @__PURE__ */ L.createElement(Gt, q({}, b, {
        type: d
      })), /* @__PURE__ */ L.createElement(K, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, o = a.hide, s = a.points, l = a.line, d = a.className, i = a.xAxis, m = a.yAxis, c = a.left, f = a.top, h = a.width, u = a.height, x = a.id, A = a.isAnimationActive;
      if (o || !s || !s.length)
        return null;
      var S = this.state.isAnimationFinished, O = mt("recharts-scatter", d), b = i && i.allowDataOverflow, g = m && m.allowDataOverflow, w = b || g, C = $(x) ? this.id : x;
      return /* @__PURE__ */ L.createElement(K, {
        className: O,
        clipPath: w ? "url(#clipPath-".concat(C, ")") : null
      }, b || g ? /* @__PURE__ */ L.createElement("defs", null, /* @__PURE__ */ L.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ L.createElement("rect", {
        x: b ? c : c - h / 2,
        y: g ? f : f - u / 2,
        width: b ? h : h * 2,
        height: g ? u : u * 2
      }))) : null, l && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ L.createElement(K, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!A || S) && We.renderCallByParent(this.props, s));
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
}(Aa);
I(J, "displayName", "Scatter");
I(J, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Ut.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
I(J, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, a = e.zAxis, o = e.item, s = e.displayedData, l = e.xAxisTicks, d = e.yAxisTicks, i = e.offset, m = o.props.tooltipType, c = Ke(o.props.children, Yt), f = $(t.dataKey) ? o.props.dataKey : t.dataKey, h = $(r.dataKey) ? o.props.dataKey : r.dataKey, u = a && a.dataKey, x = a ? a.range : re.defaultProps.range, A = x && x[0], S = t.scale.bandwidth ? t.scale.bandwidth() : 0, O = r.scale.bandwidth ? r.scale.bandwidth() : 0, b = s.map(function(g, w) {
    var C = X(g, f), y = X(g, h), v = !$(u) && X(g, u) || "-", k = [{
      name: $(t.dataKey) ? o.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: C,
      payload: g,
      dataKey: f,
      type: m
    }, {
      name: $(r.dataKey) ? o.props.name : r.name || r.dataKey,
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
    var T = Pe({
      axis: t,
      ticks: l,
      bandSize: S,
      entry: g,
      index: w,
      dataKey: f
    }), j = Pe({
      axis: r,
      ticks: d,
      bandSize: O,
      entry: g,
      index: w,
      dataKey: h
    }), p = v !== "-" ? a.scale(v) : A, P = Math.sqrt(Math.max(p, 0) / Math.PI);
    return F(F({}, g), {}, {
      cx: T,
      cy: j,
      x: T - P,
      y: j - P,
      xAxis: t,
      yAxis: r,
      zAxis: a,
      width: 2 * P,
      height: 2 * P,
      size: p,
      node: {
        x: C,
        y,
        z: v
      },
      tooltipPayload: k,
      tooltipPosition: {
        x: T,
        y: j
      },
      payload: g
    }, c && c[w] && c[w].props);
  });
  return F({
    points: b
  }, i);
});
var Ya = Ht({
  chartName: "ComposedChart",
  GraphicalChild: [Ve, Xt, qe, J],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ge
  }, {
    axisType: "yAxis",
    AxisComp: le
  }, {
    axisType: "zAxis",
    AxisComp: re
  }],
  formatAxisMap: Zt
});
const Ha = (e) => {
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
}, Xa = ({ dataConfig: e, data: t, xAxis: r, yAxis: a = {
  hide: !0
}, label: o = !1, hideTooltip: s = !1, hideGrid: l = !1, aspect: d, legend: i, showValueUnderLabel: m = !1, bar: c, line: f, scatter: h, onClick: u }, x) => {
  var v, k, T, j;
  const A = Qt(t), S = c != null && c.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], O = f != null && f.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], b = h != null && h.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], g = [...S, ...O, ...b], w = Math.max(...A.flatMap((p) => g.map((P) => ea(a != null && a.tickFormatter ? a.tickFormatter(`${p[P]}`) : `${p[P]}`)))), C = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "left"), y = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "right");
  return n(ta, {
    config: e,
    ref: x,
    aspect: d,
    children: N(Ya, {
      accessibilityLayer: !0,
      data: A,
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
        const P = {
          label: p.activeLabel,
          values: {}
        };
        for (const U of p.activePayload)
          P.values[U.name] = U.value;
        u(P);
      },
      children: [!s && n(aa, {
        ...ra(),
        content: n(na, {
          yAxisFormatter: a.tickFormatter
        })
      }), !l && n(oa, {
        ...ia()
      }), C.length > 0 && n(le, {
        ...Se(a),
        tick: !0,
        width: a.width ?? w + 20 + (y.length > 0 && ((v = C[0]) != null && v.axisLabel) ? 20 : 0),
        hide: a.hide || C.some((p) => p == null ? void 0 : p.hideAxis),
        label: (k = C[0]) != null && k.axisLabel ? {
          value: C[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), y.length > 0 && n(le, {
        ...Se(a),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: a.width ?? w + 20 + (C.length > 0 && ((T = y[0]) != null && T.axisLabel) ? 20 : 0),
        hide: a.hide || y.some((p) => p == null ? void 0 : p.hideAxis),
        label: (j = y[0]) != null && j.axisLabel ? {
          value: y[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), n(Ge, {
        ...sa(r),
        hide: r == null ? void 0 : r.hide,
        tick: m ? (p) => {
          var ge, be;
          const { x: P, y: U, payload: ve } = p, ye = ((ge = t.find((pt) => pt.label === ve.value)) == null ? void 0 : ge.values) || "", Y = Object.keys(ye).length === 1 ? (be = Object.values(ye)) == null ? void 0 : be[0] : void 0, ft = Y !== void 0 && a.tickFormatter ? a.tickFormatter(`${Y}`) : Y.toLocaleString();
          return N("g", {
            transform: `translate(${P},${U})`,
            children: [n("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: ve.value
            }), !!Y && n("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: ft
            })]
          });
        } : void 0
      }), S.map((p, P) => n(qe, {
        isAnimationActive: !1,
        dataKey: String(p),
        fill: e[p].color ? W(e[p].color) : oe(P),
        radius: 4,
        maxBarSize: 32,
        children: o && n(We, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(p)}`)
      }, `bar-${String(p)}`)), O.map((p, P) => n(Ve, {
        type: (f == null ? void 0 : f.lineType) ?? "natural",
        dataKey: String(p),
        stroke: e[p].color ? W(e[p].color) : oe(S.length + P),
        strokeWidth: 2,
        dot: (f == null ? void 0 : f.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (f == null ? void 0 : f.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(p)}`)), b.map((p, P) => n(J, {
        dataKey: String(p),
        fill: e[p].color ? W(e[p].color) : oe(S.length + O.length + P),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (h == null ? void 0 : h.axisPosition) === "right" ? "right" : void 0,
        shape: Ha(String(p))
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
}, Za = Je(Xa);
var me = "Progress", he = 100, [Qa, Lr] = ht(me), [er, tr] = Qa(me), at = fe.forwardRef(
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
      Te.div,
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
      Te.div,
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
  className: E("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
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
  const s = a ? W(a) : W("categorical-1"), l = e / t * 100;
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
}, sr = Je(ir), kr = _(
  {
    name: "AreaChart",
    type: "info"
  },
  ha
), Dr = _(
  {
    name: "BarChart",
    type: "info"
  },
  ua
), Tr = _(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  da
), Fr = _(
  {
    name: "LineChart",
    type: "info"
  },
  fa
), _r = _(
  {
    name: "PieChart",
    type: "info"
  },
  pa
), Er = _(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ma
), jr = _(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  sr
), Ir = _(
  {
    name: "ComboChart",
    type: "info"
  },
  Za
), $r = vt, Br = Fe, Mr = ["default", "outline", "neutral"], Rr = Fe, zr = yt, de = ({ count: e, list: t }) => {
  const [r, a] = D(!1), o = n(Z, {
    label: `+${e}`
  });
  return t != null && t.length ? N(_e, {
    open: r,
    onOpenChange: a,
    children: [n(Ee, {
      asChild: !0,
      children: n("button", {
        className: gt("inline-flex flex-shrink-0 items-center"),
        children: o
      })
    }), n(je, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: N(Ie, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((s, l) => n("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n(Z, {
            ...s
          })
        }, l)), n($e, {
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
      renderListItem: (i) => n(Z, {
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
    children: [o.map((i, m) => n(Z, {
      ...i
    }, m)), d && n(de, {
      count: l,
      list: r ? void 0 : s
    })]
  });
};
lt.displayName = "F0ChipList";
const Kr = Be("F0ChipList", lt), ct = G(({ value: e, onDateChange: t, granularity: r, onOpenChange: a, minDate: o, maxDate: s, onClear: l, ...d }, i) => {
  const [m, c] = D(""), [f, h] = D(!1), u = Me();
  B(() => {
    c(r.toString(e == null ? void 0 : e.value, u));
  }, [e, r, u]);
  const x = (b) => wt(b, r, {
    minDate: o,
    maxDate: s
  }), A = (b, g) => {
    if (b === "") {
      t == null || t({
        value: void 0,
        granularity: g.key
      }), h(d.required ?? !1);
      return;
    }
    const w = g.toRange(g.fromString(b, u));
    w && x(w == null ? void 0 : w.from) && x(w == null ? void 0 : w.to) ? (t == null || t({
      value: w,
      granularity: g.key
    }), h(!1)) : h(!0);
  }, S = () => {
    A(m, r);
  };
  return n(ae, {
    children: n(xt, {
      ...d,
      icon: va,
      ref: i,
      onFocus: () => a == null ? void 0 : a(!0),
      onClear: () => {
        l == null || l(), c(""), A("", r);
      },
      onKeyDown: (b) => {
        b.key === "Enter" && S();
      },
      type: "text",
      onChange: (b) => {
        c(b);
      },
      error: f || d.error,
      onBlur: S,
      value: m,
      onClickContent: () => a == null ? void 0 : a(!0)
    })
  });
});
ct.displayName = "DateInput";
function lr({ onChange: e, value: t, presets: r = [], granularities: a = ["day"], minDate: o, maxDate: s, open: l = !1, ...d }) {
  const [i, m] = D(), [c, f] = D(l);
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
  }, [u]), A = Ne((y) => {
    var k;
    if (!y)
      return;
    const v = x(y == null ? void 0 : y.granularity);
    return y ? {
      value: v.toRange(v.calendarMode === "range" ? y.value : ((k = y.value) == null ? void 0 : k.from) ?? void 0),
      granularity: y.granularity
    } : void 0;
  }, [x]), S = se(() => x(i == null ? void 0 : i.granularity), [i == null ? void 0 : i.granularity, x]);
  B(() => {
    const y = A(t);
    ie(i, y) || m(y);
  }, [t]);
  const O = (y) => {
    const v = A(y), T = x(v == null ? void 0 : v.granularity).calendarMode !== "range" && (v == null ? void 0 : v.granularity) === (i == null ? void 0 : i.granularity) && !ie(v, i);
    b(v), T && f(!1);
  }, b = (y) => {
    const v = A(y);
    if (m(v), !ie(v, i)) {
      const k = x(v == null ? void 0 : v.granularity);
      e == null || e(v, k.toString(v == null ? void 0 : v.value, h));
    }
  }, g = (y) => {
    var v;
    f(y), (v = d.onOpenChange) == null || v.call(d, y);
  }, w = se(() => r.filter((y) => a.includes(y.granularity)), [r, a]), C = pe(null);
  return B(() => {
    c && C.current && requestAnimationFrame(() => {
      var y;
      (y = C.current) == null || y.focus();
    });
  }, [c]), n(ya, {
    hideCalendarInput: !0,
    onSelect: O,
    value: i,
    presets: w,
    granularities: a,
    minDate: o,
    maxDate: s,
    open: c,
    onOpenChange: g,
    asChild: !0,
    children: n(ct, {
      ref: C,
      ...d,
      value: i,
      granularity: S,
      onDateChange: b
    })
  });
}
const Wr = Pt, Vr = Be(
  "F0DatePicker",
  lr
), cr = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ur = G(function({ widgets: t, children: r }, a) {
  const o = pe(null);
  Oa(a, () => o.current);
  const s = La.toArray(t).filter((l) => !!l).map((l, d) => n("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: l
  }, d));
  return n(Ue, {
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
}), dr = G(function({ children: t, sideContent: r, mainColumnPosition: a = "left", sticky: o = !1 }, s) {
  return n("div", {
    ref: s,
    className: "h-full",
    children: N("div", {
      className: E("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
      children: [n("main", {
        className: E("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", a === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: t
      }), n(fr, {
        sticky: o,
        className: E("order-1", a === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), fr = ({ children: e, className: t }) => n("aside", {
  className: E("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
  children: e
}), pr = St({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ut = L.forwardRef(({ children: e, variant: t, className: r, ...a }, o) => n(Ue, {
  layout: "standard",
  children: n("section", {
    ref: o,
    className: E("relative flex-1 overflow-auto", r),
    ...a,
    children: n("div", {
      className: E(pr({
        variant: t
      })),
      children: e
    })
  })
}));
ut.displayName = "StandardLayout";
const qr = _({
  name: "StandardLayout",
  type: "layout"
}, ut), Gr = _({
  name: "TwoColumnLayout",
  type: "layout"
}, dr), Jr = _({
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
    icon: At,
    size: "md",
    className: "text-f1-icon-positive"
  }), n("span", {
    children: e
  })]
}), dt = G(({ title: e, image: t, benefits: r, actions: a, withShadow: o = !0, module: s, moduleName: l, tag: d }, i) => N("div", {
  ref: i,
  className: E("bg-white flex flex-row rounded-xl border border-f1-border-secondary", o && "shadow-md"),
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
          children: [s && n(Re, {
            module: s
          }), l && n("p", {
            className: "text-base font-medium text-f1-foreground",
            children: l
          })]
        }), d && n("div", {
          className: "flex justify-start",
          children: n(Ct, {
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
  const [l, d] = D(e);
  return B(() => {
    d(e);
  }, [e]), n(Ot, {
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
          children: [o && n(Re, {
            module: o,
            size: "lg"
          }), r]
        }), n(Dt, {
          variant: "outline",
          icon: ze,
          onClick: t,
          label: "Close modal",
          hideLabel: !0
        })]
      }), N(Ie, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [a, n($e, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Ur({ isOpen: e, onClose: t, title: r, image: a, benefits: o, errorMessage: s, successMessage: l, loadingState: d, nextSteps: i, closeLabel: m, primaryAction: c, modalTitle: f, modalModule: h, secondaryAction: u, portalContainer: x, tag: A, showResponseDialog: S = !0 }) {
  const [O, b] = D(e), [g, w] = D(null), [C, y] = D(!1), v = async () => {
    if (c != null && c.onClick) {
      y(!0);
      try {
        await c.onClick(), b(!1), S && w("success");
      } catch {
        S && w("error");
      } finally {
        y(!1);
      }
    }
  }, k = () => {
    b(!1), t == null || t();
  }, T = C;
  return N(ae, {
    children: [n(vr, {
      isOpen: O,
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
          tag: A,
          actions: N("div", {
            className: "flex gap-3",
            children: [c && n(M, {
              variant: c.variant,
              label: T ? d.label : c.label,
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
    }), g && S && n(Ye, {
      open: !0,
      onClose: () => {
        k(), w(null);
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
  const [m, c] = D(!1), f = () => {
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
            icon: ze,
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
            children: [n(Ce, {
              className: "text-lg font-medium",
              children: t
            }), n(Ce, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: r
            })]
          })]
        })]
      }), d && n(wa, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? n(He, {
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
const gr = G(function({ primaryAction: t, secondaryAction: r, ...a }, o) {
  const s = (i) => i.variant === "promote" ? n(He, {
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
  return N(Pa, {
    ref: o,
    ...a,
    primaryAction: l,
    secondaryAction: d,
    children: [(t == null ? void 0 : t.variant) === "promote" && s(t), (r == null ? void 0 : r.variant) === "promote" && s(r)]
  });
});
gr.displayName = "UpsellingBanner";
function Yr({ isOpen: e, setIsOpen: t, label: r, variant: a = "promote", size: o = "md", showIcon: s = !0, side: l = "right", align: d = "center", icon: i = Tt, mediaUrl: m, title: c, description: f, width: h = "300px", trackVisibility: u, actions: x, onClick: A, hideLabel: S = !1 }) {
  const [O, b] = D(!1), [g, w] = D(null), [C, y] = D(null), v = (P) => {
    t(P), A && A();
  }, k = async (P) => {
    if (P.type === "upsell") {
      y(P);
      try {
        await P.onClick(), P.showConfirmation && (b(!0), w("success"));
      } catch {
        b(!0), w("error");
      }
    }
  }, T = () => {
    w(null), b(!1), y(null), t(!1);
  }, j = e && !O, p = x == null ? void 0 : x.map((P) => P.type === "upsell" ? {
    ...P,
    onClick: () => k(P)
  } : P);
  return N(ae, {
    children: [N(_e, {
      open: j,
      onOpenChange: v,
      children: [n(Ee, {
        asChild: !0,
        children: n(M, {
          variant: a,
          label: r,
          size: o,
          icon: s ? i : void 0,
          onClick: () => t(e),
          hideLabel: S
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
    }), (C == null ? void 0 : C.type) === "upsell" && C.showConfirmation && g && n(Ye, {
      open: !0,
      onClose: T,
      success: g === "success",
      errorMessage: C.errorMessage,
      successMessage: C.successMessage,
      nextSteps: C.nextSteps,
      closeLabel: C.closeLabel,
      portalContainer: null
    })]
  });
}
const br = ka(null), xr = ({ children: e, fullScreen: t = !0 }) => {
  const r = pe(null), [a, o] = D(r.current);
  return Bt(() => {
    o(r.current);
  }, []), n(br.Provider, {
    value: {
      element: a
    },
    children: n("div", {
      ref: r,
      id: "f0-layout",
      className: E({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    })
  });
}, wr = ({ children: e }) => n(Na, {
  reducedMotion: "user",
  children: e
}), Hr = ({ children: e, layout: t, link: r, privacyModeInitiallyEnabled: a, image: o, i18n: s, l10n: l, isDev: d = !1, dataCollectionStorageHandler: i, showExperimentalWarnings: m = !1 }) => n(wr, {
  children: n(Ft, {
    isDev: d,
    showExperimentalWarnings: m,
    children: n(_t, {
      ...l,
      children: n(Et, {
        ...s,
        children: n(jt, {
          ...r,
          children: n(xr, {
            ...t,
            children: n(It, {
              children: n(Sa, {
                initiallyEnabled: a,
                children: n($t, {
                  ...o,
                  children: n(Ca, {
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
}), De = (e) => `datacollection-${e}`, Xr = {
  get: async (e) => JSON.parse(
    localStorage.getItem(De(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(De(e), JSON.stringify(t));
  }
};
export {
  kr as AreaChart,
  en as Await,
  Dr as BarChart,
  Tr as CategoryBarChart,
  Ir as ComboChart,
  Ln as DndProvider,
  tn as EmojiImage,
  an as F0Avatar,
  kn as F0AvatarAlert,
  rn as F0AvatarCompany,
  Dn as F0AvatarDate,
  Tn as F0AvatarEmoji,
  nn as F0AvatarFile,
  Fn as F0AvatarIcon,
  _n as F0AvatarList,
  Re as F0AvatarModule,
  on as F0AvatarPerson,
  sn as F0AvatarTeam,
  M as F0Button,
  En as F0ButtonDropdown,
  jn as F0ButtonToggle,
  In as F0Card,
  ln as F0Checkbox,
  Kr as F0ChipList,
  Vr as F0DatePicker,
  cn as F0EventCatcherProvider,
  Nt as F0Icon,
  un as F0Link,
  Hr as F0Provider,
  $n as F0TagAlert,
  Bn as F0TagBalance,
  Mn as F0TagCompany,
  Rn as F0TagDot,
  zn as F0TagList,
  Kn as F0TagPerson,
  Ct as F0TagRaw,
  Wn as F0TagStatus,
  Vn as F0TagTeam,
  dn as GROUP_ID_SYMBOL,
  Jr as HomeLayout,
  Fr as LineChart,
  fn as OneFilterPicker,
  _r as PieChart,
  Sa as PrivacyModeProvider,
  dt as ProductBlankslate,
  qn as ProductCard,
  Ur as ProductModal,
  yr as ProductWidget,
  jr as ProgressBarChart,
  qr as StandardLayout,
  Gn as TagCounter,
  Gr as TwoColumnLayout,
  Ye as UpsellRequestResponseDialog,
  gr as UpsellingBanner,
  He as UpsellingButton,
  Yr as UpsellingPopover,
  Er as VerticalBarChart,
  Or as avatarVariants,
  pn as buildTranslations,
  Rr as buttonDropdownSizes,
  Mr as buttonDropdownVariants,
  Br as buttonSizes,
  Jn as buttonToggleSizes,
  $r as buttonVariants,
  Un as createAtlaskitDriver,
  mn as createDataSourceDefinition,
  Xr as dataCollectionLocalStorageHandler,
  Wr as datepickerSizes,
  Ar as defaultTranslations,
  Be as experimental,
  hn as getAnimationVariants,
  vn as getDataSourcePaginationType,
  yn as getEmojiLabel,
  gn as isInfiniteScrollPagination,
  bn as isPageBasedPagination,
  zr as linkVariants,
  xn as modules,
  Yn as predefinedPresets,
  Hn as tagDotColors,
  wn as useData,
  Pn as useDataSource,
  Xn as useDndEvents,
  Zn as useDraggable,
  Qn as useDroppableList,
  Sn as useEmojiConfetti,
  Cn as useGroups,
  eo as usePrivacyMode,
  Nn as useReducedMotion,
  to as useSelectable,
  An as useXRay
};
