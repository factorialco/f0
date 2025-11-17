import { S as xe, a as mt, f as ne, L as K, b as ht, A as vt, i as J, c as yt, d as De, E as bt, g as X, e as gt, h as xt, C as wt, j as St, k as $, l as Fe, u as Pt, G as Ct, m as Nt, n as we, o as Ot, p as Ie, q as At, B as Ee, X as _e, Y as le, r as kt, s as je, t as Lt, v as Tt, w as Dt, x as Ft, y as It, z as Et, D as _t, F as jt, H as Se, I as $t, J as q, K as oe, M as Bt, N as Mt, O as Rt, P as $e, Q as _, R as I, T as zt, U as Kt, V as qt, W as Wt, Z as Gt, _ as Vt, $ as Yt, a0 as Be, a1 as Ht, a2 as Z, a3 as Me, a4 as Re, a5 as Ut, a6 as ze, a7 as Ke, a8 as qe, a9 as We, aa as Jt, ab as Ge, ac as Xt, ad as Zt, ae as Qt, af as Pe, ag as se, ah as ea, ai as ta, aj as Ve, ak as aa, al as ra, am as Ye, an as na, ao as oa, ap as sa, aq as ia, ar as la, as as ca, at as ua, au as da, av as He, aw as M, ax as Ue, ay as fa, az as pa, aA as Ce, aB as ma, aC as Je, aD as ha, aE as va, aF as ya, aG as ba, aH as ga, aI as xa, aJ as wa, aK as Sa, aL as Pa, aM as Ca, aN as Na, aO as Oa } from "./hooks-CTq89m4c.js";
import { bp as tn, br as an, bA as rn, aP as nn, aQ as on, aR as sn, aS as ln, aT as cn, aU as un, aV as dn, aW as fn, aY as pn, aZ as mn, a_ as hn, a$ as vn, b0 as yn, b1 as bn, bw as gn, b3 as xn, b5 as wn, b6 as Sn, b7 as Pn, b8 as Cn, bb as Nn, bc as On, bd as An, bf as kn, b4 as Ln, be as Tn, ba as Dn, bx as Fn, bq as In, bk as En, bn as _n, bj as jn, bB as $n, bi as Bn, bh as Mn, aX as Rn, b2 as zn, b9 as Kn, bg as qn, bl as Wn, bs as Gn, bt as Vn, bu as Yn, bC as Hn, bm as Un, bv as Jn, bz as Xn, bo as Zn, by as Qn } from "./hooks-CTq89m4c.js";
import { jsx as n, jsxs as C, Fragment as ae } from "react/jsx-runtime";
import * as fe from "react";
import k, { PureComponent as Aa, useState as T, forwardRef as V, useEffect as B, useMemo as ie, useCallback as Ne, useRef as pe, useImperativeHandle as ka, Children as La, createContext as Ta } from "react";
const Or = {
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
    sidebar: {
      label: "Main navigation",
      companySelector: {
        label: "Select a company",
        placeholder: "Select a company"
      }
    },
    previous: "Previous",
    next: "Next"
  },
  inputs: {
    password: {
      show: "Show password",
      hide: "Hide password"
    }
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
    retry: "Retry",
    number: {
      value: "Value",
      equal: "Equal to",
      equalTo: "Equal to {{value}}",
      lessOrEqual: "Less or equal to",
      greaterOrEqual: "Greater or equal to",
      equalShort: "= {{value}}",
      greaterThanOrEqualShort: ">= {{value}}",
      lessThanOrEqualShort: "<= {{value}}",
      rangeTitle: "Use range",
      range: "Between {{min}} and {{max}}"
    }
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
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
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
  },
  numberInput: {
    between: "It should be between {{min}} and {{max}}",
    greaterThan: "It should be greater than {{min}}",
    lessThan: "It should be less than {{max}}"
  }
}, Ar = [
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
function Fa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Qe(a.key), a);
  }
}
function Ia(e, t, r) {
  return t && Fa(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ea(e, t, r) {
  return t = Q(t), _a(e, Xe() ? Reflect.construct(t, r || [], Q(e).constructor) : t.apply(e, r));
}
function _a(e, t) {
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
function $a(e, t) {
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
  var t = Ba(e, "string");
  return R(t) == "symbol" ? t : t + "";
}
function Ba(e, t) {
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
    return Da(this, t), Ea(this, t, arguments);
  }
  return $a(t, e), Ia(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(k.Component);
Ze(re, "displayName", "ZAxis");
Ze(re, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Ma = ["option", "isActive"];
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
function Ra(e, t) {
  if (e == null) return {};
  var r = za(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      a = i[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
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
function Ka(e) {
  var t = e.option, r = e.isActive, a = Ra(e, Ma);
  return typeof t == "string" ? /* @__PURE__ */ k.createElement(xe, W({
    option: /* @__PURE__ */ k.createElement(mt, W({
      type: t
    }, a)),
    isActive: r,
    shapeType: "symbols"
  }, a)) : /* @__PURE__ */ k.createElement(xe, W({
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
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oe(Object(r), !0).forEach(function(a) {
      j(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oe(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function qa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ae(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, tt(a.key), a);
  }
}
function Wa(e, t, r) {
  return t && Ae(e.prototype, t), r && Ae(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ga(e, t, r) {
  return t = ee(t), Va(e, et() ? Reflect.construct(t, r || [], ee(e).constructor) : t.apply(e, r));
}
function Va(e, t) {
  if (t && (z(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ya(e);
}
function Ya(e) {
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
function j(e, t, r) {
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
var Y = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    qa(this, t);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = Ga(this, t, [].concat(o)), j(r, "state", {
      isAnimationFinished: !1
    }), j(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), j(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), j(r, "id", Pt("recharts-scatter-")), r;
  }
  return Ha(t, e), Wa(t, [{
    key: "renderSymbolsStatically",
    value: function(a) {
      var o = this, i = this.props, l = i.shape, d = i.activeShape, s = i.activeIndex, m = ne(this.props, !1);
      return a.map(function(c, f) {
        var h = s === f, u = h ? d : l, g = F(F({}, m), c);
        return /* @__PURE__ */ k.createElement(K, G({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c == null ? void 0 : c.cx, "-").concat(c == null ? void 0 : c.cy, "-").concat(c == null ? void 0 : c.size, "-").concat(f)
        }, ht(o.props, c, f), {
          role: "img"
        }), /* @__PURE__ */ k.createElement(Ka, G({
          option: u,
          isActive: h,
          key: "symbol-".concat(f)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var a = this, o = this.props, i = o.points, l = o.isAnimationActive, d = o.animationBegin, s = o.animationDuration, m = o.animationEasing, c = o.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ k.createElement(vt, {
        begin: d,
        duration: s,
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
        var u = h.t, g = i.map(function(N, O) {
          var A = f && f[O];
          if (A) {
            var x = J(A.cx, N.cx), b = J(A.cy, N.cy), w = J(A.size, N.size);
            return F(F({}, N), {}, {
              cx: x(u),
              cy: b(u),
              size: w(u)
            });
          }
          var S = J(0, N.size);
          return F(F({}, N), {}, {
            size: S(u)
          });
        });
        return /* @__PURE__ */ k.createElement(K, null, a.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var a = this.props, o = a.points, i = a.isAnimationActive, l = this.state.prevPoints;
      return i && o && o.length && (!l || !yt(l, o)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(o);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var o = this.props, i = o.points, l = o.xAxis, d = o.yAxis, s = o.children, m = De(s, bt);
      return m ? m.map(function(c, f) {
        var h = c.props, u = h.direction, g = h.dataKey;
        return /* @__PURE__ */ k.cloneElement(c, {
          key: "".concat(u, "-").concat(g, "-").concat(i[f]),
          data: i,
          xAxis: l,
          yAxis: d,
          layout: u === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(O, A) {
            return {
              x: O.cx,
              y: O.cy,
              value: u === "x" ? +O.node.x : +O.node.y,
              errorVal: X(O, A)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var a = this.props, o = a.points, i = a.line, l = a.lineType, d = a.lineJointType, s = ne(this.props, !1), m = ne(i, !1), c, f;
      if (l === "joint")
        c = o.map(function(b) {
          return {
            x: b.cx,
            y: b.cy
          };
        });
      else if (l === "fitting") {
        var h = gt(o), u = h.xmin, g = h.xmax, N = h.a, O = h.b, A = function(w) {
          return N * w + O;
        };
        c = [{
          x: u,
          y: A(u)
        }, {
          x: g,
          y: A(g)
        }];
      }
      var x = F(F(F({}, s), {}, {
        fill: "none",
        stroke: s && s.fill
      }, m), {}, {
        points: c
      });
      return /* @__PURE__ */ k.isValidElement(i) ? f = /* @__PURE__ */ k.cloneElement(i, x) : xt(i) ? f = i(x) : f = /* @__PURE__ */ k.createElement(wt, G({}, x, {
        type: d
      })), /* @__PURE__ */ k.createElement(K, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, o = a.hide, i = a.points, l = a.line, d = a.className, s = a.xAxis, m = a.yAxis, c = a.left, f = a.top, h = a.width, u = a.height, g = a.id, N = a.isAnimationActive;
      if (o || !i || !i.length)
        return null;
      var O = this.state.isAnimationFinished, A = St("recharts-scatter", d), x = s && s.allowDataOverflow, b = m && m.allowDataOverflow, w = x || b, S = $(g) ? this.id : g;
      return /* @__PURE__ */ k.createElement(K, {
        className: A,
        clipPath: w ? "url(#clipPath-".concat(S, ")") : null
      }, x || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: x ? c : c - h / 2,
        y: b ? f : f - u / 2,
        width: x ? h : h * 2,
        height: b ? u : u * 2
      }))) : null, l && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ k.createElement(K, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!N || O) && Fe.renderCallByParent(this.props, i));
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
  var t = e.xAxis, r = e.yAxis, a = e.zAxis, o = e.item, i = e.displayedData, l = e.xAxisTicks, d = e.yAxisTicks, s = e.offset, m = o.props.tooltipType, c = De(o.props.children, Nt), f = $(t.dataKey) ? o.props.dataKey : t.dataKey, h = $(r.dataKey) ? o.props.dataKey : r.dataKey, u = a && a.dataKey, g = a ? a.range : re.defaultProps.range, N = g && g[0], O = t.scale.bandwidth ? t.scale.bandwidth() : 0, A = r.scale.bandwidth ? r.scale.bandwidth() : 0, x = i.map(function(b, w) {
    var S = X(b, f), y = X(b, h), v = !$(u) && X(b, u) || "-", L = [{
      name: $(t.dataKey) ? o.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: S,
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
      bandSize: O,
      entry: b,
      index: w,
      dataKey: f
    }), E = we({
      axis: r,
      ticks: d,
      bandSize: A,
      entry: b,
      index: w,
      dataKey: h
    }), p = v !== "-" ? a.scale(v) : N, P = Math.sqrt(Math.max(p, 0) / Math.PI);
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
        x: S,
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
    points: x
  }, s);
});
var Ja = Ot({
  chartName: "ComposedChart",
  GraphicalChild: [Ie, At, Ee, Y],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: _e
  }, {
    axisType: "yAxis",
    AxisComp: le
  }, {
    axisType: "zAxis",
    AxisComp: re
  }],
  formatAxisMap: kt
});
const Xa = (e) => {
  const t = (r) => {
    const { cx: a, cy: o, fill: i, payload: l } = r, d = () => {
      if (!l) return "-";
      if (l[e] !== void 0)
        return l[e];
      for (const [s, m] of Object.entries(l))
        if (typeof m == "number" && s !== "x")
          return m;
      return "-";
    };
    return n("circle", {
      cx: a,
      cy: o,
      r: 4,
      fill: i,
      stroke: "white",
      strokeWidth: 2,
      ref: (s) => {
        s != null && s.parentElement && s.parentElement.setAttribute("aria-label", `Data point: ${d()}`);
      }
    });
  };
  return t.displayName = `Scatter-${e}`, t;
}, Za = ({ dataConfig: e, data: t, xAxis: r, yAxis: a = {
  hide: !0
}, label: o = !1, hideTooltip: i = !1, hideGrid: l = !1, aspect: d, legend: s, showValueUnderLabel: m = !1, bar: c, line: f, scatter: h, onClick: u }, g) => {
  var v, L, D, E;
  const N = Lt(t), O = c != null && c.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], A = f != null && f.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], x = h != null && h.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], b = [...O, ...A, ...x], w = Math.max(...N.flatMap((p) => b.map((P) => Tt(a != null && a.tickFormatter ? a.tickFormatter(`${p[P]}`) : `${p[P]}`)))), S = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "left"), y = [c, f, h].filter((p) => (p == null ? void 0 : p.axisPosition) === "right");
  return n(Dt, {
    config: e,
    ref: g,
    aspect: d,
    children: C(Ja, {
      accessibilityLayer: !0,
      data: N,
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
      children: [!i && n(Ft, {
        ...It(),
        content: n(Et, {
          yAxisFormatter: a.tickFormatter
        })
      }), !l && n(_t, {
        ...jt()
      }), S.length > 0 && n(le, {
        ...Se(a),
        tick: !0,
        width: a.width ?? w + 20 + (y.length > 0 && ((v = S[0]) != null && v.axisLabel) ? 20 : 0),
        hide: a.hide || S.some((p) => p == null ? void 0 : p.hideAxis),
        label: (L = S[0]) != null && L.axisLabel ? {
          value: S[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), y.length > 0 && n(le, {
        ...Se(a),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: a.width ?? w + 20 + (S.length > 0 && ((D = y[0]) != null && D.axisLabel) ? 20 : 0),
        hide: a.hide || y.some((p) => p == null ? void 0 : p.hideAxis),
        label: (E = y[0]) != null && E.axisLabel ? {
          value: y[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), n(_e, {
        ...$t(r),
        hide: r == null ? void 0 : r.hide,
        tick: m ? (p) => {
          var be, ge;
          const { x: P, y: H, payload: ve } = p, ye = ((be = t.find((pt) => pt.label === ve.value)) == null ? void 0 : be.values) || "", U = Object.keys(ye).length === 1 ? (ge = Object.values(ye)) == null ? void 0 : ge[0] : void 0, ft = U !== void 0 && a.tickFormatter ? a.tickFormatter(`${U}`) : U.toLocaleString();
          return C("g", {
            transform: `translate(${P},${H})`,
            children: [n("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: ve.value
            }), !!U && n("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: ft
            })]
          });
        } : void 0
      }), O.map((p, P) => n(Ee, {
        isAnimationActive: !1,
        dataKey: String(p),
        fill: e[p].color ? q(e[p].color) : oe(P),
        radius: 4,
        maxBarSize: 32,
        children: o && n(Fe, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(p)}`)
      }, `bar-${String(p)}`)), A.map((p, P) => n(Ie, {
        type: (f == null ? void 0 : f.lineType) ?? "natural",
        dataKey: String(p),
        stroke: e[p].color ? q(e[p].color) : oe(O.length + P),
        strokeWidth: 2,
        dot: (f == null ? void 0 : f.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (f == null ? void 0 : f.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(p)}`)), x.map((p, P) => n(Y, {
        dataKey: String(p),
        fill: e[p].color ? q(e[p].color) : oe(O.length + A.length + P),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (h == null ? void 0 : h.axisPosition) === "right" ? "right" : void 0,
        shape: Xa(String(p))
      }, `scatter-${String(p)}`)), s && n(Bt, {
        content: n(Mt, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Qa = je(Za);
var me = "Progress", he = 100, [er, kr] = Rt(me), [tr, ar] = er(me), at = fe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: a = null,
      max: o,
      getValueLabel: i = rr,
      ...l
    } = e;
    (o || o === 0) && !ke(o) && console.error(nr(`${o}`, "Progress"));
    const d = ke(o) ? o : he;
    a !== null && !Le(a, d) && console.error(or(`${a}`, "Progress"));
    const s = Le(a, d) ? a : null, m = te(s) ? i(s, d) : void 0;
    return /* @__PURE__ */ n(tr, { scope: r, value: s, max: d, children: /* @__PURE__ */ n(
      $e.div,
      {
        "aria-valuemax": d,
        "aria-valuemin": 0,
        "aria-valuenow": te(s) ? s : void 0,
        "aria-valuetext": m,
        role: "progressbar",
        "data-state": ot(s, d),
        "data-value": s ?? void 0,
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
    const { __scopeProgress: r, ...a } = e, o = ar(rt, r);
    return /* @__PURE__ */ n(
      $e.div,
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
function rr(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function ot(e, t) {
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
function nr(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${he}\`.`;
}
function or(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${he} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var st = at, sr = nt;
const it = fe.forwardRef(({ className: e, value: t, ...r }, a) => n(st, {
  ref: a,
  className: _("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: n(sr, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
it.displayName = st.displayName;
const ir = ({ value: e, max: t = 100, label: r, color: a }, o) => {
  const i = a ? q(a) : q("categorical-1"), l = e / t * 100;
  return C("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [n("div", {
      className: "flex-grow",
      children: n(it, {
        color: i,
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
}, lr = je(ir), Lr = I(
  {
    name: "AreaChart",
    type: "info"
  },
  Vt
), Tr = I(
  {
    name: "BarChart",
    type: "info"
  },
  zt
), Dr = I(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Kt
), Fr = I(
  {
    name: "LineChart",
    type: "info"
  },
  qt
), Ir = I(
  {
    name: "PieChart",
    type: "info"
  },
  Wt
), Er = I(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Gt
), _r = I(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  lr
), jr = I(
  {
    name: "ComboChart",
    type: "info"
  },
  Qa
), $r = Yt, Br = Be, Mr = ["default", "outline", "neutral"], Rr = Be, zr = ["sm", "md", "lg"], Kr = Ht, de = ({ count: e, list: t }) => {
  const [r, a] = T(!1), o = n(Z, {
    label: `+${e}`
  });
  return t != null && t.length ? C(Me, {
    open: r,
    onOpenChange: a,
    children: [n(Re, {
      asChild: !0,
      children: n("button", {
        className: Ut("inline-flex flex-shrink-0 items-center"),
        children: o
      })
    }), n(ze, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: C(Ke, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((i, l) => n("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n(Z, {
            ...i
          })
        }, l)), n(qe, {
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
    return n(Jt, {
      items: e,
      renderListItem: (s) => n(Z, {
        ...s
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: r !== void 0,
      renderOverflowIndicator: (s) => n(de, {
        count: (r ?? 0) + s,
        list: r ? void 0 : e.slice(e.length - s)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const o = e.slice(0, t), i = e.slice(t), l = r ?? e.length - t, d = l > 0;
  return C("div", {
    className: "flex items-center gap-2",
    children: [o.map((s, m) => n(Z, {
      ...s
    }, m)), d && n(de, {
      count: l,
      list: r ? void 0 : i
    })]
  });
};
lt.displayName = "F0ChipList";
const qr = We("F0ChipList", lt), ct = V(({ value: e, onDateChange: t, granularity: r, onOpenChange: a, minDate: o, maxDate: i, onClear: l, ...d }, s) => {
  const [m, c] = T(""), [f, h] = T(!1), u = Ge();
  B(() => {
    c(r.toString(e == null ? void 0 : e.value, u));
  }, [e, r, u]);
  const g = (x) => Qt(x, r, {
    minDate: o,
    maxDate: i
  }), N = (x, b) => {
    if (x === "") {
      t == null || t({
        value: void 0,
        granularity: b.key
      }), h(d.required ?? !1);
      return;
    }
    const w = b.toRange(b.fromString(x, u));
    w && g(w == null ? void 0 : w.from) && g(w == null ? void 0 : w.to) ? (t == null || t({
      value: w,
      granularity: b.key
    }), h(!1)) : h(!0);
  }, O = () => {
    N(m, r);
  };
  return n(ae, {
    children: n(Xt, {
      ...d,
      icon: Zt,
      ref: s,
      onFocus: () => a == null ? void 0 : a(!0),
      onClear: () => {
        l == null || l(), c(""), N("", r);
      },
      onKeyDown: (x) => {
        x.key === "Enter" && O();
      },
      type: "text",
      onChange: (x) => {
        c(x);
      },
      error: f || d.error,
      onBlur: O,
      value: m,
      onClickContent: () => a == null ? void 0 : a(!0)
    })
  });
});
ct.displayName = "DateInput";
function cr({ onChange: e, value: t, presets: r = [], granularities: a = ["day"], minDate: o, maxDate: i, open: l = !1, ...d }) {
  const [s, m] = T(), [c, f] = T(l);
  B(() => {
    f(l);
  }, [l]);
  const h = Ge(), u = ie(() => a[0] ?? "day", [a]), g = Ne((y) => {
    const v = y || u;
    if (!Pe[v])
      throw new Error(`Invalid granularity ${v}`);
    return {
      ...Pe[v],
      key: v
    };
  }, [u]), N = Ne((y) => {
    var L;
    if (!y)
      return;
    const v = g(y == null ? void 0 : y.granularity);
    return y ? {
      value: v.toRange(v.calendarMode === "range" ? y.value : ((L = y.value) == null ? void 0 : L.from) ?? void 0),
      granularity: y.granularity
    } : void 0;
  }, [g]), O = ie(() => g(s == null ? void 0 : s.granularity), [s == null ? void 0 : s.granularity, g]);
  B(() => {
    const y = N(t);
    se(s, y) || m(y);
  }, [t]);
  const A = (y) => {
    const v = N(y), D = g(v == null ? void 0 : v.granularity).calendarMode !== "range" && (v == null ? void 0 : v.granularity) === (s == null ? void 0 : s.granularity) && !se(v, s);
    x(v), D && f(!1);
  }, x = (y) => {
    const v = N(y);
    if (m(v), !se(v, s)) {
      const L = g(v == null ? void 0 : v.granularity);
      e == null || e(v, L.toString(v == null ? void 0 : v.value, h));
    }
  }, b = (y) => {
    var v;
    f(y), (v = d.onOpenChange) == null || v.call(d, y);
  }, w = ie(() => r.filter((y) => a.includes(y.granularity)), [r, a]), S = pe(null);
  return B(() => {
    c && S.current && requestAnimationFrame(() => {
      var y;
      (y = S.current) == null || y.focus();
    });
  }, [c]), n(ea, {
    hideCalendarInput: !0,
    onSelect: A,
    value: s,
    presets: w,
    granularities: a,
    minDate: o,
    maxDate: i,
    open: c,
    onOpenChange: b,
    asChild: !0,
    children: n(ct, {
      ref: S,
      ...d,
      value: s,
      granularity: O,
      onDateChange: x
    })
  });
}
const Wr = ta, Gr = We(
  "F0DatePicker",
  cr
), ur = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, dr = V(function({ widgets: t, children: r }, a) {
  const o = pe(null);
  ka(a, () => o.current);
  const i = La.toArray(t).filter((l) => !!l).map((l, d) => n("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: l
  }, d));
  return n(Ve, {
    layout: "home",
    children: C("div", {
      ref: o,
      className: "@container",
      children: [C("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [n(aa, {
          columns: ur,
          showArrows: !1,
          children: i
        }), n("main", {
          children: r
        })]
      }), C("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [n("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: i.slice(0, 3)
        }), n("main", {
          className: "col-span-2",
          children: r
        }), n("div", {
          className: "flex flex-1 flex-col gap-5",
          children: i.slice(3)
        })]
      })]
    })
  });
}), fr = V(function({ children: t, sideContent: r, mainColumnPosition: a = "left", sticky: o = !1 }, i) {
  return n("div", {
    ref: i,
    className: "h-full",
    children: C("div", {
      className: _("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
      children: [n("main", {
        className: _("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", a === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: t
      }), n(pr, {
        sticky: o,
        className: _("order-1", a === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), pr = ({ children: e, className: t }) => n("aside", {
  className: _("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
  children: e
}), mr = ra({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), ut = k.forwardRef(({ children: e, variant: t, className: r, ...a }, o) => n(Ve, {
  layout: "standard",
  children: n("section", {
    ref: o,
    className: _("relative flex-1 overflow-auto", r),
    ...a,
    children: n("div", {
      className: _(mr({
        variant: t
      })),
      children: e
    })
  })
}));
ut.displayName = "StandardLayout";
const Vr = I({
  name: "StandardLayout",
  type: "layout"
}, ut), Yr = I({
  name: "TwoColumnLayout",
  type: "layout"
}, fr), Hr = I({
  name: "HomeLayout",
  type: "layout"
}, dr), hr = ({ benefits: e }) => n("div", {
  className: "flex flex-col gap-2",
  children: e.map((t, r) => n(vr, {
    text: t
  }, r))
}), vr = ({ text: e }) => C("div", {
  className: "flex flex-row items-start gap-2",
  children: [n(sa, {
    icon: ia,
    size: "md",
    className: "text-f1-icon-positive"
  }), n("span", {
    children: e
  })]
}), dt = V(({ title: e, image: t, benefits: r, actions: a, withShadow: o = !0, module: i, moduleName: l, tag: d, promoTag: s }, m) => C("div", {
  ref: m,
  className: _("bg-white flex flex-row rounded-xl border border-f1-border-secondary", o && "shadow-md"),
  children: [n("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: n("img", {
      src: t,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), C("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [C("div", {
      className: "flex flex-col gap-5",
      children: [C("div", {
        className: "flex flex-col gap-2",
        children: [C("div", {
          className: "flex flex-row items-center gap-2",
          children: [i && n(Ye, {
            module: i
          }), l && n("p", {
            className: "text-base font-medium text-f1-foreground",
            children: l
          })]
        }), (d || s) && C("div", {
          className: "flex justify-start gap-2",
          children: [d && n(na, {
            icon: d.icon,
            text: d.label
          }), s && n(oa, {
            variant: s.variant || "positive",
            text: s.label
          })]
        }), n("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: e
        })]
      }), n(hr, {
        benefits: r
      })]
    }), a && n("div", {
      className: "flex gap-3",
      children: a
    })]
  })]
}));
dt.displayName = "ProductBlankslate";
function yr({ isOpen: e, onClose: t, title: r, children: a, module: o, portalContainer: i }) {
  const [l, d] = T(e);
  return B(() => {
    d(e);
  }, [e]), n(la, {
    open: l,
    onOpenChange: (m) => {
      d(m), m || t();
    },
    modal: !0,
    children: C(ca, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: i,
      children: [C("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [C(ua, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [o && n(Ye, {
            module: o,
            size: "lg"
          }), r]
        }), n(da, {
          variant: "outline",
          icon: He,
          onClick: t,
          label: "Close modal",
          hideLabel: !0
        })]
      }), C(Ke, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [a, n(qe, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Ur({ isOpen: e, onClose: t, title: r, image: a, benefits: o, errorMessage: i, successMessage: l, loadingState: d, nextSteps: s, closeLabel: m, primaryAction: c, modalTitle: f, modalModule: h, secondaryAction: u, portalContainer: g, tag: N, promoTag: O, showResponseDialog: A = !0 }) {
  const [x, b] = T(e), [w, S] = T(null), [y, v] = T(!1), L = async () => {
    if (c != null && c.onClick) {
      v(!0);
      try {
        await c.onClick(), b(!1), A && S("success");
      } catch {
        A && S("error");
      } finally {
        v(!1);
      }
    }
  }, D = () => {
    b(!1), t == null || t();
  }, E = y;
  return C(ae, {
    children: [n(yr, {
      isOpen: x,
      onClose: D,
      title: f,
      module: h,
      portalContainer: g,
      children: n("div", {
        className: "pb-4 pl-4",
        children: n(dt, {
          title: r,
          image: a,
          benefits: o,
          withShadow: !1,
          tag: N,
          promoTag: O,
          actions: C("div", {
            className: "flex gap-3",
            children: [c && n(M, {
              variant: c.variant,
              label: E ? d.label : c.label,
              icon: c.icon || void 0,
              onClick: L,
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
    }), w && A && n(Ue, {
      open: !0,
      onClose: () => {
        D(), S(null);
      },
      success: w === "success",
      errorMessage: i,
      successMessage: l,
      nextSteps: s,
      closeLabel: m,
      portalContainer: g
    })]
  });
}
function br({ mediaUrl: e, title: t, description: r, onClose: a, dismissible: o, width: i, trackVisibility: l, actions: d, showConfirmation: s = !0 }) {
  const [m, c] = T(!1), f = () => {
    c(!0), a && a();
  };
  B(() => {
    l && l(!m);
  }, [l, m]);
  const h = e == null ? void 0 : e.includes(".mp4");
  return n(ae, {
    children: m ? null : C(fa, {
      style: {
        width: i
      },
      className: "relative bg-f1-background p-1",
      children: [C(pa, {
        children: [o && n("div", {
          className: "absolute right-2 top-2 z-10",
          children: n(M, {
            variant: "ghost",
            icon: He,
            size: "sm",
            hideLabel: !0,
            onClick: f,
            label: "Close"
          })
        }), C("div", {
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
          }), C("div", {
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
      }), d && n(ma, {
        className: "p-3",
        children: d.map((u) => u.type === "upsell" ? n(Je, {
          label: u.label,
          onRequest: u.onClick,
          errorMessage: u.errorMessage,
          successMessage: u.successMessage,
          loadingState: u.loadingState,
          nextSteps: u.nextSteps,
          closeLabel: u.closeLabel,
          showConfirmation: s && u.showConfirmation,
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
const gr = V(function({ primaryAction: t, secondaryAction: r, ...a }, o) {
  const i = (s) => s.variant === "promote" ? n(Je, {
    label: s.label,
    onRequest: async () => {
      await s.onClick();
    },
    errorMessage: s.errorMessage,
    successMessage: s.successMessage,
    loadingState: s.loadingState,
    nextSteps: s.nextSteps,
    closeLabel: s.closeLabel,
    showIcon: s.showIcon,
    showConfirmation: s.showConfirmation,
    variant: s.variant
  }) : n(M, {
    onClick: s.onClick,
    label: s.label,
    variant: s.variant || "default",
    size: "md",
    icon: s.icon
  }), l = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0, d = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
  return C(ha, {
    ref: o,
    ...a,
    primaryAction: l,
    secondaryAction: d,
    children: [(t == null ? void 0 : t.variant) === "promote" && i(t), (r == null ? void 0 : r.variant) === "promote" && i(r)]
  });
});
gr.displayName = "UpsellingBanner";
function Jr({ isOpen: e, setIsOpen: t, label: r, variant: a = "promote", size: o = "md", showIcon: i = !0, side: l = "right", align: d = "center", icon: s = va, mediaUrl: m, title: c, description: f, width: h = "300px", trackVisibility: u, actions: g, onClick: N, hideLabel: O = !1 }) {
  const [A, x] = T(!1), [b, w] = T(null), [S, y] = T(null), v = (P) => {
    t(P), N && N();
  }, L = async (P) => {
    if (P.type === "upsell") {
      y(P);
      try {
        await P.onClick(), P.showConfirmation && (x(!0), w("success"));
      } catch {
        x(!0), w("error");
      }
    }
  }, D = () => {
    w(null), x(!1), y(null), t(!1);
  }, E = e && !A, p = g == null ? void 0 : g.map((P) => P.type === "upsell" ? {
    ...P,
    onClick: () => L(P)
  } : P);
  return C(ae, {
    children: [C(Me, {
      open: E,
      onOpenChange: v,
      children: [n(Re, {
        asChild: !0,
        children: n(M, {
          variant: a,
          label: r,
          size: o,
          icon: i ? s : void 0,
          onClick: () => t(e),
          hideLabel: O
        })
      }), n(ze, {
        side: l,
        align: d,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: n(br, {
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
    }), (S == null ? void 0 : S.type) === "upsell" && S.showConfirmation && b && n(Ue, {
      open: !0,
      onClose: D,
      success: b === "success",
      errorMessage: S.errorMessage,
      successMessage: S.successMessage,
      nextSteps: S.nextSteps,
      closeLabel: S.closeLabel,
      portalContainer: null
    })]
  });
}
const xr = Ta(null), wr = ({ children: e, fullScreen: t = !0 }) => {
  const r = pe(null), [a, o] = T(r.current);
  return Oa(() => {
    o(r.current);
  }, []), n(xr.Provider, {
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
}, Sr = ({ children: e }) => n(Na, {
  reducedMotion: "user",
  children: e
}), Xr = ({ children: e, layout: t, link: r, privacyModeInitiallyEnabled: a, image: o, i18n: i, l10n: l, isDev: d = !1, dataCollectionStorageHandler: s, showExperimentalWarnings: m = !1 }) => n(Sr, {
  children: n(ya, {
    isDev: d,
    showExperimentalWarnings: m,
    children: n(ba, {
      ...l,
      children: n(ga, {
        ...i,
        children: n(xa, {
          ...r,
          children: n(wr, {
            ...t,
            children: n(wa, {
              children: n(Sa, {
                initiallyEnabled: a,
                children: n(Pa, {
                  ...o,
                  children: n(Ca, {
                    handler: s,
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
}), Te = (e) => `datacollection-${e}`, Zr = {
  get: async (e) => JSON.parse(
    localStorage.getItem(Te(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(Te(e), JSON.stringify(t));
  }
};
export {
  Lr as AreaChart,
  tn as Await,
  Tr as BarChart,
  Dr as CategoryBarChart,
  jr as ComboChart,
  an as DndProvider,
  rn as EmojiImage,
  nn as F0Avatar,
  on as F0AvatarAlert,
  sn as F0AvatarCompany,
  ln as F0AvatarDate,
  cn as F0AvatarEmoji,
  un as F0AvatarFile,
  dn as F0AvatarIcon,
  fn as F0AvatarList,
  Ye as F0AvatarModule,
  pn as F0AvatarPerson,
  mn as F0AvatarTeam,
  M as F0Button,
  hn as F0ButtonDropdown,
  vn as F0ButtonToggle,
  yn as F0Card,
  bn as F0Checkbox,
  qr as F0ChipList,
  Gr as F0DatePicker,
  gn as F0EventCatcherProvider,
  sa as F0Icon,
  xn as F0Link,
  Xr as F0Provider,
  wn as F0TagAlert,
  Sn as F0TagBalance,
  Pn as F0TagCompany,
  Cn as F0TagDot,
  Nn as F0TagList,
  On as F0TagPerson,
  na as F0TagRaw,
  oa as F0TagStatus,
  An as F0TagTeam,
  kn as GROUP_ID_SYMBOL,
  Hr as HomeLayout,
  Fr as LineChart,
  Ln as OneFilterPicker,
  Ir as PieChart,
  Sa as PrivacyModeProvider,
  dt as ProductBlankslate,
  Tn as ProductCard,
  Ur as ProductModal,
  br as ProductWidget,
  _r as ProgressBarChart,
  Vr as StandardLayout,
  Dn as TagCounter,
  Yr as TwoColumnLayout,
  Ue as UpsellRequestResponseDialog,
  gr as UpsellingBanner,
  Je as UpsellingButton,
  Jr as UpsellingPopover,
  Er as VerticalBarChart,
  Ar as avatarVariants,
  Fn as buildTranslations,
  Rr as buttonDropdownSizes,
  Mr as buttonDropdownVariants,
  Br as buttonSizes,
  zr as buttonToggleSizes,
  $r as buttonVariants,
  In as createAtlaskitDriver,
  En as createDataSourceDefinition,
  Zr as dataCollectionLocalStorageHandler,
  Wr as datepickerSizes,
  Or as defaultTranslations,
  We as experimental,
  _n as getAnimationVariants,
  jn as getDataSourcePaginationType,
  $n as getEmojiLabel,
  Bn as isInfiniteScrollPagination,
  Mn as isPageBasedPagination,
  Kr as linkVariants,
  Rn as modules,
  zn as predefinedPresets,
  Kn as tagDotColors,
  qn as useData,
  Wn as useDataSource,
  Gn as useDndEvents,
  Vn as useDraggable,
  Yn as useDroppableList,
  Hn as useEmojiConfetti,
  Un as useGroups,
  Jn as usePrivacyMode,
  Xn as useReducedMotion,
  Zn as useSelectable,
  Qn as useXRay
};
