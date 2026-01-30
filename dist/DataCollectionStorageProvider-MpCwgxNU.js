import { jsx as S, jsxs as K, Fragment as ft } from "react/jsx-runtime";
import * as fe from "react";
import C, { useRef as Me, useState as he, useCallback as tt, useEffect as Le, useContext as dt, useMemo as He, useLayoutEffect as sO, createContext as Ft, isValidElement as Nt, Children as Kr, PureComponent as jt, forwardRef as ze, useImperativeHandle as AT, cloneElement as Ue, createElement as uO, Component as cO, useId as _T } from "react";
import { bh as oy, bf as PT, dm as TT, B as Ar, aG as lO, c as J, aH as fO, aA as ET, aB as CT, a as As, f as na, dn as eo, bs as _e, D as jT, dp as MT, dq as $T, aM as dO, dr as IT, ds as kT, bK as ph, dt as DT, F as ut, Q as _s, aX as pO, b6 as hh, ay as hO, du as bn, dv as NT, dw as RT, dx as LT, dy as sy, dz as uy, dA as cy, dB as ly, dC as fy, dD as vO, dE as bo, dF as qT, dG as BT, cq as Ga, dH as FT, J as yO, K as mO, L as gO, q as vh, a1 as nn, r as bO, s as xO, bP as yh, g as de, ca as zT, by as mh, bz as gh, bA as bh, bD as xh, cA as WT, cH as wh, d7 as UT, co as wO, aC as HT, az as KT, cw as Di, u as Pr, aY as VT, bF as GT, z as Gt, y as OO, a3 as YT, a4 as SO, v as XT, dc as Ps, dI as ZT, O as an, aV as JT, aJ as QT, b1 as eE, aK as AO, b5 as tE, m as Ht, N as Oh, e as _O, aa as rE, n as PO, bM as nE, S as At, w as TO, dJ as EO, M as aE, V as CO, t as iE, cR as Xe, dK as jO, dL as MO, dM as Id, dN as oE, dO as dy, cU as sE, cV as py, P as uE, l as cE, o as lE, dk as fE, ae as dE, d9 as pE, aD as hE, dP as vE, aE as yE, cu as kd, aF as mE, A as Na, d as gE, au as bE, b8 as xE, ba as wE, dd as OE, R as SE, T as AE, U as _E, W as PE } from "./index-UtgvLWgr.js";
const TE = {
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
function EE(e, t) {
  const r = e.scrollSnapList();
  return typeof t == "number" ? r.map(() => t) : t(r, e);
}
function CE(e, t) {
  const r = e.rootNode();
  return t && t(r) || r;
}
function Sh(e = {}) {
  let t, r, n, a, i = null, o = 0, s = !1, u = !1, c = !1, l = !1;
  function f(j, I) {
    r = j;
    const {
      mergeOptions: D,
      optionsAtMedia: R
    } = I, L = D(TE, Sh.globalOptions), z = D(L, e);
    if (t = R(z), r.scrollSnapList().length <= 1) return;
    l = t.jump, n = !1, a = EE(r, t.delay);
    const {
      eventStore: N,
      ownerDocument: B
    } = r.internalEngine(), q = !!r.internalEngine().options.watchDrag, H = CE(r, t.rootNode);
    N.add(B, "visibilitychange", b), q && r.on("pointerDown", x), q && !t.stopOnInteraction && r.on("pointerUp", O), t.stopOnMouseEnter && N.add(H, "mouseenter", m), t.stopOnMouseEnter && !t.stopOnInteraction && N.add(H, "mouseleave", w), t.stopOnFocusIn && r.on("slideFocusStart", v), t.stopOnFocusIn && !t.stopOnInteraction && N.add(r.containerNode(), "focusout", h), t.playOnInit && h();
  }
  function d() {
    r.off("pointerDown", x).off("pointerUp", O).off("slideFocusStart", v), v(), n = !0, s = !1;
  }
  function p() {
    const {
      ownerWindow: j
    } = r.internalEngine();
    j.clearTimeout(o), o = j.setTimeout(T, a[r.selectedScrollSnap()]), i = (/* @__PURE__ */ new Date()).getTime(), r.emit("autoplay:timerset");
  }
  function y() {
    const {
      ownerWindow: j
    } = r.internalEngine();
    j.clearTimeout(o), o = 0, i = null, r.emit("autoplay:timerstopped");
  }
  function h() {
    if (!n) {
      if (g()) {
        c = !0;
        return;
      }
      s || r.emit("autoplay:play"), p(), s = !0;
    }
  }
  function v() {
    n || (s && r.emit("autoplay:stop"), y(), s = !1);
  }
  function b() {
    if (g())
      return c = s, v();
    c && h();
  }
  function g() {
    const {
      ownerDocument: j
    } = r.internalEngine();
    return j.visibilityState === "hidden";
  }
  function x() {
    u || v();
  }
  function O() {
    u || h();
  }
  function m() {
    u = !0, v();
  }
  function w() {
    u = !1, h();
  }
  function A(j) {
    typeof j < "u" && (l = j), h();
  }
  function _() {
    s && v();
  }
  function P() {
    s && h();
  }
  function k() {
    return s;
  }
  function T() {
    const {
      index: j
    } = r.internalEngine(), I = j.clone().add(1).get(), D = r.scrollSnapList().length - 1, R = t.stopOnLastSnap && I === D;
    if (r.canScrollNext() ? r.scrollNext(l) : r.scrollTo(0, l), r.emit("autoplay:select"), R) return v();
    h();
  }
  function $() {
    if (!i) return null;
    const j = a[r.selectedScrollSnap()], I = (/* @__PURE__ */ new Date()).getTime() - i;
    return j - I;
  }
  return {
    name: "autoplay",
    options: e,
    init: f,
    destroy: d,
    play: A,
    stop: _,
    reset: P,
    isPlaying: k,
    timeUntilNext: $
  };
}
Sh.globalOptions = void 0;
function Vr() {
  return Vr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vr.apply(this, arguments);
}
var jE = 0.996, ME = function(t, r) {
  return r === void 0 && (r = jE), t * r / (1 - r);
};
function $E(e) {
  return e[e.length - 1];
}
function IE(e) {
  return e.reduce(function(t, r) {
    return t + r;
  }) / e.length;
}
var kE = function(t, r, n) {
  return Math.min(Math.max(r, t), n);
};
function gu(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(r, n) {
    return r + t[n];
  });
}
function hy(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function En(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && En(t);
  }), e;
}
function DE() {
  var e = {};
  function t(a, i) {
    return e[a] = (e[a] || []).concat(i), function() {
      return r(a, i);
    };
  }
  function r(a, i) {
    e[a] = (e[a] || []).filter(function(o) {
      return o !== i;
    });
  }
  function n(a, i) {
    a in e && e[a].forEach(function(o) {
      return o(i);
    });
  }
  return En({
    on: t,
    off: r,
    dispatch: n
  });
}
function NE(e) {
  var t = [], r = function(o) {
    return o.addEventListener("wheel", e, {
      passive: !1
    }), t.push(o), function() {
      return n(o);
    };
  }, n = function(o) {
    o.removeEventListener("wheel", e), t = t.filter(function(s) {
      return s !== o;
    });
  }, a = function() {
    t.forEach(n);
  };
  return En({
    observe: r,
    unobserve: n,
    disconnect: a
  });
}
var RE = 16 * 1.125, LE = typeof window < "u" && window.innerHeight || 800, bu = [1, RE, LE];
function qE(e) {
  var t = e.deltaX * bu[e.deltaMode], r = e.deltaY * bu[e.deltaMode], n = (e.deltaZ || 0) * bu[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, r, n]
  };
}
var BE = [-1, -1, -1];
function FE(e, t) {
  if (!t)
    return e;
  var r = t === !0 ? BE : t.map(function(n) {
    return n ? -1 : 1;
  });
  return Vr({}, e, {
    axisDelta: e.axisDelta.map(function(n, a) {
      return n * r[a];
    })
  });
}
var vy = 700, zE = function(t) {
  return Vr({}, t, {
    axisDelta: t.axisDelta.map(function(r) {
      return kE(r, -vy, vy);
    })
  });
}, xu = process.env.NODE_ENV !== "production", WE = 0.6, UE = 0.96, HE = 2, yy = 5, my = /* @__PURE__ */ En({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), KE = 400;
function gy() {
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
    willEndTimeout: KE
  };
}
function VE(e) {
  e === void 0 && (e = {});
  var t = DE(), r = t.on, n = t.off, a = t.dispatch, i = my, o = gy(), s, u = !1, c, l = function(j) {
    Array.isArray(j) ? j.forEach(function(I) {
      return y(I);
    }) : y(j);
  }, f = function(j) {
    return j === void 0 && (j = {}), Object.values(j).some(function(I) {
      return I == null;
    }) ? (xu && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = En(Vr({}, my, i, j));
  }, d = function(j) {
    var I = Vr({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: o.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: o.axisVelocity,
      axisMovement: o.axisMovement,
      get axisMovementProjection() {
        return gu(I.axisMovement, I.axisVelocity.map(function(D) {
          return ME(D);
        }));
      }
    }, j);
    a("wheel", Vr({}, I, {
      previous: c
    })), c = I;
  }, p = function(j, I) {
    var D = i, R = D.preventWheelAction, L = I[0], z = I[1], N = I[2];
    if (typeof R == "boolean") return R;
    switch (R) {
      case "x":
        return Math.abs(L) >= j;
      case "y":
        return Math.abs(z) >= j;
      case "z":
        return Math.abs(N) >= j;
      default:
        return xu && console.warn("unsupported preventWheelAction value: " + R, "warn"), !1;
    }
  }, y = function(j) {
    var I = zE(FE(qE(j), i.reverseSign)), D = I.axisDelta, R = I.timeStamp, L = hy(D);
    if (j.preventDefault && p(L, D) && j.preventDefault(), o.isStarted ? o.isMomentum && L > Math.max(2, o.lastAbsDelta * 2) && (_(!0), w()) : w(), L === 0 && Object.is && Object.is(j.deltaX, -0)) {
      u = !0;
      return;
    }
    s = j, o.axisMovement = gu(o.axisMovement, D), o.lastAbsDelta = L, o.scrollPointsToMerge.push({
      axisDelta: D,
      timeStamp: R
    }), h(), d({
      axisDelta: D,
      isStart: !o.isStartPublished
    }), o.isStartPublished = !0, A();
  }, h = function() {
    o.scrollPointsToMerge.length === HE ? (o.scrollPoints.unshift({
      axisDeltaSum: o.scrollPointsToMerge.map(function(j) {
        return j.axisDelta;
      }).reduce(gu),
      timeStamp: IE(o.scrollPointsToMerge.map(function(j) {
        return j.timeStamp;
      }))
    }), b(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || O()) : o.isStartPublished || v();
  }, v = function() {
    o.axisVelocity = $E(o.scrollPointsToMerge).axisDelta.map(function(j) {
      return j / o.willEndTimeout;
    });
  }, b = function() {
    var j = o.scrollPoints, I = j[0], D = j[1];
    if (!(!D || !I)) {
      var R = I.timeStamp - D.timeStamp;
      if (R <= 0) {
        xu && console.warn("invalid deltaTime");
        return;
      }
      var L = I.axisDeltaSum.map(function(N) {
        return N / R;
      }), z = L.map(function(N, B) {
        return N / (o.axisVelocity[B] || 1);
      });
      o.axisVelocity = L, o.accelerationFactors.push(z), g(R);
    }
  }, g = function(j) {
    var I = Math.ceil(j / 10) * 10 * 1.2;
    o.isMomentum || (I = Math.max(100, I * 2)), o.willEndTimeout = Math.min(1e3, Math.round(I));
  }, x = function(j) {
    return j === 0 ? !0 : j <= UE && j >= WE;
  }, O = function() {
    if (o.accelerationFactors.length >= yy) {
      if (u && (u = !1, hy(o.axisVelocity) >= 0.2)) {
        m();
        return;
      }
      var j = o.accelerationFactors.slice(yy * -1), I = j.every(function(D) {
        var R = !!D.reduce(function(z, N) {
          return z && z < 1 && z === N ? 1 : 0;
        }), L = D.filter(x).length === D.length;
        return R || L;
      });
      I && m(), o.accelerationFactors = j;
    }
  }, m = function() {
    o.isMomentum = !0;
  }, w = function() {
    o = gy(), o.isStarted = !0, o.startTime = Date.now(), c = void 0, u = !1;
  }, A = /* @__PURE__ */ (function() {
    var M;
    return function() {
      clearTimeout(M), M = setTimeout(_, o.willEndTimeout);
    };
  })(), _ = function(j) {
    j === void 0 && (j = !1), o.isStarted && (o.isMomentum && j ? d({
      isEnding: !0,
      isMomentumCancel: !0
    }) : d({
      isEnding: !0
    }), o.isMomentum = !1, o.isStarted = !1);
  }, P = NE(l), k = P.observe, T = P.unobserve, $ = P.disconnect;
  return f(e), En({
    on: r,
    off: n,
    observe: k,
    unobserve: T,
    disconnect: $,
    feedWheel: l,
    updateOptions: f
  });
}
var GE = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Ah.globalOptions = void 0;
var YE = process.env.NODE_ENV !== "production";
function Ah(e) {
  e === void 0 && (e = {});
  var t, r = function() {
  };
  function n(i, o) {
    var s, u, c = o.mergeOptions, l = o.optionsAtMedia, f = c(GE, Ah.globalOptions), d = c(f, e);
    t = l(d);
    var p = i.internalEngine(), y = (s = t.target) != null ? s : i.containerNode().parentNode, h = (u = t.forceWheelAxis) != null ? u : p.options.axis, v = VE({
      preventWheelAction: h,
      reverseSign: [!0, !0, !1]
    }), b = v.observe(y), g = v.on("wheel", $), x = !1, O;
    function m(M) {
      try {
        O = new MouseEvent("mousedown", M.event), T(O);
      } catch {
        return YE && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), r();
      }
      x = !0, A(), t.wheelDraggingClass && y.classList.add(t.wheelDraggingClass);
    }
    function w(M) {
      x = !1, T(k("mouseup", M)), _(), t.wheelDraggingClass && y.classList.remove(t.wheelDraggingClass);
    }
    function A() {
      document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0);
    }
    function _() {
      document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0);
    }
    function P(M) {
      x && M.isTrusted && M.stopImmediatePropagation();
    }
    function k(M, j) {
      var I, D;
      if (h === p.options.axis) {
        var R = j.axisMovement;
        I = R[0], D = R[1];
      } else {
        var L = j.axisMovement;
        D = L[0], I = L[1];
      }
      if (!p.options.skipSnaps && !p.options.dragFree) {
        var z = p.containerRect.width, N = p.containerRect.height;
        I = I < 0 ? Math.max(I, -z) : Math.min(I, z), D = D < 0 ? Math.max(D, -N) : Math.min(D, N);
      }
      return new MouseEvent(M, {
        clientX: O.clientX + I,
        clientY: O.clientY + D,
        screenX: O.screenX + I,
        screenY: O.screenY + D,
        movementX: I,
        movementY: D,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function T(M) {
      i.containerNode().dispatchEvent(M);
    }
    function $(M) {
      var j = M.axisDelta, I = j[0], D = j[1], R = h === "x" ? I : D, L = h === "x" ? D : I, z = M.isMomentum && M.previous && !M.previous.isMomentum, N = M.isEnding && !M.isMomentum || z, B = Math.abs(R) > Math.abs(L);
      B && !x && !M.isMomentum && m(M), x && (N ? w(M) : T(k("mousemove", M)));
    }
    r = function() {
      b(), g(), _();
    };
  }
  var a = {
    name: "wheelGestures",
    options: e,
    init: n,
    destroy: function() {
      return r();
    }
  };
  return a;
}
function XE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function by(e) {
  return XE(e) || Array.isArray(e);
}
function ZE() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _h(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== i ? !1 : r.every((o) => {
    const s = e[o], u = t[o];
    return typeof s == "function" ? `${s}` == `${u}` : !by(s) || !by(u) ? s === u : _h(s, u);
  });
}
function xy(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function JE(e, t) {
  if (e.length !== t.length) return !1;
  const r = xy(e), n = xy(t);
  return r.every((a, i) => {
    const o = n[i];
    return _h(a, o);
  });
}
function Ph(e) {
  return typeof e == "number";
}
function Dd(e) {
  return typeof e == "string";
}
function Ts(e) {
  return typeof e == "boolean";
}
function wy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ke(e) {
  return Math.abs(e);
}
function Th(e) {
  return Math.sign(e);
}
function Ra(e, t) {
  return ke(e - t);
}
function QE(e, t) {
  if (e === 0 || t === 0 || ke(e) <= ke(t)) return 0;
  const r = Ra(ke(e), ke(t));
  return ke(r / e);
}
function eC(e) {
  return Math.round(e * 100) / 100;
}
function Ya(e) {
  return Xa(e).map(Number);
}
function Rt(e) {
  return e[Ni(e)];
}
function Ni(e) {
  return Math.max(0, e.length - 1);
}
function Eh(e, t) {
  return t === Ni(e);
}
function Oy(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function Xa(e) {
  return Object.keys(e);
}
function $O(e, t) {
  return [e, t].reduce((r, n) => (Xa(n).forEach((a) => {
    const i = r[a], o = n[a], s = wy(i) && wy(o);
    r[a] = s ? $O(i, o) : o;
  }), r), {});
}
function Nd(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function tC(e, t) {
  const r = {
    start: n,
    center: a,
    end: i
  };
  function n() {
    return 0;
  }
  function a(u) {
    return i(u) / 2;
  }
  function i(u) {
    return t - u;
  }
  function o(u, c) {
    return Dd(e) ? r[e](u) : e(t, u, c);
  }
  return {
    measure: o
  };
}
function Za() {
  let e = [];
  function t(a, i, o, s = {
    passive: !0
  }) {
    let u;
    if ("addEventListener" in a)
      a.addEventListener(i, o, s), u = () => a.removeEventListener(i, o, s);
    else {
      const c = a;
      c.addListener(o), u = () => c.removeListener(o);
    }
    return e.push(u), n;
  }
  function r() {
    e = e.filter((a) => a());
  }
  const n = {
    add: t,
    clear: r
  };
  return n;
}
function rC(e, t, r, n) {
  const a = Za(), i = 1e3 / 60;
  let o = null, s = 0, u = 0;
  function c() {
    a.add(e, "visibilitychange", () => {
      e.hidden && y();
    });
  }
  function l() {
    p(), a.clear();
  }
  function f(v) {
    if (!u) return;
    o || (o = v, r(), r());
    const b = v - o;
    for (o = v, s += b; s >= i; )
      r(), s -= i;
    const g = s / i;
    n(g), u && (u = t.requestAnimationFrame(f));
  }
  function d() {
    u || (u = t.requestAnimationFrame(f));
  }
  function p() {
    t.cancelAnimationFrame(u), o = null, s = 0, u = 0;
  }
  function y() {
    o = null, s = 0;
  }
  return {
    init: c,
    destroy: l,
    start: d,
    stop: p,
    update: r,
    render: n
  };
}
function nC(e, t) {
  const r = t === "rtl", n = e === "y", a = n ? "y" : "x", i = n ? "x" : "y", o = !n && r ? -1 : 1, s = l(), u = f();
  function c(y) {
    const {
      height: h,
      width: v
    } = y;
    return n ? h : v;
  }
  function l() {
    return n ? "top" : r ? "right" : "left";
  }
  function f() {
    return n ? "bottom" : r ? "left" : "right";
  }
  function d(y) {
    return y * o;
  }
  return {
    scroll: a,
    cross: i,
    startEdge: s,
    endEdge: u,
    measureSize: c,
    direction: d
  };
}
function Jr(e = 0, t = 0) {
  const r = ke(e - t);
  function n(c) {
    return c < e;
  }
  function a(c) {
    return c > t;
  }
  function i(c) {
    return n(c) || a(c);
  }
  function o(c) {
    return i(c) ? n(c) ? e : t : c;
  }
  function s(c) {
    return r ? c - r * Math.ceil((c - t) / r) : c;
  }
  return {
    length: r,
    max: t,
    min: e,
    constrain: o,
    reachedAny: i,
    reachedMax: a,
    reachedMin: n,
    removeOffset: s
  };
}
function IO(e, t, r) {
  const {
    constrain: n
  } = Jr(0, e), a = e + 1;
  let i = o(t);
  function o(d) {
    return r ? ke((a + d) % a) : n(d);
  }
  function s() {
    return i;
  }
  function u(d) {
    return i = o(d), f;
  }
  function c(d) {
    return l().set(s() + d);
  }
  function l() {
    return IO(e, s(), r);
  }
  const f = {
    get: s,
    set: u,
    add: c,
    clone: l
  };
  return f;
}
function aC(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const {
    cross: x,
    direction: O
  } = e, m = ["INPUT", "SELECT", "TEXTAREA"], w = {
    passive: !1
  }, A = Za(), _ = Za(), P = Jr(50, 225).constrain(p.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, T = {
    mouse: 500,
    touch: 600
  }, $ = y ? 43 : 25;
  let M = !1, j = 0, I = 0, D = !1, R = !1, L = !1, z = !1;
  function N(E) {
    if (!g) return;
    function Y(ae) {
      (Ts(g) || g(E, ae)) && ne(ae);
    }
    const F = t;
    A.add(F, "dragstart", (ae) => ae.preventDefault(), w).add(F, "touchmove", () => {
    }, w).add(F, "touchend", () => {
    }).add(F, "touchstart", Y).add(F, "mousedown", Y).add(F, "touchcancel", Q).add(F, "contextmenu", Q).add(F, "click", U, !0);
  }
  function B() {
    A.clear(), _.clear();
  }
  function q() {
    const E = z ? r : t;
    _.add(E, "touchmove", ee, w).add(E, "touchend", Q).add(E, "mousemove", ee, w).add(E, "mouseup", Q);
  }
  function H(E) {
    const Y = E.nodeName || "";
    return m.includes(Y);
  }
  function X() {
    return (y ? T : k)[z ? "mouse" : "touch"];
  }
  function te(E, Y) {
    const F = f.add(Th(E) * -1), ae = l.byDistance(E, !y).distance;
    return y || ke(E) < P ? ae : v && Y ? ae * 0.5 : l.byIndex(F.get(), 0).distance;
  }
  function ne(E) {
    const Y = Nd(E, n);
    z = Y, L = y && Y && !E.buttons && M, M = Ra(a.get(), o.get()) >= 2, !(Y && E.button !== 0) && (H(E.target) || (D = !0, i.pointerDown(E), c.useFriction(0).useDuration(0), a.set(o), q(), j = i.readPoint(E), I = i.readPoint(E, x), d.emit("pointerDown")));
  }
  function ee(E) {
    if (!Nd(E, n) && E.touches.length >= 2) return Q(E);
    const F = i.readPoint(E), ae = i.readPoint(E, x), ce = Ra(F, j), oe = Ra(ae, I);
    if (!R && !z && (!E.cancelable || (R = ce > oe, !R)))
      return Q(E);
    const Se = i.pointerMove(E);
    ce > h && (L = !0), c.useFriction(0.3).useDuration(0.75), s.start(), a.add(O(Se)), E.preventDefault();
  }
  function Q(E) {
    const F = l.byDistance(0, !1).index !== f.get(), ae = i.pointerUp(E) * X(), ce = te(O(ae), F), oe = QE(ae, ce), Se = $ - 10 * oe, Te = b + oe / 50;
    R = !1, D = !1, _.clear(), c.useDuration(Se).useFriction(Te), u.distance(ce, !y), z = !1, d.emit("pointerUp");
  }
  function U(E) {
    L && (E.stopPropagation(), E.preventDefault(), L = !1);
  }
  function V() {
    return D;
  }
  return {
    init: N,
    destroy: B,
    pointerDown: V
  };
}
function iC(e, t) {
  let n, a;
  function i(f) {
    return f.timeStamp;
  }
  function o(f, d) {
    const y = `client${(d || e.scroll) === "x" ? "X" : "Y"}`;
    return (Nd(f, t) ? f : f.touches[0])[y];
  }
  function s(f) {
    return n = f, a = f, o(f);
  }
  function u(f) {
    const d = o(f) - o(a), p = i(f) - i(n) > 170;
    return a = f, p && (n = f), d;
  }
  function c(f) {
    if (!n || !a) return 0;
    const d = o(a) - o(n), p = i(f) - i(n), y = i(f) - i(a) > 170, h = d / p;
    return p && !y && ke(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: u,
    pointerUp: c,
    readPoint: o
  };
}
function oC() {
  function e(r) {
    const {
      offsetTop: n,
      offsetLeft: a,
      offsetWidth: i,
      offsetHeight: o
    } = r;
    return {
      top: n,
      right: a + i,
      bottom: n + o,
      left: a,
      width: i,
      height: o
    };
  }
  return {
    measure: e
  };
}
function sC(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function uC(e, t, r, n, a, i, o) {
  const s = [e].concat(n);
  let u, c, l = [], f = !1;
  function d(v) {
    return a.measureSize(o.measure(v));
  }
  function p(v) {
    if (!i) return;
    c = d(e), l = n.map(d);
    function b(g) {
      for (const x of g) {
        if (f) return;
        const O = x.target === e, m = n.indexOf(x.target), w = O ? c : l[m], A = d(O ? e : n[m]);
        if (ke(A - w) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((g) => {
      (Ts(i) || i(v, g)) && b(g);
    }), r.requestAnimationFrame(() => {
      s.forEach((g) => u.observe(g));
    });
  }
  function y() {
    f = !0, u && u.disconnect();
  }
  return {
    init: p,
    destroy: y
  };
}
function cC(e, t, r, n, a, i) {
  let o = 0, s = 0, u = a, c = i, l = e.get(), f = 0;
  function d() {
    const w = n.get() - e.get(), A = !u;
    let _ = 0;
    return A ? (o = 0, r.set(n), e.set(n), _ = w) : (r.set(e), o += w / u, o *= c, l += o, e.add(o), _ = l - f), s = Th(_), f = l, m;
  }
  function p() {
    const w = n.get() - t.get();
    return ke(w) < 1e-3;
  }
  function y() {
    return u;
  }
  function h() {
    return s;
  }
  function v() {
    return o;
  }
  function b() {
    return x(a);
  }
  function g() {
    return O(i);
  }
  function x(w) {
    return u = w, m;
  }
  function O(w) {
    return c = w, m;
  }
  const m = {
    direction: h,
    duration: y,
    velocity: v,
    seek: d,
    settled: p,
    useBaseFriction: g,
    useBaseDuration: b,
    useFriction: O,
    useDuration: x
  };
  return m;
}
function lC(e, t, r, n, a) {
  const i = a.measure(10), o = a.measure(50), s = Jr(0.1, 0.99);
  let u = !1;
  function c() {
    return !(u || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function l(p) {
    if (!c()) return;
    const y = e.reachedMin(t.get()) ? "min" : "max", h = ke(e[y] - t.get()), v = r.get() - t.get(), b = s.constrain(h / o);
    r.subtract(v * b), !p && ke(v) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
  }
  function f(p) {
    u = !p;
  }
  return {
    shouldConstrain: c,
    constrain: l,
    toggleActive: f
  };
}
function fC(e, t, r, n, a) {
  const i = Jr(-t + e, 0), o = f(), s = l(), u = d();
  function c(y, h) {
    return Ra(y, h) <= 1;
  }
  function l() {
    const y = o[0], h = Rt(o), v = o.lastIndexOf(y), b = o.indexOf(h) + 1;
    return Jr(v, b);
  }
  function f() {
    return r.map((y, h) => {
      const {
        min: v,
        max: b
      } = i, g = i.constrain(y), x = !h, O = Eh(r, h);
      return x ? b : O || c(v, g) ? v : c(b, g) ? b : g;
    }).map((y) => parseFloat(y.toFixed(3)));
  }
  function d() {
    if (t <= e + a) return [i.max];
    if (n === "keepSnaps") return o;
    const {
      min: y,
      max: h
    } = s;
    return o.slice(y, h);
  }
  return {
    snapsContained: u,
    scrollContainLimit: s
  };
}
function dC(e, t, r) {
  const n = t[0], a = r ? n - e : Rt(t);
  return {
    limit: Jr(a, n)
  };
}
function pC(e, t, r, n) {
  const i = t.min + 0.1, o = t.max + 0.1, {
    reachedMin: s,
    reachedMax: u
  } = Jr(i, o);
  function c(d) {
    return d === 1 ? u(r.get()) : d === -1 ? s(r.get()) : !1;
  }
  function l(d) {
    if (!c(d)) return;
    const p = e * (d * -1);
    n.forEach((y) => y.add(p));
  }
  return {
    loop: l
  };
}
function hC(e) {
  const {
    max: t,
    length: r
  } = e;
  function n(i) {
    const o = i - t;
    return r ? o / -r : 0;
  }
  return {
    get: n
  };
}
function vC(e, t, r, n, a) {
  const {
    startEdge: i,
    endEdge: o
  } = e, {
    groupSlides: s
  } = a, u = f().map(t.measure), c = d(), l = p();
  function f() {
    return s(n).map((h) => Rt(h)[o] - h[0][i]).map(ke);
  }
  function d() {
    return n.map((h) => r[i] - h[i]).map((h) => -ke(h));
  }
  function p() {
    return s(c).map((h) => h[0]).map((h, v) => h + u[v]);
  }
  return {
    snaps: c,
    snapsAligned: l
  };
}
function yC(e, t, r, n, a, i) {
  const {
    groupSlides: o
  } = a, {
    min: s,
    max: u
  } = n, c = l();
  function l() {
    const d = o(i), p = !e || t === "keepSnaps";
    return r.length === 1 ? [i] : p ? d : d.slice(s, u).map((y, h, v) => {
      const b = !h, g = Eh(v, h);
      if (b) {
        const x = Rt(v[0]) + 1;
        return Oy(x);
      }
      if (g) {
        const x = Ni(i) - Rt(v)[0] + 1;
        return Oy(x, Rt(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: c
  };
}
function mC(e, t, r, n, a) {
  const {
    reachedAny: i,
    removeOffset: o,
    constrain: s
  } = n;
  function u(y) {
    return y.concat().sort((h, v) => ke(h) - ke(v))[0];
  }
  function c(y) {
    const h = e ? o(y) : s(y), v = t.map((g, x) => ({
      diff: l(g - h, 0),
      index: x
    })).sort((g, x) => ke(g.diff) - ke(x.diff)), {
      index: b
    } = v[0];
    return {
      index: b,
      distance: h
    };
  }
  function l(y, h) {
    const v = [y, y + r, y - r];
    if (!e) return y;
    if (!h) return u(v);
    const b = v.filter((g) => Th(g) === h);
    return b.length ? u(b) : Rt(v) - r;
  }
  function f(y, h) {
    const v = t[y] - a.get(), b = l(v, h);
    return {
      index: y,
      distance: b
    };
  }
  function d(y, h) {
    const v = a.get() + y, {
      index: b,
      distance: g
    } = c(v), x = !e && i(v);
    if (!h || x) return {
      index: b,
      distance: y
    };
    const O = t[b] - g, m = y + l(O, 0);
    return {
      index: b,
      distance: m
    };
  }
  return {
    byDistance: d,
    byIndex: f,
    shortcut: l
  };
}
function gC(e, t, r, n, a, i, o) {
  function s(f) {
    const d = f.distance, p = f.index !== t.get();
    i.add(d), d && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), p && (r.set(t.get()), t.set(f.index), o.emit("select"));
  }
  function u(f, d) {
    const p = a.byDistance(f, d);
    s(p);
  }
  function c(f, d) {
    const p = t.clone().set(f), y = a.byIndex(p.get(), d);
    s(y);
  }
  return {
    distance: u,
    index: c
  };
}
function bC(e, t, r, n, a, i, o, s) {
  const u = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function l(p) {
    if (!s) return;
    function y(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      o.emit("slideFocusStart"), e.scrollLeft = 0;
      const g = r.findIndex((x) => x.includes(h));
      Ph(g) && (a.useDuration(0), n.index(g, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", f, !1), t.forEach((h, v) => {
      i.add(h, "focus", (b) => {
        (Ts(s) || s(p, b)) && y(v);
      }, u);
    });
  }
  function f(p) {
    p.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: l
  };
}
function $a(e) {
  let t = e;
  function r() {
    return t;
  }
  function n(u) {
    t = o(u);
  }
  function a(u) {
    t += o(u);
  }
  function i(u) {
    t -= o(u);
  }
  function o(u) {
    return Ph(u) ? u : u.get();
  }
  return {
    get: r,
    set: n,
    add: a,
    subtract: i
  };
}
function kO(e, t) {
  const r = e.scroll === "x" ? o : s, n = t.style;
  let a = null, i = !1;
  function o(d) {
    return `translate3d(${d}px,0px,0px)`;
  }
  function s(d) {
    return `translate3d(0px,${d}px,0px)`;
  }
  function u(d) {
    if (i) return;
    const p = eC(e.direction(d));
    p !== a && (n.transform = r(p), a = p);
  }
  function c(d) {
    i = !d;
  }
  function l() {
    i || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: l,
    to: u,
    toggleActive: c
  };
}
function xC(e, t, r, n, a, i, o, s, u) {
  const l = Ya(a), f = Ya(a).reverse(), d = b().concat(g());
  function p(A, _) {
    return A.reduce((P, k) => P - a[k], _);
  }
  function y(A, _) {
    return A.reduce((P, k) => p(P, _) > 0 ? P.concat([k]) : P, []);
  }
  function h(A) {
    return i.map((_, P) => ({
      start: _ - n[P] + 0.5 + A,
      end: _ + t - 0.5 + A
    }));
  }
  function v(A, _, P) {
    const k = h(_);
    return A.map((T) => {
      const $ = P ? 0 : -r, M = P ? r : 0, j = P ? "end" : "start", I = k[T][j];
      return {
        index: T,
        loopPoint: I,
        slideLocation: $a(-1),
        translate: kO(e, u[T]),
        target: () => s.get() > I ? $ : M
      };
    });
  }
  function b() {
    const A = o[0], _ = y(f, A);
    return v(_, r, !1);
  }
  function g() {
    const A = t - o[0] - 1, _ = y(l, A);
    return v(_, -r, !0);
  }
  function x() {
    return d.every(({
      index: A
    }) => {
      const _ = l.filter((P) => P !== A);
      return p(_, t) <= 0.1;
    });
  }
  function O() {
    d.forEach((A) => {
      const {
        target: _,
        translate: P,
        slideLocation: k
      } = A, T = _();
      T !== k.get() && (P.to(T), k.set(T));
    });
  }
  function m() {
    d.forEach((A) => A.translate.clear());
  }
  return {
    canLoop: x,
    clear: m,
    loop: O,
    loopPoints: d
  };
}
function wC(e, t, r) {
  let n, a = !1;
  function i(u) {
    if (!r) return;
    function c(l) {
      for (const f of l)
        if (f.type === "childList") {
          u.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    n = new MutationObserver((l) => {
      a || (Ts(r) || r(u, l)) && c(l);
    }), n.observe(e, {
      childList: !0
    });
  }
  function o() {
    n && n.disconnect(), a = !0;
  }
  return {
    init: i,
    destroy: o
  };
}
function OC(e, t, r, n) {
  const a = {};
  let i = null, o = null, s, u = !1;
  function c() {
    s = new IntersectionObserver((y) => {
      u || (y.forEach((h) => {
        const v = t.indexOf(h.target);
        a[v] = h;
      }), i = null, o = null, r.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: n
    }), t.forEach((y) => s.observe(y));
  }
  function l() {
    s && s.disconnect(), u = !0;
  }
  function f(y) {
    return Xa(a).reduce((h, v) => {
      const b = parseInt(v), {
        isIntersecting: g
      } = a[b];
      return (y && g || !y && !g) && h.push(b), h;
    }, []);
  }
  function d(y = !0) {
    if (y && i) return i;
    if (!y && o) return o;
    const h = f(y);
    return y && (i = h), y || (o = h), h;
  }
  return {
    init: c,
    destroy: l,
    get: d
  };
}
function SC(e, t, r, n, a, i) {
  const {
    measureSize: o,
    startEdge: s,
    endEdge: u
  } = e, c = r[0] && a, l = y(), f = h(), d = r.map(o), p = v();
  function y() {
    if (!c) return 0;
    const g = r[0];
    return ke(t[s] - g[s]);
  }
  function h() {
    if (!c) return 0;
    const g = i.getComputedStyle(Rt(n));
    return parseFloat(g.getPropertyValue(`margin-${u}`));
  }
  function v() {
    return r.map((g, x, O) => {
      const m = !x, w = Eh(O, x);
      return m ? d[x] + l : w ? d[x] + f : O[x + 1][s] - g[s];
    }).map(ke);
  }
  return {
    slideSizes: d,
    slideSizesWithGaps: p,
    startGap: l,
    endGap: f
  };
}
function AC(e, t, r, n, a, i, o, s, u) {
  const {
    startEdge: c,
    endEdge: l,
    direction: f
  } = e, d = Ph(r);
  function p(b, g) {
    return Ya(b).filter((x) => x % g === 0).map((x) => b.slice(x, x + g));
  }
  function y(b) {
    return b.length ? Ya(b).reduce((g, x, O) => {
      const m = Rt(g) || 0, w = m === 0, A = x === Ni(b), _ = a[c] - i[m][c], P = a[c] - i[x][l], k = !n && w ? f(o) : 0, T = !n && A ? f(s) : 0, $ = ke(P - T - (_ + k));
      return O && $ > t + u && g.push(x), A && g.push(b.length), g;
    }, []).map((g, x, O) => {
      const m = Math.max(O[x - 1] || 0);
      return b.slice(m, g);
    }) : [];
  }
  function h(b) {
    return d ? p(b, r) : y(b);
  }
  return {
    groupSlides: h
  };
}
function _C(e, t, r, n, a, i, o) {
  const {
    align: s,
    axis: u,
    direction: c,
    startIndex: l,
    loop: f,
    duration: d,
    dragFree: p,
    dragThreshold: y,
    inViewThreshold: h,
    slidesToScroll: v,
    skipSnaps: b,
    containScroll: g,
    watchResize: x,
    watchSlides: O,
    watchDrag: m,
    watchFocus: w
  } = i, A = 2, _ = oC(), P = _.measure(t), k = r.map(_.measure), T = nC(u, c), $ = T.measureSize(P), M = sC($), j = tC(s, $), I = !f && !!g, D = f || !!g, {
    slideSizes: R,
    slideSizesWithGaps: L,
    startGap: z,
    endGap: N
  } = SC(T, P, k, r, D, a), B = AC(T, $, v, f, P, k, z, N, A), {
    snaps: q,
    snapsAligned: H
  } = vC(T, j, P, k, B), X = -Rt(q) + Rt(L), {
    snapsContained: te,
    scrollContainLimit: ne
  } = fC($, X, H, g, A), ee = I ? te : H, {
    limit: Q
  } = dC(X, ee, f), U = IO(Ni(ee), l, f), V = U.clone(), Z = Ya(r), E = ({
    dragHandler: pn,
    scrollBody: yu,
    scrollBounds: mu,
    options: {
      loop: Qi
    }
  }) => {
    Qi || mu.constrain(pn.pointerDown()), yu.seek();
  }, Y = ({
    scrollBody: pn,
    translate: yu,
    location: mu,
    offsetLocation: Qi,
    previousLocation: yT,
    scrollLooper: mT,
    slideLooper: gT,
    dragHandler: bT,
    animation: xT,
    eventHandler: ey,
    scrollBounds: wT,
    options: {
      loop: ty
    }
  }, ry) => {
    const ny = pn.settled(), OT = !wT.shouldConstrain(), ay = ty ? ny : ny && OT, iy = ay && !bT.pointerDown();
    iy && xT.stop();
    const ST = mu.get() * ry + yT.get() * (1 - ry);
    Qi.set(ST), ty && (mT.loop(pn.direction()), gT.loop()), yu.to(Qi.get()), iy && ey.emit("settle"), ay || ey.emit("scroll");
  }, F = rC(n, a, () => E(vu), (pn) => Y(vu, pn)), ae = 0.68, ce = ee[U.get()], oe = $a(ce), Se = $a(ce), Te = $a(ce), me = $a(ce), ye = cC(oe, Te, Se, me, d, ae), qe = mC(f, ee, X, Q, me), er = gC(F, U, V, ye, qe, me, o), fn = hC(Q), dn = Za(), Ji = OC(t, r, o, h), {
    slideRegistry: ga
  } = yC(I, g, ee, ne, B, Z), vT = bC(e, r, ga, er, ye, dn, o, w), vu = {
    ownerDocument: n,
    ownerWindow: a,
    eventHandler: o,
    containerRect: P,
    slideRects: k,
    animation: F,
    axis: T,
    dragHandler: aC(T, e, n, a, me, iC(T, a), oe, F, er, ye, qe, U, o, M, p, y, b, ae, m),
    eventStore: dn,
    percentOfView: M,
    index: U,
    indexPrevious: V,
    limit: Q,
    location: oe,
    offsetLocation: Te,
    previousLocation: Se,
    options: i,
    resizeHandler: uC(t, o, a, r, T, x, _),
    scrollBody: ye,
    scrollBounds: lC(Q, Te, me, ye, M),
    scrollLooper: pC(X, Q, Te, [oe, Te, Se, me]),
    scrollProgress: fn,
    scrollSnapList: ee.map(fn.get),
    scrollSnaps: ee,
    scrollTarget: qe,
    scrollTo: er,
    slideLooper: xC(T, $, X, R, L, q, ee, Te, r),
    slideFocus: vT,
    slidesHandler: wC(t, o, O),
    slidesInView: Ji,
    slideIndexes: Z,
    slideRegistry: ga,
    slidesToScroll: B,
    target: me,
    translate: kO(T, t)
  };
  return vu;
}
function PC() {
  let e = {}, t;
  function r(c) {
    t = c;
  }
  function n(c) {
    return e[c] || [];
  }
  function a(c) {
    return n(c).forEach((l) => l(t, c)), u;
  }
  function i(c, l) {
    return e[c] = n(c).concat([l]), u;
  }
  function o(c, l) {
    return e[c] = n(c).filter((f) => f !== l), u;
  }
  function s() {
    e = {};
  }
  const u = {
    init: r,
    emit: a,
    off: o,
    on: i,
    clear: s
  };
  return u;
}
const TC = {
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
function EC(e) {
  function t(i, o) {
    return $O(i, o || {});
  }
  function r(i) {
    const o = i.breakpoints || {}, s = Xa(o).filter((u) => e.matchMedia(u).matches).map((u) => o[u]).reduce((u, c) => t(u, c), {});
    return t(i, s);
  }
  function n(i) {
    return i.map((o) => Xa(o.breakpoints || {})).reduce((o, s) => o.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function CC(e) {
  let t = [];
  function r(i, o) {
    return t = o.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(i, e)), o.reduce((s, u) => Object.assign(s, {
      [u.name]: u
    }), {});
  }
  function n() {
    t = t.filter((i) => i.destroy());
  }
  return {
    init: r,
    destroy: n
  };
}
function wo(e, t, r) {
  const n = e.ownerDocument, a = n.defaultView, i = EC(a), o = CC(i), s = Za(), u = PC(), {
    mergeOptions: c,
    optionsAtMedia: l,
    optionsMediaQueries: f
  } = i, {
    on: d,
    off: p,
    emit: y
  } = u, h = T;
  let v = !1, b, g = c(TC, wo.globalOptions), x = c(g), O = [], m, w, A;
  function _() {
    const {
      container: Z,
      slides: E
    } = x;
    w = (Dd(Z) ? e.querySelector(Z) : Z) || e.children[0];
    const F = Dd(E) ? w.querySelectorAll(E) : E;
    A = [].slice.call(F || w.children);
  }
  function P(Z) {
    const E = _C(e, w, A, n, a, Z, u);
    if (Z.loop && !E.slideLooper.canLoop()) {
      const Y = Object.assign({}, Z, {
        loop: !1
      });
      return P(Y);
    }
    return E;
  }
  function k(Z, E) {
    v || (g = c(g, Z), x = l(g), O = E || O, _(), b = P(x), f([g, ...O.map(({
      options: Y
    }) => Y)]).forEach((Y) => s.add(Y, "change", T)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(V), b.eventHandler.init(V), b.resizeHandler.init(V), b.slidesHandler.init(V), b.options.loop && b.slideLooper.loop(), w.offsetParent && A.length && b.dragHandler.init(V), m = o.init(V, O)));
  }
  function T(Z, E) {
    const Y = B();
    $(), k(c({
      startIndex: Y
    }, Z), E), u.emit("reInit");
  }
  function $() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), o.destroy(), s.clear();
  }
  function M() {
    v || (v = !0, s.clear(), $(), u.emit("destroy"), u.clear());
  }
  function j(Z, E, Y) {
    !x.active || v || (b.scrollBody.useBaseFriction().useDuration(E === !0 ? 0 : x.duration), b.scrollTo.index(Z, Y || 0));
  }
  function I(Z) {
    const E = b.index.add(1).get();
    j(E, Z, -1);
  }
  function D(Z) {
    const E = b.index.add(-1).get();
    j(E, Z, 1);
  }
  function R() {
    return b.index.add(1).get() !== B();
  }
  function L() {
    return b.index.add(-1).get() !== B();
  }
  function z() {
    return b.scrollSnapList;
  }
  function N() {
    return b.scrollProgress.get(b.offsetLocation.get());
  }
  function B() {
    return b.index.get();
  }
  function q() {
    return b.indexPrevious.get();
  }
  function H() {
    return b.slidesInView.get();
  }
  function X() {
    return b.slidesInView.get(!1);
  }
  function te() {
    return m;
  }
  function ne() {
    return b;
  }
  function ee() {
    return e;
  }
  function Q() {
    return w;
  }
  function U() {
    return A;
  }
  const V = {
    canScrollNext: R,
    canScrollPrev: L,
    containerNode: Q,
    internalEngine: ne,
    destroy: M,
    off: p,
    on: d,
    emit: y,
    plugins: te,
    previousScrollSnap: q,
    reInit: h,
    rootNode: ee,
    scrollNext: I,
    scrollPrev: D,
    scrollProgress: N,
    scrollSnapList: z,
    scrollTo: j,
    selectedScrollSnap: B,
    slideNodes: U,
    slidesInView: H,
    slidesNotInView: X
  };
  return k(t, r), setTimeout(() => u.emit("init"), 0), V;
}
wo.globalOptions = void 0;
function Ch(e = {}, t = []) {
  const r = Me(e), n = Me(t), [a, i] = he(), [o, s] = he(), u = tt(() => {
    a && a.reInit(r.current, n.current);
  }, [a]);
  return Le(() => {
    _h(r.current, e) || (r.current = e, u());
  }, [e, u]), Le(() => {
    JE(n.current, t) || (n.current = t, u());
  }, [t, u]), Le(() => {
    if (ZE() && o) {
      wo.globalOptions = Ch.globalOptions;
      const c = wo(o, r.current, n.current);
      return i(c), () => c.destroy();
    } else
      i(void 0);
  }, [o, i]), [s, a];
}
Ch.globalOptions = void 0;
function IW({ children: e, isValidProp: t, ...r }) {
  t && TT(t), r = { ...dt(oy), ...r }, r.isStatic = PT(() => r.isStatic);
  const n = He(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return S(oy.Provider, { value: n, children: e });
}
const De = 28, Sy = 16, jC = ({ children: e }) => {
  const t = Me(null), [r, n] = he(!0), [a, i] = he(!1);
  sO(() => {
    const l = t.current;
    if (!l) return;
    const f = new ResizeObserver(() => u());
    f.observe(l);
    const d = () => {
      u();
    };
    return l.addEventListener("scroll", d), u(), () => {
      f.disconnect(), l.removeEventListener("scroll", d);
    };
  }, []);
  function o() {
    const l = t.current;
    l && l.scrollBy({
      left: l.clientWidth,
      behavior: "smooth"
    });
  }
  function s() {
    const l = t.current;
    l && l.scrollBy({
      left: -l.clientWidth,
      behavior: "smooth"
    });
  }
  const u = () => {
    if (!t.current) return;
    const { scrollLeft: l, scrollWidth: f, clientWidth: d } = t.current;
    i(l > 0), n(l + d < f);
  };
  let c = "";
  return a && r ? c = `linear-gradient(to right, transparent 0px, transparent ${De}px, black ${2 * De}px, black calc(100% - ${3 * De}px), transparent calc(100% - ${2 * De}px), transparent 100%)` : a && !r ? c = `linear-gradient(to right, transparent 0px, transparent ${De}px, black ${2 * De}px, black 100%)` : !a && r ? c = `linear-gradient(to right, black 0px, black calc(100% - ${3 * De}px), transparent calc(100% - ${2 * De}px), transparent 100%)` : c = "none", K("div", {
    className: "relative",
    children: [S("div", {
      ref: t,
      className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
      style: {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        margin: `-${De}px`,
        padding: `${De}px`,
        height: `calc(100% + ${De * 2}px)`,
        width: `calc(100% + ${De * 2}px)`,
        maskImage: c,
        WebkitMaskImage: c,
        scrollSnapType: "x mandatory"
      },
      children: Array.isArray(e) ? e.map((l, f) => S("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: De + Sy + "px"
        },
        children: l
      }, f)) : e && S("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: De + Sy + "px"
        },
        children: e
      })
    }), a && S(Ar, {
      size: "lg",
      compact: !0,
      variant: "outline",
      className: J("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: s,
      icon: lO,
      label: "Previous",
      hideLabel: !0
    }), r && S(Ar, {
      size: "lg",
      variant: "outline",
      compact: !0,
      className: J("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: o,
      icon: fO,
      label: "Next",
      hideLabel: !0
    })]
  });
}, DO = fe.createContext(null);
function Ri() {
  const e = fe.useContext(DO);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const NO = fe.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: a, children: i, ...o }, s) => {
  const [u, c] = Ch({
    ...t,
    axis: e === "horizontal" ? "x" : "y"
  }, n), [l, f] = fe.useState(!1), [d, p] = fe.useState(!1), y = fe.useCallback((g) => {
    g && (f(g.canScrollPrev()), p(g.canScrollNext()));
  }, []), h = fe.useCallback(() => {
    c?.scrollPrev();
  }, [c]), v = fe.useCallback(() => {
    c?.scrollNext();
  }, [c]), b = fe.useCallback((g) => {
    g.key === "ArrowLeft" ? (g.preventDefault(), h()) : g.key === "ArrowRight" && (g.preventDefault(), v());
  }, [h, v]);
  return fe.useEffect(() => {
    !c || !r || r(c);
  }, [c, r]), fe.useEffect(() => {
    if (c)
      return y(c), c.on("reInit", y), c.on("select", y), () => {
        c?.off("select", y);
      };
  }, [c, y]), S(DO.Provider, {
    value: {
      carouselRef: u,
      api: c,
      opts: t,
      orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
      scrollPrev: h,
      scrollNext: v,
      canScrollPrev: l,
      canScrollNext: d
    },
    children: S("div", {
      ref: s,
      onKeyDownCapture: b,
      className: J("group/carousel relative", a),
      role: "region",
      "aria-roledescription": "carousel",
      ...o,
      children: i
    })
  });
});
NO.displayName = "Carousel";
const RO = fe.forwardRef(({ className: e, ...t }, r) => {
  const n = `linear-gradient(to right, transparent 0px, transparent ${De / 2}px, black ${De}px, black calc(100% - ${De}px), transparent calc(100% - ${De / 2}px), transparent 100%)`, { carouselRef: a, orientation: i } = Ri();
  return S("div", {
    ref: a,
    className: "overflow-hidden",
    style: {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      margin: `-${De}px`,
      padding: `${De}px`,
      height: `calc(100% + ${De * 2}px)`,
      width: `calc(100% + ${De * 2}px)`,
      maskImage: n,
      WebkitMaskImage: n
    },
    children: S("div", {
      ref: r,
      className: J("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    })
  });
});
RO.displayName = "CarouselContent";
const LO = fe.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = Ri();
  return S("div", {
    ref: r,
    role: "group",
    "aria-roledescription": "slide",
    className: J("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
    ...t
  });
});
LO.displayName = "CarouselItem";
const qO = fe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: o } = Ri();
  return S("div", {
    className: J("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(Ar, {
      compact: !0,
      ref: n,
      size: "sm",
      variant: t,
      className: J("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Previous",
      icon: ET,
      hideLabel: !0
    })
  });
});
qO.displayName = "CarouselPrevious";
const BO = fe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollNext: i, canScrollNext: o } = Ri();
  return S("div", {
    className: J("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(Ar, {
      ref: n,
      size: "sm",
      variant: t,
      compact: !0,
      className: J("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Next",
      icon: CT,
      hideLabel: !0
    })
  });
});
BO.displayName = "CarouselNext";
const FO = fe.forwardRef(({ ...e }, t) => {
  const { api: r } = Ri(), [, n] = fe.useState(!1), a = fe.useRef(null), i = fe.useCallback(() => {
    n((d) => !d);
  }, []);
  fe.useEffect(() => {
    if (r)
      return r.on("select", i), r.on("reInit", i), () => {
        r.off("select", i), r.off("reInit", i);
      };
  }, [r, i]);
  const o = r?.scrollSnapList().length || 0, s = r?.selectedScrollSnap() || 0;
  if (fe.useEffect(() => {
    if (!a.current) return;
    const d = a.current, p = 16, y = s * p - d.clientWidth / 2 + p / 2;
    d.scrollTo({
      left: y,
      behavior: "smooth"
    });
  }, [s]), fe.useEffect(() => {
    const d = a.current;
    if (!d) return;
    const p = (y) => {
      y.preventDefault(), y.stopPropagation();
    };
    return d.addEventListener("wheel", p, {
      passive: !1
    }), d.addEventListener("touchmove", p, {
      passive: !1
    }), () => {
      d.removeEventListener("wheel", p), d.removeEventListener("touchmove", p);
    };
  }, []), o <= 1)
    return null;
  const u = o > 5 ? 5 : o, c = Array.from({
    length: o
  }, (d, p) => p), l = Math.min(u, o) * 16, f = (d) => {
    if (u === o) return null;
    const p = Math.abs(d - s);
    if (p === 0 || p === 1) return "scale-100";
    if (p === 2) return s === 0 || s === o - 1 ? "scale-100" : "scale-75";
    if (p === 3) return s === 0 || s === o - 1 ? "scale-75" : "scale-50";
    if (p >= 4) return "scale-50";
  };
  return S("div", {
    ref: t,
    className: J("flex justify-center", e.className),
    children: S("div", {
      className: "relative overflow-hidden",
      style: {
        width: `${l}px`
      },
      children: S("div", {
        ref: a,
        className: "flex w-full gap-0 overflow-x-scroll",
        style: {
          scrollbarWidth: "none",
          overscrollBehavior: "none"
        },
        tabIndex: 0,
        "aria-label": "Carousel pagination",
        onKeyDown: (d) => {
          d.key === "ArrowLeft" ? (d.preventDefault(), r?.scrollPrev()) : d.key === "ArrowRight" && (d.preventDefault(), r?.scrollNext());
        },
        children: c.map((d) => S("button", {
          className: "group/dot flex h-4 w-4 flex-shrink-0 items-center justify-center p-0",
          "aria-label": `Go to slide ${d + 1}`,
          "aria-current": d === s ? "true" : void 0,
          onClick: () => r?.scrollTo(d),
          tabIndex: -1,
          children: S("div", {
            className: J("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", d === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", f(d))
          })
        }, d))
      })
    })
  });
});
FO.displayName = "CarouselDots";
const MC = As({
  variants: {
    peek: { true: "", false: "" },
    default: {
      1: "basis-full",
      2: "basis-1/2",
      3: "basis-1/3",
      4: "basis-1/4",
      6: "basis-1/6",
      peek1: "basis-[85%]",
      peek2: "basis-[48%]",
      peek3: "basis-[32%]",
      peek4: "basis-[24%]",
      peek6: "basis-[16%]"
    },
    xs: {
      1: "@xl:basis-full",
      2: "@xl:basis-1/2",
      3: "@xl:basis-1/3",
      4: "@xl:basis-1/4",
      6: "@xl:basis-1/6",
      peek1: "@xl:basis-[85%]",
      peek2: "@xl:basis-[48%]",
      peek3: "@xl:basis-[32%]",
      peek4: "@xl:basis-[24%]",
      peek6: "@xl:basis-[16%]"
    },
    sm: {
      1: "@2xl:basis-full",
      2: "@2xl:basis-1/2",
      3: "@2xl:basis-1/3",
      4: "@2xl:basis-1/4",
      6: "@2xl:basis-1/6",
      peek1: "@2xl:basis-[85%]",
      peek2: "@2xl:basis-[48%]",
      peek3: "@2xl:basis-[32%]",
      peek4: "@2xl:basis-[24%]",
      peek6: "@2xl:basis-[16%]"
    },
    md: {
      1: "@3xl:basis-full",
      2: "@3xl:basis-1/2",
      3: "@3xl:basis-1/3",
      4: "@3xl:basis-1/4",
      6: "@3xl:basis-1/6",
      peek1: "@3xl:basis-[85%]",
      peek2: "@3xl:basis-[48%]",
      peek3: "@3xl:basis-[32%]",
      peek4: "@3xl:basis-[24%]",
      peek6: "@3xl:basis-[16%]"
    },
    lg: {
      1: "@4xl:basis-full",
      2: "@4xl:basis-1/2",
      3: "@4xl:basis-1/3",
      4: "@4xl:basis-1/4",
      6: "@4xl:basis-1/6",
      peek1: "@4xl:basis-[85%]",
      peek2: "@4xl:basis-[48%]",
      peek3: "@4xl:basis-[32%]",
      peek4: "@4xl:basis-[24%]",
      peek6: "@4xl:basis-[16%]"
    },
    xl: {
      1: "@5xl:basis-full",
      2: "@5xl:basis-1/2",
      3: "@5xl:basis-1/3",
      4: "@5xl:basis-1/4",
      6: "@5xl:basis-1/6",
      peek1: "@5xl:basis-[85%]",
      peek2: "@5xl:basis-[48%]",
      peek3: "@5xl:basis-[32%]",
      peek4: "@5xl:basis-[24%]",
      peek6: "@5xl:basis-[16%]"
    }
  },
  defaultVariants: {
    peek: !1,
    default: 1
  }
});
function ba(e, t, r) {
  if (r) {
    const n = (e || 1) / 2;
    return t ? `peek${n}` : n;
  }
  return t ? `peek${e || 1}` : e || 1;
}
const $C = ({ children: e, columns: t, showArrows: r = !0, showDots: n = !0, autoplay: a = !1, delay: i = 3e3, showPeek: o = !1, doubleColumns: s }) => {
  const u = C.Children.toArray(e), c = C.useRef(a ? Sh({
    delay: i,
    stopOnInteraction: !0
  }) : void 0), l = () => {
    c.current && c.current.stop();
  }, f = () => {
    c.current && c.current.play();
  };
  return t ? S(NO, {
    className: "flex w-full flex-col gap-3 @container",
    opts: {
      align: o ? "center" : "start",
      slidesToScroll: "auto",
      duration: 20,
      containScroll: !1
    },
    plugins: [c.current, Ah()].filter(Boolean),
    onMouseEnter: a ? l : void 0,
    onMouseLeave: a ? f : void 0,
    children: K("div", {
      className: "flex flex-col gap-5",
      children: [K("div", {
        className: "relative",
        children: [S(RO, {
          children: C.Children.map(u, (d, p) => {
            const y = s?.find((h) => h.index === p);
            return S(LO, {
              className: MC({
                default: ba(t.default, o),
                xs: ba(t.xs, o, y?.sizes?.includes("xs")),
                sm: ba(t.sm, o, y?.sizes?.includes("sm")),
                md: ba(t.md, o, y?.sizes?.includes("md")),
                lg: ba(t.lg, o, y?.sizes?.includes("lg")),
                peek: o
              }),
              children: d
            }, p);
          })
        }), r && K(ft, {
          children: [S(qO, {
            label: "Previous"
          }), S(BO, {
            label: "Next"
          })]
        })]
      }), n && S(FO, {})]
    })
  }) : S(jC, {
    children: e
  });
}, kW = na("Carousel", $C), zO = Ft(null);
function DW({ children: e, layout: t }) {
  return S(zO.Provider, {
    value: t,
    children: e
  });
}
function NW() {
  return dt(zO);
}
var wu, Ay;
function IC() {
  if (Ay) return wu;
  Ay = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return wu = e, wu;
}
var Ou, _y;
function jh() {
  if (_y) return Ou;
  _y = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Ou = e, Ou;
}
var Su, Py;
function Es() {
  if (Py) return Su;
  Py = 1;
  var e = jh();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return Su = t, Su;
}
var Au, Ty;
function kC() {
  if (Ty) return Au;
  Ty = 1;
  var e = Es(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Au = n, Au;
}
var _u, Ey;
function DC() {
  if (Ey) return _u;
  Ey = 1;
  var e = Es();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return _u = t, _u;
}
var Pu, Cy;
function NC() {
  if (Cy) return Pu;
  Cy = 1;
  var e = Es();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Pu = t, Pu;
}
var Tu, jy;
function RC() {
  if (jy) return Tu;
  jy = 1;
  var e = Es();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return Tu = t, Tu;
}
var Eu, My;
function Cs() {
  if (My) return Eu;
  My = 1;
  var e = IC(), t = kC(), r = DC(), n = NC(), a = RC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Eu = i, Eu;
}
var Cu, $y;
function LC() {
  if ($y) return Cu;
  $y = 1;
  var e = Cs();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Cu = t, Cu;
}
var ju, Iy;
function qC() {
  if (Iy) return ju;
  Iy = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return ju = e, ju;
}
var Mu, ky;
function BC() {
  if (ky) return Mu;
  ky = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Mu = e, Mu;
}
var $u, Dy;
function FC() {
  if (Dy) return $u;
  Dy = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return $u = e, $u;
}
var Iu, Ny;
function WO() {
  if (Ny) return Iu;
  Ny = 1;
  var e = typeof eo == "object" && eo && eo.Object === Object && eo;
  return Iu = e, Iu;
}
var ku, Ry;
function Jt() {
  if (Ry) return ku;
  Ry = 1;
  var e = WO(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return ku = r, ku;
}
var Du, Ly;
function Li() {
  if (Ly) return Du;
  Ly = 1;
  var e = Jt(), t = e.Symbol;
  return Du = t, Du;
}
var Nu, qy;
function zC() {
  if (qy) return Nu;
  qy = 1;
  var e = Li(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
  function i(o) {
    var s = r.call(o, a), u = o[a];
    try {
      o[a] = void 0;
      var c = !0;
    } catch {
    }
    var l = n.call(o);
    return c && (s ? o[a] = u : delete o[a]), l;
  }
  return Nu = i, Nu;
}
var Ru, By;
function WC() {
  if (By) return Ru;
  By = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Ru = r, Ru;
}
var Lu, Fy;
function fr() {
  if (Fy) return Lu;
  Fy = 1;
  var e = Li(), t = zC(), r = WC(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
  }
  return Lu = o, Lu;
}
var qu, zy;
function Tr() {
  if (zy) return qu;
  zy = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return qu = e, qu;
}
var Bu, Wy;
function Mh() {
  if (Wy) return Bu;
  Wy = 1;
  var e = fr(), t = Tr(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var u = e(s);
    return u == n || u == a || u == r || u == i;
  }
  return Bu = o, Bu;
}
var Fu, Uy;
function UC() {
  if (Uy) return Fu;
  Uy = 1;
  var e = Jt(), t = e["__core-js_shared__"];
  return Fu = t, Fu;
}
var zu, Hy;
function HC() {
  if (Hy) return zu;
  Hy = 1;
  var e = UC(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return zu = r, zu;
}
var Wu, Ky;
function UO() {
  if (Ky) return Wu;
  Ky = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Wu = r, Wu;
}
var Uu, Vy;
function KC() {
  if (Vy) return Uu;
  Vy = 1;
  var e = Mh(), t = HC(), r = Tr(), n = UO(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, c = s.hasOwnProperty, l = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(d) {
    if (!r(d) || t(d))
      return !1;
    var p = e(d) ? l : i;
    return p.test(n(d));
  }
  return Uu = f, Uu;
}
var Hu, Gy;
function VC() {
  if (Gy) return Hu;
  Gy = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Hu = e, Hu;
}
var Ku, Yy;
function on() {
  if (Yy) return Ku;
  Yy = 1;
  var e = KC(), t = VC();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Ku = r, Ku;
}
var Vu, Xy;
function $h() {
  if (Xy) return Vu;
  Xy = 1;
  var e = on(), t = Jt(), r = e(t, "Map");
  return Vu = r, Vu;
}
var Gu, Zy;
function js() {
  if (Zy) return Gu;
  Zy = 1;
  var e = on(), t = e(Object, "create");
  return Gu = t, Gu;
}
var Yu, Jy;
function GC() {
  if (Jy) return Yu;
  Jy = 1;
  var e = js();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Yu = t, Yu;
}
var Xu, Qy;
function YC() {
  if (Qy) return Xu;
  Qy = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Xu = e, Xu;
}
var Zu, em;
function XC() {
  if (em) return Zu;
  em = 1;
  var e = js(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === t ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Zu = a, Zu;
}
var Ju, tm;
function ZC() {
  if (tm) return Ju;
  tm = 1;
  var e = js(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return Ju = n, Ju;
}
var Qu, rm;
function JC() {
  if (rm) return Qu;
  rm = 1;
  var e = js(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return Qu = r, Qu;
}
var ec, nm;
function QC() {
  if (nm) return ec;
  nm = 1;
  var e = GC(), t = YC(), r = XC(), n = ZC(), a = JC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, ec = i, ec;
}
var tc, am;
function ej() {
  if (am) return tc;
  am = 1;
  var e = QC(), t = Cs(), r = $h();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return tc = n, tc;
}
var rc, im;
function tj() {
  if (im) return rc;
  im = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return rc = e, rc;
}
var nc, om;
function Ms() {
  if (om) return nc;
  om = 1;
  var e = tj();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return nc = t, nc;
}
var ac, sm;
function rj() {
  if (sm) return ac;
  sm = 1;
  var e = Ms();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return ac = t, ac;
}
var ic, um;
function nj() {
  if (um) return ic;
  um = 1;
  var e = Ms();
  function t(r) {
    return e(this, r).get(r);
  }
  return ic = t, ic;
}
var oc, cm;
function aj() {
  if (cm) return oc;
  cm = 1;
  var e = Ms();
  function t(r) {
    return e(this, r).has(r);
  }
  return oc = t, oc;
}
var sc, lm;
function ij() {
  if (lm) return sc;
  lm = 1;
  var e = Ms();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return sc = t, sc;
}
var uc, fm;
function Ih() {
  if (fm) return uc;
  fm = 1;
  var e = ej(), t = rj(), r = nj(), n = aj(), a = ij();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, uc = i, uc;
}
var cc, dm;
function oj() {
  if (dm) return cc;
  dm = 1;
  var e = Cs(), t = $h(), r = Ih(), n = 200;
  function a(i, o) {
    var s = this.__data__;
    if (s instanceof e) {
      var u = s.__data__;
      if (!t || u.length < n - 1)
        return u.push([i, o]), this.size = ++s.size, this;
      s = this.__data__ = new r(u);
    }
    return s.set(i, o), this.size = s.size, this;
  }
  return cc = a, cc;
}
var lc, pm;
function HO() {
  if (pm) return lc;
  pm = 1;
  var e = Cs(), t = LC(), r = qC(), n = BC(), a = FC(), i = oj();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, lc = o, lc;
}
var fc, hm;
function sj() {
  if (hm) return fc;
  hm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return fc = t, fc;
}
var dc, vm;
function uj() {
  if (vm) return dc;
  vm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return dc = e, dc;
}
var pc, ym;
function KO() {
  if (ym) return pc;
  ym = 1;
  var e = Ih(), t = sj(), r = uj();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, pc = n, pc;
}
var hc, mm;
function VO() {
  if (mm) return hc;
  mm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return hc = e, hc;
}
var vc, gm;
function GO() {
  if (gm) return vc;
  gm = 1;
  function e(t, r) {
    return t.has(r);
  }
  return vc = e, vc;
}
var yc, bm;
function YO() {
  if (bm) return yc;
  bm = 1;
  var e = KO(), t = VO(), r = GO(), n = 1, a = 2;
  function i(o, s, u, c, l, f) {
    var d = u & n, p = o.length, y = s.length;
    if (p != y && !(d && y > p))
      return !1;
    var h = f.get(o), v = f.get(s);
    if (h && v)
      return h == s && v == o;
    var b = -1, g = !0, x = u & a ? new e() : void 0;
    for (f.set(o, s), f.set(s, o); ++b < p; ) {
      var O = o[b], m = s[b];
      if (c)
        var w = d ? c(m, O, b, s, o, f) : c(O, m, b, o, s, f);
      if (w !== void 0) {
        if (w)
          continue;
        g = !1;
        break;
      }
      if (x) {
        if (!t(s, function(A, _) {
          if (!r(x, _) && (O === A || l(O, A, u, c, f)))
            return x.push(_);
        })) {
          g = !1;
          break;
        }
      } else if (!(O === m || l(O, m, u, c, f))) {
        g = !1;
        break;
      }
    }
    return f.delete(o), f.delete(s), g;
  }
  return yc = i, yc;
}
var mc, xm;
function cj() {
  if (xm) return mc;
  xm = 1;
  var e = Jt(), t = e.Uint8Array;
  return mc = t, mc;
}
var gc, wm;
function lj() {
  if (wm) return gc;
  wm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return gc = e, gc;
}
var bc, Om;
function kh() {
  if (Om) return bc;
  Om = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return bc = e, bc;
}
var xc, Sm;
function fj() {
  if (Sm) return xc;
  Sm = 1;
  var e = Li(), t = cj(), r = jh(), n = YO(), a = lj(), i = kh(), o = 1, s = 2, u = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Map]", d = "[object Number]", p = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", g = "[object DataView]", x = e ? e.prototype : void 0, O = x ? x.valueOf : void 0;
  function m(w, A, _, P, k, T, $) {
    switch (_) {
      case g:
        if (w.byteLength != A.byteLength || w.byteOffset != A.byteOffset)
          return !1;
        w = w.buffer, A = A.buffer;
      case b:
        return !(w.byteLength != A.byteLength || !T(new t(w), new t(A)));
      case u:
      case c:
      case d:
        return r(+w, +A);
      case l:
        return w.name == A.name && w.message == A.message;
      case p:
      case h:
        return w == A + "";
      case f:
        var M = a;
      case y:
        var j = P & o;
        if (M || (M = i), w.size != A.size && !j)
          return !1;
        var I = $.get(w);
        if (I)
          return I == A;
        P |= s, $.set(w, A);
        var D = n(M(w), M(A), P, k, T, $);
        return $.delete(w), D;
      case v:
        if (O)
          return O.call(w) == O.call(A);
    }
    return !1;
  }
  return xc = m, xc;
}
var wc, Am;
function XO() {
  if (Am) return wc;
  Am = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return wc = e, wc;
}
var Oc, _m;
function pt() {
  if (_m) return Oc;
  _m = 1;
  var e = Array.isArray;
  return Oc = e, Oc;
}
var Sc, Pm;
function dj() {
  if (Pm) return Sc;
  Pm = 1;
  var e = XO(), t = pt();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return Sc = r, Sc;
}
var Ac, Tm;
function pj() {
  if (Tm) return Ac;
  Tm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var s = t[n];
      r(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  return Ac = e, Ac;
}
var _c, Em;
function hj() {
  if (Em) return _c;
  Em = 1;
  function e() {
    return [];
  }
  return _c = e, _c;
}
var Pc, Cm;
function vj() {
  if (Cm) return Pc;
  Cm = 1;
  var e = pj(), t = hj(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return Pc = i, Pc;
}
var Tc, jm;
function yj() {
  if (jm) return Tc;
  jm = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Tc = e, Tc;
}
var Ec, Mm;
function dr() {
  if (Mm) return Ec;
  Mm = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Ec = e, Ec;
}
var Cc, $m;
function mj() {
  if ($m) return Cc;
  $m = 1;
  var e = fr(), t = dr(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Cc = n, Cc;
}
var jc, Im;
function Dh() {
  if (Im) return jc;
  Im = 1;
  var e = mj(), t = dr(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return jc = i, jc;
}
var Ia = { exports: {} }, Mc, km;
function gj() {
  if (km) return Mc;
  km = 1;
  function e() {
    return !1;
  }
  return Mc = e, Mc;
}
Ia.exports;
var Dm;
function ZO() {
  return Dm || (Dm = 1, (function(e, t) {
    var r = Jt(), n = gj(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
    e.exports = c;
  })(Ia, Ia.exports)), Ia.exports;
}
var $c, Nm;
function Nh() {
  if (Nm) return $c;
  Nm = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return $c = r, $c;
}
var Ic, Rm;
function Rh() {
  if (Rm) return Ic;
  Rm = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Ic = t, Ic;
}
var kc, Lm;
function bj() {
  if (Lm) return kc;
  Lm = 1;
  var e = fr(), t = Rh(), r = dr(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object Map]", l = "[object Number]", f = "[object Object]", d = "[object RegExp]", p = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", g = "[object Float32Array]", x = "[object Float64Array]", O = "[object Int8Array]", m = "[object Int16Array]", w = "[object Int32Array]", A = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", P = "[object Uint16Array]", k = "[object Uint32Array]", T = {};
  T[g] = T[x] = T[O] = T[m] = T[w] = T[A] = T[_] = T[P] = T[k] = !0, T[n] = T[a] = T[v] = T[i] = T[b] = T[o] = T[s] = T[u] = T[c] = T[l] = T[f] = T[d] = T[p] = T[y] = T[h] = !1;
  function $(M) {
    return r(M) && t(M.length) && !!T[e(M)];
  }
  return kc = $, kc;
}
var Dc, qm;
function JO() {
  if (qm) return Dc;
  qm = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Dc = e, Dc;
}
var ka = { exports: {} };
ka.exports;
var Bm;
function xj() {
  return Bm || (Bm = 1, (function(e, t) {
    var r = WO(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(ka, ka.exports)), ka.exports;
}
var Nc, Fm;
function QO() {
  if (Fm) return Nc;
  Fm = 1;
  var e = bj(), t = JO(), r = xj(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return Nc = a, Nc;
}
var Rc, zm;
function wj() {
  if (zm) return Rc;
  zm = 1;
  var e = yj(), t = Dh(), r = pt(), n = ZO(), a = Nh(), i = QO(), o = Object.prototype, s = o.hasOwnProperty;
  function u(c, l) {
    var f = r(c), d = !f && t(c), p = !f && !d && n(c), y = !f && !d && !p && i(c), h = f || d || p || y, v = h ? e(c.length, String) : [], b = v.length;
    for (var g in c)
      (l || s.call(c, g)) && !(h && // Safari 9 has enumerable `arguments.length` in strict mode.
      (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      p && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
      a(g, b))) && v.push(g);
    return v;
  }
  return Rc = u, Rc;
}
var Lc, Wm;
function Oj() {
  if (Wm) return Lc;
  Wm = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Lc = t, Lc;
}
var qc, Um;
function eS() {
  if (Um) return qc;
  Um = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return qc = e, qc;
}
var Bc, Hm;
function Sj() {
  if (Hm) return Bc;
  Hm = 1;
  var e = eS(), t = e(Object.keys, Object);
  return Bc = t, Bc;
}
var Fc, Km;
function Aj() {
  if (Km) return Fc;
  Km = 1;
  var e = Oj(), t = Sj(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Fc = a, Fc;
}
var zc, Vm;
function qi() {
  if (Vm) return zc;
  Vm = 1;
  var e = Mh(), t = Rh();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return zc = r, zc;
}
var Wc, Gm;
function $s() {
  if (Gm) return Wc;
  Gm = 1;
  var e = wj(), t = Aj(), r = qi();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return Wc = n, Wc;
}
var Uc, Ym;
function _j() {
  if (Ym) return Uc;
  Ym = 1;
  var e = dj(), t = vj(), r = $s();
  function n(a) {
    return e(a, r, t);
  }
  return Uc = n, Uc;
}
var Hc, Xm;
function Pj() {
  if (Xm) return Hc;
  Xm = 1;
  var e = _j(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function a(i, o, s, u, c, l) {
    var f = s & t, d = e(i), p = d.length, y = e(o), h = y.length;
    if (p != h && !f)
      return !1;
    for (var v = p; v--; ) {
      var b = d[v];
      if (!(f ? b in o : n.call(o, b)))
        return !1;
    }
    var g = l.get(i), x = l.get(o);
    if (g && x)
      return g == o && x == i;
    var O = !0;
    l.set(i, o), l.set(o, i);
    for (var m = f; ++v < p; ) {
      b = d[v];
      var w = i[b], A = o[b];
      if (u)
        var _ = f ? u(A, w, b, o, i, l) : u(w, A, b, i, o, l);
      if (!(_ === void 0 ? w === A || c(w, A, s, u, l) : _)) {
        O = !1;
        break;
      }
      m || (m = b == "constructor");
    }
    if (O && !m) {
      var P = i.constructor, k = o.constructor;
      P != k && "constructor" in i && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof k == "function" && k instanceof k) && (O = !1);
    }
    return l.delete(i), l.delete(o), O;
  }
  return Hc = a, Hc;
}
var Kc, Zm;
function Tj() {
  if (Zm) return Kc;
  Zm = 1;
  var e = on(), t = Jt(), r = e(t, "DataView");
  return Kc = r, Kc;
}
var Vc, Jm;
function Ej() {
  if (Jm) return Vc;
  Jm = 1;
  var e = on(), t = Jt(), r = e(t, "Promise");
  return Vc = r, Vc;
}
var Gc, Qm;
function tS() {
  if (Qm) return Gc;
  Qm = 1;
  var e = on(), t = Jt(), r = e(t, "Set");
  return Gc = r, Gc;
}
var Yc, eg;
function Cj() {
  if (eg) return Yc;
  eg = 1;
  var e = on(), t = Jt(), r = e(t, "WeakMap");
  return Yc = r, Yc;
}
var Xc, tg;
function jj() {
  if (tg) return Xc;
  tg = 1;
  var e = Tj(), t = $h(), r = Ej(), n = tS(), a = Cj(), i = fr(), o = UO(), s = "[object Map]", u = "[object Object]", c = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", d = "[object DataView]", p = o(e), y = o(t), h = o(r), v = o(n), b = o(a), g = i;
  return (e && g(new e(new ArrayBuffer(1))) != d || t && g(new t()) != s || r && g(r.resolve()) != c || n && g(new n()) != l || a && g(new a()) != f) && (g = function(x) {
    var O = i(x), m = O == u ? x.constructor : void 0, w = m ? o(m) : "";
    if (w)
      switch (w) {
        case p:
          return d;
        case y:
          return s;
        case h:
          return c;
        case v:
          return l;
        case b:
          return f;
      }
    return O;
  }), Xc = g, Xc;
}
var Zc, rg;
function Mj() {
  if (rg) return Zc;
  rg = 1;
  var e = HO(), t = YO(), r = fj(), n = Pj(), a = jj(), i = pt(), o = ZO(), s = QO(), u = 1, c = "[object Arguments]", l = "[object Array]", f = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
  function y(h, v, b, g, x, O) {
    var m = i(h), w = i(v), A = m ? l : a(h), _ = w ? l : a(v);
    A = A == c ? f : A, _ = _ == c ? f : _;
    var P = A == f, k = _ == f, T = A == _;
    if (T && o(h)) {
      if (!o(v))
        return !1;
      m = !0, P = !1;
    }
    if (T && !P)
      return O || (O = new e()), m || s(h) ? t(h, v, b, g, x, O) : r(h, v, A, b, g, x, O);
    if (!(b & u)) {
      var $ = P && p.call(h, "__wrapped__"), M = k && p.call(v, "__wrapped__");
      if ($ || M) {
        var j = $ ? h.value() : h, I = M ? v.value() : v;
        return O || (O = new e()), x(j, I, b, g, O);
      }
    }
    return T ? (O || (O = new e()), n(h, v, b, g, x, O)) : !1;
  }
  return Zc = y, Zc;
}
var Jc, ng;
function Lh() {
  if (ng) return Jc;
  ng = 1;
  var e = Mj(), t = dr();
  function r(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s);
  }
  return Jc = r, Jc;
}
var Qc, ag;
function $j() {
  if (ag) return Qc;
  ag = 1;
  var e = Lh();
  function t(r, n) {
    return e(r, n);
  }
  return Qc = t, Qc;
}
var Ij = $j();
const Qr = /* @__PURE__ */ _e(Ij), kj = [], Dj = (e) => {
  const { open: t, onOpenChange: r, ...n } = e, a = kj.reduce((i, o) => {
    const { [o]: s, ...u } = i;
    return u;
  }, n);
  return S(jT, {
    ...a,
    open: t,
    onOpenChange: r,
    align: e.align || "end"
  });
}, rS = na("Dropdown", Dj), Nj = ({ items: e, children: t }) => {
  const [r, n] = he(!1);
  return K(MT, {
    open: r,
    onOpenChange: n,
    children: [S($T, {
      asChild: !0,
      children: t || S(Ar, {
        label: "Other actions",
        icon: dO,
        variant: "outline",
        size: "lg",
        pressed: r,
        noTitle: !0
      })
    }), S(IT, {
      className: "bg-f1-background-overlay"
    }), S(kT, {
      className: "bg-f1-background",
      children: S("div", {
        className: "flex flex-col px-2 pb-3 pt-2",
        children: e.map((a, i) => a.type === "separator" ? S("div", {
          className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
        }, `separator-${i}`) : a.type === "label" ? S("span", {
          className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
          children: a.text
        }, `label-${i}`) : a.href ? S(ph, {
          href: a.href,
          className: J("flex w-full items-start gap-1.5", a.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
          children: S(DT, {
            item: a
          })
        }, `link-${i}`) : K("button", {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), a.onClick?.(), n(!1);
          },
          className: "flex w-full items-center gap-2 p-3",
          children: [a.icon && S("span", {
            className: J("h-5 w-5 text-f1-icon", a.critical && "text-f1-icon-critical"),
            children: S(ut, {
              icon: a.icon,
              size: "md"
            })
          }), S("span", {
            className: J("font-medium", a.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
            children: a.label
          })]
        }, a.label))
      })
    })]
  });
}, RW = na("MobileDropdown", Nj), Rj = As({
  base: "flex items-center justify-center border border-solid",
  variants: {
    type: {
      critical: "border-f1-border-critical bg-f1-background-critical text-f1-icon-critical",
      warning: "border-f1-border-warning bg-f1-background-warning text-f1-icon-warning",
      info: "border-f1-border-info bg-f1-background-info text-f1-icon-info",
      positive: "border-f1-border-positive bg-f1-background-positive text-f1-icon-positive"
    },
    size: {
      sm: "h-6 w-6 rounded-sm",
      md: "h-8 w-8 rounded",
      lg: "h-10 w-10 rounded-md"
    }
  },
  defaultVariants: {
    type: "info",
    size: "md"
  }
}), Lj = ({ type: e, size: t, "aria-label": r, "aria-labelledby": n }) => {
  const a = {
    critical: hO,
    warning: hh,
    info: pO,
    positive: _s
  };
  return S("div", {
    className: Rj({
      type: e,
      size: t
    }),
    "aria-label": r,
    "aria-labelledby": n,
    role: "alert",
    children: S(ut, {
      icon: a[e],
      size: t
    })
  });
};
function qj(e, t) {
  const r = bn(e), n = bn(t), a = r.getTime() - n.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function qh(e) {
  return NT(e, Date.now());
}
function Bj(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function Fj(e, t, r) {
  const n = RT(), a = r?.locale ?? n.locale ?? LT, i = qj(e, t);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r?.addSuffix,
    comparison: i
  });
  let s, u;
  i > 0 ? (s = bn(t), u = bn(e)) : (s = bn(e), u = bn(t));
  const c = Bj(r?.roundingMethod ?? "round"), l = u.getTime() - s.getTime(), f = l / fy, d = sy(u) - sy(s), p = (l - d) / fy, y = r?.unit;
  let h;
  if (y ? h = y : f < 1 ? h = "second" : f < 60 ? h = "minute" : f < uy ? h = "hour" : p < cy ? h = "day" : p < ly ? h = "month" : h = "year", h === "second") {
    const v = c(l / 1e3);
    return a.formatDistance("xSeconds", v, o);
  } else if (h === "minute") {
    const v = c(f);
    return a.formatDistance("xMinutes", v, o);
  } else if (h === "hour") {
    const v = c(f / 60);
    return a.formatDistance("xHours", v, o);
  } else if (h === "day") {
    const v = c(p / uy);
    return a.formatDistance("xDays", v, o);
  } else if (h === "month") {
    const v = c(p / cy);
    return v === 12 && y !== "month" ? a.formatDistance("xYears", 1, o) : a.formatDistance("xMonths", v, o);
  } else {
    const v = c(p / ly);
    return a.formatDistance("xYears", v, o);
  }
}
function zj(e, t) {
  return Fj(e, qh(e), t);
}
function nS(e) {
  return vO(e, qh(e));
}
function aS(e) {
  return vO(e, bo(qh(e), 1));
}
function xa(e, t) {
  return qT(e, -t);
}
function ig(e, t) {
  return BT(e, -t);
}
function LW(e) {
  return Ga(e, "p");
}
function qW(e) {
  return Ga(e, "HH:mm");
}
function Wj(e) {
  return Ga(e, "LLL");
}
function Uj(e) {
  return e.getDate();
}
function og(e, t = !0) {
  return zj(e, { addSuffix: t });
}
function BW(e, { yesterdayRelative: t = !0 } = {}) {
  return nS(e) ? og(e) : aS(e) ? t ? og(e) : Ga(e, "p") : Ga(e, "PPPp");
}
const FW = (e, t) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return e.forEach((n) => {
    const a = n[t], i = Math.abs(FT(a, /* @__PURE__ */ new Date()));
    nS(a) ? r.today.push(n) : aS(a) ? r.yesterday.push(n) : i <= 7 ? r.lastWeek.push(n) : i <= 30 ? r.lastMonth.push(n) : r[a.getFullYear()] = [...r[a.getFullYear()] || [], n];
  }), r;
}, zW = ({ date: e, "aria-label": t, "aria-labelledby": r }) => {
  const n = Uj(e), a = Wj(e);
  return K("div", {
    className: "flex h-10 w-10 flex-col items-center justify-center rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary",
    "aria-label": t,
    "aria-labelledby": r,
    children: [S("div", {
      className: "pt-0.5 text-xs font-semibold uppercase leading-3 text-f1-special-highlight dark:text-f1-foreground-inverse-secondary",
      children: a
    }), S("div", {
      className: "flex items-center justify-center text-lg font-medium leading-tight text-f1-foreground",
      children: n
    })]
  });
};
function iS(e, t) {
  switch (e) {
    case "person":
      return `${t.firstName} ${t.lastName}`;
    case "team":
      return t.name;
    case "company":
      return t.name;
    case "file":
      return t.file.name;
    case "flag":
      return t.name;
    default:
      return "";
  }
}
const Hj = As({
  base: "flex shrink-0 items-center justify-center bg-f1-background-secondary font-medium text-f1-foreground-secondary",
  variants: {
    size: {
      xs: "h-5 w-5 rounded-xs text-sm",
      sm: "h-6 min-w-6 rounded-sm px-1 text-sm",
      md: "h-8 min-w-8 rounded px-1.5"
    },
    type: {
      base: "",
      rounded: "!rounded-full"
    }
  },
  compoundVariants: [{
    size: "sm",
    type: "rounded",
    className: "px-1.5"
  }, {
    size: "md",
    type: "rounded",
    className: "px-2"
  }],
  defaultVariants: {
    size: "md",
    type: "base"
  }
}), Kj = ({ count: e, size: t = "md", type: r, list: n, avatarType: a = "person" }) => {
  const i = S("div", {
    className: J("cursor-default font-medium transition hover:bg-f1-background-secondary-hover", Hj({
      size: t,
      type: r
    })),
    children: t === "xs" ? S(ut, {
      icon: dO,
      size: "xs"
    }) : `+${e}`
  });
  return n?.length ? K(yO, {
    children: [S(mO, {
      asChild: !0,
      children: i
    }), S(gO, {
      side: "top",
      children: K(vh, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [n.map((o, s) => K("div", {
          className: "flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: [S("div", {
            className: "h-6 w-6 shrink-0",
            children: S(nn, {
              avatar: {
                type: a,
                ...o
              },
              size: "sm"
            })
          }), S("div", {
            className: "min-w-0 flex-1 truncate font-semibold",
            children: iS(a, o)
          })]
        }, s)), S(bO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
}, Vj = ["xs", "sm", "md"], Gj = {
  base: {
    md: "path('M1.08993 5.46009C0 7.59921 0 10.3995 0 16C0 21.6005 0 24.4008 1.08993 26.5399C2.04867 28.4215 3.57847 29.9513 5.46009 30.9101C7.59921 32 10.3995 32 16 32C21.6005 32 24.4008 32 26.5399 30.9101C27.4506 30.446 28.279 29.8482 29 29.1414C28.2314 28.388 27.5846 27.5108 27.0899 26.5399C26 24.4008 26 21.6005 26 16C26 10.3995 26 7.59921 27.0899 5.46009C27.5846 4.48921 28.2314 3.612 29 2.85857C28.279 2.15181 27.4506 1.55398 26.5399 1.08993C24.4008 0 21.6005 0 16 0C10.3995 0 7.59921 0 5.46009 1.08993C3.57847 2.04867 2.04867 3.57847 1.08993 5.46009Z')",
    sm: "path('M0.608964 4.93853C0 6.4087 0 8.27247 0 12C0 15.7275 0 17.5913 0.608964 19.0615C1.42092 21.0217 2.97831 22.5791 4.93853 23.391C6.4087 24 8.27247 24 12 24C15.7275 24 17.5913 24 19.0615 23.391C19.9729 23.0135 20.7972 22.4749 21.5 21.8095C20.6912 21.0438 20.0434 20.1103 19.609 19.0615C19 17.5913 19 15.7275 19 12C19 8.27247 19 6.4087 19.609 4.93853C20.0434 3.88971 20.6912 2.95622 21.5 2.19052C20.7972 1.52515 19.9729 0.986481 19.0615 0.608964C17.5913 0 15.7275 0 12 0C8.27247 0 6.4087 0 4.93853 0.608964C2.97831 1.42092 1.42092 2.97831 0.608964 4.93853Z')",
    xs: "path('M0.653961 3.27606C0 4.55953 0 6.23969 0 9.6V11.4C0 14.7603 0 16.4405 0.653961 17.7239C1.2292 18.8529 2.14708 19.7708 3.27606 20.346C4.55953 21 6.23969 21 9.6 21H10.4C13.7603 21 15.4405 21 16.7239 20.346C17.188 20.1096 17.6164 19.8152 18 19.4721C17.4504 18.9805 16.9927 18.3889 16.654 17.7239C16 16.4405 16 14.7603 16 11.4V9.6C16 6.23969 16 4.55953 16.654 3.27606C16.9927 2.61115 17.4504 2.01946 18 1.52786C17.6164 1.18476 17.188 0.890414 16.7239 0.653961C15.4405 0 13.7603 0 10.4 0H9.6C6.23969 0 4.55953 0 3.27606 0.653961C2.14708 1.2292 1.2292 2.14708 0.653961 3.27606Z')"
  },
  rounded: {
    md: "path('M29 6.67055C27.1119 9.29683 26 12.5186 26 16C26 19.4814 27.1119 22.7032 29 25.3295C26.0958 29.3692 21.3551 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C21.3551 0 26.0958 2.63083 29 6.67055Z')",
    sm: "path('M21.3746 4.50813C19.1755 1.76008 15.7933 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C15.7933 24 19.1755 22.2399 21.3746 19.4919C19.8788 17.3743 19 14.7898 19 12C19 9.21023 19.8788 6.62571 21.3746 4.50813Z')",
    xs: "path('M18 4.19899C16.7442 5.95406 16 8.13577 16 10.5C16 12.8642 16.7442 15.0459 18 16.801C16.1755 19.3508 13.2712 21 10 21C4.47716 21 0 16.299 0 10.5C0 4.70102 4.47716 0 10 0C13.2712 0 16.1755 1.64923 18 4.19899Z')"
  }
}, oS = ({ avatars: e, size: t = "md", type: r, noTooltip: n = !1, remainingCount: a, max: i }) => {
  if (t && !Vj.includes(t)) {
    const c = {
      small: "sm",
      medium: "md",
      xsmall: "xs"
    };
    console.warn(`The avatar list size: ${t} is deprecated. Use ${c[t]} instead.`), t = c[t] ?? "md";
  }
  const s = {
    xs: -2,
    sm: -3,
    md: -4
  }[t] ?? 0, u = He(() => ({
    xs: 20,
    sm: 24,
    md: 32
  })[t], [t]);
  return S(xO, {
    max: i,
    items: e.map((c) => ({
      type: r,
      ...c
    })),
    gap: s,
    itemsWidth: u,
    className: "flex items-center",
    renderListItem: (c, l) => {
      const f = iS(r, c), d = S("div", {
        className: "flex h-fit w-fit shrink-0 items-center justify-center",
        style: l !== e.length - 1 ? {
          clipPath: Gj[r === "person" ? "rounded" : "base"][t]
        } : void 0,
        children: S(nn, {
          avatar: {
            ...c,
            type: r
          },
          size: t
        })
      });
      return S("div", {
        children: n ? d : S(yh, {
          label: f,
          children: d
        })
      }, l);
    },
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: a !== void 0,
    renderOverflowIndicator: (c) => S("div", {
      className: "flex h-fit w-fit items-center",
      style: {
        marginLeft: s
      },
      children: S(Kj, {
        count: (a ?? 0) + c,
        size: t,
        type: r === "person" ? "rounded" : "base",
        avatarType: r,
        list: a ? void 0 : e.slice(e.length - c)
      })
    }),
    overflowIndicatorWithPopover: !1
  });
};
oS.displayName = "AvatarList";
const Yj = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Xj = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += Yj[r[e] & 63];
  return t;
};
var el, sg;
function aa() {
  if (sg) return el;
  sg = 1;
  var e = fr(), t = dr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return el = n, el;
}
var tl, ug;
function Bh() {
  if (ug) return tl;
  ug = 1;
  var e = pt(), t = aa(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return tl = a, tl;
}
var rl, cg;
function sS() {
  if (cg) return rl;
  cg = 1;
  var e = Ih(), t = "Expected a function";
  function r(n, a) {
    if (typeof n != "function" || a != null && typeof a != "function")
      throw new TypeError(t);
    var i = function() {
      var o = arguments, s = a ? a.apply(this, o) : o[0], u = i.cache;
      if (u.has(s))
        return u.get(s);
      var c = n.apply(this, o);
      return i.cache = u.set(s, c) || u, c;
    };
    return i.cache = new (r.Cache || e)(), i;
  }
  return r.Cache = e, rl = r, rl;
}
var nl, lg;
function Zj() {
  if (lg) return nl;
  lg = 1;
  var e = sS(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return nl = r, nl;
}
var al, fg;
function Jj() {
  if (fg) return al;
  fg = 1;
  var e = Zj(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, c) {
      i.push(u ? c.replace(r, "$1") : s || o);
    }), i;
  });
  return al = n, al;
}
var il, dg;
function Fh() {
  if (dg) return il;
  dg = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return il = e, il;
}
var ol, pg;
function Qj() {
  if (pg) return ol;
  pg = 1;
  var e = Li(), t = Fh(), r = pt(), n = aa(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
  function o(s) {
    if (typeof s == "string")
      return s;
    if (r(s))
      return t(s, o) + "";
    if (n(s))
      return i ? i.call(s) : "";
    var u = s + "";
    return u == "0" && 1 / s == -1 / 0 ? "-0" : u;
  }
  return ol = o, ol;
}
var sl, hg;
function uS() {
  if (hg) return sl;
  hg = 1;
  var e = Qj();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return sl = t, sl;
}
var ul, vg;
function cS() {
  if (vg) return ul;
  vg = 1;
  var e = pt(), t = Bh(), r = Jj(), n = uS();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return ul = a, ul;
}
var cl, yg;
function Is() {
  if (yg) return cl;
  yg = 1;
  var e = aa();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return cl = t, cl;
}
var ll, mg;
function zh() {
  if (mg) return ll;
  mg = 1;
  var e = cS(), t = Is();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return ll = r, ll;
}
var fl, gg;
function lS() {
  if (gg) return fl;
  gg = 1;
  var e = zh();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return fl = t, fl;
}
var e2 = lS();
const bt = /* @__PURE__ */ _e(e2);
var dl, bg;
function t2() {
  if (bg) return dl;
  bg = 1;
  function e(t) {
    return t == null;
  }
  return dl = e, dl;
}
var r2 = t2();
const le = /* @__PURE__ */ _e(r2);
var pl, xg;
function n2() {
  if (xg) return pl;
  xg = 1;
  var e = fr(), t = pt(), r = dr(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return pl = a, pl;
}
var a2 = n2();
const Bi = /* @__PURE__ */ _e(a2);
var i2 = Mh();
const ue = /* @__PURE__ */ _e(i2);
var o2 = Tr();
const ia = /* @__PURE__ */ _e(o2);
var to = { exports: {} }, ge = {};
var wg;
function s2() {
  if (wg) return ge;
  wg = 1;
  var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), y;
  y = /* @__PURE__ */ Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var b = v.$$typeof;
      switch (b) {
        case e:
          switch (v = v.type, v) {
            case r:
            case a:
            case n:
            case c:
            case l:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case o:
                case u:
                case d:
                case f:
                case i:
                  return v;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return ge.ContextConsumer = o, ge.ContextProvider = i, ge.Element = e, ge.ForwardRef = u, ge.Fragment = r, ge.Lazy = d, ge.Memo = f, ge.Portal = t, ge.Profiler = a, ge.StrictMode = n, ge.Suspense = c, ge.SuspenseList = l, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(v) {
    return h(v) === o;
  }, ge.isContextProvider = function(v) {
    return h(v) === i;
  }, ge.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, ge.isForwardRef = function(v) {
    return h(v) === u;
  }, ge.isFragment = function(v) {
    return h(v) === r;
  }, ge.isLazy = function(v) {
    return h(v) === d;
  }, ge.isMemo = function(v) {
    return h(v) === f;
  }, ge.isPortal = function(v) {
    return h(v) === t;
  }, ge.isProfiler = function(v) {
    return h(v) === a;
  }, ge.isStrictMode = function(v) {
    return h(v) === n;
  }, ge.isSuspense = function(v) {
    return h(v) === c;
  }, ge.isSuspenseList = function(v) {
    return h(v) === l;
  }, ge.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === a || v === n || v === c || v === l || v === p || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === f || v.$$typeof === i || v.$$typeof === o || v.$$typeof === u || v.$$typeof === y || v.getModuleId !== void 0);
  }, ge.typeOf = h, ge;
}
var be = {};
var Og;
function u2() {
  return Og || (Og = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), y = !1, h = !1, v = !1, b = !1, g = !1, x;
    x = /* @__PURE__ */ Symbol.for("react.module.reference");
    function O(F) {
      return !!(typeof F == "string" || typeof F == "function" || F === r || F === a || g || F === n || F === c || F === l || b || F === p || y || h || v || typeof F == "object" && F !== null && (F.$$typeof === d || F.$$typeof === f || F.$$typeof === i || F.$$typeof === o || F.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      F.$$typeof === x || F.getModuleId !== void 0));
    }
    function m(F) {
      if (typeof F == "object" && F !== null) {
        var ae = F.$$typeof;
        switch (ae) {
          case e:
            var ce = F.type;
            switch (ce) {
              case r:
              case a:
              case n:
              case c:
              case l:
                return ce;
              default:
                var oe = ce && ce.$$typeof;
                switch (oe) {
                  case s:
                  case o:
                  case u:
                  case d:
                  case f:
                  case i:
                    return oe;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var w = o, A = i, _ = e, P = u, k = r, T = d, $ = f, M = t, j = a, I = n, D = c, R = l, L = !1, z = !1;
    function N(F) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function B(F) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(F) {
      return m(F) === o;
    }
    function H(F) {
      return m(F) === i;
    }
    function X(F) {
      return typeof F == "object" && F !== null && F.$$typeof === e;
    }
    function te(F) {
      return m(F) === u;
    }
    function ne(F) {
      return m(F) === r;
    }
    function ee(F) {
      return m(F) === d;
    }
    function Q(F) {
      return m(F) === f;
    }
    function U(F) {
      return m(F) === t;
    }
    function V(F) {
      return m(F) === a;
    }
    function Z(F) {
      return m(F) === n;
    }
    function E(F) {
      return m(F) === c;
    }
    function Y(F) {
      return m(F) === l;
    }
    be.ContextConsumer = w, be.ContextProvider = A, be.Element = _, be.ForwardRef = P, be.Fragment = k, be.Lazy = T, be.Memo = $, be.Portal = M, be.Profiler = j, be.StrictMode = I, be.Suspense = D, be.SuspenseList = R, be.isAsyncMode = N, be.isConcurrentMode = B, be.isContextConsumer = q, be.isContextProvider = H, be.isElement = X, be.isForwardRef = te, be.isFragment = ne, be.isLazy = ee, be.isMemo = Q, be.isPortal = U, be.isProfiler = V, be.isStrictMode = Z, be.isSuspense = E, be.isSuspenseList = Y, be.isValidElementType = O, be.typeOf = m;
  })()), be;
}
var Sg;
function c2() {
  return Sg || (Sg = 1, process.env.NODE_ENV === "production" ? to.exports = s2() : to.exports = u2()), to.exports;
}
var l2 = c2(), hl, Ag;
function fS() {
  if (Ag) return hl;
  Ag = 1;
  var e = fr(), t = dr(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return hl = n, hl;
}
var vl, _g;
function f2() {
  if (_g) return vl;
  _g = 1;
  var e = fS();
  function t(r) {
    return e(r) && r != +r;
  }
  return vl = t, vl;
}
var d2 = f2();
const oa = /* @__PURE__ */ _e(d2);
var p2 = fS();
const h2 = /* @__PURE__ */ _e(p2);
var it = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Fr = function(t) {
  return Bi(t) && t.indexOf("%") === t.length - 1;
}, G = function(t) {
  return h2(t) && !oa(t);
}, Ge = function(t) {
  return G(t) || Bi(t);
}, v2 = 0, sn = function(t) {
  var r = ++v2;
  return "".concat(t || "").concat(r);
}, ot = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!G(t) && !Bi(t))
    return n;
  var i;
  if (Fr(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return oa(i) && (i = n), a && i > r && (i = r), i;
}, xr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, y2 = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, Ke = function(t, r) {
  return G(t) && G(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Oo(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : bt(n, t)) === r;
  });
}
var WW = function(t) {
  if (!t || !t.length)
    return null;
  for (var r = t.length, n = 0, a = 0, i = 0, o = 0, s = 1 / 0, u = -1 / 0, c = 0, l = 0, f = 0; f < r; f++)
    c = t[f].cx || 0, l = t[f].cy || 0, n += c, a += l, i += c * l, o += c * c, s = Math.min(s, c), u = Math.max(u, c);
  var d = r * o !== n * n ? (r * i - n * a) / (r * o - n * n) : 0;
  return {
    xmin: s,
    xmax: u,
    a: d,
    b: (a - d * n) / r
  };
};
function _n(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Rd(e) {
  "@babel/helpers - typeof";
  return Rd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rd(e);
}
var m2 = ["viewBox", "children"], g2 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Pg = ["points", "pathLength"], yl = {
  svg: m2,
  polygon: Pg,
  polyline: Pg
}, Wh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], So = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Nt(t) && (n = t.props), !ia(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    Wh.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, b2 = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, en = function(t, r, n) {
  if (!ia(t) || Rd(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    Wh.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = b2(o, r, n));
  }), a;
}, x2 = ["children"], w2 = ["children"];
function Tg(e, t) {
  if (e == null) return {};
  var r = O2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ld(e) {
  "@babel/helpers - typeof";
  return Ld = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ld(e);
}
var Eg = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, or = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Cg = null, ml = null, Uh = function e(t) {
  if (t === Cg && Array.isArray(ml))
    return ml;
  var r = [];
  return Kr.forEach(t, function(n) {
    le(n) || (l2.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), ml = r, Cg = t, r;
};
function xt(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return or(a);
  }) : n = [or(t)], Uh(e).forEach(function(a) {
    var i = bt(a, "type.displayName") || bt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function yt(e, t) {
  var r = xt(e, t);
  return r && r[0];
}
var jg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!G(n) || n <= 0 || !G(a) || a <= 0);
}, S2 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], A2 = function(t) {
  return t && t.type && Bi(t.type) && S2.indexOf(t.type) >= 0;
}, dS = function(t) {
  return t && Ld(t) === "object" && "clipDot" in t;
}, _2 = function(t, r, n, a) {
  var i, o = (i = yl?.[a]) !== null && i !== void 0 ? i : [];
  return !ue(t) && (a && o.includes(r) || g2.includes(r)) || n && Wh.includes(r);
}, ie = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Nt(t) && (a = t.props), !ia(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    _2((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, qd = function e(t, r) {
  if (t === r)
    return !0;
  var n = Kr.count(t);
  if (n !== Kr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Mg(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!Mg(i, o))
      return !1;
  }
  return !0;
}, Mg = function(t, r) {
  if (le(t) && le(r))
    return !0;
  if (!le(t) && !le(r)) {
    var n = t.props || {}, a = n.children, i = Tg(n, x2), o = r.props || {}, s = o.children, u = Tg(o, w2);
    return a && s ? _n(i, u) && qd(a, s) : !a && !s ? _n(i, u) : !1;
  }
  return !1;
}, $g = function(t, r) {
  var n = [], a = {};
  return Uh(t).forEach(function(i, o) {
    if (A2(i))
      n.push(i);
    else if (i) {
      var s = or(i.type), u = r[s] || {}, c = u.handler, l = u.once;
      if (c && (!l || !a[s])) {
        var f = c(i, s, o);
        n.push(f), a[s] = !0;
      }
    }
  }), n;
}, P2 = function(t) {
  var r = t && t.type;
  return r && Eg[r] ? Eg[r] : null;
}, T2 = function(t, r) {
  return Uh(r).indexOf(t);
}, E2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Bd() {
  return Bd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bd.apply(this, arguments);
}
function C2(e, t) {
  if (e == null) return {};
  var r = j2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function j2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Fd(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, u = e.desc, c = C2(e, E2), l = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = de("recharts-surface", i);
  return /* @__PURE__ */ C.createElement("svg", Bd({}, ie(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ C.createElement("title", null, s), /* @__PURE__ */ C.createElement("desc", null, u), t);
}
var M2 = ["children", "className"];
function zd() {
  return zd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zd.apply(this, arguments);
}
function $2(e, t) {
  if (e == null) return {};
  var r = I2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function I2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var pe = /* @__PURE__ */ C.forwardRef(function(e, t) {
  var r = e.children, n = e.className, a = $2(e, M2), i = de("recharts-layer", n);
  return /* @__PURE__ */ C.createElement("g", zd({
    className: i
  }, ie(a, !0), {
    ref: t
  }), r);
}), k2 = process.env.NODE_ENV !== "production", Lt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (k2 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
}, gl, Ig;
function D2() {
  if (Ig) return gl;
  Ig = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return gl = e, gl;
}
var bl, kg;
function N2() {
  if (kg) return bl;
  kg = 1;
  var e = D2();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return bl = t, bl;
}
var xl, Dg;
function pS() {
  if (Dg) return xl;
  Dg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(c) {
    return s.test(c);
  }
  return xl = u, xl;
}
var wl, Ng;
function R2() {
  if (Ng) return wl;
  Ng = 1;
  function e(t) {
    return t.split("");
  }
  return wl = e, wl;
}
var Ol, Rg;
function L2() {
  if (Rg) return Ol;
  Rg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + u + ")", l = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", y = c + "?", h = "[" + i + "]?", v = "(?:" + p + "(?:" + [l, f, d].join("|") + ")" + h + y + ")*", b = h + y + v, g = "(?:" + [l + s + "?", s, f, d, o].join("|") + ")", x = RegExp(u + "(?=" + u + ")|" + g + b, "g");
  function O(m) {
    return m.match(x) || [];
  }
  return Ol = O, Ol;
}
var Sl, Lg;
function q2() {
  if (Lg) return Sl;
  Lg = 1;
  var e = R2(), t = pS(), r = L2();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Sl = n, Sl;
}
var Al, qg;
function B2() {
  if (qg) return Al;
  qg = 1;
  var e = N2(), t = pS(), r = q2(), n = uS();
  function a(i) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, u = s ? s[0] : o.charAt(0), c = s ? e(s, 1).join("") : o.slice(1);
      return u[i]() + c;
    };
  }
  return Al = a, Al;
}
var _l, Bg;
function F2() {
  if (Bg) return _l;
  Bg = 1;
  var e = B2(), t = e("toUpperCase");
  return _l = t, _l;
}
var z2 = F2();
const ks = /* @__PURE__ */ _e(z2);
function Ce(e) {
  return function() {
    return e;
  };
}
const hS = Math.cos, Ao = Math.sin, zt = Math.sqrt, _o = Math.PI, Ds = 2 * _o, Wd = Math.PI, Ud = 2 * Wd, Lr = 1e-6, W2 = Ud - Lr;
function vS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function U2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return vS;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class H2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? vS : U2(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, a) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +a}`;
  }
  bezierCurveTo(t, r, n, a, i, o) {
    this._append`C${+t},${+r},${+n},${+a},${this._x1 = +i},${this._y1 = +o}`;
  }
  arcTo(t, r, n, a, i) {
    if (t = +t, r = +r, n = +n, a = +a, i = +i, i < 0) throw new Error(`negative radius: ${i}`);
    let o = this._x1, s = this._y1, u = n - t, c = a - r, l = o - t, f = s - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > Lr) if (!(Math.abs(f * u - c * l) > Lr) || !i)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, y = a - s, h = u * u + c * c, v = p * p + y * y, b = Math.sqrt(h), g = Math.sqrt(d), x = i * Math.tan((Wd - Math.acos((h + d - v) / (2 * b * g))) / 2), O = x / g, m = x / b;
      Math.abs(O - 1) > Lr && this._append`L${t + O * l},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > l * y)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), u = n * Math.sin(a), c = t + s, l = r + u, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Lr || Math.abs(this._y1 - l) > Lr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Ud + Ud), d > W2 ? this._append`A${n},${n},0,1,${f},${t - s},${r - u}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > Lr && this._append`A${n},${n},0,${+(d >= Wd)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Hh(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new H2(t);
}
function Kh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function yS(e) {
  this._context = e;
}
yS.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Ns(e) {
  return new yS(e);
}
function mS(e) {
  return e[0];
}
function gS(e) {
  return e[1];
}
function bS(e, t) {
  var r = Ce(!0), n = null, a = Ns, i = null, o = Hh(s);
  e = typeof e == "function" ? e : e === void 0 ? mS : Ce(e), t = typeof t == "function" ? t : t === void 0 ? gS : Ce(t);
  function s(u) {
    var c, l = (u = Kh(u)).length, f, d = !1, p;
    for (n == null && (i = a(p = o())), c = 0; c <= l; ++c)
      !(c < l && r(f = u[c], c, u)) === d && ((d = !d) ? i.lineStart() : i.lineEnd()), d && i.point(+e(f, c, u), +t(f, c, u));
    if (p) return i = null, p + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Ce(+u), s) : e;
  }, s.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : Ce(+u), s) : t;
  }, s.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : Ce(!!u), s) : r;
  }, s.curve = function(u) {
    return arguments.length ? (a = u, n != null && (i = a(n)), s) : a;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? n = i = null : i = a(n = u), s) : n;
  }, s;
}
function ro(e, t, r) {
  var n = null, a = Ce(!0), i = null, o = Ns, s = null, u = Hh(c);
  e = typeof e == "function" ? e : e === void 0 ? mS : Ce(+e), t = typeof t == "function" ? t : Ce(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? gS : Ce(+r);
  function c(f) {
    var d, p, y, h = (f = Kh(f)).length, v, b = !1, g, x = new Array(h), O = new Array(h);
    for (i == null && (s = o(g = u())), d = 0; d <= h; ++d) {
      if (!(d < h && a(v = f[d], d, f)) === b)
        if (b = !b)
          p = d, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), y = d - 1; y >= p; --y)
            s.point(x[y], O[y]);
          s.lineEnd(), s.areaEnd();
        }
      b && (x[d] = +e(v, d, f), O[d] = +t(v, d, f), s.point(n ? +n(v, d, f) : x[d], r ? +r(v, d, f) : O[d]));
    }
    if (g) return s = null, g + "" || null;
  }
  function l() {
    return bS().defined(a).curve(o).context(i);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ce(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Ce(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Ce(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ce(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Ce(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Ce(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return l().x(e).y(t);
  }, c.lineY1 = function() {
    return l().x(e).y(r);
  }, c.lineX1 = function() {
    return l().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (a = typeof f == "function" ? f : Ce(!!f), c) : a;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, i != null && (s = o(i)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? i = s = null : s = o(i = f), c) : i;
  }, c;
}
class xS {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function K2(e) {
  return new xS(e, !0);
}
function V2(e) {
  return new xS(e, !1);
}
const Vh = {
  draw(e, t) {
    const r = zt(t / _o);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ds);
  }
}, G2 = {
  draw(e, t) {
    const r = zt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, wS = zt(1 / 3), Y2 = wS * 2, X2 = {
  draw(e, t) {
    const r = zt(t / Y2), n = r * wS;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Z2 = {
  draw(e, t) {
    const r = zt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, J2 = 0.8908130915292852, OS = Ao(_o / 10) / Ao(7 * _o / 10), Q2 = Ao(Ds / 10) * OS, eM = -hS(Ds / 10) * OS, tM = {
  draw(e, t) {
    const r = zt(t * J2), n = Q2 * r, a = eM * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = Ds * i / 5, s = hS(o), u = Ao(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * a, u * n + s * a);
    }
    e.closePath();
  }
}, Pl = zt(3), rM = {
  draw(e, t) {
    const r = -zt(t / (Pl * 3));
    e.moveTo(0, r * 2), e.lineTo(-Pl * r, -r), e.lineTo(Pl * r, -r), e.closePath();
  }
}, wt = -0.5, Ot = zt(3) / 2, Hd = 1 / zt(12), nM = (Hd / 2 + 1) * 3, aM = {
  draw(e, t) {
    const r = zt(t / nM), n = r / 2, a = r * Hd, i = n, o = r * Hd + r, s = -i, u = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, u), e.lineTo(wt * n - Ot * a, Ot * n + wt * a), e.lineTo(wt * i - Ot * o, Ot * i + wt * o), e.lineTo(wt * s - Ot * u, Ot * s + wt * u), e.lineTo(wt * n + Ot * a, wt * a - Ot * n), e.lineTo(wt * i + Ot * o, wt * o - Ot * i), e.lineTo(wt * s + Ot * u, wt * u - Ot * s), e.closePath();
  }
};
function iM(e, t) {
  let r = null, n = Hh(a);
  e = typeof e == "function" ? e : Ce(e || Vh), t = typeof t == "function" ? t : Ce(t === void 0 ? 64 : +t);
  function a() {
    let i;
    if (r || (r = i = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), i) return r = null, i + "" || null;
  }
  return a.type = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Ce(i), a) : e;
  }, a.size = function(i) {
    return arguments.length ? (t = typeof i == "function" ? i : Ce(+i), a) : t;
  }, a.context = function(i) {
    return arguments.length ? (r = i ?? null, a) : r;
  }, a;
}
function Po() {
}
function To(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function SS(e) {
  this._context = e;
}
SS.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        To(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        To(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function oM(e) {
  return new SS(e);
}
function AS(e) {
  this._context = e;
}
AS.prototype = {
  areaStart: Po,
  areaEnd: Po,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        To(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function sM(e) {
  return new AS(e);
}
function _S(e) {
  this._context = e;
}
_S.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        To(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function uM(e) {
  return new _S(e);
}
function PS(e) {
  this._context = e;
}
PS.prototype = {
  areaStart: Po,
  areaEnd: Po,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function cM(e) {
  return new PS(e);
}
function Fg(e) {
  return e < 0 ? -1 : 1;
}
function zg(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), s = (i * a + o * n) / (n + a);
  return (Fg(i) + Fg(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Wg(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Tl(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function Eo(e) {
  this._context = e;
}
Eo.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Tl(this, this._t0, Wg(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Tl(this, Wg(this, r = zg(this, e, t)), r);
          break;
        default:
          Tl(this, this._t0, r = zg(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function TS(e) {
  this._context = new ES(e);
}
(TS.prototype = Object.create(Eo.prototype)).point = function(e, t) {
  Eo.prototype.point.call(this, t, e);
};
function ES(e) {
  this._context = e;
}
ES.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, i) {
    this._context.bezierCurveTo(t, e, n, r, i, a);
  }
};
function lM(e) {
  return new Eo(e);
}
function fM(e) {
  return new TS(e);
}
function CS(e) {
  this._context = e;
}
CS.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Ug(e), a = Ug(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Ug(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function dM(e) {
  return new CS(e);
}
function Rs(e, t) {
  this._context = e, this._t = t;
}
Rs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function pM(e) {
  return new Rs(e, 0.5);
}
function hM(e) {
  return new Rs(e, 0);
}
function vM(e) {
  return new Rs(e, 1);
}
function Cn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Kd(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function yM(e, t) {
  return e[t];
}
function mM(e) {
  const t = [];
  return t.key = e, t;
}
function gM() {
  var e = Ce([]), t = Kd, r = Cn, n = yM;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), mM), s, u = o.length, c = -1, l;
    for (const f of i)
      for (s = 0, ++c; s < u; ++s)
        (o[s][c] = [0, +n(f, o[s].key, c, i)]).data = f;
    for (s = 0, l = Kh(t(o)); s < u; ++s)
      o[l[s]].index = s;
    return r(o, l), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Ce(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Ce(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? Kd : typeof i == "function" ? i : Ce(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Cn, a) : r;
  }, a;
}
function bM(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    Cn(e, t);
  }
}
function xM(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Cn(e, t);
  }
}
function wM(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var s = 0, u = 0, c = 0; s < o; ++s) {
        for (var l = e[t[s]], f = l[n][1] || 0, d = l[n - 1][1] || 0, p = (f - d) / 2, y = 0; y < s; ++y) {
          var h = e[t[y]], v = h[n][1] || 0, b = h[n - 1][1] || 0;
          p += v - b;
        }
        u += f, c += p * f;
      }
      a[n - 1][1] += a[n - 1][0] = r, u && (r -= c / u);
    }
    a[n - 1][1] += a[n - 1][0] = r, Cn(e, t);
  }
}
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
var OM = ["type", "size", "sizeType"];
function Vd() {
  return Vd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vd.apply(this, arguments);
}
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hg(Object(r), !0).forEach(function(n) {
      SM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SM(e, t, r) {
  return t = AM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AM(e) {
  var t = _M(e, "string");
  return Ja(t) == "symbol" ? t : t + "";
}
function _M(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function PM(e, t) {
  if (e == null) return {};
  var r = TM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var jS = {
  symbolCircle: Vh,
  symbolCross: G2,
  symbolDiamond: X2,
  symbolSquare: Z2,
  symbolStar: tM,
  symbolTriangle: rM,
  symbolWye: aM
}, EM = Math.PI / 180, CM = function(t) {
  var r = "symbol".concat(ks(t));
  return jS[r] || Vh;
}, jM = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var a = 18 * EM;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, MM = function(t, r) {
  jS["symbol".concat(ks(t))] = r;
}, Gh = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, u = PM(t, OM), c = Kg(Kg({}, u), {}, {
    type: n,
    size: i,
    sizeType: s
  }), l = function() {
    var v = CM(n), b = iM().type(v).size(jM(i, s, n));
    return b();
  }, f = c.className, d = c.cx, p = c.cy, y = ie(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ C.createElement("path", Vd({}, y, {
    className: de("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: l()
  })) : null;
};
Gh.registerSymbol = MM;
function jn(e) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jn(e);
}
function Gd() {
  return Gd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gd.apply(this, arguments);
}
function Vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), !0).forEach(function(n) {
      Qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, $S(n.key), n);
  }
}
function DM(e, t, r) {
  return t && kM(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NM(e, t, r) {
  return t = Co(t), RM(e, MS() ? Reflect.construct(t, r || [], Co(e).constructor) : t.apply(e, r));
}
function RM(e, t) {
  if (t && (jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return LM(e);
}
function LM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function MS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (MS = function() {
    return !!e;
  })();
}
function Co(e) {
  return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Co(e);
}
function qM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Yd(e, t);
}
function Yd(e, t) {
  return Yd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Yd(e, t);
}
function Qa(e, t, r) {
  return t = $S(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $S(e) {
  var t = BM(e, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function BM(e, t) {
  if (jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var St = 32, Yh = /* @__PURE__ */ (function(e) {
  function t() {
    return IM(this, t), NM(this, t, arguments);
  }
  return qM(t, e), DM(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = St / 2, o = St / 6, s = St / 3, u = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ C.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: St,
            y2: i,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ C.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            d: "M0,".concat(i, "h").concat(s, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * s, ",").concat(i, `
            H`).concat(St, "M").concat(2 * s, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ C.createElement("path", {
            stroke: "none",
            fill: u,
            d: "M0,".concat(St / 8, "h").concat(St, "v").concat(St * 3 / 4, "h").concat(-St, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ C.isValidElement(n.legendIcon)) {
          var c = $M({}, n);
          return delete c.legendIcon, /* @__PURE__ */ C.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ C.createElement(Gh, {
          fill: u,
          cx: i,
          cy: i,
          size: St,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, a = this.props, i = a.payload, o = a.iconSize, s = a.layout, u = a.formatter, c = a.inactiveColor, l = {
        x: 0,
        y: 0,
        width: St,
        height: St
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, y) {
        var h = p.formatter || u, v = de(Qa(Qa({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var b = ue(p.value) ? null : p.value;
        Lt(
          !ue(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var g = p.inactive ? c : p.color;
        return /* @__PURE__ */ C.createElement("li", Gd({
          className: v,
          style: f,
          key: "legend-item-".concat(y)
        }, en(n.props, p, y)), /* @__PURE__ */ C.createElement(Fd, {
          width: o,
          height: o,
          viewBox: l,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ C.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: g
          }
        }, h ? h(b, p, y) : b));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.payload, i = n.layout, o = n.align;
      if (!a || !a.length)
        return null;
      var s = {
        padding: 0,
        margin: 0,
        textAlign: i === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ C.createElement("ul", {
        className: "recharts-default-legend",
        style: s
      }, this.renderItems());
    }
  }]);
})(jt);
Qa(Yh, "displayName", "Legend");
Qa(Yh, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var El, Gg;
function FM() {
  if (Gg) return El;
  Gg = 1;
  var e = HO(), t = Lh(), r = 1, n = 2;
  function a(i, o, s, u) {
    var c = s.length, l = c, f = !u;
    if (i == null)
      return !l;
    for (i = Object(i); c--; ) {
      var d = s[c];
      if (f && d[2] ? d[1] !== i[d[0]] : !(d[0] in i))
        return !1;
    }
    for (; ++c < l; ) {
      d = s[c];
      var p = d[0], y = i[p], h = d[1];
      if (f && d[2]) {
        if (y === void 0 && !(p in i))
          return !1;
      } else {
        var v = new e();
        if (u)
          var b = u(y, h, p, i, o, v);
        if (!(b === void 0 ? t(h, y, r | n, u, v) : b))
          return !1;
      }
    }
    return !0;
  }
  return El = a, El;
}
var Cl, Yg;
function IS() {
  if (Yg) return Cl;
  Yg = 1;
  var e = Tr();
  function t(r) {
    return r === r && !e(r);
  }
  return Cl = t, Cl;
}
var jl, Xg;
function zM() {
  if (Xg) return jl;
  Xg = 1;
  var e = IS(), t = $s();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return jl = r, jl;
}
var Ml, Zg;
function kS() {
  if (Zg) return Ml;
  Zg = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Ml = e, Ml;
}
var $l, Jg;
function WM() {
  if (Jg) return $l;
  Jg = 1;
  var e = FM(), t = zM(), r = kS();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return $l = n, $l;
}
var Il, Qg;
function UM() {
  if (Qg) return Il;
  Qg = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return Il = e, Il;
}
var kl, eb;
function HM() {
  if (eb) return kl;
  eb = 1;
  var e = cS(), t = Dh(), r = pt(), n = Nh(), a = Rh(), i = Is();
  function o(s, u, c) {
    u = e(u, s);
    for (var l = -1, f = u.length, d = !1; ++l < f; ) {
      var p = i(u[l]);
      if (!(d = s != null && c(s, p)))
        break;
      s = s[p];
    }
    return d || ++l != f ? d : (f = s == null ? 0 : s.length, !!f && a(f) && n(p, f) && (r(s) || t(s)));
  }
  return kl = o, kl;
}
var Dl, tb;
function KM() {
  if (tb) return Dl;
  tb = 1;
  var e = UM(), t = HM();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return Dl = r, Dl;
}
var Nl, rb;
function VM() {
  if (rb) return Nl;
  rb = 1;
  var e = Lh(), t = lS(), r = KM(), n = Bh(), a = IS(), i = kS(), o = Is(), s = 1, u = 2;
  function c(l, f) {
    return n(l) && a(f) ? i(o(l), f) : function(d) {
      var p = t(d, l);
      return p === void 0 && p === f ? r(d, l) : e(f, p, s | u);
    };
  }
  return Nl = c, Nl;
}
var Rl, nb;
function sa() {
  if (nb) return Rl;
  nb = 1;
  function e(t) {
    return t;
  }
  return Rl = e, Rl;
}
var Ll, ab;
function GM() {
  if (ab) return Ll;
  ab = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Ll = e, Ll;
}
var ql, ib;
function YM() {
  if (ib) return ql;
  ib = 1;
  var e = zh();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return ql = t, ql;
}
var Bl, ob;
function XM() {
  if (ob) return Bl;
  ob = 1;
  var e = GM(), t = YM(), r = Bh(), n = Is();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return Bl = a, Bl;
}
var Fl, sb;
function Qt() {
  if (sb) return Fl;
  sb = 1;
  var e = WM(), t = VM(), r = sa(), n = pt(), a = XM();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return Fl = i, Fl;
}
var zl, ub;
function DS() {
  if (ub) return zl;
  ub = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return zl = e, zl;
}
var Wl, cb;
function ZM() {
  if (cb) return Wl;
  cb = 1;
  function e(t) {
    return t !== t;
  }
  return Wl = e, Wl;
}
var Ul, lb;
function JM() {
  if (lb) return Ul;
  lb = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Ul = e, Ul;
}
var Hl, fb;
function QM() {
  if (fb) return Hl;
  fb = 1;
  var e = DS(), t = ZM(), r = JM();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Hl = n, Hl;
}
var Kl, db;
function e$() {
  if (db) return Kl;
  db = 1;
  var e = QM();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return Kl = t, Kl;
}
var Vl, pb;
function t$() {
  if (pb) return Vl;
  pb = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return Vl = e, Vl;
}
var Gl, hb;
function r$() {
  if (hb) return Gl;
  hb = 1;
  function e() {
  }
  return Gl = e, Gl;
}
var Yl, vb;
function n$() {
  if (vb) return Yl;
  vb = 1;
  var e = tS(), t = r$(), r = kh(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return Yl = a, Yl;
}
var Xl, yb;
function a$() {
  if (yb) return Xl;
  yb = 1;
  var e = KO(), t = e$(), r = t$(), n = GO(), a = n$(), i = kh(), o = 200;
  function s(u, c, l) {
    var f = -1, d = t, p = u.length, y = !0, h = [], v = h;
    if (l)
      y = !1, d = r;
    else if (p >= o) {
      var b = c ? null : a(u);
      if (b)
        return i(b);
      y = !1, d = n, v = new e();
    } else
      v = c ? [] : h;
    e:
      for (; ++f < p; ) {
        var g = u[f], x = c ? c(g) : g;
        if (g = l || g !== 0 ? g : 0, y && x === x) {
          for (var O = v.length; O--; )
            if (v[O] === x)
              continue e;
          c && v.push(x), h.push(g);
        } else d(v, x, l) || (v !== h && v.push(x), h.push(g));
      }
    return h;
  }
  return Xl = s, Xl;
}
var Zl, mb;
function i$() {
  if (mb) return Zl;
  mb = 1;
  var e = Qt(), t = a$();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return Zl = r, Zl;
}
var o$ = i$();
const gb = /* @__PURE__ */ _e(o$);
function NS(e, t, r) {
  return t === !0 ? gb(e, r) : ue(t) ? gb(e, t) : e;
}
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
var s$ = ["ref"];
function bb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bb(Object(r), !0).forEach(function(n) {
      Ls(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, LS(n.key), n);
  }
}
function c$(e, t, r) {
  return t && xb(e.prototype, t), r && xb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function l$(e, t, r) {
  return t = jo(t), f$(e, RS() ? Reflect.construct(t, r || [], jo(e).constructor) : t.apply(e, r));
}
function f$(e, t) {
  if (t && (Mn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return d$(e);
}
function d$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function RS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (RS = function() {
    return !!e;
  })();
}
function jo(e) {
  return jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jo(e);
}
function p$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xd(e, t);
}
function Xd(e, t) {
  return Xd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xd(e, t);
}
function Ls(e, t, r) {
  return t = LS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LS(e) {
  var t = h$(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function h$(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function v$(e, t) {
  if (e == null) return {};
  var r = y$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function m$(e) {
  return e.value;
}
function g$(e, t) {
  if (/* @__PURE__ */ C.isValidElement(e))
    return /* @__PURE__ */ C.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ C.createElement(e, t);
  t.ref;
  var r = v$(t, s$);
  return /* @__PURE__ */ C.createElement(Yh, r);
}
var wb = 1, Gr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    u$(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = l$(this, t, [].concat(a)), Ls(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return p$(t, e), c$(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, a = this.getBBox();
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > wb || Math.abs(a.height - this.lastBoundingBox.height) > wb) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? tr({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var a = this.props, i = a.layout, o = a.align, s = a.verticalAlign, u = a.margin, c = a.chartWidth, l = a.chartHeight, f, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && i === "vertical") {
          var p = this.getBBoxSnapshot();
          f = {
            left: ((c || 0) - p.width) / 2
          };
        } else
          f = o === "right" ? {
            right: u && u.right || 0
          } : {
            left: u && u.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (s === "middle") {
          var y = this.getBBoxSnapshot();
          d = {
            top: ((l || 0) - y.height) / 2
          };
        } else
          d = s === "bottom" ? {
            bottom: u && u.bottom || 0
          } : {
            top: u && u.top || 0
          };
      return tr(tr({}, f), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.content, o = a.width, s = a.height, u = a.wrapperStyle, c = a.payloadUniqBy, l = a.payload, f = tr(tr({
        position: "absolute",
        width: o || "auto",
        height: s || "auto"
      }, this.getDefaultPosition(u)), u);
      return /* @__PURE__ */ C.createElement("div", {
        className: "recharts-legend-wrapper",
        style: f,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, g$(i, tr(tr({}, this.props), {}, {
        payload: NS(l, c, m$)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, a) {
      var i = tr(tr({}, this.defaultProps), n.props), o = i.layout;
      return o === "vertical" && G(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || a
      } : null;
    }
  }]);
})(jt);
Ls(Gr, "displayName", "Legend");
Ls(Gr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Jl, Ob;
function b$() {
  if (Ob) return Jl;
  Ob = 1;
  var e = Li(), t = Dh(), r = pt(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return Jl = a, Jl;
}
var Ql, Sb;
function qS() {
  if (Sb) return Ql;
  Sb = 1;
  var e = XO(), t = b$();
  function r(n, a, i, o, s) {
    var u = -1, c = n.length;
    for (i || (i = t), s || (s = []); ++u < c; ) {
      var l = n[u];
      a > 0 && i(l) ? a > 1 ? r(l, a - 1, i, o, s) : e(s, l) : o || (s[s.length] = l);
    }
    return s;
  }
  return Ql = r, Ql;
}
var ef, Ab;
function x$() {
  if (Ab) return ef;
  Ab = 1;
  function e(t) {
    return function(r, n, a) {
      for (var i = -1, o = Object(r), s = a(r), u = s.length; u--; ) {
        var c = s[t ? u : ++i];
        if (n(o[c], c, o) === !1)
          break;
      }
      return r;
    };
  }
  return ef = e, ef;
}
var tf, _b;
function w$() {
  if (_b) return tf;
  _b = 1;
  var e = x$(), t = e();
  return tf = t, tf;
}
var rf, Pb;
function BS() {
  if (Pb) return rf;
  Pb = 1;
  var e = w$(), t = $s();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return rf = r, rf;
}
var nf, Tb;
function O$() {
  if (Tb) return nf;
  Tb = 1;
  var e = qi();
  function t(r, n) {
    return function(a, i) {
      if (a == null)
        return a;
      if (!e(a))
        return r(a, i);
      for (var o = a.length, s = n ? o : -1, u = Object(a); (n ? s-- : ++s < o) && i(u[s], s, u) !== !1; )
        ;
      return a;
    };
  }
  return nf = t, nf;
}
var af, Eb;
function Xh() {
  if (Eb) return af;
  Eb = 1;
  var e = BS(), t = O$(), r = t(e);
  return af = r, af;
}
var of, Cb;
function FS() {
  if (Cb) return of;
  Cb = 1;
  var e = Xh(), t = qi();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, u, c) {
      o[++i] = a(s, u, c);
    }), o;
  }
  return of = r, of;
}
var sf, jb;
function S$() {
  if (jb) return sf;
  jb = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return sf = e, sf;
}
var uf, Mb;
function A$() {
  if (Mb) return uf;
  Mb = 1;
  var e = aa();
  function t(r, n) {
    if (r !== n) {
      var a = r !== void 0, i = r === null, o = r === r, s = e(r), u = n !== void 0, c = n === null, l = n === n, f = e(n);
      if (!c && !f && !s && r > n || s && u && l && !c && !f || i && u && l || !a && l || !o)
        return 1;
      if (!i && !s && !f && r < n || f && a && o && !i && !s || c && a && o || !u && o || !l)
        return -1;
    }
    return 0;
  }
  return uf = t, uf;
}
var cf, $b;
function _$() {
  if ($b) return cf;
  $b = 1;
  var e = A$();
  function t(r, n, a) {
    for (var i = -1, o = r.criteria, s = n.criteria, u = o.length, c = a.length; ++i < u; ) {
      var l = e(o[i], s[i]);
      if (l) {
        if (i >= c)
          return l;
        var f = a[i];
        return l * (f == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return cf = t, cf;
}
var lf, Ib;
function P$() {
  if (Ib) return lf;
  Ib = 1;
  var e = Fh(), t = zh(), r = Qt(), n = FS(), a = S$(), i = JO(), o = _$(), s = sa(), u = pt();
  function c(l, f, d) {
    f.length ? f = e(f, function(h) {
      return u(h) ? function(v) {
        return t(v, h.length === 1 ? h[0] : h);
      } : h;
    }) : f = [s];
    var p = -1;
    f = e(f, i(r));
    var y = n(l, function(h, v, b) {
      var g = e(f, function(x) {
        return x(h);
      });
      return { criteria: g, index: ++p, value: h };
    });
    return a(y, function(h, v) {
      return o(h, v, d);
    });
  }
  return lf = c, lf;
}
var ff, kb;
function T$() {
  if (kb) return ff;
  kb = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return ff = e, ff;
}
var df, Db;
function E$() {
  if (Db) return df;
  Db = 1;
  var e = T$(), t = Math.max;
  function r(n, a, i) {
    return a = t(a === void 0 ? n.length - 1 : a, 0), function() {
      for (var o = arguments, s = -1, u = t(o.length - a, 0), c = Array(u); ++s < u; )
        c[s] = o[a + s];
      s = -1;
      for (var l = Array(a + 1); ++s < a; )
        l[s] = o[s];
      return l[a] = i(c), e(n, this, l);
    };
  }
  return df = r, df;
}
var pf, Nb;
function C$() {
  if (Nb) return pf;
  Nb = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return pf = e, pf;
}
var hf, Rb;
function zS() {
  if (Rb) return hf;
  Rb = 1;
  var e = on(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return hf = t, hf;
}
var vf, Lb;
function j$() {
  if (Lb) return vf;
  Lb = 1;
  var e = C$(), t = zS(), r = sa(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return vf = n, vf;
}
var yf, qb;
function M$() {
  if (qb) return yf;
  qb = 1;
  var e = 800, t = 16, r = Date.now;
  function n(a) {
    var i = 0, o = 0;
    return function() {
      var s = r(), u = t - (s - o);
      if (o = s, u > 0) {
        if (++i >= e)
          return arguments[0];
      } else
        i = 0;
      return a.apply(void 0, arguments);
    };
  }
  return yf = n, yf;
}
var mf, Bb;
function $$() {
  if (Bb) return mf;
  Bb = 1;
  var e = j$(), t = M$(), r = t(e);
  return mf = r, mf;
}
var gf, Fb;
function I$() {
  if (Fb) return gf;
  Fb = 1;
  var e = sa(), t = E$(), r = $$();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return gf = n, gf;
}
var bf, zb;
function qs() {
  if (zb) return bf;
  zb = 1;
  var e = jh(), t = qi(), r = Nh(), n = Tr();
  function a(i, o, s) {
    if (!n(s))
      return !1;
    var u = typeof o;
    return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e(s[o], i) : !1;
  }
  return bf = a, bf;
}
var xf, Wb;
function k$() {
  if (Wb) return xf;
  Wb = 1;
  var e = qS(), t = P$(), r = I$(), n = qs(), a = r(function(i, o) {
    if (i == null)
      return [];
    var s = o.length;
    return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return xf = a, xf;
}
var D$ = k$();
const Zh = /* @__PURE__ */ _e(D$);
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function Zd() {
  return Zd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zd.apply(this, arguments);
}
function N$(e, t) {
  return B$(e) || q$(e, t) || L$(e, t) || R$();
}
function R$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L$(e, t) {
  if (e) {
    if (typeof e == "string") return Ub(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ub(e, t);
  }
}
function Ub(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function q$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function B$(e) {
  if (Array.isArray(e)) return e;
}
function Hb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hb(Object(r), !0).forEach(function(n) {
      F$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F$(e, t, r) {
  return t = z$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z$(e) {
  var t = W$(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function W$(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function U$(e) {
  return Array.isArray(e) && Ge(e[0]) && Ge(e[1]) ? e.join(" ~ ") : e;
}
var H$ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, l = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, g = b === void 0 ? !1 : b, x = function() {
    if (l && l.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, M = (d ? Zh(l, d) : l).map(function(j, I) {
        if (j.type === "none")
          return null;
        var D = wf({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, s), R = j.formatter || f || U$, L = j.value, z = j.name, N = L, B = z;
        if (R && N != null && B != null) {
          var q = R(L, z, j, I, l);
          if (Array.isArray(q)) {
            var H = N$(q, 2);
            N = H[0], B = H[1];
          } else
            N = q;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ C.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: D
          }, Ge(B) ? /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, B) : null, Ge(B) ? /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, N), /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, j.unit || ""))
        );
      });
      return /* @__PURE__ */ C.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: $
      }, M);
    }
    return null;
  }, O = wf({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), m = wf({
    margin: 0
  }, c), w = !le(h), A = w ? h : "", _ = de("recharts-default-tooltip", p), P = de("recharts-tooltip-label", y);
  w && v && l !== void 0 && l !== null && (A = v(h, l));
  var k = g ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ C.createElement("div", Zd({
    className: _,
    style: O
  }, k), /* @__PURE__ */ C.createElement("p", {
    className: P,
    style: m
  }, /* @__PURE__ */ C.isValidElement(A) ? A : "".concat(A)), x());
};
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function no(e, t, r) {
  return t = K$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function K$(e) {
  var t = V$(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function V$(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wa = "recharts-tooltip-wrapper", G$ = {
  visibility: "hidden"
};
function Y$(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return de(wa, no(no(no(no({}, "".concat(wa, "-right"), G(r) && t && G(t.x) && r >= t.x), "".concat(wa, "-left"), G(r) && t && G(t.x) && r < t.x), "".concat(wa, "-bottom"), G(n) && t && G(t.y) && n >= t.y), "".concat(wa, "-top"), G(n) && t && G(t.y) && n < t.y));
}
function Kb(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, a = e.offsetTopLeft, i = e.position, o = e.reverseDirection, s = e.tooltipDimension, u = e.viewBox, c = e.viewBoxDimension;
  if (i && G(i[n]))
    return i[n];
  var l = r[n] - s - a, f = r[n] + a;
  if (t[n])
    return o[n] ? l : f;
  if (o[n]) {
    var d = l, p = u[n];
    return d < p ? Math.max(f, u[n]) : Math.max(l, u[n]);
  }
  var y = f + s, h = u[n] + c;
  return y > h ? Math.max(l, u[n]) : Math.max(f, u[n]);
}
function X$(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function Z$(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, u = e.viewBox, c, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Kb({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: u,
    viewBoxDimension: u.width
  }), f = Kb({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: u,
    viewBoxDimension: u.height
  }), c = X$({
    translateX: l,
    translateY: f,
    useTranslate3d: s
  })) : c = G$, {
    cssProperties: c,
    cssClasses: Y$({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function $n(e) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
function Vb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vb(Object(r), !0).forEach(function(n) {
      Qd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, US(n.key), n);
  }
}
function eI(e, t, r) {
  return t && Q$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tI(e, t, r) {
  return t = Mo(t), rI(e, WS() ? Reflect.construct(t, r || [], Mo(e).constructor) : t.apply(e, r));
}
function rI(e, t) {
  if (t && ($n(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nI(e);
}
function nI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function WS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (WS = function() {
    return !!e;
  })();
}
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function aI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jd(e, t);
}
function Jd(e, t) {
  return Jd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Jd(e, t);
}
function Qd(e, t, r) {
  return t = US(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function US(e) {
  var t = iI(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function iI(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Yb = 1, oI = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    J$(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = tI(this, t, [].concat(a)), Qd(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Qd(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var s, u, c, l;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (s = (u = r.props.coordinate) === null || u === void 0 ? void 0 : u.x) !== null && s !== void 0 ? s : 0,
            y: (c = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return aI(t, e), eI(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Yb || Math.abs(n.height - this.state.lastBoundingBox.height) > Yb) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, a;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.children, l = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, y = a.position, h = a.reverseDirection, v = a.useTranslate3d, b = a.viewBox, g = a.wrapperStyle, x = Z$({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: p,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), O = x.cssClasses, m = x.cssProperties, w = Gb(Gb({
        transition: d && i ? "transform ".concat(s, "ms ").concat(u) : void 0
      }, m), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && i && f ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, g);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ C.createElement("div", {
          tabIndex: -1,
          className: O,
          style: w,
          ref: function(_) {
            n.wrapperNode = _;
          }
        }, c)
      );
    }
  }]);
})(jt), sI = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Er = {
  isSsr: sI()
};
function In(e) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e);
}
function Xb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xb(Object(r), !0).forEach(function(n) {
      Jh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, KS(n.key), n);
  }
}
function lI(e, t, r) {
  return t && cI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fI(e, t, r) {
  return t = $o(t), dI(e, HS() ? Reflect.construct(t, r || [], $o(e).constructor) : t.apply(e, r));
}
function dI(e, t) {
  if (t && (In(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pI(e);
}
function pI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function HS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (HS = function() {
    return !!e;
  })();
}
function $o(e) {
  return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $o(e);
}
function hI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ep(e, t);
}
function ep(e, t) {
  return ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ep(e, t);
}
function Jh(e, t, r) {
  return t = KS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KS(e) {
  var t = vI(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function vI(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function yI(e) {
  return e.dataKey;
}
function mI(e, t) {
  return /* @__PURE__ */ C.isValidElement(e) ? /* @__PURE__ */ C.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ C.createElement(e, t) : /* @__PURE__ */ C.createElement(H$, t);
}
var Ut = /* @__PURE__ */ (function(e) {
  function t() {
    return uI(this, t), fI(this, t, arguments);
  }
  return hI(t, e), lI(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.content, l = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, y = a.payload, h = a.payloadUniqBy, v = a.position, b = a.reverseDirection, g = a.useTranslate3d, x = a.viewBox, O = a.wrapperStyle, m = y ?? [];
      f && m.length && (m = NS(y.filter(function(A) {
        return A.value != null && (A.hide !== !0 || n.props.includeHidden);
      }), h, yI));
      var w = m.length > 0;
      return /* @__PURE__ */ C.createElement(oI, {
        allowEscapeViewBox: o,
        animationDuration: s,
        animationEasing: u,
        isAnimationActive: d,
        active: i,
        coordinate: l,
        hasPayload: w,
        offset: p,
        position: v,
        reverseDirection: b,
        useTranslate3d: g,
        viewBox: x,
        wrapperStyle: O
      }, mI(c, Zb(Zb({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(jt);
Jh(Ut, "displayName", "Tooltip");
Jh(Ut, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Er.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Of, Jb;
function gI() {
  if (Jb) return Of;
  Jb = 1;
  var e = Jt(), t = function() {
    return e.Date.now();
  };
  return Of = t, Of;
}
var Sf, Qb;
function bI() {
  if (Qb) return Sf;
  Qb = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Sf = t, Sf;
}
var Af, e0;
function xI() {
  if (e0) return Af;
  e0 = 1;
  var e = bI(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Af = r, Af;
}
var _f, t0;
function VS() {
  if (t0) return _f;
  t0 = 1;
  var e = xI(), t = Tr(), r = aa(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
  function u(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var l = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(l) ? l + "" : l;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var f = i.test(c);
    return f || o.test(c) ? s(c.slice(2), f ? 2 : 8) : a.test(c) ? n : +c;
  }
  return _f = u, _f;
}
var Pf, r0;
function wI() {
  if (r0) return Pf;
  r0 = 1;
  var e = Tr(), t = gI(), r = VS(), n = "Expected a function", a = Math.max, i = Math.min;
  function o(s, u, c) {
    var l, f, d, p, y, h, v = 0, b = !1, g = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    u = r(u) || 0, e(c) && (b = !!c.leading, g = "maxWait" in c, d = g ? a(r(c.maxWait) || 0, u) : d, x = "trailing" in c ? !!c.trailing : x);
    function O(M) {
      var j = l, I = f;
      return l = f = void 0, v = M, p = s.apply(I, j), p;
    }
    function m(M) {
      return v = M, y = setTimeout(_, u), b ? O(M) : p;
    }
    function w(M) {
      var j = M - h, I = M - v, D = u - j;
      return g ? i(D, d - I) : D;
    }
    function A(M) {
      var j = M - h, I = M - v;
      return h === void 0 || j >= u || j < 0 || g && I >= d;
    }
    function _() {
      var M = t();
      if (A(M))
        return P(M);
      y = setTimeout(_, w(M));
    }
    function P(M) {
      return y = void 0, x && l ? O(M) : (l = f = void 0, p);
    }
    function k() {
      y !== void 0 && clearTimeout(y), v = 0, l = h = f = y = void 0;
    }
    function T() {
      return y === void 0 ? p : P(t());
    }
    function $() {
      var M = t(), j = A(M);
      if (l = arguments, f = this, h = M, j) {
        if (y === void 0)
          return m(h);
        if (g)
          return clearTimeout(y), y = setTimeout(_, u), O(h);
      }
      return y === void 0 && (y = setTimeout(_, u)), p;
    }
    return $.cancel = k, $.flush = T, $;
  }
  return Pf = o, Pf;
}
var Tf, n0;
function OI() {
  if (n0) return Tf;
  n0 = 1;
  var e = wI(), t = Tr(), r = "Expected a function";
  function n(a, i, o) {
    var s = !0, u = !0;
    if (typeof a != "function")
      throw new TypeError(r);
    return t(o) && (s = "leading" in o ? !!o.leading : s, u = "trailing" in o ? !!o.trailing : u), e(a, i, {
      leading: s,
      maxWait: i,
      trailing: u
    });
  }
  return Tf = n, Tf;
}
var SI = OI();
const GS = /* @__PURE__ */ _e(SI);
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function a0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ao(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? a0(Object(r), !0).forEach(function(n) {
      AI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AI(e, t, r) {
  return t = _I(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _I(e) {
  var t = PI(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function PI(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function TI(e, t) {
  return MI(e) || jI(e, t) || CI(e, t) || EI();
}
function EI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CI(e, t) {
  if (e) {
    if (typeof e == "string") return i0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i0(e, t);
  }
}
function i0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function MI(e) {
  if (Array.isArray(e)) return e;
}
var $I = /* @__PURE__ */ ze(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, l = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, p = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, g = e.onResize, x = e.style, O = x === void 0 ? {} : x, m = Me(null), w = Me();
  w.current = g, AT(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var A = he({
    containerWidth: a.width,
    containerHeight: a.height
  }), _ = TI(A, 2), P = _[0], k = _[1], T = tt(function(M, j) {
    k(function(I) {
      var D = Math.round(M), R = Math.round(j);
      return I.containerWidth === D && I.containerHeight === R ? I : {
        containerWidth: D,
        containerHeight: R
      };
    });
  }, []);
  Le(function() {
    var M = function(z) {
      var N, B = z[0].contentRect, q = B.width, H = B.height;
      T(q, H), (N = w.current) === null || N === void 0 || N.call(w, q, H);
    };
    h > 0 && (M = GS(M, h, {
      trailing: !0,
      leading: !1
    }));
    var j = new ResizeObserver(M), I = m.current.getBoundingClientRect(), D = I.width, R = I.height;
    return T(D, R), j.observe(m.current), function() {
      j.disconnect();
    };
  }, [T, h]);
  var $ = He(function() {
    var M = P.containerWidth, j = P.containerHeight;
    if (M < 0 || j < 0)
      return null;
    Lt(Fr(o) || Fr(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), Lt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = Fr(o) ? M : o, D = Fr(u) ? j : u;
    r && r > 0 && (I ? D = I / r : D && (I = D * r), d && D > d && (D = d)), Lt(I > 0 || D > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, D, o, u, l, f, r);
    var R = !Array.isArray(p) && or(p.type).endsWith("Chart");
    return C.Children.map(p, function(L) {
      return /* @__PURE__ */ C.isValidElement(L) ? /* @__PURE__ */ Ue(L, ao({
        width: I,
        height: D
      }, R ? {
        style: ao({
          height: "100%",
          width: "100%",
          maxHeight: D,
          maxWidth: I
        }, L.props.style)
      } : {})) : L;
    });
  }, [r, p, u, d, f, l, P, o]);
  return /* @__PURE__ */ C.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: de("recharts-responsive-container", b),
    style: ao(ao({}, O), {}, {
      width: o,
      height: u,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, $);
}), Bs = function(t) {
  return null;
};
Bs.displayName = "Cell";
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
function o0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o0(Object(r), !0).forEach(function(n) {
      II(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function II(e, t, r) {
  return t = kI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kI(e) {
  var t = DI(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function DI(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hn = {
  widthCache: {},
  cacheCount: 0
}, NI = 2e3, RI = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, s0 = "recharts_measurement_span";
function LI(e) {
  var t = tp({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var La = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Er.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = LI(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (hn.widthCache[a])
    return hn.widthCache[a];
  try {
    var i = document.getElementById(s0);
    i || (i = document.createElement("span"), i.setAttribute("id", s0), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = tp(tp({}, RI), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return hn.widthCache[a] = u, ++hn.cacheCount > NI && (hn.cacheCount = 0, hn.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, qI = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
function Io(e, t) {
  return WI(e) || zI(e, t) || FI(e, t) || BI();
}
function BI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FI(e, t) {
  if (e) {
    if (typeof e == "string") return u0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u0(e, t);
  }
}
function u0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function WI(e) {
  if (Array.isArray(e)) return e;
}
function UI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, KI(n.key), n);
  }
}
function HI(e, t, r) {
  return t && c0(e.prototype, t), r && c0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function KI(e) {
  var t = VI(e, "string");
  return ai(t) == "symbol" ? t : t + "";
}
function VI(e, t) {
  if (ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var l0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, f0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, GI = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, YI = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, YS = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, XI = Object.keys(YS), xn = "NaN";
function ZI(e, t) {
  return e * YS[t];
}
var io = /* @__PURE__ */ (function() {
  function e(t, r) {
    UI(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !GI.test(r) && (this.num = NaN, this.unit = ""), XI.includes(r) && (this.num = ZI(t, r), this.unit = "px");
  }
  return HI(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, a = (n = YI.exec(r)) !== null && n !== void 0 ? n : [], i = Io(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
})();
function XS(e) {
  if (e.includes(xn))
    return xn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = l0.exec(t)) !== null && r !== void 0 ? r : [], a = Io(n, 4), i = a[1], o = a[2], s = a[3], u = io.parse(i ?? ""), c = io.parse(s ?? ""), l = o === "*" ? u.multiply(c) : u.divide(c);
    if (l.isNaN())
      return xn;
    t = t.replace(l0, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = f0.exec(t)) !== null && f !== void 0 ? f : [], p = Io(d, 4), y = p[1], h = p[2], v = p[3], b = io.parse(y ?? ""), g = io.parse(v ?? ""), x = h === "+" ? b.add(g) : b.subtract(g);
    if (x.isNaN())
      return xn;
    t = t.replace(f0, x.toString());
  }
  return t;
}
var d0 = /\(([^()]*)\)/;
function JI(e) {
  for (var t = e; t.includes("("); ) {
    var r = d0.exec(t), n = Io(r, 2), a = n[1];
    t = t.replace(d0, XS(a));
  }
  return t;
}
function QI(e) {
  var t = e.replace(/\s+/g, "");
  return t = JI(t), t = XS(t), t;
}
function ek(e) {
  try {
    return QI(e);
  } catch {
    return xn;
  }
}
function Ef(e) {
  var t = ek(e.slice(5, -1));
  return t === xn ? "" : t;
}
var tk = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], rk = ["dx", "dy", "angle", "className", "breakAll"];
function rp() {
  return rp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rp.apply(this, arguments);
}
function p0(e, t) {
  if (e == null) return {};
  var r = nk(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nk(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function h0(e, t) {
  return sk(e) || ok(e, t) || ik(e, t) || ak();
}
function ak() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ik(e, t) {
  if (e) {
    if (typeof e == "string") return v0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v0(e, t);
  }
}
function v0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ok(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        u = !1;
      } else for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function sk(e) {
  if (Array.isArray(e)) return e;
}
var ZS = /[ \f\n\r\t\v\u2028\u2029]+/, JS = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    le(r) || (n ? i = r.toString().split("") : i = r.toString().split(ZS));
    var o = i.map(function(u) {
      return {
        word: u,
        width: La(u, a).width
      };
    }), s = n ? 0 : La(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, uk = function(t, r, n, a, i) {
  var o = t.maxLines, s = t.children, u = t.style, c = t.breakAll, l = G(o), f = s, d = function() {
    var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return I.reduce(function(D, R) {
      var L = R.word, z = R.width, N = D[D.length - 1];
      if (N && (a == null || i || N.width + z + n < Number(a)))
        N.words.push(L), N.width += z + n;
      else {
        var B = {
          words: [L],
          width: z
        };
        D.push(B);
      }
      return D;
    }, []);
  }, p = d(r), y = function(I) {
    return I.reduce(function(D, R) {
      return D.width > R.width ? D : R;
    });
  };
  if (!l)
    return p;
  for (var h = "…", v = function(I) {
    var D = f.slice(0, I), R = JS({
      breakAll: c,
      style: u,
      children: D + h
    }).wordsWithComputedWidth, L = d(R), z = L.length > o || y(L).width > Number(a);
    return [z, L];
  }, b = 0, g = f.length - 1, x = 0, O; b <= g && x <= f.length - 1; ) {
    var m = Math.floor((b + g) / 2), w = m - 1, A = v(w), _ = h0(A, 2), P = _[0], k = _[1], T = v(m), $ = h0(T, 1), M = $[0];
    if (!P && !M && (b = m + 1), P && M && (g = m - 1), !P && M) {
      O = k;
      break;
    }
    x++;
  }
  return O || p;
}, y0 = function(t) {
  var r = le(t) ? [] : t.toString().split(ZS);
  return [{
    words: r
  }];
}, ck = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Er.isSsr) {
    var u, c, l = JS({
      breakAll: o,
      children: a,
      style: i
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      u = f, c = d;
    } else
      return y0(a);
    return uk({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, u, c, r, n);
  }
  return y0(a);
}, m0 = "#808080", _r = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, p = d === void 0 ? "start" : d, y = t.verticalAnchor, h = y === void 0 ? "end" : y, v = t.fill, b = v === void 0 ? m0 : v, g = p0(t, tk), x = He(function() {
    return ck({
      breakAll: g.breakAll,
      children: g.children,
      maxLines: g.maxLines,
      scaleToFit: f,
      style: g.style,
      width: g.width
    });
  }, [g.breakAll, g.children, g.maxLines, f, g.style, g.width]), O = g.dx, m = g.dy, w = g.angle, A = g.className, _ = g.breakAll, P = p0(g, rk);
  if (!Ge(n) || !Ge(i))
    return null;
  var k = n + (G(O) ? O : 0), T = i + (G(m) ? m : 0), $;
  switch (h) {
    case "start":
      $ = Ef("calc(".concat(c, ")"));
      break;
    case "middle":
      $ = Ef("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      $ = Ef("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var M = [];
  if (f) {
    var j = x[0].width, I = g.width;
    M.push("scale(".concat((G(I) ? I / j : 1) / j, ")"));
  }
  return w && M.push("rotate(".concat(w, ", ").concat(k, ", ").concat(T, ")")), M.length && (P.transform = M.join(" ")), /* @__PURE__ */ C.createElement("text", rp({}, ie(P, !0), {
    x: k,
    y: T,
    className: de("recharts-text", A),
    textAnchor: p,
    fill: b.includes("url") ? m0 : b
  }), x.map(function(D, R) {
    var L = D.words.join(_ ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ C.createElement("tspan", {
        x: k,
        dy: R === 0 ? $ : s,
        key: "".concat(L, "-").concat(R)
      }, L)
    );
  }));
};
function Sr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function lk(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Qh(e) {
  let t, r, n;
  e.length !== 2 ? (t = Sr, r = (s, u) => Sr(e(s), u), n = (s, u) => e(s) - u) : (t = e === Sr || e === lk ? e : fk, r = e, n = e);
  function a(s, u, c = 0, l = s.length) {
    if (c < l) {
      if (t(u, u) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(s[f], u) < 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function i(s, u, c = 0, l = s.length) {
    if (c < l) {
      if (t(u, u) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(s[f], u) <= 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function o(s, u, c = 0, l = s.length) {
    const f = a(s, u, c, l - 1);
    return f > c && n(s[f - 1], u) > -n(s[f], u) ? f - 1 : f;
  }
  return { left: a, center: o, right: i };
}
function fk() {
  return 0;
}
function QS(e) {
  return e === null ? NaN : +e;
}
function* dk(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const pk = Qh(Sr), Fi = pk.right;
Qh(QS).center;
class g0 extends Map {
  constructor(t, r = yk) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(b0(this, t));
  }
  has(t) {
    return super.has(b0(this, t));
  }
  set(t, r) {
    return super.set(hk(this, t), r);
  }
  delete(t) {
    return super.delete(vk(this, t));
  }
}
function b0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function hk({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function vk({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function yk(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function mk(e = Sr) {
  if (e === Sr) return eA;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function eA(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const gk = Math.sqrt(50), bk = Math.sqrt(10), xk = Math.sqrt(2);
function ko(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= gk ? 10 : i >= bk ? 5 : i >= xk ? 2 : 1;
  let s, u, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, s = Math.round(e * c), u = Math.round(t * c), s / c < e && ++s, u / c > t && --u, c = -c) : (c = Math.pow(10, a) * o, s = Math.round(e / c), u = Math.round(t / c), s * c < e && ++s, u * c > t && --u), u < s && 0.5 <= r && r < 2 ? ko(e, t, r * 2) : [s, u, c];
}
function np(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? ko(t, e, r) : ko(e, t, r);
  if (!(i >= a)) return [];
  const s = i - a + 1, u = new Array(s);
  if (n)
    if (o < 0) for (let c = 0; c < s; ++c) u[c] = (i - c) / -o;
    else for (let c = 0; c < s; ++c) u[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < s; ++c) u[c] = (a + c) / -o;
  else for (let c = 0; c < s; ++c) u[c] = (a + c) * o;
  return u;
}
function ap(e, t, r) {
  return t = +t, e = +e, r = +r, ko(e, t, r)[2];
}
function ip(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? ap(t, e, r) : ap(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function x0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function w0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function tA(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? eA : mk(a); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, l = Math.log(u), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), y = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      tA(e, t, p, y, a);
    }
    const i = e[t];
    let o = r, s = n;
    for (Oa(e, r, t), a(e[n], i) > 0 && Oa(e, r, n); o < s; ) {
      for (Oa(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? Oa(e, r, s) : (++s, Oa(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function Oa(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function wk(e, t, r) {
  if (e = Float64Array.from(dk(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return w0(e);
    if (t >= 1) return x0(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = x0(tA(e, i).subarray(0, i + 1)), s = w0(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function Ok(e, t, r = QS) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function Sk(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function Mt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function pr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const op = /* @__PURE__ */ Symbol("implicit");
function ev() {
  var e = new g0(), t = [], r = [], n = op;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== op) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new g0();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return ev(t, r).unknown(n);
  }, Mt.apply(a, arguments), a;
}
function ii() {
  var e = ev().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, u = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, y = p ? a : n, h = p ? n : a;
    i = (h - y) / Math.max(1, d - u + c * 2), s && (i = Math.floor(i)), y += (h - y - i * (d - u)) * l, o = i * (1 - u), s && (y = Math.round(y), o = Math.round(o));
    var v = Sk(d).map(function(b) {
      return y + i * b;
    });
    return r(p ? v.reverse() : v);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, a] = d, n = +n, a = +a, f()) : [n, a];
  }, e.rangeRound = function(d) {
    return [n, a] = d, n = +n, a = +a, s = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (s = !!d, f()) : s;
  }, e.padding = function(d) {
    return arguments.length ? (u = Math.min(1, c = +d), f()) : u;
  }, e.paddingInner = function(d) {
    return arguments.length ? (u = Math.min(1, d), f()) : u;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return ii(t(), [n, a]).round(s).paddingInner(u).paddingOuter(c).align(l);
  }, Mt.apply(f(), arguments);
}
function rA(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return rA(t());
  }, e;
}
function qa() {
  return rA(ii.apply(null, arguments).paddingInner(1));
}
function tv(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function nA(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function zi() {
}
var oi = 0.7, Do = 1 / oi, Pn = "\\s*([+-]?\\d+)\\s*", si = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ak = /^#([0-9a-f]{3,8})$/, _k = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), Pk = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), Tk = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${si}\\)$`), Ek = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${si}\\)$`), Ck = new RegExp(`^hsl\\(${si},${Yt},${Yt}\\)$`), jk = new RegExp(`^hsla\\(${si},${Yt},${Yt},${si}\\)$`), O0 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
tv(zi, ui, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: S0,
  // Deprecated! Use color.formatHex.
  formatHex: S0,
  formatHex8: Mk,
  formatHsl: $k,
  formatRgb: A0,
  toString: A0
});
function S0() {
  return this.rgb().formatHex();
}
function Mk() {
  return this.rgb().formatHex8();
}
function $k() {
  return aA(this).formatHsl();
}
function A0() {
  return this.rgb().formatRgb();
}
function ui(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Ak.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? _0(t) : r === 3 ? new ct(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? oo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? oo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = _k.exec(e)) ? new ct(t[1], t[2], t[3], 1) : (t = Pk.exec(e)) ? new ct(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Tk.exec(e)) ? oo(t[1], t[2], t[3], t[4]) : (t = Ek.exec(e)) ? oo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ck.exec(e)) ? E0(t[1], t[2] / 100, t[3] / 100, 1) : (t = jk.exec(e)) ? E0(t[1], t[2] / 100, t[3] / 100, t[4]) : O0.hasOwnProperty(e) ? _0(O0[e]) : e === "transparent" ? new ct(NaN, NaN, NaN, 0) : null;
}
function _0(e) {
  return new ct(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function oo(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new ct(e, t, r, n);
}
function Ik(e) {
  return e instanceof zi || (e = ui(e)), e ? (e = e.rgb(), new ct(e.r, e.g, e.b, e.opacity)) : new ct();
}
function sp(e, t, r, n) {
  return arguments.length === 1 ? Ik(e) : new ct(e, t, r, n ?? 1);
}
function ct(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
tv(ct, sp, nA(zi, {
  brighter(e) {
    return e = e == null ? Do : Math.pow(Do, e), new ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ct(Yr(this.r), Yr(this.g), Yr(this.b), No(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: P0,
  // Deprecated! Use color.formatHex.
  formatHex: P0,
  formatHex8: kk,
  formatRgb: T0,
  toString: T0
}));
function P0() {
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}`;
}
function kk() {
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function T0() {
  const e = No(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Yr(this.r)}, ${Yr(this.g)}, ${Yr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function No(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Yr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zr(e) {
  return e = Yr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function E0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Dt(e, t, r, n);
}
function aA(e) {
  if (e instanceof Dt) return new Dt(e.h, e.s, e.l, e.opacity);
  if (e instanceof zi || (e = ui(e)), !e) return new Dt();
  if (e instanceof Dt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, u = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? i + a : 2 - i - a, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new Dt(o, s, u, e.opacity);
}
function Dk(e, t, r, n) {
  return arguments.length === 1 ? aA(e) : new Dt(e, t, r, n ?? 1);
}
function Dt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
tv(Dt, Dk, nA(zi, {
  brighter(e) {
    return e = e == null ? Do : Math.pow(Do, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? oi : Math.pow(oi, e), new Dt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new ct(
      Cf(e >= 240 ? e - 240 : e + 120, a, n),
      Cf(e, a, n),
      Cf(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new Dt(C0(this.h), so(this.s), so(this.l), No(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = No(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${C0(this.h)}, ${so(this.s) * 100}%, ${so(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function C0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function so(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Cf(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const rv = (e) => () => e;
function Nk(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Rk(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function Lk(e) {
  return (e = +e) == 1 ? iA : function(t, r) {
    return r - t ? Rk(t, r, e) : rv(isNaN(t) ? r : t);
  };
}
function iA(e, t) {
  var r = t - e;
  return r ? Nk(e, r) : rv(isNaN(e) ? t : e);
}
const j0 = (function e(t) {
  var r = Lk(t);
  function n(a, i) {
    var o = r((a = sp(a)).r, (i = sp(i)).r), s = r(a.g, i.g), u = r(a.b, i.b), c = iA(a.opacity, i.opacity);
    return function(l) {
      return a.r = o(l), a.g = s(l), a.b = u(l), a.opacity = c(l), a + "";
    };
  }
  return n.gamma = e, n;
})(1);
function qk(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function Bk(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Fk(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = ua(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function zk(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Ro(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Wk(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = ua(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var up = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, jf = new RegExp(up.source, "g");
function Uk(e) {
  return function() {
    return e;
  };
}
function Hk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Kk(e, t) {
  var r = up.lastIndex = jf.lastIndex = 0, n, a, i, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = up.exec(e)) && (a = jf.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, u.push({ i: o, x: Ro(n, a) })), r = jf.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? u[0] ? Hk(u[0].x) : Uk(t) : (t = u.length, function(c) {
    for (var l = 0, f; l < t; ++l) s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function ua(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? rv(t) : (r === "number" ? Ro : r === "string" ? (n = ui(t)) ? (t = n, j0) : Kk : t instanceof ui ? j0 : t instanceof Date ? zk : Bk(t) ? qk : Array.isArray(t) ? Fk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Wk : Ro)(e, t);
}
function nv(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Vk(e, t) {
  t === void 0 && (t = e, e = ua);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function Gk(e) {
  return function() {
    return e;
  };
}
function Lo(e) {
  return +e;
}
var M0 = [0, 1];
function st(e) {
  return e;
}
function cp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Gk(isNaN(t) ? NaN : 0.5);
}
function Yk(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function Xk(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = cp(a, n), i = r(o, i)) : (n = cp(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function Zk(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = cp(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = Fi(e, s, 1, n) - 1;
    return i[u](a[u](s));
  };
}
function Wi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Fs() {
  var e = M0, t = M0, r = ua, n, a, i, o = st, s, u, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== st && (o = Yk(e[0], e[d - 1])), s = d > 2 ? Zk : Xk, u = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (u || (u = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((c || (c = s(t, e.map(n), Ro)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Lo), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = nv, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : st, l()) : o !== st;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, function(d, p) {
    return n = d, a = p, l();
  };
}
function av() {
  return Fs()(st, st);
}
function Jk(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function qo(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function kn(e) {
  return e = qo(Math.abs(e)), e ? e[1] : NaN;
}
function Qk(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], u = 0; a > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), i.push(r.substring(a -= s, a + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function eD(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var tD = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ci(e) {
  if (!(t = tD.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new iv({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
ci.prototype = iv.prototype;
function iv(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
iv.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function rD(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = a = r;
        break;
      case "0":
        n === 0 && (n = r), a = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}
var oA;
function nD(e, t) {
  var r = qo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (oA = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + qo(e, Math.max(0, t + i - 1))[0];
}
function $0(e, t) {
  var r = qo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const I0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Jk,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => $0(e * 100, t),
  r: $0,
  s: nD,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function k0(e) {
  return e;
}
var D0 = Array.prototype.map, N0 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function aD(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? k0 : Qk(D0.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? k0 : eD(D0.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = ci(f);
    var d = f.fill, p = f.align, y = f.sign, h = f.symbol, v = f.zero, b = f.width, g = f.comma, x = f.precision, O = f.trim, m = f.type;
    m === "n" ? (g = !0, m = "g") : I0[m] || (x === void 0 && (x = 12), O = !0, m = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var w = h === "$" ? r : h === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", A = h === "$" ? n : /[%p]/.test(m) ? o : "", _ = I0[m], P = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function k(T) {
      var $ = w, M = A, j, I, D;
      if (m === "c")
        M = _(T) + M, T = "";
      else {
        T = +T;
        var R = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? u : _(Math.abs(T), x), O && (T = rD(T)), R && +T == 0 && y !== "+" && (R = !1), $ = (R ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + $, M = (m === "s" ? N0[8 + oA / 3] : "") + M + (R && y === "(" ? ")" : ""), P) {
          for (j = -1, I = T.length; ++j < I; )
            if (D = T.charCodeAt(j), 48 > D || D > 57) {
              M = (D === 46 ? a + T.slice(j + 1) : T.slice(j)) + M, T = T.slice(0, j);
              break;
            }
        }
      }
      g && !v && (T = t(T, 1 / 0));
      var L = $.length + T.length + M.length, z = L < b ? new Array(b - L + 1).join(d) : "";
      switch (g && v && (T = t(z + T, z.length ? b - M.length : 1 / 0), z = ""), p) {
        case "<":
          T = $ + T + M + z;
          break;
        case "=":
          T = $ + z + T + M;
          break;
        case "^":
          T = z.slice(0, L = z.length >> 1) + $ + T + M + z.slice(L);
          break;
        default:
          T = z + $ + T + M;
          break;
      }
      return i(T);
    }
    return k.toString = function() {
      return f + "";
    }, k;
  }
  function l(f, d) {
    var p = c((f = ci(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(kn(d) / 3))) * 3, h = Math.pow(10, -y), v = N0[8 + y / 3];
    return function(b) {
      return p(h * b) + v;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var uo, ov, sA;
iD({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function iD(e) {
  return uo = aD(e), ov = uo.format, sA = uo.formatPrefix, uo;
}
function oD(e) {
  return Math.max(0, -kn(Math.abs(e)));
}
function sD(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(kn(t) / 3))) * 3 - kn(Math.abs(e)));
}
function uD(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, kn(t) - kn(e)) + 1;
}
function uA(e, t, r, n) {
  var a = ip(e, t, r), i;
  switch (n = ci(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = sD(a, o)) && (n.precision = i), sA(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = uD(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = oD(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return ov(n);
}
function Cr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return np(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return uA(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], s = n[i], u, c, l = 10;
    for (s < o && (c = o, o = s, s = c, c = a, a = i, i = c); l-- > 0; ) {
      if (c = ap(o, s, r), c === u)
        return n[a] = o, n[i] = s, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, s = Math.ceil(s / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, s = Math.floor(s * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function Bo() {
  var e = av();
  return e.copy = function() {
    return Wi(e, Bo());
  }, Mt.apply(e, arguments), Cr(e);
}
function cA(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Lo), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return cA(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Lo) : [0, 1], Cr(r);
}
function lA(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function R0(e) {
  return Math.log(e);
}
function L0(e) {
  return Math.exp(e);
}
function cD(e) {
  return -Math.log(-e);
}
function lD(e) {
  return -Math.exp(-e);
}
function fD(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function dD(e) {
  return e === 10 ? fD : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function pD(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function q0(e) {
  return (t, r) => -e(-t, r);
}
function sv(e) {
  const t = e(R0, L0), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = pD(n), i = dD(n), r()[0] < 0 ? (a = q0(a), i = q0(i), e(cD, lD)) : e(R0, L0), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, o()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), o()) : r();
  }, t.ticks = (s) => {
    const u = r();
    let c = u[0], l = u[u.length - 1];
    const f = l < c;
    f && ([c, l] = [l, c]);
    let d = a(c), p = a(l), y, h;
    const v = s == null ? 10 : +s;
    let b = [];
    if (!(n % 1) && p - d < v) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (y = 1; y < n; ++y)
            if (h = d < 0 ? y / i(-d) : y * i(d), !(h < c)) {
              if (h > l) break;
              b.push(h);
            }
      } else for (; d <= p; ++d)
        for (y = n - 1; y >= 1; --y)
          if (h = d > 0 ? y / i(-d) : y * i(d), !(h < c)) {
            if (h > l) break;
            b.push(h);
          }
      b.length * 2 < v && (b = np(c, l, v));
    } else
      b = np(d, p, Math.min(p - d, v)).map(i);
    return f ? b.reverse() : b;
  }, t.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = ci(u)).precision == null && (u.trim = !0), u = ov(u)), s === 1 / 0) return u;
    const c = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / i(Math.round(a(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? u(l) : "";
    };
  }, t.nice = () => r(lA(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function fA() {
  const e = sv(Fs()).domain([1, 10]);
  return e.copy = () => Wi(e, fA()).base(e.base()), Mt.apply(e, arguments), e;
}
function B0(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function F0(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function uv(e) {
  var t = 1, r = e(B0(t), F0(t));
  return r.constant = function(n) {
    return arguments.length ? e(B0(t = +n), F0(t)) : t;
  }, Cr(r);
}
function dA() {
  var e = uv(Fs());
  return e.copy = function() {
    return Wi(e, dA()).constant(e.constant());
  }, Mt.apply(e, arguments);
}
function z0(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function hD(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function vD(e) {
  return e < 0 ? -e * e : e * e;
}
function cv(e) {
  var t = e(st, st), r = 1;
  function n() {
    return r === 1 ? e(st, st) : r === 0.5 ? e(hD, vD) : e(z0(r), z0(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, Cr(t);
}
function lv() {
  var e = cv(Fs());
  return e.copy = function() {
    return Wi(e, lv()).exponent(e.exponent());
  }, Mt.apply(e, arguments), e;
}
function yD() {
  return lv.apply(null, arguments).exponent(0.5);
}
function W0(e) {
  return Math.sign(e) * e * e;
}
function mD(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function pA() {
  var e = av(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = mD(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(W0(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Lo)).map(W0)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return pA(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Mt.apply(a, arguments), Cr(a);
}
function hA() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = Ok(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[Fi(r, o)];
  }
  return i.invertExtent = function(o) {
    var s = t.indexOf(o);
    return s < 0 ? [NaN, NaN] : [
      s > 0 ? r[s - 1] : e[0],
      s < r.length ? r[s] : e[e.length - 1]
    ];
  }, i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let s of o) s != null && !isNaN(s = +s) && e.push(s);
    return e.sort(Sr), a();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), a()) : t.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.quantiles = function() {
    return r.slice();
  }, i.copy = function() {
    return hA().domain(e).range(t).unknown(n);
  }, Mt.apply(i, arguments);
}
function vA() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(u) {
    return u != null && u <= u ? a[Fi(n, u, 0, r)] : i;
  }
  function s() {
    var u = -1;
    for (n = new Array(r); ++u < r; ) n[u] = ((u + 1) * t - (u - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(u) {
    return arguments.length ? ([e, t] = u, e = +e, t = +t, s()) : [e, t];
  }, o.range = function(u) {
    return arguments.length ? (r = (a = Array.from(u)).length - 1, s()) : a.slice();
  }, o.invertExtent = function(u) {
    var c = a.indexOf(u);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(u) {
    return arguments.length && (i = u), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return vA().domain([e, t]).range(a).unknown(i);
  }, Mt.apply(Cr(o), arguments);
}
function yA() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[Fi(e, i, 0, n)] : r;
  }
  return a.domain = function(i) {
    return arguments.length ? (e = Array.from(i), n = Math.min(e.length, t.length - 1), a) : e.slice();
  }, a.range = function(i) {
    return arguments.length ? (t = Array.from(i), n = Math.min(e.length, t.length - 1), a) : t.slice();
  }, a.invertExtent = function(i) {
    var o = t.indexOf(i);
    return [e[o - 1], e[o]];
  }, a.unknown = function(i) {
    return arguments.length ? (r = i, a) : r;
  }, a.copy = function() {
    return yA().domain(e).range(t).unknown(r);
  }, Mt.apply(a, arguments);
}
const Mf = /* @__PURE__ */ new Date(), $f = /* @__PURE__ */ new Date();
function Ye(e, t, r, n) {
  function a(i) {
    return e(i = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+i)), i;
  }
  return a.floor = (i) => (e(i = /* @__PURE__ */ new Date(+i)), i), a.ceil = (i) => (e(i = new Date(i - 1)), t(i, 1), e(i), i), a.round = (i) => {
    const o = a(i), s = a.ceil(i);
    return i - o < s - i ? o : s;
  }, a.offset = (i, o) => (t(i = /* @__PURE__ */ new Date(+i), o == null ? 1 : Math.floor(o)), i), a.range = (i, o, s) => {
    const u = [];
    if (i = a.ceil(i), s = s == null ? 1 : Math.floor(s), !(i < o) || !(s > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+i)), t(i, s), e(i);
    while (c < i && i < o);
    return u;
  }, a.filter = (i) => Ye((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (Mf.setTime(+i), $f.setTime(+o), e(Mf), e($f), Math.floor(r(Mf, $f))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const Fo = Ye(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Fo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ye((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Fo);
Fo.range;
const nr = 1e3, Pt = nr * 60, ar = Pt * 60, ur = ar * 24, fv = ur * 7, U0 = ur * 30, If = ur * 365, Wr = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * nr);
}, (e, t) => (t - e) / nr, (e) => e.getUTCSeconds());
Wr.range;
const dv = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getMinutes());
dv.range;
const pv = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getUTCMinutes());
pv.range;
const hv = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr - e.getMinutes() * Pt);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getHours());
hv.range;
const vv = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getUTCHours());
vv.range;
const Ui = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Pt) / ur,
  (e) => e.getDate() - 1
);
Ui.range;
const zs = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => e.getUTCDate() - 1);
zs.range;
const mA = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => Math.floor(e / ur));
mA.range;
function un(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Pt) / fv);
}
const Ws = un(0), zo = un(1), gD = un(2), bD = un(3), Dn = un(4), xD = un(5), wD = un(6);
Ws.range;
zo.range;
gD.range;
bD.range;
Dn.range;
xD.range;
wD.range;
function cn(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / fv);
}
const Us = cn(0), Wo = cn(1), OD = cn(2), SD = cn(3), Nn = cn(4), AD = cn(5), _D = cn(6);
Us.range;
Wo.range;
OD.range;
SD.range;
Nn.range;
AD.range;
_D.range;
const yv = Ye((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
yv.range;
const mv = Ye((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
mv.range;
const cr = Ye((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
cr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
cr.range;
const lr = Ye((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
lr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
lr.range;
function gA(e, t, r, n, a, i) {
  const o = [
    [Wr, 1, nr],
    [Wr, 5, 5 * nr],
    [Wr, 15, 15 * nr],
    [Wr, 30, 30 * nr],
    [i, 1, Pt],
    [i, 5, 5 * Pt],
    [i, 15, 15 * Pt],
    [i, 30, 30 * Pt],
    [a, 1, ar],
    [a, 3, 3 * ar],
    [a, 6, 6 * ar],
    [a, 12, 12 * ar],
    [n, 1, ur],
    [n, 2, 2 * ur],
    [r, 1, fv],
    [t, 1, U0],
    [t, 3, 3 * U0],
    [e, 1, If]
  ];
  function s(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : u(c, l, f), y = p ? p.range(c, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function u(c, l, f) {
    const d = Math.abs(l - c) / f, p = Qh(([, , v]) => v).right(o, d);
    if (p === o.length) return e.every(ip(c / If, l / If, f));
    if (p === 0) return Fo.every(Math.max(ip(c, l, f), 1));
    const [y, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return y.every(h);
  }
  return [s, u];
}
const [PD, TD] = gA(lr, mv, Us, mA, vv, pv), [ED, CD] = gA(cr, yv, Ws, Ui, hv, dv);
function kf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Df(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Sa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function jD(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = Aa(a), l = _a(a), f = Aa(i), d = _a(i), p = Aa(o), y = _a(o), h = Aa(s), v = _a(s), b = Aa(u), g = _a(u), x = {
    a: R,
    A: L,
    b: z,
    B: N,
    c: null,
    d: X0,
    e: X0,
    f: QD,
    g: cN,
    G: fN,
    H: XD,
    I: ZD,
    j: JD,
    L: bA,
    m: eN,
    M: tN,
    p: B,
    q,
    Q: Q0,
    s: ex,
    S: rN,
    u: nN,
    U: aN,
    V: iN,
    w: oN,
    W: sN,
    x: null,
    X: null,
    y: uN,
    Y: lN,
    Z: dN,
    "%": J0
  }, O = {
    a: H,
    A: X,
    b: te,
    B: ne,
    c: null,
    d: Z0,
    e: Z0,
    f: yN,
    g: PN,
    G: EN,
    H: pN,
    I: hN,
    j: vN,
    L: wA,
    m: mN,
    M: gN,
    p: ee,
    q: Q,
    Q: Q0,
    s: ex,
    S: bN,
    u: xN,
    U: wN,
    V: ON,
    w: SN,
    W: AN,
    x: null,
    X: null,
    y: _N,
    Y: TN,
    Z: CN,
    "%": J0
  }, m = {
    a: k,
    A: T,
    b: $,
    B: M,
    c: j,
    d: G0,
    e: G0,
    f: KD,
    g: V0,
    G: K0,
    H: Y0,
    I: Y0,
    j: zD,
    L: HD,
    m: FD,
    M: WD,
    p: P,
    q: BD,
    Q: GD,
    s: YD,
    S: UD,
    u: DD,
    U: ND,
    V: RD,
    w: kD,
    W: LD,
    x: I,
    X: D,
    y: V0,
    Y: K0,
    Z: qD,
    "%": VD
  };
  x.x = w(r, x), x.X = w(n, x), x.c = w(t, x), O.x = w(r, O), O.X = w(n, O), O.c = w(t, O);
  function w(U, V) {
    return function(Z) {
      var E = [], Y = -1, F = 0, ae = U.length, ce, oe, Se;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++Y < ae; )
        U.charCodeAt(Y) === 37 && (E.push(U.slice(F, Y)), (oe = H0[ce = U.charAt(++Y)]) != null ? ce = U.charAt(++Y) : oe = ce === "e" ? " " : "0", (Se = V[ce]) && (ce = Se(Z, oe)), E.push(ce), F = Y + 1);
      return E.push(U.slice(F, Y)), E.join("");
    };
  }
  function A(U, V) {
    return function(Z) {
      var E = Sa(1900, void 0, 1), Y = _(E, U, Z += "", 0), F, ae;
      if (Y != Z.length) return null;
      if ("Q" in E) return new Date(E.Q);
      if ("s" in E) return new Date(E.s * 1e3 + ("L" in E ? E.L : 0));
      if (V && !("Z" in E) && (E.Z = 0), "p" in E && (E.H = E.H % 12 + E.p * 12), E.m === void 0 && (E.m = "q" in E ? E.q : 0), "V" in E) {
        if (E.V < 1 || E.V > 53) return null;
        "w" in E || (E.w = 1), "Z" in E ? (F = Df(Sa(E.y, 0, 1)), ae = F.getUTCDay(), F = ae > 4 || ae === 0 ? Wo.ceil(F) : Wo(F), F = zs.offset(F, (E.V - 1) * 7), E.y = F.getUTCFullYear(), E.m = F.getUTCMonth(), E.d = F.getUTCDate() + (E.w + 6) % 7) : (F = kf(Sa(E.y, 0, 1)), ae = F.getDay(), F = ae > 4 || ae === 0 ? zo.ceil(F) : zo(F), F = Ui.offset(F, (E.V - 1) * 7), E.y = F.getFullYear(), E.m = F.getMonth(), E.d = F.getDate() + (E.w + 6) % 7);
      } else ("W" in E || "U" in E) && ("w" in E || (E.w = "u" in E ? E.u % 7 : "W" in E ? 1 : 0), ae = "Z" in E ? Df(Sa(E.y, 0, 1)).getUTCDay() : kf(Sa(E.y, 0, 1)).getDay(), E.m = 0, E.d = "W" in E ? (E.w + 6) % 7 + E.W * 7 - (ae + 5) % 7 : E.w + E.U * 7 - (ae + 6) % 7);
      return "Z" in E ? (E.H += E.Z / 100 | 0, E.M += E.Z % 100, Df(E)) : kf(E);
    };
  }
  function _(U, V, Z, E) {
    for (var Y = 0, F = V.length, ae = Z.length, ce, oe; Y < F; ) {
      if (E >= ae) return -1;
      if (ce = V.charCodeAt(Y++), ce === 37) {
        if (ce = V.charAt(Y++), oe = m[ce in H0 ? V.charAt(Y++) : ce], !oe || (E = oe(U, Z, E)) < 0) return -1;
      } else if (ce != Z.charCodeAt(E++))
        return -1;
    }
    return E;
  }
  function P(U, V, Z) {
    var E = c.exec(V.slice(Z));
    return E ? (U.p = l.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function k(U, V, Z) {
    var E = p.exec(V.slice(Z));
    return E ? (U.w = y.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function T(U, V, Z) {
    var E = f.exec(V.slice(Z));
    return E ? (U.w = d.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function $(U, V, Z) {
    var E = b.exec(V.slice(Z));
    return E ? (U.m = g.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function M(U, V, Z) {
    var E = h.exec(V.slice(Z));
    return E ? (U.m = v.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function j(U, V, Z) {
    return _(U, t, V, Z);
  }
  function I(U, V, Z) {
    return _(U, r, V, Z);
  }
  function D(U, V, Z) {
    return _(U, n, V, Z);
  }
  function R(U) {
    return o[U.getDay()];
  }
  function L(U) {
    return i[U.getDay()];
  }
  function z(U) {
    return u[U.getMonth()];
  }
  function N(U) {
    return s[U.getMonth()];
  }
  function B(U) {
    return a[+(U.getHours() >= 12)];
  }
  function q(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function H(U) {
    return o[U.getUTCDay()];
  }
  function X(U) {
    return i[U.getUTCDay()];
  }
  function te(U) {
    return u[U.getUTCMonth()];
  }
  function ne(U) {
    return s[U.getUTCMonth()];
  }
  function ee(U) {
    return a[+(U.getUTCHours() >= 12)];
  }
  function Q(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var V = w(U += "", x);
      return V.toString = function() {
        return U;
      }, V;
    },
    parse: function(U) {
      var V = A(U += "", !1);
      return V.toString = function() {
        return U;
      }, V;
    },
    utcFormat: function(U) {
      var V = w(U += "", O);
      return V.toString = function() {
        return U;
      }, V;
    },
    utcParse: function(U) {
      var V = A(U += "", !0);
      return V.toString = function() {
        return U;
      }, V;
    }
  };
}
var H0 = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, MD = /^%/, $D = /[\\^$*+?|[\]().{}]/g;
function ve(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function ID(e) {
  return e.replace($D, "\\$&");
}
function Aa(e) {
  return new RegExp("^(?:" + e.map(ID).join("|") + ")", "i");
}
function _a(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function kD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function DD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function ND(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function RD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function LD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function K0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function V0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function qD(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function BD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function FD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function G0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function zD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Y0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function WD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function UD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function HD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function KD(e, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function VD(e, t, r) {
  var n = MD.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function GD(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function YD(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function X0(e, t) {
  return ve(e.getDate(), t, 2);
}
function XD(e, t) {
  return ve(e.getHours(), t, 2);
}
function ZD(e, t) {
  return ve(e.getHours() % 12 || 12, t, 2);
}
function JD(e, t) {
  return ve(1 + Ui.count(cr(e), e), t, 3);
}
function bA(e, t) {
  return ve(e.getMilliseconds(), t, 3);
}
function QD(e, t) {
  return bA(e, t) + "000";
}
function eN(e, t) {
  return ve(e.getMonth() + 1, t, 2);
}
function tN(e, t) {
  return ve(e.getMinutes(), t, 2);
}
function rN(e, t) {
  return ve(e.getSeconds(), t, 2);
}
function nN(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function aN(e, t) {
  return ve(Ws.count(cr(e) - 1, e), t, 2);
}
function xA(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Dn(e) : Dn.ceil(e);
}
function iN(e, t) {
  return e = xA(e), ve(Dn.count(cr(e), e) + (cr(e).getDay() === 4), t, 2);
}
function oN(e) {
  return e.getDay();
}
function sN(e, t) {
  return ve(zo.count(cr(e) - 1, e), t, 2);
}
function uN(e, t) {
  return ve(e.getFullYear() % 100, t, 2);
}
function cN(e, t) {
  return e = xA(e), ve(e.getFullYear() % 100, t, 2);
}
function lN(e, t) {
  return ve(e.getFullYear() % 1e4, t, 4);
}
function fN(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Dn(e) : Dn.ceil(e), ve(e.getFullYear() % 1e4, t, 4);
}
function dN(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ve(t / 60 | 0, "0", 2) + ve(t % 60, "0", 2);
}
function Z0(e, t) {
  return ve(e.getUTCDate(), t, 2);
}
function pN(e, t) {
  return ve(e.getUTCHours(), t, 2);
}
function hN(e, t) {
  return ve(e.getUTCHours() % 12 || 12, t, 2);
}
function vN(e, t) {
  return ve(1 + zs.count(lr(e), e), t, 3);
}
function wA(e, t) {
  return ve(e.getUTCMilliseconds(), t, 3);
}
function yN(e, t) {
  return wA(e, t) + "000";
}
function mN(e, t) {
  return ve(e.getUTCMonth() + 1, t, 2);
}
function gN(e, t) {
  return ve(e.getUTCMinutes(), t, 2);
}
function bN(e, t) {
  return ve(e.getUTCSeconds(), t, 2);
}
function xN(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function wN(e, t) {
  return ve(Us.count(lr(e) - 1, e), t, 2);
}
function OA(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Nn(e) : Nn.ceil(e);
}
function ON(e, t) {
  return e = OA(e), ve(Nn.count(lr(e), e) + (lr(e).getUTCDay() === 4), t, 2);
}
function SN(e) {
  return e.getUTCDay();
}
function AN(e, t) {
  return ve(Wo.count(lr(e) - 1, e), t, 2);
}
function _N(e, t) {
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function PN(e, t) {
  return e = OA(e), ve(e.getUTCFullYear() % 100, t, 2);
}
function TN(e, t) {
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function EN(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Nn(e) : Nn.ceil(e), ve(e.getUTCFullYear() % 1e4, t, 4);
}
function CN() {
  return "+0000";
}
function J0() {
  return "%";
}
function Q0(e) {
  return +e;
}
function ex(e) {
  return Math.floor(+e / 1e3);
}
var vn, SA, AA;
jN({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function jN(e) {
  return vn = jD(e), SA = vn.format, vn.parse, AA = vn.utcFormat, vn.utcParse, vn;
}
function MN(e) {
  return new Date(e);
}
function $N(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function gv(e, t, r, n, a, i, o, s, u, c) {
  var l = av(), f = l.invert, d = l.domain, p = c(".%L"), y = c(":%S"), h = c("%I:%M"), v = c("%I %p"), b = c("%a %d"), g = c("%b %d"), x = c("%B"), O = c("%Y");
  function m(w) {
    return (u(w) < w ? p : s(w) < w ? y : o(w) < w ? h : i(w) < w ? v : n(w) < w ? a(w) < w ? b : g : r(w) < w ? x : O)(w);
  }
  return l.invert = function(w) {
    return new Date(f(w));
  }, l.domain = function(w) {
    return arguments.length ? d(Array.from(w, $N)) : d().map(MN);
  }, l.ticks = function(w) {
    var A = d();
    return e(A[0], A[A.length - 1], w ?? 10);
  }, l.tickFormat = function(w, A) {
    return A == null ? m : c(A);
  }, l.nice = function(w) {
    var A = d();
    return (!w || typeof w.range != "function") && (w = t(A[0], A[A.length - 1], w ?? 10)), w ? d(lA(A, w)) : l;
  }, l.copy = function() {
    return Wi(l, gv(e, t, r, n, a, i, o, s, u, c));
  }, l;
}
function IN() {
  return Mt.apply(gv(ED, CD, cr, yv, Ws, Ui, hv, dv, Wr, SA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function kN() {
  return Mt.apply(gv(PD, TD, lr, mv, Us, zs, vv, pv, Wr, AA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Hs() {
  var e = 0, t = 1, r, n, a, i, o = st, s = !1, u;
  function c(f) {
    return f == null || isNaN(f = +f) ? u : o(a === 0 ? 0.5 : (f = (i(f) - r) * a, s ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = i(e = +e), n = i(t = +t), a = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (s = !!f, c) : s;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function l(f) {
    return function(d) {
      var p, y;
      return arguments.length ? ([p, y] = d, o = f(p, y), c) : [o(0), o(1)];
    };
  }
  return c.range = l(ua), c.rangeRound = l(nv), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function jr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function _A() {
  var e = Cr(Hs()(st));
  return e.copy = function() {
    return jr(e, _A());
  }, pr.apply(e, arguments);
}
function PA() {
  var e = sv(Hs()).domain([1, 10]);
  return e.copy = function() {
    return jr(e, PA()).base(e.base());
  }, pr.apply(e, arguments);
}
function TA() {
  var e = uv(Hs());
  return e.copy = function() {
    return jr(e, TA()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function bv() {
  var e = cv(Hs());
  return e.copy = function() {
    return jr(e, bv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function DN() {
  return bv.apply(null, arguments).exponent(0.5);
}
function EA() {
  var e = [], t = st;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Fi(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let a of n) a != null && !isNaN(a = +a) && e.push(a);
    return e.sort(Sr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, a) => t(a / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (a, i) => wk(e, i / n));
  }, r.copy = function() {
    return EA(t).domain(e);
  }, pr.apply(r, arguments);
}
function Ks() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, s, u, c = st, l, f = !1, d;
  function p(h) {
    return isNaN(h = +h) ? d : (h = 0.5 + ((h = +l(h)) - i) * (n * h < n * i ? s : u), c(f ? Math.max(0, Math.min(1, h)) : h));
  }
  p.domain = function(h) {
    return arguments.length ? ([e, t, r] = h, a = l(e = +e), i = l(t = +t), o = l(r = +r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(h) {
    return arguments.length ? (f = !!h, p) : f;
  }, p.interpolator = function(h) {
    return arguments.length ? (c = h, p) : c;
  };
  function y(h) {
    return function(v) {
      var b, g, x;
      return arguments.length ? ([b, g, x] = v, c = Vk(h, [b, g, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = y(ua), p.rangeRound = y(nv), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, a = h(e), i = h(t), o = h(r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function CA() {
  var e = Cr(Ks()(st));
  return e.copy = function() {
    return jr(e, CA());
  }, pr.apply(e, arguments);
}
function jA() {
  var e = sv(Ks()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return jr(e, jA()).base(e.base());
  }, pr.apply(e, arguments);
}
function MA() {
  var e = uv(Ks());
  return e.copy = function() {
    return jr(e, MA()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function xv() {
  var e = cv(Ks());
  return e.copy = function() {
    return jr(e, xv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function NN() {
  return xv.apply(null, arguments).exponent(0.5);
}
const tx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: ii,
  scaleDiverging: CA,
  scaleDivergingLog: jA,
  scaleDivergingPow: xv,
  scaleDivergingSqrt: NN,
  scaleDivergingSymlog: MA,
  scaleIdentity: cA,
  scaleImplicit: op,
  scaleLinear: Bo,
  scaleLog: fA,
  scaleOrdinal: ev,
  scalePoint: qa,
  scalePow: lv,
  scaleQuantile: hA,
  scaleQuantize: vA,
  scaleRadial: pA,
  scaleSequential: _A,
  scaleSequentialLog: PA,
  scaleSequentialPow: bv,
  scaleSequentialQuantile: EA,
  scaleSequentialSqrt: DN,
  scaleSequentialSymlog: TA,
  scaleSqrt: yD,
  scaleSymlog: dA,
  scaleThreshold: yA,
  scaleTime: IN,
  scaleUtc: kN,
  tickFormat: uA
}, Symbol.toStringTag, { value: "Module" }));
var Nf, rx;
function Vs() {
  if (rx) return Nf;
  rx = 1;
  var e = aa();
  function t(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var s = r[i], u = n(s);
      if (u != null && (c === void 0 ? u === u && !e(u) : a(u, c)))
        var c = u, l = s;
    }
    return l;
  }
  return Nf = t, Nf;
}
var Rf, nx;
function $A() {
  if (nx) return Rf;
  nx = 1;
  function e(t, r) {
    return t > r;
  }
  return Rf = e, Rf;
}
var Lf, ax;
function RN() {
  if (ax) return Lf;
  ax = 1;
  var e = Vs(), t = $A(), r = sa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Lf = n, Lf;
}
var LN = RN();
const wr = /* @__PURE__ */ _e(LN);
var qf, ix;
function IA() {
  if (ix) return qf;
  ix = 1;
  function e(t, r) {
    return t < r;
  }
  return qf = e, qf;
}
var Bf, ox;
function qN() {
  if (ox) return Bf;
  ox = 1;
  var e = Vs(), t = IA(), r = sa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Bf = n, Bf;
}
var BN = qN();
const Gs = /* @__PURE__ */ _e(BN);
var Ff, sx;
function FN() {
  if (sx) return Ff;
  sx = 1;
  var e = Fh(), t = Qt(), r = FS(), n = pt();
  function a(i, o) {
    var s = n(i) ? e : r;
    return s(i, t(o, 3));
  }
  return Ff = a, Ff;
}
var zf, ux;
function zN() {
  if (ux) return zf;
  ux = 1;
  var e = qS(), t = FN();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return zf = r, zf;
}
var WN = zN();
const UN = /* @__PURE__ */ _e(WN);
var ca = 1e9, HN = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Ov, Ie = !0, Ct = "[DecimalError] ", Xr = Ct + "Invalid argument: ", wv = Ct + "Exponent out of range: ", la = Math.floor, qr = Math.pow, KN = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, gt, Ze = 1e7, $e = 7, kA = 9007199254740991, Uo = la(kA / $e), re = {};
re.absoluteValue = re.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
re.comparedTo = re.cmp = function(e) {
  var t, r, n, a, i = this;
  if (e = new i.constructor(e), i.s !== e.s) return i.s || -e.s;
  if (i.e !== e.e) return i.e > e.e ^ i.s < 0 ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return i.d[t] > e.d[t] ^ i.s < 0 ? 1 : -1;
  return n === a ? 0 : n > a ^ i.s < 0 ? 1 : -1;
};
re.decimalPlaces = re.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * $e;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
re.dividedBy = re.div = function(e) {
  return sr(this, new this.constructor(e));
};
re.dividedToIntegerBy = re.idiv = function(e) {
  var t = this, r = t.constructor;
  return Pe(sr(t, new r(e), 0, 1), r.precision);
};
re.equals = re.eq = function(e) {
  return !this.cmp(e);
};
re.exponent = function() {
  return Fe(this);
};
re.greaterThan = re.gt = function(e) {
  return this.cmp(e) > 0;
};
re.greaterThanOrEqualTo = re.gte = function(e) {
  return this.cmp(e) >= 0;
};
re.isInteger = re.isint = function() {
  return this.e > this.d.length - 2;
};
re.isNegative = re.isneg = function() {
  return this.s < 0;
};
re.isPositive = re.ispos = function() {
  return this.s > 0;
};
re.isZero = function() {
  return this.s === 0;
};
re.lessThan = re.lt = function(e) {
  return this.cmp(e) < 0;
};
re.lessThanOrEqualTo = re.lte = function(e) {
  return this.cmp(e) < 1;
};
re.logarithm = re.log = function(e) {
  var t, r = this, n = r.constructor, a = n.precision, i = a + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(gt)) throw Error(Ct + "NaN");
  if (r.s < 1) throw Error(Ct + (r.s ? "NaN" : "-Infinity"));
  return r.eq(gt) ? new n(0) : (Ie = !1, t = sr(li(r, i), li(e, i), i), Ie = !0, Pe(t, a));
};
re.minus = re.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? RA(t, e) : DA(t, (e.s = -e.s, e));
};
re.modulo = re.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(Ct + "NaN");
  return r.s ? (Ie = !1, t = sr(r, e, 0, 1).times(e), Ie = !0, r.minus(t)) : Pe(new n(r), a);
};
re.naturalExponential = re.exp = function() {
  return NA(this);
};
re.naturalLogarithm = re.ln = function() {
  return li(this);
};
re.negated = re.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
re.plus = re.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? DA(t, e) : RA(t, (e.s = -e.s, e));
};
re.precision = re.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xr + e);
  if (t = Fe(a) + 1, n = a.d.length - 1, r = n * $e + 1, n = a.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
re.squareRoot = re.sqrt = function() {
  var e, t, r, n, a, i, o, s = this, u = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new u(0);
    throw Error(Ct + "NaN");
  }
  for (e = Fe(s), Ie = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = Kt(s.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = la((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(a.toString()), r = u.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(sr(s, i, o + 2)).times(0.5), Kt(i.d).slice(0, o) === (t = Kt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), a == o && t == "4999") {
        if (Pe(i, r + 1, 0), i.times(i).eq(s)) {
          n = i;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Ie = !0, Pe(n, r);
};
re.times = re.mul = function(e) {
  var t, r, n, a, i, o, s, u, c, l = this, f = l.constructor, d = l.d, p = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, u = d.length, c = p.length, u < c && (i = d, d = p, p = i, o = u, u = c, c = o), i = [], o = u + c, n = o; n--; ) i.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, a = u + n; a > n; )
      s = i[a] + p[n] * d[a - n - 1] + t, i[a--] = s % Ze | 0, t = s / Ze | 0;
    i[a] = (i[a] + t) % Ze | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), e.d = i, e.e = r, Ie ? Pe(e, f.precision) : e;
};
re.toDecimalPlaces = re.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (Zt(e, 0, ca), t === void 0 ? t = n.rounding : Zt(t, 0, 8), Pe(r, e + Fe(r) + 1, t));
};
re.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = tn(n, !0) : (Zt(e, 0, ca), t === void 0 ? t = a.rounding : Zt(t, 0, 8), n = Pe(new a(n), e + 1, t), r = tn(n, !0, e + 1)), r;
};
re.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? tn(a) : (Zt(e, 0, ca), t === void 0 ? t = i.rounding : Zt(t, 0, 8), n = Pe(new i(a), e + Fe(a) + 1, t), r = tn(n.abs(), !1, e + Fe(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
re.toInteger = re.toint = function() {
  var e = this, t = e.constructor;
  return Pe(new t(e), Fe(e) + 1, t.rounding);
};
re.toNumber = function() {
  return +this;
};
re.toPower = re.pow = function(e) {
  var t, r, n, a, i, o, s = this, u = s.constructor, c = 12, l = +(e = new u(e));
  if (!e.s) return new u(gt);
  if (s = new u(s), !s.s) {
    if (e.s < 1) throw Error(Ct + "Infinity");
    return s;
  }
  if (s.eq(gt)) return s;
  if (n = u.precision, e.eq(gt)) return Pe(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = s.s, o) {
    if ((r = l < 0 ? -l : l) <= kA) {
      for (a = new u(gt), t = Math.ceil(n / $e + 4), Ie = !1; r % 2 && (a = a.times(s), lx(a.d, t)), r = la(r / 2), r !== 0; )
        s = s.times(s), lx(s.d, t);
      return Ie = !0, e.s < 0 ? new u(gt).div(a) : Pe(a, n);
    }
  } else if (i < 0) throw Error(Ct + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ie = !1, a = e.times(li(s, n + c)), Ie = !0, a = NA(a), a.s = i, a;
};
re.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = Fe(a), n = tn(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Zt(e, 1, ca), t === void 0 ? t = i.rounding : Zt(t, 0, 8), a = Pe(new i(a), e, t), r = Fe(a), n = tn(a, e <= r || r <= i.toExpNeg, e)), n;
};
re.toSignificantDigits = re.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Zt(e, 1, ca), t === void 0 ? t = n.rounding : Zt(t, 0, 8)), Pe(new n(r), e, t);
};
re.toString = re.valueOf = re.val = re.toJSON = re[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Fe(e), r = e.constructor;
  return tn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function DA(e, t) {
  var r, n, a, i, o, s, u, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), Ie ? Pe(t, f) : t;
  if (u = e.d, c = t.d, o = e.e, a = t.e, u = u.slice(), i = o - a, i) {
    for (i < 0 ? (n = u, i = -i, s = c.length) : (n = c, a = o, s = u.length), o = Math.ceil(f / $e), s = o > s ? o + 1 : s + 1, i > s && (i = s, n.length = 1), n.reverse(); i--; ) n.push(0);
    n.reverse();
  }
  for (s = u.length, i = c.length, s - i < 0 && (i = s, n = c, c = u, u = n), r = 0; i; )
    r = (u[--i] = u[i] + c[i] + r) / Ze | 0, u[i] %= Ze;
  for (r && (u.unshift(r), ++a), s = u.length; u[--s] == 0; ) u.pop();
  return t.d = u, t.e = a, Ie ? Pe(t, f) : t;
}
function Zt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Xr + e);
}
function Kt(e) {
  var t, r, n, a = e.length - 1, i = "", o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      n = e[t] + "", r = $e - n.length, r && (i += br(r)), i += n;
    o = e[t], n = o + "", r = $e - n.length, r && (i += br(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var sr = /* @__PURE__ */ (function() {
  function e(n, a) {
    var i, o = 0, s = n.length;
    for (n = n.slice(); s--; )
      i = n[s] * a + o, n[s] = i % Ze | 0, o = i / Ze | 0;
    return o && n.unshift(o), n;
  }
  function t(n, a, i, o) {
    var s, u;
    if (i != o)
      u = i > o ? 1 : -1;
    else
      for (s = u = 0; s < i; s++)
        if (n[s] != a[s]) {
          u = n[s] > a[s] ? 1 : -1;
          break;
        }
    return u;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      n[i] -= o, o = n[i] < a[i] ? 1 : 0, n[i] = o * Ze + n[i] - a[i];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, a, i, o) {
    var s, u, c, l, f, d, p, y, h, v, b, g, x, O, m, w, A, _, P = n.constructor, k = n.s == a.s ? 1 : -1, T = n.d, $ = a.d;
    if (!n.s) return new P(n);
    if (!a.s) throw Error(Ct + "Division by zero");
    for (u = n.e - a.e, A = $.length, m = T.length, p = new P(k), y = p.d = [], c = 0; $[c] == (T[c] || 0); ) ++c;
    if ($[c] > (T[c] || 0) && --u, i == null ? g = i = P.precision : o ? g = i + (Fe(n) - Fe(a)) + 1 : g = i, g < 0) return new P(0);
    if (g = g / $e + 2 | 0, c = 0, A == 1)
      for (l = 0, $ = $[0], g++; (c < m || l) && g--; c++)
        x = l * Ze + (T[c] || 0), y[c] = x / $ | 0, l = x % $ | 0;
    else {
      for (l = Ze / ($[0] + 1) | 0, l > 1 && ($ = e($, l), T = e(T, l), A = $.length, m = T.length), O = A, h = T.slice(0, A), v = h.length; v < A; ) h[v++] = 0;
      _ = $.slice(), _.unshift(0), w = $[0], $[1] >= Ze / 2 && ++w;
      do
        l = 0, s = t($, h, A, v), s < 0 ? (b = h[0], A != v && (b = b * Ze + (h[1] || 0)), l = b / w | 0, l > 1 ? (l >= Ze && (l = Ze - 1), f = e($, l), d = f.length, v = h.length, s = t(f, h, d, v), s == 1 && (l--, r(f, A < d ? _ : $, d))) : (l == 0 && (s = l = 1), f = $.slice()), d = f.length, d < v && f.unshift(0), r(h, f, v), s == -1 && (v = h.length, s = t($, h, A, v), s < 1 && (l++, r(h, A < v ? _ : $, v))), v = h.length) : s === 0 && (l++, h = [0]), y[c++] = l, s && h[0] ? h[v++] = T[O] || 0 : (h = [T[O]], v = 1);
      while ((O++ < m || h[0] !== void 0) && g--);
    }
    return y[0] || y.shift(), p.e = u, Pe(p, o ? i + Fe(p) + 1 : i);
  };
})();
function NA(e, t) {
  var r, n, a, i, o, s, u = 0, c = 0, l = e.constructor, f = l.precision;
  if (Fe(e) > 16) throw Error(wv + Fe(e));
  if (!e.s) return new l(gt);
  for (Ie = !1, s = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(qr(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = a = i = new l(gt), l.precision = s; ; ) {
    if (a = Pe(a.times(e), s), r = r.times(++u), o = i.plus(sr(a, r, s)), Kt(o.d).slice(0, s) === Kt(i.d).slice(0, s)) {
      for (; c--; ) i = Pe(i.times(i), s);
      return l.precision = f, t == null ? (Ie = !0, Pe(i, f)) : i;
    }
    i = o;
  }
}
function Fe(e) {
  for (var t = e.e * $e, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Wf(e, t, r) {
  if (t > e.LN10.sd())
    throw Ie = !0, r && (e.precision = r), Error(Ct + "LN10 precision limit exceeded");
  return Pe(new e(e.LN10), t);
}
function br(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function li(e, t) {
  var r, n, a, i, o, s, u, c, l, f = 1, d = 10, p = e, y = p.d, h = p.constructor, v = h.precision;
  if (p.s < 1) throw Error(Ct + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(gt)) return new h(0);
  if (t == null ? (Ie = !1, c = v) : c = t, p.eq(10))
    return t == null && (Ie = !0), Wf(h, c);
  if (c += d, h.precision = c, r = Kt(y), n = r.charAt(0), i = Fe(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = Kt(p.d), n = r.charAt(0), f++;
    i = Fe(p), n > 1 ? (p = new h("0." + r), i++) : p = new h(n + "." + r.slice(1));
  } else
    return u = Wf(h, c + 2, v).times(i + ""), p = li(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = v, t == null ? (Ie = !0, Pe(p, v)) : p;
  for (s = o = p = sr(p.minus(gt), p.plus(gt), c), l = Pe(p.times(p), c), a = 3; ; ) {
    if (o = Pe(o.times(l), c), u = s.plus(sr(o, new h(a), c)), Kt(u.d).slice(0, c) === Kt(s.d).slice(0, c))
      return s = s.times(2), i !== 0 && (s = s.plus(Wf(h, c + 2, v).times(i + ""))), s = sr(s, new h(f), c), h.precision = v, t == null ? (Ie = !0, Pe(s, v)) : s;
    s = u, a += 2;
  }
}
function cx(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = la(r / $e), e.d = [], n = (r + 1) % $e, r < 0 && (n += $e), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= $e; n < a; ) e.d.push(+t.slice(n, n += $e));
      t = t.slice(n), n = $e - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Ie && (e.e > Uo || e.e < -Uo)) throw Error(wv + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Pe(e, t, r) {
  var n, a, i, o, s, u, c, l, f = e.d;
  for (o = 1, i = f[0]; i >= 10; i /= 10) o++;
  if (n = t - o, n < 0)
    n += $e, a = t, c = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / $e), i = f.length, l >= i) return e;
    for (c = i = f[l], o = 1; i >= 10; i /= 10) o++;
    n %= $e, a = n - $e + o;
  }
  if (r !== void 0 && (i = qr(10, o - a - 1), s = c / i % 10 | 0, u = t < 0 || f[l + 1] !== void 0 || c % i, u = r < 4 ? (s || u) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || u || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? a > 0 ? c / qr(10, o - a) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return u ? (i = Fe(e), f.length = 1, t = t - i - 1, f[0] = qr(10, ($e - t % $e) % $e), e.e = la(-t / $e) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, i = 1, l--) : (f.length = l + 1, i = qr(10, $e - n), f[l] = a > 0 ? (c / qr(10, o - a) % qr(10, a) | 0) * i : 0), u)
    for (; ; )
      if (l == 0) {
        (f[0] += i) == Ze && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += i, f[l] != Ze) break;
        f[l--] = 0, i = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (Ie && (e.e > Uo || e.e < -Uo))
    throw Error(wv + Fe(e));
  return e;
}
function RA(e, t) {
  var r, n, a, i, o, s, u, c, l, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Ie ? Pe(t, p) : t;
  if (u = e.d, f = t.d, n = t.e, c = e.e, u = u.slice(), o = c - n, o) {
    for (l = o < 0, l ? (r = u, o = -o, s = f.length) : (r = f, n = c, s = u.length), a = Math.max(Math.ceil(p / $e), s) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; ) r.push(0);
    r.reverse();
  } else {
    for (a = u.length, s = f.length, l = a < s, l && (s = a), a = 0; a < s; a++)
      if (u[a] != f[a]) {
        l = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (l && (r = u, u = f, f = r, t.s = -t.s), s = u.length, a = f.length - s; a > 0; --a) u[s++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (i = a; i && u[--i] === 0; ) u[i] = Ze - 1;
      --u[i], u[a] += Ze;
    }
    u[a] -= f[a];
  }
  for (; u[--s] === 0; ) u.pop();
  for (; u[0] === 0; u.shift()) --n;
  return u[0] ? (t.d = u, t.e = n, Ie ? Pe(t, p) : t) : new d(0);
}
function tn(e, t, r) {
  var n, a = Fe(e), i = Kt(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + br(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + br(-a - 1) + i, r && (n = r - o) > 0 && (i += br(n))) : a >= o ? (i += br(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + br(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += br(n))), e.s < 0 ? "-" + i : i;
}
function lx(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function LA(e) {
  var t, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (o.constructor = a, i instanceof a) {
      o.s = i.s, o.e = i.e, o.d = (i = i.d) ? i.slice() : i;
      return;
    }
    if (typeof i == "number") {
      if (i * 0 !== 0)
        throw Error(Xr + i);
      if (i > 0)
        o.s = 1;
      else if (i < 0)
        i = -i, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (i === ~~i && i < 1e7) {
        o.e = 0, o.d = [i];
        return;
      }
      return cx(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Xr + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, KN.test(i)) cx(o, i);
    else throw Error(Xr + i);
  }
  if (a.prototype = re, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = LA, a.config = a.set = VN, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function VN(e) {
  if (!e || typeof e != "object")
    throw Error(Ct + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    ca,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < a.length; t += 3)
    if ((n = e[r = a[t]]) !== void 0)
      if (la(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Xr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Xr + r + ": " + n);
  return this;
}
var Ov = LA(HN);
gt = new Ov(1);
const Ae = Ov;
function GN(e) {
  return JN(e) || ZN(e) || XN(e) || YN();
}
function YN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XN(e, t) {
  if (e) {
    if (typeof e == "string") return lp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lp(e, t);
  }
}
function ZN(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function JN(e) {
  if (Array.isArray(e)) return lp(e);
}
function lp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var QN = function(t) {
  return t;
}, qA = {}, BA = function(t) {
  return t === qA;
}, fx = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && BA(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, eR = function e(t, r) {
  return t === 1 ? r : fx(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(s) {
      return s !== qA;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, fx(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var l = a.map(function(f) {
        return BA(f) ? u.shift() : f;
      });
      return r.apply(void 0, GN(l).concat(u));
    }));
  });
}, Ys = function(t) {
  return eR(t.length, t);
}, fp = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, tR = Ys(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), rR = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return QN;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, i.apply(void 0, arguments));
  };
}, dp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, FA = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, u) {
      return s === r[u];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function nR(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ae(e).abs().log(10).toNumber()) + 1, t;
}
function aR(e, t, r) {
  for (var n = new Ae(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var iR = Ys(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), oR = Ys(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), sR = Ys(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Xs = {
  rangeStep: aR,
  getDigitCount: nR,
  interpolateNumber: iR,
  uninterpolateNumber: oR,
  uninterpolateTruncation: sR
};
function pp(e) {
  return lR(e) || cR(e) || zA(e) || uR();
}
function uR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cR(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function lR(e) {
  if (Array.isArray(e)) return hp(e);
}
function fi(e, t) {
  return pR(e) || dR(e, t) || zA(e, t) || fR();
}
function fR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zA(e, t) {
  if (e) {
    if (typeof e == "string") return hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hp(e, t);
  }
}
function hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function dR(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, a = !1, i = void 0;
    try {
      for (var o = e[Symbol.iterator](), s; !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t)); n = !0)
        ;
    } catch (u) {
      a = !0, i = u;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function pR(e) {
  if (Array.isArray(e)) return e;
}
function WA(e) {
  var t = fi(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function UA(e, t, r) {
  if (e.lte(0))
    return new Ae(0);
  var n = Xs.getDigitCount(e.toNumber()), a = new Ae(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new Ae(Math.ceil(i.div(o).toNumber())).add(r).mul(o), u = s.mul(a);
  return t ? u : new Ae(Math.ceil(u));
}
function hR(e, t, r) {
  var n = 1, a = new Ae(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new Ae(10).pow(Xs.getDigitCount(e) - 1), a = new Ae(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new Ae(Math.floor(e)));
  } else e === 0 ? a = new Ae(Math.floor((t - 1) / 2)) : r || (a = new Ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = rR(tR(function(u) {
    return a.add(new Ae(u - o).mul(n)).toNumber();
  }), fp);
  return s(0, t);
}
function HA(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ae(0),
      tickMin: new Ae(0),
      tickMax: new Ae(0)
    };
  var i = UA(new Ae(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new Ae(0) : (o = new Ae(e).add(t).div(2), o = o.sub(new Ae(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), u = Math.ceil(new Ae(t).sub(o).div(i).toNumber()), c = s + u + 1;
  return c > r ? HA(e, t, r, n, a + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: i,
    tickMin: o.sub(new Ae(s).mul(i)),
    tickMax: o.add(new Ae(u).mul(i))
  });
}
function vR(e) {
  var t = fi(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = WA([r, n]), u = fi(s, 2), c = u[0], l = u[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(pp(fp(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(pp(fp(0, a - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? dp(f) : f;
  }
  if (c === l)
    return hR(c, a, i);
  var d = HA(c, l, o, i), p = d.step, y = d.tickMin, h = d.tickMax, v = Xs.rangeStep(y, h.add(new Ae(0.1).mul(p)), p);
  return r > n ? dp(v) : v;
}
function yR(e, t) {
  var r = fi(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = WA([n, a]), s = fi(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (u === c)
    return [u];
  var l = Math.max(t, 2), f = UA(new Ae(c).sub(u).div(l - 1), i, 0), d = [].concat(pp(Xs.rangeStep(new Ae(u), new Ae(c).sub(new Ae(0.99).mul(f)), f)), [c]);
  return n > a ? dp(d) : d;
}
var mR = FA(vR), gR = FA(yR), bR = process.env.NODE_ENV === "production", Uf = "Invariant failed";
function lt(e, t) {
  if (bR)
    throw new Error(Uf);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Uf, ": ").concat(r) : Uf;
  throw new Error(n);
}
var xR = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Rn(e) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rn(e);
}
function Ho() {
  return Ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ho.apply(this, arguments);
}
function wR(e, t) {
  return _R(e) || AR(e, t) || SR(e, t) || OR();
}
function OR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SR(e, t) {
  if (e) {
    if (typeof e == "string") return dx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dx(e, t);
  }
}
function dx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function AR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function _R(e) {
  if (Array.isArray(e)) return e;
}
function PR(e, t) {
  if (e == null) return {};
  var r = TR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ER(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, GA(n.key), n);
  }
}
function jR(e, t, r) {
  return t && CR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MR(e, t, r) {
  return t = Ko(t), $R(e, KA() ? Reflect.construct(t, r || [], Ko(e).constructor) : t.apply(e, r));
}
function $R(e, t) {
  if (t && (Rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IR(e);
}
function IR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function KA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (KA = function() {
    return !!e;
  })();
}
function Ko(e) {
  return Ko = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ko(e);
}
function kR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && vp(e, t);
}
function vp(e, t) {
  return vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, vp(e, t);
}
function VA(e, t, r) {
  return t = GA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GA(e) {
  var t = DR(e, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function DR(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hi = /* @__PURE__ */ (function(e) {
  function t() {
    return ER(this, t), MR(this, t, arguments);
  }
  return kR(t, e), jR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = PR(n, xR), p = ie(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? lt(!1, 'ErrorBar requires Axis type property to be "number".') : lt());
      var y = u.map(function(h) {
        var v = c(h, s), b = v.x, g = v.y, x = v.value, O = v.errorVal;
        if (!O)
          return null;
        var m = [], w, A;
        if (Array.isArray(O)) {
          var _ = wR(O, 2);
          w = _[0], A = _[1];
        } else
          w = A = O;
        if (i === "vertical") {
          var P = l.scale, k = g + a, T = k + o, $ = k - o, M = P(x - w), j = P(x + A);
          m.push({
            x1: j,
            y1: T,
            x2: j,
            y2: $
          }), m.push({
            x1: M,
            y1: k,
            x2: j,
            y2: k
          }), m.push({
            x1: M,
            y1: T,
            x2: M,
            y2: $
          });
        } else if (i === "horizontal") {
          var I = f.scale, D = b + a, R = D - o, L = D + o, z = I(x - w), N = I(x + A);
          m.push({
            x1: R,
            y1: N,
            x2: L,
            y2: N
          }), m.push({
            x1: D,
            y1: z,
            x2: D,
            y2: N
          }), m.push({
            x1: R,
            y1: z,
            x2: L,
            y2: z
          });
        }
        return /* @__PURE__ */ C.createElement(pe, Ho({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(B) {
            return "".concat(B.x1, "-").concat(B.x2, "-").concat(B.y1, "-").concat(B.y2);
          }))
        }, p), m.map(function(B) {
          return /* @__PURE__ */ C.createElement("line", Ho({}, B, {
            key: "line-".concat(B.x1, "-").concat(B.x2, "-").concat(B.y1, "-").concat(B.y2)
          }));
        }));
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
})(C.Component);
VA(Hi, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
VA(Hi, "displayName", "ErrorBar");
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function px(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? px(Object(r), !0).forEach(function(n) {
      NR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : px(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NR(e, t, r) {
  return t = RR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RR(e) {
  var t = LR(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function LR(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var YA = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = yt(r, Gr);
  if (!o)
    return null;
  var s = Gr.defaultProps, u = s !== void 0 ? kr(kr({}, s), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : i === "children" ? c = (n || []).reduce(function(l, f) {
    var d = f.item, p = f.props, y = p.sectors || p.data || [];
    return l.concat(y.map(function(h) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: h.name,
        color: h.fill,
        payload: h
      };
    }));
  }, []) : c = (n || []).map(function(l) {
    var f = l.item, d = f.type.defaultProps, p = d !== void 0 ? kr(kr({}, d), f.props) : {}, y = p.dataKey, h = p.name, v = p.legendType, b = p.hide;
    return {
      inactive: b,
      dataKey: y,
      type: u.iconType || v || "square",
      color: Sv(f),
      value: h || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), kr(kr(kr({}, u), Gr.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function hx(e) {
  return zR(e) || FR(e) || BR(e) || qR();
}
function qR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BR(e, t) {
  if (e) {
    if (typeof e == "string") return yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yp(e, t);
  }
}
function FR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zR(e) {
  if (Array.isArray(e)) return yp(e);
}
function yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ne(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vx(Object(r), !0).forEach(function(n) {
      Tn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tn(e, t, r) {
  return t = WR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WR(e) {
  var t = UR(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function UR(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Re(e, t, r) {
  return le(e) || le(t) ? r : Ge(t) ? bt(e, t, r) : ue(t) ? t(e) : r;
}
function Ba(e, t, r, n) {
  var a = UN(e, function(s) {
    return Re(s, t);
  });
  if (r === "number") {
    var i = a.filter(function(s) {
      return G(s) || parseFloat(s);
    });
    return i.length ? [Gs(i), wr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(s) {
    return !le(s);
  }) : a;
  return o.map(function(s) {
    return Ge(s) || s instanceof Date ? s : "";
  });
}
var HR = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var u = i.range, c = 0; c < s; c++) {
      var l = c > 0 ? a[c - 1].coordinate : a[s - 1].coordinate, f = a[c].coordinate, d = c >= s - 1 ? a[0].coordinate : a[c + 1].coordinate, p = void 0;
      if (it(f - l) !== it(d - f)) {
        var y = [];
        if (it(d - f) === it(u[1] - u[0])) {
          p = d;
          var h = f + u[1] - u[0];
          y[0] = Math.min(h, (h + l) / 2), y[1] = Math.max(h, (h + l) / 2);
        } else {
          p = l;
          var v = d + u[1] - u[0];
          y[0] = Math.min(f, (v + f) / 2), y[1] = Math.max(f, (v + f) / 2);
        }
        var b = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
        if (t > b[0] && t <= b[1] || t >= y[0] && t <= y[1]) {
          o = a[c].index;
          break;
        }
      } else {
        var g = Math.min(l, d), x = Math.max(l, d);
        if (t > (g + f) / 2 && t <= (x + f) / 2) {
          o = a[c].index;
          break;
        }
      }
    }
  else
    for (var O = 0; O < s; O++)
      if (O === 0 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O > 0 && O < s - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2 && t <= (n[O].coordinate + n[O + 1].coordinate) / 2 || O === s - 1 && t > (n[O].coordinate + n[O - 1].coordinate) / 2) {
        o = n[O].index;
        break;
      }
  return o;
}, Sv = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Ne(Ne({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, s = i.fill, u;
  switch (a) {
    case "Line":
      u = o;
      break;
    case "Area":
    case "Radar":
      u = o && o !== "none" ? o : s;
      break;
    default:
      u = s;
      break;
  }
  return u;
}, KR = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), u = 0, c = s.length; u < c; u++)
    for (var l = i[s[u]].stackGroups, f = Object.keys(l), d = 0, p = f.length; d < p; d++) {
      var y = l[f[d]], h = y.items, v = y.cateAxisId, b = h.filter(function(A) {
        return or(A.type).indexOf("Bar") >= 0;
      });
      if (b && b.length) {
        var g = b[0].type.defaultProps, x = g !== void 0 ? Ne(Ne({}, g), b[0].props) : b[0].props, O = x.barSize, m = x[v];
        o[m] || (o[m] = []);
        var w = le(O) ? r : O;
        o[m].push({
          item: b[0],
          stackList: b.slice(1),
          barSize: le(w) ? void 0 : ot(w, n, 0)
        });
      }
    }
  return o;
}, VR = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, s = t.maxBarSize, u = o.length;
  if (u < 1) return null;
  var c = ot(r, a, 0, !0), l, f = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = a / u, y = o.reduce(function(O, m) {
      return O + m.barSize || 0;
    }, 0);
    y += (u - 1) * c, y >= a && (y -= (u - 1) * c, c = 0), y >= a && p > 0 && (d = !0, p *= 0.9, y = u * p);
    var h = (a - y) / 2 >> 0, v = {
      offset: h - c,
      size: 0
    };
    l = o.reduce(function(O, m) {
      var w = {
        item: m.item,
        position: {
          offset: v.offset + v.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : m.barSize
        }
      }, A = [].concat(hx(O), [w]);
      return v = A[A.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(_) {
        A.push({
          item: _,
          position: v
        });
      }), A;
    }, f);
  } else {
    var b = ot(n, a, 0, !0);
    a - 2 * b - (u - 1) * c <= 0 && (c = 0);
    var g = (a - 2 * b - (u - 1) * c) / u;
    g > 1 && (g >>= 0);
    var x = s === +s ? Math.min(g, s) : g;
    l = o.reduce(function(O, m, w) {
      var A = [].concat(hx(O), [{
        item: m.item,
        position: {
          offset: b + (g + c) * w + (g - x) / 2,
          size: x
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(_) {
        A.push({
          item: _,
          position: A[A.length - 1].position
        });
      }), A;
    }, f);
  }
  return l;
}, GR = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = YA({
    children: i,
    legendWidth: u
  });
  if (c) {
    var l = a || {}, f = l.width, d = l.height, p = c.align, y = c.verticalAlign, h = c.layout;
    if ((h === "vertical" || h === "horizontal" && y === "middle") && p !== "center" && G(t[p]))
      return Ne(Ne({}, t), {}, Tn({}, p, t[p] + (f || 0)));
    if ((h === "horizontal" || h === "vertical" && p === "center") && y !== "middle" && G(t[y]))
      return Ne(Ne({}, t), {}, Tn({}, y, t[y] + (d || 0)));
  }
  return t;
}, YR = function(t, r, n) {
  return le(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, XA = function(t, r, n, a, i) {
  var o = r.props.children, s = xt(o, Hi).filter(function(c) {
    return YR(a, i, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = Re(l, n);
      if (le(f)) return c;
      var d = Array.isArray(f) ? [Gs(f), wr(f)] : [f, f], p = u.reduce(function(y, h) {
        var v = Re(l, h, 0), b = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), g = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(b, y[0]), Math.max(g, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, XR = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return XA(t, s, n, i, a);
  }).filter(function(s) {
    return !le(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, ZA = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && XA(t, u, c, a) || Ba(t, c, n, i);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(u, c) {
        return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var s = {};
  return o.reduce(function(u, c) {
    for (var l = 0, f = c.length; l < f; l++)
      s[c[l]] || (s[c[l]] = !0, u.push(c[l]));
    return u;
  }, []);
}, JA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, QA = function(t, r, n, a) {
  if (a)
    return t.map(function(u) {
      return u.coordinate;
    });
  var i, o, s = t.map(function(u) {
    return u.coordinate === r && (i = !0), u.coordinate === n && (o = !0), u.coordinate;
  });
  return i || s.push(r), o || s.push(n), s;
}, ir = function(t, r, n) {
  if (!t) return null;
  var a = t.scale, i = t.duplicateDomain, o = t.type, s = t.range, u = t.realScaleType === "scaleBand" ? a.bandwidth() / 2 : 2, c = (r || n) && o === "category" && a.bandwidth ? a.bandwidth() / u : 0;
  if (c = t.axisType === "angleAxis" && s?.length >= 2 ? it(s[0] - s[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var l = (t.ticks || t.niceTicks).map(function(f) {
      var d = i ? i.indexOf(f) : f;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: a(d) + c,
        value: f,
        offset: c
      };
    });
    return l.filter(function(f) {
      return !oa(f.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(f, d) {
    return {
      coordinate: a(f) + c,
      value: f,
      index: d,
      offset: c
    };
  }) : a.ticks && !n ? a.ticks(t.tickCount).map(function(f) {
    return {
      coordinate: a(f) + c,
      value: f,
      offset: c
    };
  }) : a.domain().map(function(f, d) {
    return {
      coordinate: a(f) + c,
      value: i ? i[f] : f,
      index: d,
      offset: c
    };
  });
}, Hf = /* @__PURE__ */ new WeakMap(), co = function(t, r) {
  if (typeof r != "function")
    return t;
  Hf.has(t) || Hf.set(t, /* @__PURE__ */ new WeakMap());
  var n = Hf.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, e_ = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: ii(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: Bo(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: qa(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: ii(),
      realScaleType: "band"
    } : {
      scale: Bo(),
      realScaleType: "linear"
    };
  if (Bi(a)) {
    var u = "scale".concat(ks(a));
    return {
      scale: (tx[u] || qa)(),
      realScaleType: tx[u] ? u : "point"
    };
  }
  return ue(a) ? {
    scale: a
  } : {
    scale: qa(),
    realScaleType: "point"
  };
}, yx = 1e-4, t_ = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - yx, o = Math.max(a[0], a[1]) + yx, s = t(r[0]), u = t(r[n - 1]);
    (s < i || s > o || u < i || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, ZR = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, JR = function(t, r) {
  if (!r || r.length !== 2 || !G(r[0]) || !G(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!G(t[0]) || t[0] < n) && (i[0] = n), (!G(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, QR = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var u = oa(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + u, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, eL = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = oa(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, tL = {
  sign: QR,
  // @ts-expect-error definitelytyped types are incorrect
  expand: bM,
  // @ts-expect-error definitelytyped types are incorrect
  none: Cn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: xM,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: wM,
  positive: eL
}, rL = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = tL[n], o = gM().keys(a).value(function(s, u) {
    return +Re(s, u, 0);
  }).order(Kd).offset(i);
  return o(t);
}, nL = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, u = {}, c = s.reduce(function(f, d) {
    var p, y = (p = d.type) !== null && p !== void 0 && p.defaultProps ? Ne(Ne({}, d.type.defaultProps), d.props) : d.props, h = y.stackId, v = y.hide;
    if (v)
      return f;
    var b = y[n], g = f[b] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Ge(h)) {
      var x = g.stackGroups[h] || {
        numericAxisId: n,
        cateAxisId: a,
        items: []
      };
      x.items.push(d), g.hasStack = !0, g.stackGroups[h] = x;
    } else
      g.stackGroups[sn("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return Ne(Ne({}, f), {}, Tn({}, b, g));
  }, u), l = {};
  return Object.keys(c).reduce(function(f, d) {
    var p = c[d];
    if (p.hasStack) {
      var y = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(h, v) {
        var b = p.stackGroups[v];
        return Ne(Ne({}, h), {}, Tn({}, v, {
          numericAxisId: n,
          cateAxisId: a,
          items: b.items,
          stackedData: rL(t, b.items, i)
        }));
      }, y);
    }
    return Ne(Ne({}, f), {}, Tn({}, d, p));
  }, l);
}, r_ = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = mR(c, i, s);
    return t.domain([Gs(l), wr(l)]), {
      niceTicks: l
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = gR(f, i, s);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Vo(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !le(a[t.dataKey])) {
      var s = Oo(r, "value", a[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var u = Re(a, le(o) ? t.dataKey : o);
  return le(u) ? null : t.scale(u);
}
var mx = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var u = Re(o, r.dataKey, r.domain[s]);
  return le(u) ? null : r.scale(u) - i / 2 + a;
}, aL = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, iL = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ne(Ne({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Ge(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, oL = function(t) {
  return t.reduce(function(r, n) {
    return [Gs(n.concat([r[0]]).filter(G)), wr(n.concat([r[1]]).filter(G))];
  }, [1 / 0, -1 / 0]);
}, n_ = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, u = s.reduce(function(c, l) {
      var f = oL(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], a[0]), Math.max(u[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, gx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, bx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, mp = function(t, r, n) {
  if (ue(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (G(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (gx.test(t[0])) {
    var i = +gx.exec(t[0])[1];
    a[0] = r[0] - i;
  } else ue(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (G(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (bx.test(t[1])) {
    var o = +bx.exec(t[1])[1];
    a[1] = r[1] + o;
  } else ue(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Go = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = Zh(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, u = i.length; s < u; s++) {
      var c = i[s], l = i[s - 1];
      o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, xx = function(t, r, n) {
  return !t || !t.length || Qr(t, bt(n, "type.defaultProps.domain")) ? r : t;
}, a_ = function(t, r) {
  var n = t.type.defaultProps ? Ne(Ne({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType, l = n.hide;
  return Ne(Ne({}, ie(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: s,
    name: i || a,
    color: Sv(t),
    value: Re(r, a),
    type: u,
    payload: r,
    chartType: c,
    hide: l
  });
};
function hi(e) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hi(e);
}
function wx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wx(Object(r), !0).forEach(function(n) {
      i_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i_(e, t, r) {
  return t = sL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sL(e) {
  var t = uL(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function uL(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cL(e, t) {
  return pL(e) || dL(e, t) || fL(e, t) || lL();
}
function lL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fL(e, t) {
  if (e) {
    if (typeof e == "string") return Ox(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ox(e, t);
  }
}
function Ox(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function pL(e) {
  if (Array.isArray(e)) return e;
}
var Yo = Math.PI / 180, hL = function(t) {
  return t * 180 / Math.PI;
}, je = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Yo * a) * n,
    y: r + Math.sin(-Yo * a) * n
  };
}, o_ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, vL = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, l = ot(t.cx, o, o / 2), f = ot(t.cy, s, s / 2), d = o_(o, s, n), p = ot(t.innerRadius, d, 0), y = ot(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(v, b) {
    var g = r[b], x = g.domain, O = g.reversed, m;
    if (le(g.range))
      a === "angleAxis" ? m = [u, c] : a === "radiusAxis" && (m = [p, y]), O && (m = [m[1], m[0]]);
    else {
      m = g.range;
      var w = m, A = cL(w, 2);
      u = A[0], c = A[1];
    }
    var _ = e_(g, i), P = _.realScaleType, k = _.scale;
    k.domain(x).range(m), t_(k);
    var T = r_(k, rr(rr({}, g), {}, {
      realScaleType: P
    })), $ = rr(rr(rr({}, g), T), {}, {
      range: m,
      radius: y,
      realScaleType: P,
      scale: k,
      cx: l,
      cy: f,
      innerRadius: p,
      outerRadius: y,
      startAngle: u,
      endAngle: c
    });
    return rr(rr({}, v), {}, i_({}, b, $));
  }, {});
}, yL = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, mL = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = yL({
    x: n,
    y: a
  }, {
    x: i,
    y: o
  });
  if (s <= 0)
    return {
      radius: s
    };
  var u = (n - i) / s, c = Math.acos(u);
  return a > o && (c = 2 * Math.PI - c), {
    radius: s,
    angle: hL(c),
    angleInRadian: c
  };
}, gL = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, bL = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, Sx = function(t, r) {
  var n = t.x, a = t.y, i = mL({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = gL(r), f = l.startAngle, d = l.endAngle, p = s, y;
  if (f <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < f; )
      p += 360;
    y = p >= f && p <= d;
  } else {
    for (; p > f; )
      p -= 360;
    for (; p < d; )
      p += 360;
    y = p >= d && p <= f;
  }
  return y ? rr(rr({}, r), {}, {
    radius: o,
    angle: bL(p, r)
  }) : null;
}, s_ = function(t) {
  return !/* @__PURE__ */ Nt(t) && !ue(t) && typeof t != "boolean" ? t.className : "";
};
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
var xL = ["offset"];
function wL(e) {
  return _L(e) || AL(e) || SL(e) || OL();
}
function OL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SL(e, t) {
  if (e) {
    if (typeof e == "string") return gp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gp(e, t);
  }
}
function AL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _L(e) {
  if (Array.isArray(e)) return gp(e);
}
function gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PL(e, t) {
  if (e == null) return {};
  var r = TL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ax(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ax(Object(r), !0).forEach(function(n) {
      EL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ax(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EL(e, t, r) {
  return t = CL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CL(e) {
  var t = jL(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function jL(e, t) {
  if (vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yi.apply(this, arguments);
}
var ML = function(t) {
  var r = t.value, n = t.formatter, a = le(t.children) ? r : t.children;
  return ue(n) ? n(a) : a;
}, $L = function(t, r) {
  var n = it(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, IL = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, u = i, c = u.cx, l = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, y = u.endAngle, h = u.clockWise, v = (f + d) / 2, b = $L(p, y), g = b >= 0 ? 1 : -1, x, O;
  a === "insideStart" ? (x = p + g * o, O = h) : a === "insideEnd" ? (x = y - g * o, O = !h) : a === "end" && (x = y + g * o, O = h), O = b <= 0 ? O : !O;
  var m = je(c, l, v, x), w = je(c, l, v, x + (O ? 1 : -1) * 359), A = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), _ = le(t.id) ? sn("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ C.createElement("text", yi({}, n, {
    dominantBaseline: "central",
    className: de("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("path", {
    id: _,
    d: A
  })), /* @__PURE__ */ C.createElement("textPath", {
    xlinkHref: "#".concat(_)
  }, r));
}, kL = function(t) {
  var r = t.viewBox, n = t.offset, a = t.position, i = r, o = i.cx, s = i.cy, u = i.innerRadius, c = i.outerRadius, l = i.startAngle, f = i.endAngle, d = (l + f) / 2;
  if (a === "outside") {
    var p = je(o, s, c + n, d), y = p.x, h = p.y;
    return {
      x: y,
      y: h,
      textAnchor: y >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (a === "center")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (a === "centerTop")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (a === "centerBottom")
    return {
      x: o,
      y: s,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var v = (u + c) / 2, b = je(o, s, v, d), g = b.x, x = b.y;
  return {
    x: g,
    y: x,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, DL = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, s = o.x, u = o.y, c = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * a, p = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", h = c >= 0 ? 1 : -1, v = h * a, b = h > 0 ? "end" : "start", g = h > 0 ? "start" : "end";
  if (i === "top") {
    var x = {
      x: s + c / 2,
      y: u - f * a,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return We(We({}, x), n ? {
      height: Math.max(u - n.y, 0),
      width: c
    } : {});
  }
  if (i === "bottom") {
    var O = {
      x: s + c / 2,
      y: u + l + d,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return We(We({}, O), n ? {
      height: Math.max(n.y + n.height - (u + l), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var m = {
      x: s - v,
      y: u + l / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return We(We({}, m), n ? {
      width: Math.max(m.x - n.x, 0),
      height: l
    } : {});
  }
  if (i === "right") {
    var w = {
      x: s + c + v,
      y: u + l / 2,
      textAnchor: g,
      verticalAnchor: "middle"
    };
    return We(We({}, w), n ? {
      width: Math.max(n.x + n.width - w.x, 0),
      height: l
    } : {});
  }
  var A = n ? {
    width: c,
    height: l
  } : {};
  return i === "insideLeft" ? We({
    x: s + v,
    y: u + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, A) : i === "insideRight" ? We({
    x: s + c - v,
    y: u + l / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, A) : i === "insideTop" ? We({
    x: s + c / 2,
    y: u + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, A) : i === "insideBottom" ? We({
    x: s + c / 2,
    y: u + l - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, A) : i === "insideTopLeft" ? We({
    x: s + v,
    y: u + d,
    textAnchor: g,
    verticalAnchor: y
  }, A) : i === "insideTopRight" ? We({
    x: s + c - v,
    y: u + d,
    textAnchor: b,
    verticalAnchor: y
  }, A) : i === "insideBottomLeft" ? We({
    x: s + v,
    y: u + l - d,
    textAnchor: g,
    verticalAnchor: p
  }, A) : i === "insideBottomRight" ? We({
    x: s + c - v,
    y: u + l - d,
    textAnchor: b,
    verticalAnchor: p
  }, A) : ia(i) && (G(i.x) || Fr(i.x)) && (G(i.y) || Fr(i.y)) ? We({
    x: s + ot(i.x, c),
    y: u + ot(i.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, A) : We({
    x: s + c / 2,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, A);
}, NL = function(t) {
  return "cx" in t && G(t.cx);
};
function Ve(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = PL(e, xL), a = We({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, u = a.children, c = a.content, l = a.className, f = l === void 0 ? "" : l, d = a.textBreakAll;
  if (!i || le(s) && le(u) && !/* @__PURE__ */ Nt(c) && !ue(c))
    return null;
  if (/* @__PURE__ */ Nt(c))
    return /* @__PURE__ */ Ue(c, a);
  var p;
  if (ue(c)) {
    if (p = /* @__PURE__ */ uO(c, a), /* @__PURE__ */ Nt(p))
      return p;
  } else
    p = ML(a);
  var y = NL(i), h = ie(a, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return IL(a, p, h);
  var v = y ? kL(a) : DL(a);
  return /* @__PURE__ */ C.createElement(_r, yi({
    className: de("recharts-label", f)
  }, h, v, {
    breakAll: d
  }), p);
}
Ve.displayName = "Label";
var u_ = function(t) {
  var r = t.cx, n = t.cy, a = t.angle, i = t.startAngle, o = t.endAngle, s = t.r, u = t.radius, c = t.innerRadius, l = t.outerRadius, f = t.x, d = t.y, p = t.top, y = t.left, h = t.width, v = t.height, b = t.clockWise, g = t.labelViewBox;
  if (g)
    return g;
  if (G(h) && G(v)) {
    if (G(f) && G(d))
      return {
        x: f,
        y: d,
        width: h,
        height: v
      };
    if (G(p) && G(y))
      return {
        x: p,
        y,
        width: h,
        height: v
      };
  }
  return G(f) && G(d) ? {
    x: f,
    y: d,
    width: 0,
    height: 0
  } : G(r) && G(n) ? {
    cx: r,
    cy: n,
    startAngle: i || a || 0,
    endAngle: o || a || 0,
    innerRadius: c || 0,
    outerRadius: l || u || s || 0,
    clockWise: b
  } : t.viewBox ? t.viewBox : {};
}, RL = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ C.createElement(Ve, {
    key: "label-implicit",
    viewBox: r
  }) : Ge(t) ? /* @__PURE__ */ C.createElement(Ve, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Nt(t) ? t.type === Ve ? /* @__PURE__ */ Ue(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ C.createElement(Ve, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ue(t) ? /* @__PURE__ */ C.createElement(Ve, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ia(t) ? /* @__PURE__ */ C.createElement(Ve, yi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, LL = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = u_(t), o = xt(a, Ve).map(function(u, c) {
    return /* @__PURE__ */ Ue(u, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = RL(t.label, r || i);
  return [s].concat(wL(o));
};
Ve.parseViewBox = u_;
Ve.renderCallByParent = LL;
var Kf, _x;
function qL() {
  if (_x) return Kf;
  _x = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Kf = e, Kf;
}
var BL = qL();
const FL = /* @__PURE__ */ _e(BL);
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
var zL = ["valueAccessor"], WL = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function UL(e) {
  return GL(e) || VL(e) || KL(e) || HL();
}
function HL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KL(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function VL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function GL(e) {
  if (Array.isArray(e)) return bp(e);
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Xo() {
  return Xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xo.apply(this, arguments);
}
function Px(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Px(Object(r), !0).forEach(function(n) {
      YL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Px(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YL(e, t, r) {
  return t = XL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XL(e) {
  var t = ZL(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function ZL(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ex(e, t) {
  if (e == null) return {};
  var r = JL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function JL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var QL = function(t) {
  return Array.isArray(t.value) ? FL(t.value) : t.value;
};
function Tt(e) {
  var t = e.valueAccessor, r = t === void 0 ? QL : t, n = Ex(e, zL), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = Ex(n, WL);
  return !a || !a.length ? null : /* @__PURE__ */ C.createElement(pe, {
    className: "recharts-label-list"
  }, a.map(function(l, f) {
    var d = le(i) ? r(l, f) : Re(l && l.payload, i), p = le(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ C.createElement(Ve, Xo({}, ie(l, !0), c, p, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: u,
      viewBox: Ve.parseViewBox(le(o) ? l : Tx(Tx({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Tt.displayName = "LabelList";
function eq(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ C.createElement(Tt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ C.isValidElement(e) || ue(e) ? /* @__PURE__ */ C.createElement(Tt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : ia(e) ? /* @__PURE__ */ C.createElement(Tt, Xo({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function tq(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = xt(n, Tt).map(function(o, s) {
    return /* @__PURE__ */ Ue(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = eq(e.label, t);
  return [i].concat(UL(a));
}
Tt.renderCallByParent = tq;
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function xp() {
  return xp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xp.apply(this, arguments);
}
function Cx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cx(Object(r), !0).forEach(function(n) {
      rq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rq(e, t, r) {
  return t = nq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nq(e) {
  var t = aq(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function aq(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iq = function(t, r) {
  var n = it(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, lo = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, l = u * (s ? 1 : -1) + a, f = Math.asin(u / l) / Yo, d = c ? i : i + o * f, p = je(r, n, l, d), y = je(r, n, a, d), h = c ? i - o * f : i, v = je(r, n, l * Math.cos(f * Yo), h);
  return {
    center: p,
    circleTangency: y,
    lineTangency: v,
    theta: f
  };
}, c_ = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, u = iq(o, s), c = o + u, l = je(r, n, i, o), f = je(r, n, i, c), d = "M ".concat(l.x, ",").concat(l.y, `
    A `).concat(i, ",").concat(i, `,0,
    `).concat(+(Math.abs(u) > 180), ",").concat(+(o > c), `,
    `).concat(f.x, ",").concat(f.y, `
  `);
  if (a > 0) {
    var p = je(r, n, a, o), y = je(r, n, a, c);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(a, ",").concat(a, `,0,
            `).concat(+(Math.abs(u) > 180), ",").concat(+(o <= c), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, oq = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, l = t.endAngle, f = it(l - c), d = lo({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, y = d.lineTangency, h = d.theta, v = lo({
    cx: r,
    cy: n,
    radius: i,
    angle: l,
    sign: -f,
    cornerRadius: o,
    cornerIsExternal: u
  }), b = v.circleTangency, g = v.lineTangency, x = v.theta, O = u ? Math.abs(c - l) : Math.abs(c - l) - h - x;
  if (O < 0)
    return s ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : c_({
      cx: r,
      cy: n,
      innerRadius: a,
      outerRadius: i,
      startAngle: c,
      endAngle: l
    });
  var m = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(i, ",").concat(i, ",0,").concat(+(O > 180), ",").concat(+(f < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(g.x, ",").concat(g.y, `
  `);
  if (a > 0) {
    var w = lo({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), A = w.circleTangency, _ = w.lineTangency, P = w.theta, k = lo({
      cx: r,
      cy: n,
      radius: a,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), T = k.circleTangency, $ = k.lineTangency, M = k.theta, j = u ? Math.abs(c - l) : Math.abs(c - l) - P - M;
    if (j < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat($.x, ",").concat($.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(j > 180), ",").concat(+(f > 0), ",").concat(A.x, ",").concat(A.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, sq = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, l_ = function(t) {
  var r = jx(jx({}, sq), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || l === f)
    return null;
  var p = de("recharts-sector", d), y = o - i, h = ot(s, y, 0, !0), v;
  return h > 0 && Math.abs(l - f) < 360 ? v = oq({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(h, y / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: l,
    endAngle: f
  }) : v = c_({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ C.createElement("path", xp({}, ie(r, !0), {
    className: p,
    d: v,
    role: "img"
  }));
};
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function wp() {
  return wp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wp.apply(this, arguments);
}
function Mx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mx(Object(r), !0).forEach(function(n) {
      uq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uq(e, t, r) {
  return t = cq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cq(e) {
  var t = lq(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function lq(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ix = {
  curveBasisClosed: sM,
  curveBasisOpen: uM,
  curveBasis: oM,
  curveBumpX: K2,
  curveBumpY: V2,
  curveLinearClosed: cM,
  curveLinear: Ns,
  curveMonotoneX: lM,
  curveMonotoneY: fM,
  curveNatural: dM,
  curveStep: pM,
  curveStepAfter: vM,
  curveStepBefore: hM
}, fo = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Pa = function(t) {
  return t.x;
}, Ta = function(t) {
  return t.y;
}, fq = function(t, r) {
  if (ue(t))
    return t;
  var n = "curve".concat(ks(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Ix["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Ix[n] || Ns;
}, dq = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, l = fq(n, s), f = c ? i.filter(function(h) {
    return fo(h);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(h) {
      return fo(h);
    }) : o, y = f.map(function(h, v) {
      return $x($x({}, h), {}, {
        base: p[v]
      });
    });
    return s === "vertical" ? d = ro().y(Ta).x1(Pa).x0(function(h) {
      return h.base.x;
    }) : d = ro().x(Pa).y1(Ta).y0(function(h) {
      return h.base.y;
    }), d.defined(fo).curve(l), d(y);
  }
  return s === "vertical" && G(o) ? d = ro().y(Ta).x1(Pa).x0(o) : G(o) ? d = ro().x(Pa).y1(Ta).y0(o) : d = bS().x(Pa).y(Ta), d.defined(fo).curve(l), d(f);
}, Zr = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? dq(t) : a;
  return /* @__PURE__ */ C.createElement("path", wp({}, ie(t, !1), So(t), {
    className: de("recharts-curve", r),
    d: o,
    ref: i
  }));
}, po = { exports: {} }, ho = { exports: {} }, xe = {};
var kx;
function pq() {
  if (kx) return xe;
  kx = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, p = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, b = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, g = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function x(m) {
    if (typeof m == "object" && m !== null) {
      var w = m.$$typeof;
      switch (w) {
        case t:
          switch (m = m.type, m) {
            case u:
            case c:
            case n:
            case i:
            case a:
            case f:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case l:
                case y:
                case p:
                case o:
                  return m;
                default:
                  return w;
              }
          }
        case r:
          return w;
      }
    }
  }
  function O(m) {
    return x(m) === c;
  }
  return xe.AsyncMode = u, xe.ConcurrentMode = c, xe.ContextConsumer = s, xe.ContextProvider = o, xe.Element = t, xe.ForwardRef = l, xe.Fragment = n, xe.Lazy = y, xe.Memo = p, xe.Portal = r, xe.Profiler = i, xe.StrictMode = a, xe.Suspense = f, xe.isAsyncMode = function(m) {
    return O(m) || x(m) === u;
  }, xe.isConcurrentMode = O, xe.isContextConsumer = function(m) {
    return x(m) === s;
  }, xe.isContextProvider = function(m) {
    return x(m) === o;
  }, xe.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, xe.isForwardRef = function(m) {
    return x(m) === l;
  }, xe.isFragment = function(m) {
    return x(m) === n;
  }, xe.isLazy = function(m) {
    return x(m) === y;
  }, xe.isMemo = function(m) {
    return x(m) === p;
  }, xe.isPortal = function(m) {
    return x(m) === r;
  }, xe.isProfiler = function(m) {
    return x(m) === i;
  }, xe.isStrictMode = function(m) {
    return x(m) === a;
  }, xe.isSuspense = function(m) {
    return x(m) === f;
  }, xe.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === c || m === i || m === a || m === f || m === d || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === p || m.$$typeof === o || m.$$typeof === s || m.$$typeof === l || m.$$typeof === v || m.$$typeof === b || m.$$typeof === g || m.$$typeof === h);
  }, xe.typeOf = x, xe;
}
var we = {};
var Dx;
function hq() {
  return Dx || (Dx = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, n = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, a = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, i = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, o = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, s = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, u = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, c = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, l = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, f = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, d = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, p = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, y = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, h = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, v = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, b = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, g = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function x(E) {
      return typeof E == "string" || typeof E == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      E === n || E === c || E === i || E === a || E === f || E === d || typeof E == "object" && E !== null && (E.$$typeof === y || E.$$typeof === p || E.$$typeof === o || E.$$typeof === s || E.$$typeof === l || E.$$typeof === v || E.$$typeof === b || E.$$typeof === g || E.$$typeof === h);
    }
    function O(E) {
      if (typeof E == "object" && E !== null) {
        var Y = E.$$typeof;
        switch (Y) {
          case t:
            var F = E.type;
            switch (F) {
              case u:
              case c:
              case n:
              case i:
              case a:
              case f:
                return F;
              default:
                var ae = F && F.$$typeof;
                switch (ae) {
                  case s:
                  case l:
                  case y:
                  case p:
                  case o:
                    return ae;
                  default:
                    return Y;
                }
            }
          case r:
            return Y;
        }
      }
    }
    var m = u, w = c, A = s, _ = o, P = t, k = l, T = n, $ = y, M = p, j = r, I = i, D = a, R = f, L = !1;
    function z(E) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N(E) || O(E) === u;
    }
    function N(E) {
      return O(E) === c;
    }
    function B(E) {
      return O(E) === s;
    }
    function q(E) {
      return O(E) === o;
    }
    function H(E) {
      return typeof E == "object" && E !== null && E.$$typeof === t;
    }
    function X(E) {
      return O(E) === l;
    }
    function te(E) {
      return O(E) === n;
    }
    function ne(E) {
      return O(E) === y;
    }
    function ee(E) {
      return O(E) === p;
    }
    function Q(E) {
      return O(E) === r;
    }
    function U(E) {
      return O(E) === i;
    }
    function V(E) {
      return O(E) === a;
    }
    function Z(E) {
      return O(E) === f;
    }
    we.AsyncMode = m, we.ConcurrentMode = w, we.ContextConsumer = A, we.ContextProvider = _, we.Element = P, we.ForwardRef = k, we.Fragment = T, we.Lazy = $, we.Memo = M, we.Portal = j, we.Profiler = I, we.StrictMode = D, we.Suspense = R, we.isAsyncMode = z, we.isConcurrentMode = N, we.isContextConsumer = B, we.isContextProvider = q, we.isElement = H, we.isForwardRef = X, we.isFragment = te, we.isLazy = ne, we.isMemo = ee, we.isPortal = Q, we.isProfiler = U, we.isStrictMode = V, we.isSuspense = Z, we.isValidElementType = x, we.typeOf = O;
  })()), we;
}
var Nx;
function f_() {
  return Nx || (Nx = 1, process.env.NODE_ENV === "production" ? ho.exports = pq() : ho.exports = hq()), ho.exports;
}
var Vf, Rx;
function vq() {
  if (Rx) return Vf;
  Rx = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vf = a() ? Object.assign : function(i, o) {
    for (var s, u = n(i), c, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var f in s)
        t.call(s, f) && (u[f] = s[f]);
      if (e) {
        c = e(s);
        for (var d = 0; d < c.length; d++)
          r.call(s, c[d]) && (u[c[d]] = s[c[d]]);
      }
    }
    return u;
  }, Vf;
}
var Gf, Lx;
function Av() {
  if (Lx) return Gf;
  Lx = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Gf = e, Gf;
}
var Yf, qx;
function d_() {
  return qx || (qx = 1, Yf = Function.call.bind(Object.prototype.hasOwnProperty)), Yf;
}
var Xf, Bx;
function yq() {
  if (Bx) return Xf;
  Bx = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Av(), r = {}, n = /* @__PURE__ */ d_();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (n(i, l)) {
          var f;
          try {
            if (typeof i[l] != "function") {
              var d = Error(
                (u || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = i[l](o, l, u, s, null, t);
          } catch (y) {
            f = y;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + s + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Xf = a, Xf;
}
var Zf, Fx;
function mq() {
  if (Fx) return Zf;
  Fx = 1;
  var e = f_(), t = vq(), r = /* @__PURE__ */ Av(), n = /* @__PURE__ */ d_(), a = /* @__PURE__ */ yq(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Zf = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(N) {
      var B = N && (c && N[c] || N[l]);
      if (typeof B == "function")
        return B;
    }
    var d = "<<anonymous>>", p = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: g(),
      arrayOf: x,
      element: O(),
      elementType: m(),
      instanceOf: w,
      node: k(),
      objectOf: _,
      oneOf: A,
      oneOfType: P,
      shape: $,
      exact: M
    };
    function y(N, B) {
      return N === B ? N !== 0 || 1 / N === 1 / B : N !== N && B !== B;
    }
    function h(N, B) {
      this.message = N, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(N) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, q = 0;
      function H(te, ne, ee, Q, U, V, Z) {
        if (Q = Q || d, V = V || ee, Z !== r) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = Q + ":" + ee;
            !B[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Y] = !0, q++);
          }
        }
        return ne[ee] == null ? te ? ne[ee] === null ? new h("The " + U + " `" + V + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new h("The " + U + " `" + V + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : N(ne, ee, Q, U, V);
      }
      var X = H.bind(null, !1);
      return X.isRequired = H.bind(null, !0), X;
    }
    function b(N) {
      function B(q, H, X, te, ne, ee) {
        var Q = q[H], U = D(Q);
        if (U !== N) {
          var V = R(Q);
          return new h(
            "Invalid " + te + " `" + ne + "` of type " + ("`" + V + "` supplied to `" + X + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return v(B);
    }
    function g() {
      return v(o);
    }
    function x(N) {
      function B(q, H, X, te, ne) {
        if (typeof N != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var ee = q[H];
        if (!Array.isArray(ee)) {
          var Q = D(ee);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected an array."));
        }
        for (var U = 0; U < ee.length; U++) {
          var V = N(ee, U, X, te, ne + "[" + U + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return v(B);
    }
    function O() {
      function N(B, q, H, X, te) {
        var ne = B[q];
        if (!s(ne)) {
          var ee = D(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(N);
    }
    function m() {
      function N(B, q, H, X, te) {
        var ne = B[q];
        if (!e.isValidElementType(ne)) {
          var ee = D(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(N);
    }
    function w(N) {
      function B(q, H, X, te, ne) {
        if (!(q[H] instanceof N)) {
          var ee = N.name || d, Q = z(q[H]);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return v(B);
    }
    function A(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function B(q, H, X, te, ne) {
        for (var ee = q[H], Q = 0; Q < N.length; Q++)
          if (y(ee, N[Q]))
            return null;
        var U = JSON.stringify(N, function(Z, E) {
          var Y = R(E);
          return Y === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + te + " `" + ne + "` of value `" + String(ee) + "` " + ("supplied to `" + X + "`, expected one of " + U + "."));
      }
      return v(B);
    }
    function _(N) {
      function B(q, H, X, te, ne) {
        if (typeof N != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var ee = q[H], Q = D(ee);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected an object."));
        for (var U in ee)
          if (n(ee, U)) {
            var V = N(ee, U, X, te, ne + "." + U, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return v(B);
    }
    function P(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var B = 0; B < N.length; B++) {
        var q = N[B];
        if (typeof q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(q) + " at index " + B + "."
          ), o;
      }
      function H(X, te, ne, ee, Q) {
        for (var U = [], V = 0; V < N.length; V++) {
          var Z = N[V], E = Z(X, te, ne, ee, Q, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && U.push(E.data.expectedType);
        }
        var Y = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new h("Invalid " + ee + " `" + Q + "` supplied to " + ("`" + ne + "`" + Y + "."));
      }
      return v(H);
    }
    function k() {
      function N(B, q, H, X, te) {
        return j(B[q]) ? null : new h("Invalid " + X + " `" + te + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return v(N);
    }
    function T(N, B, q, H, X) {
      return new h(
        (N || "React class") + ": " + B + " type `" + q + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function $(N) {
      function B(q, H, X, te, ne) {
        var ee = q[H], Q = D(ee);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var U in N) {
          var V = N[U];
          if (typeof V != "function")
            return T(X, te, ne, U, R(V));
          var Z = V(ee, U, X, te, ne + "." + U, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return v(B);
    }
    function M(N) {
      function B(q, H, X, te, ne) {
        var ee = q[H], Q = D(ee);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + X + "`, expected `object`."));
        var U = t({}, q[H], N);
        for (var V in U) {
          var Z = N[V];
          if (n(N, V) && typeof Z != "function")
            return T(X, te, ne, V, R(Z));
          if (!Z)
            return new h(
              "Invalid " + te + " `" + ne + "` key `" + V + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(q[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var E = Z(ee, V, X, te, ne + "." + V, r);
          if (E)
            return E;
        }
        return null;
      }
      return v(B);
    }
    function j(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(j);
          if (N === null || s(N))
            return !0;
          var B = f(N);
          if (B) {
            var q = B.call(N), H;
            if (B !== N.entries) {
              for (; !(H = q.next()).done; )
                if (!j(H.value))
                  return !1;
            } else
              for (; !(H = q.next()).done; ) {
                var X = H.value;
                if (X && !j(X[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function I(N, B) {
      return N === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function D(N) {
      var B = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : I(B, N) ? "symbol" : B;
    }
    function R(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var B = D(N);
      if (B === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function L(N) {
      var B = R(N);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function z(N) {
      return !N.constructor || !N.constructor.name ? d : N.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, Zf;
}
var Jf, zx;
function gq() {
  if (zx) return Jf;
  zx = 1;
  var e = /* @__PURE__ */ Av();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Jf = function() {
    function n(o, s, u, c, l, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Jf;
}
var Wx;
function bq() {
  if (Wx) return po.exports;
  if (Wx = 1, process.env.NODE_ENV !== "production") {
    var e = f_(), t = !0;
    po.exports = /* @__PURE__ */ mq()(e.isElement, t);
  } else
    po.exports = /* @__PURE__ */ gq()();
  return po.exports;
}
var xq = /* @__PURE__ */ bq();
const Oe = /* @__PURE__ */ _e(xq);
var wq = Object.getOwnPropertyNames, Oq = Object.getOwnPropertySymbols, Sq = Object.prototype.hasOwnProperty;
function Ux(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function vo(e) {
  return function(r, n, a) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, a);
    var i = a.cache, o = i.get(r), s = i.get(n);
    if (o && s)
      return o === n && s === r;
    i.set(r, n), i.set(n, r);
    var u = e(r, n, a);
    return i.delete(r), i.delete(n), u;
  };
}
function Hx(e) {
  return wq(e).concat(Oq(e));
}
var Aq = Object.hasOwn || (function(e, t) {
  return Sq.call(e, t);
});
function ln(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var _q = "__v", Pq = "__o", Tq = "_owner", Kx = Object.getOwnPropertyDescriptor, Vx = Object.keys;
function Eq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function Cq(e, t) {
  return ln(e.getTime(), t.getTime());
}
function jq(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function Mq(e, t) {
  return e === t;
}
function Gx(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.entries(), o, s, u = 0; (o = i.next()) && !o.done; ) {
    for (var c = t.entries(), l = !1, f = 0; (s = c.next()) && !s.done; ) {
      if (a[f]) {
        f++;
        continue;
      }
      var d = o.value, p = s.value;
      if (r.equals(d[0], p[0], u, f, e, t, r) && r.equals(d[1], p[1], d[0], p[0], e, t, r)) {
        l = a[f] = !0;
        break;
      }
      f++;
    }
    if (!l)
      return !1;
    u++;
  }
  return !0;
}
var $q = ln;
function Iq(e, t, r) {
  var n = Vx(e), a = n.length;
  if (Vx(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!p_(e, t, r, n[a]))
      return !1;
  return !0;
}
function Ea(e, t, r) {
  var n = Hx(e), a = n.length;
  if (Hx(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !p_(e, t, r, i) || (o = Kx(e, i), s = Kx(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function kq(e, t) {
  return ln(e.valueOf(), t.valueOf());
}
function Dq(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Yx(e, t, r) {
  var n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  for (var a = new Array(n), i = e.values(), o, s; (o = i.next()) && !o.done; ) {
    for (var u = t.values(), c = !1, l = 0; (s = u.next()) && !s.done; ) {
      if (!a[l] && r.equals(o.value, s.value, o.value, s.value, e, t, r)) {
        c = a[l] = !0;
        break;
      }
      l++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function Nq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Rq(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function p_(e, t, r, n) {
  return (n === Tq || n === Pq || n === _q) && (e.$$typeof || t.$$typeof) ? !0 : Aq(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var Lq = "[object Arguments]", qq = "[object Boolean]", Bq = "[object Date]", Fq = "[object Error]", zq = "[object Map]", Wq = "[object Number]", Uq = "[object Object]", Hq = "[object RegExp]", Kq = "[object Set]", Vq = "[object String]", Gq = "[object URL]", Yq = Array.isArray, Xx = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Zx = Object.assign, Xq = Object.prototype.toString.call.bind(Object.prototype.toString);
function Zq(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areErrorsEqual, a = e.areFunctionsEqual, i = e.areMapsEqual, o = e.areNumbersEqual, s = e.areObjectsEqual, u = e.arePrimitiveWrappersEqual, c = e.areRegExpsEqual, l = e.areSetsEqual, f = e.areTypedArraysEqual, d = e.areUrlsEqual;
  return function(y, h, v) {
    if (y === h)
      return !0;
    if (y == null || h == null)
      return !1;
    var b = typeof y;
    if (b !== typeof h)
      return !1;
    if (b !== "object")
      return b === "number" ? o(y, h, v) : b === "function" ? a(y, h, v) : !1;
    var g = y.constructor;
    if (g !== h.constructor)
      return !1;
    if (g === Object)
      return s(y, h, v);
    if (Yq(y))
      return t(y, h, v);
    if (Xx != null && Xx(y))
      return f(y, h, v);
    if (g === Date)
      return r(y, h, v);
    if (g === RegExp)
      return c(y, h, v);
    if (g === Map)
      return i(y, h, v);
    if (g === Set)
      return l(y, h, v);
    var x = Xq(y);
    return x === Bq ? r(y, h, v) : x === Hq ? c(y, h, v) : x === zq ? i(y, h, v) : x === Kq ? l(y, h, v) : x === Uq ? typeof y.then != "function" && typeof h.then != "function" && s(y, h, v) : x === Gq ? d(y, h, v) : x === Fq ? n(y, h, v) : x === Lq ? s(y, h, v) : x === qq || x === Wq || x === Vq ? u(y, h, v) : !1;
  };
}
function Jq(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? Ea : Eq,
    areDatesEqual: Cq,
    areErrorsEqual: jq,
    areFunctionsEqual: Mq,
    areMapsEqual: n ? Ux(Gx, Ea) : Gx,
    areNumbersEqual: $q,
    areObjectsEqual: n ? Ea : Iq,
    arePrimitiveWrappersEqual: kq,
    areRegExpsEqual: Dq,
    areSetsEqual: n ? Ux(Yx, Ea) : Yx,
    areTypedArraysEqual: n ? Ea : Nq,
    areUrlsEqual: Rq
  };
  if (r && (a = Zx({}, a, r(a))), t) {
    var i = vo(a.areArraysEqual), o = vo(a.areMapsEqual), s = vo(a.areObjectsEqual), u = vo(a.areSetsEqual);
    a = Zx({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return a;
}
function Qq(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function eB(e) {
  var t = e.circular, r = e.comparator, n = e.createState, a = e.equals, i = e.strict;
  if (n)
    return function(u, c) {
      var l = n(), f = l.cache, d = f === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : f, p = l.meta;
      return r(u, c, {
        cache: d,
        equals: a,
        meta: p,
        strict: i
      });
    };
  if (t)
    return function(u, c) {
      return r(u, c, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: a,
        meta: void 0,
        strict: i
      });
    };
  var o = {
    cache: void 0,
    equals: a,
    meta: void 0,
    strict: i
  };
  return function(u, c) {
    return r(u, c, o);
  };
}
var tB = Mr();
Mr({ strict: !0 });
Mr({ circular: !0 });
Mr({
  circular: !0,
  strict: !0
});
Mr({
  createInternalComparator: function() {
    return ln;
  }
});
Mr({
  strict: !0,
  createInternalComparator: function() {
    return ln;
  }
});
Mr({
  circular: !0,
  createInternalComparator: function() {
    return ln;
  }
});
Mr({
  circular: !0,
  createInternalComparator: function() {
    return ln;
  },
  strict: !0
});
function Mr(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = Jq(e), u = Zq(s), c = n ? n(u) : Qq(u);
  return eB({ circular: r, comparator: u, createState: a, equals: c, strict: o });
}
function rB(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Jx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : rB(a);
  };
  requestAnimationFrame(n);
}
function Op(e) {
  "@babel/helpers - typeof";
  return Op = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Op(e);
}
function nB(e) {
  return sB(e) || oB(e) || iB(e) || aB();
}
function aB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iB(e, t) {
  if (e) {
    if (typeof e == "string") return Qx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qx(e, t);
  }
}
function Qx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function sB(e) {
  if (Array.isArray(e)) return e;
}
function uB() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = nB(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          Jx(a.bind(null, c), u);
          return;
        }
        a(u), Jx(a.bind(null, c));
        return;
      }
      Op(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(i) {
      r = !1, n(i);
    },
    subscribe: function(i) {
      return t = i, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function e1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function t1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? e1(Object(r), !0).forEach(function(n) {
      h_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h_(e, t, r) {
  return t = cB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cB(e) {
  var t = lB(e, "string");
  return xi(t) === "symbol" ? t : String(t);
}
function lB(e, t) {
  if (xi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fB = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, dB = function(t) {
  return t;
}, pB = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Fa = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return t1(t1({}, n), {}, h_({}, a, t(a, r[a])));
  }, {});
}, r1 = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(pB(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, hB = process.env.NODE_ENV !== "production", Zo = function(t, r, n, a, i, o, s, u) {
  if (hB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, s, u], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function vB(e, t) {
  return gB(e) || mB(e, t) || v_(e, t) || yB();
}
function yB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function gB(e) {
  if (Array.isArray(e)) return e;
}
function bB(e) {
  return OB(e) || wB(e) || v_(e) || xB();
}
function xB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v_(e, t) {
  if (e) {
    if (typeof e == "string") return Sp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sp(e, t);
  }
}
function wB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function OB(e) {
  if (Array.isArray(e)) return Sp(e);
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Jo = 1e-4, y_ = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, m_ = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, n1 = function(t, r) {
  return function(n) {
    var a = y_(t, r);
    return m_(a, n);
  };
}, SB = function(t, r) {
  return function(n) {
    var a = y_(t, r), i = [].concat(bB(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return m_(i, n);
  };
}, a1 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0], i = r[1], o = r[2], s = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        a = 0, i = 0, o = 1, s = 1;
        break;
      case "ease":
        a = 0.25, i = 0.1, o = 0.25, s = 1;
        break;
      case "ease-in":
        a = 0.42, i = 0, o = 1, s = 1;
        break;
      case "ease-out":
        a = 0.42, i = 0, o = 0.58, s = 1;
        break;
      case "ease-in-out":
        a = 0, i = 0, o = 0.58, s = 1;
        break;
      default: {
        var u = r[0].split("(");
        if (u[0] === "cubic-bezier" && u[1].split(")")[0].split(",").length === 4) {
          var c = u[1].split(")")[0].split(",").map(function(v) {
            return parseFloat(v);
          }), l = vB(c, 4);
          a = l[0], i = l[1], o = l[2], s = l[3];
        } else
          Zo(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Zo([a, o, i, s].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = n1(a, o), d = n1(i, s), p = SB(a, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, h = function(b) {
    for (var g = b > 1 ? 1 : b, x = g, O = 0; O < 8; ++O) {
      var m = f(x) - g, w = p(x);
      if (Math.abs(m - g) < Jo || w < Jo)
        return d(x);
      x = y(x - m / w);
    }
    return d(x);
  };
  return h.isStepper = !1, h;
}, AB = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, u = function(l, f, d) {
    var p = -(l - f) * n, y = d * i, h = d + (p - y) * s / 1e3, v = d * s / 1e3 + l;
    return Math.abs(v - f) < Jo && Math.abs(h) < Jo ? [f, 0] : [v, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, _B = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var a = r[0];
  if (typeof a == "string")
    switch (a) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return a1(a);
      case "spring":
        return AB();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return a1(a);
        Zo(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Zo(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function i1(e) {
  return EB(e) || TB(e) || g_(e) || PB();
}
function PB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function EB(e) {
  if (Array.isArray(e)) return _p(e);
}
function o1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o1(Object(r), !0).forEach(function(n) {
      Ap(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ap(e, t, r) {
  return t = CB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CB(e) {
  var t = jB(e, "string");
  return wi(t) === "symbol" ? t : String(t);
}
function jB(e, t) {
  if (wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function MB(e, t) {
  return kB(e) || IB(e, t) || g_(e, t) || $B();
}
function $B() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g_(e, t) {
  if (e) {
    if (typeof e == "string") return _p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _p(e, t);
  }
}
function _p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function IB(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function kB(e) {
  if (Array.isArray(e)) return e;
}
var Qo = function(t, r, n) {
  return t + (r - t) * n;
}, Pp = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, DB = function e(t, r, n) {
  var a = Fa(function(i, o) {
    if (Pp(o)) {
      var s = t(o.from, o.to, o.velocity), u = MB(s, 2), c = u[0], l = u[1];
      return et(et({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? Fa(function(i, o) {
    return Pp(o) ? et(et({}, o), {}, {
      velocity: Qo(o.velocity, a[i].velocity, n),
      from: Qo(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const NB = (function(e, t, r, n, a) {
  var i = fB(e, t), o = i.reduce(function(v, b) {
    return et(et({}, v), {}, Ap({}, b, [e[b], t[b]]));
  }, {}), s = i.reduce(function(v, b) {
    return et(et({}, v), {}, Ap({}, b, {
      from: e[b],
      velocity: 0,
      to: t[b]
    }));
  }, {}), u = -1, c, l, f = function() {
    return null;
  }, d = function() {
    return Fa(function(b, g) {
      return g.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(Pp).length;
  }, y = function(b) {
    c || (c = b);
    var g = b - c, x = g / r.dt;
    s = DB(r, s, x), a(et(et(et({}, e), t), d())), c = b, p() || (u = requestAnimationFrame(f));
  }, h = function(b) {
    l || (l = b);
    var g = (b - l) / n, x = Fa(function(m, w) {
      return Qo.apply(void 0, i1(w).concat([r(g)]));
    }, o);
    if (a(et(et(et({}, e), t), x)), g < 1)
      u = requestAnimationFrame(f);
    else {
      var O = Fa(function(m, w) {
        return Qo.apply(void 0, i1(w).concat([r(1)]));
      }, o);
      a(et(et(et({}, e), t), O));
    }
  };
  return f = r.isStepper ? y : h, function() {
    return requestAnimationFrame(f), function() {
      cancelAnimationFrame(u);
    };
  };
});
function Ln(e) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ln(e);
}
var RB = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function LB(e, t) {
  if (e == null) return {};
  var r = qB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Qf(e) {
  return WB(e) || zB(e) || FB(e) || BB();
}
function BB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FB(e, t) {
  if (e) {
    if (typeof e == "string") return Tp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Tp(e, t);
  }
}
function zB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function WB(e) {
  if (Array.isArray(e)) return Tp(e);
}
function Tp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function s1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $t(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s1(Object(r), !0).forEach(function(n) {
      Da(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Da(e, t, r) {
  return t = b_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function HB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, b_(n.key), n);
  }
}
function KB(e, t, r) {
  return t && HB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function b_(e) {
  var t = VB(e, "string");
  return Ln(t) === "symbol" ? t : String(t);
}
function VB(e, t) {
  if (Ln(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function GB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ep(e, t);
}
function Ep(e, t) {
  return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ep(e, t);
}
function YB(e) {
  var t = XB();
  return function() {
    var n = es(e), a;
    if (t) {
      var i = es(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Cp(this, a);
  };
}
function Cp(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return jp(e);
}
function jp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function XB() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function es(e) {
  return es = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, es(e);
}
var Bt = /* @__PURE__ */ (function(e) {
  GB(r, e);
  var t = YB(r);
  function r(n, a) {
    var i;
    UB(this, r), i = t.call(this, n, a);
    var o = i.props, s = o.isActive, u = o.attributeName, c = o.from, l = o.to, f = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(jp(i)), i.changeStyle = i.changeStyle.bind(jp(i)), !s || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: l
      }), Cp(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, Cp(i);
      i.state = {
        style: u ? Da({}, u, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return KB(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.isActive, o = a.canBegin;
      this.mounted = !0, !(!i || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(a) {
      var i = this.props, o = i.isActive, s = i.canBegin, u = i.attributeName, c = i.shouldReAnimate, l = i.to, f = i.from, d = this.state.style;
      if (s) {
        if (!o) {
          var p = {
            style: u ? Da({}, u, l) : l
          };
          this.state && d && (u && d[u] !== l || !u && d !== l) && this.setState(p);
          return;
        }
        if (!(tB(a.to, l) && a.canBegin && a.isActive)) {
          var y = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var h = y || c ? f : a.to;
          if (this.state && d) {
            var v = {
              style: u ? Da({}, u, h) : h
            };
            (u && d[u] !== h || !u && d !== h) && this.setState(v);
          }
          this.runAnimation($t($t({}, this.props), {}, {
            from: h,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var a = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), a && a();
    }
  }, {
    key: "handleStyleChange",
    value: function(a) {
      this.changeStyle(a);
    }
  }, {
    key: "changeStyle",
    value: function(a) {
      this.mounted && this.setState({
        style: a
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(a) {
      var i = this, o = a.from, s = a.to, u = a.duration, c = a.easing, l = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = NB(o, s, _B(c), u, this.changeStyle), y = function() {
        i.stopJSAnimation = p();
      };
      this.manager.start([d, l, y, u, f]);
    }
  }, {
    key: "runStepAnimation",
    value: function(a) {
      var i = this, o = a.steps, s = a.begin, u = a.onAnimationStart, c = o[0], l = c.style, f = c.duration, d = f === void 0 ? 0 : f, p = function(h, v, b) {
        if (b === 0)
          return h;
        var g = v.duration, x = v.easing, O = x === void 0 ? "ease" : x, m = v.style, w = v.properties, A = v.onAnimationEnd, _ = b > 0 ? o[b - 1] : v, P = w || Object.keys(m);
        if (typeof O == "function" || O === "spring")
          return [].concat(Qf(h), [i.runJSAnimation.bind(i, {
            from: _.style,
            to: m,
            duration: g,
            easing: O
          }), g]);
        var k = r1(P, g, O), T = $t($t($t({}, _.style), m), {}, {
          transition: k
        });
        return [].concat(Qf(h), [T, g, A]).filter(dB);
      };
      return this.manager.start([u].concat(Qf(o.reduce(p, [l, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = uB());
      var i = a.begin, o = a.duration, s = a.attributeName, u = a.to, c = a.easing, l = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var h = s ? Da({}, s, u) : u, v = r1(Object.keys(h), o, c);
      y.start([l, i, $t($t({}, h), {}, {
        transition: v
      }), o, f]);
    }
  }, {
    key: "render",
    value: function() {
      var a = this.props, i = a.children;
      a.begin;
      var o = a.duration;
      a.attributeName, a.easing;
      var s = a.isActive;
      a.steps, a.from, a.to, a.canBegin, a.onAnimationEnd, a.shouldReAnimate, a.onAnimationReStart;
      var u = LB(a, RB), c = Kr.count(i), l = this.state.style;
      if (typeof i == "function")
        return i(l);
      if (!s || c === 0 || o <= 0)
        return i;
      var f = function(p) {
        var y = p.props, h = y.style, v = h === void 0 ? {} : h, b = y.className, g = /* @__PURE__ */ Ue(p, $t($t({}, u), {}, {
          style: $t($t({}, v), l),
          className: b
        }));
        return g;
      };
      return c === 1 ? f(Kr.only(i)) : /* @__PURE__ */ C.createElement("div", null, Kr.map(i, function(d) {
        return f(d);
      }));
    }
  }]), r;
})(jt);
Bt.displayName = "Animate";
Bt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Bt.propTypes = {
  from: Oe.oneOfType([Oe.object, Oe.string]),
  to: Oe.oneOfType([Oe.object, Oe.string]),
  attributeName: Oe.string,
  // animation duration
  duration: Oe.number,
  begin: Oe.number,
  easing: Oe.oneOfType([Oe.string, Oe.func]),
  steps: Oe.arrayOf(Oe.shape({
    duration: Oe.number.isRequired,
    style: Oe.object.isRequired,
    easing: Oe.oneOfType([Oe.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), Oe.func]),
    // transition css properties(dash case), optional
    properties: Oe.arrayOf("string"),
    onAnimationEnd: Oe.func
  })),
  children: Oe.oneOfType([Oe.node, Oe.func]),
  isActive: Oe.bool,
  canBegin: Oe.bool,
  onAnimationEnd: Oe.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: Oe.bool,
  onAnimationStart: Oe.func,
  onAnimationReStart: Oe.func
};
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function ts() {
  return ts = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ts.apply(this, arguments);
}
function ZB(e, t) {
  return t3(e) || e3(e, t) || QB(e, t) || JB();
}
function JB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QB(e, t) {
  if (e) {
    if (typeof e == "string") return u1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u1(e, t);
  }
}
function u1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function e3(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function t3(e) {
  if (Array.isArray(e)) return e;
}
function c1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function l1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? c1(Object(r), !0).forEach(function(n) {
      r3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r3(e, t, r) {
  return t = n3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n3(e) {
  var t = a3(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function a3(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var f1 = function(t, r, n, a, i) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2), s = a >= 0 ? 1 : -1, u = n >= 0 ? 1 : -1, c = a >= 0 && n >= 0 || a < 0 && n < 0 ? 1 : 0, l;
  if (o > 0 && i instanceof Array) {
    for (var f = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      f[d] = i[d] > o ? o : i[d];
    l = "M".concat(t, ",").concat(r + s * f[0]), f[0] > 0 && (l += "A ".concat(f[0], ",").concat(f[0], ",0,0,").concat(c, ",").concat(t + u * f[0], ",").concat(r)), l += "L ".concat(t + n - u * f[1], ",").concat(r), f[1] > 0 && (l += "A ".concat(f[1], ",").concat(f[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + s * f[1])), l += "L ".concat(t + n, ",").concat(r + a - s * f[2]), f[2] > 0 && (l += "A ".concat(f[2], ",").concat(f[2], ",0,0,").concat(c, `,
        `).concat(t + n - u * f[2], ",").concat(r + a)), l += "L ".concat(t + u * f[3], ",").concat(r + a), f[3] > 0 && (l += "A ".concat(f[3], ",").concat(f[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + a - s * f[3])), l += "Z";
  } else if (o > 0 && i === +i && i > 0) {
    var y = Math.min(o, i);
    l = "M ".concat(t, ",").concat(r + s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + u * y, ",").concat(r, `
            L `).concat(t + n - u * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + s * y, `
            L `).concat(t + n, ",").concat(r + a - s * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n - u * y, ",").concat(r + a, `
            L `).concat(t + u * y, ",").concat(r + a, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t, ",").concat(r + a - s * y, " Z");
  } else
    l = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(a, " h ").concat(-n, " Z");
  return l;
}, i3 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(i, i + s), l = Math.max(i, i + s), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= l && a >= f && a <= d;
  }
  return !1;
}, o3 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, _v = function(t) {
  var r = l1(l1({}, o3), t), n = Me(), a = he(-1), i = ZB(a, 2), o = i[0], s = i[1];
  Le(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var O = n.current.getTotalLength();
        O && s(O);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, l = r.width, f = r.height, d = r.radius, p = r.className, y = r.animationEasing, h = r.animationDuration, v = r.animationBegin, b = r.isAnimationActive, g = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || l !== +l || f !== +f || l === 0 || f === 0)
    return null;
  var x = de("recharts-rectangle", p);
  return g ? /* @__PURE__ */ C.createElement(Bt, {
    canBegin: o > 0,
    from: {
      width: l,
      height: f,
      x: u,
      y: c
    },
    to: {
      width: l,
      height: f,
      x: u,
      y: c
    },
    duration: h,
    animationEasing: y,
    isActive: g
  }, function(O) {
    var m = O.width, w = O.height, A = O.x, _ = O.y;
    return /* @__PURE__ */ C.createElement(Bt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      isActive: b,
      easing: y
    }, /* @__PURE__ */ C.createElement("path", ts({}, ie(r, !0), {
      className: x,
      d: f1(A, _, m, w, d),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("path", ts({}, ie(r, !0), {
    className: x,
    d: f1(u, c, l, f, d)
  }));
}, s3 = ["points", "className", "baseLinePoints", "connectNulls"];
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wn.apply(this, arguments);
}
function u3(e, t) {
  if (e == null) return {};
  var r = c3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function c3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function d1(e) {
  return p3(e) || d3(e) || f3(e) || l3();
}
function l3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f3(e, t) {
  if (e) {
    if (typeof e == "string") return Mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mp(e, t);
  }
}
function d3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function p3(e) {
  if (Array.isArray(e)) return Mp(e);
}
function Mp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var p1 = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, h3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    p1(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), p1(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, za = function(t, r) {
  var n = h3(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(d1(i), d1(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, v3 = function(t, r, n) {
  var a = za(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(za(r.reverse(), n).slice(1));
}, y3 = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = u3(t, s3);
  if (!r || !r.length)
    return null;
  var s = de("recharts-polygon", n);
  if (a && a.length) {
    var u = o.stroke && o.stroke !== "none", c = v3(r, a, i);
    return /* @__PURE__ */ C.createElement("g", {
      className: s
    }, /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), u ? /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
      fill: "none",
      d: za(r, i)
    })) : null, u ? /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
      fill: "none",
      d: za(a, i)
    })) : null);
  }
  var l = za(r, i);
  return /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
    fill: l.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: l
  }));
};
function $p() {
  return $p = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $p.apply(this, arguments);
}
var Ki = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = de("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ C.createElement("circle", $p({}, ie(t, !1), So(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
var m3 = ["x", "y", "top", "left", "width", "height", "className"];
function Ip() {
  return Ip = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ip.apply(this, arguments);
}
function h1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function g3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? h1(Object(r), !0).forEach(function(n) {
      b3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b3(e, t, r) {
  return t = x3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function x3(e) {
  var t = w3(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function w3(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O3(e, t) {
  if (e == null) return {};
  var r = S3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function S3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var A3 = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, _3 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, l = t.width, f = l === void 0 ? 0 : l, d = t.height, p = d === void 0 ? 0 : d, y = t.className, h = O3(t, m3), v = g3({
    x: n,
    y: i,
    top: s,
    left: c,
    width: f,
    height: p
  }, h);
  return !G(n) || !G(i) || !G(f) || !G(p) || !G(s) || !G(c) ? null : /* @__PURE__ */ C.createElement("path", Ip({}, ie(v, !0), {
    className: de("recharts-cross", y),
    d: A3(n, i, f, p, s, c)
  }));
}, ed, v1;
function P3() {
  if (v1) return ed;
  v1 = 1;
  var e = Vs(), t = $A(), r = Qt();
  function n(a, i) {
    return a && a.length ? e(a, r(i, 2), t) : void 0;
  }
  return ed = n, ed;
}
var T3 = P3();
const E3 = /* @__PURE__ */ _e(T3);
var td, y1;
function C3() {
  if (y1) return td;
  y1 = 1;
  var e = Vs(), t = Qt(), r = IA();
  function n(a, i) {
    return a && a.length ? e(a, t(i, 2), r) : void 0;
  }
  return td = n, td;
}
var j3 = C3();
const M3 = /* @__PURE__ */ _e(j3);
var $3 = ["cx", "cy", "angle", "ticks", "axisLine"], I3 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wa.apply(this, arguments);
}
function m1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? m1(Object(r), !0).forEach(function(n) {
      Zs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g1(e, t) {
  if (e == null) return {};
  var r = k3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function k3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function D3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, w_(n.key), n);
  }
}
function N3(e, t, r) {
  return t && b1(e.prototype, t), r && b1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function R3(e, t, r) {
  return t = rs(t), L3(e, x_() ? Reflect.construct(t, r || [], rs(e).constructor) : t.apply(e, r));
}
function L3(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q3(e);
}
function q3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function x_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (x_ = function() {
    return !!e;
  })();
}
function rs(e) {
  return rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rs(e);
}
function B3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kp(e, t);
}
function kp(e, t) {
  return kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, kp(e, t);
}
function Zs(e, t, r) {
  return t = w_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w_(e) {
  var t = F3(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function F3(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Js = /* @__PURE__ */ (function(e) {
  function t() {
    return D3(this, t), R3(this, t, arguments);
  }
  return B3(t, e), N3(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var a = n.coordinate, i = this.props, o = i.angle, s = i.cx, u = i.cy;
        return je(s, u, a, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, a;
      switch (n) {
        case "left":
          a = "end";
          break;
        case "right":
          a = "start";
          break;
        default:
          a = "middle";
          break;
      }
      return a;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = E3(s, function(l) {
        return l.coordinate || 0;
      }), c = M3(s, function(l) {
        return l.coordinate || 0;
      });
      return {
        cx: a,
        cy: i,
        startAngle: o,
        endAngle: o,
        innerRadius: c.coordinate || 0,
        outerRadius: u.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = n.axisLine, c = g1(n, $3), l = s.reduce(function(y, h) {
        return [Math.min(y[0], h.coordinate), Math.max(y[1], h.coordinate)];
      }, [1 / 0, -1 / 0]), f = je(a, i, l[0], o), d = je(a, i, l[1], o), p = Dr(Dr(Dr({}, ie(c, !1)), {}, {
        fill: "none"
      }, ie(u, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ C.createElement("line", Wa({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, u = a.tickFormatter, c = a.stroke, l = g1(a, I3), f = this.getTickTextAnchor(), d = ie(l, !1), p = ie(o, !1), y = i.map(function(h, v) {
        var b = n.getTickValueCoord(h), g = Dr(Dr(Dr(Dr({
          textAnchor: f,
          transform: "rotate(".concat(90 - s, ", ").concat(b.x, ", ").concat(b.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: c
        }, p), {}, {
          index: v
        }, b), {}, {
          payload: h
        });
        return /* @__PURE__ */ C.createElement(pe, Wa({
          className: de("recharts-polar-radius-axis-tick", s_(o)),
          key: "tick-".concat(h.coordinate)
        }, en(n.props, h, v)), t.renderTickItem(o, g, u ? u(h.value, v) : h.value));
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: "recharts-polar-radius-axis-ticks"
      }, y);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.axisLine, o = n.tick;
      return !a || !a.length ? null : /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-polar-radius-axis", this.props.className)
      }, i && this.renderAxisLine(), o && this.renderTicks(), Ve.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(_r, Wa({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
})(jt);
Zs(Js, "displayName", "PolarRadiusAxis");
Zs(Js, "axisType", "radiusAxis");
Zs(Js, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
}
function Br() {
  return Br = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Br.apply(this, arguments);
}
function x1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x1(Object(r), !0).forEach(function(n) {
      Qs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function w1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, S_(n.key), n);
  }
}
function W3(e, t, r) {
  return t && w1(e.prototype, t), r && w1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function U3(e, t, r) {
  return t = ns(t), H3(e, O_() ? Reflect.construct(t, r || [], ns(e).constructor) : t.apply(e, r));
}
function H3(e, t) {
  if (t && (Bn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return K3(e);
}
function K3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function O_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (O_ = function() {
    return !!e;
  })();
}
function ns(e) {
  return ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ns(e);
}
function V3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Dp(e, t);
}
function Dp(e, t) {
  return Dp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Dp(e, t);
}
function Qs(e, t, r) {
  return t = S_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S_(e) {
  var t = G3(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function G3(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Y3 = Math.PI / 180, O1 = 1e-5, eu = /* @__PURE__ */ (function(e) {
  function t() {
    return z3(this, t), U3(this, t, arguments);
  }
  return V3(t, e), W3(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var a = this.props, i = a.cx, o = a.cy, s = a.radius, u = a.orientation, c = a.tickSize, l = c || 8, f = je(i, o, s, n.coordinate), d = je(i, o, s + (u === "inner" ? -1 : 1) * l, n.coordinate);
        return {
          x1: f.x,
          y1: f.y,
          x2: d.x,
          y2: d.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var a = this.props.orientation, i = Math.cos(-n.coordinate * Y3), o;
      return i > O1 ? o = a === "outer" ? "start" : "end" : i < -O1 ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, u = n.axisLineType, c = Nr(Nr({}, ie(this.props, !1)), {}, {
        fill: "none"
      }, ie(s, !1));
      if (u === "circle")
        return /* @__PURE__ */ C.createElement(Ki, Br({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return je(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ C.createElement(y3, Br({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.tickLine, u = a.tickFormatter, c = a.stroke, l = ie(this.props, !1), f = ie(o, !1), d = Nr(Nr({}, l), {}, {
        fill: "none"
      }, ie(s, !1)), p = i.map(function(y, h) {
        var v = n.getTickLineCoord(y), b = n.getTickTextAnchor(y), g = Nr(Nr(Nr({
          textAnchor: b
        }, l), {}, {
          stroke: "none",
          fill: c
        }, f), {}, {
          index: h,
          payload: y,
          x: v.x2,
          y: v.y2
        });
        return /* @__PURE__ */ C.createElement(pe, Br({
          className: de("recharts-polar-angle-axis-tick", s_(o)),
          key: "tick-".concat(y.coordinate)
        }, en(n.props, y, h)), s && /* @__PURE__ */ C.createElement("line", Br({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, v)), o && t.renderTickItem(o, g, u ? u(y.value, h) : y.value));
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.ticks, i = n.radius, o = n.axisLine;
      return i <= 0 || !a || !a.length ? null : /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-polar-angle-axis", this.props.className)
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(_r, Br({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
})(jt);
Qs(eu, "displayName", "PolarAngleAxis");
Qs(eu, "axisType", "angleAxis");
Qs(eu, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var rd, S1;
function X3() {
  if (S1) return rd;
  S1 = 1;
  var e = eS(), t = e(Object.getPrototypeOf, Object);
  return rd = t, rd;
}
var nd, A1;
function Z3() {
  if (A1) return nd;
  A1 = 1;
  var e = fr(), t = X3(), r = dr(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, s = i.hasOwnProperty, u = o.call(Object);
  function c(l) {
    if (!r(l) || e(l) != n)
      return !1;
    var f = t(l);
    if (f === null)
      return !0;
    var d = s.call(f, "constructor") && f.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == u;
  }
  return nd = c, nd;
}
var J3 = Z3();
const Q3 = /* @__PURE__ */ _e(J3);
var ad, _1;
function e5() {
  if (_1) return ad;
  _1 = 1;
  var e = fr(), t = dr(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return ad = n, ad;
}
var t5 = e5();
const r5 = /* @__PURE__ */ _e(t5);
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function as() {
  return as = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, as.apply(this, arguments);
}
function n5(e, t) {
  return s5(e) || o5(e, t) || i5(e, t) || a5();
}
function a5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i5(e, t) {
  if (e) {
    if (typeof e == "string") return P1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P1(e, t);
  }
}
function P1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function o5(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function s5(e) {
  if (Array.isArray(e)) return e;
}
function T1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function E1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T1(Object(r), !0).forEach(function(n) {
      u5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u5(e, t, r) {
  return t = c5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c5(e) {
  var t = l5(e, "string");
  return Ai(t) == "symbol" ? t : t + "";
}
function l5(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C1 = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, f5 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, d5 = function(t) {
  var r = E1(E1({}, f5), t), n = Me(), a = he(-1), i = n5(a, 2), o = i[0], s = i[1];
  Le(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var x = n.current.getTotalLength();
        x && s(x);
      } catch {
      }
  }, []);
  var u = r.x, c = r.y, l = r.upperWidth, f = r.lowerWidth, d = r.height, p = r.className, y = r.animationEasing, h = r.animationDuration, v = r.animationBegin, b = r.isUpdateAnimationActive;
  if (u !== +u || c !== +c || l !== +l || f !== +f || d !== +d || l === 0 && f === 0 || d === 0)
    return null;
  var g = de("recharts-trapezoid", p);
  return b ? /* @__PURE__ */ C.createElement(Bt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: u,
      y: c
    },
    to: {
      upperWidth: l,
      lowerWidth: f,
      height: d,
      x: u,
      y: c
    },
    duration: h,
    animationEasing: y,
    isActive: b
  }, function(x) {
    var O = x.upperWidth, m = x.lowerWidth, w = x.height, A = x.x, _ = x.y;
    return /* @__PURE__ */ C.createElement(Bt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      easing: y
    }, /* @__PURE__ */ C.createElement("path", as({}, ie(r, !0), {
      className: g,
      d: C1(A, _, O, m, w),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("g", null, /* @__PURE__ */ C.createElement("path", as({}, ie(r, !0), {
    className: g,
    d: C1(u, c, l, f, d)
  })));
}, p5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
function h5(e, t) {
  if (e == null) return {};
  var r = v5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function v5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function j1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function is(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? j1(Object(r), !0).forEach(function(n) {
      y5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y5(e, t, r) {
  return t = m5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m5(e) {
  var t = g5(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function g5(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function b5(e, t) {
  return is(is({}, t), e);
}
function x5(e, t) {
  return e === "symbols";
}
function M1(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ C.createElement(_v, r);
    case "trapezoid":
      return /* @__PURE__ */ C.createElement(d5, r);
    case "sector":
      return /* @__PURE__ */ C.createElement(l_, r);
    case "symbols":
      if (x5(t))
        return /* @__PURE__ */ C.createElement(Gh, r);
      break;
    default:
      return null;
  }
}
function w5(e) {
  return /* @__PURE__ */ Nt(e) ? e.props : e;
}
function A_(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? b5 : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, u = h5(e, p5), c;
  if (/* @__PURE__ */ Nt(t))
    c = /* @__PURE__ */ Ue(t, is(is({}, u), w5(t)));
  else if (ue(t))
    c = t(u);
  else if (Q3(t) && !r5(t)) {
    var l = a(t, u);
    c = /* @__PURE__ */ C.createElement(M1, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = u;
    c = /* @__PURE__ */ C.createElement(M1, {
      shapeType: r,
      elementProps: f
    });
  }
  return s ? /* @__PURE__ */ C.createElement(pe, {
    className: o
  }, c) : c;
}
function tu(e, t) {
  return t != null && "trapezoids" in e.props;
}
function ru(e, t) {
  return t != null && "sectors" in e.props;
}
function Pi(e, t) {
  return t != null && "points" in e.props;
}
function O5(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function S5(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function A5(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function _5(e, t) {
  var r;
  return tu(e, t) ? r = O5 : ru(e, t) ? r = S5 : Pi(e, t) && (r = A5), r;
}
function P5(e, t) {
  var r;
  return tu(e, t) ? r = "trapezoids" : ru(e, t) ? r = "sectors" : Pi(e, t) && (r = "points"), r;
}
function T5(e, t) {
  if (tu(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (ru(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Pi(e, t) ? t.payload : {};
}
function E5(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = P5(r, t), i = T5(r, t), o = n.filter(function(u, c) {
    var l = Qr(i, u), f = r.props[a].filter(function(y) {
      var h = _5(r, t);
      return h(y, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return l && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var xo;
function Fn(e) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fn(e);
}
function On() {
  return On = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, On.apply(this, arguments);
}
function $1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $1(Object(r), !0).forEach(function(n) {
      _t(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function C5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function I1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, P_(n.key), n);
  }
}
function j5(e, t, r) {
  return t && I1(e.prototype, t), r && I1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function M5(e, t, r) {
  return t = os(t), $5(e, __() ? Reflect.construct(t, r || [], os(e).constructor) : t.apply(e, r));
}
function $5(e, t) {
  if (t && (Fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return I5(e);
}
function I5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function __() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (__ = function() {
    return !!e;
  })();
}
function os(e) {
  return os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, os(e);
}
function k5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Np(e, t);
}
function Np(e, t) {
  return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Np(e, t);
}
function _t(e, t, r) {
  return t = P_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P_(e) {
  var t = D5(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function D5(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return C5(this, t), n = M5(this, t, [r]), _t(n, "pieRef", null), _t(n, "sectorRefs", []), _t(n, "id", sn("recharts-pie-")), _t(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), ue(a) && a();
    }), _t(n, "handleAnimationStart", function() {
      var a = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), ue(a) && a();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return k5(t, e), j5(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var a = this.props.activeIndex;
      return Array.isArray(a) ? a.indexOf(n) !== -1 : n === a;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var a = this.props.isAnimationActive;
      if (a && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.label, s = i.labelLine, u = i.dataKey, c = i.valueKey, l = ie(this.props, !1), f = ie(o, !1), d = ie(s, !1), p = o && o.offsetRadius || 20, y = n.map(function(h, v) {
        var b = (h.startAngle + h.endAngle) / 2, g = je(h.cx, h.cy, h.outerRadius + p, b), x = Ee(Ee(Ee(Ee({}, l), h), {}, {
          stroke: "none"
        }, f), {}, {
          index: v,
          textAnchor: t.getTextAnchor(g.x, h.cx)
        }, g), O = Ee(Ee(Ee(Ee({}, l), h), {}, {
          fill: "none",
          stroke: h.fill
        }, d), {}, {
          index: v,
          points: [je(h.cx, h.cy, h.outerRadius, b), g]
        }), m = u;
        return le(u) && le(c) ? m = "value" : le(u) && (m = c), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ C.createElement(pe, {
          key: "label-".concat(h.startAngle, "-").concat(h.endAngle, "-").concat(h.midAngle, "-").concat(v)
        }, s && t.renderLabelLineItem(s, O, "line"), t.renderLabelItem(o, x, Re(h, m)));
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: "recharts-pie-labels"
      }, y);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.activeShape, s = i.blendStroke, u = i.inactiveShape;
      return n.map(function(c, l) {
        if (c?.startAngle === 0 && c?.endAngle === 0 && n.length !== 1) return null;
        var f = a.isActiveIndex(l), d = u && a.hasActiveIndex() ? u : null, p = f ? o : d, y = Ee(Ee({}, c), {}, {
          stroke: s ? c.fill : c.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ C.createElement(pe, On({
          ref: function(v) {
            v && !a.sectorRefs.includes(v) && a.sectorRefs.push(v);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, en(a.props, c, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(c?.startAngle, "-").concat(c?.endAngle, "-").concat(c.midAngle, "-").concat(l)
        }), /* @__PURE__ */ C.createElement(A_, On({
          option: p,
          isActive: f,
          shapeType: "sector"
        }, y)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.sectors, o = a.isAnimationActive, s = a.animationBegin, u = a.animationDuration, c = a.animationEasing, l = a.animationId, f = this.state, d = f.prevSectors, p = f.prevIsAnimationActive;
      return /* @__PURE__ */ C.createElement(Bt, {
        begin: s,
        duration: u,
        isActive: o,
        easing: c,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l, "-").concat(p),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(y) {
        var h = y.t, v = [], b = i && i[0], g = b.startAngle;
        return i.forEach(function(x, O) {
          var m = d && d[O], w = O > 0 ? bt(x, "paddingAngle", 0) : 0;
          if (m) {
            var A = Ke(m.endAngle - m.startAngle, x.endAngle - x.startAngle), _ = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + A(h) + w
            });
            v.push(_), g = _.endAngle;
          } else {
            var P = x.endAngle, k = x.startAngle, T = Ke(0, P - k), $ = T(h), M = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + $ + w
            });
            v.push(M), g = M.endAngle;
          }
        }), /* @__PURE__ */ C.createElement(pe, null, n.renderSectorsStatically(v));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var a = this;
      n.onkeydown = function(i) {
        if (!i.altKey)
          switch (i.key) {
            case "ArrowLeft": {
              var o = ++a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[o].focus(), a.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var s = --a.state.sectorToFocus < 0 ? a.sectorRefs.length - 1 : a.state.sectorToFocus % a.sectorRefs.length;
              a.sectorRefs[s].focus(), a.setState({
                sectorToFocus: s
              });
              break;
            }
            case "Escape": {
              a.sectorRefs[a.state.sectorToFocus].blur(), a.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, a = n.sectors, i = n.isAnimationActive, o = this.state.prevSectors;
      return i && a && a.length && (!o || !Qr(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.hide, o = a.sectors, s = a.className, u = a.label, c = a.cx, l = a.cy, f = a.innerRadius, d = a.outerRadius, p = a.isAnimationActive, y = this.state.isAnimationFinished;
      if (i || !o || !o.length || !G(c) || !G(l) || !G(f) || !G(d))
        return null;
      var h = de("recharts-pie", s);
      return /* @__PURE__ */ C.createElement(pe, {
        tabIndex: this.props.rootTabIndex,
        className: h,
        ref: function(b) {
          n.pieRef = b;
        }
      }, this.renderSectors(), u && this.renderLabels(o), Ve.renderCallByParent(this.props, null, !1), (!p || y) && Tt.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return a.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: a.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== a.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, a) {
      return n > a ? "start" : n < a ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ C.isValidElement(n))
        return /* @__PURE__ */ C.cloneElement(n, a);
      if (ue(n))
        return n(a);
      var o = de("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ C.createElement(Zr, On({}, a, {
        key: i,
        type: "linear",
        className: o
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, a, i) {
      if (/* @__PURE__ */ C.isValidElement(n))
        return /* @__PURE__ */ C.cloneElement(n, a);
      var o = i;
      if (ue(n) && (o = n(a), /* @__PURE__ */ C.isValidElement(o)))
        return o;
      var s = de("recharts-pie-label-text", typeof n != "boolean" && !ue(n) ? n.className : "");
      return /* @__PURE__ */ C.createElement(_r, On({}, a, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
})(jt);
xo = hr;
_t(hr, "displayName", "Pie");
_t(hr, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Er.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
_t(hr, "parseDeltaAngle", function(e, t) {
  var r = it(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
_t(hr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = ie(e, !1), a = xt(r, Bs);
  return t && t.length ? t.map(function(i, o) {
    return Ee(Ee(Ee({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Ee(Ee({}, n), i.props);
  }) : [];
});
_t(hr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = o_(a, i), s = n + ot(e.cx, a, a / 2), u = r + ot(e.cy, i, i / 2), c = ot(e.innerRadius, o, 0), l = ot(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: s,
    cy: u,
    innerRadius: c,
    outerRadius: l,
    maxRadius: f
  };
});
_t(hr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? Ee(Ee({}, t.type.defaultProps), t.props) : t.props, a = xo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, s = n.endAngle, u = n.paddingAngle, c = n.dataKey, l = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), y = xo.parseCoordinateOfPie(n, r), h = xo.parseDeltaAngle(o, s), v = Math.abs(h), b = c;
  le(c) && le(f) ? (Lt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = "value") : le(c) && (Lt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = f);
  var g = a.filter(function(_) {
    return Re(_, b, 0) !== 0;
  }).length, x = (v >= 360 ? g : g - 1) * u, O = v - g * p - x, m = a.reduce(function(_, P) {
    var k = Re(P, b, 0);
    return _ + (G(k) ? k : 0);
  }, 0), w;
  if (m > 0) {
    var A;
    w = a.map(function(_, P) {
      var k = Re(_, b, 0), T = Re(_, l, P), $ = (G(k) ? k : 0) / m, M;
      P ? M = A.endAngle + it(h) * u * (k !== 0 ? 1 : 0) : M = o;
      var j = M + it(h) * ((k !== 0 ? p : 0) + $ * O), I = (M + j) / 2, D = (y.innerRadius + y.outerRadius) / 2, R = [{
        name: T,
        value: k,
        payload: _,
        dataKey: b,
        type: d
      }], L = je(y.cx, y.cy, D, I);
      return A = Ee(Ee(Ee({
        percent: $,
        cornerRadius: i,
        name: T,
        tooltipPayload: R,
        midAngle: I,
        middleRadius: D,
        tooltipPosition: L
      }, _), y), {}, {
        value: Re(_, b),
        startAngle: M,
        endAngle: j,
        payload: _,
        paddingAngle: it(h) * u
      }), A;
    });
  }
  return Ee(Ee({}, y), {}, {
    sectors: w,
    data: a
  });
});
var id, k1;
function N5() {
  if (k1) return id;
  k1 = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var s = -1, u = t(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[o ? u : ++s] = n, n += i;
    return c;
  }
  return id = r, id;
}
var od, D1;
function T_() {
  if (D1) return od;
  D1 = 1;
  var e = VS(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -t) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return od = n, od;
}
var sd, N1;
function R5() {
  if (N1) return sd;
  N1 = 1;
  var e = N5(), t = qs(), r = T_();
  function n(a) {
    return function(i, o, s) {
      return s && typeof s != "number" && t(i, o, s) && (o = s = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), s = s === void 0 ? i < o ? 1 : -1 : r(s), e(i, o, s, a);
    };
  }
  return sd = n, sd;
}
var ud, R1;
function L5() {
  if (R1) return ud;
  R1 = 1;
  var e = R5(), t = e();
  return ud = t, ud;
}
var q5 = L5();
const ss = /* @__PURE__ */ _e(q5);
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
}
function L1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function q1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? L1(Object(r), !0).forEach(function(n) {
      E_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function E_(e, t, r) {
  return t = B5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B5(e) {
  var t = F5(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function F5(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var z5 = ["Webkit", "Moz", "O", "ms"], W5 = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = z5.reduce(function(i, o) {
    return q1(q1({}, i), {}, E_({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
function us() {
  return us = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, us.apply(this, arguments);
}
function B1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? B1(Object(r), !0).forEach(function(n) {
      vt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : B1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function F1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, j_(n.key), n);
  }
}
function H5(e, t, r) {
  return t && F1(e.prototype, t), r && F1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function K5(e, t, r) {
  return t = cs(t), V5(e, C_() ? Reflect.construct(t, r || [], cs(e).constructor) : t.apply(e, r));
}
function V5(e, t) {
  if (t && (zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G5(e);
}
function G5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function C_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (C_ = function() {
    return !!e;
  })();
}
function cs(e) {
  return cs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cs(e);
}
function Y5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rp(e, t);
}
function Rp(e, t) {
  return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rp(e, t);
}
function vt(e, t, r) {
  return t = j_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j_(e) {
  var t = X5(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function X5(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Z5 = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = qa().domain(ss(0, u)).range([i, i + o - s]), l = c.domain().map(function(f) {
    return c(f);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(a),
    scale: c,
    scaleValues: l
  };
}, z1 = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Wn = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return U5(this, t), n = K5(this, t, [r]), vt(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), vt(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), vt(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var a = n.props, i = a.endIndex, o = a.onDragEnd, s = a.startIndex;
        o?.({
          endIndex: i,
          startIndex: s
        });
      }), n.detachDragEndListener();
    }), vt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), vt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), vt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), vt(n, "handleSlideDragStart", function(a) {
      var i = z1(a) ? a.changedTouches[0] : a;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: i.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return Y5(t, e), H5(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var a = n.startX, i = n.endX, o = this.state.scaleValues, s = this.props, u = s.gap, c = s.data, l = c.length - 1, f = Math.min(a, i), d = Math.max(a, i), p = t.getIndexInRange(o, f), y = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % u,
        endIndex: y === l ? l : y - y % u
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var a = this.props, i = a.data, o = a.tickFormatter, s = a.dataKey, u = Re(i[n], s, n);
      return ue(o) ? o(u, n) : u;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var a = this.state, i = a.slideMoveStartX, o = a.startX, s = a.endX, u = this.props, c = u.x, l = u.width, f = u.travellerWidth, d = u.startIndex, p = u.endIndex, y = u.onChange, h = n.pageX - i;
      h > 0 ? h = Math.min(h, c + l - f - s, c + l - f - o) : h < 0 && (h = Math.max(h, c - o, c - s));
      var v = this.getIndex({
        startX: o + h,
        endX: s + h
      });
      (v.startIndex !== d || v.endIndex !== p) && y && y(v), this.setState({
        startX: o + h,
        endX: s + h,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, a) {
      var i = z1(a) ? a.changedTouches[0] : a;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: i.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var a = this.state, i = a.brushMoveStartX, o = a.movingTravellerId, s = a.endX, u = a.startX, c = this.state[o], l = this.props, f = l.x, d = l.width, p = l.travellerWidth, y = l.onChange, h = l.gap, v = l.data, b = {
        startX: this.state.startX,
        endX: this.state.endX
      }, g = n.pageX - i;
      g > 0 ? g = Math.min(g, f + d - p - c) : g < 0 && (g = Math.max(g, f - c)), b[o] = c + g;
      var x = this.getIndex(b), O = x.startIndex, m = x.endIndex, w = function() {
        var _ = v.length - 1;
        return o === "startX" && (s > u ? O % h === 0 : m % h === 0) || s < u && m === _ || o === "endX" && (s > u ? m % h === 0 : O % h === 0) || s > u && m === _;
      };
      this.setState(vt(vt({}, o, c + g), "brushMoveStartX", n.pageX), function() {
        y && w() && y(x);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, a) {
      var i = this, o = this.state, s = o.scaleValues, u = o.startX, c = o.endX, l = this.state[a], f = s.indexOf(l);
      if (f !== -1) {
        var d = f + n;
        if (!(d === -1 || d >= s.length)) {
          var p = s[d];
          a === "startX" && p >= c || a === "endX" && p <= u || this.setState(vt({}, a, p), function() {
            i.props.onChange(i.getIndex({
              startX: i.state.startX,
              endX: i.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.fill, c = n.stroke;
      return /* @__PURE__ */ C.createElement("rect", {
        stroke: c,
        fill: u,
        x: a,
        y: i,
        width: o,
        height: s
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.data, c = n.children, l = n.padding, f = Kr.only(c);
      return f ? /* @__PURE__ */ C.cloneElement(f, {
        x: a,
        y: i,
        width: o,
        height: s,
        margin: l,
        compact: !0,
        data: u
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, a) {
      var i, o, s = this, u = this.props, c = u.y, l = u.travellerWidth, f = u.height, d = u.traveller, p = u.ariaLabel, y = u.data, h = u.startIndex, v = u.endIndex, b = Math.max(n, this.props.x), g = cd(cd({}, ie(this.props, !1)), {}, {
        x: b,
        y: c,
        width: l,
        height: f
      }), x = p || "Min value: ".concat((i = y[h]) === null || i === void 0 ? void 0 : i.name, ", Max value: ").concat((o = y[v]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ C.createElement(pe, {
        tabIndex: 0,
        role: "slider",
        "aria-label": x,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[a],
        onTouchStart: this.travellerDragStartHandlers[a],
        onKeyDown: function(m) {
          ["ArrowLeft", "ArrowRight"].includes(m.key) && (m.preventDefault(), m.stopPropagation(), s.handleTravellerMoveKeyboard(m.key === "ArrowRight" ? 1 : -1, a));
        },
        onFocus: function() {
          s.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          s.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, g));
    }
  }, {
    key: "renderSlide",
    value: function(n, a) {
      var i = this.props, o = i.y, s = i.height, u = i.stroke, c = i.travellerWidth, l = Math.min(n, a) + c, f = Math.max(Math.abs(a - n) - c, 0);
      return /* @__PURE__ */ C.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: u,
        fillOpacity: 0.2,
        x: l,
        y: o,
        width: f,
        height: s
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, a = n.startIndex, i = n.endIndex, o = n.y, s = n.height, u = n.travellerWidth, c = n.stroke, l = this.state, f = l.startX, d = l.endX, p = 5, y = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ C.createElement(pe, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ C.createElement(_r, us({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + s / 2
      }, y), this.getTextOfTick(a)), /* @__PURE__ */ C.createElement(_r, us({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(f, d) + u + p,
        y: o + s / 2
      }, y), this.getTextOfTick(i)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.data, i = n.className, o = n.children, s = n.x, u = n.y, c = n.width, l = n.height, f = n.alwaysShowText, d = this.state, p = d.startX, y = d.endX, h = d.isTextActive, v = d.isSlideMoving, b = d.isTravellerMoving, g = d.isTravellerFocused;
      if (!a || !a.length || !G(s) || !G(u) || !G(c) || !G(l) || c <= 0 || l <= 0)
        return null;
      var x = de("recharts-brush", i), O = C.Children.count(o) === 1, m = W5("userSelect", "none");
      return /* @__PURE__ */ C.createElement(pe, {
        className: x,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: m
      }, this.renderBackground(), O && this.renderPanorama(), this.renderSlide(p, y), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(y, "endX"), (h || v || b || g || f) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var a = n.x, i = n.y, o = n.width, s = n.height, u = n.stroke, c = Math.floor(i + s / 2) - 1;
      return /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("rect", {
        x: a,
        y: i,
        width: o,
        height: s,
        fill: u,
        stroke: "none"
      }), /* @__PURE__ */ C.createElement("line", {
        x1: a + 1,
        y1: c,
        x2: a + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ C.createElement("line", {
        x1: a + 1,
        y1: c + 2,
        x2: a + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, a) {
      var i;
      return /* @__PURE__ */ C.isValidElement(n) ? i = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? i = n(a) : i = t.renderDefaultTraveller(a), i;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      var i = n.data, o = n.width, s = n.x, u = n.travellerWidth, c = n.updateId, l = n.startIndex, f = n.endIndex;
      if (i !== a.prevData || c !== a.prevUpdateId)
        return cd({
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o
        }, i && i.length ? Z5({
          data: i,
          width: o,
          x: s,
          travellerWidth: u,
          startIndex: l,
          endIndex: f
        }) : {
          scale: null,
          scaleValues: null
        });
      if (a.scale && (o !== a.prevWidth || s !== a.prevX || u !== a.prevTravellerWidth)) {
        a.scale.range([s, s + o - u]);
        var d = a.scale.domain().map(function(p) {
          return a.scale(p);
        });
        return {
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o,
          startX: a.scale(n.startIndex),
          endX: a.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, a) {
      for (var i = n.length, o = 0, s = i - 1; s - o > 1; ) {
        var u = Math.floor((o + s) / 2);
        n[u] > a ? s = u : o = u;
      }
      return a >= n[s] ? s : o;
    }
  }]);
})(jt);
vt(Wn, "displayName", "Brush");
vt(Wn, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var ld, W1;
function J5() {
  if (W1) return ld;
  W1 = 1;
  var e = Xh();
  function t(r, n) {
    var a;
    return e(r, function(i, o, s) {
      return a = n(i, o, s), !a;
    }), !!a;
  }
  return ld = t, ld;
}
var fd, U1;
function Q5() {
  if (U1) return fd;
  U1 = 1;
  var e = VO(), t = Qt(), r = J5(), n = pt(), a = qs();
  function i(o, s, u) {
    var c = n(o) ? e : r;
    return u && a(o, s, u) && (s = void 0), c(o, t(s, 3));
  }
  return fd = i, fd;
}
var eF = Q5();
const tF = /* @__PURE__ */ _e(eF);
var Xt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, dd, H1;
function rF() {
  if (H1) return dd;
  H1 = 1;
  var e = zS();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return dd = t, dd;
}
var pd, K1;
function nF() {
  if (K1) return pd;
  K1 = 1;
  var e = rF(), t = BS(), r = Qt();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(s, u, c) {
      e(o, u, i(s, u, c));
    }), o;
  }
  return pd = n, pd;
}
var aF = nF();
const iF = /* @__PURE__ */ _e(aF);
var hd, V1;
function oF() {
  if (V1) return hd;
  V1 = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return hd = e, hd;
}
var vd, G1;
function sF() {
  if (G1) return vd;
  G1 = 1;
  var e = Xh();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, s) {
      return a = !!n(i, o, s), a;
    }), a;
  }
  return vd = t, vd;
}
var yd, Y1;
function uF() {
  if (Y1) return yd;
  Y1 = 1;
  var e = oF(), t = sF(), r = Qt(), n = pt(), a = qs();
  function i(o, s, u) {
    var c = n(o) ? e : t;
    return u && a(o, s, u) && (s = void 0), c(o, r(s, 3));
  }
  return yd = i, yd;
}
var cF = uF();
const M_ = /* @__PURE__ */ _e(cF);
var lF = ["x", "y"];
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function Lp() {
  return Lp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lp.apply(this, arguments);
}
function X1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ca(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? X1(Object(r), !0).forEach(function(n) {
      fF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fF(e, t, r) {
  return t = dF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dF(e) {
  var t = pF(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function pF(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hF(e, t) {
  if (e == null) return {};
  var r = vF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function vF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function yF(e, t) {
  var r = e.x, n = e.y, a = hF(e, lF), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || a.height), l = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return Ca(Ca(Ca(Ca(Ca({}, t), a), o ? {
    x: o
  } : {}), u ? {
    y: u
  } : {}), {}, {
    height: l,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function Z1(e) {
  return /* @__PURE__ */ C.createElement(A_, Lp({
    shapeType: "rectangle",
    propTransformer: yF,
    activeClassName: "recharts-active-bar"
  }, e));
}
var mF = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? lt(!1, "minPointSize callback function received a value with type of ".concat(Un(n), ". Currently only numbers are supported.")) : lt()), r);
  };
}, gF = ["value", "background"], $_;
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function bF(e, t) {
  if (e == null) return {};
  var r = xF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ls.apply(this, arguments);
}
function J1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J1(Object(r), !0).forEach(function(n) {
      Or(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Q1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, k_(n.key), n);
  }
}
function OF(e, t, r) {
  return t && Q1(e.prototype, t), r && Q1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function SF(e, t, r) {
  return t = fs(t), AF(e, I_() ? Reflect.construct(t, r || [], fs(e).constructor) : t.apply(e, r));
}
function AF(e, t) {
  if (t && (Hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _F(e);
}
function _F(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function I_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (I_ = function() {
    return !!e;
  })();
}
function fs(e) {
  return fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fs(e);
}
function PF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qp(e, t);
}
function qp(e, t) {
  return qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, qp(e, t);
}
function Or(e, t, r) {
  return t = k_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k_(e) {
  var t = TF(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function TF(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var $r = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    wF(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = SF(this, t, [].concat(a)), Or(r, "state", {
      isAnimationFinished: !1
    }), Or(r, "id", sn("recharts-bar-")), Or(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Or(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return PF(t, e), OF(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.dataKey, u = i.activeIndex, c = i.activeBar, l = ie(this.props, !1);
      return n && n.map(function(f, d) {
        var p = d === u, y = p ? c : o, h = Be(Be(Be({}, l), f), {}, {
          isActive: p,
          option: y,
          index: d,
          dataKey: s,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ C.createElement(pe, ls({
          className: "recharts-bar-rectangle"
        }, en(a.props, f, d), {
          key: "rectangle-".concat(f?.x, "-").concat(f?.y, "-").concat(f?.value)
        }), /* @__PURE__ */ C.createElement(Z1, h));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, s = a.isAnimationActive, u = a.animationBegin, c = a.animationDuration, l = a.animationEasing, f = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ C.createElement(Bt, {
        begin: u,
        duration: c,
        isActive: s,
        easing: l,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(p) {
        var y = p.t, h = i.map(function(v, b) {
          var g = d && d[b];
          if (g) {
            var x = Ke(g.x, v.x), O = Ke(g.y, v.y), m = Ke(g.width, v.width), w = Ke(g.height, v.height);
            return Be(Be({}, v), {}, {
              x: x(y),
              y: O(y),
              width: m(y),
              height: w(y)
            });
          }
          if (o === "horizontal") {
            var A = Ke(0, v.height), _ = A(y);
            return Be(Be({}, v), {}, {
              y: v.y + v.height - _,
              height: _
            });
          }
          var P = Ke(0, v.width), k = P(y);
          return Be(Be({}, v), {}, {
            width: k
          });
        });
        return /* @__PURE__ */ C.createElement(pe, null, n.renderRectanglesStatically(h));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !Qr(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, s = a.activeIndex, u = ie(this.props.background, !1);
      return i.map(function(c, l) {
        c.value;
        var f = c.background, d = bF(c, gF);
        if (!f)
          return null;
        var p = Be(Be(Be(Be(Be({}, d), {}, {
          fill: "#eee"
        }, f), u), en(n.props, c, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ C.createElement(Z1, ls({
          key: "background-bar-".concat(l),
          option: n.props.background,
          isActive: l === s
        }, p));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.data, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = xt(l, Hi);
      if (!f)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(v, b) {
        var g = Array.isArray(v.value) ? v.value[1] : v.value;
        return {
          x: v.x,
          y: v.y,
          value: g,
          errorVal: Re(v, b)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ C.createElement(pe, y, f.map(function(h) {
        return /* @__PURE__ */ C.cloneElement(h, {
          key: "error-bar-".concat(a, "-").concat(h.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: u,
          layout: c,
          offset: d,
          dataPointFormatter: p
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, a = n.hide, i = n.data, o = n.className, s = n.xAxis, u = n.yAxis, c = n.left, l = n.top, f = n.width, d = n.height, p = n.isAnimationActive, y = n.background, h = n.id;
      if (a || !i || !i.length)
        return null;
      var v = this.state.isAnimationFinished, b = de("recharts-bar", o), g = s && s.allowDataOverflow, x = u && u.allowDataOverflow, O = g || x, m = le(h) ? this.id : h;
      return /* @__PURE__ */ C.createElement(pe, {
        className: b
      }, g || x ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(m)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: g ? c : c - f / 2,
        y: x ? l : l - d / 2,
        width: g ? f : f * 2,
        height: x ? d : d * 2
      }))) : null, /* @__PURE__ */ C.createElement(pe, {
        className: "recharts-bar-rectangles",
        clipPath: O ? "url(#clipPath-".concat(m, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, m), (!p || v) && Tt.renderCallByParent(this.props, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: a.curData
      } : n.data !== a.curData ? {
        curData: n.data
      } : null;
    }
  }]);
})(jt);
$_ = $r;
Or($r, "displayName", "Bar");
Or($r, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Er.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Or($r, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = ZR(n, r);
  if (!p)
    return null;
  var y = t.layout, h = r.type.defaultProps, v = h !== void 0 ? Be(Be({}, h), r.props) : r.props, b = v.dataKey, g = v.children, x = v.minPointSize, O = y === "horizontal" ? o : i, m = c ? O.scale.domain() : null, w = aL({
    numericAxis: O
  }), A = xt(g, Bs), _ = f.map(function(P, k) {
    var T, $, M, j, I, D;
    c ? T = JR(c[l + k], m) : (T = Re(P, b), Array.isArray(T) || (T = [w, T]));
    var R = mF(x, $_.defaultProps.minPointSize)(T[1], k);
    if (y === "horizontal") {
      var L, z = [o.scale(T[0]), o.scale(T[1])], N = z[0], B = z[1];
      $ = mx({
        axis: i,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: k
      }), M = (L = B ?? N) !== null && L !== void 0 ? L : void 0, j = p.size;
      var q = N - B;
      if (I = Number.isNaN(q) ? 0 : q, D = {
        x: $,
        y: o.y,
        width: j,
        height: o.height
      }, Math.abs(R) > 0 && Math.abs(I) < Math.abs(R)) {
        var H = it(I || R) * (Math.abs(R) - Math.abs(I));
        M -= H, I += H;
      }
    } else {
      var X = [i.scale(T[0]), i.scale(T[1])], te = X[0], ne = X[1];
      if ($ = te, M = mx({
        axis: o,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: k
      }), j = ne - te, I = p.size, D = {
        x: i.x,
        y: M,
        width: i.width,
        height: I
      }, Math.abs(R) > 0 && Math.abs(j) < Math.abs(R)) {
        var ee = it(j || R) * (Math.abs(R) - Math.abs(j));
        j += ee;
      }
    }
    return Be(Be(Be({}, P), {}, {
      x: $,
      y: M,
      width: j,
      height: I,
      value: c ? T : T[1],
      payload: P,
      background: D
    }, A && A[k] && A[k].props), {}, {
      tooltipPayload: [a_(r, P)],
      tooltipPosition: {
        x: $ + j / 2,
        y: M + I / 2
      }
    });
  });
  return Be({
    data: _,
    layout: y
  }, d);
});
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function EF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ew(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, D_(n.key), n);
  }
}
function CF(e, t, r) {
  return t && ew(e.prototype, t), r && ew(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function tw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tw(Object(r), !0).forEach(function(n) {
      nu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nu(e, t, r) {
  return t = D_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function D_(e) {
  var t = jF(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function jF(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pv = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.layout, c = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, d = !!yt(c, $r);
  return l.reduce(function(p, y) {
    var h = r[y], v = h.orientation, b = h.domain, g = h.padding, x = g === void 0 ? {} : g, O = h.mirror, m = h.reversed, w = "".concat(v).concat(O ? "Mirror" : ""), A, _, P, k, T;
    if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
      var $ = b[1] - b[0], M = 1 / 0, j = h.categoricalDomain.sort();
      if (j.forEach(function(X, te) {
        te > 0 && (M = Math.min((X || 0) - (j[te - 1] || 0), M));
      }), Number.isFinite(M)) {
        var I = M / $, D = h.layout === "vertical" ? n.height : n.width;
        if (h.padding === "gap" && (A = I * D / 2), h.padding === "no-gap") {
          var R = ot(t.barCategoryGap, I * D), L = I * D / 2;
          A = L - R - (L - R) / D * R;
        }
      }
    }
    a === "xAxis" ? _ = [n.left + (x.left || 0) + (A || 0), n.left + n.width - (x.right || 0) - (A || 0)] : a === "yAxis" ? _ = u === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (A || 0), n.top + n.height - (x.bottom || 0) - (A || 0)] : _ = h.range, m && (_ = [_[1], _[0]]);
    var z = e_(h, i, d), N = z.scale, B = z.realScaleType;
    N.domain(b).range(_), t_(N);
    var q = r_(N, It(It({}, h), {}, {
      realScaleType: B
    }));
    a === "xAxis" ? (T = v === "top" && !O || v === "bottom" && O, P = n.left, k = f[w] - T * h.height) : a === "yAxis" && (T = v === "left" && !O || v === "right" && O, P = f[w] - T * h.width, k = n.top);
    var H = It(It(It({}, h), q), {}, {
      realScaleType: B,
      x: P,
      y: k,
      scale: N,
      width: a === "xAxis" ? n.width : h.width,
      height: a === "yAxis" ? n.height : h.height
    });
    return H.bandSize = Go(H, q), !h.hide && a === "xAxis" ? f[w] += (T ? -1 : 1) * H.height : h.hide || (f[w] += (T ? -1 : 1) * H.width), It(It({}, p), {}, nu({}, y, H));
  }, {});
}, N_ = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, MF = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return N_({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, R_ = /* @__PURE__ */ (function() {
  function e(t) {
    EF(this, e), this.scale = t;
  }
  return CF(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.bandAware, i = n.position;
      if (r !== void 0) {
        if (i)
          switch (i) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var s = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + s;
            }
            default:
              return this.scale(r);
          }
        if (a) {
          var u = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + u;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), a = n[0], i = n[n.length - 1];
      return a <= i ? r >= a && r <= i : r >= i && r <= a;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
})();
nu(R_, "EPS", 1e-4);
var Tv = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return It(It({}, n), {}, nu({}, a, R_.create(t[a])));
  }, {});
  return It(It({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return iF(a, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return M_(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function $F(e) {
  return (e % 180 + 180) % 180;
}
var IF = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = $F(a), o = i * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, md, rw;
function kF() {
  if (rw) return md;
  rw = 1;
  var e = Qt(), t = qi(), r = $s();
  function n(a) {
    return function(i, o, s) {
      var u = Object(i);
      if (!t(i)) {
        var c = e(o, 3);
        i = r(i), o = function(f) {
          return c(u[f], f, u);
        };
      }
      var l = a(i, o, s);
      return l > -1 ? u[c ? i[l] : l] : void 0;
    };
  }
  return md = n, md;
}
var gd, nw;
function DF() {
  if (nw) return gd;
  nw = 1;
  var e = T_();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return gd = t, gd;
}
var bd, aw;
function NF() {
  if (aw) return bd;
  aw = 1;
  var e = DS(), t = Qt(), r = DF(), n = Math.max;
  function a(i, o, s) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = s == null ? 0 : r(s);
    return c < 0 && (c = n(u + c, 0)), e(i, t(o, 3), c);
  }
  return bd = a, bd;
}
var xd, iw;
function RF() {
  if (iw) return xd;
  iw = 1;
  var e = kF(), t = NF(), r = e(t);
  return xd = r, xd;
}
var LF = RF();
const qF = /* @__PURE__ */ _e(LF);
var BF = sS();
const FF = /* @__PURE__ */ _e(BF);
var zF = FF(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function ds(e) {
  "@babel/helpers - typeof";
  return ds = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ds(e);
}
var Ev = /* @__PURE__ */ Ft(void 0), Cv = /* @__PURE__ */ Ft(void 0), L_ = /* @__PURE__ */ Ft(void 0), q_ = /* @__PURE__ */ Ft({}), B_ = /* @__PURE__ */ Ft(void 0), F_ = /* @__PURE__ */ Ft(0), z_ = /* @__PURE__ */ Ft(0), ow = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, l = zF(i);
  return /* @__PURE__ */ C.createElement(Ev.Provider, {
    value: n
  }, /* @__PURE__ */ C.createElement(Cv.Provider, {
    value: a
  }, /* @__PURE__ */ C.createElement(q_.Provider, {
    value: i
  }, /* @__PURE__ */ C.createElement(L_.Provider, {
    value: l
  }, /* @__PURE__ */ C.createElement(B_.Provider, {
    value: o
  }, /* @__PURE__ */ C.createElement(F_.Provider, {
    value: c
  }, /* @__PURE__ */ C.createElement(z_.Provider, {
    value: u
  }, s)))))));
}, WF = function() {
  return dt(B_);
};
function W_(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var U_ = function(t) {
  var r = dt(Ev);
  r == null && (process.env.NODE_ENV !== "production" ? lt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : lt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? lt(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(ds(t), "]. ").concat(W_(r))) : lt()), n;
}, UF = function() {
  var t = dt(Ev);
  return xr(t);
}, HF = function() {
  var t = dt(Cv), r = qF(t, function(n) {
    return M_(n.domain, Number.isFinite);
  });
  return r || xr(t);
}, H_ = function(t) {
  var r = dt(Cv);
  r == null && (process.env.NODE_ENV !== "production" ? lt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : lt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? lt(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(ds(t), "]. ").concat(W_(r))) : lt()), n;
}, KF = function() {
  var t = dt(L_);
  return t;
}, VF = function() {
  return dt(q_);
}, jv = function() {
  return dt(z_);
}, Mv = function() {
  return dt(F_);
};
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function GF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function YF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V_(n.key), n);
  }
}
function XF(e, t, r) {
  return t && YF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ZF(e, t, r) {
  return t = ps(t), JF(e, K_() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function JF(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return QF(e);
}
function QF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function K_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (K_ = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function e4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bp(e, t);
}
function Bp(e, t) {
  return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Bp(e, t);
}
function sw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sw(Object(r), !0).forEach(function(n) {
      $v(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $v(e, t, r) {
  return t = V_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V_(e) {
  var t = t4(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function t4(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function r4(e, t) {
  return o4(e) || i4(e, t) || a4(e, t) || n4();
}
function n4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a4(e, t) {
  if (e) {
    if (typeof e == "string") return cw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cw(e, t);
  }
}
function cw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function i4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function o4(e) {
  if (Array.isArray(e)) return e;
}
function Fp() {
  return Fp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fp.apply(this, arguments);
}
var s4 = function(t, r) {
  var n;
  return /* @__PURE__ */ C.isValidElement(t) ? n = /* @__PURE__ */ C.cloneElement(t, r) : ue(t) ? n = t(r) : n = /* @__PURE__ */ C.createElement("line", Fp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, u4 = function(t, r, n, a, i, o, s, u, c) {
  var l = i.x, f = i.y, d = i.width, p = i.height;
  if (n) {
    var y = c.y, h = t.y.apply(y, {
      position: o
    });
    if (Xt(c, "discard") && !t.y.isInRange(h))
      return null;
    var v = [{
      x: l + d,
      y: h
    }, {
      x: l,
      y: h
    }];
    return u === "left" ? v.reverse() : v;
  }
  if (r) {
    var b = c.x, g = t.x.apply(b, {
      position: o
    });
    if (Xt(c, "discard") && !t.x.isInRange(g))
      return null;
    var x = [{
      x: g,
      y: f + p
    }, {
      x: g,
      y: f
    }];
    return s === "top" ? x.reverse() : x;
  }
  if (a) {
    var O = c.segment, m = O.map(function(w) {
      return t.apply(w, {
        position: o
      });
    });
    return Xt(c, "discard") && tF(m, function(w) {
      return !t.isInRange(w);
    }) ? null : m;
  }
  return null;
};
function c4(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = WF(), l = U_(a), f = H_(i), d = KF();
  if (!c || !d)
    return null;
  Lt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Tv({
    x: l.scale,
    y: f.scale
  }), y = Ge(t), h = Ge(r), v = n && n.length === 2, b = u4(p, y, h, v, d, e.position, l.orientation, f.orientation, e);
  if (!b)
    return null;
  var g = r4(b, 2), x = g[0], O = x.x, m = x.y, w = g[1], A = w.x, _ = w.y, P = Xt(e, "hidden") ? "url(#".concat(c, ")") : void 0, k = uw(uw({
    clipPath: P
  }, ie(e, !0)), {}, {
    x1: O,
    y1: m,
    x2: A,
    y2: _
  });
  return /* @__PURE__ */ C.createElement(pe, {
    className: de("recharts-reference-line", s)
  }, s4(o, k), Ve.renderCallByParent(e, MF({
    x1: O,
    y1: m,
    x2: A,
    y2: _
  })));
}
var Iv = /* @__PURE__ */ (function(e) {
  function t() {
    return GF(this, t), ZF(this, t, arguments);
  }
  return e4(t, e), XF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(c4, this.props);
    }
  }]);
})(C.Component);
$v(Iv, "displayName", "ReferenceLine");
$v(Iv, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function zp() {
  return zp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zp.apply(this, arguments);
}
function Vn(e) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vn(e);
}
function lw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lw(Object(r), !0).forEach(function(n) {
      au(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y_(n.key), n);
  }
}
function d4(e, t, r) {
  return t && f4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function p4(e, t, r) {
  return t = hs(t), h4(e, G_() ? Reflect.construct(t, r || [], hs(e).constructor) : t.apply(e, r));
}
function h4(e, t) {
  if (t && (Vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return v4(e);
}
function v4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function G_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (G_ = function() {
    return !!e;
  })();
}
function hs(e) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hs(e);
}
function y4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wp(e, t);
}
function Wp(e, t) {
  return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Wp(e, t);
}
function au(e, t, r) {
  return t = Y_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y_(e) {
  var t = m4(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function m4(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var g4 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Tv({
    x: a.scale,
    y: i.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Xt(t, "discard") && !o.isInRange(s) ? null : s;
}, iu = /* @__PURE__ */ (function(e) {
  function t() {
    return l4(this, t), p4(this, t, arguments);
  }
  return y4(t, e), d4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Ge(a), l = Ge(i);
      if (Lt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !l)
        return null;
      var f = g4(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, y = this.props, h = y.shape, v = y.className, b = Xt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, g = fw(fw({
        clipPath: b
      }, ie(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-reference-dot", v)
      }, t.renderDot(h, g), Ve.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(C.Component);
au(iu, "displayName", "ReferenceDot");
au(iu, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
au(iu, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(Ki, zp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function Up() {
  return Up = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Up.apply(this, arguments);
}
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
}
function dw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dw(Object(r), !0).forEach(function(n) {
      ou(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function x4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Z_(n.key), n);
  }
}
function w4(e, t, r) {
  return t && x4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function O4(e, t, r) {
  return t = vs(t), S4(e, X_() ? Reflect.construct(t, r || [], vs(e).constructor) : t.apply(e, r));
}
function S4(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return A4(e);
}
function A4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function X_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (X_ = function() {
    return !!e;
  })();
}
function vs(e) {
  return vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vs(e);
}
function _4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hp(e, t);
}
function Hp(e, t) {
  return Hp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Hp(e, t);
}
function ou(e, t, r) {
  return t = Z_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z_(e) {
  var t = P4(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function P4(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var T4 = function(t, r, n, a, i) {
  var o = i.x1, s = i.x2, u = i.y1, c = i.y2, l = i.xAxis, f = i.yAxis;
  if (!l || !f) return null;
  var d = Tv({
    x: l.scale,
    y: f.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(u, {
      position: "start"
    }) : d.y.rangeMin
  }, y = {
    x: r ? d.x.apply(s, {
      position: "end"
    }) : d.x.rangeMax,
    y: a ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Xt(i, "discard") && (!d.isInRange(p) || !d.isInRange(y)) ? null : N_(p, y);
}, su = /* @__PURE__ */ (function(e) {
  function t() {
    return b4(this, t), O4(this, t, arguments);
  }
  return _4(t, e), w4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, l = n.clipPathId;
      Lt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Ge(a), d = Ge(i), p = Ge(o), y = Ge(s), h = this.props.shape;
      if (!f && !d && !p && !y && !h)
        return null;
      var v = T4(f, d, p, y, this.props);
      if (!v && !h)
        return null;
      var b = Xt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-reference-area", u)
      }, t.renderRect(h, pw(pw({
        clipPath: b
      }, ie(this.props, !0)), v)), Ve.renderCallByParent(this.props, v));
    }
  }]);
})(C.Component);
ou(su, "displayName", "ReferenceArea");
ou(su, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
ou(su, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(_v, Up({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function J_(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function E4(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return IF(n, r);
}
function C4(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + s
  } : {
    start: n ? a + o : i + s,
    end: n ? a : i
  };
}
function ys(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function j4(e, t) {
  return J_(e, t + 1);
}
function M4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, l = o, f = function() {
    var y = n?.[u];
    if (y === void 0)
      return {
        v: J_(n, c)
      };
    var h = u, v, b = function() {
      return v === void 0 && (v = r(y, h)), v;
    }, g = y.coordinate, x = u === 0 || ys(e, g, b, l, s);
    x || (u = 0, l = o, c += 1), x && (l = g + e * (b() / 2 + a), u += c);
  }, d; c <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function hw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hw(Object(r), !0).forEach(function(n) {
      $4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $4(e, t, r) {
  return t = I4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I4(e) {
  var t = k4(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function k4(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function D4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = i.length, s = t.start, u = t.end, c = function(d) {
    var p = i[d], y, h = function() {
      return y === void 0 && (y = r(p, d)), y;
    };
    if (d === o - 1) {
      var v = e * (p.coordinate + e * h() / 2 - u);
      i[d] = p = rt(rt({}, p), {}, {
        tickCoord: v > 0 ? p.coordinate - v * e : p.coordinate
      });
    } else
      i[d] = p = rt(rt({}, p), {}, {
        tickCoord: p.coordinate
      });
    var b = ys(e, p.tickCoord, h, s, u);
    b && (u = p.tickCoord - e * (h() / 2 + a), i[d] = rt(rt({}, p), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    c(l);
  return i;
}
function N4(e, t, r, n, a, i) {
  var o = (n || []).slice(), s = o.length, u = t.start, c = t.end;
  if (i) {
    var l = n[s - 1], f = r(l, s - 1), d = e * (l.coordinate + e * f / 2 - c);
    o[s - 1] = l = rt(rt({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var p = ys(e, l.tickCoord, function() {
      return f;
    }, u, c);
    p && (c = l.tickCoord - e * (f / 2 + a), o[s - 1] = rt(rt({}, l), {}, {
      isShow: !0
    }));
  }
  for (var y = i ? s - 1 : s, h = function(g) {
    var x = o[g], O, m = function() {
      return O === void 0 && (O = r(x, g)), O;
    };
    if (g === 0) {
      var w = e * (x.coordinate - e * m() / 2 - u);
      o[g] = x = rt(rt({}, x), {}, {
        tickCoord: w < 0 ? x.coordinate - w * e : x.coordinate
      });
    } else
      o[g] = x = rt(rt({}, x), {}, {
        tickCoord: x.coordinate
      });
    var A = ys(e, x.tickCoord, m, u, c);
    A && (u = x.tickCoord + e * (m() / 2 + a), o[g] = rt(rt({}, x), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    h(v);
  return o;
}
function kv(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, l = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (G(u) || Er.isSsr)
    return j4(a, typeof u == "number" && G(u) ? u : 0);
  var d = [], p = s === "top" || s === "bottom" ? "width" : "height", y = l && p === "width" ? La(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, h = function(x, O) {
    var m = ue(c) ? c(x.value, O) : x.value;
    return p === "width" ? E4(La(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : La(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, v = a.length >= 2 ? it(a[1].coordinate - a[0].coordinate) : 1, b = C4(i, v, p);
  return u === "equidistantPreserveStart" ? M4(v, b, h, a, o) : (u === "preserveStart" || u === "preserveStartEnd" ? d = N4(v, b, h, a, o, u === "preserveStartEnd") : d = D4(v, b, h, a, o), d.filter(function(g) {
    return g.isShow;
  }));
}
var R4 = ["viewBox"], L4 = ["viewBox"], q4 = ["ticks"];
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function Sn() {
  return Sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sn.apply(this, arguments);
}
function vw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vw(Object(r), !0).forEach(function(n) {
      Dv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wd(e, t) {
  if (e == null) return {};
  var r = B4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function B4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function F4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eP(n.key), n);
  }
}
function z4(e, t, r) {
  return t && yw(e.prototype, t), r && yw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function W4(e, t, r) {
  return t = ms(t), U4(e, Q_() ? Reflect.construct(t, r || [], ms(e).constructor) : t.apply(e, r));
}
function U4(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return H4(e);
}
function H4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Q_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Q_ = function() {
    return !!e;
  })();
}
function ms(e) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ms(e);
}
function K4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kp(e, t);
}
function Kp(e, t) {
  return Kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Kp(e, t);
}
function Dv(e, t, r) {
  return t = eP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eP(e) {
  var t = V4(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function V4(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var fa = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return F4(this, t), n = W4(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return K4(t, e), z4(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = wd(n, R4), s = this.props, u = s.viewBox, c = wd(s, L4);
      return !_n(i, u) || !_n(o, c) || !_n(a, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var a = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        a && this.setState({
          fontSize: window.getComputedStyle(a).fontSize,
          letterSpacing: window.getComputedStyle(a).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var a = this.props, i = a.x, o = a.y, s = a.width, u = a.height, c = a.orientation, l = a.tickSize, f = a.mirror, d = a.tickMargin, p, y, h, v, b, g, x = f ? -1 : 1, O = n.tickSize || l, m = G(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          p = y = n.coordinate, v = o + +!f * u, h = v - x * O, g = h - x * d, b = m;
          break;
        case "left":
          h = v = n.coordinate, y = i + +!f * s, p = y - x * O, b = p - x * d, g = m;
          break;
        case "right":
          h = v = n.coordinate, y = i + +f * s, p = y + x * O, b = p + x * d, g = m;
          break;
        default:
          p = y = n.coordinate, v = o + +f * u, h = v + x * O, g = h + x * d, b = m;
          break;
      }
      return {
        line: {
          x1: p,
          y1: h,
          x2: y,
          y2: v
        },
        tick: {
          x: b,
          y: g
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, a = n.orientation, i = n.mirror, o;
      switch (a) {
        case "left":
          o = i ? "start" : "end";
          break;
        case "right":
          o = i ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, a = n.orientation, i = n.mirror, o = "end";
      switch (a) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = i ? "start" : "end";
          break;
        default:
          o = i ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.orientation, c = n.mirror, l = n.axisLine, f = at(at(at({}, ie(this.props, !1)), ie(l, !1)), {}, {
        fill: "none"
      });
      if (u === "top" || u === "bottom") {
        var d = +(u === "top" && !c || u === "bottom" && c);
        f = at(at({}, f), {}, {
          x1: a,
          y1: i + d * s,
          x2: a + o,
          y2: i + d * s
        });
      } else {
        var p = +(u === "left" && !c || u === "right" && c);
        f = at(at({}, f), {}, {
          x1: a + p * o,
          y1: i,
          x2: a + p * o,
          y2: i + s
        });
      }
      return /* @__PURE__ */ C.createElement("line", Sn({}, f, {
        className: de("recharts-cartesian-axis-line", bt(l, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, a, i) {
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, l = s.tick, f = s.tickFormatter, d = s.unit, p = kv(at(at({}, this.props), {}, {
          ticks: n
        }), a, i), y = this.getTickTextAnchor(), h = this.getTickVerticalAnchor(), v = ie(this.props, !1), b = ie(l, !1), g = at(at({}, v), {}, {
          fill: "none"
        }, ie(u, !1)), x = p.map(function(O, m) {
          var w = o.getTickLineCoord(O), A = w.line, _ = w.tick, P = at(at(at(at({
            textAnchor: y,
            verticalAnchor: h
          }, v), {}, {
            stroke: "none",
            fill: c
          }, b), _), {}, {
            index: m,
            payload: O,
            visibleTicksCount: p.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ C.createElement(pe, Sn({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, en(o.props, O, m)), u && /* @__PURE__ */ C.createElement("line", Sn({}, g, A, {
            className: de("recharts-cartesian-axis-tick-line", bt(u, "className"))
          })), l && t.renderTickItem(l, P, "".concat(ue(f) ? f(O.value, m) : O.value).concat(d || "")));
        });
        return /* @__PURE__ */ C.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, x);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.axisLine, o = a.width, s = a.height, u = a.ticksGenerator, c = a.className, l = a.hide;
      if (l)
        return null;
      var f = this.props, d = f.ticks, p = wd(f, q4), y = d;
      return ue(u) && (y = d && d.length > 0 ? u(this.props) : u(p)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, i && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Ve.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(_r, Sn({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
})(cO);
Dv(fa, "displayName", "CartesianAxis");
Dv(fa, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var G4 = ["x1", "y1", "x2", "y2", "key"], Y4 = ["offset"];
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function mw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mw(Object(r), !0).forEach(function(n) {
      X4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X4(e, t, r) {
  return t = Z4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Z4(e) {
  var t = J4(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function J4(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ur() {
  return Ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ur.apply(this, arguments);
}
function gw(e, t) {
  if (e == null) return {};
  var r = Q4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Q4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var e8 = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, a = t.x, i = t.y, o = t.width, s = t.height, u = t.ry;
  return /* @__PURE__ */ C.createElement("rect", {
    x: a,
    y: i,
    ry: u,
    width: o,
    height: s,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function tP(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, u = gw(t, G4), c = ie(u, !1);
    c.offset;
    var l = gw(c, Y4);
    r = /* @__PURE__ */ C.createElement("line", Ur({}, l, {
      x1: n,
      y1: a,
      x2: i,
      y2: o,
      fill: "none",
      key: s
    }));
  }
  return r;
}
function t8(e) {
  var t = e.x, r = e.width, n = e.horizontal, a = n === void 0 ? !0 : n, i = e.horizontalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, u) {
    var c = nt(nt({}, e), {}, {
      x1: t,
      y1: s,
      x2: t + r,
      y2: s,
      key: "line-".concat(u),
      index: u
    });
    return tP(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function r8(e) {
  var t = e.y, r = e.height, n = e.vertical, a = n === void 0 ? !0 : n, i = e.verticalPoints;
  if (!a || !i || !i.length)
    return null;
  var o = i.map(function(s, u) {
    var c = nt(nt({}, e), {}, {
      x1: s,
      y1: t,
      x2: s,
      y2: t + r,
      key: "line-".concat(u),
      index: u
    });
    return tP(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function n8(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, a = e.y, i = e.width, o = e.height, s = e.horizontalPoints, u = e.horizontal, c = u === void 0 ? !0 : u;
  if (!c || !t || !t.length)
    return null;
  var l = s.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, p) {
    return d - p;
  });
  a !== l[0] && l.unshift(0);
  var f = l.map(function(d, p) {
    var y = !l[p + 1], h = y ? a + o - d : l[p + 1] - d;
    if (h <= 0)
      return null;
    var v = p % t.length;
    return /* @__PURE__ */ C.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: h,
      width: i,
      stroke: "none",
      fill: t[v],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, f);
}
function a8(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, a = e.fillOpacity, i = e.x, o = e.y, s = e.width, u = e.height, c = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var l = c.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, p) {
    return d - p;
  });
  i !== l[0] && l.unshift(0);
  var f = l.map(function(d, p) {
    var y = !l[p + 1], h = y ? i + s - d : l[p + 1] - d;
    if (h <= 0)
      return null;
    var v = p % n.length;
    return /* @__PURE__ */ C.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: o,
      width: h,
      height: u,
      stroke: "none",
      fill: n[v],
      fillOpacity: a,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, f);
}
var i8 = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return QA(kv(nt(nt(nt({}, fa.defaultProps), n), {}, {
    ticks: ir(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, o8 = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return QA(kv(nt(nt(nt({}, fa.defaultProps), n), {}, {
    ticks: ir(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.top, o.top + o.height, r);
}, yn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Vi(e) {
  var t, r, n, a, i, o, s = jv(), u = Mv(), c = VF(), l = nt(nt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : yn.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : yn.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : yn.horizontal,
    horizontalFill: (a = e.horizontalFill) !== null && a !== void 0 ? a : yn.horizontalFill,
    vertical: (i = e.vertical) !== null && i !== void 0 ? i : yn.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : yn.verticalFill,
    x: G(e.x) ? e.x : c.left,
    y: G(e.y) ? e.y : c.top,
    width: G(e.width) ? e.width : c.width,
    height: G(e.height) ? e.height : c.height
  }), f = l.x, d = l.y, p = l.width, y = l.height, h = l.syncWithTicks, v = l.horizontalValues, b = l.verticalValues, g = UF(), x = HF();
  if (!G(p) || p <= 0 || !G(y) || y <= 0 || !G(f) || f !== +f || !G(d) || d !== +d)
    return null;
  var O = l.verticalCoordinatesGenerator || i8, m = l.horizontalCoordinatesGenerator || o8, w = l.horizontalPoints, A = l.verticalPoints;
  if ((!w || !w.length) && ue(m)) {
    var _ = v && v.length, P = m({
      yAxis: x ? nt(nt({}, x), {}, {
        ticks: _ ? v : x.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, _ ? !0 : h);
    Lt(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(rn(P), "]")), Array.isArray(P) && (w = P);
  }
  if ((!A || !A.length) && ue(O)) {
    var k = b && b.length, T = O({
      xAxis: g ? nt(nt({}, g), {}, {
        ticks: k ? b : g.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, k ? !0 : h);
    Lt(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(rn(T), "]")), Array.isArray(T) && (A = T);
  }
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ C.createElement(e8, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ C.createElement(t8, Ur({}, l, {
    offset: c,
    horizontalPoints: w,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(r8, Ur({}, l, {
    offset: c,
    verticalPoints: A,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(n8, Ur({}, l, {
    horizontalPoints: w
  })), /* @__PURE__ */ C.createElement(a8, Ur({}, l, {
    verticalPoints: A
  })));
}
Vi.displayName = "CartesianGrid";
var s8 = ["type", "layout", "connectNulls", "ref"], u8 = ["key"];
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function bw(e, t) {
  if (e == null) return {};
  var r = c8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function c8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ua() {
  return Ua = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ua.apply(this, arguments);
}
function xw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xw(Object(r), !0).forEach(function(n) {
      kt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mn(e) {
  return p8(e) || d8(e) || f8(e) || l8();
}
function l8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f8(e, t) {
  if (e) {
    if (typeof e == "string") return Vp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vp(e, t);
  }
}
function d8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function p8(e) {
  if (Array.isArray(e)) return Vp(e);
}
function Vp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function h8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ww(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nP(n.key), n);
  }
}
function v8(e, t, r) {
  return t && ww(e.prototype, t), r && ww(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y8(e, t, r) {
  return t = gs(t), m8(e, rP() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r));
}
function m8(e, t) {
  if (t && (Xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return g8(e);
}
function g8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (rP = function() {
    return !!e;
  })();
}
function gs(e) {
  return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gs(e);
}
function b8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gp(e, t);
}
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Gp(e, t);
}
function kt(e, t, r) {
  return t = nP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nP(e) {
  var t = x8(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function x8(e, t) {
  if (Xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Gi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    h8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = y8(this, t, [].concat(a)), kt(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), kt(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), kt(r, "getStrokeDasharray", function(o, s, u) {
      var c = u.reduce(function(b, g) {
        return b + g;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / c), f = o % c, d = s - o, p = [], y = 0, h = 0; y < u.length; h += u[y], ++y)
        if (h + u[y] > f) {
          p = [].concat(mn(u.slice(0, y)), [f - h]);
          break;
        }
      var v = p.length % 2 === 0 ? [0, d] : [d];
      return [].concat(mn(t.repeat(u, l)), mn(p), v).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), kt(r, "id", sn("recharts-line-")), kt(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), kt(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), kt(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return b8(t, e), v8(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, a) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var i = this.props, o = i.points, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = xt(l, Hi);
      if (!f)
        return null;
      var d = function(h, v) {
        return {
          x: h.x,
          y: h.y,
          value: h.value,
          errorVal: Re(h.payload, v)
        };
      }, p = {
        clipPath: n ? "url(#clipPath-".concat(a, ")") : null
      };
      return /* @__PURE__ */ C.createElement(pe, p, f.map(function(y) {
        return /* @__PURE__ */ C.cloneElement(y, {
          key: "bar-".concat(y.props.dataKey),
          data: o,
          xAxis: s,
          yAxis: u,
          layout: c,
          dataPointFormatter: d
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive;
      if (o && !this.state.isAnimationFinished)
        return null;
      var s = this.props, u = s.dot, c = s.points, l = s.dataKey, f = ie(this.props, !1), d = ie(u, !0), p = c.map(function(h, v) {
        var b = ht(ht(ht({
          key: "dot-".concat(v),
          r: 3
        }, f), d), {}, {
          value: h.value,
          dataKey: l,
          cx: h.x,
          cy: h.y,
          index: v,
          payload: h.payload
        });
        return t.renderDotItem(u, b);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ C.createElement(pe, Ua({
        className: "recharts-line-dots",
        key: "dots"
      }, y), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, a, i, o) {
      var s = this.props, u = s.type, c = s.layout, l = s.connectNulls;
      s.ref;
      var f = bw(s, s8), d = ht(ht(ht({}, ie(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: l
      });
      return /* @__PURE__ */ C.createElement(Zr, Ua({}, d, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, u = o.strokeDasharray, c = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, y = o.animateNewValues, h = o.width, v = o.height, b = this.state, g = b.prevPoints, x = b.totalLength;
      return /* @__PURE__ */ C.createElement(Bt, {
        begin: l,
        duration: f,
        isActive: c,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(O) {
        var m = O.t;
        if (g) {
          var w = g.length / s.length, A = s.map(function($, M) {
            var j = Math.floor(M * w);
            if (g[j]) {
              var I = g[j], D = Ke(I.x, $.x), R = Ke(I.y, $.y);
              return ht(ht({}, $), {}, {
                x: D(m),
                y: R(m)
              });
            }
            if (y) {
              var L = Ke(h * 2, $.x), z = Ke(v / 2, $.y);
              return ht(ht({}, $), {}, {
                x: L(m),
                y: z(m)
              });
            }
            return ht(ht({}, $), {}, {
              x: $.x,
              y: $.y
            });
          });
          return i.renderCurveStatically(A, n, a);
        }
        var _ = Ke(0, x), P = _(m), k;
        if (u) {
          var T = "".concat(u).split(/[,\s]+/gim).map(function($) {
            return parseFloat($);
          });
          k = i.getStrokeDasharray(P, x, T);
        } else
          k = i.generateSimpleStrokeDasharray(x, P);
        return i.renderCurveStatically(s, n, a, {
          strokeDasharray: k
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.isAnimationActive, u = this.state, c = u.prevPoints, l = u.totalLength;
      return s && o && o.length && (!c && l > 0 || !Qr(c, o)) ? this.renderCurveWithAnimation(n, a) : this.renderCurveStatically(o, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.xAxis, l = a.yAxis, f = a.top, d = a.left, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, g = s.length === 1, x = de("recharts-line", u), O = c && c.allowDataOverflow, m = l && l.allowDataOverflow, w = O || m, A = le(v) ? this.id : v, _ = (n = ie(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = _.r, k = P === void 0 ? 3 : P, T = _.strokeWidth, $ = T === void 0 ? 2 : T, M = dS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, D = k * 2 + $;
      return /* @__PURE__ */ C.createElement(pe, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? d : d - p / 2,
        y: m ? f : f - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !I && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: d - D / 2,
        y: f - D / 2,
        width: p + D,
        height: y + D
      }))) : null, !g && this.renderCurve(w, A), this.renderErrorBar(w, A), (g || o) && this.renderDots(w, I, A), (!h || b) && Tt.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: a.curPoints
      } : n.points !== a.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, a) {
      for (var i = n.length % 2 !== 0 ? [].concat(mn(n), [0]) : n, o = [], s = 0; s < a; ++s)
        o = [].concat(mn(o), mn(i));
      return o;
    }
  }, {
    key: "renderDotItem",
    value: function(n, a) {
      var i;
      if (/* @__PURE__ */ C.isValidElement(n))
        i = /* @__PURE__ */ C.cloneElement(n, a);
      else if (ue(n))
        i = n(a);
      else {
        var o = a.key, s = bw(a, u8), u = de("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ C.createElement(Ki, Ua({
          key: o
        }, s, {
          className: u
        }));
      }
      return i;
    }
  }]);
})(jt);
kt(Gi, "displayName", "Line");
kt(Gi, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Er.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
kt(Gi, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, i = e.yAxisTicks, o = e.dataKey, s = e.bandSize, u = e.displayedData, c = e.offset, l = t.layout, f = u.map(function(d, p) {
    var y = Re(d, o);
    return l === "horizontal" ? {
      x: Vo({
        axis: r,
        ticks: a,
        bandSize: s,
        entry: d,
        index: p
      }),
      y: le(y) ? null : n.scale(y),
      value: y,
      payload: d
    } : {
      x: le(y) ? null : r.scale(y),
      y: Vo({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: d,
        index: p
      }),
      value: y,
      payload: d
    };
  });
  return ht({
    points: f,
    layout: l
  }, c);
});
var w8 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], O8 = ["key"], aP;
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function iP(e, t) {
  if (e == null) return {};
  var r = S8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function S8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Hr() {
  return Hr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hr.apply(this, arguments);
}
function Ow(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ow(Object(r), !0).forEach(function(n) {
      Vt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ow(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sP(n.key), n);
  }
}
function _8(e, t, r) {
  return t && Sw(e.prototype, t), r && Sw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function P8(e, t, r) {
  return t = bs(t), T8(e, oP() ? Reflect.construct(t, r || [], bs(e).constructor) : t.apply(e, r));
}
function T8(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return E8(e);
}
function E8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function oP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (oP = function() {
    return !!e;
  })();
}
function bs(e) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bs(e);
}
function C8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Yp(e, t);
}
function Yp(e, t) {
  return Yp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Yp(e, t);
}
function Vt(e, t, r) {
  return t = sP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sP(e) {
  var t = j8(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function j8(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ir = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    A8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = P8(this, t, [].concat(a)), Vt(r, "state", {
      isAnimationFinished: !0
    }), Vt(r, "id", sn("recharts-area-")), Vt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ue(o) && o();
    }), Vt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ue(o) && o();
    }), r;
  }
  return C8(t, e), _8(t, [{
    key: "renderDots",
    value: function(n, a, i) {
      var o = this.props.isAnimationActive, s = this.state.isAnimationFinished;
      if (o && !s)
        return null;
      var u = this.props, c = u.dot, l = u.points, f = u.dataKey, d = ie(this.props, !1), p = ie(c, !0), y = l.map(function(v, b) {
        var g = gr(gr(gr({
          key: "dot-".concat(b),
          r: 3
        }, d), p), {}, {
          index: b,
          cx: v.x,
          cy: v.y,
          dataKey: f,
          value: v.value,
          payload: v.payload,
          points: l
        });
        return t.renderDotItem(c, g);
      }), h = {
        clipPath: n ? "url(#clipPath-".concat(a ? "" : "dots-").concat(i, ")") : null
      };
      return /* @__PURE__ */ C.createElement(pe, Hr({
        className: "recharts-area-dots"
      }, h), y);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, u = o[0].x, c = o[o.length - 1].x, l = n * Math.abs(u - c), f = wr(o.map(function(d) {
        return d.y || 0;
      }));
      return G(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(wr(i.map(function(d) {
        return d.y || 0;
      })), f)), G(f) ? /* @__PURE__ */ C.createElement("rect", {
        x: u < c ? u : u - l,
        y: 0,
        width: l,
        height: Math.floor(f + (s ? parseInt("".concat(s), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var a = this.props, i = a.baseLine, o = a.points, s = a.strokeWidth, u = o[0].y, c = o[o.length - 1].y, l = n * Math.abs(u - c), f = wr(o.map(function(d) {
        return d.x || 0;
      }));
      return G(i) && typeof i == "number" ? f = Math.max(i, f) : i && Array.isArray(i) && i.length && (f = Math.max(wr(i.map(function(d) {
        return d.x || 0;
      })), f)), G(f) ? /* @__PURE__ */ C.createElement("rect", {
        x: 0,
        y: u < c ? u : u - l,
        width: f + (s ? parseInt("".concat(s), 10) : 1),
        height: Math.floor(l)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(n) {
      var a = this.props.layout;
      return a === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
    }
  }, {
    key: "renderAreaStatically",
    value: function(n, a, i, o) {
      var s = this.props, u = s.layout, c = s.type, l = s.stroke, f = s.connectNulls, d = s.isRange;
      s.ref;
      var p = iP(s, w8);
      return /* @__PURE__ */ C.createElement(pe, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ C.createElement(Zr, Hr({}, ie(p, !0), {
        points: n,
        connectNulls: f,
        type: c,
        baseLine: a,
        layout: u,
        stroke: "none",
        className: "recharts-area-area"
      })), l !== "none" && /* @__PURE__ */ C.createElement(Zr, Hr({}, ie(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: f,
        fill: "none",
        points: n
      })), l !== "none" && d && /* @__PURE__ */ C.createElement(Zr, Hr({}, ie(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: f,
        fill: "none",
        points: a
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, u = o.baseLine, c = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, y = this.state, h = y.prevPoints, v = y.prevBaseLine;
      return /* @__PURE__ */ C.createElement(Bt, {
        begin: l,
        duration: f,
        isActive: c,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(p),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(b) {
        var g = b.t;
        if (h) {
          var x = h.length / s.length, O = s.map(function(_, P) {
            var k = Math.floor(P * x);
            if (h[k]) {
              var T = h[k], $ = Ke(T.x, _.x), M = Ke(T.y, _.y);
              return gr(gr({}, _), {}, {
                x: $(g),
                y: M(g)
              });
            }
            return _;
          }), m;
          if (G(u) && typeof u == "number") {
            var w = Ke(v, u);
            m = w(g);
          } else if (le(u) || oa(u)) {
            var A = Ke(v, 0);
            m = A(g);
          } else
            m = u.map(function(_, P) {
              var k = Math.floor(P * x);
              if (v[k]) {
                var T = v[k], $ = Ke(T.x, _.x), M = Ke(T.y, _.y);
                return gr(gr({}, _), {}, {
                  x: $(g),
                  y: M(g)
                });
              }
              return _;
            });
          return i.renderAreaStatically(O, m, n, a);
        }
        return /* @__PURE__ */ C.createElement(pe, null, /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
          id: "animationClipPath-".concat(a)
        }, i.renderClipRect(g))), /* @__PURE__ */ C.createElement(pe, {
          clipPath: "url(#animationClipPath-".concat(a, ")")
        }, i.renderAreaStatically(s, u, n, a)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.baseLine, u = i.isAnimationActive, c = this.state, l = c.prevPoints, f = c.prevBaseLine, d = c.totalLength;
      return u && o && o.length && (!l && d > 0 || !Qr(l, o) || !Qr(f, s)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, s, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.top, l = a.left, f = a.xAxis, d = a.yAxis, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, g = s.length === 1, x = de("recharts-area", u), O = f && f.allowDataOverflow, m = d && d.allowDataOverflow, w = O || m, A = le(v) ? this.id : v, _ = (n = ie(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = _.r, k = P === void 0 ? 3 : P, T = _.strokeWidth, $ = T === void 0 ? 2 : T, M = dS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, D = k * 2 + $;
      return /* @__PURE__ */ C.createElement(pe, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? l : l - p / 2,
        y: m ? c : c - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !I && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: l - D / 2,
        y: c - D / 2,
        width: p + D,
        height: y + D
      }))) : null, g ? null : this.renderArea(w, A), (o || g) && this.renderDots(w, I, A), (!h || b) && Tt.renderCallByParent(this.props, s));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, a) {
      return n.animationId !== a.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        curBaseLine: n.baseLine,
        prevPoints: a.curPoints,
        prevBaseLine: a.curBaseLine
      } : n.points !== a.curPoints || n.baseLine !== a.curBaseLine ? {
        curPoints: n.points,
        curBaseLine: n.baseLine
      } : null;
    }
  }]);
})(jt);
aP = Ir;
Vt(Ir, "displayName", "Area");
Vt(Ir, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Er.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
Vt(Ir, "getBaseValue", function(e, t, r, n) {
  var a = e.layout, i = e.baseValue, o = t.props.baseValue, s = o ?? i;
  if (G(s) && typeof s == "number")
    return s;
  var u = a === "horizontal" ? n : r, c = u.scale.domain();
  if (u.type === "number") {
    var l = Math.max(c[0], c[1]), f = Math.min(c[0], c[1]);
    return s === "dataMin" ? f : s === "dataMax" || l < 0 ? l : Math.max(Math.min(c[0], c[1]), 0);
  }
  return s === "dataMin" ? c[0] : s === "dataMax" ? c[1] : c[0];
});
Vt(Ir, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, u = e.dataKey, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, y = c && c.length, h = aP.getBaseValue(t, r, n, a), v = p === "horizontal", b = !1, g = f.map(function(O, m) {
    var w;
    y ? w = c[l + m] : (w = Re(O, u), Array.isArray(w) ? b = !0 : w = [h, w]);
    var A = w[1] == null || y && Re(O, u) == null;
    return v ? {
      x: Vo({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: O,
        index: m
      }),
      y: A ? null : a.scale(w[1]),
      value: w,
      payload: O
    } : {
      x: A ? null : n.scale(w[1]),
      y: Vo({
        axis: a,
        ticks: o,
        bandSize: s,
        entry: O,
        index: m
      }),
      value: w,
      payload: O
    };
  }), x;
  return y || b ? x = g.map(function(O) {
    var m = Array.isArray(O.value) ? O.value[0] : null;
    return v ? {
      x: O.x,
      y: m != null && O.y != null ? a.scale(m) : null
    } : {
      x: m != null ? n.scale(m) : null,
      y: O.y
    };
  }) : x = v ? a.scale(h) : n.scale(h), gr({
    points: g,
    baseLine: x,
    layout: p,
    isRange: b
  }, d);
});
Vt(Ir, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = de("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = iP(t, O8);
    r = /* @__PURE__ */ C.createElement(Ki, Hr({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function M8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lP(n.key), n);
  }
}
function I8(e, t, r) {
  return t && $8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function k8(e, t, r) {
  return t = xs(t), D8(e, uP() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r));
}
function D8(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return N8(e);
}
function N8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uP = function() {
    return !!e;
  })();
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function R8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xp(e, t);
}
function cP(e, t, r) {
  return t = lP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lP(e) {
  var t = L8(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function L8(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Zp() {
  return Zp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zp.apply(this, arguments);
}
function q8(e) {
  var t = e.xAxisId, r = jv(), n = Mv(), a = U_(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(fa, Zp({}, a, {
      className: de("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return ir(o, !0);
      }
    }))
  );
}
var vr = /* @__PURE__ */ (function(e) {
  function t() {
    return M8(this, t), k8(this, t, arguments);
  }
  return R8(t, e), I8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(q8, this.props);
    }
  }]);
})(C.Component);
cP(vr, "displayName", "XAxis");
cP(vr, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
}
function B8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function F8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, pP(n.key), n);
  }
}
function z8(e, t, r) {
  return t && F8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function W8(e, t, r) {
  return t = ws(t), U8(e, fP() ? Reflect.construct(t, r || [], ws(e).constructor) : t.apply(e, r));
}
function U8(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return H8(e);
}
function H8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (fP = function() {
    return !!e;
  })();
}
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ws(e);
}
function K8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jp(e, t);
}
function Jp(e, t) {
  return Jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Jp(e, t);
}
function dP(e, t, r) {
  return t = pP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pP(e) {
  var t = V8(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function V8(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Qp() {
  return Qp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qp.apply(this, arguments);
}
var G8 = function(t) {
  var r = t.yAxisId, n = jv(), a = Mv(), i = H_(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(fa, Qp({}, i, {
      className: de("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: a
      },
      ticksGenerator: function(s) {
        return ir(s, !0);
      }
    }))
  );
}, yr = /* @__PURE__ */ (function(e) {
  function t() {
    return B8(this, t), W8(this, t, arguments);
  }
  return K8(t, e), z8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(G8, this.props);
    }
  }]);
})(C.Component);
dP(yr, "displayName", "YAxis");
dP(yr, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function Aw(e) {
  return J8(e) || Z8(e) || X8(e) || Y8();
}
function Y8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X8(e, t) {
  if (e) {
    if (typeof e == "string") return eh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eh(e, t);
  }
}
function Z8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function J8(e) {
  if (Array.isArray(e)) return eh(e);
}
function eh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var th = function(t, r, n, a, i) {
  var o = xt(t, Iv), s = xt(t, iu), u = [].concat(Aw(o), Aw(s)), c = xt(t, su), l = "".concat(a, "Id"), f = a[0], d = r;
  if (u.length && (d = u.reduce(function(h, v) {
    if (v.props[l] === n && Xt(v.props, "extendDomain") && G(v.props[f])) {
      var b = v.props[f];
      return [Math.min(h[0], b), Math.max(h[1], b)];
    }
    return h;
  }, d)), c.length) {
    var p = "".concat(f, "1"), y = "".concat(f, "2");
    d = c.reduce(function(h, v) {
      if (v.props[l] === n && Xt(v.props, "extendDomain") && G(v.props[p]) && G(v.props[y])) {
        var b = v.props[p], g = v.props[y];
        return [Math.min(h[0], b, g), Math.max(h[1], b, g)];
      }
      return h;
    }, d);
  }
  return i && i.length && (d = i.reduce(function(h, v) {
    return G(v) ? [Math.min(h[0], v), Math.max(h[1], v)] : h;
  }, d)), d;
}, Od = { exports: {} }, _w;
function Q8() {
  return _w || (_w = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function a(u, c, l) {
      this.fn = u, this.context = c, this.once = l || !1;
    }
    function i(u, c, l, f, d) {
      if (typeof l != "function")
        throw new TypeError("The listener must be a function");
      var p = new a(l, f || u, d), y = r ? r + c : c;
      return u._events[y] ? u._events[y].fn ? u._events[y] = [u._events[y], p] : u._events[y].push(p) : (u._events[y] = p, u._eventsCount++), u;
    }
    function o(u, c) {
      --u._eventsCount === 0 ? u._events = new n() : delete u._events[c];
    }
    function s() {
      this._events = new n(), this._eventsCount = 0;
    }
    s.prototype.eventNames = function() {
      var c = [], l, f;
      if (this._eventsCount === 0) return c;
      for (f in l = this._events)
        t.call(l, f) && c.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
    }, s.prototype.listeners = function(c) {
      var l = r ? r + c : c, f = this._events[l];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, p = f.length, y = new Array(p); d < p; d++)
        y[d] = f[d].fn;
      return y;
    }, s.prototype.listenerCount = function(c) {
      var l = r ? r + c : c, f = this._events[l];
      return f ? f.fn ? 1 : f.length : 0;
    }, s.prototype.emit = function(c, l, f, d, p, y) {
      var h = r ? r + c : c;
      if (!this._events[h]) return !1;
      var v = this._events[h], b = arguments.length, g, x;
      if (v.fn) {
        switch (v.once && this.removeListener(c, v.fn, void 0, !0), b) {
          case 1:
            return v.fn.call(v.context), !0;
          case 2:
            return v.fn.call(v.context, l), !0;
          case 3:
            return v.fn.call(v.context, l, f), !0;
          case 4:
            return v.fn.call(v.context, l, f, d), !0;
          case 5:
            return v.fn.call(v.context, l, f, d, p), !0;
          case 6:
            return v.fn.call(v.context, l, f, d, p, y), !0;
        }
        for (x = 1, g = new Array(b - 1); x < b; x++)
          g[x - 1] = arguments[x];
        v.fn.apply(v.context, g);
      } else {
        var O = v.length, m;
        for (x = 0; x < O; x++)
          switch (v[x].once && this.removeListener(c, v[x].fn, void 0, !0), b) {
            case 1:
              v[x].fn.call(v[x].context);
              break;
            case 2:
              v[x].fn.call(v[x].context, l);
              break;
            case 3:
              v[x].fn.call(v[x].context, l, f);
              break;
            case 4:
              v[x].fn.call(v[x].context, l, f, d);
              break;
            default:
              if (!g) for (m = 1, g = new Array(b - 1); m < b; m++)
                g[m - 1] = arguments[m];
              v[x].fn.apply(v[x].context, g);
          }
      }
      return !0;
    }, s.prototype.on = function(c, l, f) {
      return i(this, c, l, f, !1);
    }, s.prototype.once = function(c, l, f) {
      return i(this, c, l, f, !0);
    }, s.prototype.removeListener = function(c, l, f, d) {
      var p = r ? r + c : c;
      if (!this._events[p]) return this;
      if (!l)
        return o(this, p), this;
      var y = this._events[p];
      if (y.fn)
        y.fn === l && (!d || y.once) && (!f || y.context === f) && o(this, p);
      else {
        for (var h = 0, v = [], b = y.length; h < b; h++)
          (y[h].fn !== l || d && !y[h].once || f && y[h].context !== f) && v.push(y[h]);
        v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
      }
      return this;
    }, s.prototype.removeAllListeners = function(c) {
      var l;
      return c ? (l = r ? r + c : c, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, e.exports = s;
  })(Od)), Od.exports;
}
var e6 = Q8();
const t6 = /* @__PURE__ */ _e(e6);
var Sd = new t6(), Ad = "recharts.syncMouseEvents";
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function r6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hP(n.key), n);
  }
}
function a6(e, t, r) {
  return t && n6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _d(e, t, r) {
  return t = hP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hP(e) {
  var t = i6(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function i6(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var o6 = /* @__PURE__ */ (function() {
  function e() {
    r6(this, e), _d(this, "activeIndex", 0), _d(this, "coordinateList", []), _d(this, "layout", "horizontal");
  }
  return a6(e, [{
    key: "setDetails",
    value: function(r) {
      var n, a = r.coordinateList, i = a === void 0 ? null : a, o = r.container, s = o === void 0 ? null : o, u = r.layout, c = u === void 0 ? null : u, l = r.offset, f = l === void 0 ? null : l, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
      this.coordinateList = (n = i ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = s ?? this.container, this.layout = c ?? this.layout, this.offset = f ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var a = this.container.getBoundingClientRect(), i = a.x, o = a.y, s = a.height, u = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, l = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, f = i + u + c, d = o + this.offset.top + s / 2 + l;
        this.mouseHandlerCallback({
          pageX: f,
          pageY: d
        });
      }
    }
  }]);
})();
function s6(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && G(n) && G(a))
      return !0;
  }
  return !1;
}
function u6(e, t, r, n) {
  var a = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - a : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - a,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function vP(e) {
  var t = e.cx, r = e.cy, n = e.radius, a = e.startAngle, i = e.endAngle, o = je(t, r, n, a), s = je(t, r, n, i);
  return {
    points: [o, s],
    cx: t,
    cy: r,
    radius: n,
    startAngle: a,
    endAngle: i
  };
}
function c6(e, t, r) {
  var n, a, i, o;
  if (e === "horizontal")
    n = t.x, i = n, a = r.top, o = r.top + r.height;
  else if (e === "vertical")
    a = t.y, o = a, n = r.left, i = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var s = t.cx, u = t.cy, c = t.innerRadius, l = t.outerRadius, f = t.angle, d = je(s, u, c, f), p = je(s, u, l, f);
      n = d.x, a = d.y, i = p.x, o = p.y;
    } else
      return vP(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function Mi(e) {
  "@babel/helpers - typeof";
  return Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mi(e);
}
function Pw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pw(Object(r), !0).forEach(function(n) {
      l6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l6(e, t, r) {
  return t = f6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f6(e) {
  var t = d6(e, "string");
  return Mi(t) == "symbol" ? t : t + "";
}
function d6(e, t) {
  if (Mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function p6(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var y, h = Zr;
  if (d === "ScatterChart")
    y = o, h = _3;
  else if (d === "BarChart")
    y = u6(f, o, u, l), h = _v;
  else if (f === "radial") {
    var v = vP(o), b = v.cx, g = v.cy, x = v.radius, O = v.startAngle, m = v.endAngle;
    y = {
      cx: b,
      cy: g,
      startAngle: O,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, h = l_;
  } else
    y = {
      points: c6(f, o, u)
    }, h = Zr;
  var w = yo(yo(yo(yo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), y), ie(p, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: de("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ Nt(p) ? /* @__PURE__ */ Ue(p, w) : /* @__PURE__ */ uO(h, w);
}
var h6 = ["item"], v6 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
function An() {
  return An = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, An.apply(this, arguments);
}
function Tw(e, t) {
  return g6(e) || m6(e, t) || mP(e, t) || y6();
}
function y6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m6(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function g6(e) {
  if (Array.isArray(e)) return e;
}
function Ew(e, t) {
  if (e == null) return {};
  var r = b6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function b6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function x6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function w6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gP(n.key), n);
  }
}
function O6(e, t, r) {
  return t && w6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function S6(e, t, r) {
  return t = Os(t), A6(e, yP() ? Reflect.construct(t, r || [], Os(e).constructor) : t.apply(e, r));
}
function A6(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _6(e);
}
function _6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yP = function() {
    return !!e;
  })();
}
function Os(e) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Os(e);
}
function P6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && rh(e, t);
}
function rh(e, t) {
  return rh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, rh(e, t);
}
function ta(e) {
  return C6(e) || E6(e) || mP(e) || T6();
}
function T6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mP(e, t) {
  if (e) {
    if (typeof e == "string") return nh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nh(e, t);
  }
}
function E6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function C6(e) {
  if (Array.isArray(e)) return nh(e);
}
function nh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Cw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cw(Object(r), !0).forEach(function(n) {
      se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function se(e, t, r) {
  return t = gP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gP(e) {
  var t = j6(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function j6(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var M6 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, $6 = {
  width: "100%",
  height: "100%"
}, bP = {
  x: 0,
  y: 0
};
function mo(e) {
  return e;
}
var I6 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, k6 = function(t, r, n, a) {
  var i = r.find(function(l) {
    return l && l.index === n;
  });
  if (i) {
    if (t === "horizontal")
      return {
        x: i.coordinate,
        y: a.y
      };
    if (t === "vertical")
      return {
        x: a.x,
        y: i.coordinate
      };
    if (t === "centric") {
      var o = i.coordinate, s = a.radius;
      return W(W(W({}, a), je(a.cx, a.cy, s, o)), {}, {
        angle: o,
        radius: s
      });
    }
    var u = i.coordinate, c = a.angle;
    return W(W(W({}, a), je(a.cx, a.cy, u, c)), {}, {
      angle: c,
      radius: u
    });
  }
  return bP;
}, uu = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(ta(s), ta(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && G(a) && G(i) ? t.slice(a, i + 1) : [];
};
function xP(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var ah = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, s = uu(r, t);
  return n < 0 || !i || !i.length || n >= s.length ? null : i.reduce(function(u, c) {
    var l, f = (l = c.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? s : f;
      d = Oo(p, o.dataKey, a);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(ta(u), [a_(c, d)]) : u;
  }, []);
}, jw = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = I6(i, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, l = HR(o, s, c, u);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = ah(t, r, l, f), p = k6(n, s, l, i);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, D6 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = JA(l, i);
  return n.reduce(function(y, h) {
    var v, b = h.type.defaultProps !== void 0 ? W(W({}, h.type.defaultProps), h.props) : h.props, g = b.type, x = b.dataKey, O = b.allowDataOverflow, m = b.allowDuplicatedCategory, w = b.scale, A = b.ticks, _ = b.includeHidden, P = b[o];
    if (y[P])
      return y;
    var k = uu(t.data, {
      graphicalItems: a.filter(function(q) {
        var H, X = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o];
        return X === P;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), T = k.length, $, M, j;
    s6(b.domain, O, g) && ($ = mp(b.domain, null, O), p && (g === "number" || w !== "auto") && (j = Ba(k, x, "category")));
    var I = xP(g);
    if (!$ || $.length === 0) {
      var D, R = (D = b.domain) !== null && D !== void 0 ? D : I;
      if (x) {
        if ($ = Ba(k, x, g), g === "category" && p) {
          var L = y2($);
          m && L ? (M = $, $ = ss(0, T)) : m || ($ = xx(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 ? q : [].concat(ta(q), [H]);
          }, []));
        } else if (g === "category")
          m ? $ = $.filter(function(q) {
            return q !== "" && !le(q);
          }) : $ = xx(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 || H === "" || le(H) ? q : [].concat(ta(q), [H]);
          }, []);
        else if (g === "number") {
          var z = XR(k, a.filter(function(q) {
            var H, X, te = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o], ne = "hide" in q.props ? q.props.hide : (X = q.type.defaultProps) === null || X === void 0 ? void 0 : X.hide;
            return te === P && (_ || !ne);
          }), x, i, l);
          z && ($ = z);
        }
        p && (g === "number" || w !== "auto") && (j = Ba(k, x, "category"));
      } else p ? $ = ss(0, T) : s && s[P] && s[P].hasStack && g === "number" ? $ = d === "expand" ? [0, 1] : n_(s[P].stackGroups, u, c) : $ = ZA(k, a.filter(function(q) {
        var H = o in q.props ? q.props[o] : q.type.defaultProps[o], X = "hide" in q.props ? q.props.hide : q.type.defaultProps.hide;
        return H === P && (_ || !X);
      }), g, l, !0);
      if (g === "number")
        $ = th(f, $, P, i, A), R && ($ = mp(R, $, O));
      else if (g === "category" && R) {
        var N = R, B = $.every(function(q) {
          return N.indexOf(q) >= 0;
        });
        B && ($ = N);
      }
    }
    return W(W({}, y), {}, se({}, P, W(W({}, b), {}, {
      axisType: i,
      domain: $,
      categoricalDomain: j,
      duplicateDomain: M,
      originalDomain: (v = b.domain) !== null && v !== void 0 ? v : I,
      isCategorical: p,
      layout: l
    })));
  }, {});
}, N6 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = uu(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, y = JA(l, i), h = -1;
  return n.reduce(function(v, b) {
    var g = b.type.defaultProps !== void 0 ? W(W({}, b.type.defaultProps), b.props) : b.props, x = g[o], O = xP("number");
    if (!v[x]) {
      h++;
      var m;
      return y ? m = ss(0, p) : s && s[x] && s[x].hasStack ? (m = n_(s[x].stackGroups, u, c), m = th(f, m, x, i)) : (m = mp(O, ZA(d, n.filter(function(w) {
        var A, _, P = o in w.props ? w.props[o] : (A = w.type.defaultProps) === null || A === void 0 ? void 0 : A[o], k = "hide" in w.props ? w.props.hide : (_ = w.type.defaultProps) === null || _ === void 0 ? void 0 : _.hide;
        return P === x && !k;
      }), "number", l), a.defaultProps.allowDataOverflow), m = th(f, m, x, i)), W(W({}, v), {}, se({}, x, W(W({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: bt(M6, "".concat(i, ".").concat(h % 2), null),
        domain: m,
        originalDomain: O,
        isCategorical: y,
        layout: l
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return v;
  }, {});
}, R6 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(a, "Id"), d = xt(l, i), p = {};
  return d && d.length ? p = D6(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = N6(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, L6 = function(t) {
  var r = xr(t), n = ir(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Zh(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Go(r, n)
  };
}, Mw = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = yt(r, Wn), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, q6 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = or(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, $w = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, B6 = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, l = n.height, f = n.children, d = n.margin || {}, p = yt(f, Wn), y = yt(f, Gr), h = Object.keys(u).reduce(function(m, w) {
    var A = u[w], _ = A.orientation;
    return !A.mirror && !A.hide ? W(W({}, m), {}, se({}, _, m[_] + A.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), v = Object.keys(o).reduce(function(m, w) {
    var A = o[w], _ = A.orientation;
    return !A.mirror && !A.hide ? W(W({}, m), {}, se({}, _, bt(m, "".concat(_)) + A.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), b = W(W({}, v), h), g = b.bottom;
  p && (b.bottom += p.props.height || Wn.defaultProps.height), y && r && (b = GR(b, a, n, r));
  var x = c - b.left - b.right, O = l - b.top - b.bottom;
  return W(W({
    brushBottom: g
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(O, 0)
  });
}, F6 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, cu = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(b, g) {
    var x = g.graphicalItems, O = g.stackGroups, m = g.offset, w = g.updateId, A = g.dataStartIndex, _ = g.dataEndIndex, P = b.barSize, k = b.layout, T = b.barGap, $ = b.barCategoryGap, M = b.maxBarSize, j = $w(k), I = j.numericAxisName, D = j.cateAxisName, R = q6(x), L = [];
    return x.forEach(function(z, N) {
      var B = uu(b.data, {
        graphicalItems: [z],
        dataStartIndex: A,
        dataEndIndex: _
      }), q = z.type.defaultProps !== void 0 ? W(W({}, z.type.defaultProps), z.props) : z.props, H = q.dataKey, X = q.maxBarSize, te = q["".concat(I, "Id")], ne = q["".concat(D, "Id")], ee = {}, Q = u.reduce(function(ye, qe) {
        var er, fn, dn = g["".concat(qe.axisType, "Map")], Ji = q["".concat(qe.axisType, "Id")];
        dn && dn[Ji] || qe.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? lt(!1, "Specifying a(n) ".concat(qe.axisType, "Id requires a corresponding ").concat(
          qe.axisType,
          "Id on the targeted graphical component "
        ).concat((er = z == null || (fn = z.type) === null || fn === void 0 ? void 0 : fn.displayName) !== null && er !== void 0 ? er : "")) : lt());
        var ga = dn[Ji];
        return W(W({}, ye), {}, se(se({}, qe.axisType, ga), "".concat(qe.axisType, "Ticks"), ir(ga)));
      }, ee), U = Q[D], V = Q["".concat(D, "Ticks")], Z = O && O[te] && O[te].hasStack && iL(z, O[te].stackGroups), E = or(z.type).indexOf("Bar") >= 0, Y = Go(U, V), F = [], ae = R && KR({
        barSize: P,
        stackGroups: O,
        totalSize: F6(Q, D)
      });
      if (E) {
        var ce, oe, Se = le(X) ? M : X, Te = (ce = (oe = Go(U, V, !0)) !== null && oe !== void 0 ? oe : Se) !== null && ce !== void 0 ? ce : 0;
        F = VR({
          barGap: T,
          barCategoryGap: $,
          bandSize: Te !== Y ? Te : Y,
          sizeList: ae[ne],
          maxBarSize: Se
        }), Te !== Y && (F = F.map(function(ye) {
          return W(W({}, ye), {}, {
            position: W(W({}, ye.position), {}, {
              offset: ye.position.offset - Te / 2
            })
          });
        }));
      }
      var me = z && z.type && z.type.getComposedData;
      me && L.push({
        props: W(W({}, me(W(W({}, Q), {}, {
          displayedData: B,
          props: b,
          dataKey: H,
          item: z,
          bandSize: Y,
          barPosition: F,
          offset: m,
          stackedData: Z,
          layout: k,
          dataStartIndex: A,
          dataEndIndex: _
        }))), {}, se(se(se({
          key: z.key || "item-".concat(N)
        }, I, Q[I]), D, Q[D]), "animationId", w)),
        childIndex: T2(z, b.children),
        item: z
      });
    }), L;
  }, p = function(b, g) {
    var x = b.props, O = b.dataStartIndex, m = b.dataEndIndex, w = b.updateId;
    if (!jg({
      props: x
    }))
      return null;
    var A = x.children, _ = x.layout, P = x.stackOffset, k = x.data, T = x.reverseStackOrder, $ = $w(_), M = $.numericAxisName, j = $.cateAxisName, I = xt(A, n), D = nL(k, I, "".concat(M, "Id"), "".concat(j, "Id"), P, T), R = u.reduce(function(q, H) {
      var X = "".concat(H.axisType, "Map");
      return W(W({}, q), {}, se({}, X, R6(x, W(W({}, H), {}, {
        graphicalItems: I,
        stackGroups: H.axisType === M && D,
        dataStartIndex: O,
        dataEndIndex: m
      }))));
    }, {}), L = B6(W(W({}, R), {}, {
      props: x,
      graphicalItems: I
    }), g?.legendBBox);
    Object.keys(R).forEach(function(q) {
      R[q] = l(x, R[q], L, q.replace("Map", ""), r);
    });
    var z = R["".concat(j, "Map")], N = L6(z), B = d(x, W(W({}, R), {}, {
      dataStartIndex: O,
      dataEndIndex: m,
      updateId: w,
      graphicalItems: I,
      stackGroups: D,
      offset: L
    }));
    return W(W({
      formattedGraphicalItems: B,
      graphicalItems: I,
      offset: L,
      stackGroups: D
    }, N), R);
  }, y = /* @__PURE__ */ (function(v) {
    function b(g) {
      var x, O, m;
      return x6(this, b), m = S6(this, b, [g]), se(m, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), se(m, "accessibilityManager", new o6()), se(m, "handleLegendBBoxUpdate", function(w) {
        if (w) {
          var A = m.state, _ = A.dataStartIndex, P = A.dataEndIndex, k = A.updateId;
          m.setState(W({
            legendBBox: w
          }, p({
            props: m.props,
            dataStartIndex: _,
            dataEndIndex: P,
            updateId: k
          }, W(W({}, m.state), {}, {
            legendBBox: w
          }))));
        }
      }), se(m, "handleReceiveSyncEvent", function(w, A, _) {
        if (m.props.syncId === w) {
          if (_ === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(A);
        }
      }), se(m, "handleBrushChange", function(w) {
        var A = w.startIndex, _ = w.endIndex;
        if (A !== m.state.dataStartIndex || _ !== m.state.dataEndIndex) {
          var P = m.state.updateId;
          m.setState(function() {
            return W({
              dataStartIndex: A,
              dataEndIndex: _
            }, p({
              props: m.props,
              dataStartIndex: A,
              dataEndIndex: _,
              updateId: P
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: A,
            dataEndIndex: _
          });
        }
      }), se(m, "handleMouseEnter", function(w) {
        var A = m.getMouseInfo(w);
        if (A) {
          var _ = W(W({}, A), {}, {
            isTooltipActive: !0
          });
          m.setState(_), m.triggerSyncEvent(_);
          var P = m.props.onMouseEnter;
          ue(P) && P(_, w);
        }
      }), se(m, "triggeredAfterMouseMove", function(w) {
        var A = m.getMouseInfo(w), _ = A ? W(W({}, A), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(_), m.triggerSyncEvent(_);
        var P = m.props.onMouseMove;
        ue(P) && P(_, w);
      }), se(m, "handleItemMouseEnter", function(w) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: w,
            activePayload: w.tooltipPayload,
            activeCoordinate: w.tooltipPosition || {
              x: w.cx,
              y: w.cy
            }
          };
        });
      }), se(m, "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), se(m, "handleMouseMove", function(w) {
        w.persist(), m.throttleTriggeredAfterMouseMove(w);
      }), se(m, "handleMouseLeave", function(w) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var A = {
          isTooltipActive: !1
        };
        m.setState(A), m.triggerSyncEvent(A);
        var _ = m.props.onMouseLeave;
        ue(_) && _(A, w);
      }), se(m, "handleOuterEvent", function(w) {
        var A = P2(w), _ = bt(m.props, "".concat(A));
        if (A && ue(_)) {
          var P, k;
          /.*touch.*/i.test(A) ? k = m.getMouseInfo(w.changedTouches[0]) : k = m.getMouseInfo(w), _((P = k) !== null && P !== void 0 ? P : {}, w);
        }
      }), se(m, "handleClick", function(w) {
        var A = m.getMouseInfo(w);
        if (A) {
          var _ = W(W({}, A), {}, {
            isTooltipActive: !0
          });
          m.setState(_), m.triggerSyncEvent(_);
          var P = m.props.onClick;
          ue(P) && P(_, w);
        }
      }), se(m, "handleMouseDown", function(w) {
        var A = m.props.onMouseDown;
        if (ue(A)) {
          var _ = m.getMouseInfo(w);
          A(_, w);
        }
      }), se(m, "handleMouseUp", function(w) {
        var A = m.props.onMouseUp;
        if (ue(A)) {
          var _ = m.getMouseInfo(w);
          A(_, w);
        }
      }), se(m, "handleTouchMove", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(w.changedTouches[0]);
      }), se(m, "handleTouchStart", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseDown(w.changedTouches[0]);
      }), se(m, "handleTouchEnd", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseUp(w.changedTouches[0]);
      }), se(m, "handleDoubleClick", function(w) {
        var A = m.props.onDoubleClick;
        if (ue(A)) {
          var _ = m.getMouseInfo(w);
          A(_, w);
        }
      }), se(m, "handleContextMenu", function(w) {
        var A = m.props.onContextMenu;
        if (ue(A)) {
          var _ = m.getMouseInfo(w);
          A(_, w);
        }
      }), se(m, "triggerSyncEvent", function(w) {
        m.props.syncId !== void 0 && Sd.emit(Ad, m.props.syncId, w, m.eventEmitterSymbol);
      }), se(m, "applySyncEvent", function(w) {
        var A = m.props, _ = A.layout, P = A.syncMethod, k = m.state.updateId, T = w.dataStartIndex, $ = w.dataEndIndex;
        if (w.dataStartIndex !== void 0 || w.dataEndIndex !== void 0)
          m.setState(W({
            dataStartIndex: T,
            dataEndIndex: $
          }, p({
            props: m.props,
            dataStartIndex: T,
            dataEndIndex: $,
            updateId: k
          }, m.state)));
        else if (w.activeTooltipIndex !== void 0) {
          var M = w.chartX, j = w.chartY, I = w.activeTooltipIndex, D = m.state, R = D.offset, L = D.tooltipTicks;
          if (!R)
            return;
          if (typeof P == "function")
            I = P(L, w);
          else if (P === "value") {
            I = -1;
            for (var z = 0; z < L.length; z++)
              if (L[z].value === w.activeLabel) {
                I = z;
                break;
              }
          }
          var N = W(W({}, R), {}, {
            x: R.left,
            y: R.top
          }), B = Math.min(M, N.x + N.width), q = Math.min(j, N.y + N.height), H = L[I] && L[I].value, X = ah(m.state, m.props.data, I), te = L[I] ? {
            x: _ === "horizontal" ? L[I].coordinate : B,
            y: _ === "horizontal" ? q : L[I].coordinate
          } : bP;
          m.setState(W(W({}, w), {}, {
            activeLabel: H,
            activeCoordinate: te,
            activePayload: X,
            activeTooltipIndex: I
          }));
        } else
          m.setState(w);
      }), se(m, "renderCursor", function(w) {
        var A, _ = m.state, P = _.isTooltipActive, k = _.activeCoordinate, T = _.activePayload, $ = _.offset, M = _.activeTooltipIndex, j = _.tooltipAxisBandSize, I = m.getTooltipEventType(), D = (A = w.props.active) !== null && A !== void 0 ? A : P, R = m.props.layout, L = w.key || "_recharts-cursor";
        return /* @__PURE__ */ C.createElement(p6, {
          key: L,
          activeCoordinate: k,
          activePayload: T,
          activeTooltipIndex: M,
          chartName: r,
          element: w,
          isActive: D,
          layout: R,
          offset: $,
          tooltipAxisBandSize: j,
          tooltipEventType: I
        });
      }), se(m, "renderPolarAxis", function(w, A, _) {
        var P = bt(w, "type.axisType"), k = bt(m.state, "".concat(P, "Map")), T = w.type.defaultProps, $ = T !== void 0 ? W(W({}, T), w.props) : w.props, M = k && k[$["".concat(P, "Id")]];
        return /* @__PURE__ */ Ue(w, W(W({}, M), {}, {
          className: de(P, M.className),
          key: w.key || "".concat(A, "-").concat(_),
          ticks: ir(M, !0)
        }));
      }), se(m, "renderPolarGrid", function(w) {
        var A = w.props, _ = A.radialLines, P = A.polarAngles, k = A.polarRadius, T = m.state, $ = T.radiusAxisMap, M = T.angleAxisMap, j = xr($), I = xr(M), D = I.cx, R = I.cy, L = I.innerRadius, z = I.outerRadius;
        return /* @__PURE__ */ Ue(w, {
          polarAngles: Array.isArray(P) ? P : ir(I, !0).map(function(N) {
            return N.coordinate;
          }),
          polarRadius: Array.isArray(k) ? k : ir(j, !0).map(function(N) {
            return N.coordinate;
          }),
          cx: D,
          cy: R,
          innerRadius: L,
          outerRadius: z,
          key: w.key || "polar-grid",
          radialLines: _
        });
      }), se(m, "renderLegend", function() {
        var w = m.state.formattedGraphicalItems, A = m.props, _ = A.children, P = A.width, k = A.height, T = m.props.margin || {}, $ = P - (T.left || 0) - (T.right || 0), M = YA({
          children: _,
          formattedGraphicalItems: w,
          legendWidth: $,
          legendContent: c
        });
        if (!M)
          return null;
        var j = M.item, I = Ew(M, h6);
        return /* @__PURE__ */ Ue(j, W(W({}, I), {}, {
          chartWidth: P,
          chartHeight: k,
          margin: T,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), se(m, "renderTooltip", function() {
        var w, A = m.props, _ = A.children, P = A.accessibilityLayer, k = yt(_, Ut);
        if (!k)
          return null;
        var T = m.state, $ = T.isTooltipActive, M = T.activeCoordinate, j = T.activePayload, I = T.activeLabel, D = T.offset, R = (w = k.props.active) !== null && w !== void 0 ? w : $;
        return /* @__PURE__ */ Ue(k, {
          viewBox: W(W({}, D), {}, {
            x: D.left,
            y: D.top
          }),
          active: R,
          label: I,
          payload: R ? j : [],
          coordinate: M,
          accessibilityLayer: P
        });
      }), se(m, "renderBrush", function(w) {
        var A = m.props, _ = A.margin, P = A.data, k = m.state, T = k.offset, $ = k.dataStartIndex, M = k.dataEndIndex, j = k.updateId;
        return /* @__PURE__ */ Ue(w, {
          key: w.key || "_recharts-brush",
          onChange: co(m.handleBrushChange, w.props.onChange),
          data: P,
          x: G(w.props.x) ? w.props.x : T.left,
          y: G(w.props.y) ? w.props.y : T.top + T.height + T.brushBottom - (_.bottom || 0),
          width: G(w.props.width) ? w.props.width : T.width,
          startIndex: $,
          endIndex: M,
          updateId: "brush-".concat(j)
        });
      }), se(m, "renderReferenceElement", function(w, A, _) {
        if (!w)
          return null;
        var P = m, k = P.clipPathId, T = m.state, $ = T.xAxisMap, M = T.yAxisMap, j = T.offset, I = w.type.defaultProps || {}, D = w.props, R = D.xAxisId, L = R === void 0 ? I.xAxisId : R, z = D.yAxisId, N = z === void 0 ? I.yAxisId : z;
        return /* @__PURE__ */ Ue(w, {
          key: w.key || "".concat(A, "-").concat(_),
          xAxis: $[L],
          yAxis: M[N],
          viewBox: {
            x: j.left,
            y: j.top,
            width: j.width,
            height: j.height
          },
          clipPathId: k
        });
      }), se(m, "renderActivePoints", function(w) {
        var A = w.item, _ = w.activePoint, P = w.basePoint, k = w.childIndex, T = w.isRange, $ = [], M = A.props.key, j = A.item.type.defaultProps !== void 0 ? W(W({}, A.item.type.defaultProps), A.item.props) : A.item.props, I = j.activeDot, D = j.dataKey, R = W(W({
          index: k,
          dataKey: D,
          cx: _.x,
          cy: _.y,
          r: 4,
          fill: Sv(A.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: _.payload,
          value: _.value
        }, ie(I, !1)), So(I));
        return $.push(b.renderActiveDot(I, R, "".concat(M, "-activePoint-").concat(k))), P ? $.push(b.renderActiveDot(I, W(W({}, R), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(M, "-basePoint-").concat(k))) : T && $.push(null), $;
      }), se(m, "renderGraphicChild", function(w, A, _) {
        var P = m.filterFormatItem(w, A, _);
        if (!P)
          return null;
        var k = m.getTooltipEventType(), T = m.state, $ = T.isTooltipActive, M = T.tooltipAxis, j = T.activeTooltipIndex, I = T.activeLabel, D = m.props.children, R = yt(D, Ut), L = P.props, z = L.points, N = L.isRange, B = L.baseLine, q = P.item.type.defaultProps !== void 0 ? W(W({}, P.item.type.defaultProps), P.item.props) : P.item.props, H = q.activeDot, X = q.hide, te = q.activeBar, ne = q.activeShape, ee = !!(!X && $ && R && (H || te || ne)), Q = {};
        k !== "axis" && R && R.props.trigger === "click" ? Q = {
          onClick: co(m.handleItemMouseEnter, w.props.onClick)
        } : k !== "axis" && (Q = {
          onMouseLeave: co(m.handleItemMouseLeave, w.props.onMouseLeave),
          onMouseEnter: co(m.handleItemMouseEnter, w.props.onMouseEnter)
        });
        var U = /* @__PURE__ */ Ue(w, W(W({}, P.props), Q));
        function V(qe) {
          return typeof M.dataKey == "function" ? M.dataKey(qe.payload) : null;
        }
        if (ee)
          if (j >= 0) {
            var Z, E;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var Y = typeof M.dataKey == "function" ? V : "payload.".concat(M.dataKey.toString());
              Z = Oo(z, Y, I), E = N && B && Oo(B, Y, I);
            } else
              Z = z?.[j], E = N && B && B[j];
            if (ne || te) {
              var F = w.props.activeIndex !== void 0 ? w.props.activeIndex : j;
              return [/* @__PURE__ */ Ue(w, W(W(W({}, P.props), Q), {}, {
                activeIndex: F
              })), null, null];
            }
            if (!le(Z))
              return [U].concat(ta(m.renderActivePoints({
                item: P,
                activePoint: Z,
                basePoint: E,
                childIndex: j,
                isRange: N
              })));
          } else {
            var ae, ce = (ae = m.getItemByXY(m.state.activeCoordinate)) !== null && ae !== void 0 ? ae : {
              graphicalItem: U
            }, oe = ce.graphicalItem, Se = oe.item, Te = Se === void 0 ? w : Se, me = oe.childIndex, ye = W(W(W({}, P.props), Q), {}, {
              activeIndex: me
            });
            return [/* @__PURE__ */ Ue(Te, ye), null, null];
          }
        return N ? [U, null, null] : [U, null];
      }), se(m, "renderCustomized", function(w, A, _) {
        return /* @__PURE__ */ Ue(w, W(W({
          key: "recharts-customized-".concat(_)
        }, m.props), m.state));
      }), se(m, "renderMap", {
        CartesianGrid: {
          handler: mo,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: mo
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: mo
        },
        YAxis: {
          handler: mo
        },
        Brush: {
          handler: m.renderBrush,
          once: !0
        },
        Bar: {
          handler: m.renderGraphicChild
        },
        Line: {
          handler: m.renderGraphicChild
        },
        Area: {
          handler: m.renderGraphicChild
        },
        Radar: {
          handler: m.renderGraphicChild
        },
        RadialBar: {
          handler: m.renderGraphicChild
        },
        Scatter: {
          handler: m.renderGraphicChild
        },
        Pie: {
          handler: m.renderGraphicChild
        },
        Funnel: {
          handler: m.renderGraphicChild
        },
        Tooltip: {
          handler: m.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: m.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: m.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: m.renderPolarAxis
        },
        Customized: {
          handler: m.renderCustomized
        }
      }), m.clipPathId = "".concat((x = g.id) !== null && x !== void 0 ? x : sn("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = GS(m.triggeredAfterMouseMove, (O = g.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m;
    }
    return P6(b, v), O6(b, [{
      key: "componentDidMount",
      value: function() {
        var x, O;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (x = this.props.margin.left) !== null && x !== void 0 ? x : 0,
            top: (O = this.props.margin.top) !== null && O !== void 0 ? O : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var x = this.props, O = x.children, m = x.data, w = x.height, A = x.layout, _ = yt(O, Ut);
        if (_) {
          var P = _.props.defaultIndex;
          if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
            var k = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, T = ah(this.state, m, P, k), $ = this.state.tooltipTicks[P].coordinate, M = (this.state.offset.top + w) / 2, j = A === "horizontal", I = j ? {
              x: $,
              y: M
            } : {
              y: $,
              x: M
            }, D = this.state.formattedGraphicalItems.find(function(L) {
              var z = L.item;
              return z.type.name === "Scatter";
            });
            D && (I = W(W({}, I), D.props.points[P].tooltipPosition), T = D.props.points[P].tooltipPayload);
            var R = {
              activeTooltipIndex: P,
              isTooltipActive: !0,
              activeLabel: k,
              activePayload: T,
              activeCoordinate: I
            };
            this.setState(R), this.renderCursor(_), this.accessibilityManager.setIndex(P);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(x, O) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== O.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== x.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== x.margin) {
          var m, w;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(x) {
        qd([yt(x.children, Ut)], [yt(this.props.children, Ut)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = yt(this.props.children, Ut);
        if (x && typeof x.props.shared == "boolean") {
          var O = x.props.shared ? "axis" : "item";
          return s.indexOf(O) >= 0 ? O : i;
        }
        return i;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(x) {
        if (!this.container)
          return null;
        var O = this.container, m = O.getBoundingClientRect(), w = qI(m), A = {
          chartX: Math.round(x.pageX - w.left),
          chartY: Math.round(x.pageY - w.top)
        }, _ = m.width / O.offsetWidth || 1, P = this.inRange(A.chartX, A.chartY, _);
        if (!P)
          return null;
        var k = this.state, T = k.xAxisMap, $ = k.yAxisMap, M = this.getTooltipEventType();
        if (M !== "axis" && T && $) {
          var j = xr(T).scale, I = xr($).scale, D = j && j.invert ? j.invert(A.chartX) : null, R = I && I.invert ? I.invert(A.chartY) : null;
          return W(W({}, A), {}, {
            xValue: D,
            yValue: R
          });
        }
        var L = jw(this.state, this.props.data, this.props.layout, P);
        return L ? W(W({}, A), L) : null;
      }
    }, {
      key: "inRange",
      value: function(x, O) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, w = this.props.layout, A = x / m, _ = O / m;
        if (w === "horizontal" || w === "vertical") {
          var P = this.state.offset, k = A >= P.left && A <= P.left + P.width && _ >= P.top && _ <= P.top + P.height;
          return k ? {
            x: A,
            y: _
          } : null;
        }
        var T = this.state, $ = T.angleAxisMap, M = T.radiusAxisMap;
        if ($ && M) {
          var j = xr($);
          return Sx({
            x: A,
            y: _
          }, j);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, O = this.getTooltipEventType(), m = yt(x, Ut), w = {};
        m && O === "axis" && (m.props.trigger === "click" ? w = {
          onClick: this.handleClick
        } : w = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var A = So(this.props, this.handleOuterEvent);
        return W(W({}, A), w);
      }
    }, {
      key: "addListener",
      value: function() {
        Sd.on(Ad, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Sd.removeListener(Ad, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, O, m) {
        for (var w = this.state.formattedGraphicalItems, A = 0, _ = w.length; A < _; A++) {
          var P = w[A];
          if (P.item === x || P.props.key === x.key || O === or(P.item.type) && m === P.childIndex)
            return P;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, O = this.state.offset, m = O.left, w = O.top, A = O.height, _ = O.width;
        return /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ C.createElement("rect", {
          x: m,
          y: w,
          height: A,
          width: _
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var x = this.state.xAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = Tw(m, 2), A = w[0], _ = w[1];
          return W(W({}, O), {}, se({}, A, _.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = Tw(m, 2), A = w[0], _ = w[1];
          return W(W({}, O), {}, se({}, A, _.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(x) {
        var O;
        return (O = this.state.xAxisMap) === null || O === void 0 || (O = O[x]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(x) {
        var O;
        return (O = this.state.yAxisMap) === null || O === void 0 || (O = O[x]) === null || O === void 0 ? void 0 : O.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(x) {
        var O = this.state, m = O.formattedGraphicalItems, w = O.activeItem;
        if (m && m.length)
          for (var A = 0, _ = m.length; A < _; A++) {
            var P = m[A], k = P.props, T = P.item, $ = T.type.defaultProps !== void 0 ? W(W({}, T.type.defaultProps), T.props) : T.props, M = or(T.type);
            if (M === "Bar") {
              var j = (k.data || []).find(function(L) {
                return i3(x, L);
              });
              if (j)
                return {
                  graphicalItem: P,
                  payload: j
                };
            } else if (M === "RadialBar") {
              var I = (k.data || []).find(function(L) {
                return Sx(x, L);
              });
              if (I)
                return {
                  graphicalItem: P,
                  payload: I
                };
            } else if (tu(P, w) || ru(P, w) || Pi(P, w)) {
              var D = E5({
                graphicalItem: P,
                activeTooltipItem: w,
                itemData: $.data
              }), R = $.activeIndex === void 0 ? D : $.activeIndex;
              return {
                graphicalItem: W(W({}, P), {}, {
                  childIndex: R
                }),
                payload: Pi(P, w) ? $.data[D] : P.props.data[D]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!jg(this))
          return null;
        var O = this.props, m = O.children, w = O.className, A = O.width, _ = O.height, P = O.style, k = O.compact, T = O.title, $ = O.desc, M = Ew(O, v6), j = ie(M, !1);
        if (k)
          return /* @__PURE__ */ C.createElement(ow, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ C.createElement(Fd, An({}, j, {
            width: A,
            height: _,
            title: T,
            desc: $
          }), this.renderClipPath(), $g(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var I, D;
          j.tabIndex = (I = this.props.tabIndex) !== null && I !== void 0 ? I : 0, j.role = (D = this.props.role) !== null && D !== void 0 ? D : "application", j.onKeyDown = function(L) {
            x.accessibilityManager.keyboardEvent(L);
          }, j.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var R = this.parseEventsOfWrapper();
        return /* @__PURE__ */ C.createElement(ow, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ C.createElement("div", An({
          className: de("recharts-wrapper", w),
          style: W({
            position: "relative",
            cursor: "default",
            width: A,
            height: _
          }, P)
        }, R, {
          ref: function(z) {
            x.container = z;
          }
        }), /* @__PURE__ */ C.createElement(Fd, An({}, j, {
          width: A,
          height: _,
          title: T,
          desc: $,
          style: $6
        }), this.renderClipPath(), $g(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(cO);
  se(y, "displayName", r), se(y, "defaultProps", W({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, f)), se(y, "getDerivedStateFromProps", function(v, b) {
    var g = v.dataKey, x = v.data, O = v.children, m = v.width, w = v.height, A = v.layout, _ = v.stackOffset, P = v.margin, k = b.dataStartIndex, T = b.dataEndIndex;
    if (b.updateId === void 0) {
      var $ = Mw(v);
      return W(W(W({}, $), {}, {
        updateId: 0
      }, p(W(W({
        props: v
      }, $), {}, {
        updateId: 0
      }), b)), {}, {
        prevDataKey: g,
        prevData: x,
        prevWidth: m,
        prevHeight: w,
        prevLayout: A,
        prevStackOffset: _,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (g !== b.prevDataKey || x !== b.prevData || m !== b.prevWidth || w !== b.prevHeight || A !== b.prevLayout || _ !== b.prevStackOffset || !_n(P, b.prevMargin)) {
      var M = Mw(v), j = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, I = W(W({}, jw(b, x, A)), {}, {
        updateId: b.updateId + 1
      }), D = W(W(W({}, M), j), I);
      return W(W(W({}, D), p(W({
        props: v
      }, D), b)), {}, {
        prevDataKey: g,
        prevData: x,
        prevWidth: m,
        prevHeight: w,
        prevLayout: A,
        prevStackOffset: _,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (!qd(O, b.prevChildren)) {
      var R, L, z, N, B = yt(O, Wn), q = B && (R = (L = B.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && R !== void 0 ? R : k, H = B && (z = (N = B.props) === null || N === void 0 ? void 0 : N.endIndex) !== null && z !== void 0 ? z : T, X = q !== k || H !== T, te = !le(x), ne = te && !X ? b.updateId : b.updateId + 1;
      return W(W({
        updateId: ne
      }, p(W(W({
        props: v
      }, b), {}, {
        updateId: ne,
        dataStartIndex: q,
        dataEndIndex: H
      }), b)), {}, {
        prevChildren: O,
        dataStartIndex: q,
        dataEndIndex: H
      });
    }
    return null;
  }), se(y, "renderActiveDot", function(v, b, g) {
    var x;
    return /* @__PURE__ */ Nt(v) ? x = /* @__PURE__ */ Ue(v, b) : ue(v) ? x = v(b) : x = /* @__PURE__ */ C.createElement(Ki, b), /* @__PURE__ */ C.createElement(pe, {
      className: "recharts-active-dot",
      key: g
    }, x);
  });
  var h = /* @__PURE__ */ ze(function(b, g) {
    return /* @__PURE__ */ C.createElement(y, An({}, b, {
      ref: g
    }));
  });
  return h.displayName = y.displayName, h;
}, z6 = cu({
  chartName: "LineChart",
  GraphicalChild: Gi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: Pv
}), wP = cu({
  chartName: "BarChart",
  GraphicalChild: $r,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: Pv
}), W6 = cu({
  chartName: "PieChart",
  GraphicalChild: hr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: eu
  }, {
    axisType: "radiusAxis",
    AxisComp: Js
  }],
  formatAxisMap: vL,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), U6 = cu({
  chartName: "AreaChart",
  GraphicalChild: Ir,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: Pv
});
const H6 = As({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), K6 = {
  light: "",
  dark: ".dark"
}, OP = fe.createContext(null);
function SP() {
  const e = fe.useContext(OP);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const V6 = ({ id: e, className: t, children: r, aspect: n, config: a, ...i }, o) => {
  const s = fe.useId(), u = `chart-${e || s.replace(/:/g, "")}`, c = fe.useRef(null), [l, f] = he(), d = He(() => new ResizeObserver((p) => f(p[0].contentRect.height)), []);
  return sO(() => {
    const p = o && "current" in o ? o.current : c.current;
    return p && d.observe(p.parentElement), () => {
      d.disconnect();
    };
  }, [d, o, c]), S(OP.Provider, {
    value: {
      config: a
    },
    children: K("div", {
      "data-chromatic": "ignore",
      "data-chart": u,
      ref: o || c,
      className: J("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", n ? H6({
        aspect: n
      }) : "aspect-auto h-full", t),
      ...i,
      children: [S(G6, {
        id: u,
        config: a
      }), S($I, {
        height: l,
        className: "overflow-visible",
        children: r
      })]
    })
  });
}, da = fe.forwardRef(V6);
da.displayName = "Chart";
const G6 = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([a, i]) => i.theme || i.color);
  if (!r.length)
    return null;
  const n = Object.entries(K6).map(([a, i]) => `
${i} [data-chart=${e}] {
${r.map(([o, s]) => {
    const u = s.theme?.[a] || s.color;
    return u ? `  --color-${o}: ${u};` : null;
  }).join(`
`)}
}
`);
  return S("style", {
    dangerouslySetInnerHTML: {
      __html: zT.sanitize(n.join(`
`))
    }
  });
}, Yi = Ut, pa = fe.forwardRef(({ active: e, payload: t, className: r, indicator: n = "dot", hideLabel: a = !1, hideIndicator: i = !1, label: o, labelFormatter: s, labelClassName: u, formatter: c, yAxisFormatter: l, color: f, nameKey: d, labelKey: p }, y) => {
  const { config: h } = SP(), v = fe.useMemo(() => {
    if (a || !t?.length)
      return null;
    const [g] = t, x = `${p || g.dataKey || g.name || "value"}`, O = ih(h, g, x), m = !p && typeof o == "string" ? h[o]?.label || o : O?.label;
    return s ? S("div", {
      className: J("font-medium", u),
      children: s(m, t)
    }) : m ? S("div", {
      className: J("font-medium", u),
      children: m
    }) : null;
  }, [o, s, t, a, u, h, p]);
  if (!e || !t?.length)
    return null;
  const b = t.length === 1 && n !== "dot";
  return K("div", {
    ref: y,
    className: J("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary px-3 py-2.5 text-base shadow-lg backdrop-blur", r),
    children: [b ? null : v, S("div", {
      className: "grid gap-2",
      children: t.map((g, x) => {
        const O = `${d || g.name || g.dataKey || "value"}`, m = ih(h, g, O), w = f || g.payload.fill || g.color;
        return S("div", {
          className: J("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", n === "dot" && "items-center"),
          children: c && g?.value !== void 0 && g.name ? c(g.value, g.name, g, x, g.payload) : K(ft, {
            children: [m?.icon ? S(m.icon, {}) : !i && S("div", {
              className: J("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                "h-2.5 w-2.5": n === "dot",
                "w-1": n === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                "my-0.5": b && n === "dashed"
              }),
              style: {
                "--color-bg": w,
                "--color-border": w
              }
            }), K("div", {
              className: J("flex flex-1 justify-between text-sm leading-none", b ? "items-end" : "items-center"),
              children: [K("div", {
                className: "grid gap-2",
                children: [b ? v : null, S("span", {
                  className: "pr-2 text-f1-foreground",
                  children: m?.label || g.name
                })]
              }), g.value && S("span", {
                className: "font-mono font-medium tabular-nums text-f1-foreground",
                children: l ? l(String(g.value)) : g.value.toLocaleString()
              })]
            })]
          })
        }, g.dataKey);
      })
    })]
  });
});
pa.displayName = "ChartTooltip";
const Nv = Gr, lu = fe.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a, hiddenKey: i, leftShift: o = 0 }, s) => {
  const { config: u } = SP();
  return r?.length ? S("div", {
    ref: s,
    className: J("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", n === "top" ? "pb-2" : "pt-2", e),
    style: {
      marginLeft: o
    },
    children: r.map((c) => {
      const l = `${a || c.dataKey || "value"}`, f = ih(u, c, l, i);
      return K("div", {
        className: J("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
        children: [f?.icon && !t ? S(f.icon, {}) : f && S("div", {
          className: "h-2 w-2 shrink-0 rounded-full",
          style: {
            backgroundColor: c.color
          }
        }), S("span", {
          className: "text-f1-foreground",
          children: f?.label
        })]
      }, JSON.stringify(c));
    })
  }) : null;
});
lu.displayName = "ChartLegend";
function ih(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const a = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  if (r in t && typeof t[r] == "string" ? i = t[r] : a && r in a && typeof a[r] == "string" ? i = a[r] : "dataKey" in t && typeof t.dataKey == "string" && (i = t.dataKey), !(n && n === i))
    return i in e ? e[i] : e[r];
}
const AP = Ft({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), UW = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = he(e), a = tt(() => {
    n(!0);
  }, []), i = tt(() => n(!1), []), o = tt(() => n((s) => !s), []);
  return S(AP.Provider, {
    value: {
      enable: a,
      disable: i,
      toggle: o,
      enabled: r
    },
    children: t
  });
}, Y6 = () => {
  const e = dt(AP);
  if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, qt = (e, t) => {
  const r = ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8"];
  return Et(r[e % r.length], t);
}, Et = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function Xi(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Rv = (e) => ({
  dataKey: "x",
  domain: e?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), Lv = (e) => ({
  tickLine: !1,
  axisLine: !1,
  domain: e?.domain,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), fu = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), du = (e = !1) => ({
  cursor: !0,
  offset: e ? 0 : 20,
  position: {
    y: e ? void 0 : 0,
    x: e ? 120 : void 0
  },
  animationDuration: 100,
  isAnimationActive: !0
});
function ha(e) {
  return ze(e);
}
function qv(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const X6 = ({ index: e, visibleTicksCount: t, payload: r, tickFormatter: n, ...a }) => {
  const i = e === 0, o = e === t - 1;
  return S(_r, {
    ...a,
    textAnchor: i ? "start" : o ? "end" : "middle",
    children: n?.(r.value, r.index) ?? r.value
  });
}, Z6 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n, canBeBlurred: a, blurArea: i, lineType: o = "monotoneX", aspect: s, marginTop: u = 0 }, c) => {
  const { enabled: l } = Y6(), f = Object.keys(t), d = Xj(12), p = qv(e), y = Math.max(...p.flatMap((x) => f.map((O) => Xi(n?.tickFormatter ? n.tickFormatter(`${x[O]}`) : `${x[O]}`)))), h = n?.width ?? y + 20, v = !n?.hide, b = !r?.hide, g = !a || !l;
  return S(da, {
    config: t,
    ref: c,
    aspect: s,
    children: K(U6, {
      accessibilityLayer: !0,
      data: p,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: u
      },
      children: [K("defs", {
        children: [K("linearGradient", {
          id: `${d}-fadeGradient`,
          gradientUnits: "userSpaceOnUse",
          x1: `${v ? h : 0}`,
          y1: "0",
          x2: "100%",
          y2: "0",
          children: [(i === "l" || i === "lr") && K(ft, {
            children: [S("stop", {
              offset: "0%",
              stopColor: "black",
              stopOpacity: "0"
            }), S("stop", {
              offset: "1%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), S("stop", {
              offset: "7%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          }), (i === "r" || i === "lr") && K(ft, {
            children: [S("stop", {
              offset: "93%",
              stopColor: "white",
              stopOpacity: "1"
            }), S("stop", {
              offset: "99%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), S("stop", {
              offset: "100%",
              stopColor: "black",
              stopOpacity: "0"
            })]
          }), !i && K(ft, {
            children: [S("stop", {
              offset: "0%",
              stopColor: "white",
              stopOpacity: "1"
            }), S("stop", {
              offset: "100%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          })]
        }), S("mask", {
          id: `${d}-transparent-edges`,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse",
          children: S("rect", {
            x: "0",
            y: "0",
            width: "100%",
            height: "100%",
            fill: `url(#${d}-fadeGradient)`
          })
        }), f.map((x, O) => K("linearGradient", {
          id: `fill${String(x)}-${d}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [S("stop", {
            offset: "5%",
            stopColor: t[x].color ? Et(t[x].color) : qt(O),
            stopOpacity: 0.8
          }), S("stop", {
            offset: "95%",
            stopColor: t[x].color ? Et(t[x].color) : qt(O),
            stopOpacity: 0.1
          })]
        }, O))]
      }), S(Vi, {
        ...fu(),
        mask: `url(#${d}-transparent-edges)`
      }), b && S(vr, {
        dataKey: "x",
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: r?.tickFormatter,
        ticks: r?.ticks,
        domain: r?.domain,
        interval: 0,
        tick: X6
      }), v && S(yr, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: n?.tickCount,
        tickFormatter: a && l ? () => "**" : n?.tickFormatter,
        ticks: n?.ticks,
        domain: n?.domain,
        width: h
      }), g && S(Yi, {
        ...du(),
        content: S(pa, {
          indicator: "dot",
          yAxisFormatter: n?.tickFormatter
        })
      }), f.map((x, O) => S(Ir, {
        isAnimationActive: !1,
        dataKey: x,
        type: o,
        mask: `url(#${d}-transparent-edges)`,
        fill: `url(#fill${x}-${d})`,
        fillOpacity: t[x].dashed ? 0 : 0.4,
        stroke: t[x].color ? Et(t[x].color) : qt(O),
        strokeWidth: 1.5,
        strokeDasharray: t[x].dashed ? "4 4" : void 0
      }, x)), Object.keys(t).length > 1 && S(Nv, {
        className: "flex justify-start",
        content: S(lu, {})
      })]
    })
  });
}, HW = ha(Z6), J6 = ({ dataConfig: e, data: t, xAxis: r, yAxis: n = {
  hide: !0
}, label: a = !1, type: i = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: u, legend: c, showValueUnderLabel: l = !1, highlightLastBar: f = !1, onClick: d }, p) => {
  const y = Object.keys(e), h = qv(t).map((b, g, x) => f && y.length === 1 && !e[y[0]]?.color ? {
    ...b,
    fill: g === x.length - 1 ? qt(g) : qt(g, 0.5)
  } : b), v = Math.max(...h.flatMap((b) => y.map((g) => Xi(n?.tickFormatter ? n.tickFormatter(`${b[g]}`) : `${b[g]}`))));
  return S(da, {
    config: e,
    ref: p,
    aspect: u,
    children: K(wP, {
      accessibilityLayer: !0,
      data: h,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: a ? 24 : 0,
        bottom: l ? 24 : 12
      },
      stackOffset: i === "stacked-by-sign" ? "sign" : void 0,
      onClick: (b) => {
        if (!d || !b.activeLabel || !b.activePayload)
          return;
        const g = {
          label: b.activeLabel,
          values: {}
        };
        for (const x of b.activePayload)
          g.values[x.name] = x.value;
        d(g);
      },
      children: [!o && S(Yi, {
        ...du(),
        content: S(pa, {
          yAxisFormatter: n.tickFormatter
        })
      }), !s && S(Vi, {
        ...fu()
      }), S(yr, {
        ...Lv(n),
        tick: !0,
        width: n.width ?? v + 20,
        hide: n.hide
      }), S(vr, {
        ...Rv(r),
        hide: r?.hide,
        tick: l ? (b) => {
          const { x: g, y: x, payload: O } = b, m = t.find((_) => _.label === O.value)?.values || "", w = Object.keys(m).length === 1 ? Object.values(m)?.[0] : void 0, A = w !== void 0 && n.tickFormatter ? n.tickFormatter(`${w}`) : w.toLocaleString();
          return K("g", {
            transform: `translate(${g},${x})`,
            children: [S("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: O.value
            }), !!w && S("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: A
            })]
          });
        } : void 0
      }), y.map((b, g) => S($r, {
        isAnimationActive: !1,
        dataKey: b,
        stackId: i === "stacked" || i === "stacked-by-sign" ? "stack" : void 0,
        fill: f ? (x) => x.fill : e[b].color ? Et(e[b].color) : qt(g),
        radius: i === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
        maxBarSize: 32,
        children: a && S(Tt, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${b}`)
      }, `bar-${b}`)), c && S(Nv, {
        content: S(lu, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, KW = ha(J6), Q6 = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const a = e.reduce((i, o) => i + o.value, 0);
  return K(mh, {
    children: [S("div", {
      className: "w-full",
      ref: n,
      children: S("div", {
        className: "flex h-2 gap-1 overflow-hidden",
        children: e.map((i, o) => {
          const s = i.value / a * 100, u = i.color ? Et(i.color) : qt(o), c = (l) => {
            const f = l / a * 100;
            return f % 1 === 0 ? f.toFixed(0) : f.toFixed(1);
          };
          return s === 0 ? null : K(gh, {
            children: [S(bh, {
              className: "h-full cursor-default overflow-hidden rounded-2xs",
              style: {
                width: `${s}%`
              },
              title: i.name,
              asChild: !0,
              children: S("div", {
                className: "h-full w-full",
                style: {
                  backgroundColor: u
                },
                role: "img",
                title: i.name,
                tabIndex: 0
              })
            }), !r && K(xh, {
              className: "flex items-center gap-1 text-sm",
              children: [S("div", {
                className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
                style: {
                  backgroundColor: u
                }
              }), S("span", {
                className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary",
                children: i.name
              }), K("span", {
                className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground",
                children: [i.value, " (", c(i.value), "%)"]
              })]
            })]
          }, i.name);
        })
      })
    }), t && S("div", {
      className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
      role: "list",
      children: e.map((i, o) => {
        const s = i.color ? Et(i.color) : qt(o);
        return K("div", {
          className: "flex items-center gap-1.5",
          role: "listitem",
          children: [S("div", {
            className: "h-2 w-2 shrink-0 rounded-full",
            style: {
              backgroundColor: s
            }
          }), S("span", {
            className: "text-f1-foreground",
            children: i.name
          })]
        }, i.name);
      })
    })]
  });
}, VW = ha(Q6), e9 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n = {
  hide: !0
}, lineType: a = "natural", aspect: i, hideTooltip: o = !1, hideGrid: s = !1 }, u) => {
  const c = Object.keys(t), l = qv(e), f = Math.max(...l.flatMap((d) => c.map((p) => Xi(n?.tickFormatter ? n.tickFormatter(`${d[p]}`) : `${d[p]}`))));
  return S(da, {
    config: t,
    ref: u,
    aspect: i,
    children: K(z6, {
      accessibilityLayer: !0,
      data: l,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12
      },
      children: [!s && S(Vi, {
        ...fu()
      }), !r?.hide && S(vr, {
        ...Rv(r)
      }), !n?.hide && S(yr, {
        ...Lv(n),
        width: n.width ?? f + 20
      }), !o && S(Yi, {
        ...du(),
        content: S(pa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), c.map((d, p) => S(Gi, {
        dataKey: d,
        isAnimationActive: !1,
        type: a,
        stroke: t[d].color ? Et(t[d].color) : qt(p),
        strokeWidth: 1.5,
        strokeDasharray: t[d].dashed ? "4 4" : void 0,
        dot: !1
      }, d))]
    })
  });
}, GW = ha(e9), t9 = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: a }, i) => {
  const o = e.map((c, l) => ({
    ...c,
    fill: t[c.label]?.color ? Et(t[c.label].color) : qt(l)
  })), u = e.map((c) => c.value).reduce((c, l) => c + l);
  return u === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), S(da, {
    config: t,
    ref: i,
    aspect: n,
    "data-chromatic": "ignore",
    style: {
      height: 380
    },
    children: K(W6, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [u !== 0 && S(Yi, {
        isAnimationActive: !1,
        content: S(pa, {
          yAxisFormatter: a
        })
      }), K(hr, {
        isAnimationActive: !1,
        nameKey: "label",
        legendType: "circle",
        dataKey: "value",
        data: o,
        innerRadius: 120,
        outerRadius: 135,
        paddingAngle: 2.5,
        children: [o.map((c, l) => {
          const f = a ? a(String(c.value)) : c.value;
          return S(Bs, {
            fill: c.fill,
            "aria-label": `${c.label}: ${f} (${(c.value / u * 100).toFixed(0)}%)`
          }, `cell-${l}`);
        }), S(Ve, {
          content: ({ viewBox: c }) => {
            if (c && "cx" in c && "cy" in c)
              return K("text", {
                x: c.cx,
                y: c.cy,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: [S("tspan", {
                  x: c.cx,
                  y: (c.cy || 0) + 8,
                  className: "fill-f1-foreground text-4xl font-semibold",
                  children: r?.number ? a ? a(String(r.number)) : r.number : null
                }), S("tspan", {
                  x: c.cx,
                  y: (c.cy || 0) - 16,
                  className: "fill-f1-foreground-secondary",
                  children: r?.label
                })]
              });
          }
        })]
      }), S(Nv, {
        content: S(lu, {
          nameKey: "label",
          hiddenKey: "-"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, YW = ha(t9);
var Bv = "Progress", Fv = 100, [r9] = WT(Bv), [n9, a9] = r9(Bv), _P = fe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: a,
      getValueLabel: i = i9,
      ...o
    } = e;
    (a || a === 0) && !Iw(a) && console.error(o9(`${a}`, "Progress"));
    const s = Iw(a) ? a : Fv;
    n !== null && !kw(n, s) && console.error(s9(`${n}`, "Progress"));
    const u = kw(n, s) ? n : null, c = Ss(u) ? i(u, s) : void 0;
    return /* @__PURE__ */ S(n9, { scope: r, value: u, max: s, children: /* @__PURE__ */ S(
      wh.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Ss(u) ? u : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": EP(u, s),
        "data-value": u ?? void 0,
        "data-max": s,
        ...o,
        ref: t
      }
    ) });
  }
);
_P.displayName = Bv;
var PP = "ProgressIndicator", TP = fe.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, a = a9(PP, r);
    return /* @__PURE__ */ S(
      wh.div,
      {
        "data-state": EP(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: t
      }
    );
  }
);
TP.displayName = PP;
function i9(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function EP(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ss(e) {
  return typeof e == "number";
}
function Iw(e) {
  return Ss(e) && !isNaN(e) && e > 0;
}
function kw(e, t) {
  return Ss(e) && !isNaN(e) && e <= t && e >= 0;
}
function o9(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Fv}\`.`;
}
function s9(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Fv} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var CP = _P, u9 = TP;
const jP = fe.forwardRef(({ className: e, value: t, ...r }, n) => S(CP, {
  ref: n,
  value: t,
  className: J("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: S(u9, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
jP.displayName = CP.displayName;
function c9(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const l9 = (e) => {
  const t = UT.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((a) => {
    delete a.x, Object.entries(a).forEach(([i, o]) => {
      n < o && (n = o, r = i);
    });
  }), r;
}, f9 = ({ dataConfig: e, data: t, xAxis: r = {
  hide: !0
}, yAxis: n, label: a = !1, aspect: i, hideTooltip: o = !1, hideGrid: s = !1, showRatio: u = !1, valueFormatter: c }, l) => {
  const f = Object.keys(e), d = c9(t), p = Math.max(...d.map((b) => Xi(`${b.x}`))), y = f.reduce((b, g) => (b[g] = t.reduce((x, O) => x + O.values[g], 0), b), {}), h = {
    ...Rv(r),
    type: "number",
    dataKey: l9(d)
  }, v = {
    ...Lv(n),
    type: "category",
    dataKey: "x"
  };
  return S(da, {
    config: e,
    ref: l,
    aspect: i,
    children: K(wP, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: a || u ? 100 : 0
      },
      children: [!o && S(Yi, {
        ...du(!0),
        content: S(pa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), !s && S(Vi, {
        ...fu(),
        vertical: !0,
        horizontal: !1
      }), S(vr, {
        ...h,
        hide: r?.hide
      }), S(yr, {
        ...v,
        hide: n?.hide,
        width: n?.width ?? p + 20
      }), f.map((b, g) => S(ft, {
        children: S($r, {
          isAnimationActive: !1,
          layout: "vertical",
          dataKey: b,
          fill: e[b].color ? Et(e[b].color) : qt(g),
          radius: 4,
          maxBarSize: 24,
          children: (a || u) && S(Tt, {
            position: "right",
            offset: 10,
            className: "fill-f1-foreground",
            fontSize: 12,
            formatter: c,
            content: u ? S(d9, {
              valueFormatter: c,
              total: y[b],
              showLabel: a
            }) : void 0
          }, `label-{${b}}`)
        }, `bar-${b}`)
      }))]
    })
  });
}, XW = ha(f9), d9 = ({ viewBox: e, offset: t = 0, value: r, valueFormatter: n, total: a, showLabel: i }) => {
  const { x: o = 0, y: s = 0, width: u = 0, height: c = 0 } = e, l = o + u + t, f = s + c / 2, d = n ? n(r) : r, p = Xi(`${d}`), y = a > 0 ? Math.round(Number(r) / a * 100) : 0;
  return K("g", {
    transform: `translate(${l},${f + 4})`,
    children: [i && S("text", {
      x: 0,
      textAnchor: "start",
      className: "fill-f1-foreground-secondary text-sm font-medium",
      children: d
    }), K("text", {
      x: i ? p + 8 : 0,
      textAnchor: "start",
      className: "fill-f1-foreground text-sm font-medium",
      children: [y, "%"]
    })]
  });
}, oh = (e) => e == null || typeof e == "object" && "value" in e && (e.value === void 0 || e.value === null) && // ----
typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), sh = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, Dw = (e, t = {}) => {
  if (oh(e))
    return t.emptyPlaceholder || "";
  t = {
    locale: "en-US",
    decimalPlaces: 2,
    hideUnits: !1,
    compact: !1,
    emptyPlaceholder: "",
    useGrouping: !0,
    unitsSpaced: !1,
    ...t
  }, typeof e == "number" && (e = { value: e });
  const r = sh(e);
  if (r === void 0)
    return t.emptyPlaceholder || "";
  const n = new Intl.NumberFormat(t.locale, {
    maximumFractionDigits: t.decimalPlaces,
    notation: t.compact ? "compact" : "standard",
    compactDisplay: t.compact ? "short" : void 0,
    useGrouping: t.useGrouping
  }).format(r);
  if (t.hideUnits || !e.units)
    return n;
  const a = t.unitsSpaced ? " " : "";
  return e.unitsPosition === "prepend" ? `${e.units}${a}${n}` : `${n}${a}${e.units}`;
}, p9 = (e) => e == null ? {
  value: void 0
} : typeof e == "number" ? { value: e } : e, h9 = (e, t) => {
  if (e == null)
    return {
      numericValue: { value: void 0 },
      formatter: t?.formatter || Dw,
      formatterOptions: t?.formatterOptions || {}
    };
  const r = {
    formatter: t?.formatter || Dw,
    formatterOptions: t?.formatterOptions || {}
  };
  return typeof e == "number" ? { numericValue: { value: e }, ...r } : typeof e == "object" && e !== null && "numericValue" in e ? {
    numericValue: p9(e.numericValue),
    formatter: e.formatter ? e.formatter : r.formatter,
    formatterOptions: {
      ...r.formatterOptions,
      ...e.formatterOptions
    }
  } : { ...r, numericValue: e };
}, v9 = () => {
  const { locale: e } = wO();
  return tt(
    (t, r) => h9(t, {
      ...r,
      formatterOptions: {
        locale: e,
        ...r?.formatterOptions
      }
    }),
    [e]
  );
}, y9 = {
  "-1": KT,
  1: HT
}, m9 = {
  "-1": "negative",
  0: "neutral",
  1: "positive"
}, MP = ze(({ percentage: e, amount: t, invertStatus: r, info: n, hint: a, nullText: i }, o) => {
  const s = v9(), u = s(t, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), c = s(e, {
    formatterOptions: {
      decimalPlaces: 0,
      emptyPlaceholder: i ?? "N/A"
    }
  }), l = sh(c.numericValue), f = sh(u.numericValue);
  let d = "", p = null, y = "", h = "null", v = a;
  if (oh(f))
    d = i ?? "N/A", v = void 0;
  else {
    const b = Math.sign(l ?? 0).toString();
    h = m9[Math.sign((l ?? 0) * (r ? -1 : 1)).toString()];
    const g = oh(l) ? null : c.formatter({
      ...c.numericValue,
      units: "%",
      unitsPosition: "append"
    }, c.formatterOptions), x = u.formatter(u.numericValue, u.formatterOptions);
    d = [g, x].filter(Boolean).join(" · "), y = `${h} balance`, p = h === "neutral" ? null : S(ut, {
      icon: y9[b],
      size: "sm",
      className: J({
        positive: "text-f1-icon-positive",
        neutral: "text-f1-icon-secondary",
        negative: "text-f1-icon-critical"
      }[h])
    });
  }
  return S(Di, {
    ref: o,
    className: J({
      positive: "bg-f1-background-positive text-f1-foreground-positive",
      neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
      negative: "bg-f1-background-critical text-f1-foreground-critical",
      null: "text-f1-foreground-secondary"
    }[h]),
    info: n,
    hint: v,
    left: p,
    additionalAccessibleText: y,
    text: d
  });
});
MP.displayName = "F0TagBalance";
const zv = fe.forwardRef(({ className: e, href: t, onClick: r, disabled: n, children: a, ...i }, o) => {
  const { actions: s } = Pr();
  return K("div", {
    ref: o,
    role: "article",
    className: J("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary p-4 shadow", (t || r) && !n && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
    ...i,
    onClick: () => {
      if (!n && !t && r)
        return r();
    },
    children: [t && !n && S(ph, {
      href: t,
      className: "absolute inset-0 block",
      tabIndex: 0,
      children: S("span", {
        className: "sr-only",
        children: s.view
      })
    }), a]
  });
});
zv.displayName = "Card";
const Wv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: J("flex flex-row gap-1.5", e),
  ...t
}));
Wv.displayName = "CardHeader";
const Uv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: J("text-base font-medium text-f1-foreground", e),
  ...t
}));
Uv.displayName = "CardTitle";
const Hv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: J("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
  ...t
}));
Hv.displayName = "CardSubtitle";
const g9 = fe.forwardRef(({ className: e, content: t }, r) => S("div", {
  ref: r,
  className: J("-ml-1 flex h-6 w-6 items-center justify-center", e),
  children: S(mh, {
    children: K(gh, {
      children: [S(bh, {
        className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
        "aria-label": t,
        children: S(ut, {
          icon: VT,
          size: "md"
        })
      }), S(xh, {
        children: S("p", {
          children: t
        })
      })]
    })
  })
}));
g9.displayName = "CardInfo";
const b9 = fe.forwardRef(({ className: e, title: t, icon: r = fO, ...n }, a) => S(ph, {
  ref: a,
  className: J("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e),
  role: "button",
  "aria-label": t,
  ...n,
  children: S(ut, {
    size: "sm",
    icon: r,
    className: "text-f1-icon-bold"
  })
}));
b9.displayName = "CardLink";
const Kv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: J("relative flex grow flex-col", e),
  ...t
}));
Kv.displayName = "CardContent";
const Vv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: J("flex items-center", e),
  ...t
}));
Vv.displayName = "CardFooter";
const ZW = fe.forwardRef(function({ className: t, ...r }, n) {
  return S("div", {
    ref: n,
    className: J("flex text-3xl font-semibold", t),
    ...r
  });
});
Vv.displayName = "CardComment";
function x9({ primaryAction: e, secondaryActions: t, compact: r = !1 }) {
  const n = GT("(min-width: 640px)");
  if (!(e || i()))
    return null;
  return K(Vv, {
    className: J("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4", r && "pt-3"),
    children: [t && S("div", {
      className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
      children: Array.isArray(t) ? t.map((o, s) => S(Gt, {
        label: o.label,
        icon: o.icon,
        variant: "outline",
        onClick: o.onClick,
        hideLabel: n && s > 0,
        size: n ? r ? "sm" : "md" : "lg"
      }, s)) : S(OO, {
        href: t.href,
        target: t.target,
        disabled: t.disabled,
        children: t.label
      })
    }), e && S("div", {
      className: "w-full sm:w-fit [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center",
      children: S(Gt, {
        label: e.label,
        icon: e.icon,
        onClick: e.onClick,
        size: n ? r ? "sm" : "md" : "lg"
      })
    })]
  });
  function i() {
    return t ? "href" in t ? !0 : "length" in t ? t.length > 0 : !1 : !1;
  }
}
const w9 = ({ avatar: e, compact: t = !1 }) => e.type === "emoji" ? S(YT, {
  emoji: e.emoji,
  size: t ? "sm" : "lg"
}) : e.type === "file" ? S(SO, {
  file: e.file,
  size: t ? "sm" : "lg"
}) : e.type === "icon" ? S(XT, {
  icon: e.icon,
  size: t ? "sm" : "lg"
}) : S(nn, {
  avatar: e,
  size: t ? "sm" : "lg"
});
function O9({ avatar: e, overlay: t = !1, compact: r = !1 }) {
  const n = e.type === "person";
  return S("div", {
    className: J("mb-1.5 flex h-fit w-fit", t && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && n && "rounded-full", r && "mb-0"),
    children: S(w9, {
      avatar: e,
      compact: r
    })
  });
}
const S9 = {
  info: pO,
  warning: hh,
  critical: hO,
  positive: _s
}, Gv = ze(({ text: e, level: t }, r) => {
  Ps(e, {
    disallowEmpty: !0,
    disallowEmojis: !0
  }, {
    componentName: "F0TagAlert"
  });
  const a = {
    info: "info",
    warning: "warning",
    critical: "critical",
    positive: "positive"
  }[t];
  return S(Di, {
    ref: r,
    className: J("pl-0.5", {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }[t]),
    left: S(ut, {
      icon: S9[t],
      size: "md",
      "aria-hidden": !0,
      color: a
    }),
    text: e
  });
});
Gv.displayName = "F0TagAlert";
const A9 = (e) => S("div", {
  "data-cell-type": "alert-tag",
  children: S(Gv, {
    level: e.level,
    text: e.label
  })
}), Wt = {
  text: "pt-[2px]",
  avatar: "pt-[2px]",
  avatarList: "pt-[3px]"
};
function $P(e) {
  return typeof e == "object" && e !== null && "placeholder" in e && typeof e.placeholder == "string";
}
function va(e, t) {
  return $P(e) ? typeof e == "object" && e !== null && t in e ? e[t] === void 0 : !0 : !1;
}
function ya(e, t) {
  if (e !== void 0 && typeof e != "object")
    return e;
  if (!e || typeof e != "object")
    return;
  const n = t in e ? e[t] : void 0, i = $P(e) ? e.placeholder : void 0;
  if (n !== void 0)
    return t === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (i !== void 0)
    return i;
}
function _9(e) {
  if (Nw(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  const t = ya(e, "date");
  if (Nw(t))
    try {
      return t.toLocaleDateString();
    } catch {
      return String(t);
    }
  else {
    if (typeof t == "string")
      return t;
    if (t != null)
      return String(t);
  }
  return "";
}
function Nw(e) {
  return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
const IP = (e, t) => {
  const r = ya(e, "number"), n = va(e, "number"), a = {
    unitsPosition: "right",
    units: "",
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: r
    }
  };
  return K("div", {
    className: J("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", Wt.text], n && "text-f1-foreground-secondary"),
    children: [a.unitsPosition === "left" && a.units && S(Rw, {
      units: a.units
    }), a.decimalPlaces !== void 0 ? a.number?.toFixed(a.decimalPlaces) : a.number?.toString() ?? "", a.unitsPosition === "right" && a.units && S(Rw, {
      units: a.units
    })]
  });
}, Rw = ({ units: e }) => S("span", {
  children: e.toString()
}), P9 = (e, t) => {
  const r = {
    ...typeof e == "object" && "amount" in e ? e : {
      amount: e
    }
  };
  return IP({
    ...typeof e == "object" && "amount" in e ? e : {},
    number: r.amount,
    decimalPlaces: r.currency?.decimalPlaces,
    units: r.currency?.symbol,
    unitsPosition: r.currency?.symbolPosition
  }, t);
}, T9 = (e, t) => {
  const r = e.type ?? "person";
  return S("div", {
    className: J("pointer-events-auto w-full", t.visualization === "table" && Wt.avatarList),
    children: S(oS, {
      type: r,
      avatars: e.avatarList,
      size: "xs",
      max: e.max
    })
  });
}, E9 = (e, t) => K("div", {
  className: J("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
  children: [S(nn, {
    avatar: {
      type: "company",
      name: e.name,
      src: e.src
    },
    size: "xs"
  }), S("span", {
    className: "text-f1-foreground",
    children: e.name.toString()
  })]
}), C9 = (e, t) => {
  const r = e.label ?? t.i18n.countries[e.code] ?? e.code;
  return K("div", {
    "data-cell-type": "country",
    className: "flex items-center gap-2",
    children: [S(ZT, {
      size: "sm",
      flag: e.code,
      "aria-label": r
    }), " ", S(an, {
      className: "min-w-0 flex-1 text-f1-foreground",
      tag: "span",
      children: r
    })]
  });
}, j9 = (e, t) => {
  const r = _9(e), n = va(e, "date");
  return S("div", {
    className: J("monospace text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    children: r
  });
};
var JW = {
  md: 900,
  xl: 1440
}, M9 = {
  white: {
    3: "0 0% 100% / 0.03",
    5: "0 0% 100% / 0.05",
    10: "0 0% 100% / 0.1",
    20: "0 0% 100% / 0.2",
    30: "0 0% 100% / 0.3",
    40: "0 0% 100% / 0.4",
    50: "0 0% 100% / 0.5",
    60: "0 0% 100% / 0.6",
    70: "0 0% 100% / 0.7",
    80: "0 0% 100% / 0.8",
    90: "0 0% 100% / 0.9",
    100: "0 0% 100%"
  },
  current: "currentColor",
  transparent: "transparent",
  grey: {
    0: "210 91% 22% / 0.02",
    5: "220 88% 17% / 0.04",
    10: "216 89% 18% / 0.06",
    20: "214 70% 20% / 0.1",
    30: "213 87% 15% / 0.20",
    40: "219 97% 15% / 0.45",
    50: "217 96% 11% / 0.61",
    60: "220 88% 10% / 0.82",
    70: "219 91% 8% / 0.88",
    80: "219 94% 7% / 0.9",
    90: "219 88% 6% / 0.92",
    100: "218 48% 10%",
    solid: {
      40: "219 18% 69%",
      50: "218 14% 45%"
    }
  },
  lilac: {
    50: "340 49% 60%",
    60: "341 34% 50%",
    70: "340 33% 41%"
  },
  barbie: {
    50: "331 84% 63%",
    60: "331 55% 53%",
    70: "330 49% 43%"
  },
  smoke: {
    50: "192 26% 54%",
    60: "192 22% 45%",
    70: "192 22% 37%"
  },
  army: {
    50: "162 44% 33%",
    60: "163 45% 28%",
    70: "162 44% 23%"
  },
  flubber: {
    50: "84 55% 53%",
    60: "84 48% 45%",
    70: "83 48% 33%"
  },
  indigo: {
    50: "239 91% 64%",
    60: "239 59% 54%",
    70: "239 51% 44%"
  },
  camel: {
    50: "25 46% 53%",
    60: "25 42% 44%",
    70: "25 42% 36%"
  },
  radical: {
    50: "348 80% 50%",
    60: "348 80% 42%",
    70: "347 80% 34%"
  },
  viridian: {
    50: "184 92% 35%",
    60: "184 92% 28%",
    70: "184 92% 24%"
  },
  orange: {
    50: "25 95% 53%",
    60: "24 69% 49%",
    70: "24 69% 40%"
  },
  red: {
    50: "5 100% 65%",
    60: "4 61% 49%",
    70: "3 71% 41%"
  },
  grass: {
    50: "160 84% 39%",
    60: "160 85% 33%",
    70: "161 84% 27%"
  },
  malibu: {
    50: "216 90% 65%",
    60: "216 59% 55%",
    70: "216 48% 44%"
  },
  yellow: {
    50: "38 92% 54%",
    60: "38 79% 45%",
    70: "38 80% 36%"
  },
  purple: {
    50: "258 88% 67%",
    60: "258 56% 56%",
    70: "258 43% 46%"
  }
}, QW = {
  special: {
    highlight: "hsl(var(--accent-50))"
  }
};
const Yv = ze(({ text: e, ...t }, r) => {
  Ps(e, {
    disallowEmpty: !0
  }, {
    componentName: "F0TagDot"
  });
  const n = "color" in t && t.color ? `hsl(${M9[t.color][50]})` : "customColor" in t && t.customColor;
  return n ? S(Di, {
    ref: r,
    className: "border-[1px] border-solid border-f1-border-secondary",
    left: S("div", {
      className: "m-1 aspect-square w-2 rounded-full",
      style: {
        backgroundColor: n
      },
      "aria-hidden": !0
    }),
    text: e
  }) : null;
});
Yv.displayName = "F0TagDot";
const $9 = (e) => S("div", {
  "data-cell-type": "dot-tag",
  children: S(Yv, {
    text: e.label,
    color: e.color
  })
}), I9 = (e) => K("div", {
  className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
  "data-cell-type": "file",
  children: [S(SO, {
    file: e
  }), " ", S("span", {
    children: e.name
  })]
}), kP = ({ tooltip: e, children: t }) => e ? S(mh, {
  delayDuration: 100,
  disableHoverableContent: !0,
  children: K(gh, {
    children: [S(bh, {
      asChild: !0,
      className: "pointer-events-auto",
      children: t
    }), S(xh, {
      className: "pointer-events-none max-w-xs",
      children: S("p", {
        className: "font-semibold",
        children: e
      })
    })]
  })
}) : S(ft, {
  children: t
}), DP = (e, t) => S("div", {
  className: J("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
  children: S(kP, {
    tooltip: e.tooltip,
    children: K("div", {
      className: "inline-flex items-center gap-2",
      children: [S(ut, {
        icon: e.icon,
        "aria-label": e.hideLabel ? e.label : void 0
      }), e.hideLabel ? S("span", {
        className: "sr-only",
        children: e.label
      }) : S("span", {
        className: "text-f1-foreground",
        children: e.label
      })]
    })
  })
}), k9 = (e) => S(DP, {
  icon: JT,
  label: e.name
}), D9 = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, N9 = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, R9 = (e, t) => {
  const r = ya(e, "text")?.toString() || "", n = va(e, "text"), a = N9(e), i = D9(e) || 3;
  return S(an, {
    className: J("whitespace-pre-wrap break-words text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    lines: i,
    disabled: a,
    children: r
  });
}, Pd = 100, Lw = 12, L9 = 12, q9 = (e, t) => {
  const r = ya(e, "percentage"), n = va(e, "percentage");
  if (r === void 0)
    return null;
  if (n)
    return S("span", {
      className: J("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
      "data-cell-type": "percentage",
      children: r
    });
  const a = Pd / 2, i = a - Lw / 2, o = i - L9, s = 2 * Math.PI * o, u = (100 - Math.min(Number(r), 100)) / 100 * s, c = typeof e == "object" && "label" in e;
  return K("div", {
    className: "flex items-center gap-2",
    "data-cell-type": "percentage",
    children: [K("svg", {
      viewBox: `0 0 ${Pd} ${Pd}`,
      className: "h-7 w-7 -rotate-90 transform",
      children: [S("circle", {
        cx: a,
        cy: a,
        r: i,
        className: "fill-f1-background-positive"
      }), S("circle", {
        cx: a,
        cy: a,
        r: o,
        className: "stroke-f1-background-positive-bold",
        fill: "none",
        strokeWidth: Lw,
        strokeDasharray: s,
        strokeDashoffset: u,
        strokeLinecap: "round"
      })]
    }), S("span", {
      className: "text-f1-foreground",
      children: c ? e.label : `${r}%`
    })]
  });
}, B9 = (e, t) => {
  const r = `${e.firstName.toString()} ${e.lastName.toString()}`;
  return K("div", {
    className: J("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && Wt.avatar),
    children: [S(nn, {
      avatar: {
        type: "person",
        firstName: e.firstName.toString(),
        lastName: e.lastName.toString(),
        src: e.src,
        badge: e.badge,
        deactivated: e.deactivated
      },
      size: "xs"
    }), S(an, {
      className: J("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
      tag: "span",
      children: r
    })]
  });
}, F9 = (e, t) => {
  const r = ya(e, "value"), n = va(e, "value");
  if (r === void 0)
    return null;
  if (n)
    return S("span", {
      className: "text-f1-foreground-secondary",
      "data-cell-type": "progressBar",
      children: r
    });
  const a = r, i = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, o = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, u = typeof e == "object" && "color" in e ? e.color : void 0, c = Et(u || "categorical-1"), l = a / i * 100;
  return K("div", {
    className: "flex w-full items-center gap-2",
    "data-cell-type": "progressBar",
    children: [S("div", {
      className: "min-w-16 flex-grow",
      children: S(jP, {
        color: c,
        value: l,
        max: 100,
        getValueLabel: (f) => `${(f ?? 0).toFixed(1)}% ${o}`,
        "aria-label": o,
        className: "w-full"
      })
    }), !s && S("div", {
      className: "flex-shrink-0 text-sm font-medium text-f1-foreground",
      children: o
    })]
  });
}, Xv = ze(({ text: e, additionalAccessibleText: t, variant: r }, n) => (Ps(e, {
  disallowEmpty: !0
}, {
  componentName: "F0TagStatus"
}), S(Di, {
  ref: n,
  className: J({
    neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
    info: "bg-f1-background-info text-f1-foreground-info",
    positive: "bg-f1-background-positive text-f1-foreground-positive",
    warning: "bg-f1-background-warning text-f1-foreground-warning",
    critical: "bg-f1-background-critical text-f1-foreground-critical"
  }[r]),
  left: S("div", {
    className: J("m-1 aspect-square w-2 rounded-full", {
      neutral: "bg-f1-icon",
      info: "bg-f1-icon-info",
      positive: "bg-f1-icon-positive",
      warning: "bg-f1-icon-warning",
      critical: "bg-f1-icon-critical"
    }[r]),
    "aria-hidden": !0
  }),
  additionalAccessibleText: t,
  text: e
})));
Xv.displayName = "F0TagStatus";
const z9 = (e) => S("div", {
  "data-cell-type": "status",
  children: S(Xv, {
    variant: e.status,
    text: e.label
  })
}), W9 = {
  synced: {
    icon: _s,
    colorClass: "text-f1-icon-positive"
  },
  syncing: {
    icon: tE,
    colorClass: "text-f1-icon-secondary",
    animated: !0
  },
  pending: {
    icon: AO,
    colorClass: "text-f1-icon-secondary"
  },
  partiallySynced: {
    icon: eE,
    colorClass: "text-f1-icon-warning"
  },
  outdated: {
    icon: hh,
    colorClass: "text-f1-icon-warning"
  },
  failed: {
    icon: QT,
    colorClass: "text-f1-icon-critical"
  }
}, U9 = (e, t) => {
  const r = W9[e.status], n = t.i18n.syncStatus[e.status], a = e.tooltip ?? n, i = S(ut, {
    icon: r.icon,
    "aria-label": a
  });
  return S("div", {
    className: J("flex items-center", t.visualization === "table" && Wt.avatar),
    "data-cell-type": "sync-status",
    children: S(kP, {
      tooltip: a,
      children: S("div", {
        className: J("inline-flex items-center", r.colorClass),
        children: r.animated ? S(Ht.div, {
          className: "flex items-center justify-center",
          style: {
            originX: 0.5,
            originY: 0.5
          },
          animate: {
            rotate: 360
          },
          transition: {
            duration: 2,
            ease: "linear",
            repeat: 1 / 0
          },
          children: i
        }) : i
      })
    })
  });
}, H9 = (e) => S("div", {
  "data-cell-type": "tag",
  children: S(Oh, {
    text: e.label,
    icon: e.icon
  })
}), pu = ze(({ avatar: e, text: t }, r) => (Ps(t, {
  disallowEmpty: !0
}, {
  componentName: "F0TagAvatar"
}), S(Di, {
  ref: r,
  className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
  left: S(nn, {
    avatar: e,
    size: "xs"
  }),
  text: t,
  shape: e.type === "person" ? "rounded" : "square"
})));
pu.displayName = "AvatarTag";
const NP = ze(({ name: e, src: t }, r) => S(pu, {
  ref: r,
  avatar: {
    type: "company",
    name: e,
    src: t
  },
  text: e
}));
NP.displayName = "F0TagCompany";
const RP = ze(({ src: e, name: t }, r) => S(pu, {
  ref: r,
  avatar: {
    type: "person",
    firstName: t,
    lastName: "",
    src: e
  },
  text: t
}));
RP.displayName = "F0TagPerson";
const LP = ze(({ name: e, src: t }, r) => S(pu, {
  ref: r,
  avatar: {
    type: "team",
    name: e,
    src: t
  },
  text: e
}));
LP.displayName = "F0TagTeam";
const K9 = (e) => {
  const { type: t } = e;
  if (t === "dot") return S(Yv, {
    ...e
  });
  if (t === "person") return S(RP, {
    ...e
  });
  if (t === "team") return S(LP, {
    ...e
  });
  if (t === "company") return S(NP, {
    ...e
  });
  if (t === "alert") return S(Gv, {
    ...e
  });
  if (t === "status") return S(Xv, {
    ...e
  });
  if (t === "balance") return S(MP, {
    ...e
  });
  if (t === "raw") return S(Oh, {
    ...e
  });
}, uh = ({ tag: e }) => {
  const t = K9(e);
  return t || "Invalid tag type";
}, qP = ({ count: e, list: t }) => {
  const r = S(Oh, {
    text: `+${e}`
  });
  return t?.length ? K(yO, {
    children: [S(mO, {
      children: S("span", {
        className: "cursor-pointer",
        children: r
      })
    }), S(gO, {
      side: "top",
      children: K(vh, {
        className: "[*[data-state=visible]_div]:bg-f1-background dark flex max-h-[220px] flex-col",
        children: [t.map((n, a) => S("div", {
          className: "flex w-[172px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n.description ? S(yh, {
            label: n.description,
            children: S("div", {
              children: S(uh, {
                tag: n
              })
            })
          }) : S(uh, {
            tag: n
          })
        }, a)), S(bO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
qP.displayName = "TagCounter";
const BP = ({ type: e, tags: t, max: r = 4, remainingCount: n }) => {
  const a = t.map((i) => ({
    type: e,
    ...i
  }));
  return S(xO, {
    items: a,
    max: r,
    renderListItem: (i) => S(uh, {
      tag: i
    }),
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: n !== void 0,
    renderOverflowIndicator: (i) => S(qP, {
      count: (n ?? 0) + i,
      list: n ? void 0 : a.slice(a.length - i)
    }),
    overflowIndicatorWithPopover: !1,
    className: "flex-1"
  });
};
BP.displayName = "F0TagList";
const V9 = (e) => S(BP, {
  type: e.type,
  tags: e.tags,
  max: e.max
}), G9 = (e, t) => K("div", {
  className: J("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
  children: [S(nn, {
    avatar: {
      type: "team",
      name: e.name,
      src: e.src
    },
    size: "xs"
  }), S("span", {
    className: "text-f1-foreground",
    children: e.name.toString()
  })]
}), Y9 = (e, t) => {
  const r = ya(e, "text"), n = va(e, "text"), a = r?.toString() ?? "";
  return S(an, {
    lines: 1,
    tag: "span",
    className: J("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    children: a
  });
}, Qe = {
  text: Y9,
  longText: R9,
  number: IP,
  date: j9,
  amount: P9,
  avatarList: T9,
  status: z9,
  alertTag: A9,
  person: B9,
  percentage: q9,
  progressBar: F9,
  company: E9,
  team: G9,
  tag: H9,
  dotTag: $9,
  tagList: V9,
  icon: DP,
  file: I9,
  folder: k9,
  country: C9,
  syncStatus: U9
}, X9 = (e) => e !== void 0 && typeof e == "object", e7 = (e, t, r) => {
  const { type: n, value: a } = X9(e) ? e : {
    type: "text",
    value: e ?? r
  }, i = Qe[n];
  return i ? a === void 0 ? r : i(a, {
    visualization: t.visualization,
    i18n: t.i18n
  }) : `[Invalid ${n} renderer]`;
}, Z9 = {
  text: Qe.text,
  number: Qe.number,
  date: Qe.date,
  amount: Qe.amount,
  person: Qe.person,
  company: Qe.company,
  team: Qe.team,
  status: Qe.status,
  tag: Qe.tag,
  avatarList: Qe.avatarList,
  tagList: Qe.tagList,
  alertTag: Qe.alertTag,
  dotTag: Qe.dotTag,
  file: Qe.file,
  folder: Qe.folder,
  progressBar: Qe.progressBar
};
function J9({ metadata: e }) {
  const { type: t, value: r } = e.property, n = Z9[t];
  if (!n)
    return K("div", {
      className: "flex h-8 items-center gap-1.5",
      children: ["icon" in e && S(ut, {
        icon: e.icon,
        color: "default",
        size: "md"
      }), K("span", {
        children: ["Unsupported property type: ", t]
      })]
    });
  const a = n;
  return K("div", {
    className: "flex h-8 items-center gap-1.5",
    children: ["icon" in e && S("div", {
      className: "pointer-events-auto flex items-center",
      children: S(yh, {
        label: e.tooltip,
        children: S(ut, {
          icon: e.icon,
          color: "default",
          size: "md"
        })
      })
    }), a(r, {
      visualization: "card"
    })]
  });
}
function qw({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: n, title: a, overlay: i = !1 }) {
  const o = Pr(), s = e && e.length > 0, [u, c] = he(!1);
  return !s && !t ? null : K("div", {
    className: J("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (u || r) && "delay-0 sm:opacity-100", i && "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
    children: [s && S("div", {
      className: "flex items-center justify-center",
      children: S(rS, {
        items: e,
        open: u,
        onOpenChange: c,
        children: S(Ar, {
          label: o.actions.other,
          icon: _O,
          variant: "ghost",
          size: "sm",
          hideLabel: !0,
          pressed: u,
          compact: !0,
          onClick: (l) => l.stopPropagation()
        })
      })
    }), t && S("div", {
      className: "flex items-center justify-center",
      children: S(rE, {
        title: a,
        checked: r,
        onCheckedChange: n,
        hideLabel: !0
      })
    })]
  });
}
const t7 = ["contain", "cover", "fit-width", "fit-height", "scale-down"], r7 = ["xs", "sm", "md", "lg", "xl"], Q9 = {
  xs: "h-24",
  sm: "h-32",
  md: "h-40",
  lg: "h-48",
  xl: "h-64"
}, ez = {
  contain: "object-contain h-full w-full",
  cover: "object-cover h-full w-full",
  "fit-width": "w-full h-auto",
  "fit-height": "object-contain h-full w-auto",
  "scale-down": "object-scale-down h-full w-full"
};
function tz(e) {
  return ez[e];
}
const rz = ze(function({ compact: t = !1, avatar: r, image: n, imageFit: a = "fit-width", imageSize: i = "sm", blurredBackground: o = !0, title: s, description: u, metadata: c, children: l, link: f, primaryAction: d, secondaryActions: p, otherActions: y, selectable: h = !1, selected: v = !1, onSelect: b, onClick: g, forceVerticalMetadata: x = !1, fullHeight: O = !1, disableOverlayLink: m = !1 }, w) {
  const A = Me(null), _ = (P) => {
    A?.current?.click(), g?.(), P.preventDefault(), P.stopPropagation();
  };
  return K(zv, {
    className: J("group relative bg-f1-background shadow-none transition-all", t && "p-3", O && "h-full", (h || y && y.length > 0) && !v && "hover:border-f1-border", f && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", v && "border-f1-border-selected bg-f1-background-selected-secondary"),
    onClick: g,
    ref: w,
    children: [f && !m && S(OO, {
      href: f,
      variant: "unstyled",
      className: J("z-1 absolute inset-0 block rounded-xl", PO()),
      "aria-label": s,
      ref: A,
      children: " "
    }), n && K("div", {
      className: J("relative -mx-3 -mt-3 mb-4 rounded-md", Q9[i], t && "-mx-2 -mt-2 mb-3", a === "fit-height" && "flex items-center justify-center overflow-hidden", a === "fit-width" && "flex items-center justify-center overflow-hidden", a !== "fit-width" && a !== "fit-height" && "overflow-hidden"),
      children: [o && (a === "contain" || a === "fit-width" || a === "fit-height" || a === "scale-down") && S("div", {
        className: "absolute inset-0 z-0 rounded-md",
        style: {
          backgroundImage: `url(${n})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          opacity: 0.4,
          transform: "scale(1.1)"
        },
        "aria-hidden": "true"
      }), S(nE, {
        src: n,
        alt: s,
        className: J(tz(a))
      }), S(qw, {
        otherActions: y,
        selectable: h,
        selected: v,
        onSelect: b,
        title: s,
        overlay: !0
      })]
    }), K("div", {
      className: "flex grow flex-col gap-2",
      children: [K("div", {
        className: "flex flex-row items-start justify-between gap-1",
        children: [K(Wv, {
          ...m ? {} : {
            onClick: (P) => {
              _(P);
            },
            onKeyDown: (P) => {
              (P.key === "Enter" || P.key === " ") && _(P);
            },
            role: "button",
            "aria-label": s
          },
          className: J("relative flex-col gap-0 p-0", n && !t && "pt-3", t && "flex-row items-center gap-2"),
          children: [r && S(O9, {
            avatar: r,
            overlay: !!n,
            compact: t
          }), K("div", {
            className: J("flex flex-col gap-0"),
            children: [S(Uv, {
              className: J("text-lg font-semibold text-f1-foreground", t && "line-clamp-1 text-base"),
              children: s
            }), u && S(Hv, {
              className: J("text-base text-f1-foreground-secondary"),
              children: S(an, {
                lines: t ? 2 : 3,
                children: u
              })
            })]
          })]
        }), !n && S(qw, {
          otherActions: y,
          selectable: h,
          selected: v,
          onSelect: b,
          title: s
        })]
      }), (c || l) && K(Kv, {
        className: "pointer-events-none",
        children: [c && S("div", {
          className: J("flex flex-col gap-0.5", t && "gap-x-3 gap-y-0", x && "flex-col gap-y-0.5"),
          children: c.map((P, k) => S(J9, {
            metadata: P
          }, k))
        }), l]
      })]
    }), S(x9, {
      primaryAction: d,
      secondaryActions: p,
      compact: t
    })]
  });
}), nz = ({ compact: e = !1 }) => K(zv, {
  className: J("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [K(Wv, {
    className: J("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
    children: [S(At, {
      className: J("h-10 w-10 rounded-full", e && "h-6 w-6")
    }), K("div", {
      className: J("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
      children: [S(Uv, {
        className: "flex h-6 items-center",
        children: S(At, {
          className: J("h-4 w-20 rounded-md", e && "h-3")
        })
      }), S(Hv, {
        className: "flex h-5 items-center",
        children: S(At, {
          className: "h-3 w-12 rounded-md"
        })
      })]
    })]
  }), S(Kv, {
    className: "flex flex-col gap-0",
    children: Array.from({
      length: 3
    }).map((t, r) => K("div", {
      className: "flex h-6 items-center gap-1.5",
      children: [S(At, {
        className: "h-4 w-4 rounded-full"
      }), S(At, {
        className: "h-3 w-full max-w-20 rounded-md"
      })]
    }, r))
  })]
}), az = ["forceVerticalMetadata", "disableOverlayLink"], FP = ze((e, t) => {
  const r = az.reduce((n, a) => {
    const { [a]: i, ...o } = n;
    return o;
  }, e);
  return S(rz, {
    ref: t,
    ...r
  });
}), iz = ({ compact: e = !1 }) => S(nz, {
  compact: e
});
FP.displayName = "F0Card";
const n7 = TO(FP, iz), zP = ze(({ className: e, ...t }, r) => S(EO, {
  ref: r,
  className: J("text-f1-foreground-secondary", e),
  ...t
}));
zP.displayName = EO.displayName;
const WP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
WP.displayName = "DialogFooter";
const UP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
UP.displayName = "DialogHeader";
const Td = [{
  id: "bottom",
  path: "M11.9948 17.5244C14.2802 17.5244 16.5188 18.2872 18.2805 19.7631C16.5189 21.1914 14.2801 22 11.9948 22C9.61453 21.9999 7.42426 21.1436 5.71037 19.7631C7.47193 18.3348 9.70955 17.5245 11.9948 17.5244Z"
}, {
  id: "left",
  path: "M4.23721 5.71327C5.66526 7.47502 6.47496 9.71299 6.47503 11.9985C6.47502 14.2841 5.71292 16.5231 4.23721 18.2849C2.80903 16.5231 2 14.2841 2 11.9985C2.00007 9.61784 2.85682 7.42739 4.23721 5.71327Z"
}, {
  id: "right",
  path: "M19.7622 5.71327C21.1902 7.47502 21.9999 9.71299 22 11.9985C22 14.2841 21.2379 16.5231 19.7622 18.2849C18.334 16.5231 17.525 14.2841 17.525 11.9985C17.525 9.61784 18.3818 7.42739 19.7622 5.71327Z"
}, {
  id: "top",
  path: "M11.9948 2C14.2802 2 16.5188 2.76274 18.2805 4.2387C16.5189 5.66699 14.2801 6.47557 11.9948 6.47557C9.61453 6.4755 7.42426 5.61919 5.71037 4.2387C7.47193 2.81041 9.70955 2.00007 11.9948 2Z"
}], oz = (e, t) => {
  const r = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, n = _T();
  return K("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [S("defs", {
      children: Td.map((a) => S("clipPath", {
        id: `${n}-${a.id}`,
        children: S("path", {
          d: a.path
        })
      }, a.id))
    }), r ? Td.map((a) => S("path", {
      d: a.path,
      fill: "currentColor",
      vectorEffect: "non-scaling-stroke"
    }, a.id)) : Td.map((a) => S("foreignObject", {
      x: "0",
      y: "0",
      width: "24",
      height: "24",
      clipPath: `url(#${n}-${a.id})`,
      children: S("div", {
        style: {
          width: "100%",
          height: "100%",
          background: "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)"
        }
      })
    }, a.id))]
  });
}, sz = ze(oz);
function a7({ title: e, description: t, onClick: r, onClose: n, isVisible: a, dismissable: i = !1, trackVisibility: o, type: s, ...u }) {
  const [c, l] = he(a);
  Le(() => {
    l(a), o && o(a);
  }, [a, o]);
  const f = () => {
    l(!1), n && n();
  }, d = () => s === "one-campaign" ? {
    background: "linear-gradient(98.39deg, rgba(249, 115, 22, 0.49) 0%, rgba(229, 25, 67, 0.49) 20%, rgba(229, 25, 67, 0.49) 49.97%, rgba(229, 25, 67, 0.49) 80%, rgba(164, 165, 222, 0.49) 100%)",
    borderRadius: "12px",
    padding: "1px"
  } : {}, p = () => s === "one-campaign" ? {
    background: "#fef7f8",
    borderRadius: "11px"
  } : {}, y = () => s === "one-campaign" ? "flex h-auto w-auto cursor-pointer flex-row gap-2 p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary" : "flex h-auto w-auto cursor-pointer flex-row gap-2 rounded-md border-f1-border p-3 text-f1-foreground shadow-md hover:bg-f1-background-secondary";
  return c && S("div", {
    children: S("div", {
      className: "p-2",
      children: S("div", {
        style: d(),
        children: K("div", {
          className: y(),
          style: p(),
          onClick: r,
          children: [K(ft, {
            children: [s === "one-campaign" ? S("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: S(ut, {
                icon: sz,
                size: "lg",
                className: "!h-8 !w-8"
              })
            }) : S("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: S(aE, {
                module: u.module,
                size: "lg"
              })
            }), S("div", {
              className: "flex flex-1 flex-col",
              children: K("div", {
                children: [S("h3", {
                  className: "text-lg font-medium",
                  children: e
                }), S("p", {
                  className: "text-f1-foreground-secondary",
                  children: t
                })]
              })
            })]
          }), i && S("div", {
            className: "h-6 w-6",
            children: S(Gt, {
              variant: "ghost",
              icon: CO,
              size: "sm",
              hideLabel: !0,
              onClick: f,
              label: "Close"
            })
          })]
        })
      })
    })
  });
}
const i7 = iE, uz = (e, t, r) => {
  const n = Xe[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function cz({ granularities: e, value: t, onChange: r }) {
  const n = Pr(), a = (i) => {
    r(i);
  };
  return K("div", {
    className: "flex flex-col gap-2",
    children: [S("h6", {
      className: "text-sm font-medium",
      children: n.date.selectedBy
    }), S(jO, {
      value: t,
      onValueChange: a,
      as: "list",
      children: S(MO, {
        children: e.map((i) => S(Id, {
          value: i,
          children: n.date.granularities[i]?.label || i
        }, i))
      })
    })]
  });
}
const Bw = "__custom__", lz = (e, t) => {
  if (!e?.value) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : dy(e.value.from, r.from) && (!e.value.to || !r.to || dy(e.value.to, r.to));
}, fz = ({ presets: e, ...t }) => {
  const [r, n] = he();
  return Le(() => {
    if (t.date) {
      const i = Object.entries(e).find(([o, s]) => lz(t.date, s));
      n(i ? i[0] : void 0);
    }
  }, [t.date, e]), S(jO, {
    as: "list",
    value: r,
    onValueChange: (i) => {
      n(i), t.onSelect?.(i);
    },
    children: K(MO, {
      children: [Object.entries(e).map(([i, o]) => S(Id, {
        value: i,
        children: o?.label || i
      }, i)), S(oE, {}), S(Id, {
        value: Bw,
        children: "Custom"
      }, Bw)]
    })
  });
}, Ha = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, Fw = "__custom__";
function dz({ onSelect: e, defaultValue: t, presets: r = [], granularities: n = ["day"], children: a, compareTo: i, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: u, value: c, asChild: l, weekStartsOn: f, ...d }) {
  const p = Pr(), y = wO(), [h, v] = he(c || t), b = f ?? y.date?.weekStartsOn ?? sE.Monday;
  Le(() => {
    Ha(c, h) || v(c || t);
  }, [c, t]);
  const g = He(() => h?.granularity ?? "day", [h?.granularity]), x = He(() => py(b)[g], [g, b]), O = He(() => x.calendarMode || "single", [x]), m = (L) => {
    w({
      value: x.toRange(L ?? void 0),
      granularity: g
    });
  }, w = (L) => {
    Ha(L, h) || (v(L), e?.(L));
  }, A = (L) => {
    P(L === Fw);
    const z = L ? r[+L] : void 0;
    if (!z) return;
    const N = py(b);
    w({
      value: N[z.granularity].toRange(typeof z.value == "function" ? z.value() : z.value),
      granularity: z.granularity
    }), L !== Fw && d.onOpenChange?.(!1);
  }, [_, P] = he(!1), k = (L) => {
    w({
      value: h?.value,
      granularity: L
    });
  }, T = He(() => r.length > 0 && !_, [r, _]), $ = () => {
    P(!1);
  }, M = He(() => x.calendarView || "day", [x]), [j, I] = he(o || void 0), D = He(() => {
    const L = (i ?? {})[g] || [];
    if (!h?.value)
      return [];
    const z = h.value, N = L.map((B, q) => {
      const H = typeof B.value == "function" ? B.value(x.toRange(z)) : uz(x.toRange(z), B.value.delta, B.value.units), X = Array.isArray(H) ? H.map((te) => x.toString(te, p)).join(", ") : x.toString(H, p);
      return {
        label: B.label,
        value: (q + 1).toString(),
        description: X,
        dateValue: H
      };
    });
    return N.length === 0 ? [] : [{
      label: p.date.none,
      value: "0",
      description: "",
      dateValue: void 0
    }, ...N];
  }, [i, h, x, g]);
  Le(() => {
    I(o || "0");
  }, [g, o]);
  const R = (L) => {
    I(L);
  };
  return Le(() => {
    s?.(j ? D[+j]?.dateValue : void 0);
  }, [j, s, D]), K(uE, {
    open: d.open,
    onOpenChange: d.onOpenChange,
    children: [S(cE, {
      asChild: l,
      children: a
    }), S(lE, {
      className: "w-full overflow-auto",
      align: "start",
      children: T ? S(fz, {
        presets: r,
        date: h,
        onSelect: A
      }) : K("div", {
        className: "flex gap-4",
        children: [(r.length > 0 || n.length > 1) && K("div", {
          children: [r.length > 0 && S(Gt, {
            icon: lO,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: $
          }), n.length > 1 && S(cz, {
            granularities: n,
            value: g,
            onChange: k
          })]
        }), K("div", {
          className: "min-w-[300px] flex-1",
          children: [S(fE, {
            showInput: !u,
            mode: O,
            view: M,
            onSelect: m,
            defaultSelected: h?.value,
            minDate: d.minDate,
            maxDate: d.maxDate,
            weekStartsOn: b
          }), D.length > 0 && K("div", {
            className: "mt-4 flex flex-col gap-2",
            children: [S("div", {
              className: "text-gray-500 text-sm",
              children: p.date.compareTo
            }), S(dE, {
              label: p.date.compareTo,
              hideLabel: !0,
              placeholder: p.date.compareTo,
              options: D.map((L) => ({
                label: L.label,
                value: L.value,
                description: L.description ?? ""
              })),
              onChange: R,
              value: j
            })]
          })]
        })]
      })
    })]
  });
}
const HP = ze(({ value: e, onDateChange: t, granularity: r, onOpenChange: n, minDate: a, maxDate: i, onClear: o, ...s }, u) => {
  const [c, l] = he(""), [f, d] = he(!1), p = Pr();
  Le(() => {
    l(r.toString(e?.value, p));
  }, [e, r, p]);
  const y = (g) => vE(g, r, {
    minDate: a,
    maxDate: i
  }), h = (g, x) => {
    if (g === "") {
      t?.({
        value: void 0,
        granularity: x.key
      }), d(s.required ?? !1);
      return;
    }
    const O = x.toRange(x.fromString(g, p));
    O && y(O?.from) && y(O?.to) ? (t?.({
      value: O,
      granularity: x.key
    }), d(!1)) : d(!0);
  }, v = () => {
    h(c, r);
  };
  return S(ft, {
    children: S(pE, {
      ...s,
      icon: hE,
      ref: u,
      onFocus: () => n?.(!0),
      onClear: () => {
        o?.(), l(""), h("", r);
      },
      onKeyDown: (g) => {
        g.key === "Enter" && v();
      },
      type: "text",
      onChange: (g) => {
        l(g);
      },
      error: f || s.error,
      onBlur: v,
      value: c,
      onClickContent: () => n?.(!0)
    })
  });
});
HP.displayName = "DateInput";
function pz({ onChange: e, value: t, presets: r = [], granularities: n = ["day"], minDate: a, maxDate: i, open: o = !1, ...s }) {
  const [u, c] = he(), [l, f] = he(o);
  Le(() => {
    f(o);
  }, [o]);
  const d = Pr(), p = He(() => n[0] ?? "day", [n]), y = tt((w) => {
    const A = w || p;
    if (!Xe[A])
      throw new Error(`Invalid granularity ${A}`);
    return {
      ...Xe[A],
      key: A
    };
  }, [p]), h = tt((w) => {
    if (!w)
      return;
    const A = y(w?.granularity);
    return w ? {
      value: A.toRange(A.calendarMode === "range" ? w.value : w.value?.from ?? void 0),
      granularity: w.granularity
    } : void 0;
  }, [y]), v = He(() => y(u?.granularity), [u?.granularity, y]);
  Le(() => {
    const w = h(t);
    Ha(u, w) || c(w);
  }, [t]);
  const b = (w) => {
    const A = h(w), P = y(A?.granularity).calendarMode !== "range" && A?.granularity === u?.granularity && !Ha(A, u);
    g(A), P && f(!1);
  }, g = (w) => {
    const A = h(w);
    if (c(A), !Ha(A, u)) {
      const _ = y(A?.granularity);
      e?.(A, _.toString(A?.value, d));
    }
  }, x = (w) => {
    f(w), s.onOpenChange?.(w);
  }, O = He(() => r.filter((w) => n.includes(w.granularity)), [r, n]), m = Me(null);
  return Le(() => {
    l && m.current && requestAnimationFrame(() => {
      m.current?.focus();
    });
  }, [l]), S(dz, {
    hideCalendarInput: !0,
    onSelect: b,
    value: u,
    presets: O,
    granularities: n,
    minDate: a,
    maxDate: i,
    open: l,
    onOpenChange: x,
    asChild: !0,
    children: S(HP, {
      ref: m,
      ...s,
      value: u,
      granularity: v,
      onDateChange: g
    })
  });
}
const o7 = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => Xe.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => Xe.day.toRange(bo(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => Xe.day.toRange({
      from: bo(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => Xe.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => Xe.week.toRange(bo(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => Xe.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => Xe.month.toRange(xa(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => Xe.month.toRange(xa(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => Xe.month.toRange(xa(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => Xe.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => Xe.quarter.toRange(xa(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => Xe.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => Xe.halfyear.toRange(xa(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => Xe.year.toRange(ig(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => Xe.year.toRange(ig(/* @__PURE__ */ new Date(), 3))
  }
}, s7 = na(
  "F0DatePicker",
  pz
), hz = ({ index: e, isCurrent: t, isCompleted: r }) => r ? S("div", {
  className: "inline-flex min-w-5 items-center justify-center rounded-xs bg-f1-background-positive-bold p-0.5 opacity-30",
  children: S(yE, {
    className: "h-4 w-4 text-f1-foreground-inverse"
  })
}) : t ? S(kd, {
  value: e + 1,
  type: "selected",
  size: "md"
}) : S(kd, {
  value: e + 1,
  type: "default",
  size: "md"
}), vz = ({ steps: e, currentStepId: t }) => {
  const r = e.findIndex((n) => n.id === t);
  return S("div", {
    className: "flex flex-col gap-1.5",
    children: e.map((n, a) => {
      const i = n.id === t, o = n.completed ?? a < r;
      return K("div", {
        className: J("flex flex-row items-center gap-2 rounded-[10px] px-2 py-2", i && "bg-f1-background-selected"),
        children: [S(hz, {
          index: a,
          isCurrent: i,
          isCompleted: o
        }), S("span", {
          className: J("text-sm font-medium leading-5 tracking-tight", i && "text-f1-foreground", o && "text-f1-foreground-secondary", !i && !o && "text-f1-foreground"),
          children: n.label
        })]
      }, n.id);
    })
  });
}, u7 = na("WizardStepper", vz);
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function yz(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mz(e) {
  var t = yz(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function Zi(e, t, r) {
  return (t = mz(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function zw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zw(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var gz = {
  top: function(t, r) {
    return Math.abs(r.y - t.top);
  },
  right: function(t, r) {
    return Math.abs(t.right - r.x);
  },
  bottom: function(t, r) {
    return Math.abs(t.bottom - r.y);
  },
  left: function(t, r) {
    return Math.abs(r.x - t.left);
  }
}, KP = /* @__PURE__ */ Symbol("closestEdge");
function VP(e, t) {
  var r, n, a = t.element, i = t.input, o = t.allowedEdges, s = {
    x: i.clientX,
    y: i.clientY
  }, u = a.getBoundingClientRect(), c = o.map(function(f) {
    return {
      edge: f,
      value: gz[f](u, s)
    };
  }), l = (r = (n = c.sort(function(f, d) {
    return f.value - d.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return Ww(Ww({}, e), {}, Zi({}, KP, l));
}
function Uw(e) {
  var t;
  return (t = e[KP]) !== null && t !== void 0 ? t : null;
}
function hu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function() {
    t.forEach(function(a) {
      return a();
    });
  };
}
function bz(e) {
  if (Array.isArray(e)) return e;
}
function xz(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, s = [], u = !0, c = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(u = (n = i.call(r)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, a = l;
    } finally {
      try {
        if (!u && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function ch(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GP(e, t) {
  if (e) {
    if (typeof e == "string") return ch(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ch(e, t) : void 0;
  }
}
function wz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YP(e, t) {
  return bz(e) || xz(e, t) || GP(e, t) || wz();
}
var Ed = {}, ja = {}, Hw;
function XP() {
  if (Hw) return ja;
  Hw = 1, Object.defineProperty(ja, "__esModule", { value: !0 }), ja.bind = void 0;
  function e(t, r) {
    var n = r.type, a = r.listener, i = r.options;
    return t.addEventListener(n, a, i), function() {
      t.removeEventListener(n, a, i);
    };
  }
  return ja.bind = e, ja;
}
var Rr = {}, Kw;
function Oz() {
  if (Kw) return Rr;
  Kw = 1;
  var e = Rr && Rr.__assign || function() {
    return e = Object.assign || function(i) {
      for (var o, s = 1, u = arguments.length; s < u; s++) {
        o = arguments[s];
        for (var c in o) Object.prototype.hasOwnProperty.call(o, c) && (i[c] = o[c]);
      }
      return i;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.bindAll = void 0;
  var t = /* @__PURE__ */ XP();
  function r(i) {
    if (!(typeof i > "u"))
      return typeof i == "boolean" ? {
        capture: i
      } : i;
  }
  function n(i, o) {
    if (o == null)
      return i;
    var s = e(e({}, i), { options: e(e({}, r(o)), r(i.options)) });
    return s;
  }
  function a(i, o, s) {
    var u = o.map(function(c) {
      var l = n(c, s);
      return (0, t.bind)(i, l);
    });
    return function() {
      u.forEach(function(l) {
        return l();
      });
    };
  }
  return Rr.bindAll = a, Rr;
}
var Vw;
function Sz() {
  return Vw || (Vw = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ XP();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ Oz();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  })(Ed)), Ed;
}
var ra = /* @__PURE__ */ Sz(), ZP = "data-pdnd-honey-pot";
function JP(e) {
  return e instanceof Element && e.hasAttribute(ZP);
}
function QP(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = YP(t, 2), n = r[0], a = r[1];
  return n ? JP(n) ? a ?? null : n : null;
}
var Az = 2147483647;
function Gw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gw(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Ii = 2, Xw = Ii / 2;
function _z(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function Pz(e) {
  return {
    x: e.x - Xw,
    y: e.y - Xw
  };
}
function Tz(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function Ez(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Ii),
    y: Math.min(e.y, window.innerHeight - Ii)
  };
}
function Zw(e) {
  var t = e.client, r = Ez(Tz(Pz(_z(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: Ii,
    height: Ii
  });
}
function Jw(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function Cz(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function jz(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(ZP, "true");
  var n = Zw({
    client: t
  });
  Object.assign(r.style, Yw(Yw({
    // Setting a background color explicitly to avoid any inherited styles.
    // Looks like this could be `opacity: 0`, but worried that _might_
    // cause the element to be ignored on some platforms.
    // When debugging, set backgroundColor to something like "red".
    backgroundColor: "transparent",
    position: "fixed",
    // Being explicit to avoid inheriting styles
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  }, Jw({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: Az
  })), document.body.appendChild(r);
  var a = ra.bind(window, {
    type: "pointermove",
    listener: function(o) {
      var s = {
        x: o.clientX,
        y: o.clientY
      };
      n = Zw({
        client: s
      }), Object.assign(r.style, Jw({
        clientRect: n
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(o) {
    var s = o.current;
    if (a(), Cz({
      client: s,
      clientRect: n
    })) {
      r.remove();
      return;
    }
    function u() {
      c(), r.remove();
    }
    var c = ra.bindAll(window, [
      {
        type: "pointerdown",
        listener: u
      },
      {
        type: "pointermove",
        listener: u
      },
      {
        type: "focusin",
        listener: u
      },
      {
        type: "focusout",
        listener: u
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: u
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: u
      },
      {
        type: "dragover",
        listener: u
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function Mz() {
  var e = null;
  function t() {
    return e = null, ra.bind(window, {
      type: "pointermove",
      listener: function(a) {
        e = {
          x: a.clientX,
          y: a.clientY
        };
      },
      // listening for pointer move in capture phase
      // so we are less likely to be impacted by events being stopped.
      options: {
        capture: !0
      }
    });
  }
  function r() {
    var n = null;
    return function(i) {
      var o = i.eventName, s = i.payload;
      if (o === "onDragStart") {
        var u = s.location.initial.input, c = e ?? {
          x: u.clientX,
          y: u.clientY
        };
        n = jz({
          initial: c
        });
      }
      if (o === "onDrop") {
        var l, f = s.location.current.input;
        (l = n) === null || l === void 0 || l({
          current: {
            x: f.clientX,
            y: f.clientY
          }
        }), n = null, e = null;
      }
    };
  }
  return {
    bindEvents: t,
    getOnPostDispatch: r
  };
}
function $z(e) {
  if (Array.isArray(e)) return ch(e);
}
function Iz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eT(e) {
  return $z(e) || Iz(e) || GP(e) || kz();
}
function ma(e) {
  var t = null;
  return function() {
    if (!t) {
      for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      var o = e.apply(this, a);
      t = {
        result: o
      };
    }
    return t.result;
  };
}
var Dz = ma(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), Zv = ma(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), lh = {
  isLeavingWindow: /* @__PURE__ */ Symbol("leaving"),
  isEnteringWindow: /* @__PURE__ */ Symbol("entering")
};
function Nz(e) {
  var t = e.dragLeave;
  return Zv() ? t.hasOwnProperty(lh.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !Zv())
    return;
  function t() {
    return {
      enterCount: 0,
      isOverWindow: !1
    };
  }
  var r = t();
  function n() {
    r = t();
  }
  ra.bindAll(
    window,
    [{
      type: "dragstart",
      listener: function() {
        r.enterCount = 0, r.isOverWindow = !0;
      }
    }, {
      type: "drop",
      listener: n
    }, {
      type: "dragend",
      listener: n
    }, {
      type: "dragenter",
      listener: function(i) {
        !r.isOverWindow && r.enterCount === 0 && (i[lh.isEnteringWindow] = !0), r.isOverWindow = !0, r.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(i) {
        r.enterCount--, r.isOverWindow && r.enterCount === 0 && (i[lh.isLeavingWindow] = !0, r.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function Rz(e) {
  return "nodeName" in e;
}
function Lz(e) {
  return Rz(e) && e.ownerDocument !== document;
}
function qz(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : Zv() ? Nz({
    dragLeave: t
  }) : n == null ? !0 : Dz() ? Lz(n) : n instanceof HTMLIFrameElement;
}
function Bz(e) {
  var t = e.onDragEnd;
  return [
    // ## Detecting drag ending for removed draggables
    //
    // If a draggable element is removed during a drag and the user drops:
    // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
    // 2. if not over a valid drop target (or cancelled): we get nothing
    // The "dragend" event will not fire on the source draggable if it has been
    // removed from the DOM.
    // So we need to figure out if a drag operation has finished by looking at other events
    // We can do this by looking at other events
    // ### First detection: "pointermove" events
    // 1. "pointermove" events cannot fire during a drag and drop operation
    // according to the spec. So if we get a "pointermove" it means that
    // the drag and drop operations has finished. So if we get a "pointermove"
    // we know that the drag is over
    // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
    // other pointer events. However, firefox will allow a few
    // pointer event to get through after a drag starts.
    // The most I've seen is 3
    {
      type: "pointermove",
      listener: /* @__PURE__ */ (function() {
        var r = 0;
        return function() {
          if (r < 20) {
            r++;
            return;
          }
          t();
        };
      })()
    },
    // ### Second detection: "pointerdown" events
    // If we receive this event then we know that a drag operation has finished
    // and potentially another one is about to start.
    // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
    {
      type: "pointerdown",
      listener: t
    }
  ];
}
function Ka(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY
  };
}
var Fz = function(t) {
  var r = [], n = null, a = function() {
    for (var o = arguments.length, s = new Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    r = s, !n && (n = requestAnimationFrame(function() {
      n = null, t.apply(void 0, r);
    }));
  };
  return a.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, a;
}, Cd = Fz(function(e) {
  return e();
}), go = /* @__PURE__ */ (function() {
  var e = null;
  function t(n) {
    var a = requestAnimationFrame(function() {
      e = null, n();
    });
    e = {
      frameId: a,
      fn: n
    };
  }
  function r() {
    e && (cancelAnimationFrame(e.frameId), e.fn(), e = null);
  }
  return {
    schedule: t,
    flush: r
  };
})();
function zz(e) {
  var t = e.source, r = e.initial, n = e.dispatchEvent, a = {
    dropTargets: []
  };
  function i(s) {
    n(s), a = {
      dropTargets: s.payload.location.current.dropTargets
    };
  }
  var o = {
    start: function(u) {
      var c = u.nativeSetDragImage, l = {
        current: r,
        previous: a,
        initial: r
      };
      i({
        eventName: "onGenerateDragPreview",
        payload: {
          source: t,
          location: l,
          nativeSetDragImage: c
        }
      }), go.schedule(function() {
        i({
          eventName: "onDragStart",
          payload: {
            source: t,
            location: l
          }
        });
      });
    },
    dragUpdate: function(u) {
      var c = u.current;
      go.flush(), Cd.cancel(), i({
        eventName: "onDropTargetChange",
        payload: {
          source: t,
          location: {
            initial: r,
            previous: a,
            current: c
          }
        }
      });
    },
    drag: function(u) {
      var c = u.current;
      Cd(function() {
        go.flush();
        var l = {
          initial: r,
          previous: a,
          current: c
        };
        i({
          eventName: "onDrag",
          payload: {
            source: t,
            location: l
          }
        });
      });
    },
    drop: function(u) {
      var c = u.current, l = u.updatedSourcePayload;
      go.flush(), Cd.cancel(), i({
        eventName: "onDrop",
        payload: {
          source: l ?? t,
          location: {
            current: c,
            previous: a,
            initial: r
          }
        }
      });
    }
  };
  return o;
}
var fh = {
  isActive: !1
};
function tT() {
  return !fh.isActive;
}
function Wz(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Uz(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function Hz(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!tT())
    return;
  var i = Kz({
    event: t,
    dragType: r,
    getDropTargetsOver: n
  });
  fh.isActive = !0;
  var o = {
    current: i
  };
  jd({
    event: t,
    current: i.dropTargets
  });
  var s = zz({
    source: r.payload,
    dispatchEvent: a,
    initial: i
  });
  function u(p) {
    var y = Uz({
      current: o.current.dropTargets,
      next: p.dropTargets
    });
    o.current = p, y && s.dragUpdate({
      current: o.current
    });
  }
  function c(p) {
    var y = Ka(p), h = JP(p.target) ? QP({
      x: y.clientX,
      y: y.clientY
    }) : p.target, v = n({
      target: h,
      input: y,
      source: r.payload,
      current: o.current.dropTargets
    });
    v.length && (p.preventDefault(), jd({
      event: p,
      current: v
    })), u({
      dropTargets: v,
      input: y
    });
  }
  function l() {
    o.current.dropTargets.length && u({
      dropTargets: [],
      input: o.current.input
    }), s.drop({
      current: o.current,
      updatedSourcePayload: null
    }), f();
  }
  function f() {
    fh.isActive = !1, d();
  }
  var d = ra.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(y) {
        c(y), s.drag({
          current: o.current
        });
      }
    }, {
      type: "dragenter",
      listener: c
    }, {
      type: "dragleave",
      listener: function(y) {
        qz({
          dragLeave: y
        }) && (u({
          input: o.current.input,
          dropTargets: []
        }), r.startedFrom === "external" && l());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(y) {
        if (o.current = {
          dropTargets: o.current.dropTargets,
          input: Ka(y)
        }, !o.current.dropTargets.length) {
          l();
          return;
        }
        y.preventDefault(), jd({
          event: y,
          current: o.current.dropTargets
        }), s.drop({
          current: o.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: r.type === "external" ? r.getDropPayload(y) : null
        }), f();
      }
    }, {
      // "dragend" fires when on the drag source (eg a draggable element)
      // when the drag is finished.
      // "dragend" will fire after "drop" (if there was a successful drop)
      // "dragend" does not fire if the draggable source has been removed during the drag
      // or for external drag sources (eg files)
      // This "dragend" listener will not fire if there was a successful drop
      // as we will have already removed the event listener
      type: "dragend",
      listener: function(y) {
        o.current = {
          dropTargets: o.current.dropTargets,
          input: Ka(y)
        }, l();
      }
    }].concat(eT(Bz({
      onDragEnd: l
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  s.start({
    nativeSetDragImage: Wz(t)
  });
}
function jd(e) {
  var t, r = e.event, n = e.current, a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function Kz(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = Ka(t);
  if (r.startedFrom === "external")
    return {
      input: a,
      dropTargets: []
    };
  var i = n({
    input: a,
    source: r.payload,
    target: t.target,
    current: []
  });
  return {
    input: a,
    dropTargets: i
  };
}
var Qw = {
  canStart: tT,
  start: Hz
}, dh = /* @__PURE__ */ new Map();
function Vz(e) {
  var t = e.typeKey, r = e.mount, n = dh.get(t);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: t,
    unmount: r(),
    usageCount: 1
  };
  return dh.set(t, a), a;
}
function Gz(e) {
  var t = Vz(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), dh.delete(e.typeKey));
  };
}
function rT(e, t) {
  var r = t.attribute, n = t.value;
  return e.setAttribute(r, n), function() {
    return e.removeAttribute(r);
  };
}
function eO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eO(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Md(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Yz(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(c) {
        throw c;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var c = r.next();
    return o = c.done, c;
  }, e: function(c) {
    s = !0, i = c;
  }, f: function() {
    try {
      o || r.return == null || r.return();
    } finally {
      if (s) throw i;
    }
  } };
}
function Yz(e, t) {
  if (e) {
    if (typeof e == "string") return tO(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tO(e, t) : void 0;
  }
}
function tO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $d(e) {
  return e.slice(0).reverse();
}
function Xz(e) {
  var t = e.typeKey, r = e.defaultDropEffect, n = /* @__PURE__ */ new WeakMap(), a = "data-drop-target-for-".concat(t), i = "[".concat(a, "]");
  function o(p) {
    return n.set(p.element, p), function() {
      return n.delete(p.element);
    };
  }
  function s(p) {
    if (process.env.NODE_ENV !== "production") {
      var y = n.get(p.element);
      y && console.warn("You have already registered a [".concat(t, "] dropTarget on the same element"), {
        existing: y,
        proposed: p
      }), p.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    var h = hu(rT(p.element, {
      attribute: a,
      value: "true"
    }), o(p));
    return ma(h);
  }
  function u(p) {
    var y, h, v, b, g = p.source, x = p.target, O = p.input, m = p.result, w = m === void 0 ? [] : m;
    if (x == null)
      return w;
    if (!(x instanceof Element))
      return x instanceof Node ? u({
        source: g,
        target: x.parentElement,
        input: O,
        result: w
      }) : w;
    var A = x.closest(i);
    if (A == null)
      return w;
    var _ = n.get(A);
    if (_ == null)
      return w;
    var P = {
      input: O,
      source: g,
      element: _.element
    };
    if (_.canDrop && !_.canDrop(P))
      return u({
        source: g,
        target: _.element.parentElement,
        input: O,
        result: w
      });
    var k = (y = (h = _.getData) === null || h === void 0 ? void 0 : h.call(_, P)) !== null && y !== void 0 ? y : {}, T = (v = (b = _.getDropEffect) === null || b === void 0 ? void 0 : b.call(_, P)) !== null && v !== void 0 ? v : r, $ = {
      data: k,
      element: _.element,
      dropEffect: T,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return u({
      source: g,
      target: _.element.parentElement,
      input: O,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(eT(w), [$])
    });
  }
  function c(p) {
    var y = p.eventName, h = p.payload, v = Md(h.location.current.dropTargets), b;
    try {
      for (v.s(); !(b = v.n()).done; ) {
        var g, x = b.value, O = n.get(x.element), m = mr(mr({}, h), {}, {
          self: x
        });
        O == null || (g = O[y]) === null || g === void 0 || g.call(
          O,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          m
        );
      }
    } catch (w) {
      v.e(w);
    } finally {
      v.f();
    }
  }
  var l = {
    onGenerateDragPreview: c,
    onDrag: c,
    onDragStart: c,
    onDrop: c,
    onDropTargetChange: function(y) {
      var h = y.payload, v = new Set(h.location.current.dropTargets.map(function(R) {
        return R.element;
      })), b = /* @__PURE__ */ new Set(), g = Md(h.location.previous.dropTargets), x;
      try {
        for (g.s(); !(x = g.n()).done; ) {
          var O, m = x.value;
          b.add(m.element);
          var w = n.get(m.element), A = v.has(m.element), _ = mr(mr({}, h), {}, {
            self: m
          });
          if (w == null || (O = w.onDropTargetChange) === null || O === void 0 || O.call(w, _), !A) {
            var P;
            w == null || (P = w.onDragLeave) === null || P === void 0 || P.call(w, _);
          }
        }
      } catch (R) {
        g.e(R);
      } finally {
        g.f();
      }
      var k = Md(h.location.current.dropTargets), T;
      try {
        for (k.s(); !(T = k.n()).done; ) {
          var $, M, j = T.value;
          if (!b.has(j.element)) {
            var I = mr(mr({}, h), {}, {
              self: j
            }), D = n.get(j.element);
            D == null || ($ = D.onDropTargetChange) === null || $ === void 0 || $.call(D, I), D == null || (M = D.onDragEnter) === null || M === void 0 || M.call(D, I);
          }
        }
      } catch (R) {
        k.e(R);
      } finally {
        k.f();
      }
    }
  };
  function f(p) {
    l[p.eventName](p);
  }
  function d(p) {
    var y = p.source, h = p.target, v = p.input, b = p.current, g = u({
      source: y,
      target: h,
      input: v
    });
    if (g.length >= b.length)
      return g;
    for (var x = $d(b), O = $d(g), m = [], w = 0; w < x.length; w++) {
      var A, _ = x[w], P = O[w];
      if (P != null) {
        m.push(P);
        continue;
      }
      var k = m[w - 1], T = x[w - 1];
      if (k?.element !== T?.element)
        break;
      var $ = n.get(_.element);
      if (!$)
        break;
      var M = {
        input: v,
        source: y,
        element: $.element
      };
      if ($.canDrop && !$.canDrop(M) || !((A = $.getIsSticky) !== null && A !== void 0 && A.call($, M)))
        break;
      m.push(mr(mr({}, _), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return $d(m);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: d,
    dispatchEvent: f
  };
}
function Zz(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Jz(e)) || t) {
      r && (e = r);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(c) {
        throw c;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, o = !0, s = !1;
  return { s: function() {
    r = r.call(e);
  }, n: function() {
    var c = r.next();
    return o = c.done, c;
  }, e: function(c) {
    s = !0, i = c;
  }, f: function() {
    try {
      o || r.return == null || r.return();
    } finally {
      if (s) throw i;
    }
  } };
}
function Jz(e, t) {
  if (e) {
    if (typeof e == "string") return rO(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? rO(e, t) : void 0;
  }
}
function rO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nO(Object(r), !0).forEach(function(n) {
      Zi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eW() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(i) {
    t && (!i.canMonitor || i.canMonitor(t.canMonitorArgs)) && t.active.add(i);
  }
  function n(i) {
    var o = Qz({}, i);
    e.add(o), r(o);
    function s() {
      e.delete(o), t && t.active.delete(o);
    }
    return ma(s);
  }
  function a(i) {
    var o = i.eventName, s = i.payload;
    if (o === "onGenerateDragPreview") {
      t = {
        canMonitorArgs: {
          initial: s.location.initial,
          source: s.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var u = Zz(e), c;
      try {
        for (u.s(); !(c = u.n()).done; ) {
          var l = c.value;
          r(l);
        }
      } catch (v) {
        u.e(v);
      } finally {
        u.f();
      }
    }
    if (t) {
      for (var f = Array.from(t.active), d = 0, p = f; d < p.length; d++) {
        var y = p[d];
        if (t.active.has(y)) {
          var h;
          (h = y[o]) === null || h === void 0 || h.call(y, s);
        }
      }
      o === "onDrop" && (t.active.clear(), t = null);
    }
  }
  return {
    dispatchEvent: a,
    monitorForConsumers: n
  };
}
function tW(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, o = eW(), s = Xz({
    typeKey: t,
    defaultDropEffect: i
  });
  function u(f) {
    n?.(f), s.dispatchEvent(f), o.dispatchEvent(f), a?.(f);
  }
  function c(f) {
    var d = f.event, p = f.dragType;
    Qw.start({
      event: d,
      dragType: p,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: u
    });
  }
  function l() {
    function f() {
      var d = {
        canStart: Qw.canStart,
        start: c
      };
      return r(d);
    }
    return Gz({
      typeKey: t,
      mount: f
    });
  }
  return {
    registerUsage: l,
    dropTarget: s.dropTargetForConsumers,
    monitor: o.monitorForConsumers
  };
}
var rW = ma(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), nW = "pdnd:android-fallback", aO = "text/plain", aW = "text/uri-list", iW = "application/vnd.pdnd", ki = /* @__PURE__ */ new WeakMap();
function oW(e) {
  return ki.set(e.element, e), function() {
    ki.delete(e.element);
  };
}
var iO = Mz(), Jv = tW({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return hu(iO.bindEvents(), ra.bind(document, {
      type: "dragstart",
      listener: function(n) {
        var a, i, o, s, u, c;
        if (t.canStart(n) && !n.defaultPrevented) {
          if (!n.dataTransfer) {
            process.env.NODE_ENV !== "production" && console.warn(`
              It appears as though you have are not testing DragEvents correctly.

              - If you are unit testing, ensure you have polyfilled DragEvent.
              - If you are browser testing, ensure you are dispatching drag events correctly.

              Please see our testing guides for more information:
              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing
            `.replace(/ {2}/g, ""));
            return;
          }
          var l = n.target;
          if (!(l instanceof HTMLElement))
            return null;
          var f = ki.get(l);
          if (!f)
            return null;
          var d = Ka(n), p = {
            element: f.element,
            dragHandle: (a = f.dragHandle) !== null && a !== void 0 ? a : null,
            input: d
          };
          if (f.canDrag && !f.canDrag(p))
            return n.preventDefault(), null;
          if (f.dragHandle) {
            var y = QP({
              x: d.clientX,
              y: d.clientY
            });
            if (!f.dragHandle.contains(y))
              return n.preventDefault(), null;
          }
          var h = (i = (o = f.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(f, p)) !== null && i !== void 0 ? i : null;
          if (h)
            for (var v = 0, b = Object.entries(h); v < b.length; v++) {
              var g = YP(b[v], 2), x = g[0], O = g[1];
              n.dataTransfer.setData(x, O ?? "");
            }
          rW() && !n.dataTransfer.types.includes(aO) && !n.dataTransfer.types.includes(aW) && n.dataTransfer.setData(aO, nW), n.dataTransfer.setData(iW, "");
          var m = {
            element: f.element,
            dragHandle: (s = f.dragHandle) !== null && s !== void 0 ? s : null,
            data: (u = (c = f.getInitialData) === null || c === void 0 ? void 0 : c.call(f, p)) !== null && u !== void 0 ? u : {}
          }, w = {
            type: "element",
            payload: m,
            startedFrom: "internal"
          };
          t.start({
            event: n,
            dragType: w
          });
        }
      }
    }));
  },
  dispatchEventToSource: function(t) {
    var r, n, a = t.eventName, i = t.payload;
    (r = ki.get(i.source.element)) === null || r === void 0 || (n = r[a]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: iO.getOnPostDispatch()
}), nT = Jv.dropTarget, sW = Jv.monitor;
function uW(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = ki.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var r = hu(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    Jv.registerUsage(),
    oW(e),
    rT(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return ma(r);
}
function cW(e) {
  const t = /* @__PURE__ */ new Set();
  return hu(
    sW({
      canMonitor(r) {
        return r.source.data.instanceId === e;
      },
      onDragStart(r) {
        const n = r.source.data;
        t.forEach((a) => a({ phase: "start", source: n }));
      },
      onDrop(r) {
        const n = r.source.data;
        t.forEach((a) => a({ phase: "drop", source: n }));
      },
      onDropTargetChange(r) {
        const n = r.source.data;
        t.forEach((a) => a({ phase: "over", source: n }));
      }
    })
  ), {
    registerDraggable(r, { payload: n, disabled: a, handle: i }) {
      return a ? () => {
      } : uW({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: i ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return nT({
        element: r,
        getData: ({ input: a, element: i }) => VP(
          { type: "list-droppable", index: 0, id: n },
          {
            input: a,
            element: i,
            allowedEdges: ["top", "bottom"]
          }
        )
      });
    },
    subscribe(r) {
      return t.add(r), () => t.delete(r);
    }
  };
}
const aT = Ft(null);
function Qv() {
  return dt(aT);
}
function lW({ driver: e, children: t }) {
  const r = Me(e), n = He(() => ({
    driver: r.current
  }), []);
  return S(aT.Provider, {
    value: n,
    children: t
  });
}
function fW(e) {
  const t = Qv(), { ref: r, payload: n, disabled: a, handleRef: i } = e, o = n.data, s = n.id + "|" + (o?.currentParentId ?? "null");
  Le(() => {
    if (r.current && !(!t || a))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: a,
        handle: i?.current ?? null
      });
  }, [t, r, s, a, i, n]);
}
function c7(e) {
  const t = Qv(), r = e?.ref, n = e?.id, a = e?.accepts;
  Le(() => {
    if (r?.current && !(!t || !n || !a))
      return t.driver.registerDroppable(r.current, { id: n, accepts: a });
  }, [t, r, n, a]);
}
function dW(e) {
  const t = Qv();
  Le(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
function pW({ otherActions: e, open: t, setOpen: r, disabled: n }) {
  return S(rS, {
    items: e.map((a) => "type" in a && a.type === "separator" ? a : {
      ...a,
      type: "item"
    }),
    open: t,
    onOpenChange: r,
    children: S(Ar, {
      icon: _O,
      label: "Actions",
      hideLabel: !0,
      variant: "ghost",
      pressed: t,
      size: "sm",
      disabled: n
    })
  });
}
function hW({ item: e, counter: t, isActive: r, sortable: n, collapsible: a = !1, isExpanded: i = !1, onToggleExpanded: o = () => {
}, children: s, open: u, setOpen: c, isHovered: l, setIsHovered: f }) {
  const d = Pr(), { label: p, onClick: y, icon: h, disabled: v, otherActions: b } = e, x = b && b.length > 0 && (l || u), O = t && !x, m = n && (l || u);
  return K("div", {
    className: "flex w-full min-w-0 items-center",
    children: [a && S(Ar, {
      compact: !0,
      size: "sm",
      variant: "ghost",
      onClick: (w) => {
        w.stopPropagation(), o?.(e.id);
      },
      label: d.actions.toggle,
      hideLabel: !0,
      className: J("text-f1-icon transition-all", !i && "-rotate-90"),
      icon: mE
    }), K("div", {
      className: J(PO("focus:border-f1-border-focus"), "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded-[10px] border border-solid border-transparent px-1.5 text-sm transition-colors", r && "bg-f1-background-selected", y && !v && "cursor-pointer hover:bg-f1-background-hover", v && "cursor-not-allowed opacity-30"),
      "data-active": r || void 0,
      onClick: v ? void 0 : () => y?.(e.id),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [(n || h) && S("div", {
        className: "absolute left-1.5 top-1/2 -translate-y-1/2",
        children: S(Na, {
          mode: "wait",
          children: m ? S(Ht.div, {
            initial: {
              opacity: 0,
              scale: 0.8,
              x: 0
            },
            animate: {
              opacity: 1,
              scale: 1,
              x: 0
            },
            exit: {
              opacity: 0,
              scale: 0.8,
              x: 0
            },
            transition: {
              duration: 0.15,
              ease: [0.25, 0.1, 0.25, 1]
            },
            className: "flex flex-shrink-0 items-center justify-center",
            children: S("div", {
              className: "flex flex-shrink-0 cursor-grab items-center justify-center text-f1-icon active:cursor-grabbing",
              "aria-label": "Drag to reorder",
              children: S(ut, {
                icon: gE,
                size: "xs"
              })
            })
          }, "handle") : h && S(Ht.div, {
            initial: {
              opacity: 0,
              scale: 0.8
            },
            animate: {
              opacity: 1,
              scale: 1
            },
            exit: {
              opacity: 0,
              scale: 0.8
            },
            transition: {
              duration: 0.15,
              ease: [0.25, 0.1, 0.25, 1]
            },
            className: "flex flex-shrink-0 items-center justify-center p-0.5 text-f1-icon",
            children: S(ut, {
              icon: h,
              size: "md"
            })
          }, "icon")
        })
      }), S(an, {
        lines: 1,
        className: J("flex-grow text-[14px] font-medium text-f1-foreground transition-all", m || h ? "pl-7" : "pl-0"),
        children: p
      }), S(Na, {
        children: (O || x) && S(Ht.div, {
          initial: {
            opacity: 0,
            scale: 0.8
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: 0.8
          },
          transition: {
            duration: 0.15,
            ease: [0.25, 0.1, 0.25, 1]
          },
          onClick: (w) => w.stopPropagation(),
          className: "relative flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center",
          children: S(Na, {
            mode: "wait",
            children: O ? S(Ht.div, {
              initial: {
                opacity: 0,
                scale: 0.8
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              exit: {
                opacity: 0,
                scale: 0.8
              },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              className: "flex items-center justify-center",
              children: S(kd, {
                value: t
              })
            }, "counter") : x && S(Ht.div, {
              initial: {
                opacity: 0,
                scale: 0.8
              },
              animate: {
                opacity: 1,
                scale: 1
              },
              exit: {
                opacity: 0,
                scale: 0.8
              },
              transition: {
                duration: 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              },
              className: "flex items-center justify-center",
              children: S(pW, {
                otherActions: b,
                open: u,
                setOpen: c,
                disabled: v
              })
            }, "dropdown")
          })
        }, "actions-container")
      })]
    }), s]
  });
}
function Va({ item: e, counter: t, isActive: r, collapsible: n = !1, isExpanded: a = !1, onToggleExpanded: i = () => {
}, sortable: o, children: s, onDragOver: u, onDragLeave: c, onDrop: l, canDropInside: f = !1, currentParentId: d = null, justDropped: p = !1 }) {
  const [y, h] = he(!1), [v, b] = he(!1), g = Me(null), [x, O] = he(null), [m, w] = he(!1), A = Me(null), _ = He(() => ({
    kind: "toc-item",
    id: e.id,
    data: {
      item: e,
      currentParentId: d
    }
  }), [e.id, d, e]);
  return fW({
    ref: g,
    payload: _,
    disabled: !o
  }), Le(() => {
    if (!(!g.current || !o))
      return nT({
        element: g.current,
        canDrop: ({ source: P }) => {
          const k = P.data;
          return k.kind === "toc-item" && k.id !== e.id;
        },
        getData: ({ input: P, element: k }) => {
          const T = k.getBoundingClientRect(), M = P.clientY - T.top, I = T.height * 0.6;
          return f && M > I ? {
            type: "toc-item-target",
            id: e.id,
            position: "inside"
          } : VP({
            type: "toc-item-target",
            id: e.id
          }, {
            input: P,
            element: k,
            allowedEdges: ["top", "bottom"]
          });
        },
        onDragEnter: ({ source: P }) => {
          if (P.data.id === e.id) {
            O(null), w(!1), A.current = null;
            return;
          }
        },
        onDrag: ({ self: P, source: k }) => {
          if (k.data.id === e.id) {
            O(null), w(!1), A.current = null;
            return;
          }
          const $ = P.data, M = Uw(P.data);
          if ($.position === "inside") {
            const j = A.current;
            (!j || !j.isInside || j.edge !== null) && (w(!0), O(null), A.current = {
              edge: null,
              isInside: !0
            }, u?.(e.id, "inside"));
          } else if (M && (M === "top" || M === "bottom")) {
            const j = M === "top" ? "before" : "after", I = A.current;
            !I || I.edge !== M || I.isInside !== !1 ? (O(M), w(!1), A.current = {
              edge: M,
              isInside: !1,
              lastReportTime: Date.now()
            }, u?.(e.id, j)) : Date.now() - (I.lastReportTime || 0) > 50 && (u?.(e.id, j), A.current = {
              ...I,
              lastReportTime: Date.now()
            });
          } else if (!M) {
            const j = A.current;
            if (j?.edge) {
              const I = j.edge === "top" ? "before" : "after";
              Date.now() - (j.lastReportTime || 0) > 50 && (u?.(e.id, I), A.current = {
                ...j,
                lastReportTime: Date.now()
              });
            }
          }
        },
        onDragLeave: () => {
          c?.();
        },
        onDrop: ({ self: P }) => {
          const k = P.data;
          let T = "after";
          k.position === "inside" ? T = "inside" : T = Uw(P.data) === "top" ? "before" : "after", O(null), w(!1), l && l(e.id, T);
        }
      });
  }, [e.id, o, f, u, c, l]), S(Ht.div, {
    ref: g,
    className: J("relative rounded-lg transition-colors", o && "cursor-grab active:cursor-grabbing", x === "top" && "before:bg-f1-border-focus before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0.5", x === "bottom" && "after:bg-f1-border-focus after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-0.5", m && f && "bg-f1-background-hover/30", p && "bg-f1-background-hover/50 shadow-lg"),
    animate: p ? {
      scale: [1, 1.05, 1],
      y: [0, -2, 0]
    } : {},
    transition: p ? {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1]
    } : {},
    children: S(hW, {
      item: e,
      counter: t,
      isActive: r,
      sortable: o,
      collapsible: n,
      isExpanded: a,
      onToggleExpanded: i,
      open: y,
      setOpen: h,
      isHovered: v,
      setIsHovered: b,
      children: s
    })
  });
}
function vW({ item: e, children: t, isActive: r, isExpanded: n, onToggleExpanded: a, sortable: i, hideChildrenCounter: o, canDropInside: s = !1, onDragOver: u, onDragLeave: c, onDrop: l, currentParentId: f, draggedItemId: d }) {
  const p = bE();
  return K(xE, {
    open: n,
    onOpenChange: (y) => {
      y !== n && a?.(e.id);
    },
    children: [S(Va, {
      item: e,
      counter: o ? void 0 : e.children?.length ?? 0,
      isActive: r,
      collapsible: !0,
      isExpanded: n,
      onToggleExpanded: a,
      sortable: i,
      onDragOver: u,
      onDragLeave: c,
      onDrop: l,
      canDropInside: s,
      currentParentId: f,
      draggedItemId: d
    }), S(wE, {
      forceMount: !0,
      className: "flex flex-col gap-1",
      children: S(Ht.div, {
        initial: !1,
        animate: {
          height: n ? "auto" : 0,
          opacity: n ? 1 : 0,
          visibility: n ? "visible" : "hidden"
        },
        transition: {
          duration: p ? 0 : 0.15,
          ease: [0.165, 0.84, 0.44, 1]
        },
        children: S("div", {
          className: "ml-3 min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-5",
          children: t
        })
      })
    })]
  });
}
function yW({ item: e, children: t, isActive: r, sortable: n, hideChildrenCounter: a, canDropInside: i = !1, onDragOver: o, onDragLeave: s, onDrop: u, currentParentId: c, draggedItemId: l }) {
  return K(ft, {
    children: [S(Va, {
      item: e,
      counter: a ? void 0 : e.children?.length ?? 0,
      isActive: r,
      collapsible: !1,
      isExpanded: void 0,
      onToggleExpanded: void 0,
      sortable: n,
      onDragOver: o,
      onDragLeave: s,
      onDrop: u,
      canDropInside: i,
      currentParentId: c,
      draggedItemId: l
    }), t && S("div", {
      className: "ml-[18px] min-w-0 border-0 border-l border-solid border-f1-border-secondary pl-4",
      children: t
    })]
  });
}
function Ma({ item: e, children: t, isActive: r, collapsible: n, isExpanded: a, onToggleExpanded: i, sortable: o, hideChildrenCounter: s, canDropInside: u = !1, onDragOver: c, onDragLeave: l, onDrop: f, currentParentId: d, draggedItemId: p }) {
  return n ? S(vW, {
    item: e,
    isActive: r,
    isExpanded: a,
    onToggleExpanded: i,
    sortable: o,
    hideChildrenCounter: s,
    canDropInside: u,
    onDragOver: c,
    onDragLeave: l,
    onDrop: f,
    currentParentId: d,
    draggedItemId: p,
    children: t
  }) : S(yW, {
    item: e,
    isActive: r,
    sortable: o,
    hideChildrenCounter: s,
    canDropInside: u,
    onDragOver: c,
    onDragLeave: l,
    onDrop: f,
    currentParentId: d,
    draggedItemId: p,
    children: t
  });
}
function mW(e, t) {
  const r = /* @__PURE__ */ new Set();
  if (!t) return r;
  function n(a, i, o = []) {
    for (const s of a) {
      if (s.id === i)
        return o.forEach((c) => r.add(c)), !0;
      const u = [...o, s.id];
      if (s.children && n(s.children, i, u))
        return r.add(s.id), !0;
    }
    return !1;
  }
  return n(e, t), r;
}
function oO(e, t) {
  if (!t.trim())
    return e;
  const r = t.toLowerCase().trim();
  function n(a) {
    const i = a.label.toLowerCase().includes(r), o = a.children ? a.children.map(n).filter(Boolean) : void 0;
    return i || o && o.length > 0 ? {
      ...a,
      children: o && o.length > 0 ? o : void 0
    } : null;
  }
  return e.map(n).filter(Boolean);
}
function mt(e, t) {
  function r(n, a, i = []) {
    for (const o of n) {
      if (o.id === a)
        return { item: o, parentPath: i };
      if (o.children) {
        const s = r(o.children, a, [...i, o.id]);
        if (s) return s;
      }
    }
    return null;
  }
  return r(e, t);
}
function iT(e, t) {
  return e.map((r) => {
    if (r.id === t)
      return null;
    if (r.children) {
      const n = iT(r.children, t);
      return {
        ...r,
        children: n.length > 0 ? n : void 0
      };
    }
    return r;
  }).filter(Boolean);
}
function gW(e, t, r, n) {
  if (r === null) {
    const i = [...e];
    return i.splice(n, 0, t), i;
  }
  function a(i, o, s) {
    return i.map((u) => {
      if (u.id === o) {
        const l = [...u.children || []];
        return l.splice(s, 0, t), {
          ...u,
          children: l
        };
      }
      return u.children ? {
        ...u,
        children: a(u.children, o, s)
      } : u;
    });
  }
  return a(e, r, n);
}
function oT(e, t, r) {
  if (r === null) return !1;
  if (r === t) return !0;
  if (!mt(e, t)) return !1;
  function a(o, s, u) {
    for (const c of o)
      if (c.id === u || c.children && a(c.children, s, u))
        return !0;
    return !1;
  }
  const i = mt(e, t);
  return i?.item.children ? a(i.item.children, t, r) : !1;
}
function gn(e) {
  return e.map((t) => ({
    id: t.id,
    ...t.children && { children: gn(t.children) }
  }));
}
function sT(e, t, r) {
  return e.map((n) => n.id === t ? r : n.children ? {
    ...n,
    children: sT(n.children, t, r)
  } : n);
}
function bW(e, t, r, n) {
  const a = mt(e, t);
  if (!a) return n;
  let i = n;
  if (r !== null) {
    if (mt(e, r)) {
      const s = a.parentPath;
      if (s.length > 0 && s[s.length - 1] === r) {
        const u = mt(
          e,
          s[s.length - 1]
        );
        if (u) {
          const c = u.item.children?.findIndex(
            (l) => l.id === t
          );
          c !== void 0 && c < n && (i = n - 1);
        }
      }
    }
  } else
    a.parentPath.length === 0 && e.findIndex((u) => u.id === t) < n && (i = n - 1);
  return i;
}
function uT(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const x = e.children ? Ma : Va, O = o?.has(e.id) ?? !0, m = f === e.id, w = !!(l && l !== e.id && c && e.children !== void 0 && !oT(c, l, e.id)), A = !!(l && l !== e.id && m && d === "before"), _ = !!(l && l !== e.id && m && d === "after"), P = y === null ? c?.[0]?.id === e.id : !c || !y ? !1 : mt(c, y)?.item.children?.[0]?.id === e.id;
  return K(ft, {
    children: [S(Na, {
      children: A && S(Ht.div, {
        initial: {
          opacity: 0,
          height: 0,
          marginTop: 0,
          marginBottom: 0
        },
        animate: {
          opacity: 1,
          height: 40,
          marginTop: P ? 0 : 2,
          marginBottom: 2
        },
        exit: {
          opacity: 0,
          height: 0,
          marginTop: 0,
          marginBottom: 0
        },
        transition: {
          duration: 0.2,
          ease: [0.25, 0.1, 0.25, 1]
        },
        className: "rounded-[10px] border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40"
      }, "placeholder-before")
    }), x === Va ? S(Va, {
      item: e,
      isActive: n === e.id,
      sortable: t,
      collapsible: !1,
      isExpanded: !1,
      onToggleExpanded: s,
      onDragOver: h,
      onDragLeave: v,
      onDrop: b,
      canDropInside: !1,
      currentParentId: y,
      draggedItemId: l,
      justDropped: g === e.id
    }, e.id) : S(x, {
      item: e,
      isActive: n === e.id,
      collapsible: a && e.children && e.children.length > 0,
      isExpanded: O,
      onToggleExpanded: s,
      sortable: t,
      hideChildrenCounter: i,
      canDropInside: w,
      onDragOver: x === Ma ? h : void 0,
      onDragLeave: x === Ma ? v : void 0,
      onDrop: x === Ma ? b : void 0,
      currentParentId: y,
      draggedItemId: l,
      children: e.children && (x === Ma || O) && K("div", {
        className: J("flex flex-col", m && d === "inside" && w && "rounded-md bg-f1-background-hover/20 p-1"),
        children: [e.children.map((k) => uT(k, t, r + 1, n, a, i, o, s, u, c, l, f, d, t ? p : void 0, e.id, h, v, b, g)), m && d === "inside" && w && (!O || e.children.length === 0) && S("div", {
          className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary",
          children: "Drop here"
        })]
      })
    }, e.id), S(Na, {
      children: _ && S(Ht.div, {
        initial: {
          opacity: 0,
          height: 0,
          marginTop: 0,
          marginBottom: 0
        },
        animate: {
          opacity: 1,
          height: 40,
          marginTop: 2,
          marginBottom: 2
        },
        exit: {
          opacity: 0,
          height: 0,
          marginTop: 0,
          marginBottom: 0
        },
        transition: {
          duration: 0.2,
          ease: [0.25, 0.1, 0.25, 1]
        },
        className: "rounded-[10px] border-2 border-dashed border-f1-border-secondary bg-f1-background-hover/40"
      }, "placeholder-after")
    })]
  });
}
function xW({ title: e, items: t, className: r, activeItem: n, collapsible: a = !1, sortable: i = !1, showSearchBox: o = !1, searchPlaceholder: s, onReorder: u, hideChildrenCounter: c = !1, scrollable: l = !0 }) {
  const f = Pr(), [d, p] = he(""), y = (E) => {
    p(E);
  }, h = He(() => oO(t, d), [t, d]), [v, b] = he(mW(t, n)), [g, x] = he(t);
  Le(() => {
    x(t);
  }, [t]);
  const O = Me(null), m = tt((E) => {
    b((Y) => {
      const F = new Set(Y);
      return F.has(E) ? F.delete(E) : F.add(E), F;
    });
  }, [b]), w = tt((E, Y) => {
    const F = sT(g, E, Y);
    x(F), u && u(gn(F));
  }, [g, u]), A = tt((E) => (Y) => {
    const F = mt(g, E);
    if (F) {
      const ae = {
        ...F.item,
        children: Y
      };
      w(E, ae);
    } else
      E == null && (x(Y), u && u(gn(Y)));
  }, [g, w, u, gn]), _ = tt((E, Y, F) => {
    if (oT(g, E, Y))
      return;
    const ae = mt(g, E);
    if (!ae) return;
    const ce = ae.item;
    let oe = iT(g, E);
    const Se = bW(g, E, Y, F);
    oe = gW(oe, ce, Y, Se), x(oe), Y !== null && b((Te) => {
      const me = new Set(Te);
      return me.add(Y), me;
    }), u && u(gn(oe));
  }, [g, u, gn]), P = He(() => oO(g, d), [g, d]), [k, T] = he(null), [$, M] = he(null), [j, I] = he(null), [D, R] = he(null), L = Me(null), z = Me(!1), N = Me(null), B = Me(null), q = Me(null), H = Me(null), X = Me(null), te = Me(0), ne = Me(0), ee = Me(!1), Q = Me(null), U = tt((E, Y) => {
    q.current && (clearTimeout(q.current), q.current = null);
    const ae = (i ? P : h).findIndex((me) => me.id === E), ce = X.current !== null && ae < X.current;
    X.current = ae;
    const oe = `${E}-${Y}`, Se = $ && j ? `${$}-${j}` : null;
    if (oe === Se)
      return;
    H.current = {
      itemId: E,
      position: Y
    };
    const Te = ce ? 50 : 30;
    q.current = setTimeout(() => {
      const me = H.current;
      if (me) {
        M(me.itemId), I(me.position), N.current = me.itemId, B.current = me.position;
        const ye = Date.now();
        te.current = ye, ne.current = ye;
        const er = (i ? P : h)[0];
        me.itemId === er?.id && me.position === "before" && (ee.current = !0);
      }
      q.current = null;
    }, Te);
  }, [$, j, i, P, h]);
  Le(() => () => {
    q.current && clearTimeout(q.current);
  }, []);
  const V = tt(() => {
    if (z.current)
      return;
    q.current && clearTimeout(q.current);
    const E = ee.current ? 1e3 : 800;
    q.current = setTimeout(() => {
      if (z.current) {
        q.current = null;
        return;
      }
      const Y = Date.now(), F = Y - te.current, ae = Y - ne.current, ce = ee.current ? 800 : 500;
      if (ae < ce) {
        q.current = null;
        return;
      }
      const oe = ee.current ? 800 : 500;
      if (F < oe) {
        q.current = null;
        return;
      }
      if (ee.current) {
        const Te = (i ? P : h)[0];
        if ($ === Te?.id && j === "before") {
          if (ae < 2e3) {
            q.current = null;
            return;
          }
          ee.current = !1;
        } else
          ee.current = !1;
      }
      X.current = null, te.current = 0, M(null), I(null), N.current = null, B.current = null, q.current = null;
    }, E);
  }, [$, j, i, P, h]), Z = tt((E, Y) => {
    z.current = !0;
    const F = L.current;
    if (ee.current = !1, M(null), I(null), N.current = null, B.current = null, q.current && (clearTimeout(q.current), q.current = null), !F || F === E) {
      L.current = null, T(null), M(null), I(null);
      return;
    }
    const ae = mt(g, E), ce = mt(g, F);
    if (ae && ce) {
      let oe = null, Se = 0;
      if (Y === "inside")
        oe = E, Se = ae.item.children?.length ?? 0;
      else if (Y === "before")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E);
        else {
          const ye = mt(g, oe);
          ye && (Se = ye.item.children?.findIndex((qe) => qe.id === E) ?? 0);
        }
      else if (Y === "after")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E) + 1;
        else {
          const ye = mt(g, oe);
          ye && (Se = (ye.item.children?.findIndex((qe) => qe.id === E) ?? 0) + 1);
        }
      const Te = ce.parentPath.length > 0 ? ce.parentPath[ce.parentPath.length - 1] : null;
      let me = -1;
      if (Te === null)
        me = g.findIndex((ye) => ye.id === F);
      else {
        const ye = mt(g, Te);
        ye && (me = ye.item.children?.findIndex((qe) => qe.id === F) ?? -1);
      }
      (oe !== Te || oe === Te && me !== Se) && (R(F), _(F, oe, Se), setTimeout(() => {
        R(null);
      }, 800));
    }
    ee.current = !1, L.current = null, z.current = !0, X.current = null, te.current = 0, ne.current = 0, Q.current && (clearTimeout(Q.current), Q.current = null), T(null), setTimeout(() => {
      z.current = !1;
    }, 600);
  }, [g, _]);
  return dW(tt((E) => {
    if (E.phase === "start" && E.source.kind === "toc-item")
      q.current && (clearTimeout(q.current), q.current = null), Q.current && (clearTimeout(Q.current), Q.current = null), L.current = E.source.id, z.current = !1, H.current = null, T(E.source.id);
    else if (E.phase === "cancel")
      ee.current = !1, z.current = !1, H.current = null, X.current = null, te.current = 0, ne.current = 0, q.current && (clearTimeout(q.current), q.current = null), Q.current && (clearTimeout(Q.current), Q.current = null), M(null), I(null), N.current = null, B.current = null, T(null), L.current = null;
    else if (E.phase === "drop") {
      q.current && (clearTimeout(q.current), q.current = null), ee.current = !1;
      const Y = N.current || H.current?.itemId, F = B.current || H.current?.position;
      !z.current && Y && F && L.current && L.current !== Y && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!z.current) {
            const ce = N.current || H.current?.itemId, oe = B.current || H.current?.position;
            ce && oe && Z(ce, oe);
          }
        });
      }), Q.current && (clearTimeout(Q.current), Q.current = null);
      const ae = setTimeout(() => {
        z.current || (H.current = null, X.current = null, te.current = 0, ne.current = 0, M(null), I(null), N.current = null, B.current = null, T(null), L.current = null), Q.current === ae && (Q.current = null);
      }, 500);
      Q.current = ae;
    }
  }, [Z])), K("nav", {
    className: J("w-[248px]", l ? "overflow-y-auto" : "overflow-hidden", r),
    "aria-label": e,
    ref: O,
    children: [(e || o) && K("div", {
      className: J("bg-f1-background pb-2 pl-5 pr-4 pt-5", l && "sticky top-0 z-10"),
      children: [o && S("div", {
        className: "mb-4",
        children: S(OE, {
          placeholder: s ?? f.toc.search,
          onChange: y,
          value: d,
          clearable: !0
        })
      }), e && S(an, {
        lines: 1,
        tag: "h2",
        className: "text-[14px] font-medium text-f1-foreground-secondary",
        children: e
      })]
    }), S(vh, {
      className: "h-full min-h-0",
      children: S("div", {
        className: "px-3 pb-2",
        children: S("div", {
          className: "flex flex-col gap-0.5",
          children: (i ? P : h).map((E) => uT(E, i, 0, n, a, c, v, m, _, g, k, $, j, i ? A : void 0, null, U, V, Z, D))
        })
      })
    })]
  });
}
function wW(e) {
  const t = Me(/* @__PURE__ */ Symbol("f0-table-of-contents")), r = He(() => cW(t.current), []);
  return S(lW, {
    driver: r,
    children: S(xW, {
      ...e
    })
  });
}
const l7 = na("F0TableOfContent", wW), OW = ze(function({ bare: t = !1, ...r }, n) {
  return S("div", {
    ref: n,
    role: "separator",
    className: J("-mx-4 h-[1px]", t ? void 0 : "my-4"),
    style: {
      backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
    },
    ...r
  });
}), SW = ({ text: e, isCompleted: t }) => K("div", {
  className: "flex flex-row items-center gap-2",
  children: [S(ut, {
    className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
    icon: t ? _s : AO,
    size: "md"
  }), S("span", {
    className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
    children: e
  })]
}), AW = ({ title: e, items: t }) => K("div", {
  className: "px-4 pb-2",
  children: [S("div", {
    className: "mb-2 text-sm text-f1-foreground-secondary",
    children: e
  }), S("div", {
    className: "flex flex-col gap-2",
    children: t.map((r) => S(SW, {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    }, r.text))
  })]
}), _W = ({ onClose: e, success: t, successButtonOnClick: r, successButtonLabel: n, closeLabel: a }) => {
  const i = t && n && r, o = (s = !1) => K(ft, {
    children: [S(Gt, {
      variant: "outline",
      label: a,
      onClick: e,
      size: s ? "lg" : void 0
    }), i && S(Gt, {
      variant: "promote",
      label: n,
      onClick: () => {
        r(), e?.();
      },
      size: s ? "lg" : void 0
    })]
  });
  return K(WP, {
    className: "px-4 pb-4 pt-2 [&_div]:w-full",
    children: [S("div", {
      className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
      children: o()
    }), S("div", {
      className: "flex flex-col-reverse gap-2 sm:hidden",
      children: o(!0)
    })]
  });
}, cT = ze(({ open: e, onClose: t, success: r = !0, errorMessage: n, successMessage: a, nextSteps: i, closeLabel: o, portalContainer: s }, u) => {
  const [c, l] = he(!1), f = tt(() => {
    l(!0), setTimeout(() => {
      t?.(), l(!1);
    }, 200);
  }, [t]);
  return S(SE, {
    open: e && !c,
    onOpenChange: (d) => !d && f?.(),
    children: K(AE, {
      ref: u,
      className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
      container: s,
      children: [K(UP, {
        className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
        children: [S(Lj, {
          type: r ? "positive" : "critical",
          size: "lg"
        }), K("div", {
          className: "flex flex-col gap-0.5",
          children: [S(_E, {
            className: "text-xl font-semibold sm:text-lg",
            children: r ? a?.title : n?.title
          }), S(zP, {
            className: "text-lg sm:text-base",
            children: r ? a?.description : n?.description
          })]
        })]
      }), r && i && i.items?.length > 0 ? K(ft, {
        children: [S(OW, {}), S(AW, {
          title: i.title,
          items: i.items
        })]
      }) : null, S(_W, {
        onClose: f,
        success: r,
        successButtonLabel: a.buttonLabel,
        successButtonOnClick: a.buttonOnClick,
        closeLabel: o
      })]
    })
  });
});
cT.displayName = "UpsellRequestResponseDialog";
var PW = "Label", lT = fe.forwardRef((e, t) => /* @__PURE__ */ S(
  wh.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
lT.displayName = PW;
var fT = lT;
const TW = fe.forwardRef(({ className: e, ...t }, r) => S(fT, {
  ref: r,
  className: J("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
  ...t
}));
TW.displayName = fT.displayName;
function f7({ label: e, showIcon: t = !0, onRequest: r, showConfirmation: n = !0, loading: a, errorMessage: i, successMessage: o, loadingState: s, nextSteps: u, closeLabel: c, variant: l = "promote", onModalStateChange: f, portalContainer: d, ...p }) {
  const [y, h] = he(null), [v, b] = he(!1), g = async () => {
    if (r) {
      b(!0);
      try {
        await r(), n && (h("success"), f?.(!0));
      } catch {
        h("error"), f?.(!0);
      } finally {
        b(!1);
      }
    }
  }, x = () => {
    h(null), f?.(!1);
  }, O = a || v, m = O ? s.label : e;
  return K(ft, {
    children: [S(Gt, {
      variant: l,
      label: m,
      icon: t ? PE : void 0,
      onClick: g,
      loading: O,
      ...p
    }), n && y && S(cT, {
      open: !0,
      onClose: x,
      success: y === "success",
      errorMessage: i,
      successMessage: o,
      nextSteps: u,
      closeLabel: c,
      portalContainer: d
    })]
  });
}
const EW = ze(function({ title: t, subtitle: r, mediaUrl: n, primaryAction: a, secondaryAction: i, onClose: o, isLoading: s = !1, children: u, variant: c = "default" }, l) {
  const f = n?.includes(".mp4"), [d, p] = he(!1), y = () => {
    o && o(), p(!0);
  };
  return s ? S(dT, {
    ref: l
  }) : d ? null : K("div", {
    ref: l,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    children: [S("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: f ? S("video", {
        src: n,
        autoPlay: !0,
        muted: !0,
        loop: !0,
        className: "h-full w-full rounded-lg object-cover"
      }) : S("img", {
        src: n,
        alt: "",
        className: "h-full w-full rounded-lg object-cover"
      })
    }), K("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [K("div", {
        className: J("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
        children: [S("h3", {
          className: "font-bold text-xl text-f1-foreground",
          children: t
        }), r && S("p", {
          className: "text-base text-f1-foreground-secondary",
          children: r
        })]
      }), K("div", {
        className: "flex gap-3",
        children: [a && S(Gt, {
          onClick: a.onClick,
          label: a.label,
          variant: a.variant || "default",
          size: "md",
          icon: a.icon
        }), i && S(Gt, {
          onClick: i.onClick,
          label: i.label,
          variant: i.variant || "outline",
          size: "md",
          icon: i.icon
        }), u]
      })]
    }), o && S("div", {
      className: "absolute right-2 top-2 z-10",
      children: S(Gt, {
        variant: "ghost",
        icon: CO,
        size: "sm",
        hideLabel: !0,
        onClick: y,
        label: "Close"
      })
    })]
  });
}), dT = ze(function(t, r) {
  return K("div", {
    ref: r,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    ...t,
    children: [S("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: S(At, {
        className: "h-full w-full rounded-lg"
      })
    }), K("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [K("div", {
        className: "flex w-full flex-col gap-1 sm:max-w-lg",
        children: [S(At, {
          className: "h-7 w-3/4"
        }), S(At, {
          className: "h-4 w-full"
        }), S(At, {
          className: "h-4 w-2/3"
        })]
      }), K("div", {
        className: "flex gap-3",
        children: [S(At, {
          className: "h-9 w-32"
        }), S(At, {
          className: "h-9 w-24"
        })]
      })]
    }), S("div", {
      className: "absolute right-2 top-2 z-10",
      children: S(At, {
        className: "h-8 w-8 rounded-md"
      })
    })]
  });
}), CW = TO(EW, dT);
CW.displayName = "BaseBanner";
const pT = {
  get: () => ({}),
  set: () => Promise.resolve()
}, hT = Ft(pT), d7 = ({ children: e, handler: t }) => S(hT.Provider, {
  value: t ?? pT,
  children: e
}), p7 = () => {
  const e = dt(hT);
  if (!e)
    throw new Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
  return e;
};
export {
  Dw as $,
  Bt as A,
  $r as B,
  kW as C,
  rS as D,
  Hi as E,
  pa as F,
  Er as G,
  Vi as H,
  fu as I,
  Lv as J,
  Rv as K,
  DW as L,
  Et as M,
  qt as N,
  Nv as O,
  lu as P,
  jP as Q,
  HW as R,
  A_ as S,
  KW as T,
  VW as U,
  GW as V,
  YW as W,
  vr as X,
  yr as Y,
  XW as Z,
  v9 as _,
  Gh as a,
  nT as a$,
  sh as a0,
  MP as a1,
  Lj as a2,
  u7 as a3,
  l7 as a4,
  Xv as a5,
  cT as a6,
  zv as a7,
  Kv as a8,
  TW as a9,
  fW as aA,
  c7 as aB,
  Y6 as aC,
  je as aD,
  Ki as aE,
  y3 as aF,
  FL as aG,
  qS as aH,
  eu as aI,
  Js as aJ,
  vL as aK,
  JW as aL,
  Xj as aM,
  RW as aN,
  BW as aO,
  FW as aP,
  GS as aQ,
  Zh as aR,
  LW as aS,
  QW as aT,
  NW as aU,
  Ha as aV,
  dz as aW,
  p7 as aX,
  Wv as aY,
  Uv as aZ,
  Z9 as a_,
  Vv as aa,
  f7 as ab,
  CW as ac,
  UW as ad,
  d7 as ae,
  IW as af,
  zW as ag,
  oS as ah,
  t7 as ai,
  r7 as aj,
  n7 as ak,
  s7 as al,
  o7 as am,
  i7 as an,
  uh as ao,
  Gv as ap,
  NP as aq,
  Yv as ar,
  qP as as,
  BP as at,
  RP as au,
  LP as av,
  a7 as aw,
  cW as ax,
  lW as ay,
  dW as az,
  pe as b,
  VP as b0,
  Uw as b1,
  rz as b2,
  sW as b3,
  e7 as b4,
  UP as b5,
  zP as b6,
  WP as b7,
  Hv as b8,
  b9,
  ZW as ba,
  OW as bb,
  qW as bc,
  W6 as bd,
  hr as be,
  Va as bf,
  Ma as bg,
  en as c,
  Ke as d,
  xt as e,
  ie as f,
  Re as g,
  WW as h,
  Qr as i,
  ue as j,
  Zr as k,
  le as l,
  Tt as m,
  Bs as n,
  Vo as o,
  cu as p,
  Gi as q,
  Ir as r,
  Pv as s,
  ha as t,
  sn as u,
  qv as v,
  Xi as w,
  da as x,
  Yi as y,
  du as z
};
