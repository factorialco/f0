import { S as ve, a as st, f as ae, L as z, b as lt, A as ct, i as H, c as ut, d as Oe, E as dt, g as Q, e as pt, h as ft, C as mt, j as ht, k as $, l as Ne, u as vt, G as gt, m as bt, n as ge, o as yt, p as Ae, q as xt, B as Le, X as Te, Y as ne, r as wt, s as ke, t as Ct, v as Pt, w as St, x as Ot, y as Nt, z as At, D as Lt, F as Tt, H as be, I as kt, J as q, K as re, M as Dt, N as Ft, O as Et, P as De, Q as j, R as D, T as _t, U as jt, V as It, W as $t, Z as Mt, _ as Bt, $ as Rt, a0 as Fe, a1 as zt, a2 as U, a3 as Ee, a4 as _e, a5 as qt, a6 as je, a7 as Ie, a8 as $e, a9 as Kt, aa as Vt, ab as Wt, ac as Me, ad as Gt, ae as Yt, af as Be, ag as Ht, ah as Qt, ai as Ut, aj as Jt, ak as Xt, al as Zt, am as ea, an as ta, ao as Re, ap as M, aq as ze, ar as aa, as as ra, at as ye, au as na, av as qe, aw as oa, ax as ia, ay as sa, az as la, aA as ca, aB as ua, aC as da, aD as pa, aE as fa, aF as ma, aG as ha, aH as va } from "./hooks-DkO7-GEC.js";
import { bj as Kr, bl as Vr, bu as Wr, aI as Gr, aJ as Yr, aK as Hr, aL as Qr, aM as Ur, aN as Jr, aO as Xr, aP as Zr, aR as en, aS as tn, aT as an, aU as rn, aV as nn, aW as on, aX as sn, bq as ln, aZ as cn, a$ as un, b0 as dn, b1 as pn, b2 as fn, b5 as mn, b6 as hn, b7 as vn, b9 as gn, a_ as bn, b8 as yn, b4 as xn, br as wn, bk as Cn, be as Pn, bh as Sn, bd as On, bv as Nn, bc as An, bb as Ln, aQ as Tn, aY as kn, b3 as Dn, ba as Fn, bf as En, bm as _n, bn as jn, bo as In, bw as $n, bg as Mn, bp as Bn, bt as Rn, bi as zn, bs as qn } from "./hooks-DkO7-GEC.js";
import { jsx as n, jsxs as g, Fragment as le } from "react/jsx-runtime";
import * as ce from "react";
import N, { PureComponent as ga, useState as E, forwardRef as ee, useRef as Ke, useImperativeHandle as ba, Children as ya, useEffect as Ve, createContext as xa } from "react";
const hr = {
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
  },
  coCreationForm: {
    actions: {
      actions: "Actions",
      duplicateQuestion: "Duplicate question",
      deleteQuestion: "Delete question",
      duplicateSection: "Duplicate section",
      deleteSection: "Delete section"
    },
    questionTypes: {
      section: "Section",
      rating: "Rating",
      multipleChoice: "Multiple choice",
      singleChoice: "Single choice",
      text: "Text",
      longText: "Long text",
      numeric: "Numeric",
      link: "Link",
      date: "Date"
    },
    selectQuestion: {
      addOption: "Add option",
      newOption: "New option {{number}}",
      markAsCorrect: "Mark as correct",
      remove: "Remove",
      correct: "Correct",
      optionPlaceholder: "Type anything you want here..."
    },
    answer: {
      label: "Answer",
      placeholder: "Respondent's answer"
    },
    labels: {
      title: "Title",
      description: "Description",
      required: "Required",
      questionType: "Question type",
      questionOptions: "Question options",
      actions: "Actions",
      sectionTitlePlaceholder: "Section title"
    },
    defaults: {
      newSection: "New Section",
      newQuestion: "New Question",
      newQuestionDescription: "New question description"
    }
  }
}, vr = [
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
function wa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ca(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Ye(a.key), a);
  }
}
function Pa(e, t, r) {
  return t && Ca(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Sa(e, t, r) {
  return t = J(t), Oa(e, We() ? Reflect.construct(t, r || [], J(e).constructor) : t.apply(e, r));
}
function Oa(e, t) {
  if (t && (B(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Na(e);
}
function Na(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function We() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (We = function() {
    return !!e;
  })();
}
function J(e) {
  return J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, J(e);
}
function Aa(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && oe(e, t);
}
function oe(e, t) {
  return oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, oe(e, t);
}
function Ge(e, t, r) {
  return t = Ye(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ye(e) {
  var t = La(e, "string");
  return B(t) == "symbol" ? t : t + "";
}
function La(e, t) {
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
    return wa(this, t), Sa(this, t, arguments);
  }
  return Aa(t, e), Pa(t, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(N.Component);
Ge(te, "displayName", "ZAxis");
Ge(te, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var Ta = ["option", "isActive"];
function K() {
  return K = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, K.apply(this, arguments);
}
function ka(e, t) {
  if (e == null) return {};
  var r = Da(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      a = s[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function Da(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function Fa(e) {
  var t = e.option, r = e.isActive, a = ka(e, Ta);
  return typeof t == "string" ? /* @__PURE__ */ N.createElement(ve, K({
    option: /* @__PURE__ */ N.createElement(st, K({
      type: t
    }, a)),
    isActive: r,
    shapeType: "symbols"
  }, a)) : /* @__PURE__ */ N.createElement(ve, K({
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
      I(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xe(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function Ea(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function we(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Qe(a.key), a);
  }
}
function _a(e, t, r) {
  return t && we(e.prototype, t), r && we(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ja(e, t, r) {
  return t = X(t), Ia(e, He() ? Reflect.construct(t, r || [], X(e).constructor) : t.apply(e, r));
}
function Ia(e, t) {
  if (t && (R(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $a(e);
}
function $a(e) {
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
function X(e) {
  return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, X(e);
}
function Ma(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ie(e, t);
}
function ie(e, t) {
  return ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
    return a.__proto__ = o, a;
  }, ie(e, t);
}
function I(e, t, r) {
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
var W = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    Ea(this, t);
    for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
      o[s] = arguments[s];
    return r = ja(this, t, [].concat(o)), I(r, "state", {
      isAnimationFinished: !1
    }), I(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      });
    }), I(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      });
    }), I(r, "id", vt("recharts-scatter-")), r;
  }
  return Ma(t, e), _a(t, [{
    key: "renderSymbolsStatically",
    value: function(a) {
      var o = this, s = this.props, l = s.shape, p = s.activeShape, i = s.activeIndex, m = ae(this.props, !1);
      return a.map(function(c, f) {
        var h = i === f, u = h ? p : l, x = T(T({}, m), c);
        return /* @__PURE__ */ N.createElement(z, V({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(c == null ? void 0 : c.cx, "-").concat(c == null ? void 0 : c.cy, "-").concat(c == null ? void 0 : c.size, "-").concat(f)
        }, lt(o.props, c, f), {
          role: "img"
        }), /* @__PURE__ */ N.createElement(Fa, V({
          option: u,
          isActive: h,
          key: "symbol-".concat(f)
        }, x)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var a = this, o = this.props, s = o.points, l = o.isAnimationActive, p = o.animationBegin, i = o.animationDuration, m = o.animationEasing, c = o.animationId, f = this.state.prevPoints;
      return /* @__PURE__ */ N.createElement(ct, {
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
        var u = h.t, x = s.map(function(P, C) {
          var w = f && f[C];
          if (w) {
            var S = H(w.cx, P.cx), b = H(w.cy, P.cy), O = H(w.size, P.size);
            return T(T({}, P), {}, {
              cx: S(u),
              cy: b(u),
              size: O(u)
            });
          }
          var y = H(0, P.size);
          return T(T({}, P), {}, {
            size: y(u)
          });
        });
        return /* @__PURE__ */ N.createElement(z, null, a.renderSymbolsStatically(x));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var a = this.props, o = a.points, s = a.isAnimationActive, l = this.state.prevPoints;
      return s && o && o.length && (!l || !ut(l, o)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(o);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.points, l = o.xAxis, p = o.yAxis, i = o.children, m = Oe(i, dt);
      return m ? m.map(function(c, f) {
        var h = c.props, u = h.direction, x = h.dataKey;
        return /* @__PURE__ */ N.cloneElement(c, {
          key: "".concat(u, "-").concat(x, "-").concat(s[f]),
          data: s,
          xAxis: l,
          yAxis: p,
          layout: u === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(C, w) {
            return {
              x: C.cx,
              y: C.cy,
              value: u === "x" ? +C.node.x : +C.node.y,
              errorVal: Q(C, w)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var a = this.props, o = a.points, s = a.line, l = a.lineType, p = a.lineJointType, i = ae(this.props, !1), m = ae(s, !1), c, f;
      if (l === "joint")
        c = o.map(function(b) {
          return {
            x: b.cx,
            y: b.cy
          };
        });
      else if (l === "fitting") {
        var h = pt(o), u = h.xmin, x = h.xmax, P = h.a, C = h.b, w = function(O) {
          return P * O + C;
        };
        c = [{
          x: u,
          y: w(u)
        }, {
          x,
          y: w(x)
        }];
      }
      var S = T(T(T({}, i), {}, {
        fill: "none",
        stroke: i && i.fill
      }, m), {}, {
        points: c
      });
      return /* @__PURE__ */ N.isValidElement(s) ? f = /* @__PURE__ */ N.cloneElement(s, S) : ft(s) ? f = s(S) : f = /* @__PURE__ */ N.createElement(mt, V({}, S, {
        type: p
      })), /* @__PURE__ */ N.createElement(z, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, f);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, o = a.hide, s = a.points, l = a.line, p = a.className, i = a.xAxis, m = a.yAxis, c = a.left, f = a.top, h = a.width, u = a.height, x = a.id, P = a.isAnimationActive;
      if (o || !s || !s.length)
        return null;
      var C = this.state.isAnimationFinished, w = ht("recharts-scatter", p), S = i && i.allowDataOverflow, b = m && m.allowDataOverflow, O = S || b, y = $(x) ? this.id : x;
      return /* @__PURE__ */ N.createElement(z, {
        className: w,
        clipPath: O ? "url(#clipPath-".concat(y, ")") : null
      }, S || b ? /* @__PURE__ */ N.createElement("defs", null, /* @__PURE__ */ N.createElement("clipPath", {
        id: "clipPath-".concat(y)
      }, /* @__PURE__ */ N.createElement("rect", {
        x: S ? c : c - h / 2,
        y: b ? f : f - u / 2,
        width: S ? h : h * 2,
        height: b ? u : u * 2
      }))) : null, l && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ N.createElement(z, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!P || C) && Ne.renderCallByParent(this.props, s));
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
}(ga);
I(W, "displayName", "Scatter");
I(W, "defaultProps", {
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
I(W, "getComposedData", function(e) {
  var t = e.xAxis, r = e.yAxis, a = e.zAxis, o = e.item, s = e.displayedData, l = e.xAxisTicks, p = e.yAxisTicks, i = e.offset, m = o.props.tooltipType, c = Oe(o.props.children, bt), f = $(t.dataKey) ? o.props.dataKey : t.dataKey, h = $(r.dataKey) ? o.props.dataKey : r.dataKey, u = a && a.dataKey, x = a ? a.range : te.defaultProps.range, P = x && x[0], C = t.scale.bandwidth ? t.scale.bandwidth() : 0, w = r.scale.bandwidth ? r.scale.bandwidth() : 0, S = s.map(function(b, O) {
    var y = Q(b, f), A = Q(b, h), L = !$(u) && Q(b, u) || "-", _ = [{
      name: $(t.dataKey) ? o.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: y,
      payload: b,
      dataKey: f,
      type: m
    }, {
      name: $(r.dataKey) ? o.props.name : r.name || r.dataKey,
      unit: r.unit || "",
      value: A,
      payload: b,
      dataKey: h,
      type: m
    }];
    L !== "-" && _.push({
      name: a.name || a.dataKey,
      unit: a.unit || "",
      value: L,
      payload: b,
      dataKey: u,
      type: m
    });
    var k = ge({
      axis: t,
      ticks: l,
      bandSize: C,
      entry: b,
      index: O,
      dataKey: f
    }), F = ge({
      axis: r,
      ticks: p,
      bandSize: w,
      entry: b,
      index: O,
      dataKey: h
    }), d = L !== "-" ? a.scale(L) : P, v = Math.sqrt(Math.max(d, 0) / Math.PI);
    return T(T({}, b), {}, {
      cx: k,
      cy: F,
      x: k - v,
      y: F - v,
      xAxis: t,
      yAxis: r,
      zAxis: a,
      width: 2 * v,
      height: 2 * v,
      size: d,
      node: {
        x: y,
        y: A,
        z: L
      },
      tooltipPayload: _,
      tooltipPosition: {
        x: k,
        y: F
      },
      payload: b
    }, c && c[O] && c[O].props);
  });
  return T({
    points: S
  }, i);
});
var Ra = yt({
  chartName: "ComposedChart",
  GraphicalChild: [Ae, xt, Le, W],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Te
  }, {
    axisType: "yAxis",
    AxisComp: ne
  }, {
    axisType: "zAxis",
    AxisComp: te
  }],
  formatAxisMap: wt
});
const za = (e) => {
  const t = (r) => {
    const { cx: a, cy: o, fill: s, payload: l } = r, p = () => {
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
        i != null && i.parentElement && i.parentElement.setAttribute("aria-label", `Data point: ${p()}`);
      }
    });
  };
  return t.displayName = `Scatter-${e}`, t;
}, qa = ({ dataConfig: e, data: t, xAxis: r, yAxis: a = {
  hide: !0
}, label: o = !1, hideTooltip: s = !1, hideGrid: l = !1, aspect: p, legend: i, showValueUnderLabel: m = !1, bar: c, line: f, scatter: h, onClick: u }, x) => {
  var L, _, k, F;
  const P = Ct(t), C = c != null && c.categories ? Array.isArray(c.categories) ? c.categories : [c.categories] : [], w = f != null && f.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], S = h != null && h.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], b = [...C, ...w, ...S], O = Math.max(...P.flatMap((d) => b.map((v) => Pt(a != null && a.tickFormatter ? a.tickFormatter(`${d[v]}`) : `${d[v]}`)))), y = [c, f, h].filter((d) => (d == null ? void 0 : d.axisPosition) === "left"), A = [c, f, h].filter((d) => (d == null ? void 0 : d.axisPosition) === "right");
  return n(St, {
    config: e,
    ref: x,
    aspect: p,
    children: g(Ra, {
      accessibilityLayer: !0,
      data: P,
      margin: {
        left: a && !a.hide ? 0 : 12,
        right: 12,
        top: o ? 24 : 0,
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
      children: [!s && n(Ot, {
        ...Nt(),
        content: n(At, {
          yAxisFormatter: a.tickFormatter
        })
      }), !l && n(Lt, {
        ...Tt()
      }), y.length > 0 && n(ne, {
        ...be(a),
        tick: !0,
        width: a.width ?? O + 20 + (A.length > 0 && ((L = y[0]) != null && L.axisLabel) ? 20 : 0),
        hide: a.hide || y.some((d) => d == null ? void 0 : d.hideAxis),
        label: (_ = y[0]) != null && _.axisLabel ? {
          value: y[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), A.length > 0 && n(ne, {
        ...be(a),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: a.width ?? O + 20 + (y.length > 0 && ((k = A[0]) != null && k.axisLabel) ? 20 : 0),
        hide: a.hide || A.some((d) => d == null ? void 0 : d.hideAxis),
        label: (F = A[0]) != null && F.axisLabel ? {
          value: A[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), n(Te, {
        ...kt(r),
        hide: r == null ? void 0 : r.hide,
        tick: m ? (d) => {
          var me, he;
          const { x: v, y: G, payload: pe } = d, fe = ((me = t.find((it) => it.label === pe.value)) == null ? void 0 : me.values) || "", Y = Object.keys(fe).length === 1 ? (he = Object.values(fe)) == null ? void 0 : he[0] : void 0, ot = Y !== void 0 && a.tickFormatter ? a.tickFormatter(`${Y}`) : Y.toLocaleString();
          return g("g", {
            transform: `translate(${v},${G})`,
            children: [n("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: pe.value
            }), !!Y && n("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: ot
            })]
          });
        } : void 0
      }), C.map((d, v) => n(Le, {
        isAnimationActive: !1,
        dataKey: String(d),
        fill: e[d].color ? q(e[d].color) : re(v),
        radius: 4,
        maxBarSize: 32,
        children: o && n(Ne, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(d)}`)
      }, `bar-${String(d)}`)), w.map((d, v) => n(Ae, {
        type: (f == null ? void 0 : f.lineType) ?? "natural",
        dataKey: String(d),
        stroke: e[d].color ? q(e[d].color) : re(C.length + v),
        strokeWidth: 2,
        dot: (f == null ? void 0 : f.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (f == null ? void 0 : f.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(d)}`)), S.map((d, v) => n(W, {
        dataKey: String(d),
        fill: e[d].color ? q(e[d].color) : re(C.length + w.length + v),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (h == null ? void 0 : h.axisPosition) === "right" ? "right" : void 0,
        shape: za(String(d))
      }, `scatter-${String(d)}`)), i && n(Dt, {
        content: n(Ft, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Ka = ke(qa);
var ue = "Progress", de = 100, [Va, gr] = Et(ue), [Wa, Ga] = Va(ue), Ue = ce.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: a = null,
      max: o,
      getValueLabel: s = Ya,
      ...l
    } = e;
    (o || o === 0) && !Ce(o) && console.error(Ha(`${o}`, "Progress"));
    const p = Ce(o) ? o : de;
    a !== null && !Pe(a, p) && console.error(Qa(`${a}`, "Progress"));
    const i = Pe(a, p) ? a : null, m = Z(i) ? s(i, p) : void 0;
    return /* @__PURE__ */ n(Wa, { scope: r, value: i, max: p, children: /* @__PURE__ */ n(
      De.div,
      {
        "aria-valuemax": p,
        "aria-valuemin": 0,
        "aria-valuenow": Z(i) ? i : void 0,
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
Ue.displayName = ue;
var Je = "ProgressIndicator", Xe = ce.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...a } = e, o = Ga(Je, r);
    return /* @__PURE__ */ n(
      De.div,
      {
        "data-state": Ze(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...a,
        ref: t
      }
    );
  }
);
Xe.displayName = Je;
function Ya(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Ze(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Z(e) {
  return typeof e == "number";
}
function Ce(e) {
  return Z(e) && !isNaN(e) && e > 0;
}
function Pe(e, t) {
  return Z(e) && !isNaN(e) && e <= t && e >= 0;
}
function Ha(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${de}\`.`;
}
function Qa(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${de} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var et = Ue, Ua = Xe;
const tt = ce.forwardRef(({ className: e, value: t, ...r }, a) => n(et, {
  ref: a,
  className: j("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: n(Ua, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
tt.displayName = et.displayName;
const Ja = ({ value: e, max: t = 100, label: r, color: a }, o) => {
  const s = a ? q(a) : q("categorical-1"), l = e / t * 100;
  return g("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [n("div", {
      className: "flex-grow",
      children: n(tt, {
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
}, Xa = ke(Ja), br = D(
  {
    name: "AreaChart",
    type: "info"
  },
  Bt
), yr = D(
  {
    name: "BarChart",
    type: "info"
  },
  _t
), xr = D(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  jt
), wr = D(
  {
    name: "LineChart",
    type: "info"
  },
  It
), Cr = D(
  {
    name: "PieChart",
    type: "info"
  },
  $t
), Pr = D(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  Mt
), Sr = D(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Xa
), Or = D(
  {
    name: "ComboChart",
    type: "info"
  },
  Ka
), Nr = Rt, Ar = Fe, Lr = ["default", "outline", "neutral"], Tr = Fe, kr = ["sm", "md", "lg"], Dr = zt, se = ({ count: e, list: t }) => {
  const [r, a] = E(!1), o = n(U, {
    label: `+${e}`
  });
  return t != null && t.length ? g(Ee, {
    open: r,
    onOpenChange: a,
    children: [n(_e, {
      asChild: !0,
      children: n("button", {
        className: qt("inline-flex flex-shrink-0 items-center"),
        children: o
      })
    }), n(je, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: g(Ie, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [t.map((s, l) => n("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n(U, {
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
se.displayName = "ChipCounter";
const at = ({ chips: e, max: t = 4, remainingCount: r, layout: a = "compact" }) => {
  if (a === "fill")
    return n(Vt, {
      items: e,
      renderListItem: (i) => n(U, {
        ...i
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: r !== void 0,
      renderOverflowIndicator: (i) => n(se, {
        count: (r ?? 0) + i,
        list: r ? void 0 : e.slice(e.length - i)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const o = e.slice(0, t), s = e.slice(t), l = r ?? e.length - t, p = l > 0;
  return g("div", {
    className: "flex items-center gap-2",
    children: [o.map((i, m) => n(U, {
      ...i
    }, m)), p && n(se, {
      count: l,
      list: r ? void 0 : s
    })]
  });
};
at.displayName = "F0ChipList";
const Fr = Kt("F0ChipList", at), Er = Wt, Za = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, er = ee(function({ widgets: t, children: r }, a) {
  const o = Ke(null);
  ba(a, () => o.current);
  const s = ya.toArray(t).filter((l) => !!l).map((l, p) => n("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: l
  }, p));
  return n(Me, {
    layout: "home",
    children: g("div", {
      ref: o,
      className: "@container",
      children: [g("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [n(Gt, {
          columns: Za,
          showArrows: !1,
          children: s
        }), n("main", {
          children: r
        })]
      }), g("div", {
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
}), tr = ee(function({ children: t, sideContent: r, mainColumnPosition: a = "left", sticky: o = !1 }, s) {
  return n("div", {
    ref: s,
    className: "h-full",
    children: g("div", {
      className: j("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", o && "md:sticky md:top-0 md:max-h-full"),
      children: [n("main", {
        className: j("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", o ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", a === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: t
      }), n(ar, {
        sticky: o,
        className: j("order-1", a === "right" ? "md:order-1" : "md:order-3"),
        children: r
      })]
    })
  });
}), ar = ({ children: e, className: t }) => n("aside", {
  className: j("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", t),
  children: e
}), rr = Yt({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), rt = N.forwardRef(({ children: e, variant: t, className: r, ...a }, o) => n(Me, {
  layout: "standard",
  children: n("section", {
    ref: o,
    className: j("relative flex-1 overflow-auto", r),
    ...a,
    children: n("div", {
      className: j(rr({
        variant: t
      })),
      children: e
    })
  })
}));
rt.displayName = "StandardLayout";
const _r = D({
  name: "StandardLayout",
  type: "layout"
}, rt), jr = D({
  name: "TwoColumnLayout",
  type: "layout"
}, tr), Ir = D({
  name: "HomeLayout",
  type: "layout"
}, er), nr = ({ benefits: e }) => n("div", {
  className: "flex flex-col gap-2",
  children: e.map((t, r) => n(or, {
    text: t
  }, r))
}), or = ({ text: e }) => g("div", {
  className: "flex flex-row items-start gap-2",
  children: [n(Ut, {
    icon: Jt,
    size: "md",
    className: "text-f1-icon-positive"
  }), n("span", {
    children: e
  })]
}), nt = ee(({ title: e, image: t, benefits: r, actions: a, withShadow: o = !0, module: s, moduleName: l, tag: p, promoTag: i }, m) => g("div", {
  ref: m,
  className: j("bg-white flex flex-row rounded-xl border border-f1-border-secondary", o && "shadow-md"),
  children: [n("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: n("img", {
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
          children: [s && n(Be, {
            module: s
          }), l && n("p", {
            className: "text-base font-medium text-f1-foreground",
            children: l
          })]
        }), (p || i) && g("div", {
          className: "flex justify-start gap-2",
          children: [p && n(Ht, {
            icon: p.icon,
            text: p.label
          }), i && n(Qt, {
            variant: i.variant || "positive",
            text: i.label
          })]
        }), n("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: e
        })]
      }), n(nr, {
        benefits: r
      })]
    }), a && n("div", {
      className: "flex gap-3",
      children: a
    })]
  })]
}));
nt.displayName = "ProductBlankslate";
function ir({ isOpen: e, onClose: t, title: r, children: a, module: o, portalContainer: s }) {
  const [l, p] = E(e);
  return Ve(() => {
    p(e);
  }, [e]), n(Xt, {
    open: l,
    onOpenChange: (m) => {
      p(m), m || t();
    },
    modal: !0,
    children: g(Zt, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: s,
      children: [g("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [g(ea, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [o && n(Be, {
            module: o,
            size: "lg"
          }), r]
        }), n(ta, {
          variant: "outline",
          icon: Re,
          onClick: t,
          label: "Close modal",
          hideLabel: !0
        })]
      }), g(Ie, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [a, n($e, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function $r({ isOpen: e, onClose: t, title: r, image: a, benefits: o, errorMessage: s, successMessage: l, loadingState: p, nextSteps: i, closeLabel: m, primaryAction: c, modalTitle: f, modalModule: h, secondaryAction: u, portalContainer: x, tag: P, promoTag: C, showResponseDialog: w = !0 }) {
  const [S, b] = E(e), [O, y] = E(null), [A, L] = E(!1), _ = async () => {
    if (c != null && c.onClick) {
      L(!0);
      try {
        await c.onClick(), b(!1), w && y("success");
      } catch {
        w && y("error");
      } finally {
        L(!1);
      }
    }
  }, k = () => {
    b(!1), t == null || t();
  }, F = A;
  return g(le, {
    children: [n(ir, {
      isOpen: S,
      onClose: k,
      title: f,
      module: h,
      portalContainer: x,
      children: n("div", {
        className: "pb-4 pl-4",
        children: n(nt, {
          title: r,
          image: a,
          benefits: o,
          withShadow: !1,
          tag: P,
          promoTag: C,
          actions: g("div", {
            className: "flex gap-3",
            children: [c && n(M, {
              variant: c.variant,
              label: F ? p.label : c.label,
              icon: c.icon || void 0,
              onClick: _,
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
    }), O && w && n(ze, {
      open: !0,
      onClose: () => {
        k(), y(null);
      },
      success: O === "success",
      errorMessage: s,
      successMessage: l,
      nextSteps: i,
      closeLabel: m,
      portalContainer: x
    })]
  });
}
function sr({ mediaUrl: e, title: t, description: r, onClose: a, dismissible: o, width: s, trackVisibility: l, actions: p, showConfirmation: i = !0 }) {
  const [m, c] = E(!1), f = () => {
    c(!0), a && a();
  };
  Ve(() => {
    l && l(!m);
  }, [l, m]);
  const h = e == null ? void 0 : e.includes(".mp4");
  return n(le, {
    children: m ? null : g(aa, {
      style: {
        width: s
      },
      className: "relative bg-f1-background p-1",
      children: [g(ra, {
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
        }), g("div", {
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
          }), g("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [n(ye, {
              className: "text-lg font-medium",
              children: t
            }), n(ye, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: r
            })]
          })]
        })]
      }), p && n(na, {
        className: "p-3",
        children: p.map((u) => u.type === "upsell" ? n(qe, {
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
const lr = ee(function({ primaryAction: t, secondaryAction: r, ...a }, o) {
  const s = (i) => i.variant === "promote" ? n(qe, {
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
  }), l = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0, p = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
  return g(oa, {
    ref: o,
    ...a,
    primaryAction: l,
    secondaryAction: p,
    children: [(t == null ? void 0 : t.variant) === "promote" && s(t), (r == null ? void 0 : r.variant) === "promote" && s(r)]
  });
});
lr.displayName = "UpsellingBanner";
function Mr({ isOpen: e, setIsOpen: t, label: r, variant: a = "promote", size: o = "md", showIcon: s = !0, side: l = "right", align: p = "center", icon: i = ia, mediaUrl: m, title: c, description: f, width: h = "300px", trackVisibility: u, actions: x, onClick: P, hideLabel: C = !1 }) {
  const [w, S] = E(!1), [b, O] = E(null), [y, A] = E(null), L = (v) => {
    t(v), P && P();
  }, _ = async (v) => {
    if (v.type === "upsell") {
      A(v);
      try {
        await v.onClick(), v.showConfirmation && (S(!0), O("success"));
      } catch {
        S(!0), O("error");
      }
    }
  }, k = () => {
    O(null), S(!1), A(null), t(!1);
  }, F = e && !w, d = x == null ? void 0 : x.map((v) => v.type === "upsell" ? {
    ...v,
    onClick: () => _(v)
  } : v);
  return g(le, {
    children: [g(Ee, {
      open: F,
      onOpenChange: L,
      children: [n(_e, {
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
        align: p,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: n(sr, {
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
    }), (y == null ? void 0 : y.type) === "upsell" && y.showConfirmation && b && n(ze, {
      open: !0,
      onClose: k,
      success: b === "success",
      errorMessage: y.errorMessage,
      successMessage: y.successMessage,
      nextSteps: y.nextSteps,
      closeLabel: y.closeLabel,
      portalContainer: null
    })]
  });
}
const cr = xa(null), ur = ({ children: e, fullScreen: t = !0 }) => {
  const r = Ke(null), [a, o] = E(r.current);
  return va(() => {
    o(r.current);
  }, []), n(cr.Provider, {
    value: {
      element: a
    },
    children: n("div", {
      ref: r,
      id: "f0-layout",
      className: j({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": t
      }),
      children: e
    })
  });
}, dr = ({ children: e }) => n(ha, {
  reducedMotion: "user",
  children: e
}), Br = ({ children: e, layout: t, link: r, privacyModeInitiallyEnabled: a, image: o, i18n: s, l10n: l, isDev: p = !1, dataCollectionStorageHandler: i, showExperimentalWarnings: m = !1 }) => n(dr, {
  children: n(sa, {
    isDev: p,
    showExperimentalWarnings: m,
    children: n(la, {
      ...l,
      children: n(ca, {
        ...s,
        children: n(ua, {
          ...r,
          children: n(ur, {
            ...t,
            children: n(da, {
              children: n(pa, {
                initiallyEnabled: a,
                children: n(fa, {
                  ...o,
                  children: n(ma, {
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
}), Se = (e) => `datacollection-${e}`, Rr = {
  get: async (e) => JSON.parse(
    localStorage.getItem(Se(e)) ?? "{}"
  ),
  set: async (e, t) => {
    localStorage.setItem(Se(e), JSON.stringify(t));
  }
};
export {
  br as AreaChart,
  Kr as Await,
  yr as BarChart,
  xr as CategoryBarChart,
  Or as ComboChart,
  Vr as DndProvider,
  Wr as EmojiImage,
  Gr as F0Avatar,
  Yr as F0AvatarAlert,
  Hr as F0AvatarCompany,
  Qr as F0AvatarDate,
  Ur as F0AvatarEmoji,
  Jr as F0AvatarFile,
  Xr as F0AvatarIcon,
  Zr as F0AvatarList,
  Be as F0AvatarModule,
  en as F0AvatarPerson,
  tn as F0AvatarTeam,
  M as F0Button,
  an as F0ButtonDropdown,
  rn as F0ButtonToggle,
  nn as F0Card,
  on as F0Checkbox,
  Fr as F0ChipList,
  sn as F0DatePicker,
  ln as F0EventCatcherProvider,
  Ut as F0Icon,
  cn as F0Link,
  Br as F0Provider,
  un as F0TagAlert,
  dn as F0TagBalance,
  pn as F0TagCompany,
  fn as F0TagDot,
  mn as F0TagList,
  hn as F0TagPerson,
  Ht as F0TagRaw,
  Qt as F0TagStatus,
  vn as F0TagTeam,
  gn as GROUP_ID_SYMBOL,
  Ir as HomeLayout,
  wr as LineChart,
  bn as OneFilterPicker,
  Cr as PieChart,
  pa as PrivacyModeProvider,
  nt as ProductBlankslate,
  yn as ProductCard,
  $r as ProductModal,
  sr as ProductWidget,
  Sr as ProgressBarChart,
  _r as StandardLayout,
  xn as TagCounter,
  jr as TwoColumnLayout,
  ze as UpsellRequestResponseDialog,
  lr as UpsellingBanner,
  qe as UpsellingButton,
  Mr as UpsellingPopover,
  Pr as VerticalBarChart,
  vr as avatarVariants,
  wn as buildTranslations,
  Tr as buttonDropdownSizes,
  Lr as buttonDropdownVariants,
  Ar as buttonSizes,
  kr as buttonToggleSizes,
  Nr as buttonVariants,
  Cn as createAtlaskitDriver,
  Pn as createDataSourceDefinition,
  Rr as dataCollectionLocalStorageHandler,
  Er as datepickerSizes,
  hr as defaultTranslations,
  Kt as experimental,
  Sn as getAnimationVariants,
  On as getDataSourcePaginationType,
  Nn as getEmojiLabel,
  An as isInfiniteScrollPagination,
  Ln as isPageBasedPagination,
  Dr as linkVariants,
  Tn as modules,
  kn as predefinedPresets,
  Dn as tagDotColors,
  Fn as useData,
  En as useDataSource,
  _n as useDndEvents,
  jn as useDraggable,
  In as useDroppableList,
  $n as useEmojiConfetti,
  Mn as useGroups,
  Bn as usePrivacyMode,
  Rn as useReducedMotion,
  zn as useSelectable,
  qn as useXRay
};
