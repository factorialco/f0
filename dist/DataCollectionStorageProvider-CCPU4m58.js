import { jsx as S, jsxs as K, Fragment as ft } from "react/jsx-runtime";
import * as fe from "react";
import C, { useRef as Me, useState as he, useCallback as tt, useEffect as qe, useContext as dt, useMemo as Ke, useLayoutEffect as aO, createContext as Ft, isValidElement as Dt, Children as Kr, PureComponent as jt, forwardRef as We, useImperativeHandle as xT, cloneElement as He, createElement as iO, Component as oO, useId as wT } from "react";
import { bh as ay, bf as OT, dk as ST, B as Ar, aH as sO, c as Q, aI as uO, aB as AT, aC as _T, a as Ss, dl as Qi, bs as _e, D as PT, dm as TT, dn as ET, aN as cO, dp as CT, dq as jT, bK as fh, dr as MT, F as ut, J as As, aY as lO, b6 as dh, az as fO, ds as bn, dt as $T, du as IT, dv as kT, dw as iy, dx as oy, dy as sy, dz as uy, dA as cy, dB as dO, dC as go, dD as NT, dE as DT, cq as Va, dF as RT, H as pO, y as hO, z as vO, q as ph, $ as nn, r as yO, s as mO, bP as hh, g as de, ca as LT, by as vh, bz as yh, bA as mh, bD as gh, cA as qT, cH as bh, d5 as BT, co as FT, aD as zT, aA as WT, cw as ki, u as Pr, aZ as UT, bF as HT, Q as Gt, ae as gO, a1 as KT, a2 as bO, a3 as VT, da as _s, dG as GT, O as an, aW as YT, aK as XT, b2 as ZT, aL as xO, b5 as JT, m as Ht, G as xh, e as wO, a9 as QT, n as OO, bM as eE, S as At, w as SO, E as tE, N as AO, dH as _O, t as rE, cR as Re, dI as PO, dJ as TO, dK as $d, dL as nE, dM as ly, P as aE, l as iE, o as oE, di as sE, af as uE, d7 as cE, aE as lE, dN as fE, f as dE, aG as pE, A as Na, d as hE, cu as vE, av as yE, b8 as mE, ba as gE, db as bE, K as xE, L as wE, M as OE, R as SE } from "./index-Nk34Ptwr.js";
const AE = {
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
function _E(e, t) {
  const r = e.scrollSnapList();
  return typeof t == "number" ? r.map(() => t) : t(r, e);
}
function PE(e, t) {
  const r = e.rootNode();
  return t && t(r) || r;
}
function wh(e = {}) {
  let t, r, n, a, i = null, o = 0, s = !1, u = !1, c = !1, l = !1;
  function f(M, $) {
    r = M;
    const {
      mergeOptions: N,
      optionsAtMedia: R
    } = $, F = N(AE, wh.globalOptions), z = N(F, e);
    if (t = R(z), r.scrollSnapList().length <= 1) return;
    l = t.jump, n = !1, a = _E(r, t.delay);
    const {
      eventStore: D,
      ownerDocument: q
    } = r.internalEngine(), L = !!r.internalEngine().options.watchDrag, H = PE(r, t.rootNode);
    D.add(q, "visibilitychange", b), L && r.on("pointerDown", x), L && !t.stopOnInteraction && r.on("pointerUp", O), t.stopOnMouseEnter && D.add(H, "mouseenter", m), t.stopOnMouseEnter && !t.stopOnInteraction && D.add(H, "mouseleave", w), t.stopOnFocusIn && r.on("slideFocusStart", v), t.stopOnFocusIn && !t.stopOnInteraction && D.add(r.containerNode(), "focusout", h), t.playOnInit && h();
  }
  function d() {
    r.off("pointerDown", x).off("pointerUp", O).off("slideFocusStart", v), v(), n = !0, s = !1;
  }
  function p() {
    const {
      ownerWindow: M
    } = r.internalEngine();
    M.clearTimeout(o), o = M.setTimeout(T, a[r.selectedScrollSnap()]), i = (/* @__PURE__ */ new Date()).getTime(), r.emit("autoplay:timerset");
  }
  function y() {
    const {
      ownerWindow: M
    } = r.internalEngine();
    M.clearTimeout(o), o = 0, i = null, r.emit("autoplay:timerstopped");
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
      ownerDocument: M
    } = r.internalEngine();
    return M.visibilityState === "hidden";
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
  function A(M) {
    typeof M < "u" && (l = M), h();
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
      index: M
    } = r.internalEngine(), $ = M.clone().add(1).get(), N = r.scrollSnapList().length - 1, R = t.stopOnLastSnap && $ === N;
    if (r.canScrollNext() ? r.scrollNext(l) : r.scrollTo(0, l), r.emit("autoplay:select"), R) return v();
    h();
  }
  function I() {
    if (!i) return null;
    const M = a[r.selectedScrollSnap()], $ = (/* @__PURE__ */ new Date()).getTime() - i;
    return M - $;
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
    timeUntilNext: I
  };
}
wh.globalOptions = void 0;
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
var TE = 0.996, EE = function(t, r) {
  return r === void 0 && (r = TE), t * r / (1 - r);
};
function CE(e) {
  return e[e.length - 1];
}
function jE(e) {
  return e.reduce(function(t, r) {
    return t + r;
  }) / e.length;
}
var ME = function(t, r, n) {
  return Math.min(Math.max(r, t), n);
};
function mu(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(r, n) {
    return r + t[n];
  });
}
function fy(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function En(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && En(t);
  }), e;
}
function $E() {
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
function IE(e) {
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
var kE = 16 * 1.125, NE = typeof window < "u" && window.innerHeight || 800, gu = [1, kE, NE];
function DE(e) {
  var t = e.deltaX * gu[e.deltaMode], r = e.deltaY * gu[e.deltaMode], n = (e.deltaZ || 0) * gu[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, r, n]
  };
}
var RE = [-1, -1, -1];
function LE(e, t) {
  if (!t)
    return e;
  var r = t === !0 ? RE : t.map(function(n) {
    return n ? -1 : 1;
  });
  return Vr({}, e, {
    axisDelta: e.axisDelta.map(function(n, a) {
      return n * r[a];
    })
  });
}
var dy = 700, qE = function(t) {
  return Vr({}, t, {
    axisDelta: t.axisDelta.map(function(r) {
      return ME(r, -dy, dy);
    })
  });
}, bu = process.env.NODE_ENV !== "production", BE = 0.6, FE = 0.96, zE = 2, py = 5, hy = /* @__PURE__ */ En({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), WE = 400;
function vy() {
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
    willEndTimeout: WE
  };
}
function UE(e) {
  e === void 0 && (e = {});
  var t = $E(), r = t.on, n = t.off, a = t.dispatch, i = hy, o = vy(), s, u = !1, c, l = function(M) {
    Array.isArray(M) ? M.forEach(function($) {
      return y($);
    }) : y(M);
  }, f = function(M) {
    return M === void 0 && (M = {}), Object.values(M).some(function($) {
      return $ == null;
    }) ? (bu && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = En(Vr({}, hy, i, M));
  }, d = function(M) {
    var $ = Vr({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: o.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: o.axisVelocity,
      axisMovement: o.axisMovement,
      get axisMovementProjection() {
        return mu($.axisMovement, $.axisVelocity.map(function(N) {
          return EE(N);
        }));
      }
    }, M);
    a("wheel", Vr({}, $, {
      previous: c
    })), c = $;
  }, p = function(M, $) {
    var N = i, R = N.preventWheelAction, F = $[0], z = $[1], D = $[2];
    if (typeof R == "boolean") return R;
    switch (R) {
      case "x":
        return Math.abs(F) >= M;
      case "y":
        return Math.abs(z) >= M;
      case "z":
        return Math.abs(D) >= M;
      default:
        return bu && console.warn("unsupported preventWheelAction value: " + R, "warn"), !1;
    }
  }, y = function(M) {
    var $ = qE(LE(DE(M), i.reverseSign)), N = $.axisDelta, R = $.timeStamp, F = fy(N);
    if (M.preventDefault && p(F, N) && M.preventDefault(), o.isStarted ? o.isMomentum && F > Math.max(2, o.lastAbsDelta * 2) && (_(!0), w()) : w(), F === 0 && Object.is && Object.is(M.deltaX, -0)) {
      u = !0;
      return;
    }
    s = M, o.axisMovement = mu(o.axisMovement, N), o.lastAbsDelta = F, o.scrollPointsToMerge.push({
      axisDelta: N,
      timeStamp: R
    }), h(), d({
      axisDelta: N,
      isStart: !o.isStartPublished
    }), o.isStartPublished = !0, A();
  }, h = function() {
    o.scrollPointsToMerge.length === zE ? (o.scrollPoints.unshift({
      axisDeltaSum: o.scrollPointsToMerge.map(function(M) {
        return M.axisDelta;
      }).reduce(mu),
      timeStamp: jE(o.scrollPointsToMerge.map(function(M) {
        return M.timeStamp;
      }))
    }), b(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || O()) : o.isStartPublished || v();
  }, v = function() {
    o.axisVelocity = CE(o.scrollPointsToMerge).axisDelta.map(function(M) {
      return M / o.willEndTimeout;
    });
  }, b = function() {
    var M = o.scrollPoints, $ = M[0], N = M[1];
    if (!(!N || !$)) {
      var R = $.timeStamp - N.timeStamp;
      if (R <= 0) {
        bu && console.warn("invalid deltaTime");
        return;
      }
      var F = $.axisDeltaSum.map(function(D) {
        return D / R;
      }), z = F.map(function(D, q) {
        return D / (o.axisVelocity[q] || 1);
      });
      o.axisVelocity = F, o.accelerationFactors.push(z), g(R);
    }
  }, g = function(M) {
    var $ = Math.ceil(M / 10) * 10 * 1.2;
    o.isMomentum || ($ = Math.max(100, $ * 2)), o.willEndTimeout = Math.min(1e3, Math.round($));
  }, x = function(M) {
    return M === 0 ? !0 : M <= FE && M >= BE;
  }, O = function() {
    if (o.accelerationFactors.length >= py) {
      if (u && (u = !1, fy(o.axisVelocity) >= 0.2)) {
        m();
        return;
      }
      var M = o.accelerationFactors.slice(py * -1), $ = M.every(function(N) {
        var R = !!N.reduce(function(z, D) {
          return z && z < 1 && z === D ? 1 : 0;
        }), F = N.filter(x).length === N.length;
        return R || F;
      });
      $ && m(), o.accelerationFactors = M;
    }
  }, m = function() {
    o.isMomentum = !0;
  }, w = function() {
    o = vy(), o.isStarted = !0, o.startTime = Date.now(), c = void 0, u = !1;
  }, A = /* @__PURE__ */ (function() {
    var j;
    return function() {
      clearTimeout(j), j = setTimeout(_, o.willEndTimeout);
    };
  })(), _ = function(M) {
    M === void 0 && (M = !1), o.isStarted && (o.isMomentum && M ? d({
      isEnding: !0,
      isMomentumCancel: !0
    }) : d({
      isEnding: !0
    }), o.isMomentum = !1, o.isStarted = !1);
  }, P = IE(l), k = P.observe, T = P.unobserve, I = P.disconnect;
  return f(e), En({
    on: r,
    off: n,
    observe: k,
    unobserve: T,
    disconnect: I,
    feedWheel: l,
    updateOptions: f
  });
}
var HE = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Oh.globalOptions = void 0;
var KE = process.env.NODE_ENV !== "production";
function Oh(e) {
  e === void 0 && (e = {});
  var t, r = function() {
  };
  function n(i, o) {
    var s, u, c = o.mergeOptions, l = o.optionsAtMedia, f = c(HE, Oh.globalOptions), d = c(f, e);
    t = l(d);
    var p = i.internalEngine(), y = (s = t.target) != null ? s : i.containerNode().parentNode, h = (u = t.forceWheelAxis) != null ? u : p.options.axis, v = UE({
      preventWheelAction: h,
      reverseSign: [!0, !0, !1]
    }), b = v.observe(y), g = v.on("wheel", I), x = !1, O;
    function m(j) {
      try {
        O = new MouseEvent("mousedown", j.event), T(O);
      } catch {
        return KE && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), r();
      }
      x = !0, A(), t.wheelDraggingClass && y.classList.add(t.wheelDraggingClass);
    }
    function w(j) {
      x = !1, T(k("mouseup", j)), _(), t.wheelDraggingClass && y.classList.remove(t.wheelDraggingClass);
    }
    function A() {
      document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0);
    }
    function _() {
      document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0);
    }
    function P(j) {
      x && j.isTrusted && j.stopImmediatePropagation();
    }
    function k(j, M) {
      var $, N;
      if (h === p.options.axis) {
        var R = M.axisMovement;
        $ = R[0], N = R[1];
      } else {
        var F = M.axisMovement;
        N = F[0], $ = F[1];
      }
      if (!p.options.skipSnaps && !p.options.dragFree) {
        var z = p.containerRect.width, D = p.containerRect.height;
        $ = $ < 0 ? Math.max($, -z) : Math.min($, z), N = N < 0 ? Math.max(N, -D) : Math.min(N, D);
      }
      return new MouseEvent(j, {
        clientX: O.clientX + $,
        clientY: O.clientY + N,
        screenX: O.screenX + $,
        screenY: O.screenY + N,
        movementX: $,
        movementY: N,
        button: 0,
        bubbles: !0,
        cancelable: !0,
        composed: !0
      });
    }
    function T(j) {
      i.containerNode().dispatchEvent(j);
    }
    function I(j) {
      var M = j.axisDelta, $ = M[0], N = M[1], R = h === "x" ? $ : N, F = h === "x" ? N : $, z = j.isMomentum && j.previous && !j.previous.isMomentum, D = j.isEnding && !j.isMomentum || z, q = Math.abs(R) > Math.abs(F);
      q && !x && !j.isMomentum && m(j), x && (D ? w(j) : T(k("mousemove", j)));
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
function VE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function yy(e) {
  return VE(e) || Array.isArray(e);
}
function GE() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Sh(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== i ? !1 : r.every((o) => {
    const s = e[o], u = t[o];
    return typeof s == "function" ? `${s}` == `${u}` : !yy(s) || !yy(u) ? s === u : Sh(s, u);
  });
}
function my(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function YE(e, t) {
  if (e.length !== t.length) return !1;
  const r = my(e), n = my(t);
  return r.every((a, i) => {
    const o = n[i];
    return Sh(a, o);
  });
}
function Ah(e) {
  return typeof e == "number";
}
function Id(e) {
  return typeof e == "string";
}
function Ps(e) {
  return typeof e == "boolean";
}
function gy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ke(e) {
  return Math.abs(e);
}
function _h(e) {
  return Math.sign(e);
}
function Da(e, t) {
  return ke(e - t);
}
function XE(e, t) {
  if (e === 0 || t === 0 || ke(e) <= ke(t)) return 0;
  const r = Da(ke(e), ke(t));
  return ke(r / e);
}
function ZE(e) {
  return Math.round(e * 100) / 100;
}
function Ga(e) {
  return Ya(e).map(Number);
}
function Rt(e) {
  return e[Ni(e)];
}
function Ni(e) {
  return Math.max(0, e.length - 1);
}
function Ph(e, t) {
  return t === Ni(e);
}
function by(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function Ya(e) {
  return Object.keys(e);
}
function EO(e, t) {
  return [e, t].reduce((r, n) => (Ya(n).forEach((a) => {
    const i = r[a], o = n[a], s = gy(i) && gy(o);
    r[a] = s ? EO(i, o) : o;
  }), r), {});
}
function kd(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function JE(e, t) {
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
    return Id(e) ? r[e](u) : e(t, u, c);
  }
  return {
    measure: o
  };
}
function Xa() {
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
function QE(e, t, r, n) {
  const a = Xa(), i = 1e3 / 60;
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
function eC(e, t) {
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
function CO(e, t, r) {
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
    return CO(e, s(), r);
  }
  const f = {
    get: s,
    set: u,
    add: c,
    clone: l
  };
  return f;
}
function tC(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const {
    cross: x,
    direction: O
  } = e, m = ["INPUT", "SELECT", "TEXTAREA"], w = {
    passive: !1
  }, A = Xa(), _ = Xa(), P = Jr(50, 225).constrain(p.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, T = {
    mouse: 500,
    touch: 600
  }, I = y ? 43 : 25;
  let j = !1, M = 0, $ = 0, N = !1, R = !1, F = !1, z = !1;
  function D(E) {
    if (!g) return;
    function Y(ae) {
      (Ps(g) || g(E, ae)) && ne(ae);
    }
    const B = t;
    A.add(B, "dragstart", (ae) => ae.preventDefault(), w).add(B, "touchmove", () => {
    }, w).add(B, "touchend", () => {
    }).add(B, "touchstart", Y).add(B, "mousedown", Y).add(B, "touchcancel", J).add(B, "contextmenu", J).add(B, "click", U, !0);
  }
  function q() {
    A.clear(), _.clear();
  }
  function L() {
    const E = z ? r : t;
    _.add(E, "touchmove", ee, w).add(E, "touchend", J).add(E, "mousemove", ee, w).add(E, "mouseup", J);
  }
  function H(E) {
    const Y = E.nodeName || "";
    return m.includes(Y);
  }
  function X() {
    return (y ? T : k)[z ? "mouse" : "touch"];
  }
  function te(E, Y) {
    const B = f.add(_h(E) * -1), ae = l.byDistance(E, !y).distance;
    return y || ke(E) < P ? ae : v && Y ? ae * 0.5 : l.byIndex(B.get(), 0).distance;
  }
  function ne(E) {
    const Y = kd(E, n);
    z = Y, F = y && Y && !E.buttons && j, j = Da(a.get(), o.get()) >= 2, !(Y && E.button !== 0) && (H(E.target) || (N = !0, i.pointerDown(E), c.useFriction(0).useDuration(0), a.set(o), L(), M = i.readPoint(E), $ = i.readPoint(E, x), d.emit("pointerDown")));
  }
  function ee(E) {
    if (!kd(E, n) && E.touches.length >= 2) return J(E);
    const B = i.readPoint(E), ae = i.readPoint(E, x), ce = Da(B, M), oe = Da(ae, $);
    if (!R && !z && (!E.cancelable || (R = ce > oe, !R)))
      return J(E);
    const Se = i.pointerMove(E);
    ce > h && (F = !0), c.useFriction(0.3).useDuration(0.75), s.start(), a.add(O(Se)), E.preventDefault();
  }
  function J(E) {
    const B = l.byDistance(0, !1).index !== f.get(), ae = i.pointerUp(E) * X(), ce = te(O(ae), B), oe = XE(ae, ce), Se = I - 10 * oe, Te = b + oe / 50;
    R = !1, N = !1, _.clear(), c.useDuration(Se).useFriction(Te), u.distance(ce, !y), z = !1, d.emit("pointerUp");
  }
  function U(E) {
    F && (E.stopPropagation(), E.preventDefault(), F = !1);
  }
  function V() {
    return N;
  }
  return {
    init: D,
    destroy: q,
    pointerDown: V
  };
}
function rC(e, t) {
  let n, a;
  function i(f) {
    return f.timeStamp;
  }
  function o(f, d) {
    const y = `client${(d || e.scroll) === "x" ? "X" : "Y"}`;
    return (kd(f, t) ? f : f.touches[0])[y];
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
function nC() {
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
function aC(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function iC(e, t, r, n, a, i, o) {
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
      (Ps(i) || i(v, g)) && b(g);
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
function oC(e, t, r, n, a, i) {
  let o = 0, s = 0, u = a, c = i, l = e.get(), f = 0;
  function d() {
    const w = n.get() - e.get(), A = !u;
    let _ = 0;
    return A ? (o = 0, r.set(n), e.set(n), _ = w) : (r.set(e), o += w / u, o *= c, l += o, e.add(o), _ = l - f), s = _h(_), f = l, m;
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
function sC(e, t, r, n, a) {
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
function uC(e, t, r, n, a) {
  const i = Jr(-t + e, 0), o = f(), s = l(), u = d();
  function c(y, h) {
    return Da(y, h) <= 1;
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
      } = i, g = i.constrain(y), x = !h, O = Ph(r, h);
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
function cC(e, t, r) {
  const n = t[0], a = r ? n - e : Rt(t);
  return {
    limit: Jr(a, n)
  };
}
function lC(e, t, r, n) {
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
function fC(e) {
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
function dC(e, t, r, n, a) {
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
function pC(e, t, r, n, a, i) {
  const {
    groupSlides: o
  } = a, {
    min: s,
    max: u
  } = n, c = l();
  function l() {
    const d = o(i), p = !e || t === "keepSnaps";
    return r.length === 1 ? [i] : p ? d : d.slice(s, u).map((y, h, v) => {
      const b = !h, g = Ph(v, h);
      if (b) {
        const x = Rt(v[0]) + 1;
        return by(x);
      }
      if (g) {
        const x = Ni(i) - Rt(v)[0] + 1;
        return by(x, Rt(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: c
  };
}
function hC(e, t, r, n, a) {
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
    const b = v.filter((g) => _h(g) === h);
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
function vC(e, t, r, n, a, i, o) {
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
function yC(e, t, r, n, a, i, o, s) {
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
      Ah(g) && (a.useDuration(0), n.index(g, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", f, !1), t.forEach((h, v) => {
      i.add(h, "focus", (b) => {
        (Ps(s) || s(p, b)) && y(v);
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
function Ma(e) {
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
    return Ah(u) ? u : u.get();
  }
  return {
    get: r,
    set: n,
    add: a,
    subtract: i
  };
}
function jO(e, t) {
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
    const p = ZE(e.direction(d));
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
function mC(e, t, r, n, a, i, o, s, u) {
  const l = Ga(a), f = Ga(a).reverse(), d = b().concat(g());
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
      const I = P ? 0 : -r, j = P ? r : 0, M = P ? "end" : "start", $ = k[T][M];
      return {
        index: T,
        loopPoint: $,
        slideLocation: Ma(-1),
        translate: jO(e, u[T]),
        target: () => s.get() > $ ? I : j
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
function gC(e, t, r) {
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
      a || (Ps(r) || r(u, l)) && c(l);
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
function bC(e, t, r, n) {
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
    return Ya(a).reduce((h, v) => {
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
function xC(e, t, r, n, a, i) {
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
      const m = !x, w = Ph(O, x);
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
function wC(e, t, r, n, a, i, o, s, u) {
  const {
    startEdge: c,
    endEdge: l,
    direction: f
  } = e, d = Ah(r);
  function p(b, g) {
    return Ga(b).filter((x) => x % g === 0).map((x) => b.slice(x, x + g));
  }
  function y(b) {
    return b.length ? Ga(b).reduce((g, x, O) => {
      const m = Rt(g) || 0, w = m === 0, A = x === Ni(b), _ = a[c] - i[m][c], P = a[c] - i[x][l], k = !n && w ? f(o) : 0, T = !n && A ? f(s) : 0, I = ke(P - T - (_ + k));
      return O && I > t + u && g.push(x), A && g.push(b.length), g;
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
function OC(e, t, r, n, a, i, o) {
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
  } = i, A = 2, _ = nC(), P = _.measure(t), k = r.map(_.measure), T = eC(u, c), I = T.measureSize(P), j = aC(I), M = JE(s, I), $ = !f && !!g, N = f || !!g, {
    slideSizes: R,
    slideSizesWithGaps: F,
    startGap: z,
    endGap: D
  } = xC(T, P, k, r, N, a), q = wC(T, I, v, f, P, k, z, D, A), {
    snaps: L,
    snapsAligned: H
  } = dC(T, M, P, k, q), X = -Rt(L) + Rt(F), {
    snapsContained: te,
    scrollContainLimit: ne
  } = uC(I, X, H, g, A), ee = $ ? te : H, {
    limit: J
  } = cC(X, ee, f), U = CO(Ni(ee), l, f), V = U.clone(), Z = Ga(r), E = ({
    dragHandler: pn,
    scrollBody: vu,
    scrollBounds: yu,
    options: {
      loop: Ji
    }
  }) => {
    Ji || yu.constrain(pn.pointerDown()), vu.seek();
  }, Y = ({
    scrollBody: pn,
    translate: vu,
    location: yu,
    offsetLocation: Ji,
    previousLocation: dT,
    scrollLooper: pT,
    slideLooper: hT,
    dragHandler: vT,
    animation: yT,
    eventHandler: Jv,
    scrollBounds: mT,
    options: {
      loop: Qv
    }
  }, ey) => {
    const ty = pn.settled(), gT = !mT.shouldConstrain(), ry = Qv ? ty : ty && gT, ny = ry && !vT.pointerDown();
    ny && yT.stop();
    const bT = yu.get() * ey + dT.get() * (1 - ey);
    Ji.set(bT), Qv && (pT.loop(pn.direction()), hT.loop()), vu.to(Ji.get()), ny && Jv.emit("settle"), ry || Jv.emit("scroll");
  }, B = QE(n, a, () => E(hu), (pn) => Y(hu, pn)), ae = 0.68, ce = ee[U.get()], oe = Ma(ce), Se = Ma(ce), Te = Ma(ce), me = Ma(ce), ye = oC(oe, Te, Se, me, d, ae), Be = hC(f, ee, X, J, me), er = vC(B, U, V, ye, Be, me, o), fn = fC(J), dn = Xa(), Zi = bC(t, r, o, h), {
    slideRegistry: ma
  } = pC($, g, ee, ne, q, Z), fT = yC(e, r, ma, er, ye, dn, o, w), hu = {
    ownerDocument: n,
    ownerWindow: a,
    eventHandler: o,
    containerRect: P,
    slideRects: k,
    animation: B,
    axis: T,
    dragHandler: tC(T, e, n, a, me, rC(T, a), oe, B, er, ye, Be, U, o, j, p, y, b, ae, m),
    eventStore: dn,
    percentOfView: j,
    index: U,
    indexPrevious: V,
    limit: J,
    location: oe,
    offsetLocation: Te,
    previousLocation: Se,
    options: i,
    resizeHandler: iC(t, o, a, r, T, x, _),
    scrollBody: ye,
    scrollBounds: sC(J, Te, me, ye, j),
    scrollLooper: lC(X, J, Te, [oe, Te, Se, me]),
    scrollProgress: fn,
    scrollSnapList: ee.map(fn.get),
    scrollSnaps: ee,
    scrollTarget: Be,
    scrollTo: er,
    slideLooper: mC(T, I, X, R, F, L, ee, Te, r),
    slideFocus: fT,
    slidesHandler: gC(t, o, O),
    slidesInView: Zi,
    slideIndexes: Z,
    slideRegistry: ma,
    slidesToScroll: q,
    target: me,
    translate: jO(T, t)
  };
  return hu;
}
function SC() {
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
const AC = {
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
function _C(e) {
  function t(i, o) {
    return EO(i, o || {});
  }
  function r(i) {
    const o = i.breakpoints || {}, s = Ya(o).filter((u) => e.matchMedia(u).matches).map((u) => o[u]).reduce((u, c) => t(u, c), {});
    return t(i, s);
  }
  function n(i) {
    return i.map((o) => Ya(o.breakpoints || {})).reduce((o, s) => o.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function PC(e) {
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
function xo(e, t, r) {
  const n = e.ownerDocument, a = n.defaultView, i = _C(a), o = PC(i), s = Xa(), u = SC(), {
    mergeOptions: c,
    optionsAtMedia: l,
    optionsMediaQueries: f
  } = i, {
    on: d,
    off: p,
    emit: y
  } = u, h = T;
  let v = !1, b, g = c(AC, xo.globalOptions), x = c(g), O = [], m, w, A;
  function _() {
    const {
      container: Z,
      slides: E
    } = x;
    w = (Id(Z) ? e.querySelector(Z) : Z) || e.children[0];
    const B = Id(E) ? w.querySelectorAll(E) : E;
    A = [].slice.call(B || w.children);
  }
  function P(Z) {
    const E = OC(e, w, A, n, a, Z, u);
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
    const Y = q();
    I(), k(c({
      startIndex: Y
    }, Z), E), u.emit("reInit");
  }
  function I() {
    b.dragHandler.destroy(), b.eventStore.clear(), b.translate.clear(), b.slideLooper.clear(), b.resizeHandler.destroy(), b.slidesHandler.destroy(), b.slidesInView.destroy(), b.animation.destroy(), o.destroy(), s.clear();
  }
  function j() {
    v || (v = !0, s.clear(), I(), u.emit("destroy"), u.clear());
  }
  function M(Z, E, Y) {
    !x.active || v || (b.scrollBody.useBaseFriction().useDuration(E === !0 ? 0 : x.duration), b.scrollTo.index(Z, Y || 0));
  }
  function $(Z) {
    const E = b.index.add(1).get();
    M(E, Z, -1);
  }
  function N(Z) {
    const E = b.index.add(-1).get();
    M(E, Z, 1);
  }
  function R() {
    return b.index.add(1).get() !== q();
  }
  function F() {
    return b.index.add(-1).get() !== q();
  }
  function z() {
    return b.scrollSnapList;
  }
  function D() {
    return b.scrollProgress.get(b.offsetLocation.get());
  }
  function q() {
    return b.index.get();
  }
  function L() {
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
  function J() {
    return w;
  }
  function U() {
    return A;
  }
  const V = {
    canScrollNext: R,
    canScrollPrev: F,
    containerNode: J,
    internalEngine: ne,
    destroy: j,
    off: p,
    on: d,
    emit: y,
    plugins: te,
    previousScrollSnap: L,
    reInit: h,
    rootNode: ee,
    scrollNext: $,
    scrollPrev: N,
    scrollProgress: D,
    scrollSnapList: z,
    scrollTo: M,
    selectedScrollSnap: q,
    slideNodes: U,
    slidesInView: H,
    slidesNotInView: X
  };
  return k(t, r), setTimeout(() => u.emit("init"), 0), V;
}
xo.globalOptions = void 0;
function Th(e = {}, t = []) {
  const r = Me(e), n = Me(t), [a, i] = he(), [o, s] = he(), u = tt(() => {
    a && a.reInit(r.current, n.current);
  }, [a]);
  return qe(() => {
    Sh(r.current, e) || (r.current = e, u());
  }, [e, u]), qe(() => {
    YE(n.current, t) || (n.current = t, u());
  }, [t, u]), qe(() => {
    if (GE() && o) {
      xo.globalOptions = Th.globalOptions;
      const c = xo(o, r.current, n.current);
      return i(c), () => c.destroy();
    } else
      i(void 0);
  }, [o, i]), [s, a];
}
Th.globalOptions = void 0;
function AW({ children: e, isValidProp: t, ...r }) {
  t && ST(t), r = { ...dt(ay), ...r }, r.isStatic = OT(() => r.isStatic);
  const n = Ke(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return S(ay.Provider, { value: n, children: e });
}
const Ne = 28, xy = 16, TC = ({ children: e }) => {
  const t = Me(null), [r, n] = he(!0), [a, i] = he(!1);
  aO(() => {
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
  return a && r ? c = `linear-gradient(to right, transparent 0px, transparent ${Ne}px, black ${2 * Ne}px, black calc(100% - ${3 * Ne}px), transparent calc(100% - ${2 * Ne}px), transparent 100%)` : a && !r ? c = `linear-gradient(to right, transparent 0px, transparent ${Ne}px, black ${2 * Ne}px, black 100%)` : !a && r ? c = `linear-gradient(to right, black 0px, black calc(100% - ${3 * Ne}px), transparent calc(100% - ${2 * Ne}px), transparent 100%)` : c = "none", K("div", {
    className: "relative",
    children: [S("div", {
      ref: t,
      className: "relative flex gap-4 overflow-x-auto overflow-y-visible scroll-smooth",
      style: {
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        margin: `-${Ne}px`,
        padding: `${Ne}px`,
        height: `calc(100% + ${Ne * 2}px)`,
        width: `calc(100% + ${Ne * 2}px)`,
        maskImage: c,
        WebkitMaskImage: c,
        scrollSnapType: "x mandatory"
      },
      children: Array.isArray(e) ? e.map((l, f) => S("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: Ne + xy + "px"
        },
        children: l
      }, f)) : e && S("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: Ne + xy + "px"
        },
        children: e
      })
    }), a && S(Ar, {
      size: "lg",
      compact: !0,
      variant: "outline",
      className: Q("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: s,
      icon: sO,
      label: "Previous",
      hideLabel: !0
    }), r && S(Ar, {
      size: "lg",
      variant: "outline",
      compact: !0,
      className: Q("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: o,
      icon: uO,
      label: "Next",
      hideLabel: !0
    })]
  });
}, MO = fe.createContext(null);
function Di() {
  const e = fe.useContext(MO);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const $O = fe.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: a, children: i, ...o }, s) => {
  const [u, c] = Th({
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
  }, [c, y]), S(MO.Provider, {
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
      className: Q("group/carousel relative", a),
      role: "region",
      "aria-roledescription": "carousel",
      ...o,
      children: i
    })
  });
});
$O.displayName = "Carousel";
const IO = fe.forwardRef(({ className: e, ...t }, r) => {
  const n = `linear-gradient(to right, transparent 0px, transparent ${Ne / 2}px, black ${Ne}px, black calc(100% - ${Ne}px), transparent calc(100% - ${Ne / 2}px), transparent 100%)`, { carouselRef: a, orientation: i } = Di();
  return S("div", {
    ref: a,
    className: "overflow-hidden",
    style: {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      margin: `-${Ne}px`,
      padding: `${Ne}px`,
      height: `calc(100% + ${Ne * 2}px)`,
      width: `calc(100% + ${Ne * 2}px)`,
      maskImage: n,
      WebkitMaskImage: n
    },
    children: S("div", {
      ref: r,
      className: Q("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    })
  });
});
IO.displayName = "CarouselContent";
const kO = fe.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = Di();
  return S("div", {
    ref: r,
    role: "group",
    "aria-roledescription": "slide",
    className: Q("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
    ...t
  });
});
kO.displayName = "CarouselItem";
const NO = fe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: o } = Di();
  return S("div", {
    className: Q("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(Ar, {
      compact: !0,
      ref: n,
      size: "sm",
      variant: t,
      className: Q("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Previous",
      icon: AT,
      hideLabel: !0
    })
  });
});
NO.displayName = "CarouselPrevious";
const DO = fe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollNext: i, canScrollNext: o } = Di();
  return S("div", {
    className: Q("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(Ar, {
      ref: n,
      size: "sm",
      variant: t,
      compact: !0,
      className: Q("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Next",
      icon: _T,
      hideLabel: !0
    })
  });
});
DO.displayName = "CarouselNext";
const RO = fe.forwardRef(({ ...e }, t) => {
  const { api: r } = Di(), [, n] = fe.useState(!1), a = fe.useRef(null), i = fe.useCallback(() => {
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
    className: Q("flex justify-center", e.className),
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
            className: Q("h-2 w-2 flex-shrink-0 rounded-[8px] bg-f1-background-inverse opacity-[.08] transition-all duration-300 group-hover/dot:opacity-[.18]", d === s && "rounded-[3px] opacity-100 group-hover/dot:opacity-100", f(d))
          })
        }, d))
      })
    })
  });
});
RO.displayName = "CarouselDots";
const EC = Ss({
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
function ga(e, t, r) {
  if (r) {
    const n = (e || 1) / 2;
    return t ? `peek${n}` : n;
  }
  return t ? `peek${e || 1}` : e || 1;
}
const _W = ({ children: e, columns: t, showArrows: r = !0, showDots: n = !0, autoplay: a = !1, delay: i = 3e3, showPeek: o = !1, doubleColumns: s }) => {
  const u = C.Children.toArray(e), c = C.useRef(a ? wh({
    delay: i,
    stopOnInteraction: !0
  }) : void 0), l = () => {
    c.current && c.current.stop();
  }, f = () => {
    c.current && c.current.play();
  };
  return t ? S($O, {
    className: "flex w-full flex-col gap-3 @container",
    opts: {
      align: o ? "center" : "start",
      slidesToScroll: "auto",
      duration: 20,
      containScroll: !1
    },
    plugins: [c.current, Oh()].filter(Boolean),
    onMouseEnter: a ? l : void 0,
    onMouseLeave: a ? f : void 0,
    children: K("div", {
      className: "flex flex-col gap-5",
      children: [K("div", {
        className: "relative",
        children: [S(IO, {
          children: C.Children.map(u, (d, p) => {
            const y = s?.find((h) => h.index === p);
            return S(kO, {
              className: EC({
                default: ga(t.default, o),
                xs: ga(t.xs, o, y?.sizes?.includes("xs")),
                sm: ga(t.sm, o, y?.sizes?.includes("sm")),
                md: ga(t.md, o, y?.sizes?.includes("md")),
                lg: ga(t.lg, o, y?.sizes?.includes("lg")),
                peek: o
              }),
              children: d
            }, p);
          })
        }), r && K(ft, {
          children: [S(NO, {
            label: "Previous"
          }), S(DO, {
            label: "Next"
          })]
        })]
      }), n && S(RO, {})]
    })
  }) : S(TC, {
    children: e
  });
}, LO = Ft(null);
function PW({ children: e, layout: t }) {
  return S(LO.Provider, {
    value: t,
    children: e
  });
}
function TW() {
  return dt(LO);
}
var xu, wy;
function CC() {
  if (wy) return xu;
  wy = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return xu = e, xu;
}
var wu, Oy;
function Eh() {
  if (Oy) return wu;
  Oy = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return wu = e, wu;
}
var Ou, Sy;
function Ts() {
  if (Sy) return Ou;
  Sy = 1;
  var e = Eh();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return Ou = t, Ou;
}
var Su, Ay;
function jC() {
  if (Ay) return Su;
  Ay = 1;
  var e = Ts(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return Su = n, Su;
}
var Au, _y;
function MC() {
  if (_y) return Au;
  _y = 1;
  var e = Ts();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return Au = t, Au;
}
var _u, Py;
function $C() {
  if (Py) return _u;
  Py = 1;
  var e = Ts();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return _u = t, _u;
}
var Pu, Ty;
function IC() {
  if (Ty) return Pu;
  Ty = 1;
  var e = Ts();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return Pu = t, Pu;
}
var Tu, Ey;
function Es() {
  if (Ey) return Tu;
  Ey = 1;
  var e = CC(), t = jC(), r = MC(), n = $C(), a = IC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Tu = i, Tu;
}
var Eu, Cy;
function kC() {
  if (Cy) return Eu;
  Cy = 1;
  var e = Es();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Eu = t, Eu;
}
var Cu, jy;
function NC() {
  if (jy) return Cu;
  jy = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return Cu = e, Cu;
}
var ju, My;
function DC() {
  if (My) return ju;
  My = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ju = e, ju;
}
var Mu, $y;
function RC() {
  if ($y) return Mu;
  $y = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Mu = e, Mu;
}
var $u, Iy;
function qO() {
  if (Iy) return $u;
  Iy = 1;
  var e = typeof Qi == "object" && Qi && Qi.Object === Object && Qi;
  return $u = e, $u;
}
var Iu, ky;
function Jt() {
  if (ky) return Iu;
  ky = 1;
  var e = qO(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Iu = r, Iu;
}
var ku, Ny;
function Ri() {
  if (Ny) return ku;
  Ny = 1;
  var e = Jt(), t = e.Symbol;
  return ku = t, ku;
}
var Nu, Dy;
function LC() {
  if (Dy) return Nu;
  Dy = 1;
  var e = Ri(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
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
var Du, Ry;
function qC() {
  if (Ry) return Du;
  Ry = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Du = r, Du;
}
var Ru, Ly;
function fr() {
  if (Ly) return Ru;
  Ly = 1;
  var e = Ri(), t = LC(), r = qC(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
  }
  return Ru = o, Ru;
}
var Lu, qy;
function Tr() {
  if (qy) return Lu;
  qy = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Lu = e, Lu;
}
var qu, By;
function Ch() {
  if (By) return qu;
  By = 1;
  var e = fr(), t = Tr(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var u = e(s);
    return u == n || u == a || u == r || u == i;
  }
  return qu = o, qu;
}
var Bu, Fy;
function BC() {
  if (Fy) return Bu;
  Fy = 1;
  var e = Jt(), t = e["__core-js_shared__"];
  return Bu = t, Bu;
}
var Fu, zy;
function FC() {
  if (zy) return Fu;
  zy = 1;
  var e = BC(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Fu = r, Fu;
}
var zu, Wy;
function BO() {
  if (Wy) return zu;
  Wy = 1;
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
  return zu = r, zu;
}
var Wu, Uy;
function zC() {
  if (Uy) return Wu;
  Uy = 1;
  var e = Ch(), t = FC(), r = Tr(), n = BO(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, c = s.hasOwnProperty, l = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(d) {
    if (!r(d) || t(d))
      return !1;
    var p = e(d) ? l : i;
    return p.test(n(d));
  }
  return Wu = f, Wu;
}
var Uu, Hy;
function WC() {
  if (Hy) return Uu;
  Hy = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Uu = e, Uu;
}
var Hu, Ky;
function on() {
  if (Ky) return Hu;
  Ky = 1;
  var e = zC(), t = WC();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Hu = r, Hu;
}
var Ku, Vy;
function jh() {
  if (Vy) return Ku;
  Vy = 1;
  var e = on(), t = Jt(), r = e(t, "Map");
  return Ku = r, Ku;
}
var Vu, Gy;
function Cs() {
  if (Gy) return Vu;
  Gy = 1;
  var e = on(), t = e(Object, "create");
  return Vu = t, Vu;
}
var Gu, Yy;
function UC() {
  if (Yy) return Gu;
  Yy = 1;
  var e = Cs();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Gu = t, Gu;
}
var Yu, Xy;
function HC() {
  if (Xy) return Yu;
  Xy = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return Yu = e, Yu;
}
var Xu, Zy;
function KC() {
  if (Zy) return Xu;
  Zy = 1;
  var e = Cs(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === t ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return Xu = a, Xu;
}
var Zu, Jy;
function VC() {
  if (Jy) return Zu;
  Jy = 1;
  var e = Cs(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return Zu = n, Zu;
}
var Ju, Qy;
function GC() {
  if (Qy) return Ju;
  Qy = 1;
  var e = Cs(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return Ju = r, Ju;
}
var Qu, em;
function YC() {
  if (em) return Qu;
  em = 1;
  var e = UC(), t = HC(), r = KC(), n = VC(), a = GC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Qu = i, Qu;
}
var ec, tm;
function XC() {
  if (tm) return ec;
  tm = 1;
  var e = YC(), t = Es(), r = jh();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return ec = n, ec;
}
var tc, rm;
function ZC() {
  if (rm) return tc;
  rm = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return tc = e, tc;
}
var rc, nm;
function js() {
  if (nm) return rc;
  nm = 1;
  var e = ZC();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return rc = t, rc;
}
var nc, am;
function JC() {
  if (am) return nc;
  am = 1;
  var e = js();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return nc = t, nc;
}
var ac, im;
function QC() {
  if (im) return ac;
  im = 1;
  var e = js();
  function t(r) {
    return e(this, r).get(r);
  }
  return ac = t, ac;
}
var ic, om;
function ej() {
  if (om) return ic;
  om = 1;
  var e = js();
  function t(r) {
    return e(this, r).has(r);
  }
  return ic = t, ic;
}
var oc, sm;
function tj() {
  if (sm) return oc;
  sm = 1;
  var e = js();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return oc = t, oc;
}
var sc, um;
function Mh() {
  if (um) return sc;
  um = 1;
  var e = XC(), t = JC(), r = QC(), n = ej(), a = tj();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, sc = i, sc;
}
var uc, cm;
function rj() {
  if (cm) return uc;
  cm = 1;
  var e = Es(), t = jh(), r = Mh(), n = 200;
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
  return uc = a, uc;
}
var cc, lm;
function FO() {
  if (lm) return cc;
  lm = 1;
  var e = Es(), t = kC(), r = NC(), n = DC(), a = RC(), i = rj();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, cc = o, cc;
}
var lc, fm;
function nj() {
  if (fm) return lc;
  fm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return lc = t, lc;
}
var fc, dm;
function aj() {
  if (dm) return fc;
  dm = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return fc = e, fc;
}
var dc, pm;
function zO() {
  if (pm) return dc;
  pm = 1;
  var e = Mh(), t = nj(), r = aj();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, dc = n, dc;
}
var pc, hm;
function WO() {
  if (hm) return pc;
  hm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return pc = e, pc;
}
var hc, vm;
function UO() {
  if (vm) return hc;
  vm = 1;
  function e(t, r) {
    return t.has(r);
  }
  return hc = e, hc;
}
var vc, ym;
function HO() {
  if (ym) return vc;
  ym = 1;
  var e = zO(), t = WO(), r = UO(), n = 1, a = 2;
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
  return vc = i, vc;
}
var yc, mm;
function ij() {
  if (mm) return yc;
  mm = 1;
  var e = Jt(), t = e.Uint8Array;
  return yc = t, yc;
}
var mc, gm;
function oj() {
  if (gm) return mc;
  gm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return mc = e, mc;
}
var gc, bm;
function $h() {
  if (bm) return gc;
  bm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return gc = e, gc;
}
var bc, xm;
function sj() {
  if (xm) return bc;
  xm = 1;
  var e = Ri(), t = ij(), r = Eh(), n = HO(), a = oj(), i = $h(), o = 1, s = 2, u = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Map]", d = "[object Number]", p = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", g = "[object DataView]", x = e ? e.prototype : void 0, O = x ? x.valueOf : void 0;
  function m(w, A, _, P, k, T, I) {
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
        var j = a;
      case y:
        var M = P & o;
        if (j || (j = i), w.size != A.size && !M)
          return !1;
        var $ = I.get(w);
        if ($)
          return $ == A;
        P |= s, I.set(w, A);
        var N = n(j(w), j(A), P, k, T, I);
        return I.delete(w), N;
      case v:
        if (O)
          return O.call(w) == O.call(A);
    }
    return !1;
  }
  return bc = m, bc;
}
var xc, wm;
function KO() {
  if (wm) return xc;
  wm = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return xc = e, xc;
}
var wc, Om;
function pt() {
  if (Om) return wc;
  Om = 1;
  var e = Array.isArray;
  return wc = e, wc;
}
var Oc, Sm;
function uj() {
  if (Sm) return Oc;
  Sm = 1;
  var e = KO(), t = pt();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return Oc = r, Oc;
}
var Sc, Am;
function cj() {
  if (Am) return Sc;
  Am = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var s = t[n];
      r(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  return Sc = e, Sc;
}
var Ac, _m;
function lj() {
  if (_m) return Ac;
  _m = 1;
  function e() {
    return [];
  }
  return Ac = e, Ac;
}
var _c, Pm;
function fj() {
  if (Pm) return _c;
  Pm = 1;
  var e = cj(), t = lj(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return _c = i, _c;
}
var Pc, Tm;
function dj() {
  if (Tm) return Pc;
  Tm = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Pc = e, Pc;
}
var Tc, Em;
function dr() {
  if (Em) return Tc;
  Em = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Tc = e, Tc;
}
var Ec, Cm;
function pj() {
  if (Cm) return Ec;
  Cm = 1;
  var e = fr(), t = dr(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Ec = n, Ec;
}
var Cc, jm;
function Ih() {
  if (jm) return Cc;
  jm = 1;
  var e = pj(), t = dr(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return Cc = i, Cc;
}
var $a = { exports: {} }, jc, Mm;
function hj() {
  if (Mm) return jc;
  Mm = 1;
  function e() {
    return !1;
  }
  return jc = e, jc;
}
$a.exports;
var $m;
function VO() {
  return $m || ($m = 1, (function(e, t) {
    var r = Jt(), n = hj(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
    e.exports = c;
  })($a, $a.exports)), $a.exports;
}
var Mc, Im;
function kh() {
  if (Im) return Mc;
  Im = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Mc = r, Mc;
}
var $c, km;
function Nh() {
  if (km) return $c;
  km = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return $c = t, $c;
}
var Ic, Nm;
function vj() {
  if (Nm) return Ic;
  Nm = 1;
  var e = fr(), t = Nh(), r = dr(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object Map]", l = "[object Number]", f = "[object Object]", d = "[object RegExp]", p = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", g = "[object Float32Array]", x = "[object Float64Array]", O = "[object Int8Array]", m = "[object Int16Array]", w = "[object Int32Array]", A = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", P = "[object Uint16Array]", k = "[object Uint32Array]", T = {};
  T[g] = T[x] = T[O] = T[m] = T[w] = T[A] = T[_] = T[P] = T[k] = !0, T[n] = T[a] = T[v] = T[i] = T[b] = T[o] = T[s] = T[u] = T[c] = T[l] = T[f] = T[d] = T[p] = T[y] = T[h] = !1;
  function I(j) {
    return r(j) && t(j.length) && !!T[e(j)];
  }
  return Ic = I, Ic;
}
var kc, Dm;
function GO() {
  if (Dm) return kc;
  Dm = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return kc = e, kc;
}
var Ia = { exports: {} };
Ia.exports;
var Rm;
function yj() {
  return Rm || (Rm = 1, (function(e, t) {
    var r = qO(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Ia, Ia.exports)), Ia.exports;
}
var Nc, Lm;
function YO() {
  if (Lm) return Nc;
  Lm = 1;
  var e = vj(), t = GO(), r = yj(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return Nc = a, Nc;
}
var Dc, qm;
function mj() {
  if (qm) return Dc;
  qm = 1;
  var e = dj(), t = Ih(), r = pt(), n = VO(), a = kh(), i = YO(), o = Object.prototype, s = o.hasOwnProperty;
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
  return Dc = u, Dc;
}
var Rc, Bm;
function gj() {
  if (Bm) return Rc;
  Bm = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Rc = t, Rc;
}
var Lc, Fm;
function XO() {
  if (Fm) return Lc;
  Fm = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Lc = e, Lc;
}
var qc, zm;
function bj() {
  if (zm) return qc;
  zm = 1;
  var e = XO(), t = e(Object.keys, Object);
  return qc = t, qc;
}
var Bc, Wm;
function xj() {
  if (Wm) return Bc;
  Wm = 1;
  var e = gj(), t = bj(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Bc = a, Bc;
}
var Fc, Um;
function Li() {
  if (Um) return Fc;
  Um = 1;
  var e = Ch(), t = Nh();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Fc = r, Fc;
}
var zc, Hm;
function Ms() {
  if (Hm) return zc;
  Hm = 1;
  var e = mj(), t = xj(), r = Li();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return zc = n, zc;
}
var Wc, Km;
function wj() {
  if (Km) return Wc;
  Km = 1;
  var e = uj(), t = fj(), r = Ms();
  function n(a) {
    return e(a, r, t);
  }
  return Wc = n, Wc;
}
var Uc, Vm;
function Oj() {
  if (Vm) return Uc;
  Vm = 1;
  var e = wj(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
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
  return Uc = a, Uc;
}
var Hc, Gm;
function Sj() {
  if (Gm) return Hc;
  Gm = 1;
  var e = on(), t = Jt(), r = e(t, "DataView");
  return Hc = r, Hc;
}
var Kc, Ym;
function Aj() {
  if (Ym) return Kc;
  Ym = 1;
  var e = on(), t = Jt(), r = e(t, "Promise");
  return Kc = r, Kc;
}
var Vc, Xm;
function ZO() {
  if (Xm) return Vc;
  Xm = 1;
  var e = on(), t = Jt(), r = e(t, "Set");
  return Vc = r, Vc;
}
var Gc, Zm;
function _j() {
  if (Zm) return Gc;
  Zm = 1;
  var e = on(), t = Jt(), r = e(t, "WeakMap");
  return Gc = r, Gc;
}
var Yc, Jm;
function Pj() {
  if (Jm) return Yc;
  Jm = 1;
  var e = Sj(), t = jh(), r = Aj(), n = ZO(), a = _j(), i = fr(), o = BO(), s = "[object Map]", u = "[object Object]", c = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", d = "[object DataView]", p = o(e), y = o(t), h = o(r), v = o(n), b = o(a), g = i;
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
  }), Yc = g, Yc;
}
var Xc, Qm;
function Tj() {
  if (Qm) return Xc;
  Qm = 1;
  var e = FO(), t = HO(), r = sj(), n = Oj(), a = Pj(), i = pt(), o = VO(), s = YO(), u = 1, c = "[object Arguments]", l = "[object Array]", f = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
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
      var I = P && p.call(h, "__wrapped__"), j = k && p.call(v, "__wrapped__");
      if (I || j) {
        var M = I ? h.value() : h, $ = j ? v.value() : v;
        return O || (O = new e()), x(M, $, b, g, O);
      }
    }
    return T ? (O || (O = new e()), n(h, v, b, g, x, O)) : !1;
  }
  return Xc = y, Xc;
}
var Zc, eg;
function Dh() {
  if (eg) return Zc;
  eg = 1;
  var e = Tj(), t = dr();
  function r(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s);
  }
  return Zc = r, Zc;
}
var Jc, tg;
function Ej() {
  if (tg) return Jc;
  tg = 1;
  var e = Dh();
  function t(r, n) {
    return e(r, n);
  }
  return Jc = t, Jc;
}
var Cj = Ej();
const Qr = /* @__PURE__ */ _e(Cj), jj = [], JO = (e) => {
  const { open: t, onOpenChange: r, ...n } = e, a = jj.reduce((i, o) => {
    const { [o]: s, ...u } = i;
    return u;
  }, n);
  return S(PT, {
    ...a,
    open: t,
    onOpenChange: r,
    align: e.align || "end"
  });
}, EW = ({ items: e, children: t }) => {
  const [r, n] = he(!1);
  return K(TT, {
    open: r,
    onOpenChange: n,
    children: [S(ET, {
      asChild: !0,
      children: t || S(Ar, {
        label: "Other actions",
        icon: cO,
        variant: "outline",
        size: "lg",
        pressed: r,
        noTitle: !0
      })
    }), S(CT, {
      className: "bg-f1-background-overlay"
    }), S(jT, {
      className: "bg-f1-background",
      children: S("div", {
        className: "flex flex-col px-2 pb-3 pt-2",
        children: e.map((a, i) => a.type === "separator" ? S("div", {
          className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
        }, `separator-${i}`) : a.type === "label" ? S("span", {
          className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
          children: a.text
        }, `label-${i}`) : a.href ? S(fh, {
          href: a.href,
          className: Q("flex w-full items-start gap-1.5", a.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
          children: S(MT, {
            item: a
          })
        }, `link-${i}`) : K("button", {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), a.onClick?.(), n(!1);
          },
          className: "flex w-full items-center gap-2 p-3",
          children: [a.icon && S("span", {
            className: Q("h-5 w-5 text-f1-icon", a.critical && "text-f1-icon-critical"),
            children: S(ut, {
              icon: a.icon,
              size: "md"
            })
          }), S("span", {
            className: Q("font-medium", a.critical ? "text-f1-foreground-critical" : "text-f1-foreground"),
            children: a.label
          })]
        }, a.label))
      })
    })]
  });
}, Mj = Ss({
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
}), $j = ({ type: e, size: t, "aria-label": r, "aria-labelledby": n }) => {
  const a = {
    critical: fO,
    warning: dh,
    info: lO,
    positive: As
  };
  return S("div", {
    className: Mj({
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
function Ij(e, t) {
  const r = bn(e), n = bn(t), a = r.getTime() - n.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Rh(e) {
  return $T(e, Date.now());
}
function kj(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function Nj(e, t, r) {
  const n = IT(), a = r?.locale ?? n.locale ?? kT, i = Ij(e, t);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r?.addSuffix,
    comparison: i
  });
  let s, u;
  i > 0 ? (s = bn(t), u = bn(e)) : (s = bn(e), u = bn(t));
  const c = kj(r?.roundingMethod ?? "round"), l = u.getTime() - s.getTime(), f = l / cy, d = iy(u) - iy(s), p = (l - d) / cy, y = r?.unit;
  let h;
  if (y ? h = y : f < 1 ? h = "second" : f < 60 ? h = "minute" : f < oy ? h = "hour" : p < sy ? h = "day" : p < uy ? h = "month" : h = "year", h === "second") {
    const v = c(l / 1e3);
    return a.formatDistance("xSeconds", v, o);
  } else if (h === "minute") {
    const v = c(f);
    return a.formatDistance("xMinutes", v, o);
  } else if (h === "hour") {
    const v = c(f / 60);
    return a.formatDistance("xHours", v, o);
  } else if (h === "day") {
    const v = c(p / oy);
    return a.formatDistance("xDays", v, o);
  } else if (h === "month") {
    const v = c(p / sy);
    return v === 12 && y !== "month" ? a.formatDistance("xYears", 1, o) : a.formatDistance("xMonths", v, o);
  } else {
    const v = c(p / uy);
    return a.formatDistance("xYears", v, o);
  }
}
function Dj(e, t) {
  return Nj(e, Rh(e), t);
}
function QO(e) {
  return dO(e, Rh(e));
}
function eS(e) {
  return dO(e, go(Rh(e), 1));
}
function ba(e, t) {
  return NT(e, -t);
}
function rg(e, t) {
  return DT(e, -t);
}
function CW(e) {
  return Va(e, "p");
}
function jW(e) {
  return Va(e, "HH:mm");
}
function Rj(e) {
  return Va(e, "LLL");
}
function Lj(e) {
  return e.getDate();
}
function ng(e, t = !0) {
  return Dj(e, { addSuffix: t });
}
function MW(e, { yesterdayRelative: t = !0 } = {}) {
  return QO(e) ? ng(e) : eS(e) ? t ? ng(e) : Va(e, "p") : Va(e, "PPPp");
}
const $W = (e, t) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return e.forEach((n) => {
    const a = n[t], i = Math.abs(RT(a, /* @__PURE__ */ new Date()));
    QO(a) ? r.today.push(n) : eS(a) ? r.yesterday.push(n) : i <= 7 ? r.lastWeek.push(n) : i <= 30 ? r.lastMonth.push(n) : r[a.getFullYear()] = [...r[a.getFullYear()] || [], n];
  }), r;
}, IW = ({ date: e, "aria-label": t, "aria-labelledby": r }) => {
  const n = Lj(e), a = Rj(e);
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
function tS(e, t) {
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
const qj = Ss({
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
}), Bj = ({ count: e, size: t = "md", type: r, list: n, avatarType: a = "person" }) => {
  const i = S("div", {
    className: Q("cursor-default font-medium transition hover:bg-f1-background-secondary-hover", qj({
      size: t,
      type: r
    })),
    children: t === "xs" ? S(ut, {
      icon: cO,
      size: "xs"
    }) : `+${e}`
  });
  return n?.length ? K(pO, {
    children: [S(hO, {
      asChild: !0,
      children: i
    }), S(vO, {
      side: "top",
      children: K(ph, {
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
            children: tS(a, o)
          })]
        }, s)), S(yO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
}, Fj = ["xs", "sm", "md"], zj = {
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
}, rS = ({ avatars: e, size: t = "md", type: r, noTooltip: n = !1, remainingCount: a, max: i }) => {
  if (t && !Fj.includes(t)) {
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
  }[t] ?? 0, u = Ke(() => ({
    xs: 20,
    sm: 24,
    md: 32
  })[t], [t]);
  return S(mO, {
    max: i,
    items: e.map((c) => ({
      type: r,
      ...c
    })),
    gap: s,
    itemsWidth: u,
    className: "flex items-center",
    renderListItem: (c, l) => {
      const f = tS(r, c), d = S("div", {
        className: "flex h-fit w-fit shrink-0 items-center justify-center",
        style: l !== e.length - 1 ? {
          clipPath: zj[r === "person" ? "rounded" : "base"][t]
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
        children: n ? d : S(hh, {
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
      children: S(Bj, {
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
rS.displayName = "AvatarList";
const Wj = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Uj = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += Wj[r[e] & 63];
  return t;
};
var Qc, ag;
function na() {
  if (ag) return Qc;
  ag = 1;
  var e = fr(), t = dr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return Qc = n, Qc;
}
var el, ig;
function Lh() {
  if (ig) return el;
  ig = 1;
  var e = pt(), t = na(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return el = a, el;
}
var tl, og;
function nS() {
  if (og) return tl;
  og = 1;
  var e = Mh(), t = "Expected a function";
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
  return r.Cache = e, tl = r, tl;
}
var rl, sg;
function Hj() {
  if (sg) return rl;
  sg = 1;
  var e = nS(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return rl = r, rl;
}
var nl, ug;
function Kj() {
  if (ug) return nl;
  ug = 1;
  var e = Hj(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, c) {
      i.push(u ? c.replace(r, "$1") : s || o);
    }), i;
  });
  return nl = n, nl;
}
var al, cg;
function qh() {
  if (cg) return al;
  cg = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return al = e, al;
}
var il, lg;
function Vj() {
  if (lg) return il;
  lg = 1;
  var e = Ri(), t = qh(), r = pt(), n = na(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
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
  return il = o, il;
}
var ol, fg;
function aS() {
  if (fg) return ol;
  fg = 1;
  var e = Vj();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return ol = t, ol;
}
var sl, dg;
function iS() {
  if (dg) return sl;
  dg = 1;
  var e = pt(), t = Lh(), r = Kj(), n = aS();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return sl = a, sl;
}
var ul, pg;
function $s() {
  if (pg) return ul;
  pg = 1;
  var e = na();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return ul = t, ul;
}
var cl, hg;
function Bh() {
  if (hg) return cl;
  hg = 1;
  var e = iS(), t = $s();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return cl = r, cl;
}
var ll, vg;
function oS() {
  if (vg) return ll;
  vg = 1;
  var e = Bh();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return ll = t, ll;
}
var Gj = oS();
const bt = /* @__PURE__ */ _e(Gj);
var fl, yg;
function Yj() {
  if (yg) return fl;
  yg = 1;
  function e(t) {
    return t == null;
  }
  return fl = e, fl;
}
var Xj = Yj();
const le = /* @__PURE__ */ _e(Xj);
var dl, mg;
function Zj() {
  if (mg) return dl;
  mg = 1;
  var e = fr(), t = pt(), r = dr(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return dl = a, dl;
}
var Jj = Zj();
const qi = /* @__PURE__ */ _e(Jj);
var Qj = Ch();
const ue = /* @__PURE__ */ _e(Qj);
var e2 = Tr();
const aa = /* @__PURE__ */ _e(e2);
var eo = { exports: {} }, ge = {};
var gg;
function t2() {
  if (gg) return ge;
  gg = 1;
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
var bg;
function r2() {
  return bg || (bg = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = /* @__PURE__ */ Symbol.for("react.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), i = /* @__PURE__ */ Symbol.for("react.provider"), o = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.server_context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), y = !1, h = !1, v = !1, b = !1, g = !1, x;
    x = /* @__PURE__ */ Symbol.for("react.module.reference");
    function O(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === a || g || B === n || B === c || B === l || b || B === p || y || h || v || typeof B == "object" && B !== null && (B.$$typeof === d || B.$$typeof === f || B.$$typeof === i || B.$$typeof === o || B.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === x || B.getModuleId !== void 0));
    }
    function m(B) {
      if (typeof B == "object" && B !== null) {
        var ae = B.$$typeof;
        switch (ae) {
          case e:
            var ce = B.type;
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
    var w = o, A = i, _ = e, P = u, k = r, T = d, I = f, j = t, M = a, $ = n, N = c, R = l, F = !1, z = !1;
    function D(B) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(B) {
      return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function L(B) {
      return m(B) === o;
    }
    function H(B) {
      return m(B) === i;
    }
    function X(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function te(B) {
      return m(B) === u;
    }
    function ne(B) {
      return m(B) === r;
    }
    function ee(B) {
      return m(B) === d;
    }
    function J(B) {
      return m(B) === f;
    }
    function U(B) {
      return m(B) === t;
    }
    function V(B) {
      return m(B) === a;
    }
    function Z(B) {
      return m(B) === n;
    }
    function E(B) {
      return m(B) === c;
    }
    function Y(B) {
      return m(B) === l;
    }
    be.ContextConsumer = w, be.ContextProvider = A, be.Element = _, be.ForwardRef = P, be.Fragment = k, be.Lazy = T, be.Memo = I, be.Portal = j, be.Profiler = M, be.StrictMode = $, be.Suspense = N, be.SuspenseList = R, be.isAsyncMode = D, be.isConcurrentMode = q, be.isContextConsumer = L, be.isContextProvider = H, be.isElement = X, be.isForwardRef = te, be.isFragment = ne, be.isLazy = ee, be.isMemo = J, be.isPortal = U, be.isProfiler = V, be.isStrictMode = Z, be.isSuspense = E, be.isSuspenseList = Y, be.isValidElementType = O, be.typeOf = m;
  })()), be;
}
var xg;
function n2() {
  return xg || (xg = 1, process.env.NODE_ENV === "production" ? eo.exports = t2() : eo.exports = r2()), eo.exports;
}
var a2 = n2(), pl, wg;
function sS() {
  if (wg) return pl;
  wg = 1;
  var e = fr(), t = dr(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return pl = n, pl;
}
var hl, Og;
function i2() {
  if (Og) return hl;
  Og = 1;
  var e = sS();
  function t(r) {
    return e(r) && r != +r;
  }
  return hl = t, hl;
}
var o2 = i2();
const ia = /* @__PURE__ */ _e(o2);
var s2 = sS();
const u2 = /* @__PURE__ */ _e(s2);
var it = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Fr = function(t) {
  return qi(t) && t.indexOf("%") === t.length - 1;
}, G = function(t) {
  return u2(t) && !ia(t);
}, Ye = function(t) {
  return G(t) || qi(t);
}, c2 = 0, sn = function(t) {
  var r = ++c2;
  return "".concat(t || "").concat(r);
}, ot = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!G(t) && !qi(t))
    return n;
  var i;
  if (Fr(t)) {
    var o = t.indexOf("%");
    i = r * parseFloat(t.slice(0, o)) / 100;
  } else
    i = +t;
  return ia(i) && (i = n), a && i > r && (i = r), i;
}, xr = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, l2 = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, a = 0; a < r; a++)
    if (!n[t[a]])
      n[t[a]] = !0;
    else
      return !0;
  return !1;
}, Ve = function(t, r) {
  return G(t) && G(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function wo(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : bt(n, t)) === r;
  });
}
var kW = function(t) {
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
function Nd(e) {
  "@babel/helpers - typeof";
  return Nd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nd(e);
}
var f2 = ["viewBox", "children"], d2 = [
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
], Sg = ["points", "pathLength"], vl = {
  svg: f2,
  polygon: Sg,
  polyline: Sg
}, Fh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Oo = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Dt(t) && (n = t.props), !aa(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    Fh.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, p2 = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, en = function(t, r, n) {
  if (!aa(t) || Nd(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    Fh.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = p2(o, r, n));
  }), a;
}, h2 = ["children"], v2 = ["children"];
function Ag(e, t) {
  if (e == null) return {};
  var r = y2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Dd(e) {
  "@babel/helpers - typeof";
  return Dd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dd(e);
}
var _g = {
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
}, Pg = null, yl = null, zh = function e(t) {
  if (t === Pg && Array.isArray(yl))
    return yl;
  var r = [];
  return Kr.forEach(t, function(n) {
    le(n) || (a2.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), yl = r, Pg = t, r;
};
function xt(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return or(a);
  }) : n = [or(t)], zh(e).forEach(function(a) {
    var i = bt(a, "type.displayName") || bt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function yt(e, t) {
  var r = xt(e, t);
  return r && r[0];
}
var Tg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!G(n) || n <= 0 || !G(a) || a <= 0);
}, m2 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], g2 = function(t) {
  return t && t.type && qi(t.type) && m2.indexOf(t.type) >= 0;
}, uS = function(t) {
  return t && Dd(t) === "object" && "clipDot" in t;
}, b2 = function(t, r, n, a) {
  var i, o = (i = vl?.[a]) !== null && i !== void 0 ? i : [];
  return !ue(t) && (a && o.includes(r) || d2.includes(r)) || n && Fh.includes(r);
}, ie = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Dt(t) && (a = t.props), !aa(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    b2((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, Rd = function e(t, r) {
  if (t === r)
    return !0;
  var n = Kr.count(t);
  if (n !== Kr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Eg(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!Eg(i, o))
      return !1;
  }
  return !0;
}, Eg = function(t, r) {
  if (le(t) && le(r))
    return !0;
  if (!le(t) && !le(r)) {
    var n = t.props || {}, a = n.children, i = Ag(n, h2), o = r.props || {}, s = o.children, u = Ag(o, v2);
    return a && s ? _n(i, u) && Rd(a, s) : !a && !s ? _n(i, u) : !1;
  }
  return !1;
}, Cg = function(t, r) {
  var n = [], a = {};
  return zh(t).forEach(function(i, o) {
    if (g2(i))
      n.push(i);
    else if (i) {
      var s = or(i.type), u = r[s] || {}, c = u.handler, l = u.once;
      if (c && (!l || !a[s])) {
        var f = c(i, s, o);
        n.push(f), a[s] = !0;
      }
    }
  }), n;
}, x2 = function(t) {
  var r = t && t.type;
  return r && _g[r] ? _g[r] : null;
}, w2 = function(t, r) {
  return zh(r).indexOf(t);
}, O2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Ld() {
  return Ld = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ld.apply(this, arguments);
}
function S2(e, t) {
  if (e == null) return {};
  var r = A2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function A2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function qd(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, u = e.desc, c = S2(e, O2), l = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = de("recharts-surface", i);
  return /* @__PURE__ */ C.createElement("svg", Ld({}, ie(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ C.createElement("title", null, s), /* @__PURE__ */ C.createElement("desc", null, u), t);
}
var _2 = ["children", "className"];
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
function P2(e, t) {
  if (e == null) return {};
  var r = T2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function T2(e, t) {
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
  var r = e.children, n = e.className, a = P2(e, _2), i = de("recharts-layer", n);
  return /* @__PURE__ */ C.createElement("g", Bd({
    className: i
  }, ie(a, !0), {
    ref: t
  }), r);
}), E2 = process.env.NODE_ENV !== "production", Lt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (E2 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
}, ml, jg;
function C2() {
  if (jg) return ml;
  jg = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return ml = e, ml;
}
var gl, Mg;
function j2() {
  if (Mg) return gl;
  Mg = 1;
  var e = C2();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return gl = t, gl;
}
var bl, $g;
function cS() {
  if ($g) return bl;
  $g = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(c) {
    return s.test(c);
  }
  return bl = u, bl;
}
var xl, Ig;
function M2() {
  if (Ig) return xl;
  Ig = 1;
  function e(t) {
    return t.split("");
  }
  return xl = e, xl;
}
var wl, kg;
function $2() {
  if (kg) return wl;
  kg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + u + ")", l = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", y = c + "?", h = "[" + i + "]?", v = "(?:" + p + "(?:" + [l, f, d].join("|") + ")" + h + y + ")*", b = h + y + v, g = "(?:" + [l + s + "?", s, f, d, o].join("|") + ")", x = RegExp(u + "(?=" + u + ")|" + g + b, "g");
  function O(m) {
    return m.match(x) || [];
  }
  return wl = O, wl;
}
var Ol, Ng;
function I2() {
  if (Ng) return Ol;
  Ng = 1;
  var e = M2(), t = cS(), r = $2();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Ol = n, Ol;
}
var Sl, Dg;
function k2() {
  if (Dg) return Sl;
  Dg = 1;
  var e = j2(), t = cS(), r = I2(), n = aS();
  function a(i) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, u = s ? s[0] : o.charAt(0), c = s ? e(s, 1).join("") : o.slice(1);
      return u[i]() + c;
    };
  }
  return Sl = a, Sl;
}
var Al, Rg;
function N2() {
  if (Rg) return Al;
  Rg = 1;
  var e = k2(), t = e("toUpperCase");
  return Al = t, Al;
}
var D2 = N2();
const Is = /* @__PURE__ */ _e(D2);
function Ce(e) {
  return function() {
    return e;
  };
}
const lS = Math.cos, So = Math.sin, zt = Math.sqrt, Ao = Math.PI, ks = 2 * Ao, Fd = Math.PI, zd = 2 * Fd, Lr = 1e-6, R2 = zd - Lr;
function fS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function L2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return fS;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class q2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? fS : L2(t);
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
      let p = n - o, y = a - s, h = u * u + c * c, v = p * p + y * y, b = Math.sqrt(h), g = Math.sqrt(d), x = i * Math.tan((Fd - Math.acos((h + d - v) / (2 * b * g))) / 2), O = x / g, m = x / b;
      Math.abs(O - 1) > Lr && this._append`L${t + O * l},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > l * y)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), u = n * Math.sin(a), c = t + s, l = r + u, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Lr || Math.abs(this._y1 - l) > Lr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % zd + zd), d > R2 ? this._append`A${n},${n},0,1,${f},${t - s},${r - u}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > Lr && this._append`A${n},${n},0,${+(d >= Fd)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Wh(e) {
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
  }, () => new q2(t);
}
function Uh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function dS(e) {
  this._context = e;
}
dS.prototype = {
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
  return new dS(e);
}
function pS(e) {
  return e[0];
}
function hS(e) {
  return e[1];
}
function vS(e, t) {
  var r = Ce(!0), n = null, a = Ns, i = null, o = Wh(s);
  e = typeof e == "function" ? e : e === void 0 ? pS : Ce(e), t = typeof t == "function" ? t : t === void 0 ? hS : Ce(t);
  function s(u) {
    var c, l = (u = Uh(u)).length, f, d = !1, p;
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
function to(e, t, r) {
  var n = null, a = Ce(!0), i = null, o = Ns, s = null, u = Wh(c);
  e = typeof e == "function" ? e : e === void 0 ? pS : Ce(+e), t = typeof t == "function" ? t : Ce(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? hS : Ce(+r);
  function c(f) {
    var d, p, y, h = (f = Uh(f)).length, v, b = !1, g, x = new Array(h), O = new Array(h);
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
    return vS().defined(a).curve(o).context(i);
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
class yS {
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
function B2(e) {
  return new yS(e, !0);
}
function F2(e) {
  return new yS(e, !1);
}
const Hh = {
  draw(e, t) {
    const r = zt(t / Ao);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, ks);
  }
}, z2 = {
  draw(e, t) {
    const r = zt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, mS = zt(1 / 3), W2 = mS * 2, U2 = {
  draw(e, t) {
    const r = zt(t / W2), n = r * mS;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, H2 = {
  draw(e, t) {
    const r = zt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, K2 = 0.8908130915292852, gS = So(Ao / 10) / So(7 * Ao / 10), V2 = So(ks / 10) * gS, G2 = -lS(ks / 10) * gS, Y2 = {
  draw(e, t) {
    const r = zt(t * K2), n = V2 * r, a = G2 * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = ks * i / 5, s = lS(o), u = So(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * a, u * n + s * a);
    }
    e.closePath();
  }
}, _l = zt(3), X2 = {
  draw(e, t) {
    const r = -zt(t / (_l * 3));
    e.moveTo(0, r * 2), e.lineTo(-_l * r, -r), e.lineTo(_l * r, -r), e.closePath();
  }
}, wt = -0.5, Ot = zt(3) / 2, Wd = 1 / zt(12), Z2 = (Wd / 2 + 1) * 3, J2 = {
  draw(e, t) {
    const r = zt(t / Z2), n = r / 2, a = r * Wd, i = n, o = r * Wd + r, s = -i, u = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, u), e.lineTo(wt * n - Ot * a, Ot * n + wt * a), e.lineTo(wt * i - Ot * o, Ot * i + wt * o), e.lineTo(wt * s - Ot * u, Ot * s + wt * u), e.lineTo(wt * n + Ot * a, wt * a - Ot * n), e.lineTo(wt * i + Ot * o, wt * o - Ot * i), e.lineTo(wt * s + Ot * u, wt * u - Ot * s), e.closePath();
  }
};
function Q2(e, t) {
  let r = null, n = Wh(a);
  e = typeof e == "function" ? e : Ce(e || Hh), t = typeof t == "function" ? t : Ce(t === void 0 ? 64 : +t);
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
function _o() {
}
function Po(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function bS(e) {
  this._context = e;
}
bS.prototype = {
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
        Po(this, this._x1, this._y1);
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
        Po(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function eM(e) {
  return new bS(e);
}
function xS(e) {
  this._context = e;
}
xS.prototype = {
  areaStart: _o,
  areaEnd: _o,
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
        Po(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function tM(e) {
  return new xS(e);
}
function wS(e) {
  this._context = e;
}
wS.prototype = {
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
        Po(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function rM(e) {
  return new wS(e);
}
function OS(e) {
  this._context = e;
}
OS.prototype = {
  areaStart: _o,
  areaEnd: _o,
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
function nM(e) {
  return new OS(e);
}
function Lg(e) {
  return e < 0 ? -1 : 1;
}
function qg(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), s = (i * a + o * n) / (n + a);
  return (Lg(i) + Lg(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Bg(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Pl(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function To(e) {
  this._context = e;
}
To.prototype = {
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
        Pl(this, this._t0, Bg(this, this._t0));
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
          this._point = 3, Pl(this, Bg(this, r = qg(this, e, t)), r);
          break;
        default:
          Pl(this, this._t0, r = qg(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function SS(e) {
  this._context = new AS(e);
}
(SS.prototype = Object.create(To.prototype)).point = function(e, t) {
  To.prototype.point.call(this, t, e);
};
function AS(e) {
  this._context = e;
}
AS.prototype = {
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
function aM(e) {
  return new To(e);
}
function iM(e) {
  return new SS(e);
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
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Fg(e), a = Fg(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Fg(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function oM(e) {
  return new _S(e);
}
function Ds(e, t) {
  this._context = e, this._t = t;
}
Ds.prototype = {
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
function sM(e) {
  return new Ds(e, 0.5);
}
function uM(e) {
  return new Ds(e, 0);
}
function cM(e) {
  return new Ds(e, 1);
}
function Cn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Ud(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function lM(e, t) {
  return e[t];
}
function fM(e) {
  const t = [];
  return t.key = e, t;
}
function dM() {
  var e = Ce([]), t = Ud, r = Cn, n = lM;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), fM), s, u = o.length, c = -1, l;
    for (const f of i)
      for (s = 0, ++c; s < u; ++s)
        (o[s][c] = [0, +n(f, o[s].key, c, i)]).data = f;
    for (s = 0, l = Uh(t(o)); s < u; ++s)
      o[l[s]].index = s;
    return r(o, l), o;
  }
  return a.keys = function(i) {
    return arguments.length ? (e = typeof i == "function" ? i : Ce(Array.from(i)), a) : e;
  }, a.value = function(i) {
    return arguments.length ? (n = typeof i == "function" ? i : Ce(+i), a) : n;
  }, a.order = function(i) {
    return arguments.length ? (t = i == null ? Ud : typeof i == "function" ? i : Ce(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? Cn, a) : r;
  }, a;
}
function pM(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    Cn(e, t);
  }
}
function hM(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    Cn(e, t);
  }
}
function vM(e, t) {
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
function Za(e) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Za(e);
}
var yM = ["type", "size", "sizeType"];
function Hd() {
  return Hd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hd.apply(this, arguments);
}
function zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zg(Object(r), !0).forEach(function(n) {
      mM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mM(e, t, r) {
  return t = gM(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gM(e) {
  var t = bM(e, "string");
  return Za(t) == "symbol" ? t : t + "";
}
function bM(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xM(e, t) {
  if (e == null) return {};
  var r = wM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var PS = {
  symbolCircle: Hh,
  symbolCross: z2,
  symbolDiamond: U2,
  symbolSquare: H2,
  symbolStar: Y2,
  symbolTriangle: X2,
  symbolWye: J2
}, OM = Math.PI / 180, SM = function(t) {
  var r = "symbol".concat(Is(t));
  return PS[r] || Hh;
}, AM = function(t, r, n) {
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
      var a = 18 * OM;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, _M = function(t, r) {
  PS["symbol".concat(Is(t))] = r;
}, Kh = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, u = xM(t, yM), c = Wg(Wg({}, u), {}, {
    type: n,
    size: i,
    sizeType: s
  }), l = function() {
    var v = SM(n), b = Q2().type(v).size(AM(i, s, n));
    return b();
  }, f = c.className, d = c.cx, p = c.cy, y = ie(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ C.createElement("path", Hd({}, y, {
    className: de("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: l()
  })) : null;
};
Kh.registerSymbol = _M;
function jn(e) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jn(e);
}
function Kd() {
  return Kd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kd.apply(this, arguments);
}
function Ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function PM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ug(Object(r), !0).forEach(function(n) {
      Ja(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function EM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ES(n.key), n);
  }
}
function CM(e, t, r) {
  return t && EM(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jM(e, t, r) {
  return t = Eo(t), MM(e, TS() ? Reflect.construct(t, r || [], Eo(e).constructor) : t.apply(e, r));
}
function MM(e, t) {
  if (t && (jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $M(e);
}
function $M(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function TS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (TS = function() {
    return !!e;
  })();
}
function Eo(e) {
  return Eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Eo(e);
}
function IM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vd(e, t);
}
function Vd(e, t) {
  return Vd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Vd(e, t);
}
function Ja(e, t, r) {
  return t = ES(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ES(e) {
  var t = kM(e, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function kM(e, t) {
  if (jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var St = 32, Vh = /* @__PURE__ */ (function(e) {
  function t() {
    return TM(this, t), jM(this, t, arguments);
  }
  return IM(t, e), CM(t, [{
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
          var c = PM({}, n);
          return delete c.legendIcon, /* @__PURE__ */ C.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ C.createElement(Kh, {
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
        var h = p.formatter || u, v = de(Ja(Ja({
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
        return /* @__PURE__ */ C.createElement("li", Kd({
          className: v,
          style: f,
          key: "legend-item-".concat(y)
        }, en(n.props, p, y)), /* @__PURE__ */ C.createElement(qd, {
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
Ja(Vh, "displayName", "Legend");
Ja(Vh, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Tl, Hg;
function NM() {
  if (Hg) return Tl;
  Hg = 1;
  var e = FO(), t = Dh(), r = 1, n = 2;
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
  return Tl = a, Tl;
}
var El, Kg;
function CS() {
  if (Kg) return El;
  Kg = 1;
  var e = Tr();
  function t(r) {
    return r === r && !e(r);
  }
  return El = t, El;
}
var Cl, Vg;
function DM() {
  if (Vg) return Cl;
  Vg = 1;
  var e = CS(), t = Ms();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return Cl = r, Cl;
}
var jl, Gg;
function jS() {
  if (Gg) return jl;
  Gg = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return jl = e, jl;
}
var Ml, Yg;
function RM() {
  if (Yg) return Ml;
  Yg = 1;
  var e = NM(), t = DM(), r = jS();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Ml = n, Ml;
}
var $l, Xg;
function LM() {
  if (Xg) return $l;
  Xg = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return $l = e, $l;
}
var Il, Zg;
function qM() {
  if (Zg) return Il;
  Zg = 1;
  var e = iS(), t = Ih(), r = pt(), n = kh(), a = Nh(), i = $s();
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
  return Il = o, Il;
}
var kl, Jg;
function BM() {
  if (Jg) return kl;
  Jg = 1;
  var e = LM(), t = qM();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return kl = r, kl;
}
var Nl, Qg;
function FM() {
  if (Qg) return Nl;
  Qg = 1;
  var e = Dh(), t = oS(), r = BM(), n = Lh(), a = CS(), i = jS(), o = $s(), s = 1, u = 2;
  function c(l, f) {
    return n(l) && a(f) ? i(o(l), f) : function(d) {
      var p = t(d, l);
      return p === void 0 && p === f ? r(d, l) : e(f, p, s | u);
    };
  }
  return Nl = c, Nl;
}
var Dl, eb;
function oa() {
  if (eb) return Dl;
  eb = 1;
  function e(t) {
    return t;
  }
  return Dl = e, Dl;
}
var Rl, tb;
function zM() {
  if (tb) return Rl;
  tb = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Rl = e, Rl;
}
var Ll, rb;
function WM() {
  if (rb) return Ll;
  rb = 1;
  var e = Bh();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Ll = t, Ll;
}
var ql, nb;
function UM() {
  if (nb) return ql;
  nb = 1;
  var e = zM(), t = WM(), r = Lh(), n = $s();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return ql = a, ql;
}
var Bl, ab;
function Qt() {
  if (ab) return Bl;
  ab = 1;
  var e = RM(), t = FM(), r = oa(), n = pt(), a = UM();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return Bl = i, Bl;
}
var Fl, ib;
function MS() {
  if (ib) return Fl;
  ib = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return Fl = e, Fl;
}
var zl, ob;
function HM() {
  if (ob) return zl;
  ob = 1;
  function e(t) {
    return t !== t;
  }
  return zl = e, zl;
}
var Wl, sb;
function KM() {
  if (sb) return Wl;
  sb = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Wl = e, Wl;
}
var Ul, ub;
function VM() {
  if (ub) return Ul;
  ub = 1;
  var e = MS(), t = HM(), r = KM();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Ul = n, Ul;
}
var Hl, cb;
function GM() {
  if (cb) return Hl;
  cb = 1;
  var e = VM();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return Hl = t, Hl;
}
var Kl, lb;
function YM() {
  if (lb) return Kl;
  lb = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return Kl = e, Kl;
}
var Vl, fb;
function XM() {
  if (fb) return Vl;
  fb = 1;
  function e() {
  }
  return Vl = e, Vl;
}
var Gl, db;
function ZM() {
  if (db) return Gl;
  db = 1;
  var e = ZO(), t = XM(), r = $h(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return Gl = a, Gl;
}
var Yl, pb;
function JM() {
  if (pb) return Yl;
  pb = 1;
  var e = zO(), t = GM(), r = YM(), n = UO(), a = ZM(), i = $h(), o = 200;
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
  return Yl = s, Yl;
}
var Xl, hb;
function QM() {
  if (hb) return Xl;
  hb = 1;
  var e = Qt(), t = JM();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return Xl = r, Xl;
}
var e$ = QM();
const vb = /* @__PURE__ */ _e(e$);
function $S(e, t, r) {
  return t === !0 ? vb(e, r) : ue(t) ? vb(e, t) : e;
}
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
var t$ = ["ref"];
function yb(e, t) {
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
    t % 2 ? yb(Object(r), !0).forEach(function(n) {
      Rs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, kS(n.key), n);
  }
}
function n$(e, t, r) {
  return t && mb(e.prototype, t), r && mb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function a$(e, t, r) {
  return t = Co(t), i$(e, IS() ? Reflect.construct(t, r || [], Co(e).constructor) : t.apply(e, r));
}
function i$(e, t) {
  if (t && (Mn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return o$(e);
}
function o$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function IS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (IS = function() {
    return !!e;
  })();
}
function Co(e) {
  return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Co(e);
}
function s$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gd(e, t);
}
function Gd(e, t) {
  return Gd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Gd(e, t);
}
function Rs(e, t, r) {
  return t = kS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kS(e) {
  var t = u$(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function u$(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function c$(e, t) {
  if (e == null) return {};
  var r = l$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function l$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function f$(e) {
  return e.value;
}
function d$(e, t) {
  if (/* @__PURE__ */ C.isValidElement(e))
    return /* @__PURE__ */ C.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ C.createElement(e, t);
  t.ref;
  var r = c$(t, t$);
  return /* @__PURE__ */ C.createElement(Vh, r);
}
var gb = 1, Gr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    r$(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = a$(this, t, [].concat(a)), Rs(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return s$(t, e), n$(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > gb || Math.abs(a.height - this.lastBoundingBox.height) > gb) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      }, d$(i, tr(tr({}, this.props), {}, {
        payload: $S(l, c, f$)
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
Rs(Gr, "displayName", "Legend");
Rs(Gr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Zl, bb;
function p$() {
  if (bb) return Zl;
  bb = 1;
  var e = Ri(), t = Ih(), r = pt(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return Zl = a, Zl;
}
var Jl, xb;
function NS() {
  if (xb) return Jl;
  xb = 1;
  var e = KO(), t = p$();
  function r(n, a, i, o, s) {
    var u = -1, c = n.length;
    for (i || (i = t), s || (s = []); ++u < c; ) {
      var l = n[u];
      a > 0 && i(l) ? a > 1 ? r(l, a - 1, i, o, s) : e(s, l) : o || (s[s.length] = l);
    }
    return s;
  }
  return Jl = r, Jl;
}
var Ql, wb;
function h$() {
  if (wb) return Ql;
  wb = 1;
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
  return Ql = e, Ql;
}
var ef, Ob;
function v$() {
  if (Ob) return ef;
  Ob = 1;
  var e = h$(), t = e();
  return ef = t, ef;
}
var tf, Sb;
function DS() {
  if (Sb) return tf;
  Sb = 1;
  var e = v$(), t = Ms();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return tf = r, tf;
}
var rf, Ab;
function y$() {
  if (Ab) return rf;
  Ab = 1;
  var e = Li();
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
  return rf = t, rf;
}
var nf, _b;
function Gh() {
  if (_b) return nf;
  _b = 1;
  var e = DS(), t = y$(), r = t(e);
  return nf = r, nf;
}
var af, Pb;
function RS() {
  if (Pb) return af;
  Pb = 1;
  var e = Gh(), t = Li();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, u, c) {
      o[++i] = a(s, u, c);
    }), o;
  }
  return af = r, af;
}
var of, Tb;
function m$() {
  if (Tb) return of;
  Tb = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return of = e, of;
}
var sf, Eb;
function g$() {
  if (Eb) return sf;
  Eb = 1;
  var e = na();
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
  return sf = t, sf;
}
var uf, Cb;
function b$() {
  if (Cb) return uf;
  Cb = 1;
  var e = g$();
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
  return uf = t, uf;
}
var cf, jb;
function x$() {
  if (jb) return cf;
  jb = 1;
  var e = qh(), t = Bh(), r = Qt(), n = RS(), a = m$(), i = GO(), o = b$(), s = oa(), u = pt();
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
  return cf = c, cf;
}
var lf, Mb;
function w$() {
  if (Mb) return lf;
  Mb = 1;
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
  return lf = e, lf;
}
var ff, $b;
function O$() {
  if ($b) return ff;
  $b = 1;
  var e = w$(), t = Math.max;
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
  return ff = r, ff;
}
var df, Ib;
function S$() {
  if (Ib) return df;
  Ib = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return df = e, df;
}
var pf, kb;
function LS() {
  if (kb) return pf;
  kb = 1;
  var e = on(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return pf = t, pf;
}
var hf, Nb;
function A$() {
  if (Nb) return hf;
  Nb = 1;
  var e = S$(), t = LS(), r = oa(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return hf = n, hf;
}
var vf, Db;
function _$() {
  if (Db) return vf;
  Db = 1;
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
  return vf = n, vf;
}
var yf, Rb;
function P$() {
  if (Rb) return yf;
  Rb = 1;
  var e = A$(), t = _$(), r = t(e);
  return yf = r, yf;
}
var mf, Lb;
function T$() {
  if (Lb) return mf;
  Lb = 1;
  var e = oa(), t = O$(), r = P$();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return mf = n, mf;
}
var gf, qb;
function Ls() {
  if (qb) return gf;
  qb = 1;
  var e = Eh(), t = Li(), r = kh(), n = Tr();
  function a(i, o, s) {
    if (!n(s))
      return !1;
    var u = typeof o;
    return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e(s[o], i) : !1;
  }
  return gf = a, gf;
}
var bf, Bb;
function E$() {
  if (Bb) return bf;
  Bb = 1;
  var e = NS(), t = x$(), r = T$(), n = Ls(), a = r(function(i, o) {
    if (i == null)
      return [];
    var s = o.length;
    return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return bf = a, bf;
}
var C$ = E$();
const Yh = /* @__PURE__ */ _e(C$);
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
function Yd() {
  return Yd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yd.apply(this, arguments);
}
function j$(e, t) {
  return k$(e) || I$(e, t) || $$(e, t) || M$();
}
function M$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $$(e, t) {
  if (e) {
    if (typeof e == "string") return Fb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Fb(e, t);
  }
}
function Fb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function I$(e, t) {
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
function k$(e) {
  if (Array.isArray(e)) return e;
}
function zb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zb(Object(r), !0).forEach(function(n) {
      N$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N$(e, t, r) {
  return t = D$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function D$(e) {
  var t = R$(e, "string");
  return Qa(t) == "symbol" ? t : t + "";
}
function R$(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function L$(e) {
  return Array.isArray(e) && Ye(e[0]) && Ye(e[1]) ? e.join(" ~ ") : e;
}
var q$ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, l = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, g = b === void 0 ? !1 : b, x = function() {
    if (l && l.length) {
      var I = {
        padding: 0,
        margin: 0
      }, j = (d ? Yh(l, d) : l).map(function(M, $) {
        if (M.type === "none")
          return null;
        var N = xf({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: M.color || "#000"
        }, s), R = M.formatter || f || L$, F = M.value, z = M.name, D = F, q = z;
        if (R && D != null && q != null) {
          var L = R(F, z, M, $, l);
          if (Array.isArray(L)) {
            var H = j$(L, 2);
            D = H[0], q = H[1];
          } else
            D = L;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ C.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat($),
            style: N
          }, Ye(q) ? /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, q) : null, Ye(q) ? /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, D), /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, M.unit || ""))
        );
      });
      return /* @__PURE__ */ C.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: I
      }, j);
    }
    return null;
  }, O = xf({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), m = xf({
    margin: 0
  }, c), w = !le(h), A = w ? h : "", _ = de("recharts-default-tooltip", p), P = de("recharts-tooltip-label", y);
  w && v && l !== void 0 && l !== null && (A = v(h, l));
  var k = g ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ C.createElement("div", Yd({
    className: _,
    style: O
  }, k), /* @__PURE__ */ C.createElement("p", {
    className: P,
    style: m
  }, /* @__PURE__ */ C.isValidElement(A) ? A : "".concat(A)), x());
};
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function ro(e, t, r) {
  return t = B$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B$(e) {
  var t = F$(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function F$(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xa = "recharts-tooltip-wrapper", z$ = {
  visibility: "hidden"
};
function W$(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return de(xa, ro(ro(ro(ro({}, "".concat(xa, "-right"), G(r) && t && G(t.x) && r >= t.x), "".concat(xa, "-left"), G(r) && t && G(t.x) && r < t.x), "".concat(xa, "-bottom"), G(n) && t && G(t.y) && n >= t.y), "".concat(xa, "-top"), G(n) && t && G(t.y) && n < t.y));
}
function Wb(e) {
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
function U$(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function H$(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, a = e.position, i = e.reverseDirection, o = e.tooltipBox, s = e.useTranslate3d, u = e.viewBox, c, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Wb({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.width,
    viewBox: u,
    viewBoxDimension: u.width
  }), f = Wb({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: a,
    reverseDirection: i,
    tooltipDimension: o.height,
    viewBox: u,
    viewBoxDimension: u.height
  }), c = U$({
    translateX: l,
    translateY: f,
    useTranslate3d: s
  })) : c = z$, {
    cssProperties: c,
    cssClasses: W$({
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
function Ub(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ub(Object(r), !0).forEach(function(n) {
      Zd(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ub(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function K$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function V$(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, BS(n.key), n);
  }
}
function G$(e, t, r) {
  return t && V$(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Y$(e, t, r) {
  return t = jo(t), X$(e, qS() ? Reflect.construct(t, r || [], jo(e).constructor) : t.apply(e, r));
}
function X$(e, t) {
  if (t && ($n(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Z$(e);
}
function Z$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qS = function() {
    return !!e;
  })();
}
function jo(e) {
  return jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jo(e);
}
function J$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xd(e, t);
}
function Xd(e, t) {
  return Xd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xd(e, t);
}
function Zd(e, t, r) {
  return t = BS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BS(e) {
  var t = Q$(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function Q$(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Kb = 1, eI = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    K$(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = Y$(this, t, [].concat(a)), Zd(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Zd(r, "handleKeyDown", function(o) {
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
  return J$(t, e), G$(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Kb || Math.abs(n.height - this.state.lastBoundingBox.height) > Kb) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.children, l = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, y = a.position, h = a.reverseDirection, v = a.useTranslate3d, b = a.viewBox, g = a.wrapperStyle, x = H$({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: p,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), O = x.cssClasses, m = x.cssProperties, w = Hb(Hb({
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
})(jt), tI = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Er = {
  isSsr: tI()
};
function In(e) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e);
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
      Xh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zS(n.key), n);
  }
}
function aI(e, t, r) {
  return t && nI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iI(e, t, r) {
  return t = Mo(t), oI(e, FS() ? Reflect.construct(t, r || [], Mo(e).constructor) : t.apply(e, r));
}
function oI(e, t) {
  if (t && (In(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sI(e);
}
function sI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function FS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (FS = function() {
    return !!e;
  })();
}
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function uI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Jd(e, t);
}
function Jd(e, t) {
  return Jd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Jd(e, t);
}
function Xh(e, t, r) {
  return t = zS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zS(e) {
  var t = cI(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function cI(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function lI(e) {
  return e.dataKey;
}
function fI(e, t) {
  return /* @__PURE__ */ C.isValidElement(e) ? /* @__PURE__ */ C.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ C.createElement(e, t) : /* @__PURE__ */ C.createElement(q$, t);
}
var Ut = /* @__PURE__ */ (function(e) {
  function t() {
    return rI(this, t), iI(this, t, arguments);
  }
  return uI(t, e), aI(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.content, l = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, y = a.payload, h = a.payloadUniqBy, v = a.position, b = a.reverseDirection, g = a.useTranslate3d, x = a.viewBox, O = a.wrapperStyle, m = y ?? [];
      f && m.length && (m = $S(y.filter(function(A) {
        return A.value != null && (A.hide !== !0 || n.props.includeHidden);
      }), h, lI));
      var w = m.length > 0;
      return /* @__PURE__ */ C.createElement(eI, {
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
      }, fI(c, Gb(Gb({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(jt);
Xh(Ut, "displayName", "Tooltip");
Xh(Ut, "defaultProps", {
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
var wf, Yb;
function dI() {
  if (Yb) return wf;
  Yb = 1;
  var e = Jt(), t = function() {
    return e.Date.now();
  };
  return wf = t, wf;
}
var Of, Xb;
function pI() {
  if (Xb) return Of;
  Xb = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Of = t, Of;
}
var Sf, Zb;
function hI() {
  if (Zb) return Sf;
  Zb = 1;
  var e = pI(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Sf = r, Sf;
}
var Af, Jb;
function WS() {
  if (Jb) return Af;
  Jb = 1;
  var e = hI(), t = Tr(), r = na(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
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
  return Af = u, Af;
}
var _f, Qb;
function vI() {
  if (Qb) return _f;
  Qb = 1;
  var e = Tr(), t = dI(), r = WS(), n = "Expected a function", a = Math.max, i = Math.min;
  function o(s, u, c) {
    var l, f, d, p, y, h, v = 0, b = !1, g = !1, x = !0;
    if (typeof s != "function")
      throw new TypeError(n);
    u = r(u) || 0, e(c) && (b = !!c.leading, g = "maxWait" in c, d = g ? a(r(c.maxWait) || 0, u) : d, x = "trailing" in c ? !!c.trailing : x);
    function O(j) {
      var M = l, $ = f;
      return l = f = void 0, v = j, p = s.apply($, M), p;
    }
    function m(j) {
      return v = j, y = setTimeout(_, u), b ? O(j) : p;
    }
    function w(j) {
      var M = j - h, $ = j - v, N = u - M;
      return g ? i(N, d - $) : N;
    }
    function A(j) {
      var M = j - h, $ = j - v;
      return h === void 0 || M >= u || M < 0 || g && $ >= d;
    }
    function _() {
      var j = t();
      if (A(j))
        return P(j);
      y = setTimeout(_, w(j));
    }
    function P(j) {
      return y = void 0, x && l ? O(j) : (l = f = void 0, p);
    }
    function k() {
      y !== void 0 && clearTimeout(y), v = 0, l = h = f = y = void 0;
    }
    function T() {
      return y === void 0 ? p : P(t());
    }
    function I() {
      var j = t(), M = A(j);
      if (l = arguments, f = this, h = j, M) {
        if (y === void 0)
          return m(h);
        if (g)
          return clearTimeout(y), y = setTimeout(_, u), O(h);
      }
      return y === void 0 && (y = setTimeout(_, u)), p;
    }
    return I.cancel = k, I.flush = T, I;
  }
  return _f = o, _f;
}
var Pf, e0;
function yI() {
  if (e0) return Pf;
  e0 = 1;
  var e = vI(), t = Tr(), r = "Expected a function";
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
  return Pf = n, Pf;
}
var mI = yI();
const US = /* @__PURE__ */ _e(mI);
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function t0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function no(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? t0(Object(r), !0).forEach(function(n) {
      gI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gI(e, t, r) {
  return t = bI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bI(e) {
  var t = xI(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function xI(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wI(e, t) {
  return _I(e) || AI(e, t) || SI(e, t) || OI();
}
function OI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function SI(e, t) {
  if (e) {
    if (typeof e == "string") return r0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return r0(e, t);
  }
}
function r0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function AI(e, t) {
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
function _I(e) {
  if (Array.isArray(e)) return e;
}
var PI = /* @__PURE__ */ We(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, l = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, p = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, g = e.onResize, x = e.style, O = x === void 0 ? {} : x, m = Me(null), w = Me();
  w.current = g, xT(t, function() {
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
  }), _ = wI(A, 2), P = _[0], k = _[1], T = tt(function(j, M) {
    k(function($) {
      var N = Math.round(j), R = Math.round(M);
      return $.containerWidth === N && $.containerHeight === R ? $ : {
        containerWidth: N,
        containerHeight: R
      };
    });
  }, []);
  qe(function() {
    var j = function(z) {
      var D, q = z[0].contentRect, L = q.width, H = q.height;
      T(L, H), (D = w.current) === null || D === void 0 || D.call(w, L, H);
    };
    h > 0 && (j = US(j, h, {
      trailing: !0,
      leading: !1
    }));
    var M = new ResizeObserver(j), $ = m.current.getBoundingClientRect(), N = $.width, R = $.height;
    return T(N, R), M.observe(m.current), function() {
      M.disconnect();
    };
  }, [T, h]);
  var I = Ke(function() {
    var j = P.containerWidth, M = P.containerHeight;
    if (j < 0 || M < 0)
      return null;
    Lt(Fr(o) || Fr(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), Lt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var $ = Fr(o) ? j : o, N = Fr(u) ? M : u;
    r && r > 0 && ($ ? N = $ / r : N && ($ = N * r), d && N > d && (N = d)), Lt($ > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, $, N, o, u, l, f, r);
    var R = !Array.isArray(p) && or(p.type).endsWith("Chart");
    return C.Children.map(p, function(F) {
      return /* @__PURE__ */ C.isValidElement(F) ? /* @__PURE__ */ He(F, no({
        width: $,
        height: N
      }, R ? {
        style: no({
          height: "100%",
          width: "100%",
          maxHeight: N,
          maxWidth: $
        }, F.props.style)
      } : {})) : F;
    });
  }, [r, p, u, d, f, l, P, o]);
  return /* @__PURE__ */ C.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: de("recharts-responsive-container", b),
    style: no(no({}, O), {}, {
      width: o,
      height: u,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, I);
}), qs = function(t) {
  return null;
};
qs.displayName = "Cell";
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function n0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? n0(Object(r), !0).forEach(function(n) {
      TI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TI(e, t, r) {
  return t = EI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EI(e) {
  var t = CI(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function CI(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var hn = {
  widthCache: {},
  cacheCount: 0
}, jI = 2e3, MI = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, a0 = "recharts_measurement_span";
function $I(e) {
  var t = Qd({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Ra = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Er.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = $I(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (hn.widthCache[a])
    return hn.widthCache[a];
  try {
    var i = document.getElementById(a0);
    i || (i = document.createElement("span"), i.setAttribute("id", a0), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = Qd(Qd({}, MI), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return hn.widthCache[a] = u, ++hn.cacheCount > jI && (hn.cacheCount = 0, hn.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, II = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
function $o(e, t) {
  return RI(e) || DI(e, t) || NI(e, t) || kI();
}
function kI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NI(e, t) {
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
function DI(e, t) {
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
function RI(e) {
  if (Array.isArray(e)) return e;
}
function LI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function o0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, BI(n.key), n);
  }
}
function qI(e, t, r) {
  return t && o0(e.prototype, t), r && o0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function BI(e) {
  var t = FI(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function FI(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var s0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, u0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, zI = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, WI = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, HS = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, UI = Object.keys(HS), xn = "NaN";
function HI(e, t) {
  return e * HS[t];
}
var ao = /* @__PURE__ */ (function() {
  function e(t, r) {
    LI(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !zI.test(r) && (this.num = NaN, this.unit = ""), UI.includes(r) && (this.num = HI(t, r), this.unit = "px");
  }
  return qI(e, [{
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
      var n, a = (n = WI.exec(r)) !== null && n !== void 0 ? n : [], i = $o(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
})();
function KS(e) {
  if (e.includes(xn))
    return xn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = s0.exec(t)) !== null && r !== void 0 ? r : [], a = $o(n, 4), i = a[1], o = a[2], s = a[3], u = ao.parse(i ?? ""), c = ao.parse(s ?? ""), l = o === "*" ? u.multiply(c) : u.divide(c);
    if (l.isNaN())
      return xn;
    t = t.replace(s0, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = u0.exec(t)) !== null && f !== void 0 ? f : [], p = $o(d, 4), y = p[1], h = p[2], v = p[3], b = ao.parse(y ?? ""), g = ao.parse(v ?? ""), x = h === "+" ? b.add(g) : b.subtract(g);
    if (x.isNaN())
      return xn;
    t = t.replace(u0, x.toString());
  }
  return t;
}
var c0 = /\(([^()]*)\)/;
function KI(e) {
  for (var t = e; t.includes("("); ) {
    var r = c0.exec(t), n = $o(r, 2), a = n[1];
    t = t.replace(c0, KS(a));
  }
  return t;
}
function VI(e) {
  var t = e.replace(/\s+/g, "");
  return t = KI(t), t = KS(t), t;
}
function GI(e) {
  try {
    return VI(e);
  } catch {
    return xn;
  }
}
function Tf(e) {
  var t = GI(e.slice(5, -1));
  return t === xn ? "" : t;
}
var YI = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], XI = ["dx", "dy", "angle", "className", "breakAll"];
function ep() {
  return ep = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ep.apply(this, arguments);
}
function l0(e, t) {
  if (e == null) return {};
  var r = ZI(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ZI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function f0(e, t) {
  return tk(e) || ek(e, t) || QI(e, t) || JI();
}
function JI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QI(e, t) {
  if (e) {
    if (typeof e == "string") return d0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d0(e, t);
  }
}
function d0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ek(e, t) {
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
function tk(e) {
  if (Array.isArray(e)) return e;
}
var VS = /[ \f\n\r\t\v\u2028\u2029]+/, GS = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    le(r) || (n ? i = r.toString().split("") : i = r.toString().split(VS));
    var o = i.map(function(u) {
      return {
        word: u,
        width: Ra(u, a).width
      };
    }), s = n ? 0 : Ra(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, rk = function(t, r, n, a, i) {
  var o = t.maxLines, s = t.children, u = t.style, c = t.breakAll, l = G(o), f = s, d = function() {
    var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return $.reduce(function(N, R) {
      var F = R.word, z = R.width, D = N[N.length - 1];
      if (D && (a == null || i || D.width + z + n < Number(a)))
        D.words.push(F), D.width += z + n;
      else {
        var q = {
          words: [F],
          width: z
        };
        N.push(q);
      }
      return N;
    }, []);
  }, p = d(r), y = function($) {
    return $.reduce(function(N, R) {
      return N.width > R.width ? N : R;
    });
  };
  if (!l)
    return p;
  for (var h = "…", v = function($) {
    var N = f.slice(0, $), R = GS({
      breakAll: c,
      style: u,
      children: N + h
    }).wordsWithComputedWidth, F = d(R), z = F.length > o || y(F).width > Number(a);
    return [z, F];
  }, b = 0, g = f.length - 1, x = 0, O; b <= g && x <= f.length - 1; ) {
    var m = Math.floor((b + g) / 2), w = m - 1, A = v(w), _ = f0(A, 2), P = _[0], k = _[1], T = v(m), I = f0(T, 1), j = I[0];
    if (!P && !j && (b = m + 1), P && j && (g = m - 1), !P && j) {
      O = k;
      break;
    }
    x++;
  }
  return O || p;
}, p0 = function(t) {
  var r = le(t) ? [] : t.toString().split(VS);
  return [{
    words: r
  }];
}, nk = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Er.isSsr) {
    var u, c, l = GS({
      breakAll: o,
      children: a,
      style: i
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      u = f, c = d;
    } else
      return p0(a);
    return rk({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, u, c, r, n);
  }
  return p0(a);
}, h0 = "#808080", _r = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, p = d === void 0 ? "start" : d, y = t.verticalAnchor, h = y === void 0 ? "end" : y, v = t.fill, b = v === void 0 ? h0 : v, g = l0(t, YI), x = Ke(function() {
    return nk({
      breakAll: g.breakAll,
      children: g.children,
      maxLines: g.maxLines,
      scaleToFit: f,
      style: g.style,
      width: g.width
    });
  }, [g.breakAll, g.children, g.maxLines, f, g.style, g.width]), O = g.dx, m = g.dy, w = g.angle, A = g.className, _ = g.breakAll, P = l0(g, XI);
  if (!Ye(n) || !Ye(i))
    return null;
  var k = n + (G(O) ? O : 0), T = i + (G(m) ? m : 0), I;
  switch (h) {
    case "start":
      I = Tf("calc(".concat(c, ")"));
      break;
    case "middle":
      I = Tf("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      I = Tf("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var j = [];
  if (f) {
    var M = x[0].width, $ = g.width;
    j.push("scale(".concat((G($) ? $ / M : 1) / M, ")"));
  }
  return w && j.push("rotate(".concat(w, ", ").concat(k, ", ").concat(T, ")")), j.length && (P.transform = j.join(" ")), /* @__PURE__ */ C.createElement("text", ep({}, ie(P, !0), {
    x: k,
    y: T,
    className: de("recharts-text", A),
    textAnchor: p,
    fill: b.includes("url") ? h0 : b
  }), x.map(function(N, R) {
    var F = N.words.join(_ ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ C.createElement("tspan", {
        x: k,
        dy: R === 0 ? I : s,
        key: "".concat(F, "-").concat(R)
      }, F)
    );
  }));
};
function Sr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ak(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Zh(e) {
  let t, r, n;
  e.length !== 2 ? (t = Sr, r = (s, u) => Sr(e(s), u), n = (s, u) => e(s) - u) : (t = e === Sr || e === ak ? e : ik, r = e, n = e);
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
function ik() {
  return 0;
}
function YS(e) {
  return e === null ? NaN : +e;
}
function* ok(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const sk = Zh(Sr), Bi = sk.right;
Zh(YS).center;
class v0 extends Map {
  constructor(t, r = lk) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(y0(this, t));
  }
  has(t) {
    return super.has(y0(this, t));
  }
  set(t, r) {
    return super.set(uk(this, t), r);
  }
  delete(t) {
    return super.delete(ck(this, t));
  }
}
function y0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function uk({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function ck({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function lk(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function fk(e = Sr) {
  if (e === Sr) return XS;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function XS(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const dk = Math.sqrt(50), pk = Math.sqrt(10), hk = Math.sqrt(2);
function Io(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= dk ? 10 : i >= pk ? 5 : i >= hk ? 2 : 1;
  let s, u, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, s = Math.round(e * c), u = Math.round(t * c), s / c < e && ++s, u / c > t && --u, c = -c) : (c = Math.pow(10, a) * o, s = Math.round(e / c), u = Math.round(t / c), s * c < e && ++s, u * c > t && --u), u < s && 0.5 <= r && r < 2 ? Io(e, t, r * 2) : [s, u, c];
}
function tp(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [a, i, o] = n ? Io(t, e, r) : Io(e, t, r);
  if (!(i >= a)) return [];
  const s = i - a + 1, u = new Array(s);
  if (n)
    if (o < 0) for (let c = 0; c < s; ++c) u[c] = (i - c) / -o;
    else for (let c = 0; c < s; ++c) u[c] = (i - c) * o;
  else if (o < 0) for (let c = 0; c < s; ++c) u[c] = (a + c) / -o;
  else for (let c = 0; c < s; ++c) u[c] = (a + c) * o;
  return u;
}
function rp(e, t, r) {
  return t = +t, e = +e, r = +r, Io(e, t, r)[2];
}
function np(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? rp(t, e, r) : rp(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function m0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function g0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function ZS(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? XS : fk(a); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, l = Math.log(u), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), y = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      ZS(e, t, p, y, a);
    }
    const i = e[t];
    let o = r, s = n;
    for (wa(e, r, t), a(e[n], i) > 0 && wa(e, r, n); o < s; ) {
      for (wa(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? wa(e, r, s) : (++s, wa(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function wa(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function vk(e, t, r) {
  if (e = Float64Array.from(ok(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return g0(e);
    if (t >= 1) return m0(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = m0(ZS(e, i).subarray(0, i + 1)), s = g0(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function yk(e, t, r = YS) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function mk(e, t, r) {
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
const ap = /* @__PURE__ */ Symbol("implicit");
function Jh() {
  var e = new v0(), t = [], r = [], n = ap;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== ap) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new v0();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return Jh(t, r).unknown(n);
  }, Mt.apply(a, arguments), a;
}
function ai() {
  var e = Jh().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, u = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, y = p ? a : n, h = p ? n : a;
    i = (h - y) / Math.max(1, d - u + c * 2), s && (i = Math.floor(i)), y += (h - y - i * (d - u)) * l, o = i * (1 - u), s && (y = Math.round(y), o = Math.round(o));
    var v = mk(d).map(function(b) {
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
    return ai(t(), [n, a]).round(s).paddingInner(u).paddingOuter(c).align(l);
  }, Mt.apply(f(), arguments);
}
function JS(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return JS(t());
  }, e;
}
function La() {
  return JS(ai.apply(null, arguments).paddingInner(1));
}
function Qh(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function QS(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Fi() {
}
var ii = 0.7, ko = 1 / ii, Pn = "\\s*([+-]?\\d+)\\s*", oi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gk = /^#([0-9a-f]{3,8})$/, bk = new RegExp(`^rgb\\(${Pn},${Pn},${Pn}\\)$`), xk = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), wk = new RegExp(`^rgba\\(${Pn},${Pn},${Pn},${oi}\\)$`), Ok = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${oi}\\)$`), Sk = new RegExp(`^hsl\\(${oi},${Yt},${Yt}\\)$`), Ak = new RegExp(`^hsla\\(${oi},${Yt},${Yt},${oi}\\)$`), b0 = {
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
Qh(Fi, si, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: x0,
  // Deprecated! Use color.formatHex.
  formatHex: x0,
  formatHex8: _k,
  formatHsl: Pk,
  formatRgb: w0,
  toString: w0
});
function x0() {
  return this.rgb().formatHex();
}
function _k() {
  return this.rgb().formatHex8();
}
function Pk() {
  return eA(this).formatHsl();
}
function w0() {
  return this.rgb().formatRgb();
}
function si(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = gk.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? O0(t) : r === 3 ? new ct(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? io(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? io(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = bk.exec(e)) ? new ct(t[1], t[2], t[3], 1) : (t = xk.exec(e)) ? new ct(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = wk.exec(e)) ? io(t[1], t[2], t[3], t[4]) : (t = Ok.exec(e)) ? io(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Sk.exec(e)) ? _0(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ak.exec(e)) ? _0(t[1], t[2] / 100, t[3] / 100, t[4]) : b0.hasOwnProperty(e) ? O0(b0[e]) : e === "transparent" ? new ct(NaN, NaN, NaN, 0) : null;
}
function O0(e) {
  return new ct(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function io(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new ct(e, t, r, n);
}
function Tk(e) {
  return e instanceof Fi || (e = si(e)), e ? (e = e.rgb(), new ct(e.r, e.g, e.b, e.opacity)) : new ct();
}
function ip(e, t, r, n) {
  return arguments.length === 1 ? Tk(e) : new ct(e, t, r, n ?? 1);
}
function ct(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Qh(ct, ip, QS(Fi, {
  brighter(e) {
    return e = e == null ? ko : Math.pow(ko, e), new ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ii : Math.pow(ii, e), new ct(this.r * e, this.g * e, this.b * e, this.opacity);
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
  hex: S0,
  // Deprecated! Use color.formatHex.
  formatHex: S0,
  formatHex8: Ek,
  formatRgb: A0,
  toString: A0
}));
function S0() {
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}`;
}
function Ek() {
  return `#${zr(this.r)}${zr(this.g)}${zr(this.b)}${zr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function A0() {
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
function _0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Nt(e, t, r, n);
}
function eA(e) {
  if (e instanceof Nt) return new Nt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fi || (e = si(e)), !e) return new Nt();
  if (e instanceof Nt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, u = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? i + a : 2 - i - a, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new Nt(o, s, u, e.opacity);
}
function Ck(e, t, r, n) {
  return arguments.length === 1 ? eA(e) : new Nt(e, t, r, n ?? 1);
}
function Nt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Qh(Nt, Ck, QS(Fi, {
  brighter(e) {
    return e = e == null ? ko : Math.pow(ko, e), new Nt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ii : Math.pow(ii, e), new Nt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new ct(
      Ef(e >= 240 ? e - 240 : e + 120, a, n),
      Ef(e, a, n),
      Ef(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new Nt(P0(this.h), oo(this.s), oo(this.l), No(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = No(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${P0(this.h)}, ${oo(this.s) * 100}%, ${oo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function P0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function oo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Ef(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ev = (e) => () => e;
function jk(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Mk(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function $k(e) {
  return (e = +e) == 1 ? tA : function(t, r) {
    return r - t ? Mk(t, r, e) : ev(isNaN(t) ? r : t);
  };
}
function tA(e, t) {
  var r = t - e;
  return r ? jk(e, r) : ev(isNaN(e) ? t : e);
}
const T0 = (function e(t) {
  var r = $k(t);
  function n(a, i) {
    var o = r((a = ip(a)).r, (i = ip(i)).r), s = r(a.g, i.g), u = r(a.b, i.b), c = tA(a.opacity, i.opacity);
    return function(l) {
      return a.r = o(l), a.g = s(l), a.b = u(l), a.opacity = c(l), a + "";
    };
  }
  return n.gamma = e, n;
})(1);
function Ik(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function kk(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Nk(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = sa(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function Dk(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Do(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Rk(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = sa(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var op = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Cf = new RegExp(op.source, "g");
function Lk(e) {
  return function() {
    return e;
  };
}
function qk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Bk(e, t) {
  var r = op.lastIndex = Cf.lastIndex = 0, n, a, i, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = op.exec(e)) && (a = Cf.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, u.push({ i: o, x: Do(n, a) })), r = Cf.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? u[0] ? qk(u[0].x) : Lk(t) : (t = u.length, function(c) {
    for (var l = 0, f; l < t; ++l) s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function sa(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? ev(t) : (r === "number" ? Do : r === "string" ? (n = si(t)) ? (t = n, T0) : Bk : t instanceof si ? T0 : t instanceof Date ? Dk : kk(t) ? Ik : Array.isArray(t) ? Nk : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rk : Do)(e, t);
}
function tv(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Fk(e, t) {
  t === void 0 && (t = e, e = sa);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function zk(e) {
  return function() {
    return e;
  };
}
function Ro(e) {
  return +e;
}
var E0 = [0, 1];
function st(e) {
  return e;
}
function sp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : zk(isNaN(t) ? NaN : 0.5);
}
function Wk(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function Uk(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = sp(a, n), i = r(o, i)) : (n = sp(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function Hk(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = sp(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = Bi(e, s, 1, n) - 1;
    return i[u](a[u](s));
  };
}
function zi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Bs() {
  var e = E0, t = E0, r = sa, n, a, i, o = st, s, u, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== st && (o = Wk(e[0], e[d - 1])), s = d > 2 ? Hk : Uk, u = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (u || (u = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((c || (c = s(t, e.map(n), Do)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Ro), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = tv, l();
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
function rv() {
  return Bs()(st, st);
}
function Kk(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Lo(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function kn(e) {
  return e = Lo(Math.abs(e)), e ? e[1] : NaN;
}
function Vk(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], u = 0; a > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), i.push(r.substring(a -= s, a + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Gk(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var Yk = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ui(e) {
  if (!(t = Yk.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new nv({
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
ui.prototype = nv.prototype;
function nv(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
nv.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Xk(e) {
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
var rA;
function Zk(e, t) {
  var r = Lo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (rA = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Lo(e, Math.max(0, t + i - 1))[0];
}
function C0(e, t) {
  var r = Lo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const j0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Kk,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => C0(e * 100, t),
  r: C0,
  s: Zk,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function M0(e) {
  return e;
}
var $0 = Array.prototype.map, I0 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Jk(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? M0 : Vk($0.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? M0 : Gk($0.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = ui(f);
    var d = f.fill, p = f.align, y = f.sign, h = f.symbol, v = f.zero, b = f.width, g = f.comma, x = f.precision, O = f.trim, m = f.type;
    m === "n" ? (g = !0, m = "g") : j0[m] || (x === void 0 && (x = 12), O = !0, m = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var w = h === "$" ? r : h === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", A = h === "$" ? n : /[%p]/.test(m) ? o : "", _ = j0[m], P = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function k(T) {
      var I = w, j = A, M, $, N;
      if (m === "c")
        j = _(T) + j, T = "";
      else {
        T = +T;
        var R = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? u : _(Math.abs(T), x), O && (T = Xk(T)), R && +T == 0 && y !== "+" && (R = !1), I = (R ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + I, j = (m === "s" ? I0[8 + rA / 3] : "") + j + (R && y === "(" ? ")" : ""), P) {
          for (M = -1, $ = T.length; ++M < $; )
            if (N = T.charCodeAt(M), 48 > N || N > 57) {
              j = (N === 46 ? a + T.slice(M + 1) : T.slice(M)) + j, T = T.slice(0, M);
              break;
            }
        }
      }
      g && !v && (T = t(T, 1 / 0));
      var F = I.length + T.length + j.length, z = F < b ? new Array(b - F + 1).join(d) : "";
      switch (g && v && (T = t(z + T, z.length ? b - j.length : 1 / 0), z = ""), p) {
        case "<":
          T = I + T + j + z;
          break;
        case "=":
          T = I + z + T + j;
          break;
        case "^":
          T = z.slice(0, F = z.length >> 1) + I + T + j + z.slice(F);
          break;
        default:
          T = z + I + T + j;
          break;
      }
      return i(T);
    }
    return k.toString = function() {
      return f + "";
    }, k;
  }
  function l(f, d) {
    var p = c((f = ui(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(kn(d) / 3))) * 3, h = Math.pow(10, -y), v = I0[8 + y / 3];
    return function(b) {
      return p(h * b) + v;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var so, av, nA;
Qk({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Qk(e) {
  return so = Jk(e), av = so.format, nA = so.formatPrefix, so;
}
function eN(e) {
  return Math.max(0, -kn(Math.abs(e)));
}
function tN(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(kn(t) / 3))) * 3 - kn(Math.abs(e)));
}
function rN(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, kn(t) - kn(e)) + 1;
}
function aA(e, t, r, n) {
  var a = np(e, t, r), i;
  switch (n = ui(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = tN(a, o)) && (n.precision = i), nA(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = rN(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = eN(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return av(n);
}
function Cr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return tp(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return aA(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], s = n[i], u, c, l = 10;
    for (s < o && (c = o, o = s, s = c, c = a, a = i, i = c); l-- > 0; ) {
      if (c = rp(o, s, r), c === u)
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
function qo() {
  var e = rv();
  return e.copy = function() {
    return zi(e, qo());
  }, Mt.apply(e, arguments), Cr(e);
}
function iA(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ro), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return iA(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Ro) : [0, 1], Cr(r);
}
function oA(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function k0(e) {
  return Math.log(e);
}
function N0(e) {
  return Math.exp(e);
}
function nN(e) {
  return -Math.log(-e);
}
function aN(e) {
  return -Math.exp(-e);
}
function iN(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function oN(e) {
  return e === 10 ? iN : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function sN(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function D0(e) {
  return (t, r) => -e(-t, r);
}
function iv(e) {
  const t = e(k0, N0), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = sN(n), i = oN(n), r()[0] < 0 ? (a = D0(a), i = D0(i), e(nN, aN)) : e(k0, N0), t;
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
      b.length * 2 < v && (b = tp(c, l, v));
    } else
      b = tp(d, p, Math.min(p - d, v)).map(i);
    return f ? b.reverse() : b;
  }, t.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = ui(u)).precision == null && (u.trim = !0), u = av(u)), s === 1 / 0) return u;
    const c = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / i(Math.round(a(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? u(l) : "";
    };
  }, t.nice = () => r(oA(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function sA() {
  const e = iv(Bs()).domain([1, 10]);
  return e.copy = () => zi(e, sA()).base(e.base()), Mt.apply(e, arguments), e;
}
function R0(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function L0(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ov(e) {
  var t = 1, r = e(R0(t), L0(t));
  return r.constant = function(n) {
    return arguments.length ? e(R0(t = +n), L0(t)) : t;
  }, Cr(r);
}
function uA() {
  var e = ov(Bs());
  return e.copy = function() {
    return zi(e, uA()).constant(e.constant());
  }, Mt.apply(e, arguments);
}
function q0(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function uN(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function cN(e) {
  return e < 0 ? -e * e : e * e;
}
function sv(e) {
  var t = e(st, st), r = 1;
  function n() {
    return r === 1 ? e(st, st) : r === 0.5 ? e(uN, cN) : e(q0(r), q0(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, Cr(t);
}
function uv() {
  var e = sv(Bs());
  return e.copy = function() {
    return zi(e, uv()).exponent(e.exponent());
  }, Mt.apply(e, arguments), e;
}
function lN() {
  return uv.apply(null, arguments).exponent(0.5);
}
function B0(e) {
  return Math.sign(e) * e * e;
}
function fN(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function cA() {
  var e = rv(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = fN(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(B0(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Ro)).map(B0)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return cA(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Mt.apply(a, arguments), Cr(a);
}
function lA() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = yk(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[Bi(r, o)];
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
    return lA().domain(e).range(t).unknown(n);
  }, Mt.apply(i, arguments);
}
function fA() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(u) {
    return u != null && u <= u ? a[Bi(n, u, 0, r)] : i;
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
    return fA().domain([e, t]).range(a).unknown(i);
  }, Mt.apply(Cr(o), arguments);
}
function dA() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[Bi(e, i, 0, n)] : r;
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
    return dA().domain(e).range(t).unknown(r);
  }, Mt.apply(a, arguments);
}
const jf = /* @__PURE__ */ new Date(), Mf = /* @__PURE__ */ new Date();
function Xe(e, t, r, n) {
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
  }, a.filter = (i) => Xe((o) => {
    if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
  }, (o, s) => {
    if (o >= o)
      if (s < 0) for (; ++s <= 0; )
        for (; t(o, -1), !i(o); )
          ;
      else for (; --s >= 0; )
        for (; t(o, 1), !i(o); )
          ;
  }), r && (a.count = (i, o) => (jf.setTime(+i), Mf.setTime(+o), e(jf), e(Mf), Math.floor(r(jf, Mf))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const Bo = Xe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Bo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Xe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Bo);
Bo.range;
const nr = 1e3, Pt = nr * 60, ar = Pt * 60, ur = ar * 24, cv = ur * 7, F0 = ur * 30, $f = ur * 365, Wr = Xe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * nr);
}, (e, t) => (t - e) / nr, (e) => e.getUTCSeconds());
Wr.range;
const lv = Xe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getMinutes());
lv.range;
const fv = Xe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Pt);
}, (e, t) => (t - e) / Pt, (e) => e.getUTCMinutes());
fv.range;
const dv = Xe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr - e.getMinutes() * Pt);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getHours());
dv.range;
const pv = Xe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getUTCHours());
pv.range;
const Wi = Xe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Pt) / ur,
  (e) => e.getDate() - 1
);
Wi.range;
const Fs = Xe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => e.getUTCDate() - 1);
Fs.range;
const pA = Xe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => Math.floor(e / ur));
pA.range;
function un(e) {
  return Xe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Pt) / cv);
}
const zs = un(0), Fo = un(1), dN = un(2), pN = un(3), Nn = un(4), hN = un(5), vN = un(6);
zs.range;
Fo.range;
dN.range;
pN.range;
Nn.range;
hN.range;
vN.range;
function cn(e) {
  return Xe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / cv);
}
const Ws = cn(0), zo = cn(1), yN = cn(2), mN = cn(3), Dn = cn(4), gN = cn(5), bN = cn(6);
Ws.range;
zo.range;
yN.range;
mN.range;
Dn.range;
gN.range;
bN.range;
const hv = Xe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
hv.range;
const vv = Xe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
vv.range;
const cr = Xe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
cr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
cr.range;
const lr = Xe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
lr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Xe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
lr.range;
function hA(e, t, r, n, a, i) {
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
    [r, 1, cv],
    [t, 1, F0],
    [t, 3, 3 * F0],
    [e, 1, $f]
  ];
  function s(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : u(c, l, f), y = p ? p.range(c, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function u(c, l, f) {
    const d = Math.abs(l - c) / f, p = Zh(([, , v]) => v).right(o, d);
    if (p === o.length) return e.every(np(c / $f, l / $f, f));
    if (p === 0) return Bo.every(Math.max(np(c, l, f), 1));
    const [y, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return y.every(h);
  }
  return [s, u];
}
const [xN, wN] = hA(lr, vv, Ws, pA, pv, fv), [ON, SN] = hA(cr, hv, zs, Wi, dv, lv);
function If(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function kf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Oa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function AN(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = Sa(a), l = Aa(a), f = Sa(i), d = Aa(i), p = Sa(o), y = Aa(o), h = Sa(s), v = Aa(s), b = Sa(u), g = Aa(u), x = {
    a: R,
    A: F,
    b: z,
    B: D,
    c: null,
    d: V0,
    e: V0,
    f: VN,
    g: nD,
    G: iD,
    H: UN,
    I: HN,
    j: KN,
    L: vA,
    m: GN,
    M: YN,
    p: q,
    q: L,
    Q: X0,
    s: Z0,
    S: XN,
    u: ZN,
    U: JN,
    V: QN,
    w: eD,
    W: tD,
    x: null,
    X: null,
    y: rD,
    Y: aD,
    Z: oD,
    "%": Y0
  }, O = {
    a: H,
    A: X,
    b: te,
    B: ne,
    c: null,
    d: G0,
    e: G0,
    f: lD,
    g: xD,
    G: OD,
    H: sD,
    I: uD,
    j: cD,
    L: mA,
    m: fD,
    M: dD,
    p: ee,
    q: J,
    Q: X0,
    s: Z0,
    S: pD,
    u: hD,
    U: vD,
    V: yD,
    w: mD,
    W: gD,
    x: null,
    X: null,
    y: bD,
    Y: wD,
    Z: SD,
    "%": Y0
  }, m = {
    a: k,
    A: T,
    b: I,
    B: j,
    c: M,
    d: H0,
    e: H0,
    f: BN,
    g: U0,
    G: W0,
    H: K0,
    I: K0,
    j: DN,
    L: qN,
    m: NN,
    M: RN,
    p: P,
    q: kN,
    Q: zN,
    s: WN,
    S: LN,
    u: CN,
    U: jN,
    V: MN,
    w: EN,
    W: $N,
    x: $,
    X: N,
    y: U0,
    Y: W0,
    Z: IN,
    "%": FN
  };
  x.x = w(r, x), x.X = w(n, x), x.c = w(t, x), O.x = w(r, O), O.X = w(n, O), O.c = w(t, O);
  function w(U, V) {
    return function(Z) {
      var E = [], Y = -1, B = 0, ae = U.length, ce, oe, Se;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++Y < ae; )
        U.charCodeAt(Y) === 37 && (E.push(U.slice(B, Y)), (oe = z0[ce = U.charAt(++Y)]) != null ? ce = U.charAt(++Y) : oe = ce === "e" ? " " : "0", (Se = V[ce]) && (ce = Se(Z, oe)), E.push(ce), B = Y + 1);
      return E.push(U.slice(B, Y)), E.join("");
    };
  }
  function A(U, V) {
    return function(Z) {
      var E = Oa(1900, void 0, 1), Y = _(E, U, Z += "", 0), B, ae;
      if (Y != Z.length) return null;
      if ("Q" in E) return new Date(E.Q);
      if ("s" in E) return new Date(E.s * 1e3 + ("L" in E ? E.L : 0));
      if (V && !("Z" in E) && (E.Z = 0), "p" in E && (E.H = E.H % 12 + E.p * 12), E.m === void 0 && (E.m = "q" in E ? E.q : 0), "V" in E) {
        if (E.V < 1 || E.V > 53) return null;
        "w" in E || (E.w = 1), "Z" in E ? (B = kf(Oa(E.y, 0, 1)), ae = B.getUTCDay(), B = ae > 4 || ae === 0 ? zo.ceil(B) : zo(B), B = Fs.offset(B, (E.V - 1) * 7), E.y = B.getUTCFullYear(), E.m = B.getUTCMonth(), E.d = B.getUTCDate() + (E.w + 6) % 7) : (B = If(Oa(E.y, 0, 1)), ae = B.getDay(), B = ae > 4 || ae === 0 ? Fo.ceil(B) : Fo(B), B = Wi.offset(B, (E.V - 1) * 7), E.y = B.getFullYear(), E.m = B.getMonth(), E.d = B.getDate() + (E.w + 6) % 7);
      } else ("W" in E || "U" in E) && ("w" in E || (E.w = "u" in E ? E.u % 7 : "W" in E ? 1 : 0), ae = "Z" in E ? kf(Oa(E.y, 0, 1)).getUTCDay() : If(Oa(E.y, 0, 1)).getDay(), E.m = 0, E.d = "W" in E ? (E.w + 6) % 7 + E.W * 7 - (ae + 5) % 7 : E.w + E.U * 7 - (ae + 6) % 7);
      return "Z" in E ? (E.H += E.Z / 100 | 0, E.M += E.Z % 100, kf(E)) : If(E);
    };
  }
  function _(U, V, Z, E) {
    for (var Y = 0, B = V.length, ae = Z.length, ce, oe; Y < B; ) {
      if (E >= ae) return -1;
      if (ce = V.charCodeAt(Y++), ce === 37) {
        if (ce = V.charAt(Y++), oe = m[ce in z0 ? V.charAt(Y++) : ce], !oe || (E = oe(U, Z, E)) < 0) return -1;
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
  function I(U, V, Z) {
    var E = b.exec(V.slice(Z));
    return E ? (U.m = g.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function j(U, V, Z) {
    var E = h.exec(V.slice(Z));
    return E ? (U.m = v.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function M(U, V, Z) {
    return _(U, t, V, Z);
  }
  function $(U, V, Z) {
    return _(U, r, V, Z);
  }
  function N(U, V, Z) {
    return _(U, n, V, Z);
  }
  function R(U) {
    return o[U.getDay()];
  }
  function F(U) {
    return i[U.getDay()];
  }
  function z(U) {
    return u[U.getMonth()];
  }
  function D(U) {
    return s[U.getMonth()];
  }
  function q(U) {
    return a[+(U.getHours() >= 12)];
  }
  function L(U) {
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
  function J(U) {
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
var z0 = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, _N = /^%/, PN = /[\\^$*+?|[\]().{}]/g;
function ve(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function TN(e) {
  return e.replace(PN, "\\$&");
}
function Sa(e) {
  return new RegExp("^(?:" + e.map(TN).join("|") + ")", "i");
}
function Aa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function EN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function CN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function jN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function MN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function $N(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function W0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function U0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function IN(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function kN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function NN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function H0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function DN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function K0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function RN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function LN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function qN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function BN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function FN(e, t, r) {
  var n = _N.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function zN(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function WN(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function V0(e, t) {
  return ve(e.getDate(), t, 2);
}
function UN(e, t) {
  return ve(e.getHours(), t, 2);
}
function HN(e, t) {
  return ve(e.getHours() % 12 || 12, t, 2);
}
function KN(e, t) {
  return ve(1 + Wi.count(cr(e), e), t, 3);
}
function vA(e, t) {
  return ve(e.getMilliseconds(), t, 3);
}
function VN(e, t) {
  return vA(e, t) + "000";
}
function GN(e, t) {
  return ve(e.getMonth() + 1, t, 2);
}
function YN(e, t) {
  return ve(e.getMinutes(), t, 2);
}
function XN(e, t) {
  return ve(e.getSeconds(), t, 2);
}
function ZN(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function JN(e, t) {
  return ve(zs.count(cr(e) - 1, e), t, 2);
}
function yA(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Nn(e) : Nn.ceil(e);
}
function QN(e, t) {
  return e = yA(e), ve(Nn.count(cr(e), e) + (cr(e).getDay() === 4), t, 2);
}
function eD(e) {
  return e.getDay();
}
function tD(e, t) {
  return ve(Fo.count(cr(e) - 1, e), t, 2);
}
function rD(e, t) {
  return ve(e.getFullYear() % 100, t, 2);
}
function nD(e, t) {
  return e = yA(e), ve(e.getFullYear() % 100, t, 2);
}
function aD(e, t) {
  return ve(e.getFullYear() % 1e4, t, 4);
}
function iD(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Nn(e) : Nn.ceil(e), ve(e.getFullYear() % 1e4, t, 4);
}
function oD(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ve(t / 60 | 0, "0", 2) + ve(t % 60, "0", 2);
}
function G0(e, t) {
  return ve(e.getUTCDate(), t, 2);
}
function sD(e, t) {
  return ve(e.getUTCHours(), t, 2);
}
function uD(e, t) {
  return ve(e.getUTCHours() % 12 || 12, t, 2);
}
function cD(e, t) {
  return ve(1 + Fs.count(lr(e), e), t, 3);
}
function mA(e, t) {
  return ve(e.getUTCMilliseconds(), t, 3);
}
function lD(e, t) {
  return mA(e, t) + "000";
}
function fD(e, t) {
  return ve(e.getUTCMonth() + 1, t, 2);
}
function dD(e, t) {
  return ve(e.getUTCMinutes(), t, 2);
}
function pD(e, t) {
  return ve(e.getUTCSeconds(), t, 2);
}
function hD(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function vD(e, t) {
  return ve(Ws.count(lr(e) - 1, e), t, 2);
}
function gA(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Dn(e) : Dn.ceil(e);
}
function yD(e, t) {
  return e = gA(e), ve(Dn.count(lr(e), e) + (lr(e).getUTCDay() === 4), t, 2);
}
function mD(e) {
  return e.getUTCDay();
}
function gD(e, t) {
  return ve(zo.count(lr(e) - 1, e), t, 2);
}
function bD(e, t) {
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function xD(e, t) {
  return e = gA(e), ve(e.getUTCFullYear() % 100, t, 2);
}
function wD(e, t) {
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function OD(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Dn(e) : Dn.ceil(e), ve(e.getUTCFullYear() % 1e4, t, 4);
}
function SD() {
  return "+0000";
}
function Y0() {
  return "%";
}
function X0(e) {
  return +e;
}
function Z0(e) {
  return Math.floor(+e / 1e3);
}
var vn, bA, xA;
AD({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function AD(e) {
  return vn = AN(e), bA = vn.format, vn.parse, xA = vn.utcFormat, vn.utcParse, vn;
}
function _D(e) {
  return new Date(e);
}
function PD(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function yv(e, t, r, n, a, i, o, s, u, c) {
  var l = rv(), f = l.invert, d = l.domain, p = c(".%L"), y = c(":%S"), h = c("%I:%M"), v = c("%I %p"), b = c("%a %d"), g = c("%b %d"), x = c("%B"), O = c("%Y");
  function m(w) {
    return (u(w) < w ? p : s(w) < w ? y : o(w) < w ? h : i(w) < w ? v : n(w) < w ? a(w) < w ? b : g : r(w) < w ? x : O)(w);
  }
  return l.invert = function(w) {
    return new Date(f(w));
  }, l.domain = function(w) {
    return arguments.length ? d(Array.from(w, PD)) : d().map(_D);
  }, l.ticks = function(w) {
    var A = d();
    return e(A[0], A[A.length - 1], w ?? 10);
  }, l.tickFormat = function(w, A) {
    return A == null ? m : c(A);
  }, l.nice = function(w) {
    var A = d();
    return (!w || typeof w.range != "function") && (w = t(A[0], A[A.length - 1], w ?? 10)), w ? d(oA(A, w)) : l;
  }, l.copy = function() {
    return zi(l, yv(e, t, r, n, a, i, o, s, u, c));
  }, l;
}
function TD() {
  return Mt.apply(yv(ON, SN, cr, hv, zs, Wi, dv, lv, Wr, bA).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function ED() {
  return Mt.apply(yv(xN, wN, lr, vv, Ws, Fs, pv, fv, Wr, xA).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Us() {
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
  return c.range = l(sa), c.rangeRound = l(tv), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function jr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function wA() {
  var e = Cr(Us()(st));
  return e.copy = function() {
    return jr(e, wA());
  }, pr.apply(e, arguments);
}
function OA() {
  var e = iv(Us()).domain([1, 10]);
  return e.copy = function() {
    return jr(e, OA()).base(e.base());
  }, pr.apply(e, arguments);
}
function SA() {
  var e = ov(Us());
  return e.copy = function() {
    return jr(e, SA()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function mv() {
  var e = sv(Us());
  return e.copy = function() {
    return jr(e, mv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function CD() {
  return mv.apply(null, arguments).exponent(0.5);
}
function AA() {
  var e = [], t = st;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Bi(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (a, i) => vk(e, i / n));
  }, r.copy = function() {
    return AA(t).domain(e);
  }, pr.apply(r, arguments);
}
function Hs() {
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
      return arguments.length ? ([b, g, x] = v, c = Fk(h, [b, g, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = y(sa), p.rangeRound = y(tv), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, a = h(e), i = h(t), o = h(r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function _A() {
  var e = Cr(Hs()(st));
  return e.copy = function() {
    return jr(e, _A());
  }, pr.apply(e, arguments);
}
function PA() {
  var e = iv(Hs()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return jr(e, PA()).base(e.base());
  }, pr.apply(e, arguments);
}
function TA() {
  var e = ov(Hs());
  return e.copy = function() {
    return jr(e, TA()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function gv() {
  var e = sv(Hs());
  return e.copy = function() {
    return jr(e, gv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function jD() {
  return gv.apply(null, arguments).exponent(0.5);
}
const J0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: ai,
  scaleDiverging: _A,
  scaleDivergingLog: PA,
  scaleDivergingPow: gv,
  scaleDivergingSqrt: jD,
  scaleDivergingSymlog: TA,
  scaleIdentity: iA,
  scaleImplicit: ap,
  scaleLinear: qo,
  scaleLog: sA,
  scaleOrdinal: Jh,
  scalePoint: La,
  scalePow: uv,
  scaleQuantile: lA,
  scaleQuantize: fA,
  scaleRadial: cA,
  scaleSequential: wA,
  scaleSequentialLog: OA,
  scaleSequentialPow: mv,
  scaleSequentialQuantile: AA,
  scaleSequentialSqrt: CD,
  scaleSequentialSymlog: SA,
  scaleSqrt: lN,
  scaleSymlog: uA,
  scaleThreshold: dA,
  scaleTime: TD,
  scaleUtc: ED,
  tickFormat: aA
}, Symbol.toStringTag, { value: "Module" }));
var Nf, Q0;
function Ks() {
  if (Q0) return Nf;
  Q0 = 1;
  var e = na();
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
var Df, ex;
function EA() {
  if (ex) return Df;
  ex = 1;
  function e(t, r) {
    return t > r;
  }
  return Df = e, Df;
}
var Rf, tx;
function MD() {
  if (tx) return Rf;
  tx = 1;
  var e = Ks(), t = EA(), r = oa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Rf = n, Rf;
}
var $D = MD();
const wr = /* @__PURE__ */ _e($D);
var Lf, rx;
function CA() {
  if (rx) return Lf;
  rx = 1;
  function e(t, r) {
    return t < r;
  }
  return Lf = e, Lf;
}
var qf, nx;
function ID() {
  if (nx) return qf;
  nx = 1;
  var e = Ks(), t = CA(), r = oa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return qf = n, qf;
}
var kD = ID();
const Vs = /* @__PURE__ */ _e(kD);
var Bf, ax;
function ND() {
  if (ax) return Bf;
  ax = 1;
  var e = qh(), t = Qt(), r = RS(), n = pt();
  function a(i, o) {
    var s = n(i) ? e : r;
    return s(i, t(o, 3));
  }
  return Bf = a, Bf;
}
var Ff, ix;
function DD() {
  if (ix) return Ff;
  ix = 1;
  var e = NS(), t = ND();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return Ff = r, Ff;
}
var RD = DD();
const LD = /* @__PURE__ */ _e(RD);
var ua = 1e9, qD = {
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
}, xv, Ie = !0, Ct = "[DecimalError] ", Xr = Ct + "Invalid argument: ", bv = Ct + "Exponent out of range: ", ca = Math.floor, qr = Math.pow, BD = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, gt, Ze = 1e7, $e = 7, jA = 9007199254740991, Wo = ca(jA / $e), re = {};
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
  return ze(this);
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
  return r.eq(gt) ? new n(0) : (Ie = !1, t = sr(ci(r, i), ci(e, i), i), Ie = !0, Pe(t, a));
};
re.minus = re.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? IA(t, e) : MA(t, (e.s = -e.s, e));
};
re.modulo = re.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(Ct + "NaN");
  return r.s ? (Ie = !1, t = sr(r, e, 0, 1).times(e), Ie = !0, r.minus(t)) : Pe(new n(r), a);
};
re.naturalExponential = re.exp = function() {
  return $A(this);
};
re.naturalLogarithm = re.ln = function() {
  return ci(this);
};
re.negated = re.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
re.plus = re.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? MA(t, e) : IA(t, (e.s = -e.s, e));
};
re.precision = re.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Xr + e);
  if (t = ze(a) + 1, n = a.d.length - 1, r = n * $e + 1, n = a.d[n], n) {
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
  for (e = ze(s), Ie = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = Kt(s.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = ca((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(a.toString()), r = u.precision, a = o = r + 3; ; )
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
  return r = new n(r), e === void 0 ? r : (Zt(e, 0, ua), t === void 0 ? t = n.rounding : Zt(t, 0, 8), Pe(r, e + ze(r) + 1, t));
};
re.toExponential = function(e, t) {
  var r, n = this, a = n.constructor;
  return e === void 0 ? r = tn(n, !0) : (Zt(e, 0, ua), t === void 0 ? t = a.rounding : Zt(t, 0, 8), n = Pe(new a(n), e + 1, t), r = tn(n, !0, e + 1)), r;
};
re.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? tn(a) : (Zt(e, 0, ua), t === void 0 ? t = i.rounding : Zt(t, 0, 8), n = Pe(new i(a), e + ze(a) + 1, t), r = tn(n.abs(), !1, e + ze(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
};
re.toInteger = re.toint = function() {
  var e = this, t = e.constructor;
  return Pe(new t(e), ze(e) + 1, t.rounding);
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
    if ((r = l < 0 ? -l : l) <= jA) {
      for (a = new u(gt), t = Math.ceil(n / $e + 4), Ie = !1; r % 2 && (a = a.times(s), sx(a.d, t)), r = ca(r / 2), r !== 0; )
        s = s.times(s), sx(s.d, t);
      return Ie = !0, e.s < 0 ? new u(gt).div(a) : Pe(a, n);
    }
  } else if (i < 0) throw Error(Ct + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ie = !1, a = e.times(ci(s, n + c)), Ie = !0, a = $A(a), a.s = i, a;
};
re.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = ze(a), n = tn(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Zt(e, 1, ua), t === void 0 ? t = i.rounding : Zt(t, 0, 8), a = Pe(new i(a), e, t), r = ze(a), n = tn(a, e <= r || r <= i.toExpNeg, e)), n;
};
re.toSignificantDigits = re.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Zt(e, 1, ua), t === void 0 ? t = n.rounding : Zt(t, 0, 8)), Pe(new n(r), e, t);
};
re.toString = re.valueOf = re.val = re.toJSON = re[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = ze(e), r = e.constructor;
  return tn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function MA(e, t) {
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
    var s, u, c, l, f, d, p, y, h, v, b, g, x, O, m, w, A, _, P = n.constructor, k = n.s == a.s ? 1 : -1, T = n.d, I = a.d;
    if (!n.s) return new P(n);
    if (!a.s) throw Error(Ct + "Division by zero");
    for (u = n.e - a.e, A = I.length, m = T.length, p = new P(k), y = p.d = [], c = 0; I[c] == (T[c] || 0); ) ++c;
    if (I[c] > (T[c] || 0) && --u, i == null ? g = i = P.precision : o ? g = i + (ze(n) - ze(a)) + 1 : g = i, g < 0) return new P(0);
    if (g = g / $e + 2 | 0, c = 0, A == 1)
      for (l = 0, I = I[0], g++; (c < m || l) && g--; c++)
        x = l * Ze + (T[c] || 0), y[c] = x / I | 0, l = x % I | 0;
    else {
      for (l = Ze / (I[0] + 1) | 0, l > 1 && (I = e(I, l), T = e(T, l), A = I.length, m = T.length), O = A, h = T.slice(0, A), v = h.length; v < A; ) h[v++] = 0;
      _ = I.slice(), _.unshift(0), w = I[0], I[1] >= Ze / 2 && ++w;
      do
        l = 0, s = t(I, h, A, v), s < 0 ? (b = h[0], A != v && (b = b * Ze + (h[1] || 0)), l = b / w | 0, l > 1 ? (l >= Ze && (l = Ze - 1), f = e(I, l), d = f.length, v = h.length, s = t(f, h, d, v), s == 1 && (l--, r(f, A < d ? _ : I, d))) : (l == 0 && (s = l = 1), f = I.slice()), d = f.length, d < v && f.unshift(0), r(h, f, v), s == -1 && (v = h.length, s = t(I, h, A, v), s < 1 && (l++, r(h, A < v ? _ : I, v))), v = h.length) : s === 0 && (l++, h = [0]), y[c++] = l, s && h[0] ? h[v++] = T[O] || 0 : (h = [T[O]], v = 1);
      while ((O++ < m || h[0] !== void 0) && g--);
    }
    return y[0] || y.shift(), p.e = u, Pe(p, o ? i + ze(p) + 1 : i);
  };
})();
function $A(e, t) {
  var r, n, a, i, o, s, u = 0, c = 0, l = e.constructor, f = l.precision;
  if (ze(e) > 16) throw Error(bv + ze(e));
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
function ze(e) {
  for (var t = e.e * $e, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function zf(e, t, r) {
  if (t > e.LN10.sd())
    throw Ie = !0, r && (e.precision = r), Error(Ct + "LN10 precision limit exceeded");
  return Pe(new e(e.LN10), t);
}
function br(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function ci(e, t) {
  var r, n, a, i, o, s, u, c, l, f = 1, d = 10, p = e, y = p.d, h = p.constructor, v = h.precision;
  if (p.s < 1) throw Error(Ct + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(gt)) return new h(0);
  if (t == null ? (Ie = !1, c = v) : c = t, p.eq(10))
    return t == null && (Ie = !0), zf(h, c);
  if (c += d, h.precision = c, r = Kt(y), n = r.charAt(0), i = ze(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = Kt(p.d), n = r.charAt(0), f++;
    i = ze(p), n > 1 ? (p = new h("0." + r), i++) : p = new h(n + "." + r.slice(1));
  } else
    return u = zf(h, c + 2, v).times(i + ""), p = ci(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = v, t == null ? (Ie = !0, Pe(p, v)) : p;
  for (s = o = p = sr(p.minus(gt), p.plus(gt), c), l = Pe(p.times(p), c), a = 3; ; ) {
    if (o = Pe(o.times(l), c), u = s.plus(sr(o, new h(a), c)), Kt(u.d).slice(0, c) === Kt(s.d).slice(0, c))
      return s = s.times(2), i !== 0 && (s = s.plus(zf(h, c + 2, v).times(i + ""))), s = sr(s, new h(f), c), h.precision = v, t == null ? (Ie = !0, Pe(s, v)) : s;
    s = u, a += 2;
  }
}
function ox(e, t) {
  var r, n, a;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (t = t.slice(n, a), t) {
    if (a -= n, r = r - n - 1, e.e = ca(r / $e), e.d = [], n = (r + 1) % $e, r < 0 && (n += $e), n < a) {
      for (n && e.d.push(+t.slice(0, n)), a -= $e; n < a; ) e.d.push(+t.slice(n, n += $e));
      t = t.slice(n), n = $e - t.length;
    } else
      n -= a;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Ie && (e.e > Wo || e.e < -Wo)) throw Error(bv + r);
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
    return u ? (i = ze(e), f.length = 1, t = t - i - 1, f[0] = qr(10, ($e - t % $e) % $e), e.e = ca(-t / $e) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
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
  if (Ie && (e.e > Wo || e.e < -Wo))
    throw Error(bv + ze(e));
  return e;
}
function IA(e, t) {
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
  var n, a = ze(e), i = Kt(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + br(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + br(-a - 1) + i, r && (n = r - o) > 0 && (i += br(n))) : a >= o ? (i += br(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + br(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += br(n))), e.s < 0 ? "-" + i : i;
}
function sx(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function kA(e) {
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
      return ox(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Xr + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, BD.test(i)) ox(o, i);
    else throw Error(Xr + i);
  }
  if (a.prototype = re, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = kA, a.config = a.set = FD, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function FD(e) {
  if (!e || typeof e != "object")
    throw Error(Ct + "Object expected");
  var t, r, n, a = [
    "precision",
    1,
    ua,
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
      if (ca(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Xr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Xr + r + ": " + n);
  return this;
}
var xv = kA(qD);
gt = new xv(1);
const Ae = xv;
function zD(e) {
  return KD(e) || HD(e) || UD(e) || WD();
}
function WD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UD(e, t) {
  if (e) {
    if (typeof e == "string") return up(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return up(e, t);
  }
}
function HD(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function KD(e) {
  if (Array.isArray(e)) return up(e);
}
function up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var VD = function(t) {
  return t;
}, NA = {}, DA = function(t) {
  return t === NA;
}, ux = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && DA(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, GD = function e(t, r) {
  return t === 1 ? r : ux(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(s) {
      return s !== NA;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, ux(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var l = a.map(function(f) {
        return DA(f) ? u.shift() : f;
      });
      return r.apply(void 0, zD(l).concat(u));
    }));
  });
}, Gs = function(t) {
  return GD(t.length, t);
}, cp = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, YD = Gs(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), XD = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return VD;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, i.apply(void 0, arguments));
  };
}, lp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, RA = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, u) {
      return s === r[u];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function ZD(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ae(e).abs().log(10).toNumber()) + 1, t;
}
function JD(e, t, r) {
  for (var n = new Ae(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var QD = Gs(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), eR = Gs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), tR = Gs(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Ys = {
  rangeStep: JD,
  getDigitCount: ZD,
  interpolateNumber: QD,
  uninterpolateNumber: eR,
  uninterpolateTruncation: tR
};
function fp(e) {
  return aR(e) || nR(e) || LA(e) || rR();
}
function rR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nR(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function aR(e) {
  if (Array.isArray(e)) return dp(e);
}
function li(e, t) {
  return sR(e) || oR(e, t) || LA(e, t) || iR();
}
function iR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LA(e, t) {
  if (e) {
    if (typeof e == "string") return dp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dp(e, t);
  }
}
function dp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function oR(e, t) {
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
function sR(e) {
  if (Array.isArray(e)) return e;
}
function qA(e) {
  var t = li(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function BA(e, t, r) {
  if (e.lte(0))
    return new Ae(0);
  var n = Ys.getDigitCount(e.toNumber()), a = new Ae(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new Ae(Math.ceil(i.div(o).toNumber())).add(r).mul(o), u = s.mul(a);
  return t ? u : new Ae(Math.ceil(u));
}
function uR(e, t, r) {
  var n = 1, a = new Ae(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new Ae(10).pow(Ys.getDigitCount(e) - 1), a = new Ae(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new Ae(Math.floor(e)));
  } else e === 0 ? a = new Ae(Math.floor((t - 1) / 2)) : r || (a = new Ae(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = XD(YD(function(u) {
    return a.add(new Ae(u - o).mul(n)).toNumber();
  }), cp);
  return s(0, t);
}
function FA(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ae(0),
      tickMin: new Ae(0),
      tickMax: new Ae(0)
    };
  var i = BA(new Ae(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new Ae(0) : (o = new Ae(e).add(t).div(2), o = o.sub(new Ae(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), u = Math.ceil(new Ae(t).sub(o).div(i).toNumber()), c = s + u + 1;
  return c > r ? FA(e, t, r, n, a + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: i,
    tickMin: o.sub(new Ae(s).mul(i)),
    tickMax: o.add(new Ae(u).mul(i))
  });
}
function cR(e) {
  var t = li(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = qA([r, n]), u = li(s, 2), c = u[0], l = u[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(fp(cp(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(fp(cp(0, a - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? lp(f) : f;
  }
  if (c === l)
    return uR(c, a, i);
  var d = FA(c, l, o, i), p = d.step, y = d.tickMin, h = d.tickMax, v = Ys.rangeStep(y, h.add(new Ae(0.1).mul(p)), p);
  return r > n ? lp(v) : v;
}
function lR(e, t) {
  var r = li(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = qA([n, a]), s = li(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (u === c)
    return [u];
  var l = Math.max(t, 2), f = BA(new Ae(c).sub(u).div(l - 1), i, 0), d = [].concat(fp(Ys.rangeStep(new Ae(u), new Ae(c).sub(new Ae(0.99).mul(f)), f)), [c]);
  return n > a ? lp(d) : d;
}
var fR = RA(cR), dR = RA(lR), pR = process.env.NODE_ENV === "production", Wf = "Invariant failed";
function lt(e, t) {
  if (pR)
    throw new Error(Wf);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Wf, ": ").concat(r) : Wf;
  throw new Error(n);
}
var hR = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Rn(e) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rn(e);
}
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
function vR(e, t) {
  return bR(e) || gR(e, t) || mR(e, t) || yR();
}
function yR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mR(e, t) {
  if (e) {
    if (typeof e == "string") return cx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cx(e, t);
  }
}
function cx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gR(e, t) {
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
function bR(e) {
  if (Array.isArray(e)) return e;
}
function xR(e, t) {
  if (e == null) return {};
  var r = wR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function OR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function SR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, UA(n.key), n);
  }
}
function AR(e, t, r) {
  return t && SR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _R(e, t, r) {
  return t = Ho(t), PR(e, zA() ? Reflect.construct(t, r || [], Ho(e).constructor) : t.apply(e, r));
}
function PR(e, t) {
  if (t && (Rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return TR(e);
}
function TR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zA = function() {
    return !!e;
  })();
}
function Ho(e) {
  return Ho = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ho(e);
}
function ER(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && pp(e, t);
}
function pp(e, t) {
  return pp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, pp(e, t);
}
function WA(e, t, r) {
  return t = UA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UA(e) {
  var t = CR(e, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function CR(e, t) {
  if (Rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ui = /* @__PURE__ */ (function(e) {
  function t() {
    return OR(this, t), _R(this, t, arguments);
  }
  return ER(t, e), AR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = xR(n, hR), p = ie(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? lt(!1, 'ErrorBar requires Axis type property to be "number".') : lt());
      var y = u.map(function(h) {
        var v = c(h, s), b = v.x, g = v.y, x = v.value, O = v.errorVal;
        if (!O)
          return null;
        var m = [], w, A;
        if (Array.isArray(O)) {
          var _ = vR(O, 2);
          w = _[0], A = _[1];
        } else
          w = A = O;
        if (i === "vertical") {
          var P = l.scale, k = g + a, T = k + o, I = k - o, j = P(x - w), M = P(x + A);
          m.push({
            x1: M,
            y1: T,
            x2: M,
            y2: I
          }), m.push({
            x1: j,
            y1: k,
            x2: M,
            y2: k
          }), m.push({
            x1: j,
            y1: T,
            x2: j,
            y2: I
          });
        } else if (i === "horizontal") {
          var $ = f.scale, N = b + a, R = N - o, F = N + o, z = $(x - w), D = $(x + A);
          m.push({
            x1: R,
            y1: D,
            x2: F,
            y2: D
          }), m.push({
            x1: N,
            y1: z,
            x2: N,
            y2: D
          }), m.push({
            x1: R,
            y1: z,
            x2: F,
            y2: z
          });
        }
        return /* @__PURE__ */ C.createElement(pe, Uo({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(q) {
            return "".concat(q.x1, "-").concat(q.x2, "-").concat(q.y1, "-").concat(q.y2);
          }))
        }, p), m.map(function(q) {
          return /* @__PURE__ */ C.createElement("line", Uo({}, q, {
            key: "line-".concat(q.x1, "-").concat(q.x2, "-").concat(q.y1, "-").concat(q.y2)
          }));
        }));
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
})(C.Component);
WA(Ui, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
WA(Ui, "displayName", "ErrorBar");
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
function lx(e, t) {
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
    t % 2 ? lx(Object(r), !0).forEach(function(n) {
      jR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jR(e, t, r) {
  return t = MR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MR(e) {
  var t = $R(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function $R(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HA = function(t) {
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
      color: wv(f),
      value: h || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), kr(kr(kr({}, u), Gr.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
  });
};
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function fx(e) {
  return DR(e) || NR(e) || kR(e) || IR();
}
function IR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kR(e, t) {
  if (e) {
    if (typeof e == "string") return hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hp(e, t);
  }
}
function NR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function DR(e) {
  if (Array.isArray(e)) return hp(e);
}
function hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function dx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dx(Object(r), !0).forEach(function(n) {
      Tn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Tn(e, t, r) {
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
function Le(e, t, r) {
  return le(e) || le(t) ? r : Ye(t) ? bt(e, t, r) : ue(t) ? t(e) : r;
}
function qa(e, t, r, n) {
  var a = LD(e, function(s) {
    return Le(s, t);
  });
  if (r === "number") {
    var i = a.filter(function(s) {
      return G(s) || parseFloat(s);
    });
    return i.length ? [Vs(i), wr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(s) {
    return !le(s);
  }) : a;
  return o.map(function(s) {
    return Ye(s) || s instanceof Date ? s : "";
  });
}
var qR = function(t) {
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
}, wv = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? De(De({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, s = i.fill, u;
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
}, BR = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), u = 0, c = s.length; u < c; u++)
    for (var l = i[s[u]].stackGroups, f = Object.keys(l), d = 0, p = f.length; d < p; d++) {
      var y = l[f[d]], h = y.items, v = y.cateAxisId, b = h.filter(function(A) {
        return or(A.type).indexOf("Bar") >= 0;
      });
      if (b && b.length) {
        var g = b[0].type.defaultProps, x = g !== void 0 ? De(De({}, g), b[0].props) : b[0].props, O = x.barSize, m = x[v];
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
}, FR = function(t) {
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
      }, A = [].concat(fx(O), [w]);
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
      var A = [].concat(fx(O), [{
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
}, zR = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = HA({
    children: i,
    legendWidth: u
  });
  if (c) {
    var l = a || {}, f = l.width, d = l.height, p = c.align, y = c.verticalAlign, h = c.layout;
    if ((h === "vertical" || h === "horizontal" && y === "middle") && p !== "center" && G(t[p]))
      return De(De({}, t), {}, Tn({}, p, t[p] + (f || 0)));
    if ((h === "horizontal" || h === "vertical" && p === "center") && y !== "middle" && G(t[y]))
      return De(De({}, t), {}, Tn({}, y, t[y] + (d || 0)));
  }
  return t;
}, WR = function(t, r, n) {
  return le(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, KA = function(t, r, n, a, i) {
  var o = r.props.children, s = xt(o, Ui).filter(function(c) {
    return WR(a, i, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = Le(l, n);
      if (le(f)) return c;
      var d = Array.isArray(f) ? [Vs(f), wr(f)] : [f, f], p = u.reduce(function(y, h) {
        var v = Le(l, h, 0), b = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), g = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(b, y[0]), Math.max(g, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, UR = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return KA(t, s, n, i, a);
  }).filter(function(s) {
    return !le(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, VA = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && KA(t, u, c, a) || qa(t, c, n, i);
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
}, GA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, YA = function(t, r, n, a) {
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
      return !ia(f.coordinate);
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
}, Uf = /* @__PURE__ */ new WeakMap(), uo = function(t, r) {
  if (typeof r != "function")
    return t;
  Uf.has(t) || Uf.set(t, /* @__PURE__ */ new WeakMap());
  var n = Uf.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, XA = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: ai(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: qo(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: La(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: ai(),
      realScaleType: "band"
    } : {
      scale: qo(),
      realScaleType: "linear"
    };
  if (qi(a)) {
    var u = "scale".concat(Is(a));
    return {
      scale: (J0[u] || La)(),
      realScaleType: J0[u] ? u : "point"
    };
  }
  return ue(a) ? {
    scale: a
  } : {
    scale: La(),
    realScaleType: "point"
  };
}, px = 1e-4, ZA = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - px, o = Math.max(a[0], a[1]) + px, s = t(r[0]), u = t(r[n - 1]);
    (s < i || s > o || u < i || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, HR = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, KR = function(t, r) {
  if (!r || r.length !== 2 || !G(r[0]) || !G(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!G(t[0]) || t[0] < n) && (i[0] = n), (!G(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, VR = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var u = ia(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + u, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, GR = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = ia(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, YR = {
  sign: VR,
  // @ts-expect-error definitelytyped types are incorrect
  expand: pM,
  // @ts-expect-error definitelytyped types are incorrect
  none: Cn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: hM,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: vM,
  positive: GR
}, XR = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = YR[n], o = dM().keys(a).value(function(s, u) {
    return +Le(s, u, 0);
  }).order(Ud).offset(i);
  return o(t);
}, ZR = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, u = {}, c = s.reduce(function(f, d) {
    var p, y = (p = d.type) !== null && p !== void 0 && p.defaultProps ? De(De({}, d.type.defaultProps), d.props) : d.props, h = y.stackId, v = y.hide;
    if (v)
      return f;
    var b = y[n], g = f[b] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Ye(h)) {
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
    return De(De({}, f), {}, Tn({}, b, g));
  }, u), l = {};
  return Object.keys(c).reduce(function(f, d) {
    var p = c[d];
    if (p.hasStack) {
      var y = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(h, v) {
        var b = p.stackGroups[v];
        return De(De({}, h), {}, Tn({}, v, {
          numericAxisId: n,
          cateAxisId: a,
          items: b.items,
          stackedData: XR(t, b.items, i)
        }));
      }, y);
    }
    return De(De({}, f), {}, Tn({}, d, p));
  }, l);
}, JA = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = fR(c, i, s);
    return t.domain([Vs(l), wr(l)]), {
      niceTicks: l
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = dR(f, i, s);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Ko(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !le(a[t.dataKey])) {
      var s = wo(r, "value", a[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var u = Le(a, le(o) ? t.dataKey : o);
  return le(u) ? null : t.scale(u);
}
var hx = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var u = Le(o, r.dataKey, r.domain[s]);
  return le(u) ? null : r.scale(u) - i / 2 + a;
}, JR = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, QR = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? De(De({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Ye(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, eL = function(t) {
  return t.reduce(function(r, n) {
    return [Vs(n.concat([r[0]]).filter(G)), wr(n.concat([r[1]]).filter(G))];
  }, [1 / 0, -1 / 0]);
}, QA = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, u = s.reduce(function(c, l) {
      var f = eL(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], a[0]), Math.max(u[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, vx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, yx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, vp = function(t, r, n) {
  if (ue(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (G(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (vx.test(t[0])) {
    var i = +vx.exec(t[0])[1];
    a[0] = r[0] - i;
  } else ue(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (G(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (yx.test(t[1])) {
    var o = +yx.exec(t[1])[1];
    a[1] = r[1] + o;
  } else ue(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Vo = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = Yh(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, u = i.length; s < u; s++) {
      var c = i[s], l = i[s - 1];
      o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, mx = function(t, r, n) {
  return !t || !t.length || Qr(t, bt(n, "type.defaultProps.domain")) ? r : t;
}, e_ = function(t, r) {
  var n = t.type.defaultProps ? De(De({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType, l = n.hide;
  return De(De({}, ie(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: s,
    name: i || a,
    color: wv(t),
    value: Le(r, a),
    type: u,
    payload: r,
    chartType: c,
    hide: l
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
function gx(e, t) {
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
    t % 2 ? gx(Object(r), !0).forEach(function(n) {
      t_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function t_(e, t, r) {
  return t = tL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tL(e) {
  var t = rL(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function rL(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function nL(e, t) {
  return sL(e) || oL(e, t) || iL(e, t) || aL();
}
function aL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iL(e, t) {
  if (e) {
    if (typeof e == "string") return bx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bx(e, t);
  }
}
function bx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oL(e, t) {
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
function sL(e) {
  if (Array.isArray(e)) return e;
}
var Go = Math.PI / 180, uL = function(t) {
  return t * 180 / Math.PI;
}, je = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Go * a) * n,
    y: r + Math.sin(-Go * a) * n
  };
}, r_ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, cL = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, l = ot(t.cx, o, o / 2), f = ot(t.cy, s, s / 2), d = r_(o, s, n), p = ot(t.innerRadius, d, 0), y = ot(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(v, b) {
    var g = r[b], x = g.domain, O = g.reversed, m;
    if (le(g.range))
      a === "angleAxis" ? m = [u, c] : a === "radiusAxis" && (m = [p, y]), O && (m = [m[1], m[0]]);
    else {
      m = g.range;
      var w = m, A = nL(w, 2);
      u = A[0], c = A[1];
    }
    var _ = XA(g, i), P = _.realScaleType, k = _.scale;
    k.domain(x).range(m), ZA(k);
    var T = JA(k, rr(rr({}, g), {}, {
      realScaleType: P
    })), I = rr(rr(rr({}, g), T), {}, {
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
    return rr(rr({}, v), {}, t_({}, b, I));
  }, {});
}, lL = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, fL = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = lL({
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
    angle: uL(c),
    angleInRadian: c
  };
}, dL = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, pL = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, xx = function(t, r) {
  var n = t.x, a = t.y, i = fL({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = dL(r), f = l.startAngle, d = l.endAngle, p = s, y;
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
    angle: pL(p, r)
  }) : null;
}, n_ = function(t) {
  return !/* @__PURE__ */ Dt(t) && !ue(t) && typeof t != "boolean" ? t.className : "";
};
function hi(e) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hi(e);
}
var hL = ["offset"];
function vL(e) {
  return bL(e) || gL(e) || mL(e) || yL();
}
function yL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mL(e, t) {
  if (e) {
    if (typeof e == "string") return yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yp(e, t);
  }
}
function gL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bL(e) {
  if (Array.isArray(e)) return yp(e);
}
function yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xL(e, t) {
  if (e == null) return {};
  var r = wL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wx(Object(r), !0).forEach(function(n) {
      OL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OL(e, t, r) {
  return t = SL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SL(e) {
  var t = AL(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function AL(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vi.apply(this, arguments);
}
var _L = function(t) {
  var r = t.value, n = t.formatter, a = le(t.children) ? r : t.children;
  return ue(n) ? n(a) : a;
}, PL = function(t, r) {
  var n = it(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, TL = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, u = i, c = u.cx, l = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, y = u.endAngle, h = u.clockWise, v = (f + d) / 2, b = PL(p, y), g = b >= 0 ? 1 : -1, x, O;
  a === "insideStart" ? (x = p + g * o, O = h) : a === "insideEnd" ? (x = y - g * o, O = !h) : a === "end" && (x = y + g * o, O = h), O = b <= 0 ? O : !O;
  var m = je(c, l, v, x), w = je(c, l, v, x + (O ? 1 : -1) * 359), A = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), _ = le(t.id) ? sn("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ C.createElement("text", vi({}, n, {
    dominantBaseline: "central",
    className: de("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("path", {
    id: _,
    d: A
  })), /* @__PURE__ */ C.createElement("textPath", {
    xlinkHref: "#".concat(_)
  }, r));
}, EL = function(t) {
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
}, CL = function(t) {
  var r = t.viewBox, n = t.parentViewBox, a = t.offset, i = t.position, o = r, s = o.x, u = o.y, c = o.width, l = o.height, f = l >= 0 ? 1 : -1, d = f * a, p = f > 0 ? "end" : "start", y = f > 0 ? "start" : "end", h = c >= 0 ? 1 : -1, v = h * a, b = h > 0 ? "end" : "start", g = h > 0 ? "start" : "end";
  if (i === "top") {
    var x = {
      x: s + c / 2,
      y: u - f * a,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return Ue(Ue({}, x), n ? {
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
    return Ue(Ue({}, O), n ? {
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
    return Ue(Ue({}, m), n ? {
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
    return Ue(Ue({}, w), n ? {
      width: Math.max(n.x + n.width - w.x, 0),
      height: l
    } : {});
  }
  var A = n ? {
    width: c,
    height: l
  } : {};
  return i === "insideLeft" ? Ue({
    x: s + v,
    y: u + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, A) : i === "insideRight" ? Ue({
    x: s + c - v,
    y: u + l / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, A) : i === "insideTop" ? Ue({
    x: s + c / 2,
    y: u + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, A) : i === "insideBottom" ? Ue({
    x: s + c / 2,
    y: u + l - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, A) : i === "insideTopLeft" ? Ue({
    x: s + v,
    y: u + d,
    textAnchor: g,
    verticalAnchor: y
  }, A) : i === "insideTopRight" ? Ue({
    x: s + c - v,
    y: u + d,
    textAnchor: b,
    verticalAnchor: y
  }, A) : i === "insideBottomLeft" ? Ue({
    x: s + v,
    y: u + l - d,
    textAnchor: g,
    verticalAnchor: p
  }, A) : i === "insideBottomRight" ? Ue({
    x: s + c - v,
    y: u + l - d,
    textAnchor: b,
    verticalAnchor: p
  }, A) : aa(i) && (G(i.x) || Fr(i.x)) && (G(i.y) || Fr(i.y)) ? Ue({
    x: s + ot(i.x, c),
    y: u + ot(i.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, A) : Ue({
    x: s + c / 2,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, A);
}, jL = function(t) {
  return "cx" in t && G(t.cx);
};
function Ge(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = xL(e, hL), a = Ue({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, u = a.children, c = a.content, l = a.className, f = l === void 0 ? "" : l, d = a.textBreakAll;
  if (!i || le(s) && le(u) && !/* @__PURE__ */ Dt(c) && !ue(c))
    return null;
  if (/* @__PURE__ */ Dt(c))
    return /* @__PURE__ */ He(c, a);
  var p;
  if (ue(c)) {
    if (p = /* @__PURE__ */ iO(c, a), /* @__PURE__ */ Dt(p))
      return p;
  } else
    p = _L(a);
  var y = jL(i), h = ie(a, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return TL(a, p, h);
  var v = y ? EL(a) : CL(a);
  return /* @__PURE__ */ C.createElement(_r, vi({
    className: de("recharts-label", f)
  }, h, v, {
    breakAll: d
  }), p);
}
Ge.displayName = "Label";
var a_ = function(t) {
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
}, ML = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ C.createElement(Ge, {
    key: "label-implicit",
    viewBox: r
  }) : Ye(t) ? /* @__PURE__ */ C.createElement(Ge, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Dt(t) ? t.type === Ge ? /* @__PURE__ */ He(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ C.createElement(Ge, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ue(t) ? /* @__PURE__ */ C.createElement(Ge, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : aa(t) ? /* @__PURE__ */ C.createElement(Ge, vi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, $L = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = a_(t), o = xt(a, Ge).map(function(u, c) {
    return /* @__PURE__ */ He(u, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = ML(t.label, r || i);
  return [s].concat(vL(o));
};
Ge.parseViewBox = a_;
Ge.renderCallByParent = $L;
var Hf, Ox;
function IL() {
  if (Ox) return Hf;
  Ox = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Hf = e, Hf;
}
var kL = IL();
const NL = /* @__PURE__ */ _e(kL);
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
var DL = ["valueAccessor"], RL = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function LL(e) {
  return zL(e) || FL(e) || BL(e) || qL();
}
function qL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BL(e, t) {
  if (e) {
    if (typeof e == "string") return mp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mp(e, t);
  }
}
function FL(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zL(e) {
  if (Array.isArray(e)) return mp(e);
}
function mp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yo.apply(this, arguments);
}
function Sx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ax(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sx(Object(r), !0).forEach(function(n) {
      WL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WL(e, t, r) {
  return t = UL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UL(e) {
  var t = HL(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function HL(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _x(e, t) {
  if (e == null) return {};
  var r = KL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KL(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var VL = function(t) {
  return Array.isArray(t.value) ? NL(t.value) : t.value;
};
function Tt(e) {
  var t = e.valueAccessor, r = t === void 0 ? VL : t, n = _x(e, DL), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = _x(n, RL);
  return !a || !a.length ? null : /* @__PURE__ */ C.createElement(pe, {
    className: "recharts-label-list"
  }, a.map(function(l, f) {
    var d = le(i) ? r(l, f) : Le(l && l.payload, i), p = le(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ C.createElement(Ge, Yo({}, ie(l, !0), c, p, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: u,
      viewBox: Ge.parseViewBox(le(o) ? l : Ax(Ax({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Tt.displayName = "LabelList";
function GL(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ C.createElement(Tt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ C.isValidElement(e) || ue(e) ? /* @__PURE__ */ C.createElement(Tt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : aa(e) ? /* @__PURE__ */ C.createElement(Tt, Yo({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function YL(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = xt(n, Tt).map(function(o, s) {
    return /* @__PURE__ */ He(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = GL(e.label, t);
  return [i].concat(LL(a));
}
Tt.renderCallByParent = YL;
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function gp() {
  return gp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gp.apply(this, arguments);
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
      XL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Px(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XL(e, t, r) {
  return t = ZL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZL(e) {
  var t = JL(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function JL(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var QL = function(t, r) {
  var n = it(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, co = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, l = u * (s ? 1 : -1) + a, f = Math.asin(u / l) / Go, d = c ? i : i + o * f, p = je(r, n, l, d), y = je(r, n, a, d), h = c ? i - o * f : i, v = je(r, n, l * Math.cos(f * Go), h);
  return {
    center: p,
    circleTangency: y,
    lineTangency: v,
    theta: f
  };
}, i_ = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, u = QL(o, s), c = o + u, l = je(r, n, i, o), f = je(r, n, i, c), d = "M ".concat(l.x, ",").concat(l.y, `
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
}, eq = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, l = t.endAngle, f = it(l - c), d = co({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, y = d.lineTangency, h = d.theta, v = co({
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
      `) : i_({
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
    var w = co({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), A = w.circleTangency, _ = w.lineTangency, P = w.theta, k = co({
      cx: r,
      cy: n,
      radius: a,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), T = k.circleTangency, I = k.lineTangency, j = k.theta, M = u ? Math.abs(c - l) : Math.abs(c - l) - P - j;
    if (M < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat(I.x, ",").concat(I.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(M > 180), ",").concat(+(f > 0), ",").concat(A.x, ",").concat(A.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(_.x, ",").concat(_.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, tq = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, o_ = function(t) {
  var r = Tx(Tx({}, tq), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || l === f)
    return null;
  var p = de("recharts-sector", d), y = o - i, h = ot(s, y, 0, !0), v;
  return h > 0 && Math.abs(l - f) < 360 ? v = eq({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(h, y / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: l,
    endAngle: f
  }) : v = i_({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ C.createElement("path", gp({}, ie(r, !0), {
    className: p,
    d: v,
    role: "img"
  }));
};
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function bp() {
  return bp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bp.apply(this, arguments);
}
function Ex(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ex(Object(r), !0).forEach(function(n) {
      rq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ex(Object(r)).forEach(function(n) {
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
var jx = {
  curveBasisClosed: tM,
  curveBasisOpen: rM,
  curveBasis: eM,
  curveBumpX: B2,
  curveBumpY: F2,
  curveLinearClosed: nM,
  curveLinear: Ns,
  curveMonotoneX: aM,
  curveMonotoneY: iM,
  curveNatural: oM,
  curveStep: sM,
  curveStepAfter: cM,
  curveStepBefore: uM
}, lo = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, _a = function(t) {
  return t.x;
}, Pa = function(t) {
  return t.y;
}, iq = function(t, r) {
  if (ue(t))
    return t;
  var n = "curve".concat(Is(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? jx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : jx[n] || Ns;
}, oq = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, l = iq(n, s), f = c ? i.filter(function(h) {
    return lo(h);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(h) {
      return lo(h);
    }) : o, y = f.map(function(h, v) {
      return Cx(Cx({}, h), {}, {
        base: p[v]
      });
    });
    return s === "vertical" ? d = to().y(Pa).x1(_a).x0(function(h) {
      return h.base.x;
    }) : d = to().x(_a).y1(Pa).y0(function(h) {
      return h.base.y;
    }), d.defined(lo).curve(l), d(y);
  }
  return s === "vertical" && G(o) ? d = to().y(Pa).x1(_a).x0(o) : G(o) ? d = to().x(_a).y1(Pa).y0(o) : d = vS().x(_a).y(Pa), d.defined(lo).curve(l), d(f);
}, Zr = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? oq(t) : a;
  return /* @__PURE__ */ C.createElement("path", bp({}, ie(t, !1), Oo(t), {
    className: de("recharts-curve", r),
    d: o,
    ref: i
  }));
}, fo = { exports: {} }, po = { exports: {} }, xe = {};
var Mx;
function sq() {
  if (Mx) return xe;
  Mx = 1;
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
var $x;
function uq() {
  return $x || ($x = 1, process.env.NODE_ENV !== "production" && (function() {
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
            var B = E.type;
            switch (B) {
              case u:
              case c:
              case n:
              case i:
              case a:
              case f:
                return B;
              default:
                var ae = B && B.$$typeof;
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
    var m = u, w = c, A = s, _ = o, P = t, k = l, T = n, I = y, j = p, M = r, $ = i, N = a, R = f, F = !1;
    function z(E) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(E) || O(E) === u;
    }
    function D(E) {
      return O(E) === c;
    }
    function q(E) {
      return O(E) === s;
    }
    function L(E) {
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
    function J(E) {
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
    we.AsyncMode = m, we.ConcurrentMode = w, we.ContextConsumer = A, we.ContextProvider = _, we.Element = P, we.ForwardRef = k, we.Fragment = T, we.Lazy = I, we.Memo = j, we.Portal = M, we.Profiler = $, we.StrictMode = N, we.Suspense = R, we.isAsyncMode = z, we.isConcurrentMode = D, we.isContextConsumer = q, we.isContextProvider = L, we.isElement = H, we.isForwardRef = X, we.isFragment = te, we.isLazy = ne, we.isMemo = ee, we.isPortal = J, we.isProfiler = U, we.isStrictMode = V, we.isSuspense = Z, we.isValidElementType = x, we.typeOf = O;
  })()), we;
}
var Ix;
function s_() {
  return Ix || (Ix = 1, process.env.NODE_ENV === "production" ? po.exports = sq() : po.exports = uq()), po.exports;
}
var Kf, kx;
function cq() {
  if (kx) return Kf;
  kx = 1;
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
  return Kf = a() ? Object.assign : function(i, o) {
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
  }, Kf;
}
var Vf, Nx;
function Ov() {
  if (Nx) return Vf;
  Nx = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vf = e, Vf;
}
var Gf, Dx;
function u_() {
  return Dx || (Dx = 1, Gf = Function.call.bind(Object.prototype.hasOwnProperty)), Gf;
}
var Yf, Rx;
function lq() {
  if (Rx) return Yf;
  Rx = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Ov(), r = {}, n = /* @__PURE__ */ u_();
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
  }, Yf = a, Yf;
}
var Xf, Lx;
function fq() {
  if (Lx) return Xf;
  Lx = 1;
  var e = s_(), t = cq(), r = /* @__PURE__ */ Ov(), n = /* @__PURE__ */ u_(), a = /* @__PURE__ */ lq(), i = function() {
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
  return Xf = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(D) {
      var q = D && (c && D[c] || D[l]);
      if (typeof q == "function")
        return q;
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
      shape: I,
      exact: j
    };
    function y(D, q) {
      return D === q ? D !== 0 || 1 / D === 1 / q : D !== D && q !== q;
    }
    function h(D, q) {
      this.message = D, this.data = q && typeof q == "object" ? q : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(D) {
      if (process.env.NODE_ENV !== "production")
        var q = {}, L = 0;
      function H(te, ne, ee, J, U, V, Z) {
        if (J = J || d, V = V || ee, Z !== r) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = J + ":" + ee;
            !q[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            L < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + V + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), q[Y] = !0, L++);
          }
        }
        return ne[ee] == null ? te ? ne[ee] === null ? new h("The " + U + " `" + V + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new h("The " + U + " `" + V + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : D(ne, ee, J, U, V);
      }
      var X = H.bind(null, !1);
      return X.isRequired = H.bind(null, !0), X;
    }
    function b(D) {
      function q(L, H, X, te, ne, ee) {
        var J = L[H], U = N(J);
        if (U !== D) {
          var V = R(J);
          return new h(
            "Invalid " + te + " `" + ne + "` of type " + ("`" + V + "` supplied to `" + X + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return v(q);
    }
    function g() {
      return v(o);
    }
    function x(D) {
      function q(L, H, X, te, ne) {
        if (typeof D != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var ee = L[H];
        if (!Array.isArray(ee)) {
          var J = N(ee);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected an array."));
        }
        for (var U = 0; U < ee.length; U++) {
          var V = D(ee, U, X, te, ne + "[" + U + "]", r);
          if (V instanceof Error)
            return V;
        }
        return null;
      }
      return v(q);
    }
    function O() {
      function D(q, L, H, X, te) {
        var ne = q[L];
        if (!s(ne)) {
          var ee = N(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(D);
    }
    function m() {
      function D(q, L, H, X, te) {
        var ne = q[L];
        if (!e.isValidElementType(ne)) {
          var ee = N(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(D);
    }
    function w(D) {
      function q(L, H, X, te, ne) {
        if (!(L[H] instanceof D)) {
          var ee = D.name || d, J = z(L[H]);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return v(q);
    }
    function A(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function q(L, H, X, te, ne) {
        for (var ee = L[H], J = 0; J < D.length; J++)
          if (y(ee, D[J]))
            return null;
        var U = JSON.stringify(D, function(Z, E) {
          var Y = R(E);
          return Y === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + te + " `" + ne + "` of value `" + String(ee) + "` " + ("supplied to `" + X + "`, expected one of " + U + "."));
      }
      return v(q);
    }
    function _(D) {
      function q(L, H, X, te, ne) {
        if (typeof D != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var ee = L[H], J = N(ee);
        if (J !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + J + "` supplied to `" + X + "`, expected an object."));
        for (var U in ee)
          if (n(ee, U)) {
            var V = D(ee, U, X, te, ne + "." + U, r);
            if (V instanceof Error)
              return V;
          }
        return null;
      }
      return v(q);
    }
    function P(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var q = 0; q < D.length; q++) {
        var L = D[q];
        if (typeof L != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + F(L) + " at index " + q + "."
          ), o;
      }
      function H(X, te, ne, ee, J) {
        for (var U = [], V = 0; V < D.length; V++) {
          var Z = D[V], E = Z(X, te, ne, ee, J, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && U.push(E.data.expectedType);
        }
        var Y = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new h("Invalid " + ee + " `" + J + "` supplied to " + ("`" + ne + "`" + Y + "."));
      }
      return v(H);
    }
    function k() {
      function D(q, L, H, X, te) {
        return M(q[L]) ? null : new h("Invalid " + X + " `" + te + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return v(D);
    }
    function T(D, q, L, H, X) {
      return new h(
        (D || "React class") + ": " + q + " type `" + L + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function I(D) {
      function q(L, H, X, te, ne) {
        var ee = L[H], J = N(ee);
        if (J !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + J + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var U in D) {
          var V = D[U];
          if (typeof V != "function")
            return T(X, te, ne, U, R(V));
          var Z = V(ee, U, X, te, ne + "." + U, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return v(q);
    }
    function j(D) {
      function q(L, H, X, te, ne) {
        var ee = L[H], J = N(ee);
        if (J !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + J + "` " + ("supplied to `" + X + "`, expected `object`."));
        var U = t({}, L[H], D);
        for (var V in U) {
          var Z = D[V];
          if (n(D, V) && typeof Z != "function")
            return T(X, te, ne, V, R(Z));
          if (!Z)
            return new h(
              "Invalid " + te + " `" + ne + "` key `" + V + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(L[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var E = Z(ee, V, X, te, ne + "." + V, r);
          if (E)
            return E;
        }
        return null;
      }
      return v(q);
    }
    function M(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(M);
          if (D === null || s(D))
            return !0;
          var q = f(D);
          if (q) {
            var L = q.call(D), H;
            if (q !== D.entries) {
              for (; !(H = L.next()).done; )
                if (!M(H.value))
                  return !1;
            } else
              for (; !(H = L.next()).done; ) {
                var X = H.value;
                if (X && !M(X[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(D, q) {
      return D === "symbol" ? !0 : q ? q["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && q instanceof Symbol : !1;
    }
    function N(D) {
      var q = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : $(q, D) ? "symbol" : q;
    }
    function R(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var q = N(D);
      if (q === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return q;
    }
    function F(D) {
      var q = R(D);
      switch (q) {
        case "array":
        case "object":
          return "an " + q;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + q;
        default:
          return q;
      }
    }
    function z(D) {
      return !D.constructor || !D.constructor.name ? d : D.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, Xf;
}
var Zf, qx;
function dq() {
  if (qx) return Zf;
  qx = 1;
  var e = /* @__PURE__ */ Ov();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Zf = function() {
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
  }, Zf;
}
var Bx;
function pq() {
  if (Bx) return fo.exports;
  if (Bx = 1, process.env.NODE_ENV !== "production") {
    var e = s_(), t = !0;
    fo.exports = /* @__PURE__ */ fq()(e.isElement, t);
  } else
    fo.exports = /* @__PURE__ */ dq()();
  return fo.exports;
}
var hq = /* @__PURE__ */ pq();
const Oe = /* @__PURE__ */ _e(hq);
var vq = Object.getOwnPropertyNames, yq = Object.getOwnPropertySymbols, mq = Object.prototype.hasOwnProperty;
function Fx(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function ho(e) {
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
function zx(e) {
  return vq(e).concat(yq(e));
}
var gq = Object.hasOwn || (function(e, t) {
  return mq.call(e, t);
});
function ln(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var bq = "__v", xq = "__o", wq = "_owner", Wx = Object.getOwnPropertyDescriptor, Ux = Object.keys;
function Oq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function Sq(e, t) {
  return ln(e.getTime(), t.getTime());
}
function Aq(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function _q(e, t) {
  return e === t;
}
function Hx(e, t, r) {
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
var Pq = ln;
function Tq(e, t, r) {
  var n = Ux(e), a = n.length;
  if (Ux(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!c_(e, t, r, n[a]))
      return !1;
  return !0;
}
function Ta(e, t, r) {
  var n = zx(e), a = n.length;
  if (zx(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !c_(e, t, r, i) || (o = Wx(e, i), s = Wx(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function Eq(e, t) {
  return ln(e.valueOf(), t.valueOf());
}
function Cq(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Kx(e, t, r) {
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
function jq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Mq(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function c_(e, t, r, n) {
  return (n === wq || n === xq || n === bq) && (e.$$typeof || t.$$typeof) ? !0 : gq(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var $q = "[object Arguments]", Iq = "[object Boolean]", kq = "[object Date]", Nq = "[object Error]", Dq = "[object Map]", Rq = "[object Number]", Lq = "[object Object]", qq = "[object RegExp]", Bq = "[object Set]", Fq = "[object String]", zq = "[object URL]", Wq = Array.isArray, Vx = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Gx = Object.assign, Uq = Object.prototype.toString.call.bind(Object.prototype.toString);
function Hq(e) {
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
    if (Wq(y))
      return t(y, h, v);
    if (Vx != null && Vx(y))
      return f(y, h, v);
    if (g === Date)
      return r(y, h, v);
    if (g === RegExp)
      return c(y, h, v);
    if (g === Map)
      return i(y, h, v);
    if (g === Set)
      return l(y, h, v);
    var x = Uq(y);
    return x === kq ? r(y, h, v) : x === qq ? c(y, h, v) : x === Dq ? i(y, h, v) : x === Bq ? l(y, h, v) : x === Lq ? typeof y.then != "function" && typeof h.then != "function" && s(y, h, v) : x === zq ? d(y, h, v) : x === Nq ? n(y, h, v) : x === $q ? s(y, h, v) : x === Iq || x === Rq || x === Fq ? u(y, h, v) : !1;
  };
}
function Kq(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? Ta : Oq,
    areDatesEqual: Sq,
    areErrorsEqual: Aq,
    areFunctionsEqual: _q,
    areMapsEqual: n ? Fx(Hx, Ta) : Hx,
    areNumbersEqual: Pq,
    areObjectsEqual: n ? Ta : Tq,
    arePrimitiveWrappersEqual: Eq,
    areRegExpsEqual: Cq,
    areSetsEqual: n ? Fx(Kx, Ta) : Kx,
    areTypedArraysEqual: n ? Ta : jq,
    areUrlsEqual: Mq
  };
  if (r && (a = Gx({}, a, r(a))), t) {
    var i = ho(a.areArraysEqual), o = ho(a.areMapsEqual), s = ho(a.areObjectsEqual), u = ho(a.areSetsEqual);
    a = Gx({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return a;
}
function Vq(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function Gq(e) {
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
var Yq = Mr();
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
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = Kq(e), u = Hq(s), c = n ? n(u) : Vq(u);
  return Gq({ circular: r, comparator: u, createState: a, equals: c, strict: o });
}
function Xq(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Yx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : Xq(a);
  };
  requestAnimationFrame(n);
}
function xp(e) {
  "@babel/helpers - typeof";
  return xp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xp(e);
}
function Zq(e) {
  return tB(e) || eB(e) || Qq(e) || Jq();
}
function Jq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qq(e, t) {
  if (e) {
    if (typeof e == "string") return Xx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Xx(e, t);
  }
}
function Xx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tB(e) {
  if (Array.isArray(e)) return e;
}
function rB() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = Zq(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          Yx(a.bind(null, c), u);
          return;
        }
        a(u), Yx(a.bind(null, c));
        return;
      }
      xp(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
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
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function Zx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zx(Object(r), !0).forEach(function(n) {
      l_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l_(e, t, r) {
  return t = nB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nB(e) {
  var t = aB(e, "string");
  return bi(t) === "symbol" ? t : String(t);
}
function aB(e, t) {
  if (bi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var iB = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, oB = function(t) {
  return t;
}, sB = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Ba = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return Jx(Jx({}, n), {}, l_({}, a, t(a, r[a])));
  }, {});
}, Qx = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(sB(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, uB = process.env.NODE_ENV !== "production", Xo = function(t, r, n, a, i, o, s, u) {
  if (uB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, s, u], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function cB(e, t) {
  return dB(e) || fB(e, t) || f_(e, t) || lB();
}
function lB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fB(e, t) {
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
function dB(e) {
  if (Array.isArray(e)) return e;
}
function pB(e) {
  return yB(e) || vB(e) || f_(e) || hB();
}
function hB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f_(e, t) {
  if (e) {
    if (typeof e == "string") return wp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wp(e, t);
  }
}
function vB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function yB(e) {
  if (Array.isArray(e)) return wp(e);
}
function wp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Zo = 1e-4, d_ = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, p_ = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, e1 = function(t, r) {
  return function(n) {
    var a = d_(t, r);
    return p_(a, n);
  };
}, mB = function(t, r) {
  return function(n) {
    var a = d_(t, r), i = [].concat(pB(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return p_(i, n);
  };
}, t1 = function() {
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
          }), l = cB(c, 4);
          a = l[0], i = l[1], o = l[2], s = l[3];
        } else
          Xo(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Xo([a, o, i, s].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = e1(a, o), d = e1(i, s), p = mB(a, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, h = function(b) {
    for (var g = b > 1 ? 1 : b, x = g, O = 0; O < 8; ++O) {
      var m = f(x) - g, w = p(x);
      if (Math.abs(m - g) < Zo || w < Zo)
        return d(x);
      x = y(x - m / w);
    }
    return d(x);
  };
  return h.isStepper = !1, h;
}, gB = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, u = function(l, f, d) {
    var p = -(l - f) * n, y = d * i, h = d + (p - y) * s / 1e3, v = d * s / 1e3 + l;
    return Math.abs(v - f) < Zo && Math.abs(h) < Zo ? [f, 0] : [v, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, bB = function() {
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
        return t1(a);
      case "spring":
        return gB();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return t1(a);
        Xo(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Xo(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function r1(e) {
  return OB(e) || wB(e) || h_(e) || xB();
}
function xB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function OB(e) {
  if (Array.isArray(e)) return Sp(e);
}
function n1(e, t) {
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
    t % 2 ? n1(Object(r), !0).forEach(function(n) {
      Op(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Op(e, t, r) {
  return t = SB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SB(e) {
  var t = AB(e, "string");
  return xi(t) === "symbol" ? t : String(t);
}
function AB(e, t) {
  if (xi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _B(e, t) {
  return EB(e) || TB(e, t) || h_(e, t) || PB();
}
function PB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h_(e, t) {
  if (e) {
    if (typeof e == "string") return Sp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sp(e, t);
  }
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function TB(e, t) {
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
function EB(e) {
  if (Array.isArray(e)) return e;
}
var Jo = function(t, r, n) {
  return t + (r - t) * n;
}, Ap = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, CB = function e(t, r, n) {
  var a = Ba(function(i, o) {
    if (Ap(o)) {
      var s = t(o.from, o.to, o.velocity), u = _B(s, 2), c = u[0], l = u[1];
      return et(et({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? Ba(function(i, o) {
    return Ap(o) ? et(et({}, o), {}, {
      velocity: Jo(o.velocity, a[i].velocity, n),
      from: Jo(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const jB = (function(e, t, r, n, a) {
  var i = iB(e, t), o = i.reduce(function(v, b) {
    return et(et({}, v), {}, Op({}, b, [e[b], t[b]]));
  }, {}), s = i.reduce(function(v, b) {
    return et(et({}, v), {}, Op({}, b, {
      from: e[b],
      velocity: 0,
      to: t[b]
    }));
  }, {}), u = -1, c, l, f = function() {
    return null;
  }, d = function() {
    return Ba(function(b, g) {
      return g.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(Ap).length;
  }, y = function(b) {
    c || (c = b);
    var g = b - c, x = g / r.dt;
    s = CB(r, s, x), a(et(et(et({}, e), t), d())), c = b, p() || (u = requestAnimationFrame(f));
  }, h = function(b) {
    l || (l = b);
    var g = (b - l) / n, x = Ba(function(m, w) {
      return Jo.apply(void 0, r1(w).concat([r(g)]));
    }, o);
    if (a(et(et(et({}, e), t), x)), g < 1)
      u = requestAnimationFrame(f);
    else {
      var O = Ba(function(m, w) {
        return Jo.apply(void 0, r1(w).concat([r(1)]));
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
var MB = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function $B(e, t) {
  if (e == null) return {};
  var r = IB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Jf(e) {
  return RB(e) || DB(e) || NB(e) || kB();
}
function kB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NB(e, t) {
  if (e) {
    if (typeof e == "string") return _p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _p(e, t);
  }
}
function DB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function RB(e) {
  if (Array.isArray(e)) return _p(e);
}
function _p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function a1(e, t) {
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
    t % 2 ? a1(Object(r), !0).forEach(function(n) {
      ka(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ka(e, t, r) {
  return t = v_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, v_(n.key), n);
  }
}
function BB(e, t, r) {
  return t && qB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function v_(e) {
  var t = FB(e, "string");
  return Ln(t) === "symbol" ? t : String(t);
}
function FB(e, t) {
  if (Ln(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pp(e, t);
}
function Pp(e, t) {
  return Pp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Pp(e, t);
}
function WB(e) {
  var t = UB();
  return function() {
    var n = Qo(e), a;
    if (t) {
      var i = Qo(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Tp(this, a);
  };
}
function Tp(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ep(e);
}
function Ep(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function UB() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qo(e) {
  return Qo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qo(e);
}
var Bt = /* @__PURE__ */ (function(e) {
  zB(r, e);
  var t = WB(r);
  function r(n, a) {
    var i;
    LB(this, r), i = t.call(this, n, a);
    var o = i.props, s = o.isActive, u = o.attributeName, c = o.from, l = o.to, f = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(Ep(i)), i.changeStyle = i.changeStyle.bind(Ep(i)), !s || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: l
      }), Tp(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, Tp(i);
      i.state = {
        style: u ? ka({}, u, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return BB(r, [{
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
            style: u ? ka({}, u, l) : l
          };
          this.state && d && (u && d[u] !== l || !u && d !== l) && this.setState(p);
          return;
        }
        if (!(Yq(a.to, l) && a.canBegin && a.isActive)) {
          var y = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var h = y || c ? f : a.to;
          if (this.state && d) {
            var v = {
              style: u ? ka({}, u, h) : h
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
      var i = this, o = a.from, s = a.to, u = a.duration, c = a.easing, l = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = jB(o, s, bB(c), u, this.changeStyle), y = function() {
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
          return [].concat(Jf(h), [i.runJSAnimation.bind(i, {
            from: _.style,
            to: m,
            duration: g,
            easing: O
          }), g]);
        var k = Qx(P, g, O), T = $t($t($t({}, _.style), m), {}, {
          transition: k
        });
        return [].concat(Jf(h), [T, g, A]).filter(oB);
      };
      return this.manager.start([u].concat(Jf(o.reduce(p, [l, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = rB());
      var i = a.begin, o = a.duration, s = a.attributeName, u = a.to, c = a.easing, l = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var h = s ? ka({}, s, u) : u, v = Qx(Object.keys(h), o, c);
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
      var u = $B(a, MB), c = Kr.count(i), l = this.state.style;
      if (typeof i == "function")
        return i(l);
      if (!s || c === 0 || o <= 0)
        return i;
      var f = function(p) {
        var y = p.props, h = y.style, v = h === void 0 ? {} : h, b = y.className, g = /* @__PURE__ */ He(p, $t($t({}, u), {}, {
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
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function es() {
  return es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, es.apply(this, arguments);
}
function HB(e, t) {
  return YB(e) || GB(e, t) || VB(e, t) || KB();
}
function KB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VB(e, t) {
  if (e) {
    if (typeof e == "string") return i1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i1(e, t);
  }
}
function i1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function GB(e, t) {
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
function YB(e) {
  if (Array.isArray(e)) return e;
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
function s1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o1(Object(r), !0).forEach(function(n) {
      XB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XB(e, t, r) {
  return t = ZB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZB(e) {
  var t = JB(e, "string");
  return wi(t) == "symbol" ? t : t + "";
}
function JB(e, t) {
  if (wi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var u1 = function(t, r, n, a, i) {
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
}, QB = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(i, i + s), l = Math.max(i, i + s), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= l && a >= f && a <= d;
  }
  return !1;
}, e3 = {
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
}, Sv = function(t) {
  var r = s1(s1({}, e3), t), n = Me(), a = he(-1), i = HB(a, 2), o = i[0], s = i[1];
  qe(function() {
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
    }, /* @__PURE__ */ C.createElement("path", es({}, ie(r, !0), {
      className: x,
      d: u1(A, _, m, w, d),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("path", es({}, ie(r, !0), {
    className: x,
    d: u1(u, c, l, f, d)
  }));
}, t3 = ["points", "className", "baseLinePoints", "connectNulls"];
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
function r3(e, t) {
  if (e == null) return {};
  var r = n3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function n3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function c1(e) {
  return s3(e) || o3(e) || i3(e) || a3();
}
function a3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i3(e, t) {
  if (e) {
    if (typeof e == "string") return Cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cp(e, t);
  }
}
function o3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function s3(e) {
  if (Array.isArray(e)) return Cp(e);
}
function Cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var l1 = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, u3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    l1(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), l1(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, Fa = function(t, r) {
  var n = u3(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(c1(i), c1(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, c3 = function(t, r, n) {
  var a = Fa(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(Fa(r.reverse(), n).slice(1));
}, l3 = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = r3(t, t3);
  if (!r || !r.length)
    return null;
  var s = de("recharts-polygon", n);
  if (a && a.length) {
    var u = o.stroke && o.stroke !== "none", c = c3(r, a, i);
    return /* @__PURE__ */ C.createElement("g", {
      className: s
    }, /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), u ? /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
      fill: "none",
      d: Fa(r, i)
    })) : null, u ? /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
      fill: "none",
      d: Fa(a, i)
    })) : null);
  }
  var l = Fa(r, i);
  return /* @__PURE__ */ C.createElement("path", wn({}, ie(o, !0), {
    fill: l.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: l
  }));
};
function jp() {
  return jp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jp.apply(this, arguments);
}
var Hi = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = de("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ C.createElement("circle", jp({}, ie(t, !1), Oo(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
var f3 = ["x", "y", "top", "left", "width", "height", "className"];
function Mp() {
  return Mp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mp.apply(this, arguments);
}
function f1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function d3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? f1(Object(r), !0).forEach(function(n) {
      p3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p3(e, t, r) {
  return t = h3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h3(e) {
  var t = v3(e, "string");
  return Oi(t) == "symbol" ? t : t + "";
}
function v3(e, t) {
  if (Oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function y3(e, t) {
  if (e == null) return {};
  var r = m3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function m3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var g3 = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, b3 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, l = t.width, f = l === void 0 ? 0 : l, d = t.height, p = d === void 0 ? 0 : d, y = t.className, h = y3(t, f3), v = d3({
    x: n,
    y: i,
    top: s,
    left: c,
    width: f,
    height: p
  }, h);
  return !G(n) || !G(i) || !G(f) || !G(p) || !G(s) || !G(c) ? null : /* @__PURE__ */ C.createElement("path", Mp({}, ie(v, !0), {
    className: de("recharts-cross", y),
    d: g3(n, i, f, p, s, c)
  }));
}, Qf, d1;
function x3() {
  if (d1) return Qf;
  d1 = 1;
  var e = Ks(), t = EA(), r = Qt();
  function n(a, i) {
    return a && a.length ? e(a, r(i, 2), t) : void 0;
  }
  return Qf = n, Qf;
}
var w3 = x3();
const O3 = /* @__PURE__ */ _e(w3);
var ed, p1;
function S3() {
  if (p1) return ed;
  p1 = 1;
  var e = Ks(), t = Qt(), r = CA();
  function n(a, i) {
    return a && a.length ? e(a, t(i, 2), r) : void 0;
  }
  return ed = n, ed;
}
var A3 = S3();
const _3 = /* @__PURE__ */ _e(A3);
var P3 = ["cx", "cy", "angle", "ticks", "axisLine"], T3 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function za() {
  return za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, za.apply(this, arguments);
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
function Nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? h1(Object(r), !0).forEach(function(n) {
      Xs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v1(e, t) {
  if (e == null) return {};
  var r = E3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function E3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function C3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function y1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, m_(n.key), n);
  }
}
function j3(e, t, r) {
  return t && y1(e.prototype, t), r && y1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function M3(e, t, r) {
  return t = ts(t), $3(e, y_() ? Reflect.construct(t, r || [], ts(e).constructor) : t.apply(e, r));
}
function $3(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return I3(e);
}
function I3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (y_ = function() {
    return !!e;
  })();
}
function ts(e) {
  return ts = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ts(e);
}
function k3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $p(e, t);
}
function $p(e, t) {
  return $p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $p(e, t);
}
function Xs(e, t, r) {
  return t = m_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m_(e) {
  var t = N3(e, "string");
  return qn(t) == "symbol" ? t : t + "";
}
function N3(e, t) {
  if (qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Zs = /* @__PURE__ */ (function(e) {
  function t() {
    return C3(this, t), M3(this, t, arguments);
  }
  return k3(t, e), j3(t, [{
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = O3(s, function(l) {
        return l.coordinate || 0;
      }), c = _3(s, function(l) {
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = n.axisLine, c = v1(n, P3), l = s.reduce(function(y, h) {
        return [Math.min(y[0], h.coordinate), Math.max(y[1], h.coordinate)];
      }, [1 / 0, -1 / 0]), f = je(a, i, l[0], o), d = je(a, i, l[1], o), p = Nr(Nr(Nr({}, ie(c, !1)), {}, {
        fill: "none"
      }, ie(u, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ C.createElement("line", za({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, u = a.tickFormatter, c = a.stroke, l = v1(a, T3), f = this.getTickTextAnchor(), d = ie(l, !1), p = ie(o, !1), y = i.map(function(h, v) {
        var b = n.getTickValueCoord(h), g = Nr(Nr(Nr(Nr({
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
        return /* @__PURE__ */ C.createElement(pe, za({
          className: de("recharts-polar-radius-axis-tick", n_(o)),
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
      }, i && this.renderAxisLine(), o && this.renderTicks(), Ge.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(_r, za({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
})(jt);
Xs(Zs, "displayName", "PolarRadiusAxis");
Xs(Zs, "axisType", "radiusAxis");
Xs(Zs, "defaultProps", {
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
      Js(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function D3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function g1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, b_(n.key), n);
  }
}
function R3(e, t, r) {
  return t && g1(e.prototype, t), r && g1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function L3(e, t, r) {
  return t = rs(t), q3(e, g_() ? Reflect.construct(t, r || [], rs(e).constructor) : t.apply(e, r));
}
function q3(e, t) {
  if (t && (Bn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return B3(e);
}
function B3(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function g_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (g_ = function() {
    return !!e;
  })();
}
function rs(e) {
  return rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rs(e);
}
function F3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ip(e, t);
}
function Ip(e, t) {
  return Ip = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ip(e, t);
}
function Js(e, t, r) {
  return t = b_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b_(e) {
  var t = z3(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function z3(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var W3 = Math.PI / 180, b1 = 1e-5, Qs = /* @__PURE__ */ (function(e) {
  function t() {
    return D3(this, t), L3(this, t, arguments);
  }
  return F3(t, e), R3(t, [{
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * W3), o;
      return i > b1 ? o = a === "outer" ? "start" : "end" : i < -b1 ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, u = n.axisLineType, c = Dr(Dr({}, ie(this.props, !1)), {}, {
        fill: "none"
      }, ie(s, !1));
      if (u === "circle")
        return /* @__PURE__ */ C.createElement(Hi, Br({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return je(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ C.createElement(l3, Br({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.tickLine, u = a.tickFormatter, c = a.stroke, l = ie(this.props, !1), f = ie(o, !1), d = Dr(Dr({}, l), {}, {
        fill: "none"
      }, ie(s, !1)), p = i.map(function(y, h) {
        var v = n.getTickLineCoord(y), b = n.getTickTextAnchor(y), g = Dr(Dr(Dr({
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
          className: de("recharts-polar-angle-axis-tick", n_(o)),
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
Js(Qs, "displayName", "PolarAngleAxis");
Js(Qs, "axisType", "angleAxis");
Js(Qs, "defaultProps", {
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
var td, x1;
function U3() {
  if (x1) return td;
  x1 = 1;
  var e = XO(), t = e(Object.getPrototypeOf, Object);
  return td = t, td;
}
var rd, w1;
function H3() {
  if (w1) return rd;
  w1 = 1;
  var e = fr(), t = U3(), r = dr(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, s = i.hasOwnProperty, u = o.call(Object);
  function c(l) {
    if (!r(l) || e(l) != n)
      return !1;
    var f = t(l);
    if (f === null)
      return !0;
    var d = s.call(f, "constructor") && f.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == u;
  }
  return rd = c, rd;
}
var K3 = H3();
const V3 = /* @__PURE__ */ _e(K3);
var nd, O1;
function G3() {
  if (O1) return nd;
  O1 = 1;
  var e = fr(), t = dr(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return nd = n, nd;
}
var Y3 = G3();
const X3 = /* @__PURE__ */ _e(Y3);
function Si(e) {
  "@babel/helpers - typeof";
  return Si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Si(e);
}
function ns() {
  return ns = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ns.apply(this, arguments);
}
function Z3(e, t) {
  return t5(e) || e5(e, t) || Q3(e, t) || J3();
}
function J3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q3(e, t) {
  if (e) {
    if (typeof e == "string") return S1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S1(e, t);
  }
}
function S1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function e5(e, t) {
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
function t5(e) {
  if (Array.isArray(e)) return e;
}
function A1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? A1(Object(r), !0).forEach(function(n) {
      r5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r5(e, t, r) {
  return t = n5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n5(e) {
  var t = a5(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function a5(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var P1 = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, i5 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, o5 = function(t) {
  var r = _1(_1({}, i5), t), n = Me(), a = he(-1), i = Z3(a, 2), o = i[0], s = i[1];
  qe(function() {
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
    }, /* @__PURE__ */ C.createElement("path", ns({}, ie(r, !0), {
      className: g,
      d: P1(A, _, O, m, w),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("g", null, /* @__PURE__ */ C.createElement("path", ns({}, ie(r, !0), {
    className: g,
    d: P1(u, c, l, f, d)
  })));
}, s5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function u5(e, t) {
  if (e == null) return {};
  var r = c5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function c5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function as(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T1(Object(r), !0).forEach(function(n) {
      l5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l5(e, t, r) {
  return t = f5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f5(e) {
  var t = d5(e, "string");
  return Ai(t) == "symbol" ? t : t + "";
}
function d5(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function p5(e, t) {
  return as(as({}, t), e);
}
function h5(e, t) {
  return e === "symbols";
}
function E1(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ C.createElement(Sv, r);
    case "trapezoid":
      return /* @__PURE__ */ C.createElement(o5, r);
    case "sector":
      return /* @__PURE__ */ C.createElement(o_, r);
    case "symbols":
      if (h5(t))
        return /* @__PURE__ */ C.createElement(Kh, r);
      break;
    default:
      return null;
  }
}
function v5(e) {
  return /* @__PURE__ */ Dt(e) ? e.props : e;
}
function x_(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? p5 : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, u = u5(e, s5), c;
  if (/* @__PURE__ */ Dt(t))
    c = /* @__PURE__ */ He(t, as(as({}, u), v5(t)));
  else if (ue(t))
    c = t(u);
  else if (V3(t) && !X3(t)) {
    var l = a(t, u);
    c = /* @__PURE__ */ C.createElement(E1, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = u;
    c = /* @__PURE__ */ C.createElement(E1, {
      shapeType: r,
      elementProps: f
    });
  }
  return s ? /* @__PURE__ */ C.createElement(pe, {
    className: o
  }, c) : c;
}
function eu(e, t) {
  return t != null && "trapezoids" in e.props;
}
function tu(e, t) {
  return t != null && "sectors" in e.props;
}
function _i(e, t) {
  return t != null && "points" in e.props;
}
function y5(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function m5(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function g5(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function b5(e, t) {
  var r;
  return eu(e, t) ? r = y5 : tu(e, t) ? r = m5 : _i(e, t) && (r = g5), r;
}
function x5(e, t) {
  var r;
  return eu(e, t) ? r = "trapezoids" : tu(e, t) ? r = "sectors" : _i(e, t) && (r = "points"), r;
}
function w5(e, t) {
  if (eu(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (tu(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return _i(e, t) ? t.payload : {};
}
function O5(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = x5(r, t), i = w5(r, t), o = n.filter(function(u, c) {
    var l = Qr(i, u), f = r.props[a].filter(function(y) {
      var h = b5(r, t);
      return h(y, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return l && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var bo;
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
function C1(e, t) {
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
    t % 2 ? C1(Object(r), !0).forEach(function(n) {
      _t(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function S5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function j1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, O_(n.key), n);
  }
}
function A5(e, t, r) {
  return t && j1(e.prototype, t), r && j1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _5(e, t, r) {
  return t = is(t), P5(e, w_() ? Reflect.construct(t, r || [], is(e).constructor) : t.apply(e, r));
}
function P5(e, t) {
  if (t && (Fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return T5(e);
}
function T5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function w_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (w_ = function() {
    return !!e;
  })();
}
function is(e) {
  return is = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, is(e);
}
function E5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kp(e, t);
}
function kp(e, t) {
  return kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, kp(e, t);
}
function _t(e, t, r) {
  return t = O_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function O_(e) {
  var t = C5(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function C5(e, t) {
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
    return S5(this, t), n = _5(this, t, [r]), _t(n, "pieRef", null), _t(n, "sectorRefs", []), _t(n, "id", sn("recharts-pie-")), _t(n, "handleAnimationEnd", function() {
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
  return E5(t, e), A5(t, [{
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
        }, s && t.renderLabelLineItem(s, O, "line"), t.renderLabelItem(o, x, Le(h, m)));
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
        }), /* @__PURE__ */ C.createElement(x_, On({
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
            var A = Ve(m.endAngle - m.startAngle, x.endAngle - x.startAngle), _ = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + A(h) + w
            });
            v.push(_), g = _.endAngle;
          } else {
            var P = x.endAngle, k = x.startAngle, T = Ve(0, P - k), I = T(h), j = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + I + w
            });
            v.push(j), g = j.endAngle;
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
      }, this.renderSectors(), u && this.renderLabels(o), Ge.renderCallByParent(this.props, null, !1), (!p || y) && Tt.renderCallByParent(this.props, o, !1));
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
bo = hr;
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
  var t = e.data, r = e.children, n = ie(e, !1), a = xt(r, qs);
  return t && t.length ? t.map(function(i, o) {
    return Ee(Ee(Ee({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Ee(Ee({}, n), i.props);
  }) : [];
});
_t(hr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = r_(a, i), s = n + ot(e.cx, a, a / 2), u = r + ot(e.cy, i, i / 2), c = ot(e.innerRadius, o, 0), l = ot(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: s,
    cy: u,
    innerRadius: c,
    outerRadius: l,
    maxRadius: f
  };
});
_t(hr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? Ee(Ee({}, t.type.defaultProps), t.props) : t.props, a = bo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, s = n.endAngle, u = n.paddingAngle, c = n.dataKey, l = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), y = bo.parseCoordinateOfPie(n, r), h = bo.parseDeltaAngle(o, s), v = Math.abs(h), b = c;
  le(c) && le(f) ? (Lt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = "value") : le(c) && (Lt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = f);
  var g = a.filter(function(_) {
    return Le(_, b, 0) !== 0;
  }).length, x = (v >= 360 ? g : g - 1) * u, O = v - g * p - x, m = a.reduce(function(_, P) {
    var k = Le(P, b, 0);
    return _ + (G(k) ? k : 0);
  }, 0), w;
  if (m > 0) {
    var A;
    w = a.map(function(_, P) {
      var k = Le(_, b, 0), T = Le(_, l, P), I = (G(k) ? k : 0) / m, j;
      P ? j = A.endAngle + it(h) * u * (k !== 0 ? 1 : 0) : j = o;
      var M = j + it(h) * ((k !== 0 ? p : 0) + I * O), $ = (j + M) / 2, N = (y.innerRadius + y.outerRadius) / 2, R = [{
        name: T,
        value: k,
        payload: _,
        dataKey: b,
        type: d
      }], F = je(y.cx, y.cy, N, $);
      return A = Ee(Ee(Ee({
        percent: I,
        cornerRadius: i,
        name: T,
        tooltipPayload: R,
        midAngle: $,
        middleRadius: N,
        tooltipPosition: F
      }, _), y), {}, {
        value: Le(_, b),
        startAngle: j,
        endAngle: M,
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
var ad, M1;
function j5() {
  if (M1) return ad;
  M1 = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var s = -1, u = t(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[o ? u : ++s] = n, n += i;
    return c;
  }
  return ad = r, ad;
}
var id, $1;
function S_() {
  if ($1) return id;
  $1 = 1;
  var e = WS(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -t) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return id = n, id;
}
var od, I1;
function M5() {
  if (I1) return od;
  I1 = 1;
  var e = j5(), t = Ls(), r = S_();
  function n(a) {
    return function(i, o, s) {
      return s && typeof s != "number" && t(i, o, s) && (o = s = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), s = s === void 0 ? i < o ? 1 : -1 : r(s), e(i, o, s, a);
    };
  }
  return od = n, od;
}
var sd, k1;
function $5() {
  if (k1) return sd;
  k1 = 1;
  var e = M5(), t = e();
  return sd = t, sd;
}
var I5 = $5();
const os = /* @__PURE__ */ _e(I5);
function Pi(e) {
  "@babel/helpers - typeof";
  return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pi(e);
}
function N1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? N1(Object(r), !0).forEach(function(n) {
      A_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A_(e, t, r) {
  return t = k5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k5(e) {
  var t = N5(e, "string");
  return Pi(t) == "symbol" ? t : t + "";
}
function N5(e, t) {
  if (Pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var D5 = ["Webkit", "Moz", "O", "ms"], R5 = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = D5.reduce(function(i, o) {
    return D1(D1({}, i), {}, A_({}, o + n, r));
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
function ss() {
  return ss = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ss.apply(this, arguments);
}
function R1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ud(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? R1(Object(r), !0).forEach(function(n) {
      vt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function L1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, P_(n.key), n);
  }
}
function q5(e, t, r) {
  return t && L1(e.prototype, t), r && L1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function B5(e, t, r) {
  return t = us(t), F5(e, __() ? Reflect.construct(t, r || [], us(e).constructor) : t.apply(e, r));
}
function F5(e, t) {
  if (t && (zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return z5(e);
}
function z5(e) {
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
function us(e) {
  return us = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, us(e);
}
function W5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Np(e, t);
}
function Np(e, t) {
  return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Np(e, t);
}
function vt(e, t, r) {
  return t = P_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function P_(e) {
  var t = U5(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function U5(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var H5 = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = La().domain(os(0, u)).range([i, i + o - s]), l = c.domain().map(function(f) {
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
}, q1 = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Wn = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return L5(this, t), n = B5(this, t, [r]), vt(n, "handleDrag", function(a) {
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
      var i = q1(a) ? a.changedTouches[0] : a;
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
  return W5(t, e), q5(t, [{
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
      var a = this.props, i = a.data, o = a.tickFormatter, s = a.dataKey, u = Le(i[n], s, n);
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
      var i = q1(a) ? a.changedTouches[0] : a;
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
      var i, o, s = this, u = this.props, c = u.y, l = u.travellerWidth, f = u.height, d = u.traveller, p = u.ariaLabel, y = u.data, h = u.startIndex, v = u.endIndex, b = Math.max(n, this.props.x), g = ud(ud({}, ie(this.props, !1)), {}, {
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
      }, /* @__PURE__ */ C.createElement(_r, ss({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + s / 2
      }, y), this.getTextOfTick(a)), /* @__PURE__ */ C.createElement(_r, ss({
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
      var x = de("recharts-brush", i), O = C.Children.count(o) === 1, m = R5("userSelect", "none");
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
        return ud({
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o
        }, i && i.length ? H5({
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
var cd, B1;
function K5() {
  if (B1) return cd;
  B1 = 1;
  var e = Gh();
  function t(r, n) {
    var a;
    return e(r, function(i, o, s) {
      return a = n(i, o, s), !a;
    }), !!a;
  }
  return cd = t, cd;
}
var ld, F1;
function V5() {
  if (F1) return ld;
  F1 = 1;
  var e = WO(), t = Qt(), r = K5(), n = pt(), a = Ls();
  function i(o, s, u) {
    var c = n(o) ? e : r;
    return u && a(o, s, u) && (s = void 0), c(o, t(s, 3));
  }
  return ld = i, ld;
}
var G5 = V5();
const Y5 = /* @__PURE__ */ _e(G5);
var Xt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, fd, z1;
function X5() {
  if (z1) return fd;
  z1 = 1;
  var e = LS();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return fd = t, fd;
}
var dd, W1;
function Z5() {
  if (W1) return dd;
  W1 = 1;
  var e = X5(), t = DS(), r = Qt();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(s, u, c) {
      e(o, u, i(s, u, c));
    }), o;
  }
  return dd = n, dd;
}
var J5 = Z5();
const Q5 = /* @__PURE__ */ _e(J5);
var pd, U1;
function eF() {
  if (U1) return pd;
  U1 = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return pd = e, pd;
}
var hd, H1;
function tF() {
  if (H1) return hd;
  H1 = 1;
  var e = Gh();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, s) {
      return a = !!n(i, o, s), a;
    }), a;
  }
  return hd = t, hd;
}
var vd, K1;
function rF() {
  if (K1) return vd;
  K1 = 1;
  var e = eF(), t = tF(), r = Qt(), n = pt(), a = Ls();
  function i(o, s, u) {
    var c = n(o) ? e : t;
    return u && a(o, s, u) && (s = void 0), c(o, r(s, 3));
  }
  return vd = i, vd;
}
var nF = rF();
const T_ = /* @__PURE__ */ _e(nF);
var aF = ["x", "y"];
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function Dp() {
  return Dp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dp.apply(this, arguments);
}
function V1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? V1(Object(r), !0).forEach(function(n) {
      iF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iF(e, t, r) {
  return t = oF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oF(e) {
  var t = sF(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function sF(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function uF(e, t) {
  if (e == null) return {};
  var r = cF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function cF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function lF(e, t) {
  var r = e.x, n = e.y, a = uF(e, aF), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || a.height), l = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
  return Ea(Ea(Ea(Ea(Ea({}, t), a), o ? {
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
function G1(e) {
  return /* @__PURE__ */ C.createElement(x_, Dp({
    shapeType: "rectangle",
    propTransformer: lF,
    activeClassName: "recharts-active-bar"
  }, e));
}
var fF = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? lt(!1, "minPointSize callback function received a value with type of ".concat(Un(n), ". Currently only numbers are supported.")) : lt()), r);
  };
}, dF = ["value", "background"], E_;
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function pF(e, t) {
  if (e == null) return {};
  var r = hF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function cs() {
  return cs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cs.apply(this, arguments);
}
function Y1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Y1(Object(r), !0).forEach(function(n) {
      Or(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function X1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, j_(n.key), n);
  }
}
function yF(e, t, r) {
  return t && X1(e.prototype, t), r && X1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function mF(e, t, r) {
  return t = ls(t), gF(e, C_() ? Reflect.construct(t, r || [], ls(e).constructor) : t.apply(e, r));
}
function gF(e, t) {
  if (t && (Hn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bF(e);
}
function bF(e) {
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
function ls(e) {
  return ls = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ls(e);
}
function xF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rp(e, t);
}
function Rp(e, t) {
  return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Rp(e, t);
}
function Or(e, t, r) {
  return t = j_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j_(e) {
  var t = wF(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function wF(e, t) {
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
    vF(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = mF(this, t, [].concat(a)), Or(r, "state", {
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
  return xF(t, e), yF(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var a = this, i = this.props, o = i.shape, s = i.dataKey, u = i.activeIndex, c = i.activeBar, l = ie(this.props, !1);
      return n && n.map(function(f, d) {
        var p = d === u, y = p ? c : o, h = Fe(Fe(Fe({}, l), f), {}, {
          isActive: p,
          option: y,
          index: d,
          dataKey: s,
          onAnimationStart: a.handleAnimationStart,
          onAnimationEnd: a.handleAnimationEnd
        });
        return /* @__PURE__ */ C.createElement(pe, cs({
          className: "recharts-bar-rectangle"
        }, en(a.props, f, d), {
          key: "rectangle-".concat(f?.x, "-").concat(f?.y, "-").concat(f?.value)
        }), /* @__PURE__ */ C.createElement(G1, h));
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
            var x = Ve(g.x, v.x), O = Ve(g.y, v.y), m = Ve(g.width, v.width), w = Ve(g.height, v.height);
            return Fe(Fe({}, v), {}, {
              x: x(y),
              y: O(y),
              width: m(y),
              height: w(y)
            });
          }
          if (o === "horizontal") {
            var A = Ve(0, v.height), _ = A(y);
            return Fe(Fe({}, v), {}, {
              y: v.y + v.height - _,
              height: _
            });
          }
          var P = Ve(0, v.width), k = P(y);
          return Fe(Fe({}, v), {}, {
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
        var f = c.background, d = pF(c, dF);
        if (!f)
          return null;
        var p = Fe(Fe(Fe(Fe(Fe({}, d), {}, {
          fill: "#eee"
        }, f), u), en(n.props, c, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ C.createElement(G1, cs({
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
      var i = this.props, o = i.data, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = xt(l, Ui);
      if (!f)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, p = function(v, b) {
        var g = Array.isArray(v.value) ? v.value[1] : v.value;
        return {
          x: v.x,
          y: v.y,
          value: g,
          errorVal: Le(v, b)
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
E_ = $r;
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
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = HR(n, r);
  if (!p)
    return null;
  var y = t.layout, h = r.type.defaultProps, v = h !== void 0 ? Fe(Fe({}, h), r.props) : r.props, b = v.dataKey, g = v.children, x = v.minPointSize, O = y === "horizontal" ? o : i, m = c ? O.scale.domain() : null, w = JR({
    numericAxis: O
  }), A = xt(g, qs), _ = f.map(function(P, k) {
    var T, I, j, M, $, N;
    c ? T = KR(c[l + k], m) : (T = Le(P, b), Array.isArray(T) || (T = [w, T]));
    var R = fF(x, E_.defaultProps.minPointSize)(T[1], k);
    if (y === "horizontal") {
      var F, z = [o.scale(T[0]), o.scale(T[1])], D = z[0], q = z[1];
      I = hx({
        axis: i,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: k
      }), j = (F = q ?? D) !== null && F !== void 0 ? F : void 0, M = p.size;
      var L = D - q;
      if ($ = Number.isNaN(L) ? 0 : L, N = {
        x: I,
        y: o.y,
        width: M,
        height: o.height
      }, Math.abs(R) > 0 && Math.abs($) < Math.abs(R)) {
        var H = it($ || R) * (Math.abs(R) - Math.abs($));
        j -= H, $ += H;
      }
    } else {
      var X = [i.scale(T[0]), i.scale(T[1])], te = X[0], ne = X[1];
      if (I = te, j = hx({
        axis: o,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: k
      }), M = ne - te, $ = p.size, N = {
        x: i.x,
        y: j,
        width: i.width,
        height: $
      }, Math.abs(R) > 0 && Math.abs(M) < Math.abs(R)) {
        var ee = it(M || R) * (Math.abs(R) - Math.abs(M));
        M += ee;
      }
    }
    return Fe(Fe(Fe({}, P), {}, {
      x: I,
      y: j,
      width: M,
      height: $,
      value: c ? T : T[1],
      payload: P,
      background: N
    }, A && A[k] && A[k].props), {}, {
      tooltipPayload: [e_(r, P)],
      tooltipPosition: {
        x: I + M / 2,
        y: j + $ / 2
      }
    });
  });
  return Fe({
    data: _,
    layout: y
  }, d);
});
function Ti(e) {
  "@babel/helpers - typeof";
  return Ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ti(e);
}
function OF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Z1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, M_(n.key), n);
  }
}
function SF(e, t, r) {
  return t && Z1(e.prototype, t), r && Z1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
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
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? J1(Object(r), !0).forEach(function(n) {
      ru(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ru(e, t, r) {
  return t = M_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M_(e) {
  var t = AF(e, "string");
  return Ti(t) == "symbol" ? t : t + "";
}
function AF(e, t) {
  if (Ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Av = function(t, r, n, a, i) {
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
      var I = b[1] - b[0], j = 1 / 0, M = h.categoricalDomain.sort();
      if (M.forEach(function(X, te) {
        te > 0 && (j = Math.min((X || 0) - (M[te - 1] || 0), j));
      }), Number.isFinite(j)) {
        var $ = j / I, N = h.layout === "vertical" ? n.height : n.width;
        if (h.padding === "gap" && (A = $ * N / 2), h.padding === "no-gap") {
          var R = ot(t.barCategoryGap, $ * N), F = $ * N / 2;
          A = F - R - (F - R) / N * R;
        }
      }
    }
    a === "xAxis" ? _ = [n.left + (x.left || 0) + (A || 0), n.left + n.width - (x.right || 0) - (A || 0)] : a === "yAxis" ? _ = u === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (A || 0), n.top + n.height - (x.bottom || 0) - (A || 0)] : _ = h.range, m && (_ = [_[1], _[0]]);
    var z = XA(h, i, d), D = z.scale, q = z.realScaleType;
    D.domain(b).range(_), ZA(D);
    var L = JA(D, It(It({}, h), {}, {
      realScaleType: q
    }));
    a === "xAxis" ? (T = v === "top" && !O || v === "bottom" && O, P = n.left, k = f[w] - T * h.height) : a === "yAxis" && (T = v === "left" && !O || v === "right" && O, P = f[w] - T * h.width, k = n.top);
    var H = It(It(It({}, h), L), {}, {
      realScaleType: q,
      x: P,
      y: k,
      scale: D,
      width: a === "xAxis" ? n.width : h.width,
      height: a === "yAxis" ? n.height : h.height
    });
    return H.bandSize = Vo(H, L), !h.hide && a === "xAxis" ? f[w] += (T ? -1 : 1) * H.height : h.hide || (f[w] += (T ? -1 : 1) * H.width), It(It({}, p), {}, ru({}, y, H));
  }, {});
}, $_ = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, _F = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return $_({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, I_ = /* @__PURE__ */ (function() {
  function e(t) {
    OF(this, e), this.scale = t;
  }
  return SF(e, [{
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
ru(I_, "EPS", 1e-4);
var _v = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return It(It({}, n), {}, ru({}, a, I_.create(t[a])));
  }, {});
  return It(It({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return Q5(a, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return T_(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function PF(e) {
  return (e % 180 + 180) % 180;
}
var TF = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = PF(a), o = i * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, yd, Q1;
function EF() {
  if (Q1) return yd;
  Q1 = 1;
  var e = Qt(), t = Li(), r = Ms();
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
  return yd = n, yd;
}
var md, ew;
function CF() {
  if (ew) return md;
  ew = 1;
  var e = S_();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return md = t, md;
}
var gd, tw;
function jF() {
  if (tw) return gd;
  tw = 1;
  var e = MS(), t = Qt(), r = CF(), n = Math.max;
  function a(i, o, s) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = s == null ? 0 : r(s);
    return c < 0 && (c = n(u + c, 0)), e(i, t(o, 3), c);
  }
  return gd = a, gd;
}
var bd, rw;
function MF() {
  if (rw) return bd;
  rw = 1;
  var e = EF(), t = jF(), r = e(t);
  return bd = r, bd;
}
var $F = MF();
const IF = /* @__PURE__ */ _e($F);
var kF = nS();
const NF = /* @__PURE__ */ _e(kF);
var DF = NF(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function fs(e) {
  "@babel/helpers - typeof";
  return fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fs(e);
}
var Pv = /* @__PURE__ */ Ft(void 0), Tv = /* @__PURE__ */ Ft(void 0), k_ = /* @__PURE__ */ Ft(void 0), N_ = /* @__PURE__ */ Ft({}), D_ = /* @__PURE__ */ Ft(void 0), R_ = /* @__PURE__ */ Ft(0), L_ = /* @__PURE__ */ Ft(0), nw = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, l = DF(i);
  return /* @__PURE__ */ C.createElement(Pv.Provider, {
    value: n
  }, /* @__PURE__ */ C.createElement(Tv.Provider, {
    value: a
  }, /* @__PURE__ */ C.createElement(N_.Provider, {
    value: i
  }, /* @__PURE__ */ C.createElement(k_.Provider, {
    value: l
  }, /* @__PURE__ */ C.createElement(D_.Provider, {
    value: o
  }, /* @__PURE__ */ C.createElement(R_.Provider, {
    value: c
  }, /* @__PURE__ */ C.createElement(L_.Provider, {
    value: u
  }, s)))))));
}, RF = function() {
  return dt(D_);
};
function q_(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var B_ = function(t) {
  var r = dt(Pv);
  r == null && (process.env.NODE_ENV !== "production" ? lt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : lt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? lt(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(fs(t), "]. ").concat(q_(r))) : lt()), n;
}, LF = function() {
  var t = dt(Pv);
  return xr(t);
}, qF = function() {
  var t = dt(Tv), r = IF(t, function(n) {
    return T_(n.domain, Number.isFinite);
  });
  return r || xr(t);
}, F_ = function(t) {
  var r = dt(Tv);
  r == null && (process.env.NODE_ENV !== "production" ? lt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : lt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? lt(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(fs(t), "]. ").concat(q_(r))) : lt()), n;
}, BF = function() {
  var t = dt(k_);
  return t;
}, FF = function() {
  return dt(N_);
}, Ev = function() {
  return dt(L_);
}, Cv = function() {
  return dt(R_);
};
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function zF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function WF(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, W_(n.key), n);
  }
}
function UF(e, t, r) {
  return t && WF(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function HF(e, t, r) {
  return t = ds(t), KF(e, z_() ? Reflect.construct(t, r || [], ds(e).constructor) : t.apply(e, r));
}
function KF(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return VF(e);
}
function VF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function z_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (z_ = function() {
    return !!e;
  })();
}
function ds(e) {
  return ds = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ds(e);
}
function GF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lp(e, t);
}
function Lp(e, t) {
  return Lp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Lp(e, t);
}
function aw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function iw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? aw(Object(r), !0).forEach(function(n) {
      jv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : aw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jv(e, t, r) {
  return t = W_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function W_(e) {
  var t = YF(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function YF(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function XF(e, t) {
  return e4(e) || QF(e, t) || JF(e, t) || ZF();
}
function ZF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JF(e, t) {
  if (e) {
    if (typeof e == "string") return ow(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ow(e, t);
  }
}
function ow(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QF(e, t) {
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
function e4(e) {
  if (Array.isArray(e)) return e;
}
function qp() {
  return qp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qp.apply(this, arguments);
}
var t4 = function(t, r) {
  var n;
  return /* @__PURE__ */ C.isValidElement(t) ? n = /* @__PURE__ */ C.cloneElement(t, r) : ue(t) ? n = t(r) : n = /* @__PURE__ */ C.createElement("line", qp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, r4 = function(t, r, n, a, i, o, s, u, c) {
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
    return Xt(c, "discard") && Y5(m, function(w) {
      return !t.isInRange(w);
    }) ? null : m;
  }
  return null;
};
function n4(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = RF(), l = B_(a), f = F_(i), d = BF();
  if (!c || !d)
    return null;
  Lt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = _v({
    x: l.scale,
    y: f.scale
  }), y = Ye(t), h = Ye(r), v = n && n.length === 2, b = r4(p, y, h, v, d, e.position, l.orientation, f.orientation, e);
  if (!b)
    return null;
  var g = XF(b, 2), x = g[0], O = x.x, m = x.y, w = g[1], A = w.x, _ = w.y, P = Xt(e, "hidden") ? "url(#".concat(c, ")") : void 0, k = iw(iw({
    clipPath: P
  }, ie(e, !0)), {}, {
    x1: O,
    y1: m,
    x2: A,
    y2: _
  });
  return /* @__PURE__ */ C.createElement(pe, {
    className: de("recharts-reference-line", s)
  }, t4(o, k), Ge.renderCallByParent(e, _F({
    x1: O,
    y1: m,
    x2: A,
    y2: _
  })));
}
var Mv = /* @__PURE__ */ (function(e) {
  function t() {
    return zF(this, t), HF(this, t, arguments);
  }
  return GF(t, e), UF(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(n4, this.props);
    }
  }]);
})(C.Component);
jv(Mv, "displayName", "ReferenceLine");
jv(Mv, "defaultProps", {
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
function Bp() {
  return Bp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bp.apply(this, arguments);
}
function Vn(e) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vn(e);
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
      nu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function a4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function i4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, H_(n.key), n);
  }
}
function o4(e, t, r) {
  return t && i4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s4(e, t, r) {
  return t = ps(t), u4(e, U_() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function u4(e, t) {
  if (t && (Vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return c4(e);
}
function c4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function U_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (U_ = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function l4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fp(e, t);
}
function Fp(e, t) {
  return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Fp(e, t);
}
function nu(e, t, r) {
  return t = H_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H_(e) {
  var t = f4(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function f4(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var d4 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = _v({
    x: a.scale,
    y: i.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Xt(t, "discard") && !o.isInRange(s) ? null : s;
}, au = /* @__PURE__ */ (function(e) {
  function t() {
    return a4(this, t), s4(this, t, arguments);
  }
  return l4(t, e), o4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Ye(a), l = Ye(i);
      if (Lt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !l)
        return null;
      var f = d4(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, y = this.props, h = y.shape, v = y.className, b = Xt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, g = uw(uw({
        clipPath: b
      }, ie(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-reference-dot", v)
      }, t.renderDot(h, g), Ge.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(C.Component);
nu(au, "displayName", "ReferenceDot");
nu(au, "defaultProps", {
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
nu(au, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(Hi, Bp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
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
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
}
function cw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cw(Object(r), !0).forEach(function(n) {
      iu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, V_(n.key), n);
  }
}
function v4(e, t, r) {
  return t && h4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y4(e, t, r) {
  return t = hs(t), m4(e, K_() ? Reflect.construct(t, r || [], hs(e).constructor) : t.apply(e, r));
}
function m4(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return g4(e);
}
function g4(e) {
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
function hs(e) {
  return hs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hs(e);
}
function b4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wp(e, t);
}
function Wp(e, t) {
  return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Wp(e, t);
}
function iu(e, t, r) {
  return t = V_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V_(e) {
  var t = x4(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function x4(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var w4 = function(t, r, n, a, i) {
  var o = i.x1, s = i.x2, u = i.y1, c = i.y2, l = i.xAxis, f = i.yAxis;
  if (!l || !f) return null;
  var d = _v({
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
  return Xt(i, "discard") && (!d.isInRange(p) || !d.isInRange(y)) ? null : $_(p, y);
}, ou = /* @__PURE__ */ (function(e) {
  function t() {
    return p4(this, t), y4(this, t, arguments);
  }
  return b4(t, e), v4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, l = n.clipPathId;
      Lt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Ye(a), d = Ye(i), p = Ye(o), y = Ye(s), h = this.props.shape;
      if (!f && !d && !p && !y && !h)
        return null;
      var v = w4(f, d, p, y, this.props);
      if (!v && !h)
        return null;
      var b = Xt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-reference-area", u)
      }, t.renderRect(h, lw(lw({
        clipPath: b
      }, ie(this.props, !0)), v)), Ge.renderCallByParent(this.props, v));
    }
  }]);
})(C.Component);
iu(ou, "displayName", "ReferenceArea");
iu(ou, "defaultProps", {
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
iu(ou, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(Sv, zp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function G_(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function O4(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return TF(n, r);
}
function S4(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + s
  } : {
    start: n ? a + o : i + s,
    end: n ? a : i
  };
}
function vs(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function A4(e, t) {
  return G_(e, t + 1);
}
function _4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, l = o, f = function() {
    var y = n?.[u];
    if (y === void 0)
      return {
        v: G_(n, c)
      };
    var h = u, v, b = function() {
      return v === void 0 && (v = r(y, h)), v;
    }, g = y.coordinate, x = u === 0 || vs(e, g, b, l, s);
    x || (u = 0, l = o, c += 1), x && (l = g + e * (b() / 2 + a), u += c);
  }, d; c <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function fw(e, t) {
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
    t % 2 ? fw(Object(r), !0).forEach(function(n) {
      P4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function P4(e, t, r) {
  return t = T4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T4(e) {
  var t = E4(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function E4(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function C4(e, t, r, n, a) {
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
    var b = vs(e, p.tickCoord, h, s, u);
    b && (u = p.tickCoord - e * (h() / 2 + a), i[d] = rt(rt({}, p), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    c(l);
  return i;
}
function j4(e, t, r, n, a, i) {
  var o = (n || []).slice(), s = o.length, u = t.start, c = t.end;
  if (i) {
    var l = n[s - 1], f = r(l, s - 1), d = e * (l.coordinate + e * f / 2 - c);
    o[s - 1] = l = rt(rt({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var p = vs(e, l.tickCoord, function() {
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
    var A = vs(e, x.tickCoord, m, u, c);
    A && (u = x.tickCoord + e * (m() / 2 + a), o[g] = rt(rt({}, x), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    h(v);
  return o;
}
function $v(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, l = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (G(u) || Er.isSsr)
    return A4(a, typeof u == "number" && G(u) ? u : 0);
  var d = [], p = s === "top" || s === "bottom" ? "width" : "height", y = l && p === "width" ? Ra(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, h = function(x, O) {
    var m = ue(c) ? c(x.value, O) : x.value;
    return p === "width" ? O4(Ra(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : Ra(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, v = a.length >= 2 ? it(a[1].coordinate - a[0].coordinate) : 1, b = S4(i, v, p);
  return u === "equidistantPreserveStart" ? _4(v, b, h, a, o) : (u === "preserveStart" || u === "preserveStartEnd" ? d = j4(v, b, h, a, o, u === "preserveStartEnd") : d = C4(v, b, h, a, o), d.filter(function(g) {
    return g.isShow;
  }));
}
var M4 = ["viewBox"], $4 = ["viewBox"], I4 = ["ticks"];
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
function at(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dw(Object(r), !0).forEach(function(n) {
      Iv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xd(e, t) {
  if (e == null) return {};
  var r = k4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function k4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function N4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, X_(n.key), n);
  }
}
function D4(e, t, r) {
  return t && pw(e.prototype, t), r && pw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function R4(e, t, r) {
  return t = ys(t), L4(e, Y_() ? Reflect.construct(t, r || [], ys(e).constructor) : t.apply(e, r));
}
function L4(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q4(e);
}
function q4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Y_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Y_ = function() {
    return !!e;
  })();
}
function ys(e) {
  return ys = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ys(e);
}
function B4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Up(e, t);
}
function Up(e, t) {
  return Up = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Up(e, t);
}
function Iv(e, t, r) {
  return t = X_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X_(e) {
  var t = F4(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function F4(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var la = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return N4(this, t), n = R4(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return B4(t, e), D4(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = xd(n, M4), s = this.props, u = s.viewBox, c = xd(s, $4);
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
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, l = s.tick, f = s.tickFormatter, d = s.unit, p = $v(at(at({}, this.props), {}, {
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
      var f = this.props, d = f.ticks, p = xd(f, I4), y = d;
      return ue(u) && (y = d && d.length > 0 ? u(this.props) : u(p)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, i && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Ge.renderCallByParent(this.props));
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
})(oO);
Iv(la, "displayName", "CartesianAxis");
Iv(la, "defaultProps", {
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
var z4 = ["x1", "y1", "x2", "y2", "key"], W4 = ["offset"];
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
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
function nt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hw(Object(r), !0).forEach(function(n) {
      U4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function U4(e, t, r) {
  return t = H4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H4(e) {
  var t = K4(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function K4(e, t) {
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
function vw(e, t) {
  if (e == null) return {};
  var r = V4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function V4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var G4 = function(t) {
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
function Z_(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, u = vw(t, z4), c = ie(u, !1);
    c.offset;
    var l = vw(c, W4);
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
function Y4(e) {
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
    return Z_(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function X4(e) {
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
    return Z_(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function Z4(e) {
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
function J4(e) {
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
var Q4 = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return YA($v(nt(nt(nt({}, la.defaultProps), n), {}, {
    ticks: ir(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, e8 = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return YA($v(nt(nt(nt({}, la.defaultProps), n), {}, {
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
function Ki(e) {
  var t, r, n, a, i, o, s = Ev(), u = Cv(), c = FF(), l = nt(nt({}, e), {}, {
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
  }), f = l.x, d = l.y, p = l.width, y = l.height, h = l.syncWithTicks, v = l.horizontalValues, b = l.verticalValues, g = LF(), x = qF();
  if (!G(p) || p <= 0 || !G(y) || y <= 0 || !G(f) || f !== +f || !G(d) || d !== +d)
    return null;
  var O = l.verticalCoordinatesGenerator || Q4, m = l.horizontalCoordinatesGenerator || e8, w = l.horizontalPoints, A = l.verticalPoints;
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
  }, /* @__PURE__ */ C.createElement(G4, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ C.createElement(Y4, Ur({}, l, {
    offset: c,
    horizontalPoints: w,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(X4, Ur({}, l, {
    offset: c,
    verticalPoints: A,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(Z4, Ur({}, l, {
    horizontalPoints: w
  })), /* @__PURE__ */ C.createElement(J4, Ur({}, l, {
    verticalPoints: A
  })));
}
Ki.displayName = "CartesianGrid";
var t8 = ["type", "layout", "connectNulls", "ref"], r8 = ["key"];
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function yw(e, t) {
  if (e == null) return {};
  var r = n8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function n8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
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
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mw(Object(r), !0).forEach(function(n) {
      kt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mn(e) {
  return s8(e) || o8(e) || i8(e) || a8();
}
function a8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i8(e, t) {
  if (e) {
    if (typeof e == "string") return Hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hp(e, t);
  }
}
function o8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function s8(e) {
  if (Array.isArray(e)) return Hp(e);
}
function Hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Q_(n.key), n);
  }
}
function c8(e, t, r) {
  return t && gw(e.prototype, t), r && gw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function l8(e, t, r) {
  return t = ms(t), f8(e, J_() ? Reflect.construct(t, r || [], ms(e).constructor) : t.apply(e, r));
}
function f8(e, t) {
  if (t && (Xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return d8(e);
}
function d8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function J_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (J_ = function() {
    return !!e;
  })();
}
function ms(e) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ms(e);
}
function p8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Kp(e, t);
}
function Kp(e, t) {
  return Kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Kp(e, t);
}
function kt(e, t, r) {
  return t = Q_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Q_(e) {
  var t = h8(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function h8(e, t) {
  if (Xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Vi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    u8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = l8(this, t, [].concat(a)), kt(r, "state", {
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
  return p8(t, e), c8(t, [{
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
      var i = this.props, o = i.points, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = xt(l, Ui);
      if (!f)
        return null;
      var d = function(h, v) {
        return {
          x: h.x,
          y: h.y,
          value: h.value,
          errorVal: Le(h.payload, v)
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
      return /* @__PURE__ */ C.createElement(pe, Wa({
        className: "recharts-line-dots",
        key: "dots"
      }, y), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, a, i, o) {
      var s = this.props, u = s.type, c = s.layout, l = s.connectNulls;
      s.ref;
      var f = yw(s, t8), d = ht(ht(ht({}, ie(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: l
      });
      return /* @__PURE__ */ C.createElement(Zr, Wa({}, d, {
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
          var w = g.length / s.length, A = s.map(function(I, j) {
            var M = Math.floor(j * w);
            if (g[M]) {
              var $ = g[M], N = Ve($.x, I.x), R = Ve($.y, I.y);
              return ht(ht({}, I), {}, {
                x: N(m),
                y: R(m)
              });
            }
            if (y) {
              var F = Ve(h * 2, I.x), z = Ve(v / 2, I.y);
              return ht(ht({}, I), {}, {
                x: F(m),
                y: z(m)
              });
            }
            return ht(ht({}, I), {}, {
              x: I.x,
              y: I.y
            });
          });
          return i.renderCurveStatically(A, n, a);
        }
        var _ = Ve(0, x), P = _(m), k;
        if (u) {
          var T = "".concat(u).split(/[,\s]+/gim).map(function(I) {
            return parseFloat(I);
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
      }, P = _.r, k = P === void 0 ? 3 : P, T = _.strokeWidth, I = T === void 0 ? 2 : T, j = uS(o) ? o : {}, M = j.clipDot, $ = M === void 0 ? !0 : M, N = k * 2 + I;
      return /* @__PURE__ */ C.createElement(pe, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? d : d - p / 2,
        y: m ? f : f - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !$ && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: d - N / 2,
        y: f - N / 2,
        width: p + N,
        height: y + N
      }))) : null, !g && this.renderCurve(w, A), this.renderErrorBar(w, A), (g || o) && this.renderDots(w, $, A), (!h || b) && Tt.renderCallByParent(this.props, s));
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
        var o = a.key, s = yw(a, r8), u = de("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ C.createElement(Hi, Wa({
          key: o
        }, s, {
          className: u
        }));
      }
      return i;
    }
  }]);
})(jt);
kt(Vi, "displayName", "Line");
kt(Vi, "defaultProps", {
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
kt(Vi, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, i = e.yAxisTicks, o = e.dataKey, s = e.bandSize, u = e.displayedData, c = e.offset, l = t.layout, f = u.map(function(d, p) {
    var y = Le(d, o);
    return l === "horizontal" ? {
      x: Ko({
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
      y: Ko({
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
var v8 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], y8 = ["key"], eP;
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function tP(e, t) {
  if (e == null) return {};
  var r = m8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function m8(e, t) {
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
function bw(e, t) {
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
    t % 2 ? bw(Object(r), !0).forEach(function(n) {
      Vt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, nP(n.key), n);
  }
}
function b8(e, t, r) {
  return t && xw(e.prototype, t), r && xw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function x8(e, t, r) {
  return t = gs(t), w8(e, rP() ? Reflect.construct(t, r || [], gs(e).constructor) : t.apply(e, r));
}
function w8(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return O8(e);
}
function O8(e) {
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
function S8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vp(e, t);
}
function Vp(e, t) {
  return Vp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Vp(e, t);
}
function Vt(e, t, r) {
  return t = nP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nP(e) {
  var t = A8(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function A8(e, t) {
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
    g8(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = x8(this, t, [].concat(a)), Vt(r, "state", {
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
  return S8(t, e), b8(t, [{
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
      var p = tP(s, v8);
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
              var T = h[k], I = Ve(T.x, _.x), j = Ve(T.y, _.y);
              return gr(gr({}, _), {}, {
                x: I(g),
                y: j(g)
              });
            }
            return _;
          }), m;
          if (G(u) && typeof u == "number") {
            var w = Ve(v, u);
            m = w(g);
          } else if (le(u) || ia(u)) {
            var A = Ve(v, 0);
            m = A(g);
          } else
            m = u.map(function(_, P) {
              var k = Math.floor(P * x);
              if (v[k]) {
                var T = v[k], I = Ve(T.x, _.x), j = Ve(T.y, _.y);
                return gr(gr({}, _), {}, {
                  x: I(g),
                  y: j(g)
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
      }, P = _.r, k = P === void 0 ? 3 : P, T = _.strokeWidth, I = T === void 0 ? 2 : T, j = uS(o) ? o : {}, M = j.clipDot, $ = M === void 0 ? !0 : M, N = k * 2 + I;
      return /* @__PURE__ */ C.createElement(pe, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? l : l - p / 2,
        y: m ? c : c - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !$ && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(A)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: l - N / 2,
        y: c - N / 2,
        width: p + N,
        height: y + N
      }))) : null, g ? null : this.renderArea(w, A), (o || g) && this.renderDots(w, $, A), (!h || b) && Tt.renderCallByParent(this.props, s));
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
eP = Ir;
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
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, u = e.dataKey, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, y = c && c.length, h = eP.getBaseValue(t, r, n, a), v = p === "horizontal", b = !1, g = f.map(function(O, m) {
    var w;
    y ? w = c[l + m] : (w = Le(O, u), Array.isArray(w) ? b = !0 : w = [h, w]);
    var A = w[1] == null || y && Le(O, u) == null;
    return v ? {
      x: Ko({
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
      y: Ko({
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
    var n = de("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = tP(t, y8);
    r = /* @__PURE__ */ C.createElement(Hi, Hr({}, i, {
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
function _8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function P8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, oP(n.key), n);
  }
}
function T8(e, t, r) {
  return t && P8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function E8(e, t, r) {
  return t = bs(t), C8(e, aP() ? Reflect.construct(t, r || [], bs(e).constructor) : t.apply(e, r));
}
function C8(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return j8(e);
}
function j8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function aP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (aP = function() {
    return !!e;
  })();
}
function bs(e) {
  return bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, bs(e);
}
function M8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gp(e, t);
}
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Gp(e, t);
}
function iP(e, t, r) {
  return t = oP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oP(e) {
  var t = $8(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function $8(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Yp() {
  return Yp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yp.apply(this, arguments);
}
function I8(e) {
  var t = e.xAxisId, r = Ev(), n = Cv(), a = B_(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(la, Yp({}, a, {
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
    return _8(this, t), E8(this, t, arguments);
  }
  return M8(t, e), T8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(I8, this.props);
    }
  }]);
})(C.Component);
iP(vr, "displayName", "XAxis");
iP(vr, "defaultProps", {
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
function k8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function N8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, cP(n.key), n);
  }
}
function D8(e, t, r) {
  return t && N8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function R8(e, t, r) {
  return t = xs(t), L8(e, sP() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r));
}
function L8(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return q8(e);
}
function q8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sP = function() {
    return !!e;
  })();
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function B8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xp(e, t);
}
function uP(e, t, r) {
  return t = cP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cP(e) {
  var t = F8(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function F8(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qn(n) != "object") return n;
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
var z8 = function(t) {
  var r = t.yAxisId, n = Ev(), a = Cv(), i = F_(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(la, Zp({}, i, {
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
    return k8(this, t), R8(this, t, arguments);
  }
  return B8(t, e), D8(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(z8, this.props);
    }
  }]);
})(C.Component);
uP(yr, "displayName", "YAxis");
uP(yr, "defaultProps", {
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
function ww(e) {
  return K8(e) || H8(e) || U8(e) || W8();
}
function W8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U8(e, t) {
  if (e) {
    if (typeof e == "string") return Jp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jp(e, t);
  }
}
function H8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function K8(e) {
  if (Array.isArray(e)) return Jp(e);
}
function Jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Qp = function(t, r, n, a, i) {
  var o = xt(t, Mv), s = xt(t, au), u = [].concat(ww(o), ww(s)), c = xt(t, ou), l = "".concat(a, "Id"), f = a[0], d = r;
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
}, wd = { exports: {} }, Ow;
function V8() {
  return Ow || (Ow = 1, (function(e) {
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
  })(wd)), wd.exports;
}
var G8 = V8();
const Y8 = /* @__PURE__ */ _e(G8);
var Od = new Y8(), Sd = "recharts.syncMouseEvents";
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function X8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Z8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lP(n.key), n);
  }
}
function J8(e, t, r) {
  return t && Z8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Ad(e, t, r) {
  return t = lP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lP(e) {
  var t = Q8(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function Q8(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var e6 = /* @__PURE__ */ (function() {
  function e() {
    X8(this, e), Ad(this, "activeIndex", 0), Ad(this, "coordinateList", []), Ad(this, "layout", "horizontal");
  }
  return J8(e, [{
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
function t6(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && G(n) && G(a))
      return !0;
  }
  return !1;
}
function r6(e, t, r, n) {
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
function fP(e) {
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
function n6(e, t, r) {
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
      return fP(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
}
function Sw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sw(Object(r), !0).forEach(function(n) {
      a6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function a6(e, t, r) {
  return t = i6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function i6(e) {
  var t = o6(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function o6(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function s6(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var y, h = Zr;
  if (d === "ScatterChart")
    y = o, h = b3;
  else if (d === "BarChart")
    y = r6(f, o, u, l), h = Sv;
  else if (f === "radial") {
    var v = fP(o), b = v.cx, g = v.cy, x = v.radius, O = v.startAngle, m = v.endAngle;
    y = {
      cx: b,
      cy: g,
      startAngle: O,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, h = o_;
  } else
    y = {
      points: n6(f, o, u)
    }, h = Zr;
  var w = vo(vo(vo(vo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), y), ie(p, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: de("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ Dt(p) ? /* @__PURE__ */ He(p, w) : /* @__PURE__ */ iO(h, w);
}
var u6 = ["item"], c6 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
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
function Aw(e, t) {
  return d6(e) || f6(e, t) || pP(e, t) || l6();
}
function l6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f6(e, t) {
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
function d6(e) {
  if (Array.isArray(e)) return e;
}
function _w(e, t) {
  if (e == null) return {};
  var r = p6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function p6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function h6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hP(n.key), n);
  }
}
function y6(e, t, r) {
  return t && v6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function m6(e, t, r) {
  return t = ws(t), g6(e, dP() ? Reflect.construct(t, r || [], ws(e).constructor) : t.apply(e, r));
}
function g6(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return b6(e);
}
function b6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (dP = function() {
    return !!e;
  })();
}
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ws(e);
}
function x6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && eh(e, t);
}
function eh(e, t) {
  return eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, eh(e, t);
}
function ta(e) {
  return S6(e) || O6(e) || pP(e) || w6();
}
function w6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pP(e, t) {
  if (e) {
    if (typeof e == "string") return th(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return th(e, t);
  }
}
function O6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function S6(e) {
  if (Array.isArray(e)) return th(e);
}
function th(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pw(Object(r), !0).forEach(function(n) {
      se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function se(e, t, r) {
  return t = hP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hP(e) {
  var t = A6(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function A6(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _6 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, P6 = {
  width: "100%",
  height: "100%"
}, vP = {
  x: 0,
  y: 0
};
function yo(e) {
  return e;
}
var T6 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, E6 = function(t, r, n, a) {
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
  return vP;
}, su = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(ta(s), ta(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && G(a) && G(i) ? t.slice(a, i + 1) : [];
};
function yP(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var rh = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, s = su(r, t);
  return n < 0 || !i || !i.length || n >= s.length ? null : i.reduce(function(u, c) {
    var l, f = (l = c.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? s : f;
      d = wo(p, o.dataKey, a);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(ta(u), [e_(c, d)]) : u;
  }, []);
}, Tw = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = T6(i, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, l = qR(o, s, c, u);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = rh(t, r, l, f), p = E6(n, s, l, i);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, C6 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = GA(l, i);
  return n.reduce(function(y, h) {
    var v, b = h.type.defaultProps !== void 0 ? W(W({}, h.type.defaultProps), h.props) : h.props, g = b.type, x = b.dataKey, O = b.allowDataOverflow, m = b.allowDuplicatedCategory, w = b.scale, A = b.ticks, _ = b.includeHidden, P = b[o];
    if (y[P])
      return y;
    var k = su(t.data, {
      graphicalItems: a.filter(function(L) {
        var H, X = o in L.props ? L.props[o] : (H = L.type.defaultProps) === null || H === void 0 ? void 0 : H[o];
        return X === P;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), T = k.length, I, j, M;
    t6(b.domain, O, g) && (I = vp(b.domain, null, O), p && (g === "number" || w !== "auto") && (M = qa(k, x, "category")));
    var $ = yP(g);
    if (!I || I.length === 0) {
      var N, R = (N = b.domain) !== null && N !== void 0 ? N : $;
      if (x) {
        if (I = qa(k, x, g), g === "category" && p) {
          var F = l2(I);
          m && F ? (j = I, I = os(0, T)) : m || (I = mx(R, I, h).reduce(function(L, H) {
            return L.indexOf(H) >= 0 ? L : [].concat(ta(L), [H]);
          }, []));
        } else if (g === "category")
          m ? I = I.filter(function(L) {
            return L !== "" && !le(L);
          }) : I = mx(R, I, h).reduce(function(L, H) {
            return L.indexOf(H) >= 0 || H === "" || le(H) ? L : [].concat(ta(L), [H]);
          }, []);
        else if (g === "number") {
          var z = UR(k, a.filter(function(L) {
            var H, X, te = o in L.props ? L.props[o] : (H = L.type.defaultProps) === null || H === void 0 ? void 0 : H[o], ne = "hide" in L.props ? L.props.hide : (X = L.type.defaultProps) === null || X === void 0 ? void 0 : X.hide;
            return te === P && (_ || !ne);
          }), x, i, l);
          z && (I = z);
        }
        p && (g === "number" || w !== "auto") && (M = qa(k, x, "category"));
      } else p ? I = os(0, T) : s && s[P] && s[P].hasStack && g === "number" ? I = d === "expand" ? [0, 1] : QA(s[P].stackGroups, u, c) : I = VA(k, a.filter(function(L) {
        var H = o in L.props ? L.props[o] : L.type.defaultProps[o], X = "hide" in L.props ? L.props.hide : L.type.defaultProps.hide;
        return H === P && (_ || !X);
      }), g, l, !0);
      if (g === "number")
        I = Qp(f, I, P, i, A), R && (I = vp(R, I, O));
      else if (g === "category" && R) {
        var D = R, q = I.every(function(L) {
          return D.indexOf(L) >= 0;
        });
        q && (I = D);
      }
    }
    return W(W({}, y), {}, se({}, P, W(W({}, b), {}, {
      axisType: i,
      domain: I,
      categoricalDomain: M,
      duplicateDomain: j,
      originalDomain: (v = b.domain) !== null && v !== void 0 ? v : $,
      isCategorical: p,
      layout: l
    })));
  }, {});
}, j6 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = su(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, y = GA(l, i), h = -1;
  return n.reduce(function(v, b) {
    var g = b.type.defaultProps !== void 0 ? W(W({}, b.type.defaultProps), b.props) : b.props, x = g[o], O = yP("number");
    if (!v[x]) {
      h++;
      var m;
      return y ? m = os(0, p) : s && s[x] && s[x].hasStack ? (m = QA(s[x].stackGroups, u, c), m = Qp(f, m, x, i)) : (m = vp(O, VA(d, n.filter(function(w) {
        var A, _, P = o in w.props ? w.props[o] : (A = w.type.defaultProps) === null || A === void 0 ? void 0 : A[o], k = "hide" in w.props ? w.props.hide : (_ = w.type.defaultProps) === null || _ === void 0 ? void 0 : _.hide;
        return P === x && !k;
      }), "number", l), a.defaultProps.allowDataOverflow), m = Qp(f, m, x, i)), W(W({}, v), {}, se({}, x, W(W({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: bt(_6, "".concat(i, ".").concat(h % 2), null),
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
}, M6 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(a, "Id"), d = xt(l, i), p = {};
  return d && d.length ? p = C6(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = j6(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, $6 = function(t) {
  var r = xr(t), n = ir(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Yh(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Vo(r, n)
  };
}, Ew = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = yt(r, Wn), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, I6 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = or(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Cw = function(t) {
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
}, k6 = function(t, r) {
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
  p && (b.bottom += p.props.height || Wn.defaultProps.height), y && r && (b = zR(b, a, n, r));
  var x = c - b.left - b.right, O = l - b.top - b.bottom;
  return W(W({
    brushBottom: g
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(O, 0)
  });
}, N6 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, uu = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(b, g) {
    var x = g.graphicalItems, O = g.stackGroups, m = g.offset, w = g.updateId, A = g.dataStartIndex, _ = g.dataEndIndex, P = b.barSize, k = b.layout, T = b.barGap, I = b.barCategoryGap, j = b.maxBarSize, M = Cw(k), $ = M.numericAxisName, N = M.cateAxisName, R = I6(x), F = [];
    return x.forEach(function(z, D) {
      var q = su(b.data, {
        graphicalItems: [z],
        dataStartIndex: A,
        dataEndIndex: _
      }), L = z.type.defaultProps !== void 0 ? W(W({}, z.type.defaultProps), z.props) : z.props, H = L.dataKey, X = L.maxBarSize, te = L["".concat($, "Id")], ne = L["".concat(N, "Id")], ee = {}, J = u.reduce(function(ye, Be) {
        var er, fn, dn = g["".concat(Be.axisType, "Map")], Zi = L["".concat(Be.axisType, "Id")];
        dn && dn[Zi] || Be.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? lt(!1, "Specifying a(n) ".concat(Be.axisType, "Id requires a corresponding ").concat(
          Be.axisType,
          "Id on the targeted graphical component "
        ).concat((er = z == null || (fn = z.type) === null || fn === void 0 ? void 0 : fn.displayName) !== null && er !== void 0 ? er : "")) : lt());
        var ma = dn[Zi];
        return W(W({}, ye), {}, se(se({}, Be.axisType, ma), "".concat(Be.axisType, "Ticks"), ir(ma)));
      }, ee), U = J[N], V = J["".concat(N, "Ticks")], Z = O && O[te] && O[te].hasStack && QR(z, O[te].stackGroups), E = or(z.type).indexOf("Bar") >= 0, Y = Vo(U, V), B = [], ae = R && BR({
        barSize: P,
        stackGroups: O,
        totalSize: N6(J, N)
      });
      if (E) {
        var ce, oe, Se = le(X) ? j : X, Te = (ce = (oe = Vo(U, V, !0)) !== null && oe !== void 0 ? oe : Se) !== null && ce !== void 0 ? ce : 0;
        B = FR({
          barGap: T,
          barCategoryGap: I,
          bandSize: Te !== Y ? Te : Y,
          sizeList: ae[ne],
          maxBarSize: Se
        }), Te !== Y && (B = B.map(function(ye) {
          return W(W({}, ye), {}, {
            position: W(W({}, ye.position), {}, {
              offset: ye.position.offset - Te / 2
            })
          });
        }));
      }
      var me = z && z.type && z.type.getComposedData;
      me && F.push({
        props: W(W({}, me(W(W({}, J), {}, {
          displayedData: q,
          props: b,
          dataKey: H,
          item: z,
          bandSize: Y,
          barPosition: B,
          offset: m,
          stackedData: Z,
          layout: k,
          dataStartIndex: A,
          dataEndIndex: _
        }))), {}, se(se(se({
          key: z.key || "item-".concat(D)
        }, $, J[$]), N, J[N]), "animationId", w)),
        childIndex: w2(z, b.children),
        item: z
      });
    }), F;
  }, p = function(b, g) {
    var x = b.props, O = b.dataStartIndex, m = b.dataEndIndex, w = b.updateId;
    if (!Tg({
      props: x
    }))
      return null;
    var A = x.children, _ = x.layout, P = x.stackOffset, k = x.data, T = x.reverseStackOrder, I = Cw(_), j = I.numericAxisName, M = I.cateAxisName, $ = xt(A, n), N = ZR(k, $, "".concat(j, "Id"), "".concat(M, "Id"), P, T), R = u.reduce(function(L, H) {
      var X = "".concat(H.axisType, "Map");
      return W(W({}, L), {}, se({}, X, M6(x, W(W({}, H), {}, {
        graphicalItems: $,
        stackGroups: H.axisType === j && N,
        dataStartIndex: O,
        dataEndIndex: m
      }))));
    }, {}), F = k6(W(W({}, R), {}, {
      props: x,
      graphicalItems: $
    }), g?.legendBBox);
    Object.keys(R).forEach(function(L) {
      R[L] = l(x, R[L], F, L.replace("Map", ""), r);
    });
    var z = R["".concat(M, "Map")], D = $6(z), q = d(x, W(W({}, R), {}, {
      dataStartIndex: O,
      dataEndIndex: m,
      updateId: w,
      graphicalItems: $,
      stackGroups: N,
      offset: F
    }));
    return W(W({
      formattedGraphicalItems: q,
      graphicalItems: $,
      offset: F,
      stackGroups: N
    }, D), R);
  }, y = /* @__PURE__ */ (function(v) {
    function b(g) {
      var x, O, m;
      return h6(this, b), m = m6(this, b, [g]), se(m, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), se(m, "accessibilityManager", new e6()), se(m, "handleLegendBBoxUpdate", function(w) {
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
        var A = x2(w), _ = bt(m.props, "".concat(A));
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
        m.props.syncId !== void 0 && Od.emit(Sd, m.props.syncId, w, m.eventEmitterSymbol);
      }), se(m, "applySyncEvent", function(w) {
        var A = m.props, _ = A.layout, P = A.syncMethod, k = m.state.updateId, T = w.dataStartIndex, I = w.dataEndIndex;
        if (w.dataStartIndex !== void 0 || w.dataEndIndex !== void 0)
          m.setState(W({
            dataStartIndex: T,
            dataEndIndex: I
          }, p({
            props: m.props,
            dataStartIndex: T,
            dataEndIndex: I,
            updateId: k
          }, m.state)));
        else if (w.activeTooltipIndex !== void 0) {
          var j = w.chartX, M = w.chartY, $ = w.activeTooltipIndex, N = m.state, R = N.offset, F = N.tooltipTicks;
          if (!R)
            return;
          if (typeof P == "function")
            $ = P(F, w);
          else if (P === "value") {
            $ = -1;
            for (var z = 0; z < F.length; z++)
              if (F[z].value === w.activeLabel) {
                $ = z;
                break;
              }
          }
          var D = W(W({}, R), {}, {
            x: R.left,
            y: R.top
          }), q = Math.min(j, D.x + D.width), L = Math.min(M, D.y + D.height), H = F[$] && F[$].value, X = rh(m.state, m.props.data, $), te = F[$] ? {
            x: _ === "horizontal" ? F[$].coordinate : q,
            y: _ === "horizontal" ? L : F[$].coordinate
          } : vP;
          m.setState(W(W({}, w), {}, {
            activeLabel: H,
            activeCoordinate: te,
            activePayload: X,
            activeTooltipIndex: $
          }));
        } else
          m.setState(w);
      }), se(m, "renderCursor", function(w) {
        var A, _ = m.state, P = _.isTooltipActive, k = _.activeCoordinate, T = _.activePayload, I = _.offset, j = _.activeTooltipIndex, M = _.tooltipAxisBandSize, $ = m.getTooltipEventType(), N = (A = w.props.active) !== null && A !== void 0 ? A : P, R = m.props.layout, F = w.key || "_recharts-cursor";
        return /* @__PURE__ */ C.createElement(s6, {
          key: F,
          activeCoordinate: k,
          activePayload: T,
          activeTooltipIndex: j,
          chartName: r,
          element: w,
          isActive: N,
          layout: R,
          offset: I,
          tooltipAxisBandSize: M,
          tooltipEventType: $
        });
      }), se(m, "renderPolarAxis", function(w, A, _) {
        var P = bt(w, "type.axisType"), k = bt(m.state, "".concat(P, "Map")), T = w.type.defaultProps, I = T !== void 0 ? W(W({}, T), w.props) : w.props, j = k && k[I["".concat(P, "Id")]];
        return /* @__PURE__ */ He(w, W(W({}, j), {}, {
          className: de(P, j.className),
          key: w.key || "".concat(A, "-").concat(_),
          ticks: ir(j, !0)
        }));
      }), se(m, "renderPolarGrid", function(w) {
        var A = w.props, _ = A.radialLines, P = A.polarAngles, k = A.polarRadius, T = m.state, I = T.radiusAxisMap, j = T.angleAxisMap, M = xr(I), $ = xr(j), N = $.cx, R = $.cy, F = $.innerRadius, z = $.outerRadius;
        return /* @__PURE__ */ He(w, {
          polarAngles: Array.isArray(P) ? P : ir($, !0).map(function(D) {
            return D.coordinate;
          }),
          polarRadius: Array.isArray(k) ? k : ir(M, !0).map(function(D) {
            return D.coordinate;
          }),
          cx: N,
          cy: R,
          innerRadius: F,
          outerRadius: z,
          key: w.key || "polar-grid",
          radialLines: _
        });
      }), se(m, "renderLegend", function() {
        var w = m.state.formattedGraphicalItems, A = m.props, _ = A.children, P = A.width, k = A.height, T = m.props.margin || {}, I = P - (T.left || 0) - (T.right || 0), j = HA({
          children: _,
          formattedGraphicalItems: w,
          legendWidth: I,
          legendContent: c
        });
        if (!j)
          return null;
        var M = j.item, $ = _w(j, u6);
        return /* @__PURE__ */ He(M, W(W({}, $), {}, {
          chartWidth: P,
          chartHeight: k,
          margin: T,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), se(m, "renderTooltip", function() {
        var w, A = m.props, _ = A.children, P = A.accessibilityLayer, k = yt(_, Ut);
        if (!k)
          return null;
        var T = m.state, I = T.isTooltipActive, j = T.activeCoordinate, M = T.activePayload, $ = T.activeLabel, N = T.offset, R = (w = k.props.active) !== null && w !== void 0 ? w : I;
        return /* @__PURE__ */ He(k, {
          viewBox: W(W({}, N), {}, {
            x: N.left,
            y: N.top
          }),
          active: R,
          label: $,
          payload: R ? M : [],
          coordinate: j,
          accessibilityLayer: P
        });
      }), se(m, "renderBrush", function(w) {
        var A = m.props, _ = A.margin, P = A.data, k = m.state, T = k.offset, I = k.dataStartIndex, j = k.dataEndIndex, M = k.updateId;
        return /* @__PURE__ */ He(w, {
          key: w.key || "_recharts-brush",
          onChange: uo(m.handleBrushChange, w.props.onChange),
          data: P,
          x: G(w.props.x) ? w.props.x : T.left,
          y: G(w.props.y) ? w.props.y : T.top + T.height + T.brushBottom - (_.bottom || 0),
          width: G(w.props.width) ? w.props.width : T.width,
          startIndex: I,
          endIndex: j,
          updateId: "brush-".concat(M)
        });
      }), se(m, "renderReferenceElement", function(w, A, _) {
        if (!w)
          return null;
        var P = m, k = P.clipPathId, T = m.state, I = T.xAxisMap, j = T.yAxisMap, M = T.offset, $ = w.type.defaultProps || {}, N = w.props, R = N.xAxisId, F = R === void 0 ? $.xAxisId : R, z = N.yAxisId, D = z === void 0 ? $.yAxisId : z;
        return /* @__PURE__ */ He(w, {
          key: w.key || "".concat(A, "-").concat(_),
          xAxis: I[F],
          yAxis: j[D],
          viewBox: {
            x: M.left,
            y: M.top,
            width: M.width,
            height: M.height
          },
          clipPathId: k
        });
      }), se(m, "renderActivePoints", function(w) {
        var A = w.item, _ = w.activePoint, P = w.basePoint, k = w.childIndex, T = w.isRange, I = [], j = A.props.key, M = A.item.type.defaultProps !== void 0 ? W(W({}, A.item.type.defaultProps), A.item.props) : A.item.props, $ = M.activeDot, N = M.dataKey, R = W(W({
          index: k,
          dataKey: N,
          cx: _.x,
          cy: _.y,
          r: 4,
          fill: wv(A.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: _.payload,
          value: _.value
        }, ie($, !1)), Oo($));
        return I.push(b.renderActiveDot($, R, "".concat(j, "-activePoint-").concat(k))), P ? I.push(b.renderActiveDot($, W(W({}, R), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(j, "-basePoint-").concat(k))) : T && I.push(null), I;
      }), se(m, "renderGraphicChild", function(w, A, _) {
        var P = m.filterFormatItem(w, A, _);
        if (!P)
          return null;
        var k = m.getTooltipEventType(), T = m.state, I = T.isTooltipActive, j = T.tooltipAxis, M = T.activeTooltipIndex, $ = T.activeLabel, N = m.props.children, R = yt(N, Ut), F = P.props, z = F.points, D = F.isRange, q = F.baseLine, L = P.item.type.defaultProps !== void 0 ? W(W({}, P.item.type.defaultProps), P.item.props) : P.item.props, H = L.activeDot, X = L.hide, te = L.activeBar, ne = L.activeShape, ee = !!(!X && I && R && (H || te || ne)), J = {};
        k !== "axis" && R && R.props.trigger === "click" ? J = {
          onClick: uo(m.handleItemMouseEnter, w.props.onClick)
        } : k !== "axis" && (J = {
          onMouseLeave: uo(m.handleItemMouseLeave, w.props.onMouseLeave),
          onMouseEnter: uo(m.handleItemMouseEnter, w.props.onMouseEnter)
        });
        var U = /* @__PURE__ */ He(w, W(W({}, P.props), J));
        function V(Be) {
          return typeof j.dataKey == "function" ? j.dataKey(Be.payload) : null;
        }
        if (ee)
          if (M >= 0) {
            var Z, E;
            if (j.dataKey && !j.allowDuplicatedCategory) {
              var Y = typeof j.dataKey == "function" ? V : "payload.".concat(j.dataKey.toString());
              Z = wo(z, Y, $), E = D && q && wo(q, Y, $);
            } else
              Z = z?.[M], E = D && q && q[M];
            if (ne || te) {
              var B = w.props.activeIndex !== void 0 ? w.props.activeIndex : M;
              return [/* @__PURE__ */ He(w, W(W(W({}, P.props), J), {}, {
                activeIndex: B
              })), null, null];
            }
            if (!le(Z))
              return [U].concat(ta(m.renderActivePoints({
                item: P,
                activePoint: Z,
                basePoint: E,
                childIndex: M,
                isRange: D
              })));
          } else {
            var ae, ce = (ae = m.getItemByXY(m.state.activeCoordinate)) !== null && ae !== void 0 ? ae : {
              graphicalItem: U
            }, oe = ce.graphicalItem, Se = oe.item, Te = Se === void 0 ? w : Se, me = oe.childIndex, ye = W(W(W({}, P.props), J), {}, {
              activeIndex: me
            });
            return [/* @__PURE__ */ He(Te, ye), null, null];
          }
        return D ? [U, null, null] : [U, null];
      }), se(m, "renderCustomized", function(w, A, _) {
        return /* @__PURE__ */ He(w, W(W({
          key: "recharts-customized-".concat(_)
        }, m.props), m.state));
      }), se(m, "renderMap", {
        CartesianGrid: {
          handler: yo,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: yo
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: yo
        },
        YAxis: {
          handler: yo
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
      }), m.clipPathId = "".concat((x = g.id) !== null && x !== void 0 ? x : sn("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = US(m.triggeredAfterMouseMove, (O = g.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m;
    }
    return x6(b, v), y6(b, [{
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
            var k = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, T = rh(this.state, m, P, k), I = this.state.tooltipTicks[P].coordinate, j = (this.state.offset.top + w) / 2, M = A === "horizontal", $ = M ? {
              x: I,
              y: j
            } : {
              y: I,
              x: j
            }, N = this.state.formattedGraphicalItems.find(function(F) {
              var z = F.item;
              return z.type.name === "Scatter";
            });
            N && ($ = W(W({}, $), N.props.points[P].tooltipPosition), T = N.props.points[P].tooltipPayload);
            var R = {
              activeTooltipIndex: P,
              isTooltipActive: !0,
              activeLabel: k,
              activePayload: T,
              activeCoordinate: $
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
        Rd([yt(x.children, Ut)], [yt(this.props.children, Ut)]) || this.displayDefaultTooltip();
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
        var O = this.container, m = O.getBoundingClientRect(), w = II(m), A = {
          chartX: Math.round(x.pageX - w.left),
          chartY: Math.round(x.pageY - w.top)
        }, _ = m.width / O.offsetWidth || 1, P = this.inRange(A.chartX, A.chartY, _);
        if (!P)
          return null;
        var k = this.state, T = k.xAxisMap, I = k.yAxisMap, j = this.getTooltipEventType();
        if (j !== "axis" && T && I) {
          var M = xr(T).scale, $ = xr(I).scale, N = M && M.invert ? M.invert(A.chartX) : null, R = $ && $.invert ? $.invert(A.chartY) : null;
          return W(W({}, A), {}, {
            xValue: N,
            yValue: R
          });
        }
        var F = Tw(this.state, this.props.data, this.props.layout, P);
        return F ? W(W({}, A), F) : null;
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
        var T = this.state, I = T.angleAxisMap, j = T.radiusAxisMap;
        if (I && j) {
          var M = xr(I);
          return xx({
            x: A,
            y: _
          }, M);
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
        var A = Oo(this.props, this.handleOuterEvent);
        return W(W({}, A), w);
      }
    }, {
      key: "addListener",
      value: function() {
        Od.on(Sd, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Od.removeListener(Sd, this.handleReceiveSyncEvent);
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
          var w = Aw(m, 2), A = w[0], _ = w[1];
          return W(W({}, O), {}, se({}, A, _.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = Aw(m, 2), A = w[0], _ = w[1];
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
            var P = m[A], k = P.props, T = P.item, I = T.type.defaultProps !== void 0 ? W(W({}, T.type.defaultProps), T.props) : T.props, j = or(T.type);
            if (j === "Bar") {
              var M = (k.data || []).find(function(F) {
                return QB(x, F);
              });
              if (M)
                return {
                  graphicalItem: P,
                  payload: M
                };
            } else if (j === "RadialBar") {
              var $ = (k.data || []).find(function(F) {
                return xx(x, F);
              });
              if ($)
                return {
                  graphicalItem: P,
                  payload: $
                };
            } else if (eu(P, w) || tu(P, w) || _i(P, w)) {
              var N = O5({
                graphicalItem: P,
                activeTooltipItem: w,
                itemData: I.data
              }), R = I.activeIndex === void 0 ? N : I.activeIndex;
              return {
                graphicalItem: W(W({}, P), {}, {
                  childIndex: R
                }),
                payload: _i(P, w) ? I.data[N] : P.props.data[N]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!Tg(this))
          return null;
        var O = this.props, m = O.children, w = O.className, A = O.width, _ = O.height, P = O.style, k = O.compact, T = O.title, I = O.desc, j = _w(O, c6), M = ie(j, !1);
        if (k)
          return /* @__PURE__ */ C.createElement(nw, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ C.createElement(qd, An({}, M, {
            width: A,
            height: _,
            title: T,
            desc: I
          }), this.renderClipPath(), Cg(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var $, N;
          M.tabIndex = ($ = this.props.tabIndex) !== null && $ !== void 0 ? $ : 0, M.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", M.onKeyDown = function(F) {
            x.accessibilityManager.keyboardEvent(F);
          }, M.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var R = this.parseEventsOfWrapper();
        return /* @__PURE__ */ C.createElement(nw, {
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
        }), /* @__PURE__ */ C.createElement(qd, An({}, M, {
          width: A,
          height: _,
          title: T,
          desc: I,
          style: P6
        }), this.renderClipPath(), Cg(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(oO);
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
      var I = Ew(v);
      return W(W(W({}, I), {}, {
        updateId: 0
      }, p(W(W({
        props: v
      }, I), {}, {
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
      var j = Ew(v), M = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, $ = W(W({}, Tw(b, x, A)), {}, {
        updateId: b.updateId + 1
      }), N = W(W(W({}, j), M), $);
      return W(W(W({}, N), p(W({
        props: v
      }, N), b)), {}, {
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
    if (!Rd(O, b.prevChildren)) {
      var R, F, z, D, q = yt(O, Wn), L = q && (R = (F = q.props) === null || F === void 0 ? void 0 : F.startIndex) !== null && R !== void 0 ? R : k, H = q && (z = (D = q.props) === null || D === void 0 ? void 0 : D.endIndex) !== null && z !== void 0 ? z : T, X = L !== k || H !== T, te = !le(x), ne = te && !X ? b.updateId : b.updateId + 1;
      return W(W({
        updateId: ne
      }, p(W(W({
        props: v
      }, b), {}, {
        updateId: ne,
        dataStartIndex: L,
        dataEndIndex: H
      }), b)), {}, {
        prevChildren: O,
        dataStartIndex: L,
        dataEndIndex: H
      });
    }
    return null;
  }), se(y, "renderActiveDot", function(v, b, g) {
    var x;
    return /* @__PURE__ */ Dt(v) ? x = /* @__PURE__ */ He(v, b) : ue(v) ? x = v(b) : x = /* @__PURE__ */ C.createElement(Hi, b), /* @__PURE__ */ C.createElement(pe, {
      className: "recharts-active-dot",
      key: g
    }, x);
  });
  var h = /* @__PURE__ */ We(function(b, g) {
    return /* @__PURE__ */ C.createElement(y, An({}, b, {
      ref: g
    }));
  });
  return h.displayName = y.displayName, h;
}, D6 = uu({
  chartName: "LineChart",
  GraphicalChild: Vi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: Av
}), mP = uu({
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
  formatAxisMap: Av
}), R6 = uu({
  chartName: "PieChart",
  GraphicalChild: hr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Qs
  }, {
    axisType: "radiusAxis",
    AxisComp: Zs
  }],
  formatAxisMap: cL,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), L6 = uu({
  chartName: "AreaChart",
  GraphicalChild: Ir,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: Av
});
const q6 = Ss({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), B6 = {
  light: "",
  dark: ".dark"
}, gP = fe.createContext(null);
function bP() {
  const e = fe.useContext(gP);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const F6 = ({ id: e, className: t, children: r, aspect: n, config: a, ...i }, o) => {
  const s = fe.useId(), u = `chart-${e || s.replace(/:/g, "")}`, c = fe.useRef(null), [l, f] = he(), d = Ke(() => new ResizeObserver((p) => f(p[0].contentRect.height)), []);
  return aO(() => {
    const p = o && "current" in o ? o.current : c.current;
    return p && d.observe(p.parentElement), () => {
      d.disconnect();
    };
  }, [d, o, c]), S(gP.Provider, {
    value: {
      config: a
    },
    children: K("div", {
      "data-chromatic": "ignore",
      "data-chart": u,
      ref: o || c,
      className: Q("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", n ? q6({
        aspect: n
      }) : "aspect-auto h-full", t),
      ...i,
      children: [S(z6, {
        id: u,
        config: a
      }), S(PI, {
        height: l,
        className: "overflow-visible",
        children: r
      })]
    })
  });
}, fa = fe.forwardRef(F6);
fa.displayName = "Chart";
const z6 = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([a, i]) => i.theme || i.color);
  if (!r.length)
    return null;
  const n = Object.entries(B6).map(([a, i]) => `
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
      __html: LT.sanitize(n.join(`
`))
    }
  });
}, Gi = Ut, da = fe.forwardRef(({ active: e, payload: t, className: r, indicator: n = "dot", hideLabel: a = !1, hideIndicator: i = !1, label: o, labelFormatter: s, labelClassName: u, formatter: c, yAxisFormatter: l, color: f, nameKey: d, labelKey: p }, y) => {
  const { config: h } = bP(), v = fe.useMemo(() => {
    if (a || !t?.length)
      return null;
    const [g] = t, x = `${p || g.dataKey || g.name || "value"}`, O = nh(h, g, x), m = !p && typeof o == "string" ? h[o]?.label || o : O?.label;
    return s ? S("div", {
      className: Q("font-medium", u),
      children: s(m, t)
    }) : m ? S("div", {
      className: Q("font-medium", u),
      children: m
    }) : null;
  }, [o, s, t, a, u, h, p]);
  if (!e || !t?.length)
    return null;
  const b = t.length === 1 && n !== "dot";
  return K("div", {
    ref: y,
    className: Q("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary px-3 py-2.5 text-base shadow-lg backdrop-blur", r),
    children: [b ? null : v, S("div", {
      className: "grid gap-2",
      children: t.map((g, x) => {
        const O = `${d || g.name || g.dataKey || "value"}`, m = nh(h, g, O), w = f || g.payload.fill || g.color;
        return S("div", {
          className: Q("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", n === "dot" && "items-center"),
          children: c && g?.value !== void 0 && g.name ? c(g.value, g.name, g, x, g.payload) : K(ft, {
            children: [m?.icon ? S(m.icon, {}) : !i && S("div", {
              className: Q("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
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
              className: Q("flex flex-1 justify-between text-sm leading-none", b ? "items-end" : "items-center"),
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
da.displayName = "ChartTooltip";
const kv = Gr, cu = fe.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a, hiddenKey: i, leftShift: o = 0 }, s) => {
  const { config: u } = bP();
  return r?.length ? S("div", {
    ref: s,
    className: Q("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", n === "top" ? "pb-2" : "pt-2", e),
    style: {
      marginLeft: o
    },
    children: r.map((c) => {
      const l = `${a || c.dataKey || "value"}`, f = nh(u, c, l, i);
      return K("div", {
        className: Q("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"),
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
cu.displayName = "ChartLegend";
function nh(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const a = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  if (r in t && typeof t[r] == "string" ? i = t[r] : a && r in a && typeof a[r] == "string" ? i = a[r] : "dataKey" in t && typeof t.dataKey == "string" && (i = t.dataKey), !(n && n === i))
    return i in e ? e[i] : e[r];
}
const xP = Ft({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), NW = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = he(e), a = tt(() => {
    n(!0);
  }, []), i = tt(() => n(!1), []), o = tt(() => n((s) => !s), []);
  return S(xP.Provider, {
    value: {
      enable: a,
      disable: i,
      toggle: o,
      enabled: r
    },
    children: t
  });
}, W6 = () => {
  const e = dt(xP);
  if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, qt = (e, t) => {
  const r = ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8"];
  return Et(r[e % r.length], t);
}, Et = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function Yi(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Nv = (e) => ({
  dataKey: "x",
  domain: e?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), Dv = (e) => ({
  tickLine: !1,
  axisLine: !1,
  domain: e?.domain,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), lu = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), fu = (e = !1) => ({
  cursor: !0,
  offset: e ? 0 : 20,
  position: {
    y: e ? void 0 : 0,
    x: e ? 120 : void 0
  },
  animationDuration: 100,
  isAnimationActive: !0
});
function pa(e) {
  return We(e);
}
function Rv(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const U6 = ({ index: e, visibleTicksCount: t, payload: r, tickFormatter: n, ...a }) => {
  const i = e === 0, o = e === t - 1;
  return S(_r, {
    ...a,
    textAnchor: i ? "start" : o ? "end" : "middle",
    children: n?.(r.value, r.index) ?? r.value
  });
}, H6 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n, canBeBlurred: a, blurArea: i, lineType: o = "monotoneX", aspect: s, marginTop: u = 0 }, c) => {
  const { enabled: l } = W6(), f = Object.keys(t), d = Uj(12), p = Rv(e), y = Math.max(...p.flatMap((x) => f.map((O) => Yi(n?.tickFormatter ? n.tickFormatter(`${x[O]}`) : `${x[O]}`)))), h = n?.width ?? y + 20, v = !n?.hide, b = !r?.hide, g = !a || !l;
  return S(fa, {
    config: t,
    ref: c,
    aspect: s,
    children: K(L6, {
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
      }), S(Ki, {
        ...lu(),
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
        tick: U6
      }), v && S(yr, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: n?.tickCount,
        tickFormatter: a && l ? () => "**" : n?.tickFormatter,
        ticks: n?.ticks,
        domain: n?.domain,
        width: h
      }), g && S(Gi, {
        ...fu(),
        content: S(da, {
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
      }, x)), Object.keys(t).length > 1 && S(kv, {
        className: "flex justify-start",
        content: S(cu, {})
      })]
    })
  });
}, DW = pa(H6), K6 = ({ dataConfig: e, data: t, xAxis: r, yAxis: n = {
  hide: !0
}, label: a = !1, type: i = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: u, legend: c, showValueUnderLabel: l = !1, highlightLastBar: f = !1, onClick: d }, p) => {
  const y = Object.keys(e), h = Rv(t).map((b, g, x) => f && y.length === 1 && !e[y[0]]?.color ? {
    ...b,
    fill: g === x.length - 1 ? qt(g) : qt(g, 0.5)
  } : b), v = Math.max(...h.flatMap((b) => y.map((g) => Yi(n?.tickFormatter ? n.tickFormatter(`${b[g]}`) : `${b[g]}`))));
  return S(fa, {
    config: e,
    ref: p,
    aspect: u,
    children: K(mP, {
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
      children: [!o && S(Gi, {
        ...fu(),
        content: S(da, {
          yAxisFormatter: n.tickFormatter
        })
      }), !s && S(Ki, {
        ...lu()
      }), S(yr, {
        ...Dv(n),
        tick: !0,
        width: n.width ?? v + 20,
        hide: n.hide
      }), S(vr, {
        ...Nv(r),
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
      }, `bar-${b}`)), c && S(kv, {
        content: S(cu, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, RW = pa(K6), V6 = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const a = e.reduce((i, o) => i + o.value, 0);
  return K(vh, {
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
          return s === 0 ? null : K(yh, {
            children: [S(mh, {
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
            }), !r && K(gh, {
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
}, LW = pa(V6), G6 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n = {
  hide: !0
}, lineType: a = "natural", aspect: i, hideTooltip: o = !1, hideGrid: s = !1 }, u) => {
  const c = Object.keys(t), l = Rv(e), f = Math.max(...l.flatMap((d) => c.map((p) => Yi(n?.tickFormatter ? n.tickFormatter(`${d[p]}`) : `${d[p]}`))));
  return S(fa, {
    config: t,
    ref: u,
    aspect: i,
    children: K(D6, {
      accessibilityLayer: !0,
      data: l,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12
      },
      children: [!s && S(Ki, {
        ...lu()
      }), !r?.hide && S(vr, {
        ...Nv(r)
      }), !n?.hide && S(yr, {
        ...Dv(n),
        width: n.width ?? f + 20
      }), !o && S(Gi, {
        ...fu(),
        content: S(da, {
          yAxisFormatter: n?.tickFormatter
        })
      }), c.map((d, p) => S(Vi, {
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
}, qW = pa(G6), Y6 = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: a }, i) => {
  const o = e.map((c, l) => ({
    ...c,
    fill: t[c.label]?.color ? Et(t[c.label].color) : qt(l)
  })), u = e.map((c) => c.value).reduce((c, l) => c + l);
  return u === 0 && o.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), S(fa, {
    config: t,
    ref: i,
    aspect: n,
    "data-chromatic": "ignore",
    style: {
      height: 380
    },
    children: K(R6, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [u !== 0 && S(Gi, {
        isAnimationActive: !1,
        content: S(da, {
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
          return S(qs, {
            fill: c.fill,
            "aria-label": `${c.label}: ${f} (${(c.value / u * 100).toFixed(0)}%)`
          }, `cell-${l}`);
        }), S(Ge, {
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
      }), S(kv, {
        content: S(cu, {
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
}, BW = pa(Y6);
var Lv = "Progress", qv = 100, [X6] = qT(Lv), [Z6, J6] = X6(Lv), wP = fe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: a,
      getValueLabel: i = Q6,
      ...o
    } = e;
    (a || a === 0) && !jw(a) && console.error(e9(`${a}`, "Progress"));
    const s = jw(a) ? a : qv;
    n !== null && !Mw(n, s) && console.error(t9(`${n}`, "Progress"));
    const u = Mw(n, s) ? n : null, c = Os(u) ? i(u, s) : void 0;
    return /* @__PURE__ */ S(Z6, { scope: r, value: u, max: s, children: /* @__PURE__ */ S(
      bh.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": Os(u) ? u : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": AP(u, s),
        "data-value": u ?? void 0,
        "data-max": s,
        ...o,
        ref: t
      }
    ) });
  }
);
wP.displayName = Lv;
var OP = "ProgressIndicator", SP = fe.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, a = J6(OP, r);
    return /* @__PURE__ */ S(
      bh.div,
      {
        "data-state": AP(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: t
      }
    );
  }
);
SP.displayName = OP;
function Q6(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function AP(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Os(e) {
  return typeof e == "number";
}
function jw(e) {
  return Os(e) && !isNaN(e) && e > 0;
}
function Mw(e, t) {
  return Os(e) && !isNaN(e) && e <= t && e >= 0;
}
function e9(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${qv}\`.`;
}
function t9(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${qv} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var _P = wP, r9 = SP;
const PP = fe.forwardRef(({ className: e, value: t, ...r }, n) => S(_P, {
  ref: n,
  value: t,
  className: Q("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: S(r9, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
PP.displayName = _P.displayName;
function n9(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const a9 = (e) => {
  const t = BT.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((a) => {
    delete a.x, Object.entries(a).forEach(([i, o]) => {
      n < o && (n = o, r = i);
    });
  }), r;
}, i9 = ({ dataConfig: e, data: t, xAxis: r = {
  hide: !0
}, yAxis: n, label: a = !1, aspect: i, hideTooltip: o = !1, hideGrid: s = !1, showRatio: u = !1, valueFormatter: c }, l) => {
  const f = Object.keys(e), d = n9(t), p = Math.max(...d.map((b) => Yi(`${b.x}`))), y = f.reduce((b, g) => (b[g] = t.reduce((x, O) => x + O.values[g], 0), b), {}), h = {
    ...Nv(r),
    type: "number",
    dataKey: a9(d)
  }, v = {
    ...Dv(n),
    type: "category",
    dataKey: "x"
  };
  return S(fa, {
    config: e,
    ref: l,
    aspect: i,
    children: K(mP, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: a || u ? 100 : 0
      },
      children: [!o && S(Gi, {
        ...fu(!0),
        content: S(da, {
          yAxisFormatter: n?.tickFormatter
        })
      }), !s && S(Ki, {
        ...lu(),
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
            content: u ? S(o9, {
              valueFormatter: c,
              total: y[b],
              showLabel: a
            }) : void 0
          }, `label-{${b}}`)
        }, `bar-${b}`)
      }))]
    })
  });
}, FW = pa(i9), o9 = ({ viewBox: e, offset: t = 0, value: r, valueFormatter: n, total: a, showLabel: i }) => {
  const { x: o = 0, y: s = 0, width: u = 0, height: c = 0 } = e, l = o + u + t, f = s + c / 2, d = n ? n(r) : r, p = Yi(`${d}`), y = a > 0 ? Math.round(Number(r) / a * 100) : 0;
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
}, ah = (e) => e == null || typeof e == "object" && "value" in e && (e.value === void 0 || e.value === null) && // ----
typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), ih = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, $w = (e, t = {}) => {
  if (ah(e))
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
  const r = ih(e);
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
}, s9 = (e) => e == null ? {
  value: void 0
} : typeof e == "number" ? { value: e } : e, u9 = (e, t) => {
  if (e == null)
    return {
      numericValue: { value: void 0 },
      formatter: t?.formatter || $w,
      formatterOptions: t?.formatterOptions || {}
    };
  const r = {
    formatter: t?.formatter || $w,
    formatterOptions: t?.formatterOptions || {}
  };
  return typeof e == "number" ? { numericValue: { value: e }, ...r } : typeof e == "object" && e !== null && "numericValue" in e ? {
    numericValue: s9(e.numericValue),
    formatter: e.formatter ? e.formatter : r.formatter,
    formatterOptions: {
      ...r.formatterOptions,
      ...e.formatterOptions
    }
  } : { ...r, numericValue: e };
}, c9 = () => {
  const { locale: e } = FT();
  return tt(
    (t, r) => u9(t, {
      ...r,
      formatterOptions: {
        locale: e,
        ...r?.formatterOptions
      }
    }),
    [e]
  );
}, l9 = {
  "-1": WT,
  1: zT
}, f9 = {
  "-1": "negative",
  0: "neutral",
  1: "positive"
}, TP = We(({ percentage: e, amount: t, invertStatus: r, info: n, hint: a, nullText: i }, o) => {
  const s = c9(), u = s(t, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), c = s(e, {
    formatterOptions: {
      decimalPlaces: 0,
      emptyPlaceholder: i ?? "N/A"
    }
  }), l = ih(c.numericValue), f = ih(u.numericValue);
  let d = "", p = null, y = "", h = "null", v = a;
  if (ah(f))
    d = i ?? "N/A", v = void 0;
  else {
    const b = Math.sign(l ?? 0).toString();
    h = f9[Math.sign((l ?? 0) * (r ? -1 : 1)).toString()];
    const g = ah(l) ? null : c.formatter({
      ...c.numericValue,
      units: "%",
      unitsPosition: "append"
    }, c.formatterOptions), x = u.formatter(u.numericValue, u.formatterOptions);
    d = [g, x].filter(Boolean).join(" · "), y = `${h} balance`, p = h === "neutral" ? null : S(ut, {
      icon: l9[b],
      size: "sm",
      className: Q({
        positive: "text-f1-icon-positive",
        neutral: "text-f1-icon-secondary",
        negative: "text-f1-icon-critical"
      }[h])
    });
  }
  return S(ki, {
    ref: o,
    className: Q({
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
TP.displayName = "F0TagBalance";
const Bv = fe.forwardRef(({ className: e, href: t, onClick: r, disabled: n, children: a, ...i }, o) => {
  const { actions: s } = Pr();
  return K("div", {
    ref: o,
    role: "article",
    className: Q("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary p-4 shadow", (t || r) && !n && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
    ...i,
    onClick: () => {
      if (!n && !t && r)
        return r();
    },
    children: [t && !n && S(fh, {
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
Bv.displayName = "Card";
const Fv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: Q("flex flex-row gap-1.5", e),
  ...t
}));
Fv.displayName = "CardHeader";
const zv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: Q("text-base font-medium text-f1-foreground", e),
  ...t
}));
zv.displayName = "CardTitle";
const Wv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: Q("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
  ...t
}));
Wv.displayName = "CardSubtitle";
const d9 = fe.forwardRef(({ className: e, content: t }, r) => S("div", {
  ref: r,
  className: Q("-ml-1 flex h-6 w-6 items-center justify-center", e),
  children: S(vh, {
    children: K(yh, {
      children: [S(mh, {
        className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
        "aria-label": t,
        children: S(ut, {
          icon: UT,
          size: "md"
        })
      }), S(gh, {
        children: S("p", {
          children: t
        })
      })]
    })
  })
}));
d9.displayName = "CardInfo";
const p9 = fe.forwardRef(({ className: e, title: t, icon: r = uO, ...n }, a) => S(fh, {
  ref: a,
  className: Q("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e),
  role: "button",
  "aria-label": t,
  ...n,
  children: S(ut, {
    size: "sm",
    icon: r,
    className: "text-f1-icon-bold"
  })
}));
p9.displayName = "CardLink";
const Uv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: Q("relative flex grow flex-col", e),
  ...t
}));
Uv.displayName = "CardContent";
const Hv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: Q("flex items-center", e),
  ...t
}));
Hv.displayName = "CardFooter";
const zW = fe.forwardRef(function({ className: t, ...r }, n) {
  return S("div", {
    ref: n,
    className: Q("flex text-3xl font-semibold", t),
    ...r
  });
});
Hv.displayName = "CardComment";
function h9({ primaryAction: e, secondaryActions: t, compact: r = !1 }) {
  const n = HT("(min-width: 640px)");
  if (!(e || i()))
    return null;
  return K(Hv, {
    className: Q("flex-col gap-2 sm:flex-row sm:justify-between [&>div]:z-[1]", "relative -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4", r && "pt-3"),
    children: [t && S("div", {
      className: "flex w-full flex-col gap-md sm:flex-row [&_a]:justify-center sm:[&_a]:justify-start [&_button]:w-full sm:[&_button]:w-fit [&_div]:w-full [&_div]:justify-center sm:[&_div]:w-fit",
      children: Array.isArray(t) ? t.map((o, s) => S(Gt, {
        label: o.label,
        icon: o.icon,
        variant: "outline",
        onClick: o.onClick,
        hideLabel: n && s > 0,
        size: n ? r ? "sm" : "md" : "lg"
      }, s)) : S(gO, {
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
const v9 = ({ avatar: e, compact: t = !1 }) => e.type === "emoji" ? S(KT, {
  emoji: e.emoji,
  size: t ? "sm" : "lg"
}) : e.type === "file" ? S(bO, {
  file: e.file,
  size: t ? "sm" : "lg"
}) : e.type === "icon" ? S(VT, {
  icon: e.icon,
  size: t ? "sm" : "lg"
}) : S(nn, {
  avatar: e,
  size: t ? "sm" : "lg"
});
function y9({ avatar: e, overlay: t = !1, compact: r = !1 }) {
  const n = e.type === "person";
  return S("div", {
    className: Q("mb-1.5 flex h-fit w-fit", t && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && n && "rounded-full", r && "mb-0"),
    children: S(v9, {
      avatar: e,
      compact: r
    })
  });
}
const m9 = {
  info: lO,
  warning: dh,
  critical: fO,
  positive: As
}, Kv = We(({ text: e, level: t }, r) => {
  _s(e, {
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
  return S(ki, {
    ref: r,
    className: Q("pl-0.5", {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }[t]),
    left: S(ut, {
      icon: m9[t],
      size: "md",
      "aria-hidden": !0,
      color: a
    }),
    text: e
  });
});
Kv.displayName = "F0TagAlert";
const g9 = (e) => S("div", {
  "data-cell-type": "alert-tag",
  children: S(Kv, {
    level: e.level,
    text: e.label
  })
}), Wt = {
  text: "pt-[2px]",
  avatar: "pt-[2px]",
  avatarList: "pt-[3px]"
};
function EP(e) {
  return typeof e == "object" && e !== null && "placeholder" in e && typeof e.placeholder == "string";
}
function ha(e, t) {
  return EP(e) ? typeof e == "object" && e !== null && t in e ? e[t] === void 0 : !0 : !1;
}
function va(e, t) {
  if (e !== void 0 && typeof e != "object")
    return e;
  if (!e || typeof e != "object")
    return;
  const n = t in e ? e[t] : void 0, i = EP(e) ? e.placeholder : void 0;
  if (n !== void 0)
    return t === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (i !== void 0)
    return i;
}
function b9(e) {
  if (Iw(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  const t = va(e, "date");
  if (Iw(t))
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
function Iw(e) {
  return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
const CP = (e, t) => {
  const r = va(e, "number"), n = ha(e, "number"), a = {
    unitsPosition: "right",
    units: "",
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: r
    }
  };
  return K("div", {
    className: Q("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", Wt.text], n && "text-f1-foreground-secondary"),
    children: [a.unitsPosition === "left" && a.units && S(kw, {
      units: a.units
    }), a.decimalPlaces !== void 0 ? a.number?.toFixed(a.decimalPlaces) : a.number?.toString() ?? "", a.unitsPosition === "right" && a.units && S(kw, {
      units: a.units
    })]
  });
}, kw = ({ units: e }) => S("span", {
  children: e.toString()
}), x9 = (e, t) => {
  const r = {
    ...typeof e == "object" && "amount" in e ? e : {
      amount: e
    }
  };
  return CP({
    ...typeof e == "object" && "amount" in e ? e : {},
    number: r.amount,
    decimalPlaces: r.currency?.decimalPlaces,
    units: r.currency?.symbol,
    unitsPosition: r.currency?.symbolPosition
  }, t);
}, w9 = (e, t) => {
  const r = e.type ?? "person";
  return S("div", {
    className: Q("pointer-events-auto w-full", t.visualization === "table" && Wt.avatarList),
    children: S(rS, {
      type: r,
      avatars: e.avatarList,
      size: "xs",
      max: e.max
    })
  });
}, O9 = (e, t) => K("div", {
  className: Q("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
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
}), S9 = (e, t) => {
  const r = e.label ?? t.i18n.countries[e.code] ?? e.code;
  return K("div", {
    "data-cell-type": "country",
    className: "flex items-center gap-2",
    children: [S(GT, {
      size: "sm",
      flag: e.code,
      "aria-label": r
    }), " ", S(an, {
      className: "min-w-0 flex-1 text-f1-foreground",
      tag: "span",
      children: r
    })]
  });
}, A9 = (e, t) => {
  const r = b9(e), n = ha(e, "date");
  return S("div", {
    className: Q("monospace text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    children: r
  });
};
var WW = {
  md: 900,
  xl: 1440
}, _9 = {
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
}, UW = {
  special: {
    highlight: "hsl(var(--accent-50))"
  }
};
const Vv = We(({ text: e, ...t }, r) => {
  _s(e, {
    disallowEmpty: !0
  }, {
    componentName: "F0TagDot"
  });
  const n = "color" in t && t.color ? `hsl(${_9[t.color][50]})` : "customColor" in t && t.customColor;
  return n ? S(ki, {
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
Vv.displayName = "F0TagDot";
const P9 = (e) => S("div", {
  "data-cell-type": "dot-tag",
  children: S(Vv, {
    text: e.label,
    color: e.color
  })
}), T9 = (e) => K("div", {
  className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
  "data-cell-type": "file",
  children: [S(bO, {
    file: e
  }), " ", S("span", {
    children: e.name
  })]
}), jP = ({ tooltip: e, children: t }) => e ? S(vh, {
  delayDuration: 100,
  disableHoverableContent: !0,
  children: K(yh, {
    children: [S(mh, {
      asChild: !0,
      className: "pointer-events-auto",
      children: t
    }), S(gh, {
      className: "pointer-events-none max-w-xs",
      children: S("p", {
        className: "font-semibold",
        children: e
      })
    })]
  })
}) : S(ft, {
  children: t
}), MP = (e, t) => S("div", {
  className: Q("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
  children: S(jP, {
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
}), E9 = (e) => S(MP, {
  icon: YT,
  label: e.name
}), C9 = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, j9 = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, M9 = (e, t) => {
  const r = va(e, "text")?.toString() || "", n = ha(e, "text"), a = j9(e), i = C9(e) || 3;
  return S(an, {
    className: Q("whitespace-pre-wrap break-words text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    lines: i,
    disabled: a,
    children: r
  });
}, _d = 100, Nw = 12, $9 = 12, I9 = (e, t) => {
  const r = va(e, "percentage"), n = ha(e, "percentage");
  if (r === void 0)
    return null;
  if (n)
    return S("span", {
      className: Q("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
      "data-cell-type": "percentage",
      children: r
    });
  const a = _d / 2, i = a - Nw / 2, o = i - $9, s = 2 * Math.PI * o, u = (100 - Math.min(Number(r), 100)) / 100 * s, c = typeof e == "object" && "label" in e;
  return K("div", {
    className: "flex items-center gap-2",
    "data-cell-type": "percentage",
    children: [K("svg", {
      viewBox: `0 0 ${_d} ${_d}`,
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
        strokeWidth: Nw,
        strokeDasharray: s,
        strokeDashoffset: u,
        strokeLinecap: "round"
      })]
    }), S("span", {
      className: "text-f1-foreground",
      children: c ? e.label : `${r}%`
    })]
  });
}, k9 = (e, t) => {
  const r = `${e.firstName.toString()} ${e.lastName.toString()}`;
  return K("div", {
    className: Q("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && Wt.avatar),
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
      className: Q("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
      tag: "span",
      children: r
    })]
  });
}, N9 = (e, t) => {
  const r = va(e, "value"), n = ha(e, "value");
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
      children: S(PP, {
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
}, Gv = We(({ text: e, additionalAccessibleText: t, variant: r }, n) => (_s(e, {
  disallowEmpty: !0
}, {
  componentName: "F0TagStatus"
}), S(ki, {
  ref: n,
  className: Q({
    neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
    info: "bg-f1-background-info text-f1-foreground-info",
    positive: "bg-f1-background-positive text-f1-foreground-positive",
    warning: "bg-f1-background-warning text-f1-foreground-warning",
    critical: "bg-f1-background-critical text-f1-foreground-critical"
  }[r]),
  left: S("div", {
    className: Q("m-1 aspect-square w-2 rounded-full", {
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
Gv.displayName = "F0TagStatus";
const D9 = (e) => S("div", {
  "data-cell-type": "status",
  children: S(Gv, {
    variant: e.status,
    text: e.label
  })
}), R9 = {
  synced: {
    icon: As,
    colorClass: "text-f1-icon-positive"
  },
  syncing: {
    icon: JT,
    colorClass: "text-f1-icon-secondary",
    animated: !0
  },
  pending: {
    icon: xO,
    colorClass: "text-f1-icon-secondary"
  },
  partiallySynced: {
    icon: ZT,
    colorClass: "text-f1-icon-warning"
  },
  outdated: {
    icon: dh,
    colorClass: "text-f1-icon-warning"
  },
  failed: {
    icon: XT,
    colorClass: "text-f1-icon-critical"
  }
}, L9 = (e, t) => {
  const r = R9[e.status], n = t.i18n.syncStatus[e.status], a = e.tooltip ?? n, i = S(ut, {
    icon: r.icon,
    "aria-label": a
  });
  return S("div", {
    className: Q("flex items-center", t.visualization === "table" && Wt.avatar),
    "data-cell-type": "sync-status",
    children: S(jP, {
      tooltip: a,
      children: S("div", {
        className: Q("inline-flex items-center", r.colorClass),
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
}, q9 = (e) => S("div", {
  "data-cell-type": "tag",
  children: S(xh, {
    text: e.label,
    icon: e.icon
  })
}), du = We(({ avatar: e, text: t }, r) => (_s(t, {
  disallowEmpty: !0
}, {
  componentName: "F0TagAvatar"
}), S(ki, {
  ref: r,
  className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
  left: S(nn, {
    avatar: e,
    size: "xs"
  }),
  text: t,
  shape: e.type === "person" ? "rounded" : "square"
})));
du.displayName = "AvatarTag";
const $P = We(({ name: e, src: t }, r) => S(du, {
  ref: r,
  avatar: {
    type: "company",
    name: e,
    src: t
  },
  text: e
}));
$P.displayName = "F0TagCompany";
const IP = We(({ src: e, name: t }, r) => S(du, {
  ref: r,
  avatar: {
    type: "person",
    firstName: t,
    lastName: "",
    src: e
  },
  text: t
}));
IP.displayName = "F0TagPerson";
const kP = We(({ name: e, src: t }, r) => S(du, {
  ref: r,
  avatar: {
    type: "team",
    name: e,
    src: t
  },
  text: e
}));
kP.displayName = "F0TagTeam";
const B9 = (e) => {
  const { type: t } = e;
  if (t === "dot") return S(Vv, {
    ...e
  });
  if (t === "person") return S(IP, {
    ...e
  });
  if (t === "team") return S(kP, {
    ...e
  });
  if (t === "company") return S($P, {
    ...e
  });
  if (t === "alert") return S(Kv, {
    ...e
  });
  if (t === "status") return S(Gv, {
    ...e
  });
  if (t === "balance") return S(TP, {
    ...e
  });
  if (t === "raw") return S(xh, {
    ...e
  });
}, oh = ({ tag: e }) => {
  const t = B9(e);
  return t || "Invalid tag type";
}, NP = ({ count: e, list: t }) => {
  const r = S(xh, {
    text: `+${e}`
  });
  return t?.length ? K(pO, {
    children: [S(hO, {
      children: S("span", {
        className: "cursor-pointer",
        children: r
      })
    }), S(vO, {
      side: "top",
      children: K(ph, {
        className: "[*[data-state=visible]_div]:bg-f1-background dark flex max-h-[220px] flex-col",
        children: [t.map((n, a) => S("div", {
          className: "flex w-[172px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n.description ? S(hh, {
            label: n.description,
            children: S("div", {
              children: S(oh, {
                tag: n
              })
            })
          }) : S(oh, {
            tag: n
          })
        }, a)), S(yO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
NP.displayName = "TagCounter";
const DP = ({ type: e, tags: t, max: r = 4, remainingCount: n }) => {
  const a = t.map((i) => ({
    type: e,
    ...i
  }));
  return S(mO, {
    items: a,
    max: r,
    renderListItem: (i) => S(oh, {
      tag: i
    }),
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: n !== void 0,
    renderOverflowIndicator: (i) => S(NP, {
      count: (n ?? 0) + i,
      list: n ? void 0 : a.slice(a.length - i)
    }),
    overflowIndicatorWithPopover: !1,
    className: "flex-1"
  });
};
DP.displayName = "F0TagList";
const F9 = (e) => S(DP, {
  type: e.type,
  tags: e.tags,
  max: e.max
}), z9 = (e, t) => K("div", {
  className: Q("flex items-center gap-2", t.visualization === "table" && Wt.avatar),
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
}), W9 = (e, t) => {
  const r = va(e, "text"), n = ha(e, "text"), a = r?.toString() ?? "";
  return S(an, {
    lines: 1,
    tag: "span",
    className: Q("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Wt.text),
    children: a
  });
}, Qe = {
  text: W9,
  longText: M9,
  number: CP,
  date: A9,
  amount: x9,
  avatarList: w9,
  status: D9,
  alertTag: g9,
  person: k9,
  percentage: I9,
  progressBar: N9,
  company: O9,
  team: z9,
  tag: q9,
  dotTag: P9,
  tagList: F9,
  icon: MP,
  file: T9,
  folder: E9,
  country: S9,
  syncStatus: L9
}, U9 = (e) => e !== void 0 && typeof e == "object", HW = (e, t, r) => {
  const { type: n, value: a } = U9(e) ? e : {
    type: "text",
    value: e ?? r
  }, i = Qe[n];
  return i ? a === void 0 ? r : i(a, {
    visualization: t.visualization,
    i18n: t.i18n
  }) : `[Invalid ${n} renderer]`;
}, H9 = {
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
function K9({ metadata: e }) {
  const { type: t, value: r } = e.property, n = H9[t];
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
      children: S(hh, {
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
function Dw({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: n, title: a, overlay: i = !1 }) {
  const o = Pr(), s = e && e.length > 0, [u, c] = he(!1);
  return !s && !t ? null : K("div", {
    className: Q("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (u || r) && "delay-0 sm:opacity-100", i && "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
    children: [s && S("div", {
      className: "flex items-center justify-center",
      children: S(JO, {
        items: e,
        open: u,
        onOpenChange: c,
        children: S(Ar, {
          label: o.actions.other,
          icon: wO,
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
      children: S(QT, {
        title: a,
        checked: r,
        onCheckedChange: n,
        hideLabel: !0
      })
    })]
  });
}
const KW = ["contain", "cover", "fit-width", "fit-height", "scale-down"], VW = ["xs", "sm", "md", "lg", "xl"], V9 = {
  xs: "h-24",
  sm: "h-32",
  md: "h-40",
  lg: "h-48",
  xl: "h-64"
}, G9 = {
  contain: "object-contain h-full w-full",
  cover: "object-cover h-full w-full",
  "fit-width": "w-full h-auto",
  "fit-height": "object-contain h-full w-auto",
  "scale-down": "object-scale-down h-full w-full"
};
function Y9(e) {
  return G9[e];
}
const X9 = We(function({ compact: t = !1, avatar: r, image: n, imageFit: a = "fit-width", imageSize: i = "sm", blurredBackground: o = !0, title: s, description: u, metadata: c, children: l, link: f, primaryAction: d, secondaryActions: p, otherActions: y, selectable: h = !1, selected: v = !1, onSelect: b, onClick: g, forceVerticalMetadata: x = !1, fullHeight: O = !1, disableOverlayLink: m = !1 }, w) {
  const A = Me(null), _ = (P) => {
    A?.current?.click(), g?.(), P.preventDefault(), P.stopPropagation();
  };
  return K(Bv, {
    className: Q("group relative bg-f1-background shadow-none transition-all", t && "p-3", O && "h-full", (h || y && y.length > 0) && !v && "hover:border-f1-border", f && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", v && "border-f1-border-selected bg-f1-background-selected-secondary"),
    onClick: g,
    ref: w,
    children: [f && !m && S(gO, {
      href: f,
      variant: "unstyled",
      className: Q("z-1 absolute inset-0 block rounded-xl", OO()),
      "aria-label": s,
      ref: A,
      children: " "
    }), n && K("div", {
      className: Q("relative -mx-3 -mt-3 mb-4 rounded-md", V9[i], t && "-mx-2 -mt-2 mb-3", a === "fit-height" && "flex items-center justify-center overflow-hidden", a === "fit-width" && "flex items-center justify-center overflow-hidden", a !== "fit-width" && a !== "fit-height" && "overflow-hidden"),
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
      }), S(eE, {
        src: n,
        alt: s,
        className: Q(Y9(a))
      }), S(Dw, {
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
        children: [K(Fv, {
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
          className: Q("relative flex-col gap-0 p-0", n && !t && "pt-3", t && "flex-row items-center gap-2"),
          children: [r && S(y9, {
            avatar: r,
            overlay: !!n,
            compact: t
          }), K("div", {
            className: Q("flex flex-col gap-0"),
            children: [S(zv, {
              className: Q("text-lg font-semibold text-f1-foreground", t && "line-clamp-1 text-base"),
              children: s
            }), u && S(Wv, {
              className: Q("text-base text-f1-foreground-secondary"),
              children: S(an, {
                lines: t ? 2 : 3,
                children: u
              })
            })]
          })]
        }), !n && S(Dw, {
          otherActions: y,
          selectable: h,
          selected: v,
          onSelect: b,
          title: s
        })]
      }), (c || l) && K(Uv, {
        className: "pointer-events-none",
        children: [c && S("div", {
          className: Q("flex flex-col gap-0.5", t && "gap-x-3 gap-y-0", x && "flex-col gap-y-0.5"),
          children: c.map((P, k) => S(K9, {
            metadata: P
          }, k))
        }), l]
      })]
    }), S(h9, {
      primaryAction: d,
      secondaryActions: p,
      compact: t
    })]
  });
}), Z9 = ({ compact: e = !1 }) => K(Bv, {
  className: Q("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [K(Fv, {
    className: Q("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
    children: [S(At, {
      className: Q("h-10 w-10 rounded-full", e && "h-6 w-6")
    }), K("div", {
      className: Q("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
      children: [S(zv, {
        className: "flex h-6 items-center",
        children: S(At, {
          className: Q("h-4 w-20 rounded-md", e && "h-3")
        })
      }), S(Wv, {
        className: "flex h-5 items-center",
        children: S(At, {
          className: "h-3 w-12 rounded-md"
        })
      })]
    })]
  }), S(Uv, {
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
}), J9 = ["forceVerticalMetadata", "disableOverlayLink"], RP = We((e, t) => {
  const r = J9.reduce((n, a) => {
    const { [a]: i, ...o } = n;
    return o;
  }, e);
  return S(X9, {
    ref: t,
    ...r
  });
}), Q9 = ({ compact: e = !1 }) => S(Z9, {
  compact: e
});
RP.displayName = "F0Card";
const GW = SO(RP, Q9), Pd = [{
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
}], ez = (e, t) => {
  const r = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, n = wT();
  return K("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [S("defs", {
      children: Pd.map((a) => S("clipPath", {
        id: `${n}-${a.id}`,
        children: S("path", {
          d: a.path
        })
      }, a.id))
    }), r ? Pd.map((a) => S("path", {
      d: a.path,
      fill: "currentColor",
      vectorEffect: "non-scaling-stroke"
    }, a.id)) : Pd.map((a) => S("foreignObject", {
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
}, tz = We(ez);
function YW({ title: e, description: t, onClick: r, onClose: n, isVisible: a, dismissable: i = !1, trackVisibility: o, type: s, ...u }) {
  const [c, l] = he(a);
  qe(() => {
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
                icon: tz,
                size: "lg",
                className: "!h-8 !w-8"
              })
            }) : S("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: S(tE, {
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
              icon: AO,
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
const LP = We(({ className: e, ...t }, r) => S(_O, {
  ref: r,
  className: Q("text-f1-foreground-secondary", e),
  ...t
}));
LP.displayName = _O.displayName;
const qP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
qP.displayName = "DialogFooter";
const BP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
BP.displayName = "DialogHeader";
const XW = rE, rz = (e, t, r) => {
  const n = Re[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function nz({ granularities: e, value: t, onChange: r }) {
  const n = Pr(), a = (i) => {
    r(i);
  };
  return K("div", {
    className: "flex flex-col gap-2",
    children: [S("h6", {
      className: "text-sm font-medium",
      children: n.date.selectedBy
    }), S(PO, {
      value: t,
      onValueChange: a,
      as: "list",
      children: S(TO, {
        children: e.map((i) => S($d, {
          value: i,
          children: n.date.granularities[i]?.label || i
        }, i))
      })
    })]
  });
}
const Rw = "__custom__", az = (e, t) => {
  if (!e?.value) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : ly(e.value.from, r.from) && (!e.value.to || !r.to || ly(e.value.to, r.to));
}, iz = ({ presets: e, ...t }) => {
  const [r, n] = he();
  return qe(() => {
    if (t.date) {
      const i = Object.entries(e).find(([o, s]) => az(t.date, s));
      n(i ? i[0] : void 0);
    }
  }, [t.date, e]), S(PO, {
    as: "list",
    value: r,
    onValueChange: (i) => {
      n(i), t.onSelect?.(i);
    },
    children: K(TO, {
      children: [Object.entries(e).map(([i, o]) => S($d, {
        value: i,
        children: o?.label || i
      }, i)), S(nE, {}), S($d, {
        value: Rw,
        children: "Custom"
      }, Rw)]
    })
  });
}, Ua = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, Lw = "__custom__";
function oz({ onSelect: e, defaultValue: t, presets: r = [], granularities: n = ["day"], children: a, compareTo: i, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: u, value: c, asChild: l, ...f }) {
  const d = Pr(), [p, y] = he(c || t);
  qe(() => {
    Ua(c, p) || y(c || t);
  }, [c, t]);
  const h = Ke(() => p?.granularity ?? "day", [p?.granularity]), v = Ke(() => Re[h], [h]), b = Ke(() => Re[h].calendarMode || "single", [h]), g = ($) => {
    x({
      value: v.toRange($ ?? void 0),
      granularity: h
    });
  }, x = ($) => {
    Ua($, p) || (y($), e?.($));
  }, O = ($) => {
    w($ === Lw);
    const N = $ ? r[+$] : void 0;
    N && (x({
      value: Re[N.granularity].toRange(typeof N.value == "function" ? N.value() : N.value),
      granularity: N.granularity
    }), $ !== Lw && f.onOpenChange?.(!1));
  }, [m, w] = he(!1), A = ($) => {
    x({
      value: p?.value,
      granularity: $
    });
  }, _ = Ke(() => r.length > 0 && !m, [r, m]), P = () => {
    w(!1);
  }, k = Ke(() => v.calendarView || "day", [v]), [T, I] = he(o || void 0), j = Ke(() => {
    const $ = (i ?? {})[h] || [];
    if (!p?.value)
      return [];
    const N = p.value, R = $.map((F, z) => {
      const D = typeof F.value == "function" ? F.value(v.toRange(N)) : rz(v.toRange(N), F.value.delta, F.value.units), q = Array.isArray(D) ? D.map((L) => v.toString(L, d)).join(", ") : v.toString(D, d);
      return {
        label: F.label,
        value: (z + 1).toString(),
        description: q,
        dateValue: D
      };
    });
    return R.length === 0 ? [] : [{
      label: d.date.none,
      value: "0",
      description: "",
      dateValue: void 0
    }, ...R];
  }, [i, p, v, h]);
  qe(() => {
    I(o || "0");
  }, [h, o]);
  const M = ($) => {
    I($);
  };
  return qe(() => {
    s?.(T ? j[+T]?.dateValue : void 0);
  }, [T, s, j]), K(aE, {
    open: f.open,
    onOpenChange: f.onOpenChange,
    children: [S(iE, {
      asChild: l,
      children: a
    }), S(oE, {
      className: "w-full overflow-auto",
      align: "start",
      children: _ ? S(iz, {
        presets: r,
        date: p,
        onSelect: O
      }) : K("div", {
        className: "flex gap-4",
        children: [(r.length > 0 || n.length > 1) && K("div", {
          children: [r.length > 0 && S(Gt, {
            icon: sO,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: P
          }), n.length > 1 && S(nz, {
            granularities: n,
            value: h,
            onChange: A
          })]
        }), K("div", {
          className: "min-w-[300px] flex-1",
          children: [S(sE, {
            showInput: !u,
            mode: b,
            view: k,
            onSelect: g,
            defaultSelected: p?.value,
            minDate: f.minDate,
            maxDate: f.maxDate
          }), j.length > 0 && K("div", {
            className: "mt-4 flex flex-col gap-2",
            children: [S("div", {
              className: "text-gray-500 text-sm",
              children: d.date.compareTo
            }), S(uE, {
              label: d.date.compareTo,
              hideLabel: !0,
              placeholder: d.date.compareTo,
              options: j.map(($) => ({
                label: $.label,
                value: $.value,
                description: $.description ?? ""
              })),
              onChange: M,
              value: T
            })]
          })]
        })]
      })
    })]
  });
}
const FP = We(({ value: e, onDateChange: t, granularity: r, onOpenChange: n, minDate: a, maxDate: i, onClear: o, ...s }, u) => {
  const [c, l] = he(""), [f, d] = he(!1), p = Pr();
  qe(() => {
    l(r.toString(e?.value, p));
  }, [e, r, p]);
  const y = (g) => fE(g, r, {
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
    children: S(cE, {
      ...s,
      icon: lE,
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
FP.displayName = "DateInput";
function sz({ onChange: e, value: t, presets: r = [], granularities: n = ["day"], minDate: a, maxDate: i, open: o = !1, ...s }) {
  const [u, c] = he(), [l, f] = he(o);
  qe(() => {
    f(o);
  }, [o]);
  const d = Pr(), p = Ke(() => n[0] ?? "day", [n]), y = tt((w) => {
    const A = w || p;
    if (!Re[A])
      throw new Error(`Invalid granularity ${A}`);
    return {
      ...Re[A],
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
  }, [y]), v = Ke(() => y(u?.granularity), [u?.granularity, y]);
  qe(() => {
    const w = h(t);
    Ua(u, w) || c(w);
  }, [t]);
  const b = (w) => {
    const A = h(w), P = y(A?.granularity).calendarMode !== "range" && A?.granularity === u?.granularity && !Ua(A, u);
    g(A), P && f(!1);
  }, g = (w) => {
    const A = h(w);
    if (c(A), !Ua(A, u)) {
      const _ = y(A?.granularity);
      e?.(A, _.toString(A?.value, d));
    }
  }, x = (w) => {
    f(w), s.onOpenChange?.(w);
  }, O = Ke(() => r.filter((w) => n.includes(w.granularity)), [r, n]), m = Me(null);
  return qe(() => {
    l && m.current && requestAnimationFrame(() => {
      m.current?.focus();
    });
  }, [l]), S(oz, {
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
    children: S(FP, {
      ref: m,
      ...s,
      value: u,
      granularity: v,
      onDateChange: g
    })
  });
}
const ZW = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => Re.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => Re.day.toRange(go(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => Re.day.toRange({
      from: go(/* @__PURE__ */ new Date(), 7),
      to: /* @__PURE__ */ new Date()
    })
  },
  thisWeek: {
    label: "This week",
    granularity: "week",
    value: () => Re.week.toRange(/* @__PURE__ */ new Date())
  },
  lastWeek: {
    label: "Last week",
    granularity: "week",
    value: () => Re.week.toRange(go(/* @__PURE__ */ new Date(), 7))
  },
  thisMonth: {
    label: "This month",
    granularity: "month",
    value: () => Re.month.toRange(/* @__PURE__ */ new Date())
  },
  lastMonth: {
    label: "Last month",
    granularity: "month",
    value: () => Re.month.toRange(ba(/* @__PURE__ */ new Date(), 1))
  },
  last3Months: {
    label: "Last 3 months",
    granularity: "month",
    value: () => Re.month.toRange(ba(/* @__PURE__ */ new Date(), 3))
  },
  last6Months: {
    label: "Last 6 months",
    granularity: "month",
    value: () => Re.month.toRange(ba(/* @__PURE__ */ new Date(), 6))
  },
  thisQuarter: {
    label: "This quarter",
    granularity: "quarter",
    value: () => Re.quarter.toRange(/* @__PURE__ */ new Date())
  },
  lastQuarter: {
    label: "Last quarter",
    granularity: "quarter",
    value: () => Re.quarter.toRange(ba(/* @__PURE__ */ new Date(), 3))
  },
  thisHalfYear: {
    label: "This half year",
    granularity: "halfyear",
    value: () => Re.halfyear.toRange(/* @__PURE__ */ new Date())
  },
  lastHalfYear: {
    label: "Last half year",
    granularity: "halfyear",
    value: () => Re.halfyear.toRange(ba(/* @__PURE__ */ new Date(), 6))
  },
  lastYear: {
    label: "Last year",
    granularity: "year",
    value: () => Re.year.toRange(rg(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => Re.year.toRange(rg(/* @__PURE__ */ new Date(), 3))
  }
}, JW = dE(
  "F0DatePicker",
  sz
);
function Mi(e) {
  "@babel/helpers - typeof";
  return Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mi(e);
}
function uz(e, t) {
  if (Mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cz(e) {
  var t = uz(e, "string");
  return Mi(t) == "symbol" ? t : t + "";
}
function Xi(e, t, r) {
  return (t = cz(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function qw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qw(Object(r), !0).forEach(function(n) {
      Xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var lz = {
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
}, zP = /* @__PURE__ */ Symbol("closestEdge");
function WP(e, t) {
  var r, n, a = t.element, i = t.input, o = t.allowedEdges, s = {
    x: i.clientX,
    y: i.clientY
  }, u = a.getBoundingClientRect(), c = o.map(function(f) {
    return {
      edge: f,
      value: lz[f](u, s)
    };
  }), l = (r = (n = c.sort(function(f, d) {
    return f.value - d.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return Bw(Bw({}, e), {}, Xi({}, zP, l));
}
function Fw(e) {
  var t;
  return (t = e[zP]) !== null && t !== void 0 ? t : null;
}
function pu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function() {
    t.forEach(function(a) {
      return a();
    });
  };
}
function fz(e) {
  if (Array.isArray(e)) return e;
}
function dz(e, t) {
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
function sh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function UP(e, t) {
  if (e) {
    if (typeof e == "string") return sh(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? sh(e, t) : void 0;
  }
}
function pz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HP(e, t) {
  return fz(e) || dz(e, t) || UP(e, t) || pz();
}
var Td = {}, Ca = {}, zw;
function KP() {
  if (zw) return Ca;
  zw = 1, Object.defineProperty(Ca, "__esModule", { value: !0 }), Ca.bind = void 0;
  function e(t, r) {
    var n = r.type, a = r.listener, i = r.options;
    return t.addEventListener(n, a, i), function() {
      t.removeEventListener(n, a, i);
    };
  }
  return Ca.bind = e, Ca;
}
var Rr = {}, Ww;
function hz() {
  if (Ww) return Rr;
  Ww = 1;
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
  var t = /* @__PURE__ */ KP();
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
var Uw;
function vz() {
  return Uw || (Uw = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ KP();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ hz();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  })(Td)), Td;
}
var ra = /* @__PURE__ */ vz(), VP = "data-pdnd-honey-pot";
function GP(e) {
  return e instanceof Element && e.hasAttribute(VP);
}
function YP(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = HP(t, 2), n = r[0], a = r[1];
  return n ? GP(n) ? a ?? null : n : null;
}
var yz = 2147483647;
function Hw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hw(Object(r), !0).forEach(function(n) {
      Xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var $i = 2, Vw = $i / 2;
function mz(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function gz(e) {
  return {
    x: e.x - Vw,
    y: e.y - Vw
  };
}
function bz(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function xz(e) {
  return {
    x: Math.min(e.x, window.innerWidth - $i),
    y: Math.min(e.y, window.innerHeight - $i)
  };
}
function Gw(e) {
  var t = e.client, r = xz(bz(gz(mz(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: $i,
    height: $i
  });
}
function Yw(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function wz(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function Oz(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(VP, "true");
  var n = Gw({
    client: t
  });
  Object.assign(r.style, Kw(Kw({
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
  }, Yw({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: yz
  })), document.body.appendChild(r);
  var a = ra.bind(window, {
    type: "pointermove",
    listener: function(o) {
      var s = {
        x: o.clientX,
        y: o.clientY
      };
      n = Gw({
        client: s
      }), Object.assign(r.style, Yw({
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
    if (a(), wz({
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
function Sz() {
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
        n = Oz({
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
function Az(e) {
  if (Array.isArray(e)) return sh(e);
}
function _z(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Pz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function XP(e) {
  return Az(e) || _z(e) || UP(e) || Pz();
}
function ya(e) {
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
var Tz = ya(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), Yv = ya(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), uh = {
  isLeavingWindow: /* @__PURE__ */ Symbol("leaving"),
  isEnteringWindow: /* @__PURE__ */ Symbol("entering")
};
function Ez(e) {
  var t = e.dragLeave;
  return Yv() ? t.hasOwnProperty(uh.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !Yv())
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
        !r.isOverWindow && r.enterCount === 0 && (i[uh.isEnteringWindow] = !0), r.isOverWindow = !0, r.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(i) {
        r.enterCount--, r.isOverWindow && r.enterCount === 0 && (i[uh.isLeavingWindow] = !0, r.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function Cz(e) {
  return "nodeName" in e;
}
function jz(e) {
  return Cz(e) && e.ownerDocument !== document;
}
function Mz(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : Yv() ? Ez({
    dragLeave: t
  }) : n == null ? !0 : Tz() ? jz(n) : n instanceof HTMLIFrameElement;
}
function $z(e) {
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
function Ha(e) {
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
var Iz = function(t) {
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
}, Ed = Iz(function(e) {
  return e();
}), mo = /* @__PURE__ */ (function() {
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
function kz(e) {
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
      }), mo.schedule(function() {
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
      mo.flush(), Ed.cancel(), i({
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
      Ed(function() {
        mo.flush();
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
      mo.flush(), Ed.cancel(), i({
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
var ch = {
  isActive: !1
};
function ZP() {
  return !ch.isActive;
}
function Nz(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Dz(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function Rz(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!ZP())
    return;
  var i = Lz({
    event: t,
    dragType: r,
    getDropTargetsOver: n
  });
  ch.isActive = !0;
  var o = {
    current: i
  };
  Cd({
    event: t,
    current: i.dropTargets
  });
  var s = kz({
    source: r.payload,
    dispatchEvent: a,
    initial: i
  });
  function u(p) {
    var y = Dz({
      current: o.current.dropTargets,
      next: p.dropTargets
    });
    o.current = p, y && s.dragUpdate({
      current: o.current
    });
  }
  function c(p) {
    var y = Ha(p), h = GP(p.target) ? YP({
      x: y.clientX,
      y: y.clientY
    }) : p.target, v = n({
      target: h,
      input: y,
      source: r.payload,
      current: o.current.dropTargets
    });
    v.length && (p.preventDefault(), Cd({
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
    ch.isActive = !1, d();
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
        Mz({
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
          input: Ha(y)
        }, !o.current.dropTargets.length) {
          l();
          return;
        }
        y.preventDefault(), Cd({
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
          input: Ha(y)
        }, l();
      }
    }].concat(XP($z({
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
    nativeSetDragImage: Nz(t)
  });
}
function Cd(e) {
  var t, r = e.event, n = e.current, a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function Lz(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = Ha(t);
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
var Xw = {
  canStart: ZP,
  start: Rz
}, lh = /* @__PURE__ */ new Map();
function qz(e) {
  var t = e.typeKey, r = e.mount, n = lh.get(t);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: t,
    unmount: r(),
    usageCount: 1
  };
  return lh.set(t, a), a;
}
function Bz(e) {
  var t = qz(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), lh.delete(e.typeKey));
  };
}
function JP(e, t) {
  var r = t.attribute, n = t.value;
  return e.setAttribute(r, n), function() {
    return e.removeAttribute(r);
  };
}
function Zw(e, t) {
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
    t % 2 ? Zw(Object(r), !0).forEach(function(n) {
      Xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jd(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Fz(e)) || t) {
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
function Fz(e, t) {
  if (e) {
    if (typeof e == "string") return Jw(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Jw(e, t) : void 0;
  }
}
function Jw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Md(e) {
  return e.slice(0).reverse();
}
function zz(e) {
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
    var h = pu(JP(p.element, {
      attribute: a,
      value: "true"
    }), o(p));
    return ya(h);
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
    var k = (y = (h = _.getData) === null || h === void 0 ? void 0 : h.call(_, P)) !== null && y !== void 0 ? y : {}, T = (v = (b = _.getDropEffect) === null || b === void 0 ? void 0 : b.call(_, P)) !== null && v !== void 0 ? v : r, I = {
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
      result: [].concat(XP(w), [I])
    });
  }
  function c(p) {
    var y = p.eventName, h = p.payload, v = jd(h.location.current.dropTargets), b;
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
      })), b = /* @__PURE__ */ new Set(), g = jd(h.location.previous.dropTargets), x;
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
      var k = jd(h.location.current.dropTargets), T;
      try {
        for (k.s(); !(T = k.n()).done; ) {
          var I, j, M = T.value;
          if (!b.has(M.element)) {
            var $ = mr(mr({}, h), {}, {
              self: M
            }), N = n.get(M.element);
            N == null || (I = N.onDropTargetChange) === null || I === void 0 || I.call(N, $), N == null || (j = N.onDragEnter) === null || j === void 0 || j.call(N, $);
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
    for (var x = Md(b), O = Md(g), m = [], w = 0; w < x.length; w++) {
      var A, _ = x[w], P = O[w];
      if (P != null) {
        m.push(P);
        continue;
      }
      var k = m[w - 1], T = x[w - 1];
      if (k?.element !== T?.element)
        break;
      var I = n.get(_.element);
      if (!I)
        break;
      var j = {
        input: v,
        source: y,
        element: I.element
      };
      if (I.canDrop && !I.canDrop(j) || !((A = I.getIsSticky) !== null && A !== void 0 && A.call(I, j)))
        break;
      m.push(mr(mr({}, _), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return Md(m);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: d,
    dispatchEvent: f
  };
}
function Wz(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = Uz(e)) || t) {
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
function Uz(e, t) {
  if (e) {
    if (typeof e == "string") return Qw(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Qw(e, t) : void 0;
  }
}
function Qw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Hz(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eO(Object(r), !0).forEach(function(n) {
      Xi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Kz() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(i) {
    t && (!i.canMonitor || i.canMonitor(t.canMonitorArgs)) && t.active.add(i);
  }
  function n(i) {
    var o = Hz({}, i);
    e.add(o), r(o);
    function s() {
      e.delete(o), t && t.active.delete(o);
    }
    return ya(s);
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
      var u = Wz(e), c;
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
function Vz(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, o = Kz(), s = zz({
    typeKey: t,
    defaultDropEffect: i
  });
  function u(f) {
    n?.(f), s.dispatchEvent(f), o.dispatchEvent(f), a?.(f);
  }
  function c(f) {
    var d = f.event, p = f.dragType;
    Xw.start({
      event: d,
      dragType: p,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: u
    });
  }
  function l() {
    function f() {
      var d = {
        canStart: Xw.canStart,
        start: c
      };
      return r(d);
    }
    return Bz({
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
var Gz = ya(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), Yz = "pdnd:android-fallback", tO = "text/plain", Xz = "text/uri-list", Zz = "application/vnd.pdnd", Ii = /* @__PURE__ */ new WeakMap();
function Jz(e) {
  return Ii.set(e.element, e), function() {
    Ii.delete(e.element);
  };
}
var rO = Sz(), Xv = Vz({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return pu(rO.bindEvents(), ra.bind(document, {
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
          var f = Ii.get(l);
          if (!f)
            return null;
          var d = Ha(n), p = {
            element: f.element,
            dragHandle: (a = f.dragHandle) !== null && a !== void 0 ? a : null,
            input: d
          };
          if (f.canDrag && !f.canDrag(p))
            return n.preventDefault(), null;
          if (f.dragHandle) {
            var y = YP({
              x: d.clientX,
              y: d.clientY
            });
            if (!f.dragHandle.contains(y))
              return n.preventDefault(), null;
          }
          var h = (i = (o = f.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(f, p)) !== null && i !== void 0 ? i : null;
          if (h)
            for (var v = 0, b = Object.entries(h); v < b.length; v++) {
              var g = HP(b[v], 2), x = g[0], O = g[1];
              n.dataTransfer.setData(x, O ?? "");
            }
          Gz() && !n.dataTransfer.types.includes(tO) && !n.dataTransfer.types.includes(Xz) && n.dataTransfer.setData(tO, Yz), n.dataTransfer.setData(Zz, "");
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
    (r = Ii.get(i.source.element)) === null || r === void 0 || (n = r[a]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: rO.getOnPostDispatch()
}), QP = Xv.dropTarget, Qz = Xv.monitor;
function eW(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = Ii.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var r = pu(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    Xv.registerUsage(),
    Jz(e),
    JP(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return ya(r);
}
function tW(e) {
  const t = /* @__PURE__ */ new Set();
  return pu(
    Qz({
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
      } : eW({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: i ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return QP({
        element: r,
        getData: ({ input: a, element: i }) => WP(
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
const eT = Ft(null);
function Zv() {
  return dt(eT);
}
function rW({ driver: e, children: t }) {
  const r = Me(e), n = Ke(() => ({
    driver: r.current
  }), []);
  return S(eT.Provider, {
    value: n,
    children: t
  });
}
function nW(e) {
  const t = Zv(), { ref: r, payload: n, disabled: a, handleRef: i } = e, o = n.data, s = n.id + "|" + (o?.currentParentId ?? "null");
  qe(() => {
    if (r.current && !(!t || a))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: a,
        handle: i?.current ?? null
      });
  }, [t, r, s, a, i, n]);
}
function QW(e) {
  const t = Zv(), r = e?.ref, n = e?.id, a = e?.accepts;
  qe(() => {
    if (r?.current && !(!t || !n || !a))
      return t.driver.registerDroppable(r.current, { id: n, accepts: a });
  }, [t, r, n, a]);
}
function aW(e) {
  const t = Zv();
  qe(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
function iW({ otherActions: e, open: t, setOpen: r, disabled: n }) {
  return S(JO, {
    items: e.map((a) => "type" in a && a.type === "separator" ? a : {
      ...a,
      type: "item"
    }),
    open: t,
    onOpenChange: r,
    children: S(Ar, {
      icon: wO,
      label: "Actions",
      hideLabel: !0,
      variant: "ghost",
      pressed: t,
      size: "sm",
      disabled: n
    })
  });
}
function oW({ item: e, counter: t, isActive: r, sortable: n, collapsible: a = !1, isExpanded: i = !1, onToggleExpanded: o = () => {
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
      className: Q("text-f1-icon transition-all", !i && "-rotate-90"),
      icon: pE
    }), K("div", {
      className: Q(OO("focus:border-f1-border-focus"), "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded-[10px] border border-solid border-transparent px-1.5 text-sm transition-colors", r && "bg-f1-background-selected", y && !v && "cursor-pointer hover:bg-f1-background-hover", v && "cursor-not-allowed opacity-30"),
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
                icon: hE,
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
        className: Q("flex-grow text-[14px] font-medium text-f1-foreground transition-all", m || h ? "pl-7" : "pl-0"),
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
              children: S(vE, {
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
              children: S(iW, {
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
function Ka({ item: e, counter: t, isActive: r, collapsible: n = !1, isExpanded: a = !1, onToggleExpanded: i = () => {
}, sortable: o, children: s, onDragOver: u, onDragLeave: c, onDrop: l, canDropInside: f = !1, currentParentId: d = null, justDropped: p = !1 }) {
  const [y, h] = he(!1), [v, b] = he(!1), g = Me(null), [x, O] = he(null), [m, w] = he(!1), A = Me(null), _ = Ke(() => ({
    kind: "toc-item",
    id: e.id,
    data: {
      item: e,
      currentParentId: d
    }
  }), [e.id, d, e]);
  return nW({
    ref: g,
    payload: _,
    disabled: !o
  }), qe(() => {
    if (!(!g.current || !o))
      return QP({
        element: g.current,
        canDrop: ({ source: P }) => {
          const k = P.data;
          return k.kind === "toc-item" && k.id !== e.id;
        },
        getData: ({ input: P, element: k }) => {
          const T = k.getBoundingClientRect(), j = P.clientY - T.top, $ = T.height * 0.6;
          return f && j > $ ? {
            type: "toc-item-target",
            id: e.id,
            position: "inside"
          } : WP({
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
          const I = P.data, j = Fw(P.data);
          if (I.position === "inside") {
            const M = A.current;
            (!M || !M.isInside || M.edge !== null) && (w(!0), O(null), A.current = {
              edge: null,
              isInside: !0
            }, u?.(e.id, "inside"));
          } else if (j && (j === "top" || j === "bottom")) {
            const M = j === "top" ? "before" : "after", $ = A.current;
            !$ || $.edge !== j || $.isInside !== !1 ? (O(j), w(!1), A.current = {
              edge: j,
              isInside: !1,
              lastReportTime: Date.now()
            }, u?.(e.id, M)) : Date.now() - ($.lastReportTime || 0) > 50 && (u?.(e.id, M), A.current = {
              ...$,
              lastReportTime: Date.now()
            });
          } else if (!j) {
            const M = A.current;
            if (M?.edge) {
              const $ = M.edge === "top" ? "before" : "after";
              Date.now() - (M.lastReportTime || 0) > 50 && (u?.(e.id, $), A.current = {
                ...M,
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
          k.position === "inside" ? T = "inside" : T = Fw(P.data) === "top" ? "before" : "after", O(null), w(!1), l && l(e.id, T);
        }
      });
  }, [e.id, o, f, u, c, l]), S(Ht.div, {
    ref: g,
    className: Q("relative rounded-lg transition-colors", o && "cursor-grab active:cursor-grabbing", x === "top" && "before:bg-f1-border-focus before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-0.5", x === "bottom" && "after:bg-f1-border-focus after:absolute after:bottom-0 after:left-0 after:right-0 after:z-10 after:h-0.5", m && f && "bg-f1-background-hover/30", p && "bg-f1-background-hover/50 shadow-lg"),
    animate: p ? {
      scale: [1, 1.05, 1],
      y: [0, -2, 0]
    } : {},
    transition: p ? {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1]
    } : {},
    children: S(oW, {
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
function sW({ item: e, children: t, isActive: r, isExpanded: n, onToggleExpanded: a, sortable: i, hideChildrenCounter: o, canDropInside: s = !1, onDragOver: u, onDragLeave: c, onDrop: l, currentParentId: f, draggedItemId: d }) {
  const p = yE();
  return K(mE, {
    open: n,
    onOpenChange: (y) => {
      y !== n && a?.(e.id);
    },
    children: [S(Ka, {
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
    }), S(gE, {
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
function uW({ item: e, children: t, isActive: r, sortable: n, hideChildrenCounter: a, canDropInside: i = !1, onDragOver: o, onDragLeave: s, onDrop: u, currentParentId: c, draggedItemId: l }) {
  return K(ft, {
    children: [S(Ka, {
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
function ja({ item: e, children: t, isActive: r, collapsible: n, isExpanded: a, onToggleExpanded: i, sortable: o, hideChildrenCounter: s, canDropInside: u = !1, onDragOver: c, onDragLeave: l, onDrop: f, currentParentId: d, draggedItemId: p }) {
  return n ? S(sW, {
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
  }) : S(uW, {
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
function cW(e, t) {
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
function nO(e, t) {
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
function tT(e, t) {
  return e.map((r) => {
    if (r.id === t)
      return null;
    if (r.children) {
      const n = tT(r.children, t);
      return {
        ...r,
        children: n.length > 0 ? n : void 0
      };
    }
    return r;
  }).filter(Boolean);
}
function lW(e, t, r, n) {
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
function rT(e, t, r) {
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
function nT(e, t, r) {
  return e.map((n) => n.id === t ? r : n.children ? {
    ...n,
    children: nT(n.children, t, r)
  } : n);
}
function fW(e, t, r, n) {
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
function aT(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const x = e.children ? ja : Ka, O = o?.has(e.id) ?? !0, m = f === e.id, w = !!(l && l !== e.id && c && e.children !== void 0 && !rT(c, l, e.id)), A = !!(l && l !== e.id && m && d === "before"), _ = !!(l && l !== e.id && m && d === "after"), P = y === null ? c?.[0]?.id === e.id : !c || !y ? !1 : mt(c, y)?.item.children?.[0]?.id === e.id;
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
    }), x === Ka ? S(Ka, {
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
      onDragOver: x === ja ? h : void 0,
      onDragLeave: x === ja ? v : void 0,
      onDrop: x === ja ? b : void 0,
      currentParentId: y,
      draggedItemId: l,
      children: e.children && (x === ja || O) && K("div", {
        className: Q("flex flex-col", m && d === "inside" && w && "rounded-md bg-f1-background-hover/20 p-1"),
        children: [e.children.map((k) => aT(k, t, r + 1, n, a, i, o, s, u, c, l, f, d, t ? p : void 0, e.id, h, v, b, g)), m && d === "inside" && w && (!O || e.children.length === 0) && S("div", {
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
function dW({ title: e, items: t, className: r, activeItem: n, collapsible: a = !1, sortable: i = !1, showSearchBox: o = !1, searchPlaceholder: s, onReorder: u, hideChildrenCounter: c = !1, scrollable: l = !0 }) {
  const f = Pr(), [d, p] = he(""), y = (E) => {
    p(E);
  }, h = Ke(() => nO(t, d), [t, d]), [v, b] = he(cW(t, n)), [g, x] = he(t);
  qe(() => {
    x(t);
  }, [t]);
  const O = Me(null), m = tt((E) => {
    b((Y) => {
      const B = new Set(Y);
      return B.has(E) ? B.delete(E) : B.add(E), B;
    });
  }, [b]), w = tt((E, Y) => {
    const B = nT(g, E, Y);
    x(B), u && u(gn(B));
  }, [g, u]), A = tt((E) => (Y) => {
    const B = mt(g, E);
    if (B) {
      const ae = {
        ...B.item,
        children: Y
      };
      w(E, ae);
    } else
      E == null && (x(Y), u && u(gn(Y)));
  }, [g, w, u, gn]), _ = tt((E, Y, B) => {
    if (rT(g, E, Y))
      return;
    const ae = mt(g, E);
    if (!ae) return;
    const ce = ae.item;
    let oe = tT(g, E);
    const Se = fW(g, E, Y, B);
    oe = lW(oe, ce, Y, Se), x(oe), Y !== null && b((Te) => {
      const me = new Set(Te);
      return me.add(Y), me;
    }), u && u(gn(oe));
  }, [g, u, gn]), P = Ke(() => nO(g, d), [g, d]), [k, T] = he(null), [I, j] = he(null), [M, $] = he(null), [N, R] = he(null), F = Me(null), z = Me(!1), D = Me(null), q = Me(null), L = Me(null), H = Me(null), X = Me(null), te = Me(0), ne = Me(0), ee = Me(!1), J = Me(null), U = tt((E, Y) => {
    L.current && (clearTimeout(L.current), L.current = null);
    const ae = (i ? P : h).findIndex((me) => me.id === E), ce = X.current !== null && ae < X.current;
    X.current = ae;
    const oe = `${E}-${Y}`, Se = I && M ? `${I}-${M}` : null;
    if (oe === Se)
      return;
    H.current = {
      itemId: E,
      position: Y
    };
    const Te = ce ? 50 : 30;
    L.current = setTimeout(() => {
      const me = H.current;
      if (me) {
        j(me.itemId), $(me.position), D.current = me.itemId, q.current = me.position;
        const ye = Date.now();
        te.current = ye, ne.current = ye;
        const er = (i ? P : h)[0];
        me.itemId === er?.id && me.position === "before" && (ee.current = !0);
      }
      L.current = null;
    }, Te);
  }, [I, M, i, P, h]);
  qe(() => () => {
    L.current && clearTimeout(L.current);
  }, []);
  const V = tt(() => {
    if (z.current)
      return;
    L.current && clearTimeout(L.current);
    const E = ee.current ? 1e3 : 800;
    L.current = setTimeout(() => {
      if (z.current) {
        L.current = null;
        return;
      }
      const Y = Date.now(), B = Y - te.current, ae = Y - ne.current, ce = ee.current ? 800 : 500;
      if (ae < ce) {
        L.current = null;
        return;
      }
      const oe = ee.current ? 800 : 500;
      if (B < oe) {
        L.current = null;
        return;
      }
      if (ee.current) {
        const Te = (i ? P : h)[0];
        if (I === Te?.id && M === "before") {
          if (ae < 2e3) {
            L.current = null;
            return;
          }
          ee.current = !1;
        } else
          ee.current = !1;
      }
      X.current = null, te.current = 0, j(null), $(null), D.current = null, q.current = null, L.current = null;
    }, E);
  }, [I, M, i, P, h]), Z = tt((E, Y) => {
    z.current = !0;
    const B = F.current;
    if (ee.current = !1, j(null), $(null), D.current = null, q.current = null, L.current && (clearTimeout(L.current), L.current = null), !B || B === E) {
      F.current = null, T(null), j(null), $(null);
      return;
    }
    const ae = mt(g, E), ce = mt(g, B);
    if (ae && ce) {
      let oe = null, Se = 0;
      if (Y === "inside")
        oe = E, Se = ae.item.children?.length ?? 0;
      else if (Y === "before")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E);
        else {
          const ye = mt(g, oe);
          ye && (Se = ye.item.children?.findIndex((Be) => Be.id === E) ?? 0);
        }
      else if (Y === "after")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E) + 1;
        else {
          const ye = mt(g, oe);
          ye && (Se = (ye.item.children?.findIndex((Be) => Be.id === E) ?? 0) + 1);
        }
      const Te = ce.parentPath.length > 0 ? ce.parentPath[ce.parentPath.length - 1] : null;
      let me = -1;
      if (Te === null)
        me = g.findIndex((ye) => ye.id === B);
      else {
        const ye = mt(g, Te);
        ye && (me = ye.item.children?.findIndex((Be) => Be.id === B) ?? -1);
      }
      (oe !== Te || oe === Te && me !== Se) && (R(B), _(B, oe, Se), setTimeout(() => {
        R(null);
      }, 800));
    }
    ee.current = !1, F.current = null, z.current = !0, X.current = null, te.current = 0, ne.current = 0, J.current && (clearTimeout(J.current), J.current = null), T(null), setTimeout(() => {
      z.current = !1;
    }, 600);
  }, [g, _]);
  return aW(tt((E) => {
    if (E.phase === "start" && E.source.kind === "toc-item")
      L.current && (clearTimeout(L.current), L.current = null), J.current && (clearTimeout(J.current), J.current = null), F.current = E.source.id, z.current = !1, H.current = null, T(E.source.id);
    else if (E.phase === "cancel")
      ee.current = !1, z.current = !1, H.current = null, X.current = null, te.current = 0, ne.current = 0, L.current && (clearTimeout(L.current), L.current = null), J.current && (clearTimeout(J.current), J.current = null), j(null), $(null), D.current = null, q.current = null, T(null), F.current = null;
    else if (E.phase === "drop") {
      L.current && (clearTimeout(L.current), L.current = null), ee.current = !1;
      const Y = D.current || H.current?.itemId, B = q.current || H.current?.position;
      !z.current && Y && B && F.current && F.current !== Y && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!z.current) {
            const ce = D.current || H.current?.itemId, oe = q.current || H.current?.position;
            ce && oe && Z(ce, oe);
          }
        });
      }), J.current && (clearTimeout(J.current), J.current = null);
      const ae = setTimeout(() => {
        z.current || (H.current = null, X.current = null, te.current = 0, ne.current = 0, j(null), $(null), D.current = null, q.current = null, T(null), F.current = null), J.current === ae && (J.current = null);
      }, 500);
      J.current = ae;
    }
  }, [Z])), K("nav", {
    className: Q("w-[248px]", l ? "overflow-y-auto" : "overflow-hidden", r),
    "aria-label": e,
    ref: O,
    children: [(e || o) && K("div", {
      className: Q("bg-f1-background pb-2 pl-5 pr-4 pt-5", l && "sticky top-0 z-10"),
      children: [o && S("div", {
        className: e ? "mb-4" : "",
        children: S(bE, {
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
    }), S(ph, {
      className: "h-full min-h-0",
      children: S("div", {
        className: "px-3 pb-2",
        children: S("div", {
          className: "flex flex-col gap-0.5",
          children: (i ? P : h).map((E) => aT(E, i, 0, n, a, c, v, m, _, g, k, I, M, i ? A : void 0, null, U, V, Z, N))
        })
      })
    })]
  });
}
function e7(e) {
  const t = Me(/* @__PURE__ */ Symbol("f0-table-of-contents")), r = Ke(() => tW(t.current), []);
  return S(rW, {
    driver: r,
    children: S(dW, {
      ...e
    })
  });
}
const pW = We(function({ bare: t = !1, ...r }, n) {
  return S("div", {
    ref: n,
    role: "separator",
    className: Q("-mx-4 h-[1px]", t ? void 0 : "my-4"),
    style: {
      backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
    },
    ...r
  });
}), hW = ({ text: e, isCompleted: t }) => K("div", {
  className: "flex flex-row items-center gap-2",
  children: [S(ut, {
    className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
    icon: t ? As : xO,
    size: "md"
  }), S("span", {
    className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
    children: e
  })]
}), vW = ({ title: e, items: t }) => K("div", {
  className: "px-4 pb-2",
  children: [S("div", {
    className: "mb-2 text-sm text-f1-foreground-secondary",
    children: e
  }), S("div", {
    className: "flex flex-col gap-2",
    children: t.map((r) => S(hW, {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    }, r.text))
  })]
}), yW = ({ onClose: e, success: t, successButtonOnClick: r, successButtonLabel: n, closeLabel: a }) => {
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
  return K(qP, {
    className: "px-4 pb-4 pt-2 [&_div]:w-full",
    children: [S("div", {
      className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
      children: o()
    }), S("div", {
      className: "flex flex-col-reverse gap-2 sm:hidden",
      children: o(!0)
    })]
  });
}, iT = We(({ open: e, onClose: t, success: r = !0, errorMessage: n, successMessage: a, nextSteps: i, closeLabel: o, portalContainer: s }, u) => {
  const [c, l] = he(!1), f = tt(() => {
    l(!0), setTimeout(() => {
      t?.(), l(!1);
    }, 200);
  }, [t]);
  return S(xE, {
    open: e && !c,
    onOpenChange: (d) => !d && f?.(),
    children: K(wE, {
      ref: u,
      className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
      container: s,
      children: [K(BP, {
        className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
        children: [S($j, {
          type: r ? "positive" : "critical",
          size: "lg"
        }), K("div", {
          className: "flex flex-col gap-0.5",
          children: [S(OE, {
            className: "text-xl font-semibold sm:text-lg",
            children: r ? a?.title : n?.title
          }), S(LP, {
            className: "text-lg sm:text-base",
            children: r ? a?.description : n?.description
          })]
        })]
      }), r && i && i.items?.length > 0 ? K(ft, {
        children: [S(pW, {}), S(vW, {
          title: i.title,
          items: i.items
        })]
      }) : null, S(yW, {
        onClose: f,
        success: r,
        successButtonLabel: a.buttonLabel,
        successButtonOnClick: a.buttonOnClick,
        closeLabel: o
      })]
    })
  });
});
iT.displayName = "UpsellRequestResponseDialog";
var mW = "Label", oT = fe.forwardRef((e, t) => /* @__PURE__ */ S(
  bh.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
oT.displayName = mW;
var sT = oT;
const gW = fe.forwardRef(({ className: e, ...t }, r) => S(sT, {
  ref: r,
  className: Q("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
  ...t
}));
gW.displayName = sT.displayName;
function t7({ label: e, showIcon: t = !0, onRequest: r, showConfirmation: n = !0, loading: a, errorMessage: i, successMessage: o, loadingState: s, nextSteps: u, closeLabel: c, variant: l = "promote", onModalStateChange: f, portalContainer: d, ...p }) {
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
      icon: t ? SE : void 0,
      onClick: g,
      loading: O,
      ...p
    }), n && y && S(iT, {
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
const bW = We(function({ title: t, subtitle: r, mediaUrl: n, primaryAction: a, secondaryAction: i, onClose: o, isLoading: s = !1, children: u, variant: c = "default" }, l) {
  const f = n?.includes(".mp4"), [d, p] = he(!1), y = () => {
    o && o(), p(!0);
  };
  return s ? S(uT, {
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
        className: Q("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
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
        icon: AO,
        size: "sm",
        hideLabel: !0,
        onClick: y,
        label: "Close"
      })
    })]
  });
}), uT = We(function(t, r) {
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
}), xW = SO(bW, uT);
xW.displayName = "BaseBanner";
const cT = {
  get: () => ({}),
  set: () => Promise.resolve()
}, lT = Ft(cT), r7 = ({ children: e, handler: t }) => S(lT.Provider, {
  value: t ?? cT,
  children: e
}), n7 = () => {
  const e = dt(lT);
  if (!e)
    throw new Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
  return e;
};
export {
  $w as $,
  Bt as A,
  $r as B,
  _W as C,
  JO as D,
  Ui as E,
  da as F,
  Er as G,
  Ki as H,
  lu as I,
  Dv as J,
  Nv as K,
  PW as L,
  Et as M,
  qt as N,
  kv as O,
  cu as P,
  PP as Q,
  DW as R,
  x_ as S,
  RW as T,
  LW as U,
  qW as V,
  BW as W,
  vr as X,
  yr as Y,
  FW as Z,
  c9 as _,
  Kh as a,
  QP as a$,
  ih as a0,
  TP as a1,
  e7 as a2,
  Gv as a3,
  iT as a4,
  Bv as a5,
  Uv as a6,
  gW as a7,
  Hv as a8,
  t7 as a9,
  aW as aA,
  nW as aB,
  QW as aC,
  W6 as aD,
  je as aE,
  Hi as aF,
  l3 as aG,
  NL as aH,
  NS as aI,
  Qs as aJ,
  Zs as aK,
  cL as aL,
  WW as aM,
  EW as aN,
  MW as aO,
  $W as aP,
  US as aQ,
  Yh as aR,
  CW as aS,
  UW as aT,
  TW as aU,
  Ua as aV,
  oz as aW,
  n7 as aX,
  Fv as aY,
  zv as aZ,
  H9 as a_,
  xW as aa,
  $j as ab,
  LP as ac,
  Uj as ad,
  NW as ae,
  r7 as af,
  AW as ag,
  IW as ah,
  rS as ai,
  KW as aj,
  VW as ak,
  GW as al,
  JW as am,
  ZW as an,
  XW as ao,
  oh as ap,
  Kv as aq,
  $P as ar,
  Vv as as,
  NP as at,
  DP as au,
  IP as av,
  kP as aw,
  YW as ax,
  tW as ay,
  rW as az,
  pe as b,
  WP as b0,
  Fw as b1,
  X9 as b2,
  Qz as b3,
  HW as b4,
  BP as b5,
  qP as b6,
  Wv as b7,
  p9 as b8,
  zW as b9,
  pW as ba,
  jW as bb,
  R6 as bc,
  hr as bd,
  Ka as be,
  ja as bf,
  en as c,
  Ve as d,
  xt as e,
  ie as f,
  Le as g,
  kW as h,
  Qr as i,
  ue as j,
  Zr as k,
  le as l,
  Tt as m,
  qs as n,
  Ko as o,
  uu as p,
  Vi as q,
  Ir as r,
  Av as s,
  pa as t,
  sn as u,
  Rv as v,
  Yi as w,
  fa as x,
  Gi as y,
  fu as z
};
