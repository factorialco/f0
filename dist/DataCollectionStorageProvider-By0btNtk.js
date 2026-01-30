import { jsx as S, jsxs as V, Fragment as ct } from "react/jsx-runtime";
import * as fe from "react";
import C, { useRef as Me, useState as he, useCallback as tt, useEffect as Le, useContext as pt, useMemo as He, useLayoutEffect as hO, createContext as zt, isValidElement as Rt, Children as Kr, PureComponent as Mt, forwardRef as ze, useImperativeHandle as $T, cloneElement as Ue, createElement as vO, Component as yO, useId as IT } from "react";
import { bh as sy, bf as DT, dm as NT, B as _r, aG as mO, c as J, aH as gO, aA as kT, aB as RT, a as Ps, f as ki, dn as ro, bs as Ae, D as LT, dp as qT, dq as BT, aM as bO, dr as FT, ds as zT, bK as gh, dt as WT, F as lt, N as Ts, aX as xO, b6 as bh, ay as wO, du as xn, dv as UT, dw as HT, dx as VT, dy as uy, dz as cy, dA as ly, dB as fy, dC as dy, dD as OO, dE as wo, dF as KT, dG as GT, cq as Ya, dH as YT, H as SO, J as _O, K as AO, q as xh, a0 as an, r as PO, s as TO, bP as wh, g as de, ca as XT, by as Es, bz as Cs, bA as js, bD as Ms, cA as ZT, cH as Oh, d7 as JT, co as EO, aC as QT, az as eE, cw as Ri, u as Pr, aY as tE, bF as rE, z as Gt, y as CO, a2 as nE, a3 as jO, v as aE, dc as $s, dI as iE, O as on, aV as oE, aJ as sE, b1 as uE, aK as MO, b5 as cE, m as Ht, M as Sh, e as $O, a9 as lE, n as IO, bM as fE, S as Pt, w as DO, dJ as NO, L as dE, U as kO, t as pE, cR as Xe, dK as RO, dL as LO, dM as qd, dN as hE, dO as py, cU as vE, cV as hy, P as yE, l as mE, o as gE, dk as bE, ae as xE, d9 as wE, aD as OE, dP as SE, aF as _E, A as Ra, d as AE, cu as PE, au as TE, b8 as EE, ba as CE, dd as jE, Q as ME, R as $E, T as IE, V as DE } from "./index-BdBbDHIM.js";
const NE = {
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
function kE(e, t) {
  const r = e.scrollSnapList();
  return typeof t == "number" ? r.map(() => t) : t(r, e);
}
function RE(e, t) {
  const r = e.rootNode();
  return t && t(r) || r;
}
function _h(e = {}) {
  let t, r, n, a, i = null, o = 0, s = !1, u = !1, c = !1, l = !1;
  function f(j, I) {
    r = j;
    const {
      mergeOptions: N,
      optionsAtMedia: R
    } = I, L = N(NE, _h.globalOptions), z = N(L, e);
    if (t = R(z), r.scrollSnapList().length <= 1) return;
    l = t.jump, n = !1, a = kE(r, t.delay);
    const {
      eventStore: k,
      ownerDocument: B
    } = r.internalEngine(), q = !!r.internalEngine().options.watchDrag, H = RE(r, t.rootNode);
    k.add(B, "visibilitychange", b), q && r.on("pointerDown", x), q && !t.stopOnInteraction && r.on("pointerUp", O), t.stopOnMouseEnter && k.add(H, "mouseenter", m), t.stopOnMouseEnter && !t.stopOnInteraction && k.add(H, "mouseleave", w), t.stopOnFocusIn && r.on("slideFocusStart", v), t.stopOnFocusIn && !t.stopOnInteraction && k.add(r.containerNode(), "focusout", h), t.playOnInit && h();
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
  function _(j) {
    typeof j < "u" && (l = j), h();
  }
  function A() {
    s && v();
  }
  function P() {
    s && h();
  }
  function D() {
    return s;
  }
  function T() {
    const {
      index: j
    } = r.internalEngine(), I = j.clone().add(1).get(), N = r.scrollSnapList().length - 1, R = t.stopOnLastSnap && I === N;
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
    play: _,
    stop: A,
    reset: P,
    isPlaying: D,
    timeUntilNext: $
  };
}
_h.globalOptions = void 0;
function Gr() {
  return Gr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gr.apply(this, arguments);
}
var LE = 0.996, qE = function(t, r) {
  return r === void 0 && (r = LE), t * r / (1 - r);
};
function BE(e) {
  return e[e.length - 1];
}
function FE(e) {
  return e.reduce(function(t, r) {
    return t + r;
  }) / e.length;
}
var zE = function(t, r, n) {
  return Math.min(Math.max(r, t), n);
};
function _u(e, t) {
  if (e.length !== t.length)
    throw new Error("vectors must be same length");
  return e.map(function(r, n) {
    return r + t[n];
  });
}
function vy(e) {
  return Math.max.apply(Math, e.map(Math.abs));
}
function Cn(e) {
  return Object.freeze(e), Object.values(e).forEach(function(t) {
    t !== null && typeof t == "object" && !Object.isFrozen(t) && Cn(t);
  }), e;
}
function WE() {
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
  return Cn({
    on: t,
    off: r,
    dispatch: n
  });
}
function UE(e) {
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
  return Cn({
    observe: r,
    unobserve: n,
    disconnect: a
  });
}
var HE = 16 * 1.125, VE = typeof window < "u" && window.innerHeight || 800, Au = [1, HE, VE];
function KE(e) {
  var t = e.deltaX * Au[e.deltaMode], r = e.deltaY * Au[e.deltaMode], n = (e.deltaZ || 0) * Au[e.deltaMode];
  return {
    timeStamp: e.timeStamp,
    axisDelta: [t, r, n]
  };
}
var GE = [-1, -1, -1];
function YE(e, t) {
  if (!t)
    return e;
  var r = t === !0 ? GE : t.map(function(n) {
    return n ? -1 : 1;
  });
  return Gr({}, e, {
    axisDelta: e.axisDelta.map(function(n, a) {
      return n * r[a];
    })
  });
}
var yy = 700, XE = function(t) {
  return Gr({}, t, {
    axisDelta: t.axisDelta.map(function(r) {
      return zE(r, -yy, yy);
    })
  });
}, Pu = process.env.NODE_ENV !== "production", ZE = 0.6, JE = 0.96, QE = 2, my = 5, gy = /* @__PURE__ */ Cn({
  preventWheelAction: !0,
  reverseSign: [!0, !0, !1]
}), eC = 400;
function by() {
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
    willEndTimeout: eC
  };
}
function tC(e) {
  e === void 0 && (e = {});
  var t = WE(), r = t.on, n = t.off, a = t.dispatch, i = gy, o = by(), s, u = !1, c, l = function(j) {
    Array.isArray(j) ? j.forEach(function(I) {
      return y(I);
    }) : y(j);
  }, f = function(j) {
    return j === void 0 && (j = {}), Object.values(j).some(function(I) {
      return I == null;
    }) ? (Pu && console.error("updateOptions ignored! undefined & null options not allowed"), i) : i = Cn(Gr({}, gy, i, j));
  }, d = function(j) {
    var I = Gr({
      event: s,
      isStart: !1,
      isEnding: !1,
      isMomentumCancel: !1,
      isMomentum: o.isMomentum,
      axisDelta: [0, 0, 0],
      axisVelocity: o.axisVelocity,
      axisMovement: o.axisMovement,
      get axisMovementProjection() {
        return _u(I.axisMovement, I.axisVelocity.map(function(N) {
          return qE(N);
        }));
      }
    }, j);
    a("wheel", Gr({}, I, {
      previous: c
    })), c = I;
  }, p = function(j, I) {
    var N = i, R = N.preventWheelAction, L = I[0], z = I[1], k = I[2];
    if (typeof R == "boolean") return R;
    switch (R) {
      case "x":
        return Math.abs(L) >= j;
      case "y":
        return Math.abs(z) >= j;
      case "z":
        return Math.abs(k) >= j;
      default:
        return Pu && console.warn("unsupported preventWheelAction value: " + R, "warn"), !1;
    }
  }, y = function(j) {
    var I = XE(YE(KE(j), i.reverseSign)), N = I.axisDelta, R = I.timeStamp, L = vy(N);
    if (j.preventDefault && p(L, N) && j.preventDefault(), o.isStarted ? o.isMomentum && L > Math.max(2, o.lastAbsDelta * 2) && (A(!0), w()) : w(), L === 0 && Object.is && Object.is(j.deltaX, -0)) {
      u = !0;
      return;
    }
    s = j, o.axisMovement = _u(o.axisMovement, N), o.lastAbsDelta = L, o.scrollPointsToMerge.push({
      axisDelta: N,
      timeStamp: R
    }), h(), d({
      axisDelta: N,
      isStart: !o.isStartPublished
    }), o.isStartPublished = !0, _();
  }, h = function() {
    o.scrollPointsToMerge.length === QE ? (o.scrollPoints.unshift({
      axisDeltaSum: o.scrollPointsToMerge.map(function(j) {
        return j.axisDelta;
      }).reduce(_u),
      timeStamp: FE(o.scrollPointsToMerge.map(function(j) {
        return j.timeStamp;
      }))
    }), b(), o.scrollPointsToMerge.length = 0, o.scrollPoints.length = 1, o.isMomentum || O()) : o.isStartPublished || v();
  }, v = function() {
    o.axisVelocity = BE(o.scrollPointsToMerge).axisDelta.map(function(j) {
      return j / o.willEndTimeout;
    });
  }, b = function() {
    var j = o.scrollPoints, I = j[0], N = j[1];
    if (!(!N || !I)) {
      var R = I.timeStamp - N.timeStamp;
      if (R <= 0) {
        Pu && console.warn("invalid deltaTime");
        return;
      }
      var L = I.axisDeltaSum.map(function(k) {
        return k / R;
      }), z = L.map(function(k, B) {
        return k / (o.axisVelocity[B] || 1);
      });
      o.axisVelocity = L, o.accelerationFactors.push(z), g(R);
    }
  }, g = function(j) {
    var I = Math.ceil(j / 10) * 10 * 1.2;
    o.isMomentum || (I = Math.max(100, I * 2)), o.willEndTimeout = Math.min(1e3, Math.round(I));
  }, x = function(j) {
    return j === 0 ? !0 : j <= JE && j >= ZE;
  }, O = function() {
    if (o.accelerationFactors.length >= my) {
      if (u && (u = !1, vy(o.axisVelocity) >= 0.2)) {
        m();
        return;
      }
      var j = o.accelerationFactors.slice(my * -1), I = j.every(function(N) {
        var R = !!N.reduce(function(z, k) {
          return z && z < 1 && z === k ? 1 : 0;
        }), L = N.filter(x).length === N.length;
        return R || L;
      });
      I && m(), o.accelerationFactors = j;
    }
  }, m = function() {
    o.isMomentum = !0;
  }, w = function() {
    o = by(), o.isStarted = !0, o.startTime = Date.now(), c = void 0, u = !1;
  }, _ = /* @__PURE__ */ (function() {
    var M;
    return function() {
      clearTimeout(M), M = setTimeout(A, o.willEndTimeout);
    };
  })(), A = function(j) {
    j === void 0 && (j = !1), o.isStarted && (o.isMomentum && j ? d({
      isEnding: !0,
      isMomentumCancel: !0
    }) : d({
      isEnding: !0
    }), o.isMomentum = !1, o.isStarted = !1);
  }, P = UE(l), D = P.observe, T = P.unobserve, $ = P.disconnect;
  return f(e), Cn({
    on: r,
    off: n,
    observe: D,
    unobserve: T,
    disconnect: $,
    feedWheel: l,
    updateOptions: f
  });
}
var rC = {
  active: !0,
  breakpoints: {},
  wheelDraggingClass: "is-wheel-dragging",
  forceWheelAxis: void 0,
  target: void 0
};
Ah.globalOptions = void 0;
var nC = process.env.NODE_ENV !== "production";
function Ah(e) {
  e === void 0 && (e = {});
  var t, r = function() {
  };
  function n(i, o) {
    var s, u, c = o.mergeOptions, l = o.optionsAtMedia, f = c(rC, Ah.globalOptions), d = c(f, e);
    t = l(d);
    var p = i.internalEngine(), y = (s = t.target) != null ? s : i.containerNode().parentNode, h = (u = t.forceWheelAxis) != null ? u : p.options.axis, v = tC({
      preventWheelAction: h,
      reverseSign: [!0, !0, !1]
    }), b = v.observe(y), g = v.on("wheel", $), x = !1, O;
    function m(M) {
      try {
        O = new MouseEvent("mousedown", M.event), T(O);
      } catch {
        return nC && console.warn("Legacy browser requires events-polyfill (https://github.com/xiel/embla-carousel-wheel-gestures#legacy-browsers)"), r();
      }
      x = !0, _(), t.wheelDraggingClass && y.classList.add(t.wheelDraggingClass);
    }
    function w(M) {
      x = !1, T(D("mouseup", M)), A(), t.wheelDraggingClass && y.classList.remove(t.wheelDraggingClass);
    }
    function _() {
      document.documentElement.addEventListener("mousemove", P, !0), document.documentElement.addEventListener("mouseup", P, !0), document.documentElement.addEventListener("mousedown", P, !0);
    }
    function A() {
      document.documentElement.removeEventListener("mousemove", P, !0), document.documentElement.removeEventListener("mouseup", P, !0), document.documentElement.removeEventListener("mousedown", P, !0);
    }
    function P(M) {
      x && M.isTrusted && M.stopImmediatePropagation();
    }
    function D(M, j) {
      var I, N;
      if (h === p.options.axis) {
        var R = j.axisMovement;
        I = R[0], N = R[1];
      } else {
        var L = j.axisMovement;
        N = L[0], I = L[1];
      }
      if (!p.options.skipSnaps && !p.options.dragFree) {
        var z = p.containerRect.width, k = p.containerRect.height;
        I = I < 0 ? Math.max(I, -z) : Math.min(I, z), N = N < 0 ? Math.max(N, -k) : Math.min(N, k);
      }
      return new MouseEvent(M, {
        clientX: O.clientX + I,
        clientY: O.clientY + N,
        screenX: O.screenX + I,
        screenY: O.screenY + N,
        movementX: I,
        movementY: N,
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
      var j = M.axisDelta, I = j[0], N = j[1], R = h === "x" ? I : N, L = h === "x" ? N : I, z = M.isMomentum && M.previous && !M.previous.isMomentum, k = M.isEnding && !M.isMomentum || z, B = Math.abs(R) > Math.abs(L);
      B && !x && !M.isMomentum && m(M), x && (k ? w(M) : T(D("mousemove", M)));
    }
    r = function() {
      b(), g(), A();
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
function aC(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function xy(e) {
  return aC(e) || Array.isArray(e);
}
function iC() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ph(e, t) {
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  const a = JSON.stringify(Object.keys(e.breakpoints || {})), i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== i ? !1 : r.every((o) => {
    const s = e[o], u = t[o];
    return typeof s == "function" ? `${s}` == `${u}` : !xy(s) || !xy(u) ? s === u : Ph(s, u);
  });
}
function wy(e) {
  return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map((t) => t.options);
}
function oC(e, t) {
  if (e.length !== t.length) return !1;
  const r = wy(e), n = wy(t);
  return r.every((a, i) => {
    const o = n[i];
    return Ph(a, o);
  });
}
function Th(e) {
  return typeof e == "number";
}
function Bd(e) {
  return typeof e == "string";
}
function Is(e) {
  return typeof e == "boolean";
}
function Oy(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function De(e) {
  return Math.abs(e);
}
function Eh(e) {
  return Math.sign(e);
}
function La(e, t) {
  return De(e - t);
}
function sC(e, t) {
  if (e === 0 || t === 0 || De(e) <= De(t)) return 0;
  const r = La(De(e), De(t));
  return De(r / e);
}
function uC(e) {
  return Math.round(e * 100) / 100;
}
function Xa(e) {
  return Za(e).map(Number);
}
function Lt(e) {
  return e[Li(e)];
}
function Li(e) {
  return Math.max(0, e.length - 1);
}
function Ch(e, t) {
  return t === Li(e);
}
function Sy(e, t = 0) {
  return Array.from(Array(e), (r, n) => t + n);
}
function Za(e) {
  return Object.keys(e);
}
function qO(e, t) {
  return [e, t].reduce((r, n) => (Za(n).forEach((a) => {
    const i = r[a], o = n[a], s = Oy(i) && Oy(o);
    r[a] = s ? qO(i, o) : o;
  }), r), {});
}
function Fd(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function cC(e, t) {
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
    return Bd(e) ? r[e](u) : e(t, u, c);
  }
  return {
    measure: o
  };
}
function Ja() {
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
function lC(e, t, r, n) {
  const a = Ja(), i = 1e3 / 60;
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
function fC(e, t) {
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
function Qr(e = 0, t = 0) {
  const r = De(e - t);
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
function BO(e, t, r) {
  const {
    constrain: n
  } = Qr(0, e), a = e + 1;
  let i = o(t);
  function o(d) {
    return r ? De((a + d) % a) : n(d);
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
    return BO(e, s(), r);
  }
  const f = {
    get: s,
    set: u,
    add: c,
    clone: l
  };
  return f;
}
function dC(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const {
    cross: x,
    direction: O
  } = e, m = ["INPUT", "SELECT", "TEXTAREA"], w = {
    passive: !1
  }, _ = Ja(), A = Ja(), P = Qr(50, 225).constrain(p.measure(20)), D = {
    mouse: 300,
    touch: 400
  }, T = {
    mouse: 500,
    touch: 600
  }, $ = y ? 43 : 25;
  let M = !1, j = 0, I = 0, N = !1, R = !1, L = !1, z = !1;
  function k(E) {
    if (!g) return;
    function Y(ae) {
      (Is(g) || g(E, ae)) && ne(ae);
    }
    const F = t;
    _.add(F, "dragstart", (ae) => ae.preventDefault(), w).add(F, "touchmove", () => {
    }, w).add(F, "touchend", () => {
    }).add(F, "touchstart", Y).add(F, "mousedown", Y).add(F, "touchcancel", Q).add(F, "contextmenu", Q).add(F, "click", U, !0);
  }
  function B() {
    _.clear(), A.clear();
  }
  function q() {
    const E = z ? r : t;
    A.add(E, "touchmove", ee, w).add(E, "touchend", Q).add(E, "mousemove", ee, w).add(E, "mouseup", Q);
  }
  function H(E) {
    const Y = E.nodeName || "";
    return m.includes(Y);
  }
  function X() {
    return (y ? T : D)[z ? "mouse" : "touch"];
  }
  function te(E, Y) {
    const F = f.add(Eh(E) * -1), ae = l.byDistance(E, !y).distance;
    return y || De(E) < P ? ae : v && Y ? ae * 0.5 : l.byIndex(F.get(), 0).distance;
  }
  function ne(E) {
    const Y = Fd(E, n);
    z = Y, L = y && Y && !E.buttons && M, M = La(a.get(), o.get()) >= 2, !(Y && E.button !== 0) && (H(E.target) || (N = !0, i.pointerDown(E), c.useFriction(0).useDuration(0), a.set(o), q(), j = i.readPoint(E), I = i.readPoint(E, x), d.emit("pointerDown")));
  }
  function ee(E) {
    if (!Fd(E, n) && E.touches.length >= 2) return Q(E);
    const F = i.readPoint(E), ae = i.readPoint(E, x), ce = La(F, j), oe = La(ae, I);
    if (!R && !z && (!E.cancelable || (R = ce > oe, !R)))
      return Q(E);
    const Se = i.pointerMove(E);
    ce > h && (L = !0), c.useFriction(0.3).useDuration(0.75), s.start(), a.add(O(Se)), E.preventDefault();
  }
  function Q(E) {
    const F = l.byDistance(0, !1).index !== f.get(), ae = i.pointerUp(E) * X(), ce = te(O(ae), F), oe = sC(ae, ce), Se = $ - 10 * oe, Te = b + oe / 50;
    R = !1, N = !1, A.clear(), c.useDuration(Se).useFriction(Te), u.distance(ce, !y), z = !1, d.emit("pointerUp");
  }
  function U(E) {
    L && (E.stopPropagation(), E.preventDefault(), L = !1);
  }
  function K() {
    return N;
  }
  return {
    init: k,
    destroy: B,
    pointerDown: K
  };
}
function pC(e, t) {
  let n, a;
  function i(f) {
    return f.timeStamp;
  }
  function o(f, d) {
    const y = `client${(d || e.scroll) === "x" ? "X" : "Y"}`;
    return (Fd(f, t) ? f : f.touches[0])[y];
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
    return p && !y && De(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: s,
    pointerMove: u,
    pointerUp: c,
    readPoint: o
  };
}
function hC() {
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
function vC(e) {
  function t(n) {
    return e * (n / 100);
  }
  return {
    measure: t
  };
}
function yC(e, t, r, n, a, i, o) {
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
        const O = x.target === e, m = n.indexOf(x.target), w = O ? c : l[m], _ = d(O ? e : n[m]);
        if (De(_ - w) >= 0.5) {
          v.reInit(), t.emit("resize");
          break;
        }
      }
    }
    u = new ResizeObserver((g) => {
      (Is(i) || i(v, g)) && b(g);
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
function mC(e, t, r, n, a, i) {
  let o = 0, s = 0, u = a, c = i, l = e.get(), f = 0;
  function d() {
    const w = n.get() - e.get(), _ = !u;
    let A = 0;
    return _ ? (o = 0, r.set(n), e.set(n), A = w) : (r.set(e), o += w / u, o *= c, l += o, e.add(o), A = l - f), s = Eh(A), f = l, m;
  }
  function p() {
    const w = n.get() - t.get();
    return De(w) < 1e-3;
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
function gC(e, t, r, n, a) {
  const i = a.measure(10), o = a.measure(50), s = Qr(0.1, 0.99);
  let u = !1;
  function c() {
    return !(u || !e.reachedAny(r.get()) || !e.reachedAny(t.get()));
  }
  function l(p) {
    if (!c()) return;
    const y = e.reachedMin(t.get()) ? "min" : "max", h = De(e[y] - t.get()), v = r.get() - t.get(), b = s.constrain(h / o);
    r.subtract(v * b), !p && De(v) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction());
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
function bC(e, t, r, n, a) {
  const i = Qr(-t + e, 0), o = f(), s = l(), u = d();
  function c(y, h) {
    return La(y, h) <= 1;
  }
  function l() {
    const y = o[0], h = Lt(o), v = o.lastIndexOf(y), b = o.indexOf(h) + 1;
    return Qr(v, b);
  }
  function f() {
    return r.map((y, h) => {
      const {
        min: v,
        max: b
      } = i, g = i.constrain(y), x = !h, O = Ch(r, h);
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
function xC(e, t, r) {
  const n = t[0], a = r ? n - e : Lt(t);
  return {
    limit: Qr(a, n)
  };
}
function wC(e, t, r, n) {
  const i = t.min + 0.1, o = t.max + 0.1, {
    reachedMin: s,
    reachedMax: u
  } = Qr(i, o);
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
function OC(e) {
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
function SC(e, t, r, n, a) {
  const {
    startEdge: i,
    endEdge: o
  } = e, {
    groupSlides: s
  } = a, u = f().map(t.measure), c = d(), l = p();
  function f() {
    return s(n).map((h) => Lt(h)[o] - h[0][i]).map(De);
  }
  function d() {
    return n.map((h) => r[i] - h[i]).map((h) => -De(h));
  }
  function p() {
    return s(c).map((h) => h[0]).map((h, v) => h + u[v]);
  }
  return {
    snaps: c,
    snapsAligned: l
  };
}
function _C(e, t, r, n, a, i) {
  const {
    groupSlides: o
  } = a, {
    min: s,
    max: u
  } = n, c = l();
  function l() {
    const d = o(i), p = !e || t === "keepSnaps";
    return r.length === 1 ? [i] : p ? d : d.slice(s, u).map((y, h, v) => {
      const b = !h, g = Ch(v, h);
      if (b) {
        const x = Lt(v[0]) + 1;
        return Sy(x);
      }
      if (g) {
        const x = Li(i) - Lt(v)[0] + 1;
        return Sy(x, Lt(v)[0]);
      }
      return y;
    });
  }
  return {
    slideRegistry: c
  };
}
function AC(e, t, r, n, a) {
  const {
    reachedAny: i,
    removeOffset: o,
    constrain: s
  } = n;
  function u(y) {
    return y.concat().sort((h, v) => De(h) - De(v))[0];
  }
  function c(y) {
    const h = e ? o(y) : s(y), v = t.map((g, x) => ({
      diff: l(g - h, 0),
      index: x
    })).sort((g, x) => De(g.diff) - De(x.diff)), {
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
    const b = v.filter((g) => Eh(g) === h);
    return b.length ? u(b) : Lt(v) - r;
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
function PC(e, t, r, n, a, i, o) {
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
function TC(e, t, r, n, a, i, o, s) {
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
      Th(g) && (a.useDuration(0), n.index(g, 0), o.emit("slideFocus"));
    }
    i.add(document, "keydown", f, !1), t.forEach((h, v) => {
      i.add(h, "focus", (b) => {
        (Is(s) || s(p, b)) && y(v);
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
function Ia(e) {
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
    return Th(u) ? u : u.get();
  }
  return {
    get: r,
    set: n,
    add: a,
    subtract: i
  };
}
function FO(e, t) {
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
    const p = uC(e.direction(d));
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
function EC(e, t, r, n, a, i, o, s, u) {
  const l = Xa(a), f = Xa(a).reverse(), d = b().concat(g());
  function p(_, A) {
    return _.reduce((P, D) => P - a[D], A);
  }
  function y(_, A) {
    return _.reduce((P, D) => p(P, A) > 0 ? P.concat([D]) : P, []);
  }
  function h(_) {
    return i.map((A, P) => ({
      start: A - n[P] + 0.5 + _,
      end: A + t - 0.5 + _
    }));
  }
  function v(_, A, P) {
    const D = h(A);
    return _.map((T) => {
      const $ = P ? 0 : -r, M = P ? r : 0, j = P ? "end" : "start", I = D[T][j];
      return {
        index: T,
        loopPoint: I,
        slideLocation: Ia(-1),
        translate: FO(e, u[T]),
        target: () => s.get() > I ? $ : M
      };
    });
  }
  function b() {
    const _ = o[0], A = y(f, _);
    return v(A, r, !1);
  }
  function g() {
    const _ = t - o[0] - 1, A = y(l, _);
    return v(A, -r, !0);
  }
  function x() {
    return d.every(({
      index: _
    }) => {
      const A = l.filter((P) => P !== _);
      return p(A, t) <= 0.1;
    });
  }
  function O() {
    d.forEach((_) => {
      const {
        target: A,
        translate: P,
        slideLocation: D
      } = _, T = A();
      T !== D.get() && (P.to(T), D.set(T));
    });
  }
  function m() {
    d.forEach((_) => _.translate.clear());
  }
  return {
    canLoop: x,
    clear: m,
    loop: O,
    loopPoints: d
  };
}
function CC(e, t, r) {
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
      a || (Is(r) || r(u, l)) && c(l);
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
function jC(e, t, r, n) {
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
    return Za(a).reduce((h, v) => {
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
function MC(e, t, r, n, a, i) {
  const {
    measureSize: o,
    startEdge: s,
    endEdge: u
  } = e, c = r[0] && a, l = y(), f = h(), d = r.map(o), p = v();
  function y() {
    if (!c) return 0;
    const g = r[0];
    return De(t[s] - g[s]);
  }
  function h() {
    if (!c) return 0;
    const g = i.getComputedStyle(Lt(n));
    return parseFloat(g.getPropertyValue(`margin-${u}`));
  }
  function v() {
    return r.map((g, x, O) => {
      const m = !x, w = Ch(O, x);
      return m ? d[x] + l : w ? d[x] + f : O[x + 1][s] - g[s];
    }).map(De);
  }
  return {
    slideSizes: d,
    slideSizesWithGaps: p,
    startGap: l,
    endGap: f
  };
}
function $C(e, t, r, n, a, i, o, s, u) {
  const {
    startEdge: c,
    endEdge: l,
    direction: f
  } = e, d = Th(r);
  function p(b, g) {
    return Xa(b).filter((x) => x % g === 0).map((x) => b.slice(x, x + g));
  }
  function y(b) {
    return b.length ? Xa(b).reduce((g, x, O) => {
      const m = Lt(g) || 0, w = m === 0, _ = x === Li(b), A = a[c] - i[m][c], P = a[c] - i[x][l], D = !n && w ? f(o) : 0, T = !n && _ ? f(s) : 0, $ = De(P - T - (A + D));
      return O && $ > t + u && g.push(x), _ && g.push(b.length), g;
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
function IC(e, t, r, n, a, i, o) {
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
  } = i, _ = 2, A = hC(), P = A.measure(t), D = r.map(A.measure), T = fC(u, c), $ = T.measureSize(P), M = vC($), j = cC(s, $), I = !f && !!g, N = f || !!g, {
    slideSizes: R,
    slideSizesWithGaps: L,
    startGap: z,
    endGap: k
  } = MC(T, P, D, r, N, a), B = $C(T, $, v, f, P, D, z, k, _), {
    snaps: q,
    snapsAligned: H
  } = SC(T, j, P, D, B), X = -Lt(q) + Lt(L), {
    snapsContained: te,
    scrollContainLimit: ne
  } = bC($, X, H, g, _), ee = I ? te : H, {
    limit: Q
  } = xC(X, ee, f), U = BO(Li(ee), l, f), K = U.clone(), Z = Xa(r), E = ({
    dragHandler: hn,
    scrollBody: Ou,
    scrollBounds: Su,
    options: {
      loop: to
    }
  }) => {
    to || Su.constrain(hn.pointerDown()), Ou.seek();
  }, Y = ({
    scrollBody: hn,
    translate: Ou,
    location: Su,
    offsetLocation: to,
    previousLocation: _T,
    scrollLooper: AT,
    slideLooper: PT,
    dragHandler: TT,
    animation: ET,
    eventHandler: ty,
    scrollBounds: CT,
    options: {
      loop: ry
    }
  }, ny) => {
    const ay = hn.settled(), jT = !CT.shouldConstrain(), iy = ry ? ay : ay && jT, oy = iy && !TT.pointerDown();
    oy && ET.stop();
    const MT = Su.get() * ny + _T.get() * (1 - ny);
    to.set(MT), ry && (AT.loop(hn.direction()), PT.loop()), Ou.to(to.get()), oy && ty.emit("settle"), iy || ty.emit("scroll");
  }, F = lC(n, a, () => E(wu), (hn) => Y(wu, hn)), ae = 0.68, ce = ee[U.get()], oe = Ia(ce), Se = Ia(ce), Te = Ia(ce), me = Ia(ce), ye = mC(oe, Te, Se, me, d, ae), qe = AC(f, ee, X, Q, me), er = PC(F, U, K, ye, qe, me, o), dn = OC(Q), pn = Ja(), eo = jC(t, r, o, h), {
    slideRegistry: ga
  } = _C(I, g, ee, ne, B, Z), ST = TC(e, r, ga, er, ye, pn, o, w), wu = {
    ownerDocument: n,
    ownerWindow: a,
    eventHandler: o,
    containerRect: P,
    slideRects: D,
    animation: F,
    axis: T,
    dragHandler: dC(T, e, n, a, me, pC(T, a), oe, F, er, ye, qe, U, o, M, p, y, b, ae, m),
    eventStore: pn,
    percentOfView: M,
    index: U,
    indexPrevious: K,
    limit: Q,
    location: oe,
    offsetLocation: Te,
    previousLocation: Se,
    options: i,
    resizeHandler: yC(t, o, a, r, T, x, A),
    scrollBody: ye,
    scrollBounds: gC(Q, Te, me, ye, M),
    scrollLooper: wC(X, Q, Te, [oe, Te, Se, me]),
    scrollProgress: dn,
    scrollSnapList: ee.map(dn.get),
    scrollSnaps: ee,
    scrollTarget: qe,
    scrollTo: er,
    slideLooper: EC(T, $, X, R, L, q, ee, Te, r),
    slideFocus: ST,
    slidesHandler: CC(t, o, O),
    slidesInView: eo,
    slideIndexes: Z,
    slideRegistry: ga,
    slidesToScroll: B,
    target: me,
    translate: FO(T, t)
  };
  return wu;
}
function DC() {
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
const NC = {
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
function kC(e) {
  function t(i, o) {
    return qO(i, o || {});
  }
  function r(i) {
    const o = i.breakpoints || {}, s = Za(o).filter((u) => e.matchMedia(u).matches).map((u) => o[u]).reduce((u, c) => t(u, c), {});
    return t(i, s);
  }
  function n(i) {
    return i.map((o) => Za(o.breakpoints || {})).reduce((o, s) => o.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: r,
    optionsMediaQueries: n
  };
}
function RC(e) {
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
function So(e, t, r) {
  const n = e.ownerDocument, a = n.defaultView, i = kC(a), o = RC(i), s = Ja(), u = DC(), {
    mergeOptions: c,
    optionsAtMedia: l,
    optionsMediaQueries: f
  } = i, {
    on: d,
    off: p,
    emit: y
  } = u, h = T;
  let v = !1, b, g = c(NC, So.globalOptions), x = c(g), O = [], m, w, _;
  function A() {
    const {
      container: Z,
      slides: E
    } = x;
    w = (Bd(Z) ? e.querySelector(Z) : Z) || e.children[0];
    const F = Bd(E) ? w.querySelectorAll(E) : E;
    _ = [].slice.call(F || w.children);
  }
  function P(Z) {
    const E = IC(e, w, _, n, a, Z, u);
    if (Z.loop && !E.slideLooper.canLoop()) {
      const Y = Object.assign({}, Z, {
        loop: !1
      });
      return P(Y);
    }
    return E;
  }
  function D(Z, E) {
    v || (g = c(g, Z), x = l(g), O = E || O, A(), b = P(x), f([g, ...O.map(({
      options: Y
    }) => Y)]).forEach((Y) => s.add(Y, "change", T)), x.active && (b.translate.to(b.location.get()), b.animation.init(), b.slidesInView.init(), b.slideFocus.init(K), b.eventHandler.init(K), b.resizeHandler.init(K), b.slidesHandler.init(K), b.options.loop && b.slideLooper.loop(), w.offsetParent && _.length && b.dragHandler.init(K), m = o.init(K, O)));
  }
  function T(Z, E) {
    const Y = B();
    $(), D(c({
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
  function N(Z) {
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
  function k() {
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
    return _;
  }
  const K = {
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
    scrollPrev: N,
    scrollProgress: k,
    scrollSnapList: z,
    scrollTo: j,
    selectedScrollSnap: B,
    slideNodes: U,
    slidesInView: H,
    slidesNotInView: X
  };
  return D(t, r), setTimeout(() => u.emit("init"), 0), K;
}
So.globalOptions = void 0;
function jh(e = {}, t = []) {
  const r = Me(e), n = Me(t), [a, i] = he(), [o, s] = he(), u = tt(() => {
    a && a.reInit(r.current, n.current);
  }, [a]);
  return Le(() => {
    Ph(r.current, e) || (r.current = e, u());
  }, [e, u]), Le(() => {
    oC(n.current, t) || (n.current = t, u());
  }, [t, u]), Le(() => {
    if (iC() && o) {
      So.globalOptions = jh.globalOptions;
      const c = So(o, r.current, n.current);
      return i(c), () => c.destroy();
    } else
      i(void 0);
  }, [o, i]), [s, a];
}
jh.globalOptions = void 0;
function YW({ children: e, isValidProp: t, ...r }) {
  t && NT(t), r = { ...pt(sy), ...r }, r.isStatic = DT(() => r.isStatic);
  const n = He(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return S(sy.Provider, { value: n, children: e });
}
const Ne = 28, _y = 16, LC = ({ children: e }) => {
  const t = Me(null), [r, n] = he(!0), [a, i] = he(!1);
  hO(() => {
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
  return a && r ? c = `linear-gradient(to right, transparent 0px, transparent ${Ne}px, black ${2 * Ne}px, black calc(100% - ${3 * Ne}px), transparent calc(100% - ${2 * Ne}px), transparent 100%)` : a && !r ? c = `linear-gradient(to right, transparent 0px, transparent ${Ne}px, black ${2 * Ne}px, black 100%)` : !a && r ? c = `linear-gradient(to right, black 0px, black calc(100% - ${3 * Ne}px), transparent calc(100% - ${2 * Ne}px), transparent 100%)` : c = "none", V("div", {
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
          scrollMarginLeft: Ne + _y + "px"
        },
        children: l
      }, f)) : e && S("div", {
        className: "flex-shrink-0",
        style: {
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
          scrollMarginLeft: Ne + _y + "px"
        },
        children: e
      })
    }), a && S(_r, {
      size: "lg",
      compact: !0,
      variant: "outline",
      className: J("absolute opacity-100 transition-all", "-left-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: s,
      icon: mO,
      label: "Previous",
      hideLabel: !0
    }), r && S(_r, {
      size: "lg",
      variant: "outline",
      compact: !0,
      className: J("absolute opacity-100 transition-all", "-right-4 top-1/2 -translate-y-1/2 rounded-lg"),
      onClick: o,
      icon: gO,
      label: "Next",
      hideLabel: !0
    })]
  });
}, zO = fe.createContext(null);
function qi() {
  const e = fe.useContext(zO);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const WO = fe.forwardRef(({ orientation: e = "horizontal", opts: t, setApi: r, plugins: n, className: a, children: i, ...o }, s) => {
  const [u, c] = jh({
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
  }, [c, y]), S(zO.Provider, {
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
WO.displayName = "Carousel";
const UO = fe.forwardRef(({ className: e, ...t }, r) => {
  const n = `linear-gradient(to right, transparent 0px, transparent ${Ne / 2}px, black ${Ne}px, black calc(100% - ${Ne}px), transparent calc(100% - ${Ne / 2}px), transparent 100%)`, { carouselRef: a, orientation: i } = qi();
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
      className: J("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t
    })
  });
});
UO.displayName = "CarouselContent";
const HO = fe.forwardRef(({ className: e, ...t }, r) => {
  const { orientation: n } = qi();
  return S("div", {
    ref: r,
    role: "group",
    "aria-roledescription": "slide",
    className: J("min-w-0 shrink-0 grow-0 basis-full", n === "horizontal" ? "pl-4" : "pt-4", e),
    ...t
  });
});
HO.displayName = "CarouselItem";
const VO = fe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: o } = qi();
  return S("div", {
    className: J("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-left-3 top-1/2 -translate-y-1/2" : "-top-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(_r, {
      compact: !0,
      ref: n,
      size: "sm",
      variant: t,
      className: J("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Previous",
      icon: kT,
      hideLabel: !0
    })
  });
});
VO.displayName = "CarouselPrevious";
const KO = fe.forwardRef(({ className: e, variant: t = "outline", ...r }, n) => {
  const { orientation: a, scrollNext: i, canScrollNext: o } = qi();
  return S("div", {
    className: J("absolute flex h-6 w-6 items-center justify-center rounded-sm bg-f1-background opacity-0 backdrop-blur-sm transition-opacity group-hover/carousel:opacity-100", !o && "opacity-0 group-hover/carousel:opacity-0", a === "horizontal" ? "-right-3 top-1/2 -translate-y-1/2" : "-bottom-3 left-1/2 -translate-x-1/2 rotate-90"),
    children: S(_r, {
      ref: n,
      size: "sm",
      variant: t,
      compact: !0,
      className: J("absolute opacity-100 transition-all", e),
      disabled: !o,
      onClick: i,
      ...r,
      label: "Next",
      icon: RT,
      hideLabel: !0
    })
  });
});
KO.displayName = "CarouselNext";
const GO = fe.forwardRef(({ ...e }, t) => {
  const { api: r } = qi(), [, n] = fe.useState(!1), a = fe.useRef(null), i = fe.useCallback(() => {
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
GO.displayName = "CarouselDots";
const qC = Ps({
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
const BC = ({ children: e, columns: t, showArrows: r = !0, showDots: n = !0, autoplay: a = !1, delay: i = 3e3, showPeek: o = !1, doubleColumns: s }) => {
  const u = C.Children.toArray(e), c = C.useRef(a ? _h({
    delay: i,
    stopOnInteraction: !0
  }) : void 0), l = () => {
    c.current && c.current.stop();
  }, f = () => {
    c.current && c.current.play();
  };
  return t ? S(WO, {
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
    children: V("div", {
      className: "flex flex-col gap-5",
      children: [V("div", {
        className: "relative",
        children: [S(UO, {
          children: C.Children.map(u, (d, p) => {
            const y = s?.find((h) => h.index === p);
            return S(HO, {
              className: qC({
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
        }), r && V(ct, {
          children: [S(VO, {
            label: "Previous"
          }), S(KO, {
            label: "Next"
          })]
        })]
      }), n && S(GO, {})]
    })
  }) : S(LC, {
    children: e
  });
}, XW = ki("Carousel", BC), YO = zt(null);
function ZW({ children: e, layout: t }) {
  return S(YO.Provider, {
    value: t,
    children: e
  });
}
function JW() {
  return pt(YO);
}
var Tu, Ay;
function FC() {
  if (Ay) return Tu;
  Ay = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Tu = e, Tu;
}
var Eu, Py;
function Mh() {
  if (Py) return Eu;
  Py = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Eu = e, Eu;
}
var Cu, Ty;
function Ds() {
  if (Ty) return Cu;
  Ty = 1;
  var e = Mh();
  function t(r, n) {
    for (var a = r.length; a--; )
      if (e(r[a][0], n))
        return a;
    return -1;
  }
  return Cu = t, Cu;
}
var ju, Ey;
function zC() {
  if (Ey) return ju;
  Ey = 1;
  var e = Ds(), t = Array.prototype, r = t.splice;
  function n(a) {
    var i = this.__data__, o = e(i, a);
    if (o < 0)
      return !1;
    var s = i.length - 1;
    return o == s ? i.pop() : r.call(i, o, 1), --this.size, !0;
  }
  return ju = n, ju;
}
var Mu, Cy;
function WC() {
  if (Cy) return Mu;
  Cy = 1;
  var e = Ds();
  function t(r) {
    var n = this.__data__, a = e(n, r);
    return a < 0 ? void 0 : n[a][1];
  }
  return Mu = t, Mu;
}
var $u, jy;
function UC() {
  if (jy) return $u;
  jy = 1;
  var e = Ds();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return $u = t, $u;
}
var Iu, My;
function HC() {
  if (My) return Iu;
  My = 1;
  var e = Ds();
  function t(r, n) {
    var a = this.__data__, i = e(a, r);
    return i < 0 ? (++this.size, a.push([r, n])) : a[i][1] = n, this;
  }
  return Iu = t, Iu;
}
var Du, $y;
function Ns() {
  if ($y) return Du;
  $y = 1;
  var e = FC(), t = zC(), r = WC(), n = UC(), a = HC();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, Du = i, Du;
}
var Nu, Iy;
function VC() {
  if (Iy) return Nu;
  Iy = 1;
  var e = Ns();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return Nu = t, Nu;
}
var ku, Dy;
function KC() {
  if (Dy) return ku;
  Dy = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return ku = e, ku;
}
var Ru, Ny;
function GC() {
  if (Ny) return Ru;
  Ny = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return Ru = e, Ru;
}
var Lu, ky;
function YC() {
  if (ky) return Lu;
  ky = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return Lu = e, Lu;
}
var qu, Ry;
function XO() {
  if (Ry) return qu;
  Ry = 1;
  var e = typeof ro == "object" && ro && ro.Object === Object && ro;
  return qu = e, qu;
}
var Bu, Ly;
function Jt() {
  if (Ly) return Bu;
  Ly = 1;
  var e = XO(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Bu = r, Bu;
}
var Fu, qy;
function Bi() {
  if (qy) return Fu;
  qy = 1;
  var e = Jt(), t = e.Symbol;
  return Fu = t, Fu;
}
var zu, By;
function XC() {
  if (By) return zu;
  By = 1;
  var e = Bi(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, a = e ? e.toStringTag : void 0;
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
  return zu = i, zu;
}
var Wu, Fy;
function ZC() {
  if (Fy) return Wu;
  Fy = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return Wu = r, Wu;
}
var Uu, zy;
function fr() {
  if (zy) return Uu;
  zy = 1;
  var e = Bi(), t = XC(), r = ZC(), n = "[object Null]", a = "[object Undefined]", i = e ? e.toStringTag : void 0;
  function o(s) {
    return s == null ? s === void 0 ? a : n : i && i in Object(s) ? t(s) : r(s);
  }
  return Uu = o, Uu;
}
var Hu, Wy;
function Tr() {
  if (Wy) return Hu;
  Wy = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return Hu = e, Hu;
}
var Vu, Uy;
function $h() {
  if (Uy) return Vu;
  Uy = 1;
  var e = fr(), t = Tr(), r = "[object AsyncFunction]", n = "[object Function]", a = "[object GeneratorFunction]", i = "[object Proxy]";
  function o(s) {
    if (!t(s))
      return !1;
    var u = e(s);
    return u == n || u == a || u == r || u == i;
  }
  return Vu = o, Vu;
}
var Ku, Hy;
function JC() {
  if (Hy) return Ku;
  Hy = 1;
  var e = Jt(), t = e["__core-js_shared__"];
  return Ku = t, Ku;
}
var Gu, Vy;
function QC() {
  if (Vy) return Gu;
  Vy = 1;
  var e = JC(), t = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!t && t in n;
  }
  return Gu = r, Gu;
}
var Yu, Ky;
function ZO() {
  if (Ky) return Yu;
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
  return Yu = r, Yu;
}
var Xu, Gy;
function ej() {
  if (Gy) return Xu;
  Gy = 1;
  var e = $h(), t = QC(), r = Tr(), n = ZO(), a = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, o = Function.prototype, s = Object.prototype, u = o.toString, c = s.hasOwnProperty, l = RegExp(
    "^" + u.call(c).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(d) {
    if (!r(d) || t(d))
      return !1;
    var p = e(d) ? l : i;
    return p.test(n(d));
  }
  return Xu = f, Xu;
}
var Zu, Yy;
function tj() {
  if (Yy) return Zu;
  Yy = 1;
  function e(t, r) {
    return t?.[r];
  }
  return Zu = e, Zu;
}
var Ju, Xy;
function sn() {
  if (Xy) return Ju;
  Xy = 1;
  var e = ej(), t = tj();
  function r(n, a) {
    var i = t(n, a);
    return e(i) ? i : void 0;
  }
  return Ju = r, Ju;
}
var Qu, Zy;
function Ih() {
  if (Zy) return Qu;
  Zy = 1;
  var e = sn(), t = Jt(), r = e(t, "Map");
  return Qu = r, Qu;
}
var ec, Jy;
function ks() {
  if (Jy) return ec;
  Jy = 1;
  var e = sn(), t = e(Object, "create");
  return ec = t, ec;
}
var tc, Qy;
function rj() {
  if (Qy) return tc;
  Qy = 1;
  var e = ks();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return tc = t, tc;
}
var rc, em;
function nj() {
  if (em) return rc;
  em = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return rc = e, rc;
}
var nc, tm;
function aj() {
  if (tm) return nc;
  tm = 1;
  var e = ks(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    var o = this.__data__;
    if (e) {
      var s = o[i];
      return s === t ? void 0 : s;
    }
    return n.call(o, i) ? o[i] : void 0;
  }
  return nc = a, nc;
}
var ac, rm;
function ij() {
  if (rm) return ac;
  rm = 1;
  var e = ks(), t = Object.prototype, r = t.hasOwnProperty;
  function n(a) {
    var i = this.__data__;
    return e ? i[a] !== void 0 : r.call(i, a);
  }
  return ac = n, ac;
}
var ic, nm;
function oj() {
  if (nm) return ic;
  nm = 1;
  var e = ks(), t = "__lodash_hash_undefined__";
  function r(n, a) {
    var i = this.__data__;
    return this.size += this.has(n) ? 0 : 1, i[n] = e && a === void 0 ? t : a, this;
  }
  return ic = r, ic;
}
var oc, am;
function sj() {
  if (am) return oc;
  am = 1;
  var e = rj(), t = nj(), r = aj(), n = ij(), a = oj();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, oc = i, oc;
}
var sc, im;
function uj() {
  if (im) return sc;
  im = 1;
  var e = sj(), t = Ns(), r = Ih();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return sc = n, sc;
}
var uc, om;
function cj() {
  if (om) return uc;
  om = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return uc = e, uc;
}
var cc, sm;
function Rs() {
  if (sm) return cc;
  sm = 1;
  var e = cj();
  function t(r, n) {
    var a = r.__data__;
    return e(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
  }
  return cc = t, cc;
}
var lc, um;
function lj() {
  if (um) return lc;
  um = 1;
  var e = Rs();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return lc = t, lc;
}
var fc, cm;
function fj() {
  if (cm) return fc;
  cm = 1;
  var e = Rs();
  function t(r) {
    return e(this, r).get(r);
  }
  return fc = t, fc;
}
var dc, lm;
function dj() {
  if (lm) return dc;
  lm = 1;
  var e = Rs();
  function t(r) {
    return e(this, r).has(r);
  }
  return dc = t, dc;
}
var pc, fm;
function pj() {
  if (fm) return pc;
  fm = 1;
  var e = Rs();
  function t(r, n) {
    var a = e(this, r), i = a.size;
    return a.set(r, n), this.size += a.size == i ? 0 : 1, this;
  }
  return pc = t, pc;
}
var hc, dm;
function Dh() {
  if (dm) return hc;
  dm = 1;
  var e = uj(), t = lj(), r = fj(), n = dj(), a = pj();
  function i(o) {
    var s = -1, u = o == null ? 0 : o.length;
    for (this.clear(); ++s < u; ) {
      var c = o[s];
      this.set(c[0], c[1]);
    }
  }
  return i.prototype.clear = e, i.prototype.delete = t, i.prototype.get = r, i.prototype.has = n, i.prototype.set = a, hc = i, hc;
}
var vc, pm;
function hj() {
  if (pm) return vc;
  pm = 1;
  var e = Ns(), t = Ih(), r = Dh(), n = 200;
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
  return vc = a, vc;
}
var yc, hm;
function JO() {
  if (hm) return yc;
  hm = 1;
  var e = Ns(), t = VC(), r = KC(), n = GC(), a = YC(), i = hj();
  function o(s) {
    var u = this.__data__ = new e(s);
    this.size = u.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = a, o.prototype.set = i, yc = o, yc;
}
var mc, vm;
function vj() {
  if (vm) return mc;
  vm = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return mc = t, mc;
}
var gc, ym;
function yj() {
  if (ym) return gc;
  ym = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return gc = e, gc;
}
var bc, mm;
function QO() {
  if (mm) return bc;
  mm = 1;
  var e = Dh(), t = vj(), r = yj();
  function n(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.__data__ = new e(); ++i < o; )
      this.add(a[i]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, bc = n, bc;
}
var xc, gm;
function eS() {
  if (gm) return xc;
  gm = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return xc = e, xc;
}
var wc, bm;
function tS() {
  if (bm) return wc;
  bm = 1;
  function e(t, r) {
    return t.has(r);
  }
  return wc = e, wc;
}
var Oc, xm;
function rS() {
  if (xm) return Oc;
  xm = 1;
  var e = QO(), t = eS(), r = tS(), n = 1, a = 2;
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
        if (!t(s, function(_, A) {
          if (!r(x, A) && (O === _ || l(O, _, u, c, f)))
            return x.push(A);
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
  return Oc = i, Oc;
}
var Sc, wm;
function mj() {
  if (wm) return Sc;
  wm = 1;
  var e = Jt(), t = e.Uint8Array;
  return Sc = t, Sc;
}
var _c, Om;
function gj() {
  if (Om) return _c;
  Om = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a, i) {
      n[++r] = [i, a];
    }), n;
  }
  return _c = e, _c;
}
var Ac, Sm;
function Nh() {
  if (Sm) return Ac;
  Sm = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(a) {
      n[++r] = a;
    }), n;
  }
  return Ac = e, Ac;
}
var Pc, _m;
function bj() {
  if (_m) return Pc;
  _m = 1;
  var e = Bi(), t = mj(), r = Mh(), n = rS(), a = gj(), i = Nh(), o = 1, s = 2, u = "[object Boolean]", c = "[object Date]", l = "[object Error]", f = "[object Map]", d = "[object Number]", p = "[object RegExp]", y = "[object Set]", h = "[object String]", v = "[object Symbol]", b = "[object ArrayBuffer]", g = "[object DataView]", x = e ? e.prototype : void 0, O = x ? x.valueOf : void 0;
  function m(w, _, A, P, D, T, $) {
    switch (A) {
      case g:
        if (w.byteLength != _.byteLength || w.byteOffset != _.byteOffset)
          return !1;
        w = w.buffer, _ = _.buffer;
      case b:
        return !(w.byteLength != _.byteLength || !T(new t(w), new t(_)));
      case u:
      case c:
      case d:
        return r(+w, +_);
      case l:
        return w.name == _.name && w.message == _.message;
      case p:
      case h:
        return w == _ + "";
      case f:
        var M = a;
      case y:
        var j = P & o;
        if (M || (M = i), w.size != _.size && !j)
          return !1;
        var I = $.get(w);
        if (I)
          return I == _;
        P |= s, $.set(w, _);
        var N = n(M(w), M(_), P, D, T, $);
        return $.delete(w), N;
      case v:
        if (O)
          return O.call(w) == O.call(_);
    }
    return !1;
  }
  return Pc = m, Pc;
}
var Tc, Am;
function nS() {
  if (Am) return Tc;
  Am = 1;
  function e(t, r) {
    for (var n = -1, a = r.length, i = t.length; ++n < a; )
      t[i + n] = r[n];
    return t;
  }
  return Tc = e, Tc;
}
var Ec, Pm;
function ht() {
  if (Pm) return Ec;
  Pm = 1;
  var e = Array.isArray;
  return Ec = e, Ec;
}
var Cc, Tm;
function xj() {
  if (Tm) return Cc;
  Tm = 1;
  var e = nS(), t = ht();
  function r(n, a, i) {
    var o = a(n);
    return t(n) ? o : e(o, i(n));
  }
  return Cc = r, Cc;
}
var jc, Em;
function wj() {
  if (Em) return jc;
  Em = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = 0, o = []; ++n < a; ) {
      var s = t[n];
      r(s, n, t) && (o[i++] = s);
    }
    return o;
  }
  return jc = e, jc;
}
var Mc, Cm;
function Oj() {
  if (Cm) return Mc;
  Cm = 1;
  function e() {
    return [];
  }
  return Mc = e, Mc;
}
var $c, jm;
function Sj() {
  if (jm) return $c;
  jm = 1;
  var e = wj(), t = Oj(), r = Object.prototype, n = r.propertyIsEnumerable, a = Object.getOwnPropertySymbols, i = a ? function(o) {
    return o == null ? [] : (o = Object(o), e(a(o), function(s) {
      return n.call(o, s);
    }));
  } : t;
  return $c = i, $c;
}
var Ic, Mm;
function _j() {
  if (Mm) return Ic;
  Mm = 1;
  function e(t, r) {
    for (var n = -1, a = Array(t); ++n < t; )
      a[n] = r(n);
    return a;
  }
  return Ic = e, Ic;
}
var Dc, $m;
function dr() {
  if ($m) return Dc;
  $m = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Dc = e, Dc;
}
var Nc, Im;
function Aj() {
  if (Im) return Nc;
  Im = 1;
  var e = fr(), t = dr(), r = "[object Arguments]";
  function n(a) {
    return t(a) && e(a) == r;
  }
  return Nc = n, Nc;
}
var kc, Dm;
function kh() {
  if (Dm) return kc;
  Dm = 1;
  var e = Aj(), t = dr(), r = Object.prototype, n = r.hasOwnProperty, a = r.propertyIsEnumerable, i = e(/* @__PURE__ */ (function() {
    return arguments;
  })()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !a.call(o, "callee");
  };
  return kc = i, kc;
}
var Da = { exports: {} }, Rc, Nm;
function Pj() {
  if (Nm) return Rc;
  Nm = 1;
  function e() {
    return !1;
  }
  return Rc = e, Rc;
}
Da.exports;
var km;
function aS() {
  return km || (km = 1, (function(e, t) {
    var r = Jt(), n = Pj(), a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, o = i && i.exports === a, s = o ? r.Buffer : void 0, u = s ? s.isBuffer : void 0, c = u || n;
    e.exports = c;
  })(Da, Da.exports)), Da.exports;
}
var Lc, Rm;
function Rh() {
  if (Rm) return Lc;
  Rm = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, a) {
    var i = typeof n;
    return a = a ?? e, !!a && (i == "number" || i != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < a;
  }
  return Lc = r, Lc;
}
var qc, Lm;
function Lh() {
  if (Lm) return qc;
  Lm = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return qc = t, qc;
}
var Bc, qm;
function Tj() {
  if (qm) return Bc;
  qm = 1;
  var e = fr(), t = Lh(), r = dr(), n = "[object Arguments]", a = "[object Array]", i = "[object Boolean]", o = "[object Date]", s = "[object Error]", u = "[object Function]", c = "[object Map]", l = "[object Number]", f = "[object Object]", d = "[object RegExp]", p = "[object Set]", y = "[object String]", h = "[object WeakMap]", v = "[object ArrayBuffer]", b = "[object DataView]", g = "[object Float32Array]", x = "[object Float64Array]", O = "[object Int8Array]", m = "[object Int16Array]", w = "[object Int32Array]", _ = "[object Uint8Array]", A = "[object Uint8ClampedArray]", P = "[object Uint16Array]", D = "[object Uint32Array]", T = {};
  T[g] = T[x] = T[O] = T[m] = T[w] = T[_] = T[A] = T[P] = T[D] = !0, T[n] = T[a] = T[v] = T[i] = T[b] = T[o] = T[s] = T[u] = T[c] = T[l] = T[f] = T[d] = T[p] = T[y] = T[h] = !1;
  function $(M) {
    return r(M) && t(M.length) && !!T[e(M)];
  }
  return Bc = $, Bc;
}
var Fc, Bm;
function iS() {
  if (Bm) return Fc;
  Bm = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Fc = e, Fc;
}
var Na = { exports: {} };
Na.exports;
var Fm;
function Ej() {
  return Fm || (Fm = 1, (function(e, t) {
    var r = XO(), n = t && !t.nodeType && t, a = n && !0 && e && !e.nodeType && e, i = a && a.exports === n, o = i && r.process, s = (function() {
      try {
        var u = a && a.require && a.require("util").types;
        return u || o && o.binding && o.binding("util");
      } catch {
      }
    })();
    e.exports = s;
  })(Na, Na.exports)), Na.exports;
}
var zc, zm;
function oS() {
  if (zm) return zc;
  zm = 1;
  var e = Tj(), t = iS(), r = Ej(), n = r && r.isTypedArray, a = n ? t(n) : e;
  return zc = a, zc;
}
var Wc, Wm;
function Cj() {
  if (Wm) return Wc;
  Wm = 1;
  var e = _j(), t = kh(), r = ht(), n = aS(), a = Rh(), i = oS(), o = Object.prototype, s = o.hasOwnProperty;
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
  return Wc = u, Wc;
}
var Uc, Um;
function jj() {
  if (Um) return Uc;
  Um = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, a = typeof n == "function" && n.prototype || e;
    return r === a;
  }
  return Uc = t, Uc;
}
var Hc, Hm;
function sS() {
  if (Hm) return Hc;
  Hm = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Hc = e, Hc;
}
var Vc, Vm;
function Mj() {
  if (Vm) return Vc;
  Vm = 1;
  var e = sS(), t = e(Object.keys, Object);
  return Vc = t, Vc;
}
var Kc, Km;
function $j() {
  if (Km) return Kc;
  Km = 1;
  var e = jj(), t = Mj(), r = Object.prototype, n = r.hasOwnProperty;
  function a(i) {
    if (!e(i))
      return t(i);
    var o = [];
    for (var s in Object(i))
      n.call(i, s) && s != "constructor" && o.push(s);
    return o;
  }
  return Kc = a, Kc;
}
var Gc, Gm;
function Fi() {
  if (Gm) return Gc;
  Gm = 1;
  var e = $h(), t = Lh();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Gc = r, Gc;
}
var Yc, Ym;
function Ls() {
  if (Ym) return Yc;
  Ym = 1;
  var e = Cj(), t = $j(), r = Fi();
  function n(a) {
    return r(a) ? e(a) : t(a);
  }
  return Yc = n, Yc;
}
var Xc, Xm;
function Ij() {
  if (Xm) return Xc;
  Xm = 1;
  var e = xj(), t = Sj(), r = Ls();
  function n(a) {
    return e(a, r, t);
  }
  return Xc = n, Xc;
}
var Zc, Zm;
function Dj() {
  if (Zm) return Zc;
  Zm = 1;
  var e = Ij(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
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
      var w = i[b], _ = o[b];
      if (u)
        var A = f ? u(_, w, b, o, i, l) : u(w, _, b, i, o, l);
      if (!(A === void 0 ? w === _ || c(w, _, s, u, l) : A)) {
        O = !1;
        break;
      }
      m || (m = b == "constructor");
    }
    if (O && !m) {
      var P = i.constructor, D = o.constructor;
      P != D && "constructor" in i && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof D == "function" && D instanceof D) && (O = !1);
    }
    return l.delete(i), l.delete(o), O;
  }
  return Zc = a, Zc;
}
var Jc, Jm;
function Nj() {
  if (Jm) return Jc;
  Jm = 1;
  var e = sn(), t = Jt(), r = e(t, "DataView");
  return Jc = r, Jc;
}
var Qc, Qm;
function kj() {
  if (Qm) return Qc;
  Qm = 1;
  var e = sn(), t = Jt(), r = e(t, "Promise");
  return Qc = r, Qc;
}
var el, eg;
function uS() {
  if (eg) return el;
  eg = 1;
  var e = sn(), t = Jt(), r = e(t, "Set");
  return el = r, el;
}
var tl, tg;
function Rj() {
  if (tg) return tl;
  tg = 1;
  var e = sn(), t = Jt(), r = e(t, "WeakMap");
  return tl = r, tl;
}
var rl, rg;
function Lj() {
  if (rg) return rl;
  rg = 1;
  var e = Nj(), t = Ih(), r = kj(), n = uS(), a = Rj(), i = fr(), o = ZO(), s = "[object Map]", u = "[object Object]", c = "[object Promise]", l = "[object Set]", f = "[object WeakMap]", d = "[object DataView]", p = o(e), y = o(t), h = o(r), v = o(n), b = o(a), g = i;
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
  }), rl = g, rl;
}
var nl, ng;
function qj() {
  if (ng) return nl;
  ng = 1;
  var e = JO(), t = rS(), r = bj(), n = Dj(), a = Lj(), i = ht(), o = aS(), s = oS(), u = 1, c = "[object Arguments]", l = "[object Array]", f = "[object Object]", d = Object.prototype, p = d.hasOwnProperty;
  function y(h, v, b, g, x, O) {
    var m = i(h), w = i(v), _ = m ? l : a(h), A = w ? l : a(v);
    _ = _ == c ? f : _, A = A == c ? f : A;
    var P = _ == f, D = A == f, T = _ == A;
    if (T && o(h)) {
      if (!o(v))
        return !1;
      m = !0, P = !1;
    }
    if (T && !P)
      return O || (O = new e()), m || s(h) ? t(h, v, b, g, x, O) : r(h, v, _, b, g, x, O);
    if (!(b & u)) {
      var $ = P && p.call(h, "__wrapped__"), M = D && p.call(v, "__wrapped__");
      if ($ || M) {
        var j = $ ? h.value() : h, I = M ? v.value() : v;
        return O || (O = new e()), x(j, I, b, g, O);
      }
    }
    return T ? (O || (O = new e()), n(h, v, b, g, x, O)) : !1;
  }
  return nl = y, nl;
}
var al, ag;
function qh() {
  if (ag) return al;
  ag = 1;
  var e = qj(), t = dr();
  function r(n, a, i, o, s) {
    return n === a ? !0 : n == null || a == null || !t(n) && !t(a) ? n !== n && a !== a : e(n, a, i, o, r, s);
  }
  return al = r, al;
}
var il, ig;
function Bj() {
  if (ig) return il;
  ig = 1;
  var e = qh();
  function t(r, n) {
    return e(r, n);
  }
  return il = t, il;
}
var Fj = Bj();
const en = /* @__PURE__ */ Ae(Fj), zj = [], Wj = (e) => {
  const { open: t, onOpenChange: r, ...n } = e, a = zj.reduce((i, o) => {
    const { [o]: s, ...u } = i;
    return u;
  }, n);
  return S(LT, {
    ...a,
    open: t,
    onOpenChange: r,
    align: e.align || "end"
  });
}, cS = ki("Dropdown", Wj), Uj = ({ items: e, children: t }) => {
  const [r, n] = he(!1);
  return V(qT, {
    open: r,
    onOpenChange: n,
    children: [S(BT, {
      asChild: !0,
      children: t || S(_r, {
        label: "Other actions",
        icon: bO,
        variant: "outline",
        size: "lg",
        pressed: r,
        noTitle: !0
      })
    }), S(FT, {
      className: "bg-f1-background-overlay"
    }), S(zT, {
      className: "bg-f1-background",
      children: S("div", {
        className: "flex flex-col px-2 pb-3 pt-2",
        children: e.map((a, i) => a.type === "separator" ? S("div", {
          className: "mx-[-8px] my-2 h-px w-[calc(100%+16px)] bg-f1-border-secondary"
        }, `separator-${i}`) : a.type === "label" ? S("span", {
          className: "flex-1 px-3 py-2 text-xs font-medium leading-4 text-f1-foreground-secondary",
          children: a.text
        }, `label-${i}`) : a.href ? S(gh, {
          href: a.href,
          className: J("flex w-full items-start gap-1.5", a.critical && "text-f1-foreground-critical", "text-f1-foreground no-underline hover:cursor-pointer"),
          children: S(WT, {
            item: a
          })
        }, `link-${i}`) : V("button", {
          onClick: (o) => {
            o.preventDefault(), o.stopPropagation(), a.onClick?.(), n(!1);
          },
          className: "flex w-full items-center gap-2 p-3",
          children: [a.icon && S("span", {
            className: J("h-5 w-5 text-f1-icon", a.critical && "text-f1-icon-critical"),
            children: S(lt, {
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
}, QW = ki("MobileDropdown", Uj), Hj = Ps({
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
}), Vj = ({ type: e, size: t, "aria-label": r, "aria-labelledby": n }) => {
  const a = {
    critical: wO,
    warning: bh,
    info: xO,
    positive: Ts
  };
  return S("div", {
    className: Hj({
      type: e,
      size: t
    }),
    "aria-label": r,
    "aria-labelledby": n,
    role: "alert",
    children: S(lt, {
      icon: a[e],
      size: t
    })
  });
};
function Kj(e, t) {
  const r = xn(e), n = xn(t), a = r.getTime() - n.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Bh(e) {
  return UT(e, Date.now());
}
function Gj(e) {
  return (t) => {
    const n = (e ? Math[e] : Math.trunc)(t);
    return n === 0 ? 0 : n;
  };
}
function Yj(e, t, r) {
  const n = HT(), a = r?.locale ?? n.locale ?? VT, i = Kj(e, t);
  if (isNaN(i))
    throw new RangeError("Invalid time value");
  const o = Object.assign({}, r, {
    addSuffix: r?.addSuffix,
    comparison: i
  });
  let s, u;
  i > 0 ? (s = xn(t), u = xn(e)) : (s = xn(e), u = xn(t));
  const c = Gj(r?.roundingMethod ?? "round"), l = u.getTime() - s.getTime(), f = l / dy, d = uy(u) - uy(s), p = (l - d) / dy, y = r?.unit;
  let h;
  if (y ? h = y : f < 1 ? h = "second" : f < 60 ? h = "minute" : f < cy ? h = "hour" : p < ly ? h = "day" : p < fy ? h = "month" : h = "year", h === "second") {
    const v = c(l / 1e3);
    return a.formatDistance("xSeconds", v, o);
  } else if (h === "minute") {
    const v = c(f);
    return a.formatDistance("xMinutes", v, o);
  } else if (h === "hour") {
    const v = c(f / 60);
    return a.formatDistance("xHours", v, o);
  } else if (h === "day") {
    const v = c(p / cy);
    return a.formatDistance("xDays", v, o);
  } else if (h === "month") {
    const v = c(p / ly);
    return v === 12 && y !== "month" ? a.formatDistance("xYears", 1, o) : a.formatDistance("xMonths", v, o);
  } else {
    const v = c(p / fy);
    return a.formatDistance("xYears", v, o);
  }
}
function Xj(e, t) {
  return Yj(e, Bh(e), t);
}
function lS(e) {
  return OO(e, Bh(e));
}
function fS(e) {
  return OO(e, wo(Bh(e), 1));
}
function xa(e, t) {
  return KT(e, -t);
}
function og(e, t) {
  return GT(e, -t);
}
function e7(e) {
  return Ya(e, "p");
}
function t7(e) {
  return Ya(e, "HH:mm");
}
function Zj(e) {
  return Ya(e, "LLL");
}
function Jj(e) {
  return e.getDate();
}
function sg(e, t = !0) {
  return Xj(e, { addSuffix: t });
}
function r7(e, { yesterdayRelative: t = !0 } = {}) {
  return lS(e) ? sg(e) : fS(e) ? t ? sg(e) : Ya(e, "p") : Ya(e, "PPPp");
}
const n7 = (e, t) => {
  const r = {
    today: [],
    yesterday: [],
    lastWeek: [],
    lastMonth: []
  };
  return e.forEach((n) => {
    const a = n[t], i = Math.abs(YT(a, /* @__PURE__ */ new Date()));
    lS(a) ? r.today.push(n) : fS(a) ? r.yesterday.push(n) : i <= 7 ? r.lastWeek.push(n) : i <= 30 ? r.lastMonth.push(n) : r[a.getFullYear()] = [...r[a.getFullYear()] || [], n];
  }), r;
}, a7 = ({ date: e, "aria-label": t, "aria-labelledby": r }) => {
  const n = Jj(e), a = Zj(e);
  return V("div", {
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
function dS(e, t) {
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
const Qj = Ps({
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
}), e2 = ({ count: e, size: t = "md", type: r, list: n, avatarType: a = "person" }) => {
  const i = S("div", {
    className: J("cursor-default font-medium transition hover:bg-f1-background-secondary-hover", Qj({
      size: t,
      type: r
    })),
    children: t === "xs" ? S(lt, {
      icon: bO,
      size: "xs"
    }) : `+${e}`
  });
  return n?.length ? V(SO, {
    children: [S(_O, {
      asChild: !0,
      children: i
    }), S(AO, {
      side: "top",
      children: V(xh, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [n.map((o, s) => V("div", {
          className: "flex w-[180px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: [S("div", {
            className: "h-6 w-6 shrink-0",
            children: S(an, {
              avatar: {
                type: a,
                ...o
              },
              size: "sm"
            })
          }), S("div", {
            className: "min-w-0 flex-1 truncate font-semibold",
            children: dS(a, o)
          })]
        }, s)), S(PO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : i;
}, t2 = ["xs", "sm", "md"], r2 = {
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
}, pS = ({ avatars: e, size: t = "md", type: r, noTooltip: n = !1, remainingCount: a, max: i }) => {
  if (t && !t2.includes(t)) {
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
  return S(TO, {
    max: i,
    items: e.map((c) => ({
      type: r,
      ...c
    })),
    gap: s,
    itemsWidth: u,
    className: "flex items-center",
    renderListItem: (c, l) => {
      const f = dS(r, c), d = S("div", {
        className: "flex h-fit w-fit shrink-0 items-center justify-center",
        style: l !== e.length - 1 ? {
          clipPath: r2[r === "person" ? "rounded" : "base"][t]
        } : void 0,
        children: S(an, {
          avatar: {
            ...c,
            type: r
          },
          size: t
        })
      });
      return S("div", {
        children: n ? d : S(wh, {
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
      children: S(e2, {
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
pS.displayName = "AvatarList";
const n2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let a2 = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += n2[r[e] & 63];
  return t;
};
var ol, ug;
function aa() {
  if (ug) return ol;
  ug = 1;
  var e = fr(), t = dr(), r = "[object Symbol]";
  function n(a) {
    return typeof a == "symbol" || t(a) && e(a) == r;
  }
  return ol = n, ol;
}
var sl, cg;
function Fh() {
  if (cg) return sl;
  cg = 1;
  var e = ht(), t = aa(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function a(i, o) {
    if (e(i))
      return !1;
    var s = typeof i;
    return s == "number" || s == "symbol" || s == "boolean" || i == null || t(i) ? !0 : n.test(i) || !r.test(i) || o != null && i in Object(o);
  }
  return sl = a, sl;
}
var ul, lg;
function hS() {
  if (lg) return ul;
  lg = 1;
  var e = Dh(), t = "Expected a function";
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
  return r.Cache = e, ul = r, ul;
}
var cl, fg;
function i2() {
  if (fg) return cl;
  fg = 1;
  var e = hS(), t = 500;
  function r(n) {
    var a = e(n, function(o) {
      return i.size === t && i.clear(), o;
    }), i = a.cache;
    return a;
  }
  return cl = r, cl;
}
var ll, dg;
function o2() {
  if (dg) return ll;
  dg = 1;
  var e = i2(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(a) {
    var i = [];
    return a.charCodeAt(0) === 46 && i.push(""), a.replace(t, function(o, s, u, c) {
      i.push(u ? c.replace(r, "$1") : s || o);
    }), i;
  });
  return ll = n, ll;
}
var fl, pg;
function zh() {
  if (pg) return fl;
  pg = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length, i = Array(a); ++n < a; )
      i[n] = r(t[n], n, t);
    return i;
  }
  return fl = e, fl;
}
var dl, hg;
function s2() {
  if (hg) return dl;
  hg = 1;
  var e = Bi(), t = zh(), r = ht(), n = aa(), a = e ? e.prototype : void 0, i = a ? a.toString : void 0;
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
  return dl = o, dl;
}
var pl, vg;
function vS() {
  if (vg) return pl;
  vg = 1;
  var e = s2();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return pl = t, pl;
}
var hl, yg;
function yS() {
  if (yg) return hl;
  yg = 1;
  var e = ht(), t = Fh(), r = o2(), n = vS();
  function a(i, o) {
    return e(i) ? i : t(i, o) ? [i] : r(n(i));
  }
  return hl = a, hl;
}
var vl, mg;
function qs() {
  if (mg) return vl;
  mg = 1;
  var e = aa();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return vl = t, vl;
}
var yl, gg;
function Wh() {
  if (gg) return yl;
  gg = 1;
  var e = yS(), t = qs();
  function r(n, a) {
    a = e(a, n);
    for (var i = 0, o = a.length; n != null && i < o; )
      n = n[t(a[i++])];
    return i && i == o ? n : void 0;
  }
  return yl = r, yl;
}
var ml, bg;
function mS() {
  if (bg) return ml;
  bg = 1;
  var e = Wh();
  function t(r, n, a) {
    var i = r == null ? void 0 : e(r, n);
    return i === void 0 ? a : i;
  }
  return ml = t, ml;
}
var u2 = mS();
const xt = /* @__PURE__ */ Ae(u2);
var gl, xg;
function c2() {
  if (xg) return gl;
  xg = 1;
  function e(t) {
    return t == null;
  }
  return gl = e, gl;
}
var l2 = c2();
const le = /* @__PURE__ */ Ae(l2);
var bl, wg;
function f2() {
  if (wg) return bl;
  wg = 1;
  var e = fr(), t = ht(), r = dr(), n = "[object String]";
  function a(i) {
    return typeof i == "string" || !t(i) && r(i) && e(i) == n;
  }
  return bl = a, bl;
}
var d2 = f2();
const zi = /* @__PURE__ */ Ae(d2);
var p2 = $h();
const ue = /* @__PURE__ */ Ae(p2);
var h2 = Tr();
const ia = /* @__PURE__ */ Ae(h2);
var no = { exports: {} }, ge = {};
var Og;
function v2() {
  if (Og) return ge;
  Og = 1;
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
var Sg;
function y2() {
  return Sg || (Sg = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var w = o, _ = i, A = e, P = u, D = r, T = d, $ = f, M = t, j = a, I = n, N = c, R = l, L = !1, z = !1;
    function k(F) {
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
    function K(F) {
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
    be.ContextConsumer = w, be.ContextProvider = _, be.Element = A, be.ForwardRef = P, be.Fragment = D, be.Lazy = T, be.Memo = $, be.Portal = M, be.Profiler = j, be.StrictMode = I, be.Suspense = N, be.SuspenseList = R, be.isAsyncMode = k, be.isConcurrentMode = B, be.isContextConsumer = q, be.isContextProvider = H, be.isElement = X, be.isForwardRef = te, be.isFragment = ne, be.isLazy = ee, be.isMemo = Q, be.isPortal = U, be.isProfiler = K, be.isStrictMode = Z, be.isSuspense = E, be.isSuspenseList = Y, be.isValidElementType = O, be.typeOf = m;
  })()), be;
}
var _g;
function m2() {
  return _g || (_g = 1, process.env.NODE_ENV === "production" ? no.exports = v2() : no.exports = y2()), no.exports;
}
var g2 = m2(), xl, Ag;
function gS() {
  if (Ag) return xl;
  Ag = 1;
  var e = fr(), t = dr(), r = "[object Number]";
  function n(a) {
    return typeof a == "number" || t(a) && e(a) == r;
  }
  return xl = n, xl;
}
var wl, Pg;
function b2() {
  if (Pg) return wl;
  Pg = 1;
  var e = gS();
  function t(r) {
    return e(r) && r != +r;
  }
  return wl = t, wl;
}
var x2 = b2();
const oa = /* @__PURE__ */ Ae(x2);
var w2 = gS();
const O2 = /* @__PURE__ */ Ae(w2);
var ot = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, zr = function(t) {
  return zi(t) && t.indexOf("%") === t.length - 1;
}, G = function(t) {
  return O2(t) && !oa(t);
}, Ge = function(t) {
  return G(t) || zi(t);
}, S2 = 0, un = function(t) {
  var r = ++S2;
  return "".concat(t || "").concat(r);
}, st = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!G(t) && !zi(t))
    return n;
  var i;
  if (zr(t)) {
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
}, _2 = function(t) {
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
function _o(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : xt(n, t)) === r;
  });
}
var i7 = function(t) {
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
function Pn(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function zd(e) {
  "@babel/helpers - typeof";
  return zd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zd(e);
}
var A2 = ["viewBox", "children"], P2 = [
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
], Tg = ["points", "pathLength"], Ol = {
  svg: A2,
  polygon: Tg,
  polyline: Tg
}, Uh = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Ao = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Rt(t) && (n = t.props), !ia(n))
    return null;
  var a = {};
  return Object.keys(n).forEach(function(i) {
    Uh.includes(i) && (a[i] = r || function(o) {
      return n[i](n, o);
    });
  }), a;
}, T2 = function(t, r, n) {
  return function(a) {
    return t(r, n, a), null;
  };
}, tn = function(t, r, n) {
  if (!ia(t) || zd(t) !== "object")
    return null;
  var a = null;
  return Object.keys(t).forEach(function(i) {
    var o = t[i];
    Uh.includes(i) && typeof o == "function" && (a || (a = {}), a[i] = T2(o, r, n));
  }), a;
}, E2 = ["children"], C2 = ["children"];
function Eg(e, t) {
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
function Wd(e) {
  "@babel/helpers - typeof";
  return Wd = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wd(e);
}
var Cg = {
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
}, jg = null, Sl = null, Hh = function e(t) {
  if (t === jg && Array.isArray(Sl))
    return Sl;
  var r = [];
  return Kr.forEach(t, function(n) {
    le(n) || (g2.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Sl = r, jg = t, r;
};
function wt(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(a) {
    return or(a);
  }) : n = [or(t)], Hh(e).forEach(function(a) {
    var i = xt(a, "type.displayName") || xt(a, "type.name");
    n.indexOf(i) !== -1 && r.push(a);
  }), r;
}
function mt(e, t) {
  var r = wt(e, t);
  return r && r[0];
}
var Mg = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, a = r.height;
  return !(!G(n) || n <= 0 || !G(a) || a <= 0);
}, M2 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], $2 = function(t) {
  return t && t.type && zi(t.type) && M2.indexOf(t.type) >= 0;
}, bS = function(t) {
  return t && Wd(t) === "object" && "clipDot" in t;
}, I2 = function(t, r, n, a) {
  var i, o = (i = Ol?.[a]) !== null && i !== void 0 ? i : [];
  return !ue(t) && (a && o.includes(r) || P2.includes(r)) || n && Uh.includes(r);
}, ie = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var a = t;
  if (/* @__PURE__ */ Rt(t) && (a = t.props), !ia(a))
    return null;
  var i = {};
  return Object.keys(a).forEach(function(o) {
    var s;
    I2((s = a) === null || s === void 0 ? void 0 : s[o], o, r, n) && (i[o] = a[o]);
  }), i;
}, Ud = function e(t, r) {
  if (t === r)
    return !0;
  var n = Kr.count(t);
  if (n !== Kr.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return $g(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var a = 0; a < n; a++) {
    var i = t[a], o = r[a];
    if (Array.isArray(i) || Array.isArray(o)) {
      if (!e(i, o))
        return !1;
    } else if (!$g(i, o))
      return !1;
  }
  return !0;
}, $g = function(t, r) {
  if (le(t) && le(r))
    return !0;
  if (!le(t) && !le(r)) {
    var n = t.props || {}, a = n.children, i = Eg(n, E2), o = r.props || {}, s = o.children, u = Eg(o, C2);
    return a && s ? Pn(i, u) && Ud(a, s) : !a && !s ? Pn(i, u) : !1;
  }
  return !1;
}, Ig = function(t, r) {
  var n = [], a = {};
  return Hh(t).forEach(function(i, o) {
    if ($2(i))
      n.push(i);
    else if (i) {
      var s = or(i.type), u = r[s] || {}, c = u.handler, l = u.once;
      if (c && (!l || !a[s])) {
        var f = c(i, s, o);
        n.push(f), a[s] = !0;
      }
    }
  }), n;
}, D2 = function(t) {
  var r = t && t.type;
  return r && Cg[r] ? Cg[r] : null;
}, N2 = function(t, r) {
  return Hh(r).indexOf(t);
}, k2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
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
function R2(e, t) {
  if (e == null) return {};
  var r = L2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function L2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Vd(e) {
  var t = e.children, r = e.width, n = e.height, a = e.viewBox, i = e.className, o = e.style, s = e.title, u = e.desc, c = R2(e, k2), l = a || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, f = de("recharts-surface", i);
  return /* @__PURE__ */ C.createElement("svg", Hd({}, ie(c, !0, "svg"), {
    className: f,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height)
  }), /* @__PURE__ */ C.createElement("title", null, s), /* @__PURE__ */ C.createElement("desc", null, u), t);
}
var q2 = ["children", "className"];
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
function B2(e, t) {
  if (e == null) return {};
  var r = F2(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function F2(e, t) {
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
  var r = e.children, n = e.className, a = B2(e, q2), i = de("recharts-layer", n);
  return /* @__PURE__ */ C.createElement("g", Kd({
    className: i
  }, ie(a, !0), {
    ref: t
  }), r);
}), z2 = process.env.NODE_ENV !== "production", qt = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  if (z2 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return a[o++];
      }));
    }
}, _l, Dg;
function W2() {
  if (Dg) return _l;
  Dg = 1;
  function e(t, r, n) {
    var a = -1, i = t.length;
    r < 0 && (r = -r > i ? 0 : i + r), n = n > i ? i : n, n < 0 && (n += i), i = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(i); ++a < i; )
      o[a] = t[a + r];
    return o;
  }
  return _l = e, _l;
}
var Al, Ng;
function U2() {
  if (Ng) return Al;
  Ng = 1;
  var e = W2();
  function t(r, n, a) {
    var i = r.length;
    return a = a === void 0 ? i : a, !n && a >= i ? r : e(r, n, a);
  }
  return Al = t, Al;
}
var Pl, kg;
function xS() {
  if (kg) return Pl;
  kg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "\\u200d", s = RegExp("[" + o + e + a + i + "]");
  function u(c) {
    return s.test(c);
  }
  return Pl = u, Pl;
}
var Tl, Rg;
function H2() {
  if (Rg) return Tl;
  Rg = 1;
  function e(t) {
    return t.split("");
  }
  return Tl = e, Tl;
}
var El, Lg;
function V2() {
  if (Lg) return El;
  Lg = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", a = t + r + n, i = "\\ufe0e\\ufe0f", o = "[" + e + "]", s = "[" + a + "]", u = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + s + "|" + u + ")", l = "[^" + e + "]", f = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", p = "\\u200d", y = c + "?", h = "[" + i + "]?", v = "(?:" + p + "(?:" + [l, f, d].join("|") + ")" + h + y + ")*", b = h + y + v, g = "(?:" + [l + s + "?", s, f, d, o].join("|") + ")", x = RegExp(u + "(?=" + u + ")|" + g + b, "g");
  function O(m) {
    return m.match(x) || [];
  }
  return El = O, El;
}
var Cl, qg;
function K2() {
  if (qg) return Cl;
  qg = 1;
  var e = H2(), t = xS(), r = V2();
  function n(a) {
    return t(a) ? r(a) : e(a);
  }
  return Cl = n, Cl;
}
var jl, Bg;
function G2() {
  if (Bg) return jl;
  Bg = 1;
  var e = U2(), t = xS(), r = K2(), n = vS();
  function a(i) {
    return function(o) {
      o = n(o);
      var s = t(o) ? r(o) : void 0, u = s ? s[0] : o.charAt(0), c = s ? e(s, 1).join("") : o.slice(1);
      return u[i]() + c;
    };
  }
  return jl = a, jl;
}
var Ml, Fg;
function Y2() {
  if (Fg) return Ml;
  Fg = 1;
  var e = G2(), t = e("toUpperCase");
  return Ml = t, Ml;
}
var X2 = Y2();
const Bs = /* @__PURE__ */ Ae(X2);
function Ce(e) {
  return function() {
    return e;
  };
}
const wS = Math.cos, Po = Math.sin, Wt = Math.sqrt, To = Math.PI, Fs = 2 * To, Gd = Math.PI, Yd = 2 * Gd, Lr = 1e-6, Z2 = Yd - Lr;
function OS(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function J2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return OS;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let a = 1, i = n.length; a < i; ++a)
      this._ += Math.round(arguments[a] * r) / r + n[a];
  };
}
class Q2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? OS : J2(t);
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
      let p = n - o, y = a - s, h = u * u + c * c, v = p * p + y * y, b = Math.sqrt(h), g = Math.sqrt(d), x = i * Math.tan((Gd - Math.acos((h + d - v) / (2 * b * g))) / 2), O = x / g, m = x / b;
      Math.abs(O - 1) > Lr && this._append`L${t + O * l},${r + O * f}`, this._append`A${i},${i},0,0,${+(f * p > l * y)},${this._x1 = t + m * u},${this._y1 = r + m * c}`;
    }
  }
  arc(t, r, n, a, i, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let s = n * Math.cos(a), u = n * Math.sin(a), c = t + s, l = r + u, f = 1 ^ o, d = o ? a - i : i - a;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > Lr || Math.abs(this._y1 - l) > Lr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Yd + Yd), d > Z2 ? this._append`A${n},${n},0,1,${f},${t - s},${r - u}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > Lr && this._append`A${n},${n},0,${+(d >= Gd)},${f},${this._x1 = t + n * Math.cos(i)},${this._y1 = r + n * Math.sin(i)}`);
  }
  rect(t, r, n, a) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+a}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Vh(e) {
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
  }, () => new Q2(t);
}
function Kh(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
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
function zs(e) {
  return new SS(e);
}
function _S(e) {
  return e[0];
}
function AS(e) {
  return e[1];
}
function PS(e, t) {
  var r = Ce(!0), n = null, a = zs, i = null, o = Vh(s);
  e = typeof e == "function" ? e : e === void 0 ? _S : Ce(e), t = typeof t == "function" ? t : t === void 0 ? AS : Ce(t);
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
function ao(e, t, r) {
  var n = null, a = Ce(!0), i = null, o = zs, s = null, u = Vh(c);
  e = typeof e == "function" ? e : e === void 0 ? _S : Ce(+e), t = typeof t == "function" ? t : Ce(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? AS : Ce(+r);
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
    return PS().defined(a).curve(o).context(i);
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
class TS {
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
function eM(e) {
  return new TS(e, !0);
}
function tM(e) {
  return new TS(e, !1);
}
const Gh = {
  draw(e, t) {
    const r = Wt(t / To);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Fs);
  }
}, rM = {
  draw(e, t) {
    const r = Wt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, ES = Wt(1 / 3), nM = ES * 2, aM = {
  draw(e, t) {
    const r = Wt(t / nM), n = r * ES;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, iM = {
  draw(e, t) {
    const r = Wt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, oM = 0.8908130915292852, CS = Po(To / 10) / Po(7 * To / 10), sM = Po(Fs / 10) * CS, uM = -wS(Fs / 10) * CS, cM = {
  draw(e, t) {
    const r = Wt(t * oM), n = sM * r, a = uM * r;
    e.moveTo(0, -r), e.lineTo(n, a);
    for (let i = 1; i < 5; ++i) {
      const o = Fs * i / 5, s = wS(o), u = Po(o);
      e.lineTo(u * r, -s * r), e.lineTo(s * n - u * a, u * n + s * a);
    }
    e.closePath();
  }
}, $l = Wt(3), lM = {
  draw(e, t) {
    const r = -Wt(t / ($l * 3));
    e.moveTo(0, r * 2), e.lineTo(-$l * r, -r), e.lineTo($l * r, -r), e.closePath();
  }
}, St = -0.5, _t = Wt(3) / 2, Xd = 1 / Wt(12), fM = (Xd / 2 + 1) * 3, dM = {
  draw(e, t) {
    const r = Wt(t / fM), n = r / 2, a = r * Xd, i = n, o = r * Xd + r, s = -i, u = o;
    e.moveTo(n, a), e.lineTo(i, o), e.lineTo(s, u), e.lineTo(St * n - _t * a, _t * n + St * a), e.lineTo(St * i - _t * o, _t * i + St * o), e.lineTo(St * s - _t * u, _t * s + St * u), e.lineTo(St * n + _t * a, St * a - _t * n), e.lineTo(St * i + _t * o, St * o - _t * i), e.lineTo(St * s + _t * u, St * u - _t * s), e.closePath();
  }
};
function pM(e, t) {
  let r = null, n = Vh(a);
  e = typeof e == "function" ? e : Ce(e || Gh), t = typeof t == "function" ? t : Ce(t === void 0 ? 64 : +t);
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
function Eo() {
}
function Co(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function jS(e) {
  this._context = e;
}
jS.prototype = {
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
        Co(this, this._x1, this._y1);
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
        Co(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function hM(e) {
  return new jS(e);
}
function MS(e) {
  this._context = e;
}
MS.prototype = {
  areaStart: Eo,
  areaEnd: Eo,
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
        Co(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function vM(e) {
  return new MS(e);
}
function $S(e) {
  this._context = e;
}
$S.prototype = {
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
        Co(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function yM(e) {
  return new $S(e);
}
function IS(e) {
  this._context = e;
}
IS.prototype = {
  areaStart: Eo,
  areaEnd: Eo,
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
function mM(e) {
  return new IS(e);
}
function zg(e) {
  return e < 0 ? -1 : 1;
}
function Wg(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, i = (e._y1 - e._y0) / (n || a < 0 && -0), o = (r - e._y1) / (a || n < 0 && -0), s = (i * a + o * n) / (n + a);
  return (zg(i) + zg(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0;
}
function Ug(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Il(e, t, r) {
  var n = e._x0, a = e._y0, i = e._x1, o = e._y1, s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function jo(e) {
  this._context = e;
}
jo.prototype = {
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
        Il(this, this._t0, Ug(this, this._t0));
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
          this._point = 3, Il(this, Ug(this, r = Wg(this, e, t)), r);
          break;
        default:
          Il(this, this._t0, r = Wg(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function DS(e) {
  this._context = new NS(e);
}
(DS.prototype = Object.create(jo.prototype)).point = function(e, t) {
  jo.prototype.point.call(this, t, e);
};
function NS(e) {
  this._context = e;
}
NS.prototype = {
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
function gM(e) {
  return new jo(e);
}
function bM(e) {
  return new DS(e);
}
function kS(e) {
  this._context = e;
}
kS.prototype = {
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
        for (var n = Hg(e), a = Hg(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(n[0][i], a[0][i], n[1][i], a[1][i], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Hg(e) {
  var t, r = e.length - 1, n, a = new Array(r), i = new Array(r), o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) a[t] = 1, i[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = a[t] / i[t - 1], i[t] -= n, o[t] -= n * o[t - 1];
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t) a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t) i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function xM(e) {
  return new kS(e);
}
function Ws(e, t) {
  this._context = e, this._t = t;
}
Ws.prototype = {
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
function wM(e) {
  return new Ws(e, 0.5);
}
function OM(e) {
  return new Ws(e, 0);
}
function SM(e) {
  return new Ws(e, 1);
}
function jn(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function Zd(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function _M(e, t) {
  return e[t];
}
function AM(e) {
  const t = [];
  return t.key = e, t;
}
function PM() {
  var e = Ce([]), t = Zd, r = jn, n = _M;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), AM), s, u = o.length, c = -1, l;
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
    return arguments.length ? (t = i == null ? Zd : typeof i == "function" ? i : Ce(Array.from(i)), a) : t;
  }, a.offset = function(i) {
    return arguments.length ? (r = i ?? jn, a) : r;
  }, a;
}
function TM(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    jn(e, t);
  }
}
function EM(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    jn(e, t);
  }
}
function CM(e, t) {
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
    a[n - 1][1] += a[n - 1][0] = r, jn(e, t);
  }
}
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
var jM = ["type", "size", "sizeType"];
function Jd() {
  return Jd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jd.apply(this, arguments);
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
function Kg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vg(Object(r), !0).forEach(function(n) {
      MM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MM(e, t, r) {
  return t = $M(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $M(e) {
  var t = IM(e, "string");
  return Qa(t) == "symbol" ? t : t + "";
}
function IM(e, t) {
  if (Qa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function DM(e, t) {
  if (e == null) return {};
  var r = NM(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function NM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var RS = {
  symbolCircle: Gh,
  symbolCross: rM,
  symbolDiamond: aM,
  symbolSquare: iM,
  symbolStar: cM,
  symbolTriangle: lM,
  symbolWye: dM
}, kM = Math.PI / 180, RM = function(t) {
  var r = "symbol".concat(Bs(t));
  return RS[r] || Gh;
}, LM = function(t, r, n) {
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
      var a = 18 * kM;
      return 1.25 * t * t * (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, qM = function(t, r) {
  RS["symbol".concat(Bs(t))] = r;
}, Yh = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, a = t.size, i = a === void 0 ? 64 : a, o = t.sizeType, s = o === void 0 ? "area" : o, u = DM(t, jM), c = Kg(Kg({}, u), {}, {
    type: n,
    size: i,
    sizeType: s
  }), l = function() {
    var v = RM(n), b = pM().type(v).size(LM(i, s, n));
    return b();
  }, f = c.className, d = c.cx, p = c.cy, y = ie(c, !0);
  return d === +d && p === +p && i === +i ? /* @__PURE__ */ C.createElement("path", Jd({}, y, {
    className: de("recharts-symbols", f),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: l()
  })) : null;
};
Yh.registerSymbol = qM;
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
function Qd() {
  return Qd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qd.apply(this, arguments);
}
function Gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function BM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gg(Object(r), !0).forEach(function(n) {
      ei(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FM(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function zM(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, qS(n.key), n);
  }
}
function WM(e, t, r) {
  return t && zM(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function UM(e, t, r) {
  return t = Mo(t), HM(e, LS() ? Reflect.construct(t, r || [], Mo(e).constructor) : t.apply(e, r));
}
function HM(e, t) {
  if (t && (Mn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return VM(e);
}
function VM(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function LS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (LS = function() {
    return !!e;
  })();
}
function Mo(e) {
  return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Mo(e);
}
function KM(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ep(e, t);
}
function ep(e, t) {
  return ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ep(e, t);
}
function ei(e, t, r) {
  return t = qS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qS(e) {
  var t = GM(e, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function GM(e, t) {
  if (Mn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var At = 32, Xh = /* @__PURE__ */ (function(e) {
  function t() {
    return FM(this, t), UM(this, t, arguments);
  }
  return KM(t, e), WM(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var a = this.props.inactiveColor, i = At / 2, o = At / 6, s = At / 3, u = n.inactive ? a : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ C.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: u,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: i,
            x2: At,
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
            H`).concat(At, "M").concat(2 * s, ",").concat(i, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(s, ",").concat(i),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ C.createElement("path", {
            stroke: "none",
            fill: u,
            d: "M0,".concat(At / 8, "h").concat(At, "v").concat(At * 3 / 4, "h").concat(-At, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ C.isValidElement(n.legendIcon)) {
          var c = BM({}, n);
          return delete c.legendIcon, /* @__PURE__ */ C.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ C.createElement(Yh, {
          fill: u,
          cx: i,
          cy: i,
          size: At,
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
        width: At,
        height: At
      }, f = {
        display: s === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return i.map(function(p, y) {
        var h = p.formatter || u, v = de(ei(ei({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var b = ue(p.value) ? null : p.value;
        qt(
          !ue(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var g = p.inactive ? c : p.color;
        return /* @__PURE__ */ C.createElement("li", Qd({
          className: v,
          style: f,
          key: "legend-item-".concat(y)
        }, tn(n.props, p, y)), /* @__PURE__ */ C.createElement(Vd, {
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
})(Mt);
ei(Xh, "displayName", "Legend");
ei(Xh, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Dl, Yg;
function YM() {
  if (Yg) return Dl;
  Yg = 1;
  var e = JO(), t = qh(), r = 1, n = 2;
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
  return Dl = a, Dl;
}
var Nl, Xg;
function BS() {
  if (Xg) return Nl;
  Xg = 1;
  var e = Tr();
  function t(r) {
    return r === r && !e(r);
  }
  return Nl = t, Nl;
}
var kl, Zg;
function XM() {
  if (Zg) return kl;
  Zg = 1;
  var e = BS(), t = Ls();
  function r(n) {
    for (var a = t(n), i = a.length; i--; ) {
      var o = a[i], s = n[o];
      a[i] = [o, s, e(s)];
    }
    return a;
  }
  return kl = r, kl;
}
var Rl, Jg;
function FS() {
  if (Jg) return Rl;
  Jg = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return Rl = e, Rl;
}
var Ll, Qg;
function ZM() {
  if (Qg) return Ll;
  Qg = 1;
  var e = YM(), t = XM(), r = FS();
  function n(a) {
    var i = t(a);
    return i.length == 1 && i[0][2] ? r(i[0][0], i[0][1]) : function(o) {
      return o === a || e(o, a, i);
    };
  }
  return Ll = n, Ll;
}
var ql, eb;
function JM() {
  if (eb) return ql;
  eb = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return ql = e, ql;
}
var Bl, tb;
function QM() {
  if (tb) return Bl;
  tb = 1;
  var e = yS(), t = kh(), r = ht(), n = Rh(), a = Lh(), i = qs();
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
  return Bl = o, Bl;
}
var Fl, rb;
function e$() {
  if (rb) return Fl;
  rb = 1;
  var e = JM(), t = QM();
  function r(n, a) {
    return n != null && t(n, a, e);
  }
  return Fl = r, Fl;
}
var zl, nb;
function t$() {
  if (nb) return zl;
  nb = 1;
  var e = qh(), t = mS(), r = e$(), n = Fh(), a = BS(), i = FS(), o = qs(), s = 1, u = 2;
  function c(l, f) {
    return n(l) && a(f) ? i(o(l), f) : function(d) {
      var p = t(d, l);
      return p === void 0 && p === f ? r(d, l) : e(f, p, s | u);
    };
  }
  return zl = c, zl;
}
var Wl, ab;
function sa() {
  if (ab) return Wl;
  ab = 1;
  function e(t) {
    return t;
  }
  return Wl = e, Wl;
}
var Ul, ib;
function r$() {
  if (ib) return Ul;
  ib = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return Ul = e, Ul;
}
var Hl, ob;
function n$() {
  if (ob) return Hl;
  ob = 1;
  var e = Wh();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return Hl = t, Hl;
}
var Vl, sb;
function a$() {
  if (sb) return Vl;
  sb = 1;
  var e = r$(), t = n$(), r = Fh(), n = qs();
  function a(i) {
    return r(i) ? e(n(i)) : t(i);
  }
  return Vl = a, Vl;
}
var Kl, ub;
function Qt() {
  if (ub) return Kl;
  ub = 1;
  var e = ZM(), t = t$(), r = sa(), n = ht(), a = a$();
  function i(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : a(o);
  }
  return Kl = i, Kl;
}
var Gl, cb;
function zS() {
  if (cb) return Gl;
  cb = 1;
  function e(t, r, n, a) {
    for (var i = t.length, o = n + (a ? 1 : -1); a ? o-- : ++o < i; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return Gl = e, Gl;
}
var Yl, lb;
function i$() {
  if (lb) return Yl;
  lb = 1;
  function e(t) {
    return t !== t;
  }
  return Yl = e, Yl;
}
var Xl, fb;
function o$() {
  if (fb) return Xl;
  fb = 1;
  function e(t, r, n) {
    for (var a = n - 1, i = t.length; ++a < i; )
      if (t[a] === r)
        return a;
    return -1;
  }
  return Xl = e, Xl;
}
var Zl, db;
function s$() {
  if (db) return Zl;
  db = 1;
  var e = zS(), t = i$(), r = o$();
  function n(a, i, o) {
    return i === i ? r(a, i, o) : e(a, t, o);
  }
  return Zl = n, Zl;
}
var Jl, pb;
function u$() {
  if (pb) return Jl;
  pb = 1;
  var e = s$();
  function t(r, n) {
    var a = r == null ? 0 : r.length;
    return !!a && e(r, n, 0) > -1;
  }
  return Jl = t, Jl;
}
var Ql, hb;
function c$() {
  if (hb) return Ql;
  hb = 1;
  function e(t, r, n) {
    for (var a = -1, i = t == null ? 0 : t.length; ++a < i; )
      if (n(r, t[a]))
        return !0;
    return !1;
  }
  return Ql = e, Ql;
}
var ef, vb;
function l$() {
  if (vb) return ef;
  vb = 1;
  function e() {
  }
  return ef = e, ef;
}
var tf, yb;
function f$() {
  if (yb) return tf;
  yb = 1;
  var e = uS(), t = l$(), r = Nh(), n = 1 / 0, a = e && 1 / r(new e([, -0]))[1] == n ? function(i) {
    return new e(i);
  } : t;
  return tf = a, tf;
}
var rf, mb;
function d$() {
  if (mb) return rf;
  mb = 1;
  var e = QO(), t = u$(), r = c$(), n = tS(), a = f$(), i = Nh(), o = 200;
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
  return rf = s, rf;
}
var nf, gb;
function p$() {
  if (gb) return nf;
  gb = 1;
  var e = Qt(), t = d$();
  function r(n, a) {
    return n && n.length ? t(n, e(a, 2)) : [];
  }
  return nf = r, nf;
}
var h$ = p$();
const bb = /* @__PURE__ */ Ae(h$);
function WS(e, t, r) {
  return t === !0 ? bb(e, r) : ue(t) ? bb(e, t) : e;
}
function $n(e) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
var v$ = ["ref"];
function xb(e, t) {
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
    t % 2 ? xb(Object(r), !0).forEach(function(n) {
      Us(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function y$(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, HS(n.key), n);
  }
}
function m$(e, t, r) {
  return t && wb(e.prototype, t), r && wb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function g$(e, t, r) {
  return t = $o(t), b$(e, US() ? Reflect.construct(t, r || [], $o(e).constructor) : t.apply(e, r));
}
function b$(e, t) {
  if (t && ($n(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return x$(e);
}
function x$(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function US() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (US = function() {
    return !!e;
  })();
}
function $o(e) {
  return $o = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $o(e);
}
function w$(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && tp(e, t);
}
function tp(e, t) {
  return tp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, tp(e, t);
}
function Us(e, t, r) {
  return t = HS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HS(e) {
  var t = O$(e, "string");
  return $n(t) == "symbol" ? t : t + "";
}
function O$(e, t) {
  if ($n(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function S$(e, t) {
  if (e == null) return {};
  var r = _$(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function A$(e) {
  return e.value;
}
function P$(e, t) {
  if (/* @__PURE__ */ C.isValidElement(e))
    return /* @__PURE__ */ C.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ C.createElement(e, t);
  t.ref;
  var r = S$(t, v$);
  return /* @__PURE__ */ C.createElement(Xh, r);
}
var Ob = 1, Yr = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    y$(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = g$(this, t, [].concat(a)), Us(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return w$(t, e), m$(t, [{
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
      a ? (Math.abs(a.width - this.lastBoundingBox.width) > Ob || Math.abs(a.height - this.lastBoundingBox.height) > Ob) && (this.lastBoundingBox.width = a.width, this.lastBoundingBox.height = a.height, n && n(a)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
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
      }, P$(i, tr(tr({}, this.props), {}, {
        payload: WS(l, c, A$)
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
})(Mt);
Us(Yr, "displayName", "Legend");
Us(Yr, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var af, Sb;
function T$() {
  if (Sb) return af;
  Sb = 1;
  var e = Bi(), t = kh(), r = ht(), n = e ? e.isConcatSpreadable : void 0;
  function a(i) {
    return r(i) || t(i) || !!(n && i && i[n]);
  }
  return af = a, af;
}
var of, _b;
function VS() {
  if (_b) return of;
  _b = 1;
  var e = nS(), t = T$();
  function r(n, a, i, o, s) {
    var u = -1, c = n.length;
    for (i || (i = t), s || (s = []); ++u < c; ) {
      var l = n[u];
      a > 0 && i(l) ? a > 1 ? r(l, a - 1, i, o, s) : e(s, l) : o || (s[s.length] = l);
    }
    return s;
  }
  return of = r, of;
}
var sf, Ab;
function E$() {
  if (Ab) return sf;
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
  return sf = e, sf;
}
var uf, Pb;
function C$() {
  if (Pb) return uf;
  Pb = 1;
  var e = E$(), t = e();
  return uf = t, uf;
}
var cf, Tb;
function KS() {
  if (Tb) return cf;
  Tb = 1;
  var e = C$(), t = Ls();
  function r(n, a) {
    return n && e(n, a, t);
  }
  return cf = r, cf;
}
var lf, Eb;
function j$() {
  if (Eb) return lf;
  Eb = 1;
  var e = Fi();
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
  return lf = t, lf;
}
var ff, Cb;
function Zh() {
  if (Cb) return ff;
  Cb = 1;
  var e = KS(), t = j$(), r = t(e);
  return ff = r, ff;
}
var df, jb;
function GS() {
  if (jb) return df;
  jb = 1;
  var e = Zh(), t = Fi();
  function r(n, a) {
    var i = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(s, u, c) {
      o[++i] = a(s, u, c);
    }), o;
  }
  return df = r, df;
}
var pf, Mb;
function M$() {
  if (Mb) return pf;
  Mb = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return pf = e, pf;
}
var hf, $b;
function $$() {
  if ($b) return hf;
  $b = 1;
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
  return hf = t, hf;
}
var vf, Ib;
function I$() {
  if (Ib) return vf;
  Ib = 1;
  var e = $$();
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
  return vf = t, vf;
}
var yf, Db;
function D$() {
  if (Db) return yf;
  Db = 1;
  var e = zh(), t = Wh(), r = Qt(), n = GS(), a = M$(), i = iS(), o = I$(), s = sa(), u = ht();
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
  return yf = c, yf;
}
var mf, Nb;
function N$() {
  if (Nb) return mf;
  Nb = 1;
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
  return mf = e, mf;
}
var gf, kb;
function k$() {
  if (kb) return gf;
  kb = 1;
  var e = N$(), t = Math.max;
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
  return gf = r, gf;
}
var bf, Rb;
function R$() {
  if (Rb) return bf;
  Rb = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return bf = e, bf;
}
var xf, Lb;
function YS() {
  if (Lb) return xf;
  Lb = 1;
  var e = sn(), t = (function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  })();
  return xf = t, xf;
}
var wf, qb;
function L$() {
  if (qb) return wf;
  qb = 1;
  var e = R$(), t = YS(), r = sa(), n = t ? function(a, i) {
    return t(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(i),
      writable: !0
    });
  } : r;
  return wf = n, wf;
}
var Of, Bb;
function q$() {
  if (Bb) return Of;
  Bb = 1;
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
  return Of = n, Of;
}
var Sf, Fb;
function B$() {
  if (Fb) return Sf;
  Fb = 1;
  var e = L$(), t = q$(), r = t(e);
  return Sf = r, Sf;
}
var _f, zb;
function F$() {
  if (zb) return _f;
  zb = 1;
  var e = sa(), t = k$(), r = B$();
  function n(a, i) {
    return r(t(a, i, e), a + "");
  }
  return _f = n, _f;
}
var Af, Wb;
function Hs() {
  if (Wb) return Af;
  Wb = 1;
  var e = Mh(), t = Fi(), r = Rh(), n = Tr();
  function a(i, o, s) {
    if (!n(s))
      return !1;
    var u = typeof o;
    return (u == "number" ? t(s) && r(o, s.length) : u == "string" && o in s) ? e(s[o], i) : !1;
  }
  return Af = a, Af;
}
var Pf, Ub;
function z$() {
  if (Ub) return Pf;
  Ub = 1;
  var e = VS(), t = D$(), r = F$(), n = Hs(), a = r(function(i, o) {
    if (i == null)
      return [];
    var s = o.length;
    return s > 1 && n(i, o[0], o[1]) ? o = [] : s > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(i, e(o, 1), []);
  });
  return Pf = a, Pf;
}
var W$ = z$();
const Jh = /* @__PURE__ */ Ae(W$);
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
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
function U$(e, t) {
  return G$(e) || K$(e, t) || V$(e, t) || H$();
}
function H$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V$(e, t) {
  if (e) {
    if (typeof e == "string") return Hb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hb(e, t);
  }
}
function Hb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function K$(e, t) {
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
function G$(e) {
  if (Array.isArray(e)) return e;
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
function Tf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vb(Object(r), !0).forEach(function(n) {
      Y$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y$(e, t, r) {
  return t = X$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X$(e) {
  var t = Z$(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function Z$(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J$(e) {
  return Array.isArray(e) && Ge(e[0]) && Ge(e[1]) ? e.join(" ~ ") : e;
}
var Q$ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, a = t.contentStyle, i = a === void 0 ? {} : a, o = t.itemStyle, s = o === void 0 ? {} : o, u = t.labelStyle, c = u === void 0 ? {} : u, l = t.payload, f = t.formatter, d = t.itemSorter, p = t.wrapperClassName, y = t.labelClassName, h = t.label, v = t.labelFormatter, b = t.accessibilityLayer, g = b === void 0 ? !1 : b, x = function() {
    if (l && l.length) {
      var $ = {
        padding: 0,
        margin: 0
      }, M = (d ? Jh(l, d) : l).map(function(j, I) {
        if (j.type === "none")
          return null;
        var N = Tf({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, s), R = j.formatter || f || J$, L = j.value, z = j.name, k = L, B = z;
        if (R && k != null && B != null) {
          var q = R(L, z, j, I, l);
          if (Array.isArray(q)) {
            var H = U$(q, 2);
            k = H[0], B = H[1];
          } else
            k = q;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ C.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: N
          }, Ge(B) ? /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, B) : null, Ge(B) ? /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ C.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, k), /* @__PURE__ */ C.createElement("span", {
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
  }, O = Tf({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, i), m = Tf({
    margin: 0
  }, c), w = !le(h), _ = w ? h : "", A = de("recharts-default-tooltip", p), P = de("recharts-tooltip-label", y);
  w && v && l !== void 0 && l !== null && (_ = v(h, l));
  var D = g ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ C.createElement("div", rp({
    className: A,
    style: O
  }, D), /* @__PURE__ */ C.createElement("p", {
    className: P,
    style: m
  }, /* @__PURE__ */ C.isValidElement(_) ? _ : "".concat(_)), x());
};
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function io(e, t, r) {
  return t = eI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eI(e) {
  var t = tI(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function tI(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var wa = "recharts-tooltip-wrapper", rI = {
  visibility: "hidden"
};
function nI(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return de(wa, io(io(io(io({}, "".concat(wa, "-right"), G(r) && t && G(t.x) && r >= t.x), "".concat(wa, "-left"), G(r) && t && G(t.x) && r < t.x), "".concat(wa, "-bottom"), G(n) && t && G(t.y) && n >= t.y), "".concat(wa, "-top"), G(n) && t && G(t.y) && n < t.y));
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
function aI(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function iI(e) {
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
  }), c = aI({
    translateX: l,
    translateY: f,
    useTranslate3d: s
  })) : c = rI, {
    cssProperties: c,
    cssClasses: nI({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function In(e) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e);
}
function Gb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gb(Object(r), !0).forEach(function(n) {
      ap(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function oI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ZS(n.key), n);
  }
}
function uI(e, t, r) {
  return t && sI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cI(e, t, r) {
  return t = Io(t), lI(e, XS() ? Reflect.construct(t, r || [], Io(e).constructor) : t.apply(e, r));
}
function lI(e, t) {
  if (t && (In(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fI(e);
}
function fI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function XS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (XS = function() {
    return !!e;
  })();
}
function Io(e) {
  return Io = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Io(e);
}
function dI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && np(e, t);
}
function np(e, t) {
  return np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, np(e, t);
}
function ap(e, t, r) {
  return t = ZS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZS(e) {
  var t = pI(e, "string");
  return In(t) == "symbol" ? t : t + "";
}
function pI(e, t) {
  if (In(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Xb = 1, hI = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    oI(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = cI(this, t, [].concat(a)), ap(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ap(r, "handleKeyDown", function(o) {
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
  return dI(t, e), uI(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Xb || Math.abs(n.height - this.state.lastBoundingBox.height) > Xb) && this.setState({
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
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.children, l = a.coordinate, f = a.hasPayload, d = a.isAnimationActive, p = a.offset, y = a.position, h = a.reverseDirection, v = a.useTranslate3d, b = a.viewBox, g = a.wrapperStyle, x = iI({
        allowEscapeViewBox: o,
        coordinate: l,
        offsetTopLeft: p,
        position: y,
        reverseDirection: h,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: v,
        viewBox: b
      }), O = x.cssClasses, m = x.cssProperties, w = Yb(Yb({
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
          ref: function(A) {
            n.wrapperNode = A;
          }
        }, c)
      );
    }
  }]);
})(Mt), vI = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Er = {
  isSsr: vI()
};
function Dn(e) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e);
}
function Zb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zb(Object(r), !0).forEach(function(n) {
      Qh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, QS(n.key), n);
  }
}
function gI(e, t, r) {
  return t && mI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function bI(e, t, r) {
  return t = Do(t), xI(e, JS() ? Reflect.construct(t, r || [], Do(e).constructor) : t.apply(e, r));
}
function xI(e, t) {
  if (t && (Dn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wI(e);
}
function wI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function JS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (JS = function() {
    return !!e;
  })();
}
function Do(e) {
  return Do = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Do(e);
}
function OI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ip(e, t);
}
function ip(e, t) {
  return ip = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ip(e, t);
}
function Qh(e, t, r) {
  return t = QS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QS(e) {
  var t = SI(e, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function SI(e, t) {
  if (Dn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function _I(e) {
  return e.dataKey;
}
function AI(e, t) {
  return /* @__PURE__ */ C.isValidElement(e) ? /* @__PURE__ */ C.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ C.createElement(e, t) : /* @__PURE__ */ C.createElement(Q$, t);
}
var Ut = /* @__PURE__ */ (function(e) {
  function t() {
    return yI(this, t), bI(this, t, arguments);
  }
  return OI(t, e), gI(t, [{
    key: "render",
    value: function() {
      var n = this, a = this.props, i = a.active, o = a.allowEscapeViewBox, s = a.animationDuration, u = a.animationEasing, c = a.content, l = a.coordinate, f = a.filterNull, d = a.isAnimationActive, p = a.offset, y = a.payload, h = a.payloadUniqBy, v = a.position, b = a.reverseDirection, g = a.useTranslate3d, x = a.viewBox, O = a.wrapperStyle, m = y ?? [];
      f && m.length && (m = WS(y.filter(function(_) {
        return _.value != null && (_.hide !== !0 || n.props.includeHidden);
      }), h, _I));
      var w = m.length > 0;
      return /* @__PURE__ */ C.createElement(hI, {
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
      }, AI(c, Jb(Jb({}, this.props), {}, {
        payload: m
      })));
    }
  }]);
})(Mt);
Qh(Ut, "displayName", "Tooltip");
Qh(Ut, "defaultProps", {
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
var Ef, Qb;
function PI() {
  if (Qb) return Ef;
  Qb = 1;
  var e = Jt(), t = function() {
    return e.Date.now();
  };
  return Ef = t, Ef;
}
var Cf, e0;
function TI() {
  if (e0) return Cf;
  e0 = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Cf = t, Cf;
}
var jf, t0;
function EI() {
  if (t0) return jf;
  t0 = 1;
  var e = TI(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return jf = r, jf;
}
var Mf, r0;
function e_() {
  if (r0) return Mf;
  r0 = 1;
  var e = EI(), t = Tr(), r = aa(), n = NaN, a = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt;
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
  return Mf = u, Mf;
}
var $f, n0;
function CI() {
  if (n0) return $f;
  n0 = 1;
  var e = Tr(), t = PI(), r = e_(), n = "Expected a function", a = Math.max, i = Math.min;
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
      return v = M, y = setTimeout(A, u), b ? O(M) : p;
    }
    function w(M) {
      var j = M - h, I = M - v, N = u - j;
      return g ? i(N, d - I) : N;
    }
    function _(M) {
      var j = M - h, I = M - v;
      return h === void 0 || j >= u || j < 0 || g && I >= d;
    }
    function A() {
      var M = t();
      if (_(M))
        return P(M);
      y = setTimeout(A, w(M));
    }
    function P(M) {
      return y = void 0, x && l ? O(M) : (l = f = void 0, p);
    }
    function D() {
      y !== void 0 && clearTimeout(y), v = 0, l = h = f = y = void 0;
    }
    function T() {
      return y === void 0 ? p : P(t());
    }
    function $() {
      var M = t(), j = _(M);
      if (l = arguments, f = this, h = M, j) {
        if (y === void 0)
          return m(h);
        if (g)
          return clearTimeout(y), y = setTimeout(A, u), O(h);
      }
      return y === void 0 && (y = setTimeout(A, u)), p;
    }
    return $.cancel = D, $.flush = T, $;
  }
  return $f = o, $f;
}
var If, a0;
function jI() {
  if (a0) return If;
  a0 = 1;
  var e = CI(), t = Tr(), r = "Expected a function";
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
  return If = n, If;
}
var MI = jI();
const t_ = /* @__PURE__ */ Ae(MI);
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
function i0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? i0(Object(r), !0).forEach(function(n) {
      $I(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $I(e, t, r) {
  return t = II(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function II(e) {
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
function NI(e, t) {
  return qI(e) || LI(e, t) || RI(e, t) || kI();
}
function kI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RI(e, t) {
  if (e) {
    if (typeof e == "string") return o0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o0(e, t);
  }
}
function o0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function LI(e, t) {
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
function qI(e) {
  if (Array.isArray(e)) return e;
}
var BI = /* @__PURE__ */ ze(function(e, t) {
  var r = e.aspect, n = e.initialDimension, a = n === void 0 ? {
    width: -1,
    height: -1
  } : n, i = e.width, o = i === void 0 ? "100%" : i, s = e.height, u = s === void 0 ? "100%" : s, c = e.minWidth, l = c === void 0 ? 0 : c, f = e.minHeight, d = e.maxHeight, p = e.children, y = e.debounce, h = y === void 0 ? 0 : y, v = e.id, b = e.className, g = e.onResize, x = e.style, O = x === void 0 ? {} : x, m = Me(null), w = Me();
  w.current = g, $T(t, function() {
    return Object.defineProperty(m.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), m.current;
      },
      configurable: !0
    });
  });
  var _ = he({
    containerWidth: a.width,
    containerHeight: a.height
  }), A = NI(_, 2), P = A[0], D = A[1], T = tt(function(M, j) {
    D(function(I) {
      var N = Math.round(M), R = Math.round(j);
      return I.containerWidth === N && I.containerHeight === R ? I : {
        containerWidth: N,
        containerHeight: R
      };
    });
  }, []);
  Le(function() {
    var M = function(z) {
      var k, B = z[0].contentRect, q = B.width, H = B.height;
      T(q, H), (k = w.current) === null || k === void 0 || k.call(w, q, H);
    };
    h > 0 && (M = t_(M, h, {
      trailing: !0,
      leading: !1
    }));
    var j = new ResizeObserver(M), I = m.current.getBoundingClientRect(), N = I.width, R = I.height;
    return T(N, R), j.observe(m.current), function() {
      j.disconnect();
    };
  }, [T, h]);
  var $ = He(function() {
    var M = P.containerWidth, j = P.containerHeight;
    if (M < 0 || j < 0)
      return null;
    qt(zr(o) || zr(u), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, u), qt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = zr(o) ? M : o, N = zr(u) ? j : u;
    r && r > 0 && (I ? N = I / r : N && (I = N * r), d && N > d && (N = d)), qt(I > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, N, o, u, l, f, r);
    var R = !Array.isArray(p) && or(p.type).endsWith("Chart");
    return C.Children.map(p, function(L) {
      return /* @__PURE__ */ C.isValidElement(L) ? /* @__PURE__ */ Ue(L, oo({
        width: I,
        height: N
      }, R ? {
        style: oo({
          height: "100%",
          width: "100%",
          maxHeight: N,
          maxWidth: I
        }, L.props.style)
      } : {})) : L;
    });
  }, [r, p, u, d, f, l, P, o]);
  return /* @__PURE__ */ C.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: de("recharts-responsive-container", b),
    style: oo(oo({}, O), {}, {
      width: o,
      height: u,
      minWidth: l,
      minHeight: f,
      maxHeight: d
    }),
    ref: m
  }, $);
}), Vs = function(t) {
  return null;
};
Vs.displayName = "Cell";
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
function s0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s0(Object(r), !0).forEach(function(n) {
      FI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FI(e, t, r) {
  return t = zI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zI(e) {
  var t = WI(e, "string");
  return ai(t) == "symbol" ? t : t + "";
}
function WI(e, t) {
  if (ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vn = {
  widthCache: {},
  cacheCount: 0
}, UI = 2e3, HI = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, u0 = "recharts_measurement_span";
function VI(e) {
  var t = op({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var qa = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Er.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = VI(r), a = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (vn.widthCache[a])
    return vn.widthCache[a];
  try {
    var i = document.getElementById(u0);
    i || (i = document.createElement("span"), i.setAttribute("id", u0), i.setAttribute("aria-hidden", "true"), document.body.appendChild(i));
    var o = op(op({}, HI), n);
    Object.assign(i.style, o), i.textContent = "".concat(t);
    var s = i.getBoundingClientRect(), u = {
      width: s.width,
      height: s.height
    };
    return vn.widthCache[a] = u, ++vn.cacheCount > UI && (vn.cacheCount = 0, vn.widthCache = {}), u;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, KI = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function ii(e) {
  "@babel/helpers - typeof";
  return ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ii(e);
}
function No(e, t) {
  return ZI(e) || XI(e, t) || YI(e, t) || GI();
}
function GI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YI(e, t) {
  if (e) {
    if (typeof e == "string") return c0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c0(e, t);
  }
}
function c0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function XI(e, t) {
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
function ZI(e) {
  if (Array.isArray(e)) return e;
}
function JI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function l0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eD(n.key), n);
  }
}
function QI(e, t, r) {
  return t && l0(e.prototype, t), r && l0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eD(e) {
  var t = tD(e, "string");
  return ii(t) == "symbol" ? t : t + "";
}
function tD(e, t) {
  if (ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var f0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, d0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, rD = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, nD = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, r_ = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, aD = Object.keys(r_), wn = "NaN";
function iD(e, t) {
  return e * r_[t];
}
var so = /* @__PURE__ */ (function() {
  function e(t, r) {
    JI(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !rD.test(r) && (this.num = NaN, this.unit = ""), aD.includes(r) && (this.num = iD(t, r), this.unit = "px");
  }
  return QI(e, [{
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
      var n, a = (n = nD.exec(r)) !== null && n !== void 0 ? n : [], i = No(a, 3), o = i[1], s = i[2];
      return new e(parseFloat(o), s ?? "");
    }
  }]);
})();
function n_(e) {
  if (e.includes(wn))
    return wn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = f0.exec(t)) !== null && r !== void 0 ? r : [], a = No(n, 4), i = a[1], o = a[2], s = a[3], u = so.parse(i ?? ""), c = so.parse(s ?? ""), l = o === "*" ? u.multiply(c) : u.divide(c);
    if (l.isNaN())
      return wn;
    t = t.replace(f0, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var f, d = (f = d0.exec(t)) !== null && f !== void 0 ? f : [], p = No(d, 4), y = p[1], h = p[2], v = p[3], b = so.parse(y ?? ""), g = so.parse(v ?? ""), x = h === "+" ? b.add(g) : b.subtract(g);
    if (x.isNaN())
      return wn;
    t = t.replace(d0, x.toString());
  }
  return t;
}
var p0 = /\(([^()]*)\)/;
function oD(e) {
  for (var t = e; t.includes("("); ) {
    var r = p0.exec(t), n = No(r, 2), a = n[1];
    t = t.replace(p0, n_(a));
  }
  return t;
}
function sD(e) {
  var t = e.replace(/\s+/g, "");
  return t = oD(t), t = n_(t), t;
}
function uD(e) {
  try {
    return sD(e);
  } catch {
    return wn;
  }
}
function Df(e) {
  var t = uD(e.slice(5, -1));
  return t === wn ? "" : t;
}
var cD = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], lD = ["dx", "dy", "angle", "className", "breakAll"];
function sp() {
  return sp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sp.apply(this, arguments);
}
function h0(e, t) {
  if (e == null) return {};
  var r = fD(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function fD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function v0(e, t) {
  return vD(e) || hD(e, t) || pD(e, t) || dD();
}
function dD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pD(e, t) {
  if (e) {
    if (typeof e == "string") return y0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y0(e, t);
  }
}
function y0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hD(e, t) {
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
function vD(e) {
  if (Array.isArray(e)) return e;
}
var a_ = /[ \f\n\r\t\v\u2028\u2029]+/, i_ = function(t) {
  var r = t.children, n = t.breakAll, a = t.style;
  try {
    var i = [];
    le(r) || (n ? i = r.toString().split("") : i = r.toString().split(a_));
    var o = i.map(function(u) {
      return {
        word: u,
        width: qa(u, a).width
      };
    }), s = n ? 0 : qa(" ", a).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: s
    };
  } catch {
    return null;
  }
}, yD = function(t, r, n, a, i) {
  var o = t.maxLines, s = t.children, u = t.style, c = t.breakAll, l = G(o), f = s, d = function() {
    var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return I.reduce(function(N, R) {
      var L = R.word, z = R.width, k = N[N.length - 1];
      if (k && (a == null || i || k.width + z + n < Number(a)))
        k.words.push(L), k.width += z + n;
      else {
        var B = {
          words: [L],
          width: z
        };
        N.push(B);
      }
      return N;
    }, []);
  }, p = d(r), y = function(I) {
    return I.reduce(function(N, R) {
      return N.width > R.width ? N : R;
    });
  };
  if (!l)
    return p;
  for (var h = "…", v = function(I) {
    var N = f.slice(0, I), R = i_({
      breakAll: c,
      style: u,
      children: N + h
    }).wordsWithComputedWidth, L = d(R), z = L.length > o || y(L).width > Number(a);
    return [z, L];
  }, b = 0, g = f.length - 1, x = 0, O; b <= g && x <= f.length - 1; ) {
    var m = Math.floor((b + g) / 2), w = m - 1, _ = v(w), A = v0(_, 2), P = A[0], D = A[1], T = v(m), $ = v0(T, 1), M = $[0];
    if (!P && !M && (b = m + 1), P && M && (g = m - 1), !P && M) {
      O = D;
      break;
    }
    x++;
  }
  return O || p;
}, m0 = function(t) {
  var r = le(t) ? [] : t.toString().split(a_);
  return [{
    words: r
  }];
}, mD = function(t) {
  var r = t.width, n = t.scaleToFit, a = t.children, i = t.style, o = t.breakAll, s = t.maxLines;
  if ((r || n) && !Er.isSsr) {
    var u, c, l = i_({
      breakAll: o,
      children: a,
      style: i
    });
    if (l) {
      var f = l.wordsWithComputedWidth, d = l.spaceWidth;
      u = f, c = d;
    } else
      return m0(a);
    return yD({
      breakAll: o,
      children: a,
      maxLines: s,
      style: i
    }, u, c, r, n);
  }
  return m0(a);
}, g0 = "#808080", Ar = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.lineHeight, s = o === void 0 ? "1em" : o, u = t.capHeight, c = u === void 0 ? "0.71em" : u, l = t.scaleToFit, f = l === void 0 ? !1 : l, d = t.textAnchor, p = d === void 0 ? "start" : d, y = t.verticalAnchor, h = y === void 0 ? "end" : y, v = t.fill, b = v === void 0 ? g0 : v, g = h0(t, cD), x = He(function() {
    return mD({
      breakAll: g.breakAll,
      children: g.children,
      maxLines: g.maxLines,
      scaleToFit: f,
      style: g.style,
      width: g.width
    });
  }, [g.breakAll, g.children, g.maxLines, f, g.style, g.width]), O = g.dx, m = g.dy, w = g.angle, _ = g.className, A = g.breakAll, P = h0(g, lD);
  if (!Ge(n) || !Ge(i))
    return null;
  var D = n + (G(O) ? O : 0), T = i + (G(m) ? m : 0), $;
  switch (h) {
    case "start":
      $ = Df("calc(".concat(c, ")"));
      break;
    case "middle":
      $ = Df("calc(".concat((x.length - 1) / 2, " * -").concat(s, " + (").concat(c, " / 2))"));
      break;
    default:
      $ = Df("calc(".concat(x.length - 1, " * -").concat(s, ")"));
      break;
  }
  var M = [];
  if (f) {
    var j = x[0].width, I = g.width;
    M.push("scale(".concat((G(I) ? I / j : 1) / j, ")"));
  }
  return w && M.push("rotate(".concat(w, ", ").concat(D, ", ").concat(T, ")")), M.length && (P.transform = M.join(" ")), /* @__PURE__ */ C.createElement("text", sp({}, ie(P, !0), {
    x: D,
    y: T,
    className: de("recharts-text", _),
    textAnchor: p,
    fill: b.includes("url") ? g0 : b
  }), x.map(function(N, R) {
    var L = N.words.join(A ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ C.createElement("tspan", {
        x: D,
        dy: R === 0 ? $ : s,
        key: "".concat(L, "-").concat(R)
      }, L)
    );
  }));
};
function Sr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function gD(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ev(e) {
  let t, r, n;
  e.length !== 2 ? (t = Sr, r = (s, u) => Sr(e(s), u), n = (s, u) => e(s) - u) : (t = e === Sr || e === gD ? e : bD, r = e, n = e);
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
function bD() {
  return 0;
}
function o_(e) {
  return e === null ? NaN : +e;
}
function* xD(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const wD = ev(Sr), Wi = wD.right;
ev(o_).center;
class b0 extends Map {
  constructor(t, r = _D) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, a] of t) this.set(n, a);
  }
  get(t) {
    return super.get(x0(this, t));
  }
  has(t) {
    return super.has(x0(this, t));
  }
  set(t, r) {
    return super.set(OD(this, t), r);
  }
  delete(t) {
    return super.delete(SD(this, t));
  }
}
function x0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function OD({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function SD({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function _D(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function AD(e = Sr) {
  if (e === Sr) return s_;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function s_(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const PD = Math.sqrt(50), TD = Math.sqrt(10), ED = Math.sqrt(2);
function ko(e, t, r) {
  const n = (t - e) / Math.max(0, r), a = Math.floor(Math.log10(n)), i = n / Math.pow(10, a), o = i >= PD ? 10 : i >= TD ? 5 : i >= ED ? 2 : 1;
  let s, u, c;
  return a < 0 ? (c = Math.pow(10, -a) / o, s = Math.round(e * c), u = Math.round(t * c), s / c < e && ++s, u / c > t && --u, c = -c) : (c = Math.pow(10, a) * o, s = Math.round(e / c), u = Math.round(t / c), s * c < e && ++s, u * c > t && --u), u < s && 0.5 <= r && r < 2 ? ko(e, t, r * 2) : [s, u, c];
}
function up(e, t, r) {
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
function cp(e, t, r) {
  return t = +t, e = +e, r = +r, ko(e, t, r)[2];
}
function lp(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, a = n ? cp(t, e, r) : cp(e, t, r);
  return (n ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function w0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function O0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function u_(e, t, r = 0, n = 1 / 0, a) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (a = a === void 0 ? s_ : AD(a); n > r; ) {
    if (n - r > 600) {
      const u = n - r + 1, c = t - r + 1, l = Math.log(u), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (u - f) / u) * (c - u / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / u + d)), y = Math.min(n, Math.floor(t + (u - c) * f / u + d));
      u_(e, t, p, y, a);
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
function CD(e, t, r) {
  if (e = Float64Array.from(xD(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return O0(e);
    if (t >= 1) return w0(e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = w0(u_(e, i).subarray(0, i + 1)), s = O0(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function jD(e, t, r = o_) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, a = (n - 1) * t, i = Math.floor(a), o = +r(e[i], i, e), s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function MD(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a); ++n < a; )
    i[n] = e + n * r;
  return i;
}
function $t(e, t) {
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
const fp = /* @__PURE__ */ Symbol("implicit");
function tv() {
  var e = new b0(), t = [], r = [], n = fp;
  function a(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (n !== fp) return n;
      e.set(i, o = t.push(i) - 1);
    }
    return r[o % r.length];
  }
  return a.domain = function(i) {
    if (!arguments.length) return t.slice();
    t = [], e = new b0();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return a;
  }, a.range = function(i) {
    return arguments.length ? (r = Array.from(i), a) : r.slice();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return tv(t, r).unknown(n);
  }, $t.apply(a, arguments), a;
}
function oi() {
  var e = tv().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, i, o, s = !1, u = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = a < n, y = p ? a : n, h = p ? n : a;
    i = (h - y) / Math.max(1, d - u + c * 2), s && (i = Math.floor(i)), y += (h - y - i * (d - u)) * l, o = i * (1 - u), s && (y = Math.round(y), o = Math.round(o));
    var v = MD(d).map(function(b) {
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
    return oi(t(), [n, a]).round(s).paddingInner(u).paddingOuter(c).align(l);
  }, $t.apply(f(), arguments);
}
function c_(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return c_(t());
  }, e;
}
function Ba() {
  return c_(oi.apply(null, arguments).paddingInner(1));
}
function rv(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function l_(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ui() {
}
var si = 0.7, Ro = 1 / si, Tn = "\\s*([+-]?\\d+)\\s*", ui = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $D = /^#([0-9a-f]{3,8})$/, ID = new RegExp(`^rgb\\(${Tn},${Tn},${Tn}\\)$`), DD = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), ND = new RegExp(`^rgba\\(${Tn},${Tn},${Tn},${ui}\\)$`), kD = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${ui}\\)$`), RD = new RegExp(`^hsl\\(${ui},${Yt},${Yt}\\)$`), LD = new RegExp(`^hsla\\(${ui},${Yt},${Yt},${ui}\\)$`), S0 = {
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
rv(Ui, ci, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _0,
  // Deprecated! Use color.formatHex.
  formatHex: _0,
  formatHex8: qD,
  formatHsl: BD,
  formatRgb: A0,
  toString: A0
});
function _0() {
  return this.rgb().formatHex();
}
function qD() {
  return this.rgb().formatHex8();
}
function BD() {
  return f_(this).formatHsl();
}
function A0() {
  return this.rgb().formatRgb();
}
function ci(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = $D.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? P0(t) : r === 3 ? new ft(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? uo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? uo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ID.exec(e)) ? new ft(t[1], t[2], t[3], 1) : (t = DD.exec(e)) ? new ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ND.exec(e)) ? uo(t[1], t[2], t[3], t[4]) : (t = kD.exec(e)) ? uo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = RD.exec(e)) ? C0(t[1], t[2] / 100, t[3] / 100, 1) : (t = LD.exec(e)) ? C0(t[1], t[2] / 100, t[3] / 100, t[4]) : S0.hasOwnProperty(e) ? P0(S0[e]) : e === "transparent" ? new ft(NaN, NaN, NaN, 0) : null;
}
function P0(e) {
  return new ft(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function uo(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new ft(e, t, r, n);
}
function FD(e) {
  return e instanceof Ui || (e = ci(e)), e ? (e = e.rgb(), new ft(e.r, e.g, e.b, e.opacity)) : new ft();
}
function dp(e, t, r, n) {
  return arguments.length === 1 ? FD(e) : new ft(e, t, r, n ?? 1);
}
function ft(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
rv(ft, dp, l_(Ui, {
  brighter(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? si : Math.pow(si, e), new ft(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ft(Xr(this.r), Xr(this.g), Xr(this.b), Lo(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: T0,
  // Deprecated! Use color.formatHex.
  formatHex: T0,
  formatHex8: zD,
  formatRgb: E0,
  toString: E0
}));
function T0() {
  return `#${Wr(this.r)}${Wr(this.g)}${Wr(this.b)}`;
}
function zD() {
  return `#${Wr(this.r)}${Wr(this.g)}${Wr(this.b)}${Wr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function E0() {
  const e = Lo(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xr(this.r)}, ${Xr(this.g)}, ${Xr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Lo(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wr(e) {
  return e = Xr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function C0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new kt(e, t, r, n);
}
function f_(e) {
  if (e instanceof kt) return new kt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ui || (e = ci(e)), !e) return new kt();
  if (e instanceof kt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, a = Math.min(t, r, n), i = Math.max(t, r, n), o = NaN, s = i - a, u = (i + a) / 2;
  return s ? (t === i ? o = (r - n) / s + (r < n) * 6 : r === i ? o = (n - t) / s + 2 : o = (t - r) / s + 4, s /= u < 0.5 ? i + a : 2 - i - a, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new kt(o, s, u, e.opacity);
}
function WD(e, t, r, n) {
  return arguments.length === 1 ? f_(e) : new kt(e, t, r, n ?? 1);
}
function kt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
rv(kt, WD, l_(Ui, {
  brighter(e) {
    return e = e == null ? Ro : Math.pow(Ro, e), new kt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? si : Math.pow(si, e), new kt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, a = 2 * r - n;
    return new ft(
      Nf(e >= 240 ? e - 240 : e + 120, a, n),
      Nf(e, a, n),
      Nf(e < 120 ? e + 240 : e - 120, a, n),
      this.opacity
    );
  },
  clamp() {
    return new kt(j0(this.h), co(this.s), co(this.l), Lo(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Lo(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${j0(this.h)}, ${co(this.s) * 100}%, ${co(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function j0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function co(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Nf(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const nv = (e) => () => e;
function UD(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function HD(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function VD(e) {
  return (e = +e) == 1 ? d_ : function(t, r) {
    return r - t ? HD(t, r, e) : nv(isNaN(t) ? r : t);
  };
}
function d_(e, t) {
  var r = t - e;
  return r ? UD(e, r) : nv(isNaN(e) ? t : e);
}
const M0 = (function e(t) {
  var r = VD(t);
  function n(a, i) {
    var o = r((a = dp(a)).r, (i = dp(i)).r), s = r(a.g, i.g), u = r(a.b, i.b), c = d_(a.opacity, i.opacity);
    return function(l) {
      return a.r = o(l), a.g = s(l), a.b = u(l), a.opacity = c(l), a + "";
    };
  }
  return n.gamma = e, n;
})(1);
function KD(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), a;
  return function(i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function GD(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function YD(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, a = new Array(n), i = new Array(r), o;
  for (o = 0; o < n; ++o) a[o] = ua(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function(s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function XD(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function qo(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function ZD(e, t) {
  var r = {}, n = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? r[a] = ua(e[a], t[a]) : n[a] = t[a];
  return function(i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var pp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, kf = new RegExp(pp.source, "g");
function JD(e) {
  return function() {
    return e;
  };
}
function QD(e) {
  return function(t) {
    return e(t) + "";
  };
}
function eN(e, t) {
  var r = pp.lastIndex = kf.lastIndex = 0, n, a, i, o = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (n = pp.exec(e)) && (a = kf.exec(t)); )
    (i = a.index) > r && (i = t.slice(r, i), s[o] ? s[o] += i : s[++o] = i), (n = n[0]) === (a = a[0]) ? s[o] ? s[o] += a : s[++o] = a : (s[++o] = null, u.push({ i: o, x: qo(n, a) })), r = kf.lastIndex;
  return r < t.length && (i = t.slice(r), s[o] ? s[o] += i : s[++o] = i), s.length < 2 ? u[0] ? QD(u[0].x) : JD(t) : (t = u.length, function(c) {
    for (var l = 0, f; l < t; ++l) s[(f = u[l]).i] = f.x(c);
    return s.join("");
  });
}
function ua(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? nv(t) : (r === "number" ? qo : r === "string" ? (n = ci(t)) ? (t = n, M0) : eN : t instanceof ci ? M0 : t instanceof Date ? XD : GD(t) ? KD : Array.isArray(t) ? YD : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ZD : qo)(e, t);
}
function av(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function tN(e, t) {
  t === void 0 && (t = e, e = ua);
  for (var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n); r < n; ) i[r] = e(a, a = t[++r]);
  return function(o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return i[s](o - s);
  };
}
function rN(e) {
  return function() {
    return e;
  };
}
function Bo(e) {
  return +e;
}
var $0 = [0, 1];
function ut(e) {
  return e;
}
function hp(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : rN(isNaN(t) ? NaN : 0.5);
}
function nN(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function aN(e, t, r) {
  var n = e[0], a = e[1], i = t[0], o = t[1];
  return a < n ? (n = hp(a, n), i = r(o, i)) : (n = hp(n, a), i = r(i, o)), function(s) {
    return i(n(s));
  };
}
function iN(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, a = new Array(n), i = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    a[o] = hp(e[o], e[o + 1]), i[o] = r(t[o], t[o + 1]);
  return function(s) {
    var u = Wi(e, s, 1, n) - 1;
    return i[u](a[u](s));
  };
}
function Hi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ks() {
  var e = $0, t = $0, r = ua, n, a, i, o = ut, s, u, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== ut && (o = nN(e[0], e[d - 1])), s = d > 2 ? iN : aN, u = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? i : (u || (u = s(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(a((c || (c = s(t, e.map(n), qo)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Bo), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = av, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : ut, l()) : o !== ut;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (i = d, f) : i;
  }, function(d, p) {
    return n = d, a = p, l();
  };
}
function iv() {
  return Ks()(ut, ut);
}
function oN(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Fo(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Nn(e) {
  return e = Fo(Math.abs(e)), e ? e[1] : NaN;
}
function sN(e, t) {
  return function(r, n) {
    for (var a = r.length, i = [], o = 0, s = e[0], u = 0; a > 0 && s > 0 && (u + s + 1 > n && (s = Math.max(1, n - u)), i.push(r.substring(a -= s, a + s)), !((u += s + 1) > n)); )
      s = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function uN(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var cN = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function li(e) {
  if (!(t = cN.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ov({
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
li.prototype = ov.prototype;
function ov(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ov.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function lN(e) {
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
var p_;
function fN(e, t) {
  var r = Fo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1], i = a - (p_ = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1, o = n.length;
  return i === o ? n : i > o ? n + new Array(i - o + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + Fo(e, Math.max(0, t + i - 1))[0];
}
function I0(e, t) {
  var r = Fo(e, t);
  if (!r) return e + "";
  var n = r[0], a = r[1];
  return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0");
}
const D0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: oN,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => I0(e * 100, t),
  r: I0,
  s: fN,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function N0(e) {
  return e;
}
var k0 = Array.prototype.map, R0 = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function dN(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? N0 : sN(k0.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", a = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? N0 : uN(k0.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = li(f);
    var d = f.fill, p = f.align, y = f.sign, h = f.symbol, v = f.zero, b = f.width, g = f.comma, x = f.precision, O = f.trim, m = f.type;
    m === "n" ? (g = !0, m = "g") : D0[m] || (x === void 0 && (x = 12), O = !0, m = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var w = h === "$" ? r : h === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", _ = h === "$" ? n : /[%p]/.test(m) ? o : "", A = D0[m], P = /[defgprs%]/.test(m);
    x = x === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function D(T) {
      var $ = w, M = _, j, I, N;
      if (m === "c")
        M = A(T) + M, T = "";
      else {
        T = +T;
        var R = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? u : A(Math.abs(T), x), O && (T = lN(T)), R && +T == 0 && y !== "+" && (R = !1), $ = (R ? y === "(" ? y : s : y === "-" || y === "(" ? "" : y) + $, M = (m === "s" ? R0[8 + p_ / 3] : "") + M + (R && y === "(" ? ")" : ""), P) {
          for (j = -1, I = T.length; ++j < I; )
            if (N = T.charCodeAt(j), 48 > N || N > 57) {
              M = (N === 46 ? a + T.slice(j + 1) : T.slice(j)) + M, T = T.slice(0, j);
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
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function l(f, d) {
    var p = c((f = li(f), f.type = "f", f)), y = Math.max(-8, Math.min(8, Math.floor(Nn(d) / 3))) * 3, h = Math.pow(10, -y), v = R0[8 + y / 3];
    return function(b) {
      return p(h * b) + v;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var lo, sv, h_;
pN({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function pN(e) {
  return lo = dN(e), sv = lo.format, h_ = lo.formatPrefix, lo;
}
function hN(e) {
  return Math.max(0, -Nn(Math.abs(e)));
}
function vN(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Nn(t) / 3))) * 3 - Nn(Math.abs(e)));
}
function yN(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Nn(t) - Nn(e)) + 1;
}
function v_(e, t, r, n) {
  var a = lp(e, t, r), i;
  switch (n = li(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(i = vN(a, o)) && (n.precision = i), h_(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(i = yN(a, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = i - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(i = hN(a)) && (n.precision = i - (n.type === "%") * 2);
      break;
    }
  }
  return sv(n);
}
function Cr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return up(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var a = t();
    return v_(a[0], a[a.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), a = 0, i = n.length - 1, o = n[a], s = n[i], u, c, l = 10;
    for (s < o && (c = o, o = s, s = c, c = a, a = i, i = c); l-- > 0; ) {
      if (c = cp(o, s, r), c === u)
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
function zo() {
  var e = iv();
  return e.copy = function() {
    return Hi(e, zo());
  }, $t.apply(e, arguments), Cr(e);
}
function y_(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Bo), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return y_(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Bo) : [0, 1], Cr(r);
}
function m_(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], i = e[n], o;
  return i < a && (o = r, r = n, n = o, o = a, a = i, i = o), e[r] = t.floor(a), e[n] = t.ceil(i), e;
}
function L0(e) {
  return Math.log(e);
}
function q0(e) {
  return Math.exp(e);
}
function mN(e) {
  return -Math.log(-e);
}
function gN(e) {
  return -Math.exp(-e);
}
function bN(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function xN(e) {
  return e === 10 ? bN : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function wN(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function B0(e) {
  return (t, r) => -e(-t, r);
}
function uv(e) {
  const t = e(L0, q0), r = t.domain;
  let n = 10, a, i;
  function o() {
    return a = wN(n), i = xN(n), r()[0] < 0 ? (a = B0(a), i = B0(i), e(mN, gN)) : e(L0, q0), t;
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
      b.length * 2 < v && (b = up(c, l, v));
    } else
      b = up(d, p, Math.min(p - d, v)).map(i);
    return f ? b.reverse() : b;
  }, t.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = n === 10 ? "s" : ","), typeof u != "function" && (!(n % 1) && (u = li(u)).precision == null && (u.trim = !0), u = sv(u)), s === 1 / 0) return u;
    const c = Math.max(1, n * s / t.ticks().length);
    return (l) => {
      let f = l / i(Math.round(a(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? u(l) : "";
    };
  }, t.nice = () => r(m_(r(), {
    floor: (s) => i(Math.floor(a(s))),
    ceil: (s) => i(Math.ceil(a(s)))
  })), t;
}
function g_() {
  const e = uv(Ks()).domain([1, 10]);
  return e.copy = () => Hi(e, g_()).base(e.base()), $t.apply(e, arguments), e;
}
function F0(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function z0(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function cv(e) {
  var t = 1, r = e(F0(t), z0(t));
  return r.constant = function(n) {
    return arguments.length ? e(F0(t = +n), z0(t)) : t;
  }, Cr(r);
}
function b_() {
  var e = cv(Ks());
  return e.copy = function() {
    return Hi(e, b_()).constant(e.constant());
  }, $t.apply(e, arguments);
}
function W0(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function ON(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function SN(e) {
  return e < 0 ? -e * e : e * e;
}
function lv(e) {
  var t = e(ut, ut), r = 1;
  function n() {
    return r === 1 ? e(ut, ut) : r === 0.5 ? e(ON, SN) : e(W0(r), W0(1 / r));
  }
  return t.exponent = function(a) {
    return arguments.length ? (r = +a, n()) : r;
  }, Cr(t);
}
function fv() {
  var e = lv(Ks());
  return e.copy = function() {
    return Hi(e, fv()).exponent(e.exponent());
  }, $t.apply(e, arguments), e;
}
function _N() {
  return fv.apply(null, arguments).exponent(0.5);
}
function U0(e) {
  return Math.sign(e) * e * e;
}
function AN(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function x_() {
  var e = iv(), t = [0, 1], r = !1, n;
  function a(i) {
    var o = AN(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return a.invert = function(i) {
    return e.invert(U0(i));
  }, a.domain = function(i) {
    return arguments.length ? (e.domain(i), a) : e.domain();
  }, a.range = function(i) {
    return arguments.length ? (e.range((t = Array.from(i, Bo)).map(U0)), a) : t.slice();
  }, a.rangeRound = function(i) {
    return a.range(i).round(!0);
  }, a.round = function(i) {
    return arguments.length ? (r = !!i, a) : r;
  }, a.clamp = function(i) {
    return arguments.length ? (e.clamp(i), a) : e.clamp();
  }, a.unknown = function(i) {
    return arguments.length ? (n = i, a) : n;
  }, a.copy = function() {
    return x_(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, $t.apply(a, arguments), Cr(a);
}
function w_() {
  var e = [], t = [], r = [], n;
  function a() {
    var o = 0, s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = jD(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN(o = +o) ? n : t[Wi(r, o)];
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
    return w_().domain(e).range(t).unknown(n);
  }, $t.apply(i, arguments);
}
function O_() {
  var e = 0, t = 1, r = 1, n = [0.5], a = [0, 1], i;
  function o(u) {
    return u != null && u <= u ? a[Wi(n, u, 0, r)] : i;
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
    return O_().domain([e, t]).range(a).unknown(i);
  }, $t.apply(Cr(o), arguments);
}
function S_() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function a(i) {
    return i != null && i <= i ? t[Wi(e, i, 0, n)] : r;
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
    return S_().domain(e).range(t).unknown(r);
  }, $t.apply(a, arguments);
}
const Rf = /* @__PURE__ */ new Date(), Lf = /* @__PURE__ */ new Date();
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
  }), r && (a.count = (i, o) => (Rf.setTime(+i), Lf.setTime(+o), e(Rf), e(Lf), Math.floor(r(Rf, Lf))), a.every = (i) => (i = Math.floor(i), !isFinite(i) || !(i > 0) ? null : i > 1 ? a.filter(n ? (o) => n(o) % i === 0 : (o) => a.count(0, o) % i === 0) : a)), a;
}
const Wo = Ye(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Wo.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ye((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Wo);
Wo.range;
const nr = 1e3, Et = nr * 60, ar = Et * 60, ur = ar * 24, dv = ur * 7, H0 = ur * 30, qf = ur * 365, Ur = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * nr);
}, (e, t) => (t - e) / nr, (e) => e.getUTCSeconds());
Ur.range;
const pv = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr);
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getMinutes());
pv.range;
const hv = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getUTCMinutes());
hv.range;
const vv = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * nr - e.getMinutes() * Et);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getHours());
vv.range;
const yv = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ar);
}, (e, t) => (t - e) / ar, (e) => e.getUTCHours());
yv.range;
const Vi = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Et) / ur,
  (e) => e.getDate() - 1
);
Vi.range;
const Gs = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => e.getUTCDate() - 1);
Gs.range;
const __ = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / ur, (e) => Math.floor(e / ur));
__.range;
function cn(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Et) / dv);
}
const Ys = cn(0), Uo = cn(1), PN = cn(2), TN = cn(3), kn = cn(4), EN = cn(5), CN = cn(6);
Ys.range;
Uo.range;
PN.range;
TN.range;
kn.range;
EN.range;
CN.range;
function ln(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / dv);
}
const Xs = ln(0), Ho = ln(1), jN = ln(2), MN = ln(3), Rn = ln(4), $N = ln(5), IN = ln(6);
Xs.range;
Ho.range;
jN.range;
MN.range;
Rn.range;
$N.range;
IN.range;
const mv = Ye((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
mv.range;
const gv = Ye((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
gv.range;
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
function A_(e, t, r, n, a, i) {
  const o = [
    [Ur, 1, nr],
    [Ur, 5, 5 * nr],
    [Ur, 15, 15 * nr],
    [Ur, 30, 30 * nr],
    [i, 1, Et],
    [i, 5, 5 * Et],
    [i, 15, 15 * Et],
    [i, 30, 30 * Et],
    [a, 1, ar],
    [a, 3, 3 * ar],
    [a, 6, 6 * ar],
    [a, 12, 12 * ar],
    [n, 1, ur],
    [n, 2, 2 * ur],
    [r, 1, dv],
    [t, 1, H0],
    [t, 3, 3 * H0],
    [e, 1, qf]
  ];
  function s(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : u(c, l, f), y = p ? p.range(c, +l + 1) : [];
    return d ? y.reverse() : y;
  }
  function u(c, l, f) {
    const d = Math.abs(l - c) / f, p = ev(([, , v]) => v).right(o, d);
    if (p === o.length) return e.every(lp(c / qf, l / qf, f));
    if (p === 0) return Wo.every(Math.max(lp(c, l, f), 1));
    const [y, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return y.every(h);
  }
  return [s, u];
}
const [DN, NN] = A_(lr, gv, Xs, __, yv, hv), [kN, RN] = A_(cr, mv, Ys, Vi, vv, pv);
function Bf(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ff(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Sa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function LN(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, i = e.days, o = e.shortDays, s = e.months, u = e.shortMonths, c = _a(a), l = Aa(a), f = _a(i), d = Aa(i), p = _a(o), y = Aa(o), h = _a(s), v = Aa(s), b = _a(u), g = Aa(u), x = {
    a: R,
    A: L,
    b: z,
    B: k,
    c: null,
    d: Z0,
    e: Z0,
    f: sk,
    g: mk,
    G: bk,
    H: ak,
    I: ik,
    j: ok,
    L: P_,
    m: uk,
    M: ck,
    p: B,
    q,
    Q: ex,
    s: tx,
    S: lk,
    u: fk,
    U: dk,
    V: pk,
    w: hk,
    W: vk,
    x: null,
    X: null,
    y: yk,
    Y: gk,
    Z: xk,
    "%": Q0
  }, O = {
    a: H,
    A: X,
    b: te,
    B: ne,
    c: null,
    d: J0,
    e: J0,
    f: _k,
    g: Dk,
    G: kk,
    H: wk,
    I: Ok,
    j: Sk,
    L: E_,
    m: Ak,
    M: Pk,
    p: ee,
    q: Q,
    Q: ex,
    s: tx,
    S: Tk,
    u: Ek,
    U: Ck,
    V: jk,
    w: Mk,
    W: $k,
    x: null,
    X: null,
    y: Ik,
    Y: Nk,
    Z: Rk,
    "%": Q0
  }, m = {
    a: D,
    A: T,
    b: $,
    B: M,
    c: j,
    d: Y0,
    e: Y0,
    f: ek,
    g: G0,
    G: K0,
    H: X0,
    I: X0,
    j: XN,
    L: QN,
    m: YN,
    M: ZN,
    p: P,
    q: GN,
    Q: rk,
    s: nk,
    S: JN,
    u: WN,
    U: UN,
    V: HN,
    w: zN,
    W: VN,
    x: I,
    X: N,
    y: G0,
    Y: K0,
    Z: KN,
    "%": tk
  };
  x.x = w(r, x), x.X = w(n, x), x.c = w(t, x), O.x = w(r, O), O.X = w(n, O), O.c = w(t, O);
  function w(U, K) {
    return function(Z) {
      var E = [], Y = -1, F = 0, ae = U.length, ce, oe, Se;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++Y < ae; )
        U.charCodeAt(Y) === 37 && (E.push(U.slice(F, Y)), (oe = V0[ce = U.charAt(++Y)]) != null ? ce = U.charAt(++Y) : oe = ce === "e" ? " " : "0", (Se = K[ce]) && (ce = Se(Z, oe)), E.push(ce), F = Y + 1);
      return E.push(U.slice(F, Y)), E.join("");
    };
  }
  function _(U, K) {
    return function(Z) {
      var E = Sa(1900, void 0, 1), Y = A(E, U, Z += "", 0), F, ae;
      if (Y != Z.length) return null;
      if ("Q" in E) return new Date(E.Q);
      if ("s" in E) return new Date(E.s * 1e3 + ("L" in E ? E.L : 0));
      if (K && !("Z" in E) && (E.Z = 0), "p" in E && (E.H = E.H % 12 + E.p * 12), E.m === void 0 && (E.m = "q" in E ? E.q : 0), "V" in E) {
        if (E.V < 1 || E.V > 53) return null;
        "w" in E || (E.w = 1), "Z" in E ? (F = Ff(Sa(E.y, 0, 1)), ae = F.getUTCDay(), F = ae > 4 || ae === 0 ? Ho.ceil(F) : Ho(F), F = Gs.offset(F, (E.V - 1) * 7), E.y = F.getUTCFullYear(), E.m = F.getUTCMonth(), E.d = F.getUTCDate() + (E.w + 6) % 7) : (F = Bf(Sa(E.y, 0, 1)), ae = F.getDay(), F = ae > 4 || ae === 0 ? Uo.ceil(F) : Uo(F), F = Vi.offset(F, (E.V - 1) * 7), E.y = F.getFullYear(), E.m = F.getMonth(), E.d = F.getDate() + (E.w + 6) % 7);
      } else ("W" in E || "U" in E) && ("w" in E || (E.w = "u" in E ? E.u % 7 : "W" in E ? 1 : 0), ae = "Z" in E ? Ff(Sa(E.y, 0, 1)).getUTCDay() : Bf(Sa(E.y, 0, 1)).getDay(), E.m = 0, E.d = "W" in E ? (E.w + 6) % 7 + E.W * 7 - (ae + 5) % 7 : E.w + E.U * 7 - (ae + 6) % 7);
      return "Z" in E ? (E.H += E.Z / 100 | 0, E.M += E.Z % 100, Ff(E)) : Bf(E);
    };
  }
  function A(U, K, Z, E) {
    for (var Y = 0, F = K.length, ae = Z.length, ce, oe; Y < F; ) {
      if (E >= ae) return -1;
      if (ce = K.charCodeAt(Y++), ce === 37) {
        if (ce = K.charAt(Y++), oe = m[ce in V0 ? K.charAt(Y++) : ce], !oe || (E = oe(U, Z, E)) < 0) return -1;
      } else if (ce != Z.charCodeAt(E++))
        return -1;
    }
    return E;
  }
  function P(U, K, Z) {
    var E = c.exec(K.slice(Z));
    return E ? (U.p = l.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function D(U, K, Z) {
    var E = p.exec(K.slice(Z));
    return E ? (U.w = y.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function T(U, K, Z) {
    var E = f.exec(K.slice(Z));
    return E ? (U.w = d.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function $(U, K, Z) {
    var E = b.exec(K.slice(Z));
    return E ? (U.m = g.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function M(U, K, Z) {
    var E = h.exec(K.slice(Z));
    return E ? (U.m = v.get(E[0].toLowerCase()), Z + E[0].length) : -1;
  }
  function j(U, K, Z) {
    return A(U, t, K, Z);
  }
  function I(U, K, Z) {
    return A(U, r, K, Z);
  }
  function N(U, K, Z) {
    return A(U, n, K, Z);
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
  function k(U) {
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
      var K = w(U += "", x);
      return K.toString = function() {
        return U;
      }, K;
    },
    parse: function(U) {
      var K = _(U += "", !1);
      return K.toString = function() {
        return U;
      }, K;
    },
    utcFormat: function(U) {
      var K = w(U += "", O);
      return K.toString = function() {
        return U;
      }, K;
    },
    utcParse: function(U) {
      var K = _(U += "", !0);
      return K.toString = function() {
        return U;
      }, K;
    }
  };
}
var V0 = { "-": "", _: " ", 0: "0" }, Je = /^\s*\d+/, qN = /^%/, BN = /[\\^$*+?|[\]().{}]/g;
function ve(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function FN(e) {
  return e.replace(BN, "\\$&");
}
function _a(e) {
  return new RegExp("^(?:" + e.map(FN).join("|") + ")", "i");
}
function Aa(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function zN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function WN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function UN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function HN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function VN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function K0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function G0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function KN(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function GN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function YN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Y0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function XN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function X0(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function ZN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function JN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function QN(e, t, r) {
  var n = Je.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function ek(e, t, r) {
  var n = Je.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function tk(e, t, r) {
  var n = qN.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function rk(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function nk(e, t, r) {
  var n = Je.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Z0(e, t) {
  return ve(e.getDate(), t, 2);
}
function ak(e, t) {
  return ve(e.getHours(), t, 2);
}
function ik(e, t) {
  return ve(e.getHours() % 12 || 12, t, 2);
}
function ok(e, t) {
  return ve(1 + Vi.count(cr(e), e), t, 3);
}
function P_(e, t) {
  return ve(e.getMilliseconds(), t, 3);
}
function sk(e, t) {
  return P_(e, t) + "000";
}
function uk(e, t) {
  return ve(e.getMonth() + 1, t, 2);
}
function ck(e, t) {
  return ve(e.getMinutes(), t, 2);
}
function lk(e, t) {
  return ve(e.getSeconds(), t, 2);
}
function fk(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function dk(e, t) {
  return ve(Ys.count(cr(e) - 1, e), t, 2);
}
function T_(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? kn(e) : kn.ceil(e);
}
function pk(e, t) {
  return e = T_(e), ve(kn.count(cr(e), e) + (cr(e).getDay() === 4), t, 2);
}
function hk(e) {
  return e.getDay();
}
function vk(e, t) {
  return ve(Uo.count(cr(e) - 1, e), t, 2);
}
function yk(e, t) {
  return ve(e.getFullYear() % 100, t, 2);
}
function mk(e, t) {
  return e = T_(e), ve(e.getFullYear() % 100, t, 2);
}
function gk(e, t) {
  return ve(e.getFullYear() % 1e4, t, 4);
}
function bk(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? kn(e) : kn.ceil(e), ve(e.getFullYear() % 1e4, t, 4);
}
function xk(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ve(t / 60 | 0, "0", 2) + ve(t % 60, "0", 2);
}
function J0(e, t) {
  return ve(e.getUTCDate(), t, 2);
}
function wk(e, t) {
  return ve(e.getUTCHours(), t, 2);
}
function Ok(e, t) {
  return ve(e.getUTCHours() % 12 || 12, t, 2);
}
function Sk(e, t) {
  return ve(1 + Gs.count(lr(e), e), t, 3);
}
function E_(e, t) {
  return ve(e.getUTCMilliseconds(), t, 3);
}
function _k(e, t) {
  return E_(e, t) + "000";
}
function Ak(e, t) {
  return ve(e.getUTCMonth() + 1, t, 2);
}
function Pk(e, t) {
  return ve(e.getUTCMinutes(), t, 2);
}
function Tk(e, t) {
  return ve(e.getUTCSeconds(), t, 2);
}
function Ek(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Ck(e, t) {
  return ve(Xs.count(lr(e) - 1, e), t, 2);
}
function C_(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function jk(e, t) {
  return e = C_(e), ve(Rn.count(lr(e), e) + (lr(e).getUTCDay() === 4), t, 2);
}
function Mk(e) {
  return e.getUTCDay();
}
function $k(e, t) {
  return ve(Ho.count(lr(e) - 1, e), t, 2);
}
function Ik(e, t) {
  return ve(e.getUTCFullYear() % 100, t, 2);
}
function Dk(e, t) {
  return e = C_(e), ve(e.getUTCFullYear() % 100, t, 2);
}
function Nk(e, t) {
  return ve(e.getUTCFullYear() % 1e4, t, 4);
}
function kk(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Rn(e) : Rn.ceil(e), ve(e.getUTCFullYear() % 1e4, t, 4);
}
function Rk() {
  return "+0000";
}
function Q0() {
  return "%";
}
function ex(e) {
  return +e;
}
function tx(e) {
  return Math.floor(+e / 1e3);
}
var yn, j_, M_;
Lk({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Lk(e) {
  return yn = LN(e), j_ = yn.format, yn.parse, M_ = yn.utcFormat, yn.utcParse, yn;
}
function qk(e) {
  return new Date(e);
}
function Bk(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function bv(e, t, r, n, a, i, o, s, u, c) {
  var l = iv(), f = l.invert, d = l.domain, p = c(".%L"), y = c(":%S"), h = c("%I:%M"), v = c("%I %p"), b = c("%a %d"), g = c("%b %d"), x = c("%B"), O = c("%Y");
  function m(w) {
    return (u(w) < w ? p : s(w) < w ? y : o(w) < w ? h : i(w) < w ? v : n(w) < w ? a(w) < w ? b : g : r(w) < w ? x : O)(w);
  }
  return l.invert = function(w) {
    return new Date(f(w));
  }, l.domain = function(w) {
    return arguments.length ? d(Array.from(w, Bk)) : d().map(qk);
  }, l.ticks = function(w) {
    var _ = d();
    return e(_[0], _[_.length - 1], w ?? 10);
  }, l.tickFormat = function(w, _) {
    return _ == null ? m : c(_);
  }, l.nice = function(w) {
    var _ = d();
    return (!w || typeof w.range != "function") && (w = t(_[0], _[_.length - 1], w ?? 10)), w ? d(m_(_, w)) : l;
  }, l.copy = function() {
    return Hi(l, bv(e, t, r, n, a, i, o, s, u, c));
  }, l;
}
function Fk() {
  return $t.apply(bv(kN, RN, cr, mv, Ys, Vi, vv, pv, Ur, j_).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function zk() {
  return $t.apply(bv(DN, NN, lr, gv, Xs, Gs, yv, hv, Ur, M_).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Zs() {
  var e = 0, t = 1, r, n, a, i, o = ut, s = !1, u;
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
  return c.range = l(ua), c.rangeRound = l(av), c.unknown = function(f) {
    return arguments.length ? (u = f, c) : u;
  }, function(f) {
    return i = f, r = f(e), n = f(t), a = r === n ? 0 : 1 / (n - r), c;
  };
}
function jr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function $_() {
  var e = Cr(Zs()(ut));
  return e.copy = function() {
    return jr(e, $_());
  }, pr.apply(e, arguments);
}
function I_() {
  var e = uv(Zs()).domain([1, 10]);
  return e.copy = function() {
    return jr(e, I_()).base(e.base());
  }, pr.apply(e, arguments);
}
function D_() {
  var e = cv(Zs());
  return e.copy = function() {
    return jr(e, D_()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function xv() {
  var e = lv(Zs());
  return e.copy = function() {
    return jr(e, xv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function Wk() {
  return xv.apply(null, arguments).exponent(0.5);
}
function N_() {
  var e = [], t = ut;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Wi(e, n, 1) - 1) / (e.length - 1));
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
    return Array.from({ length: n + 1 }, (a, i) => CD(e, i / n));
  }, r.copy = function() {
    return N_(t).domain(e);
  }, pr.apply(r, arguments);
}
function Js() {
  var e = 0, t = 0.5, r = 1, n = 1, a, i, o, s, u, c = ut, l, f = !1, d;
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
      return arguments.length ? ([b, g, x] = v, c = tN(h, [b, g, x]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = y(ua), p.rangeRound = y(av), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, a = h(e), i = h(t), o = h(r), s = a === i ? 0 : 0.5 / (i - a), u = i === o ? 0 : 0.5 / (o - i), n = i < a ? -1 : 1, p;
  };
}
function k_() {
  var e = Cr(Js()(ut));
  return e.copy = function() {
    return jr(e, k_());
  }, pr.apply(e, arguments);
}
function R_() {
  var e = uv(Js()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return jr(e, R_()).base(e.base());
  }, pr.apply(e, arguments);
}
function L_() {
  var e = cv(Js());
  return e.copy = function() {
    return jr(e, L_()).constant(e.constant());
  }, pr.apply(e, arguments);
}
function wv() {
  var e = lv(Js());
  return e.copy = function() {
    return jr(e, wv()).exponent(e.exponent());
  }, pr.apply(e, arguments);
}
function Uk() {
  return wv.apply(null, arguments).exponent(0.5);
}
const rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: oi,
  scaleDiverging: k_,
  scaleDivergingLog: R_,
  scaleDivergingPow: wv,
  scaleDivergingSqrt: Uk,
  scaleDivergingSymlog: L_,
  scaleIdentity: y_,
  scaleImplicit: fp,
  scaleLinear: zo,
  scaleLog: g_,
  scaleOrdinal: tv,
  scalePoint: Ba,
  scalePow: fv,
  scaleQuantile: w_,
  scaleQuantize: O_,
  scaleRadial: x_,
  scaleSequential: $_,
  scaleSequentialLog: I_,
  scaleSequentialPow: xv,
  scaleSequentialQuantile: N_,
  scaleSequentialSqrt: Wk,
  scaleSequentialSymlog: D_,
  scaleSqrt: _N,
  scaleSymlog: b_,
  scaleThreshold: S_,
  scaleTime: Fk,
  scaleUtc: zk,
  tickFormat: v_
}, Symbol.toStringTag, { value: "Module" }));
var zf, nx;
function Qs() {
  if (nx) return zf;
  nx = 1;
  var e = aa();
  function t(r, n, a) {
    for (var i = -1, o = r.length; ++i < o; ) {
      var s = r[i], u = n(s);
      if (u != null && (c === void 0 ? u === u && !e(u) : a(u, c)))
        var c = u, l = s;
    }
    return l;
  }
  return zf = t, zf;
}
var Wf, ax;
function q_() {
  if (ax) return Wf;
  ax = 1;
  function e(t, r) {
    return t > r;
  }
  return Wf = e, Wf;
}
var Uf, ix;
function Hk() {
  if (ix) return Uf;
  ix = 1;
  var e = Qs(), t = q_(), r = sa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Uf = n, Uf;
}
var Vk = Hk();
const wr = /* @__PURE__ */ Ae(Vk);
var Hf, ox;
function B_() {
  if (ox) return Hf;
  ox = 1;
  function e(t, r) {
    return t < r;
  }
  return Hf = e, Hf;
}
var Vf, sx;
function Kk() {
  if (sx) return Vf;
  sx = 1;
  var e = Qs(), t = B_(), r = sa();
  function n(a) {
    return a && a.length ? e(a, r, t) : void 0;
  }
  return Vf = n, Vf;
}
var Gk = Kk();
const eu = /* @__PURE__ */ Ae(Gk);
var Kf, ux;
function Yk() {
  if (ux) return Kf;
  ux = 1;
  var e = zh(), t = Qt(), r = GS(), n = ht();
  function a(i, o) {
    var s = n(i) ? e : r;
    return s(i, t(o, 3));
  }
  return Kf = a, Kf;
}
var Gf, cx;
function Xk() {
  if (cx) return Gf;
  cx = 1;
  var e = VS(), t = Yk();
  function r(n, a) {
    return e(t(n, a), 1);
  }
  return Gf = r, Gf;
}
var Zk = Xk();
const Jk = /* @__PURE__ */ Ae(Zk);
var ca = 1e9, Qk = {
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
}, Sv, Ie = !0, jt = "[DecimalError] ", Zr = jt + "Invalid argument: ", Ov = jt + "Exponent out of range: ", la = Math.floor, qr = Math.pow, eR = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, bt, Ze = 1e7, $e = 7, F_ = 9007199254740991, Vo = la(F_ / $e), re = {};
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
  else if (e = new n(e), e.s < 1 || e.eq(bt)) throw Error(jt + "NaN");
  if (r.s < 1) throw Error(jt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(bt) ? new n(0) : (Ie = !1, t = sr(fi(r, i), fi(e, i), i), Ie = !0, Pe(t, a));
};
re.minus = re.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? U_(t, e) : z_(t, (e.s = -e.s, e));
};
re.modulo = re.mod = function(e) {
  var t, r = this, n = r.constructor, a = n.precision;
  if (e = new n(e), !e.s) throw Error(jt + "NaN");
  return r.s ? (Ie = !1, t = sr(r, e, 0, 1).times(e), Ie = !0, r.minus(t)) : Pe(new n(r), a);
};
re.naturalExponential = re.exp = function() {
  return W_(this);
};
re.naturalLogarithm = re.ln = function() {
  return fi(this);
};
re.negated = re.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
re.plus = re.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? z_(t, e) : U_(t, (e.s = -e.s, e));
};
re.precision = re.sd = function(e) {
  var t, r, n, a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Zr + e);
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
    throw Error(jt + "NaN");
  }
  for (e = Fe(s), Ie = !1, a = Math.sqrt(+s), a == 0 || a == 1 / 0 ? (t = Vt(s.d), (t.length + e) % 2 == 0 && (t += "0"), a = Math.sqrt(t), e = la((e + 1) / 2) - (e < 0 || e % 2), a == 1 / 0 ? t = "5e" + e : (t = a.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new u(t)) : n = new u(a.toString()), r = u.precision, a = o = r + 3; ; )
    if (i = n, n = i.plus(sr(s, i, o + 2)).times(0.5), Vt(i.d).slice(0, o) === (t = Vt(n.d)).slice(0, o)) {
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
  return e === void 0 ? r = rn(n, !0) : (Zt(e, 0, ca), t === void 0 ? t = a.rounding : Zt(t, 0, 8), n = Pe(new a(n), e + 1, t), r = rn(n, !0, e + 1)), r;
};
re.toFixed = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? rn(a) : (Zt(e, 0, ca), t === void 0 ? t = i.rounding : Zt(t, 0, 8), n = Pe(new i(a), e + Fe(a) + 1, t), r = rn(n.abs(), !1, e + Fe(n) + 1), a.isneg() && !a.isZero() ? "-" + r : r);
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
  if (!e.s) return new u(bt);
  if (s = new u(s), !s.s) {
    if (e.s < 1) throw Error(jt + "Infinity");
    return s;
  }
  if (s.eq(bt)) return s;
  if (n = u.precision, e.eq(bt)) return Pe(s, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, i = s.s, o) {
    if ((r = l < 0 ? -l : l) <= F_) {
      for (a = new u(bt), t = Math.ceil(n / $e + 4), Ie = !1; r % 2 && (a = a.times(s), fx(a.d, t)), r = la(r / 2), r !== 0; )
        s = s.times(s), fx(s.d, t);
      return Ie = !0, e.s < 0 ? new u(bt).div(a) : Pe(a, n);
    }
  } else if (i < 0) throw Error(jt + "NaN");
  return i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, s.s = 1, Ie = !1, a = e.times(fi(s, n + c)), Ie = !0, a = W_(a), a.s = i, a;
};
re.toPrecision = function(e, t) {
  var r, n, a = this, i = a.constructor;
  return e === void 0 ? (r = Fe(a), n = rn(a, r <= i.toExpNeg || r >= i.toExpPos)) : (Zt(e, 1, ca), t === void 0 ? t = i.rounding : Zt(t, 0, 8), a = Pe(new i(a), e, t), r = Fe(a), n = rn(a, e <= r || r <= i.toExpNeg, e)), n;
};
re.toSignificantDigits = re.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (Zt(e, 1, ca), t === void 0 ? t = n.rounding : Zt(t, 0, 8)), Pe(new n(r), e, t);
};
re.toString = re.valueOf = re.val = re.toJSON = re[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Fe(e), r = e.constructor;
  return rn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function z_(e, t) {
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
    throw Error(Zr + e);
}
function Vt(e) {
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
    var s, u, c, l, f, d, p, y, h, v, b, g, x, O, m, w, _, A, P = n.constructor, D = n.s == a.s ? 1 : -1, T = n.d, $ = a.d;
    if (!n.s) return new P(n);
    if (!a.s) throw Error(jt + "Division by zero");
    for (u = n.e - a.e, _ = $.length, m = T.length, p = new P(D), y = p.d = [], c = 0; $[c] == (T[c] || 0); ) ++c;
    if ($[c] > (T[c] || 0) && --u, i == null ? g = i = P.precision : o ? g = i + (Fe(n) - Fe(a)) + 1 : g = i, g < 0) return new P(0);
    if (g = g / $e + 2 | 0, c = 0, _ == 1)
      for (l = 0, $ = $[0], g++; (c < m || l) && g--; c++)
        x = l * Ze + (T[c] || 0), y[c] = x / $ | 0, l = x % $ | 0;
    else {
      for (l = Ze / ($[0] + 1) | 0, l > 1 && ($ = e($, l), T = e(T, l), _ = $.length, m = T.length), O = _, h = T.slice(0, _), v = h.length; v < _; ) h[v++] = 0;
      A = $.slice(), A.unshift(0), w = $[0], $[1] >= Ze / 2 && ++w;
      do
        l = 0, s = t($, h, _, v), s < 0 ? (b = h[0], _ != v && (b = b * Ze + (h[1] || 0)), l = b / w | 0, l > 1 ? (l >= Ze && (l = Ze - 1), f = e($, l), d = f.length, v = h.length, s = t(f, h, d, v), s == 1 && (l--, r(f, _ < d ? A : $, d))) : (l == 0 && (s = l = 1), f = $.slice()), d = f.length, d < v && f.unshift(0), r(h, f, v), s == -1 && (v = h.length, s = t($, h, _, v), s < 1 && (l++, r(h, _ < v ? A : $, v))), v = h.length) : s === 0 && (l++, h = [0]), y[c++] = l, s && h[0] ? h[v++] = T[O] || 0 : (h = [T[O]], v = 1);
      while ((O++ < m || h[0] !== void 0) && g--);
    }
    return y[0] || y.shift(), p.e = u, Pe(p, o ? i + Fe(p) + 1 : i);
  };
})();
function W_(e, t) {
  var r, n, a, i, o, s, u = 0, c = 0, l = e.constructor, f = l.precision;
  if (Fe(e) > 16) throw Error(Ov + Fe(e));
  if (!e.s) return new l(bt);
  for (Ie = !1, s = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(qr(2, c)) / Math.LN10 * 2 + 5 | 0, s += n, r = a = i = new l(bt), l.precision = s; ; ) {
    if (a = Pe(a.times(e), s), r = r.times(++u), o = i.plus(sr(a, r, s)), Vt(o.d).slice(0, s) === Vt(i.d).slice(0, s)) {
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
function Yf(e, t, r) {
  if (t > e.LN10.sd())
    throw Ie = !0, r && (e.precision = r), Error(jt + "LN10 precision limit exceeded");
  return Pe(new e(e.LN10), t);
}
function br(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function fi(e, t) {
  var r, n, a, i, o, s, u, c, l, f = 1, d = 10, p = e, y = p.d, h = p.constructor, v = h.precision;
  if (p.s < 1) throw Error(jt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(bt)) return new h(0);
  if (t == null ? (Ie = !1, c = v) : c = t, p.eq(10))
    return t == null && (Ie = !0), Yf(h, c);
  if (c += d, h.precision = c, r = Vt(y), n = r.charAt(0), i = Fe(p), Math.abs(i) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = Vt(p.d), n = r.charAt(0), f++;
    i = Fe(p), n > 1 ? (p = new h("0." + r), i++) : p = new h(n + "." + r.slice(1));
  } else
    return u = Yf(h, c + 2, v).times(i + ""), p = fi(new h(n + "." + r.slice(1)), c - d).plus(u), h.precision = v, t == null ? (Ie = !0, Pe(p, v)) : p;
  for (s = o = p = sr(p.minus(bt), p.plus(bt), c), l = Pe(p.times(p), c), a = 3; ; ) {
    if (o = Pe(o.times(l), c), u = s.plus(sr(o, new h(a), c)), Vt(u.d).slice(0, c) === Vt(s.d).slice(0, c))
      return s = s.times(2), i !== 0 && (s = s.plus(Yf(h, c + 2, v).times(i + ""))), s = sr(s, new h(f), c), h.precision = v, t == null ? (Ie = !0, Pe(s, v)) : s;
    s = u, a += 2;
  }
}
function lx(e, t) {
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
    if (e.d.push(+t), Ie && (e.e > Vo || e.e < -Vo)) throw Error(Ov + r);
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
  if (Ie && (e.e > Vo || e.e < -Vo))
    throw Error(Ov + Fe(e));
  return e;
}
function U_(e, t) {
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
function rn(e, t, r) {
  var n, a = Fe(e), i = Vt(e.d), o = i.length;
  return t ? (r && (n = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + br(n) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (a < 0 ? "e" : "e+") + a) : a < 0 ? (i = "0." + br(-a - 1) + i, r && (n = r - o) > 0 && (i += br(n))) : a >= o ? (i += br(a + 1 - o), r && (n = r - a - 1) > 0 && (i = i + "." + br(n))) : ((n = a + 1) < o && (i = i.slice(0, n) + "." + i.slice(n)), r && (n = r - o) > 0 && (a + 1 === o && (i += "."), i += br(n))), e.s < 0 ? "-" + i : i;
}
function fx(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function H_(e) {
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
        throw Error(Zr + i);
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
      return lx(o, i.toString());
    } else if (typeof i != "string")
      throw Error(Zr + i);
    if (i.charCodeAt(0) === 45 ? (i = i.slice(1), o.s = -1) : o.s = 1, eR.test(i)) lx(o, i);
    else throw Error(Zr + i);
  }
  if (a.prototype = re, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = H_, a.config = a.set = tR, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return a.config(e), a;
}
function tR(e) {
  if (!e || typeof e != "object")
    throw Error(jt + "Object expected");
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
      else throw Error(Zr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Zr + r + ": " + n);
  return this;
}
var Sv = H_(Qk);
bt = new Sv(1);
const _e = Sv;
function rR(e) {
  return oR(e) || iR(e) || aR(e) || nR();
}
function nR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aR(e, t) {
  if (e) {
    if (typeof e == "string") return vp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vp(e, t);
  }
}
function iR(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function oR(e) {
  if (Array.isArray(e)) return vp(e);
}
function vp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var sR = function(t) {
  return t;
}, V_ = {}, K_ = function(t) {
  return t === V_;
}, dx = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && K_(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, uR = function e(t, r) {
  return t === 1 ? r : dx(function() {
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a.filter(function(s) {
      return s !== V_;
    }).length;
    return o >= t ? r.apply(void 0, a) : e(t - o, dx(function() {
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      var l = a.map(function(f) {
        return K_(f) ? u.shift() : f;
      });
      return r.apply(void 0, rR(l).concat(u));
    }));
  });
}, tu = function(t) {
  return uR(t.length, t);
}, yp = function(t, r) {
  for (var n = [], a = t; a < r; ++a)
    n[a - t] = a;
  return n;
}, cR = tu(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), lR = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return sR;
  var a = r.reverse(), i = a[0], o = a.slice(1);
  return function() {
    return o.reduce(function(s, u) {
      return u(s);
    }, i.apply(void 0, arguments));
  };
}, mp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, G_ = function(t) {
  var r = null, n = null;
  return function() {
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return r && i.every(function(s, u) {
      return s === r[u];
    }) || (r = i, n = t.apply(void 0, i)), n;
  };
};
function fR(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new _e(e).abs().log(10).toNumber()) + 1, t;
}
function dR(e, t, r) {
  for (var n = new _e(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), n = n.add(r), a++;
  return i;
}
var pR = tu(function(e, t, r) {
  var n = +e, a = +t;
  return n + r * (a - n);
}), hR = tu(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), vR = tu(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const ru = {
  rangeStep: dR,
  getDigitCount: fR,
  interpolateNumber: pR,
  uninterpolateNumber: hR,
  uninterpolateTruncation: vR
};
function gp(e) {
  return gR(e) || mR(e) || Y_(e) || yR();
}
function yR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mR(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function gR(e) {
  if (Array.isArray(e)) return bp(e);
}
function di(e, t) {
  return wR(e) || xR(e, t) || Y_(e, t) || bR();
}
function bR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y_(e, t) {
  if (e) {
    if (typeof e == "string") return bp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bp(e, t);
  }
}
function bp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function xR(e, t) {
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
function wR(e) {
  if (Array.isArray(e)) return e;
}
function X_(e) {
  var t = di(e, 2), r = t[0], n = t[1], a = r, i = n;
  return r > n && (a = n, i = r), [a, i];
}
function Z_(e, t, r) {
  if (e.lte(0))
    return new _e(0);
  var n = ru.getDigitCount(e.toNumber()), a = new _e(10).pow(n), i = e.div(a), o = n !== 1 ? 0.05 : 0.1, s = new _e(Math.ceil(i.div(o).toNumber())).add(r).mul(o), u = s.mul(a);
  return t ? u : new _e(Math.ceil(u));
}
function OR(e, t, r) {
  var n = 1, a = new _e(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1 ? (n = new _e(10).pow(ru.getDigitCount(e) - 1), a = new _e(Math.floor(a.div(n).toNumber())).mul(n)) : i > 1 && (a = new _e(Math.floor(e)));
  } else e === 0 ? a = new _e(Math.floor((t - 1) / 2)) : r || (a = new _e(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), s = lR(cR(function(u) {
    return a.add(new _e(u - o).mul(n)).toNumber();
  }), yp);
  return s(0, t);
}
function J_(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new _e(0),
      tickMin: new _e(0),
      tickMax: new _e(0)
    };
  var i = Z_(new _e(t).sub(e).div(r - 1), n, a), o;
  e <= 0 && t >= 0 ? o = new _e(0) : (o = new _e(e).add(t).div(2), o = o.sub(new _e(o).mod(i)));
  var s = Math.ceil(o.sub(e).div(i).toNumber()), u = Math.ceil(new _e(t).sub(o).div(i).toNumber()), c = s + u + 1;
  return c > r ? J_(e, t, r, n, a + 1) : (c < r && (u = t > 0 ? u + (r - c) : u, s = t > 0 ? s : s + (r - c)), {
    step: i,
    tickMin: o.sub(new _e(s).mul(i)),
    tickMax: o.add(new _e(u).mul(i))
  });
}
function SR(e) {
  var t = di(e, 2), r = t[0], n = t[1], a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(a, 2), s = X_([r, n]), u = di(s, 2), c = u[0], l = u[1];
  if (c === -1 / 0 || l === 1 / 0) {
    var f = l === 1 / 0 ? [c].concat(gp(yp(0, a - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(gp(yp(0, a - 1).map(function() {
      return -1 / 0;
    })), [l]);
    return r > n ? mp(f) : f;
  }
  if (c === l)
    return OR(c, a, i);
  var d = J_(c, l, o, i), p = d.step, y = d.tickMin, h = d.tickMax, v = ru.rangeStep(y, h.add(new _e(0.1).mul(p)), p);
  return r > n ? mp(v) : v;
}
function _R(e, t) {
  var r = di(e, 2), n = r[0], a = r[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = X_([n, a]), s = di(o, 2), u = s[0], c = s[1];
  if (u === -1 / 0 || c === 1 / 0)
    return [n, a];
  if (u === c)
    return [u];
  var l = Math.max(t, 2), f = Z_(new _e(c).sub(u).div(l - 1), i, 0), d = [].concat(gp(ru.rangeStep(new _e(u), new _e(c).sub(new _e(0.99).mul(f)), f)), [c]);
  return n > a ? mp(d) : d;
}
var AR = G_(SR), PR = G_(_R), TR = process.env.NODE_ENV === "production", Xf = "Invariant failed";
function dt(e, t) {
  if (TR)
    throw new Error(Xf);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(Xf, ": ").concat(r) : Xf;
  throw new Error(n);
}
var ER = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Ln(e) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ln(e);
}
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
function CR(e, t) {
  return IR(e) || $R(e, t) || MR(e, t) || jR();
}
function jR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MR(e, t) {
  if (e) {
    if (typeof e == "string") return px(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return px(e, t);
  }
}
function px(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $R(e, t) {
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
function IR(e) {
  if (Array.isArray(e)) return e;
}
function DR(e, t) {
  if (e == null) return {};
  var r = NR(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function NR(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function kR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function RR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tA(n.key), n);
  }
}
function LR(e, t, r) {
  return t && RR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function qR(e, t, r) {
  return t = Go(t), BR(e, Q_() ? Reflect.construct(t, r || [], Go(e).constructor) : t.apply(e, r));
}
function BR(e, t) {
  if (t && (Ln(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return FR(e);
}
function FR(e) {
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
function Go(e) {
  return Go = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Go(e);
}
function zR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && xp(e, t);
}
function xp(e, t) {
  return xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xp(e, t);
}
function eA(e, t, r) {
  return t = tA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tA(e) {
  var t = WR(e, "string");
  return Ln(t) == "symbol" ? t : t + "";
}
function WR(e, t) {
  if (Ln(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ki = /* @__PURE__ */ (function(e) {
  function t() {
    return kR(this, t), qR(this, t, arguments);
  }
  return zR(t, e), LR(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.offset, i = n.layout, o = n.width, s = n.dataKey, u = n.data, c = n.dataPointFormatter, l = n.xAxis, f = n.yAxis, d = DR(n, ER), p = ie(d, !1);
      this.props.direction === "x" && l.type !== "number" && (process.env.NODE_ENV !== "production" ? dt(!1, 'ErrorBar requires Axis type property to be "number".') : dt());
      var y = u.map(function(h) {
        var v = c(h, s), b = v.x, g = v.y, x = v.value, O = v.errorVal;
        if (!O)
          return null;
        var m = [], w, _;
        if (Array.isArray(O)) {
          var A = CR(O, 2);
          w = A[0], _ = A[1];
        } else
          w = _ = O;
        if (i === "vertical") {
          var P = l.scale, D = g + a, T = D + o, $ = D - o, M = P(x - w), j = P(x + _);
          m.push({
            x1: j,
            y1: T,
            x2: j,
            y2: $
          }), m.push({
            x1: M,
            y1: D,
            x2: j,
            y2: D
          }), m.push({
            x1: M,
            y1: T,
            x2: M,
            y2: $
          });
        } else if (i === "horizontal") {
          var I = f.scale, N = b + a, R = N - o, L = N + o, z = I(x - w), k = I(x + _);
          m.push({
            x1: R,
            y1: k,
            x2: L,
            y2: k
          }), m.push({
            x1: N,
            y1: z,
            x2: N,
            y2: k
          }), m.push({
            x1: R,
            y1: z,
            x2: L,
            y2: z
          });
        }
        return /* @__PURE__ */ C.createElement(pe, Ko({
          className: "recharts-errorBar",
          key: "bar-".concat(m.map(function(B) {
            return "".concat(B.x1, "-").concat(B.x2, "-").concat(B.y1, "-").concat(B.y2);
          }))
        }, p), m.map(function(B) {
          return /* @__PURE__ */ C.createElement("line", Ko({}, B, {
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
eA(Ki, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
eA(Ki, "displayName", "ErrorBar");
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function hx(e, t) {
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
    t % 2 ? hx(Object(r), !0).forEach(function(n) {
      UR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UR(e, t, r) {
  return t = HR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function HR(e) {
  var t = VR(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function VR(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rA = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, a = t.legendWidth, i = t.legendContent, o = mt(r, Yr);
  if (!o)
    return null;
  var s = Yr.defaultProps, u = s !== void 0 ? Dr(Dr({}, s), o.props) : {}, c;
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
    var f = l.item, d = f.type.defaultProps, p = d !== void 0 ? Dr(Dr({}, d), f.props) : {}, y = p.dataKey, h = p.name, v = p.legendType, b = p.hide;
    return {
      inactive: b,
      dataKey: y,
      type: u.iconType || v || "square",
      color: _v(f),
      value: h || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: p
    };
  }), Dr(Dr(Dr({}, u), Yr.getWithHeight(o, a)), {}, {
    payload: c,
    item: o
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
function vx(e) {
  return XR(e) || YR(e) || GR(e) || KR();
}
function KR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GR(e, t) {
  if (e) {
    if (typeof e == "string") return wp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wp(e, t);
  }
}
function YR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function XR(e) {
  if (Array.isArray(e)) return wp(e);
}
function wp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function yx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yx(Object(r), !0).forEach(function(n) {
      En(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function En(e, t, r) {
  return t = ZR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZR(e) {
  var t = JR(e, "string");
  return hi(t) == "symbol" ? t : t + "";
}
function JR(e, t) {
  if (hi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (hi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Re(e, t, r) {
  return le(e) || le(t) ? r : Ge(t) ? xt(e, t, r) : ue(t) ? t(e) : r;
}
function Fa(e, t, r, n) {
  var a = Jk(e, function(s) {
    return Re(s, t);
  });
  if (r === "number") {
    var i = a.filter(function(s) {
      return G(s) || parseFloat(s);
    });
    return i.length ? [eu(i), wr(i)] : [1 / 0, -1 / 0];
  }
  var o = n ? a.filter(function(s) {
    return !le(s);
  }) : a;
  return o.map(function(s) {
    return Ge(s) || s instanceof Date ? s : "";
  });
}
var QR = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], a = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0, o = -1, s = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (s <= 1)
    return 0;
  if (i && i.axisType === "angleAxis" && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
    for (var u = i.range, c = 0; c < s; c++) {
      var l = c > 0 ? a[c - 1].coordinate : a[s - 1].coordinate, f = a[c].coordinate, d = c >= s - 1 ? a[0].coordinate : a[c + 1].coordinate, p = void 0;
      if (ot(f - l) !== ot(d - f)) {
        var y = [];
        if (ot(d - f) === ot(u[1] - u[0])) {
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
}, _v = function(t) {
  var r, n = t, a = n.type.displayName, i = (r = t.type) !== null && r !== void 0 && r.defaultProps ? ke(ke({}, t.type.defaultProps), t.props) : t.props, o = i.stroke, s = i.fill, u;
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
}, eL = function(t) {
  var r = t.barSize, n = t.totalSize, a = t.stackGroups, i = a === void 0 ? {} : a;
  if (!i)
    return {};
  for (var o = {}, s = Object.keys(i), u = 0, c = s.length; u < c; u++)
    for (var l = i[s[u]].stackGroups, f = Object.keys(l), d = 0, p = f.length; d < p; d++) {
      var y = l[f[d]], h = y.items, v = y.cateAxisId, b = h.filter(function(_) {
        return or(_.type).indexOf("Bar") >= 0;
      });
      if (b && b.length) {
        var g = b[0].type.defaultProps, x = g !== void 0 ? ke(ke({}, g), b[0].props) : b[0].props, O = x.barSize, m = x[v];
        o[m] || (o[m] = []);
        var w = le(O) ? r : O;
        o[m].push({
          item: b[0],
          stackList: b.slice(1),
          barSize: le(w) ? void 0 : st(w, n, 0)
        });
      }
    }
  return o;
}, tL = function(t) {
  var r = t.barGap, n = t.barCategoryGap, a = t.bandSize, i = t.sizeList, o = i === void 0 ? [] : i, s = t.maxBarSize, u = o.length;
  if (u < 1) return null;
  var c = st(r, a, 0, !0), l, f = [];
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
      }, _ = [].concat(vx(O), [w]);
      return v = _[_.length - 1].position, m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        _.push({
          item: A,
          position: v
        });
      }), _;
    }, f);
  } else {
    var b = st(n, a, 0, !0);
    a - 2 * b - (u - 1) * c <= 0 && (c = 0);
    var g = (a - 2 * b - (u - 1) * c) / u;
    g > 1 && (g >>= 0);
    var x = s === +s ? Math.min(g, s) : g;
    l = o.reduce(function(O, m, w) {
      var _ = [].concat(vx(O), [{
        item: m.item,
        position: {
          offset: b + (g + c) * w + (g - x) / 2,
          size: x
        }
      }]);
      return m.stackList && m.stackList.length && m.stackList.forEach(function(A) {
        _.push({
          item: A,
          position: _[_.length - 1].position
        });
      }), _;
    }, f);
  }
  return l;
}, rL = function(t, r, n, a) {
  var i = n.children, o = n.width, s = n.margin, u = o - (s.left || 0) - (s.right || 0), c = rA({
    children: i,
    legendWidth: u
  });
  if (c) {
    var l = a || {}, f = l.width, d = l.height, p = c.align, y = c.verticalAlign, h = c.layout;
    if ((h === "vertical" || h === "horizontal" && y === "middle") && p !== "center" && G(t[p]))
      return ke(ke({}, t), {}, En({}, p, t[p] + (f || 0)));
    if ((h === "horizontal" || h === "vertical" && p === "center") && y !== "middle" && G(t[y]))
      return ke(ke({}, t), {}, En({}, y, t[y] + (d || 0)));
  }
  return t;
}, nL = function(t, r, n) {
  return le(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, nA = function(t, r, n, a, i) {
  var o = r.props.children, s = wt(o, Ki).filter(function(c) {
    return nL(a, i, c.props.direction);
  });
  if (s && s.length) {
    var u = s.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, l) {
      var f = Re(l, n);
      if (le(f)) return c;
      var d = Array.isArray(f) ? [eu(f), wr(f)] : [f, f], p = u.reduce(function(y, h) {
        var v = Re(l, h, 0), b = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), g = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(b, y[0]), Math.max(g, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], c[0]), Math.max(p[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, aL = function(t, r, n, a, i) {
  var o = r.map(function(s) {
    return nA(t, s, n, i, a);
  }).filter(function(s) {
    return !le(s);
  });
  return o && o.length ? o.reduce(function(s, u) {
    return [Math.min(s[0], u[0]), Math.max(s[1], u[1])];
  }, [1 / 0, -1 / 0]) : null;
}, aA = function(t, r, n, a, i) {
  var o = r.map(function(u) {
    var c = u.props.dataKey;
    return n === "number" && c && nA(t, u, c, a) || Fa(t, c, n, i);
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
}, iA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, oA = function(t, r, n, a) {
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
  if (c = t.axisType === "angleAxis" && s?.length >= 2 ? ot(s[0] - s[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
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
}, Zf = /* @__PURE__ */ new WeakMap(), fo = function(t, r) {
  if (typeof r != "function")
    return t;
  Zf.has(t) || Zf.set(t, /* @__PURE__ */ new WeakMap());
  var n = Zf.get(t);
  if (n.has(r))
    return n.get(r);
  var a = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, a), a;
}, sA = function(t, r, n) {
  var a = t.scale, i = t.type, o = t.layout, s = t.axisType;
  if (a === "auto")
    return o === "radial" && s === "radiusAxis" ? {
      scale: oi(),
      realScaleType: "band"
    } : o === "radial" && s === "angleAxis" ? {
      scale: zo(),
      realScaleType: "linear"
    } : i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Ba(),
      realScaleType: "point"
    } : i === "category" ? {
      scale: oi(),
      realScaleType: "band"
    } : {
      scale: zo(),
      realScaleType: "linear"
    };
  if (zi(a)) {
    var u = "scale".concat(Bs(a));
    return {
      scale: (rx[u] || Ba)(),
      realScaleType: rx[u] ? u : "point"
    };
  }
  return ue(a) ? {
    scale: a
  } : {
    scale: Ba(),
    realScaleType: "point"
  };
}, mx = 1e-4, uA = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, a = t.range(), i = Math.min(a[0], a[1]) - mx, o = Math.max(a[0], a[1]) + mx, s = t(r[0]), u = t(r[n - 1]);
    (s < i || s > o || u < i || u > o) && t.domain([r[0], r[n - 1]]);
  }
}, iL = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, a = t.length; n < a; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, oL = function(t, r) {
  if (!r || r.length !== 2 || !G(r[0]) || !G(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), a = Math.max(r[0], r[1]), i = [t[0], t[1]];
  return (!G(t[0]) || t[0] < n) && (i[0] = n), (!G(t[1]) || t[1] > a) && (i[1] = a), i[0] > a && (i[0] = a), i[1] < n && (i[1] = n), i;
}, sL = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0, s = 0; s < r; ++s) {
        var u = oa(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        u >= 0 ? (t[s][n][0] = i, t[s][n][1] = i + u, i = t[s][n][1]) : (t[s][n][0] = o, t[s][n][1] = o + u, o = t[s][n][1]);
      }
}, uL = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, a = t[0].length; n < a; ++n)
      for (var i = 0, o = 0; o < r; ++o) {
        var s = oa(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        s >= 0 ? (t[o][n][0] = i, t[o][n][1] = i + s, i = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, cL = {
  sign: sL,
  // @ts-expect-error definitelytyped types are incorrect
  expand: TM,
  // @ts-expect-error definitelytyped types are incorrect
  none: jn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: EM,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: CM,
  positive: uL
}, lL = function(t, r, n) {
  var a = r.map(function(s) {
    return s.props.dataKey;
  }), i = cL[n], o = PM().keys(a).value(function(s, u) {
    return +Re(s, u, 0);
  }).order(Zd).offset(i);
  return o(t);
}, fL = function(t, r, n, a, i, o) {
  if (!t)
    return null;
  var s = o ? r.reverse() : r, u = {}, c = s.reduce(function(f, d) {
    var p, y = (p = d.type) !== null && p !== void 0 && p.defaultProps ? ke(ke({}, d.type.defaultProps), d.props) : d.props, h = y.stackId, v = y.hide;
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
      g.stackGroups[un("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: a,
        items: [d]
      };
    return ke(ke({}, f), {}, En({}, b, g));
  }, u), l = {};
  return Object.keys(c).reduce(function(f, d) {
    var p = c[d];
    if (p.hasStack) {
      var y = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(h, v) {
        var b = p.stackGroups[v];
        return ke(ke({}, h), {}, En({}, v, {
          numericAxisId: n,
          cateAxisId: a,
          items: b.items,
          stackedData: lL(t, b.items, i)
        }));
      }, y);
    }
    return ke(ke({}, f), {}, En({}, d, p));
  }, l);
}, cA = function(t, r) {
  var n = r.realScaleType, a = r.type, i = r.tickCount, o = r.originalDomain, s = r.allowDecimals, u = n || r.scale;
  if (u !== "auto" && u !== "linear")
    return null;
  if (i && a === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var l = AR(c, i, s);
    return t.domain([eu(l), wr(l)]), {
      niceTicks: l
    };
  }
  if (i && a === "number") {
    var f = t.domain(), d = PR(f, i, s);
    return {
      niceTicks: d
    };
  }
  return null;
};
function Yo(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, a = e.entry, i = e.index, o = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !le(a[t.dataKey])) {
      var s = _o(r, "value", a[t.dataKey]);
      if (s)
        return s.coordinate + n / 2;
    }
    return r[i] ? r[i].coordinate + n / 2 : null;
  }
  var u = Re(a, le(o) ? t.dataKey : o);
  return le(u) ? null : t.scale(u);
}
var gx = function(t) {
  var r = t.axis, n = t.ticks, a = t.offset, i = t.bandSize, o = t.entry, s = t.index;
  if (r.type === "category")
    return n[s] ? n[s].coordinate + a : null;
  var u = Re(o, r.dataKey, r.domain[s]);
  return le(u) ? null : r.scale(u) - i / 2 + a;
}, dL = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var a = Math.min(n[0], n[1]), i = Math.max(n[0], n[1]);
    return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
  }
  return n[0];
}, pL = function(t, r) {
  var n, a = (n = t.type) !== null && n !== void 0 && n.defaultProps ? ke(ke({}, t.type.defaultProps), t.props) : t.props, i = a.stackId;
  if (Ge(i)) {
    var o = r[i];
    if (o) {
      var s = o.items.indexOf(t);
      return s >= 0 ? o.stackedData[s] : null;
    }
  }
  return null;
}, hL = function(t) {
  return t.reduce(function(r, n) {
    return [eu(n.concat([r[0]]).filter(G)), wr(n.concat([r[1]]).filter(G))];
  }, [1 / 0, -1 / 0]);
}, lA = function(t, r, n) {
  return Object.keys(t).reduce(function(a, i) {
    var o = t[i], s = o.stackedData, u = s.reduce(function(c, l) {
      var f = hL(l.slice(r, n + 1));
      return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], a[0]), Math.max(u[1], a[1])];
  }, [1 / 0, -1 / 0]).map(function(a) {
    return a === 1 / 0 || a === -1 / 0 ? 0 : a;
  });
}, bx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, xx = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Op = function(t, r, n) {
  if (ue(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var a = [];
  if (G(t[0]))
    a[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (bx.test(t[0])) {
    var i = +bx.exec(t[0])[1];
    a[0] = r[0] - i;
  } else ue(t[0]) ? a[0] = t[0](r[0]) : a[0] = r[0];
  if (G(t[1]))
    a[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (xx.test(t[1])) {
    var o = +xx.exec(t[1])[1];
    a[1] = r[1] + o;
  } else ue(t[1]) ? a[1] = t[1](r[1]) : a[1] = r[1];
  return a;
}, Xo = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var a = t.scale.bandwidth();
    if (!n || a > 0)
      return a;
  }
  if (t && r && r.length >= 2) {
    for (var i = Jh(r, function(f) {
      return f.coordinate;
    }), o = 1 / 0, s = 1, u = i.length; s < u; s++) {
      var c = i[s], l = i[s - 1];
      o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, wx = function(t, r, n) {
  return !t || !t.length || en(t, xt(n, "type.defaultProps.domain")) ? r : t;
}, fA = function(t, r) {
  var n = t.type.defaultProps ? ke(ke({}, t.type.defaultProps), t.props) : t.props, a = n.dataKey, i = n.name, o = n.unit, s = n.formatter, u = n.tooltipType, c = n.chartType, l = n.hide;
  return ke(ke({}, ie(t, !1)), {}, {
    dataKey: a,
    unit: o,
    formatter: s,
    name: i || a,
    color: _v(t),
    value: Re(r, a),
    type: u,
    payload: r,
    chartType: c,
    hide: l
  });
};
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
function Ox(e, t) {
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
    t % 2 ? Ox(Object(r), !0).forEach(function(n) {
      dA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ox(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dA(e, t, r) {
  return t = vL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vL(e) {
  var t = yL(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function yL(e, t) {
  if (vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mL(e, t) {
  return wL(e) || xL(e, t) || bL(e, t) || gL();
}
function gL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bL(e, t) {
  if (e) {
    if (typeof e == "string") return Sx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sx(e, t);
  }
}
function Sx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xL(e, t) {
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
function wL(e) {
  if (Array.isArray(e)) return e;
}
var Zo = Math.PI / 180, OL = function(t) {
  return t * 180 / Math.PI;
}, je = function(t, r, n, a) {
  return {
    x: t + Math.cos(-Zo * a) * n,
    y: r + Math.sin(-Zo * a) * n
  };
}, pA = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, SL = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.startAngle, c = t.endAngle, l = st(t.cx, o, o / 2), f = st(t.cy, s, s / 2), d = pA(o, s, n), p = st(t.innerRadius, d, 0), y = st(t.outerRadius, d, d * 0.8), h = Object.keys(r);
  return h.reduce(function(v, b) {
    var g = r[b], x = g.domain, O = g.reversed, m;
    if (le(g.range))
      a === "angleAxis" ? m = [u, c] : a === "radiusAxis" && (m = [p, y]), O && (m = [m[1], m[0]]);
    else {
      m = g.range;
      var w = m, _ = mL(w, 2);
      u = _[0], c = _[1];
    }
    var A = sA(g, i), P = A.realScaleType, D = A.scale;
    D.domain(x).range(m), uA(D);
    var T = cA(D, rr(rr({}, g), {}, {
      realScaleType: P
    })), $ = rr(rr(rr({}, g), T), {}, {
      range: m,
      radius: y,
      realScaleType: P,
      scale: D,
      cx: l,
      cy: f,
      innerRadius: p,
      outerRadius: y,
      startAngle: u,
      endAngle: c
    });
    return rr(rr({}, v), {}, dA({}, b, $));
  }, {});
}, _L = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
}, AL = function(t, r) {
  var n = t.x, a = t.y, i = r.cx, o = r.cy, s = _L({
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
    angle: OL(c),
    angleInRadian: c
  };
}, PL = function(t) {
  var r = t.startAngle, n = t.endAngle, a = Math.floor(r / 360), i = Math.floor(n / 360), o = Math.min(a, i);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, TL = function(t, r) {
  var n = r.startAngle, a = r.endAngle, i = Math.floor(n / 360), o = Math.floor(a / 360), s = Math.min(i, o);
  return t + s * 360;
}, _x = function(t, r) {
  var n = t.x, a = t.y, i = AL({
    x: n,
    y: a
  }, r), o = i.radius, s = i.angle, u = r.innerRadius, c = r.outerRadius;
  if (o < u || o > c)
    return !1;
  if (o === 0)
    return !0;
  var l = PL(r), f = l.startAngle, d = l.endAngle, p = s, y;
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
    angle: TL(p, r)
  }) : null;
}, hA = function(t) {
  return !/* @__PURE__ */ Rt(t) && !ue(t) && typeof t != "boolean" ? t.className : "";
};
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
var EL = ["offset"];
function CL(e) {
  return IL(e) || $L(e) || ML(e) || jL();
}
function jL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ML(e, t) {
  if (e) {
    if (typeof e == "string") return Sp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sp(e, t);
  }
}
function $L(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function IL(e) {
  if (Array.isArray(e)) return Sp(e);
}
function Sp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DL(e, t) {
  if (e == null) return {};
  var r = NL(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function NL(e, t) {
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
      kL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ax(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kL(e, t, r) {
  return t = RL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RL(e) {
  var t = LL(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function LL(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mi.apply(this, arguments);
}
var qL = function(t) {
  var r = t.value, n = t.formatter, a = le(t.children) ? r : t.children;
  return ue(n) ? n(a) : a;
}, BL = function(t, r) {
  var n = ot(r - t), a = Math.min(Math.abs(r - t), 360);
  return n * a;
}, FL = function(t, r, n) {
  var a = t.position, i = t.viewBox, o = t.offset, s = t.className, u = i, c = u.cx, l = u.cy, f = u.innerRadius, d = u.outerRadius, p = u.startAngle, y = u.endAngle, h = u.clockWise, v = (f + d) / 2, b = BL(p, y), g = b >= 0 ? 1 : -1, x, O;
  a === "insideStart" ? (x = p + g * o, O = h) : a === "insideEnd" ? (x = y - g * o, O = !h) : a === "end" && (x = y + g * o, O = h), O = b <= 0 ? O : !O;
  var m = je(c, l, v, x), w = je(c, l, v, x + (O ? 1 : -1) * 359), _ = "M".concat(m.x, ",").concat(m.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(O ? 0 : 1, `,
    `).concat(w.x, ",").concat(w.y), A = le(t.id) ? un("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ C.createElement("text", mi({}, n, {
    dominantBaseline: "central",
    className: de("recharts-radial-bar-label", s)
  }), /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("path", {
    id: A,
    d: _
  })), /* @__PURE__ */ C.createElement("textPath", {
    xlinkHref: "#".concat(A)
  }, r));
}, zL = function(t) {
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
}, WL = function(t) {
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
  var _ = n ? {
    width: c,
    height: l
  } : {};
  return i === "insideLeft" ? We({
    x: s + v,
    y: u + l / 2,
    textAnchor: g,
    verticalAnchor: "middle"
  }, _) : i === "insideRight" ? We({
    x: s + c - v,
    y: u + l / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, _) : i === "insideTop" ? We({
    x: s + c / 2,
    y: u + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, _) : i === "insideBottom" ? We({
    x: s + c / 2,
    y: u + l - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, _) : i === "insideTopLeft" ? We({
    x: s + v,
    y: u + d,
    textAnchor: g,
    verticalAnchor: y
  }, _) : i === "insideTopRight" ? We({
    x: s + c - v,
    y: u + d,
    textAnchor: b,
    verticalAnchor: y
  }, _) : i === "insideBottomLeft" ? We({
    x: s + v,
    y: u + l - d,
    textAnchor: g,
    verticalAnchor: p
  }, _) : i === "insideBottomRight" ? We({
    x: s + c - v,
    y: u + l - d,
    textAnchor: b,
    verticalAnchor: p
  }, _) : ia(i) && (G(i.x) || zr(i.x)) && (G(i.y) || zr(i.y)) ? We({
    x: s + st(i.x, c),
    y: u + st(i.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, _) : We({
    x: s + c / 2,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, _);
}, UL = function(t) {
  return "cx" in t && G(t.cx);
};
function Ke(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = DL(e, EL), a = We({
    offset: r
  }, n), i = a.viewBox, o = a.position, s = a.value, u = a.children, c = a.content, l = a.className, f = l === void 0 ? "" : l, d = a.textBreakAll;
  if (!i || le(s) && le(u) && !/* @__PURE__ */ Rt(c) && !ue(c))
    return null;
  if (/* @__PURE__ */ Rt(c))
    return /* @__PURE__ */ Ue(c, a);
  var p;
  if (ue(c)) {
    if (p = /* @__PURE__ */ vO(c, a), /* @__PURE__ */ Rt(p))
      return p;
  } else
    p = qL(a);
  var y = UL(i), h = ie(a, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return FL(a, p, h);
  var v = y ? zL(a) : WL(a);
  return /* @__PURE__ */ C.createElement(Ar, mi({
    className: de("recharts-label", f)
  }, h, v, {
    breakAll: d
  }), p);
}
Ke.displayName = "Label";
var vA = function(t) {
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
}, HL = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ C.createElement(Ke, {
    key: "label-implicit",
    viewBox: r
  }) : Ge(t) ? /* @__PURE__ */ C.createElement(Ke, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Rt(t) ? t.type === Ke ? /* @__PURE__ */ Ue(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ C.createElement(Ke, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ue(t) ? /* @__PURE__ */ C.createElement(Ke, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ia(t) ? /* @__PURE__ */ C.createElement(Ke, mi({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, VL = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var a = t.children, i = vA(t), o = wt(a, Ke).map(function(u, c) {
    return /* @__PURE__ */ Ue(u, {
      viewBox: r || i,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var s = HL(t.label, r || i);
  return [s].concat(CL(o));
};
Ke.parseViewBox = vA;
Ke.renderCallByParent = VL;
var Jf, Px;
function KL() {
  if (Px) return Jf;
  Px = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return Jf = e, Jf;
}
var GL = KL();
const YL = /* @__PURE__ */ Ae(GL);
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
var XL = ["valueAccessor"], ZL = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function JL(e) {
  return rq(e) || tq(e) || eq(e) || QL();
}
function QL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function eq(e, t) {
  if (e) {
    if (typeof e == "string") return _p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _p(e, t);
  }
}
function tq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function rq(e) {
  if (Array.isArray(e)) return _p(e);
}
function _p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
function Tx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ex(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tx(Object(r), !0).forEach(function(n) {
      nq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nq(e, t, r) {
  return t = aq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aq(e) {
  var t = iq(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function iq(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cx(e, t) {
  if (e == null) return {};
  var r = oq(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var sq = function(t) {
  return Array.isArray(t.value) ? YL(t.value) : t.value;
};
function Ct(e) {
  var t = e.valueAccessor, r = t === void 0 ? sq : t, n = Cx(e, XL), a = n.data, i = n.dataKey, o = n.clockWise, s = n.id, u = n.textBreakAll, c = Cx(n, ZL);
  return !a || !a.length ? null : /* @__PURE__ */ C.createElement(pe, {
    className: "recharts-label-list"
  }, a.map(function(l, f) {
    var d = le(i) ? r(l, f) : Re(l && l.payload, i), p = le(s) ? {} : {
      id: "".concat(s, "-").concat(f)
    };
    return /* @__PURE__ */ C.createElement(Ke, Jo({}, ie(l, !0), c, p, {
      parentViewBox: l.parentViewBox,
      value: d,
      textBreakAll: u,
      viewBox: Ke.parseViewBox(le(o) ? l : Ex(Ex({}, l), {}, {
        clockWise: o
      })),
      key: "label-".concat(f),
      index: f
    }));
  }));
}
Ct.displayName = "LabelList";
function uq(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ C.createElement(Ct, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ C.isValidElement(e) || ue(e) ? /* @__PURE__ */ C.createElement(Ct, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : ia(e) ? /* @__PURE__ */ C.createElement(Ct, Jo({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function cq(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, a = wt(n, Ct).map(function(o, s) {
    return /* @__PURE__ */ Ue(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(s)
    });
  });
  if (!r)
    return a;
  var i = uq(e.label, t);
  return [i].concat(JL(a));
}
Ct.renderCallByParent = cq;
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function Ap() {
  return Ap = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ap.apply(this, arguments);
}
function jx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jx(Object(r), !0).forEach(function(n) {
      lq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lq(e, t, r) {
  return t = fq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fq(e) {
  var t = dq(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function dq(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pq = function(t, r) {
  var n = ot(r - t), a = Math.min(Math.abs(r - t), 359.999);
  return n * a;
}, po = function(t) {
  var r = t.cx, n = t.cy, a = t.radius, i = t.angle, o = t.sign, s = t.isExternal, u = t.cornerRadius, c = t.cornerIsExternal, l = u * (s ? 1 : -1) + a, f = Math.asin(u / l) / Zo, d = c ? i : i + o * f, p = je(r, n, l, d), y = je(r, n, a, d), h = c ? i - o * f : i, v = je(r, n, l * Math.cos(f * Zo), h);
  return {
    center: p,
    circleTangency: y,
    lineTangency: v,
    theta: f
  };
}, yA = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.startAngle, s = t.endAngle, u = pq(o, s), c = o + u, l = je(r, n, i, o), f = je(r, n, i, c), d = "M ".concat(l.x, ",").concat(l.y, `
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
}, hq = function(t) {
  var r = t.cx, n = t.cy, a = t.innerRadius, i = t.outerRadius, o = t.cornerRadius, s = t.forceCornerRadius, u = t.cornerIsExternal, c = t.startAngle, l = t.endAngle, f = ot(l - c), d = po({
    cx: r,
    cy: n,
    radius: i,
    angle: c,
    sign: f,
    cornerRadius: o,
    cornerIsExternal: u
  }), p = d.circleTangency, y = d.lineTangency, h = d.theta, v = po({
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
      `) : yA({
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
    var w = po({
      cx: r,
      cy: n,
      radius: a,
      angle: c,
      sign: f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), _ = w.circleTangency, A = w.lineTangency, P = w.theta, D = po({
      cx: r,
      cy: n,
      radius: a,
      angle: l,
      sign: -f,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: u
    }), T = D.circleTangency, $ = D.lineTangency, M = D.theta, j = u ? Math.abs(c - l) : Math.abs(c - l) - P - M;
    if (j < 0 && o === 0)
      return "".concat(m, "L").concat(r, ",").concat(n, "Z");
    m += "L".concat($.x, ",").concat($.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(a, ",").concat(a, ",0,").concat(+(j > 180), ",").concat(+(f > 0), ",").concat(_.x, ",").concat(_.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(f < 0), ",").concat(A.x, ",").concat(A.y, "Z");
  } else
    m += "L".concat(r, ",").concat(n, "Z");
  return m;
}, vq = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, mA = function(t) {
  var r = Mx(Mx({}, vq), t), n = r.cx, a = r.cy, i = r.innerRadius, o = r.outerRadius, s = r.cornerRadius, u = r.forceCornerRadius, c = r.cornerIsExternal, l = r.startAngle, f = r.endAngle, d = r.className;
  if (o < i || l === f)
    return null;
  var p = de("recharts-sector", d), y = o - i, h = st(s, y, 0, !0), v;
  return h > 0 && Math.abs(l - f) < 360 ? v = hq({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(h, y / 2),
    forceCornerRadius: u,
    cornerIsExternal: c,
    startAngle: l,
    endAngle: f
  }) : v = yA({
    cx: n,
    cy: a,
    innerRadius: i,
    outerRadius: o,
    startAngle: l,
    endAngle: f
  }), /* @__PURE__ */ C.createElement("path", Ap({}, ie(r, !0), {
    className: p,
    d: v,
    role: "img"
  }));
};
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function Pp() {
  return Pp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pp.apply(this, arguments);
}
function $x(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ix(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $x(Object(r), !0).forEach(function(n) {
      yq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $x(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yq(e, t, r) {
  return t = mq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mq(e) {
  var t = gq(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function gq(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dx = {
  curveBasisClosed: vM,
  curveBasisOpen: yM,
  curveBasis: hM,
  curveBumpX: eM,
  curveBumpY: tM,
  curveLinearClosed: mM,
  curveLinear: zs,
  curveMonotoneX: gM,
  curveMonotoneY: bM,
  curveNatural: xM,
  curveStep: wM,
  curveStepAfter: SM,
  curveStepBefore: OM
}, ho = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Pa = function(t) {
  return t.x;
}, Ta = function(t) {
  return t.y;
}, bq = function(t, r) {
  if (ue(t))
    return t;
  var n = "curve".concat(Bs(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Dx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Dx[n] || zs;
}, xq = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, a = t.points, i = a === void 0 ? [] : a, o = t.baseLine, s = t.layout, u = t.connectNulls, c = u === void 0 ? !1 : u, l = bq(n, s), f = c ? i.filter(function(h) {
    return ho(h);
  }) : i, d;
  if (Array.isArray(o)) {
    var p = c ? o.filter(function(h) {
      return ho(h);
    }) : o, y = f.map(function(h, v) {
      return Ix(Ix({}, h), {}, {
        base: p[v]
      });
    });
    return s === "vertical" ? d = ao().y(Ta).x1(Pa).x0(function(h) {
      return h.base.x;
    }) : d = ao().x(Pa).y1(Ta).y0(function(h) {
      return h.base.y;
    }), d.defined(ho).curve(l), d(y);
  }
  return s === "vertical" && G(o) ? d = ao().y(Ta).x1(Pa).x0(o) : G(o) ? d = ao().x(Pa).y1(Ta).y0(o) : d = PS().x(Pa).y(Ta), d.defined(ho).curve(l), d(f);
}, Jr = function(t) {
  var r = t.className, n = t.points, a = t.path, i = t.pathRef;
  if ((!n || !n.length) && !a)
    return null;
  var o = n && n.length ? xq(t) : a;
  return /* @__PURE__ */ C.createElement("path", Pp({}, ie(t, !1), Ao(t), {
    className: de("recharts-curve", r),
    d: o,
    ref: i
  }));
}, vo = { exports: {} }, yo = { exports: {} }, xe = {};
var Nx;
function wq() {
  if (Nx) return xe;
  Nx = 1;
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
var kx;
function Oq() {
  return kx || (kx = 1, process.env.NODE_ENV !== "production" && (function() {
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
    var m = u, w = c, _ = s, A = o, P = t, D = l, T = n, $ = y, M = p, j = r, I = i, N = a, R = f, L = !1;
    function z(E) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(E) || O(E) === u;
    }
    function k(E) {
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
    function K(E) {
      return O(E) === a;
    }
    function Z(E) {
      return O(E) === f;
    }
    we.AsyncMode = m, we.ConcurrentMode = w, we.ContextConsumer = _, we.ContextProvider = A, we.Element = P, we.ForwardRef = D, we.Fragment = T, we.Lazy = $, we.Memo = M, we.Portal = j, we.Profiler = I, we.StrictMode = N, we.Suspense = R, we.isAsyncMode = z, we.isConcurrentMode = k, we.isContextConsumer = B, we.isContextProvider = q, we.isElement = H, we.isForwardRef = X, we.isFragment = te, we.isLazy = ne, we.isMemo = ee, we.isPortal = Q, we.isProfiler = U, we.isStrictMode = K, we.isSuspense = Z, we.isValidElementType = x, we.typeOf = O;
  })()), we;
}
var Rx;
function gA() {
  return Rx || (Rx = 1, process.env.NODE_ENV === "production" ? yo.exports = wq() : yo.exports = Oq()), yo.exports;
}
var Qf, Lx;
function Sq() {
  if (Lx) return Qf;
  Lx = 1;
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
  return Qf = a() ? Object.assign : function(i, o) {
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
  }, Qf;
}
var ed, qx;
function Av() {
  if (qx) return ed;
  qx = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ed = e, ed;
}
var td, Bx;
function bA() {
  return Bx || (Bx = 1, td = Function.call.bind(Object.prototype.hasOwnProperty)), td;
}
var rd, Fx;
function _q() {
  if (Fx) return rd;
  Fx = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Av(), r = {}, n = /* @__PURE__ */ bA();
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
  }, rd = a, rd;
}
var nd, zx;
function Aq() {
  if (zx) return nd;
  zx = 1;
  var e = gA(), t = Sq(), r = /* @__PURE__ */ Av(), n = /* @__PURE__ */ bA(), a = /* @__PURE__ */ _q(), i = function() {
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
  return nd = function(s, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function f(k) {
      var B = k && (c && k[c] || k[l]);
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
      node: D(),
      objectOf: A,
      oneOf: _,
      oneOfType: P,
      shape: $,
      exact: M
    };
    function y(k, B) {
      return k === B ? k !== 0 || 1 / k === 1 / B : k !== k && B !== B;
    }
    function h(k, B) {
      this.message = k, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function v(k) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, q = 0;
      function H(te, ne, ee, Q, U, K, Z) {
        if (Q = Q || d, K = K || ee, Z !== r) {
          if (u) {
            var E = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw E.name = "Invariant Violation", E;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = Q + ":" + ee;
            !B[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Y] = !0, q++);
          }
        }
        return ne[ee] == null ? te ? ne[ee] === null ? new h("The " + U + " `" + K + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new h("The " + U + " `" + K + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : k(ne, ee, Q, U, K);
      }
      var X = H.bind(null, !1);
      return X.isRequired = H.bind(null, !0), X;
    }
    function b(k) {
      function B(q, H, X, te, ne, ee) {
        var Q = q[H], U = N(Q);
        if (U !== k) {
          var K = R(Q);
          return new h(
            "Invalid " + te + " `" + ne + "` of type " + ("`" + K + "` supplied to `" + X + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return v(B);
    }
    function g() {
      return v(o);
    }
    function x(k) {
      function B(q, H, X, te, ne) {
        if (typeof k != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var ee = q[H];
        if (!Array.isArray(ee)) {
          var Q = N(ee);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected an array."));
        }
        for (var U = 0; U < ee.length; U++) {
          var K = k(ee, U, X, te, ne + "[" + U + "]", r);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return v(B);
    }
    function O() {
      function k(B, q, H, X, te) {
        var ne = B[q];
        if (!s(ne)) {
          var ee = N(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(k);
    }
    function m() {
      function k(B, q, H, X, te) {
        var ne = B[q];
        if (!e.isValidElementType(ne)) {
          var ee = N(ne);
          return new h("Invalid " + X + " `" + te + "` of type " + ("`" + ee + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(k);
    }
    function w(k) {
      function B(q, H, X, te, ne) {
        if (!(q[H] instanceof k)) {
          var ee = k.name || d, Q = z(q[H]);
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return v(B);
    }
    function _(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function B(q, H, X, te, ne) {
        for (var ee = q[H], Q = 0; Q < k.length; Q++)
          if (y(ee, k[Q]))
            return null;
        var U = JSON.stringify(k, function(Z, E) {
          var Y = R(E);
          return Y === "symbol" ? String(E) : E;
        });
        return new h("Invalid " + te + " `" + ne + "` of value `" + String(ee) + "` " + ("supplied to `" + X + "`, expected one of " + U + "."));
      }
      return v(B);
    }
    function A(k) {
      function B(q, H, X, te, ne) {
        if (typeof k != "function")
          return new h("Property `" + ne + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var ee = q[H], Q = N(ee);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type " + ("`" + Q + "` supplied to `" + X + "`, expected an object."));
        for (var U in ee)
          if (n(ee, U)) {
            var K = k(ee, U, X, te, ne + "." + U, r);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return v(B);
    }
    function P(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var B = 0; B < k.length; B++) {
        var q = k[B];
        if (typeof q != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(q) + " at index " + B + "."
          ), o;
      }
      function H(X, te, ne, ee, Q) {
        for (var U = [], K = 0; K < k.length; K++) {
          var Z = k[K], E = Z(X, te, ne, ee, Q, r);
          if (E == null)
            return null;
          E.data && n(E.data, "expectedType") && U.push(E.data.expectedType);
        }
        var Y = U.length > 0 ? ", expected one of type [" + U.join(", ") + "]" : "";
        return new h("Invalid " + ee + " `" + Q + "` supplied to " + ("`" + ne + "`" + Y + "."));
      }
      return v(H);
    }
    function D() {
      function k(B, q, H, X, te) {
        return j(B[q]) ? null : new h("Invalid " + X + " `" + te + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return v(k);
    }
    function T(k, B, q, H, X) {
      return new h(
        (k || "React class") + ": " + B + " type `" + q + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function $(k) {
      function B(q, H, X, te, ne) {
        var ee = q[H], Q = N(ee);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var U in k) {
          var K = k[U];
          if (typeof K != "function")
            return T(X, te, ne, U, R(K));
          var Z = K(ee, U, X, te, ne + "." + U, r);
          if (Z)
            return Z;
        }
        return null;
      }
      return v(B);
    }
    function M(k) {
      function B(q, H, X, te, ne) {
        var ee = q[H], Q = N(ee);
        if (Q !== "object")
          return new h("Invalid " + te + " `" + ne + "` of type `" + Q + "` " + ("supplied to `" + X + "`, expected `object`."));
        var U = t({}, q[H], k);
        for (var K in U) {
          var Z = k[K];
          if (n(k, K) && typeof Z != "function")
            return T(X, te, ne, K, R(Z));
          if (!Z)
            return new h(
              "Invalid " + te + " `" + ne + "` key `" + K + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(q[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var E = Z(ee, K, X, te, ne + "." + K, r);
          if (E)
            return E;
        }
        return null;
      }
      return v(B);
    }
    function j(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(j);
          if (k === null || s(k))
            return !0;
          var B = f(k);
          if (B) {
            var q = B.call(k), H;
            if (B !== k.entries) {
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
    function I(k, B) {
      return k === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function N(k) {
      var B = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : I(B, k) ? "symbol" : B;
    }
    function R(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var B = N(k);
      if (B === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function L(k) {
      var B = R(k);
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
    function z(k) {
      return !k.constructor || !k.constructor.name ? d : k.constructor.name;
    }
    return p.checkPropTypes = a, p.resetWarningCache = a.resetWarningCache, p.PropTypes = p, p;
  }, nd;
}
var ad, Wx;
function Pq() {
  if (Wx) return ad;
  Wx = 1;
  var e = /* @__PURE__ */ Av();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ad = function() {
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
  }, ad;
}
var Ux;
function Tq() {
  if (Ux) return vo.exports;
  if (Ux = 1, process.env.NODE_ENV !== "production") {
    var e = gA(), t = !0;
    vo.exports = /* @__PURE__ */ Aq()(e.isElement, t);
  } else
    vo.exports = /* @__PURE__ */ Pq()();
  return vo.exports;
}
var Eq = /* @__PURE__ */ Tq();
const Oe = /* @__PURE__ */ Ae(Eq);
var Cq = Object.getOwnPropertyNames, jq = Object.getOwnPropertySymbols, Mq = Object.prototype.hasOwnProperty;
function Hx(e, t) {
  return function(n, a, i) {
    return e(n, a, i) && t(n, a, i);
  };
}
function mo(e) {
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
function Vx(e) {
  return Cq(e).concat(jq(e));
}
var $q = Object.hasOwn || (function(e, t) {
  return Mq.call(e, t);
});
function fn(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
var Iq = "__v", Dq = "__o", Nq = "_owner", Kx = Object.getOwnPropertyDescriptor, Gx = Object.keys;
function kq(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function Rq(e, t) {
  return fn(e.getTime(), t.getTime());
}
function Lq(e, t) {
  return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function qq(e, t) {
  return e === t;
}
function Yx(e, t, r) {
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
var Bq = fn;
function Fq(e, t, r) {
  var n = Gx(e), a = n.length;
  if (Gx(t).length !== a)
    return !1;
  for (; a-- > 0; )
    if (!xA(e, t, r, n[a]))
      return !1;
  return !0;
}
function Ea(e, t, r) {
  var n = Vx(e), a = n.length;
  if (Vx(t).length !== a)
    return !1;
  for (var i, o, s; a-- > 0; )
    if (i = n[a], !xA(e, t, r, i) || (o = Kx(e, i), s = Kx(t, i), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable)))
      return !1;
  return !0;
}
function zq(e, t) {
  return fn(e.valueOf(), t.valueOf());
}
function Wq(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Xx(e, t, r) {
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
function Uq(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Hq(e, t) {
  return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function xA(e, t, r, n) {
  return (n === Nq || n === Dq || n === Iq) && (e.$$typeof || t.$$typeof) ? !0 : $q(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
var Vq = "[object Arguments]", Kq = "[object Boolean]", Gq = "[object Date]", Yq = "[object Error]", Xq = "[object Map]", Zq = "[object Number]", Jq = "[object Object]", Qq = "[object RegExp]", eB = "[object Set]", tB = "[object String]", rB = "[object URL]", nB = Array.isArray, Zx = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Jx = Object.assign, aB = Object.prototype.toString.call.bind(Object.prototype.toString);
function iB(e) {
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
    if (nB(y))
      return t(y, h, v);
    if (Zx != null && Zx(y))
      return f(y, h, v);
    if (g === Date)
      return r(y, h, v);
    if (g === RegExp)
      return c(y, h, v);
    if (g === Map)
      return i(y, h, v);
    if (g === Set)
      return l(y, h, v);
    var x = aB(y);
    return x === Gq ? r(y, h, v) : x === Qq ? c(y, h, v) : x === Xq ? i(y, h, v) : x === eB ? l(y, h, v) : x === Jq ? typeof y.then != "function" && typeof h.then != "function" && s(y, h, v) : x === rB ? d(y, h, v) : x === Yq ? n(y, h, v) : x === Vq ? s(y, h, v) : x === Kq || x === Zq || x === tB ? u(y, h, v) : !1;
  };
}
function oB(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, a = {
    areArraysEqual: n ? Ea : kq,
    areDatesEqual: Rq,
    areErrorsEqual: Lq,
    areFunctionsEqual: qq,
    areMapsEqual: n ? Hx(Yx, Ea) : Yx,
    areNumbersEqual: Bq,
    areObjectsEqual: n ? Ea : Fq,
    arePrimitiveWrappersEqual: zq,
    areRegExpsEqual: Wq,
    areSetsEqual: n ? Hx(Xx, Ea) : Xx,
    areTypedArraysEqual: n ? Ea : Uq,
    areUrlsEqual: Hq
  };
  if (r && (a = Jx({}, a, r(a))), t) {
    var i = mo(a.areArraysEqual), o = mo(a.areMapsEqual), s = mo(a.areObjectsEqual), u = mo(a.areSetsEqual);
    a = Jx({}, a, {
      areArraysEqual: i,
      areMapsEqual: o,
      areObjectsEqual: s,
      areSetsEqual: u
    });
  }
  return a;
}
function sB(e) {
  return function(t, r, n, a, i, o, s) {
    return e(t, r, s);
  };
}
function uB(e) {
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
var cB = Mr();
Mr({ strict: !0 });
Mr({ circular: !0 });
Mr({
  circular: !0,
  strict: !0
});
Mr({
  createInternalComparator: function() {
    return fn;
  }
});
Mr({
  strict: !0,
  createInternalComparator: function() {
    return fn;
  }
});
Mr({
  circular: !0,
  createInternalComparator: function() {
    return fn;
  }
});
Mr({
  circular: !0,
  createInternalComparator: function() {
    return fn;
  },
  strict: !0
});
function Mr(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, a = e.createState, i = e.strict, o = i === void 0 ? !1 : i, s = oB(e), u = iB(s), c = n ? n(u) : sB(u);
  return uB({ circular: r, comparator: u, createState: a, equals: c, strict: o });
}
function lB(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Qx(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function a(i) {
    r < 0 && (r = i), i - r > t ? (e(i), r = -1) : lB(a);
  };
  requestAnimationFrame(n);
}
function Tp(e) {
  "@babel/helpers - typeof";
  return Tp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tp(e);
}
function fB(e) {
  return vB(e) || hB(e) || pB(e) || dB();
}
function dB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pB(e, t) {
  if (e) {
    if (typeof e == "string") return e1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return e1(e, t);
  }
}
function e1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function hB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vB(e) {
  if (Array.isArray(e)) return e;
}
function yB() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function a(i) {
    if (!r) {
      if (Array.isArray(i)) {
        if (!i.length)
          return;
        var o = i, s = fB(o), u = s[0], c = s.slice(1);
        if (typeof u == "number") {
          Qx(a.bind(null, c), u);
          return;
        }
        a(u), Qx(a.bind(null, c));
        return;
      }
      Tp(i) === "object" && (e = i, t(e)), typeof i == "function" && i();
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
function wi(e) {
  "@babel/helpers - typeof";
  return wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function t1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function r1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? t1(Object(r), !0).forEach(function(n) {
      wA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wA(e, t, r) {
  return t = mB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mB(e) {
  var t = gB(e, "string");
  return wi(t) === "symbol" ? t : String(t);
}
function gB(e, t) {
  if (wi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (wi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bB = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, a) {
    return n.filter(function(i) {
      return a.includes(i);
    });
  });
}, xB = function(t) {
  return t;
}, wB = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, za = function(t, r) {
  return Object.keys(r).reduce(function(n, a) {
    return r1(r1({}, n), {}, wA({}, a, t(a, r[a])));
  }, {});
}, n1 = function(t, r, n) {
  return t.map(function(a) {
    return "".concat(wB(a), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, OB = process.env.NODE_ENV !== "production", Qo = function(t, r, n, a, i, o, s, u) {
  if (OB && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, a, i, o, s, u], l = 0;
      console.warn(r.replace(/%s/g, function() {
        return c[l++];
      }));
    }
};
function SB(e, t) {
  return PB(e) || AB(e, t) || OA(e, t) || _B();
}
function _B() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AB(e, t) {
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
function PB(e) {
  if (Array.isArray(e)) return e;
}
function TB(e) {
  return jB(e) || CB(e) || OA(e) || EB();
}
function EB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OA(e, t) {
  if (e) {
    if (typeof e == "string") return Ep(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ep(e, t);
  }
}
function CB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jB(e) {
  if (Array.isArray(e)) return Ep(e);
}
function Ep(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var es = 1e-4, SA = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, _A = function(t, r) {
  return t.map(function(n, a) {
    return n * Math.pow(r, a);
  }).reduce(function(n, a) {
    return n + a;
  });
}, a1 = function(t, r) {
  return function(n) {
    var a = SA(t, r);
    return _A(a, n);
  };
}, MB = function(t, r) {
  return function(n) {
    var a = SA(t, r), i = [].concat(TB(a.map(function(o, s) {
      return o * s;
    }).slice(1)), [0]);
    return _A(i, n);
  };
}, i1 = function() {
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
          }), l = SB(c, 4);
          a = l[0], i = l[1], o = l[2], s = l[3];
        } else
          Qo(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Qo([a, o, i, s].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var f = a1(a, o), d = a1(i, s), p = MB(a, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, h = function(b) {
    for (var g = b > 1 ? 1 : b, x = g, O = 0; O < 8; ++O) {
      var m = f(x) - g, w = p(x);
      if (Math.abs(m - g) < es || w < es)
        return d(x);
      x = y(x - m / w);
    }
    return d(x);
  };
  return h.isStepper = !1, h;
}, $B = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, a = t.damping, i = a === void 0 ? 8 : a, o = t.dt, s = o === void 0 ? 17 : o, u = function(l, f, d) {
    var p = -(l - f) * n, y = d * i, h = d + (p - y) * s / 1e3, v = d * s / 1e3 + l;
    return Math.abs(v - f) < es && Math.abs(h) < es ? [f, 0] : [v, h];
  };
  return u.isStepper = !0, u.dt = s, u;
}, IB = function() {
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
        return i1(a);
      case "spring":
        return $B();
      default:
        if (a.split("(")[0] === "cubic-bezier")
          return i1(a);
        Qo(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof a == "function" ? a : (Qo(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Oi(e) {
  "@babel/helpers - typeof";
  return Oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oi(e);
}
function o1(e) {
  return kB(e) || NB(e) || AA(e) || DB();
}
function DB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kB(e) {
  if (Array.isArray(e)) return jp(e);
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
function et(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s1(Object(r), !0).forEach(function(n) {
      Cp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Cp(e, t, r) {
  return t = RB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RB(e) {
  var t = LB(e, "string");
  return Oi(t) === "symbol" ? t : String(t);
}
function LB(e, t) {
  if (Oi(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Oi(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qB(e, t) {
  return zB(e) || FB(e, t) || AA(e, t) || BB();
}
function BB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function AA(e, t) {
  if (e) {
    if (typeof e == "string") return jp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return jp(e, t);
  }
}
function jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function FB(e, t) {
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
function zB(e) {
  if (Array.isArray(e)) return e;
}
var ts = function(t, r, n) {
  return t + (r - t) * n;
}, Mp = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, WB = function e(t, r, n) {
  var a = za(function(i, o) {
    if (Mp(o)) {
      var s = t(o.from, o.to, o.velocity), u = qB(s, 2), c = u[0], l = u[1];
      return et(et({}, o), {}, {
        from: c,
        velocity: l
      });
    }
    return o;
  }, r);
  return n < 1 ? za(function(i, o) {
    return Mp(o) ? et(et({}, o), {}, {
      velocity: ts(o.velocity, a[i].velocity, n),
      from: ts(o.from, a[i].from, n)
    }) : o;
  }, r) : e(t, a, n - 1);
};
const UB = (function(e, t, r, n, a) {
  var i = bB(e, t), o = i.reduce(function(v, b) {
    return et(et({}, v), {}, Cp({}, b, [e[b], t[b]]));
  }, {}), s = i.reduce(function(v, b) {
    return et(et({}, v), {}, Cp({}, b, {
      from: e[b],
      velocity: 0,
      to: t[b]
    }));
  }, {}), u = -1, c, l, f = function() {
    return null;
  }, d = function() {
    return za(function(b, g) {
      return g.from;
    }, s);
  }, p = function() {
    return !Object.values(s).filter(Mp).length;
  }, y = function(b) {
    c || (c = b);
    var g = b - c, x = g / r.dt;
    s = WB(r, s, x), a(et(et(et({}, e), t), d())), c = b, p() || (u = requestAnimationFrame(f));
  }, h = function(b) {
    l || (l = b);
    var g = (b - l) / n, x = za(function(m, w) {
      return ts.apply(void 0, o1(w).concat([r(g)]));
    }, o);
    if (a(et(et(et({}, e), t), x)), g < 1)
      u = requestAnimationFrame(f);
    else {
      var O = za(function(m, w) {
        return ts.apply(void 0, o1(w).concat([r(1)]));
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
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
var HB = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function VB(e, t) {
  if (e == null) return {};
  var r = KB(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function id(e) {
  return ZB(e) || XB(e) || YB(e) || GB();
}
function GB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YB(e, t) {
  if (e) {
    if (typeof e == "string") return $p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $p(e, t);
  }
}
function XB(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ZB(e) {
  if (Array.isArray(e)) return $p(e);
}
function $p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u1(e, t) {
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
    t % 2 ? u1(Object(r), !0).forEach(function(n) {
      ka(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ka(e, t, r) {
  return t = PA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function QB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, PA(n.key), n);
  }
}
function e3(e, t, r) {
  return t && QB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function PA(e) {
  var t = t3(e, "string");
  return qn(t) === "symbol" ? t : String(t);
}
function t3(e, t) {
  if (qn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (qn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ip(e, t);
}
function Ip(e, t) {
  return Ip = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Ip(e, t);
}
function n3(e) {
  var t = a3();
  return function() {
    var n = rs(e), a;
    if (t) {
      var i = rs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Dp(this, a);
  };
}
function Dp(e, t) {
  if (t && (qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Np(e);
}
function Np(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function a3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rs(e) {
  return rs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, rs(e);
}
var Ft = /* @__PURE__ */ (function(e) {
  r3(r, e);
  var t = n3(r);
  function r(n, a) {
    var i;
    JB(this, r), i = t.call(this, n, a);
    var o = i.props, s = o.isActive, u = o.attributeName, c = o.from, l = o.to, f = o.steps, d = o.children, p = o.duration;
    if (i.handleStyleChange = i.handleStyleChange.bind(Np(i)), i.changeStyle = i.changeStyle.bind(Np(i)), !s || p <= 0)
      return i.state = {
        style: {}
      }, typeof d == "function" && (i.state = {
        style: l
      }), Dp(i);
    if (f && f.length)
      i.state = {
        style: f[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return i.state = {
          style: c
        }, Dp(i);
      i.state = {
        style: u ? ka({}, u, c) : c
      };
    } else
      i.state = {
        style: {}
      };
    return i;
  }
  return e3(r, [{
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
        if (!(cB(a.to, l) && a.canBegin && a.isActive)) {
          var y = !a.canBegin || !a.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var h = y || c ? f : a.to;
          if (this.state && d) {
            var v = {
              style: u ? ka({}, u, h) : h
            };
            (u && d[u] !== h || !u && d !== h) && this.setState(v);
          }
          this.runAnimation(It(It({}, this.props), {}, {
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
      var i = this, o = a.from, s = a.to, u = a.duration, c = a.easing, l = a.begin, f = a.onAnimationEnd, d = a.onAnimationStart, p = UB(o, s, IB(c), u, this.changeStyle), y = function() {
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
        var g = v.duration, x = v.easing, O = x === void 0 ? "ease" : x, m = v.style, w = v.properties, _ = v.onAnimationEnd, A = b > 0 ? o[b - 1] : v, P = w || Object.keys(m);
        if (typeof O == "function" || O === "spring")
          return [].concat(id(h), [i.runJSAnimation.bind(i, {
            from: A.style,
            to: m,
            duration: g,
            easing: O
          }), g]);
        var D = n1(P, g, O), T = It(It(It({}, A.style), m), {}, {
          transition: D
        });
        return [].concat(id(h), [T, g, _]).filter(xB);
      };
      return this.manager.start([u].concat(id(o.reduce(p, [l, Math.max(d, s)])), [a.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(a) {
      this.manager || (this.manager = yB());
      var i = a.begin, o = a.duration, s = a.attributeName, u = a.to, c = a.easing, l = a.onAnimationStart, f = a.onAnimationEnd, d = a.steps, p = a.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof p == "function" || c === "spring") {
        this.runJSAnimation(a);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(a);
        return;
      }
      var h = s ? ka({}, s, u) : u, v = n1(Object.keys(h), o, c);
      y.start([l, i, It(It({}, h), {}, {
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
      var u = VB(a, HB), c = Kr.count(i), l = this.state.style;
      if (typeof i == "function")
        return i(l);
      if (!s || c === 0 || o <= 0)
        return i;
      var f = function(p) {
        var y = p.props, h = y.style, v = h === void 0 ? {} : h, b = y.className, g = /* @__PURE__ */ Ue(p, It(It({}, u), {}, {
          style: It(It({}, v), l),
          className: b
        }));
        return g;
      };
      return c === 1 ? f(Kr.only(i)) : /* @__PURE__ */ C.createElement("div", null, Kr.map(i, function(d) {
        return f(d);
      }));
    }
  }]), r;
})(Mt);
Ft.displayName = "Animate";
Ft.defaultProps = {
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
Ft.propTypes = {
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
function i3(e, t) {
  return c3(e) || u3(e, t) || s3(e, t) || o3();
}
function o3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s3(e, t) {
  if (e) {
    if (typeof e == "string") return c1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c1(e, t);
  }
}
function c1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u3(e, t) {
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
function c3(e) {
  if (Array.isArray(e)) return e;
}
function l1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function f1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? l1(Object(r), !0).forEach(function(n) {
      l3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l3(e, t, r) {
  return t = f3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f3(e) {
  var t = d3(e, "string");
  return Si(t) == "symbol" ? t : t + "";
}
function d3(e, t) {
  if (Si(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Si(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var d1 = function(t, r, n, a, i) {
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
}, p3 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, a = t.y, i = r.x, o = r.y, s = r.width, u = r.height;
  if (Math.abs(s) > 0 && Math.abs(u) > 0) {
    var c = Math.min(i, i + s), l = Math.max(i, i + s), f = Math.min(o, o + u), d = Math.max(o, o + u);
    return n >= c && n <= l && a >= f && a <= d;
  }
  return !1;
}, h3 = {
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
}, Pv = function(t) {
  var r = f1(f1({}, h3), t), n = Me(), a = he(-1), i = i3(a, 2), o = i[0], s = i[1];
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
  return g ? /* @__PURE__ */ C.createElement(Ft, {
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
    var m = O.width, w = O.height, _ = O.x, A = O.y;
    return /* @__PURE__ */ C.createElement(Ft, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      isActive: b,
      easing: y
    }, /* @__PURE__ */ C.createElement("path", ns({}, ie(r, !0), {
      className: x,
      d: d1(_, A, m, w, d),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("path", ns({}, ie(r, !0), {
    className: x,
    d: d1(u, c, l, f, d)
  }));
}, v3 = ["points", "className", "baseLinePoints", "connectNulls"];
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
function p1(e) {
  return w3(e) || x3(e) || b3(e) || g3();
}
function g3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b3(e, t) {
  if (e) {
    if (typeof e == "string") return kp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return kp(e, t);
  }
}
function x3(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function w3(e) {
  if (Array.isArray(e)) return kp(e);
}
function kp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var h1 = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, O3 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    h1(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), h1(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, Wa = function(t, r) {
  var n = O3(t);
  r && (n = [n.reduce(function(i, o) {
    return [].concat(p1(i), p1(o));
  }, [])]);
  var a = n.map(function(i) {
    return i.reduce(function(o, s, u) {
      return "".concat(o).concat(u === 0 ? "M" : "L").concat(s.x, ",").concat(s.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(a, "Z") : a;
}, S3 = function(t, r, n) {
  var a = Wa(t, n);
  return "".concat(a.slice(-1) === "Z" ? a.slice(0, -1) : a, "L").concat(Wa(r.reverse(), n).slice(1));
}, _3 = function(t) {
  var r = t.points, n = t.className, a = t.baseLinePoints, i = t.connectNulls, o = y3(t, v3);
  if (!r || !r.length)
    return null;
  var s = de("recharts-polygon", n);
  if (a && a.length) {
    var u = o.stroke && o.stroke !== "none", c = S3(r, a, i);
    return /* @__PURE__ */ C.createElement("g", {
      className: s
    }, /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
      fill: c.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: c
    })), u ? /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
      fill: "none",
      d: Wa(r, i)
    })) : null, u ? /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
      fill: "none",
      d: Wa(a, i)
    })) : null);
  }
  var l = Wa(r, i);
  return /* @__PURE__ */ C.createElement("path", On({}, ie(o, !0), {
    fill: l.slice(-1) === "Z" ? o.fill : "none",
    className: s,
    d: l
  }));
};
function Rp() {
  return Rp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rp.apply(this, arguments);
}
var Gi = function(t) {
  var r = t.cx, n = t.cy, a = t.r, i = t.className, o = de("recharts-dot", i);
  return r === +r && n === +n && a === +a ? /* @__PURE__ */ C.createElement("circle", Rp({}, ie(t, !1), Ao(t), {
    className: o,
    cx: r,
    cy: n,
    r: a
  })) : null;
};
function _i(e) {
  "@babel/helpers - typeof";
  return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _i(e);
}
var A3 = ["x", "y", "top", "left", "width", "height", "className"];
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
function v1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function P3(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? v1(Object(r), !0).forEach(function(n) {
      T3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T3(e, t, r) {
  return t = E3(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E3(e) {
  var t = C3(e, "string");
  return _i(t) == "symbol" ? t : t + "";
}
function C3(e, t) {
  if (_i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (_i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j3(e, t) {
  if (e == null) return {};
  var r = M3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var $3 = function(t, r, n, a, i, o) {
  return "M".concat(t, ",").concat(i, "v").concat(a, "M").concat(o, ",").concat(r, "h").concat(n);
}, I3 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, a = t.y, i = a === void 0 ? 0 : a, o = t.top, s = o === void 0 ? 0 : o, u = t.left, c = u === void 0 ? 0 : u, l = t.width, f = l === void 0 ? 0 : l, d = t.height, p = d === void 0 ? 0 : d, y = t.className, h = j3(t, A3), v = P3({
    x: n,
    y: i,
    top: s,
    left: c,
    width: f,
    height: p
  }, h);
  return !G(n) || !G(i) || !G(f) || !G(p) || !G(s) || !G(c) ? null : /* @__PURE__ */ C.createElement("path", Lp({}, ie(v, !0), {
    className: de("recharts-cross", y),
    d: $3(n, i, f, p, s, c)
  }));
}, od, y1;
function D3() {
  if (y1) return od;
  y1 = 1;
  var e = Qs(), t = q_(), r = Qt();
  function n(a, i) {
    return a && a.length ? e(a, r(i, 2), t) : void 0;
  }
  return od = n, od;
}
var N3 = D3();
const k3 = /* @__PURE__ */ Ae(N3);
var sd, m1;
function R3() {
  if (m1) return sd;
  m1 = 1;
  var e = Qs(), t = Qt(), r = B_();
  function n(a, i) {
    return a && a.length ? e(a, t(i, 2), r) : void 0;
  }
  return sd = n, sd;
}
var L3 = R3();
const q3 = /* @__PURE__ */ Ae(L3);
var B3 = ["cx", "cy", "angle", "ticks", "axisLine"], F3 = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
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
function g1(e, t) {
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
    t % 2 ? g1(Object(r), !0).forEach(function(n) {
      nu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b1(e, t) {
  if (e == null) return {};
  var r = z3(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function z3(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function W3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function x1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, EA(n.key), n);
  }
}
function U3(e, t, r) {
  return t && x1(e.prototype, t), r && x1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function H3(e, t, r) {
  return t = as(t), V3(e, TA() ? Reflect.construct(t, r || [], as(e).constructor) : t.apply(e, r));
}
function V3(e, t) {
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
function TA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (TA = function() {
    return !!e;
  })();
}
function as(e) {
  return as = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, as(e);
}
function G3(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qp(e, t);
}
function qp(e, t) {
  return qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, qp(e, t);
}
function nu(e, t, r) {
  return t = EA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EA(e) {
  var t = Y3(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function Y3(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var au = /* @__PURE__ */ (function(e) {
  function t() {
    return W3(this, t), H3(this, t, arguments);
  }
  return G3(t, e), U3(t, [{
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = k3(s, function(l) {
        return l.coordinate || 0;
      }), c = q3(s, function(l) {
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
      var n = this.props, a = n.cx, i = n.cy, o = n.angle, s = n.ticks, u = n.axisLine, c = b1(n, B3), l = s.reduce(function(y, h) {
        return [Math.min(y[0], h.coordinate), Math.max(y[1], h.coordinate)];
      }, [1 / 0, -1 / 0]), f = je(a, i, l[0], o), d = je(a, i, l[1], o), p = Nr(Nr(Nr({}, ie(c, !1)), {}, {
        fill: "none"
      }, ie(u, !1)), {}, {
        x1: f.x,
        y1: f.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ C.createElement("line", Ua({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.angle, u = a.tickFormatter, c = a.stroke, l = b1(a, F3), f = this.getTickTextAnchor(), d = ie(l, !1), p = ie(o, !1), y = i.map(function(h, v) {
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
        return /* @__PURE__ */ C.createElement(pe, Ua({
          className: de("recharts-polar-radius-axis-tick", hA(o)),
          key: "tick-".concat(h.coordinate)
        }, tn(n.props, h, v)), t.renderTickItem(o, g, u ? u(h.value, v) : h.value));
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
      }, i && this.renderAxisLine(), o && this.renderTicks(), Ke.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Ar, Ua({}, a, {
        className: "recharts-polar-radius-axis-tick-value"
      }), i), o;
    }
  }]);
})(Mt);
nu(au, "displayName", "PolarRadiusAxis");
nu(au, "axisType", "radiusAxis");
nu(au, "defaultProps", {
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
function Fn(e) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fn(e);
}
function Fr() {
  return Fr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fr.apply(this, arguments);
}
function w1(e, t) {
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
    t % 2 ? w1(Object(r), !0).forEach(function(n) {
      iu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function X3(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function O1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, jA(n.key), n);
  }
}
function Z3(e, t, r) {
  return t && O1(e.prototype, t), r && O1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function J3(e, t, r) {
  return t = is(t), Q3(e, CA() ? Reflect.construct(t, r || [], is(e).constructor) : t.apply(e, r));
}
function Q3(e, t) {
  if (t && (Fn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return e5(e);
}
function e5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function CA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (CA = function() {
    return !!e;
  })();
}
function is(e) {
  return is = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, is(e);
}
function t5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bp(e, t);
}
function Bp(e, t) {
  return Bp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Bp(e, t);
}
function iu(e, t, r) {
  return t = jA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jA(e) {
  var t = r5(e, "string");
  return Fn(t) == "symbol" ? t : t + "";
}
function r5(e, t) {
  if (Fn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Fn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var n5 = Math.PI / 180, S1 = 1e-5, ou = /* @__PURE__ */ (function(e) {
  function t() {
    return X3(this, t), J3(this, t, arguments);
  }
  return t5(t, e), Z3(t, [{
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
      var a = this.props.orientation, i = Math.cos(-n.coordinate * n5), o;
      return i > S1 ? o = a === "outer" ? "start" : "end" : i < -S1 ? o = a === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, a = n.cx, i = n.cy, o = n.radius, s = n.axisLine, u = n.axisLineType, c = kr(kr({}, ie(this.props, !1)), {}, {
        fill: "none"
      }, ie(s, !1));
      if (u === "circle")
        return /* @__PURE__ */ C.createElement(Gi, Fr({
          className: "recharts-polar-angle-axis-line"
        }, c, {
          cx: a,
          cy: i,
          r: o
        }));
      var l = this.props.ticks, f = l.map(function(d) {
        return je(a, i, o, d.coordinate);
      });
      return /* @__PURE__ */ C.createElement(_3, Fr({
        className: "recharts-polar-angle-axis-line"
      }, c, {
        points: f
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, a = this.props, i = a.ticks, o = a.tick, s = a.tickLine, u = a.tickFormatter, c = a.stroke, l = ie(this.props, !1), f = ie(o, !1), d = kr(kr({}, l), {}, {
        fill: "none"
      }, ie(s, !1)), p = i.map(function(y, h) {
        var v = n.getTickLineCoord(y), b = n.getTickTextAnchor(y), g = kr(kr(kr({
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
        return /* @__PURE__ */ C.createElement(pe, Fr({
          className: de("recharts-polar-angle-axis-tick", hA(o)),
          key: "tick-".concat(y.coordinate)
        }, tn(n.props, y, h)), s && /* @__PURE__ */ C.createElement("line", Fr({
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
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Ar, Fr({}, a, {
        className: "recharts-polar-angle-axis-tick-value"
      }), i), o;
    }
  }]);
})(Mt);
iu(ou, "displayName", "PolarAngleAxis");
iu(ou, "axisType", "angleAxis");
iu(ou, "defaultProps", {
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
var ud, _1;
function a5() {
  if (_1) return ud;
  _1 = 1;
  var e = sS(), t = e(Object.getPrototypeOf, Object);
  return ud = t, ud;
}
var cd, A1;
function i5() {
  if (A1) return cd;
  A1 = 1;
  var e = fr(), t = a5(), r = dr(), n = "[object Object]", a = Function.prototype, i = Object.prototype, o = a.toString, s = i.hasOwnProperty, u = o.call(Object);
  function c(l) {
    if (!r(l) || e(l) != n)
      return !1;
    var f = t(l);
    if (f === null)
      return !0;
    var d = s.call(f, "constructor") && f.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == u;
  }
  return cd = c, cd;
}
var o5 = i5();
const s5 = /* @__PURE__ */ Ae(o5);
var ld, P1;
function u5() {
  if (P1) return ld;
  P1 = 1;
  var e = fr(), t = dr(), r = "[object Boolean]";
  function n(a) {
    return a === !0 || a === !1 || t(a) && e(a) == r;
  }
  return ld = n, ld;
}
var c5 = u5();
const l5 = /* @__PURE__ */ Ae(c5);
function Ai(e) {
  "@babel/helpers - typeof";
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(e);
}
function os() {
  return os = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, os.apply(this, arguments);
}
function f5(e, t) {
  return v5(e) || h5(e, t) || p5(e, t) || d5();
}
function d5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function p5(e, t) {
  if (e) {
    if (typeof e == "string") return T1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T1(e, t);
  }
}
function T1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function h5(e, t) {
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
function v5(e) {
  if (Array.isArray(e)) return e;
}
function E1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function C1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? E1(Object(r), !0).forEach(function(n) {
      y5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E1(Object(r)).forEach(function(n) {
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
  return Ai(t) == "symbol" ? t : t + "";
}
function g5(e, t) {
  if (Ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var j1 = function(t, r, n, a, i) {
  var o = n - a, s;
  return s = "M ".concat(t, ",").concat(r), s += "L ".concat(t + n, ",").concat(r), s += "L ".concat(t + n - o / 2, ",").concat(r + i), s += "L ".concat(t + n - o / 2 - a, ",").concat(r + i), s += "L ".concat(t, ",").concat(r, " Z"), s;
}, b5 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, x5 = function(t) {
  var r = C1(C1({}, b5), t), n = Me(), a = he(-1), i = f5(a, 2), o = i[0], s = i[1];
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
  return b ? /* @__PURE__ */ C.createElement(Ft, {
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
    var O = x.upperWidth, m = x.lowerWidth, w = x.height, _ = x.x, A = x.y;
    return /* @__PURE__ */ C.createElement(Ft, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: h,
      easing: y
    }, /* @__PURE__ */ C.createElement("path", os({}, ie(r, !0), {
      className: g,
      d: j1(_, A, O, m, w),
      ref: n
    })));
  }) : /* @__PURE__ */ C.createElement("g", null, /* @__PURE__ */ C.createElement("path", os({}, ie(r, !0), {
    className: g,
    d: j1(u, c, l, f, d)
  })));
}, w5 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Pi(e) {
  "@babel/helpers - typeof";
  return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pi(e);
}
function O5(e, t) {
  if (e == null) return {};
  var r = S5(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function S5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function M1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ss(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? M1(Object(r), !0).forEach(function(n) {
      _5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _5(e, t, r) {
  return t = A5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A5(e) {
  var t = P5(e, "string");
  return Pi(t) == "symbol" ? t : t + "";
}
function P5(e, t) {
  if (Pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function T5(e, t) {
  return ss(ss({}, t), e);
}
function E5(e, t) {
  return e === "symbols";
}
function $1(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ C.createElement(Pv, r);
    case "trapezoid":
      return /* @__PURE__ */ C.createElement(x5, r);
    case "sector":
      return /* @__PURE__ */ C.createElement(mA, r);
    case "symbols":
      if (E5(t))
        return /* @__PURE__ */ C.createElement(Yh, r);
      break;
    default:
      return null;
  }
}
function C5(e) {
  return /* @__PURE__ */ Rt(e) ? e.props : e;
}
function MA(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, a = n === void 0 ? T5 : n, i = e.activeClassName, o = i === void 0 ? "recharts-active-shape" : i, s = e.isActive, u = O5(e, w5), c;
  if (/* @__PURE__ */ Rt(t))
    c = /* @__PURE__ */ Ue(t, ss(ss({}, u), C5(t)));
  else if (ue(t))
    c = t(u);
  else if (s5(t) && !l5(t)) {
    var l = a(t, u);
    c = /* @__PURE__ */ C.createElement($1, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var f = u;
    c = /* @__PURE__ */ C.createElement($1, {
      shapeType: r,
      elementProps: f
    });
  }
  return s ? /* @__PURE__ */ C.createElement(pe, {
    className: o
  }, c) : c;
}
function su(e, t) {
  return t != null && "trapezoids" in e.props;
}
function uu(e, t) {
  return t != null && "sectors" in e.props;
}
function Ti(e, t) {
  return t != null && "points" in e.props;
}
function j5(e, t) {
  var r, n, a = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, i = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return a && i;
}
function M5(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function $5(e, t) {
  var r = e.x === t.x, n = e.y === t.y, a = e.z === t.z;
  return r && n && a;
}
function I5(e, t) {
  var r;
  return su(e, t) ? r = j5 : uu(e, t) ? r = M5 : Ti(e, t) && (r = $5), r;
}
function D5(e, t) {
  var r;
  return su(e, t) ? r = "trapezoids" : uu(e, t) ? r = "sectors" : Ti(e, t) && (r = "points"), r;
}
function N5(e, t) {
  if (su(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (uu(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Ti(e, t) ? t.payload : {};
}
function k5(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, a = D5(r, t), i = N5(r, t), o = n.filter(function(u, c) {
    var l = en(i, u), f = r.props[a].filter(function(y) {
      var h = I5(r, t);
      return h(y, t);
    }), d = r.props[a].indexOf(f[f.length - 1]), p = c === d;
    return l && p;
  }), s = n.indexOf(o[o.length - 1]);
  return s;
}
var Oo;
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
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
function I1(e, t) {
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
    t % 2 ? I1(Object(r), !0).forEach(function(n) {
      Tt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function D1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, IA(n.key), n);
  }
}
function L5(e, t, r) {
  return t && D1(e.prototype, t), r && D1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function q5(e, t, r) {
  return t = us(t), B5(e, $A() ? Reflect.construct(t, r || [], us(e).constructor) : t.apply(e, r));
}
function B5(e, t) {
  if (t && (zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return F5(e);
}
function F5(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $A() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($A = function() {
    return !!e;
  })();
}
function us(e) {
  return us = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, us(e);
}
function z5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fp(e, t);
}
function Fp(e, t) {
  return Fp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Fp(e, t);
}
function Tt(e, t, r) {
  return t = IA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IA(e) {
  var t = W5(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function W5(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var hr = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return R5(this, t), n = q5(this, t, [r]), Tt(n, "pieRef", null), Tt(n, "sectorRefs", []), Tt(n, "id", un("recharts-pie-")), Tt(n, "handleAnimationEnd", function() {
      var a = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), ue(a) && a();
    }), Tt(n, "handleAnimationStart", function() {
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
  return z5(t, e), L5(t, [{
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
        return /* @__PURE__ */ C.createElement(pe, Sn({
          ref: function(v) {
            v && !a.sectorRefs.includes(v) && a.sectorRefs.push(v);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, tn(a.props, c, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(c?.startAngle, "-").concat(c?.endAngle, "-").concat(c.midAngle, "-").concat(l)
        }), /* @__PURE__ */ C.createElement(MA, Sn({
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
      return /* @__PURE__ */ C.createElement(Ft, {
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
          var m = d && d[O], w = O > 0 ? xt(x, "paddingAngle", 0) : 0;
          if (m) {
            var _ = Ve(m.endAngle - m.startAngle, x.endAngle - x.startAngle), A = Ee(Ee({}, x), {}, {
              startAngle: g + w,
              endAngle: g + _(h) + w
            });
            v.push(A), g = A.endAngle;
          } else {
            var P = x.endAngle, D = x.startAngle, T = Ve(0, P - D), $ = T(h), M = Ee(Ee({}, x), {}, {
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
      return i && a && a.length && (!o || !en(o, a)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(a);
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
      }, this.renderSectors(), u && this.renderLabels(o), Ke.renderCallByParent(this.props, null, !1), (!p || y) && Ct.renderCallByParent(this.props, o, !1));
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
      return /* @__PURE__ */ C.createElement(Jr, Sn({}, a, {
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
      return /* @__PURE__ */ C.createElement(Ar, Sn({}, a, {
        alignmentBaseline: "middle",
        className: s
      }), o);
    }
  }]);
})(Mt);
Oo = hr;
Tt(hr, "displayName", "Pie");
Tt(hr, "defaultProps", {
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
Tt(hr, "parseDeltaAngle", function(e, t) {
  var r = ot(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Tt(hr, "getRealPieData", function(e) {
  var t = e.data, r = e.children, n = ie(e, !1), a = wt(r, Vs);
  return t && t.length ? t.map(function(i, o) {
    return Ee(Ee(Ee({
      payload: i
    }, n), i), a && a[o] && a[o].props);
  }) : a && a.length ? a.map(function(i) {
    return Ee(Ee({}, n), i.props);
  }) : [];
});
Tt(hr, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, a = t.width, i = t.height, o = pA(a, i), s = n + st(e.cx, a, a / 2), u = r + st(e.cy, i, i / 2), c = st(e.innerRadius, o, 0), l = st(e.outerRadius, o, o * 0.8), f = e.maxRadius || Math.sqrt(a * a + i * i) / 2;
  return {
    cx: s,
    cy: u,
    innerRadius: c,
    outerRadius: l,
    maxRadius: f
  };
});
Tt(hr, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = t.type.defaultProps !== void 0 ? Ee(Ee({}, t.type.defaultProps), t.props) : t.props, a = Oo.getRealPieData(n);
  if (!a || !a.length)
    return null;
  var i = n.cornerRadius, o = n.startAngle, s = n.endAngle, u = n.paddingAngle, c = n.dataKey, l = n.nameKey, f = n.valueKey, d = n.tooltipType, p = Math.abs(n.minAngle), y = Oo.parseCoordinateOfPie(n, r), h = Oo.parseDeltaAngle(o, s), v = Math.abs(h), b = c;
  le(c) && le(f) ? (qt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = "value") : le(c) && (qt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), b = f);
  var g = a.filter(function(A) {
    return Re(A, b, 0) !== 0;
  }).length, x = (v >= 360 ? g : g - 1) * u, O = v - g * p - x, m = a.reduce(function(A, P) {
    var D = Re(P, b, 0);
    return A + (G(D) ? D : 0);
  }, 0), w;
  if (m > 0) {
    var _;
    w = a.map(function(A, P) {
      var D = Re(A, b, 0), T = Re(A, l, P), $ = (G(D) ? D : 0) / m, M;
      P ? M = _.endAngle + ot(h) * u * (D !== 0 ? 1 : 0) : M = o;
      var j = M + ot(h) * ((D !== 0 ? p : 0) + $ * O), I = (M + j) / 2, N = (y.innerRadius + y.outerRadius) / 2, R = [{
        name: T,
        value: D,
        payload: A,
        dataKey: b,
        type: d
      }], L = je(y.cx, y.cy, N, I);
      return _ = Ee(Ee(Ee({
        percent: $,
        cornerRadius: i,
        name: T,
        tooltipPayload: R,
        midAngle: I,
        middleRadius: N,
        tooltipPosition: L
      }, A), y), {}, {
        value: Re(A, b),
        startAngle: M,
        endAngle: j,
        payload: A,
        paddingAngle: ot(h) * u
      }), _;
    });
  }
  return Ee(Ee({}, y), {}, {
    sectors: w,
    data: a
  });
});
var fd, N1;
function U5() {
  if (N1) return fd;
  N1 = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, a, i, o) {
    for (var s = -1, u = t(e((a - n) / (i || 1)), 0), c = Array(u); u--; )
      c[o ? u : ++s] = n, n += i;
    return c;
  }
  return fd = r, fd;
}
var dd, k1;
function DA() {
  if (k1) return dd;
  k1 = 1;
  var e = e_(), t = 1 / 0, r = 17976931348623157e292;
  function n(a) {
    if (!a)
      return a === 0 ? a : 0;
    if (a = e(a), a === t || a === -t) {
      var i = a < 0 ? -1 : 1;
      return i * r;
    }
    return a === a ? a : 0;
  }
  return dd = n, dd;
}
var pd, R1;
function H5() {
  if (R1) return pd;
  R1 = 1;
  var e = U5(), t = Hs(), r = DA();
  function n(a) {
    return function(i, o, s) {
      return s && typeof s != "number" && t(i, o, s) && (o = s = void 0), i = r(i), o === void 0 ? (o = i, i = 0) : o = r(o), s = s === void 0 ? i < o ? 1 : -1 : r(s), e(i, o, s, a);
    };
  }
  return pd = n, pd;
}
var hd, L1;
function V5() {
  if (L1) return hd;
  L1 = 1;
  var e = H5(), t = e();
  return hd = t, hd;
}
var K5 = V5();
const cs = /* @__PURE__ */ Ae(K5);
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function q1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function B1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? q1(Object(r), !0).forEach(function(n) {
      NA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NA(e, t, r) {
  return t = G5(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function G5(e) {
  var t = Y5(e, "string");
  return Ei(t) == "symbol" ? t : t + "";
}
function Y5(e, t) {
  if (Ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var X5 = ["Webkit", "Moz", "O", "ms"], Z5 = function(t, r) {
  var n = t.replace(/(\w)/, function(i) {
    return i.toUpperCase();
  }), a = X5.reduce(function(i, o) {
    return B1(B1({}, i), {}, NA({}, o + n, r));
  }, {});
  return a[t] = r, a;
};
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
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
function F1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? F1(Object(r), !0).forEach(function(n) {
      yt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : F1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function z1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, RA(n.key), n);
  }
}
function Q5(e, t, r) {
  return t && z1(e.prototype, t), r && z1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eF(e, t, r) {
  return t = fs(t), tF(e, kA() ? Reflect.construct(t, r || [], fs(e).constructor) : t.apply(e, r));
}
function tF(e, t) {
  if (t && (Wn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rF(e);
}
function rF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (kA = function() {
    return !!e;
  })();
}
function fs(e) {
  return fs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fs(e);
}
function nF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zp(e, t);
}
function zp(e, t) {
  return zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, zp(e, t);
}
function yt(e, t, r) {
  return t = RA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RA(e) {
  var t = aF(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function aF(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var iF = function(t) {
  var r = t.data, n = t.startIndex, a = t.endIndex, i = t.x, o = t.width, s = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var u = r.length, c = Ba().domain(cs(0, u)).range([i, i + o - s]), l = c.domain().map(function(f) {
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
}, W1 = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Un = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return J5(this, t), n = eF(this, t, [r]), yt(n, "handleDrag", function(a) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(a) : n.state.isSlideMoving && n.handleSlideDrag(a);
    }), yt(n, "handleTouchMove", function(a) {
      a.changedTouches != null && a.changedTouches.length > 0 && n.handleDrag(a.changedTouches[0]);
    }), yt(n, "handleDragEnd", function() {
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
    }), yt(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), yt(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), yt(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), yt(n, "handleSlideDragStart", function(a) {
      var i = W1(a) ? a.changedTouches[0] : a;
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
  return nF(t, e), Q5(t, [{
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
      var i = W1(a) ? a.changedTouches[0] : a;
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
        var A = v.length - 1;
        return o === "startX" && (s > u ? O % h === 0 : m % h === 0) || s < u && m === A || o === "endX" && (s > u ? m % h === 0 : O % h === 0) || s > u && m === A;
      };
      this.setState(yt(yt({}, o, c + g), "brushMoveStartX", n.pageX), function() {
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
          a === "startX" && p >= c || a === "endX" && p <= u || this.setState(yt({}, a, p), function() {
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
      var i, o, s = this, u = this.props, c = u.y, l = u.travellerWidth, f = u.height, d = u.traveller, p = u.ariaLabel, y = u.data, h = u.startIndex, v = u.endIndex, b = Math.max(n, this.props.x), g = vd(vd({}, ie(this.props, !1)), {}, {
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
      }, /* @__PURE__ */ C.createElement(Ar, ls({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(f, d) - p,
        y: o + s / 2
      }, y), this.getTextOfTick(a)), /* @__PURE__ */ C.createElement(Ar, ls({
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
      var x = de("recharts-brush", i), O = C.Children.count(o) === 1, m = Z5("userSelect", "none");
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
        return vd({
          prevData: i,
          prevTravellerWidth: u,
          prevUpdateId: c,
          prevX: s,
          prevWidth: o
        }, i && i.length ? iF({
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
})(Mt);
yt(Un, "displayName", "Brush");
yt(Un, "defaultProps", {
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
var yd, U1;
function oF() {
  if (U1) return yd;
  U1 = 1;
  var e = Zh();
  function t(r, n) {
    var a;
    return e(r, function(i, o, s) {
      return a = n(i, o, s), !a;
    }), !!a;
  }
  return yd = t, yd;
}
var md, H1;
function sF() {
  if (H1) return md;
  H1 = 1;
  var e = eS(), t = Qt(), r = oF(), n = ht(), a = Hs();
  function i(o, s, u) {
    var c = n(o) ? e : r;
    return u && a(o, s, u) && (s = void 0), c(o, t(s, 3));
  }
  return md = i, md;
}
var uF = sF();
const cF = /* @__PURE__ */ Ae(uF);
var Xt = function(t, r) {
  var n = t.alwaysShow, a = t.ifOverflow;
  return n && (a = "extendDomain"), a === r;
}, gd, V1;
function lF() {
  if (V1) return gd;
  V1 = 1;
  var e = YS();
  function t(r, n, a) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: a,
      writable: !0
    }) : r[n] = a;
  }
  return gd = t, gd;
}
var bd, K1;
function fF() {
  if (K1) return bd;
  K1 = 1;
  var e = lF(), t = KS(), r = Qt();
  function n(a, i) {
    var o = {};
    return i = r(i, 3), t(a, function(s, u, c) {
      e(o, u, i(s, u, c));
    }), o;
  }
  return bd = n, bd;
}
var dF = fF();
const pF = /* @__PURE__ */ Ae(dF);
var xd, G1;
function hF() {
  if (G1) return xd;
  G1 = 1;
  function e(t, r) {
    for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return xd = e, xd;
}
var wd, Y1;
function vF() {
  if (Y1) return wd;
  Y1 = 1;
  var e = Zh();
  function t(r, n) {
    var a = !0;
    return e(r, function(i, o, s) {
      return a = !!n(i, o, s), a;
    }), a;
  }
  return wd = t, wd;
}
var Od, X1;
function yF() {
  if (X1) return Od;
  X1 = 1;
  var e = hF(), t = vF(), r = Qt(), n = ht(), a = Hs();
  function i(o, s, u) {
    var c = n(o) ? e : t;
    return u && a(o, s, u) && (s = void 0), c(o, r(s, 3));
  }
  return Od = i, Od;
}
var mF = yF();
const LA = /* @__PURE__ */ Ae(mF);
var gF = ["x", "y"];
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function Wp() {
  return Wp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wp.apply(this, arguments);
}
function Z1(e, t) {
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
    t % 2 ? Z1(Object(r), !0).forEach(function(n) {
      bF(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bF(e, t, r) {
  return t = xF(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xF(e) {
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
  return (t === "string" ? String : Number)(e);
}
function OF(e, t) {
  if (e == null) return {};
  var r = SF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function SF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function _F(e, t) {
  var r = e.x, n = e.y, a = OF(e, gF), i = "".concat(r), o = parseInt(i, 10), s = "".concat(n), u = parseInt(s, 10), c = "".concat(t.height || a.height), l = parseInt(c, 10), f = "".concat(t.width || a.width), d = parseInt(f, 10);
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
function J1(e) {
  return /* @__PURE__ */ C.createElement(MA, Wp({
    shapeType: "rectangle",
    propTransformer: _F,
    activeClassName: "recharts-active-bar"
  }, e));
}
var AF = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, a) {
    if (typeof t == "number") return t;
    var i = typeof n == "number";
    return i ? t(n, a) : (i || (process.env.NODE_ENV !== "production" ? dt(!1, "minPointSize callback function received a value with type of ".concat(Hn(n), ". Currently only numbers are supported.")) : dt()), r);
  };
}, PF = ["value", "background"], qA;
function Vn(e) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vn(e);
}
function TF(e, t) {
  if (e == null) return {};
  var r = EF(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function EF(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ds.apply(this, arguments);
}
function Q1(e, t) {
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
    t % 2 ? Q1(Object(r), !0).forEach(function(n) {
      Or(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ew(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, FA(n.key), n);
  }
}
function jF(e, t, r) {
  return t && ew(e.prototype, t), r && ew(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function MF(e, t, r) {
  return t = ps(t), $F(e, BA() ? Reflect.construct(t, r || [], ps(e).constructor) : t.apply(e, r));
}
function $F(e, t) {
  if (t && (Vn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return IF(e);
}
function IF(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (BA = function() {
    return !!e;
  })();
}
function ps(e) {
  return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ps(e);
}
function DF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Up(e, t);
}
function Up(e, t) {
  return Up = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Up(e, t);
}
function Or(e, t, r) {
  return t = FA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FA(e) {
  var t = NF(e, "string");
  return Vn(t) == "symbol" ? t : t + "";
}
function NF(e, t) {
  if (Vn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Vn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var $r = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    CF(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = MF(this, t, [].concat(a)), Or(r, "state", {
      isAnimationFinished: !1
    }), Or(r, "id", un("recharts-bar-")), Or(r, "handleAnimationEnd", function() {
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
  return DF(t, e), jF(t, [{
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
        return /* @__PURE__ */ C.createElement(pe, ds({
          className: "recharts-bar-rectangle"
        }, tn(a.props, f, d), {
          key: "rectangle-".concat(f?.x, "-").concat(f?.y, "-").concat(f?.value)
        }), /* @__PURE__ */ C.createElement(J1, h));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.layout, s = a.isAnimationActive, u = a.animationBegin, c = a.animationDuration, l = a.animationEasing, f = a.animationId, d = this.state.prevData;
      return /* @__PURE__ */ C.createElement(Ft, {
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
            return Be(Be({}, v), {}, {
              x: x(y),
              y: O(y),
              width: m(y),
              height: w(y)
            });
          }
          if (o === "horizontal") {
            var _ = Ve(0, v.height), A = _(y);
            return Be(Be({}, v), {}, {
              y: v.y + v.height - A,
              height: A
            });
          }
          var P = Ve(0, v.width), D = P(y);
          return Be(Be({}, v), {}, {
            width: D
          });
        });
        return /* @__PURE__ */ C.createElement(pe, null, n.renderRectanglesStatically(h));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, a = n.data, i = n.isAnimationActive, o = this.state.prevData;
      return i && a && a.length && (!o || !en(o, a)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(a);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, a = this.props, i = a.data, o = a.dataKey, s = a.activeIndex, u = ie(this.props.background, !1);
      return i.map(function(c, l) {
        c.value;
        var f = c.background, d = TF(c, PF);
        if (!f)
          return null;
        var p = Be(Be(Be(Be(Be({}, d), {}, {
          fill: "#eee"
        }, f), u), tn(n.props, c, l)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: l,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ C.createElement(J1, ds({
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
      var i = this.props, o = i.data, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = wt(l, Ki);
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
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(O, m), (!p || v) && Ct.renderCallByParent(this.props, i));
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
})(Mt);
qA = $r;
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
  var t = e.props, r = e.item, n = e.barPosition, a = e.bandSize, i = e.xAxis, o = e.yAxis, s = e.xAxisTicks, u = e.yAxisTicks, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = iL(n, r);
  if (!p)
    return null;
  var y = t.layout, h = r.type.defaultProps, v = h !== void 0 ? Be(Be({}, h), r.props) : r.props, b = v.dataKey, g = v.children, x = v.minPointSize, O = y === "horizontal" ? o : i, m = c ? O.scale.domain() : null, w = dL({
    numericAxis: O
  }), _ = wt(g, Vs), A = f.map(function(P, D) {
    var T, $, M, j, I, N;
    c ? T = oL(c[l + D], m) : (T = Re(P, b), Array.isArray(T) || (T = [w, T]));
    var R = AF(x, qA.defaultProps.minPointSize)(T[1], D);
    if (y === "horizontal") {
      var L, z = [o.scale(T[0]), o.scale(T[1])], k = z[0], B = z[1];
      $ = gx({
        axis: i,
        ticks: s,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: D
      }), M = (L = B ?? k) !== null && L !== void 0 ? L : void 0, j = p.size;
      var q = k - B;
      if (I = Number.isNaN(q) ? 0 : q, N = {
        x: $,
        y: o.y,
        width: j,
        height: o.height
      }, Math.abs(R) > 0 && Math.abs(I) < Math.abs(R)) {
        var H = ot(I || R) * (Math.abs(R) - Math.abs(I));
        M -= H, I += H;
      }
    } else {
      var X = [i.scale(T[0]), i.scale(T[1])], te = X[0], ne = X[1];
      if ($ = te, M = gx({
        axis: o,
        ticks: u,
        bandSize: a,
        offset: p.offset,
        entry: P,
        index: D
      }), j = ne - te, I = p.size, N = {
        x: i.x,
        y: M,
        width: i.width,
        height: I
      }, Math.abs(R) > 0 && Math.abs(j) < Math.abs(R)) {
        var ee = ot(j || R) * (Math.abs(R) - Math.abs(j));
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
      background: N
    }, _ && _[D] && _[D].props), {}, {
      tooltipPayload: [fA(r, P)],
      tooltipPosition: {
        x: $ + j / 2,
        y: M + I / 2
      }
    });
  });
  return Be({
    data: A,
    layout: y
  }, d);
});
function Ci(e) {
  "@babel/helpers - typeof";
  return Ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ci(e);
}
function kF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, zA(n.key), n);
  }
}
function RF(e, t, r) {
  return t && tw(e.prototype, t), r && tw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function rw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rw(Object(r), !0).forEach(function(n) {
      cu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cu(e, t, r) {
  return t = zA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zA(e) {
  var t = LF(e, "string");
  return Ci(t) == "symbol" ? t : t + "";
}
function LF(e, t) {
  if (Ci(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ci(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Tv = function(t, r, n, a, i) {
  var o = t.width, s = t.height, u = t.layout, c = t.children, l = Object.keys(r), f = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: s - n.bottom,
    bottomMirror: s - n.bottom
  }, d = !!mt(c, $r);
  return l.reduce(function(p, y) {
    var h = r[y], v = h.orientation, b = h.domain, g = h.padding, x = g === void 0 ? {} : g, O = h.mirror, m = h.reversed, w = "".concat(v).concat(O ? "Mirror" : ""), _, A, P, D, T;
    if (h.type === "number" && (h.padding === "gap" || h.padding === "no-gap")) {
      var $ = b[1] - b[0], M = 1 / 0, j = h.categoricalDomain.sort();
      if (j.forEach(function(X, te) {
        te > 0 && (M = Math.min((X || 0) - (j[te - 1] || 0), M));
      }), Number.isFinite(M)) {
        var I = M / $, N = h.layout === "vertical" ? n.height : n.width;
        if (h.padding === "gap" && (_ = I * N / 2), h.padding === "no-gap") {
          var R = st(t.barCategoryGap, I * N), L = I * N / 2;
          _ = L - R - (L - R) / N * R;
        }
      }
    }
    a === "xAxis" ? A = [n.left + (x.left || 0) + (_ || 0), n.left + n.width - (x.right || 0) - (_ || 0)] : a === "yAxis" ? A = u === "horizontal" ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)] : [n.top + (x.top || 0) + (_ || 0), n.top + n.height - (x.bottom || 0) - (_ || 0)] : A = h.range, m && (A = [A[1], A[0]]);
    var z = sA(h, i, d), k = z.scale, B = z.realScaleType;
    k.domain(b).range(A), uA(k);
    var q = cA(k, Dt(Dt({}, h), {}, {
      realScaleType: B
    }));
    a === "xAxis" ? (T = v === "top" && !O || v === "bottom" && O, P = n.left, D = f[w] - T * h.height) : a === "yAxis" && (T = v === "left" && !O || v === "right" && O, P = f[w] - T * h.width, D = n.top);
    var H = Dt(Dt(Dt({}, h), q), {}, {
      realScaleType: B,
      x: P,
      y: D,
      scale: k,
      width: a === "xAxis" ? n.width : h.width,
      height: a === "yAxis" ? n.height : h.height
    });
    return H.bandSize = Xo(H, q), !h.hide && a === "xAxis" ? f[w] += (T ? -1 : 1) * H.height : h.hide || (f[w] += (T ? -1 : 1) * H.width), Dt(Dt({}, p), {}, cu({}, y, H));
  }, {});
}, WA = function(t, r) {
  var n = t.x, a = t.y, i = r.x, o = r.y;
  return {
    x: Math.min(n, i),
    y: Math.min(a, o),
    width: Math.abs(i - n),
    height: Math.abs(o - a)
  };
}, qF = function(t) {
  var r = t.x1, n = t.y1, a = t.x2, i = t.y2;
  return WA({
    x: r,
    y: n
  }, {
    x: a,
    y: i
  });
}, UA = /* @__PURE__ */ (function() {
  function e(t) {
    kF(this, e), this.scale = t;
  }
  return RF(e, [{
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
cu(UA, "EPS", 1e-4);
var Ev = function(t) {
  var r = Object.keys(t).reduce(function(n, a) {
    return Dt(Dt({}, n), {}, cu({}, a, UA.create(t[a])));
  }, {});
  return Dt(Dt({}, r), {}, {
    apply: function(a) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.bandAware, s = i.position;
      return pF(a, function(u, c) {
        return r[c].apply(u, {
          bandAware: o,
          position: s
        });
      });
    },
    isInRange: function(a) {
      return LA(a, function(i, o) {
        return r[o].isInRange(i);
      });
    }
  });
};
function BF(e) {
  return (e % 180 + 180) % 180;
}
var FF = function(t) {
  var r = t.width, n = t.height, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = BF(a), o = i * Math.PI / 180, s = Math.atan(n / r), u = o > s && o < Math.PI - s ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(u);
}, Sd, nw;
function zF() {
  if (nw) return Sd;
  nw = 1;
  var e = Qt(), t = Fi(), r = Ls();
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
  return Sd = n, Sd;
}
var _d, aw;
function WF() {
  if (aw) return _d;
  aw = 1;
  var e = DA();
  function t(r) {
    var n = e(r), a = n % 1;
    return n === n ? a ? n - a : n : 0;
  }
  return _d = t, _d;
}
var Ad, iw;
function UF() {
  if (iw) return Ad;
  iw = 1;
  var e = zS(), t = Qt(), r = WF(), n = Math.max;
  function a(i, o, s) {
    var u = i == null ? 0 : i.length;
    if (!u)
      return -1;
    var c = s == null ? 0 : r(s);
    return c < 0 && (c = n(u + c, 0)), e(i, t(o, 3), c);
  }
  return Ad = a, Ad;
}
var Pd, ow;
function HF() {
  if (ow) return Pd;
  ow = 1;
  var e = zF(), t = UF(), r = e(t);
  return Pd = r, Pd;
}
var VF = HF();
const KF = /* @__PURE__ */ Ae(VF);
var GF = hS();
const YF = /* @__PURE__ */ Ae(GF);
var XF = YF(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function hs(e) {
  "@babel/helpers - typeof";
  return hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hs(e);
}
var Cv = /* @__PURE__ */ zt(void 0), jv = /* @__PURE__ */ zt(void 0), HA = /* @__PURE__ */ zt(void 0), VA = /* @__PURE__ */ zt({}), KA = /* @__PURE__ */ zt(void 0), GA = /* @__PURE__ */ zt(0), YA = /* @__PURE__ */ zt(0), sw = function(t) {
  var r = t.state, n = r.xAxisMap, a = r.yAxisMap, i = r.offset, o = t.clipPathId, s = t.children, u = t.width, c = t.height, l = XF(i);
  return /* @__PURE__ */ C.createElement(Cv.Provider, {
    value: n
  }, /* @__PURE__ */ C.createElement(jv.Provider, {
    value: a
  }, /* @__PURE__ */ C.createElement(VA.Provider, {
    value: i
  }, /* @__PURE__ */ C.createElement(HA.Provider, {
    value: l
  }, /* @__PURE__ */ C.createElement(KA.Provider, {
    value: o
  }, /* @__PURE__ */ C.createElement(GA.Provider, {
    value: c
  }, /* @__PURE__ */ C.createElement(YA.Provider, {
    value: u
  }, s)))))));
}, ZF = function() {
  return pt(KA);
};
function XA(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var ZA = function(t) {
  var r = pt(Cv);
  r == null && (process.env.NODE_ENV !== "production" ? dt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : dt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? dt(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(hs(t), "]. ").concat(XA(r))) : dt()), n;
}, JF = function() {
  var t = pt(Cv);
  return xr(t);
}, QF = function() {
  var t = pt(jv), r = KF(t, function(n) {
    return LA(n.domain, Number.isFinite);
  });
  return r || xr(t);
}, JA = function(t) {
  var r = pt(jv);
  r == null && (process.env.NODE_ENV !== "production" ? dt(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : dt());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? dt(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(hs(t), "]. ").concat(XA(r))) : dt()), n;
}, e4 = function() {
  var t = pt(HA);
  return t;
}, t4 = function() {
  return pt(VA);
}, Mv = function() {
  return pt(YA);
}, $v = function() {
  return pt(GA);
};
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function r4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function n4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eP(n.key), n);
  }
}
function a4(e, t, r) {
  return t && n4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function i4(e, t, r) {
  return t = vs(t), o4(e, QA() ? Reflect.construct(t, r || [], vs(e).constructor) : t.apply(e, r));
}
function o4(e, t) {
  if (t && (Kn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return s4(e);
}
function s4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function QA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (QA = function() {
    return !!e;
  })();
}
function vs(e) {
  return vs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, vs(e);
}
function u4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hp(e, t);
}
function Hp(e, t) {
  return Hp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Hp(e, t);
}
function uw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uw(Object(r), !0).forEach(function(n) {
      Iv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Iv(e, t, r) {
  return t = eP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eP(e) {
  var t = c4(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function c4(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function l4(e, t) {
  return h4(e) || p4(e, t) || d4(e, t) || f4();
}
function f4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d4(e, t) {
  if (e) {
    if (typeof e == "string") return lw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lw(e, t);
  }
}
function lw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function p4(e, t) {
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
function h4(e) {
  if (Array.isArray(e)) return e;
}
function Vp() {
  return Vp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vp.apply(this, arguments);
}
var v4 = function(t, r) {
  var n;
  return /* @__PURE__ */ C.isValidElement(t) ? n = /* @__PURE__ */ C.cloneElement(t, r) : ue(t) ? n = t(r) : n = /* @__PURE__ */ C.createElement("line", Vp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, y4 = function(t, r, n, a, i, o, s, u, c) {
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
    return Xt(c, "discard") && cF(m, function(w) {
      return !t.isInRange(w);
    }) ? null : m;
  }
  return null;
};
function m4(e) {
  var t = e.x, r = e.y, n = e.segment, a = e.xAxisId, i = e.yAxisId, o = e.shape, s = e.className, u = e.alwaysShow, c = ZF(), l = ZA(a), f = JA(i), d = e4();
  if (!c || !d)
    return null;
  qt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Ev({
    x: l.scale,
    y: f.scale
  }), y = Ge(t), h = Ge(r), v = n && n.length === 2, b = y4(p, y, h, v, d, e.position, l.orientation, f.orientation, e);
  if (!b)
    return null;
  var g = l4(b, 2), x = g[0], O = x.x, m = x.y, w = g[1], _ = w.x, A = w.y, P = Xt(e, "hidden") ? "url(#".concat(c, ")") : void 0, D = cw(cw({
    clipPath: P
  }, ie(e, !0)), {}, {
    x1: O,
    y1: m,
    x2: _,
    y2: A
  });
  return /* @__PURE__ */ C.createElement(pe, {
    className: de("recharts-reference-line", s)
  }, v4(o, D), Ke.renderCallByParent(e, qF({
    x1: O,
    y1: m,
    x2: _,
    y2: A
  })));
}
var Dv = /* @__PURE__ */ (function(e) {
  function t() {
    return r4(this, t), i4(this, t, arguments);
  }
  return u4(t, e), a4(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(m4, this.props);
    }
  }]);
})(C.Component);
Iv(Dv, "displayName", "ReferenceLine");
Iv(Dv, "defaultProps", {
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
function Kp() {
  return Kp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kp.apply(this, arguments);
}
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
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
function dw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fw(Object(r), !0).forEach(function(n) {
      lu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, rP(n.key), n);
  }
}
function x4(e, t, r) {
  return t && b4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function w4(e, t, r) {
  return t = ys(t), O4(e, tP() ? Reflect.construct(t, r || [], ys(e).constructor) : t.apply(e, r));
}
function O4(e, t) {
  if (t && (Gn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return S4(e);
}
function S4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function tP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (tP = function() {
    return !!e;
  })();
}
function ys(e) {
  return ys = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ys(e);
}
function _4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gp(e, t);
}
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Gp(e, t);
}
function lu(e, t, r) {
  return t = rP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rP(e) {
  var t = A4(e, "string");
  return Gn(t) == "symbol" ? t : t + "";
}
function A4(e, t) {
  if (Gn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var P4 = function(t) {
  var r = t.x, n = t.y, a = t.xAxis, i = t.yAxis, o = Ev({
    x: a.scale,
    y: i.scale
  }), s = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Xt(t, "discard") && !o.isInRange(s) ? null : s;
}, fu = /* @__PURE__ */ (function(e) {
  function t() {
    return g4(this, t), w4(this, t, arguments);
  }
  return _4(t, e), x4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x, i = n.y, o = n.r, s = n.alwaysShow, u = n.clipPathId, c = Ge(a), l = Ge(i);
      if (qt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !l)
        return null;
      var f = P4(this.props);
      if (!f)
        return null;
      var d = f.x, p = f.y, y = this.props, h = y.shape, v = y.className, b = Xt(this.props, "hidden") ? "url(#".concat(u, ")") : void 0, g = dw(dw({
        clipPath: b
      }, ie(this.props, !0)), {}, {
        cx: d,
        cy: p
      });
      return /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-reference-dot", v)
      }, t.renderDot(h, g), Ke.renderCallByParent(this.props, {
        x: d - o,
        y: p - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
})(C.Component);
lu(fu, "displayName", "ReferenceDot");
lu(fu, "defaultProps", {
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
lu(fu, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(Gi, Kp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
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
function Yn(e) {
  "@babel/helpers - typeof";
  return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yn(e);
}
function pw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pw(Object(r), !0).forEach(function(n) {
      du(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function E4(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, aP(n.key), n);
  }
}
function C4(e, t, r) {
  return t && E4(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function j4(e, t, r) {
  return t = ms(t), M4(e, nP() ? Reflect.construct(t, r || [], ms(e).constructor) : t.apply(e, r));
}
function M4(e, t) {
  if (t && (Yn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $4(e);
}
function $4(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (nP = function() {
    return !!e;
  })();
}
function ms(e) {
  return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ms(e);
}
function I4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Xp(e, t);
}
function du(e, t, r) {
  return t = aP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aP(e) {
  var t = D4(e, "string");
  return Yn(t) == "symbol" ? t : t + "";
}
function D4(e, t) {
  if (Yn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Yn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var N4 = function(t, r, n, a, i) {
  var o = i.x1, s = i.x2, u = i.y1, c = i.y2, l = i.xAxis, f = i.yAxis;
  if (!l || !f) return null;
  var d = Ev({
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
  return Xt(i, "discard") && (!d.isInRange(p) || !d.isInRange(y)) ? null : WA(p, y);
}, pu = /* @__PURE__ */ (function(e) {
  function t() {
    return T4(this, t), j4(this, t, arguments);
  }
  return I4(t, e), C4(t, [{
    key: "render",
    value: function() {
      var n = this.props, a = n.x1, i = n.x2, o = n.y1, s = n.y2, u = n.className, c = n.alwaysShow, l = n.clipPathId;
      qt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var f = Ge(a), d = Ge(i), p = Ge(o), y = Ge(s), h = this.props.shape;
      if (!f && !d && !p && !y && !h)
        return null;
      var v = N4(f, d, p, y, this.props);
      if (!v && !h)
        return null;
      var b = Xt(this.props, "hidden") ? "url(#".concat(l, ")") : void 0;
      return /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-reference-area", u)
      }, t.renderRect(h, hw(hw({
        clipPath: b
      }, ie(this.props, !0)), v)), Ke.renderCallByParent(this.props, v));
    }
  }]);
})(C.Component);
du(pu, "displayName", "ReferenceArea");
du(pu, "defaultProps", {
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
du(pu, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ C.isValidElement(e) ? r = /* @__PURE__ */ C.cloneElement(e, t) : ue(e) ? r = e(t) : r = /* @__PURE__ */ C.createElement(Pv, Yp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function iP(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], a = 0; a < e.length; a += t)
    n.push(e[a]);
  return n;
}
function k4(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return FF(n, r);
}
function R4(e, t, r) {
  var n = r === "width", a = e.x, i = e.y, o = e.width, s = e.height;
  return t === 1 ? {
    start: n ? a : i,
    end: n ? a + o : i + s
  } : {
    start: n ? a + o : i + s,
    end: n ? a : i
  };
}
function gs(e, t, r, n, a) {
  if (e * t < e * n || e * t > e * a)
    return !1;
  var i = r();
  return e * (t - e * i / 2 - n) >= 0 && e * (t + e * i / 2 - a) <= 0;
}
function L4(e, t) {
  return iP(e, t + 1);
}
function q4(e, t, r, n, a) {
  for (var i = (n || []).slice(), o = t.start, s = t.end, u = 0, c = 1, l = o, f = function() {
    var y = n?.[u];
    if (y === void 0)
      return {
        v: iP(n, c)
      };
    var h = u, v, b = function() {
      return v === void 0 && (v = r(y, h)), v;
    }, g = y.coordinate, x = u === 0 || gs(e, g, b, l, s);
    x || (u = 0, l = o, c += 1), x && (l = g + e * (b() / 2 + a), u += c);
  }, d; c <= i.length; )
    if (d = f(), d) return d.v;
  return [];
}
function ji(e) {
  "@babel/helpers - typeof";
  return ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ji(e);
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
function rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vw(Object(r), !0).forEach(function(n) {
      B4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B4(e, t, r) {
  return t = F4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function F4(e) {
  var t = z4(e, "string");
  return ji(t) == "symbol" ? t : t + "";
}
function z4(e, t) {
  if (ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function W4(e, t, r, n, a) {
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
    var b = gs(e, p.tickCoord, h, s, u);
    b && (u = p.tickCoord - e * (h() / 2 + a), i[d] = rt(rt({}, p), {}, {
      isShow: !0
    }));
  }, l = o - 1; l >= 0; l--)
    c(l);
  return i;
}
function U4(e, t, r, n, a, i) {
  var o = (n || []).slice(), s = o.length, u = t.start, c = t.end;
  if (i) {
    var l = n[s - 1], f = r(l, s - 1), d = e * (l.coordinate + e * f / 2 - c);
    o[s - 1] = l = rt(rt({}, l), {}, {
      tickCoord: d > 0 ? l.coordinate - d * e : l.coordinate
    });
    var p = gs(e, l.tickCoord, function() {
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
    var _ = gs(e, x.tickCoord, m, u, c);
    _ && (u = x.tickCoord + e * (m() / 2 + a), o[g] = rt(rt({}, x), {}, {
      isShow: !0
    }));
  }, v = 0; v < y; v++)
    h(v);
  return o;
}
function Nv(e, t, r) {
  var n = e.tick, a = e.ticks, i = e.viewBox, o = e.minTickGap, s = e.orientation, u = e.interval, c = e.tickFormatter, l = e.unit, f = e.angle;
  if (!a || !a.length || !n)
    return [];
  if (G(u) || Er.isSsr)
    return L4(a, typeof u == "number" && G(u) ? u : 0);
  var d = [], p = s === "top" || s === "bottom" ? "width" : "height", y = l && p === "width" ? qa(l, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, h = function(x, O) {
    var m = ue(c) ? c(x.value, O) : x.value;
    return p === "width" ? k4(qa(m, {
      fontSize: t,
      letterSpacing: r
    }), y, f) : qa(m, {
      fontSize: t,
      letterSpacing: r
    })[p];
  }, v = a.length >= 2 ? ot(a[1].coordinate - a[0].coordinate) : 1, b = R4(i, v, p);
  return u === "equidistantPreserveStart" ? q4(v, b, h, a, o) : (u === "preserveStart" || u === "preserveStartEnd" ? d = U4(v, b, h, a, o, u === "preserveStartEnd") : d = W4(v, b, h, a, o), d.filter(function(g) {
    return g.isShow;
  }));
}
var H4 = ["viewBox"], V4 = ["viewBox"], K4 = ["ticks"];
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function _n() {
  return _n = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _n.apply(this, arguments);
}
function yw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yw(Object(r), !0).forEach(function(n) {
      kv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Td(e, t) {
  if (e == null) return {};
  var r = G4(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function G4(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Y4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sP(n.key), n);
  }
}
function X4(e, t, r) {
  return t && mw(e.prototype, t), r && mw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Z4(e, t, r) {
  return t = bs(t), J4(e, oP() ? Reflect.construct(t, r || [], bs(e).constructor) : t.apply(e, r));
}
function J4(e, t) {
  if (t && (Xn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Q4(e);
}
function Q4(e) {
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
function e6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zp(e, t);
}
function Zp(e, t) {
  return Zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Zp(e, t);
}
function kv(e, t, r) {
  return t = sP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sP(e) {
  var t = t6(e, "string");
  return Xn(t) == "symbol" ? t : t + "";
}
function t6(e, t) {
  if (Xn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var fa = /* @__PURE__ */ (function(e) {
  function t(r) {
    var n;
    return Y4(this, t), n = Z4(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return e6(t, e), X4(t, [{
    key: "shouldComponentUpdate",
    value: function(n, a) {
      var i = n.viewBox, o = Td(n, H4), s = this.props, u = s.viewBox, c = Td(s, V4);
      return !Pn(i, u) || !Pn(o, c) || !Pn(a, this.state);
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
      var n = this.props, a = n.x, i = n.y, o = n.width, s = n.height, u = n.orientation, c = n.mirror, l = n.axisLine, f = it(it(it({}, ie(this.props, !1)), ie(l, !1)), {}, {
        fill: "none"
      });
      if (u === "top" || u === "bottom") {
        var d = +(u === "top" && !c || u === "bottom" && c);
        f = it(it({}, f), {}, {
          x1: a,
          y1: i + d * s,
          x2: a + o,
          y2: i + d * s
        });
      } else {
        var p = +(u === "left" && !c || u === "right" && c);
        f = it(it({}, f), {}, {
          x1: a + p * o,
          y1: i,
          x2: a + p * o,
          y2: i + s
        });
      }
      return /* @__PURE__ */ C.createElement("line", _n({}, f, {
        className: de("recharts-cartesian-axis-line", xt(l, "className"))
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
        var o = this, s = this.props, u = s.tickLine, c = s.stroke, l = s.tick, f = s.tickFormatter, d = s.unit, p = Nv(it(it({}, this.props), {}, {
          ticks: n
        }), a, i), y = this.getTickTextAnchor(), h = this.getTickVerticalAnchor(), v = ie(this.props, !1), b = ie(l, !1), g = it(it({}, v), {}, {
          fill: "none"
        }, ie(u, !1)), x = p.map(function(O, m) {
          var w = o.getTickLineCoord(O), _ = w.line, A = w.tick, P = it(it(it(it({
            textAnchor: y,
            verticalAnchor: h
          }, v), {}, {
            stroke: "none",
            fill: c
          }, b), A), {}, {
            index: m,
            payload: O,
            visibleTicksCount: p.length,
            tickFormatter: f
          });
          return /* @__PURE__ */ C.createElement(pe, _n({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(O.value, "-").concat(O.coordinate, "-").concat(O.tickCoord)
          }, tn(o.props, O, m)), u && /* @__PURE__ */ C.createElement("line", _n({}, g, _, {
            className: de("recharts-cartesian-axis-tick-line", xt(u, "className"))
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
      var f = this.props, d = f.ticks, p = Td(f, K4), y = d;
      return ue(u) && (y = d && d.length > 0 ? u(this.props) : u(p)), o <= 0 || s <= 0 || !y || !y.length ? null : /* @__PURE__ */ C.createElement(pe, {
        className: de("recharts-cartesian-axis", c),
        ref: function(v) {
          n.layerReference = v;
        }
      }, i && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), Ke.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, a, i) {
      var o;
      return /* @__PURE__ */ C.isValidElement(n) ? o = /* @__PURE__ */ C.cloneElement(n, a) : ue(n) ? o = n(a) : o = /* @__PURE__ */ C.createElement(Ar, _n({}, a, {
        className: "recharts-cartesian-axis-tick-value"
      }), i), o;
    }
  }]);
})(yO);
kv(fa, "displayName", "CartesianAxis");
kv(fa, "defaultProps", {
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
var r6 = ["x1", "y1", "x2", "y2", "key"], n6 = ["offset"];
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function gw(e, t) {
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
    t % 2 ? gw(Object(r), !0).forEach(function(n) {
      a6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gw(Object(r)).forEach(function(n) {
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
  return nn(t) == "symbol" ? t : t + "";
}
function o6(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
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
  if (e == null) return {};
  var r = s6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function s6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var u6 = function(t) {
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
function uP(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = t.x1, a = t.y1, i = t.x2, o = t.y2, s = t.key, u = bw(t, r6), c = ie(u, !1);
    c.offset;
    var l = bw(c, n6);
    r = /* @__PURE__ */ C.createElement("line", Hr({}, l, {
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
function c6(e) {
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
    return uP(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function l6(e) {
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
    return uP(a, c);
  });
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function f6(e) {
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
function d6(e) {
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
var p6 = function(t, r) {
  var n = t.xAxis, a = t.width, i = t.height, o = t.offset;
  return oA(Nv(nt(nt(nt({}, fa.defaultProps), n), {}, {
    ticks: ir(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.left, o.left + o.width, r);
}, h6 = function(t, r) {
  var n = t.yAxis, a = t.width, i = t.height, o = t.offset;
  return oA(Nv(nt(nt(nt({}, fa.defaultProps), n), {}, {
    ticks: ir(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: a,
      height: i
    }
  })), o.top, o.top + o.height, r);
}, mn = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Yi(e) {
  var t, r, n, a, i, o, s = Mv(), u = $v(), c = t4(), l = nt(nt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : mn.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : mn.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : mn.horizontal,
    horizontalFill: (a = e.horizontalFill) !== null && a !== void 0 ? a : mn.horizontalFill,
    vertical: (i = e.vertical) !== null && i !== void 0 ? i : mn.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : mn.verticalFill,
    x: G(e.x) ? e.x : c.left,
    y: G(e.y) ? e.y : c.top,
    width: G(e.width) ? e.width : c.width,
    height: G(e.height) ? e.height : c.height
  }), f = l.x, d = l.y, p = l.width, y = l.height, h = l.syncWithTicks, v = l.horizontalValues, b = l.verticalValues, g = JF(), x = QF();
  if (!G(p) || p <= 0 || !G(y) || y <= 0 || !G(f) || f !== +f || !G(d) || d !== +d)
    return null;
  var O = l.verticalCoordinatesGenerator || p6, m = l.horizontalCoordinatesGenerator || h6, w = l.horizontalPoints, _ = l.verticalPoints;
  if ((!w || !w.length) && ue(m)) {
    var A = v && v.length, P = m({
      yAxis: x ? nt(nt({}, x), {}, {
        ticks: A ? v : x.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, A ? !0 : h);
    qt(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(nn(P), "]")), Array.isArray(P) && (w = P);
  }
  if ((!_ || !_.length) && ue(O)) {
    var D = b && b.length, T = O({
      xAxis: g ? nt(nt({}, g), {}, {
        ticks: D ? b : g.ticks
      }) : void 0,
      width: s,
      height: u,
      offset: c
    }, D ? !0 : h);
    qt(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(nn(T), "]")), Array.isArray(T) && (_ = T);
  }
  return /* @__PURE__ */ C.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ C.createElement(u6, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ C.createElement(c6, Hr({}, l, {
    offset: c,
    horizontalPoints: w,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(l6, Hr({}, l, {
    offset: c,
    verticalPoints: _,
    xAxis: g,
    yAxis: x
  })), /* @__PURE__ */ C.createElement(f6, Hr({}, l, {
    horizontalPoints: w
  })), /* @__PURE__ */ C.createElement(d6, Hr({}, l, {
    verticalPoints: _
  })));
}
Yi.displayName = "CartesianGrid";
var v6 = ["type", "layout", "connectNulls", "ref"], y6 = ["key"];
function Zn(e) {
  "@babel/helpers - typeof";
  return Zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zn(e);
}
function xw(e, t) {
  if (e == null) return {};
  var r = m6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function m6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
function ww(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ww(Object(r), !0).forEach(function(n) {
      Nt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ww(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gn(e) {
  return w6(e) || x6(e) || b6(e) || g6();
}
function g6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function b6(e, t) {
  if (e) {
    if (typeof e == "string") return Jp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jp(e, t);
  }
}
function x6(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function w6(e) {
  if (Array.isArray(e)) return Jp(e);
}
function Jp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function O6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ow(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lP(n.key), n);
  }
}
function S6(e, t, r) {
  return t && Ow(e.prototype, t), r && Ow(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _6(e, t, r) {
  return t = xs(t), A6(e, cP() ? Reflect.construct(t, r || [], xs(e).constructor) : t.apply(e, r));
}
function A6(e, t) {
  if (t && (Zn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return P6(e);
}
function P6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cP = function() {
    return !!e;
  })();
}
function xs(e) {
  return xs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xs(e);
}
function T6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qp(e, t);
}
function Qp(e, t) {
  return Qp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Qp(e, t);
}
function Nt(e, t, r) {
  return t = lP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lP(e) {
  var t = E6(e, "string");
  return Zn(t) == "symbol" ? t : t + "";
}
function E6(e, t) {
  if (Zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Xi = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    O6(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = _6(this, t, [].concat(a)), Nt(r, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Nt(r, "generateSimpleStrokeDasharray", function(o, s) {
      return "".concat(s, "px ").concat(o - s, "px");
    }), Nt(r, "getStrokeDasharray", function(o, s, u) {
      var c = u.reduce(function(b, g) {
        return b + g;
      });
      if (!c)
        return r.generateSimpleStrokeDasharray(s, o);
      for (var l = Math.floor(o / c), f = o % c, d = s - o, p = [], y = 0, h = 0; y < u.length; h += u[y], ++y)
        if (h + u[y] > f) {
          p = [].concat(gn(u.slice(0, y)), [f - h]);
          break;
        }
      var v = p.length % 2 === 0 ? [0, d] : [d];
      return [].concat(gn(t.repeat(u, l)), gn(p), v).map(function(b) {
        return "".concat(b, "px");
      }).join(", ");
    }), Nt(r, "id", un("recharts-line-")), Nt(r, "pathRef", function(o) {
      r.mainCurve = o;
    }), Nt(r, "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Nt(r, "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return T6(t, e), S6(t, [{
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
      var i = this.props, o = i.points, s = i.xAxis, u = i.yAxis, c = i.layout, l = i.children, f = wt(l, Ki);
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
        var b = vt(vt(vt({
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
      return /* @__PURE__ */ C.createElement(pe, Ha({
        className: "recharts-line-dots",
        key: "dots"
      }, y), p);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, a, i, o) {
      var s = this.props, u = s.type, c = s.layout, l = s.connectNulls;
      s.ref;
      var f = xw(s, v6), d = vt(vt(vt({}, ie(f, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: a ? "url(#clipPath-".concat(i, ")") : null,
        points: n
      }, o), {}, {
        type: u,
        layout: c,
        connectNulls: l
      });
      return /* @__PURE__ */ C.createElement(Jr, Ha({}, d, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, a) {
      var i = this, o = this.props, s = o.points, u = o.strokeDasharray, c = o.isAnimationActive, l = o.animationBegin, f = o.animationDuration, d = o.animationEasing, p = o.animationId, y = o.animateNewValues, h = o.width, v = o.height, b = this.state, g = b.prevPoints, x = b.totalLength;
      return /* @__PURE__ */ C.createElement(Ft, {
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
          var w = g.length / s.length, _ = s.map(function($, M) {
            var j = Math.floor(M * w);
            if (g[j]) {
              var I = g[j], N = Ve(I.x, $.x), R = Ve(I.y, $.y);
              return vt(vt({}, $), {}, {
                x: N(m),
                y: R(m)
              });
            }
            if (y) {
              var L = Ve(h * 2, $.x), z = Ve(v / 2, $.y);
              return vt(vt({}, $), {}, {
                x: L(m),
                y: z(m)
              });
            }
            return vt(vt({}, $), {}, {
              x: $.x,
              y: $.y
            });
          });
          return i.renderCurveStatically(_, n, a);
        }
        var A = Ve(0, x), P = A(m), D;
        if (u) {
          var T = "".concat(u).split(/[,\s]+/gim).map(function($) {
            return parseFloat($);
          });
          D = i.getStrokeDasharray(P, x, T);
        } else
          D = i.generateSimpleStrokeDasharray(x, P);
        return i.renderCurveStatically(s, n, a, {
          strokeDasharray: D
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, a) {
      var i = this.props, o = i.points, s = i.isAnimationActive, u = this.state, c = u.prevPoints, l = u.totalLength;
      return s && o && o.length && (!c && l > 0 || !en(c, o)) ? this.renderCurveWithAnimation(n, a) : this.renderCurveStatically(o, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.xAxis, l = a.yAxis, f = a.top, d = a.left, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, g = s.length === 1, x = de("recharts-line", u), O = c && c.allowDataOverflow, m = l && l.allowDataOverflow, w = O || m, _ = le(v) ? this.id : v, A = (n = ie(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = A.r, D = P === void 0 ? 3 : P, T = A.strokeWidth, $ = T === void 0 ? 2 : T, M = bS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, N = D * 2 + $;
      return /* @__PURE__ */ C.createElement(pe, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(_)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? d : d - p / 2,
        y: m ? f : f - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !I && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(_)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: d - N / 2,
        y: f - N / 2,
        width: p + N,
        height: y + N
      }))) : null, !g && this.renderCurve(w, _), this.renderErrorBar(w, _), (g || o) && this.renderDots(w, I, _), (!h || b) && Ct.renderCallByParent(this.props, s));
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
      for (var i = n.length % 2 !== 0 ? [].concat(gn(n), [0]) : n, o = [], s = 0; s < a; ++s)
        o = [].concat(gn(o), gn(i));
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
        var o = a.key, s = xw(a, y6), u = de("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        i = /* @__PURE__ */ C.createElement(Gi, Ha({
          key: o
        }, s, {
          className: u
        }));
      }
      return i;
    }
  }]);
})(Mt);
Nt(Xi, "displayName", "Line");
Nt(Xi, "defaultProps", {
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
Nt(Xi, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, a = e.xAxisTicks, i = e.yAxisTicks, o = e.dataKey, s = e.bandSize, u = e.displayedData, c = e.offset, l = t.layout, f = u.map(function(d, p) {
    var y = Re(d, o);
    return l === "horizontal" ? {
      x: Yo({
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
      y: Yo({
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
  return vt({
    points: f,
    layout: l
  }, c);
});
var C6 = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], j6 = ["key"], fP;
function Jn(e) {
  "@babel/helpers - typeof";
  return Jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jn(e);
}
function dP(e, t) {
  if (e == null) return {};
  var r = M6(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function M6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Vr() {
  return Vr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vr.apply(this, arguments);
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
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sw(Object(r), !0).forEach(function(n) {
      Kt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _w(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hP(n.key), n);
  }
}
function I6(e, t, r) {
  return t && _w(e.prototype, t), r && _w(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function D6(e, t, r) {
  return t = ws(t), N6(e, pP() ? Reflect.construct(t, r || [], ws(e).constructor) : t.apply(e, r));
}
function N6(e, t) {
  if (t && (Jn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return k6(e);
}
function k6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pP = function() {
    return !!e;
  })();
}
function ws(e) {
  return ws = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ws(e);
}
function R6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && eh(e, t);
}
function eh(e, t) {
  return eh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, eh(e, t);
}
function Kt(e, t, r) {
  return t = hP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hP(e) {
  var t = L6(e, "string");
  return Jn(t) == "symbol" ? t : t + "";
}
function L6(e, t) {
  if (Jn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Ir = /* @__PURE__ */ (function(e) {
  function t() {
    var r;
    $6(this, t);
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    return r = D6(this, t, [].concat(a)), Kt(r, "state", {
      isAnimationFinished: !0
    }), Kt(r, "id", un("recharts-area-")), Kt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), ue(o) && o();
    }), Kt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), ue(o) && o();
    }), r;
  }
  return R6(t, e), I6(t, [{
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
      return /* @__PURE__ */ C.createElement(pe, Vr({
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
      var p = dP(s, C6);
      return /* @__PURE__ */ C.createElement(pe, {
        clipPath: i ? "url(#clipPath-".concat(o, ")") : null
      }, /* @__PURE__ */ C.createElement(Jr, Vr({}, ie(p, !0), {
        points: n,
        connectNulls: f,
        type: c,
        baseLine: a,
        layout: u,
        stroke: "none",
        className: "recharts-area-area"
      })), l !== "none" && /* @__PURE__ */ C.createElement(Jr, Vr({}, ie(this.props, !1), {
        className: "recharts-area-curve",
        layout: u,
        type: c,
        connectNulls: f,
        fill: "none",
        points: n
      })), l !== "none" && d && /* @__PURE__ */ C.createElement(Jr, Vr({}, ie(this.props, !1), {
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
      return /* @__PURE__ */ C.createElement(Ft, {
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
          var x = h.length / s.length, O = s.map(function(A, P) {
            var D = Math.floor(P * x);
            if (h[D]) {
              var T = h[D], $ = Ve(T.x, A.x), M = Ve(T.y, A.y);
              return gr(gr({}, A), {}, {
                x: $(g),
                y: M(g)
              });
            }
            return A;
          }), m;
          if (G(u) && typeof u == "number") {
            var w = Ve(v, u);
            m = w(g);
          } else if (le(u) || oa(u)) {
            var _ = Ve(v, 0);
            m = _(g);
          } else
            m = u.map(function(A, P) {
              var D = Math.floor(P * x);
              if (v[D]) {
                var T = v[D], $ = Ve(T.x, A.x), M = Ve(T.y, A.y);
                return gr(gr({}, A), {}, {
                  x: $(g),
                  y: M(g)
                });
              }
              return A;
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
      return u && o && o.length && (!l && d > 0 || !en(l, o) || !en(f, s)) ? this.renderAreaWithAnimation(n, a) : this.renderAreaStatically(o, s, n, a);
    }
  }, {
    key: "render",
    value: function() {
      var n, a = this.props, i = a.hide, o = a.dot, s = a.points, u = a.className, c = a.top, l = a.left, f = a.xAxis, d = a.yAxis, p = a.width, y = a.height, h = a.isAnimationActive, v = a.id;
      if (i || !s || !s.length)
        return null;
      var b = this.state.isAnimationFinished, g = s.length === 1, x = de("recharts-area", u), O = f && f.allowDataOverflow, m = d && d.allowDataOverflow, w = O || m, _ = le(v) ? this.id : v, A = (n = ie(o, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, P = A.r, D = P === void 0 ? 3 : P, T = A.strokeWidth, $ = T === void 0 ? 2 : T, M = bS(o) ? o : {}, j = M.clipDot, I = j === void 0 ? !0 : j, N = D * 2 + $;
      return /* @__PURE__ */ C.createElement(pe, {
        className: x
      }, O || m ? /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-".concat(_)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: O ? l : l - p / 2,
        y: m ? c : c - y / 2,
        width: O ? p : p * 2,
        height: m ? y : y * 2
      })), !I && /* @__PURE__ */ C.createElement("clipPath", {
        id: "clipPath-dots-".concat(_)
      }, /* @__PURE__ */ C.createElement("rect", {
        x: l - N / 2,
        y: c - N / 2,
        width: p + N,
        height: y + N
      }))) : null, g ? null : this.renderArea(w, _), (o || g) && this.renderDots(w, I, _), (!h || b) && Ct.renderCallByParent(this.props, s));
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
})(Mt);
fP = Ir;
Kt(Ir, "displayName", "Area");
Kt(Ir, "defaultProps", {
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
Kt(Ir, "getBaseValue", function(e, t, r, n) {
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
Kt(Ir, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, a = e.yAxis, i = e.xAxisTicks, o = e.yAxisTicks, s = e.bandSize, u = e.dataKey, c = e.stackedData, l = e.dataStartIndex, f = e.displayedData, d = e.offset, p = t.layout, y = c && c.length, h = fP.getBaseValue(t, r, n, a), v = p === "horizontal", b = !1, g = f.map(function(O, m) {
    var w;
    y ? w = c[l + m] : (w = Re(O, u), Array.isArray(w) ? b = !0 : w = [h, w]);
    var _ = w[1] == null || y && Re(O, u) == null;
    return v ? {
      x: Yo({
        axis: n,
        ticks: i,
        bandSize: s,
        entry: O,
        index: m
      }),
      y: _ ? null : a.scale(w[1]),
      value: w,
      payload: O
    } : {
      x: _ ? null : n.scale(w[1]),
      y: Yo({
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
Kt(Ir, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ C.isValidElement(e))
    r = /* @__PURE__ */ C.cloneElement(e, t);
  else if (ue(e))
    r = e(t);
  else {
    var n = de("recharts-area-dot", typeof e != "boolean" ? e.className : ""), a = t.key, i = dP(t, j6);
    r = /* @__PURE__ */ C.createElement(Gi, Vr({}, i, {
      key: a,
      className: n
    }));
  }
  return r;
});
function Qn(e) {
  "@babel/helpers - typeof";
  return Qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qn(e);
}
function q6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function B6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, mP(n.key), n);
  }
}
function F6(e, t, r) {
  return t && B6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function z6(e, t, r) {
  return t = Os(t), W6(e, vP() ? Reflect.construct(t, r || [], Os(e).constructor) : t.apply(e, r));
}
function W6(e, t) {
  if (t && (Qn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return U6(e);
}
function U6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vP = function() {
    return !!e;
  })();
}
function Os(e) {
  return Os = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Os(e);
}
function H6(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && th(e, t);
}
function th(e, t) {
  return th = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, th(e, t);
}
function yP(e, t, r) {
  return t = mP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mP(e) {
  var t = V6(e, "string");
  return Qn(t) == "symbol" ? t : t + "";
}
function V6(e, t) {
  if (Qn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function rh() {
  return rh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rh.apply(this, arguments);
}
function K6(e) {
  var t = e.xAxisId, r = Mv(), n = $v(), a = ZA(t);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(fa, rh({}, a, {
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
    return q6(this, t), z6(this, t, arguments);
  }
  return H6(t, e), F6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(K6, this.props);
    }
  }]);
})(C.Component);
yP(vr, "displayName", "XAxis");
yP(vr, "defaultProps", {
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
function ea(e) {
  "@babel/helpers - typeof";
  return ea = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ea(e);
}
function G6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Y6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, xP(n.key), n);
  }
}
function X6(e, t, r) {
  return t && Y6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Z6(e, t, r) {
  return t = Ss(t), J6(e, gP() ? Reflect.construct(t, r || [], Ss(e).constructor) : t.apply(e, r));
}
function J6(e, t) {
  if (t && (ea(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Q6(e);
}
function Q6(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gP = function() {
    return !!e;
  })();
}
function Ss(e) {
  return Ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ss(e);
}
function e8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nh(e, t);
}
function nh(e, t) {
  return nh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, nh(e, t);
}
function bP(e, t, r) {
  return t = xP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xP(e) {
  var t = t8(e, "string");
  return ea(t) == "symbol" ? t : t + "";
}
function t8(e, t) {
  if (ea(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ea(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ah() {
  return ah = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ah.apply(this, arguments);
}
var r8 = function(t) {
  var r = t.yAxisId, n = Mv(), a = $v(), i = JA(r);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ C.createElement(fa, ah({}, i, {
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
    return G6(this, t), Z6(this, t, arguments);
  }
  return e8(t, e), X6(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ C.createElement(r8, this.props);
    }
  }]);
})(C.Component);
bP(yr, "displayName", "YAxis");
bP(yr, "defaultProps", {
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
  return o8(e) || i8(e) || a8(e) || n8();
}
function n8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a8(e, t) {
  if (e) {
    if (typeof e == "string") return ih(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ih(e, t);
  }
}
function i8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function o8(e) {
  if (Array.isArray(e)) return ih(e);
}
function ih(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var oh = function(t, r, n, a, i) {
  var o = wt(t, Dv), s = wt(t, fu), u = [].concat(Aw(o), Aw(s)), c = wt(t, pu), l = "".concat(a, "Id"), f = a[0], d = r;
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
}, Ed = { exports: {} }, Pw;
function s8() {
  return Pw || (Pw = 1, (function(e) {
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
  })(Ed)), Ed.exports;
}
var u8 = s8();
const c8 = /* @__PURE__ */ Ae(u8);
var Cd = new c8(), jd = "recharts.syncMouseEvents";
function Mi(e) {
  "@babel/helpers - typeof";
  return Mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mi(e);
}
function l8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, wP(n.key), n);
  }
}
function d8(e, t, r) {
  return t && f8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Md(e, t, r) {
  return t = wP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wP(e) {
  var t = p8(e, "string");
  return Mi(t) == "symbol" ? t : t + "";
}
function p8(e, t) {
  if (Mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var h8 = /* @__PURE__ */ (function() {
  function e() {
    l8(this, e), Md(this, "activeIndex", 0), Md(this, "coordinateList", []), Md(this, "layout", "horizontal");
  }
  return d8(e, [{
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
function v8(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], a = e?.[1];
    if (n && a && G(n) && G(a))
      return !0;
  }
  return !1;
}
function y8(e, t, r, n) {
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
function OP(e) {
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
function m8(e, t, r) {
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
      return OP(t);
  return [{
    x: n,
    y: a
  }, {
    x: i,
    y: o
  }];
}
function $i(e) {
  "@babel/helpers - typeof";
  return $i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $i(e);
}
function Tw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function go(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tw(Object(r), !0).forEach(function(n) {
      g8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g8(e, t, r) {
  return t = b8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b8(e) {
  var t = x8(e, "string");
  return $i(t) == "symbol" ? t : t + "";
}
function x8(e, t) {
  if ($i(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if ($i(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function w8(e) {
  var t, r, n = e.element, a = e.tooltipEventType, i = e.isActive, o = e.activeCoordinate, s = e.activePayload, u = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName, p = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !p || !i || !o || d !== "ScatterChart" && a !== "axis")
    return null;
  var y, h = Jr;
  if (d === "ScatterChart")
    y = o, h = I3;
  else if (d === "BarChart")
    y = y8(f, o, u, l), h = Pv;
  else if (f === "radial") {
    var v = OP(o), b = v.cx, g = v.cy, x = v.radius, O = v.startAngle, m = v.endAngle;
    y = {
      cx: b,
      cy: g,
      startAngle: O,
      endAngle: m,
      innerRadius: x,
      outerRadius: x
    }, h = mA;
  } else
    y = {
      points: m8(f, o, u)
    }, h = Jr;
  var w = go(go(go(go({
    stroke: "#ccc",
    pointerEvents: "none"
  }, u), y), ie(p, !1)), {}, {
    payload: s,
    payloadIndex: c,
    className: de("recharts-tooltip-cursor", p.className)
  });
  return /* @__PURE__ */ Rt(p) ? /* @__PURE__ */ Ue(p, w) : /* @__PURE__ */ vO(h, w);
}
var O8 = ["item"], S8 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ta(e) {
  "@babel/helpers - typeof";
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ta(e);
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
function Ew(e, t) {
  return P8(e) || A8(e, t) || _P(e, t) || _8();
}
function _8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A8(e, t) {
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
function P8(e) {
  if (Array.isArray(e)) return e;
}
function Cw(e, t) {
  if (e == null) return {};
  var r = T8(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function T8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function E8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function C8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, AP(n.key), n);
  }
}
function j8(e, t, r) {
  return t && C8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function M8(e, t, r) {
  return t = _s(t), $8(e, SP() ? Reflect.construct(t, r || [], _s(e).constructor) : t.apply(e, r));
}
function $8(e, t) {
  if (t && (ta(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return I8(e);
}
function I8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function SP() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (SP = function() {
    return !!e;
  })();
}
function _s(e) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _s(e);
}
function D8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sh(e, t);
}
function sh(e, t) {
  return sh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, sh(e, t);
}
function ra(e) {
  return R8(e) || k8(e) || _P(e) || N8();
}
function N8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _P(e, t) {
  if (e) {
    if (typeof e == "string") return uh(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return uh(e, t);
  }
}
function k8(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function R8(e) {
  if (Array.isArray(e)) return uh(e);
}
function uh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jw(e, t) {
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
    t % 2 ? jw(Object(r), !0).forEach(function(n) {
      se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function se(e, t, r) {
  return t = AP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AP(e) {
  var t = L8(e, "string");
  return ta(t) == "symbol" ? t : t + "";
}
function L8(e, t) {
  if (ta(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ta(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var q8 = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, B8 = {
  width: "100%",
  height: "100%"
}, PP = {
  x: 0,
  y: 0
};
function bo(e) {
  return e;
}
var F8 = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, z8 = function(t, r, n, a) {
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
  return PP;
}, hu = function(t, r) {
  var n = r.graphicalItems, a = r.dataStartIndex, i = r.dataEndIndex, o = (n ?? []).reduce(function(s, u) {
    var c = u.props.data;
    return c && c.length ? [].concat(ra(s), ra(c)) : s;
  }, []);
  return o.length > 0 ? o : t && t.length && G(a) && G(i) ? t.slice(a, i + 1) : [];
};
function TP(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var ch = function(t, r, n, a) {
  var i = t.graphicalItems, o = t.tooltipAxis, s = hu(r, t);
  return n < 0 || !i || !i.length || n >= s.length ? null : i.reduce(function(u, c) {
    var l, f = (l = c.props.data) !== null && l !== void 0 ? l : r;
    f && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (f = f.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = f === void 0 ? s : f;
      d = _o(p, o.dataKey, a);
    } else
      d = f && f[n] || s[n];
    return d ? [].concat(ra(u), [fA(c, d)]) : u;
  }, []);
}, Mw = function(t, r, n, a) {
  var i = a || {
    x: t.chartX,
    y: t.chartY
  }, o = F8(i, n), s = t.orderedTooltipTicks, u = t.tooltipAxis, c = t.tooltipTicks, l = QR(o, s, c, u);
  if (l >= 0 && c) {
    var f = c[l] && c[l].value, d = ch(t, r, l, f), p = z8(n, s, l, i);
    return {
      activeTooltipIndex: l,
      activeLabel: f,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, W8 = function(t, r) {
  var n = r.axes, a = r.graphicalItems, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = t.stackOffset, p = iA(l, i);
  return n.reduce(function(y, h) {
    var v, b = h.type.defaultProps !== void 0 ? W(W({}, h.type.defaultProps), h.props) : h.props, g = b.type, x = b.dataKey, O = b.allowDataOverflow, m = b.allowDuplicatedCategory, w = b.scale, _ = b.ticks, A = b.includeHidden, P = b[o];
    if (y[P])
      return y;
    var D = hu(t.data, {
      graphicalItems: a.filter(function(q) {
        var H, X = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o];
        return X === P;
      }),
      dataStartIndex: u,
      dataEndIndex: c
    }), T = D.length, $, M, j;
    v8(b.domain, O, g) && ($ = Op(b.domain, null, O), p && (g === "number" || w !== "auto") && (j = Fa(D, x, "category")));
    var I = TP(g);
    if (!$ || $.length === 0) {
      var N, R = (N = b.domain) !== null && N !== void 0 ? N : I;
      if (x) {
        if ($ = Fa(D, x, g), g === "category" && p) {
          var L = _2($);
          m && L ? (M = $, $ = cs(0, T)) : m || ($ = wx(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 ? q : [].concat(ra(q), [H]);
          }, []));
        } else if (g === "category")
          m ? $ = $.filter(function(q) {
            return q !== "" && !le(q);
          }) : $ = wx(R, $, h).reduce(function(q, H) {
            return q.indexOf(H) >= 0 || H === "" || le(H) ? q : [].concat(ra(q), [H]);
          }, []);
        else if (g === "number") {
          var z = aL(D, a.filter(function(q) {
            var H, X, te = o in q.props ? q.props[o] : (H = q.type.defaultProps) === null || H === void 0 ? void 0 : H[o], ne = "hide" in q.props ? q.props.hide : (X = q.type.defaultProps) === null || X === void 0 ? void 0 : X.hide;
            return te === P && (A || !ne);
          }), x, i, l);
          z && ($ = z);
        }
        p && (g === "number" || w !== "auto") && (j = Fa(D, x, "category"));
      } else p ? $ = cs(0, T) : s && s[P] && s[P].hasStack && g === "number" ? $ = d === "expand" ? [0, 1] : lA(s[P].stackGroups, u, c) : $ = aA(D, a.filter(function(q) {
        var H = o in q.props ? q.props[o] : q.type.defaultProps[o], X = "hide" in q.props ? q.props.hide : q.type.defaultProps.hide;
        return H === P && (A || !X);
      }), g, l, !0);
      if (g === "number")
        $ = oh(f, $, P, i, _), R && ($ = Op(R, $, O));
      else if (g === "category" && R) {
        var k = R, B = $.every(function(q) {
          return k.indexOf(q) >= 0;
        });
        B && ($ = k);
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
}, U8 = function(t, r) {
  var n = r.graphicalItems, a = r.Axis, i = r.axisType, o = r.axisIdKey, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.layout, f = t.children, d = hu(t.data, {
    graphicalItems: n,
    dataStartIndex: u,
    dataEndIndex: c
  }), p = d.length, y = iA(l, i), h = -1;
  return n.reduce(function(v, b) {
    var g = b.type.defaultProps !== void 0 ? W(W({}, b.type.defaultProps), b.props) : b.props, x = g[o], O = TP("number");
    if (!v[x]) {
      h++;
      var m;
      return y ? m = cs(0, p) : s && s[x] && s[x].hasStack ? (m = lA(s[x].stackGroups, u, c), m = oh(f, m, x, i)) : (m = Op(O, aA(d, n.filter(function(w) {
        var _, A, P = o in w.props ? w.props[o] : (_ = w.type.defaultProps) === null || _ === void 0 ? void 0 : _[o], D = "hide" in w.props ? w.props.hide : (A = w.type.defaultProps) === null || A === void 0 ? void 0 : A.hide;
        return P === x && !D;
      }), "number", l), a.defaultProps.allowDataOverflow), m = oh(f, m, x, i)), W(W({}, v), {}, se({}, x, W(W({
        axisType: i
      }, a.defaultProps), {}, {
        hide: !0,
        orientation: xt(q8, "".concat(i, ".").concat(h % 2), null),
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
}, H8 = function(t, r) {
  var n = r.axisType, a = n === void 0 ? "xAxis" : n, i = r.AxisComp, o = r.graphicalItems, s = r.stackGroups, u = r.dataStartIndex, c = r.dataEndIndex, l = t.children, f = "".concat(a, "Id"), d = wt(l, i), p = {};
  return d && d.length ? p = W8(t, {
    axes: d,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  }) : o && o.length && (p = U8(t, {
    Axis: i,
    graphicalItems: o,
    axisType: a,
    axisIdKey: f,
    stackGroups: s,
    dataStartIndex: u,
    dataEndIndex: c
  })), p;
}, V8 = function(t) {
  var r = xr(t), n = ir(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Jh(n, function(a) {
      return a.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Xo(r, n)
  };
}, $w = function(t) {
  var r = t.children, n = t.defaultShowTooltip, a = mt(r, Un), i = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), a && a.props && (a.props.startIndex >= 0 && (i = a.props.startIndex), a.props.endIndex >= 0 && (o = a.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: i,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, K8 = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = or(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Iw = function(t) {
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
}, G8 = function(t, r) {
  var n = t.props, a = t.graphicalItems, i = t.xAxisMap, o = i === void 0 ? {} : i, s = t.yAxisMap, u = s === void 0 ? {} : s, c = n.width, l = n.height, f = n.children, d = n.margin || {}, p = mt(f, Un), y = mt(f, Yr), h = Object.keys(u).reduce(function(m, w) {
    var _ = u[w], A = _.orientation;
    return !_.mirror && !_.hide ? W(W({}, m), {}, se({}, A, m[A] + _.width)) : m;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), v = Object.keys(o).reduce(function(m, w) {
    var _ = o[w], A = _.orientation;
    return !_.mirror && !_.hide ? W(W({}, m), {}, se({}, A, xt(m, "".concat(A)) + _.height)) : m;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), b = W(W({}, v), h), g = b.bottom;
  p && (b.bottom += p.props.height || Un.defaultProps.height), y && r && (b = rL(b, a, n, r));
  var x = c - b.left - b.right, O = l - b.top - b.bottom;
  return W(W({
    brushBottom: g
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(x, 0),
    height: Math.max(O, 0)
  });
}, Y8 = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, vu = function(t) {
  var r = t.chartName, n = t.GraphicalChild, a = t.defaultTooltipEventType, i = a === void 0 ? "axis" : a, o = t.validateTooltipEventTypes, s = o === void 0 ? ["axis"] : o, u = t.axisComponents, c = t.legendContent, l = t.formatAxisMap, f = t.defaultProps, d = function(b, g) {
    var x = g.graphicalItems, O = g.stackGroups, m = g.offset, w = g.updateId, _ = g.dataStartIndex, A = g.dataEndIndex, P = b.barSize, D = b.layout, T = b.barGap, $ = b.barCategoryGap, M = b.maxBarSize, j = Iw(D), I = j.numericAxisName, N = j.cateAxisName, R = K8(x), L = [];
    return x.forEach(function(z, k) {
      var B = hu(b.data, {
        graphicalItems: [z],
        dataStartIndex: _,
        dataEndIndex: A
      }), q = z.type.defaultProps !== void 0 ? W(W({}, z.type.defaultProps), z.props) : z.props, H = q.dataKey, X = q.maxBarSize, te = q["".concat(I, "Id")], ne = q["".concat(N, "Id")], ee = {}, Q = u.reduce(function(ye, qe) {
        var er, dn, pn = g["".concat(qe.axisType, "Map")], eo = q["".concat(qe.axisType, "Id")];
        pn && pn[eo] || qe.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? dt(!1, "Specifying a(n) ".concat(qe.axisType, "Id requires a corresponding ").concat(
          qe.axisType,
          "Id on the targeted graphical component "
        ).concat((er = z == null || (dn = z.type) === null || dn === void 0 ? void 0 : dn.displayName) !== null && er !== void 0 ? er : "")) : dt());
        var ga = pn[eo];
        return W(W({}, ye), {}, se(se({}, qe.axisType, ga), "".concat(qe.axisType, "Ticks"), ir(ga)));
      }, ee), U = Q[N], K = Q["".concat(N, "Ticks")], Z = O && O[te] && O[te].hasStack && pL(z, O[te].stackGroups), E = or(z.type).indexOf("Bar") >= 0, Y = Xo(U, K), F = [], ae = R && eL({
        barSize: P,
        stackGroups: O,
        totalSize: Y8(Q, N)
      });
      if (E) {
        var ce, oe, Se = le(X) ? M : X, Te = (ce = (oe = Xo(U, K, !0)) !== null && oe !== void 0 ? oe : Se) !== null && ce !== void 0 ? ce : 0;
        F = tL({
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
          layout: D,
          dataStartIndex: _,
          dataEndIndex: A
        }))), {}, se(se(se({
          key: z.key || "item-".concat(k)
        }, I, Q[I]), N, Q[N]), "animationId", w)),
        childIndex: N2(z, b.children),
        item: z
      });
    }), L;
  }, p = function(b, g) {
    var x = b.props, O = b.dataStartIndex, m = b.dataEndIndex, w = b.updateId;
    if (!Mg({
      props: x
    }))
      return null;
    var _ = x.children, A = x.layout, P = x.stackOffset, D = x.data, T = x.reverseStackOrder, $ = Iw(A), M = $.numericAxisName, j = $.cateAxisName, I = wt(_, n), N = fL(D, I, "".concat(M, "Id"), "".concat(j, "Id"), P, T), R = u.reduce(function(q, H) {
      var X = "".concat(H.axisType, "Map");
      return W(W({}, q), {}, se({}, X, H8(x, W(W({}, H), {}, {
        graphicalItems: I,
        stackGroups: H.axisType === M && N,
        dataStartIndex: O,
        dataEndIndex: m
      }))));
    }, {}), L = G8(W(W({}, R), {}, {
      props: x,
      graphicalItems: I
    }), g?.legendBBox);
    Object.keys(R).forEach(function(q) {
      R[q] = l(x, R[q], L, q.replace("Map", ""), r);
    });
    var z = R["".concat(j, "Map")], k = V8(z), B = d(x, W(W({}, R), {}, {
      dataStartIndex: O,
      dataEndIndex: m,
      updateId: w,
      graphicalItems: I,
      stackGroups: N,
      offset: L
    }));
    return W(W({
      formattedGraphicalItems: B,
      graphicalItems: I,
      offset: L,
      stackGroups: N
    }, k), R);
  }, y = /* @__PURE__ */ (function(v) {
    function b(g) {
      var x, O, m;
      return E8(this, b), m = M8(this, b, [g]), se(m, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), se(m, "accessibilityManager", new h8()), se(m, "handleLegendBBoxUpdate", function(w) {
        if (w) {
          var _ = m.state, A = _.dataStartIndex, P = _.dataEndIndex, D = _.updateId;
          m.setState(W({
            legendBBox: w
          }, p({
            props: m.props,
            dataStartIndex: A,
            dataEndIndex: P,
            updateId: D
          }, W(W({}, m.state), {}, {
            legendBBox: w
          }))));
        }
      }), se(m, "handleReceiveSyncEvent", function(w, _, A) {
        if (m.props.syncId === w) {
          if (A === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(_);
        }
      }), se(m, "handleBrushChange", function(w) {
        var _ = w.startIndex, A = w.endIndex;
        if (_ !== m.state.dataStartIndex || A !== m.state.dataEndIndex) {
          var P = m.state.updateId;
          m.setState(function() {
            return W({
              dataStartIndex: _,
              dataEndIndex: A
            }, p({
              props: m.props,
              dataStartIndex: _,
              dataEndIndex: A,
              updateId: P
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: _,
            dataEndIndex: A
          });
        }
      }), se(m, "handleMouseEnter", function(w) {
        var _ = m.getMouseInfo(w);
        if (_) {
          var A = W(W({}, _), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var P = m.props.onMouseEnter;
          ue(P) && P(A, w);
        }
      }), se(m, "triggeredAfterMouseMove", function(w) {
        var _ = m.getMouseInfo(w), A = _ ? W(W({}, _), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(A), m.triggerSyncEvent(A);
        var P = m.props.onMouseMove;
        ue(P) && P(A, w);
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
        var _ = {
          isTooltipActive: !1
        };
        m.setState(_), m.triggerSyncEvent(_);
        var A = m.props.onMouseLeave;
        ue(A) && A(_, w);
      }), se(m, "handleOuterEvent", function(w) {
        var _ = D2(w), A = xt(m.props, "".concat(_));
        if (_ && ue(A)) {
          var P, D;
          /.*touch.*/i.test(_) ? D = m.getMouseInfo(w.changedTouches[0]) : D = m.getMouseInfo(w), A((P = D) !== null && P !== void 0 ? P : {}, w);
        }
      }), se(m, "handleClick", function(w) {
        var _ = m.getMouseInfo(w);
        if (_) {
          var A = W(W({}, _), {}, {
            isTooltipActive: !0
          });
          m.setState(A), m.triggerSyncEvent(A);
          var P = m.props.onClick;
          ue(P) && P(A, w);
        }
      }), se(m, "handleMouseDown", function(w) {
        var _ = m.props.onMouseDown;
        if (ue(_)) {
          var A = m.getMouseInfo(w);
          _(A, w);
        }
      }), se(m, "handleMouseUp", function(w) {
        var _ = m.props.onMouseUp;
        if (ue(_)) {
          var A = m.getMouseInfo(w);
          _(A, w);
        }
      }), se(m, "handleTouchMove", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(w.changedTouches[0]);
      }), se(m, "handleTouchStart", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseDown(w.changedTouches[0]);
      }), se(m, "handleTouchEnd", function(w) {
        w.changedTouches != null && w.changedTouches.length > 0 && m.handleMouseUp(w.changedTouches[0]);
      }), se(m, "handleDoubleClick", function(w) {
        var _ = m.props.onDoubleClick;
        if (ue(_)) {
          var A = m.getMouseInfo(w);
          _(A, w);
        }
      }), se(m, "handleContextMenu", function(w) {
        var _ = m.props.onContextMenu;
        if (ue(_)) {
          var A = m.getMouseInfo(w);
          _(A, w);
        }
      }), se(m, "triggerSyncEvent", function(w) {
        m.props.syncId !== void 0 && Cd.emit(jd, m.props.syncId, w, m.eventEmitterSymbol);
      }), se(m, "applySyncEvent", function(w) {
        var _ = m.props, A = _.layout, P = _.syncMethod, D = m.state.updateId, T = w.dataStartIndex, $ = w.dataEndIndex;
        if (w.dataStartIndex !== void 0 || w.dataEndIndex !== void 0)
          m.setState(W({
            dataStartIndex: T,
            dataEndIndex: $
          }, p({
            props: m.props,
            dataStartIndex: T,
            dataEndIndex: $,
            updateId: D
          }, m.state)));
        else if (w.activeTooltipIndex !== void 0) {
          var M = w.chartX, j = w.chartY, I = w.activeTooltipIndex, N = m.state, R = N.offset, L = N.tooltipTicks;
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
          var k = W(W({}, R), {}, {
            x: R.left,
            y: R.top
          }), B = Math.min(M, k.x + k.width), q = Math.min(j, k.y + k.height), H = L[I] && L[I].value, X = ch(m.state, m.props.data, I), te = L[I] ? {
            x: A === "horizontal" ? L[I].coordinate : B,
            y: A === "horizontal" ? q : L[I].coordinate
          } : PP;
          m.setState(W(W({}, w), {}, {
            activeLabel: H,
            activeCoordinate: te,
            activePayload: X,
            activeTooltipIndex: I
          }));
        } else
          m.setState(w);
      }), se(m, "renderCursor", function(w) {
        var _, A = m.state, P = A.isTooltipActive, D = A.activeCoordinate, T = A.activePayload, $ = A.offset, M = A.activeTooltipIndex, j = A.tooltipAxisBandSize, I = m.getTooltipEventType(), N = (_ = w.props.active) !== null && _ !== void 0 ? _ : P, R = m.props.layout, L = w.key || "_recharts-cursor";
        return /* @__PURE__ */ C.createElement(w8, {
          key: L,
          activeCoordinate: D,
          activePayload: T,
          activeTooltipIndex: M,
          chartName: r,
          element: w,
          isActive: N,
          layout: R,
          offset: $,
          tooltipAxisBandSize: j,
          tooltipEventType: I
        });
      }), se(m, "renderPolarAxis", function(w, _, A) {
        var P = xt(w, "type.axisType"), D = xt(m.state, "".concat(P, "Map")), T = w.type.defaultProps, $ = T !== void 0 ? W(W({}, T), w.props) : w.props, M = D && D[$["".concat(P, "Id")]];
        return /* @__PURE__ */ Ue(w, W(W({}, M), {}, {
          className: de(P, M.className),
          key: w.key || "".concat(_, "-").concat(A),
          ticks: ir(M, !0)
        }));
      }), se(m, "renderPolarGrid", function(w) {
        var _ = w.props, A = _.radialLines, P = _.polarAngles, D = _.polarRadius, T = m.state, $ = T.radiusAxisMap, M = T.angleAxisMap, j = xr($), I = xr(M), N = I.cx, R = I.cy, L = I.innerRadius, z = I.outerRadius;
        return /* @__PURE__ */ Ue(w, {
          polarAngles: Array.isArray(P) ? P : ir(I, !0).map(function(k) {
            return k.coordinate;
          }),
          polarRadius: Array.isArray(D) ? D : ir(j, !0).map(function(k) {
            return k.coordinate;
          }),
          cx: N,
          cy: R,
          innerRadius: L,
          outerRadius: z,
          key: w.key || "polar-grid",
          radialLines: A
        });
      }), se(m, "renderLegend", function() {
        var w = m.state.formattedGraphicalItems, _ = m.props, A = _.children, P = _.width, D = _.height, T = m.props.margin || {}, $ = P - (T.left || 0) - (T.right || 0), M = rA({
          children: A,
          formattedGraphicalItems: w,
          legendWidth: $,
          legendContent: c
        });
        if (!M)
          return null;
        var j = M.item, I = Cw(M, O8);
        return /* @__PURE__ */ Ue(j, W(W({}, I), {}, {
          chartWidth: P,
          chartHeight: D,
          margin: T,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), se(m, "renderTooltip", function() {
        var w, _ = m.props, A = _.children, P = _.accessibilityLayer, D = mt(A, Ut);
        if (!D)
          return null;
        var T = m.state, $ = T.isTooltipActive, M = T.activeCoordinate, j = T.activePayload, I = T.activeLabel, N = T.offset, R = (w = D.props.active) !== null && w !== void 0 ? w : $;
        return /* @__PURE__ */ Ue(D, {
          viewBox: W(W({}, N), {}, {
            x: N.left,
            y: N.top
          }),
          active: R,
          label: I,
          payload: R ? j : [],
          coordinate: M,
          accessibilityLayer: P
        });
      }), se(m, "renderBrush", function(w) {
        var _ = m.props, A = _.margin, P = _.data, D = m.state, T = D.offset, $ = D.dataStartIndex, M = D.dataEndIndex, j = D.updateId;
        return /* @__PURE__ */ Ue(w, {
          key: w.key || "_recharts-brush",
          onChange: fo(m.handleBrushChange, w.props.onChange),
          data: P,
          x: G(w.props.x) ? w.props.x : T.left,
          y: G(w.props.y) ? w.props.y : T.top + T.height + T.brushBottom - (A.bottom || 0),
          width: G(w.props.width) ? w.props.width : T.width,
          startIndex: $,
          endIndex: M,
          updateId: "brush-".concat(j)
        });
      }), se(m, "renderReferenceElement", function(w, _, A) {
        if (!w)
          return null;
        var P = m, D = P.clipPathId, T = m.state, $ = T.xAxisMap, M = T.yAxisMap, j = T.offset, I = w.type.defaultProps || {}, N = w.props, R = N.xAxisId, L = R === void 0 ? I.xAxisId : R, z = N.yAxisId, k = z === void 0 ? I.yAxisId : z;
        return /* @__PURE__ */ Ue(w, {
          key: w.key || "".concat(_, "-").concat(A),
          xAxis: $[L],
          yAxis: M[k],
          viewBox: {
            x: j.left,
            y: j.top,
            width: j.width,
            height: j.height
          },
          clipPathId: D
        });
      }), se(m, "renderActivePoints", function(w) {
        var _ = w.item, A = w.activePoint, P = w.basePoint, D = w.childIndex, T = w.isRange, $ = [], M = _.props.key, j = _.item.type.defaultProps !== void 0 ? W(W({}, _.item.type.defaultProps), _.item.props) : _.item.props, I = j.activeDot, N = j.dataKey, R = W(W({
          index: D,
          dataKey: N,
          cx: A.x,
          cy: A.y,
          r: 4,
          fill: _v(_.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: A.payload,
          value: A.value
        }, ie(I, !1)), Ao(I));
        return $.push(b.renderActiveDot(I, R, "".concat(M, "-activePoint-").concat(D))), P ? $.push(b.renderActiveDot(I, W(W({}, R), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(M, "-basePoint-").concat(D))) : T && $.push(null), $;
      }), se(m, "renderGraphicChild", function(w, _, A) {
        var P = m.filterFormatItem(w, _, A);
        if (!P)
          return null;
        var D = m.getTooltipEventType(), T = m.state, $ = T.isTooltipActive, M = T.tooltipAxis, j = T.activeTooltipIndex, I = T.activeLabel, N = m.props.children, R = mt(N, Ut), L = P.props, z = L.points, k = L.isRange, B = L.baseLine, q = P.item.type.defaultProps !== void 0 ? W(W({}, P.item.type.defaultProps), P.item.props) : P.item.props, H = q.activeDot, X = q.hide, te = q.activeBar, ne = q.activeShape, ee = !!(!X && $ && R && (H || te || ne)), Q = {};
        D !== "axis" && R && R.props.trigger === "click" ? Q = {
          onClick: fo(m.handleItemMouseEnter, w.props.onClick)
        } : D !== "axis" && (Q = {
          onMouseLeave: fo(m.handleItemMouseLeave, w.props.onMouseLeave),
          onMouseEnter: fo(m.handleItemMouseEnter, w.props.onMouseEnter)
        });
        var U = /* @__PURE__ */ Ue(w, W(W({}, P.props), Q));
        function K(qe) {
          return typeof M.dataKey == "function" ? M.dataKey(qe.payload) : null;
        }
        if (ee)
          if (j >= 0) {
            var Z, E;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var Y = typeof M.dataKey == "function" ? K : "payload.".concat(M.dataKey.toString());
              Z = _o(z, Y, I), E = k && B && _o(B, Y, I);
            } else
              Z = z?.[j], E = k && B && B[j];
            if (ne || te) {
              var F = w.props.activeIndex !== void 0 ? w.props.activeIndex : j;
              return [/* @__PURE__ */ Ue(w, W(W(W({}, P.props), Q), {}, {
                activeIndex: F
              })), null, null];
            }
            if (!le(Z))
              return [U].concat(ra(m.renderActivePoints({
                item: P,
                activePoint: Z,
                basePoint: E,
                childIndex: j,
                isRange: k
              })));
          } else {
            var ae, ce = (ae = m.getItemByXY(m.state.activeCoordinate)) !== null && ae !== void 0 ? ae : {
              graphicalItem: U
            }, oe = ce.graphicalItem, Se = oe.item, Te = Se === void 0 ? w : Se, me = oe.childIndex, ye = W(W(W({}, P.props), Q), {}, {
              activeIndex: me
            });
            return [/* @__PURE__ */ Ue(Te, ye), null, null];
          }
        return k ? [U, null, null] : [U, null];
      }), se(m, "renderCustomized", function(w, _, A) {
        return /* @__PURE__ */ Ue(w, W(W({
          key: "recharts-customized-".concat(A)
        }, m.props), m.state));
      }), se(m, "renderMap", {
        CartesianGrid: {
          handler: bo,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: bo
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: bo
        },
        YAxis: {
          handler: bo
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
      }), m.clipPathId = "".concat((x = g.id) !== null && x !== void 0 ? x : un("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = t_(m.triggeredAfterMouseMove, (O = g.throttleDelay) !== null && O !== void 0 ? O : 1e3 / 60), m.state = {}, m;
    }
    return D8(b, v), j8(b, [{
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
        var x = this.props, O = x.children, m = x.data, w = x.height, _ = x.layout, A = mt(O, Ut);
        if (A) {
          var P = A.props.defaultIndex;
          if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
            var D = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, T = ch(this.state, m, P, D), $ = this.state.tooltipTicks[P].coordinate, M = (this.state.offset.top + w) / 2, j = _ === "horizontal", I = j ? {
              x: $,
              y: M
            } : {
              y: $,
              x: M
            }, N = this.state.formattedGraphicalItems.find(function(L) {
              var z = L.item;
              return z.type.name === "Scatter";
            });
            N && (I = W(W({}, I), N.props.points[P].tooltipPosition), T = N.props.points[P].tooltipPayload);
            var R = {
              activeTooltipIndex: P,
              isTooltipActive: !0,
              activeLabel: D,
              activePayload: T,
              activeCoordinate: I
            };
            this.setState(R), this.renderCursor(A), this.accessibilityManager.setIndex(P);
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
        Ud([mt(x.children, Ut)], [mt(this.props.children, Ut)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var x = mt(this.props.children, Ut);
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
        var O = this.container, m = O.getBoundingClientRect(), w = KI(m), _ = {
          chartX: Math.round(x.pageX - w.left),
          chartY: Math.round(x.pageY - w.top)
        }, A = m.width / O.offsetWidth || 1, P = this.inRange(_.chartX, _.chartY, A);
        if (!P)
          return null;
        var D = this.state, T = D.xAxisMap, $ = D.yAxisMap, M = this.getTooltipEventType();
        if (M !== "axis" && T && $) {
          var j = xr(T).scale, I = xr($).scale, N = j && j.invert ? j.invert(_.chartX) : null, R = I && I.invert ? I.invert(_.chartY) : null;
          return W(W({}, _), {}, {
            xValue: N,
            yValue: R
          });
        }
        var L = Mw(this.state, this.props.data, this.props.layout, P);
        return L ? W(W({}, _), L) : null;
      }
    }, {
      key: "inRange",
      value: function(x, O) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, w = this.props.layout, _ = x / m, A = O / m;
        if (w === "horizontal" || w === "vertical") {
          var P = this.state.offset, D = _ >= P.left && _ <= P.left + P.width && A >= P.top && A <= P.top + P.height;
          return D ? {
            x: _,
            y: A
          } : null;
        }
        var T = this.state, $ = T.angleAxisMap, M = T.radiusAxisMap;
        if ($ && M) {
          var j = xr($);
          return _x({
            x: _,
            y: A
          }, j);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var x = this.props.children, O = this.getTooltipEventType(), m = mt(x, Ut), w = {};
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
        var _ = Ao(this.props, this.handleOuterEvent);
        return W(W({}, _), w);
      }
    }, {
      key: "addListener",
      value: function() {
        Cd.on(jd, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Cd.removeListener(jd, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(x, O, m) {
        for (var w = this.state.formattedGraphicalItems, _ = 0, A = w.length; _ < A; _++) {
          var P = w[_];
          if (P.item === x || P.props.key === x.key || O === or(P.item.type) && m === P.childIndex)
            return P;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var x = this.clipPathId, O = this.state.offset, m = O.left, w = O.top, _ = O.height, A = O.width;
        return /* @__PURE__ */ C.createElement("defs", null, /* @__PURE__ */ C.createElement("clipPath", {
          id: x
        }, /* @__PURE__ */ C.createElement("rect", {
          x: m,
          y: w,
          height: _,
          width: A
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var x = this.state.xAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = Ew(m, 2), _ = w[0], A = w[1];
          return W(W({}, O), {}, se({}, _, A.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var x = this.state.yAxisMap;
        return x ? Object.entries(x).reduce(function(O, m) {
          var w = Ew(m, 2), _ = w[0], A = w[1];
          return W(W({}, O), {}, se({}, _, A.scale));
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
          for (var _ = 0, A = m.length; _ < A; _++) {
            var P = m[_], D = P.props, T = P.item, $ = T.type.defaultProps !== void 0 ? W(W({}, T.type.defaultProps), T.props) : T.props, M = or(T.type);
            if (M === "Bar") {
              var j = (D.data || []).find(function(L) {
                return p3(x, L);
              });
              if (j)
                return {
                  graphicalItem: P,
                  payload: j
                };
            } else if (M === "RadialBar") {
              var I = (D.data || []).find(function(L) {
                return _x(x, L);
              });
              if (I)
                return {
                  graphicalItem: P,
                  payload: I
                };
            } else if (su(P, w) || uu(P, w) || Ti(P, w)) {
              var N = k5({
                graphicalItem: P,
                activeTooltipItem: w,
                itemData: $.data
              }), R = $.activeIndex === void 0 ? N : $.activeIndex;
              return {
                graphicalItem: W(W({}, P), {}, {
                  childIndex: R
                }),
                payload: Ti(P, w) ? $.data[N] : P.props.data[N]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var x = this;
        if (!Mg(this))
          return null;
        var O = this.props, m = O.children, w = O.className, _ = O.width, A = O.height, P = O.style, D = O.compact, T = O.title, $ = O.desc, M = Cw(O, S8), j = ie(M, !1);
        if (D)
          return /* @__PURE__ */ C.createElement(sw, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ C.createElement(Vd, An({}, j, {
            width: _,
            height: A,
            title: T,
            desc: $
          }), this.renderClipPath(), Ig(m, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var I, N;
          j.tabIndex = (I = this.props.tabIndex) !== null && I !== void 0 ? I : 0, j.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", j.onKeyDown = function(L) {
            x.accessibilityManager.keyboardEvent(L);
          }, j.onFocus = function() {
            x.accessibilityManager.focus();
          };
        }
        var R = this.parseEventsOfWrapper();
        return /* @__PURE__ */ C.createElement(sw, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ C.createElement("div", An({
          className: de("recharts-wrapper", w),
          style: W({
            position: "relative",
            cursor: "default",
            width: _,
            height: A
          }, P)
        }, R, {
          ref: function(z) {
            x.container = z;
          }
        }), /* @__PURE__ */ C.createElement(Vd, An({}, j, {
          width: _,
          height: A,
          title: T,
          desc: $,
          style: B8
        }), this.renderClipPath(), Ig(m, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  })(yO);
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
    var g = v.dataKey, x = v.data, O = v.children, m = v.width, w = v.height, _ = v.layout, A = v.stackOffset, P = v.margin, D = b.dataStartIndex, T = b.dataEndIndex;
    if (b.updateId === void 0) {
      var $ = $w(v);
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
        prevLayout: _,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (g !== b.prevDataKey || x !== b.prevData || m !== b.prevWidth || w !== b.prevHeight || _ !== b.prevLayout || A !== b.prevStackOffset || !Pn(P, b.prevMargin)) {
      var M = $w(v), j = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, I = W(W({}, Mw(b, x, _)), {}, {
        updateId: b.updateId + 1
      }), N = W(W(W({}, M), j), I);
      return W(W(W({}, N), p(W({
        props: v
      }, N), b)), {}, {
        prevDataKey: g,
        prevData: x,
        prevWidth: m,
        prevHeight: w,
        prevLayout: _,
        prevStackOffset: A,
        prevMargin: P,
        prevChildren: O
      });
    }
    if (!Ud(O, b.prevChildren)) {
      var R, L, z, k, B = mt(O, Un), q = B && (R = (L = B.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && R !== void 0 ? R : D, H = B && (z = (k = B.props) === null || k === void 0 ? void 0 : k.endIndex) !== null && z !== void 0 ? z : T, X = q !== D || H !== T, te = !le(x), ne = te && !X ? b.updateId : b.updateId + 1;
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
    return /* @__PURE__ */ Rt(v) ? x = /* @__PURE__ */ Ue(v, b) : ue(v) ? x = v(b) : x = /* @__PURE__ */ C.createElement(Gi, b), /* @__PURE__ */ C.createElement(pe, {
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
}, X8 = vu({
  chartName: "LineChart",
  GraphicalChild: Xi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: Tv
}), EP = vu({
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
  formatAxisMap: Tv
}), Z8 = vu({
  chartName: "PieChart",
  GraphicalChild: hr,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: ou
  }, {
    axisType: "radiusAxis",
    AxisComp: au
  }],
  formatAxisMap: SL,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), J8 = vu({
  chartName: "AreaChart",
  GraphicalChild: Ir,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: vr
  }, {
    axisType: "yAxis",
    AxisComp: yr
  }],
  formatAxisMap: Tv
});
const Q8 = Ps({
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), e9 = {
  light: "",
  dark: ".dark"
}, CP = fe.createContext(null);
function jP() {
  const e = fe.useContext(CP);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const t9 = ({ id: e, className: t, children: r, aspect: n, config: a, ...i }, o) => {
  const s = fe.useId(), u = `chart-${e || s.replace(/:/g, "")}`, c = fe.useRef(null), [l, f] = he(), d = He(() => new ResizeObserver((p) => f(p[0].contentRect.height)), []);
  return hO(() => {
    const p = o && "current" in o ? o.current : c.current;
    return p && d.observe(p.parentElement), () => {
      d.disconnect();
    };
  }, [d, o, c]), S(CP.Provider, {
    value: {
      config: a
    },
    children: V("div", {
      "data-chromatic": "ignore",
      "data-chart": u,
      ref: o || c,
      className: J("flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", n ? Q8({
        aspect: n
      }) : "aspect-auto h-full", t),
      ...i,
      children: [S(r9, {
        id: u,
        config: a
      }), S(BI, {
        height: l,
        className: "overflow-visible",
        children: r
      })]
    })
  });
}, da = fe.forwardRef(t9);
da.displayName = "Chart";
const r9 = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([a, i]) => i.theme || i.color);
  if (!r.length)
    return null;
  const n = Object.entries(e9).map(([a, i]) => `
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
      __html: XT.sanitize(n.join(`
`))
    }
  });
}, Zi = Ut, pa = fe.forwardRef(({ active: e, payload: t, className: r, indicator: n = "dot", hideLabel: a = !1, hideIndicator: i = !1, label: o, labelFormatter: s, labelClassName: u, formatter: c, yAxisFormatter: l, color: f, nameKey: d, labelKey: p }, y) => {
  const { config: h } = jP(), v = fe.useMemo(() => {
    if (a || !t?.length)
      return null;
    const [g] = t, x = `${p || g.dataKey || g.name || "value"}`, O = lh(h, g, x), m = !p && typeof o == "string" ? h[o]?.label || o : O?.label;
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
  return V("div", {
    ref: y,
    className: J("grid min-w-[12rem] items-start gap-2 rounded border border-solid border-f1-border-secondary bg-f1-background-inverse-secondary px-3 py-2.5 text-base shadow-lg backdrop-blur", r),
    children: [b ? null : v, S("div", {
      className: "grid gap-2",
      children: t.map((g, x) => {
        const O = `${d || g.name || g.dataKey || "value"}`, m = lh(h, g, O), w = f || g.payload.fill || g.color;
        return S("div", {
          className: J("flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground", n === "dot" && "items-center"),
          children: c && g?.value !== void 0 && g.name ? c(g.value, g.name, g, x, g.payload) : V(ct, {
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
            }), V("div", {
              className: J("flex flex-1 justify-between text-sm leading-none", b ? "items-end" : "items-center"),
              children: [V("div", {
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
const Rv = Yr, yu = fe.forwardRef(({ className: e, hideIcon: t = !1, payload: r, verticalAlign: n = "bottom", nameKey: a, hiddenKey: i, leftShift: o = 0 }, s) => {
  const { config: u } = jP();
  return r?.length ? S("div", {
    ref: s,
    className: J("relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary", n === "top" ? "pb-2" : "pt-2", e),
    style: {
      marginLeft: o
    },
    children: r.map((c) => {
      const l = `${a || c.dataKey || "value"}`, f = lh(u, c, l, i);
      return V("div", {
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
yu.displayName = "ChartLegend";
function lh(e, t, r, n) {
  if (typeof t != "object" || t === null)
    return;
  const a = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  if (r in t && typeof t[r] == "string" ? i = t[r] : a && r in a && typeof a[r] == "string" ? i = a[r] : "dataKey" in t && typeof t.dataKey == "string" && (i = t.dataKey), !(n && n === i))
    return i in e ? e[i] : e[r];
}
const MP = zt({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), o7 = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = he(e), a = tt(() => {
    n(!0);
  }, []), i = tt(() => n(!1), []), o = tt(() => n((s) => !s), []);
  return S(MP.Provider, {
    value: {
      enable: a,
      disable: i,
      toggle: o,
      enabled: r
    },
    children: t
  });
}, n9 = () => {
  const e = pt(MP);
  if (!e) throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
}, Bt = (e, t) => {
  const r = ["categorical-1", "categorical-2", "categorical-3", "categorical-4", "categorical-5", "categorical-6", "categorical-7", "categorical-8"];
  return at(r[e % r.length], t);
}, at = (e, t) => {
  const r = t !== void 0 ? ` / ${t}` : "";
  return `hsl(var(--${`chart-${e}`})${r})`;
};
function Ji(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const Lv = (e) => ({
  dataKey: "x",
  domain: e?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), qv = (e) => ({
  tickLine: !1,
  axisLine: !1,
  domain: e?.domain,
  tickMargin: 8,
  ticks: e?.ticks,
  tickCount: e?.tickCount,
  tickFormatter: e?.tickFormatter
}), mu = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), gu = (e = !1) => ({
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
function Bv(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const a9 = ({ index: e, visibleTicksCount: t, payload: r, tickFormatter: n, ...a }) => {
  const i = e === 0, o = e === t - 1;
  return S(Ar, {
    ...a,
    textAnchor: i ? "start" : o ? "end" : "middle",
    children: n?.(r.value, r.index) ?? r.value
  });
}, i9 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n, canBeBlurred: a, blurArea: i, lineType: o = "monotoneX", aspect: s, marginTop: u = 0 }, c) => {
  const { enabled: l } = n9(), f = Object.keys(t), d = a2(12), p = Bv(e), y = Math.max(...p.flatMap((x) => f.map((O) => Ji(n?.tickFormatter ? n.tickFormatter(`${x[O]}`) : `${x[O]}`)))), h = n?.width ?? y + 20, v = !n?.hide, b = !r?.hide, g = !a || !l;
  return S(da, {
    config: t,
    ref: c,
    aspect: s,
    children: V(J8, {
      accessibilityLayer: !0,
      data: p,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: u
      },
      children: [V("defs", {
        children: [V("linearGradient", {
          id: `${d}-fadeGradient`,
          gradientUnits: "userSpaceOnUse",
          x1: `${v ? h : 0}`,
          y1: "0",
          x2: "100%",
          y2: "0",
          children: [(i === "l" || i === "lr") && V(ct, {
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
          }), (i === "r" || i === "lr") && V(ct, {
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
          }), !i && V(ct, {
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
        }), f.map((x, O) => V("linearGradient", {
          id: `fill${String(x)}-${d}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [S("stop", {
            offset: "5%",
            stopColor: t[x].color ? at(t[x].color) : Bt(O),
            stopOpacity: 0.8
          }), S("stop", {
            offset: "95%",
            stopColor: t[x].color ? at(t[x].color) : Bt(O),
            stopOpacity: 0.1
          })]
        }, O))]
      }), S(Yi, {
        ...mu(),
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
        tick: a9
      }), v && S(yr, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: n?.tickCount,
        tickFormatter: a && l ? () => "**" : n?.tickFormatter,
        ticks: n?.ticks,
        domain: n?.domain,
        width: h
      }), g && S(Zi, {
        ...gu(),
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
        stroke: t[x].color ? at(t[x].color) : Bt(O),
        strokeWidth: 1.5,
        strokeDasharray: t[x].dashed ? "4 4" : void 0
      }, x)), Object.keys(t).length > 1 && S(Rv, {
        className: "flex justify-start",
        content: S(yu, {})
      })]
    })
  });
}, s7 = ha(i9), o9 = ({ dataConfig: e, data: t, xAxis: r, yAxis: n = {
  hide: !0
}, label: a = !1, type: i = "simple", hideTooltip: o = !1, hideGrid: s = !1, aspect: u, legend: c, showValueUnderLabel: l = !1, highlightLastBar: f = !1, onClick: d }, p) => {
  const y = Object.keys(e), h = Bv(t).map((b, g, x) => f && y.length === 1 && !e[y[0]]?.color ? {
    ...b,
    fill: g === x.length - 1 ? Bt(g) : Bt(g, 0.5)
  } : b), v = Math.max(...h.flatMap((b) => y.map((g) => Ji(n?.tickFormatter ? n.tickFormatter(`${b[g]}`) : `${b[g]}`))));
  return S(da, {
    config: e,
    ref: p,
    aspect: u,
    children: V(EP, {
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
      children: [!o && S(Zi, {
        ...gu(),
        content: S(pa, {
          yAxisFormatter: n.tickFormatter
        })
      }), !s && S(Yi, {
        ...mu()
      }), S(yr, {
        ...qv(n),
        tick: !0,
        width: n.width ?? v + 20,
        hide: n.hide
      }), S(vr, {
        ...Lv(r),
        hide: r?.hide,
        tick: l ? (b) => {
          const { x: g, y: x, payload: O } = b, m = t.find((A) => A.label === O.value)?.values || "", w = Object.keys(m).length === 1 ? Object.values(m)?.[0] : void 0, _ = w !== void 0 && n.tickFormatter ? n.tickFormatter(`${w}`) : w.toLocaleString();
          return V("g", {
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
              children: _
            })]
          });
        } : void 0
      }), y.map((b, g) => S($r, {
        isAnimationActive: !1,
        dataKey: b,
        stackId: i === "stacked" || i === "stacked-by-sign" ? "stack" : void 0,
        fill: f ? (x) => x.fill : e[b].color ? at(e[b].color) : Bt(g),
        radius: i === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
        maxBarSize: 32,
        children: a && S(Ct, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${b}`)
      }, `bar-${b}`)), c && S(Rv, {
        content: S(yu, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, u7 = ha(o9), s9 = ({ data: e, legend: t = !0, hideTooltip: r = !1 }, n) => {
  const a = e.reduce((i, o) => i + o.value, 0);
  return V(Es, {
    children: [S("div", {
      className: "w-full",
      ref: n,
      children: S("div", {
        className: "flex h-2 gap-1 overflow-hidden",
        children: e.map((i, o) => {
          const s = i.value / a * 100, u = i.color ? at(i.color) : Bt(o), c = (l) => {
            const f = l / a * 100;
            return f % 1 === 0 ? f.toFixed(0) : f.toFixed(1);
          };
          return s === 0 ? null : V(Cs, {
            children: [S(js, {
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
            }), !r && V(Ms, {
              className: "flex items-center gap-1 text-sm",
              children: [S("div", {
                className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
                style: {
                  backgroundColor: u
                }
              }), S("span", {
                className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary",
                children: i.name
              }), V("span", {
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
        const s = i.color ? at(i.color) : Bt(o);
        return V("div", {
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
}, c7 = ha(s9), u9 = ({ data: e, dataConfig: t, xAxis: r, yAxis: n = {
  hide: !0
}, lineType: a = "natural", aspect: i, hideTooltip: o = !1, hideGrid: s = !1 }, u) => {
  const c = Object.keys(t), l = Bv(e), f = Math.max(...l.flatMap((d) => c.map((p) => Ji(n?.tickFormatter ? n.tickFormatter(`${d[p]}`) : `${d[p]}`))));
  return S(da, {
    config: t,
    ref: u,
    aspect: i,
    children: V(X8, {
      accessibilityLayer: !0,
      data: l,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12
      },
      children: [!s && S(Yi, {
        ...mu()
      }), !r?.hide && S(vr, {
        ...Lv(r)
      }), !n?.hide && S(yr, {
        ...qv(n),
        width: n.width ?? f + 20
      }), !o && S(Zi, {
        ...gu(),
        content: S(pa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), c.map((d, p) => S(Xi, {
        dataKey: d,
        isAnimationActive: !1,
        type: a,
        stroke: t[d].color ? at(t[d].color) : Bt(p),
        strokeWidth: 1.5,
        strokeDasharray: t[d].dashed ? "4 4" : void 0,
        dot: !1
      }, d))]
    })
  });
}, l7 = ha(u9), c9 = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: a }, i) => {
  const o = e.map((c, l) => ({
    ...c,
    fill: t[c.label]?.color ? at(t[c.label].color) : Bt(l)
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
    children: V(Z8, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [u !== 0 && S(Zi, {
        isAnimationActive: !1,
        content: S(pa, {
          yAxisFormatter: a
        })
      }), V(hr, {
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
          return S(Vs, {
            fill: c.fill,
            "aria-label": `${c.label}: ${f} (${(c.value / u * 100).toFixed(0)}%)`
          }, `cell-${l}`);
        }), S(Ke, {
          content: ({ viewBox: c }) => {
            if (c && "cx" in c && "cy" in c)
              return V("text", {
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
      }), S(Rv, {
        content: S(yu, {
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
}, f7 = ha(c9);
var Fv = "Progress", zv = 100, [l9] = ZT(Fv), [f9, d9] = l9(Fv), $P = fe.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: r,
      value: n = null,
      max: a,
      getValueLabel: i = p9,
      ...o
    } = e;
    (a || a === 0) && !Dw(a) && console.error(h9(`${a}`, "Progress"));
    const s = Dw(a) ? a : zv;
    n !== null && !Nw(n, s) && console.error(v9(`${n}`, "Progress"));
    const u = Nw(n, s) ? n : null, c = As(u) ? i(u, s) : void 0;
    return /* @__PURE__ */ S(f9, { scope: r, value: u, max: s, children: /* @__PURE__ */ S(
      Oh.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": As(u) ? u : void 0,
        "aria-valuetext": c,
        role: "progressbar",
        "data-state": NP(u, s),
        "data-value": u ?? void 0,
        "data-max": s,
        ...o,
        ref: t
      }
    ) });
  }
);
$P.displayName = Fv;
var IP = "ProgressIndicator", DP = fe.forwardRef(
  (e, t) => {
    const { __scopeProgress: r, ...n } = e, a = d9(IP, r);
    return /* @__PURE__ */ S(
      Oh.div,
      {
        "data-state": NP(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: t
      }
    );
  }
);
DP.displayName = IP;
function p9(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function NP(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function As(e) {
  return typeof e == "number";
}
function Dw(e) {
  return As(e) && !isNaN(e) && e > 0;
}
function Nw(e, t) {
  return As(e) && !isNaN(e) && e <= t && e >= 0;
}
function h9(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${zv}\`.`;
}
function v9(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${zv} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var kP = $P, y9 = DP;
const RP = fe.forwardRef(({ className: e, value: t, ...r }, n) => S(kP, {
  ref: n,
  value: t,
  className: J("relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary", e),
  ...r,
  children: S(y9, {
    className: "h-full w-full flex-1 transition-all",
    style: {
      backgroundColor: r.color,
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
RP.displayName = kP.displayName;
function m9(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const g9 = (e) => {
  const t = JT.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((a) => {
    delete a.x, Object.entries(a).forEach(([i, o]) => {
      n < o && (n = o, r = i);
    });
  }), r;
}, b9 = ({ dataConfig: e, data: t, xAxis: r = {
  hide: !0
}, yAxis: n, label: a = !1, aspect: i, hideTooltip: o = !1, hideGrid: s = !1, showRatio: u = !1, valueFormatter: c }, l) => {
  const f = Object.keys(e), d = m9(t), p = Math.max(...d.map((b) => Ji(`${b.x}`))), y = f.reduce((b, g) => (b[g] = t.reduce((x, O) => x + O.values[g], 0), b), {}), h = {
    ...Lv(r),
    type: "number",
    dataKey: g9(d)
  }, v = {
    ...qv(n),
    type: "category",
    dataKey: "x"
  };
  return S(da, {
    config: e,
    ref: l,
    aspect: i,
    children: V(EP, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: d,
      margin: {
        left: n && !n.hide ? 8 : 12,
        right: a || u ? 100 : 0
      },
      children: [!o && S(Zi, {
        ...gu(!0),
        content: S(pa, {
          yAxisFormatter: n?.tickFormatter
        })
      }), !s && S(Yi, {
        ...mu(),
        vertical: !0,
        horizontal: !1
      }), S(vr, {
        ...h,
        hide: r?.hide
      }), S(yr, {
        ...v,
        hide: n?.hide,
        width: n?.width ?? p + 20
      }), f.map((b, g) => S(ct, {
        children: S($r, {
          isAnimationActive: !1,
          layout: "vertical",
          dataKey: b,
          fill: e[b].color ? at(e[b].color) : Bt(g),
          radius: 4,
          maxBarSize: 24,
          children: (a || u) && S(Ct, {
            position: "right",
            offset: 10,
            className: "fill-f1-foreground",
            fontSize: 12,
            formatter: c,
            content: u ? S(x9, {
              valueFormatter: c,
              total: y[b],
              showLabel: a
            }) : void 0
          }, `label-{${b}}`)
        }, `bar-${b}`)
      }))]
    })
  });
}, d7 = ha(b9), x9 = ({ viewBox: e, offset: t = 0, value: r, valueFormatter: n, total: a, showLabel: i }) => {
  const { x: o = 0, y: s = 0, width: u = 0, height: c = 0 } = e, l = o + u + t, f = s + c / 2, d = n ? n(r) : r, p = Ji(`${d}`), y = a > 0 ? Math.round(Number(r) / a * 100) : 0;
  return V("g", {
    transform: `translate(${l},${f + 4})`,
    children: [i && S("text", {
      x: 0,
      textAnchor: "start",
      className: "fill-f1-foreground-secondary text-sm font-medium",
      children: d
    }), V("text", {
      x: i ? p + 8 : 0,
      textAnchor: "start",
      className: "fill-f1-foreground text-sm font-medium",
      children: [y, "%"]
    })]
  });
}, fh = (e) => e == null || typeof e == "object" && "value" in e && (e.value === void 0 || e.value === null) && // ----
typeof e == "object" && "value_x100" in e && (e.value_x100 === void 0 || e.value_x100 === null), dh = (e) => "value" in e ? e.value : e.value_x100 !== void 0 && e.value_x100 !== null ? e.value_x100 / 100 : void 0, kw = (e, t = {}) => {
  if (fh(e))
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
  const r = dh(e);
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
}, w9 = (e) => e == null ? {
  value: void 0
} : typeof e == "number" ? { value: e } : e, O9 = (e, t) => {
  if (e == null)
    return {
      numericValue: { value: void 0 },
      formatter: t?.formatter || kw,
      formatterOptions: t?.formatterOptions || {}
    };
  const r = {
    formatter: t?.formatter || kw,
    formatterOptions: t?.formatterOptions || {}
  };
  return typeof e == "number" ? { numericValue: { value: e }, ...r } : typeof e == "object" && e !== null && "numericValue" in e ? {
    numericValue: w9(e.numericValue),
    formatter: e.formatter ? e.formatter : r.formatter,
    formatterOptions: {
      ...r.formatterOptions,
      ...e.formatterOptions
    }
  } : { ...r, numericValue: e };
}, S9 = () => {
  const { locale: e } = EO();
  return tt(
    (t, r) => O9(t, {
      ...r,
      formatterOptions: {
        locale: e,
        ...r?.formatterOptions
      }
    }),
    [e]
  );
}, _9 = {
  "-1": eE,
  1: QT
}, A9 = {
  "-1": "negative",
  0: "neutral",
  1: "positive"
}, LP = ze(({ percentage: e, amount: t, invertStatus: r, info: n, hint: a, nullText: i }, o) => {
  const s = S9(), u = s(t, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), c = s(e, {
    formatterOptions: {
      decimalPlaces: 0,
      emptyPlaceholder: i ?? "N/A"
    }
  }), l = dh(c.numericValue), f = dh(u.numericValue);
  let d = "", p = null, y = "", h = "null", v = a;
  if (fh(f))
    d = i ?? "N/A", v = void 0;
  else {
    const b = Math.sign(l ?? 0).toString();
    h = A9[Math.sign((l ?? 0) * (r ? -1 : 1)).toString()];
    const g = fh(l) ? null : c.formatter({
      ...c.numericValue,
      units: "%",
      unitsPosition: "append"
    }, c.formatterOptions), x = u.formatter(u.numericValue, u.formatterOptions);
    d = [g, x].filter(Boolean).join(" · "), y = `${h} balance`, p = h === "neutral" ? null : S(lt, {
      icon: _9[b],
      size: "sm",
      className: J({
        positive: "text-f1-icon-positive",
        neutral: "text-f1-icon-secondary",
        negative: "text-f1-icon-critical"
      }[h])
    });
  }
  return S(Ri, {
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
LP.displayName = "F0TagBalance";
const Wv = fe.forwardRef(({ className: e, href: t, onClick: r, disabled: n, children: a, ...i }, o) => {
  const { actions: s } = Pr();
  return V("div", {
    ref: o,
    role: "article",
    className: J("flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background-inverse-secondary p-4 shadow", (t || r) && !n && "cursor-pointer transition-all duration-200 hover:border-f1-border-hover hover:shadow-md", e),
    ...i,
    onClick: () => {
      if (!n && !t && r)
        return r();
    },
    children: [t && !n && S(gh, {
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
Wv.displayName = "Card";
const Uv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: J("flex flex-row gap-1.5", e),
  ...t
}));
Uv.displayName = "CardHeader";
const Hv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: J("text-base font-medium text-f1-foreground", e),
  ...t
}));
Hv.displayName = "CardTitle";
const Vv = fe.forwardRef(({ className: e, ...t }, r) => S("h3", {
  ref: r,
  className: J("line-clamp-1 text-base font-normal text-f1-foreground-secondary", e),
  ...t
}));
Vv.displayName = "CardSubtitle";
const P9 = fe.forwardRef(({ className: e, content: t }, r) => S("div", {
  ref: r,
  className: J("-ml-1 flex h-6 w-6 items-center justify-center", e),
  children: S(Es, {
    children: V(Cs, {
      children: [S(js, {
        className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
        "aria-label": t,
        children: S(lt, {
          icon: tE,
          size: "md"
        })
      }), S(Ms, {
        children: S("p", {
          children: t
        })
      })]
    })
  })
}));
P9.displayName = "CardInfo";
const T9 = fe.forwardRef(({ className: e, title: t, icon: r = gO, ...n }, a) => S(gh, {
  ref: a,
  className: J("group inline-flex aspect-square h-6 items-center justify-center gap-1", "rounded-sm border border-solid border-f1-border bg-f1-background-inverse-secondary", "whitespace-nowrap px-0 text-base font-medium text-f1-foreground", "cursor-pointer transition-colors hover:border-f1-border-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e),
  role: "button",
  "aria-label": t,
  ...n,
  children: S(lt, {
    size: "sm",
    icon: r,
    className: "text-f1-icon-bold"
  })
}));
T9.displayName = "CardLink";
const Kv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: J("relative flex grow flex-col", e),
  ...t
}));
Kv.displayName = "CardContent";
const Gv = fe.forwardRef(({ className: e, ...t }, r) => S("div", {
  ref: r,
  className: J("flex items-center", e),
  ...t
}));
Gv.displayName = "CardFooter";
const p7 = fe.forwardRef(function({ className: t, ...r }, n) {
  return S("div", {
    ref: n,
    className: J("flex text-3xl font-semibold", t),
    ...r
  });
});
Gv.displayName = "CardComment";
function E9({ primaryAction: e, secondaryActions: t, compact: r = !1 }) {
  const n = rE("(min-width: 640px)");
  if (!(e || i()))
    return null;
  return V(Gv, {
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
      }, s)) : S(CO, {
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
const C9 = ({ avatar: e, compact: t = !1 }) => e.type === "emoji" ? S(nE, {
  emoji: e.emoji,
  size: t ? "sm" : "lg"
}) : e.type === "file" ? S(jO, {
  file: e.file,
  size: t ? "sm" : "lg"
}) : e.type === "icon" ? S(aE, {
  icon: e.icon,
  size: t ? "sm" : "lg"
}) : S(an, {
  avatar: e,
  size: t ? "sm" : "lg"
});
function j9({ avatar: e, overlay: t = !1, compact: r = !1 }) {
  const n = e.type === "person";
  return S("div", {
    className: J("mb-1.5 flex h-fit w-fit", t && !r && "absolute -top-9 left-0 rounded-md ring-[3px] ring-f1-background", t && n && "rounded-full", r && "mb-0"),
    children: S(C9, {
      avatar: e,
      compact: r
    })
  });
}
const M9 = {
  info: xO,
  warning: bh,
  critical: wO,
  positive: Ts
}, Yv = ze(({ text: e, level: t }, r) => {
  $s(e, {
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
  return S(Ri, {
    ref: r,
    className: J("pl-0.5", {
      info: "bg-f1-background-info text-f1-foreground-info",
      warning: "bg-f1-background-warning text-f1-foreground-warning",
      critical: "bg-f1-background-critical text-f1-foreground-critical",
      positive: "bg-f1-background-positive text-f1-foreground-positive"
    }[t]),
    left: S(lt, {
      icon: M9[t],
      size: "md",
      "aria-hidden": !0,
      color: a
    }),
    text: e
  });
});
Yv.displayName = "F0TagAlert";
const $9 = (e) => S("div", {
  "data-cell-type": "alert-tag",
  children: S(Yv, {
    level: e.level,
    text: e.label
  })
}), Ot = {
  text: "pt-[2px]",
  avatar: "pt-[2px]",
  avatarList: "pt-[3px]"
};
function qP(e) {
  return typeof e == "object" && e !== null && "placeholder" in e && typeof e.placeholder == "string";
}
function va(e, t) {
  return qP(e) ? typeof e == "object" && e !== null && t in e ? e[t] === void 0 : !0 : !1;
}
function ya(e, t) {
  if (e !== void 0 && typeof e != "object")
    return e;
  if (!e || typeof e != "object")
    return;
  const n = t in e ? e[t] : void 0, i = qP(e) ? e.placeholder : void 0;
  if (n !== void 0)
    return t === "date" && n !== null && typeof n == "object" && "getTime" in n ? new Date(n.getTime()) : n;
  if (i !== void 0)
    return i;
}
function I9(e) {
  if (Rw(e))
    try {
      return e.toLocaleDateString();
    } catch {
      return String(e);
    }
  const t = ya(e, "date");
  if (Rw(t))
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
function Rw(e) {
  return !!(e instanceof Date || e && typeof e == "object" && ("toLocaleDateString" in e || "getTime" in e));
}
const BP = (e, t) => {
  const r = ya(e, "number"), n = va(e, "number"), a = {
    unitsPosition: "right",
    units: "",
    ...typeof e == "object" && "number" in e ? e : {
      decimalPlaces: void 0,
      number: r
    }
  };
  return V("div", {
    className: J("flex flex-1 items-center gap-1 text-f1-foreground", t.visualization === "table" && ["justify-end", Ot.text], n && "text-f1-foreground-secondary"),
    children: [a.unitsPosition === "left" && a.units && S(Lw, {
      units: a.units
    }), a.decimalPlaces !== void 0 ? a.number?.toFixed(a.decimalPlaces) : a.number?.toString() ?? "", a.unitsPosition === "right" && a.units && S(Lw, {
      units: a.units
    })]
  });
}, Lw = ({ units: e }) => S("span", {
  children: e.toString()
}), D9 = (e, t) => {
  const r = {
    ...typeof e == "object" && "amount" in e ? e : {
      amount: e
    }
  };
  return BP({
    ...typeof e == "object" && "amount" in e ? e : {},
    number: r.amount,
    decimalPlaces: r.currency?.decimalPlaces,
    units: r.currency?.symbol,
    unitsPosition: r.currency?.symbolPosition
  }, t);
}, ja = 52, Br = 6, qw = 2, Bw = 72, Fw = 2, N9 = "categorical-5", zw = "categorical-1", Ww = 0.5, k9 = "categorical-1";
function R9(e) {
  return e;
}
function L9(e) {
  return String(e);
}
function q9({ point: e, scaleMax: t, formatLabel: r, formatValue: n }) {
  const { label: a, value: i, secondaryValue: o } = e, s = r(a), u = n(i), c = `${s} – ${u}`, l = o != null && i < o, f = o != null && i > o, d = t > 0 ? Math.round(ja * (i / t)) : 0, p = o != null && t > 0 && !l ? Math.round(ja * (Math.min(i, o) / t)) : d, y = f ? Math.round(ja * ((i - (o ?? 0)) / t)) : 0;
  return S(Es, {
    delayDuration: 100,
    disableHoverableContent: !0,
    children: V(Cs, {
      children: [S(js, {
        asChild: !0,
        children: S("div", {
          className: "flex-shrink-0 cursor-default rounded-sm transition-opacity hover:opacity-90",
          style: {
            width: Br,
            height: ja,
            minHeight: ja,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "stretch"
          },
          role: "img",
          "aria-label": c,
          children: i === 0 ? S("div", {
            className: "rounded-sm bg-f1-border-secondary",
            style: {
              width: Br,
              height: Fw,
              minHeight: Fw
            }
          }) : l ? S("div", {
            style: {
              width: Br,
              height: d,
              backgroundColor: at(N9),
              borderRadius: 2
            }
          }) : f && y > 0 ? V(ct, {
            children: [S("div", {
              style: {
                width: Br,
                height: y,
                backgroundColor: at(k9),
                borderRadius: "2px 2px 0 0"
              }
            }), S("div", {
              style: {
                width: Br,
                height: p,
                backgroundColor: at(zw, Ww),
                borderRadius: "0 0 2px 2px"
              }
            })]
          }) : S("div", {
            style: {
              width: Br,
              height: d,
              backgroundColor: at(zw, Ww),
              borderRadius: 2
            }
          })
        })
      }), S(Ms, {
        className: "pointer-events-none z-[100] max-w-xs",
        side: "top",
        sideOffset: 6,
        children: S("p", {
          className: "font-semibold",
          children: c
        })
      })]
    })
  });
}
const FP = (e, t) => {
  const r = e?.dataPoints;
  if (!r || !Array.isArray(r) || r.length === 0)
    return S("div", {
      className: J("text-f1-foreground-secondary", t.visualization === "table" && Ot.text),
      "data-cell-type": "barSeries",
      children: "–"
    });
  const n = e.formatLabel ?? R9, a = e.formatValue ?? L9, i = Math.max(...r.map((s) => Math.max(s.value, s.secondaryValue ?? 0)), 0), o = e.scaleMax ?? Math.max(i, 1);
  return S("div", {
    className: J("flex items-center justify-end gap-0.5 overflow-visible py-1", t.visualization === "table" && "pt-0.5"),
    style: {
      minHeight: Bw,
      height: Bw,
      minWidth: r.length * (Br + qw) - qw
    },
    "data-cell-type": "barSeries",
    role: "img",
    "aria-label": "Bar series",
    children: r.map((s, u) => S("div", {
      className: "pointer-events-auto",
      children: S(q9, {
        point: s,
        scaleMax: o,
        formatLabel: n,
        formatValue: a
      })
    }, `${s.label}-${u}`))
  });
}, B9 = (e, t) => {
  const r = e.type ?? "person";
  return S("div", {
    className: J("pointer-events-auto w-full", t.visualization === "table" && Ot.avatarList),
    children: S(pS, {
      type: r,
      avatars: e.avatarList,
      size: "xs",
      max: e.max
    })
  });
}, F9 = (e, t) => V("div", {
  className: J("flex items-center gap-2", t.visualization === "table" && Ot.avatar),
  children: [S(an, {
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
}), z9 = (e, t) => {
  const r = e.label ?? t.i18n.countries[e.code] ?? e.code;
  return V("div", {
    "data-cell-type": "country",
    className: "flex items-center gap-2",
    children: [S(iE, {
      size: "sm",
      flag: e.code,
      "aria-label": r
    }), " ", S(on, {
      className: "min-w-0 flex-1 text-f1-foreground",
      tag: "span",
      children: r
    })]
  });
}, W9 = (e, t) => {
  const r = I9(e), n = va(e, "date");
  return S("div", {
    className: J("monospace text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ot.text),
    children: r
  });
};
var h7 = {
  md: 900,
  xl: 1440
}, U9 = {
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
}, v7 = {
  special: {
    highlight: "hsl(var(--accent-50))"
  }
};
const Xv = ze(({ text: e, ...t }, r) => {
  $s(e, {
    disallowEmpty: !0
  }, {
    componentName: "F0TagDot"
  });
  const n = "color" in t && t.color ? `hsl(${U9[t.color][50]})` : "customColor" in t && t.customColor;
  return n ? S(Ri, {
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
Xv.displayName = "F0TagDot";
const H9 = (e) => S("div", {
  "data-cell-type": "dot-tag",
  children: S(Xv, {
    text: e.label,
    color: e.color
  })
}), V9 = (e) => V("div", {
  className: "text-f1-text-default text-md flex items-center gap-2 font-medium",
  "data-cell-type": "file",
  children: [S(jO, {
    file: e
  }), " ", S("span", {
    children: e.name
  })]
}), zP = ({ tooltip: e, children: t }) => e ? S(Es, {
  delayDuration: 100,
  disableHoverableContent: !0,
  children: V(Cs, {
    children: [S(js, {
      asChild: !0,
      className: "pointer-events-auto",
      children: t
    }), S(Ms, {
      className: "pointer-events-none max-w-xs",
      children: S("p", {
        className: "font-semibold",
        children: e
      })
    })]
  })
}) : S(ct, {
  children: t
}), WP = (e, t) => S("div", {
  className: J("flex items-center gap-2", t.visualization === "table" && Ot.avatar),
  children: S(zP, {
    tooltip: e.tooltip,
    children: V("div", {
      className: "inline-flex items-center gap-2",
      children: [S(lt, {
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
}), K9 = (e) => S(WP, {
  icon: oE,
  label: e.name
}), Uw = 480;
function G9(e) {
  try {
    const t = new Date(e);
    return Number.isNaN(t.getTime()) ? e : t.toLocaleDateString(void 0, {
      day: "numeric",
      month: "long"
    });
  } catch {
    return e;
  }
}
function Y9(e) {
  const t = Math.floor(e / 60), r = e % 60;
  return r === 0 ? `${t}h` : `${t}h ${r}m`;
}
function X9(e) {
  return {
    label: e.date,
    value: e.minutes,
    ...e.plannedMinutes != null ? {
      secondaryValue: e.plannedMinutes
    } : {}
  };
}
function Z9(e) {
  const t = e.dataPoints.map(X9), r = Math.max(...e.dataPoints.map((a) => Math.max(a.minutes, a.plannedMinutes ?? 0)), Uw * 0.1), n = Math.min(r, Uw);
  return {
    dataPoints: t,
    formatLabel: G9,
    formatValue: Y9,
    scaleMax: n
  };
}
const J9 = (e, t) => {
  const r = e?.dataPoints;
  return !r || !Array.isArray(r) || r.length === 0 ? S("div", {
    className: J("text-f1-foreground-secondary", t.visualization === "table" && Ot.text),
    "data-cell-type": "hourDistribution",
    children: "–"
  }) : FP(Z9(e), t);
}, Q9 = (e) => typeof e == "object" && e !== null && "lines" in e ? e.lines : void 0, ez = (e) => (typeof e == "object" && e !== null && "full" in e && e.full) ?? !1, tz = (e, t) => {
  const r = ya(e, "text")?.toString() || "", n = va(e, "text"), a = ez(e), i = Q9(e) || 3;
  return S(on, {
    className: J("whitespace-pre-wrap break-words text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ot.text),
    lines: i,
    disabled: a,
    children: r
  });
}, $d = 100, Hw = 12, rz = 12, nz = (e, t) => {
  const r = ya(e, "percentage"), n = va(e, "percentage");
  if (r === void 0)
    return null;
  if (n)
    return S("span", {
      className: J("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ot.text),
      "data-cell-type": "percentage",
      children: r
    });
  const a = $d / 2, i = a - Hw / 2, o = i - rz, s = 2 * Math.PI * o, u = (100 - Math.min(Number(r), 100)) / 100 * s, c = typeof e == "object" && "label" in e;
  return V("div", {
    className: "flex items-center gap-2",
    "data-cell-type": "percentage",
    children: [V("svg", {
      viewBox: `0 0 ${$d} ${$d}`,
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
        strokeWidth: Hw,
        strokeDasharray: s,
        strokeDashoffset: u,
        strokeLinecap: "round"
      })]
    }), S("span", {
      className: "text-f1-foreground",
      children: c ? e.label : `${r}%`
    })]
  });
}, az = (e, t) => {
  const r = `${e.firstName.toString()} ${e.lastName.toString()}`;
  return V("div", {
    className: J("flex min-w-0 flex-1 items-center gap-2", t.visualization === "table" && Ot.avatar),
    children: [S(an, {
      avatar: {
        type: "person",
        firstName: e.firstName.toString(),
        lastName: e.lastName.toString(),
        src: e.src,
        badge: e.badge,
        deactivated: e.deactivated
      },
      size: "xs"
    }), S(on, {
      className: J("min-w-0 flex-1", e.deactivated ? "text-f1-foreground/[0.61]" : "text-f1-foreground"),
      tag: "span",
      children: r
    })]
  });
}, iz = (e, t) => {
  const r = ya(e, "value"), n = va(e, "value");
  if (r === void 0)
    return null;
  if (n)
    return S("span", {
      className: "text-f1-foreground-secondary",
      "data-cell-type": "progressBar",
      children: r
    });
  const a = r, i = typeof e == "object" && "max" in e ? e.max ?? 100 : 100, o = typeof e == "object" && "label" in e ? e.label : void 0, s = typeof e == "object" && "hideLabel" in e ? e.hideLabel : void 0, u = typeof e == "object" && "color" in e ? e.color : void 0, c = at(u || "categorical-1"), l = a / i * 100;
  return V("div", {
    className: "flex w-full items-center gap-2",
    "data-cell-type": "progressBar",
    children: [S("div", {
      className: "min-w-16 flex-grow",
      children: S(RP, {
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
}, Zv = ze(({ text: e, additionalAccessibleText: t, variant: r }, n) => ($s(e, {
  disallowEmpty: !0
}, {
  componentName: "F0TagStatus"
}), S(Ri, {
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
Zv.displayName = "F0TagStatus";
const oz = (e) => S("div", {
  "data-cell-type": "status",
  children: S(Zv, {
    variant: e.status,
    text: e.label
  })
}), sz = {
  synced: {
    icon: Ts,
    colorClass: "text-f1-icon-positive"
  },
  syncing: {
    icon: cE,
    colorClass: "text-f1-icon-secondary",
    animated: !0
  },
  pending: {
    icon: MO,
    colorClass: "text-f1-icon-secondary"
  },
  partiallySynced: {
    icon: uE,
    colorClass: "text-f1-icon-warning"
  },
  outdated: {
    icon: bh,
    colorClass: "text-f1-icon-warning"
  },
  failed: {
    icon: sE,
    colorClass: "text-f1-icon-critical"
  }
}, uz = (e, t) => {
  const r = sz[e.status], n = t.i18n.syncStatus[e.status], a = e.tooltip ?? n, i = S(lt, {
    icon: r.icon,
    "aria-label": a
  });
  return S("div", {
    className: J("flex items-center", t.visualization === "table" && Ot.avatar),
    "data-cell-type": "sync-status",
    children: S(zP, {
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
}, cz = (e) => S("div", {
  "data-cell-type": "tag",
  children: S(Sh, {
    text: e.label,
    icon: e.icon
  })
}), bu = ze(({ avatar: e, text: t }, r) => ($s(t, {
  disallowEmpty: !0
}, {
  componentName: "F0TagAvatar"
}), S(Ri, {
  ref: r,
  className: "border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
  left: S(an, {
    avatar: e,
    size: "xs"
  }),
  text: t,
  shape: e.type === "person" ? "rounded" : "square"
})));
bu.displayName = "AvatarTag";
const UP = ze(({ name: e, src: t }, r) => S(bu, {
  ref: r,
  avatar: {
    type: "company",
    name: e,
    src: t
  },
  text: e
}));
UP.displayName = "F0TagCompany";
const HP = ze(({ src: e, name: t }, r) => S(bu, {
  ref: r,
  avatar: {
    type: "person",
    firstName: t,
    lastName: "",
    src: e
  },
  text: t
}));
HP.displayName = "F0TagPerson";
const VP = ze(({ name: e, src: t }, r) => S(bu, {
  ref: r,
  avatar: {
    type: "team",
    name: e,
    src: t
  },
  text: e
}));
VP.displayName = "F0TagTeam";
const lz = (e) => {
  const { type: t } = e;
  if (t === "dot") return S(Xv, {
    ...e
  });
  if (t === "person") return S(HP, {
    ...e
  });
  if (t === "team") return S(VP, {
    ...e
  });
  if (t === "company") return S(UP, {
    ...e
  });
  if (t === "alert") return S(Yv, {
    ...e
  });
  if (t === "status") return S(Zv, {
    ...e
  });
  if (t === "balance") return S(LP, {
    ...e
  });
  if (t === "raw") return S(Sh, {
    ...e
  });
}, ph = ({ tag: e }) => {
  const t = lz(e);
  return t || "Invalid tag type";
}, KP = ({ count: e, list: t }) => {
  const r = S(Sh, {
    text: `+${e}`
  });
  return t?.length ? V(SO, {
    children: [S(_O, {
      children: S("span", {
        className: "cursor-pointer",
        children: r
      })
    }), S(AO, {
      side: "top",
      children: V(xh, {
        className: "[*[data-state=visible]_div]:bg-f1-background dark flex max-h-[220px] flex-col",
        children: [t.map((n, a) => S("div", {
          className: "flex w-[172px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: n.description ? S(wh, {
            label: n.description,
            children: S("div", {
              children: S(ph, {
                tag: n
              })
            })
          }) : S(ph, {
            tag: n
          })
        }, a)), S(PO, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : r;
};
KP.displayName = "TagCounter";
const GP = ({ type: e, tags: t, max: r = 4, remainingCount: n }) => {
  const a = t.map((i) => ({
    type: e,
    ...i
  }));
  return S(TO, {
    items: a,
    max: r,
    renderListItem: (i) => S(ph, {
      tag: i
    }),
    renderDropdownItem: () => null,
    forceShowingOverflowIndicator: n !== void 0,
    renderOverflowIndicator: (i) => S(KP, {
      count: (n ?? 0) + i,
      list: n ? void 0 : a.slice(a.length - i)
    }),
    overflowIndicatorWithPopover: !1,
    className: "flex-1"
  });
};
GP.displayName = "F0TagList";
const fz = (e) => S(GP, {
  type: e.type,
  tags: e.tags,
  max: e.max
}), dz = (e, t) => V("div", {
  className: J("flex items-center gap-2", t.visualization === "table" && Ot.avatar),
  children: [S(an, {
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
}), pz = (e, t) => {
  const r = ya(e, "text"), n = va(e, "text"), a = r?.toString() ?? "";
  return S(on, {
    lines: 1,
    tag: "span",
    className: J("text-f1-foreground", n && "text-f1-foreground-secondary", t.visualization === "table" && Ot.text),
    children: a
  });
}, Qe = {
  text: pz,
  longText: tz,
  number: BP,
  date: W9,
  amount: D9,
  avatarList: B9,
  status: oz,
  alertTag: $9,
  person: az,
  percentage: nz,
  progressBar: iz,
  barSeries: FP,
  hourDistribution: J9,
  company: F9,
  team: dz,
  tag: cz,
  dotTag: H9,
  tagList: fz,
  icon: WP,
  file: V9,
  folder: K9,
  country: z9,
  syncStatus: uz
}, hz = (e) => e !== void 0 && typeof e == "object", y7 = (e, t, r) => {
  const { type: n, value: a } = hz(e) ? e : {
    type: "text",
    value: e ?? r
  }, i = Qe[n];
  return i ? a === void 0 ? r : i(a, {
    visualization: t.visualization,
    i18n: t.i18n
  }) : `[Invalid ${n} renderer]`;
}, vz = {
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
function yz({ metadata: e }) {
  const { type: t, value: r } = e.property, n = vz[t];
  if (!n)
    return V("div", {
      className: "flex h-8 items-center gap-1.5",
      children: ["icon" in e && S(lt, {
        icon: e.icon,
        color: "default",
        size: "md"
      }), V("span", {
        children: ["Unsupported property type: ", t]
      })]
    });
  const a = n;
  return V("div", {
    className: "flex h-8 items-center gap-1.5",
    children: ["icon" in e && S("div", {
      className: "pointer-events-auto flex items-center",
      children: S(wh, {
        label: e.tooltip,
        children: S(lt, {
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
function Vw({ otherActions: e, selectable: t = !1, selected: r = !1, onSelect: n, title: a, overlay: i = !1 }) {
  const o = Pr(), s = e && e.length > 0, [u, c] = he(!1);
  return !s && !t ? null : V("div", {
    className: J("flex flex-row gap-1 opacity-100 transition-opacity delay-150 duration-150 focus-within:delay-0 group-hover:delay-0 sm:opacity-0 focus-within:sm:opacity-100 group-hover:sm:opacity-100 [&>div]:z-[1]", (u || r) && "delay-0 sm:opacity-100", i && "absolute right-2 top-2 rounded-sm bg-f1-background/60 p-1 shadow-md backdrop-blur-sm"),
    children: [s && S("div", {
      className: "flex items-center justify-center",
      children: S(cS, {
        items: e,
        open: u,
        onOpenChange: c,
        children: S(_r, {
          label: o.actions.other,
          icon: $O,
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
      children: S(lE, {
        title: a,
        checked: r,
        onCheckedChange: n,
        hideLabel: !0
      })
    })]
  });
}
const m7 = ["contain", "cover", "fit-width", "fit-height", "scale-down"], g7 = ["xs", "sm", "md", "lg", "xl"], mz = {
  xs: "h-24",
  sm: "h-32",
  md: "h-40",
  lg: "h-48",
  xl: "h-64"
}, gz = {
  contain: "object-contain h-full w-full",
  cover: "object-cover h-full w-full",
  "fit-width": "w-full h-auto",
  "fit-height": "object-contain h-full w-auto",
  "scale-down": "object-scale-down h-full w-full"
};
function bz(e) {
  return gz[e];
}
const xz = ze(function({ compact: t = !1, avatar: r, image: n, imageFit: a = "fit-width", imageSize: i = "sm", blurredBackground: o = !0, title: s, description: u, metadata: c, children: l, link: f, primaryAction: d, secondaryActions: p, otherActions: y, selectable: h = !1, selected: v = !1, onSelect: b, onClick: g, forceVerticalMetadata: x = !1, fullHeight: O = !1, disableOverlayLink: m = !1 }, w) {
  const _ = Me(null), A = (P) => {
    _?.current?.click(), g?.(), P.preventDefault(), P.stopPropagation();
  };
  return V(Wv, {
    className: J("group relative bg-f1-background shadow-none transition-all", t && "p-3", O && "h-full", (h || y && y.length > 0) && !v && "hover:border-f1-border", f && "focus-within:border-f1-border-hover focus-within:shadow-md hover:border-f1-border-hover hover:shadow-md", v && "border-f1-border-selected bg-f1-background-selected-secondary"),
    onClick: g,
    ref: w,
    children: [f && !m && S(CO, {
      href: f,
      variant: "unstyled",
      className: J("z-1 absolute inset-0 block rounded-xl", IO()),
      "aria-label": s,
      ref: _,
      children: " "
    }), n && V("div", {
      className: J("relative -mx-3 -mt-3 mb-4 rounded-md", mz[i], t && "-mx-2 -mt-2 mb-3", a === "fit-height" && "flex items-center justify-center overflow-hidden", a === "fit-width" && "flex items-center justify-center overflow-hidden", a !== "fit-width" && a !== "fit-height" && "overflow-hidden"),
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
      }), S(fE, {
        src: n,
        alt: s,
        className: J(bz(a))
      }), S(Vw, {
        otherActions: y,
        selectable: h,
        selected: v,
        onSelect: b,
        title: s,
        overlay: !0
      })]
    }), V("div", {
      className: "flex grow flex-col gap-2",
      children: [V("div", {
        className: "flex flex-row items-start justify-between gap-1",
        children: [V(Uv, {
          ...m ? {} : {
            onClick: (P) => {
              A(P);
            },
            onKeyDown: (P) => {
              (P.key === "Enter" || P.key === " ") && A(P);
            },
            role: "button",
            "aria-label": s
          },
          className: J("relative flex-col gap-0 p-0", n && !t && "pt-3", t && "flex-row items-center gap-2"),
          children: [r && S(j9, {
            avatar: r,
            overlay: !!n,
            compact: t
          }), V("div", {
            className: J("flex flex-col gap-0"),
            children: [S(Hv, {
              className: J("text-lg font-semibold text-f1-foreground", t && "line-clamp-1 text-base"),
              children: s
            }), u && S(Vv, {
              className: J("text-base text-f1-foreground-secondary"),
              children: S(on, {
                lines: t ? 2 : 3,
                children: u
              })
            })]
          })]
        }), !n && S(Vw, {
          otherActions: y,
          selectable: h,
          selected: v,
          onSelect: b,
          title: s
        })]
      }), (c || l) && V(Kv, {
        className: "pointer-events-none",
        children: [c && S("div", {
          className: J("flex flex-col gap-0.5", t && "gap-x-3 gap-y-0", x && "flex-col gap-y-0.5"),
          children: c.map((P, D) => S(yz, {
            metadata: P
          }, D))
        }), l]
      })]
    }), S(E9, {
      primaryAction: d,
      secondaryActions: p,
      compact: t
    })]
  });
}), wz = ({ compact: e = !1 }) => V(Wv, {
  className: J("group relative flex flex-col gap-2 bg-f1-background p-4 shadow-none", e && "p-3"),
  "aria-busy": "true",
  "aria-live": "polite",
  children: [V(Uv, {
    className: J("flex flex-col gap-2.5 p-0", e && "flex-row items-center gap-2"),
    children: [S(Pt, {
      className: J("h-10 w-10 rounded-full", e && "h-6 w-6")
    }), V("div", {
      className: J("flex flex-col gap-0", e && "flex-row items-center gap-1.5"),
      children: [S(Hv, {
        className: "flex h-6 items-center",
        children: S(Pt, {
          className: J("h-4 w-20 rounded-md", e && "h-3")
        })
      }), S(Vv, {
        className: "flex h-5 items-center",
        children: S(Pt, {
          className: "h-3 w-12 rounded-md"
        })
      })]
    })]
  }), S(Kv, {
    className: "flex flex-col gap-0",
    children: Array.from({
      length: 3
    }).map((t, r) => V("div", {
      className: "flex h-6 items-center gap-1.5",
      children: [S(Pt, {
        className: "h-4 w-4 rounded-full"
      }), S(Pt, {
        className: "h-3 w-full max-w-20 rounded-md"
      })]
    }, r))
  })]
}), Oz = ["forceVerticalMetadata", "disableOverlayLink"], YP = ze((e, t) => {
  const r = Oz.reduce((n, a) => {
    const { [a]: i, ...o } = n;
    return o;
  }, e);
  return S(xz, {
    ref: t,
    ...r
  });
}), Sz = ({ compact: e = !1 }) => S(wz, {
  compact: e
});
YP.displayName = "F0Card";
const b7 = DO(YP, Sz), XP = ze(({ className: e, ...t }, r) => S(NO, {
  ref: r,
  className: J("text-f1-foreground-secondary", e),
  ...t
}));
XP.displayName = NO.displayName;
const ZP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
ZP.displayName = "DialogFooter";
const JP = ({ className: e, ...t }) => S("div", {
  className: e,
  ...t
});
JP.displayName = "DialogHeader";
const Id = [{
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
}], _z = (e, t) => {
  const r = e.className?.includes("text-") && !e.className?.includes("text-current") || e.style?.color !== void 0, n = IT();
  return V("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: t,
    ...e,
    children: [S("defs", {
      children: Id.map((a) => S("clipPath", {
        id: `${n}-${a.id}`,
        children: S("path", {
          d: a.path
        })
      }, a.id))
    }), r ? Id.map((a) => S("path", {
      d: a.path,
      fill: "currentColor",
      vectorEffect: "non-scaling-stroke"
    }, a.id)) : Id.map((a) => S("foreignObject", {
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
}, Az = ze(_z);
function x7({ title: e, description: t, onClick: r, onClose: n, isVisible: a, dismissable: i = !1, trackVisibility: o, type: s, ...u }) {
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
        children: V("div", {
          className: y(),
          style: p(),
          onClick: r,
          children: [V(ct, {
            children: [s === "one-campaign" ? S("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: S(lt, {
                icon: Az,
                size: "lg",
                className: "!h-8 !w-8"
              })
            }) : S("div", {
              className: "relative flex h-8 w-8 shrink-0 items-center justify-center",
              children: S(dE, {
                module: u.module,
                size: "lg"
              })
            }), S("div", {
              className: "flex flex-1 flex-col",
              children: V("div", {
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
              icon: kO,
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
const w7 = pE, Pz = (e, t, r) => {
  const n = Xe[r];
  return n ? n.add(e, t) : { from: /* @__PURE__ */ new Date(), to: /* @__PURE__ */ new Date() };
};
function Tz({ granularities: e, value: t, onChange: r }) {
  const n = Pr(), a = (i) => {
    r(i);
  };
  return V("div", {
    className: "flex flex-col gap-2",
    children: [S("h6", {
      className: "text-sm font-medium",
      children: n.date.selectedBy
    }), S(RO, {
      value: t,
      onValueChange: a,
      as: "list",
      children: S(LO, {
        children: e.map((i) => S(qd, {
          value: i,
          children: n.date.granularities[i]?.label || i
        }, i))
      })
    })]
  });
}
const Kw = "__custom__", Ez = (e, t) => {
  if (!e?.value) return !1;
  const r = typeof t.value == "function" ? t.value() : t.value;
  return e.granularity !== t.granularity ? !1 : py(e.value.from, r.from) && (!e.value.to || !r.to || py(e.value.to, r.to));
}, Cz = ({ presets: e, ...t }) => {
  const [r, n] = he();
  return Le(() => {
    if (t.date) {
      const i = Object.entries(e).find(([o, s]) => Ez(t.date, s));
      n(i ? i[0] : void 0);
    }
  }, [t.date, e]), S(RO, {
    as: "list",
    value: r,
    onValueChange: (i) => {
      n(i), t.onSelect?.(i);
    },
    children: V(LO, {
      children: [Object.entries(e).map(([i, o]) => S(qd, {
        value: i,
        children: o?.label || i
      }, i)), S(hE, {}), S(qd, {
        value: Kw,
        children: "Custom"
      }, Kw)]
    })
  });
}, Va = (e, t) => !e && !t ? !0 : !e || !t ? !1 : e.value?.from.getTime() === t.value?.from.getTime() && e.value?.to.getTime() === t.value?.to.getTime() && e.granularity === t.granularity, Gw = "__custom__";
function jz({ onSelect: e, defaultValue: t, presets: r = [], granularities: n = ["day"], children: a, compareTo: i, defaultCompareTo: o, onCompareToChange: s, hideCalendarInput: u, value: c, asChild: l, weekStartsOn: f, ...d }) {
  const p = Pr(), y = EO(), [h, v] = he(c || t), b = f ?? y.date?.weekStartsOn ?? vE.Monday;
  Le(() => {
    Va(c, h) || v(c || t);
  }, [c, t]);
  const g = He(() => h?.granularity ?? "day", [h?.granularity]), x = He(() => hy(b)[g], [g, b]), O = He(() => x.calendarMode || "single", [x]), m = (L) => {
    w({
      value: x.toRange(L ?? void 0),
      granularity: g
    });
  }, w = (L) => {
    Va(L, h) || (v(L), e?.(L));
  }, _ = (L) => {
    P(L === Gw);
    const z = L ? r[+L] : void 0;
    if (!z) return;
    const k = hy(b);
    w({
      value: k[z.granularity].toRange(typeof z.value == "function" ? z.value() : z.value),
      granularity: z.granularity
    }), L !== Gw && d.onOpenChange?.(!1);
  }, [A, P] = he(!1), D = (L) => {
    w({
      value: h?.value,
      granularity: L
    });
  }, T = He(() => r.length > 0 && !A, [r, A]), $ = () => {
    P(!1);
  }, M = He(() => x.calendarView || "day", [x]), [j, I] = he(o || void 0), N = He(() => {
    const L = (i ?? {})[g] || [];
    if (!h?.value)
      return [];
    const z = h.value, k = L.map((B, q) => {
      const H = typeof B.value == "function" ? B.value(x.toRange(z)) : Pz(x.toRange(z), B.value.delta, B.value.units), X = Array.isArray(H) ? H.map((te) => x.toString(te, p)).join(", ") : x.toString(H, p);
      return {
        label: B.label,
        value: (q + 1).toString(),
        description: X,
        dateValue: H
      };
    });
    return k.length === 0 ? [] : [{
      label: p.date.none,
      value: "0",
      description: "",
      dateValue: void 0
    }, ...k];
  }, [i, h, x, g]);
  Le(() => {
    I(o || "0");
  }, [g, o]);
  const R = (L) => {
    I(L);
  };
  return Le(() => {
    s?.(j ? N[+j]?.dateValue : void 0);
  }, [j, s, N]), V(yE, {
    open: d.open,
    onOpenChange: d.onOpenChange,
    children: [S(mE, {
      asChild: l,
      children: a
    }), S(gE, {
      className: "w-full overflow-auto",
      align: "start",
      children: T ? S(Cz, {
        presets: r,
        date: h,
        onSelect: _
      }) : V("div", {
        className: "flex gap-4",
        children: [(r.length > 0 || n.length > 1) && V("div", {
          children: [r.length > 0 && S(Gt, {
            icon: mO,
            variant: "neutral",
            size: "sm",
            hideLabel: !0,
            label: "Back",
            onClick: $
          }), n.length > 1 && S(Tz, {
            granularities: n,
            value: g,
            onChange: D
          })]
        }), V("div", {
          className: "min-w-[300px] flex-1",
          children: [S(bE, {
            showInput: !u,
            mode: O,
            view: M,
            onSelect: m,
            defaultSelected: h?.value,
            minDate: d.minDate,
            maxDate: d.maxDate,
            weekStartsOn: b
          }), N.length > 0 && V("div", {
            className: "mt-4 flex flex-col gap-2",
            children: [S("div", {
              className: "text-gray-500 text-sm",
              children: p.date.compareTo
            }), S(xE, {
              label: p.date.compareTo,
              hideLabel: !0,
              placeholder: p.date.compareTo,
              options: N.map((L) => ({
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
const QP = ze(({ value: e, onDateChange: t, granularity: r, onOpenChange: n, minDate: a, maxDate: i, onClear: o, ...s }, u) => {
  const [c, l] = he(""), [f, d] = he(!1), p = Pr();
  Le(() => {
    l(r.toString(e?.value, p));
  }, [e, r, p]);
  const y = (g) => SE(g, r, {
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
  return S(ct, {
    children: S(wE, {
      ...s,
      icon: OE,
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
QP.displayName = "DateInput";
function Mz({ onChange: e, value: t, presets: r = [], granularities: n = ["day"], minDate: a, maxDate: i, open: o = !1, ...s }) {
  const [u, c] = he(), [l, f] = he(o);
  Le(() => {
    f(o);
  }, [o]);
  const d = Pr(), p = He(() => n[0] ?? "day", [n]), y = tt((w) => {
    const _ = w || p;
    if (!Xe[_])
      throw new Error(`Invalid granularity ${_}`);
    return {
      ...Xe[_],
      key: _
    };
  }, [p]), h = tt((w) => {
    if (!w)
      return;
    const _ = y(w?.granularity);
    return w ? {
      value: _.toRange(_.calendarMode === "range" ? w.value : w.value?.from ?? void 0),
      granularity: w.granularity
    } : void 0;
  }, [y]), v = He(() => y(u?.granularity), [u?.granularity, y]);
  Le(() => {
    const w = h(t);
    Va(u, w) || c(w);
  }, [t]);
  const b = (w) => {
    const _ = h(w), P = y(_?.granularity).calendarMode !== "range" && _?.granularity === u?.granularity && !Va(_, u);
    g(_), P && f(!1);
  }, g = (w) => {
    const _ = h(w);
    if (c(_), !Va(_, u)) {
      const A = y(_?.granularity);
      e?.(_, A.toString(_?.value, d));
    }
  }, x = (w) => {
    f(w), s.onOpenChange?.(w);
  }, O = He(() => r.filter((w) => n.includes(w.granularity)), [r, n]), m = Me(null);
  return Le(() => {
    l && m.current && requestAnimationFrame(() => {
      m.current?.focus();
    });
  }, [l]), S(jz, {
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
    children: S(QP, {
      ref: m,
      ...s,
      value: u,
      granularity: v,
      onDateChange: g
    })
  });
}
const O7 = {
  today: {
    label: "Today",
    granularity: "day",
    value: () => Xe.day.toRange(/* @__PURE__ */ new Date())
  },
  yesterday: {
    label: "Yesterday",
    granularity: "day",
    value: () => Xe.day.toRange(wo(/* @__PURE__ */ new Date(), 1))
  },
  last7Days: {
    label: "Last 7 days",
    granularity: "day",
    value: () => Xe.day.toRange({
      from: wo(/* @__PURE__ */ new Date(), 7),
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
    value: () => Xe.week.toRange(wo(/* @__PURE__ */ new Date(), 7))
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
    value: () => Xe.year.toRange(og(/* @__PURE__ */ new Date(), 1))
  },
  last3Years: {
    label: "Last 3 years",
    granularity: "year",
    value: () => Xe.year.toRange(og(/* @__PURE__ */ new Date(), 3))
  }
}, S7 = ki(
  "F0DatePicker",
  Mz
);
function Ii(e) {
  "@babel/helpers - typeof";
  return Ii = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ii(e);
}
function $z(e, t) {
  if (Ii(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ii(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Iz(e) {
  var t = $z(e, "string");
  return Ii(t) == "symbol" ? t : t + "";
}
function Qi(e, t, r) {
  return (t = Iz(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Yw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yw(Object(r), !0).forEach(function(n) {
      Qi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Dz = {
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
}, eT = /* @__PURE__ */ Symbol("closestEdge");
function tT(e, t) {
  var r, n, a = t.element, i = t.input, o = t.allowedEdges, s = {
    x: i.clientX,
    y: i.clientY
  }, u = a.getBoundingClientRect(), c = o.map(function(f) {
    return {
      edge: f,
      value: Dz[f](u, s)
    };
  }), l = (r = (n = c.sort(function(f, d) {
    return f.value - d.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && r !== void 0 ? r : null;
  return Xw(Xw({}, e), {}, Qi({}, eT, l));
}
function Zw(e) {
  var t;
  return (t = e[eT]) !== null && t !== void 0 ? t : null;
}
function xu() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function() {
    t.forEach(function(a) {
      return a();
    });
  };
}
function Nz(e) {
  if (Array.isArray(e)) return e;
}
function kz(e, t) {
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
function hh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rT(e, t) {
  if (e) {
    if (typeof e == "string") return hh(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? hh(e, t) : void 0;
  }
}
function Rz() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nT(e, t) {
  return Nz(e) || kz(e, t) || rT(e, t) || Rz();
}
var Dd = {}, Ma = {}, Jw;
function aT() {
  if (Jw) return Ma;
  Jw = 1, Object.defineProperty(Ma, "__esModule", { value: !0 }), Ma.bind = void 0;
  function e(t, r) {
    var n = r.type, a = r.listener, i = r.options;
    return t.addEventListener(n, a, i), function() {
      t.removeEventListener(n, a, i);
    };
  }
  return Ma.bind = e, Ma;
}
var Rr = {}, Qw;
function Lz() {
  if (Qw) return Rr;
  Qw = 1;
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
  var t = /* @__PURE__ */ aT();
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
var eO;
function qz() {
  return eO || (eO = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var t = /* @__PURE__ */ aT();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return t.bind;
    } });
    var r = /* @__PURE__ */ Lz();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return r.bindAll;
    } });
  })(Dd)), Dd;
}
var na = /* @__PURE__ */ qz(), iT = "data-pdnd-honey-pot";
function oT(e) {
  return e instanceof Element && e.hasAttribute(iT);
}
function sT(e) {
  var t = document.elementsFromPoint(e.x, e.y), r = nT(t, 2), n = r[0], a = r[1];
  return n ? oT(n) ? a ?? null : n : null;
}
var Bz = 2147483647;
function tO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rO(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tO(Object(r), !0).forEach(function(n) {
      Qi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Di = 2, nO = Di / 2;
function Fz(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function zz(e) {
  return {
    x: e.x - nO,
    y: e.y - nO
  };
}
function Wz(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function Uz(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Di),
    y: Math.min(e.y, window.innerHeight - Di)
  };
}
function aO(e) {
  var t = e.client, r = Uz(Wz(zz(Fz(t))));
  return DOMRect.fromRect({
    x: r.x,
    y: r.y,
    width: Di,
    height: Di
  });
}
function iO(e) {
  var t = e.clientRect;
  return {
    left: "".concat(t.left, "px"),
    top: "".concat(t.top, "px"),
    width: "".concat(t.width, "px"),
    height: "".concat(t.height, "px")
  };
}
function Hz(e) {
  var t = e.client, r = e.clientRect;
  return (
    // is within horizontal bounds
    t.x >= r.x && t.x <= r.x + r.width && // is within vertical bounds
    t.y >= r.y && t.y <= r.y + r.height
  );
}
function Vz(e) {
  var t = e.initial, r = document.createElement("div");
  r.setAttribute(iT, "true");
  var n = aO({
    client: t
  });
  Object.assign(r.style, rO(rO({
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
  }, iO({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: Bz
  })), document.body.appendChild(r);
  var a = na.bind(window, {
    type: "pointermove",
    listener: function(o) {
      var s = {
        x: o.clientX,
        y: o.clientY
      };
      n = aO({
        client: s
      }), Object.assign(r.style, iO({
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
    if (a(), Hz({
      client: s,
      clientRect: n
    })) {
      r.remove();
      return;
    }
    function u() {
      c(), r.remove();
    }
    var c = na.bindAll(window, [
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
function Kz() {
  var e = null;
  function t() {
    return e = null, na.bind(window, {
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
        n = Vz({
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
function Gz(e) {
  if (Array.isArray(e)) return hh(e);
}
function Yz(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Xz() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uT(e) {
  return Gz(e) || Yz(e) || rT(e) || Xz();
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
var Zz = ma(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), Jv = ma(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var t = navigator, r = t.userAgent;
  return r.includes("AppleWebKit") && !r.includes("Chrome");
}), vh = {
  isLeavingWindow: /* @__PURE__ */ Symbol("leaving"),
  isEnteringWindow: /* @__PURE__ */ Symbol("entering")
};
function Jz(e) {
  var t = e.dragLeave;
  return Jv() ? t.hasOwnProperty(vh.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !Jv())
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
  na.bindAll(
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
        !r.isOverWindow && r.enterCount === 0 && (i[vh.isEnteringWindow] = !0), r.isOverWindow = !0, r.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(i) {
        r.enterCount--, r.isOverWindow && r.enterCount === 0 && (i[vh.isLeavingWindow] = !0, r.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function Qz(e) {
  return "nodeName" in e;
}
function eW(e) {
  return Qz(e) && e.ownerDocument !== document;
}
function tW(e) {
  var t = e.dragLeave, r = t.type, n = t.relatedTarget;
  return r !== "dragleave" ? !1 : Jv() ? Jz({
    dragLeave: t
  }) : n == null ? !0 : Zz() ? eW(n) : n instanceof HTMLIFrameElement;
}
function rW(e) {
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
var nW = function(t) {
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
}, Nd = nW(function(e) {
  return e();
}), xo = /* @__PURE__ */ (function() {
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
function aW(e) {
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
      }), xo.schedule(function() {
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
      xo.flush(), Nd.cancel(), i({
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
      Nd(function() {
        xo.flush();
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
      xo.flush(), Nd.cancel(), i({
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
var yh = {
  isActive: !1
};
function cT() {
  return !yh.isActive;
}
function iW(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function oW(e) {
  var t = e.current, r = e.next;
  if (t.length !== r.length)
    return !0;
  for (var n = 0; n < t.length; n++)
    if (t[n].element !== r[n].element)
      return !0;
  return !1;
}
function sW(e) {
  var t = e.event, r = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!cT())
    return;
  var i = uW({
    event: t,
    dragType: r,
    getDropTargetsOver: n
  });
  yh.isActive = !0;
  var o = {
    current: i
  };
  kd({
    event: t,
    current: i.dropTargets
  });
  var s = aW({
    source: r.payload,
    dispatchEvent: a,
    initial: i
  });
  function u(p) {
    var y = oW({
      current: o.current.dropTargets,
      next: p.dropTargets
    });
    o.current = p, y && s.dragUpdate({
      current: o.current
    });
  }
  function c(p) {
    var y = Ka(p), h = oT(p.target) ? sT({
      x: y.clientX,
      y: y.clientY
    }) : p.target, v = n({
      target: h,
      input: y,
      source: r.payload,
      current: o.current.dropTargets
    });
    v.length && (p.preventDefault(), kd({
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
    yh.isActive = !1, d();
  }
  var d = na.bindAll(
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
        tW({
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
        y.preventDefault(), kd({
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
    }].concat(uT(rW({
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
    nativeSetDragImage: iW(t)
  });
}
function kd(e) {
  var t, r = e.event, n = e.current, a = (t = n[0]) === null || t === void 0 ? void 0 : t.dropEffect;
  a != null && r.dataTransfer && (r.dataTransfer.dropEffect = a);
}
function uW(e) {
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
var oO = {
  canStart: cT,
  start: sW
}, mh = /* @__PURE__ */ new Map();
function cW(e) {
  var t = e.typeKey, r = e.mount, n = mh.get(t);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: t,
    unmount: r(),
    usageCount: 1
  };
  return mh.set(t, a), a;
}
function lW(e) {
  var t = cW(e);
  return function() {
    t.usageCount--, !(t.usageCount > 0) && (t.unmount(), mh.delete(e.typeKey));
  };
}
function lT(e, t) {
  var r = t.attribute, n = t.value;
  return e.setAttribute(r, n), function() {
    return e.removeAttribute(r);
  };
}
function sO(e, t) {
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
    t % 2 ? sO(Object(r), !0).forEach(function(n) {
      Qi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Rd(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = fW(e)) || t) {
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
function fW(e, t) {
  if (e) {
    if (typeof e == "string") return uO(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? uO(e, t) : void 0;
  }
}
function uO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ld(e) {
  return e.slice(0).reverse();
}
function dW(e) {
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
    var h = xu(lT(p.element, {
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
    var _ = x.closest(i);
    if (_ == null)
      return w;
    var A = n.get(_);
    if (A == null)
      return w;
    var P = {
      input: O,
      source: g,
      element: A.element
    };
    if (A.canDrop && !A.canDrop(P))
      return u({
        source: g,
        target: A.element.parentElement,
        input: O,
        result: w
      });
    var D = (y = (h = A.getData) === null || h === void 0 ? void 0 : h.call(A, P)) !== null && y !== void 0 ? y : {}, T = (v = (b = A.getDropEffect) === null || b === void 0 ? void 0 : b.call(A, P)) !== null && v !== void 0 ? v : r, $ = {
      data: D,
      element: A.element,
      dropEffect: T,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return u({
      source: g,
      target: A.element.parentElement,
      input: O,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(uT(w), [$])
    });
  }
  function c(p) {
    var y = p.eventName, h = p.payload, v = Rd(h.location.current.dropTargets), b;
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
      })), b = /* @__PURE__ */ new Set(), g = Rd(h.location.previous.dropTargets), x;
      try {
        for (g.s(); !(x = g.n()).done; ) {
          var O, m = x.value;
          b.add(m.element);
          var w = n.get(m.element), _ = v.has(m.element), A = mr(mr({}, h), {}, {
            self: m
          });
          if (w == null || (O = w.onDropTargetChange) === null || O === void 0 || O.call(w, A), !_) {
            var P;
            w == null || (P = w.onDragLeave) === null || P === void 0 || P.call(w, A);
          }
        }
      } catch (R) {
        g.e(R);
      } finally {
        g.f();
      }
      var D = Rd(h.location.current.dropTargets), T;
      try {
        for (D.s(); !(T = D.n()).done; ) {
          var $, M, j = T.value;
          if (!b.has(j.element)) {
            var I = mr(mr({}, h), {}, {
              self: j
            }), N = n.get(j.element);
            N == null || ($ = N.onDropTargetChange) === null || $ === void 0 || $.call(N, I), N == null || (M = N.onDragEnter) === null || M === void 0 || M.call(N, I);
          }
        }
      } catch (R) {
        D.e(R);
      } finally {
        D.f();
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
    for (var x = Ld(b), O = Ld(g), m = [], w = 0; w < x.length; w++) {
      var _, A = x[w], P = O[w];
      if (P != null) {
        m.push(P);
        continue;
      }
      var D = m[w - 1], T = x[w - 1];
      if (D?.element !== T?.element)
        break;
      var $ = n.get(A.element);
      if (!$)
        break;
      var M = {
        input: v,
        source: y,
        element: $.element
      };
      if ($.canDrop && !$.canDrop(M) || !((_ = $.getIsSticky) !== null && _ !== void 0 && _.call($, M)))
        break;
      m.push(mr(mr({}, A), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return Ld(m);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: d,
    dispatchEvent: f
  };
}
function pW(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!r) {
    if (Array.isArray(e) || (r = hW(e)) || t) {
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
function hW(e, t) {
  if (e) {
    if (typeof e == "string") return cO(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? cO(e, t) : void 0;
  }
}
function cO(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lO(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vW(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lO(Object(r), !0).forEach(function(n) {
      Qi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lO(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yW() {
  var e = /* @__PURE__ */ new Set(), t = null;
  function r(i) {
    t && (!i.canMonitor || i.canMonitor(t.canMonitorArgs)) && t.active.add(i);
  }
  function n(i) {
    var o = vW({}, i);
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
      var u = pW(e), c;
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
function mW(e) {
  var t = e.typeKey, r = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, i = e.defaultDropEffect, o = yW(), s = dW({
    typeKey: t,
    defaultDropEffect: i
  });
  function u(f) {
    n?.(f), s.dispatchEvent(f), o.dispatchEvent(f), a?.(f);
  }
  function c(f) {
    var d = f.event, p = f.dragType;
    oO.start({
      event: d,
      dragType: p,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: u
    });
  }
  function l() {
    function f() {
      var d = {
        canStart: oO.canStart,
        start: c
      };
      return r(d);
    }
    return lW({
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
var gW = ma(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), bW = "pdnd:android-fallback", fO = "text/plain", xW = "text/uri-list", wW = "application/vnd.pdnd", Ni = /* @__PURE__ */ new WeakMap();
function OW(e) {
  return Ni.set(e.element, e), function() {
    Ni.delete(e.element);
  };
}
var dO = Kz(), Qv = mW({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(t) {
    return xu(dO.bindEvents(), na.bind(document, {
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
          var f = Ni.get(l);
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
            var y = sT({
              x: d.clientX,
              y: d.clientY
            });
            if (!f.dragHandle.contains(y))
              return n.preventDefault(), null;
          }
          var h = (i = (o = f.getInitialDataForExternal) === null || o === void 0 ? void 0 : o.call(f, p)) !== null && i !== void 0 ? i : null;
          if (h)
            for (var v = 0, b = Object.entries(h); v < b.length; v++) {
              var g = nT(b[v], 2), x = g[0], O = g[1];
              n.dataTransfer.setData(x, O ?? "");
            }
          gW() && !n.dataTransfer.types.includes(fO) && !n.dataTransfer.types.includes(xW) && n.dataTransfer.setData(fO, bW), n.dataTransfer.setData(wW, "");
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
    (r = Ni.get(i.source.element)) === null || r === void 0 || (n = r[a]) === null || n === void 0 || n.call(
      r,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      i
    );
  },
  onPostDispatch: dO.getOnPostDispatch()
}), fT = Qv.dropTarget, SW = Qv.monitor;
function _W(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var t = Ni.get(e.element);
    t && console.warn("You have already registered a `draggable` on the same element", {
      existing: t,
      proposed: e
    });
  }
  var r = xu(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    Qv.registerUsage(),
    OW(e),
    lT(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return ma(r);
}
function AW(e) {
  const t = /* @__PURE__ */ new Set();
  return xu(
    SW({
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
      } : _W({
        element: r,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: i ?? void 0
      });
    },
    registerDroppable(r, { id: n }) {
      return fT({
        element: r,
        getData: ({ input: a, element: i }) => tT(
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
const dT = zt(null);
function ey() {
  return pt(dT);
}
function PW({ driver: e, children: t }) {
  const r = Me(e), n = He(() => ({
    driver: r.current
  }), []);
  return S(dT.Provider, {
    value: n,
    children: t
  });
}
function TW(e) {
  const t = ey(), { ref: r, payload: n, disabled: a, handleRef: i } = e, o = n.data, s = n.id + "|" + (o?.currentParentId ?? "null");
  Le(() => {
    if (r.current && !(!t || a))
      return t.driver.registerDraggable(r.current, {
        payload: n,
        disabled: a,
        handle: i?.current ?? null
      });
  }, [t, r, s, a, i, n]);
}
function _7(e) {
  const t = ey(), r = e?.ref, n = e?.id, a = e?.accepts;
  Le(() => {
    if (r?.current && !(!t || !n || !a))
      return t.driver.registerDroppable(r.current, { id: n, accepts: a });
  }, [t, r, n, a]);
}
function EW(e) {
  const t = ey();
  Le(
    () => t ? t.driver.subscribe(e) : void 0,
    [t, e]
  );
}
function CW({ otherActions: e, open: t, setOpen: r, disabled: n }) {
  return S(cS, {
    items: e.map((a) => "type" in a && a.type === "separator" ? a : {
      ...a,
      type: "item"
    }),
    open: t,
    onOpenChange: r,
    children: S(_r, {
      icon: $O,
      label: "Actions",
      hideLabel: !0,
      variant: "ghost",
      pressed: t,
      size: "sm",
      disabled: n
    })
  });
}
function jW({ item: e, counter: t, isActive: r, sortable: n, collapsible: a = !1, isExpanded: i = !1, onToggleExpanded: o = () => {
}, children: s, open: u, setOpen: c, isHovered: l, setIsHovered: f }) {
  const d = Pr(), { label: p, onClick: y, icon: h, disabled: v, otherActions: b } = e, x = b && b.length > 0 && (l || u), O = t && !x, m = n && (l || u);
  return V("div", {
    className: "flex w-full min-w-0 items-center",
    children: [a && S(_r, {
      compact: !0,
      size: "sm",
      variant: "ghost",
      onClick: (w) => {
        w.stopPropagation(), o?.(e.id);
      },
      label: d.actions.toggle,
      hideLabel: !0,
      className: J("text-f1-icon transition-all", !i && "-rotate-90"),
      icon: _E
    }), V("div", {
      className: J(IO("focus:border-f1-border-focus"), "relative flex h-[36px] min-w-0 flex-grow items-center gap-1 rounded-[10px] border border-solid border-transparent px-1.5 text-sm transition-colors", r && "bg-f1-background-selected", y && !v && "cursor-pointer hover:bg-f1-background-hover", v && "cursor-not-allowed opacity-30"),
      "data-active": r || void 0,
      onClick: v ? void 0 : () => y?.(e.id),
      onMouseEnter: () => f(!0),
      onMouseLeave: () => f(!1),
      children: [(n || h) && S("div", {
        className: "absolute left-1.5 top-1/2 -translate-y-1/2",
        children: S(Ra, {
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
              children: S(lt, {
                icon: AE,
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
            children: S(lt, {
              icon: h,
              size: "md"
            })
          }, "icon")
        })
      }), S(on, {
        lines: 1,
        className: J("flex-grow text-[14px] font-medium text-f1-foreground transition-all", m || h ? "pl-7" : "pl-0"),
        children: p
      }), S(Ra, {
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
          children: S(Ra, {
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
              children: S(PE, {
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
              children: S(CW, {
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
function Ga({ item: e, counter: t, isActive: r, collapsible: n = !1, isExpanded: a = !1, onToggleExpanded: i = () => {
}, sortable: o, children: s, onDragOver: u, onDragLeave: c, onDrop: l, canDropInside: f = !1, currentParentId: d = null, justDropped: p = !1 }) {
  const [y, h] = he(!1), [v, b] = he(!1), g = Me(null), [x, O] = he(null), [m, w] = he(!1), _ = Me(null), A = He(() => ({
    kind: "toc-item",
    id: e.id,
    data: {
      item: e,
      currentParentId: d
    }
  }), [e.id, d, e]);
  return TW({
    ref: g,
    payload: A,
    disabled: !o
  }), Le(() => {
    if (!(!g.current || !o))
      return fT({
        element: g.current,
        canDrop: ({ source: P }) => {
          const D = P.data;
          return D.kind === "toc-item" && D.id !== e.id;
        },
        getData: ({ input: P, element: D }) => {
          const T = D.getBoundingClientRect(), M = P.clientY - T.top, I = T.height * 0.6;
          return f && M > I ? {
            type: "toc-item-target",
            id: e.id,
            position: "inside"
          } : tT({
            type: "toc-item-target",
            id: e.id
          }, {
            input: P,
            element: D,
            allowedEdges: ["top", "bottom"]
          });
        },
        onDragEnter: ({ source: P }) => {
          if (P.data.id === e.id) {
            O(null), w(!1), _.current = null;
            return;
          }
        },
        onDrag: ({ self: P, source: D }) => {
          if (D.data.id === e.id) {
            O(null), w(!1), _.current = null;
            return;
          }
          const $ = P.data, M = Zw(P.data);
          if ($.position === "inside") {
            const j = _.current;
            (!j || !j.isInside || j.edge !== null) && (w(!0), O(null), _.current = {
              edge: null,
              isInside: !0
            }, u?.(e.id, "inside"));
          } else if (M && (M === "top" || M === "bottom")) {
            const j = M === "top" ? "before" : "after", I = _.current;
            !I || I.edge !== M || I.isInside !== !1 ? (O(M), w(!1), _.current = {
              edge: M,
              isInside: !1,
              lastReportTime: Date.now()
            }, u?.(e.id, j)) : Date.now() - (I.lastReportTime || 0) > 50 && (u?.(e.id, j), _.current = {
              ...I,
              lastReportTime: Date.now()
            });
          } else if (!M) {
            const j = _.current;
            if (j?.edge) {
              const I = j.edge === "top" ? "before" : "after";
              Date.now() - (j.lastReportTime || 0) > 50 && (u?.(e.id, I), _.current = {
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
          const D = P.data;
          let T = "after";
          D.position === "inside" ? T = "inside" : T = Zw(P.data) === "top" ? "before" : "after", O(null), w(!1), l && l(e.id, T);
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
    children: S(jW, {
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
function MW({ item: e, children: t, isActive: r, isExpanded: n, onToggleExpanded: a, sortable: i, hideChildrenCounter: o, canDropInside: s = !1, onDragOver: u, onDragLeave: c, onDrop: l, currentParentId: f, draggedItemId: d }) {
  const p = TE();
  return V(EE, {
    open: n,
    onOpenChange: (y) => {
      y !== n && a?.(e.id);
    },
    children: [S(Ga, {
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
    }), S(CE, {
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
function $W({ item: e, children: t, isActive: r, sortable: n, hideChildrenCounter: a, canDropInside: i = !1, onDragOver: o, onDragLeave: s, onDrop: u, currentParentId: c, draggedItemId: l }) {
  return V(ct, {
    children: [S(Ga, {
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
function $a({ item: e, children: t, isActive: r, collapsible: n, isExpanded: a, onToggleExpanded: i, sortable: o, hideChildrenCounter: s, canDropInside: u = !1, onDragOver: c, onDragLeave: l, onDrop: f, currentParentId: d, draggedItemId: p }) {
  return n ? S(MW, {
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
  }) : S($W, {
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
function IW(e, t) {
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
function pO(e, t) {
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
function gt(e, t) {
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
function pT(e, t) {
  return e.map((r) => {
    if (r.id === t)
      return null;
    if (r.children) {
      const n = pT(r.children, t);
      return {
        ...r,
        children: n.length > 0 ? n : void 0
      };
    }
    return r;
  }).filter(Boolean);
}
function DW(e, t, r, n) {
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
function hT(e, t, r) {
  if (r === null) return !1;
  if (r === t) return !0;
  if (!gt(e, t)) return !1;
  function a(o, s, u) {
    for (const c of o)
      if (c.id === u || c.children && a(c.children, s, u))
        return !0;
    return !1;
  }
  const i = gt(e, t);
  return i?.item.children ? a(i.item.children, t, r) : !1;
}
function bn(e) {
  return e.map((t) => ({
    id: t.id,
    ...t.children && { children: bn(t.children) }
  }));
}
function vT(e, t, r) {
  return e.map((n) => n.id === t ? r : n.children ? {
    ...n,
    children: vT(n.children, t, r)
  } : n);
}
function NW(e, t, r, n) {
  const a = gt(e, t);
  if (!a) return n;
  let i = n;
  if (r !== null) {
    if (gt(e, r)) {
      const s = a.parentPath;
      if (s.length > 0 && s[s.length - 1] === r) {
        const u = gt(
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
function yT(e, t, r, n, a, i, o, s, u, c, l, f, d, p, y, h, v, b, g) {
  const x = e.children ? $a : Ga, O = o?.has(e.id) ?? !0, m = f === e.id, w = !!(l && l !== e.id && c && e.children !== void 0 && !hT(c, l, e.id)), _ = !!(l && l !== e.id && m && d === "before"), A = !!(l && l !== e.id && m && d === "after"), P = y === null ? c?.[0]?.id === e.id : !c || !y ? !1 : gt(c, y)?.item.children?.[0]?.id === e.id;
  return V(ct, {
    children: [S(Ra, {
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
    }), x === Ga ? S(Ga, {
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
      onDragOver: x === $a ? h : void 0,
      onDragLeave: x === $a ? v : void 0,
      onDrop: x === $a ? b : void 0,
      currentParentId: y,
      draggedItemId: l,
      children: e.children && (x === $a || O) && V("div", {
        className: J("flex flex-col", m && d === "inside" && w && "rounded-md bg-f1-background-hover/20 p-1"),
        children: [e.children.map((D) => yT(D, t, r + 1, n, a, i, o, s, u, c, l, f, d, t ? p : void 0, e.id, h, v, b, g)), m && d === "inside" && w && (!O || e.children.length === 0) && S("div", {
          className: "flex h-9 items-center justify-center rounded-md bg-f1-background-hover/30 text-xs text-f1-foreground-secondary",
          children: "Drop here"
        })]
      })
    }, e.id), S(Ra, {
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
function kW({ title: e, items: t, className: r, activeItem: n, collapsible: a = !1, sortable: i = !1, showSearchBox: o = !1, searchPlaceholder: s, onReorder: u, hideChildrenCounter: c = !1, scrollable: l = !0 }) {
  const f = Pr(), [d, p] = he(""), y = (E) => {
    p(E);
  }, h = He(() => pO(t, d), [t, d]), [v, b] = he(IW(t, n)), [g, x] = he(t);
  Le(() => {
    x(t);
  }, [t]);
  const O = Me(null), m = tt((E) => {
    b((Y) => {
      const F = new Set(Y);
      return F.has(E) ? F.delete(E) : F.add(E), F;
    });
  }, [b]), w = tt((E, Y) => {
    const F = vT(g, E, Y);
    x(F), u && u(bn(F));
  }, [g, u]), _ = tt((E) => (Y) => {
    const F = gt(g, E);
    if (F) {
      const ae = {
        ...F.item,
        children: Y
      };
      w(E, ae);
    } else
      E == null && (x(Y), u && u(bn(Y)));
  }, [g, w, u, bn]), A = tt((E, Y, F) => {
    if (hT(g, E, Y))
      return;
    const ae = gt(g, E);
    if (!ae) return;
    const ce = ae.item;
    let oe = pT(g, E);
    const Se = NW(g, E, Y, F);
    oe = DW(oe, ce, Y, Se), x(oe), Y !== null && b((Te) => {
      const me = new Set(Te);
      return me.add(Y), me;
    }), u && u(bn(oe));
  }, [g, u, bn]), P = He(() => pO(g, d), [g, d]), [D, T] = he(null), [$, M] = he(null), [j, I] = he(null), [N, R] = he(null), L = Me(null), z = Me(!1), k = Me(null), B = Me(null), q = Me(null), H = Me(null), X = Me(null), te = Me(0), ne = Me(0), ee = Me(!1), Q = Me(null), U = tt((E, Y) => {
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
        M(me.itemId), I(me.position), k.current = me.itemId, B.current = me.position;
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
  const K = tt(() => {
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
      X.current = null, te.current = 0, M(null), I(null), k.current = null, B.current = null, q.current = null;
    }, E);
  }, [$, j, i, P, h]), Z = tt((E, Y) => {
    z.current = !0;
    const F = L.current;
    if (ee.current = !1, M(null), I(null), k.current = null, B.current = null, q.current && (clearTimeout(q.current), q.current = null), !F || F === E) {
      L.current = null, T(null), M(null), I(null);
      return;
    }
    const ae = gt(g, E), ce = gt(g, F);
    if (ae && ce) {
      let oe = null, Se = 0;
      if (Y === "inside")
        oe = E, Se = ae.item.children?.length ?? 0;
      else if (Y === "before")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E);
        else {
          const ye = gt(g, oe);
          ye && (Se = ye.item.children?.findIndex((qe) => qe.id === E) ?? 0);
        }
      else if (Y === "after")
        if (ae.parentPath.length > 0 ? oe = ae.parentPath[ae.parentPath.length - 1] : oe = null, oe === null)
          Se = g.findIndex((ye) => ye.id === E) + 1;
        else {
          const ye = gt(g, oe);
          ye && (Se = (ye.item.children?.findIndex((qe) => qe.id === E) ?? 0) + 1);
        }
      const Te = ce.parentPath.length > 0 ? ce.parentPath[ce.parentPath.length - 1] : null;
      let me = -1;
      if (Te === null)
        me = g.findIndex((ye) => ye.id === F);
      else {
        const ye = gt(g, Te);
        ye && (me = ye.item.children?.findIndex((qe) => qe.id === F) ?? -1);
      }
      (oe !== Te || oe === Te && me !== Se) && (R(F), A(F, oe, Se), setTimeout(() => {
        R(null);
      }, 800));
    }
    ee.current = !1, L.current = null, z.current = !0, X.current = null, te.current = 0, ne.current = 0, Q.current && (clearTimeout(Q.current), Q.current = null), T(null), setTimeout(() => {
      z.current = !1;
    }, 600);
  }, [g, A]);
  return EW(tt((E) => {
    if (E.phase === "start" && E.source.kind === "toc-item")
      q.current && (clearTimeout(q.current), q.current = null), Q.current && (clearTimeout(Q.current), Q.current = null), L.current = E.source.id, z.current = !1, H.current = null, T(E.source.id);
    else if (E.phase === "cancel")
      ee.current = !1, z.current = !1, H.current = null, X.current = null, te.current = 0, ne.current = 0, q.current && (clearTimeout(q.current), q.current = null), Q.current && (clearTimeout(Q.current), Q.current = null), M(null), I(null), k.current = null, B.current = null, T(null), L.current = null;
    else if (E.phase === "drop") {
      q.current && (clearTimeout(q.current), q.current = null), ee.current = !1;
      const Y = k.current || H.current?.itemId, F = B.current || H.current?.position;
      !z.current && Y && F && L.current && L.current !== Y && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!z.current) {
            const ce = k.current || H.current?.itemId, oe = B.current || H.current?.position;
            ce && oe && Z(ce, oe);
          }
        });
      }), Q.current && (clearTimeout(Q.current), Q.current = null);
      const ae = setTimeout(() => {
        z.current || (H.current = null, X.current = null, te.current = 0, ne.current = 0, M(null), I(null), k.current = null, B.current = null, T(null), L.current = null), Q.current === ae && (Q.current = null);
      }, 500);
      Q.current = ae;
    }
  }, [Z])), V("nav", {
    className: J("w-[248px]", l ? "overflow-y-auto" : "overflow-hidden", r),
    "aria-label": e,
    ref: O,
    children: [(e || o) && V("div", {
      className: J("bg-f1-background pb-2 pl-5 pr-4 pt-5", l && "sticky top-0 z-10"),
      children: [o && S("div", {
        className: "mb-4",
        children: S(jE, {
          placeholder: s ?? f.toc.search,
          onChange: y,
          value: d,
          clearable: !0
        })
      }), e && S(on, {
        lines: 1,
        tag: "h2",
        className: "text-[14px] font-medium text-f1-foreground-secondary",
        children: e
      })]
    }), S(xh, {
      className: "h-full min-h-0",
      children: S("div", {
        className: "px-3 pb-2",
        children: S("div", {
          className: "flex flex-col gap-0.5",
          children: (i ? P : h).map((E) => yT(E, i, 0, n, a, c, v, m, A, g, D, $, j, i ? _ : void 0, null, U, K, Z, N))
        })
      })
    })]
  });
}
function RW(e) {
  const t = Me(/* @__PURE__ */ Symbol("f0-table-of-contents")), r = He(() => AW(t.current), []);
  return S(PW, {
    driver: r,
    children: S(kW, {
      ...e
    })
  });
}
const A7 = ki("F0TableOfContent", RW), LW = ze(function({ bare: t = !1, ...r }, n) {
  return S("div", {
    ref: n,
    role: "separator",
    className: J("-mx-4 h-[1px]", t ? void 0 : "my-4"),
    style: {
      backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
    },
    ...r
  });
}), qW = ({ text: e, isCompleted: t }) => V("div", {
  className: "flex flex-row items-center gap-2",
  children: [S(lt, {
    className: t ? "text-f1-icon-positive" : "text-f1-icon-secondary",
    icon: t ? Ts : MO,
    size: "md"
  }), S("span", {
    className: t ? "font-medium text-f1-foreground" : "text-f1-foreground-secondary",
    children: e
  })]
}), BW = ({ title: e, items: t }) => V("div", {
  className: "px-4 pb-2",
  children: [S("div", {
    className: "mb-2 text-sm text-f1-foreground-secondary",
    children: e
  }), S("div", {
    className: "flex flex-col gap-2",
    children: t.map((r) => S(qW, {
      text: r.text,
      isCompleted: r.isCompleted ?? !1
    }, r.text))
  })]
}), FW = ({ onClose: e, success: t, successButtonOnClick: r, successButtonLabel: n, closeLabel: a }) => {
  const i = t && n && r, o = (s = !1) => V(ct, {
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
  return V(ZP, {
    className: "px-4 pb-4 pt-2 [&_div]:w-full",
    children: [S("div", {
      className: "hidden sm:flex sm:flex-row sm:justify-between sm:gap-3",
      children: o()
    }), S("div", {
      className: "flex flex-col-reverse gap-2 sm:hidden",
      children: o(!0)
    })]
  });
}, mT = ze(({ open: e, onClose: t, success: r = !0, errorMessage: n, successMessage: a, nextSteps: i, closeLabel: o, portalContainer: s }, u) => {
  const [c, l] = he(!1), f = tt(() => {
    l(!0), setTimeout(() => {
      t?.(), l(!1);
    }, 200);
  }, [t]);
  return S(ME, {
    open: e && !c,
    onOpenChange: (d) => !d && f?.(),
    children: V($E, {
      ref: u,
      className: "bottom-3 top-auto max-w-[400px] translate-y-0 sm:bottom-auto sm:top-[50%] sm:translate-y-[-50%]",
      container: s,
      children: [V(JP, {
        className: `flex flex-col items-start gap-4 px-4 ${r ? "pt-5" : "py-5"}`,
        children: [S(Vj, {
          type: r ? "positive" : "critical",
          size: "lg"
        }), V("div", {
          className: "flex flex-col gap-0.5",
          children: [S(IE, {
            className: "text-xl font-semibold sm:text-lg",
            children: r ? a?.title : n?.title
          }), S(XP, {
            className: "text-lg sm:text-base",
            children: r ? a?.description : n?.description
          })]
        })]
      }), r && i && i.items?.length > 0 ? V(ct, {
        children: [S(LW, {}), S(BW, {
          title: i.title,
          items: i.items
        })]
      }) : null, S(FW, {
        onClose: f,
        success: r,
        successButtonLabel: a.buttonLabel,
        successButtonOnClick: a.buttonOnClick,
        closeLabel: o
      })]
    })
  });
});
mT.displayName = "UpsellRequestResponseDialog";
var zW = "Label", gT = fe.forwardRef((e, t) => /* @__PURE__ */ S(
  Oh.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
gT.displayName = zW;
var bT = gT;
const WW = fe.forwardRef(({ className: e, ...t }, r) => S(bT, {
  ref: r,
  className: J("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", e),
  ...t
}));
WW.displayName = bT.displayName;
function P7({ label: e, showIcon: t = !0, onRequest: r, showConfirmation: n = !0, loading: a, errorMessage: i, successMessage: o, loadingState: s, nextSteps: u, closeLabel: c, variant: l = "promote", onModalStateChange: f, portalContainer: d, ...p }) {
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
  return V(ct, {
    children: [S(Gt, {
      variant: l,
      label: m,
      icon: t ? DE : void 0,
      onClick: g,
      loading: O,
      ...p
    }), n && y && S(mT, {
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
const UW = ze(function({ title: t, subtitle: r, mediaUrl: n, primaryAction: a, secondaryAction: i, onClose: o, isLoading: s = !1, children: u, variant: c = "default" }, l) {
  const f = n?.includes(".mp4"), [d, p] = he(!1), y = () => {
    o && o(), p(!0);
  };
  return s ? S(xT, {
    ref: l
  }) : d ? null : V("div", {
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
    }), V("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [V("div", {
        className: J("flex w-full flex-col gap-1", c === "default" ? "sm:max-w-lg" : void 0),
        children: [S("h3", {
          className: "font-bold text-xl text-f1-foreground",
          children: t
        }), r && S("p", {
          className: "text-base text-f1-foreground-secondary",
          children: r
        })]
      }), V("div", {
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
        icon: kO,
        size: "sm",
        hideLabel: !0,
        onClick: y,
        label: "Close"
      })
    })]
  });
}), xT = ze(function(t, r) {
  return V("div", {
    ref: r,
    className: "bg-white relative flex w-full flex-col gap-4 rounded-xl border border-f1-border-secondary shadow-md sm:flex-row sm:gap-5",
    role: "status",
    "aria-busy": "true",
    "aria-live": "polite",
    ...t,
    children: [S("div", {
      className: "aspect-video w-full flex-shrink-0 overflow-hidden rounded-xl px-1 pb-0 pt-1 sm:max-w-80 sm:py-1 sm:pl-1",
      children: S(Pt, {
        className: "h-full w-full rounded-lg"
      })
    }), V("div", {
      className: "flex flex-col justify-center gap-5 px-3 pb-3 sm:py-3 sm:pl-0 sm:pr-3",
      children: [V("div", {
        className: "flex w-full flex-col gap-1 sm:max-w-lg",
        children: [S(Pt, {
          className: "h-7 w-3/4"
        }), S(Pt, {
          className: "h-4 w-full"
        }), S(Pt, {
          className: "h-4 w-2/3"
        })]
      }), V("div", {
        className: "flex gap-3",
        children: [S(Pt, {
          className: "h-9 w-32"
        }), S(Pt, {
          className: "h-9 w-24"
        })]
      })]
    }), S("div", {
      className: "absolute right-2 top-2 z-10",
      children: S(Pt, {
        className: "h-8 w-8 rounded-md"
      })
    })]
  });
}), HW = DO(UW, xT);
HW.displayName = "BaseBanner";
const wT = {
  get: () => ({}),
  set: () => Promise.resolve()
}, OT = zt(wT), T7 = ({ children: e, handler: t }) => S(OT.Provider, {
  value: t ?? wT,
  children: e
}), E7 = () => {
  const e = pt(OT);
  if (!e)
    throw new Error("useDataCollectionStorage must be used within a DataCollectionStorageProvider");
  return e;
};
export {
  kw as $,
  Ft as A,
  $r as B,
  XW as C,
  cS as D,
  Ki as E,
  pa as F,
  Er as G,
  Yi as H,
  mu as I,
  qv as J,
  Lv as K,
  ZW as L,
  at as M,
  Bt as N,
  Rv as O,
  yu as P,
  RP as Q,
  s7 as R,
  MA as S,
  u7 as T,
  c7 as U,
  l7 as V,
  f7 as W,
  vr as X,
  yr as Y,
  d7 as Z,
  S9 as _,
  Yh as a,
  tT as a$,
  dh as a0,
  LP as a1,
  Vj as a2,
  A7 as a3,
  Zv as a4,
  mT as a5,
  Wv as a6,
  Kv as a7,
  WW as a8,
  Gv as a9,
  _7 as aA,
  n9 as aB,
  je as aC,
  Gi as aD,
  _3 as aE,
  YL as aF,
  VS as aG,
  ou as aH,
  au as aI,
  SL as aJ,
  h7 as aK,
  a2 as aL,
  QW as aM,
  r7 as aN,
  n7 as aO,
  t_ as aP,
  Jh as aQ,
  e7 as aR,
  v7 as aS,
  JW as aT,
  Va as aU,
  jz as aV,
  E7 as aW,
  Uv as aX,
  Hv as aY,
  vz as aZ,
  fT as a_,
  P7 as aa,
  HW as ab,
  o7 as ac,
  T7 as ad,
  YW as ae,
  a7 as af,
  pS as ag,
  m7 as ah,
  g7 as ai,
  b7 as aj,
  S7 as ak,
  O7 as al,
  w7 as am,
  ph as an,
  Yv as ao,
  UP as ap,
  Xv as aq,
  KP as ar,
  GP as as,
  HP as at,
  VP as au,
  x7 as av,
  AW as aw,
  PW as ax,
  EW as ay,
  TW as az,
  pe as b,
  Zw as b0,
  xz as b1,
  SW as b2,
  y7 as b3,
  JP as b4,
  XP as b5,
  ZP as b6,
  Vv as b7,
  T9 as b8,
  p7 as b9,
  LW as ba,
  t7 as bb,
  Z8 as bc,
  hr as bd,
  Ga as be,
  $a as bf,
  tn as c,
  Ve as d,
  wt as e,
  ie as f,
  Re as g,
  i7 as h,
  en as i,
  ue as j,
  Jr as k,
  le as l,
  Ct as m,
  Vs as n,
  Yo as o,
  vu as p,
  Xi as q,
  Ir as r,
  Tv as s,
  ha as t,
  un as u,
  Bv as v,
  Ji as w,
  da as x,
  Zi as y,
  gu as z
};
