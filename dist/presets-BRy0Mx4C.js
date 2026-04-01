import { jsxs as ve, jsx as A, Fragment as Nt } from "react/jsx-runtime";
import * as V from "react";
import { useRef as je, useState as be, useCallback as It, useEffect as Ce, useLayoutEffect as Ot, forwardRef as Pt, useId as kt } from "react";
import { O as Le, h as Q, Q as Rt, w as Ft, t as Wt, U as $t, E as zt } from "./index-DyAxXmVo.js";
import { k as jt, l as _t, m as Vt, n as Bt, o as Gt, p as Ht, q, s as Re } from "./F0AiChat-CL30fYVh.js";
const Yt = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null
};
function Ut(e, t) {
  const n = e.scrollSnapList();
  return typeof t == "number" ? n.map(() => t) : t(n, e);
}
function qt(e, t) {
  const n = e.rootNode();
  return t && t(n) || n;
}
function mt(e = {}) {
  let t, n, o, i, s = null, r = 0, l = !1, a = !1, c = !1, d = !1;
  function p(b, S) {
    n = b;
    const {
      mergeOptions: M,
      optionsAtMedia: P
    } = S, k = M(Yt, mt.globalOptions), W = M(k, e);
    if (t = P(W), n.scrollSnapList().length <= 1) return;
    d = t.jump, o = !1, i = Ut(n, t.delay);
    const {
      eventStore: $,
      ownerDocument: H
    } = n.internalEngine(), ee = !!n.internalEngine().options.watchDrag, te = qt(n, t.rootNode);
    $.add(H, "visibilitychange", m), ee && n.on("pointerDown", x), ee && !t.stopOnInteraction && n.on("pointerUp", C), t.stopOnMouseEnter && $.add(te, "mouseenter", O), t.stopOnMouseEnter && !t.stopOnInteraction && $.add(te, "mouseleave", N), t.stopOnFocusIn && n.on("slideFocusStart", v), t.stopOnFocusIn && !t.stopOnInteraction && $.add(n.containerNode(), "focusout", g), t.playOnInit && g();
  }
  function u() {
    n.off("pointerDown", x).off("pointerUp", C).off("slideFocusStart", v), v(), o = !0, l = !1;
  }
  function h() {
    const {
      ownerWindow: b
    } = n.internalEngine();
    b.clearTimeout(r), r = b.setTimeout(I, i[n.selectedScrollSnap()]), s = (/* @__PURE__ */ new Date()).getTime(), n.emit("autoplay:timerset");
  }
  function f() {
    const {
      ownerWindow: b
    } = n.internalEngine();
    b.clearTimeout(r), r = 0, s = null, n.emit("autoplay:timerstopped");
  }
  function g() {
    if (!o) {
      if (y()) {
        c = !0;
        return;
      }
      l || n.emit("autoplay:play"), h(), l = !0;
    }
  }
  function v() {
    o || (l && n.emit("autoplay:stop"), f(), l = !1);
  }
  function m() {
    if (y())
      return c = l, v();
    c && g();
  }
  function y() {
    const {
      ownerDocument: b
    } = n.internalEngine();
    return b.visibilityState === "hidden";
  }
  function x() {
    a || v();
  }
  function C() {
    a || g();
  }
  function O() {
    a = !0, v();
  }
  function N() {
    a = !1, g();
  }
  function D(b) {
    typeof b < "u" && (d = b), g();
  }
  function L() {
    l && v();
  }
  function T() {
    l && g();
  }
  function R() {
    return l;
  }
  function I() {
    const {
      index: b
    } = n.internalEngine(), S = b.clone().add(1).get(), M = n.scrollSnapList().length - 1, P = t.stopOnLastSnap && S === M;
    if (n.canScrollNext() ? n.scrollNext(d) : n.scrollTo(0, d), n.emit("autoplay:select"), P) return v();
    g();
  }
  function B() {
    if (!s) return null;
    const b = i[n.selectedScrollSnap()], S = (/* @__PURE__ */ new Date()).getTime() - s;
    return b - S;
  }
  return {
    name: "autoplay",
    options: e,
    init: p,
    destroy: u,
    play: D,
    stop: L,
    reset: T,
    isPlaying: R,
    timeUntilNext: B
  };
}
mt.globalOptions = void 0;
function ce() {
  return ce = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ce.apply(this, arguments);
}
var Xt = 0.996, Zt = function(t, n) {
  return n === void 0 && (n = Xt), t * n / (1 - n);
};
function Kt(e) {
  return e[e.length - 1];
}
function Qt(e) {
  return e.reduce(function(t, n) {
    return t + n;
  }) / e.length;
}
var Jt = function(t, n, o) {
  return Math.min(Math.max(n, t), o);
};
function Fe(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(n, o) {
    return n + t[o];
  });
}
function rt(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function fe(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && fe(t);
  }), e;
}
function en() {
  var e = {};
  function t(i, s) {
    return e[i] = (e[i] || []).concat(s), function() {
      return n(i, s);
    };
  }
  function n(i, s) {
    e[i] = (e[i] || []).filter(function(r) {
      return r !== s;
    });
  }
  function o(i, s) {
    i in e && e[i].forEach(function(r) {
      return r(s);
    });
  }
  return fe({
    on: t,
    off: n,
    dispatch: o
  });
}
function tn(e) {
  var t = [], n = function(r) {
    return r.addEventListener("wheel", e, {
      passive: !1
    }), t.push(r), function() {
      return o(r);
    };
  }, o = function(r) {
    r.removeEventListener("wheel", e), t = t.filter(function(l) {
      return l !== r;
    });
  }, i = function() {
    t.forEach(o);
  };
  return fe({
    observe: n,
    unobserve: o,
    disconnect: i
  });
}
var nn = 16 * 1.125, rn = typeof window < "u" && window.innerHeight || 800, We = [1, nn, rn];
function on(e) {
  var t = e.deltaX * We[e.deltaMode], n = e.deltaY * We[e.deltaMode], o = (e.deltaZ || 0) * We[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, n, o]
  };
}
var sn = [-1, -1, -1];
function an(e, t) {
  if (!t)
    return e;
  var n = t === !0 ? sn : t.map(function(o) {
    return o ? -1 : 1;
  });
  return ce({}, e, {
    axisDelta: e.axisDelta.map(function(o, i) {
      return o * n[i];
    })
  });
}
var ot = 700, cn = function(t) {
  return ce({}, t, {
    axisDelta: t.axisDelta.map(function(n) {
      return Jt(n, -ot, ot);
    })
  });
}, $e = process.env.NODE_ENV !== "production", ln = 0.6, un = 0.96, fn = 2, st = 5, it = /* @__PURE__ */ fe({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), dn = 400;
function at() {
  return {
    isStarted: !1,
    isStartPublished: !1,
    isMomentum: !1,
    startTime: 0,
    lastAbsDelta: 1 / 0,
    axisMovement: [0, 0, 0],
    axisVelocity: [0, 0, 0],
    accelerationFactors: [],
    scrollPoints: [],
    scrollPointsToMerge: [],
    willEndTimeout: dn
  };
}
function pn(e) {
  e === void 0 && (e = {});
  var t = en(), n = t.on, o = t.off, i = t.dispatch, s = it, r = at(), l, a = !1, c, d = function(b) {
    Array.isArray(b) ? b.forEach(function(S) {
      return f(S);
    }) : f(b);
  }, p = function(b) {
    return b === void 0 && (b = {}), Object.values(b).some(function(S) {
      return S == null;
    }) ? ($e && console.error("updateOptions ignored! undefined & null options not allowed"), s) : s = fe(ce({}, it, s, b));
  }, u = function(b) {
    var S = ce({
      event: l,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: r.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: r.axisVelocity,
      axisMovement: r.axisMovement,
      get axisMovementProjection() {
        return Fe(S.axisMovement, S.axisVelocity.map(function(M) {
          return Zt(M);
        }));
      }
    }, b);
    i("wheel", ce({}, S, {
      previous: c
    })), c = S;
  }, h = function(b, S) {
    var M = s, P = M.preventWheelAction, k = S[0], W = S[1], $ = S[2];
    if (typeof P == "boolean") return P;
    switch (P) {
      case "x":
        return Math.abs(k) >= b;
      case "y":
        return Math.abs(W) >= b;
      case "z":
        return Math.abs($) >= b;
      default:
        return $e && console.warn("unsupported preventWheelAction value: " + P, "warn"), !1;
    }
  }, f = function(b) {
    var S = cn(an(on(b), s.reverseSign)), M = S.axisDelta, P = S.timeStamp, k = rt(M);
    if (b.preventDefault && h(k, M) && b.preventDefault(), r.isStarted ? r.isMomentum && k > Math.max(2, r.lastAbsDelta * 2) && (L(!0), N()) : N(), k === 0 && Object.is && Object.is(b.deltaX, -0)) {
      a = !0;
      return;
    }
    l = b, r.axisMovement = Fe(r.axisMovement, M), r.lastAbsDelta = k, r.scrollPointsToMerge.push({
      axisDelta: M,
      timeStamp: P
    }), g(), u({
      axisDelta: M,
      isStart: !r.isStartPublished
    }), r.isStartPublished = !0, D();
  }, g = function() {
    r.scrollPointsToMerge.length === fn ? (r.scrollPoints.unshift({
      axisDeltaSum: r.scrollPointsToMerge.map(function(b) {
        return b.axisDelta;
      }).reduce(Fe),
      timeStamp: Qt(r.scrollPointsToMerge.map(function(b) {
        return b.timeStamp;
      }))
    }), m(), r.scrollPointsToMerge.length = 0, r.scrollPoints.length = 1, r.isMomentum || C()) : r.isStartPublished || v();
  }, v = function() {
    r.axisVelocity = Kt(r.scrollPointsToMerge).axisDelta.map(function(b) {
      return b / r.willEndTimeout;
    });
  }, m = function() {
    var b = r.scrollPoints, S = b[0], M = b[1];
    if (!(!M || !S)) {
      var P = S.timeStamp - M.timeStamp;
      if (P <= 0) {
        $e && console.warn("invalid deltaTime");
        return;
      }
      var k = S.axisDeltaSum.map(function($) {
        return $ / P;
      }), W = k.map(function($, H) {
        return $ / (r.axisVelocity[H] || 1);
      });
      r.axisVelocity = k, r.accelerationFactors.push(W), y(P);
    }
  }, y = function(b) {
    var S = Math.ceil(b / 10) * 10 * 1.2;
    r.isMomentum || (S = Math.max(100, S * 2)), r.willEndTimeout = Math.min(1e3, Math.round(S));
  }, x = function(b) {
    return b === 0 ? !0 : b <= un && b >= ln;
  }, C = function() {
    if (r.accelerationFactors.length >= st) {
      if (a && (a = !1, rt(r.axisVelocity) >= 0.2)) {
        O();
        return;
      }
      var b = r.accelerationFactors.slice(st * -1), S = b.every(function(M) {
        var P = !!M.reduce(function(W, $) {
          return W && W < 1 && W === $ ? 1 : 0;
        }), k = M.filter(x).length === M.length;
        return P || k;
      });
      S && O(), r.accelerationFactors = b;
    }
  }, O = function() {
    r.isMomentum = !0;
  }, N = function() {
    r = at(), r.isStarted = !0, r.startTime = Date.now(), c = void 0, a = !1;
  }, D = /* @__PURE__ */ (function() {
    var E;
    return function() {
      clearTimeout(E), E = setTimeout(L, r.willEndTimeout);
    };
  })(), L = function(b) {
    b === void 0 && (b = !1), r.isStarted && (r.isMomentum && b ? u({
      isEnding: !0,
      isMomentumCancel: !0
    }) : u({
      isEnding: !0
    }), r.isMomentum = !1, r.isStarted = !1);
  }, T = tn(d), R = T.observe, I = T.unobserve, B = T.disconnect;
  return p(e), fe({
    on: n,
    off: o,
    observe: R,
    unobserve: I,
    disconnect: B,
    feedWheel: d,
    updateOptions: p
  });
}
var mn = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
gt.globalOptions = void 0;
var gn = process.env.NODE_ENV !== "production";
function gt(e) {
  e === void 0 && (e = {});
  var t, n = function() {
  };
  function o(s, r) {
    var l, a, c = r.mergeOptions, d = r.optionsAtMedia, p = c(mn, gt.globalOptions), u = c(p, e);
    t = d(u);
    var h = s.internalEngine(), f = (l = t.target) != null ? l : s.containerNode().parentNode, g = (a = t.forceWheelAxis) != null ? a : h.options.axis, v = pn({
      preventWheelAction: g,
      reverseSign: [!0, !0, !1]
    }), m = v.observe(f), y = v.on("wheel", B), x = !1, C;
    function O(E) {
      try {
        C = new MouseEvent("mousedown", E.event), I(C);
      } catch {
        return gn && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), n();
      }
      x = !0, D(), t.wheelDraggingClass && f.classList.add(t.wheelDraggingClass);
    }
    function N(E) {
      x = !1, I(R("mouseup", E)), L(), t.wheelDraggingClass && f.classList.remove(t.wheelDraggingClass);
    }
    function D() {
      document.documentElement.addEventListener("mousemove", T, !0), document.documentElement.addEventListener("mouseup", T, !0), document.documentElement.addEventListener("mousedown", T, !0);
    }
    function L() {
      document.documentElement.removeEventListener("mousemove", T, !0), document.documentElement.removeEventListener("mouseup", T, !0), document.documentElement.removeEventListener("mousedown", T, !0);
    }
    function T(E) {
      x && E.isTrusted && E.stopImmediatePropagation();
    }
    function R(E, b) {
      var S, M;
      if (g === h.options.axis) {
        var P = b.axisMovement;
        S = P[0], M = P[1];
      } else {
        var k = b.axisMovement;
        M = k[0], S = k[1];
      }
      if (!h.options.skipSnaps && !h.options.dragFree) {
        var W = h.containerRect.width, $ = h.containerRect.height;
        S = S < 0 ? Math.max(S, -W) : Math.min(S, W), M = M < 0 ? Math.max(M, -$) : Math.min(M, $);
      }
      return new MouseEvent(E, {
        clientX: C.clientX + S,
        clientY: C.clientY + M,
        screenX: C.screenX + S,
        screenY: C.screenY + M,
        movementX: S,
        movementY: M,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function I(E) {
      s.containerNode().dispatchEvent(E);
    }
    function B(E) {
      var b = E.axisDelta, S = b[0], M = b[1], P = g === "x" ? S : M, k = g === "x" ? M : S, W = E.isMomentum && E.previous && !E.previous.isMomentum, $ = E.isEnding && !E.isMomentum || W, H = Math.abs(P) > Math.abs(k);
      H && !x && !E.isMomentum && O(E), x && ($ ? N(E) : I(R("mousemove", E)));
    }
    n = function() {
      m(), y(), L();
    };
  }
  var i = {
    name: "wheelGestures",
    options: e,
    init: o,
    destroy: function() {
      return n();
    }
  };
  return i;
}
function hn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ct(e) {
  return hn(e) || Array.isArray(e);
}
function vn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Be(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const i = JSON.stringify(Object.keys(e.breakpoints || {})), s = JSON.stringify(Object.keys(t.breakpoints || {}));
  return i !== s ? !1 : n.every((r) => {
    const l = e[r], a = t[r];
    return typeof l == "function" ? `${l}` == `${a}` : !ct(l) || !ct(a) ? l === a : Be(l, a);
  });
}
function lt(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function yn(e, t) {
  if (e.length !== t.length) return !1;
  const n = lt(e), o = lt(t);
  return n.every((i, s) => {
    const r = o[s];
    return Be(i, r);
  });
}
function Ge(e) {
  return typeof e == "number";
}
function _e(e) {
  return typeof e == "string";
}
function Ae(e) {
  return typeof e == "boolean";
}
function ut(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function j(e) {
  return Math.abs(e);
}
function He(e) {
  return Math.sign(e);
}
function ye(e, t) {
  return j(e - t);
}
function bn(e, t) {
  if (e === 0 || t === 0 || j(e) <= j(t)) return 0;
  const n = ye(j(e), j(t));
  return j(n / e);
}
function xn(e) {
  return Math.round(e * 100) / 100;
}
function xe(e) {
  return Se(e).map(Number);
}
function K(e) {
  return e[Ee(e)];
}
function Ee(e) {
  return Math.max(0, e.length - 1);
}
function Ye(e, t) {
  return t === Ee(e);
}
function ft(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function Se(e) {
  return Object.keys(e);
}
function ht(e, t) {
  return [e, t].reduce((n, o) => (Se(o).forEach((i) => {
    const s = n[i], r = o[i], l = ut(s) && ut(r);
    n[i] = l ? ht(s, r) : r;
  }), n), {});
}
function Ve(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function Sn(e, t) {
  const n = {
    start: o,
    center: i,
    end: s
  };
  function o() {
    return 0;
  }
  function i(a) {
    return s(a) / 2;
  }
  function s(a) {
    return t - a;
  }
  function r(a, c) {
    return _e(e) ? n[e](a) : e(t, a, c);
  }
  return {
    measure: r
  };
}
function we() {
  let e = [];
  function t(i, s, r, l = {
    passive: !0
  }) {
    let a;
    if ("addEventListener" in i)
      i.addEventListener(s, r, l), a = () => i.removeEventListener(s, r, l);
    else {
      const c = i;
      c.addListener(r), a = () => c.removeListener(r);
    }
    return e.push(a), o;
  }
  function n() {
    e = e.filter((i) => i());
  }
  const o = {
    add: t,
    clear: n
  };
  return o;
}
function wn(e, t, n, o) {
  const i = we(), s = 1e3 / 60;
  let r = null, l = 0, a = 0;
  function c() {
    i.add(e, "visibilitychange", () => {
      e.hidden && f();
    });
  }
  function d() {
    h(), i.clear();
  }
  function p(v) {
    if (!a) return;
    r || (r = v, n(), n());
    const m = v - r;
    for (r = v, l += m; l >= s; )
      n(), l -= s;
    const y = l / s;
    o(y), a && (a = t.requestAnimationFrame(p));
  }
  function u() {
    a || (a = t.requestAnimationFrame(p));
  }
  function h() {
    t.cancelAnimationFrame(a), r = null, l = 0, a = 0;
  }
  function f() {
    r = null, l = 0;
  }
  return {
    init: c,
    destroy: d,
    start: u,
    stop: h,
    update: n,
    render: o
  };
}
function En(e, t) {
  const n = t === "rtl", o = e === "y", i = o ? "y" : "x", s = o ? "x" : "y", r = !o && n ? -1 : 1, l = d(), a = p();
  function c(f) {
    const {
      height: g,
      width: v
    } = f;
    return o ? g : v;
  }
  function d() {
    return o ? "top" : n ? "right" : "left";
  }
  function p() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function u(f) {
    return f * r;
  }
  return {
    scroll: i,
    cross: s,
    startEdge: l,
    endEdge: a,
    measureSize: c,
    direction: u
  };
}
function le(e = 0, t = 0) {
  const n = j(e - t);
  function o(c) {
    return c < e;
  }
  function i(c) {
    return c > t;
  }
  function s(c) {
    return o(c) || i(c);
  }
  function r(c) {
    return s(c) ? o(c) ? e : t : c;
  }
  function l(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: r,
    reachedAny: s,
    reachedMax: i,
    reachedMin: o,
    removeOffset: l
  };
}
function vt(e, t, n) {
  const {
    constrain: o
  } = le(0, e), i = e + 1;
  let s = r(t);
  function r(u) {
    return n ? j((i + u) % i) : o(u);
  }
  function l() {
    return s;
  }
  function a(u) {
    return s = r(u), p;
  }
  function c(u) {
    return d().set(l() + u);
  }
  function d() {
    return vt(e, l(), n);
  }
  const p = {
    get: l,
    set: a,
    add: c,
    clone: d
  };
  return p;
}
function Dn(e, t, n, o, i, s, r, l, a, c, d, p, u, h, f, g, v, m, y) {
  const {
    cross: x,
    direction: C
  } = e, O = ["INPUT", "SELECT", "TEXTAREA"], N = {
    passive: !1
  }, D = we(), L = we(), T = le(50, 225).constrain(h.measure(20)), R = {
    mouse: 300,
    touch: 400
  }, I = {
    mouse: 500,
    touch: 600
  }, B = f ? 43 : 25;
  let E = !1, b = 0, S = 0, M = !1, P = !1, k = !1, W = !1;
  function $(w) {
    if (!y) return;
    function F(U) {
      (Ae(y) || y(w, U)) && pe(U);
    }
    const G = t;
    D.add(G, "dragstart", (U) => U.preventDefault(), N).add(G, "touchmove", () => {
    }, N).add(G, "touchend", () => {
    }).add(G, "touchstart", F).add(G, "mousedown", F).add(G, "touchcancel", Y).add(G, "contextmenu", Y).add(G, "click", re, !0);
  }
  function H() {
    D.clear(), L.clear();
  }
  function ee() {
    const w = W ? n : t;
    L.add(w, "touchmove", X, N).add(w, "touchend", Y).add(w, "mousemove", X, N).add(w, "mouseup", Y);
  }
  function te(w) {
    const F = w.nodeName || "";
    return O.includes(F);
  }
  function ne() {
    return (f ? I : R)[W ? "mouse" : "touch"];
  }
  function de(w, F) {
    const G = p.add(He(w) * -1), U = d.byDistance(w, !f).distance;
    return f || j(w) < T ? U : v && F ? U * 0.5 : d.byIndex(G.get(), 0).distance;
  }
  function pe(w) {
    const F = Ve(w, o);
    W = F, k = f && F && !w.buttons && E, E = ye(i.get(), r.get()) >= 2, !(F && w.button !== 0) && (te(w.target) || (M = !0, s.pointerDown(w), c.useFriction(0).useDuration(0), i.set(r), ee(), b = s.readPoint(w), S = s.readPoint(w, x), u.emit("pointerDown")));
  }
  function X(w) {
    if (!Ve(w, o) && w.touches.length >= 2) return Y(w);
    const G = s.readPoint(w), U = s.readPoint(w, x), J = ye(G, b), oe = ye(U, S);
    if (!P && !W && (!w.cancelable || (P = J > oe, !P)))
      return Y(w);
    const ie = s.pointerMove(w);
    J > g && (k = !0), c.useFriction(0.3).useDuration(0.75), l.start(), i.add(C(ie)), w.preventDefault();
  }
  function Y(w) {
    const G = d.byDistance(0, !1).index !== p.get(), U = s.pointerUp(w) * ne(), J = de(C(U), G), oe = bn(U, J), ie = B - 10 * oe, se = m + oe / 50;
    P = !1, M = !1, L.clear(), c.useDuration(ie).useFriction(se), a.distance(J, !f), W = !1, u.emit("pointerUp");
  }
  function re(w) {
    k && (w.stopPropagation(), w.preventDefault(), k = !1);
  }
  function Z() {
    return M;
  }
  return {
    init: $,
    destroy: H,
    pointerDown: Z
  };
}
function Mn(e, t) {
  let o, i;
  function s(p) {
    return p.timeStamp;
  }
  function r(p, u) {
    const f = `client${(u || e.scroll) === "x" ? "X" : "Y"}`;
    return (Ve(p, t) ? p : p.touches[0])[f];
  }
  function l(p) {
    return o = p, i = p, r(p);
  }
  function a(p) {
    const u = r(p) - r(i), h = s(p) - s(o) > 170;
    return i = p, h && (o = p), u;
  }
  function c(p) {
    if (!o || !i) return 0;
    const u = r(i) - r(o), h = s(p) - s(o), f = s(p) - s(i) > 170, g = u / h;
    return h && !f && j(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: l,
    pointerMove: a,
    pointerUp: c,
    readPoint: r
  };
}
function Cn() {
  function e(n) {
    const {
      offsetTop: o,
      offsetLeft: i,
      offsetWidth: s,
      offsetHeight: r
    } = n;
    return {
      top: o,
      right: i + s,
      bottom: o + r,
      left: i,
      width: s,
      height: r
    };
  }
  return {
    measure: e
  };
}
function Ln(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function Tn(e, t, n, o, i, s, r) {
  const l = [e].concat(o);
  let a, c, d = [], p = !1;
  function u(v) {
    return i.measureSize(r.measure(v));
  }
  function h(v) {
    if (!s) return;
    c = u(e), d = o.map(u);
    function m(y) {
      for (const x of y) {
        if (p) return;
        const C = x.target === e, O = o.indexOf(x.target), N = C ? c : d[O], D = u(C ? e : o[O]);
        if (j(D - N) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    a = new ResizeObserver((y) => {
      (Ae(s) || s(v, y)) && m(y);
    }), n.requestAnimationFrame(() => {
      l.forEach((y) => a.observe(y));
    });
  }
  function f() {
    p = !0, a && a.disconnect();
  }
  return {
    init: h,
    destroy: f
  };
}
function An(e, t, n, o, i, s) {
  let r = 0, l = 0, a = i, c = s, d = e.get(), p = 0;
  function u() {
    const N = o.get() - e.get(), D = !a;
    let L = 0;
    return D ? (r = 0, n.set(o), e.set(o), L = N) : (n.set(e), r += N / a, r *= c, d += r, e.add(r), L = d - p), l = He(L), p = d, O;
  }
  function h() {
    const N = o.get() - t.get();
    return j(N) < 1e-3;
  }
  function f() {
    return a;
  }
  function g() {
    return l;
  }
  function v() {
    return r;
  }
  function m() {
    return x(i);
  }
  function y() {
    return C(s);
  }
  function x(N) {
    return a = N, O;
  }
  function C(N) {
    return c = N, O;
  }
  const O = {
    direction: g,
    duration: f,
    velocity: v,
    seek: u,
    settled: h,
    useBaseFriction: y,
    useBaseDuration: m,
    useFriction: C,
    useDuration: x
  };
  return O;
}
function Nn(e, t, n, o, i) {
  const s = i.measure(10), r = i.measure(50), l = le(0.1, 0.99);
  let a = !1;
  function c() {
    return !(a || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function d(h) {
    if (!c()) return;
    const f = e.reachedMin(t.get()) ? "min" : "max", g = j(e[f] - t.get()), v = n.get() - t.get(), m = l.constrain(g / r);
    n.subtract(v * m), !h && j(v) < s && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function p(h) {
    a = !h;
  }
  return {
    shouldConstrain: c,
    constrain: d,
    toggleActive: p
  };
}
function In(e, t, n, o, i) {
  const s = le(-t + e, 0), r = p(), l = d(), a = u();
  function c(f, g) {
    return ye(f, g) <= 1;
  }
  function d() {
    const f = r[0], g = K(r), v = r.lastIndexOf(f), m = r.indexOf(g) + 1;
    return le(v, m);
  }
  function p() {
    return n.map((f, g) => {
      const {
        min: v,
        max: m
      } = s, y = s.constrain(f), x = !g, C = Ye(n, g);
      return x ? m : C || c(v, y) ? v : c(m, y) ? m : y;
    }).map((f) => parseFloat(f.toFixed(3)));
  }
  function u() {
    if (t <= e + i) return [s.max];
    if (o === "keepSnaps") return r;
    const {
      min: f,
      max: g
    } = l;
    return r.slice(f, g);
  }
  return {
    snapsContained: a,
    scrollContainLimit: l
  };
}
function On(e, t, n) {
  const o = t[0], i = n ? o - e : K(t);
  return {
    limit: le(i, o)
  };
}
function Pn(e, t, n, o) {
  const s = t.min + 0.1, r = t.max + 0.1, {
    reachedMin: l,
    reachedMax: a
  } = le(s, r);
  function c(u) {
    return u === 1 ? a(n.get()) : u === -1 ? l(n.get()) : !1;
  }
  function d(u) {
    if (!c(u)) return;
    const h = e * (u * -1);
    o.forEach((f) => f.add(h));
  }
  return {
    loop: d
  };
}
function kn(e) {
  const {
    max: t,
    length: n
  } = e;
  function o(s) {
    const r = s - t;
    return n ? r / -n : 0;
  }
  return {
    get: o
  };
}
function Rn(e, t, n, o, i) {
  const {
    startEdge: s,
    endEdge: r
  } = e, {
    groupSlides: l
  } = i, a = p().map(t.measure), c = u(), d = h();
  function p() {
    return l(o).map((g) => K(g)[r] - g[0][s]).map(j);
  }
  function u() {
    return o.map((g) => n[s] - g[s]).map((g) => -j(g));
  }
  function h() {
    return l(c).map((g) => g[0]).map((g, v) => g + a[v]);
  }
  return {
    snaps: c,
    snapsAligned: d
  };
}
function Fn(e, t, n, o, i, s) {
  const {
    groupSlides: r
  } = i, {
    min: l,
    max: a
  } = o, c = d();
  function d() {
    const u = r(s), h = !e || t === "keepSnaps";
    return n.length === 1 ? [s] : h ? u : u.slice(l, a).map((f, g, v) => {
      const m = !g, y = Ye(v, g);
      if (m) {
        const x = K(v[0]) + 1;
        return ft(x);
      }
      if (y) {
        const x = Ee(s) - K(v)[0] + 1;
        return ft(x, K(v)[0]);
      }
      return f;
    });
  }
  return {
    slideRegistry: c
  };
}
function Wn(e, t, n, o, i) {
  const {
    reachedAny: s,
    removeOffset: r,
    constrain: l
  } = o;
  function a(f) {
    return f.concat().sort((g, v) => j(g) - j(v))[0];
  }
  function c(f) {
    const g = e ? r(f) : l(f), v = t.map((y, x) => ({
      diff: d(y - g, 0),
      index: x
    })).sort((y, x) => j(y.diff) - j(x.diff)), {
      index: m
    } = v[0];
    return {
      index: m,
      distance: g
    };
  }
  function d(f, g) {
    const v = [f, f + n, f - n];
    if (!e) return f;
    if (!g) return a(v);
    const m = v.filter((y) => He(y) === g);
    return m.length ? a(m) : K(v) - n;
  }
  function p(f, g) {
    const v = t[f] - i.get(), m = d(v, g);
    return {
      index: f,
      distance: m
    };
  }
  function u(f, g) {
    const v = i.get() + f, {
      index: m,
      distance: y
    } = c(v), x = !e && s(v);
    if (!g || x) return {
      index: m,
      distance: f
    };
    const C = t[m] - y, O = f + d(C, 0);
    return {
      index: m,
      distance: O
    };
  }
  return {
    byDistance: u,
    byIndex: p,
    shortcut: d
  };
}
function $n(e, t, n, o, i, s, r) {
  function l(p) {
    const u = p.distance, h = p.index !== t.get();
    s.add(u), u && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), h && (n.set(t.get()), t.set(p.index), r.emit("select"));
  }
  function a(p, u) {
    const h = i.byDistance(p, u);
    l(h);
  }
  function c(p, u) {
    const h = t.clone().set(p), f = i.byIndex(h.get(), u);
    l(f);
  }
  return {
    distance: a,
    index: c
  };
}
function zn(e, t, n, o, i, s, r, l) {
  const a = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function d(h) {
    if (!l) return;
    function f(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      r.emit("slideFocusStart"), e.scrollLeft = 0;
      const y = n.findIndex((x) => x.includes(g));
      Ge(y) && (i.useDuration(0), o.index(y, 0), r.emit("slideFocus"));
    }
    s.add(document, "keydown", p, !1), t.forEach((g, v) => {
      s.add(g, "focus", (m) => {
        (Ae(l) || l(h, m)) && f(v);
      }, a);
    });
  }
  function p(h) {
    h.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: d
  };
}
function he(e) {
  let t = e;
  function n() {
    return t;
  }
  function o(a) {
    t = r(a);
  }
  function i(a) {
    t += r(a);
  }
  function s(a) {
    t -= r(a);
  }
  function r(a) {
    return Ge(a) ? a : a.get();
  }
  return {
    get: n,
    set: o,
    add: i,
    subtract: s
  };
}
function yt(e, t) {
  const n = e.scroll === "x" ? r : l, o = t.style;
  let i = null, s = !1;
  function r(u) {
    return `translate3d(${u}px,0px,0px)`;
  }
  function l(u) {
    return `translate3d(0px,${u}px,0px)`;
  }
  function a(u) {
    if (s) return;
    const h = xn(e.direction(u));
    h !== i && (o.transform = n(h), i = h);
  }
  function c(u) {
    s = !u;
  }
  function d() {
    s || (o.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: a,
    toggleActive: c
  };
}
function jn(e, t, n, o, i, s, r, l, a) {
  const d = xe(i), p = xe(i).reverse(), u = m().concat(y());
  function h(D, L) {
    return D.reduce((T, R) => T - i[R], L);
  }
  function f(D, L) {
    return D.reduce((T, R) => h(T, L) > 0 ? T.concat([R]) : T, []);
  }
  function g(D) {
    return s.map((L, T) => ({
      start: L - o[T] + 0.5 + D,
      end: L + t - 0.5 + D
    }));
  }
  function v(D, L, T) {
    const R = g(L);
    return D.map((I) => {
      const B = T ? 0 : -n, E = T ? n : 0, b = T ? "end" : "start", S = R[I][b];
      return {
        index: I,
        loopPoint: S,
        slideLocation: he(-1),
        translate: yt(e, a[I]),
        target: () => l.get() > S ? B : E
      };
    });
  }
  function m() {
    const D = r[0], L = f(p, D);
    return v(L, n, !1);
  }
  function y() {
    const D = t - r[0] - 1, L = f(d, D);
    return v(L, -n, !0);
  }
  function x() {
    return u.every(({
      index: D
    }) => {
      const L = d.filter((T) => T !== D);
      return h(L, t) <= 0.1;
    });
  }
  function C() {
    u.forEach((D) => {
      const {
        target: L,
        translate: T,
        slideLocation: R
      } = D, I = L();
      I !== R.get() && (T.to(I), R.set(I));
    });
  }
  function O() {
    u.forEach((D) => D.translate.clear());
  }
  return {
    canLoop: x,
    clear: O,
    loop: C,
    loopPoints: u
  };
}
function _n(e, t, n) {
  let o, i = !1;
  function s(a) {
    if (!n) return;
    function c(d) {
      for (const p of d)
        if (p.type === "childList") {
          a.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((d) => {
      i || (Ae(n) || n(a, d)) && c(d);
    }), o.observe(e, {
      childList: !0
    });
  }
  function r() {
    o && o.disconnect(), i = !0;
  }
  return {
    init: s,
    destroy: r
  };
}
function Vn(e, t, n, o) {
  const i = {};
  let s = null, r = null, l, a = !1;
  function c() {
    l = new IntersectionObserver((f) => {
      a || (f.forEach((g) => {
        const v = t.indexOf(g.target);
        i[v] = g;
      }), s = null, r = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((f) => l.observe(f));
  }
  function d() {
    l && l.disconnect(), a = !0;
  }
  function p(f) {
    return Se(i).reduce((g, v) => {
      const m = parseInt(v), {
        isIntersecting: y
      } = i[m];
      return (f && y || !f && !y) && g.push(m), g;
    }, []);
  }
  function u(f = !0) {
    if (f && s) return s;
    if (!f && r) return r;
    const g = p(f);
    return f && (s = g), f || (r = g), g;
  }
  return {
    init: c,
    destroy: d,
    get: u
  };
}
function Bn(e, t, n, o, i, s) {
  const {
    measureSize: r,
    startEdge: l,
    endEdge: a
  } = e, c = n[0] && i, d = f(), p = g(), u = n.map(r), h = v();
  function f() {
    if (!c) return 0;
    const y = n[0];
    return j(t[l] - y[l]);
  }
  function g() {
    if (!c) return 0;
    const y = s.getComputedStyle(K(o));
    return parseFloat(y.getPropertyValue(`margin-${a}`));
  }
  function v() {
    return n.map((y, x, C) => {
      const O = !x, N = Ye(C, x);
      return O ? u[x] + d : N ? u[x] + p : C[x + 1][l] - y[l];
    }).map(j);
  }
  return {
    slideSizes: u,
    slideSizesWithGaps: h,
    startGap: d,
    endGap: p
  };
}
function Gn(e, t, n, o, i, s, r, l, a) {
  const {
    startEdge: c,
    endEdge: d,
    direction: p
  } = e, u = Ge(n);
  function h(m, y) {
    return xe(m).filter((x) => x % y === 0).map((x) => m.slice(x, x + y));
  }
  function f(m) {
    return m.length ? xe(m).reduce((y, x, C) => {
      const O = K(y) || 0, N = O === 0, D = x === Ee(m), L = i[c] - s[O][c], T = i[c] - s[x][d], R = !o && N ? p(r) : 0, I = !o && D ? p(l) : 0, B = j(T - I - (L + R));
      return C && B > t + a && y.push(x), D && y.push(m.length), y;
    }, []).map((y, x, C) => {
      const O = Math.max(C[x - 1] || 0);
      return m.slice(O, y);
    }) : [];
  }
  function g(m) {
    return u ? h(m, n) : f(m);
  }
  return {
    groupSlides: g
  };
}
function Hn(e, t, n, o, i, s, r) {
  const {
    align: l,
    axis: a,
    direction: c,
    startIndex: d,
    loop: p,
    duration: u,
    dragFree: h,
    dragThreshold: f,
    inViewThreshold: g,
    slidesToScroll: v,
    skipSnaps: m,
    containScroll: y,
    watchResize: x,
    watchSlides: C,
    watchDrag: O,
    watchFocus: N
  } = s, D = 2, L = Cn(), T = L.measure(t), R = n.map(L.measure), I = En(a, c), B = I.measureSize(T), E = Ln(B), b = Sn(l, B), S = !p && !!y, M = p || !!y, {
    slideSizes: P,
    slideSizesWithGaps: k,
    startGap: W,
    endGap: $
  } = Bn(I, T, R, n, M, i), H = Gn(I, B, v, p, T, R, W, $, D), {
    snaps: ee,
    snapsAligned: te
  } = Rn(I, b, T, R, H), ne = -K(ee) + K(k), {
    snapsContained: de,
    scrollContainLimit: pe
  } = In(B, ne, te, y, D), X = S ? de : te, {
    limit: Y
  } = On(ne, X, p), re = vt(Ee(X), d, p), Z = re.clone(), z = xe(n), w = ({
    dragHandler: ue,
    scrollBody: Pe,
    scrollBounds: ke,
    options: {
      loop: Me
    }
  }) => {
    Me || ke.constrain(ue.pointerDown()), Pe.seek();
  }, F = ({
    scrollBody: ue,
    translate: Pe,
    location: ke,
    offsetLocation: Me,
    previousLocation: wt,
    scrollLooper: Et,
    slideLooper: Dt,
    dragHandler: Mt,
    animation: Ct,
    eventHandler: Ke,
    scrollBounds: Lt,
    options: {
      loop: Qe
    }
  }, Je) => {
    const et = ue.settled(), Tt = !Lt.shouldConstrain(), tt = Qe ? et : et && Tt, nt = tt && !Mt.pointerDown();
    nt && Ct.stop();
    const At = ke.get() * Je + wt.get() * (1 - Je);
    Me.set(At), Qe && (Et.loop(ue.direction()), Dt.loop()), Pe.to(Me.get()), nt && Ke.emit("settle"), tt || Ke.emit("scroll");
  }, G = wn(o, i, () => w(Oe), (ue) => F(Oe, ue)), U = 0.68, J = X[re.get()], oe = he(J), ie = he(J), se = he(J), ae = he(J), me = An(oe, se, ie, ae, u, U), Ne = Wn(p, X, ne, Y, ae), Ie = $n(G, re, Z, me, Ne, ae, r), qe = kn(Y), Xe = we(), xt = Vn(t, n, r, g), {
    slideRegistry: Ze
  } = Fn(S, y, X, pe, H, z), St = zn(e, n, Ze, Ie, me, Xe, r, N), Oe = {
    ownerDocument: o,
    ownerWindow: i,
    eventHandler: r,
    containerRect: T,
    slideRects: R,
    animation: G,
    axis: I,
    dragHandler: Dn(I, e, o, i, ae, Mn(I, i), oe, G, Ie, me, Ne, re, r, E, h, f, m, U, O),
    eventStore: Xe,
    percentOfView: E,
    index: re,
    indexPrevious: Z,
    limit: Y,
    location: oe,
    offsetLocation: se,
    previousLocation: ie,
    options: s,
    resizeHandler: Tn(t, r, i, n, I, x, L),
    scrollBody: me,
    scrollBounds: Nn(Y, se, ae, me, E),
    scrollLooper: Pn(ne, Y, se, [oe, se, ie, ae]),
    scrollProgress: qe,
    scrollSnapList: X.map(qe.get),
    scrollSnaps: X,
    scrollTarget: Ne,
    scrollTo: Ie,
    slideLooper: jn(I, B, ne, P, k, ee, X, se, n),
    slideFocus: St,
    slidesHandler: _n(t, r, C),
    slidesInView: xt,
    slideIndexes: z,
    slideRegistry: Ze,
    slidesToScroll: H,
    target: ae,
    translate: yt(I, t)
  };
  return Oe;
}
function Yn() {
  let e = {}, t;
  function n(c) {
    t = c;
  }
  function o(c) {
    return e[c] || [];
  }
  function i(c) {
    return o(c).forEach((d) => d(t, c)), a;
  }
  function s(c, d) {
    return e[c] = o(c).concat([d]), a;
  }
  function r(c, d) {
    return e[c] = o(c).filter((p) => p !== d), a;
  }
  function l() {
    e = {};
  }
  const a = {
    init: n,
    emit: i,
    off: r,
    on: s,
    clear: l
  };
  return a;
}
const Un = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function qn(e) {
  function t(s, r) {
    return ht(s, r || {});
  }
  function n(s) {
    const r = s.breakpoints || {}, l = Se(r).filter((a) => e.matchMedia(a).matches).map((a) => r[a]).reduce((a, c) => t(a, c), {});
    return t(s, l);
  }
  function o(s) {
    return s.map((r) => Se(r.breakpoints || {})).reduce((r, l) => r.concat(l), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Xn(e) {
  let t = [];
  function n(s, r) {
    return t = r.filter(({
      options: l
    }) => e.optionsAtMedia(l).active !== !1), t.forEach((l) => l.init(s, e)), r.reduce((l, a) => Object.assign(l, {
      [a.name]: a
    }), {});
  }
  function o() {
    t = t.filter((s) => s.destroy());
  }
  return {
    init: n,
    destroy: o
  };
}
function Te(e, t, n) {
  const o = e.ownerDocument, i = o.defaultView, s = qn(i), r = Xn(s), l = we(), a = Yn(), {
    mergeOptions: c,
    optionsAtMedia: d,
    optionsMediaQueries: p
  } = s, {
    on: u,
    off: h,
    emit: f
  } = a, g = I;
  let v = !1, m, y = c(Un, Te.globalOptions), x = c(y), C = [], O, N, D;
  function L() {
    const {
      container: z,
      slides: w
    } = x;
    N = (_e(z) ? e.querySelector(z) : z) || e.children[0];
    const G = _e(w) ? N.querySelectorAll(w) : w;
    D = [].slice.call(G || N.children);
  }
  function T(z) {
    const w = Hn(e, N, D, o, i, z, a);
    if (z.loop && !w.slideLooper.canLoop()) {
      const F = Object.assign({}, z, {
        loop: !1
      });
      return T(F);
    }
    return w;
  }
  function R(z, w) {
    v || (y = c(y, z), x = d(y), C = w || C, L(), m = T(x), p([y, ...C.map(({
      options: F
    }) => F)]).forEach((F) => l.add(F, "change", I)), x.active && (m.translate.to(m.location.get()), m.animation.init(), m.slidesInView.init(), m.slideFocus.init(Z), m.eventHandler.init(Z), m.resizeHandler.init(Z), m.slidesHandler.init(Z), m.options.loop && m.slideLooper.loop(), N.offsetParent && D.length && m.dragHandler.init(Z), O = r.init(Z, C)));
  }
  function I(z, w) {
    const F = H();
    B(), R(c({
      startIndex: F
    }, z), w), a.emit("reInit");
  }
  function B() {
    m.dragHandler.destroy(), m.eventStore.clear(), m.translate.clear(), m.slideLooper.clear(), m.resizeHandler.destroy(), m.slidesHandler.destroy(), m.slidesInView.destroy(), m.animation.destroy(), r.destroy(), l.clear();
  }
  function E() {
    v || (v = !0, l.clear(), B(), a.emit("destroy"), a.clear());
  }
  function b(z, w, F) {
    !x.active || v || (m.scrollBody.useBaseFriction().useDuration(w === !0 ? 0 : x.duration), m.scrollTo.index(z, F || 0));
  }
  function S(z) {
    const w = m.index.add(1).get();
    b(w, z, -1);
  }
  function M(z) {
    const w = m.index.add(-1).get();
    b(w, z, 1);
  }
  function P() {
    return m.index.add(1).get() !== H();
  }
  function k() {
    return m.index.add(-1).get() !== H();
  }
  function W() {
    return m.scrollSnapList;
  }
  function $() {
    return m.scrollProgress.get(m.offsetLocation.get());
  }
  function H() {
    return m.index.get();
  }
  function ee() {
    return m.indexPrevious.get();
  }
  function te() {
    return m.slidesInView.get();
  }
  function ne() {
    return m.slidesInView.get(!1);
  }
  function de() {
    return O;
  }
  function pe() {
    return m;
  }
  function X() {
    return e;
  }
  function Y() {
    return N;
  }
  function re() {
    return D;
  }
  const Z = {
    canScrollNext: P,
    canScrollPrev: k,
    containerNode: Y,
    internalEngine: pe,
    destroy: E,
    off: h,
    on: u,
    emit: f,
    plugins: de,
    previousScrollSnap: ee,
    reInit: g,
    rootNode: X,
    scrollNext: S,
    scrollPrev: M,
    scrollProgress: $,
    scrollSnapList: W,
    scrollTo: b,
    selectedScrollSnap: H,
    slideNodes: re,
    slidesInView: te,
    slidesNotInView: ne
  };
  return R(t, n), setTimeout(() => a.emit("init"), 0), Z;
}
Te.globalOptions = void 0;
function Ue(e = {}, t = []) {
  const n = je(e), o = je(t), [i, s] = be(), [r, l] = be(), a = It(() => {
    i && i.reInit(n.current, o.current);
  }, [i]);
  return Ce(() => {
    Be(n.current, e) || (n.current = e, a());
  }, [e, a]), Ce(() => {
    yn(o.current, t) || (o.current = t, a());
  }, [t, a]), Ce(() => {
    if (vn() && r) {
      Te.globalOptions = Ue.globalOptions;
      const c = Te(r, n.current, o.current);
      return s(c), () => c.destroy();
    } else
      s(void 0);
  }, [r, s]), [l, i];
}
Ue.globalOptions = void 0;
const _ = 28, dt = 16, lr = ({ children: e }) => {
  const t = je(null), [n, o] = be(!0), [i, s] = be(!1);
  Ot(() => {
    const d = t.current;
    if (!d) return;
    const p = new ResizeObserver(() => a());
    p.observe(d);
    const u = () => {
      a();
    };
    return d.addEventListener("scroll", u), a(), () => {
      p.disconnect(), d.removeEventListener("scroll", u);
    };
  }, []);
  function r() {
    const d = t.current;
    d && d.scrollBy({
      left: d.clientWidth,
      behavior: "smooth"
    });
  }
  function l() {
    const d = t.current;
    d && d.scrollBy({
      left: -d.clientWidth,
      behavior: "smooth"
    });
  }
  const a = () => {
    if (!t.current) return;
    const { scrollLeft: d, scrollWidth: p, clientWidth: u } = t.current;
    s(d > 0), o(d + u < p);
  };
  let c = "";
  return i && n ? c = `linear-gradient(to right, transparent 0px, transparent ${_}px, black ${2 * _}px, black calc(100% - ${3 * _}px), transparent calc(100% - ${2 * _}px), transparent 100%)` : i && !n ? c = `linear-gradient(to right, transparent 0px, transparent ${_}px, black ${2 * _}px, black 100%)` : !i && n ? c = `linear-gradient(to right, black 0px, black calc(100% - ${3 * _}px), transparent calc(100% - ${2 * _}px), transparent 100%)` : c = "none", /* @__PURE__ */ ve("div", { className: "relative", children: [
    /* @__PURE__ */ A(
      "div",
      {
        ref: t,
        className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
        style: {
          scrollbarWidth: "none",
          // Firefox
          msOverflowStyle: "none",
          // IE & Edge
          margin: `-${_}px`,
          padding: `${_}px`,
          height: `calc(100% + ${_ * 2}px)`,
          width: `calc(100% + ${_ * 2}px)`,
          maskImage: c,
          WebkitMaskImage: c,
          scrollSnapType: "x mandatory"
        },
        children: Array.isArray(e) ? e.map((d, p) => /* @__PURE__ */ A(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: _ + dt + "px"
            },
            children: d
          },
          p
        )) : e && /* @__PURE__ */ A(
          "div",
          {
            className: "flex-shrink-0",
            style: {
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
              scrollMarginLeft: _ + dt + "px"
            },
            children: e
          }
        )
      }
    ),
    i && /* @__PURE__ */ A(
      Le,
      {
        size: "lg",
        compact: !0,
        variant: "outline",
        className: Q(
          "absolute opacity-100 transition-all",
          "-left-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: l,
        icon: jt,
        label: "Previous",
        hideLabel: !0
      }
    ),
    n && /* @__PURE__ */ A(
      Le,
      {
        size: "lg",
        variant: "outline",
        compact: !0,
        className: Q(
          "absolute opacity-100 transition-all",
          "-right-4 top-1/2 -translate-y-1/2 rounded-lg"
        ),
        onClick: r,
        icon: Rt,
        label: "Next",
        hideLabel: !0
      }
    )
  ] });
}, bt = V.createContext(null);
function De() {
  const e = V.useContext(bt);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Zn = V.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: o,
    className: i,
    children: s,
    ...r
  }, l) => {
    const [a, c] = Ue(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [d, p] = V.useState(!1), [u, h] = V.useState(!1), f = V.useCallback((y) => {
      y && (p(y.canScrollPrev()), h(y.canScrollNext()));
    }, []), g = V.useCallback(() => {
      c?.scrollPrev();
    }, [c]), v = V.useCallback(() => {
      c?.scrollNext();
    }, [c]), m = V.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), g()) : y.key === "ArrowRight" && (y.preventDefault(), v());
      },
      [g, v]
    );
    return V.useEffect(() => {
      !c || !n || n(c);
    }, [c, n]), V.useEffect(() => {
      if (c)
        return f(c), c.on("reInit", f), c.on("select", f), () => {
          c?.off("select", f);
        };
    }, [c, f]), /* @__PURE__ */ A(
      bt.Provider,
      {
        value: {
          carouselRef: a,
          api: c,
          opts: t,
          orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev: g,
          scrollNext: v,
          canScrollPrev: d,
          canScrollNext: u
        },
        children: /* @__PURE__ */ A(
          "div",
          {
            ref: l,
            onKeyDownCapture: m,
            className: Q("group/carousel relative", i),
            role: "region",
            "aria-roledescription": "carousel",
            ...r,
            children: s
          }
        )
      }
    );
  }
);
Zn.displayName = "Carousel";
const Kn = V.forwardRef(({ className: e, ...t }, n) => {
  const o = `linear-gradient(to right, transparent 0px, transparent ${_ / 2}px, black ${_}px, black calc(100% - ${_}px), transparent calc(100% - ${_ / 2}px), transparent 100%)`, { carouselRef: i, orientation: s } = De();
  return /* @__PURE__ */ A(
    "div",
    {
      ref: i,
      className: "overflow-hidden",
      style: {
        scrollbarWidth: "none",
        // For Firefox
        msOverflowStyle: "none",
        // For IE and Edge
        margin: `-${_}px`,
        padding: `${_}px`,
        height: `calc(100% + ${_ * 2}px)`,
        width: `calc(100% + ${_ * 2}px)`,
        maskImage: o,
        WebkitMaskImage: o
      },
      children: /* @__PURE__ */ A(
        "div",
        {
          ref: n,
          className: Q(
            "flex",
            s === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
});
Kn.displayName = "CarouselContent";
const Qn = V.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: o } = De();
  return /* @__PURE__ */ A(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: Q(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
Qn.displayName = "CarouselItem";
const Jn = V.forwardRef(({ className: e, variant: t = "outline", ...n }, o) => {
  const { orientation: i, scrollPrev: s, canScrollPrev: r } = De();
  return /* @__PURE__ */ A(
    "div",
    {
      className: Q(
        "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
        !r && "opacity-0 group-hover/carousel:opacity-0",
        i === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"
      ),
      children: /* @__PURE__ */ A(
        Le,
        {
          compact: !0,
          ref: o,
          size: "sm",
          variant: t,
          className: Q("absolute opacity-100 transition-all", e),
          disabled: !r,
          onClick: s,
          ...n,
          label: "Previous",
          icon: _t,
          hideLabel: !0
        }
      )
    }
  );
});
Jn.displayName = "CarouselPrevious";
const er = V.forwardRef(
  ({ className: e, variant: t = "outline", ...n }, o) => {
    const { orientation: i, scrollNext: s, canScrollNext: r } = De();
    return /* @__PURE__ */ A(
      "div",
      {
        className: Q(
          "absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100",
          !r && "opacity-0 group-hover/carousel:opacity-0",
          i === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"
        ),
        children: /* @__PURE__ */ A(
          Le,
          {
            ref: o,
            size: "sm",
            variant: t,
            compact: !0,
            className: Q("absolute opacity-100 transition-all", e),
            disabled: !r,
            onClick: s,
            ...n,
            label: "Next",
            icon: Vt,
            hideLabel: !0
          }
        )
      }
    );
  }
);
er.displayName = "CarouselNext";
const tr = V.forwardRef(({ ...e }, t) => {
  const { api: n } = De(), [, o] = V.useState(!1), i = V.useRef(null), s = V.useCallback(() => {
    o((u) => !u);
  }, []);
  V.useEffect(() => {
    if (n)
      return n.on("select", s), n.on("reInit", s), () => {
        n.off("select", s), n.off("reInit", s);
      };
  }, [n, s]);
  const r = n?.scrollSnapList().length || 0, l = n?.selectedScrollSnap() || 0;
  if (V.useEffect(() => {
    if (!i.current) return;
    const u = i.current, h = 16, f = l * h - u.clientWidth / 2 + h / 2;
    u.scrollTo({
      left: f,
      behavior: "smooth"
    });
  }, [l]), V.useEffect(() => {
    const u = i.current;
    if (!u) return;
    const h = (f) => {
      f.preventDefault(), f.stopPropagation();
    };
    return u.addEventListener("wheel", h, { passive: !1 }), u.addEventListener("touchmove", h, { passive: !1 }), () => {
      u.removeEventListener("wheel", h), u.removeEventListener("touchmove", h);
    };
  }, []), r <= 1)
    return null;
  const a = r > 5 ? 5 : r, c = Array.from({ length: r }, (u, h) => h), d = Math.min(a, r) * 16, p = (u) => {
    if (a === r) return null;
    const h = Math.abs(u - l);
    if (h === 0 || h === 1) return "scale-100";
    if (h === 2)
      return l === 0 || l === r - 1 ? "scale-100" : "scale-75";
    if (h === 3)
      return l === 0 || l === r - 1 ? "scale-75" : "scale-50";
    if (h >= 4) return "scale-50";
  };
  return /* @__PURE__ */ A("div", { ref: t, className: Q("flex justify-center", e.className), children: /* @__PURE__ */ A(
    "div",
    {
      className: "relative overflow-hidden",
      style: { width: `${d}px` },
      children: /* @__PURE__ */ A(
        "div",
        {
          ref: i,
          className: "flex w-full gap-0 overflow-x-scroll",
          style: {
            scrollbarWidth: "none",
            overscrollBehavior: "none"
          },
          tabIndex: 0,
          "aria-label": "Carousel pagination",
          onKeyDown: (u) => {
            u.key === "ArrowLeft" ? (u.preventDefault(), n?.scrollPrev()) : u.key === "ArrowRight" && (u.preventDefault(), n?.scrollNext());
          },
          children: c.map((u) => /* @__PURE__ */ A(
            "button",
            {
              className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
              "aria-label": `Go to slide ${u + 1}`,
              "aria-current": u === l ? "true" : void 0,
              onClick: () => n?.scrollTo(u),
              tabIndex: -1,
              children: /* @__PURE__ */ A(
                "div",
                {
                  className: Q(
                    "h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]",
                    u === l && "rounded-[3px] opacity-100 group-hover/dot:opacity-100",
                    p(u)
                  )
                }
              )
            },
            u
          ))
        }
      )
    }
  ) });
});
tr.displayName = "CarouselDots";
function ge(e, t) {
  return Bt(e, -t);
}
function pt(e, t) {
  return Gt(e, -t);
}
const ze = [
  {
    id: "bottom",
    path: "M11.9948 17.5244C14.2802 17.5244 16.5188 18.2872 18.2805 19.7631C16.5189 21.1914 14.2801 22 11.9948 22C9.61453 21.9999 7.42426 21.1436 5.71037 19.7631C7.47193 18.3348 9.70955 17.5245 11.9948 17.5244Z"
  },
  {
    id: "left",
    path: "M4.23721 5.71327C5.66526 7.47502 6.47496 9.71299 6.47503 11.9985C6.47502 14.2841 5.71292 16.5231 4.23721 18.2849C2.80903 16.5231 2 14.2841 2 11.9985C2.00007 9.61784 2.85682 7.42739 4.23721 5.71327Z"
  },
  {
    id: "right",
    path: "M19.7622 5.71327C21.1902 7.47502 21.9999 9.71299 22 11.9985C22 14.2841 21.2379 16.5231 19.7622 18.2849C18.334 16.5231 17.525 14.2841 17.525 11.9985C17.525 9.61784 18.3818 7.42739 19.7622 5.71327Z"
  },
  {
    id: "top",
    path: "M11.9948 2C14.2802 2 16.5188 2.76274 18.2805 4.2387C16.5189 5.66699 14.2801 6.47557 11.9948 6.47557C9.61453 6.4755 7.42426 5.61919 5.71037 4.2387C7.47193 2.81041 9.70955 2.00007 11.9948 2Z"
  }
], nr = (e, t) => {
  const n = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, o = kt();
  return /* @__PURE__ */ ve(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: t,
      ...e,
      children: [
        /* @__PURE__ */ A("defs", { children: ze.map((i) => /* @__PURE__ */ A("clipPath", { id: `${o}-${i.id}`, children: /* @__PURE__ */ A("path", { d: i.path }) }, i.id)) }),
        n ? ze.map((i) => /* @__PURE__ */ A(
          "path",
          {
            d: i.path,
            fill: "currentColor",
            vectorEffect: "non-scaling-stroke"
          },
          i.id
        )) : ze.map((i) => /* @__PURE__ */ A(
          "foreignObject",
          {
            x: "0",
            y: "0",
            width: "24",
            height: "24",
            clipPath: `url(#${o}-${i.id})`,
            children: /* @__PURE__ */ A(
              "div",
              {
                style: {
                  width: "100%",
                  height: "100%",
                  background: "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
                }
              }
            )
          },
          i.id
        ))
      ]
    }
  );
}, rr = Pt(nr);
function or({
  title: e,
  description: t,
  onClick: n,
  onClose: o,
  isVisible: i,
  dismissable: s = !1,
  trackVisibility: r,
  type: l,
  ...a
}) {
  const [c, d] = be(i);
  Ce(() => {
    d(i), r && r(i);
  }, [i, r]);
  const p = () => {
    d(!1), o && o();
  }, u = () => l === "one-campaign" ? {
    background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
    borderRadius: "12px",
    padding: "1px"
  } : {}, h = () => l === "one-campaign" ? {
    background: "#fef7f8",
    borderRadius: "11px"
  } : {}, f = () => l === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary";
  return c && /* @__PURE__ */ A("div", { children: /* @__PURE__ */ A("div", { className: "p-2", children: /* @__PURE__ */ A("div", { style: u(), children: /* @__PURE__ */ ve(
    "div",
    {
      className: f(),
      style: h(),
      onClick: n,
      children: [
        /* @__PURE__ */ ve(Nt, { children: [
          l === "one-campaign" ? /* @__PURE__ */ A("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ A(Wt, { icon: rr, size: "lg", className: "!h-8 !w-8" }) }) : /* @__PURE__ */ A("div", { className: "relative flex h-8 w-8 shrink-0 items-center justify-center", children: /* @__PURE__ */ A(
            $t,
            {
              module: a.module,
              size: "lg"
            }
          ) }),
          /* @__PURE__ */ A("div", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ ve("div", { children: [
            /* @__PURE__ */ A("h3", { className: "text-lg font-medium", children: e }),
            /* @__PURE__ */ A("p", { className: "text-f1-foreground-secondary", children: t })
          ] }) })
        ] }),
        s && /* @__PURE__ */ A("div", { className: "h-6 w-6", children: /* @__PURE__ */ A(
          zt,
          {
            variant: "ghost",
            icon: Ht,
            size: "sm",
            hideLabel: !0,
            onClick: p,
            label: "Close"
          }
        ) })
      ]
    }
  ) }) }) });
}
const ur = Ft(or), fr = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => q.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => q.day.toRange(Re(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => q.day.toRange({
      from: Re(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => q.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => q.week.toRange(Re(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => q.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => q.month.toRange(ge(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => q.month.toRange(ge(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => q.month.toRange(ge(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => q.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => q.quarter.toRange(ge(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => q.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => q.halfyear.toRange(ge(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => q.year.toRange(pt(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => q.year.toRange(pt(/* @__PURE__ */ new Date(), 3))
  }
};
export {
  mt as A,
  Zn as C,
  lr as D,
  ur as P,
  gt as W,
  Kn as a,
  Qn as b,
  Jn as c,
  er as d,
  tr as e,
  fr as p
};
