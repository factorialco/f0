import { C as T, L as it, S as ve, a as st, f as ae, b as z, c as lt, A as ct, i as Y, d as ut, e as Oe, E as dt, g as J, h as pt, j as ft, k as mt, l as ht, m as I, n as Ae, u as vt, G as yt, o as gt, p as ye, q as bt, r as Ne, s as xt, B as Le, X as ke, Y as oe, t as wt, v as Te, w as Ct, x as Pt, y as St, z as Ot, D as At, F as Nt, H as Lt, I as kt, J as ge, K as Tt, M as K, N as re, O as Ft, P as Dt, Q as _t, R as Fe, T as j, U as jt, V as Et, W as $t, Z as It, _ as Mt, $ as Bt, a0 as U, a1 as De, a2 as _e, a3 as Rt, a4 as je, a5 as Ee, a6 as $e, a7 as zt, a8 as Kt, a9 as Ie, aa as Wt, ab as Vt, ac as Me, ad as qt, ae as Gt, af as Ht, ag as Yt, ah as Jt, ai as Ut, aj as Xt, ak as Be, al as M, am as Re, an as Zt, ao as Qt, ap as be, aq as ea, ar as ze, as as ta, at as aa, au as ra, av as oa, aw as na, ax as ia, ay as sa, az as la, aA as ca, aB as ua, aC as da, aD as pa } from "./hooks-gBVyvN6I.js";
import { bc as _r, aE as jr, be as Er, bn as $r, aF as Ir, aG as Mr, aH as Br, aI as Rr, aJ as zr, aK as Kr, aL as Wr, aM as Vr, aO as qr, aP as Gr, aQ as Hr, aR as Yr, bj as Jr, aT as Ur, aU as Xr, aV as Zr, aW as Qr, aZ as eo, a_ as to, a$ as ao, b0 as ro, b2 as oo, aS as no, b1 as io, aY as so, bk as lo, bd as co, b7 as uo, ba as po, b6 as fo, bo as mo, b5 as ho, b4 as vo, aN as yo, aX as go, b3 as bo, b8 as xo, bf as wo, bg as Co, bh as Po, bp as So, b9 as Oo, bi as Ao, bm as No, bb as Lo, bl as ko } from "./hooks-gBVyvN6I.js";
import { jsx as o, jsxs as g, Fragment as le } from "react/jsx-runtime";
import * as ce from "react";
import A, { PureComponent as fa, useState as _, forwardRef as ee, useRef as Ke, useImperativeHandle as ma, Children as ha, useEffect as We, createContext as va } from "react";
const dr = {
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
        placeholder: "What did you like about this response? How could it be even better?",
        description: "Your feedback helps Factorial Al improve. The messages from your chat, the search results, and your feedback will be sent to Factorial to help improve Factorial Al."
      },
      negative: {
        title: "What could have been better in this response?",
        placeholder: "What could have been better in this response? How could it be even better?",
        description: "Your feedback helps Factorial Al improve. The messages from your chat, the search results, and your feedback will be sent to Factorial to help improve Factorial Al."
      }
    }
  },
  select: {
    noResults: "No results found",
    loadingMore: "Loading..."
  }
}, pr = T({
  name: "Link",
  type: "info"
}, it), fr = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
function B(e) {
  "@babel/helpers - typeof";
  return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, B(e);
}
function ya(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ga(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Ge(a.key), a);
  }
}
function ba(e, t, r) {
  return t && ga(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xa(e, t, r) {
  return t = X(t), wa(e, Ve() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function wa(e, t) {
  if (t && (B(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ca(e);
}
function Ca(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ve() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ve = function() {
    return !!e;
  })();
}
function X(e) {
  return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, X(e);
}
function Pa(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ne(e, t);
}
function ne(e, t) {
  return ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, n) {
    return a.__proto__ = n, a;
  }, ne(e, t);
}
function qe(e, t, r) {
  return t = Ge(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ge(e) {
  var t = Sa(e, "string");
  return B(t) == "symbol" ? t : t + "";
}
function Sa(e, t) {
  if (B(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (B(a) != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var te = /* @__PURE__ */ function(e) {
  function t() {
    return ya(this, t), xa(this, t, arguments);
  }
  return Pa(t, e), ba(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(A.Component);
qe(te, "displayName", "ZAxis");
qe(te, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Oa = ["option", "isActive"];
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
function Aa(e, t) {
  if (e == null) return {};
  var r = Na(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      a = s[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function Na(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function La(e) {
  var t = e.option, r = e.isActive, a = Aa(e, Oa);
  return typeof t == "string" ? /* @__PURE__ */ A.createElement(ve, W({
    option: /* @__PURE__ */ A.createElement(st, W({
      type: t
    }, a)),
    isActive: r,
    shapeType: "symbols"
  }, a)) : /* @__PURE__ */ A.createElement(ve, W({
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
function xe(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xe(Object(r), !0).forEach(function(a) {
      $(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xe(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function ka(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function we(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Ye(a.key), a);
  }
}
function Ta(e, t, r) {
  return t && we(e.prototype, t), r && we(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Fa(e, t, r) {
  return t = Z(t), Da(e, He() ? Reflect.construct(t, r || [], Z(e).constructor) : t.apply(e, r));
}
function Da(e, t) {
  if (t && (R(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _a(e);
}
function _a(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function He() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (He = function() {
    return !!e;
  })();
}
function Z(e) {
  return Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Z(e);
}
function ja(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ie(e, t);
}
function ie(e, t) {
  return ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, n) {
    return a.__proto__ = n, a;
  }, ie(e, t);
}
function $(e, t, r) {
  return t = Ye(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ye(e) {
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
var q = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    ka(this, t);
    for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++)
      n[s] = arguments[s];
    return r = Fa(this, t, [].concat(n)), $(r, "state", {
      isAnimationFinished: !1
    }), $(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), $(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), $(r, "id", vt("recharts-scatter-")), r;
  }
  return ja(t, e), Ta(t, [{
    key: "renderSymbolsStatically",
    value: function(a) {
      var n = this, s = this.props, l = s.shape, p = s.activeShape, i = s.activeIndex, m = ae(this.props, !1);
      return a.map(function(c, f) {
        var h = i === f, u = h ? p : l, w = k(k({}, m), c);
        return /* @__PURE__ */ A.createElement(z, V({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c == null ? void 0 : c.cx, "-").concat(c == null ? void 0 : c.cy, "-").concat(c == null ? void 0 : c.size, "-").concat(f)
        }, lt(n.props, c, f), {
          role: "img"
        }), /* @__PURE__ */ A.createElement(La, V({
          option: u,
          isActive: h,
          key: "symbol-".concat(f)
        }, w)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var a = this, n = this.props, s = n.points, l = n.isAnimationActive, p = n.animationBegin, i = n.animationDuration, m = n.animationEasing, c = n.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ A.createElement(ct, {
        begin: p,
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
        var u = h.t, w = s.map(function(P, x) {
          var S = f && f[x];
          if (S) {
            var C = Y(S.cx, P.cx), y = Y(S.cy, P.cy), O = Y(S.size, P.size);
            return k(k({}, P), {}, {
              cx: C(u),
              cy: y(u),
              size: O(u)
            });
          }
          var b = Y(0, P.size);
          return k(k({}, P), {}, {
            size: b(u)
          });
        });
        return /* @__PURE__ */ A.createElement(z, null, a.renderSymbolsStatically(w));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var a = this.props, n = a.points, s = a.isAnimationActive, l = this.state.prevPoints;
      return s && n && n.length && (!l || !ut(l, n)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(n);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var n = this.props, s = n.points, l = n.xAxis, p = n.yAxis, i = n.children, m = Oe(i, dt);
      return m ? m.map(function(c, f) {
        var h = c.props, u = h.direction, w = h.dataKey;
        return /* @__PURE__ */ A.cloneElement(c, {
          key: "".concat(u, "-").concat(w, "-").concat(s[f]),
          data: s,
          xAxis: l,
          yAxis: p,
          layout: u === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(x, S) {
            return {
              x: x.cx,
              y: x.cy,
              value: u === "x" ? +x.node.x : +x.node.y,
              errorVal: J(x, S)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var a = this.props, n = a.points, s = a.line, l = a.lineType, p = a.lineJointType, i = ae(this.props, !1), m = ae(s, !1), c, f;
      if (l === "joint")
        c = n.map(function(y) {
          return {
            x: y.cx,
            y: y.cy
          };
        });
      else if (l === "fitting") {
        var h = pt(n), u = h.xmin, w = h.xmax, P = h.a, x = h.b, S = function(O) {
          return P * O + x;
        };
        c = [{
          x: u,
          y: S(u)
        }, {
          x: w,
          y: S(w)
        }];
      }
      var C = k(k(k({}, i), {}, {
        fill: "none",
        stroke: i && i.fill
      }, m), {}, {
        points: c
      });
      return /* @__PURE__ */ A.isValidElement(s) ? f = /* @__PURE__ */ A.cloneElement(s, C) : ft(s) ? f = s(C) : f = /* @__PURE__ */ A.createElement(mt, V({}, C, {
        type: p
      })), /* @__PURE__ */ A.createElement(z, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, n = a.hide, s = a.points, l = a.line, p = a.className, i = a.xAxis, m = a.yAxis, c = a.left, f = a.top, h = a.width, u = a.height, w = a.id, P = a.isAnimationActive;
      if (n || !s || !s.length)
        return null;
      var x = this.state.isAnimationFinished, S = ht("recharts-scatter", p), C = i && i.allowDataOverflow, y = m && m.allowDataOverflow, O = C || y, b = I(w) ? this.id : w;
      return /* @__PURE__ */ A.createElement(z, {
        className: S,
        clipPath: O ? "url(#clipPath-".concat(b, ")") : null
      }, C || y ? /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ A.createElement("rect", {
        x: C ? c : c - h / 2,
        y: y ? f : f - u / 2,
        width: C ? h : h * 2,
        height: y ? u : u * 2
      }))) : null, l && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ A.createElement(z, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!P || x) && Ae.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(a, n) {
      return a.animationId !== n.prevAnimationId ? {
        prevAnimationId: a.animationId,
        curPoints: a.points,
        prevPoints: n.curPoints
      } : a.points !== n.curPoints ? {
        curPoints: a.points
      } : null;
    }
  }]);
}(fa);
$(q, "displayName", "Scatter");
$(q, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !yt.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
$(q, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, a = e.zAxis, n = e.item, s = e.displayedData, l = e.xAxisTicks, p = e.yAxisTicks, i = e.offset, m = n.props.tooltipType, c = Oe(n.props.children, gt), f = I(t.dataKey) ? n.props.dataKey : t.dataKey, h = I(r.dataKey) ? n.props.dataKey : r.dataKey, u = a && a.dataKey, w = a ? a.range : te.defaultProps.range, P = w && w[0], x = t.scale.bandwidth ? t.scale.bandwidth() : 0, S = r.scale.bandwidth ? r.scale.bandwidth() : 0, C = s.map(function(y, O) {
    var b = J(y, f), N = J(y, h), L = !I(u) && J(y, u) || "-", F = [{
      name: I(t.dataKey) ? n.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: b,
      payload: y,
      dataKey: f,
      type: m
    }, {
      name: I(r.dataKey) ? n.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: N,
      payload: y,
      dataKey: h,
      type: m
    }];
    L !== "-" && F.push({
      name: a.name || a.dataKey,
      unit: a.unit || "",
      value: L,
      payload: y,
      dataKey: u,
      type: m
    });
    var D = ye({
      axis: t,
      ticks: l,
      bandSize: x,
      entry: y,
      index: O,
      dataKey: f
    }), E = ye({
      axis: r,
      ticks: p,
      bandSize: S,
      entry: y,
      index: O,
      dataKey: h
    }), d = L !== "-" ? a.scale(L) : P, v = Math.sqrt(Math.max(d, 0) / Math.PI);
    return k(k({}, y), {}, {
      cx: D,
      cy: E,
      x: D - v,
      y: E - v,
      xAxis: t,
      yAxis: r,
      zAxis: a,
      width: 2 * v,
      height: 2 * v,
      size: d,
      node: {
        x: b,
        y: N,
        z: L
      },
      tooltipPayload: F,
      tooltipPosition: {
        x: D,
        y: E
      },
      payload: y
    }, c && c[O] && c[O].props);
  });
  return k({
    points: C
  }, i);
});
var $a = bt({
  chartName: "ComposedChart",
  GraphicalChild: [Ne, xt, Le, q],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: ke
  }, {
    axisType: "yAxis",
    AxisComp: oe
  }, {
    axisType: "zAxis",
    AxisComp: te
  }],
  formatAxisMap: wt
});
const Ia = (e) => {
  const t = (r) => {
    const { cx: a, cy: n, fill: s, payload: l } = r, p = () => {
      if (!l) return "-";
      if (l[e] !== void 0)
        return l[e];
      for (const [i, m] of Object.entries(l))
        if (typeof m == "number" && i !== "x")
          return m;
      return "-";
    };
    return o("circle", {
      cx: a,
      cy: n,
      r: 4,
      fill: s,
      stroke: "white",
      strokeWidth: 2,
      ref: (i) => {
        i != null && i.parentElement && i.parentElement.setAttribute("aria-label", `Data point: ${p()}`);
      }
    });
  };
  return t.displayName = `Scatter-${e}`, t;
}, Ma = ({ dataConfig: e, data: t, xAxis: r, yAxis: a = {
  hide: !0
}, label: n = !1, hideTooltip: s = !1, hideGrid: l = !1, aspect: p, legend: i, showValueUnderLabel: m = !1, bar: c, line: f, scatter: h, onClick: u }, w) => {
  var L, F, D, E;
  const P = Ct(t), x = c != null && c.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], S = f != null && f.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], C = h != null && h.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], y = [...x, ...S, ...C], O = Math.max(...P.flatMap((d) => y.map((v) => Pt(a != null && a.tickFormatter ? a.tickFormatter(`${d[v]}`) : `${d[v]}`)))), b = [c, f, h].filter((d) => (d == null ? void 0 : d.axisPosition) === "left"), N = [c, f, h].filter((d) => (d == null ? void 0 : d.axisPosition) === "right");
  return o(St, {
    config: e,
    ref: w,
    aspect: p,
    children: g($a, {
      accessibilityLayer: !0,
      data: P,
      margin: {
        left: a && !a.hide ? 0 : 12,
        right: 12,
        top: n ? 24 : 0,
        bottom: m ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (d) => {
        if (!u || !d.activeLabel || !d.activePayload)
          return;
        const v = {
          label: d.activeLabel,
          values: {}
        };
        for (const G of d.activePayload)
          v.values[G.name] = G.value;
        u(v);
      },
      children: [!s && o(Ot, {
        ...At(),
        content: o(Nt, {
          yAxisFormatter: a.tickFormatter
        })
      }), !l && o(Lt, {
        ...kt()
      }), b.length > 0 && o(oe, {
        ...ge(a),
        tick: !0,
        width: a.width ?? O + 20 + (N.length > 0 && ((L = b[0]) != null && L.axisLabel) ? 20 : 0),
        hide: a.hide || b.some((d) => d == null ? void 0 : d.hideAxis),
        label: (F = b[0]) != null && F.axisLabel ? {
          value: b[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), N.length > 0 && o(oe, {
        ...ge(a),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: a.width ?? O + 20 + (b.length > 0 && ((D = N[0]) != null && D.axisLabel) ? 20 : 0),
        hide: a.hide || N.some((d) => d == null ? void 0 : d.hideAxis),
        label: (E = N[0]) != null && E.axisLabel ? {
          value: N[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), o(ke, {
        ...Tt(r),
        hide: r == null ? void 0 : r.hide,
        tick: m ? (d) => {
          var me, he;
          const { x: v, y: G, payload: pe } = d, fe = ((me = t.find((nt) => nt.label === pe.value)) == null ? void 0 : me.values) || "", H = Object.keys(fe).length === 1 ? (he = Object.values(fe)) == null ? void 0 : he[0] : void 0, ot = H !== void 0 && a.tickFormatter ? a.tickFormatter(`${H}`) : H.toLocaleString();
          return g("g", {
            transform: `translate(${v},${G})`,
            children: [o("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: pe.value
            }), !!H && o("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: ot
            })]
          });
        } : void 0
      }), x.map((d, v) => o(Le, {
        isAnimationActive: !1,
        dataKey: String(d),
        fill: e[d].color ? K(e[d].color) : re(v),
        radius: 4,
        maxBarSize: 32,
        children: n && o(Ae, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(d)}`)
      }, `bar-${String(d)}`)), S.map((d, v) => o(Ne, {
        type: (f == null ? void 0 : f.lineType) ?? "natural",
        dataKey: String(d),
        stroke: e[d].color ? K(e[d].color) : re(x.length + v),
        strokeWidth: 2,
        dot: (f == null ? void 0 : f.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (f == null ? void 0 : f.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(d)}`)), C.map((d, v) => o(q, {
        dataKey: String(d),
        fill: e[d].color ? K(e[d].color) : re(x.length + S.length + v),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (h == null ? void 0 : h.axisPosition) === "right" ? "right" : void 0,
        shape: Ia(String(d))
      }, `scatter-${String(d)}`)), i && o(Ft, {
        content: o(Dt, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Ba = Te(Ma);
var ue = "Progress", de = 100, [Ra, mr] = _t(ue), [za, Ka] = Ra(ue), Je = ce.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: a = null,
      max: n,
      getValueLabel: s = Wa,
      ...l
    } = e;
    (n || n === 0) && !Ce(n) && console.error(Va(`${n}`, "Progress"));
    const p = Ce(n) ? n : de;
    a !== null && !Pe(a, p) && console.error(qa(`${a}`, "Progress"));
    const i = Pe(a, p) ? a : null, m = Q(i) ? s(i, p) : void 0;
    return /* @__PURE__ */ o(za, { scope: r, value: i, max: p, children: /* @__PURE__ */ o(
      Fe.div,
      {
        "aria-valuemax": p,
        "aria-valuemin": 0,
        "aria-valuenow": Q(i) ? i : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": Ze(i, p),
        "data-value": i ?? void 0,
        "data-max": p,
        ...l,
        ref: t
      }
    ) });
  }
);
Je.displayName = ue;
var Ue = "ProgressIndicator", Xe = ce.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...a } = e, n = Ka(Ue, r);
    return /* @__PURE__ */ o(
      Fe.div,
      {
        "data-state": Ze(n.value, n.max),
        "data-value": n.value ?? void 0,
        "data-max": n.max,
        ...a,
        ref: t
      }
    );
  }
);
Xe.displayName = Ue;
function Wa(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ze(e, t) {
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
function Va(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${de}\`.`;
}
function qa(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${de} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Qe = Je, Ga = Xe;
const et = ce.forwardRef(({ className: e, value: t, ...r }, a) => o(Qe, {
  ref: a,
  className: j("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: o(Ga, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
et.displayName = Qe.displayName;
const Ha = ({ value: e, max: t = 100, label: r, color: a }, n) => {
  const s = a ? K(a) : K("categorical-1"), l = e / t * 100;
  return g("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [o("div", {
      className: "flex-grow",
      children: o(et, {
        color: s,
        value: l,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": t,
        "aria-valuenow": e,
        "aria-label": `${l.toFixed(1)}%`
      })
    }), r && o("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: r
    })]
  });
}, Ya = Te(Ha), hr = T(
  {
    name: "AreaChart",
    type: "info"
  },
  jt
), vr = T(
  {
    name: "BarChart",
    type: "info"
  },
  Et
), yr = T(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  $t
), gr = T(
  {
    name: "LineChart",
    type: "info"
  },
  It
), br = T(
  {
    name: "PieChart",
    type: "info"
  },
  Mt
), xr = T(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Bt
), wr = T(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Ya
), Cr = T(
  {
    name: "ComboChart",
    type: "info"
  },
  Ba
), se = ({ count: e, list: t }) => {
  const [r, a] = _(!1), n = o(U, {
    label: `+${e}`
  });
  return t != null && t.length ? g(De, {
    open: r,
    onOpenChange: a,
    children: [o(_e, {
      asChild: !0,
      children: o("button", {
        className: Rt("inline-flex flex-shrink-0 items-center"),
        children: n
      })
    }), o(je, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: g(Ee, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((s, l) => o("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: o(U, {
            ...s
          })
        }, l)), o($e, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : n;
};
se.displayName = "ChipCounter";
const tt = ({ chips: e, max: t = 4, remainingCount: r, layout: a = "compact" }) => {
  if (a === "fill")
    return o(Kt, {
      items: e,
      renderListItem: (i) => o(U, {
        ...i
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: r !== void 0,
      renderOverflowIndicator: (i) => o(se, {
        count: (r ?? 0) + i,
        list: r ? void 0 : e.slice(e.length - i)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const n = e.slice(0, t), s = e.slice(t), l = r ?? e.length - t, p = l > 0;
  return g("div", {
    className: "flex items-center gap-2",
    children: [n.map((i, m) => o(U, {
      ...i
    }, m)), p && o(se, {
      count: l,
      list: r ? void 0 : s
    })]
  });
};
tt.displayName = "F0ChipList";
const Pr = zt("F0ChipList", tt), Ja = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Ua = ee(function({ widgets: t, children: r }, a) {
  const n = Ke(null);
  ma(a, () => n.current);
  const s = ha.toArray(t).filter((l) => !!l).map((l, p) => o("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: l
  }, p));
  return o(Ie, {
    layout: "home",
    children: g("div", {
      ref: n,
      className: "@container",
      children: [g("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [o(Wt, {
          columns: Ja,
          showArrows: !1,
          children: s
        }), o("main", {
          children: r
        })]
      }), g("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [o("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: s.slice(0, 3)
        }), o("main", {
          className: "col-span-2",
          children: r
        }), o("div", {
          className: "flex flex-1 flex-col gap-5",
          children: s.slice(3)
        })]
      })]
    })
  });
}), Xa = ee(function({ children: t, sideContent: r, mainColumnPosition: a = "left", sticky: n = !1 }, s) {
  return o("div", {
    ref: s,
    className: "h-full",
    children: g("div", {
      className: j("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", n && "md:sticky md:top-0 md:max-h-full"),
      children: [o("main", {
        className: j("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", n ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", a === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: t
      }), o(Za, {
        sticky: n,
        className: j("order-1", a === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), Za = ({ children: e, className: t }) => o("aside", {
  className: j("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
  children: e
}), Qa = Vt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), at = A.forwardRef(({ children: e, variant: t, className: r, ...a }, n) => o(Ie, {
  layout: "standard",
  children: o("section", {
    ref: n,
    className: j("relative flex-1 overflow-auto", r),
    ...a,
    children: o("div", {
      className: j(Qa({
        variant: t
      })),
      children: e
    })
  })
}));
at.displayName = "StandardLayout";
const Sr = T({
  name: "StandardLayout",
  type: "layout"
}, at), Or = T({
  name: "TwoColumnLayout",
  type: "layout"
}, Xa), Ar = T({
  name: "HomeLayout",
  type: "layout"
}, Ua), er = ({ benefits: e }) => o("div", {
  className: "flex flex-col gap-2",
  children: e.map((t, r) => o(tr, {
    text: t
  }, r))
}), tr = ({ text: e }) => g("div", {
  className: "flex flex-row items-start gap-2",
  children: [o(Gt, {
    icon: Ht,
    size: "md",
    className: "text-f1-icon-positive"
  }), o("span", {
    children: e
  })]
}), rt = ee(({ title: e, image: t, benefits: r, actions: a, withShadow: n = !0, module: s, moduleName: l, tag: p }, i) => g("div", {
  ref: i,
  className: j("bg-white flex flex-row rounded-xl border border-f1-border-secondary", n && "shadow-md"),
  children: [o("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: o("img", {
      src: t,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), g("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [g("div", {
      className: "flex flex-col gap-5",
      children: [g("div", {
        className: "flex flex-col gap-2",
        children: [g("div", {
          className: "flex flex-row items-center gap-2",
          children: [s && o(Me, {
            module: s
          }), l && o("p", {
            className: "text-base font-medium text-f1-foreground",
            children: l
          })]
        }), p && o("div", {
          className: "flex justify-start",
          children: o(qt, {
            icon: p.icon,
            text: p.label
          })
        }), o("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: e
        })]
      }), o(er, {
        benefits: r
      })]
    }), a && o("div", {
      className: "flex gap-3",
      children: a
    })]
  })]
}));
rt.displayName = "ProductBlankslate";
function ar({ isOpen: e, onClose: t, title: r, children: a, module: n, portalContainer: s }) {
  const [l, p] = _(e);
  return We(() => {
    p(e);
  }, [e]), o(Yt, {
    open: l,
    onOpenChange: (m) => {
      p(m), m || t();
    },
    modal: !0,
    children: g(Jt, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [g("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [g(Ut, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [n && o(Me, {
            module: n,
            size: "lg"
          }), r]
        }), o(Xt, {
          variant: "outline",
          icon: Be,
          onClick: t,
          label: "Close modal",
          hideLabel: !0
        })]
      }), g(Ee, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [a, o($e, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Nr({ isOpen: e, onClose: t, title: r, image: a, benefits: n, errorMessage: s, successMessage: l, loadingState: p, nextSteps: i, closeLabel: m, primaryAction: c, modalTitle: f, modalModule: h, secondaryAction: u, portalContainer: w, tag: P, showResponseDialog: x = !0 }) {
  const [S, C] = _(e), [y, O] = _(null), [b, N] = _(!1), L = async () => {
    if (c != null && c.onClick) {
      N(!0);
      try {
        await c.onClick(), C(!1), x && O("success");
      } catch {
        x && O("error");
      } finally {
        N(!1);
      }
    }
  }, F = () => {
    C(!1), t == null || t();
  }, D = b;
  return g(le, {
    children: [o(ar, {
      isOpen: S,
      onClose: F,
      title: f,
      module: h,
      portalContainer: w,
      children: o("div", {
        className: "pb-4 pl-4",
        children: o(rt, {
          title: r,
          image: a,
          benefits: n,
          withShadow: !1,
          tag: P,
          actions: g("div", {
            className: "flex gap-3",
            children: [c && o(M, {
              variant: c.variant,
              label: D ? p.label : c.label,
              icon: c.icon || void 0,
              onClick: L,
              loading: c.loading,
              size: c.size
            }), u && o(M, {
              onClick: u.onClick,
              label: u.label,
              variant: u.variant,
              size: u.size,
              icon: u.icon
            })]
          })
        })
      })
    }), y && x && o(Re, {
      open: !0,
      onClose: () => {
        F(), O(null);
      },
      success: y === "success",
      errorMessage: s,
      successMessage: l,
      nextSteps: i,
      closeLabel: m,
      portalContainer: w
    })]
  });
}
function rr({ mediaUrl: e, title: t, description: r, onClose: a, dismissible: n, width: s, trackVisibility: l, actions: p, showConfirmation: i = !0 }) {
  const [m, c] = _(!1), f = () => {
    c(!0), a && a();
  };
  We(() => {
    l && l(!m);
  }, [l, m]);
  const h = e == null ? void 0 : e.includes(".mp4");
  return o(le, {
    children: m ? null : g(Zt, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [g(Qt, {
        children: [n && o("div", {
          className: "absolute right-2 top-2 z-10",
          children: o(M, {
            variant: "ghost",
            icon: Be,
            size: "sm",
            hideLabel: !0,
            onClick: f,
            label: "Close"
          })
        }), g("div", {
          children: [o("div", {
            children: e && (h ? o("video", {
              src: e,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : o("img", {
              src: e,
              alt: t,
              className: "h-full w-full rounded-md"
            }))
          }), g("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [o(be, {
              className: "text-lg font-medium",
              children: t
            }), o(be, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: r
            })]
          })]
        })]
      }), p && o(ea, {
        className: "p-3",
        children: p.map((u) => u.type === "upsell" ? o(ze, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: i && u.showConfirmation,
          variant: u.variant
        }, u.label) : o(M, {
          label: u.label,
          onClick: u.onClick,
          variant: u.variant
        }, u.label))
      })]
    })
  });
}
const or = ee(function({ primaryAction: t, secondaryAction: r, ...a }, n) {
  const s = (i) => i.variant === "promote" ? o(ze, {
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
  }) : o(M, {
    onClick: i.onClick,
    label: i.label,
    variant: i.variant || "default",
    size: "md",
    icon: i.icon
  }), l = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0, p = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
  return g(ta, {
    ref: n,
    ...a,
    primaryAction: l,
    secondaryAction: p,
    children: [(t == null ? void 0 : t.variant) === "promote" && s(t), (r == null ? void 0 : r.variant) === "promote" && s(r)]
  });
});
or.displayName = "UpsellingBanner";
function Lr({ isOpen: e, setIsOpen: t, label: r, variant: a = "promote", size: n = "md", showIcon: s = !0, side: l = "right", align: p = "center", icon: i = aa, mediaUrl: m, title: c, description: f, width: h = "300px", trackVisibility: u, actions: w, onClick: P, hideLabel: x = !1 }) {
  const [S, C] = _(!1), [y, O] = _(null), [b, N] = _(null), L = (v) => {
    t(v), P && P();
  }, F = async (v) => {
    if (v.type === "upsell") {
      N(v);
      try {
        await v.onClick(), v.showConfirmation && (C(!0), O("success"));
      } catch {
        C(!0), O("error");
      }
    }
  }, D = () => {
    O(null), C(!1), N(null), t(!1);
  }, E = e && !S, d = w == null ? void 0 : w.map((v) => v.type === "upsell" ? {
    ...v,
    onClick: () => F(v)
  } : v);
  return g(le, {
    children: [g(De, {
      open: E,
      onOpenChange: L,
      children: [o(_e, {
        asChild: !0,
        children: o(M, {
          variant: a,
          label: r,
          size: n,
          icon: s ? i : void 0,
          onClick: () => t(e),
          hideLabel: x
        })
      }), o(je, {
        side: l,
        align: p,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: o(rr, {
          mediaUrl: m,
          title: c,
          description: f,
          onClose: () => t(!1),
          dismissible: !1,
          width: h,
          trackVisibility: u,
          actions: d,
          showConfirmation: !1
        })
      })]
    }), (b == null ? void 0 : b.type) === "upsell" && b.showConfirmation && y && o(Re, {
      open: !0,
      onClose: D,
      success: y === "success",
      errorMessage: b.errorMessage,
      successMessage: b.successMessage,
      nextSteps: b.nextSteps,
      closeLabel: b.closeLabel,
      portalContainer: null
    })]
  });
}
const nr = va(null), ir = ({ children: e, fullScreen: t = !0 }) => {
  const r = Ke(null), [a, n] = _(r.current);
  return pa(() => {
    n(r.current);
  }, []), o(nr.Provider, {
    value: {
      element: a
    },
    children: o("div", {
      ref: r,
      id: "f0-layout",
      className: j({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    })
  });
}, sr = ({ children: e }) => o(da, {
  reducedMotion: "user",
  children: e
}), kr = ({ children: e, layout: t, link: r, privacyModeInitiallyEnabled: a, image: n, i18n: s, l10n: l, isDev: p = !1, dataCollectionStorageHandler: i, showExperimentalWarnings: m = !1 }) => o(sr, {
  children: o(ra, {
    isDev: p,
    showExperimentalWarnings: m,
    children: o(oa, {
      ...l,
      children: o(na, {
        ...s,
        children: o(ia, {
          ...r,
          children: o(ir, {
            ...t,
            children: o(sa, {
              children: o(la, {
                initiallyEnabled: a,
                children: o(ca, {
                  ...n,
                  children: o(ua, {
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
}), Se = (e) => `datacollection-${e}`, Tr = {
  get: async (e) => JSON.parse(
    localStorage.getItem(Se(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(Se(e), JSON.stringify(t));
  }
};
export {
  hr as AreaChart,
  _r as Await,
  vr as BarChart,
  M as Button,
  yr as CategoryBarChart,
  Cr as ComboChart,
  jr as CopyButton,
  Er as DndProvider,
  $r as EmojiImage,
  Ir as F0Avatar,
  Mr as F0AvatarAlert,
  Br as F0AvatarCompany,
  Rr as F0AvatarDate,
  zr as F0AvatarEmoji,
  Kr as F0AvatarFile,
  Wr as F0AvatarIcon,
  Vr as F0AvatarList,
  Me as F0AvatarModule,
  qr as F0AvatarPerson,
  Gr as F0AvatarTeam,
  Hr as F0Card,
  Yr as F0Checkbox,
  Pr as F0ChipList,
  Jr as F0EventCatcherProvider,
  Gt as F0Icon,
  kr as F0Provider,
  Ur as F0TagAlert,
  Xr as F0TagBalance,
  Zr as F0TagCompany,
  Qr as F0TagDot,
  eo as F0TagList,
  to as F0TagPerson,
  qt as F0TagRaw,
  ao as F0TagStatus,
  ro as F0TagTeam,
  oo as GROUP_ID_SYMBOL,
  Ar as HomeLayout,
  gr as LineChart,
  pr as Link,
  no as OneFilterPicker,
  br as PieChart,
  la as PrivacyModeProvider,
  rt as ProductBlankslate,
  io as ProductCard,
  Nr as ProductModal,
  rr as ProductWidget,
  wr as ProgressBarChart,
  Sr as StandardLayout,
  so as TagCounter,
  Or as TwoColumnLayout,
  Re as UpsellRequestResponseDialog,
  or as UpsellingBanner,
  ze as UpsellingButton,
  Lr as UpsellingPopover,
  xr as VerticalBarChart,
  fr as avatarVariants,
  lo as buildTranslations,
  co as createAtlaskitDriver,
  uo as createDataSourceDefinition,
  Tr as dataCollectionLocalStorageHandler,
  dr as defaultTranslations,
  zt as experimental,
  po as getAnimationVariants,
  fo as getDataSourcePaginationType,
  mo as getEmojiLabel,
  ho as isInfiniteScrollPagination,
  vo as isPageBasedPagination,
  yo as modules,
  go as tagDotColors,
  bo as useData,
  xo as useDataSource,
  wo as useDndEvents,
  Co as useDraggable,
  Po as useDroppableList,
  So as useEmojiConfetti,
  Oo as useGroups,
  Ao as usePrivacyMode,
  No as useReducedMotion,
  Lo as useSelectable,
  ko as useXRay
};
