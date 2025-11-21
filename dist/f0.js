import { S as $e, a as qt, f as Re, L as Q, b as Kt, A as Vt, i as de, c as it, d as st, E as Yt, g as ue, e as Xt, h as Jt, C as Zt, j as Qt, k as V, l as rt, u as ei, G as ti, m as ii, n as je, o as si, p as nt, q as ri, B as ot, X as at, Y as Se, r as ni, s as lt, t as oi, v as ai, w as li, x as hi, y as di, z as ci, D as ui, F as fi, H as Ue, I as gi, J as ee, K as Ne, M as pi, N as mi, O as yi, P as ht, Q as j, R as I, T as vi, U as bi, V as wi, W as _i, Z as xi, _ as Ei, $ as Ci, a0 as dt, a1 as Ri, a2 as fe, a3 as ct, a4 as ut, a5 as Ni, a6 as ft, a7 as gt, a8 as pt, a9 as Ae, aa as Di, ab as mt, ac as Si, ad as zi, ae as ki, af as qe, ag as De, ah as Pi, ai as Ai, aj as yt, ak as Oi, al as Ti, am as vt, an as Li, ao as Mi, ap as Hi, aq as Bi, ar as Ii, as as Fi, at as Gi, au as Wi, av as bt, aw as X, ax as wt, ay as $i, az as ji, aA as Ke, aB as Ui, aC as _t, aD as qi, aE as Ki, aF as Vi, aG as Yi, aH as Xi, aI as Ji, aJ as Zi, aK as Qi, aL as es, aM as ts, aN as is, aO as ss } from "./hooks-DM4XUbec.js";
import { be as $r, br as jr, bA as Ur, aP as qr, aQ as Kr, aR as Vr, aS as Yr, aT as Xr, aU as Jr, aV as Zr, aW as Qr, aY as en, aZ as tn, a_ as sn, a$ as rn, b0 as nn, b1 as on, bw as an, b3 as ln, b5 as hn, b6 as dn, b7 as cn, b8 as un, bb as fn, bc as gn, bd as pn, bg as mn, b4 as yn, bf as vn, ba as bn, bx as wn, bq as _n, bl as xn, bo as En, bk as Cn, bB as Rn, bj as Nn, bi as Dn, aX as Sn, b2 as zn, b9 as kn, bh as Pn, bm as An, bs as On, bt as Tn, bu as Ln, bC as Mn, bn as Hn, bv as Bn, bz as In, bp as Fn, by as Gn } from "./hooks-DM4XUbec.js";
import { jsx as g, jsxs as z, Fragment as oe } from "react/jsx-runtime";
import * as Oe from "react";
import P, { PureComponent as rs, useState as A, forwardRef as K, useEffect as q, useMemo as te, useCallback as W, useRef as Y, useImperativeHandle as xt, Children as ns, createContext as xe, useContext as Et, useLayoutEffect as Ve } from "react";
import { createPortal as os } from "react-dom";
import './f0.css';const as = {
  ad: "Andorra",
  ae: "United Arab Emirates",
  af: "Afghanistan",
  ag: "Antigua and Barbuda",
  ai: "Anguilla",
  al: "Albania",
  am: "Armenia",
  ao: "Angola",
  ar: "Argentina",
  as: "American Samoa",
  at: "Austria",
  au: "Australia",
  aw: "Aruba",
  ax: "Åland Islands",
  az: "Azerbaijan",
  ba: "Bosnia and Herzegovina",
  bb: "Barbados",
  bd: "Bangladesh",
  be: "Belgium",
  bf: "Burkina Faso",
  bg: "Bulgaria",
  bh: "Bahrain",
  bi: "Burundi",
  bj: "Benin",
  bm: "Bermuda",
  bo: "Bolivia",
  br: "Brazil",
  bt: "Bhutan",
  bw: "Botswana",
  by: "Belarus",
  bz: "Belize",
  ca: "Canada",
  cd: "Democratic Republic of the Congo",
  cf: "Central African Republic",
  cg: "Republic of the Congo",
  ch: "Switzerland",
  ci: "Côte d'Ivoire",
  ck: "Cook Islands",
  cl: "Chile",
  cm: "Cameroon",
  cn: "China",
  co: "Colombia",
  cr: "Costa Rica",
  cu: "Cuba",
  cv: "Cape Verde",
  cw: "Curaçao",
  cy: "Cyprus",
  cz: "Czech Republic",
  de: "Germany",
  dj: "Djibouti",
  dk: "Denmark",
  dm: "Dominica",
  do: "Dominican Republic",
  dz: "Algeria",
  ec: "Ecuador",
  ee: "Estonia",
  eg: "Egypt",
  er: "Eritrea",
  es: "Spain",
  et: "Ethiopia",
  fi: "Finland",
  fj: "Fiji",
  fk: "Falkland Islands",
  fm: "Micronesia",
  fo: "Faroe Islands",
  fr: "France",
  ga: "Gabon",
  gb: "United Kingdom",
  gd: "Grenada",
  ge: "Georgia",
  gg: "Guernsey",
  gh: "Ghana",
  gi: "Gibraltar",
  gl: "Greenland",
  gm: "Gambia",
  gn: "Guinea",
  gq: "Equatorial Guinea",
  gr: "Greece",
  gt: "Guatemala",
  gu: "Guam",
  gw: "Guinea-Bissau",
  hk: "Hong Kong",
  hn: "Honduras",
  hr: "Croatia",
  ht: "Haiti",
  hu: "Hungary",
  id: "Indonesia",
  ie: "Ireland",
  il: "Israel",
  im: "Isle of Man",
  in: "India",
  io: "British Indian Ocean Territory",
  iq: "Iraq",
  ir: "Iran",
  is: "Iceland",
  it: "Italy",
  je: "Jersey",
  jm: "Jamaica",
  jo: "Jordan",
  jp: "Japan",
  ke: "Kenya"
}, fr = {
  countries: as,
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
    },
    selectAll: "Select all",
    clear: "Clear"
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
    table: {
      settings: {
        showAllColumns: "Show all",
        hideAllColumns: "Hide all"
      }
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
}, gr = [
  "person",
  "team",
  "company",
  "file",
  "flag"
];
function J(a) {
  "@babel/helpers - typeof";
  return J = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, J(a);
}
function ls(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function hs(a, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, Nt(i.key), i);
  }
}
function ds(a, e, t) {
  return e && hs(a.prototype, e), Object.defineProperty(a, "prototype", { writable: !1 }), a;
}
function cs(a, e, t) {
  return e = ge(e), us(a, Ct() ? Reflect.construct(e, t || [], ge(a).constructor) : e.apply(a, t));
}
function us(a, e) {
  if (e && (J(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fs(a);
}
function fs(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Ct() {
  try {
    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ct = function() {
    return !!a;
  })();
}
function ge(a) {
  return ge = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ge(a);
}
function gs(a, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), e && ze(a, e);
}
function ze(a, e) {
  return ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, ze(a, e);
}
function Rt(a, e, t) {
  return e = Nt(e), e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : a[e] = t, a;
}
function Nt(a) {
  var e = ps(a, "string");
  return J(e) == "symbol" ? e : e + "";
}
function ps(a, e) {
  if (J(a) != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(a, e);
    if (J(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
var Ee = /* @__PURE__ */ function(a) {
  function e() {
    return ls(this, e), cs(this, e, arguments);
  }
  return gs(e, a), ds(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
}(P.Component);
Rt(Ee, "displayName", "ZAxis");
Rt(Ee, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var ms = ["option", "isActive"];
function ie() {
  return ie = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
  }, ie.apply(this, arguments);
}
function ys(a, e) {
  if (a == null) return {};
  var t = vs(a, e), i, s;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    for (s = 0; s < r.length; s++)
      i = r[s], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(a, i) && (t[i] = a[i]);
  }
  return t;
}
function vs(a, e) {
  if (a == null) return {};
  var t = {};
  for (var i in a)
    if (Object.prototype.hasOwnProperty.call(a, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = a[i];
    }
  return t;
}
function bs(a) {
  var e = a.option, t = a.isActive, i = ys(a, ms);
  return typeof e == "string" ? /* @__PURE__ */ P.createElement($e, ie({
    option: /* @__PURE__ */ P.createElement(qt, ie({
      type: e
    }, i)),
    isActive: t,
    shapeType: "symbols"
  }, i)) : /* @__PURE__ */ P.createElement($e, ie({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, i));
}
function Z(a) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Z(a);
}
function se() {
  return se = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
  }, se.apply(this, arguments);
}
function Ye(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(a, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function H(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ye(Object(t), !0).forEach(function(i) {
      U(a, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Ye(Object(t)).forEach(function(i) {
      Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return a;
}
function ws(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xe(a, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, St(i.key), i);
  }
}
function _s(a, e, t) {
  return e && Xe(a.prototype, e), t && Xe(a, t), Object.defineProperty(a, "prototype", { writable: !1 }), a;
}
function xs(a, e, t) {
  return e = pe(e), Es(a, Dt() ? Reflect.construct(e, t || [], pe(a).constructor) : e.apply(a, t));
}
function Es(a, e) {
  if (e && (Z(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Cs(a);
}
function Cs(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function Dt() {
  try {
    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Dt = function() {
    return !!a;
  })();
}
function pe(a) {
  return pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, pe(a);
}
function Rs(a, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  a.prototype = Object.create(e && e.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), Object.defineProperty(a, "prototype", { writable: !1 }), e && ke(a, e);
}
function ke(a, e) {
  return ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, s) {
    return i.__proto__ = s, i;
  }, ke(a, e);
}
function U(a, e, t) {
  return e = St(e), e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : a[e] = t, a;
}
function St(a) {
  var e = Ns(a, "string");
  return Z(e) == "symbol" ? e : e + "";
}
function Ns(a, e) {
  if (Z(a) != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(a, e);
    if (Z(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
var ae = /* @__PURE__ */ function(a) {
  function e() {
    var t;
    ws(this, e);
    for (var i = arguments.length, s = new Array(i), r = 0; r < i; r++)
      s[r] = arguments[r];
    return t = xs(this, e, [].concat(s)), U(t, "state", {
      isAnimationFinished: !1
    }), U(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), U(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), U(t, "id", ei("recharts-scatter-")), t;
  }
  return Rs(e, a), _s(e, [{
    key: "renderSymbolsStatically",
    value: function(i) {
      var s = this, r = this.props, n = r.shape, o = r.activeShape, h = r.activeIndex, c = Re(this.props, !1);
      return i.map(function(l, d) {
        var f = h === d, p = f ? o : n, m = H(H({}, c), l);
        return /* @__PURE__ */ P.createElement(Q, se({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(l == null ? void 0 : l.cx, "-").concat(l == null ? void 0 : l.cy, "-").concat(l == null ? void 0 : l.size, "-").concat(d)
        }, Kt(s.props, l, d), {
          role: "img"
        }), /* @__PURE__ */ P.createElement(bs, se({
          option: p,
          isActive: f,
          key: "symbol-".concat(d)
        }, m)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var i = this, s = this.props, r = s.points, n = s.isAnimationActive, o = s.animationBegin, h = s.animationDuration, c = s.animationEasing, l = s.animationId, d = this.state.prevPoints;
      return /* @__PURE__ */ P.createElement(Vt, {
        begin: o,
        duration: h,
        isActive: n,
        easing: c,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(f) {
        var p = f.t, m = r.map(function(y, b) {
          var N = d && d[b];
          if (N) {
            var x = de(N.cx, y.cx), C = de(N.cy, y.cy), D = de(N.size, y.size);
            return H(H({}, y), {}, {
              cx: x(p),
              cy: C(p),
              size: D(p)
            });
          }
          var S = de(0, y.size);
          return H(H({}, y), {}, {
            size: S(p)
          });
        });
        return /* @__PURE__ */ P.createElement(Q, null, i.renderSymbolsStatically(m));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var i = this.props, s = i.points, r = i.isAnimationActive, n = this.state.prevPoints;
      return r && s && s.length && (!n || !it(n, s)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(s);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var s = this.props, r = s.points, n = s.xAxis, o = s.yAxis, h = s.children, c = st(h, Yt);
      return c ? c.map(function(l, d) {
        var f = l.props, p = f.direction, m = f.dataKey;
        return /* @__PURE__ */ P.cloneElement(l, {
          key: "".concat(p, "-").concat(m, "-").concat(r[d]),
          data: r,
          xAxis: n,
          yAxis: o,
          layout: p === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(b, N) {
            return {
              x: b.cx,
              y: b.cy,
              value: p === "x" ? +b.node.x : +b.node.y,
              errorVal: ue(b, N)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var i = this.props, s = i.points, r = i.line, n = i.lineType, o = i.lineJointType, h = Re(this.props, !1), c = Re(r, !1), l, d;
      if (n === "joint")
        l = s.map(function(C) {
          return {
            x: C.cx,
            y: C.cy
          };
        });
      else if (n === "fitting") {
        var f = Xt(s), p = f.xmin, m = f.xmax, y = f.a, b = f.b, N = function(D) {
          return y * D + b;
        };
        l = [{
          x: p,
          y: N(p)
        }, {
          x: m,
          y: N(m)
        }];
      }
      var x = H(H(H({}, h), {}, {
        fill: "none",
        stroke: h && h.fill
      }, c), {}, {
        points: l
      });
      return /* @__PURE__ */ P.isValidElement(r) ? d = /* @__PURE__ */ P.cloneElement(r, x) : Jt(r) ? d = r(x) : d = /* @__PURE__ */ P.createElement(Zt, se({}, x, {
        type: o
      })), /* @__PURE__ */ P.createElement(Q, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, d);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, s = i.hide, r = i.points, n = i.line, o = i.className, h = i.xAxis, c = i.yAxis, l = i.left, d = i.top, f = i.width, p = i.height, m = i.id, y = i.isAnimationActive;
      if (s || !r || !r.length)
        return null;
      var b = this.state.isAnimationFinished, N = Qt("recharts-scatter", o), x = h && h.allowDataOverflow, C = c && c.allowDataOverflow, D = x || C, S = V(m) ? this.id : m;
      return /* @__PURE__ */ P.createElement(Q, {
        className: N,
        clipPath: D ? "url(#clipPath-".concat(S, ")") : null
      }, x || C ? /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
        id: "clipPath-".concat(S)
      }, /* @__PURE__ */ P.createElement("rect", {
        x: x ? l : l - f / 2,
        y: C ? d : d - p / 2,
        width: x ? f : f * 2,
        height: C ? p : p * 2
      }))) : null, n && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ P.createElement(Q, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!y || b) && rt.renderCallByParent(this.props, r));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, s) {
      return i.animationId !== s.prevAnimationId ? {
        prevAnimationId: i.animationId,
        curPoints: i.points,
        prevPoints: s.curPoints
      } : i.points !== s.curPoints ? {
        curPoints: i.points
      } : null;
    }
  }]);
}(rs);
U(ae, "displayName", "Scatter");
U(ae, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !ti.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
U(ae, "getComposedData", function(a) {
  var e = a.xAxis, t = a.yAxis, i = a.zAxis, s = a.item, r = a.displayedData, n = a.xAxisTicks, o = a.yAxisTicks, h = a.offset, c = s.props.tooltipType, l = st(s.props.children, ii), d = V(e.dataKey) ? s.props.dataKey : e.dataKey, f = V(t.dataKey) ? s.props.dataKey : t.dataKey, p = i && i.dataKey, m = i ? i.range : Ee.defaultProps.range, y = m && m[0], b = e.scale.bandwidth ? e.scale.bandwidth() : 0, N = t.scale.bandwidth ? t.scale.bandwidth() : 0, x = r.map(function(C, D) {
    var S = ue(C, d), R = ue(C, f), E = !V(p) && ue(C, p) || "-", O = [{
      name: V(e.dataKey) ? s.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: S,
      payload: C,
      dataKey: d,
      type: c
    }, {
      name: V(t.dataKey) ? s.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: R,
      payload: C,
      dataKey: f,
      type: c
    }];
    E !== "-" && O.push({
      name: i.name || i.dataKey,
      unit: i.unit || "",
      value: E,
      payload: C,
      dataKey: p,
      type: c
    });
    var L = je({
      axis: e,
      ticks: n,
      bandSize: b,
      entry: C,
      index: D,
      dataKey: d
    }), F = je({
      axis: t,
      ticks: o,
      bandSize: N,
      entry: C,
      index: D,
      dataKey: f
    }), _ = E !== "-" ? i.scale(E) : y, k = Math.sqrt(Math.max(_, 0) / Math.PI);
    return H(H({}, C), {}, {
      cx: L,
      cy: F,
      x: L - k,
      y: F - k,
      xAxis: e,
      yAxis: t,
      zAxis: i,
      width: 2 * k,
      height: 2 * k,
      size: _,
      node: {
        x: S,
        y: R,
        z: E
      },
      tooltipPayload: O,
      tooltipPosition: {
        x: L,
        y: F
      },
      payload: C
    }, l && l[D] && l[D].props);
  });
  return H({
    points: x
  }, h);
});
var Ds = si({
  chartName: "ComposedChart",
  GraphicalChild: [nt, ri, ot, ae],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: at
  }, {
    axisType: "yAxis",
    AxisComp: Se
  }, {
    axisType: "zAxis",
    AxisComp: Ee
  }],
  formatAxisMap: ni
});
const Ss = (a) => {
  const e = (t) => {
    const { cx: i, cy: s, fill: r, payload: n } = t, o = () => {
      if (!n) return "-";
      if (n[a] !== void 0)
        return n[a];
      for (const [h, c] of Object.entries(n))
        if (typeof c == "number" && h !== "x")
          return c;
      return "-";
    };
    return g("circle", {
      cx: i,
      cy: s,
      r: 4,
      fill: r,
      stroke: "white",
      strokeWidth: 2,
      ref: (h) => {
        h != null && h.parentElement && h.parentElement.setAttribute("aria-label", `Data point: ${o()}`);
      }
    });
  };
  return e.displayName = `Scatter-${a}`, e;
}, zs = ({ dataConfig: a, data: e, xAxis: t, yAxis: i = {
  hide: !0
}, label: s = !1, hideTooltip: r = !1, hideGrid: n = !1, aspect: o, legend: h, showValueUnderLabel: c = !1, bar: l, line: d, scatter: f, onClick: p }, m) => {
  var E, O, L, F;
  const y = oi(e), b = l != null && l.categories ? Array.isArray(l.categories) ? l.categories : [l.categories] : [], N = d != null && d.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], x = f != null && f.categories ? Array.isArray(f.categories) ? f.categories : [f.categories] : [], C = [...b, ...N, ...x], D = Math.max(...y.flatMap((_) => C.map((k) => ai(i != null && i.tickFormatter ? i.tickFormatter(`${_[k]}`) : `${_[k]}`)))), S = [l, d, f].filter((_) => (_ == null ? void 0 : _.axisPosition) === "left"), R = [l, d, f].filter((_) => (_ == null ? void 0 : _.axisPosition) === "right");
  return g(li, {
    config: a,
    ref: m,
    aspect: o,
    children: z(Ds, {
      accessibilityLayer: !0,
      data: y,
      margin: {
        left: i && !i.hide ? 0 : 12,
        right: 12,
        top: s ? 24 : 0,
        bottom: c ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (_) => {
        if (!p || !_.activeLabel || !_.activePayload)
          return;
        const k = {
          label: _.activeLabel,
          values: {}
        };
        for (const le of _.activePayload)
          k.values[le.name] = le.value;
        p(k);
      },
      children: [!r && g(hi, {
        ...di(),
        content: g(ci, {
          yAxisFormatter: i.tickFormatter
        })
      }), !n && g(ui, {
        ...fi()
      }), S.length > 0 && g(Se, {
        ...Ue(i),
        tick: !0,
        width: i.width ?? D + 20 + (R.length > 0 && ((E = S[0]) != null && E.axisLabel) ? 20 : 0),
        hide: i.hide || S.some((_) => _ == null ? void 0 : _.hideAxis),
        label: (O = S[0]) != null && O.axisLabel ? {
          value: S[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), R.length > 0 && g(Se, {
        ...Ue(i),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: i.width ?? D + 20 + (S.length > 0 && ((L = R[0]) != null && L.axisLabel) ? 20 : 0),
        hide: i.hide || R.some((_) => _ == null ? void 0 : _.hideAxis),
        label: (F = R[0]) != null && F.axisLabel ? {
          value: R[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), g(at, {
        ...gi(t),
        hide: t == null ? void 0 : t.hide,
        tick: c ? (_) => {
          var Ge, We;
          const { x: k, y: le, payload: Ie } = _, Fe = ((Ge = e.find((Ut) => Ut.label === Ie.value)) == null ? void 0 : Ge.values) || "", he = Object.keys(Fe).length === 1 ? (We = Object.values(Fe)) == null ? void 0 : We[0] : void 0, jt = he !== void 0 && i.tickFormatter ? i.tickFormatter(`${he}`) : he.toLocaleString();
          return z("g", {
            transform: `translate(${k},${le})`,
            children: [g("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: Ie.value
            }), !!he && g("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: jt
            })]
          });
        } : void 0
      }), b.map((_, k) => g(ot, {
        isAnimationActive: !1,
        dataKey: String(_),
        fill: a[_].color ? ee(a[_].color) : Ne(k),
        radius: 4,
        maxBarSize: 32,
        children: s && g(rt, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(_)}`)
      }, `bar-${String(_)}`)), N.map((_, k) => g(nt, {
        type: (d == null ? void 0 : d.lineType) ?? "natural",
        dataKey: String(_),
        stroke: a[_].color ? ee(a[_].color) : Ne(b.length + k),
        strokeWidth: 2,
        dot: (d == null ? void 0 : d.dot) ?? !1,
        isAnimationActive: !1,
        yAxisId: (d == null ? void 0 : d.axisPosition) === "right" ? "right" : void 0
      }, `line-${String(_)}`)), x.map((_, k) => g(ae, {
        dataKey: String(_),
        fill: a[_].color ? ee(a[_].color) : Ne(b.length + N.length + k),
        r: 4,
        isAnimationActive: !1,
        yAxisId: (f == null ? void 0 : f.axisPosition) === "right" ? "right" : void 0,
        shape: Ss(String(_))
      }, `scatter-${String(_)}`)), h && g(pi, {
        content: g(mi, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, ks = lt(zs);
var Te = "Progress", Le = 100, [Ps, pr] = yi(Te), [As, Os] = Ps(Te), zt = Oe.forwardRef(
  (a, e) => {
    const {
      __scopeProgress: t,
      value: i = null,
      max: s,
      getValueLabel: r = Ts,
      ...n
    } = a;
    (s || s === 0) && !Je(s) && console.error(Ls(`${s}`, "Progress"));
    const o = Je(s) ? s : Le;
    i !== null && !Ze(i, o) && console.error(Ms(`${i}`, "Progress"));
    const h = Ze(i, o) ? i : null, c = me(h) ? r(h, o) : void 0;
    return /* @__PURE__ */ g(As, { scope: t, value: h, max: o, children: /* @__PURE__ */ g(
      ht.div,
      {
        "aria-valuemax": o,
        "aria-valuemin": 0,
        "aria-valuenow": me(h) ? h : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": At(h, o),
        "data-value": h ?? void 0,
        "data-max": o,
        ...n,
        ref: e
      }
    ) });
  }
);
zt.displayName = Te;
var kt = "ProgressIndicator", Pt = Oe.forwardRef(
  (a, e) => {
    const { __scopeProgress: t, ...i } = a, s = Os(kt, t);
    return /* @__PURE__ */ g(
      ht.div,
      {
        "data-state": At(s.value, s.max),
        "data-value": s.value ?? void 0,
        "data-max": s.max,
        ...i,
        ref: e
      }
    );
  }
);
Pt.displayName = kt;
function Ts(a, e) {
  return `${Math.round(a / e * 100)}%`;
}
function At(a, e) {
  return a == null ? "indeterminate" : a === e ? "complete" : "loading";
}
function me(a) {
  return typeof a == "number";
}
function Je(a) {
  return me(a) && !isNaN(a) && a > 0;
}
function Ze(a, e) {
  return me(a) && !isNaN(a) && a <= e && a >= 0;
}
function Ls(a, e) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Le}\`.`;
}
function Ms(a, e) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Le} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Ot = zt, Hs = Pt;
const Tt = Oe.forwardRef(({ className: a, value: e, ...t }, i) => g(Ot, {
  ref: i,
  className: j("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", a),
  ...t,
  children: g(Hs, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: t.color,
      transform: `translateX(-${100 - (e || 0)}%)`
    }
  })
}));
Tt.displayName = Ot.displayName;
const Bs = ({ value: a, max: e = 100, label: t, color: i }, s) => {
  const r = i ? ee(i) : ee("categorical-1"), n = a / e * 100;
  return z("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [g("div", {
      className: "flex-grow",
      children: g(Tt, {
        color: r,
        value: n,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": a,
        "aria-label": `${n.toFixed(1)}%`
      })
    }), t && g("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, Is = lt(Bs), mr = I(
  {
    name: "AreaChart",
    type: "info"
  },
  Ei
), yr = I(
  {
    name: "BarChart",
    type: "info"
  },
  vi
), vr = I(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  bi
), br = I(
  {
    name: "LineChart",
    type: "info"
  },
  wi
), wr = I(
  {
    name: "PieChart",
    type: "info"
  },
  _i
), _r = I(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  xi
), xr = I(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Is
), Er = I(
  {
    name: "ComboChart",
    type: "info"
  },
  ks
), Cr = Ci, Rr = dt, Nr = ["default", "outline", "neutral"], Dr = dt, Sr = ["sm", "md", "lg"], zr = Ri, Pe = ({ count: a, list: e }) => {
  const [t, i] = A(!1), s = g(fe, {
    label: `+${a}`
  });
  return e != null && e.length ? z(ct, {
    open: t,
    onOpenChange: i,
    children: [g(ut, {
      asChild: !0,
      children: g("button", {
        className: Ni("inline-flex flex-shrink-0 items-center"),
        children: s
      })
    }), g(ft, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: z(gt, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((r, n) => g("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: g(fe, {
            ...r
          })
        }, n)), g(pt, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : s;
};
Pe.displayName = "ChipCounter";
const Lt = ({ chips: a, max: e = 4, remainingCount: t, layout: i = "compact" }) => {
  if (i === "fill")
    return g(Di, {
      items: a,
      renderListItem: (h) => g(fe, {
        ...h
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (h) => g(Pe, {
        count: (t ?? 0) + h,
        list: t ? void 0 : a.slice(a.length - h)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const s = a.slice(0, e), r = a.slice(e), n = t ?? a.length - e, o = n > 0;
  return z("div", {
    className: "flex items-center gap-2",
    children: [s.map((h, c) => g(fe, {
      ...h
    }, c)), o && g(Pe, {
      count: n,
      list: t ? void 0 : r
    })]
  });
};
Lt.displayName = "F0ChipList";
const kr = Ae("F0ChipList", Lt), Mt = K(({ value: a, onDateChange: e, granularity: t, onOpenChange: i, minDate: s, maxDate: r, onClear: n, ...o }, h) => {
  const [c, l] = A(""), [d, f] = A(!1), p = mt();
  q(() => {
    l(t.toString(a == null ? void 0 : a.value, p));
  }, [a, t, p]);
  const m = (x) => ki(x, t, {
    minDate: s,
    maxDate: r
  }), y = (x, C) => {
    if (x === "") {
      e == null || e({
        value: void 0,
        granularity: C.key
      }), f(o.required ?? !1);
      return;
    }
    const D = C.toRange(C.fromString(x, p));
    D && m(D == null ? void 0 : D.from) && m(D == null ? void 0 : D.to) ? (e == null || e({
      value: D,
      granularity: C.key
    }), f(!1)) : f(!0);
  }, b = () => {
    y(c, t);
  };
  return g(oe, {
    children: g(Si, {
      ...o,
      icon: zi,
      ref: h,
      onFocus: () => i == null ? void 0 : i(!0),
      onClear: () => {
        n == null || n(), l(""), y("", t);
      },
      onKeyDown: (x) => {
        x.key === "Enter" && b();
      },
      type: "text",
      onChange: (x) => {
        l(x);
      },
      error: d || o.error,
      onBlur: b,
      value: c,
      onClickContent: () => i == null ? void 0 : i(!0)
    })
  });
});
Mt.displayName = "DateInput";
function Fs({ onChange: a, value: e, presets: t = [], granularities: i = ["day"], minDate: s, maxDate: r, open: n = !1, ...o }) {
  const [h, c] = A(), [l, d] = A(n);
  q(() => {
    d(n);
  }, [n]);
  const f = mt(), p = te(() => i[0] ?? "day", [i]), m = W((R) => {
    const E = R || p;
    if (!qe[E])
      throw new Error(`Invalid granularity ${E}`);
    return {
      ...qe[E],
      key: E
    };
  }, [p]), y = W((R) => {
    var O;
    if (!R)
      return;
    const E = m(R == null ? void 0 : R.granularity);
    return R ? {
      value: E.toRange(E.calendarMode === "range" ? R.value : ((O = R.value) == null ? void 0 : O.from) ?? void 0),
      granularity: R.granularity
    } : void 0;
  }, [m]), b = te(() => m(h == null ? void 0 : h.granularity), [h == null ? void 0 : h.granularity, m]);
  q(() => {
    const R = y(e);
    De(h, R) || c(R);
  }, [e]);
  const N = (R) => {
    const E = y(R), L = m(E == null ? void 0 : E.granularity).calendarMode !== "range" && (E == null ? void 0 : E.granularity) === (h == null ? void 0 : h.granularity) && !De(E, h);
    x(E), L && d(!1);
  }, x = (R) => {
    const E = y(R);
    if (c(E), !De(E, h)) {
      const O = m(E == null ? void 0 : E.granularity);
      a == null || a(E, O.toString(E == null ? void 0 : E.value, f));
    }
  }, C = (R) => {
    var E;
    d(R), (E = o.onOpenChange) == null || E.call(o, R);
  }, D = te(() => t.filter((R) => i.includes(R.granularity)), [t, i]), S = Y(null);
  return q(() => {
    l && S.current && requestAnimationFrame(() => {
      var R;
      (R = S.current) == null || R.focus();
    });
  }, [l]), g(Pi, {
    hideCalendarInput: !0,
    onSelect: N,
    value: h,
    presets: D,
    granularities: i,
    minDate: s,
    maxDate: r,
    open: l,
    onOpenChange: C,
    asChild: !0,
    children: g(Mt, {
      ref: S,
      ...o,
      value: h,
      granularity: b,
      onDateChange: x
    })
  });
}
const Pr = Ai, Ar = Ae(
  "F0DatePicker",
  Fs
), Gs = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, Ws = K(function({ widgets: e, children: t }, i) {
  const s = Y(null);
  xt(i, () => s.current);
  const r = ns.toArray(e).filter((n) => !!n).map((n, o) => g("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: n
  }, o));
  return g(yt, {
    layout: "home",
    children: z("div", {
      ref: s,
      className: "@container",
      children: [z("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [g(Oi, {
          columns: Gs,
          showArrows: !1,
          children: r
        }), g("main", {
          children: t
        })]
      }), z("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [g("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: r.slice(0, 3)
        }), g("main", {
          className: "col-span-2",
          children: t
        }), g("div", {
          className: "flex flex-1 flex-col gap-5",
          children: r.slice(3)
        })]
      })]
    })
  });
}), $s = K(function({ children: e, sideContent: t, mainColumnPosition: i = "left", sticky: s = !1 }, r) {
  return g("div", {
    ref: r,
    className: "h-full",
    children: z("div", {
      className: j("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", s && "md:sticky md:top-0 md:max-h-full"),
      children: [g("main", {
        className: j("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", s ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", i === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), g(js, {
        sticky: s,
        className: j("order-1", i === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), js = ({ children: a, className: e }) => g("aside", {
  className: j("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: a
}), Us = Ti({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Ht = P.forwardRef(({ children: a, variant: e, className: t, ...i }, s) => g(yt, {
  layout: "standard",
  children: g("section", {
    ref: s,
    className: j("relative flex-1 overflow-auto", t),
    ...i,
    children: g("div", {
      className: j(Us({
        variant: e
      })),
      children: a
    })
  })
}));
Ht.displayName = "StandardLayout";
const Or = I({
  name: "StandardLayout",
  type: "layout"
}, Ht), Tr = I({
  name: "TwoColumnLayout",
  type: "layout"
}, $s), Lr = I({
  name: "HomeLayout",
  type: "layout"
}, Ws), Bt = xe(null);
function Me() {
  const a = Et(Bt);
  if (!a)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return a;
}
function qs({ children: a, initialOptions: e, onResizeStop: t, onChange: i }) {
  const [s, r] = A(null), [n, o] = A(() => {
    var y;
    const p = /* @__PURE__ */ new Map(), m = (b) => {
      var N, x;
      b.id && ((N = b.renderFn) != null && N.call(b)) && p.set(b.id, b), (x = b.subGridOpts) != null && x.children && b.subGridOpts.children.forEach((C) => {
        m(C);
      });
    };
    return (y = e.children) == null || y.forEach((b) => {
      m(b);
    }), p;
  }), h = W(() => {
    if (!s)
      return;
    const p = s.save();
    Array.isArray(p) && (i == null || i(p.map((m) => ({
      id: m.id ?? "",
      meta: m.meta,
      w: m.w ?? 1,
      h: m.h ?? 1,
      x: m.x ?? 0,
      y: m.y ?? 0
    }))));
  }, [s]);
  q(() => {
    if (!s) return;
    const p = (m, y) => {
      t == null || t(m, y);
    };
    return s.on("resizestop", p), s.on("change added removed", h), () => {
      s.off("resizestop"), s.off("change added removed");
    };
  }, [s, t, h]), q(() => {
    s && h();
  }, [s]);
  const c = W((p) => {
    s == null || s.addWidget(p), o((m) => {
      const y = new Map(m);
      return y.set(p.id, p), y;
    });
  }, [s]), l = W((p) => {
    s == null || s.addWidget(p), o((m) => {
      var b, N;
      const y = new Map(m);
      return (N = (b = p.subGridOpts) == null ? void 0 : b.children) == null || N.forEach((x) => {
        y.set(x.id, x);
      }), y;
    });
  }, [s]), d = W((p) => {
    const m = document.body.querySelector(`[gs-id="${p}"]`);
    m && (s == null || s.removeWidget(m)), o((y) => {
      const b = new Map(y);
      return b.delete(p), b;
    });
  }, [s]), f = W(() => {
    s == null || s.removeAll(), o(/* @__PURE__ */ new Map());
  }, [s]);
  return g(Bt.Provider, {
    value: {
      initialOptions: e,
      gridStack: s,
      addWidget: c,
      removeWidget: d,
      addSubGrid: l,
      removeAll: f,
      _gridStack: {
        value: s,
        set: r
      },
      _rawWidgetMetaMap: {
        value: n,
        set: o
      }
    },
    children: a
  });
}
const It = xe(null);
function Ks() {
  const a = Et(It);
  if (!a)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return a;
}
const Vs = xe(null);
function Ys() {
  const { _rawWidgetMetaMap: a } = Me(), { getWidgetContainer: e } = Ks();
  return g(oe, {
    children: Array.from(a.value.entries()).map(([t, i]) => {
      var r;
      const s = e(t);
      return s ? g(Vs.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: os((r = i.renderFn) == null ? void 0 : r.call(i), s)
      }, t) : null;
    })
  });
}
function Xs(a, e, t, i, s) {
  const r = (...n) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + s + " and has been replaced with `" + i + "`. It will be **removed** in a future release"), e.apply(a, n));
  return r.prototype = e.prototype, r;
}
class u {
  /**
   * Convert a potential selector into an actual list of HTML elements.
   * Supports CSS selectors, element references, and special ID handling.
   *
   * @param els selector string, HTMLElement, or array of elements
   * @param root optional root element to search within (defaults to document, useful for shadow DOM)
   * @returns array of HTML elements matching the selector
   *
   * @example
   * const elements = Utils.getElements('.grid-item');
   * const byId = Utils.getElements('#myWidget');
   * const fromShadow = Utils.getElements('.item', shadowRoot);
   */
  static getElements(e, t = document) {
    if (typeof e == "string") {
      const i = "getElementById" in t ? t : void 0;
      if (i && !isNaN(+e[0])) {
        const r = i.getElementById(e);
        return r ? [r] : [];
      }
      let s = t.querySelectorAll(e);
      return !s.length && e[0] !== "." && e[0] !== "#" && (s = t.querySelectorAll("." + e), s.length || (s = t.querySelectorAll("#" + e))), Array.from(s);
    }
    return [e];
  }
  /**
   * Convert a potential selector into a single HTML element.
   * Similar to getElements() but returns only the first match.
   *
   * @param els selector string or HTMLElement
   * @param root optional root element to search within (defaults to document)
   * @returns the first HTML element matching the selector, or null if not found
   *
   * @example
   * const element = Utils.getElement('#myWidget');
   * const first = Utils.getElement('.grid-item');
   */
  static getElement(e, t = document) {
    if (typeof e == "string") {
      const i = "getElementById" in t ? t : void 0;
      if (!e.length)
        return null;
      if (i && e[0] === "#")
        return i.getElementById(e.substring(1));
      if (e[0] === "#" || e[0] === "." || e[0] === "[")
        return t.querySelector(e);
      if (i && !isNaN(+e[0]))
        return i.getElementById(e);
      let s = t.querySelector(e);
      return i && !s && (s = i.getElementById(e)), s || (s = t.querySelector("." + e)), s;
    }
    return e;
  }
  /**
   * Check if a widget should be lazy loaded based on node or grid settings.
   *
   * @param n the grid node to check
   * @returns true if the item should be lazy loaded
   *
   * @example
   * if (Utils.lazyLoad(node)) {
   *   // Set up intersection observer for lazy loading
   * }
   */
  static lazyLoad(e) {
    var t, i;
    return e.lazyLoad || ((i = (t = e.grid) == null ? void 0 : t.opts) == null ? void 0 : i.lazyLoad) && e.lazyLoad !== !1;
  }
  /**
   * Create a div element with the specified CSS classes.
   *
   * @param classes array of CSS class names to add
   * @param parent optional parent element to append the div to
   * @returns the created div element
   *
   * @example
   * const div = Utils.createDiv(['grid-item', 'draggable']);
   * const nested = Utils.createDiv(['content'], parentDiv);
   */
  static createDiv(e, t) {
    const i = document.createElement("div");
    return e.forEach((s) => {
      s && i.classList.add(s);
    }), t == null || t.appendChild(i), i;
  }
  /**
   * Check if a widget should resize to fit its content.
   *
   * @param n the grid node to check (can be undefined)
   * @param strict if true, only returns true for explicit sizeToContent:true (not numbers)
   * @returns true if the widget should resize to content
   *
   * @example
   * if (Utils.shouldSizeToContent(node)) {
   *   // Trigger content-based resizing
   * }
   */
  static shouldSizeToContent(e, t = !1) {
    return (e == null ? void 0 : e.grid) && (t ? e.sizeToContent === !0 || e.grid.opts.sizeToContent === !0 && e.sizeToContent === void 0 : !!e.sizeToContent || e.grid.opts.sizeToContent && e.sizeToContent !== !1);
  }
  /**
   * Check if two grid positions overlap/intersect.
   *
   * @param a first position with x, y, w, h properties
   * @param b second position with x, y, w, h properties
   * @returns true if the positions overlap
   *
   * @example
   * const overlaps = Utils.isIntercepted(
   *   {x: 0, y: 0, w: 2, h: 1},
   *   {x: 1, y: 0, w: 2, h: 1}
   * ); // true - they overlap
   */
  static isIntercepted(e, t) {
    return !(e.y >= t.y + t.h || e.y + e.h <= t.y || e.x + e.w <= t.x || e.x >= t.x + t.w);
  }
  /**
   * Check if two grid positions are touching (edges or corners).
   *
   * @param a first position
   * @param b second position
   * @returns true if the positions are touching
   *
   * @example
   * const touching = Utils.isTouching(
   *   {x: 0, y: 0, w: 2, h: 1},
   *   {x: 2, y: 0, w: 1, h: 1}
   * ); // true - they share an edge
   */
  static isTouching(e, t) {
    return u.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
  }
  /**
   * Calculate the overlapping area between two grid positions.
   *
   * @param a first position
   * @param b second position
   * @returns the area of overlap (0 if no overlap)
   *
   * @example
   * const overlap = Utils.areaIntercept(
   *   {x: 0, y: 0, w: 3, h: 2},
   *   {x: 1, y: 0, w: 3, h: 2}
   * ); // returns 4 (2x2 overlap)
   */
  static areaIntercept(e, t) {
    const i = e.x > t.x ? e.x : t.x, s = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (s <= i)
      return 0;
    const r = e.y > t.y ? e.y : t.y, n = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return n <= r ? 0 : (s - i) * (n - r);
  }
  /**
   * Calculate the total area of a grid position.
   *
   * @param a position with width and height
   * @returns the total area (width * height)
   *
   * @example
   * const area = Utils.area({x: 0, y: 0, w: 3, h: 2}); // returns 6
   */
  static area(e) {
    return e.w * e.h;
  }
  /**
   * Sort an array of grid nodes by position (y first, then x).
   *
   * @param nodes array of nodes to sort
   * @param dir sort direction: 1 for ascending (top-left first), -1 for descending
   * @returns the sorted array (modifies original)
   *
   * @example
   * const sorted = Utils.sort(nodes); // Sort top-left to bottom-right
   * const reverse = Utils.sort(nodes, -1); // Sort bottom-right to top-left
   */
  static sort(e, t = 1) {
    return e.sort((s, r) => {
      const n = t * ((s.y ?? 1e4) - (r.y ?? 1e4));
      return n === 0 ? t * ((s.x ?? 1e4) - (r.x ?? 1e4)) : n;
    });
  }
  /**
   * Find a grid node by its ID.
   *
   * @param nodes array of nodes to search
   * @param id the ID to search for
   * @returns the node with matching ID, or undefined if not found
   *
   * @example
   * const node = Utils.find(nodes, 'widget-1');
   * if (node) console.log('Found node at:', node.x, node.y);
   */
  static find(e, t) {
    return t ? e.find((i) => i.id === t) : void 0;
  }
  /**
   * Convert various value types to boolean.
   * Handles strings like 'false', 'no', '0' as false.
   *
   * @param v value to convert
   * @returns boolean representation
   *
   * @example
   * Utils.toBool('true');  // true
   * Utils.toBool('false'); // false
   * Utils.toBool('no');    // false
   * Utils.toBool('1');     // true
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static toBool(e) {
    return typeof e == "boolean" ? e : typeof e == "string" ? (e = e.toLowerCase(), !(e === "" || e === "no" || e === "false" || e === "0")) : !!e;
  }
  /**
   * Convert a string value to a number, handling null and empty strings.
   *
   * @param value string or null value to convert
   * @returns number value, or undefined for null/empty strings
   *
   * @example
   * Utils.toNumber('42');  // 42
   * Utils.toNumber('');    // undefined
   * Utils.toNumber(null);  // undefined
   */
  static toNumber(e) {
    return e === null || e.length === 0 ? void 0 : Number(e);
  }
  /**
   * Parse a height value with units into numeric value and unit string.
   * Supports px, em, rem, vh, vw, %, cm, mm units.
   *
   * @param val height value as number or string with units
   * @returns object with h (height) and unit properties
   *
   * @example
   * Utils.parseHeight('100px');  // {h: 100, unit: 'px'}
   * Utils.parseHeight('2rem');   // {h: 2, unit: 'rem'}
   * Utils.parseHeight(50);       // {h: 50, unit: 'px'}
   */
  static parseHeight(e) {
    let t, i = "px";
    if (typeof e == "string")
      if (e === "auto" || e === "")
        t = 0;
      else {
        const s = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!s)
          throw new Error(`Invalid height val = ${e}`);
        i = s[2] || "px", t = parseFloat(s[1]);
      }
    else
      t = e;
    return { h: t, unit: i };
  }
  /**
   * Copy unset fields from source objects to target object (shallow merge with defaults).
   * Similar to Object.assign but only sets undefined/null fields.
   *
   * @param target the object to copy defaults into
   * @param sources one or more source objects to copy defaults from
   * @returns the modified target object
   *
   * @example
   * const config = { width: 100 };
   * Utils.defaults(config, { width: 200, height: 50 });
   * // config is now { width: 100, height: 50 }
   */
  // eslint-disable-next-line
  static defaults(e, ...t) {
    return t.forEach((i) => {
      for (const s in i) {
        if (!i.hasOwnProperty(s))
          return;
        e[s] === null || e[s] === void 0 ? e[s] = i[s] : typeof i[s] == "object" && typeof e[s] == "object" && u.defaults(e[s], i[s]);
      }
    }), e;
  }
  /**
   * Compare two objects for equality (shallow comparison).
   * Checks if objects have the same fields and values at one level deep.
   *
   * @param a first object to compare
   * @param b second object to compare
   * @returns true if objects have the same values
   *
   * @example
   * Utils.same({x: 1, y: 2}, {x: 1, y: 2}); // true
   * Utils.same({x: 1}, {x: 1, y: 2}); // false
   */
  static same(e, t) {
    if (typeof e != "object")
      return e == t;
    if (typeof e != typeof t || Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const i in e)
      if (e[i] !== t[i])
        return !1;
    return !0;
  }
  /**
   * Copy position and size properties from one widget to another.
   * Copies x, y, w, h and optionally min/max constraints.
   *
   * @param a target widget to copy to
   * @param b source widget to copy from
   * @param doMinMax if true, also copy min/max width/height constraints
   * @returns the target widget (a)
   *
   * @example
   * Utils.copyPos(widget1, widget2); // Copy position/size
   * Utils.copyPos(widget1, widget2, true); // Also copy constraints
   */
  static copyPos(e, t, i = !1) {
    return t.x !== void 0 && (e.x = t.x), t.y !== void 0 && (e.y = t.y), t.w !== void 0 && (e.w = t.w), t.h !== void 0 && (e.h = t.h), i && (t.minW && (e.minW = t.minW), t.minH && (e.minH = t.minH), t.maxW && (e.maxW = t.maxW), t.maxH && (e.maxH = t.maxH)), e;
  }
  /** true if a and b has same size & position */
  static samePos(e, t) {
    return e && t && e.x === t.x && e.y === t.y && (e.w || 1) === (t.w || 1) && (e.h || 1) === (t.h || 1);
  }
  /** given a node, makes sure it's min/max are valid */
  static sanitizeMinMax(e) {
    e.minW || delete e.minW, e.minH || delete e.minH, e.maxW || delete e.maxW, e.maxH || delete e.maxH;
  }
  /** removes field from the first object if same as the second objects (like diffing) and internal '_' for saving */
  static removeInternalAndSame(e, t) {
    if (!(typeof e != "object" || typeof t != "object"))
      for (let i in e) {
        const s = e[i], r = t[i];
        i[0] === "_" || s === r ? delete e[i] : s && typeof s == "object" && r !== void 0 && (u.removeInternalAndSame(s, r), Object.keys(s).length || delete e[i]);
      }
  }
  /** removes internal fields '_' and default values for saving */
  static removeInternalForSave(e, t = !0) {
    for (let i in e)
      (i[0] === "_" || e[i] === null || e[i] === void 0) && delete e[i];
    delete e.grid, t && delete e.el, e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, e.locked || delete e.locked, (e.w === 1 || e.w === e.minW) && delete e.w, (e.h === 1 || e.h === e.minH) && delete e.h;
  }
  /** return the closest parent (or itself) matching the given class */
  // static closestUpByClass(el: HTMLElement, name: string): HTMLElement {
  //   while (el) {
  //     if (el.classList.contains(name)) return el;
  //     el = el.parentElement
  //   }
  //   return null;
  // }
  /** delay calling the given function for given delay, preventing new calls from happening while waiting */
  static throttle(e, t) {
    let i = !1;
    return (...s) => {
      i || (i = !0, setTimeout(() => {
        e(...s), i = !1;
      }, t));
    };
  }
  static removePositioningStyles(e) {
    const t = e.style;
    t.position && t.removeProperty("position"), t.left && t.removeProperty("left"), t.top && t.removeProperty("top"), t.width && t.removeProperty("width"), t.height && t.removeProperty("height");
  }
  /** @internal returns the passed element if scrollable, else the closest parent that will, up to the entire document scrolling element */
  static getScrollElement(e) {
    if (!e)
      return document.scrollingElement || document.documentElement;
    const t = getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : u.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, i) {
    const s = u.getScrollElement(e);
    if (!s)
      return;
    const r = e.getBoundingClientRect(), n = s.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, h = r.bottom - Math.min(n.bottom, o), c = r.top - Math.max(n.top, 0), l = s.scrollTop;
    c < 0 && i < 0 ? e.offsetHeight > n.height ? s.scrollTop += i : s.scrollTop += Math.abs(c) > Math.abs(i) ? i : c : h > 0 && i > 0 && (e.offsetHeight > n.height ? s.scrollTop += i : s.scrollTop += h > i ? i : h), t.top += s.scrollTop - l;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, i) {
    const s = u.getScrollElement(t), r = s.clientHeight, n = s === u.getScrollElement() ? 0 : s.getBoundingClientRect().top, o = e.clientY - n, h = o < i, c = o > r - i;
    h ? s.scrollBy({ behavior: "smooth", top: o - i }) : c && s.scrollBy({ behavior: "smooth", top: i - (r - o) });
  }
  /** single level clone, returning a new object with same top fields. This will share sub objects and arrays */
  static clone(e) {
    return e == null || typeof e != "object" ? e : e instanceof Array ? [...e] : { ...e };
  }
  /**
   * Recursive clone version that returns a full copy, checking for nested objects and arrays ONLY.
   * Note: this will use as-is any key starting with double __ (and not copy inside) some lib have circular dependencies.
   */
  static cloneDeep(e) {
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], i = u.clone(e);
    for (const s in i)
      i.hasOwnProperty(s) && typeof i[s] == "object" && s.substring(0, 2) !== "__" && !t.find((r) => r === s) && (i[s] = u.cloneDeep(e[s]));
    return i;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let i;
    typeof t == "string" ? i = u.getElement(t) : i = t, i && i.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const i in t)
        t.hasOwnProperty(i) && (Array.isArray(t[i]) ? t[i].forEach((s) => {
          e.style[i] = s;
        }) : e.style[i] = t[i]);
  }
  static initEvent(e, t) {
    const i = { type: t.type }, s = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((r) => i[r] = e[r]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((r) => i[r] = e[r]), { ...i, ...s };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, i) {
    const s = e, r = new MouseEvent(t, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      view: window,
      detail: 1,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: s.ctrlKey ?? !1,
      altKey: s.altKey ?? !1,
      shiftKey: s.shiftKey ?? !1,
      metaKey: s.metaKey ?? !1,
      button: 0,
      relatedTarget: e.target
    });
    (i || e.target).dispatchEvent(r);
  }
  /**
   * defines an element that is used to get the offset and scale from grid transforms
   * returns the scale and offsets from said element
  */
  static getValuesFromTransformedElement(e) {
    const t = document.createElement("div");
    u.addElStyles(t, {
      opacity: "0",
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "1px",
      height: "1px",
      zIndex: "-999999"
    }), e.appendChild(t);
    const i = t.getBoundingClientRect();
    return e.removeChild(t), t.remove(), {
      xScale: 1 / i.width,
      yScale: 1 / i.height,
      xOffset: i.left,
      yOffset: i.top
    };
  }
  /** swap the given object 2 field values */
  static swap(e, t, i) {
    if (!e)
      return;
    const s = e[t];
    e[t] = e[i], e[i] = s;
  }
  /** returns true if event is inside the given element rectangle */
  // Note: Safari Mac has null event.relatedTarget which causes #1684 so check if DragEvent is inside the coordinates instead
  //    Utils.el.contains(event.relatedTarget as HTMLElement)
  // public static inside(e: MouseEvent, el: HTMLElement): boolean {
  //   // srcElement, toElement, target: all set to placeholder when leaving simple grid, so we can't use that (Chrome)
  //   const target: HTMLElement = e.relatedTarget || (e as any).fromElement;
  //   if (!target) {
  //     const { bottom, left, right, top } = el.getBoundingClientRect();
  //     return (e.x < right && e.x > left && e.y < bottom && e.y > top);
  //   }
  //   return el.contains(target);
  // }
  /** true if the item can be rotated (checking for prop, not space available) */
  static canBeRotated(e) {
    var t;
    return !(!e || e.w === e.h || e.locked || e.noResize || (t = e.grid) != null && t.opts.disableResize || e.minW && e.minW === e.maxW || e.minH && e.minH === e.maxH);
  }
}
class $ {
  constructor(e = {}) {
    this.addedNodes = [], this.removedNodes = [], this.defaultColumn = 12, this.column = e.column || this.defaultColumn, this.column > this.defaultColumn && (this.defaultColumn = this.column), this.maxRow = e.maxRow, this._float = e.float, this.nodes = e.nodes || [], this.onChange = e.onChange;
  }
  /**
   * Enable/disable batch mode for multiple operations to optimize performance.
   * When enabled, layout updates are deferred until batch mode is disabled.
   *
   * @param flag true to enable batch mode, false to disable and apply changes
   * @param doPack if true (default), pack/compact nodes when disabling batch mode
   * @returns the engine instance for chaining
   *
   * @example
   * // Start batch mode for multiple operations
   * engine.batchUpdate(true);
   * engine.addNode(node1);
   * engine.addNode(node2);
   * engine.batchUpdate(false); // Apply all changes at once
   */
  batchUpdate(e = !0, t = !0) {
    return !!this.batchMode === e ? this : (this.batchMode = e, e ? (this._prevFloat = this._float, this._float = !0, this.cleanNodes(), this.saveInitial()) : (this._float = this._prevFloat, delete this._prevFloat, t && this._packNodes(), this._notify()), this);
  }
  // use entire row for hitting area (will use bottom reverse sorted first) if we not actively moving DOWN and didn't already skip
  _useEntireRowArea(e, t) {
    return (!this.float || this.batchMode && !this._prevFloat) && !this._hasLocked && (!e._moving || e._skipDown || t.y <= e.y);
  }
  /** @internal fix collision on given 'node', going to given new location 'nn', with optional 'collide' node already found.
   * return true if we moved. */
  _fixCollisions(e, t = e, i, s = {}) {
    if (this.sortNodes(-1), i = i || this.collide(e, t), !i)
      return !1;
    if (e._moving && !s.nested && !this.float && this.swap(e, i))
      return !0;
    let r = t;
    !this._loading && this._useEntireRowArea(e, t) && (r = { x: 0, w: this.column, y: t.y, h: t.h }, i = this.collide(e, r, s.skip));
    let n = !1;
    const o = { nested: !0, pack: !1 };
    let h = 0;
    for (; i = i || this.collide(e, r, s.skip); ) {
      if (h++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let c;
      if (i.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(i, { ...i, y: e.y }, e) || !this.collide(i, { ...i, y: t.y - i.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const l = { ...t, y: i.y + i.h, ...o };
        c = this._loading && u.samePos(e, l) ? !0 : this.moveNode(e, l), (i.locked || this._loading) && c ? u.copyPos(t, e) : !i.locked && c && s.pack && (this._packNodes(), t.y = i.y + i.h, u.copyPos(e, t)), n = n || c;
      } else
        c = this.moveNode(i, { ...i, y: t.y + t.h, skip: e, ...o });
      if (!c)
        return n;
      i = void 0;
    }
    return n;
  }
  /**
   * Return the first node that intercepts/collides with the given node or area.
   * Used for collision detection during drag and drop operations.
   *
   * @param skip the node to skip in collision detection (usually the node being moved)
   * @param area the area to check for collisions (defaults to skip node's area)
   * @param skip2 optional second node to skip in collision detection
   * @returns the first colliding node, or undefined if no collision
   *
   * @example
   * const colliding = engine.collide(draggedNode, {x: 2, y: 1, w: 2, h: 1});
   * if (colliding) {
   *   console.log('Would collide with:', colliding.id);
   * }
   */
  collide(e, t = e, i) {
    const s = e._id, r = i == null ? void 0 : i._id;
    return this.nodes.find((n) => n._id !== s && n._id !== r && u.isIntercepted(n, t));
  }
  /**
   * Return all nodes that intercept/collide with the given node or area.
   * Similar to collide() but returns all colliding nodes instead of just the first.
   *
   * @param skip the node to skip in collision detection
   * @param area the area to check for collisions (defaults to skip node's area)
   * @param skip2 optional second node to skip in collision detection
   * @returns array of all colliding nodes
   *
   * @example
   * const allCollisions = engine.collideAll(draggedNode);
   * console.log('Colliding with', allCollisions.length, 'nodes');
   */
  collideAll(e, t = e, i) {
    const s = e._id, r = i == null ? void 0 : i._id;
    return this.nodes.filter((n) => n._id !== s && n._id !== r && u.isIntercepted(n, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, i) {
    if (!t.rect || !e._rect)
      return;
    const s = e._rect, r = { ...t.rect };
    r.y > s.y ? (r.h += r.y - s.y, r.y = s.y) : r.h += s.y - r.y, r.x > s.x ? (r.w += r.x - s.x, r.x = s.x) : r.w += s.x - r.x;
    let n, o = 0.5;
    for (let h of i) {
      if (h.locked || !h._rect)
        break;
      const c = h._rect;
      let l = Number.MAX_VALUE, d = Number.MAX_VALUE;
      s.y < c.y ? l = (r.y + r.h - c.y) / c.h : s.y + s.h > c.y + c.h && (l = (c.y + c.h - r.y) / c.h), s.x < c.x ? d = (r.x + r.w - c.x) / c.w : s.x + s.w > c.x + c.w && (d = (c.x + c.w - r.x) / c.w);
      const f = Math.min(d, l);
      f > o && (o = f, n = h);
    }
    return t.collide = n, n;
  }
  /** does a pixel coverage returning the node that has the most coverage by area */
  /*
  protected collideCoverage(r: GridStackPosition, collides: GridStackNode[]): {collide: GridStackNode, over: number} {
    const collide: GridStackNode;
    const overMax = 0;
    collides.forEach(n => {
      if (n.locked || !n._rect) return;
      const over = Utils.areaIntercept(r, n._rect);
      if (over > overMax) {
        overMax = over;
        collide = n;
      }
    });
    return {collide, over: overMax};
  }
  */
  /**
   * Cache the pixel rectangles for all nodes used for collision detection during drag operations.
   * This optimization converts grid coordinates to pixel coordinates for faster collision detection.
   *
   * @param w width of a single grid cell in pixels
   * @param h height of a single grid cell in pixels
   * @param top top margin/padding in pixels
   * @param right right margin/padding in pixels
   * @param bottom bottom margin/padding in pixels
   * @param left left margin/padding in pixels
   * @returns the engine instance for chaining
   *
   * @internal This is typically called by GridStack during resize events
   */
  cacheRects(e, t, i, s, r, n) {
    return this.nodes.forEach((o) => o._rect = {
      y: o.y * t + i,
      x: o.x * e + n,
      w: o.w * e - n - s,
      h: o.h * t - i - r
    }), this;
  }
  /**
   * Attempt to swap the positions of two nodes if they meet swapping criteria.
   * Nodes can swap if they are the same size or in the same column/row, not locked, and touching.
   *
   * @param a first node to swap
   * @param b second node to swap
   * @returns true if swap was successful, false if not possible, undefined if not applicable
   *
   * @example
   * const swapped = engine.swap(nodeA, nodeB);
   * if (swapped) {
   *   console.log('Nodes swapped successfully');
   * }
   */
  swap(e, t) {
    if (!t || t.locked || !e || e.locked)
      return !1;
    function i() {
      const r = t.x, n = t.y;
      return t.x = e.x, t.y = e.y, e.h != t.h ? (e.x = r, e.y = t.y + t.h) : e.w != t.w ? (e.x = t.x + t.w, e.y = n) : (e.x = r, e.y = n), e._dirty = t._dirty = !0, !0;
    }
    let s;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (s = u.isTouching(e, t)))
      return i();
    if (s !== !1) {
      if (e.w === t.w && e.x === t.x && (s || (s = u.isTouching(e, t)))) {
        if (t.y < e.y) {
          const r = e;
          e = t, t = r;
        }
        return i();
      }
      if (s !== !1) {
        if (e.h === t.h && e.y === t.y && (s || (s = u.isTouching(e, t)))) {
          if (t.x < e.x) {
            const r = e;
            e = t, t = r;
          }
          return i();
        }
        return !1;
      }
    }
  }
  /**
   * Check if the specified rectangular area is empty (no nodes occupy any part of it).
   *
   * @param x the x coordinate (column) of the area to check
   * @param y the y coordinate (row) of the area to check
   * @param w the width in columns of the area to check
   * @param h the height in rows of the area to check
   * @returns true if the area is completely empty, false if any node overlaps
   *
   * @example
   * if (engine.isAreaEmpty(2, 1, 3, 2)) {
   *   console.log('Area is available for placement');
   * }
   */
  isAreaEmpty(e, t, i, s) {
    const r = { x: e || 0, y: t || 0, w: i || 1, h: s || 1 };
    return !this.collide(r);
  }
  /**
   * Re-layout grid items to reclaim any empty space.
   * This optimizes the grid layout by moving items to fill gaps.
   *
   * @param layout layout algorithm to use:
   *   - 'compact' (default): find truly empty spaces, may reorder items
   *   - 'list': keep the sort order exactly the same, move items up sequentially
   * @param doSort if true (default), sort nodes by position before compacting
   * @returns the engine instance for chaining
   *
   * @example
   * // Compact to fill empty spaces
   * engine.compact();
   *
   * // Compact preserving item order
   * engine.compact('list');
   */
  compact(e = "compact", t = !0) {
    if (this.nodes.length === 0)
      return this;
    t && this.sortNodes();
    const i = this.batchMode;
    i || this.batchUpdate();
    const s = this._inColumnResize;
    s || (this._inColumnResize = !0);
    const r = this.nodes;
    return this.nodes = [], r.forEach((n, o, h) => {
      let c;
      n.locked || (n.autoPosition = !0, e === "list" && o && (c = h[o - 1])), this.addNode(n, !1, c);
    }), s || delete this._inColumnResize, i || this.batchUpdate(!1), this;
  }
  /**
   * Enable/disable floating widgets (default: `false`).
   * When floating is enabled, widgets can move up to fill empty spaces.
   * See [example](http://gridstackjs.com/demo/float.html)
   *
   * @param val true to enable floating, false to disable
   *
   * @example
   * engine.float = true;  // Enable floating
   * engine.float = false; // Disable floating (default)
   */
  set float(e) {
    this._float !== e && (this._float = e || !1, e || this._packNodes()._notify());
  }
  /**
   * Get the current floating mode setting.
   *
   * @returns true if floating is enabled, false otherwise
   *
   * @example
   * const isFloating = engine.float;
   * console.log('Floating enabled:', isFloating);
   */
  get float() {
    return this._float || !1;
  }
  /**
   * Sort the nodes array from first to last, or reverse.
   * This is called during collision/placement operations to enforce a specific order.
   *
   * @param dir sort direction: 1 for ascending (first to last), -1 for descending (last to first)
   * @returns the engine instance for chaining
   *
   * @example
   * engine.sortNodes();    // Sort ascending (default)
   * engine.sortNodes(-1);  // Sort descending
   */
  sortNodes(e = 1) {
    return this.nodes = u.sort(this.nodes, e), this;
  }
  /** @internal called to top gravity pack the items back OR revert back to original Y positions when floating */
  _packNodes() {
    return this.batchMode ? this : (this.sortNodes(), this.float ? this.nodes.forEach((e) => {
      if (e._updating || e._orig === void 0 || e.y === e._orig.y)
        return;
      let t = e.y;
      for (; t > e._orig.y; )
        --t, this.collide(e, { x: e.x, y: t, w: e.w, h: e.h }) || (e._dirty = !0, e.y = t);
    }) : this.nodes.forEach((e, t) => {
      if (!e.locked)
        for (; e.y > 0; ) {
          const i = t === 0 ? 0 : e.y - 1;
          if (!(t === 0 || !this.collide(e, { x: e.x, y: i, w: e.w, h: e.h })))
            break;
          e._dirty = e.y !== i, e.y = i;
        }
    }), this);
  }
  /**
   * Prepare and validate a node's coordinates and values for the current grid.
   * This ensures the node has valid position, size, and properties before being added to the grid.
   *
   * @param node the node to prepare and validate
   * @param resizing if true, resize the node down if it's out of bounds; if false, move it to fit
   * @returns the prepared node with valid coordinates
   *
   * @example
   * const node = { w: 3, h: 2, content: 'Hello' };
   * const prepared = engine.prepareNode(node);
   * console.log('Node prepared at:', prepared.x, prepared.y);
   */
  prepareNode(e, t) {
    e._id = e._id ?? $._idSeq++;
    const i = e.id;
    if (i) {
      let r = 1;
      for (; this.nodes.find((n) => n.id === e.id && n !== e); )
        e.id = i + "_" + r++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const s = { x: 0, y: 0, w: 1, h: 1 };
    return u.defaults(e, s), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, u.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = s.x, e.autoPosition = !0), isNaN(e.y) && (e.y = s.y, e.autoPosition = !0), isNaN(e.w) && (e.w = s.w), isNaN(e.h) && (e.h = s.h), this.nodeBoundFix(e, t), e;
  }
  /**
   * Part 2 of preparing a node to fit inside the grid - validates and fixes coordinates and dimensions.
   * This ensures the node fits within grid boundaries and respects min/max constraints.
   *
   * @param node the node to validate and fix
   * @param resizing if true, resize the node to fit; if false, move the node to fit
   * @returns the engine instance for chaining
   *
   * @example
   * // Fix a node that might be out of bounds
   * engine.nodeBoundFix(node, true); // Resize to fit
   * engine.nodeBoundFix(node, false); // Move to fit
   */
  nodeBoundFix(e, t) {
    const i = e._orig || u.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const r = { ...e };
      r.autoPosition || r.x === void 0 ? (delete r.x, delete r.y) : r.x = Math.min(this.defaultColumn - 1, r.x), r.w = Math.min(this.defaultColumn, r.w || 1), this.cacheOneLayout(r, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), u.samePos(e, i) || (e._dirty = !0), this;
  }
  /**
   * Returns a list of nodes that have been modified from their original values.
   * This is used to track which nodes need DOM updates.
   *
   * @param verify if true, performs additional verification by comparing current vs original positions
   * @returns array of nodes that have been modified
   *
   * @example
   * const changed = engine.getDirtyNodes();
   * console.log('Modified nodes:', changed.length);
   *
   * // Get verified dirty nodes
   * const verified = engine.getDirtyNodes(true);
   */
  getDirtyNodes(e) {
    return e ? this.nodes.filter((t) => t._dirty && !u.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
  }
  /** @internal call this to call onChange callback with dirty nodes so DOM can be updated */
  _notify(e) {
    if (this.batchMode || !this.onChange)
      return this;
    const t = (e || []).concat(this.getDirtyNodes());
    return this.onChange(t), this;
  }
  /**
   * Clean all dirty and last tried information from nodes.
   * This resets the dirty state tracking for all nodes.
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  cleanNodes() {
    return this.batchMode ? this : (this.nodes.forEach((e) => {
      delete e._dirty, delete e._lastTried;
    }), this);
  }
  /**
   * Save the initial position/size of all nodes to track real dirty state.
   * This creates a snapshot of current positions that can be restored later.
   *
   * Note: Should be called right after change events and before move/resize operations.
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  saveInitial() {
    return this.nodes.forEach((e) => {
      e._orig = u.copyPos({}, e), delete e._dirty;
    }), this._hasLocked = this.nodes.some((e) => e.locked), this;
  }
  /**
   * Restore all nodes back to their initial values.
   * This is typically called when canceling an operation (e.g., Esc key during drag).
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  restoreInitial() {
    return this.nodes.forEach((e) => {
      !e._orig || u.samePos(e, e._orig) || (u.copyPos(e, e._orig), e._dirty = !0);
    }), this._notify(), this;
  }
  /**
   * Find the first available empty spot for the given node dimensions.
   * Updates the node's x,y attributes with the found position.
   *
   * @param node the node to find a position for (w,h must be set)
   * @param nodeList optional list of nodes to check against (defaults to engine nodes)
   * @param column optional column count (defaults to engine column count)
   * @param after optional node to start search after (maintains order)
   * @returns true if an empty position was found and node was updated
   *
   * @example
   * const node = { w: 2, h: 1 };
   * if (engine.findEmptyPosition(node)) {
   *   console.log('Found position at:', node.x, node.y);
   * }
   */
  findEmptyPosition(e, t = this.nodes, i = this.column, s) {
    const r = s ? s.y * i + (s.x + s.w) : 0;
    let n = !1;
    for (let o = r; !n; ++o) {
      const h = o % i, c = Math.floor(o / i);
      if (h + e.w > i)
        continue;
      const l = { x: h, y: c, w: e.w, h: e.h };
      t.find((d) => u.isIntercepted(l, d)) || ((e.x !== h || e.y !== c) && (e._dirty = !0), e.x = h, e.y = c, delete e.autoPosition, n = !0);
    }
    return n;
  }
  /**
   * Add the given node to the grid, handling collision detection and re-packing.
   * This is the main method for adding new widgets to the engine.
   *
   * @param node the node to add to the grid
   * @param triggerAddEvent if true, adds node to addedNodes list for event triggering
   * @param after optional node to place this node after (for ordering)
   * @returns the added node (or existing node if duplicate)
   *
   * @example
   * const node = { x: 0, y: 0, w: 2, h: 1, content: 'Hello' };
   * const added = engine.addNode(node, true);
   */
  addNode(e, t = !1, i) {
    const s = this.nodes.find((n) => n._id === e._id);
    if (s)
      return s;
    this._inColumnResize ? this.nodeBoundFix(e) : this.prepareNode(e), delete e._temporaryRemoved, delete e._removeDOM;
    let r;
    return e.autoPosition && this.findEmptyPosition(e, this.nodes, this.column, i) && (delete e.autoPosition, r = !0), this.nodes.push(e), t && this.addedNodes.push(e), r || this._fixCollisions(e), this.batchMode || this._packNodes()._notify(), e;
  }
  /**
   * Remove the given node from the grid.
   *
   * @param node the node to remove
   * @param removeDOM if true (default), marks node for DOM removal
   * @param triggerEvent if true, adds node to removedNodes list for event triggering
   * @returns the engine instance for chaining
   *
   * @example
   * engine.removeNode(node, true, true);
   */
  removeNode(e, t = !0, i = !1) {
    return this.nodes.find((s) => s._id === e._id) ? (i && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((s) => s._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
  }
  /**
   * Remove all nodes from the grid.
   *
   * @param removeDOM if true (default), marks all nodes for DOM removal
   * @param triggerEvent if true (default), triggers removal events
   * @returns the engine instance for chaining
   *
   * @example
   * engine.removeAll(); // Remove all nodes
   */
  removeAll(e = !0, t = !0) {
    if (delete this._layouts, !this.nodes.length)
      return this;
    e && this.nodes.forEach((s) => s._removeDOM = !0);
    const i = this.nodes;
    return this.removedNodes = t ? i : [], this.nodes = [], this._notify(i);
  }
  /**
   * Check if a node can be moved to a new position, considering layout constraints.
   * This is a safer version of moveNode() that validates the move first.
   *
   * For complex cases (like maxRow constraints), it simulates the move in a clone first,
   * then applies the changes only if they meet all specifications.
   *
   * @param node the node to move
   * @param o move options including target position
   * @returns true if the node was successfully moved
   *
   * @example
   * const canMove = engine.moveNodeCheck(node, { x: 2, y: 1 });
   * if (canMove) {
   *   console.log('Node moved successfully');
   * }
   */
  moveNodeCheck(e, t) {
    if (!this.changedPosConstrain(e, t))
      return !1;
    if (t.pack = !0, !this.maxRow)
      return this.moveNode(e, t);
    let i;
    const s = new $({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((n) => n._id === e._id ? (i = { ...n }, i) : { ...n })
    });
    if (!i)
      return !1;
    const r = s.moveNode(i, t) && s.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!r && !t.resizing && t.collide) {
      const n = t.collide.el.gridstackNode;
      if (this.swap(e, n))
        return this._notify(), !0;
    }
    return r ? (s.nodes.filter((n) => n._dirty).forEach((n) => {
      const o = this.nodes.find((h) => h._id === n._id);
      o && (u.copyPos(o, n), o._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new $({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((s) => ({ ...s }))
    }), i = { ...e };
    return this.cleanupNode(i), delete i.el, delete i._id, delete i.content, delete i.grid, t.addNode(i), t.getRow() <= this.maxRow ? (e._willFitPos = u.copyPos({}, i), !0) : !1;
  }
  /** true if x,y or w,h are different after clamping to min/max */
  changedPosConstrain(e, t) {
    return t.w = t.w || e.w, t.h = t.h || e.h, e.x !== t.x || e.y !== t.y ? !0 : (e.maxW && (t.w = Math.min(t.w, e.maxW)), e.maxH && (t.h = Math.min(t.h, e.maxH)), e.minW && (t.w = Math.max(t.w, e.minW)), e.minH && (t.h = Math.max(t.h, e.minH)), e.w !== t.w || e.h !== t.h);
  }
  /** return true if the passed in node was actually moved (checks for no-op and locked) */
  moveNode(e, t) {
    var c, l;
    if (!e || /*node.locked ||*/
    !t)
      return !1;
    let i;
    t.pack === void 0 && !this.batchMode && (i = t.pack = !0), typeof t.x != "number" && (t.x = e.x), typeof t.y != "number" && (t.y = e.y), typeof t.w != "number" && (t.w = e.w), typeof t.h != "number" && (t.h = e.h);
    const s = e.w !== t.w || e.h !== t.h, r = u.copyPos({}, e, !0);
    if (u.copyPos(r, t), this.nodeBoundFix(r, s), u.copyPos(t, r), !t.forceCollide && u.samePos(e, t))
      return !1;
    const n = u.copyPos({}, e), o = this.collideAll(e, r, t.skip);
    let h = !0;
    if (o.length) {
      const d = e._moving && !t.nested;
      let f = d ? this.directionCollideCoverage(e, t, o) : o[0];
      if (d && f && ((l = (c = e.grid) == null ? void 0 : c.opts) != null && l.subGridDynamic) && !e.grid._isTemp) {
        const p = u.areaIntercept(t.rect, f._rect), m = u.area(t.rect), y = u.area(f._rect);
        p / (m < y ? m : y) > 0.8 && (f.grid.makeSubGrid(f.el, void 0, e), f = void 0);
      }
      f ? h = !this._fixCollisions(e, r, f, t) : (h = !1, i && delete t.pack);
    }
    return h && !u.samePos(e, r) && (e._dirty = !0, u.copyPos(e, r)), t.pack && this._packNodes()._notify(), !u.samePos(e, n);
  }
  getRow() {
    return this.nodes.reduce((e, t) => Math.max(e, t.y + t.h), 0);
  }
  beginUpdate(e) {
    return e._updating || (e._updating = !0, delete e._skipDown, this.batchMode || this.saveInitial()), this;
  }
  endUpdate() {
    const e = this.nodes.find((t) => t._updating);
    return e && (delete e._updating, delete e._skipDown), this;
  }
  /** saves a copy of the largest column layout (eg 12 even when rendering 1 column) so we don't loose orig layout, unless explicity column
   * count to use is given. returning a list of widgets for serialization
   * @param saveElement if true (default), the element will be saved to GridStackWidget.el field, else it will be removed.
   * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
   * @param column if provided, the grid will be saved for the given column count (IFF we have matching internal saved layout, or current layout).
   * Note: nested grids will ALWAYS save the container w to match overall layouts (parent + child) to be consistent.
  */
  save(e = !0, t, i) {
    var o;
    const s = ((o = this._layouts) == null ? void 0 : o.length) || 0;
    let r;
    s && (i ? i !== this.column && (r = this._layouts[i]) : this.column !== s - 1 && (r = this._layouts[s - 1]));
    const n = [];
    return this.sortNodes(), this.nodes.forEach((h) => {
      const c = r == null ? void 0 : r.find((d) => d._id === h._id), l = { ...h, ...c || {} };
      u.removeInternalForSave(l, !e), t && t(h, l), n.push(l);
    }), n;
  }
  /** @internal called whenever a node is added or moved - updates the cached layouts */
  layoutsNodesChange(e) {
    return !this._layouts || this._inColumnResize ? this : (this._layouts.forEach((t, i) => {
      if (!t || i === this.column)
        return this;
      if (i < this.column)
        this._layouts[i] = void 0;
      else {
        const s = i / this.column;
        e.forEach((r) => {
          if (!r._orig)
            return;
          const n = t.find((o) => o._id === r._id);
          n && (n.y >= 0 && r.y !== r._orig.y && (n.y += r.y - r._orig.y), r.x !== r._orig.x && (n.x = Math.round(r.x * s)), r.w !== r._orig.w && (n.w = Math.round(r.w * s)));
        });
      }
    }), this);
  }
  /**
   * @internal Called to scale the widget width & position up/down based on the column change.
   * Note we store previous layouts (especially original ones) to make it possible to go
   * from say 12 -> 1 -> 12 and get back to where we were.
   *
   * @param prevColumn previous number of columns
   * @param column  new column number
   * @param layout specify the type of re-layout that will happen (position, size, etc...).
   * Note: items will never be outside of the current column boundaries. default (moveScale). Ignored for 1 column
   */
  columnChanged(e, t, i = "moveScale") {
    var o;
    if (!this.nodes.length || !t || e === t)
      return this;
    const s = i === "compact" || i === "list";
    s && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let r = [], n = s ? this.nodes : u.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const h = this._layouts[t] || [], c = this._layouts.length - 1;
      !h.length && e !== c && ((o = this._layouts[c]) != null && o.length) && (e = c, this._layouts[c].forEach((l) => {
        const d = n.find((f) => f._id === l._id);
        d && (!s && !l.autoPosition && (d.x = l.x ?? d.x, d.y = l.y ?? d.y), d.w = l.w ?? d.w, (l.x == null || l.y === void 0) && (d.autoPosition = !0));
      })), h.forEach((l) => {
        const d = n.findIndex((f) => f._id === l._id);
        if (d !== -1) {
          const f = n[d];
          if (s) {
            f.w = l.w;
            return;
          }
          (l.autoPosition || isNaN(l.x) || isNaN(l.y)) && this.findEmptyPosition(l, r), l.autoPosition || (f.x = l.x ?? f.x, f.y = l.y ?? f.y, f.w = l.w ?? f.w, r.push(f)), n.splice(d, 1);
        }
      });
    }
    if (s)
      this.compact(i, !1);
    else {
      if (n.length)
        if (typeof i == "function")
          i(t, e, r, n);
        else {
          const h = s || i === "none" ? 1 : t / e, c = i === "move" || i === "moveScale", l = i === "scale" || i === "moveScale";
          n.forEach((d) => {
            d.x = t === 1 ? 0 : c ? Math.round(d.x * h) : Math.min(d.x, t - 1), d.w = t === 1 || e === 1 ? 1 : l ? Math.round(d.w * h) || 1 : Math.min(d.w, t), r.push(d);
          }), n = [];
        }
      r = u.sort(r, -1), this._inColumnResize = !0, this.nodes = [], r.forEach((h) => {
        this.addNode(h, !1), delete h._orig;
      });
    }
    return this.nodes.forEach((h) => delete h._orig), this.batchUpdate(!1, !s), delete this._inColumnResize, this;
  }
  /**
   * call to cache the given layout internally to the given location so we can restore back when column changes size
   * @param nodes list of nodes
   * @param column corresponding column index to save it under
   * @param clear if true, will force other caches to be removed (default false)
   */
  cacheLayout(e, t, i = !1) {
    const s = [];
    return e.forEach((r, n) => {
      if (r._id === void 0) {
        const o = r.id ? this.nodes.find((h) => h.id === r.id) : void 0;
        r._id = (o == null ? void 0 : o._id) ?? $._idSeq++;
      }
      s[n] = { x: r.x, y: r.y, w: r.w, _id: r._id };
    }), this._layouts = i ? [] : this._layouts || [], this._layouts[t] = s, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? $._idSeq++;
    const i = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete i.x, delete i.y, e.autoPosition && (i.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const s = this.findCacheLayout(e, t);
    return s === -1 ? this._layouts[t].push(i) : this._layouts[t][s] = i, this;
  }
  findCacheLayout(e, t) {
    var i, s;
    return ((s = (i = this._layouts) == null ? void 0 : i[t]) == null ? void 0 : s.findIndex((r) => r._id === e._id)) ?? -1;
  }
  removeNodeFromLayoutCache(e) {
    if (this._layouts)
      for (let t = 0; t < this._layouts.length; t++) {
        const i = this.findCacheLayout(e, t);
        i !== -1 && this._layouts[t].splice(i, 1);
      }
  }
  /** called to remove all internal values but the _id */
  cleanupNode(e) {
    for (const t in e)
      t[0] === "_" && t !== "_id" && delete e[t];
    return this;
  }
}
$._idSeq = 0;
const M = {
  alwaysShowResizeHandle: "mobile",
  animate: !0,
  auto: !0,
  cellHeight: "auto",
  cellHeightThrottle: 100,
  cellHeightUnit: "px",
  column: 12,
  draggable: { handle: ".grid-stack-item-content", appendTo: "body", scroll: !0 },
  handle: ".grid-stack-item-content",
  itemClass: "grid-stack-item",
  margin: 10,
  marginUnit: "px",
  maxRow: 0,
  minRow: 0,
  placeholderClass: "grid-stack-placeholder",
  placeholderText: "",
  removableOptions: { accept: "grid-stack-item", decline: "grid-stack-non-removable" },
  resizable: { handles: "se" },
  rtl: "auto"
  // **** same as not being set ****
  // disableDrag: false,
  // disableResize: false,
  // float: false,
  // handleClass: null,
  // removable: false,
  // staticGrid: false,
  //removable
};
class w {
}
const B = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class G {
}
function ye(a, e) {
  a.touches.length > 1 || (a.cancelable && a.preventDefault(), u.simulateMouseEvent(a.changedTouches[0], e));
}
function Ft(a, e) {
  a.cancelable && a.preventDefault(), u.simulateMouseEvent(a, e);
}
function ve(a) {
  G.touchHandled || (G.touchHandled = !0, ye(a, "mousedown"));
}
function be(a) {
  G.touchHandled && ye(a, "mousemove");
}
function we(a) {
  if (!G.touchHandled)
    return;
  G.pointerLeaveTimeout && (window.clearTimeout(G.pointerLeaveTimeout), delete G.pointerLeaveTimeout);
  const e = !!w.dragElement;
  ye(a, "mouseup"), e || ye(a, "click"), G.touchHandled = !1;
}
function _e(a) {
  a.pointerType !== "mouse" && a.target.releasePointerCapture(a.pointerId);
}
function Qe(a) {
  w.dragElement && a.pointerType !== "mouse" && Ft(a, "mouseenter");
}
function et(a) {
  w.dragElement && a.pointerType !== "mouse" && (G.pointerLeaveTimeout = window.setTimeout(() => {
    delete G.pointerLeaveTimeout, Ft(a, "mouseleave");
  }, 10));
}
class Ce {
  constructor(e, t, i) {
    this.host = e, this.dir = t, this.option = i, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${Ce.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), B && (this.el.addEventListener("touchstart", ve), this.el.addEventListener("pointerdown", _e)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), B && (this.el.removeEventListener("touchstart", ve), this.el.removeEventListener("pointerdown", _e)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), B && (this.el.addEventListener("touchmove", be), this.el.addEventListener("touchend", we)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), B && (this.el.removeEventListener("touchmove", be), this.el.removeEventListener("touchend", we)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel */
  _keyEvent(e) {
    var t, i;
    e.key === "Escape" && ((i = (t = this.host.gridstackNode) == null ? void 0 : t.grid) == null || i.engine.restoreInitial(), this._mouseUp(this.mouseDownEvent));
  }
  /** @internal */
  _triggerEvent(e, t) {
    return this.option[e] && this.option[e](t), this;
  }
}
Ce.prefix = "ui-resizable-";
class He {
  constructor() {
    this._eventRegister = {};
  }
  /**
   * Returns the current disabled state.
   * Note: Use enable()/disable() methods to change state as other operations need to happen.
   */
  get disabled() {
    return this._disabled;
  }
  /**
   * Register an event callback for the specified event.
   *
   * @param event - Event name to listen for
   * @param callback - Function to call when event occurs
   */
  on(e, t) {
    this._eventRegister[e] = t;
  }
  /**
   * Unregister an event callback for the specified event.
   *
   * @param event - Event name to stop listening for
   */
  off(e) {
    delete this._eventRegister[e];
  }
  /**
   * Enable this drag & drop implementation.
   * Subclasses should override to perform additional setup.
   */
  enable() {
    this._disabled = !1;
  }
  /**
   * Disable this drag & drop implementation.
   * Subclasses should override to perform additional cleanup.
   */
  disable() {
    this._disabled = !0;
  }
  /**
   * Destroy this drag & drop implementation and clean up resources.
   * Removes all event handlers and clears internal state.
   */
  destroy() {
    delete this._eventRegister;
  }
  /**
   * Trigger a registered event callback if one exists and the implementation is enabled.
   *
   * @param eventName - Name of the event to trigger
   * @param event - DOM event object to pass to the callback
   * @returns Result from the callback function, if any
   */
  triggerEvent(e, t) {
    if (!this.disabled && this._eventRegister && this._eventRegister[e])
      return this._eventRegister[e](t);
  }
}
class re extends He {
  // have to be public else complains for HTMLElementExtendOpt ?
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.rectScale = { x: 1, y: 1 }, this._ui = () => {
      const s = this.el.parentElement.getBoundingClientRect(), r = {
        width: this.originalRect.width,
        height: this.originalRect.height + this.scrolled,
        left: this.originalRect.left,
        top: this.originalRect.top - this.scrolled
      }, n = this.temporalRect || r;
      return {
        position: {
          left: (n.left - s.left) * this.rectScale.x,
          top: (n.top - s.top) * this.rectScale.y
        },
        size: {
          width: n.width * this.rectScale.x,
          height: n.height * this.rectScale.y
        }
        /* Gridstack ONLY needs position set above... keep around in case.
        element: [this.el], // The object representing the element to be resized
        helper: [], // TODO: not support yet - The object representing the helper that's being resized
        originalElement: [this.el],// we don't wrap here, so simplify as this.el //The object representing the original element before it is wrapped
        originalPosition: { // The position represented as { left, top } before the resizable is resized
          left: this.originalRect.left - containmentRect.left,
          top: this.originalRect.top - containmentRect.top
        },
        originalSize: { // The size represented as { width, height } before the resizable is resized
          width: this.originalRect.width,
          height: this.originalRect.height
        }
        */
      };
    }, this._mouseOver = this._mouseOver.bind(this), this._mouseOut = this._mouseOut.bind(this), this.enable(), this._setupAutoHide(this.option.autoHide), this._setupHandlers();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    super.enable(), this.el.classList.remove("ui-resizable-disabled"), this._setupAutoHide(this.option.autoHide);
  }
  disable() {
    super.disable(), this.el.classList.add("ui-resizable-disabled"), this._setupAutoHide(!1);
  }
  destroy() {
    this._removeHandlers(), this._setupAutoHide(!1), delete this.el, super.destroy();
  }
  updateOption(e) {
    const t = e.handles && e.handles !== this.option.handles, i = e.autoHide && e.autoHide !== this.option.autoHide;
    return Object.keys(e).forEach((s) => this.option[s] = e[s]), t && (this._removeHandlers(), this._setupHandlers()), i && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), w.overResizeElement === this && delete w.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    w.overResizeElement || w.dragElement || (w.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    w.overResizeElement === this && (delete w.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new Ce(this.el, e, {
      start: (t) => {
        this._resizeStart(t);
      },
      stop: (t) => {
        this._resizeStop(t);
      },
      move: (t) => {
        this._resizing(t, e);
      }
    })), this;
  }
  /** @internal */
  _resizeStart(e) {
    this.sizeToContent = u.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = u.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = u.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const i = u.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(i, this._ui()), this.triggerEvent("resize", i), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = u.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = re._originStyleProp.map((i) => this.el.style[i]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = u.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return re._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const i = this.startEvent, s = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, r = e.clientX - i.clientX, n = this.sizeToContent ? 0 : e.clientY - i.clientY;
    let o, h;
    t.indexOf("e") > -1 ? s.width += r : t.indexOf("w") > -1 && (s.width -= r, s.left += r, o = !0), t.indexOf("s") > -1 ? s.height += n : t.indexOf("n") > -1 && (s.height -= n, s.top += n, h = !0);
    const c = this._constrainSize(s.width, s.height, o, h);
    return Math.round(s.width) !== Math.round(c.width) && (t.indexOf("w") > -1 && (s.left += s.width - c.width), s.width = c.width), Math.round(s.height) !== Math.round(c.height) && (t.indexOf("n") > -1 && (s.top += s.height - c.height), s.height = c.height), s;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, i, s) {
    const r = this.option, n = (i ? r.maxWidthMoveLeft : r.maxWidth) || Number.MAX_SAFE_INTEGER, o = r.minWidth / this.rectScale.x || e, h = (s ? r.maxHeightMoveUp : r.maxHeight) || Number.MAX_SAFE_INTEGER, c = r.minHeight / this.rectScale.y || t, l = Math.min(n, Math.max(o, e)), d = Math.min(h, Math.max(c, t));
    return { width: l, height: d };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: i, top: s } = t.getBoundingClientRect();
      e = { left: i, top: s, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const i = this.temporalRect[t], s = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (i - e[t]) * s + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
re._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Js = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class ne extends He {
  constructor(e, t = {}) {
    var r;
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const i = (r = t == null ? void 0 : t.handle) == null ? void 0 : r.substring(1), s = e.gridstackNode;
    this.dragEls = !i || e.classList.contains(i) ? [e] : s != null && s.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), B && (e.addEventListener("touchstart", ve), e.addEventListener("pointerdown", _e));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), B && (t.removeEventListener("touchstart", ve), t.removeEventListener("pointerdown", _e));
    }), e || this.el.classList.add("ui-draggable-disabled"));
  }
  destroy() {
    this.dragTimeout && window.clearTimeout(this.dragTimeout), delete this.dragTimeout, this.mouseDownEvent && this._mouseUp(this.mouseDownEvent), this.disable(!0), delete this.el, delete this.helper, delete this.option, super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this;
  }
  /** @internal call when mouse goes down before a dragstart happens */
  _mouseDown(e) {
    if (!w.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Js) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete w.dragElement, delete w.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), B && (e.currentTarget.addEventListener("touchmove", be), e.currentTarget.addEventListener("touchend", we)), e.preventDefault(), document.activeElement && document.activeElement.blur(), w.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = u.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    var i;
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), w.pauseDrag) {
        const s = Number.isInteger(w.pauseDrag) ? w.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), s);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, w.dragElement = this;
      const s = (i = this.el.gridstackNode) == null ? void 0 : i.grid;
      s ? w.dropElement = s.el.ddElement.ddDroppable : delete w.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = u.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const r = u.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(r, this.ui()), this.triggerEvent("dragstart", r), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    var t, i;
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), B && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", be, !0), e.currentTarget.removeEventListener("touchend", we, !0)), this.dragging) {
      delete this.dragging, (t = this.el.gridstackNode) == null || delete t._origRotate, document.removeEventListener("keydown", this._keyEvent), ((i = w.dropElement) == null ? void 0 : i.el) === this.el.parentElement && delete w.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const s = u.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(s), this.triggerEvent("dragstop", s), w.dropElement && w.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete w.dragElement, delete w.dropElement, delete w.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    var s, r;
    const t = this.el.gridstackNode, i = (t == null ? void 0 : t.grid) || ((r = (s = w.dropElement) == null ? void 0 : s.el) == null ? void 0 : r.gridstack);
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), i == null || i.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && i && (e.key === "r" || e.key === "R")) {
      if (!u.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, i.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", u.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = u.cloneNode(this.el)), e.parentElement || u.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = ne.originStyleProp.map((t) => this.el.style[t]), e;
  }
  /** @internal set the fix position of the dragged item */
  _setupHelperStyle(e) {
    var i, s;
    this.helper.classList.add("ui-draggable-dragging"), (s = (i = this.el.gridstackNode) == null ? void 0 : i.grid) == null || s.el.classList.add("grid-stack-dragging");
    const t = this.helper.style;
    return t.pointerEvents = "none", t.width = this.dragOffset.width + "px", t.height = this.dragOffset.height + "px", t.willChange = "left, top", t.position = "fixed", this._dragFollow(e), t.transition = "none", setTimeout(() => {
      this.helper && (t.transition = null);
    }, 0), this;
  }
  /** @internal restore back the original style before dragging */
  _removeHelperStyle() {
    var t, i, s;
    this.helper.classList.remove("ui-draggable-dragging"), (i = (t = this.el.gridstackNode) == null ? void 0 : t.grid) == null || i.el.classList.remove("grid-stack-dragging");
    const e = (s = this.helper) == null ? void 0 : s.gridstackNode;
    if (!(e != null && e._isAboutToRemove) && this.dragElementOriginStyle) {
      const r = this.helper, n = this.dragElementOriginStyle.transition || null;
      r.style.transition = this.dragElementOriginStyle.transition = "none", ne.originStyleProp.forEach((o) => r.style[o] = this.dragElementOriginStyle[o] || null), setTimeout(() => r.style.transition = n, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, i = this.helper.style, s = this.dragOffset;
    i.left = (e.clientX + s.offsetLeft - t.left) * this.dragTransform.xScale + "px", i.top = (e.clientY + s.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, i) {
    let s = 0, r = 0;
    i && (s = this.dragTransform.xOffset, r = this.dragTransform.yOffset);
    const n = t.getBoundingClientRect();
    return {
      left: n.left,
      top: n.top,
      offsetLeft: -e.clientX + n.left - s,
      offsetTop: -e.clientY + n.top - r,
      width: n.width * this.dragTransform.xScale,
      height: n.height * this.dragTransform.yScale
    };
  }
  /** @internal TODO: set to public as called by DDDroppable! */
  ui() {
    const t = this.el.parentElement.getBoundingClientRect(), i = this.helper.getBoundingClientRect();
    return {
      position: {
        top: (i.top - t.top) * this.dragTransform.yScale,
        left: (i.left - t.left) * this.dragTransform.xScale
      }
      /* not used by GridStack for now...
      helper: [this.helper], //The object arr representing the helper that's being dragged.
      offset: { top: offset.top, left: offset.left } // Current offset position of the helper as { top, left } object.
      */
    };
  }
}
ne.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Zs extends He {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this._mouseEnter = this._mouseEnter.bind(this), this._mouseLeave = this._mouseLeave.bind(this), this.enable(), this._setupAccept();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), B && (this.el.addEventListener("pointerenter", Qe), this.el.addEventListener("pointerleave", et)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), B && (this.el.removeEventListener("pointerenter", Qe), this.el.removeEventListener("pointerleave", et)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!w.dragElement || !this._canDrop(w.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), w.dropElement && w.dropElement !== this && w.dropElement._mouseLeave(e, !0), w.dropElement = this;
    const t = u.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(w.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    var s;
    if (!w.dragElement || w.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const i = u.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(i, this._ui(w.dragElement)), this.triggerEvent("dropout", i), w.dropElement === this && (delete w.dropElement, !t)) {
      let r, n = this.el.parentElement;
      for (; !r && n; )
        r = (s = n.ddElement) == null ? void 0 : s.ddDroppable, n = n.parentElement;
      r && r._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = u.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(w.dragElement)), this.triggerEvent("drop", t);
  }
  /** @internal true if element matches the string/method accept option */
  _canDrop(e) {
    return e && (!this.accept || this.accept(e));
  }
  /** @internal */
  _setupAccept() {
    return this.option.accept ? (typeof this.option.accept == "string" ? this.accept = (e) => e.classList.contains(this.option.accept) || e.matches(this.option.accept) : this.accept = this.option.accept, this) : this;
  }
  /** @internal */
  _ui(e) {
    return {
      draggable: e.el,
      ...e.ui()
    };
  }
}
class Be {
  static init(e) {
    return e.ddElement || (e.ddElement = new Be(e)), e.ddElement;
  }
  constructor(e) {
    this.el = e;
  }
  on(e, t) {
    return this.ddDraggable && ["drag", "dragstart", "dragstop"].indexOf(e) > -1 ? this.ddDraggable.on(e, t) : this.ddDroppable && ["drop", "dropover", "dropout"].indexOf(e) > -1 ? this.ddDroppable.on(e, t) : this.ddResizable && ["resizestart", "resize", "resizestop"].indexOf(e) > -1 && this.ddResizable.on(e, t), this;
  }
  off(e) {
    return this.ddDraggable && ["drag", "dragstart", "dragstop"].indexOf(e) > -1 ? this.ddDraggable.off(e) : this.ddDroppable && ["drop", "dropover", "dropout"].indexOf(e) > -1 ? this.ddDroppable.off(e) : this.ddResizable && ["resizestart", "resize", "resizestop"].indexOf(e) > -1 && this.ddResizable.off(e), this;
  }
  setupDraggable(e) {
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new ne(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new re(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Zs(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Qs {
  /**
   * Enable/disable/configure resizing for grid elements.
   *
   * @param el - Grid item element(s) to configure
   * @param opts - Resize options or command ('enable', 'disable', 'destroy', 'option', or config object)
   * @param key - Option key when using 'option' command
   * @param value - Option value when using 'option' command
   * @returns this instance for chaining
   *
   * @example
   * dd.resizable(element, 'enable');  // Enable resizing
   * dd.resizable(element, 'option', 'minWidth', 100);  // Set minimum width
   */
  resizable(e, t, i, s) {
    return this._getDDElements(e, t).forEach((r) => {
      if (t === "disable" || t === "enable")
        r.ddResizable && r.ddResizable[t]();
      else if (t === "destroy")
        r.ddResizable && r.cleanResizable();
      else if (t === "option")
        r.setupResizable({ [i]: s });
      else {
        const o = r.el.gridstackNode.grid;
        let h = r.el.getAttribute("gs-resize-handles") || o.opts.resizable.handles || "e,s,se";
        h === "all" && (h = "n,e,s,w,se,sw,ne,nw");
        const c = !o.opts.alwaysShowResizeHandle;
        r.setupResizable({
          ...o.opts.resizable,
          handles: h,
          autoHide: c,
          start: t.start,
          stop: t.stop,
          resize: t.resize
        });
      }
    }), this;
  }
  /**
   * Enable/disable/configure dragging for grid elements.
   *
   * @param el - Grid item element(s) to configure
   * @param opts - Drag options or command ('enable', 'disable', 'destroy', 'option', or config object)
   * @param key - Option key when using 'option' command
   * @param value - Option value when using 'option' command
   * @returns this instance for chaining
   *
   * @example
   * dd.draggable(element, 'enable');  // Enable dragging
   * dd.draggable(element, {handle: '.drag-handle'});  // Configure drag handle
   */
  draggable(e, t, i, s) {
    return this._getDDElements(e, t).forEach((r) => {
      if (t === "disable" || t === "enable")
        r.ddDraggable && r.ddDraggable[t]();
      else if (t === "destroy")
        r.ddDraggable && r.cleanDraggable();
      else if (t === "option")
        r.setupDraggable({ [i]: s });
      else {
        const n = r.el.gridstackNode.grid;
        r.setupDraggable({
          ...n.opts.draggable,
          // containment: (grid.parentGridNode && grid.opts.dragOut === false) ? grid.el.parentElement : (grid.opts.draggable.containment || null),
          start: t.start,
          stop: t.stop,
          drag: t.drag
        });
      }
    }), this;
  }
  dragIn(e, t) {
    return this._getDDElements(e).forEach((i) => i.setupDraggable(t)), this;
  }
  droppable(e, t, i, s) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (r) => t._accept(r)), this._getDDElements(e, t).forEach((r) => {
      t === "disable" || t === "enable" ? r.ddDroppable && r.ddDroppable[t]() : t === "destroy" ? r.ddDroppable && r.cleanDroppable() : t === "option" ? r.setupDroppable({ [i]: s }) : r.setupDroppable(t);
    }), this;
  }
  /** true if element is droppable */
  isDroppable(e) {
    var t;
    return !!((t = e == null ? void 0 : e.ddElement) != null && t.ddDroppable && !e.ddElement.ddDroppable.disabled);
  }
  /** true if element is draggable */
  isDraggable(e) {
    var t;
    return !!((t = e == null ? void 0 : e.ddElement) != null && t.ddDraggable && !e.ddElement.ddDraggable.disabled);
  }
  /** true if element is draggable */
  isResizable(e) {
    var t;
    return !!((t = e == null ? void 0 : e.ddElement) != null && t.ddResizable && !e.ddElement.ddResizable.disabled);
  }
  on(e, t, i) {
    return this._getDDElements(e).forEach((s) => s.on(t, (r) => {
      i(r, w.dragElement ? w.dragElement.el : r.target, w.dragElement ? w.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((i) => i.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const i = e.gridstack || t !== "destroy" && t !== "disable", s = u.getElements(e);
    return s.length ? s.map((n) => n.ddElement || (i ? Be.init(n) : null)).filter((n) => n) : [];
  }
}
/*!
 * GridStack 12.3.2
 * https://gridstackjs.com/
 *
 * Copyright (c) 2021-2025  Alain Dumesny
 * see root license https://github.com/gridstack/gridstack.js/tree/master/LICENSE
 */
const T = new Qs();
class v {
  /**
   * initializing the HTML element, or selector string, into a grid will return the grid. Calling it again will
   * simply return the existing instance (ignore any passed options). There is also an initAll() version that support
   * multiple grids initialization at once. Or you can use addGrid() to create the entire grid from JSON.
   * @param options grid options (optional)
   * @param elOrString element or CSS selector (first one used) to convert to a grid (default to '.grid-stack' class selector)
   *
   * @example
   * const grid = GridStack.init();
   *
   * Note: the HTMLElement (of type GridHTMLElement) will store a `gridstack: GridStack` value that can be retrieve later
   * const grid = document.querySelector('.grid-stack').gridstack;
   */
  static init(e = {}, t = ".grid-stack") {
    if (typeof document > "u")
      return null;
    const i = v.getGridElement(t);
    return i ? (i.gridstack || (i.gridstack = new v(i, u.cloneDeep(e))), i.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.` : "GridStack.init() no grid element was passed."), null);
  }
  /**
   * Will initialize a list of elements (given a selector) and return an array of grids.
   * @param options grid options (optional)
   * @param selector elements selector to convert to grids (default to '.grid-stack' class selector)
   *
   * @example
   * const grids = GridStack.initAll();
   * grids.forEach(...)
   */
  static initAll(e = {}, t = ".grid-stack") {
    const i = [];
    return typeof document > "u" || (v.getGridElements(t).forEach((s) => {
      s.gridstack || (s.gridstack = new v(s, u.cloneDeep(e))), i.push(s.gridstack);
    }), i.length === 0 && console.error('GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.`)), i;
  }
  /**
   * call to create a grid with the given options, including loading any children from JSON structure. This will call GridStack.init(), then
   * grid.load() on any passed children (recursively). Great alternative to calling init() if you want entire grid to come from
   * JSON serialized data, including options.
   * @param parent HTML element parent to the grid
   * @param opt grids options used to initialize the grid, and list of children
   */
  static addGrid(e, t = {}) {
    if (!e)
      return null;
    let i = e;
    if (i.gridstack) {
      const n = i.gridstack;
      return t && (n.opts = { ...n.opts, ...t }), t.children !== void 0 && n.load(t.children), n;
    }
    return (!e.classList.contains("grid-stack") || v.addRemoveCB) && (v.addRemoveCB ? i = v.addRemoveCB(e, t, !0, !0) : i = u.createDiv(["grid-stack", t.class], e)), v.init(t, i);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    v.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = u.createDiv([this.opts.placeholderClass, M.itemClass, this.opts.itemClass]);
      const e = u.createDiv(["placeholder-content"], this._placeholder);
      this.opts.placeholderText && (e.textContent = this.opts.placeholderText);
    }
    return this._placeholder;
  }
  /**
   * Construct a grid item from the given element and options
   * @param el the HTML element tied to this grid after it's been initialized
   * @param opts grid options - public for classes to access, but use methods to modify!
   */
  constructor(e, t = {}) {
    var c;
    this.el = e, this.opts = t, this.animationDelay = 310, this._gsEventHandler = {}, this._extraDragRow = 0, this.dragTransform = { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 }, e.gridstack = this, this.opts = t = t || {}, e.classList.contains("grid-stack") || this.el.classList.add("grid-stack"), t.row && (t.minRow = t.maxRow = t.row, delete t.row);
    const i = u.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const s = t.columnOpts;
    if (s) {
      const l = s.breakpoints;
      !s.columnWidth && !(l != null && l.length) ? delete t.columnOpts : (s.columnMax = s.columnMax || 12, (l == null ? void 0 : l.length) > 1 && l.sort((d, f) => (f.w || 0) - (d.w || 0)));
    }
    const r = {
      ...u.cloneDeep(M),
      column: u.toNumber(e.getAttribute("gs-column")) || M.column,
      minRow: i || u.toNumber(e.getAttribute("gs-min-row")) || M.minRow,
      maxRow: i || u.toNumber(e.getAttribute("gs-max-row")) || M.maxRow,
      staticGrid: u.toBool(e.getAttribute("gs-static")) || M.staticGrid,
      sizeToContent: u.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || M.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || M.removableOptions.accept,
        decline: M.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (r.animate = u.toBool(e.getAttribute("gs-animate"))), t = u.defaults(t, r), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const n = this.el.closest("." + M.itemClass), o = n == null ? void 0 : n.gridstackNode;
    if (o && (o.subGrid = this, this.parentGridNode = o, this.el.classList.add("grid-stack-nested"), o.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== M.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const l = t.cellHeight;
      delete t.cellHeight, this.cellHeight(l);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = B), this._setStaticClass();
    const h = t.engineClass || v.engineClass || $;
    if (this.engine = new h({
      column: this.getColumn(),
      float: t.float,
      maxRow: t.maxRow,
      onChange: (l) => {
        l.forEach((d) => {
          const f = d.el;
          f && (d._removeDOM ? (f && f.remove(), delete d._removeDOM) : this._writePosAttr(f, d));
        }), this._updateContainerHeight();
      }
    }), t.auto && (this.batchUpdate(), this.engine._loading = !0, this.getGridItems().forEach((l) => this._prepareElement(l)), delete this.engine._loading, this.batchUpdate(!1)), t.children) {
      const l = t.children;
      delete t.children, l.length && this.load(l);
    }
    this.setAnimation(), t.subGridDynamic && !w.pauseDrag && (w.pauseDrag = !0), ((c = t.draggable) == null ? void 0 : c.pause) !== void 0 && (w.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
  }
  _updateColumnVar(e = this.opts) {
    this.el.classList.add("gs-" + e.column), typeof e.column == "number" && this.el.style.setProperty("--gs-column-width", `${100 / e.column}%`);
  }
  /**
   * add a new widget and returns it.
   *
   * Widget will be always placed even if result height is more than actual grid height.
   * You need to use `willItFit()` before calling addWidget for additional check.
   * See also `makeWidget(el)` for DOM element.
   *
   * @example
   * const grid = GridStack.init();
   * grid.addWidget({w: 3, content: 'hello'});
   *
   * @param w GridStackWidget definition. used MakeWidget(el) if you have dom element instead.
   */
  addWidget(e) {
    if (!e)
      return;
    if (typeof e == "string") {
      console.error("V11: GridStack.addWidget() does not support string anymore. see #2736");
      return;
    }
    if (e.ELEMENT_NODE)
      return console.error("V11: GridStack.addWidget() does not support HTMLElement anymore. use makeWidget()"), this.makeWidget(e);
    let t, i = e;
    if (i.grid = this, i.el ? t = i.el : v.addRemoveCB ? t = v.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(i), !t)
      return;
    if (i = t.gridstackNode, i && t.parentElement === this.el && this.engine.nodes.find((r) => r._id === i._id))
      return t;
    const s = this._readAttr(t);
    return u.defaults(e, s), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
  }
  /**
   * Create the default grid item divs and content (possibly lazy loaded) by using GridStack.renderCB().
   *
   * @param n GridStackNode definition containing widget configuration
   * @returns the created HTML element with proper grid item structure
   *
   * @example
   * const element = grid.createWidgetDivs({ w: 2, h: 1, content: 'Hello World' });
   */
  createWidgetDivs(e) {
    const t = u.createDiv(["grid-stack-item", this.opts.itemClass]), i = u.createDiv(["grid-stack-item-content"], t);
    return u.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([s]) => {
      var r, n;
      s.isIntersecting && ((r = e.visibleObservable) == null || r.disconnect(), delete e.visibleObservable, v.renderCB(i, e), (n = e.grid) == null || n.prepareDragDrop(e.el));
    }), window.setTimeout(() => {
      var s;
      return (s = e.visibleObservable) == null ? void 0 : s.observe(t);
    })) : v.renderCB(i, e), t;
  }
  /**
   * Convert an existing gridItem element into a sub-grid with the given (optional) options, else inherit them
   * from the parent's subGrid options.
   * @param el gridItem element to convert
   * @param ops (optional) sub-grid options, else default to node, then parent settings, else defaults
   * @param nodeToAdd (optional) node to add to the newly created sub grid (used when dragging over existing regular item)
   * @param saveContent if true (default) the html inside .grid-stack-content will be saved to child widget
   * @returns newly created grid
   */
  makeSubGrid(e, t, i, s = !0) {
    var p, m, y;
    let r = e.gridstackNode;
    if (r || (r = this.makeWidget(e).gridstackNode), (p = r.subGrid) != null && p.el)
      return r.subGrid;
    let n, o = this;
    for (; o && !n; )
      n = (m = o.opts) == null ? void 0 : m.subGridOpts, o = (y = o.parentGridNode) == null ? void 0 : y.grid;
    t = u.cloneDeep({
      // by default sub-grid inherit from us | parent, other than id, children, etc...
      ...this.opts,
      id: void 0,
      children: void 0,
      column: "auto",
      columnOpts: void 0,
      layout: "list",
      subGridOpts: void 0,
      ...n || {},
      ...t || r.subGridOpts || {}
    }), r.subGridOpts = t;
    let h;
    t.column === "auto" && (h = !0, t.column = Math.max(r.w || 1, (i == null ? void 0 : i.w) || 1), delete t.columnOpts);
    let c = r.el.querySelector(".grid-stack-item-content"), l, d;
    if (s && (this._removeDD(r.el), d = { ...r, x: 0, y: 0 }, u.removeInternalForSave(d), delete d.subGridOpts, r.content && (d.content = r.content, delete r.content), v.addRemoveCB ? l = v.addRemoveCB(this.el, d, !0, !1) : (l = u.createDiv(["grid-stack-item"]), l.appendChild(c), c = u.createDiv(["grid-stack-item-content"], r.el)), this.prepareDragDrop(r.el)), i) {
      const b = h ? t.column : r.w, N = r.h + i.h, x = r.el.style;
      x.transition = "none", this.update(r.el, { w: b, h: N }), setTimeout(() => x.transition = null);
    }
    const f = r.subGrid = v.addGrid(c, t);
    return i != null && i._moving && (f._isTemp = !0), h && (f._autoColumn = !0), s && f.makeWidget(l, d), i && (i._moving ? window.setTimeout(() => u.simulateMouseEvent(i._event, "mouseenter", f.el), 0) : f.makeWidget(r.el, r)), this.resizeToContentCheck(!1, r), f;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    var i;
    const t = (i = this.parentGridNode) == null ? void 0 : i.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((s) => {
      s.x += this.parentGridNode.x, s.y += this.parentGridNode.y, t.makeWidget(s.el, s);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => u.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
  }
  /**
   * saves the current layout returning a list of widgets for serialization which might include any nested grids.
   * @param saveContent if true (default) the latest html inside .grid-stack-content will be saved to GridStackWidget.content field, else it will
   * be removed.
   * @param saveGridOpt if true (default false), save the grid options itself, so you can call the new GridStack.addGrid()
   * to recreate everything from scratch. GridStackOptions.children would then contain the widget list instead.
   * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
   * @param column if provided, the grid will be saved for the given column size (IFF we have matching internal saved layout, or current layout).
   * Otherwise it will use the largest possible layout (say 12 even if rendering at 1 column) so we can restore to all layouts.
   * NOTE: if you want to save to currently display layout, pass this.getColumn() as column.
   * NOTE2: nested grids will ALWAYS save to the container size to be in sync with parent.
   * @returns list of widgets or full grid option, including .children list of widgets
   */
  save(e = !0, t = !1, i = v.saveCB, s) {
    const r = this.engine.save(e, i, s);
    if (r.forEach((n) => {
      var o;
      if (e && n.el && !n.subGrid && !i) {
        const h = n.el.querySelector(".grid-stack-item-content");
        n.content = h == null ? void 0 : h.innerHTML, n.content || delete n.content;
      } else if (!e && !i && delete n.content, (o = n.subGrid) != null && o.el) {
        const h = n.w || n.subGrid.getColumn(), c = n.subGrid.save(e, t, i, h);
        n.subGridOpts = t ? c : { children: c }, delete n.subGrid;
      }
      delete n.el;
    }), t) {
      const n = u.cloneDeep(this.opts);
      n.marginBottom === n.marginTop && n.marginRight === n.marginLeft && n.marginTop === n.marginRight && (n.margin = n.marginTop, delete n.marginTop, delete n.marginRight, delete n.marginBottom, delete n.marginLeft), n.rtl === (this.el.style.direction === "rtl") && (n.rtl = "auto"), this._isAutoCellHeight && (n.cellHeight = "auto"), this._autoColumn && (n.column = "auto");
      const o = n._alwaysShowResizeHandle;
      return delete n._alwaysShowResizeHandle, o !== void 0 ? n.alwaysShowResizeHandle = o : delete n.alwaysShowResizeHandle, u.removeInternalAndSame(n, M), n.children = r, n;
    }
    return r;
  }
  /**
   * Load widgets from a list. This will call update() on each (matching by id) or add/remove widgets that are not there.
   * Used to restore a grid layout for a saved layout list (see `save()`).
   *
   * @param items list of widgets definition to update/create
   * @param addRemove boolean (default true) or callback method can be passed to control if and how missing widgets can be added/removed, giving
   * the user control of insertion.
   * @returns the grid instance for chaining
   *
   * @example
   * // Basic usage with saved layout
   * const savedLayout = grid.save(); // Save current layout
   * // ... later restore it
   * grid.load(savedLayout);
   *
   * // Load with custom add/remove callback
   * grid.load(layout, (items, grid, add) => {
   *   if (add) {
   *     // Custom logic for adding new widgets
   *     items.forEach(item => {
   *       const el = document.createElement('div');
   *       el.innerHTML = item.content || '';
   *       grid.addWidget(el, item);
   *     });
   *   } else {
   *     // Custom logic for removing widgets
   *     items.forEach(item => grid.removeWidget(item.el));
   *   }
   * });
   *
   * // Load without adding/removing missing widgets
   * grid.load(layout, false);
   *
   * @see {@link http://gridstackjs.com/demo/serialization.html} for complete example
   */
  load(e, t = v.addRemoveCB || !0) {
    e = u.cloneDeep(e);
    const i = this.getColumn();
    e.forEach((l) => {
      l.w = l.w || l.minW || 1, l.h = l.h || l.minH || 1;
    }), e = u.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let s = 0;
    e.forEach((l) => {
      s = Math.max(s, (l.x || 0) + l.w);
    }), s > this.engine.defaultColumn && (this.engine.defaultColumn = s), s > i && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(s, i, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, s, !0));
    const r = v.addRemoveCB;
    typeof t == "function" && (v.addRemoveCB = t);
    const n = [];
    this.batchUpdate();
    const o = !this.engine.nodes.length, h = o && this.opts.animate;
    h && this.setAnimation(!1), !o && t && [...this.engine.nodes].forEach((d) => {
      if (!d.id)
        return;
      u.find(e, d.id) || (v.addRemoveCB && v.addRemoveCB(this.el, d, !1, !1), n.push(d), this.removeWidget(d.el, !0, !1));
    }), this.engine._loading = !0;
    const c = [];
    return this.engine.nodes = this.engine.nodes.filter((l) => u.find(e, l.id) ? (c.push(l), !1) : !0), e.forEach((l) => {
      var f;
      const d = u.find(c, l.id);
      if (d) {
        if (u.shouldSizeToContent(d) && (l.h = d.h), this.engine.nodeBoundFix(l), (l.autoPosition || l.x === void 0 || l.y === void 0) && (l.w = l.w || d.w, l.h = l.h || d.h, this.engine.findEmptyPosition(l)), this.engine.nodes.push(d), u.samePos(d, l) && this.engine.nodes.length > 1 && (this.moveNode(d, { ...l, forceCollide: !0 }), u.copyPos(l, d)), this.update(d.el, l), (f = l.subGridOpts) != null && f.children) {
          const p = d.el.querySelector(".grid-stack");
          p && p.gridstack && p.gridstack.load(l.subGridOpts.children);
        }
      } else t && this.addWidget(l);
    }), delete this.engine._loading, this.engine.removedNodes = n, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, r ? v.addRemoveCB = r : delete v.addRemoveCB, h && this.setAnimation(!0, !0), this;
  }
  /**
   * use before calling a bunch of `addWidget()` to prevent un-necessary relayouts in between (more efficient)
   * and get a single event callback. You will see no changes until `batchUpdate(false)` is called.
   */
  batchUpdate(e = !0) {
    return this.engine.batchUpdate(e), e || (this._updateContainerHeight(), this._triggerRemoveEvent(), this._triggerAddEvent(), this._triggerChangeEvent()), this;
  }
  /**
   * Gets the current cell height in pixels. This takes into account the unit type and converts to pixels if necessary.
   *
   * @param forcePixel if true, forces conversion to pixels even when cellHeight is specified in other units
   * @returns the cell height in pixels
   *
   * @example
   * const height = grid.getCellHeight();
   * console.log('Cell height:', height, 'px');
   *
   * // Force pixel conversion
   * const pixelHeight = grid.getCellHeight(true);
   */
  getCellHeight(e = !1) {
    if (this.opts.cellHeight && this.opts.cellHeight !== "auto" && (!e || !this.opts.cellHeightUnit || this.opts.cellHeightUnit === "px"))
      return this.opts.cellHeight;
    if (this.opts.cellHeightUnit === "rem")
      return this.opts.cellHeight * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (this.opts.cellHeightUnit === "em")
      return this.opts.cellHeight * parseFloat(getComputedStyle(this.el).fontSize);
    if (this.opts.cellHeightUnit === "cm")
      return this.opts.cellHeight * (96 / 2.54);
    if (this.opts.cellHeightUnit === "mm")
      return this.opts.cellHeight * (96 / 2.54) / 10;
    const t = this.el.querySelector("." + this.opts.itemClass);
    if (t) {
      const s = u.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / s);
    }
    const i = parseInt(this.el.getAttribute("gs-current-row"));
    return i ? Math.round(this.el.getBoundingClientRect().height / i) : this.opts.cellHeight;
  }
  /**
   * Update current cell height - see `GridStackOptions.cellHeight` for format by updating eh Browser CSS variable.
   *
   * @param val the cell height. Options:
   *   - `undefined`: cells content will be made square (match width minus margin)
   *   - `0`: the CSS will be generated by the application instead
   *   - number: height in pixels
   *   - string: height with units (e.g., '70px', '5rem', '2em')
   * @returns the grid instance for chaining
   *
   * @example
   * grid.cellHeight(100);     // 100px height
   * grid.cellHeight('70px');  // explicit pixel height
   * grid.cellHeight('5rem');  // relative to root font size
   * grid.cellHeight(grid.cellWidth() * 1.2); // aspect ratio
   * grid.cellHeight('auto');  // auto-size based on content
   */
  cellHeight(e) {
    if (e !== void 0 && this._isAutoCellHeight !== (e === "auto") && (this._isAutoCellHeight = e === "auto", this._updateResizeEvent()), (e === "initial" || e === "auto") && (e = void 0), e === void 0) {
      const i = -this.opts.marginRight - this.opts.marginLeft + this.opts.marginTop + this.opts.marginBottom;
      e = this.cellWidth() + i;
    }
    const t = u.parseHeight(e);
    return this.opts.cellHeightUnit === t.unit && this.opts.cellHeight === t.h ? this : (this.opts.cellHeightUnit = t.unit, this.opts.cellHeight = t.h, this.el.style.setProperty("--gs-cell-height", `${this.opts.cellHeight}${this.opts.cellHeightUnit}`), this._updateContainerHeight(), this.resizeToContentCheck(), this);
  }
  /** Gets current cell width. */
  /**
   * Gets the current cell width in pixels. This is calculated based on the grid container width divided by the number of columns.
   *
   * @returns the cell width in pixels
   *
   * @example
   * const width = grid.cellWidth();
   * console.log('Cell width:', width, 'px');
   *
   * // Use cell width to calculate widget dimensions
   * const widgetWidth = width * 3; // For a 3-column wide widget
   */
  cellWidth() {
    return this._widthOrContainer() / this.getColumn();
  }
  /** return our expected width (or parent) , and optionally of window for dynamic column check */
  _widthOrContainer(e = !1) {
    var t;
    return e && ((t = this.opts.columnOpts) != null && t.breakpointForWindow) ? window.innerWidth : this.el.clientWidth || this.el.parentElement.clientWidth || window.innerWidth;
  }
  /** checks for dynamic column count for our current size, returning true if changed */
  checkDynamicColumn() {
    var r, n;
    const e = this.opts.columnOpts;
    if (!e || !e.columnWidth && !((r = e.breakpoints) != null && r.length))
      return !1;
    const t = this.getColumn();
    let i = t;
    const s = this._widthOrContainer(!0);
    if (e.columnWidth)
      i = Math.min(Math.round(s / e.columnWidth) || 1, e.columnMax);
    else {
      i = e.columnMax;
      let o = 0;
      for (; o < e.breakpoints.length && s <= e.breakpoints[o].w; )
        i = e.breakpoints[o++].c || t;
    }
    if (i !== t) {
      const o = (n = e.breakpoints) == null ? void 0 : n.find((h) => h.c === i);
      return this.column(i, (o == null ? void 0 : o.layout) || e.layout), !0;
    }
    return !1;
  }
  /**
   * Re-layout grid items to reclaim any empty space. This is useful after removing widgets
   * or when you want to optimize the layout.
   *
   * @param layout layout type. Options:
   *   - 'compact' (default): might re-order items to fill any empty space
   *   - 'list': keep the widget left->right order the same, even if that means leaving an empty slot if things don't fit
   * @param doSort re-sort items first based on x,y position. Set to false to do your own sorting ahead (default: true)
   * @returns the grid instance for chaining
   *
   * @example
   * // Compact layout after removing widgets
   * grid.removeWidget('.widget-to-remove');
   * grid.compact();
   *
   * // Use list layout (preserve order)
   * grid.compact('list');
   *
   * // Compact without sorting first
   * grid.compact('compact', false);
   */
  compact(e = "compact", t = !0) {
    return this.engine.compact(e, t), this._triggerChangeEvent(), this;
  }
  /**
   * Set the number of columns in the grid. Will update existing widgets to conform to new number of columns,
   * as well as cache the original layout so you can revert back to previous positions without loss.
   *
   * Requires `gridstack-extra.css` or `gridstack-extra.min.css` for [2-11] columns,
   * else you will need to generate correct CSS.
   * See: https://github.com/gridstack/gridstack.js#change-grid-columns
   *
   * @param column Integer > 0 (default 12)
   * @param layout specify the type of re-layout that will happen. Options:
   *   - 'moveScale' (default): scale widget positions and sizes
   *   - 'move': keep widget sizes, only move positions
   *   - 'scale': keep widget positions, only scale sizes
   *   - 'none': don't change widget positions or sizes
   *   Note: items will never be outside of the current column boundaries.
   *   Ignored for `column=1` as we always want to vertically stack.
   * @returns the grid instance for chaining
   *
   * @example
   * // Change to 6 columns with default scaling
   * grid.column(6);
   *
   * // Change to 4 columns, only move positions
   * grid.column(4, 'move');
   *
   * // Single column layout (vertical stack)
   * grid.column(1);
   */
  column(e, t = "moveScale") {
    if (!e || e < 1 || this.opts.column === e)
      return this;
    const i = this.getColumn();
    return this.opts.column = e, this.engine ? (this.engine.column = e, this.el.classList.remove("gs-" + i), this._updateColumnVar(), this.engine.columnChanged(i, e, t), this._isAutoCellHeight && this.cellHeight(), this.resizeToContentCheck(!0), this._ignoreLayoutsNodeChange = !0, this._triggerChangeEvent(), delete this._ignoreLayoutsNodeChange, this) : (this.responseLayout = t, this);
  }
  /**
   * Get the number of columns in the grid (default 12).
   *
   * @returns the current number of columns in the grid
   *
   * @example
   * const columnCount = grid.getColumn(); // returns 12 by default
   */
  getColumn() {
    return this.opts.column;
  }
  /**
   * Returns an array of grid HTML elements (no placeholder) - used to iterate through our children in DOM order.
   * This method excludes placeholder elements and returns only actual grid items.
   *
   * @returns array of GridItemHTMLElement instances representing all grid items
   *
   * @example
   * const items = grid.getGridItems();
   * items.forEach(item => {
   *   console.log('Item ID:', item.gridstackNode.id);
   * });
   */
  getGridItems() {
    return Array.from(this.el.children).filter((e) => e.matches("." + this.opts.itemClass) && !e.matches("." + this.opts.placeholderClass));
  }
  /**
   * Returns true if change callbacks should be ignored due to column change, sizeToContent, loading, etc.
   * This is useful for callers who want to implement dirty flag functionality.
   *
   * @returns true if change callbacks are currently being ignored
   *
   * @example
   * if (!grid.isIgnoreChangeCB()) {
   *   // Process the change event
   *   console.log('Grid layout changed');
   * }
   */
  isIgnoreChangeCB() {
    return this._ignoreLayoutsNodeChange;
  }
  /**
   * Destroys a grid instance. DO NOT CALL any methods or access any vars after this as it will free up members.
   * @param removeDOM if `false` grid and items HTML elements will not be removed from the DOM (Optional. Default `true`).
   */
  destroy(e = !0) {
    var t;
    if (this.el)
      return this.offAll(), this._updateResizeEvent(!0), this.setStatic(!0, !1), this.setAnimation(!1), e ? this.el.parentNode.removeChild(this.el) : (this.removeAll(e), this.el.removeAttribute("gs-current-row")), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, delete this.opts, (t = this._placeholder) == null || delete t.gridstackNode, delete this._placeholder, delete this.engine, delete this.el.gridstack, delete this.el, this;
  }
  /**
   * Enable/disable floating widgets (default: `false`). When enabled, widgets can float up to fill empty spaces.
   * See [example](http://gridstackjs.com/demo/float.html)
   *
   * @param val true to enable floating, false to disable
   * @returns the grid instance for chaining
   *
   * @example
   * grid.float(true);  // Enable floating
   * grid.float(false); // Disable floating (default)
   */
  float(e) {
    return this.opts.float !== e && (this.opts.float = this.engine.float = e, this._triggerChangeEvent()), this;
  }
  /**
   * Get the current float mode setting.
   *
   * @returns true if floating is enabled, false otherwise
   *
   * @example
   * const isFloating = grid.getFloat();
   * console.log('Floating enabled:', isFloating);
   */
  getFloat() {
    return this.engine.float;
  }
  /**
   * Get the position of the cell under a pixel on screen.
   * @param position the position of the pixel to resolve in
   * absolute coordinates, as an object with top and left properties
   * @param useDocRelative if true, value will be based on document position vs parent position (Optional. Default false).
   * Useful when grid is within `position: relative` element
   *
   * Returns an object with properties `x` and `y` i.e. the column and row in the grid.
   */
  getCellFromPixel(e, t = !1) {
    const i = this.el.getBoundingClientRect();
    let s;
    t ? s = { top: i.top + document.documentElement.scrollTop, left: i.left } : s = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const r = e.left - s.left, n = e.top - s.top, o = i.width / this.getColumn(), h = i.height / parseInt(this.el.getAttribute("gs-current-row"));
    return { x: Math.floor(r / o), y: Math.floor(n / h) };
  }
  /**
   * Returns the current number of rows, which will be at least `minRow` if set.
   * The row count is based on the highest positioned widget in the grid.
   *
   * @returns the current number of rows in the grid
   *
   * @example
   * const rowCount = grid.getRow();
   * console.log('Grid has', rowCount, 'rows');
   */
  getRow() {
    return Math.max(this.engine.getRow(), this.opts.minRow || 0);
  }
  /**
   * Checks if the specified rectangular area is empty (no widgets occupy any part of it).
   *
   * @param x the x coordinate (column) of the area to check
   * @param y the y coordinate (row) of the area to check
   * @param w the width in columns of the area to check
   * @param h the height in rows of the area to check
   * @returns true if the area is completely empty, false if any widget overlaps
   *
   * @example
   * // Check if a 2x2 area at position (1,1) is empty
   * if (grid.isAreaEmpty(1, 1, 2, 2)) {
   *   console.log('Area is available for placement');
   * }
   */
  isAreaEmpty(e, t, i, s) {
    return this.engine.isAreaEmpty(e, t, i, s);
  }
  /**
   * If you add elements to your grid by hand (or have some framework creating DOM), you have to tell gridstack afterwards to make them widgets.
   * If you want gridstack to add the elements for you, use `addWidget()` instead.
   * Makes the given element a widget and returns it.
   *
   * @param els widget or single selector to convert.
   * @param options widget definition to use instead of reading attributes or using default sizing values
   * @returns the converted GridItemHTMLElement
   *
   * @example
   * const grid = GridStack.init();
   *
   * // Create HTML content manually, possibly looking like:
   * // <div id="item-1" gs-x="0" gs-y="0" gs-w="3" gs-h="2"></div>
   * grid.el.innerHTML = '<div id="item-1" gs-w="3"></div><div id="item-2"></div>';
   *
   * // Convert existing elements to widgets
   * grid.makeWidget('#item-1'); // Uses gs-* attributes from DOM
   * grid.makeWidget('#item-2', {w: 2, h: 1, content: 'Hello World'});
   *
   * // Or pass DOM element directly
   * const element = document.getElementById('item-3');
   * grid.makeWidget(element, {x: 0, y: 1, w: 4, h: 2});
   */
  makeWidget(e, t) {
    const i = v.getElement(e);
    if (!i || i.gridstackNode)
      return i;
    i.parentElement || this.el.appendChild(i), this._prepareElement(i, !0, t);
    const s = i.gridstackNode;
    this._updateContainerHeight(), s.subGridOpts && this.makeSubGrid(i, s.subGridOpts, void 0, !1);
    let r;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (r = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), r && delete this._ignoreLayoutsNodeChange, i;
  }
  on(e, t) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((s) => this.on(s, t)), this) : (e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable" ? (e === "enable" || e === "disable" ? this._gsEventHandler[e] = (s) => t(s) : this._gsEventHandler[e] = (s) => {
      s.detail && t(s, s.detail);
    }, this.el.addEventListener(e, this._gsEventHandler[e])) : e === "drag" || e === "dragstart" || e === "dragstop" || e === "resizestart" || e === "resize" || e === "resizestop" || e === "dropped" || e === "resizecontent" ? this._gsEventHandler[e] = t : console.error("GridStack.on(" + e + ") event not supported"), this);
  }
  /**
   * unsubscribe from the 'on' event GridStackEvent
   * @param name of the event (see possible values) or list of names space separated
   */
  off(e) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((i) => this.off(i)), this) : ((e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable") && this._gsEventHandler[e] && this.el.removeEventListener(e, this._gsEventHandler[e]), delete this._gsEventHandler[e], this);
  }
  /**
   * Remove all event handlers from the grid. This is useful for cleanup when destroying a grid.
   *
   * @returns the grid instance for chaining
   *
   * @example
   * grid.offAll(); // Remove all event listeners
   */
  offAll() {
    return Object.keys(this._gsEventHandler).forEach((e) => this.off(e)), this;
  }
  /**
   * Removes widget from the grid.
   * @param el  widget or selector to modify
   * @param removeDOM if `false` DOM element won't be removed from the tree (Default? true).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeWidget(e, t = !0, i = !0) {
    return e ? (v.getElements(e).forEach((s) => {
      if (s.parentElement && s.parentElement !== this.el)
        return;
      let r = s.gridstackNode;
      r || (r = this.engine.nodes.find((n) => s === n.el)), r && (t && v.addRemoveCB && v.addRemoveCB(this.el, r, !1, !1), delete s.gridstackNode, this._removeDD(s), this.engine.removeNode(r, t, i), t && s.parentElement && s.remove());
    }), i && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((i) => {
      e && v.addRemoveCB && v.addRemoveCB(this.el, i, !1, !1), delete i.el.gridstackNode, this.opts.staticGrid || this._removeDD(i.el);
    }), this.engine.removeAll(e, t), t && this._triggerRemoveEvent(), this;
  }
  /**
   * Toggle the grid animation state.  Toggles the `grid-stack-animate` class.
   * @param doAnimate if true the grid will animate.
   * @param delay if true setting will be set on next event loop.
   */
  setAnimation(e = this.opts.animate, t) {
    return t ? setTimeout(() => {
      this.opts && this.setAnimation(e);
    }) : e ? this.el.classList.add("grid-stack-animate") : this.el.classList.remove("grid-stack-animate"), this.opts.animate = e, this;
  }
  /** @internal */
  hasAnimationCSS() {
    return this.el.classList.contains("grid-stack-animate");
  }
  /**
   * Toggle the grid static state, which permanently removes/add Drag&Drop support, unlike disable()/enable() that just turns it off/on.
   * Also toggle the grid-stack-static class.
   * @param val if true the grid become static.
   * @param updateClass true (default) if css class gets updated
   * @param recurse true (default) if sub-grids also get updated
   */
  setStatic(e, t = !0, i = !0) {
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((s) => {
      this.prepareDragDrop(s.el), s.subGrid && i && s.subGrid.setStatic(e, t, i);
    }), t && this._setStaticClass(), this);
  }
  /**
   * Updates the passed in options on the grid (similar to update(widget) for for the grid options).
   * @param options PARTIAL grid options to update - only items specified will be updated.
   * NOTE: not all options updating are currently supported (lot of code, unlikely to change)
   */
  updateOptions(e) {
    var i;
    const t = this.opts;
    return e === t ? this : (e.acceptWidgets !== void 0 && (t.acceptWidgets = e.acceptWidgets, this._setupAcceptWidget()), e.animate !== void 0 && this.setAnimation(e.animate), e.cellHeight && this.cellHeight(e.cellHeight), e.class !== void 0 && e.class !== t.class && (t.class && this.el.classList.remove(t.class), e.class && this.el.classList.add(e.class)), e.columnOpts ? (this.opts.columnOpts = e.columnOpts, this.checkDynamicColumn()) : e.columnOpts === null && this.opts.columnOpts ? (delete this.opts.columnOpts, this._updateResizeEvent()) : typeof e.column == "number" && this.column(e.column), e.margin !== void 0 && this.margin(e.margin), e.staticGrid !== void 0 && this.setStatic(e.staticGrid), e.disableDrag !== void 0 && !e.staticGrid && this.enableMove(!e.disableDrag), e.disableResize !== void 0 && !e.staticGrid && this.enableResize(!e.disableResize), e.float !== void 0 && this.float(e.float), e.row !== void 0 ? (t.minRow = t.maxRow = t.row = e.row, this._updateContainerHeight()) : (e.minRow !== void 0 && (t.minRow = e.minRow, this._updateContainerHeight()), e.maxRow !== void 0 && (t.maxRow = e.maxRow)), (i = e.children) != null && i.length && this.load(e.children), this);
  }
  /**
   * Updates widget position/size and other info. This is used to change widget properties after creation.
   * Can update position, size, content, and other widget properties.
   *
   * Note: If you need to call this on all nodes, use load() instead which will update what changed.
   * Setting the same x,y for multiple items will be indeterministic and likely unwanted.
   *
   * @param els widget element(s) or selector to modify
   * @param opt new widget options (x,y,w,h, etc.). Only those set will be updated.
   * @returns the grid instance for chaining
   *
   * @example
   * // Update widget size and position
   * grid.update('.my-widget', { x: 2, y: 1, w: 3, h: 2 });
   *
   * // Update widget content
   * grid.update(widget, { content: '<p>New content</p>' });
   *
   * // Update multiple properties
   * grid.update('#my-widget', {
   *   w: 4,
   *   h: 3,
   *   noResize: true,
   *   locked: true
   * });
   */
  update(e, t) {
    return v.getElements(e).forEach((i) => {
      var l;
      const s = i == null ? void 0 : i.gridstackNode;
      if (!s)
        return;
      const r = { ...u.copyPos({}, s), ...u.cloneDeep(t) };
      this.engine.nodeBoundFix(r), delete r.autoPosition;
      const n = ["x", "y", "w", "h"];
      let o;
      if (n.some((d) => r[d] !== void 0 && r[d] !== s[d]) && (o = {}, n.forEach((d) => {
        o[d] = r[d] !== void 0 ? r[d] : s[d], delete r[d];
      })), !o && (r.minW || r.minH || r.maxW || r.maxH) && (o = {}), r.content !== void 0) {
        const d = i.querySelector(".grid-stack-item-content");
        d && d.textContent !== r.content && (s.content = r.content, v.renderCB(d, r), (l = s.subGrid) != null && l.el && (d.appendChild(s.subGrid.el), s.subGrid._updateContainerHeight())), delete r.content;
      }
      let h = !1, c = !1;
      for (const d in r)
        d[0] !== "_" && s[d] !== r[d] && (s[d] = r[d], h = !0, c = c || !this.opts.staticGrid && (d === "noResize" || d === "noMove" || d === "locked"));
      if (u.sanitizeMinMax(s), o) {
        const d = o.w !== void 0 && o.w !== s.w;
        this.moveNode(s, o), d && s.subGrid ? s.subGrid.onResize(this.hasAnimationCSS() ? s.w : void 0) : this.resizeToContentCheck(d, s), delete s._orig;
      }
      (o || h) && this._writeAttr(i, s), c && this.prepareDragDrop(s.el), v.updateCB && v.updateCB(s);
    }), this;
  }
  moveNode(e, t) {
    const i = e._updating;
    i || this.engine.cleanNodes().beginUpdate(e), this.engine.moveNode(e, t), this._updateContainerHeight(), i || (this._triggerChangeEvent(), this.engine.endUpdate());
  }
  /**
   * Updates widget height to match the content height to avoid vertical scrollbars or dead space.
   * This automatically adjusts the widget height based on its content size.
   *
   * Note: This assumes only 1 child under resizeToContentParent='.grid-stack-item-content'
   * (sized to gridItem minus padding) that represents the entire content size.
   *
   * @param el the grid item element to resize
   *
   * @example
   * // Resize a widget to fit its content
   * const widget = document.querySelector('.grid-stack-item');
   * grid.resizeToContent(widget);
   *
   * // This is commonly used with dynamic content:
   * widget.querySelector('.content').innerHTML = 'New longer content...';
   * grid.resizeToContent(widget);
   */
  resizeToContent(e) {
    var f, p;
    if (!e || (e.classList.remove("size-to-content-max"), !e.clientHeight))
      return;
    const t = e.gridstackNode;
    if (!t)
      return;
    const i = t.grid;
    if (!i || e.parentElement !== i.el)
      return;
    const s = i.getCellHeight(!0);
    if (!s)
      return;
    let r = t.h ? t.h * s : e.clientHeight, n;
    if (t.resizeToContentParent && (n = e.querySelector(t.resizeToContentParent)), n || (n = e.querySelector(v.resizeToContentParent)), !n)
      return;
    const o = e.clientHeight - n.clientHeight, h = t.h ? t.h * s - o : n.clientHeight;
    let c;
    if (t.subGrid) {
      c = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const m = t.subGrid.el.getBoundingClientRect(), y = e.getBoundingClientRect();
      c += m.top - y.top;
    } else {
      if ((p = (f = t.subGridOpts) == null ? void 0 : f.children) != null && p.length)
        return;
      {
        const m = n.firstElementChild;
        if (!m) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${v.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        c = m.getBoundingClientRect().height || h;
      }
    }
    if (h === c)
      return;
    r += c - h;
    let l = Math.ceil(r / s);
    const d = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    d && l > d && (l = d, e.classList.add("size-to-content-max")), t.minH && l < t.minH ? l = t.minH : t.maxH && l > t.maxH && (l = t.maxH), l !== t.h && (i._ignoreLayoutsNodeChange = !0, i.moveNode(t, { h: l }), delete i._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    v.resizeToContentCB ? v.resizeToContentCB(e) : this.resizeToContent(e);
  }
  /**
   * Rotate widgets by swapping their width and height. This is typically called when the user presses 'r' during dragging.
   * The rotation swaps the w/h dimensions and adjusts min/max constraints accordingly.
   *
   * @param els widget element(s) or selector to rotate
   * @param relative optional pixel coordinate relative to upper/left corner to rotate around (keeps that cell under cursor)
   * @returns the grid instance for chaining
   *
   * @example
   * // Rotate a specific widget
   * grid.rotate('.my-widget');
   *
   * // Rotate with relative positioning during drag
   * grid.rotate(widget, { left: 50, top: 30 });
   */
  rotate(e, t) {
    return v.getElements(e).forEach((i) => {
      const s = i.gridstackNode;
      if (!u.canBeRotated(s))
        return;
      const r = { w: s.h, h: s.w, minH: s.minW, minW: s.minH, maxH: s.maxW, maxW: s.maxH };
      if (t) {
        const o = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, h = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        r.x = s.x + o - (s.h - (h + 1)), r.y = s.y + h - o;
      }
      Object.keys(r).forEach((o) => {
        r[o] === void 0 && delete r[o];
      });
      const n = s._orig;
      this.update(i, r), s._orig = n;
    }), this;
  }
  /**
   * Updates the margins which will set all 4 sides at once - see `GridStackOptions.margin` for format options.
   * Supports CSS string format of 1, 2, or 4 values or a single number.
   *
   * @param value margin value - can be:
   *   - Single number: `10` (applies to all sides)
   *   - Two values: `'10px 20px'` (top/bottom, left/right)
   *   - Four values: `'10px 20px 5px 15px'` (top, right, bottom, left)
   * @returns the grid instance for chaining
   *
   * @example
   * grid.margin(10);           // 10px all sides
   * grid.margin('10px 20px');  // 10px top/bottom, 20px left/right
   * grid.margin('5px 10px 15px 20px'); // Different for each side
   */
  margin(e) {
    if (!(typeof e == "string" && e.split(" ").length > 1)) {
      const i = u.parseHeight(e);
      if (this.opts.marginUnit === i.unit && this.opts.margin === i.h)
        return;
    }
    return this.opts.margin = e, this.opts.marginTop = this.opts.marginBottom = this.opts.marginLeft = this.opts.marginRight = void 0, this._initMargin(), this;
  }
  /**
   * Returns the current margin value as a number (undefined if the 4 sides don't match).
   * This only returns a number if all sides have the same margin value.
   *
   * @returns the margin value in pixels, or undefined if sides have different values
   *
   * @example
   * const margin = grid.getMargin();
   * if (margin !== undefined) {
   *   console.log('Uniform margin:', margin, 'px');
   * } else {
   *   console.log('Margins are different on different sides');
   * }
   */
  getMargin() {
    return this.opts.margin;
  }
  /**
   * Returns true if the height of the grid will be less than the vertical
   * constraint. Always returns true if grid doesn't have height constraint.
   * @param node contains x,y,w,h,auto-position options
   *
   * @example
   * if (grid.willItFit(newWidget)) {
   *   grid.addWidget(newWidget);
   * } else {
   *   alert('Not enough free space to place the widget');
   * }
   */
  willItFit(e) {
    if (arguments.length > 1) {
      console.warn("gridstack.ts: `willItFit(x,y,w,h,autoPosition)` is deprecated. Use `willItFit({x, y,...})`. It will be removed soon");
      const t = arguments;
      let i = 0, s = { x: t[i++], y: t[i++], w: t[i++], h: t[i++], autoPosition: t[i++] };
      return this.willItFit(s);
    }
    return this.engine.willItFit(e);
  }
  /** @internal */
  _triggerChangeEvent() {
    if (this.engine.batchMode)
      return this;
    const e = this.engine.getDirtyNodes(!0);
    return e && e.length && (this._ignoreLayoutsNodeChange || this.engine.layoutsNodesChange(e), this._triggerEvent("change", e)), this.engine.saveInitial(), this;
  }
  /** @internal */
  _triggerAddEvent() {
    var e;
    if (this.engine.batchMode)
      return this;
    if ((e = this.engine.addedNodes) != null && e.length) {
      this._ignoreLayoutsNodeChange || this.engine.layoutsNodesChange(this.engine.addedNodes), this.engine.addedNodes.forEach((i) => {
        delete i._dirty;
      });
      const t = [...this.engine.addedNodes];
      this.engine.addedNodes = [], this._triggerEvent("added", t);
    }
    return this;
  }
  /** @internal */
  _triggerRemoveEvent() {
    var e;
    if (this.engine.batchMode)
      return this;
    if ((e = this.engine.removedNodes) != null && e.length) {
      const t = [...this.engine.removedNodes];
      this.engine.removedNodes = [], this._triggerEvent("removed", t);
    }
    return this;
  }
  /** @internal */
  _triggerEvent(e, t) {
    const i = t ? new CustomEvent(e, { bubbles: !1, detail: t }) : new Event(e);
    let s = this;
    for (; s.parentGridNode; )
      s = s.parentGridNode.grid;
    return s.el.dispatchEvent(i), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const i = this.opts.cellHeight, s = this.opts.cellHeightUnit;
    if (!i)
      return this;
    if (!e && !this.opts.minRow) {
      const r = u.parseHeight(getComputedStyle(this.el).minHeight);
      if (r.h > 0 && r.unit === s) {
        const n = Math.floor(r.h / i);
        t < n && (t = n);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * i + s), e && u.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, i) {
    i = i || this._readAttr(e), e.gridstackNode = i, i.el = e, i.grid = this, i = this.engine.addNode(i, t), this._writeAttr(e, i), e.classList.add(M.itemClass, this.opts.itemClass);
    const s = u.shouldSizeToContent(i);
    return s ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), s && this.resizeToContentCheck(!1, i), u.lazyLoad(i) || this.prepareDragDrop(i.el), this;
  }
  /** @internal write position CSS vars and x,y,w,h attributes (not used for CSS but by users) back to element */
  _writePosAttr(e, t) {
    return (!t._moving && !t._resizing || this._placeholder === e) && (e.style.top = t.y ? t.y === 1 ? "var(--gs-cell-height)" : `calc(${t.y} * var(--gs-cell-height))` : null, e.style.left = t.x ? t.x === 1 ? "var(--gs-column-width)" : `calc(${t.x} * var(--gs-column-width))` : null, e.style.width = t.w > 1 ? `calc(${t.w} * var(--gs-column-width))` : null, e.style.height = t.h > 1 ? `calc(${t.h} * var(--gs-cell-height))` : null), t.x > 0 ? e.setAttribute("gs-x", String(t.x)) : e.removeAttribute("gs-x"), t.y > 0 ? e.setAttribute("gs-y", String(t.y)) : e.removeAttribute("gs-y"), t.w > 1 ? e.setAttribute("gs-w", String(t.w)) : e.removeAttribute("gs-w"), t.h > 1 ? e.setAttribute("gs-h", String(t.h)) : e.removeAttribute("gs-h"), this;
  }
  /** @internal call to write any default attributes back to element */
  _writeAttr(e, t) {
    if (!t)
      return this;
    this._writePosAttr(e, t);
    const i = {
      // autoPosition: 'gs-auto-position', // no need to write out as already in node and doesn't affect CSS
      noResize: "gs-no-resize",
      noMove: "gs-no-move",
      locked: "gs-locked",
      id: "gs-id",
      sizeToContent: "gs-size-to-content"
    };
    for (const s in i)
      t[s] ? e.setAttribute(i[s], String(t[s])) : e.removeAttribute(i[s]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const i = {};
    i.x = u.toNumber(e.getAttribute("gs-x")), i.y = u.toNumber(e.getAttribute("gs-y")), i.w = u.toNumber(e.getAttribute("gs-w")), i.h = u.toNumber(e.getAttribute("gs-h")), i.autoPosition = u.toBool(e.getAttribute("gs-auto-position")), i.noResize = u.toBool(e.getAttribute("gs-no-resize")), i.noMove = u.toBool(e.getAttribute("gs-no-move")), i.locked = u.toBool(e.getAttribute("gs-locked"));
    const s = e.getAttribute("gs-size-to-content");
    s && (s === "true" || s === "false" ? i.sizeToContent = u.toBool(s) : i.sizeToContent = parseInt(s, 10)), i.id = e.getAttribute("gs-id"), i.maxW = u.toNumber(e.getAttribute("gs-max-w")), i.minW = u.toNumber(e.getAttribute("gs-min-w")), i.maxH = u.toNumber(e.getAttribute("gs-max-h")), i.minH = u.toNumber(e.getAttribute("gs-min-h")), t && (i.w === 1 && e.removeAttribute("gs-w"), i.h === 1 && e.removeAttribute("gs-h"), i.maxW && e.removeAttribute("gs-max-w"), i.minW && e.removeAttribute("gs-min-w"), i.maxH && e.removeAttribute("gs-max-h"), i.minH && e.removeAttribute("gs-min-h"));
    for (const r in i) {
      if (!i.hasOwnProperty(r))
        return;
      !i[r] && i[r] !== 0 && r !== "sizeToContent" && delete i[r];
    }
    return i;
  }
  /** @internal */
  _setStaticClass() {
    const e = ["grid-stack-static"];
    return this.opts.staticGrid ? (this.el.classList.add(...e), this.el.setAttribute("gs-static", "true")) : (this.el.classList.remove(...e), this.el.removeAttribute("gs-static")), this;
  }
  /**
   * called when we are being resized - check if the one Column Mode needs to be turned on/off
   * and remember the prev columns we used, or get our count from parent, as well as check for cellHeight==='auto' (square)
   * or `sizeToContent` gridItem options.
   */
  onResize(e = ((t) => (t = this.el) == null ? void 0 : t.clientWidth)()) {
    if (!e || this.prevWidth === e)
      return;
    this.prevWidth = e, this.batchUpdate();
    let i = !1;
    return this._autoColumn && this.parentGridNode ? this.opts.column !== this.parentGridNode.w && (this.column(this.parentGridNode.w, this.opts.layout || "list"), i = !0) : i = this.checkDynamicColumn(), this._isAutoCellHeight && this.cellHeight(), this.engine.nodes.forEach((s) => {
      s.subGrid && s.subGrid.onResize();
    }), this._skipInitialResize || this.resizeToContentCheck(i), delete this._skipInitialResize, this.batchUpdate(!1), this;
  }
  /** resizes content for given node (or all) if shouldSizeToContent() is true */
  resizeToContentCheck(e = !1, t = void 0) {
    if (this.engine) {
      if (e && this.hasAnimationCSS())
        return setTimeout(() => this.resizeToContentCheck(!1, t), this.animationDelay);
      if (t)
        u.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((i) => u.shouldSizeToContent(i))) {
        const i = [...this.engine.nodes];
        this.batchUpdate(), i.forEach((s) => {
          u.shouldSizeToContent(s) && this.resizeToContentCBCheck(s.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((i) => i.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = u.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return u.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return u.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return v.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return u.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, i = [];
    typeof this.opts.margin == "string" && (i = this.opts.margin.split(" ")), i.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = i[0], this.opts.marginLeft = this.opts.marginRight = i[1]) : i.length === 4 ? (this.opts.marginTop = i[0], this.opts.marginRight = i[1], this.opts.marginBottom = i[2], this.opts.marginLeft = i[3]) : (e = u.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((n) => {
      this.opts[n] === void 0 ? this.opts[n] = t : (e = u.parseHeight(this.opts[n]), this.opts[n] = e.h, delete this.opts.margin);
    }), this.opts.marginUnit = e.unit, this.opts.marginTop === this.opts.marginBottom && this.opts.marginLeft === this.opts.marginRight && this.opts.marginTop === this.opts.marginRight && (this.opts.margin = this.opts.marginTop);
    const r = this.el.style;
    return r.setProperty("--gs-item-margin-top", `${this.opts.marginTop}${this.opts.marginUnit}`), r.setProperty("--gs-item-margin-bottom", `${this.opts.marginBottom}${this.opts.marginUnit}`), r.setProperty("--gs-item-margin-right", `${this.opts.marginRight}${this.opts.marginUnit}`), r.setProperty("--gs-item-margin-left", `${this.opts.marginLeft}${this.opts.marginUnit}`), this;
  }
  /* ===========================================================================================
   * drag&drop methods that used to be stubbed out and implemented in dd-gridstack.ts
   * but caused loading issues in prod - see https://github.com/gridstack/gridstack.js/issues/2039
   * ===========================================================================================
   */
  /**
   * Get the global drag & drop implementation instance.
   * This provides access to the underlying drag & drop functionality.
   *
   * @returns the DDGridStack instance used for drag & drop operations
   *
   * @example
   * const dd = GridStack.getDD();
   * // Access drag & drop functionality
   */
  static getDD() {
    return T;
  }
  /**
   * call to setup dragging in from the outside (say toolbar), by specifying the class selection and options.
   * Called during GridStack.init() as options, but can also be called directly (last param are used) in case the toolbar
   * is dynamically create and needs to be set later.
   * @param dragIn string selector (ex: '.sidebar-item') or list of dom elements
   * @param dragInOptions options - see DDDragOpt. (default: {handle: '.grid-stack-item-content', appendTo: 'body'}
   * @param widgets GridStackWidget def to assign to each element which defines what to create on drop
   * @param root optional root which defaults to document (for shadow dom pass the parent HTMLDocument)
   */
  static setupDragIn(e, t, i, s = document) {
    (t == null ? void 0 : t.pause) !== void 0 && (w.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? u.getElements(e, s) : e).forEach((n, o) => {
      T.isDraggable(n) || T.dragIn(n, t), i != null && i[o] && (n.gridstackNode = i[o]);
    });
  }
  /**
   * Enables/Disables dragging by the user for specific grid elements.
   * For all items and future items, use enableMove() instead. No-op for static grids.
   *
   * Note: If you want to prevent an item from moving due to being pushed around by another
   * during collision, use the 'locked' property instead.
   *
   * @param els widget element(s) or selector to modify
   * @param val if true widget will be draggable, assuming the parent grid isn't noMove or static
   * @returns the grid instance for chaining
   *
   * @example
   * // Make specific widgets draggable
   * grid.movable('.my-widget', true);
   *
   * // Disable dragging for specific widgets
   * grid.movable('#fixed-widget', false);
   */
  movable(e, t) {
    return this.opts.staticGrid ? this : (v.getElements(e).forEach((i) => {
      const s = i.gridstackNode;
      s && (t ? delete s.noMove : s.noMove = !0, this.prepareDragDrop(s.el));
    }), this);
  }
  /**
   * Enables/Disables user resizing for specific grid elements.
   * For all items and future items, use enableResize() instead. No-op for static grids.
   *
   * @param els widget element(s) or selector to modify
   * @param val if true widget will be resizable, assuming the parent grid isn't noResize or static
   * @returns the grid instance for chaining
   *
   * @example
   * // Make specific widgets resizable
   * grid.resizable('.my-widget', true);
   *
   * // Disable resizing for specific widgets
   * grid.resizable('#fixed-size-widget', false);
   */
  resizable(e, t) {
    return this.opts.staticGrid ? this : (v.getElements(e).forEach((i) => {
      const s = i.gridstackNode;
      s && (t ? delete s.noResize : s.noResize = !0, this.prepareDragDrop(s.el));
    }), this);
  }
  /**
   * Temporarily disables widgets moving/resizing.
   * If you want a more permanent way (which freezes up resources) use `setStatic(true)` instead.
   *
   * Note: This is a no-op for static grids.
   *
   * This is a shortcut for:
   * ```typescript
   * grid.enableMove(false);
   * grid.enableResize(false);
   * ```
   *
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Disable all interactions
   * grid.disable();
   *
   * // Disable only this grid, not sub-grids
   * grid.disable(false);
   */
  disable(e = !0) {
    if (!this.opts.staticGrid)
      return this.enableMove(!1, e), this.enableResize(!1, e), this._triggerEvent("disable"), this;
  }
  /**
   * Re-enables widgets moving/resizing - see disable().
   * Note: This is a no-op for static grids.
   *
   * This is a shortcut for:
   * ```typescript
   * grid.enableMove(true);
   * grid.enableResize(true);
   * ```
   *
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Re-enable all interactions
   * grid.enable();
   *
   * // Enable only this grid, not sub-grids
   * grid.enable(false);
   */
  enable(e = !0) {
    if (!this.opts.staticGrid)
      return this.enableMove(!0, e), this.enableResize(!0, e), this._triggerEvent("enable"), this;
  }
  /**
   * Enables/disables widget moving for all widgets. No-op for static grids.
   * Note: locally defined items (with noMove property) still override this setting.
   *
   * @param doEnable if true widgets will be movable, if false moving is disabled
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Enable moving for all widgets
   * grid.enableMove(true);
   *
   * // Disable moving for all widgets
   * grid.enableMove(false);
   *
   * // Enable only this grid, not sub-grids
   * grid.enableMove(true, false);
   */
  enableMove(e, t = !0) {
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableDrag : this.opts.disableDrag = !0, this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && t && i.subGrid.enableMove(e, t);
    }), this);
  }
  /**
   * Enables/disables widget resizing for all widgets. No-op for static grids.
   * Note: locally defined items (with noResize property) still override this setting.
   *
   * @param doEnable if true widgets will be resizable, if false resizing is disabled
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Enable resizing for all widgets
   * grid.enableResize(true);
   *
   * // Disable resizing for all widgets
   * grid.enableResize(false);
   *
   * // Enable only this grid, not sub-grids
   * grid.enableResize(true, false);
   */
  enableResize(e, t = !0) {
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableResize : this.opts.disableResize = !0, this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && t && i.subGrid.enableResize(e, t);
    }), this);
  }
  /** @internal call when drag (and drop) needs to be cancelled (Esc key) */
  cancelDrag() {
    var t;
    const e = (t = this._placeholder) == null ? void 0 : t.gridstackNode;
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && v._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return T.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return T.droppable(this.el, "destroy"), this;
    let e, t;
    const i = (s, r, n) => {
      var f;
      n = n || r;
      const o = n.gridstackNode;
      if (!o)
        return;
      if (!((f = o.grid) != null && f.el)) {
        n.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const p = n.getBoundingClientRect();
        n.style.left = p.x + (this.dragTransform.xScale - 1) * (s.clientX - p.x) / this.dragTransform.xScale + "px", n.style.top = p.y + (this.dragTransform.yScale - 1) * (s.clientY - p.y) / this.dragTransform.yScale + "px", n.style.transformOrigin = "0px 0px";
      }
      let { top: h, left: c } = n.getBoundingClientRect();
      const l = this.el.getBoundingClientRect();
      c -= l.left, h -= l.top;
      const d = {
        position: {
          top: h * this.dragTransform.xScale,
          left: c * this.dragTransform.yScale
        }
      };
      if (o._temporaryRemoved) {
        if (o.x = Math.max(0, Math.round(c / t)), o.y = Math.max(0, Math.round(h / e)), delete o.autoPosition, this.engine.nodeBoundFix(o), !this.engine.willItFit(o)) {
          if (o.autoPosition = !0, !this.engine.willItFit(o)) {
            T.off(r, "drag");
            return;
          }
          o._willFitPos && (u.copyPos(o, o._willFitPos), delete o._willFitPos);
        }
        this._onStartMoving(n, s, d, o, t, e);
      } else
        this._dragOrResize(n, s, d, o, t, e);
    };
    return T.droppable(this.el, {
      accept: (s) => {
        const r = s.gridstackNode || this._readAttr(s, !1);
        if ((r == null ? void 0 : r.grid) === this)
          return !0;
        if (!this.opts.acceptWidgets)
          return !1;
        let n = !0;
        if (typeof this.opts.acceptWidgets == "function")
          n = this.opts.acceptWidgets(s);
        else {
          const o = this.opts.acceptWidgets === !0 ? ".grid-stack-item" : this.opts.acceptWidgets;
          n = s.matches(o);
        }
        if (n && r && this.opts.maxRow) {
          const o = { w: r.w, h: r.h, minW: r.minW, minH: r.minH };
          n = this.engine.willItFit(o);
        }
        return n;
      }
    }).on(this.el, "dropover", (s, r, n) => {
      let o = (n == null ? void 0 : n.gridstackNode) || r.gridstackNode;
      if ((o == null ? void 0 : o.grid) === this && !o._temporaryRemoved)
        return !1;
      if (o != null && o._sidebarOrig && (o.w = o._sidebarOrig.w, o.h = o._sidebarOrig.h), o != null && o.grid && o.grid !== this && !o._temporaryRemoved && o.grid._leave(r, n), n = n || r, t = this.cellWidth(), e = this.getCellHeight(!0), !o) {
        const l = n.getAttribute("data-gs-widget") || n.getAttribute("gridstacknode");
        if (l) {
          try {
            o = JSON.parse(l);
          } catch {
            console.error("Gridstack dropover: Bad JSON format: ", l);
          }
          n.removeAttribute("data-gs-widget"), n.removeAttribute("gridstacknode");
        }
        o || (o = this._readAttr(n)), o._sidebarOrig = { w: o.w, h: o.h };
      }
      o.grid || (o.el || (o = { ...o }), o._isExternal = !0, n.gridstackNode = o);
      const h = o.w || Math.round(n.offsetWidth / t) || 1, c = o.h || Math.round(n.offsetHeight / e) || 1;
      return o.grid && o.grid !== this ? (r._gridstackNodeOrig || (r._gridstackNodeOrig = o), r.gridstackNode = o = { ...o, w: h, h: c, grid: this }, delete o.x, delete o.y, this.engine.cleanupNode(o).nodeBoundFix(o), o._initDD = o._isExternal = // DOM needs to be re-parented on a drop
      o._temporaryRemoved = !0) : (o.w = h, o.h = c, o._temporaryRemoved = !0), v._itemRemoving(o.el, !1), T.on(r, "drag", i), i(s, r, n), !1;
    }).on(this.el, "dropout", (s, r, n) => {
      const o = (n == null ? void 0 : n.gridstackNode) || r.gridstackNode;
      return o && (!o.grid || o.grid === this) && (this._leave(r, n), this._isTemp && this.removeAsSubGrid(o)), !1;
    }).on(this.el, "drop", (s, r, n) => {
      var f, p, m;
      const o = (n == null ? void 0 : n.gridstackNode) || r.gridstackNode;
      if ((o == null ? void 0 : o.grid) === this && !o._isExternal)
        return !1;
      const h = !!this.placeholder.parentElement, c = r !== n;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, h && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const l = r._gridstackNodeOrig;
      if (delete r._gridstackNodeOrig, h && (l != null && l.grid) && l.grid !== this) {
        const y = l.grid;
        y.engine.removeNodeFromLayoutCache(l), y.engine.removedNodes.push(l), y._triggerRemoveEvent()._triggerChangeEvent(), y.parentGridNode && !y.engine.nodes.length && y.opts.subGridDynamic && y.removeAsSubGrid();
      }
      if (!o || (h && (this.engine.cleanupNode(o), o.grid = this), (f = o.grid) == null || delete f._isTemp, T.off(r, "drag"), n !== r ? (n.remove(), r = n) : r.remove(), this._removeDD(r), !h))
        return !1;
      const d = (m = (p = o.subGrid) == null ? void 0 : p.el) == null ? void 0 : m.gridstack;
      return u.copyPos(o, this._readAttr(this.placeholder)), u.removePositioningStyles(r), c && (o.content || o.subGridOpts || v.addRemoveCB) ? (delete o.el, r = this.addWidget(o)) : (this._prepareElement(r, !0, o), this.el.appendChild(r), this.resizeToContentCheck(!1, o), d && (d.parentGridNode = o), this._updateContainerHeight()), this.engine.addedNodes.push(o), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...s, type: "dropped" }, l && l.grid ? l : void 0, o), !1;
    }), this;
  }
  /** @internal mark item for removal */
  static _itemRemoving(e, t) {
    if (!e)
      return;
    const i = e ? e.gridstackNode : void 0;
    !(i != null && i.grid) || e.classList.contains(i.grid.opts.removableOptions.decline) || (t ? i._isAboutToRemove = !0 : delete i._isAboutToRemove, t ? e.classList.add("grid-stack-item-removing") : e.classList.remove("grid-stack-item-removing"));
  }
  /** @internal called to setup a trash drop zone if the user specifies it */
  _setupRemoveDrop() {
    if (typeof this.opts.removable != "string")
      return this;
    const e = document.querySelector(this.opts.removable);
    return e ? (!this.opts.staticGrid && !T.isDroppable(e) && T.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, i) => v._itemRemoving(i, !0)).on(e, "dropout", (t, i) => v._itemRemoving(i, !1)), this) : this;
  }
  /**
   * prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading
   * @param el GridItemHTMLElement of the widget
   * @param [force=false]
   * */
  prepareDragDrop(e, t = !1) {
    const i = e == null ? void 0 : e.gridstackNode;
    if (!i)
      return;
    const s = i.noMove || this.opts.disableDrag, r = i.noResize || this.opts.disableResize, n = this.opts.staticGrid || s && r;
    if ((t || n) && (i._initDD && (this._removeDD(e), delete i._initDD), n && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!i._initDD) {
      let o, h;
      const c = (f, p) => {
        this.triggerEvent(f, f.target), o = this.cellWidth(), h = this.getCellHeight(!0), this._onStartMoving(e, f, p, i, o, h);
      }, l = (f, p) => {
        this._dragOrResize(e, f, p, i, o, h);
      }, d = (f) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete i._moving, delete i._resizing, delete i._event, delete i._lastTried;
        const p = i.w !== i._orig.w, m = f.target;
        if (!(!m.gridstackNode || m.gridstackNode.grid !== this)) {
          if (i.el = m, i._isAboutToRemove) {
            const y = e.gridstackNode.grid;
            y._gsEventHandler[f.type] && y._gsEventHandler[f.type](f, m), y.engine.nodes.push(i), y.removeWidget(e, !0, !0);
          } else
            u.removePositioningStyles(m), i._temporaryRemoved ? (this._writePosAttr(m, i), this.engine.addNode(i)) : this._writePosAttr(m, i), this.triggerEvent(f, m);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), f.type === "resizestop" && (Number.isInteger(i.sizeToContent) && (i.sizeToContent = i.h), this.resizeToContentCheck(p, i));
        }
      };
      T.draggable(e, {
        start: c,
        stop: d,
        drag: l
      }).resizable(e, {
        start: c,
        stop: d,
        resize: l
      }), i._initDD = !0;
    }
    return T.draggable(e, s ? "disable" : "enable").resizable(e, r ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, i, s, r, n) {
    var o;
    if (this.engine.cleanNodes().beginUpdate(s), this._writePosAttr(this.placeholder, s), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = s, (o = s.grid) != null && o.el)
      this.dragTransform = u.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const h = this.placeholder.closest(".grid-stack");
      this.dragTransform = u.getValuesFromTransformedElement(h);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (s.el = this.placeholder, s._lastUiPosition = i.position, s._prevYPix = i.position.top, s._moving = t.type === "dragstart", s._resizing = t.type === "resizestart", delete s._lastTried, t.type === "dropover" && s._temporaryRemoved && (this.engine.addNode(s), s._moving = !0), this.engine.cacheRects(r, n, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const h = this.getColumn() - s.x, c = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - s.y;
      T.resizable(e, "option", "minWidth", r * Math.min(s.minW || 1, h)).resizable(e, "option", "minHeight", n * Math.min(s.minH || 1, c)).resizable(e, "option", "maxWidth", r * Math.min(s.maxW || Number.MAX_SAFE_INTEGER, h)).resizable(e, "option", "maxWidthMoveLeft", r * Math.min(s.maxW || Number.MAX_SAFE_INTEGER, s.x + s.w)).resizable(e, "option", "maxHeight", n * Math.min(s.maxH || Number.MAX_SAFE_INTEGER, c)).resizable(e, "option", "maxHeightMoveUp", n * Math.min(s.maxH || Number.MAX_SAFE_INTEGER, s.y + s.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, i, s, r, n) {
    const o = { ...s._orig };
    let h, c = this.opts.marginLeft, l = this.opts.marginRight, d = this.opts.marginTop, f = this.opts.marginBottom;
    const p = Math.round(n * 0.1), m = Math.round(r * 0.1);
    if (c = Math.min(c, m), l = Math.min(l, m), d = Math.min(d, p), f = Math.min(f, p), t.type === "drag") {
      if (s._temporaryRemoved)
        return;
      const b = i.position.top - s._prevYPix;
      s._prevYPix = i.position.top, this.opts.draggable.scroll !== !1 && u.updateScrollPosition(e, i.position, b);
      const N = i.position.left + (i.position.left > s._lastUiPosition.left ? -l : c), x = i.position.top + (i.position.top > s._lastUiPosition.top ? -f : d);
      o.x = Math.round(N / r), o.y = Math.round(x / n);
      const C = this._extraDragRow;
      if (this.engine.collide(s, o)) {
        const D = this.getRow();
        let S = Math.max(0, o.y + s.h - D);
        this.opts.maxRow && D + S > this.opts.maxRow && (S = Math.max(0, this.opts.maxRow - D)), this._extraDragRow = S;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== C && this._updateContainerHeight(), s.x === o.x && s.y === o.y)
        return;
    } else if (t.type === "resize") {
      if (o.x < 0 || (u.updateScrollResize(t, e, n), o.w = Math.round((i.size.width - c) / r), o.h = Math.round((i.size.height - d) / n), s.w === o.w && s.h === o.h) || s._lastTried && s._lastTried.w === o.w && s._lastTried.h === o.h)
        return;
      const b = i.position.left + c, N = i.position.top + d;
      o.x = Math.round(b / r), o.y = Math.round(N / n), h = !0;
    }
    s._event = t, s._lastTried = o;
    const y = {
      x: i.position.left + c,
      y: i.position.top + d,
      w: (i.size ? i.size.width : s.w * r) - c - l,
      h: (i.size ? i.size.height : s.h * n) - d - f
    };
    if (this.engine.moveNodeCheck(s, { ...o, cellWidth: r, cellHeight: n, rect: y, resizing: h })) {
      s._lastUiPosition = i.position, this.engine.cacheRects(r, n, d, l, f, c), delete s._skipDown, h && s.subGrid && s.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const b = t.target;
      s._sidebarOrig || this._writePosAttr(b, s), this.triggerEvent(t, b);
    }
  }
  /** call given event callback on our main top-most grid (if we're nested) */
  triggerEvent(e, t) {
    let i = this;
    for (; i.parentGridNode; )
      i = i.parentGridNode.grid;
    i._gsEventHandler[e.type] && i._gsEventHandler[e.type](e, t);
  }
  /** @internal called when item leaving our area by either cursor dropout event
   * or shape is outside our boundaries. remove it from us, and mark temporary if this was
   * our item to start with else restore prev node values from prev grid it came from.
   */
  _leave(e, t) {
    t = t || e;
    const i = t.gridstackNode;
    if (!i || (t.style.transform = t.style.transformOrigin = null, T.off(e, "drag"), i._temporaryRemoved))
      return;
    i._temporaryRemoved = !0, this.engine.removeNode(i), i.el = i._isExternal && t ? t : e;
    const s = i._sidebarOrig;
    i._isExternal && this.engine.cleanupNode(i), i._sidebarOrig = s, this.opts.removable === !0 && v._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : i._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return Xs(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
v.renderCB = (a, e) => {
  a && (e != null && e.content) && (a.textContent = e.content);
};
v.resizeToContentParent = ".grid-stack-item-content";
v.Utils = u;
v.Engine = $;
v.GDRev = "12.3.2";
const ce = /* @__PURE__ */ new WeakMap();
function er({ children: a }) {
  const { _gridStack: { value: e, set: t }, initialOptions: i } = Me(), s = Y(/* @__PURE__ */ new Map()), r = Y(null), n = Y(i), o = W((c, l) => {
    if (l.id && l.grid) {
      let d = ce.get(l.grid);
      d || (d = /* @__PURE__ */ new Map(), ce.set(l.grid, d)), d.set(l.id, c), s.current.set(l.id, c);
    }
  }, []), h = W(() => r.current ? (v.renderCB = o, v.init(n.current, r.current)) : null, [o]);
  return Ve(() => {
    if (!it(i, n.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), s.current.clear(), ce.delete(e), n.current = i, t(h());
      } catch (c) {
        console.error("Error reinitializing gridstack", c);
      }
  }, [i, e, h, t]), Ve(() => {
    if (!e)
      try {
        t(h());
      } catch (c) {
        console.error("Error initializing gridstack", c);
      }
  }, [e, h, t]), g(It.Provider, {
    value: te(() => ({
      getWidgetContainer: (c) => {
        if (e) {
          const l = ce.get(e);
          if (l != null && l.has(c))
            return l.get(c) || null;
        }
        return s.current.get(c) || null;
      }
    }), [e]),
    children: g("div", {
      ref: r,
      children: e ? a : null
    })
  });
}
const Gt = K((a, e) => {
  const t = Me();
  return xt(e, () => ({
    addWidget: t.addWidget,
    removeWidget: t.removeWidget,
    addSubGrid: t.addSubGrid,
    removeAll: t.removeAll
  }), [t]), null;
});
Gt.displayName = "RefHandler";
const Wt = K(({ options: a, widgets: e, onChange: t }, i) => {
  const s = te(() => ({
    ...a,
    children: e
  }), [e]), r = (o, h, c) => {
    let l = c[0], d = 1 / 0;
    for (const f of c) {
      const p = f.w - o, m = f.h - h, y = p * p + m * m;
      y < d && (d = y, l = f);
    }
    return l;
  };
  return z(qs, {
    initialOptions: s,
    onResizeStop: (o, h) => {
      var f, p;
      const c = h.gridstackNode;
      if (!c) return;
      const l = ((f = h.gridstackNode) == null ? void 0 : f.allowedSizes) ?? [];
      if (l.length === 0)
        return;
      const d = r(c.w ?? 1, c.h ?? 1, l);
      (c.w !== d.w || c.h !== d.h) && ((p = c.grid) == null || p.update(h, {
        w: d.w,
        h: d.h
      }));
    },
    onChange: t,
    children: [g(Gt, {
      ref: i
    }), g(er, {
      children: g(Ys, {})
    })]
  });
});
Wt.displayName = "F0GridStack";
const Mr = Ae(
  "F0GridStack",
  Wt
), tr = ({ benefits: a }) => g("div", {
  className: "flex flex-col gap-2",
  children: a.map((e, t) => g(ir, {
    text: e
  }, t))
}), ir = ({ text: a }) => z("div", {
  className: "flex flex-row items-start gap-2",
  children: [g(Hi, {
    icon: Bi,
    size: "md",
    className: "text-f1-icon-positive"
  }), g("span", {
    children: a
  })]
}), $t = K(({ title: a, image: e, benefits: t, actions: i, withShadow: s = !0, module: r, moduleName: n, tag: o, promoTag: h }, c) => z("div", {
  ref: c,
  className: j("bg-white flex flex-row rounded-xl border border-f1-border-secondary", s && "shadow-md"),
  children: [g("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: g("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), z("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [z("div", {
      className: "flex flex-col gap-5",
      children: [z("div", {
        className: "flex flex-col gap-2",
        children: [z("div", {
          className: "flex flex-row items-center gap-2",
          children: [r && g(vt, {
            module: r
          }), n && g("p", {
            className: "text-base font-medium text-f1-foreground",
            children: n
          })]
        }), (o || h) && z("div", {
          className: "flex justify-start gap-2",
          children: [o && g(Li, {
            icon: o.icon,
            text: o.label
          }), h && g(Mi, {
            variant: h.variant || "positive",
            text: h.label
          })]
        }), g("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: a
        })]
      }), g(tr, {
        benefits: t
      })]
    }), i && g("div", {
      className: "flex gap-3",
      children: i
    })]
  })]
}));
$t.displayName = "ProductBlankslate";
function sr({ isOpen: a, onClose: e, title: t, children: i, module: s, portalContainer: r }) {
  const [n, o] = A(a);
  return q(() => {
    o(a);
  }, [a]), g(Ii, {
    open: n,
    onOpenChange: (c) => {
      o(c), c || e();
    },
    modal: !0,
    children: z(Fi, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: r,
      children: [z("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [z(Gi, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [s && g(vt, {
            module: s,
            size: "lg"
          }), t]
        }), g(Wi, {
          variant: "outline",
          icon: bt,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), z(gt, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [i, g(pt, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Hr({ isOpen: a, onClose: e, title: t, image: i, benefits: s, errorMessage: r, successMessage: n, loadingState: o, nextSteps: h, closeLabel: c, primaryAction: l, modalTitle: d, modalModule: f, secondaryAction: p, portalContainer: m, tag: y, promoTag: b, showResponseDialog: N = !0 }) {
  const [x, C] = A(a), [D, S] = A(null), [R, E] = A(!1), O = async () => {
    if (l != null && l.onClick) {
      E(!0);
      try {
        await l.onClick(), C(!1), N && S("success");
      } catch {
        N && S("error");
      } finally {
        E(!1);
      }
    }
  }, L = () => {
    C(!1), e == null || e();
  }, F = R;
  return z(oe, {
    children: [g(sr, {
      isOpen: x,
      onClose: L,
      title: d,
      module: f,
      portalContainer: m,
      children: g("div", {
        className: "pb-4 pl-4",
        children: g($t, {
          title: t,
          image: i,
          benefits: s,
          withShadow: !1,
          tag: y,
          promoTag: b,
          actions: z("div", {
            className: "flex gap-3",
            children: [l && g(X, {
              variant: l.variant,
              label: F ? o.label : l.label,
              icon: l.icon || void 0,
              onClick: O,
              loading: l.loading,
              size: l.size
            }), p && g(X, {
              onClick: p.onClick,
              label: p.label,
              variant: p.variant,
              size: p.size,
              icon: p.icon
            })]
          })
        })
      })
    }), D && N && g(wt, {
      open: !0,
      onClose: () => {
        L(), S(null);
      },
      success: D === "success",
      errorMessage: r,
      successMessage: n,
      nextSteps: h,
      closeLabel: c,
      portalContainer: m
    })]
  });
}
function rr({ mediaUrl: a, title: e, description: t, onClose: i, dismissible: s, width: r, trackVisibility: n, actions: o, showConfirmation: h = !0 }) {
  const [c, l] = A(!1), d = () => {
    l(!0), i && i();
  };
  q(() => {
    n && n(!c);
  }, [n, c]);
  const f = a == null ? void 0 : a.includes(".mp4");
  return g(oe, {
    children: c ? null : z($i, {
      style: {
        width: r
      },
      className: "relative bg-f1-background p-1",
      children: [z(ji, {
        children: [s && g("div", {
          className: "absolute right-2 top-2 z-10",
          children: g(X, {
            variant: "ghost",
            icon: bt,
            size: "sm",
            hideLabel: !0,
            onClick: d,
            label: "Close"
          })
        }), z("div", {
          children: [g("div", {
            children: a && (f ? g("video", {
              src: a,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : g("img", {
              src: a,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), z("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [g(Ke, {
              className: "text-lg font-medium",
              children: e
            }), g(Ke, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), o && g(Ui, {
        className: "p-3",
        children: o.map((p) => p.type === "upsell" ? g(_t, {
          label: p.label,
          onRequest: p.onClick,
          errorMessage: p.errorMessage,
          successMessage: p.successMessage,
          loadingState: p.loadingState,
          nextSteps: p.nextSteps,
          closeLabel: p.closeLabel,
          showConfirmation: h && p.showConfirmation,
          variant: p.variant
        }, p.label) : g(X, {
          label: p.label,
          onClick: p.onClick,
          variant: p.variant
        }, p.label))
      })]
    })
  });
}
const nr = K(function({ primaryAction: e, secondaryAction: t, ...i }, s) {
  const r = (h) => h.variant === "promote" ? g(_t, {
    label: h.label,
    onRequest: async () => {
      await h.onClick();
    },
    errorMessage: h.errorMessage,
    successMessage: h.successMessage,
    loadingState: h.loadingState,
    nextSteps: h.nextSteps,
    closeLabel: h.closeLabel,
    showIcon: h.showIcon,
    showConfirmation: h.showConfirmation,
    variant: h.variant
  }) : g(X, {
    onClick: h.onClick,
    label: h.label,
    variant: h.variant || "default",
    size: "md",
    icon: h.icon
  }), n = (e == null ? void 0 : e.variant) !== "promote" ? e : void 0, o = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0;
  return z(qi, {
    ref: s,
    ...i,
    primaryAction: n,
    secondaryAction: o,
    children: [(e == null ? void 0 : e.variant) === "promote" && r(e), (t == null ? void 0 : t.variant) === "promote" && r(t)]
  });
});
nr.displayName = "UpsellingBanner";
function Br({ isOpen: a, setIsOpen: e, label: t, variant: i = "promote", size: s = "md", showIcon: r = !0, side: n = "right", align: o = "center", icon: h = Ki, mediaUrl: c, title: l, description: d, width: f = "300px", trackVisibility: p, actions: m, onClick: y, hideLabel: b = !1 }) {
  const [N, x] = A(!1), [C, D] = A(null), [S, R] = A(null), E = (k) => {
    e(k), y && y();
  }, O = async (k) => {
    if (k.type === "upsell") {
      R(k);
      try {
        await k.onClick(), k.showConfirmation && (x(!0), D("success"));
      } catch {
        x(!0), D("error");
      }
    }
  }, L = () => {
    D(null), x(!1), R(null), e(!1);
  }, F = a && !N, _ = m == null ? void 0 : m.map((k) => k.type === "upsell" ? {
    ...k,
    onClick: () => O(k)
  } : k);
  return z(oe, {
    children: [z(ct, {
      open: F,
      onOpenChange: E,
      children: [g(ut, {
        asChild: !0,
        children: g(X, {
          variant: i,
          label: t,
          size: s,
          icon: r ? h : void 0,
          onClick: () => e(a),
          hideLabel: b
        })
      }), g(ft, {
        side: n,
        align: o,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: g(rr, {
          mediaUrl: c,
          title: l,
          description: d,
          onClose: () => e(!1),
          dismissible: !1,
          width: f,
          trackVisibility: p,
          actions: _,
          showConfirmation: !1
        })
      })]
    }), (S == null ? void 0 : S.type) === "upsell" && S.showConfirmation && C && g(wt, {
      open: !0,
      onClose: L,
      success: C === "success",
      errorMessage: S.errorMessage,
      successMessage: S.successMessage,
      nextSteps: S.nextSteps,
      closeLabel: S.closeLabel,
      portalContainer: null
    })]
  });
}
const or = xe(null), ar = ({ children: a, fullScreen: e = !0 }) => {
  const t = Y(null), [i, s] = A(t.current);
  return ss(() => {
    s(t.current);
  }, []), g(or.Provider, {
    value: {
      element: i
    },
    children: g("div", {
      ref: t,
      id: "f0-layout",
      className: j({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: a
    })
  });
}, lr = ({ children: a }) => g(is, {
  reducedMotion: "user",
  children: a
}), Ir = ({ children: a, layout: e, link: t, privacyModeInitiallyEnabled: i, image: s, i18n: r, l10n: n, isDev: o = !1, dataCollectionStorageHandler: h, showExperimentalWarnings: c = !1 }) => g(lr, {
  children: g(Vi, {
    isDev: o,
    showExperimentalWarnings: c,
    children: g(Yi, {
      ...n,
      children: g(Xi, {
        ...r,
        children: g(Ji, {
          ...t,
          children: g(ar, {
            ...e,
            children: g(Zi, {
              children: g(Qi, {
                initiallyEnabled: i,
                children: g(es, {
                  ...s,
                  children: g(ts, {
                    handler: h,
                    children: a
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), tt = (a) => `datacollection-${a}`, Fr = {
  get: async (a) => JSON.parse(
    localStorage.getItem(tt(a)) ?? "{}"
  ),
  set: async (a, e) => {
    localStorage.setItem(tt(a), JSON.stringify(e));
  }
};
export {
  mr as AreaChart,
  $r as Await,
  yr as BarChart,
  vr as CategoryBarChart,
  Er as ComboChart,
  jr as DndProvider,
  Ur as EmojiImage,
  qr as F0Avatar,
  Kr as F0AvatarAlert,
  Vr as F0AvatarCompany,
  Yr as F0AvatarDate,
  Xr as F0AvatarEmoji,
  Jr as F0AvatarFile,
  Zr as F0AvatarIcon,
  Qr as F0AvatarList,
  vt as F0AvatarModule,
  en as F0AvatarPerson,
  tn as F0AvatarTeam,
  X as F0Button,
  sn as F0ButtonDropdown,
  rn as F0ButtonToggle,
  nn as F0Card,
  on as F0Checkbox,
  kr as F0ChipList,
  Ar as F0DatePicker,
  an as F0EventCatcherProvider,
  Mr as F0GridStack,
  Hi as F0Icon,
  ln as F0Link,
  Ir as F0Provider,
  hn as F0TagAlert,
  dn as F0TagBalance,
  cn as F0TagCompany,
  un as F0TagDot,
  fn as F0TagList,
  gn as F0TagPerson,
  Li as F0TagRaw,
  Mi as F0TagStatus,
  pn as F0TagTeam,
  mn as GROUP_ID_SYMBOL,
  Lr as HomeLayout,
  br as LineChart,
  yn as OneFilterPicker,
  wr as PieChart,
  Qi as PrivacyModeProvider,
  $t as ProductBlankslate,
  vn as ProductCard,
  Hr as ProductModal,
  rr as ProductWidget,
  xr as ProgressBarChart,
  Or as StandardLayout,
  bn as TagCounter,
  Tr as TwoColumnLayout,
  wt as UpsellRequestResponseDialog,
  nr as UpsellingBanner,
  _t as UpsellingButton,
  Br as UpsellingPopover,
  _r as VerticalBarChart,
  gr as avatarVariants,
  wn as buildTranslations,
  Dr as buttonDropdownSizes,
  Nr as buttonDropdownVariants,
  Rr as buttonSizes,
  Sr as buttonToggleSizes,
  Cr as buttonVariants,
  _n as createAtlaskitDriver,
  xn as createDataSourceDefinition,
  Fr as dataCollectionLocalStorageHandler,
  Pr as datepickerSizes,
  fr as defaultTranslations,
  Ae as experimental,
  En as getAnimationVariants,
  Cn as getDataSourcePaginationType,
  Rn as getEmojiLabel,
  Nn as isInfiniteScrollPagination,
  Dn as isPageBasedPagination,
  zr as linkVariants,
  Sn as modules,
  zn as predefinedPresets,
  kn as tagDotColors,
  Pn as useData,
  An as useDataSource,
  On as useDndEvents,
  Tn as useDraggable,
  Ln as useDroppableList,
  Mn as useEmojiConfetti,
  Hn as useGroups,
  Bn as usePrivacyMode,
  In as useReducedMotion,
  Fn as useSelectable,
  Gn as useXRay
};
