import { C as I, L as pt, S as xe, a as mt, f as ne, b as K, c as ht, A as vt, i as U, d as yt, e as De, E as bt, g as X, h as gt, j as xt, k as wt, l as Pt, m as $, n as Fe, u as St, G as Ct, o as Nt, p as we, q as At, r as Ie, s as Ot, B as _e, X as Ee, Y as le, t as kt, v as je, w as Lt, x as Tt, y as Dt, z as Ft, D as It, F as _t, H as Et, I as jt, J as Pe, K as $t, M as W, N as oe, O as Mt, P as Bt, Q as Rt, R as $e, T as _, U as zt, V as Kt, W as Wt, Z as Gt, _ as qt, $ as Vt, a0 as Z, a1 as Me, a2 as Be, a3 as Yt, a4 as Re, a5 as ze, a6 as Ke, a7 as We, a8 as Ht, a9 as Ge, aa as Jt, ab as Ut, ac as Xt, ad as Se, ae as ie, af as Zt, ag as Qt, ah as qe, ai as ea, aj as ta, ak as Ve, al as aa, am as ra, an as na, ao as oa, ap as ia, aq as sa, ar as la, as as Ye, at as B, au as He, av as ca, aw as ua, ax as Ce, ay as da, az as Je, aA as fa, aB as pa, aC as ma, aD as ha, aE as va, aF as ya, aG as ba, aH as ga, aI as xa, aJ as wa, aK as Pa, aL as Sa } from "./hooks-DfWgtHhy.js";
import { bl as Yr, aM as Hr, bn as Jr, bw as Ur, aN as Xr, aO as Zr, aP as Qr, aQ as en, aR as tn, aS as an, aT as rn, aU as nn, aW as on, aX as sn, aY as ln, aZ as cn, bs as un, b0 as dn, b1 as fn, b2 as pn, b3 as mn, b6 as hn, b7 as vn, b8 as yn, b9 as bn, bb as gn, a$ as xn, ba as wn, b5 as Pn, bt as Sn, bm as Cn, bg as Nn, bj as An, bf as On, bx as kn, be as Ln, bd as Tn, aV as Dn, a_ as Fn, b4 as In, bc as _n, bh as En, bo as jn, bp as $n, bq as Mn, by as Bn, bi as Rn, br as zn, bv as Kn, bk as Wn, bu as Gn } from "./hooks-DfWgtHhy.js";
import { jsx as n, jsxs as N, Fragment as ae } from "react/jsx-runtime";
import * as fe from "react";
import k, { PureComponent as Ca, useState as T, forwardRef as V, useEffect as M, useMemo as se, useCallback as Ne, useRef as pe, useImperativeHandle as Na, Children as Aa, createContext as Oa } from "react";
const Sr = {
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
    toggle: "Toggle"
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
}, Cr = I({
  name: "Link",
  type: "info"
}, pt), Nr = [
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
function ka(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function La(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Ze(a.key), a);
  }
}
function Ta(e, t, r) {
  return t && La(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Da(e, t, r) {
  return t = Q(t), Fa(e, Ue() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r));
}
function Fa(e, t) {
  if (t && (R(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ia(e);
}
function Ia(e) {
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
function _a(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ce(e, t);
}
function ce(e, t) {
  return ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, ce(e, t);
}
function Xe(e, t, r) {
  return t = Ze(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ze(e) {
  var t = Ea(e, "string");
  return R(t) == "symbol" ? t : t + "";
}
function Ea(e, t) {
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
    return ka(this, t), Da(this, t, arguments);
  }
  return _a(t, e), Ta(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(k.Component);
Xe(re, "displayName", "ZAxis");
Xe(re, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var ja = ["option", "isActive"];
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
function $a(e, t) {
  if (e == null) return {};
  var r = Ma(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      a = s[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function Ma(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function Ba(e) {
  var t = e.option, r = e.isActive, a = $a(e, ja);
  return typeof t == "string" ? /* @__PURE__ */ k.createElement(xe, G({
    option: /* @__PURE__ */ k.createElement(mt, G({
      type: t
    }, a)),
    isActive: r,
    shapeType: "symbols"
  }, a)) : /* @__PURE__ */ k.createElement(xe, G({
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
      j(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ae(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Ra(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oe(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, et(a.key), a);
  }
}
function za(e, t, r) {
  return t && Oe(e.prototype, t), r && Oe(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ka(e, t, r) {
  return t = ee(t), Wa(e, Qe() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r));
}
function Wa(e, t) {
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
function Qe() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qe = function() {
    return !!e;
  })();
}
function ee(e) {
  return ee = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ee(e);
}
function qa(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ue(e, t);
}
function ue(e, t) {
  return ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, ue(e, t);
}
function j(e, t, r) {
  return t = et(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function et(e) {
  var t = Va(e, "string");
  return z(t) == "symbol" ? t : t + "";
}
function Va(e, t) {
  if (z(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (z(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Y = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Ra(this, t);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return r = Ka(this, t, [].concat(o)), j(r, "state", {
      isAnimationFinished: !1
    }), j(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), j(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), j(r, "id", St("recharts-scatter-")), r;
  }
  return qa(t, e), za(t, [{
    key: "renderSymbolsStatically",
    value: function(a) {
      var o = this, s = this.props, l = s.shape, d = s.activeShape, i = s.activeIndex, m = ne(this.props, !1);
      return a.map(function(c, f) {
        var h = i === f, u = h ? d : l, x = F(F({}, m), c);
        return /* @__PURE__ */ k.createElement(K, q({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c == null ? void 0 : c.cx, "-").concat(c == null ? void 0 : c.cy, "-").concat(c == null ? void 0 : c.size, "-").concat(f)
        }, ht(o.props, c, f), {
          role: "img"
        }), /* @__PURE__ */ k.createElement(Ba, q({
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
      return /* @__PURE__ */ k.createElement(vt, {
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
            var g = U(O.cx, A.cx), b = U(O.cy, A.cy), w = U(O.size, A.size);
            return F(F({}, A), {}, {
              cx: g(u),
              cy: b(u),
              size: w(u)
            });
          }
          var C = U(0, A.size);
          return F(F({}, A), {}, {
            size: C(u)
          });
        });
        return /* @__PURE__ */ k.createElement(K, null, a.renderSymbolsStatically(x));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var a = this.props, o = a.points, s = a.isAnimationActive, l = this.state.prevPoints;
      return s && o && o.length && (!l || !yt(l, o)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(o);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.points, l = o.xAxis, d = o.yAxis, i = o.children, m = De(i, bt);
      return m ? m.map(function(c, f) {
        var h = c.props, u = h.direction, x = h.dataKey;
        return /* @__PURE__ */ k.cloneElement(c, {
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
        c = o.map(function(b) {
          return {
            x: b.cx,
            y: b.cy
          };
        });
      else if (l === "fitting") {
        var h = gt(o), u = h.xmin, x = h.xmax, A = h.a, S = h.b, O = function(w) {
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
      var g = F(F(F({}, i), {}, {
        fill: "none",
        stroke: i && i.fill
      }, m), {}, {
        points: c
      });
      return /* @__PURE__ */ k.isValidElement(s) ? f = /* @__PURE__ */ k.cloneElement(s, g) : xt(s) ? f = s(g) : f = /* @__PURE__ */ k.createElement(wt, q({}, g, {
        type: d
      })), /* @__PURE__ */ k.createElement(K, {
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
      var S = this.state.isAnimationFinished, O = Pt("recharts-scatter", d), g = i && i.allowDataOverflow, b = m && m.allowDataOverflow, w = g || b, C = $(x) ? this.id : x;
      return /* @__PURE__ */ k.createElement(K, {
        className: O,
        clipPath: w ? "url(#clipPath-".concat(C, ")") : null
      }, g || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: g ? c : c - h / 2,
        y: b ? f : f - u / 2,
        width: g ? h : h * 2,
        height: b ? u : u * 2
      }))) : null, l && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ k.createElement(K, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!A || S) && Fe.renderCallByParent(this.props, s));
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
}(Ca);
j(Y, "displayName", "Scatter");
j(Y, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !Ct.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
j(Y, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, a = e.zAxis, o = e.item, s = e.displayedData, l = e.xAxisTicks, d = e.yAxisTicks, i = e.offset, m = o.props.tooltipType, c = De(o.props.children, Nt), f = $(t.dataKey) ? o.props.dataKey : t.dataKey, h = $(r.dataKey) ? o.props.dataKey : r.dataKey, u = a && a.dataKey, x = a ? a.range : re.defaultProps.range, A = x && x[0], S = t.scale.bandwidth ? t.scale.bandwidth() : 0, O = r.scale.bandwidth ? r.scale.bandwidth() : 0, g = s.map(function(b, w) {
    var C = X(b, f), y = X(b, h), v = !$(u) && X(b, u) || "-", L = [{
      name: $(t.dataKey) ? o.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: C,
      payload: b,
      dataKey: f,
      type: m
    }, {
      name: $(r.dataKey) ? o.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: y,
      payload: b,
      dataKey: h,
      type: m
    }];
    v !== "-" && L.push({
      name: a.name || a.dataKey,
      unit: a.unit || "",
      value: v,
      payload: b,
      dataKey: u,
      type: m
    });
    var D = we({
      axis: t,
      ticks: l,
      bandSize: S,
      entry: b,
      index: w,
      dataKey: f
    }), E = we({
      axis: r,
      ticks: d,
      bandSize: O,
      entry: b,
      index: w,
      dataKey: h
    }), p = v !== "-" ? a.scale(v) : A, P = Math.sqrt(Math.max(p, 0) / Math.PI);
    return F(F({}, b), {}, {
      cx: D,
      cy: E,
      x: D - P,
      y: E - P,
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
      tooltipPayload: L,
      tooltipPosition: {
        x: D,
        y: E
      },
      payload: b
    }, c && c[w] && c[w].props);
  });
  return F({
    points: g
  }, i);
});
var Ya = At({
  chartName: "ComposedChart",
  GraphicalChild: [Ie, Ot, _e, Y],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ee
  }, {
    axisType: "yAxis",
    AxisComp: le
  }, {
    axisType: "zAxis",
    AxisComp: re
  }],
  formatAxisMap: kt
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
}, Ja = ({ dataConfig: e, data: t, xAxis: r, yAxis: a = {
  hide: !0
}, label: o = !1, hideTooltip: s = !1, hideGrid: l = !1, aspect: d, legend: i, showValueUnderLabel: m = !1, bar: c, line: f, scatter: h, onClick: u }, x) => {
  var v, L, D, E;
  const A = Lt(t), S = c != null && c.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], O = f != null && f.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], g = h != null && h.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], b = [...S, ...O, ...g], w = Math.max(...A.flatMap((p) => b.map((P) => Tt(a != null && a.tickFormatter ? a.tickFormatter(`${p[P]}`) : `${p[P]}`)))), C = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "left"), y = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "right");
  return n(Dt, {
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
        for (const H of p.activePayload)
          P.values[H.name] = H.value;
        u(P);
      },
      children: [!s && n(Ft, {
        ...It(),
        content: n(_t, {
          yAxisFormatter: a.tickFormatter
        })
      }), !l && n(Et, {
        ...jt()
      }), C.length > 0 && n(le, {
        ...Pe(a),
        tick: !0,
        width: a.width ?? w + 20 + (y.length > 0 && ((v = C[0]) != null && v.axisLabel) ? 20 : 0),
        hide: a.hide || C.some((p) => p == null ? void 0 : p.hideAxis),
        label: (L = C[0]) != null && L.axisLabel ? {
          value: C[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), y.length > 0 && n(le, {
        ...Pe(a),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: a.width ?? w + 20 + (C.length > 0 && ((D = y[0]) != null && D.axisLabel) ? 20 : 0),
        hide: a.hide || y.some((p) => p == null ? void 0 : p.hideAxis),
        label: (E = y[0]) != null && E.axisLabel ? {
          value: y[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), n(Ee, {
        ...$t(r),
        hide: r == null ? void 0 : r.hide,
        tick: m ? (p) => {
          var be, ge;
          const { x: P, y: H, payload: ve } = p, ye = ((be = t.find((ft) => ft.label === ve.value)) == null ? void 0 : be.values) || "", J = Object.keys(ye).length === 1 ? (ge = Object.values(ye)) == null ? void 0 : ge[0] : void 0, dt = J !== void 0 && a.tickFormatter ? a.tickFormatter(`${J}`) : J.toLocaleString();
          return N("g", {
            transform: `translate(${P},${H})`,
            children: [n("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: ve.value
            }), !!J && n("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: dt
            })]
          });
        } : void 0
      }), S.map((p, P) => n(_e, {
        isAnimationActive: !1,
        dataKey: String(p),
        fill: e[p].color ? W(e[p].color) : oe(P),
        radius: 4,
        maxBarSize: 32,
        children: o && n(Fe, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(p)}`)
      }, `bar-${String(p)}`)), O.map((p, P) => n(Ie, {
        type: (f == null ? void 0 : f.lineType) ?? "natural",
        dataKey: String(p),
        stroke: e[p].color ? W(e[p].color) : oe(S.length + P),
        strokeWidth: 2,
        dot: (f == null ? void 0 : f.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (f == null ? void 0 : f.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(p)}`)), g.map((p, P) => n(Y, {
        dataKey: String(p),
        fill: e[p].color ? W(e[p].color) : oe(S.length + O.length + P),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (h == null ? void 0 : h.axisPosition) === "right" ? "right" : void 0,
        shape: Ha(String(p))
      }, `scatter-${String(p)}`)), i && n(Mt, {
        content: n(Bt, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Ua = je(Ja);
var me = "Progress", he = 100, [Xa, Ar] = Rt(me), [Za, Qa] = Xa(me), tt = fe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: a = null,
      max: o,
      getValueLabel: s = er,
      ...l
    } = e;
    (o || o === 0) && !ke(o) && console.error(tr(`${o}`, "Progress"));
    const d = ke(o) ? o : he;
    a !== null && !Le(a, d) && console.error(ar(`${a}`, "Progress"));
    const i = Le(a, d) ? a : null, m = te(i) ? s(i, d) : void 0;
    return /* @__PURE__ */ n(Za, { scope: r, value: i, max: d, children: /* @__PURE__ */ n(
      $e.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": te(i) ? i : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": nt(i, d),
        "data-value": i ?? void 0,
        "data-max": d,
        ...l,
        ref: t
      }
    ) });
  }
);
tt.displayName = me;
var at = "ProgressIndicator", rt = fe.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...a } = e, o = Qa(at, r);
    return /* @__PURE__ */ n(
      $e.div,
      {
        "data-state": nt(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...a,
        ref: t
      }
    );
  }
);
rt.displayName = at;
function er(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function nt(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function te(e) {
  return typeof e == "number";
}
function ke(e) {
  return te(e) && !isNaN(e) && e > 0;
}
function Le(e, t) {
  return te(e) && !isNaN(e) && e <= t && e >= 0;
}
function tr(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${he}\`.`;
}
function ar(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${he} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ot = tt, rr = rt;
const it = fe.forwardRef(({ className: e, value: t, ...r }, a) => n(ot, {
  ref: a,
  className: _("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: n(rr, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
it.displayName = ot.displayName;
const nr = ({ value: e, max: t = 100, label: r, color: a }, o) => {
  const s = a ? W(a) : W("categorical-1"), l = e / t * 100;
  return N("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [n("div", {
      className: "flex-grow",
      children: n(it, {
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
}, or = je(nr), Or = I(
  {
    name: "AreaChart",
    type: "info"
  },
  zt
), kr = I(
  {
    name: "BarChart",
    type: "info"
  },
  Kt
), Lr = I(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Wt
), Tr = I(
  {
    name: "LineChart",
    type: "info"
  },
  Gt
), Dr = I(
  {
    name: "PieChart",
    type: "info"
  },
  qt
), Fr = I(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Vt
), Ir = I(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  or
), _r = I(
  {
    name: "ComboChart",
    type: "info"
  },
  Ua
), de = ({ count: e, list: t }) => {
  const [r, a] = T(!1), o = n(Z, {
    label: `+${e}`
  });
  return t != null && t.length ? N(Me, {
    open: r,
    onOpenChange: a,
    children: [n(Be, {
      asChild: !0,
      children: n("button", {
        className: Yt("inline-flex flex-shrink-0 items-center"),
        children: o
      })
    }), n(Re, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: N(ze, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((s, l) => n("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n(Z, {
            ...s
          })
        }, l)), n(Ke, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : o;
};
de.displayName = "ChipCounter";
const st = ({ chips: e, max: t = 4, remainingCount: r, layout: a = "compact" }) => {
  if (a === "fill")
    return n(Ht, {
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
st.displayName = "F0ChipList";
const Er = We("F0ChipList", st), lt = V(({ value: e, onDateChange: t, granularity: r, onOpenChange: a, minDate: o, maxDate: s, onClear: l, ...d }, i) => {
  const [m, c] = T(""), [f, h] = T(!1), u = Ge();
  M(() => {
    c(r.toString(e == null ? void 0 : e.value, u));
  }, [e, r, u]);
  const x = (g) => Xt(g, r, {
    minDate: o,
    maxDate: s
  }), A = (g, b) => {
    if (g === "") {
      t == null || t({
        value: void 0,
        granularity: b.key
      }), h(d.required ?? !1);
      return;
    }
    const w = b.toRange(b.fromString(g, u));
    w && x(w == null ? void 0 : w.from) && x(w == null ? void 0 : w.to) ? (t == null || t({
      value: w,
      granularity: b.key
    }), h(!1)) : h(!0);
  }, S = () => {
    A(m, r);
  };
  return n(ae, {
    children: n(Jt, {
      ...d,
      icon: Ut,
      ref: i,
      onFocus: () => a == null ? void 0 : a(!0),
      onClear: () => {
        l == null || l(), c(""), A("", r);
      },
      onKeyDown: (g) => {
        g.key === "Enter" && S();
      },
      type: "text",
      onChange: (g) => {
        c(g);
      },
      error: f || d.error,
      onBlur: S,
      value: m,
      onClickContent: () => a == null ? void 0 : a(!0)
    })
  });
});
lt.displayName = "DateInput";
function ir({ onChange: e, value: t, presets: r = [], granularities: a = ["day"], minDate: o, maxDate: s, open: l = !1, ...d }) {
  const [i, m] = T(), [c, f] = T(l);
  M(() => {
    f(l);
  }, [l]);
  const h = Ge(), u = se(() => a[0] ?? "day", [a]), x = Ne((y) => {
    const v = y || u;
    if (!Se[v])
      throw new Error(`Invalid granularity ${v}`);
    return {
      ...Se[v],
      key: v
    };
  }, [u]), A = Ne((y) => {
    var L;
    if (!y)
      return;
    const v = x(y == null ? void 0 : y.granularity);
    return y ? {
      value: v.toRange(v.calendarMode === "range" ? y.value : ((L = y.value) == null ? void 0 : L.from) ?? void 0),
      granularity: y.granularity
    } : void 0;
  }, [x]), S = se(() => x(i == null ? void 0 : i.granularity), [i == null ? void 0 : i.granularity, x]);
  M(() => {
    const y = A(t);
    ie(i, y) || m(y);
  }, [t]);
  const O = (y) => {
    const v = A(y), D = x(v == null ? void 0 : v.granularity).calendarMode !== "range" && (v == null ? void 0 : v.granularity) === (i == null ? void 0 : i.granularity) && !ie(v, i);
    g(v), D && f(!1);
  }, g = (y) => {
    const v = A(y);
    if (m(v), !ie(v, i)) {
      const L = x(v == null ? void 0 : v.granularity);
      e == null || e(v, L.toString(v == null ? void 0 : v.value, h));
    }
  }, b = (y) => {
    var v;
    f(y), (v = d.onOpenChange) == null || v.call(d, y);
  }, w = se(() => r.filter((y) => a.includes(y.granularity)), [r, a]), C = pe(null);
  return M(() => {
    c && C.current && requestAnimationFrame(() => {
      var y;
      (y = C.current) == null || y.focus();
    });
  }, [c]), n(Zt, {
    hideCalendarInput: !0,
    onSelect: O,
    value: i,
    presets: w,
    granularities: a,
    minDate: o,
    maxDate: s,
    open: c,
    onOpenChange: b,
    asChild: !0,
    children: n(lt, {
      ref: C,
      ...d,
      value: i,
      granularity: S,
      onDateChange: g
    })
  });
}
const jr = Qt, $r = We(
  "F0DatePicker",
  ir
), sr = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, lr = V(function({ widgets: t, children: r }, a) {
  const o = pe(null);
  Na(a, () => o.current);
  const s = Aa.toArray(t).filter((l) => !!l).map((l, d) => n("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: l
  }, d));
  return n(qe, {
    layout: "home",
    children: N("div", {
      ref: o,
      className: "@container",
      children: [N("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [n(ea, {
          columns: sr,
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
}), cr = V(function({ children: t, sideContent: r, mainColumnPosition: a = "left", sticky: o = !1 }, s) {
  return n("div", {
    ref: s,
    className: "h-full",
    children: N("div", {
      className: _("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
      children: [n("main", {
        className: _("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", a === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: t
      }), n(ur, {
        sticky: o,
        className: _("order-1", a === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), ur = ({ children: e, className: t }) => n("aside", {
  className: _("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
  children: e
}), dr = ta({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ct = k.forwardRef(({ children: e, variant: t, className: r, ...a }, o) => n(qe, {
  layout: "standard",
  children: n("section", {
    ref: o,
    className: _("relative flex-1 overflow-auto", r),
    ...a,
    children: n("div", {
      className: _(dr({
        variant: t
      })),
      children: e
    })
  })
}));
ct.displayName = "StandardLayout";
const Mr = I({
  name: "StandardLayout",
  type: "layout"
}, ct), Br = I({
  name: "TwoColumnLayout",
  type: "layout"
}, cr), Rr = I({
  name: "HomeLayout",
  type: "layout"
}, lr), fr = ({ benefits: e }) => n("div", {
  className: "flex flex-col gap-2",
  children: e.map((t, r) => n(pr, {
    text: t
  }, r))
}), pr = ({ text: e }) => N("div", {
  className: "flex flex-row items-start gap-2",
  children: [n(ra, {
    icon: na,
    size: "md",
    className: "text-f1-icon-positive"
  }), n("span", {
    children: e
  })]
}), ut = V(({ title: e, image: t, benefits: r, actions: a, withShadow: o = !0, module: s, moduleName: l, tag: d }, i) => N("div", {
  ref: i,
  className: _("bg-white flex flex-row rounded-xl border border-f1-border-secondary", o && "shadow-md"),
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
          children: [s && n(Ve, {
            module: s
          }), l && n("p", {
            className: "text-base font-medium text-f1-foreground",
            children: l
          })]
        }), d && n("div", {
          className: "flex justify-start",
          children: n(aa, {
            icon: d.icon,
            text: d.label
          })
        }), n("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: e
        })]
      }), n(fr, {
        benefits: r
      })]
    }), a && n("div", {
      className: "flex gap-3",
      children: a
    })]
  })]
}));
ut.displayName = "ProductBlankslate";
function mr({ isOpen: e, onClose: t, title: r, children: a, module: o, portalContainer: s }) {
  const [l, d] = T(e);
  return M(() => {
    d(e);
  }, [e]), n(oa, {
    open: l,
    onOpenChange: (m) => {
      d(m), m || t();
    },
    modal: !0,
    children: N(ia, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [N("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [N(sa, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [o && n(Ve, {
            module: o,
            size: "lg"
          }), r]
        }), n(la, {
          variant: "outline",
          icon: Ye,
          onClick: t,
          label: "Close modal",
          hideLabel: !0
        })]
      }), N(ze, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [a, n(Ke, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function zr({ isOpen: e, onClose: t, title: r, image: a, benefits: o, errorMessage: s, successMessage: l, loadingState: d, nextSteps: i, closeLabel: m, primaryAction: c, modalTitle: f, modalModule: h, secondaryAction: u, portalContainer: x, tag: A, showResponseDialog: S = !0 }) {
  const [O, g] = T(e), [b, w] = T(null), [C, y] = T(!1), v = async () => {
    if (c != null && c.onClick) {
      y(!0);
      try {
        await c.onClick(), g(!1), S && w("success");
      } catch {
        S && w("error");
      } finally {
        y(!1);
      }
    }
  }, L = () => {
    g(!1), t == null || t();
  }, D = C;
  return N(ae, {
    children: [n(mr, {
      isOpen: O,
      onClose: L,
      title: f,
      module: h,
      portalContainer: x,
      children: n("div", {
        className: "pb-4 pl-4",
        children: n(ut, {
          title: r,
          image: a,
          benefits: o,
          withShadow: !1,
          tag: A,
          actions: N("div", {
            className: "flex gap-3",
            children: [c && n(B, {
              variant: c.variant,
              label: D ? d.label : c.label,
              icon: c.icon || void 0,
              onClick: v,
              loading: c.loading,
              size: c.size
            }), u && n(B, {
              onClick: u.onClick,
              label: u.label,
              variant: u.variant,
              size: u.size,
              icon: u.icon
            })]
          })
        })
      })
    }), b && S && n(He, {
      open: !0,
      onClose: () => {
        L(), w(null);
      },
      success: b === "success",
      errorMessage: s,
      successMessage: l,
      nextSteps: i,
      closeLabel: m,
      portalContainer: x
    })]
  });
}
function hr({ mediaUrl: e, title: t, description: r, onClose: a, dismissible: o, width: s, trackVisibility: l, actions: d, showConfirmation: i = !0 }) {
  const [m, c] = T(!1), f = () => {
    c(!0), a && a();
  };
  M(() => {
    l && l(!m);
  }, [l, m]);
  const h = e == null ? void 0 : e.includes(".mp4");
  return n(ae, {
    children: m ? null : N(ca, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [N(ua, {
        children: [o && n("div", {
          className: "absolute right-2 top-2 z-10",
          children: n(B, {
            variant: "ghost",
            icon: Ye,
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
      }), d && n(da, {
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
        }, u.label) : n(B, {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        }, u.label))
      })]
    })
  });
}
const vr = V(function({ primaryAction: t, secondaryAction: r, ...a }, o) {
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
  }) : n(B, {
    onClick: i.onClick,
    label: i.label,
    variant: i.variant || "default",
    size: "md",
    icon: i.icon
  }), l = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0, d = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
  return N(fa, {
    ref: o,
    ...a,
    primaryAction: l,
    secondaryAction: d,
    children: [(t == null ? void 0 : t.variant) === "promote" && s(t), (r == null ? void 0 : r.variant) === "promote" && s(r)]
  });
});
vr.displayName = "UpsellingBanner";
function Kr({ isOpen: e, setIsOpen: t, label: r, variant: a = "promote", size: o = "md", showIcon: s = !0, side: l = "right", align: d = "center", icon: i = pa, mediaUrl: m, title: c, description: f, width: h = "300px", trackVisibility: u, actions: x, onClick: A, hideLabel: S = !1 }) {
  const [O, g] = T(!1), [b, w] = T(null), [C, y] = T(null), v = (P) => {
    t(P), A && A();
  }, L = async (P) => {
    if (P.type === "upsell") {
      y(P);
      try {
        await P.onClick(), P.showConfirmation && (g(!0), w("success"));
      } catch {
        g(!0), w("error");
      }
    }
  }, D = () => {
    w(null), g(!1), y(null), t(!1);
  }, E = e && !O, p = x == null ? void 0 : x.map((P) => P.type === "upsell" ? {
    ...P,
    onClick: () => L(P)
  } : P);
  return N(ae, {
    children: [N(Me, {
      open: E,
      onOpenChange: v,
      children: [n(Be, {
        asChild: !0,
        children: n(B, {
          variant: a,
          label: r,
          size: o,
          icon: s ? i : void 0,
          onClick: () => t(e),
          hideLabel: S
        })
      }), n(Re, {
        side: l,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: n(hr, {
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
    }), (C == null ? void 0 : C.type) === "upsell" && C.showConfirmation && b && n(He, {
      open: !0,
      onClose: D,
      success: b === "success",
      errorMessage: C.errorMessage,
      successMessage: C.successMessage,
      nextSteps: C.nextSteps,
      closeLabel: C.closeLabel,
      portalContainer: null
    })]
  });
}
const yr = Oa(null), br = ({ children: e, fullScreen: t = !0 }) => {
  const r = pe(null), [a, o] = T(r.current);
  return Sa(() => {
    o(r.current);
  }, []), n(yr.Provider, {
    value: {
      element: a
    },
    children: n("div", {
      ref: r,
      id: "f0-layout",
      className: _({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    })
  });
}, gr = ({ children: e }) => n(Pa, {
  reducedMotion: "user",
  children: e
}), Wr = ({ children: e, layout: t, link: r, privacyModeInitiallyEnabled: a, image: o, i18n: s, l10n: l, isDev: d = !1, dataCollectionStorageHandler: i, showExperimentalWarnings: m = !1 }) => n(gr, {
  children: n(ma, {
    isDev: d,
    showExperimentalWarnings: m,
    children: n(ha, {
      ...l,
      children: n(va, {
        ...s,
        children: n(ya, {
          ...r,
          children: n(br, {
            ...t,
            children: n(ba, {
              children: n(ga, {
                initiallyEnabled: a,
                children: n(xa, {
                  ...o,
                  children: n(wa, {
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
}), Te = (e) => `datacollection-${e}`, Gr = {
  get: async (e) => JSON.parse(
    localStorage.getItem(Te(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(Te(e), JSON.stringify(t));
  }
};
export {
  Or as AreaChart,
  Yr as Await,
  kr as BarChart,
  B as Button,
  Lr as CategoryBarChart,
  _r as ComboChart,
  Hr as CopyButton,
  Jr as DndProvider,
  Ur as EmojiImage,
  Xr as F0Avatar,
  Zr as F0AvatarAlert,
  Qr as F0AvatarCompany,
  en as F0AvatarDate,
  tn as F0AvatarEmoji,
  an as F0AvatarFile,
  rn as F0AvatarIcon,
  nn as F0AvatarList,
  Ve as F0AvatarModule,
  on as F0AvatarPerson,
  sn as F0AvatarTeam,
  ln as F0Card,
  cn as F0Checkbox,
  Er as F0ChipList,
  $r as F0DatePicker,
  un as F0EventCatcherProvider,
  ra as F0Icon,
  Wr as F0Provider,
  dn as F0TagAlert,
  fn as F0TagBalance,
  pn as F0TagCompany,
  mn as F0TagDot,
  hn as F0TagList,
  vn as F0TagPerson,
  aa as F0TagRaw,
  yn as F0TagStatus,
  bn as F0TagTeam,
  gn as GROUP_ID_SYMBOL,
  Rr as HomeLayout,
  Tr as LineChart,
  Cr as Link,
  xn as OneFilterPicker,
  Dr as PieChart,
  ga as PrivacyModeProvider,
  ut as ProductBlankslate,
  wn as ProductCard,
  zr as ProductModal,
  hr as ProductWidget,
  Ir as ProgressBarChart,
  Mr as StandardLayout,
  Pn as TagCounter,
  Br as TwoColumnLayout,
  He as UpsellRequestResponseDialog,
  vr as UpsellingBanner,
  Je as UpsellingButton,
  Kr as UpsellingPopover,
  Fr as VerticalBarChart,
  Nr as avatarVariants,
  Sn as buildTranslations,
  Cn as createAtlaskitDriver,
  Nn as createDataSourceDefinition,
  Gr as dataCollectionLocalStorageHandler,
  jr as datepickerSizes,
  Sr as defaultTranslations,
  We as experimental,
  An as getAnimationVariants,
  On as getDataSourcePaginationType,
  kn as getEmojiLabel,
  Ln as isInfiniteScrollPagination,
  Tn as isPageBasedPagination,
  Dn as modules,
  Fn as predefinedPresets,
  In as tagDotColors,
  _n as useData,
  En as useDataSource,
  jn as useDndEvents,
  $n as useDraggable,
  Mn as useDroppableList,
  Bn as useEmojiConfetti,
  Rn as useGroups,
  zn as usePrivacyMode,
  Kn as useReducedMotion,
  Wn as useSelectable,
  Gn as useXRay
};
