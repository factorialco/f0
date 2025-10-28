import { S as me, a as lt, f as ae, L as K, b as ct, A as ut, i as Y, c as dt, d as Ae, E as ft, g as H, e as pt, h as mt, C as ht, j as vt, k as $, l as Oe, u as yt, G as gt, m as bt, n as he, o as xt, p as Ne, q as wt, B as ke, X as Le, Y as ie, r as Ct, s as De, t as Pt, v as St, w as At, x as Ot, y as Nt, z as kt, D as Lt, F as Dt, H as ve, I as Tt, J as V, K as re, M as Ft, N as It, O as _t, P as Te, Q as I, R as F, T as Et, U as jt, V as $t, W as Bt, Z as Mt, _ as Rt, $ as zt, a0 as Fe, a1 as Kt, a2 as J, a3 as Ie, a4 as _e, a5 as Vt, a6 as Ee, a7 as je, a8 as $e, a9 as Be, aa as Wt, ab as Me, ac as Gt, ad as qt, ae as Ut, af as ye, ag as ne, ah as Yt, ai as Ht, aj as Re, ak as Jt, al as Xt, am as ze, an as Zt, ao as Qt, ap as ea, aq as ta, ar as aa, as as ra, at as na, au as Ke, av as M, aw as Ve, ax as oa, ay as ia, az as ge, aA as sa, aB as We, aC as la, aD as ca, aE as ua, aF as da, aG as fa, aH as pa, aI as ma, aJ as ha, aK as va, aL as ya, aM as ga, aN as ba } from "./hooks-DOQ1Y3Gl.js";
import { bp as Ur, br as Yr, bA as Hr, aO as Jr, aP as Xr, aQ as Zr, aR as Qr, aS as en, aT as tn, aU as an, aV as rn, aX as nn, aY as on, aZ as sn, a_ as ln, a$ as cn, b0 as un, bw as dn, b2 as fn, b4 as pn, b5 as mn, b6 as hn, b7 as vn, ba as yn, bb as gn, bc as bn, bd as xn, bf as wn, b3 as Cn, be as Pn, b9 as Sn, bx as An, bq as On, bk as Nn, bn as kn, bj as Ln, bB as Dn, bi as Tn, bh as Fn, aW as In, b1 as _n, b8 as En, bg as jn, bl as $n, bs as Bn, bt as Mn, bu as Rn, bC as zn, bm as Kn, bv as Vn, bz as Wn, bo as Gn, by as qn } from "./hooks-DOQ1Y3Gl.js";
import { jsx as n, jsxs as w, Fragment as ee } from "react/jsx-runtime";
import * as ue from "react";
import k, { PureComponent as xa, useState as D, forwardRef as q, useEffect as B, useMemo as oe, useCallback as be, useRef as de, useImperativeHandle as wa, Children as Ca, createContext as Pa } from "react";
const br = {
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
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder: "Ask about time, people, or company info…",
    stopAnswerGeneration: "Stop generating",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well"
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn’t work"
      }
    }
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  }
}, xr = [
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
function Sa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Aa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Ue(a.key), a);
  }
}
function Oa(e, t, r) {
  return t && Aa(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Na(e, t, r) {
  return t = X(t), ka(e, Ge() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function ka(e, t) {
  if (t && (R(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return La(e);
}
function La(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ge() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ge = function() {
    return !!e;
  })();
}
function X(e) {
  return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, X(e);
}
function Da(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && se(e, t);
}
function se(e, t) {
  return se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, se(e, t);
}
function qe(e, t, r) {
  return t = Ue(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ue(e) {
  var t = Ta(e, "string");
  return R(t) == "symbol" ? t : t + "";
}
function Ta(e, t) {
  if (R(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (R(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var te = /* @__PURE__ */ (function(e) {
  function t() {
    return Sa(this, t), Na(this, t, arguments);
  }
  return Da(t, e), Oa(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(k.Component);
qe(te, "displayName", "ZAxis");
qe(te, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Fa = ["option", "isActive"];
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
function Ia(e, t) {
  if (e == null) return {};
  var r = _a(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      a = s[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function _a(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function Ea(e) {
  var t = e.option, r = e.isActive, a = Ia(e, Fa);
  return typeof t == "string" ? /* @__PURE__ */ k.createElement(me, W({
    option: /* @__PURE__ */ k.createElement(lt, W({
      type: t
    }, a)),
    isActive: r,
    shapeType: "symbols"
  }, a)) : /* @__PURE__ */ k.createElement(me, W({
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
function xe(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xe(Object(r), !0).forEach(function(a) {
      E(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xe(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function ja(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function we(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, He(a.key), a);
  }
}
function $a(e, t, r) {
  return t && we(e.prototype, t), r && we(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ba(e, t, r) {
  return t = Z(t), Ma(e, Ye() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Ma(e, t) {
  if (t && (z(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ra(e);
}
function Ra(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ye() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ye = function() {
    return !!e;
  })();
}
function Z(e) {
  return Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Z(e);
}
function za(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && le(e, t);
}
function le(e, t) {
  return le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, le(e, t);
}
function E(e, t, r) {
  return t = He(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function He(e) {
  var t = Ka(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function Ka(e, t) {
  if (z(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (z(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var U = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    ja(this, t);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return r = Ba(this, t, [].concat(o)), E(r, "state", {
      isAnimationFinished: !1
    }), E(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), E(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), E(r, "id", yt("recharts-scatter-")), r;
  }
  return za(t, e), $a(t, [{
    key: "renderSymbolsStatically",
    value: function(a) {
      var o = this, s = this.props, c = s.shape, f = s.activeShape, i = s.activeIndex, p = ae(this.props, !1);
      return a.map(function(d, m) {
        var h = i === m, u = h ? f : c, b = T(T({}, p), d);
        return /* @__PURE__ */ k.createElement(K, G({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(d?.cx, "-").concat(d?.cy, "-").concat(d?.size, "-").concat(m)
        }, ct(o.props, d, m), {
          role: "img"
        }), /* @__PURE__ */ k.createElement(Ea, G({
          option: u,
          isActive: h,
          key: "symbol-".concat(m)
        }, b)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var a = this, o = this.props, s = o.points, c = o.isAnimationActive, f = o.animationBegin, i = o.animationDuration, p = o.animationEasing, d = o.animationId, m = this.state.prevPoints;
      return /* @__PURE__ */ k.createElement(ut, {
        begin: f,
        duration: i,
        isActive: c,
        easing: p,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(d),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var u = h.t, b = s.map(function(C, x) {
          var A = m && m[x];
          if (A) {
            var g = Y(A.cx, C.cx), v = Y(A.cy, C.cy), P = Y(A.size, C.size);
            return T(T({}, C), {}, {
              cx: g(u),
              cy: v(u),
              size: P(u)
            });
          }
          var S = Y(0, C.size);
          return T(T({}, C), {}, {
            size: S(u)
          });
        });
        return /* @__PURE__ */ k.createElement(K, null, a.renderSymbolsStatically(b));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var a = this.props, o = a.points, s = a.isAnimationActive, c = this.state.prevPoints;
      return s && o && o.length && (!c || !dt(c, o)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(o);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.points, c = o.xAxis, f = o.yAxis, i = o.children, p = Ae(i, ft);
      return p ? p.map(function(d, m) {
        var h = d.props, u = h.direction, b = h.dataKey;
        return /* @__PURE__ */ k.cloneElement(d, {
          key: "".concat(u, "-").concat(b, "-").concat(s[m]),
          data: s,
          xAxis: c,
          yAxis: f,
          layout: u === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(x, A) {
            return {
              x: x.cx,
              y: x.cy,
              value: u === "x" ? +x.node.x : +x.node.y,
              errorVal: H(x, A)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var a = this.props, o = a.points, s = a.line, c = a.lineType, f = a.lineJointType, i = ae(this.props, !1), p = ae(s, !1), d, m;
      if (c === "joint")
        d = o.map(function(v) {
          return {
            x: v.cx,
            y: v.cy
          };
        });
      else if (c === "fitting") {
        var h = pt(o), u = h.xmin, b = h.xmax, C = h.a, x = h.b, A = function(P) {
          return C * P + x;
        };
        d = [{
          x: u,
          y: A(u)
        }, {
          x: b,
          y: A(b)
        }];
      }
      var g = T(T(T({}, i), {}, {
        fill: "none",
        stroke: i && i.fill
      }, p), {}, {
        points: d
      });
      return /* @__PURE__ */ k.isValidElement(s) ? m = /* @__PURE__ */ k.cloneElement(s, g) : mt(s) ? m = s(g) : m = /* @__PURE__ */ k.createElement(ht, G({}, g, {
        type: f
      })), /* @__PURE__ */ k.createElement(K, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, m);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, o = a.hide, s = a.points, c = a.line, f = a.className, i = a.xAxis, p = a.yAxis, d = a.left, m = a.top, h = a.width, u = a.height, b = a.id, C = a.isAnimationActive;
      if (o || !s || !s.length)
        return null;
      var x = this.state.isAnimationFinished, A = vt("recharts-scatter", f), g = i && i.allowDataOverflow, v = p && p.allowDataOverflow, P = g || v, S = $(b) ? this.id : b;
      return /* @__PURE__ */ k.createElement(K, {
        className: A,
        clipPath: P ? "url(#clipPath-".concat(S, ")") : null
      }, g || v ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: g ? d : d - h / 2,
        y: v ? m : m - u / 2,
        width: g ? h : h * 2,
        height: v ? u : u * 2
      }))) : null, c && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ k.createElement(K, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!C || x) && Oe.renderCallByParent(this.props, s));
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
})(xa);
E(U, "displayName", "Scatter");
E(U, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !gt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
E(U, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, a = e.zAxis, o = e.item, s = e.displayedData, c = e.xAxisTicks, f = e.yAxisTicks, i = e.offset, p = o.props.tooltipType, d = Ae(o.props.children, bt), m = $(t.dataKey) ? o.props.dataKey : t.dataKey, h = $(r.dataKey) ? o.props.dataKey : r.dataKey, u = a && a.dataKey, b = a ? a.range : te.defaultProps.range, C = b && b[0], x = t.scale.bandwidth ? t.scale.bandwidth() : 0, A = r.scale.bandwidth ? r.scale.bandwidth() : 0, g = s.map(function(v, P) {
    var S = H(v, m), y = H(v, h), l = !$(u) && H(v, u) || "-", O = [{
      name: $(t.dataKey) ? o.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: S,
      payload: v,
      dataKey: m,
      type: p
    }, {
      name: $(r.dataKey) ? o.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: y,
      payload: v,
      dataKey: h,
      type: p
    }];
    l !== "-" && O.push({
      name: a.name || a.dataKey,
      unit: a.unit || "",
      value: l,
      payload: v,
      dataKey: u,
      type: p
    });
    var L = he({
      axis: t,
      ticks: c,
      bandSize: x,
      entry: v,
      index: P,
      dataKey: m
    }), _ = he({
      axis: r,
      ticks: f,
      bandSize: A,
      entry: v,
      index: P,
      dataKey: h
    }), j = l !== "-" ? a.scale(l) : C, N = Math.sqrt(Math.max(j, 0) / Math.PI);
    return T(T({}, v), {}, {
      cx: L,
      cy: _,
      x: L - N,
      y: _ - N,
      xAxis: t,
      yAxis: r,
      zAxis: a,
      width: 2 * N,
      height: 2 * N,
      size: j,
      node: {
        x: S,
        y,
        z: l
      },
      tooltipPayload: O,
      tooltipPosition: {
        x: L,
        y: _
      },
      payload: v
    }, d && d[P] && d[P].props);
  });
  return T({
    points: g
  }, i);
});
var Va = xt({
  chartName: "ComposedChart",
  GraphicalChild: [Ne, wt, ke, U],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Le
  }, {
    axisType: "yAxis",
    AxisComp: ie
  }, {
    axisType: "zAxis",
    AxisComp: te
  }],
  formatAxisMap: Ct
});
const Wa = (e) => {
  const t = (r) => {
    const { cx: a, cy: o, fill: s, payload: c } = r, f = () => {
      if (!c) return "-";
      if (c[e] !== void 0)
        return c[e];
      for (const [i, p] of Object.entries(c))
        if (typeof p == "number" && i !== "x")
          return p;
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
        i?.parentElement && i.parentElement.setAttribute("aria-label", `Data point: ${f()}`);
      }
    });
  };
  return t.displayName = `Scatter-${e}`, t;
}, Ga = ({ dataConfig: e, data: t, xAxis: r, yAxis: a = {
  hide: !0
}, label: o = !1, hideTooltip: s = !1, hideGrid: c = !1, aspect: f, legend: i, showValueUnderLabel: p = !1, bar: d, line: m, scatter: h, onClick: u }, b) => {
  const C = Pt(t), x = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], A = m?.categories ? Array.isArray(m.categories) ? m.categories : [m.categories] : [], g = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], v = [...x, ...A, ...g], P = Math.max(...C.flatMap((l) => v.map((O) => St(a?.tickFormatter ? a.tickFormatter(`${l[O]}`) : `${l[O]}`)))), S = [d, m, h].filter((l) => l?.axisPosition === "left"), y = [d, m, h].filter((l) => l?.axisPosition === "right");
  return n(At, {
    config: e,
    ref: b,
    aspect: f,
    children: w(Va, {
      accessibilityLayer: !0,
      data: C,
      margin: {
        left: a && !a.hide ? 0 : 12,
        right: 12,
        top: o ? 24 : 0,
        bottom: p ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (l) => {
        if (!u || !l.activeLabel || !l.activePayload)
          return;
        const O = {
          label: l.activeLabel,
          values: {}
        };
        for (const L of l.activePayload)
          O.values[L.name] = L.value;
        u(O);
      },
      children: [!s && n(Ot, {
        ...Nt(),
        content: n(kt, {
          yAxisFormatter: a.tickFormatter
        })
      }), !c && n(Lt, {
        ...Dt()
      }), S.length > 0 && n(ie, {
        ...ve(a),
        tick: !0,
        width: a.width ?? P + 20 + (y.length > 0 && S[0]?.axisLabel ? 20 : 0),
        hide: a.hide || S.some((l) => l?.hideAxis),
        label: S[0]?.axisLabel ? {
          value: S[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), y.length > 0 && n(ie, {
        ...ve(a),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: a.width ?? P + 20 + (S.length > 0 && y[0]?.axisLabel ? 20 : 0),
        hide: a.hide || y.some((l) => l?.hideAxis),
        label: y[0]?.axisLabel ? {
          value: y[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), n(Le, {
        ...Tt(r),
        hide: r?.hide,
        tick: p ? (l) => {
          const { x: O, y: L, payload: _ } = l, j = t.find((st) => st.label === _.value)?.values || "", N = Object.keys(j).length === 1 ? Object.values(j)?.[0] : void 0, it = N !== void 0 && a.tickFormatter ? a.tickFormatter(`${N}`) : N.toLocaleString();
          return w("g", {
            transform: `translate(${O},${L})`,
            children: [n("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: _.value
            }), !!N && n("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: it
            })]
          });
        } : void 0
      }), x.map((l, O) => n(ke, {
        isAnimationActive: !1,
        dataKey: String(l),
        fill: e[l].color ? V(e[l].color) : re(O),
        radius: 4,
        maxBarSize: 32,
        children: o && n(Oe, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(l)}`)
      }, `bar-${String(l)}`)), A.map((l, O) => n(Ne, {
        type: m?.lineType ?? "natural",
        dataKey: String(l),
        stroke: e[l].color ? V(e[l].color) : re(x.length + O),
        strokeWidth: 2,
        dot: m?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: m?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(l)}`)), g.map((l, O) => n(U, {
        dataKey: String(l),
        fill: e[l].color ? V(e[l].color) : re(x.length + A.length + O),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: Wa(String(l))
      }, `scatter-${String(l)}`)), i && n(Ft, {
        content: n(It, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, qa = De(Ga);
var fe = "Progress", pe = 100, [Ua] = _t(fe), [Ya, Ha] = Ua(fe), Je = ue.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: a = null,
      max: o,
      getValueLabel: s = Ja,
      ...c
    } = e;
    (o || o === 0) && !Ce(o) && console.error(Xa(`${o}`, "Progress"));
    const f = Ce(o) ? o : pe;
    a !== null && !Pe(a, f) && console.error(Za(`${a}`, "Progress"));
    const i = Pe(a, f) ? a : null, p = Q(i) ? s(i, f) : void 0;
    return /* @__PURE__ */ n(Ya, { scope: r, value: i, max: f, children: /* @__PURE__ */ n(
      Te.div,
      {
        "aria-valuemax": f,
        "aria-valuemin": 0,
        "aria-valuenow": Q(i) ? i : void 0,
        "aria-valuetext": p,
        role: "progressbar",
        "data-state": Qe(i, f),
        "data-value": i ?? void 0,
        "data-max": f,
        ...c,
        ref: t
      }
    ) });
  }
);
Je.displayName = fe;
var Xe = "ProgressIndicator", Ze = ue.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...a } = e, o = Ha(Xe, r);
    return /* @__PURE__ */ n(
      Te.div,
      {
        "data-state": Qe(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...a,
        ref: t
      }
    );
  }
);
Ze.displayName = Xe;
function Ja(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Qe(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Q(e) {
  return typeof e == "number";
}
function Ce(e) {
  return Q(e) && !isNaN(e) && e > 0;
}
function Pe(e, t) {
  return Q(e) && !isNaN(e) && e <= t && e >= 0;
}
function Xa(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${pe}\`.`;
}
function Za(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${pe} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var et = Je, Qa = Ze;
const tt = ue.forwardRef(({ className: e, value: t, ...r }, a) => n(et, {
  ref: a,
  className: I("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: n(Qa, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
tt.displayName = et.displayName;
const er = ({ value: e, max: t = 100, label: r, color: a }, o) => {
  const s = a ? V(a) : V("categorical-1"), c = e / t * 100;
  return w("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [n("div", {
      className: "flex-grow",
      children: n(tt, {
        color: s,
        value: c,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": t,
        "aria-valuenow": e,
        "aria-label": `${c.toFixed(1)}%`
      })
    }), r && n("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: r
    })]
  });
}, tr = De(er), wr = F(
  {
    name: "AreaChart",
    type: "info"
  },
  Rt
), Cr = F(
  {
    name: "BarChart",
    type: "info"
  },
  Et
), Pr = F(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  jt
), Sr = F(
  {
    name: "LineChart",
    type: "info"
  },
  $t
), Ar = F(
  {
    name: "PieChart",
    type: "info"
  },
  Bt
), Or = F(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Mt
), Nr = F(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  tr
), kr = F(
  {
    name: "ComboChart",
    type: "info"
  },
  qa
), Lr = zt, Dr = Fe, Tr = ["default", "outline", "neutral"], Fr = Fe, Ir = ["sm", "md", "lg"], _r = Kt, ce = ({ count: e, list: t }) => {
  const [r, a] = D(!1), o = n(J, {
    label: `+${e}`
  });
  return t?.length ? w(Ie, {
    open: r,
    onOpenChange: a,
    children: [n(_e, {
      asChild: !0,
      children: n("button", {
        className: Vt("inline-flex flex-shrink-0 items-center"),
        children: o
      })
    }), n(Ee, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: w(je, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((s, c) => n("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n(J, {
            ...s
          })
        }, c)), n($e, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : o;
};
ce.displayName = "ChipCounter";
const at = ({ chips: e, max: t = 4, remainingCount: r, layout: a = "compact" }) => {
  if (a === "fill")
    return n(Wt, {
      items: e,
      renderListItem: (i) => n(J, {
        ...i
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: r !== void 0,
      renderOverflowIndicator: (i) => n(ce, {
        count: (r ?? 0) + i,
        list: r ? void 0 : e.slice(e.length - i)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const o = e.slice(0, t), s = e.slice(t), c = r ?? e.length - t, f = c > 0;
  return w("div", {
    className: "flex items-center gap-2",
    children: [o.map((i, p) => n(J, {
      ...i
    }, p)), f && n(ce, {
      count: c,
      list: r ? void 0 : s
    })]
  });
};
at.displayName = "F0ChipList";
const Er = Be("F0ChipList", at), rt = q(({ value: e, onDateChange: t, granularity: r, onOpenChange: a, minDate: o, maxDate: s, onClear: c, ...f }, i) => {
  const [p, d] = D(""), [m, h] = D(!1), u = Me();
  B(() => {
    d(r.toString(e?.value, u));
  }, [e, r, u]);
  const b = (g) => Ut(g, r, {
    minDate: o,
    maxDate: s
  }), C = (g, v) => {
    if (g === "") {
      t?.({
        value: void 0,
        granularity: v.key
      }), h(f.required ?? !1);
      return;
    }
    const P = v.toRange(v.fromString(g, u));
    P && b(P?.from) && b(P?.to) ? (t?.({
      value: P,
      granularity: v.key
    }), h(!1)) : h(!0);
  }, x = () => {
    C(p, r);
  };
  return n(ee, {
    children: n(Gt, {
      ...f,
      icon: qt,
      ref: i,
      onFocus: () => a?.(!0),
      onClear: () => {
        c?.(), d(""), C("", r);
      },
      onKeyDown: (g) => {
        g.key === "Enter" && x();
      },
      type: "text",
      onChange: (g) => {
        d(g);
      },
      error: m || f.error,
      onBlur: x,
      value: p,
      onClickContent: () => a?.(!0)
    })
  });
});
rt.displayName = "DateInput";
function ar({ onChange: e, value: t, presets: r = [], granularities: a = ["day"], minDate: o, maxDate: s, open: c = !1, ...f }) {
  const [i, p] = D(), [d, m] = D(c);
  B(() => {
    m(c);
  }, [c]);
  const h = Me(), u = oe(() => a[0] ?? "day", [a]), b = be((y) => {
    const l = y || u;
    if (!ye[l])
      throw new Error(`Invalid granularity ${l}`);
    return {
      ...ye[l],
      key: l
    };
  }, [u]), C = be((y) => {
    if (!y)
      return;
    const l = b(y?.granularity);
    return y ? {
      value: l.toRange(l.calendarMode === "range" ? y.value : y.value?.from ?? void 0),
      granularity: y.granularity
    } : void 0;
  }, [b]), x = oe(() => b(i?.granularity), [i?.granularity, b]);
  B(() => {
    const y = C(t);
    ne(i, y) || p(y);
  }, [t]);
  const A = (y) => {
    const l = C(y), L = b(l?.granularity).calendarMode !== "range" && l?.granularity === i?.granularity && !ne(l, i);
    g(l), L && m(!1);
  }, g = (y) => {
    const l = C(y);
    if (p(l), !ne(l, i)) {
      const O = b(l?.granularity);
      e?.(l, O.toString(l?.value, h));
    }
  }, v = (y) => {
    m(y), f.onOpenChange?.(y);
  }, P = oe(() => r.filter((y) => a.includes(y.granularity)), [r, a]), S = de(null);
  return B(() => {
    d && S.current && requestAnimationFrame(() => {
      S.current?.focus();
    });
  }, [d]), n(Yt, {
    hideCalendarInput: !0,
    onSelect: A,
    value: i,
    presets: P,
    granularities: a,
    minDate: o,
    maxDate: s,
    open: d,
    onOpenChange: v,
    asChild: !0,
    children: n(rt, {
      ref: S,
      ...f,
      value: i,
      granularity: x,
      onDateChange: g
    })
  });
}
const jr = Ht, $r = Be(
  "F0DatePicker",
  ar
), rr = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, nr = q(function({ widgets: t, children: r }, a) {
  const o = de(null);
  wa(a, () => o.current);
  const s = Ca.toArray(t).filter((c) => !!c).map((c, f) => n("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: c
  }, f));
  return n(Re, {
    layout: "home",
    children: w("div", {
      ref: o,
      className: "@container",
      children: [w("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [n(Jt, {
          columns: rr,
          showArrows: !1,
          children: s
        }), n("main", {
          children: r
        })]
      }), w("div", {
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
}), or = q(function({ children: t, sideContent: r, mainColumnPosition: a = "left", sticky: o = !1 }, s) {
  return n("div", {
    ref: s,
    className: "h-full",
    children: w("div", {
      className: I("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
      children: [n("main", {
        className: I("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", a === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: t
      }), n(ir, {
        sticky: o,
        className: I("order-1", a === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), ir = ({ children: e, className: t }) => n("aside", {
  className: I("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
  children: e
}), sr = Xt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), nt = k.forwardRef(({ children: e, variant: t, className: r, ...a }, o) => n(Re, {
  layout: "standard",
  children: n("section", {
    ref: o,
    className: I("relative flex-1 overflow-auto", r),
    ...a,
    children: n("div", {
      className: I(sr({
        variant: t
      })),
      children: e
    })
  })
}));
nt.displayName = "StandardLayout";
const Br = F({
  name: "StandardLayout",
  type: "layout"
}, nt), Mr = F({
  name: "TwoColumnLayout",
  type: "layout"
}, or), Rr = F({
  name: "HomeLayout",
  type: "layout"
}, nr), lr = ({ benefits: e }) => n("div", {
  className: "flex flex-col gap-2",
  children: e.map((t, r) => n(cr, {
    text: t
  }, r))
}), cr = ({ text: e }) => w("div", {
  className: "flex flex-row items-start gap-2",
  children: [n(Qt, {
    icon: ea,
    size: "md",
    className: "text-f1-icon-positive"
  }), n("span", {
    children: e
  })]
}), ot = q(({ title: e, image: t, benefits: r, actions: a, withShadow: o = !0, module: s, moduleName: c, tag: f }, i) => w("div", {
  ref: i,
  className: I("bg-white flex flex-row rounded-xl border border-f1-border-secondary", o && "shadow-md"),
  children: [n("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: n("img", {
      src: t,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), w("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [w("div", {
      className: "flex flex-col gap-5",
      children: [w("div", {
        className: "flex flex-col gap-2",
        children: [w("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && n(ze, {
            module: s
          }), c && n("p", {
            className: "text-base font-medium text-f1-foreground",
            children: c
          })]
        }), f && n("div", {
          className: "flex justify-start",
          children: n(Zt, {
            icon: f.icon,
            text: f.label
          })
        }), n("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: e
        })]
      }), n(lr, {
        benefits: r
      })]
    }), a && n("div", {
      className: "flex gap-3",
      children: a
    })]
  })]
}));
ot.displayName = "ProductBlankslate";
function ur({ isOpen: e, onClose: t, title: r, children: a, module: o, portalContainer: s }) {
  const [c, f] = D(e);
  return B(() => {
    f(e);
  }, [e]), n(ta, {
    open: c,
    onOpenChange: (p) => {
      f(p), p || t();
    },
    modal: !0,
    children: w(aa, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [w("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [w(ra, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [o && n(ze, {
            module: o,
            size: "lg"
          }), r]
        }), n(na, {
          variant: "outline",
          icon: Ke,
          onClick: t,
          label: "Close modal",
          hideLabel: !0
        })]
      }), w(je, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [a, n($e, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function zr({ isOpen: e, onClose: t, title: r, image: a, benefits: o, errorMessage: s, successMessage: c, loadingState: f, nextSteps: i, closeLabel: p, primaryAction: d, modalTitle: m, modalModule: h, secondaryAction: u, portalContainer: b, tag: C, showResponseDialog: x = !0 }) {
  const [A, g] = D(e), [v, P] = D(null), [S, y] = D(!1), l = async () => {
    if (d?.onClick) {
      y(!0);
      try {
        await d.onClick(), g(!1), x && P("success");
      } catch {
        x && P("error");
      } finally {
        y(!1);
      }
    }
  }, O = () => {
    g(!1), t?.();
  }, L = S;
  return w(ee, {
    children: [n(ur, {
      isOpen: A,
      onClose: O,
      title: m,
      module: h,
      portalContainer: b,
      children: n("div", {
        className: "pb-4 pl-4",
        children: n(ot, {
          title: r,
          image: a,
          benefits: o,
          withShadow: !1,
          tag: C,
          actions: w("div", {
            className: "flex gap-3",
            children: [d && n(M, {
              variant: d.variant,
              label: L ? f.label : d.label,
              icon: d.icon || void 0,
              onClick: l,
              loading: d.loading,
              size: d.size
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
    }), v && x && n(Ve, {
      open: !0,
      onClose: () => {
        O(), P(null);
      },
      success: v === "success",
      errorMessage: s,
      successMessage: c,
      nextSteps: i,
      closeLabel: p,
      portalContainer: b
    })]
  });
}
function dr({ mediaUrl: e, title: t, description: r, onClose: a, dismissible: o, width: s, trackVisibility: c, actions: f, showConfirmation: i = !0 }) {
  const [p, d] = D(!1), m = () => {
    d(!0), a && a();
  };
  B(() => {
    c && c(!p);
  }, [c, p]);
  const h = e?.includes(".mp4");
  return n(ee, {
    children: p ? null : w(oa, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [w(ia, {
        children: [o && n("div", {
          className: "absolute right-2 top-2 z-10",
          children: n(M, {
            variant: "ghost",
            icon: Ke,
            size: "sm",
            hideLabel: !0,
            onClick: m,
            label: "Close"
          })
        }), w("div", {
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
          }), w("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [n(ge, {
              className: "text-lg font-medium",
              children: t
            }), n(ge, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: r
            })]
          })]
        })]
      }), f && n(sa, {
        className: "p-3",
        children: f.map((u) => u.type === "upsell" ? n(We, {
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
const fr = q(function({ primaryAction: t, secondaryAction: r, ...a }, o) {
  const s = (i) => i.variant === "promote" ? n(We, {
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
  }), c = t?.variant !== "promote" ? t : void 0, f = r?.variant !== "promote" ? r : void 0;
  return w(la, {
    ref: o,
    ...a,
    primaryAction: c,
    secondaryAction: f,
    children: [t?.variant === "promote" && s(t), r?.variant === "promote" && s(r)]
  });
});
fr.displayName = "UpsellingBanner";
function Kr({ isOpen: e, setIsOpen: t, label: r, variant: a = "promote", size: o = "md", showIcon: s = !0, side: c = "right", align: f = "center", icon: i = ca, mediaUrl: p, title: d, description: m, width: h = "300px", trackVisibility: u, actions: b, onClick: C, hideLabel: x = !1 }) {
  const [A, g] = D(!1), [v, P] = D(null), [S, y] = D(null), l = (N) => {
    t(N), C && C();
  }, O = async (N) => {
    if (N.type === "upsell") {
      y(N);
      try {
        await N.onClick(), N.showConfirmation && (g(!0), P("success"));
      } catch {
        g(!0), P("error");
      }
    }
  }, L = () => {
    P(null), g(!1), y(null), t(!1);
  }, _ = e && !A, j = b?.map((N) => N.type === "upsell" ? {
    ...N,
    onClick: () => O(N)
  } : N);
  return w(ee, {
    children: [w(Ie, {
      open: _,
      onOpenChange: l,
      children: [n(_e, {
        asChild: !0,
        children: n(M, {
          variant: a,
          label: r,
          size: o,
          icon: s ? i : void 0,
          onClick: () => t(e),
          hideLabel: x
        })
      }), n(Ee, {
        side: c,
        align: f,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: n(dr, {
          mediaUrl: p,
          title: d,
          description: m,
          onClose: () => t(!1),
          dismissible: !1,
          width: h,
          trackVisibility: u,
          actions: j,
          showConfirmation: !1
        })
      })]
    }), S?.type === "upsell" && S.showConfirmation && v && n(Ve, {
      open: !0,
      onClose: L,
      success: v === "success",
      errorMessage: S.errorMessage,
      successMessage: S.successMessage,
      nextSteps: S.nextSteps,
      closeLabel: S.closeLabel,
      portalContainer: null
    })]
  });
}
const pr = Pa(null), mr = ({ children: e, fullScreen: t = !0 }) => {
  const r = de(null), [a, o] = D(r.current);
  return ba(() => {
    o(r.current);
  }, []), n(pr.Provider, {
    value: {
      element: a
    },
    children: n("div", {
      ref: r,
      id: "f0-layout",
      className: I({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    })
  });
}, hr = ({ children: e }) => n(ga, {
  reducedMotion: "user",
  children: e
}), Vr = ({ children: e, layout: t, link: r, privacyModeInitiallyEnabled: a, image: o, i18n: s, l10n: c, isDev: f = !1, dataCollectionStorageHandler: i, showExperimentalWarnings: p = !1 }) => n(hr, {
  children: n(ua, {
    isDev: f,
    showExperimentalWarnings: p,
    children: n(da, {
      ...c,
      children: n(fa, {
        ...s,
        children: n(pa, {
          ...r,
          children: n(mr, {
            ...t,
            children: n(ma, {
              children: n(ha, {
                initiallyEnabled: a,
                children: n(va, {
                  ...o,
                  children: n(ya, {
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
}), Se = (e) => `datacollection-${e}`, Wr = {
  get: async (e) => JSON.parse(
    localStorage.getItem(Se(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(Se(e), JSON.stringify(t));
  }
};
export {
  wr as AreaChart,
  Ur as Await,
  Cr as BarChart,
  Pr as CategoryBarChart,
  kr as ComboChart,
  Yr as DndProvider,
  Hr as EmojiImage,
  Jr as F0Avatar,
  Xr as F0AvatarAlert,
  Zr as F0AvatarCompany,
  Qr as F0AvatarDate,
  en as F0AvatarEmoji,
  tn as F0AvatarFile,
  an as F0AvatarIcon,
  rn as F0AvatarList,
  ze as F0AvatarModule,
  nn as F0AvatarPerson,
  on as F0AvatarTeam,
  M as F0Button,
  sn as F0ButtonDropdown,
  ln as F0ButtonToggle,
  cn as F0Card,
  un as F0Checkbox,
  Er as F0ChipList,
  $r as F0DatePicker,
  dn as F0EventCatcherProvider,
  Qt as F0Icon,
  fn as F0Link,
  Vr as F0Provider,
  pn as F0TagAlert,
  mn as F0TagBalance,
  hn as F0TagCompany,
  vn as F0TagDot,
  yn as F0TagList,
  gn as F0TagPerson,
  Zt as F0TagRaw,
  bn as F0TagStatus,
  xn as F0TagTeam,
  wn as GROUP_ID_SYMBOL,
  Rr as HomeLayout,
  Sr as LineChart,
  Cn as OneFilterPicker,
  Ar as PieChart,
  ha as PrivacyModeProvider,
  ot as ProductBlankslate,
  Pn as ProductCard,
  zr as ProductModal,
  dr as ProductWidget,
  Nr as ProgressBarChart,
  Br as StandardLayout,
  Sn as TagCounter,
  Mr as TwoColumnLayout,
  Ve as UpsellRequestResponseDialog,
  fr as UpsellingBanner,
  We as UpsellingButton,
  Kr as UpsellingPopover,
  Or as VerticalBarChart,
  xr as avatarVariants,
  An as buildTranslations,
  Fr as buttonDropdownSizes,
  Tr as buttonDropdownVariants,
  Dr as buttonSizes,
  Ir as buttonToggleSizes,
  Lr as buttonVariants,
  On as createAtlaskitDriver,
  Nn as createDataSourceDefinition,
  Wr as dataCollectionLocalStorageHandler,
  jr as datepickerSizes,
  br as defaultTranslations,
  Be as experimental,
  kn as getAnimationVariants,
  Ln as getDataSourcePaginationType,
  Dn as getEmojiLabel,
  Tn as isInfiniteScrollPagination,
  Fn as isPageBasedPagination,
  _r as linkVariants,
  In as modules,
  _n as predefinedPresets,
  En as tagDotColors,
  jn as useData,
  $n as useDataSource,
  Bn as useDndEvents,
  Mn as useDraggable,
  Rn as useDroppableList,
  zn as useEmojiConfetti,
  Kn as useGroups,
  Vn as usePrivacyMode,
  Wn as useReducedMotion,
  Gn as useSelectable,
  qn as useXRay
};
